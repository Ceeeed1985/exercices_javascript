/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {

        let nombres = Array.from({ length: 21 }, (_, i) => i + 1);
        let nombresPairs = nombres.filter(nombre => nombre % 2 === 0);
    
        let carresString = ""; // Initialiser une chaîne pour stocker les carrés
    
    nombresPairs.forEach(nombre => {
        let nombreCarre = nombre * nombre;
        carresString += nombreCarre + "\n"; // Ajouter le carré à la chaîne avec un saut de ligne
    });
    
    alert(carresString); // Afficher tous les carrés dans une seule alerte

    });
})();
