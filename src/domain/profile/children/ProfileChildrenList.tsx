import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';
import { toast } from 'react-toastify';
import * as Sentry from '@sentry/browser';

import styles from './profileChildrenList.module.scss';
import ProfileChild from './child/ProfileChild';
import { profileChildrenSelector } from '../state/ProfileSelectors';
import PageWrapper from '../../app/layout/PageWrapper';
import Icon from '../../../common/components/icon/Icon';
import addIcon from '../../../assets/icons/svg/delete.svg';
import AddNewChildFormModal from '../../registration/modal/AddNewChildFormModal';
import addChildMutation from '../../child/mutation/ChildMutation';
import { getSupportedChildData } from '../../child/ChildUtils';
import LoadingSpinner from '../../../common/components/spinner/LoadingSpinner';
const ProfileChildrenList: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const children = useSelector(profileChildrenSelector);
  const [isOpen, setIsOpen] = React.useState(false);
  const [
    addChild,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(addChildMutation, {
    refetchQueries: ['profileQuery'],
  });

  if (mutationLoading) return <LoadingSpinner isLoading={true} />;
  if (mutationError) {
    toast(t('profile.addChildMutation.errorMessage'));
    Sentry.captureException(mutationError);
  }

  return (
    <PageWrapper className={styles.wrapper} title={'profile.heading'}>
      <div className={styles.profileWrapper}>
        <div className={styles.profile}>
          <div className={styles.heading}>
            <h1>{t('profile.heading')}</h1>
            <div className={styles.addChild} onClick={() => setIsOpen(true)}>
              <span>{t('child.form.modal.add.label')}</span>
              <Icon
                src={addIcon}
                alt="Add child icon"
                className={styles.addChildIcon}
              />
            </div>
            {isOpen && (
              <AddNewChildFormModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                addChild={payload => {
                  const supportedChildData = getSupportedChildData(payload);
                  addChild({ variables: { input: supportedChildData } });
                }}
              />
            )}
          </div>

          <div className={styles.childrenList}>
            {children ? (
              <>
                <div className={styles.thisYearPartner}>
                  <p>{t('partners.2020')}</p>
                  {/* TODO: make me dynamic partners after more data came */}
                </div>
                {children.map(child => (
                  <ProfileChild key={child.id} child={child} />
                ))}
              </>
            ) : (
              <div className={styles.noChild}>
                <p>{t('profile.children.noChild.text')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProfileChildrenList;
