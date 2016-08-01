
document.addEventListener("click", function(evnt) {
  //console.log(evnt.target.classList);

  var columnName = evnt.target.classList[0];
  var rowName = 'r6';
  var piecePlace = columnName + " " + rowName;
  var temp = document.getElementsByClassName(piecePlace)[0];

  console.log(temp);
  var red = temp.style.backgroundColor = 'red';
  //create a function for above
  //create data structure
/*function(checkForPlacement) {
  var check = checkForPlacement.target.classList[0];
  console.log(check);
}*/

  /*checkforplacement (column number)
//
  var selectedElem
  var col = selectedElem[0]
  var row = selectedElem[0]
  var filled = selectedElem[2]*/


//var red = document.getElementsByClassName(evnt.target.className);
//console.log(red);
//var black = document.getElementById(evnt.target.id).style.backgroundColor = 'black';
//var eventTarget = evnt.className;


//var elements = document.getElementByTagName('*');

  //this.//get the function to work with buttons
  //var piece = col[0]

  //place a piece in the column
  //placePiece(col);
  //
});

/*create two players for the game,
player 1 will be red circles, and player 2 will be black circles*/
/*var game = {
  table: null,
  $statusMessage: null,
  currentPlayer = 'X',

  togglePlayer: function() {
    this.currentPlayer =
    (this.currentPlayer === 'X' ? 'O' : 'X');
  },
}
showWinner: function() {
  this.$statusMessage.text('Player ' + this.currentPlayer + ' has won!');
},
showDraw: function() {
  this.$statusMessage.text('Draw');
},*/






/*var count=1;
function setColor(btn, color) {
  var property = document.getElementById('c1')(button);
  if (count === 0) {
    property.style.backgroundColor = "#FF0000"
  }
}*/
//if cd[x][i]
  //ig i |= 0
//function placePiece()
//check for nearest spot to the bottom
// col = 1
//loop for each column to figure out where the piece would go
///inside the loop check if space is empty


//var board [?][1] //1 is the column ? is the row number

