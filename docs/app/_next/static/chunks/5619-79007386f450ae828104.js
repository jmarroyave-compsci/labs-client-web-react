"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5619],{73981:function(e,r,t){t.d(r,{Y:function(){return n}});var n=t(80959).d.actions.setPage},69242:function(e,r,t){t.d(r,{Z:function(){return c}});t(67294);var n=t(14308),i=t(28973),o=t(50367),a=t(85893);function c(e){return(0,a.jsx)(o.X,{children:(0,a.jsxs)(n.Z,{spacing:1,sx:{display:"flex",flexGrow:1},children:[(0,a.jsx)(i.Z,{variant:"rectangular",height:300}),(0,a.jsx)(i.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),(0,a.jsx)(i.Z,{variant:"text",style:{width:"40%"}}),(0,a.jsx)(i.Z,{variant:"text",style:{width:"25%"}}),(0,a.jsx)(i.Z,{variant:"text",style:{width:"25%"}}),(0,a.jsx)(i.Z,{variant:"text",style:{width:"25%"}})]})})}},529:function(e,r,t){t.d(r,{Z:function(){return h}});t(67294);var n=t(14308),i=(t(89260),t(41849)),o=t(86529),a=(t(70338),t(28973)),c=t(50367),s=t(85893);function l(e){var r=e.data,t=e.loading;return t=t||!r||!r.length,r=r&&r.length&&r.length>0?r:[1,2,3,4,5],(0,s.jsx)(c.RQ,{children:(0,s.jsx)(o.default,{additionalTransfrom:0,arrows:!0,autoPlaySpeed:3e3,centerMode:!1,className:"",containerClass:"container-with-dots",dotListClass:"",draggable:!0,focusOnSelect:!1,infinite:!0,itemClass:"ui-carousel-item",keyBoardControl:!0,minimumTouchDrag:80,renderButtonGroupOutside:!1,renderDotsOutside:!1,responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:3,partialVisibilityGutter:40},mobile:{breakpoint:{max:464,min:0},items:1,partialVisibilityGutter:30},tablet:{breakpoint:{max:1024,min:464},items:2,partialVisibilityGutter:30}},showDots:!1,sliderClass:"",slidesToSlide:1,swipeable:!0,style:{display:"flex"},children:r.map((function(r,n){return(0,s.jsx)(c.ck,{paper:!0,children:t?(0,s.jsx)(d,{}):e.renderItem?e.renderItem(r):u(r)},n)}))})})}function d(){return(0,s.jsxs)(n.Z,{spacing:1,sx:{padding:"1rem",display:"flex",flexGrow:1},children:[(0,s.jsx)(a.Z,{variant:"text",width:"80%"}),(0,s.jsx)(a.Z,{variant:"rectangular",height:118}),(0,s.jsx)(a.Z,{variant:"text"})]})}function u(e){e.id;var r=e.description,t=e.title;e.image,e.link;return(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:t}),(0,s.jsx)("span",{children:r})]})}var f=t(72642),m=t(11163),p=function(e){var r=e.url,t=e.href,n=e.children;e.border;r=r||t;var i=(0,m.useRouter)();return(0,s.jsx)(f.Z,{variant:"outlined",size:"large",onClick:function(){i.push(r)},children:n})},g=function(e,r,t){return(0,s.jsx)(l,{data:r,renderItem:t})},h=function(e){var r=e.title,t=e.description,o=e.carousel,a=e.footer,c=e.hero,l=e.actions,d=e.data,u=e.item,f=e.showData;return(0,s.jsxs)(n.Z,{children:[(0,s.jsx)(i.Dx,{children:r}),t&&(0,s.jsx)(i.dk,{children:t}),!c&&o,!c&&!0===f&&!o&&g("carousel",d,u),!c&&(0,s.jsxs)(i.$_,{children:[l&&l.map((function(e,r){return(0,s.jsx)(p,{border:!0,href:e.url,children:e.title},r)})),a]})]})}},50789:function(e,r,t){t.d(r,{Z:function(){return u}});t(67294);var n=t(52651),i=t(23275),o=t(79895),a=t(14308),c=t(28973),s=t(62448),l=t(50367),d=t(85893);function u(e){var r=e.data,t=e.loading,o=e.url,a=e.skeleton,c=e.item,u=e.onPageChange,m=e.page;return t=t||!r||0==r.length,r=r&&r.length>0?r:[1,2,3,4,5,6],(0,d.jsx)(l.RQ,{children:(0,d.jsx)(s.Z,{data:r,url:o,onPageChange:u,page:m,loading:t,children:(0,d.jsx)(n.Z,{justifyContent:"center",fill:!0,style:{width:"100%"},children:r.map((function(e,r){return(0,d.jsx)(i.Z,{xs:12,sm:6,md:6,lg:4,children:(0,d.jsx)(l.ck,{children:t?a||(0,d.jsx)(f,{}):c?c(e):null})},r)}))})})})}function f(){return(0,d.jsx)(o.Z,{style:{flexGrow:1,padding:"0.5rem"},children:(0,d.jsxs)(a.Z,{spacing:1,children:[(0,d.jsx)(c.Z,{variant:"text",width:"80%"}),(0,d.jsx)(c.Z,{variant:"rectangular",height:240}),(0,d.jsx)(c.Z,{variant:"text"})]})})}},62448:function(e,r,t){t.d(r,{Z:function(){return l}});t(67294);var n=t(11163),i=t(14308),o=t(72642),a=t(50367),c=t(58862),s=t(85893);function l(e){var r=(0,n.useRouter)(),t=e||{},l=t.children,d=t.route,u=t.loading,f=t.data,m=t.url,p=t.skeleton,g=t.onPageChange,h=t.page;h=(h=h||(d&&d.page?d.page:null))?parseInt(h):1;var b=function(e){if(window.scrollTo(0,0),g)g(e);else{var t="".concat(m,"/").concat(e);r.push(t)}},j=f&&f.length<10,x=1==h;return(0,s.jsx)(a.RQ,{children:f&&f.length>0?(0,s.jsxs)(i.Z,{spacing:2,children:[l,(0,s.jsxs)(i.Z,{direction:"row",spacing:2,justifyContent:"center",children:[(0,s.jsx)(o.Z,{variant:"outlined",disabled:x,onClick:function(){return b(h-1)},children:"Back"}),(0,s.jsx)(o.Z,{variant:"outlined",disabled:j,onClick:function(){return b(h+1)},children:"Next"})]})]}):(0,s.jsx)(c.Dx,{children:u?p||"loading":"No results"})})}},14308:function(e,r,t){t.d(r,{Z:function(){return s}});var n=t(4942),i=(t(67294),t(26447)),o=t(85893);function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e){return(0,o.jsx)(i.Z,c(c({},e),{},{children:e.children}))}},70357:function(e,r,t){t.d(r,{Z:function(){return o}});t(67294);var n=t(14308),i=t(85893);function o(e){var r=e.noPadding;return(0,i.jsx)(n.Z,{sx:{padding:r?{}:{xs:"0rem 2rem 3rem 2rem",sm:"0rem 2rem 3rem 2rem",lg:"0rem 4rem 3rem 4rem"},fontSize:"1rem"},children:e.children})}},40915:function(e,r,t){var n=t(15671),i=t(43144),o=t(60136),a=t(82963),c=t(61120),s=t(67294),l=t(90908),d=t(11053),u=t(71508),f=t(85893);function m(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=(0,c.Z)(e);if(r){var i=(0,c.Z)(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return(0,a.Z)(this,t)}}var p=function(e){(0,o.Z)(t,e);var r=m(t);function t(){return(0,n.Z)(this,t),r.apply(this,arguments)}return(0,i.Z)(t,[{key:"render",value:function(){var e=this.props,r=e.className,t=e.cover,n=(e.padding,e.children),i=(e.hero,e.rounded),o=(e.compact,!0===t?"100vh":"inherit");i=!0===i;var a=this.getStyle(r);return(0,f.jsx)(l.Z,{from:"/core/ui/section",children:(0,f.jsx)(u.Z,{className:"com-layout-section ".concat(r),sx:{padding:{xs:this.getPadding("xs"),sm:this.getPadding("sm"),md:this.getPadding("md")},boxSizing:"border-box",width:"100%",height:o,borderRadius:i?"0.5rem 0.5rem 0 0":0,background:a.background,color:a.color},children:n})})}},{key:"getPadding",value:function(e){var r=this.props.compact,t={xs:{top:1.5,bottom:3,left:1.5,right:1.5},sm:{top:2,bottom:4,left:3,right:3},md:{top:3,bottom:2.5,left:2.5,right:2.5}}[e];return"".concat(t.top,"rem ").concat(t.right,"rem ").concat(r?t.top:t.bottom,"rem ").concat(t.left,"rem")}},{key:"getStyle",value:function(e){switch(e){case"section-0":return{background:"linear-gradient(60deg, ".concat(d.Z.palette.primary.dark," 0%, #000 150%)"),color:d.Z.palette.primary.contrastText};case"section-1":return{background:"linear-gradient(60deg, ${theme.palette.primary.light} 0%, rgba(85,85,85,1) 100%)",color:"black"};case"section-2":return{background:"linear-gradient(180deg, rgba(215,215,215,1) 0%, rgba(255,245,245,1) 125%)",color:"#444"};case"section-3":return{background:"linear-gradient(180deg, #fff 0%, rgba(215,215,215,1) 100%)",color:"#333"};default:return{background:"inherit",color:"inherit"}}}}]),t}(s.Component);r.Z=p},14763:function(e,r,t){t.d(r,{Z:function(){return y}});var n=t(4942),i=(t(67294),t(14308)),o=t(70357),a=t(40915),c=t(52651),s=t(23275),l=t(29602),d=t(29352),u=t(36501),f=t(89260),m=t(85893),p=(0,l.ZP)("div")({padding:"0.85rem"}),g=(0,l.ZP)("div")({fontSize:"1.5rem",paddingBottom:"0.5rem"}),h=(0,l.ZP)("div")({fontSize:"0.9rem"}),b=function(e){var r=e.filter,t=e.breadcrumbs,n=(0,d.i)(r,t);return(0,m.jsx)(u.Z,{children:(0,m.jsxs)(p,{children:[(0,m.jsx)(g,{children:"See also"}),n.map((function(e,r){return(0,m.jsx)(h,{children:(0,m.jsx)(f.Z,{href:e.url,children:e.title})},r)}))]})})},j=t(50367);function x(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?x(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function y(e){var r=e.banner,t=e.mainCol,n=e.rightCol,l=e.id,d=!!e.noPadding&&e.noPadding;return(0,m.jsxs)(i.Z,{children:[r&&(0,m.jsx)("div",{style:{marginBottom:"2rem"},children:(0,m.jsx)(a.Z,{compact:!0,className:"section-0",children:r})}),(0,m.jsx)(o.Z,{noPadding:d,children:(0,m.jsxs)(c.Z,{className:"page-module",fill:!0,children:[(0,m.jsx)(s.Z,{xs:12,sm:12,md:9,lg:10,children:(0,m.jsx)(j.X,{children:t})}),(0,m.jsx)(s.Z,{xs:12,sm:12,md:3,lg:2,children:(0,m.jsxs)("div",{style:{paddingLeft:"1rem",paddingRight:"0.5rem"},children:[(0,m.jsx)(b,v(v({},e),{},{filter:l,breadcrumbs:e.breadcrumbs})),n]})})]})})]})}},55619:function(e,r,t){t.d(r,{Z:function(){return g}});var n=t(4942),i=t(67294),o=(t(2885),t(14763)),a=t(50789),c=(t(14308),t(529)),s=t(93942),l=t(73981),d=t(25810),u=t(69242),f=t(85893);function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function g(e){var r,t,n,a,m,g,b=(0,s.I0)(),j=e.config,x=e.error,v=e.data,y=e.item,O=e.type,Z=e.noData,P=null!==(r=null===j||void 0===j||null===(t=j.banner)||void 0===t?void 0:t.showData)&&void 0!==r&&r,w=e.title?e.title:null!==(n=null===j||void 0===j||null===(a=j.page)||void 0===a?void 0:a.title)&&void 0!==n?n:"NO TITLE",k=e.description?e.description:null!==(m=null===j||void 0===j||null===(g=j.page)||void 0===g?void 0:g.description)&&void 0!==m?m:"NO DESCRIPTION",D=e.url?e.url:j.page.url,C=e.mainCol?e.mainCol:null;C=e.dashboard?e.dashboard:C,C=e.detail?e.detail:C;var S=!("banner"==O||Z||!e.loading&&e.data&&null!==e.data&&0!=e.data.length);(0,i.useEffect)((function(){e.breadcrumbs&&b((0,l.Y)({breadcrumbs:e.breadcrumbs}))}),[e.breadcrumbs]);var E=(0,f.jsx)(c.Z,{showData:P,loading:S,title:w,description:k,data:v,item:y,actions:[{url:D,title:"See all"}],hero:"banner"!==O});return O&&"grid"!=O?(0,f.jsxs)(f.Fragment,{children:[x&&(0,f.jsx)(d.C,{from:w,data:x.message}),"banner"===O&&E,"list"===O&&(0,f.jsx)(o.Z,p(p({},e),{},{id:j.automata.name,breadcrumbs:e.breadcrumbs,banner:E,mainCol:C?C(e):h(S,v,e.onPageChange,e.params.page,y)})),"page"===O&&(0,f.jsx)(o.Z,p(p({},e),{},{id:j.automata.name,breadcrumbs:e.breadcrumbs,banner:E,mainCol:C?(0,f.jsx)(f.Fragment,{children:S&&null==e.dashboard?e.skeleton?e.skeleton:(0,f.jsx)(u.Z,{}):C(e)}):(0,f.jsx)(d.C,{from:w,data:"main component missing, not found in mainCol or detail prop"})})),"detail"===O&&(0,f.jsx)(o.Z,p(p({},e),{},{id:j.automata.name,breadcrumbs:e.breadcrumbs,mainCol:C?(0,f.jsx)(f.Fragment,{children:S?e.skeleton?e.skeleton:(0,f.jsx)(u.Z,{}):C(e)}):(0,f.jsx)(d.C,{from:w,data:"main component missing, not found in mainCol or detail prop"})}))]}):(0,f.jsx)(d.C,{from:w,data:"render property wasn't set"})}function h(e,r,t,n,i){return(0,f.jsx)(a.Z,{loading:e,page:n,data:r,onPageChange:t,item:i})}},41849:function(e,r,t){t.d(r,{Dx:function(){return i},dk:function(){return o},$_:function(){return a}});t(67294);var n=t(29602),i=(0,n.ZP)("h2")({padding:"0 0 1rem 0",margin:0}),o=((0,n.ZP)("h3")({padding:0,margin:0}),(0,n.ZP)("div")({fontSize:"1rem",marginBottom:"1rem"})),a=(0,n.ZP)("div")({paddingTop:"2rem"})},50367:function(e,r,t){t.d(r,{RQ:function(){return u},X:function(){return g},ck:function(){return p}});var n=t(4942),i=(t(67294),t(29602)),o=t(36501),a=t(85893);function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e){return(0,a.jsx)(o.Z,s(s({},e),{},{children:e.children}))}function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}var u=(0,i.ZP)("div")({margin:"0 0 2rem 0",padding:0,width:"100%"}),f=(0,i.ZP)("div")({margin:"0",padding:"0 1rem 1rem 0",display:"flex",flexGrow:1,overflow:"hidden",width:"100%"}),m=(0,i.ZP)("div")({display:"flex",flexGrow:1,width:"100%"}),p=function(e){var r=!e.paper||e.paper,t=(0,a.jsx)(m,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},e));return r&&(t=(0,a.jsx)(l,{sx:{display:"flex",flexGrow:1,margin:"0.1rem",width:"100%"},children:t})),(0,a.jsx)(f,{children:t})},g=(0,i.ZP)("div")({padding:"0rem 0rem 4rem 0rem"})},58862:function(e,r,t){t.d(r,{Zh:function(){return i},Dx:function(){return o},DK:function(){return a},Qy:function(){return c},GH:function(){return s},nv:function(){return l},x4:function(){return d},oA:function(){return u},VY:function(){return f}});t(67294);var n=t(29602),i=(0,n.ZP)("div")({padding:"1rem"}),o=(0,n.ZP)("h2")({fontSize:"2.5rem",lineHeight:"2.5rem",padding:"0",margin:"0 0 0.75rem 0"}),a=(0,n.ZP)("h3")({fontSize:"1.8rem",lineHeight:"2rem",textTransform:"lowercase",padding:"0",paddingBottom:"0.25rem",margin:"0 0 0.5rem 0",borderBottom:"2px solid #888"}),c=(0,n.ZP)("div")({fontSize:"0.7rem",lineHeight:"0.7rem",textTransform:"uppercase",fontWeight:"400",margin:"0 0 0 0",padding:"0"}),s=(0,n.ZP)("div")({fontSize:"1rem",lineHeight:"1.25rem",margin:"0 0 0.5rem 0"}),l=(0,n.ZP)("div")({margin:0,marginBottom:"1rem"}),d=(0,n.ZP)("span")({fontSize:"0.7rem",lineHeight:"0.75rem",margin:0}),u=(0,n.ZP)("span")({fontSize:"0.6rem",lineHeight:"0.75rem",fontStyle:"italic",margin:0}),f=(0,n.ZP)("div")({fontSize:"1rem",lineHeight:"1.25rem",margin:0})}}]);