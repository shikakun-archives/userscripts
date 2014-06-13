// ==UserScript==
// @name          entypoDisplayTitle
// @namespace     http://shikakun.com/
// @description   Entypo の Character Map でタイトルを表示します
// @include       http://www.entypo.com/characters/
// @require       http://code.jquery.com/jquery-1.10.2.min.js
// @grant         none
// ==/UserScript==
$(function() {
  $('#map li').each(function () {
    $(this).find('.html').append('<br>' + $(this).attr('title'));
  });
});
