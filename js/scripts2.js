//Back End Logic
function Player(name) {
  this.name = name;
  this.score = 0;
  this.turn = [];
}

// Player.prototype.tally = function() {
//   return this.score += numberGenerator;
// }

//Random Number Generator
Player.prototype.roll = function() { return Math.floor((Math.random() * 6) + 1);
}

//Front End Logic
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

      var playerOne = $("input#player1").val();
      var newPlayerOne = new Player(playerOne);


      var playerTwo = $("input#player2").val();
      var newPlayerTwo = new Player(playerTwo);

      $("button#player1-roll").click(function() {
        var currentNumber = newPlayerOne.roll();
        $("#player1-rolled-number").text(currentNumber);

        if (currentNumber === 1) {
          $(".player1-bad-roll").show();
          newPlayerOne.turn =[];
        }
        else {
          newPlayerOne.turn.push(currentNumber);
        }
        });
        console.log(newPlayerOne);

         $("button#hold-goto-player2").click(function() {
          newPlayerOne.turn.forEach(function(playerOne) {
             newPlayerOne.turn += playerOne;
          });
          console.log(playerOne);
        });

  });
});
