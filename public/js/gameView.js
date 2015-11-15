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
    this.bindKeyHandlers();
    this.timeId = null;
  }

  GameView.prototype.setupMap = function () {
    var ctx = this.canvas.getContext("2d");
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    _drawFloor(ctx);
    this.game.tanks.forEach(function(tank){
      tank.draw(ctx);
    });
  };

  GameView.KEYS = {
    // "w": [ 0, -1],
    "a": [-1,  0],
    // "s": [ 0,  1],
    "d": [ 1,  0],
  };

  var _drawFloor = function (ctx) {
    ctx.fillStyle = "#DDDDDD";
    var leftX = 0;
    var rightX = this.game.DIM_X/2 + 50;
    var Y = this.game.DIM_Y - this.game.floorHeight;
    var width = this.game.DIM_X/2 - 50;
    var height = this.game.floorHeight;
    ctx.fillRect(leftX,Y ,width , height);
    ctx.fillRect(rightX,Y ,width , height);
  };

  GameView.prototype.bindKeyHandlers = function () {
    //handlers for wasd, arrow keys, spacebar and enter
    var that = this;
    Object.keys(GameView.KEYS).forEach(function(button){
      key(button, function(){
        that.game.tanks[0].move(GameView.KEYS[button]);
      });
    })

    // key('s', function(){
    //   if ('n' !== snake.dir){
    //     snake.turn('s');
    //   }
    // });
    // key('d', function(){
    //   if ('w' !== snake.dir){
    //     snake.turn('e');
    //   }
    // });
    // key('w', function(){
    //   if ('s' !== snake.dir) {
    //     snake.turn('n');
    //   }
    // });
    // key('a', function(){
    //   if ('e' !== snake.dir){
    //     snake.turn('w');
    //   }
    // });
    // key('down', function(){
    //   if ('n' !== snake.dir){
    //     snake.turn('s');
    //   }
    // });
    // key('right', function(){
    //   if ('w' !== snake.dir){
    //     snake.turn('e');
    //   }
    // });
    // key('up', function(){
    //   if ('s' !== snake.dir) {
    //     snake.turn('n');
    //   }
    // });
    // key('left', function(){
    //   if ('e' !== snake.dir){
    //     snake.turn('w');
    //   }
    // });
    // key('space', function() {
    //   this.snake.pause();
    // });
    //
    // key('enter', function() {
    //   if (this.snake.gameOver){
    //     this.board.reset();
    //     this.snake.reset();
    //     this.start();
    //   }
    //
    // });
  };

  GameView.prototype.start = function () {
    var gameView = this;

    this.timerId = setInterval(
      function () {
        gameView.game.step();
        gameView.setupMap();
       }, 1000/32
    );
  };

  GameView.prototype.stop = function () {
    clearInterval(this.timerId);
  };
})(this);
