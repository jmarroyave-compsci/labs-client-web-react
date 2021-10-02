"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[2678],{92678:(a,e,t)=>{t.r(e),t.d(e,{QRY:()=>y,default:()=>l});var r=t(67294),n=t(54397),i=t(70846);function s(){return s=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(a[r]=t[r])}return a},s.apply(this,arguments)}const y=n.Ps`
query get($entity:String, $year: Int, $page: Int) {
  storiesAwards(entity: $entity, year: $year, page: $page){
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
`,l=a=>function(e){var{route:t}=e,n=(t=t||{}).entity?t.entity:"movies",l=t.year?t.year:(new Date).getFullYear(),o=t.page?t.page:1,p=e.data?{}:(0,i.a)(y,{variables:{entity:n,year:parseInt(l),page:parseInt(o)}}),g=e.data?e.data:p.data?p.data.storiesAwards:null;return r.createElement(a,s({},e,p,{data:g}))}}}]);