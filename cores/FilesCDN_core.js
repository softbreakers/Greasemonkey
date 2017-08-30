// ==UserScript==
// @name        FilesCDN Killer Core
// @author      Softbreakers
// @namespace   softbreakers
// @description Direct download from FilesCDN links
// @version     1
// @grant       none
// ==/UserScript==

function FilesCDN(url, handler) {
  var $ = unsafeWindow.jQuery;
  var getting = $.get(url, function(dataget) {
	  var inputreferer = $("form[name='F1'] :input[name='referer']");
	  if (inputreferer.length) {
	    $(inputreferer[0]).val(url);
	    var posting = $.post(url, $("form[name='F1']:first").serialize());
	    posting.done(function(data) {
	      var button = $(data).find("i.icon-cloud-download2:first");
	      if (button.length) {
	        var fileURL = button[0].parentElement.getAttribute('href');
	        if (fileURL.length) {
	          handler(fileURL);
	        }
	      }
	    })    
	  }
  })
}