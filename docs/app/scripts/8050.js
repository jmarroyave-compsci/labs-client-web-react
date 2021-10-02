"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[8050],{40351:(e,t,n)=>{n.d(t,{Z:()=>r});const r={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}},86688:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(72797);r.Component;const l=e=>class extends r.Component{render(){const t="title"in this.props?this.props.title:null,n="placeholder"in this.props?this.props.placeholder:{};return n.width&&n.width,n.height&&n.height,r.createElement(a.Z,{from:t,style:{width:"100%"}},r.createElement(e,this.props))}}},19976:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(67294),a=(n(45697),n(19119)),l=n(34902);class s extends r.Component{getDate(e){try{if(!e||null==e||""===e||0==e.length)return new Date;if(e instanceof Date)return new Date(e);const t=Number(e);return Number.isInteger(t)?new Date(t):new Date(e)}catch(e){return new Date}}_format(e,t,n){switch(n){case"ago":return(0,a.Z)(t,new Date);case"DD/MM/YYYY":return(0,l.Z)(t,"dd/MM/yy");default:return(0,l.Z)(t,n)}}render(){var{lang:e,value:t,className:n}=this.props;e=e||"en";const a=this.props.format?this.props.format:"ago",l=this.getDate(t),s=this._format(e,l,a);return r.createElement("span",{className:n},s)}}const m=s},93013:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}class l extends r.Component{render(){var{src:e,width:t,height:n,style:l,notFound:s}=this.props,m={};return s&&(m.ref=e=>this.img=e,m.onError=()=>s&&this.img.src!=s?this.img.src=s:null),r.createElement("img",a({},m,{style:l,width:t,height:n,src:e}))}}const s=l},80383:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(67294),a=n(86688),l=n(41749);class s extends r.Component{render(){var{direction:e,spacing:t,className:n,justify:a,alignItems:s,style:m,flex:i}=this.props,t=t||0;return m=m||{},i&&(m.display="flex"),r.createElement(l.Z,{container:!0,direction:e,justifyContent:a,alignItems:s,className:n,spacing:t,style:m},this.props.children)}}const m=(0,a.Z)(s)},81648:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(67294),a=n(86688),l=n(41749);class s extends r.Component{render(){var{visible:e,className:t,xs:n,sm:a,md:s,style:m,fill:i,flex:o,center:c}=this.props;e=e||!0;var d={...m};return(d=d||{textAlign:"inherit"}).textAlign=c?"center":d.textAlign,i&&(d.width="100%"),o&&(d.flex=1),e&&r.createElement(l.Z,{className:t,item:!0,xs:n,sm:a,md:s,style:d},this.props.children)}}const m=(0,a.Z)(s)},83347:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(67294),a=n(12613),l=n(86688);class s extends r.Component{render(){var{xs:e,sm:t,md:n,lg:l,xl:s}=this.props;return e=e||null,t=t||e,n=n||t,l=l||n,s=s||l,r.createElement("div",{style:{width:"100%"}},r.createElement(a.Z,{only:["sm","md","lg","xl"]},e),r.createElement(a.Z,{only:["xs","md","lg","xl"]},t),r.createElement(a.Z,{only:["xs","sm","lg","xl"]},n),r.createElement(a.Z,{only:["xs","sm","md","xl"]},l),r.createElement(a.Z,{only:["xs","sm","md","lg"]},s))}}const m=(0,l.Z)(s)},91534:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(83347),l=n(86688),s=n(72797);class m extends r.Component{render(){var{className:e,cover:t,padding:n,children:l,hero:s,rounded:m}=this.props,i=!0===t?"100vh":"inherit";return m=!0===m,r.createElement(a.Z,{xs:this.renderSection(l,e,i,"1.5rem 1.5rem 3rem 1.5rem",m),sm:this.renderSection(l,e,i,"2rem 3rem 4rem 3rem",m),md:this.renderSection(l,e,i,"3rem 2.5rem 3.5rem 2.5rem",m)})}renderSection(e,t,n,a,l){return r.createElement(s.Z,{from:"/core/ui/section"},r.createElement("div",{className:"com-layout-section"},r.createElement("div",{className:`${t}`,style:{boxSizing:"border-box",width:"100%",height:n,padding:a,borderRadius:l?"0.5rem 0.5rem 0 0":0}},e)))}}const i=(0,l.Z)(m)},43178:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(91288),l=n(71267);function s({text:e,onClick:t}){return r.createElement(m,null,r.createElement(l.Z,{variant:"outlined",size:"small",label:e,onClick:t}))}s.defaultProps={onClick:null,text:""};const m=a.ZP.div`
	display: inline-block;
	margin: 0;
	margin-right: 0.25rem;
	margin-bottom: 0.25rem;
