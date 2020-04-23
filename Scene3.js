class Scene3 extends Phaser.Scene{
	constructor(){
		super('3');
	}

	init(data) {
		var cursors;
		var player;
		var text;
		var objet;
		var ennemi;
		var vie = 3;
	}

	preload(){
		
		this.load.image('background3', 'assets/map/3.png');
		this.load.image('tree','assets/decors/arbres.png');

		this.load.image('bord7', 'assets/bordure/LEFT&RIGHT.png');
		this.load.image('bord8', 'assets/bordure/TOP&BOT.png');
		this.load.image('bord9', 'assets/bordure/LEFT&RIGHT.png');

		this.load.spritesheet('right', 'assets/personnage/aragorn/ALIVE/aragorn_RIGHT-Sheet.png', {frameWidth: 46, frameHeight: 66});
		this.load.spritesheet('left', 'assets/personnage/aragorn/ALIVE/aragorn_LEFT-Sheet.png', {frameWidth: 46, frameHeight: 66});
		this.load.spritesheet('back', 'assets/personnage/aragorn/ALIVE/aragorn_BACK-Sheet.png', {frameWidth: 46, frameHeight: 66});
		this.load.spritesheet('front', 'assets/personnage/aragorn/ALIVE/aragorn_FRONT-Sheet.png', {frameWidth: 46, frameHeight: 66});

		this.load.spritesheet('d_right', 'assets/personnage/aragorn/DEAD/aragorn_RIGHT-DEAD-Sheet.png', {frameWidth: 400, frameHeight: 400});
		this.load.spritesheet('d_left', 'assets/personnage/aragorn/DEAD/aragorn_LEFT-DEAD-Sheet.png', {frameWidth: 400, frameHeight: 400});
		this.load.spritesheet('d_back', 'assets/personnage/aragorn/DEAD/aragorn_BACK-DEAD-Sheet.png', {frameWidth: 400, frameHeight: 400});
		this.load.spritesheet('d_front', 'assets/personnage/aragorn/DEAD/aragorn_FRONT-DEAD-Sheet.png', {frameWidth: 400, frameHeight: 400});

		this.load.spritesheet('e_right', 'assets/personnage/ennemi/ennemi-1/ALIVE/RIGHT-Sheet.png',{frameWidth: 38, frameHeight: 66});
		this.load.spritesheet('e_left', 'assets/personnage/ennemi/ennemi-1/ALIVE/LEFT-Sheet.png',{frameWidth: 38, frameHeight: 66});
		this.load.spritesheet('e_back', 'assets/personnage/ennemi/ennemi-1/ALIVE/BACK-Sheet.png',{frameWidth: 38, frameHeight: 66});
		this.load.spritesheet('e_front', 'assets/personnage/ennemi/ennemi-1/ALIVE/FRONT-Sheet.png',{frameWidth: 38, frameHeight: 66});
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
		this.add.image(400, 300, 'background3');


		this.cursors = this.input.keyboard.createCursorKeys();

		this.next = this.physics.add.staticGroup();
		this.next.create(799,300,'bord7');
		this.next2 = this.physics.add.staticGroup();
		this.next2.create(400,599,'bord8');
		this.next3 = this.physics.add.staticGroup();
		this.next3.create(1,300,'bord9');

		this.objet = this.physics.add.staticGroup();
		this.objet.create(650,450,'tree').setScale(0.5).refreshBody();
		this.objet.create(200,450,'tree').setScale(0.6).refreshBody();


		this.player = this.physics.add.sprite(400,300,'left');
		this.player.setCollideWorldBounds(true);

		this.ennemi = this.physics.add.sprite(600,300,'e_front');
		this.ennemi.setCollideWorldBounds(true);

		this.physics.add.collider(this.player,this.objet);
		this.physics.add.collider(this.ennemi,this.objet);
		this.physics.add.collider(this.ennemi,this.player,this.death,null,this);

		this.physics.add.collider(this.player,this.next,this.nextScene,null,this);
		this.physics.add.collider(this.player,this.next2,this.next2Scene,null,this);
		this.physics.add.collider(this.player,this.next3,this.next3Scene,null,this);


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

		this.anims.create({
			key:'d_left',
			frames: this.anims.generateFrameNumbers('d_left', {start: 0, end: 3}),
			frameRate: 10,
		});
		this.anims.create({
			key:'d_right',
			frames: this.anims.generateFrameNumbers('d_right', {start: 0, end: 3}),
			frameRate: 10,
			repeat: 1
		});
		this.anims.create({
			key:'d_front',
			frames: this.anims.generateFrameNumbers('d_front', {start: 0, end: 3}),
			frameRate: 10,
		});
		this.anims.create({
			key:'d_back',
			frames: this.anims.generateFrameNumbers('d_back', {start: 0, end: 3}),
			frameRate: 10,
		});

		this.anims.create({
			key:'e_left',
			frames: this.anims.generateFrameNumbers('e_left', {start: 0, end: 3}),
			frameRate: 10,
			repeat: -1
		});
		this.anims.create({
			key:'e_right',
			frames: this.anims.generateFrameNumbers('e_right', {start: 0, end: 3}),
			frameRate: 10,
			repeat: -1
		});
		this.anims.create({
			key:'e_front',
			frames: this.anims.generateFrameNumbers('e_front', {start: 0, end: 3}),
			frameRate: 10,
			repeat: -1
		});
		this.anims.create({
			key:'e_back',
			frames: this.anims.generateFrameNumbers('e_back', {start: 0, end: 3}),
			frameRate: 10,
			repeat: -1
		});
		this.anims.create({
			key:'e_stop',
			frames: [{key: 'e_front', frame:0}],
			frameRate: 20
		});

			this.text = this.add.text(10, 30, '', { font: '16px Courier', fill: '#ffffff' })

	}

	update(){
		if(this.cursors.left.isDown){
			this.ennemi.direction = 'left';
			this.ennemi.anims.play('e_left', true);
			this.ennemi.setVelocityX(-300);
		}else if(this.cursors.right.isDown){
			this.ennemi.direction = 'right';	
			this.ennemi.setVelocityX(300);
			this.ennemi.anims.play('e_right', true);
		}
		else if(this.cursors.up.isDown){
			this.ennemi.direction = 'up';
			this.ennemi.setVelocityY(-300);
			this.ennemi.anims.play('e_back', true);
		}else if(this.cursors.down.isDown){
			this.ennemi.direction = 'down';
			this.ennemi.setVelocityY(300);
			this.ennemi.anims.play('e_front', true);
		}
		else{
			this.ennemi.anims.play('e_stop', true);
			this.ennemi.setVelocityX(0);
			this.ennemi.setVelocityY(0);
		}

			if (this.input.gamepad.total === 0)
    		{
        		return;
    		}
	
    		var pad = this.input.gamepad.getPad(0);
	
    		if (pad.axes.length)
    		{
        		var axisH = pad.axes[0].getValue();
        		var axisV = pad.axes[1].getValue();
	
        	if(axisH < 0){
				this.player.direction = 'left';
				//this.player.anims.play('left', true);
				this.player.anims.play('d_right', true);
				this.player.setVelocityX(-300);

				this.ennemi.direction = 'right';	
				this.ennemi.setVelocityX(300);
				this.ennemi.anims.play('e_right', true);
			}else if(axisH > 0){
				this.player.direction = 'right';	
				this.player.setVelocityX(300);
				this.player.anims.play('right', true);

				this.ennemi.direction = 'left';
				this.ennemi.anims.play('e_left', true);
				this.ennemi.setVelocityX(-300);

			}
			else if(axisV < 0){
				this.player.direction = 'up';
				this.player.setVelocityY(-300);
				this.player.anims.play('back', true);

				this.ennemi.direction = 'up';
				this.ennemi.setVelocityY(-300);
				this.ennemi.anims.play('e_back', true);

			}else if(axisV > 0){
				this.player.direction = 'down';
				this.player.setVelocityY(300);
				this.player.anims.play('front', true);

				this.ennemi.direction = 'down';
				this.ennemi.setVelocityY(300);
				this.ennemi.anims.play('e_front', true);
			}
			else{
				this.player.anims.play('stop', true);
				this.player.setVelocityX(0);
				this.player.setVelocityY(0);
			}

			
	
			if (pad.Y){
				this.player.anims.play('d_right', true);
			}
    	}
	}

	death(player, ennemi){
		this.vie =- 1;

		if(this.vie <= 0){
			this.player.anims.play('d_right', true);
			alert('t mort batard');
			//this.scene.pause();
		}

	}

	nextScene(player, next){
		this.scene.start("4");
	}
	next2Scene(player, next2){
		this.scene.start("9");
	}
	next3Scene(player, next3){
		this.scene.start("2");
	}
}