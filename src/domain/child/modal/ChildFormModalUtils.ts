import { newMoment } from '../../../common/time/utils';
import { Child } from '../types/ChildTypes';

/**
 * Transform initial data to feed to form
 * Almost similar with the one from
 * src/domain/home/form/HomePreliminaryFormUtils.ts
 */

export const getChildInitialFormBirthdate = (child: Child) => {
  if (child.birthdate) {
    const birthdateMoment = newMoment(child.birthdate);
    return {
      day: birthdateMoment.date(),
      month: birthdateMoment.month() + 1,
      year: birthdateMoment.year(),
    };
  }

  return {
    day: '',
    month: '',
    year: '',
  };
};
