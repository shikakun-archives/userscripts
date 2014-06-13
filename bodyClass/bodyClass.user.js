// ==UserScript==
// @name          bodyClass
// @namespace     https://github.com/shikakun/bodyClass.user.js
// @description   URL パラメータ bodyClass に指定した値を body タグに class として出力します。
// @include       http://*
// @include       https://*
// @require       http://code.jquery.com/jquery-1.10.2.min.js
// @grant         none
// ==/UserScript==
$(function() {
  $.extend({
    param_value: function(name) {
      var value, hash, hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
      for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        if (hash[0] == name) {
          value = hash[1];
        }
      }
      return value;
    }
  });

  if ($.param_value('bodyClass')) {
    $('body').addClass(decodeURI($.param_value('bodyClass')));
  }
});
