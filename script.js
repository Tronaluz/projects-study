document.addEventListener("DOMContentLoaded", () => {
    const noticias = [
        { titulo: "Atualizações do Dia", conteudo: "Últimas novidades sobre Tecnologia..." },
        { titulo: "Escândalos da Tecnologia", conteudo: "As polêmicas mais quentes do mundo da tecnologia..." },
        { titulo: "Novidades de Hardware", conteudo: "Novos lançamentos e inovações em Hardware..." },
    ];

    const main = document.querySelector("main");

    noticias.forEach(noticia => {
        const section = document.createElement("section");
        section.classList.add("noticia");

        section.innerHTML = `
            <h2>${noticia.titulo}</h2>
            <p>${noticia.conteudo}</p>
        `;

        // Criando botão "Leia mais"
        const button = document.createElement("button");
        button.textContent = "Leia mais";
        button.classList.add("btn-leia-mais");

        section.appendChild(button);
        main.appendChild(section);
    });

    // Modo Escuro
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
