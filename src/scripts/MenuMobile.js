document.addEventListener("DOMContentLoaded", () => {
    const btnMenu = document.getElementById("menu-mobile");
    const menuMobile = document.getElementById("menu-mobile-links");
    const linksMobile = document.querySelectorAll(".link");

    linksMobile.forEach((link) => {
        link.addEventListener("click", () => {
        menuMobile.classList.remove("translate-y-0");
        menuMobile.classList.add("translate-y-[200vh]");
        });
    });

    btnMenu.addEventListener("click", () => {
        const isOpen = menuMobile.classList.contains("translate-y-[200vh]");

        if (isOpen) {
        menuMobile.classList.remove("translate-y-[200vh]");
        menuMobile.classList.add("translate-y-0");
        } else {
        menuMobile.classList.remove("translate-y-0");
        menuMobile.classList.add("translate-y-[200vh]");
        }
    });

    document.addEventListener("click", (e) => {
        if (!btnMenu.contains(e.target) && !menuMobile.contains(e.target)) {
        menuMobile.classList.remove("translate-y-0");
        menuMobile.classList.add("translate-y-[200vh]");
        }
    });
});
