(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e6f7a48"],{"0156":function(t,e,i){"use strict";var a=i("530f"),o=i.n(a);o.a},3530:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade"}},["adminView"==t.viewMode?i("div",{staticClass:"container-fluid py-4  bg-info"},[i("div",{staticClass:"row py-3 px-3"},[i("transition",{attrs:{name:"fade"}},[t.editItemModel._id?t._e():i("div",{staticClass:"col-3 mx-auto"},[i("form",[i("h4",[i("b",{staticClass:"text-light"},[t._v(" Add New Item  ")])]),i("div",{staticClass:"input-group mb-3"},[i("div",{staticClass:"custom-file"},[i("input",{staticClass:"custom-file-input",attrs:{type:"file",accept:"image/*",id:"pictureFile"},on:{change:function(e){t.getImgInput(e)}}}),i("label",{staticClass:"custom-file-label",attrs:{for:"pictureFile"}},[t._v("img "+t._s(t.imgFileName))])])]),i("div",{staticClass:"form-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.addItemModel.name,expression:"addItemModel.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Item Name"},domProps:{value:t.addItemModel.name},on:{input:function(e){e.target.composing||t.$set(t.addItemModel,"name",e.target.value)}}})]),i("div",{staticClass:"form-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.addItemModel.description,expression:"addItemModel.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Description"},domProps:{value:t.addItemModel.description},on:{input:function(e){e.target.composing||t.$set(t.addItemModel,"description",e.target.value)}}})]),i("div",{staticClass:"form-group form-inline d-flex justify-content-between"},[i("label",{staticClass:"font-weight-bold"},[t._v("Price")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.addItemModel.price,expression:"addItemModel.price",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",placeholder:"Price"},domProps:{value:t.addItemModel.price},on:{input:function(e){e.target.composing||t.$set(t.addItemModel,"price",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),i("div",{staticClass:"form-group form-inline d-flex justify-content-between"},[i("label",{staticClass:" font-weight-bold"},[t._v("Stock")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.addItemModel.stock,expression:"addItemModel.stock",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",placeholder:"Stock"},domProps:{value:t.addItemModel.stock},on:{input:function(e){e.target.composing||t.$set(t.addItemModel,"stock",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),i("div",{staticClass:"form-group"},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.addItemModel.categories,expression:"addItemModel.categories",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"string",placeholder:"categories"},domProps:{value:t.addItemModel.categories},on:{input:function(e){e.target.composing||t.$set(t.addItemModel,"categories",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),i("small",[i("i",[t._v(" categories : comma separated for multiple input ")])])]),i("input",{staticClass:"btn btn-warning pull-right",attrs:{name:"registerBtn",id:"registerBtn",type:"submit",value:"Add Item"},on:{click:function(e){e.preventDefault(),t.addNewItem("items")}}})])])]),i("div",{staticClass:"col-8 mx-auto"},[i("h4",[i("b",{staticClass:"text-light"},[t._v(" Data Items  ")])]),i("table",{staticClass:"table table-light table-hover"},[i("thead",{staticClass:"thead-default"},[i("tr",{staticClass:"table-warning"},[i("th",[t._v("No")]),i("th",[t._v("Name")]),i("th",[t._v("Description")]),i("th",[t._v("Categories")]),i("th",[t._v("Price")]),i("th",[t._v("Stock")]),i("th",[t._v("Action")])])]),t.items?i("tbody",t._l(t.items,function(e,a){return i("tr",{key:a},[i("td",{attrs:{scope:"row"}},[t._v(" "+t._s(a+1)+" ")]),i("td",[t._v(" "+t._s(e.name)+" ")]),i("td",[t._v(" "+t._s(e.description.slice(0,20))+" ")]),i("td",[t._v(" "+t._s(e.categories.join(", "))+" ")]),i("td",[t._v(" "+t._s(t.getRpFormat(e.price))+" ")]),i("td",[t._v(" "+t._s(e.stock)+" ")]),i("td",[i("a",{staticClass:"mx-1",attrs:{href:""},on:{click:function(i){i.preventDefault(),t.displayEditItem(e)}}},[i("i",{staticClass:"fa fa-edit fa-lg"})]),i("a",{staticClass:"mx-1",attrs:{href:""},on:{click:function(i){i.preventDefault(),t.deleteItem(e._id)}}},[i("i",{staticClass:"fa fa-remove fa-lg"})])])])})):t._e()])]),i("transition",{attrs:{name:"fade",mode:"out-in"}},[t.editItemModel._id?i("div",{staticClass:"col-3 mx-auto"},[i("form",[i("h4",[i("b",{staticClass:"text-light"},[t._v(" Edit Item  ")])]),i("div",{staticClass:"input-group mb-3"},[i("div",{staticClass:"custom-file"},[i("input",{staticClass:"custom-file-input",attrs:{type:"file",accept:"image/*",id:"pictureFile"},on:{change:function(e){t.getImgInput(e)}}}),i("label",{staticClass:"custom-file-label",attrs:{for:"pictureFile"}},[t._v("img "+t._s(t.imgFileName))])]),i("div",{staticClass:"input-group-append"},[i("span",{staticClass:"input-group-text"},[t._v("Upload")])])]),i("div",{staticClass:"form-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.editItemModel.name,expression:"editItemModel.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Item Name"},domProps:{value:t.editItemModel.name},on:{input:function(e){e.target.composing||t.$set(t.editItemModel,"name",e.target.value)}}})]),i("div",{staticClass:"form-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.editItemModel.description,expression:"editItemModel.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Description"},domProps:{value:t.editItemModel.description},on:{input:function(e){e.target.composing||t.$set(t.editItemModel,"description",e.target.value)}}})]),i("div",{staticClass:"form-group"},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.editItemModel.price,expression:"editItemModel.price",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",placeholder:"Price"},domProps:{value:t.editItemModel.price},on:{input:function(e){e.target.composing||t.$set(t.editItemModel,"price",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),i("div",{staticClass:"form-group"},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.editItemModel.stock,expression:"editItemModel.stock",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",placeholder:"Stock"},domProps:{value:t.editItemModel.stock},on:{input:function(e){e.target.composing||t.$set(t.editItemModel,"stock",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),i("div",{staticClass:"form-group"},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.editItemModel.categories,expression:"editItemModel.categories",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"string",placeholder:"categories"},domProps:{value:t.editItemModel.categories},on:{input:function(e){e.target.composing||t.$set(t.editItemModel,"categories",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),i("small",[i("i",[t._v(" categories : comma separated for multiple input ")])])]),i("input",{staticClass:"btn btn-warning pull-right mx-3",attrs:{type:"submit",value:"Update"},on:{click:function(e){e.preventDefault(),t.updateItem()}}}),i("input",{staticClass:"btn btn-dark pull-right",attrs:{type:"submit",value:"cancel"},on:{click:function(e){e.preventDefault(),t.editItemModel=!1}}})])]):t._e()])],1)]):t._e()])},o=[],s=(i("cadf"),i("551c"),i("097d"),{name:"Admin",props:["user","viewMode","editItemModel","addItemModel","addNewItem","items","deleteItem","getRpFormat","displayEditItem","updateItem","getImgInput","imgInput","imgFileName"]}),l=s,r=(i("0156"),i("2877")),n=Object(r["a"])(l,a,o,!1,null,null,null);n.options.__file="Admin.vue";e["default"]=n.exports},"530f":function(t,e,i){}}]);
//# sourceMappingURL=chunk-2e6f7a48.44f1ebc2.js.map