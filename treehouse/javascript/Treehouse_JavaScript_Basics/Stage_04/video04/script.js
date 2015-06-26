var correct = 0 ;
var random;
var questionNo = 1;
var answer;
var reward;

answer = prompt("Name a programming language that is also a gem" + "[" + questionNo + "]" );
questionNo ++;
if (answer.toUpperCase() === 'RUBY'){
	correct++;
}

answer = prompt("Name a programming language that is also a snake" + "[" + questionNo + "]" );
questionNo ++;
if (answer.toUpperCase() === 'PYTHON'){
	correct++
}
guess = prompt("Guess a number betwee 1 to 6"+ "[" + questionNo + "]" );
questionNo ++;
random = Math.floor(Math.random() * 6 + 1);
if (parseInt(answer) === guess){
	correct++
}

answer = prompt("What language is used to style html" + "[" + questionNo + "]" );
questionNo ++;
if (answer.toUpperCase() === 'CSS'){
	correct++
}
answer = prompt("What language do you use to structure a web page" + "[" + questionNo + "]" );
questionNo ++;
if (answer.toUpperCase() === 'HTML'){
	correct++
}

document.write("<p> You have answered " + correct + " questions correctly");
if (correct === 5){
	reward = "Gold";
}else if (correct <= 4 && correct >=3){
	reward = "Silver";
}else if(correct <=2 && correct >=1){
	reward = "Brown";
}else{
	reward = "None"
}

document.write("You have won " + reward + " crown");






