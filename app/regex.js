exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    return /[0-9]+/.test(str)
  },

  containsRepeatingLetter : function(str) {
    return /([a-zA-Z])\1/.test(str);
  },

  endsWithVowel : function(str) {
    return /[aeiouAEIOU]$/.test(str);
  },

  captureThreeNumbers : function(str) {
    var result = str.match(/[0-9]{3}/);
    return result === null ? false : result[0];
  },

  matchesPattern : function(str) {
    return /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(str);
  },
  isUSD : function(str) {
    return /^\$[0-9]{1,3}(\,[0-9]{3})*(\.[0-9]{2})?$/.test(str);
  }
};
