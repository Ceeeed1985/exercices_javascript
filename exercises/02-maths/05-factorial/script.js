/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
   
let run = document.getElementById("run");


function calculerFactorielle(nombre){
    let factorielle = 1;
    if ((nombre === 1) || (nombre === 0)){
        return 1;
    }
        for (let i=2;i<=nombre;i++){
            factorielle *= i;
    }
    return factorielle;
}

console.log(calculerFactorielle(0));

run.addEventListener("click", () => {
    let number = document.getElementById("number").value;
    console.log(number);
    number = parseFloat(number);
    alert(calculerFactorielle(number));

   
})

})();
