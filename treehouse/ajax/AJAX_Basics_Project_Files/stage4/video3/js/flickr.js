// 1. The user click a button
// 2. The ajvascript program will get the word on that button
// 3. Make a get request to Flikr, sending the word along
// 4. Receive the json response
// 5. Add a link adn <img> tag to the page
$(document).ready(function() {
    $('button').click(function() {
        $('button').removeClass("selected");
        $(this).addClass('selected');
        var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        var aniaml = $(this).text();
        var flickrOptions = {
            tags: aniaml,
            format: "json"
        };

        function displayPhotos(data) {
            var photoHTML = "<ul>";
            $.each(data.items, function(i, photo) {
                photoHTML += '<li class="grid-25 tablet-grid-50">';
                photoHTML += '<a href="' + photo.link + '" class="image">';
                photoHTML += '<img src="' + photo.media.m + '"></a></li>';
            });
            photoHTML += '<ul>';
            $("#photos").html(photoHTML);
        }
        $.getJSON(flickrAPI, flickrOptions, displayPhotos);
    })
})