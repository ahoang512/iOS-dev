(function(root) {
  if (typeof Tanks === 'undefined') {
    root.Tanks = {};
  }

  var Game = Tanks.Game = function (width, height) {
    this.DIM_X = width;
    this.DIM_Y = height;
    this.floorHeight = 100;
  };

  Game.prototype.draw = function (ctx) {
    ctx.translate(150,282.5);
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


})(this);
