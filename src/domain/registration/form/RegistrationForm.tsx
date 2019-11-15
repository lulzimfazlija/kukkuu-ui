import React, { FunctionComponent } from 'react';
import { Formik, Field } from 'formik';
import { connect } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';
import { User } from 'oidc-client';

import styles from './registrationForm.module.scss';
import Button from '../../../common/components/button/Button';
import InputField from '../../../common/components/form/fields/input/InputField';
import SelectField from '../../../common/components/form/fields/select/SelectField';
import submitChildMutationQuery from '../mutations/submitChild';
import { setFormValues } from '../state/RegistrationActions';
import { RegistrationFormValues } from '../types/RegistrationTypes';
import { StoreState } from '../../app/types/AppTypes';
import { registrationFormDataSelector } from '../state/RegistrationSelectors';
import { userSelector } from '../../auth/state/AuthenticationSelectors';

interface Props {
  setFormValues: (values: RegistrationFormValues) => void;
  initialValues: RegistrationFormValues;
  tunnistamoUserValues: User | undefined; // Should never be undefined! Typing help needed :-)
}

interface TunnistamoProfile {
  familyName: string;
  givenName: string;
  email: string;
}

const RegistrationForm: FunctionComponent<Props> = ({
  setFormValues,
  initialValues,
  tunnistamoUserValues,
}) => {
  // TODO: Do something with the data we get from the backend.
  const [submitChild] = useMutation(submitChildMutationQuery);
  const { t } = useTranslation();

  let tunnistamoProfile: TunnistamoProfile = {
    familyName: '',
    givenName: '',
    email: '',
  };
  if (tunnistamoUserValues) {
    tunnistamoProfile = {
      familyName: tunnistamoUserValues.profile.family_name,
      givenName: tunnistamoUserValues.profile.given_name,
      email: tunnistamoUserValues.profile.email,
    };
  }

  tunnistamoUserValues
    ? console.log(tunnistamoUserValues)
    : console.log('not logged in');

  return (
    <div className={styles.registrationForm}>
      <Formik
        initialValues={initialValues}
        onSubmit={e => {
          setFormValues(e);
          try {
            submitChild({
              variables: {
                birthdate: e.child.birthdate,
                firstName: e.child.firstName,
                lastName: e.child.lastName,
                guardianFirstName: e.guardian.firstName,
                guardianLastName: e.guardian.lastName,
                email: e.guardian.email,
              },
            });
          } catch (err) {
            // TODO: Error handling.
            // eslint-disable-next-line no-console
            console.error(err);
          }
        }}
      >
        {({ values, handleChange, isSubmitting, handleSubmit, isValid }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.childInfo}>
              <div className={styles.childName}>
                <Field
                  type="text"
                  name="child.firstName"
                  label={t('registration.form.child.firstName.input.label')}
                  onChange={handleChange}
                  value={values.child.firstName}
                  component={InputField}
                  placeholder={t(
                    'registration.form.child.firstName.input.placeholder'
                  )}
                />
                <Field
                  type="text"
                  name="child.lastName"
                  label={t('registration.form.child.lastName.input.label')}
                  onChange={handleChange}
                  value={values.child.lastName}
                  component={InputField}
                  placeholder={t(
                    'registration.form.child.lastName.input.placeholder'
                  )}
                />
              </div>
            </div>

            <div className={styles.guardianInfo}>
              <Field
                type="text"
                name="guardian.email"
                label={t('registration.form.guardian.email.input.label')}
                onChange={handleChange}
                value={values.guardian.email || tunnistamoProfile.email}
                component={InputField}
                disabled={true}
                placeholder={t(
                  'registration.form.guardian.email.input.placeholder'
                )}
              />

              <Field
                type="text"
                name="guardian.phoneNumber"
                label={t('registration.form.guardian.phoneNumber.input.label')}
                onChange={handleChange}
                value={values.guardian.phoneNumber}
                component={InputField}
                placeholder={t(
                  'registration.form.guardian.phoneNumber.input.placeholder'
                )}
              />
              <div className={styles.guardianName}>
                <Field
                  type="text"
                  name="guardian.firstName"
                  label={t('registration.form.guardian.firstName.input.label')}
                  onChange={handleChange}
                  value={
                    values.guardian.firstName
                      ? values.guardian.firstName
                      : tunnistamoProfile.givenName
                  }
                  component={InputField}
                  placeholder={t(
                    'registration.form.guardian.firstName.input.placeholder'
                  )}
                />
                <Field
                  type="text"
                  name="guardian.lastName"
                  label={t('registration.form.guardian.lastName.input.label')}
                  onChange={handleChange}
                  value={
                    values.guardian.lastName
                      ? values.guardian.lastName
                      : tunnistamoProfile.familyName
                  }
                  component={InputField}
                  placeholder={t(
                    'registration.form.guardian.lastName.input.placeholder'
                  )}
                />
              </div>
              <Field
                name="guardian.relationship"
                label={t('registration.form.guardian.relationship.input.label')}
                onChange={handleChange}
                value={values.guardian.relationship}
                component={SelectField}
                id="registration.form.guardian.relationship.select"
                options={[
                  { label: 'Parents', value: 'parents' },
                  { label: 'Spouse', value: 'spouse' },
                ]}
                placeholder={t(
                  'registration.form.guardian.relationship.input.placeholder'
                )}
              />
              <Field
                type="checkbox"
                checked={values.agree}
                name="agree"
                label={t('registration.form.agree.input.label')}
                onChange={handleChange}
                component={InputField}
                value={values.agree}
              />
            </div>

            <Button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting || !isValid}
            >
              {t('homePage.hero.buttonText')}
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

const actions = {
  setFormValues,
};

const mapStateToProps = (state: StoreState) => ({
  initialValues: registrationFormDataSelector(state),
  tunnistamoUserValues: userSelector(state),
});

export const UnconnectedRegistrationForm = RegistrationForm;

export default connect(
  mapStateToProps,
  actions
)(RegistrationForm);
