var id = 0;

var Mover = function(speed, direction, startX, img, name){
  this.speed = speed;
  this.direction = direction;
  this.x = startX;
  this.name = name;
  this.img = img;
  this.id = id;
  id++;
  this.$el = $("<img id='" + this.id + "' class='" + this.name + "' src='" +  this.img + "'/>");
};

Mover.prototype.move = function(){
  this.x += this.speed * this.direction;
  if(this.x < 0){
    this.x = document.body.clientWidth;
  }
  else if (this.x > document.body.clientWidth ){
    this.x = 0;
  }
};

Mover.prototype.render = function(){
  //this.el doesn't exist yet
  return this.$el.css({left: this.x});
};
