import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Child } from '../../../../child/types/ChildTypes';
import ChildFormModal, {
  CHILD_FORM_TYPES,
} from '../../../../child/modal/ChildFormModal';
import { getChildFormModalValues } from '../../../../child/ChildUtils';

const ProfileChildDetailEditModal: React.FunctionComponent<{
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  editChild: (payload: Child) => void;
  deleteChild: () => void;
  childBeingEdited: Child;
}> = ({ isOpen, setIsOpen, editChild, childBeingEdited, deleteChild }) => {
  const { t } = useTranslation();

  const initialFormData = getChildFormModalValues(childBeingEdited);

  const onSubmit = (payload: Child) => {
    editChild(payload);
    setIsOpen(false);
  };

  const onDelete = () => {
    deleteChild();
    setIsOpen(false);
  };
  return (
    <ChildFormModal
      initialValues={initialFormData}
      onSubmit={onSubmit}
      onDelete={onDelete}
      label={t('profile.child.detail.edit.icon.alt')}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      formType={CHILD_FORM_TYPES.EDIT}
    />
  );
};
export default ProfileChildDetailEditModal;
