

var result = undefined;






function rollDie() {

    // Generate a random number:
    var randomNumber = Math.random();

    // Convert this into a number between 1 and 6:
    if (randomNumber > 0 && randomNumber < 0.167) {
        result = 1;
    } else if (randomNumber > 0.167 && randomNumber < 0.334) {
        result = 2;
    } else if (randomNumber > 0.334 && randomNumber < 0.5) {
        result = 3;
    } else if (randomNumber > 0.5 && randomNumber < 0.668) {
        result = 4;
    } else if (randomNumber > 0.668 && randomNumber <0.835) {
        result = 5;
    } else {
        result = 6;
    }
    // makes it display the number 
    var resultBox = document.getElementById("result-box");
   
    resultBox.textContent = result;

    var textbox  = document.getElementById("text-box");

    if (textbox.textContent === "") {
        textbox.textContent = "your result is"
    }

    // giving the dot a variable 
    var dot1 = document.getElementById("die-dot-1");
    var dot3 = document.getElementById("die-dot-3");
    var dot4 = document.getElementById("die-dot-4");
    var dot5 = document.getElementById("die-dot-5");
    var dot6 = document.getElementById("die-dot-6");
    var dot7 = document.getElementById("die-dot-7");    
    var dot9 = document.getElementById("die-dot-9");

    var alldots = document.getElementsByClassName("die-dot")

    // making the dots hidden 
    for (var i = 0; i < alldots.length; i++) {
        alldots[i].style.visibility = "hidden";
    }

    // making the dots visible
    if (result === 1){
        dot5.style.visibility = "visible";
    }

    if (result === 2){
        dot3.style.visibility = "visible";
        dot7.style.visibility = "visible";
    }

    if (result === 3){
        dot5.style.visibility = "visible";
        dot7.style.visibility = "visible";
        dot3.style.visibility = "visible";
    }

    if (result === 4){
        dot1.style.visibility = "visible";
        dot3.style.visibility = "visible";
        dot7.style.visibility = "visible";
        dot9.style.visibility = "visible";
    }

    if (result === 5){
        dot5.style.visibility = "visible";
        dot1.style.visibility = "visible";
        dot3.style.visibility = "visible";
        dot7.style.visibility = "visible";
        dot9.style.visibility = "visible";
    }

    if (result === 6){
        dot6.style.visibility = "visible";
        dot4.style.visibility = "visible";
        dot1.style.visibility = "visible";
        dot3.style.visibility = "visible";
        dot7.style.visibility = "visible";
        dot9.style.visibility = "visible";
    }


}