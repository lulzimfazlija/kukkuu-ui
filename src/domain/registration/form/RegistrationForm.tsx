import React, { FunctionComponent, useState } from 'react';
import { Formik, FieldArray } from 'formik';
import { connect } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { omit } from 'lodash';

import styles from './registrationForm.module.scss';
import Button from '../../../common/components/button/Button';
import InputField from '../../../common/components/form/fields/input/InputField';
import SelectField from '../../../common/components/form/fields/select/SelectField';
import submitChildrenAndGuardianMutation from '../mutations/submitChildrenAndGuardianMutation';
import { setFormValues } from '../state/RegistrationActions';
import { RegistrationFormValues } from '../types/RegistrationTypes';
import { StoreState } from '../../app/types/AppTypes';
import { userSelector } from '../../auth/state/AuthenticationSelectors';
import { initialFormDataSelector } from './RegistrationFormSelectors';
import EnhancedInputField from '../../../common/components/form/fields/input/EnhancedInputField';
import { SUPPORT_LANGUAGES } from '../../../common/translation/TranslationConstants';
import { validateRequire } from '../../../common/components/form/validationUtils';
import ChildFormField from './partial/ChildFormField';
import AddNewChildFormModal from '../modal/AddNewChildFormModal';
import Icon from '../../../common/components/icon/Icon';
import addIcon from '../../../assets/icons/svg/delete.svg';

interface Props {
  setFormValues: (values: RegistrationFormValues) => void;
  initialValues: RegistrationFormValues;
}

const RegistrationForm: FunctionComponent<Props> = ({
  setFormValues,
  initialValues,
}) => {
  // TODO: Do something with the data we get from the backend.
  const [submitChildrenAndGuardian] = useMutation(
    submitChildrenAndGuardianMutation
  );
  const { t } = useTranslation();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.registrationFormContainer}>
      <div className={styles.registrationForm}>
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          initialErrors={
            (!initialValues.agree && {
              agree: validateRequire(''),
            }) ||
            {}
          }
          onSubmit={values => {
            setFormValues(values);

            const backendSupportChildren = values.children.map(child =>
              omit(child, ['postalCode', 'homeCity'])
            );
            // TODO: Backend / frontend data synchonization. Omit unsupported field for future development.
            try {
              submitChildrenAndGuardian({
                variables: {
                  children: backendSupportChildren,
                  guardianFirstName: values.guardian.firstName,
                  guardianLastName: values.guardian.lastName,
                  email: values.guardian.email,
                },
              });
              history.push('/registration/success');
            } catch (err) {
              // TODO: Error handling.
              // eslint-disable-next-line no-console
              console.error(err);
            }
          }}
        >
          {({ values, isSubmitting, handleSubmit, isValid }) => (
            <form onSubmit={handleSubmit}>
              <h1>{t('registration.heading')}</h1>
              <div className={styles.childrenInfo}>
                <FieldArray
                  name="children"
                  render={arrayHelpers => {
                    return (
                      <>
                        {values.children &&
                          values.children.map((child, index) => (
                            <ChildFormField
                              key={index}
                              arrayHelpers={arrayHelpers}
                              child={child}
                              childIndex={index}
                            />
                          ))}
                        <AddNewChildFormModal
                          isOpen={isOpen}
                          setIsOpen={setIsOpen}
                        />
                        <Button
                          className={styles.addNewChildButton}
                          onClick={() => setIsOpen(true)}
                        >
                          <Icon src={addIcon} alt="Add child icon"></Icon>
                          {t('child.form.modal.add.label')}
                        </Button>
                      </>
                    );
                  }}
                />
              </div>
              <div className={styles.guardianInfo}>
                <h2>{t('registration.form.guardian.info.heading')}</h2>
                <div className={styles.guardianEmail}>
                  <label>
                    {t('registration.form.guardian.email.input.label')}
                  </label>
                  <p>{values.guardian.email}</p>
                </div>

                <EnhancedInputField
                  name="guardian.phoneNumber"
                  required={true}
                  label={t(
                    'registration.form.guardian.phoneNumber.input.label'
                  )}
                  component={InputField}
                  placeholder={t(
                    'registration.form.guardian.phoneNumber.input.placeholder'
                  )}
                />
                <div className={styles.guardianName}>
                  <EnhancedInputField
                    type="text"
                    required={true}
                    name="guardian.firstName"
                    label={t(
                      'registration.form.guardian.firstName.input.label'
                    )}
                    component={InputField}
                    placeholder={t(
                      'registration.form.guardian.firstName.input.placeholder'
                    )}
                  />
                  <EnhancedInputField
                    type="text"
                    required={true}
                    name="guardian.lastName"
                    label={t('registration.form.guardian.lastName.input.label')}
                    component={InputField}
                    placeholder={t(
                      'registration.form.guardian.lastName.input.placeholder'
                    )}
                  />
                </div>

                <EnhancedInputField
                  name="preferLanguage"
                  label={t('registration.form.guardian.language.input.label')}
                  required={true}
                  component={SelectField}
                  options={[
                    { label: 'English', value: SUPPORT_LANGUAGES.EN },
                    { label: 'Suomi', value: SUPPORT_LANGUAGES.FI },
                    { label: 'Svenska', value: SUPPORT_LANGUAGES.SV },
                  ]}
                  placeholder={t(
                    'registration.form.guardian.language.input.placeholder'
                  )}
                />
                <EnhancedInputField
                  className={styles.agreeBtn}
                  type="checkbox"
                  name="agree"
                  required={true}
                  label={t('registration.form.agree.input.label')}
                  component={InputField}
                />
              </div>

              <Button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {t('homePage.hero.buttonText')}
              </Button>
            </form>
          )}
        </Formik>
      </div>
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
