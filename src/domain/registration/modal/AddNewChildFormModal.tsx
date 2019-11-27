import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import ChildFormModal, {
  ChildFormModalValues,
} from '../../child/modal/ChildFormModal';
import { primaryChildFormDataSelector } from '../state/RegistrationSelectors';
import { getChildInitialFormBirthdate } from '../../child/modal/ChildFormModalUtils';
import { addChildToFormValues } from '../state/RegistrationActions';
import { formatTime, newMoment } from '../../../common/time/utils';
import { BACKEND_DATE_FORMAT } from '../../../common/time/TimeConstants';
import { Child } from '../../child/types/ChildTypes';

const AddNewChildFormModal: React.FunctionComponent<{
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}> = ({ isOpen, setIsOpen }) => {
  const primaryChildData = useSelector(primaryChildFormDataSelector);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const initialFormData = Object.assign({}, primaryChildData, {
    birthdate: getChildInitialFormBirthdate(primaryChildData),
  });

  const onSubmit = (values: ChildFormModalValues) => {
    const payload: Child = Object.assign({}, values, {
      birthdate: formatTime(
        newMoment(
          `${values.birthdate.year}-${values.birthdate.month}-${values.birthdate.day}`,
          BACKEND_DATE_FORMAT
        )
      ),
    });

    dispatch(addChildToFormValues(payload));
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
