/*
Quando precisa-se escolher apenas uma pessoa aleatoriamente dentro de um grupo, é comum jogar "zerinho ou um"
para sortear alguém. O jogo é muito simples: cada jogador joga 0 ou 1 com as mão. Aquele que for o único(a) 
a jogar zero ou um é o sorteado. Faça um programa que imprima o nome da pessoa que foi sorteada, ou NINGUEM,
caso ninguém tenha sido sorteado(a).
*/

let jogadores = [
    {
      "nome": "Herman",
      "jogada": 1
    },
    {
      "nome": "Rhodes",
      "jogada": 0
    },
    {
      "nome": "Beach",
      "jogada": 1
    },
    {
      "nome": "Laurel",
      "jogada": 1
    }];
let nPlayer0 = []; let nPlayer1 = [];

for (let jogador of jogadores) {
    if (jogador.jogada === 1) {
        nPlayer1.push(jogador.nome);
    } else {
        nPlayer0.push(jogador.nome);
    }
}
if (nPlayer0.length === 1) {
    console.log(nPlayer0[0]);
} else if (nPlayer1.length === 1) {
    console.log(nPlayer1[0]);
} else {
    console.log("NINGUÉM");
}