(this["webpackJsonpgift-expert-app"]=this["webpackJsonpgift-expert-app"]||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),a=n.n(c),s=(n(14),n(2)),i=n(9),o=n(0),u=function(e){var t=e.categories,n=e.setCategories,c=Object(r.useState)(""),a=Object(s.a)(c,2),u=a[0],l=a[1];return Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault();var r=t.indexOf(u);u&&-1===r?(n((function(e){return[u].concat(Object(i.a)(e))})),l("")):alert("Debe ingresar un valor y no puede ser repetido!")},children:Object(o.jsx)("input",{type:"text",className:"appearance-none w-full text-gray-800 rounded-md p-2 my-6 bg-pink-100 border-1 focus:border-pink-300 border-pink-300 focus:ring-1 focus:ring-pink-500 focus:ring-offset-3 focus:ring-offset-pink-500 focus:outline-none",placeholder:"Add category",value:u,onChange:function(e){l(e.target.value)}})})},l=n(6),p=n.n(l),d=n(8),j=function(){var e=Object(d.a)(p.a.mark((function e(t){var n,r,c,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"AEM93pDB4wa3GRu0m69ZWX4AlpWcKBsA",n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=20&api_key=").concat("AEM93pDB4wa3GRu0m69ZWX4AlpWcKBsA"),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,a=c.data.map((function(e){var t;return{id:e.id,title:e.title,image:null===(t=e.images)||void 0===t?void 0:t.original.url}})),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.image;return Object(o.jsx)("div",{className:"m-1",children:Object(o.jsx)("img",{className:"w-42 h-42 object-cover",src:t.image,alt:t.title})})},b=function(e){var t=e.category,n=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){j(e).then((function(e){a({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,a=n.loading;return Object(o.jsxs)("li",{className:"w-full bg-pink-500 text-gray-100 uppercase rounded-t-md font-bold mb-4",children:[Object(o.jsx)("div",{className:"p-2",children:t}),Object(o.jsxs)("div",{className:"bg-pink-800 p-2 flex flex-col items-center justify-center",children:[a&&Object(o.jsx)("p",{children:"Cargando..."}),c.map((function(e){return Object(o.jsx)(f,{image:e},e.id)}))]})]})},g=function(e){var t=e.categories;return Object(o.jsx)("ol",{className:"text-white",children:t.map((function(e){return Object(o.jsx)(b,{category:e},e)}))})},m=function(e){var t=e.categories,n=e.setCategories;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"text-pink-400 prose text-4xl font-bold uppercase",children:"GIFT-EXPERT App"}),Object(o.jsx)("hr",{className:"border-pink-400"}),Object(o.jsxs)("button",{className:"bg-indigo-500 p-2 rounded-md text-white uppercase my-3",onClick:function(){n([])},children:["Reset categories (",t.length,")"]})]})};var x=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(m,{categories:n,setCategories:c}),Object(o.jsx)(u,{categories:n,setCategories:c}),Object(o.jsx)(g,{categories:n})]})};a.a.render(Object(o.jsx)("div",{className:"w-full h-screen p-20",children:Object(o.jsx)(x,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.37840f04.chunk.js.map