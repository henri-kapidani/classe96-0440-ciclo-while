/*
chiedi input finche' l'utente non inserisce spazio
continuare a chiedere l'input finche' l'utente non inserisce il valore giusto
*/

let num = parseInt(prompt('Dammi un intero tra 1 e 6 compresi'));
while (isNaN(num) || num < 1 || num > 6) {
	num = parseInt(prompt('Le stinghe non sono accettate, devi darmi un intero'));
}

// let num;
// do {
// 	num = parseInt(prompt('Dammi un intero tra 1 e 6 compresi'));
// } while (isNaN(num) || num < 1 || num > 6)

// sintassi forzata
// let num = parseInt(prompt('Dammi un intero tra 1 e 6 compresi'));
// for (; isNaN(num) || num < 1 || num > 6; ) {
// 	num = parseInt(prompt('Le stinghe non sono accettate, devi darmi un intero'));
// }

console.log('Valore accettato: ', num);

/*
let i = 0;
false || i++;
console.log(i);
*/