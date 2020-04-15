class Scene1 extends Phaser.Scene{
	constructor(){
		super('bootGame');
	}

	init(data) {
	var cursors;
	var text = 1;
	var lod;
	}

	preload(){

	this.load.spritesheet('load', 'assets/loading/loading-WHITE-Sheet.png',{frameWidth: 600, frameHeight: 300});
	}

	create(){
		this.cursors = this.input.keyboard.createCursorKeys();
		this.add.text(325, 300, "Loading game...");
	
		this.lod = this.scene.physics.add.sprite(600,0,'load');
		this.lod.setCollideWorldBounds(true);
	
		this.anims.create({
			key:'loading',
			frames: this.anims.generateFrameNumbers('load', {start: 0, end: 18}),
			frameRate: 2,
			repeat: 1
		});
		
	}

	update(){
		if(this.text == 1){
			//this.anims.start('load');
			lod.anims.play('loading', true);
		}
	}
}