var sdkversion_placeholder="1.24.10";function wrapPluginInitFn(e,n,t){if(n&&(e.plugin_name=n),t&&e.init){var r=e.init;e.init=function(n,i){if(n.readyState&&n.readyState.state>=3||!n.on)return o();function o(){r.call(e,n,i)}n.on(t,o)}}return e}function createPlugin(e,n,t){return wrapPluginInitFn(e,n,t),e.plugin_version=sdkversion_placeholder,e}var PageLoad={init:function(e){function n(){var t=window.performance||window.webkitPerformance||window.msPerformance||window.mozPerformance,r=0,i={$url:e._.getURL(),$title:document.title,$url_path:e._.getURLPath(),$referrer:e._.getReferrer(null,!0)};if(t&&t.timing){var o=t.timing;0===o.fetchStart||0===o.domContentLoadedEventEnd?e.log("performance \u6570\u636e\u83b7\u53d6\u5f02\u5e38"):r=o.domContentLoadedEventEnd-o.fetchStart,function(n,t){if(n.getEntries&&"function"==typeof n.getEntries){for(var r=n.getEntries(),i=null,o=0;o<r.length;o++)"transferSize"in r[o]&&(i+=r[o].transferSize);e._.isNumber(i)&&i>=0&&i<10737418240&&(t.$page_resource_size=Number((i/1024).toFixed(3)))}}(t,i)}else e.log("\u6d4f\u89c8\u5668\u672a\u652f\u6301 performance API.");r>0&&(i.event_duration=Number((r/1e3).toFixed(3))),e.track("$WebPageLoad",i),window.removeEventListener?window.removeEventListener("load",n):window.detachEvent&&window.detachEvent("onload",n)}"complete"==document.readyState?n():window.addEventListener?window.addEventListener("load",n):window.attachEvent&&window.attachEvent("onload",n)}},index=createPlugin(PageLoad,"PageLoad","sdkReady");export default index;