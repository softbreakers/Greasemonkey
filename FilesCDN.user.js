// ==UserScript==
// @name        FilesCDN Killer
// @author      Softbreakers
// @namespace   softbreakers
// @description Direct download from FilesCDN links
// @include     https://filescdn.com/*
// @version     1
// @grant       none
// @require     cores/FilesCDN_core.js
// ==/UserScript==


function doAction(fileUrl) {
  document.location.href = fileUrl;
}

var $ = unsafeWindow.jQuery;
$(document).ready(function()
{
  $("*").off();
  $("script").remove();
  FilesCDN(document.location.href, doAction);
});