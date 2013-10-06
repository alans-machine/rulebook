#! /usr/bin/env node

var Translator = require('machine-code-translator');
var JsonToStdout = require('../lib/json-to-stdout');

var file = process.argv[2];

if (!file){
    console.log('usage: rulebook file.code')
    return;
}

new Translator(new JsonToStdout()).translate(file);
