import React from 'react';
import { Formik, Field, FormikErrors } from 'formik';

import styles from './homePreliminaryForm.module.scss';
import { formatMessage } from '../../../common/translation/utils';
import Button from '../../../common/components/button/Button';
import { RegistrationProps } from '../../registration/types/RegistrationTypes';
import { defaultRegistrationData } from '../../registration/state/RegistrationReducers';
import InputField from '../../../common/components/form/fields/input/InputField';
import {
  validateEqual,
  validateBirthDay,
} from '../../../common/components/form/validationUtils';
import BirthdayFormField from './partial/BirthdayFormField';

interface HomeFormValues extends RegistrationProps {
  childBirthdayDay: number;
  childBirthdayMonth: number;
  childBirthdayYear: number;
  childHomeCity: string;
  verifyInformation: boolean;
  childBirthday?: string;
}

const validate = (values: HomeFormValues) => {
  const errors: FormikErrors<HomeFormValues> = {};

  if (
    values.childBirthdayDay &&
    values.childBirthdayMonth &&
    values.childBirthdayYear
  ) {
    errors.childBirthday = validateBirthDay(
      `${values.childBirthdayDay}.${values.childBirthdayMonth}.${values.childBirthdayYear}`
    );
  }

  return errors;
};
export default function HomePreliminaryForm() {
  return (
    <div className={styles.homeForm}>
      <Formik
        initialValues={defaultRegistrationData().toJS().formValues}
        onSubmit={(values: RegistrationProps, { setSubmitting }) => {
          setSubmitting(false);
        }}
        validate={validate}
        render={({
          values,
          handleChange,
          handleSubmit,
          isSubmitting,
          isValid,
          errors,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
              <BirthdayFormField error={errors.childBirthday} />

              <Field
                className={styles.childHomeCity}
                type="text"
                name="childHomeCity"
                label={formatMessage(
                  'homePage.preliminaryForm.childHomeCity.input.label'
                )}
                onChange={handleChange}
                value={values.childHomeCity}
                component={InputField}
                placeholder={formatMessage(
                  'homePage.preliminaryForm.childHomeCity.input.placeholder'
                )}
                validate={(value: string | number) =>
                  validateEqual(
                    value,
                    formatMessage(
                      'homePage.preliminaryForm.childHomeCity.supportCity'
                    ),
                    formatMessage('validation.general.unSupportedCity')
                  )
                }
              />
            </div>

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
              required
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
}
