webpackJsonp([1],Array(43).concat([function(t,e,n){"use strict";var i=n(19),a=n(202),s=n(105),o=n(104);i.a.use(a.a);var r=new a.a.Store({modules:{userInfo:s.a,history:o.a}});e.a=r},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var i=n(180),a=n.n(i),s=n(179),o=n.n(s),r=n(181),c=n.n(r);e.a={install:function(t,e){t.component("frame-view-float",a.a),t.component("button-inline",o.a),t.component("fullscreen-dialog",c.a)}}},function(t,e,n){"use strict";var i=n(96),a=n(97),s=n(99),o=n(98),r=n(102),c=n(100),u=n(101);e.a={install:function(t,e){t.use(i.a),t.use(a.a),t.use(s.a),t.use(o.a),t.use(r.a),t.use(c.a),t.use(u.a)}}},function(t,e,n){"use strict";var i=n(19),a=n(200),s=n(103),o=(n(43),new i.a);i.a.use(a.a);var r=new a.a({base:"/wechart/",mode:"history",routes:s.a,strict:!1});r.beforeEach(function(t,e,n){t.meta.title&&(document.title=t.meta.title);t.fullPath;t.query.code&&o.$storage.set("code",t.query.code),n()}),e.a=r},function(t,e,n){"use strict";var i=n(106),a=(n.n(i),n(108)),s=(n.n(a),n(107));n.n(s)},function(t,e,n){n(176);var i=n(4)(n(109),n(199),null,null);t.exports=i.exports},,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var i="//www.shijianguanlixueyuan.com",a={classApi:{name:"所有课程",type:"get",server:i,url:"/class_api.php"},wechartClass:{name:"微信",type:"get",server:i,url:"/wechart_class.php"},wxauth:{name:"微信用户信息",type:"get",server:i,url:"/wxauth.php"},UnifiedOrderApi1:{name:"订单信息",type:"get",server:i,url:"/wxsdk/example/unifiedOrder_openid1.php"},UnifiedOrderApi2:{name:"订单信息",type:"get",server:i,url:"/wxsdk/example/unifiedOrder_openid2.php"},UnifiedOrderApi3:{name:"订单信息",type:"get",server:i,url:"/wxsdk/example/unifiedOrder_openid3.php"}};e.a=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=(n(74),n(19)),a=n(73),s=n(43),o=n(71),r=n(72),c=n(70),u=(n.n(c),n(75)),l=n.n(u);i.a.use(o.a),i.a.use(r.a),new i.a({el:"#app",router:a.a,store:s.a,template:"<App/>",components:{App:l.a}})},function(t,e,n){"use strict";var i=n(184),a=n.n(i),s={install:function(t,e){var n=t.extend(a.a),i=(new n).$mount();document.body.appendChild(i.$el),t.prototype.$confirm=function(t,e,n,a){return i.confirm(t,e,n,a)}}};e.a=s},function(t,e,n){"use strict";var i=n(185),a=n.n(i),s={install:function(t,e){var n=t.extend(a.a),i=(new n).$mount();document.body.appendChild(i.$el),t.prototype.$guide=function(t,e,n){return i.guide(t,e,n)}}};e.a=s},function(t,e,n){"use strict";var i=n(186),a=n.n(i),s={install:function(t,e){var n=t.extend(a.a),i=(new n).$mount();document.body.appendChild(i.$el),t.prototype.$loading=function(t){return i.active(t)},t.prototype.$loading.clear=function(){i.disband()}}};e.a=s},function(t,e,n){"use strict";var i=n(50),a=n.n(i),s=n(49),o=n.n(s),r=n(26),c=n.n(r),u=n(76),l=n.n(u),d=n(94);window.Promise=c.a;var f={install:function(t,e){var n=[],i=l.a.create({timeout:2e4,headers:{"Content-Type":"application/json"}});i.interceptors.request.use(function(t){return t},function(t){return c.a.reject(t)}),t.prototype.$request=function(t,e){var s=this,r=d.a[t];if(r){n.length||this.$loading("");var u=r.type||"post",l=r.url,f=0;if(/:/.test(l)){var v=!0,p=!1,m=void 0;try{for(var h,_=o()(a()(e));!(v=(h=_.next()).done);v=!0){var g=h.value,w=new RegExp(":"+g);e[g]&&(l=l.replace(w,e[g]))}}catch(t){p=!0,m=t}finally{try{!v&&_.return&&_.return()}finally{if(p)throw m}}f=1}l=l.replace(/\/:[0-9a-zA-Z_]*/,"");var x=""+r.server+l,y=Math.random().toString().replace(/^0./,"");return n.push(y),e=e||{},new c.a(function(t,a){var o={method:u,url:x};"post"===u&&(o.data=e),"get"!==u||f||(o.params=e),i(o).then(function(e){console.log(e),200!=e.data.status&&(s.$toast(e.data.message),a(e.data)),t(e.data)}).catch(function(t){a(t),s.$toast("网络信号弱，请检查网络设置")}).finally(function(){n.removeItem(y),n.length||s.$loading.clear()})})}}}};e.a=f},function(t,e,n){"use strict";var i=n(187),a=n.n(i),s={install:function(t,e){var n=t.extend(a.a),i=(new n).$mount();document.body.appendChild(i.$el),t.prototype.$status=function(t,e,n,a,s,o,r){return i.status(t,e,n,a,s,o,r)}}};e.a=s},function(t,e,n){"use strict";var i=n(50),a=n.n(i),s=n(125),o=n.n(s),r=n(49),c=n.n(r);e.a={install:function(t,e){var n={get:function(t){var e=void 0;if("string"==typeof t&&(e=window.localStorage.getItem(t)),t instanceof Array){e=[];var n=!0,i=!1,a=void 0;try{for(var s,o=c()(t);!(n=(s=o.next()).done);n=!0){var r=s.value;e.push(window.localStorage.getItem(r))}}catch(t){i=!0,a=t}finally{try{!n&&o.return&&o.return()}finally{if(i)throw a}}}return e},set:function(t,e){if("string"==typeof t&&window.localStorage.setItem(t,e),"object"===(void 0===t?"undefined":o()(t))){var n=!0,i=!1,s=void 0;try{for(var r,u=c()(a()(t));!(n=(r=u.next()).done);n=!0){var l=r.value;window.localStorage.setItem(l,t[l])}}catch(t){i=!0,s=t}finally{try{!n&&u.return&&u.return()}finally{if(i)throw s}}}},remove:function(t){"string"==typeof t&&(result=window.localStorage.removeItem(t))},clear:function(){window.localStorage.clear()}};t.prototype.$storage=n}}},function(t,e,n){"use strict";var i=n(188),a=n.n(i),s={install:function(t,e){var n=t.extend(a.a),i=(new n).$mount();document.body.appendChild(i.$el),t.prototype.$toast=function(t){return i.toast(t)}}};e.a=s},function(t,e,n){"use strict";var i=n(183),a=n.n(i),s=n(182),o=n.n(s);e.a=[{path:"/",component:a.a,name:"main",meta:{title:"微信测试"}},{path:"/main",name:"main",component:a.a,meta:{title:"微信测试"}},{path:"/detail",name:"detail",component:o.a,meta:{title:"微信测试详情"}}]},function(t,e,n){"use strict";var i=n(124),a=n.n(i),s={list:[]},o={setList:function(t,e){t.list=e}},r={change:function(t,e){var n=t.state,i=t.commit,s=[].concat(a()(n.list)),o=s.length;if(e){var r=s.indexOf(e);r>=0?s.splice(r+1,o-r-1):s.push(e)}i("setList",s)}};e.a={namespaced:!0,state:s,mutations:o,actions:r}},function(t,e,n){"use strict";var i=n(19),a=new i.a,s={userInfoDetail:{}},o={getUserInfo:function(t,e){t.userInfoDetail=a.$storage.get("userInfo")}},r={getUserInfoActive:function(t,e){t.state;(0,t.commit)("getUserInfo")}};e.a={namespaced:!0,state:s,mutations:o,actions:r}},function(t,e){Array.prototype.removeItem=function(t){for(var e=0;e<this.length;e++)if(this[e]===t){this.splice(e,1);break}}},function(t,e){},function(t,e){window.vueSingleDirectiveProp=function(t){return t||""===t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(121),a=n.n(i),s=n(69);n.n(s);e.default={data:function(){return{userOpenId:"",token:""}},mounted:function(){var t=this;if(this.$storage.get("code"))window.sessionStorage.getItem("token")||this.$request("wxauth",{code:this.$storage.get("code")}).then(function(e){e.user.openid?(t.userOpenId=e.user.openid,window.sessionStorage.setItem("token",e.access_token),window.sessionStorage.setItem("userInfo",a()(e.user)),t.$store.dispatch("userInfo/getUserInfoActive")):(t.$storage.clear(),t.$router.push({name:"main"}),n.i(s.setTimeout)(function(){window.location.reload()},500))});else{var e=encodeURIComponent("http://www.shijianguanlixueyuan.com/wechart","utf-8");window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe5240862be6104be&redirect_uri="+e+"&response_type=code&scope=snsapi_userinfo&state=12#wechat_redirect"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{handleClick:function(t){this.$emit("click",t)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"frame-view-float",props:{z:{type:Number,required:!0,validator:function(t){return!(t<120||t>190)}},title:String},data:function(){return{}},computed:{withBtnBottom:function(){return!!this.$slots["btn-bottom"]},withBtnCustom:function(){return!!this.$slots["btn-bottom-custom"]}},methods:{handleBtnBackClick:function(t){this.$back()},handleContentScroll:function(t){var e=t.target;e.scrollHeight-e.scrollTop-e.clientHeight<10&&this.$emit("scrollEnd")}},created:function(){},mounted:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["transparent"],data:function(){return{}},computed:{isTransparent:function(){return vueSingleDirectiveProp(this.transparent)}},methods:{},mounted:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){this.$request("wechartClass").then(function(t){console.log(t)})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{userInfo:{openid:"",headimgurl:"",nickname:"",sex:"",ts:"",unionid:""}}},mounted:function(){this.$request("wechartClass").then(function(t){t.data})},methods:{handleClick:function(){this.userInfo=JSON.parse(window.sessionStorage.getItem("userInfo")),console.log(this.userInfo)},onBridgeReady:function(t){WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:t.appId,timeStamp:t.timeStamp,nonceStr:t.nonceStr,package:t.package,signType:t.signType,paySign:t.paySign},function(t){"get_brand_wcpay_request:ok"==t.err_msg?paySuccessCallback():"get_brand_wcpay_request:cancel"==t.err_msg?alert("已取消支付"):alert("支付失败")})},timestamp:function(){return Date.parse(new Date)},handlePay1:function(){var t=JSON.parse(window.sessionStorage.getItem("userInfo"));this.$request("UnifiedOrderApi1",{openid:t.openid}).then(function(t){var e=t.data;console.log(e)})},handlePay2:function(){var t=JSON.parse(window.sessionStorage.getItem("userInfo"));this.$request("UnifiedOrderApi2",{openid:t.openid}).then(function(t){var e=t.data;console.log(e)})},handlePay3:function(){var t=JSON.parse(window.sessionStorage.getItem("userInfo"));this.$request("UnifiedOrderApi3",{openid:t.openid}).then(function(t){var e=t.data;console.log(e)})},handlePay:function(){var t=this,e=JSON.parse(window.sessionStorage.getItem("userInfo"));this.$request("UnifiedOrderApi",{openid:e.openid}).then(function(e){var n=e.data;console.log(n);var i={appId:n.appid,timeStamp:t.timestamp(),nonceStr:n.nonce_str,package:"prepay_id="+n.prepay_id,signType:"HMAC-SHA256",paySign:n.sign};"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",t.onBridgeReady(i),!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",t.onBridgeReady(i)),document.attachEvent("onWeixinJSBridgeReady",t.onBridgeReady(i))):t.onBridgeReady(i)})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(26),a=n.n(i),s={data:function(){return{isActive:!1,title:"",content:"",declineText:"",acceptText:"",onAccept:null,onDecline:null}},methods:{handleAccept:function(){this.isActive=!1,this.onAccept()},handleDeceline:function(){this.isActive=!1,this.onDecline()},decline:function(){this.isActive=!1,this.onDecline()},accept:function(){"function"==typeof this.onAccept&&this.onAccept()},confirm:function(t,e,n,i){var s=this;return new a.a(function(a,o){s.isActive=!0,s.title=t,s.content=e,s.declineText=n||"取消",s.acceptText=i||"确认",s.onAccept=function(){a()},s.onDecline=function(){o()}})}}};e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(26),a=n.n(i),s={data:function(){return{isActive:!1,title:"",content:"",buttonText:"",onAccept:null,onDecline:null}},methods:{handleAccept:function(){this.isActive=!1,this.onAccept()},handleDeceline:function(){this.isActive=!1,this.onDecline()},decline:function(){this.isActive=!1,this.onDecline()},accept:function(){"function"==typeof this.onAccept&&this.onAccept()},guide:function(t,e,n,i){var s=this;return new a.a(function(i,a){s.isActive=!0,s.title=t,s.content=e,s.buttonText=n||"确定",s.onAccept=function(){i()},s.onDecline=function(){a()}})}}};e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{isActive:!1}},methods:{active:function(t){this.text=t,this.isActive=!0},disband:function(){this.isActive=!1}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{isActive:!1,state:1,header:"",mainTips:"",subTips:"",btnText:"确定",caller:null}},methods:{status:function(t,e,n,i,a,s,o){this.caller=t,this.state=e,this.header=n,this.mainTips=i,this.subTips=a,this.btnText=s,o&&(this.$slots.default=o),this.isActive=!0},handleBtnClick:function(){this.isActive=!1,this.caller&&this.caller.$back()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{text:"",isActive:!1}},methods:{toast:function(t){var e=this;this.text=t,this.isActive=!0,setTimeout(function(){e.isActive=!1},1800)}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,n){n(166);var i=n(4)(n(110),n(189),"data-v-08af2ee8",null);t.exports=i.exports},function(t,e,n){n(169);var i=n(4)(n(111),n(192),"data-v-3cba76fe",null);t.exports=i.exports},function(t,e,n){n(175);var i=n(4)(n(112),n(198),"data-v-d6205418",null);t.exports=i.exports},function(t,e,n){n(170);var i=n(4)(n(113),n(193),"data-v-439106d7",null);t.exports=i.exports},function(t,e,n){n(173);var i=n(4)(n(114),n(196),"data-v-93e1b152",null);t.exports=i.exports},function(t,e,n){n(174);var i=n(4)(n(115),n(197),"data-v-ac2af3ac",null);t.exports=i.exports},function(t,e,n){n(172);var i=n(4)(n(116),n(195),"data-v-6fc2a662",null);t.exports=i.exports},function(t,e,n){n(171);var i=n(4)(n(117),n(194),"data-v-6f7df9bc",null);t.exports=i.exports},function(t,e,n){n(168);var i=n(4)(n(118),n(191),"data-v-1cf164b0",null);t.exports=i.exports},function(t,e,n){n(167);var i=n(4)(n(119),n(190),"data-v-0e4fd510",null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"ck-button-inline",on:{click:t.handleClick}},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",[t.isActive?n("div",{class:["toast-wrapper",{}]},[n("div",{staticClass:"toast"},[t._v("\n            "+t._s(t.text)+"\n        ")])]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isActive?n("div",{directives:[{name:"theme",rawName:"v-theme:background",value:0,expression:"0",arg:"background"},{name:"theme",rawName:"v-theme:border",arg:"border"},{name:"theme",rawName:"v-theme:color",arg:"color"}],class:["status",{"status-success":t.state,"status-failure":!t.state}]},[n("div",{directives:[{name:"theme",rawName:"v-theme:background",arg:"background"},{name:"theme",rawName:"v-theme:color",arg:"color"}],staticClass:"header"},[t._v(t._s(t.header))]),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"icons"},[n("i",{directives:[{name:"theme",rawName:"v-theme:color",value:t.state?200:400,expression:"state?200:400",arg:"color"}],class:["iconfont",t.state?"icon-status-check":"icon-status-error"]})]),t._v(" "),n("div",{staticClass:"tips"},[n("div",{staticClass:"main-tips"},[n("span",{directives:[{name:"theme",rawName:"v-theme:color",value:t.state?200:400,expression:"state?200:400",arg:"color"}],class:t.state?"tips-success":"tips-failure"},[t._v(t._s(t.mainTips))])]),t._v(" "),n("div",{directives:[{name:"theme",rawName:"v-theme:color",value:2,expression:"2",arg:"color"}],staticClass:"sub-tips",domProps:{innerHTML:t._s(t.subTips)}})]),t._v(" "),n("div",{staticClass:"btns"},[n("ck-button",{attrs:{outline:""},on:{click:t.handleBtnClick}},[t._v(t._s(t.btnText))])],1)]),t._v(" "),n("service-bottom")],1):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",[n("div",{ref:"main",class:["frame-view-float",{"with-btn-bottom":t.withBtnBottom||t.withBtnCustom}],style:{zIndex:t.z}},[n("div",{staticClass:"frame-view-float-header"},[n("div",{staticClass:"btns-left"},[n("button-inline",{staticClass:"btn-back",on:{click:t.handleBtnBackClick}},[n("i",{staticClass:"iconfont icon-back"})])],1),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"btns-right"},[t._t("btns-right")],2)]),t._v(" "),n("div",{ref:"content",staticClass:"frame-view-float-content",on:{scroll:t.handleContentScroll}},[t._t("default")],2)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"detail"},[t._v("\n\n    detail\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isActive?n("fullscreen-dialog",{staticClass:"loading",attrs:{transparent:""}},[n("div",{staticClass:"loading-wrapper"},[n("div",{staticClass:"loading-content"},[n("div",{staticClass:"icon"},[n("i",{staticClass:"back"}),t._v(" "),n("i",{staticClass:"front"})])]),t._v(" "),t.text?n("div",{staticClass:"text-content"},[t._v("\n            "+t._s(t.text)+"\n        ")]):t._e()])]):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isActive?n("fullscreen-dialog",{staticClass:"ck-guide"},[n("div",{staticClass:"guide-wrapper"},[n("div",{directives:[{name:"theme",rawName:"v-theme:color",value:0,expression:"0",arg:"color"}],staticClass:"btn-close",on:{click:t.handleDeceline}},[n("i",[t._v("×")])]),t._v(" "),n("div",{directives:[{name:"theme",rawName:"v-theme:color",arg:"color"}],staticClass:"guide-title"},[t._v("\n            "+t._s(t.title)+"\n        ")]),t._v(" "),n("div",{directives:[{name:"theme",rawName:"v-theme:color",value:2,expression:"2",arg:"color"}],staticClass:"guide-content"},[t._v("\n            "+t._s(t.content)+"\n        ")]),t._v(" "),n("div",{staticClass:"guide-btn"},[n("ck-button",{on:{click:t.handleAccept}},[t._v(t._s(t.buttonText))])],1)])]):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("button",{on:{click:t.handleClick}},[t._v("点击获取用户信息")]),t._v(" "),n("div",[t._v("\n        用户信息openid： "+t._s(this.userInfo.openid)+" "),n("br"),t._v("\n        headimgurl : "+t._s(this.userInfo.headimgurl)+" "),n("br"),t._v("\n        nickname :"+t._s(this.userInfo.nickname)+" "),n("br"),t._v("\n        sex: "+t._s(this.userInfo.sex)+" "),n("br"),t._v("\n        ts :"+t._s(this.userInfo.ts)+" "),n("br"),t._v("\n        unionid: "+t._s(this.userInfo.unionid)+" "),n("br")]),t._v(" "),n("button",{on:{click:t.handlePay1}},[t._v("支付订单1")]),t._v(" "),n("button",{on:{click:t.handlePay2}},[t._v("支付订单2")]),t._v(" "),n("button",{on:{click:t.handlePay3}},[t._v("支付订单3")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isActive?n("fullscreen-dialog",{staticClass:"ck-confirm"},[n("div",{staticClass:"confirm-wrapper"},[n("div",{directives:[{name:"theme",rawName:"v-theme:color",arg:"color"}],staticClass:"confirm-title"},[t._v("\n            "+t._s(t.title)+"\n        ")]),t._v(" "),n("div",{directives:[{name:"theme",rawName:"v-theme:color",value:2,expression:"2",arg:"color"}],staticClass:"confirm-content"},[t._v("\n            "+t._s(t.content)+"\n        ")]),t._v(" "),n("div",{staticClass:"confirm-btns"},[n("button",{directives:[{name:"theme",rawName:"v-theme:color",arg:"color"}],on:{click:t.handleDeceline}},[t._v(t._s(t.declineText))]),t._v(" "),n("button",{directives:[{name:"theme",rawName:"v-theme:color",value:11,expression:"11",arg:"color"}],on:{click:t.handleAccept}},[t._v(t._s(t.acceptText))])])])]):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",[n("div",{class:["fullscreen-dialog",{"is-transparent":t.isTransparent}]},[n("div",{staticClass:"dialog"},[t._t("default")],2)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fillcontain",attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}}]),[95]);