export function burgerMenuInit() {
    const burgerBtn = document.getElementById('burger-btn');
    const nav = document.querySelector('.header__nav');
    if (!burgerBtn || !nav) return;

    burgerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        nav.classList.toggle('active');
    });

    nav.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
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