(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8512],{6110:function(e,t,r){"use strict";r.d(t,{Z:function(){return O}});var n=r(4942),a=r(67294),o=r(55619),i={automata:{name:"about-project-sitemap"},page:{title:"Sitemap",description:"are you lost or looking for something?",url:function(){return"/about/project/sitemap"}},banner:{showData:!1}},s=r(14308),c=r(9092),u=JSON.parse('{"home":{"stories":{},"movies":{"____tt0454876":{},"festivals":{"____mf00001":{}},"stories":{"actors":{},"awards":{"____award=mf00001&&year=2015":{}},"directors":{},"remakes":{},"writers":{}}},"tv-shows":{"____tt0454876":{},"stories":{"actors":{},"directors":{},"remakes":{},"writers":{}}},"video-games":{"stories":{},"____tt0022215":{}},"podcasts":{"stories":{},"____0002da5f-49a2-31ba-b44c-cdeabdf113cb":{}},"people":{"stories":{},"____nm0000158":{}},"search":{},"about":{"data":{},"project":{"log":{"____posts/7-7-v-1-1":{}},"roadmap":{},"sitemap":{}},"tech":{},"timeline":{}}}}'),l=JSON.parse('{"home":{"stories":{},"movies":{"____[movie]?movie=tt0454876":{},"festivals":{"____[festival]?festival=mf00001":{}},"stories":{"actors":{},"awards":{"____[award]?award=mf00001&&year=2015":{}},"directors":{},"remakes":{},"writers":{}}},"tv-shows":{"____[tv-show]?tv-show=tt0454876":{}},"video-games":{"____[video-game]?video-game=tt0022215":{}},"podcasts":{"____[podcast]?podcast=0002da5f-49a2-31ba-b44c-cdeabdf113cb":{}},"people":{"____[person]?person=nm0000199":{}},"search":{},"about":{"data":{},"project":{"log":{"____posts/7-7-v-1-1":{}},"roadmap":{},"sitemap":{}},"tech":{},"timeline":{}}}}'),d=r(89757),p=r(95899),f=r(23508),m=r(26215),b=r(89260),_=r(85893);function v(e){var t=(0,a.useRef)([]),r=c.Z.TEST?l:u;return(0,_.jsx)(s.Z,{children:(0,_.jsx)(d.Z,{id:"sitemap","aria-label":"file system navigator",defaultCollapseIcon:(0,_.jsx)(f.Z,{}),defaultExpandIcon:(0,_.jsx)(m.Z,{}),sx:{flexGrow:1},expanded:t.current,children:g(t.current,"home","/",r.home)})})}function g(e,t,r,n){var a=e.length.toString();return e.push(a),(0,_.jsx)(p.Z,{nodeId:a,label:(0,_.jsx)(b.Z,{href:r,children:t}),children:Object.keys(n).map((function(t){if(!t.startsWith("____"))return g(e,t,"".concat(r).concat(t,"/"),n[t])}))},a)}var j=function(e){return(0,_.jsx)(s.Z,{children:(0,_.jsx)(v,{})})};function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){return(0,_.jsx)(o.Z,{params:e,config:i,mainCol:function(e){return(0,_.jsx)(j,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))}})}},55619:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(4942),a=r(67294),o=r(11163),i=r(93942),s=r(19016),c=r(25810),u=r(14763),l=r(50789),d=(r(14308),r(529)),p=r(85893);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e){var t,r,n=(0,i.I0)(),u=(0,o.useRouter)(),l=e.config,d=(0,a.useState)(!1),f=d[0],b=d[1],v=(0,i.v9)((function(e){return e[l.automata.name]})),g=null!==(t=e.params.render)&&void 0!==t?t:null,j=m(m({},e.params),{},{renderer:null!==(r=e.params.renderer)&&void 0!==r?r:g});v=e.data?{data:e.data,params:{page:e.params.page}}:v,(0,a.useEffect)((function(){v&&n((0,s.K4)({status:v.loading,sender:l.automata.name}))}),[v]),(0,a.useEffect)((function(){u&&b(u.isReady)}),[u]),(0,a.useEffect)((function(){j.breadcrumbs&&n((0,s.YA)({breadcrumbs:"function"===typeof j.breadcrumbs?j.breadcrumbs(v):j.breadcrumbs}))}),[j.breadcrumbs,v]);var h=function(t){e.fetch&&(e.data?e.fetch(m({},t)):n(e.fetch(m({},t))))};return(0,a.useEffect)((function(){f&&("banner"!==g||l.banner.showData)&&h(j)}),[f]),g&&"grid"!=g?(0,p.jsx)(_,{config:e.config,render:g,state:v,loading:!f||!v||v.loading,fetch:h,item:e.item,customDescription:e.customDescription,customTitle:e.customTitle,mainCol:e.mainCol||e.dashboard||e.detail,skeleton:e.skeleton,params:j}):(0,p.jsx)(c.C,{from:l.page.title,data:"render property wasn't set"})}function _(e){var t,r,n=(0,i.I0)(),a=e.config,o=e.item,l=e.mainCol,d=e.state,f=e.render,b=e.params,_=e.fetch,j=e.loading,h=a.page.title,O=(0,p.jsx)(v,m({},e));return j||("detail"===f&&null===d.data&&(n((0,s.PV)({message:"this is a demo version, this record was filtered out to reduce the database size"})),j=!0),"list"===f&&0===d.data.length&&(n((0,s.PV)({message:"data not found"})),j=!0),d.error&&(j=!0)),(0,p.jsxs)(p.Fragment,{children:[d&&d.error&&(0,p.jsx)(c.C,{from:h,data:d.error.message}),"banner"===f&&O,"list"===f&&(0,p.jsx)(u.Z,m(m({},e),{},{id:a.automata.name,banner:O,mainCol:l?l(e):(0,p.jsx)(g,m({},e))})),"page"===f&&(0,p.jsx)(u.Z,m(m({},e),{},{id:a.automata.name,banner:O,mainCol:l?(0,p.jsx)(p.Fragment,{children:j&&e.skeleton?e.skeleton:l({data:null!==(t=null===d||void 0===d?void 0:d.data)&&void 0!==t?t:null,loading:e.loading,params:b,fetch:_,item:o})}):(0,p.jsx)(c.C,{from:h,data:"main component missing, not found in mainCol or detail prop"})})),"detail"===f&&(0,p.jsx)(u.Z,m(m({},e),{},{id:a.automata.name,mainCol:l?(0,p.jsx)(p.Fragment,{children:j&&e.skeleton?e.skeleton:l({data:null!==(r=null===d||void 0===d?void 0:d.data)&&void 0!==r?r:null,loading:e.loading})}):(0,p.jsx)(c.C,{from:h,data:"main component missing, not found in mainCol or detail prop"})}))]})}function v(e){var t,r,n,a,o,i,s,c,u=e.config,l=e.state,f=null!==(t=null===(r=u.banner)||void 0===r?void 0:r.showData)&&void 0!==t&&t,m=e.customTitle?e.customTitle:null!==(n=null===(a=u.page)||void 0===a?void 0:a.title)&&void 0!==n?n:"NO TITLE",b=e.customDescription?e.customDescription:null!==(o=null===(i=u.page)||void 0===i?void 0:i.description)&&void 0!==o?o:"NO DESCRIPTION",_=null===(s=u.page)||void 0===s?void 0:s.url;return(0,p.jsx)(d.Z,{showData:f,loading:e.loading,title:m,description:b,data:null===l||void 0===l?void 0:l.data,item:e.item,actions:[{url:_(null!==(c=null===l||void 0===l?void 0:l.params)&&void 0!==c?c:{}),title:"See all"}],hero:"banner"!==e.render})}function g(e){var t,r,n=e.loading,a=e.state,o=e.fetch,i=e.item;return(0,p.jsx)(l.Z,{loading:n,page:null!==(t=null===a||void 0===a?void 0:a.params.page)&&void 0!==t?t:null,data:null!==(r=null===a||void 0===a?void 0:a.data)&&void 0!==r?r:null,onPageChange:function(e){o(m(m({},a.params),{},{page:e}))},item:i})}},91119:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});r(67294);var n=r(4942),a=r(6110),o=r(85893);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c=function(e){return(0,o.jsx)(a.Z,s(s({},e),{},{render:"page"}))},u=function(e){return(0,o.jsx)(c,{breadcrumbs:"/about/project/sitemap"})}},39882:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/project/sitemap",function(){return r(91119)}])}},function(e){e.O(0,[6499,5685,922,4010,9774,2888,179],(function(){return t=39882,e(e.s=t);var t}));var t=e.O();_N_E=t}]);