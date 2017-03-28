//Back End Logic
function Player(name, score) {
  this.name = name;
  this.score = score;
}

Player.prototype.tally = function() {
  return this.score += numberGenerator;
}

//Random Number Generator
var numberGenerator = Math.floor((Math.random() * 6) + 1);

function randomNumber() {
  return Math.random();

};

//Front End Logic
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

      var playerOne = $("input#player1").val();
      var newPlayerOne = new Player(playerOne, 0);


      var playerTwo = $("input#player2").val();
      var newPlayerTwo = new Player(playerTwo, 0);


      $("button#player1-roll").click(function() {
        $("#player1-rolled-number").text(numberGenerator);
        $("#player1-new-score").text(newPlayerOne.tally());
    });
  });
});
