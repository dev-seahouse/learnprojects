var message = '';
var student;
var found = false;

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

function getStudentReport(student) {
    var report = '<h2>Student: ' + student.name + '</h2>';
    report += '<p>Track: ' + student.track + '</p>';
    report += '<p>Points: ' + student.points + '</p>';
    report += '<p>Achievements: ' + student.achievements + '</p>';
    return report;
}
while (true) {
    var input = prompt("Search student records: type a name or type 'quit' to end");
    if (input === null || input.toLowerCase() === "quit") break;
    else {
        for (var i = 0; i < students.length; i += 1) {
            student = students[i];
            if (input === student.name) {
            	message += getStudentReport(student);
            	found = true;
            }

        }
        if (found == false){
        	print("No student named "+ input + " is found.")
        }else{
        	 print(message);
        }

    }
}