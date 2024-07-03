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

//récupérer la valeur présente dans la page html
let nombreAClasser = document.getElementById("numbers").value;

//la valeur arrive sous forme d'une chaine de caractère

let nombres = nombreAClasser.split(',');

for(i=0;i<nombres.length;i++){
    let nombre = parseFloat(nombres[i]);
    console.log(nombre);
}

nombres.sort(function(a,b){return a-b});
console.log(nombres);

let run = document.getElementById("run");
run.addEventListener("click", () => {
    alert("Voici les nombres dans le bon ordre : "+ nombres)
})





})();
