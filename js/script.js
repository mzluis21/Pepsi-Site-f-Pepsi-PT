const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
const desktopBtn = document.getElementById('navigation_social');


btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();

  nav.classList.toggle('active');
  const active = nav.classList.contains('active');

  event.currentTarget.setAttribute('aria-expanded', active);

  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');

    // Se estiver no mobile (tela pequena) e ainda não tiver o botão dentro do menu
    if (window.innerWidth <= 768 && !document.getElementById('mobile-btn')) {
      const mobileBtn = desktopBtn.cloneNode(true);
      mobileBtn.id = 'mobile-btn'; // Novo ID para evitar duplicação
      menu.appendChild(mobileBtn);
    }
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');

    // Remove o botão do mobile quando fecha
    const existingMobileBtn = document.getElementById('mobile-btn');
    if (existingMobileBtn) {
      existingMobileBtn.remove();
    }
  }

}

ScrollReveal({ reset: false, distance: '60px', duration: 800, delay: 200 });

  ScrollReveal().reveal('#header', { origin: 'top' });
  ScrollReveal().reveal('.background', { origin: 'bottom' });
  ScrollReveal().reveal('.products', { origin: 'bottom', interval: 200 });
  ScrollReveal().reveal('.propagated', { origin: 'bottom' });
  ScrollReveal().reveal('footer', { origin: 'bottom' });