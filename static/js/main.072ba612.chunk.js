(this.webpackJsonpreact_basics=this.webpackJsonpreact_basics||[]).push([[0],{14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),o=s(7),r=s.n(o),a=(s(14),s(9)),i=s(6),l=s(2),d=s(0),u=function(e){var t=e.text,s=e.color,c=e.onClick;return Object(d.jsxs)("button",{onClick:c,className:s,children:[t," "]})};u.defaultProps={color:"btn btn-outline-dark"};var j=u,b=function(e){var t=e.title,s=e.onToggleForm,c=e.showFormProps;return Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("h2",{className:"col-sm-10",children:t}),Object(d.jsx)(j,{text:c?"close":"open",color:"btn btn-outline-dark",onClick:s})]})},m=s(8),h=function(e){e.id;var t=e.task,s=e.onDelete,c=e.onToggle;return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row p-2 mt-2",style:{backgroundColor:"rgb(224, 224, 209)",borderLeft:t.status?"5px solid green":""},onDoubleClick:function(){return c(t.id)},children:[Object(d.jsx)("div",{className:"col-sm-10",children:Object(d.jsxs)("h5",{children:[t.desc," "]})}),Object(d.jsx)("div",{className:"col-sm-2",children:Object(d.jsx)(m.a,{onClick:function(){return s(t.id)},style:{color:"red",cursor:"pointer"}})})]})})},O=function(e){var t=e.tasks,s=e.onDelete,c=e.onToggle;return Object(d.jsx)("div",{className:"mt-5",children:t.map((function(e){return Object(d.jsx)(h,{task:e,onDelete:s,onToggle:c},e.id)}))})},f=function(e){var t=e.onAdd,s=Object(c.useState)(""),n=Object(l.a)(s,2),o=n[0],r=n[1],a=Object(c.useState)(!1),i=Object(l.a)(a,2),u=i[0],j=i[1],b=Object(c.useState)(!1),m=Object(l.a)(b,2),h=m[0],O=m[1];return Object(d.jsxs)("form",{className:"mt-5",onSubmit:function(e){if(e.preventDefault(),!o)return O(!0),void alert("Task is required ..");t({task:o,remainder:u}),r(""),j(!1),O(!1)},children:[Object(d.jsx)("div",{className:"form-group",style:{border:h?"4px solid red":""},children:Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"enter task",value:o,onChange:function(e){return r(e.target.value)}})}),Object(d.jsx)("div",{className:"form-group form-check",children:Object(d.jsxs)("label",{className:"form-check-label",children:[Object(d.jsx)("input",{className:"form-check-input",checked:u,type:"checkbox",style:{display:"inline-block"},value:u,onChange:function(e){return j(e.currentTarget.checked)}}),Object(d.jsx)("h6",{style:{display:"inline-block"},children:"Set Remainder"})]})}),Object(d.jsx)("input",{className:"btn btn-outline-dark btn-block",type:"submit",value:"Save"})]})};var x=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),s=t[0],n=t[1],o=Object(c.useState)([{id:1,desc:"this is task1",status:!0},{id:2,desc:"this is task2",status:!1},{id:3,desc:"this is task3",status:!1}]),r=Object(l.a)(o,2),u=r[0],j=r[1];return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"mt-5 col-sm-6 offset-sm-3 col-lg-6 offset-lg-3 col-xs-6 offset-xs-3 p-5",style:{border:"2px solid grey"},children:[Object(d.jsx)(b,{title:"TODO APP",onToggleForm:function(){n(!s)},showFormProps:s}),s&&Object(d.jsx)(f,{onAdd:function(e){var t={id:u.length+1,desc:e.task,status:e.remainder};j([].concat(Object(a.a)(u),[t]))}}),u&&u.length&&u.length>0?Object(d.jsx)(O,{tasks:u,onDelete:function(e){j(u.filter((function(t){return t.id!==e})))},onToggle:function(e){j(u.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{status:!t.status}):t})))}}):Object(d.jsx)("h5",{className:"mt-5",children:"No Todos Found"})]})})},g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,o=t.getLCP,r=t.getTTFB;s(e),c(e),n(e),o(e),r(e)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.072ba612.chunk.js.map