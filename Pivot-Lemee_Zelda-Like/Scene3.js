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
		var changement = 0;
		var weapon;
		var atk;
		var groupeTir;
		var arrow = 0;

		var player_vie = 3;
	}

	preload(){
		
		this.load.image('background3', 'assets/map/3.png');
		this.load.image('tree','assets/decors/arbres.png');

		this.load.image('bord7', 'assets/bordure/LEFT&RIGHT.png');
		this.load.image('bord8', 'assets/bordure/TOP&BOT.png');
		this.load.image('bord9', 'assets/bordure/LEFT&RIGHT.png');

		this.load.image('slot-epee', 'assets/HUD/slot-epee.png');
		this.load.image('slot-arc', 'assets/HUD/slot-arc.png');

		this.load.image('keur-full', 'assets/HUD/KEUR/keurs1.png');
		this.load.image('keur-1/4', 'assets/HUD/KEUR/keurs2.png');
		this.load.image('keur-1/2', 'assets/HUD/KEUR/keurs3.png');
		this.load.image('keur-null', 'assets/HUD/KEUR/keurs4.png');

		this.load.image('arrow-right', 'assets/personnage/aragorn/ATK/arrow-right.png');
		this.load.image('arrow-left', 'assets/personnage/aragorn/ATK/arrow-left.png');
		this.load.image('arrow-back', 'assets/personnage/aragorn/ATK/arrow-back.png');
		this.load.image('arrow-front', 'assets/personnage/aragorn/ATK/arrow-front.png');

		this.load.spritesheet('atk-right', 'assets/personnage/aragorn/ATK/aragorn_RIGHT-Sheet.png', {frameWidth: 69, frameHeight: 66});
		this.load.spritesheet('atk-left', 'assets/personnage/aragorn/ATK/aragorn_LEFT-Sheet.png', {frameWidth: 69, frameHeight: 66});
		this.load.spritesheet('atk-front', 'assets/personnage/aragorn/ATK/aragorn_FRONT-Sheet.png', {frameWidth: 46, frameHeight: 66});
		this.load.spritesheet('atk-back', 'assets/personnage/aragorn/ATK/aragorn_BACK-Sheet.png', {frameWidth: 45.5, frameHeight: 66});

		this.load.spritesheet('right', 'assets/personnage/aragorn/ALIVE/aragorn_RIGHT-Sheet.png', {frameWidth: 46, frameHeight: 66});
		this.load.spritesheet('left', 'assets/personnage/aragorn/ALIVE/aragorn_LEFT-Sheet.png', {frameWidth: 46, frameHeight: 66});
		this.load.spritesheet('back', 'assets/personnage/aragorn/ALIVE/aragorn_BACK-Sheet.png', {frameWidth: 46, frameHeight: 66});
		this.load.spritesheet('front', 'assets/personnage/aragorn/ALIVE/aragorn_FRONT-Sheet.png', {frameWidth: 46, frameHeight: 66});

		this.load.spritesheet('d_front', 'assets/personnage/aragorn/DEAD/aragorn_FRONT-DEAD-Sheet.png', {frameWidth: 57, frameHeight: 66});

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
		this.weapon = this.input.keyboard.addKey('A');
		this.atk = this.input.keyboard.addKey('Z');


		this.next = this.physics.add.staticGroup();
		this.next.create(799,300,'bord7');
		this.next2 = this.physics.add.staticGroup();
		this.next2.create(400,599,'bord8');
		this.next3 = this.physics.add.staticGroup();
		this.next3.create(1,300,'bord9');

		this.objet = this.physics.add.staticGroup();
		this.objet.create(650,450,'tree').setScale(0.5).refreshBody();
		this.objet.create(200,450,'tree').setScale(0.6).refreshBody();

		this.item = this.physics.add.staticGroup();

		this.hud = this.physics.add.staticGroup();
		this.hud.create(30, 30, 'keur-full').setScale(0.75).refreshBody();

		this.player = this.physics.add.sprite(400,300,'left');
		this.player.setCollideWorldBounds(true);

		this.ennemi = this.physics.add.sprite(600,300,'e_front');
		this.ennemi.setCollideWorldBounds(true);

		this.physics.add.collider(this.player,this.objet);
		this.physics.add.collider(this.ennemi,this.objet);
		this.physics.add.collider(this.ennemi,this.player,this.death,null,this);
		this.physics.add.collider(this.item,this.player,this.collect,null,this);

		this.physics.add.collider(this.player,this.next,this.nextScene,null,this);
		this.physics.add.collider(this.player,this.next2,this.next2Scene,null,this);
		this.physics.add.collider(this.player,this.next3,this.next3Scene,null,this);

		this.objet.create(500,500,'arrow-front').setScale(0.15).refreshBody();


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
			key:'d_front',
			frames: this.anims.generateFrameNumbers('d_front', {start: 3, end: 3}),
			frameRate: 10,
			repeat: 0
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
		this.anims.create({
			key:'atk-right',
			frames: this.anims.generateFrameNumbers('atk-right', {start: 3, end: 3}),
			frameRate: 1,
			repeat: 0
		});
		this.anims.create({
			key:'atk-left',
			frames: this.anims.generateFrameNumbers('atk-left', {start: 3, end: 3}),
			frameRate: 1,
			repeat: 0
		});
		this.anims.create({
			key:'atk-back',
			frames: this.anims.generateFrameNumbers('atk-back', {start: 0, end: 3}),
			frameRate:1,
			repeat: 0
		});
		this.anims.create({
			key:'atk-front',
			frames: this.anims.generateFrameNumbers('atk-front', {start: 0, end: 3}),
			frameRate: 1,
			repeat: 0
		});

		//this.text = this.add.text(10, 30, 'arrow:', { font: '16px Courier', fill: '#ffffff' })

		//deplacment aleatoire pour l'ennemi genere un nombre aleatoire qui defini le deplacement de l'ennemi

	
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
			this.player.setVelocityY(0);
		}

    	/*CHANGEMENT D'ARME*/
        let item_epee = this.add.image(30,90,'slot-epee').setScale(0.5);
		let item_arc = this.add.image(30,90,'slot-arc').setScale(0.5);
		item_arc.setVisible(false);
		item_epee.setVisible(false);

    	if (Phaser.Input.Keyboard.JustDown(this.weapon)){
            if(this.changement == 1 ){
                 //alert('arc');
                 this.changement = 0;
             }

            else{
                //alert('epee');
                this.changement = 1;
             }
        }

        if(this.changement == 1){
        	item_arc.setVisible(false);
			item_epee.setVisible(true);

			if(Phaser.Input.Keyboard.JustDown(this.atk)){
				if(this.player.direction == 'right'){
					this.player.anims.play('atk-right', true);
					this.death()
				}
				else if(this.player.direction == 'left'){
					this.player.anims.play('atk-left', true);
				}
				else if(this.player.direction == 'up'){
					this.player.anims.play('atk-back', true);
				}
				else if(this.player.direction == 'down'){
					this.player.anims.play('atk-front', true);
				}
			}
        }
        if(this.changement == 0){
        	item_epee.setVisible(false);
			item_arc.setVisible(true);

			if(Phaser.Input.Keyboard.JustDown(this.atk)){
				if(this.player.direction == 'right'){
					var coefDir;
					if (this.player.direction == 'right') { coefDir = 1; } else { coefDir = -1 }
   					var tire = this.groupeTir.create(this.player.x + (40 * coefDir), this.player.y - 4, 'arrow-right3');
   					tire.setCollideWorldBounds(false);
   					tire.body.allowGravity = false;
    				tire.setVelocityX(1000 * coefDir, 0);
				}
				else if(this.player.direction == 'left'){
					var coefDir;
					if (this.player.direction == 'left') { coefDir = -1; } else { coefDir = 1 }
   					var tire = this.groupeTir.create(this.player.x + (40 * coefDir), this.player.y - 4, 'arrow-left3');
   					tire.setCollideWorldBounds(false);
   					tire.body.allowGravity = false;
    				tire.setVelocityX(1000 * coefDir, 0);
				}
				else if(this.player.direction == 'up'){
					var coefDir;
					if (this.player.direction == 'up') { coefDir = -1; } else { coefDir = 1 }
   					var tire = this.groupeTir.create(this.player.x - 4, this.player.y + (60 * coefDir), 'arrow-back3');
   					tire.setCollideWorldBounds(false);
   					tire.body.allowGravity = false;
    				tire.setVelocityY(1000 * coefDir, 0);
				}
				else if(this.player.direction == 'down'){
					var coefDir;
					if (this.player.direction == 'down') { coefDir = 1; } else { coefDir = -1 }
   					var tire = this.groupeTir.create(this.player.x - 4, this.player.y + (60 * coefDir), 'arrow-front3');
   					tire.setCollideWorldBounds(false);
   					tire.body.allowGravity = false;
    				tire.setVelocityY(1000 * coefDir, 0);
				}
			}
        }
	}

	death(player,ennemi){
		this.ennemi.setVisible(false);
		this.ennemi.destroy(false);
		this.item.create(this.ennemi.x, this.ennemi.y, 'arrow-left');
	}

	/*collect(player,item){
		this.item.setVisible(false);
		this.item.destroy(false);
		this.arrow += 1;
		this.text.setText('arrow :' + this.arrow)
	}*/

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