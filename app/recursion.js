exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var files = [];

    dirName = (dirName === undefined) || (dirName === data.dir) ? undefined : dirName;
    data.files.forEach(function(element) {
        if ( typeof element === 'object' ) {
            files = files.concat(recursionAnswers.listFiles(element, dirName));
        } else if ( dirName === undefined ) {
            files.push(element);
        }
    });

    return files;
  },

  permute: function(arr) {
    var result = [];

    if ( arr.length == 1 ) {
        result.push(arr);
    } else {
        var first = arr.shift();
        this.permute(arr).forEach(function(element) {
            for (var index=0; index <= element.length; ++index) {
                var copy = element.slice();
                copy.splice(index, 0, first);
                result.push(copy);
            }
        });
    }

    return result;
  },

  fibonacci: function(n) {
    if ( n == 0 || n ==1 ) {
        return n;
    } else {
        return this.fibonacci(n-2) + this.fibonacci(n-1);
    }
  },

  validParentheses: function(n) {
    var result = [];
    var braces = '()';

    if ( n == 1) {
        return [braces];
    } else {
        this.validParentheses(n-1).forEach(function(element) {
            for (var index=0; index < element.length; ++index) {
                var option = element.substr(0, index) + braces + element.substr(index);
                if ( result.indexOf(option) == -1 ) {
                    result.push(option);
                }
            }
        });
    }

    return result;
  }
};
