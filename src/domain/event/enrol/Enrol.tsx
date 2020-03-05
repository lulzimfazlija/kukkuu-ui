import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import PageWrapper from '../../app/layout/PageWrapper';
import styles from './enrol.module.scss';
import Button from '../../../common/components/button/Button';

const Enrol: FunctionComponent = () => {
  const history = useHistory();
  const { t } = useTranslation();

  return (
    <PageWrapper className={styles.wrapper} title={'Enrol'}>
      <div className={styles.enrolWrapper} role="main">
        <div className={styles.enrol}>
          <div className={styles.heading}>
            <h1>{t('enrol')}</h1>
          </div>
          <div className={styles.occurrenceInfo}>Date Time Who Place</div>
        </div>
        <div className={styles.actions}>
          <Button className={styles.submitButton}>Enrol</Button>
          <Button
            className={styles.backButton}
            onClick={() => history.goBack()}
          >
            Back
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Enrol;
