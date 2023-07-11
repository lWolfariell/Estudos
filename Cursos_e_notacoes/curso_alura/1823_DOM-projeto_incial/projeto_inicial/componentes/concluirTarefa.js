const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'Concluir'

    botaoConclui.addEventListener('click', concluirTarefa)

    return botaoConclui

}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target //quero saber qual o alvo do evento, para saber em quem eu cliquei

    const tarefaCompleta = botaoConclui.parentElement // pega o pai do botao

    tarefaCompleta.classList.toggle('done') // toogle me devolve um booleano true ou false, rabiscando a tarefa ou não
}

export default BotaoConclui // vou exportar BotaoConclui em outro arquivo metodo conhecido como modulo