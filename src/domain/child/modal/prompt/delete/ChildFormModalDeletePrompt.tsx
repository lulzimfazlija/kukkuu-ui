import * as React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import styles from './childFormModalDeletePrompt.module.scss';
import Button from '../../../../../common/components/button/Button';

interface ChildFormModalDeletePromptProps {
  deleteChild: () => void;
  setIsOpen: (value: boolean) => void;
}

const ChildFormModalDeletePrompt: React.FunctionComponent<ChildFormModalDeletePromptProps> = ({
  setIsOpen,
  deleteChild,
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <div className={styles.deleteChild}>
        <h3>{t('profile.child.detail.delete.prompt.heading')}</h3>
        <p>
          <Trans i18nKey="multiline">
            {t('profile.child.detail.delete.prompt.text')}
          </Trans>
        </p>
        <div className={styles.deleteButtonGroup}>
          <Button
            className={styles.cancelButton}
            onClick={() => setIsOpen(false)}
          >
            {t('common.modal.cancel.text')}
          </Button>
          <Button
            onClick={() => {
              setIsOpen(false);
              deleteChild();
            }}
            className={styles.deleteButton}
          >
            {t('profile.child.detail.delete.text')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChildFormModalDeletePrompt;
