import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine( str ) {


  if (str.length === 0) {   // проверяем строка пустая или нет
    return '';              // если пустая, то возвращаем ''
  }                         // если нет, то идем дальше

  let sum = 1;              // т.к. строка не пустая, отсчет количества элементов начинаем с 1
  let encodeStr = '';       // начальная наша закодированная строка

  for (let i = 0; i < str.length; i++) {              // проходим циклом по элементам строки
    if (str[i] === str[i + 1]) {                      // проверяем, если элемент строки совпадает с последующим элементом,
      sum += 1;                                       // то сумму увеличиваем на 1
    } else {                                          // иначе
      if (str[i] !== str[i + 1]) {                    // проверяем, если элемент строки не совпадает с последующим элементом,
        if ((encodeStr = sum + encodeStr) !== 1) {    // и проверяем закодированная строка не равна 1
          encodeStr = encodeStr + `${sum}${str[i]}`;  // прибавляем к закодированной строке количество и букву
          // console.log(encodeStr);                     // проверка что получилось
          sum = 1;                                    // обновляем количество до 1
        } else {                                      // иначе
          encodeStr = encodeStr + `{str[i]}`;         // прибавляем к закодированной строке только букву
          // console.log(encodeStr);                     // проверка что получилось
        }
      }    
    }                                    
  }
  // console.log(encodeStr);                             // проверка что получилось
  return encodeStr;                                   // вернуть полученный результат
  

}
