# Calc-ILU-check-digit

How is the check digit of a container calculated?

Do you need to check if a container id (ILU code or BIC code) is valid?

Take the javascript function, that I publish with this little project, to find out, if the check digit is correct.

The calculation is based upon:

 * [ISO 6346:2022 Freight containers — Coding, identification and marking](https://www.iso.org/standard/83558.html)

## Installation

```
npm install calc-ilu-check-digit
```

## Usage

```javascript
import calcIluCheckDigit from 'calc-ilu-check-digit';

let ilu = 'ZEPU 003725 5';
calcIluCheckDigit(ilu); // Will return 5.
```
