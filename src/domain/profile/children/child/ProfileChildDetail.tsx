import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router';

import styles from './profileChildDetail.module.scss';
import PageWrapper from '../../../app/layout/PageWrapper';
import backIcon from '../../../../assets/icons/svg/arrowLeft.svg';
import personIcon from '../../../../assets/icons/svg/person.svg';
import childIcon from '../../../../assets/icons/svg/childFaceHappy.svg';
import birthdateIcon from '../../../../assets/icons/svg/birthdayCake.svg';
import settingIcon from '../../../../assets/icons/svg/gear.svg';
import Icon from '../../../../common/components/icon/Icon';
import { formatTime, newMoment } from '../../../../common/time/utils';
import { DEFAULT_DATE_FORMAT } from '../../../../common/time/TimeConstants';
import {
  profileSelector,
  childByIdSelector,
} from '../../state/ProfileSelectors';
import { StoreState } from '../../../app/types/AppTypes';
import ProfileNoEvent from '../../events/ProfileNoEvent';
import Button from '../../../../common/components/button/Button';

const ProfileChildDetail: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const params = useParams<{ childId: string }>();
  const guardian = useSelector(profileSelector);
  const history = useHistory();

  const childEdge = useSelector((state: StoreState) =>
    childByIdSelector(state, params.childId)
  );

  const child = childEdge?.node;

  return (
    <PageWrapper
      className={styles.wrapper}
      title={t('profile.child.detail.page.title')}
    >
      <div className={styles.childDetailWrapper} role="main">
        <button
          aria-label={t('common.backButton.label')}
          className={styles.backButton}
          onClick={() => history.goBack()}
        >
          <Icon
            src={backIcon}
            className={styles.backButtonIcon}
            alt={t('common.backButton.label')}
          />
        </button>
        <div className={styles.childWrapper}>
          {child ? (
            <div className={styles.childInfo}>
              <div className={styles.childInfoHeadingRow}>
                <div className={styles.childName}>
                  <Icon
                    src={childIcon}
                    className={styles.childIcon}
                    alt={t('profile.child.default.name.text')}
                  />
                  <h1>
                    {child.firstName
                      ? `${child.firstName} ${child.lastName}`
                      : t('profile.child.default.name.text')}
                  </h1>
                </div>
                <Button
                  ariaLabel={t('profile.child.detail.edit.icon.text')}
                  className={styles.editChildInfo}
                >
                  <span>{t('profile.child.detail.edit.icon.text')}</span>
                  <Icon
                    src={settingIcon}
                    className={styles.settingIcon}
                    alt={t('profile.child.detail.edit.icon.alt')}
                  />
                </Button>
              </div>

              <div className={styles.childInfoRow}>
                <Icon
                  src={birthdateIcon}
                  alt={t('profile.child.detail.birthdate')}
                />
                <span>
                  {formatTime(newMoment(child.birthdate), DEFAULT_DATE_FORMAT)}
                </span>
              </div>
              <div className={styles.childInfoRow}>
                <Icon src={personIcon} />
                <span>{`${guardian.firstName} ${guardian.lastName}`}</span>
              </div>
            </div>
          ) : (
            <div className={styles.noChild}>
              <p>{t('profile.children.noChild.text')}</p>
            </div>
          )}
          <div className={styles.eventWrapper}>
            <ProfileNoEvent />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProfileChildDetail;
