// { "framework": "Vue" }

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["npm/@flyme/weex-flymeui/example/index"] = factory();
	else
		root["npm/@flyme/weex-flymeui/example/index"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 150);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(16);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(20);

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

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(12);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by Tw93 on 2017/6/26.
 */
var UrlParser = __webpack_require__(57);
var Utils = {
  UrlParser: UrlParser,
  /**
   * 对象类型
   * @memberOf Utils
   * @param obj
   * @returns {string}
   * @private
   */
  _typeof: function _typeof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  },


  /**
   * 判断 obj 是否为 `object`
   * @memberOf Utils
   * @param obj
   * @returns {boolean}
   * @example
   *
   * const { Utils } = require('@ali/wxv-bridge');
   * const { isPlainObject } = Utils;
   * console.log(isPlainObject({})); // true
   * console.log(isPlainObject('')); // false
   */
  isPlainObject: function isPlainObject(obj) {
    return Utils._typeof(obj) === 'object';
  },


  /**
   * 判断 obj 是否为 `string`
   * @memberOf Utils
   * @param obj
   * @returns {boolean}
   * @example
   *
   * const { Utils } = require('@ali/wxv-bridge');
   * const { isString } = Utils;
   * console.log(isString({})); // false
   * console.log(isString('')); // true
   */
  isString: function isString(obj) {
    return typeof obj === 'string';
  },


  /**
   * 判断 obj 是否为 `非空数组`
   * @memberOf Utils
   * @param obj
   * @returns {boolean}
   * @example
   *
   * const { Utils } = require('@ali/wxv-bridge');
   * const { isNonEmptyArray } = Utils;
   * console.log(isNonEmptyArray([])); // false
   * console.log(isNonEmptyArray([1,1,1,1])); // true
   */
  isNonEmptyArray: function isNonEmptyArray() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
  },
  appendProtocol: function appendProtocol(url) {
    if (/^\/\//.test(url)) {
      var bundleUrl = weex.config.bundleUrl;

      return 'http' + (/^https:/.test(bundleUrl) ? 's' : '') + ':' + url;
    }
    return url;
  },
  encodeURLParams: function encodeURLParams(url) {
    var parsedUrl = new UrlParser(url, true);
    return parsedUrl.toString();
  },
  goToH5Page: function goToH5Page(jumpUrl) {
    var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var Navigator = weex.requireModule('navigator');
    var jumpUrlObj = new Utils.UrlParser(jumpUrl, true);
    var url = Utils.appendProtocol(jumpUrlObj.toString());
    Navigator.push({
      url: Utils.encodeURLParams(url),
      animated: animated
    }, callback);
  }
};
module.exports = Utils;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FmImage = exports.FmFoldableText = exports.FmSpecialRichText = exports.FmRichText = exports.FmTips = exports.FmTabView = exports.FmInput = exports.FmButton = exports.FmSlider = exports.FmIcon = exports.FmText = exports.FmTag = exports.FmSwitch = undefined;

var _fmSwitch = __webpack_require__(6);

var _fmSwitch2 = _interopRequireDefault(_fmSwitch);

var _fmTag = __webpack_require__(2);

var _fmTag2 = _interopRequireDefault(_fmTag);

var _fmText = __webpack_require__(0);

var _fmText2 = _interopRequireDefault(_fmText);

var _fmIcon = __webpack_require__(1);

var _fmIcon2 = _interopRequireDefault(_fmIcon);

var _fmSlider = __webpack_require__(26);

var _fmSlider2 = _interopRequireDefault(_fmSlider);

var _fmButton = __webpack_require__(31);

var _fmButton2 = _interopRequireDefault(_fmButton);

var _fmInput = __webpack_require__(36);

var _fmInput2 = _interopRequireDefault(_fmInput);

var _fmTabView = __webpack_require__(41);

var _fmTabView2 = _interopRequireDefault(_fmTabView);

var _fmTips = __webpack_require__(46);

var _fmTips2 = _interopRequireDefault(_fmTips);

var _fmRichText = __webpack_require__(51);

var _fmRichText2 = _interopRequireDefault(_fmRichText);

var _fmSpecialRichText = __webpack_require__(62);

var _fmSpecialRichText2 = _interopRequireDefault(_fmSpecialRichText);

var _fmFoldableText = __webpack_require__(67);

var _fmFoldableText2 = _interopRequireDefault(_fmFoldableText);

var _fmImage = __webpack_require__(72);

var _fmImage2 = _interopRequireDefault(_fmImage);

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
exports.FmRichText = _fmRichText2.default;
exports.FmSpecialRichText = _fmSpecialRichText2.default;
exports.FmFoldableText = _fmFoldableText2.default;
exports.FmImage = _fmImage2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(7);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(8)
)

/* script */
__vue_exports__ = __webpack_require__(9)

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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-switch/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5ab3654c"
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
/* 8 */
/***/ (function(module, exports) {

module.exports = {
  "fm-switch": {
    "flexDirection": "row",
    "alignItems": "center",
    "width": 48,
    "height": 24,
    "borderRadius": 24
  },
  "ctr-ball": {
    "width": 16,
    "height": 16,
    "borderRadius": 8
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _theme = __webpack_require__(10);

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
        borderWidth: 2,
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
      }, _defineProperty(_ref, 'transform', 'translate(24px, 0)'), _defineProperty(_ref, 'transformOrigin', 'center center'), _ref) : {
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
    }, 'transform', 'translate(24px, 0)') : this.ballStyle = {
      backgroundColor: this.blurColor,
      transform: 'scale(0.6)'
    };
  }
};

/***/ }),
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(13)
)

/* script */
__vue_exports__ = __webpack_require__(14)

