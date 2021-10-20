(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[461],{28973:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var i=n(1048),r=n(32793),a=n(67294),o=n(86010),s=(n(45697),n(70917)),c=n(77463);function l(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function u(e){return parseFloat(e)}var h=n(41796),d=n(29602),m=n(16122),p=n(21420);function f(e){return(0,p.Z)("MuiSkeleton",e)}(0,n(11271).Z)("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var v=n(85893);const g=["animation","className","component","height","style","variant","width"];let w,b,y,k,Z=e=>e;const C=(0,s.F4)(w||(w=Z`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),S=(0,s.F4)(b||(b=Z`
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
`)),R=(0,d.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!1!==n.animation&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})((({theme:e,ownerState:t})=>{const n=l(e.shape.borderRadius)||"px",i=u(e.shape.borderRadius);return(0,r.Z)({display:"block",backgroundColor:(0,h.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${n}/${Math.round(i/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===t.variant&&{borderRadius:"50%"},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})}),(({ownerState:e})=>"pulse"===e.animation&&(0,s.iv)(y||(y=Z`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),C)),(({ownerState:e,theme:t})=>"wave"===e.animation&&(0,s.iv)(k||(k=Z`
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
    `),S,t.palette.action.hover)));var _=a.forwardRef((function(e,t){const n=(0,m.Z)({props:e,name:"MuiSkeleton"}),{animation:a="pulse",className:s,component:l="span",height:u,style:h,variant:d="text",width:p}=n,w=(0,i.Z)(n,g),b=(0,r.Z)({},n,{animation:a,component:l,variant:d,hasChildren:Boolean(w.children)}),y=(e=>{const{classes:t,variant:n,animation:i,hasChildren:r,width:a,height:o}=e,s={root:["root",n,i,r&&"withChildren",r&&!a&&"fitContent",r&&!o&&"heightAuto"]};return(0,c.Z)(s,f,t)})(b);return(0,v.jsx)(R,(0,r.Z)({as:l,ref:t,className:(0,o.Z)(y.root,s),ownerState:b},w,{style:(0,r.Z)({width:p,height:u},h)}))}))},26447:function(e,t,n){"use strict";var i=n(1048),r=n(32793),a=n(67294),o=(n(45697),n(95408)),s=n(62605),c=n(39707),l=n(17189),u=n(29602),h=n(16122),d=n(85893);const m=["component","direction","spacing","divider","children"];function p(e,t){const n=a.Children.toArray(e).filter(Boolean);return n.reduce(((e,i,r)=>(e.push(i),r<n.length-1&&e.push(a.cloneElement(t,{key:`separator-${r}`})),e)),[])}const f=(0,u.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>[t.root]})((({ownerState:e,theme:t})=>{let n=(0,r.Z)({display:"flex"},(0,o.k9)({theme:t},e.direction,(e=>({flexDirection:e}))));if(e.spacing){const i=(0,s.hB)(t),r=Object.keys(t.breakpoints.values).reduce(((t,n)=>(null==e.spacing[n]&&null==e.direction[n]||(t[n]=!0),t)),{}),a=(0,o.P$)({values:e.direction,base:r}),c=(0,o.P$)({values:e.spacing,base:r}),u=(t,n)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${r=n?a[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r]}`]:(0,s.NA)(i,t)}};var r};n=(0,l.Z)(n,(0,o.k9)({theme:t},c,u))}return n})),v=a.forwardRef((function(e,t){const n=(0,h.Z)({props:e,name:"MuiStack"}),a=(0,c.Z)(n),{component:o="div",direction:s="column",spacing:l=0,divider:u,children:v}=a,g=(0,i.Z)(a,m),w={direction:s,spacing:l};return(0,d.jsx)(f,(0,r.Z)({as:o,ownerState:w,ref:t},g,{children:u?p(v,u):v}))}));t.Z=v},99159:function(e,t,n){"use strict";n.r(t);var i=n(67294),r=n(93942),a=n(73981),o=n(11163),s=n(27646),c=n(73388),l=n(85893);t.default=function(e){var t=(0,r.I0)(),n=(0,o.useRouter)();return(0,i.useEffect)((function(){if(n.isReady){var e=n.query?n.query:{},i=e.year,r=e.page;r=r?parseInt(r):1,i=i||2017,t((0,a.Y)({breadcrumbs:[{name:"movies",url:"/movies"},{name:"stories",url:"/movies/stories"},{name:"awards"}]})),t((0,c.rQ)({renderer:"grid",year:i,entity:"movies",page:r}))}}),[]),(0,l.jsx)(s.Z,{})}},37e3:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/stories/awards",function(){return n(99159)}])}},function(e){e.O(0,[685,16,894,505,646,774,888,179],(function(){return t=37e3,e(e.s=t);var t}));var t=e.O();_N_E=t}]);