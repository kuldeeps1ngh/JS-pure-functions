// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Pure Functions</h1>`;

const arr = [1, 2, 3];

function addElementToArr(a, element) {
  return [...a, element];
}

console.log(addElementToArr(arr, 4))