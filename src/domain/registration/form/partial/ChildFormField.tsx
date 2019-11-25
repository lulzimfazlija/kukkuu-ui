import * as React from 'react';
import { ArrayHelpers } from 'formik';
import { useTranslation } from 'react-i18next';

import styles from './childFormField.module.scss';
import { formatTime, newMoment } from '../../../../common/time/utils';
import { DEFAULT_DATE_FORMAT } from '../../../../common/time/TimeConstants';
import EnhancedInputField from '../../../../common/components/form/fields/input/EnhancedInputField';
import InputField from '../../../../common/components/form/fields/input/InputField';
import SelectField from '../../../../common/components/form/fields/select/SelectField';
import { Child } from '../../../child/types/ChildTypes';

interface ChildFormFieldProps {
  child: Child;
  childIndex: number;
  arrayHelpers: ArrayHelpers;
}

const ChildFormField: React.FunctionComponent<ChildFormFieldProps> = ({
  child,
  childIndex,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.childField} key={childIndex}>
      <div className={styles.childInfo}>
        <h2>{t('registration.form.child.info.heading')}</h2>
        <div className={styles.childBirthdate}>
          <label>{t('registration.form.child.birthdate.input.label')}</label>
          <p>{formatTime(newMoment(child.birthdate), DEFAULT_DATE_FORMAT)}</p>
        </div>

        <div className={styles.childName}>
          <EnhancedInputField
            name={`children[${childIndex}].firstName`}
            label={t('registration.form.child.firstName.input.label')}
            component={InputField}
            placeholder={t(
              'registration.form.child.firstName.input.placeholder'
            )}
          />
          <EnhancedInputField
            name={`children[${childIndex}].lastName`}
            label={t('registration.form.child.lastName.input.label')}
            component={InputField}
            placeholder={t(
              'registration.form.child.lastName.input.placeholder'
            )}
          />
        </div>

        <EnhancedInputField
          name={`children[${childIndex}].postalCode`}
          type="number"
          label={t('registration.form.child.postalCode.input.label')}
          component={InputField}
          placeholder={t(
            'registration.form.child.postalCode.input.placeholder'
          )}
        />

        <EnhancedInputField
          name={`children[${childIndex}].relationship`}
          label={t('registration.form.child.relationship.input.label')}
          component={SelectField}
          id="registration.form.child.relationship.select"
          options={[
            { label: 'Parents', value: 'parents' },
            { label: 'Spouse', value: 'spouse' },
          ]}
          placeholder={t(
            'registration.form.child.relationship.input.placeholder'
          )}
        />
      </div>
    </div>
  );
};

export default ChildFormField;
