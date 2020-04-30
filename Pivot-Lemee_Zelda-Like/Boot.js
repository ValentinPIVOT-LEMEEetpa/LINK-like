class Boot extends Phaser.Scene{
	constructor(){
		super('bootGame');
	}

	init(data) {
		var cursors;
		var che;
		var lod;
	}

	preload(){

		this.load.spritesheet('loadi', 'assets/loading/loading-WHITE-Sheet.png',{frameWidth: 600, frameHeight: 300});
	}

	create(){
		//this.cursors = this.input.keyboard.createCursorKeys();
		this.cursors = this.input.keyboard.addKey('X');
		//this.add.text(325, 300, "Loading game...");
		//this.add.spritesheet(325, 300, "load");
	
		this.lod = this.physics.add.sprite(400,300,'loadi');
		this.lod.setCollideWorldBounds(true);
	
		this.anims.create({
			key:'loading',
			frames: this.anims.generateFrameNumbers('loadi', {start: 0, end: 18}),
			frameRate: 10,
			
		});
		this.lod.anims.play('loading', true);
	}

	

	update(){
		if (this.cursors.isDown){
			this.scene.start('1');
		}
	}
}

//this.scene.start("");