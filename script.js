// Плавный скролл при клике на ссылки в меню
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Навбар (полупрозрачность при прокрутке)
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const parallaxBg = document.querySelector('.parallax-bg');
    let scrollY = window.pageYOffset;

    //  Навбар  (полупрозрачность  при  прокрутке)
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    //  Parallax-эффект
    parallaxBg.style.backgroundPositionY = scrollY * 0.2 + 'px'; 
});

// Мобильное меню
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Закрываем меню при клике на ссылку
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
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

// --- ФОРМА ОБРАТНОЙ СВЯЗИ ---

const form = document.getElementById('my-form');
const submitButton = form.querySelector('button[type="submit"]');
const successMessage = document.querySelector('.success-message'); 

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeEEBv67u0q6N0li1Py1a3hDQTfyxY8ZrgImF44ldGv_7YzKg/formResponse'; 

  // Визуальный отклик:
  submitButton.disabled = true;
  submitButton.textContent = 'Отправка...';
  form.style.display = 'none'; // Скрываем форму
  successMessage.style.display = 'flex'; // Показываем сообщение

  // Запись cookie
  document.cookie = "formSubmitted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

  // Отправляем данные (имитация)
  fetch(formUrl, {
    method: 'POST',
    body: formData,
    mode: 'no-cors' 
  })
  .catch(error => {
    console.error('Ошибка при отправке формы (CORS):', error);
  });
});

// Проверка cookie при загрузке страницы
window.onload = () => {
  if (document.cookie.indexOf("formSubmitted=true") != -1) {
    const form = document.getElementById('my-form');
    const successMessage = document.querySelector('.success-message');
    form.style.display = 'none';
    successMessage.style.display = 'flex';
  }
};

