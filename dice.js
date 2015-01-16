//=========================view=============================

function Die(){
	this.value = 0
}

Die.prototype.NUMBER_OF_SIDES = 6

Die.prototype.roll = function(){
	this.value = Math.floor(Math.random() * this.NUMBER_OF_SIDES + 1)
}

function Game(){
	this.diceHolder = []
}

Game.prototype.addNewDice = function(){
	this.diceHolder.push(new Die)
}

Game.prototype.rollDice = function(){
	for (var i = 0; i < this.diceHolder.length; i++){
		this.diceHolder[i].roll();
	}
}

//=========================view============================

function View(){
	this.bindAddButton = '#roller button.add'
	this.rollAllDiceButton = '#roller button.roll'
}

View.prototype.renderDiceOnView = function(){
	$('.dice').append('<div class="die">0</div>')
}

View.prototype.rollViewDice = function(dice){
	$('.die').each(function renderResults(index, element){
		$(element).text(dice[index].value)
	});
}

//=========================controller======================

function Controller(model, view){
	this.model = model;
	this.view = view;
}

Controller.prototype.addDice = function(){
	this.model.addNewDice();
	this.view.renderDiceOnView();
}

Controller.prototype.rollAllDice = function(){
	this.model.rollDice();
	this.view.rollViewDice(this.model.diceHolder);
}

Controller.prototype.bindEventListeners = function(){
	$(this.view.bindAddButton).on('click', this.addDice.bind(this));
	$(this.view.rollAllDiceButton).on('click', this.rollAllDice.bind(this));
}

$(document).ready(function(){
	var myGame = new Controller(new Game(), new View());
	myGame.bindEventListeners();
})

