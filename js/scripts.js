'use strict';

var ESC_Button = 27;
var COMBIN = 1;
var SUBTRACT = -1;
var openSearchBtn = document.querySelector('.btn');
var modalWindowSearch = document.querySelector('.search');
var inputForFocus = modalWindowSearch.querySelector('.begin');
var plusButtonFirst = modalWindowSearch.querySelector('.first-plus');
var minusButtonFirst = modalWindowSearch.querySelector('.first-minus');
var numberAdolts = modalWindowSearch.querySelector('.second');
var plusButtonSecond = modalWindowSearch.querySelector('.second-plus');
var minusButtonSecond = modalWindowSearch.querySelector('.second-minus');
var numberChildren = modalWindowSearch.querySelector('.first');
var form = modalWindowSearch.querySelector('.info-list');

openSearchBtn.addEventListener('click', function () {
  modalWindowSearch.classList.toggle('search-show');
  inputForFocus.focus();
});

window.addEventListener('keydown', function (evt) {
  evt.preventDefault();
  if (evt.keyCode === ESC_Button) {
    if (modalWindowSearch.classList.contains('search-show')) {
      modalWindowSearch.classList.remove('search-show');
    }
  }
});

var getNewValue = function (object , button , operation) {
  button.addEventListener('click', function (evt) {
    evt.preventDefault();
    var oldValue = Number(object.value);
    var newValue = oldValue + operation;
    object.value = newValue;
  });
}

getNewValue(numberAdolts, plusButtonFirst, COMBIN);
getNewValue(numberChildren, plusButtonSecond, COMBIN);
getNewValue(numberAdolts, minusButtonFirst, SUBTRACT);
getNewValue(numberChildren, minusButtonSecond, SUBTRACT);

var deleteClass = function() {
  numberAdolts.classList.remove('no-valid');
  numberChildren.classList.remove('no-valid');
}

form.addEventListener('submit', function (evt) {
  if (numberAdolts.value <= 0) {
    evt.preventDefault();
    numberAdolts.classList.add('no-valid');
    setTimeout(deleteClass, 3500);
  }
  if (numberChildren.value <= 0) {
    evt.preventDefault();
    numberChildren.classList.add('no-valid');
    setTimeout(deleteClass, 3500);
  }
});
