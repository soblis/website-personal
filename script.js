// Smooth scrolling effect for navigation links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Remove the #
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Offset for the navbar
                behavior: 'smooth'
            });
        }
    });
});

// Form validation for the contact form
document.querySelector('.kontak button').addEventListener('click', function () {
    const name = document.querySelector('input[placeholder="Nama"]').value.trim();
    const email = document.querySelector('input[placeholder="Email"]').value.trim();
    const phone = document.querySelector('input[placeholder="No Telepon"]').value.trim();
    const message = document.querySelector('textarea').value.trim();

    if (!name || !email || !phone || !message) {
        alert('Semua kolom harus diisi!');
    } else if (!validateEmail(email)) {
        alert('Masukkan email yang valid!');
    } else {
        alert('Terima kasih! Pesan Anda telah dikirim.');
    }
});

// Utility function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}