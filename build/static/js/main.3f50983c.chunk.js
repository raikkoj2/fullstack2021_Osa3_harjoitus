(this.webpackJsonppart2=this.webpackJsonppart2||[]).push([[0],{39:function(t,n,e){"use strict";e.r(n);var c=e(15),o=e.n(c),r=e(2),a=e(6),i=e(4),u=e(3),s=e.n(u),j=e(0),l=function(t){var n=t.note,e=t.toggleImportance,c=n.important?"make not important":"make important";return Object(j.jsx)("li",{children:Object(j.jsxs)("p",{children:[n.content," ",Object(j.jsx)("button",{onClick:e,children:c})]})})},d="http://desolate-wildwood-46336.herokuapp.com/api/notes",f=function(){return s.a.get(d).then((function(t){return t.data}))},b=function(t){return s.a.post(d,t).then((function(t){return t.data}))},p=function(t,n){return s.a.put("".concat(d,"/").concat(t),n).then((function(t){return t.data}))},h=function(){var t=Object(r.useState)([]),n=Object(i.a)(t,2),e=n[0],c=n[1],o=Object(r.useState)(""),u=Object(i.a)(o,2),s=u[0],d=u[1],h=Object(r.useState)(!0),O=Object(i.a)(h,2),m=O[0],v=O[1];Object(r.useEffect)((function(){f().then((function(t){c(t)}))}),[]),console.log("render",e.length,"notes");var g=m?e:e.filter((function(t){return t.important}));return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Notes"}),Object(j.jsx)("div",{children:Object(j.jsxs)("button",{onClick:function(){return v(!m)},children:["show ",m?"important":"all"]})}),Object(j.jsx)("ul",{children:g.map((function(t){return Object(j.jsx)(l,{note:t,toggleImportance:function(){return function(t){var n=e.find((function(n){return n.id===t})),o=Object(a.a)(Object(a.a)({},n),{},{important:!n.important});p(t,o).then((function(n){c(e.map((function(e){return e.id!==t?e:n})))})).catch((function(o){alert("the note '".concat(n.content,"' was already deleted from server")),c(e.filter((function(n){return n.id!==t})))}))}(t.id)}},t.id)}))}),Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={content:s,date:(new Date).toISOString(),important:Math.random()>.5};b(n).then((function(t){c(e.concat(t)),d("")}))},children:[Object(j.jsx)("input",{value:s,onChange:function(t){console.log(t.target.value),d(t.target.value)}}),Object(j.jsx)("button",{type:"submit",children:"save"})]})]})};o.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.3f50983c.chunk.js.map