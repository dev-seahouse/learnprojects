
var question1 = new Question("What is 5+5 ?", ["10", "34"] , 0 );
var question2 = new Question("Which animal is larger", ["Elephant" , "Chicken"], 0 );
var question3 = new Question("Who is Barack Hussein Obama II?", ["A famous electrician.", "Current president of America"],1);

var quiz = new Quiz(
	[question1,question2,question3]
	);
QuizUI.displayNext();



