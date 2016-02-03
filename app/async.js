exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(function (resolve) {
        resolve(value);
    });
  },

  manipulateRemoteData : function(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function() {
            if (xhr.status === 200) {
                var people = JSON.parse(xhr.response).people.map(function(x){return x.name; });
                resolve(people.sort());
            } else {
                reject("No file found :(");
            }
        }
        xhr.send();
    });
  }
};
