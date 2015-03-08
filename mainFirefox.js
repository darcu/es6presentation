/* => */

var a = [1, 2, 3, 4, 5];
// a.forEach(v => log('arrows', v));
a.forEach(v => console.log(v));

var sum = (m1, m2) => {
	return m1 + m2;
}

console.log(sum(2, 3));


var sum2 = function(a, b) {
	this.a = a;
	this.b = b;

	var dd = (v => console.log(this.a + this.b));

	console.log(dd());
}

sum2(3, 7);


// /* proxies */

// var initialObject = {
// 	'age': 24
// };

// var proxyHandler = {
// 	get: function(receiver, name) {
// 		return `Hello, ${name}! You are ${receiver.age}.`;
// 	}
// };

// var p = new Proxy(initialObject, proxyHandler);

// log('proxy value', p.world);


// var initialFunction = function() {
// 	return 'I am the initial function!';
// };

// var handler = {
// 	apply: function(receiver, ...args) {
// 		return 'I am the proxy ' + args.length;
// 	}
// };

// var p = new Proxy(initialFunction, handler);

// log('initial function', initialFunction());
// log('proxy function', p('biatch', '!'));
