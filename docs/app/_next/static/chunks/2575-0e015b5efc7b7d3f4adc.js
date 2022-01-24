"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2575],{67247:function(e,r,t){t.d(r,{C:function(){return u}});t(67294);var n=t(29602),a=t(74035),o=t(58862),i=t(69963),c=t(85893),s=(0,n.ZP)("div")({padding:0,margin:"0 0 0.5rem 0"});function u(e){var r=e.data,t=(e.loading,e.mini),n=function(e,r){for(var t="",n=[],a=[],u=0,l=function(e){return"".concat(e.entity," ").concat(e.won?"\u2713":"")},d=0;d<e.length;d++){var p,f=e[d];t!==f.category&&(n.length>0&&a.push((0,c.jsx)(s,{children:r?n.slice(0,2):n},u++)),n=[],t=f.category,n.push((0,c.jsx)(o.x4,{children:t.toUpperCase()},u++)));var y=f.entityType?f.entityType:null!==(p=f.entityId)&&void 0!==p&&p.startsWith("nm")?"person":"movie";n.push((0,c.jsx)(o.VY,{children:f.entityId?(0,c.jsx)(i.Z,{type:y,id:f.entityId,children:l(f)}):l(f)},u++))}n.length>0&&a.push((0,c.jsx)(s,{children:n},u++));return r?a.slice(0,3):a}(r,t);return n=t?n:(0,c.jsx)(a.RQ,{children:n}),(0,c.jsx)(c.Fragment,{children:n})}},18794:function(e,r,t){t.d(r,{E:function(){return d},i:function(){return f}});var n,a,o=t(30168),i=t(4942),c=t(54397),s=t(42535);t(75679),t(85639);function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var d=function(e){var r=e.entity,t=e.year,n=e.page;return(0,s.h)(p(),{entity:r,year:parseInt(t),page:parseInt(n)},(function(e){return l(l({},e),{},{data:e.data.storyAwards})}))},p=function(){return(0,c.Ps)(n||(n=(0,o.Z)(["\nquery awards($year: Int, $page: Int) {\n  storyAwards(year: $year, page: $page) {\n    festival {\n      id: _id\n      name\n      image{\n        poster\n      }\n    }\n    year\n    awarded{\n      category\n      entity\n      won\n      entityId: entity_id\n    }\n  }\n}\n"])))},f=function(e){var r=e.id,t=e.year;return(0,s.h)(y(),{festival:r,year:parseInt(t)},(function(e){return l(l({},e),{},{data:e.data.storyAwards[0]})}))},y=function(){return(0,c.Ps)(a||(a=(0,o.Z)(["\nquery award($festival: String, $year: Int) {\n  storyAwards(festival: $festival, year: $year) {\n    festival {\n      id: _id\n      name\n      image{\n        poster\n      }          \n    }\n    year\n    awarded{\n      category\n      entity\n      won\n      entityId: entity_id\n    }\n  }\n}\n"])))}},69963:function(e,r,t){t.d(r,{Z:function(){return p}});t(67294);var n=t(49896),a=t(55476),o=t(44898),i=t(89260),c=t(85893);var s=function(e){var r=e.id,t=(e.entity,e.children),n=e.box;return(0,c.jsx)(i.Z,{box:n,border:!1,to:"/tv-shows/".concat(r),children:t})};var u=function(e){var r=e.id,t=(e.entity,e.children),n=e.box;return(0,c.jsx)(i.Z,{box:n,border:!1,to:"/video-games/".concat(r),children:t})},l=t(42341),d=t(25810);var p=function(e){var r=e.id,t=e.type,i=e.children,p=e.box;switch(t){case"movie":return(0,c.jsx)(n.Z,{box:p,id:r,children:i});case"person":return(0,c.jsx)(a.Z,{box:p,id:r,children:i});case"podcast":return(0,c.jsx)(o.Z,{box:p,id:r,children:i});case"tv-show":case"tv_show":return(0,c.jsx)(s,{box:p,id:r,children:i});case"video-game":case"video_game":return(0,c.jsx)(u,{box:p,id:r,children:i});case"festival":return(0,c.jsx)(l.Z,{box:p,id:r,children:i})}return(0,c.jsx)(d.C,{from:"ENTITY-LINK",data:"ENTITY ".concat(t," NOT FOUND")})}},22575:function(e,r,t){t.d(r,{Z:function(){return H}});var n,a=t(4942),o=t(67294),i=t(55619),c={automata:{name:"stories_awards"},page:{title:"Awards",description:"search and visualize the award's information from the Oscars, Golden Globes, Emmys and many more festivals across the world",url:function(e){var r=e.entity,t=e.year,n=e.page;return"/".concat(r,"/stories/awards?year=").concat(t,"&page=").concat(n)}},banner:{showData:!0}},s=t(15861),u=t(87757),l=t.n(u),d=t(24268),p=t(80105),f=t(11163),y=t(18794);function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){(0,a.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var j=c.automata.name,O=(0,d.hg)("".concat(j,"/fetchData"),function(){var e=(0,s.Z)(l().mark((function e(r,t){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch(v(r)),e.next=3,y.E(r);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),h=(0,d.oM)({name:j,initialState:{params:{renderer:null,year:null,entity:null,page:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,r){var t,n;e.params=g(g({},e.params),r.payload),e.params.page=null!==(t=null===(n=e.params)||void 0===n?void 0:n.page)&&void 0!==t?t:1,"banner"!==e.params.renderer&&f.default.push("".concat(c.page.url(e.params)),null,{shallow:!0})}},extraReducers:(n={},(0,a.Z)(n,O.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,a.Z)(n,O.fulfilled,(function(e,r){var t=r.payload,n=t.loading,a=t.error,o=t.data;e.data=o,e.loading=n,e.error=a})),(0,a.Z)(n,O.rejected,(function(e,r){var t=r.error;e.data=[],e.loading=!1,e.error=t})),n)});p.h.reducerManager.add(j,h.reducer);h.reducer;var v=h.actions.setParams,m=t(43332),w=(t(69963),t(42341)),x=t(57435),P=(t(59231),t(82356),t(67247)),Z=t(85893);function D(e){var r=e.entity,t=e.year,n=e.festival,a=e.image,o=e.awarded;return(0,Z.jsx)(x.Z,{box:!0,id:n.id,year:t,entity:r,children:(0,Z.jsx)(m.Z,{image:null===a||void 0===a?void 0:a.poster,text:(0,Z.jsx)(P.C,{data:o,mini:!0}),title:(0,Z.jsx)(w.Z,{id:n.id,children:n.name}),subtitle:t})})}var E=t(14308),I=t(24463),C=t(86547),S=t(15121),_=t(74035),k=t(98326),N=t(72642);function A(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function T(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?A(Object(t),!0).forEach((function(r){(0,a.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var $={year:null};function R(e,r){var t;switch(r.type){case"INIT":return T(T({},e),{},{year:r.payload.year?r.payload.year:e.year});case"YEAR_CHANGE":return T(T({},e),{},{year:r.payload});default:throw new Error("operation ".concat(null===(t=r.type)||void 0===t?void 0:t.toUpperCase()," not implemented"))}}function Y(e){var r=(0,o.useState)(!1),t=(r[0],r[1],(0,o.useReducer)(R,$)),n=t[0],a=t[1],i=e.params,c=e.onChange,s=(0,o.useMemo)((function(){return(0,k.V)().map((function(e){return{label:e,id:e}}))}),[]);(0,o.useEffect)((function(){a({type:"INIT",payload:{year:s.find((function(e){return e.id==i.year}))}})}),[i]);return n.year?(0,Z.jsx)(_.RQ,{children:(0,Z.jsxs)(E.Z,{spacing:2,children:[(0,Z.jsx)(S.Z,{id:"year",disableClearable:!0,options:s,value:n.year,onChange:function(e,r){return a({type:"YEAR_CHANGE",payload:r})},sx:{width:300},renderInput:function(e){return(0,Z.jsx)(C.Z,T(T({},e),{},{label:"Year"}))}}),(0,Z.jsx)(_.RQ,{children:(0,Z.jsx)(N.Z,{variant:"outlined",onClick:function(){!function(){var e={year:n.year.id};c&&c(e)}()},children:"Filter"})})]})}):null}var G=t(50789);function F(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function M(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?F(Object(t),!0).forEach((function(r){(0,a.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):F(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Q=function(e){var r=e.data,t=e.loading,n=e.fetch,a=e.params,o=e.item;return(0,Z.jsxs)(E.Z,{children:[(0,Z.jsx)(I.Z,{onChange:function(e){n(M(M({},e),{},{page:1}))},filters:function(e){var r=e.onChange;return(0,Z.jsx)(Y,{onChange:r,params:a})}}),(0,Z.jsx)(G.Z,{data:r,loading:t,item:o,page:e.params.page,params:a,onPageChange:function(e){return n(M(M({},a),{},{page:e}))}})]})};function U(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function q(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?U(Object(t),!0).forEach((function(r){(0,a.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):U(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function H(e){return(0,Z.jsx)(i.Z,{params:e,config:c,fetch:function(e){return O(q({},e))},item:function(r){return(0,Z.jsx)(D,q(q({full:!0},r),{},{entity:e.entity}))},mainCol:function(e){return(0,Z.jsx)(Q,q({},e))}})}}}]);