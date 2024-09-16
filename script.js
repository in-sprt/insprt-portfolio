// Плавный скролл при клике на ссылки в меню
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Инициализация Lightbox (после загрузки DOM)
document.addEventListener('DOMContentLoaded', function() {
  lightbox.option({
    'resizeDuration': 200, // Время анимации изменения размера (мс)
    'wrapAround': true,   // Зацикливание галереи
    'albumLabel': "%1 из %2", // Формат метки "Номер изображения из общего количества"
    // ... другие опции
  });
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

// Анимация появления элементов при прокрутке (опционально)
const animatedElements = document.querySelectorAll('.animate-on-scroll');

function checkAnimation() {
  animatedElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight * 0.8) { // 80% экрана
      element.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkAnimation);
checkAnimation(); // Проверяем анимацию при загрузке страницы 
