let contactsbutton = document.querySelector('.contacts-button');
let tooltipmodal = document.querySelector('.modal-tooltip');
let modalclose = document.querySelector('.modal-close');

let sedona = document.querySelector('.catalog-sedona');
let tooltipsedona = document.querySelector('.catalog-tooltip-sedona');
let sedonaheader = document.querySelector('.catalog-header-sedona');

let pinkapp = document.querySelector('.catalog-pinkapp');
let tooltippinkapp = document.querySelector('.catalog-tooltip-pinkapp');
let pinkappheader = document.querySelector('.catalog-header-pinkapp');

let barbershop  = document.querySelector('.catalog-barbershop');
let tooltipbarbershop =  document.querySelector('.catalog-tooltip-barbershop');
let barbershopheader = document.querySelector('.catalog-header-barbershop');

let mishka  = document.querySelector('.catalog-mishka');
let tooltipmishka =  document.querySelector('.catalog-tooltip-mishka');
let mishkaheader = document.querySelector('.catalog-header-mishka');

let aplus  = document.querySelector('.catalog-aplus');
let tooltipaplus =  document.querySelector('.catalog-tooltip-aplus');
let aplusheader = document.querySelector('.catalog-header-aplus');

let kvast  = document.querySelector('.catalog-kvast');
let tooltipkvast =  document.querySelector('.catalog-tooltip-kvast');
let kvastheader = document.querySelector('.catalog-header-kvast');

contactsbutton.onclick = function () {
  tooltipmodal.classList.remove('visually-hidden');
}

modalclose.onclick = function () {
  tooltipmodal.classList.add('visually-hidden');
}

sedona.onclick = function () {
  tooltipsedona.classList.remove('visually-hidden');
  sedonaheader.classList.add('catalog-header-on');
  sedona.classList.add('catalog-shadow');
}

pinkapp.onclick = function () {
  tooltippinkapp.classList.remove('visually-hidden');
  pinkappheader.classList.add('catalog-header-on');
  pinkapp.classList.add('catalog-shadow');
}

barbershop.onclick = function () {
  tooltipbarbershop.classList.remove('visually-hidden');
  barbershopheader.classList.add('catalog-header-on');
  barbershop.classList.add('catalog-shadow');
}

mishka.onclick = function () {
  tooltipmishka.classList.remove('visually-hidden');
  mishkaheader.classList.add('catalog-header-on');
  mishka.classList.add('catalog-shadow');
}

aplus.onclick = function () {
  tooltipaplus.classList.remove('visually-hidden');
  aplusheader.classList.add('catalog-header-on');
  aplus.classList.add('catalog-shadow');
}

kvast.onclick = function () {
  tooltipkvast.classList.remove('visually-hidden');
  kvastheader.classList.add('catalog-header-on');
  kvast.classList.add('catalog-shadow');
}
