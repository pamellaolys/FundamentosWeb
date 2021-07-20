/* o Java Script é Case Sensitive = 
por tag: getElementeByTagName()letfun
por Id: getElementByID()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector() */

function validaNome() {
    let nome = document.querySelector('#nome');
    let txtNome = document.querySelector('#txtNome');
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido";
        txtNome.style.color = 'red';
    } else {
        txtNome.innerHTML = "Nome Válido";
        txtNome.style.color = 'green';
    }
}

function validaEmail(){
let email = document.querySelector('#email')
let txtEmail = document.querySelector('#txtEmail')
if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ){
    txtEmail.innerHTML = "E-mail Inválido";
    txtEmail.style.color = 'red'
} else {
    txtEmail.innerHTML = "E-mail Válido";
    txtEmail.style.color = 'green';
}
}
