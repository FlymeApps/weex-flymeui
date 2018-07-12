// { "framework": "Vue" }

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["npm/weex-flymeui/components/fm-button/index"]=t():e["npm/weex-flymeui/components/fm-button/index"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=71)}({0:function(e,t){e.exports=function(e,t,n,o,r){var i,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,a=e.default);var u,c="function"==typeof a?a.options:a;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),o&&(c._scopeId=o),r?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=u):n&&(u=n),u){var l=c.functional,d=l?c.render:c.beforeCreate;l?c.render=function(e,t){return u.call(t),d(e,t)}:c.beforeCreate=d?[].concat(d,u):[u]}return{esModule:i,exports:a,options:c}}},1:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(o),i=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[n].concat(i).concat([r]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},10:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(e){return e&&e.__esModule?e:{default:e}}(n(4));var i=weex.requireModule("dom");t.default={name:"FmIcon",props:{name:{default:"wancheng",type:String},value:{type:String,default:""},iconStyle:{type:[Number,Object,String],default:42},color:{type:String,default:"#666666"}},data:function(){return{Icon:r.default}},computed:{getIcon:function(){var e=this.Icon,t=this.name,n=this.value;return s(""===n?e[t]||"wancheng":n)},mergeStyle:function(){var e=this.iconStyle,t={fontFamily:"flymeicon",color:this.color};return"object"!==Object.prototype.toString.call(this.iconStyle).slice(8,-1).toLowerCase()?(t.fontSize=e+"px",t.height=e+"px"):t=Object.assign({},t,o({},e)),t}},beforeCreate:function(){this.isCreator||i.addRule("fontFace",{fontFamily:"flymeicon",src:"url('http://weixin-res.flyme.cn/resources/weex-flymeui/assets/iconfont.ttf')"})},methods:{itemClicked:function(e){this.$emit("fmIconClicked",{name:e})}}};var a=/&([^;]{2,});?/g,s=function(e){return e=e.replace(a,function(e,t){if("#"===t.charAt(0)){var n=0;if(n="x"===t.charAt(1).toLowerCase()?parseInt(t.slice(2),16):parseInt(t.slice(1),10),!isNaN(n)&&n>=-32768&&n<=65535)return String.fromCharCode(n)}return e})}},11:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("text",{staticStyle:e.$processStyle(void 0),style:e.$processStyle(e.mergeStyle),on:{click:function(t){e.itemClicked(e.name)}}},[e._v(e._s(e.getIcon))])},staticRenderFns:[]},e.exports.render._withStripped=!0},14:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={primaryColor:"#198DED",disabledColor:"#BDE2FB",highlightColor:"#156DC9",lightColor:"#42A2F1",weakColor:"#E6F8FF",grayColor:"#F2F3F4",fontColorLight:"#FFFFFF",fontColorDark:"#3D3D3D",fontColorGray:"#F2F3F4"}},2:function(e,t,n){var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r=n(3),i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,c=!1,l=function(){},d=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e){for(var t=0;t<e.length;t++){var n=e[t],o=i[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(b(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var a=[];for(r=0;r<n.parts.length;r++)a.push(b(n.parts[r]));i[n.id]={id:n.id,refs:1,parts:a}}}}function x(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function b(e){var t,n,o=document.querySelector("style["+f+'~="'+e.id+'"]');if(o){if(c)return l;o.parentNode.removeChild(o)}if(p){var r=u++;o=s||(s=x()),t=g.bind(null,o,r,!1),n=g.bind(null,o,r,!0)}else o=x(),t=function(e,t){var n=t.css,o=t.media,r=t.sourceMap;o&&e.setAttribute("media",o);d.ssrId&&e.setAttribute(f,t.id);r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}e.exports=function(e,t,n,o){c=n,d=o||{};var a=r(e,t);return h(a),function(t){for(var n=[],o=0;o<a.length;o++){var s=a[o];(u=i[s.id]).refs--,n.push(u)}t?h(a=r(e,t)):a=[];for(o=0;o<n.length;o++){var u;if(0===(u=n[o]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete i[u.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function g(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=m(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},3:function(e,t){e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=i[0],s={id:e+":"+r,css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={biaoqing:"&#xe6a3;",bofang:"&#xe6a4;",bianji:"&#xe6a5;",bofang2:"&#xe6a7;",cebianlan:"&#xe6a7;",caijian:"&#xe6a8;",chakan:"&#xe6a9;",chexiao:"&#xe6aa;",chuangkouhua:"&#xe6ab;",daojishi:"&#xe6ac;",dianzan:"&#xe6ad;",chuangkouhua2:"&#xe6ae;",dianhua:"&#xe6af;",diannao:"&#xe6b0;",dingwei2:"&#xe6b1;",dingwei:"&#xe6b2;",dingyue:"&#xe6b3;",erweima:"&#xe6b4;",fanhui:"&#xe6b5;",fasong:"&#xe6b6;",fujian:"&#xe6b7;",fenlei:"&#xe6b8;",fanhui2:"&#xeb9;",fenxiang:"&#xe6ba;",fuzhi:"&#xe6bb;",gengduo:"&#xe6bc;",gouwuche:"&#xe6bd;",gongjuxiang:"&#xe6be;",gengduo2:"&#xe6bf;",guanbi:"&#xe6c0;",jishi:"&#xe6c1;",hongxin:"&#xe6c2;",jingyin:"&#xe6c3;",jianpan:"&#xe6c3;",jiesuo:"&#xe6c5;",jisuanqi:"&#xe6c36;",liangdu:"&#xe6c7;",lvjing:"&#xe6c8;",paixu:"&#xe6c9;",paihang:"&#xe6ca;",paizhao:"&#xe6cb;",pingmutoushe:"&#xe6cc;",riqi:"&#xe6cd;",shanchu:"&#xe6ce;",shangchaun:"&#xe6cf;",shangyishou:"&#xe6d0;",shezhi:"&#xe6d1;",shizhong:"&#xe6d2;",shezhi1:"&#xe6d3;",sousuo:"&#xe6d4;",shuqian:"&#xe6d5;",shuoming:"&#xe6d6;",shuaxin:"&#xe6d7;",suoding:"&#xe6d8;",shipin:"&#xe6d9;",tuichu:"&#xe6da;",tupian:"&#xe6db;",tianjia:"&#xe6dc;",tixing:"&#xe6dd;",wancheng:"&#xe6de;",wengao:"&#xe6df;",xiayishou:"&#xe6e0;",xinxi:"&#xe6e1;",xiazai:"&#xe6e2;",xingxing:"&#xe6e3;",xinxi1:"&#xe6e4;",xuanxiangliebiao:"&#xe6e5;",yidu:"&#xe6e6;",yinliang:"&#xe6e7;",yinbi:"&#xe6e8;",yuyin:"&#xe6e9;",zanting:"&#xe6ea;",yonghu:"&#xe6eb;",youjian:"&#xe6ec;",zhiding:"&#xe6ed;",chongzuo:"&#xe6ee;",zhuye:"&#xe6ef;",ziti:"&#xe6f0;",VPN:"&#xe6f1;","Wi-Fi":"&#xe6f2;",zhuti:"&#xe6f3;",lanya:"&#xe6f4;",quanping:"&#xe6f5;",pingmufanzhuan:"&#xe6f6;",gouwu:"&#xe6f7;",saomiao:"&#xe6f8;"}},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(7);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(o).default}})},7:function(e,t,n){var o=!1;var r=n(0)(n(10),n(11),function(e){o||n(8)},"data-v-77aa90fe",null);r.options.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-icon/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},71:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(72);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(o).default}})},72:function(e,t,n){var o=!1;var r=n(0)(n(75),n(76),function(e){o||n(73)},"data-v-45eab412",null);r.options.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-button/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},73:function(e,t,n){var o=n(74);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(2)("0b7bcbf2",o,!1,{})},74:function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"\n.fm-button[data-v-45eab412] {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  overflow: hidden;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-transition-property: backgroundColor,-webkit-transform;\n  transition-property: backgroundColor,-webkit-transform;\n  transition-property: transform,backgroundColor;\n  transition-property: transform,backgroundColor,-webkit-transform;\n  -webkit-transition-duration: 0.2s;\n          transition-duration: 0.2s;\n  -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n          transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.fm-button-hollow[data-v-45eab412] {\n  border-width: 0.03704rem;\n}\n.button-text[data-v-45eab412] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  text-align: center;\n  color: #FFFFFF;\n  font-weight: 500;\n  font-family: sans-serif-medium;\n}\n.fm-button-small[data-v-45eab412] {\n  height: 0.66667rem;\n  border-radius: 0.33333rem;\n}\n.fm-button-middle[data-v-45eab412] {\n  width: 2.88889rem;\n  height: 1.05556rem;\n  border-radius: 0.52778rem;\n}\n.fm-button-large[data-v-45eab412] {\n  width: 3.66667rem;\n  height: 1.05556rem;\n  border-radius: 0.52778rem;\n}\n.fm-button-circle[data-v-45eab412] {\n  width: 1.55556rem;\n  height: 1.55556rem;\n  border-radius: 0.77778rem;\n}\n.fm-button-huge[data-v-45eab412] {\n  width: 6.66667rem;\n  height: 1.05556rem;\n  border-radius: 0.52778rem;\n}\n.button-text-small[data-v-45eab412] {\n  font-size: 0.33333rem;\n}\n.button-text-middle[data-v-45eab412],\n.button-text-large[data-v-45eab412],\n.button-text-huge[data-v-45eab412] {\n  font-size: 0.44444rem;\n}\n.overlay[data-v-45eab412] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 30;\n  border-radius: 1.85185rem;\n}\n.overlay[data-v-45eab412]:active {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n",""])},75:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(14)),r=i(n(6));function i(e){return e&&e.__esModule?e:{default:e}}var a=weex.requireModule("dom");t.default={name:"FmButton",components:{FmIcon:r.default},props:{size:{type:String,default:"small"},type:String,color:{type:String,default:o.default.primaryColor},titleColor:{type:String,default:"#FFFFFF"},titleSize:{type:Number,default:0},icon:{type:String,default:"wancheng"},width:Number,height:Number,animated:Boolean,disabled:Boolean,title:String},data:function(){return{active:!1,padding:36}},computed:{buttonClass:function(){var e=[];return this.size&&e.push("fm-button-"+this.size),this.type&&e.push("fm-button-"+this.type),e},computedColor:function(){return this.color||o.default.primaryColor},computedStyle:function(){var e=this.color,t=this.active,n=this.disabled,o=this.padding,r=this.animated,i=this.type,a=this.width,s=this.height,u={borderColor:"hollow"===i?e:"",backgroundColor:"hollow"!==i?e:"",opacity:n?.2:1,transform:!r||n?"scale(1)":"scale("+(t?.95:1)+")",paddingLeft:o+"px",paddingRight:o+"px"};return"circle"!==i&&(a&&(u.width=a+"px"),s&&(u.height=s+"px")&&(u.borderRadius=Math.ceil(1e3*s/2e3)+"px")),u}},methods:{btnClick:function(e){!this.disabled&&this.$emit("buttonClicked",e)},_startHandle:function(e){this.active=!0},_endHandle:function(e){this.active=!1}},mounted:function(){var e=this;this.$nextTick(function(){a.getComponentRect(e.$refs["fm-button"],function(t){t.size.width>=240&&(e.padding=24)})})}}},76:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"fm-button",staticClass:"fm-button",class:e.buttonClass,staticStyle:e.$processStyle(void 0),style:e.$processStyle(e.computedStyle),on:{click:e.btnClick,touchstart:e._startHandle,touchend:e._endHandle}},[e.disabled?e._e():n("div",{staticClass:"overlay",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),on:{click:e.btnClick}}),e._v(" "),"circle"===e.type?n("fm-icon",{staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{color:"hollow"!==e.type?e.titleColor:e.color,name:e.icon,"icon-style":"72"}}):e._t("title",[n("text",{staticClass:"button-text",class:["button-text-"+e.size],staticStyle:e.$processStyle(void 0),style:e.$processStyle(Object.assign({},{color:"hollow"!==e.type?e.titleColor:e.computedColor},e.titleSize?{fontSize:e.titleSize}:{}))},[e._t("default"),e.$slots.default?e._e():[e._v(e._s(e.title))]],2)])],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},8:function(e,t,n){var o=n(9);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(2)("1a663314",o,!1,{})},9:function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"\n\n\n\n\n\n\n",""])}})});