/* template */
var __vue_template__ = __webpack_require__(15)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-tag/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-f51b0150"
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
/* 13 */
/***/ (function(module, exports) {

module.exports = {
  "fm-tag": {
    "alignItems": "flex-start"
  },
  "tag-item": {
    "paddingTop": 3,
    "paddingRight": 3,
    "paddingBottom": 3,
    "paddingLeft": 3,
    "justifyContent": "center",
    "alignItems": "center",
    "overflow": "hidden"
  },
  "tag-border": {
    "borderBottomLeftRadius": 1.5,
    "borderBottomRightRadius": 1.5,
    "borderTopLeftRadius": 1.5,
    "borderTopRightRadius": 1.5
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
/* 14 */
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
    tagType: {
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
      var tagType = this.tagType,
          value = this.value;

      return tagType === 'solid' && value !== '';
    },
    showHollow: function showHollow() {
      var tagType = this.tagType,
          value = this.value;

      return tagType === 'hollow' && value !== '';
    },
    tagTextStyle: function tagTextStyle() {
      var color = this.color,
          showSolid = this.showSolid;

      return showSolid ? { backgroundColor: color } : { borderColor: color };
    },
    textStyle: function textStyle() {
      var fontColor = this.fontColor,
          size = this.size;

      return { color: fontColor, fontSize: size === 'small' ? '8px' : '10px' };
    }
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["fm-tag"],
    style: {
      margin: _vm.size === 'small' ? '1px' : '1.5px'
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(17)
)

/* script */
__vue_exports__ = __webpack_require__(18)

/* template */
var __vue_template__ = __webpack_require__(19)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-text/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-06cb6b45"
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
/* 17 */
/***/ (function(module, exports) {

module.exports = {
  "text": {
    "fontSize": 14,
    "lineHeight": 21,
    "color": "#999999",
    "fontFamily": "\"Source Han Sans CN\", Roboto, sans-serif"
  },
  "medium": {
    "fontFamily": "sans-serif-medium",
    "fontWeight": "500"
  },
  "bold": {
    "fontWeight": "700"
  },
  "light": {
    "fontWeight": "400",
    "lineHeight": 18
  },
  "title": {
    "fontSize": 16,
    "fontWeight": "500",
    "lineHeight": 23,
    "color": "#000000"
  },
  "small": {
    "fontSize": 12
  },
  "large": {
    "fontSize": 16,
    "fontWeight": "500",
    "lineHeight": 24,
    "color": "#000000"
  },
  "huge": {
    "fontSize": 18,
    "lineHeight": 27,
    "color": "#000000"
  },
  "margin-text": {
    "marginRight": 3
  }
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        textValue: [String, Number],
        medium: Boolean,
        bold: Boolean,
        light: Boolean,
        title: Boolean,
        small: Boolean,
        large: Boolean,
        huge: Boolean,
        textStyle: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        hasTextMargin: {
            type: Boolean,
            default: true
        }
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
            if (this.hasTextMargin) {
                clz.push('margin-text');
            }
            return clz;
        },
        getStyle: function getStyle() {
            return _extends({}, this.textStyle);
        }
    }
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    class: _vm.textClz,
    style: _vm.getStyle
  }, [_vm._v(_vm._s(_vm.textValue))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(21)
)

/* script */
__vue_exports__ = __webpack_require__(22)

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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-icon/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-9aba98de"
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
/* 21 */
/***/ (function(module, exports) {

module.exports = {
  "fm-image": {
    "width": 43,
    "height": 12,
    "marginRight": 6
  }
}

/***/ }),
/* 22 */
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

var dom = weex.requireModule('dom');
// 引入he模块，使用它解决weex-template-compiler在编译阶段进行decode
var he = __webpack_require__(23);
exports.default = {
  props: {
    value: {
      type: String,
      default: ''
    },
    iconStyle: {
      type: [Number, Object],
      default: 14
    },
    color: {
      type: String,
      default: '#000000'
    }
  },
  data: function data() {
    return {
      width: 43
    };
  },
  computed: {
    computedStyle: function computedStyle() {
      if (Object.prototype.toString.call(this.iconStyle).slice(8, -1).toLowerCase() !== 'object') {
        this.iconStyle = { height: 12 };
      }
      var width = this.width,
          iconStyle = this.iconStyle;

      if (iconStyle && iconStyle.width && iconStyle.height) {
        return {
          width: iconStyle.width + 'px',
          height: iconStyle.height + 'px'
        };
      } else {
        return {
          width: width + 'px',
          height: iconStyle.height + 'px'
        };
      }
    },
    isImg: function isImg() {
      var value = this.value;

      if (value.indexOf("http") === 0 || value.indexOf("//") === 0) {
        return true;
      }
      return false;
    },
    getStyle: function getStyle() {
      var iconStyle = this.iconStyle;

      var style = { fontFamily: 'flymeicon', color: this.color };
      if (Object.prototype.toString.call(this.iconStyle).slice(8, -1).toLowerCase() === 'object') {
        iconStyle.size && (style.fontSize = iconStyle.size + 'px');
        iconStyle.lineHeight && (style.lineHeight = iconStyle.lineHeight + 'px');
      } else {
        style.fontSize = iconStyle;
      }
      return style;
    },

    // 匹配对应的字体图标的unicode
    getFontName: function getFontName() {
      return he.decode(this.value);
    }
  },
  created: function created() {
    dom.addRule('fontFace', {
      'fontFamily': 'flymeicon',
      'src': "url('http://weixin.res.flyme.cn/upload/iconfont.ttf')"
    });
  },

  methods: {
    onLoad: function onLoad(e) {
      if (e.success && e.size && e.size.naturalWidth > 0) {
        var width = e.size.naturalWidth;
        var height = e.size.naturalHeight;
        this.width = width * (this.iconStyle.height / height);
      }
    }
  }
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! https://mths.be/he v1.1.1 by @mathias | MIT license */
;(function (root) {

	// Detect free variables `exports`.
	var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports;

	// Detect free variable `module`.
	var freeModule = ( false ? 'undefined' : _typeof(module)) == 'object' && module && module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`.
	var freeGlobal = (typeof {} === 'undefined' ? 'undefined' : _typeof({})) == 'object' && {};
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	// All astral symbols.
	var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
	// All ASCII symbols (not just printable ASCII) except those listed in the
	// first column of the overrides table.
	// https://html.spec.whatwg.org/multipage/syntax.html#table-charref-overrides
	var regexAsciiWhitelist = /[\x01-\x7F]/g;
	// All BMP symbols that are not ASCII newlines, printable ASCII symbols, or
	// code points listed in the first column of the overrides table on
	// https://html.spec.whatwg.org/multipage/syntax.html#table-charref-overrides.
	var regexBmpWhitelist = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g;

	var regexEncodeNonAscii = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g;
	var encodeMap = { '\xAD': 'shy', '\u200C': 'zwnj', '\u200D': 'zwj', '\u200E': 'lrm', '\u2063': 'ic', '\u2062': 'it', '\u2061': 'af', '\u200F': 'rlm', '\u200B': 'ZeroWidthSpace', '\u2060': 'NoBreak', '\u0311': 'DownBreve', '\u20DB': 'tdot', '\u20DC': 'DotDot', '\t': 'Tab', '\n': 'NewLine', '\u2008': 'puncsp', '\u205F': 'MediumSpace', '\u2009': 'thinsp', '\u200A': 'hairsp', '\u2004': 'emsp13', '\u2002': 'ensp', '\u2005': 'emsp14', '\u2003': 'emsp', '\u2007': 'numsp', '\xA0': 'nbsp', '\u205F\u200A': 'ThickSpace', '\u203E': 'oline', '_': 'lowbar', '\u2010': 'dash', '\u2013': 'ndash', '\u2014': 'mdash', '\u2015': 'horbar', ',': 'comma', ';': 'semi', '\u204F': 'bsemi', ':': 'colon', '\u2A74': 'Colone', '!': 'excl', '\xA1': 'iexcl', '?': 'quest', '\xBF': 'iquest', '.': 'period', '\u2025': 'nldr', '\u2026': 'mldr', '\xB7': 'middot', '\'': 'apos', '\u2018': 'lsquo', '\u2019': 'rsquo', '\u201A': 'sbquo', '\u2039': 'lsaquo', '\u203A': 'rsaquo', '"': 'quot', '\u201C': 'ldquo', '\u201D': 'rdquo', '\u201E': 'bdquo', '\xAB': 'laquo', '\xBB': 'raquo', '(': 'lpar', ')': 'rpar', '[': 'lsqb', ']': 'rsqb', '{': 'lcub', '}': 'rcub', '\u2308': 'lceil', '\u2309': 'rceil', '\u230A': 'lfloor', '\u230B': 'rfloor', '\u2985': 'lopar', '\u2986': 'ropar', '\u298B': 'lbrke', '\u298C': 'rbrke', '\u298D': 'lbrkslu', '\u298E': 'rbrksld', '\u298F': 'lbrksld', '\u2990': 'rbrkslu', '\u2991': 'langd', '\u2992': 'rangd', '\u2993': 'lparlt', '\u2994': 'rpargt', '\u2995': 'gtlPar', '\u2996': 'ltrPar', '\u27E6': 'lobrk', '\u27E7': 'robrk', '\u27E8': 'lang', '\u27E9': 'rang', '\u27EA': 'Lang', '\u27EB': 'Rang', '\u27EC': 'loang', '\u27ED': 'roang', '\u2772': 'lbbrk', '\u2773': 'rbbrk', '\u2016': 'Vert', '\xA7': 'sect', '\xB6': 'para', '@': 'commat', '*': 'ast', '/': 'sol', 'undefined': null, '&': 'amp', '#': 'num', '%': 'percnt', '\u2030': 'permil', '\u2031': 'pertenk', '\u2020': 'dagger', '\u2021': 'Dagger', '\u2022': 'bull', '\u2043': 'hybull', '\u2032': 'prime', '\u2033': 'Prime', '\u2034': 'tprime', '\u2057': 'qprime', '\u2035': 'bprime', '\u2041': 'caret', '`': 'grave', '\xB4': 'acute', '\u02DC': 'tilde', '^': 'Hat', '\xAF': 'macr', '\u02D8': 'breve', '\u02D9': 'dot', '\xA8': 'die', '\u02DA': 'ring', '\u02DD': 'dblac', '\xB8': 'cedil', '\u02DB': 'ogon', '\u02C6': 'circ', '\u02C7': 'caron', '\xB0': 'deg', '\xA9': 'copy', '\xAE': 'reg', '\u2117': 'copysr', '\u2118': 'wp', '\u211E': 'rx', '\u2127': 'mho', '\u2129': 'iiota', '\u2190': 'larr', '\u219A': 'nlarr', '\u2192': 'rarr', '\u219B': 'nrarr', '\u2191': 'uarr', '\u2193': 'darr', '\u2194': 'harr', '\u21AE': 'nharr', '\u2195': 'varr', '\u2196': 'nwarr', '\u2197': 'nearr', '\u2198': 'searr', '\u2199': 'swarr', '\u219D': 'rarrw', '\u219D\u0338': 'nrarrw', '\u219E': 'Larr', '\u219F': 'Uarr', '\u21A0': 'Rarr', '\u21A1': 'Darr', '\u21A2': 'larrtl', '\u21A3': 'rarrtl', '\u21A4': 'mapstoleft', '\u21A5': 'mapstoup', '\u21A6': 'map', '\u21A7': 'mapstodown', '\u21A9': 'larrhk', '\u21AA': 'rarrhk', '\u21AB': 'larrlp', '\u21AC': 'rarrlp', '\u21AD': 'harrw', '\u21B0': 'lsh', '\u21B1': 'rsh', '\u21B2': 'ldsh', '\u21B3': 'rdsh', '\u21B5': 'crarr', '\u21B6': 'cularr', '\u21B7': 'curarr', '\u21BA': 'olarr', '\u21BB': 'orarr', '\u21BC': 'lharu', '\u21BD': 'lhard', '\u21BE': 'uharr', '\u21BF': 'uharl', '\u21C0': 'rharu', '\u21C1': 'rhard', '\u21C2': 'dharr', '\u21C3': 'dharl', '\u21C4': 'rlarr', '\u21C5': 'udarr', '\u21C6': 'lrarr', '\u21C7': 'llarr', '\u21C8': 'uuarr', '\u21C9': 'rrarr', '\u21CA': 'ddarr', '\u21CB': 'lrhar', '\u21CC': 'rlhar', '\u21D0': 'lArr', '\u21CD': 'nlArr', '\u21D1': 'uArr', '\u21D2': 'rArr', '\u21CF': 'nrArr', '\u21D3': 'dArr', '\u21D4': 'iff', '\u21CE': 'nhArr', '\u21D5': 'vArr', '\u21D6': 'nwArr', '\u21D7': 'neArr', '\u21D8': 'seArr', '\u21D9': 'swArr', '\u21DA': 'lAarr', '\u21DB': 'rAarr', '\u21DD': 'zigrarr', '\u21E4': 'larrb', '\u21E5': 'rarrb', '\u21F5': 'duarr', '\u21FD': 'loarr', '\u21FE': 'roarr', '\u21FF': 'hoarr', '\u2200': 'forall', '\u2201': 'comp', '\u2202': 'part', '\u2202\u0338': 'npart', '\u2203': 'exist', '\u2204': 'nexist', '\u2205': 'empty', '\u2207': 'Del', '\u2208': 'in', '\u2209': 'notin', '\u220B': 'ni', '\u220C': 'notni', '\u03F6': 'bepsi', '\u220F': 'prod', '\u2210': 'coprod', '\u2211': 'sum', '+': 'plus', '\xB1': 'pm', '\xF7': 'div', '\xD7': 'times', '<': 'lt', '\u226E': 'nlt', '<\u20D2': 'nvlt', '=': 'equals', '\u2260': 'ne', '=\u20E5': 'bne', '\u2A75': 'Equal', '>': 'gt', '\u226F': 'ngt', '>\u20D2': 'nvgt', '\xAC': 'not', '|': 'vert', '\xA6': 'brvbar', '\u2212': 'minus', '\u2213': 'mp', '\u2214': 'plusdo', '\u2044': 'frasl', '\u2216': 'setmn', '\u2217': 'lowast', '\u2218': 'compfn', '\u221A': 'Sqrt', '\u221D': 'prop', '\u221E': 'infin', '\u221F': 'angrt', '\u2220': 'ang', '\u2220\u20D2': 'nang', '\u2221': 'angmsd', '\u2222': 'angsph', '\u2223': 'mid', '\u2224': 'nmid', '\u2225': 'par', '\u2226': 'npar', '\u2227': 'and', '\u2228': 'or', '\u2229': 'cap', '\u2229\uFE00': 'caps', '\u222A': 'cup', '\u222A\uFE00': 'cups', '\u222B': 'int', '\u222C': 'Int', '\u222D': 'tint', '\u2A0C': 'qint', '\u222E': 'oint', '\u222F': 'Conint', '\u2230': 'Cconint', '\u2231': 'cwint', '\u2232': 'cwconint', '\u2233': 'awconint', '\u2234': 'there4', '\u2235': 'becaus', '\u2236': 'ratio', '\u2237': 'Colon', '\u2238': 'minusd', '\u223A': 'mDDot', '\u223B': 'homtht', '\u223C': 'sim', '\u2241': 'nsim', '\u223C\u20D2': 'nvsim', '\u223D': 'bsim', '\u223D\u0331': 'race', '\u223E': 'ac', '\u223E\u0333': 'acE', '\u223F': 'acd', '\u2240': 'wr', '\u2242': 'esim', '\u2242\u0338': 'nesim', '\u2243': 'sime', '\u2244': 'nsime', '\u2245': 'cong', '\u2247': 'ncong', '\u2246': 'simne', '\u2248': 'ap', '\u2249': 'nap', '\u224A': 'ape', '\u224B': 'apid', '\u224B\u0338': 'napid', '\u224C': 'bcong', '\u224D': 'CupCap', '\u226D': 'NotCupCap', '\u224D\u20D2': 'nvap', '\u224E': 'bump', '\u224E\u0338': 'nbump', '\u224F': 'bumpe', '\u224F\u0338': 'nbumpe', '\u2250': 'doteq', '\u2250\u0338': 'nedot', '\u2251': 'eDot', '\u2252': 'efDot', '\u2253': 'erDot', '\u2254': 'colone', '\u2255': 'ecolon', '\u2256': 'ecir', '\u2257': 'cire', '\u2259': 'wedgeq', '\u225A': 'veeeq', '\u225C': 'trie', '\u225F': 'equest', '\u2261': 'equiv', '\u2262': 'nequiv', '\u2261\u20E5': 'bnequiv', '\u2264': 'le', '\u2270': 'nle', '\u2264\u20D2': 'nvle', '\u2265': 'ge', '\u2271': 'nge', '\u2265\u20D2': 'nvge', '\u2266': 'lE', '\u2266\u0338': 'nlE', '\u2267': 'gE', '\u2267\u0338': 'ngE', '\u2268\uFE00': 'lvnE', '\u2268': 'lnE', '\u2269': 'gnE', '\u2269\uFE00': 'gvnE', '\u226A': 'll', '\u226A\u0338': 'nLtv', '\u226A\u20D2': 'nLt', '\u226B': 'gg', '\u226B\u0338': 'nGtv', '\u226B\u20D2': 'nGt', '\u226C': 'twixt', '\u2272': 'lsim', '\u2274': 'nlsim', '\u2273': 'gsim', '\u2275': 'ngsim', '\u2276': 'lg', '\u2278': 'ntlg', '\u2277': 'gl', '\u2279': 'ntgl', '\u227A': 'pr', '\u2280': 'npr', '\u227B': 'sc', '\u2281': 'nsc', '\u227C': 'prcue', '\u22E0': 'nprcue', '\u227D': 'sccue', '\u22E1': 'nsccue', '\u227E': 'prsim', '\u227F': 'scsim', '\u227F\u0338': 'NotSucceedsTilde', '\u2282': 'sub', '\u2284': 'nsub', '\u2282\u20D2': 'vnsub', '\u2283': 'sup', '\u2285': 'nsup', '\u2283\u20D2': 'vnsup', '\u2286': 'sube', '\u2288': 'nsube', '\u2287': 'supe', '\u2289': 'nsupe', '\u228A\uFE00': 'vsubne', '\u228A': 'subne', '\u228B\uFE00': 'vsupne', '\u228B': 'supne', '\u228D': 'cupdot', '\u228E': 'uplus', '\u228F': 'sqsub', '\u228F\u0338': 'NotSquareSubset', '\u2290': 'sqsup', '\u2290\u0338': 'NotSquareSuperset', '\u2291': 'sqsube', '\u22E2': 'nsqsube', '\u2292': 'sqsupe', '\u22E3': 'nsqsupe', '\u2293': 'sqcap', '\u2293\uFE00': 'sqcaps', '\u2294': 'sqcup', '\u2294\uFE00': 'sqcups', '\u2295': 'oplus', '\u2296': 'ominus', '\u2297': 'otimes', '\u2298': 'osol', '\u2299': 'odot', '\u229A': 'ocir', '\u229B': 'oast', '\u229D': 'odash', '\u229E': 'plusb', '\u229F': 'minusb', '\u22A0': 'timesb', '\u22A1': 'sdotb', '\u22A2': 'vdash', '\u22AC': 'nvdash', '\u22A3': 'dashv', '\u22A4': 'top', '\u22A5': 'bot', '\u22A7': 'models', '\u22A8': 'vDash', '\u22AD': 'nvDash', '\u22A9': 'Vdash', '\u22AE': 'nVdash', '\u22AA': 'Vvdash', '\u22AB': 'VDash', '\u22AF': 'nVDash', '\u22B0': 'prurel', '\u22B2': 'vltri', '\u22EA': 'nltri', '\u22B3': 'vrtri', '\u22EB': 'nrtri', '\u22B4': 'ltrie', '\u22EC': 'nltrie', '\u22B4\u20D2': 'nvltrie', '\u22B5': 'rtrie', '\u22ED': 'nrtrie', '\u22B5\u20D2': 'nvrtrie', '\u22B6': 'origof', '\u22B7': 'imof', '\u22B8': 'mumap', '\u22B9': 'hercon', '\u22BA': 'intcal', '\u22BB': 'veebar', '\u22BD': 'barvee', '\u22BE': 'angrtvb', '\u22BF': 'lrtri', '\u22C0': 'Wedge', '\u22C1': 'Vee', '\u22C2': 'xcap', '\u22C3': 'xcup', '\u22C4': 'diam', '\u22C5': 'sdot', '\u22C6': 'Star', '\u22C7': 'divonx', '\u22C8': 'bowtie', '\u22C9': 'ltimes', '\u22CA': 'rtimes', '\u22CB': 'lthree', '\u22CC': 'rthree', '\u22CD': 'bsime', '\u22CE': 'cuvee', '\u22CF': 'cuwed', '\u22D0': 'Sub', '\u22D1': 'Sup', '\u22D2': 'Cap', '\u22D3': 'Cup', '\u22D4': 'fork', '\u22D5': 'epar', '\u22D6': 'ltdot', '\u22D7': 'gtdot', '\u22D8': 'Ll', '\u22D8\u0338': 'nLl', '\u22D9': 'Gg', '\u22D9\u0338': 'nGg', '\u22DA\uFE00': 'lesg', '\u22DA': 'leg', '\u22DB': 'gel', '\u22DB\uFE00': 'gesl', '\u22DE': 'cuepr', '\u22DF': 'cuesc', '\u22E6': 'lnsim', '\u22E7': 'gnsim', '\u22E8': 'prnsim', '\u22E9': 'scnsim', '\u22EE': 'vellip', '\u22EF': 'ctdot', '\u22F0': 'utdot', '\u22F1': 'dtdot', '\u22F2': 'disin', '\u22F3': 'isinsv', '\u22F4': 'isins', '\u22F5': 'isindot', '\u22F5\u0338': 'notindot', '\u22F6': 'notinvc', '\u22F7': 'notinvb', '\u22F9': 'isinE', '\u22F9\u0338': 'notinE', '\u22FA': 'nisd', '\u22FB': 'xnis', '\u22FC': 'nis', '\u22FD': 'notnivc', '\u22FE': 'notnivb', '\u2305': 'barwed', '\u2306': 'Barwed', '\u230C': 'drcrop', '\u230D': 'dlcrop', '\u230E': 'urcrop', '\u230F': 'ulcrop', '\u2310': 'bnot', '\u2312': 'profline', '\u2313': 'profsurf', '\u2315': 'telrec', '\u2316': 'target', '\u231C': 'ulcorn', '\u231D': 'urcorn', '\u231E': 'dlcorn', '\u231F': 'drcorn', '\u2322': 'frown', '\u2323': 'smile', '\u232D': 'cylcty', '\u232E': 'profalar', '\u2336': 'topbot', '\u233D': 'ovbar', '\u233F': 'solbar', '\u237C': 'angzarr', '\u23B0': 'lmoust', '\u23B1': 'rmoust', '\u23B4': 'tbrk', '\u23B5': 'bbrk', '\u23B6': 'bbrktbrk', '\u23DC': 'OverParenthesis', '\u23DD': 'UnderParenthesis', '\u23DE': 'OverBrace', '\u23DF': 'UnderBrace', '\u23E2': 'trpezium', '\u23E7': 'elinters', '\u2423': 'blank', '\u2500': 'boxh', '\u2502': 'boxv', '\u250C': 'boxdr', '\u2510': 'boxdl', '\u2514': 'boxur', '\u2518': 'boxul', '\u251C': 'boxvr', '\u2524': 'boxvl', '\u252C': 'boxhd', '\u2534': 'boxhu', '\u253C': 'boxvh', '\u2550': 'boxH', '\u2551': 'boxV', '\u2552': 'boxdR', '\u2553': 'boxDr', '\u2554': 'boxDR', '\u2555': 'boxdL', '\u2556': 'boxDl', '\u2557': 'boxDL', '\u2558': 'boxuR', '\u2559': 'boxUr', '\u255A': 'boxUR', '\u255B': 'boxuL', '\u255C': 'boxUl', '\u255D': 'boxUL', '\u255E': 'boxvR', '\u255F': 'boxVr', '\u2560': 'boxVR', '\u2561': 'boxvL', '\u2562': 'boxVl', '\u2563': 'boxVL', '\u2564': 'boxHd', '\u2565': 'boxhD', '\u2566': 'boxHD', '\u2567': 'boxHu', '\u2568': 'boxhU', '\u2569': 'boxHU', '\u256A': 'boxvH', '\u256B': 'boxVh', '\u256C': 'boxVH', '\u2580': 'uhblk', '\u2584': 'lhblk', '\u2588': 'block', '\u2591': 'blk14', '\u2592': 'blk12', '\u2593': 'blk34', '\u25A1': 'squ', '\u25AA': 'squf', '\u25AB': 'EmptyVerySmallSquare', '\u25AD': 'rect', '\u25AE': 'marker', '\u25B1': 'fltns', '\u25B3': 'xutri', '\u25B4': 'utrif', '\u25B5': 'utri', '\u25B8': 'rtrif', '\u25B9': 'rtri', '\u25BD': 'xdtri', '\u25BE': 'dtrif', '\u25BF': 'dtri', '\u25C2': 'ltrif', '\u25C3': 'ltri', '\u25CA': 'loz', '\u25CB': 'cir', '\u25EC': 'tridot', '\u25EF': 'xcirc', '\u25F8': 'ultri', '\u25F9': 'urtri', '\u25FA': 'lltri', '\u25FB': 'EmptySmallSquare', '\u25FC': 'FilledSmallSquare', '\u2605': 'starf', '\u2606': 'star', '\u260E': 'phone', '\u2640': 'female', '\u2642': 'male', '\u2660': 'spades', '\u2663': 'clubs', '\u2665': 'hearts', '\u2666': 'diams', '\u266A': 'sung', '\u2713': 'check', '\u2717': 'cross', '\u2720': 'malt', '\u2736': 'sext', '\u2758': 'VerticalSeparator', '\u27C8': 'bsolhsub', '\u27C9': 'suphsol', '\u27F5': 'xlarr', '\u27F6': 'xrarr', '\u27F7': 'xharr', '\u27F8': 'xlArr', '\u27F9': 'xrArr', '\u27FA': 'xhArr', '\u27FC': 'xmap', '\u27FF': 'dzigrarr', '\u2902': 'nvlArr', '\u2903': 'nvrArr', '\u2904': 'nvHarr', '\u2905': 'Map', '\u290C': 'lbarr', '\u290D': 'rbarr', '\u290E': 'lBarr', '\u290F': 'rBarr', '\u2910': 'RBarr', '\u2911': 'DDotrahd', '\u2912': 'UpArrowBar', '\u2913': 'DownArrowBar', '\u2916': 'Rarrtl', '\u2919': 'latail', '\u291A': 'ratail', '\u291B': 'lAtail', '\u291C': 'rAtail', '\u291D': 'larrfs', '\u291E': 'rarrfs', '\u291F': 'larrbfs', '\u2920': 'rarrbfs', '\u2923': 'nwarhk', '\u2924': 'nearhk', '\u2925': 'searhk', '\u2926': 'swarhk', '\u2927': 'nwnear', '\u2928': 'toea', '\u2929': 'tosa', '\u292A': 'swnwar', '\u2933': 'rarrc', '\u2933\u0338': 'nrarrc', '\u2935': 'cudarrr', '\u2936': 'ldca', '\u2937': 'rdca', '\u2938': 'cudarrl', '\u2939': 'larrpl', '\u293C': 'curarrm', '\u293D': 'cularrp', '\u2945': 'rarrpl', '\u2948': 'harrcir', '\u2949': 'Uarrocir', '\u294A': 'lurdshar', '\u294B': 'ldrushar', '\u294E': 'LeftRightVector', '\u294F': 'RightUpDownVector', '\u2950': 'DownLeftRightVector', '\u2951': 'LeftUpDownVector', '\u2952': 'LeftVectorBar', '\u2953': 'RightVectorBar', '\u2954': 'RightUpVectorBar', '\u2955': 'RightDownVectorBar', '\u2956': 'DownLeftVectorBar', '\u2957': 'DownRightVectorBar', '\u2958': 'LeftUpVectorBar', '\u2959': 'LeftDownVectorBar', '\u295A': 'LeftTeeVector', '\u295B': 'RightTeeVector', '\u295C': 'RightUpTeeVector', '\u295D': 'RightDownTeeVector', '\u295E': 'DownLeftTeeVector', '\u295F': 'DownRightTeeVector', '\u2960': 'LeftUpTeeVector', '\u2961': 'LeftDownTeeVector', '\u2962': 'lHar', '\u2963': 'uHar', '\u2964': 'rHar', '\u2965': 'dHar', '\u2966': 'luruhar', '\u2967': 'ldrdhar', '\u2968': 'ruluhar', '\u2969': 'rdldhar', '\u296A': 'lharul', '\u296B': 'llhard', '\u296C': 'rharul', '\u296D': 'lrhard', '\u296E': 'udhar', '\u296F': 'duhar', '\u2970': 'RoundImplies', '\u2971': 'erarr', '\u2972': 'simrarr', '\u2973': 'larrsim', '\u2974': 'rarrsim', '\u2975': 'rarrap', '\u2976': 'ltlarr', '\u2978': 'gtrarr', '\u2979': 'subrarr', '\u297B': 'suplarr', '\u297C': 'lfisht', '\u297D': 'rfisht', '\u297E': 'ufisht', '\u297F': 'dfisht', '\u299A': 'vzigzag', '\u299C': 'vangrt', '\u299D': 'angrtvbd', '\u29A4': 'ange', '\u29A5': 'range', '\u29A6': 'dwangle', '\u29A7': 'uwangle', '\u29A8': 'angmsdaa', '\u29A9': 'angmsdab', '\u29AA': 'angmsdac', '\u29AB': 'angmsdad', '\u29AC': 'angmsdae', '\u29AD': 'angmsdaf', '\u29AE': 'angmsdag', '\u29AF': 'angmsdah', '\u29B0': 'bemptyv', '\u29B1': 'demptyv', '\u29B2': 'cemptyv', '\u29B3': 'raemptyv', '\u29B4': 'laemptyv', '\u29B5': 'ohbar', '\u29B6': 'omid', '\u29B7': 'opar', '\u29B9': 'operp', '\u29BB': 'olcross', '\u29BC': 'odsold', '\u29BE': 'olcir', '\u29BF': 'ofcir', '\u29C0': 'olt', '\u29C1': 'ogt', '\u29C2': 'cirscir', '\u29C3': 'cirE', '\u29C4': 'solb', '\u29C5': 'bsolb', '\u29C9': 'boxbox', '\u29CD': 'trisb', '\u29CE': 'rtriltri', '\u29CF': 'LeftTriangleBar', '\u29CF\u0338': 'NotLeftTriangleBar', '\u29D0': 'RightTriangleBar', '\u29D0\u0338': 'NotRightTriangleBar', '\u29DC': 'iinfin', '\u29DD': 'infintie', '\u29DE': 'nvinfin', '\u29E3': 'eparsl', '\u29E4': 'smeparsl', '\u29E5': 'eqvparsl', '\u29EB': 'lozf', '\u29F4': 'RuleDelayed', '\u29F6': 'dsol', '\u2A00': 'xodot', '\u2A01': 'xoplus', '\u2A02': 'xotime', '\u2A04': 'xuplus', '\u2A06': 'xsqcup', '\u2A0D': 'fpartint', '\u2A10': 'cirfnint', '\u2A11': 'awint', '\u2A12': 'rppolint', '\u2A13': 'scpolint', '\u2A14': 'npolint', '\u2A15': 'pointint', '\u2A16': 'quatint', '\u2A17': 'intlarhk', '\u2A22': 'pluscir', '\u2A23': 'plusacir', '\u2A24': 'simplus', '\u2A25': 'plusdu', '\u2A26': 'plussim', '\u2A27': 'plustwo', '\u2A29': 'mcomma', '\u2A2A': 'minusdu', '\u2A2D': 'loplus', '\u2A2E': 'roplus', '\u2A2F': 'Cross', '\u2A30': 'timesd', '\u2A31': 'timesbar', '\u2A33': 'smashp', '\u2A34': 'lotimes', '\u2A35': 'rotimes', '\u2A36': 'otimesas', '\u2A37': 'Otimes', '\u2A38': 'odiv', '\u2A39': 'triplus', '\u2A3A': 'triminus', '\u2A3B': 'tritime', '\u2A3C': 'iprod', '\u2A3F': 'amalg', '\u2A40': 'capdot', '\u2A42': 'ncup', '\u2A43': 'ncap', '\u2A44': 'capand', '\u2A45': 'cupor', '\u2A46': 'cupcap', '\u2A47': 'capcup', '\u2A48': 'cupbrcap', '\u2A49': 'capbrcup', '\u2A4A': 'cupcup', '\u2A4B': 'capcap', '\u2A4C': 'ccups', '\u2A4D': 'ccaps', '\u2A50': 'ccupssm', '\u2A53': 'And', '\u2A54': 'Or', '\u2A55': 'andand', '\u2A56': 'oror', '\u2A57': 'orslope', '\u2A58': 'andslope', '\u2A5A': 'andv', '\u2A5B': 'orv', '\u2A5C': 'andd', '\u2A5D': 'ord', '\u2A5F': 'wedbar', '\u2A66': 'sdote', '\u2A6A': 'simdot', '\u2A6D': 'congdot', '\u2A6D\u0338': 'ncongdot', '\u2A6E': 'easter', '\u2A6F': 'apacir', '\u2A70': 'apE', '\u2A70\u0338': 'napE', '\u2A71': 'eplus', '\u2A72': 'pluse', '\u2A73': 'Esim', '\u2A77': 'eDDot', '\u2A78': 'equivDD', '\u2A79': 'ltcir', '\u2A7A': 'gtcir', '\u2A7B': 'ltquest', '\u2A7C': 'gtquest', '\u2A7D': 'les', '\u2A7D\u0338': 'nles', '\u2A7E': 'ges', '\u2A7E\u0338': 'nges', '\u2A7F': 'lesdot', '\u2A80': 'gesdot', '\u2A81': 'lesdoto', '\u2A82': 'gesdoto', '\u2A83': 'lesdotor', '\u2A84': 'gesdotol', '\u2A85': 'lap', '\u2A86': 'gap', '\u2A87': 'lne', '\u2A88': 'gne', '\u2A89': 'lnap', '\u2A8A': 'gnap', '\u2A8B': 'lEg', '\u2A8C': 'gEl', '\u2A8D': 'lsime', '\u2A8E': 'gsime', '\u2A8F': 'lsimg', '\u2A90': 'gsiml', '\u2A91': 'lgE', '\u2A92': 'glE', '\u2A93': 'lesges', '\u2A94': 'gesles', '\u2A95': 'els', '\u2A96': 'egs', '\u2A97': 'elsdot', '\u2A98': 'egsdot', '\u2A99': 'el', '\u2A9A': 'eg', '\u2A9D': 'siml', '\u2A9E': 'simg', '\u2A9F': 'simlE', '\u2AA0': 'simgE', '\u2AA1': 'LessLess', '\u2AA1\u0338': 'NotNestedLessLess', '\u2AA2': 'GreaterGreater', '\u2AA2\u0338': 'NotNestedGreaterGreater', '\u2AA4': 'glj', '\u2AA5': 'gla', '\u2AA6': 'ltcc', '\u2AA7': 'gtcc', '\u2AA8': 'lescc', '\u2AA9': 'gescc', '\u2AAA': 'smt', '\u2AAB': 'lat', '\u2AAC': 'smte', '\u2AAC\uFE00': 'smtes', '\u2AAD': 'late', '\u2AAD\uFE00': 'lates', '\u2AAE': 'bumpE', '\u2AAF': 'pre', '\u2AAF\u0338': 'npre', '\u2AB0': 'sce', '\u2AB0\u0338': 'nsce', '\u2AB3': 'prE', '\u2AB4': 'scE', '\u2AB5': 'prnE', '\u2AB6': 'scnE', '\u2AB7': 'prap', '\u2AB8': 'scap', '\u2AB9': 'prnap', '\u2ABA': 'scnap', '\u2ABB': 'Pr', '\u2ABC': 'Sc', '\u2ABD': 'subdot', '\u2ABE': 'supdot', '\u2ABF': 'subplus', '\u2AC0': 'supplus', '\u2AC1': 'submult', '\u2AC2': 'supmult', '\u2AC3': 'subedot', '\u2AC4': 'supedot', '\u2AC5': 'subE', '\u2AC5\u0338': 'nsubE', '\u2AC6': 'supE', '\u2AC6\u0338': 'nsupE', '\u2AC7': 'subsim', '\u2AC8': 'supsim', '\u2ACB\uFE00': 'vsubnE', '\u2ACB': 'subnE', '\u2ACC\uFE00': 'vsupnE', '\u2ACC': 'supnE', '\u2ACF': 'csub', '\u2AD0': 'csup', '\u2AD1': 'csube', '\u2AD2': 'csupe', '\u2AD3': 'subsup', '\u2AD4': 'supsub', '\u2AD5': 'subsub', '\u2AD6': 'supsup', '\u2AD7': 'suphsub', '\u2AD8': 'supdsub', '\u2AD9': 'forkv', '\u2ADA': 'topfork', '\u2ADB': 'mlcp', '\u2AE4': 'Dashv', '\u2AE6': 'Vdashl', '\u2AE7': 'Barv', '\u2AE8': 'vBar', '\u2AE9': 'vBarv', '\u2AEB': 'Vbar', '\u2AEC': 'Not', '\u2AED': 'bNot', '\u2AEE': 'rnmid', '\u2AEF': 'cirmid', '\u2AF0': 'midcir', '\u2AF1': 'topcir', '\u2AF2': 'nhpar', '\u2AF3': 'parsim', '\u2AFD': 'parsl', '\u2AFD\u20E5': 'nparsl', '\u266D': 'flat', '\u266E': 'natur', '\u266F': 'sharp', '\xA4': 'curren', '\xA2': 'cent', '$': 'dollar', '\xA3': 'pound', '\xA5': 'yen', '\u20AC': 'euro', '\xB9': 'sup1', '\xBD': 'half', '\u2153': 'frac13', '\xBC': 'frac14', '\u2155': 'frac15', '\u2159': 'frac16', '\u215B': 'frac18', '\xB2': 'sup2', '\u2154': 'frac23', '\u2156': 'frac25', '\xB3': 'sup3', '\xBE': 'frac34', '\u2157': 'frac35', '\u215C': 'frac38', '\u2158': 'frac45', '\u215A': 'frac56', '\u215D': 'frac58', '\u215E': 'frac78', '\uD835\uDCB6': 'ascr', '\uD835\uDD52': 'aopf', '\uD835\uDD1E': 'afr', '\uD835\uDD38': 'Aopf', '\uD835\uDD04': 'Afr', '\uD835\uDC9C': 'Ascr', '\xAA': 'ordf', '\xE1': 'aacute', '\xC1': 'Aacute', '\xE0': 'agrave', '\xC0': 'Agrave', '\u0103': 'abreve', '\u0102': 'Abreve', '\xE2': 'acirc', '\xC2': 'Acirc', '\xE5': 'aring', '\xC5': 'angst', '\xE4': 'auml', '\xC4': 'Auml', '\xE3': 'atilde', '\xC3': 'Atilde', '\u0105': 'aogon', '\u0104': 'Aogon', '\u0101': 'amacr', '\u0100': 'Amacr', '\xE6': 'aelig', '\xC6': 'AElig', '\uD835\uDCB7': 'bscr', '\uD835\uDD53': 'bopf', '\uD835\uDD1F': 'bfr', '\uD835\uDD39': 'Bopf', '\u212C': 'Bscr', '\uD835\uDD05': 'Bfr', '\uD835\uDD20': 'cfr', '\uD835\uDCB8': 'cscr', '\uD835\uDD54': 'copf', '\u212D': 'Cfr', '\uD835\uDC9E': 'Cscr', '\u2102': 'Copf', '\u0107': 'cacute', '\u0106': 'Cacute', '\u0109': 'ccirc', '\u0108': 'Ccirc', '\u010D': 'ccaron', '\u010C': 'Ccaron', '\u010B': 'cdot', '\u010A': 'Cdot', '\xE7': 'ccedil', '\xC7': 'Ccedil', '\u2105': 'incare', '\uD835\uDD21': 'dfr', '\u2146': 'dd', '\uD835\uDD55': 'dopf', '\uD835\uDCB9': 'dscr', '\uD835\uDC9F': 'Dscr', '\uD835\uDD07': 'Dfr', '\u2145': 'DD', '\uD835\uDD3B': 'Dopf', '\u010F': 'dcaron', '\u010E': 'Dcaron', '\u0111': 'dstrok', '\u0110': 'Dstrok', '\xF0': 'eth', '\xD0': 'ETH', '\u2147': 'ee', '\u212F': 'escr', '\uD835\uDD22': 'efr', '\uD835\uDD56': 'eopf', '\u2130': 'Escr', '\uD835\uDD08': 'Efr', '\uD835\uDD3C': 'Eopf', '\xE9': 'eacute', '\xC9': 'Eacute', '\xE8': 'egrave', '\xC8': 'Egrave', '\xEA': 'ecirc', '\xCA': 'Ecirc', '\u011B': 'ecaron', '\u011A': 'Ecaron', '\xEB': 'euml', '\xCB': 'Euml', '\u0117': 'edot', '\u0116': 'Edot', '\u0119': 'eogon', '\u0118': 'Eogon', '\u0113': 'emacr', '\u0112': 'Emacr', '\uD835\uDD23': 'ffr', '\uD835\uDD57': 'fopf', '\uD835\uDCBB': 'fscr', '\uD835\uDD09': 'Ffr', '\uD835\uDD3D': 'Fopf', '\u2131': 'Fscr', '\uFB00': 'fflig', '\uFB03': 'ffilig', '\uFB04': 'ffllig', '\uFB01': 'filig', 'fj': 'fjlig', '\uFB02': 'fllig', '\u0192': 'fnof', '\u210A': 'gscr', '\uD835\uDD58': 'gopf', '\uD835\uDD24': 'gfr', '\uD835\uDCA2': 'Gscr', '\uD835\uDD3E': 'Gopf', '\uD835\uDD0A': 'Gfr', '\u01F5': 'gacute', '\u011F': 'gbreve', '\u011E': 'Gbreve', '\u011D': 'gcirc', '\u011C': 'Gcirc', '\u0121': 'gdot', '\u0120': 'Gdot', '\u0122': 'Gcedil', '\uD835\uDD25': 'hfr', '\u210E': 'planckh', '\uD835\uDCBD': 'hscr', '\uD835\uDD59': 'hopf', '\u210B': 'Hscr', '\u210C': 'Hfr', '\u210D': 'Hopf', '\u0125': 'hcirc', '\u0124': 'Hcirc', '\u210F': 'hbar', '\u0127': 'hstrok', '\u0126': 'Hstrok', '\uD835\uDD5A': 'iopf', '\uD835\uDD26': 'ifr', '\uD835\uDCBE': 'iscr', '\u2148': 'ii', '\uD835\uDD40': 'Iopf', '\u2110': 'Iscr', '\u2111': 'Im', '\xED': 'iacute', '\xCD': 'Iacute', '\xEC': 'igrave', '\xCC': 'Igrave', '\xEE': 'icirc', '\xCE': 'Icirc', '\xEF': 'iuml', '\xCF': 'Iuml', '\u0129': 'itilde', '\u0128': 'Itilde', '\u0130': 'Idot', '\u012F': 'iogon', '\u012E': 'Iogon', '\u012B': 'imacr', '\u012A': 'Imacr', '\u0133': 'ijlig', '\u0132': 'IJlig', '\u0131': 'imath', '\uD835\uDCBF': 'jscr', '\uD835\uDD5B': 'jopf', '\uD835\uDD27': 'jfr', '\uD835\uDCA5': 'Jscr', '\uD835\uDD0D': 'Jfr', '\uD835\uDD41': 'Jopf', '\u0135': 'jcirc', '\u0134': 'Jcirc', '\u0237': 'jmath', '\uD835\uDD5C': 'kopf', '\uD835\uDCC0': 'kscr', '\uD835\uDD28': 'kfr', '\uD835\uDCA6': 'Kscr', '\uD835\uDD42': 'Kopf', '\uD835\uDD0E': 'Kfr', '\u0137': 'kcedil', '\u0136': 'Kcedil', '\uD835\uDD29': 'lfr', '\uD835\uDCC1': 'lscr', '\u2113': 'ell', '\uD835\uDD5D': 'lopf', '\u2112': 'Lscr', '\uD835\uDD0F': 'Lfr', '\uD835\uDD43': 'Lopf', '\u013A': 'lacute', '\u0139': 'Lacute', '\u013E': 'lcaron', '\u013D': 'Lcaron', '\u013C': 'lcedil', '\u013B': 'Lcedil', '\u0142': 'lstrok', '\u0141': 'Lstrok', '\u0140': 'lmidot', '\u013F': 'Lmidot', '\uD835\uDD2A': 'mfr', '\uD835\uDD5E': 'mopf', '\uD835\uDCC2': 'mscr', '\uD835\uDD10': 'Mfr', '\uD835\uDD44': 'Mopf', '\u2133': 'Mscr', '\uD835\uDD2B': 'nfr', '\uD835\uDD5F': 'nopf', '\uD835\uDCC3': 'nscr', '\u2115': 'Nopf', '\uD835\uDCA9': 'Nscr', '\uD835\uDD11': 'Nfr', '\u0144': 'nacute', '\u0143': 'Nacute', '\u0148': 'ncaron', '\u0147': 'Ncaron', '\xF1': 'ntilde', '\xD1': 'Ntilde', '\u0146': 'ncedil', '\u0145': 'Ncedil', '\u2116': 'numero', '\u014B': 'eng', '\u014A': 'ENG', '\uD835\uDD60': 'oopf', '\uD835\uDD2C': 'ofr', '\u2134': 'oscr', '\uD835\uDCAA': 'Oscr', '\uD835\uDD12': 'Ofr', '\uD835\uDD46': 'Oopf', '\xBA': 'ordm', '\xF3': 'oacute', '\xD3': 'Oacute', '\xF2': 'ograve', '\xD2': 'Ograve', '\xF4': 'ocirc', '\xD4': 'Ocirc', '\xF6': 'ouml', '\xD6': 'Ouml', '\u0151': 'odblac', '\u0150': 'Odblac', '\xF5': 'otilde', '\xD5': 'Otilde', '\xF8': 'oslash', '\xD8': 'Oslash', '\u014D': 'omacr', '\u014C': 'Omacr', '\u0153': 'oelig', '\u0152': 'OElig', '\uD835\uDD2D': 'pfr', '\uD835\uDCC5': 'pscr', '\uD835\uDD61': 'popf', '\u2119': 'Popf', '\uD835\uDD13': 'Pfr', '\uD835\uDCAB': 'Pscr', '\uD835\uDD62': 'qopf', '\uD835\uDD2E': 'qfr', '\uD835\uDCC6': 'qscr', '\uD835\uDCAC': 'Qscr', '\uD835\uDD14': 'Qfr', '\u211A': 'Qopf', '\u0138': 'kgreen', '\uD835\uDD2F': 'rfr', '\uD835\uDD63': 'ropf', '\uD835\uDCC7': 'rscr', '\u211B': 'Rscr', '\u211C': 'Re', '\u211D': 'Ropf', '\u0155': 'racute', '\u0154': 'Racute', '\u0159': 'rcaron', '\u0158': 'Rcaron', '\u0157': 'rcedil', '\u0156': 'Rcedil', '\uD835\uDD64': 'sopf', '\uD835\uDCC8': 'sscr', '\uD835\uDD30': 'sfr', '\uD835\uDD4A': 'Sopf', '\uD835\uDD16': 'Sfr', '\uD835\uDCAE': 'Sscr', '\u24C8': 'oS', '\u015B': 'sacute', '\u015A': 'Sacute', '\u015D': 'scirc', '\u015C': 'Scirc', '\u0161': 'scaron', '\u0160': 'Scaron', '\u015F': 'scedil', '\u015E': 'Scedil', '\xDF': 'szlig', '\uD835\uDD31': 'tfr', '\uD835\uDCC9': 'tscr', '\uD835\uDD65': 'topf', '\uD835\uDCAF': 'Tscr', '\uD835\uDD17': 'Tfr', '\uD835\uDD4B': 'Topf', '\u0165': 'tcaron', '\u0164': 'Tcaron', '\u0163': 'tcedil', '\u0162': 'Tcedil', '\u2122': 'trade', '\u0167': 'tstrok', '\u0166': 'Tstrok', '\uD835\uDCCA': 'uscr', '\uD835\uDD66': 'uopf', '\uD835\uDD32': 'ufr', '\uD835\uDD4C': 'Uopf', '\uD835\uDD18': 'Ufr', '\uD835\uDCB0': 'Uscr', '\xFA': 'uacute', '\xDA': 'Uacute', '\xF9': 'ugrave', '\xD9': 'Ugrave', '\u016D': 'ubreve', '\u016C': 'Ubreve', '\xFB': 'ucirc', '\xDB': 'Ucirc', '\u016F': 'uring', '\u016E': 'Uring', '\xFC': 'uuml', '\xDC': 'Uuml', '\u0171': 'udblac', '\u0170': 'Udblac', '\u0169': 'utilde', '\u0168': 'Utilde', '\u0173': 'uogon', '\u0172': 'Uogon', '\u016B': 'umacr', '\u016A': 'Umacr', '\uD835\uDD33': 'vfr', '\uD835\uDD67': 'vopf', '\uD835\uDCCB': 'vscr', '\uD835\uDD19': 'Vfr', '\uD835\uDD4D': 'Vopf', '\uD835\uDCB1': 'Vscr', '\uD835\uDD68': 'wopf', '\uD835\uDCCC': 'wscr', '\uD835\uDD34': 'wfr', '\uD835\uDCB2': 'Wscr', '\uD835\uDD4E': 'Wopf', '\uD835\uDD1A': 'Wfr', '\u0175': 'wcirc', '\u0174': 'Wcirc', '\uD835\uDD35': 'xfr', '\uD835\uDCCD': 'xscr', '\uD835\uDD69': 'xopf', '\uD835\uDD4F': 'Xopf', '\uD835\uDD1B': 'Xfr', '\uD835\uDCB3': 'Xscr', '\uD835\uDD36': 'yfr', '\uD835\uDCCE': 'yscr', '\uD835\uDD6A': 'yopf', '\uD835\uDCB4': 'Yscr', '\uD835\uDD1C': 'Yfr', '\uD835\uDD50': 'Yopf', '\xFD': 'yacute', '\xDD': 'Yacute', '\u0177': 'ycirc', '\u0176': 'Ycirc', '\xFF': 'yuml', '\u0178': 'Yuml', '\uD835\uDCCF': 'zscr', '\uD835\uDD37': 'zfr', '\uD835\uDD6B': 'zopf', '\u2128': 'Zfr', '\u2124': 'Zopf', '\uD835\uDCB5': 'Zscr', '\u017A': 'zacute', '\u0179': 'Zacute', '\u017E': 'zcaron', '\u017D': 'Zcaron', '\u017C': 'zdot', '\u017B': 'Zdot', '\u01B5': 'imped', '\xFE': 'thorn', '\xDE': 'THORN', '\u0149': 'napos', '\u03B1': 'alpha', '\u0391': 'Alpha', '\u03B2': 'beta', '\u0392': 'Beta', '\u03B3': 'gamma', '\u0393': 'Gamma', '\u03B4': 'delta', '\u0394': 'Delta', '\u03B5': 'epsi', '\u03F5': 'epsiv', '\u0395': 'Epsilon', '\u03DD': 'gammad', '\u03DC': 'Gammad', '\u03B6': 'zeta', '\u0396': 'Zeta', '\u03B7': 'eta', '\u0397': 'Eta', '\u03B8': 'theta', '\u03D1': 'thetav', '\u0398': 'Theta', '\u03B9': 'iota', '\u0399': 'Iota', '\u03BA': 'kappa', '\u03F0': 'kappav', '\u039A': 'Kappa', '\u03BB': 'lambda', '\u039B': 'Lambda', '\u03BC': 'mu', '\xB5': 'micro', '\u039C': 'Mu', '\u03BD': 'nu', '\u039D': 'Nu', '\u03BE': 'xi', '\u039E': 'Xi', '\u03BF': 'omicron', '\u039F': 'Omicron', '\u03C0': 'pi', '\u03D6': 'piv', '\u03A0': 'Pi', '\u03C1': 'rho', '\u03F1': 'rhov', '\u03A1': 'Rho', '\u03C3': 'sigma', '\u03A3': 'Sigma', '\u03C2': 'sigmaf', '\u03C4': 'tau', '\u03A4': 'Tau', '\u03C5': 'upsi', '\u03A5': 'Upsilon', '\u03D2': 'Upsi', '\u03C6': 'phi', '\u03D5': 'phiv', '\u03A6': 'Phi', '\u03C7': 'chi', '\u03A7': 'Chi', '\u03C8': 'psi', '\u03A8': 'Psi', '\u03C9': 'omega', '\u03A9': 'ohm', '\u0430': 'acy', '\u0410': 'Acy', '\u0431': 'bcy', '\u0411': 'Bcy', '\u0432': 'vcy', '\u0412': 'Vcy', '\u0433': 'gcy', '\u0413': 'Gcy', '\u0453': 'gjcy', '\u0403': 'GJcy', '\u0434': 'dcy', '\u0414': 'Dcy', '\u0452': 'djcy', '\u0402': 'DJcy', '\u0435': 'iecy', '\u0415': 'IEcy', '\u0451': 'iocy', '\u0401': 'IOcy', '\u0454': 'jukcy', '\u0404': 'Jukcy', '\u0436': 'zhcy', '\u0416': 'ZHcy', '\u0437': 'zcy', '\u0417': 'Zcy', '\u0455': 'dscy', '\u0405': 'DScy', '\u0438': 'icy', '\u0418': 'Icy', '\u0456': 'iukcy', '\u0406': 'Iukcy', '\u0457': 'yicy', '\u0407': 'YIcy', '\u0439': 'jcy', '\u0419': 'Jcy', '\u0458': 'jsercy', '\u0408': 'Jsercy', '\u043A': 'kcy', '\u041A': 'Kcy', '\u045C': 'kjcy', '\u040C': 'KJcy', '\u043B': 'lcy', '\u041B': 'Lcy', '\u0459': 'ljcy', '\u0409': 'LJcy', '\u043C': 'mcy', '\u041C': 'Mcy', '\u043D': 'ncy', '\u041D': 'Ncy', '\u045A': 'njcy', '\u040A': 'NJcy', '\u043E': 'ocy', '\u041E': 'Ocy', '\u043F': 'pcy', '\u041F': 'Pcy', '\u0440': 'rcy', '\u0420': 'Rcy', '\u0441': 'scy', '\u0421': 'Scy', '\u0442': 'tcy', '\u0422': 'Tcy', '\u045B': 'tshcy', '\u040B': 'TSHcy', '\u0443': 'ucy', '\u0423': 'Ucy', '\u045E': 'ubrcy', '\u040E': 'Ubrcy', '\u0444': 'fcy', '\u0424': 'Fcy', '\u0445': 'khcy', '\u0425': 'KHcy', '\u0446': 'tscy', '\u0426': 'TScy', '\u0447': 'chcy', '\u0427': 'CHcy', '\u045F': 'dzcy', '\u040F': 'DZcy', '\u0448': 'shcy', '\u0428': 'SHcy', '\u0449': 'shchcy', '\u0429': 'SHCHcy', '\u044A': 'hardcy', '\u042A': 'HARDcy', '\u044B': 'ycy', '\u042B': 'Ycy', '\u044C': 'softcy', '\u042C': 'SOFTcy', '\u044D': 'ecy', '\u042D': 'Ecy', '\u044E': 'yucy', '\u042E': 'YUcy', '\u044F': 'yacy', '\u042F': 'YAcy', '\u2135': 'aleph', '\u2136': 'beth', '\u2137': 'gimel', '\u2138': 'daleth' };

	var regexEscape = /["&'<>`]/g;
	var escapeMap = {
		'"': '&quot;',
		'&': '&amp;',
		'\'': '&#x27;',
		'<': '&lt;',
		// See https://mathiasbynens.be/notes/ambiguous-ampersands: in HTML, the
		// following is not strictly necessary unless it’s part of a tag or an
		// unquoted attribute value. We’re only escaping it to support those
		// situations, and for XML support.
		'>': '&gt;',
		// In Internet Explorer ≤ 8, the backtick character can be used
		// to break out of (un)quoted attribute values or HTML comments.
		// See http://html5sec.org/#102, http://html5sec.org/#108, and
		// http://html5sec.org/#133.
		'`': '&#x60;'
	};

	var regexInvalidEntity = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/;
	var regexInvalidRawCodePoint = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
	var regexDecode = /&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)([=a-zA-Z0-9])?/g;
	var decodeMap = { 'aacute': '\xE1', 'Aacute': '\xC1', 'abreve': '\u0103', 'Abreve': '\u0102', 'ac': '\u223E', 'acd': '\u223F', 'acE': '\u223E\u0333', 'acirc': '\xE2', 'Acirc': '\xC2', 'acute': '\xB4', 'acy': '\u0430', 'Acy': '\u0410', 'aelig': '\xE6', 'AElig': '\xC6', 'af': '\u2061', 'afr': '\uD835\uDD1E', 'Afr': '\uD835\uDD04', 'agrave': '\xE0', 'Agrave': '\xC0', 'alefsym': '\u2135', 'aleph': '\u2135', 'alpha': '\u03B1', 'Alpha': '\u0391', 'amacr': '\u0101', 'Amacr': '\u0100', 'amalg': '\u2A3F', 'amp': '&', 'AMP': '&', 'and': '\u2227', 'And': '\u2A53', 'andand': '\u2A55', 'andd': '\u2A5C', 'andslope': '\u2A58', 'andv': '\u2A5A', 'ang': '\u2220', 'ange': '\u29A4', 'angle': '\u2220', 'angmsd': '\u2221', 'angmsdaa': '\u29A8', 'angmsdab': '\u29A9', 'angmsdac': '\u29AA', 'angmsdad': '\u29AB', 'angmsdae': '\u29AC', 'angmsdaf': '\u29AD', 'angmsdag': '\u29AE', 'angmsdah': '\u29AF', 'angrt': '\u221F', 'angrtvb': '\u22BE', 'angrtvbd': '\u299D', 'angsph': '\u2222', 'angst': '\xC5', 'angzarr': '\u237C', 'aogon': '\u0105', 'Aogon': '\u0104', 'aopf': '\uD835\uDD52', 'Aopf': '\uD835\uDD38', 'ap': '\u2248', 'apacir': '\u2A6F', 'ape': '\u224A', 'apE': '\u2A70', 'apid': '\u224B', 'apos': '\'', 'ApplyFunction': '\u2061', 'approx': '\u2248', 'approxeq': '\u224A', 'aring': '\xE5', 'Aring': '\xC5', 'ascr': '\uD835\uDCB6', 'Ascr': '\uD835\uDC9C', 'Assign': '\u2254', 'ast': '*', 'asymp': '\u2248', 'asympeq': '\u224D', 'atilde': '\xE3', 'Atilde': '\xC3', 'auml': '\xE4', 'Auml': '\xC4', 'awconint': '\u2233', 'awint': '\u2A11', 'backcong': '\u224C', 'backepsilon': '\u03F6', 'backprime': '\u2035', 'backsim': '\u223D', 'backsimeq': '\u22CD', 'Backslash': '\u2216', 'Barv': '\u2AE7', 'barvee': '\u22BD', 'barwed': '\u2305', 'Barwed': '\u2306', 'barwedge': '\u2305', 'bbrk': '\u23B5', 'bbrktbrk': '\u23B6', 'bcong': '\u224C', 'bcy': '\u0431', 'Bcy': '\u0411', 'bdquo': '\u201E', 'becaus': '\u2235', 'because': '\u2235', 'Because': '\u2235', 'bemptyv': '\u29B0', 'bepsi': '\u03F6', 'bernou': '\u212C', 'Bernoullis': '\u212C', 'beta': '\u03B2', 'Beta': '\u0392', 'beth': '\u2136', 'between': '\u226C', 'bfr': '\uD835\uDD1F', 'Bfr': '\uD835\uDD05', 'bigcap': '\u22C2', 'bigcirc': '\u25EF', 'bigcup': '\u22C3', 'bigodot': '\u2A00', 'bigoplus': '\u2A01', 'bigotimes': '\u2A02', 'bigsqcup': '\u2A06', 'bigstar': '\u2605', 'bigtriangledown': '\u25BD', 'bigtriangleup': '\u25B3', 'biguplus': '\u2A04', 'bigvee': '\u22C1', 'bigwedge': '\u22C0', 'bkarow': '\u290D', 'blacklozenge': '\u29EB', 'blacksquare': '\u25AA', 'blacktriangle': '\u25B4', 'blacktriangledown': '\u25BE', 'blacktriangleleft': '\u25C2', 'blacktriangleright': '\u25B8', 'blank': '\u2423', 'blk12': '\u2592', 'blk14': '\u2591', 'blk34': '\u2593', 'block': '\u2588', 'bne': '=\u20E5', 'bnequiv': '\u2261\u20E5', 'bnot': '\u2310', 'bNot': '\u2AED', 'bopf': '\uD835\uDD53', 'Bopf': '\uD835\uDD39', 'bot': '\u22A5', 'bottom': '\u22A5', 'bowtie': '\u22C8', 'boxbox': '\u29C9', 'boxdl': '\u2510', 'boxdL': '\u2555', 'boxDl': '\u2556', 'boxDL': '\u2557', 'boxdr': '\u250C', 'boxdR': '\u2552', 'boxDr': '\u2553', 'boxDR': '\u2554', 'boxh': '\u2500', 'boxH': '\u2550', 'boxhd': '\u252C', 'boxhD': '\u2565', 'boxHd': '\u2564', 'boxHD': '\u2566', 'boxhu': '\u2534', 'boxhU': '\u2568', 'boxHu': '\u2567', 'boxHU': '\u2569', 'boxminus': '\u229F', 'boxplus': '\u229E', 'boxtimes': '\u22A0', 'boxul': '\u2518', 'boxuL': '\u255B', 'boxUl': '\u255C', 'boxUL': '\u255D', 'boxur': '\u2514', 'boxuR': '\u2558', 'boxUr': '\u2559', 'boxUR': '\u255A', 'boxv': '\u2502', 'boxV': '\u2551', 'boxvh': '\u253C', 'boxvH': '\u256A', 'boxVh': '\u256B', 'boxVH': '\u256C', 'boxvl': '\u2524', 'boxvL': '\u2561', 'boxVl': '\u2562', 'boxVL': '\u2563', 'boxvr': '\u251C', 'boxvR': '\u255E', 'boxVr': '\u255F', 'boxVR': '\u2560', 'bprime': '\u2035', 'breve': '\u02D8', 'Breve': '\u02D8', 'brvbar': '\xA6', 'bscr': '\uD835\uDCB7', 'Bscr': '\u212C', 'bsemi': '\u204F', 'bsim': '\u223D', 'bsime': '\u22CD', 'bsol': '\\', 'bsolb': '\u29C5', 'bsolhsub': '\u27C8', 'bull': '\u2022', 'bullet': '\u2022', 'bump': '\u224E', 'bumpe': '\u224F', 'bumpE': '\u2AAE', 'bumpeq': '\u224F', 'Bumpeq': '\u224E', 'cacute': '\u0107', 'Cacute': '\u0106', 'cap': '\u2229', 'Cap': '\u22D2', 'capand': '\u2A44', 'capbrcup': '\u2A49', 'capcap': '\u2A4B', 'capcup': '\u2A47', 'capdot': '\u2A40', 'CapitalDifferentialD': '\u2145', 'caps': '\u2229\uFE00', 'caret': '\u2041', 'caron': '\u02C7', 'Cayleys': '\u212D', 'ccaps': '\u2A4D', 'ccaron': '\u010D', 'Ccaron': '\u010C', 'ccedil': '\xE7', 'Ccedil': '\xC7', 'ccirc': '\u0109', 'Ccirc': '\u0108', 'Cconint': '\u2230', 'ccups': '\u2A4C', 'ccupssm': '\u2A50', 'cdot': '\u010B', 'Cdot': '\u010A', 'cedil': '\xB8', 'Cedilla': '\xB8', 'cemptyv': '\u29B2', 'cent': '\xA2', 'centerdot': '\xB7', 'CenterDot': '\xB7', 'cfr': '\uD835\uDD20', 'Cfr': '\u212D', 'chcy': '\u0447', 'CHcy': '\u0427', 'check': '\u2713', 'checkmark': '\u2713', 'chi': '\u03C7', 'Chi': '\u03A7', 'cir': '\u25CB', 'circ': '\u02C6', 'circeq': '\u2257', 'circlearrowleft': '\u21BA', 'circlearrowright': '\u21BB', 'circledast': '\u229B', 'circledcirc': '\u229A', 'circleddash': '\u229D', 'CircleDot': '\u2299', 'circledR': '\xAE', 'circledS': '\u24C8', 'CircleMinus': '\u2296', 'CirclePlus': '\u2295', 'CircleTimes': '\u2297', 'cire': '\u2257', 'cirE': '\u29C3', 'cirfnint': '\u2A10', 'cirmid': '\u2AEF', 'cirscir': '\u29C2', 'ClockwiseContourIntegral': '\u2232', 'CloseCurlyDoubleQuote': '\u201D', 'CloseCurlyQuote': '\u2019', 'clubs': '\u2663', 'clubsuit': '\u2663', 'colon': ':', 'Colon': '\u2237', 'colone': '\u2254', 'Colone': '\u2A74', 'coloneq': '\u2254', 'comma': ',', 'commat': '@', 'comp': '\u2201', 'compfn': '\u2218', 'complement': '\u2201', 'complexes': '\u2102', 'cong': '\u2245', 'congdot': '\u2A6D', 'Congruent': '\u2261', 'conint': '\u222E', 'Conint': '\u222F', 'ContourIntegral': '\u222E', 'copf': '\uD835\uDD54', 'Copf': '\u2102', 'coprod': '\u2210', 'Coproduct': '\u2210', 'copy': '\xA9', 'COPY': '\xA9', 'copysr': '\u2117', 'CounterClockwiseContourIntegral': '\u2233', 'crarr': '\u21B5', 'cross': '\u2717', 'Cross': '\u2A2F', 'cscr': '\uD835\uDCB8', 'Cscr': '\uD835\uDC9E', 'csub': '\u2ACF', 'csube': '\u2AD1', 'csup': '\u2AD0', 'csupe': '\u2AD2', 'ctdot': '\u22EF', 'cudarrl': '\u2938', 'cudarrr': '\u2935', 'cuepr': '\u22DE', 'cuesc': '\u22DF', 'cularr': '\u21B6', 'cularrp': '\u293D', 'cup': '\u222A', 'Cup': '\u22D3', 'cupbrcap': '\u2A48', 'cupcap': '\u2A46', 'CupCap': '\u224D', 'cupcup': '\u2A4A', 'cupdot': '\u228D', 'cupor': '\u2A45', 'cups': '\u222A\uFE00', 'curarr': '\u21B7', 'curarrm': '\u293C', 'curlyeqprec': '\u22DE', 'curlyeqsucc': '\u22DF', 'curlyvee': '\u22CE', 'curlywedge': '\u22CF', 'curren': '\xA4', 'curvearrowleft': '\u21B6', 'curvearrowright': '\u21B7', 'cuvee': '\u22CE', 'cuwed': '\u22CF', 'cwconint': '\u2232', 'cwint': '\u2231', 'cylcty': '\u232D', 'dagger': '\u2020', 'Dagger': '\u2021', 'daleth': '\u2138', 'darr': '\u2193', 'dArr': '\u21D3', 'Darr': '\u21A1', 'dash': '\u2010', 'dashv': '\u22A3', 'Dashv': '\u2AE4', 'dbkarow': '\u290F', 'dblac': '\u02DD', 'dcaron': '\u010F', 'Dcaron': '\u010E', 'dcy': '\u0434', 'Dcy': '\u0414', 'dd': '\u2146', 'DD': '\u2145', 'ddagger': '\u2021', 'ddarr': '\u21CA', 'DDotrahd': '\u2911', 'ddotseq': '\u2A77', 'deg': '\xB0', 'Del': '\u2207', 'delta': '\u03B4', 'Delta': '\u0394', 'demptyv': '\u29B1', 'dfisht': '\u297F', 'dfr': '\uD835\uDD21', 'Dfr': '\uD835\uDD07', 'dHar': '\u2965', 'dharl': '\u21C3', 'dharr': '\u21C2', 'DiacriticalAcute': '\xB4', 'DiacriticalDot': '\u02D9', 'DiacriticalDoubleAcute': '\u02DD', 'DiacriticalGrave': '`', 'DiacriticalTilde': '\u02DC', 'diam': '\u22C4', 'diamond': '\u22C4', 'Diamond': '\u22C4', 'diamondsuit': '\u2666', 'diams': '\u2666', 'die': '\xA8', 'DifferentialD': '\u2146', 'digamma': '\u03DD', 'disin': '\u22F2', 'div': '\xF7', 'divide': '\xF7', 'divideontimes': '\u22C7', 'divonx': '\u22C7', 'djcy': '\u0452', 'DJcy': '\u0402', 'dlcorn': '\u231E', 'dlcrop': '\u230D', 'dollar': '$', 'dopf': '\uD835\uDD55', 'Dopf': '\uD835\uDD3B', 'dot': '\u02D9', 'Dot': '\xA8', 'DotDot': '\u20DC', 'doteq': '\u2250', 'doteqdot': '\u2251', 'DotEqual': '\u2250', 'dotminus': '\u2238', 'dotplus': '\u2214', 'dotsquare': '\u22A1', 'doublebarwedge': '\u2306', 'DoubleContourIntegral': '\u222F', 'DoubleDot': '\xA8', 'DoubleDownArrow': '\u21D3', 'DoubleLeftArrow': '\u21D0', 'DoubleLeftRightArrow': '\u21D4', 'DoubleLeftTee': '\u2AE4', 'DoubleLongLeftArrow': '\u27F8', 'DoubleLongLeftRightArrow': '\u27FA', 'DoubleLongRightArrow': '\u27F9', 'DoubleRightArrow': '\u21D2', 'DoubleRightTee': '\u22A8', 'DoubleUpArrow': '\u21D1', 'DoubleUpDownArrow': '\u21D5', 'DoubleVerticalBar': '\u2225', 'downarrow': '\u2193', 'Downarrow': '\u21D3', 'DownArrow': '\u2193', 'DownArrowBar': '\u2913', 'DownArrowUpArrow': '\u21F5', 'DownBreve': '\u0311', 'downdownarrows': '\u21CA', 'downharpoonleft': '\u21C3', 'downharpoonright': '\u21C2', 'DownLeftRightVector': '\u2950', 'DownLeftTeeVector': '\u295E', 'DownLeftVector': '\u21BD', 'DownLeftVectorBar': '\u2956', 'DownRightTeeVector': '\u295F', 'DownRightVector': '\u21C1', 'DownRightVectorBar': '\u2957', 'DownTee': '\u22A4', 'DownTeeArrow': '\u21A7', 'drbkarow': '\u2910', 'drcorn': '\u231F', 'drcrop': '\u230C', 'dscr': '\uD835\uDCB9', 'Dscr': '\uD835\uDC9F', 'dscy': '\u0455', 'DScy': '\u0405', 'dsol': '\u29F6', 'dstrok': '\u0111', 'Dstrok': '\u0110', 'dtdot': '\u22F1', 'dtri': '\u25BF', 'dtrif': '\u25BE', 'duarr': '\u21F5', 'duhar': '\u296F', 'dwangle': '\u29A6', 'dzcy': '\u045F', 'DZcy': '\u040F', 'dzigrarr': '\u27FF', 'eacute': '\xE9', 'Eacute': '\xC9', 'easter': '\u2A6E', 'ecaron': '\u011B', 'Ecaron': '\u011A', 'ecir': '\u2256', 'ecirc': '\xEA', 'Ecirc': '\xCA', 'ecolon': '\u2255', 'ecy': '\u044D', 'Ecy': '\u042D', 'eDDot': '\u2A77', 'edot': '\u0117', 'eDot': '\u2251', 'Edot': '\u0116', 'ee': '\u2147', 'efDot': '\u2252', 'efr': '\uD835\uDD22', 'Efr': '\uD835\uDD08', 'eg': '\u2A9A', 'egrave': '\xE8', 'Egrave': '\xC8', 'egs': '\u2A96', 'egsdot': '\u2A98', 'el': '\u2A99', 'Element': '\u2208', 'elinters': '\u23E7', 'ell': '\u2113', 'els': '\u2A95', 'elsdot': '\u2A97', 'emacr': '\u0113', 'Emacr': '\u0112', 'empty': '\u2205', 'emptyset': '\u2205', 'EmptySmallSquare': '\u25FB', 'emptyv': '\u2205', 'EmptyVerySmallSquare': '\u25AB', 'emsp': '\u2003', 'emsp13': '\u2004', 'emsp14': '\u2005', 'eng': '\u014B', 'ENG': '\u014A', 'ensp': '\u2002', 'eogon': '\u0119', 'Eogon': '\u0118', 'eopf': '\uD835\uDD56', 'Eopf': '\uD835\uDD3C', 'epar': '\u22D5', 'eparsl': '\u29E3', 'eplus': '\u2A71', 'epsi': '\u03B5', 'epsilon': '\u03B5', 'Epsilon': '\u0395', 'epsiv': '\u03F5', 'eqcirc': '\u2256', 'eqcolon': '\u2255', 'eqsim': '\u2242', 'eqslantgtr': '\u2A96', 'eqslantless': '\u2A95', 'Equal': '\u2A75', 'equals': '=', 'EqualTilde': '\u2242', 'equest': '\u225F', 'Equilibrium': '\u21CC', 'equiv': '\u2261', 'equivDD': '\u2A78', 'eqvparsl': '\u29E5', 'erarr': '\u2971', 'erDot': '\u2253', 'escr': '\u212F', 'Escr': '\u2130', 'esdot': '\u2250', 'esim': '\u2242', 'Esim': '\u2A73', 'eta': '\u03B7', 'Eta': '\u0397', 'eth': '\xF0', 'ETH': '\xD0', 'euml': '\xEB', 'Euml': '\xCB', 'euro': '\u20AC', 'excl': '!', 'exist': '\u2203', 'Exists': '\u2203', 'expectation': '\u2130', 'exponentiale': '\u2147', 'ExponentialE': '\u2147', 'fallingdotseq': '\u2252', 'fcy': '\u0444', 'Fcy': '\u0424', 'female': '\u2640', 'ffilig': '\uFB03', 'fflig': '\uFB00', 'ffllig': '\uFB04', 'ffr': '\uD835\uDD23', 'Ffr': '\uD835\uDD09', 'filig': '\uFB01', 'FilledSmallSquare': '\u25FC', 'FilledVerySmallSquare': '\u25AA', 'fjlig': 'fj', 'flat': '\u266D', 'fllig': '\uFB02', 'fltns': '\u25B1', 'fnof': '\u0192', 'fopf': '\uD835\uDD57', 'Fopf': '\uD835\uDD3D', 'forall': '\u2200', 'ForAll': '\u2200', 'fork': '\u22D4', 'forkv': '\u2AD9', 'Fouriertrf': '\u2131', 'fpartint': '\u2A0D', 'frac12': '\xBD', 'frac13': '\u2153', 'frac14': '\xBC', 'frac15': '\u2155', 'frac16': '\u2159', 'frac18': '\u215B', 'frac23': '\u2154', 'frac25': '\u2156', 'frac34': '\xBE', 'frac35': '\u2157', 'frac38': '\u215C', 'frac45': '\u2158', 'frac56': '\u215A', 'frac58': '\u215D', 'frac78': '\u215E', 'frasl': '\u2044', 'frown': '\u2322', 'fscr': '\uD835\uDCBB', 'Fscr': '\u2131', 'gacute': '\u01F5', 'gamma': '\u03B3', 'Gamma': '\u0393', 'gammad': '\u03DD', 'Gammad': '\u03DC', 'gap': '\u2A86', 'gbreve': '\u011F', 'Gbreve': '\u011E', 'Gcedil': '\u0122', 'gcirc': '\u011D', 'Gcirc': '\u011C', 'gcy': '\u0433', 'Gcy': '\u0413', 'gdot': '\u0121', 'Gdot': '\u0120', 'ge': '\u2265', 'gE': '\u2267', 'gel': '\u22DB', 'gEl': '\u2A8C', 'geq': '\u2265', 'geqq': '\u2267', 'geqslant': '\u2A7E', 'ges': '\u2A7E', 'gescc': '\u2AA9', 'gesdot': '\u2A80', 'gesdoto': '\u2A82', 'gesdotol': '\u2A84', 'gesl': '\u22DB\uFE00', 'gesles': '\u2A94', 'gfr': '\uD835\uDD24', 'Gfr': '\uD835\uDD0A', 'gg': '\u226B', 'Gg': '\u22D9', 'ggg': '\u22D9', 'gimel': '\u2137', 'gjcy': '\u0453', 'GJcy': '\u0403', 'gl': '\u2277', 'gla': '\u2AA5', 'glE': '\u2A92', 'glj': '\u2AA4', 'gnap': '\u2A8A', 'gnapprox': '\u2A8A', 'gne': '\u2A88', 'gnE': '\u2269', 'gneq': '\u2A88', 'gneqq': '\u2269', 'gnsim': '\u22E7', 'gopf': '\uD835\uDD58', 'Gopf': '\uD835\uDD3E', 'grave': '`', 'GreaterEqual': '\u2265', 'GreaterEqualLess': '\u22DB', 'GreaterFullEqual': '\u2267', 'GreaterGreater': '\u2AA2', 'GreaterLess': '\u2277', 'GreaterSlantEqual': '\u2A7E', 'GreaterTilde': '\u2273', 'gscr': '\u210A', 'Gscr': '\uD835\uDCA2', 'gsim': '\u2273', 'gsime': '\u2A8E', 'gsiml': '\u2A90', 'gt': '>', 'Gt': '\u226B', 'GT': '>', 'gtcc': '\u2AA7', 'gtcir': '\u2A7A', 'gtdot': '\u22D7', 'gtlPar': '\u2995', 'gtquest': '\u2A7C', 'gtrapprox': '\u2A86', 'gtrarr': '\u2978', 'gtrdot': '\u22D7', 'gtreqless': '\u22DB', 'gtreqqless': '\u2A8C', 'gtrless': '\u2277', 'gtrsim': '\u2273', 'gvertneqq': '\u2269\uFE00', 'gvnE': '\u2269\uFE00', 'Hacek': '\u02C7', 'hairsp': '\u200A', 'half': '\xBD', 'hamilt': '\u210B', 'hardcy': '\u044A', 'HARDcy': '\u042A', 'harr': '\u2194', 'hArr': '\u21D4', 'harrcir': '\u2948', 'harrw': '\u21AD', 'Hat': '^', 'hbar': '\u210F', 'hcirc': '\u0125', 'Hcirc': '\u0124', 'hearts': '\u2665', 'heartsuit': '\u2665', 'hellip': '\u2026', 'hercon': '\u22B9', 'hfr': '\uD835\uDD25', 'Hfr': '\u210C', 'HilbertSpace': '\u210B', 'hksearow': '\u2925', 'hkswarow': '\u2926', 'hoarr': '\u21FF', 'homtht': '\u223B', 'hookleftarrow': '\u21A9', 'hookrightarrow': '\u21AA', 'hopf': '\uD835\uDD59', 'Hopf': '\u210D', 'horbar': '\u2015', 'HorizontalLine': '\u2500', 'hscr': '\uD835\uDCBD', 'Hscr': '\u210B', 'hslash': '\u210F', 'hstrok': '\u0127', 'Hstrok': '\u0126', 'HumpDownHump': '\u224E', 'HumpEqual': '\u224F', 'hybull': '\u2043', 'hyphen': '\u2010', 'iacute': '\xED', 'Iacute': '\xCD', 'ic': '\u2063', 'icirc': '\xEE', 'Icirc': '\xCE', 'icy': '\u0438', 'Icy': '\u0418', 'Idot': '\u0130', 'iecy': '\u0435', 'IEcy': '\u0415', 'iexcl': '\xA1', 'iff': '\u21D4', 'ifr': '\uD835\uDD26', 'Ifr': '\u2111', 'igrave': '\xEC', 'Igrave': '\xCC', 'ii': '\u2148', 'iiiint': '\u2A0C', 'iiint': '\u222D', 'iinfin': '\u29DC', 'iiota': '\u2129', 'ijlig': '\u0133', 'IJlig': '\u0132', 'Im': '\u2111', 'imacr': '\u012B', 'Imacr': '\u012A', 'image': '\u2111', 'ImaginaryI': '\u2148', 'imagline': '\u2110', 'imagpart': '\u2111', 'imath': '\u0131', 'imof': '\u22B7', 'imped': '\u01B5', 'Implies': '\u21D2', 'in': '\u2208', 'incare': '\u2105', 'infin': '\u221E', 'infintie': '\u29DD', 'inodot': '\u0131', 'int': '\u222B', 'Int': '\u222C', 'intcal': '\u22BA', 'integers': '\u2124', 'Integral': '\u222B', 'intercal': '\u22BA', 'Intersection': '\u22C2', 'intlarhk': '\u2A17', 'intprod': '\u2A3C', 'InvisibleComma': '\u2063', 'InvisibleTimes': '\u2062', 'iocy': '\u0451', 'IOcy': '\u0401', 'iogon': '\u012F', 'Iogon': '\u012E', 'iopf': '\uD835\uDD5A', 'Iopf': '\uD835\uDD40', 'iota': '\u03B9', 'Iota': '\u0399', 'iprod': '\u2A3C', 'iquest': '\xBF', 'iscr': '\uD835\uDCBE', 'Iscr': '\u2110', 'isin': '\u2208', 'isindot': '\u22F5', 'isinE': '\u22F9', 'isins': '\u22F4', 'isinsv': '\u22F3', 'isinv': '\u2208', 'it': '\u2062', 'itilde': '\u0129', 'Itilde': '\u0128', 'iukcy': '\u0456', 'Iukcy': '\u0406', 'iuml': '\xEF', 'Iuml': '\xCF', 'jcirc': '\u0135', 'Jcirc': '\u0134', 'jcy': '\u0439', 'Jcy': '\u0419', 'jfr': '\uD835\uDD27', 'Jfr': '\uD835\uDD0D', 'jmath': '\u0237', 'jopf': '\uD835\uDD5B', 'Jopf': '\uD835\uDD41', 'jscr': '\uD835\uDCBF', 'Jscr': '\uD835\uDCA5', 'jsercy': '\u0458', 'Jsercy': '\u0408', 'jukcy': '\u0454', 'Jukcy': '\u0404', 'kappa': '\u03BA', 'Kappa': '\u039A', 'kappav': '\u03F0', 'kcedil': '\u0137', 'Kcedil': '\u0136', 'kcy': '\u043A', 'Kcy': '\u041A', 'kfr': '\uD835\uDD28', 'Kfr': '\uD835\uDD0E', 'kgreen': '\u0138', 'khcy': '\u0445', 'KHcy': '\u0425', 'kjcy': '\u045C', 'KJcy': '\u040C', 'kopf': '\uD835\uDD5C', 'Kopf': '\uD835\uDD42', 'kscr': '\uD835\uDCC0', 'Kscr': '\uD835\uDCA6', 'lAarr': '\u21DA', 'lacute': '\u013A', 'Lacute': '\u0139', 'laemptyv': '\u29B4', 'lagran': '\u2112', 'lambda': '\u03BB', 'Lambda': '\u039B', 'lang': '\u27E8', 'Lang': '\u27EA', 'langd': '\u2991', 'langle': '\u27E8', 'lap': '\u2A85', 'Laplacetrf': '\u2112', 'laquo': '\xAB', 'larr': '\u2190', 'lArr': '\u21D0', 'Larr': '\u219E', 'larrb': '\u21E4', 'larrbfs': '\u291F', 'larrfs': '\u291D', 'larrhk': '\u21A9', 'larrlp': '\u21AB', 'larrpl': '\u2939', 'larrsim': '\u2973', 'larrtl': '\u21A2', 'lat': '\u2AAB', 'latail': '\u2919', 'lAtail': '\u291B', 'late': '\u2AAD', 'lates': '\u2AAD\uFE00', 'lbarr': '\u290C', 'lBarr': '\u290E', 'lbbrk': '\u2772', 'lbrace': '{', 'lbrack': '[', 'lbrke': '\u298B', 'lbrksld': '\u298F', 'lbrkslu': '\u298D', 'lcaron': '\u013E', 'Lcaron': '\u013D', 'lcedil': '\u013C', 'Lcedil': '\u013B', 'lceil': '\u2308', 'lcub': '{', 'lcy': '\u043B', 'Lcy': '\u041B', 'ldca': '\u2936', 'ldquo': '\u201C', 'ldquor': '\u201E', 'ldrdhar': '\u2967', 'ldrushar': '\u294B', 'ldsh': '\u21B2', 'le': '\u2264', 'lE': '\u2266', 'LeftAngleBracket': '\u27E8', 'leftarrow': '\u2190', 'Leftarrow': '\u21D0', 'LeftArrow': '\u2190', 'LeftArrowBar': '\u21E4', 'LeftArrowRightArrow': '\u21C6', 'leftarrowtail': '\u21A2', 'LeftCeiling': '\u2308', 'LeftDoubleBracket': '\u27E6', 'LeftDownTeeVector': '\u2961', 'LeftDownVector': '\u21C3', 'LeftDownVectorBar': '\u2959', 'LeftFloor': '\u230A', 'leftharpoondown': '\u21BD', 'leftharpoonup': '\u21BC', 'leftleftarrows': '\u21C7', 'leftrightarrow': '\u2194', 'Leftrightarrow': '\u21D4', 'LeftRightArrow': '\u2194', 'leftrightarrows': '\u21C6', 'leftrightharpoons': '\u21CB', 'leftrightsquigarrow': '\u21AD', 'LeftRightVector': '\u294E', 'LeftTee': '\u22A3', 'LeftTeeArrow': '\u21A4', 'LeftTeeVector': '\u295A', 'leftthreetimes': '\u22CB', 'LeftTriangle': '\u22B2', 'LeftTriangleBar': '\u29CF', 'LeftTriangleEqual': '\u22B4', 'LeftUpDownVector': '\u2951', 'LeftUpTeeVector': '\u2960', 'LeftUpVector': '\u21BF', 'LeftUpVectorBar': '\u2958', 'LeftVector': '\u21BC', 'LeftVectorBar': '\u2952', 'leg': '\u22DA', 'lEg': '\u2A8B', 'leq': '\u2264', 'leqq': '\u2266', 'leqslant': '\u2A7D', 'les': '\u2A7D', 'lescc': '\u2AA8', 'lesdot': '\u2A7F', 'lesdoto': '\u2A81', 'lesdotor': '\u2A83', 'lesg': '\u22DA\uFE00', 'lesges': '\u2A93', 'lessapprox': '\u2A85', 'lessdot': '\u22D6', 'lesseqgtr': '\u22DA', 'lesseqqgtr': '\u2A8B', 'LessEqualGreater': '\u22DA', 'LessFullEqual': '\u2266', 'LessGreater': '\u2276', 'lessgtr': '\u2276', 'LessLess': '\u2AA1', 'lesssim': '\u2272', 'LessSlantEqual': '\u2A7D', 'LessTilde': '\u2272', 'lfisht': '\u297C', 'lfloor': '\u230A', 'lfr': '\uD835\uDD29', 'Lfr': '\uD835\uDD0F', 'lg': '\u2276', 'lgE': '\u2A91', 'lHar': '\u2962', 'lhard': '\u21BD', 'lharu': '\u21BC', 'lharul': '\u296A', 'lhblk': '\u2584', 'ljcy': '\u0459', 'LJcy': '\u0409', 'll': '\u226A', 'Ll': '\u22D8', 'llarr': '\u21C7', 'llcorner': '\u231E', 'Lleftarrow': '\u21DA', 'llhard': '\u296B', 'lltri': '\u25FA', 'lmidot': '\u0140', 'Lmidot': '\u013F', 'lmoust': '\u23B0', 'lmoustache': '\u23B0', 'lnap': '\u2A89', 'lnapprox': '\u2A89', 'lne': '\u2A87', 'lnE': '\u2268', 'lneq': '\u2A87', 'lneqq': '\u2268', 'lnsim': '\u22E6', 'loang': '\u27EC', 'loarr': '\u21FD', 'lobrk': '\u27E6', 'longleftarrow': '\u27F5', 'Longleftarrow': '\u27F8', 'LongLeftArrow': '\u27F5', 'longleftrightarrow': '\u27F7', 'Longleftrightarrow': '\u27FA', 'LongLeftRightArrow': '\u27F7', 'longmapsto': '\u27FC', 'longrightarrow': '\u27F6', 'Longrightarrow': '\u27F9', 'LongRightArrow': '\u27F6', 'looparrowleft': '\u21AB', 'looparrowright': '\u21AC', 'lopar': '\u2985', 'lopf': '\uD835\uDD5D', 'Lopf': '\uD835\uDD43', 'loplus': '\u2A2D', 'lotimes': '\u2A34', 'lowast': '\u2217', 'lowbar': '_', 'LowerLeftArrow': '\u2199', 'LowerRightArrow': '\u2198', 'loz': '\u25CA', 'lozenge': '\u25CA', 'lozf': '\u29EB', 'lpar': '(', 'lparlt': '\u2993', 'lrarr': '\u21C6', 'lrcorner': '\u231F', 'lrhar': '\u21CB', 'lrhard': '\u296D', 'lrm': '\u200E', 'lrtri': '\u22BF', 'lsaquo': '\u2039', 'lscr': '\uD835\uDCC1', 'Lscr': '\u2112', 'lsh': '\u21B0', 'Lsh': '\u21B0', 'lsim': '\u2272', 'lsime': '\u2A8D', 'lsimg': '\u2A8F', 'lsqb': '[', 'lsquo': '\u2018', 'lsquor': '\u201A', 'lstrok': '\u0142', 'Lstrok': '\u0141', 'lt': '<', 'Lt': '\u226A', 'LT': '<', 'ltcc': '\u2AA6', 'ltcir': '\u2A79', 'ltdot': '\u22D6', 'lthree': '\u22CB', 'ltimes': '\u22C9', 'ltlarr': '\u2976', 'ltquest': '\u2A7B', 'ltri': '\u25C3', 'ltrie': '\u22B4', 'ltrif': '\u25C2', 'ltrPar': '\u2996', 'lurdshar': '\u294A', 'luruhar': '\u2966', 'lvertneqq': '\u2268\uFE00', 'lvnE': '\u2268\uFE00', 'macr': '\xAF', 'male': '\u2642', 'malt': '\u2720', 'maltese': '\u2720', 'map': '\u21A6', 'Map': '\u2905', 'mapsto': '\u21A6', 'mapstodown': '\u21A7', 'mapstoleft': '\u21A4', 'mapstoup': '\u21A5', 'marker': '\u25AE', 'mcomma': '\u2A29', 'mcy': '\u043C', 'Mcy': '\u041C', 'mdash': '\u2014', 'mDDot': '\u223A', 'measuredangle': '\u2221', 'MediumSpace': '\u205F', 'Mellintrf': '\u2133', 'mfr': '\uD835\uDD2A', 'Mfr': '\uD835\uDD10', 'mho': '\u2127', 'micro': '\xB5', 'mid': '\u2223', 'midast': '*', 'midcir': '\u2AF0', 'middot': '\xB7', 'minus': '\u2212', 'minusb': '\u229F', 'minusd': '\u2238', 'minusdu': '\u2A2A', 'MinusPlus': '\u2213', 'mlcp': '\u2ADB', 'mldr': '\u2026', 'mnplus': '\u2213', 'models': '\u22A7', 'mopf': '\uD835\uDD5E', 'Mopf': '\uD835\uDD44', 'mp': '\u2213', 'mscr': '\uD835\uDCC2', 'Mscr': '\u2133', 'mstpos': '\u223E', 'mu': '\u03BC', 'Mu': '\u039C', 'multimap': '\u22B8', 'mumap': '\u22B8', 'nabla': '\u2207', 'nacute': '\u0144', 'Nacute': '\u0143', 'nang': '\u2220\u20D2', 'nap': '\u2249', 'napE': '\u2A70\u0338', 'napid': '\u224B\u0338', 'napos': '\u0149', 'napprox': '\u2249', 'natur': '\u266E', 'natural': '\u266E', 'naturals': '\u2115', 'nbsp': '\xA0', 'nbump': '\u224E\u0338', 'nbumpe': '\u224F\u0338', 'ncap': '\u2A43', 'ncaron': '\u0148', 'Ncaron': '\u0147', 'ncedil': '\u0146', 'Ncedil': '\u0145', 'ncong': '\u2247', 'ncongdot': '\u2A6D\u0338', 'ncup': '\u2A42', 'ncy': '\u043D', 'Ncy': '\u041D', 'ndash': '\u2013', 'ne': '\u2260', 'nearhk': '\u2924', 'nearr': '\u2197', 'neArr': '\u21D7', 'nearrow': '\u2197', 'nedot': '\u2250\u0338', 'NegativeMediumSpace': '\u200B', 'NegativeThickSpace': '\u200B', 'NegativeThinSpace': '\u200B', 'NegativeVeryThinSpace': '\u200B', 'nequiv': '\u2262', 'nesear': '\u2928', 'nesim': '\u2242\u0338', 'NestedGreaterGreater': '\u226B', 'NestedLessLess': '\u226A', 'NewLine': '\n', 'nexist': '\u2204', 'nexists': '\u2204', 'nfr': '\uD835\uDD2B', 'Nfr': '\uD835\uDD11', 'nge': '\u2271', 'ngE': '\u2267\u0338', 'ngeq': '\u2271', 'ngeqq': '\u2267\u0338', 'ngeqslant': '\u2A7E\u0338', 'nges': '\u2A7E\u0338', 'nGg': '\u22D9\u0338', 'ngsim': '\u2275', 'ngt': '\u226F', 'nGt': '\u226B\u20D2', 'ngtr': '\u226F', 'nGtv': '\u226B\u0338', 'nharr': '\u21AE', 'nhArr': '\u21CE', 'nhpar': '\u2AF2', 'ni': '\u220B', 'nis': '\u22FC', 'nisd': '\u22FA', 'niv': '\u220B', 'njcy': '\u045A', 'NJcy': '\u040A', 'nlarr': '\u219A', 'nlArr': '\u21CD', 'nldr': '\u2025', 'nle': '\u2270', 'nlE': '\u2266\u0338', 'nleftarrow': '\u219A', 'nLeftarrow': '\u21CD', 'nleftrightarrow': '\u21AE', 'nLeftrightarrow': '\u21CE', 'nleq': '\u2270', 'nleqq': '\u2266\u0338', 'nleqslant': '\u2A7D\u0338', 'nles': '\u2A7D\u0338', 'nless': '\u226E', 'nLl': '\u22D8\u0338', 'nlsim': '\u2274', 'nlt': '\u226E', 'nLt': '\u226A\u20D2', 'nltri': '\u22EA', 'nltrie': '\u22EC', 'nLtv': '\u226A\u0338', 'nmid': '\u2224', 'NoBreak': '\u2060', 'NonBreakingSpace': '\xA0', 'nopf': '\uD835\uDD5F', 'Nopf': '\u2115', 'not': '\xAC', 'Not': '\u2AEC', 'NotCongruent': '\u2262', 'NotCupCap': '\u226D', 'NotDoubleVerticalBar': '\u2226', 'NotElement': '\u2209', 'NotEqual': '\u2260', 'NotEqualTilde': '\u2242\u0338', 'NotExists': '\u2204', 'NotGreater': '\u226F', 'NotGreaterEqual': '\u2271', 'NotGreaterFullEqual': '\u2267\u0338', 'NotGreaterGreater': '\u226B\u0338', 'NotGreaterLess': '\u2279', 'NotGreaterSlantEqual': '\u2A7E\u0338', 'NotGreaterTilde': '\u2275', 'NotHumpDownHump': '\u224E\u0338', 'NotHumpEqual': '\u224F\u0338', 'notin': '\u2209', 'notindot': '\u22F5\u0338', 'notinE': '\u22F9\u0338', 'notinva': '\u2209', 'notinvb': '\u22F7', 'notinvc': '\u22F6', 'NotLeftTriangle': '\u22EA', 'NotLeftTriangleBar': '\u29CF\u0338', 'NotLeftTriangleEqual': '\u22EC', 'NotLess': '\u226E', 'NotLessEqual': '\u2270', 'NotLessGreater': '\u2278', 'NotLessLess': '\u226A\u0338', 'NotLessSlantEqual': '\u2A7D\u0338', 'NotLessTilde': '\u2274', 'NotNestedGreaterGreater': '\u2AA2\u0338', 'NotNestedLessLess': '\u2AA1\u0338', 'notni': '\u220C', 'notniva': '\u220C', 'notnivb': '\u22FE', 'notnivc': '\u22FD', 'NotPrecedes': '\u2280', 'NotPrecedesEqual': '\u2AAF\u0338', 'NotPrecedesSlantEqual': '\u22E0', 'NotReverseElement': '\u220C', 'NotRightTriangle': '\u22EB', 'NotRightTriangleBar': '\u29D0\u0338', 'NotRightTriangleEqual': '\u22ED', 'NotSquareSubset': '\u228F\u0338', 'NotSquareSubsetEqual': '\u22E2', 'NotSquareSuperset': '\u2290\u0338', 'NotSquareSupersetEqual': '\u22E3', 'NotSubset': '\u2282\u20D2', 'NotSubsetEqual': '\u2288', 'NotSucceeds': '\u2281', 'NotSucceedsEqual': '\u2AB0\u0338', 'NotSucceedsSlantEqual': '\u22E1', 'NotSucceedsTilde': '\u227F\u0338', 'NotSuperset': '\u2283\u20D2', 'NotSupersetEqual': '\u2289', 'NotTilde': '\u2241', 'NotTildeEqual': '\u2244', 'NotTildeFullEqual': '\u2247', 'NotTildeTilde': '\u2249', 'NotVerticalBar': '\u2224', 'npar': '\u2226', 'nparallel': '\u2226', 'nparsl': '\u2AFD\u20E5', 'npart': '\u2202\u0338', 'npolint': '\u2A14', 'npr': '\u2280', 'nprcue': '\u22E0', 'npre': '\u2AAF\u0338', 'nprec': '\u2280', 'npreceq': '\u2AAF\u0338', 'nrarr': '\u219B', 'nrArr': '\u21CF', 'nrarrc': '\u2933\u0338', 'nrarrw': '\u219D\u0338', 'nrightarrow': '\u219B', 'nRightarrow': '\u21CF', 'nrtri': '\u22EB', 'nrtrie': '\u22ED', 'nsc': '\u2281', 'nsccue': '\u22E1', 'nsce': '\u2AB0\u0338', 'nscr': '\uD835\uDCC3', 'Nscr': '\uD835\uDCA9', 'nshortmid': '\u2224', 'nshortparallel': '\u2226', 'nsim': '\u2241', 'nsime': '\u2244', 'nsimeq': '\u2244', 'nsmid': '\u2224', 'nspar': '\u2226', 'nsqsube': '\u22E2', 'nsqsupe': '\u22E3', 'nsub': '\u2284', 'nsube': '\u2288', 'nsubE': '\u2AC5\u0338', 'nsubset': '\u2282\u20D2', 'nsubseteq': '\u2288', 'nsubseteqq': '\u2AC5\u0338', 'nsucc': '\u2281', 'nsucceq': '\u2AB0\u0338', 'nsup': '\u2285', 'nsupe': '\u2289', 'nsupE': '\u2AC6\u0338', 'nsupset': '\u2283\u20D2', 'nsupseteq': '\u2289', 'nsupseteqq': '\u2AC6\u0338', 'ntgl': '\u2279', 'ntilde': '\xF1', 'Ntilde': '\xD1', 'ntlg': '\u2278', 'ntriangleleft': '\u22EA', 'ntrianglelefteq': '\u22EC', 'ntriangleright': '\u22EB', 'ntrianglerighteq': '\u22ED', 'nu': '\u03BD', 'Nu': '\u039D', 'num': '#', 'numero': '\u2116', 'numsp': '\u2007', 'nvap': '\u224D\u20D2', 'nvdash': '\u22AC', 'nvDash': '\u22AD', 'nVdash': '\u22AE', 'nVDash': '\u22AF', 'nvge': '\u2265\u20D2', 'nvgt': '>\u20D2', 'nvHarr': '\u2904', 'nvinfin': '\u29DE', 'nvlArr': '\u2902', 'nvle': '\u2264\u20D2', 'nvlt': '<\u20D2', 'nvltrie': '\u22B4\u20D2', 'nvrArr': '\u2903', 'nvrtrie': '\u22B5\u20D2', 'nvsim': '\u223C\u20D2', 'nwarhk': '\u2923', 'nwarr': '\u2196', 'nwArr': '\u21D6', 'nwarrow': '\u2196', 'nwnear': '\u2927', 'oacute': '\xF3', 'Oacute': '\xD3', 'oast': '\u229B', 'ocir': '\u229A', 'ocirc': '\xF4', 'Ocirc': '\xD4', 'ocy': '\u043E', 'Ocy': '\u041E', 'odash': '\u229D', 'odblac': '\u0151', 'Odblac': '\u0150', 'odiv': '\u2A38', 'odot': '\u2299', 'odsold': '\u29BC', 'oelig': '\u0153', 'OElig': '\u0152', 'ofcir': '\u29BF', 'ofr': '\uD835\uDD2C', 'Ofr': '\uD835\uDD12', 'ogon': '\u02DB', 'ograve': '\xF2', 'Ograve': '\xD2', 'ogt': '\u29C1', 'ohbar': '\u29B5', 'ohm': '\u03A9', 'oint': '\u222E', 'olarr': '\u21BA', 'olcir': '\u29BE', 'olcross': '\u29BB', 'oline': '\u203E', 'olt': '\u29C0', 'omacr': '\u014D', 'Omacr': '\u014C', 'omega': '\u03C9', 'Omega': '\u03A9', 'omicron': '\u03BF', 'Omicron': '\u039F', 'omid': '\u29B6', 'ominus': '\u2296', 'oopf': '\uD835\uDD60', 'Oopf': '\uD835\uDD46', 'opar': '\u29B7', 'OpenCurlyDoubleQuote': '\u201C', 'OpenCurlyQuote': '\u2018', 'operp': '\u29B9', 'oplus': '\u2295', 'or': '\u2228', 'Or': '\u2A54', 'orarr': '\u21BB', 'ord': '\u2A5D', 'order': '\u2134', 'orderof': '\u2134', 'ordf': '\xAA', 'ordm': '\xBA', 'origof': '\u22B6', 'oror': '\u2A56', 'orslope': '\u2A57', 'orv': '\u2A5B', 'oS': '\u24C8', 'oscr': '\u2134', 'Oscr': '\uD835\uDCAA', 'oslash': '\xF8', 'Oslash': '\xD8', 'osol': '\u2298', 'otilde': '\xF5', 'Otilde': '\xD5', 'otimes': '\u2297', 'Otimes': '\u2A37', 'otimesas': '\u2A36', 'ouml': '\xF6', 'Ouml': '\xD6', 'ovbar': '\u233D', 'OverBar': '\u203E', 'OverBrace': '\u23DE', 'OverBracket': '\u23B4', 'OverParenthesis': '\u23DC', 'par': '\u2225', 'para': '\xB6', 'parallel': '\u2225', 'parsim': '\u2AF3', 'parsl': '\u2AFD', 'part': '\u2202', 'PartialD': '\u2202', 'pcy': '\u043F', 'Pcy': '\u041F', 'percnt': '%', 'period': '.', 'permil': '\u2030', 'perp': '\u22A5', 'pertenk': '\u2031', 'pfr': '\uD835\uDD2D', 'Pfr': '\uD835\uDD13', 'phi': '\u03C6', 'Phi': '\u03A6', 'phiv': '\u03D5', 'phmmat': '\u2133', 'phone': '\u260E', 'pi': '\u03C0', 'Pi': '\u03A0', 'pitchfork': '\u22D4', 'piv': '\u03D6', 'planck': '\u210F', 'planckh': '\u210E', 'plankv': '\u210F', 'plus': '+', 'plusacir': '\u2A23', 'plusb': '\u229E', 'pluscir': '\u2A22', 'plusdo': '\u2214', 'plusdu': '\u2A25', 'pluse': '\u2A72', 'PlusMinus': '\xB1', 'plusmn': '\xB1', 'plussim': '\u2A26', 'plustwo': '\u2A27', 'pm': '\xB1', 'Poincareplane': '\u210C', 'pointint': '\u2A15', 'popf': '\uD835\uDD61', 'Popf': '\u2119', 'pound': '\xA3', 'pr': '\u227A', 'Pr': '\u2ABB', 'prap': '\u2AB7', 'prcue': '\u227C', 'pre': '\u2AAF', 'prE': '\u2AB3', 'prec': '\u227A', 'precapprox': '\u2AB7', 'preccurlyeq': '\u227C', 'Precedes': '\u227A', 'PrecedesEqual': '\u2AAF', 'PrecedesSlantEqual': '\u227C', 'PrecedesTilde': '\u227E', 'preceq': '\u2AAF', 'precnapprox': '\u2AB9', 'precneqq': '\u2AB5', 'precnsim': '\u22E8', 'precsim': '\u227E', 'prime': '\u2032', 'Prime': '\u2033', 'primes': '\u2119', 'prnap': '\u2AB9', 'prnE': '\u2AB5', 'prnsim': '\u22E8', 'prod': '\u220F', 'Product': '\u220F', 'profalar': '\u232E', 'profline': '\u2312', 'profsurf': '\u2313', 'prop': '\u221D', 'Proportion': '\u2237', 'Proportional': '\u221D', 'propto': '\u221D', 'prsim': '\u227E', 'prurel': '\u22B0', 'pscr': '\uD835\uDCC5', 'Pscr': '\uD835\uDCAB', 'psi': '\u03C8', 'Psi': '\u03A8', 'puncsp': '\u2008', 'qfr': '\uD835\uDD2E', 'Qfr': '\uD835\uDD14', 'qint': '\u2A0C', 'qopf': '\uD835\uDD62', 'Qopf': '\u211A', 'qprime': '\u2057', 'qscr': '\uD835\uDCC6', 'Qscr': '\uD835\uDCAC', 'quaternions': '\u210D', 'quatint': '\u2A16', 'quest': '?', 'questeq': '\u225F', 'quot': '"', 'QUOT': '"', 'rAarr': '\u21DB', 'race': '\u223D\u0331', 'racute': '\u0155', 'Racute': '\u0154', 'radic': '\u221A', 'raemptyv': '\u29B3', 'rang': '\u27E9', 'Rang': '\u27EB', 'rangd': '\u2992', 'range': '\u29A5', 'rangle': '\u27E9', 'raquo': '\xBB', 'rarr': '\u2192', 'rArr': '\u21D2', 'Rarr': '\u21A0', 'rarrap': '\u2975', 'rarrb': '\u21E5', 'rarrbfs': '\u2920', 'rarrc': '\u2933', 'rarrfs': '\u291E', 'rarrhk': '\u21AA', 'rarrlp': '\u21AC', 'rarrpl': '\u2945', 'rarrsim': '\u2974', 'rarrtl': '\u21A3', 'Rarrtl': '\u2916', 'rarrw': '\u219D', 'ratail': '\u291A', 'rAtail': '\u291C', 'ratio': '\u2236', 'rationals': '\u211A', 'rbarr': '\u290D', 'rBarr': '\u290F', 'RBarr': '\u2910', 'rbbrk': '\u2773', 'rbrace': '}', 'rbrack': ']', 'rbrke': '\u298C', 'rbrksld': '\u298E', 'rbrkslu': '\u2990', 'rcaron': '\u0159', 'Rcaron': '\u0158', 'rcedil': '\u0157', 'Rcedil': '\u0156', 'rceil': '\u2309', 'rcub': '}', 'rcy': '\u0440', 'Rcy': '\u0420', 'rdca': '\u2937', 'rdldhar': '\u2969', 'rdquo': '\u201D', 'rdquor': '\u201D', 'rdsh': '\u21B3', 'Re': '\u211C', 'real': '\u211C', 'realine': '\u211B', 'realpart': '\u211C', 'reals': '\u211D', 'rect': '\u25AD', 'reg': '\xAE', 'REG': '\xAE', 'ReverseElement': '\u220B', 'ReverseEquilibrium': '\u21CB', 'ReverseUpEquilibrium': '\u296F', 'rfisht': '\u297D', 'rfloor': '\u230B', 'rfr': '\uD835\uDD2F', 'Rfr': '\u211C', 'rHar': '\u2964', 'rhard': '\u21C1', 'rharu': '\u21C0', 'rharul': '\u296C', 'rho': '\u03C1', 'Rho': '\u03A1', 'rhov': '\u03F1', 'RightAngleBracket': '\u27E9', 'rightarrow': '\u2192', 'Rightarrow': '\u21D2', 'RightArrow': '\u2192', 'RightArrowBar': '\u21E5', 'RightArrowLeftArrow': '\u21C4', 'rightarrowtail': '\u21A3', 'RightCeiling': '\u2309', 'RightDoubleBracket': '\u27E7', 'RightDownTeeVector': '\u295D', 'RightDownVector': '\u21C2', 'RightDownVectorBar': '\u2955', 'RightFloor': '\u230B', 'rightharpoondown': '\u21C1', 'rightharpoonup': '\u21C0', 'rightleftarrows': '\u21C4', 'rightleftharpoons': '\u21CC', 'rightrightarrows': '\u21C9', 'rightsquigarrow': '\u219D', 'RightTee': '\u22A2', 'RightTeeArrow': '\u21A6', 'RightTeeVector': '\u295B', 'rightthreetimes': '\u22CC', 'RightTriangle': '\u22B3', 'RightTriangleBar': '\u29D0', 'RightTriangleEqual': '\u22B5', 'RightUpDownVector': '\u294F', 'RightUpTeeVector': '\u295C', 'RightUpVector': '\u21BE', 'RightUpVectorBar': '\u2954', 'RightVector': '\u21C0', 'RightVectorBar': '\u2953', 'ring': '\u02DA', 'risingdotseq': '\u2253', 'rlarr': '\u21C4', 'rlhar': '\u21CC', 'rlm': '\u200F', 'rmoust': '\u23B1', 'rmoustache': '\u23B1', 'rnmid': '\u2AEE', 'roang': '\u27ED', 'roarr': '\u21FE', 'robrk': '\u27E7', 'ropar': '\u2986', 'ropf': '\uD835\uDD63', 'Ropf': '\u211D', 'roplus': '\u2A2E', 'rotimes': '\u2A35', 'RoundImplies': '\u2970', 'rpar': ')', 'rpargt': '\u2994', 'rppolint': '\u2A12', 'rrarr': '\u21C9', 'Rrightarrow': '\u21DB', 'rsaquo': '\u203A', 'rscr': '\uD835\uDCC7', 'Rscr': '\u211B', 'rsh': '\u21B1', 'Rsh': '\u21B1', 'rsqb': ']', 'rsquo': '\u2019', 'rsquor': '\u2019', 'rthree': '\u22CC', 'rtimes': '\u22CA', 'rtri': '\u25B9', 'rtrie': '\u22B5', 'rtrif': '\u25B8', 'rtriltri': '\u29CE', 'RuleDelayed': '\u29F4', 'ruluhar': '\u2968', 'rx': '\u211E', 'sacute': '\u015B', 'Sacute': '\u015A', 'sbquo': '\u201A', 'sc': '\u227B', 'Sc': '\u2ABC', 'scap': '\u2AB8', 'scaron': '\u0161', 'Scaron': '\u0160', 'sccue': '\u227D', 'sce': '\u2AB0', 'scE': '\u2AB4', 'scedil': '\u015F', 'Scedil': '\u015E', 'scirc': '\u015D', 'Scirc': '\u015C', 'scnap': '\u2ABA', 'scnE': '\u2AB6', 'scnsim': '\u22E9', 'scpolint': '\u2A13', 'scsim': '\u227F', 'scy': '\u0441', 'Scy': '\u0421', 'sdot': '\u22C5', 'sdotb': '\u22A1', 'sdote': '\u2A66', 'searhk': '\u2925', 'searr': '\u2198', 'seArr': '\u21D8', 'searrow': '\u2198', 'sect': '\xA7', 'semi': ';', 'seswar': '\u2929', 'setminus': '\u2216', 'setmn': '\u2216', 'sext': '\u2736', 'sfr': '\uD835\uDD30', 'Sfr': '\uD835\uDD16', 'sfrown': '\u2322', 'sharp': '\u266F', 'shchcy': '\u0449', 'SHCHcy': '\u0429', 'shcy': '\u0448', 'SHcy': '\u0428', 'ShortDownArrow': '\u2193', 'ShortLeftArrow': '\u2190', 'shortmid': '\u2223', 'shortparallel': '\u2225', 'ShortRightArrow': '\u2192', 'ShortUpArrow': '\u2191', 'shy': '\xAD', 'sigma': '\u03C3', 'Sigma': '\u03A3', 'sigmaf': '\u03C2', 'sigmav': '\u03C2', 'sim': '\u223C', 'simdot': '\u2A6A', 'sime': '\u2243', 'simeq': '\u2243', 'simg': '\u2A9E', 'simgE': '\u2AA0', 'siml': '\u2A9D', 'simlE': '\u2A9F', 'simne': '\u2246', 'simplus': '\u2A24', 'simrarr': '\u2972', 'slarr': '\u2190', 'SmallCircle': '\u2218', 'smallsetminus': '\u2216', 'smashp': '\u2A33', 'smeparsl': '\u29E4', 'smid': '\u2223', 'smile': '\u2323', 'smt': '\u2AAA', 'smte': '\u2AAC', 'smtes': '\u2AAC\uFE00', 'softcy': '\u044C', 'SOFTcy': '\u042C', 'sol': '/', 'solb': '\u29C4', 'solbar': '\u233F', 'sopf': '\uD835\uDD64', 'Sopf': '\uD835\uDD4A', 'spades': '\u2660', 'spadesuit': '\u2660', 'spar': '\u2225', 'sqcap': '\u2293', 'sqcaps': '\u2293\uFE00', 'sqcup': '\u2294', 'sqcups': '\u2294\uFE00', 'Sqrt': '\u221A', 'sqsub': '\u228F', 'sqsube': '\u2291', 'sqsubset': '\u228F', 'sqsubseteq': '\u2291', 'sqsup': '\u2290', 'sqsupe': '\u2292', 'sqsupset': '\u2290', 'sqsupseteq': '\u2292', 'squ': '\u25A1', 'square': '\u25A1', 'Square': '\u25A1', 'SquareIntersection': '\u2293', 'SquareSubset': '\u228F', 'SquareSubsetEqual': '\u2291', 'SquareSuperset': '\u2290', 'SquareSupersetEqual': '\u2292', 'SquareUnion': '\u2294', 'squarf': '\u25AA', 'squf': '\u25AA', 'srarr': '\u2192', 'sscr': '\uD835\uDCC8', 'Sscr': '\uD835\uDCAE', 'ssetmn': '\u2216', 'ssmile': '\u2323', 'sstarf': '\u22C6', 'star': '\u2606', 'Star': '\u22C6', 'starf': '\u2605', 'straightepsilon': '\u03F5', 'straightphi': '\u03D5', 'strns': '\xAF', 'sub': '\u2282', 'Sub': '\u22D0', 'subdot': '\u2ABD', 'sube': '\u2286', 'subE': '\u2AC5', 'subedot': '\u2AC3', 'submult': '\u2AC1', 'subne': '\u228A', 'subnE': '\u2ACB', 'subplus': '\u2ABF', 'subrarr': '\u2979', 'subset': '\u2282', 'Subset': '\u22D0', 'subseteq': '\u2286', 'subseteqq': '\u2AC5', 'SubsetEqual': '\u2286', 'subsetneq': '\u228A', 'subsetneqq': '\u2ACB', 'subsim': '\u2AC7', 'subsub': '\u2AD5', 'subsup': '\u2AD3', 'succ': '\u227B', 'succapprox': '\u2AB8', 'succcurlyeq': '\u227D', 'Succeeds': '\u227B', 'SucceedsEqual': '\u2AB0', 'SucceedsSlantEqual': '\u227D', 'SucceedsTilde': '\u227F', 'succeq': '\u2AB0', 'succnapprox': '\u2ABA', 'succneqq': '\u2AB6', 'succnsim': '\u22E9', 'succsim': '\u227F', 'SuchThat': '\u220B', 'sum': '\u2211', 'Sum': '\u2211', 'sung': '\u266A', 'sup': '\u2283', 'Sup': '\u22D1', 'sup1': '\xB9', 'sup2': '\xB2', 'sup3': '\xB3', 'supdot': '\u2ABE', 'supdsub': '\u2AD8', 'supe': '\u2287', 'supE': '\u2AC6', 'supedot': '\u2AC4', 'Superset': '\u2283', 'SupersetEqual': '\u2287', 'suphsol': '\u27C9', 'suphsub': '\u2AD7', 'suplarr': '\u297B', 'supmult': '\u2AC2', 'supne': '\u228B', 'supnE': '\u2ACC', 'supplus': '\u2AC0', 'supset': '\u2283', 'Supset': '\u22D1', 'supseteq': '\u2287', 'supseteqq': '\u2AC6', 'supsetneq': '\u228B', 'supsetneqq': '\u2ACC', 'supsim': '\u2AC8', 'supsub': '\u2AD4', 'supsup': '\u2AD6', 'swarhk': '\u2926', 'swarr': '\u2199', 'swArr': '\u21D9', 'swarrow': '\u2199', 'swnwar': '\u292A', 'szlig': '\xDF', 'Tab': '\t', 'target': '\u2316', 'tau': '\u03C4', 'Tau': '\u03A4', 'tbrk': '\u23B4', 'tcaron': '\u0165', 'Tcaron': '\u0164', 'tcedil': '\u0163', 'Tcedil': '\u0162', 'tcy': '\u0442', 'Tcy': '\u0422', 'tdot': '\u20DB', 'telrec': '\u2315', 'tfr': '\uD835\uDD31', 'Tfr': '\uD835\uDD17', 'there4': '\u2234', 'therefore': '\u2234', 'Therefore': '\u2234', 'theta': '\u03B8', 'Theta': '\u0398', 'thetasym': '\u03D1', 'thetav': '\u03D1', 'thickapprox': '\u2248', 'thicksim': '\u223C', 'ThickSpace': '\u205F\u200A', 'thinsp': '\u2009', 'ThinSpace': '\u2009', 'thkap': '\u2248', 'thksim': '\u223C', 'thorn': '\xFE', 'THORN': '\xDE', 'tilde': '\u02DC', 'Tilde': '\u223C', 'TildeEqual': '\u2243', 'TildeFullEqual': '\u2245', 'TildeTilde': '\u2248', 'times': '\xD7', 'timesb': '\u22A0', 'timesbar': '\u2A31', 'timesd': '\u2A30', 'tint': '\u222D', 'toea': '\u2928', 'top': '\u22A4', 'topbot': '\u2336', 'topcir': '\u2AF1', 'topf': '\uD835\uDD65', 'Topf': '\uD835\uDD4B', 'topfork': '\u2ADA', 'tosa': '\u2929', 'tprime': '\u2034', 'trade': '\u2122', 'TRADE': '\u2122', 'triangle': '\u25B5', 'triangledown': '\u25BF', 'triangleleft': '\u25C3', 'trianglelefteq': '\u22B4', 'triangleq': '\u225C', 'triangleright': '\u25B9', 'trianglerighteq': '\u22B5', 'tridot': '\u25EC', 'trie': '\u225C', 'triminus': '\u2A3A', 'TripleDot': '\u20DB', 'triplus': '\u2A39', 'trisb': '\u29CD', 'tritime': '\u2A3B', 'trpezium': '\u23E2', 'tscr': '\uD835\uDCC9', 'Tscr': '\uD835\uDCAF', 'tscy': '\u0446', 'TScy': '\u0426', 'tshcy': '\u045B', 'TSHcy': '\u040B', 'tstrok': '\u0167', 'Tstrok': '\u0166', 'twixt': '\u226C', 'twoheadleftarrow': '\u219E', 'twoheadrightarrow': '\u21A0', 'uacute': '\xFA', 'Uacute': '\xDA', 'uarr': '\u2191', 'uArr': '\u21D1', 'Uarr': '\u219F', 'Uarrocir': '\u2949', 'ubrcy': '\u045E', 'Ubrcy': '\u040E', 'ubreve': '\u016D', 'Ubreve': '\u016C', 'ucirc': '\xFB', 'Ucirc': '\xDB', 'ucy': '\u0443', 'Ucy': '\u0423', 'udarr': '\u21C5', 'udblac': '\u0171', 'Udblac': '\u0170', 'udhar': '\u296E', 'ufisht': '\u297E', 'ufr': '\uD835\uDD32', 'Ufr': '\uD835\uDD18', 'ugrave': '\xF9', 'Ugrave': '\xD9', 'uHar': '\u2963', 'uharl': '\u21BF', 'uharr': '\u21BE', 'uhblk': '\u2580', 'ulcorn': '\u231C', 'ulcorner': '\u231C', 'ulcrop': '\u230F', 'ultri': '\u25F8', 'umacr': '\u016B', 'Umacr': '\u016A', 'uml': '\xA8', 'UnderBar': '_', 'UnderBrace': '\u23DF', 'UnderBracket': '\u23B5', 'UnderParenthesis': '\u23DD', 'Union': '\u22C3', 'UnionPlus': '\u228E', 'uogon': '\u0173', 'Uogon': '\u0172', 'uopf': '\uD835\uDD66', 'Uopf': '\uD835\uDD4C', 'uparrow': '\u2191', 'Uparrow': '\u21D1', 'UpArrow': '\u2191', 'UpArrowBar': '\u2912', 'UpArrowDownArrow': '\u21C5', 'updownarrow': '\u2195', 'Updownarrow': '\u21D5', 'UpDownArrow': '\u2195', 'UpEquilibrium': '\u296E', 'upharpoonleft': '\u21BF', 'upharpoonright': '\u21BE', 'uplus': '\u228E', 'UpperLeftArrow': '\u2196', 'UpperRightArrow': '\u2197', 'upsi': '\u03C5', 'Upsi': '\u03D2', 'upsih': '\u03D2', 'upsilon': '\u03C5', 'Upsilon': '\u03A5', 'UpTee': '\u22A5', 'UpTeeArrow': '\u21A5', 'upuparrows': '\u21C8', 'urcorn': '\u231D', 'urcorner': '\u231D', 'urcrop': '\u230E', 'uring': '\u016F', 'Uring': '\u016E', 'urtri': '\u25F9', 'uscr': '\uD835\uDCCA', 'Uscr': '\uD835\uDCB0', 'utdot': '\u22F0', 'utilde': '\u0169', 'Utilde': '\u0168', 'utri': '\u25B5', 'utrif': '\u25B4', 'uuarr': '\u21C8', 'uuml': '\xFC', 'Uuml': '\xDC', 'uwangle': '\u29A7', 'vangrt': '\u299C', 'varepsilon': '\u03F5', 'varkappa': '\u03F0', 'varnothing': '\u2205', 'varphi': '\u03D5', 'varpi': '\u03D6', 'varpropto': '\u221D', 'varr': '\u2195', 'vArr': '\u21D5', 'varrho': '\u03F1', 'varsigma': '\u03C2', 'varsubsetneq': '\u228A\uFE00', 'varsubsetneqq': '\u2ACB\uFE00', 'varsupsetneq': '\u228B\uFE00', 'varsupsetneqq': '\u2ACC\uFE00', 'vartheta': '\u03D1', 'vartriangleleft': '\u22B2', 'vartriangleright': '\u22B3', 'vBar': '\u2AE8', 'Vbar': '\u2AEB', 'vBarv': '\u2AE9', 'vcy': '\u0432', 'Vcy': '\u0412', 'vdash': '\u22A2', 'vDash': '\u22A8', 'Vdash': '\u22A9', 'VDash': '\u22AB', 'Vdashl': '\u2AE6', 'vee': '\u2228', 'Vee': '\u22C1', 'veebar': '\u22BB', 'veeeq': '\u225A', 'vellip': '\u22EE', 'verbar': '|', 'Verbar': '\u2016', 'vert': '|', 'Vert': '\u2016', 'VerticalBar': '\u2223', 'VerticalLine': '|', 'VerticalSeparator': '\u2758', 'VerticalTilde': '\u2240', 'VeryThinSpace': '\u200A', 'vfr': '\uD835\uDD33', 'Vfr': '\uD835\uDD19', 'vltri': '\u22B2', 'vnsub': '\u2282\u20D2', 'vnsup': '\u2283\u20D2', 'vopf': '\uD835\uDD67', 'Vopf': '\uD835\uDD4D', 'vprop': '\u221D', 'vrtri': '\u22B3', 'vscr': '\uD835\uDCCB', 'Vscr': '\uD835\uDCB1', 'vsubne': '\u228A\uFE00', 'vsubnE': '\u2ACB\uFE00', 'vsupne': '\u228B\uFE00', 'vsupnE': '\u2ACC\uFE00', 'Vvdash': '\u22AA', 'vzigzag': '\u299A', 'wcirc': '\u0175', 'Wcirc': '\u0174', 'wedbar': '\u2A5F', 'wedge': '\u2227', 'Wedge': '\u22C0', 'wedgeq': '\u2259', 'weierp': '\u2118', 'wfr': '\uD835\uDD34', 'Wfr': '\uD835\uDD1A', 'wopf': '\uD835\uDD68', 'Wopf': '\uD835\uDD4E', 'wp': '\u2118', 'wr': '\u2240', 'wreath': '\u2240', 'wscr': '\uD835\uDCCC', 'Wscr': '\uD835\uDCB2', 'xcap': '\u22C2', 'xcirc': '\u25EF', 'xcup': '\u22C3', 'xdtri': '\u25BD', 'xfr': '\uD835\uDD35', 'Xfr': '\uD835\uDD1B', 'xharr': '\u27F7', 'xhArr': '\u27FA', 'xi': '\u03BE', 'Xi': '\u039E', 'xlarr': '\u27F5', 'xlArr': '\u27F8', 'xmap': '\u27FC', 'xnis': '\u22FB', 'xodot': '\u2A00', 'xopf': '\uD835\uDD69', 'Xopf': '\uD835\uDD4F', 'xoplus': '\u2A01', 'xotime': '\u2A02', 'xrarr': '\u27F6', 'xrArr': '\u27F9', 'xscr': '\uD835\uDCCD', 'Xscr': '\uD835\uDCB3', 'xsqcup': '\u2A06', 'xuplus': '\u2A04', 'xutri': '\u25B3', 'xvee': '\u22C1', 'xwedge': '\u22C0', 'yacute': '\xFD', 'Yacute': '\xDD', 'yacy': '\u044F', 'YAcy': '\u042F', 'ycirc': '\u0177', 'Ycirc': '\u0176', 'ycy': '\u044B', 'Ycy': '\u042B', 'yen': '\xA5', 'yfr': '\uD835\uDD36', 'Yfr': '\uD835\uDD1C', 'yicy': '\u0457', 'YIcy': '\u0407', 'yopf': '\uD835\uDD6A', 'Yopf': '\uD835\uDD50', 'yscr': '\uD835\uDCCE', 'Yscr': '\uD835\uDCB4', 'yucy': '\u044E', 'YUcy': '\u042E', 'yuml': '\xFF', 'Yuml': '\u0178', 'zacute': '\u017A', 'Zacute': '\u0179', 'zcaron': '\u017E', 'Zcaron': '\u017D', 'zcy': '\u0437', 'Zcy': '\u0417', 'zdot': '\u017C', 'Zdot': '\u017B', 'zeetrf': '\u2128', 'ZeroWidthSpace': '\u200B', 'zeta': '\u03B6', 'Zeta': '\u0396', 'zfr': '\uD835\uDD37', 'Zfr': '\u2128', 'zhcy': '\u0436', 'ZHcy': '\u0416', 'zigrarr': '\u21DD', 'zopf': '\uD835\uDD6B', 'Zopf': '\u2124', 'zscr': '\uD835\uDCCF', 'Zscr': '\uD835\uDCB5', 'zwj': '\u200D', 'zwnj': '\u200C' };
	var decodeMapLegacy = { 'aacute': '\xE1', 'Aacute': '\xC1', 'acirc': '\xE2', 'Acirc': '\xC2', 'acute': '\xB4', 'aelig': '\xE6', 'AElig': '\xC6', 'agrave': '\xE0', 'Agrave': '\xC0', 'amp': '&', 'AMP': '&', 'aring': '\xE5', 'Aring': '\xC5', 'atilde': '\xE3', 'Atilde': '\xC3', 'auml': '\xE4', 'Auml': '\xC4', 'brvbar': '\xA6', 'ccedil': '\xE7', 'Ccedil': '\xC7', 'cedil': '\xB8', 'cent': '\xA2', 'copy': '\xA9', 'COPY': '\xA9', 'curren': '\xA4', 'deg': '\xB0', 'divide': '\xF7', 'eacute': '\xE9', 'Eacute': '\xC9', 'ecirc': '\xEA', 'Ecirc': '\xCA', 'egrave': '\xE8', 'Egrave': '\xC8', 'eth': '\xF0', 'ETH': '\xD0', 'euml': '\xEB', 'Euml': '\xCB', 'frac12': '\xBD', 'frac14': '\xBC', 'frac34': '\xBE', 'gt': '>', 'GT': '>', 'iacute': '\xED', 'Iacute': '\xCD', 'icirc': '\xEE', 'Icirc': '\xCE', 'iexcl': '\xA1', 'igrave': '\xEC', 'Igrave': '\xCC', 'iquest': '\xBF', 'iuml': '\xEF', 'Iuml': '\xCF', 'laquo': '\xAB', 'lt': '<', 'LT': '<', 'macr': '\xAF', 'micro': '\xB5', 'middot': '\xB7', 'nbsp': '\xA0', 'not': '\xAC', 'ntilde': '\xF1', 'Ntilde': '\xD1', 'oacute': '\xF3', 'Oacute': '\xD3', 'ocirc': '\xF4', 'Ocirc': '\xD4', 'ograve': '\xF2', 'Ograve': '\xD2', 'ordf': '\xAA', 'ordm': '\xBA', 'oslash': '\xF8', 'Oslash': '\xD8', 'otilde': '\xF5', 'Otilde': '\xD5', 'ouml': '\xF6', 'Ouml': '\xD6', 'para': '\xB6', 'plusmn': '\xB1', 'pound': '\xA3', 'quot': '"', 'QUOT': '"', 'raquo': '\xBB', 'reg': '\xAE', 'REG': '\xAE', 'sect': '\xA7', 'shy': '\xAD', 'sup1': '\xB9', 'sup2': '\xB2', 'sup3': '\xB3', 'szlig': '\xDF', 'thorn': '\xFE', 'THORN': '\xDE', 'times': '\xD7', 'uacute': '\xFA', 'Uacute': '\xDA', 'ucirc': '\xFB', 'Ucirc': '\xDB', 'ugrave': '\xF9', 'Ugrave': '\xD9', 'uml': '\xA8', 'uuml': '\xFC', 'Uuml': '\xDC', 'yacute': '\xFD', 'Yacute': '\xDD', 'yen': '\xA5', 'yuml': '\xFF' };
	var decodeMapNumeric = { '0': '\uFFFD', '128': '\u20AC', '130': '\u201A', '131': '\u0192', '132': '\u201E', '133': '\u2026', '134': '\u2020', '135': '\u2021', '136': '\u02C6', '137': '\u2030', '138': '\u0160', '139': '\u2039', '140': '\u0152', '142': '\u017D', '145': '\u2018', '146': '\u2019', '147': '\u201C', '148': '\u201D', '149': '\u2022', '150': '\u2013', '151': '\u2014', '152': '\u02DC', '153': '\u2122', '154': '\u0161', '155': '\u203A', '156': '\u0153', '158': '\u017E', '159': '\u0178' };
	var invalidReferenceCodePoints = [1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 64976, 64977, 64978, 64979, 64980, 64981, 64982, 64983, 64984, 64985, 64986, 64987, 64988, 64989, 64990, 64991, 64992, 64993, 64994, 64995, 64996, 64997, 64998, 64999, 65000, 65001, 65002, 65003, 65004, 65005, 65006, 65007, 65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111];

	/*--------------------------------------------------------------------------*/

	var stringFromCharCode = String.fromCharCode;

	var object = {};
	var hasOwnProperty = object.hasOwnProperty;
	var has = function has(object, propertyName) {
		return hasOwnProperty.call(object, propertyName);
	};

	var contains = function contains(array, value) {
		var index = -1;
		var length = array.length;
		while (++index < length) {
			if (array[index] == value) {
				return true;
			}
		}
		return false;
	};

	var merge = function merge(options, defaults) {
		if (!options) {
			return defaults;
		}
		var result = {};
		var key;
		for (key in defaults) {
			// A `hasOwnProperty` check is not needed here, since only recognized
			// option names are used anyway. Any others are ignored.
			result[key] = has(options, key) ? options[key] : defaults[key];
		}
		return result;
	};

	// Modified version of `ucs2encode`; see https://mths.be/punycode.
	var codePointToSymbol = function codePointToSymbol(codePoint, strict) {
		var output = '';
		if (codePoint >= 0xD800 && codePoint <= 0xDFFF || codePoint > 0x10FFFF) {
			// See issue #4:
			// “Otherwise, if the number is in the range 0xD800 to 0xDFFF or is
			// greater than 0x10FFFF, then this is a parse error. Return a U+FFFD
			// REPLACEMENT CHARACTER.”
			if (strict) {
				parseError('character reference outside the permissible Unicode range');
			}
			return '\uFFFD';
		}
		if (has(decodeMapNumeric, codePoint)) {
			if (strict) {
				parseError('disallowed character reference');
			}
			return decodeMapNumeric[codePoint];
		}
		if (strict && contains(invalidReferenceCodePoints, codePoint)) {
			parseError('disallowed character reference');
		}
		if (codePoint > 0xFFFF) {
			codePoint -= 0x10000;
			output += stringFromCharCode(codePoint >>> 10 & 0x3FF | 0xD800);
			codePoint = 0xDC00 | codePoint & 0x3FF;
		}
		output += stringFromCharCode(codePoint);
		return output;
	};

	var hexEscape = function hexEscape(codePoint) {
		return '&#x' + codePoint.toString(16).toUpperCase() + ';';
	};

	var decEscape = function decEscape(codePoint) {
		return '&#' + codePoint + ';';
	};

	var parseError = function parseError(message) {
		throw Error('Parse error: ' + message);
	};

	/*--------------------------------------------------------------------------*/

	var encode = function encode(string, options) {
		options = merge(options, encode.options);
		var strict = options.strict;
		if (strict && regexInvalidRawCodePoint.test(string)) {
			parseError('forbidden code point');
		}
		var encodeEverything = options.encodeEverything;
		var useNamedReferences = options.useNamedReferences;
		var allowUnsafeSymbols = options.allowUnsafeSymbols;
		var escapeCodePoint = options.decimal ? decEscape : hexEscape;

		var escapeBmpSymbol = function escapeBmpSymbol(symbol) {
			return escapeCodePoint(symbol.charCodeAt(0));
		};

		if (encodeEverything) {
			// Encode ASCII symbols.
			string = string.replace(regexAsciiWhitelist, function (symbol) {
				// Use named references if requested & possible.
				if (useNamedReferences && has(encodeMap, symbol)) {
					return '&' + encodeMap[symbol] + ';';
				}
				return escapeBmpSymbol(symbol);
			});
			// Shorten a few escapes that represent two symbols, of which at least one
			// is within the ASCII range.
			if (useNamedReferences) {
				string = string.replace(/&gt;\u20D2/g, '&nvgt;').replace(/&lt;\u20D2/g, '&nvlt;').replace(/&#x66;&#x6A;/g, '&fjlig;');
			}
			// Encode non-ASCII symbols.
			if (useNamedReferences) {
				// Encode non-ASCII symbols that can be replaced with a named reference.
				string = string.replace(regexEncodeNonAscii, function (string) {
					// Note: there is no need to check `has(encodeMap, string)` here.
					return '&' + encodeMap[string] + ';';
				});
			}
			// Note: any remaining non-ASCII symbols are handled outside of the `if`.
		} else if (useNamedReferences) {
			// Apply named character references.
			// Encode `<>"'&` using named character references.
			if (!allowUnsafeSymbols) {
				string = string.replace(regexEscape, function (string) {
					return '&' + encodeMap[string] + ';'; // no need to check `has()` here
				});
			}
			// Shorten escapes that represent two symbols, of which at least one is
			// `<>"'&`.
			string = string.replace(/&gt;\u20D2/g, '&nvgt;').replace(/&lt;\u20D2/g, '&nvlt;');
			// Encode non-ASCII symbols that can be replaced with a named reference.
			string = string.replace(regexEncodeNonAscii, function (string) {
				// Note: there is no need to check `has(encodeMap, string)` here.
				return '&' + encodeMap[string] + ';';
			});
		} else if (!allowUnsafeSymbols) {
			// Encode `<>"'&` using hexadecimal escapes, now that they’re not handled
			// using named character references.
			string = string.replace(regexEscape, escapeBmpSymbol);
		}
		return string
		// Encode astral symbols.
		.replace(regexAstralSymbols, function ($0) {
			// https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
			var high = $0.charCodeAt(0);
			var low = $0.charCodeAt(1);
			var codePoint = (high - 0xD800) * 0x400 + low - 0xDC00 + 0x10000;
			return escapeCodePoint(codePoint);
		})
		// Encode any remaining BMP symbols that are not printable ASCII symbols
		// using a hexadecimal escape.
		.replace(regexBmpWhitelist, escapeBmpSymbol);
	};
	// Expose default options (so they can be overridden globally).
	encode.options = {
		'allowUnsafeSymbols': false,
		'encodeEverything': false,
		'strict': false,
		'useNamedReferences': false,
		'decimal': false
	};

	var decode = function decode(html, options) {
		options = merge(options, decode.options);
		var strict = options.strict;
		if (strict && regexInvalidEntity.test(html)) {
			parseError('malformed character reference');
		}
		return html.replace(regexDecode, function ($0, $1, $2, $3, $4, $5, $6, $7) {
			var codePoint;
			var semicolon;
			var decDigits;
			var hexDigits;
			var reference;
			var next;
			if ($1) {
				// Decode decimal escapes, e.g. `&#119558;`.
				decDigits = $1;
				semicolon = $2;
				if (strict && !semicolon) {
					parseError('character reference was not terminated by a semicolon');
				}
				codePoint = parseInt(decDigits, 10);
				return codePointToSymbol(codePoint, strict);
			}
			if ($3) {
				// Decode hexadecimal escapes, e.g. `&#x1D306;`.
				hexDigits = $3;
				semicolon = $4;
				if (strict && !semicolon) {
					parseError('character reference was not terminated by a semicolon');
				}
				codePoint = parseInt(hexDigits, 16);
				return codePointToSymbol(codePoint, strict);
			}
			if ($5) {
				// Decode named character references with trailing `;`, e.g. `&copy;`.
				reference = $5;
				if (has(decodeMap, reference)) {
					return decodeMap[reference];
				} else {
					// Ambiguous ampersand. https://mths.be/notes/ambiguous-ampersands
					if (strict) {
						parseError('named character reference was not terminated by a semicolon');
					}
					return $0;
				}
			}
			// If we’re still here, it’s a legacy reference for sure. No need for an
			// extra `if` check.
			// Decode named character references without trailing `;`, e.g. `&amp`
			// This is only a parse error if it gets converted to `&`, or if it is
			// followed by `=` in an attribute context.
			reference = $6;
			next = $7;
			if (next && options.isAttributeValue) {
				if (strict && next == '=') {
					parseError('`&` did not start a character reference');
				}
				return $0;
			} else {
				if (strict) {
					parseError('named character reference was not terminated by a semicolon');
				}
				// Note: there is no need to check `has(decodeMapLegacy, reference)`.
				return decodeMapLegacy[reference] + (next || '');
			}
		});
	};
	// Expose default options (so they can be overridden globally).
	decode.options = {
		'isAttributeValue': false,
		'strict': false
	};

	var escape = function escape(string) {
		return string.replace(regexEscape, function ($0) {
			// Note: there is no need to check `has(escapeMap, $0)` here.
			return escapeMap[$0];
		});
	};

	/*--------------------------------------------------------------------------*/

	var he = {
		'version': '1.1.1',
		'encode': encode,
		'decode': decode,
		'escape': escape,
		'unescape': decode
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if ("function" == 'function' && _typeof(__webpack_require__(4)) == 'object' && __webpack_require__(4)) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return he;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (freeExports && !freeExports.nodeType) {
		if (freeModule) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = he;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (var key in he) {
				has(he, key) && (freeExports[key] = he[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.he = he;
	}
})(undefined);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)(module)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.isImg) ? _c('image', {
    staticClass: ["fm-image"],
    style: {
      width: _vm.computedStyle.width,
      height: _vm.computedStyle.height
    },
    attrs: {
      "src": _vm.value
    },
    on: {
      "load": _vm.onLoad,
      "click": function (e) { return _vm.$emit('click', e); },
      "longpress": function (e) { return _vm.$emit('longpress', e); }
    }
  }) : _c('text', {
    style: _vm.getStyle,
    on: {
      "click": function (e) { return _vm.$emit('click', e); },
      "longpress": function (e) { return _vm.$emit('longpress', e); }
    }
  }, [_vm._v(_vm._s(_vm.getFontName) + "\n")])
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-slider/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7667b2b9"
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
  "slider-wrap": {
    "paddingRight": 7.5,
    "paddingLeft": 7.5
  },
  "level-text-wrap": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "marginBottom": -7.2
  },
  "level-text": {
    "flex": 1,
    "fontSize": 14,
    "paddingTop": 2.4,
    "paddingBottom": 2.4,
    "textAlign": "center"
  },
  "all": {
    "height": 3,
    "marginTop": 14.4,
    "backgroundColor": "#e6e6e6"
  },
  "selected": {
    "marginTop": -3,
    "height": 3,
    "backgroundColor": "#198ded"
  },
  "dot-wrap": {
    "height": 28.8,
    "width": 38.8,
    "marginTop": -15.84,
    "marginLeft": -19.2,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "dot": {
    "height": 15,
    "width": 15,
    "backgroundColor": "#198ded",
    "borderRadius": 14.4
  },
  "num": {
    "width": 26,
    "height": 26,
    "marginLeft": -13,
    "borderRadius": 26.4,
    "backgroundColor": "#198ded",
    "color": "#ffffff",
    "fontSize": 14,
    "fontWeight": "700",
    "textAlign": "center",
    "lineHeight": 26
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* 30 */
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-button/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3a846fca"
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
  "fm-btn-wrap": {
    "height": 24,
    "alignItems": "center",
    "flexDirection": "row",
    "maxWidth": 100
  },
  "fm-btn": {
    "height": 24,
    "paddingLeft": 12,
    "paddingRight": 12,
    "lineHeight": 24,
    "borderRadius": 24,
    "fontSize": 14,
    "fontWeight": "700",
    "textAlign": "center",
    "opacity": 0
  },
  "fm-btn-small": {
    "width": 100
  },
  "fm-btn-large": {
    "paddingLeft": 8,
    "paddingRight": 8
  },
  "fm-btn-max": {
    "width": 100
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


var small_size = 48; //48dp
var large_size = 80; //80dp
var max_size = 100; //100dp
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
					sty.borderWidth = 1.44, sty.borderStyle = 'solid', sty.lineHeight = 21.12;
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
		var w = this.text.length * 14 + 50;

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
/* 35 */
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-input/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1bafdec8"
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
  "fm-input-wrap": {
    "paddingTop": 24,
    "paddingRight": 6,
    "paddingLeft": 6
  },
  "fm-textarea": {
    "paddingBottom": 9,
    "paddingRight": 8,
    "paddingLeft": 8,
    "borderBottomStyle": "solid",
    "borderBottomWidth": 1,
    "borderBottomColor": "#E6E6E6",
    "fontSize": 16,
    "lineHeight": 12,
    "color": "#000000",
    "placeholderColor": "#dddddd",
    "caretColor": "#198ded",
    "borderBottomColor:focus": "#198ded"
  },
  "fm-textarea-error": {
    "borderBottomColor": "#df2b18"
  },
  "error-msg": {
    "fontSize": 12,
    "color": "#df2b18",
    "marginLeft": 8
  }
}

/***/ }),
/* 39 */
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
			rows: 1,
			input: this.$refs.input
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
		beFocus: function beFocus(evt) {
			this.$emit('focus', evt);
		},
		beBlur: function beBlur(evt) {
			this.$emit('blur', evt);
		},
		focus: function focus() {
			this.$refs.input.focus();
		},
		blur: function blur() {
			this.$refs.input.blur();
		},
		setSelectionRange: function setSelectionRange(start, end) {
			this.$refs.input.setSelectionRange(start, end);
		},
		getEditSelectionRange: function getEditSelectionRange(callback) {
			this.$refs.input.getEditSelectionRange(callback);
		}
	}
};

/***/ }),
/* 40 */
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
      "focus": _vm.beFocus,
      "blur": _vm.beBlur
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
      "focus": _vm.beFocus,
      "blur": _vm.beBlur
    }
  }), (_vm.hasError) ? _c('text', {
    staticClass: ["error-msg"]
  }, [_vm._v(_vm._s(_vm.errorMessage))]) : _vm._e()])
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-tab-view/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5a8c3575"
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
  "header-wrap": {
    "marginTop": 9,
    "marginRight": 22,
    "marginLeft": 22
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
    "fontSize": 14,
    "fontWeight": "700",
    "textAlign": "center",
    "color": "#666666"
  },
  "bottom-line": {
    "height": 2.4,
    "marginTop": 9,
    "backgroundColor": "#f34949"
  },
  "slider-wrap": {
    "flexDirection": "row",
    "borderTopWidth": 1,
    "borderColor": "#dddddd"
  }
}

