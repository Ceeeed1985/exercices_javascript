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
    
    let operateur1;
    let operateur2;

    let addition = document.getElementById("addition");
    let soustraction = document.getElementById("substraction");
    let multiplication = document.getElementById("multiplication");
    let division = document.getElementById("division");

    addition.addEventListener('click', () => {
        operateur1 = parseFloat(document.getElementById("op-one").value);
        operateur2 = parseFloat(document.getElementById("op-two").value);
        let somme = operateur1 + operateur2;
        alert('Le résultat est de ' + somme);
        
    })
    soustraction.addEventListener('click', () => {
        operateur1 = parseFloat(document.getElementById("op-one").value);
        operateur2 = parseFloat(document.getElementById("op-two").value);
        let difference = operateur1 - operateur2;
        alert('Le résultat est de ' + difference);
        
    })
    multiplication.addEventListener('click', () => {
        operateur1 = parseFloat(document.getElementById("op-one").value);
        operateur2 = parseFloat(document.getElementById("op-two").value);
        let produit = operateur1 * operateur2;
        alert('Le résultat est de ' + produit);
        
    })
    division.addEventListener('click', () => {
        operateur1 = parseFloat(document.getElementById("op-one").value);
        operateur2 = parseFloat(document.getElementById("op-two").value);
        let quotient = operateur1 / operateur2;
        alert('Le résultat est de ' + quotient);
        
    })


})();
