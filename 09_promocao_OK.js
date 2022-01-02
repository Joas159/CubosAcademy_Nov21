/* PROMOÇÃO
Para o dia dos namorados, um loja de presentes que, sabiamente, investiu em tecnologia e fazia uma 
profunda análise de dados percebeu que mais de 80% dos seus clientes compravam 2 itens nessa época. 
Com o objetivo de tentar aumentar o faturamento, essa loja lançou uma promoção, na qual o cliente que 
comprasse pelo menos 3 itens, teria um desconto de 50% no item mais barato.

Contudo, juntando a alta demanda desse período com o fato de o caixa ter que calcular esse desconto 
manualmente está causando filas demais. Seu papel, como desenvolvedor(a) dessa empresa é fazer um 
algoritmo que calcule automaticamente o valor devido pelo cliente ao se aplicar essa promoção quando 
necessário.

-- são qts itens - 2.? ñ há desconto.. 3 ou +.? tem desconto.. 
-- definir o "menor item" e dividir /2 (50% desconto)
*/

let precos = [50,78,120,92]; let desconto = 0.5; let total = 0; let itemMaisBarato = 0;

if (precos.length > 0 && precos.length < 3) {
    total = precos[0] + precos[1];
    console.log(total);
} else {
    if (precos.length >= 3) {
        itemMaisBarato = Math.min(...precos) * desconto;
    }
    for (let produto of precos) {
        total += produto;
    }
    console.log(total - itemMaisBarato);
}