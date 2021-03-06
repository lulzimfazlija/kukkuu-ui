import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import * as Sentry from '@sentry/browser';
import { useQuery } from '@apollo/react-hooks';

import styles from './event.module.scss';
import PageWrapper from '../app/layout/PageWrapper';
import Button from '../../common/components/button/Button';
import occurrenceQuery from './queries/occurrenceQuery';
import { occurrenceQuery as OccurrenceQueryType } from '../api/generatedTypes/occurrenceQuery';
import LoadingSpinner from '../../common/components/spinner/LoadingSpinner';
import OccurrenceInfo from './partial/OccurrenceInfo';
import UnenrolModal from './modal/UnenrolModal';
import VenueFeatures from './VenueFeatures';
import Paragraph from '../../common/components/paragraph/Paragraph';
import EventPage from './EventPage';
import SuccessToast from './enrol/SuccessToast';

const EventIsEnrolled = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const params = useParams<{ childId: string; occurrenceId: string }>();
  const { loading, error, data } = useQuery<OccurrenceQueryType>(
    occurrenceQuery,
    {
      variables: {
        id: params.occurrenceId,
      },
    }
  );

  const errorMessage = (
    <PageWrapper>
      <div className={styles.event}>{t('api.errorMessage')}</div>
    </PageWrapper>
  );

  if (loading) return <LoadingSpinner isLoading={true} />;
  if (error) {
    Sentry.captureException(error);
    return errorMessage;
  }

  if (!data?.occurrence) return errorMessage;

  return (
    <EventPage event={data.occurrence.event} success={<SuccessToast />}>
      <OccurrenceInfo
        className={styles.occurrenceInfo}
        occurrence={data.occurrence}
      />
      <div className={styles.description}>
        <Paragraph text={data.occurrence.event.description || ''} />
      </div>
      <div className={styles.participantsPerInvite}>
        {t(
          `event.participantsPerInviteEnumLong.${data.occurrence.event.participantsPerInvite}`
        )}
      </div>
      <h2>{t('event.cancellation.heading')}</h2>
      <Button
        className={styles.cancelRegistration}
        onClick={() => setIsOpen(true)}
      >
        {t('event.cancellation.buttonText')}
      </Button>
      <VenueFeatures venue={data.occurrence.venue} />
      {isOpen && (
        <UnenrolModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          childId={params.childId}
          occurrenceId={data.occurrence.id}
        />
      )}
    </EventPage>
  );
};

export default EventIsEnrolled;
