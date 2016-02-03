exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {

    console.log(start++);
    var logger = setInterval(function(){
        if ( start > end ) {
            stopLogger();
        } else {
            console.log(start++);
        }
    }, 100);
    var stopLogger = function() { clearInterval(logger); };

    return {cancel: stopLogger};
  }
};
