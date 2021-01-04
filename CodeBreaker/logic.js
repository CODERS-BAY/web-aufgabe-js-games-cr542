let compValueOne;
let compValueTwo;
let compValueThree;

let trys = 0;

function createCompValue() {
    let tmp = Math.random() * (999 - 111) + 111;
    tmp = Math.floor(tmp);
    return tmp;
}

function getUserInput() {
    let tmp = valueUsr.value;
    console.log("Userinput was read successfully.");
    return tmp;
}

function split(value) {

}

function isEqual(playerVal, compVal) {
    if(playerVal == compVal) {
        return true;
    } else {
        return false;
    }
}

function play() {
    computer = createCompValue();
    player = getUserInput();
        
    console.log("Computer value is: "+computer);
    console.log("Player value is: "+player);

    compValueOne = computer.charAt(0);
    compValueTwo = computer.charAt(1);
    compValueThree = computer.charAt(2);

    // Player must guess the first character of computers value - 12 trys

}
