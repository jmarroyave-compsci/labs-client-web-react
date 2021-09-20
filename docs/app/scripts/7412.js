"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[7412,2617,3288,6617,2833,5959],{50192:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(67294);function r(e){return n.createElement("div",null,"Hello World")}t(45697),r.defaultProps={},r.propTypes={};const o=r},91534:(e,a,t)=>{t.d(a,{Z:()=>p});var n=t(67294),r=t(83347),o=t(86688),i=t(72797);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function s(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,a){return u=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e},u(e,a)}function d(e,a){if(a&&("object"===l(a)||"function"==typeof a))return a;if(void 0!==a)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var f=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&u(e,a)}(p,e);var a,t,o,l,f=(o=p,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=_(o);if(l){var t=_(this).constructor;e=Reflect.construct(a,arguments,t)}else e=a.apply(this,arguments);return d(this,e)});function p(){return c(this,p),f.apply(this,arguments)}return a=p,(t=[{key:"render",value:function(){var e=this.props,a=e.className,t=e.cover,o=(e.padding,e.children),i=(e.hero,!0===t?"100vh":"inherit");return n.createElement(r.Z,{xs:this.renderSection(o,a,i,"2rem 0rem"),sm:this.renderSection(o,a,i,"3rem 0rem"),md:this.renderSection(o,a,i,"4rem 2.5rem")})}},{key:"renderSection",value:function(e,a,t,r){return n.createElement(i.Z,{from:"/core/ui/section"},n.createElement("div",{className:"com-layout-section"},n.createElement("div",{className:"".concat(a),style:{boxSizing:"border-box",width:"100%",height:t,padding:r}},e)))}}])&&s(a.prototype,t),p}(n.Component);const p=(0,o.Z)(f)},18319:(e,a,t)=>{t.r(a),t.d(a,{default:()=>n});const n=t(20483).default},36617:(e,a,t)=>{t.r(a),t.d(a,{default:()=>n});const n=t(42833).default},42833:(e,a,t)=>{t.r(a),t.d(a,{default:()=>l});var n=t(67294),r=t(45697),o=t.n(r),i=t(50192);function l(e){var a=e.loading,t=e.error;return e.data,a?n.createElement("p",null,"Loading..."):t?n.createElement("p",null,"Error ",t.toString()):n.createElement(i.Z,null)}l.propTypes={data:o().object},l.defaultProps={data:null}},91670:(e,a,t)=>{t.r(a),t.d(a,{default:()=>c});var n=t(67294),r=t(91534),o=t(80383),i=t(81648),l=t(36617);const c=function(e){var a=e.data,t=e.loading;return n.createElement(o.Z,{className:"page-module",fill:!0},n.createElement(i.Z,{fill:!0},n.createElement(r.Z,{className:"section-0"},n.createElement(l.default,{data:a?a.dashboard:null,loading:t}))))}},88871:(e,a,t)=>{t.r(a),t.d(a,{QRY_DASHBOARD:()=>_,default:()=>f});var n,r,o,i=t(67294),l=t(83347),c=t(18319),s=t(91670),u=t(54397),d=t(70846),_=(0,u.Ps)(n||(r=["\n  query getDashboard{ \n    dashboard {\n      actors\n      countries\n      directors\n      genres\n      lastUpdate\n      movies\n      people\n      types\n      yearsAdded\n      yearsReleased\n    }\n  }"],o||(o=r.slice(0)),n=Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))));function f(e){var a=(0,d.a)(_),t=a.loading,n=a.error,r=a.data,o=e.page;return e.trends,i.createElement(c.default,null,i.createElement(l.Z,{xs:i.createElement(s.default,{page:o,data:r,loading:t,error:n})}))}},29087:(e,a,t)=>{t.r(a),t.d(a,{default:()=>o,Controls:()=>i});var n=t(88871),r=t(49612);const o={title:"Project/Pages/Movie"};var i=function(e){return React.createElement(n.default,e)}.bind({});i.args={loading:!1},i.parameters={apolloClient:{mocks:[{request:{query:n.QRY_DASHBOARD},result:r,loading:!1}]}}},49612:e=>{e.exports=JSON.parse('{"data":{"dashboard":{"actors":32600,"countries":{"brazil":88,"mexico":154,"singapore":39,"unitedStates":3297,"turkey":108,"egypt":110,"india":990,"poland":36,"thailand":65,"nigeria":76,"norway":29,"iceland":9,"unitedKingdom":723,"japan":287,"southKorea":212,"italy":90,"canada":412,"indonesia":80,"romania":12,"spain":215,"southAfrica":54,"france":349,"portugal":4,"hongKong":102,"china":147,"germany":199,"argentina":82,"serbia":7,"denmark":44,"kenya":5,"newZealand":28,"pakistan":24,"australia":144,"taiwan":85,"netherlands":45,"philippines":78,"unitedArabEmirates":34,"iran":4,"belgium":85,"israel":26,"uruguay":14,"bulgaria":9,"chile":26,"russia":27,"mauritius":1,"lebanon":26,"colombia":45,"algeria":2,"sovietUnion":3,"sweden":39,"malaysia":26,"ireland":40,"luxembourg":11,"finland":11,"austria":11,"peru":10,"senegal":3,"switzerland":17,"ghana":4,"saudiArabia":10,"armenia":1,"jordan":8,"mongolia":1,"namibia":2,"qatar":7,"vietnam":5,"syria":1,"kuwait":7,"malta":3,"czechRepublic":20,"bahamas":1,"sriLanka":1,"caymanIslands":2,"bangladesh":3,"zimbabwe":3,"hungary":9,"latvia":1,"liechtenstein":1,"venezuela":3,"morocco":6,"cambodia":5,"albania":1,"cuba":1,"nicaragua":1,"greece":10,"croatia":4,"guatemala":2,"westGermany":5,"slovenia":3,"dominicanRepublic":1,"nepal":2,"samoa":1,"azerbaijan":1,"bermuda":1,"ecuador":1,"georgia":2,"botswana":1,"puertoRico":1,"iraq":2,"vaticanCity":1,"angola":1,"ukraine":3,"jamaica":1,"belarus":1,"cyprus":1,"kazakhstan":1,"malawi":1,"slovakia":1,"lithuania":1,"afghanistan":1,"paraguay":1,"somalia":1,"sudan":1,"panama":1,"uganda":1,"eastGermany":1,"montenegro":1},"directors":4324,"genres":{"international":3636,"dramas":2810,"sciFiFantasy":294,"horror":381,"actionAdventure":871,"independent":673,"mysteries":90,"thrillers":541,"crime":427,"documentaries":1139,"sports":196,"comedies":1996,"anime":205,"realityTv":222,"romantic":864,"scienceNature":85,"british":232,"korean":150,"musicals":321,"lgbtq":90,"faithSpirituality":57,"childrenFamily":946,"spanish":147,"classicCult":189,"standUpComedyTalkShows":381,"teen":60},"lastUpdate":"2021-09-15T15:01:49.939Z","movies":7787,"people":36924,"types":{"tvShow":2410,"movie":5377},"yearsAdded":{"_2003":2,"_2008":3,"_2009":2,"_2010":2,"_2011":13,"_2012":4,"_2013":12,"_2014":25,"_2015":90,"_2016":444,"_2017":1225,"_2018":1686,"_2019":2153,"_2020":2009,"_2021":117},"yearsReleased":{"_1925":1,"_1942":2,"_1943":3,"_1944":3,"_1945":3,"_1946":2,"_1947":1,"_1954":2,"_1955":3,"_1956":2,"_1958":3,"_1959":1,"_1960":4,"_1962":3,"_1963":2,"_1964":1,"_1965":2,"_1966":1,"_1967":5,"_1968":5,"_1969":2,"_1970":2,"_1971":5,"_1972":4,"_1973":10,"_1974":7,"_1975":6,"_1976":9,"_1977":7,"_1978":6,"_1979":11,"_1980":9,"_1981":9,"_1982":15,"_1983":9,"_1984":9,"_1985":9,"_1986":10,"_1987":7,"_1988":16,"_1989":13,"_1990":20,"_1991":17,"_1992":18,"_1993":22,"_1994":16,"_1995":19,"_1996":19,"_1997":30,"_1998":31,"_1999":33,"_2000":34,"_2001":36,"_2002":45,"_2003":49,"_2004":59,"_2005":73,"_2006":85,"_2007":85,"_2008":125,"_2009":137,"_2010":173,"_2011":166,"_2012":219,"_2013":267,"_2014":334,"_2015":541,"_2016":882,"_2017":1012,"_2018":1121,"_2019":996,"_2020":868,"_2021":31}}}}')}}]);