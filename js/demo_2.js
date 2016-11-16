'use strict';

function run() {
	function* yieldIteratorTest() {
		yield 1;
		yield 2;
		yield 3;
		yield 4;
	}

	var yieldIterator = yieldIteratorTest();

	for (var yieldedValue of yieldIterator) {
		log(yieldedValue);
	}
}
