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

    let operande1;
    let operande2;

    const operateurAdd = document.getElementById("addition");
    const operateurSub = document.getElementById("substraction");
    const operateurMultiply = document.getElementById("multiplication");
    const operateurDivide = document.getElementById("division");

    function add (number1, number2){
        return number1 + number2;
    }
    function sub (number1, number2){
        return number1 - number2;
    }
    function multiply (number1, number2){
        return number1 * number2;
    }
    function divide (number1, number2){
        return number1 / number2;
    }
    function calculate (operator){
        operande1 = parseFloat(document.getElementById("op-one").value);
        operande2 = parseFloat(document.getElementById("op-two").value);

        let result;
        switch(operator) {
            case "+":
                result = add(operande1,operande2);
                console.log(result);
                break;
            case "-":
                result = sub(operande1,operande2);
                console.log(result);
                break;
            case "*":
                result = multiply(operande1, operande2);
                console.log(result);
                break;
            case "/":
                result = divide(operande1, operande2);
                console.log(result);
                break;
            default:
            console.error("Invalid operator");
            return;
        }
    }
    operateurAdd.addEventListener('click', () => calculate("+"));
    operateurSub.addEventListener('click', () => calculate("-"));
    operateurMultiply.addEventListener('click', () => calculate("*"));
    operateurDivide.addEventListener('click', () => calculate("/"));


        // perform the operation
   
})();
