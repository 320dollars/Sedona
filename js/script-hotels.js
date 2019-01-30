'use strict';

/*вывод значений ползунков*/
var minRange = document.querySelector('#min-result');
var outMin = document.querySelector('#one-result');
var maxRange = document.querySelector('#max-result');
var outMax = document.querySelector('#two-result');

var changeResult = function (range, output) {
  range.addEventListener('input', function () {
    output.innerHTML = range.value;
  });
}

changeResult(minRange, outMin);
changeResult(maxRange, outMax);
