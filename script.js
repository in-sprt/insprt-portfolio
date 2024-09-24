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

// Портфолио

const projects = [
  {
    title: "Логотип для кофейни",
    category: "graphic",
    description: "Разработка яркого и запоминающегося логотипа для новой кофейни в центре города.",
    images: [
      "images/portfolio/graphic/1.jpg",
      "images/portfolio/graphic/2.jpg",
      "images/portfolio/graphic/3.jpg"
    ]
  },
  {
    title: "Дизайн интерьера квартиры",
    category: "interior",
    description: "Создание современного и функционального дизайна интерьера для трехкомнатной квартиры.",
    images: [
      "images/portfolio/interior/1.jpg",
      "images/portfolio/interior/2.jpg"
    ]
  },
  {
    title: "Брендинг для фитнес-клуба",
    category: "branding",
    description: "Разработка фирменного стиля и брендбука для нового фитнес-клуба.",
    images: [
      "images/portfolio/branding/1.jpg",
      "images/portfolio/branding/2.jpg",
      "images/portfolio/branding/3.jpg",
      "images/portfolio/branding/4.jpg"
    ]
  },
  {
    title: "Иллюстрации для детской книги",
    category: "illustration",
    description: "Создание красочных иллюстраций для детской книги сказок.",
    images: [
      "images/portfolio/illustration/1.jpg",
      "images/portfolio/illustration/2.jpg"
    ]
  },
  // ... добавьте данные для других проектов
];

const portfolioGrid = document.getElementById('portfolio-grid');
const filterButtons = document.querySelectorAll('.filter-button'); 

function displayProjects(projects) {
  portfolioGrid.innerHTML = ''; 

  projects.forEach((project, index) => {
    let projectHTML = `
      <div class="portfolio-item" data-category="${project.category}">
        <a href="#project-${index}" data-fancybox="project-${index}">
          <img src="${project.images[0]}" alt="${project.title}">
        </a>
        <div class="portfolio-info">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>
        <div id="project-${index}" style="display: none;">
          ${project.images.map(image => `
            <a href="${image}" data-fancybox="project-${index}">
              <img src="${image}" alt="${project.title}">
            </a>
          `).join('')}
        </div>
      </div>
    `;
    portfolioGrid.innerHTML += projectHTML;
  });

  //  Код  фильтрации  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.filter;

      portfolioGrid.querySelectorAll('.portfolio-item').forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });

      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
}

// Инициализация портфолио
displayProjects(projects);

// Fancybox 
Fancybox.bind("[data-fancybox]", {
  // Ваши опции Fancybox
});
