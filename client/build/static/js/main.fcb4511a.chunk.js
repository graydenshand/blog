(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{199:function(e,t,a){},200:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),l=a(44),o=a.n(l),r=a(2),c=a(3),i=a(5),u=a(4),d=a(1),p=a(6),h=a(74),m=a(8),f=(a(48),function(e){if(0!=e.display_nav)return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-6 offset-sm-3"},n.a.createElement("ul",{className:"d-flex flex-row justify-content-around"},n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"subscribe")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"archive")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"get in touch")))))}),v=function(e){return n.a.createElement("div",{className:"container",id:"navbar"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-6 offset-sm-3"},n.a.createElement("p",null,n.a.createElement("a",{href:"/"},"Grayden's Blog")))),0==e.display_nav?"":n.a.createElement(f,null))},b=a(15),g=a.n(b),E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={data:""},a.timeout="test",a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.timeout=setTimeout((function(){alert("Error: request timeout")}),5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"loader offset-5"})))}}]),t}(s.Component),w=(a(49),function(e){function t(e){return Object(r.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"media post"},n.a.createElement("div",{className:"media-body"},n.a.createElement("h1",{className:"mt-0 post-title"},n.a.createElement("a",{href:"/p/".concat(this.props.post?this.props.post.post_id:"")},this.props.post?this.props.post.post_title:"")),n.a.createElement(g.a,{fromNow:!0},this.props.post?this.props.post.post_created_at:""),n.a.createElement("div",{dangerouslySetInnerHTML:this.props.post?{__html:this.props.post.post_body}:{__html:""},className:"post-body"}))),n.a.createElement("br",null))}}]),t}(s.Component)),y=Object(m.f)(w),k=a(18),O=a.n(k),j=function(){function e(){Object(r.a)(this,e)}return Object(c.a)(e,[{key:"get_token",value:function(){return O.a.get("authToken")}},{key:"get_user",value:function(){return O.a.getJSON("user")}},{key:"login_required",value:function(e,t){var a=new XMLHttpRequest;a.open("POST","http://127.0.0.1:5000/v1/validate_token");var s="token=".concat(e);a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.send(s),a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE&&200===a.status){var e=JSON.parse(a.responseText).result;t&&t(e)}}}}]),e}(),N=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={posts:[]},a.loadPosts=a.loadPosts.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"loadPosts",value:function(){var e=this,t=new XMLHttpRequest,a=new j;t.open("GET","http://127.0.0.1:5000/v1/p/?publishedOnly=True"),t.setRequestHeader("X-Auth-Token",a.get_token()),t.send(),t.onreadystatechange=function(){if(t.readyState===XMLHttpRequest.DONE&&200===t.status){var a=JSON.parse(t.responseText).result;e.setState({posts:a})}}}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(v,null),n.a.createElement("br",null),n.a.createElement("div",{className:"col-xs-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3"},n.a.createElement("div",null,this.props.posts.map((function(t,a){return n.a.createElement("div",null,n.a.createElement(y,{posts:e.props.posts,post:t,key:t.post_id}))})))))}}]),t}(s.Component),x=a(45),S=a.n(x),C=(a(69),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSelect=a.handleSelect.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleSelect",value:function(e,t){return e.preventDefault(),this.props.select(t)}},{key:"render",value:function(){var e=this;return 1==this.props.post.post_published?n.a.createElement("a",{className:"draft-card-link",href:"",onClick:function(t){return e.handleSelect(t,e.props.post.post_id)}},n.a.createElement("div",{className:this.props.selected?"draft-card draft-card-selected":"draft-card draft-card-published"},n.a.createElement("b",null,this.props.post.post_title),n.a.createElement("p",{className:"text-muted",style:{marginBottom:0}},n.a.createElement(g.a,{date:this.props.post.post_created_at,fromNow:!0})))):n.a.createElement("a",{className:"draft-card-link",href:"",onClick:function(t){return e.handleSelect(t,e.props.post.post_id)}},n.a.createElement("div",{className:this.props.selected?"draft-card draft-card-selected":"draft-card"},n.a.createElement("b",null,this.props.post.post_title),n.a.createElement("p",{className:"text-muted",style:{marginBottom:0}},n.a.createElement(g.a,{date:this.props.post.post_created_at,fromNow:!0}))))}}]),t}(s.Component)),_=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleChangeSelected=a.handleChangeSelected.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleChangeSelected",value:function(e){return this.props.select(e)}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return this.props.posts.map((function(t,a){return n.a.createElement(C,{post:t,key:t.post_id,selected:e.props.selected==t.post_id,select:e.handleChangeSelected})}))}}]),t}(s.Component);a(35),a(70);var P=function(e){var t={width:e.width,height:e.width,backgroundColor:e.backgroundColor?e.backgroundColor:null,color:e.color?e.color:"#000",cursor:"pointer"};return n.a.createElement("span",{className:"save-control control",title:"Save"},n.a.createElement("svg",{onClick:e.save,style:t,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"save",className:"svg-inline--fa fa-save fa-w-14 control-icon",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},n.a.createElement("path",{fill:"currentColor",d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"})))};var T=function(e){var t={width:e.width,height:e.width,backgroundColor:e.backgroundColor?e.backgroundColor:null,color:e.color?e.color:"#000",cursor:"pointer"};return n.a.createElement("span",{className:"delete-control control",title:"Delete"},n.a.createElement("svg",{onClick:e.deletePost,style:t,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"trash-alt",className:"svg-inline--fa fa-trash-alt fa-w-14 control-icon",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},n.a.createElement("path",{fill:"currentColor",d:"M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"})))};var H=function(e){var t={width:e.width,height:e.width,cursor:"pointer"};return e.published?(t.backgroundColor="#000",t.color="#FFF",n.a.createElement("span",{className:"unpublish-control control",title:"Make Private"},n.a.createElement("svg",{onClick:e.unPublish,style:t,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"rss",className:"svg-inline--fa fa-rss fa-w-14 control-icon",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},n.a.createElement("path",{fill:"currentColor",d:"M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z"})))):n.a.createElement("span",{className:"publish-control control",title:"Make Public"},n.a.createElement("svg",{onClick:e.publish,style:t,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"rss",className:"svg-inline--fa fa-rss fa-w-14 control-icon",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},n.a.createElement("path",{fill:"currentColor",d:"M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z"})))};var M=function(e){var t={width:e.width,height:e.width,backgroundColor:e.backgroundColor?e.backgroundColor:null,color:e.color?e.color:"#000",cursor:"pointer"};return n.a.createElement("span",{className:"new-control control",title:"New"},n.a.createElement("svg",{onClick:e.newPost,style:t,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"plus",class:"svg-inline--fa fa-plus fa-w-14 control-icon",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},n.a.createElement("path",{fill:"currentColor",d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"})))},q=function(e){function t(e){return Object(r.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return null==this.props.new?n.a.createElement("div",{className:"editor-controls"},n.a.createElement(M,{newPost:this.props.newPost,width:"50px"})):n.a.createElement("div",{className:"editor-controls"},n.a.createElement(M,{newPost:this.props.newPost,width:"50px"}),n.a.createElement(P,{width:"50px",save:this.props.save}),n.a.createElement(H,{width:"50px",publish:this.props.publish,unPublish:this.props.unPublish,published:this.props.published}),n.a.createElement(T,{deletePost:this.props.deletePost,width:"50px"}))}}]),t}(s.Component),R=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={text:"",ready:!1,title:"",posts:null,selected:null,selectedIndex:null,new:null,published:null},a.handleBodyChange=a.handleBodyChange.bind(Object(d.a)(a)),a.save=a.save.bind(Object(d.a)(a)),a.publish=a.publish.bind(Object(d.a)(a)),a.unPublish=a.unPublish.bind(Object(d.a)(a)),a.modules={toolbar:[[{header:[1,2,!1]}],["bold","italic","underline","strike","blockquote","code-block"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"]]},a.formats=["header","bold","italic","underline","strike","blockquote","code-block","list","bullet","indent","link","image"],a.login_redirect=a.login_redirect.bind(Object(d.a)(a)),a.loadPosts=a.loadPosts.bind(Object(d.a)(a)),a.handleChangeSelected=a.handleChangeSelected.bind(Object(d.a)(a)),a.handleTitleChange=a.handleTitleChange.bind(Object(d.a)(a)),a.deletePost=a.deletePost.bind(Object(d.a)(a)),a.newPost=a.newPost.bind(Object(d.a)(a)),a.updatePost=a.updatePost.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleBodyChange",value:function(e){var t=this;Array.from(e.matchAll(/<img src="(data:image\/.+?;base64,(.*?))">/g)).forEach((function(a,s){t.state.new&&t.createPost();var n=a[2],l=a[1],o=new XMLHttpRequest,r=new j;o.open("POST","http://127.0.0.1:5000/v1/i/"),o.setRequestHeader("X-Auth-Token",r.get_token()),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.responseType="json";var c="post_id=".concat(t.state.selected,"&payload=").concat(n);o.send(c),console.log("send"),o.onreadystatechange=function(){if(o.readyState===XMLHttpRequest.DONE&&200===o.status&&null!=o.response){var a=o.response.result;e=e.replace(l,a),t.setState({text:e})}}})),this.setState({text:e})}},{key:"uploadImage",value:function(e){}},{key:"handleTitleChange",value:function(e){this.setState({title:e.target.value})}},{key:"handleChangeSelected",value:function(e){var t=0,a=null;for(t=0;t<this.state.posts.length;t++)this.state.posts[t].post_id==e&&(a=t,this.setState({selected:e,selectedIndex:t,new:!1}));this.setState({text:this.state.posts[a].post_body,title:this.state.posts[a].post_title,published:this.state.posts[a].post_published})}},{key:"deletePost",value:function(){var e=this,t=new XMLHttpRequest,a=new j;t.open("DELETE","http://127.0.0.1:5000/v1/p/".concat(this.state.selected)),t.setRequestHeader("X-Auth-Token",a.get_token()),t.send();var s=this.state.selected,n=this.state.posts;t.onreadystatechange=function(){t.readyState===XMLHttpRequest.DONE&&200===t.status&&(n=n.filter((function(e){return e.post_id!=s})),e.setState({posts:n,text:"",title:"",new:null}))}}},{key:"createPost",value:function(){var e=this,t=new XMLHttpRequest,a=new j;if(t.open("POST","http://127.0.0.1:5000/v1/p/"),t.setRequestHeader("X-Auth-Token",a.get_token()),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),""==this.state.title)var s="Untitled";else s=this.state.title;var n="post_body=".concat(this.state.text,"&post_title=").concat(s);t.send(n);var l=this.state.posts;t.onreadystatechange=function(){if(t.readyState===XMLHttpRequest.DONE&&200===t.status){var a=JSON.parse(t.responseText).result;l.unshift(a),e.setState({posts:l,selected:a.post_id,selectedIndex:0,new:!1})}}}},{key:"updatePost",value:function(){var e=this,t=new XMLHttpRequest,a=new j;if(t.open("PUT","http://127.0.0.1:5000/v1/p/".concat(this.state.selected)),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),t.setRequestHeader("X-Auth-Token",a.get_token()),""==this.state.title)var s="Untitled";else s=this.state.title;var n="post_body=".concat(this.state.text,"&post_title=").concat(s);t.send(n);var l=this.state.posts;t.onreadystatechange=function(){if(t.readyState===XMLHttpRequest.DONE&&200===t.status){var a=JSON.parse(t.responseText).result;l.splice(e.state.selectedIndex,1,a),e.setState({posts:l})}}}},{key:"save",value:function(){this.state.new?this.createPost():this.updatePost(),this.props.flashMessage("Post saved")}},{key:"publish",value:function(e){var t=this;this.save();var a=new XMLHttpRequest,s=new j;a.open("PUT","http://127.0.0.1:5000/v1/p/".concat(this.state.selected)),a.setRequestHeader("X-Auth-Token",s.get_token()),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded");a.send("post_published=true");var n=this.state.posts;a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE&&200===a.status){var e=JSON.parse(a.responseText).result;n.splice(t.state.selectedIndex,1,e),t.setState({posts:n,published:!0})}},console.log(this.state.title,this.state.text)}},{key:"unPublish",value:function(e){var t=this,a=new XMLHttpRequest,s=new j;a.open("PUT","http://127.0.0.1:5000/v1/p/".concat(this.state.selected)),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.setRequestHeader("X-Auth-Token",s.get_token());var n="post_published=false";a.send(n),console.log(n,this.state.selected);var l=this.state.posts;a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE&&200===a.status){var e=JSON.parse(a.responseText).result;l.splice(t.state.selectedIndex,1,e),t.setState({posts:l,published:!1})}},console.log(this.state.title,this.state.text)}},{key:"login_redirect",value:function(e){1!=e&&(window.location.href="/login?redirect=/editor")}},{key:"loadPosts",value:function(){var e=this,t=new XMLHttpRequest,a=new j;t.open("GET","http://127.0.0.1:5000/v1/p/"),t.setRequestHeader("X-Auth-Token",a.get_token()),t.send(),t.onreadystatechange=function(){if(t.readyState===XMLHttpRequest.DONE&&200===t.status){var a=JSON.parse(t.responseText).result;console.log(a),e.setState({posts:a,ready:!0})}}}},{key:"newPost",value:function(){this.setState({selected:null,text:"",title:"",new:!0,published:!1},this.createPost)}},{key:"componentDidMount",value:function(){var e=new j;e.login_required(e.get_token(),this.login_redirect);this.loadPosts()}},{key:"render",value:function(){return 0==this.state.ready?n.a.createElement(E,null):n.a.createElement("div",null,n.a.createElement(v,{display_nav:!1}),n.a.createElement("br",null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-3"},n.a.createElement(_,{posts:this.state.posts,selected:this.state.selected,select:this.handleChangeSelected})),n.a.createElement("div",{className:"col-sm-6"},null!=this.state.new?n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("textarea",{id:"title_input",value:this.state.title,onChange:this.handleTitleChange,className:"form-control",rows:"1",placeholder:"Untitled",style:{border:"none",fontSize:32,marginBottom:5,lineHeight:"100%"}})),n.a.createElement("div",null,n.a.createElement(S.a,{value:this.state.text,modules:this.modules,formats:this.formats,onChange:this.handleBodyChange}),n.a.createElement("br",null))):n.a.createElement("div",{className:"text-center align-middle",style:{height:"300px",marginTop:"3em"}},n.a.createElement("p",{className:"lead"},"Select a post or click ",n.a.createElement("a",{onClick:this.newPost,style:{textDecoration:"underline",cursor:"pointer"}},"New")," to start editing"))),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement(q,{new:this.state.new,published:this.state.published,publish:this.publish,unPublish:this.unPublish,save:this.save,newPost:this.newPost,deletePost:this.deletePost}))))}}]),t}(s.Component),X=Object(m.f)(R),L=a(73),D=a.n(L),z=function(e){function t(e){var a;Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={email:""};var s=D.a.parse(window.location.search);return null!=s&null!=s.redirect?a.redirect=s.redirect:a.redirect="/",a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleSubmit",value:function(){var e=this,t=document.querySelector("#email").value,a=document.querySelector("#pw").value,s=new XMLHttpRequest;s.open("POST","http://127.0.0.1:5000/v1/login");var n="email=".concat(t,"&pw=").concat(a);s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.send(n),s.onreadystatechange=function(){if(s.readyState===XMLHttpRequest.DONE&&200===s.status){var t=JSON.parse(s.responseText).result;if(console.log(t),Object.keys(t).includes("token"))console.log("logged_in"),O.a.set("authToken",t.token,{expires:30,path:"/"}),O.a.set("user",t.user,{expires:30,path:"/"}),window.location.href=e.redirect;else if(Object.keys(t).includes("error")){var a=document.querySelector("#error-container");a.innerHTML="";var n=document.createTextNode(t.error);a.appendChild(n)}}}}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(v,{display_nav:!1}),n.a.createElement("div",{class:"col-sm-6 offset-sm-3"},n.a.createElement("div",null,n.a.createElement("div",{id:"error-container",class:"col-8 offset-2",style:{fontWeight:700}}),n.a.createElement("form",{class:"col-8 offset-2"},n.a.createElement("div",{class:"form-group"},n.a.createElement("label",null,"Email"),n.a.createElement("input",{type:"text",class:"form-control",id:"email"})),n.a.createElement("div",{class:"form-group"},n.a.createElement("label",null,"Password"),n.a.createElement("input",{type:"password",class:"form-control",id:"pw"})),n.a.createElement("button",{class:"btn btn-primary",type:"button",onClick:this.handleSubmit},"Submit")))))}}]),t}(s.Component),A=function(e){function t(e){return Object(r.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"selectPost",value:function(e){var t=null;return this.props.posts.forEach((function(a){e==a.post_id&&(t=a)})),t}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(v,null),n.a.createElement("br",null),n.a.createElement("div",{className:"col-sm-6 offset-sm-3"},n.a.createElement(y,{post:this.selectPost(this.props.match.params.id),posts:this.props.posts})))}}]),t}(s.Component),B=Object(m.f)(A),J=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={messages:[],posts:[]},a.flashMessage=a.flashMessage.bind(Object(d.a)(a)),a.removeFlashedMessage=a.removeFlashedMessage.bind(Object(d.a)(a)),a.loadPosts=a.loadPosts.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"flashMessage",value:function(e){var t=this,a=this.state.messages;a.push(e),this.setState({messages:a}),window.setTimeout((function(){t.removeFlashedMessage(e)}),1e3)}},{key:"removeFlashedMessage",value:function(e){var t,a=this.state.messages;for(t=0;t<this.state.messages.length;t++)this.state.messages[t]==e&&(a.pop(t),this.setState({messages:a}))}},{key:"loadPosts",value:function(){var e=this,t=new XMLHttpRequest,a=new j;t.open("GET","http://127.0.0.1:5000/v1/p/?publishedOnly=True"),t.setRequestHeader("X-Auth-Token",a.get_token()),t.send(),t.onreadystatechange=function(){if(t.readyState===XMLHttpRequest.DONE&&200===t.status){var a=JSON.parse(t.responseText).result;e.setState({posts:a}),console.log("loaded posts")}}}},{key:"componentDidMount",value:function(){this.loadPosts()}},{key:"render",value:function(){return n.a.createElement(h.a,null,n.a.createElement("div",{className:"App",id:"app"},n.a.createElement("div",{class:"row"},n.a.createElement("div",{className:"col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-4 offset-lg-4 text-center",id:"flashed-messages"},this.state.messages.map((function(e,t){return n.a.createElement("div",{className:"flashed-message"},e)})))),n.a.createElement("div",{className:"container"},n.a.createElement(m.c,null,n.a.createElement(m.a,{path:"/login"},n.a.createElement(z,null)),n.a.createElement(m.a,{path:"/p/:id",children:n.a.createElement(B,{posts:this.state.posts})}),n.a.createElement(m.a,{path:"/editor"},n.a.createElement(X,{flashMessage:this.flashMessage})),n.a.createElement(m.a,{path:"/"},n.a.createElement(N,{posts:this.state.posts}))))))}}]),t}(s.Component);a(199);o.a.render(n.a.createElement(J,null),document.getElementById("root"))},48:function(e,t,a){},49:function(e,t,a){},70:function(e,t,a){},75:function(e,t,a){e.exports=a(200)}},[[75,1,2]]]);
//# sourceMappingURL=main.fcb4511a.chunk.js.map