import React from 'react';
import { Formik } from 'formik';

import styles from './homePreliminaryForm.module.scss';
import Input from '../../../common/components/input/Input';
import { formatMessage } from '../../../common/translation/utils';
import Button from '../../../common/components/button/Button';

export default function HomePreliminaryForm() {
  return (
    <div className={styles.homeForm}>
      <Formik
        initialValues={{
          formValues: {
            childBirthDay: '',
            childHomeCity: '',
            verifyInformation: false,
          },
        }}
        onSubmit={(values, { setSubmitting }) => {
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
              validationError={errors.childBirthday}
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
              validationError={errors.childHomeCity}
            />

            <Input
              type="checkbox"
              label={formatMessage(
                'homePage.preliminaryForm.verifyInformation.checkbox.label'
              )}
              name="preliminaryFormVerifyInformationField"
              id="formValuesVerifyInformation"
              onChange={handleChange}
              value={values.formValues.verityInformation}
              validationError={errors.verifyInformation}
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
