(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},43:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),s=n.n(r),o=(n(24),n(3)),u=n.n(o),i=n(4),l=n(5),p=n(14),f=(n(26),n(17)),h=n.n(f),j=n(18),d=n.n(j),b=n(1),y="https://www.alphavantage.co/",m="NP2GW775OQW7TW4A";function v(e,t){return O.apply(this,arguments)}function O(){return(O=Object(l.a)(u.a.mark((function e(t,n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return a=e.sent,e.abrupt("return",a.json());case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function x(e,t){for(var n=arguments.length,c=new Array(n>2?n-2:0),r=2;r<n;r++)c[r-2]=arguments[r];var s=Object(a.useState)(e),o=Object(i.a)(s,2),u=o[0],l=o[1];function p(e){l(e.target.value),t&&t.apply(null,c)}return{value:u,onChange:p,setValue:l}}function g(e){return N.apply(this,arguments)}function N(){return(N=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){h.a.parse(t,{download:!0,header:!0,dynamicTyping:!0,complete:function(t){e(t.data)}})})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=function(){var e=Object(a.useState)("from"),t=Object(i.a)(e,2),n=t[0],c=t[1],r=function(){var e="".concat(y,"physical_currency_list/"),t=Object(a.useState)([]),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){function t(){return(t=Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e);case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),c}(),s=x(0,c,"from"),o=x(0,c,"to"),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,c=Object(a.useState)(t),r=Object(i.a)(c,2),s=r[0],o=r[1],p=Object(a.useState)(n),f=Object(i.a)(p,2),h=f[0],j=f[1],d=Object(a.useState)("United States Dollar"),b=Object(i.a)(d,2),O=b[0],x=b[1],g=Object(a.useState)("Euro"),N=Object(i.a)(g,2),k=N[0],w=N[1],C=Object(a.useState)(e),F=Object(i.a)(C,2),S=F[0],E=F[1],R=Object(a.useState)([]),T=Object(i.a)(R,2),_=T[0],V=T[1];function D(e){o(e["currency code"]),x(e["currency name"])}function U(e){j(e["currency code"]),w(e["currency name"])}return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(u.a.mark((function e(t,n){var a,c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="query?function=CURRENCY_EXCHANGE_RATE&from_currency=".concat(t,"&to_currency=").concat(n,"&apikey=").concat(m),e.next=4,v("".concat(y).concat(a));case 4:c=e.sent,r=parseFloat(c["Realtime Currency Exchange Rate"]["5. Exchange Rate"]),E(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(t,n){e.apply(this,arguments)}(s,h)}),[s,h]),Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(u.a.mark((function e(t,n){var a,c,r,s,o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="query?function=FX_DAILY&from_symbol=".concat(t,"&to_symbol=").concat(n,"&apikey=").concat(m),e.next=4,v("".concat(y).concat(a));case 4:c=e.sent,r=c["Time Series FX (Daily)"],s=[],e.t0=u.a.keys(r);case 8:if((e.t1=e.t0()).done){e.next=16;break}if(o=e.t1.value,i=r[o],s.push([new Date(o).getTime(),parseFloat(i["4. close"]).toFixed(4)]),30!==s.length){e.next=14;break}return e.abrupt("break",16);case 14:e.next=8;break;case 16:V(s),e.next=22;break;case 19:e.prev=19,e.t2=e.catch(0),console.log(e.t2);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})))).apply(this,arguments)}!function(t,n){e.apply(this,arguments)}(s,h)}),[s,h]),{rate:S,dailyRate:_,from:s,fromName:O,setFromCurrency:D,to:h,toName:k,setToCurrency:U}}(1,"USD","EUR");Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"from"===n?(t=(s.value*f.rate).toFixed(4),o.setValue(parseFloat(t))):(a=(o.value/f.rate).toFixed(4),s.setValue(parseFloat(a)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f.rate,s,s.value,o,o.value,n]);var h={series:[{data:f.dailyRate}],options:{chart:{foreColor:"#fff",fontFamily:"Poppins"},dataLabels:{enabled:!1},markers:{size:0,style:"hollow"},xaxis:{type:"datetime",axisTicks:{color:"#000"}},tooltip:{x:{format:"dd MMM yyyy"}},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.7,opacityTo:.9,stops:[0,100]}}}};return Object(b.jsxs)("div",{className:"exchanger",children:[Object(b.jsxs)("div",{className:"converter",children:[Object(b.jsxs)("div",{className:"result",children:[Object(b.jsxs)("div",{className:"from-text",children:[s.value," ",f.fromName," equals"]}),Object(b.jsxs)("div",{className:"to-text",children:[o.value," ",f.toName]})]}),Object(b.jsxs)("div",{className:"currency-container from-currency-container",children:[Object(b.jsx)("input",{className:"currency-value from-currency-input",type:"number",placeholder:"",value:s.value,onChange:s.onChange}),Object(b.jsx)(p.a,{className:"currency from-currency",options:r,defaultValue:{"currency code":"USD","currency name":"United States Dollar"},onChange:f.setFromCurrency,getOptionLabel:function(e){return e["currency name"]},getOptionValue:function(e){return e["currency code"]}})]}),Object(b.jsxs)("div",{className:"currency-container to-currency-container",children:[Object(b.jsx)("input",{className:"currency-value to-currency-input",type:"number",placeholder:"",value:o.value,onChange:o.onChange}),Object(b.jsx)(p.a,{className:"currency to-currency",options:r,defaultValue:{"currency code":"EUR","currency name":"Euro"},onChange:f.setToCurrency,getOptionLabel:function(e){return e["currency name"]},getOptionValue:function(e){return e["currency code"]}})]})]}),Object(b.jsx)("div",{className:"exchange-history",children:Object(b.jsx)(d.a,{className:"history-chart",series:h.series,options:h.options,type:"area",height:300})})]})},w=(n(43),n(8)),C=n(13),F=n(19);var S=function(){return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsxs)("header",{className:"app-header",children:[Object(b.jsx)(w.a,{icon:F.a})," Currency Convertor"]}),Object(b.jsx)("div",{className:"app-content",children:Object(b.jsx)(k,{})}),Object(b.jsxs)("div",{className:"footer",children:[Object(b.jsx)("div",{className:"de-emphasize",children:"Created by"}),Object(b.jsx)("div",{className:"creator-name",children:Object(b.jsx)("a",{href:"mailto: uv.dare@gmail.com",children:"Venkatesh Ramalingam"})}),Object(b.jsxs)("div",{className:"social",children:[Object(b.jsx)("a",{href:"https://github.com/RVenkatesh",target:"_blank",rel:"noreferrer",children:Object(b.jsx)(w.a,{icon:C.a})}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/venkatesh-ramalingam-76368915/",target:"_blank",rel:"noreferrer",children:Object(b.jsx)(w.a,{icon:C.b})})]})]})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),E()}},[[47,1,2]]]);
//# sourceMappingURL=main.fd7fa64f.chunk.js.map