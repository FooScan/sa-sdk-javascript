!function(){"use strict";function n(n,t,e){if(t&&(n.plugin_name=t),e&&n.init){var a=n.init;n.init=function(t,r){function i(){a.call(n,t,r)}return t.readyState&&t.readyState.state>=3||!t.on?i():void t.on(e,i)}}return n}function t(t,e,a){return n(t,e,a),t.plugin_version=u,t}function e(n){var t=[];return o.each(n,function(n){o.isArray(n)?t=t.concat(e(n)):t.push(o.optimizeServerUrl(n))}),t}function a(n,t){t=o.isArray(t)?t:[t];var e=!1;return o.isArray(n)?o.each(n,function(n){o.indexOf(t,n)>-1&&(e=!0)}):o.indexOf(t,n)>-1&&(e=!0),e}function r(n,t){var e=i.kit.encodeTrackData(t);return n.indexOf("?")!==-1?n+"&"+e:n+"?"+e}var i,o,c,u="1.24.10",s={hookFn:null,init:function(n){this.hookFn=n,i.registerInterceptor("sendDataStage",{send:{priority:20,entry:function(n,t){return s.sendData(n,t),n}}})},sendData:function(n,t){var r=n.data,i=r.event,c=n.server_url,u=n.callback,s=this,l=this.hookFn({event_name:i,data:o.extend2Lev({identities:{},lib:{},properties:{}},r),server_url:c});return o.isArray(l)&&l.length?(l=e(l),a(c,l)?u=null:t.cancellationToken.stop(),o.each(l,function(t){if(t&&""!==t&&!a(t,c)){var e=function(t){return function(){s.sendCall({server_url:t,data:n.data,config:null,callback:u}),u=null,n.callback=null}}(t);setTimeout(e)}}),n):(o.isFunction(u)&&u(),t.cancellationToken.stop(),n)},getInstance:function(n){return"beacon"===i.para.send_type&&o.isSupportBeaconSend()?(n.data=i.kit.encodeTrackData(n.data),new o.BeaconSend(n)):"ajax"===i.para.send_type&&o.isSupportCors()?(n.data=i.kit.encodeTrackData(n.data),new o.AjaxSend(n)):(n.data.time=1*new Date,n.data=r(n.server_url,n.data),new o.ImageSend(n))},sendCall:function(n){var t=this.getInstance(n);t.start()}},l={plugin_name:"CustomEventsSender",init:function(n,t){if(i=n,o=i._,c=i&&i.log||console&&console.log||function(){},o.isFunction(t)){if(i.readyState&&i.readyState.state>=3||!i.on)return s.init(t);i.on("sdkAfterInitPara",function(){s.init(t)})}else c("CustomEventsSender init failed\uff0chookFn error. hookFn:",t)}},d=t(l);return d}();