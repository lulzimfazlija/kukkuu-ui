import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import * as Sentry from '@sentry/browser';

import Icon from '../../common/components/icon/Icon';
import styles from './event.module.scss';
import PageWrapper from '../app/layout/PageWrapper';
import backIcon from '../../assets/icons/svg/arrowLeft.svg';
import Button from '../../common/components/button/Button';
import eventQuery from './queries/eventQuery';
import { eventQuery as EventQueryType } from '../api/generatedTypes/eventQuery';
import LoadingSpinner from '../../common/components/spinner/LoadingSpinner';
import EventEnrol from './EventEnrol';
import VenueFeatures from './VenueFeatures';

const Event: FunctionComponent = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const params = useParams<{ childId: string; eventId: string }>();
  const { loading, error, data } = useQuery<EventQueryType>(eventQuery, {
    variables: {
      id: params.eventId,
    },
  });

  if (loading) return <LoadingSpinner isLoading={true} />;
  if (error) {
    Sentry.captureException(error);
    return (
      <PageWrapper>
        <div className={styles.event}>{t('api.errorMessage')}</div>
      </PageWrapper>
    );
  }

  const backgroundImageStyle = data?.event?.image
    ? {
        backgroundImage: `url("${data.event.image}")`,
      }
    : {};

  return (
    <>
      <div className={styles.heroWrapper} style={backgroundImageStyle}>
        <div className={styles.backButtonWrapper}>
          <Button
            aria-label={t('common.backButton.label')}
            className={styles.backButton}
            onClick={() => history.goBack()}
          >
            <Icon
              src={backIcon}
              className={styles.backButtonIcon}
              alt={t('common.backButton.label')}
            />
          </Button>
        </div>
      </div>

      <PageWrapper className={styles.wrapper} title={data?.event?.name || ''}>
        <div className={styles.eventWrapper} role="main">
          <div className={styles.event}>
            <div className={styles.heading}>
              <h1>{data?.event?.name}</h1>
            </div>
            <div className={styles.description}>{data?.event?.description}</div>
            {data?.event && <EventEnrol event={data.event} />}
            <VenueFeatures
              venue={data?.event?.occurrences.edges?.[0]?.node?.venue}
            />
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default Event;
