import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/react-hooks';
import * as Sentry from '@sentry/browser';
import classnames from 'classnames';

import PageWrapper from '../../app/layout/PageWrapper';
import styles from './enrol.module.scss';
import Button from '../../../common/components/button/Button';
import occurrenceQuery from '../queries/occurrenceQuery';
import { occurrenceQuery as OccurrenceQueryType } from '../../api/generatedTypes/occurrenceQuery';
import LoadingSpinner from '../../../common/components/spinner/LoadingSpinner';
import OccurrenceInfo from '../partial/OccurrenceInfo';
import enrolOccurrenceMutation from '../mutations/enrolOccurrenceMutation';
import { EnrolOccurrenceMutationInput } from '../../api/generatedTypes/globalTypes';

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

  // If redirect to /profile, need to do refetchquery
  // Might need to refetch myProfile in any case
  const [enrolOccurrence] = useMutation<EnrolOccurrenceMutationInput>(
    enrolOccurrenceMutation,
    {}
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

  if (!data?.occurrence?.id) return <div>no data</div>;

  const enrol = async () => {
    try {
      await enrolOccurrence({
        variables: {
          input: {
            occurrenceId: data?.occurrence?.id,
            childId: params.childId,
          },
        },
      });
      history.push('/profile');
    } catch (error) {
      console.error(error);
    }
  };

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
        <OccurrenceInfo
          occurrence={data.occurrence}
          className={styles.occurrenceInfo}
        />

        <div className={styles.actions}>
          <form
            onSubmit={e => {
              e.preventDefault();
              console.log('a');
              enrol();
            }}
          >
            <Button className={styles.submitButton} type="submit">
              Enrol
            </Button>
          </form>
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
