import React, { FunctionComponent } from 'react';
import { Formik, Field } from 'formik';
import { connect } from 'react-redux';

import styles from './registrationForm.module.scss';
import { formatMessage } from '../../../common/translation/utils';
import Button from '../../../common/components/button/Button';
import InputField from '../../../common/components/form/fields/input/InputField';
import { setFormValues } from '../../registration/state/RegistrationActions';
import { RegistrationFormValues } from '../../registration/types/RegistrationTypes';
import { defaultRegistrationData } from '../state/RegistrationReducers';

interface Props {
  setFormValues: (values: RegistrationFormValues) => void;
}

const RegistrationForm: FunctionComponent<Props> = () => {
  return (
    <div className={styles.registrationForm}>
      <Formik
        initialValues={defaultRegistrationData.formValues}
        onSubmit={(values: RegistrationFormValues) => {}}
        render={({
          values,
          handleChange,
          handleSubmit,
          isSubmitting,
          isValid,
        }) => (
          <form onSubmit={handleSubmit}>
            <Field
              className={styles.childHomeCity}
              type="text"
              name="child.homeCity"
              label={formatMessage(
                'homePage.preliminaryForm.childHomeCity.input.label'
              )}
              onChange={handleChange}
              value={values.child.homeCity}
              component={InputField}
              placeholder={formatMessage(
                'homePage.preliminaryForm.childHomeCity.input.placeholder'
              )}
            />

            <Field
              className={styles.verifyInformationCheckbox}
              type="checkbox"
              label={formatMessage(
                'homePage.preliminaryForm.verifyInformation.checkbox.label'
              )}
              name="verifyInformation"
              onChange={handleChange}
              value={values.verifyInformation}
              component={InputField}
            />

            <Button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting || !isValid}
            >
              {formatMessage('homePage.hero.buttonText')}
            </Button>
          </form>
        )}
      />
    </div>
  );
};

const actions = {
  setFormValues,
};

export const UnconnectedRegistrationForm = RegistrationForm;

export default connect(
  null,
  actions
)(RegistrationForm);
