(window.SensorsDataWebJSSDKPlugin=window.SensorsDataWebJSSDKPlugin||{}).AjaxSender=function(){"use strict";function n(n,r,e){if(r&&(n.plugin_name=r),e&&n.init){var t=n.init;n.init=function(r,a){function i(){t.call(n,r,a)}return r.readyState&&r.readyState.state>=3||!r.on?i():void r.on(e,i)}}return n}function r(r,e,t){return n(r,e,t),r.plugin_version=s,r}function e(n){var r=new u.AjaxSend(n);r.start()}function t(n,r){if("ajax"===o.para.send_type){var t=n.server_url;n.data=o.kit.encodeTrackData(n.data),u.isArray(t)&&t.length?u.each(t,function(r){n.callback=null,n.server_url=r,e(n)}):"string"==typeof o.para.server_url&&""!==o.para.server_url?e(n):o.log("\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01"),r.cancellationToken.stop()}return n}function a(){"ajax"!==o.para.send_type||u.isSupportCors()||(o.para.send_type="image")}function i(){o.on("sdkInitPara",function(){a()}),o.on("sdkAfterInitPara",function(){o.registerInterceptor("sendDataStage",{send:{priority:120,entry:t}})})}var o,u,s="1.24.10",c={plugin_name:"AjaxSender",init:function(n){o=n,u=o._,i()}},l=r(c);return l}();