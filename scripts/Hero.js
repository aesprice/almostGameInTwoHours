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
