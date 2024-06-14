/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("op-one").value;
    document.getElementById("op-two").value;
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", () => {
        let nombre1 = parseFloat(document.getElementById("op-one").value);
        let nombre2 = parseFloat(document.getElementById("op-two").value);
        let somme = nombre1 + nombre2;
        document.getElementById("result").textContent = "La somme est "+ somme;
    });

    document.getElementById("substraction").addEventListener("click", () => {
        let nombre1 = parseFloat(document.getElementById("op-one").value);
        let nombre2 = parseFloat(document.getElementById("op-two").value);
        let difference = nombre1 - nombre2;
        document.getElementById("result").textContent = "La différence est "+ difference;
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        let nombre1 = parseFloat(document.getElementById("op-one").value);
        let nombre2 = parseFloat(document.getElementById("op-two").value);
        let produit = nombre1 * nombre2;
        document.getElementById("result").textContent = "Le produit est "+ produit;
    });

    document.getElementById("division").addEventListener("click", () => {
        let nombre1 = parseFloat(document.getElementById("op-one").value);
        let nombre2 = parseFloat(document.getElementById("op-two").value);
        let quotient = nombre1 / nombre2;
        document.getElementById("result").textContent = "Le quotient est "+ quotient;
    });
})();
