import * as React from 'react';

import Button from '../button/Button';
import Icon from '../icon/Icon';
import angleDownIcon from '../../../assets/icons/svg/angleDown.svg';
import styles from './dropdown.module.scss';

interface DropdownOption {
  label: string;
  icon?: string;
  onClick?: () => void;
}

type DropdownOptions = DropdownOption[];

interface DropdownProps {
  options: DropdownOptions;
}

const Dropdown: React.FunctionComponent<DropdownProps> = ({
  children,
  options,
  ...rest
}) => {
  const [isOpen, toggleDropdown] = React.useState(false);
  return (
    <div className={styles.dropdownWrapper} {...rest}>
      <Button
        onClick={() => {
          toggleDropdown(!isOpen);
          options[0].onClick && options[0].onClick();
        }}
      >
        <span>{options[0].label}</span>
        <Icon src={options[0].icon || angleDownIcon} alt="Dropdown icon" />
      </Button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          {/* Not necessary to show dropdown on 1 element only */}
          {options.length > 1 &&
            options.map((option, index) => {
              return (
                <Button
                  className={styles.dropdownContentOption}
                  key={index}
                  onClick={() => {
                    toggleDropdown(!isOpen);
                    option.onClick && option.onClick();
                  }}
                >
                  <span>{option.label}</span>
                  {option.icon && (
                    <Icon src={option.icon} alt="Dropdown option icon" />
                  )}
                </Button>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
