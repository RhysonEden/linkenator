(this.webpackJsonpstarting_code=this.webpackJsonpstarting_code||[]).push([[0],{17:function(e,t,n){e.exports=n(41)},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),l=n.n(c),u=n(1),o=n.n(u),s=n(4),i=n(3),p=n(16),m=n.n(p),f=n(5),h=n.n(f);function d(){return b.apply(this,arguments)}function b(){return(b=Object(s.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/api/links");case 3:return t=e.sent,n=t.data,console.log(n),e.abrupt("return",n);case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function v(){return E.apply(this,arguments)}function E(){return(E=Object(s.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/api/tags");case 3:return t=e.sent,n=t.data,console.log(n),e.abrupt("return",n);case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function g(){return(g=Object(s.a)(o.a.mark((function e(t,n,a,r){var c,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("/api/links",{url:t,date:n,comment:a,tags:r});case 3:return c=e.sent,l=c.data,e.abrupt("return",l);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function k(e,t){return w.apply(this,arguments)}function w(){return(w=Object(s.a)(o.a.mark((function e(t,n){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n+=1,e.next=4,h.a.patch("/api/links/".concat(t),{id:t,clicks:n});case 4:return a=e.sent,r=a.data,e.abrupt("return",r);case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function j(e){var t=e.handleRefresh,n=Object(a.useState)(""),c=Object(i.a)(n,2),l=c[0],u=c[1],o=Object(a.useState)(""),s=Object(i.a)(o,2),p=s[0],f=s[1],h=Object(a.useState)(""),d=Object(i.a)(h,2),b=d[0],v=d[1];return r.a.createElement("form",{id:"create"},r.a.createElement("input",{className:"form-input",id:"date",placeholder:m()().format("dddd")}),r.a.createElement("input",{className:"form-input",id:"link",value:l,placeholder:"Enter Link",onChange:function(e){u(e.target.value)}}),r.a.createElement("input",{className:"form-input",id:"comment",value:p,placeholder:"Enter Comment",onChange:function(e){f(e.target.value)}}),r.a.createElement("input",{className:"form-input",id:"tags",value:b,placeholder:"Enter Tag(s)",onChange:function(e){v(e.target.value)}}),r.a.createElement("button",{className:"submit",onClick:function(e){e.preventDefault(),function(e,t,n,a){return g.apply(this,arguments)}(l,new Date,p,b).then((function(){console.log("canceCourse Link 10 form.JS"),u(""),f(""),v(""),t()}))}},"Submit"))}var O=function(e){var t=e.searchInput,n=e.setSearchInput;return r.a.createElement("div",{id:"search"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",placeholder:"Search....or follow below",value:t,onChange:function(e){n(e.target.value)}})))};function y(e,t,n){return function(){d().then((function(t){e(t.allLinks)})).catch((function(e){t(e.message)})),v().then((function(e){n(e.allTags)})).catch((function(e){t(e.message)}))}}var C=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)([]),u=Object(i.a)(l,2),p=u[0],m=u[1],f=Object(a.useState)([]),h=Object(i.a)(f,2),b=(h[0],h[1]),E=Object(a.useState)(""),g=Object(i.a)(E,2),w=g[0],C=g[1];return Object(a.useEffect)((function(){d().then((function(e){m(e.allLinks)})).catch((function(e){c(e.message)}))}),[]),Object(a.useEffect)((function(){v().then((function(e){b(e.allTags)})).catch((function(e){c(e.message)}))})),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",{id:"black"},"It's the Linkenator! You'll be back...."),r.a.createElement(O,{searchInput:w,setSearchInput:C}),r.a.createElement("h2",null,"Create your own link by filling out the form below!"),r.a.createElement("h2",null,"For multiple tags leave a space between them!"),r.a.createElement(j,{handleRefresh:y(m,c,b)})),r.a.createElement("div",{id:"contentwrap"},r.a.createElement("div",{className:"links"},p.filter((function(e){return!!e.link.toLowerCase().includes(w.toLowerCase())||e.tags.filter((function(e){return!!e.name.toLowerCase().includes(w.toLowerCase())})).length>0})).map((function(e,t){return r.a.createElement("div",{key:t,className:"ps"},r.a.createElement("h3",null,r.a.createElement("p",null,r.a.createElement("a",{href:e.link,key:"".concat(t,"_link"),target:"_new"},r.a.createElement("button",{id:"linkbutton",onClick:Object(s.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(e.id,e.clicks);case 2:y(m,c,b)();case 3:case"end":return t.stop()}}),t)})))},"Click here to go to"))),r.a.createElement("p",null,e.link)),r.a.createElement("p",null,"Added on: ",e.date),r.a.createElement("p",null,"Comments:",e.comment),r.a.createElement("p",null,"Number of clicks:",e.clicks),r.a.createElement("div",null,"Tagged as:",e.tags.map((function(e,t){return r.a.createElement("button",{id:"linktag",key:t},e.name)}))," "))}))," ")),r.a.createElement("h2",null,n))};l.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d9e6efb4.chunk.js.map