var sdkversion_placeholder="1.24.10";function wrapPluginInitFn(i,t,s){if(t&&(i.plugin_name=t),s&&i.init){var n=i.init;i.init=function(t,e){if(t.readyState&&t.readyState.state>=3||!t.on)return d();function d(){n.call(i,t,e)}t.on(s,d)}}return i}function createPlugin(i,t,s){return wrapPluginInitFn(i,t,s),i.plugin_version=sdkversion_placeholder,i}var amp={sd:null,init:function(i){if(this.sd)return!1;if(this.sd=i,!this.sd||!this.sd._)return!1;var t=this.sd._.cookie.get("sensors_amp_id"),s=this.sd.store._state.distinct_id;if(t&&t.length>0){var n="amp-"===t.slice(0,4);if(t!==s){if(!n)return!1;this.sd.store._state.first_id?(this.sd.identify(t,!0),this.sd.saEvent.send({original_id:t,distinct_id:s,type:"track_signup",event:"$SignUp",properties:{}},null),this.setAmpId(s)):this.sd.identify(t,!0)}}else this.setAmpId(s);this.addListener()},addListener:function(){var i=this;this.sd.events.on("changeDistinctId",function(t){i.setAmpId(t)}),this.sd.events.isReady()},setAmpId:function(i){this.sd._.cookie.set("sensors_amp_id",i)}},index=createPlugin(amp,"Amp","sdkReady");export default index;