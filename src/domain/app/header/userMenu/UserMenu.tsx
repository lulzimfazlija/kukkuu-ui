import * as React from 'react';

import styles from './userMenu.module.scss';

interface UserMenuOption {
  label: string;
  onClick?: () => void;
}

type UserMenuOptions = UserMenuOption[];
interface UserMenuProps {
  options: UserMenuOptions;
}

const UserMenu: React.FunctionComponent<UserMenuProps> = ({ options }) => {
  return (
    <ul className={styles.userMenu}>
      {options.map((option, index) => {
        return (
          <li key={index} onClick={() => option.onClick && option.onClick()}>
            <button>{option.label}</button>
          </li>
        );
      })}
    </ul>
  );
};

export default UserMenu;
