/*
 * Calculate the check digit of a an ILU code or BIC code.
 *
 * In relation to ISO 6346:2022
 * Freight containers — Coding, identification and marking.
 *
 * @param {string} ilu_str
 * @returns {number}
 * @author Heiko Schneider-Lange
 * @author Damien Bezborodov
 * @link https://www.iso.org/standard/83558.html
 */
export default function calcIluCheckDigit(ilu_str) {
  // Remove any non-alphanumeric characters and convert to upper-case.
  ilu_str = ilu_str.toUpperCase().replace(/[^A-Z0-9]+/g, '');

  // Check if length fits requirements.
  if (ilu_str.length < 10 || ilu_str.length > 11)
    return NaN;

  // Calculate check digit.
  var sum = 0;
  for (let i = 0; i < 10; i++) {

    // Map letters to numbers.
    let n = ilu_str.charCodeAt(i);
    n -= n < 58 ? 48 : 55;

    // Numbers 11, 22, 33 are omitted.
    n += (n-1) / 10;

    // Sum of all numbers multiplied by weighting.
    sum += n << i;
  }

  // Modulus of 11, and map 10 to 0.
  return sum % 11 % 10;
}
