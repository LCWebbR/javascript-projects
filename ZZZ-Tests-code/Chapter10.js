///CHAPTER 10: FUNCTIONS ARE AT YOUR BECK AND CALL

///INTRODUCTION

//a function is a reuseable piece of code like a var but for code blocks

console.log("Hello, World!");
//is a function

///USING FUNCTIONS

let names = ["Lena", "James", "Julio"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

function printArray(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

printArray(["Lena", "James", "Julio"]);
console.log("---");
printArray(["orange", "apple", "pear"]);



stores = ["walmart","target","wendys","save a lot"]
printArray(stores)

///FUNCTION INPUT AND OUTPUT

function sumToN(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumToN(3));


function countToN(n) {
    let count = 1;
    while (true) {
        if (count > n) {
            return;
        }
        console.log(count);
        count++;
    }
}
countToN(1)



function isEven(n) {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(4));
console.log(isEven(7));

function plusTwo(num) {
    return num + 2;
}

let a = 2;

for (let i=0; i < 4; i++) {
    a = plusTwo(a);
}

console.log(a);
function repeater(str) {
    let repeated = str + str;
    console.log(repeated);
}

repeater('Bob');

// function repeater(str) {
//     let repeated = str + str;
//     console.log(repeated);
// }

// repeater('Bob');


///A GOOD FUNCTION-WRITING PROCESS

///PARAMETERS AND VARIABLES

///NAMING FUNCTIONS

//use camel case itsLikeThis

// use verbs for functions because the function is verbing the thing


//use desciptive names so that you know what they do at a glance

///COMPOSING FUNCTIONS

//FUNCTIONS SHOULD DO ONE THING ONLY K.I.S.S.

///WHY CREATE FUNCTIONS?

// functions make code dry 


