import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import styles from './profileChildDetailEditModal.module.scss';
import { Child } from '../../../../child/types/ChildTypes';
import { primaryChildFormDataSelector } from '../../../../registration/state/RegistrationSelectors';

const ProfileChildDetailEditModal: React.FunctionComponent<{
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  updateChild: (payload: Child) => void;
}> = ({ isOpen, setIsOpen, updateChild }) => {
  const primaryChildData = useSelector(primaryChildFormDataSelector);
  const { t } = useTranslation();
  const initialFormData = Object.assign(
    {},
    defaultRegistrationData.formValues.children[0],
    {
      homeCity: primaryChildData.homeCity,
      relationship: primaryChildData.relationship,
      postalCode: primaryChildData.postalCode,
      birthdate: {
        day: '',
        month: '',
        year: '',
      },
    }
  );

  const onSubmit = (payload: Child) => {
    addChild(payload);
    setIsOpen(false);
  };
  return (
    <ChildFormModal
      initialValues={initialFormData}
      onSubmit={onSubmit}
      label={t('child.form.modal.add.label')}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  );
};
export default ProfileChildDetailEditModal;
