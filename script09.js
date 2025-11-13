var mes = prompt("Digite o nome do mês:");

if (mes === "janeiro" || mes === "março" || mes === "maio" || mes === "julho" || mes === "agosto" || mes === "outubro" || mes === "dezembro") {
  dias = 31;
} else if (mes === "abril" || mes === "junho" || mes === "setembro" || mes === "novembro") {
  dias = 30;
} else if (mes === "fevereiro") {
  dias = "28 ou 29 (dependendo se é ano bissexto)";
} else {
  dias = "Mês inválido. Por favor, insira um mês válido.";
}

alert(`O mês de ${mes} possui ${dias} dias.`);


