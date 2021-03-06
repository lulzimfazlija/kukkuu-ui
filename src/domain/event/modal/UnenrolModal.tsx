import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
// TODO: KK-300 Check how the cancel button should look
// TODO: KK-300 If the same, find a better/reusable location for this css module
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import unenrolOccurrenceMutation from '../mutations/unenrolOccurrenceMutation';
import profileQuery from '../../profile/queries/ProfileQuery';
import {
  unenrolOccurrenceMutation as UnenrolOccurrenceMutation,
  unenrolOccurrenceMutationVariables as UnenrolOccurrenceMutationVariables,
} from '../../api/generatedTypes/unenrolOccurrenceMutation';
import ConfirmModal from '../../../common/components/confirm/ConfirmModal';
import { saveChildEvents } from '../state/EventActions';
import { childByIdQuery } from '../../child/queries/ChildQueries';

interface UnenrolModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  childId: string;
  occurrenceId: string;
}

const UnenrolModal = ({
  isOpen,
  setIsOpen,
  childId,
  occurrenceId,
}: UnenrolModalProps) => {
  const history = useHistory();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [unenrolOccurrence] = useMutation<
    UnenrolOccurrenceMutation,
    UnenrolOccurrenceMutationVariables
  >(unenrolOccurrenceMutation, {
    refetchQueries: [
      {
        query: childByIdQuery,
        variables: {
          id: childId,
        },
      },
      { query: profileQuery },
    ],
    onCompleted: (data) => {
      if (data.unenrolOccurrence?.child?.occurrences.edges) {
        dispatch(
          saveChildEvents({
            childId: data.unenrolOccurrence.child.id,
            occurrences: data.unenrolOccurrence.child.occurrences,
          })
        );
      }
      history.replace(`/profile/child/${childId}`);
    },
  });

  const unenrol = async () => {
    try {
      await unenrolOccurrence({
        variables: {
          input: {
            occurrenceId: occurrenceId,
            childId: childId,
          },
        },
      });
    } catch (error) {
      console.error(error);
      // TODO: KK-280 Handle errors nicely
      toast(t('registration.submitMutation.errorMessage'), {
        type: toast.TYPE.ERROR,
      });
    }
  };

  const confirmUnenrol = (answer: boolean) => {
    if (answer === true) unenrol();
  };

  return (
    <ConfirmModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      heading={t('event.cancellation.confirmationModal.heading')}
      cancel={t('event.cancellation.confirmationModal.cancel.buttonText')}
      ok={t('event.cancellation.confirmationModal.confirm.buttonText')}
      answer={confirmUnenrol}
    />
  );
};

export default UnenrolModal;
