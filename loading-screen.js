// Fungsi untuk menampilkan loading screen
function showLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '1';
        loadingScreen.style.visibility = 'visible';
    }
}

// Fungsi untuk menyembunyikan loading screen
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.visibility = 'hidden';
        }, 500); // Sesuaikan dengan durasi transisi
    }
}

// Tambahkan event listener untuk semua link navigasi
document.addEventListener('DOMContentLoaded', function() {
    // Sembunyikan loading screen saat halaman selesai dimuat
    hideLoadingScreen();
    
    // Tangkap semua link navigasi
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Jangan tampilkan loading screen untuk link yang aktif
            if (this.classList.contains('active')) {
                return;
            }
            
            const href = this.getAttribute('href');
            
            // Hanya tampilkan loading untuk navigasi internal (beranda, about, menu)
            if (href && (href.includes('beranda.html') || href.includes('about.html') || href.includes('menu.html'))) {
                e.preventDefault();
                showLoadingScreen();
                
                // Navigasi ke halaman setelah delay singkat
                setTimeout(() => {
                    window.location.href = href;
                }, 300); // Delay kecil untuk efek visual
            }
        });
    });
    
    // Tambahkan event listener untuk logo (jika diklik untuk ke homepage)
    const logo = document.querySelector('.logo a');
    if (logo) {
        logo.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.includes('beranda.html')) {
                e.preventDefault();
                showLoadingScreen();
                
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    }
});

// Tambahkan event listener untuk saat halaman dimuat
window.addEventListener('load', hideLoadingScreen);

// Tambahkan event listener untuk saat halaman akan ditinggalkan
window.addEventListener('beforeunload', showLoadingScreen);