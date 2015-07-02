var secondsPerMin = 60;
var minPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var secondsPerDay = secondsPerMin * minPerHour * hoursPerDay;
document.write("There are "+ secondsPerDay + ' seconds in a day');
var yearAlive = secondsPerDay * daysPerWeek * weeksPerYear * 26;
document.write("<p>I have bee alive for more than "+ yearAlive + " seconds");