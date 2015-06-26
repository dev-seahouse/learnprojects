var quiz;
var answer;
var html;
var numCorrect = 0;
var correct = [];
var wrong = [];


quiz= [
	["What is 2 + 2 ? ", "4"],
	["What is 3 * 4 ?", "12"],
	["How many legs a chicken have?","2"],
	["Does a good person exists?",'yes'],
	["What color is a red trafic light?",'red']
];

for (var i = 0; i < quiz.length; i++){
	if (quiz[i][1] === (prompt(quiz[i][0] + "[Question "+(i+1) + "]")).toLowerCase()) {
		correct.push(quiz[i][0]);
		numCorrect++;
	}else{
		wrong.push(quiz[i][0]);
	}
}

html = "You got "+numCorrect+ " question(s) right.";
html += "<h2>You got there questions correct:</h2>";
html += printList(correct);
html += "<h2>You got these questions wrong: </h2>";
html += printList(wrong);

print(html);

function printList(list){
	var listHTML = "<ol>";
	for (var i =0; i <list.length; i++){
		listHTML += "<li>" + list[i] + "</li>";
	}

	listHTML+="</ol>";
	return listHTML;
}

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;

}