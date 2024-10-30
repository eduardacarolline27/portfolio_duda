document.addEventListener("DOMContentLoaded", function () {


    // Navegação suave para as seções ao clicar nos links, com uma rolagem mais lenta
    const navLinks = document.querySelectorAll("nav ul li a");


    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");


            // Rolagem suave mais lenta (customizada com timeout)
            setTimeout(() => {
                document.querySelector(targetId).scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 270); // Tempo de atraso de 200ms para a rolagem suave
        });
    });


    // Função para destacar a seção ativa ao rolar a página
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav ul li a");


    window.addEventListener("scroll", function () {
        let current = "";


        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });


        navLi.forEach(li => {
            li.classList.remove("active");
            if (li.getAttribute("href") === `#${current}`) {
                li.classList.add("active");
            }
        });
    });


    // Efeito de aparecimento suave ao rolar para as seções
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.2
    });


    sections.forEach((section) => {
        observer.observe(section);
    });


    // Interatividade extra: Hover sobre os projetos para ampliar e destacar
    const projectCards = document.querySelectorAll(".project-card");


    projectCards.forEach(card => {
        card.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.3s ease-in-out";
            this.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
        });


        card.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        });
    });


    // Novo código: Interatividade para contato direto via email
    const contactButton = document.getElementById("contact-email");


    if (contactButton) {
        contactButton.addEventListener("click", function () {
            const email = "eduardacarollineunifbv@gmail.com";
            const subject = "Contato através do portfólio";
            const body = "Olá Eduarda, gostaria de saber mais sobre seus projetos.";


            window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
    }


});
