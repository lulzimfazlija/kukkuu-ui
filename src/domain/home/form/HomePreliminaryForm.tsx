import React, { FunctionComponent } from 'react';
import { Formik, Field, FormikErrors } from 'formik';
import { connect } from 'react-redux';

import authenticate from '../../auth/authenticate';
import styles from './homePreliminaryForm.module.scss';
import { formatMessage } from '../../../common/translation/utils';
import Button from '../../../common/components/button/Button';
import InputField from '../../../common/components/form/fields/input/InputField';
import {
  validateEqual,
  validateBirthDay,
  validateRequire,
} from '../../../common/components/form/validationUtils';
import BirthdayFormField from './partial/BirthdayFormField';
import { setFormValues } from '../../registration/state/RegistrationActions';
import { RegistrationFormValues } from '../../registration/types/RegistrationTypes';

interface HomeFormValues {
  childBirthdayDay: number | string;
  childBirthdayMonth: number | string;
  childBirthdayYear: number | string;
  childHomeCity: string;
  verifyInformation: boolean;
  childBirthday?: string;
}

interface Props {
  setFormValues: (values: RegistrationFormValues) => void;
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

    if (!errors.childBirthday) {
      // Delete the property manually so form will be valid when this is undefined.
      delete errors.childBirthday;
    }
  }

  return errors;
};
const HomePreliminaryForm: FunctionComponent<Props> = props => {
  return (
    <div className={styles.homeForm}>
      <Formik
        initialValues={{
          childBirthdayDay: '',
          childBirthdayMonth: '',
          childBirthdayYear: '',
          childHomeCity: '',
          verifyInformation: false,
        }}
        onSubmit={(values: HomeFormValues) => {
          props.setFormValues({
            child: {
              birthday: `${values.childBirthdayDay}.${values.childBirthdayMonth}.${values.childBirthdayYear}`,
              homeCity: values.childHomeCity,
            },
            verifyInformation: values.verifyInformation,
          });
          authenticate();
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
              validate={(value: boolean) =>
                validateRequire(
                  value,
                  'homePage.preliminaryForm.verifyInformation.checkbox.required.label'
                )
              }
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

export const UnconnectedHomePreliminaryForm = HomePreliminaryForm;

export default connect(
  null,
  actions
)(HomePreliminaryForm);
