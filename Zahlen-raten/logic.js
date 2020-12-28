const screen = document.getElementById("screen");

let userNumber = 0;
let rounds = 0;

function getCeiling() {
    return ceiling.value;
}

function getUserNumber() {
    userNumber = zahl.value;
    if(userNumber >= 0 && userNumber <= getCeiling()) {
        return userNumber;
    } else {
        console.log("Ungültige Zahl eingegeben. Verwende Standardzahl 33...");
        return 33;
    }
}

function getRounds() {
    rounds = versuche.value;
    if(!rounds > 5) {
        return rounds;
    } else {
        console.log("Runden > 5");
        console.log("Verwende Standardzahl 3");
    }
}

function play() {
    // add functionality here
}