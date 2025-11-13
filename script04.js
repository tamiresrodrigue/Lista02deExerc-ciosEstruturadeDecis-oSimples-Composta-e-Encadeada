var idade = Number(prompt("Insira quantos anos possui para verificar sua faixa etária de idade:"))

if (idade >= 0 && idade <= 12) {
  alert("Você é uma criança.");

} else if (idade >= 13 && idade <= 17) {
  alert("Você é um adolescente.");

} else if (idade >= 18 && idade <= 64) {
  alert("Você é um adulto.");

} else if (idade >= 65) {
  alert("Você é um idoso.");
  
} else {
  alert("Idade inválida. Por favor, insira uma idade válida.");
}
