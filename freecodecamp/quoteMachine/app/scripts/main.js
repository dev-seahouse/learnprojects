"use strict";
(function(global){
    'use strict';
    
    var apiUrl = 'https://api.unsplash.com/photos/random?collections=',
        apiKey = 'af5a74750e1773ca6657744a27653509508e04bc1f1c1610f7d0e2bc7b526ad0',
        separator='&';
        
    // constructor
    var RandomPhoto = function(collectionId){
        this.collectionId = collectionId || '156576,159165';
        this.url = this.getNext();
    }
    
    // get the url of the next random photo
    RandomPhoto.prototype.getNext = function(){
        var xhttp = new XMLHttpRequest(),
            url = apiUrl + this.collectionId + separator + "client_id="+ apiKey;
            
        xhttp.onreadystatechange = function(){
            if (xhttp.readyState == 4 && xhttp.status == 200){
                var res = JSON.parse(xhttp.responseText);
                if (res) {
                    console.log(res.urls.full);
                    return res.urls.full;
                }else {
                    throw "Empty response";
                }
            }
        }; 
        
        xhttp.open('GET', url, true);
        xhttp.send();
    };
    global.RandomPhoto = RandomPhoto;   
}(window));
var $view = $('#view');
var photo = new RandomPhoto();
// var imgUrl = "https://source.unsplash.com/collection/156576?";
// var changeBg = function(){
//     imgUrl+=new Date().getTime();
//     $view.css('background-image',imgUrl);
// }
// window.setInterval(changeBg,5000);





