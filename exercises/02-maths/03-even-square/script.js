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
    
let suite = [];
let nombresPairs = [];
let carreNombresPair = [];
let nombreAuCarre;

for (i=1;i<22;i++){
    suite.push(i);
}

for (i=0;i<suite.length;i++){
    if(suite[i] % 2 == 0){
        nombresPairs.push(suite[i]);
    }
};

for (i=0;i<nombresPairs.length;i++){
    nombreAuCarre = nombresPairs[i] * nombresPairs[i];
    carreNombresPair.push(nombreAuCarre);
}


console.log(suite);
console.log(nombresPairs);
console.log(carreNombresPair);


    let run = document.getElementById("run");

    run.addEventListener("click", () => {
        alert(carreNombresPair);

    })

})();
