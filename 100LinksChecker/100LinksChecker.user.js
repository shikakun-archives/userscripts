// ==UserScript==
// @name          100 links checker
// @namespace     http://shikakun.com/
// @description   100 個以上リンクがあるページの URL をコンソールに出力します
// @include       http://*
// @include       https://*
// @grant         none
// ==/UserScript==
(function () {
  if (100 <= document.links.length) {
    console.log('%c' + document.links.length + ' links! (' + location.href + ')', 'color: #ff009a');
  }
})();