`},70227:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);function a(e){const{label:t,value:n}=e;return r.createElement("div",null,t&&r.createElement("span",{style:{fontWeight:"bold"}},t,":"),r.createElement("span",null,n))}},80607:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(67294),a=n(80383),l=n(81648),s=n(70227);const m=function(e){const{data:t,loading:n,route:m}=e;return t?r.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},r.createElement("h4",null,"Awards"),t&&t.length>0&&t.map((e=>r.createElement(l.Z,{xs:12,sm:12,md:12},e.year&&r.createElement(s.Z,{label:"Year",value:e.year}),e.name&&r.createElement(s.Z,{label:"Name",value:e.name}),e.category&&r.createElement(s.Z,{label:"Category",value:e.category}),e.won&&r.createElement(s.Z,{label:"Won",value:e.won}))))):null}},91293:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(67294),a=n(80383),l=n(81648),s=n(93013),m=n(92863);function i({data:e}){return e&&e.image?r.createElement(s.Z,{src:e.image,width:"150",height:"150"}):r.createElement(o,null)}function o(){return r.createElement("div",{style:{width:"8rem",height:"8rem",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#efefef"}},r.createElement(m.Z,null,"broken_image"))}const c=function(e){const{data:t,loading:n}=e;return r.createElement(a.Z,{fill:!0,style:{width:"100%",backgroundColor:"#333"}},r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(i,{data:t})))}},92124:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(67294),a=n(80383),l=n(81648);const s=function(e){const{data:t,loading:n,type:s}=e;return r.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},t&&t.length>0&&r.createElement("h2",null,s),t&&t.length>0&&t.map((e=>r.createElement(l.Z,{xs:12,sm:12,md:12},e.id&&r.createElement("div",null,"ID: ",e.id)))))}},56519:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(67294),a=n(80383),l=n(81648);const s=function(e){const{data:t,loading:n,route:s}=e;return r.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},t&&t.length>0&&t.map((e=>r.createElement(l.Z,{xs:12,sm:12,md:12},e.name&&r.createElement("div",null,"By: ",e.name),e.averageRating&&r.createElement("div",null,"Rating: ",e.averageRating),e.votes&&r.createElement("div",null,"Votes: ",e.votes)))))}},71065:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(67294),a=n(80383),l=n(81648),s=n(43178);const m=function(e){const{data:t,loading:n,route:m}=e;return r.createElement(a.Z,null,r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement("h4",null,"More information")),r.createElement(l.Z,{xs:12,sm:12,md:12},t&&t.imdb&&r.createElement("a",{href:t.imdb},r.createElement(s.Z,{text:"IMDB"})),t&&t.imdb&&r.createElement("a",{href:t.imdb},r.createElement(s.Z,{text:"IMDB"})),t&&t.imdb&&r.createElement("a",{href:t.imdb},r.createElement(s.Z,{text:"IMDB"}))))}},7210:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(67294),a=n(80383),l=n(81648);const s=function(e){const{data:t,loading:n,route:s}=e;return r.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},t&&t.length>0&&t.map((e=>r.createElement(l.Z,{xs:12,sm:12,md:12},e.name&&r.createElement("div",null,"Name: ",e.name),e.yearAdded&&r.createElement("div",null,"Year added: ",e.yearAdded)))))}},62947:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(67294),a=n(80383),l=n(81648),s=n(30324);const m=function(e){const{data:t,loading:n}=e;return r.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(s.default,{data:t})))}},30324:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r=n(67294),a=n(80383),l=n(81648),s=n(71065),m=n(7210),i=n(56519),o=n(92124),c=n(80607),d=n(19976),u=n(43178),h=n(91293),E=n(70227);const f=function(e){var{data:t,loading:n}=e;return t=t||{},console.log(t),r.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement("h1",null,t.title),t&&t.profession&&t.profession.length>0&&r.createElement("span",null,t.profession.map((e=>r.createElement(u.Z,{text:e}))))),r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(h.default,{data:t})),r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(s.default,{data:t?t.references:null})),r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement("h4",null,"General information"),t&&t.country&&t.country.length>0&&r.createElement(E.Z,{label:"Country",value:t.country.reduce((_item,tot),tot+`${_item} `,"")}),t&&t.type&&t.type.length>0&&r.createElement(E.Z,{label:"Type",value:t.type}),t&&t.genre&&t.genre.length>0&&r.createElement(E.Z,{label:"Genre",value:t.genre.map((e=>r.createElement(u.Z,{text:e})))}),t&&t.duration&&r.createElement(E.Z,{label:"Duration",value:t.duration}),t&&t.releasedDate>0&&r.createElement(E.Z,{label:"Released date",value:r.createElement(d.Z,{value:t.releasedDate})}),t&&t.endedDate>0&&r.createElement(E.Z,{label:"Ended date",value:r.createElement(d.Z,{value:t.endedDate})})),r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(m.default,{data:t?t.streamBy:null})),r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(i.default,{data:t?t.rating:null})),r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(o.default,{type:"directors",data:t?t.director:null})),r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(o.default,{type:"writers",data:t?t.writer:null})),r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(o.default,{type:"cast",data:t?t.cast:null})),r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(c.default,{data:t?t.awards:null})))}},30598:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(67294),a=n(91534),l=n(80383),s=n(81648),m=n(62947);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}const o=function(e){const{data:t,loading:n}=e;return r.createElement(l.Z,{className:"page-module",fill:!0},r.createElement(s.Z,{fill:!0},r.createElement(a.Z,{className:"section-0"},r.createElement(m.default,i({data:t?t.dashboard:null},e)))))}}}]);