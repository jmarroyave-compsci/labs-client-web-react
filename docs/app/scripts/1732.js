"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[1732],{41749:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(45987),i=n(87462),a=n(67294),s=(n(45697),n(86010)),o=n(14670),c=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var d=a.forwardRef((function(e,t){var n=e.alignContent,o=void 0===n?"stretch":n,c=e.alignItems,l=void 0===c?"stretch":c,f=e.classes,d=e.className,u=e.component,p=void 0===u?"div":u,m=e.container,x=void 0!==m&&m,g=e.direction,v=void 0===g?"row":g,h=e.item,y=void 0!==h&&h,w=e.justify,Z=e.justifyContent,C=void 0===Z?"flex-start":Z,b=e.lg,E=void 0!==b&&b,N=e.md,j=void 0!==N&&N,S=e.sm,k=void 0!==S&&S,I=e.spacing,R=void 0===I?0:I,W=e.wrap,D=void 0===W?"wrap":W,A=e.xl,L=void 0!==A&&A,z=e.xs,K=void 0!==z&&z,M=e.zeroMinWidth,O=void 0!==M&&M,$=(0,r.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),_=(0,s.Z)(f.root,d,x&&[f.container,0!==R&&f["spacing-xs-".concat(String(R))]],y&&f.item,O&&f.zeroMinWidth,"row"!==v&&f["direction-xs-".concat(String(v))],"wrap"!==D&&f["wrap-xs-".concat(String(D))],"stretch"!==l&&f["align-items-xs-".concat(String(l))],"stretch"!==o&&f["align-content-xs-".concat(String(o))],"flex-start"!==(w||C)&&f["justify-content-xs-".concat(String(w||C))],!1!==K&&f["grid-xs-".concat(String(K))],!1!==k&&f["grid-sm-".concat(String(k))],!1!==j&&f["grid-md-".concat(String(j))],!1!==E&&f["grid-lg-".concat(String(E))],!1!==L&&f["grid-xl-".concat(String(L))]);return a.createElement(p,(0,i.Z)({className:_,ref:t},$))}));const u=(0,o.Z)((function(e){return(0,i.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return c.forEach((function(t){var r=e.spacing(t);0!==r&&(n["spacing-".concat("xs","-").concat(t)]={margin:"-".concat(f(r,2)),width:"calc(100% + ".concat(f(r),")"),"& > $item":{padding:f(r,2)}})})),n}(e),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var r={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,i.Z)(e,r):e[t.breakpoints.up(n)]=r}(t,e,n),t}),{}))}),{name:"MuiGrid"})(d)},86688:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),i=n(72797);r.Component;const a=e=>class extends r.Component{render(){const t="title"in this.props?this.props.title:null,n="placeholder"in this.props?this.props.placeholder:{};return n.width&&n.width,n.height&&n.height,r.createElement(i.Z,{from:t,style:{width:"100%"}},r.createElement(e,this.props))}}},36776:(e,t,n)=>{n.d(t,{Z:()=>r});const r={links_disabled:!1}},80383:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),i=n(86688),a=n(41749);class s extends r.Component{render(){var{direction:e,spacing:t,className:n,justify:i,alignItems:s,style:o,flex:c}=this.props,t=t||0;return o=o||{},c&&(o.display="flex"),r.createElement(a.Z,{container:!0,direction:e,justifyContent:i,alignItems:s,className:n,spacing:t,style:o},this.props.children)}}const o=(0,i.Z)(s)},81648:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),i=n(86688),a=n(41749);class s extends r.Component{render(){var{visible:e,className:t,xs:n,sm:i,md:s,style:o,fill:c,flex:l,center:f}=this.props;e=e||!0;var d={...o};return(d=d||{textAlign:"inherit"}).textAlign=f?"center":d.textAlign,c&&(d.width="100%"),l&&(d.flex=1),e&&r.createElement(a.Z,{className:t,item:!0,xs:n,sm:i,md:s,style:d},this.props.children)}}const o=(0,i.Z)(s)},87558:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),i=n(73727),a=n(36776);class s extends r.Component{render(){var{children:e,className:t,to:n,href:s,style:o,external:c}=this.props;if(e=(n=(n=n||s)||"http://localhost")?e:"NO LINK DEFINED",o=o||{},n&&"string"!=typeof n)return"INVALID URL";const l=!((c=!0===c)||n&&0===n.indexOf("http")),f=l?"_self":"_blank";return 0==(0===n.indexOf("#"))&&1==l&&0==a.Z.links_disabled?r.createElement(i.OL,{className:t,to:n,style:o},e):r.createElement("a",{className:t,href:n,style:o,target:f},e)}}const o=s},97236:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),i=n(87558);n(36776);class a extends r.Component{render(){var{children:e,className:t,to:n,href:a,border:s,style:o,external:c}=this.props;return e=(n=(n=n||a)||"http://localhost")?e:"NO LINK DEFINED",s=!0===s||"true"===s?"text-link":"",(o=o||{}).padding=o.padding?o.padding:"0.5rem 0.75rem",t=`${s} ${t||""}`,c=!0===c,r.createElement(i.Z,{className:t,to:n,style:o,external:c},e)}}const s=a},21732:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(67294),i=n(80383),a=n(81648),s=n(97236);const o=function(e){const{data:t,loading:n}=e;return r.createElement("div",{style:{width:"100%"}},r.createElement(i.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},r.createElement(a.Z,{xs:12,sm:12,md:12},r.createElement("h1",null,"TV")),r.createElement(a.Z,{xs:12,sm:12,md:12}),r.createElement(a.Z,{xs:12,sm:12,md:12},r.createElement(s.Z,{border:!0,href:"/movies"}," See more"))))}},86010:(e,t,n)=>{function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:()=>i})},73727:(e,t,n)=>{n.d(t,{OL:()=>v});var r=n(5977),i=(n(51721),n(67294)),a=n(37531),s=(n(45697),n(87462)),o=n(63366),c=n(2177);i.Component,i.Component;var l=function(e,t){return"function"==typeof e?e(t):e},f=function(e,t){return"string"==typeof e?(0,a.ob)(e,null,null,t):e},d=function(e){return e},u=i.forwardRef;void 0===u&&(u=d);var p=u((function(e,t){var n=e.innerRef,r=e.navigate,a=e.onClick,c=(0,o.Z)(e,["innerRef","navigate","onClick"]),l=c.target,f=(0,s.Z)({},c,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||l&&"_self"!==l||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return f.ref=d!==u&&t||n,i.createElement("a",f)})),m=u((function(e,t){var n=e.component,m=void 0===n?p:n,x=e.replace,g=e.to,v=e.innerRef,h=(0,o.Z)(e,["component","replace","to","innerRef"]);return i.createElement(r.s6.Consumer,null,(function(e){e||(0,c.Z)(!1);var n=e.history,r=f(l(g,e.location),e.location),o=r?n.createHref(r):"",p=(0,s.Z)({},h,{href:o,navigate:function(){var t=l(g,e.location),r=(0,a.Ep)(e.location)===(0,a.Ep)(f(t));(x||r?n.replace:n.push)(t)}});return d!==u?p.ref=t||v:p.innerRef=v,i.createElement(m,p)}))})),x=function(e){return e},g=i.forwardRef;void 0===g&&(g=x);var v=g((function(e,t){var n=e["aria-current"],a=void 0===n?"page":n,d=e.activeClassName,u=void 0===d?"active":d,p=e.activeStyle,v=e.className,h=e.exact,y=e.isActive,w=e.location,Z=e.sensitive,C=e.strict,b=e.style,E=e.to,N=e.innerRef,j=(0,o.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.createElement(r.s6.Consumer,null,(function(e){e||(0,c.Z)(!1);var n=w||e.location,o=f(l(E,n),n),d=o.pathname,S=d&&d.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),k=S?(0,r.LX)(n.pathname,{path:S,exact:h,sensitive:Z,strict:C}):null,I=!!(y?y(k,n):k),R="function"==typeof v?v(I):v,W="function"==typeof b?b(I):b;I&&(R=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(R,u),W=(0,s.Z)({},W,p));var D=(0,s.Z)({"aria-current":I&&a||null,className:R,style:W,to:o},j);return x!==g?D.ref=t||N:D.innerRef=N,i.createElement(m,D)}))}))}}]);