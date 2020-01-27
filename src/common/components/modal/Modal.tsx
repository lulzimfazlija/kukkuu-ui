import * as React from 'react';
import ReactModal from 'react-modal';
import { useTranslation } from 'react-i18next';

import styles from './modal.module.scss';
import Button from '../button/Button';
import Icon from '../icon/Icon';
import happyChildIcon from '../../../assets/icons/svg/childFaceHappy.svg';

interface ModalProps {
  isOpen: boolean;
  label: string;
  toggleModal: (value: boolean) => void;
  setFormIsFilling: (value: boolean) => void;
}

const Modal: React.FunctionComponent<ModalProps> = ({
  isOpen,
  label,
  children,
  toggleModal,
  setFormIsFilling,
}) => {
  const { t } = useTranslation();

  const onClose = () => {
    if (setFormIsFilling) {
      setFormIsFilling(false);
    }
    toggleModal(false);
  };
  return (
    <div className={styles.modalWrapper}>
      {isOpen && (
        <ReactModal
          isOpen={isOpen}
          onRequestClose={onClose}
          contentLabel={label}
          className={styles.modal}
          overlayClassName={styles.overlay}
          shouldCloseOnOverlayClick={false}
        >
          <div className={styles.modalContent}>
            <Button
              className={styles.closeButton}
              onClick={onClose}
              aria-label={t('common.closeButton.altText')}
            >
              {t('common.modal.close.text')}
            </Button>
            <div className={styles.heading}>
              {label && (
                <Icon className={styles.happyChild} src={happyChildIcon}></Icon>
              )}
              {/* TODO: add a generic Icon */}
              <h1>{label}</h1>
            </div>
            <div className={styles.modalChildren}>{children}</div>
          </div>
        </ReactModal>
      )}
    </div>
  );
};

export default Modal;
