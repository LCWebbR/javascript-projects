//CHAPTER 12: OBJECTS AND THE MATH OBJECT


let tortoiseOne = {
    species: "Galapagos Tortoise",
    name: "Pete",
    weight: 919,
    age: 85,
    diet: ["pumpkins", "lettuce", "cabbage"]
};

console.log(tortoiseOne["name"]);
console.log(tortoiseOne.age);

// this returns data within an object 
console.log(tortoiseOne.weight);

   newWeight = tortoiseOne.weight + 10;

   tortoiseOne["weight"] = newWeight;

   console.log(tortoiseOne["weight"]);

   //neat adjustments can be made "easily" from outside the object

   let tortoiseTwo = {
    species: "Galapagos Tortoise",
    name: "Pete",
    weight: 919
};



tortoiseTwo["age"] = 120;
tortoiseTwo["speed"] = 'Faster than the hare.'

tortoiseTwo.test = "dot notation and bracket notation can both be used to add keys to an object"

console.log(tortoiseTwo);
console.log(tortoiseTwo.age);
console.log(tortoiseTwo.test)



//THE MATH OBJECT

console.log(Math.PI);

Math.PI = 1234;

console.log(Math.PI);


//math cannot be changed by the user
console.log(Math.random(2));
console.log(Math.floor(-3.87))
console.log(Math.round(.00001))

//random array generator 

function randomSelection(arr){
    let index = Math.floor(Math.random()*arr.length);
    return arr[index];
 }

 let happiness = ['Hope','Joy','Peace','Love','Kindness','Puppies','Kittens','Tortoise'];

 for (i=0; i < 8; i++){
    console.log(randomSelection(happiness));
 }

 