var produto = Number(prompt("Digite o codigo do produto:"));
var produto2 = Number(prompt("Digite o codigo do produto:"));
var quantidade = Number(prompt("Digite a quantidade do produto:"));
var produtoPreco= 10;
var produto2Preco= 15; 


if (produto === 1) {
    var total = quantidade * produtoPreco;
    alert("O total a ser pago é: R$ " + total);
} else if (produto === 2) {
    var total = quantidade * produto2Preco;
    alert("O total a ser pago é: R$ " + total);
} else {
    alert("Produto inválido.");
}