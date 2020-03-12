import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { eventQuery_event_occurrences_edges_node as OccurrencesEdgeNode } from '../api/generatedTypes/eventQuery';
import Button from '../../common/components/button/Button';
import { formatTime, newMoment } from '../../common/time/utils';
import styles from './eventOccurrence.module.scss';

interface EventOccurrenceProps {
  occurrence: OccurrencesEdgeNode;
}

const EventOccurrence: React.FunctionComponent<EventOccurrenceProps> = ({
  occurrence,
}) => {
  const { t } = useTranslation();

  // TODO: Ensure that date shows in correct locale.
  const date = formatTime(newMoment(occurrence.time), 'dd l');
  const time = formatTime(newMoment(occurrence.time), 'hh:mm');

  const hasCapacity =
    occurrence.remainingCapacity && occurrence.remainingCapacity > 0;

  return (
    <tr className={styles.occurrence}>
      <td className={styles.occurrenceDate}>{date}</td>
      <td className={styles.occurrenceTime}>{time}</td>
      <td className={styles.occurrenceVenue}>{occurrence.venue.name}</td>
      {occurrence.remainingCapacity ? (
        <td className={styles.remainingCapacity}>
          {occurrence.remainingCapacity}
        </td>
      ) : (
        <td></td>
      )}
      <td className={styles.occurrenceSubmit}>
        {
          // TODO: KK-300 Make the back-button not confusing
        }
        <Link to={`${occurrence.event.id}/occurrence/${occurrence.id}/enrol`}>
          {hasCapacity ? (
            <Button type="submit" className={styles.submitButton}>
              {t('event.register.occurrenceTableHeader.buttonText')}
            </Button>
          ) : (
            <Button className={styles.fullButton}>
              {t('enrollment.button.occurenceFull')}
            </Button>
          )}
        </Link>
      </td>
    </tr>
  );
};

export default EventOccurrence;
