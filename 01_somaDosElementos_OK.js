/*
Álvaro está economizando para comprar uma uma passagem para a europa. Por isso diariamente ele coloca um valor 
no cofre. Faça um programa que calcule o total acumulado no cofre até o momento.

Input Format
A entrada será sempre uma lista de inteiros positivos.

Constraints
A lista pode conter até 1000 inteiros positivos.

Output Format
Imprima na tela o total acumulado nessa lista.
*/

const valores =[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]; // valor total -55-
let total= 0;
for (let vlr of valores) {
   total += vlr;
}
console.log(total);