(this["webpackJsonptss-handon"]=this["webpackJsonptss-handon"]||[]).push([[0],{11:function(t,n,e){},13:function(t,n,e){},15:function(t,n,e){"use strict";e.r(n);var c=e(1),r=e.n(c),a=e(5),i=e.n(a),s=(e(11),e(3)),u=e.n(s),o=e(6),j=e(4),h=(e(13),e(0));var l=function(t){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{onSubmit:t.onSubmit,children:[Object(h.jsx)("input",{type:"text",onChange:t.onChange}),Object(h.jsx)("button",{type:"submit",children:"Search"})]})})},b=function(t){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h6",{children:t.title}),Object(h.jsx)("img",{alt:t.title,src:t.url})]})};console.log("XaLk6Viat9ZelB6QvRnE7Eac7R7uPMrn");var f=function(){var t=Object(c.useState)([]),n=Object(j.a)(t,2),e=n[0],r=n[1],a=Object(c.useState)(""),i=Object(j.a)(a,2),s=i[0],f=i[1],g=function(){var t=Object(o.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.giphy.com/v1/gifs/search?api_key=".concat("XaLk6Viat9ZelB6QvRnE7Eac7R7uPMrn","&q=").concat(s,"&limit=6")).then((function(t){return t.json()}));case 2:n=t.sent,r(n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(l,{onChange:function(t){f(t.target.value)},onSubmit:function(t){t.preventDefault(),g()},search:{search:s}}),e.map((function(t,n){return Object(h.jsx)(b,{title:t.title,url:t.images.original.url},n)}))]})},g=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,16)).then((function(n){var e=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,i=n.getTTFB;e(t),c(t),r(t),a(t),i(t)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),g()}},[[15,1,2]]]);
//# sourceMappingURL=main.3227ca91.chunk.js.map