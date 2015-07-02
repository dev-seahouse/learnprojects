//Problem: It look gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation

//Create a select and append to menu
var $select = $("<select></select>");
$("#menu").append($select);
//cycle over menu list
$("#menu a").each(function(){
	// create an optoin
	var $anchor = $(this);
	var $option = $("<option></option>");

// Deal with selected options depending on current page
	if ($anchor.parent().hasClass("selected") ){
		$option.prop("selected",true)
	}

	// option's value is in the href
	$option.val($anchor.attr("href"));
	// optio's text is in the text of link
	$option.text($anchor.text());
	// append option to select
	$select.append($option);
})


// // Create button
// var $button = $("<button>Go</button>");
// $("#menu").append($button);
// // Bind click to button
// $button.click(function(event) {
// 	/* Act on the event */
// 	window.location = $select.val();


// });
$select.change(function(){
	window.location = $select.val();
})

