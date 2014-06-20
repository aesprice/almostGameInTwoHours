var Game = function(){
  this.patrickImg = "http://static.giantbomb.com/uploads/original/8/82962/2001131-309px_patrick_star.svg.png";
  this.spongeImg = "http://fusepilates.com/wp-content/uploads/2011/04/249px-SpongeBob_SquarePants.svg_.png";
  this.flyingDutchmanImg ="http://img3.wikia.nocookie.net/__cb20101127010313/spongebob/images/8/8a/Flying_Dutchman.svg";
  this.mermaidManImg = "http://img1.wikia.nocookie.net/__cb20120816062639/spongebob/images/c/c2/300px-Mermaid_Man.svg.png";
  this.hero = new Hero(40, 1, 30, this.patrickImg, 'patrick');
  this.movers = [];
};



Game.prototype.update = function(){

  for(var i = 0; i < this.movers.length; i++){
    this.movers[i].move();
  }

  for(var i = 0; i < this.movers.length; i++){
    this.movers[i].render();
  }

  setTimeout(function(){
    this.update();
  }.bind(this), 100);

};

Game.prototype.init = function(){
  this.movers.push(new Mover(50, -1, 600, this.spongeImg, 'sponge'));
  this.movers.push(new Mover(20, -1, 800, this.flyingDutchmanImg, 'dutch'));
  this.movers.push(new Mover(30, -1, 700, this.mermaidManImg, 'merman'));
  for(var i = 0; i < this.movers.length; i++){
    $('.gameboard').append(this.movers[i].render());
  }
  setTimeout(function(){
    this.update();
  }.bind(this), 100);
};