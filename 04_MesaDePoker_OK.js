const valores =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; 
let min= 5; let max = 6; let playerOK = []; cont = 0;
for (let vlr of valores) {
   if ( vlr >= min && vlr <= max ) {
        playerOK[cont] = valores.indexOf(vlr);
        cont++;
   }
}
console.log(playerOK);