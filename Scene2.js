class Scene2 extends Phaser.Scene{
	constructor(){
		super('playGame');
	}

	init(data) {
		var cursors;
		var player;
	}

	preload(){
		

		this.load.spritesheet('right', 'assets/personnage/aragorn/ALIVE/aragorn_RIGHT-Sheet.png', {frameWidth: 46, frameHeight: 66});
		this.load.spritesheet('left', 'assets/personnage/aragorn/ALIVE/aragorn_LEFT-Sheet.png', {frameWidth: 46, frameHeight: 66});
		this.load.spritesheet('back', 'assets/personnage/aragorn/ALIVE/aragorn_BACK-Sheet.png', {frameWidth: 46, frameHeight: 66});
		this.load.spritesheet('front', 'assets/personnage/aragorn/ALIVE/aragorn_FRONT-Sheet.png', {frameWidth: 46, frameHeight: 66});
	}

 /*                          .
 *                          |\
 *                         _j    .___,
 *                        (_j    |---|
 *                              _|   |
 *                     .____.  (_j  _|
 *                     |.--.| .    (_J
 *                     |l__j|  .
 *                     |+ oo| .
 *                     l____j
 */

	create(){
		this.add.text(20, 20, "playing game", {font: "25px Arial", fill: "yellow"});

		this.cursors = this.input.keyboard.createCursorKeys();


		this.anims.create({
			key:'left',
			frames: this.anims.generateFrameNumbers('left', {start: 0, end: 3}),
			frameRate: 10,
			repeat: -1
		});
		this.anims.create({
			key:'right',
			frames: this.anims.generateFrameNumbers('right', {start: 0, end: 3}),
			frameRate: 10,
			repeat: -1
		});
		this.anims.create({
			key:'front',
			frames: this.anims.generateFrameNumbers('front', {start: 0, end: 3}),
			frameRate: 10,
			repeat: -1
		});
		this.anims.create({
			key:'back',
			frames: this.anims.generateFrameNumbers('back', {start: 0, end: 3}),
			frameRate: 10,
			repeat: -1
		});

		this.anims.create({
			key:'stop',
			frames: [{key: 'front', frame:0}],
			frameRate: 20
		});

		this.player = this.physics.add.sprite(600,450,'left');
		this.player.setCollideWorldBounds(true);
	}

	update(){
		if(this.cursors.left.isDown){
			this.player.direction = 'left';
			this.player.anims.play('left', true);
			this.player.setVelocityX(-300);
		}else if(this.cursors.right.isDown){
			this.player.direction = 'right';	
			this.player.setVelocityX(300);
			this.player.anims.play('right', true);
		}
		else if(this.cursors.up.isDown){
			this.player.direction = 'up';
			this.player.setVelocityY(-300);
			this.player.anims.play('back', true);;
		}else if(this.cursors.down.isDown){
			this.player.direction = 'down';
			this.player.setVelocityY(300);
			this.player.anims.play('front', true);
		}
		else{
			this.player.anims.play('stop', true);
			this.player.setVelocityX(0);
		}
	}
}