#! /usr/bin/env node

var fs = require('fs');
var doT = require('dot');
var parser = require('machine-code');
var EnhancedParseError = require('../lib/parse-error');

var file = process.argv[2];

if (!file){
    console.log('usage: rulebook file.code')
    return;
}

fs.readFile('test/successor.code', function(error, data){
    if (error) {
	throw error;
    }

    try {
	var ast = parser.parse(data.toString());
    } catch(parseError) {
	throw new EnhancedParseError(parseError);
    }

    process.stdout.write(JSON.stringify(ast, null, 2));
});
