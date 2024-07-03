/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
 
let prenom;
let age;
let ville;

alert('Bonjour, je vais te poser quelques questions, tu es prêt ?')

function poserQuestion(){
    prenom = prompt("Comment t'appelles-tu ?");
    age = prompt("Quel âge as-tu ?");
    ville = prompt("Et où habitez-vous?");
    };

poserQuestion();

var confirm = prompt("Si j'ai bien compris, tu t'appelles "+ prenom+ ", tu as "+ age + " ans et tu vis à "+ ville + ". C'est correct ?");

if ((confirm === "oui") || (confirm === "Oui")){
    alert("merci d'avoir répondu");
    }else{
    alert("On va recommencer alors !")
    poserQuestion();
}

})();
