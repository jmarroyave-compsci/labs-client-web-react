(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4537],{42341:function(e,t,r){"use strict";r(67294);var n=r(89260),a=r(85893);t.Z=function(e){var t=e.id,r=(e.entity,e.children);return(0,a.jsx)(n.Z,{border:!1,to:"/movies/festivals/".concat(t),children:r})}},34603:function(e,t){"use strict";t.Z={automata:{name:"stories_movies_festivals"},page:{title:"Movie Festivals",description:"",url:function(){return"/movies/festivals"}},banner:{showData:!0}}},86002:function(e,t,r){"use strict";r.d(t,{rQ:function(){return O}});var n,a=r(4942),i=r(15861),o=r(87757),c=r.n(o),u=r(24268),s=r(16161),l=r(11163),p=r(30168),f=r(54397),d=r(8300);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m,b=(0,f.Ps)(n||(n=(0,p.Z)(["\n  query GetData($page: Int)\n  {\n    movieFestivals(page: $page) {\n      id\n      name\n      wikiTopic\n      established\n      country\n      continent\n    }\n  }\n"]))),h=r(34603),y=h.Z.automata.name,O=(0,u.hg)("".concat(y,"/fetchData"),function(){var e=(0,i.Z)(c().mark((function e(t,r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch(Z(t)),e.next=3,a=t.page,(0,d.h)(b,{page:a},(function(e){return v(v({},e),{},{data:e.data.movieFestivals})}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}var a}),e)})));return function(t,r){return e.apply(this,arguments)}}()),j=(0,u.oM)({name:y,initialState:{params:{renderer:null,page:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,t){e.params=t.payload,"banner"!==e.params.renderer&&e.params.page>1&&l.default.push("".concat(h.Z.page.url(),"/?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(m={},(0,a.Z)(m,O.pending,(function(e,t){e.data=null,e.loading=!0,e.error=""})),(0,a.Z)(m,O.fulfilled,(function(e,t){var r=t.payload,n=r.loading,a=r.error,i=r.data;e.data=i,e.loading=n,e.error=a})),m)});s.h.reducerManager.add(y,j.reducer);j.reducer;var Z=j.actions.setParams},43332:function(e,t,r){"use strict";var n=r(15671),a=r(43144),i=r(60136),o=r(82963),c=r(61120),u=r(67294),s=r(65295),l=r(18515),p=r(42643),f=r(54962),d=r(49161),g=r(2658),v=r(85893);function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,c.Z)(e);if(t){var a=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,o.Z)(this,r)}}var b=function(e){(0,i.Z)(r,e);var t=m(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,a.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.title,r=e.subtitle,n=e.text,a=e.image,i=e.imageHeight,o=e.noImage,c=e.actions,u=0;r=r||"";return o=!!o,a=a||"https://dummyimage.com/${(imageHeight) ? imageHeight : 300}",(0,v.jsxs)(s.Z,{style:{flexGrow:1},children:[(0,v.jsx)(l.Z,{title:(0,v.jsx)(g.Z,{noWrap:!1,children:t}),subheader:r}),!o&&(0,v.jsx)(f.Z,{style:{height:0,paddingTop:"56.25%",backgroundColor:"#efefef"},height:i||null,image:a}),n&&(0,v.jsx)(p.Z,{children:(0,v.jsx)(g.Z,{variant:"body2",color:"text.secondary",component:"div",children:n})}),c&&c.length>0&&(0,v.jsx)(d.Z,{children:c.map((function(e){return(0,v.jsx)("div",{children:e},u++)}))})]})}}]),r}(u.Component);t.Z=b},55619:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(4942),a=r(67294),i=(r(97937),r(11613)),o=r(50789),c=r(529),u=(r(30842),r(93942)),s=r(73981),l=r(85893);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e){var t,r,n,p,d,g,v=(0,u.I0)(),m=e.config,b=e.loading,h=e.data,y=e.item,O=e.type,j=null!==(t=null===m||void 0===m||null===(r=m.banner)||void 0===r?void 0:r.showData)&&void 0!==t&&t,Z=null!==(n=null===m||void 0===m||null===(p=m.page)||void 0===p?void 0:p.title)&&void 0!==n?n:"NO TITLE",P=null!==(d=null===m||void 0===m||null===(g=m.page)||void 0===g?void 0:g.description)&&void 0!==d?d:"NO DESCRIPTION",w=e.url?e.url:m.page.url;(0,a.useEffect)((function(){e.breadcrumbs&&v((0,s.Y)({breadcrumbs:e.breadcrumbs}))}),[]);var x=(0,l.jsx)(c.Z,{showData:j,loading:b,title:Z,description:P,data:h,item:y,actions:[{url:w,title:"See all"}],hero:"banner"!==O});return(0,l.jsxs)(l.Fragment,{children:["banner"===O&&x,("grid"===O||"page"===O)&&(0,l.jsx)(i.Z,f(f({},e),{},{banner:x,mainCol:e.mainCol?e.mainCol(e):(0,l.jsx)(o.Z,{loading:b,page:e.params.page,data:h,onPageChange:e.onPageChange,item:y})}))]})}},46115:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=r(67294),a=r(93942),i=r(73981),o=r(11163),c=r(4942),u=r(97937),s=r(55619),l=r(34603),p=r(86002),f=r(43332),d=r(42341),g=r(85893);function v(e){var t=e.id,r=e.name;return(0,g.jsx)(d.Z,{id:t,entity:r,children:(0,g.jsx)(f.Z,{title:r})})}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e){var t=(0,a.I0)(),r=(0,a.v9)((function(e){return e[l.Z.automata.name]}));return r?(0,g.jsx)(u.Z,{xs:(0,g.jsx)(s.Z,{config:l.Z,type:r.params.renderer,url:l.Z.page.url(r.params.entity),data:r.data,loading:r.loading,onPageChange:function(e){return t((0,p.rQ)(b(b({},r.params),{},{page:e})))},item:function(e){return(0,g.jsx)(v,b({full:!0},e))},params:b({},r.params)})}):(0,g.jsx)("div",{})}var y=function(e){var t=(0,a.I0)(),r=(0,o.useRouter)();return(0,n.useEffect)((function(){if(r.isReady){var e=(r.query?r.query:{}).page;e=e?parseInt(e):1,t((0,i.Y)({breadcrumbs:[{name:"movies",url:"/movies"},{name:"festivals"}]})),t((0,p.rQ)({renderer:"grid",page:e}))}}),[r.isReady]),(0,g.jsx)(h,{})}},9849:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/festivals",function(){return r(46115)}])}},function(e){e.O(0,[6499,5685,519,5283,9774,2888,179],(function(){return t=9849,e(e.s=t);var t}));var t=e.O();_N_E=t}]);