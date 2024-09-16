// Плавный скролл при клике на ссылки в меню
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

//  Инициализация  Swiper
var swiper = new Swiper('.testimonials-slider', {
    slidesPerView: 1, 
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    //  Другие  настройки  Swiper
});

// Навбар (полупрозрачность при прокрутке)
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Улучшение parallax-эффекта
window.addEventListener('scroll', () => {
  const parallaxBg = document.querySelector('.parallax-bg');
  let scrollY = window.pageYOffset;
  parallaxBg.style.backgroundPositionY = scrollY * 0.5 + 'px'; // Регулируем скорость движения фона
});

// Фильтрация портфолио
const filterButtons = document.querySelectorAll('.filter-button');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.filter;

        // Удаляем класс "active" у всех кнопок
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Добавляем класс "active" к текущей кнопке
        button.classList.add('active');

        portfolioItems.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Инициализация Fancybox
Fancybox.bind("[data-fancybox='gallery']", {
  // Опции Fancybox (при необходимости)
});

// ... (код для плавного скролла, Swiper, parallax, фильтрации портфолио, Fancybox) ...

// --- ФОРМА ОБРАТНОЙ СВЯЗИ ---

const form = document.getElementById('my-form');
const submitButton = form.querySelector('button[type="submit"]');
let formSent = false;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (formSent) {
    return;
  }

  // Визуальный отклик:
  submitButton.disabled = true;
  submitButton.textContent = 'Отправка...';

  // Имитация задержки отправки
  setTimeout(() => {
    // Показываем сообщение об успехе
    const successMessage = document.querySelector('.success-message');
    successMessage.style.display = 'flex';
    successMessage.classList.add('show');

    // Скрываем форму после завершения анимации
    form.addEventListener('transitionend', () => {
      form.style.display = 'none';
    }, { once: true });
    form.style.opacity = 0; 

    // Запись cookie и установка флага
    document.cookie = "formSubmitted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    formSent = true;

    // Сбрасываем форму
    form.reset();

    // Возвращаем кнопку в исходное состояние
    submitButton.disabled = false;
    submitButton.textContent = 'Отправить';
  }, 1000); // Задержка 1 секунда (1000 миллисекунд)
});

// Проверка cookie при загрузке страницы
window.onload = () => {
  if (document.cookie.indexOf("formSubmitted=true") != -1 || formSent) {
    const form = document.getElementById('my-form');
    const successMessage = document.querySelector('.success-message');
    form.style.display = 'none';
    successMessage.style.display = 'flex';
    successMessage.classList.add('show');
  }
};
