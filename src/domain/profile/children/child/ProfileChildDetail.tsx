import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

import styles from './profileChildDetail.module.scss';
import PageWrapper from '../../../app/layout/PageWrapper';
import backIcon from '../../../../assets/icons/svg/arrowLeft.svg';
import personIcon from '../../../../assets/icons/svg/person.svg';
import childIcon from '../../../../assets/icons/svg/childFaceHappy.svg';
import birthdateIcon from '../../../../assets/icons/svg/birthdayCake.svg';
import phoneIcon from '../../../../assets/icons/svg/mobile.svg';
import Icon from '../../../../common/components/icon/Icon';
import { formatTime, newMoment } from '../../../../common/time/utils';
import { DEFAULT_DATE_FORMAT } from '../../../../common/time/TimeConstants';
import {
  profileSelector,
  childByIdSelector,
} from '../../state/ProfileSelectors';
import { StoreState } from '../../../app/types/AppTypes';
import ProfileNoEvent from '../../events/ProfileNoEvent';

const ProfileChildDetail: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const params = useParams<{ childId: string }>();
  const guardian = useSelector(profileSelector);
  const child = useSelector((state: StoreState) =>
    childByIdSelector(state, params.childId)
  );

  return (
    <PageWrapper
      containerClassName={styles.container}
      className={styles.wrapper}
      title={t('profile.child.detail.page.title')}
    >
      <div className={styles.childDetailWrapper}>
        <div className={styles.childWrapper}>
          <div className={styles.backButton}>
            <Icon src={backIcon} alt="Go back button" />
          </div>
          <div className={styles.childInfoWrapper}>
            <div>
              <Icon
                src={childIcon}
                className={styles.childIcon}
                alt="child icon"
              />
            </div>
            <div className={styles.childAndGuardianInfo}>
              {child && (
                <>
                  <>
                    {child.firstName
                      ? `${child.firstName} ${child.lastName}`
                      : t('profile.child.default.name.text')}
                  </>
                  <>
                    <Icon src={birthdateIcon} alt="birthdate icon" />
                    <span>
                      {formatTime(
                        newMoment(child.birthdate),
                        DEFAULT_DATE_FORMAT
                      )}
                    </span>
                  </>
                </>
              )}
              <>
                <Icon src={personIcon} alt="Person icon" />
                {`${guardian.firstName} ${guardian.lastName}`},{guardian.email}
              </>
              <>
                <Icon src={phoneIcon} alt="Guardian mobile phone" />
                {guardian.phoneNumber}
              </>
            </div>
            <div className={styles.eventWrapper}>
              <ProfileNoEvent />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProfileChildDetail;
