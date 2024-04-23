'use strict'



let fakeBack = {
    usuarios: [
        {email: 'vinicius@gmail.com', senha: 'vini1234'},
        {email: 'caua@gmail.com', senha: 'caua1234'},
        {email: 'gustavo@gmail.com', senha: 'gustavo1234'}
    ]
}

logar.addEventListener('click', function(){
    let emailInput = document.getElementById('email').value;
    let senhaInput = document.getElementById('senha').value;

    // Verificando se as credenciais fornecidas correspondem a algum usuário no banco de dados falso
    let usuarioEncontrado = fakeBack.usuarios.find(usuario => usuario.email === emailInput && usuario.senha === senhaInput);

    if(usuarioEncontrado){
        // Redirecionar para a página home se as credenciais estiverem corretas
        window.location.href = './home.html';
    } else {
        // Mostrar mensagem de erro se as credenciais estiverem incorretas
        alert('Credenciais incorretas. Por favor, tente novamente.');
    }
})
