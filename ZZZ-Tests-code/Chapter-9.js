// CHAPTER 9: REPEATING WITH LOOPS

// ITERATION

for (let i = 0; i < 51; i++) {
    console.log(i);
 }

 //iteration is repeated exacution of statments 

// Don’t Repeat Yourself, or DRY.

// FOR LOOPS

// first comes the loop declaration and initialization. let i = 0
//then come the loop condition i < 51 the loop continues until this condition is met or the boolean is false 
// finally comes the loop update expression i++ this is done at the end of the loop and dictates what happens to the data inside of the loop
// every section is separated by semi colons do not forget
for (let i = 0; i > -51 ; i--) {
    console.log(i);

 }


 // OR STATMENTS ARE VERY DANGEROUS IN LOOPS


// {} must be used the loop will do ever thing in the brackets for each loop
for (let i = 0; i > -51 ; i--) {
    console.log(i);
    console.log("the number has changed by one")
 }

 //ITERATING OVER COLLECTIONS

 let names = "LaunchCode";

for (let i = 0; i < names.length; i++) {
   console.log(names[i]);
}

// it takes the value of i until it reaches one less than the length of names and logs each character one by one 

let languages = ["JS", "Java", "C#", "Python"];

for (let i = 0; i < languages.length; i++) {
   console.log(languages[i]);
}

//same for arrays 


for (let i = 3; i < 10; i ++ ) {
    console.log(i);
 }

 // loop initalization can be initialized to any value

 for (let i = 0; i < 42; i++) {
    console.log("LaunchCode");
 }

 // prints launch code 42 times 

 // dont make infinite loops 

 let phrase = "Chili Cook-off";

for (let i = 0; i < phrase.length - 1; i = i + 3) {
   console.log(phrase[i]);
}

//THE ACCUMULATOR PATTERN
//trying to find the value of integers n = 6
let n = 6;
let total = 0;

for (let i = 1; i <= n; i++) {
   total += i;
}

console.log(total);
// reversing a string with a loop

let str = "blue";
let reversed = "";

for (let i = 0; i < str.length; i++) {
   reversed = str[i] + reversed;
}

console.log(reversed);

/// because str[i] is first it adds it to the string the the begining but in reverse order

let stri = "blue";
let reverseds = "";

for (let i = 0; i < stri.length; i++) {
   reverseds = reverseds + stri[i];
}

console.log(reverseds);

// it seems that i was correct

let numbers = [2, -5, 13, 42];
let totals = 0;

for (let i = 0; i < numbers.length; i++) {
   totals += numbers[i];
}
console.log(totals)

// loops can summarize an array

// WHILE LOOPS

for (let i = 0; i < 51; i++) {
    console.log(i);
 }

 let i = 0;

while (i < 51) {
   console.log(i);
   i++;
}

//these loops do the same thing but you dont need to declare the variable



const input = require('readline-sync');

let num = input.question('Please enter a positive number:');
num = Number(num);

while (num <= 0) {
   num = input.question('Invalid input. Please enter a positive number:');
   num = Number(num);
}
// using a while loop to verify that a postive number has been selected


//control c will stop the program hopefully 


//TERMINATING A LOOP WITH BREAK
for (let i = 0; i < 42; i++) {
   
   // rest of loop body

   if (i > 10) {
      break;
   }

}
// breaks will stop the program even before the program has reached the termination? condition point 

let numbers2 = [1,2,42,44,54,55,14,44,];
let searchVal = 42;
let i2 = 0;

while (i2 < numbers2.length) {
   if (numbers2[i2] === searchVal) {
      break;
   }
   i2++;
}

if (i2 < numbers2.length) {
   console.log("The value", searchVal, "was located at index", i2);
} else {
   console.log("The value", searchVal, "is not in the array.");
}

//breaks can be used to search for values in arrays

//CHOOSING WHICH LOOP TO USE  for is for set values and whiles is for unknown or changing variables 