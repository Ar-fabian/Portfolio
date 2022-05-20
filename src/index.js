import contact from "./js/contact";
import splashHome from "./js/home";
import menu from "./js/menu";
import scrollTitles from "./js/scrollTitles";
import about from "./js/about";
import skills from "./js/skills";
import studies from "./js/studies";
// import headerColor from './js/headerColor';
// import scrollActive from './js/scrollActiveLink';
// import scrollUp from "./js/scrollUp";
import './style.scss';



const d = document;
d.addEventListener('DOMContentLoaded',(e)=>{
    // splashHome();
    scrollTitles();
    about();
    skills();
}); 

d.addEventListener('click', (e)=>{
    const element = e.target;
    menu('#header-btn','#nav-close','#nav-item','nav-menu');
    if( element.matches('[data-target]') ) studies(element);
    if( element.matches('.contact__screen') ) contact();
  

});


// d.addEventListener('scroll',()=>{
//   scrollActive();
//   headerColor();
//   scrollUp();
// });

