const { question } = require("readline-sync");

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
cabinet = food.split(",").sort()
cabinet2 = equipment.split(",").sort()
cabinet3 = pets.split(",").sort()
cabinet4 = sleepAids.split(",").sort()
console.log(cabinet)
console.log(cabinet2)
console.log(cabinet3)
console.log(cabinet4)
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [cabinet,cabinet2,cabinet3,cabinet4]

console.log(cargoHold)
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

info = question("Please select between the 4 cabinets")
console.log(cargoHold[info-1])



//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.


//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”



if ( info >0 && info < 5 )
    {   
        item = question("Please select item in the selected cabinet")
        if(cargoHold[info-1].includes(item)) 
        {
                console.log(`cabinet ${info} does contain ${item}`)
        }
    
        else 
        {
            console.log(`cabinet ${info} does not contain ${item}`)
        }
    }
else
{
console.log("please select a number between 1 and 4")
    info = question("Please select between the 4 cabinets")
    if ( info >0 && info < 5 )
        {
            item = question("Please select item in the selected cabinet")
            if(cargoHold[info-1].includes(item)) 
            {
                    console.log(`cabinet ${info} does contain ${item}`)
            }
           
            else 
            {
                console.log(`cabinet ${info} does not contain ${item}`)
            }
        }
}
