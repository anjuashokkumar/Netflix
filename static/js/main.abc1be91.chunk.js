(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{26:function(t,e,c){},27:function(t,e,c){},46:function(t,e,c){},60:function(t,e,c){},61:function(t,e,c){},62:function(t,e,c){"use strict";c.r(e);var a=c(1),n=c.n(a),s=c(17),i=c.n(s),o=(c(26),c(27),c(0));var l=function(){return Object(o.jsxs)("div",{className:"navbar",children:[Object(o.jsx)("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",alt:"Netflix Logo"}),Object(o.jsx)("img",{className:"avatar",src:"https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png",alt:"Avatar"})]})},r=c(4),d="f90a6dd1a5f6bde9a134e12d8c1d4bd5",j="https://image.tmdb.org/t/p/original",u=c(18),b=c.n(u).a.create({baseURL:"https://api.themoviedb.org/3"});c(46);var m=function(){var t=Object(a.useState)(),e=Object(r.a)(t,2),c=e[0],n=e[1];return Object(a.useEffect)((function(){b.get("trending/all/week?api_key=".concat(d,"&language=en-US")).then((function(t){console.log(t.data.results[0]),n(t.data.results[0])}))}),[]),Object(o.jsxs)("div",{style:{backgroundImage:"url(".concat(c?j+c.backdrop_path:"",")")},className:"banner",children:[Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("h1",{className:"title",children:c?c.name:""}),Object(o.jsxs)("div",{className:"banner_buttons",children:[Object(o.jsx)("button",{className:"button",children:"Play"}),Object(o.jsx)("button",{className:"button",children:"My List"})]}),Object(o.jsx)("h1",{className:"description",children:c?c.overview:""})]}),Object(o.jsx)("div",{className:"fade_bottom"})]})},g=c(19);c(60);var h=function(t){var e=Object(a.useState)([]),c=Object(r.a)(e,2),n=c[0],s=c[1],i=Object(a.useState)(""),l=Object(r.a)(i,2),u=l[0],m=l[1];return Object(a.useEffect)((function(){b.get(t.url).then((function(t){console.log(t.data),s(t.data.results)})).catch((function(t){alert("Network Error")}))}),[]),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("h2",{className:"poster_title",children:t.title}),Object(o.jsx)("div",{className:"posters",children:n.map((function(e){return Object(o.jsx)("img",{onClick:function(){return t=e.id,console.log(t),void b.get("movie/".concat(t,"/videos?api_key=").concat(d,"&language=en-US")).then((function(t){console.log(t.status),0!==t.data.results.length?m(t.data.results[0]):console.log("Array Empty")})).catch((function(t){console.log("Empty")}));var t},className:t.isSmall?"smallposter":"poster",src:"".concat(j+e.backdrop_path),alt:"poster"})}))}),u&&Object(o.jsx)(g.a,{videoId:u.key,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})},p=(c(61),"discover/tv?api_key=".concat(d,"&with_networks=213")),v="trending/all/day?api_key=".concat(d),O="discover/movie?api_key=".concat(d,"&with_genres=35"),f="discover/movie?api_key=".concat(d,"&with_genres=28"),x="discover/movie?api_key=".concat(d,"&with_genres=27"),_="discover/movie?api_key=".concat(d,"&with_genres=10749");var N=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{}),Object(o.jsx)(m,{}),Object(o.jsx)(h,{url:p,title:"Netflix Originals"}),Object(o.jsx)(h,{url:v,title:"Trending",isSmall:!0}),Object(o.jsx)(h,{url:O,title:"Comedy",isSmall:!0}),Object(o.jsx)(h,{url:f,title:"Action",isSmall:!0}),Object(o.jsx)(h,{url:x,title:"Horror",isSmall:!0}),Object(o.jsx)(h,{url:_,title:"Romance",isSmall:!0})]})},k=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(e){var c=e.getCLS,a=e.getFID,n=e.getFCP,s=e.getLCP,i=e.getTTFB;c(t),a(t),n(t),s(t),i(t)}))};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root")),k()}},[[62,1,2]]]);
//# sourceMappingURL=main.abc1be91.chunk.js.map