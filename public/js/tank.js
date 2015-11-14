(function(root) {
  if (typeof Tanks === 'undefined') {
    root.Tanks = {};
  }

  var Tank = Tanks.Tank = function (team) {
    // 0 red, 1 blue
    var details = {};
    this.details = details;
    if (team === 0){
      details.pos = [150,282.5];
      details.color = "#FF0000";
    }else{
      details.pos = [650,282.5];
      details.color = "#0000FF";
    }
  }

  Tanks.Util.inherits(Tank, Tanks.MovingObject);

  Tank.prototype.draw = function(ctx) {
    var x = this.details.pos[0];
    var y = this.details.pos[1];
    ctx.translate(x,y);
    ctx.fillStyle = this.details.color;

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

    ctx.translate(-x,-y);
  };

})(this);
