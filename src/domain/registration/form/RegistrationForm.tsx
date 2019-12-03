import React, { FunctionComponent, useState } from 'react';
import { Formik, FieldArray } from 'formik';
import { connect } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { omit } from 'lodash';
import classnames from 'classnames';

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
import happyAdultIcon from '../../../assets/icons/svg/adultFaceHappy.svg';
import Container from '../../app/layout/Container';
import NavigationPropmt from '../../../common/components/prompt/NavigationPrompt';

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
  const [isFilling, setFormIsFilling] = useState(false);

  return (
    <Container className={styles.grayBackground}>
      <NavigationPropmt
        isHalfFilling={isFilling}
        warningMessage={t('common.form.leave.warning.text')}
      />

      <div className={styles.registrationFormContainer}>
        <div className={styles.registrationForm}>
          <Formik
            initialValues={initialValues}
            initialErrors={
              (!initialValues.agree && {
                agree: validateRequire(''),
              }) ||
              {}
            }
            validate={() => {
              if (!isFilling) {
                setFormIsFilling(true);
              }
            }}
            onSubmit={values => {
              setFormIsFilling(false);
              setFormValues(values);

              // FIXME: Ensure that relationship is submitted to backend
              const backendSupportChildren = values.children.map(child =>
                omit(child, ['postalCode', 'homeCity', 'relationship'])
              );
              // TODO: Backend / frontend data synchonization. Omit unsupported field for future development.
              try {
                submitChildrenAndGuardian({
                  variables: {
                    children: backendSupportChildren,
                    guardianFirstName: values.guardian.firstName,
                    guardianLastName: values.guardian.lastName,
                    phoneNumber: values.guardian.phoneNumber,
                    language: values.preferLanguage.toUpperCase(), // This is an Enum in the backend
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
            {({ values, isSubmitting, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className={styles.registrationGrayContainer}>
                  <h1>{t('registration.heading')}</h1>
                </div>

                <div
                  className={classnames(
                    styles.childrenInfo,
                    styles.registrationWhiteContainer
                  )}
                >
                  <FieldArray
                    name="children"
                    render={arrayHelpers => {
                      return (
                        <>
                          <AddNewChildFormModal
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            addChild={payload => {
                              setFormIsFilling(true);
                              arrayHelpers.push(payload);
                            }}
                          />
                          {values.children &&
                            values.children.map((child, index) => (
                              <ChildFormField
                                key={index}
                                arrayHelpers={arrayHelpers}
                                child={child}
                                childIndex={index}
                              />
                            ))}
                        </>
                      );
                    }}
                  />
                </div>
                <div className={styles.registrationGrayContainer}>
                  <Button
                    className={styles.addNewChildButton}
                    onClick={() => setIsOpen(true)}
                  >
                    <Icon src={addIcon} alt="Add child icon"></Icon>
                    {t('child.form.modal.add.label')}
                  </Button>
                </div>
                <div
                  className={classnames(
                    styles.guardianInfo,
                    styles.registrationWhiteContainer
                  )}
                >
                  <div className={styles.heading}>
                    <Icon
                      src={happyAdultIcon}
                      className={styles.childImage}
                      alt="Oh lord a happy child again"
                    />
                    <h2>{t('registration.form.guardian.info.heading')}</h2>
                  </div>
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
                      label={t(
                        'registration.form.guardian.lastName.input.label'
                      )}
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

                  <Button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    {t('homePage.hero.buttonText')}
                  </Button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </Container>
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
