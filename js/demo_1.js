'use strict';

function run() {
	var promise = new Promise(function(resolve, reject) {
		resolve(42);
	});

	var timeoutPromise = new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(42)
		}, 1000);
	});

	timeoutPromise
		.then(val => log('timeout done ' + val));

	promise
		.then(val => log('done ' + val))
		.catch(val => log('err ' + val));
}
