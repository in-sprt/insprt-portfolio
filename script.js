// Плавный скролл при клике на ссылки в меню
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Обработка формы обратной связи
const form = document.getElementById('my-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Предотвращаем стандартную отправку

  // Собираем данные
  const formData = new FormData(form);

  // URL вашей Google Forms (из режима редактирования, 
  //  ОБЯЗАТЕЛЬНО ЗАМЕНИТЬ НА СВОЙ!)
  const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeEEBv67u0q6N0li1Py1a3hDQTfyxY8ZrgImF44ldGv_7YzKg/formResponse'; 

  // Отправляем данные
  fetch(formUrl, {
    method: 'POST',
    body: formData,
  })
    .then(response => {
      if (response.ok) {
        alert('Спасибо! Ваше сообщение отправлено.');
        form.reset(); // Очищаем форму
      } else {
        alert('Ошибка при отправке. Попробуйте позже.');
      }
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
