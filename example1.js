import { test, it, expect } from '@jest/globals';
import { fullTrim, nameIsValid } from '../src/homework/homework3';

describe('Здесь могла бы быть ваша реклама', () => {
  /**
   * Допишите несколько unit тестов для функции (вспоминаем тест-дизайн),
   * которая удаляет пробелы и табуляторы в начале и конце строки.
   */

  test('Проверяем тримминг для пробела в начале слова', () => {
    expect(fullTrim(' Это домашка')).toEqual('Это домашка');
  });

  it('Successfully imported', () => {
    expect(fullTrim)
      .toBeTruthy();
  });
  it('Is a function', () => {
    expect(typeof fullTrim)
      .toBe('function');
  });
  it('Trims spaces at the end of the row', () => {
    expect(fullTrim('This is my homework '))
      .toEqual('This is my homework');
  });
  it('Returns an empty row when contains spaces only', () => {
    expect(fullTrim('   '))
      .toEqual('');
  });
  it('Should not trim spaces inside the row', () => {
    expect(fullTrim('This is my homework'))
      .toEqual('This is my homework');
  });
  it('Trims tabs at the end of the row', () => {
    expect(fullTrim('This is my homework '))
      .toEqual('This is my homework');
  });
  it('Trims tabs in the beginning of the row', () => {
    expect(fullTrim('  This is my homework'))
      .toEqual('This is my homework');
  });
  it('Returns an empty row when contains tabs only', () => {
    expect(fullTrim('  '))
      .toEqual('');
  });

  /**
   * Напишите параметризированный unit (describe.each`table`) тест для функции,
   * которая проверяет валидность кличек котиков.
   * Кличка считается валидной, если она соответствует следующим условиям:
   * 1) Кличка содержит минимум два символа;
   * 2) Кличка не пустая;
   * 3) Кличка не содержит пробелов.

   Обратите внимание, в примере приведен обычный тест.
   Параметризированный тест - https://jestjs.io/docs/en/api#testeachtablename-fn-timeout
   */

  test('Передать валидную кличку', () => {
    expect(nameIsValid('Имя')).toEqual(true);
  });
});

describe('Cat names parametric test', () => {
  test.each`
      name | expected
      ${'Valid'} | ${true}
      ${'VALID'} | ${true}
      ${'valid'} | ${true}
      ${'Cat'} | ${true}
      ${'Ku'} | ${true}
      ${'X'} | ${false}
      ${'With space'} | ${false}
      ${' Spacefirst'} | ${false}
      ${'Spacelast '} | ${false}
      `('$name = $expected', ({
    name,
    expected,
  }) => {
    expect(nameIsValid(name, expected)).toBe(expected);
  });
});
