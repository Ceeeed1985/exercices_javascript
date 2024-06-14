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
    let valid = false;

    while (!valid){
    var prenom = prompt('Bonjour, comment t\' appelles-tu ?');
    var age = prompt('Enchanté '+ prenom + ' ! Quel âge as-tu?');
    var sexe = prompt(age + ' ans ! T\'es plus vieux que moi. Et tu es un garçon ou une fille ?(un garçon/une fille)');
    var ville = prompt('Et où habites-tu ?');
    
    
    valid = confirm('Donc tu t\'appelles '
        + prenom
        +' , tu as '
        + age
        + ' ans, tu es '
        + sexe
        + ' , et tu vis à '
        + ville
        + '. C\'est exact?'
    );
}
})();
