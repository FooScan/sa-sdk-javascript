var vbridge=window.SensorsData_App_Visual_Bridge,vmode=vbridge&&vbridge.sensorsdata_visualized_mode,valert=vbridge&&vbridge.sensorsdata_visualized_alert_info,vhover=vbridge&&vbridge.sensorsdata_hover_web_nodes;function alertApp(e){return valert&&valert.call(vbridge,JSON.stringify(e))}function hoverNode(e){return vmode.call(vbridge)&&vhover&&vhover.call(vbridge,JSON.stringify(e))}function callBridge(e,r){return r&&"function"==typeof r[e.callType]&&r[e.callType]()}var anBridge,anTrack,anServerUrl,sd,_,log,vbridge$1={isVerify:function(){return vmode&&(!0===vmode||vmode.call(vbridge))},commands:{app_alert:alertApp,visualized_track:hoverNode,page_info:hoverNode,sensorsdata_get_app_visual_config:callBridge}},sdkversion_placeholder="1.25.3";function wrapPluginInitFn(e,r,a){if(r&&(e.plugin_name=r),a&&e.init){var i=e.init;e.init=function(r,n){if(r.readyState&&r.readyState.state>=3||!r.on)return d();function d(){i.call(e,r,n)}r.on(a,d)}}return e}function createPlugin(e,r,a){return wrapPluginInitFn(e,r,a),e.plugin_version=sdkversion_placeholder,e}var AndroidBridge={init:function(e){_=(sd=e)&&sd._,log=sd&&sd.log||console&&console.log||function(){},initBridge()},handleCommand:handleCommand};function initBridge(){anBridge=window.SensorsData_APP_New_H5_Bridge,anTrack=anBridge&&anBridge.sensorsdata_track,anServerUrl=anTrack&&anBridge.sensorsdata_get_server_url&&anBridge.sensorsdata_get_server_url(),sd&&!sd.bridge.activeBridge&&anServerUrl&&(sd.bridge.activeBridge=AndroidBridge,sd.para.app_js_bridge&&!sd.para.app_js_bridge.is_mui&&(sd.bridge.is_verify_success=anServerUrl&&sd.bridge.validateAppUrl(anServerUrl)),sd.bridge.bridge_info={touch_app_bridge:!0,platform:"android",verify_success:sd.bridge.is_verify_success?"success":"fail",support_two_way_call:!!anBridge.sensorsdata_js_call_app},sd.para.app_js_bridge?(sd.registerInterceptor("sendDataStage",{send:{priority:60,entry:sendData}}),log("Android bridge inits succeed.")):log("app_js_bridge is not configured, data will not be sent by android bridge."))}function sendData(e,r){if(sd.para.app_js_bridge.is_mui||"item_set"===e.data.type||"item_delete"===e.data.type)return e;var a=e.callback;return sd.bridge.is_verify_success?(anTrack&&anTrack.call(anBridge,JSON.stringify(_.extend({server_url:sd.para.server_url},e.data))),_.isFunction(a)&&a(),r.cancellationToken.cancel(),e):sd.para.app_js_bridge.is_send?(sd.debug.apph5({data:e.data,step:"4.2",output:"all"}),e):(_.isFunction(a)&&a(),r.cancellationToken.cancel(),e)}function handleCommand(e){var r=e.callType;if(r in vbridge$1.commands)return vbridge$1.commands[r](e,anBridge);anBridge&&_.isFunction(anBridge.sensorsdata_js_call_app)&&anBridge.sensorsdata_js_call_app(JSON.stringify(e))}var index=createPlugin(AndroidBridge,"AndroidBridge","sdkAfterInitPara");export default index;