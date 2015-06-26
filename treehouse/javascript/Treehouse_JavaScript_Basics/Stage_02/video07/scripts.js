var adj = prompt("Please type an adjective");
var verb = prompt("Please type a verb");
var noun = prompt("Please type a noun");
alert("All done. Ready for the message?");

var message = "<h2>There once was a " + adj + " programmer who wanted to use Javascript to ";
message += verb + " the " + noun + "</h2>";
document.write(message);