const caesar = function (str, shift) {
  return str
    .split('')
    .map((char) => shiftChar(char, shift))
    .join('');
};

// check if its Upper of Lower Case A-65, a-97
const codeSet = (code) => (code < 97 ? 65 : 97);

// Allow modulo for negative numbers
const mod = (n, m) => ((n % m) + m) % m;

const shiftChar = (char, shift) => {
  const code = char.charCodeAt();
  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    return String.fromCharCode(
      mod(code + shift - codeSet(code), 26) + codeSet(code)
    );
  }
  return char;
};

module.exports = caesar;
