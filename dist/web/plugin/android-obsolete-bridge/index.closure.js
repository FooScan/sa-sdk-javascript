!function(){"use strict";function e(e){return y&&y.call(b,JSON.stringify(e))}function n(e){return v.call(b)&&m&&m.call(b,JSON.stringify(e))}function r(e,n){return n&&"function"==typeof n[e.callType]&&n[e.callType]()}function a(e,n,r){if(n&&(e.plugin_name=n),r&&e.init){var a=e.init;e.init=function(t,s){function o(){a.call(e,t,s)}return i(t,e,n),t.readyState&&t.readyState.state>=3||!t.on?o():void t.on(r,o)}}return e}function i(e,n,r){function a(n,a){e.logger?e.logger.msg.apply(e.logger,a).module(r+""||"").level(n).log():e.log&&e.log.apply(e,a)}n.log=function(){a("log",arguments)},n.warn=function(){a("warn",arguments)},n.error=function(){a("error",arguments)}}function t(e,n,r){return a(e,n,r),e.plugin_version=B,e}function s(){if(f("ObsoleteBridge---test---init---"),d=window.SensorsData_APP_JS_Bridge,c=d&&d.sensorsdata_track,u=d&&d.sensorsdata_verify,_=d&&d.sensorsdata_visual_verify,f("ObsoleteBridge-",g.bridge.activeBridge,u,c,_),g&&!g.bridge.activeBridge&&(u||c||_)){g.bridge.activeBridge=S;var e=u||c;if(_&&(e=!!_.call(d,JSON.stringify({server_url:g.para.server_url})),f("ObsoleteBridge---called-return",e)),g.bridge.bridge_info={touch_app_bridge:!0,platform:"android",verify_success:e?"success":"fail"},!g.para.app_js_bridge)return void f("app_js_bridge is not configured, data will not be sent by android obsolete bridge.");g.registerInterceptor("sendDataStage",{send:{priority:80,entry:o}}),f("Android obsolete bridge inits succeed.")}}function o(e,n){if(f("ObsoleteBridge---senddata"),g.para.app_js_bridge.is_mui||"item_set"===e.data.type||"item_delete"===e.data.type)return e;var r=e.callback;if(u){var a=u&&u.call(d,JSON.stringify(p.extend({server_url:g.para.server_url},e.data)));return f("ObsoleteBridge---anVerify-success",a),a?(p.isFunction(r)&&r(),n.cancellationToken.cancel(),e):g.para.app_js_bridge.is_send?(g.debug.apph5({data:e.data,step:"3.1",output:"all"}),e):(p.isFunction(r)&&r(),n.cancellationToken.cancel(),e)}return f("ObsoleteBridge---is-send-old-way",g.para.app_js_bridge.is_send),c&&c.call(d,JSON.stringify(p.extend({server_url:g.para.server_url},e.data))),p.isFunction(r)&&r(),n.cancellationToken.cancel(),e}function l(e){f("ObsoleteBridge---handleCommadn");var n=e.callType;return n in O.commands?(f("ObsoleteBridge---",n,O.commands),O.commands[n](e,d)):d&&p.isFunction(d.sensorsdata_js_call_app)?(f("ObsoleteBridge---handleCommadn-abridge"),d.sensorsdata_js_call_app(JSON.stringify(e))):void 0}var d,c,u,_,g,p,f,b=window.SensorsData_App_Visual_Bridge,v=b&&b.sensorsdata_visualized_mode,y=b&&b.sensorsdata_visualized_alert_info,m=b&&b.sensorsdata_hover_web_nodes,O={isVerify:function(){return v&&(v===!0||v.call(b))},commands:{app_alert:e,visualized_track:n,page_info:n,sensorsdata_get_app_visual_config:r}},B="1.26.15",S={init:function(e){g=e,p=g&&g._,f=g&&g.log||console&&console.log||function(){},s()},handleCommand:l},w=t(S,"AndroidObsoleteBridge","sdkAfterInitPara");return w}();