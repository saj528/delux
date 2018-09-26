// create a new scene
let gameScene = new Phaser.Scene('Game');

// some parameters for our scene
gameScene.init = function() {
  this.birdSpeed = 5
  this.birdSpeed1 = 2
  this.birdSpeed2 = 2
};

// load asset files for our game
gameScene.preload = function() {
  this.load.image('background', 'assets/sky.png');
  this.load.image('sun', 'assets/sun.png');
  this.load.image('clouds', 'assets/clouds.png');
  this.load.image('mountains', 'assets/mountainspink.png');
  this.load.image('grass', 'assets/grass.png');
  this.load.image('plants', 'assets/plantlife.png');
  this.load.image('plantsback', 'assets/plantlifeback.png');
  this.load.image('billboardmemories', 'assets/billboardmemories.png');
  this.load.image('billboardcar', 'assets/billboardcar.png');
  this.load.image('billboardmovies', 'assets/billboardmovies.png');
  this.load.image('billboardrandom', 'assets/billboardrandom.png');
  this.load.image('billboardvampire', 'assets/billboardvampire.png');
  this.load.image('skeleton', 'assets/skeleton.png');
  this.load.image('flag', 'assets/slytherin.png');
  this.load.image('harryBird', 'assets/harryBird.png');
  this.load.image('sign1', 'assets/sign1.png');
  this.load.image('sign2', 'assets/sign2.png');
  this.load.image('sign3', 'assets/sign3.png');
  this.load.image('sign4', 'assets/sign4.png');
  this.load.image('sign5', 'assets/sign5.png');
  this.load.image('microtable', 'assets/microtable.png');
  this.load.image('stormtrooper', 'assets/stormtrooper.png');
  this.load.image('palmTree', 'assets/palmTree.png');
  this.load.image('couch', 'assets/couch.png');
  this.load.image('guy', 'assets/guy.png');
  this.load.image('guy2', 'assets/guy2.png');
  this.load.image('guy3', 'assets/guy3.png');
  this.load.image('guy4', 'assets/guy4.png');
  this.load.image('sentra', 'assets/sentra.png');
  this.load.image('xterra', 'assets/xterra.png');
  this.load.image('bubble', 'assets/bubble.png');
  this.load.image('button', 'assets/button.png');
  this.load.image('ground', 'assets/groundLong.png');
  this.load.image('groundSmall', 'assets/platform_small.png');
  this.load.image('groundTall', 'assets/platform_tall.png');
  this.load.spritesheet('player',
      'assets/playerlady.png',
      { frameWidth: 53,
        frameHeight: 60,
        margin: 0,
        spacing: 10,
      }
  );
  this.load.spritesheet('bird',
      'assets/birdfixed.png',
      { frameWidth: 357,
        frameHeight: 270,
      }
  );
  this.load.spritesheet('seagull',
      'assets/seagull.png',
      { frameWidth: 133,
        frameHeight: 133,
      }
  );
  this.load.spritesheet('dino',
      'assets/dino.png',
      { frameWidth: 250,
        frameHeight: 200,
      }
  );
  this.load.spritesheet('pikachu',
      'assets/pikachu.png',
      { frameWidth: 40,
        frameHeight: 39,
      }
  );
};

