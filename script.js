// Dugme za povratak na vrh
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Funkcija koja pokazuje dugme kada korisnik skroluje dole
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block"; // Pokaži dugme
    } else {
        scrollToTopBtn.style.display = "none"; // Sakrij dugme
    }
};

// Funkcija koja pomera stranicu na vrh kada korisnik klikne na dugme
scrollToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Pomera stranicu sa glatkom animacijom
    });
};
