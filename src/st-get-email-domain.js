import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {

  //объявление переменной
  let result = '';
  // let str = email;
  // for (let i = 0; email.length > 0; i++) { //поиск с головы не верен, т.к. оказывается может много @

  for (let i = email.length; i > 0; i--) {  // прохождение циклом с конца емейла до выполнения условия в {}
    if (email[i] === '@') {                 // проверка условия (поиск @), чтобы зайти в {}
      result = email.slice(i + 1);          // извлечение элементов из емейла от i+1 до конца. i-тый = @, а он нам не нужен, поэтому i+1
      break;                                // прерывание и выход из цикла
    }
  }
  return result;                            // вернуть полученный результат
  // console.log(`'${result}`);
}
