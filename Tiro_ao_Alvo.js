const disparos = [10, 20, 30, 50, 60, 65, 72, 76, 70, 35, 74, 69];
contador = 0; analise = [];

for (let item of disparos) {
    if (item >= 70) {
        analise[contador] = item;
        contador++;
    }
} if (analise === '' || contador <3){
    console.log('ELIMINADO');
} else {
    console.log(contador);
}