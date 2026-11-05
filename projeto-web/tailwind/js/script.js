
var botaoMenu = document.getElementById("botao-menu");
var menu = document.getElementById("menu");

botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("hidden");
  var aberto = !menu.classList.contains("hidden");
  botaoMenu.setAttribute("aria-expanded", aberto);
});


var slides = document.querySelectorAll(".slide");
var pontos = document.querySelectorAll(".ponto");
var atual = 0;

function mostrarSlide(numero) {
 
  if (numero >= slides.length) {
    numero = 0;
  }
  if (numero < 0) {
    numero = slides.length - 1;
  }
  atual = numero;

  for (var i = 0; i < slides.length; i++) {
    if (i === atual) {
      slides[i].classList.remove("opacity-0");
      slides[i].classList.add("opacity-100");
      pontos[i].classList.remove("bg-white/50");
      pontos[i].classList.add("bg-white");
    } else {
      slides[i].classList.remove("opacity-100");
      slides[i].classList.add("opacity-0");
      pontos[i].classList.remove("bg-white");
      pontos[i].classList.add("bg-white/50");
    }
  }
}

document.getElementById("proximo").addEventListener("click", function () {
  mostrarSlide(atual + 1);
});

document.getElementById("anterior").addEventListener("click", function () {
  mostrarSlide(atual - 1);
});

for (var i = 0; i < pontos.length; i++) {
  pontos[i].addEventListener("click", function (evento) {
    var posicao = Array.prototype.indexOf.call(pontos, evento.currentTarget);
    mostrarSlide(posicao);
  });
}


setInterval(function () {
  mostrarSlide(atual + 1);
}, 5000);


var formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  alert("Mensagem enviada com sucesso!");
  formulario.reset();
});


var modal = document.getElementById("modal");

function abrirModal() {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function fecharModal() {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

document.getElementById("abrir-modal").addEventListener("click", abrirModal);
document.getElementById("fechar-modal").addEventListener("click", fecharModal);
document.getElementById("confirmar-modal").addEventListener("click", fecharModal);


modal.addEventListener("click", function (evento) {
  if (evento.target === modal) {
    fecharModal();
  }
});
