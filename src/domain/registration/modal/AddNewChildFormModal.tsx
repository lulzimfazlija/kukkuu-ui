import * as React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { primaryChildFormDataSelector } from '../state/RegistrationSelectors';
import { Child } from '../../child/types/ChildTypes';
import { defaultRegistrationData } from '../state/RegistrationReducers';
import ChildFormModal from '../../child/modal/ChildFormModal';

const AddNewChildFormModal: React.FunctionComponent<{
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  addChild: (payload: Child) => void;
}> = ({ isOpen, setIsOpen, addChild }) => {
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

export default AddNewChildFormModal;
