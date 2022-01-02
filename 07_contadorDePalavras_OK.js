/*
Todo bom editor de texto informa no rodapé do programa quantas palavras tem no texto. Você está 
trabalhando numa empresa que está desenvolvendo um editor de texto e ficou com a tarefa de desenvolver 
esta funcionalidade. Para o texto dado na entrada, imprima na tela quantas palavras existem neste texto.
*/

let somaWords = 0; let texto = "Todo bom editor de texto informa";
texto = texto.trim();
texto = texto.split(" ");
for (let palavra of texto) {
    if (palavra !== "" && palavra !== " " && palavra !== "," && palavra !== "." && palavra !== ";") {
        somaWords++;
    }
}
console.log(somaWords);