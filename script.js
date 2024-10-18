document.addEventListener("DOMContentLoaded", function () {
    // Seleciona os elementos das telas
    const tela1 = document.getElementById("tela1");
    const tela2 = document.getElementById("tela2");
    const tela3 = document.getElementById("tela3");

    // Botões de navegação
    const btnIrTela2 = document.getElementById("btn-ir-tela2");
    const btnIrTela3 = document.getElementById("btn-ir-tela3");

    // Função para mostrar a tela desejada e esconder as outras
    function mostrarTela(tela) {
        tela1.style.display = "none";
        tela2.style.display = "none";
        tela3.style.display = "none";
        tela.style.display = "block";
    }

    // Evento para ir da Tela 1 para a Tela 2
    btnIrTela2.addEventListener("click", function () {
        mostrarTela(tela2);
    });

    // Evento para ir da Tela 2 para a Tela 3
    btnIrTela3.addEventListener("click", function () {
        mostrarTela(tela3);
    });

    // Botão de curtir e contador
    const btnCurtir = document.getElementById("btn-curtir");
    const contadorCurtidas = document.getElementById("contador-curtidas");
    let curtidas = 0;

    btnCurtir.addEventListener("click", function () {
        curtidas++;
        contadorCurtidas.textContent = `Curtidas: ${curtidas}`;
    });

    // Formulário de feedback
    const formFeedback = document.getElementById("form-feedback");
    const feedbackResultado = document.getElementById("feedback-resultado");

    formFeedback.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o comportamento padrão de recarregar a página

        const nome = document.getElementById("nome").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome && mensagem) {
            // Exibe o feedback abaixo do formulário
            feedbackResultado.innerHTML = `<p><strong>${nome}</strong>: ${mensagem}</p>`;
            formFeedback.reset(); // Limpa o formulário após o envio
        }
    });
});