/***/ }),
/* 44 */
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
				width: (this.width || 360) + 'px'
			};
		}
	},
	mounted: function mounted() {
		var _this = this;

		setTimeout(function () {
			var platform = weex.config.env.platform;

			var head = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && platform.toLowerCase() === 'web' ? _this.$refs.header.$children[0].$children[0] : _this.$refs.header.children[0].children[0];
			dom.getComponentRect(head, function (opt) {
				_this.lineWidth = opt.size.width + 12;
				_this.lineLeft = opt.size.left - 22 - 6;
			});
			dom.getComponentRect(_this.$refs.slider, function (opt) {
				_this.width = opt.size.width;
				_this.line = _this.width / (_this.width - 44) * _this.items.length;
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
/* 45 */
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(47);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(48)
)

/* script */
__vue_exports__ = __webpack_require__(49)

/* template */
var __vue_template__ = __webpack_require__(50)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-tips/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2334b0e0"
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
/* 48 */
/***/ (function(module, exports) {

module.exports = {
  "tip-wrap": {
    "flexDirection": "row",
    "height": 40,
    "paddingTop": 7.2
  },
  "arrow": {
    "position": "absolute",
    "top": 3.6,
    "width": 7.2,
    "height": 7.2,
    "transform": "rotate(45deg)"
  },
  "content-wrap": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": 9,
    "paddingBottom": 9,
    "paddingLeft": 10,
    "borderRadius": 2
  },
  "content": {
    "height": 17,
    "maxWidth": 226,
    "fontSize": 14,
    "color": "#ffffff"
  },
  "split": {
    "width": 1,
    "height": 14,
    "marginLeft": 9,
    "backgroundColor": "#ffffff",
    "opacity": 0.4
  },
  "close": {
    "color": "#ffffff",
    "fontSize": 18,
    "marginTop": 3,
    "marginLeft": 10,
    "marginRight": 10
  }
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _fmIcon = __webpack_require__(1);

var _fmIcon2 = _interopRequireDefault(_fmIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	data: function data() {
		return {
			show: true
		};
	},

	components: { FmIcon: _fmIcon2.default },
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
				sty.right = '18px';
			} else {
				sty.left = '18px';
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
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 50 */
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
  }), _c('fm-icon', {
    staticClass: ["close"],
    attrs: {
      "value": "&#xe6c0;"
    },
    on: {
      "click": _vm.close
    }
  })], 2), _c('text', {
    staticClass: ["arrow"],
    style: _vm.arrowStyle
  })]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(52);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(53)
)

/* script */
__vue_exports__ = __webpack_require__(54)

/* template */
var __vue_template__ = __webpack_require__(61)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-rich-text/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-e98a9808"
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
/* 53 */
/***/ (function(module, exports) {

module.exports = {
  "fm-rich-text": {
    "justifyContent": "flex-start",
    "alignItems": "center",
    "flexWrap": "wrap",
    "flexDirection": "row",
    "flexShrink": 1
  },
  "default-text": {
    "color": "#A5A5A5",
    "fontSize": 12,
    "lineHeight": 16
  }
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fmText = __webpack_require__(0);

var _fmText2 = _interopRequireDefault(_fmText);

var _fmIcon = __webpack_require__(1);

var _fmIcon2 = _interopRequireDefault(_fmIcon);

var _fmTag = __webpack_require__(2);

var _fmTag2 = _interopRequireDefault(_fmTag);

var _fmRichTextLink = __webpack_require__(55);

var _fmRichTextLink2 = _interopRequireDefault(_fmRichTextLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Utils = __webpack_require__(3);

module.exports = {
  components: {
    FmText: _fmText2.default, FmIcon: _fmIcon2.default, FmTag: _fmTag2.default, FmRichTextLink: _fmRichTextLink2.default
  },
  props: {
    configList: {
      type: [Array, String],
      default: function _default() {
        return [];
      }
    },
    hasTextMargin: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    isNotEmptyArray: function isNotEmptyArray() {
      return Utils.isNonEmptyArray(this.configList);
    },
    isString: function isString() {
      return Utils.isString(this.configList);
    }
  },
  methods: {
    linkBeClick: function linkBeClick(obj) {
      this.$emit('linkBeClick', obj);
    }
  }
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(56)

/* template */
var __vue_template__ = __webpack_require__(60)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-rich-text/fm-rich-text-link.vue"
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fmText = __webpack_require__(0);

var _fmText2 = _interopRequireDefault(_fmText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//

var Utils = __webpack_require__(3);

module.exports = {
  components: { FmText: _fmText2.default },
  props: {
    linkValue: {
      type: [String, Number],
      default: ''
    },
    hasTextMargin: {
      type: Boolean,
      default: true
    },
    linkHref: {
      type: String,
      default: ''
    },
    linkStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      defObj: {}
    };
  },
  methods: {
    onLinkClick: function onLinkClick(e) {
      var self = this;
      // Utils.goToH5Page(self.linkHref);
      self.$emit('fmRichTextLinkClick', { event: e, href: self.linkHref });
    }
  }
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var required = __webpack_require__(58),
    qs = __webpack_require__(59),
    protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
    slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [['#', 'hash'], // Extract from the back.
['?', 'query'], // Extract from the back.
['/', 'pathname'], // Extract from the back.
['@', 'auth', 1], // Extract from the front.
[NaN, 'host', undefined, 1, 1], // Set left over value.
[/:(\d+)$/, 'port', undefined, 1], // RegExp the back.
[NaN, 'hostname', undefined, 1, 1] // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @api public
 */
function lolcation(loc) {
  loc = loc || {}.location || {};

  var finaldestination = {},
      type = typeof loc === 'undefined' ? 'undefined' : _typeof(loc),
      key;

  if ('blob:' === loc.protocol) {
    finaldestination = new URL(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new URL(loc, {});
    for (key in ignore) {
      delete finaldestination[key];
    }
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @api private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @api private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')),
      i = path.length,
      last = path[i - 1],
      unshift = false,
      up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} location Location defaults for relative paths.
 * @param {Boolean|Function} parser Parser for the query string.
 * @api public
 */
function URL(address, location, parser) {
  if (!(this instanceof URL)) {
    return new URL(address, location, parser);
  }

  var relative,
      extracted,
      parse,
      instruction,
      index,
      key,
      instructions = rules.slice(),
      type = typeof location === 'undefined' ? 'undefined' : _typeof(location),
      url = this,
      i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[2] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];
    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if (index = parse.exec(address)) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (relative && instruction[3] ? location[key] || '' : '');

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (relative && location.slashes && url.pathname.charAt(0) !== '/' && (url.pathname !== '' || location.pathname !== '')) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL}
 * @api public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname + ':' + value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':' + url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
      url.pathname = value.length && value.charAt(0) !== '/' ? '/' + value : value;

      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String}
 * @api public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query,
      url = this,
      protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':' + url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === _typeof(url.query) ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?' + query : query;

  if (url.hash) result += url.hash;

  return result;
}

URL.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
URL.extractProtocol = extractProtocol;
URL.location = lolcation;
URL.qs = qs;

module.exports = URL;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */

module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
      return port !== 80;

    case 'https':
    case 'wss':
      return port !== 443;

    case 'ftp':
      return port !== 21;

    case 'gopher':
      return port !== 70;

    case 'file':
      return false;
  }

  return port !== 0;
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g,
      result = {},
      part;

  //
  // Little nifty parsing hack, leverage the fact that RegExp.exec increments
  // the lastIndex property so we can continue executing this loop until we've
  // parsed all results.
  //
  for (; part = parser.exec(query); result[decode(part[1])] = decode(part[2])) {}

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = [];

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (var key in obj) {
    if (has.call(obj, key)) {
      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    on: {
      "click": _vm.onLinkClick
    }
  }, [_c('fm-text', {
    attrs: {
      "textValue": _vm.linkValue,
      "hasTextMargin": _vm.hasTextMargin,
      "textStyle": _vm.linkStyle ? _vm.linkStyle : _vm.defObj
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.isNotEmptyArray) ? _c('div', {
    staticClass: ["fm-rich-text"]
  }, _vm._l((_vm.configList), function(v) {
    return _c('div', [(v.type == 'text' && v.text) ? _c('fm-text', {
      attrs: {
        "textValue": v.text,
        "textStyle": v.style,
        "hasTextMargin": _vm.hasTextMargin
      }
    }) : _vm._e(), (v.type == 'link' && v.href && v.text) ? _c('fm-rich-text-link', {
      attrs: {
        "linkValue": v.text,
        "linkStyle": v.style,
        "linkHref": v.href,
        "hasTextMargin": _vm.hasTextMargin
      },
      on: {
        "fmRichTextLinkClick": _vm.linkBeClick
      }
    }) : _vm._e(), (v.type == 'icon') ? _c('fm-icon', {
      attrs: {
        "color": v.color,
        "value": v.value,
        "iconStyle": v.style
      }
    }) : _vm._e(), (v.type == 'tag') ? _c('fm-tag', {
      attrs: {
        "tagType": v.tagType,
        "size": v.size,
        "value": v.value,
        "color": v.color,
        "fontColor": v.fontColor
      }
    }) : _vm._e()], 1)
  })) : _vm._e(), (_vm.isString) ? _c('fm-text', {
    attrs: {
      "textValue": _vm.configList
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(63);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(64)
)

/* script */
__vue_exports__ = __webpack_require__(65)

/* template */
var __vue_template__ = __webpack_require__(66)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-special-rich-text/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-530479e8"
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
/* 64 */
/***/ (function(module, exports) {

module.exports = {
  "fm-special-rich-text": {
    "position": "relative"
  },
  "tag-div": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "color": "#A5A5A5",
    "fontSize": 12,
    "lineHeight": 16
  }
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fmText = __webpack_require__(0);

var _fmText2 = _interopRequireDefault(_fmText);

var _fmIcon = __webpack_require__(1);

var _fmIcon2 = _interopRequireDefault(_fmIcon);

var _fmTag = __webpack_require__(2);

var _fmTag2 = _interopRequireDefault(_fmTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Utils = __webpack_require__(3);

module.exports = {
  components: {
    FmText: _fmText2.default, FmIcon: _fmIcon2.default, FmTag: _fmTag2.default
  },
  props: {
    configList: {
      type: [Array, String],
      default: function _default() {
        return {};
      }
    }
  },
  computed: {
    newList: function newList() {
      var configList = this.configList;

      if (Utils.isNonEmptyArray(configList) && configList.length === 2) {
        var r1 = configList[0];
        var r2 = configList[1];
        var iconStyle = r1.style;
        var textStyle = r2.style;
        var style = {};
        var fontSize = 12;
        var tagWidth = iconStyle && iconStyle.width ? iconStyle.width : 12;

        if (textStyle && textStyle.fontSize) {
          fontSize = textStyle.fontSize;
          style = {
            fontSize: textStyle.fontSize,
            lineHeight: textStyle.fontSize * 1.4
          };
        }

        if (textStyle && textStyle.color) {
          style = _extends({}, style, {
            color: textStyle.color
          });
        }

        if (r1.type === 'tag' && iconStyle && iconStyle.width) {
          r1 = _extends({}, r1, {
            style: _extends({}, iconStyle, { width: null })
          });
        }
        var newValue = r2.value ? new Array(Math.ceil(tagWidth / fontSize) + 1).join('   ') + ('  ' + r2.value) : '';
        r2 = _extends({}, r2, {
          style: style,
          value: newValue
        });
        return [r1, r2];
      } else {
        return [];
      }
    },
    top: function top() {
      var configList = this.configList;

      if (configList[0].type === 'tag') return 0;
      if (Utils.isNonEmptyArray(configList) && configList.length === 2) {
        var iconStyle = configList[0].style;
        var textStyle = configList[1].style;
        var fontSize = 12;
        var tagHeight = iconStyle && iconStyle.height ? iconStyle.height : 13;
        if (textStyle && textStyle.fontSize) {
          fontSize = textStyle.fontSize;
        }
        return Math.ceil((fontSize * 1.3 - tagHeight) / 2);
      } else {
        return 0;
      }
    }
  }
};

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["fm-special-rich-text"]
  }, [_c('div', {
    staticClass: ["tag-div"],
    style: {
      top: _vm.top + 'px'
    }
  }, [(_vm.newList[0].type == 'icon' && _vm.newList[0].value) ? _c('fm-icon', {
    attrs: {
      "value": _vm.newList[0].value,
      "iconStyle": _vm.newList[0].style
    }
  }) : _vm._e(), (_vm.newList[0].type == 'tag') ? _c('fm-tag', {
    attrs: {
      "tagType": _vm.newList[0].tagType,
      "size": _vm.newList[0].size,
      "value": _vm.newList[0].value,
      "color": _vm.newList[0].color,
      "fontColor": _vm.newList[0].fontColor
    }
  }) : _vm._e()], 1), (_vm.newList[1].value) ? _c('fm-text', {
    attrs: {
      "textValue": _vm.newList[1].value,
      "textStyle": _vm.newList[1].style
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(68);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(69)
)

/* script */
__vue_exports__ = __webpack_require__(70)

/* template */
var __vue_template__ = __webpack_require__(71)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-foldable-text/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-142f46c6"
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
/* 69 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "position": "relative"
  },
  "text": {
    "fontFamily": "\"Source Han Sans CN\", Roboto, sans-serif",
    "color": "#999999"
  },
  "text_small": {
    "fontSize": 12,
    "lineHeight": 14
  },
  "text_large": {
    "fontFamily": "sans-serif-medium",
    "fontSize": 16,
    "fontWeight": "500",
    "lineHeight": 24
  },
  "text_huge": {
    "fontFamily": "sans-serif-medium",
    "fontSize": 18,
    "lineHeight": 26
  },
  "more": {
    "position": "absolute",
    "right": 6,
    "bottom": 0
  },
  "test": {
    "flexDirection": "row"
  }
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            expandHeight: '',
            unexpandHeight: '',
            animationHeight: '',
            foldText: ''
        };
    },

    props: {
        width: {
            type: Number,
            default: 340
        },
        text: {
            type: String,
            default: ''
        },
        lines: {
            type: Number,
            default: 2
        },
        folded: {
            type: Boolean,
            default: true
        },
        small: {
            type: Boolean,
            default: true
        },
        large: Boolean,
        huge: Boolean,
        textStyle: Object,
        tipStyle: Object,
        tipValue: {
            type: String,
            default: '更多'
        }
    },
    mounted: function mounted() {
        if (this.foldText === '') {
            var textStyle = this.textStyle;

            var fontSize = textStyle && textStyle.fontSize ? textStyle.fontSize : this.large ? 16 : this.huge ? 18 : 12;
            // 计算折叠后的文本
            var size1 = fontSize + fontSize * 0.03; // 汉字
            var size2 = fontSize * 0.56; // 英文
            var size3 = fontSize * 0.556; // 数字
            var size4 = fontSize * 0.77; // 全角
            var size5 = fontSize * 0.2; // 半角
            var tSize = 0,
                tmpStr = '';
            var maxWith = this.width * this.lines - size1 * this.tipValue.length;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.text[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var c = _step.value;

                    if (/^[\u4e00-\u9fa5]/.test(c)) {
                        // 汉字
                        tSize += size1;
                    } else if (/^[a-zA-Z]/.test(c)) {
                        // 英文
                        tSize += size2;
                    } else if (/^[0-9]/.test(c)) {
                        // 数字
                        tSize += size3;
                    } else if (/^[·《》，。？、：；“”‘’——【】]/.test(c)) {
                        // 全角
                        tSize += size4;
                    } else if (/^[`~!@#\$%\^&\*\(\)_\-\+=\{\}\[\]|\\:;"'<>,.\?\/\s]/.test(c)) {
                        // 半角
                        tSize += size5;
                    } else {
                        // 其他
                        tSize += size1;
                    }
                    if (tSize >= maxWith) {
                        tmpStr += '..';
                        break;
                    }
                    tmpStr += c;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.foldText = tmpStr;
        }
    },

    computed: {
        getText: function getText() {
            return this.folded ? this.foldText : this.text;
        },
        planeStyle: function planeStyle() {
            return {
                width: this.width
            };
        },
        moreStyle: function moreStyle() {
            return _extends({
                fontSize: this.large ? 16 : this.huge ? 18 : 12,
                lineHeight: this.large ? 24 : this.huge ? 26 : 14,
                color: '#198ded',
                fontWeight: '600',
                backgroundColor: '#fff'
            }, this.tipStyle);
        },
        textClz: function textClz() {
            var clz = ['text', 'text_small'];
            if (this.large) {
                clz.push('text_large');
            } else if (this.huge) {
                clz.push('text_huge');
            }
            return clz;
        }
    },
    methods: {
        fold: function fold() {
            this.folded = !this.folded;
        }
    }
};

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    on: {
      "click": _vm.fold
    }
  }, [_c('div', {
    ref: "plane",
    staticClass: ["container"],
    style: _vm.planeStyle
  }, [_c('text', {
    ref: "text",
    class: _vm.textClz,
    style: _vm.textStyle
  }, [_vm._v(_vm._s(_vm.getText))]), (_vm.folded) ? _c('text', {
    ref: "more",
    staticClass: ["more"],
    style: _vm.moreStyle
  }, [_vm._v(_vm._s(_vm.tipValue))]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(73);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(74)

/* template */
var __vue_template__ = __webpack_require__(75)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-image/index.vue"
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            width: 1,
            height: 1
        };
    },

    props: {
        src: {
            type: String,
            default: ''
        },
        imgStyle: {
            type: Object
        },
        scale: {
            type: Number,
            default: 1
        }
    },
    computed: {
        getStyle: function getStyle() {
            return _extends({
                width: this.width,
                height: this.height
            }, this.imgStyle);
        }
    },
    methods: {
        onLoad: function onLoad(e) {
            if (e.success && e.size && e.size.naturalWidth > 0) {
                this.width = e.size.naturalWidth * this.scale;
                this.height = e.size.naturalHeight * this.scale;
            }
        }
    }
};

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["fm-image"]
  }, [_c('image', {
    ref: "img",
    style: _vm.getStyle,
    attrs: {
      "src": _vm.src
    },
    on: {
      "load": _vm.onLoad
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(78)
)

/* script */
__vue_exports__ = __webpack_require__(79)

/* template */
var __vue_template__ = __webpack_require__(80)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/example/_mods/title.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-32efbbda"
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(81)
)

/* script */
__vue_exports__ = __webpack_require__(82)

/* template */
var __vue_template__ = __webpack_require__(83)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/example/_mods/category.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3ba9d093"
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
/* 78 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-title": {
    "marginTop": 10,
    "marginLeft": 10,
    "flexDirection": "row",
    "alignItems": "center"
  },
  "logo": {
    "width": 60,
    "height": 60,
    "marginLeft": 10
  },
  "text": {
    "marginLeft": 10,
    "fontSize": 16,
    "fontWeight": "600",
    "color": "#000000"
  }
}

/***/ }),
/* 79 */
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

exports.default = {
  props: {
    title: String
  }
};

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wxc-title"]
  }, [_c('image', {
    staticClass: ["logo"],
    attrs: {
      "src": "http://design.flyme.cn/book/images/Flyme_logo.png"
    }
  }), _c('text', {
    staticClass: ["text"]
  }, [_vm._v(_vm._s(_vm.title))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = {
  "category": {
    "marginTop": 10,
    "paddingLeft": 12,
    "width": 360,
    "height": 34,
    "backgroundColor": "#198ded",
    "justifyContent": "center"
  },
  "category-text": {
    "color": "#ffffff",
    "fontWeight": "600",
    "fontSize": 14
  }
}

/***/ }),
/* 82 */
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

exports.default = {
  props: {
    title: String
  }
};

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["category"]
  }, [_c('text', {
    staticClass: ["category-text"]
  }, [_vm._v(_vm._s(_vm.title))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTitle = setTitle;
/**
 * Created by suenyinkit on 2017/10/18.
 * demo设置标题和右上角按钮
 */
var navigationBar = weex.requireModule('navigationBar');
var navigator = weex.requireModule('navigator');

function setTitle(title) {
  if (navigationBar && navigationBar.setTitle) {
    var NOOP = function NOOP() {};
    navigationBar.setTitle({
      title: title
    }, NOOP, NOOP);

    var CALLBACK = function CALLBACK(event) {
      if (event.index != undefined) {
        navigator.push({
          url: 'https://h5.m.taobao.com/trip/weex-ui/index.html?_wx_tpl=https%3A%2F%2Fh5.m.taobao.com%2Ftrip%2Fweex-ui%2Fdemo%2Findex.native-min.js',
          animated: true
        }, NOOP);
      }
    };
    navigationBar.setRightItem({
      items: [{
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUxpcTMzMzMzMzAwMDIyMjIyMjExMTAwMDIyMjIyMjIyMjIyMjIyMjIyMjIyMjMzMzIyMjAwMDMzMzMzMzIyMjMzMxR9TlYAAAAVdFJOUwCgvzCfgD9AYMCQcO+P389/IG9Q0HT9VioAAADRSURBVEjH7ZXrDoMgDEZhVgFvu/L+r7pZgQlSLcuSJYvfHwKcU5HUKMSRj6P7Xhfx9hVdyBcYjmcbyEvJNmZeCK7hea5xCTzPgAXPMZCv3/M9A1b7aAx83hnA54XoSAOI82rCAPL98gZs3EfOgM37Wxuwc9+pgTw0V4qvGoiM1vd/l+fDfusW/NyOeaEPgFswyUI1nObckoLGl1BTHkEYbXzGqYERiR9sgmCTknEHf0mo5+EQfiM0GOx1HM5+TglkcoIsFe5bgsp+iIpM9V+//CcugShOKAURTAAAAABJRU5ErkJggg=='
      }]
    }, CALLBACK, NOOP);
  }
}

/***/ }),
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueRouter = __webpack_require__(151);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _index = __webpack_require__(152);

var _index2 = _interopRequireDefault(_index);

var _home = __webpack_require__(156);

var _home2 = _interopRequireDefault(_home);

var _detail = __webpack_require__(160);

var _detail2 = _interopRequireDefault(_detail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var meta = weex.requireModule('meta');
// 配置 viewport 的宽度为 360px
meta.setViewport({
  width: 360
});

Vue.use(_vueRouter2.default);

var router = new _vueRouter2.default({
  // mode: 'abstract',
  routes: [{ path: '/', component: _home2.default }, { name: 'detail', path: '/detail', component: _detail2.default }]
});

exports.default = new Vue({
  el: '#root',
  router: router,
  render: function render(h) {
    return h(_index2.default);
  }
});

router.push('/');

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
  * vue-router v2.8.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert(condition, message) {
  if (!condition) {
    throw new Error("[vue-router] " + message);
  }
}

function warn(condition, message) {
  if (false) {
    typeof console !== 'undefined' && console.warn("[vue-router] " + message);
  }
}

function isError(err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1;
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render(_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children);
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h();
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (val && current !== vm || !val && current === vm) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children);
  }
};

function resolveProps(route, config) {
  switch (typeof config === 'undefined' ? 'undefined' : _typeof(config)) {
    case 'undefined':
      return;
    case 'object':
      return config;
    case 'function':
      return config(route);
    case 'boolean':
      return config ? route.params : undefined;
    default:
      if (false) {
        warn(false, "props in \"" + route.path + "\" is a " + (typeof config === 'undefined' ? 'undefined' : _typeof(config)) + ", " + "expecting an object, function or boolean.");
      }
  }
}

function extend(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to;
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};

var decode = decodeURIComponent;

function resolveQuery(query, extraQuery, _parseQuery) {
  if (extraQuery === void 0) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "production" !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery;
}

function parseQuery(query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res;
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0 ? decode(parts.join('=')) : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res;
}

function stringifyQuery(obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encode(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&');
    }

    return encode(key) + '=' + encode(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?" + res : '';
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute(record, location, redirectedFrom, router) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || record && record.name,
    meta: record && record.meta || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route);
}

function clone(value) {
  if (Array.isArray(value)) {
    return value.map(clone);
  } else if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res;
  } else {
    return value;
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch(record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res;
}

function getFullPath(ref, _stringifyQuery) {
  var path = ref.path;
  var query = ref.query;if (query === void 0) query = {};
  var hash = ref.hash;if (hash === void 0) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash;
}

function isSameRoute(a, b) {
  if (b === START) {
    return a === b;
  } else if (!b) {
    return false;
  } else if (a.path && b.path) {
    return a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') && a.hash === b.hash && isObjectEqual(a.query, b.query);
  } else if (a.name && b.name) {
    return a.name === b.name && a.hash === b.hash && isObjectEqual(a.query, b.query) && isObjectEqual(a.params, b.params);
  } else {
    return false;
  }
}

function isObjectEqual(a, b) {
  if (a === void 0) a = {};
  if (b === void 0) b = {};

  // handle null value #1566
  if (!a || !b) {
    return a === b;
  }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false;
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if ((typeof aVal === 'undefined' ? 'undefined' : _typeof(aVal)) === 'object' && (typeof bVal === 'undefined' ? 'undefined' : _typeof(bVal)) === 'object') {
      return isObjectEqual(aVal, bVal);
    }
    return String(aVal) === String(bVal);
  });
}

function isIncludedRoute(current, target) {
  return current.path.replace(trailingSlashRE, '/').indexOf(target.path.replace(trailingSlashRE, '/')) === 0 && (!target.hash || current.hash === target.hash) && queryIncludes(current.query, target.query);
}

function queryIncludes(current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false;
    }
  }
  return true;
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render(h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null ? 'router-link-active' : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null ? 'router-link-exact-active' : globalExactActiveClass;
    var activeClass = this.activeClass == null ? activeClassFallback : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null ? exactActiveClassFallback : this.exactActiveClass;
    var compareTarget = location.path ? createRoute(null, location, null, router) : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact ? classes[exactActiveClass] : isIncludedRoute(current, compareTarget);

    var handler = function handler(e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) {
        on[e] = handler;
      });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default);
  }
};

function guardEvent(e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) {
    return;
  }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) {
    return;
  }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) {
    return;
  }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) {
      return;
    }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true;
}

function findAnchor(children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child;
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child;
      }
    }
  }
}

