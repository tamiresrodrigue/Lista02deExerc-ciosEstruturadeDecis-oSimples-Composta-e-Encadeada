// Programa para calcular a média de três números e exibir o resultado
const num1 = parseInt(prompt("Digite o primeiro número:"));
const num2 = parseInt(prompt("Digite o segundo número:"));
const num3 = parseInt(prompt("Digite o terceiro número:"));

const media = (num1 + num2 + num3) / 3;

if (media >= 7) {
  alert(`A média é ${media.toFixed(2)}. Aprovado!`);
} else {
  alert(`A média é ${media.toFixed(2)}. Reprovado.`);
}
