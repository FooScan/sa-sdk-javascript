(window.SensorsDataWebJSSDKPlugin=window.SensorsDataWebJSSDKPlugin||{}).AndroidBridge=function(){"use strict";function e(e){return b&&b.call(f,JSON.stringify(e))}function n(e){return v.call(f)&&y&&y.call(f,JSON.stringify(e))}function i(e,n){return n&&"function"==typeof n[e.callType]&&n[e.callType]()}function a(e,n,i){if(n&&(e.plugin_name=n),i&&e.init){var a=e.init;e.init=function(t,s){function o(){a.call(e,t,s)}return r(t,e,n),t.readyState&&t.readyState.state>=3||!t.on?o():void t.on(i,o)}}return e}function r(e,n,i){function a(n,a){e.logger?e.logger.msg.apply(e.logger,a).module(i+""||"").level(n).log():e.log&&e.log.apply(e,a)}n.log=function(){a("log",arguments)},n.warn=function(){a("warn",arguments)},n.error=function(){a("error",arguments)}}function t(e,n,i){return a(e,n,i),e.plugin_version=w,e}function s(){if(l=window.SensorsData_APP_New_H5_Bridge,_=l&&l.sensorsdata_track,c=_&&l.sensorsdata_get_server_url&&l.sensorsdata_get_server_url(),u&&!u.bridge.activeBridge&&c){if(u.bridge.activeBridge=S,u.para.app_js_bridge&&!u.para.app_js_bridge.is_mui&&(u.bridge.is_verify_success=c&&u.bridge.validateAppUrl(c)),u.bridge.bridge_info={touch_app_bridge:!0,platform:"android",verify_success:u.bridge.is_verify_success?"success":"fail",support_two_way_call:!!l.sensorsdata_js_call_app},!u.para.app_js_bridge)return void g("app_js_bridge is not configured, data will not be sent by android bridge.");u.registerInterceptor("sendDataStage",{send:{priority:60,entry:o}}),g("Android bridge inits succeed.")}}function o(e,n){if(u.para.app_js_bridge.is_mui||"item_set"===e.data.type||"item_delete"===e.data.type)return e;var i=e.callback;return u.bridge.is_verify_success?(_&&_.call(l,JSON.stringify(p.extend({server_url:u.para.server_url},e.data))),p.isFunction(i)&&i(),n.cancellationToken.cancel(),e):u.para.app_js_bridge.is_send?(u.debug.apph5({data:e.data,step:"4.2",output:"all"}),e):(p.isFunction(i)&&i(),n.cancellationToken.cancel(),e)}function d(e){var n=e.callType;return n in m.commands?m.commands[n](e,l):void(l&&p.isFunction(l.sensorsdata_js_call_app)&&l.sensorsdata_js_call_app(JSON.stringify(e)))}var l,_,c,u,p,g,f=window.SensorsData_App_Visual_Bridge,v=f&&f.sensorsdata_visualized_mode,b=f&&f.sensorsdata_visualized_alert_info,y=f&&f.sensorsdata_hover_web_nodes,m={isVerify:function(){return v&&(v===!0||v.call(f))},commands:{app_alert:e,visualized_track:n,page_info:n,sensorsdata_get_app_visual_config:i}},w="1.25.14",S={init:function(e){u=e,p=u&&u._,g=u&&u.log||console&&console.log||function(){},s()},handleCommand:d},j=t(S,"AndroidBridge","sdkAfterInitPara");return j}();