#!/usr/bin/env node

console.log('enter')
var pkg = require('../index.js');

var param = process.argv[2] ? process.argv[2] : '';
pkg(param);