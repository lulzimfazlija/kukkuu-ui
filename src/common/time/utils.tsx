import moment from 'moment';

export const newMoment = (
  inp?: moment.MomentInput,
  format?: moment.MomentFormatSpecification,
  strict?: boolean
) => moment(inp, format, strict);
