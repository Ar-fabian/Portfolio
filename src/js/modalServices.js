const d = document;
const $modalViews = d.querySelectorAll('.services__modal'),
      $modalBtns = d.querySelectorAll('.services__button'),
      $modalClose = d.querySelectorAll('.services__modal-close');

const toggleModal = (modalClick)=>{
    $modalViews[modalClick].classList.toggle('active__modal');
}



export default function modalServices(){

$modalBtns.forEach((modalBtn,i)=>{
    modalBtn.addEventListener('click', ()=>{
        toggleModal(i);
    });
    $modalClose[i].addEventListener('click', ()=>{
        toggleModal(i);
    })
});

}