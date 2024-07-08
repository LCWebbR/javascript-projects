/// MORE ON FUNCTIONS  


///RECEIVING FUNCTIONS AS ARGUMENTS



let fileLogger = function(msg) {

    // Put the message in a file
}

let consoleLogger = function(msg) {

    console.log(msg);
}

function logError(msg, loggers) {

    let errorMsg = 'ERROR: ' + msg;

    for (let i = 0; i < loggers.length; i++) {
    loggers[i](errorMsg);
    }
}

logError('Something broke!', [fileLogger, consoleLogger]);


let splitting = function (str) {
    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
  }
  
  console.log(splitting("LaunchCode"));



//   const input = require('readline-sync');
// let userInput = input.question("Please enter a number:");
// let logger = function(errorMsg) {
//   console.log("ERROR: " + errorMsg);
// };
// if (userInput < 0) {
//   logger("Invalid input");
// }

// Fill in the blank in line 7 (then uncomment it) so that it logs an error message if userInput is negative.

let nums = [3.14, 42, 4811];

// TODO: Write a mapping function


// and pass it to .map()
let half = function (n) {
return n / 2;
}

let halved = nums.map(half);

console.log(halved);


let names = ["Chris", "Jim", "Sally", "Blake"];

// TODO: Write a mapping function


// and pass it to .map()

let initials = function(n) {
    return n.slice(0,1);
}

let firstInitials = names.map(initials);

console.log(firstInitials);