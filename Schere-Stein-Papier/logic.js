const SCISSORS = 0;
const STONE = 1;
const PAPER = 2;

/*
    - Schere: Stein => Stein
    - Schere: Papier => Schere
    - Schere: Schere => UE

    - Stein: Schere => Stein
    - Stein: Stein => UE
    - Stein: Papier => Papier

    - Papier: Schere => Schere
    - Papier: Stein= => Papier
    - Papier: Papier => UE

*/

function getUserChoice() {
    let tmp = document.getElementsByName("choice");

    for(i = 0; i < tmp.length; i++) {
        if(tmp[i].checked) {
            return tmp[i].value;
        }
    }
}

function message(msg) {
    messageWinFail.innerText = msg;
}

function parseChoice(choiceIntVal) {
    if(choiceIntVal == 0) { return "Schere"; } 
    else if(choiceIntVal == 1) { return "Stein"; }
    else { return "Papier"; }
}

function parseBackChoice(choiceString) {
    if(choiceString == "Schere") { return 0; } 
    else if(choiceString == "Stein") { return 1; }
    else { return 2; }
}

function getComputerChoice() {
    return Math.floor(Math.random() * Math.floor(3));
}

function play() {
    let usr = parseBackChoice(getUserChoice());
    let comp = getComputerChoice();

    userChoice.innerText = "Deine Wahl: "+parseChoice(usr);
    console.log("Game started");
    console.log("** 0 = SCHERE | 1 = STEIN | 2 = PAPIER **");
    console.log("User value is: "+parseChoice(usr));
    console.log("** 0 = SCHERE | 1 = STEIN | 2 = PAPIER **");
    console.log("Comp value is: "+parseChoice(comp));


    if(usr == 0 && comp == 0) {
        message("Computer: "+parseChoice(comp)+" | Spieler: "+parseChoice(usr)+" ==> UNENTSCHIEDEN");
    } else if(usr == 0 && comp == 1) {
        message("Computer: "+parseChoice(comp)+" | Spieler: "+parseChoice(usr)+" ==> COMPUTER GEWINNT");
    } else if(usr == 0 && comp == 2) {
        message("Computer: "+parseChoice(comp)+" | Spieler: "+parseChoice(usr)+" ==> SPIELER GEWINNT - GRATULATION");
    } else if(usr == 1 && comp == 0) {
        message("Computer: "+parseChoice(comp)+" | Spieler: "+parseChoice(usr)+" ==> SPIELER GEWINNT - GRATULATION");
    } else if(usr == 1 && comp == 1) {
        message("Computer: "+parseChoice(comp)+" | Spieler: "+parseChoice(usr)+" ==> UNENTSCHIEDEN");
    } else if(usr == 1 && comp == 2) {
        message("Computer: "+parseChoice(comp)+" | Spieler: "+parseChoice(usr)+" ==> COMPUTER GEWINNT");
    } else if(usr == 2 && comp == 0) {
        message("Computer: "+parseChoice(comp)+" | Spieler: "+parseChoice(usr)+" ==> COMPUTER GEWINNT");
    } else if(usr == 2 && comp == 1) {
        message("Computer: "+parseChoice(comp)+" | Spieler: "+parseChoice(usr)+" ==> SPIELER GEWINNT - GRATULATION");
    } else {
        message("Computer: "+parseChoice(comp)+" | Spieler: "+parseChoice(usr)+" ==> UNENTSCHIEDEN");
    }

}