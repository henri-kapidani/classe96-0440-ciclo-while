/*
Stampare tutti gli elementi di un array, sia con il ciclo for che con il ciclo while
*/

const myArr = ['ciao', 'a', 'tutti', 'quanti'];

console.log('CON IL CICLO FOR');

for (let i = 0; i < myArr.length; i++) {
	console.log(myArr[i]);
}

console.log(' ');
console.log('CON IL CICLO WHILE');

let i = 0;
while (i < myArr.length) {
	console.log(myArr[i]);
	i++;
}