(this.webpackJsonphero_admin_panel=this.webpackJsonphero_admin_panel||[]).push([[0],{50:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(10),s=n.n(c),i=n(4),l=n(22),o=n(39),d=n(8),u=n(58),b=n(60),m=n(34),j=n(6),h=Object(m.a)({reducerPath:"api",baseQuery:Object(j.d)({baseUrl:"http://localhost:3001"}),tagTypes:["Heroes"],endpoints:function(e){return{getHeroes:e.query({query:function(){return"/heroes"},providesTags:["Heroes"]}),createHero:e.mutation({query:function(e){return{url:"/heroes",method:"POST",body:e}},invalidatesTags:["Heroes"]}),deleteHero:e.mutation({query:function(e){return{url:"/heroes/".concat(e),method:"DELETE",body:e}},invalidatesTags:["Heroes"]})}}}),f=h.useGetHeroesQuery,p=h.useCreateHeroMutation,g=h.useDeleteHeroMutation,O=n(1),x=function(e){var t,n=e.name,r=e.description,a=e.element,c=e.onDelete;switch(a){case"fire":t="bg-danger bg-gradient";break;case"water":t="bg-primary bg-gradient";break;case"wind":t="bg-success bg-gradient";break;case"earth":t="bg-secondary bg-gradient";break;default:t="bg-warning bg-gradient"}return Object(O.jsxs)("li",{className:"card flex-row mb-4 shadow-lg text-white ".concat(t),children:[Object(O.jsx)("img",{src:"http://www.stpaulsteinbach.org/wp-content/uploads/2014/09/unknown-hero.jpg",className:"img-fluid w-25 d-inline",alt:"unknown hero",style:{objectFit:"cover"}}),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("h3",{className:"card-title",children:n}),Object(O.jsx)("p",{className:"card-text",children:r})]}),Object(O.jsx)("span",{onClick:c,className:"position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light",children:Object(O.jsx)("button",{type:"button",className:"btn-close btn-close","aria-label":"Close"})})]})},v=function(){return Object(O.jsx)("div",{className:"spinner-border mx-auto mt-5",role:"status",children:Object(O.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},N=(n(50),function(){var e=f(),t=e.data,n=void 0===t?[]:t,a=e.isLoading,c=e.isError,s=g(),m=Object(d.a)(s,1)[0],j=Object(i.e)((function(e){return e.filters.activeFilter})),h=Object(r.useMemo)((function(){var e=n.slice();return"all"===j?e:e.filter((function(e){return e.element===j}))}),[n,j]),p=Object(r.useCallback)((function(e){m(e)}),[]);if(a)return Object(O.jsx)(v,{});if(c)return Object(O.jsx)("h5",{className:"text-center mt-5",children:"Error loading"});var N,y=0===(N=h).length?Object(O.jsx)(u.a,{timeout:0,classNames:"hero",children:Object(O.jsx)("h5",{className:"text-center mt-5",children:"There is no heroes here..."})}):N.map((function(e){var t=e.id,n=Object(o.a)(e,["id"]);return Object(O.jsx)(u.a,{timeout:300,classNames:"hero",children:Object(O.jsx)(x,Object(l.a)(Object(l.a)({},n),{},{onDelete:function(){return p(t)}}))},t)}));return Object(O.jsx)(b.a,{component:"ul",children:y})}),y=n(13),w=n(24),F=n(59),S=n(15),k=n(2),C=n(21),q=n.n(C),E=n(29),L=function(){return{request:function(){var e=Object(E.a)(q.a.mark((function e(t){var n,r,a,c,s,i=arguments;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"GET",r=i.length>2&&void 0!==i[2]?i[2]:null,a=i.length>3&&void 0!==i[3]?i[3]:{"Content-Type":"application/json"},e.prev=3,e.next=6,fetch(t,{method:n,body:r,headers:a});case 6:if((c=e.sent).ok){e.next=9;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(c.status));case 9:return e.next=11,c.json();case 11:return s=e.sent,e.abrupt("return",s);case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}()}},T=Object(k.d)(),H=T.getInitialState({filtersLoadingStatus:"idle",activeFilter:"all"}),D=Object(k.c)("filters/fetchFilters",Object(E.a)(q.a.mark((function e(){var t,n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=L(),n=t.request,e.next=3,n("".concat("https://raw.githubusercontent.com/Khandohii/hero-admin-panel/blob/main/heroes.json","/filters"));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))),M=Object(k.e)({name:"filters",initialState:H,reducers:{filtersFetching:function(e){e.filtersLoadingStatus="loading"},filtersFetched:function(e,t){e.filtersLoadingStatus="idle",T.setAll(e,t.payload)},filtersFetchingError:function(e){e.filtersLoadingStatus="error"},activeFilterChanged:function(e,t){e.activeFilter=t.payload}},extraReducers:function(e){e.addCase(D.pending,(function(e){e.filtersLoadingStatus="loading"})).addCase(D.fulfilled,(function(e,t){e.filtersLoadingStatus="idle",T.setAll(e,t.payload)})).addCase(D.rejected,(function(e){e.filtersLoadingStatus="error"})).addDefaultCase((function(){}))}}),_=M.actions,I=M.reducer,A=T.getSelectors((function(e){return e.filters})).selectAll,P=(_.filtersFetching,_.filtersFetched,_.filtersFetchingError,_.activeFilterChanged),G=function(){return function(e){return function(t){return e("string"===typeof t?{type:t}:t)}}},J=Object(k.a)({reducer:Object(S.a)({filters:I},h.reducerPath,h.reducer),middleware:function(e){return e().concat(G,h.middleware)},devTools:!1}),Q=function(){var e=p(),t=Object(d.a)(e,1)[0],n=Object(i.e)((function(e){return e.filters})).filtersLoadingStatus,r=A(J.getState());return Object(O.jsx)(y.d,{initialValues:{name:"",description:"",element:""},validationSchema:w.a({name:w.b().min(2,"Minumum length - 2 symbols!").required("Required field"),description:w.b().min(5,"Mininum 5 symbols"),element:w.b().required("Choose a skill")}),onSubmit:function(e,n){var r=n.resetForm,a=Object(F.a)();!function(e,n){t(e).unwrap(),n()}(Object(l.a)({id:a},e),r)},children:Object(O.jsxs)(y.c,{className:"border p-4 shadow-lg rounded",children:[Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{htmlFor:"name",className:"form-label fs-4",children:"Name of a new hero"}),Object(O.jsx)(y.b,{id:"name",name:"name",className:"form-control",required:!0,type:"text",placeholder:"What is my name?"}),Object(O.jsx)(y.a,{className:"text-danger mt-1",name:"name",component:"div"})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{htmlFor:"description",className:"form-label fs-4",children:"Description"}),Object(O.jsx)(y.b,{required:!0,name:"description",className:"form-control",id:"description",placeholder:"What can I do?",style:{height:"130px"},as:"textarea"}),Object(O.jsx)(y.a,{className:"text-danger mt-1",name:"description",component:"div"})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{htmlFor:"element",className:"form-label",children:"Choose hero element"}),Object(O.jsxs)(y.b,{required:!0,className:"form-select",id:"element",name:"element",as:"select",children:[Object(O.jsx)("option",{value:"",children:"I own the element..."}),function(e,t){return"loading"===t?Object(O.jsx)("option",{children:"Loading elements"}):"error"===t?Object(O.jsx)("option",{children:"Error loading"}):e&&e.length>0?e.map((function(e){var t=e.name,n=e.label;if("all"!==t)return Object(O.jsx)("option",{value:t,children:n},t)})):void 0}(r,n)]}),Object(O.jsx)(y.a,{className:"text-danger mt-1",name:"element",component:"div"})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Create"})]})})},R=n(38),W=n.n(R),B=function(){var e=Object(i.e)((function(e){return e.filters})),t=e.filtersLoadingStatus,n=e.activeFilter,a=A(J.getState()),c=Object(i.d)(),s=L().request;if(Object(r.useEffect)((function(){c(D(s))}),[]),"loading"===t)return Object(O.jsx)(v,{});if("error"===t)return Object(O.jsx)("h5",{className:"text-center mt-5",children:"Error loading"});var l,o=0===(l=a).length?Object(O.jsx)("h5",{className:"text-center mt-5",children:"There aren't filters yet..."}):l.map((function(e){var t=e.name,r=e.className,a=e.label,s=W()("btn",r,{active:t===n});return Object(O.jsx)("button",{id:t,className:s,onClick:function(){return c(P(t))},children:a},t)}));return Object(O.jsx)("div",{className:"card shadow-lg mt-4",children:Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("p",{className:"card-text",children:"Filter heroes by element"}),Object(O.jsx)("div",{className:"btn-group",children:o})]})})},K=(n(53),function(){return Object(O.jsx)("main",{className:"app",children:Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)(N,{}),Object(O.jsxs)("div",{className:"content__interactive",children:[Object(O.jsx)(Q,{}),Object(O.jsx)(B,{})]})]})})});n(54);s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(i.a,{store:J,children:Object(O.jsx)(K,{})})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.ddf181ea.chunk.js.map