!function(){"use strict";function n(n,e,r){if(e&&(n.plugin_name=e),r&&n.init){var a=n.init;n.init=function(i,o){function u(){a.call(n,i,o)}return t(i,n,e),i.readyState&&i.readyState.state>=3||!i.on?u():void i.on(r,u)}}return n}function t(n,t,e){function r(t,r){n.logger?n.logger.msg.apply(n.logger,r).module(e+""||"").level(t).log():n.log&&n.log.apply(n,r)}t.log=function(){r("log",arguments)},t.warn=function(){r("warn",arguments)},t.error=function(){r("error",arguments)}}function e(t,e,r){return n(t,e,r),t.plugin_version=a,t}var r,a="1.25.14",i=["channel_utm_source","channel_utm_content","channel_utm_term","channel_utm_medium","channel_utm_campaign"],o={init:function(n){n&&!r&&(r=n,r._.each(i,function(n){r.source_channel_standard=r.source_channel_standard+" "+n,r.para.source_type.utm.push(n)}),r.registerInterceptor("businessStage",{getUtmData:{entry:function(n){var t=!1,e=n||{};return r._.each(i,function(n){var a=r._.getQueryParam(location.href,n);a.length&&(t=!0,e[n.slice(8)]=a)}),t&&r.register&&r.register({link_v:"1"}),e}}}))}},u=e(o,"ChannelUtm","sdkAfterInitPara");return u}();