import * as React from 'react';
import { useHistory } from 'react-router';

// eslint-disable-next-line max-len
import { profileQuery_guardians_edges_node_children_edges_node as ChildType } from '../../api/generatedTypes/profileQuery';
import Icon from '../../../common/components/icon/Icon';
import birthdayIcon from '../../../assets/icons/svg/birthdayCake.svg';
import angleDownIcon from '../../../assets/icons/svg/angleDown.svg';
import childIcon from '../../../assets/icons/svg/childFaceHappy.svg';
import styles from './profileChild.module.scss';
import { formatTime, newMoment } from '../../../common/time/utils';
import { DEFAULT_DATE_FORMAT } from '../../../common/time/TimeConstants';

interface ProfileChildProps {
  child: ChildType;
}

const ProfileChild: React.FunctionComponent<ProfileChildProps> = ({
  child,
}) => {
  const history = useHistory();

  return (
    <div
      className={styles.childWrapper}
      onClick={() => history.push(`/profile/child/${child.id}`)}
    >
      <div className={styles.child}>
        <div className={styles.childIcon}>
          <Icon src={childIcon} alt="Lovely child icon" />
        </div>
        <div className={styles.childInfo}>
          <p>
            {child.firstName} {child.lastName}
          </p>
          <div className={styles.childBirthdate}>
            <Icon src={birthdayIcon} alt="Birthdate cake" />
            <span>
              {formatTime(newMoment(child.birthdate), DEFAULT_DATE_FORMAT)}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.childDetail}>
        <Icon src={angleDownIcon} alt="Navigate to child detail" />
      </div>
    </div>
  );
};

export default ProfileChild;
