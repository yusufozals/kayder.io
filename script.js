document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Header Yükle
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            const headerElement = document.getElementById("header-placeholder");
            if (headerElement) {
                headerElement.innerHTML = data;
            }
        });

    // 2. Footer Yükle
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            const footerElement = document.getElementById("footer-placeholder");
            if (footerElement) {
                footerElement.innerHTML = data;
            }
        });

});


// --- MODAL İÇERİK VERİTABANI (Basit JSON) ---
const legalContents = {
  terms: {
    title: "Kullanım Koşulları",
    content: `
      <p><strong>1. Giriş</strong><br>Kayseri Kariyer Portalı'na hoş geldiniz. Bu siteyi kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız.</p>
      <p><strong>2. Üyelik</strong><br>Sisteme üye olurken verdiğiniz bilgilerin doğruluğundan siz sorumlusunuz. Dernek, yanlış beyan durumunda üyeliği askıya alma hakkını saklı tutar.</p>
      <p><strong>3. İlanlar</strong><br>Yayınlanan iş ilanları dernek onayından geçmektedir. Ancak ilan içeriğindeki taahhütlerden ilgili firma sorumludur.</p>
      <p>Bu platform, Kayserililer arasındaki ticari ve sosyal dayanışmayı artırmak amacıyla kurulmuştur.</p>`
  },
  privacy: {
    title: "Gizlilik Politikası",
    content: `
      <p>Verileriniz bizim için kutsaldır. Kayseri Derneği olarak kişisel verilerinizi 3. şahıslarla ticari amaçla paylaşmıyoruz.</p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Ad, Soyad ve İletişim bilgileriniz sadece başvuru yaptığınız firmalarla paylaşılır.</li>
        <li>Sistem güvenliği için IP adresleriniz kayıt altında tutulabilir.</li>
      </ul>`
  },
  kvkk: {
    title: "KVKK Aydınlatma Metni",
    content: `
      <p>6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca verileriniz "Veri Sorumlusu" sıfatıyla Kayserililer Derneği tarafından işlenmektedir.</p>
      <p>Verileriniz, istihdam süreçlerinin yürütülmesi ve dernek içi iletişimin sağlanması amacıyla sınırlı olarak işlenir.</p>`
  },
  cookies: {
    title: "Çerez Politikası",
    content: `
      <p>Sizlere daha iyi bir deneyim sunmak için zorunlu ve analitik çerezler kullanıyoruz.</p>
      <p>Tarayıcınızın ayarlarından çerezleri dilediğiniz zaman silebilirsiniz.</p>`
  }
};

// --- MODAL FONKSİYONLARI ---

function openModal(type) {
  const modal = document.getElementById('legal-modal');
  const backdrop = document.getElementById('modal-backdrop');
  const panel = document.getElementById('modal-panel');
  const titleEl = document.getElementById('modal-title');
  const contentEl = document.getElementById('modal-content');

  // İçeriği Doldur
  if (legalContents[type]) {
    titleEl.innerHTML = legalContents[type].title;
    contentEl.innerHTML = legalContents[type].content;
  }

  // Modalı Göster (Animasyonlu)
  modal.classList.remove('hidden');
  
  // Küçük bir gecikme ile opaklıkları aç (Transition çalışsın diye)
  setTimeout(() => {
    backdrop.classList.remove('opacity-0');
    panel.classList.remove('opacity-0', 'scale-95');
    panel.classList.add('opacity-100', 'scale-100');
  }, 10);
}

function closeModal() {
  const modal = document.getElementById('legal-modal');
  const backdrop = document.getElementById('modal-backdrop');
  const panel = document.getElementById('modal-panel');

  // Animasyonlu Kapanış
  backdrop.classList.add('opacity-0');
  panel.classList.remove('opacity-100', 'scale-100');
  panel.classList.add('opacity-0', 'scale-95');

  // Animasyon bitince gizle (300ms transition süresi kadar bekle)
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 300);
}

// Modalin dışına (siyah alana) tıklayınca kapatma
window.onclick = function(event) {
  const modal = document.getElementById('legal-modal');
  const backdrop = document.getElementById('modal-backdrop');
  // Eğer tıklanan yer backdrop ise kapat
  if (event.target === backdrop) { // modal yerine backdrop'a tıklamayı kontrol ediyoruz
     closeModal();
  }

}

// script.js içine:
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const iconClosed = document.getElementById('icon-menu-closed');
  const iconOpen = document.getElementById('icon-menu-open');

  if (menu.classList.contains('hidden')) {
    // Menüyü Aç
    menu.classList.remove('hidden');
    iconClosed.classList.add('hidden');
    iconOpen.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Kaydırmayı kilitle
  } else {
    // Menüyü Kapat
    menu.classList.add('hidden');
    iconClosed.classList.remove('hidden');
    iconOpen.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Kaydırmayı aç
  }
}
