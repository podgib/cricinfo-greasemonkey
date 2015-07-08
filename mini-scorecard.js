// ==UserScript==
// @name        Cricinfo scorecard
// @namespace   geoffp
// @description Resizes the iframe on the cricinfo mini scorecard
// @include     http://www.espncricinfo.com/*/engine/match/*.html?template=desktop
// @version     1
// @grant       none
// ==/UserScript==

function formatFrame(frame) {
  var logo = frame.contentDocument.getElementsByClassName("desktopLogo")[0];
  logo.children[0].children[0].style.display='none';
  var container = frame.contentDocument.getElementsByClassName("desktopContainer1")[0];
  var height = container.offsetHeight + "px";
  var width = container.offsetWidth + "px";
  frame.style.height=height;
  frame.style.width =width;
  window.sizeToContent(); 
}

var frame = document.getElementsByTagName("iframe")[0];
frame.onload = function() {formatFrame(frame);};

window.onbeforeunload = function(e) {
  return 'Close?';
}
