let compValueOne;
let compValueTwo;
let compValueThree;

let trys = 0;
let remaining = 12;
let win = false;
let running = false;

gameStatus.innerText = getGameStatus();
currentRound.innerText = "Aktuelle Runde: ";
remainingRounds.innerText = "Verbleibende Versuche: "+remaining;
playerCurrentValue.innerText = "Dein Versuch:";
winYesNo.innerText = "Hier wird dein Status angezeigt.";

function getGameStatus() {
    if(running) { return "Spiel wurde gestartet." }
    else { return "Spiel wurde beendet/nicht gestartet." }
}

function createCompValue() {
    let tmp = Math.random() * (999 - 111) + 111;
    tmp = Math.floor(tmp);
    return tmp;
}

function getUserInput() {
    let tmp = valueUsr.value;
    return tmp;
}

function isEqual(playerVal, compVal) {
    if(playerVal == compVal) {
        return true;
    } else {
        return false;
    }
}

function start() {
    computer = createCompValue();
    console.log("Computer value is: "+computer);
    gameStatus.innerText = "Spiel wurde geladen. Du kannst jetzt beginnen!";
    running = true;
}

function check() {
    player = getUserInput();
    console.log("Player value is now: "+player);
    gameStatus.innerText = getGameStatus();
    currentRound.innerText = "Aktuelle Runde: "+trys;
    remainingRounds.innerText = "Verbleibende Versuche: "+remaining
    playerCurrentValue.innerText = "Dein Versuch: "+player;
    if(trys < 12 && win != true) {
        if(isEqual(player, computer)) {
            win = true;
            console.log("Player won => value is: "+value);
            winYesNo.innerText = "Gratuliere, du hast gewonnen!";
            running = false;
            return;
        } else {
            console.log("Round "+trys+" was not successful. Continuing competition.");
            winYesNo.innerText = "Runde nicht erfolgreich.";
        }
    } else {
        winYesNo.innerText = "Du hast leider verloren.";
        running = false;
        return;
    }
    trys += 1;
    remaining -= 1;

}

function reset() {
    trys = 0;
    win = false;
    remaining = 12;
    running = false;

    winYesNo.innerText = "Neues Spiel wurde geladen. Drücke auf -Spiel starten- um zu beginnen!";
}
