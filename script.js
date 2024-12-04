document.getElementById("calcular").addEventListener("click", calcularMedia);
document.getElementById("limpar").addEventListener("click", limparFormulario);
document.getElementById("listarHistorico").addEventListener("click", listarHistorico);
document.getElementById("toggleHistorico").addEventListener("click", toggleHistorico);
document.getElementById("calcularNovaMedia").addEventListener("click", calcularNovaMedia); // Novo evento

const historico = [];

function calcularMedia() {
  const nome = document.getElementById("nome").value;
  const disciplina = document.getElementById("disciplina").value;
  let nota1 = parseFloat(document.getElementById("nota1").value);
  let nota2 = parseFloat(document.getElementById("nota2").value);
  let nota3 = parseFloat(document.getElementById("nota3").value);
  let nota4 = parseFloat(document.getElementById("nota4").value);

  // Verificar se as notas estão dentro do intervalo de 0 a 10
  if (!nome || !disciplina || isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  // Validar as notas, garantindo que estão entre 0 e 10
  if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || nota4 < 0 || nota4 > 10) {
    alert("As notas devem estar entre 0 e 10!");
    return;
  }

  const media = (nota1 + nota2 + nota3 + nota4) / 4;
  const status = media >= 6.0 ? "Aprovado" : "Reprovado";

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `<p><strong>${nome}</strong>, na disciplina <strong>${disciplina}</strong>, sua média foi <strong>${media.toFixed(2)}</strong>. Status: <strong>${status}</strong>.</p>`;

  historico.push({ nome, disciplina, media: media.toFixed(2), status });
}

function limparFormulario() {
  document.getElementById("formulario").reset();
  document.getElementById("resultado").innerHTML = "";
}

function listarHistorico() {
  const listaHistorico = document.getElementById("listaHistorico");
  listaHistorico.innerHTML = "";

  if (historico.length === 0) {
    listaHistorico.innerHTML = "<li>Nenhum registro no histórico.</li>";
    return;
  }

  historico.forEach((registro, index) => {
    listaHistorico.innerHTML += `<li>${index + 1}. ${registro.nome} - ${registro.disciplina}: Média ${registro.media} (${registro.status})</li>`;
  });
}

function toggleHistorico() {
  const historicoDiv = document.getElementById("historico");
  historicoDiv.style.display = historicoDiv.style.display === "none" ? "block" : "none";
}

// Função para limpar os campos e permitir o cálculo de uma nova média
function calcularNovaMedia() {
  document.getElementById("formulario").reset(); // Limpa os campos
  document.getElementById("resultado").innerHTML = ""; // Limpa o resultado
}
