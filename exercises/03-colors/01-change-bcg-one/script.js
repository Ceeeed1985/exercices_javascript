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

    document.getElementById("red").addEventListener("click", () => {
        let body = document.querySelector('body');
        body.style.backgroundColor = 'red';
    });

    document.getElementById("green").addEventListener("click", () => {
        let body = document.querySelector('body');
        body.style.backgroundColor = 'green';
    });

    document.getElementById("yellow").addEventListener("click", () => {
        let body = document.querySelector('body');
        body.style.backgroundColor = 'yellow';
    });

    document.getElementById("blue").addEventListener("click", () => {
        let body = document.querySelector('body');
        body.style.backgroundColor = 'blue';
    });
    // your code here
})();
