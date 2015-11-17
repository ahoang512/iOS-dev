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
    this.timer = 20000;
    this.turn = 0; //first teams turn
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
      if (game.timer === 0){
        game.timer = 20000;
        game.turn = game.turn === 0 ? 1 : 0;
        // alert(game.turn)
      }
    }, 10)
  }


})(this);
