let idades = [17,21,19,23,25,32,20,35,29,19,16,17,18,22,24];
let maiores = []; cont = 0; ocacula = 0;

for (let id of idades){
    if (id >= 18){
        maiores.push(id); 
    }
    ocacula = Math.min(...maiores);

} console.log(ocacula);
