import { formatTime, newMoment } from '../../common/time/utils';
import { DEFAULT_TIME_FORMAT } from '../../common/time/TimeConstants';

export const formatOccurrenceTime = (
  startTimeRaw: Date,
  durationMinutes: number | null
) => {
  let occurrenceTime;
  const startTime = formatTime(newMoment(startTimeRaw), DEFAULT_TIME_FORMAT);

  if (durationMinutes) {
    const endTimeRaw = newMoment(startTimeRaw).add(durationMinutes, 'minutes');
    const endTime = formatTime(newMoment(endTimeRaw), DEFAULT_TIME_FORMAT);
    occurrenceTime = `${startTime} - ${endTime}`;
  } else {
    occurrenceTime = startTime;
  }

  return occurrenceTime;
};
