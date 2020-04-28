var config = {
	width: 800, //800
	height: 600,//600
	input:{
		gamepad: true
	},
	backgroundColor: 0x000000,
	physics: {
        default: 'arcade',
        arcade: {
            gravity: { 0: 0 },
            debug: true
        }
    },
	scene: [ Menu, Boot, Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8, Scene9, Scene10, Scene11, Scene12, Scene13, Scene14, Scene15, Scene16, Scene17, Scene18, Scene19, Scene20, Scene21, Scene22, Scene23, Scene24, Scene25, Scene26, Scene27, Scene28, Scene29, Scene30, Poney]
};

var game = new Phaser.Game(config);
