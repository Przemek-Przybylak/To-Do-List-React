(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{43:function(n,e,t){},49:function(n,e,t){"use strict";t.r(e);var r,a,o,i,c,s,d,b,j,l,u,x,p,h,g,O,f,m,k,w=t(0),z=t.n(w),y=t(21),v=t.n(y),D=t(14),T=(t(43),t(24)),C=t(8),S=t(34),P=t(20),I="tasks",N=function(n){return localStorage.setItem(I,JSON.stringify(n))},A=Object(P.b)({name:"tasks",initialState:{tasks:(JSON.parse(localStorage.getItem(I))||[]).tasks,hideDone:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,e){var t=n.tasks.findIndex((function(n){return n.id===e.payload}));n.tasks[t].done=!n.tasks[t].done},setAllDone:function(n){n.tasks.forEach((function(n){n.done=!0}))},removeTask:function(n,e){var t=n.tasks.findIndex((function(n){return n.id===e.payload}));n.tasks.splice(t,1)},fetchExampleTasks:function(){},setTasks:function(n,e){var t=e.payload;n.tasks=t}}}),H=A.actions,E=H.addTask,F=H.setTasks,L=H.toggleHideDone,J=H.toggleTaskDone,R=H.setAllDone,U=H.removeTask,B=H.fetchExampleTasks,M=function(n){return n.tasks},K=A.reducer,Z=t(6),q=t(7),G=q.b.form(r||(r=Object(Z.a)(["\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n\n    @media (max-width: 767px) {\n    flex-wrap: wrap;\n    align-items: center;\n    };\n"]))),Q=q.b.button(a||(a=Object(Z.a)(["\n    height: 40px;\n    margin-left: 15px;\n    margin-right: 15px;\n    width: 150px;\n    background-color: teal;\n    color: white;\n    border: none;\n    transition: 0.5s;\n\n    @media (max-width:767px) {\n    align-self: center;\n    margin-bottom: 20px;\n    width: 90%;\n    margin-right: auto;\n    margin-left: auto;\n    };\n\n    &:hover{\n    background-color: rgb(56, 179, 179);\n    transform: scale(1.1);\n    };\n"]))),V=q.b.input(o||(o=Object(Z.a)(["\n    font-size: 20px;\n    width: 100%;\n    padding: 10px;\n    height: 40px;\n    border: 1px solid rgb(214, 214, 214);\n\n    @media (max-width:767px) {\n    margin-right: 5%;\n    margin-left: 5%;\n    width: 90%;\n    };\n"]))),W=q.b.p(i||(i=Object(Z.a)(["\n    flex-basis: 100%;\n    padding: 0px 0px 0px 20px;\n"]))),X=t(2),Y=function(){var n=Object(w.useState)(""),e=Object(S.a)(n,2),t=e[0],r=e[1],a=Object(D.b)(),o=Object(w.useRef)(null);return Object(X.jsxs)(G,{onSubmit:function(n){n.preventDefault(),a(E({content:t.trim(),done:!1,id:Object(P.c)()})),E(),r(""),o.current.focus()},children:[Object(X.jsx)(W,{children:Object(X.jsx)("label",{children:Object(X.jsx)(V,{ref:o,value:t,onChange:function(n){var e=n.target;return r(e.value)},placeholder:"Co jest do zrobienia?"})})}),Object(X.jsx)(Q,{children:"Dodaj zadanie"})]})},$=q.b.ul(c||(c=Object(Z.a)(["\n        margin: 0px;\n        list-style: none;\n        padding: 30px 30px;\n    "]))),_=q.b.li(s||(s=Object(Z.a)(["\n        display: flex;\n        border-bottom: 1px solid rgb(214, 214, 214);\n        padding: 10px 0px;\n        align-items: center;\n        word-break: break-all;\n    \n        ",";\n    "])),(function(n){return n.hidden&&Object(q.a)(d||(d=Object(Z.a)(["\n            display: none;\n        "])))})),nn=q.b.button(b||(b=Object(Z.a)(["\n        width: 25px;\n        height: 25px;\n        flex-shrink: 0;\n        border: none;\n\n        ",";\n\n        ",";\n    "])),(function(n){return n.remove&&Object(q.a)(j||(j=Object(Z.a)(["\n        margin-left: auto;\n        margin-right: 1px;\n        background-color: rgb(228, 39, 39);\n        background-position: center;\n        background-size: cover;\n        color: white;\n        transition: 0.5s;\n\n        &:hover{\n        background-color: rgb(255, 101, 45);\n            }\n        "])))}),(function(n){return n.toggleDone&&Object(q.a)(l||(l=Object(Z.a)(["\n        margin-right: 10px;\n        background-color: darkgreen;\n        background-position: center;\n        transition: 0.5s;\n        background-size: cover;\n        color: white;\n\n        &:hover{\n        background-color: forestgreen;\n            }\n        "])))})),en=q.b.span(u||(u=Object(Z.a)(["\n        ",";\n    "])),(function(n){return n.done&&Object(q.a)(x||(x=Object(Z.a)(["\n        margin: 0 10px;\n        "])))})),tn=function(){var n=Object(D.c)(M),e=n.tasks,t=n.hideDone,r=Object(D.b)();return Object(X.jsx)($,{children:e.map((function(n){return Object(X.jsxs)(_,{hidden:n.done&&t,children:[Object(X.jsx)(nn,{onClick:function(){return r(J(n.id))},toggleDone:!0,children:n.done?"\u2714":""}),Object(X.jsx)(en,{done:!0,children:n.content}),Object(X.jsx)(nn,{onClick:function(){return r(U(n.id))},remove:!0,children:"\ud83d\uddd1"})]},n.id)}))})},rn=q.b.button(p||(p=Object(Z.a)(["\n    border: none;\n    color: teal;\n    padding: 20px;\n    background-color: white;\n    transition: 0.5s;\n\n    @media (max-width: 767px) {\n    width: 100%;\n    };\n\n    &:hover{\n    color: rgb(56, 179, 179);\n    cursor: pointer;\n    };\n\n    &:disabled{\n    color: #ccc;\n    };\n"]))),an=function(){var n=Object(D.c)(M),e=n.tasks,t=n.hideDone,r=Object(D.b)();return 0===e.length?null:Object(X.jsxs)("div",{children:[Object(X.jsxs)(rn,{onClick:function(){return r(L())},disabled:e.every((function(n){return n.done})),children:[t?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(X.jsx)(rn,{onClick:function(){return r(R())},disabled:e.every((function(n){return n.done})),children:"Uko\u0144cz wszystkie"})]})},on=q.b.section(h||(h=Object(Z.a)(["\n    margin: 20px auto;\n    background-color: white;\n"]))),cn=q.b.div(g||(g=Object(Z.a)(["\n    border-bottom: 1px solid rgb(214, 214, 214);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    @media (max-width: 767px) {\n    flex-wrap: wrap;\n    justify-content: center;\n    };\n"]))),sn=q.b.h2(O||(O=Object(Z.a)(["\n    padding: 30px;\n    font-size: 22px;\n    margin-bottom: 0;\n    margin-top: 0px;\n\n    @media (max-width: 767px) {\n    width: 100%;\n    };\n"]))),dn=function(n){var e=n.tittle,t=n.body,r=n.extraHeaderContent;return Object(X.jsxs)(on,{children:[Object(X.jsxs)(cn,{children:[Object(X.jsx)(sn,{children:e}),r]}),t]})},bn=q.b.header(f||(f=Object(Z.a)(["\n    margin-bottom: 25px;\n    font-size: 16px;\n"]))),jn=q.b.h1(m||(m=Object(Z.a)(["\n    padding-top: 20px;\n    padding-bottom: 10px;\n\n    @media(max-width: 996px){\n    padding-top: 5px;\n    padding-bottom: 3px;\n    };\n"]))),ln=function(n){var e=n.tittle;return Object(X.jsx)(bn,{children:Object(X.jsx)(jn,{children:e})})},un=q.b.main(k||(k=Object(Z.a)(["\n    background-color: #eee;\n    font-family: 'Ubuntu', sans-serif;\n    padding: 50px 300px;\n    height: 100vh;\n    box-sizing: border-box;\n\n@media (max-width: 996px) {\n    padding: 30px 20px;\n    };\n\n&*, ::after, ::before {\n    box-sizing: inherit;\n    };\n"]))),xn=function(n){var e=n.children;return Object(X.jsx)(un,{children:e})},pn=function(){var n=Object(D.b)();return Object(X.jsx)(rn,{onClick:function(){return n(B())},children:"Pobierz przyk\u0142adowe zadania"})};function hn(){return Object(X.jsxs)(xn,{children:[Object(X.jsx)(ln,{tittle:"Lista zada\u0144"}),Object(X.jsx)(dn,{tittle:"Dodaj nowe zadanie",body:Object(X.jsx)(Y,{}),extraHeaderContent:Object(X.jsx)(pn,{})}),Object(X.jsx)(dn,{tittle:"Lista zada\u0144",body:Object(X.jsx)(tn,{}),extraHeaderContent:Object(X.jsx)(an,{})})]})}var gn,On=q.b.article(gn||(gn=Object(Z.a)(["\n    padding: 30px;\n    font-size: 100%;\n    line-height: 1.15;\n    letter-spacing: 0.3px;\n"]))),fn=function(){return Object(X.jsxs)(xn,{children:[Object(X.jsx)(ln,{tittle:"O Autorze"}),Object(X.jsx)(dn,{tittle:"Przemek Przybylak",body:Object(X.jsx)(X.Fragment,{children:Object(X.jsxs)(On,{children:["Nazywam si\u0119 Przemys\u0142aw Przybylak budow\u0105 stron interesuj\u0119 si\u0119 od 2021 roku.",Object(X.jsx)("br",{}),"Obecnie moim g\u0142\xf3wnym celem jest zostanie frontend developerem. Chc\u0119 jak najszybciej zosta\u0107 profesjonalist\u0105 i rozpocz\u0105\u0107 swoj\u0105 przygod\u0119 w bran\u017cy IT!",Object(X.jsx)("br",{}),"Prywatnie jestem ojcem 2 dzieci. S\u0105 to dziewczynki pierwsza ma na imi\u0119 ",Object(X.jsx)("em",{children:"Ola"}),", a druga",Object(X.jsx)("em",{children:" Natalia"}),". Nied\u0142ugo nasza rodzina powi\u0119kszy si\u0119 o kolejnego cz\u0142onka rodziny, a mianowicie o",Object(X.jsx)("em",{children:" Magdalen\u0119"}),".",Object(X.jsx)("br",{}),"Kocham podr\xf3\u017cowa\u0107, oraz przebywa\u0107 na \u0142onie natury. Niewa\u017cne czy Tatry, czy pobliski las, przyroda od zawsze by\u0142a dla mnie \u017ar\xf3d\u0142em pot\u0119\u017cnego spokoju wewn\u0119trznego, oraz natchnienia.",Object(X.jsx)("br",{}),"Skoro kocham g\xf3ry, to dlaczego nie zaj\u0105\u0107 si\u0119 alpinistyk\u0105 przemys\u0142ow\u0105?",Object(X.jsx)("br",{}),"Niedawno zdoby\u0142em certyfikat IRATA level 1, dzi\u0119ki czemu mog\u0119 wykonuj\u0119 prac\u0119 Alpinisty Przemys\u0142owego."]})})})]})},mn=function(){return Object(X.jsx)(T.a,{children:Object(X.jsxs)("nav",{children:[Object(X.jsx)("ul",{children:Object(X.jsxs)("li",{children:[Object(X.jsx)(T.b,{to:"/zadania",children:"Zadania"}),Object(X.jsx)(T.b,{to:"/author",children:"O autorze"})]})}),Object(X.jsxs)(C.c,{children:[Object(X.jsx)(C.a,{path:"/zadania",children:Object(X.jsx)(hn,{})}),Object(X.jsx)(C.a,{path:"/author",children:Object(X.jsx)(fn,{})})]})]})})},kn=t(35),wn=t(12),zn=t.n(wn),yn=t(23),vn=t(17),Dn=t(33),Tn=function(){var n=Object(Dn.a)(zn.a.mark((function n(){var e;return zn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/To-Do-List-React/exampleTasks.json");case 2:return(e=n.sent).ok||new Error(e.statusText),n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Cn=zn.a.mark(In),Sn=zn.a.mark(Nn),Pn=zn.a.mark(An);function In(){var n;return zn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(vn.a)(Tn);case 3:return n=e.sent,e.next=6,Object(vn.b)(F(n));case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(vn.a)(alert,"Hej, co\u015b posz\u0142o nie tak!");case 12:case"end":return e.stop()}}),Cn,null,[[0,8]])}function Nn(){var n;return zn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(vn.c)(M);case 2:return n=e.sent,e.next=5,Object(vn.a)(N,n);case 5:case"end":return e.stop()}}),Sn)}function An(){return zn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("saga"),n.next=3,Object(vn.d)(B.type,In);case 3:return n.next=5,Object(vn.d)("*",Nn);case 5:case"end":return n.stop()}}),Pn)}var Hn=zn.a.mark(En);function En(){return zn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(yn.a)([An()]);case 2:case"end":return n.stop()}}),Hn)}var Fn=Object(kn.a)(),Ln=Object(P.a)({reducer:{tasks:K},middleware:[Fn]});Fn.run(En);var Jn=Ln,Rn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,50)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;t(n),r(n),a(n),o(n),i(n)}))};v.a.render(Object(X.jsx)(z.a.StrictMode,{children:Object(X.jsx)(D.a,{store:Jn,children:Object(X.jsx)(mn,{})})}),document.getElementById("root")),Rn()}},[[49,1,2]]]);
//# sourceMappingURL=main.c19be087.chunk.js.map