;
//TODO : learn how this works https://github.com/davidmerfield/randomColor/blob/master/randomColor.js
var getRandomColor = function getRandomRolor() {
    var letters = '012345'.split('');
    var color = '#';
    color += letters[Math.round(Math.random() * 5)];
    letters = '0123456789ABCDEF'.split('');
    for (var i = 0; i < 5; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function setRandomColor(){
    var randColor = getRandomColor();
    $('.js-rand-bg').css({
        'background-color': randColor
    });

    $('.js-rand-fg').css({
        'color': randColor
    });
}

// just an attempt to create a bare minimum version of rest api caller library 
var ApiHelper = (function() {
    // constructor
    var Api = function Api(url, settings) {
        if (!url) {
            throw 'api url not specified.';
        }
        this.url = url;
        this.settings = settings || {};
    };

    // methods
    Api.prototype.send = function send(callback) {
        // env setup
        var res, requestString,
            xhr = new window.XMLHttpRequest(),
            settings = this.settings,
            url = this.url;
        console.log(url);

        // build request string
        requestString = function requestString(params) {
            var reqStr = url;
            console.log(params);
            if (params) {
                var keys = Object.keys(params);

                reqStr += '?';

                // append each params to url
                // TODO: change to lambda
                keys.forEach(function(elem, index) {
                    reqStr += elem + '=' + params[elem];
                    reqStr += index === keys.length - 1 ? '&' + new Date().getTime() : '&'; // if theres still stuff append &
                });
                console.log('Test requestString() function :  ' + reqStr);
            }
            return reqStr || console.log('error buiding requestString');
        }

        // setup request
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var res = JSON.parse(xhr.responseText);
                if (res) {
                    console.log('Success');
                    callback(res);
                } else {
                    throw 'Empty response';
                }
            }
        };

        // sending request
        xhr.open(
            settings.type || 'GET', // only supports get actually at this moment
            requestString(settings.params),
            settings.async || true
        );

        xhr.send();
    };

    // return constructor
    return Api;
}());

// a module to retrieve random photo from unsplash api
var RandomPhoto = (function() {
    // TODO: consolidate vars
    var unsplashApi = new ApiHelper(
        'https://api.unsplash.com/photos/random', {
            params: {
                collections: '156576,159165',
                client_id: 'af5a74750e1773ca6657744a27653509508e04bc1f1c1610f7d0e2bc7b526ad0'
            }
        }
    );

    // constructor
    var Photo = function(callback) {
        this.data = this.getNext(callback);
    };

    // get the url of the next random photo
    Photo.prototype.getNext = function(callback) {
        unsplashApi.send(function(res) {
            if (callback) callback(res);
        });
    };
    return Photo;
}());

var RandomQuote = (function() {
    // the reason for choosing this api is because ..well it is slow
    // i wanted to take this opportunity to think about and learn to create smooth transition
    // when network connection is not ideal
    var Quote,
        quoteApi;

    // constructor
    Quote = function Quote(callback) {
        this.callback = callback || function() {};
        this.getNext(callback);
    }

    quoteApi = new ApiHelper(
        'http://quotesondesign.com/wp-json/posts', {
            params: {
                'filter[orderby]': 'rand',
                'filter[posts_per_page]': 1
            }
        }
    );

    Quote.prototype.getNext = function nextQuote(callback) {
        quoteApi.send((function(res) {
            // will only be called after data received
            this.data = res[0];
            this.callback();
        }).bind(this));
    }

    return Quote;
}());
var quote = new RandomQuote(function() {
    // generate random color and set color of body
    // TODO: colorthief plugin to get dominant color of image  
    // https://github.com/lokesh/color-thie 
    // generate a color

    // init quote content
    var data = this.data,
        quoteText = data.content,
        author = data.title,
        $quoteContent = $(quoteText),
        $authorSpan = $('<span></span>', {
            'class': 'quoteAuthor',
            text: author
        });

    $quoteContent = $quoteContent.add($authorSpan);
    $('#quoteContent').append($quoteContent);

    // configure twitter share button
    $('#tweet-share').attr('href', 'https://twitter.com/intent/tweet?text=' + $quoteContent.text());

    // fade out loading placeholder and display content
    $('#loading-place-holder').fadeOut('slow', function() {
        $('#quoteContainer').removeClass('is-hidden').fadeIn('slow');
    });
});

var photo = new RandomPhoto(function(data) {
    var urls = data.urls;
    loadImg(urls.thumb, urls.regular);
});

function loadImg(urlSmall, urlBig) {
    // if large image already present remove it
    $('.img-large').remove();
    var $imgContainer = $('.js-progressive-img'),
        imgSmall = new Image(),
        largeImg = new Image();

    // after fetching image links data, first set bg image to thumb
    imgSmall.src = urlSmall; // data.urls.thumb
    imgSmall.onload = function() {
            $('.img-small').attr('src', urlSmall);
            $('.img-small').addClass('loaded');
        }
        // load large image
    largeImg.src = urlBig;
    // once load , load image
    largeImg.onload = function() {
        $(largeImg).addClass('img-large loaded').appendTo($imgContainer);
    }
}


$('#btn-nxt').click(function() {
    // generate new set of color
    setRandomColor();

    // reload image
    photo.getNext(function(data) {
        loadImg(data.urls.thumb, data.urls.regular);
    });

    // reload quote
    quote.getNext(function(data) {
        
    });

});

