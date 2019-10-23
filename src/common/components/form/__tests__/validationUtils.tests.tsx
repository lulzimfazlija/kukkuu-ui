import { validateBirthDay, validateEqual } from '../validationUtils';

describe('Form validation utilities - ', () => {
  describe('validateBirthDay', () => {
    test('return require text if value is empty', () => {
      const error = validateBirthDay('');

      expect(error).toEqual('Required');
    });

    test('return wrong format error if user try to input number, or general text', () => {
      const error = validateBirthDay('foo');
      expect(error).toEqual('Invalid date input');
    });

    test('return wrong format error if user try to wrong format date', () => {
      const error = validateBirthDay('1f10.149.13');
      expect(error).toEqual('Invalid date input');
    });

    test('return wrong unsupported message if kid birthday is in future or before supported year', () => {
      const error = validateBirthDay('12.12.2100');
      expect(error).toEqual('Input date is not supported');
    });
  });

  describe('validateEqual', () => {
    test('return require text if value is empty', () => {
      const error = validateEqual('', 'foo', 'bar');

      expect(error).toEqual('Required');
    });

    test('return error text if value is not equal', () => {
      const error = validateEqual('ble', 'foo', 'bar');

      expect(error).toEqual('bar');
    });
  });
});
