import * as React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import styles from './sessionPrompt.module.scss';
import Modal from '../../../common/components/modal/Modal';
import Button from '../../../common/components/button/Button';
import { logoutTunnistamo } from '../../auth/authenticate';
import { flushAllState } from '../../auth/state/AuthenticationUtils';

const SessionPrompt: React.FunctionComponent<{ isOpen: boolean }> = ({
  isOpen = false,
}) => {
  const flushAuthenticationData = () => {
    // flush all state except user form data
    // This will also include close this prompt modal
    flushAllState({ keepUserFormData: true });

    // Log out
    logoutTunnistamo();
  };
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <Modal
        isOpen={isOpen}
        label={t('authentication.session.expired.label')}
        toggleModal={() => flushAuthenticationData()}
        showLabelIcon={false}
        className={styles.modal}
      >
        <div className={styles.sessionExpired}>
          <p>
            <Trans i18nKey="authentication.session.expired.message" />
          </p>
        </div>
        <div className={styles.goBackButton}>
          <Button onClick={() => flushAuthenticationData()}>
            {t('authentication.session.expired.agree')}
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default SessionPrompt;
