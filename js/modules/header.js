export function burgerMenuInit() {
    const burgerBtn = document.getElementById('burger-btn');
    const nav = document.querySelector('.header__nav');
    if (!burgerBtn || !nav) return;

    burgerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        nav.classList.toggle('active');
    });

    // Плавный скролл для всех ссылок-якорей
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === "#") return; // Не обрабатываем пустой якорь

            const targetId = href.slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                // Получаем высоту header, если он фиксированный
                const header = document.querySelector('.header');
                const headerHeight = header ? header.offsetHeight : 0;
                const elementPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({ top: elementPosition, behavior: 'smooth' });
            }
            // Закрываем меню только на мобильной версии
            if (window.innerWidth <= 900) {
                nav.classList.remove('active');
            }
        });
    });

    // Закрытие меню при клике вне меню
    document.addEventListener('click', (e) => {
        if (
            nav.classList.contains('active') &&
            !nav.contains(e.target) &&
            e.target !== burgerBtn
        ) {
            nav.classList.remove('active');
        }
    });
}