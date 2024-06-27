const { question } = require("readline-sync");


Character = "#"

let chosencharacter

 maybeCharacterQuestion = question("Would you like to you a special character? Yes/No  :")

while (maybeCharacterQuestion.toLowerCase()  != "yes" && maybeCharacterQuestion.toLowerCase() != "no")
{
    console.log("")
    maybeCharacterQuestion = question(`${maybeCharacterQuestion} is not valid. Would you like to you a special character? Yes/No only`)
} 

 if (maybeCharacterQuestion.toLowerCase() == "yes")
{
    chosencharacter = question("Please select a character:")
    while (chosencharacter.length != 1 )
    {
   chosencharacter = question("Please select only 1 character:")
    } 
    if (chosencharacter.length = 1)
        {
        Character = chosencharacter
        }
}



function makeLine(size) 


{
   let totalLine =""
  
      
  for (let i = 0; i < size; i++)
       
     
        {
            
         
         totalLine += Character
        }

        return totalLine;
}


console.log(makeLine(4) + "\n")

// function makeSquare(size){
//     let square = "";  
//     for (let i = 0; i < size; i++) { 
//      square += (makeLine(size) + "\n");    
//     }
//     return square;
// }

console.log(makeSquare(5))


function makeRectangle(width,height,) 
{
let rectangle = ""

for (let i = 0; i < height; i++)
    {
        rectangle += makeLine(width) + "\n"
    }
return rectangle;

}
console.log(makeRectangle(5,2))


function makeSquare(size){
    let square = "";  
    
    square = makeRectangle(size, size)
    return square;
}
console.log(makeSquare(5))

function makeDownwardStairs(height)
{
let steps = ""
for (let i = 0; i < height; i++)
{
steps+= makeLine(i+1)+ "\n"
}
return steps
}
console.log(makeDownwardStairs(5)) 

function makeSpaceLine(numSpaces, numChars) {
    let spacesTotal = ""
    
    for (let i = 0; i < numSpaces; i++)
        {
            spacesTotal += " "
        }
        spaceLine = spacesTotal + makeLine(numChars) + spacesTotal;
        return spaceLine;
}


console.log(makeSpaceLine(3, 5));


function makeIsoscelesTriangle(height){
let triangle = "";
 for (let i = 0 ; i < height; i++)
{

triangle += (makeSpaceLine( height - i ,i*2+1)) + "\n"
}
return triangle;
}
console.log(makeIsoscelesTriangle(5));

function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}

function makeDiamond(height)
{
let diamond = ""

diamond = makeIsoscelesTriangle(height).trimEnd() + reverse(makeIsoscelesTriangle(height)).trimEnd();

return diamond;
}

console.log(makeDiamond(5));


