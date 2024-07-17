

const checkFive = require('../checkFive.js');

describe("checkFive", function(){

   test("Numbers less than 5 should say less than 5", function(){
      let output = checkFive(2);
      expect(output).toEqual("2 is less than 5.") 
   });

   test("numbers equal to 5 should say equal to 5", function(){
    let output = checkFive(5);
      expect(output).toEqual("5 is equal to 5.") 
   });

   test("numbers greater than 5 should say greater than 5", function(){
    let output = checkFive(9);
      expect(output).toEqual("9 is greater than 5.") 
   });


});
