"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[9380,2426],{41749:(e,t,n)=>{n.d(t,{Z:()=>p});var i=n(45987),r=n(87462),o=n(67294),a=(n(45697),n(86010)),s=n(14670),c=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var f=o.forwardRef((function(e,t){var n=e.alignContent,s=void 0===n?"stretch":n,c=e.alignItems,l=void 0===c?"stretch":c,d=e.classes,f=e.className,p=e.component,m=void 0===p?"div":p,x=e.container,g=void 0!==x&&x,u=e.direction,h=void 0===u?"row":u,v=e.item,y=void 0!==v&&v,w=e.justify,S=e.justifyContent,b=void 0===S?"flex-start":S,Z=e.lg,C=void 0!==Z&&Z,j=e.md,z=void 0!==j&&j,E=e.sm,I=void 0!==E&&E,N=e.spacing,W=void 0===N?0:N,k=e.wrap,A=void 0===k?"wrap":k,M=e.xl,R=void 0!==M&&M,T=e.xs,D=void 0!==T&&T,G=e.zeroMinWidth,B=void 0!==G&&G,P=(0,i.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),F=(0,a.Z)(d.root,f,g&&[d.container,0!==W&&d["spacing-xs-".concat(String(W))]],y&&d.item,B&&d.zeroMinWidth,"row"!==h&&d["direction-xs-".concat(String(h))],"wrap"!==A&&d["wrap-xs-".concat(String(A))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==s&&d["align-content-xs-".concat(String(s))],"flex-start"!==(w||b)&&d["justify-content-xs-".concat(String(w||b))],!1!==D&&d["grid-xs-".concat(String(D))],!1!==I&&d["grid-sm-".concat(String(I))],!1!==z&&d["grid-md-".concat(String(z))],!1!==C&&d["grid-lg-".concat(String(C))],!1!==R&&d["grid-xl-".concat(String(R))]);return o.createElement(m,(0,r.Z)({className:F,ref:t},P))}));const p=(0,s.Z)((function(e){return(0,r.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return c.forEach((function(t){var i=e.spacing(t);0!==i&&(n["spacing-".concat("xs","-").concat(t)]={margin:"-".concat(d(i,2)),width:"calc(100% + ".concat(d(i),")"),"& > $item":{padding:d(i,2)}})})),n}(e),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var i={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");i[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else i[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else i[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,r.Z)(e,i):e[t.breakpoints.up(n)]=i}(t,e,n),t}),{}))}),{name:"MuiGrid"})(f)},92863:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(87462),r=n(45987),o=n(67294),a=(n(45697),n(86010)),s=n(14670),c=n(93871),l=o.forwardRef((function(e,t){var n=e.classes,s=e.className,l=e.color,d=void 0===l?"inherit":l,f=e.component,p=void 0===f?"span":f,m=e.fontSize,x=void 0===m?"medium":m,g=(0,r.Z)(e,["classes","className","color","component","fontSize"]);return o.createElement(p,(0,i.Z)({className:(0,a.Z)("material-icons",n.root,s,"inherit"!==d&&n["color".concat((0,c.Z)(d))],"default"!==x&&"medium"!==x&&n["fontSize".concat((0,c.Z)(x))]),"aria-hidden":!0,ref:t},g))}));l.muiName="Icon";const d=(0,s.Z)((function(e){return{root:{userSelect:"none",fontSize:e.typography.pxToRem(24),width:"1em",height:"1em",overflow:"hidden",flexShrink:0},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(36)}}}),{name:"MuiIcon"})(l)},93871:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(60288);function r(e){if("string"!=typeof e)throw new Error((0,i.Z)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},86688:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(67294),r=n(72797);i.Component;const o=e=>class extends i.Component{render(){const t="title"in this.props?this.props.title:null,n="placeholder"in this.props?this.props.placeholder:{};return n.width&&n.width,n.height&&n.height,i.createElement(r.Z,{from:t,style:{width:"100%"}},i.createElement(e,this.props))}}},80383:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(67294),r=n(86688),o=n(41749);class a extends i.Component{render(){var{direction:e,spacing:t,className:n,justify:r,alignItems:a,style:s,flex:c}=this.props,t=t||0;return s=s||{},c&&(s.display="flex"),i.createElement(o.Z,{container:!0,direction:e,justifyContent:r,alignItems:a,className:n,spacing:t,style:s},this.props.children)}}const s=(0,r.Z)(a)},81648:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(67294),r=n(86688),o=n(41749);class a extends i.Component{render(){var{visible:e,className:t,xs:n,sm:r,md:a,style:s,fill:c,flex:l,center:d}=this.props;e=e||!0;var f={...s};return(f=f||{textAlign:"inherit"}).textAlign=d?"center":f.textAlign,c&&(f.width="100%"),l&&(f.flex=1),e&&i.createElement(o.Z,{className:t,item:!0,xs:n,sm:r,md:a,style:f},this.props.children)}}const s=(0,r.Z)(a)},19555:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r,Controls:()=>o});var i=n(38310);const r={title:"Project/Pages/About/Roadmap"},o=(e=>React.createElement(i.default,e)).bind({});o.args={}},86010:(e,t,n)=>{function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:()=>r})}}]);