class Poney extends Phaser.Scene{
	constructor(){
		super('Poney');
	}

	init(data) {
		var player;	
		var objet;
	}

	preload(){
		this.load.image('sol','assets/poney/bg.png');
		this.load.image('sides','assets/poney/SIDE.png');
		this.load.image('top','assets/poney/TOP.png');
		//this.load.image('lol','assets/poney/lol.png');
		this.load.image('mur','assets/poney/mur_bg.png');
		this.load.image('chaise-back','assets/poney/chaise-BACK.png');
		this.load.image('chaise-front','assets/poney/chaise-FRONT.png');
		this.load.image('chaise-left','assets/poney/chaise-LEFT.png');
		this.load.image('chaise-right','assets/poney/chaise-RIGHT.png');
		this.load.image('contour-contoire','assets/poney/contour-contoire.png');
		this.load.image('contoir','assets/poney/contoir.png');
		this.load.image('table','assets/poney/table.png');
		this.load.image('table-ronde','assets/poney/tableronde.png');
		this.load.image('table-solo','assets/poney/table-solo.png');
		this.load.image('tapis','assets/poney/tapis.png');
		this.load.image('tonneau','assets/poney/tonneau.png');
		this.load.image('struct','assets/poney/struct.png');
		this.load.spritesheet('cheminee','assets/poney/cheminee-Sheet.png', {frameWidth: 200, frameHeight: 200});
		this.load.spritesheet('chemine','assets/poney/chemine.png', {frameWidth: 213, frameHeight: 300});

		this.load.spritesheet('right', 'assets/personnage/aragorn/ALIVE/aragorn_RIGHT-Sheet.png', {frameWidth: 46, frameHeight: 66});
		this.load.spritesheet('left', 'assets/personnage/aragorn/ALIVE/aragorn_LEFT-Sheet.png', {frameWidth: 46, frameHeight: 66});
		this.load.spritesheet('back', 'assets/personnage/aragorn/ALIVE/aragorn_BACK-Sheet.png', {frameWidth: 46, frameHeight: 66});
		this.load.spritesheet('front', 'assets/personnage/aragorn/ALIVE/aragorn_FRONT-Sheet.png', {frameWidth: 46, frameHeight: 66});

	}

	create(){
		this.add.image(0,0,'sol').setOrigin(0);
		this.add.image(50,1020,'tapis').setOrigin(0).setScale(0.25);
		this.add.image(0,683,'contoir').setOrigin(0).setScale(0.75);
		this.objet = this.physics.add.staticGroup();
		this.end = this.physics.add.staticGroup();
		this.chem = this.physics.add.staticGroup();
		//this.objet.create(0,0,'mur');
		this.objet.create(1919,540,'sides');
		this.objet.create(1,540,'sides');
		this.objet.create(960,1079,'top');
		this.objet.create(960,170,'top');
		this.end.create(1800,250,'chaise-front');
		this.objet.create(1800,350,'table-solo');
		this.objet.create(110,595,'tonneau');
		this.objet.create(70,625,'tonneau');
		this.objet.create(150,625,'tonneau');
		this.objet.create(425,425,'chaise-right');
		this.objet.create(425,525,'chaise-right');
		this.objet.create(580,425,'chaise-left');
		this.objet.create(580,525,'chaise-left');
		this.objet.create(500,500,'table');
		this.objet.create(1275,725,'chaise-right');
		this.objet.create(1275,825,'chaise-right');
		this.objet.create(1430,725,'chaise-left');
		this.objet.create(1430,825,'chaise-left');
		this.objet.create(1350,800,'table');
		this.objet.create(725,830,'chaise-right');
		this.objet.create(975,830,'chaise-left');
		this.objet.create(850,725,'chaise-front');
		this.objet.create(850,850,'table-ronde');
		this.objet.create(850,950,'chaise-back');
		//this.objet.create(0,0,'');
		this.objet.create(100,750,'contour-contoire').setOrigin(0).setScale(0.75).setVisible(false);

		this.cursors = this.input.keyboard.createCursorKeys();

		this.chem = this.physics.add.sprite(1815, 700,'chemine');
		this.objet.create(1872,700,'struct');
		this.player = this.physics.add.sprite(100, 1020,'front').setScale(1.4);
		//this.player.setCollideWorldBounds(true);
		this.physics.add.collider(this.player,this.objet);
		this.physics.add.overlap(this.player,this.chem);
		this.physics.add.collider(this.player,this.end,this.theEnd,null,this);
		

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
			key:'cheminee',
			frames: this.anims.generateFrameNumbers('cheminee', {start: 0, end: 3}),
			frameRate: 10,
			repeat: -1
		});
		this.anims.create({
			key:'chemine',
			frames: this.anims.generateFrameNumbers('chemine', {start: 0, end: 3}),
			frameRate: 10,
			repeat: -1
		});


		this.chem.anims.play('chemine', true);
		this.cameras.main.setBounds(0,0,1920,1080);
		this.cameras.main.startFollow(this.player);
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
	}

	theEnd(player,end){
		alert("c'est la fin");
	}
}

//this.scene.start("");