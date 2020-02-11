import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Child } from '../../../../child/types/ChildTypes';
import ChildFormModal from '../../../../child/modal/ChildFormModal';
import { getChildFormModalValues } from '../../../../child/ChildUtils';

const ProfileChildDetailEditModal: React.FunctionComponent<{
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  editChild: (payload: Child) => void;
  childBeingEdited: Child;
}> = ({ isOpen, setIsOpen, editChild, childBeingEdited }) => {
  const { t } = useTranslation();
  const initialFormData = getChildFormModalValues(childBeingEdited);

  const onSubmit = (payload: Child) => {
    editChild(payload);
    setIsOpen(false);
  };
  return (
    <ChildFormModal
      initialValues={initialFormData}
      onSubmit={onSubmit}
      label={t('profile.child.detail.edit.icon.alt')}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  );
};
export default ProfileChildDetailEditModal;
