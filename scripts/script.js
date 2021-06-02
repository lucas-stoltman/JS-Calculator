// JS-Calculator created by Lucas Stoltman 2021

let output;
let numA;
let numB;

let array = [];

function print() {
    console.table(array);
    parse();
    document.getElementById("output").innerHTML = array;
}

// parse array into a whole number
function parse() {
    for (let i = 0; i < array.length; i++) {
        output += array[i];
    }
}

function wipe() {
    array = [];
    output = 'test';
    print();
}

function zero() {
    array.push('0');
    print();
}

function one() {
    array.push('1');
    print();
}

function two() {
    array.push('2');
    print();
}

function three() {
    array.push('3');
    print();
}

function four() {
    array.push('4');
    print();
}

function five() {
    array.push('5');
    print();
}

function six() {
    array.push('6');
    print();
}

function seven() {
    array.push('7');
    print();
}

function eight() {
    array.push('8');
    print();
}

function nine() {
    array.push('9');
    print();
}

function add() {
    numA = output;
}
// <!-- TODO -->
// <!-- 

// * Create array to hold number input, then store as whole number when function key is pressed

// * 

// * 

// * 

// * 

// * 

// * 

// * 

// * 

// -->