import { nlToParagraph } from '../commonUtils';

it('converts newlines to brs', () => {
  const string = 'a\n\rb';
  expect(nlToParagraph(string)).toMatchSnapshot();
});
