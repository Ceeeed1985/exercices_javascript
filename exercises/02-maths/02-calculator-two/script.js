/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        let nombre1= parseFloat(document.getElementById("op-one").value);
        let nombre2= parseFloat(document.getElementById("op-two").value);
        // perform the operation
        switch(operation){
            case "addition":
                let somme = nombre1 + nombre2;
                alert("Le résultat attendu est "+ somme);
                break;
            case "substraction":
                let difference = nombre1 - nombre2;
                alert("Le résultat attendu est "+ difference);
                break;
            case "multiplication":
                let produit = nombre1 * nombre2;
                alert("Le résultat attendu est "+ produit);
                break;
            case "division":
                let quotient = nombre1 / nombre2;
                alert("Le résultat attendu est "+ quotient);
                break;
            }
            
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
