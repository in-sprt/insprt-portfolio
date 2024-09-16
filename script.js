// Плавный скролл при клике на ссылки в меню
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// формы
const form = document.getElementById('my-form');
const submitButton = form.querySelector('button[type="submit"]'); // Получаем кнопку отправки
let formSent = false; // Флаг, указывающий, была ли форма отправлена

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Предотвращаем стандартную отправку

  // Проверяем, отправлялась ли форма ранее
  if (formSent) {
    return; // Если да, ничего не делаем
  }

  // Собираем данные
  const formData = new FormData(form);

  // URL вашей Google Forms 
  const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeEEBv67u0q6N0li1Py1a3hDQTfyxY8ZrgImF44ldGv_7YzKg/formResponse';

  // Делаем кнопку отправки неактивной
  submitButton.disabled = true;
  submitButton.textContent = 'Отправка...'; // Изменяем текст кнопки

 // Отправляем данные
  fetch(formUrl, {
    method: 'POST',
    body: formData,
  })
  .then(response => {
      if (response.ok) {
        //  Показываем сообщение об успехе
        const successMessage = document.querySelector('.success-message');
        successMessage.style.display = 'flex'; // Показываем сообщение
        successMessage.classList.add('show'); // Добавляем класс для анимации

        // Скрываем форму после завершения анимации
        form.addEventListener('transitionend', () => {
          form.style.display = 'none';
        }, { once: true }); //  Сработает только один раз
        form.style.opacity = 0; // Запускаем анимацию скрытия

        // Запись в cookies и установка флага
        document.cookie = "formSubmitted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/"; 
        formSent = true; //  Устанавливаем флаг
      } else {
        // ... (обработка ошибки) ...
      }
    })
    .finally(() => {
        // Возвращаем кнопку отправки в активное состояние
        submitButton.disabled = false;
        submitButton.textContent = 'Отправить';
    }); 
});

// Проверка cookies и флага при загрузке страницы
window.onload = () => {
  if (document.cookie.indexOf("formSubmitted=true") != -1 || formSent) {
    // ... (скрытие формы, показ сообщения) ...
  }
};

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
