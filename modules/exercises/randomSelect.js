function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
let randomnum = 0;
randomnum = Math.floor(Math.random() * arr.length)

return arr[randomnum];

}

//TODO: Export the randomFromArray function.
module.exports = randomFromArray;