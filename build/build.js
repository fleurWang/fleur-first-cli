'use strict';

// Module dependencies
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _lib = require('./lib');

var _lib2 = _interopRequireDefault(_lib);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _packageJson = require('./package.json');

var _packageJson2 = _interopRequireDefault(_packageJson);

exports['default'] = function (params) {

  _commander2['default'].version(_packageJson2['default'].version).usage('[word to be translated]');

  _commander2['default'].on('--help', function () {
    console.log('  Example:');
    console.log('\n  $ ntrans professor\n');
  });

  _commander2['default'].parse(process.argv);

  if (params.length === 0) {
    _commander2['default'].help();

    return;
  }

  (0, _request2['default'])(_config2['default'].src + encodeURIComponent(params), function (err, res, body) {
    var data;

    if (!err && res.statusCode === 200) {
      data = JSON.parse(body);

      if (data.errorCode == 0) {
        _lib2['default'].output(data);
      } else {
        console.log('[ERROR]'.red + ' Youdao API request error.');
      }
    } else {
      console.log('[ERROR]'.red + ' Youdao API request error.');
    }
  });
};

module.exports = exports['default'];
