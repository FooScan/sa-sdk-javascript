var sd,_,sdkversion_placeholder="1.26.18";function wrapPluginInitFn(n,e,r){if(e&&(n.plugin_name=e),r&&n.init){var t=n.init;n.init=function(a,i){if(wrapLogFn(a,n,e),a.readyState&&a.readyState.state>=3||!a.on)return o();function o(){t.call(n,a,i)}a.on(r,o)}}return n}function wrapLogFn(n,e,r){function t(e,t){n.logger?n.logger.msg.apply(n.logger,t).module(r+""||"").level(e).log():n.log&&n.log.apply(n,t)}e.log=function(){t("log",arguments)},e.warn=function(){t("warn",arguments)},e.error=function(){t("error",arguments)}}function createPlugin(n,e,r){return wrapPluginInitFn(n,e,r),n.plugin_version=sdkversion_placeholder,n}function sendData(n){new _.BeaconSend(n).start()}function sendInterceptor(n,e){var r=null,t=null;if(_.isObject(n.config)&&(r=n.config.send_type,t=_.optimizeServerUrl(n.config.server_url)),("beacon"===r||!r&&"beacon"===sd.para.send_type)&&_.isSupportBeaconSend()){var a=t||n.server_url;n.server_url=a,n.data=sd.kit.encodeTrackData(n.data),_.isArray(a)&&a.length?_.each(a,function(e){n.callback=null,n.server_url=e,sendData(n)}):"string"==typeof a&&""!==a?sendData(n):sd.log("\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01"),e.cancellationToken.stop()}return n}function initPara(){"beacon"!==sd.para.send_type||_.isSupportBeaconSend()||(sd.para.send_type="image")}function senderInit(){sd.on("sdkInitPara",function(){initPara()}),sd.on("sdkAfterInitPara",function(){sd.registerInterceptor("sendDataStage",{send:{priority:110,entry:sendInterceptor}})})}var BeaconSender={plugin_name:"BeaconSender",init:function(n){_=(sd=n)._,senderInit()}},index=createPlugin(BeaconSender);export default index;