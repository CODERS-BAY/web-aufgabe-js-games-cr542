const screen = document.getElementById("screen");

let userNumber;
let rounds;

function getCeiling() {
    return ceiling.value;
}

function getUserNumber() {
    userNumber = zahl.value;
    if(userNumber >= 0 && userNumber <= getCeiling()) {
        return userNumber;
    } else {
        console.log("[*] Invalid number! Using standard value: 33");
        return 33;
    }
}

function getRounds() {
    rounds = versuche.value;
    if(!rounds > 5) {
        return rounds;
    } else {
        console.log("[*] Rounds over 5");
        console.log("[*] Using standard value: 3");
        return 3;
    }
}

function createRandomNr() {
    let nr = Math.floor(Math.random() * getCeiling())
    console.log("[*] Created random number: "+ nr)
    // screen.innerHTML = "[*] Die generierte Zahl für diese Runde ist: "+ nr;
    compNr.innerText = nr;
    return nr;
}

function play() {
    let anzahlRunden = getRounds();
    let usrNumber = getUserNumber();
    console.log("[*] Users choice: " + userNumber);
    // screen.innerHTML = "Test"

    let currentRound = 0;
    do {

        if(usrNumber == createRandomNr()) {
            console.log("[+] Success! User input equals the random value.");
            screen.innerHTML = "[+] Gratuliere! Du hast gewonnen!";
            break;
        } else {
            console.log("[-] No success! Continue trying.");
            screen.innerHTML = "[-] Du hast leider verloren. Nächstes Mal wirds klappen!";
        }
        currentRound = currentRound + 1;
    } while(currentRound < anzahlRunden);

    console.log("[*] Script ended.");


}