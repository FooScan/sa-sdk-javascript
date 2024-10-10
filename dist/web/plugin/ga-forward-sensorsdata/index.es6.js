var sdkversion_placeholder="1.26.18";function wrapPluginInitFn(e,t,n){if(t&&(e.plugin_name=t),n&&e.init){var r=e.init;e.init=function(o,i){if(wrapLogFn(o,e,t),o.readyState&&o.readyState.state>=3||!o.on)return a();function a(){r.call(e,o,i)}o.on(n,a)}}return e}function wrapLogFn(e,t,n){function r(t,r){e.logger?e.logger.msg.apply(e.logger,r).module(n+""||"").level(t).log():e.log&&e.log.apply(e,r)}t.log=function(){r("log",arguments)},t.warn=function(){r("warn",arguments)},t.error=function(){r("error",arguments)}}function createPlugin(e,t,n){return wrapPluginInitFn(e,t,n),e.plugin_version=sdkversion_placeholder,e}var GA_SERVICE_ROOT_DOMAIN_VALUES=["analytics.google.com","google-analytics.com"],GA_PAYLOAD_PATHNAME_VALUE="/g/collect",GA_PAYLOAD_VERSION_VALUE="2",GA_PAYLOAD_VERSION_KEY="v",GA_PAYLOAD_USER_ID_KEY="uid",GA_PAYLOAD_EVENT_NAME_KEY="en",GA_PAYLOAD_CLIENT_ID_KEY="cid",GA_PAYLOAD_EVENT_PROPERTY_STRING_PREFIX="ep.",GA_PAYLOAD_EVENT_PROPERTY_NUMBER_PREFIX="epn.",GA_PAYLOAD_USER_PROPERTY_STRING_PREFIX="up.",GA_PAYLOAD_USER_PROPERTY_NUMBER_PREFIX="upn.",sd=null;function log(e,t){sd?sd.log(e,t):"object"==typeof console&&console.log&&console.log(e,t)}function __read(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}catch(a){log("system-sensors-error",a)}}return i}function __values(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}var __assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},isVersionSupported=function(e){return e.searchParams.get(GA_PAYLOAD_VERSION_KEY)===GA_PAYLOAD_VERSION_VALUE},parseGA4Events=function(e,t,n){var r,o,i={};try{for(var a=__values(t.searchParams.entries()),s=a.next();!s.done;s=a.next()){var c=__read(s.value,2),_=c[0],l=c[1];i[_]=l}}finally{try{s&&!s.done&&(r=a["return"])&&r.call(a)}catch(p){log("system-sensors-error",p)}}if(!n)return[i];try{"beacon"===e?o=n.toString().split("\\r\\"):"fetch"===e?o=n.toString().split("\r\n"):"xhr"===e&&(o=[n.toString()]),o=o.map(function(e){return __assign(__assign({},i),e.split("&").reduce(function(e,t){var n=__read(t.split("="),2),r=n[0],o=n[1];return e[decodeURIComponent(r)]=decodeURIComponent(o),e},{}))})}catch(p){log("system-sensors-error",p)}return o},transformToAmplitudeEvents=function(e){function t(e){function t(e){var t={id:"item_id",nm:"item_name",br:"item_brand",ca:"item_category",c2:"item_category2",c3:"item_category3",c4:"item_category4",c5:"item_category5",va:"item_variant",pr:"price",qt:"quantity",cp:"coupon",ln:"item_list_name",lp:"index",li:"item_list_id",ds:"discount",af:"affiliation",pi:"promotion_id",pn:"promotion_name",cn:"creative_name",cs:"creative_slot",lo:"location_id"};return e in t?t[e]:e}var n=e.split("~"),r={};return n.length>0&&n.forEach(function(e,o){if("string"!=typeof e)return e;var i=e.match(/^[k](\d+)(.+)/);if(i&&i[1]&&i[2]&&"string"==typeof n[o+1]&&n[o+1].startsWith("v"+i[1]))r[e.slice(String(i[1]).length+1)]=n[o+1].slice(String(i[1]).length+1),n[o+1]=undefined;else{var a=e.slice(0,2),s=e.slice(2);r[t(a)]="id"===a||"nm"===a?s.replace(/\s/g,"_"):s}return r}),r}return!("object"!=typeof e||!e.map)&&e.map(function(e){e.cu&&(e["ep.currency"]=e.cu);for(var n=1,r=[];e["pr"+n];)r.push(t(e["pr"+n])),++n;return{anonymous_id:String(e[GA_PAYLOAD_CLIENT_ID_KEY]),event:String(e[GA_PAYLOAD_EVENT_NAME_KEY]).replace(/\s/g,"_"),login_id:e[GA_PAYLOAD_USER_ID_KEY],properties:__assign(__assign({},getProperties(e,GA_PAYLOAD_EVENT_PROPERTY_STRING_PREFIX,GA_PAYLOAD_EVENT_PROPERTY_NUMBER_PREFIX))),user_properties:getProperties(e,GA_PAYLOAD_USER_PROPERTY_STRING_PREFIX,GA_PAYLOAD_USER_PROPERTY_NUMBER_PREFIX),item:r}})},getProperties=function(e,t,n){var r,o={};try{for(var i=__values(Object.entries(e)),a=i.next();!a.done;a=i.next()){var s=__read(a.value,2),c=s[0],_=s[1];c.startsWith(t)&&(o[c.slice(t.length)]=String(_)),c.startsWith(n)&&(o[c.slice(n.length)]=Number(_))}}finally{try{a&&!a.done&&(r=i["return"])&&r.call(i)}catch(l){log("system-sensors-error",l)}}return o},globalScope=window;function initProxy(){if("function"!=typeof window.Proxy||"function"!=typeof window.URL||"function"!=typeof navigator.sendBeacon||"function"!=typeof window.Request)return log("current Browser is not support proxy API,cannot forward GA4 to SensorsAnalytics"),!1;try{var e=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=new Proxy(e,{apply:function(e,t,n){return interceptXHR("open",t,n),e.apply(t,n)}});var t=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.send=new Proxy(t,{apply:function(e,t,n){return interceptXHR("send",t,n),e.apply(t,n)}}),globalScope.navigator.sendBeacon=new Proxy(globalScope.navigator.sendBeacon,{apply:function(e,t,n){return interceptBeacon.apply(t,n),e.apply(t,n)}}),globalScope.fetch=new Proxy(globalScope.fetch,{apply:function(e,t,n){return interceptFetch.apply(t,n),e.apply(t,n)}})}catch(n){log("system-sensors-error",n)}}var tempXHR={saveData:null,me:null},interceptXHR=function(e,t,n){"open"===e&&(tempXHR={saveData:n&&n[1],me:t}),"send"===e&&"string"==typeof tempXHR.saveData&&t===tempXHR.me&&(intercept("xhr",tempXHR.saveData,n[0]||null),tempXHR={})},interceptFetch=function(e,t){try{"string"==typeof e&&intercept("fetch",e,"object"==typeof t?t.body:null)}catch(n){log("system-sensors-error",n)}},interceptBeacon=function(e,t){return intercept("beacon",e,t)},intercept=function(e,t,n){if(!t.startsWith("http"))return!1;try{var r=new URL(t);if(GA_SERVICE_ROOT_DOMAIN_VALUES.some(function(e){return r.hostname.endsWith(e)})&&r.pathname===GA_PAYLOAD_PATHNAME_VALUE&&isVersionSupported(r)){var o=parseGA4Events(e,r,n);log("ga-event",o),transformToSensorsSDK(transformToAmplitudeEvents(o))}}catch(i){log("system-sensors-error",i)}};function transformToSensorsEventsAndProperties(e){function t(e){return e.replace(/[^A-Za-z0-9_$]/g,"_").replace(/^\d+/g,"_")}var n={},r={};if("[object Object]"===Object.prototype.toString.call(e)){for(var o in e)if("[object Object]"===Object.prototype.toString.call(e[o])){for(var i in n={},e[o])n[t(i)]=e[o][i];r[t(o)]=n}else r[t(o)]=e[o];return r}return e}function transformToSensorsSDK(e){var t=["page_view","scroll","user_engagement","click"];log("amp-event",e),e.forEach(function(e){if(t.includes(e.event))return!1;(e=transformToSensorsEventsAndProperties(e)).user_properties&&Object.keys(e.user_properties).length>0&&sd.setProfile(e.user_properties),e.login_id&&sd.login(e.login_id);var n={};e.item.length>0&&e.item.forEach(function(e){"string"==typeof(n=transformToSensorsEventsAndProperties(e)).item_name&&"string"==typeof n.item_id&&sd.setItem(n.item_name,n.item_id,n)}),sd.track(e.event,e.properties||{})})}var GA2Sensors={plugin_name:"GAForwardSensorsData",init:function(e,t){sd=e,"object"==typeof(t=t||{}).domain&&t.domain.length>0&&(GA_SERVICE_ROOT_DOMAIN_VALUES=GA_SERVICE_ROOT_DOMAIN_VALUES.concat(t.domain)),initProxy()}},index=createPlugin(GA2Sensors);export default index;