// Define your Book class here:

class Book {
    constructor(title,author,copyrightDate,ISBN,numOfPages,numOfTimesCheckedOut,discardStatus){
this.title = title;
this.author = author;
this.copyrightDate = copyrightDate;
this.ISBN = ISBN;
this.numOfPages = numOfPages;
this.numOfTimesCheckedOut = numOfTimesCheckedOut;
this.discardStatus = discardStatus;
    }
    newCheckouts(checkouts = 1) {
        this.numOfTimesCheckedOut += checkouts
    }
}
// Define your Manual and Novel classes here:
class Manuel extends Book{
    constructor(title,author,copyrightDate,ISBN,numOfPages,numOfTimesCheckedOut,discardStatus){
        super(title,author,copyrightDate,ISBN,numOfPages,numOfTimesCheckedOut,discardStatus)


    }
    discard(year)
    {
        if (year - this.copyrightDate > 5 )
        {
            this.discardStatus = "Yes"
        }
    }
}
class Novel extends Book{
    constructor(title,author,copyrightDate,ISBN,numOfPages,numOfTimesCheckedOut,discardStatus){
        super(title,author,copyrightDate,ISBN,numOfPages,numOfTimesCheckedOut,discardStatus)
    }
    discard()
    {  
        if (this.numOfTimesCheckedOut > 100)
        {
            this.discardStatus = "Yes"
        }
    }
}

// Declare the objects for exercises 2 and 3 here:
let prideAndPredudice = new Novel("Pride and Prejudice","Jane Austen",1813,'1111111111111',432,32,"No")
let ShipManuel = new Manuel("Top Secret Shuttle Building Manual","Redacted",2013,'0000000000000',1147,1,"no")

// Code exercises 4 & 5 here:
ShipManuel.discard(2024)
prideAndPredudice.newCheckouts(5)
console.log(ShipManuel)
console.log(prideAndPredudice)