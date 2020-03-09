import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import * as Sentry from '@sentry/browser';
import classnames from 'classnames';

import PageWrapper from '../../app/layout/PageWrapper';
import styles from './enrol.module.scss';
import Button from '../../../common/components/button/Button';
import occurrenceQuery from '../queries/occurrenceQuery';
import { occurrenceQuery as OccurrenceQueryType } from '../../api/generatedTypes/occurrenceQuery';
import LoadingSpinner from '../../../common/components/spinner/LoadingSpinner';
import OccurrenceInfo from '../partial/OccurrenceInfo';

const Enrol: FunctionComponent = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const params = useParams<{
    childId: string;
    eventId: string;
    occurrenceId: string;
  }>();
  const { loading, error, data } = useQuery<OccurrenceQueryType>(
    occurrenceQuery,
    {
      variables: {
        id: params.occurrenceId,
      },
    }
  );

  if (loading) return <LoadingSpinner isLoading={true} />;
  if (error) {
    console.error(error);
    Sentry.captureException(error);
    return (
      <PageWrapper>
        <div className={styles.event}>{t('api.errorMessage')}</div>
      </PageWrapper>
    );
  }

  if (!data?.occurrence) return <div>no data</div>;

  return (
    <PageWrapper
      className={styles.wrapper}
      containerClassName={classnames(styles.enrolContainer)}
      title={'Enrol'}
    >
      <div className={styles.enrolWrapper} role="main">
        <div className={styles.heading}>
          <h1>{`${t('enrol to')} ${data.occurrence.event.name}`}</h1>
        </div>
        <OccurrenceInfo occurrence={data.occurrence} />

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
