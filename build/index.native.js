// { "framework": "Vue" }

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["npm/@flyme/weex-ui/index"] = factory();
	else
		root["npm/@flyme/weex-ui/index"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FmTips = exports.FmTabView = exports.FmInput = exports.FmButton = exports.FmSlider = exports.FmIcon = exports.FmText = exports.FmTag = exports.FmSwitch = undefined;

var _fmSwitch = __webpack_require__(1);

var _fmSwitch2 = _interopRequireDefault(_fmSwitch);

var _fmTag = __webpack_require__(7);

var _fmTag2 = _interopRequireDefault(_fmTag);

var _fmText = __webpack_require__(12);

var _fmText2 = _interopRequireDefault(_fmText);

var _fmIcon = __webpack_require__(17);

var _fmIcon2 = _interopRequireDefault(_fmIcon);

var _fmSlider = __webpack_require__(21);

var _fmSlider2 = _interopRequireDefault(_fmSlider);

var _fmButton = __webpack_require__(26);

var _fmButton2 = _interopRequireDefault(_fmButton);

var _fmInput = __webpack_require__(31);

var _fmInput2 = _interopRequireDefault(_fmInput);

var _fmTabView = __webpack_require__(36);

var _fmTabView2 = _interopRequireDefault(_fmTabView);

var _fmTips = __webpack_require__(41);

var _fmTips2 = _interopRequireDefault(_fmTips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.FmSwitch = _fmSwitch2.default;
exports.FmTag = _fmTag2.default;
exports.FmText = _fmText2.default;
exports.FmIcon = _fmIcon2.default;
exports.FmSlider = _fmSlider2.default;
exports.FmButton = _fmButton2.default;
exports.FmInput = _fmInput2.default;
exports.FmTabView = _fmTabView2.default;
exports.FmTips = _fmTips2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(2);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(3)
)

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(6)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-mzui/packages/fm-switch/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-04ed8910"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
  "fm-switch": {
    "flexDirection": "row",
    "alignItems": "center",
    "width": 100,
    "height": 50,
    "borderRadius": 25
  },
  "ctr-ball": {
    "width": 34,
    "height": 34,
    "borderRadius": 17
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _theme = __webpack_require__(5);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var animation = weex.requireModule('animation');

exports.default = {
  name: 'fm-switch',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      isAnimate: false,
      focusColor: '#198ded',
      blurColor: '#7e97ac',
      ballStyle: {
        backgroundColor: this.blurColor
      }
    };
  },

  computed: {
    getBgStyle: function getBgStyle() {
      var style = this.theme === 'default' ? {
        borderWidth: 4,
        borderColor: '#7e97ac'
      } : _theme.THEME[this.theme];
      if (this.disabled) {
        style.opacity = 0.3;
      } else {
        style.opacity = 1;
      }
      return style;
    }
  },
  methods: {
    changeState: function changeState(e) {
      if (this.isAnimate || this.disabled) return;
      this.checked = !this.checked;
      this.toggleState();
      this.$emit('change', this.checked);
    },
    toggleState: function toggleState() {
      var _ref,
          _this = this;

      this.isAnimate = true;
      var style = this.checked ? (_ref = {
        backgroundColor: this.focusColor,
        transform: 'scale(1)'
      }, _defineProperty(_ref, 'transform', 'translate(50px, 0)'), _defineProperty(_ref, 'transformOrigin', 'center center'), _ref) : {
        backgroundColor: this.blurColor,
        transform: 'scale(0.6)',
        transformOrigin: 'center center'
      };
      var ctrBall = this.$refs.ctrBall;
      animation.transition(ctrBall, {
        styles: style,
        timingFunction: 'ease',
        duration: 260
      }, function () {
        _this.isAnimate = false;
      });
    }
  },
  mounted: function mounted() {
    var bgStyle = this.bgStyle,
        focusColor = this.focusColor,
        blurColor = this.blurColor;

    if (this.theme !== 'default') {
      this.focusColor = this.blurColor = '#fff';
    }
    this.checked ? this.ballStyle = _defineProperty({
      backgroundColor: this.focusColor,
      transform: 'scale(1.0)'
    }, 'transform', 'translate(50px, 0)') : this.ballStyle = {
      backgroundColor: this.blurColor,
      transform: 'scale(0.6)'
    };
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var THEME = exports.THEME = {
    blue: {
        backgroundColor: '#269cfc'
    },
    limegreen: {
        backgroundColor: '#58cc82'
    },
    seagreen: {
        backgroundColor: '#2bcdd9'
    },
    gray: {
        backgroundColor: '#8ca4ba'
    },
    crimson: {
        backgroundColor: '#db674b'
    },
    firebrick: {
        backgroundColor: '#fc474a'
    },
    tomato: {
        backgroundColor: '#fc723f'
    },
    coral: {
        backgroundColor: '#ffcd45'
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["fm-switch"],
    style: _vm.getBgStyle,
    on: {
      "click": _vm.changeState
    }
  }, [_c('div', {
    ref: "ctrBall",
    staticClass: ["ctr-ball"],
    style: _vm.ballStyle
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(8);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(9)
)

/* script */
__vue_exports__ = __webpack_require__(10)

/* template */
var __vue_template__ = __webpack_require__(11)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-mzui/packages/fm-tag/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-d3878ea8"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
  "fm-tag": {
    "alignItems": "flex-start"
  },
  "tag-item": {
    "paddingTop": 7,
    "paddingRight": 7,
    "paddingBottom": 7,
    "paddingLeft": 7,
    "justifyContent": "center",
    "alignItems": "center",
    "overflow": "hidden"
  },
  "tag-border": {
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4
  },
  "tag-hollow": {
    "borderWidth": 1
  },
  "tag-text": {
    "fontFamily": "\"Source Han Sans CN\", Roboto, sans-serif",
    "fontWeight": "bold"
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    type: {
      type: String,
      default: 'solid'
    },
    size: {
      type: String,
      default: 'small'
    },
    value: {
      type: [String, Number],
      default: '标签'
    },
    color: {
      type: String,
      default: '#198ded'
    },
    fontColor: {
      type: String,
      default: '#fff'
    }
  },
  computed: {
    showSolid: function showSolid() {
      var type = this.type,
          value = this.value;

      return type === 'solid' && value !== '';
    },
    showHollow: function showHollow() {
      var type = this.type,
          value = this.value;

      return type === 'hollow' && value !== '';
    },
    tagTextStyle: function tagTextStyle() {
      var color = this.color,
          showSolid = this.showSolid;

      return showSolid ? { backgroundColor: color } : { borderColor: color };
    },
    textStyle: function textStyle() {
      var fontColor = this.fontColor,
          size = this.size;

      return { color: fontColor, fontSize: size === 'small' ? '19px' : '21px' };
    }
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["fm-tag"],
    style: {
      margin: _vm.size === 'small' ? '2.34px' : '4.68px'
    }
  }, [(_vm.showSolid || _vm.showHollow) ? _c('div', {
    class: ['tag-item', 'tag-border', _vm.showHollow && 'tag-hollow'],
    style: _vm.tagTextStyle
  }, [_c('text', {
    ref: "content",
    staticClass: ["tag-text"],
    style: _vm.textStyle
  }, [_vm._v(_vm._s(_vm.value))])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(13);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(14)
)

/* script */
__vue_exports__ = __webpack_require__(15)

/* template */
var __vue_template__ = __webpack_require__(16)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-mzui/packages/fm-text/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0f38dc71"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {
  "text": {
    "fontSize": 29.17,
    "lineHeight": 43,
    "color": "#999999",
    "fontFamily": "\"Source Han Sans CN\", Roboto, sans-serif"
  },
  "medium": {
    "fontWeight": "500"
  },
  "bold": {
    "fontWeight": "700"
  },
  "light": {
    "fontWeight": "400",
    "lineHeight": 38
  },
  "title": {
    "fontSize": 33,
    "fontWeight": "500",
    "lineHeight": 48,
    "color": "#000000"
  },
  "small": {
    "fontSize": 25
  },
  "large": {
    "fontSize": 33,
    "fontWeight": "500",
    "lineHeight": 50,
    "color": "#000000"
  },
  "huge": {
    "fontSize": 38,
    "lineHeight": 56,
    "color": "#000000"
  }
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: {
        text: [String, Number],
        medium: Boolean,
        bold: Boolean,
        light: Boolean,
        title: Boolean,
        small: Boolean,
        large: Boolean,
        huge: Boolean
    },

    computed: {
        textClz: function textClz() {
            var clz = ['text'];
            if (this.medium) {
                clz.push('medium');
            }
            if (this.light) {
                clz.push('light');
            }
            if (this.title) {
                clz.push('title');
            }
            if (this.bold) {
                clz.push('bold');
            }
            if (this.small) {
                clz.push('small');
            }
            if (this.large) {
                clz.push('large');
            }
            if (this.huge) {
                clz.push('huge');
            }

            return clz;
        }
    }
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    class: _vm.textClz
  }, [_vm._v(_vm._s(_vm.text))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(18);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(19)

/* template */
var __vue_template__ = __webpack_require__(20)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-mzui/packages/fm-icon/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//

var dom = weex.requireModule('dom');
exports.default = {
  props: {
    size: {
      type: Number,
      default: 34
    },
    color: {
      type: String,
      default: '#000000'
    }
  },
  computed: {
    style: function style() {
      return {
        fontFamily: 'flymeicon',
        color: this.color,
        fontSize: this.size + 'px'
      };
    }
  },
  created: function created() {
    dom.addRule('fontFace', {
      'fontFamily': 'flymeicon',
      'src': "url('http://172.17.201.32:8082//iconfont.ttf')"
    });
  }
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    style: _vm.style,
    on: {
      "click": function (e) { return _vm.$emit('click', e); },
      "longpress": function (e) { return _vm.$emit('longpress', e); }
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(22);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(23)
)

/* script */
__vue_exports__ = __webpack_require__(24)

/* template */
var __vue_template__ = __webpack_require__(25)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-mzui/packages/fm-slider/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-193d88e5"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {
  "slider-wrap": {
    "paddingRight": 15.75,
    "paddingLeft": 15.75
  },
  "level-text-wrap": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "marginBottom": -15
  },
  "level-text": {
    "flex": 1,
    "paddingTop": 5,
    "paddingBottom": 5,
    "textAlign": "center"
  },
  "all": {
    "height": 6.25,
    "marginTop": 30,
    "backgroundColor": "#e6e6e6"
  },
  "selected": {
    "marginTop": -6.25,
    "height": 6.25,
    "backgroundColor": "#198ded"
  },
  "dot-wrap": {
    "height": 60,
    "width": 80,
    "marginTop": -33,
    "marginLeft": -40,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "dot": {
    "height": 31.25,
    "width": 31.25,
    "backgroundColor": "#198ded",
    "borderRadius": 30
  },
  "num": {
    "width": 54.2,
    "height": 54.2,
    "marginLeft": -27.1,
    "borderRadius": 55,
    "backgroundColor": "#198ded",
    "color": "#ffffff",
    "fontSize": 29.2,
    "fontWeight": "700",
    "textAlign": "center",
    "lineHeight": 54
  }
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var dom = weex.requireModule('dom');

exports.default = {
	data: function data() {
		return {
			transX: 0,
			startX: 0,
			max: 0,
			per: 0,
			comparePer: 0,
			progressOpacity: 0,
			progressText: null,
			levelAlias: 0
		};
	},


	props: {
		level: [String, Number],
		levelTexts: Array,
		showProgress: Boolean,
		vertical: Boolean,
		value: {
			type: [String, Number],
			default: 0
		}
	},

	computed: {
		textStyle: function textStyle() {
			return {
				width: this.max + this.per + 'px',
				'margin-left': -this.per / 2 + 'px'
			};
		},
		dotStyle: function dotStyle() {
			return {
				transform: 'translateX(' + this.transX + 'px)'
			};
		},
		selStyle: function selStyle() {
			return {
				width: this.transX + 'px'
			};
		},
		progressStyle: function progressStyle() {
			return {
				transform: 'translateX(' + this.transX + 'px)',
				opacity: this.progressOpacity
			};
		}
	},

	created: function created() {
		this.screen = 'screenY'; //this.vertical ? 'screenY' : 'screenX'
	},
	mounted: function mounted() {
		var _this = this;

		setTimeout(function () {
			dom.getComponentRect(_this.$refs.bg, function (opt) {

				_this.max = opt.size.width;

				if (_this.levelTexts) {
					_this.levelAlias = Math.max(_this.levelTexts.length - 1, 0);
				} else {
					_this.levelAlias = _this.level;
				}

				if (_this.levelAlias && _this.levelAlias > 0) {
					_this.per = _this.max / _this.levelAlias;
					_this.comparePer = _this.per / 2;
				}

				_this.transX = _this.per ? _this.per * _this.value : _this.max * _this.value / 100;
				console.log(_this.transX);
			});
		}, 100);
	},


	methods: {
		levelClick: function levelClick(idx) {
			this.transX = Math.min(this.per * idx, this.max);
			this.end();
		},
		start: function start(event) {
			this.startX = event.changedTouches[0].screenX;
			this.progressOpacity = 1;
		},
		move: function move(event) {
			var x = +event.changedTouches[0].screenX;
			var sub = x - this.startX;
			var target = void 0;

			if (this.per) {
				if (Math.abs(sub) >= this.comparePer) {
					target = this.transX + (sub > 0 ? this.per : -this.per);
					this.startX = target;
				}
			} else {
				target = this.transX + sub;
				this.startX = x;
			}

			if (target !== undefined) {
				this.transX = Math.min(Math.max(target, 0), this.max);
			}

			this.progressText = this.per ? Math.round(this.transX / this.per) : Math.floor(this.transX / this.max * 100);
		},
		end: function end(event) {
			this.progressOpacity = 0;
			this.$emit('selected', {
				rate: this.transX / this.max,
				level: this.per ? Math.round(this.transX / this.per) : 0
			});
		}
	}
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["slider-wrap"]
  }, [(!!_vm.levelTexts && this.per) ? _c('div', {
    staticClass: ["level-text-wrap"],
    style: _vm.textStyle
  }, _vm._l((_vm.levelTexts), function(text, idx) {
    return _c('text', {
      staticClass: ["level-text"],
      on: {
        "click": function($event) {
          _vm.levelClick(idx)
        }
      }
    }, [_vm._v(_vm._s(text))])
  })) : (_vm.showProgress) ? _c('text', {
    staticClass: ["num"],
    style: _vm.progressStyle
  }, [_vm._v(_vm._s(_vm.progressText))]) : _vm._e(), _c('div', {
    ref: "bg",
    staticClass: ["all"]
  }), _c('div', {
    staticClass: ["selected"],
    style: _vm.selStyle
  }), _c('div', {
    staticClass: ["dot-wrap"],
    style: _vm.dotStyle,
    on: {
      "touchmove": _vm.move,
      "touchstart": _vm.start,
      "touchend": _vm.end
    }
  }, [_c('div', {
    staticClass: ["dot"]
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(27);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(28)
)

/* script */
__vue_exports__ = __webpack_require__(29)

/* template */
var __vue_template__ = __webpack_require__(30)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-mzui/packages/fm-button/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-454b7414"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {
  "fm-btn-wrap": {
    "height": 50,
    "alignItems": "center",
    "flexDirection": "row",
    "maxWidth": 208.3333
  },
  "fm-btn": {
    "height": 50,
    "paddingLeft": 25,
    "paddingRight": 25,
    "lineHeight": 50,
    "borderRadius": 50,
    "fontSize": 29.1667,
    "fontWeight": "700",
    "textAlign": "center",
    "opacity": 0
  },
  "fm-btn-small": {
    "width": 100
  },
  "fm-btn-large": {
    "paddingLeft": 16.6667,
    "paddingRight": 16.6667
  },
  "fm-btn-max": {
    "width": 208.3333
  }
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var small_size = 100; //48dp
var large_size = 166.6667; //80dp
var max_size = 208.3333; //100dp
var dis_color = '#cccccc';
var transparent = 'transparent';

exports.default = {
	data: function data() {
		return {
			large: false,
			small: false,
			max: false,
			show: false
		};
	},


	props: {
		text: String,
		bgColor: {
			type: String,
			default: '#198ded'
		},
		color: {
			type: String,
			default: '#ffffff'
		},
		disabled: Boolean
	},

	computed: {
		btnClz: function btnClz() {
			var clz = [];

			if (this.large) {
				clz.push('fm-btn-large');
			}
			if (this.small) {
				clz.push('fm-btn-small');
			}
			if (this.max) {
				clz.push('fm-btn-max');
			}

			return clz;
		},
		btnStyle: function btnStyle() {
			var sty = {};

			if (this.bgColor != transparent) {
				sty.backgroundColor = this.bgColor;
			}
			if (this.color) {
				sty.color = this.color;
				if (this.bgColor == transparent) {
					sty.borderColor = this.color;
					sty.borderWidth = '3px';
					sty.borderStyle = 'solid';
				}
			}
			if (this.disabled) {
				sty.backgroundColor = dis_color;
			}
			if (this.show) {
				sty.opacity = 1;
			}

			return sty;
		}
	},

	methods: {
		btnClick: function btnClick(evt) {
			if (!this.disabled) {
				this.$emit('click', evt);
			}
		}
	},

	mounted: function mounted() {
		var w = this.text.length * 29.1667 + 50;

		if (w < small_size) {
			this.small = true;
		} else if (w > large_size) {
			this.large = true;
		}

		if (w >= max_size) {
			this.max = true;
		}

		this.show = true;
	}
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["fm-btn-wrap"]
  }, [_c('text', {
    ref: "text",
    staticClass: ["fm-btn"],
    class: _vm.btnClz,
    style: _vm.btnStyle,
    on: {
      "click": _vm.btnClick
    }
  }, [_vm._v(_vm._s(_vm.text))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(32);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(33)
)

/* script */
__vue_exports__ = __webpack_require__(34)

/* template */
var __vue_template__ = __webpack_require__(35)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-mzui/packages/fm-input/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-20f0931c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = {
  "fm-input-wrap": {
    "paddingTop": 50,
    "paddingRight": 12.5,
    "paddingLeft": 12.5
  },
  "fm-textarea": {
    "paddingBottom": 18.75,
    "paddingRight": 16.67,
    "paddingLeft": 16.67,
    "borderBottomStyle": "solid",
    "borderBottomWidth": 2.5,
    "borderBottomColor": "#E6E6E6",
    "fontSize": 33.33,
    "lineHeight": 50,
    "color": "#000000",
    "placeholderColor": "#dddddd",
    "caretColor": "#198ded",
    "borderBottomColor:focus": "#198ded"
  },
  "fm-textarea-error": {
    "borderBottomColor": "#df2b18"
  },
  "error-msg": {
    "fontSize": 25,
    "color": "#df2b18",
    "marginLeft": 16.67
  }
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var dom = weex.requireModule('dom');

exports.default = {
	data: function data() {
		return {
			rows: 1
		};
	},


	props: {
		value: [String, Number],
		placeholder: {
			type: String,
			default: '请输入'
		},
		maxlength: [String, Number],
		hasError: Boolean,
		errorMessage: {
			type: 'String',
			default: '输入有误'
		},
		type: String
	},

	computed: {
		inputClz: function inputClz() {
			var clz = ['fm-textarea'];
			if (this.hasError) {
				clz.push('fm-textarea-error');
			}
			return clz;
		}
	},

	methods: {
		input: function input(evt) {
			this.$emit('input', evt);
		},
		change: function change(evt) {
			this.$emit('change', evt);
		},
		focus: function focus(evt) {
			this.$emit('focus', evt);
		},
		blur: function blur(evt) {
			this.$emit('blur', evt);
		}
	}
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["fm-input-wrap"]
  }, [(_vm.type === 'textarea') ? _c('textarea', {
    ref: "input",
    class: _vm.inputClz,
    attrs: {
      "value": _vm.value,
      "rows": _vm.rows,
      "maxlength": _vm.maxlength,
      "placeholder": _vm.placeholder
    },
    on: {
      "input": _vm.input,
      "change": _vm.change,
      "focus": _vm.focus,
      "blur": _vm.blur
    }
  }) : _c('input', {
    ref: "input",
    class: _vm.inputClz,
    attrs: {
      "type": _vm.type,
      "value": _vm.value,
      "maxlength": _vm.maxlength,
      "placeholder": _vm.placeholder
    },
    on: {
      "input": _vm.input,
      "change": _vm.change,
      "focus": _vm.focus,
      "blur": _vm.blur
    }
  }), (_vm.hasError) ? _c('text', {
    staticClass: ["error-msg"]
  }, [_vm._v(_vm._s(_vm.errorMessage))]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(37);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(38)
)

/* script */
__vue_exports__ = __webpack_require__(39)

/* template */
var __vue_template__ = __webpack_require__(40)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-mzui/packages/fm-tab-view/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-c1759ebe"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = {
  "header-wrap": {
    "marginTop": 18.75,
    "marginRight": 45.83,
    "marginLeft": 45.83
  },
  "header": {
    "flexDirection": "row",
    "justifyContent": "center"
  },
  "title": {
    "flex": 1,
    "flexDirection": "row",
    "justifyContent": "center"
  },
  "text-selected": {
    "color": "#f34949"
  },
  "text": {
    "fontSize": 29.17,
    "fontWeight": "700",
    "textAlign": "center",
    "color": "#666666"
  },
  "bottom-line": {
    "height": 5,
    "marginTop": 18.75,
    "backgroundColor": "#f34949"
  },
  "slider-wrap": {
    "flexDirection": "row",
    "borderTopWidth": 2,
    "borderColor": "#dddddd"
  }
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var dom = weex.requireModule('dom');
var animation = weex.requireModule('animation');

exports.default = {
	data: function data() {
		return {
			width: 0, //单个tab宽度
			min: 0,
			transX: 0,
			startX: 0,
			moveX: 0,
			current: 0, //当前tab index
			lineWidth: 0, //标题下划线宽度
			lineLeft: 0,
			line: 0 //标题下划线translate计算比例
		};
	},

	props: {
		items: {
			type: Array,
			required: true
		}
	},
	computed: {
		lineStyle: function lineStyle() {
			return {
				width: this.lineWidth + 'px',
				'margin-left': this.lineLeft + 'px',
				transform: 'translateX(' + -this.transX / this.line + 'px)'
			};
		},
		listStyle: function listStyle() {
			var sty = {
				opacity: this.width === 0 ? 0 : 1
			};

			if (this.width > 0) {
				sty.width = this.width * this.items.length + 'px';
				sty.transform = 'translateX(' + this.transX + 'px)';
			}

			return sty;
		},
		itemStyle: function itemStyle() {
			return {
				width: (this.width || 750) + 'px'
			};
		}
	},
	mounted: function mounted() {
		var _this = this;

		setTimeout(function () {
			var platform = weex.config.env.platform;

			var head = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && platform.toLowerCase() === 'web' ? _this.$refs.header.$children[0].$children[0] : _this.$refs.header.children[0].children[0];
			dom.getComponentRect(head, function (opt) {
				_this.lineWidth = opt.size.width + 25;
				_this.lineLeft = opt.size.left - 46 - 12.5;
			});
			dom.getComponentRect(_this.$refs.slider, function (opt) {
				_this.width = opt.size.width;
				_this.line = _this.width / (_this.width - 92) * _this.items.length;
				_this.min = -_this.width * (_this.items.length - 1);
			});
		}, 100);
	},

	methods: {
		titleClick: function titleClick(idx) {
			this.slide(-idx * this.width, -idx);
			this.$emit('titleclick', idx);
		},
		start: function start(evt) {
			if (this.sliding) return;
			this.startX = evt.changedTouches[0].screenX;
			this.moveX = this.startX;
		},
		move: function move(evt) {
			if (this.sliding) return;
			var x = evt.changedTouches[0].screenX;
			var sub = x - this.moveX;

			this.transX = Math.max(this.min, Math.min(0, this.transX + sub));
			this.moveX = x;
		},
		end: function end(evt) {
			this.sliding = true;

			var x = evt.changedTouches[0].screenX;
			var direct = x - this.startX > 0;
			var num = Math.floor(Math.abs(this.transX) / this.width);
			var decimal = this.transX % this.width / this.width;
			var int = this.transX > 0 ? num : -num;
			var max = -this.items.length + 1;

			if (decimal > .2 && direct) {
				int = Math.min(0, int + 1);
			} else if (decimal < -.2 && !direct) {
				int = Math.max(max, int - 1);
			}

			this.slide(int * this.width, int);
		},
		slide: function slide(trans, idx) {
			var _this2 = this;

			animation.transition(this.$refs.slider, {
				styles: {
					transform: 'translateX(' + trans + 'px)'
				},
				duration: 200,
				timingFunction: 'ease-out'
			}, function () {
				_this2.current = -idx;
				_this2.transX = trans;
				_this2.sliding = false;
				_this2.$emit('slidend', { selected: _this2.current });
			});
			animation.transition(this.$refs.line, {
				styles: {
					transform: 'translateX(' + -trans / this.line + 'px)'
				},
				duration: 200,
				timingFunction: 'ease-out'
			});
		}
	}
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["tab-wrap"]
  }, [_c('div', {
    staticClass: ["header-wrap"]
  }, [_c('div', {
    ref: "header",
    staticClass: ["header"]
  }, _vm._l((_vm.items), function(item, idx) {
    return _c('div', {
      key: item.name,
      staticClass: ["title"],
      on: {
        "click": function($event) {
          _vm.titleClick(idx)
        }
      }
    }, [_c('text', {
      class: ['text', idx == _vm.current ? 'text-selected' : '']
    }, [_vm._v(_vm._s(item.text))])])
  })), _c('text', {
    ref: "line",
    staticClass: ["bottom-line"],
    style: _vm.lineStyle
  })]), _c('div', {
    ref: "slider",
    staticClass: ["slider-wrap"],
    style: _vm.listStyle,
    on: {
      "touchmove": _vm.move,
      "touchstart": _vm.start,
      "touchend": _vm.end
    }
  }, _vm._l((_vm.items), function(item, idx) {
    return _c('div', {
      staticClass: ["body"],
      style: _vm.itemStyle
    }, [_vm._t(item.name)], 2)
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(42);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(43)
)

/* script */
__vue_exports__ = __webpack_require__(44)

/* template */
var __vue_template__ = __webpack_require__(45)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-mzui/packages/fm-tips/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1259ce88"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = {
  "tip-wrap": {
    "flexDirection": "row",
    "height": 92,
    "maxWidth": 630,
    "paddingTop": 15
  },
  "arrow": {
    "position": "absolute",
    "top": 7.5,
    "width": 15,
    "height": 15,
    "transform": "rotate(45deg)"
  },
  "content-wrap": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": 18.75,
    "paddingRight": 20.83,
    "paddingBottom": 18.75,
    "paddingLeft": 20.83,
    "borderRadius": 4
  },
  "content": {
    "height": 35,
    "maxWidth": 512,
    "fontSize": 29.17,
    "color": "#ffffff"
  },
  "split": {
    "width": 2,
    "height": 31.25,
    "marginLeft": 20.83,
    "marginRight": 20.83,
    "backgroundColor": "#ffffff",
    "opacity": 0.4
  },
  "close": {
    "width": 31.25,
    "height": 31.25,
    "lineHeight": 32,
    "color": "#ffffff",
    "fontSize": 50,
    "transform": "rotate(45deg)"
  }
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
	data: function data() {
		return {
			show: true
		};
	},


	computed: {
		background: function background() {
			return {
				backgroundColor: this.bgColor
			};
		},
		wrapStyle: function wrapStyle() {
			return {
				'justify-content': this.right ? 'flex-end' : 'flex-start'
			};
		},
		arrowStyle: function arrowStyle() {
			var sty = {
				backgroundColor: this.bgColor
			};
			if (this.right) {
				sty.right = '38px';
			} else {
				sty.left = '38px';
			}

			return sty;
		}
	},

	props: {
		message: String,
		bgColor: {
			type: String,
			default: '#198ded'
		},
		right: Boolean
	},

	methods: {
		close: function close() {
			this.show = false;
			this.$emit('close');
		}
	}
};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', {
    staticClass: ["tip-wrap"],
    style: _vm.wrapStyle
  }, [_c('div', {
    staticClass: ["content-wrap"],
    style: _vm.background
  }, [_vm._t("default"), _c('text', {
    staticClass: ["content"]
  }, [_vm._v(_vm._s(_vm.message))]), _c('text', {
    staticClass: ["split"]
  }), _c('text', {
    staticClass: ["close"],
    on: {
      "click": _vm.close
    }
  }, [_vm._v("+")])], 2), _c('text', {
    staticClass: ["arrow"],
    style: _vm.arrowStyle
  })]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.native.js.map