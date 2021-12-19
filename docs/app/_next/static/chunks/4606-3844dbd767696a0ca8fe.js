"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4606],{60181:function(e,r,t){var n=t(64119);r.Z=void 0;var o=n(t(64938)),c=t(85893),i=(0,o.default)((0,c.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");r.Z=i},23508:function(e,r,t){var n=t(64119);r.Z=void 0;var o=n(t(64938)),c=t(85893),i=(0,o.default)((0,c.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");r.Z=i},54606:function(e,r,t){t.d(r,{Z:function(){return je}});var n,o=t(4942),c=t(67294),i=t(55619),a={automata:{name:"story-genre-timeline"},page:{title:"Genre timeline",description:"",url:function(e){var r=e.entity,t=e.genre;return"/".concat(r,"/stories/genre-timeline/").concat(t)}},banner:{showData:!0,renderer:"marquee"}},u=t(15861),s=t(87757),l=t.n(s),p=t(24268),f=t(80105),d=t(11163),j=t(1015);function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?y(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var O=a.automata.name,b=(0,p.hg)("".concat(O,"/fetchTopic"),function(){var e=(0,u.Z)(l().mark((function e(r,t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,j.S)(r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),h=(0,p.hg)("".concat(O,"/fetchData"),function(){var e=(0,u.Z)(l().mark((function e(r,t){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch(m(r)),r.decade=0,e.next=4,(0,j.E)(r);case 4:return(n=e.sent).data=[{timeline:n.data}],e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),v=(0,p.oM)({name:O,initialState:{params:{renderer:null,entity:null,page:null,genre:null},data:null,loading:!0,error:null,topic:{data:null,loading:!0,error:null}},reducers:{setParams:function(e,r){e.params=g(g({},e.params),r.payload),"banner"!=e.params.renderer&&d.default.push("".concat(a.page.url(e.params),"?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(n={},(0,o.Z)(n,h.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,o.Z)(n,h.fulfilled,(function(e,r){var t=r.payload,n=t.loading,o=t.error,c=t.data;e.data=c,e.loading=n,e.error=o})),(0,o.Z)(n,h.rejected,(function(e,r){var t=r.error;e.data=[],e.loading=!1,e.error=t})),(0,o.Z)(n,b.pending,(function(e,r){e.topic.data=null,e.topic.loading=!0,e.topic.error=""})),(0,o.Z)(n,b.fulfilled,(function(e,r){var t=r.payload,n=t.loading,o=t.error,c=t.data;e.topic.data=c,e.topic.loading=n,e.topic.error=o})),(0,o.Z)(n,b.rejected,(function(e,r){var t=r.error;e.topic.data=[],e.topic.loading=!1,e.topic.error=t})),n)});f.h.reducerManager.add(O,v.reducer);v.reducer;var m=v.actions.setParams,w=t(39698),x=t(74035),P=t(39704),Z=t(26447),E=t(90461),D=t(9573),k=t(38732),C=t(98102),S=t(56011),T=t(3694),I=t(85893);function N(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}var L=function(e){var r=e.data,t=e.onExit,n=e.topic,i=(0,c.useState)({}),a=i[0],u=i[1],s=function(e,r){return r?"rgba(0,0,0,0.4)":e%2==0?"rgba(0,0,0,0.1)":"inherit"};return(0,c.useEffect)((function(){var e;if(null!==r&&void 0!==r&&null!==(e=r.topic)&&void 0!==e&&e.data){var t={},n={};r.topic.data.forEach((function(e){t[e.year]||(t[e.year]={}),n[e.genre]||(n[e.genre]={})}));var c={};Object.keys(n).forEach((function(e){return c[e]=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?N(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},t)})),r.topic.data.forEach((function(e){c[e.genre][e.year]=1})),u(c)}}),[r]),(0,I.jsxs)("div",{children:[(0,I.jsxs)(Z.Z,{direction:"row",style:{marginBottom:"1rem"},children:[(0,I.jsx)(E.Z,{label:n.replace(/,/g," "),onDelete:t}),(0,I.jsx)("div",{style:{flex:1}})]}),(0,I.jsx)("div",{style:{fontSize:"0.6rem",width:"100%",maxHeight:"400px",overflow:"auto"},children:(0,I.jsxs)(D.Z,{size:"small",stickyHeader:!0,children:[(0,I.jsx)(S.Z,{children:(0,I.jsxs)(T.Z,{children:[(0,I.jsx)(C.Z,{children:"\xa0"}),Object.keys(a).slice(0,1).map((function(e){return Object.keys(a[e]).map((function(e){return(0,I.jsx)(C.Z,{align:"center",children:e},e)}))})),(0,I.jsx)(C.Z,{children:"\xa0"})]})}),(0,I.jsx)(k.Z,{children:Object.keys(a).map((function(r,t){return(0,I.jsxs)(T.Z,{style:{backgroundColor:s(t,!1)},children:[(0,I.jsx)(C.Z,{style:{backgroundColor:s(0,r==e.genre)},children:r}),Object.keys(a[r]).map((function(t){return(0,I.jsx)(C.Z,{style:{backgroundColor:s(0,t==e.year||r==e.genre)},align:"center",children:1==a[r][t]?"\u2713":" "})})),(0,I.jsx)(C.Z,{style:{backgroundColor:s(0,r==e.genre)},children:r})]},t)}))})]})})]})},R=t(2734),M=t(74187);function _(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function G(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?_(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var H=function(e){var r=(0,R.Z)(),t=e.data,n=e.topic,o=(0,c.useState)({}),i=o[0],a=o[1];return(0,c.useEffect)((function(){if(t){var e={};t.forEach((function(r){e[r.year]||(e[r.year]={})}));var r={};Object.keys(e).forEach((function(e){return r[e]={}})),t.forEach((function(e){r[e.year]={words:e.words}})),a(r)}}),[t]),(0,I.jsx)("div",{children:(0,I.jsx)("div",{style:{fontSize:"0.6rem",width:"100%",maxHeight:"400px",overflow:"auto"},children:(0,I.jsxs)(D.Z,{size:"small",stickyHeader:!0,children:[(0,I.jsx)(S.Z,{children:(0,I.jsx)(T.Z,{children:Object.keys(i).map((function(e){return(0,I.jsx)(C.Z,{align:"center",children:e},e)}))})}),(0,I.jsx)(k.Z,{children:[0,1,2,3,4,5,6,7,8,9].map((function(t){return(0,I.jsx)(T.Z,{children:Object.keys(i).map((function(o,c){var a;return(0,I.jsx)(C.Z,{onClick:function(){var r;return function(r){e.onTopicClick&&e.onTopicClick(r)}(null===(r=i[o].words[t])||void 0===r?void 0:r.p)},style:G({fontWeight:n===(null===(a=i[o].words[t])||void 0===a?void 0:a.p)?"bold":"inherit"},(0,M.$)(r,t)),align:"center",children:i[o].words[t]?i[o].words[t].p.replace(/,/g," "):"-"},c)}))},t)}))})]})})})},F=t(14308),z=t(28973);function A(e){return(0,I.jsx)(x.X,{children:(0,I.jsx)(F.Z,{spacing:1,sx:{padding:"1rem",display:"flex",flexGrow:1},children:(0,I.jsx)(z.Z,{variant:"rectangular",height:300})})})}function W(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function U(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?W(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Q={showLines:!0,showTimeline:!1,topic:""};function X(e,r){var t;switch(r.type){case"INIT":return U(U({},e),{},{showLines:!0,showTimeline:!1,topic:""});case"SELECT_WORD":return U(U({},e),{},{showLines:!1,showTimeline:!0,topic:r.payload.topic});case"EXIT_TIMELINE":return U(U({},e),{},{showLines:!0,showTimeline:!1,topic:""});default:throw new Error("operation ".concat(null===(t=r.type)||void 0===t?void 0:t.toUpperCase()," not implemented"))}}var B=function(e){var r=(0,P.I0)(),t=(0,P.v9)((function(e){return e["story-genre-timeline"]})),n=e.data,o=e.genre,i=e.year,a=e.loading,u=(0,c.useReducer)(X,Q),s=u[0],l=u[1];return null==n||a?(0,I.jsx)(A,{}):(0,I.jsxs)("div",{children:[(0,I.jsx)(H,{topic:s.topic,data:n,onTopicClick:function(e){l({type:"SELECT_WORD",payload:{topic:e}}),r(b({entity:"movie",topic:e}))}}),(0,I.jsx)("br",{}),s.showTimeline&&(0,I.jsx)(L,{topic:s.topic,genre:o,year:i,data:t,onExit:function(e){l({type:"EXIT_TIMELINE"})}})]})};function J(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function q(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?J(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):J(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var V=function(e){var r=e.genre,t=e.header,n=void 0===t||t;return(0,I.jsxs)("div",{style:{padding:"1rem",width:"100%"},children:[n&&(0,I.jsx)(x.RQ,{children:(0,I.jsx)(w.Dx,{children:r.toUpperCase()})}),(0,I.jsx)(B,q(q({},e),{},{data:e.timeline}))]})},$=t(45688),K=t(24463),Y=t(31843),ee=t(86547),re=t(15121),te=t(52871),ne=t(72642);function oe(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function ce(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?oe(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):oe(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var ie={genre:null};function ae(e,r){var t;switch(r.type){case"INIT":return ce(ce({},e),{},{genre:r.payload.genre?r.payload.genre:e.genre});case"GENRE_CHANGE":return ce(ce({},e),{},{genre:r.payload});default:throw new Error("operation ".concat(null===(t=r.type)||void 0===t?void 0:t.toUpperCase()," not implemented"))}}function ue(e){var r=(0,c.useState)(!1),t=(r[0],r[1],(0,c.useReducer)(ae,ie)),n=t[0],o=t[1],i=e.params,a=e.onChange,u=(0,c.useMemo)((function(){return(0,te.J)().map((function(e){return{label:e,id:e}}))}),[]);(0,c.useEffect)((function(){o({type:"INIT",payload:{genre:u.find((function(e){return e.id==i.genre}))}})}),[i]);return n.genre?(0,I.jsx)(x.RQ,{children:(0,I.jsxs)(F.Z,{spacing:2,children:[(0,I.jsx)(re.Z,{id:"genre",disableClearable:!0,options:u,value:n.genre,onChange:function(e,r){return o({type:"GENRE_CHANGE",payload:r})},sx:{width:300},renderInput:function(e){return(0,I.jsx)(ee.Z,ce(ce({},e),{},{label:"Genre"}))}}),(0,I.jsx)(x.RQ,{children:(0,I.jsx)(ne.Z,{variant:"outlined",onClick:function(){!function(){var e={genre:n.genre.id};a&&a(e)}()},children:"Filter"})})]})}):null}function se(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function le(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?se(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):se(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var pe=function(e){var r=e.data,t=e.loading,n=e.fetch,o=e.params;return e.item,(0,I.jsxs)(F.Z,{children:[(0,I.jsx)(K.Z,{onChange:function(e){n(le(le({},e),{},{page:1}))},filters:function(e){var r=e.onChange;return(0,I.jsx)(ue,{onChange:r,params:o})}}),(0,I.jsx)(Y.Z,{sx:{padding:"1rem"},children:(0,I.jsx)(B,{loading:t,data:r?r[0].timeline:null})})]})};function fe(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function de(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?fe(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):fe(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function je(e){return(0,I.jsx)(i.Z,{params:e,config:a,fetch:function(e){return h(e)},item:function(r){return(0,I.jsx)(V,de(de({type:e.type},r),{},{header:"banner"!=e.render}))},mainCol:function(e){return(0,I.jsx)(pe,de({},e))},customTitle:function(e){return"".concat(a.page.title,": ").concat(e.genre)},customDescription:function(e){return e.genre?(0,I.jsx)($.C,{tag:e.genre}):""},customUrl:function(e){return a.page.url(e)}})}},24463:function(e,r,t){t.d(r,{Z:function(){return l}});var n=t(67294),o=(t(74035),t(58862),t(72642)),c=t(71508),i=t(60181),a=t(23508),u=t(62318),s=t(85893);function l(e){var r=e.filters,t=(0,n.useState)(!1),l=t[0],p=t[1];var f=function(e){p(e)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{onClick:function(){return f(!l)},endIcon:l?(0,s.jsx)(i.Z,{}):(0,s.jsx)(a.Z,{}),children:"Filter"}),(0,s.jsx)(u.ZP,{anchor:"top",open:l,onClose:function(){return f(!1)},children:(0,s.jsx)(c.Z,{sx:{padding:"2rem 2rem 0rem 2rem",backgroundColor:"background.paper"},children:r({onChange:function(r){e.onChange&&e.onChange(r),f(!1)}})})})]})}},52871:function(e,r,t){t.d(r,{J:function(){return n}});var n=function(){return["all","Action","Adult","Adventure","Animation","Biography","Comedy","Crime","Documentary","Drama","Family","Fantasy","Film-Noir","Game-Show","History","Horror","Music","Musical","Mystery","News","Reality-TV","Romance","Sci-Fi","Short","Sport","Talk-Show","Thriller","War","Western"].map((function(e){return e.toLowerCase()}))}}}]);