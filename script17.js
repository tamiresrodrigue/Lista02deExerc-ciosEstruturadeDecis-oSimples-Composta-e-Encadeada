// Programa para calcular quantos salários mínimos o funcionário recebe
const salarioMinimo = parseFloat(prompt("Digite o valor do salário mínimo (em R$):"));
const salarioFuncionario = parseFloat(prompt("Digite o valor do salário do funcionário (em R$):"));

// Calcula quantos salários mínimos o funcionário recebe
const quantidadeSalarios = salarioFuncionario / salarioMinimo;

// Exibe o resultado
alert(`O funcionário recebe ${quantidadeSalarios.toFixed(2)} salários mínimos.`);

