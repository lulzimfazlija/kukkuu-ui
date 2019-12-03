import {
  validateDate,
  validateEqual,
  validatePostalCode,
  validateRequire,
} from '../validationUtils';

describe('Form validation utilities - ', () => {
  describe('validateDate', () => {
    test('return wrong format error if user try to input number, or general text', () => {
      const error = validateDate('foo');
      expect(error).toEqual('validation.date.invalidFormat');
    });

    test('return wrong format error if user try to wrong format date', () => {
      const error = validateDate('1f10.149.13');
      expect(error).toEqual('validation.date.invalidFormat');
    });

    test('return wrong unsupported message if kid birthdate is in future or before supported year', () => {
      const error = validateDate('12.12.2100');
      expect(error).toEqual('validation.date.unSupported');
    });
  });

  describe('validateEqual', () => {
    test('return error text if value is not equal', () => {
      const error = validateEqual('ble', 'foo', 'bar');

      expect(error).toEqual('bar');
    });

    test('return error text if value is not equal in type', () => {
      const error = validateEqual('31', 31, 'bar');

      expect(error).toEqual('bar');
    });

    test('return error text if value is not equal in type', () => {
      const error = validateEqual('31', 31, 'bar');

      expect(error).toEqual('bar');
    });

    test('will not return error text if value and compared value is different in lower/uppercase', () => {
      const error = validateEqual('foo', 'fOo', 'bar');

      expect(error).toBeUndefined();
    });

    test('support multiple string compare, return error if no match', () => {
      const error = validateEqual('foo', ['nah'], 'bar');
      expect(error).toEqual('bar');
    });

    test('support multiple string compare, also in uppercase, return error if no match', () => {
      const error = validateEqual('Foo', ['fOo', 'bar'], 'bar');
      expect(error).toBeUndefined();
    });
  });

  describe('validatePostalCode', () => {
    test('postal code has characters', () => {
      const error = validatePostalCode('a111b');
      expect(error).toEqual('validation.postalCode.invalidFormat');
    });

    test('postal code is of wrong length', () => {
      const error = validatePostalCode('001100');
      expect(error).toEqual('validation.postalCode.invalidFormat');
    });

    test('postal code is empty', () => {
      const error = validatePostalCode('');
      expect(error).toEqual('validation.postalCode.invalidFormat');
    });

    test('valid postal code', () => {
      const error = validatePostalCode('00100');
      expect(error).toBeUndefined();
    });
  });

  describe('validateRequire', () => {
    test('will show error if field is empty', () => {
      const error = validateRequire('');
      expect(error).toBeDefined();
    });

    test('will show custom error message if field is empty and custom message is defined', () => {
      const error = validateRequire('', 'foo');
      expect(error).toEqual('foo');
    });
  });
});
