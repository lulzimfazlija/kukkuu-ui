import React from 'react';
import { Formik } from 'formik';

import styles from './homePreliminaryForm.module.scss';
import Input from '../../../common/components/input/Input';
import { formatMessage } from '../../../common/translation/utils';
import Button from '../../../common/components/button/Button';
import { RegistrationProps } from '../../registration/types/RegistrationTypes';
import { defaultRegistrationData } from '../../registration/state/RegistrationReducers';

export default function HomePreliminaryForm() {
  return (
    <div className={styles.homeForm}>
      <Formik
        initialValues={defaultRegistrationData()}
        onSubmit={(values: RegistrationProps, { setSubmitting }) => {
          setSubmitting(false);
        }}
      >
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              id="formValuesChildBirthday"
              name="preliminaryFormChildBirthdayField"
              label={formatMessage(
                'homePage.preliminaryForm.childBirthDay.input.label'
              )}
              onChange={handleChange}
              value={values.formValues.childBirthday}
              validationError={
                errors.formValues && errors.formValues.childBirthday
              }
            />

            <Input
              type="text"
              id="formValuesChildHomeCity"
              name="preliminaryFormChildHomeCityField"
              label={formatMessage(
                'homePage.preliminaryForm.childHomeCity.input.label'
              )}
              onChange={handleChange}
              value={values.formValues.childHomeCity}
              validationError={
                errors.formValues && errors.formValues.childHomeCity
              }
            />

            <Input
              type="checkbox"
              label={formatMessage(
                'homePage.preliminaryForm.verifyInformation.checkbox.label'
              )}
              name="preliminaryFormVerifyInformationField"
              id="formValuesVerifyInformation"
              onChange={handleChange}
              value={values.formValues.verifyInformation}
              validationError={
                errors.formValues && errors.formValues.childBirthday
              }
            />

            <Button type="submit" disabled={isSubmitting}>
              {formatMessage('homePage.hero.buttonText')}
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
