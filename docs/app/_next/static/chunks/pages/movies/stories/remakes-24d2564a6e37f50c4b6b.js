(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8326],{59231:function(e,r,n){"use strict";n.d(r,{Z:function(){return g}});n(67294);var t=n(29602),a=n(50367),i=n(58862),o=(n(52651),n(23275),n(74288),n(89260)),u=n(85893),c=(0,t.ZP)("div")({marginTop:"0rem",minHeight:"3rem"}),s=(0,t.ZP)("div")({width:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:"0.8rem",lineHeight:"1rem"}),l=(0,t.ZP)("span")({fontSize:"0.75rem",lineHeight:"0.85rem",padding:0,paddingTop:"0.5rem",float:"right"}),f=(0,t.ZP)("div")({margin:"1rem 0 0 0",padding:"0",fontSize:"1rem",lineHeight:"1rem"}),d=(0,t.ZP)("div")({textTransform:"uppercase",margin:"1rem 0 0 0",padding:"0",fontSize:"0.9rem",lineHeight:"1rem",fontWeight:400}),p=(0,t.ZP)("div")({fontSize:"0.85rem",lineHeight:"0.95rem"}),m=(0,t.ZP)("div")({fontSize:"0.5rem",lineHeight:"0.6rem",textTransform:"uppercase",paddingTop:"0.5rem"}),h=function(e){var r=e.year,n=e.children;return(0,u.jsx)(o.Z,{href:"/movies/stories/awards?year=".concat(r),children:n})};function g(e){var r=e.data;return r&&0!=r.length?!0===e.mini?function(e,r){var n=e.year,t=e.all,a=t?r.length:2;n=parseInt(n);var i=function(e){return!n||e.year==n};return(0,u.jsxs)(c,{children:[r&&r.length>0&&r.slice(0,a).map((function(e,r){return i(e)&&(0,u.jsx)("div",{children:(0,u.jsx)(h,{year:e.year,children:(0,u.jsxs)(s,{children:[e.year," - ",e.name.toUpperCase()," - ","false"===e.won||!1===e.won?"[N]":"[W]"," ",e.category]})})},r)})),!t&&r&&r.length>a&&(0,u.jsx)(s,{children:(0,u.jsx)(s,{children:(0,u.jsxs)(l,{children:["and ",r.length-a," more"]})})})]})}(e,r):function(e,r){var n=null,t=null,o=(e.year,function(e){return n&&n==e.year?null:(n=e.year,t=null,(0,u.jsx)(f,{children:e.year}))}),c=function(e){return t&&t==e.name?null:(t=e.name,(0,u.jsx)(d,{children:e.name}))};return(0,u.jsxs)(a.RQ,{children:[(0,u.jsx)(i.DK,{children:"awards"}),r&&r.length>0&&r.map((function(e,r){return(0,u.jsxs)("div",{children:[o(e),c(e),(0,u.jsx)(h,{year:e.year,children:(0,u.jsxs)(a.ck,{children:[(0,u.jsx)(m,{children:"false"===e.won||!1===e.won?"nominee":"winner"}),(0,u.jsx)(p,{children:e.category})]})})]},r)}))]})}(e,r):(0,u.jsx)("div",{})}},49896:function(e,r,n){"use strict";n(67294);var t=n(89260),a=n(85893);r.Z=function(e){var r=e.id,n=(e.entity,e.children);return(0,a.jsx)(t.Z,{border:!1,to:"/movies/".concat(r),children:n})}},82356:function(e,r,n){"use strict";n(67294);var t=n(58862),a=n(27159),i=n(85893);r.Z=function(e){var r=e.data,n=e.value,o=e.title,u=e.format,c=e.sufix;if(!(r=r||n)||null==r||0==r.length)return null;switch(n=r,u){case"date":n=(0,i.jsx)(a.Z,{value:r,format:"DD/MM/YYYY"});break;case"year":n=(0,i.jsx)(a.Z,{value:r,format:"YYYY"})}return(0,i.jsxs)("div",{children:[(0,i.jsx)(t.Qy,{children:o}),(0,i.jsxs)(t.GH,{children:[n," ",c]})]})}},55490:function(e,r){"use strict";r.Z={automata:{name:"stories_remakes"},page:{title:"Remakes",description:"",url:function(e){return"/".concat(e,"/stories/remakes")}},banner:{showData:!0}}},19566:function(e,r,n){"use strict";n.d(r,{rQ:function(){return b}});var t,a=n(4942),i=n(15861),o=n(87757),u=n.n(o),c=n(24268),s=n(16161),l=n(11163),f=n(30168),d=n(54397),p=n(8300);function m(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function h(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?m(Object(n),!0).forEach((function(r){(0,a.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var g,v=(0,d.Ps)(t||(t=(0,f.Z)(["\n  query GetData($page: Int){\n  storiesMoviesRemakes(page: $page){\n    name\n    count\n    recs{\n      id\n      releasedDate\n      type\n      genre\n      directors{\n        id\n        name\n      }\n    }\n  }\n}\n"]))),y=n(55490),j=y.Z.automata.name,b=(0,c.hg)("".concat(j,"/fetchData"),function(){var e=(0,i.Z)(u().mark((function e(r,n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(Z(r)),e.next=3,t=r.page,(0,p.h)(v,{page:t},(function(e){return h(h({},e),{},{data:e.data.storiesMoviesRemakes})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}var t}),e)})));return function(r,n){return e.apply(this,arguments)}}()),x=(0,c.oM)({name:j,initialState:{params:{renderer:null,entity:null,page:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,r){e.params=r.payload,"banner"!==e.params.renderer&&e.params.page>1&&l.default.push("".concat(y.Z.page.url(e.params.entity),"?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(g={},(0,a.Z)(g,b.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,a.Z)(g,b.fulfilled,(function(e,r){var n=r.payload,t=n.loading,a=n.error,i=n.data;e.data=i,e.loading=t,e.error=a})),g)});s.h.reducerManager.add(j,x.reducer);x.reducer;var Z=x.actions.setParams},22877:function(e,r,n){"use strict";n.d(r,{Z:function(){return v}});var t=n(4942),a=(n(67294),n(97937),n(55619)),i=n(93942),o=n(55490),u=n(19566),c=n(43332),s=n(49896),l=(n(59231),n(19888)),f=n(82356),d=n(85893);function p(e){var r=e.image,n=e.name,t=(e.count,e.recs);return(0,d.jsx)(c.Z,{image:r?r.poster:r,imageHeight:100,text:(0,d.jsx)("div",{children:t.map((function(e,r){return(0,d.jsx)(f.Z,{title:(0,l.hT)(e.releasedDate,"YYYY"),value:(0,d.jsx)(m,{id:e.id,children:e.directors[0]?e.directors[0].name:"?"},r)},r)}))}),title:n})}function m(e){var r=e.id,n=e.children;return r?(0,d.jsx)(s.Z,{id:r,children:(0,d.jsx)("div",{children:n})}):n}function h(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function g(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?h(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function v(e){var r=(0,i.I0)(),n=(0,i.v9)((function(e){return e[o.Z.automata.name]}));return n?(0,d.jsx)(a.Z,{type:n.params.renderer,config:o.Z,url:o.Z.page.url(n.params.entity),data:n.data,loading:n.loading,onPageChange:function(e){return r((0,u.rQ)(g(g({},n.params),{},{page:e})))},item:function(e){return(0,d.jsx)(p,g({full:!0},e))},params:g({},n.params)}):(0,d.jsx)("div",{})}},19888:function(e,r,n){"use strict";n.d(r,{Rx:function(){return o},hT:function(){return u},T5:function(){return c}});var t=n(92077),a=n.n(t),i=n(24417),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0a";return a()(Number(e)).format(r)},u=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=function(e){if(!e||null==e||""===e||0==e.length)return null;if(e instanceof Date)return e;try{var r=Number(e);return Number.isInteger(r)?new Date(r):new Date(e)}catch(n){return null}},t=function(e,r){switch(r){case"ago":return formatDistance(e,new Date);case"DD/MM/YYYY":return formatter(e,"dd/MM/yyyy");case"YYYY":return e.getFullYear();default:return formatter(e,r)}};return t(e=n(e),r)},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return i.default.toSentenceCase(e)}},43332:function(e,r,n){"use strict";var t=n(15671),a=n(43144),i=n(60136),o=n(82963),u=n(61120),c=n(67294),s=n(65295),l=n(18515),f=n(42643),d=n(54962),p=n(49161),m=n(2658),h=n(85893);function g(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,t=(0,u.Z)(e);if(r){var a=(0,u.Z)(this).constructor;n=Reflect.construct(t,arguments,a)}else n=t.apply(this,arguments);return(0,o.Z)(this,n)}}var v=function(e){(0,i.Z)(n,e);var r=g(n);function n(){return(0,t.Z)(this,n),r.apply(this,arguments)}return(0,a.Z)(n,[{key:"render",value:function(){var e=this.props,r=e.title,n=e.subtitle,t=e.text,a=e.image,i=e.imageHeight,o=e.noImage,u=e.actions,c=0;n=n||"";return o=!!o,a=a||"https://dummyimage.com/${(imageHeight) ? imageHeight : 300}",(0,h.jsxs)(s.Z,{style:{flexGrow:1},children:[(0,h.jsx)(l.Z,{title:(0,h.jsx)(m.Z,{noWrap:!1,children:r}),subheader:n}),!o&&(0,h.jsx)(d.Z,{style:{height:0,paddingTop:"56.25%",backgroundColor:"#efefef"},height:i||null,image:a}),t&&(0,h.jsx)(f.Z,{children:(0,h.jsx)(m.Z,{variant:"body2",color:"text.secondary",component:"div",children:t})}),u&&u.length>0&&(0,h.jsx)(p.Z,{children:u.map((function(e){return(0,h.jsx)("div",{children:e},c++)}))})]})}}]),n}(c.Component);r.Z=v},27159:function(e,r,n){"use strict";var t=n(15671),a=n(43144),i=n(60136),o=n(82963),u=n(61120),c=n(67294),s=n(53651),l=n(65710),f=n(85893);function d(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,t=(0,u.Z)(e);if(r){var a=(0,u.Z)(this).constructor;n=Reflect.construct(t,arguments,a)}else n=t.apply(this,arguments);return(0,o.Z)(this,n)}}var p=function(e){(0,i.Z)(n,e);var r=d(n);function n(){return(0,t.Z)(this,n),r.apply(this,arguments)}return(0,a.Z)(n,[{key:"getDate",value:function(e){if(!e||null==e||""===e||0==e.length)return null;if(e instanceof Date)return e;try{var r=Number(e);return Number.isInteger(r)?new Date(r):new Date(e)}catch(n){return null}}},{key:"toString",value:function(e,r,n){switch(n){case"ago":return(0,s.Z)(r,new Date);case"DD/MM/YYYY":return(0,l.Z)(r,"dd/MM/yyyy");case"YYYY":return r.getFullYear();default:return(0,l.Z)(r,n)}}},{key:"render",value:function(){var e=this.props,r=e.lang,n=e.value,t=e.className,a=e.format;r=r||"en",a=a||"ago";var i=this.getDate(n);if(null==i)return(0,f.jsx)("span",{});var o=this.toString(r,i,a);return(0,f.jsx)("span",{className:t,children:o})}}]),n}(c.Component);r.Z=p},74288:function(e,r,n){"use strict";n(67294),n(85893)},55619:function(e,r,n){"use strict";n.d(r,{Z:function(){return p}});var t=n(4942),a=n(67294),i=(n(97937),n(11613)),o=n(50789),u=n(529),c=(n(30842),n(93942)),s=n(73981),l=n(85893);function f(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?f(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e){var r,n,t,f,p,m,h=(0,c.I0)(),g=e.config,v=e.loading,y=e.data,j=e.item,b=e.type,x=null!==(r=null===g||void 0===g||null===(n=g.banner)||void 0===n?void 0:n.showData)&&void 0!==r&&r,Z=null!==(t=null===g||void 0===g||null===(f=g.page)||void 0===f?void 0:f.title)&&void 0!==t?t:"NO TITLE",O=null!==(p=null===g||void 0===g||null===(m=g.page)||void 0===m?void 0:m.description)&&void 0!==p?p:"NO DESCRIPTION",w=e.url?e.url:g.page.url;(0,a.useEffect)((function(){e.breadcrumbs&&h((0,s.Y)({breadcrumbs:e.breadcrumbs}))}),[]);var P=(0,l.jsx)(u.Z,{showData:x,loading:v,title:Z,description:O,data:y,item:j,actions:[{url:w,title:"See all"}],hero:"banner"!==b});return(0,l.jsxs)(l.Fragment,{children:["banner"===b&&P,("grid"===b||"page"===b)&&(0,l.jsx)(i.Z,d(d({},e),{},{banner:P,mainCol:e.mainCol?e.mainCol(e):(0,l.jsx)(o.Z,{loading:v,page:e.params.page,data:y,onPageChange:e.onPageChange,item:j})}))]})}},40191:function(e,r,n){"use strict";n.r(r);var t=n(67294),a=n(93942),i=n(73981),o=n(11163),u=n(22877),c=n(19566),s=n(85893);r.default=function(e){var r=(0,a.I0)(),n=(0,o.useRouter)();return(0,t.useEffect)((function(){if(n.isReady){var e=n&&n.query?n.query:[],t=(e.year,e.page);t=t?parseInt(t):1,r((0,i.Y)({breadcrumbs:[{name:"movies",url:"/movies"},{name:"stories",url:"/movies/stories"},{name:"remakes"}]})),r((0,c.rQ)({renderer:"grid",entity:"movies",page:t}))}}),[]),(0,s.jsx)(u.Z,{})}},88529:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/stories/remakes",function(){return n(40191)}])}},function(e){e.O(0,[6499,5685,5218,519,2328,5283,9774,2888,179],(function(){return r=88529,e(e.s=r);var r}));var r=e.O();_N_E=r}]);