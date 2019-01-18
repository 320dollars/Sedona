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
var oneRange = document.querySelector('#min-result');
var oneOut = document.querySelector('#one-result');
var checkIn = form.querySelector('#checkin');
var checkOut = form.querySelector('#checkout');

openSearchBtn.addEventListener('click', function () {
  modalWindowSearch.classList.toggle('search-show');
  inputForFocus.focus();
});

window.addEventListener('keydown', function (evt) {
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

var months = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Октября',
  'Ноября',
  'Декабря'
]

var today = new Date();
var startDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
var tomorrow = new Date(startDay.valueOf() + 86400000);

var getFormatDate = function (time) {
  var dd = time.getDate();
  var mm = time.getMonth();
  var yyyy = time.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  time = dd + ' ' + months[mm]  + ' ' + yyyy;
  return time;
}

checkIn.value = getFormatDate(today);
checkOut.value = getFormatDate(tomorrow);

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
  if (checkIn.value.valueOf() < startDay.valueOf()) {
    evt.preventDefault();
    checkIn.classList.add('no-valid');
    setTimeout(deleteClass, 3500);
  }
});






/*var getDay = function (date) {
  var day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
}*/

/*var createCalendar = function (id, year, month) {
  var element = form.querySelector(id);
  var mon = month - 1;
  var d = new Date(year, mon);
  var table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr>';
  for (var i = 0; i < getDay(d); i++) {
    table += '<td></td>';
  }

  while (d.getMonth() == mon) {
    table += '<td>' + d.getDate() + '</td>';

    if (getDay(d) % 7 == 6) {
      table += '<tr></tr>';
    }

    d.setDate(d.setDate() + 1);
  }

  if (getDay(d) != 0 ) {
      for (var i = getDay(d); i < 7; i++) {
      table += '<td></td>';
    }
  }

  table += '</tr></table>';
  element.innerHTML = table;
}

createCalendar('#calendar', 2019, 1);*/

/*oneRange.addEventListener('oninput', function() {
  oneRange.value = oneOut.value;
})*/
