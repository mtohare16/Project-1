

document.addEventListener("click", function(evnt) {
  //console.log(evnt.target.classList);
  //var currentPlayer = red;
  var columnName = evnt.target.classList[0];
  //var rowName = 'r6';
  //var piecePlace = columnName + " " + rowName;
  //var bottom = document.getElementsByClassName(piecePlace)[0];

  //console.log(bottom);
  //var red = bottom.style.backgroundColor = 'red';

  var remove = document.getElementsByClassName("empty").className.replace("empty","full");
  console.log(remove);
  /*if (document.getElementById("btn").className -= "empty" === 0) {
    red;
  } else{

  };*/
  function placeGamePiece(player, myThis) {
        var whichPlayer = 'circlep' + currentPlayer;
        myThis.addClass(whichPlayer);
    }

  function newGame() {

  }

  function determineWinner() {

  }


/*('.empty').click(function() {
        console.log(this.classList[1]);
        console.log(this.classList[2]);
        console.log(currentPlayer);
        var columnPlacement = this.classList[1];
        var rowPlacement = this.classList[2];

       placeGamePiece(currentPlayer, $(this));

        if (currentPlayer === 1) {
            currentPlayer = 2;
        } else {
            currentPlayer = 1;
        }
    });
});*/

//var red = document.getElementsByClassName(evnt.target.className);
//console.log(red);
//var black = document.getElementById(evnt.target.id).style.backgroundColor = 'black';
//var eventTarget = evnt.className;


for (var r = 6; r > 0; r--) {

  var rowClass = "r" + r;
  console.log(rowClass);
  var classes = columnName + " " + rowClass;
  console.log(classes);
  var elem = document.getElementsByClassName(classes)
  console.log(elem);
  var red = document.getElementById(evnt.target.id).style.backgroundColor = 'red';

  if (evnt.target.classList[2] === "empty") {
    //put piece here
    elem.style.backgroundColor = 'red';
    //change appearance

    //update new class or get rid of class
  }
  else {

  }
}

//as column 1 then increment through through rows

});


