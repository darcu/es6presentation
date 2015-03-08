'use strict';

// console.log(navigator.userAgent.indexOf('Firefox'));
// console.log(navigator.userAgent.indexOf('Chrome'));



/*** template strings ***/

var gigi = 'Gigi';
var multi = `${gigi} e pe randuri
randuri
randuri`;

log('string templates', multi);

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

/*** let + const ***/

var x = 'pipi';

var letF = function() {
	if (gigi) {
		let x = gigi;
		log('let', x);
	}

	log('var', x);

	if (gigi + 2) {
		let x = 'Mimi';
		log('let', x);
	}

	log('var', x);
}

letF();

/** for var of **/

// let fibonacci = {
// 	[Symbol.iterator]() {
// 		var pre = 0,
// 			cur = 1;
// 		return {
// 			next() {
// 				[pre, cur] = [cur, pre + cur];
// 				return {
// 					done: false,
// 					value: cur
// 				}
// 			}
// 		}
// 	}
// };

// for (var n of fibonacci) {
// 	// truncate the sequence at 1000
// 	if (n > 1000) {
// 		break;
// 	}
// 	console.log(n);
// }

