(window.SensorsDataWebJSSDKPlugin=window.SensorsDataWebJSSDKPlugin||{}).ImageSender=function(){"use strict";function n(n,r,t){if(r&&(n.plugin_name=r),t&&n.init){var a=n.init;n.init=function(i,o){function l(){a.call(n,i,o)}return e(i,n,r),i.readyState&&i.readyState.state>=3||!i.on?l():void i.on(t,l)}}return n}function e(n,e,r){function t(e,t){n.logger?n.logger.msg.apply(n.logger,t).module(r+""||"").level(e).log():n.log&&n.log.apply(n,t)}e.log=function(){t("log",arguments)},e.warn=function(){t("warn",arguments)},e.error=function(){t("error",arguments)}}function r(e,r,t){return n(e,r,t),e.plugin_version=c,e}function t(n,e){var r=u.kit.encodeTrackData(e);return n.indexOf("?")!==-1?n+"&"+r:n+"?"+r}function a(n){var e=new g.ImageSend(n);e.start()}function i(n,e){var r=null;g.isObject(n.config)&&(r=g.optimizeServerUrl(n.config.server_url));var i=r||n.server_url,o=n.data;n.server_url=i,g.isArray(i)&&i.length?g.each(i,function(e){e&&(n.data=t(e,o),n.callback=null,n.server_url=e,a(n))}):"string"==typeof i&&""!==i?(n.data=t(i,o),a(n)):u.logger&&u.logger.msg("\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01").level("warn").log(),e.cancellationToken.stop()}function o(){"image"!==u.para.send_type&&"ajax"!==u.para.send_type&&"beacon"!==u.para.send_type&&(u.para.send_type="image")}function l(){u.on("sdkInitPara",function(){o()}),u.on("sdkAfterInitPara",function(){u.registerInterceptor("sendDataStage",{send:{priority:130,entry:i}})})}var u,g,c="1.26.12",s={plugin_name:"ImageSender",init:function(n){u=n,g=u._,l()}},f=r(s);return f}();