gameScene.create = function() {
  this.background = this.add.tileSprite(400, 300, 800, 600, 'background');
  this.background.scrollFactorX = 0;
  this.sun = this.add.sprite(600, 150, 'sun').setScale(.4);
  this.sun.scrollFactorX = 0;
  this.harryBird = this.add.sprite(3000, 250, 'harryBird').setScale(.09)
  this.clouds = this.add.tileSprite(400, 300, 800, 600, 'clouds');
  this.clouds.scrollFactorX = 0;
  this.mountains = this.add.tileSprite(400, 300, 800, 600, 'mountains');
  this.mountains.scrollFactorX = 0;
  this.plantsBack = this.add.tileSprite(400, 279, 800, 600, 'plantsback');
  this.plantsBack.scrollFactorX = 0;
  this.grass = this.add.tileSprite(400, 295, 800, 600, 'grass')
  this.grass.scrollFactorX = 0;
  this.sign = this.add.sprite(1800, 100, 'sign1').setScale(.3);
  this.sign = this.add.sprite(2900, 100, 'sign2').setScale(.3);
  this.sign = this.add.sprite(3900, 100, 'sign3').setScale(.3);
  this.sign = this.add.sprite(4800, 100, 'sign4').setScale(.3);
  this.sign = this.add.sprite(6000, 100, 'sign5').setScale(.3);
  this.add
  .sprite(1200, 350, 'billboardmemories')
  .setDisplaySize(960, 960)
  .setScale(.6)
  
  this.add
  .sprite(2350, 350, 'billboardcar')
  .setDisplaySize(960, 960)
  .setScale(.6)

  this.add
  .sprite(3350, 350, 'billboardmovies')
  .setDisplaySize(960, 960)
  .setScale(.6)

  this.add
  .sprite(4350, 350, 'billboardrandom')
  .setDisplaySize(960, 960)
  .setScale(.6)

  this.add
  .sprite(5350, 350, 'billboardvampire')
  .setDisplaySize(960, 960)
  .setScale(.6)
  this.button = this.physics.add.sprite(1800,575, 'button').setScale(3)
  this.button.body.allowGravity = false;
  this.button.body.immovable = true;

  this.button2 = this.physics.add.sprite(2900,575, 'button').setScale(3)
  this.button2.body.allowGravity = false;
  this.button2.body.immovable = true;

  this.button3 = this.physics.add.sprite(3900,575, 'button').setScale(3)
  this.button3.body.allowGravity = false;
  this.button3.body.immovable = true;

  this.button4 = this.physics.add.sprite(4800,575, 'button').setScale(3)
  this.button4.body.allowGravity = false;
  this.button4.body.immovable = true;

  this.button5 = this.physics.add.sprite(6000,575, 'button').setScale(3)
  this.button5.body.allowGravity = false;
  this.button5.body.immovable = true;
  
  this.zone = new Phaser.Geom.Rectangle(this.button.x - 25, this.button.y -5, 50, 50);
  this.zone2 = new Phaser.Geom.Rectangle(this.button2.x - 25, this.button2.y -5, 50, 50);
  this.zone3 = new Phaser.Geom.Rectangle(this.button3.x - 25, this.button3.y -5, 50, 50);
  this.zone4 = new Phaser.Geom.Rectangle(this.button4.x - 25, this.button4.y -5, 50, 50);
  this.zone5 = new Phaser.Geom.Rectangle(this.button5.x - 25, this.button5.y -5, 50, 50);

  this.sentra = this.add.sprite(2700, 530, 'sentra').setScale(.5);
  this.xterra = this.physics.add.sprite(-180, 519, 'xterra').setScale(.3);
  this.xterra.body.allowGravity = false;
  this.xterra.body.immovable = true;
  this.microtable = this.add.sprite(1700,545,'microtable').setScale(.1)
  this.skeleton = this.add.sprite(1650,545,'skeleton').setScale(.1)
  this.stormtrooper = this.add.sprite(3500,550,'stormtrooper').setScale(.05)
  this.flag = this.add.sprite(3700,520,'flag').setScale(.2)
  this.palmTree = this.add.sprite(4700,520,'palmTree').setScale(.5)
  this.palmTree.flipX = true
  this.add.sprite(6100,545,'couch').setScale(.09)
  this.add.sprite(5000,520,'palmTree').setScale(.5)
  this.guy = this.add.sprite(1900,545,'guy')
  this.guy2 = this.add.sprite(3000,545,'guy2')
  this.guy3 = this.add.sprite(4000,545,'guy3').setScale(.1)
  this.guy4 = this.add.sprite(4900,545,'guy4').setScale(.3)
  this.guy.flipX = true
  //this.plants = this.add.tileSprite(400, 279, 800, 600, 'plants');
  //this.plants.scrollFactorX = 0;

  this.add.text(65, 100, "Memories: \n (based on a true story)", {
    font: "24px Arial",
    fill: "white",
    align: "center",
}).setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
  
  //this.platforms = this.add.tileSprite(200, 570, 4000, 300, 'ground').setScale(.3);
  //this.platforms = this.physics.add.staticGroup();
  this.platforms = this.physics.add.staticGroup();
  this.platforms.create(9600, 590, 'ground').setScale(2).refreshBody();
  this.platforms.create(-3000,500,'groundSmall').setScale(3).refreshBody();
  this.platforms.create(-2500,425,'groundSmall').setScale(3).refreshBody();
  this.platforms.create(-2000,350,'groundSmall').setScale(2).refreshBody();
  this.platforms.create(-1750,600,'groundTall').setScale(2).refreshBody();
  this.platforms.create(-1550,500,'groundTall').setScale(2).refreshBody();
  this.platforms.create(-1350,700,'groundTall').setScale(2).refreshBody();
  this.platforms.create(-1000,350,'groundSmall').setScale(3).refreshBody();
  this.platforms.create(-420,400,'groundSmall').setScale(2).refreshBody();

  this.player = this.physics.add.sprite(-3000, 300, 'player', 2);

  this.bird = this.add.sprite(350, 300, 'bird', 0).setScale(.09);
  this.seagull = this.add.sprite(4500, 300, 'seagull', 0).setScale(.5);
  this.dino = this.add.sprite(1570, 533, 'dino', 0).setScale(.7);
  this.pikachu = this.add.sprite(3200,563,'pikachu')
  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('player', { start: 0, end: 1 }),
    frameRate: 10,
    repeat: -1
  });

  this.anims.create({
    key: 'turn',
    frames: [ { key: 'player', frame: 0 } ],
    frameRate: 20
  });

  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('player', { start: 0, end: 1 }),
    frameRate: 10,
    repeat: -1
  });

  this.anims.create({
    key: 'flying',
    frames: this.anims.generateFrameNumbers('bird', { start: 0, end: 2 }),
    frameRate: 10,
    repeat: -1
  });
  this.bird.anims.play('flying');

  this.anims.create({
    key: 'flyingSeagull',
    frames: this.anims.generateFrameNumbers('seagull', { start: 0, end: 8 }),
    frameRate: 10,
    repeat: -1
  });
  this.seagull.anims.play('flyingSeagull');

  this.anims.create({
    key: 'dinoBreath',
    frames: this.anims.generateFrameNumbers('dino', { start: 0, end: 2 }),
    frameRate: 2,
    repeat: -1,
    yoyo: true
  });
  this.anims.create({
    key: 'pikaStand',
    frames: this.anims.generateFrameNumbers('pikachu', { start: 0, end: 6 }),
    frameRate: 5,
    repeat: -1,
    yoyo: true
  });
  this.pikachu.anims.play('pikaStand')
  this.dino.anims.play('dinoBreath');
  
  this.speech = 
  [
    this.bubble = this.add.sprite(1925, 460, 'bubble').setScale(.2).setVisible(false),
    this.add.text(1870, 430, "Can I walk you \n to your car?", {
    font: "16px Arial",
    fill: "black",
    align: "center",
  }).setShadow(3, 3, 'rgba(0,0,0,0.5)', 5).setVisible(false),
  this.bubble1 = this.add.sprite(1770, 460, 'bubble',).setScale(.3).setVisible(false),
  this.add.text(1690, 420, "Have my number while \n you're at it!", {
    font: "16px Arial",
    fill: "purple",
    align: "center",
  }).setShadow(3, 3, 'rgba(0,0,0,0.5)', 5).setVisible(false),
  this.bubble2 = this.add.sprite(3025, 460, 'bubble').setScale(.2).setVisible(false),
    this.add.text(2980, 430, "Wanna be my \n girlfriend?", {
    font: "16px Arial",
    fill: "black",
    align: "center",
  }).setShadow(3, 3, 'rgba(0,0,0,0.5)', 5).setVisible(false),
  this.bubble3 = this.add.sprite(2870, 460, 'bubble',).setScale(.2).setVisible(false),
  this.add.text(2820, 430, "Kiss me while \n you're at it!", {
    font: "16px Arial",
    fill: "purple",
    align: "center",
  }).setShadow(3, 3, 'rgba(0,0,0,0.5)', 5).setVisible(false),
  this.bubble4 = this.add.sprite(4025, 460, 'bubble').setScale(.2).setVisible(false),
    this.add.text(3990, 440, "I know 😉", {
    font: "16px Arial",
    fill: "black",
    align: "center",
  }).setShadow(3, 3, 'rgba(0,0,0,0.5)', 5).setVisible(false),
  this.bubble5 = this.add.sprite(3870, 460, 'bubble',).setScale(.15).setVisible(false),
  this.add.text(3850, 430, "I love \n you!", {
    font: "16px Arial",
    fill: "purple",
    align: "center",
  }).setShadow(3, 3, 'rgba(0,0,0,0.5)', 5).setVisible(false),
  this.bubble6 = this.add.sprite(4945, 450, 'bubble').setScale(.15).setVisible(false),
    this.add.text(4930, 440, "😎", {
    font: "16px Arial",
    fill: "black",
    align: "center",
  }).setShadow(3, 3, 'rgba(0,0,0,0.5)', 5).setVisible(false),
  this.bubble7 = this.add.sprite(4820, 460, 'bubble',).setScale(.2).setVisible(false),
  this.add.text(4780, 430, "Where da \n clams?!", {
    font: "16px Arial",
    fill: "purple",
    align: "center",
  }).setShadow(3, 3, 'rgba(0,0,0,0.5)', 5).setVisible(false),
  this.bubble7 = this.add.sprite(5820, 460, 'bubble',).setScale(.2).setVisible(false),
  this.add.text(5780, 430, "Marry \n me?", {
    font: "16px Arial",
    fill: "black",
    align: "center",
  }).setShadow(3, 3, 'rgba(0,0,0,0.5)', 5).setVisible(false),
  ]
  this.bubble1.flipX = true
  this.bubble3.flipX = true
  this.bubble5.flipX = true

  this.input.keyboard.on('keydown_E', (event) => {
    if (Phaser.Geom.Rectangle.Overlaps(this.player.getBounds(), this.zone ) || (Phaser.Geom.Rectangle.Overlaps(this.player.getBounds(), this.zone2 )) || (Phaser.Geom.Rectangle.Overlaps(this.player.getBounds(), this.zone3 ))|| (Phaser.Geom.Rectangle.Overlaps(this.player.getBounds(), this.zone4 ))|| (Phaser.Geom.Rectangle.Overlaps(this.player.getBounds(), this.zone5 ))) {
      this.speech.forEach(function(element){
        element.setVisible(true)
      });
      this.timedEventStats = this.time.addEvent({
        delay: 4000,
        callback: function(){
          this.speech.forEach(function(element){
            element.setVisible(false)
          });
        },
        callbackScope:this
      })
    }
  });

  this.physics.add.collider(this.player, [this.platforms,this.xterra]);

  this.cursors = this.input.keyboard.createCursorKeys();
};


