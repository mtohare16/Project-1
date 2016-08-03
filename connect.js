

document.addEventListener("click", function(evnt) {
  //console.log(evnt.target.classList);
  var currentPlayer = 1;
  var columnName = evnt.target.classList[0];


  function placeGamePiece(player, myThis) {
        var whichPlayer = 'circlep' + currentPlayer;
        myThis.addClass(whichPlayer);
    }

  function newGame() {

  }

  function determineWinner() {

  }



for (var r = 6; r > 0; r--) {
  var currentPlayer = 1;
  var rowClass = "r" + r;
  //console.log(rowClass);
  var classes = columnName + " " + rowClass;
  //console.log(classes);
  var jclasses = "." + columnName + "." + rowClass;

  //var elem = document.getElementsByClassName(classes)
  //console.log(elem);
  var $elem = $(jclasses);
  console.log($elem.hasClass("empty"));

  if ($elem.hasClass("empty")) {
    $elem.css("background-color", "red");
    $elem.removeClass("empty").addClass("full");
    break;
  }



}


});


