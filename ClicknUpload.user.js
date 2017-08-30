// ==UserScript==
// @name        ClicknUpload Killer
// @author      Softbreakers
// @namespace   softbreakers
// @description Direct download from ClicknUpload links
// @include     https://clicknupload.org/*
// @version     1
// @grant       none
// @require     cores/ClicknUpload_core.js
// ==/UserScript==


function doAction(fileUrl) {
  document.location.href = fileUrl;
}

var $ = unsafeWindow.jQuery;
$(document).ready(function()
{
  $("*").off();
  $("script").remove();
  ClicknUpload(document.location.href, doAction);
});