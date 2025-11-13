var idade = Number(prompt("Digite a sua idade:"));
var sexo = prompt("Digite seu Sexo (M/F):")

if (sexo === "F" && idade >= 60) {
    alert("Você é idosa e pode se aposentar.");
} else if (sexo === "M" && idade >= 65) {
    alert("Você é idoso e pode se aposentar.");
}else {
   alert ("Você não pode se aposentar ainda.");
}