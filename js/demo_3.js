'use strict';

function run() {
	function* yieldGeneratorTest() {
		var name = yield 'Can you tell me you name?';
		var age = yield 'And sir ' + name + ' how old are you?';

		var confirm = yield 'Please confirm you information:\n - name: ' + name + '\n - age: ' + age;

		return confirm ? 'Thank you.' : 'Please try again';
	}

	var yieldGenerator = yieldGeneratorTest();

	var yieldedValue = yieldGenerator.next();
	log(yieldedValue);

	setTimeout(() => {
		yieldedValue = yieldGenerator.next(prompt(yieldedValue.value, 'Bruno Tavares'));
		log(yieldedValue);

		setTimeout(() => {
			yieldedValue = yieldGenerator.next(prompt(yieldedValue.value, '30'));
			log(yieldedValue);

			setTimeout(() => {
				yieldedValue = yieldGenerator.next(confirm(yieldedValue.value));
				log(yieldedValue);
			}, 200);
		}, 200);
	}, 200);
}
