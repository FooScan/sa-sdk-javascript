!function(){"use strict";function t(t,i,e){if(i&&(t.plugin_name=i),e&&t.init){var r=t.init;t.init=function(i,s){function n(){r.call(t,i,s)}return i.readyState&&i.readyState.state>=3||!i.on?n():void i.on(e,n)}}return t}function i(i,r,s){return t(i,r,s),i.plugin_version=e,i}var e="1.25.3",r={};r.getPart=function(t){var i=!1,e=this.option.length;if(e)for(var r=0;r<e;r++)if(t.indexOf(this.option[r].part_url)>-1)return!0;return i},r.getPartHash=function(t){var i=this.option.length,e=!1;if(i)for(var r=0;r<i;r++)if(t.indexOf(this.option[r].part_url)>-1)return this.option[r].after_hash;return!!e},r.getCurrenId=function(){var t=this.store.getDistinctId()||"",i=this.store.getFirstId()||"";this._.urlSafeBase64&&this._.urlSafeBase64.encode?t=t?this._.urlSafeBase64.trim(this._.urlSafeBase64.encode(this._.base64Encode(t))):"":this._.rot13obfs&&(t=t?this._.rot13obfs(t):"");var e=i?"f"+t:"d"+t;return encodeURIComponent(e)},r.rewriteUrl=function(t,i){var e=this,r=/([^?#]+)(\?[^#]*)?(#.*)?/,s=r.exec(t),n="";if(s){var a,o=s[1]||"",u=s[2]||"",h=s[3]||"",d="_sasdk="+this.getCurrenId(),f=function(t){var i=t.split("&"),r=[];return e._.each(i,function(t){t.indexOf("_sasdk=")>-1?r.push(d):r.push(t)}),r.join("&")};if(this.getPartHash(t)){a=h.indexOf("_sasdk");var g=h.indexOf("?");n=g>-1?a>-1?o+u+"#"+h.substring(1,a)+f(h.substring(a,h.length)):o+u+h+"&"+d:o+u+"#"+h.substring(1)+"?"+d}else{a=u.indexOf("_sasdk");var l=/^\?(\w)+/.test(u);n=l?a>-1?o+"?"+f(u.substring(1))+h:o+u+"&"+d+h:o+"?"+d+h}return i&&(i.href=n),n}},r.getUrlId=function(){var t=location.href.match(/_sasdk=([aufd][^\?\#\&\=]+)/);if(this._.isArray(t)&&t[1]){var i=decodeURIComponent(t[1]);return!i||"f"!==i.substring(0,1)&&"d"!==i.substring(0,1)||(this._.urlSafeBase64&&this._.urlSafeBase64.isUrlSafeBase64&&this._.urlSafeBase64.isUrlSafeBase64(i)?i=i.substring(0,1)+this._.base64Decode(this._.urlSafeBase64.decode(i.substring(1))):this._.rot13defs&&(i=i.substring(0,1)+this._.rot13defs(i.substring(1)))),i}return""},r.setRefferId=function(t){var i=this.store.getDistinctId(),e=this.getUrlId();if(e&&""!==e){var r="a"===e.substring(0,1)||"d"===e.substring(0,1);e=e.substring(1),e!==i&&(r?(this.sd.identify(e,!0),this.store.getFirstId()&&this.sd.saEvent.send({original_id:e,distinct_id:i,type:"track_signup",event:"$SignUp",properties:{}},null)):this.store.getFirstId()&&!t.re_login||this.sd.login(e))}},r.addListen=function(){var t=this,i=function(i){var e,r,s=i.target,n=s.tagName.toLowerCase(),a=s.parentNode;if("a"===n&&s.href||a&&a.tagName&&"a"===a.tagName.toLowerCase()&&a.href){"a"===n&&s.href?(e=s.href,r=s):(e=a.href,r=a);var o=t._.URL(e),u=o.protocol;"http:"!==u&&"https:"!==u||t.getPart(e)&&t.rewriteUrl(e,r)}};t._.addEvent(document,"mousedown",i),window.PointerEvent&&"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>=0&&t._.addEvent(document,"pointerdown",i)},r.init=function(t,i){function e(i){for(var e=i.length,r=[],s=0;s<e;s++)/[A-Za-z0-9]+\./.test(i[s].part_url)&&"[object Boolean]"==Object.prototype.toString.call(i[s].after_hash)?r.push(i[s]):t.log("linker \u914d\u7f6e\u7684\u7b2c "+(s+1)+" \u9879\u683c\u5f0f\u4e0d\u6b63\u786e\uff0c\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f\uff01");return r}return this.sd=t,this._=t._,this.store=t.store,this.para=t.para,this._.isObject(i)&&this._.isArray(i.linker)&&i.linker.length>0?(this.setRefferId(i),this.addListen(),this.option=i.linker,void(this.option=e(this.option))):void t.log("\u8bf7\u914d\u7f6e\u6253\u901a\u57df\u540d\u53c2\u6570\uff01")};var s=i(r,"SiteLinker","sdkReady");return s}();