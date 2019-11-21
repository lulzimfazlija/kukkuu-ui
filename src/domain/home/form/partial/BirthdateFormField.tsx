import React, { FunctionComponent } from 'react';
import { FieldArrayRenderProps, getIn } from 'formik';
import { useTranslation } from 'react-i18next';

import InputField from '../../../../common/components/form/fields/input/InputField';
import styles from './birthdateFormField.module.scss';
import { validateRequire } from '../../../../common/components/form/validationUtils';
import EnhancedInputField from '../../../../common/components/form/fields/input/EnhancedInputField';

const BirthdateFormField: FunctionComponent<FieldArrayRenderProps> = ({
  form: { errors, touched },
}) => {
  const fieldTouched = getIn(touched, 'child.birthdate.day');
  const error = errors['childBirthdate'];
  const { t } = useTranslation();

  return (
    <div className={styles.birthdateField}>
      <label>{t('homePage.preliminaryForm.childBirthdate.input.label')}</label>
      <div className={styles.inputWrapper}>
        <EnhancedInputField
          type="number"
          name="child.birthdate.day"
          component={InputField}
          placeholder={t(
            'homePage.preliminaryForm.childBirthdate.input.day.placeholder'
          )}
          validate={(value: number) => validateRequire(value)}
          required={true}
          min={1}
          max={31}
        />
        <div className={styles.dot}>.</div>
        <EnhancedInputField
          type="number"
          name="child.birthdate.month"
          required={true}
          component={InputField}
          validate={(value: number) => validateRequire(value)}
          placeholder={t(
            'homePage.preliminaryForm.childBirthdate.input.month.placeholder'
          )}
          min={1}
          max={12}
        />
        <div className={styles.dot}>.</div>
        <EnhancedInputField
          type="number"
          required={true}
          name="child.birthdate.year"
          component={InputField}
          validate={(value: number) => validateRequire(value)}
          placeholder={t(
            'homePage.preliminaryForm.childBirthdate.input.year.placeholder'
          )}
          min={2019}
        />
      </div>
      {/* not to display error at first render until input got touched */}
      {fieldTouched && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default BirthdateFormField;
