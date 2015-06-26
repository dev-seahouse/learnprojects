// Problem : no User interaction casuses no change in applicaiton
// Solution : When user interacts cause interactions properly
var color = $(".selected").css("background-color");
// A context in 2d or 3d graphic is a way for the browser to know where to draw
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;
// When click on control list itesms
$(".controls").on("click", "li", function() {
    // Deselect siling elements
    $(this).siblings().removeClass("selected");
    // Select clicked elements
    $(this).addClass("selected");
    // cache current color
    color = $(this).css("background-color");
});
// When add color is clicked
// show color select or hide the color select
$("#revealColorSelect").click(function() {
    changeColor();
    $("#colorSelect").slideToggle('fast');
});
// update the new color span
function changeColor() {
    var r = $("#red").val();
    var g = $("#green").val();
    var b = $("#blue").val();
    $("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}
// When new color sliders change
$("input[type = range]").change(changeColor);
// When "add color" is pressed
// append the color to the controls ul
$("#addNewColor").click(function() {
    var $newColor = $("<li></li>");
    $newColor.css("background-color", $("#newColor").css("background-color"));
    $newColor.appendTo('.controls ul');
    $newColor.click();
});
// On moutse events on the canvas
// Draw lines
$canvas.mousedown(function(e) {
    /* Act on the event */
    lastEvent = e;
    mouseDown = true;
}).mousemove(function(e) {
    /* Act on the event */
    if (mouseDown) {
        context.beginPath();
        context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
        context.lineTo(e.offsetX, e.offsetY);
        context.strokeStyle = color;
        context.stroke();
        lastEvent = e;
    }
}).mouseup(function(event) {
  /* Act on the event */
  mouseDown = false;
}).mouseleave(function(event) {
  /* Act on the event */
  $canvas.mouseup();
});