document.addEventListener('DOMContentLoaded', function() {
    const navDots = document.querySelectorAll('.nav-dot');
    const sections = document.querySelectorAll('#portfolio, #about, #skills, #contact');

    navDots.forEach(dot => {
        dot.addEventListener('click', function() {
            // ... (код для плавной прокрутки) ...
        });
    });

    // Добавляем обработчик события прокрутки для обновления активной точки
    window.addEventListener('scroll', function() {
        // ... (код для обновления активной точки при прокрутке) ... 
    });
    
    Fancybox.bind("[data-fancybox='gallery']", {
        // Опции Fancybox (при необходимости)
    });
    
    // --- Код для фильтрации ---
    const filterButtons = document.querySelectorAll('.filter-button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterCategory = this.dataset.filter;

            // Удаляем класс "active" у всех кнопок
            filterButtons.forEach(button => button.classList.remove('active'));
            // Добавляем класс "active" к текущей кнопке
            this.classList.add('active');

            portfolioItems.forEach(item => {
                if (filterCategory === 'all' || item.dataset.category === filterCategory) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
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
