import * as React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import ChildFormModal, {
  ChildFormModalValues,
} from '../../child/modal/ChildFormModal';
import { primaryChildFormDataSelector } from '../state/RegistrationSelectors';
import { formatTime, newMoment } from '../../../common/time/utils';
import { BACKEND_DATE_FORMAT } from '../../../common/time/TimeConstants';
import { Child } from '../../child/types/ChildTypes';
import { defaultRegistrationData } from '../state/RegistrationReducers';

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

  const onSubmit = (values: ChildFormModalValues) => {
    const payload: Child = Object.assign({}, values, {
      birthdate: formatTime(
        newMoment(
          `${values.birthdate.year}-${values.birthdate.month}-${values.birthdate.day}`,
          BACKEND_DATE_FORMAT
        )
      ),
    });
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
