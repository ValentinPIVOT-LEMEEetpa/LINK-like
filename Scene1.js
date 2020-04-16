class Scene1 extends Phaser.Scene{
	constructor(){
		super('bootGame');
	}

	init(data) {
		var cursors;
		var lod;
		var un = 0;

	}

	preload(){

		this.load.spritesheet('loadi', 'assets/loading/loading-WHITE-Sheet.png',{frameWidth: 600, frameHeight: 300});
	}

	create(){
		this.cursors = this.input.keyboard.createCursorKeys();
		//this.add.text(325, 300, "Loading game...");
		//this.add.spritesheet(325, 300, "load");
	
		this.lod = this.physics.add.sprite(400,300,'loadi');
		this.lod.setCollideWorldBounds(true);
	
		this.anims.create({
			key:'loading',
			frames: this.anims.generateFrameNumbers('loadi', {start: 0, end: 18}),
			frameRate: 10,
			
		});
		
	}

	update(){
		if(this.anims.frames == 18){
				this.lod.anims.play('loading', true);
			}else{
				this.scene.start("playGame");
			}	
		}
}

//this.scene.start("");