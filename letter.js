//Constructor for whether a letter in the word is an actual letter or dash
var letter = function(let){
	this.charac = let;
	this.appear = false;
	this.letterRender = function(){
		return !(this.appear) ? "_" : this.charac;
	};
};

//export to Word!
module.exports = letter;