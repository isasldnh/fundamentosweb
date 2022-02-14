

/* 
por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mapa = document.querySelector('#mapa');

nome.style.width='100%';
email.style.width='100%';
assunto.style.width='100%';

function validaNome(){
    let txt = document.querySelector('#txtNome')
    if(nome.value.length<3){
       txt.innerHTML = 'Nome Inválido'
       txt.style.color ='red'
    } else {
        txt.innerHTML='Nome válido'
        txt.style.color='green'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML='Email inválido'
        txtEmail.style.color='red'
    } else {
        txtEmail.innerHTML='Email válido'
        txtEmail.style.color='green'
        emailOk=true;
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if (email.value.length>1000){
        txtAssunto.innerHTML='Texto é muito grande. Tamanho máximo de 1000 caracteres.'
        txtAssunto.style.color='red'
    } else {
        txtAssunto.innerHTML='Mensagem válida'
        txtAssunto.style.color='green'
        assuntoOk=true
    }
}

function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Formulário enviado com sucesso')
    } else {
        alert ('Preencha o formulário corretamente antes de enviar')
    }
}

function mapaZoom(){
    mapa.style.width='800px'
    mapa.style.heigth='600px'
}

function mapaNormal(){
    mapa.style.width='400px'
    mapa.style.heigth='250px'
}