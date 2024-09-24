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

/* кнопка "Подробнее" */

const serviceItems = document.querySelectorAll('.service-item');

serviceItems.forEach(item => {
  const description = item.querySelector('.service-description');
  const button = document.createElement('button'); //  Создаем  кнопку  "Подробнее"
  button.textContent = 'Подробнее';
  button.classList.add('read-more-btn'); //  Добавляем  класс  для  стилизации

  item.appendChild(button); //  Добавляем  кнопку  в  карточку  услуги

  //  По  умолчанию  описание  скрыто
  description.style.display = 'none';

  button.addEventListener('click', () => {
    description.style.display = description.style.display === 'none' ? 'block' : 'none';
    button.textContent = button.textContent === 'Подробнее' ? 'Скрыть' : 'Подробнее';
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
