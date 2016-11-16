hljs.initHighlighting();

var codes = document.getElementsByTagName('code');
var demo = codes[0];
var preLog = codes[1];

var paths = location.pathname.split('/');
var demoIdx = parseInt(paths[paths.length - 2]);

function log(msg) {
	preLog.innerHTML += (typeof msg === 'string' ? msg : JSON.stringify(msg, null, 4)) + '\n';
}

function runIt() {
	preLog.innerHTML = '';

	run();
}

var pressed;

fetch('/demos.json')
	.then(res => res.json())
	.then(json => {
		var lastIndex = json.max_demo_index + 1;

		window.addEventListener('keydown', function(e) {
			if (pressed) { return; }

			var keyCode = e.keyCode;

			var isLeft = keyCode === 37;
			var isRight = keyCode === 39;

			if (!isLeft && !isRight) { return; }

			pressed = true;

			demoIdx += isLeft ? -1 : 1;

			location.pathname = (!demoIdx ? lastIndex :
				demoIdx <= lastIndex ? demoIdx : '1') + '/';
		});

		if (demoIdx === lastIndex) {
			fetch('/preProcessedDemo.js')
				.then(res => res.text())
				.then(js => {
					demo.innerHTML = js;

					hljs.highlightBlock(demo);
				});
		} else {
			fetch('demo.js')
				.then(res => res.text())
				.then(js => {
					demo.innerHTML = js;

					hljs.highlightBlock(demo);
				});
		}
	});
