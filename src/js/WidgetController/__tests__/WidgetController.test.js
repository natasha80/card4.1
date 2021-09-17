/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable eol-last */
import WidgetController from '../WidgetController';

const widget = new WidgetController();

test('test function of validate cards with correct value', () => {
  const value = 30569309025904;

  const result = widget.checkValidity(value);

  expect(result).toBeTruthy();
});

test('test function of validate cards with incorrect value', () => {
  const value = '3056ddd02590';

  const result = widget.checkValidity(value);

  expect(result).toBeFalsy();
});

test('checking whether the card belongs to the payment system with correct value', () => {
  const value1 = {
    name: 'discover',
    value: 6011111111111117,
  };
  const value2 = {
    name: 'master',
    value: 5555555555554444,
  };

  const result1 = widget.belongToCreditSystem(value1.value);
  const result2 = widget.belongToCreditSystem(value2.value);

  expect(result1).toBe(value1.name);
  expect(result2).toBe(value2.name);
});

test('checking whether the card belongs to the payment system with value of an unknown payment system', () => {
  const value = {
    name: 'discover',
    value: 90111111117,
  };

  const result = widget.belongToCreditSystem(value.value);

  expect(result).toBeNull();
});