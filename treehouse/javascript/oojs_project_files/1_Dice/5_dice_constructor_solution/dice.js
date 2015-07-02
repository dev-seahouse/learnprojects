function diceRoll() {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }

Dice.prototype.roll = function (){
   var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
}

function Dice(sides) {
  this.sides = sides;
  this.roll = diceRoll;
}

var dice = new Dice(6);