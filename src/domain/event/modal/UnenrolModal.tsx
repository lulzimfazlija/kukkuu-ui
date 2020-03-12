import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';

// TODO: KK-300 Check how the cancel button should look
// TODO: KK-300 If the same, find a better/reusable location for this css module
import styles from '../../child/modal/prompt/delete/childFormModalDeletePrompt.module.scss';
import Modal from '../../../common/components/modal/Modal';
import Button from '../../../common/components/button/Button';
import unenrolOccurrenceMutation from '../mutations/unenrolOccurrenceMutation';
import profileQuery from '../../profile/queries/ProfileQuery';
import { unenrolOccurrenceMutationVariables } from '../../api/generatedTypes/unenrolOccurrenceMutation';

interface UnenrolModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  childId: string;
  occurrenceId: string;
}
const UnenrolModal: FunctionComponent<UnenrolModalProps> = ({
  isOpen,
  setIsOpen,
  childId,
  occurrenceId,
}) => {
  const history = useHistory();
  const { t } = useTranslation();

  const [unenrolOccurrence] = useMutation<unenrolOccurrenceMutationVariables>(
    unenrolOccurrenceMutation,
    {
      refetchQueries: [{ query: profileQuery }],
    }
  );
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
      history.push(`/profile/child/${childId}`);
    } catch (error) {
      // TODO: KK-280 Handle errors nicely
      console.error(error);
    }
  };

  const renderModalContent = () => {
    return (
      <div>
        <div className={styles.deleteButtonGroup}>
          <Button
            className={styles.cancelButton}
            onClick={() => setIsOpen(false)}
          >
            {t('event.cancellation.confirmationModal.cancel.buttonText')}
          </Button>

          <Button
            className={styles.deleteButton}
            onClick={() => {
              setIsOpen(false);
              unenrol();
            }}
          >
            {t('event.cancellation.confirmationModal.confirm.buttonText')}
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      label={t('event.cancellation.confirmationModal.heading')}
      className={styles.modal}
      showLabelIcon={false}
      toggleModal={(value: boolean) => {
        setIsOpen(value);
      }}
    >
      {renderModalContent()}
    </Modal>
  );
};

export default UnenrolModal;
