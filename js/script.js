// =========================
// Dynamic Footer Year
// =========================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// =========================
// Smooth Navigation Active Link
// =========================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});

// =========================
// Contact Form
// =========================

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Message Sent Successfully!");

        form.reset();

    });

}

// =========================
// Back To Top Button
// =========================

const backTop = document.createElement("button");

backTop.innerHTML = "↑";

backTop.id = "backTop";

document.body.appendChild(backTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        backTop.style.display = "block";
    } else {
        backTop.style.display = "none";
    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// =========================
// Galaxy Mode Toggle
// =========================

const modeBtn = document.createElement("button");

modeBtn.id = "modeBtn";

modeBtn.textContent = "🌙 Galaxy Mode";

document.body.appendChild(modeBtn);

// Load saved mode

if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light-mode");

    modeBtn.textContent = "🌌 Space Mode";
}

modeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        localStorage.setItem("theme", "light");

        modeBtn.textContent = "🌌 Space Mode";

    } else {

        localStorage.setItem("theme", "dark");

        modeBtn.textContent = "🌙 Galaxy Mode";
    }

});

// =========================
// Scroll Progress Bar
// =========================

const progressBar =
    document.querySelector(".scroll-progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop =
        window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const scrollPercent =
        (scrollTop / docHeight) * 100;

    progressBar.style.width =
        scrollPercent + "%";

});

// =========================
// Section Highlight On Scroll
// =========================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");
        }

    });

});