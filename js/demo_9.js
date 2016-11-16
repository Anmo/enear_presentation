'use strict';

function run() {
	function res2json(res) {
		return res.json();
	}

	Promise.coroutine.addYieldHandler(function(value) {
		if (typeof value === 'string') {
			return fetch(value).then(res2json);
		}
	});

	var runLogic = Promise.coroutine(function* logic() {
		let user = yield '/getUser';
		log(user);

		let profile = yield '/getProfile';
		log(profile);

		let tweets = yield '/getTweets';
		log(tweets);
	});

	runLogic();
}
