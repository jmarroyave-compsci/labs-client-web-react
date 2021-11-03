(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1792],{24746:function(e,n,t){"use strict";t.d(n,{Z:function(){return P}});var r=t(4942),i=t(67294),l=t(55619),s={automata:{name:"about-timeline"},page:{title:"How the project has evolved?",description:"a timeline since the project creation",url:"/about/timeline"},banner:{showData:!1}},o=t(14308),a=t(66890),c=(t(2348),t(34532)),u=(t(19888),t(15671)),f=t(43144),d=t(60136),p=t(82963),m=t(61120),h=(t(73935),t(58969)),w=t(85893);function b(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,m.Z)(e);if(n){var i=(0,m.Z)(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return(0,p.Z)(this,t)}}var y=function(e){(0,d.Z)(t,e);var n=b(t);function t(){return(0,u.Z)(this,t),n.apply(this,arguments)}return(0,f.Z)(t,[{key:"componentDidMount",value:function(){this.renderMultiChart()}},{key:"render",value:function(){return(0,w.jsx)("div",{id:"chart"})}},{key:"renderMultiChart",value:function(){var e=this.props.data;console.log(e);var n=50,t="0.25",r="0.85",i=h.Xf().domain(h.Wem(e.reduce((function(e,n){return e.concat(n.values.map((function(e){return e.date})))}),[]))).range([0,450]),l=h.BYU().domain([0,h.Fp7(e.reduce((function(e,n){return e.concat(n.values.map((function(e){return e.price})))}),[]))]).range([250,0]),s=h.PKp(h.Cn1),o=h.Ys("#chart").append("svg").attr("width","550px").attr("height","350px").append("g").attr("transform","translate(".concat(n,", ").concat(n,")")),a=h.jvg().x((function(e){return i(e.date)})).y((function(e){return l(e.price)})),c=o.append("g").attr("style","fill: none");c.selectAll(".line-group").data(e).enter().append("g").attr("class","line-group").on("mouseover",(function(e,n){o.append("text").attr("class","title-text").style("fill",s(n)).text(n.name).attr("text-anchor","middle").attr("x",225).attr("y",5)})).on("mouseout",(function(e){o.select(".title-text").remove()})).append("path").attr("class","line").attr("d",(function(e){return a(e.values)})).style("stroke",(function(e,n){return s(n)})).style("stroke-width","5px").style("opacity",t).on("mouseover",(function(e){h.td_(".line").style("opacity","0.1"),h.td_(".circle").style("opacity","0.25"),h.Ys(this).style("opacity","0.85").style("stroke-width","7px").style("cursor","pointer")})).on("mouseout",(function(e){h.td_(".line").style("opacity",t),h.td_(".circle").style("opacity",r),h.Ys(this).style("stroke-width","5px").style("cursor","none")})),c.selectAll("circle-group").data(e).enter().append("g").style("fill",(function(e,n){return s(n)})).selectAll("circle").data((function(e){return e.values})).enter().append("g").attr("class","circle").on("mouseover",(function(e,n){h.Ys(this).style("cursor","pointer").append("text").attr("class","text").text("".concat(n.price)).attr("x",(function(e){return i(n.date)+5})).attr("y",(function(e){return l(n.price)-10}))})).on("mouseout",(function(e){h.Ys(this).style("cursor","none").transition().duration(250).selectAll(".text").remove()})).append("circle").attr("cx",(function(e){return i(e.date)})).attr("cy",(function(e){return l(e.price)})).attr("r",8).style("opacity",r).on("mouseover",(function(e){h.Ys(this).transition().duration(250).attr("r",10)})).on("mouseout",(function(e){h.Ys(this).transition().duration(250).attr("r",8)}));var u=h.LLu(i).ticks(5),f=h.y4O(l).ticks(5);o.append("g").attr("class","x axis").attr("transform","translate(0, ".concat(250,")")).call(u),o.append("g").attr("class","y axis").call(f).append("text").attr("y",15).attr("transform","rotate(-90)").attr("fill","#000").text("Total values")}}]),t}(i.Component);function v(e){var n=(0,a.Y)();return n=function(e){var n=[],t=["area","files","loc","node_modules","loc","project","loc"];return Object.keys(e).forEach((function(t){var r={name:t,values:[]};n.push(r);var i=e[t];Object.keys(i).forEach((function(e){var n=i[e];r.values.push({date:new Date(e),price:n.own.lines})}))})),{rows:n,header:t}}(n),(0,w.jsxs)(o.Z,{children:[(0,w.jsx)(c.Dx,{children:"Lines of Code"}),(0,w.jsx)(y,{title:"test",data:n.rows,ranges:[],small:!0,height:100})]})}function g(e){return(0,w.jsx)(o.Z,{children:(0,w.jsx)(c.Dx,{children:"Screenshots"})})}function j(e){return(0,w.jsx)(o.Z,{children:(0,w.jsx)(c.Dx,{children:"Sitemap"})})}var x=function(e){return(0,w.jsxs)(o.Z,{children:[(0,w.jsx)(v,{}),(0,w.jsx)(g,{}),(0,w.jsx)(j,{})]})};function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function P(e){return(0,w.jsx)(l.Z,{noData:!0,config:s,type:e.render,mainCol:function(e){return(0,w.jsx)(x,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e))},breadcrumbs:e.breadcrumbs})}},19888:function(e,n,t){"use strict";t.d(n,{Rx:function(){return s},hT:function(){return o},T5:function(){return a}});var r=t(92077),i=t.n(r),l=t(24417),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0a";return i()(Number(e)).format(n)},o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=function(e){if(!e||null==e||""===e||0==e.length)return null;if(e instanceof Date)return e;try{var n=Number(e);return Number.isInteger(n)?new Date(n):new Date(e)}catch(t){return null}},r=function(e,n){switch(n){case"ago":return formatDistance(e,new Date);case"DD/MM/YYYY":return formatter(e,"dd/MM/yyyy");case"YYYY":return e.getFullYear();default:return formatter(e,n)}};return r(e=t(e),n)},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return l.default.toSentenceCase(e)}},2348:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r=t(4942),i=(t(67294),t(29602)),l=t(41120),s=t(9573),o=t(38732),a=t(98102),c=t(89755),u=t(56011),f=t(3694),d=t(13874);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var h=function(e){return{warningTableHeader:{color:d.MA[0]},primaryTableHeader:{color:d.lr[0]},dangerTableHeader:{color:d.E7[0]},successTableHeader:{color:d.nq[0]},infoTableHeader:{color:d.bE[0]},roseTableHeader:{color:d.An[0]},grayTableHeader:{color:d.X_[0]},table:{marginBottom:"0",width:"100%",maxWidth:"100%",backgroundColor:"transparent",borderSpacing:"0",borderCollapse:"collapse"},tableHeadCell:m(m({color:"inherit"},d.Df),{},{"&, &$tableCell":{fontSize:"1em"}}),tableCell:m(m({},d.Df),{},{lineHeight:"1.42857143",padding:"12px 8px",verticalAlign:"middle",fontSize:"0.8125rem"}),tableResponsive:{width:"100%",marginBottom:e.spacing(2),overflowX:"auto"},tableHeadRow:{height:"56px",color:"inherit",display:"table-row",outline:"none",verticalAlign:"middle"},tableBodyRow:{height:"48px",color:"inherit",display:"table-row",outline:"none",verticalAlign:"middle"}}},w=t(360),b=t(85893),y=(0,l.Z)(h),v=(0,i.ZP)(a.Z)((function(e){var n,t=e.theme;return n={},(0,r.Z)(n,"&.".concat(c.Z.head),{backgroundColor:t.palette.common.black,color:t.palette.common.white}),(0,r.Z)(n,"&.".concat(c.Z.body),{fontSize:"0.75rem"}),n})),g=(0,i.ZP)(f.Z)((function(e){return{"&:nth-of-type(odd)":{backgroundColor:e.theme.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}})),j=function(e){var n=y(),t=e.tableHead,r=e.tableHeader,i=e.tableData,l=e.tableHeaderColor,a=e.showHeader,c=e.tableDataExclude;return t=t||r,!0===a&&!t||!i?"No Data":(0,b.jsx)("div",{className:n.tableResponsive,children:(0,b.jsxs)(s.Z,{className:n.table,children:[void 0!==t&&a?(0,b.jsx)(u.Z,{className:n[l+"TableHeader"],children:(0,b.jsx)(g,{className:n.tableHeadRow,children:t.map((function(e,t){return(0,b.jsx)(v,{className:n.tableCell+" "+n.tableHeadCell,children:e},t)}))})}):null,(0,b.jsx)(o.Z,{children:(0,w.Yu)(i,(function(e,t){return(0,b.jsx)(g,{className:n.tableBodyRow,children:(0,w.Yu)(e,(function(e,t){if(!c||!c.includes(t))return(0,b.jsx)(v,{className:n.tableCell,children:e},t)}))},t)}))})]})})};j.defaultProps={tableHeaderColor:"gray",showHeader:!0};var x=j},34532:function(e,n,t){"use strict";t.d(n,{Dx:function(){return i}});t(67294);var r=t(29602),i=(t(85893),(0,r.ZP)("h2")({padding:"0",margin:"1rem 0 0.5rem 0",textTransform:"lowercase",fontSize:"2.5rem"}));(0,r.ZP)("h3")({marginTop:"1rem",marginBottom:"0rem"}),(0,r.ZP)("div")({fontSize:"0.9rem",lineHeight:"1rem",marginBottom:"0.5rem"})},66890:function(e,n,t){"use strict";t.d(n,{Y:function(){return s}});var r=t(9092),i=JSON.parse('{"scripts":{"2021-10-16":{"nm":{"files":8765,"lines":4161088},"own":{"files":91,"lines":4461}},"2021-10-17":{"nm":{"files":9006,"lines":4189911},"own":{"files":94,"lines":4627}},"2021-10-26":{"nm":{"files":9338,"lines":4224316},"own":{"files":106,"lines":5383}},"2021-10-27":{"nm":{"files":9338,"lines":4224316},"own":{"files":106,"lines":5388}},"2021-10-28":{"nm":{"files":9338,"lines":4224316},"own":{"files":106,"lines":5388}},"2021-10-30":{"nm":{"files":9579,"lines":4253139},"own":{"files":103,"lines":5339}},"2021-10-31":{"nm":{"files":11490,"lines":4568268},"own":{"files":103,"lines":5231}}},"client":{"2021-10-11":{"nm":{"files":41379,"lines":2060460},"own":{"files":530,"lines":33181}},"2021-10-16":{"nm":{"files":41835,"lines":2145232},"own":{"files":567,"lines":37693}},"2021-10-17":{"nm":{"files":41835,"lines":2145232},"own":{"files":575,"lines":37943}},"2021-10-23":{"nm":{"files":149375,"lines":5622641},"own":{"files":671,"lines":52468}},"2021-10-24":{"nm":{"files":154470,"lines":5793328},"own":{"files":677,"lines":52455}},"2021-10-26":{"nm":{"files":154555,"lines":5799136},"own":{"files":710,"lines":55935}},"2021-10-27":{"nm":{"files":154555,"lines":5799136},"own":{"files":695,"lines":55891}},"2021-10-28":{"nm":{"files":154561,"lines":5799630},"own":{"files":704,"lines":56105}},"2021-10-30":{"nm":{"files":154561,"lines":5799630},"own":{"files":704,"lines":56208}},"2021-10-31":{"nm":{"files":154561,"lines":5799630},"own":{"files":705,"lines":87085}}},"server":{"2021-10-16":{"nm":{"files":10362,"lines":1789436},"own":{"files":75,"lines":3919}},"2021-10-17":{"nm":{"files":10362,"lines":1789436},"own":{"files":75,"lines":3920}},"2021-10-26":{"nm":{"files":10729,"lines":1841724},"own":{"files":154,"lines":11026}},"2021-10-27":{"nm":{"files":10729,"lines":1841724},"own":{"files":154,"lines":11025}},"2021-10-28":{"nm":{"files":10729,"lines":1841724},"own":{"files":154,"lines":11037}},"2021-10-30":{"nm":{"files":10729,"lines":1841724},"own":{"files":154,"lines":11078}},"2021-10-31":{"nm":{"files":10729,"lines":1841724},"own":{"files":154,"lines":11078}}}}'),l=JSON.parse('{"scripts":{"2021-10-16":{"nm":{"files":8765,"lines":4161088},"own":{"files":91,"lines":4461}},"2021-10-17":{"nm":{"files":9006,"lines":4189911},"own":{"files":94,"lines":4627}},"2021-10-26":{"nm":{"files":9338,"lines":4224316},"own":{"files":106,"lines":5383}},"2021-10-27":{"nm":{"files":9338,"lines":4224316},"own":{"files":106,"lines":5388}},"2021-10-28":{"nm":{"files":9338,"lines":4224316},"own":{"files":106,"lines":5388}},"2021-10-30":{"nm":{"files":9579,"lines":4253139},"own":{"files":103,"lines":5339}},"2021-10-31":{"nm":{"files":11490,"lines":4568268},"own":{"files":103,"lines":5231}}},"client":{"2021-10-11":{"nm":{"files":41379,"lines":2060460},"own":{"files":530,"lines":33181}},"2021-10-16":{"nm":{"files":41835,"lines":2145232},"own":{"files":567,"lines":37693}},"2021-10-17":{"nm":{"files":41835,"lines":2145232},"own":{"files":575,"lines":37943}},"2021-10-23":{"nm":{"files":149375,"lines":5622641},"own":{"files":671,"lines":52468}},"2021-10-24":{"nm":{"files":154470,"lines":5793328},"own":{"files":677,"lines":52455}},"2021-10-26":{"nm":{"files":154555,"lines":5799136},"own":{"files":710,"lines":55935}},"2021-10-27":{"nm":{"files":154555,"lines":5799136},"own":{"files":695,"lines":55891}},"2021-10-28":{"nm":{"files":154561,"lines":5799630},"own":{"files":704,"lines":56105}},"2021-10-30":{"nm":{"files":154561,"lines":5799630},"own":{"files":704,"lines":56208}},"2021-10-31":{"nm":{"files":154561,"lines":5799630},"own":{"files":705,"lines":87085}}},"server":{"2021-10-16":{"nm":{"files":10362,"lines":1789436},"own":{"files":75,"lines":3919}},"2021-10-17":{"nm":{"files":10362,"lines":1789436},"own":{"files":75,"lines":3920}},"2021-10-26":{"nm":{"files":10729,"lines":1841724},"own":{"files":154,"lines":11026}},"2021-10-27":{"nm":{"files":10729,"lines":1841724},"own":{"files":154,"lines":11025}},"2021-10-28":{"nm":{"files":10729,"lines":1841724},"own":{"files":154,"lines":11037}},"2021-10-30":{"nm":{"files":10729,"lines":1841724},"own":{"files":154,"lines":11078}},"2021-10-31":{"nm":{"files":10729,"lines":1841724},"own":{"files":154,"lines":11078}}}}'),s=function(){return r.Z.TEST?l:i}},37392:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});t(67294);var r=t(4942),i=t(24746),l=t(85893);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var a=function(e){return(0,l.jsx)(i.Z,o(o({},e),{},{render:"page"}))},c=function(e){return(0,l.jsx)(a,{breadcrumbs:"/about/timeline"})}},68942:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/timeline",function(){return t(37392)}])}},function(e){e.O(0,[6499,5685,2328,4467,8969,5619,9774,2888,179],(function(){return n=68942,e(e.s=n);var n}));var n=e.O();_N_E=n}]);