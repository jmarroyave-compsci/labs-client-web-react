(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{98543:function(e,r,t){"use strict";var n=t(4942),o=(t(67294),t(47635)),c=t(85893);function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=function(e){return(0,c.jsx)(o.Z,i(i({},e),{},{render:"banner"}))}},47635:function(e,r,t){"use strict";t.d(r,{Z:function(){return O}});var n=t(4942),o=(t(67294),t(11163)),c=t(55619),a={automata:{name:"about-project-blog"},page:{title:"the Log",description:"some lessons learned while programming this project",url:function(){return"/about/project/log"}},banner:{showData:!0}},i=(t(43332),t(89260)),s=t(58862),u=t(85893);function p(e){e.id;var r=e.title,t=(e.thumbnail,e.description,e.slug),n=e.sprint,o=e.day;return(0,u.jsx)(i.Z,{box:!0,href:"/about/project/log/posts/".concat(t),children:(0,u.jsxs)(s.Zh,{children:[(0,u.jsx)(s.x4,{children:"sprint ".concat(n," - day ").concat(o).toUpperCase()}),(0,u.jsx)(s.nv,{children:r})]})})}function f(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?f(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function O(e){var r=(0,o.useRouter)();return(0,u.jsx)(c.Z,{config:a,data:e.data,item:function(e){return(0,u.jsx)(p,l({},e))},params:l(l({},e),{},{loading:!1}),fetch:function(t){"banner"!==e.render&&r.push("".concat(a.page.url(),"/").concat(t.page))}})}},85:function(e,r,t){"use strict";var n=t(67294),o=t(42145),c=t(77078),a=t(39704),i=t(19016),s=t(85893);function u(e){var r=(0,a.I0)(),t=(0,a.v9)((function(e){return e.dashboard})),u=e.query,p=function(e){return{op:u.op,type:u.type,page:e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return r((0,c.rQ)(p(e)))};return(0,n.useEffect)((function(){null!=u&&f()}),[u]),(0,n.useEffect)((function(){null!=u&&null!=t&&r((0,i.wg)({title:u.title,children:(0,s.jsx)(o.Z,{page:t.params.page,loading:t.loading,data:t.data,type:u.type,format:"hlist",onPageChange:function(e){return f(e)},pageSize:4,noPaging:!1})}))}),[t]),(0,n.useEffect)((function(){t&&r((0,i.K4)({status:t.loading,sender:"dashboard"}))}),[null===t||void 0===t?void 0:t.loading]),null}u.propTypes={},r.Z=u},39848:function(e,r,t){"use strict";t.d(r,{Z:function(){return D}});var n,o=t(4942),c=(t(67294),t(55619)),a={automata:{name:"stories_podcasts_music"},page:{title:"Music Podcasts",description:"",url:function(){return"/podcasts/stories/music"}},banner:{showData:!0}},i=t(15861),s=t(87757),u=t.n(s),p=t(24268),f=t(80105),l=t(11163),O=t(91200);function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var g=a.automata.name,y=(0,p.hg)("".concat(g,"/fetchData"),function(){var e=(0,i.Z)(u().mark((function e(r,t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch(m(r)),r.op={op:"eq",field:"category",value:"music"},r.qryName="category_music",e.next=5,O.Ez(r);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),d=(0,p.oM)({name:g,initialState:{params:{renderer:null,page:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,r){e.params=j(j({},e.params),r.payload),"banner"!=e.params.renderer&&1!=e.params.page&&l.default.push("".concat(a.page.url(),"/?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(n={},(0,o.Z)(n,y.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,o.Z)(n,y.fulfilled,(function(e,r){var t=r.payload,n=t.loading,o=t.error,c=t.data;e.data=c,e.loading=n,e.error=o})),(0,o.Z)(n,y.rejected,(function(e,r){var t=r.error;e.data=[],e.loading=!1,e.error=t})),n)});f.h.reducerManager.add(g,d.reducer);d.reducer;var m=d.actions.setParams,P=t(88704),h=t(85893);function w(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?w(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function D(e){return(0,h.jsx)(c.Z,{params:e,config:a,fetch:function(e){return y(v({},e))},item:function(e){return(0,h.jsx)(P.Z,v({full:!0},e))}})}},43119:function(e,r,t){"use strict";t.d(r,{Z:function(){return H}});var n,o=t(4942),c=t(67294),a=t(55619),i={automata:{name:"story-decades"},page:{title:"Decades",description:"",url:function(e){var r=e.entity,t=e.decade;return"/".concat(r,"/stories/decades/").concat(t)}},banner:{showData:!0}},s=t(15861),u=t(87757),p=t.n(u),f=t(24268),l=t(80105),O=t(11163),b=t(23731);function j(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?j(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var y=i.automata.name,d=(0,f.hg)("".concat(y,"/fetchData"),function(){var e=(0,s.Z)(p().mark((function e(r,t){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch(P(r)),r.qryName="decades",r.op={op:"range",field:"releaseYear",value:[parseInt(r.decade),parseInt(r.decade)+10]},e.next=5,(0,b.Ez)(r);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),m=(0,f.oM)({name:y,initialState:{params:{renderer:null,entity:null,page:null,type:null,decade:null,op:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,r){e.params=g(g({},e.params),r.payload),"banner"!=e.params.renderer&&O.default.push("".concat(i.page.url(e.params),"?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(n={},(0,o.Z)(n,d.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,o.Z)(n,d.fulfilled,(function(e,r){var t=r.payload,n=t.loading,o=t.error,c=t.data;e.data=c,e.loading=n,e.error=o})),(0,o.Z)(n,d.rejected,(function(e,r){var t=r.error;e.data=[],e.loading=!1,e.error=t})),n)});l.h.reducerManager.add(y,m.reducer);m.reducer;var P=m.actions.setParams,h=t(83574),w=t(45688),v=t(14308),D=t(24463),x=t(86547),Z=t(15121),E=t(74035),S=t(98326),_=t(72642),k=t(85893);function C(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function N(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?C(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var I={decade:null};function A(e,r){var t;switch(r.type){case"INIT":return N(N({},e),{},{decade:r.payload.decade?r.payload.decade:e.decade});case"DECADE_CHANGE":return N(N({},e),{},{decade:r.payload});default:throw new Error("operation ".concat(null===(t=r.type)||void 0===t?void 0:t.toUpperCase()," not implemented"))}}function T(e){var r=(0,c.useState)(!1),t=(r[0],r[1],(0,c.useReducer)(A,I)),n=t[0],o=t[1],a=e.params,i=e.onChange,s=(0,c.useMemo)((function(){return(0,S.a)().map((function(e){return{label:e,id:e}}))}),[]);(0,c.useEffect)((function(){o({type:"INIT",payload:{decade:s.find((function(e){return e.id==a.decade}))}})}),[a]);return n.decade?(0,k.jsx)(E.RQ,{children:(0,k.jsxs)(v.Z,{spacing:2,children:[(0,k.jsx)(Z.Z,{id:"decade",disableClearable:!0,options:s,value:n.decade,onChange:function(e,r){return o({type:"DECADE_CHANGE",payload:r})},sx:{width:300},renderInput:function(e){return(0,k.jsx)(x.Z,N(N({},e),{},{label:"Decade"}))}}),(0,k.jsx)(E.RQ,{children:(0,k.jsx)(_.Z,{variant:"outlined",onClick:function(){!function(){var e={decade:n.decade.id};i&&i(e)}()},children:"Filter"})})]})}):null}var M=t(50789);function R(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function q(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?R(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var z=function(e){var r=e.data,t=e.loading,n=e.fetch,o=e.params,c=e.item;return(0,k.jsxs)(v.Z,{children:[(0,k.jsx)(D.Z,{onChange:function(e){n(q(q({},e),{},{page:1}))},filters:function(e){var r=e.onChange;return(0,k.jsx)(T,{onChange:r,params:o})}}),(0,k.jsx)(M.Z,{data:r,loading:t,item:c,page:e.params.page,params:o,onPageChange:function(e){return n(q(q({},o),{},{page:e}))}})]})};function F(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function G(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?F(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):F(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function H(e){return(0,k.jsx)(a.Z,{params:e,config:i,fetch:function(e){return d(e)},item:function(r){return(0,k.jsx)(h.Z,G({type:e.type},r))},mainCol:function(e){return(0,k.jsx)(z,G({},e))},customTitle:function(e){return"".concat(i.page.title,": ").concat(e.decade,"s")},customDescription:function(e){return e.decade?(0,k.jsx)(w.C,{tag:e.decade}):""},customUrl:function(e){return i.page.url(e)}})}},85670:function(e,r,t){"use strict";t.d(r,{Z:function(){return s}});t(67294);var n=t(29602),o=(t(43332),t(89260)),c=t(9092),a=t(85893),i=(0,n.ZP)("div")((function(e){var r=e.theme,t=e.img;return{width:"100%",height:"7rem",padding:"1rem",color:r.palette.primary.contrastText,backgroundColor:r.palette.background.paper,backgroundImage:"url('".concat(c.Z.APP.BASE_PATH).concat(t,"')"),margin:"0 2px 2px 0",display:"flex",textAlign:"center",justifyContent:"center",alignItems:"center",flex:1,fontSize:"1.8rem",lineHeight:"2rem",textTransform:"lowercase"}}));function s(e){e.id;var r=e.name,t=e.url,n=e.img;return(0,a.jsx)(o.Z,{box:!0,href:t,children:(0,a.jsx)(i,{img:n,children:r})})}},96920:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return ae},default:function(){return ie}});var n=t(4942),o=t(67294),c=t(39704),a=t(19016),i=t(14308),s=t(40915),u=t(22575),p=t(85893);function f(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?f(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var O=function(e){return(0,p.jsx)(u.Z,l(l({},e),{},{render:"banner"}))},b=t(88475);function j(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?j(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var y=function(e){return(0,p.jsx)(b.Z,g(g({},e),{},{render:"banner"}))},d=t(39848);function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function P(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var h=function(e){return(0,p.jsx)(d.Z,P(P({},e),{},{render:"banner"}))},w=t(98543),v={title:"Professions",description:"you can take a look to peopl"},D=t(529),x=t(85670);function Z(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function E(e){return(0,p.jsx)(x.Z,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Z(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},e))}var S=t(45688);function _(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function k(e){return(0,p.jsx)(D.Z,{showData:!0,title:v.title,description:(0,p.jsx)(S.C,{tag:"director,actor,writer"}),data:[{name:"Actors",url:"/movies/stories/actors",img:"/img/ba_pro_act.jpg"},{name:"Directors",url:"/movies/stories/directors",img:"/img/ba_pro_dir.jpg"},{name:"Writers",url:"/movies/stories/writers",img:"/img/ba_pro_wri.jpg"},{name:"Producers",url:"/movies/stories/producers",img:"/img/ba_pro_wri.jpg"}],item:function(e){return(0,p.jsx)(E,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?_(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({full:!0},e))},renderer:"tiles",xs:12,sm:6,md:3,lg:3})}function C(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function N(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?C(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var I=function(e){return(0,p.jsx)(k,N(N({},e),{},{render:"banner"}))},A=(t(55619),{title:"Dashboards",description:""});function T(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function M(e){return(0,p.jsx)(x.Z,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?T(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},e))}function R(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function q(e){return(0,p.jsx)(D.Z,{showData:!0,title:A.title,description:(0,p.jsx)(S.C,{tag:"data"}),data:[{name:"People",url:"/people",img:"/img/ba_pro_act.jpg"},{name:"Movies",url:"/movies",img:"/img/ba_pro_dir.jpg"},{name:"TV Shows",url:"/tv-shows",img:"/img/ba_pro_wri.jpg"},{name:"Video Games",url:"/video-games",img:"/img/ba_pro_wri.jpg"},{name:"Podcasts",url:"/podcasts",img:"/img/ba_pro_wri.jpg"},{name:"Festivals",url:"/movies/festivals",img:"/img/ba_pro_wri.jpg"}],item:function(e){return(0,p.jsx)(M,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?R(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({full:!0},e))},renderer:"tiles",xs:12,sm:6,md:4,lg:4})}function z(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function F(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?z(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var G=function(e){return(0,p.jsx)(q,F(F({},e),{},{render:"banner"}))},H=t(43119);function Y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function Q(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Y(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Y(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var U=function(e){return(0,p.jsx)(H.Z,Q(Q({},e),{},{render:"banner"}))},V=t(96786);function X(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function B(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?X(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):X(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var K=function(e){return(0,p.jsx)(V.Z,B(B({},e),{},{render:"banner"}))},L=t(54606);function W(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function J(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?W(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var $=function(e){return(0,p.jsx)(L.Z,J(J({},e),{},{render:"banner"}))};t(85);function ee(e){var r=(0,c.I0)(),t=(e.data,e.blog),n=function(e){return Math.floor(Math.random()*e)+1};return(0,o.useEffect)((function(){r((0,a.YA)({breadcrumbs:e.breadcrumbs}))}),[]),(0,p.jsxs)(i.Z,{children:[(0,p.jsx)(s.Z,{className:"section-2",children:(0,p.jsx)($,{entity:"movies",genre:"action"})}),(0,p.jsx)(s.Z,{className:"section-3",children:(0,p.jsx)(K,{entity:"movies",genre:"comedy",decade:"".concat(((new Date).getFullYear()-n(100)).toString().slice(0,3),"0")})}),(0,p.jsx)(s.Z,{className:"section-0",children:(0,p.jsx)(U,{entity:"movies",type:"movie",decade:"".concat(((new Date).getFullYear()-n(100)).toString().slice(0,3),"0")})}),(0,p.jsx)(s.Z,{className:"section-1",children:(0,p.jsx)(I,{})}),(0,p.jsx)(s.Z,{className:"section-2",children:(0,p.jsx)(y,{entity:"movies",page:n(10)})}),(0,p.jsx)(s.Z,{className:"section-3",children:(0,p.jsx)(O,{entity:"movies",year:2018-n(50)})}),(0,p.jsx)(s.Z,{className:"section-2",children:(0,p.jsx)(G,{})}),(0,p.jsx)(s.Z,{className:"section-0",children:(0,p.jsx)(h,{page:n(10)})}),(0,p.jsx)(s.Z,{className:"section-2",children:(0,p.jsx)(w.Z,{data:t})})]})}function re(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function te(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?re(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):re(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var ne=function(e){return(0,p.jsx)(ee,te(te({},e),{},{render:"page"}))};function oe(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function ce(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?oe(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):oe(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var ae=!0,ie=function(e){var r=ce({},e);return(0,p.jsx)(ne,ce(ce({},r),{},{breadcrumbs:"/"}))}},78581:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(96920)}])}},function(e){e.O(0,[7146,4290,4563,5218,6756,525,2328,9581,4197,7338,7923,5688,9943,9471,8475,4606,6786,2575,9774,2888,179],(function(){return r=78581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);