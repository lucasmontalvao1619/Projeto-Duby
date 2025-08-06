document.addEventListener("DOMContentLoaded", function () {
  const botoesAbas = document.querySelectorAll(".botaoAba[data-relatorio]");
  const conteudosAbas = document.querySelectorAll(".trocaDeAbas");

  botoesAbas.forEach((botao) => {
    botao.addEventListener("click", function () {
      const abaId = this.getAttribute("data-relatorio");

      botoesAbas.forEach((b) => b.classList.remove("ativo"));
      conteudosAbas.forEach((c) => c.classList.remove("ativo"));

      this.classList.add("ativo");
      document.getElementById(abaId).classList.add("ativo");
    });
  });

  if (!document.querySelector(".botaoAba.ativo")) {
    botoesAbas[0].classList.add("ativo");
    conteudosAbas[0].classList.add("ativo");
  }
});
