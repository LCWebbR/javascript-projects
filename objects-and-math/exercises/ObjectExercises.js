let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID:1,
   move: function (){return Math.round(Math.random()*10)}
};

let salamander = {
name: "Lacey",
species: "Axolotl Salamander",
mass: 0.1,
age: 5,
astronautID:2,
move: function (){return Math.round(Math.random()*10)}
};

let superChimpTwo = {
name: "Brad",
species: "Chimpanzee",
mass: 11,
age: 6,
astronautID:3,
move: function (){return Math.round(Math.random()*10)}
};

let doggy = {
name: "LEEEEEEEROY JEEEEEENKIIIINS",
species: "Chimpanzee",
mass: 14,
age: 5,
astronautID:4,
move: function (){return Math.round(Math.random()*10)}
};

let tardigrade = {
name: "Almina",
species: "Tardigrade",
mass: 0.0000000001,
age: 1,
astronautID:5,
move: function (){return Math.round(Math.random()*10)} 
};   




// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.
crew = [superChimpOne, superChimpTwo, doggy, tardigrade, salamander];
// Print out the relevant information about each animal.

crewReports = function (animal){

console.log(`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`)

}




crewReports(superChimpOne)




// Start an animal race!
let fitnessTest = function (arr){
  let results = [],steps,turns;
  for (let i = 0; i < arr.length; i++){
steps = 0;
turns = 0;

 while (steps < 20){
   
   steps += crew[i].move();
   turns ++;
   
  } 
  results.push(`${crew[i].name} took ${turns} turns to take 20 steps`)
}
 

  return results;
}

console.log(fitnessTest(crew))