/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

let nombreAleatoire;

let run = document.getElementById("run");
    run.addEventListener("click", () => {

    let tableau = [];


    function getRandomNumbers (){
        nombreAleatoire = Math.floor(Math.random() * 100);
        return nombreAleatoire;
        }

    for(i=0;i<10;i++){
        tableau.push(getRandomNumbers());
        }

    tableau.sort(function(a,b){return a-b});

    for (i=1;i<=10;i++){
        document.getElementById(`n-${i}`).innerText = tableau[i-1];
        }

  
    let min = document.getElementById("min");
        min.innerText = tableau[0];
    let max = document.getElementById("max");
        max.innerText = tableau[9];
    let sum = document.getElementById("sum");
        let total = 0;
        for (i=0;i<tableau.length;i++){
            total += tableau[i];
            }
        sum.innerHTML = total;
    let average = document.getElementById("average");
            average.innerText = total/tableau.length;



})



})();
