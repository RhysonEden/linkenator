(this.webpackJsonpstarting_code=this.webpackJsonpstarting_code||[]).push([[0],{21:function(e,t,n){e.exports=n(45)},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),l=n.n(c),u=n(18),i=n(13),o=n(14),s=n(20),p=n(19),h=n(15),m=n.n(h),f=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={link:"",date:"",comment:"",tag:""},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("form",null,r.a.createElement("input",{id:"date",placeholder:m()().format("L"),defaultValue:this.state.link}),r.a.createElement("input",{id:"link",placeholder:"link",value:this.state.link,onChange:function(t){return e.setState({link:t.target.value})}}),r.a.createElement("input",{id:"comment",placeholder:"comment",value:this.state.comment,onChange:function(e){return e.target.value}}),r.a.createElement("input",{id:"tag",placeholder:"tag",value:this.state.tag,onChange:function(e){return e.target.value}}))}}]),n}(r.a.Component),d=n(2),v=n.n(d),g=n(16),E=n(17),b=n.n(E);function k(){return(k=Object(g.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/api");case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var j=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){(function(){return k.apply(this,arguments)})().then((function(e){c(e.message)})).catch((function(e){c(e.message)}))})),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Hello, World!"),r.a.createElement(f,null),r.a.createElement("h2",null,n))};l.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.713f471c.chunk.js.map