import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {

  // объявление переменных
  let str = n.toString();  // перевод n в строку
  let maxNumber = 0;
  let interim = 0;

  for (let i = 0; i < str.length; i++) {      // перебор цифр циклом

    interim = str.slice(0, i) + str.slice(i + 1); // получение промежуточного числа из 2 цифр

    // console.log(typeof (interim));
    interim = Number(interim);        //перевод строчного числа в числовой тип
    // console.log(typeof (interim));
    if (maxNumber < interim) {        //сравнение полученного числа с максимальным, если это число больше максимального, то входим в {}
      maxNumber = interim;            //присваиваем полученное число максимальному
    }
  }
  return maxNumber;                   //вернуть максимальное число


}
