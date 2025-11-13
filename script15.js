var nomeAluno = prompt("Digite o nome do aluno:");
var disciplina = prompt("Digite a disciplina:");
var nota = Number(prompt("Digite sua nota para verificar situação de aprovado ou reprovado:"));

if(nota >=7){
    alert("Parabéns " + nomeAluno + "! Você foi aprovado em " + disciplina + " com a nota " + nota);
}else {
    alert("Que pena " + nomeAluno + "! Você foi reprovado em " + disciplina + " com a nota " + nota);
}