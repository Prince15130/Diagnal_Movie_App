(this.webpackJsonpdiagnal_app_tailwind=this.webpackJsonpdiagnal_app_tailwind||[]).push([[0],{17:function(e,t,r){},70:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r(1),a=r.n(c),o=r(12),i=r.n(o),s=(r(17),r(14)),u=r(10),h=(r(50),r(38)),j=r(5),d="pokemon-frontend/filters/INCREMENT",p={count:20},x=r(6),b=r.n(x),l=r(15),O=r(8),y=r(22),f=r(23),g=r.n(f);function m(){return v.apply(this,arguments)}function v(){return(v=Object(y.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("/API/CONTENTLISTINGPAGE-PAGE1.json");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return k.apply(this,arguments)}function k(){return(k=Object(y.a)(b.a.mark((function e(t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t<4)){e.next=5;break}return e.next=3,g.a.get("/API/CONTENTLISTINGPAGE-PAGE".concat(t,".json"));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=b.a.mark(J),E=b.a.mark(Y),C=b.a.mark(q),N="pokemon-frontend/pokemon/FETCH_POKEMON_LIST",_="pokemon-frontend/pokemon/FETCH_POKEMON_LIST_SUCCESS",A="pokemon-frontend/pokemon/FETCH_POKEMON_LIST_FAILURE",S="pokemon-frontend/pokemon/DISPLAY_MORE_BEGIN",I="pokemon-frontend/pokemon/DISPLAY_MORE_END",M="pokemon-frontend/pokemon/LOAD_MORE_POKEMON_SUCCEED",P="pokemon-frontend/pokemon/LOAD_MORE_POKEMON_FAILED",T="pokemon-frontend/pokemon/LOAD_MORE_POKEMON",R="pokemon-frontend/pokemon/SEARCH_POKEMON",F={pokemonList:[],isLoading:!1,error:""};function D(e){return{type:N,payload:e}}function G(e){return{type:_,payload:e}}function K(e){return{type:M,payload:e}}function H(e){return{type:P,payload:e}}function B(e){return{type:T,payload:e}}function U(e){return{type:R,payload:e}}function J(){var e;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(O.b)(m,0);case 3:return e=t.sent,t.next=6,Object(O.d)(G(e));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(O.d)((r=t.t0.message,{type:A,payload:r}));case 12:case"end":return t.stop()}var r}),L,null,[[0,8]])}function Y(e){var t,r;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(O.b)(w,t+1);case 4:return r=n.sent,n.next=7,Object(O.c)(1e3);case 7:return n.next=9,Object(O.d)(K(r));case 9:n.next=15;break;case 11:return n.prev=11,n.t0=n.catch(1),n.next=15,Object(O.d)(H(n.t0.message));case 15:case"end":return n.stop()}}),E,null,[[1,11]])}function q(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.f)(N,J);case 2:return e.next=4,Object(O.e)(T,Y);case 4:case"end":return e.stop()}}),C)}var z=Object(u.c)({filterReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(j.a)(Object(j.a)({},e),{},{count:e.count+20});default:return e}},movieListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case N:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!0});case _:var r=t.payload.page.items.content,n=r.map((function(e){var t=e.name;return Object(j.a)({id:t},e)}));return Object(j.a)(Object(j.a)({},e),{},{pokemonList:n,isLoading:!1});case A:return Object(j.a)(Object(j.a)({},e),{},{error:t.payload,isLoading:!1});case S:case I:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1});case T:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!0});case M:var c=t.payload.page.items.content.map((function(e){var t=e.name;return Object(j.a)({id:t},e)})),a=e.pokemonList;return Object(j.a)(Object(j.a)({},e),{},{pokemonList:[].concat(Object(l.a)(a),Object(l.a)(c)),isLoading:!1});case P:return Object(j.a)(Object(j.a)({},e),{},{error:t.payload,isLoading:!1});case R:e.pokemonListfilter;var o=Object(l.a)(e.pokemonList);console.log(t.payload);var i=o.filter((function(e){return e.name.toLowerCase().includes(t.payload.toLowerCase())}));return Object(j.a)(Object(j.a)({},e),{},{pokemonList:i,isLoading:!1});default:return e}}}),Q=b.a.mark(V);function V(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)([q()]);case 2:case"end":return e.stop()}}),Q)}var W=r(34),X=r(35),Z=r(39),$=r(37),ee=r(24),te=r.n(ee),re=r(36),ne=function(){return Object(n.jsxs)(re.a,{height:507,width:900,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb",children:[Object(n.jsx)("rect",{x:"30",y:"20",rx:"0",ry:"0",width:"130",height:"23"}),Object(n.jsx)("rect",{x:"30",y:"60",rx:"0",ry:"0",width:"200",height:"120"}),Object(n.jsx)("rect",{x:"30",y:"189",rx:"0",ry:"0",width:"200",height:"15"}),Object(n.jsx)("rect",{x:"30",y:"211",rx:"0",ry:"0",width:"140",height:"15"}),Object(n.jsx)("rect",{x:"243",y:"60",rx:"0",ry:"0",width:"200",height:"120"}),Object(n.jsx)("rect",{x:"243",y:"189",rx:"0",ry:"0",width:"200",height:"15"}),Object(n.jsx)("rect",{x:"243",y:"211",rx:"0",ry:"0",width:"140",height:"15"}),Object(n.jsx)("rect",{x:"455",y:"60",rx:"0",ry:"0",width:"200",height:"120"}),Object(n.jsx)("rect",{x:"455",y:"189",rx:"0",ry:"0",width:"200",height:"15"}),Object(n.jsx)("rect",{x:"455",y:"211",rx:"0",ry:"0",width:"140",height:"15"}),Object(n.jsx)("rect",{x:"667",y:"60",rx:"0",ry:"0",width:"200",height:"120"}),Object(n.jsx)("rect",{x:"667",y:"188",rx:"0",ry:"0",width:"200",height:"15"}),Object(n.jsx)("rect",{x:"667",y:"209",rx:"0",ry:"0",width:"140",height:"15"}),Object(n.jsx)("rect",{x:"30",y:"280",rx:"0",ry:"0",width:"130",height:"23"}),Object(n.jsx)("rect",{x:"30",y:"320",rx:"0",ry:"0",width:"200",height:"120"}),Object(n.jsx)("rect",{x:"30",y:"450",rx:"0",ry:"0",width:"200",height:"15"}),Object(n.jsx)("rect",{x:"30",y:"474",rx:"0",ry:"0",width:"140",height:"15"}),Object(n.jsx)("rect",{x:"243",y:"320",rx:"0",ry:"0",width:"200",height:"120"}),Object(n.jsx)("rect",{x:"455",y:"320",rx:"0",ry:"0",width:"200",height:"120"}),Object(n.jsx)("rect",{x:"667",y:"320",rx:"0",ry:"0",width:"200",height:"120"}),Object(n.jsx)("rect",{x:"243",y:"450",rx:"0",ry:"0",width:"200",height:"15"}),Object(n.jsx)("rect",{x:"455",y:"450",rx:"0",ry:"0",width:"200",height:"15"}),Object(n.jsx)("rect",{x:"667",y:"450",rx:"0",ry:"0",width:"200",height:"15"}),Object(n.jsx)("rect",{x:"243",y:"474",rx:"0",ry:"0",width:"140",height:"15"}),Object(n.jsx)("rect",{x:"455",y:"474",rx:"0",ry:"0",width:"140",height:"15"}),Object(n.jsx)("rect",{x:"667",y:"474",rx:"0",ry:"0",width:"140",height:"15"})]})},ce=function(e){var t=e.id,r=e.name;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("img",{src:"/Slices/".concat(r),alt:t}),Object(n.jsx)("p",{className:"text-center text-white",children:t})]})},ae=function(e){Object(Z.a)(r,e);var t=Object($.a)(r);function r(e){var n;return Object(W.a)(this,r),(n=t.call(this,e)).handleScroll=function(e){console.log("scroll"+e.target);var t=n.props.loadMoreActionCreator,r=n.state.currentCount,c=e.target;c.scrollHeight-c.scrollTop===c.clientHeight&&r<3&&(t(r),n.setState({currentCount:r+1}))},n.search=function(e){var t=n.props.searchActionCreator;0!==e.target.value.length?t(e.target.value):n.props.fetchActionCreator()},n.state={currentCount:1},n}return Object(X.a)(r,[{key:"componentDidMount",value:function(){(0,this.props.fetchActionCreator)()}},{key:"render",value:function(){var e=this.props,t=e.isLoading,r=e.error,c=e.pokemonList;return te.a.isEmpty(c)&&t?Object(n.jsx)(ne,{}):r?Object(n.jsx)("p",{children:"Error"}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"bg-black flex justify-between p-1",children:[Object(n.jsx)("input",{type:"text",className:"focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2",onChange:this.search}),Object(n.jsx)("img",{src:"/Slices/search.png",style:{height:"2rem",width:"2rem"},className:"m-1"})]}),Object(n.jsxs)("div",{className:"grid grid-cols-3 gap-4 justify-items-center justify-center bg-black p-1",onScroll:this.handleScroll,style:{height:"50rem",overflow:"auto"},children:[te.a.isEmpty(c)&&Object(n.jsx)("p",{children:"No results for this search"}),c.map((function(e){var t=e.id,r=e.posterimage;return Object(n.jsx)("div",{className:"justify-items-center justify-center",children:Object(n.jsx)(ce,{id:t,name:r})},e.url)}))]})]})}}]),r}(c.Component),oe=Object(s.b)((function(e){return{isLoading:e.movieListReducer.isLoading,error:e.movieListReducer.error,pokemonList:e.movieListReducer.pokemonList}}),(function(e){return Object(u.b)({fetchActionCreator:D,loadMoreActionCreator:B,searchActionCreator:U},e)}))(ae),ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[],r=Object(h.a)();t.push(r);var n=Object(u.e)(z,e,u.a.apply(void 0,t));return r.run(V),n}();var se=function(){return Object(n.jsx)(s.a,{store:ie,children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)(oe,{})})})},ue=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,71)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;r(e),n(e),c(e),a(e),o(e)}))};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(se,{})}),document.getElementById("root")),ue()}},[[70,1,2]]]);
//# sourceMappingURL=main.57e1cbc4.chunk.js.map