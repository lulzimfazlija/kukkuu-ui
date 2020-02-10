import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Child } from '../../../../child/types/ChildTypes';
import ChildFormModal from '../../../../child/modal/ChildFormModal';
import { getChildFormBirthdateData } from '../../../../child/ChildUtils';

const ProfileChildDetailEditModal: React.FunctionComponent<{
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  editChild: (payload: Child) => void;
  edittingChild: Child;
}> = ({ isOpen, setIsOpen, editChild, edittingChild }) => {
  const { t } = useTranslation();
  const initialFormData = Object.assign({}, edittingChild, {
    homeCity: edittingChild.homeCity,
    relationship: edittingChild.relationship,
    postalCode: edittingChild.postalCode,
    birthdate: getChildFormBirthdateData(edittingChild.birthdate),
  });

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
