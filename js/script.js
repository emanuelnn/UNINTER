/**/
function changeBackgroundColor() {
    const currentHour = new Date().getHours();
    const particlesDiv = document.getElementById('particles-js');
    const body = document.body;

    if (currentHour >= 7 && currentHour <= 18) {
        particlesDiv.style.backgroundColor = "#b61924";  // Entre 7h e 18h (alterar cor do background para "dia")
        body.style.backgroundColor = "#b61924";
    } else {
        particlesDiv.style.backgroundColor = "#080707";  // Entre 18h e 7h (alterar cor do background para "noite")
        body.style.backgroundColor = "#080707";
    }
}
