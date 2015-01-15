//create a new dice object

var Die = function(){

}

//sets a prototype to each die instant created to have a constant number of sides set to 6
Die.prototype.NUMBER_OF_SIDES = 6

//creates a prototype roll function that renders the results of a  random number between 1 and 6 and returns the roll results to the view
Die.prototype.roll = function(){
	var rollResults = Math.floor(Math.random() * this.NUMBER_OF_SIDES + 1)
	return rollResults
}

var Game = function(){
	this.diceHolder = []
}

Game.prototype.addNewDie = function(){
	this.diceHolder.push(new Die)
}

Game.prototype.rollAllDie = function(){
	for(var i = 0; i < this.diceHolder.length; i++){
		console.log(this.diceHolder[i].roll())
	}
}

myDie = new Die

myGame = new Game

