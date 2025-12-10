document.addEventListener("DOMContentLoaded", function () {
    // 1. Header'ı Yükle
    fetch("header-isveren.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
            
            // 2. Aktif Linki İşaretle
            setActiveLink();
        });
});

function setActiveLink() {
    // Şu anki sayfanın adını al (örn: ilan.html)
    let path = window.location.pathname;
    let page = path.split("/").pop();

    // Eğer ana sayfadaysa ve path boşsa index.html varsay
    if (page === "") page = "index.html";

    // Tüm linkleri pasif yap (standart stil)
    const links = document.querySelectorAll(".nav-link");
    const inactiveClass = "text-brand-light hover:text-white font-medium text-sm transition-colors";
    
    // Aktif link stili (Kırmızı ve altı çizili)
    const activeClass = "text-brand-accent font-bold text-sm border-b-2 border-brand-accent pb-0.5";

    // Linkleri döngüye al
    links.forEach(link => {
        // Linkin href değeri sayfa adıyla eşleşiyor mu?
        if (link.getAttribute("href") === page) {
            link.className = activeClass;
        } else {
            link.className = inactiveClass;
        }
    });
}