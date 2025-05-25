
      document.addEventListener("DOMContentLoaded", function () {
        const corpoTabela = document.getElementById("corpo-tabela");

        const mensagens = obterMensagens(); 

        mensagens.forEach(msg => {
          const linha = document.createElement("tr");

          const tdNome = document.createElement("td");
          tdNome.textContent = msg.nome;

          const tdEmail = document.createElement("td");
          tdEmail.textContent = msg.email;

          const tdTexto = document.createElement("td");
          tdTexto.textContent = msg.mensagem;

          linha.appendChild(tdNome);
          linha.appendChild(tdEmail);
          linha.appendChild(tdTexto);

          corpoTabela.appendChild(linha);
        });
      });
   