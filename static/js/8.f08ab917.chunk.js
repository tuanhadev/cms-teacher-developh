(this["webpackJsonpcms-teacher-developh"]=this["webpackJsonpcms-teacher-developh"]||[]).push([[8],{666:function(e,t,a){"use strict";a.r(t);var n=a(620),r=a.n(n),c=a(621),l=a(374),s=a(152),o=a(622),u=a(1),m=a.n(u),i=a(19),p=a(615),h=a(616),d=a(158),g=a(159),f="http://localhost:8080",E={GET:"get",POST:"post",PUT:"put",DELETE:"delete"},b=a(640),v=a.n(b),w=null,x=function(){function e(){Object(d.a)(this,e)}return Object(g.a)(e,[{key:"startRequest",value:function(){var e=Object(c.a)(r.a.mark((function e(t,a,n){var c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=localStorage.getItem("access_token")||"",v.a.defaults.headers.common["Content-Type"]="application/json",e.next=5,v()({method:t,url:a,data:n,params:{access_token:c}});case 5:return l=e.sent,e.abrupt("return",l.data);case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a,n){return e.apply(this,arguments)}}()}],[{key:"getInstance",value:function(){return null==w&&(w=new e),w}}]),e}(),k=function(){function e(){Object(d.a)(this,e)}return Object(g.a)(e,null,[{key:"login",value:function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.getInstance().startRequest(E.POST,"".concat(f,"/api/teachers/login"),t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();t.default=function(){var e=localStorage.getItem("access_token"),t=Object(u.useState)({username:"",password:""}),a=Object(o.a)(t,2),n=a[0],d=a[1],g=Object(u.useState)(!1),f=Object(o.a)(g,2),E=f[0],b=f[1],v=Object(u.useState)(null),w=Object(o.a)(v,2),x=w[0],y=w[1],j=function(e){var t=e.target,a=t.name,r=t.value;d(Object(s.a)(Object(s.a)({},n),{},Object(l.a)({},a,r)))},O=function(){var e=Object(c.a)(r.a.mark((function e(){var t,a,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.username,a=n.password,t&&a){e.next=4;break}return y("Vui l\xf2ng \u0111i\u1ec1n \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin"),e.abrupt("return");case 4:return b(!0),e.prev=5,c={email:t,password:a},e.next=9,k.login(c);case 9:l=e.sent,localStorage.setItem("access_token",l.access_token),window.location.reload(),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(5),b(!1),y(e.t0.response.data.message);case 18:case"end":return e.stop()}}),e,null,[[5,14]])})));return function(){return e.apply(this,arguments)}}(),N=function(e){"Enter"===e.key&&(e.preventDefault(),O())};return e?m.a.createElement(i.a,{to:"/"}):m.a.createElement("div",{className:"c-app c-default-layout flex-row align-items-center"},m.a.createElement(p.j,null,m.a.createElement(p.I,{className:"justify-content-center"},m.a.createElement(p.i,{md:"8"},m.a.createElement(p.h,null,m.a.createElement(p.f,{className:"p-4"},m.a.createElement(p.g,null,m.a.createElement(p.r,null,m.a.createElement("h1",null,"Login"),m.a.createElement("p",{className:"text-muted"},"Sign In to your account"),m.a.createElement(p.x,{className:"mb-3"},m.a.createElement(p.z,null,m.a.createElement(p.A,null,m.a.createElement(h.a,{name:"cil-user"}))),m.a.createElement(p.w,{type:"text",name:"username",onChange:j,onKeyPress:function(e){return N(e)},placeholder:"Username",autoComplete:"username"})),m.a.createElement(p.x,{className:"mb-4"},m.a.createElement(p.z,null,m.a.createElement(p.A,null,m.a.createElement(h.a,{name:"cil-lock-locked"}))),m.a.createElement(p.w,{type:"password",name:"password",onChange:j,onKeyPress:function(e){return N(e)},placeholder:"Password",autoComplete:"current-password"})),m.a.createElement(p.I,null,m.a.createElement(p.i,{xs:"6"},E?m.a.createElement(p.e,{style:{backgroundColor:"#0a0858"},disabled:E,className:"px-4 text-white"},"...Loading"):m.a.createElement(p.e,{style:{backgroundColor:"#0a0858"},onClick:O,className:"px-4 text-white"},"Login")),m.a.createElement(p.i,{xs:"12",className:"text-left"},m.a.createElement("p",{style:{marginTop:10},className:"text-danger"},x?"* ".concat(x,"."):"")))))),m.a.createElement(p.f,{className:"text-white py-5 d-md-down-none",style:{width:"44%",backgroundColor:"#0a0858"}},m.a.createElement(p.g,{className:"text-center d-flex align-items-center"},m.a.createElement("div",null,m.a.createElement("h2",null,"Developh"),m.a.createElement("p",null,"Developh Vietnam t\u1ea1o ra nh\u1eefng l\u1edbp h\u1ecdc, c\u1ed9ng \u0111\u1ed3ng l\u1eadp tr\xecnh, n\u01a1i mang \u0111\u1ebfn nh\u1eefng g\xf3c nh\xecn m\u1edbi m\u1ebb v\u1ec1 th\u1ebf gi\u1edbi qua l\u0103ng k\xednh c\xf4ng ngh\u1ec7 v\xe0 nu\xf4i d\u01b0\u1ee1ng nh\u1eefng \xfd t\u01b0\u1edfng tr\u1edf th\xe0nh s\u1ef1 th\u1eadt.")))))))))}}}]);
//# sourceMappingURL=8.f08ab917.chunk.js.map