var peso = Number(prompt("Digite seu peso em kg:"));
var altura = Number(prompt("Digite sua altura em metros:"));
var imc =  (altura * altura) / peso;

if (imc < 18.5) {
    alert("Abaixo do peso");

} else if (imc >= 18.5 && imc < 25) {
    alert("Peso normal");

} else if (imc >= 25 && imc < 30) {
    alert("Acima do peso");

} else {
    alert("Obesidade");
}