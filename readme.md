#Arrow functions

#####Shorthand for creating functions.

Shorter syntax:
```javascript
    m => m + 3;
    var sum = (m1, m2) => {
    return m1 + m2;
    };
    sum(2, 3); // will be 5
    var a = [1, 2, 3, 4, 5];
    a.forEach(v => console.log(v + 1)); // will log: 2 3 4 5 6
```
Binded this:
```javascript
    var sum2 = function(a, b) {
        this.a = a;
        this.b = b;

    	var dd = (v => console.log(this.a + this.b));
        dd();
    }

    sum2(3, 7); //  will log 10
```
