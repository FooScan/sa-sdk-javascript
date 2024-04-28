(window.SensorsDataWebJSSDKPlugin=window.SensorsDataWebJSSDKPlugin||{}).Exposure=function(){"use strict";function e(e,r,n){if(r&&(e.plugin_name=r),n&&e.init){var i=e.init;e.init=function(a,o){function s(){i.call(e,a,o)}return t(a,e,r),a.readyState&&a.readyState.state>=3||!a.on?s():void a.on(n,s)}}return e}function t(e,t,r){function n(t,n){e.logger?e.logger.msg.apply(e.logger,n).module(r+""||"").level(t).log():e.log&&e.log.apply(e,n)}t.log=function(){n("log",arguments)},t.warn=function(){n("warn",arguments)},t.error=function(){n("error",arguments)}}function r(t,r,n){return e(t,r,n),t.plugin_version=s,t}function n(){return("MutationObserver"in window||"WebKitMutationObserver"in window||"MozMutationObserver"in window)&&"IntersectionObserver"in window}function i(e){var t={};return o.each(e,function(r,n){switch(n){case"area_rate":r=Number(r),!isNaN(r)&&r>=0&&r<=1?t.area_rate=r:u("parameter config.area_rate error. config:",e);break;case"stay_duration":r=Number(r),!isNaN(r)&&r>=0?t.stay_duration=r:u("parameter config.stay_duration error. config:",e);break;case"repeated":"false"===r||r===!1||"true"===r||r===!0?t.repeated="false"!==r&&Boolean(r):u("parameter config.repeated error. config:",e)}}),t}var a,o,s="1.26.12",u=console&&console.log||function(){},c="data-sensors-exposure-event-name",d={},l=[],f={area_rate:0,stay_duration:0,repeated:!0},v={isReady:!1,init:function(e){if(!n())return void u("The current browser does not support the element exposure key API, and the element exposure plugin initialization failed.");var t=this;o.isObject(e)&&(f=o.extend(f,i(e))),o.bindReady(function(){var e=t.getElesByEventName();t.addObserveByNodes(e),p.init()}),a.ee.spa.on("switch",function(e){if(e===location.href)return!1;t.clear();var r=t.getElesByEventName();t.addObserveByNodes(r)}),o.listenPageState({visible:function(){t.start()},hidden:function(){t.stop()}}),this.isReady=!0},getElesByEventName:function(e){return e=e||document,e.querySelectorAll("["+c+"]")},getEleEventName:function(e){return e.getAttribute(c)},getEleAttr:function(e,t){t=t||e.attributes;var r={},n={},a=this.getEleEventName(e),s={};return a&&(s.eventName=a),o.each(t,function(t){var i=t.value||e.getAttribute(t.name);try{if("data-sensors-exposure-option"===t.name){var a=o.isObject(i)?i:JSON.parse(i);n=o.isObject(a.config)?a.config:n,r=o.isObject(a.properties)?a.properties:r}}catch(s){u("element attribute data-sensors-exposure-option error. value:",i)}}),o.each(t,function(t){var i=t.value||e.getAttribute(t.name);try{var a=t.name.match(/^data-sensors-exposure-property-(.+)/);a&&(r[a[1]]=i)}catch(o){}try{var s=t.name.match(/^data-sensors-exposure-config-(.+)/);if(s)switch(s[1]){case"area_rate":n.area_rate=i;break;case"stay_duration":n.stay_duration=i;break;case"repeated":n.repeated=i}}catch(o){}}),s.config=i(n),s.properties=r,s},addObserveByNodes:function(e){if(e.length){var t=this;o.each(e,function(e){if(1===e.nodeType&&e.hasAttribute(c)){var r=t.getEleAttr(e);r.ele=e,t.addOrUpdateWatchEle(r)}})}},getIntersection:function(e){var t=null,r=this;return t=d[e.area_rate]?d[e.area_rate]:d[e.area_rate]=new IntersectionObserver(function(){r.exposure.apply(r,arguments)},{threshold:e.area_rate})},exposure:function(e){var t=this;o.each(e,function(e){var r=e.target,n=t.getEleOption(r);return e.isIntersecting===!1||!n||n.config.isSend?void(n&&n.timer&&(clearTimeout(n.timer),n.timer=null)):void(e.intersectionRatio>=n.config.area_rate&&(n.timer&&(clearTimeout(n.timer),n.timer=null),n.timer=setTimeout(function(){var e=r.getBoundingClientRect(),n=t.getEleOption(r);if(e.width&&e.height&&n&&n.eventName&&!n.config.isSend){var i=n.listener,s=i&&i.shouldExpose,u=i&&i.didExpose,c=a.heatmap.getEleDetail(r),d=o.extend({},c,n.properties);if(s&&o.isFunction(s))try{if(s(r,d)===!1)return}catch(l){}if(a.track(n.eventName,d),n.config.isSend=!0,n.config.repeated&&(n.config.isSend=!1),u&&o.isFunction(u))try{u(r,d)}catch(l){}}},1e3*n.config.stay_duration)))})},getEleOption:function(e){var t=null;return o.each(l,function(r){e===r.ele&&(t=r)}),t},addOrUpdateWatchEle:function(e){var t=e.ele,r=e.config;r.isSend=!1;var n=v.getEleOption(t);if(n){if(r.area_rate===n.config.area_rate)return o.extend2Lev(n,e),void(n.config.repeated&&(n.config.isSend=!1));this.removeWatchEle(t)}if(e=o.extend2Lev({},{config:o.extend({},f)},n,e),!e.eventName)return u("parameter option.eventName error. option:",e),!1;o.isElement(t)||u("parameter element error. option:",e);var i=this.getIntersection(e.config);i.observe(t),l.push(e)},removeWatchEle:function(e){var t=null,r=-1;if(o.each(l,function(n,i){e===n.ele&&(t=n,r=i)}),t){var n=t.config,i=d[n.area_rate];i&&o.isElement(e)&&(i.unobserve(e),t.timer&&(clearTimeout(t.timer),t.timer=null),r>-1&&l.splice(r,1))}},start:function(){o.each(l,function(e){var t=e.config,r=e.ele,n=d[t.area_rate];n&&o.isElement(r)&&n.observe(r)})},stop:function(){o.each(l,function(e){var t=e.config,r=e.ele,n=d[t.area_rate];n&&o.isElement(r)&&(n.unobserve(r),e.timer&&(clearTimeout(e.timer),e.timer=null))})},clear:function(){this.stop(),d={},l=[]}},p={mo:null,init:function(){var e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;this.mo=new e(this.listenNodesChange),this.observe()},observe:function(){this.mo.observe(document.body,{attributes:!0,childList:!0,subtree:!0,attributeOldValue:!0})},listenNodesChange:function(e){o.each(e,function(e){switch(e.type){case"childList":e.removedNodes.length>0?o.each(e.removedNodes,function(e){if(1===e.nodeType){v.removeWatchEle(e);var t=v.getElesByEventName(e);t.length&&o.each(t,function(e){v.removeWatchEle(e)})}}):e.addedNodes.length&&(v.addObserveByNodes(e.addedNodes),o.each(e.addedNodes,function(e){if(1===e.nodeType){var t=v.getElesByEventName(e);v.addObserveByNodes(t)}}));break;case"attributes":if(!e.attributeName)return!1;var t=e.target,r=e.attributeName;if(!o.isString(r)||r.indexOf("data-sensors-exposure")<0)return;if(t.getAttribute(r)){var n=v.getEleAttr(t);n.ele=t,v.addOrUpdateWatchEle(n)}else r===c&&v.removeWatchEle(t)}})}},g={exposureViews:l,init:function(e,t){return!(!e||a)&&(a=e,o=a._,u=a.log,v.init(t),void u("Exposure Plugin initialized successfully"))},addExposureView:function(e,t){if(!v.isReady)return void u("Exposure Plugin uninitialized.");if(!o.isElement(e))return void u("parameter element error.");var r={ele:e,config:o.isObject(t.config)?i(t.config):{},eventName:t.eventName,properties:o.isObject(t.properties)?t.properties:{},listener:o.isObject(t.listener)?t.listener:{}};return o.isString(r.eventName)&&r.eventName?void v.addOrUpdateWatchEle(r):void u("parameter option.eventName error. option",t)},removeExposureView:function(e){return v.isReady?o.isElement(e)?void v.removeWatchEle(e):void u("removeExposureView parameter ele errors."):void u("Exposure Plugin uninitialized.")}},m=r(g,"Exposure","sdkAfterInitPara");return m}();