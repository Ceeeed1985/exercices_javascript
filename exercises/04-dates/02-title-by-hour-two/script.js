/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

const date = new Date();
let heure = date.getHours();
let minute = date.getMinutes();
let message;

if ((heure < 17)||((heure==17)&&(minute<30))){
    message = "Bonjour";
} else {
    message = "Bonsoir";
}

let target = document.getElementById("target");
target.innerText = message;

})();
