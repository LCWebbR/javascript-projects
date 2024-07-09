// Code your selectRandomEntry function here:
let idNumbers = [291, 414, 503, 599, 796, 890];
console.log(idNumbers.length)
let selectRandomEntry = function (arr){
return arr[Math.floor(Math.random() * arr.length)] 
}
 function buildId(arr){
  let winningNumbers = [];
  let numbersTemp; 
  while (winningNumbers.length < 3)
  {
    numbersTemp = selectRandomEntry(arr);
    if (winningNumbers.includes(numbersTemp)){}

    else {
      winningNumbers.push(numbersTemp)
    }
  }
  return winningNumbers;
 }
// Code your buildCrewArray function here:

// function buildCrewArray(lottoResults, candidatePool){
//   let crewArray = [];
// for (i = 0; i < candidatePool.length; i++){
//   if (lottoResults.includes(candidatePool[i].idNumbers)){
// crewArray.push(candidatePool[i])
//   }
// }
// return crewArray;
// }



// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
console.log(animals[1].astronautID)

// function buildCrewArray(lottoResults, candidatePool){
//   let crewArray = [];
// for (let i = 0; i < 6; i++){
//   if (lottoResults.includes(candidatePool[i].astronautID)){
// crewArray.push(candidatePool[i])
//   }
// }
// return crewArray;
// }
console.log(animals.length)
function buildCrewArray(crewIDs,candidatePool){
  let crewArray = [];
  console.log(candidatePool.length)
  for(let i = 0; i < crewIDs.length; i++){
    for(let j = 0; j < candidatePool.length; j++){
    if((candidatePool[j]).astronautID === crewIDs[i]){
      crewArray.push(candidatePool[j])
      }
    }
  }
  return crewArray;
}
console.log(buildId(idNumbers))

console.log(buildCrewArray(buildId(idNumbers),animals));

let crewArray = buildCrewArray(buildId(idNumbers), animals);
console.log(`${crewArray[0].name}, ${crewArray[1].name}, and ${crewArray[2].name} are going to space!`);