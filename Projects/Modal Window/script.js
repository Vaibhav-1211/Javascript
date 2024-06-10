'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');


const openModal = function () {
  // console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}//open the modal 

//Here will adding and removing classes or manipulating them.

const closeModal = function () {
  modal.classList.add('hidden')//it will hide the modal.
  overlay.classList.add('hidden')
};//close the modal

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal)
  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

}//this will show node list of buttons.
//Handling ESC Keypress events.
//keyup,keypress,keydown
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



//if there is one line code we can write it as it was
//Here classList is:a read-only property that returns a live DOMTokenList collection of the class attributes of the element.



