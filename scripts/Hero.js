var Hero = function(speed, direction, startX, img, name){
  Mover.call(this, speed, direction, startX, img, name);
}

Hero.prototype = Object.create(Mover.prototype);
Hero.prototype.constructor = Hero;
Hero.prototype.changeDirection = function(){
  direction = direction * -1;
};
Hero.prototype.die = function(){

};

Hero.prototype.move = function(left, right){
  if(left && !right){
    this.direction = -1;
  }else if(!left && right){
    this.direction = 1;
  }else{
    this.direction = 0;
  }
  this.x += this.speed * this.direction;
  if(this.x < 0){
    this.x = document.body.clientWidth ;
  }
  else if (this.x > document.body.clientWidth ){
    this.x = 0;
  }};
