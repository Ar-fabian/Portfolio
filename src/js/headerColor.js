export default function headerColor(){
    const $header = document.getElementById('header');
    window.scrollY>=80
        ? $header.classList.add('scroll-header')
        : $header.classList.remove('scroll-header')
}