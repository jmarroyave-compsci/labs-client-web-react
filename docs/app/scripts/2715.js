/*! For license information please see 2715.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[2715],{93871:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(60288);function i(e){if("string"!=typeof e)throw new Error((0,r.Z)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},28973:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(63366),i=n(87462),o=n(67294),a=n(86010),s=(n(45697),n(25258)),c=n(71993);var l=n(94581),u=n(91380),d=n(5609),f=n(15773);function h(e){return(0,f.Z)("MuiSkeleton",e)}(0,n(88858).Z)("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var p=n(85893);const m=["animation","className","component","height","style","variant","width"];let v,y,g,b,w=e=>e;const x=(0,s.F4)(v||(v=w`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),C=(0,s.F4)(y||(y=w`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),$=(0,u.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!1!==n.animation&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})((({theme:e,ownerState:t})=>{const n=(a=e.shape.borderRadius,String(a).match(/[\d.\-+]*\s*(.*)/)[1]||""||"px"),r=(o=e.shape.borderRadius,parseFloat(o));var o,a;return(0,i.Z)({display:"block",backgroundColor:(0,l.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${n}/${Math.round(r/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===t.variant&&{borderRadius:"50%"},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})}),(({ownerState:e})=>"pulse"===e.animation&&(0,s.iv)(g||(g=w`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),x)),(({ownerState:e,theme:t})=>"wave"===e.animation&&(0,s.iv)(b||(b=w`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(90deg, transparent, ${0}, transparent);
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),C,t.palette.action.hover))),E=o.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiSkeleton"}),{animation:o="pulse",className:s,component:l="span",height:u,style:f,variant:v="text",width:y}=n,g=(0,r.Z)(n,m),b=(0,i.Z)({},n,{animation:o,component:l,variant:v,hasChildren:Boolean(g.children)}),w=(e=>{const{classes:t,variant:n,animation:r,hasChildren:i,width:o,height:a}=e,s={root:["root",n,r,i&&"withChildren",i&&!o&&"fitContent",i&&!a&&"heightAuto"]};return(0,c.Z)(s,h,t)})(b);return(0,p.jsx)($,(0,i.Z)({as:l,ref:t,className:(0,a.Z)(w.root,s),ownerState:b},g,{style:(0,i.Z)({width:y,height:u},f)}))}))},86010:(e,t,n)=>{function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:()=>i})},69921:(e,t)=>{var n=60103,r=60106,i=60107,o=60108,a=60114,s=60109,c=60110,l=60112,u=60113,d=60120,f=60115,h=60116,p=60121,m=60122,v=60117,y=60129,g=60131;if("function"==typeof Symbol&&Symbol.for){var b=Symbol.for;n=b("react.element"),r=b("react.portal"),i=b("react.fragment"),o=b("react.strict_mode"),a=b("react.profiler"),s=b("react.provider"),c=b("react.context"),l=b("react.forward_ref"),u=b("react.suspense"),d=b("react.suspense_list"),f=b("react.memo"),h=b("react.lazy"),p=b("react.block"),m=b("react.server.block"),v=b("react.fundamental"),y=b("react.debug_trace_mode"),g=b("react.legacy_hidden")}function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case i:case a:case o:case u:case d:return e;default:switch(e=e&&e.$$typeof){case c:case l:case h:case f:case s:return e;default:return t}}case r:return t}}}var x=s,C=n,$=l,E=i,k=h,Z=f,S=r,M=a,F=o,R=u;t.ContextConsumer=c,t.ContextProvider=x,t.Element=C,t.ForwardRef=$,t.Fragment=E,t.Lazy=k,t.Memo=Z,t.Portal=S,t.Profiler=M,t.StrictMode=F,t.Suspense=R,t.isAsyncMode=function(){return!1},t.isConcurrentMode=function(){return!1},t.isContextConsumer=function(e){return w(e)===c},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===l},t.isFragment=function(e){return w(e)===i},t.isLazy=function(e){return w(e)===h},t.isMemo=function(e){return w(e)===f},t.isPortal=function(e){return w(e)===r},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===o},t.isSuspense=function(e){return w(e)===u},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===a||e===y||e===o||e===u||e===d||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===f||e.$$typeof===s||e.$$typeof===c||e.$$typeof===l||e.$$typeof===v||e.$$typeof===p||e[0]===m)},t.typeOf=w},59864:(e,t,n)=>{e.exports=n(69921)},94537:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(63366),i=n(87462),o=n(97326),a=n(51721),s=(n(45697),n(67294)),c=n(220);function l(e,t){var n=Object.create(null);return e&&s.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,s.isValidElement)(e)?t(e):e}(e)})),n}function u(e,t,n){return null!=n[t]?n[t]:e.props[t]}function d(e,t,n){var r=l(e.children),i=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),o=[];for(var a in e)a in t?o.length&&(i[a]=o,o=[]):o.push(a);var s={};for(var c in t){if(i[c])for(r=0;r<i[c].length;r++){var l=i[c][r];s[i[c][r]]=n(l)}s[c]=n(c)}for(r=0;r<o.length;r++)s[o[r]]=n(o[r]);return s}(t,r);return Object.keys(i).forEach((function(o){var a=i[o];if((0,s.isValidElement)(a)){var c=o in t,l=o in r,d=t[o],f=(0,s.isValidElement)(d)&&!d.props.in;!l||c&&!f?l||!c||f?l&&c&&(0,s.isValidElement)(d)&&(i[o]=(0,s.cloneElement)(a,{onExited:n.bind(null,a),in:d.props.in,exit:u(a,"exit",e),enter:u(a,"enter",e)})):i[o]=(0,s.cloneElement)(a,{in:!1}):i[o]=(0,s.cloneElement)(a,{onExited:n.bind(null,a),in:!0,exit:u(a,"exit",e),enter:u(a,"enter",e)})}})),i}var f=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},h=function(e){function t(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind((0,o.Z)(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,i=t.children,o=t.handleExited;return{children:t.firstRender?(n=e,r=o,l(n.children,(function(e){return(0,s.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:u(e,"appear",n),enter:u(e,"enter",n),exit:u(e,"exit",n)})}))):d(e,i,o),firstRender:!1}},n.handleExited=function(e,t){var n=l(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,i.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,i=(0,r.Z)(e,["component","childFactory"]),o=this.state.contextValue,a=f(this.state.children).map(n);return delete i.appear,delete i.enter,delete i.exit,null===t?s.createElement(c.Z.Provider,{value:o},a):s.createElement(c.Z.Provider,{value:o},s.createElement(t,i,a))},t}(s.Component);h.propTypes={},h.defaultProps={component:"div",childFactory:function(e){return e}};const p=h},220:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(67294).createContext(null)}}]);