'use strict';

/*Открытие и закрытие модального окна search*/
var ESC_Button = 27;
var openSearchBtn = document.querySelector('.btn');
var modalWindowSearch = document.querySelector('.search');
var inputForFocus = modalWindowSearch.querySelector('.begin');

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

/*Валидация формы*/
var form = modalWindowSearch.querySelector('.info-list');
var oneRange = document.querySelector('#min-result');
var oneOut = document.querySelector('#one-result');
var checkIn = form.querySelector('#checkin');
var checkOut = form.querySelector('#checkout');

var deleteClass = function() {
  numberAdolts.classList.remove('no-valid');
  numberChildren.classList.remove('no-valid');
  checkIn.classList.remove('no-valid');
  checkOut.classList.remove('no-valid');
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
  if (!checkIn.value) {
    evt.preventDefault();
    checkIn.classList.add('no-valid');
    setTimeout(deleteClass, 3500);
  }
  if (!checkOut.value) {
    evt.preventDefault();
    checkOut.classList.add('no-valid');
    setTimeout(deleteClass, 3500);
  }
});

/*Открытие и закрытие календаря*/
var modalCalendar = form.querySelector('#calendar');
var calendarBtn1 = form.querySelector('.calendar');
var calendarBtn2 = form.querySelector('.second-calendar');

calendarBtn1.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalCalendar.classList.toggle('calendar--show');
  });

calendarBtn2.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalCalendar.classList.toggle('calendar--show');
  });


/*Счетчик людей*/
var COMBIN = 1;
var SUBTRACT = -1;
var plusButtonFirst = modalWindowSearch.querySelector('.first-plus');
var minusButtonFirst = modalWindowSearch.querySelector('.first-minus');
var numberAdolts = modalWindowSearch.querySelector('.second');
var plusButtonSecond = modalWindowSearch.querySelector('.second-plus');
var minusButtonSecond = modalWindowSearch.querySelector('.second-minus');
var numberChildren = modalWindowSearch.querySelector('.first');

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

/*Текущая дата*/
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
];

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

/*Отрисовка алендаря*/
modalCalendar.innerHTML = '<table id="calendar2"><thead><tr><td><td colspan="5"><td><tr><td>Пн<td>Вт<td>Ср<td>Чт<td>Пт<td>Сб<td>Вс<tbody></table>';

var Calendar2 = function (id, year, month) {
var Dlast = new Date( year, month + 1,0).getDate();
var D = new Date(year, month, Dlast);
var DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay();
var DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay();
var calendar = '<tr>';
var month=[
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь"
];

if (DNfirst != 0) {
  for (var  i = 1; i < DNfirst; i++) calendar += '<td>';
} else {
  for (var  i = 0; i < 6; i++) calendar += '<td>';
}

for (var  i = 1; i <= Dlast; i++) {
  if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
    calendar += '<td class="today">' + i;
  } else {
    calendar += '<td>' + i;
  }

  if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
    calendar += '<tr>';
  }
}

for (var  i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';

document.querySelector('#' + id + ' tbody').innerHTML = calendar;
document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = month[D.getMonth()] + ' ' +  D.getFullYear();
document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
document.querySelector('#'+ id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();

if (document.querySelectorAll('#'+ id + ' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток.
    document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
}
}

Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
// переключатель минус месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').addEventListener ('click', function() {
  Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)-1);
});
// переключатель плюс месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').addEventListener ('click', function() {
  Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)+1);
});
