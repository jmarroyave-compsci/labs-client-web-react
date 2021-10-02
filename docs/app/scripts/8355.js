"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[8355,1398,2678],{86688:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(72797);r.Component;const l=e=>class extends r.Component{render(){const t="title"in this.props?this.props.title:null,n="placeholder"in this.props?this.props.placeholder:{};return n.width&&n.width,n.height&&n.height,r.createElement(a.Z,{from:t,style:{width:"100%"}},r.createElement(e,this.props))}}},36776:(e,t,n)=>{n.d(t,{Z:()=>r});const r={links_disabled:!1}},80383:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(67294),a=n(86688),l=n(41749);class s extends r.Component{render(){var{direction:e,spacing:t,className:n,justify:a,alignItems:s,style:m,flex:i}=this.props,t=t||0;return m=m||{},i&&(m.display="flex"),r.createElement(l.Z,{container:!0,direction:e,justifyContent:a,alignItems:s,className:n,spacing:t,style:m},this.props.children)}}const m=(0,a.Z)(s)},81648:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(67294),a=n(86688),l=n(41749);class s extends r.Component{render(){var{visible:e,className:t,xs:n,sm:a,md:s,style:m,fill:i,flex:d,center:o}=this.props;e=e||!0;var c={...m};return(c=c||{textAlign:"inherit"}).textAlign=o?"center":c.textAlign,i&&(c.width="100%"),d&&(c.flex=1),e&&r.createElement(l.Z,{className:t,item:!0,xs:n,sm:a,md:s,style:c},this.props.children)}}const m=(0,a.Z)(s)},83347:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(67294),a=n(12613),l=n(86688);class s extends r.Component{render(){var{xs:e,sm:t,md:n,lg:l,xl:s}=this.props;return e=e||null,t=t||e,n=n||t,l=l||n,s=s||l,r.createElement("div",{style:{width:"100%"}},r.createElement(a.Z,{only:["sm","md","lg","xl"]},e),r.createElement(a.Z,{only:["xs","md","lg","xl"]},t),r.createElement(a.Z,{only:["xs","sm","lg","xl"]},n),r.createElement(a.Z,{only:["xs","sm","md","xl"]},l),r.createElement(a.Z,{only:["xs","sm","md","lg"]},s))}}const m=(0,l.Z)(s)},91534:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(83347),l=n(86688),s=n(72797);class m extends r.Component{render(){var{className:e,cover:t,padding:n,children:l,hero:s,rounded:m}=this.props,i=!0===t?"100vh":"inherit";return m=!0===m,r.createElement(a.Z,{xs:this.renderSection(l,e,i,"1.5rem 1.5rem 3rem 1.5rem",m),sm:this.renderSection(l,e,i,"2rem 3rem 4rem 3rem",m),md:this.renderSection(l,e,i,"3rem 2.5rem 3.5rem 2.5rem",m)})}renderSection(e,t,n,a,l){return r.createElement(s.Z,{from:"/core/ui/section"},r.createElement("div",{className:"com-layout-section"},r.createElement("div",{className:`${t}`,style:{boxSizing:"border-box",width:"100%",height:n,padding:a,borderRadius:l?"0.5rem 0.5rem 0 0":0}},e)))}}const i=(0,l.Z)(m)},87558:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(67294),a=n(73727),l=n(36776);class s extends r.Component{render(){var{children:e,className:t,to:n,href:s,style:m,external:i}=this.props;if(e=(n=(n=n||s)||"http://localhost")?e:"NO LINK DEFINED",m=m||{},n&&"string"!=typeof n)return"INVALID URL";const d=!((i=!0===i)||n&&0===n.indexOf("http")),o=d?"_self":"_blank";return 0==(0===n.indexOf("#"))&&1==d&&0==l.Z.links_disabled?r.createElement(a.OL,{className:t,to:n,style:m},e):r.createElement("a",{className:t,href:n,style:m,target:o},e)}}const m=s},97236:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(87558);n(36776);class l extends r.Component{render(){var{children:e,className:t,to:n,href:l,border:s,style:m,external:i}=this.props;return e=(n=(n=n||l)||"http://localhost")?e:"NO LINK DEFINED",s=!0===s||"true"===s?"text-link":"",(m=m||{}).padding=m.padding?m.padding:"0.5rem 0.75rem",t=`${s} ${t||""}`,i=!0===i,r.createElement(a.Z,{className:t,to:n,style:m,external:i},e)}}const s=l},70227:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);function a(e){const{label:t,value:n}=e;return r.createElement("div",null,t&&r.createElement("span",{style:{fontWeight:"bold"}},t,":"),r.createElement("span",null,n))}},76249:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=n(67294),a=n(87558);const l=function(e){const{id:t,entity:n,children:l}=e;return r.createElement(a.Z,{border:!1,to:`/movie/${t}/${encodeURIComponent(n)}`},l)}},80607:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r=n(67294),a=n(91380);n(80383),n(81648),n(70227);const l=(0,a.ZP)("div")({}),s=(0,a.ZP)("div")({}),m=(0,a.ZP)("div")({marginTop:"-1.5rem",minHeight:"3rem"}),i=(0,a.ZP)("div")({width:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),d=(0,a.ZP)("span")({fontSize:"0.75rem",lineHeight:"0.85rem",padding:0,paddingTop:"0.5rem",float:"right"}),o=(0,a.ZP)("h3")({margin:"0 0 0.5rem 0",padding:"0"}),c=(0,a.ZP)("h4")({textTransform:"uppercase",margin:"0 0 0.5rem 0",padding:"0"}),u=(0,a.ZP)("div")({}),E=(0,a.ZP)("div")({fontSize:"0.75rem",lineHeight:"0.85rem",textTransform:"uppercase"});function f(e){var{data:t}=e;return t?!0===e.mini?function(e,t){return r.createElement(m,null,t&&t.length>0&&t.slice(0,1).map(((e,t)=>r.createElement("div",{key:t},r.createElement(i,null,r.createElement(i,null,e.year," - ",e.name.toUpperCase()," - ",!1===e.won?"[NOM]":""," ",e.category))))),t&&t.length>1&&r.createElement(i,null,r.createElement(i,null,r.createElement(d,null,"and ",t.length-1," more"))))}(0,t):function(e,t){var n=null,a=null;return r.createElement(l,null,r.createElement("h2",null,"Awards"),t&&t.length>0&&t.map(((e,t)=>r.createElement("div",{key:t},(e=>n&&n==e.year?null:(n=e.year,a=null,r.createElement(o,null,e.year)))(e),(e=>a&&a==e.name?null:(a=e.name,r.createElement(c,null,e.name)))(e),r.createElement(s,null,!1===e.won?r.createElement(E,null,"nominee"):"",r.createElement(u,{won:e.won},e.category))))))}(0,t):null}},7473:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(67294),a=n(80383),l=n(81648),s=n(97236);const m=function(e){const{data:t,loading:n}=e;return r.createElement("div",{style:{width:"100%"}},r.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement("h1",null,"How was made?")),r.createElement(l.Z,{xs:12,sm:12,md:12}),r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(s.Z,{border:!0,href:"/about"}," See more"))))}},99140:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(67294),a=n(91534),l=n(80383),s=n(81648),m=n(63560),i=n(61980),d=(n(7473),n(30091)),o=n(44655),c=n(85073);n(21732);const u=function(e){const{data:t}=e;return r.createElement(l.Z,{className:"page-module",fill:!0},r.createElement(s.Z,{fill:!0},r.createElement(a.Z,{className:"section-1"},r.createElement(d.default,null))),r.createElement(s.Z,{fill:!0},r.createElement(a.Z,{className:"section-3",rounded:!1},r.createElement(m.default,null))),r.createElement(s.Z,{fill:!0},r.createElement(a.Z,{className:"section-1"},r.createElement(c.default,null))),r.createElement(s.Z,{fill:!0},r.createElement(a.Z,{className:"section-0"},r.createElement(o.default,null))),r.createElement(s.Z,{fill:!0},r.createElement(a.Z,{className:"section-2"},r.createElement(i.default,null))))}},52257:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(67294),a=n(83347),l=n(99140);function s(e){return r.createElement(a.Z,{xs:r.createElement(l.default,e)})}},18115:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(67294),a=n(18463),l=n(79912),s=n(94697),m=n(76249),i=n(80607),d=n(22318);function o(e){const{id:t,title:n,awards:o,full:c}=e;return r.createElement(m.default,{id:t,entity:n},r.createElement(a.Z,null,r.createElement(s.Z,{title:r.createElement(d.Z,{noWrap:!0,variant:"h6",component:"h4"},n),style:{display:"block",overflow:"hidden"}}),r.createElement(l.Z,null,r.createElement(i.default,{mini:!c,data:o}))))}},26276:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(67294),a=n(70614),l=n(18115);function s(e){const{data:t,loading:n}=e;return r.createElement(a.default,{data:t,renderItem:e=>r.createElement(l.default,e)})}},61980:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(67294),a=n(91380),l=n(80383),s=n(81648),m=n(97236),i=n(26276);n(92678);const d=(0,a.ZP)("div")({fontSize:"3rem",padding:"1rem 0 2rem 0"}),o=(0,a.ZP)("div")({fontSize:"1rem"}),c=(0,a.ZP)("div")({paddingTop:"2rem"}),u=function(e){const{data:t,loading:n}=e;return r.createElement("div",{style:{width:"100%"}},r.createElement(l.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},r.createElement(s.Z,{xs:12,sm:12,md:12},r.createElement(d,null,"Awards")),r.createElement(s.Z,{xs:12,sm:12,md:12},r.createElement(o,null,"a dashboard with information from over 8M movies, how they are segmented, awards and ratings")),r.createElement(s.Z,{xs:12,sm:12,md:12},r.createElement(i.default,{data:t})),r.createElement(s.Z,{xs:12,sm:12,md:12},r.createElement(c,null,r.createElement(m.Z,{border:!0,href:"/stories/awards"}," See more")))))}},92678:(e,t,n)=>{n.r(t),n.d(t,{QRY:()=>m,default:()=>i});var r=n(67294),a=n(54397),l=n(70846);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}const m=a.Ps`
query get($entity:String, $year: Int, $page: Int) {
  storiesAwards(entity: $entity, year: $year, page: $page){
    id
    title
    image
    link
    awards {
      category
      name
      won
      year
    }
  }
}
`,i=e=>function(t){var{route:n}=t,a=(n=n||{}).entity?n.entity:"movies",i=n.year?n.year:(new Date).getFullYear(),d=n.page?n.page:1,o=t.data?{}:(0,l.a)(m,{variables:{entity:a,year:parseInt(i),page:parseInt(d)}}),c=t.data?t.data:o.data?o.data.storiesAwards:null;return r.createElement(e,s({},t,o,{data:c}))}},30091:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(67294),a=n(91380),l=n(80383),s=n(81648),m=n(97236);const i=(0,a.ZP)("div")({fontSize:"3rem",padding:"1rem 0 2rem 0"}),d=(0,a.ZP)("div")({fontSize:"1rem"}),o=(0,a.ZP)("div")({paddingTop:"2rem"}),c=function(e){const{data:t,loading:n}=e;return r.createElement("div",{style:{width:"100%"}},r.createElement(l.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},r.createElement(s.Z,{xs:12,sm:12,md:12},r.createElement(i,null,"Movies")),r.createElement(s.Z,{xs:12,sm:12,md:12},r.createElement(d,null,"a dashboard with information from over 8M movies, how they are segmented, awards and ratings")),r.createElement(s.Z,{xs:12,sm:12,md:12},r.createElement(o,null,r.createElement(m.Z,{border:!0,href:"/movies"}," See more")))))}},44655:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(67294),a=n(91380),l=n(80383),s=n(81648),m=n(97236);const i=(0,a.ZP)("div")({fontSize:"3rem",padding:"1rem 0 2rem 0"}),d=(0,a.ZP)("div")({fontSize:"1rem"}),o=(0,a.ZP)("div")({paddingTop:"2rem"}),c=function(e){const{data:t,loading:n}=e;return r.createElement("div",{style:{width:"100%"}},r.createElement(l.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},r.createElement(s.Z,{xs:12,sm:12,md:12},r.createElement(i,null,"People")),r.createElement(s.Z,{xs:12,sm:12,md:12},r.createElement(d,null,"a dashboard with information from over 11M people, their professions and age distribution")),r.createElement(s.Z,{xs:12,sm:12,md:12},r.createElement(o,null,r.createElement(m.Z,{border:!0,href:"/people"}," See more")))))}},85073:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(67294),a=n(91380),l=n(80383),s=n(81648),m=n(97236);const i=(0,a.ZP)("div")({fontSize:"3rem",padding:"1rem 0 2rem 0"}),d=(0,a.ZP)("div")({fontSize:"1rem"}),o=(0,a.ZP)("div")({paddingTop:"2rem"}),c=function(e){const{data:t,loading:n}=e;return r.createElement("div",{style:{width:"100%"}},r.createElement(l.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},r.createElement(s.Z,{xs:12,sm:12,md:12},r.createElement(i,null,"Podcasts")),r.createElement(s.Z,{xs:12,sm:12,md:12},r.createElement(d,null,"a dashboard with information from over 30K podcasts, their categories and language distribution, ")),r.createElement(s.Z,{xs:12,sm:12,md:12},r.createElement(o,null,r.createElement(m.Z,{border:!0,href:"/people"}," See more")))))}},21732:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(67294),a=n(80383),l=n(81648),s=n(97236);const m=function(e){const{data:t,loading:n}=e;return r.createElement("div",{style:{width:"100%"}},r.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement("h1",null,"TV")),r.createElement(l.Z,{xs:12,sm:12,md:12}),r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(s.Z,{border:!0,href:"/movies"}," See more"))))}}}]);