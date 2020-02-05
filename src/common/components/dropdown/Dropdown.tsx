import * as React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../button/Button';
import Icon from '../icon/Icon';
import angleDownIcon from '../../../assets/icons/svg/angleDown.svg';
import styles from './dropdown.module.scss';

interface DropdownOption {
  id: string;
  label: string;
  icon?: string;
  onClick?: () => void;
  skipItem?: boolean;
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
  const { t } = useTranslation();
  const ref = React.useRef<HTMLDivElement>(null);

  const [isOpen, toggleDropdown] = React.useState(false);
  const handleClick = (e: Event) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      toggleDropdown(false);
    }
  };
  React.useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const ariaLabel = isOpen
    ? t('common.menu.closeMenuText')
    : options.length === 1
    ? options[0].label
    : t('common.menu.openMenuText');

  return (
    <div className={styles.dropdownWrapper} {...rest} ref={ref}>
      <Button
        aria-label={ariaLabel}
        aria-expanded={options.length === 1 || isOpen}
        id={options[0].id}
        onClick={() => {
          toggleDropdown(!isOpen);
          options[0].onClick && options[0].onClick();
        }}
      >
        <span>{options[0].label}</span>
        <Icon
          src={options[0].icon ?? angleDownIcon}
          alt={t('navbar.menuButton.label')}
        />
      </Button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          {/* Not necessary to show dropdown on 1 element only */}
          {options.length > 1 &&
            options.map((option, index) => {
              /**
               * If the item is already displayed above
               * the dropDown menu, we don't want to repeat it.
               **/
              if (!option.skipItem || index > 0)
                return (
                  <Button
                    id={option.id}
                    className={styles.dropdownContentOption}
                    key={index}
                    onClick={() => {
                      toggleDropdown(!isOpen);
                      option.onClick && option.onClick();
                    }}
                  >
                    <span>{option.label}</span>
                    {option.icon && <Icon src={option.icon} />}
                  </Button>
                );
              else return '';
            })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