gameScene.update = function() {

  //bird moving
  
  this.bird.x += this.birdSpeed
  let conditionUp = this.birdSpeed < 0 && this.bird.x <= 350
  let conditionDown = this.birdSpeed > 0 && this.bird.x >= 2000
  
  if(conditionUp || conditionDown){
    if(this.bird.flipX === false){
      this.bird.flipX = true
    }else{
      this.bird.flipX = false
    }
    this.birdSpeed *= -1;
  };
  

  this.harryBird.x += this.birdSpeed1
  let conditionUp1 = this.birdSpeed1 < 0 && this.harryBird.x <= 3000
  let conditionDown1 = this.birdSpeed1 > 0 && this.harryBird.x >= 6000
  
  if(conditionUp1 || conditionDown1){
    if(this.harryBird.flipX === false){
      this.harryBird.flipX = true
    }else{
      this.harryBird.flipX = false
    }
    this.birdSpeed1 *= -1;
  };

  this.seagull.x += this.birdSpeed2
  let conditionUp2 = this.birdSpeed2 < 0 && this.seagull.x <= 4500
  let conditionDown2 = this.birdSpeed2 > 0 && this.seagull.x >= 5000
  
  if(conditionUp2 || conditionDown2){
    if(this.seagull.flipX === false){
      this.seagull.flipX = true
    }else{
      this.seagull.flipX = false
    }
    this.birdSpeed2 *= -1;
  };
  
  
  
  this.cameras.main.scrollX = this.player.x - 400;

  this.background.tilePositionX = this.cameras.main.scrollX * 0.000008;
  this.clouds.tilePositionX = this.cameras.main.scrollX * 0.03;
  //this.sun.positionX = this.cameras.main.scrollX * 0.05;
  this.mountains.tilePositionX = this.cameras.main.scrollX * 0.6;
  this.plantsBack.tilePositionX = this.cameras.main.scrollX * 0.7;
  //this.plants.tilePositionX = this.cameras.main.scrollX * 1;
  this.cameras.main.scrollX = this.player.x - 400;

  if (this.cursors.left.isDown)
  {
    this.player.setVelocityX(-200);
    this.player.flipX = true;
    this.player.anims.play('left', true);
  }
  else if (this.cursors.right.isDown)
  {
    this.player.setVelocityX(200);
    this.player.flipX = false;
    this.player.anims.play('right', true);
  }
  else
  {
    this.player.setVelocityX(0);

    this.player.anims.play('turn');
  }

  if (this.cursors.up.isDown && this.player.body.touching.down)
  {
    this.player.setVelocityY(-330);
  }
  
  if (this.player.y > 800){
    
  
    this.scene.restart();
    return
    
  };
  
},this;


// our game's configuration
let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 500},
        debug: true
    }
  },
  scene: gameScene,
  title: 'Memories',
  pixelArt: false,
  backgroundColor: '000000',
};

// create the game, and pass it the configuration
let game = new Phaser.Game(config);
