"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[977],{30977:(a,t,e)=>{e.r(t),e.d(t,{QRY:()=>c,default:()=>o});var r=e(67294),n=e(54397),s=e(70846);function i(){return i=Object.assign||function(a){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r])}return a},i.apply(this,arguments)}const c=n.Ps`
  query getStory($page: Int)
{
  storiesPodcastMusic(page: $page) {
    id
    title
    link
    image
  }
}
`,o=a=>function(t){var{route:e}=t,n=(e=e||{}).page?e.page:1,o=t.data?{}:(0,s.a)(c,{variables:{page:parseInt(n)}}),u=t.data?t.data:o.data?o.data.storiesPodcastMusic:null;return r.createElement(a,i({},t,o,{data:u}))}}}]);