(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-538c104a"],{"196c":function(t,n,a){n=t.exports=a("2350")(!1),n.push([t.i,"\n.main[data-v-64c69dc1] {\n  padding: 0 0.5rem;\n}\n.balance[data-v-64c69dc1] {\n  margin-top: 0.4rem;\n  margin-bottom: 0.7rem;\n  padding: 0 0.2rem;\n}\n.balance h3[data-v-64c69dc1] {\n  font-size: 0.26rem;\n  font-weight: 400;\n  color: #333333;\n}\n.balance p[data-v-64c69dc1] {\n  font-size: 0.6rem;\n  font-weight: 400;\n  font-family: Bahnschrift;\n  color: #333333;\n}\n.profit[data-v-64c69dc1] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom: 0.8rem;\n  padding: 0 0.2rem;\n}\n.profit dl[data-v-64c69dc1] {\n  margin-right: 0.6rem;\n}\n.profit dl dt[data-v-64c69dc1] {\n  font-size: 0.26rem;\n  font-weight: 400;\n  color: #333333;\n}\n.profit dl dd[data-v-64c69dc1] {\n  font-size: 0.4rem;\n  font-weight: 400;\n  color: #333333;\n  font-family: Bahnschrift;\n}\n.liushui[data-v-64c69dc1] {\n  padding: 0 0.2rem;\n  font-size: 0.3rem;\n  font-weight: 400;\n  color: #999999;\n  margin-bottom: 1rem;\n}\n.btn-group[data-v-64c69dc1] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.btn-group .btn[data-v-64c69dc1] {\n  width: 3rem;\n  height: 0.8rem;\n  line-height: 0.8rem;\n  text-align: center;\n  background: -webkit-gradient(linear, left top, right top, from(#f94a51), to(#f76d62));\n  background: -webkit-linear-gradient(left, #f94a51, #f76d62);\n  background: -o-linear-gradient(left, #f94a51, #f76d62);\n  background: linear-gradient(90deg, #f94a51, #f76d62);\n  border-radius: 0.4rem;\n  font-size: 0.3rem;\n  font-weight: 400;\n  color: #fffefe;\n}\n",""])},"42c1":function(t,n,a){var e=a("4618");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("499e").default;i("694eeaa9",e,!0,{})},4618:function(t,n,a){n=t.exports=a("2350")(!1),n.push([t.i,"\n.navbar[data-v-40a31c29] {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 999;\n  background: #fff;\n}\n.navbar .title span[data-v-40a31c29] {\n  font-weight: bold;\n}\n.navbar .left[data-v-40a31c29],\n.navbar .right[data-v-40a31c29] {\n  font-size: 0.4rem;\n}\n.navbar-empty[data-v-40a31c29] {\n  height: 0.92rem;\n}\n/* 风格 */\n.nobg[data-v-40a31c29] {\n  background: none;\n}\n.nobg .title[data-v-40a31c29] {\n  color: #fff;\n}\n.nobg .left[data-v-40a31c29] {\n  color: #fff !important;\n}\n",""])},"67b7":function(t,n,a){var e=a("b579");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("499e").default;i("3fe1ffff",e,!0,{})},"932b":function(t,n,a){"use strict";a.r(n);var e=a("ff6f"),i={name:"wallet",components:{navBar:e["a"]}},o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"container"},[a("navBar"),t._v(" "),a("div",{staticClass:"main"},[a("div",{staticClass:"balance"},[a("h3",[t._v("账户余额")]),t._v(" "),a("p",[t._v(t._s(t.$store.state.userInfo.ac_balance))])]),t._v(" "),a("div",{staticClass:"profit"},[a("dl",[a("dt",[t._v("昨日收益")]),t._v(" "),a("dd",[t._v(t._s(t.$store.state.userInfo.zuo_amount))])]),t._v(" "),a("dl",[a("dt",[t._v("总收益")]),t._v(" "),a("dd",[t._v(t._s(t.$store.state.userInfo.order_amount))])])]),t._v(" "),a("p",{staticClass:"liushui"},[t._v("查看资金流水")]),t._v(" "),t._m(0)])],1)},r=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"btn-group"},[a("div",{staticClass:"btn"},[t._v("充值")]),t._v(" "),a("div",{staticClass:"btn"},[t._v("提现")])])}],s=a("2455");function c(t){a("d2d7")}var l=!1,d=c,f="data-v-64c69dc1",v=null,u=Object(s["a"])(i,o,r,l,d,f,v);n["default"]=u.exports},b579:function(t,n,a){n=t.exports=a("2350")(!1),n.push([t.i,"\n.nobg .van-hairline--bottom::after {\n  border-bottom-width: 0;\n}\n",""])},d2d7:function(t,n,a){var e=a("196c");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("499e").default;i("f444f410",e,!0,{})},ff6f:function(t,n,a){"use strict";a("386d");var e={name:"navbar",data:function(){return{top:"",searchShow:!1,value:"",searchEmptyShow:!1}},props:{title:{type:String,default:function(){return this.$route.meta.title},required:!1},goback:{type:Boolean,default:function(){return!0},required:!1},search:{type:Boolean,default:function(){return!1},required:!1},filter:{type:Boolean,default:function(){return!1},required:!1},stl:{type:String,default:function(){},required:!1}},components:{},mounted:function(){var t=this.$store.state.systemType;"android"==t&&(this.top=25),"ios"==t&&(this.top=40,this.searchEmptyShow=!0)},methods:{onClickLeft:function(){this.goback&&this.$router.go(-1)},openSearchFn:function(){this.search&&(this.searchShow=!0)},searchFn:function(){console.log("搜索")}}},i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticStyle:{position:"relative"}},[a("div",{staticClass:"navbar",class:t.stl?t.stl:"",attrs:{id:"navbar"}},[a("div",{staticClass:"top",style:"padding-top:"+t.top+"px"}),t._v(" "),a("van-nav-bar",{staticStyle:{background:"none"},attrs:{"z-index":999,border:!1},on:{"click-left":function(n){t.onClickLeft()},"click-right":function(n){t.openSearchFn()}}},[a("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[a("span",[t._v(t._s(t.title))]),t._v(" "),t._t("title")],2),t._v(" "),t.goback?a("van-icon",{staticClass:"left",attrs:{slot:"left",name:"arrow-left"},slot:"left"}):t._e(),t._v(" "),t.search?a("svg-icon",{staticClass:"right",attrs:{slot:"right","icon-class":"search"},slot:"right"}):t._t("right",null,{slot:"right"})],2)],1),t._v(" "),t.stl?t._e():a("div",{staticClass:"navbar-empty",style:"padding-top:"+t.top+"px"}),t._v(" "),a("van-popup",{attrs:{position:"top","get-container":"body"},model:{value:t.searchShow,callback:function(n){t.searchShow=n},expression:"searchShow"}},[t.searchEmptyShow&&!t.stl?a("div",{staticClass:"navbar-empty"}):t._e(),t._v(" "),a("van-search",{attrs:{placeholder:"请输入搜索关键词"},on:{blur:t.searchFn},model:{value:t.value,callback:function(n){t.value=n},expression:"value"}})],1)],1)},o=[],r=a("2455");function s(t){a("67b7"),a("42c1")}var c=!1,l=s,d="data-v-40a31c29",f=null,v=Object(r["a"])(e,i,o,c,l,d,f);n["a"]=v.exports}}]);