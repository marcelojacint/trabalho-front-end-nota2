
document.addEventListener("DOMContentLoaded", function () {
  
  var formulario = document.querySelector("form"); 
  var botaoEnviar = document.querySelector(".button");

  botaoEnviar.addEventListener("click", function (evento) {
    evento.preventDefault(); 

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var texto = document.getElementById("msg").value; 
  
    var mensagem = {
      nome: nome,
      email: email,
      mensagem: texto
    };
    
    inserirMensagem(mensagem);

    alert("Mensagem enviada com sucesso!");

    formulario.reset();
  });
});


function inserirMensagem(novaMensagem) {
 
  const mensagensSalvas = JSON.parse(localStorage.getItem("mensagens")) || [];

  
  mensagensSalvas.push(novaMensagem);

  
  localStorage.setItem("mensagens", JSON.stringify(mensagensSalvas));
}

