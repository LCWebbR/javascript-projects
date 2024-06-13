// Declare and assign the variables below
let shuttleName = "determination"
let shuttleSpeed = 17500;
let dMars = 225000000
let dMoon = 384400
let mPK = 0.621


// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof shuttleName)
console.log(typeof shuttleSpeed);
console.log(typeof dMars);
console.log(typeof dMoon);
console.log(typeof mPK);



// Calculate a space mission below

let mTM = (dMars * mPK)
let hTM = (mTM / shuttleSpeed)
let thirtySecondsToMars = (hTM / 24)


// Print the results of the space mission calculations below
console.log (shuttleName + " will take " + thirtySecondsToMars + " days to reach mars")

// Calculate a trip to the moon below
let mTMoon =( dMoon * mPK)
let dTMoon = (mTMoon / shuttleSpeed)
let TTM = (dTMoon / 24)

// Print the results of the trip to the moon below
console.log (shuttleName + " will take " + TTM + " days to reach the moon")