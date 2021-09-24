import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let amount = 0;
  // let i, j;
  let row = matrix.length;
  // let col = matrix[i].length;

  for (let i = 0; i < row; i++) {                   //перебор по-рядно
    for (let j = 0; j < matrix[i].length; j++) {    //перебор по-колонно
      if (matrix[i][j] === '^^') {                  //проверка на совпадение, если совпало, то
        amount += 1;                                //увеличение суммы на 1
      }
    }
  }
  return amount;                                    //возврат полученной суммы

}
