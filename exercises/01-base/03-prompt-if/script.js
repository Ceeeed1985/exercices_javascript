/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var prenom = prompt("Quel est ton prénom?");
    var choix = prompt("Voulez-vous du gateau ?(oui/non)");

    if (choix == "oui"){
        alert ('Bravo ' + prenom + '! Excellent choix')
    }
    else {
        alert ('M\'enfin '+ prenom + '! Du gâteau, ça ne se refuse pas !')
    }
})();
