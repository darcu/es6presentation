class: center, middle

# Variabile

---

# Variabile

Variabilele sunt containeri care pot contine valori de diverse tipuri, numere (.mono[Number]), siruri de caractere (.mono[String]), vectori (.mono[Array]) si altele.

```javascript
var variabilaMea;
```

Toate liniile de cod trebuie incheiate cu punct si virgula ; . Nu e obligatoriu dar e bine sa va invatati asa;

```javascript
console.log(variabilaMea);
```

.mono[console.log()] afiseaza in consola continutul dintre paranteze. Rezultatul in cazul asta va fi .mono[undefined] pentru ca variabila nu are inca o valoare.

```javascript
variabilaMea = 'Gigi';

console.log(variabilaMea);
```
In consola se va afisa .mono[Gigi]




---

# Variabile

O variabila isi poate schimba valoarea;

```javascript
variabilaMea = 'Bibi';
console.log(variabilaMea); // va afisa 'Bibi' in consola
```

Codul poate contine comentarii pentru a fi mai usor inteles

```javascript
// acesta este un comentariu de o linie
```
/\*
    acest comentariu se poate intinde  pe mai multe linii
\*/

---

# Operatori

Operatorii



---











```javascript
```

.mono[]


# Arrow functions

Shorthand for creating functions

```javascript
    // simplest form
    m => m + 3;

    // assigned to a variable
    var sum = ( m1, m2 ) => {
        return m1 + m2;
    };

    sum( 2, 3 ); // will be 5

    // works best as anonymous functions
    var a = [ 1, 2, 3, 4, 5 ];

    a.forEach( v => console.log( v + 1 ) ); // will log: 2 3 4 5 6
```

.lower[![Firefox](img/ff128.png)]


---

# Arrow functions

Binded this
```javascript
    var sum2 = function( a, b ) {
        this.a = a;
        this.b = b;

      var dd = ( v => console.log( this.a + this.b ) );
        dd();
    };

    sum2( 3, 7 ); //  will log 10
```

.lower[![Firefox](img/ff128.png)]


---

# Template strings

Allow multi line strings without hacks and add a new method of interpolation.

```javascript
    // template strings are initialized with a backtick `
    var gigi = 'Gigi Valoare';
    var câte = 3;

    // variables can be interpolated with ${var}
    var multi = `${gigi} e pe ${câte} rânduri
                rânduri
                rânduri.`;

    console.log( multi );
    // will log:
    //  Gigi Valoare e pe 3 rânduri
    //      rânduri
    //      rânduri.
```

.lower[![Firefox](img/ff128.png) ![Crhome](img/chrome128.png)]

---

# Default parameters

Parameters can have ___default___ values. If the parameter is missing or is sent as undefined, it will take the default value. Works in Firefox (partial support).

```javascript
    function defaultValue( x, y = 12 ) {
        return x + y;
    }


    defaultValue( 3 ) === 15;             // is true

    defaultValue( 3, undefined ) === 15;  // is true

    defaultValue( 3, null ) === 15;       // is false
```

.lower[![Firefox](img/ff128.png)]

---

# Rest parameters

Functions with ___rest___ parameters take an arbitrary number of parameters.
```javascript
    function arrayParam( x, ...y ) {
        return x * y.length;
    }

    arrayParam( 3, "hello", true ) === 6; // is true
```

.lower[![Firefox](img/ff128.png)]

---

# Spread parameters

___Spread___ parameters are distributed to function parameters
```javascript
    function spread( x, y, z ) {
        return x + y + z;
    }

    spread( ...[ 1, 2, 3 ] ) === 6; // is true

    var arr = [ 1, 2, 3, 4 ];
    spread( ...arr ) === 6;         // is true
```
.lower[![Firefox](img/ff128.png)]

---

# Let

Block-scoped variables
```javascript
    var x = 'Didi';

    if ( gigi ) {
        let x = 'Gigi';
        console.log( x );         // Gigi
    }

    console.log(x);               // Didi

    if ( gigi + 2 ) {
        try {
            console.log( x );     // x is not defined
        } catch(e) {}

        let x = 'Mimi';
        console.log( x );         // Mimi
    }

    console.log( x );             // Didi
```

.lower[![Chrome](img/chrome128.png)]

---

# Let

Very useful in .mono[for] loops
```javascript
    for ( var i = 0; i < 3; i++ ) {
        setTimeout( function() {
            console.log( 'i = ' + i );    // i = 3 three times
        }, 500 );
    }

    for ( let i = 0; i < 3; i++ ) {
        setTimeout( function() {
            console.log( 'i = ' + i );    // i = 0 | i = 1 | i = 2
        }, 500 );
    }
