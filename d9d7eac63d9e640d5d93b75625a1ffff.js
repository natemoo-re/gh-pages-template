require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var a=e[n]=new t.Module;r[n][0].call(a.exports,i,a,a.exports)}return e[n].exports}function o(){this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({9:[function(require,module,exports) {
"use strict";exports.__esModule=!0;var t=function(){function t(t,e){this.currentText="",this.rate=150,this.el=t,this.text=e}return t.prototype.randBetween=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},t.prototype.randInterval=function(t,e){var n=this;return void 0===e&&(e={fuzz:50,loops:this.text.length-1}),new Promise(function(r){var i=0;(function n(){var o=this,u=this.randBetween(this.rate-e.fuzz,this.rate+e.fuzz);if(!(i<e.loops))return r();setTimeout(function(){t(),i++,n.bind(o)()},u)}).bind(n)()})},t.prototype.setText=function(t){var e=this.text.slice()[t];void 0!==e&&(this.currentText+=e,this.el.innerText=this.currentText)},t.prototype.play=function(){var t=this;return new Promise(function(e){setTimeout(function(){return t.setText(0),e(t.randInterval(function(){return t.setText(t.currentText.length)}))},t.rate)})},t}();exports.Autotype=t;
},{}],3:[function(require,module,exports) {
"use strict";exports.__esModule=!0;var e=require("./autotype");function t(){document.addEventListener("keydown",function(e){switch(e.key){case"ArrowUp":o();break;case"ArrowDown":r();break;case"Enter":a()}})}document.addEventListener("DOMContentLoaded",function(){new e.Autotype(document.querySelector("#ls"),"ls projects").play().then(function(){t(),setTimeout(function(){c()},200)})});var s=Array.from(document.querySelectorAll(".to-select")),n=0;function c(){s.forEach(function(e,t){e.classList.add("visible")})}function o(){s[n-1]&&(s[n].classList.remove("selected"),s[n-1].classList.add("selected"),n-=1)}function r(){s[n].classList.remove("selected"),s[n+1]?(s[n+1].classList.add("selected"),n+=1):(s[0].classList.add("selected"),n=0)}function a(){var e=s[n].querySelector("a").getAttribute("href");window.open(e,"_blank")}
},{"./autotype":9}]},{},[3])