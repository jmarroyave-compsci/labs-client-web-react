/*! For license information please see 2715.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[2715],{93871:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(60288);function i(e){if("string"!=typeof e)throw new Error((0,r.Z)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},28973:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(63366),i=n(87462),a=n(67294),o=n(86010),l=(n(45697),n(25258)),s=n(71993);var c=n(94581),u=n(91380),h=n(5609),d=n(15773);function p(e){return(0,d.Z)("MuiSkeleton",e)}(0,n(88858).Z)("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var f=n(85893);const m=["animation","className","component","height","style","variant","width"];let v,y,g,b,w=e=>e;const x=(0,l.F4)(v||(v=w`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),$=(0,l.F4)(y||(y=w`
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
`)),E=(0,u.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!1!==n.animation&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})((({theme:e,ownerState:t})=>{const n=(o=e.shape.borderRadius,String(o).match(/[\d.\-+]*\s*(.*)/)[1]||""||"px"),r=(a=e.shape.borderRadius,parseFloat(a));var a,o;return(0,i.Z)({display:"block",backgroundColor:(0,c.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${n}/${Math.round(r/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===t.variant&&{borderRadius:"50%"},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})}),(({ownerState:e})=>"pulse"===e.animation&&(0,l.iv)(g||(g=w`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),x)),(({ownerState:e,theme:t})=>"wave"===e.animation&&(0,l.iv)(b||(b=w`
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
    `),$,t.palette.action.hover))),k=a.forwardRef((function(e,t){const n=(0,h.Z)({props:e,name:"MuiSkeleton"}),{animation:a="pulse",className:l,component:c="span",height:u,style:d,variant:v="text",width:y}=n,g=(0,r.Z)(n,m),b=(0,i.Z)({},n,{animation:a,component:c,variant:v,hasChildren:Boolean(g.children)}),w=(e=>{const{classes:t,variant:n,animation:r,hasChildren:i,width:a,height:o}=e,l={root:["root",n,r,i&&"withChildren",i&&!a&&"fitContent",i&&!o&&"heightAuto"]};return(0,s.Z)(l,p,t)})(b);return(0,f.jsx)(E,(0,i.Z)({as:c,ref:t,className:(0,o.Z)(w.root,l),ownerState:b},g,{style:(0,i.Z)({width:y,height:u},d)}))}))},69921:(e,t)=>{var n=60103,r=60106,i=60107,a=60108,o=60114,l=60109,s=60110,c=60112,u=60113,h=60120,d=60115,p=60116,f=60121,m=60122,v=60117,y=60129,g=60131;if("function"==typeof Symbol&&Symbol.for){var b=Symbol.for;n=b("react.element"),r=b("react.portal"),i=b("react.fragment"),a=b("react.strict_mode"),o=b("react.profiler"),l=b("react.provider"),s=b("react.context"),c=b("react.forward_ref"),u=b("react.suspense"),h=b("react.suspense_list"),d=b("react.memo"),p=b("react.lazy"),f=b("react.block"),m=b("react.server.block"),v=b("react.fundamental"),y=b("react.debug_trace_mode"),g=b("react.legacy_hidden")}t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===o||e===y||e===a||e===u||e===h||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===d||e.$$typeof===l||e.$$typeof===s||e.$$typeof===c||e.$$typeof===v||e.$$typeof===f||e[0]===m)},t.typeOf=function(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case i:case o:case a:case u:case h:return e;default:switch(e=e&&e.$$typeof){case s:case c:case p:case d:case l:return e;default:return t}}case r:return t}}}},59864:(e,t,n)=>{e.exports=n(69921)},94537:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(63366),i=n(87462),a=n(97326),o=n(51721),l=(n(45697),n(67294)),s=n(220);function c(e,t){var n=Object.create(null);return e&&l.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,l.isValidElement)(e)?t(e):e}(e)})),n}function u(e,t,n){return null!=n[t]?n[t]:e.props[t]}function h(e,t,n){var r=c(e.children),i=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),a=[];for(var o in e)o in t?a.length&&(i[o]=a,a=[]):a.push(o);var l={};for(var s in t){if(i[s])for(r=0;r<i[s].length;r++){var c=i[s][r];l[i[s][r]]=n(c)}l[s]=n(s)}for(r=0;r<a.length;r++)l[a[r]]=n(a[r]);return l}(t,r);return Object.keys(i).forEach((function(a){var o=i[a];if((0,l.isValidElement)(o)){var s=a in t,c=a in r,h=t[a],d=(0,l.isValidElement)(h)&&!h.props.in;!c||s&&!d?c||!s||d?c&&s&&(0,l.isValidElement)(h)&&(i[a]=(0,l.cloneElement)(o,{onExited:n.bind(null,o),in:h.props.in,exit:u(o,"exit",e),enter:u(o,"enter",e)})):i[a]=(0,l.cloneElement)(o,{in:!1}):i[a]=(0,l.cloneElement)(o,{onExited:n.bind(null,o),in:!0,exit:u(o,"exit",e),enter:u(o,"enter",e)})}})),i}var d=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},p=function(e){function t(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind((0,a.Z)(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,o.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,i=t.children,a=t.handleExited;return{children:t.firstRender?(n=e,r=a,c(n.children,(function(e){return(0,l.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:u(e,"appear",n),enter:u(e,"enter",n),exit:u(e,"exit",n)})}))):h(e,i,a),firstRender:!1}},n.handleExited=function(e,t){var n=c(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,i.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,i=(0,r.Z)(e,["component","childFactory"]),a=this.state.contextValue,o=d(this.state.children).map(n);return delete i.appear,delete i.enter,delete i.exit,null===t?l.createElement(s.Z.Provider,{value:a},o):l.createElement(s.Z.Provider,{value:a},l.createElement(t,i,o))},t}(l.Component);p.propTypes={},p.defaultProps={component:"div",childFactory:function(e){return e}};const f=p},220:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(67294).createContext(null)}}]);