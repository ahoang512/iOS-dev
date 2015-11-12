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
    ctx.fillRect(0, this.game.DIM_Y - 100, this.game.DIM_X, 100);
  };

})(this);
