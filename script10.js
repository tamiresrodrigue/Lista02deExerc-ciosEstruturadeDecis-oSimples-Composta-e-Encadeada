var numero = Number(prompt("Digite o primeiro numero inteiro para que seja exibido em ordem crescente: "));
var numero2 = Number(prompt("Digite o segundo numero inteiro para que seja exibido em ordem crescente: "));
var numero3 = Number(prompt("Digite o terceiro numero inteiro para que seja exibido em ordem crescente: "));

if (numero < numero2 && numero < numero3 && numero2 < numero3) {
    alert("Os números em ordem crescente são: " + numero + ", " + numero2 + ", " + numero3);

} else if (numero < numero3 && numero3 < numero2) {
    alert("Os números em ordem crescente são: " + numero + ", " + numero3 + ", " + numero2);

} else if (numero2 < numero && numero < numero3) {
    alert("Os números em ordem crescente são: " + numero2 + ", " + numero + ", " + numero3);

} else if (numero2 < numero3 && numero3 < numero) {
    alert("Os números em ordem crescente são: " + numero2 + ", " + numero3 + ", " + numero);
    
} else {
    alert("Os números em ordem crescente são: " + numero3 + ", " + numero + ", " + numero2);
}