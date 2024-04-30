document.addEventListener("DOMContentLoaded", async function() {
    const logarBtn = document.getElementById("logar");
    logarBtn.addEventListener("click", async function() {
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        try {
            const response = await fetch("https://back-login.vercel.app/usuarios");
            const usuarios = await response.json();

            const usuario = usuarios.find(user => user.email === email && user.senha === senha);

            if (usuario) {
                alert("Login feito com sucesso!!");
                window.location.href = './home.html'
            } else {
                alert("Escreva as credenciais corretas!!");
            }
        } catch (error) {
            console.error(error);
        }
    });
});
