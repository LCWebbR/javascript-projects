//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let startingfuel 
let astronauts 
let altitude

const input = require("readline-sync");
 startingfuel = input.question(`how much fuel is in the tank? `);



/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

 while    ( startingfuel > 30000  || startingfuel < 5000)
{
console.log(`Warning fuel level must be between 5000 and 30000`);

 startingfuel = input.question(`how much fuel is in the tank? `);
}


//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  

 
astronauts = input.question(`how many astronauts? `)

while ( astronauts > 7  || astronauts < 1)
  {
  console.log(`Warning astronauts must be between 1 and 7`);
  
   astronauts = input.question(`how much fuel is in the tank? `);
  }

console.log(astronauts)
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
let currentfuel = startingfuel;
alt = 0;
while ((startingfuel < 30000 && startingfuel > 5000)&&(astronauts <= 7  && astronauts >= 1))
{
currentfuel -= 100 ;
alt += 50;
console.log(`${currentfuel} liters of fuel remaining. current altitude is ${alt} kilometers`)


  if (currentfuel <= 0){
  break }
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

 if (alt >= 2000){
console.log(`The shuttle gained an altitude of ${alt} km orbit achieved :)`)
 
 }
 else {
  console.log(`The shuttle gained an altitude of ${alt} km. Failed to reach orbit :(`)
 }