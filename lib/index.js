
var request = require('request');
var program = require('commander');

request('http://fanyi.youdao.com/openapi.do?keyfrom=node-translator&key=2058911035&type=data&doctype=json&version=1.1&q=test', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
});

 var translator = function (params) {

    _program2['default'].version(_pkg2['default'].version).usage('[word to be translated]');
  
    _program2['default'].on('--help', function () {
      console.log('  Example:');
      console.log('\n  $ ntrans professor\n');
    });
  
    _program2['default'].parse(process.argv);
  
    if (params.length === 0) {
      _program2['default'].help();
  
      return;
    }
  
    _request2['default'](_config2['default'].src + encodeURIComponent(params), function (err, res, body) {
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

module.exports = translator;