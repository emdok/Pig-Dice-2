//Back End Logic
function Player(name, score) {
  this.name = name;
  this.score = score;
}

Player.prototype.tally = function() {
  return this.score += numberGenerator;
}

//Random Number Generator
var numberGenerator = function() { return Math.floor((Math.random() * 6) + 1);
}

//Front End Logic
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

      var playerOne = $("input#player1").val();
      var newPlayerOne = new Player(playerOne, 0);


      var playerTwo = $("input#player2").val();
      var newPlayerTwo = new Player(playerTwo, 0);

      $(".player-names").hide();
      $(".player1-turn").show();

      $("button#player1-roll").click(function() {
        $("#player1-rolled-number").text(numberGenerator);
        $("#player1-new-score").text(newPlayerOne.tally());
        $(".player1-good-roll").show();
    });
  });
});

//
Player.prototype.tally = function () { return this.turn + numberGenerator; }
