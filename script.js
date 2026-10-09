function copiarEmail() {
    const email = "rebeca.alcantaraoli@gmail.com";

    navigator.clipboard.writeText(email)
        .then(() => {
            const mensagem = document.getElementById("email-link");

            mensagem.textContent = "E-mail copiado para a área de transferência!";
            mensagem.classList.add("mostrar");

            setTimeout(() => {
                mensagem.classList.remove("mostrar");
            }, 3000);
        })
        .catch(() => {
            alert("Não foi possível copiar o e-mail.");
        });
}