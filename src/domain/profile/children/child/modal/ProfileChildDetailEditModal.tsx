import * as React from 'react';
import { useTranslation } from 'react-i18next';
import omit from 'lodash/omit';

import { Child } from '../../../../child/types/ChildTypes';
import ChildFormModal, {
  CHILD_FORM_TYPES,
} from '../../../../child/modal/ChildFormModal';
import { getChildFormModalValues } from '../../../../child/ChildUtils';
import { normalizeProfileChild } from '../../../ProfileUtil';
import { ChildDetailEditModalPayload } from '../ProfileChildDetail';
import { childByIdQuery_child as ChildByIdResponse } from '../../../../api/generatedTypes/childByIdQuery';
const ProfileChildDetailEditModal: React.FunctionComponent<{
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  editChild: (payload: ChildDetailEditModalPayload) => void;
  deleteChild: () => void;
  childBeingEdited: ChildByIdResponse;
}> = ({ isOpen, setIsOpen, editChild, childBeingEdited, deleteChild }) => {
  const { t } = useTranslation();
  const normalizedChild = normalizeProfileChild(childBeingEdited);
  const initialFormData = getChildFormModalValues(normalizedChild);

  const onSubmit = (payload: Child) => {
    const supportedChildPayload = omit(payload, ['homeCity', '__typename']);
    editChild(supportedChildPayload);
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
      label={t('child.form.modal.edit.label')}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      formType={CHILD_FORM_TYPES.EDIT}
    />
  );
};
export default ProfileChildDetailEditModal;
