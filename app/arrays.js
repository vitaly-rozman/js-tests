exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function(sum, element) { return sum + element; } );
  },

  remove : function(arr, item) {
    return arr.filter(function(element) {return element !== item;});
  },

  removeWithoutCopy : function(arr, item) {
    var indexes = this.findAllOccurrences(arr, item).reverse();
    indexes.forEach(function(index) {
        arr.splice(index, 1);
    });
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
     arr.splice(index, 0, item);
     return arr;
  },

  count : function(arr, item) {
    return arr.filter(function(element){ return element === item; }).length;
  },

  duplicates : function(arr) {
    var result = [];
    arr.forEach(function(element) {
        if ( result.indexOf(element) == -1 && arraysAnswers.count(arr, element) > 1 ) {
            result.push(element);
        }
    });
    return result;
  },

  square : function(arr) {
    return arr.map(function(element) { return Math.pow(element, 2); });
  },

  findAllOccurrences : function(arr, target) {
    return arr.map(function (element, index) {return element == target ? index : -1})
              .filter(function(x) {return x > -1; });
  }
};
