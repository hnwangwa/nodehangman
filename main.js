//This is where all the magic happens! running main will start the actual game
var Word = require('./word.js');
var prompt = require('prompt');

console.log("Welcome to Harry Potter Hangman!   _.,----,\r\n __  _.-._ / '-.        -  ,._  \\) \r\n|  `-)_   '-.   \\       / < _ )/\" }\r\n/__    '-.   \\   '-, ___(c-(6)=(6)\r\n , `'.    `._ '.  _,'   >\\    \"  )\r\n :;;,,'-._   '---' (  ( \"/`. -='/\r\n;:;;:;;,  '..__    ,`-.`)'- '--'\r\n;';:;;;;;'-._ /'._|   Y/   _/' \\\r\n      '''\"._ F    |  _/ _.'._   `\\\r\n             L    \\   \\/     '._  \\\r\n      .-,-,_ |     `.  `'---,  \\_ _|\r\n      //    'L    /  \\,   (\"--',=`)7\r\n     | `._       : _,  \\  /'`-._L,_'-._\r\n     '--' '-.\\__/ _L   .`'         './/\r\n                 [ (  /\r\n                  ) `{\r\n       snd        \\__)");
console.log("Rack that clever brain of yours, my dear witch/wizard");
console.log("Goodluck!");
console.log("-----------------------------");
prompt.start();



game = {
 	wordBank: ['Hogwarts', 'Durmstrang', 'Hagrid', 'Marauders', 'Expelliarmus', 'Scar', 'Voldemort'],
 	wordsWon: 0,
 	guessesRemaining: 10,
 	currentWrd: null,
 	
 	startGame: function (wrd) {
 		this.resetGuesses();
 		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
 		this.currentWrd.getLet();
 		this.promptUser();
 	},

 	resetGuesses: function(){
 		this.guessesRemaining = 10;
 	},

 	promptUser: function(){
 		var self = this;
 		prompt.get(['guessLet'], function(err, result){
 			console.log("You guessed: " + result.guessLet);
 			var manyGuessed = self.currentWrd.checkLetter(result.guessLet);

 			if(manyGuessed ==0) {
 				console.log("NOPE");
 				self.guessesRemaining--;
 				
 			} else {
 				console.log("CORRECT");
 					if(self.currentWrd.findWord()){
 						console.log("Merlin's Beard! You won!");
 						console.log("-------------------");
 						return;
 					}
 			}

 			console.log("Guesses remaining: " + self.guessesRemaining);
 			console.log("-------------------");
 			if((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
 				self.promptUser();
 			}
 			else if(self.guessesRemaining ==0){
 				console.log("Too bad, Game Over. Correct Word ", self.currentWrd.target);
 			} else {
 				console.log(self.currentWrd.wordRender());
 			}
 		});

 	}


};

game.startGame();