var _Vue;

function install(Vue) {
  if (install.installed && _Vue === Vue) {
    return;
  }
  install.installed = true;

  _Vue = Vue;

  var isDef = function isDef(v) {
    return v !== undefined;
  };

  var registerInstance = function registerInstance(vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate() {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = this.$parent && this.$parent._routerRoot || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed() {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get() {
      return this._routerRoot._router;
    }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get() {
      return this._routerRoot._route;
    }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath(relative, base, append) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative;
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative;
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/');
}

function parsePath(path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  };
}

function cleanPath(path) {
  return path.replace(/\/\//g, '/');
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens;
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options));
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (_typeof(tokens[i]) === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue;
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys(re, keys) {
  re.keys = keys;
  return re;
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options.sensitive ? '' : 'i';
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp(path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys);
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp(path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys);
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp(path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options);
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp(tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */keys || options;
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys);
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp(path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */keys || options;
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */keys);
  }

  if (isarray(path)) {
    return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);
  }

  return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams(path, params, routeMsg) {
  try {
    var filler = regexpCompileCache[path] || (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true });
  } catch (e) {
    if (false) {
      warn(false, "missing param for " + routeMsg + ": " + e.message);
    }
    return '';
  }
}

/*  */

function createRouteMap(routes, oldPathList, oldPathMap, oldNameMap) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  };
}

