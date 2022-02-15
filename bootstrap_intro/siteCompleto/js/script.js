let nome = document.querySelector("#exampleFormControlInput1")
let email = document.querySelector("#exampleFormControlInput2")
let genero = document.querySelector("#exampleFormControlSelect2")
let texto = documento.querySelector("#exampleFormControlTextarea1")
let nomeOk = false
let emailOk = false
let textoOk = false
let generoOk = false

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length<3){
       txtNome.innerHTML = 'Nome Inválido'
       txtNome.style.color ='red'
    } else {
        txtNome.innerHTML='Nome válido'
        txtNome.style.color='green'
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

function validaTexto(){
    let txtTexto = document.querySelector('#txtTexto')
    if (email.value.length>1000){
        txtTexto.innerHTML='Texto é muito grande. Tamanho máximo de 1000 caracteres.'
        txtTexto.style.color='red'
    } else {
        txtTexto.innerHTML='Mensagem válida'
        txtTexto.style.color='green'
        textoOk=true
    }
}

function validaGenero(){
    let txtGenero = document.querySelector('#txtGenero')
    if(genero=false){
       txtGenero.innerHTML = 'Nome Inválido'
       txtGenero.style.color ='red'
    } else {
        txtGenero.innerHTML='Nome válido'
        txtGenero.style.color='green'
        generoOk = true
    }
}

function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Formulário enviado com sucesso')
    } else {
        alert ('Preencha o formulário corretamente antes de enviar')
    }
}

