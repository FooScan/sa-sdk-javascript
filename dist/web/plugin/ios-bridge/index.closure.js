!function(){"use strict";function e(e,i,a){if(i&&(e.plugin_name=i),a&&e.init){var r=e.init;e.init=function(i,t){function n(){r.call(e,i,t)}return i.readyState&&i.readyState.state>=3||!i.on?n():void i.on(a,n)}}return e}function i(i,a,r){return e(i,a,r),i.plugin_version=c,i}function a(){if(n=window.SensorsData_iOS_JS_Bridge&&window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url,s=function(){return window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.sensorsdataNativeTracker},d&&!d.bridge.activeBridge&&s()&&s().postMessage){if(d.bridge.activeBridge=p,d.para.app_js_bridge&&!d.para.app_js_bridge.is_mui&&(d.bridge.is_verify_success=n&&d.bridge.validateAppUrl(n)),d.bridge.bridge_info={touch_app_bridge:!0,platform:"ios",verify_success:d.bridge.is_verify_success?"success":"fail",support_two_way_call:!0},!d.para.app_js_bridge)return void _("app_js_bridge is not configured, data will not be sent by iOS bridge.");d.registerInterceptor("sendDataStage",{send:{priority:70,entry:r}}),_("IOS bridge inits succeed.")}}function r(e,i){if(d.para.app_js_bridge.is_mui||"item_set"===e.data.type||"item_delete"===e.data.type)return e;var a=e.callback;return d.bridge.is_verify_success?(s()&&s().postMessage(JSON.stringify({callType:"app_h5_track",data:o.extend({server_url:d.para.server_url},e.data)})),o.isFunction(a)&&a(),i.cancellationToken.cancel(),e):d.para.app_js_bridge.is_send?(d.debug.apph5({data:e.data,step:"4.1",output:"all"}),e):(o.isFunction(a)&&a(),i.cancellationToken.cancel(),e)}function t(e){var i=e.callType;return"page_info"!==i&&"visualized_track"!==i||d.bridge.hasVisualModeBridge()?"sensorsdata_get_app_visual_config"===i?o.isObject(window.SensorsData_APP_New_H5_Bridge)&&window.SensorsData_APP_New_H5_Bridge[i]:s()&&s().postMessage(JSON.stringify(e)):null}var n,s,d,o,_,c="1.25.3",p={init:function(e){d=e,o=d&&d._,_=d&&d.log||console&&console.log||function(){},a()},handleCommand:t},u=i(p,"IOSBridge","sdkAfterInitPara");return u}();