(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-524fe2bb"],{"1ff3":function(t,e,a){"use strict";var n=a("feb5"),c=a.n(n);c.a},"4dd2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",[a("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){t.$router.go(-1)}}},[t._v("Back")])]),a("div",{staticClass:"col"},[a("ThreadCard",{attrs:{thread:t.thread,user:t.user,logNotification:t.logNotification}})],1)])])},c=[],i=a("be94"),r=(a("cadf"),a("551c"),a("097d"),a("2f62")),s={name:"ThreadDetail",props:["user","logNotification"],components:{ThreadCard:function(){return Promise.all([a.e("chunk-2d20f93b"),a.e("chunk-45132919")]).then(a.bind(null,"996a"))}},computed:Object(i["a"])({},Object(r["c"])(["thread"])),created:function(){this.fetchThread(this.$route.params.id)},methods:Object(i["a"])({},Object(r["b"])(["fetchThread","fetchThreads"])),watch:{"$route.params.id":{handler:function(t){var e=this,a=t;this.$server.get("/threads/updateViewer/".concat(a)).then(function(){e.fetchThread(a),e.fetchThreads()}).catch(function(t){console.log(t.response)})},deep:!0,immediate:!0}}},o=s,d=(a("1ff3"),a("2877")),u=Object(d["a"])(o,n,c,!1,null,null,null);u.options.__file="ThreadDetail.vue";e["default"]=u.exports},feb5:function(t,e,a){}}]);
//# sourceMappingURL=chunk-524fe2bb.6a8ecb80.js.map