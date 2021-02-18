// ==UserScript==
// @name         bilibili
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       liguoixong
// @match        https://*.bilibili.com/*
// @require      https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js
// @grant        none
// ==/UserScript==

;(function($) {
    'use strict';
    var isRun = false;
    var scriptStartTime = new Date();

    setTimeout(function(){
        var control = $('#bilibiliPlayer');
        if (control.size() == 1) {
            console.log('video-btn-widescreen click plugin is start!');
            clickBtnWidescreen();
        }
    }, 1000);

    function clickBtnWidescreen() {
        if (isRun) {
            console.log('video-btn-widescreen click plugin is runed!');
            return;
        }
        var _now = new Date();
        var liveTime = _now.getTime() - scriptStartTime.getTime();
        if (liveTime > 30000) {
            console.log('video-btn-widescreen click plugin is timeout!');
            return;
        }

        var widescreen = $('.bilibili-player-video-btn-widescreen');
        if (widescreen.size() == 0) {
            setTimeout(function(){clickBtnWidescreen();}, 300);
            console.log('video-btn-widescreen click plugin is no found btn!');
            return;
        }
        if (widescreen.hasClass('closed')) {
            return;
        }
        widescreen.find('.bilibili-player-iconfont-widescreen-off').trigger('click');
        $(document).scrollTop($('.v-wrap > .l-con').position().top);
        console.log('video-btn-widescreen click plugin is runing!');
        isRun = true;
        /*
        var bofqi = $('#bofqi');
        if (!bofqi.hasClass('wide')) {
            $('.bilibili-player-iconfont-widescreen-off').trigger('click');
            setTimeout(function(){clickBtnWidescreen();}, 200);
        } else {
            $(document).scrollTop($('#playerWrap').position().top - 8);
        }
        */
    }
})(window.jQuery);