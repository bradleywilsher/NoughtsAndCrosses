
const { takeTurn, checkWinner, resetGame, getBoard } = require('./academy')
const each = require("jest-each").default;

test("Take a cross move", () => {

    //Arrange
    takeTurn(1,1);


    //Act
    expected_output = [[null, null, null], [null, "cross", null], [null, null, null]];

    //Assert
    expect(getBoard()).toStrictEqual(expected_output);

})

test("Take a double move", () => {

    //Arrange
    takeTurn(1,1);
    takeTurn(1,2);

    //Act
    expected_output = [[null, null, null], [null, "cross", "nought"], [null, null, null]];

    //Assert
    expect(getBoard()).toStrictEqual(expected_output);
})


test("check win", () => {

    //Cross
    takeTurn(0,0);
    //Nought
    takeTurn(1,1);
     //Cross
    takeTurn(0,1);
    //Nought
    takeTurn(1,2);
     


   
    expected_output = true;

    //Winning move is (0,2)
    expect(checkWinner()).toStrictEqual(true);

    
    



})