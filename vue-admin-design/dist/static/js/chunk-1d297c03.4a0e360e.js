(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d297c03"],{2420:function(t,e,n){},3890:function(t,e,n){"use strict";n("42aa")},"42aa":function(t,e,n){},"9eb4":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"rich-text-editor"},[e("Hints",[e("template",{slot:"hintName"},[t._v("富文本编辑器")]),e("template",{slot:"hintInfo"},[e("p",[t._v("wangEditor:基于javascript和css开发的 Web富文本编辑器， 轻量、简洁、易用、开源免费")]),e("p",[t._v("该组件是对wangEditor进行Vue版的二次封装，Vue项目可直接拿来使用")]),e("p",[t._v("官方地址：访问 "),e("el-link",{attrs:{type:"success",href:"http://www.wangeditor.com/",target:"_blank"}},[t._v("wangEditor")])],1)])],2),e("Editor",{model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)},i=[],a=n("b522"),s=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"editor-wrapper"},[e("Toolbar",{attrs:{editor:t.editor,mode:t.mode,"default-config":t.toolbarConfig}}),e("Editor",{attrs:{mode:t.mode,"default-config":t.editorConfig},on:{onCreated:t.onCreated,onChange:t.onChange},model:{value:t.html,callback:function(e){t.html=e},expression:"html"}})],1)},l=[],r=n("8bbf"),c=n.n(r),d=(n("560e"),n("4e15")),u=c.a.extend({components:{Editor:d["a"],Toolbar:d["b"]},model:{prop:"value",event:"input"},props:{value:{type:String,default:""}},data(){return{editor:null,mode:"simple",html:"请输入内容...",toolbarConfig:{},editorConfig:{placeholder:"请输入内容..."}}},watch:{value(t){this.html=t}},beforeDestroy(){const t=this.editor;null!=t&&t.destroy()},methods:{onCreated(t){this.editor=Object.seal(t)},onChange(t){this.$emit("input",t.getHtml())}}}),p=u,h=(n("dde0"),n("2877")),f=Object(h["a"])(p,s,l,!1,null,null,null),m=f.exports,v={name:"RichTextEditor",components:{Editor:m,Hints:a["a"]},data(){return{content:"请输入内容..."}}},b=v,g=Object(h["a"])(b,o,i,!1,null,null,null);e["default"]=g.exports},b522:function(t,e,n){"use strict";var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hints-wrapper"},[e("div",{staticClass:"hint-title"},[e("i",{staticClass:"vue-dsn-icon-tishi"}),e("span",[t._t("hintName")],2)]),e("div",{staticClass:"hint-info"},[t._t("hintInfo")],2)])},i=[],a={name:"Hints"},s=a,l=(n("3890"),n("2877")),r=Object(l["a"])(s,o,i,!1,null,null,null);e["a"]=r.exports},dde0:function(t,e,n){"use strict";n("2420")}}]);