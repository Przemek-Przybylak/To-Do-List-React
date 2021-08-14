(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{21:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var i,o,r,a,c,d,s,b,l,u,j,x,g,p,h,f,m,O,k,w=t(1),v=t.n(w),y=t(12),D=t.n(y),z=(t(21),t(6)),C=t(16),N=t(5),S=t(2),_=t(3),T=_.b.form(i||(i=Object(S.a)(["\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n\n    @media (max-width: 767px) {\n        flex-wrap: wrap;\n        align-items: center;\n    };\n"]))),F=_.b.button(o||(o=Object(S.a)(["\n    height: 40px;\n    margin-left: 15px;\n    margin-right: 15px;\n    width: 150px;\n    background-color: teal;\n    color: white;\n    border: none;\n    transition: 0.5s;\n\n    @media (max-width:767px) {\n        align-self: center;\n        margin-bottom: 20px;\n        width: 90%;\n        margin-right: auto;\n        margin-left: auto;\n    };\n\n    &:hover{\n        background-color: rgb(56, 179, 179);\n        transform: scale(1.1);\n    };\n"]))),H=_.b.input(r||(r=Object(S.a)(["\n    font-size: 20px;\n    width: 100%;\n    padding: 10px;\n    height: 40px;\n    border: 1px solid rgb(214, 214, 214);\n\n    @media (max-width:767px) {\n        margin-right: 5%;\n        margin-left: 5%;\n        width: 90%;\n    };\n"]))),I=_.b.p(a||(a=Object(S.a)(["\n    flex-basis: 100%;\n    padding: 0px 0px 0px 20px;\n"]))),J=t(0),L=function(n){var e=n.addNewTask,t=Object(w.useState)(""),i=Object(N.a)(t,2),o=i[0],r=i[1];return Object(J.jsxs)(T,{onSubmit:function(n){n.preventDefault(),e(o.trim()),r("")},children:[Object(J.jsx)(I,{children:Object(J.jsx)("label",{children:Object(J.jsx)(H,{value:o,onChange:function(n){var e=n.target;return r(e.value)},placeholder:"Co jest do zrobienia?"})})}),Object(J.jsx)(F,{children:"Dodaj zadanie"})]})},P=_.b.ul(c||(c=Object(S.a)(["\n        margin: 0px;\n        list-style: none;\n        padding: 30px 30px;\n    "]))),U=_.b.li(d||(d=Object(S.a)(["\n        display: flex;\n        border-bottom: 1px solid rgb(214, 214, 214);\n        padding: 10px 0px;\n        align-items: center;\n        word-break: break-all;\n    \n        ",";\n    "])),(function(n){return n.hidden&&Object(_.a)(s||(s=Object(S.a)(["\n            display: none;\n        "])))})),A=_.b.button(b||(b=Object(S.a)(["\n        width: 25px;\n        height: 25px;\n        flex-shrink: 0;\n        border: none;\n\n        ",";\n\n        ",";\n    "])),(function(n){return n.remove&&Object(_.a)(l||(l=Object(S.a)(["\n            margin-left: auto;\n            margin-right: 1px;\n            background-color: rgb(228, 39, 39);\n            background-position: center;\n            background-size: cover;\n            color: white;\n            transition: 0.5s;\n\n            &:hover{\n                background-color: rgb(255, 101, 45);\n            }\n        "])))}),(function(n){return n.toggleDone&&Object(_.a)(u||(u=Object(S.a)(["\n            margin-right: 10px;\n            background-color: darkgreen;\n            background-position: center;\n            transition: 0.5s;\n            background-size: cover;\n            color: white;\n\n            $:hover{\n                background-color: forestgreen;\n            }\n        "])))})),B=_.b.span(j||(j=Object(S.a)(["\n        ",";\n    "])),(function(n){return n.done&&Object(_.a)(x||(x=Object(S.a)(["\n        margin: 0 10px;\n        "])))})),E=function(n){var e=n.tasks,t=n.hideDone,i=n.removeTasks,o=n.toggleTaskDone;return Object(J.jsx)(P,{children:e.map((function(n){return Object(J.jsxs)(U,{hidden:n.done&&t,children:[Object(J.jsx)(A,{onClick:function(){return o(n.id)},toggleDone:!0,children:n.done?"\u2714":""}),Object(J.jsx)(B,{done:!0,children:n.content}),Object(J.jsx)(A,{onClick:function(){return i(n.id)},remove:!0,children:"\ud83d\uddd1"})]},n.id)}))})},M=_.b.button(g||(g=Object(S.a)(["\n    border: none;\n    color: teal;\n    padding: 20px;\n    background-color: white;\n    transition: 0.5s;\n\n    @media (max-width: 767px) {\n        width: 100%;\n    };\n\n    &:hover{\n        color: rgb(56, 179, 179);\n        cursor: pointer;\n    };\n\n    &:disabled{\n        color: #ccc;\n    };\n"]))),$=function(n){var e=n.tasks,t=n.hideDone,i=n.toggleHideDone,o=n.setAllDone;return 0===e.lenght?null:Object(J.jsxs)("div",{className:"button",children:[Object(J.jsxs)(M,{onClick:i,disabled:e.every((function(n){return n.done})),children:[t?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(J.jsx)(M,{onClick:o,disabled:e.every((function(n){return n.done})),children:"Uko\u0144cz wszystkie"})]})},q=_.b.section(p||(p=Object(S.a)(["\n    margin: 20px auto;\n    background-color: white;\n"]))),G=_.b.div(h||(h=Object(S.a)(["\n    border-bottom: 1px solid rgb(214, 214, 214);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    @media (max-width: 767px) {\n        flex-wrap: wrap;\n        justify-content: center;\n    };\n"]))),K=_.b.h2(f||(f=Object(S.a)(["\n    padding: 30px;\n    font-size: 22px;\n    margin-bottom: 0;\n    margin-top: 0px;\n\n    @media (max-width: 767px) {\n        width: 100%;\n};\n"]))),Q=function(n){var e=n.tittle,t=n.body,i=n.extraHeaderContent;return Object(J.jsxs)(q,{className:"section section__tasks",children:[Object(J.jsxs)(G,{className:"section__container section__container--tittleTask",children:[Object(J.jsx)(K,{className:"section__tittle",children:e}),i]}),t]})},R=_.b.header(m||(m=Object(S.a)(["\n    margin-bottom: 25px;\n    font-size: 16px;\n"]))),V=_.b.h1(O||(O=Object(S.a)(["\n    padding-top: 20px;\n    padding-bottom: 10px;\n\n    @media(max-width: 996px){\n        padding-top: 5px;\n        padding-bottom: 3px;\n    };\n"]))),W=function(n){var e=n.tittle;return Object(J.jsx)(R,{className:"header",children:Object(J.jsx)(V,{className:"header__tittle",children:e})})},X=_.b.main(k||(k=Object(S.a)(["\n    background-color: #eee;\n    font-family: 'Ubuntu', sans-serif;\n    padding: 50px 300px;\n    height: 100vh;\n    box-sizing: border-box;\n\n@media (max-width: 996px) {\n\n        padding: 30px 20px;\n    };\n\n&*, ::after, ::before {\n    box-sizing: inherit;\n};\n"]))),Y=function(n){var e=n.children;return Object(J.jsx)(X,{className:"container",children:e})};var Z=function(){var n=Object(w.useState)(!1),e=Object(N.a)(n,2),t=e[0],i=e[1],o=Object(w.useState)(JSON.parse(localStorage.getItem("tasks"))||[]),r=Object(N.a)(o,2),a=r[0],c=r[1];return Object(w.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(a))}),[a]),Object(J.jsxs)(Y,{children:[Object(J.jsx)(W,{tittle:"Lista zada\u0144"}),Object(J.jsx)(Q,{tittle:"Dodaj nowe zadanie",body:Object(J.jsx)(L,{addNewTask:function(n){if(""===n)return"";c((function(e){return[].concat(Object(C.a)(e),[{content:n,done:!1,id:e.length?e[e.length-1].id+1:1}])}))}})}),Object(J.jsx)(Q,{tittle:"Lista zada\u0144",body:Object(J.jsx)(E,{tasks:a,hideDone:t,removeTasks:function(n){c((function(e){return e.filter((function(e){return e.id!==n}))}))},toggleTaskDone:function(n){c((function(e){return e.map((function(e){return e.id===n?Object(z.a)(Object(z.a)({},e),{},{done:!e.done}):e}))}))}}),extraHeaderContent:Object(J.jsx)($,{tasks:a,hideDone:t,toggleHideDone:function(){i((function(n){return!n}))},setAllDone:function(){c((function(n){return n.map((function(n){return Object(z.a)(Object(z.a)({},n),{},{done:!0})}))}))}})})]})},nn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,i=e.getFID,o=e.getFCP,r=e.getLCP,a=e.getTTFB;t(n),i(n),o(n),r(n),a(n)}))};D.a.render(Object(J.jsx)(v.a.StrictMode,{children:Object(J.jsx)(Z,{})}),document.getElementById("root")),nn()}},[[25,1,2]]]);
//# sourceMappingURL=main.f8205ec0.chunk.js.map