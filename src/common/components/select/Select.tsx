import * as React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './select.module.scss';

type SelectOption = {
  label: string;
  value: string | string[] | undefined;
};
type SelectOptions = SelectOption[];

export interface SelectProps {
  options: SelectOptions;
  value?: string | string[];
  onChange: React.ChangeEventHandler<HTMLElement>;
  label?: string;
  id: string;
}

const Select: React.FunctionComponent<SelectProps> = ({
  options,
  onChange,
  value,
  label,
  id,
  ...rest
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.selectWrapper}>
      {label && <label htmlFor={id}>{label}</label>}
      <select
        onChange={onChange}
        id={id}
        value={value || options[0].value}
        {...rest}
      >
        {
          <option value="null" key="no selection">
            {t('common.select.default.text')}
          </option>
        }
        {options.map(selectOption => (
          <option value={selectOption.value} key={selectOption.label}>
            {selectOption.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