function addRouteRecord(pathList, pathMap, nameMap, route, parent, matchAs) {
  var path = route.path;
  var name = route.name;
  if (false) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(typeof route.component !== 'string', "route config \"component\" for path: " + String(path || name) + " cannot be a " + "string id. Use an actual component instead.");
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict);

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null ? {} : route.components ? route.props : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (false) {
      if (route.name && !route.redirect && route.children.some(function (child) {
        return (/^\/?$/.test(child.path)
        );
      })) {
        warn(false, "Named Route '" + route.name + "' has a default child route. " + "When navigating to this named route (:to=\"{name: '" + route.name + "'\"), " + "the default child route will not be rendered. Remove the name from " + "this route and use the name of the default child route for named " + "links instead.");
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs ? cleanPath(matchAs + "/" + child.path) : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias) ? route.alias : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (false) {
      warn(false, "Duplicate named routes definition: " + "{ name: \"" + name + "\", path: \"" + record.path + "\" }");
    }
  }
}

function compileRouteRegex(path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (false) {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], "Duplicate param keys in route with path: \"" + path + "\"");
      keys[key.name] = true;
    });
  }
  return regex;
}

function normalizePath(path, parent, strict) {
  if (!strict) {
    path = path.replace(/\/$/, '');
  }
  if (path[0] === '/') {
    return path;
  }
  if (parent == null) {
    return path;
  }
  return cleanPath(parent.path + "/" + path);
}

