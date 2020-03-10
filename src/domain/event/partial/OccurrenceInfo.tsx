import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import joinClassNames from 'classnames';

import styles from './occurrenceInfo.module.scss';
import clockIcon from '../../../assets/icons/svg/clock.svg';
import calendarIcon from '../../../assets/icons/svg/calendar.svg';
import locationIcon from '../../../assets/icons/svg/location.svg';
import personIcon from '../../../assets/icons/svg/person.svg';
import Icon from '../../../common/components/icon/Icon';
import { formatOccurrenceTime } from '../EventUtils';
import { childByIdQuery_child_enrolments_edges_node_occurrence as OccurrenceType } from '../../api/generatedTypes/childByIdQuery';
import { occurrenceQuery_occurrence as OccurrenceQueryType } from '../../api/generatedTypes/occurrenceQuery';
import { formatTime, newMoment } from '../../../common/time/utils';
import { DEFAULT_DATE_FORMAT } from '../../../common/time/TimeConstants';

interface OccurrenceInfoProps {
  className?: string;
  occurrence: OccurrenceType | OccurrenceQueryType;
}

const OccurrenceInfo: FunctionComponent<OccurrenceInfoProps> = ({
  className,
  occurrence,
}) => {
  const { t } = useTranslation();
  return (
    <div className={joinClassNames(styles.row, className)}>
      <div className={styles.label}>
        <Icon
          src={calendarIcon}
          alt={t('TODO: action')}
          className={styles.labelIcon}
        />
        <div>{formatTime(newMoment(occurrence.time), DEFAULT_DATE_FORMAT)}</div>
      </div>
      <div className={styles.label}>
        <Icon
          src={clockIcon}
          alt={t('TODO: action')}
          className={styles.labelIcon}
        />
        <div>
          {formatOccurrenceTime(occurrence.time, occurrence.event.duration)}
        </div>
      </div>
      <div className={styles.label}>
        <Icon
          src={personIcon}
          alt={t('TODO: action')}
          className={styles.labelIcon}
        />
        <div>
          {t(
            `event.participantsPerInviteEnum.${occurrence.event.participantsPerInvite}`
          )}
        </div>
      </div>
      <div className={styles.label}>
        <Icon
          src={locationIcon}
          alt={t('TODO: action')}
          className={styles.labelIcon}
        />
        <div>{occurrence.venue.name}</div>
      </div>
    </div>
  );
};

export default OccurrenceInfo;
