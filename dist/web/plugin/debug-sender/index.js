(window.SensorsDataWebJSSDKPlugin=window.SensorsDataWebJSSDKPlugin||{}).DebugSender=function(){"use strict";function r(r,a,n){if(a&&(r.plugin_name=a),n&&r.init){var t=r.init;r.init=function(u,i){function o(){t.call(r,u,i)}return e(u,r,a),u.readyState&&u.readyState.state>=3||!u.on?o():void u.on(n,o)}}return r}function e(r,e,a){function n(e,n){r.logger?r.logger.msg.apply(r.logger,n).module(a+""||"").level(e).log():r.log&&r.log.apply(r,n)}e.log=function(){n("log",arguments)},e.warn=function(){n("warn",arguments)},e.error=function(){n("error",arguments)}}function a(e,a,n){return r(e,a,n),e.plugin_version=g,e}function n(r){var e=r,a="";a=o.para.debug_mode_url.indexOf("?")!==-1?o.para.debug_mode_url+"&"+o.kit.encodeTrackData(r):o.para.debug_mode_url+"?"+o.kit.encodeTrackData(r),d.ajax({url:a,type:"GET",cors:!0,header:{"Dry-Run":String(o.para.debug_mode_upload)},success:function(r){d.isEmptyObject(r)===!0?alert("debug\u6570\u636e\u53d1\u9001\u6210\u529f"+e):alert("debug\u5931\u8d25 \u9519\u8bef\u539f\u56e0"+JSON.stringify(r))}})}function t(r,e){if(o.para.debug_mode===!0){var a=r.data;r.callback;n(JSON.stringify(a)),e.cancellationToken.stop()}return r}function u(){o.para.debug_mode===!0&&(o.para.debug_mode_upload=o.para.debug_mode_upload||!1,d.isString(o.para.debug_mode_url)||(d.isString(o.para.server_url)?o.para.debug_mode_url=o.para.server_url.replace("sa.gif","debug"):d.isArray(o.para.server_url)&&d.isString(o.para.server_url[0])?o.para.debug_mode_url=o.para.server_url[0].replace("sa.gif","debug"):o.para.debug_mode=!1))}function i(){o.on("sdkInitPara",function(){u()}),o.on("sdkAfterInitPara",function(){o.registerInterceptor("sendDataStage",{send:{priority:30,entry:t}})})}var o,d,g="1.26.13",l={plugin_name:"DebugSender",init:function(r){o=r,d=o._,i()}},c=a(l);return c}();