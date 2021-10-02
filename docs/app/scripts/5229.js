/*! For license information please see 5229.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[5229,7311,2237],{36501:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(63366),r=n(87462),i=n(67294),o=(n(45697),n(86010)),s=n(71993),l=n(94581),c=n(91380),d=n(5609),m=n(15773);function u(e){return(0,m.Z)("MuiPaper",e)}(0,n(88858).Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var p=n(85893);const v=["className","component","elevation","square","variant"],h=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)},f=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t[`elevation${n.elevation}`]]}})((({theme:e,ownerState:t})=>(0,r.Z)({backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${e.palette.divider}`},"elevation"===t.variant&&(0,r.Z)({boxShadow:e.shadows[t.elevation]},"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,l.Fq)("#fff",h(t.elevation))}, ${(0,l.Fq)("#fff",h(t.elevation))})`})))),_=i.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiPaper"}),{className:i,component:l="div",elevation:c=1,square:m=!1,variant:h="elevation"}=n,_=(0,a.Z)(n,v),g=(0,r.Z)({},n,{component:l,elevation:c,square:m,variant:h}),y=(e=>{const{square:t,elevation:n,variant:a,classes:r}=e,i={root:["root",a,!t&&"rounded","elevation"===a&&`elevation${n}`]};return(0,s.Z)(i,u,r)})(g);return(0,p.jsx)(f,(0,r.Z)({as:l,ownerState:g,className:(0,o.Z)(y.root,i),ref:t},_))}))},20735:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(63366),r=n(87462),i=n(67294),o=(n(45697),n(94863));const s=["sx"];var l=n(46663),c=n(11930),d=n(86521),m=n(91380),u=n(5609),p=n(85893);const v=["component","direction","spacing","divider","children"];function h(e,t){const n=i.Children.toArray(e).filter(Boolean);return n.reduce(((e,a,r)=>(e.push(a),r<n.length-1&&e.push(i.cloneElement(t,{key:`separator-${r}`})),e)),[])}const f=(0,m.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>[t.root]})((({ownerState:e,theme:t})=>{let n=(0,r.Z)({display:"flex"},(0,l.k9)({theme:t},e.direction,(e=>({flexDirection:e}))));if(e.spacing){const a=(0,c.hB)(t),r=Object.keys(t.breakpoints.values).reduce(((t,n)=>(null==e.spacing[n]&&null==e.direction[n]||(t[n]=!0),t)),{}),i=(0,l.P$)({values:e.direction,base:r}),o=(0,l.P$)({values:e.spacing,base:r}),s=(t,n)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${r=n?i[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r]}`]:(0,c.NA)(a,t)}};var r};n=(0,d.Z)(n,(0,l.k9)({theme:t},o,s))}return n})),_=i.forwardRef((function(e,t){const n=function(e){const{sx:t}=e,n=(0,a.Z)(e,s),{systemProps:i,otherProps:l}=(e=>{const t={systemProps:{},otherProps:{}};return Object.keys(e).forEach((n=>{o.G[n]?t.systemProps[n]=e[n]:t.otherProps[n]=e[n]})),t})(n);return(0,r.Z)({},l,{sx:(0,r.Z)({},i,t)})}((0,u.Z)({props:e,name:"MuiStack"})),{component:i="div",direction:l="column",spacing:c=0,divider:d,children:m}=n,_=(0,a.Z)(n,v),g={direction:l,spacing:c};return(0,p.jsx)(f,(0,r.Z)({as:i,ownerState:g,ref:t},_,{children:d?h(m,d):m}))})),g=_},71993:(e,t,n)=>{function a(e,t,n){const a={};return Object.keys(e).forEach((r=>{a[r]=e[r].reduce(((e,a)=>(a&&(n&&n[a]&&e.push(n[a]),e.push(t(a))),e)),[]).join(" ")})),a}n.d(t,{Z:()=>a})},15773:(e,t,n)=>{n.d(t,{Z:()=>r});const a={active:"Mui-active",checked:"Mui-checked",completed:"Mui-completed",disabled:"Mui-disabled",error:"Mui-error",expanded:"Mui-expanded",focused:"Mui-focused",focusVisible:"Mui-focusVisible",required:"Mui-required",selected:"Mui-selected"};function r(e,t){return a[t]||`${e}-${t}`}},88858:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(15773);function r(e,t){const n={};return t.forEach((t=>{n[t]=(0,a.Z)(e,t)})),n}},71713:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(83528),r=n(35754);const i=(0,a.Z)(),o=function(e=i){return(0,r.Z)(e)}},35754:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294);const r=a.createContext(null),i=function(e=null){const t=a.useContext(r);return t&&(n=t,0!==Object.keys(n).length)?t:e;var n}},5609:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(87462),r=n(71713);var i=n(15423);function o({props:e,name:t}){return function({props:e,name:t,defaultTheme:n}){const i=function(e){const{theme:t,name:n,props:r}=e;if(!(t&&t.components&&t.components[n]&&t.components[n].defaultProps))return r;const i=(0,a.Z)({},r),o=t.components[n].defaultProps;let s;for(s in o)void 0===i[s]&&(i[s]=o[s]);return i}({theme:(0,r.Z)(n),name:t,props:e});return i}({props:e,name:t,defaultTheme:i.Z})}},86688:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(72797);a.Component;const i=e=>class extends a.Component{render(){const t="title"in this.props?this.props.title:null,n="placeholder"in this.props?this.props.placeholder:{};return n.width&&n.width,n.height&&n.height,a.createElement(r.Z,{from:t,style:{width:"100%"}},a.createElement(e,this.props))}}},36776:(e,t,n)=>{n.d(t,{Z:()=>a});const a={links_disabled:!1}},80383:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86688),i=n(41749);class o extends a.Component{render(){var{direction:e,spacing:t,className:n,justify:r,alignItems:o,style:s,flex:l}=this.props,t=t||0;return s=s||{},l&&(s.display="flex"),a.createElement(i.Z,{container:!0,direction:e,justifyContent:r,alignItems:o,className:n,spacing:t,style:s},this.props.children)}}const s=(0,r.Z)(o)},81648:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86688),i=n(41749);class o extends a.Component{render(){var{visible:e,className:t,xs:n,sm:r,md:o,style:s,fill:l,flex:c,center:d}=this.props;e=e||!0;var m={...s};return(m=m||{textAlign:"inherit"}).textAlign=d?"center":m.textAlign,l&&(m.width="100%"),c&&(m.flex=1),e&&a.createElement(i.Z,{className:t,item:!0,xs:n,sm:r,md:o,style:m},this.props.children)}}const s=(0,r.Z)(o)},83347:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(12613),i=n(86688);class o extends a.Component{render(){var{xs:e,sm:t,md:n,lg:i,xl:o}=this.props;return e=e||null,t=t||e,n=n||t,i=i||n,o=o||i,a.createElement("div",{style:{width:"100%"}},a.createElement(r.Z,{only:["sm","md","lg","xl"]},e),a.createElement(r.Z,{only:["xs","md","lg","xl"]},t),a.createElement(r.Z,{only:["xs","sm","lg","xl"]},n),a.createElement(r.Z,{only:["xs","sm","md","xl"]},i),a.createElement(r.Z,{only:["xs","sm","md","lg"]},o))}}const s=(0,i.Z)(o)},91534:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(83347),i=n(86688),o=n(72797);class s extends a.Component{render(){var{className:e,cover:t,padding:n,children:i,hero:o,rounded:s}=this.props,l=!0===t?"100vh":"inherit";return s=!0===s,a.createElement(r.Z,{xs:this.renderSection(i,e,l,"1.5rem 1.5rem 3rem 1.5rem",s),sm:this.renderSection(i,e,l,"2rem 3rem 4rem 3rem",s),md:this.renderSection(i,e,l,"3rem 2.5rem 3.5rem 2.5rem",s)})}renderSection(e,t,n,r,i){return a.createElement(o.Z,{from:"/core/ui/section"},a.createElement("div",{className:"com-layout-section"},a.createElement("div",{className:`${t}`,style:{boxSizing:"border-box",width:"100%",height:n,padding:r,borderRadius:i?"0.5rem 0.5rem 0 0":0}},e)))}}const l=(0,i.Z)(s)},87558:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(73727),i=n(36776);class o extends a.Component{render(){var{children:e,className:t,to:n,href:o,style:s,external:l}=this.props;if(e=(n=(n=n||o)||"http://localhost")?e:"NO LINK DEFINED",s=s||{},n&&"string"!=typeof n)return"INVALID URL";const c=!((l=!0===l)||n&&0===n.indexOf("http")),d=c?"_self":"_blank";return 0==(0===n.indexOf("#"))&&1==c&&0==i.Z.links_disabled?a.createElement(r.OL,{className:t,to:n,style:s},e):a.createElement("a",{className:t,href:n,style:s,target:d},e)}}const s=o},97236:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(87558);n(36776);class i extends a.Component{render(){var{children:e,className:t,to:n,href:i,border:o,style:s,external:l}=this.props;return e=(n=(n=n||i)||"http://localhost")?e:"NO LINK DEFINED",o=!0===o||"true"===o?"text-link":"",(s=s||{}).padding=s.padding?s.padding:"0.5rem 0.75rem",t=`${o} ${t||""}`,l=!0===l,a.createElement(r.Z,{className:t,to:n,style:s,external:l},e)}}const o=i},61598:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var a=n(67294),r=n(91380),i=n(80383),o=n(81648),s=n(87125),l=n(93775),c=n(20735),d=n(36501),m=n(97236);const u=(0,r.ZP)("div")({padding:"0.85rem"}),p=(0,r.ZP)("div")({fontSize:"1.5rem"}),v=(0,r.ZP)("div")({fontSize:"0.9rem"});class h extends a.Component{render(){const{data:e,loading:t}=this.props,{total:n,awards:r,classification:h,country:f,genre:_,type:g,rating:y,yearReleased:Z,streamBy:b}=e||{},x=(e,n,r)=>a.createElement(o.Z,{xs:12,sm:6,md:6,lg:4,style:{paddingRight:"1rem"}},a.createElement(s.default,{loading:t,title:e,data:n?n.toString():n,icon:r})),E=(e,n,r)=>a.createElement(o.Z,{xs:12,sm:6,md:6,lg:6,style:{paddingRight:"1rem"}},a.createElement(l.default,{loading:t,title:e,data:n||{},ranges:r}));return a.createElement(i.Z,{justifyContent:"center",fill:!0},a.createElement(o.Z,{xs:12,sm:12,md:9,lg:10,style:{paddingRight:"1rem"}},a.createElement(c.Z,{spacing:2},a.createElement("h1",null,"general"),a.createElement(i.Z,{justifyContent:"center",fill:!0},x("movies",n,"local_movies")),a.createElement("h1",null,"segments"),a.createElement(i.Z,{justifyContent:"center",fill:!0},E("by type",g,[25e3,5e4]),E("by genre",_,[1e3,25e3,5e4,75e3,1e4,25e4]),E("from",f,[1,5,10,50,100]),E("released",Z,[1e4,25e3,5e4,1e5])),a.createElement("h1",null,"awards"),a.createElement(i.Z,{justifyContent:"center",fill:!0},E("nominees",r,[])),a.createElement("h1",null,"ratings"),a.createElement(i.Z,{justifyContent:"center",fill:!0},x("imdb",y?y.imdb:null,"local_movies")),a.createElement("h1",null,"stream"),a.createElement(i.Z,{justifyContent:"center",fill:!0},x("netflix",b?b.netflix:null,"local_movies")))),a.createElement(o.Z,{xs:12,sm:12,md:3,lg:2,style:{paddingRight:"1rem"}},a.createElement(c.Z,{spacing:2},a.createElement(d.Z,null,a.createElement(u,null,a.createElement(p,null,"Stories"),a.createElement(v,null,a.createElement(m.Z,{href:"/movies/stories/awards"},"Movie awards")))))))}}const f=h},87701:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var a=n(67294),r=n(91534),i=n(80383),o=n(81648),s=n(61598);const l=function(e){return a.createElement(i.Z,{className:"page-module",fill:!0},a.createElement(o.Z,{fill:!0},a.createElement(r.Z,{className:"section-0"},a.createElement(s.default,e))))}},21985:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var a=n(67294),r=n(83347),i=n(87701);function o(e){return a.createElement(r.Z,{xs:a.createElement(i.default,e)})}},33949:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i,Controls:()=>s,Loading:()=>l});var a=n(21985),r=n(7046);const i={title:"Project/Pages/Movies/Page"},o=e=>React.createElement(a.default,e),s=o.bind({});s.args={data:r};const l=o.bind({});l.args={loading:!0}},75251:(e,t,n)=>{var a=n(67294),r=60103;if("function"==typeof Symbol&&Symbol.for){var i=Symbol.for;r=i("react.element"),i("react.fragment")}var o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var a,i={},c=null,d=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,a)&&!l.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:r,type:e,key:c,ref:d,props:i,_owner:o.current}}t.jsx=c,t.jsxs=c},85893:(e,t,n)=>{e.exports=n(75251)},7046:e=>{e.exports=JSON.parse('{"dashboard":{"actors":32600,"countries":{"brazil":88,"mexico":154,"singapore":39,"unitedStates":3297,"turkey":108,"egypt":110,"india":990,"poland":36,"thailand":65,"nigeria":76,"norway":29,"iceland":9,"unitedKingdom":723,"japan":287,"southKorea":212,"italy":90,"canada":412,"indonesia":80,"romania":12,"spain":215,"southAfrica":54,"france":349,"portugal":4,"hongKong":102,"china":147,"germany":199,"argentina":82,"serbia":7,"denmark":44,"kenya":5,"newZealand":28,"pakistan":24,"australia":144,"taiwan":85,"netherlands":45,"philippines":78,"unitedArabEmirates":34,"iran":4,"belgium":85,"israel":26,"uruguay":14,"bulgaria":9,"chile":26,"russia":27,"mauritius":1,"lebanon":26,"colombia":45,"algeria":2,"sovietUnion":3,"sweden":39,"malaysia":26,"ireland":40,"luxembourg":11,"finland":11,"austria":11,"peru":10,"senegal":3,"switzerland":17,"ghana":4,"saudiArabia":10,"armenia":1,"jordan":8,"mongolia":1,"namibia":2,"qatar":7,"vietnam":5,"syria":1,"kuwait":7,"malta":3,"czechRepublic":20,"bahamas":1,"sriLanka":1,"caymanIslands":2,"bangladesh":3,"zimbabwe":3,"hungary":9,"latvia":1,"liechtenstein":1,"venezuela":3,"morocco":6,"cambodia":5,"albania":1,"cuba":1,"nicaragua":1,"greece":10,"croatia":4,"guatemala":2,"westGermany":5,"slovenia":3,"dominicanRepublic":1,"nepal":2,"samoa":1,"azerbaijan":1,"bermuda":1,"ecuador":1,"georgia":2,"botswana":1,"puertoRico":1,"iraq":2,"vaticanCity":1,"angola":1,"ukraine":3,"jamaica":1,"belarus":1,"cyprus":1,"kazakhstan":1,"malawi":1,"slovakia":1,"lithuania":1,"afghanistan":1,"paraguay":1,"somalia":1,"sudan":1,"panama":1,"uganda":1,"eastGermany":1,"montenegro":1},"directors":4324,"genres":{"international":3636,"dramas":2810,"sciFiFantasy":294,"horror":381,"actionAdventure":871,"independent":673,"mysteries":90,"thrillers":541,"crime":427,"documentaries":1139,"sports":196,"comedies":1996,"anime":205,"realityTv":222,"romantic":864,"scienceNature":85,"british":232,"korean":150,"musicals":321,"lgbtq":90,"faithSpirituality":57,"childrenFamily":946,"spanish":147,"classicCult":189,"standUpComedyTalkShows":381,"teen":60},"lastUpdate":"2021-09-15T15:01:49.939Z","movies":7787,"people":36924,"types":{"tvShow":2410,"movie":5377},"yearsAdded":{"_2003":2,"_2008":3,"_2009":2,"_2010":2,"_2011":13,"_2012":4,"_2013":12,"_2014":25,"_2015":90,"_2016":444,"_2017":1225,"_2018":1686,"_2019":2153,"_2020":2009,"_2021":117},"yearsReleased":{"_1925":1,"_1942":2,"_1943":3,"_1944":3,"_1945":3,"_1946":2,"_1947":1,"_1954":2,"_1955":3,"_1956":2,"_1958":3,"_1959":1,"_1960":4,"_1962":3,"_1963":2,"_1964":1,"_1965":2,"_1966":1,"_1967":5,"_1968":5,"_1969":2,"_1970":2,"_1971":5,"_1972":4,"_1973":10,"_1974":7,"_1975":6,"_1976":9,"_1977":7,"_1978":6,"_1979":11,"_1980":9,"_1981":9,"_1982":15,"_1983":9,"_1984":9,"_1985":9,"_1986":10,"_1987":7,"_1988":16,"_1989":13,"_1990":20,"_1991":17,"_1992":18,"_1993":22,"_1994":16,"_1995":19,"_1996":19,"_1997":30,"_1998":31,"_1999":33,"_2000":34,"_2001":36,"_2002":45,"_2003":49,"_2004":59,"_2005":73,"_2006":85,"_2007":85,"_2008":125,"_2009":137,"_2010":173,"_2011":166,"_2012":219,"_2013":267,"_2014":334,"_2015":541,"_2016":882,"_2017":1012,"_2018":1121,"_2019":996,"_2020":868,"_2021":31}}}')}}]);