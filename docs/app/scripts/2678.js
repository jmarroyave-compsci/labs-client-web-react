"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[2678],{92678:(a,t,r)=>{r.r(t),r.d(t,{QRY:()=>i,default:()=>c});var e=r(67294),n=r(54397),o=r(70846);function s(){return s=Object.assign||function(a){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(a[e]=r[e])}return a},s.apply(this,arguments)}const i=n.Ps`
  query getStory
{
  storiesMovieAwards {
    id
    title
    image
    link
    awards {
      category
      name
      won
      year
    }
  }
}
`,c=a=>function(t){var r=(0,o.a)(i);return r.data=r.data?r.data.storiesMovieAwards:{},e.createElement(a,s({},t,r))}}}]);