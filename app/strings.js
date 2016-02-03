exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var counter;
    var result = str.split("").filter(function(element, index, array) {
        var duplicate = (element === array[index-1]);
        counter = duplicate ? counter + 1 : 0;

        return !duplicate || counter < amount;
    });

    return result.join("");
  },
  wordWrap: function(str, cols) {
    var result = "";
    var words = str.split(" ");
    var delta = 0;
    for (var index = 1; index < words.length; ++index ) {
        var length = words[index-1].length;
        if( (length >= cols) || (length + words[index].length + 1 >= cols) ) {
            result += words[index-1] + "\n";
        } else if ( length + delta >= cols ) {
            delta = 0;
            result += words[index-1] + "\n";
        } else {
            result += words[index-1] + " ";
            delta += length + 1;
        }
    }
    result+=words[words.length-1];

    return result;
  },
  reverseString: function(str) {
    return str.split("").reverse().join("");
  }
};
