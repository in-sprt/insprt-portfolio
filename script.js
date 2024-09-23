document.addEventListener('DOMContentLoaded', function() {
    const navDots = document.querySelectorAll('.nav-dot');
    const sections = document.querySelectorAll('#portfolio, #about, #skills, #contact');

    navDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const targetId = this.dataset.target;
            const targetSection = document.querySelector(targetId);

            // Удаляем класс "active" у всех точек
            navDots.forEach(dot => dot.classList.remove('active'));
            // Добавляем класс "active" к текущей точке
            this.classList.add('active');

            // Плавная прокрутка к целевому разделу
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Добавляем обработчик события прокрутки для обновления активной точки
    window.addEventListener('scroll', function() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSection = '#' + section.id;
            }
        });

        navDots.forEach(dot => {
            if (dot.dataset.target === currentSection) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    });
});
