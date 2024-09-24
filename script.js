/* МОБИЛЬНОЕ МЕНЮ */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

/* Плавный скролл */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


///  эффект  паралакса
window.addEventListener('scroll', () => {
  const parallaxBg = document.querySelector('.parallax-bg');
  let scrollY = window.pageYOffset;

  parallaxBg.style.backgroundPositionY = scrollY * 0.5 + 'px'; 
});

// кукуепта

// Фильтр портфолио 

const filterButtons = document.querySelectorAll('.filter-button');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;

    portfolioItems.forEach(item => {
      if (category === 'all' || item.dataset.category === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });

    //  Добавляем  класс  "active"  к  нажатой  кнопке
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

/* Fancy box */

Fancybox.bind("[data-fancybox='gallery']", {
  //  Опции  Fancybox
});
