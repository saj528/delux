// create a new scene
let gameScene = new Phaser.Scene('Game');

// some parameters for our scene
gameScene.init = function() {
  console.log('init');
};

// load asset files for our game
gameScene.preload = function() {
  this.load.image('background', 'assets/sky.png');
  this.load.image('sun', 'assets/sun.png');
  this.load.image('clouds', 'assets/clouds.png');
  this.load.image('mountains', 'assets/mountainspink.png');
  this.load.image('plants', 'assets/plantlife.png');
  this.load.image('plantsback', 'assets/plantlifeback.png');
  this.load.image('billboardmemories', 'assets/billboardmemories.png');
  this.load.image('billboardcar', 'assets/billboardcar.png');
  this.load.image('billboardmovies', 'assets/billboardmovies.png');
  this.load.image('billboardrandom', 'assets/billboardrandom.png');
  this.load.image('billboardvampire', 'assets/billboardvampire.png');
  this.load.image('skeleton', 'assets/skeleton.png');
  this.load.image('microtable', 'assets/microtable.png');
  this.load.image('guy', 'assets/guy.png');
  this.load.image('xterra', 'assets/xterra.png');
  this.load.image('bubble', 'assets/bubble.png');
  this.load.image('button', 'assets/button.png');
  this.load.image('ground', 'assets/groundLong.png');
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
  this.load.spritesheet('dino',
      'assets/dino.png',
      { frameWidth: 250,
        frameHeight: 200,
      }
  );
};

gameScene.create = function() {
  this.background = this.add.tileSprite(400, 300, 800, 600, 'background');
  this.background.scrollFactorX = 0;
  this.sun = this.add.sprite(600, 150, 'sun').setScale(.4);
  this.sun.scrollFactorX = 0;
  this.clouds = this.add.tileSprite(400, 300, 800, 600, 'clouds');
  this.clouds.scrollFactorX = 0;
  this.mountains = this.add.tileSprite(400, 300, 800, 600, 'mountains');
  this.mountains.scrollFactorX = 0;
  this.plantsBack = this.add.tileSprite(400, 279, 800, 600, 'plantsback');
  this.plantsBack.scrollFactorX = 0;
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
  this.button = this.physics.add.sprite(1900,575, 'button').setScale(3)
  this.button.body.allowGravity = false;
  this.button.body.immovable = true;
  
  this.zone = new Phaser.Geom.Rectangle(this.button.x - 25, this.button.y -5, 50, 50);
  
  this.xterra = this.physics.add.sprite(-180, 519, 'xterra').setScale(.3);
  this.xterra.body.allowGravity = false;
  this.xterra.body.immovable = true;
  this.microtable = this.add.sprite(1800,545,'microtable').setScale(.1)
  this.skeleton = this.add.sprite(1700,545,'skeleton').setScale(.1)
  this.guy = this.add.sprite(2000,545,'guy')
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

  this.player = this.physics.add.sprite(150, 300, 'player', 2);
  this.player.canAttack = true;
  this.bird = this.add.sprite(350, 300, 'bird', 0).setScale(.09);
  this.dino = this.add.sprite(400, 533, 'dino', 0).setScale(.7);
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
    key: 'dinoBreath',
    frames: this.anims.generateFrameNumbers('dino', { start: 0, end: 2 }),
    frameRate: 2,
    repeat: -1
  });
  this.dino.anims.play('dinoBreath');
  
  this.speech = 
  [
    this.bubble = this.add.sprite(2025, 460, 'bubble').setScale(.2).setVisible(false),
    this.add.text(2000, 450, "Chongo", {
    font: "16px Arial",
    fill: "black",
    align: "center",
  }).setShadow(3, 3, 'rgba(0,0,0,0.5)', 5).setVisible(false),
  this.bubble = this.add.sprite(200, 200, 'bubble').setScale(.2).setVisible(false),
  this.add.text(224, 224, "Trango", {
    font: "24px Arial",
    fill: "red",
    align: "center",
  }).setShadow(3, 3, 'rgba(0,0,0,0.5)', 5).setVisible(false)
  ]

  this.input.keyboard.on('keydown_E', (event) => {
    if (Phaser.Geom.Rectangle.Overlaps(this.player.getBounds(), this.zone )) {
      this.speech.forEach(function(element){
        element.setVisible(true)
      });
      this.timedEventStats = this.time.addEvent({
        delay: 10000,
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

  this.keys = this.input.keyboard.addKeys({
    'attack': Phaser.Input.Keyboard.KeyCodes.SPACE,
  });

  this.cursors = this.input.keyboard.createCursorKeys();

};

gameScene.update = function() {

  this.cameras.main.scrollX = this.player.x - 400;

  this.background.tilePositionX = this.cameras.main.scrollX * 0.08;
  this.clouds.tilePositionX = this.cameras.main.scrollX * 0.03;
  //this.sun.positionX = this.cameras.main.scrollX * 0.05;
  this.mountains.tilePositionX = this.cameras.main.scrollX * 0.6;
  this.plantsBack.tilePositionX = this.cameras.main.scrollX * 0.7;
  //this.plants.tilePositionX = this.cameras.main.scrollX * 1;
  this.cameras.main.scrollX = this.player.x - 400;

  if (this.keys.attack.isDown) {
    if (!this.player.canAttack) return;
    this.player.anims.play('attack');
    this.player.canAttack = false;
    this.sys.time.addEvent({
      delay: 1000,
      callback: () => {
        this.player.canAttack = true;
      }
    });
  }

  if (this.cursors.left.isDown)
  {
    this.player.setVelocityX(-1060);
    this.player.flipX = true;
    this.player.anims.play('left', true);
  }
  else if (this.cursors.right.isDown)
  {
    this.player.setVelocityX(1060);
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
