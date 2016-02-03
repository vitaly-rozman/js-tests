exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn(arr[0], arr[1], arr[2]);
  },

  speak : function(fn, obj) {
    obj.fn = fn;
    return obj.fn();
  },

  functionFunction : function(str) {
    return function(str1){ return str + ", " + str1; };
  },

  makeClosures : function(arr, fn) {
    return arr.map(function(element) { return function(){ return fn(element); }; });
  },

  partial : function(fn, str1, str2) {
    return function(punctuation) { return fn(str1, str2, punctuation);};
  },

  useArguments : function() {
    var sum = 0;
    for ( var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return fn.apply(this, args);
  },

  partialUsingArguments : function(fn) {
    var args1 = Array.prototype.slice.call(arguments, 1);
    return function() {
        var args2 = Array.prototype.slice.call(arguments);
        return fn.apply(this, args1.concat(args2));
    };
  },

  curryIt : function(fn) {
    return function(a) {
        return function(b) {
            return function(c) {
                return fn(a, b, c);
            }
        }
    }
  }
};
