$(document).ready(function() {
    //declare variables
    var gameBoard = [];
    var board = document.getElementById("game-table");
    var currentRow;
    var currentPlayer = 1;
    $('#game-table');
    // newGame();
    // function to create game board
    // 7 columns and 6 rows
    function buildGameBoard() {
        gameBoard = [];
        for (var r = 0; r < 6; r++) {
            gameBoard[r] = [];
            for (var c = 0; c < 7; c++) {
                gameBoard[r].push(0)
            }
        }
        console.log(gameBoard)
        console.log(gameBoard[0][4])
        //for loop bottom up
    }
    //defines the player and puts their color circle on the board, called below
    function placeGamePiece(player, myThis) {
        var whichPlayer = 'circlep' + currentPlayer;
        myThis.addClass(whichPlayer);
    }
    //place piece at the bottom of the column
    //determine current player
    //determine a win
    function determineVictory() {
    }
    //run new game
    function newGame() {
        buildGameBoard();
        // placeGamePiece();
    }
    $('.col').click(function() {
        console.log(this.classList[1]);
        console.log(this.classList[2]);
        console.log(currentPlayer);
        var columnPlacement = this.classList[1];
        var rowPlacement = this.classList[2];
        //Check for present pieces
        //call the fuction to place game pieces on board
       placeGamePiece(currentPlayer, $(this));
        // for (var r=6; r >=0; i--;) {
        // }
        // function dropGamePiece(){
        //  for (var r=6; r >=0; r--) {
        //       if (columnPlacement === 0){
        //         console.log(columnPlacement);
        //         console.log(rowPlacement);
        //       }
        //look into for each loop
        // //    if (
        //  }
        //  }
        // if in row, column 6 value == 0, place circle
        //Check for win logic
        //if not a win then switch players
        if (currentPlayer === 1) {
            currentPlayer = 2;
        } else {
            currentPlayer = 1;
        }
    });
});
