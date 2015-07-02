function Quiz(questions){
	this.questions = questions;
	this.score = 0;
	this.currentQuestionIndex = 0;
}



Quiz.prototype.getCurrentQuestion = function(){
	return this.questions[this.currentQuestionIndex];
}

Quiz.prototype.nextQuestion = function(){
	this.currentQuestionIndex++;

}

Quiz.prototype.hasEnded = function(){
	if (this.currentQuestionIndex === this.questions.length)
		return true;
}

Quiz.prototype.guess = function(guess){
	var currentQuestion = this.questions[this.currentQuestionIndex];
	if (currentQuestion.isCorrect(guess)){
		this.score ++;
	}
	this.nextQuestion();
}

