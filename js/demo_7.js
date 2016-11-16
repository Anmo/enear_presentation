'use strict';

function run() {
	function res2json(res) {
		return res.json();
	}
	function next2promise(data) {
		let value = runLogic.next(data).value;

		return value && value.then(res2json);
	}

	function* logic() {
		let user = yield fetch('/getUser');
		log(user);

		let profile = yield fetch('/getProfile');
		log(profile);

		let tweets = yield fetch('/getTweets');
		log(tweets);
	}

	var runLogic = logic();

	runLogic.next().value.then(res2json)//next2promise()
		.then(next2promise)
		.then(next2promise)
		.then(next2promise);
}