/*  */

function normalizeLocation(raw, current, append, router) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next;
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, "path " + current.path);
    } else if (false) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next;
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = current && current.path || '/';
  var path = parsedPath.path ? resolvePath(parsedPath.path, basePath, append || next.append) : basePath;

  var query = resolveQuery(parsedPath.query, next.query, router && router.options.parseQuery);

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  };
}

function assign(a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a;
}

/*  */

function createMatcher(routes, router) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes(routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match(raw, currentRoute, redirectedFrom) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (false) {
        warn(record, "Route with name '" + name + "' does not exist");
      }
      if (!record) {
        return _createRoute(null, location);
      }
      var paramNames = record.regex.keys.filter(function (key) {
        return !key.optional;
      }).map(function (key) {
        return key.name;
      });

      if (_typeof(location.params) !== 'object') {
        location.params = {};
      }

      if (currentRoute && _typeof(currentRoute.params) === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, "named route \"" + name + "\"");
        return _createRoute(record, location, redirectedFrom);
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom);
        }
      }
    }
    // no match
    return _createRoute(null, location);
  }

  function redirect(record, location) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function' ? originalRedirect(createRoute(record, location, null, router)) : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || (typeof redirect === 'undefined' ? 'undefined' : _typeof(redirect)) !== 'object') {
      if (false) {
        warn(false, "invalid redirect option: " + JSON.stringify(redirect));
      }
      return _createRoute(null, location);
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (false) {
        assert(targetRecord, "redirect failed: named route \"" + name + "\" not found.");
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location);
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, "redirect route with path \"" + rawPath + "\"");
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location);
    } else {
      if (false) {
        warn(false, "invalid redirect option: " + JSON.stringify(redirect));
      }
      return _createRoute(null, location);
    }
  }

  function alias(record, location, matchAs) {
    var aliasedPath = fillParams(matchAs, location.params, "aliased route with path \"" + matchAs + "\"");
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location);
    }
    return _createRoute(null, location);
  }

  function _createRoute(record, location, redirectedFrom) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location);
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs);
    }
    return createRoute(record, location, redirectedFrom, router);
  }

  return {
    match: match,
    addRoutes: addRoutes
  };
}

