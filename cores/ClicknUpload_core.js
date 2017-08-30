// ==UserScript==
// @name        ClicknUpload Killer Core
// @namespace   Softbreakers
// @namespace   softbreakers
// @description Direct download from ClicknUpload links
// @version     1
// @grant       none
// ==/UserScript==

function ClicknUpload(url, handler) {
	var $ = unsafeWindow.jQuery;
  var posting = $.post(url, {   op: "download2", 
                                id:url.substr(url.lastIndexOf('/') + 1),
                                rand: "",
                                referer: document.referrer,
                                method_free: "Free Download >>",
                                method_premium: ""
                            });
	posting.done(function(data) {
	    var button = $(data).find("button#downloadbtn:first");
	    if (button.length) {
	        var onclickEvent = button[0].getAttribute('onclick');
	        if (onclickEvent.length) {
  	            var fileUrl = onclickEvent.substring(onclickEvent.indexOf('http'), onclickEvent.lastIndexOf("'"));        
                handler(fileUrl);
	        }
	    }
	})    	
}