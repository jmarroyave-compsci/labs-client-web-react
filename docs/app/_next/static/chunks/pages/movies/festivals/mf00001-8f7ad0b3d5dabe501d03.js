(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1317],{12868:function(t,r,e){"use strict";e(67294),e(52651),e(23275);var n=e(7945),i=e(74035),a=e(85893);function o(t){var r=t.src,e=t.height,i=t.width;return(0,a.jsx)(n.Z,{src:r,width:i,height:e})}r.Z=function(t){var r=t.src;return t.loading,(0,a.jsx)(i.RQ,{children:(0,a.jsx)("div",{style:{height:300,width:"100%",backgroundColor:"#333",overflow:"hidden"},children:(0,a.jsx)(o,{src:r,height:300,width:250})})})}},28388:function(t,r,e){"use strict";e.d(r,{Z:function(){return s}});e(67294);var n=e(14308),i=e(48724),a=e(74035),o=e(58862),c=e(85893);function s(t){var r,e,s=t.data,u=t.website;return s&&(u||null!==(r=s.id)&&void 0!==r&&r.startsWith("tt")||null!==(e=s.id)&&void 0!==e&&e.startsWith("nm")||s.wiki)?(0,c.jsxs)(a.RQ,{children:[(0,c.jsx)(o.DK,{children:"More information"}),(0,c.jsxs)(n.Z,{direction:"row",children:[u&&(0,c.jsx)("a",{href:u,children:(0,c.jsx)(i.Z,{text:"website"})}),s.id&&s.id.startsWith("tt")&&(0,c.jsx)("a",{href:"https://www.imdb.com/title/".concat(s.id,"/"),children:(0,c.jsx)(i.Z,{text:"IMDB"})}),s.id&&s.id.startsWith("nm")&&(0,c.jsx)("a",{href:"https://www.imdb.com/name/".concat(s.id,"/"),children:(0,c.jsx)(i.Z,{text:"IMDB"})}),s.wiki&&(0,c.jsx)("a",{href:"https://wikipedia.com/wiki/".concat(s.wiki.replace(/ /g,"_")),children:(0,c.jsx)(i.Z,{text:"wikipedia"})})]})]}):(0,c.jsx)("div",{})}},59067:function(t,r,e){"use strict";e.d(r,{Z:function(){return u}});e(67294);var n=e(74035),i=e(29602),a=e(85893),o=(0,i.ZP)("h2")({fontSize:"2.5rem",lineHeight:"2.75rem",padding:"0",margin:"0"}),c=(0,i.ZP)("div")({margin:0,padding:0,fontSize:"0.9rem",lineHeight:"1.3rem"}),s=(0,i.ZP)("div")({margin:0,padding:0,fontSize:"0.8rem",lineHeight:"1.2rem",fontWeight:500});function u(t){var r=t.text,e=t.subText1,i=t.subText2,u=t.subText,l=t.link;u=u||e;var d=(0,a.jsx)(o,{children:r});return l&&(d=(0,a.jsx)("a",{href:l,children:d})),(0,a.jsxs)(n.RQ,{children:[d,u&&(0,a.jsx)(c,{children:u}),i&&(0,a.jsxs)(s,{children:["by ",i]})]})}},7945:function(t,r,e){"use strict";e(67294);var n=e(1216),i=e(29602),a=e(20883),o=e(85893),c="".concat(a.Z.APP.BASE_PATH).concat(a.Z.DEFAULTS.IMAGE_PLACEHOLDER),s=function(t){return t.target.src=c},u=(0,i.ZP)("div")({position:"relative",overflow:"hidden",backgroundColor:"#efefef",backgroundImage:"url('".concat(c,"')"),backgroundPosition:"center center",width:"fit-content",height:"fit-content",padding:0,margin:0});r.Z=function(t){var r,e=t.src,i=t.lazy,c=(t.preload,t.width),l=t.height,d=(t.style,t.layout);e=null!==(r=e)&&void 0!==r&&r.startsWith("/")?"".concat(a.Z.APP.BASE_PATH).concat(e):e,c=c||"100%",l=l||null;var f=(0,o.jsx)("img",{src:e,layout:d,width:c,height:l,onError:s});return i&&(f=(0,o.jsx)(n.ZP,{only:!0,children:f})),(0,o.jsx)(u,{children:f})}},48724:function(t,r,e){"use strict";e.d(r,{Z:function(){return o}});e(67294);var n=e(29602),i=e(90461),a=e(85893);function o(t){var r=t.text,e=t.color,n=t.variant,o=t.onClick;return(0,a.jsx)(c,{children:(0,a.jsx)(i.Z,{variant:n,color:e,size:"small",label:r,onClick:o})})}o.defaultProps={onClick:null,text:"",color:"primary",variant:"default"};var c=(0,n.ZP)("div")({display:"inline-block",margin:"0",marginRight:"0.25rem",marginBottom:"0.25rem"})},76052:function(t,r,e){"use strict";e.r(r),e.d(r,{default:function(){return M}});e(67294);var n=e(11163),i=e(4942),a=e(55619),o={automata:{name:"page_movie_festival"},page:{url:function(t){var r=t.id;return"/movies/festivals/".concat(r)}}},c=e(28388),s=e(59067),u=e(12868),l=e(14308),d=e(74035),f=e(58862),h=e(82356),p=e(85893);function j(t){var r=t.data;return console.log(r),(0,p.jsx)(d.RQ,{children:(0,p.jsxs)(l.Z,{children:[(0,p.jsx)(u.Z,{src:r.image?r.image.poster:null}),(0,p.jsx)(s.Z,{text:r.name}),(0,p.jsxs)(d.RQ,{children:[(0,p.jsx)(f.DK,{children:"general information"}),(0,p.jsx)(h.Z,{title:"started",data:r.startYear}),(0,p.jsx)(h.Z,{title:"country",data:r.country}),(0,p.jsx)(h.Z,{title:"continent",data:r.continent})]}),(0,p.jsx)(c.Z,{data:r})]})})}var v=e(28973);function g(t){return(0,p.jsx)(d.X,{children:(0,p.jsxs)(l.Z,{spacing:1,sx:{display:"flex",flexGrow:1},children:[(0,p.jsx)(v.Z,{variant:"rectangular",height:300}),(0,p.jsx)(v.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),(0,p.jsx)(v.Z,{variant:"text",style:{width:"40%"}}),(0,p.jsx)(v.Z,{variant:"text",style:{width:"25%"}}),(0,p.jsx)(v.Z,{variant:"text",style:{width:"25%"}}),(0,p.jsx)(v.Z,{variant:"text",style:{width:"25%"}})]})})}var x,m=e(15861),b=e(87757),w=e.n(b),y=e(24268),O=e(80105),P=e(85639);function Z(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?Z(Object(e),!0).forEach((function(r){(0,i.Z)(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Z(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var D=o.automata.name,E=(0,y.hg)("".concat(D,"/fetchData"),function(){var t=(0,m.Z)(w().mark((function t(r,e){return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.dispatch(S(r)),t.next=3,P.iY(r);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}()),_=(0,y.oM)({name:D,initialState:{params:{id:null},data:null,loading:!0,error:null},reducers:{setParams:function(t,r){t.params=k(k({},t.params),r.payload),"banner"!=t.params.renderer&&1!=t.params.page&&n.default.push("".concat(o.page.url(t.params)),null,{shallow:!0})}},extraReducers:(x={},(0,i.Z)(x,E.pending,(function(t,r){t.data=null,t.loading=!0,t.error=""})),(0,i.Z)(x,E.fulfilled,(function(t,r){var e=r.payload,n=e.loading,i=e.error,a=e.data;t.data=a,t.loading=n,t.error=i})),(0,i.Z)(x,E.rejected,(function(t,r){var e=r.error;t.data=[],t.loading=!1,t.error=e})),x)});O.h.reducerManager.add(D,_.reducer);_.reducer;var S=_.actions.setParams;function A(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function R(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?A(Object(e),!0).forEach((function(r){(0,i.Z)(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):A(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function C(t){return(0,p.jsx)(a.Z,{params:R(R({},t),{},{breadcrumbs:function(r){var e,n;return"".concat(t.breadcrumbs,"/").concat(null!==(e=null===r||void 0===r||null===(n=r.data)||void 0===n?void 0:n.name)&&void 0!==e?e:"loading")}}),config:o,fetch:function(t){return E(R({},t))},detail:function(t){return(0,p.jsx)(j,{data:t.data})},skeleton:(0,p.jsx)(g,{})})}function T(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function B(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?T(Object(e),!0).forEach((function(r){(0,i.Z)(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):T(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var H=function(t){return(0,p.jsx)(C,B(B({},t),{},{render:"detail"}))},M=function(t){var r,e,i=(0,n.useRouter)(),a=t.id?t.id:null!==(r=null===(e=i.query)||void 0===e?void 0:e.festival)&&void 0!==r?r:"";return(0,p.jsx)(H,{breadcrumbs:"/movies/festivals",id:a})}},57530:function(t,r,e){"use strict";e.r(r);var n=e(76052),i=e(85893);r.default=function(t){return(0,i.jsx)(n.default,{id:"mf00001"})}},10187:function(t,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/festivals/mf00001",function(){return e(57530)}])}},function(t){t.O(0,[7146,5218,1216,4197,7338,9774,2888,179],(function(){return r=10187,t(t.s=r);var r}));var r=t.O();_N_E=r}]);