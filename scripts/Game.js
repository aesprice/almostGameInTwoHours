var Game = function(){
  this.patrickImg = "http://static.giantbomb.com/uploads/original/8/82962/2001131-309px_patrick_star.svg.png";
  this.spongeImg = "http://fusepilates.com/wp-content/uploads/2011/04/249px-SpongeBob_SquarePants.svg_.png";
  this.flyingDutchmanImg ="http://img3.wikia.nocookie.net/__cb20101127010313/spongebob/images/8/8a/Flying_Dutchman.svg";
  this.mermaidManImg = "http://img1.wikia.nocookie.net/__cb20120816062639/spongebob/images/c/c2/300px-Mermaid_Man.svg.png";
  this.hero = new Hero(40, 1, 30, this.patrickImg, 'patrick');
  this.movers = [];
  this.controls = {};
  this.left = false;
  this.right = false;
};



Game.prototype.update = function(){

  for(var i = 0; i < this.movers.length; i++){
    this.movers[i].move();
  }

  for(var i = 0; i < this.movers.length; i++){
    this.movers[i].render();
  }
  var foo = this.left;
  var bar = this.right;
  console.log(foo);
  this.hero.move(foo,bar);
  this.hero.render();
  setTimeout(function(){
    this.update();
  }.bind(this), 100);

};

Game.prototype.init = function(){
  document.addEventListener('keydown', function(event) {
      if(event.keyCode == 37) {
        this.left = true;
        // console.log('GOING LEFT');
        // console.log(this.left)

      }
      else if(event.keyCode == 39) {
        this.right = true;

      }

  }.bind(this));
  document.addEventListener('keyup', function(event) {
      if(event.keyCode == 37) {
          this.left = false;
          console.log(this.left)
      }
      else if(event.keyCode == 39) {
        this.right = false;

      }

  }.bind(this));
  document.addEventListener('keyup', function(event) {

     if (event.keyCode == 32){
      this.controls.space = false;
    }
  });
  this.movers.push(new Mover(50, -1, 600, this.spongeImg, 'sponge'));
  this.movers.push(new Mover(20, -1, 800, this.flyingDutchmanImg, 'dutch'));
  this.movers.push(new Mover(30, -1, 700, this.mermaidManImg, 'merman'));
  for(var i = 0; i < this.movers.length; i++){
    $('.gameboard').append(this.movers[i].render());
  }
  $('.gameboard').append(this.hero.render());

  setTimeout(function(){
    this.update();
  }.bind(this), 100);
};
