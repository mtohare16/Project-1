
document.addEventListener("click", function(evnt) {
  console.log(evnt.target);
  //reset?



  //get a column
  var eventTarget = evnt.target;
  var classes = eventTarget.classList; //['c7']
  var col = classes[0]

  console.log(col);
  var piece = col[0]

  //place a piece in the column
  //placePiece(col);
  //
});

//if cd[x][i]
  //ig i |= 0
//function placePiece()
//check for nearest spot to the bottom
// col = 1
//loop for each column to figure out where the piece would go
///inside the loop check if space is empty


//var board [?][1] //1 is the column ? is the row number

