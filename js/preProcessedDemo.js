'use strict';

window.run = function() {
	function res2json(res) {
		return res.json();
	}

	async function logic() {
		let user = await fetch('/getUser').then(res2json);
		log(user);

		let profile = await fetch('/getProfile').then(res2json);
		log(profile);

		let tweets = await fetch('/getTweets').then(res2json);
		log(tweets);
	};

	logic();
}
