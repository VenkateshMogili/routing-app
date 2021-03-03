(this["webpackJsonprouting-crash-course"]=this["webpackJsonprouting-crash-course"]||[]).push([[0],{176:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(61),i=c.n(a),o=(c(69),c(4)),l=(c(70),c(2)),r=c(0);function j(){return Object(r.jsxs)("nav",{className:"navbar bg-light justify-content-center sticky-top fixed-top",children:[Object(r.jsx)("li",{className:"nav-link",children:Object(r.jsx)("a",{href:"/",className:"nav-link",children:"Refresh"})}),Object(r.jsx)("li",{className:"nav-link",children:Object(r.jsx)(l.c,{to:"/menu",className:"nav-link",activeClassName:"btn btn-primary",children:"Sidebar"})}),Object(r.jsx)("li",{className:"nav-link",children:Object(r.jsx)(l.c,{to:"/dashboard",className:"nav-link",activeClassName:"btn btn-primary",children:"Dashboard"})}),Object(r.jsx)("li",{className:"nav-link",children:Object(r.jsx)(l.c,{to:"/projects",className:"nav-link",activeClassName:"btn btn-primary",children:"My Projects"})}),Object(r.jsx)("li",{className:"nav-link",children:Object(r.jsx)(l.c,{to:"/topics",className:"nav-link",activeClassName:"btn btn-primary",children:"My Topics"})}),Object(r.jsx)("li",{className:"nav-link",children:Object(r.jsx)(l.c,{to:"/about",className:"nav-link",activeClassName:"btn btn-primary",children:"About"})}),Object(r.jsx)("li",{className:"nav-link",children:Object(r.jsx)(l.c,{to:"/about-lazy-load",className:"nav-link",activeClassName:"btn btn-primary",children:"Lazy Loading"})}),Object(r.jsx)("li",{className:"nav-link",children:Object(r.jsx)(l.c,{to:"/contact",className:"nav-link",activeClassName:"btn btn-primary",children:"Contact Us"})}),Object(r.jsx)("li",{className:"nav-link",children:Object(r.jsx)(l.c,{to:"/login",className:"nav-link",activeClassName:"btn btn-primary",children:"Login"})}),Object(r.jsx)("li",{className:"nav-link",children:Object(r.jsx)(l.c,{to:"/logout",onClick:function(){return localStorage.clear()},className:"nav-link",activeClassName:"btn btn-primary",children:"Logout"})})]})}function b(e){return Object(r.jsx)("div",{children:Object(r.jsx)("h1",{style:{margin:300},children:"\ud83d\udc90Welcome to React Routing Crash Course\ud83d\udc90"})})}var h=c(3);function d(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Contact Us"}),Object(r.jsx)("h2",{children:"Email: mogilivenkatesh3@gmail.com"}),Object(r.jsx)("h2",{children:"LinkedIn: Venkatesh Mogili"})]})}function u(){var e=Object(h.h)(),t=(Object(h.i)(),Object(h.j)().id,new URLSearchParams(Object(h.i)().search));function c(){return Object(h.k)("/dashboard/blog")?Object(r.jsx)("div",{children:"this is blog"}):null}return console.log(t.get("location")),console.log(t.get("name")),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Welcome to Dashboard"}),Object(r.jsx)(c,{}),Object(r.jsx)("button",{onClick:function(){return e.push("/about")},className:"btn btn-primary",children:"Navigate to About page."})]})}function O(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),i=Object(o.a)(a,2),l=i[0],j=i[1],b=Object(n.useState)(localStorage.getItem("loggedin")),d=Object(o.a)(b,2),u=d[0],O=d[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"mt-5",children:"Login Area"}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),"admin"===c&&"admin"===l?(localStorage.setItem("loggedin",1),O(1)):alert("Wrong username/password")},children:[Object(r.jsx)("input",{type:"text",className:"form-control-lg m-4 border",placeholder:"username",value:c,onChange:function(e){return s(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"password",className:"form-control-lg m-4 border",placeholder:"password",value:l,onChange:function(e){return j(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"}),null!==u&&Object(r.jsx)(h.b,{to:"/dashboard"})]})]})}var m=c(26),x=c(64);function p(e){var t=e.path,c=e.component,s=Object(x.a)(e,["path","component"]),a=Object(n.useState)(localStorage.getItem("loggedin")),i=Object(o.a)(a,2),l=i[0];i[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(h.e,{children:Object(r.jsx)(h.c,Object(m.a)({path:t,component:c},s))}),null===l&&Object(r.jsx)(h.b,{to:"/login"})]})}function f(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(h.k)(),i=Object(h.h)();return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"My Projects"}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i.push("".concat(a.url,"/").concat(c))},className:"d-flex justify-content-center align-items-center",children:[Object(r.jsx)("input",{type:"text",className:"form-control w-50 rounded-0 border-0",value:c,onChange:function(e){return s(e.target.value)}}),Object(r.jsx)("button",{type:"submit",className:"btn btn-secondary rounded-0",children:"Search"})]}),Object(r.jsxs)("nav",{className:"navbar navbar-expand-lg",children:[Object(r.jsx)(h.a,{when:c.length>0,message:"Are you want to leave this page?"}),Object(r.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(r.jsx)("li",{className:"nav-item active",children:Object(r.jsx)(l.b,{to:"".concat(a.url,"/chat-application"),title:"Chat app",className:"nav-link text-primary rounded",children:"Chat App"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{to:"".concat(a.url,"/ecommerce-application"),className:"nav-link text-info rounded",children:"ECommerce App"})})]})]})]})}function v(){var e=Object(h.k)(),t=e.path,c=e.url;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"My Topics"}),Object(r.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"".concat(c,"/rendering"),children:"Rendering with React"})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"".concat(c,"/components"),children:"Components"})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"".concat(c,"/props-v-state"),children:"Props v. State"})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"".concat(c,"/keep-smiling"),children:"Keep Smiling"})})]}),Object(r.jsxs)(h.e,{children:[Object(r.jsx)(h.c,{exact:!0,path:t,children:Object(r.jsx)("h3",{children:"Please select a topic."})}),Object(r.jsx)(h.c,{path:"".concat(t,"/:topicId"),children:Object(r.jsx)(g,{})})]})]})}function g(){var e=Object(h.j)().topicId;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:e}),"keep-smiling"===e&&Object(r.jsxs)("h1",{children:["\ud83d\ude03 ",Object(r.jsx)("br",{}),"Keep Learning"]})]})}function y(){var e=Object(h.j)().id;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"My Projects"}),Object(r.jsx)("nav",{className:"navbar navbar-expand-lg",children:Object(r.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(r.jsx)("li",{className:"nav-item active",children:Object(r.jsxs)(l.b,{to:"/",className:"nav-link text-info rounded",children:["Home /"," "]})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{to:"/projects",className:"nav-link text-info rounded",children:"Projects /"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{to:"/projects/".concat(e),className:"nav-link text-info rounded",children:e})})]})}),Object(r.jsxs)("h1",{children:["Project ID: ",e]})]})}c(38);function N(){var e=Object(n.useState)([{id:1,name:"Venkatesh",website:"github.com"},{id:2,name:"Chinni",website:"github.com"},{id:3,name:"Vivek",website:"github.com"}]),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),i=Object(o.a)(a,2),l=(i[0],i[1],Object(n.useState)("")),j=Object(o.a)(l,2);j[0],j[1];Object(n.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){console.log(e),e.map((function(e){e.website="youtube.com/channel/UC1MgMO9NkzCyz1YeAGp8SnQ"})),s(e)})).catch((function(e){console.log(e)}))}),[]);return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Github Users"}),Object(r.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(r.jsx)("button",{className:"btn btn-primary m-2",onClick:function(){fetch("https://jsonplaceholder.typicode.com/users",{method:"POST",body:JSON.stringify({name:"Venkatesh",website:"github.com"})}).then((function(e){return e.json()})).then((function(e){console.log(e),alert("User added successfully!")})).catch((function(e){console.log(e)}))},children:"Add User"}),Object(r.jsx)("button",{className:"btn btn-primary m-2",onClick:function(){fetch("https://jsonplaceholder.typicode.com/users/10",{method:"PUT",body:JSON.stringify({name:"Venkatesh",website:"github.com"})}).then((function(e){return e.json()})).then((function(e){console.log(e),alert("User updated successfully!")})).catch((function(e){console.log(e)}))},children:"Update User"}),Object(r.jsx)("button",{className:"btn btn-primary m-2",onClick:function(){fetch("https://jsonplaceholder.typicode.com/users/10",{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){console.log(e),alert("User deleted successfully!")})).catch((function(e){console.log(e)}))},children:"Delete User"})]}),Object(r.jsx)("div",{className:"d-flex justify-content-center flex-wrap",children:c.slice(0,4).map((function(e){return Object(r.jsxs)("div",{className:"m-3 p-3",children:[Object(r.jsx)("img",{src:"/logo192.png",alt:"profile"}),Object(r.jsx)("h2",{children:e.name}),Object(r.jsx)("a",{href:"https://".concat(e.website),target:"_blank",className:"link-none item text-info",style:{textDecoration:"none"},children:"Website Link"})]},e.id)}))})]})}var k=c(20),C=c.n(k);function S(){var e=Object(n.useState)([{id:1,name:"Venkatesh",website:"github.com"},{id:2,name:"Chinni",website:"github.com"},{id:3,name:"Vivek",website:"github.com"}]),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),i=Object(o.a)(a,2),l=(i[0],i[1],Object(n.useState)("")),j=Object(o.a)(l,2);j[0],j[1];Object(n.useEffect)((function(){C.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){var t=e.data;console.log(t),t.map((function(e){e.website="youtube.com/channel/UC1MgMO9NkzCyz1YeAGp8SnQ"})),s(t)})).catch((function(e){console.log(e)}))}),[]);return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Youtube Users"}),Object(r.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(r.jsx)("button",{className:"btn btn-primary m-2",onClick:function(){C.a.post("https://jsonplaceholder.typicode.com/users",{data:JSON.stringify({name:"Venkatesh",website:"github.com"})}).then((function(e){var t=e.data;console.log(t),alert("User added successfully!")})).catch((function(e){console.log(e)}))},children:"Add User"}),Object(r.jsx)("button",{className:"btn btn-primary m-2",onClick:function(){C.a.put("https://jsonplaceholder.typicode.com/users/10",{body:JSON.stringify({name:"Venkatesh",website:"github.com"})}).then((function(e){var t=e.data;console.log(t),alert("User updated successfully!")})).catch((function(e){console.log(e)}))},children:"Update User"}),Object(r.jsx)("button",{className:"btn btn-primary m-2",onClick:function(){C.a.delete("https://jsonplaceholder.typicode.com/users/10").then((function(e){var t=e.data;console.log(t),alert("User deleted successfully!")})).catch((function(e){console.log(e)}))},children:"Delete User"})]}),Object(r.jsx)("div",{className:"d-flex justify-content-center flex-wrap",children:c.slice(0,4).map((function(e){return Object(r.jsxs)("div",{className:"m-3 p-3",children:[Object(r.jsx)("img",{src:"/logo192.png",alt:"profile"}),Object(r.jsx)("h2",{children:e.name}),Object(r.jsx)("a",{href:"https://".concat(e.website),target:"_blank",className:"link-none item text-info",style:{textDecoration:"none"},children:"Website Link"})]},e.id)}))})]})}var w=[{path:"/projects/:id",component:function(){return Object(r.jsx)(y,{})}},{path:"/projects",component:function(){return Object(r.jsx)(f,{})}},{path:"/topics",component:function(){return Object(r.jsx)(v,{})}},{path:"/github-users",component:function(){return Object(r.jsx)(N,{})}},{path:"/youtube-users",component:function(){return Object(r.jsx)(S,{})}}];function U(){return Object(r.jsx)(l.a,{children:Object(r.jsxs)("div",{style:{display:"flex"},className:"fixed-left",children:[Object(r.jsx)("div",{style:{padding:"10px",width:"20%",height:"90vh",background:"#f0f0f0"},children:Object(r.jsxs)("ul",{style:{listStyleType:"none",padding:0},children:[Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"/",children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.c,{to:"/projects",activeStyle:{color:"maroon"},children:"Projects"})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.c,{to:"/topics",activeClassName:"text-danger",children:"Topics"})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.c,{to:"/github-users",activeClassName:"text-danger",children:"Github Users"})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.c,{to:"/youtube-users",activeClassName:"text-danger",children:"Youtube Users"})})]})}),Object(r.jsx)("div",{style:{flex:1,padding:"10px"},children:Object(r.jsx)(n.Suspense,{fallback:Object(r.jsx)("h4",{children:"Loading..."}),children:Object(r.jsx)(h.e,{children:w.map((function(e,t){return Object(r.jsx)(h.c,{path:e.path,exact:e.exact,component:e.component},t)}))})})})]})})}var L=c(63),M=c.n(L),A=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:"Loading..."})})},D=function(e){var t=e.name;return Object(r.jsx)("p",{children:t})};function P(e){var t=Object(n.useState)([]),c=Object(o.a)(t,2),s=c[0],a=c[1];return Object(n.useEffect)((function(){fetch("https://covid19.mathdro.id/api/countries").then((function(e){return e.json()})).then((function(e){return a(e.countries)})).catch((function(e){return console.log(e)}))}),[]),Object(r.jsxs)("div",{style:{backgroundColor:"#282c34",overflow:"auto"},children:[Object(r.jsx)("h1",{children:"About"}),Object(r.jsx)("p",{children:"My name is Venkatesh Mogili. I'm a Full Stack Developer."}),Object(r.jsx)("h1",{children:"\ud83d\udc68\u200d\ud83d\udcbb"}),s.map((function(e){return Object(r.jsx)(M.a,{offset:[-50,100],placeholder:Object(r.jsx)(A,{}),children:Object(r.jsx)(D,Object(m.a)({},e),e.name)},e.name)}))]})}var V=Object(n.lazy)((function(){return c.e(3).then(c.bind(null,177))}));var E=function(){var e=Object(n.useState)("Venkatesh"),t=Object(o.a)(e,2);return t[0],t[1],Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(j,{}),Object(r.jsx)(n.Suspense,{fallback:Object(r.jsx)("h1",{children:"Loading..."}),children:Object(r.jsxs)(h.e,{children:[Object(r.jsx)(h.b,{from:"/todoappv1",to:"/todoappv2"}),Object(r.jsx)(h.c,{path:"/about",children:Object(r.jsx)(V,{})}),Object(r.jsx)(h.c,{path:"/about-lazy-load",children:Object(r.jsx)(P,{})}),Object(r.jsx)(h.c,{path:"/contact",children:Object(r.jsx)(d,{})}),Object(r.jsx)(p,{path:"/dashboard",component:u}),Object(r.jsx)(p,{path:"/projects/:id",component:y}),Object(r.jsx)(p,{path:"/projects",component:f}),Object(r.jsx)(p,{path:"/topics",component:v}),Object(r.jsx)(h.c,{path:"/login",children:Object(r.jsx)(O,{})}),Object(r.jsx)(p,{path:"/menu",component:U}),Object(r.jsx)(p,{path:"/github-users",component:N}),Object(r.jsx)(p,{path:"/youtube-users",component:S}),Object(r.jsx)(h.c,{path:"/logout",children:Object(r.jsx)(h.b,{to:"/login"})}),Object(r.jsx)(h.c,{path:"/",exact:!0,children:Object(r.jsx)(b,{})}),Object(r.jsx)(h.c,{path:"*",children:Object(r.jsx)("h1",{children:"404 Not Found!"})})]})})]})};c(175);i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(l.a,{children:Object(r.jsx)(E,{})})}),document.getElementById("root"))},69:function(e,t,c){},70:function(e,t,c){}},[[176,1,2]]]);
//# sourceMappingURL=main.49042d1e.chunk.js.map