```

.lower[![Chrome](img/chrome128.png)]

---

# Const

A .mono[constant] variable type, once set can't be reassigned. Must have an initial value. __Block scoped__.
```javascript
{
    let x = 'default';
    console.log( x );            // default


    {
        const x = 'sneaky';      // block scope, const x is ok
        console.log( x );        // sneaky

        try {
            x = 'foo';           // 'x' has already been declared
        } catch(e) {}
    }

    try {
        let x = 'inner';         // 'x' has already been declared
    } catch(e) {}

    console.log( x );            // default
}
```

.lower[![Firefox](img/ff128.png) ![Crhome](img/chrome128.png)]

---

# Sets

A new type of .mono[object] that lets you store _unique_ values of any type, i.e. values will only be stored once.
```javascript
    var set = new Set();

    set.add( 'a' ).add( 'b' ).add( 'a' );
    set.add( 'c' );

    console.log( set );                   // Set {"a", "b", "c"}

    console.log( set.length );            // undefined
    console.log( set.size );              // 3
    console.log( set.has( 'a' ) );        // true

    set.forEach( v => console.log(v) );   // a b c

    set.delete( 'b' );
    console.log( set );                   // Set {"a", "c"}
    console.log( set.has( 'b' ) );        // false

    set.clear();
    console.log( set );                   // Set {}
```

.lower[![Chrome](img/chrome128.png) ![Firefox](img/ff128.png)]

---

# Maps

A _key/value_ map. .mono[key] can have any value. No prototype so no default keys.
```javascript
    var key = {
        'whatever': true
    };

    var m = new Map();

    m.set( 'a', 42 );
    m.set( set, set );
    m.set( key, 'key is an object, honey badger doesn\'t care' );

    console.log( m.get(set) );    // Set {"a", "b", "c"}
    console.log( m.get(key) );    // key is an object, honey badger doesn't care
    console.log( m.size );        // 3
```

.lower[![Firefox](img/ff128.png) ![Crhome](img/chrome128.png)]

---

# Weak sets and maps

#### Weak set
The main differences to the __Set__ object are:

- In contrast to Sets, WeakSets are collections of objects only and not of arbitrary values of any type.
- The WeakSet is weak: References to objects in the collection are held weakly. If there is no other reference to an object stored in the WeakSet, they can be garbage collected. That also means that there is no list of current objects stored in the collection. WeakSets are not enumerable.

#### Weak map

The WeakMap object is a collection of _key/value_ pairs in which the keys are .mono[objects] and the values can be arbitrary values.


.lower[![Firefox](img/ff128.png) ![Crhome](img/chrome128.png)]

---

# Proxies

#### Allow overwriting fundamental operations

.mono[Get] example:
```javascript
    var initialObject = {
        'age': 24
    };

    var proxyHandler = {
        get: function( receiver, name ) {
            return `Hello, ${name}! You are ${receiver.age}.`;
        }
    };

    var p = new Proxy( initialObject, proxyHandler );

    console.log( p.world ); // Hello, world! You are 24."
```

.lower[![Firefox](img/ff128.png)]

---

# Proxies

.mono[Apply] example:
```javascript
    var initialFunction = function() {
        return 'I am the initial function!';
    };

    var handler = {
        apply: function( receiver, ...args ) {
            return 'I am the proxy ' + args.length;
        }
    };

    var p = new Proxy( initialFunction, handler );

    console.log( initialFunction() );   // "I am the initial function!"
    console.log( p('biatch', '!') );    //

```

.lower[![Firefox](img/ff128.png)]


---

# Proxies

All fundamental operations are available
```javascript
    var availableTrap = {
        get: ...,
        set: ...,
        has: ...,
        deleteProperty: ...,
        apply: ...,
        construct: ...,
        getOwnPropertyDescriptor: ...,
        defineProperty: ...,
        getPrototypeOf: ...,
        setPrototypeOf: ...,
        enumerate: ...,
        ownKeys: ...,
        preventExtensions: ...,
        isExtensible: ...
    };
```

.lower[![Firefox](img/ff128.png)]


---

# Promises

The __Promise__ interface represents a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers to an asynchronous action's eventual success or failure.
```javascript
    function prom() {
        return new Promise( function( resolve, reject ) {
            setTimeout( () => {
                if ( 'something is true' ) {
                    resolve( 11 );
                } else {
                    reject();
                }
            }, 500 );
        });
    }

    var bb = prom().then(
        // resolve
        function( len ) {
            console.log( 'length is ' + len );  // length is 11
        },
        // reject
        function() {
            console.log( 'buba' );
        }
    );

```

.lower[![Firefox](img/ff128.png) ![Crhome](img/chrome128.png)]
