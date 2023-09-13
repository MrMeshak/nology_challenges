import { circleArea, circlePerimeter } from './circle.js';
import { rectangleArea } from './rectangle.js';
// when we import a default we can give it any name
import rp from './rectangle.js';
import { collectFormData } from './form-utils.js';
import { clearFields, createElementWithText } from './dom-utils.js';

const circleForm = document.querySelector('#circleForm');
const rectangleForm = document.querySelector('#rectangleForm');
const widthField = document.querySelector('#width');
const lengthField = document.querySelector('#length');
const radiusField = document.querySelector('#radius');
const rectangleOutput = document.querySelector('#rectangleOutput');

circleForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = collectFormData(circleForm);
  // todo calculate
  console.log('circle', data);
  //cleanup
  clearFields([radiusField]);
});

rectangleForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = collectFormData(rectangleForm);
  // todo calculate
  console.log('rectangle', data);
  const width = parseInt(data[0]);
  const length = parseInt(data[1]);
  const calcChoice = data[2];
  let result;
  if (calcChoice === 'a') {
    result = rectangleArea(length, width);
  } else {
    result = rp(length, width);
  }
  const message = `The ${calcChoice === 'a' ? 'area' : 'perimeter'} is ${result}`;
  createElementWithText('p', message, rectangleOutput);
  //cleanup
  clearFields([widthField, lengthField]);
});
import { circleArea, circlePerimeter } from './js/circle.js';
import { rectangleArea } from './js/rectangle.js';
// when we import a default we can give it any name
import rp from './js/rectangle.js';
import { collectFormData } from './js/form-utils.js';
import { clearFields, createElementWithText } from './js/dom-utils.js';