function matchRoute(regex, path, params) {
  var m = path.match(regex);

  if (!m) {
    return false;
  } else if (!params) {
    return true;
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true;
}

function resolveRecordPath(path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true);
}

/*  */

var positionStore = Object.create(null);

function setupScroll() {
  // Fix for #1585 for Firefox
  window.history.replaceState({ key: getStateKey() }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll(router, to, from, isPop) {
  if (!router.app) {
    return;
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return;
  }

  if (false) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return;
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition(shouldScroll, position);
      }).catch(function (err) {
        if (false) {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition() {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition() {
  var key = getStateKey();
  if (key) {
    return positionStore[key];
  }
}

function getElementPosition(el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  };
}

function isValidPosition(obj) {
  return isNumber(obj.x) || isNumber(obj.y);
}

function normalizePosition(obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  };
}

function normalizeOffset(obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  };
}

function isNumber(v) {
  return typeof v === 'number';
}

function scrollToPosition(shouldScroll, position) {
  var isObject = (typeof shouldScroll === 'undefined' ? 'undefined' : _typeof(shouldScroll)) === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && _typeof(shouldScroll.offset) === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && function () {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }

  return window.history && 'pushState' in window.history;
}();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now ? window.performance : Date;

var _key = genKey();

function genKey() {
  return Time.now().toFixed(3);
}

function getStateKey() {
  return _key;
}

function setStateKey(key) {
  _key = key;
}

function pushState(url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState(url) {
  pushState(url, true);
}

/*  */

function runQueue(queue, fn, cb) {
  var step = function step(index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents(matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function' ? resolvedDef : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "production" !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason) ? reason : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) {
      next();
    }
  };
}

function flatMapComponents(matched, fn) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return fn(m.components[key], m.instances[key], m, key);
    });
  }));
}

