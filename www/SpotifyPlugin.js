var exec = require('cordova/exec');

module.exports = {
  play: function(success, error, uri, token, clientId, positionMs) {
    var resolve = function (v) { return setTimeout(function () { return success(v); }); };
    var reject = function (e) { return setTimeout(function () { return error(e); }); };
    exec(
      function (event) { return resolve(event); },
      function (err) { return reject(err); },
      'SpotifyPlugin',
      'play',
      [uri, token, clientId, positionMs || 0]
    );
  }
}
