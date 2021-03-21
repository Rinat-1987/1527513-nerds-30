let contactsbutton = document.querySelector('.contacts-button');
let tooltipmodal = document.querySelector('.modal-tooltip');
let modalclose = document.querySelector('.modal-close');

contactsbutton.onclick = function (evt) {
  evt.preventDefault();
  tooltipmodal.classList.remove('visually-hidden');
  tooltipmodal.classList.add('modal-show');
}

modalclose.onclick = function () {
  tooltipmodal.classList.add('visually-hidden');
  tooltipmodal.classList.remove('modal-show');
}
