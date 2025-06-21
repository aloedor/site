document.addEventListener('DOMContentLoaded', function() {

    // --- ПЛАВНАЯ ПРОКРУТКА И АКТИВНЫЕ ССЫЛКИ НАВИГАЦИИ ---
    const navLinks = document.querySelectorAll('.main-nav a');
    const sections = document.querySelectorAll('main section');

    function changeLinkState() {
        let index = sections.length;

        while(--index && window.scrollY + 100 < sections[index].offsetTop) {}
        
        navLinks.forEach((link) => link.classList.remove('active'));
        if (navLinks[index]) {
            navLinks[index].classList.add('active');
        }
    }

    changeLinkState();
    window.addEventListener('scroll', changeLinkState);


    // --- КНОПКА "НАВЕРХ" ---
    const backToTopButton = document.querySelector('.back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    // --- ОБРАБОТКА ФОРМЫ ---
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[name="name"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const message = this.querySelector('textarea[name="message"]').value;
        
        if (!name || !email || !message) {
            alert('Пожалуйста, заполните все поля.');
            return;
        }

        alert(`Спасибо, ${name}! Ваше сообщение отправлено.`);
        this.reset();
    });


    // --- КАРАУСЕЛЬ ИЗОБРАЖЕНИЙ НА ГЛАВНОМ ЭКРАНЕ ---
    const carouselImages = document.querySelectorAll('.carousel-image');
    let currentImageIndex = 0;

    if (carouselImages.length > 0) {
        function showNextImage() {
            carouselImages[currentImageIndex].classList.remove('active');
            currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
            carouselImages[currentImageIndex].classList.add('active');
        }
        
        setInterval(showNextImage, 10000);
    }

});