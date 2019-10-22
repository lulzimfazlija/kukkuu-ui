import React from 'react';
import { Formik, Field } from 'formik';

import styles from './homePreliminaryForm.module.scss';
import { formatMessage } from '../../../common/translation/utils';
import Button from '../../../common/components/button/Button';
import { RegistrationProps } from '../../registration/types/RegistrationTypes';
import { defaultRegistrationData } from '../../registration/state/RegistrationReducers';
import InputField from '../../../common/components/form/fields/InputField';
import {
  validateBirthDay,
  validateEqual,
} from '../../../common/components/form/validationUtils';
import { SUPPORTED_CITY } from '../../app/constants';

export default function HomePreliminaryForm() {
  return (
    <div className={styles.homeForm}>
      <Formik
        initialValues={defaultRegistrationData().toJS().formValues}
        onSubmit={(values: RegistrationProps, { setSubmitting }) => {
          setSubmitting(false);
        }}
        render={({
          values,
          handleChange,
          handleSubmit,
          isSubmitting,
          isValid,
        }) => (
          <form onSubmit={handleSubmit}>
            <Field
              type="text"
              name="childBirthday"
              label={formatMessage(
                'homePage.preliminaryForm.childBirthDay.input.label'
              )}
              value={values.childBirthday}
              validate={validateBirthDay}
              component={InputField}
              placeholder={formatMessage(
                'homePage.preliminaryForm.childBirthDay.input.placeholder'
              )}
              required
            />

            <Field
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
                  SUPPORTED_CITY.HELSINKI,
                  formatMessage('validation.general.nonSupportedCity')
                )
              }
              required
            />

            <Field
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

            <Button type="submit" disabled={isSubmitting || !isValid}>
              {formatMessage('homePage.hero.buttonText')}
            </Button>
          </form>
        )}
      />
    </div>
  );
}
