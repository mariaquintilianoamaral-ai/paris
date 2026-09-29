
const botao = document.getElementById("botaoGerador");
const lampada = document.getElementById("lampadaInferior");
const experimento = document.querySelector(".experimento");
const estado = document.getElementById("estado");
const textoBotao = document.getElementById("textoBotao");
const iconeBotao = document.getElementById("iconeBotao");

let ligado = false;

botao.addEventListener("click", () => {
  ligado = !ligado;

  lampada.classList.toggle("on", ligado);
  experimento.classList.toggle("ativo", ligado);

  if (ligado) {
    textoBotao.textContent = "Desligar demonstração";
    iconeBotao.textContent = "■";

    estado.textContent =
      "Demonstração ativada! O LED está aceso e a bobina está animada.";

    botao.setAttribute("aria-pressed", "true");
  } else {
    textoBotao.textContent = "Ativar demonstração";
    iconeBotao.textContent = "▶";

    estado.textContent =
      "Sistema desligado. Ative a demonstração para visualizar o LED.";

    botao.setAttribute("aria-pressed", "false");
  }
});

// Inicia com o LED desligado.
lampada.classList.remove("on");
experimento.classList.remove("ativo");
botao.setAttribute("aria-pressed", "false");