export default function menu(navToggle, navClose, navLink, navMenu){
    const d = document;
    
    d.addEventListener('click',e=>{
        const element = e.target;
        const selectorMatches=(selector)=> element.matches(selector); 

        if( selectorMatches(navToggle) || selectorMatches(`${navToggle} *`)){
            d.getElementById(navMenu).classList.add('show-menu');
        }
        if(selectorMatches(navClose) || selectorMatches(`${navClose} *`) || selectorMatches(`${navLink} *`)){
            d.getElementById(navMenu).classList.remove('show-menu');
        }
    });
    
}
