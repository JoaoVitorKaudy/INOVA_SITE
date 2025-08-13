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
                observer.disconnect();
            }
        });
    }, { threshold: 1 }); 

    observer.observe(document.querySelector("#enrolacao"));
});

    $("#carrossel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        navText: ["<span>← Anterior</span>", "<span>Próximo →</span>"] 
    });