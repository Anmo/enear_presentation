'use strict';

function run() {
	function res2json(res) {
		return res.json();
	}

	var runLogic = Promise.coroutine(function* logic() {
		let user = yield fetch('/getUser').then(res2json);
		log(user);

		let profile = yield fetch('/getProfile').then(res2json);
		log(profile);

		let tweets = yield fetch('/getTweets').then(res2json);
		log(tweets);
	});

	runLogic();
}
