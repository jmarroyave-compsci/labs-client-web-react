(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6526],{25662:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});t(67294);var n=t(43332),o=t(55476),c=t(85893);function a(e){var r=e.id,t=e.name,a=e.text;e.box;return(0,c.jsx)(o.Z,{box:!0,id:r,entity:t,children:(0,c.jsx)(n.Z,{title:t,text:a})})}},55476:function(e,r,t){"use strict";t(67294);var n=t(89260),o=t(85893);r.Z=function(e){var r=e.id,t=(e.entity,e.children),c=e.box;return(0,o.jsx)(n.Z,{box:c,border:!1,to:"/people/".concat(r),children:t})}},2295:function(e,r,t){"use strict";t(67294);var n=t(50367),o=t(58862),c=t(49896),a=t(52651),i=t(23275),s=t(27159),u=t(85893);r.Z=function(e){var r=e.data,t=(e.loading,e.type),p=e.tiny;if(!r||0==r.length)return(0,u.jsx)("div",{});var l=p?r.slice(0,5):r,f=(0,u.jsxs)(o.DK,{children:[t,(0,u.jsxs)(o.x4,{children:[" [",r.length,"]"]})]});return(0,u.jsxs)(n.RQ,{children:[!p&&f,(0,u.jsx)(a.Z,{children:l.map((function(e,r){return(0,u.jsx)(i.Z,{xs:12,sm:12,md:6,lg:4,children:(0,u.jsx)("div",{children:(0,u.jsx)(c.Z,{id:e.id,children:(0,u.jsxs)("div",{children:[e.title," ",(0,u.jsxs)(o.x4,{children:["(",(0,u.jsx)(s.Z,{value:e.releasedDate,format:"YYYY"}),")"]})]})})})},r)}))}),p&&r.length>l.length&&(0,u.jsxs)(o.x4,{children:["and ",r.length-l.length," more"]})]})}},21162:function(e,r,t){"use strict";t.d(r,{Z:function(){return W}});var n,o=t(4942),c=(t(67294),t(55619)),a={automata:{name:"stories_writers"},page:{title:"Writers",description:"",url:function(e){return"/".concat(e,"/stories/writers")}},banner:{showData:!1}},i=t(15861),s=t(87757),u=t.n(s),p=t(24268),l=t(16161),f=t(11163),d=t(30168),O=t(54397),b=t(74273);function j(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?j(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var y,h=(0,O.Ps)(n||(n=(0,d.Z)(["\n  query GetData($page: Int)\n  {\n    storiesPeopleWriters(page: $page){\n      id\n      name\n      directed {\n        id\n        title\n        releasedDate\n      }      \n    }\n  }\n"])));function v(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function w(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?v(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var m=a.automata.name,P=(0,p.hg)("".concat(m,"/fetchData"),function(){var e=(0,i.Z)(u().mark((function e(r,t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch(Z(r)),e.next=3,n=r.page,(0,b.h)(h,{page:n},(function(e){return g(g({},e),{},{data:e.data.storiesPeopleWriters})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}var n}),e)})));return function(r,t){return e.apply(this,arguments)}}()),x=(0,p.oM)({name:m,initialState:{params:{renderer:null,entity:null,page:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,r){e.params=w(w({},e.params),r.payload),"banner"!=e.params.renderer&&1!=e.params.page&&f.default.push("".concat(a.page.url(),"/?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(y={},(0,o.Z)(y,P.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,o.Z)(y,P.fulfilled,(function(e,r){var t=r.payload,n=t.loading,o=t.error,c=t.data;e.data=c,e.loading=n,e.error=o})),(0,o.Z)(y,P.rejected,(function(e,r){var t=r.error;e.data=[],e.loading=!1,e.error=t})),y)});l.h.reducerManager.add(m,x.reducer);x.reducer;var Z=x.actions.setParams,D=t(25662),E=t(2295),_=t(85893);function k(e){var r=e.id,t=e.name,n=e.wrote;return(0,_.jsx)(D.Z,{id:r,name:t,text:(0,_.jsx)(E.Z,{tiny:!0,data:n})})}var S=t(45688);function N(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function Y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?N(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function q(e){return(0,_.jsx)(c.Z,{params:e,config:a,fetch:function(e){return P(Y({},e))},item:function(e){return(0,_.jsx)(k,Y({full:!0},e))},customDescription:(0,_.jsx)(S.C,{tag:"writer"}),customUrl:function(e){return a.page.url(e.entity)}})}function C(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function R(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?C(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var W=function(e){return(0,_.jsx)(q,R(R({},e),{},{render:"list"}))}},81349:function(e,r,t){"use strict";t.r(r);t(67294);var n=t(11163),o=t(21162),c=t(85893);r.default=function(e){var r=(0,n.useRouter)(),t=(r&&r.query?r.query:[]).page;return t=t?parseInt(t):1,(0,c.jsx)(o.Z,{page:t,entity:"tv-shows",breadcrumbs:"/tv-shows/stories/writers"})}},79165:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tv-shows/stories/writers",function(){return t(81349)}])}},function(e){e.O(0,[6499,5685,5218,3128,4010,266,9774,2888,179],(function(){return r=79165,e(e.s=r);var r}));var r=e.O();_N_E=r}]);