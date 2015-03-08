'use strict';

// console.log(navigator.userAgent.indexOf('Firefox'));
// console.log(navigator.userAgent.indexOf('Chrome'));

window.onerror = function() {
	return true;
}

function isChrome() {
	return navigator.userAgent.indexOf('Chrome') >= 0;
}

function isFirefox() {
	return navigator.userAgent.indexOf('Firefox') >= 0;
}

var logEl = document.getElementById('log');

var log = function(t, m) {
	console.log(t, m);
	logEl.innerHTML += t + ' : ' + m + '<br>';
};


log('is Firefox', isFirefox());
log('is Chrome', isChrome());


// try {
// 	if (!isChrome()) {
// 		/*** => ARROWS ***/

// 		var a = [1, 2, 3, 4, 5];

// 		a.forEach(v => log('arrows', v));
// 	}
// } catch(e) {

// }

/*** template strings ***/

var gigi = 'Gigi';
var multi = `${gigi} e pe randuri
randuri
randuri`;

log('string templates', multi);

log('____', '____');

/*** Default + Rest + Spread ***/

// function defaultValue(x, y = 12) {
// 	return x + y;
// }

// log('default value', defaultValueShort(3) === 15);

/****/

// function arrayParam(x, ...y) {
// 	return x * y.length;
// }

// log('array parameter', arrayParam(3, "hello", true) === 6);

/****/

// function spread(x, y, z) {
// 	return x + y + z;
// }

// log('spread', spread(...[1, 2, 3]) === 6);

if (!isFirefox()) {

	/*** let + const ***/

	function letF() {
		if (gigi) {
			let x;
			x = gigi;
		} else {
			let x = 'mimi';
		}

		log('let', x);
	}

	letF();

}
