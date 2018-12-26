'use strict';

var openSearchBtn = document.querySelector('.btn');
var modalWindowSearch = document.querySelector('.search');
var inputForFocus = modalWindowSearch.querySelector('.begin');

openSearchBtn.addEventListener('click', function(){
  modalWindowSearch.classList.toggle('search-show');
  inputForFocus.focus();
});
