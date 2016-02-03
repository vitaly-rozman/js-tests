exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var files = new Array();
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

  },

  fibonacci: function(n) {
    if ( n == 0 || n ==1 ) {
        return n;
    } else {
        return this.fibonacci(n-2) + this.fibonacci(n-1);
    }
  },

  validParentheses: function(n) {

  }
};
