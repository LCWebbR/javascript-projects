/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

for (let n = 0; n <= 20;  n++)
  {
    console.log(n)
  }
for (let n = 3; n <= 29;  n += 2)
    {
      console.log(n)
    }
for (let n = 12; n >= -14;  n -= 2)
      {
        console.log(n)
      }
for (let n = 50; n >= 20;  n--)
 {
     {  if (n % 3  == 0)
  console.log(n)}
 }
    

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 

let str = "LaunchCode"
let reversed = ""
let arr = [1, 5, "LC101", "blue", 42]

for (n = 0; n < str.length; n++)
  {reversed = str[n] + reversed
    console.log(reversed)}

for (n = 0; n < arr.length; n++)
  {console.log(arr[n])}


/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

  let firstarray = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104]
  let evens = []
  let odds = []

for (n = 0; n < firstarray.length; n++)
  {
    if (firstarray[n] % 2 == 0){
      evens.push(firstarray[n])

    
    }
     
    else {
      odds.push(firstarray[n])
    }
    
  }
console.log(evens)
console.log(odds)

  


['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans']
['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers']
['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus']