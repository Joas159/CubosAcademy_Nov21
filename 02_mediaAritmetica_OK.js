/*
Álvaro está economizando para viajar para a europa. Todo dia ele coloca mais dinheiro no seu cofre. A quantidade 
de dinheiro que ele coloca no cofre a cada dia está registrada no array lista. Faça um programa que calcule 
quanto Álvaro vem acumulando, em média, por dia.
*/

const lista =[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,3,4,5,6,7]; // valor total -55-
let total= 0; let media = 0.00;
for (let vlr of lista) {
   total += vlr;
}
console.log(total/lista.length);