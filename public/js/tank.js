(function(root) {
  if (typeof Tanks === 'undefined') {
    root.Tanks = {};
  }

  var Tank = Tanks.Tank = function (team) {
    // 0 red, 1 blue
    var obj;
    if (team === 0){
      obj.color = "#FF0000";
    }else{
      obj.color = "#0000FF";
    }
  }

})(this);
