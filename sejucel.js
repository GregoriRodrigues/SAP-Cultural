document.addEventListener('DOMContentLoaded', function () {
    // Inicialize o Swiper para os slides de fundo
    var homeSlider = new Swiper('.home-slider', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Inicialize o Swiper para o slider de notícias
    var newsSlider = new Swiper('.main-news-slider', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Animação e loop do slide de notícias
    const newsList = document.getElementById('newsList');
    const newsItems = newsList.getElementsByClassName('news-item');
    const mainNewsImage = document.getElementById('mainNewsImage');
    const mainNewsTitle = document.getElementById('mainNewsTitle');
    let currentIndex = 0;
    let intervalId;

    function showNewsItem(index) {
        // Remove a classe 'active' de todos os itens
        for (let i = 0; i < newsItems.length; i++) {
            newsItems[i].classList.remove('active');
        }
        // Adiciona a classe 'active' ao item atual
        newsItems[index].classList.add('active');
        // Atualiza a imagem e o título da notícia principal
        mainNewsImage.src = newsItems[index].getAttribute('data-image');
        mainNewsTitle.textContent = newsItems[index].getAttribute('data-title');
    }

    function startSlideShow() {
        intervalId = setInterval(function() {
            currentIndex = (currentIndex + 1) % newsItems.length;
            showNewsItem(currentIndex);
        }, 3000);
    }

    function pauseSlideShow() {
        clearInterval(intervalId);
    }

    // Start the slideshow initially
    showNewsItem(currentIndex);
    startSlideShow();

    // Add click event to each news item to show the corresponding news
    for (let i = 0; i < newsItems.length; i++) {
        newsItems[i].addEventListener('click', function() {
            currentIndex = i;
            showNewsItem(currentIndex);
            pauseSlideShow();
            startSlideShow();
        });
    }
});

// Seleciona a navbar
const navbar = document.querySelector('.navbar');

// Função para adicionar classe 'scrolled' à navbar quando rolar a página
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// PROGRAMS E PROJETOS

let slideIndex = 0;
let slides = document.getElementsByClassName("slide");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("fade");
    setTimeout(showSlides, 6000); // Change image every 5 seconds
}

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("fade");
}

showSlides();

// Menu fixo na rolagem


    window.addEventListener('scroll', function() {
      var header = document.querySelector('.header');
      var navbar = document.querySelector('.navbar');
      if (window.scrollY > 200) {
        header.classList.add('hidden-header');
        navbar.classList.add('sticky');
      } else {
        header.classList.remove('hidden-header');
        navbar.classList.remove('sticky');
      }
    });





