function inmultire( a, b ) {
	var rezultat = a * b;
	return rezultat;
};

inmultire( 3, 4 ); // va intoarce valoarea inmultiirii celor doi parametri: 12

var a = 5;

inmultire( a, 5 ); // 25

var afiseaza = function( nume ) {
	if ( nume ) {
		console.log( 'Numele meu este: ' + nume );
	} else {
		console.log( 'Nu am nume' );
	}
}

afiseaza( 'Gigi' );

afiseaza();

afiseaza( '' );


var a = 3;
var functie = function() {
	var b = 2;

	a = a + b;

	console.log( a );
	console.log( b );
};

functie();

console.log( a );
console.log( b );

functie();

console.log( a );
console.log( b );
