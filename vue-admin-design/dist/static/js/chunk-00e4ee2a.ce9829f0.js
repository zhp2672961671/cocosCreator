(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00e4ee2a"],{"0f04":function(e,t,l){},"14f7":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"org-tree-wrapper",style:{height:"vertical"===e.displayMode?"650px":"1050px"}},[t("Hints",[t("template",{slot:"hintName"},[e._v("树状组织图")]),t("template",{slot:"hintInfo"},[t("p",[e._v("v-org-tree：基于vue的树结构组织图，可用于公司组织架构展示")]),t("p",[e._v("github地址：访问 "),t("el-link",{attrs:{type:"success",href:"https://github.com/lison16/v-org-tree",target:"_blank"}},[e._v("v-org-tree")])],1)])],2),t("div",{staticClass:"ctrl-box"},[t("div",{staticClass:"btn-item"},[t("span",[e._v("排列方式：")]),t("el-radio-group",{attrs:{size:"small"},model:{value:e.displayMode,callback:function(t){e.displayMode=t},expression:"displayMode"}},[t("el-radio-button",{attrs:{label:"vertical"}},[e._v("竖排")]),t("el-radio-button",{attrs:{label:"horizontal"}},[e._v("横排")])],1)],1),t("div",{staticClass:"btn-item"},[t("span",[e._v("展开全部：")]),t("el-switch",{model:{value:e.expandAll,callback:function(t){e.expandAll=t},expression:"expandAll"}})],1)]),t("div",{staticClass:"zoom-box"},[t("ZoomController",{attrs:{min:80,max:120,diff:10},model:{value:e.zoom,callback:function(t){e.zoom=t},expression:"zoom"}})],1),t("OrgView",{attrs:{"zoom-val":e.zoomVal,"expand-all":e.expandAll,horizontal:e.horizontal}})],1)},n=[],o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"org-tree-view-wrapper",style:e.orgTreeStyle},[t("OrgTree",{attrs:{data:e.data,collapsable:"","node-render":e.nodeRender,"expand-all":e.expandAll,horizontal:e.horizontal,props:e.props},on:{"on-expand":e.onExpand,"on-node-click":e.onNodeClick}})],1)},i=[],s=l("9a0d"),r=l.n(s);l("749a");const c={id:0,label:"XXX科技有限公司",children:[{id:2,label:"产品研发部",children:[{id:5,label:"产品经理"},{id:6,label:"UI设计"},{id:9,label:"研发-前端"},{id:10,label:"研发-后端"},{id:12,label:"测试"}]},{id:3,label:"销售部",children:[{id:7,label:"销售一部",children:[{id:14,label:"售前"},{id:15,label:"售后"},{id:16,label:"客服"}]},{id:8,label:"销售二部"},{id:13,label:"销售三部"}]},{id:4,label:"财务部"},{id:11,label:"HR人事"}]};var d={name:"OrgView",components:{OrgTree:r.a},props:{expandAll:{type:Boolean,default:!0},horizontal:{type:Boolean,default:!1},zoomVal:{type:Number,default:1}},data(){return{data:c,props:{id:"id",label:"label",expand:"expand",children:"children"}}},computed:{orgTreeStyle(){return{transform:`scale(${this.zoomVal}, ${this.zoomVal})`}}},methods:{nodeRender(e,t){return t.label},onExpand(e,t){console.log(e,t)},onNodeClick(e,t){console.log(t)}}},u=d,p=(l("c418"),l("2877")),f=Object(p["a"])(u,o,i,!1,null,null,null),b=f.exports,m=function(){var e=this,t=e._self._c;return t("div",{staticClass:"zoom-controller"},[t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.scale("cut")}}},[t("i",{staticClass:"icon el-icon-remove"})]),t("span",[e._v(e._s(e.value)+"%")]),t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.scale("add")}}},[t("i",{staticClass:"icon el-icon-circle-plus"})])],1)},h=[],v={name:"ZoomController",props:{value:{type:Number,default:100},diff:{type:Number,default:10},min:{type:Number,default:50},max:{type:Number,default:150}},methods:{scale(e){const t=this.value+("cut"===e?-this.diff:this.diff);if(t<this.min&&"cut"===e||t>this.max&&"add"===e)return!1;this.$emit("input",t)}}},x=v,z=(l("38c0"),Object(p["a"])(x,m,h,!1,null,null,null)),_=z.exports,g=l("b522"),y={name:"OrgTree",components:{OrgView:b,ZoomController:_,Hints:g["a"]},data(){return{expandAll:!0,displayMode:"vertical",zoom:100}},computed:{zoomVal(){return this.zoom/100},horizontal(){return"vertical"!==this.displayMode}}},C=y,w=(l("a6cc"),Object(p["a"])(C,a,n,!1,null,null,null));t["default"]=w.exports},3890:function(e,t,l){"use strict";l("42aa")},"38c0":function(e,t,l){"use strict";l("0f04")},"42aa":function(e,t,l){},"8aba":function(e,t,l){},a6cc:function(e,t,l){"use strict";l("aff9")},aff9:function(e,t,l){},b522:function(e,t,l){"use strict";var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"hints-wrapper"},[t("div",{staticClass:"hint-title"},[t("i",{staticClass:"vue-dsn-icon-tishi"}),t("span",[e._t("hintName")],2)]),t("div",{staticClass:"hint-info"},[e._t("hintInfo")],2)])},n=[],o={name:"Hints"},i=o,s=(l("3890"),l("2877")),r=Object(s["a"])(i,a,n,!1,null,null,null);t["a"]=r.exports},c418:function(e,t,l){"use strict";l("8aba")}}]);