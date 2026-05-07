const titulo = document.getElementById("titulo");

const datas = [
  {texto: "Passar no enem", data: "2026-11-11"},
  {texto: "Aprender um novo idioma", data: "2026-07-25"},
  {texto: "Passar na faculdade", data: "2027-02-01"},
  {texto: "Começar a trabalhar", data: "2026-12-30"}
];

let atual = 0;

// trocar abas
document.querySelectorAll(".tab").forEach((btn, i) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    atual = i;
    titulo.innerText = datas[i].texto;
  });
});

// timer
function atualizarTempo() {
  const destino = new Date(datas[atual].data).getTime();
  const agora = new Date().getTime();
  const diff = destino - agora;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const min = Math.floor((diff / (1000 * 60)) % 60);
  const seg = Math.floor((diff / 1000) % 60);

  document.getElementById("dias").innerText = dias;
  document.getElementById("horas").innerText = horas;
  document.getElementById("min").innerText = min;
  document.getElementById("seg").innerText = seg;
}
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Objetivos</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
  <h2>Meus objetivos do ano_</h2>

  <div class="tabs">
    <button class="tab active" data-target="1">Passar no enem</button>
    <button class="tab" data-target="2">Aprender um novo idioma</button>
    <button class="tab" data-target="3">Passar na faculdade</button>
    <button class="tab" data-target="4">Começar a trabalhar</button>
  </div>

  <div class="card">
    <h1 id="titulo">COMPLETAR MEUS OBJETIVOS</h1>

    <p class="sub">TEMPO PARA COMPLETAR OBJETIVO</p>

    <div class="timer">
      <div><span id="dias">0</span><small>dias</small></div>
      <div><span id="horas">0</span><small>horas</small></div>
      <div><span id="min">0</span><small>min</small></div>
      <div><span id="seg">0</span><small>seg</small></div>
    </div>
  </div>
</div>

<script src="main.js"></script>
</body>
</html>

