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
   
    document.getElementById("run").addEventListener("click", () => {
        let nombre = document.getElementById("number").value;
       
        function factorial(n) {
            if (n < 0) {
                return undefined; // La factorielle n'est pas définie pour les nombres négatifs
            }
            let result = 1;
            for (let i = 1; i <= n; i++) {
                result *= i;
            }
            return result;
        }
        
        alert(factorial(nombre));
    



        });
})();
