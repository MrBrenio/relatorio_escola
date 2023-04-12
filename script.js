const adicionarBotao = document.getElementById("adicionar");
adicionarBotao.addEventListener("click", function () {
    const aluno = document.getElementById("aluno").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);
    const faltas = parseInt(document.getElementById("faltas").value);

    const media = (nota1 + nota2 + nota3 + nota4) / 4;
    const tabela = document.getElementById("tabela");
    const novaLinha = tabela.insertRow(-1);
    const celulaAluno = novaLinha.insertCell(0);
    const celulaNota1 = novaLinha.insertCell(1);
    const celulaNota2 = novaLinha.insertCell(2);
    const celulaNota3 = novaLinha.insertCell(3);
    const celulaNota4 = novaLinha.insertCell(4);
    const celulaFaltas = novaLinha.insertCell(5);
    const celulaMedia = novaLinha.insertCell(6);

    celulaAluno.innerHTML = aluno;
    celulaNota1.innerHTML = nota1;
    celulaNota2.innerHTML = nota2;
    celulaNota3.innerHTML = nota3;
    celulaNota4.innerHTML = nota4;
    celulaFaltas.innerHTML = faltas;
    celulaMedia.innerHTML = media.toFixed(2);

    document.getElementById("aluno").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    document.getElementById("nota4").value = "";
    document.getElementById("faltas").value = "";
});


const collapseElementList = document.querySelectorAll('.collapse')
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))
