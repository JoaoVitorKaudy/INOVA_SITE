document.addEventListener("DOMContentLoaded", () => {
    const itens = document.querySelectorAll("#enrolacao li");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                itens.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add("show");
                    }, index * 200); 
                });
                observer.unobserve(entry.target); // Em vez de disconnect(), só para este alvo
            }
        });
    }, { threshold: 0.3 }); // Reduzi para 0.3 para acionar antes

    const enrolacaoEl = document.querySelector("#enrolacao");
    if (enrolacaoEl) observer.observe(enrolacaoEl);

    // Carrossel responsivo
    $("#carrossel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        navText: ["<span>← Anterior</span>", "<span>Próximo →</span>"],
        responsive: {
            0: {
                items: 1,
                navText: ["<span>←</span>", "<span>→</span>"] // Menor texto no mobile
            },
            480: {
                items: 1
            },
            768: {
                items: 1
            },
            1024: {
                items: 1
            }
        }
    });
});
