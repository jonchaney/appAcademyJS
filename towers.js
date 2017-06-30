const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game{
  constructor(){
    let ivar = [[3,2,1],[],[]];
  }

  promptMove(){
    console.log("renderTowers");
    reader.question(`What tower would you like to take from?`,
      function(answer){
        let fromTower = answer;
      });
      
    reader.close();

    reader.question(`What tower would you like to move to?`,
      function(answer2){
        let toTower = answer2;
      });
    reader.close();


  }

  renderTowers(){

  }
  run(){
    // until game over
    // get move from player
    // make sure valid move
    // move disc on to tower
    //

  }
}


let game = new Game();
game.promptMove(() => console.log());
