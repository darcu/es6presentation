class: center, middle

#Functii

---

### Functii

Functiile permit refolosirea unei functionalitati sau bucati de cod.
Functiile pot primi un numar de parametri si intoarce (.mono[return]) un rezultat.

```javascript
function inmultire( a, b ) {
	var rezultat = a * b;
	return rezultat;
}

inmultire( 3, 4 ); // va intoarce valoarea inmultiirii celor doi parametri: 12

var a = 5;

inmultire( a, 5 ); // 25
```
---

Functiile pot fi asociate unei variabile. In cazul asta, nu mai e necesar sa ii dam functiei un nume.
Funtiile nu trebuie neaparat sa intoarca un rezultat, in cazul asta doar afiseaza la consola.

```javascript
var afiseaza = function( nume ) {
	if ( nume ) {
		console.log( 'Numele meu este: ' + nume + '.' );
	} else if (nume.length > 3) {
		console.log( 'Numele meu este: ' + nume + ' si are mai mult de trei litere.' );
	} else {
		console.log( 'Nu am nume' );
	}
};
```

Ce va afisa fiecare apel al functiei?

```javascript
afiseaza( 'Gigi' );

afiseaza( );

afiseaza( '' );
```

---

### Variabile in functii

```javascript
var a = 3;
var functie = function() {
	var b = 2;

	a = a + b;

	console.log( a );
	console.log( b );
};
```

Ce va afisa console.log() dupa fiecare apel al funtiei?

```javascript
functie();

console.log( a );
console.log( b );

functie();

console.log( a );
console.log( b );
```



