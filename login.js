'use strict'



let usuarios = {
    email: 'vinicius@gmail.com',
    senha: 'vini1234',

    email: 'caua@gmail.com',
    senha: 'caua1234',

    email: 'gustavo@gmail.com',
    senha: 'gustavo1234'
}

logar.addEventListener('click', function(){
    let emailInput = document.getElementById('email').value;
    let senhaInput = document.getElementById('senha').value;

    if(emailInput === usuarios.email && senhaInput === usuarios.senha){
        window.location.href = './home.html';
    } else {
        alert('Preencha os campos corretamente!');
    }
})
