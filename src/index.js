import menu from "./js/menu";
import qualificationTabs from "./js/qualificationTabs";
import modalServices from './js/modalServices';
import headerColor from './js/headerColor';
import scrollActive from './js/scrollActiveLink';
import scrollUp from "./js/scrollUp";
import './style.scss';



const d = document;


d.addEventListener('DOMContentLoaded',(e)=>{
    menu('#nav-toggle','#nav-close','#nav-item','nav-menu');
    qualificationTabs('[data-target]');
    modalServices();
}); 

d.addEventListener('scroll',()=>{
  scrollActive();
  headerColor();
  scrollUp();
});

