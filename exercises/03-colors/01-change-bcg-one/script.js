/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
const redButton = document.getElementById("red");
const greenButton = document.getElementById("green");
const blueButton = document.getElementById("blue");
const yellowButton = document.getElementById("yellow");
let body = document.querySelector("body"); 
console.log(body);

redButton.addEventListener("click", () => {
    body.style.background = 'red';
})

greenButton.addEventListener('click', () => {
    body.style.background = 'green';
})

blueButton.addEventListener('click', () => {
    body.style.background = 'blue';
})

yellowButton.addEventListener('click', () => {
    body.style.background = 'yellow';
})


    // your code here
})();
