console.log('Oi!!! Eu sou o Goku!');

function contagemCaracteres() {
    let campoTexto = document.querySelectorAll('#nome, #email, #assunto, #mensagem')

        campoTexto.forEach(campo => {
            let limite = parseInt(campo.getAttribute('maxlength'));
            let texto = campo.value;
            let caracteresDigitados = texto.length;
            let caracteresRestantes = limite - caracteresDigitados;
    
            campo.nextElementSibling.textContent = 'Limite: ' + caracteresRestantes;
    });
    
    
    
}




  function verificarFormulario(formID) {
    let form = document.getElementById(formID);
    let campos = form.elements;
    let todosPreenchidos = true;

    for (let i = 0; i < campos.length; i++) {
      const campo = campos[i];  

      if (campo.value === '') {
        todosPreenchidos = false;
        break;
      }          
    }

    return todosPreenchidos;
  }

  let formularioId = "form";
  let todosPreenchidos = verificarFormulario(formularioId);

  if (todosPreenchidos) {
    console.log("Todos os campos do formulário estão preenchidos.");
  } else {
    console.log("Por favor, preencha todos os campos do formulário.");
  }


function verificarNome(){
    

    let nome = document.getElementById(nome);
    if (nome === '' || nome.length)
}





