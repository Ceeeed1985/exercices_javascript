/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

let red;
let green;
let blue;
let color;
let body = document.querySelector("body");
const run = document.getElementById("run");

function genererRed(){
    red = Math.floor(Math.random() * 255);
}

function genererGreen(){
    green = Math.floor(Math.random() * 255);
}

function genererBlue(){
    blue = Math.floor(Math.random() * 255);
}

function genererCouleur(){
    genererRed();
    genererGreen();
    genererBlue();
    color = "rgb("+red+","+green+","+blue+")";
}

run.addEventListener("click", () => {
    genererCouleur();
    body.style.background = color;
})

    // your code here
})();
