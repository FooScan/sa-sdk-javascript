!function(){"use strict";function e(e,n,t){if(n&&(e.plugin_name=n),t&&e.init){var r=e.init;e.init=function(n,i){function o(){r.call(e,n,i)}return n.readyState&&n.readyState.state>=3||!n.on?o():void n.on(t,o)}}return e}function n(n,r,i){return e(n,r,i),n.plugin_version=t,n}var t="1.24.10",r={init:function(e){function n(n,t){if(n.getEntries&&"function"==typeof n.getEntries){for(var r=n.getEntries(),i=null,o=0;o<r.length;o++)"transferSize"in r[o]&&(i+=r[o].transferSize);e._.isNumber(i)&&i>=0&&i<10737418240&&(t.$page_resource_size=Number((i/1024).toFixed(3)))}}function t(){var r=window.performance||window.webkitPerformance||window.msPerformance||window.mozPerformance,i=0,o={$url:e._.getURL(),$title:document.title,$url_path:e._.getURLPath(),$referrer:e._.getReferrer(null,!0)};if(r&&r.timing){var a=r.timing;0===a.fetchStart||0===a.domContentLoadedEventEnd?e.log("performance \u6570\u636e\u83b7\u53d6\u5f02\u5e38"):i=a.domContentLoadedEventEnd-a.fetchStart,n(r,o)}else e.log("\u6d4f\u89c8\u5668\u672a\u652f\u6301 performance API.");i>0&&(o.event_duration=Number((i/1e3).toFixed(3))),e.track("$WebPageLoad",o),window.removeEventListener?window.removeEventListener("load",t):window.detachEvent&&window.detachEvent("onload",t)}"complete"==document.readyState?t():window.addEventListener?window.addEventListener("load",t):window.attachEvent&&window.attachEvent("onload",t)}},i=n(r,"PageLoad","sdkReady");return i}();