(this["webpackJsonpreact-admin-antd"]=this["webpackJsonpreact-admin-antd"]||[]).push([[0],{125:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(34),r={basename:"/"};window.routerBase&&(r.basename=window.routerBase);var c=Object(n.createBrowserHistory)(r)},163:function(e,t,a){e.exports=a.p+"static/media/Athena.71a0caf3.jpg"},310:function(e,t,a){e.exports=a(677)},312:function(e,t,a){},318:function(e,t,a){},386:function(e,t,a){},394:function(e,t,a){},478:function(e,t){},566:function(e,t,a){},577:function(e,t,a){},677:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(312);var l=a(208),u=a(39),o=a(151),i=a(203),s=a.n(i);window.hyoukaRouterPath={};var m=function e(t){var a=t(),n=a.path,l=a.component,i=a.redirect,m=a.meta,d=(a.icon,Object(o.a)(a,["path","component","redirect","meta","icon"]));n&&"/"!==n&&(window.hyoukaRouterPath[n]=Object(u.a)({path:n,meta:m},d)),i&&s.a.isArray(d.children)&&(d.children=d.children.map((function(t){return e((function(){return t}))})),d.children.unshift(r.a.createElement(c.a,{to:i,from:n,key:"".concat(n,"_redirect"),exact:!0})));var f={key:n||s.a.random(),render:function(e){var t,a=Object.assign({},e);return t=m.title,document.title="Hyouka-".concat(t),r.a.createElement(l,Object.assign({renderChildren:d},a))}};return r.a.createElement(c.b,Object.assign({path:n},f))},d=(a(126),a(40)),f=a.n(d),p=(a(318),f.a.Content),h=function(e){var t=e.renderChildren.children;return r.a.createElement(f.a,{className:"full-layout user-layout fixed"},r.a.createElement(p,null,r.a.createElement(c.d,null,t)))},E=a(54),b=a(68),g=a(5),y=a.n(g),v=a(686),O=a(687),j=(a(160),a(60)),w=a.n(j),x=(a(386),f.a.Sider),k=w.a.SubMenu,N=w.a.Item,S=function(e){return"string"===typeof e&&0===e.indexOf("http")?r.a.createElement("img",{src:e,alt:"\u56fe\u6807",className:"sider-menu-item-img"}):"string"===typeof e?r.a.createElement(H,{font:"antd",antd:"true",type:e}):e},F=function(e){var t=y()("sidebar-left","sidebar-default"),n=e.menu,c=e.collapsedLeftSide,l=e.themeClass;return r.a.createElement(x,{width:230,className:t,trigger:null,collapsed:c},r.a.createElement("div",{className:"slider-left-logo"},r.a.createElement("span",null,r.a.createElement("img",{src:a(163),alt:""}),c?null:r.a.createElement("h1",null,"Hyouka Admin"))),r.a.createElement("div",{className:"sidebar-left-content"},r.a.createElement(w.a,{mode:"inline",className:"ant-menu-".concat(l)},function e(t){if(!t)return[];return t.filter((function(e){return e.meta.title&&!e.hidden})).map((function(t){return function(t){return t.children&&t.children.length>0?e(t.children)&&e(t.children).length>0?r.a.createElement(k,{title:t.icon?r.a.createElement("span",null,S(t.icon),r.a.createElement("span",null,t.meta.title)):t.meta.title,key:t.path},e(t.children)):void 0:r.a.createElement(N,{key:t.path},t.icon?S(t.icon):"",r.a.createElement("span",null,t.meta.title))}(t)})).filter((function(e){return e}))}(n))))},C=a(94),M=a(292),q=a(145),H=function(e){var t,n=e.prefixClass,c=e.type,l=e.className,u=e.children,i=e.font,s=e.antd,m=e.spin,d=Object(o.a)(e,["prefixClass","type","className","children","font","antd","spin"]),f=y()(n,(t={},Object(C.a)(t,i,i),Object(C.a)(t,"".concat(i,"-").concat(c),i&&c),Object(C.a)(t,"spin",m),t),l);if(/^&#x.+;$/.test(c))return r.a.createElement("i",Object.assign({className:f},e,{dangerouslySetInnerHTML:{__html:c}}));if(s){var p=y()(n,l);if("string"===typeof c){var h=a(116)[c]||M.a;return r.a.createElement(h,Object.assign({className:p,spin:m},e))}if(r.a.isValidElement(c))return r.a.createElement(q.a,Object.assign({component:function(){return c},className:p,spin:m},e))}return r.a.createElement("i",Object.assign({className:l},d),u)},R=(a(394),a(229),a(300)),z=a.n(R),B=(a(397),a(301)),L=a.n(B),I=a(298),P=a(295),A=a(297),D=w.a.Item,_=w.a.Divider,J=function(e){var t=e.dispatch,n=Object(b.b)("roles"),c=r.a.createElement(w.a,{onClick:function(e){switch(e.key){case"logout":return t({type:"login/Logout"}),!1;default:return!1}}},r.a.createElement(D,{key:"center"},r.a.createElement(I.a,null),"\u4e2a\u4eba\u4e2d\u5fc3"),r.a.createElement(D,{key:"github"},r.a.createElement(P.a,null),"GitHub\u5730\u5740"),r.a.createElement(_,null),r.a.createElement(D,{key:"logout"},r.a.createElement(A.a,null),"\u9000\u51fa\u767b\u5f55"));return r.a.createElement(z.a,{overlay:c,className:"avatar-dropdown"},r.a.createElement("span",{className:"avatar-dropdown-action"},r.a.createElement(L.a,{size:"small",className:"avatar-dropdown-avatar",src:a(163),alt:"\u5934\u50cf"}),r.a.createElement("span",null,n)))};var T=function(e){var t=e.setCollapsed,a=e.collapsed,c=e.dispatch,l=e.location,u=y()("ant-header"),o=Object(n.useState)(!1),i=Object(E.a)(o,2),s=i[0],m=i[1];return Object(n.useEffect)((function(){document.onfullscreenchange=function(){m(!!document.fullscreenElement)}}),[]),r.a.createElement("div",{className:u},r.a.createElement("span",{className:"ant-header-trigger",onClick:t},r.a.createElement(H,{type:a?"MenuUnfoldOutlined":"MenuFoldOutlined",antd:"true",font:""})),r.a.createElement(Z,{location:l}),r.a.createElement("div",{className:"ant-header-right"},r.a.createElement("span",{className:"avatar-dropdown avatar-dropdown-action",onClick:function(){var e;e=document.documentElement,document.fullscreenElement?document.fullscreenElement&&(document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()):e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen?e.msRequestFullscreen():e.webkitRequestFullscreen&&e.webkitRequestFullScreen(),m(!document.fullscreenElement)}},r.a.createElement(K,{fullscreen:s})),r.a.createElement(J,{dispatch:c})))},U=(a(228),a(117)),W=a.n(U),$=a(293),G=a(294),K=function(e){return e.fullscreen?r.a.createElement(W.a,{title:"\u9000\u51fa\u5168\u5c4f"},r.a.createElement($.a,null)):r.a.createElement(W.a,{title:"\u5168\u5c4f"},r.a.createElement(G.a,null))},V=(a(416),a(205)),Y=a.n(V),Q=a(88),X=Y.a.Item;var Z=function(e){var t=e.location,a=Object(n.useState)([]),c=Object(E.a)(a,2),l=c[0],u=c[1];return Object(n.useEffect)((function(){u(function(e){var t=[];return e.split("/").reduce((function(e,a){var n=[e,a].join("/");return t.push(n),n})),t.map((function(e){return window.hyoukaRouterPath[e]})).filter((function(e){return e}))}(t.pathname))}),[]),r.a.createElement("div",null,l.length?r.a.createElement(Y.a,null,r.a.createElement(X,null,r.a.createElement(Q.a,{to:"/"},"\u9996\u9875")),l.map((function(e){return r.a.createElement(X,{key:e.path},r.a.createElement("span",null,e.meta.title))}))):null)},ee=a(92),te=a.n(ee),ae=(a(566),f.a.Content),ne=f.a.Header,re=Object(ee.connect)((function(e){var t=e.global,a=e.login;return{menu:t.asyncMenu,login:a}}))((function(e){var t=e.location,a=e.renderChildren,l=e.dispatch,o=e.menu,i=a.children,s=Object(n.useState)(!1),m=Object(E.a)(s,2),d=m[0],p=m[1],h=Object(c.g)(),g=Object(n.useState)(Object(b.b)("roles")),j=Object(E.a)(g,1)[0],w=Object(n.useState)(Object(u.a)({leftSide:"darkgrey",navBar:"light"},Object(b.b)("theme"))),x=Object(E.a)(w,1)[0],k=y()("basic-layout","full-layout",{fixed:x.layout&&-1!==x.layout.indexOf("fixedSidebar"),"fixed-header":x.layout&&-1!==x.layout.indexOf("fixedHeader"),"fixed-breadcrumbs":x.layout&&-1!==x.layout.indexOf("fixedBreadcrumbs"),"hided-breadcrumbs":x.layout&&-1!==x.layout.indexOf("hidedBreadcrumbs")});return Object(n.useEffect)((function(){j||h.push({pathname:"/user/login"}),x.layout||(x.layout=["fixedHeader","fixedSidebar","fixedBreadcrumbs"]),l({type:"global/getMenu"})}),[j,h,x,l]),r.a.createElement(f.a,{className:k},r.a.createElement(f.a,null,r.a.createElement(F,{menu:o,themeClass:x.leftSide,collapsedLeftSide:d}),r.a.createElement(ae,{style:{overflow:"hidden"}},r.a.createElement(f.a,{className:"full-layout"},r.a.createElement(ne,null,r.a.createElement(T,{location:t,dispatch:l,collapsed:d,setCollapsed:function(){p(!d)}})),r.a.createElement(v.a,null,r.a.createElement(O.a,{key:t.pathname,classNames:"fade",timeout:500},r.a.createElement(ae,{className:"router-page"},r.a.createElement(c.d,{location:t},i))))))))})),ce=(a(567),a(306)),le=a.n(ce),ue=(a(164),a(146)),oe=a.n(ue),ie=(a(569),a(307)),se=a.n(ie),me=(a(571),a(207)),de=a.n(me),fe=(a(573),a(206)),pe=a.n(fe),he=(a(577),a(296)),Ee=f.a.Content,be=pe.a.Item,ge=Object(ee.connect)((function(e){return{formLogin:e.login}}))((function(e){var t=Object(n.useState)(!1),c=Object(E.a)(t,2),l=c[0],o=c[1];return r.a.createElement(f.a,{className:"full-layout login-page"},r.a.createElement(Ee,null,r.a.createElement(le.a,{tip:"\u767b\u9646\u4e2d...",spinning:l},r.a.createElement(pe.a,{className:"login-form",onFinish:function(t){(0,e.dispatch)({type:"login/Login",payload:Object(u.a)({},t)}),o(!0)}},r.a.createElement("div",{className:"user-img"},r.a.createElement("img",{src:a(163),alt:"logo"}),r.a.createElement("b",null,"HYOUKA"),r.a.createElement("span",null,"-"),r.a.createElement("span",null,"Admin")),r.a.createElement(be,{name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u60a8\u7684\u7528\u6237\u540d\uff0c\u793a\u4f8badmin"}]},r.a.createElement(de.a,{size:"large",prefix:r.a.createElement(I.a,null),placeholder:"\u7528\u6237\u540d"})),r.a.createElement(be,{name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u60a8\u7684\u5bc6\u7801\uff0c\u793a\u4f8badmin"}]},r.a.createElement(de.a,{size:"large",prefix:r.a.createElement(he.a,null),type:"password",placeholder:"\u5bc6\u7801"})),r.a.createElement(be,{name:"remember",valuePropName:"checked",noStyle:!0},r.a.createElement(se.a,null,"\u8bb0\u4f4f\u6211")),r.a.createElement("a",{className:"login-form-forgot",href:"/"},"\u5fd8\u8bb0\u5bc6\u7801"),r.a.createElement(be,null,r.a.createElement(oe.a,{size:"large",className:"login-form-button",type:"primary",htmlType:"submit"},"\u767b\u9646")),r.a.createElement("div",{className:"new-user"},"\u65b0\u7528\u6237\uff1f",r.a.createElement("a",{href:"/"},"\u73b0\u5728\u6ce8\u518c"))))))})),ye=function(){return r.a.createElement("div",null,"\u9996\u9875")},ve=function(){return[{path:"/user",component:h,meta:{title:"\u767b\u9646"},redirect:"/user/login",children:[{meta:{title:"\u767b\u9646"},path:"/user/login",component:ge}]},{path:"/",component:re,meta:{title:"\u9996\u9875"},redirect:"/dashboard",children:[{meta:{title:"\u9ed8\u8ba4\u9875"},path:"/dashboard",component:ye}]}]},Oe=function(){return function(e){var t=e().map((function(e){return m((function(){return e}))})).reduce((function(e,t){return t.length?[].concat(Object(l.a)(e),Object(l.a)(t)):e.concat(t)}),[]);return r.a.createElement(c.d,null,t)}(ve)},je=a(125),we=te()({history:je.a});we.model(a(682).default),we.model(a(683).default),we.router((function(e){var t=e.history;return r.a.createElement(c.c,{history:t},Oe())})),we.start("#root"),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return c}));var n=function(e,t){localStorage.setItem(e,t)},r=function(e){return localStorage.getItem(e)},c=function(){localStorage.clear()}},682:function(e,t,a){"use strict";a.r(t);var n=a(39),r=a(69),c=a.n(r),l=function(e){return new Promise((function(t,a){t(Object(n.a)({roles:"\u7ba1\u7406\u5458"},e)),a("\u767b\u9646\u5931\u8d25")}))},u=a(68),o=a(125),i={namespace:"login",state:{username:"",password:"",remember:void 0},effects:{Login:c.a.mark((function e(t,a){var n,r,i,s,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,r=a.put,i=a.call,e.next=4,i(l,n);case 4:return s=e.sent,e.next=7,r({type:"changeState",payload:s});case 7:if(!(Object.keys(s).length>0)){e.next=13;break}return m=s.roles,e.next=11,Object(u.c)("roles",m);case 11:return e.next=13,o.a.replace({pathname:"/"});case 13:case"end":return e.stop()}}),e)})),Logout:c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.replace({pathname:"/user/login"});case 2:return e.next=4,Object(u.a)();case 4:case"end":return e.stop()}}),e)}))},reducers:{changeState:function(e,t){var a=t.payload;return Object(n.a)(Object(n.a)({},e),a)}}};t.default=i},683:function(e,t,a){"use strict";a.r(t);var n=a(39),r=a(69),c=a.n(r),l=function(){return new Promise((function(e){e([{meta:{title:"\u9996\u9875"},path:"/dashboard",icon:"DashboardOutlined"},{meta:{title:"\u9996\u98751"},path:"/dashboard1",icon:"DashboardOutlined"}])}))},u={namespace:"global",state:{asyncMenu:[]},effects:{getMenu:c.a.mark((function e(t,a){var n,r,u,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,r=a.put,u=a.call,e.next=4,u(l,n);case 4:if(!((o=e.sent).length>0)){e.next=8;break}return e.next=8,r({type:"changeMenu",payload:o});case 8:case"end":return e.stop()}}),e)}))},reducers:{changeMenu:function(e,t){var a=t.payload;return Object(n.a)(Object(n.a)({},e),{},{asyncMenu:a})}}};t.default=u}},[[310,1,2]]]);
//# sourceMappingURL=main.3aaa1844.chunk.js.map