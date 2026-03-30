const setupMobileMenu = () => {
    const btnMenu = document.getElementById("menu-mobile");
    const menuMobile = document.getElementById("menu-mobile-links");
    const linksMobile = document.querySelectorAll(".link");

    if (!btnMenu || !menuMobile) {
        return;
    }

    linksMobile.forEach((link) => {
        link.addEventListener("click", () => {
            menuMobile.classList.remove("translate-y-0");
            menuMobile.classList.add("translate-y-[200vh]");
        });
    });

    btnMenu.addEventListener("click", (event) => {
        event.stopPropagation();
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
};

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupMobileMenu);
} else {
    setupMobileMenu();
}
