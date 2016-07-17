"use strict";
var $jsonp = (function () {
    var jsonpRequest = function (url, options) {
        return new jsonpRequest.init(url, options);
    };

    jsonpRequest.prototype = {
        configureTimeOut: function () {
            var ops = this.options;

            var timeout_trigger = window.setTimeout(function () {
                window[ops.callback_name] = function () { };
                ops.onTimeout();
            }, ops.timeout * 1000);

            window[ops.callback_name] = function (data) {
                window.clearTimeout(timeout_trigger);
                ops.onSucess(data);
            };
        },

        createScript : function () {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = this.url;
            document.getElementsByTagName('head')[0].appendChild(script);
        },
        configureOptions: function () {
            for (var prop in default_options) {
                if (!this.options[prop]) {
                    this.options[prop] = default_options[prop];
                }
            }
        }
    };

    var default_options = {
        callback_name: 'callback',
        onSucess: function () {
            console.log("Success");
        },
        onTimeout: function () {
            console.log("Timeout");
        },
        timeout: 10
    };

    jsonpRequest.init = function (url, options) {
        if (!url) {
            throw "jsonp request url not specified";
        }
        this.url = url;
        this.options = options || default_options;
        this.configureOptions();
        this.configureTimeOut();
        this.createScript();
    };

    jsonpRequest.init.prototype = jsonpRequest.prototype;

    return jsonpRequest;

} ());

