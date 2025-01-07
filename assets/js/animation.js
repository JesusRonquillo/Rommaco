document.addEventListener("DOMContentLoaded", () => {
    // Registrar plugins de GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Animar el texto del título
    gsap.from(".hero-title", {
        duration: 1.5,
        y: -50,
        opacity: 0,
        ease: "power3.out",
    });

    // Animar el texto descriptivo
    gsap.from(".hero-text", {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        delay: 0.5,
    });

    // Animar el botón principal
    gsap.from(".btn-primary", {
        duration: 1,
        scale: 0.8,
        opacity: 0,
        ease: "elastic.out(1, 0.3)",
        delay: 1,
    });

    // Animar las secciones al hacer scroll
    gsap.utils.toArray(".section-title").forEach((section) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%", // Inicia la animación cuando está al 80% de la ventana
            },
            duration: 1,
            opacity: 0,
            y: 50,
            ease: "power2.out",
        });
    });

    // Fijar la sección "hero" y sincronizar con el scroll
    ScrollTrigger.create({
        trigger: ".hero",
        start: "top top",
        pin: true, // Fijar el elemento
        scrub: true, // Sincronizar con el scroll
    });

    // Animar las imágenes en la sección "features"
    gsap.from(".features-item-banner img", {
        duration: 1.2,
        x: -100,
        opacity: 0,
        ease: "power3.out",
        stagger: 0.3, // Animación escalonada
    });

    // Efecto de hover en el botón principal
    const btnPrimary = document.querySelector(".btn-primary");
    if (btnPrimary) {
        btnPrimary.addEventListener("mouseenter", () => {
            gsap.to(".btn-primary", {
                scale: 1.1,
                duration: 0.3,
                ease: "power1.out",
            });
        });

        btnPrimary.addEventListener("mouseleave", () => {
            gsap.to(".btn-primary", {
                scale: 1,
                duration: 0.3,
                ease: "power1.out",
            });
        });
    }
});
gsap.registerPlugin(ScrollTrigger);

// Selecciona todos los elementos con la clase 'hidden'
const elements = document.querySelectorAll('.hidden');

elements.forEach((element) => {
    gsap.fromTo(
        element,
        {
            opacity: 0,
            y: 50,
        },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 80%', // Inicia cuando el elemento está al 80% de la ventana.
                end: 'top 20%', // Finaliza cuando el elemento está al 20% de la ventana.
                toggleActions: 'play none none none', // Animación solo ocurre una vez.
            },
        }
    );
});
