/*! For license information please see 4367.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[4367,4906,5298],{71993:(e,t,n)=>{function r(e,t,n){const r={};return Object.keys(e).forEach((l=>{r[l]=e[l].reduce(((e,r)=>(r&&(n&&n[r]&&e.push(n[r]),e.push(t(r))),e)),[]).join(" ")})),r}n.d(t,{Z:()=>r})},15773:(e,t,n)=>{n.d(t,{Z:()=>l});const r={active:"Mui-active",checked:"Mui-checked",completed:"Mui-completed",disabled:"Mui-disabled",error:"Mui-error",expanded:"Mui-expanded",focused:"Mui-focused",focusVisible:"Mui-focusVisible",required:"Mui-required",selected:"Mui-selected"};function l(e,t){return r[t]||`${e}-${t}`}},88858:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(15773);function l(e,t){const n={};return t.forEach((t=>{n[t]=(0,r.Z)(e,t)})),n}},71713:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(83528),l=n(35754);const s=(0,r.Z)(),a=function(e=s){return(0,l.Z)(e)}},35754:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294);const l=r.createContext(null),s=function(e=null){const t=r.useContext(l);return t&&(n=t,0!==Object.keys(n).length)?t:e;var n}},5609:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(87462),l=n(71713);var s=n(15423);function a({props:e,name:t}){return function({props:e,name:t,defaultTheme:n}){const s=function(e){const{theme:t,name:n,props:l}=e;if(!(t&&t.components&&t.components[n]&&t.components[n].defaultProps))return l;const s=(0,r.Z)({},l),a=t.components[n].defaultProps;let o;for(o in a)void 0===s[o]&&(s[o]=a[o]);return s}({theme:(0,l.Z)(n),name:t,props:e});return s}({props:e,name:t,defaultTheme:s.Z})}},86688:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),l=n(72797);r.Component;const s=e=>class extends r.Component{render(){const t="title"in this.props?this.props.title:null,n="placeholder"in this.props?this.props.placeholder:{};return n.width&&n.width,n.height&&n.height,r.createElement(l.Z,{from:t,style:{width:"100%"}},r.createElement(e,this.props))}}},36776:(e,t,n)=>{n.d(t,{Z:()=>r});const r={links_disabled:!1}},93268:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),l=n(20735);function s(e){return r.createElement(l.Z,null,e.children)}},80383:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),l=n(86688),s=n(41749);class a extends r.Component{render(){var{direction:e,spacing:t,className:n,justify:l,alignItems:a,style:o,flex:i}=this.props,t=t||0;return o=o||{},i&&(o.display="flex"),r.createElement(s.Z,{container:!0,direction:e,justifyContent:l,alignItems:a,className:n,spacing:t,style:o},this.props.children)}}const o=(0,l.Z)(a)},81648:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),l=n(86688),s=n(41749);class a extends r.Component{render(){var{visible:e,className:t,xs:n,sm:l,md:a,style:o,fill:i,flex:c,center:d}=this.props;e=e||!0;var m={...o};return(m=m||{textAlign:"inherit"}).textAlign=d?"center":m.textAlign,i&&(m.width="100%"),c&&(m.flex=1),e&&r.createElement(s.Z,{className:t,item:!0,xs:n,sm:l,md:a,style:m},this.props.children)}}const o=(0,l.Z)(a)},83347:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),l=n(12613),s=n(86688);class a extends r.Component{render(){var{xs:e,sm:t,md:n,lg:s,xl:a}=this.props;return e=e||null,t=t||e,n=n||t,s=s||n,a=a||s,r.createElement("div",{style:{width:"100%"}},r.createElement(l.Z,{only:["sm","md","lg","xl"]},e),r.createElement(l.Z,{only:["xs","md","lg","xl"]},t),r.createElement(l.Z,{only:["xs","sm","lg","xl"]},n),r.createElement(l.Z,{only:["xs","sm","md","xl"]},s),r.createElement(l.Z,{only:["xs","sm","md","lg"]},a))}}const o=(0,s.Z)(a)},87558:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),l=n(73727),s=n(36776);class a extends r.Component{render(){var{children:e,className:t,to:n,href:a,style:o,external:i}=this.props;if(e=(n=(n=n||a)||"http://localhost")?e:"NO LINK DEFINED",o=o||{},n&&"string"!=typeof n)return"INVALID URL";const c=!((i=!0===i)||n&&0===n.indexOf("http")),d=c?"_self":"_blank";return 0==(0===n.indexOf("#"))&&1==c&&0==s.Z.links_disabled?r.createElement(l.OL,{className:t,to:n,style:o},e):r.createElement("a",{className:t,href:n,style:o,target:d},e)}}const o=a},97236:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),l=n(87558);n(36776);class s extends r.Component{render(){var{children:e,className:t,to:n,href:s,border:a,style:o,external:i}=this.props;return e=(n=(n=n||s)||"http://localhost")?e:"NO LINK DEFINED",a=!0===a||"true"===a?"text-link":"",(o=o||{}).padding=o.padding?o.padding:"0.5rem 0.75rem",t=`${a} ${t||""}`,i=!0===i,r.createElement(l.Z,{className:t,to:n,style:o,external:i},e)}}const a=s},57514:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var r=n(67294),l=n(80383),s=n(81648),a=n(87125),o=n(93775),i=n(20735);class c extends r.Component{render(){const{data:e,loading:t}=this.props,{total:n,awards:c,classification:d,country:m,genre:u,type:p,rating:f,yearReleased:h,streamBy:g}=e||{},v=(e,n,l)=>r.createElement(s.Z,{xs:12,sm:6,md:6,lg:4,style:{paddingRight:"1rem"}},r.createElement(a.default,{loading:t,title:e,data:n?n.toString():n,icon:l})),y=(e,n,l)=>r.createElement(s.Z,{xs:12,sm:6,md:6,lg:6,style:{paddingRight:"1rem"}},r.createElement(o.default,{loading:t,title:e,data:n||{},ranges:l}));return r.createElement(i.Z,{spacing:2},r.createElement("h1",null,"general"),r.createElement(l.Z,{justifyContent:"center",fill:!0},v("movies",n,"local_movies")),r.createElement("h1",null,"segments"),r.createElement(l.Z,{justifyContent:"center",fill:!0},y("by type",p,[25e3,5e4]),y("by genre",u,[1e3,25e3,5e4,75e3,1e4,25e4]),y("from",m,[1,5,10,50,100]),y("released",h,[1e4,25e3,5e4,1e5])),r.createElement("h1",null,"awards"),r.createElement(l.Z,{justifyContent:"center",fill:!0},y("nominees",c,[])),r.createElement("h1",null,"ratings"),r.createElement(l.Z,{justifyContent:"center",fill:!0},v("imdb",f?f.imdb:null,"local_movies")),r.createElement("h1",null,"stream"),r.createElement(l.Z,{justifyContent:"center",fill:!0},v("netflix",g?g.netflix:null,"local_movies")))}}const d=c},5645:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r=n(61494).default},13980:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var r=n(67294),l=n(93268),s=n(80383),a=n(81648),o=n(57514),i=n(61400);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}const d=function(e){return r.createElement(l.Z,null,r.createElement(s.Z,{className:"page-module",fill:!0},r.createElement(a.Z,{xs:12,sm:12,md:9,lg:10,style:{paddingRight:"1rem"}},r.createElement(o.default,e)),r.createElement(a.Z,{xs:12,sm:12,md:3,lg:2,style:{paddingRight:"1rem"}},r.createElement(i.default,c({},e,{filter:"movies"})))))}},18601:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(67294),l=n(93268),s=n(57514),a=n(61400);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const i=function(e){return r.createElement(l.Z,null,r.createElement(s.default,e),r.createElement(a.default,o({},e,{filter:"movies"})))}},61494:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(67294),l=n(83347),s=n(18601),a=n(13980);function o(e){return r.createElement(l.Z,{xs:r.createElement(s.default,e),md:r.createElement(a.default,e)})}},61400:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(67294),l=n(91380),s=n(75298),a=n(36501),o=n(97236);const i=(0,l.ZP)("div")({padding:"0.85rem"}),c=(0,l.ZP)("div")({fontSize:"1.5rem",paddingBottom:"0.5rem"}),d=(0,l.ZP)("div")({fontSize:"0.9rem"}),m=function(e){const{filter:t}=e,n=s.default.getBy(t);return r.createElement(a.Z,null,r.createElement(i,null,r.createElement(c,null,"Stories"),n.map(((e,t)=>r.createElement(d,{key:t},r.createElement(o.Z,{href:e.url},e.title))))))}},75298:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});const r=[{id:"movies",title:"Movies",url:"/movies",tags:["tv","awards"]},{id:"awards",title:"Awards",url:"/stories/awards",tags:["movies","people","tv"]},{id:"people",title:"People",url:"/people",tags:["awards"]},{id:"podcasts",title:"Podcasts",url:"/podcasts",tags:["podcasts"]},{id:"podcast_music",title:"Music Podcasts",url:"/podcasts/stories/music",tags:["podcasts"]},{id:"tv",title:"TV",url:"/tv",tags:["movies","awards"]}],l=new class{constructor(){}getBy(e){const t=[];return r.forEach((n=>{n.id!==e&&n.tags.includes(e)&&t.push(n)})),t}}},75251:(e,t,n)=>{var r=n(67294),l=60103;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;l=s("react.element"),s("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,s={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,r)&&!i.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:l,type:e,key:c,ref:d,props:s,_owner:a.current}}t.jsx=c,t.jsxs=c},85893:(e,t,n)=>{e.exports=n(75251)}}]);