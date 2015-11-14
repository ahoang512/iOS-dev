(function (root) {
  if (typeof Tanks === "undefined") {
    root.Tanks = {};
  }

  var GameView = Tanks.GameView = function (game, canvas) {
    this.game = game;
    this.canvas = canvas;
    this.canvas.width = game.DIM_X;
    this.canvas.height = game.DIM_Y;
    this.setupMap();
    this.timeId = null;
  }

  GameView.prototype.setupMap = function () {
    var ctx = this.canvas.getContext("2d");
    ctx.fillStyle = "#DDDDDD";
    var leftX = 0;
    var rightX = this.game.DIM_X/2 + 50;
    var Y = this.game.DIM_Y - this.game.floorHeight;
    var width = this.game.DIM_X/2 - 50;
    var height = this.game.floorHeight;
    ctx.fillRect(leftX,Y ,width , height);
    ctx.fillRect(rightX,Y ,width , height);

    var tank1 = new Tanks.Tank(0);
    var tank2 = new Tanks.Tank(1);
    tank1.draw(ctx,150,282.5);
//    ctx.translate(-150,-282.5);
    tank2.draw(ctx,650,282.5);
  };

  //get this function into tank.js
  //and try to associate it with Tank.Tanks
  GameView.prototype.start = function () {
    var gameView = this;
    this.timerId = setInterval(
      function () {
        //gameView.game.step();
        gameView.game.draw(gameView.ctx);
      }, 1000/32
    );
  };

  GameView.prototype.stop = function () {
    clearInterval(this.timerId);
  };
})(this);
