import React, { FunctionComponent, Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';
import { toast } from 'react-toastify';
import * as Sentry from '@sentry/browser';
import { useMatomo } from '@datapunt/matomo-tracker-react';

import styles from './profileChildrenList.module.scss';
import ProfileChild from './child/ProfileChild';
import { profileChildrenSelector } from '../state/ProfileSelectors';
import Icon from '../../../common/components/icon/Icon';
import addIcon from '../../../assets/icons/svg/delete.svg';
import AddNewChildFormModal from '../../registration/modal/AddNewChildFormModal';
import { addChildMutation } from '../../child/mutation/ChildMutation';
import { getSupportedChildData } from '../../child/ChildUtils';
import LoadingSpinner from '../../../common/components/spinner/LoadingSpinner';
import profileQuery from '../queries/ProfileQuery';
import Button from '../../../common/components/button/Button';
import { getProjectsFromProfileQuery } from '../ProfileUtil';

const ProfileChildrenList: FunctionComponent = () => {
  const { t } = useTranslation();
  const children = useSelector(profileChildrenSelector);
  const [isOpen, setIsOpen] = useState(false);
  const [addChild, { loading: mutationLoading }] = useMutation(
    addChildMutation,
    {
      refetchQueries: [{ query: profileQuery }],
    }
  );
  const { trackEvent } = useMatomo();

  if (mutationLoading) return <LoadingSpinner isLoading={true} />;

  return (
    <>
      <div className={styles.heading}>
        <h2>{t('profile.heading')}</h2>
        {isOpen && (
          <AddNewChildFormModal
            setIsOpen={setIsOpen}
            addChild={(payload) => {
              const supportedChildData = getSupportedChildData(payload);
              addChild({ variables: { input: supportedChildData } })
                .then(() => {
                  trackEvent({ category: 'action', action: 'Add child' });
                })
                .catch((error) => {
                  toast(t('profile.addChildMutation.errorMessage'), {
                    type: toast.TYPE.ERROR,
                  });
                  Sentry.captureException(error);
                });
            }}
          />
        )}
      </div>

      <div className={styles.childrenList}>
        {children ? (
          <>
            {getProjectsFromProfileQuery(children).map((project) => (
              <Fragment key={project}>
                <div className={styles.thisYearPartner}>
                  <h3>{project} TODO: Project name</h3>
                </div>
                {children.edges.map((childEdge) =>
                  childEdge?.node?.id &&
                  childEdge.node.project.year === project ? (
                    <ProfileChild
                      key={childEdge.node.id}
                      child={childEdge.node}
                    />
                  ) : null
                )}
              </Fragment>
            ))}
          </>
        ) : (
          <div className={styles.noChild}>
            <p>{t('profile.children.noChild.text')}</p>
          </div>
        )}
      </div>
      <Button
        aria-label={t('child.form.modal.add.label')}
        className={styles.addChild}
        onClick={() => setIsOpen(true)}
      >
        <Icon
          src={addIcon}
          alt={t('child.form.modal.add.label')}
          className={styles.addChildIcon}
        />
        <span>{t('child.form.modal.add.label')}</span>
      </Button>
    </>
  );
};

export default ProfileChildrenList;
