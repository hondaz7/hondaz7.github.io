// ==UserScript==
// @name         acfun
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       liguoixong
// @match        https://www.acfun.cn/v/*
// @require      https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js
// @grant        none
// ==/UserScript==

(function($) {
    'use strict';

    var scriptStartTime = new Date();
    /*
    setTimeout(function(){
        var btn = $('.container-video span[data-bind-key=filmMode]');
        console.log(btn);
        btn.trigger('click');
    }, 5000);
    */

    setTimeout(clickBtnWidescreen, 3000);

    function clickBtnWidescreen() {
        var _now = new Date();
        var liveTime = _now.getTime() - scriptStartTime.getTime();
        if (liveTime > 30000) {
            return;
        }
        var control = $('.container-video span[data-bind-key=filmMode]');
        console.log(control.attr('data-bind-attr')=='false');
        if (control.size() == 0) {
            console.log('control is not find!');
            setTimeout(clickBtnWidescreen, 500);
        } else {
            console.log('control is click!');
            control.trigger('click');
        }
    }

})(window.jQuery);