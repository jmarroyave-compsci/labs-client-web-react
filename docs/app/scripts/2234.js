"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[2234,5298],{41749:(e,t,n)=>{n.d(t,{Z:()=>p});var s=n(45987),r=n(87462),a=n(67294),i=(n(45697),n(86010)),o=n(14670),l=[0,1,2,3,4,5,6,7,8,9,10],c=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var m=a.forwardRef((function(e,t){var n=e.alignContent,o=void 0===n?"stretch":n,l=e.alignItems,c=void 0===l?"stretch":l,d=e.classes,m=e.className,p=e.component,u=void 0===p?"div":p,f=e.container,g=void 0!==f&&f,x=e.direction,h=void 0===x?"row":x,v=e.item,y=void 0!==v&&v,w=e.justify,Z=e.justifyContent,E=void 0===Z?"flex-start":Z,C=e.lg,b=void 0!==C&&C,j=e.md,N=void 0!==j&&j,S=e.sm,I=void 0!==S&&S,k=e.spacing,W=void 0===k?0:k,z=e.wrap,D=void 0===z?"wrap":z,M=e.xl,O=void 0!==M&&M,P=e.xs,B=void 0!==P&&P,A=e.zeroMinWidth,L=void 0!==A&&A,_=(0,s.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),G=(0,i.Z)(d.root,m,g&&[d.container,0!==W&&d["spacing-xs-".concat(String(W))]],y&&d.item,L&&d.zeroMinWidth,"row"!==h&&d["direction-xs-".concat(String(h))],"wrap"!==D&&d["wrap-xs-".concat(String(D))],"stretch"!==c&&d["align-items-xs-".concat(String(c))],"stretch"!==o&&d["align-content-xs-".concat(String(o))],"flex-start"!==(w||E)&&d["justify-content-xs-".concat(String(w||E))],!1!==B&&d["grid-xs-".concat(String(B))],!1!==I&&d["grid-sm-".concat(String(I))],!1!==N&&d["grid-md-".concat(String(N))],!1!==b&&d["grid-lg-".concat(String(b))],!1!==O&&d["grid-xl-".concat(String(O))]);return a.createElement(u,(0,r.Z)({className:G,ref:t},_))}));const p=(0,o.Z)((function(e){return(0,r.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return l.forEach((function(t){var s=e.spacing(t);0!==s&&(n["spacing-".concat("xs","-").concat(t)]={margin:"-".concat(d(s,2)),width:"calc(100% + ".concat(d(s),")"),"& > $item":{padding:d(s,2)}})})),n}(e),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var s={};c.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");s[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else s[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else s[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,r.Z)(e,s):e[t.breakpoints.up(n)]=s}(t,e,n),t}),{}))}),{name:"MuiGrid"})(m)},86688:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(67294),r=n(72797);s.Component;const a=e=>class extends s.Component{render(){const t="title"in this.props?this.props.title:null,n="placeholder"in this.props?this.props.placeholder:{};return n.width&&n.width,n.height&&n.height,s.createElement(r.Z,{from:t,style:{width:"100%"}},s.createElement(e,this.props))}}},36776:(e,t,n)=>{n.d(t,{Z:()=>s});const s={links_disabled:!1}},93268:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(67294),r=n(20735);function a(e){return s.createElement(r.Z,null,e.children)}},80383:(e,t,n)=>{n.d(t,{Z:()=>o});var s=n(67294),r=n(86688),a=n(41749);class i extends s.Component{render(){var{direction:e,spacing:t,className:n,justify:r,alignItems:i,style:o,flex:l}=this.props,t=t||0;return o=o||{},l&&(o.display="flex"),s.createElement(a.Z,{container:!0,direction:e,justifyContent:r,alignItems:i,className:n,spacing:t,style:o},this.props.children)}}const o=(0,r.Z)(i)},81648:(e,t,n)=>{n.d(t,{Z:()=>o});var s=n(67294),r=n(86688),a=n(41749);class i extends s.Component{render(){var{visible:e,className:t,xs:n,sm:r,md:i,style:o,fill:l,flex:c,center:d}=this.props;e=e||!0;var m={...o};return(m=m||{textAlign:"inherit"}).textAlign=d?"center":m.textAlign,l&&(m.width="100%"),c&&(m.flex=1),e&&s.createElement(a.Z,{className:t,item:!0,xs:n,sm:r,md:i,style:m},this.props.children)}}const o=(0,r.Z)(i)},87558:(e,t,n)=>{n.d(t,{Z:()=>o});var s=n(67294),r=n(73727),a=n(36776);class i extends s.Component{render(){var{children:e,className:t,to:n,href:i,style:o,external:l}=this.props;if(e=(n=(n=n||i)||"http://localhost")?e:"NO LINK DEFINED",o=o||{},n&&"string"!=typeof n)return"INVALID URL";const c=!((l=!0===l)||n&&0===n.indexOf("http")),d=c?"_self":"_blank";return 0==(0===n.indexOf("#"))&&1==c&&0==a.Z.links_disabled?s.createElement(r.OL,{className:t,to:n,style:o},e):s.createElement("a",{className:t,href:n,style:o,target:d},e)}}const o=i},97236:(e,t,n)=>{n.d(t,{Z:()=>i});var s=n(67294),r=n(87558);n(36776);class a extends s.Component{render(){var{children:e,className:t,to:n,href:a,border:i,style:o,external:l}=this.props;return e=(n=(n=n||a)||"http://localhost")?e:"NO LINK DEFINED",i=!0===i||"true"===i?"text-link":"",(o=o||{}).padding=o.padding?o.padding:"0.5rem 0.75rem",t=`${i} ${t||""}`,l=!0===l,s.createElement(r.Z,{className:t,to:n,style:o,external:l},e)}}const i=a},89921:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var s=n(67294),r=n(80383),a=n(81648),i=n(63560);class o extends s.Component{render(){const{data:e,loading:t}=this.props;return s.createElement("div",{style:{width:"100%"}},s.createElement(r.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},s.createElement(a.Z,{xs:12,sm:12,md:12},s.createElement(r.Z,{justifyContent:"center",fill:!0},s.createElement(i.default,{data:e})))))}}const l=o},95479:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var s=n(67294),r=n(93268),a=n(80383),i=n(81648),o=n(89921),l=n(61400);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},c.apply(this,arguments)}const d=function(e){return s.createElement(r.Z,null,s.createElement(a.Z,{className:"page-module",fill:!0},s.createElement(i.Z,{xs:12,sm:12,md:9,lg:10,style:{paddingRight:"1rem"}},s.createElement(o.default,e)),s.createElement(i.Z,{xs:12,sm:12,md:3,lg:2,style:{paddingRight:"1rem"}},s.createElement(l.default,c({},e,{filter:"movies"})))))}},61400:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var s=n(67294),r=n(91380),a=n(75298),i=n(36501),o=n(97236);const l=(0,r.ZP)("div")({padding:"0.85rem"}),c=(0,r.ZP)("div")({fontSize:"1.5rem",paddingBottom:"0.5rem"}),d=(0,r.ZP)("div")({fontSize:"0.9rem"}),m=function(e){const{filter:t}=e,n=a.default.getBy(t);return s.createElement(i.Z,null,s.createElement(l,null,s.createElement(c,null,"Stories"),n.map(((e,t)=>s.createElement(d,{key:t},s.createElement(o.Z,{href:e.url},e.title))))))}},75298:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const s=[{id:"movies",title:"Movies",url:"/movies",tags:["tv","awards"]},{id:"awards",title:"Awards",url:"/stories/awards",tags:["movies","people","tv"]},{id:"people",title:"People",url:"/people",tags:["awards"]},{id:"podcasts",title:"Podcasts",url:"/podcasts",tags:["podcasts"]},{id:"podcast_music",title:"Music Podcasts",url:"/podcasts/stories/music",tags:["podcasts"]},{id:"tv",title:"TV",url:"/tv",tags:["movies","awards"]}],r=new class{constructor(){}getBy(e){const t=[];return s.forEach((n=>{n.id!==e&&n.tags.includes(e)&&t.push(n)})),t}}}}]);