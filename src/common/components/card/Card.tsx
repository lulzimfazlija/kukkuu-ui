import React, { FunctionComponent, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import classnames from 'classnames';
import { QRCode } from 'react-qrcode-logo';

import angleDownIcon from '../../../assets/icons/svg/angleDown.svg';
import styles from './card.module.scss';
import Button from '../button/Button';
import Icon from '../icon/Icon';

interface CardProps {
  action: () => void;
  actionText: string;
  alt?: string;
  className?: string;
  focalContent?: ReactNode;
  image: string;
  primaryAction?: () => void;
  primaryActionText?: string;
  qr?: string;
  title: string;
}

const Card: FunctionComponent<CardProps> = ({
  action,
  actionText,
  alt = '',
  children,
  className,
  focalContent,
  image,
  primaryAction,
  primaryActionText,
  qr,
  title,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className={classnames(styles.card, className)}>
        {/* TODO: size */}
        <img src={image} alt={alt} width="200" height="200" />
        {qr && <QRCode value={qr} ecLevel={'H'} />}
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
