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


//  Кнопка  "Подробнее"  для  услуг
const serviceItems = document.querySelectorAll('.service-item');

serviceItems.forEach(item => {
  const description = item.querySelector('.service-description');
  const button = document.createElement('button');
  button.textContent = 'Подробнее';
  button.classList.add('read-more-btn');

  //  ARIA-атрибуты  для  доступности
  button.setAttribute('aria-expanded', 'false');
  description.setAttribute('aria-hidden', 'true');

  item.appendChild(button);

  //  Стили  для  анимации  (добавьте  их  в  CSS)
  description.style.maxHeight = '0';
  description.style.overflow = 'hidden';
  description.style.transition = 'max-height 0.3s ease';

  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    description.style.maxHeight = isExpanded ? '0' : `${description.scrollHeight}px`;
    button.setAttribute('aria-expanded', !isExpanded);
    description.setAttribute('aria-hidden', isExpanded);

    button.textContent = isExpanded ? 'Подробнее' : 'Скрыть';
  });
});


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
