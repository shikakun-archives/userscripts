// ==UserScript==
// @name          entypoDisplayTitle
// @namespace     http://shikakun.com/
// @description   Entypo のアイコンの横に名前を表示します
// @include       http://www.entypo.com/
// @require       http://code.jquery.com/jquery-1.11.2.min.js
// @grant         none
// ==/UserScript==
$(function() {
  $('img.icon').each(function () {
    var iconName = $(this).attr('src').replace(/images\/(.*)\.svg/, "$1");
    $(this).after(iconName);
  });
});
