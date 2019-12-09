import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import styles from './profileChildrenList.module.scss';
// eslint-disable-next-line max-len
import ProfileChild from './child/ProfileChild';
import { profileChildrenSelector } from '../state/ProfileSelectors';
import PageWrapper from '../../app/layout/PageWrapper';

const ProfileChildrenList: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const children = useSelector(profileChildrenSelector);

  return (
    <PageWrapper className={styles.wrapper} title={'profile.heading'}>
      <div className={styles.profileWrapper}>
        <div className={styles.profile}>
          <h1>{t('profile.heading')}</h1>

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
