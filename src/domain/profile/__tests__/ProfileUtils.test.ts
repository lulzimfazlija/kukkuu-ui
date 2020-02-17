import { normalizeProfileChild } from '../ProfileUtil';
import { RelationshipTypeEnum } from '../../api/generatedTypes/globalTypes';

describe('ProfileUtils', () => {
  describe('normalizeProfileChild', () => {
    test('input a fetched child and return a child for mutation', () => {
      const child = {
        id: 'foo',
        firstName: 'foo',
        lastName: 'bar',
        birthdate: '2020-01-01',
        postalCode: '00100',
        relationships: {
          edges: [
            {
              node: {
                type: RelationshipTypeEnum.PARENT,
              },
            },
          ],
        },
      };

      // Have relationship and homeCity autofill
      const expected = {
        id: 'foo',
        firstName: 'foo',
        lastName: 'bar',
        homeCity: 'Helsinki',
        birthdate: '2020-01-01',
        postalCode: '00100',
        relationship: {
          type: 'PARENT',
        },
      };

      const outputChild = normalizeProfileChild(child);

      expect(outputChild).toEqual(expected);
    });
  });
});
