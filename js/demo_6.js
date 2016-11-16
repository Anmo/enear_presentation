'use strict';

function run() {
	function res2json(res) {
		return res.json();
	}

	fetch('/getUser')
		.then(res2json)
		.then(function(json) {
			log(json);

			return fetch('/getProfile');
		})
		.then(res2json)
		.then(function(json) {
			log(json);

			return fetch('/getTweets');
		})
		.then(res2json)
		.then(function(json) {
			log(json);
		});
}
