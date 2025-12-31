// ================= MOBILE NAV TOGGLE =================
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
// ================= CERTIFICATE POPUP =================
const certs = document.querySelectorAll(".cert");
const certModal = document.getElementById("cert-modal");
const certModalImg = document.getElementById("cert-modal-img");

certs.forEach(cert => {
    cert.addEventListener("click", () => {
        const imgSrc = cert.getAttribute("data-img");
        certModalImg.src = imgSrc;
        certModal.classList.add("active");
        document.body.style.overflow = "hidden"; // stop scroll
    });
});

// Close when clicking outside image
certModal.addEventListener("click", (e) => {
    if (e.target === certModal) {
        certModal.classList.remove("active");
        certModalImg.src = "";
        document.body.style.overflow = "auto";
    }
});
document.addEventListener("contextmenu", (e) => {
    if (e.target.tagName === "IMG") e.preventDefault();
});
