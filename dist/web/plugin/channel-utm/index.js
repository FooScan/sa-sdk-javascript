(window.SensorsDataWebJSSDKPlugin=window.SensorsDataWebJSSDKPlugin||{}).ChannelUtm=function(){"use strict";function n(n,t,r){if(t&&(n.plugin_name=t),r&&n.init){var a=n.init;n.init=function(i,o){function u(){a.call(n,i,o)}return e(i,n,t),i.readyState&&i.readyState.state>=3||!i.on?u():void i.on(r,u)}}return n}function e(n,e,t){function r(e,r){n.logger?n.logger.msg.apply(n.logger,r).module(t+""||"").level(e).log():n.log&&n.log.apply(n,r)}e.log=function(){r("log",arguments)},e.warn=function(){r("warn",arguments)},e.error=function(){r("error",arguments)}}function t(e,t,r){return n(e,t,r),e.plugin_version=a,e}var r,a="1.25.13",i=["channel_utm_source","channel_utm_content","channel_utm_term","channel_utm_medium","channel_utm_campaign"],o={init:function(n){n&&!r&&(r=n,r._.each(i,function(n){r.source_channel_standard=r.source_channel_standard+" "+n,r.para.source_type.utm.push(n)}),r.registerInterceptor("businessStage",{getUtmData:{entry:function(n){var e=!1,t=n||{};return r._.each(i,function(n){var a=r._.getQueryParam(location.href,n);a.length&&(e=!0,t[n.slice(8)]=a)}),e&&r.register&&r.register({link_v:"1"}),t}}}))}},u=t(o,"ChannelUtm","sdkAfterInitPara");return u}();