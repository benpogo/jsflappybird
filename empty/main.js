// create a main state that will contain the game
var mainState = {
	preload: function() {
		//func to load images and sound at beginning of game
	}


create: function() {
	//set up the game and display sprites
},

update: function() {
	//contains the games logic. updates 60 times a second.
},
},

//initialize phaser and game size(400x490px)
var game = new phaser.game(400,490);

//add the main state and call it main
game.state.add('main', mainState);

//start the state to start the game.
game.state.start('main');