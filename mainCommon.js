// /* sets */

// var set = new Set();

// set.add('a').add('b').add('a');

// console.log('aa');

// log('set', set);
// log('set size', set.size);
// log('set has "a"', set.has('a'));

// /* maps */

// var m = new Map();

// m.set('a', 42);
// m.set(set, 'set value');
// log('map get', m.get(set));
// log('map size', m.size);


// // promises

// function prom(a) {
// 	return new Promise(function(resolve, reject) {
// 		if (a.length > 3) {
// 			resolve(a.length);
// 		} else {
// 			reject();
// 		}
// 	});
// }


// var bubi = prom('bibi').then(function(len) {
// 	log('promise resolve', 'length is ' + len);
// }, function() {
// 	log('promise reject', 'buba');
// });
