// JS-Calculator created by Lucas Stoltman 2021

let output;
let numA;
let numB; ``
let calcButtonPress = 0;

let integarArray = [];
let computeArray = [];

function print() {
    output = '';
    console.log(integarArray);
    console.log(computeArray);
    parse();
    console.log(output);
    document.getElementById("output").innerHTML = output;
}

// parse integarArray into a whole number
function parse() {
    for (let i = 0; i < integarArray.length; i++) {
        output += integarArray[i];
    }
    output = parseInt(output);
}


function wipe() {
    integarArray = [];
    computeArray = [];
    calcButtonPress = 0;
    document.getElementById("output").innerHTML = '';
}

function decimal() {
    integarArray.push('.');
    print();
}
function zero() {
    integarArray.push('0');
    print();
}

function one() {
    integarArray.push('1');
    print();
}

function two() {
    integarArray.push('2');
    print();
}

function three() {
    integarArray.push('3');
    print();
}

function four() {
    integarArray.push('4');
    print();
}

function five() {
    integarArray.push('5');
    print();
}

function six() {
    integarArray.push('6');
    print();
}

function seven() {
    integarArray.push('7');
    print();
}

function eight() {
    integarArray.push('8');
    print();
}

function nine() {
    integarArray.push('9');
    print();
}

function add() {
    calcButtonPress++;
    // wipe the current integer
    integarArray = [];
    computeArray[calcButtonPress] = output;
    console.table(computeArray);
}

function equals() {
    print();
}
// <!-- TODO -->
// <!-- 

// * Create integarArray to hold number input, then store as whole number when function key is pressed

// * 

// * 

// * 

// * 

// * 

// * 

// * 

// * 

// -->