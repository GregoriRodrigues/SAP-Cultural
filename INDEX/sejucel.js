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

    // Seleciona a navbar
    const navbar = document.querySelector('.nav-bar');
    const stickyOffset = navbar.offsetTop;

    // Função para adicionar classe 'sticky' à navbar quando rolar a página
    window.addEventListener('scroll', function() {
        if (window.scrollY > stickyOffset) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
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
        setTimeout(showSlides, 3000); // Muda a cada 3 segundos
    }
    showSlides();

    // Toggle menu button
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', function() {
        document.querySelector('.nav-bar').classList.toggle('active');
    });
});


/// Hora na tela
$(document).ready(function() {
    $(".drop").hover(
        function() {
            $(this).find(".dropdown").stop(true, true).slideDown(300);
        },
        function() {
            $(this).find(".dropdown").stop(true, true).slideUp(300);
        }
    );
});

 // Função para obter a data atual 
$(document).ready(function() {

    function getFormattedDate() {
        const months = [
            "janeiro", "fevereiro", "março", "abril", "maio", "junho", 
            "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
        ];
        
        const date = new Date();
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();

        return `Rondônia, ${day} de ${month} de ${year}`;
    }

    // Atualizar o conteúdo do elemento <span> com a data formatada
    $('#current-date').text(getFormattedDate());
});

    // FIM DA - Função para obter a data atual formatada



// Inicializa o Swiper com loop ativado
const swiper = new Swiper('.swiper-container', {
    loop: true, // Ativa o loop
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



// JavaScript para mostrar/esconder o dropdown
$(document).ready(function() {
    $(".drop").hover(
        function() {
            $(this).children(".dropdown").stop(true, true).slideDown(300);
        },
        function() {
            $(this).children(".dropdown").stop(true, true).slideUp(300);
        }
    );
});


