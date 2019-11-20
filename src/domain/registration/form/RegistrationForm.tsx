import React, { FunctionComponent } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';

import styles from './registrationForm.module.scss';
import Button from '../../../common/components/button/Button';
import InputField from '../../../common/components/form/fields/input/InputField';
import SelectField from '../../../common/components/form/fields/select/SelectField';
import submitChildMutationQuery from '../mutations/submitChild';
import { setFormValues } from '../state/RegistrationActions';
import { RegistrationFormValues } from '../types/RegistrationTypes';
import { StoreState } from '../../app/types/AppTypes';
import { userSelector } from '../../auth/state/AuthenticationSelectors';
import { initialFormDataSelector } from './RegistrationFormSelectors';
import EnhancedInputField from '../../../common/components/form/fields/input/EnhancedInputField';

interface Props {
  setFormValues: (values: RegistrationFormValues) => void;
  initialValues: RegistrationFormValues;
}

const RegistrationForm: FunctionComponent<Props> = ({
  setFormValues,
  initialValues,
}) => {
  // TODO: Do something with the data we get from the backend.
  const [submitChild] = useMutation(submitChildMutationQuery);
  const { t } = useTranslation();

  return (
    <div className={styles.registrationForm}>
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          setFormValues(values);
          try {
            submitChild({
              variables: {
                birthdate: values.child.birthdate,
                firstName: values.child.firstName,
                lastName: values.child.lastName,
                guardianFirstName: values.guardian.firstName,
                guardianLastName: values.guardian.lastName,
                email: values.guardian.email,
              },
            });
          } catch (err) {
            // TODO: Error handling.
            // eslint-disable-next-line no-console
            console.error(err);
          }
        }}
      >
        {({ isSubmitting, handleSubmit, isValid }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.childInfo}>
              <EnhancedInputField
                name="child.birthdate"
                label={t('homePage.preliminaryForm.childBirthdate.input.label')}
                disabled={true}
                component={InputField}
              />

              <div className={styles.childName}>
                <EnhancedInputField
                  name="child.firstName"
                  label={t('registration.form.child.firstName.input.label')}
                  component={InputField}
                  placeholder={t(
                    'registration.form.child.firstName.input.placeholder'
                  )}
                />
                <EnhancedInputField
                  name="child.lastName"
                  label={t('registration.form.child.lastName.input.label')}
                  component={InputField}
                  placeholder={t(
                    'registration.form.child.lastName.input.placeholder'
                  )}
                />
              </div>

              <EnhancedInputField
                name="guardian.relationship"
                label={t('registration.form.guardian.relationship.input.label')}
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
            </div>

            <div className={styles.guardianInfo}>
              <EnhancedInputField
                name="guardian.email"
                label={t('registration.form.guardian.email.input.label')}
                component={InputField}
                placeholder={t(
                  'registration.form.guardian.email.input.placeholder'
                )}
              />

              <EnhancedInputField
                type="text"
                name="guardian.phoneNumber"
                label={t('registration.form.guardian.phoneNumber.input.label')}
                component={InputField}
                placeholder={t(
                  'registration.form.guardian.phoneNumber.input.placeholder'
                )}
              />
              <div className={styles.guardianName}>
                <EnhancedInputField
                  type="text"
                  name="guardian.firstName"
                  label={t('registration.form.guardian.firstName.input.label')}
                  component={InputField}
                  placeholder={t(
                    'registration.form.guardian.firstName.input.placeholder'
                  )}
                />
                <EnhancedInputField
                  type="text"
                  name="guardian.lastName"
                  label={t('registration.form.guardian.lastName.input.label')}
                  component={InputField}
                  placeholder={t(
                    'registration.form.guardian.lastName.input.placeholder'
                  )}
                />
              </div>
              <EnhancedInputField
                type="checkbox"
                name="agree"
                label={t('registration.form.agree.input.label')}
                component={InputField}
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
  initialValues: initialFormDataSelector(state),
  tunnistamoUserValues: userSelector(state),
});

export const UnconnectedRegistrationForm = RegistrationForm;

export default connect(
  mapStateToProps,
  actions
)(RegistrationForm);
