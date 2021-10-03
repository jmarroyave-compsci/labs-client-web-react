"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[7041],{28973:(t,e,n)=>{n.d(e,{Z:()=>x});var r=n(63366),a=n(87462),i=n(67294),o=n(86010),s=(n(45697),n(25258)),l=n(71993);var h=n(94581),c=n(58524),d=n(5609),u=n(15773);function m(t){return(0,u.Z)("MuiSkeleton",t)}(0,n(88858).Z)("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var p=n(85893);const g=["animation","className","component","height","style","variant","width"];let f,v,w,b,y=t=>t;const Z=(0,s.F4)(f||(f=y`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),k=(0,s.F4)(v||(v=y`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),C=(0,c.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],!1!==n.animation&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})((({theme:t,ownerState:e})=>{const n=(o=t.shape.borderRadius,String(o).match(/[\d.\-+]*\s*(.*)/)[1]||""||"px"),r=(i=t.shape.borderRadius,parseFloat(i));var i,o;return(0,a.Z)({display:"block",backgroundColor:(0,h.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${n}/${Math.round(r/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(({ownerState:t})=>"pulse"===t.animation&&(0,s.iv)(w||(w=y`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),Z)),(({ownerState:t,theme:e})=>"wave"===t.animation&&(0,s.iv)(b||(b=y`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(90deg, transparent, ${0}, transparent);
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),k,e.palette.action.hover))),x=i.forwardRef((function(t,e){const n=(0,d.Z)({props:t,name:"MuiSkeleton"}),{animation:i="pulse",className:s,component:h="span",height:c,style:u,variant:f="text",width:v}=n,w=(0,r.Z)(n,g),b=(0,a.Z)({},n,{animation:i,component:h,variant:f,hasChildren:Boolean(w.children)}),y=(t=>{const{classes:e,variant:n,animation:r,hasChildren:a,width:i,height:o}=t,s={root:["root",n,r,a&&"withChildren",a&&!i&&"fitContent",a&&!o&&"heightAuto"]};return(0,l.Z)(s,m,e)})(b);return(0,p.jsx)(C,(0,a.Z)({as:h,ref:e,className:(0,o.Z)(y.root,s),ownerState:b},w,{style:(0,a.Z)({width:v,height:c},u)}))}))},26447:(t,e,n)=>{n.d(e,{Z:()=>f});var r=n(63366),a=n(87462),i=n(67294),o=(n(45697),n(46663)),s=n(11930),l=n(87893),h=n(86521),c=n(58524),d=n(5609),u=n(85893);const m=["component","direction","spacing","divider","children"];function p(t,e){const n=i.Children.toArray(t).filter(Boolean);return n.reduce(((t,r,a)=>(t.push(r),a<n.length-1&&t.push(i.cloneElement(e,{key:`separator-${a}`})),t)),[])}const g=(0,c.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>[e.root]})((({ownerState:t,theme:e})=>{let n=(0,a.Z)({display:"flex"},(0,o.k9)({theme:e},t.direction,(t=>({flexDirection:t}))));if(t.spacing){const r=(0,s.hB)(e),a=Object.keys(e.breakpoints.values).reduce(((e,n)=>(null==t.spacing[n]&&null==t.direction[n]||(e[n]=!0),e)),{}),i=(0,o.P$)({values:t.direction,base:a}),l=(0,o.P$)({values:t.spacing,base:a}),c=(e,n)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${a=n?i[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[a]}`]:(0,s.NA)(r,e)}};var a};n=(0,h.Z)(n,(0,o.k9)({theme:e},l,c))}return n})),f=i.forwardRef((function(t,e){const n=(0,d.Z)({props:t,name:"MuiStack"}),i=(0,l.Z)(n),{component:o="div",direction:s="column",spacing:h=0,divider:c,children:f}=i,v=(0,r.Z)(i,m),w={direction:s,spacing:h};return(0,u.jsx)(g,(0,a.Z)({as:o,ownerState:w,ref:e},v,{children:c?p(f,c):f}))}))},57041:(t,e,n)=>{n.r(e),n.d(e,{default:()=>o});var r=n(67294),a=n(26447),i=n(28973);function o(t){return r.createElement(a.Z,{spacing:1},r.createElement(i.Z,{variant:"rectangular",height:300}),r.createElement(i.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),r.createElement(i.Z,{variant:"text",style:{width:"40%"}}),r.createElement(i.Z,{variant:"text",style:{width:"25%"}}),r.createElement(i.Z,{variant:"text",style:{width:"25%"}}),r.createElement(i.Z,{variant:"text",style:{width:"25%"}}))}},86010:(t,e,n)=>{function r(t){var e,n,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(a&&(a+=" "),a+=n);else for(e in t)t[e]&&(a&&(a+=" "),a+=e);return a}function a(){for(var t,e,n=0,a="";n<arguments.length;)(t=arguments[n++])&&(e=r(t))&&(a&&(a+=" "),a+=e);return a}n.d(e,{Z:()=>a})}}]);