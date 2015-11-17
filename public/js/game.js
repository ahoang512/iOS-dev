(function(root) {
  if (typeof Tanks === 'undefined') {
    root.Tanks = {};
  }

  var Game = Tanks.Game = function (width, height) {
    this.DIM_X = width;
    this.DIM_Y = height;
    this.floorHeight = 100;
    this.tanks = [ new Tanks.Tank(0), new Tanks.Tank(1)];
    this.gravity = -9.8;
    this.timer = 10000;
    this.turn = 0; //first teams turn
  };

  Game.prototype.allObjects = function () {
    return this.tanks;
  };

  Game.prototype.changeTurns = function () {
    //shift off the current turn's tank
    var oldTank = this.tanks.shift();
    //push onto the end.
    this.tanks.push(oldTank);
  };

  Game.prototype.currentTank = function () {
    return this.tanks[0];
  };

  Game.prototype.step = function () {
    this.tanks.forEach(function (object) {
      object.move([0,0]);
    });
  }

  Game.prototype.start = function () {
    var game = this;
    setInterval(function(){
      game.timer -= 10;
      if (game.timer <= 0){
        game.changeTurns();
        game.timer = 10000;
        game.turn = game.turn === 0 ? 1 : 0;
        // alert(game.turn)
      }
    }, 10)
  }


})(this);
