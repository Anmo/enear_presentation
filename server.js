'use strict';

var demoJsonResolve = require.resolve('./constant/demos.json')

var app = require('express')();
var http = require('http').Server(app);

var maxDemoIndex = require('./constant/demos.json').max_demo_index

var path = require('path');

var indexHTML = path.join(__dirname, 'index.html');
var indexScript = path.join(__dirname, 'js', 'index.js');

var demosJson = path.join(__dirname, 'constant', 'demos.json');

var styleCSS = path.join(__dirname, 'css', 'style.css');

var demoPreProcessed = path.join(__dirname, 'js', 'preProcessedDemo.js');

app.get(/^\/ext\/(.*)$/, function(req, res) {
	res.sendFile(path.join(__dirname, 'ext', req.params[0]));
});

app.get(/^\/(\d+)\/$/, function(req, res) {
	res.sendFile(indexHTML);
});

app.get('/script.js', function(req, res) {
	res.sendFile(indexScript);
});

app.get('/style.css', function(req, res) {
	res.sendFile(styleCSS);
});

app.get('/demos.json', function(req, res) {
	res.sendFile(demosJson);
});

app.get(/^\/(\d+)\/demo.js$/, function(req, res) {
	var demoIdx = parseInt(req.params[0]);

	var scriptName = demoIdx >= maxDemoIndex ? 'lastDemo' :
												'demo_' + demoIdx;

	res.sendFile(path.join(__dirname, 'js/' + scriptName + '.js'));
});

app.get('/preProcessedDemo.js', function(req, res) {
	res.sendFile(demoPreProcessed);
});

app.get('/getUser', function(req, res) {
	setTimeout(function() {
		res.json({
			userId: 3
		});
	}, 2500);
});

app.get('/getProfile', function(req, res) {
	setTimeout(function() {
		res.json({
			foto: null
		});
	}, 2500);
});

app.get('/getTweets', function(req, res) {
	setTimeout(function() {
		res.json({
			tweets: []
		});
	}, 2500);
});

http.listen(3000, function() {
	console.log('listening on *:3000');
});
