(this["webpackJsonptest-task"]=this["webpackJsonptest-task"]||[]).push([[0],{13:function(e,t,c){e.exports={gradient:"gradient_gradient__3xDFG",buttonStyle:"gradient_buttonStyle__326x4"}},19:function(e,t,c){},22:function(e,t,c){e.exports={gradientField:"gradientField_gradientField__3jNhM"}},29:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(21),a=c.n(r),o=(c(29),c(19),c(18)),l=c(4),i=c(2),u=c(22),s=c.n(u),j=c(0);function d(e){var t=e.style,c=e.colorValue;return Object(j.jsxs)("div",{style:t,className:s.a.gradientField,children:[Object(j.jsx)("div",{children:c.colorFirstValue}),Object(j.jsx)("div",{children:c.colorSecondValue})]})}var b=c(13),O=c.n(b);function f(e){var t=e.style,c=e.colorValue,r=e.index,a=e.colorValues,o=e.setColorValues,u=Object(n.useState)(!1),s=Object(l.a)(u,2),b=s[0],f=s[1];if(b)return Object(j.jsx)(i.a,{to:"/edit/".concat(r)});return Object(j.jsxs)("div",{className:O.a.gradient,children:[Object(j.jsx)(d,{style:t,colorValue:c}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:O.a.buttonStyle,onClick:function(){f((function(e){return!e}))},children:"edit"})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:O.a.buttonStyle,onClick:function(){var e=[];a.forEach((function(t,c){c!=r&&e.push(t),o(e)}))},children:"delete"})})]})}function x(e){var t=e.colorValues,c=e.setColorValues;return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"title",children:"Items list"}),t.map((function(e){return e.colorFirstValue||e.colorSecondValue?Object(j.jsx)(f,{style:{width:"250px",height:"50px",background:"linear-gradient(to right, ".concat(e.colorFirstValue,", ").concat(e.colorSecondValue,")")},colorValue:e,index:e.id,setColorValues:c,colorValues:t},e.id):void 0}))]})}var h=c(24);function v(e){var t=e.setColorValues,c=Object(n.useState)(""),r=Object(l.a)(c,2),a=r[0],o=r[1],u=Object(n.useState)(""),s=Object(l.a)(u,2),b=s[0],O=s[1],f=Object(n.useState)(!1),x=Object(l.a)(f,2),v=x[0],g=x[1],V=Object(n.useState)(!0),p=Object(l.a)(V,2),S=p[0],m=p[1],F=Object(n.useState)(!1),C=Object(l.a)(F,2),N=C[0],y=C[1],k=Object(n.useState)(!1),T=Object(l.a)(k,2),_=T[0],w=T[1];Object(n.useEffect)((function(){return B()}),[a,b]);var B=function(){var e=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(a),t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(b);m(!e||!t)};if(v)return Object(j.jsx)(i.a,{to:"/"});var $={width:"300px",height:"50px",background:"linear-gradient(to right, ".concat(a,", ").concat(b)};var E={backgroundColor:"#d62342",color:"#662b0e"};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"title",children:"Create new item"}),Object(j.jsxs)("div",{className:"inputWrapper",children:[Object(j.jsx)("input",{onChange:function(e){e.currentTarget.value.length<=7&&o(e.currentTarget.value),y(!1)},value:a,style:N?E:void 0,onBlur:function(){/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(a)?y(!1):y(!0)},className:"inputStyle"}),Object(j.jsx)("input",{onChange:function(e){e.currentTarget.value.length<=7&&O(e.currentTarget.value),w(!1)},value:b,style:_?E:void 0,onBlur:function(){/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(b)?w(!1):w(!0)},className:"inputStyle"})]}),Object(j.jsx)("button",{onClick:function(){t((function(e){return[{colorFirstValue:a,colorSecondValue:b}].concat(Object(h.a)(e))})),g((function(e){return!e}))},disabled:S,className:"addButton",children:"add"}),Object(j.jsx)(d,{style:$,colorValue:{colorFirstValue:a,colorSecondValue:b}})]})}function g(e){var t=e.colorValues,c=e.setColorValues,r=Object(i.g)().id,a=t.find((function(e){return e.id===Number(r)}))||{colorFirstValue:"",colorSecondValue:"",id:""},o=Object(n.useState)(a.colorFirstValue),u=Object(l.a)(o,2),s=u[0],b=u[1],O=Object(n.useState)(a.colorSecondValue),f=Object(l.a)(O,2),x=f[0],h=f[1],v=Object(n.useState)(!1),g=Object(l.a)(v,2),V=g[0],p=g[1],S=Object(n.useState)(!1),m=Object(l.a)(S,2),F=m[0],C=m[1],N=Object(n.useState)(!1),y=Object(l.a)(N,2),k=y[0],T=y[1],_={width:"300px",height:"50px",background:"linear-gradient(to right, ".concat(s,", ").concat(x,")")},w=Object(n.useState)(!0),B=Object(l.a)(w,2),$=B[0],E=B[1];if(Object(n.useEffect)((function(){return function(){var e=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(s),t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(x);E(!e||!t)}()}),[s,x]),V)return Object(j.jsx)(i.a,{to:"/"});var A={backgroundColor:"#d62342",color:"#662b0e"};return a.colorFirstValue||a.colorFirstValue||a.id?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"title",children:"Edit item"}),Object(j.jsxs)("div",{className:"inputWrapper",children:[Object(j.jsx)("input",{onChange:function(e){e.currentTarget.value.length<=7&&b(e.currentTarget.value),C(!1)},value:s,style:F?A:void 0,onBlur:function(){/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(s)?C(!1):C(!0)},className:"inputStyle"}),Object(j.jsx)("input",{onChange:function(e){e.currentTarget.value.length<=7&&h(e.currentTarget.value),T(!1)},value:x,style:k?A:void 0,onBlur:function(){/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(x)?T(!1):T(!0)},className:"inputStyle"})]}),Object(j.jsx)("button",{onClick:function(){var e=[];t.forEach((function(c,n){n===Number(r)?e.push({colorFirstValue:s,colorSecondValue:x}):e.push(t[n])})),c(e),p((function(e){return!e}))},disabled:$,className:"addButton",children:"Add"}),Object(j.jsx)(d,{style:_,colorValue:{colorFirstValue:s,colorSecondValue:x}})]}):Object(j.jsx)(i.a,{to:"/"})}function V(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1],a=c.map((function(e,t){return Object(o.a)(Object(o.a)({},e),{},{id:t})}));return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(i.d,{children:[Object(j.jsx)(i.b,{path:"/",exact:!0,render:function(){return Object(j.jsx)(x,{colorValues:a,setColorValues:r})}}),Object(j.jsx)(i.b,{path:"/new",exact:!0,render:function(){return Object(j.jsx)(v,{setColorValues:r})}}),Object(j.jsx)(i.b,{path:"/edit/:id",exact:!0,render:function(){return Object(j.jsx)(g,{colorValues:a,setColorValues:r})}}),Object(j.jsx)(i.b,{path:"/404",render:function(){return Object(j.jsx)("h1",{children:"404: PAGE NOT FOUND"})}}),Object(j.jsx)(i.a,{from:"*",to:"/404"})]})})}var p=c(8);function S(){return Object(j.jsxs)("ul",{className:"header",children:[Object(j.jsx)("li",{children:Object(j.jsx)(p.b,{to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(p.b,{to:"/new",children:"Create"})})]})}function m(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(S,{}),Object(j.jsx)(V,{})]})}var F=function(){return Object(j.jsx)(p.a,{children:Object(j.jsx)(m,{})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),r(e),a(e),o(e)}))};a.a.render(Object(j.jsx)(F,{}),document.getElementById("root")),C()}},[[36,1,2]]]);
//# sourceMappingURL=main.407ced11.chunk.js.map