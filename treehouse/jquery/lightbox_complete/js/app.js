//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id = "overlay"></div>') ;
var $image = $("<img>");
var $caption = $("<p></p>")
//1. Add overlay
    // 1.1 An image
    // 1.2 A caption
$("body").append($overlay);
$overlay.append($image);
$overlay.append($caption);


//2. Capture the click event on a link to an image
$("#imageGallery a").click(function(e){
  e.preventDefault();
  var imageLocation=$(this).attr("href");
  $image.attr('src',imageLocation );
  $overlay.show();
  var captionText = $(this).children('img').attr('alt');
  $caption.text(captionText);


});

$overlay.click(function(){
  $overlay.hide();
})
    // 1.1 Show the overlay
    // 1.2 Update the overlay with the image linked in the link
    // 1.3 Get child alt attribute and set caption
//2. Add overlay
    // 2.1 An image
    // 2.2 A caption
//3. When overlay is clicked
    // 3.1 Close the overlay










