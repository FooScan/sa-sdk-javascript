var sdkversion_placeholder="1.25.10";function wrapPluginInitFn(e,t,i){if(t&&(e.plugin_name=t),i&&e.init){var n=e.init;e.init=function(o,r){if(wrapLogFn(o,e,t),o.readyState&&o.readyState.state>=3||!o.on)return l();function l(){n.call(e,o,r)}o.on(i,l)}}return e}function wrapLogFn(e,t,i){function n(t,n){e.logger?e.logger.msg.apply(e.logger,n).module(i+""||"").level(t).log():e.log&&e.log.apply(e,n)}t.log=function(){n("log",arguments)},t.warn=function(){n("warn",arguments)},t.error=function(){n("error",arguments)}}function createPlugin(e,t,i){return wrapPluginInitFn(e,t,i),e.plugin_version=sdkversion_placeholder,e}var _sd,_oldBuildData,_log=window.console&&window.console.log||function(){};function buildData(e){try{if("$pageview"!==e.event&&(!e.type||"profile"!==e.type.slice(0,7))){var t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0,i=document.documentElement.scrollHeight||0,n={$page_height:Math.max(t,i)||0};e.properties=_sd._.extend(e.properties||{},n)}}catch(o){_log("\u9875\u9762\u9ad8\u5ea6\u83b7\u53d6\u5f02\u5e38\u3002")}return _oldBuildData.call(_sd.kit,e)}var RegisterPropertyPageHeight={init:function(e){_log=(_sd=e)&&_sd.log||_log,e&&e.kit&&e.kit.buildData?(_oldBuildData=_sd.kit.buildData,_sd.kit.buildData=buildData,_log("RegisterPropertyPageHeight \u63d2\u4ef6\u521d\u59cb\u5316\u5b8c\u6210")):_log("RegisterPropertyPageHeight \u63d2\u4ef6\u521d\u59cb\u5316\u5931\u8d25,\u5f53\u524d\u4e3bsdk\u4e0d\u652f\u6301 RegisterPropertyPageHeight \u63d2\u4ef6\uff0c\u8bf7\u5347\u7ea7\u4e3bsdk")}},index=createPlugin(RegisterPropertyPageHeight,"RegisterPropertyPageHeight","sdkReady");export default index;