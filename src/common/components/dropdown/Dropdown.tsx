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

  // Dropdown with single element is basically
  // not a dropdown, just a button
  const isSingleElementDropdown = options.length === 1;
  const itemDisplayedOnNavbar = options[0];

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

  return (
    <div className={styles.dropdownWrapper} {...rest} ref={ref}>
      {/* Dropdown with single element is basicall not a dropdown, just a button */}
      {isSingleElementDropdown && (
        <Button
          aria-label={itemDisplayedOnNavbar.label}
          onClick={() => {
            itemDisplayedOnNavbar?.onClick && itemDisplayedOnNavbar.onClick();
          }}
        >
          <span>{itemDisplayedOnNavbar.label}</span>
          <Icon
            src={itemDisplayedOnNavbar.icon ?? angleDownIcon}
            alt={t('navbar.menuButton.label')}
          />
        </Button>
      )}

      {/* Kukkuu dropdown have first item display on nav is also first option
      which doesnt trigger option's action, just have labeling */}
      {!isSingleElementDropdown && (
        <>
          <Button
            aria-label={t(
              isOpen ? 'common.menu.closeMenuText' : 'common.menu.openMenuText'
            )}
            aria-expanded={isOpen}
            onClick={() => {
              toggleDropdown(!isOpen);
            }}
          >
            <span>{itemDisplayedOnNavbar.label}</span>
            <Icon
              src={itemDisplayedOnNavbar.icon ?? angleDownIcon}
              alt={t('navbar.menuButton.label')}
            />
          </Button>
          {isOpen && (
            <div className={styles.dropdownContent}>
              {options.slice(1).map((option, index) => {
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
                    {option.icon && <Icon src={option.icon} />}
                  </Button>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Dropdown;
