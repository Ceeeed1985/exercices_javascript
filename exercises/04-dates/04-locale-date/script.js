/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

let dateToday = new Date();
let year = dateToday.getFullYear();
let month = dateToday.getMonth();
let day = dateToday.getDay();
let date = dateToday.getDate();
let hour = dateToday.getHours();
let minute = dateToday.getMinutes();
let message;

const tableauJours = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
const tableauMois = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"]


day = tableauJours[day];
month = tableauMois[month];


if (hour<12){
    message = "Bonne journée !";
} else if (hour<15){
    message = "Bon après-midi !";
} else if (hour<17){
    message = "Bonne fin d'après-midi !";
} else if (hour<22){
    message = "Bonne soirée !"
} else {
    message = "Bonne nuit !";
}



let dateComplete ="Nous sommes le "
    + day
    + " "
    + date
    + " "
    + month
    + " "
    + year
    + ", et il est "
    + hour
    + "h"
    + minute
    + " ! \n\n"
    + message



let changeMoi = document.getElementById("target");
changeMoi.innerText = dateComplete;

})();
