(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-610d2990"],{"09ae":function(t,e,s){},"2f21":function(t,e,s){"use strict";var i=s("79e5");t.exports=function(t,e){return!!t&&i(function(){e?t.call(null,function(){},1):t.call(null)})}},"55dd":function(t,e,s){"use strict";var i=s("5ca1"),a=s("d8e8"),n=s("4bf8"),l=s("79e5"),c=[].sort,r=[1,2,3];i(i.P+i.F*(l(function(){r.sort(void 0)})||!l(function(){r.sort(null)})||!s("2f21")(c)),"Array",{sort:function(t){return void 0===t?c.call(n(this)):c.call(n(this),a(t))}})},eafb:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row my-2 mx-1"},[s("nav",{staticClass:"nav nav-pills "},[s("a",{staticClass:"nav-link text-success",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.getPopularArticles(e)}}},[s("i",{staticClass:"fa fa-eye fa-lg"}),t._v("\n                Popular\n            ")]),s("a",{staticClass:"nav-link text-warning",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.getMostLikedArticles(e)}}},[s("i",{staticClass:"fa fa-heart fa-lg"}),t._v("\n                Most Liked\n            ")]),s("a",{staticClass:"nav-link text-info",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.getMostActiveArticles(e)}}},[s("i",{staticClass:"fa fa-comments fa-lg"}),t._v("\n                Most Active\n            ")])])]),s("div",{staticClass:"row  mb-2"},[s("div",{staticClass:"col"},[s("div",{staticClass:"card-deck"},t._l(t.inArticles.slice(0,5),function(e){return s("div",{key:e._id,staticClass:"card"},[s("a",{staticClass:"hover",on:{click:function(s){s.preventDefault(),t.$router.push({name:"articleDetail",params:{id:e._id}})}}},[s("div",{staticClass:"card-header pb-2"},["popular"==t.featuredMode?s("span",{staticClass:"badge pull-right badge-pill badge-success"},[t._v(t._s(e.viewCount)+" views")]):t._e(),"mostLiked"==t.featuredMode?s("span",{staticClass:"badge badge-pill pull-right badge-warning"},[t._v(t._s(e.likes.length)+" Likes")]):t._e(),"mostActive"==t.featuredMode?s("span",{staticClass:"badge badge-pill pull-right badge-info"},[t._v(t._s(e.comments.length)+" Comments")]):t._e()]),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(t._s(e.title))]),s("span",{staticClass:"pull-right"},[s("small",[t._v("by")]),s("i",[t._v(" "+t._s(e.author.name)+" ")])]),s("br")])])])}))])])])},a=[],n=(s("55dd"),s("2909")),l={props:["articles"],data:function(){return{inArticles:[],featuredMode:"popular"}},mounted:function(){this.getPopularArticles()},methods:{getPopularArticles:function(){var t=[],e=Object(n["a"])(this.articles);t=e.sort(function(t,e){return e.viewCount-t.viewCount}),this.featuredMode="popular",this.inArticles=t},getMostLikedArticles:function(){var t=[],e=Object(n["a"])(this.articles);t=e.sort(function(t,e){return e.likes.length-t.likes.length}),this.featuredMode="mostLiked",this.inArticles=t},getMostActiveArticles:function(){var t=[],e=Object(n["a"])(this.articles);t=e.sort(function(t,e){return e.comments.length-t.comments.length}),this.featuredMode="mostActive",this.inArticles=t}},watch:{articles:function(){this.getPopularArticles()}}},c=l,r=(s("fd29"),s("2877")),o=Object(r["a"])(c,i,a,!1,null,null,null);e["default"]=o.exports},fd29:function(t,e,s){"use strict";var i=s("09ae"),a=s.n(i);a.a}}]);
//# sourceMappingURL=chunk-610d2990.e82315eb.js.map