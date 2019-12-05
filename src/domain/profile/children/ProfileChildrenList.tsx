import * as React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './profileChildrenList.module.scss';
// eslint-disable-next-line max-len
import { profileQuery_guardians_edges_node_children_edges_node as ChildType } from '../../api/generatedTypes/profileQuery';
import ProfileChild from './ProfileChild';

interface ProfileChildrenListProps {
  children: ChildType[];
}

const ProfileChildrenList: React.FunctionComponent<
  ProfileChildrenListProps
> = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.childrenList}>
      {children.length ? (
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
  );
};

export default ProfileChildrenList;
