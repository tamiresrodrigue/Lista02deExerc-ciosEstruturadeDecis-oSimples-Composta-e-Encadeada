const nome1 = prompt("Digite o nome da primeira pessoa:");
const idade1 = Number(prompt(`Digite a idade de ${nome1}:`));

const nome2 = prompt("Digite o nome da segunda pessoa:");
const idade2 = Number(prompt(`Digite a idade de ${nome2}:`));

// Compara as idades e exibe o resultado
if (idade1 > idade2) {
  alert(`${nome1} é mais velho(a) que ${nome2}.`);

} else if (idade2 > idade1) {
  alert(`${nome2} é mais velho(a) que ${nome1}.`);
  
} else {
  alert(`${nome1} e ${nome2} têm a mesma idade.`);
}
