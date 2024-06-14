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
    let dateActuelle = new Date();
    let heures = dateActuelle.getHours();
    let minutes = dateActuelle.getMinutes();
    let heureActuelle = `${heures}:${minutes}`;

    console.log("Heure actuelle :", heureActuelle);

    let changeMoi = document.getElementById("target");

if(heureActuelle >= "17:30"){
    changeMoi.textContent="Bonsoir";
} else {
    changeMoi.textContent="Bonjour";
}
})();
