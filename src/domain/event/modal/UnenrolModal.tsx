import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';

import styles from '../../child/modal/prompt/delete/childFormModalDeletePrompt.module.scss';
import Modal from '../../../common/components/modal/Modal';
import Button from '../../../common/components/button/Button';
import unenrolOccurrenceMutation from '../mutations/unenrolOccurrenceMutation';

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

  const [unenrolOccurrence] = useMutation(unenrolOccurrenceMutation);
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
      history.push('/profile');
    } catch (error) {
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
