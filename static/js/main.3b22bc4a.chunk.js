(this.webpackJsonpmovie_search_app=this.webpackJsonpmovie_search_app||[]).push([[0],{25:function(e,t,c){},58:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(0),n=c(26),i=c.n(n),r=c(8),j=c(2),o=c(13),l=c.n(o),d=c(27),m=c(28),h=c(29),b=c(33),v=c(32),u=c(30),O=c.n(u);c(58);var x=function(e){var t=e.year,c=e.title,a=e.summary,n=e.poster,i=e.genres;return Object(s.jsxs)("div",{className:"movie",children:[Object(s.jsx)(r.b,{to:"/movie/".concat(c),children:Object(s.jsx)("img",{src:n,alt:c,title:c})}),Object(s.jsxs)("div",{className:"movie_data",children:[Object(s.jsx)(r.b,{to:"/movie/".concat(c),children:Object(s.jsx)("h3",{className:"movie_title",children:c})}),Object(s.jsx)("h5",{className:"movie_year",children:t}),Object(s.jsx)("ul",{className:"movie_genres",children:i.map((function(e,t){return Object(s.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(s.jsxs)("span",{className:"movie_summary",children:[a.slice(0,160),"..."]}),Object(s.jsx)(r.b,{to:"/movie/".concat(c),children:Object(s.jsx)("span",{className:"open_view",children:"[\ub354 \ubcf4\uae30]"})})]})]})};c(25);var p=function(){return Object(s.jsxs)("div",{className:"nav_wrap",children:[Object(s.jsx)("div",{className:"home",children:Object(s.jsx)(r.b,{to:"/",children:"HOME"})}),Object(s.jsx)("div",{className:"search",children:Object(s.jsx)(r.b,{to:"/#",children:"SEARCH"})})]})},_=(c(64),function(){return Object(s.jsx)("div",{children:"hello"})}),f=(c(65),function(e){Object(b.a)(c,e);var t=Object(v.a)(c);function c(){var e;Object(m.a)(this,c);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(l.a.mark((function t(){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");case 2:c=t.sent,e.setState({movies:c.data.data.movies,isLoading:!1});case 4:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(c,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,c=e.movies;return Object(s.jsx)("div",{className:"container",children:t?Object(s.jsx)("div",{className:"loader",children:Object(s.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(s.jsxs)("div",{children:[Object(s.jsx)("nav",{children:Object(s.jsx)(p,{})}),Object(s.jsxs)("div",{className:"search_input_wrap",children:[Object(s.jsx)("span",{children:"\uc601\ud654 \uac80\uc0c9 : "}),Object(s.jsx)("input",{className:"search_input"}),Object(s.jsx)("button",{className:"search_button",autoFocus:!0,children:"Search"})]}),Object(s.jsx)("div",{className:"movies",children:c.map((function(e){return Object(s.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))}),Object(s.jsx)(j.a,{path:"/movie",children:Object(s.jsx)(_,{})})]})})}}]),c}(a.Component));var N=function(){return Object(s.jsx)("div",{children:Object(s.jsxs)(j.c,{children:[Object(s.jsx)(j.a,{exact:!0,path:"/movie_search_app",children:Object(s.jsx)(f,{})}),Object(s.jsx)(j.a,{path:"/movie",children:Object(s.jsx)(_,{})})]})})};i.a.render(Object(s.jsx)(r.a,{children:Object(s.jsx)(N,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.3b22bc4a.chunk.js.map