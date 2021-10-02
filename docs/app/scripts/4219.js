/*! For license information please see 4219.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[4219,5298],{41749:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(45987),s=n(87462),a=n(67294),i=(n(45697),n(86010)),o=n(14670),c=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var u=a.forwardRef((function(e,t){var n=e.alignContent,o=void 0===n?"stretch":n,c=e.alignItems,l=void 0===c?"stretch":c,d=e.classes,u=e.className,p=e.component,m=void 0===p?"div":p,f=e.container,g=void 0!==f&&f,x=e.direction,h=void 0===x?"row":x,v=e.item,y=void 0!==v&&v,Z=e.justify,w=e.justifyContent,E=void 0===w?"flex-start":w,b=e.lg,C=void 0!==b&&b,j=e.md,S=void 0!==j&&j,N=e.sm,_=void 0!==N&&N,k=e.spacing,M=void 0===k?0:k,O=e.wrap,I=void 0===O?"wrap":O,P=e.xl,W=void 0!==P&&P,R=e.xs,D=void 0!==R&&R,z=e.zeroMinWidth,L=void 0!==z&&z,T=(0,r.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),B=(0,i.Z)(d.root,u,g&&[d.container,0!==M&&d["spacing-xs-".concat(String(M))]],y&&d.item,L&&d.zeroMinWidth,"row"!==h&&d["direction-xs-".concat(String(h))],"wrap"!==I&&d["wrap-xs-".concat(String(I))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==o&&d["align-content-xs-".concat(String(o))],"flex-start"!==(Z||E)&&d["justify-content-xs-".concat(String(Z||E))],!1!==D&&d["grid-xs-".concat(String(D))],!1!==_&&d["grid-sm-".concat(String(_))],!1!==S&&d["grid-md-".concat(String(S))],!1!==C&&d["grid-lg-".concat(String(C))],!1!==W&&d["grid-xl-".concat(String(W))]);return a.createElement(m,(0,s.Z)({className:B,ref:t},T))}));const p=(0,o.Z)((function(e){return(0,s.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return c.forEach((function(t){var r=e.spacing(t);0!==r&&(n["spacing-".concat("xs","-").concat(t)]={margin:"-".concat(d(r,2)),width:"calc(100% + ".concat(d(r),")"),"& > $item":{padding:d(r,2)}})})),n}(e),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var r={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var s="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:s,flexGrow:0,maxWidth:s}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,s.Z)(e,r):e[t.breakpoints.up(n)]=r}(t,e,n),t}),{}))}),{name:"MuiGrid"})(u)},71993:(e,t,n)=>{function r(e,t,n){const r={};return Object.keys(e).forEach((s=>{r[s]=e[s].reduce(((e,r)=>(r&&(n&&n[r]&&e.push(n[r]),e.push(t(r))),e)),[]).join(" ")})),r}n.d(t,{Z:()=>r})},15773:(e,t,n)=>{n.d(t,{Z:()=>s});const r={active:"Mui-active",checked:"Mui-checked",completed:"Mui-completed",disabled:"Mui-disabled",error:"Mui-error",expanded:"Mui-expanded",focused:"Mui-focused",focusVisible:"Mui-focusVisible",required:"Mui-required",selected:"Mui-selected"};function s(e,t){return r[t]||`${e}-${t}`}},88858:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(15773);function s(e,t){const n={};return t.forEach((t=>{n[t]=(0,r.Z)(e,t)})),n}},71713:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(83528),s=n(35754);const a=(0,r.Z)(),i=function(e=a){return(0,s.Z)(e)}},35754:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);const s=r.createContext(null),a=function(e=null){const t=r.useContext(s);return t&&(n=t,0!==Object.keys(n).length)?t:e;var n}},5609:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(87462),s=n(71713);var a=n(15423);function i({props:e,name:t}){return function({props:e,name:t,defaultTheme:n}){const a=function(e){const{theme:t,name:n,props:s}=e;if(!(t&&t.components&&t.components[n]&&t.components[n].defaultProps))return s;const a=(0,r.Z)({},s),i=t.components[n].defaultProps;let o;for(o in i)void 0===a[o]&&(a[o]=i[o]);return a}({theme:(0,s.Z)(n),name:t,props:e});return a}({props:e,name:t,defaultTheme:a.Z})}},86688:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),s=n(72797);r.Component;const a=e=>class extends r.Component{render(){const t="title"in this.props?this.props.title:null,n="placeholder"in this.props?this.props.placeholder:{};return n.width&&n.width,n.height&&n.height,r.createElement(s.Z,{from:t,style:{width:"100%"}},r.createElement(e,this.props))}}},36776:(e,t,n)=>{n.d(t,{Z:()=>r});const r={links_disabled:!1}},93268:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),s=n(20735);function a(e){return r.createElement(s.Z,null,e.children)}},80383:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),s=n(86688),a=n(41749);class i extends r.Component{render(){var{direction:e,spacing:t,className:n,justify:s,alignItems:i,style:o,flex:c}=this.props,t=t||0;return o=o||{},c&&(o.display="flex"),r.createElement(a.Z,{container:!0,direction:e,justifyContent:s,alignItems:i,className:n,spacing:t,style:o},this.props.children)}}const o=(0,s.Z)(i)},81648:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),s=n(86688),a=n(41749);class i extends r.Component{render(){var{visible:e,className:t,xs:n,sm:s,md:i,style:o,fill:c,flex:l,center:d}=this.props;e=e||!0;var u={...o};return(u=u||{textAlign:"inherit"}).textAlign=d?"center":u.textAlign,c&&(u.width="100%"),l&&(u.flex=1),e&&r.createElement(a.Z,{className:t,item:!0,xs:n,sm:s,md:i,style:u},this.props.children)}}const o=(0,s.Z)(i)},87558:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),s=n(73727),a=n(36776);class i extends r.Component{render(){var{children:e,className:t,to:n,href:i,style:o,external:c}=this.props;if(e=(n=(n=n||i)||"http://localhost")?e:"NO LINK DEFINED",o=o||{},n&&"string"!=typeof n)return"INVALID URL";const l=!((c=!0===c)||n&&0===n.indexOf("http")),d=l?"_self":"_blank";return 0==(0===n.indexOf("#"))&&1==l&&0==a.Z.links_disabled?r.createElement(s.OL,{className:t,to:n,style:o},e):r.createElement("a",{className:t,href:n,style:o,target:d},e)}}const o=i},97236:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),s=n(87558);n(36776);class a extends r.Component{render(){var{children:e,className:t,to:n,href:a,border:i,style:o,external:c}=this.props;return e=(n=(n=n||a)||"http://localhost")?e:"NO LINK DEFINED",i=!0===i||"true"===i?"text-link":"",(o=o||{}).padding=o.padding?o.padding:"0.5rem 0.75rem",t=`${i} ${t||""}`,c=!0===c,r.createElement(s.Z,{className:t,to:n,style:o,external:c},e)}}const i=a},2052:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=n(67294),s=n(80383),a=n(81648),i=n(87125),o=n(93775),c=n(20735);const l=function(e){const{data:t,loading:n,route:l}=e,{total:d,category:u,language:p,yearCreated:m}=t||{},f=(e,t,s)=>r.createElement(a.Z,{xs:12,sm:6,md:6,lg:6,style:{paddingRight:"1rem"}},r.createElement(o.default,{loading:n,title:e,data:t||{},ranges:s}));return r.createElement(c.Z,{spacing:2},r.createElement("h1",null,"general"),r.createElement(s.Z,{justifyContent:"center",fill:!0},((e,t,s)=>r.createElement(a.Z,{xs:12,sm:6,md:4,lg:3,style:{paddingRight:"1rem"}},r.createElement(i.default,{loading:n,title:"podcasts",data:t?t.toString():t,icon:"podcasts"})))(0,d)),r.createElement("h1",null,"segments"),r.createElement(s.Z,{justifyContent:"center",fill:!0},f("category",u,[10,100,250]),f("language",p,[10,100]),f("created",m,[])))}},47328:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var r=n(67294),s=n(93268),a=n(80383),i=n(81648),o=n(2052),c=n(61400);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}const d=function(e){return r.createElement(s.Z,null,r.createElement(a.Z,{className:"page-module",fill:!0},r.createElement(i.Z,{xs:12,sm:12,md:9,lg:10,style:{paddingRight:"1rem"}},r.createElement(o.default,e)),r.createElement(i.Z,{xs:12,sm:12,md:3,lg:2,style:{paddingRight:"1rem"}},r.createElement(c.default,l({},e,{filter:"podcasts"})))))}},61400:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(67294),s=n(91380),a=n(75298),i=n(36501),o=n(97236);const c=(0,s.ZP)("div")({padding:"0.85rem"}),l=(0,s.ZP)("div")({fontSize:"1.5rem",paddingBottom:"0.5rem"}),d=(0,s.ZP)("div")({fontSize:"0.9rem"}),u=function(e){const{filter:t}=e,n=a.default.getBy(t);return r.createElement(i.Z,null,r.createElement(c,null,r.createElement(l,null,"Stories"),n.map(((e,t)=>r.createElement(d,{key:t},r.createElement(o.Z,{href:e.url},e.title))))))}},75298:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const r=[{id:"movies",title:"Movies",url:"/movies",tags:["tv","awards"]},{id:"awards",title:"Awards",url:"/stories/awards",tags:["movies","people","tv"]},{id:"people",title:"People",url:"/people",tags:["awards"]},{id:"podcasts",title:"Podcasts",url:"/podcasts",tags:["podcasts"]},{id:"podcast_music",title:"Music Podcasts",url:"/podcasts/stories/music",tags:["podcasts"]},{id:"tv",title:"TV",url:"/tv",tags:["movies","awards"]}],s=new class{constructor(){}getBy(e){const t=[];return r.forEach((n=>{n.id!==e&&n.tags.includes(e)&&t.push(n)})),t}}},75251:(e,t,n)=>{var r=n(67294),s=60103;if("function"==typeof Symbol&&Symbol.for){var a=Symbol.for;s=a("react.element"),a("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,a={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:s,type:e,key:l,ref:d,props:a,_owner:i.current}}t.jsx=l,t.jsxs=l},85893:(e,t,n)=>{e.exports=n(75251)}}]);