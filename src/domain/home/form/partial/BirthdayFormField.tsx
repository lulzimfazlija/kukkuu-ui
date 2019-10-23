import React from 'react';
import { Field } from 'formik';

import InputField from '../../../../common/components/form/fields/input/InputField';
import { formatMessage } from '../../../../common/translation/utils';
import styles from './birthdayFormField.module.scss';

export default function BirthdayFormField() {
  return (
    <div className={styles.birthdayField}>
      <label>
        {formatMessage('homePage.preliminaryForm.childBirthDay.input.label')}
      </label>
      <div className={styles.inputWrapper}>
        <Field
          type="number"
          name="childBirthdayDay"
          component={InputField}
          placeholder={formatMessage(
            'homePage.preliminaryForm.childBirthDay.input.day.placeholder'
          )}
          min={1}
          max={31}
        />
        <div className={styles.dot}>.</div>
        <Field
          type="number"
          name="childBirthdayMonth"
          component={InputField}
          placeholder={formatMessage(
            'homePage.preliminaryForm.childBirthDay.input.month.placeholder'
          )}
          min={1}
          max={12}
        />
        <div className={styles.dot}>.</div>
        <Field
          type="number"
          name="childBirthdayYear"
          component={InputField}
          placeholder={formatMessage(
            'homePage.preliminaryForm.childBirthDay.input.year.placeholder'
          )}
          min={2019}
        />
      </div>
      <small></small>
    </div>
  );
}
