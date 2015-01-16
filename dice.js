//---------------------------model-----------------------------

//create a new dice object

function Die (){
	this.value = 0;
}

//sets a prototype to each die instant created to have a constant number of sides set to 6
Die.prototype.NUMBER_OF_SIDES = 6

//creates a prototype roll function that renders the results of a  random number between 1 and 6 and returns the roll results to the view
Die.prototype.roll = function(){
	var rollResults = Math.floor(Math.random() * this.NUMBER_OF_SIDES + 1)
	return rollResults
}

function Game(){
	this.diceHolder = [];
}

Game.prototype.addDie = function(){
	this.diceHolder.push(new Die());
}

Game.prototype.rollAllDie = function(){
	for(var i = 0; i < this.diceHolder.length; i++){
		console.log(this.diceHolder[i].roll())
	}
}

//---------------------------view-----------------------------

function View (){
	this.addDiceButton = '#roller button.add';
	this.rollAllDiceButton = '#roller button.roll';
}

View.prototype.addDie = function(){
	$('.dice').append('<div class="die">0</div');
}




//---------------------------controller-----------------------------

function Controller(view, model){
	this.view = view;
	this.model = model;
}

Controller.prototype.addDie = function(){
	this.model.addDie();
	this.view.addDie();
}

Controller.prototype.rollAllDie = function(){
	console.log("rolling all die")
}

Controller.prototype.addEventHandlers = function(){
	$(this.view.addDiceButton).on('click', this.addDie.bind(this));
	$(this.view.rollAllDiceButton).on('click', this.rollAllDie.bind(this));
}

$(document).ready (function() {
  app = new Controller(new View(), new Game());
  app.addEventHandlers()
});

















