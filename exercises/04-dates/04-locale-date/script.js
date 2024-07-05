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

const tableauJours= [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche"
];

for (i=0; i<tableauJours.length;i++){
    switch (i) {
        case i:
            day = tableauJours[i];
            break;
    }
}

console.log(day);


console.log(tableauJours);



let dateComplete ="Nous sommes le "
    + date
    + " "
    + day
    + " "
    + month
    + " "
    + year

console.log(year);
console.log(dateToday);

let changeMoi = document.getElementById("target");
console.log(changeMoi);
changeMoi.innerText = dateComplete;

})();
