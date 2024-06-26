const input = require('readline-sync');
let info = input.question("how many letters between 1 and 8 should we move? ");
let str = "LaunchCode";
let nstr = ""
//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

nstr = str.slice(3,10)+ str.slice(0,3);






//Use a template literal to print the original and modified string in a descriptive phrase.
//console.log(`${str} is now ${nstr}`)
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let nstr2 = ""
console.log(nstr2)

if (info >= 1 && info <= 8)
{
nstr2 = str.slice(Number(info),10)+ str.slice(0,Number(info));

//console.log(info)
console.log(`${str} is now ${nstr2}!`)
}
else {
    console.log("please enter a number between 1 and 8" )
    console.log (nstr)
    console.log (`${info} is not a valid number and a default of 3 was chosen`)
}

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

