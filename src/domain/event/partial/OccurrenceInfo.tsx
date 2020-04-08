import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import joinClassNames from 'classnames';

import styles from './occurrenceInfo.module.scss';
import clockIcon from '../../../assets/icons/svg/clock.svg';
import calendarIcon from '../../../assets/icons/svg/calendar.svg';
import locationIcon from '../../../assets/icons/svg/location.svg';
import personIcon from '../../../assets/icons/svg/person.svg';
import { formatOccurrenceTime } from '../EventUtils';
import { childByIdQuery_child_enrolments_edges_node_occurrence as OccurrenceType } from '../../api/generatedTypes/childByIdQuery';
import { occurrenceQuery_occurrence as OccurrenceQueryType } from '../../api/generatedTypes/occurrenceQuery';
import { formatTime, newMoment } from '../../../common/time/utils';
import { DEFAULT_DATE_FORMAT } from '../../../common/time/TimeConstants';
import InfoItem from './InfoItem';

type Props = {
  className?: string;
  occurrence: OccurrenceType | OccurrenceQueryType;
  show?: string[];
};

type InfoItem = {
  id: string;
  icon: string;
  iconAlt?: string;
  label: string;
};

const OccurrenceInfo: FunctionComponent<Props> = ({
  className,
  occurrence,
  show = ['time', 'duration', 'participants', 'venue'],
}) => {
  const { t } = useTranslation();

  const infoItems: InfoItem[] = [
    {
      id: 'time',
      icon: calendarIcon,
      label: formatTime(newMoment(occurrence.time), DEFAULT_DATE_FORMAT),
    },
    {
      id: 'duration',
      icon: clockIcon,
      label: formatOccurrenceTime(occurrence.time, occurrence.event.duration),
    },
    {
      id: 'participants',
      icon: personIcon,
      label: t(
        `event.participantsPerInviteEnum.${occurrence.event.participantsPerInvite}`
      ),
    },
    {
      id: 'venue',
      icon: locationIcon,
      label: occurrence.venue.name || '',
    },
  ];

  console.log('classname');
  console.log(className);

  return (
    <div className={joinClassNames(className, styles.row)}>
      {infoItems.map(
        (item, index) =>
          show.some((id) => id === item.id) && (
            <InfoItem
              key={index}
              className={joinClassNames(className, styles.label)}
              icon={item.icon}
              iconAlt={item.iconAlt}
              label={item.label}
            />
          )
      )}
    </div>
  );
};

export default OccurrenceInfo;
