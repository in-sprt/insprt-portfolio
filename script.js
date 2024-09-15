// Плавный скролл при клике на ссылки в меню
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Lightbox для портфолио (опционально)
// ... 
lightbox.option({
    'resizeDuration': 200,  //  Время  анимации  изменения  размера  (мс)
    'wrapAround': true,  //  Зацикливание  галереи
    'albumLabel': "%1 из %2",  //  Формат  метки  "Номер  изображения  из  общего  количества"
    //  ...  другие  опции
}); 

/ Инициализация Particles.js
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80, // Количество частиц
            "density": {
                "enable": true,
                "value_area": 800 // Плотность частиц
            }
        },
        "color": {
            "value": "#ffffff" // Цвет частиц
        },
        "shape": {
            "type": "circle", // Форма частиц
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5, // Прозрачность частиц
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3, // Размер частиц
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true, // Соединение частиц линиями
            "distance": 150, // Расстояние между частицами для соединения
            "color": "#ffffff", // Цвет линий
            "opacity": 0.4, // Прозрачность линий
            "width": 1 // Толщина линий
        },
        "move": {
            "enable": true,
            "speed": 6, // Скорость движения частиц
            "direction": "none", // Направление движения
            "random": true,
            "straight": false, // Прямолинейное движение
            "out_mode": "out", // Поведение при выходе за пределы контейнера
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas", // Область взаимодействия (canvas)
        "events": {
            "onhover": {
                "enable": true, // Взаимодействие при наведении курсора
                "mode": "repulse" // Режим взаимодействия (repulse - отталкивание)
            },
            "onclick": {
                "enable": true, // Взаимодействие при клике
                "mode": "push" // Режим взаимодействия (push - добавление частиц)
            },
            "resize": true // Адаптация к изменению размера экрана
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200, // Расстояние отталкивания при наведении курсора
                "duration": 0.4 // Длительность эффекта отталкивания
            },
            "push": {
                "particles_nb": 4 // Количество частиц, добавляемых при клике
            },
            "remove": {
                "particles_nb": 2 // Количество частиц, удаляемых при клике
            }
        }
    },
    "retina_detect": true // Адаптация к экранам Retina
});
