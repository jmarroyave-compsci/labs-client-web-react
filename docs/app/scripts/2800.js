"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[2800,2617,3288,8631,9306],{50192:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);function o(e){return n.createElement("div",null,"Hello World")}r(45697),o.defaultProps={},o.propTypes={};const a=o},91534:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(67294),o=r(83347),a=r(86688),c=r(72797);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function s(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(y,e);var t,r,a,l,p=(a=y,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(a);if(l){var r=d(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return s(this,e)});function y(){return u(this,y),p.apply(this,arguments)}return t=y,(r=[{key:"render",value:function(){var e=this.props,t=e.className,r=e.cover,a=(e.padding,e.children),c=(e.hero,!0===r?"100vh":"inherit");return n.createElement(o.Z,{xs:this.renderSection(a,t,c,"2rem 0rem"),sm:this.renderSection(a,t,c,"3rem 0rem"),md:this.renderSection(a,t,c,"4rem 2.5rem")})}},{key:"renderSection",value:function(e,t,r,o){return n.createElement(c.Z,{from:"/core/ui/section"},n.createElement("div",{className:"com-layout-section"},n.createElement("div",{className:"".concat(t),style:{boxSizing:"border-box",width:"100%",height:r,padding:o}},e)))}}])&&i(t.prototype,r),y}(n.Component);const y=(0,a.Z)(p)},18319:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r(20483).default},58631:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r(69306).default},69306:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=r(67294),o=r(45697),a=r.n(o),c=r(50192);function l(e){var t=e.loading,r=e.error;return e.data,t?n.createElement("p",null,"Loading..."):r?n.createElement("p",null,"Error ",r.toString()):n.createElement(c.Z,null)}l.propTypes={data:a().object},l.defaultProps={data:null}},73494:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(67294),o=r(91534),a=r(80383),c=r(81648),l=r(58631);const u=function(e){var t=e.data,r=e.loading;return n.createElement(a.Z,{className:"page-module",fill:!0},n.createElement(c.Z,{fill:!0},n.createElement(o.Z,{className:"section-0"},n.createElement(l.default,{data:t?t.dashboard:null,loading:r}))))}},96550:(e,t,r)=>{r.r(t),r.d(t,{QRY_DASHBOARD:()=>d,default:()=>p});var n,o,a,c=r(67294),l=r(83347),u=r(18319),i=r(73494),f=r(54397),s=r(70846),d=(0,f.Ps)(n||(o=["\n  query getDashboard{ \n    dashboard {\n      actors\n      countries\n      directors\n      genres\n      lastUpdate\n      movies\n      people\n      types\n      yearsAdded\n      yearsReleased\n    }\n  }"],a||(a=o.slice(0)),n=Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(a)}}))));function p(e){var t=(0,s.a)(d),r=t.loading,n=t.error,o=t.data,a=e.page;return e.trends,c.createElement(u.default,null,c.createElement(l.Z,{xs:c.createElement(i.default,{page:a,data:o,loading:r,error:n})}))}}}]);