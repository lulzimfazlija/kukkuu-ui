import * as React from 'react';
import { Formik, Form, FieldArray } from 'formik';
import { useTranslation } from 'react-i18next';

import Modal from '../../../common/components/modal/Modal';
import styles from './childFormModal.module.scss';
import BirthdateFormField from '../../home/form/partial/BirthdateFormField';
import EnhancedInputField from '../../../common/components/form/fields/input/EnhancedInputField';
import InputField from '../../../common/components/form/fields/input/InputField';
import Button from '../../../common/components/button/Button';
import SelectField from '../../../common/components/form/fields/select/SelectField';
import { CHILD_RELATIONSHIP_OPTIONS } from '../constants/ChildRelationshipConstants';
import { Child } from '../types/ChildTypes';

export interface ChildFormModalValues extends Omit<Child, 'birthdate'> {
  birthdate: {
    day: number | string;
    month: number | string;
    year: number | string;
  };
}
interface ChildFormModalProps {
  initialValues: ChildFormModalValues;
  label: string;
  onSubmit: (values: ChildFormModalValues) => void;
}

const ChildFormModal: React.FunctionComponent<ChildFormModalProps> = ({
  initialValues,
  label,
  onSubmit,
}) => {
  const [isOpen, toggleOpen] = React.useState(false);
  const { t } = useTranslation();
  return (
    <div className={styles.childFormModalWrapper}>
      <Modal isOpen={isOpen} label={label}>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ isSubmitting, isValid }) => (
            <Form>
              <FieldArray
                name="birthdate"
                render={props => <BirthdateFormField {...props} />}
              />

              <EnhancedInputField
                className={styles.childHomeCity}
                name="homeCity"
                label={t('homePage.preliminaryForm.childHomeCity.input.label')}
                required={true}
                component={InputField}
                placeholder={t(
                  'homePage.preliminaryForm.childHomeCity.input.placeholder'
                )}
              />

              <EnhancedInputField
                className={styles.childHomeCity}
                name="postalCode"
                label={t('registration.form.child.postalCode.input.label')}
                required={true}
                component={InputField}
                placeholder={t(
                  'registration.form.child.postalCode.input.placeholder'
                )}
              />
              <div className={styles.childName}>
                <EnhancedInputField
                  name="firstName"
                  label={t('registration.form.child.firstName.input.label')}
                  component={InputField}
                  placeholder={t(
                    'registration.form.child.firstName.input.placeholder'
                  )}
                />
                <EnhancedInputField
                  name="lastName"
                  label={t('registration.form.child.lastName.input.label')}
                  component={InputField}
                  placeholder={t(
                    'registration.form.child.lastName.input.placeholder'
                  )}
                />
              </div>

              <EnhancedInputField
                name="relationship"
                label={t('registration.form.child.relationship.input.label')}
                component={SelectField}
                id="registration.form.child.relationship.select"
                options={CHILD_RELATIONSHIP_OPTIONS}
                placeholder={t(
                  'registration.form.child.relationship.input.placeholder'
                )}
              />

              <Button
                className={styles.cancelButton}
                onClick={() => toggleOpen(false)}
              >
                {t('common.modal.cancel.text')}
              </Button>
              <Button
                type="submit"
                className={styles.submitButton}
                onClick={() => toggleOpen(false)}
                disabled={isSubmitting || !isValid}
              >
                {t('homePage.hero.buttonText')}
              </Button>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};

export default ChildFormModal;
