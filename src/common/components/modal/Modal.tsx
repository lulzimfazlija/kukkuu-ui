import * as React from 'react';
import ReactModal from 'react-modal';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import styles from './modal.module.scss';
import Button from '../button/Button';
import Icon from '../icon/Icon';
import happyChildIcon from '../../../assets/icons/svg/childFaceHappy.svg';
import closeModalIcon from '../../../assets/icons/svg/closeWithoutCircle.svg';

export enum MODAL_SIZE {
  LARGE = 'large',
  NORMAL = 'normal',
  SMALL = 'small',
}

interface ModalProps {
  isOpen: boolean;
  label: string;
  toggleModal: (value: boolean) => void;
  setFormIsFilling?: (value: boolean) => void;
  showLabelIcon?: boolean;
  showHeading?: boolean;
  className?: string;
  icon?: string;
  modalSize?: MODAL_SIZE;
}

const Modal: React.FunctionComponent<ModalProps> = ({
  isOpen,
  label,
  children,
  toggleModal,
  setFormIsFilling,
  showLabelIcon = true,
  className,
  showHeading = true,
  icon = happyChildIcon,
  modalSize = MODAL_SIZE.NORMAL,
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
          <div
            className={classNames(
              styles.modalContent,
              className,
              styles[`${modalSize}Modal`]
            )}
          >
            <Button
              className={styles.closeButton}
              onClick={onClose}
              aria-label={t('common.closeButton.altText')}
            >
              <Icon src={closeModalIcon} />
            </Button>
            {showHeading && (
              <div className={styles.heading}>
                {showLabelIcon && <Icon className={styles.icon} src={icon} />}
                {label && <h2>{label}</h2>}
              </div>
            )}
            <div className={styles.modalChildren}>{children}</div>
          </div>
        </ReactModal>
      )}
    </div>
  );
};

export default Modal;
