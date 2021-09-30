import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disksNumber, turnsSpeed) {

  // объявление переменных
  let turns;
  let seconds;

  // решение головоломки
  turns = 2 ** disksNumber - 1;  // вычисление кол-ва туров по алгоритму turns=2^n-1
  seconds = Math.floor(3600 / turnsSpeed * turns);  // нахождение времени для решения в секундах, т.к. входные данные в часах
  return { turns, seconds };  // вернуть полученный результат вычислений

};


