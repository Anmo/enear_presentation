'use strict';

function run() {
	var xhr = new XMLHttpRequest();

	xhr.open('GET', '/getUser', false);
	xhr.send();
	log(xhr.responseText);

	xhr.open('GET', '/getProfile', false);
	xhr.send();
	log(xhr.responseText);

	xhr.open('GET', '/getTweets', false);
	xhr.send();
	log(xhr.responseText);
}
