import * as React from 'react';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line max-len
import { profileQuery_myProfile_children_edges_node as ChildType } from '../../../api/generatedTypes/profileQuery';
import Icon from '../../../../common/components/icon/Icon';
import birthdayIcon from '../../../../assets/icons/svg/birthdayCake.svg';
import angleDownIcon from '../../../../assets/icons/svg/angleDown.svg';
import childIcon from '../../../../assets/icons/svg/childFaceHappy.svg';
import styles from './profileChild.module.scss';
import { formatTime, newMoment } from '../../../../common/time/utils';
import { DEFAULT_DATE_FORMAT } from '../../../../common/time/TimeConstants';

interface ProfileChildProps {
  child: ChildType;
}

const ProfileChild: React.FunctionComponent<ProfileChildProps> = ({
  child,
}) => {
  const history = useHistory();
  const { t } = useTranslation();
  return (
    <button
      aria-label={t('profile.child.navigateToDetail.buttonLabel')}
      className={styles.childWrapper}
      onClick={() => history.push(`/profile/child/${child.id}`)}
    >
      <div className={styles.child} role="listitem">
        <div className={styles.childIcon}>
          <Icon src={childIcon} alt={t('profile.child.default.name.text')} />
        </div>
        <div className={styles.childInfo}>
          <p>
            {child.firstName
              ? `${child.firstName} ${child.lastName}`
              : t('profile.child.default.name.text')}
          </p>
          <div className={styles.childBirthdate}>
            <Icon
              src={birthdayIcon}
              alt={t('profile.child.detail.birthdate')}
            />
            <span>
              {formatTime(newMoment(child.birthdate), DEFAULT_DATE_FORMAT)}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.childDetail}>
        <Icon
          src={angleDownIcon}
          alt={t('profile.child.navigateToDetail.buttonLabel')}
        />
      </div>
    </button>
  );
};

export default ProfileChild;
