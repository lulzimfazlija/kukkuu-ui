import {
  validateDate,
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

  describe('validatePostalCode', () => {
    test('postal code has characters', () => {
      const error = validatePostalCode('a111b');
      expect(error).toEqual('validation.postalCode.invalidFormat');
    });

    test('postal code is of wrong length', () => {
      const error = validatePostalCode('001100');
      expect(error).toEqual('validation.postalCode.invalidFormat');
    });

    test('postal code should not be empty', () => {
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
