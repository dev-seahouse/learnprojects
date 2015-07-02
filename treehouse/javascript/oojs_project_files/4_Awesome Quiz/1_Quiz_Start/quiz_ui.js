var QuizUI = {


	displayNext : function(){
		if (quiz.hasEnded())
			this.displayScore();
		else{
			this.displayQuestion();
			this.displayChoices();
			this.displayProgress();
		}

	},
	displayQuestion: function(){
		var question = quiz.getCurrentQuestion().question;
		this.setText("question",question);
	},
	displayChoices: function(){
		var choices = quiz.getCurrentQuestion().choices;
		for (var i = 0 ; i < choices.length; i++){
			this.setText("choice"+i , choices[i]);
			this.guessHandler("guess"+i,i);
		}
	},
	displayScore : function(){
		var gameOverHTML = "<h1>Game Over</h1>";
        gameOverHTML += "<h2> Your score is: " + quiz.score + "</h2>";
        this.setText("quiz", gameOverHTML);
	},
	setText: function(id,text){
		var element= document.getElementById(id);
		// innerHTML is a property, not function
		element.innerHTML = text;
	},
	displayProgress: function (){
		var questionNo = quiz.currentQuestionIndex;
		this.setText("progress","Question "+(questionNo+1) + " of " + quiz.questions.length);
	},
	guessHandler : function(id,guess){

		var choiceButton = document.getElementById(id);
		choiceButton.onclick = function(){

			quiz.guess(guess);
			QuizUI.displayNext();
		}
	}
}