
/*
case sensitive = reconhece letras maiusculas e minusculas
por tag: getElemntebyTagName()
por id: getElementById()
por nome: getElementsByName
por classe: getElementsByClassName()
por seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunsto = document.querySelector('#assunto')
let nomeOK = false
let emailOK = false
let assuntoOK = false
let mapa = document.querySelector('#mapa')

nome.style.width = '35%'
email.style.width = '35%'
assunsto.style.width = '35%'

function validanome() {
    let txt = document.querySelector('#txtnome')
 if(nome.value.length < 3) {
     txt.innerHTML = 'nome inválido'
     txt.style.color = 'blue'
 }else{
     txt.innerHTML = 'nome válido'
     txt.style.color = 'gray'
     nomeOK= true
 }

}

function validaemail(){
    let txtemail = document.querySelector('#txtemail')
if(email.value.indexOf('@') == - 1 || email.value.indexOf('.') == -1 ) {
    txtemail.innerHTML = 'E-mail Invalido'
    txtemail.style.color = 'red'
}else{
    txtemail.innerHTML = 'E-mail Válido'
    txtemail.style.color = 'green'
    emailOK = true
}

}

function validassunto(){
let txtassunto = document.querySelector('#txtassunto')

if (assunto.value.length >= 100){
    txtassunto.innerHTML = 'texto é muito grande, digite no máximo 100 caracteres'
    txtassunto.style.color = 'red'
    txtassunto.style.display = 'block'
}else{
    txtassunto.style.display = 'none' /*none mostra nada*/
    assuntoOK = true
}
}

function enviar(){

if(nomeOK == true && emailOK == true && assuntoOK == true){
    alert ('formulário enviado com sucesso!')
}else{
    alert ('preencha o formulário corretamente')

}
}

function mapazoom(){
   mapa.style.width = '800px'
   mapa.style.height = '600px'
}

function mapanormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}