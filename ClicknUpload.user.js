// ==UserScript==
// @name        ClicknUpload Killer
// @namespace   Softbreakers
// @description Direct download from ClicknUpload links
// @include     https://clicknupload.org/*
// @version     1
// @grant       none
// @require     core/ClicknUpload_core.js
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