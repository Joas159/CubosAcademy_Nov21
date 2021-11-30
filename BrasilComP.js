const palavras = ['aviao', 'barco', 'navio', 'carro', 'avestruz', 'moto', 'bicicleta', 'patins', 
'skate', 'banda', 'barril', 'avistar'];
let analise = []; let contador = 0; let primeiraLetra = 'a', segundaLetra = 'v';

for (let item of palavras) {
    if (item[0] === primeiraLetra && item[1] === segundaLetra) {
        analise[contador] = item;
        contador++;
    }
}
if (analise === '') {
    console.log('NENHUMA')
} else {
    console.log(analise);
}