function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}

var hasSymbol = typeof Symbol === 'function' && _typeof(Symbol.toStringTag) === 'symbol';

function isESModule(obj) {
  return obj.__esModule || hasSymbol && obj[Symbol.toStringTag] === 'Module';
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once(fn) {
  var called = false;
  return function () {
    var args = [],
        len = arguments.length;
    while (len--) {
      args[len] = arguments[len];
    }if (called) {
      return;
    }
    called = true;
    return fn.apply(this, args);
  };
}

/*  */

var History = function History(router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen(cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady(cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError(errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo(location, onComplete, onAbort) {
  var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) {
        cb(route);
      });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) {
        cb(err);
      });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition(route, onComplete, onAbort) {
  var this$1 = this;

  var current = this.current;
  var abort = function abort(err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) {
          cb(err);
        });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (isSameRoute(route, current) &&
  // in the case the route map has been dynamically appended to
  route.matched.length === current.matched.length) {
    this.ensureURL();
    return abort();
  }

  var ref = resolveQueue(this.current.matched, route.matched);
  var updated = ref.updated;
  var deactivated = ref.deactivated;
  var activated = ref.activated;

  var queue = [].concat(
  // in-component leave guards
  extractLeaveGuards(deactivated),
  // global before hooks
  this.router.beforeHooks,
  // in-component update hooks
  extractUpdateHooks(updated),
  // in-config enter guards
  activated.map(function (m) {
    return m.beforeEnter;
  }),
  // async components
  resolveAsyncComponents(activated));

  this.pending = route;
  var iterator = function iterator(hook, next) {
    if (this$1.pending !== route) {
      return abort();
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (typeof to === 'string' || (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' && (typeof to.path === 'string' || typeof to.name === 'string')) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if ((typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function isValid() {
      return this$1.current === route;
    };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort();
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) {
            cb();
          });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute(route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase(base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = baseEl && baseEl.getAttribute('href') || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '');
}

function resolveQueue(current, next) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break;
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  };
}

function extractGuards(records, name, bind, reverse) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard) ? guard.map(function (guard) {
        return bind(guard, instance, match, key);
      }) : bind(guard, instance, match, key);
    }
  });
  return flatten(reverse ? guards.reverse() : guards);
}

function extractGuard(def, key) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key];
}

function extractLeaveGuards(deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true);
}

function extractUpdateHooks(updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard);
}

function bindGuard(guard, instance) {
  if (instance) {
    return function boundRouteGuard() {
      return guard.apply(instance, arguments);
    };
  }
}

function extractEnterGuards(activated, cbs, isValid) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid);
  });
}

function bindEnterGuard(guard, match, key, cbs, isValid) {
  return function routeEnterGuard(to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    });
  };
}

function poll(cb, // somehow flow cannot infer this is a function
instances, key, isValid) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */

var HTML5History = function (History$$1) {
  function HTML5History(router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return;
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if (History$$1) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create(History$$1 && History$$1.prototype);
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go(n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push(location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL(push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation() {
    return getLocation(this.base);
  };

  return HTML5History;
}(History);

function getLocation(base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash;
}

/*  */

var HashHistory = function (History$$1) {
  function HashHistory(router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return;
    }
    ensureSlash();
  }

  if (History$$1) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create(History$$1 && History$$1.prototype);
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners() {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return;
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push(location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go(n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL(push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation() {
    return getHash();
  };

  return HashHistory;
}(History);

function checkFallback(base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(cleanPath(base + '/#' + location));
    return true;
  }
}

function ensureSlash() {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true;
  }
  replaceHash('/' + path);
  return false;
}

function getHash() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1);
}

function getUrl(path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return base + "#" + path;
}

function pushHash(path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash(path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */

var AbstractHistory = function (History$$1) {
  function AbstractHistory(router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if (History$$1) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create(History$$1 && History$$1.prototype);
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push(location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go(n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return;
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation() {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/';
  };

  AbstractHistory.prototype.ensureURL = function ensureURL() {
    // noop
  };

  return AbstractHistory;
}(History);

/*  */

var VueRouter = function VueRouter(options) {
  if (options === void 0) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break;
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break;
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break;
    default:
      if (false) {
        assert(false, "invalid mode: " + mode);
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match(raw, current, redirectedFrom) {
  return this.matcher.match(raw, current, redirectedFrom);
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current;
};

VueRouter.prototype.init = function init(app /* Vue component instance */) {
  var this$1 = this;

  "production" !== 'production' && assert(install.installed, "not installed. Make sure to call `Vue.use(VueRouter)` " + "before creating root instance.");

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return;
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function setupHashListener() {
      history.setupListeners();
    };
    history.transitionTo(history.getCurrentLocation(), setupHashListener, setupHashListener);
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach(fn) {
  return registerHook(this.beforeHooks, fn);
};

VueRouter.prototype.beforeResolve = function beforeResolve(fn) {
  return registerHook(this.resolveHooks, fn);
};

VueRouter.prototype.afterEach = function afterEach(fn) {
  return registerHook(this.afterHooks, fn);
};

VueRouter.prototype.onReady = function onReady(cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError(errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push(location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace(location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go(n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back() {
  this.go(-1);
};

VueRouter.prototype.forward = function forward() {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents(to) {
  var route = to ? to.matched ? to : this.resolve(to).route : this.currentRoute;
  if (!route) {
    return [];
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key];
    });
  }));
};

VueRouter.prototype.resolve = function resolve(to, current, append) {
  var location = normalizeLocation(to, current || this.history.current, append, this);
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  };
};

VueRouter.prototype.addRoutes = function addRoutes(routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties(VueRouter.prototype, prototypeAccessors);

function registerHook(list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) {
      list.splice(i, 1);
    }
  };
}

function createHref(base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path;
}

VueRouter.install = install;
VueRouter.version = '2.8.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

exports.default = VueRouter;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(153)
)

/* script */
__vue_exports__ = __webpack_require__(154)

/* template */
var __vue_template__ = __webpack_require__(155)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/example/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-312bac68"
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
/* 153 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 154 */
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

exports.default = {};

/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app"]
  }, [_c('router-view')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(157)
)

/* script */
__vue_exports__ = __webpack_require__(158)

/* template */
var __vue_template__ = __webpack_require__(159)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/example/index/components/home.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-48a00175"
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
/* 157 */
/***/ (function(module, exports) {

module.exports = {
  "flymeui": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "left": 0,
    "bottom": 0,
    "backgroundColor": "#fafafa"
  },
  "header": {
    "marginTop": 89,
    "marginBottom": 31,
    "marginLeft": 25.6666
  },
  "desc": {
    "width": 258.3333,
    "marginTop": 18
  },
  "list": {
    "flexDirection": "row",
    "flexWrap": "wrap",
    "justifyContent": "space-between",
    "paddingTop": 16,
    "paddingRight": 16,
    "paddingBottom": 16,
    "paddingLeft": 16
  },
  "item": {
    "justifyContent": "space-between",
    "backgroundColor": "#ffffff",
    "width": 160,
    "height": 120,
    "marginBottom": 6.66666,
    "paddingTop": 16.6667,
    "paddingRight": 16.6667,
    "paddingBottom": 16.6667,
    "paddingLeft": 16.6667,
    "boxShadow": "0 0 6.6667px 0 rgba(0, 0, 0, 0.04)"
  }
}

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(5);

var _title = __webpack_require__(76);

var _title2 = _interopRequireDefault(_title);

var _category = __webpack_require__(77);

var _category2 = _interopRequireDefault(_category);

var _setNav = __webpack_require__(84);

var _category3 = __webpack_require__(168);

var _category4 = _interopRequireDefault(_category3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            category: _category4.default
        };
    },

    components: { Title: _title2.default, Category: _category2.default, FmText: _index.FmText, FmImage: _index.FmImage },
    methods: {
        jump: function jump(type) {
            if (this.$router) {
                this.$router.push({ name: 'detail', params: { type: type } });
            }
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["flymeui"]
  }, [_c('scroller', {
    staticClass: ["scroller"]
  }, [_c('div', {
    staticClass: ["header"]
  }, [_c('fm-image', {
    attrs: {
      "scale": 1 / 3,
      "src": "http://172.17.201.27:8888/design_logo.png"
    }
  }), _c('fm-text', {
    staticClass: ["desc"],
    style: {
      fontSize: 14,
      color: 'rgba(0, 0, 0, 0.6)',
      fontWeight: 400
    },
    attrs: {
      "textValue": "为你提供最全面的公共规范内容展示，让你方便调用动画参数、设计参数以及控件代码"
    }
  })], 1), _c('div', {
    staticClass: ["list"]
  }, _vm._l((_vm.category), function(item, key) {
    return _c('div', {
      staticClass: ["item"],
      on: {
        "click": function($event) {
          _vm.jump(key)
        }
      }
    }, [_c('fm-image', {
      staticClass: ["item-icon"],
      attrs: {
        "scale": 1 / 3,
        "src": 'http://172.17.201.27:8888/' + key + '.png'
      }
    }), _c('div', [_c('fm-text', {
      style: {
        fontSize: 16,
        color: '#000',
        fontWeight: 400
      },
      attrs: {
        "textValue": item.name,
        "title": ""
      }
    }), _c('fm-text', {
      style: {
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.4)',
        fontWeight: 400
      },
      attrs: {
        "textValue": item.componentList.length + ' 个项目'
      }
    })], 1)], 1)
  }))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(161)
)

/* script */
__vue_exports__ = __webpack_require__(162)

/* template */
var __vue_template__ = __webpack_require__(163)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/example/index/components/detail.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6c63b467"
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
/* 161 */
/***/ (function(module, exports) {

module.exports = {
  "actionBar": {
    "height": 64,
    "paddingTop": 20
  },
  "actionIcon": {
    "marginTop": 10,
    "marginRight": 15,
    "marginLeft": 17
  },
  "flymeui": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "left": 0,
    "bottom": 0,
    "backgroundColor": "#fafafa"
  },
  "header": {
    "flexDirection": "row",
    "alignItems": "flex-end",
    "marginTop": 23.6667,
    "marginBottom": 34.6667,
    "marginLeft": 24
  },
  "list": {
    "marginLeft": 9.333,
    "marginRight": 9.333,
    "paddingTop": 9.333,
    "paddingRight": 9.333,
    "paddingBottom": 9.333,
    "paddingLeft": 9.333
  }
}

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(5);

var _cell = __webpack_require__(164);

var _cell2 = _interopRequireDefault(_cell);

var _title = __webpack_require__(76);

var _title2 = _interopRequireDefault(_title);

var _category = __webpack_require__(77);

var _category2 = _interopRequireDefault(_category);

var _setNav = __webpack_require__(84);

var _category3 = __webpack_require__(168);

var _category4 = _interopRequireDefault(_category3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
var env = weex.config.env;
var url = weex.config.bundleUrl;

exports.default = {
    props: {
        type: String,
        category: Object
    },
    components: { Title: _title2.default, Category: _category2.default, FmText: _index.FmText, FmImage: _index.FmImage, FmIcon: _index.FmIcon, DCell: _cell2.default },
    created: function created() {
        this.$route.params.type ? this.type = this.$route.params.type : this.$router.go(-1);
        this.category = _category4.default[this.type];
    },

    methods: {
        back: function back() {
            this.$router.go(-1);
        },
        jump: function jump(path) {
            if (env.platform === 'Web') {
                window.location.href = path;
            } else {
                var target = url.replace(/index.native.js/, path + '/index.native.js');
                navigator.push({
                    url: target,
                    animated: "true"
                });
            }
        }
    }
};

/***/ }),
/* 163 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["flymeui"]
  }, [_c('div', {
    staticClass: ["actionBar"]
  }, [_c('fm-icon', {
    staticClass: ["actionIcon"],
    attrs: {
      "value": "&#xe6b5;",
      "iconStyle": "24",
      "color": "#999"
    },
    on: {
      "click": _vm.back
    }
  })], 1), _c('scroller', {
    staticClass: ["scroller"]
  }, [_c('div', {
    staticClass: ["header"]
  }, [_c('fm-image', {
    attrs: {
      "scale": 1 / 2,
      "src": 'http://172.17.201.27:8888/' + _vm.type + '.png'
    }
  }), _c('div', {
    staticStyle: {
      marginLeft: "16.667px"
    }
  }, [_c('fm-text', {
    staticClass: ["title"],
    attrs: {
      "textValue": _vm.category.name,
      "medium": "",
      "textStyle": {
        fontSize: 21,
        color: '#000',
        fontWeight: 500,
        lineHeight: 23
      }
    }
  }), _c('fm-text', {
    staticClass: ["subTitle"],
    attrs: {
      "textValue": _vm.category.subname,
      "textStyle": {
        fontSize: 12,
        color: '#000',
        fontWeight: 300,
        lineHeight: 14,
        marginTop: 2
      }
    }
  })], 1)], 1), _c('div', {
    staticClass: ["list"]
  }, [_vm._l((_vm.category.componentList), function(item) {
    return [_c('d-cell', {
      attrs: {
        "title": item.name,
        "subTitle": item.subname
      },
      on: {
        "click": function($event) {
          _vm.jump(item.path)
        }
      }
    })]
  })], 2)])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(165)
)

/* script */
__vue_exports__ = __webpack_require__(166)

/* template */
var __vue_template__ = __webpack_require__(167)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/example/index/components/cell.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2ee99c78"
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
/* 165 */
/***/ (function(module, exports) {

module.exports = {
  "detail-cell": {
    "paddingLeft": 21.6667,
    "paddingRight": 21.6667,
    "height": 84,
    "backgroundColor": "#ffffff"
  },
  "content": {
    "flex": 1,
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "border": {
    "height": 2,
    "backgroundColor": "#cccccc",
    "transform": "scaleY(0.3333)"
  },
  "cellIcon": {
    "transform": "rotate(180deg)"
  }
}

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _index = __webpack_require__(5);

exports.default = {
	props: {
		title: String,
		subTitle: String
	},
	components: { FmText: _index.FmText, FmIcon: _index.FmIcon },
	methods: {
		click: function click(e) {
			this.$emit('click', e);
			e.stopPropagation();
		}
	}
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 167 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["detail-cell"],
    attrs: {
      "bubble": "true"
    },
    on: {
      "click": _vm.click
    }
  }, [_c('div', {
    staticClass: ["content"]
  }, [_c('div', {
    staticClass: ["desc"]
  }, [_c('fm-text', {
    attrs: {
      "textValue": _vm.title,
      "medium": "",
      "textStyle": {
        fontSize: 16,
        color: '#000',
        fontWeight: 500,
        lineHeight: 18
      }
    }
  }), _c('fm-text', {
    attrs: {
      "textValue": _vm.subTitle,
      "textStyle": {
        fontSize: 12,
        color: 'rgba(0,0,0,0.4)',
        fontWeight: 300,
        lineHeight: 14,
        marginTop: 8.6667
      }
    }
  })], 1), _c('fm-icon', {
    staticClass: ["cellIcon"],
    attrs: {
      "value": "&#xe6b5;",
      "color": "#999",
      "iconStyle": "24"
    }
  })], 1), _c('div', {
    staticClass: ["border"]
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    base: {
        name: '基础组件',
        subname: 'Underlying conponent',
        componentList: [{
            name: '文本',
            subname: 'FmText',
            path: 'text'
        }, {
            name: '富文本',
            subname: 'RichText',
            path: 'richText'
        }, {
            name: '图标',
            subname: 'FmIcon',
            path: 'icon'
        }, {
            name: '标签',
            subname: 'FmTag',
            path: 'tag'
        }, {
            name: '折叠文本',
            subname: 'FmFoldableText',
            path: 'tag'
        }]
    },
    container: {
        name: '容器组件',
        subname: 'Container conponent',
        componentList: [{
            name: '标签页',
            subname: 'FmTabView',
            path: 'tabView'
        }]
    },
    interaction: {
        name: '交互组件',
        subname: 'Interactive conponent',
        componentList: [{
            name: '引导提示',
            subname: 'FmTips',
            path: 'tips'
        }]
    },
    form: {
        name: '表单组件',
        subname: 'Form conponent',
        componentList: [{
            name: '按钮',
            subname: 'FmButton',
            path: 'button'
        }, {
            name: '开关按钮',
            subname: 'FmSwitch',
            path: 'switch'
        }, {
            name: '输入款',
            subname: 'FmInput',
            path: 'input'
        }, {
            name: '滑块',
            subname: 'FmSlider',
            path: 'slider'
        }]
    },
    other: {
        name: '其他组件',
        subname: 'Other conponent',
        componentList: []
    }
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.native.js.map