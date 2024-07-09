// Code your crewMass function here:
function crewMass(arr){
  let crewMasses = 0;
for ( const element of arr ){
    crewMasses += element.mass
}
    return crewMasses = Math.round(crewMasses*10)/10;
}
//

function crewSpecies(arr){
  let speciesOfCrew = [];
  for (const element of arr ){
      speciesOfCrew.push(element.species);
  }
  return speciesOfCrew;
}

// Code your fuelRequired function here:
function fuelRequired (crewArr,supplyMass = 75000){
let fuelPerMass = 9.5;
let totalmass = 0;
let extraFuel = 0;


for (const element of crewSpecies(crewArr)){

  if (element === 'dog' || element ===  "cat" ){
      extraFuel += 200;
  }
  else {
    extraFuel += 100;
  }
}

//717856.1 no extra
//718456.1 extra 200 short

totalmass = crewMass(crewArr) + supplyMass
requiredFuel = (totalmass * fuelPerMass) + extraFuel;
 requiredFuel = Math.ceil(requiredFuel);
 return console.log(`The mission has a launch mass of ${totalmass} kg and requires ${requiredFuel} kg of fuel.`)
} 

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

 console.log (crew)
 console.log(crewMass(crew))
fuelRequired(crew)

 