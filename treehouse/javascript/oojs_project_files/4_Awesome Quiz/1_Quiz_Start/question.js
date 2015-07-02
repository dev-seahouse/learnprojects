// Define question object
function Question (question, choices, correct){
	this.question = question;
	this.choices  = choices;
	this.correct  = correct;
};

Question.prototype.isCorrect = function(guess){
	if (guess === this.correct)
		return true;
};



