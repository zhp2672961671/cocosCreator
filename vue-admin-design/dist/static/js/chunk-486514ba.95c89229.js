(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-486514ba"],{3890:function(t,e,a){"use strict";a("42aa")},"42aa":function(t,e,a){},"54b9":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-inline-edit"},[e("Hints",[e("template",{slot:"hintName"},[t._v("Table表格组件(行内编辑)")]),e("template",{slot:"hintInfo"},[e("p",[t._v("element-Table：使用elementUI的Table组件，可用于展示多条结构类似的数据，并对其进行行内编辑操作")]),e("p",[t._v("地址：访问 "),e("el-link",{attrs:{type:"success",href:"https://element.eleme.cn/2.13/TableClassic.vue#/zh-CN/component/table",target:"_blank"}},[t._v("element-Table")])],1)])],2),e("el-card",{attrs:{shadow:"always"}},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableList,"tooltip-effect":"dark",size:"medium"}},[e("el-table-column",{attrs:{prop:"id",label:"编号",align:"center",width:"120"}}),e("el-table-column",{attrs:{prop:"name",label:"姓名",align:"center"}}),e("el-table-column",{attrs:{label:"性别",align:"center"},scopedSlots:t._u([{key:"default",fn:function({row:e}){return[t._v(t._s(e.sex))]}}])}),e("el-table-column",{attrs:{label:"爱好",align:"center","min-width":"300px"},scopedSlots:t._u([{key:"default",fn:function({row:a}){return[a.editable?[e("el-input",{staticStyle:{width:"300px"},model:{value:a.hobby,callback:function(e){t.$set(a,"hobby",e)},expression:"row.hobby"}}),e("el-button",{staticClass:"cancel-btn",attrs:{type:"warning"},on:{click:function(e){return t.cancelEdit(a)}}},[t._v("取消")])]:e("span",[t._v(t._s(a.hobby))])]}}])}),e("el-table-column",{attrs:{prop:"education",label:"学历",align:"center"}}),e("el-table-column",{attrs:{align:"center",label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function({row:a}){return[a.editable?e("el-button",{attrs:{type:"success",size:"small"},on:{click:function(e){return t.confirmEdit(a)}}},[t._v("保存")]):e("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){a.editable=!a.editable}}},[t._v("编辑")])]}}])})],1)],1)],1)},i=[],l=a("d722"),s=a("b522"),c={name:"TableInlineEdit",components:{Hints:s["a"]},data(){return{listLoading:!0,tableList:[],listQuery:{currentPage:1,pageSize:10}}},created(){this.fetchData()},methods:{fetchData(){this.listLoading=!0,Object(l["a"])(this.listQuery).then(t=>{const e=t.data;0===e.code&&(this.tableList=e.data.list.map(t=>(this.$set(t,"editable",!1),t.originalHobby=t.hobby,t)),console.log(this.tableList),this.listLoading=!1)}).catch(()=>{this.listLoading=!1})},cancelEdit(t){t.hobby=t.originalHobby,t.editable=!1},confirmEdit(t){t.editable=!1,t.originalHobby=t.hobby}}},o=c,r=(a("ca52"),a("2877")),b=Object(r["a"])(o,n,i,!1,null,null,null);e["default"]=b.exports},b522:function(t,e,a){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hints-wrapper"},[e("div",{staticClass:"hint-title"},[e("i",{staticClass:"vue-dsn-icon-tishi"}),e("span",[t._t("hintName")],2)]),e("div",{staticClass:"hint-info"},[t._t("hintInfo")],2)])},i=[],l={name:"Hints"},s=l,c=(a("3890"),a("2877")),o=Object(c["a"])(s,n,i,!1,null,null,null);e["a"]=o.exports},ca52:function(t,e,a){"use strict";a("ce1b")},ce1b:function(t,e,a){},d722:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var n=a("cebe"),i=a.n(n);function l(t){return i()({url:"https://cdn.jsdelivr.net/gh/baimingxuan/media-store/mock-data/table-list.json",method:"get",param:t})}}}]);