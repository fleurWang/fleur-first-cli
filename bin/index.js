#!/usr/bin/env node

var pkg = require('../build/build');

var param = process.argv[2] ? process.argv[2] : '';

pkg(param);