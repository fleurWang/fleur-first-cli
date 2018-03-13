'use strict';

// Module dependencies
const request = require('request');
const program = require('commander');

const lib = require ('./lib');
const url = 'http://fanyi.youdao.com/openapi.do?keyfrom=node-translator&key=2058911035&type=data&doctype=json&version=1.1&q=';
const pkg =('./package.json');

module.exports = function (params) {
  program
    .version(pkg.version)
    .usage('[word to be translated]');

  program.on('--help', () => {
    console.log('  Example:');
    console.log('\n  $ ntrans professor\n');
  });

  program.parse(process.argv);

  if (params.length === 0) {
    program.help();

    return;
  }

  request(url + encodeURIComponent(params), (err, res, body) => {
    var data;

    if (!err && res.statusCode === 200) {
      data = JSON.parse(body);

      if (data.errorCode == 0) {
        lib.output(data);
      } else {
        console.log('[ERROR]'.red + ' Youdao API request error.');
      }
    } else {
      console.log('[ERROR]'.red + ' Youdao API request error.')
    }
  });

};