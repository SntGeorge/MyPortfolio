// Данные для перевода
const translations = {
    en: {
        'myPortfolio': 'MyPortfolio',
        'home': 'Home',
        'about': 'About',
        'skills': 'Skills',
        'projects': 'Projects',
        'contact': 'Contact',
        'heroTitle': "Hi, I'm <span class='highlight'>Yuri</span>",
        'heroSubtitle': 'Frontend Developer',
        'heroDescription': 'I create modern and responsive websites with clean code and creative design',
        'myWorks': 'My Works',
        'contactMe': 'Contact Me',
        'aboutTitle': 'About Me',
        'aboutText1': 'Hello! I\'m a frontend developer with a passion for creating intuitive and beautiful web interfaces.',
        'aboutText2': 'I enjoy turning complex tasks into simple, beautiful and intuitive designs. I strive to write clean, efficient and scalable code.',
        'aboutText3': 'When I\'m not coding, you can find me learning new technologies, reading IT literature or outdoors with a camera.',
        'completedProjects': 'Completed Projects',
        'yearsExperience': 'Years Experience',
        'happyClients': 'Happy Clients',
        'myTechStack': 'My Tech Stack:',
        'skillsTitle': 'My Skills',
        'projectsTitle': 'My Projects',
        'project1Title': 'E-commerce Store',
        'project1Desc': 'Full-featured online store with shopping cart, filters and responsive design.',
        'project2Title': 'Portfolio Website',
        'project2Desc': 'Modern and responsive portfolio site with animations and smooth scrolling.',
        'project3Title': 'Weather App',
        'project3Desc': 'Weather application with API integration and geolocation.',
        'project4Title': 'Task Manager',
        'project4Desc': 'Task management application with drag-and-drop and localStorage.',
        'viewProject': '👁️ View',
        'viewCode': '⚡ Code',
        'contactTitle': 'Contact Me',
        'letsWork': 'Let\'s work together!',
        'contactText': 'I\'m always open to discussing new projects and collaboration opportunities.',
        'email': 'Email',
        'phone': 'Phone',
        'location': 'Location',
        'yourName': 'Your Name',
        'yourEmail': 'Your Email',
        'subject': 'Subject',
        'yourMessage': 'Your Message',
        'sendMessage': 'Send Message',
        'footerText': '© 2025 MyPortfolio. All rights reserved.'
    },
    ru: {
        'myPortfolio': 'МоёПортфолио',
        'home': 'Главная',
        'about': 'Обо мне',
        'skills': 'Навыки',
        'projects': 'Проекты',
        'contact': 'Контакты',
        'heroTitle': "Привет, я <span class='highlight'>Юрий</span>",
        'heroSubtitle': 'Frontend разработчик',
        'heroDescription': 'Создаю современные и responsive веб-сайты с чистым кодом и креативным дизайном',
        'myWorks': 'Мои работы',
        'contactMe': 'Связаться',
        'aboutTitle': 'Обо мне',
        'aboutText1': 'Привет! Я frontend-разработчик с passion к созданию интуитивных и красивых веб-интерфейсов.',
        'aboutText2': 'Мне нравится превращать сложные задачи в простые, красивые и интуитивно понятные дизайны. Я стремлюсь писать чистый, эффективный и масштабируемый код.',
        'aboutText3': 'Когда я не кодирую, вы можете найти меня за изучением новых технологий, чтением IT-литературы или на природе с фотоаппаратом.',
        'completedProjects': 'Завершенных проектов',
        'yearsExperience': 'Года опыта',
        'happyClients': 'Довольных клиентов',
        'myTechStack': 'Мой стек технологий:',
        'skillsTitle': 'Мои навыки',
        'projectsTitle': 'Мои проекты',
        'project1Title': 'Интернет-магазин',
        'project1Desc': 'Полнофункциональный интернет-магазин с корзиной, фильтрами и адаптивным дизайном.',
        'project2Title': 'Портфолио сайт',
        'project2Desc': 'Современный и responsive сайт-портфолио с анимациями и smooth scrolling.',
        'project3Title': 'Weather App',
        'project3Desc': 'Приложение для просмотра погоды с API интеграцией и геолокацией.',
        'project4Title': 'Task Manager',
        'project4Desc': 'Приложение для управления задачами с drag-and-drop и localStorage.',
        'viewProject': '👁️ Посмотреть',
        'viewCode': '⚡ Код',
        'contactTitle': 'Свяжитесь со мной',
        'letsWork': 'Давайте работать вместе!',
        'contactText': 'Я всегда открыт для обсуждения новых проектов и возможностей для сотрудничества.',
        'email': 'Email',
        'phone': 'Телефон',
        'location': 'Местоположение',
        'yourName': 'Ваше имя',
        'yourEmail': 'Ваш email',
        'subject': 'Тема сообщения',
        'yourMessage': 'Ваше сообщение',
        'sendMessage': 'Отправить сообщение',
        'footerText': '© 2025 МоёПортфолио. Все права защищены.'
    }
};





