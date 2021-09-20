"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[2980],{22483:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var n=r(67294),o=r(45697),i=r.n(o),a=r(53703),c=r(92863),l=r(41120),u=r(79088);const s={successText:{color:u.nq[0]},upArrowCardCategory:{width:"16px",height:"16px"},stats:{color:u.X_[0],display:"inline-flex",fontSize:"12px",lineHeight:"22px","& svg":{top:"4px",width:"16px",height:"16px",position:"relative",marginRight:"3px",marginLeft:"3px"},"& .fab,& .fas,& .far,& .fal,& .material-icons":{top:"4px",fontSize:"16px",position:"relative",marginRight:"3px",marginLeft:"3px"}},cardHeader:{paddingBottom:"0.75rem"},cardCategory:{color:u.X_[0],margin:"0",fontSize:"14px",marginTop:"0",paddingTop:"10px",marginBottom:"0"},cardCategoryWhite:{color:"rgba("+(0,u.oo)(u.zQ)+",.62)",margin:"0",fontSize:"14px",marginTop:"0",marginBottom:"0"},cardTitle:{color:u.X_[2],marginTop:"0px",minHeight:"auto",fontWeight:"300",fontFamily:"'Roboto', 'Helvetica', 'Arial', sans-serif",marginBottom:"3px",textDecoration:"none","& small":{color:u.X_[1],fontWeight:"400",lineHeight:"1"}},cardTitleWhite:{color:u.zQ,marginTop:"0px",minHeight:"auto",fontWeight:"300",fontFamily:"'Roboto', 'Helvetica', 'Arial', sans-serif",marginBottom:"3px",textDecoration:"none","& small":{color:u.X_[1],fontWeight:"400",lineHeight:"1"}}};var f=(0,l.Z)(s);function p(e){var t=e.icon,r=e.title,o=e.subtitle,i=e.footer,l=e.color,u=f();return n.createElement(a.Zb,{className:u.cardHeader},n.createElement(a.Ol,{color:l,stats:!0,icon:!0},n.createElement(a._K,{color:l},n.createElement(c.Z,null,t)),n.createElement("p",{className:u.cardCategory},r),n.createElement("h3",{className:u.cardTitle},o)),i&&n.createElement(a.iR,{stats:!0},n.createElement("div",{className:u.stats},i)))}function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function b(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}p.propTypes={title:i().string,subtitle:i().string,icon:i().string,footer:i().object,color:i().string},p.defaultProps={title:"Title",subtitle:"This is the subtitle",icon:"content_copy",footer:null,color:"primary"};var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(c,e);var t,r,o,i,a=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(o);if(i){var r=g(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return b(this,e)});function c(){return d(this,c),a.apply(this,arguments)}return t=c,(r=[{key:"render",value:function(){var e=this.props,t=e.title,r=e.data,o=(e.smaller,e.type),i=e.icon;return n.createElement(p,{icon:i,title:t,subtitle:this.renderType(o,r)})}},{key:"renderType",value:function(e,t){switch(e){case"number":case"string":return t}}}])&&m(t.prototype,r),c}(n.Component);const w=v;v.propTypes={title:i().string,type:i().oneOf(["number","string"]),smaller:i().bool},v.defaultProps={title:"title",data:null,type:"number",smaller:!1}},32980:(e,t,r)=>{r.r(t),r.d(t,{default:()=>T});var n=r(67294),o=r(80383),i=r(81648),a=r(45697),c=r.n(a),l=function(){return l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)},u=function(e){var t=e.animate,r=e.backgroundColor,o=e.backgroundOpacity,i=e.baseUrl,a=e.children,c=e.foregroundColor,u=e.foregroundOpacity,s=e.gradientRatio,f=e.uniqueKey,p=e.interval,y=e.rtl,d=e.speed,m=e.style,h=e.title,b=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),g=f||Math.random().toString(36).substring(6),v=g+"-diff",w=g+"-animated-diff",E=g+"-aria",x=y?{transform:"scaleX(-1)"}:null,O="0; "+p+"; 1",j=d+"s";return(0,n.createElement)("svg",l({"aria-labelledby":E,role:"img",style:l(l({},m),x)},b),h?(0,n.createElement)("title",{id:E},h):null,(0,n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+i+"#"+v+")",style:{fill:"url("+i+"#"+w+")"}}),(0,n.createElement)("defs",null,(0,n.createElement)("clipPath",{id:v},a),(0,n.createElement)("linearGradient",{id:w},(0,n.createElement)("stop",{offset:"0%",stopColor:r,stopOpacity:o},t&&(0,n.createElement)("animate",{attributeName:"offset",values:-s+"; "+-s+"; 1",keyTimes:O,dur:j,repeatCount:"indefinite"})),(0,n.createElement)("stop",{offset:"50%",stopColor:c,stopOpacity:u},t&&(0,n.createElement)("animate",{attributeName:"offset",values:-s/2+"; "+-s/2+"; "+(1+s/2),keyTimes:O,dur:j,repeatCount:"indefinite"})),(0,n.createElement)("stop",{offset:"100%",stopColor:r,stopOpacity:o},t&&(0,n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+s),keyTimes:O,dur:j,repeatCount:"indefinite"})))))};u.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var s=function(e){return e.children?(0,n.createElement)(u,l({},e)):(0,n.createElement)(f,l({},e))},f=function(e){return(0,n.createElement)(s,l({viewBox:"0 0 476 124"},e),(0,n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};const p=s;function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function b(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(c,e);var t,r,o,i,a=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(o);if(i){var r=g(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return b(this,e)});function c(){return d(this,c),a.apply(this,arguments)}return t=c,(r=[{key:"render",value:function(){var e=this.props,t=e.data,r=e.type,o=e.grow;switch(r){case"title":case"=":case"+":t=[[["="]]];break;case"text-1-line":t=[[["=="]]];break;case"square":t=[[["-","100","100"]]];break;case"rect4:3":t=[[["-","100","75"]]]}t=this.renderPlaceholders(t);var i=o?{}:{width:t.width,height:t.height};return n.createElement(p,{style:i,height:t.height,width:t.width,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#bcbcbc"},t.phs.map((function(e){return e})))}},{key:"renderPlaceholders",value:function(e){for(var t,r,o=0,i=[],a=0,c=0,l=0;l<e.length;l++){for(var u=e[l],s=0,f=0,p=0,y=0;y<u.length;y++){switch((t=u[y])[1]=parseInt(t[1]),t[2]=parseInt(t[2]),t[0]){case"o":r=n.createElement("rect",{key:c++,x:s,y:a,rx:"0",ry:"0",width:t[1],height:t[2]}),s+=t[1]+(l+1<e.length&&l>0?4:0),f=t[2];break;case"=":case"==":r=n.createElement("rect",{key:c++,x:s,y:a,rx:"0",ry:"0",width:100*t[0].length,height:20}),s+=100*t[0].length+(l+1<e.length&&l>0?4:0),f=20;break;default:r=n.createElement("rect",{key:c++,x:s,y:a,rx:"0",ry:"0",width:t[1],height:t[2]}),s+=t[1]+(l+1<e.length&&l>0?4:0),f=t[2]}o=s>o?s:o,p=f>p?f:p,i.push(r)}a+=p+(y+1<u.length&&y>0?4:0)}return{height:a,width:o,phs:i}}}])&&m(t.prototype,r),c}(n.Component);v.propTypes={data:c().array,type:c().string,grow:c().bool},v.defaultProps={type:"custom",grow:!0};const w=v;var E=r(22483),x=r(31504);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e,t){return _=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_(e,t)}function k(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}const T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(u,e);var t,r,a,c,l=(a=u,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(a);if(c){var r=P(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return k(this,e)});function u(){return j(this,u),l.apply(this,arguments)}return t=u,(r=[{key:"render",value:function(){var e=this.props,t=e.data,r=e.loading;return!t||r?this.renderPlaceholder():this.renderContent(t)}},{key:"renderContent",value:function(e){return this.renderTemplate(e)}},{key:"renderPlaceholder",value:function(){var e=n.createElement(w,{data:[[["-","100","100"]]]});return this.renderTemplate(e,e)}},{key:"renderTemplate",value:function(e){var t=e.movies,r=e.countries,a=e.genres,c=e.types,l=e.yearsAdded,u=e.yearsReleased,s=e.people,f=e.actors,p=e.directors,y=function(e,t,r){return n.createElement(i.Z,{xs:12,sm:6,md:4,lg:3,style:{paddingRight:"1rem"}},n.createElement(E.default,{title:e,data:t?t.toString():t,icon:r}))},d=function(e,t,r){return n.createElement(i.Z,{xs:12,sm:6,md:6,lg:6,style:{paddingRight:"1rem"}},n.createElement(x.default,{title:e,data:t||{},ranges:r}))};return n.createElement("div",{style:{width:"100%"}},n.createElement(o.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},n.createElement(i.Z,{xs:12,sm:12,md:12},n.createElement(o.Z,{justifyContent:"center",fill:!0},y("movies",t,"local_movies"))),n.createElement(i.Z,{xs:12,sm:12,md:12},n.createElement(o.Z,{justifyContent:"center",fill:!0},d("countries",r,[1,5,10,20,30,70,100,250]),d("genres",a,[100,250]),d("types",c,[]),d("years added",l,[50,100]),d("years released",u,[10,25,50]))),n.createElement(i.Z,{xs:12,sm:12,md:12},n.createElement(o.Z,{justifyContent:"center",fill:!0},y("people",s,"people"),y("actors",f,"person_outline"),y("directors",p,"person")))))}}])&&C(t.prototype,r),u}(n.Component)}}]);