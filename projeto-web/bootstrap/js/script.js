// Mostra uma mensagem quando o formulário é enviado
var formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  alert("Mensagem enviada com sucesso!");
  formulario.reset();
});
