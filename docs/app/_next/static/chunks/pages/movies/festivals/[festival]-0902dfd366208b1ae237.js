(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[811],{42613:function(t,e,r){"use strict";r.r(e);var n=r(67294),a=r(93942),i=r(73981),s=r(11163),c=r(26630),o=r(44100),u=r(85893);e.default=function(t){var e=(0,a.I0)(),r=(0,s.useRouter)();return(0,n.useEffect)((function(){var t=r.query&&r.query.festival?r.query.festival:"",n=t;e((0,i.Y)({breadcrumbs:[{name:"movies",url:"/movies"},{name:"festivals",url:"/movies/festivals"},{name:n}]})),e((0,o.rQ)({id:t}))}),[]),(0,u.jsx)(c.Z,{})}},81356:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});r(67294);var n=r(26447),a=r(89446),i=r(68220),s=r(8519),c=r(85893);function o(t){var e=t.data;return e?(0,c.jsx)(i.RQ,{children:(0,c.jsxs)(n.Z,{children:[(0,c.jsx)(s.DK,{children:"More information"}),(0,c.jsx)("div",{children:e.imdb&&(0,c.jsx)("a",{href:e.imdb,children:(0,c.jsx)(a.Z,{text:"IMDB"})})}),(0,c.jsx)("div",{children:e.wikiTopic&&(0,c.jsx)("a",{href:"https://wikipedia.com/wiki/".concat(e.wikiTopic.replace(/ /g,"_")),children:(0,c.jsx)(a.Z,{text:"wikipedia"})})})]})}):(0,c.jsx)("div",{})}},6476:function(t,e){"use strict";e.Z={automata:{name:"page_movie_festival"},page:{url:function(t){return"/movies/festivals/".concat(t)}}}},44100:function(t,e,r){"use strict";r.d(e,{rQ:function(){return g}});var n,a=r(4942),i=r(15861),s=r(87757),c=r.n(s),o=r(24268),u=r(16161),l=r(11163),d=r(30168),f=r(54397),p=r(8300);function j(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?j(Object(r),!0).forEach((function(e){(0,a.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var m,h=(0,f.Ps)(n||(n=(0,d.Z)(["\n  query GetData($id: String!)\n  {\n    movieFestival(id: $id) {\n      id\n      name\n      wikiTopic\n      established\n      country\n      continent\n    }\n  }\n"]))),x=r(6476),b=x.Z.automata.name,g=(0,o.hg)("".concat(b,"/fetchData"),function(){var t=(0,i.Z)(c().mark((function t(e,r){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.dispatch(O(e)),t.next=3,n=e.id,(0,p.h)(h,{id:n},(function(t){return v(v({},t),{},{data:t.data.movieFestival})}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}var n}),t)})));return function(e,r){return t.apply(this,arguments)}}()),y=(0,o.oM)({name:b,initialState:{params:{id:null},data:null,loading:!0,error:null},reducers:{setParams:function(t,e){t.params=e.payload,"banner"!==t.params.renderer&&t.params.page>1&&l.default.push("".concat(x.Z.page.url(),"/?page=").concat(t.params.page),null,{shallow:!0})}},extraReducers:(m={},(0,a.Z)(m,g.pending,(function(t,e){t.data=null,t.loading=!0,t.error=""})),(0,a.Z)(m,g.fulfilled,(function(t,e){var r=e.payload,n=r.loading,a=r.error,i=r.data;t.data=i,t.loading=n,t.error=a})),m)});u.h.reducerManager.add(b,y.reducer);y.reducer;var O=y.actions.setParams},26630:function(t,e,r){"use strict";r.d(e,{Z:function(){return y}});var n=r(4942),a=(r(67294),r(58248)),i=r(40777),s=r(93942),c=r(6476),o=r(81356),u=r(98753),l=r(21055),d=r(26447),f=r(68220),p=r(8519),j=r(56490),v=r(85893);function m(t){var e=t.data;return(0,v.jsx)(f.RQ,{children:(0,v.jsxs)(d.Z,{children:[(0,v.jsx)(l.Z,{src:e.image?e.image.poster:null}),(0,v.jsx)(u.Z,{text:e.name}),(0,v.jsx)(p.DK,{children:"general information"}),(0,v.jsx)(j.Z,{title:"established",data:e.established}),(0,v.jsx)(j.Z,{title:"country",data:e.country}),(0,v.jsx)(j.Z,{title:"continent",data:e.continent}),(0,v.jsx)(o.Z,{data:e})]})})}var h=r(28973);function x(t){return(0,v.jsx)(f.X,{children:(0,v.jsxs)(d.Z,{spacing:1,children:[(0,v.jsx)(h.Z,{variant:"rectangular",height:300}),(0,v.jsx)(h.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),(0,v.jsx)(h.Z,{variant:"text",style:{width:"40%"}}),(0,v.jsx)(h.Z,{variant:"text",style:{width:"25%"}}),(0,v.jsx)(h.Z,{variant:"text",style:{width:"25%"}}),(0,v.jsx)(h.Z,{variant:"text",style:{width:"25%"}})]})})}function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function y(t){var e=(0,s.v9)((function(t){return t[c.Z.automata.name]}));return e?(0,v.jsx)(a.Z,{xs:(0,v.jsx)(i.Z,{data:e.data,loading:e.loading,detail:function(t){return(0,v.jsx)(m,{data:t})},skeleton:(0,v.jsx)(x,{}),params:g({},e.params)})}):(0,v.jsx)("div",{})}},47712:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/festivals/[festival]",function(){return r(42613)}])}},function(t){t.O(0,[218,578,196,774,888,179],(function(){return e=47712,t(t.s=e);var e}));var e=t.O();_N_E=e}]);