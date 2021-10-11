

export default function scrollUp(scrollup){
    const $scrollup = document.getElementById('scroll-up');
    window.scrollY >= 550
        ? $scrollup.classList.add('show-scroll')
        : $scrollup.classList.remove('show-scroll')
}