const d = document;
    const $tabs = d.querySelectorAll('[data-target]'); 
    const $tabContents = d.querySelectorAll('[data-content]'); 

function tabSelect(element,Idtab){
        $tabs.forEach(tab =>{
        tab.classList.remove('qualification__active');
        });
        $tabContents.forEach(content=>{
            content.classList.remove('qualification__active');
        });      
        d.querySelector(Idtab).classList.add('qualification__active');
        element.classList.add('qualification__active');
}

export default function qualificationTabs(dataTarget){
    
    d.addEventListener('click', (e)=>{
        const element = e.target,
              Idtab = element.dataset.target;

        if( element.matches(dataTarget) || element.matches(`${dataTarget} *`) ){
            tabSelect(element,Idtab);
        }    
    });
}