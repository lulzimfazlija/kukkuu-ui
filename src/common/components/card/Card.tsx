import React, { FunctionComponent, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useQrEncode } from 'react-qr-hooks';

import angleDownIcon from '../../../assets/icons/svg/angleDown.svg';
import styles from './card.module.scss';
import Button from '../button/Button';
import Icon from '../icon/Icon';

interface CardProps {
  action: () => void;
  actionText: string;
  focalContent?: ReactNode;
  image: string;
  primaryAction?: () => void;
  primaryActionText?: string;
  title: string;
  qr?: string;
}

const Card: FunctionComponent<CardProps> = ({
  action,
  actionText,
  children,
  focalContent,
  image,
  primaryAction,
  primaryActionText,
  title,
  qr = '',
}) => {
  const { t } = useTranslation();

  // useQREncode is a hook so it must always be run in the same order, and
  // if run on an empty string it returns.. null
  const encodedQR = useQrEncode(qr);
  const cardImage = encodedQR ? encodedQR : image;

  return (
    <div className={styles.wrapper}>
      <div className={styles.start}>
        {/* TODO: alt, size */}
        <img src={cardImage} alt={'alt'} width="200" height="200" />
      </div>

      <div className={styles.middle}>
        <h3 className={styles.title}>{title}</h3> {/* TODO: children? */}
        <div className={styles.focalPoint}>
          {primaryAction && (
            <Button
              className={styles.primaryActionButton}
              onClick={primaryAction}
            >
              {primaryActionText}
            </Button>
          )}
          {focalContent && focalContent}
        </div>
        {children}
      </div>

      <div className={styles.end}>
        <button
          aria-label={t('TODO: aria label')} // TODO
          className={styles.actionWrapper}
          onClick={action}
        >
          <div className={styles.actionText}>{actionText}</div>
          <Icon
            src={angleDownIcon}
            alt={t('TODO: action')}
            className={styles.gotoAction}
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
