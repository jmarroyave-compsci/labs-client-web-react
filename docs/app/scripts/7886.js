"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[7886],{40351:(e,t,r)=>{r.d(t,{Z:()=>n});const n={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}},86688:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(72797);n.Component;const l=e=>class extends n.Component{render(){const t="title"in this.props?this.props.title:null,r="placeholder"in this.props?this.props.placeholder:{};return r.width&&r.width,r.height&&r.height,n.createElement(a.Z,{from:t,style:{width:"100%"}},n.createElement(e,this.props))}}},19976:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=(r(45697),r(19119)),l=r(34902);class s extends n.Component{getDate(e){try{if(!e||null==e||""===e||0==e.length)return new Date;if(e instanceof Date)return new Date(e);const t=Number(e);return Number.isInteger(t)?new Date(t):new Date(e)}catch(e){return new Date}}_format(e,t,r){switch(r){case"ago":return(0,a.Z)(t,new Date);case"DD/MM/YYYY":return(0,l.Z)(t,"dd/MM/yy");default:return(0,l.Z)(t,r)}}render(){var{lang:e,value:t,className:r}=this.props;e=e||"en";const a=this.props.format?this.props.format:"ago",l=this.getDate(t),s=this._format(e,l,a);return n.createElement("span",{className:r},s)}}const i=s},93013:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}class l extends n.Component{render(){var{src:e,width:t,height:r,style:l,notFound:s}=this.props,i={};return s&&(i.ref=e=>this.img=e,i.onError=()=>s&&this.img.src!=s?this.img.src=s:null),n.createElement("img",a({},i,{style:l,width:t,height:r,src:e}))}}const s=l},80383:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(86688),l=r(41749);class s extends n.Component{render(){var{direction:e,spacing:t,className:r,justify:a,alignItems:s,style:i,flex:o}=this.props,t=t||0;return i=i||{},o&&(i.display="flex"),n.createElement(l.Z,{container:!0,direction:e,justifyContent:a,alignItems:s,className:r,spacing:t,style:i},this.props.children)}}const i=(0,a.Z)(s)},81648:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(86688),l=r(41749);class s extends n.Component{render(){var{visible:e,className:t,xs:r,sm:a,md:s,style:i,fill:o,flex:c,center:m}=this.props;e=e||!0;var d={...i};return(d=d||{textAlign:"inherit"}).textAlign=m?"center":d.textAlign,o&&(d.width="100%"),c&&(d.flex=1),e&&n.createElement(l.Z,{className:t,item:!0,xs:r,sm:a,md:s,style:d},this.props.children)}}const i=(0,a.Z)(s)},83347:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(12613),l=r(86688);class s extends n.Component{render(){var{xs:e,sm:t,md:r,lg:l,xl:s}=this.props;return e=e||null,t=t||e,r=r||t,l=l||r,s=s||l,n.createElement("div",{style:{width:"100%"}},n.createElement(a.Z,{only:["sm","md","lg","xl"]},e),n.createElement(a.Z,{only:["xs","md","lg","xl"]},t),n.createElement(a.Z,{only:["xs","sm","lg","xl"]},r),n.createElement(a.Z,{only:["xs","sm","md","xl"]},l),n.createElement(a.Z,{only:["xs","sm","md","lg"]},s))}}const i=(0,l.Z)(s)},91534:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(83347),l=r(86688),s=r(72797);class i extends n.Component{render(){var{className:e,cover:t,padding:r,children:l,hero:s,rounded:i}=this.props,o=!0===t?"100vh":"inherit";return i=!0===i,n.createElement(a.Z,{xs:this.renderSection(l,e,o,"1.5rem 1.5rem 3rem 1.5rem",i),sm:this.renderSection(l,e,o,"2rem 3rem 4rem 3rem",i),md:this.renderSection(l,e,o,"3rem 2.5rem 3.5rem 2.5rem",i)})}renderSection(e,t,r,a,l){return n.createElement(s.Z,{from:"/core/ui/section"},n.createElement("div",{className:"com-layout-section"},n.createElement("div",{className:`${t}`,style:{boxSizing:"border-box",width:"100%",height:r,padding:a,borderRadius:l?"0.5rem 0.5rem 0 0":0}},e)))}}const o=(0,l.Z)(i)},43178:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(91288),l=r(71267);function s({text:e,onClick:t}){return n.createElement(i,null,n.createElement(l.Z,{variant:"outlined",size:"small",label:e,onClick:t}))}s.defaultProps={onClick:null,text:""};const i=a.ZP.div`
	display: inline-block;
	margin: 0;
	margin-right: 0.25rem;
	margin-bottom: 0.25rem;
`},91293:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var n=r(67294),a=r(80383),l=r(81648),s=r(93013),i=r(92863);function o({data:e}){return e&&e.image?n.createElement(s.Z,{src:e.image,width:"150",height:"150"}):n.createElement(c,null)}function c(){return n.createElement("div",{style:{width:"8rem",height:"8rem",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#efefef"}},n.createElement(i.Z,null,"broken_image"))}const m=function(e){const{data:t,loading:r}=e;return n.createElement(a.Z,{fill:!0,style:{width:"100%",backgroundColor:"#333"}},n.createElement(l.Z,{xs:12,sm:12,md:12},n.createElement(o,{data:t})))}},65349:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(67294),a=r(80383),l=r(81648),s=r(62198);const i=function(e){const{data:t,loading:r}=e;return n.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},n.createElement(l.Z,{xs:12,sm:12,md:12},n.createElement(s.default,{data:t})))}},62198:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var n=r(67294),a=r(80383),l=r(81648),s=r(19976),i=(r(43178),r(91293)),o=r(92863);const c=function(e){var{data:t,loading:r}=e;return t=t||{},n.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},n.createElement(l.Z,{xs:12,sm:12,md:12},n.createElement("h1",null,t.title),t&&t.subtitle&&n.createElement("h3",null,t.subtitle),t&&t.feedUrl&&n.createElement("a",{href:t.feedUrl}," ",n.createElement(o.Z,null,"link"))),n.createElement(l.Z,{xs:12,sm:12,md:12},n.createElement(i.default,{data:t})),n.createElement(l.Z,{xs:12,sm:12,md:12},n.createElement("h4",null,"General information"),t&&t.author&&n.createElement("div",null,"Author: ",t.author),t&&t.createdDate&&n.createElement("div",null,"Created date: ",n.createElement(s.Z,{value:t.createdDate})),t&&t.description&&n.createElement("div",null,"Description: ",t.description),t&&t.summary&&n.createElement("div",null,"Summary: ",t.summary),t&&t.link&&n.createElement("div",null,"Link: ",t.link),t&&t.language&&n.createElement("div",null,"Language: ",t.language),t&&t.category&&n.createElement("div",null,"Category: ",t.category),t&&t.subcategory&&n.createElement("div",null,"Subcategory: ",t.subcategory)))}},1e3:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var n=r(67294),a=r(91534),l=r(80383),s=r(81648),i=r(65349);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}const c=function(e){const{data:t}=e;return n.createElement(l.Z,{className:"page-module",fill:!0},n.createElement(s.Z,{fill:!0},n.createElement(a.Z,{className:"section-0"},n.createElement(i.default,o({data:t?t.dashboard:null},e)))))}}}]);