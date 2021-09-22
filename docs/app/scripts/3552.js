"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[3552],{91534:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(67294),n=r(83347),d=r(86688),l=r(72797);class s extends a.Component{render(){const{className:e,cover:t,padding:r,children:d,hero:l}=this.props,s=!0===t?"100vh":"inherit";return a.createElement(n.Z,{xs:this.renderSection(d,e,s,"2rem 0rem"),sm:this.renderSection(d,e,s,"3rem 0rem"),md:this.renderSection(d,e,s,"4rem 2.5rem")})}renderSection(e,t,r,n){return a.createElement(l.Z,{from:"/core/ui/section"},a.createElement("div",{className:"com-layout-section"},a.createElement("div",{className:`${t}`,style:{boxSizing:"border-box",width:"100%",height:r,padding:n}},e)))}}const c=(0,d.Z)(s)},18319:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a=r(20483).default},41421:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a=r(21985).default},87701:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var a=r(67294),n=r(91534),d=r(80383),l=r(81648),s=r(61598);const c=function(e){const{data:t,loading:r}=e;return a.createElement(d.Z,{className:"page-module",fill:!0},a.createElement(l.Z,{fill:!0},a.createElement(n.Z,{className:"section-0"},a.createElement(s.default,{data:t?t.dashboard:null,loading:r}))))}},21985:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var a=r(67294),n=r(83347),d=r(87701);function l(e){return a.createElement(n.Z,{xs:a.createElement(d.default,e)})}},72692:(e,t,r)=>{r.r(t),r.d(t,{QRY_DASHBOARD:()=>c,default:()=>o});var a=r(67294),n=r(18319),d=r(41421),l=r(54397),s=r(70846);const c=l.Ps`
  query getDashboard{ 
    dashboard {
      countries
      genres
      movies
      types
      yearsAdded
      yearsReleased
    }
  }`;function o(e){const{loading:t,error:r,data:l}=(0,s.a)(c),o={loading:t,error:r,data:l};return a.createElement(n.default,null,a.createElement(d.default,o))}}}]);