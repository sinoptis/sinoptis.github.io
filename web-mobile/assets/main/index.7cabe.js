window.__require=function e(t,o,n){function r(c,p){if(!o[c]){if(!t[c]){var u=c.split("/");if(u=u[u.length-1],!t[u]){var a="function"==typeof __require&&__require;if(!p&&a)return a(u,!0);if(i)return i(u,!0);throw new Error("Cannot find module '"+c+"'")}c=u}var s=o[c]={exports:{}};t[c][0].call(s.exports,function(e){return r(t[c][1][e]||e)},s,s.exports,e,t,o,n)}return o[c].exports}for(var i="function"==typeof __require&&__require,c=0;c<n.length;c++)r(n[c]);return r}({APIClient:[function(e,t,o){"use strict";cc._RF.push(t,"40ca0SAWz5GPIDRt7kZ2Qm9","APIClient"),Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function e(){this.host="test",this.URLParams=new URLSearchParams(location.search)}return e.prototype.set_headers=function(e){e.setRequestHeader("VIEWER_ID",this.URLParams.get("viewer_id")),e.setRequestHeader("AUTH_ID",this.URLParams.get("auth_id"))},e.prototype.call=function(e,t,o,n){var r=new XMLHttpRequest;r.onreadystatechange=function(){r.readyState===XMLHttpRequest.DONE&&o(r)};var i=this.host+t;r.open(e,i,!0),this.set_headers(r),r.send()},e.prototype.get_user_stats=function(e){this.call("GET","user",e)},e}();o.default=n,cc._RF.pop()},{}],CoinCounter:[function(e,t,o){"use strict";cc._RF.push(t,"7181aPtolFO45SJpu6rSe82","CoinCounter");var n=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var p=e.length-1;p>=0;p--)(r=e[p])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,p=(i.property,function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.label=null,t}return n(t,e),t.prototype.onLoad=function(){this.label=this.node.getComponent(cc.Label)},t.prototype.start=function(){},t.prototype.SetCounter=function(e){this.label.string=e.toString()},t=r([c],t)}(cc.Component));o.default=p,cc._RF.pop()},{}],DebugLabel:[function(e,t,o){"use strict";cc._RF.push(t,"7da2btqpWFInb2SA7bDbNcI","DebugLabel");var n=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var p=e.length-1;p>=0;p--)(r=e[p])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,p=(i.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}var o;return n(t,e),o=t,t.Log=function(e){null!=o.label&&(o.label.string=e)},t.prototype.onLoad=function(){o.label=this.node.getComponent(cc.Label)},t.label=null,t=o=r([c],t)}(cc.Component));o.default=p,cc._RF.pop()},{}],1:[function(e,t,o){!function(e,n){"object"==typeof o&&void 0!==t?n(o):"function"==typeof define&&define.amd?define(["exports"],n):n((e=e||self).vkBridge={})}(this,function(e){"use strict";var t=function(){return(t=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function o(){for(var e=0,t=0,o=arguments.length;t<o;t++)e+=arguments[t].length;var n=Array(e),r=0;for(t=0;t<o;t++)for(var i=arguments[t],c=0,p=i.length;c<p;c++,r++)n[r]=i[c];return n}function n(e,o){var n,r,i=(n={current:0,next:function(){return++this.current}},r={},{add:function(e,t){var o=null!=t?t:n.next();return r[o]=e,o},resolve:function(e,t,o){var n=r[e];n&&(o(t)?n.resolve(t):n.reject(t),r[e]=null)}});return o(function(e){if(e.detail&&e.detail.data&&"request_id"in e.detail.data){var t=e.detail.data,o=t.request_id,n=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(t,["request_id"]);o&&i.resolve(o,n,function(e){return!("error_type"in e)})}}),function(o,n){return void 0===n&&(n={}),new Promise(function(r,c){var p=i.add({resolve:r,reject:c},n.request_id);e(o,t(t({},n),{request_id:p}))})}}var r="undefined"!=typeof window,i=Boolean(r&&window.AndroidBridge),c=Boolean(r&&window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.VKWebAppClose),p=r&&!i&&!c,u=p&&/(^\?|&)vk_platform=mobile_web(&|$)/.test(location.search),a=p?"message":"VKWebAppEvent",s=o(["VKWebAppInit","VKWebAppGetCommunityAuthToken","VKWebAppAddToCommunity","VKWebAppGetUserInfo","VKWebAppSetLocation","VKWebAppGetClientVersion","VKWebAppGetPhoneNumber","VKWebAppGetEmail","VKWebAppGetGeodata","VKWebAppSetTitle","VKWebAppGetAuthToken","VKWebAppCallAPIMethod","VKWebAppJoinGroup","VKWebAppLeaveGroup","VKWebAppAllowMessagesFromGroup","VKWebAppDenyNotifications","VKWebAppAllowNotifications","VKWebAppOpenPayForm","VKWebAppOpenApp","VKWebAppShare","VKWebAppShowWallPostBox","VKWebAppScroll","VKWebAppShowOrderBox","VKWebAppShowLeaderBoardBox","VKWebAppShowInviteBox","VKWebAppShowRequestBox","VKWebAppAddToFavorites","VKWebAppShowCommunityWidgetPreviewBox","VKWebAppShowStoryBox","VKWebAppStorageGet","VKWebAppStorageGetKeys","VKWebAppStorageSet"],p&&!u?["VKWebAppResizeWindow","VKWebAppAddToMenu","VkWebAppShowSubscriptionBox","VkWebAppShowInstallPushBox"]:[]),f=r?window.AndroidBridge:void 0,l=c?window.webkit.messageHandlers:void 0;function d(e,t){var o=t||{bubbles:!1,cancelable:!1,detail:void 0},n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!!o.bubbles,!!o.cancelable,o.detail),n}"undefined"==typeof window||window.CustomEvent||(window.CustomEvent=(d.prototype=Event.prototype,d));var h=function(e){var t=void 0,r=[];function u(e){r.push(e)}"undefined"!=typeof window&&"addEventListener"in window&&window.addEventListener(a,function(e){if(c||i)return o(r).map(function(t){return t.call(null,e)});if(p&&e&&e.data){var n=e.data,u=n.type,a=n.data,s=n.frameId;u&&"VKWebAppSettings"===u?t=s:o(r).map(function(e){return e({detail:{type:u,data:a}})})}});var d=n(function(e,o){f&&f[e]?f[e](JSON.stringify(o)):l&&l[e]&&"function"==typeof l[e].postMessage?l[e].postMessage(o):p&&parent.postMessage({handler:e,params:o,type:"vk-connect",webFrameId:t,connectVersion:"2.2.4"},"*")},u);return{send:d,sendPromise:d,subscribe:u,unsubscribe:function(e){var t=r.indexOf(e);-1<t&&r.splice(t,1)},supports:function(e){return i?!(!f||"function"!=typeof f[e]):c?!(!l||!l[e]||"function"!=typeof l[e].postMessage):p&&-1<s.indexOf(e)},isWebView:function(){return c||i}}}();e.applyMiddleware=function e(){for(var o=[],n=0;n<arguments.length;n++)o[n]=arguments[n];return o.includes(void 0)||o.includes(null)?e.apply(void 0,o.filter(function(e){return"function"==typeof e})):function(e){if(0===o.length)return e;var n,r={subscribe:e.subscribe,send:function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return e.send.apply(e,t)}};return n=o.filter(function(e){return"function"==typeof e}).map(function(e){return e(r)}).reduce(function(e,t){return function(o){return e(t(o))}})(e.send),t(t({},e),{send:n})}},e.default=h,Object.defineProperty(e,"__esModule",{value:!0})})},{}],GameManager:[function(e,t,o){"use strict";cc._RF.push(t,"d43a3eHPNlAcLgqVCj4S7at","GameManager");var n=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var p=e.length-1;p>=0;p--)(r=e[p])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=e("@vkontakte/vk-bridge"),c=cc._decorator,p=c.ccclass,u=(c.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.onLoad=function(){i.default.send("VKWebAppInit"),i.default.subscribe(function(e){return console.log(e)}),cc.game.addPersistRootNode(this.node)},t.prototype.start=function(){},t=r([p],t)}(cc.Component));o.default=u,cc._RF.pop()},{"@vkontakte/vk-bridge":1}],MainScreenInputController:[function(e,t,o){"use strict";cc._RF.push(t,"a4a2dcUYWlHn6HDdK9L6ZYm","MainScreenInputController");var n=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var p=e.length-1;p>=0;p--)(r=e[p])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=e("../DebugLabel"),c=cc._decorator,p=c.ccclass,u=c.property,a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.upperBound=null,t.downBound=null,t.swipeSpeed=10,t.newPos=new cc.Vec3,t.EPSILON=.001,t}return n(t,e),t.prototype.onLoad=function(){this.cameraComp=this.getComponent(cc.Camera),this.isStartedTouch=!1;var e=this;this.node.on(cc.Node.EventType.TOUCH_START,function(t){e.isStartedTouch=!0}),this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){e.direction=t.getDelta(),e.isMoveTouch=!0}),this.node.on(cc.Node.EventType.TOUCH_END,function(t){e.isStartedTouch=!1})},t.prototype.start=function(){},t.prototype.update=function(e){if(this.isStartedTouch&&this.isMoveTouch){var t=-this.direction.y*this.swipeSpeed*e,o=this.node.height/2;this.newPos=this.node.position.clone(),this.newPos.y+=t,this.newPos.y+o>this.upperBound.position.y?this.newPos.y=this.upperBound.position.y-o-this.EPSILON:this.newPos.y-o<this.downBound.position.y&&(this.newPos.y=this.downBound.position.y+o+this.EPSILON),this.node.position=this.newPos,this.isMoveTouch=!1}i.default.Log(this.node.position.toString())},r([u(cc.Node)],t.prototype,"upperBound",void 0),r([u(cc.Node)],t.prototype,"downBound",void 0),r([u],t.prototype,"swipeSpeed",void 0),t=r([p],t)}(cc.Component);o.default=a,cc._RF.pop()},{"../DebugLabel":"DebugLabel"}],RoomsController:[function(e,t,o){"use strict";cc._RF.push(t,"c32078T1oZMz7YDZcPwWW/9","RoomsController");var n=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var p=e.length-1;p>=0;p--)(r=e[p])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,p=i.property,u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.addButton=null,t}return n(t,e),t.prototype.onLoad=function(){},t.prototype.start=function(){this.addButton.node.on(cc.Node.EventType.TOUCH_START,this.AddRoom,this,!0)},t.prototype.AddRoom=function(e){console.log("Add room fired!")},r([p(cc.Button)],t.prototype,"addButton",void 0),t=r([c],t)}(cc.Component);o.default=u,cc._RF.pop()},{}],TavernSceneController:[function(e,t,o){"use strict";cc._RF.push(t,"9c6d5vwcM5E24cydYTF4pJN","TavernSceneController");var n=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(e,t,o,n){var r,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var p=e.length-1;p>=0;p--)(r=e[p])&&(c=(i<3?r(c):i>3?r(t,o,c):r(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=e("./GameManager"),c=e("./CoinCounter"),p=cc._decorator,u=p.ccclass,a=p.property,s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.gameManager=null,t.cointCounter=null,t}return n(t,e),t.prototype.start=function(){this.cointCounter.SetCounter(100)},r([a(i.default)],t.prototype,"gameManager",void 0),r([a(c.default)],t.prototype,"cointCounter",void 0),t=r([u],t)}(cc.Component);o.default=s,cc._RF.pop()},{"./CoinCounter":"CoinCounter","./GameManager":"GameManager"}]},{},["APIClient","CoinCounter","DebugLabel","GameManager","MainScreenInputController","RoomsController","TavernSceneController"]);