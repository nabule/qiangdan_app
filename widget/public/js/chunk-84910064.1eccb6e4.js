(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84910064"],{"59f3":function(n,e,t){n.exports=t.p+"public/img/bg3.dbf300fe.png"},"6bcd":function(n,e,t){n.exports=t.p+"public/img/default.a4784b4d.png"},"89d4":function(n,e,t){n.exports=t.p+"public/img/bg2.dde87052.png"},a1de:function(n,e,t){"use strict";t.r(e);var a=t("6bcd"),i=t.n(a),r={name:"mine",data:function(){return{menu:[{name:"我的钱包",path:"/wallet",icon:"mine1"},{name:"抢单记录",path:"/orderRecord",icon:"mine2"},{name:"邀请好友",path:"/invitation",icon:"mine3"},{name:"二维码管理",path:"/qrcode",icon:"mine4"},{name:"在线客服",path:"",icon:"mine5"},{name:"设置",path:"",icon:"mine6"}],user_img:i.a}},created:function(){},mounted:function(){},activated:function(){},methods:{uploadAvatar:function(n){var e=this,t=new FormData;t.append("file",n.file),t.append("token",this.$store.state.token),this.$SERVER.uploadfile(t).then(function(n){e.$SERVER.faceup({user_img:n.data.face}).then(function(t){e.$toast.success(n.msg),e.$store.state.userInfo.user_img=n.data.face})}).catch(function(n){e.$toast.fail(n.msg)})}}},o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"mine"}},[t("div",{staticClass:"main"},[t("div",{staticClass:"info"},[t("van-uploader",{staticClass:"avatar",attrs:{"after-read":n.uploadAvatar,accept:"image/*","max-count":1}},[t("img",{attrs:{src:n.$store.state.userInfo.user_img||n.user_img}})]),n._v(" "),t("div",{staticClass:"username"},[t("h3",[n._v(n._s(n.$store.state.userInfo.user_nickname))]),n._v(" "),t("img",{staticClass:"lv",attrs:{src:""}})]),n._v(" "),t("span",[n._v("注册日期："+n._s(n.$METHOD.format(n.$store.state.userInfo.user_reg_time,"yyyy.MM.dd")))]),n._v(" "),t("div",{staticClass:"data"},[t("dl",{on:{click:function(e){n.$router.push("/integral")}}},[t("dt",[n._v(n._s(n.$store.state.userInfo.ac_reward))]),n._v(" "),t("dd",[n._v("总积分")])]),n._v(" "),t("dl",[t("dt",[n._v(n._s(n.$store.state.userInfo.ac_balance))]),n._v(" "),t("dd",[n._v("保证金")])]),n._v(" "),t("dl",[t("dt",[n._v(n._s(n.$store.state.userInfo.order_amount))]),n._v(" "),t("dd",[n._v("总收益")])])])],1),n._v(" "),t("div",{staticClass:"menu"},n._l(n.menu,function(e,a){return t("div",{key:a,staticClass:"grid-item",on:{click:function(t){n.$router.push(e.path)}}},[t("svg-icon",{staticClass:"icon",attrs:{"icon-class":e.icon}}),n._v(" "),t("span",[n._v(n._s(e.name))])],1)}),0)])])},s=[],d=t("2455");function c(n){t("eba7")}var m=!1,f=c,l="data-v-d8378a32",u=null,p=Object(d["a"])(r,o,s,m,f,l,u);e["default"]=p.exports},b041:function(n,e){n.exports=function(n){return"string"!==typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},eba7:function(n,e,t){var a=t("fb77");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=t("499e").default;i("1643d228",a,!0,{})},fb77:function(n,e,t){var a=t("b041");e=n.exports=t("2350")(!1),e.push([n.i,"\n#mine[data-v-d8378a32] {\n  min-height: 100%;\n  background: #fdfcfc;\n}\n.main[data-v-d8378a32] {\n  padding: 0.9rem 0.3rem 0;\n  background: url("+a(t("89d4"))+") no-repeat center top;\n  background-size: 100% auto;\n}\n.info[data-v-d8378a32] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: relative;\n  height: 3.6rem;\n  -webkit-box-shadow: 0 0 0.6rem 0 rgba(127, 0, 4, 0.07);\n          box-shadow: 0 0 0.6rem 0 rgba(127, 0, 4, 0.07);\n  border-radius: 0.1rem;\n  padding: 0.8rem 0.4rem 0.4rem;\n  margin-bottom: 0.6rem;\n  background: #ffffff url("+a(t("59f3"))+") no-repeat 3.56rem 1.12rem;\n  background-size: auto 4.46rem;\n}\n.info .avatar[data-v-d8378a32] {\n  position: absolute;\n  left: 0.4rem;\n  top: -0.4rem;\n}\n.info .avatar img[data-v-d8378a32] {\n  width: 1rem;\n  height: 1rem;\n  border-radius: 50%;\n  border: 0.08rem solid rgba(255, 255, 255, 0.33);\n}\n.info .username[data-v-d8378a32] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 0.1rem;\n}\n.info .username h3[data-v-d8378a32] {\n  font-size: 0.3rem;\n  font-weight: bold;\n  color: #333333;\n  margin-right: 0.1rem;\n}\n.info .username img[data-v-d8378a32] {\n  height: 0.3rem;\n}\n.info span[data-v-d8378a32] {\n  font-size: 0.22rem;\n  font-weight: 400;\n  color: #999999;\n}\n.info .data[data-v-d8378a32] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-top: 0.3rem;\n}\n.info .data dl[data-v-d8378a32] {\n  text-align: center;\n}\n.info .data dl dt[data-v-d8378a32] {\n  font-size: 0.46rem;\n  font-weight: 400;\n  color: #333333;\n  margin-bottom: 0.1rem;\n  font-family: Bahnschrift;\n}\n.info .data dl dd[data-v-d8378a32] {\n  font-size: 0.26rem;\n  font-weight: 400;\n  color: #999999;\n}\n.menu[data-v-d8378a32] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.menu .grid-item[data-v-d8378a32] {\n  width: 2.2rem;\n  height: 1.68rem;\n  padding: 0.2rem 0;\n  border-radius: 0.2rem;\n  -webkit-box-shadow: 0 0 0.6rem 0 rgba(127, 0, 4, 0.07);\n          box-shadow: 0 0 0.6rem 0 rgba(127, 0, 4, 0.07);\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-flow: column;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  overflow: hidden;\n}\n.menu .grid-item .icon[data-v-d8378a32] {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n.menu .grid-item span[data-v-d8378a32] {\n  font-size: 0.26rem;\n  font-weight: 400;\n  color: #000000;\n  padding-top: 0.1rem;\n}\n",""])}}]);