/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
let day;
let month;
let year;
let date = new Date();
let age;

const run = document.getElementById("run");
run.addEventListener('click', () => {
    day = document.querySelector("#dob-day").value;
    month = document.querySelector("#dob-month").value;
    year = document.querySelector("#dob-year").value;
    const birthDate = new Date(year,month,day);
    age = (date - birthDate)/365/24/60/60/1000;
    age = parseInt(age);
    alert("Tu as donc "+age+" ans !");
})

})();
