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
export default function getEmailDomain(/* email */) {

  let result = '';
  let i;
  for (i = 0; i < str.length; i++) {
    if (str[i] === '@') {
      result = str.slice(i + 1);
    }
  }
  //  return `'${result}'`;
  console.log(`'${result}'`);

}

