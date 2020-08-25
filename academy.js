
// Make your changes to store and update game state in this file
const cross = {
    color: "blue"
}
//hello

//first array represents row
//2nd array represents coloum
// i.e //myBoard[0][1] = "cross"; would be top middle
let myBoard = [[null, null, null], [null, null, null], [null, null, null]];
let isCross = true;
let turns = 0;
let crossWins = 0
let noughtWins = 0
let crossWon = false
let noughtWon = false

// Take the row and column number between 0 and 2 
// (inclusive) and update the game state.
function takeTurn(row, column) {
   
    if (myBoard[row][column] === null) {
        turns++;
        console.log("takeTurn was called with row: "+row+", column:"+column);
        if (isCross) {
            isCross = false;
            myBoard[row][column] = "cross";
        } else {
            isCross = true;
            myBoard[row][column] = "nought";
        }
    } else {
        console.log("space occupied")
    }
    console.log("Ai turn returned this number: " + aiTurn(0,2));
}

function aiTurn(min, max) {
  // console.log((Math.random() * (2));
  console.log("Hi from aiTurn");
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playerScore(){

    if (crossWon){
        crossWins++
        crossWon = false
        console.log("Crosses Wins!  Total score " + crossWins)
    } else if (noughtWon) {
        noughtWins++
        noughtsWon = false
        console.log("Noughts Wins!  Total score " + noughtWins)
    }
    
}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    console.log("checkWinner was called");

    if (turns === 9) {
        console.log("It's a draw!");
    }

    //Horizontal win
    let cScore =0;
    let nScore = 0;
    for (let i = 0; i < myBoard.length; i++) {
        for (let j = 0; j < myBoard[i].length; j++) {
            if (myBoard[i][j] === "cross") {
                cScore++;
            } else if (myBoard[i][j] === "nought") {
                nScore++;
            }
        }

        //these checks could be removed into one function 
        if (cScore === 3) {
            crossWins = true;
            //return true;
        } 
        if (nScore === 3) {          
            noughtWon = true
        }
        cScore =0;
        nScore =0;
    }
    //Vertical wins
    cScore = 0
    nScore = 0
    //loops each row
    let curCol = 0;
    for (let j = 0; j < myBoard.length; j++) {
        for (let i = 0; i < myBoard.length; i++) {

            if (myBoard[i][j] === "cross") {
                cScore++;
            } else if (myBoard[i][j] === "nought") {
                nScore++;
            }
        

            if (cScore === 3) {
                crossWon = true
                
            } 
            if (nScore === 3) {
                noughtWon = true
            }
        }
        nScore = 0;
        cScore = 0;
    }

    //Right Diaganol win
    if (myBoard[0][0] === myBoard[1][1] && myBoard[0][0] === myBoard[2][2]) {
        if(myBoard[0][0] === "cross") {
            console.log("crosses Win");
            crossWon = true
        } else if (myBoard[0][0] === "nought") {
            console.log("noughts win");
            noughtWon = true
        }
    } 

    if (myBoard[0][2] === myBoard[1][1] && myBoard[1][1] === myBoard[2][0]) {
        if(myBoard[1][1] === "cross") {
            crossWon = true
        } else if (myBoard[1][1] === "nought") {
            noughtWon = true
        }
    } 
    //playerScore()
    // if (crossWon){
    //     crossWins++
    //     crossWon = false
    //     console.log("Crosses Wins!" + crossWins)
    // } else if (noughtWon) {
    //     noughtWins++
    //     noughtsWon = false
    //     console.log("Noughts Wins!" + noughtWins)
    // }
    return null;
}

// Set the game state back to its original state to play another game.
function resetGame() {
    console.log("resetGame was called");
    myBoard = [[null, null, null], [null, null, null], [null, null, null]]
    turns = 0
    isCross = false
    return myBoard
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
    //console.log(myBoard);
    return myBoard;
}
//console.log(myBoard.length);
//console.log(myBoard[0].length);

getBoard();


//make sure to put tests at the bottom so everything is defined
module = module || {};
module.exports = {
    takeTurn: takeTurn,
    checkWinner: checkWinner,
    resetGame: resetGame,
    getBoard: getBoard,
}