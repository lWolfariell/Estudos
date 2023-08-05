import { conectaApi } from './conexaoApi.js';

const formulario = document.querySelector('[data-formulario]');

async function criarVideo(evento) {
    evento.preventDefault();

    const imagem = document.querySelector('[data-imagem]').value;
    const url = document.querySelector('[data-url]').value;
    const titulo = document.querySelector('[data-titulo]').value;
    const descricao = Math.floor(Math.random() * 10).toString(); // math tras um numero aletorio para transformar em inteiro ele é multiplicado para  trazer um numero inteiro e entao ele ela passa em string para ser usado mais tarde em uma requisição

    await conectaApi.criaVideo(titulo, descricao, url, imagem);

    window.location.href = '../pages/envio-concluido.html';
}

formulario.addEventListener('submit', evento => criarVideo(evento));