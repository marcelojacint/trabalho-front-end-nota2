
document.addEventListener("DOMContentLoaded", function () {
  var formulario = document.getElementById("form-login");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    var objLoginSenha = {
      email: email,
      senha: senha
    };

    var valido = validarUsuario(objLoginSenha);

    if (valido === true) {
      window.location.href = "mensagens.html";
    } else {
      alert("E-mail e Senha inválidos");
    }
  });
});
