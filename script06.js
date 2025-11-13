var nota = Number(prompt("Digite a primeira nota do aluno: "));
var nota2 = Number(prompt("Digite a segunda nota do aluno: "));
var nota3= Number(prompt("Digite a terceira nota do aluno: "));
var media = (nota + nota2 + nota3) / 3;
if (media >= 7) {
    alert("Aprovado com a media: " + media.toFixed(2));
} else {
    alert("Reprovado com a media: " + media.toFixed(2));
}