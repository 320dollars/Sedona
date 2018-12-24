'use strict';

var openSearchBtn = document.querySelector('.btn');
var modalWindowSearch = document.querySelector('.search');

openSearchBtn.addEventListener('click', function(){
  modalWindowSearch.classList.toggle('search-show');
});
