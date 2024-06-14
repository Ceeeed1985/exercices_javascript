/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
 
    let nombres = document.getElementById("numbers").value;
    let tableauNombres = nombres.split (",");
    let nombresFloat = tableauNombres.map(number => parseFloat(number));
    let nombresClasses = nombresFloat.sort((a, b) => a - b);
    document.getElementById("run").addEventListener("click", () => {
    
        alert(nombresClasses);
 
    });
})();
