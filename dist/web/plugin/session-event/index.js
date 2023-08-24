(window.SensorsDataWebJSSDKPlugin=window.SensorsDataWebJSSDKPlugin||{}).SessionEvent=function(){"use strict";function t(t,i,s){if(i&&(t.plugin_name=i),s&&t.init){var o=t.init;t.init=function(r,n){function p(){o.call(t,r,n)}return e(r,t,i),r.readyState&&r.readyState.state>=3||!r.on?p():void r.on(s,p)}}return t}function e(t,e,i){function s(e,s){t.logger?t.logger.msg.apply(t.logger,s).module(i+""||"").level(e).log():t.log&&t.log.apply(t,s)}e.log=function(){s("log",arguments)},e.warn=function(){s("warn",arguments)},e.error=function(){s("error",arguments)}}function i(e,i,s){return t(e,i,s),e.plugin_version=p,e}function s(t,e){if("track"!==t.type)return t;var i=e.sd,s=i._,o=i.saEvent.check,r=s.extend2Lev({properties:{}},t),n=e.customRegister,p=r.properties,h=r.event,c={};return s.each(n,function(t){if(s.isObject(t))s.indexOf(t.events,h)>-1&&o({properties:t.properties})&&(c=s.extend(c,t.properties));else if(s.isFunction(t)){var e=t({event:h,properties:p,data:r});s.isObject(e)&&!s.isEmptyObject(e)&&o({properties:e})&&(c=s.extend(c,e))}}),t.properties=s.extend(p,c),t}function o(){this.sd=null,this.log=window.console&&window.console.log||function(){},this.customRegister=[]}function r(t){this.sd=t,this._=t._,this.cookie_value=null}function n(){this.registerProperties=null,this.store=null,this.sd=null,this._=null,this.log=window.console&&window.console.log||function(){},this.cookie_name="",this.prop={}}var p="1.25.14";o.prototype.init=function(t){if(t){this.sd=t,this._=t._,this.log=t.log;var e=this;t.registerInterceptor("buildDataStage",{extendProps:{priority:0,entry:function(t){return s(t,e)}}})}else this.log("\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165")},o.prototype.register=function(t){return this.sd?void(this._.isObject(t)&&this._.isArray(t.events)&&t.events.length>0&&this._.isObject(t.properties)&&!this._.isEmptyObject(t.properties)?this.customRegister.push(t):this.log("RegisterProperties: register \u53c2\u6570\u9519\u8bef")):void this.log("\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165")},o.prototype.hookRegister=function(t){return this.sd?void(this._.isFunction(t)?this.customRegister.push(t):this.log("RegisterProperties: hookRegister \u53c2\u6570\u9519\u8bef")):void this.log("\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165")},r.prototype.saveObjectVal=function(t,e){this._.isString(e)||(e=JSON.stringify(e)),1==this.sd.para.encrypt_cookie&&(e=this.sd.kit.userEncrypt(e)),this._.cookie.isSupport()&&this._.cookie.set(t,e),this.cookie_value=e},r.prototype.readObjectVal=function(t){var e=this._.cookie.isSupport()?this._.cookie.get(t):this.cookie_value;return e?(e=this.sd.kit.userDecryptIfNeeded(e),this._.safeJSONParse(e)):null};var h="sensorsdata2015jssdksession";n.prototype.init=function(t){if(!t||"object"!=typeof t)return void this.log("Session Event \u63d2\u4ef6\u521d\u59cb\u5316\u5931\u8d25\uff01");var e=this;this.sd=t,this._=t._,this.log=t.log,this.cookie_name=h+(t.para.sdk_id||""),this.registerProperties=new o,this.registerProperties.init(t),this.store=new r(t),this.registerProperties.hookRegister(function(){return e.addSessionID()})},n.prototype.addSessionID=function(){var t=+new Date;this.prop=this.store.readObjectVal(this.cookie_name)||{};var e=this.prop.first_session_time,i=this.prop.latest_session_time;if(!e||!i||e>t||i>t||t-e>432e5||t-i>18e5){var s=this._.UUID();this.prop={session_id:s.replace(/-/g,""),first_session_time:t,latest_session_time:t}}else this.prop.latest_session_time=t;return this.store.saveObjectVal(this.cookie_name,this.prop),{$event_session_id:this.prop.session_id}};var c=new n,u=i(c,"SessionEvent","sdkReady");return u}();