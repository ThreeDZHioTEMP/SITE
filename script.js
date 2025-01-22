// ||| MAIN ||| //
document.addEventListener("DOMContentLoaded", (event) => {
    // NAV BAR //
    let lastScrollTop = 0;

    let ticking = false;
    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollTop =
                    window.scrollY || document.documentElement.scrollTop;

                document
                    .getElementById("nav-tab")
                    .classList.toggle("hidden", scrollTop > lastScrollTop);

                lastScrollTop = scrollTop;
                ticking = false;
            });
            ticking = true;
        }
    });

    // TAB BAR //
    const activeTabId = sessionStorage.getItem("activeTab");

    if (activeTabId) {
        document.querySelectorAll(".active").forEach((content) => {
            content.classList.remove("active");
        });

        document.querySelectorAll(activeTabId).forEach((content) => {
            content.classList.add("active");
        });
    }

    document.querySelectorAll(".tab-link").forEach((link) => {
        link.addEventListener("click", function (e) {
            document.querySelectorAll(".active").forEach((content) => {
                content.classList.remove("active");
            });

            const targetId = `#${this.id}`;

            document.querySelectorAll(targetId).forEach((content) => {
                content.classList.add("active");
            });

            sessionStorage.setItem("activeTab", targetId);
        });
    });
});
