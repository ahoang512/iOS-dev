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
  };


//tank is centered at (0,0)
//translates to new center at (x,y)
  GameView.prototype.draw = function(ctx,x,y) {
      ctx.translate(x,y);
      ctx.fillStyle = "#FF0000";

      ctx.beginPath();
      //trunk
      ctx.moveTo(-50,-3);
      ctx.lineTo(-25,-3);
      //roof
      ctx.lineTo(-15,-13);
      ctx.lineTo(-10,-17);
      ctx.lineTo(-7,-18);
      ctx.lineTo(7,-18);
      ctx.lineTo(10,-17);
      ctx.lineTo(15,-13);
      //hood
      ctx.lineTo(25,-3);
      ctx.lineTo(50,-3);
      //front tread
      ctx.lineTo(52.5,-0.5);
      ctx.lineTo(52.5,2);
      ctx.lineTo(50,7)
      //bottom tread
      ctx.lineTo(40.5,17);
      ctx.lineTo(35,18)
      ctx.lineTo(-35,18)
      ctx.lineTo(-40.5,17);
      //back tread
      ctx.lineTo(-50,7);
      ctx.lineTo(-52.5,2);
      ctx.lineTo(-52.5,-0.5);
      ctx.closePath();

      ctx.fill();
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

    //edits v v v
    this.draw(ctx,150,282.5); //tank can be drawn
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
