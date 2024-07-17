const whoWon = require("../RPS.js")

describe("unit testing for the Rock Paper Scissors module", function () {

    test("player1 should not be able to use moves besides RPS", function () {
        let output = whoWon("dragon", "rock");
        expect(output).toEqual("an incorrect move was used")
    });
    test("player2 should not be able to use moves besides RPS", function () {
        let output = whoWon("paper", "sock");
        expect(output).toBe("an incorrect move was used")
    });
    test("player2 should win if paper is played and player one plays rock", function () {
        let output = whoWon("rock", "paper");
        expect(output).toBe("Player 2 wins!")
    });
    test("player2 should win if rock is played and player one plays scissors", function () {
        let output = whoWon('scissors', "rock");
        expect(output).toBe("Player 2 wins!")
    });
    test("player2 should win if scissors is played and player one plays paper", function () {
        let output = whoWon("paper", "scissors");
        expect(output).toEqual("Player 2 wins!")
    });
});