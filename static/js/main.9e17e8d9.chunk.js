(this["webpackJsonpapcs-mock-client"]=this["webpackJsonpapcs-mock-client"]||[]).push([[0],{11:function(e,t,n){"use strict";var c=n(3),a=n.n(c),r=n(8),s=n(18),i=n.n(s),o="https://apcs-mock-server.herokuapp.com/api",u={call:function(){var e=Object(r.a)(a.a.mark((function e(t,n,c){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("https://apcs-mock-server.herokuapp.com/api"),console.log("production"),console.log(t,o+n),console.log("data:",c),e.next=6,i.a.request({url:o+n,method:t,data:c,withCredentials:!0}).catch((function(e){window.alert(e)}));case 6:if(!(r=e.sent)){e.next=10;break}return console.log("response:",r.data),e.abrupt("return",r.data);case 10:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}()};t.a=u},15:function(e,t,n){"use strict";(function(e){var c=n(3),a=n.n(c),r=n(8),s=n(4),i=n(1),o=n.n(i),u=n(22),j=n(11),l=n(36),b=(n(77),n(0));t.a=function(t){var n=Object(i.useState)(""),c=Object(s.a)(n,2),d=c[0],p=c[1],f=Object(i.useState)("cpp"),O=Object(s.a)(f,2),h=O[0],x=O[1],v=o.a.useRef(null),m=function(){var t=Object(r.a)(a.a.mark((function t(n){var c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=n.target.files[0],(s=new FileReader).onload=Object(r.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p(s.result),v.current.value="",t.next=4,j.a.call("POST","/submission",{language_id:u.b[h],source_code:e.from(s.result).toString("base64")});case 4:t.sent;case 5:case"end":return t.stop()}}),t)}))),c&&s.readAsText(c);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"problem",children:[Object(b.jsxs)("div",{className:"problem-title",children:["\u7b2c ",t.id," \u984c"]}),Object(b.jsx)("button",{className:"problem-download-button",onClick:function(){return window.open(l.a["p".concat(t.id)])},children:"\u984c\u76ee\u4e0b\u8f09"}),Object(b.jsxs)("div",{className:"problem-submit",children:[Object(b.jsxs)("select",{className:"problem-submit-language",onChange:function(e){return x(e.target.value)},value:h,children:[Object(b.jsx)("option",{value:"c",children:"C Files (*.c)"}),Object(b.jsx)("option",{value:"cpp",children:"C++ Files (*.cpp)"}),Object(b.jsx)("option",{value:"java",children:"Java Files (*.java)"}),Object(b.jsx)("option",{value:"py2",children:"Python2 (*.py)"}),Object(b.jsx)("option",{value:"py3",children:"Python3 (*.py)"})]}),Object(b.jsx)("button",{className:"problem-submit-button",onClick:function(e){v.current.click()},children:"\u4e0a\u50b3\u7a0b\u5f0f\u78bc"}),Object(b.jsx)("input",{type:"file",ref:v,onChange:m,style:{display:"none"},accept:u.a[h]})]}),Object(b.jsxs)("div",{className:"code-block",children:[Object(b.jsx)("div",{children:"\u7a0b\u5f0f\u78bc\u9810\u89bd"}),Object(b.jsx)("textarea",{cols:80,rows:12,wrap:"off",className:"code-input",readOnly:!0,defaultValue:d})]})]})}}).call(this,n(73).Buffer)},22:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return a}));var c={c:50,cpp:54,java:26,py2:36,py3:71},a={c:".c",cpp:".cpp",java:".java",py2:".py",py3:".py"}},36:function(e,t,n){"use strict";var c={p1:n.p+"static/media/20160305-p1.15b201f1.pdf",p2:n.p+"static/media/20160305-p2.5c85446f.pdf",p3:n.p+"static/media/20160305-p3.bc0e7295.pdf",p4:n.p+"static/media/20160305-p4.6f9874dd.pdf"};t.a=c},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},63:function(e,t,n){},65:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(33),s=n.n(r),i=(n(41),n(42),n(14)),o=n(23),u=n(2),j=n(3),l=n.n(j),b=n(8),d=n(4),p=(n(44),n(11)),f=(n(63),"108000001"),O=n(0),h=function(e){var t=Object(c.useState)(""),n=Object(d.a)(t,2),a=n[0],r=n[1];return Object(O.jsxs)("div",{className:"info-container",children:[Object(O.jsx)("div",{className:"info-header",children:"\u5927\u5b78\u7a0b\u5f0f\u8a2d\u8a08\u5148\u4fee\u6aa2\u6e2c"}),Object(O.jsxs)("div",{className:"info-content",children:[Object(O.jsx)("pre",{children:"\u6aa2\u6e2c\u5167\u5bb9\uff1a\b\b\u3000\u3000\u7a0b\u5f0f\u8a2d\u8a08\u5be6\u4f5c\u984c\n\u6aa2\u6e2c\u958b\u59cb\u6642\u9593\uff1a13:40\n\u6aa2\u6e2c\u6642\u9593\uff1a\u3000\u3000150 \u5206\u9418\n\n"+"\u61c9\u6e2c\u751f\u59d3\u540d\uff1a\u3000".concat("\u738b\u5927\u660e","\n")+"\u51c6\u8003\u8b49\u865f\u78bc\uff1a\u3000".concat(f,"\n")+"\u8eab\u5206\u8b49\u5b57\u865f\uff1a"}),Object(O.jsx)("input",{className:"info-id-input",placeholder:"\u50c5\u6e2c\u8a66, \u52ff\u586b\u500b\u8cc7",value:a,onChange:function(e){return r(e.target.value)},type:"password"}),Object(O.jsx)("button",{className:"info-login",disabled:0===a.length,onClick:function(){return e.setUID(a)},children:"\u767b\u5165"})]})]})},x=(n(65),function(e){return Object(O.jsxs)("div",{className:"rule-container",children:[Object(O.jsx)("div",{className:"rule-title",children:"\u7a0b\u5f0f\u8a2d\u8a08\u5be6\u4f5c\u984c"}),Object(O.jsx)("pre",{className:"rule-brief",children:"\u6aa2\u6e2c\u6642\u9593\uff1a150\u5206\u9418\n\u984c\u6578\uff1a4\u984c"}),Object(O.jsx)("div",{className:"rule-details-title",children:"\u6aa2\u6e2c\u6ce8\u610f\u4e8b\u9805"}),Object(O.jsx)("pre",{className:"rule-details-content",children:"1. \u6aa2\u6e2c\u6642\u9593\u5171150\u5206\u9418\uff0c\u6309\u4e0b\u672c\u9801\u4e0b\u65b9[\u958b\u59cb\u6aa2\u6e2c\u4e26\u958b\u59cb\u8a08\u6642]\u6309\u9375\u5f8c\u958b\u59cb\u8a08\u6642\u3002\n2. \u6aa2\u6e2c\u671f\u9593\uff0c\u5982\u56e0\u75c5\u3001\u56e0\u6545(\u5982\u5ec1\u7b49)\u9700\u66ab\u6642\u96e2\u5834\u6642\uff0c\u9808\u7d93\u76e3\u8a66\u4eba\u54e1\u540c\u610f\uff0c\u4e26\u5728\u76e3\u8a66\u4eba\u54e1\u966a\u540c\u59cb\u51c6\u96e2\u5834\u3002\n3. \u96e2\u5834\u61c9\u6e2c\u751f\u7d93\u6cbb\u7642\u6216\u8655\u7406\u5f8c\uff0c\u5982\u6aa2\u6e2c\u5c1a\u672a\u7d50\u675f\uff0c\u4ecd\u53ef\u5165\u5834\uff0c\u4f46\u4e0d\u5f97\u8acb\u6c42\u5ef6\u9577\u6642\u9593\u6216\u88dc\u8003\u3002\n4. \u984c\u76ee\u4e0b\u8f09\u5f8c\u5c07\u81ea\u52d5\u5132\u5b58\u65bc\u684c\u9762\u3002\n5. \u6bcf\u984c\u5747\u9700\u81ea\u884c\u4e0a\u50b3\u7a0b\u5f0f\u78bc\uff0c\u7a0b\u5f0f\u78bc\u53ef\u91cd\u8907\u4e0a\u50b3\uff0c\u8a55\u5206\u4ee5\u6700\u5f8c\u4e0a\u50b3\u7248\u672c\u70ba\u4e3b\u3002"}),Object(O.jsx)("button",{onClick:e.start,children:"\u958b\u59cb\u6aa2\u6e2c\u4e26\u958b\u59cb\u8a08\u6642"})]})});var v=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!0),s=Object(d.a)(r,2),i=s[0],o=s[1],j=Object(u.f)();Object(c.useEffect)((function(){(function(){var e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.call("GET","/profile",{});case 2:e.sent.start&&j.push("/coding"),o(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[j]);var f=function(){var e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.call("GET","/start",{});case 2:e.sent&&j.push("/coding");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i?Object(O.jsx)("div",{}):0===n.length?Object(O.jsx)(h,{setUID:a}):Object(O.jsx)(x,{start:f})},m=function(e){var t=e.child,n=Object(c.useState)(Date.now()),a=Object(d.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){var e=setInterval((function(){return s(Date.now())}),1e3);return function(){clearInterval(e)}}),[]),t(r)},g=function(){return Object(O.jsx)("pre",{className:"instruction-container",children:'\u8aaa\u660e\uff1a\n1. \u4e0b\u8f09\u984c\u76ee\u5f8c, \u53ef\u9ede\u9078\u672c\u7cfb\u7d71\u53f3\u4e0a\u89d2"-"\u5716\u793a\u7e2e\u5c0f\u81f3\u5de5\u5177\u5217\u5f8c, \u8acb\u4f7f\u7528\u684c\u9762\u4e0a\u6240\u63d0\u4f9b\u7684\u958b\u767c\u5de5\u5177\u4f5c\u7b54\u3002\n2. \u4f5c\u7b54\u6a94\u6848\u7684\u6a94\u540d\u9808\u4f9d\u7167\u984c\u76ee\u6307\u793a\u547d\u540d, \u5927\u5c0f\u5beb\u9808\u4e00\u81f4\u3002\u526f\u6a94\u540d\u9808\u4f9d\u7167\u4f7f\u7528\u7684\u7a0b\u5f0f\u8a9e\u8a00\u547d\u540d\u70ba.c\u3001 .cpp\u3001 .java\u6216.py\u3002\n3. \u4f5c\u7b54\u7d50\u679c\u4e0a\u50b3\u6642, \u8acb\u5148\u9078\u64c7\u6240\u4f7f\u7528\u7684\u7a0b\u5f0f\u8a9e\u8a00, \u518d\u9ede\u9078\u4e0a\u50b3\u7a0b\u5f0f\u78bc\u6309\u9215, \u9078\u64c7\u8981\u4e0a\u50b3\u7684\u4f5c\u7b54\u7a0b\u5f0f\u78bc\u6a94\u6848\u5373\u53ef\u3002\u8acb\u52ff\u4e0a\u50b3\u57f7\u884c\u6a94\uff01'})},N=n(15),w=function(e){return Object(O.jsx)("div",{children:JSON.stringify(e)})},k=function(e){var t=e.checkeds,n=e.setCheckeds;return Object(O.jsxs)("div",{className:"submission-container",children:[Object(O.jsxs)("div",{className:"submission-controller",children:["\u7a0b\u5f0f\u78bc\u57f7\u884c\u7d50\u679c:",t.map((function(e,c){return Object(O.jsxs)("span",{children:[Object(O.jsx)("input",{type:"checkbox",checked:e,onChange:function(){return function(e){n(t.map((function(t,n){return n===e?1:0})))}(c)}}),Object(O.jsx)("span",{children:"\u7b2c".concat(c+1,"\u984c ")})]},c)}))]}),Object(O.jsx)(w,{data:[{x:3},{y:2}]})]})},y=(n(78),function(e){var t=e.finish;return Object(O.jsx)("button",{className:"submit",onClick:function(){return t()},children:"\u7d50\u675f\u4f5c\u7b54\u3002\u9001\u51fa\u7b54\u6848"})}),S=(n(79),function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){setTimeout((function(){return a(!0)}),3e3)}),[]),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("pre",{className:"finish-container",children:["\u81ea\u52d5\u9a57\u8b49\u5b8c\u7562\uff0c\u672c\u7bc0\u6b21\u6aa2\u6e2c\u7d50\u675f\u3002\n\u8acb\u975c\u5019\u76e3\u8003\u4eba\u54e1\u5ba3\u4f48\u5f8c\u65b9\u53ef\u96e2\u5834\u3002",Object(O.jsx)(i.b,{to:n?"/":"#",className:"finish-return ".concat(n?void 0:"hidden"),children:"\u56de\u5230\u9996\u9801"})]})})}),C=(n(80),function(){var e=Object(u.f)(),t=Object(c.useState)(void 0),n=Object(d.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(!0),i=Object(d.a)(s,2),o=i[0],j=i[1],f=Object(c.useState)([1,0,0,0]),h=Object(d.a)(f,2),x=h[0],v=h[1],w=Object(c.useState)(!1),C=Object(d.a)(w,2),T=C[0],E=C[1];Object(c.useEffect)((function(){(function(){var t=Object(b.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.call("GET","/profile",{});case 2:void 0===(n=t.sent).start&&e.push("/"),r(n.start),j(!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]);var F=function(){var e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.call("GET","/finish",{});case 2:e.sent&&E(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o?Object(O.jsx)("div",{}):T?Object(O.jsx)(S,{}):Object(O.jsxs)("div",{className:"coding-container",children:[Object(O.jsx)(m,{child:function(t){if(void 0===a)return Object(O.jsx)("div",{className:"timer-container"});var n=Math.floor(9e3-(t-a)/1e3);n<0&&e.push("/");var c=Math.floor(n/60),r=n-60*c;return Object(O.jsx)("div",{className:"timer-container",children:"\u8ddd\u96e2\u6aa2\u6e2c\u6642\u9593\u7d50\u675f\u5c1a\u6709 ".concat(c," \u5206 ").concat(r," \u79d2")})}}),Object(O.jsx)(g,{}),Object(O.jsxs)("div",{className:"problem-container",children:[Object(O.jsx)(N.a,{id:1}),Object(O.jsx)(N.a,{id:2}),Object(O.jsx)(N.a,{id:3}),Object(O.jsx)(N.a,{id:4})]}),Object(O.jsx)("div",{className:"submission-container",children:Object(O.jsx)(k,{checkeds:x,setCheckeds:v})}),Object(O.jsx)("div",{className:"submit-container",children:Object(O.jsx)(y,{finish:F})})]})}),T=Object(u.g)((function(e){e.auth;return Object(O.jsxs)(u.c,{children:[Object(O.jsx)(u.a,{exact:!0,path:"/",render:function(e){return Object(O.jsx)(v,Object(o.a)({},e))}}),Object(O.jsx)(u.a,{exact:!0,path:"/coding",render:function(e){return Object(O.jsx)(C,Object(o.a)({},e))}})]})})),E=n(18),F=n.n(E),I=(n(81),function(){var e=Object(c.useState)("0.0.0.0"),t=Object(d.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){(function(){var e=Object(b.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("https://geolocation-db.com/json/");case 2:t=e.sent,a(t.data.IPv4);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}));return Object(O.jsxs)("div",{className:"footer-container",children:[Object(O.jsx)("div",{children:"\u672c\u6a5fIP: ".concat(n,"  \u7248\u672c:b8e3c  \u51c6\u8003\u8b49\u865f\u78bc:").concat(f)}),Object(O.jsx)(m,{child:function(e){return"\u73fe\u5728\u6642\u9593: ".concat(new Date(e).toLocaleString("zh-TW",{timeZone:"Asia/Taipei",hour12:!1}))}})]})}),P=function(){return Object(O.jsxs)("div",{className:"app-container",children:[Object(O.jsx)("div",{className:"app-view",children:Object(O.jsx)(i.a,{children:Object(O.jsx)(T,{})})}),Object(O.jsx)("div",{className:"app-footer",children:Object(O.jsx)(I,{})})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(P,{})}),document.getElementById("root")),D()}},[[82,1,2]]]);
//# sourceMappingURL=main.9e17e8d9.chunk.js.map