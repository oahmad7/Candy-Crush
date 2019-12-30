function createTable(){

  $("#gameBoard").empty
  var candyID = "";
  var letter = "";
  var number = 0;

    for(var i = 0; i < 8; i++){
      var rowTable = document.createElement("tr")
      letter = String.fromCharCode(i + 97)

      for(var j = 0; j < 8; j++){
        var columnTable = document.createElement("td")
        number = String(j + 1);
        candyID = (letter + number);
        $(columnTable).html(candyID);
        $(rowTable).append(columnTable);
        /*rowTable.appendChild(columnTable.innerHTML(candyID));*/
      }

      document.getElementById("gameBoard").appendChild(rowTable);
    }

}

function isMoveValid(){

  document.getElementById("up").disabled = true;
  document.getElementById("up").style.backgroundColor = "lightgray";
  document.getElementById("up").style.color = "black";
  document.getElementById("left").disabled = true;
  document.getElementById("left").style.backgroundColor = "lightgray";
  document.getElementById("left").style.color = "black";
  document.getElementById("right").disabled = true;
  document.getElementById("right").style.backgroundColor = "lightgray";
  document.getElementById("right").style.color = "black";
  document.getElementById("down").disabled = true;
  document.getElementById("down").style.backgroundColor = "lightgray";
  document.getElementById("down").style.color = "black";

  var crushes = rules.getCandyCrushes();
  if(crushes != 0){
    document.getElementById("crushonce").disabled = false;
    document.getElementById("crushonce").style.backgroundColor = "green";
    document.getElementById("crushonce").style.color = "white";
  }

  var letters = "abcdefgh";
  var nums = "12345678";

  var text = document.getElementById("move").value;
  var firstElem = text.charAt(0);
  var secondElem = text.charAt(1);

  if( (letters.indexOf(firstElem) >= 0 && letters.indexOf(firstElem) <= 7) && (secondElem >= 1 && secondElem <= 8)){
  //convert "d2" to row and a column
    var fromCandy = board.getCandyAt(letters.indexOf(firstElem),nums.indexOf(secondElem));

    if(rules.isMoveTypeValid(fromCandy, "up") ){
      document.getElementById("up").disabled = false;
      document.getElementById("up").style.backgroundColor = "green";
      document.getElementById("up").style.color = "white";
    }

    if(rules.isMoveTypeValid(fromCandy, "left") ){
      document.getElementById("left").disabled = false;
      document.getElementById("left").style.backgroundColor = "green";
      document.getElementById("left").style.color = "white";
    }

    if(rules.isMoveTypeValid(fromCandy, "right") ){
      document.getElementById("right").disabled = false;
      document.getElementById("right").style.backgroundColor = "green";
      document.getElementById("right").style.color = "white";
    }

    if(rules.isMoveTypeValid(fromCandy, "down") ){
      document.getElementById("down").disabled = false;
      document.getElementById("down").style.backgroundColor = "green";
      document.getElementById("down").style.color = "white";
    }

  }
}

function moveUp(){

  var letters = "abcdefgh";
  var nums = "12345678";

  var text = document.getElementById("move").value;
  var firstElem = text.charAt(0);
  var secondElem = text.charAt(1);
  var fromCandy = board.getCandyAt(letters.indexOf(firstElem),nums.indexOf(secondElem));

  var toCandy = board.getCandyInDirection(fromCandy,"up");

  board.flipCandies(toCandy, fromCandy);
  document.getElementById('move').value = "";
  document.getElementById("move").focus();

  isMoveValid();
}

function moveLeft(){

  var letters = "abcdefgh";
  var nums = "12345678";

  var text = document.getElementById("move").value;
  var firstElem = text.charAt(0);
  var secondElem = text.charAt(1);
  var fromCandy = board.getCandyAt(letters.indexOf(firstElem),nums.indexOf(secondElem));

  var toCandy = board.getCandyInDirection(fromCandy,"left");

  board.flipCandies(toCandy, fromCandy);
  document.getElementById('move').value = "";
  document.getElementById("move").focus();

  isMoveValid();
}

function moveRight(){

  var letters = "abcdefgh";
  var nums = "12345678";

  var text = document.getElementById("move").value;
  var firstElem = text.charAt(0);
  var secondElem = text.charAt(1);
  var fromCandy = board.getCandyAt(letters.indexOf(firstElem),nums.indexOf(secondElem));

  var toCandy = board.getCandyInDirection(fromCandy,"right");

  board.flipCandies(toCandy, fromCandy);
  document.getElementById('move').value = "";
  document.getElementById("move").focus();

  isMoveValid();
}

function moveDown(){

  var letters = "abcdefgh";
  var nums = "12345678";

  var text = document.getElementById("move").value;
  var firstElem = text.charAt(0);
  var secondElem = text.charAt(1);
  var fromCandy = board.getCandyAt(letters.indexOf(firstElem),nums.indexOf(secondElem));

  var toCandy = board.getCandyInDirection(fromCandy,"down");

  board.flipCandies(toCandy, fromCandy);
  document.getElementById('move').value = "";
  document.getElementById("move").focus();

  isMoveValid();
}

function crushOnce(){

  var crushes = rules.getCandyCrushes();
  rules.removeCrushes(crushes);

  document.getElementById("up").disabled = true;
  document.getElementById("up").style.backgroundColor = "lightgray";
  document.getElementById("up").style.color = "black";
  document.getElementById("left").disabled = true;
  document.getElementById("left").style.backgroundColor = "lightgray";
  document.getElementById("left").style.color = "black";
  document.getElementById("right").disabled = true;
  document.getElementById("right").style.backgroundColor = "lightgray";
  document.getElementById("right").style.color = "black";
  document.getElementById("down").disabled = true;
  document.getElementById("down").style.backgroundColor = "lightgray";
  document.getElementById("down").style.color = "black";

  document.getElementById("crushonce").disabled = true;
  document.getElementById("crushonce").style.backgroundColor = "lightgray";
  document.getElementById("crushonce").style.color = "black";

  setTimeout(rules.moveCandiesDown(), 500);
  isMoveValid();
}