class PortfolioApp {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'en';
        this.isMenuOpen = false;
        this.init();
    }

    init() {
        this.fixInitialScroll();
        this.applyLanguage(this.currentLanguage);
        this.setupEventListeners();
        this.setupAnimations();
    }

    fixInitialScroll() {
        if (window.location.hash) {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 0);
        }
    }

    setupEventListeners() {
        // Бургер-меню
        const burger = document.getElementById('burger');
        const navList = document.querySelector('.nav-list');

        
        let overlay = document.querySelector('.overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.classList.add('overlay');
            document.body.appendChild(overlay);
        }

        if (burger) {
            burger.addEventListener('click', () => this.toggleMenu());
        }

        if (overlay) {
            overlay.addEventListener('click', () => this.closeMenu());
        }

        
        document.querySelectorAll('.nav-list a').forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });

        // Плавная прокрутка для всех ссылок с якорями
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                
                // Закрываем меню если оно открыто (для мобильных)
                this.closeMenu();
                
                // Плавная прокрутка
                this.scrollToSection(targetId);
            });
        });

        // Переключение языка
        const langToggle = document.getElementById('language-toggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => {
                this.toggleLanguage();
            });
        }

        // Обработка формы
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleFormSubmit(e));
        }
    }

    toggleMenu() {
        const burger = document.getElementById('burger');
        const navList = document.querySelector('.nav-list');
        const overlay = document.querySelector('.overlay');
        
        this.isMenuOpen = !this.isMenuOpen;
        
        burger?.classList.toggle('active');
        navList?.classList.toggle('active');
        overlay?.classList.toggle('active');
        document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    }

    closeMenu() {
        const burger = document.getElementById('burger');
        const navList = document.querySelector('.nav-list');
        const overlay = document.querySelector('.overlay');
        
        burger?.classList.remove('active');
        navList?.classList.remove('active');
        overlay?.classList.remove('active');
        document.body.style.overflow = '';
        this.isMenuOpen = false;
    }

    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'en' ? 'ru' : 'en';
        localStorage.setItem('language', this.currentLanguage);
        this.applyLanguage(this.currentLanguage);
    }

    applyLanguage(lang) {
        const data = translations[lang];
        
        // Обновляем текст элементов с data-i18n
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (data[key]) {
                element.innerHTML = data[key];
            }
        });
        
        // Обновляем плейсхолдеры
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (data[key]) {
                element.placeholder = data[key];
            }
        });

        // Обновляем alt у изображения
        const profileImg = document.querySelector('.profile-photo');
        if (profileImg && data['profileAlt']) {
            profileImg.alt = data['profileAlt'];
        }

        // Обновляем атрибут lang
        document.documentElement.lang = lang;
    }

    scrollToSection(sectionId) {
        if (sectionId === '#') return; // Защита от пустых якорей
        
        const section = document.querySelector(sectionId);
        if (section) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const offsetTop = section.offsetTop - headerHeight;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Обновляем URL без перезагрузки страницы
            history.pushState(null, null, sectionId);
        }
    }

    handleFormSubmit(e) {
        e.preventDefault();
        alert(this.currentLanguage === 'en' 
            ? 'Thank you for your message! I will contact you soon.' 
            : 'Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.'
        );
        e.target.reset();
    }

    setupAnimations() {
        // Анимация прогресс-баров
        const animateSkills = () => {
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
            });
        };

        const checkScroll = () => {
            const skillsSection = document.getElementById('skills');
            if (!skillsSection) return;
            
            const sectionPos = skillsSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (sectionPos.top < windowHeight * 0.8) {
                animateSkills();
                window.removeEventListener('scroll', checkScroll);
            }
        };

        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.project-card, .contact-item, .skill-category');
            elements.forEach(element => {
                const elementPos = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                if (elementPos.top < windowHeight * 0.85) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };

        const initAnimations = () => {
            const animatedElements = document.querySelectorAll('.project-card, .contact-item, .skill-category');
            animatedElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(50px)';
                el.style.transition = 'all 0.6s ease';
            });
            
            window.addEventListener('scroll', checkScroll);
            window.addEventListener('scroll', animateOnScroll);
            checkScroll();
            animateOnScroll();
        };

        initAnimations();

        // Плавное появление hero контента
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '0';
            heroContent.style.transform = 'translateY(30px)';
            heroContent.style.transition = 'all 0.8s ease';
            
            setTimeout(() => {
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }, 300);
        }

        

        // Анимация для всех секций
        const animateSections = () => {
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const sectionPos = section.getBoundingClientRect();
                const windowHeight = window.innerHeight;
        
                if (sectionPos.top < windowHeight * 0.85) {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }
            });
        };
    }
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});
