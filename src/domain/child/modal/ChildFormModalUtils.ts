import { newMoment } from '../../../common/time/utils';
import { Child } from '../types/ChildTypes';

export const getChildFormModalInitialData = (child: Child) => {
  if (child.birthdate) {
    const birthdateMoment = newMoment(child.birthdate);
    return {
      day: birthdateMoment.days(),
      month: birthdateMoment.month() - 1,
      year: birthdateMoment.years(),
    };
  }

  return {
    day: '',
    month: '',
    year: '',
  };
};
