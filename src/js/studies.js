const $box = document.getElementById('studies-box'); 

export default function studies(element){
    const idTab = element.dataset.target;
    if(idTab === '#education'){
        element.nextElementSibling.classList.remove('studies__active');
        $box.classList.add('active-Box')
    }else{
        element.previousElementSibling.classList.remove('studies__active');
        $box.classList.remove('active-Box')
    }
    element.classList.add('studies__active');
}