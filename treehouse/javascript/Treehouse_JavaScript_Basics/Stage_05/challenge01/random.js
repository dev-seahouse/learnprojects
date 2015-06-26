
var lower = parseInt(prompt("Enter the lower bound:"));
var upper = parseInt(prompt("Enter the upper bound:"));

function genRandom(lower, upper){
	if (isNaN(lower) || isNaN(upper))
		throw new Error('Please use numerical number');
	return Math.floor(Math.random() * (upper-lower +1) + lower);

}

genRandom(lower,upper);
document.write("<p> The generated number is " + ranNum +".</p>")