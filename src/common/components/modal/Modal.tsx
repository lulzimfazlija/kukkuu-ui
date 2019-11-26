import * as React from 'react';
import ReactModal from 'react-modal';
import { useTranslation } from 'react-i18next';

import styles from './modal.module.scss';
import Button from '../button/Button';

interface ModalProps {
  isOpen: boolean;
  label: string;
}

const Modal: React.FunctionComponent<ModalProps> = ({
  isOpen,
  label,
  children,
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(isOpen);
  const { t } = useTranslation();

  return (
    <div className={styles.modalWrapper}>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel={label}
      >
        <div className={styles.modalContent}>
          <Button onClick={() => setIsOpen(false)}>
            {t('common.closeModal.text')}
          </Button>
          {children}
        </div>
      </ReactModal>
    </div>
  );
};

export default Modal;
