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

var choix = prompt('Est-ce que tu veux du gateau ?\n\n - o : oui\n - n : non');
if (choix === "o"){
    alert('Bravo');
} else {
    alert("Pfffffff t'es nul !");
};

})();
