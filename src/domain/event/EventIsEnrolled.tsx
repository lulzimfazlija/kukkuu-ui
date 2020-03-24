import React, { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useParams } from 'react-router-dom';
import * as Sentry from '@sentry/browser';
import { useQuery } from '@apollo/react-hooks';

import Icon from '../../common/components/icon/Icon';
import styles from './event.module.scss';
import PageWrapper from '../app/layout/PageWrapper';
import backIcon from '../../assets/icons/svg/arrowLeft.svg';
import Button from '../../common/components/button/Button';
import occurrenceQuery from './queries/occurrenceQuery';
import { occurrenceQuery as OccurrenceQueryType } from '../api/generatedTypes/occurrenceQuery';
import LoadingSpinner from '../../common/components/spinner/LoadingSpinner';
import OccurrenceInfo from './partial/OccurrenceInfo';
import UnenrolModal from './modal/UnenrolModal';
import VenueFeatures from './VenueFeatures';
import Paragraph from '../../common/components/paragraph/Paragraph';

const EventIsEnrolled: FunctionComponent = () => {
  const history = useHistory();
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

  if (loading) return <LoadingSpinner isLoading={true} />;
  if (error) {
    Sentry.captureException(error);
    return (
      <PageWrapper>
        <div className={styles.event}>{t('api.errorMessage')}</div>
      </PageWrapper>
    );
  }

  if (!data?.occurrence) return <div>No occurrence data</div>;

  const backgroundImageStyle = data.occurrence.event.image
    ? {
        backgroundImage: `url("${data.occurrence.event.image}")`,
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

      <PageWrapper
        className={styles.wrapper}
        title={data.occurrence.event.name || ''}
      >
        <div className={styles.eventWrapper} role="main">
          <div className={styles.event}>
            <div className={styles.heading}>
              <h1>{data.occurrence.event.name}</h1>
            </div>
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
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default EventIsEnrolled;
