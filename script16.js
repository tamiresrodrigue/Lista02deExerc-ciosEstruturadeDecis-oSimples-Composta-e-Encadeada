var promocao = prompt("O preço das maçãs é de R$ 0,50 cada se a quantidade for menor que 12 e R$ 0,40 cada se a quantidade for igual ou maior que 12.  Digite 'OK' para continuar sua compra ou 'Cancelar' para encerrar sua compra")
var quantidade = Number(prompt("Digite a quantidade de maçãs que deseja comprar:"))

var preco;

if (quantidade < 12) { preco = 0.50; // Preço unitário para menos de 12 maçãs
    
} else {preco = 0.40;} // Preço unitário para 12 ou mais maçãs


var total = quantidade * preco; // Calcula o valor total
alert(`Você comprou ${quantidade} maçãs. O valor total a ser pago é R$ ${total.toFixed(2)}.`);
