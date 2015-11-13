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

  };

  GameView.prototype.setupMap = function () {
    var ctx = this.canvas.getContext("2d");
    ctx.fillStyle = "#008080";
    var leftX = 0;
    var rightX = this.game.DIM_X/2 + 50;
    var Y = this.game.DIM_Y - this.game.floorHeight;
    var width = this.game.DIM_X/2 - 50;
    var height = this.game.floorHeight;
    ctx.fillRect(leftX,Y ,width , height);
    ctx.fillRect(rightX,Y ,width , height);
  };

})(this);
