(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4627],{67247:function(e,t,r){"use strict";r.d(t,{C:function(){return u}});r(67294);var n=r(29602),i=r(50367),a=r(58862),o=r(43826),c=r(85893),s=(0,n.ZP)("div")({padding:0,margin:"0 0 0.5rem 0"});function u(e){var t=e.data,r=(e.loading,e.mini),n=function(e,t){for(var r="",n=[],i=[],u=0,l=0;l<e.length;l++){var d=e[l];r!==d.category&&(n.length>0&&i.push((0,c.jsx)(s,{children:t?n.slice(0,2):n},u++)),n=[],r=d.category,n.push((0,c.jsx)(a.x4,{children:r.toUpperCase()},u++))),n.push((0,c.jsx)(a.VY,{children:d.entity_id||d.id?(0,c.jsx)(o.Z,{type:d.entity_type?d.entity_type:d.id.startsWith("nm")?"person":"movie",id:d.entity_id?d.entity_id:d.id,children:d.entity}):d.entity},u++))}n.length>0&&i.push((0,c.jsx)(s,{children:n},u++));return t?i.slice(0,3):i}(t,r);return n=r?n:(0,c.jsx)(i.RQ,{children:n}),(0,c.jsx)(c.Fragment,{children:n})}},43826:function(e,t,r){"use strict";r(67294);var n=r(49896),i=r(55476),a=r(44898),o=r(62226),c=r(11106),s=r(85893);t.Z=function(e){var t=e.id,r=e.type,u=e.children,l=e.box;switch(r){case"movie":return(0,s.jsx)(n.Z,{box:l,id:t,children:u});case"person":return(0,s.jsx)(i.Z,{box:l,id:t,children:u});case"podcast":return(0,s.jsx)(a.Z,{box:l,id:t,children:u});case"tv-show":return(0,s.jsx)(o.Z,{box:l,id:t,children:u});case"video-game":return(0,s.jsx)(c.Z,{box:l,id:t,children:u})}return(0,s.jsxs)("div",{children:["ENTITY ",r," NOT FOUND"]})}},49896:function(e,t,r){"use strict";r(67294);var n=r(89260),i=r(85893);t.Z=function(e){var t=e.id,r=(e.entity,e.children),a=e.box;return(0,i.jsx)(n.Z,{box:a,border:!1,to:"/movies/".concat(t),children:r})}},55476:function(e,t,r){"use strict";r(67294);var n=r(89260),i=r(85893);t.Z=function(e){var t=e.id,r=(e.entity,e.children),a=e.box;return(0,i.jsx)(n.Z,{box:a,border:!1,to:"/people/".concat(t),children:r})}},44898:function(e,t,r){"use strict";r(67294);var n=r(89260),i=r(85893);t.Z=function(e){var t=e.id,r=(e.entity,e.children),a=e.box;return(0,i.jsx)(n.Z,{box:a,border:!0,to:"/podcasts/".concat(t),children:r})}},62226:function(e,t,r){"use strict";r(67294);var n=r(89260),i=r(85893);t.Z=function(e){var t=e.id,r=(e.entity,e.children),a=e.box;return(0,i.jsx)(n.Z,{box:a,border:!1,to:"/tv-shows/".concat(t),children:r})}},11106:function(e,t,r){"use strict";r(67294);var n=r(89260),i=r(85893);t.Z=function(e){var t=e.id,r=(e.entity,e.children),a=e.box;return(0,i.jsx)(n.Z,{box:a,border:!1,to:"/video-games/".concat(t),children:r})}},82356:function(e,t,r){"use strict";r(67294);var n=r(58862),i=r(27159),a=r(85893);t.Z=function(e){var t=e.data,r=e.value,o=e.title,c=e.format,s=e.sufix;if(!(t=t||r)||null==t||0==t.length)return null;switch(r=t,c){case"date":r=(0,a.jsx)(i.Z,{value:t,format:"DD/MM/YYYY"});break;case"year":r=(0,a.jsx)(i.Z,{value:t,format:"YYYY"})}return(0,a.jsxs)("div",{children:[(0,a.jsx)(n.Qy,{children:o}),(0,a.jsxs)(n.GH,{children:[r," ",s]})]})}},12868:function(e,t,r){"use strict";r(67294),r(52651),r(23275);var n=r(7945),i=r(50367),a=r(85893);function o(e){var t=e.src,r=e.height,i=e.width;return(0,a.jsx)(n.Z,{src:t,width:i,height:r})}t.Z=function(e){var t=e.src;return e.loading,(0,a.jsx)(i.RQ,{children:(0,a.jsx)("div",{style:{height:300,width:"100%",backgroundColor:"#333",overflow:"hidden"},children:(0,a.jsx)(o,{src:t,height:300,width:250})})})}},86809:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});r(67294);var n=r(50367),i=r(29602),a=r(85893),o=(0,i.ZP)("h2")({fontSize:"2.5rem",lineHeight:"2.75rem",padding:"0",margin:"0"}),c=(0,i.ZP)("div")({margin:0,padding:0,fontSize:"0.9rem",lineHeight:"1.3rem"}),s=(0,i.ZP)("div")({margin:0,padding:0,fontSize:"0.8rem",lineHeight:"1.2rem",fontWeight:500});function u(e){var t=e.text,r=e.subText1,i=e.subText2,u=e.subText,l=e.link;u=u||r;var d=(0,a.jsx)(o,{children:t});return l&&(d=(0,a.jsx)("a",{href:l,children:d})),(0,a.jsxs)(n.RQ,{children:[d,u&&(0,a.jsx)(c,{children:u}),i&&(0,a.jsxs)(s,{children:["by ",i]})]})}},27159:function(e,t,r){"use strict";var n=r(15671),i=r(43144),a=r(60136),o=r(82963),c=r(61120),s=r(67294),u=r(53651),l=r(65710),d=r(85893);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,c.Z)(e);if(t){var i=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,o.Z)(this,r)}}var p=function(e){(0,a.Z)(r,e);var t=f(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,i.Z)(r,[{key:"getDate",value:function(e){if(!e||null==e||""===e||0==e.length)return null;if(e instanceof Date)return e;try{var t=Number(e);return Number.isInteger(t)?new Date(t):new Date(e)}catch(r){return null}}},{key:"toString",value:function(e,t,r){switch(r){case"ago":return(0,u.Z)(t,new Date);case"DD/MM/YYYY":return(0,l.Z)(t,"dd/MM/yyyy");case"YYYY":return t.getFullYear();default:return(0,l.Z)(t,r)}}},{key:"render",value:function(){var e=this.props,t=e.lang,r=e.value,n=e.className,i=e.format;t=t||"en",i=i||"ago";var a=this.getDate(r);if(null==a)return(0,d.jsx)("span",{});var o=this.toString(t,a,i);return(0,d.jsx)("span",{className:n,children:o})}}]),r}(s.Component);t.Z=p},7945:function(e,t,r){"use strict";var n=r(4942),i=(r(67294),r(1216)),a=r(29602),o=r(9092),c=r(85893);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l="".concat(o.Z.APP.BASE_PATH).concat(o.Z.DEFAULTS.IMAGE_PLACEHOLDER),d=function(e){return e.target.src=l},f=(0,a.ZP)("div")({position:"relative",overflow:"hidden",backgroundColor:"#efefef",backgroundImage:"url('".concat(l,"')"),backgroundRepeat:"no-repeat",backgroundPosition:"center center",width:"fit-content",height:"fit-content"});t.Z=function(e){var t,r=e.src,n=e.lazy,a=e.preload,s=e.width,l=e.height,p=e.style,h=e.layout;r=null!==(t=r)&&void 0!==t&&t.startsWith("/")?"".concat(o.Z.APP.BASE_PATH).concat(r):r,""==l&&""==s&&(s="100%");var v=(0,c.jsx)("img",{src:r,layout:h,width:s,height:l,style:u(u({},p),{},{position:"absolute",top:0,left:0,margin:"0px",padding:"0px",border:"0px"}),onError:d});return n&&(v=(0,c.jsx)(i.ZP,{only:!0,children:v})),(0,c.jsxs)(f,{children:[(0,c.jsx)("img",{src:a,width:s,height:l,style:{opacity:"1",margin:"0px",padding:"0px",border:"0px"}}),v]})}},56787:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return z}});var n,i=r(70885),a=r(67294),o=r(11163),c=r(4942),s=r(93942),u=r(55619),l=r(15861),d=r(87757),f=r.n(d),p=r(24268),h=r(16161),v=r(30168),y=r(54397),g=r(8300);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x,m=(0,y.Ps)(n||(n=(0,v.Z)(["\nquery get($festival: String, $year: Int) {\n  storiesMoviesAwards(festival: $festival, year: $year) {\n    festival {\n      id\n      name\n    }\n    year\n    awarded{\n      category\n      entity\n      won\n      id\n    }\n  }\n}\n"]))),O={automata:{name:"stories_movies_award"},page:{title:"Award",url:function(e){var t=e.entity,r=e.award,n=e.year;return"/".concat(t,"/stories/awards/").concat(r,"/").concat(n)}}},w=O.automata.name,Z=(0,p.hg)("".concat(w,"/fetchData"),function(){var e=(0,l.Z)(f().mark((function e(t,r){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch(D(t)),e.next=3,n=t.id,i=t.year,(0,g.h)(m,{festival:n,year:parseInt(i)},(function(e){return j(j({},e),{},{data:e.data.storiesMoviesAwards?e.data.storiesMoviesAwards[0]:null})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}var n,i}),e)})));return function(t,r){return e.apply(this,arguments)}}()),P=(0,p.oM)({name:w,initialState:{params:{id:null,year:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,t){e.params=t.payload,"banner"!==e.params.renderer&&e.params.page>1&&o.default.push("".concat(O.page.url(),"/?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(x={},(0,c.Z)(x,Z.pending,(function(e,t){e.data=null,e.loading=!0,e.error=""})),(0,c.Z)(x,Z.fulfilled,(function(e,t){var r=t.payload,n=r.loading,i=r.error,a=r.data;e.data=a,e.loading=n,e.error=i})),(0,c.Z)(x,Z.rejected,(function(e,t){var r=t.error;e.data=[],e.loading=!1,e.error=r})),x)});h.h.reducerManager.add(w,P.reducer);P.reducer;var D=P.actions.setParams,E=(r(70357),r(86809)),_=r(50367),k=r(58862),Y=r(67247),S=(r(82356),r(12868)),A=r(14308),R=(r(43826),r(85893));function M(e){var t=e.data;e.loading;return(0,R.jsxs)(A.Z,{children:[(0,R.jsx)(S.Z,{src:t.image?t.image.poster:null}),(0,R.jsx)(E.Z,{text:"".concat(t.festival.name," [").concat(t.year,"]")}),(0,R.jsxs)(_.RQ,{children:[(0,R.jsx)(k.DK,{children:"awarded"}),(0,R.jsx)(Y.C,{data:t.awarded})]})]})}var N=r(28973);function T(e){return(0,R.jsx)(_.X,{children:(0,R.jsxs)(A.Z,{spacing:1,sx:{display:"flex",flexGrow:1},children:[(0,R.jsx)(N.Z,{variant:"rectangular",height:300}),(0,R.jsx)(N.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),(0,R.jsx)(N.Z,{variant:"text",style:{width:"40%"}}),(0,R.jsx)(N.Z,{variant:"text",style:{width:"25%"}}),(0,R.jsx)(N.Z,{variant:"text",style:{width:"25%"}}),(0,R.jsx)(N.Z,{variant:"text",style:{width:"25%"}})]})})}function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function I(e){var t,r,n,i=(0,s.I0)(),o=(0,s.v9)((function(e){return e[O.automata.name]}));return(0,a.useEffect)((function(){i(Z({id:e.id,year:e.year}))}),[]),o?(0,R.jsx)(u.Z,{config:O,type:e.render,data:o.data,loading:o.loading,error:o.error,detail:function(e){return(0,R.jsx)(M,{data:e.data})},skeleton:(0,R.jsx)(T,{}),params:H({},o.params),breadcrumbs:"".concat(e.breadcrumbs,"/").concat(null!==(t=null===o||void 0===o||null===(r=o.data)||void 0===r||null===(n=r.festival)||void 0===n?void 0:n.name)&&void 0!==t?t:"loading")}):null}function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Q=function(e){return(0,R.jsx)(I,F(F({},e),{},{render:"detail"}))},z=function(e){var t,r,n=null!==(t=(0,o.useRouter)().query.award)&&void 0!==t?t:[],a=(0,i.Z)(n,2),c=a[0],s=a[1];return s=null!==(r=s)&&void 0!==r?r:(new Date).getFullYear(),(0,R.jsx)(Q,{breadcrumbs:"/movies/stories/awards",id:c,year:s})}},84553:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/stories/awards/[...award]",function(){return r(56787)}])}},function(e){e.O(0,[6499,5685,5218,1216,5619,9774,2888,179],(function(){return t=84553,e(e.s=t);var t}));var t=e.O();_N_E=t}]);