(window.SensorsDataWebJSSDKPlugin=window.SensorsDataWebJSSDKPlugin||{}).SiteLinker=function(){"use strict";function t(t,i,r){if(i&&(t.plugin_name=i),r&&t.init){var n=t.init;t.init=function(s,o){function a(){n.call(t,s,o)}return e(s,t,i),s.readyState&&s.readyState.state>=3||!s.on?a():void s.on(r,a)}}return t}function e(t,e,i){function r(e,r){t.logger?t.logger.msg.apply(t.logger,r).module(i+""||"").level(e).log():t.log&&t.log.apply(t,r)}e.log=function(){r("log",arguments)},e.warn=function(){r("warn",arguments)},e.error=function(){r("error",arguments)}}function i(e,i,n){return t(e,i,n),e.plugin_version=r,e}var r="1.26.4",n={};n.getPart=function(t){var e=!1,i=this.option.length;if(i)for(var r=0;r<i;r++)if(t.indexOf(this.option[r].part_url)>-1)return!0;return e},n.getPartHash=function(t){var e=this.option.length,i=!1;if(e)for(var r=0;r<e;r++)if(t.indexOf(this.option[r].part_url)>-1)return this.option[r].after_hash;return!!i},n.getCurrenId=function(){var t=this.store.getDistinctId()||"",e=this.store.getFirstId()||"";this._.urlSafeBase64&&this._.urlSafeBase64.encode?t=t?this._.urlSafeBase64.trim(this._.urlSafeBase64.encode(this._.base64Encode(t))):"":this._.rot13obfs&&(t=t?this._.rot13obfs(t):"");var i=e?"f"+t:"d"+t;return encodeURIComponent(i)},n.rewriteUrl=function(t,e){var i=this,r=/([^?#]+)(\?[^#]*)?(#.*)?/,n=r.exec(t),s="";if(n){var o,a=n[1]||"",u=n[2]||"",d=n[3]||"",f="_sasdk="+this.getCurrenId(),h=function(t){var e=t.split("&"),r=[];return i._.each(e,function(t){t.indexOf("_sasdk=")>-1?r.push(f):r.push(t)}),r.join("&")};if(this.getPartHash(t)){o=d.indexOf("_sasdk");var g=d.indexOf("?");s=g>-1?o>-1?a+u+"#"+d.substring(1,o)+h(d.substring(o,d.length)):a+u+d+"&"+f:a+u+"#"+d.substring(1)+"?"+f}else{o=u.indexOf("_sasdk");var l=/^\?(\w)+/.test(u);s=l?o>-1?a+"?"+h(u.substring(1))+d:a+u+"&"+f+d:a+"?"+f+d}return e&&(e.href=s),s}},n.getUrlId=function(){var t=location.href.match(/_sasdk=([aufd][^\?\#\&\=]+)/);if(this._.isArray(t)&&t[1]){var e=decodeURIComponent(t[1]);return!e||"f"!==e.substring(0,1)&&"d"!==e.substring(0,1)||(this._.urlSafeBase64&&this._.urlSafeBase64.isUrlSafeBase64&&this._.urlSafeBase64.isUrlSafeBase64(e)?e=e.substring(0,1)+this._.base64Decode(this._.urlSafeBase64.decode(e.substring(1))):this._.rot13defs&&(e=e.substring(0,1)+this._.rot13defs(e.substring(1)))),e}return""},n.setRefferId=function(t){var e=this.store.getDistinctId(),i=this.getUrlId();if(i&&""!==i){var r="a"===i.substring(0,1)||"d"===i.substring(0,1);i=i.substring(1),i!==e&&(r?(this.sd.identify(i,!0),this.store.getFirstId()&&this.sd.saEvent.send({original_id:i,distinct_id:e,type:"track_signup",event:"$SignUp",properties:{}},null)):this.store.getFirstId()&&!t.re_login||this.sd.login(i))}},n.addListen=function(){var t=this,e=function(e){var i,r,n=e.target,s=n.tagName.toLowerCase(),o=n.parentNode;if("a"===s&&n.href||o&&o.tagName&&"a"===o.tagName.toLowerCase()&&o.href){"a"===s&&n.href?(i=n.href,r=n):(i=o.href,r=o);var a=t._.URL(i),u=a.protocol;"http:"!==u&&"https:"!==u||t.getPart(i)&&t.rewriteUrl(i,r)}};t._.addEvent(document,"mousedown",e),window.PointerEvent&&"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>=0&&t._.addEvent(document,"pointerdown",e)},n.init=function(t,e){function i(e){for(var i=e.length,r=[],n=0;n<i;n++)/[A-Za-z0-9]+\./.test(e[n].part_url)&&"[object Boolean]"==Object.prototype.toString.call(e[n].after_hash)?r.push(e[n]):t.log("linker \u914d\u7f6e\u7684\u7b2c "+(n+1)+" \u9879\u683c\u5f0f\u4e0d\u6b63\u786e\uff0c\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f\uff01");return r}return this.sd=t,this._=t._,this.store=t.store,this.para=t.para,this._.isObject(e)&&this._.isArray(e.linker)&&e.linker.length>0?(this.setRefferId(e),this.addListen(),this.option=e.linker,void(this.option=i(this.option))):void t.log("\u8bf7\u914d\u7f6e\u6253\u901a\u57df\u540d\u53c2\u6570\uff01")};var s=i(n,"SiteLinker","sdkReady");return s}();