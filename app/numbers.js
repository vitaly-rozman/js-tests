exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var binary = num.toString(2);
    return parseInt(binary.charAt(binary.length - bit));
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var binary = num.toString(2);
    return "00000000".substr(binary.length) + binary;
  },

  multiply: function(a, b) {
    return (a * 10) * (b * 10) / 100;
  }
};
