class Menu extends Phaser.Scene{
	constructor(){
		super('mainMenu');
	}
	init(data){
		
	}
	
	preload(){
		this.load.image('menu', 'assets/menu/menu.png');
		this.load.image('play', 'assets/menu/PLAY.png');
		this.load.image('quit', 'assets/menu/QUIT.png');
		this.load.image('logo', 'assets/menu/logo-b.png');
		this.load.image('select', 'assets/menu/select.png');
	}
	
	create(){
		this.add.image(400, 300,'menu');/*BACKGROUND*/
		let playButton = this.add.image(400, 450,'play').setScale(0.50);
		let quitButton = this.add.image(400,525,'quit').setScale(0.25);
		let hoverSprite = this.add.image(400,525,'select').setScale(0.1);
		hoverSprite.setVisible(false);
		this.add.image(765, 575,'logo').setScale(0.05);
		
		/*je n'ai pas reussi a faire en sorte de pouvoir choisir avec la manette*/

		playButton.setInteractive();
		playButton.on("pointerover",()=>{
			hoverSprite.setVisible(true);
			hoverSprite.x = playButton.x - 125;
			hoverSprite.y = playButton.y;
		})
		playButton.on("pointerout",()=>{
			hoverSprite.setVisible(false);
		})
		playButton.on("pointerup",()=>{
			this.scene.start('bootGame')
		})

		quitButton.setInteractive();
		quitButton.on("pointerover",()=>{
			hoverSprite.setVisible(true);
			hoverSprite.x = quitButton.x - 75;
			hoverSprite.y = quitButton.y;
		})
		quitButton.on("pointerout",()=>{
			hoverSprite.setVisible(false);
		})
		quitButton.on("pointerup",()=>{
			alert('to restart press F5')
			this.scene.pause();
		})

		this.text = this.add.text(10, 50, 'Choose what you want with the mouse and then you can play with the controller :)', { font: '16px Courier', fill: '#ffffff' })
	}
	
	update(){

	}

}