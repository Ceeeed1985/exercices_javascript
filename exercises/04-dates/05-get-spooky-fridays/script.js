/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", () => {
        let year = parseInt(document.getElementById("year").value);
        if (isNaN(year)) {
            alert("Veuillez entrer une année valide.");
            return;
        }
    
        const monthNames = [
            "janvier", "février", "mars", "avril", "mai", "juin",
            "juillet", "août", "septembre", "octobre", "novembre", "décembre"
        ];
    
        const dayNames = [
            "dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"
        ];
    
        let months = [];
    
        for (let month = 0; month < 12; month++) {
            let daysInMonth = new Date(year, month + 1, 0).getDate();
            let monthArray = [];
    
            for (let day = 1; day <= daysInMonth; day++) {
                let date = new Date(year, month, day);
                let dayName = dayNames[date.getDay()];
                let monthName = monthNames[month];
                let formattedDate = `${dayName} ${day} ${monthName}`;
                monthArray.push(formattedDate);
            }
    
            months.push(monthArray);
        }
    
        let monthsWithFriday13 = [];
    
        for (let month = 0; month < 12; month++) {
            for (let day = 0; day < months[month].length; day++) {
                let date = new Date(year, month, day + 1);
                if (date.getDate() === 13 && date.getDay() === 5) {
                    monthsWithFriday13.push(monthNames[month]);
                    break; 
                }
            }
        }
    
        if (monthsWithFriday13.length > 0) {
            alert(`En ${year}, les mois qui contiennent un vendredi 13 sont les mois de ${monthsWithFriday13.join(', ')}`);
        } else {
            alert(`En ${year}, aucun mois ne contient un vendredi 13.`);
        }
    });

})();
