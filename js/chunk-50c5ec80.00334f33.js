(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50c5ec80"],{5326:function(t,e,i){"use strict";var s=i("a6b5"),n=i.n(s);n.a},"5b46":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"footer1"},[i("div",{staticClass:"footer"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[t._m(0),i("div",{staticClass:"col"},[i("form",[i("div",{staticClass:"form-group text-light",staticStyle:{"max-width":"80%",margin:"0 auto"}},[i("label",{attrs:{for:"subscription"}},[t._v("Subscribe H8ike Blog Post")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.subscribeEmailInput,expression:"subscribeEmailInput"}],staticClass:"form-control",attrs:{type:"email",name:"subscription",id:"subscriptionEmail",autocomplete:"email",placeholder:"Your@Email.com"},domProps:{value:t.subscribeEmailInput},on:{keyup:function(t){t.preventDefault()},input:function(e){e.target.composing||(t.subscribeEmailInput=e.target.value)}}}),i("br"),i("button",{staticClass:"btn btn-dark pull-right btn-dark-outline",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.subscribe(e)}}},[t._v("Subscibe")])])])]),i("div",{staticClass:"col"},[i("ul",{staticClass:"social"},[i("li",[i("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.openFacebook(e)}}},[i("i",{staticClass:"fas fa-facebook fa-sm"})])]),i("li",[i("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.openTwitter(e)}}},[i("i",{staticClass:"fa fa-twitter"})])]),i("li",[i("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.openGplus(e)}}},[i("i",{staticClass:"fa fa-google-plus"})])]),i("li",[i("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.openPinterest(e)}}},[i("i",{staticClass:"fa fa-pinterest"})])]),i("li",[i("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.openLinkedin(e)}}},[i("i",{staticClass:"fa fa-linkedin"})])])])])])])]),t._m(1)])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col"},[i("div",{staticClass:"footer-desc text-center"},[i("p",[i("a",{attrs:{href:"",rel:"home",title:"Super Dev Resources"}},[t._v("H8ike")]),t._v(" is a popular online\n                            Blogging, Store and Community for"),i("br"),t._v("awesome bike .\n                        ")])]),i("hr")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer-bottom"},[i("div",{staticClass:"container"},[i("div",{staticClass:"text-center"},[t._v(" Copyright © "),i("a",[t._v("Fathul Q.")]),t._v("All right reserved.")])])])}],o={props:["user","logNotification"],data:function(){return{subscribeEmailInput:"",url:this.$clientBaseUrl,title:"H8ike Blog",source:this.$clientBaseUrl,media:"",twit:"Amazing Blog visit h8ikeblogid"}},methods:{subscribe:function(){var t=this;this.$server.post("/subscribes",{user:this.user?this.user:void 0,email:this.subscribeEmailInput}).then(function(e){t.logNotification(e.data.message,"success",4e3)}).catch(function(e){t.logNotification(e.response,"danger",4e3)})},openFacebook:function(){window.open("https://www.facebook.com/share.php?u=".concat(this.url,"&title=").concat(this.title),"popup","width=600,height=600")},openTwitter:function(){window.open("https://twitter.com/intent/tweet?url=".concat(this.url,"&text=").concat(this.twit,"&hashtags=h8ikeblogid"),"popup","width=600,height=600")},openGplus:function(){window.open("https://plus.google.com/share?url=".concat(this.url),"popup","width=600,height=600")},openLinkedin:function(){window.open("https://www.linkedin.com/shareArticle?mini=true&url=".concat(this.url,"&title=").concat(this.title,"&source=").concat(this.url),"popup","width=600,height=600")},openPinterest:function(){window.open("https://pinterest.com/pin/create/bookmarklet/?url=".concat(this.url,"&is_video=false&description==").concat(this.title),"popup","width=600,height=600")}}},a=o,r=(i("5326"),i("2877")),c=Object(r["a"])(a,s,n,!1,null,"eb5c9aec",null);c.options.__file="FooterSection.vue";e["default"]=c.exports},a6b5:function(t,e,i){}}]);
//# sourceMappingURL=chunk-50c5ec80.00334f33.js.map