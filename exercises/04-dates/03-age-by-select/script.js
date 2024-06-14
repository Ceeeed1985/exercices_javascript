/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let dateActuelle = new Date();

    document.getElementById("run").addEventListener("click", () => {
        let bday = parseInt(document.getElementById("dob-day").value);
        let bmonth = parseInt(document.getElementById("dob-month").value);
        let byear = parseInt(document.getElementById("dob-year").value);
        let bdate = new Date(byear, bmonth, bday);
        
        let differenceEnMillisec = dateActuelle - bdate;

        let ageEnMillisecondes = new Date(differenceEnMillisec);
        let age = Math.abs(ageEnMillisecondes.getUTCFullYear() - 1970);

        alert("Votre age est de "+ age + " ans !");
    }); 

    

})();
