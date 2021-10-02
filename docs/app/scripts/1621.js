"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[1621,607],{41749:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(45987),r=t(87462),i=t(67294),o=(t(45697),t(86010)),s=t(14670),l=[0,1,2,3,4,5,6,7,8,9,10],c=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=parseFloat(e);return"".concat(t/n).concat(String(e).replace(String(t),"")||"px")}var m=i.forwardRef((function(e,n){var t=e.alignContent,s=void 0===t?"stretch":t,l=e.alignItems,c=void 0===l?"stretch":l,d=e.classes,m=e.className,p=e.component,g=void 0===p?"div":p,u=e.container,x=void 0!==u&&u,f=e.direction,h=void 0===f?"row":f,v=e.item,y=void 0!==v&&v,w=e.justify,E=e.justifyContent,C=void 0===E?"flex-start":E,S=e.lg,Z=void 0!==S&&S,b=e.md,A=void 0!==b&&b,j=e.sm,M=void 0!==j&&j,T=e.spacing,P=void 0===T?0:T,R=e.wrap,I=void 0===R?"wrap":R,W=e.xl,N=void 0!==W&&W,_=e.xs,k=void 0!==_&&_,z=e.zeroMinWidth,B=void 0!==z&&z,D=(0,a.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),G=(0,o.Z)(d.root,m,x&&[d.container,0!==P&&d["spacing-xs-".concat(String(P))]],y&&d.item,B&&d.zeroMinWidth,"row"!==h&&d["direction-xs-".concat(String(h))],"wrap"!==I&&d["wrap-xs-".concat(String(I))],"stretch"!==c&&d["align-items-xs-".concat(String(c))],"stretch"!==s&&d["align-content-xs-".concat(String(s))],"flex-start"!==(w||C)&&d["justify-content-xs-".concat(String(w||C))],!1!==k&&d["grid-xs-".concat(String(k))],!1!==M&&d["grid-sm-".concat(String(M))],!1!==A&&d["grid-md-".concat(String(A))],!1!==Z&&d["grid-lg-".concat(String(Z))],!1!==N&&d["grid-xl-".concat(String(N))]);return i.createElement(g,(0,r.Z)({className:G,ref:n},D))}));const p=(0,s.Z)((function(e){return(0,r.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,n){var t={};return l.forEach((function(n){var a=e.spacing(n);0!==a&&(t["spacing-".concat("xs","-").concat(n)]={margin:"-".concat(d(a,2)),width:"calc(100% + ".concat(d(a),")"),"& > $item":{padding:d(a,2)}})})),t}(e),e.breakpoints.keys.reduce((function(n,t){return function(e,n,t){var a={};c.forEach((function(e){var n="grid-".concat(t,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[n]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[n]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[n]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===t?(0,r.Z)(e,a):e[n.breakpoints.up(t)]=a}(n,e,t),n}),{}))}),{name:"MuiGrid"})(m)},86688:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),r=t(72797);a.Component;const i=e=>class extends a.Component{render(){const n="title"in this.props?this.props.title:null,t="placeholder"in this.props?this.props.placeholder:{};return t.width&&t.width,t.height&&t.height,a.createElement(r.Z,{from:n,style:{width:"100%"}},a.createElement(e,this.props))}}},80383:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(67294),r=t(86688),i=t(41749);class o extends a.Component{render(){var{direction:e,spacing:n,className:t,justify:r,alignItems:o,style:s,flex:l}=this.props,n=n||0;return s=s||{},l&&(s.display="flex"),a.createElement(i.Z,{container:!0,direction:e,justifyContent:r,alignItems:o,className:t,spacing:n,style:s},this.props.children)}}const s=(0,r.Z)(o)},81648:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(67294),r=t(86688),i=t(41749);class o extends a.Component{render(){var{visible:e,className:n,xs:t,sm:r,md:o,style:s,fill:l,flex:c,center:d}=this.props;e=e||!0;var m={...s};return(m=m||{textAlign:"inherit"}).textAlign=d?"center":m.textAlign,l&&(m.width="100%"),c&&(m.flex=1),e&&a.createElement(i.Z,{className:n,item:!0,xs:t,sm:r,md:o,style:m},this.props.children)}}const s=(0,r.Z)(o)},70227:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294);function r(e){const{label:n,value:t}=e;return a.createElement("div",null,n&&a.createElement("span",{style:{fontWeight:"bold"}},n,":"),a.createElement("span",null,t))}},80607:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});var a=t(67294),r=t(91380);t(80383),t(81648),t(70227);const i=(0,r.ZP)("div")({}),o=(0,r.ZP)("div")({}),s=(0,r.ZP)("div")({marginTop:"-1.5rem",minHeight:"3rem"}),l=(0,r.ZP)("div")({width:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),c=(0,r.ZP)("span")({fontSize:"0.75rem",lineHeight:"0.85rem",padding:0,paddingTop:"0.5rem",float:"right"}),d=(0,r.ZP)("h3")({margin:"0 0 0.5rem 0",padding:"0"}),m=(0,r.ZP)("h4")({textTransform:"uppercase",margin:"0 0 0.5rem 0",padding:"0"}),p=(0,r.ZP)("div")({}),g=(0,r.ZP)("div")({fontSize:"0.75rem",lineHeight:"0.85rem",textTransform:"uppercase"});function u(e){var{data:n}=e;return n?!0===e.mini?function(e,n){return a.createElement(s,null,n&&n.length>0&&n.slice(0,1).map(((e,n)=>a.createElement("div",{key:n},a.createElement(l,null,a.createElement(l,null,e.year," - ",e.name.toUpperCase()," - ",!1===e.won?"[NOM]":""," ",e.category))))),n&&n.length>1&&a.createElement(l,null,a.createElement(l,null,a.createElement(c,null,"and ",n.length-1," more"))))}(0,n):function(e,n){var t=null,r=null;return a.createElement(i,null,a.createElement("h2",null,"Awards"),n&&n.length>0&&n.map(((e,n)=>a.createElement("div",{key:n},(e=>t&&t==e.year?null:(t=e.year,r=null,a.createElement(d,null,e.year)))(e),(e=>r&&r==e.name?null:(r=e.name,a.createElement(m,null,e.name)))(e),a.createElement(o,null,!1===e.won?a.createElement(g,null,"nominee"):"",a.createElement(p,{won:e.won},e.category))))))}(0,n):null}},61621:(e,n,t)=>{t.r(n),t.d(n,{Loading:()=>s,Numbers:()=>l,default:()=>i});var a=t(80607);const r=JSON.parse('[{"category":"BEST DRAMATIC PROGRAM","name":"emmy","won":false,"year":1954,"__typename":"Award"},{"category":"BEST DRAMATIC PROGRAM","name":"emmy","won":true,"year":1953,"__typename":"Award"},{"category":"BEST DRAMATIC PROGRAM 2","name":"emmy","won":true,"year":1953,"__typename":"Award"},{"category":"BEST DRAMATIC PROGRAM 3","name":"oscar","won":true,"year":1953,"__typename":"Award"},{"category":"BEST DRAMATIC SHOW","name":"emmy","won":false,"year":1952,"__typename":"Award"}]'),i={title:"Project/Components/Pieces/Awards"},o=e=>React.createElement(a.default,e),s=o.bind({});s.args={loading:!0};const l=o.bind({});l.args={data:r}}}]);