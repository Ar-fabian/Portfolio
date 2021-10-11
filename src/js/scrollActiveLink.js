const $sections = document.querySelectorAll('section[id]');


const scrollSections = (current) =>
    ({
        sectionHeight: current.offsetHeight,
        sectionTop: current.offsetTop - 50,
        sectionId: current.getAttribute('id'),
        scrollY: window.pageYOffset
    });
    


export default function scrollActive(){

    $sections.forEach(current =>{
        
        const {scrollY, sectionTop, sectionHeight, sectionId} = scrollSections(current);

        scrollY > sectionTop && scrollY<=sectionTop + sectionHeight
           ? document.querySelector(`.nav__menu a[href*= ${sectionId} ]`).classList.add('active-link')
           :document.querySelector(`.nav__menu a[href*= ${sectionId} ]`).classList.remove('active-link')  
    });
}