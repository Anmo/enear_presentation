'use strict';

function run() {
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange= function() {
		if (this.readyState !== 4 || this.status !== 200) { return; }

		log(this.responseText);

		this.onreadystatechange= function() {
			if (this.readyState !== 4 || this.status !== 200) { return; }

			log(this.responseText);

			this.onreadystatechange= function() {
				if (this.readyState !== 4 || this.status !== 200) { return; }

				log(this.responseText);
			};

			this.open('GET', '/getTweets');
			this.send();
		};

		this.open('GET', '/getProfile');
		this.send();
	};

	xhr.open('GET', '/getUser');
	xhr.send();
}
