// { "framework": "Vue" }

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["npm/weex-flymeui/example/component/multiCheck/index"] = factory();
	else
		root["npm/weex-flymeui/example/component/multiCheck/index"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 220);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(33);

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
exports.use = exports.t = undefined;

var _zhCN = __webpack_require__(23);

var _zhCN2 = _interopRequireDefault(_zhCN);

var _vue = __webpack_require__(24);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lang = _zhCN2.default;
var merged = false;

var t = exports.t = function t(path, options) {
  var value = void 0;

  var array = path.split('.');
  var current = lang;

  for (var i = 0, j = array.length; i < j; i++) {
    var property = array[i];
    value = current[property];
    if (i === j - 1) return value;
    if (!value) return '';
    current = value;
  }
  return '';
};

var use = exports.use = function use(l) {
  lang = l || lang;
};

exports.default = { t: t, use: use };

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _locale = __webpack_require__(1);

exports.default = {
  methods: {
    t: function t() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _locale.t.apply(this, args);
    }
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(29);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(82);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(85);

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

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(92);

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

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FmRcyCheck = exports.FmMultiCheckCell = exports.FmMultiCheckGroup = exports.FmTitlebar = exports.FmSearchbar = exports.FmActionView = exports.FmCheckListGroup = exports.FmCheckbox = exports.showSnackBar = exports.FmSnackBar = exports.FmRater = exports.FmCell = exports.FmActionSheet = exports.FmPopup = exports.alert = exports.confirm = exports.FmSimpleBtn = exports.FmDialog = exports.FmOverlay = exports.FmImage = exports.FmFoldableText = exports.FmSpecialRichText = exports.FmRichText = exports.FmTips = exports.FmTabView = exports.FmInput = exports.FmButton = exports.FmSlider = exports.FmIcon = exports.FmText = exports.FmTag = exports.FmSwitch = undefined;

var _fmSwitch = __webpack_require__(15);

var _fmSwitch2 = _interopRequireDefault(_fmSwitch);

var _fmTag = __webpack_require__(4);

var _fmTag2 = _interopRequireDefault(_fmTag);

var _fmText = __webpack_require__(3);

var _fmText2 = _interopRequireDefault(_fmText);

var _fmIcon = __webpack_require__(0);

var _fmIcon2 = _interopRequireDefault(_fmIcon);

var _fmSlider = __webpack_require__(39);

var _fmSlider2 = _interopRequireDefault(_fmSlider);

var _fmButton = __webpack_require__(44);

var _fmButton2 = _interopRequireDefault(_fmButton);

var _fmInput = __webpack_require__(49);

var _fmInput2 = _interopRequireDefault(_fmInput);

var _fmTabView = __webpack_require__(54);

var _fmTabView2 = _interopRequireDefault(_fmTabView);

var _fmTips = __webpack_require__(59);

var _fmTips2 = _interopRequireDefault(_fmTips);

var _fmRichText = __webpack_require__(64);

var _fmRichText2 = _interopRequireDefault(_fmRichText);

var _fmSpecialRichText = __webpack_require__(72);

var _fmSpecialRichText2 = _interopRequireDefault(_fmSpecialRichText);

var _fmFoldableText = __webpack_require__(77);

var _fmFoldableText2 = _interopRequireDefault(_fmFoldableText);

var _fmImage = __webpack_require__(5);

var _fmImage2 = _interopRequireDefault(_fmImage);

var _fmOverlay = __webpack_require__(6);

var _fmOverlay2 = _interopRequireDefault(_fmOverlay);

var _fmDialog = __webpack_require__(10);

var _fmDialog2 = _interopRequireDefault(_fmDialog);

var _fmSimpleBtn = __webpack_require__(7);

var _fmSimpleBtn2 = _interopRequireDefault(_fmSimpleBtn);

var _dialog = __webpack_require__(97);

var _fmPopup = __webpack_require__(11);

var _fmPopup2 = _interopRequireDefault(_fmPopup);

var _fmActionSheet = __webpack_require__(102);

var _fmActionSheet2 = _interopRequireDefault(_fmActionSheet);

var _fmCell = __webpack_require__(107);

var _fmCell2 = _interopRequireDefault(_fmCell);

var _fmRater = __webpack_require__(112);

var _fmRater2 = _interopRequireDefault(_fmRater);

var _fmSnackBar = __webpack_require__(12);

var _fmSnackBar2 = _interopRequireDefault(_fmSnackBar);

var _snackbar = __webpack_require__(121);

var _snackbar2 = _interopRequireDefault(_snackbar);

var _fmCheckbox = __webpack_require__(122);

var _fmCheckbox2 = _interopRequireDefault(_fmCheckbox);

var _fmCheckListGroup = __webpack_require__(127);

var _fmCheckListGroup2 = _interopRequireDefault(_fmCheckListGroup);

var _fmActionView = __webpack_require__(131);

var _fmActionView2 = _interopRequireDefault(_fmActionView);

var _fmSearchbar = __webpack_require__(14);

var _fmSearchbar2 = _interopRequireDefault(_fmSearchbar);

var _fmTitlebar = __webpack_require__(139);

var _fmTitlebar2 = _interopRequireDefault(_fmTitlebar);

var _fmMultiCheckGroup = __webpack_require__(144);

var _fmMultiCheckGroup2 = _interopRequireDefault(_fmMultiCheckGroup);

var _fmMultiCheckCell = __webpack_require__(13);

var _fmMultiCheckCell2 = _interopRequireDefault(_fmMultiCheckCell);

var _fmRcyCheck = __webpack_require__(156);

var _fmRcyCheck2 = _interopRequireDefault(_fmRcyCheck);

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
exports.FmOverlay = _fmOverlay2.default;
exports.FmDialog = _fmDialog2.default;
exports.FmSimpleBtn = _fmSimpleBtn2.default;
exports.confirm = _dialog.confirm;
exports.alert = _dialog.alert;
exports.FmPopup = _fmPopup2.default;
exports.FmActionSheet = _fmActionSheet2.default;
exports.FmCell = _fmCell2.default;
exports.FmRater = _fmRater2.default;
exports.FmSnackBar = _fmSnackBar2.default;
exports.showSnackBar = _snackbar2.default;
exports.FmCheckbox = _fmCheckbox2.default;
exports.FmCheckListGroup = _fmCheckListGroup2.default;
exports.FmActionView = _fmActionView2.default;
exports.FmSearchbar = _fmSearchbar2.default;
exports.FmTitlebar = _fmTitlebar2.default;
exports.FmMultiCheckGroup = _fmMultiCheckGroup2.default;
exports.FmMultiCheckCell = _fmMultiCheckCell2.default;
exports.FmRcyCheck = _fmRcyCheck2.default;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by Tw93 on 2017/6/26.
 */
var Utils = {
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
  isNonEmptyArray: function isNonEmptyArray(obj) {
    return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
  }
};
exports.default = Utils;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(89);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(98);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(117);

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

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(147);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(135);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 15 */
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
/* 17 */
/***/ (function(module, exports) {

module.exports = {
  "fm-switch": {
    "flexDirection": "row",
    "alignItems": "center",
    "width": "144",
    "height": "72",
    "borderRadius": "72",
    "backgroundColor": "#198ded"
  },
  "ctr-ball": {
    "width": "48",
    "height": "48",
    "borderRadius": "24"
  }
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
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
  name: 'FmSwitch',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    common: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
    blurColor: {
      type: String,
      default: '#FFFFFF'
    },
    focusColor: {
      type: String,
      default: '#FFFFFF'
    },
    borderColor: String,
    backgroundColor: String
  },
  data: function data() {
    return {
      isAnimate: false,
      ballStyle: {
        backgroundColor: this.blurColor
      }
    };
  },

  computed: {
    getBgStyle: function getBgStyle() {
      var common = this.common,
          borderColor = this.borderColor,
          backgroundColor = this.backgroundColor,
          disabled = this.disabled;

      var style = common ? {
        borderWidth: 6,
        borderColor: '#7E97AC',
        backgroundColor: 'none'
      } : {};
      if (disabled) {
        style.opacity = 0.3;
      } else {
        style.opacity = 1;
      }
      if (borderColor) {
        style.borderWidth = 6;
        style.borderColor = borderColor;
      }
      if (backgroundColor) {
        style.backgroundColor = backgroundColor;
      }
      return style;
    }
  },
  watch: {
    checked: function checked(bool) {
      this.toggleState(bool);
    }
  },
  methods: {
    changeState: function changeState(e) {
      if (this.isAnimate || this.disabled) return;
      this.checked = !this.checked;
      this.toggleState(this.checked);
      this.$emit('fmSwitchStateChange', this.checked);
    },
    toggleState: function toggleState(bool) {
      var _ref,
          _this = this;

      this.isAnimate = true;
      var style = bool ? (_ref = {
        backgroundColor: this.focusColor,
        transform: 'scale(1)'
      }, _defineProperty(_ref, 'transform', 'translate(72px, 0)'), _defineProperty(_ref, 'transformOrigin', 'center center'), _ref) : {
        backgroundColor: this.blurColor,
        transform: 'scale(0.6)',
        transformOrigin: 'center center'
      };
      var ctrBall = this.$refs.ctrBall;
      if (!ctrBall) {
        return;
      }
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

    if (this.common) {
      this.focusColor = '#198DED';
      this.blurColor = '#7E97AC';
    }
    this.checked ? this.ballStyle = _defineProperty({
      backgroundColor: this.focusColor,
      transform: 'scale(1.0)'
    }, 'transform', 'translate(72px, 0)') : this.ballStyle = {
      backgroundColor: this.blurColor,
      transform: 'scale(0.6)'
    };
  }
};

/***/ }),
/* 19 */
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
var __vue_template__ = __webpack_require__(28)
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
/* 21 */
/***/ (function(module, exports) {

module.exports = {
  "fm-tag": {
    "alignItems": "center",
    "flexDirection": "row"
  },
  "tag-item": {
    "paddingTop": "9",
    "paddingRight": "9",
    "paddingBottom": "9",
    "paddingLeft": "9",
    "justifyContent": "center",
    "alignItems": "center",
    "overflow": "hidden"
  },
  "tag-border": {
    "borderRadius": "4.5"
  },
  "tag-huge": {
    "borderRadius": "100",
    "height": "72",
    "paddingTop": "12",
    "paddingRight": "42",
    "paddingBottom": "12",
    "paddingLeft": "42"
  },
  "tag-hollow": {
    "borderWidth": "3"
  },
  "tag-text": {
    "fontFamily": "\"Source Han Sans CN\", Roboto, sans-serif",
    "fontWeight": "bold"
  },
  "tag-font-small": {
    "fontSize": "24"
  },
  "tag-font-big": {
    "fontSize": "30"
  },
  "tag-font-huge": {
    "fontSize": "42",
    "fontFamily": "sans-serif-medium",
    "fontWeight": "500"
  },
  "tag-margin-small": {
    "marginRight": "6",
    "marginBottom": "6"
  },
  "tag-margin-big": {
    "marginRight": "12",
    "marginBottom": "12"
  },
  "tag-margin-huge": {
    "marginRight": "36",
    "marginBottom": "36"
  }
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _locale = __webpack_require__(2);

var _locale2 = _interopRequireDefault(_locale);

var _locale3 = __webpack_require__(1);

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
//
//
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
  name: 'FmTag',
  mixins: [_locale2.default],
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
      default: function _default() {
        return (0, _locale3.t)('el.tag.tagName');
      }
    },
    color: {
      type: String,
      default: '#198DED'
    },
    fontColor: {
      type: String,
      default: '#FFFFFF'
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
      var fontColor = this.fontColor;

      return { color: fontColor };
    },
    textClass: function textClass() {
      var clz = ["tag-text"];
      var size = this.size;

      clz.push('tag-font-' + size);
      return clz;
    },
    tagClass: function tagClass() {
      var clz = ["fm-tag"];
      var size = this.size;

      clz.push('tag-margin-' + size);
      return clz;
    }
  },
  created: function created() {
    this.$slots.default && (this.value = this.$slots.default[0].text);
  }
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    common: {
      delete: '删除',
      cancel: '取消',
      confirm: '确认',
      close: '关闭'
    },
    searchbar: {
      search: '搜索'
    },
    foldabletext: {
      more: '更多'
    },
    input: {
      placeholder: '请输入',
      inputError: '输入有误'
    },
    tag: {
      tagName: '标签'
    }
  }
};

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(setImmediate) {/*!
 * Vue.js v2.5.13
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */


/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "production" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "production" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */


// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof {} !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = {}['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (false) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid$1 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid$1++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode, deep) {
  var componentOptions = vnode.componentOptions;
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  if (deep) {
    if (vnode.children) {
      cloned.children = cloneVNodes(vnode.children, true);
    }
    if (componentOptions && componentOptions.children) {
      componentOptions.children = cloneVNodes(componentOptions.children, true);
    }
  }
  return cloned
}

function cloneVNodes (vnodes, deep) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i], deep);
  }
  return res
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
].forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (false) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (false) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "production" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "production" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (false) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "production" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (false) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (false) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (false) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (false) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (false) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (
    false
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (false) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (false) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both micro and macro tasks.
// In < 2.4 we used micro tasks everywhere, but there are some scenarios where
// micro tasks have too high a priority and fires in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using macro tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use micro task by default, but expose a way to force macro task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) Task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine MicroTask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a Task instead of a MicroTask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (false) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (false) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      "production" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (false) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "production" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 false
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (false) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (false) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (false) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (false) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = (parentVnode.data && parentVnode.data.attrs) || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (false) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (false) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (false) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  false
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "production" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (false) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "production" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (false) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "production" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (false) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (false) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if (false) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (false) {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  keyOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(keyOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (false) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (false) {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive(vm, key, result[key]);
      }
    });
    observerState.shouldConvert = true;
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (false) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (false) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if (false) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias,
  eventKeyName
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (keyCodes) {
    if (Array.isArray(keyCodes)) {
      return keyCodes.indexOf(eventKeyCode) === -1
    } else {
      return keyCodes !== eventKeyCode
    }
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "production" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "production" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm = Object.create(parent);
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    vnode.fnContext = contextVm;
    vnode.fnOptions = options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }

  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (false) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "production" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (false
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force))) {
        applyNS(child, ns, force);
      }
    }
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (false) {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // if the parent didn't update, the slot nodes will be the ones from
      // last render. They need to be cloned to ensure "freshness" for this render.
      for (var key in vm.$slots) {
        var slot = vm.$slots[key];
        // _rendered is a flag added by renderSlot, but may not be present
        // if the slot is passed from manually written render functions
        if (slot._rendered || (slot[0] && slot[0].elm)) {
          vm.$slots[key] = cloneVNodes(slot, true /* deep */);
        }
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (false) {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (false) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (false) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (false) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (false) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if (false
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (false) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (false) {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (false) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

Vue$3.version = '2.5.13';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);



var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "production" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (false) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (false) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (false) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setAttribute(vnode.elm, i, '');
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (false) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (false) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (false
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (false
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (false) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // #7138: IE10 & 11 fires input event when setting placeholder on
      // <textarea>... block the first input event and remove the blocker
      // immediately.
      /* istanbul ignore if */
      if (
        isIE && !isIE9 &&
        el.tagName === 'TEXTAREA' &&
        key === 'placeholder' && !el.__ieph
      ) {
        var blocker = function (e) {
          e.stopImmediatePropagation();
          el.removeEventListener('input', blocker);
        };
        el.addEventListener('input', blocker);
        // $flow-disable-line
        el.__ieph = true; /* IE placeholder patched */
      }
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

/*  */









// add a raw attr (use this in preTransforms)








// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.

/*  */

/**
 * Cross-platform code generation for component v-model
 */


/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (false) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (false) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "production" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (false) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (false
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (false) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
Vue$3.nextTick(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if (false) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if (false
  ) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue$3);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(25).setImmediate))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(26);
// On some exotic environments, it's not clear which object `setimmeidate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof {} !== "undefined" && {}.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof {} !== "undefined" && {}.clearImmediate) ||
                         (this && this.clearImmediate);


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof {} === "undefined" ? this : {} : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)))

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.tagClass
  }, [(_vm.showSolid || _vm.showHollow) ? _c('div', {
    class: ['tag-item', 'tag-border', _vm.size === 'huge' && 'tag-huge', _vm.showHollow && 'tag-hollow'],
    style: _vm.tagTextStyle
  }, [_c('text', {
    ref: "content",
    class: _vm.textClass,
    style: _vm.textStyle
  }, [_vm._t("default"), (!_vm.$slots.default) ? [_vm._v(_vm._s(_vm.value))] : _vm._e()], 2)]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(30)
)

/* script */
__vue_exports__ = __webpack_require__(31)

/* template */
var __vue_template__ = __webpack_require__(32)
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
/* 30 */
/***/ (function(module, exports) {

module.exports = {
  "text": {
    "fontSize": 42,
    "lineHeight": 63,
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
    "fontWeight": "400"
  },
  "small": {
    "fontSize": 36
  },
  "large": {
    "fontSize": 48,
    "fontWeight": "500",
    "lineHeight": 72,
    "color": "#000000"
  },
  "huge": {
    "fontSize": 54,
    "lineHeight": 81,
    "color": "#000000"
  },
  "margin-text": {
    "marginRight": 9
  }
}

/***/ }),
/* 31 */
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
  name: 'FmText',
  props: {
    value: String,
    fontWeight: {
      type: String,
      default: 'normal'
    },
    size: {
      type: String,
      default: 'normal'
    },
    hasTextMargin: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    textClz: function textClz() {
      var clz = ['text'];
      if (this.hasTextMargin) {
        clz.push('margin-text');
      }
      if (this.size !== 'normal') {
        clz.push('' + this.size);
      }
      if (this.fontWeight !== 'normal') {
        clz.push('' + this.fontWeight);
      }
      return clz;
    }
  },
  created: function created() {
    this.$slots.default && (this.value = this.$slots.default[0].text);
  }
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    class: _vm.textClz
  }, [_vm._t("default"), (!_vm.$slots.default) ? [_vm._v(_vm._s(_vm.value))] : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(34)
)

/* script */
__vue_exports__ = __webpack_require__(35)

/* template */
var __vue_template__ = __webpack_require__(38)
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
/* 34 */
/***/ (function(module, exports) {

module.exports = {
  "fm-image": {
    "width": 129,
    "height": 36,
    "marginRight": 18
  }
}

/***/ }),
/* 35 */
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

// 引入he模块，使用它解决weex-template-compiler在编译阶段进行decode
var he = __webpack_require__(36);
exports.default = {
  name: 'FmIcon',
  props: {
    value: {
      type: String,
      default: ''
    },
    iconStyle: {
      type: [Number, Object, String],
      default: 42
    },
    color: {
      type: String,
      default: '#000000'
    }
  },
  data: function data() {
    return {
      width: 129
    };
  },
  computed: {
    computedStyle: function computedStyle() {
      if (Object.prototype.toString.call(this.iconStyle).slice(8, -1).toLowerCase() !== 'object') {
        this.iconStyle = { width: 36, height: 36 };
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
        style.fontSize = iconStyle + 'px';
        style.height = iconStyle + 'px';
        style.lineHeight = iconStyle + 'px';
      }
      return style;
    },

    // 匹配对应的字体图标的unicode
    getFontName: function getFontName() {
      return he.decode(this.value);
    }
  },
  beforeCreate: function beforeCreate() {
    var dom = weex.requireModule('dom');
    dom.addRule('fontFace', {
      'fontFamily': 'flymeicon',
      'src': "url('http://design.flyme.cn/weexui/assets/iconfont.ttf')"
    });
  },

  methods: {
    onLoad: function onLoad(e) {
      if (e.success && e.size && e.size.naturalWidth > 0) {
        var width = e.size.naturalWidth;
        var height = e.size.naturalHeight;
        this.width = width * (this.iconStyle.height / height);
      }
    },
    click: function click(e) {
      this.$emit('fmClick', e);
    },
    longpress: function longpress(e) {
      this.$emit('fmLongpress', e);
    }
  }
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/he v1.1.1 by @mathias | MIT license */
;(function(root) {

	// Detect free variables `exports`.
	var freeExports = typeof exports == 'object' && exports;

	// Detect free variable `module`.
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`.
	var freeGlobal = typeof {} == 'object' && {};
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
	var encodeMap = {'\xAD':'shy','\u200C':'zwnj','\u200D':'zwj','\u200E':'lrm','\u2063':'ic','\u2062':'it','\u2061':'af','\u200F':'rlm','\u200B':'ZeroWidthSpace','\u2060':'NoBreak','\u0311':'DownBreve','\u20DB':'tdot','\u20DC':'DotDot','\t':'Tab','\n':'NewLine','\u2008':'puncsp','\u205F':'MediumSpace','\u2009':'thinsp','\u200A':'hairsp','\u2004':'emsp13','\u2002':'ensp','\u2005':'emsp14','\u2003':'emsp','\u2007':'numsp','\xA0':'nbsp','\u205F\u200A':'ThickSpace','\u203E':'oline','_':'lowbar','\u2010':'dash','\u2013':'ndash','\u2014':'mdash','\u2015':'horbar',',':'comma',';':'semi','\u204F':'bsemi',':':'colon','\u2A74':'Colone','!':'excl','\xA1':'iexcl','?':'quest','\xBF':'iquest','.':'period','\u2025':'nldr','\u2026':'mldr','\xB7':'middot','\'':'apos','\u2018':'lsquo','\u2019':'rsquo','\u201A':'sbquo','\u2039':'lsaquo','\u203A':'rsaquo','"':'quot','\u201C':'ldquo','\u201D':'rdquo','\u201E':'bdquo','\xAB':'laquo','\xBB':'raquo','(':'lpar',')':'rpar','[':'lsqb',']':'rsqb','{':'lcub','}':'rcub','\u2308':'lceil','\u2309':'rceil','\u230A':'lfloor','\u230B':'rfloor','\u2985':'lopar','\u2986':'ropar','\u298B':'lbrke','\u298C':'rbrke','\u298D':'lbrkslu','\u298E':'rbrksld','\u298F':'lbrksld','\u2990':'rbrkslu','\u2991':'langd','\u2992':'rangd','\u2993':'lparlt','\u2994':'rpargt','\u2995':'gtlPar','\u2996':'ltrPar','\u27E6':'lobrk','\u27E7':'robrk','\u27E8':'lang','\u27E9':'rang','\u27EA':'Lang','\u27EB':'Rang','\u27EC':'loang','\u27ED':'roang','\u2772':'lbbrk','\u2773':'rbbrk','\u2016':'Vert','\xA7':'sect','\xB6':'para','@':'commat','*':'ast','/':'sol','undefined':null,'&':'amp','#':'num','%':'percnt','\u2030':'permil','\u2031':'pertenk','\u2020':'dagger','\u2021':'Dagger','\u2022':'bull','\u2043':'hybull','\u2032':'prime','\u2033':'Prime','\u2034':'tprime','\u2057':'qprime','\u2035':'bprime','\u2041':'caret','`':'grave','\xB4':'acute','\u02DC':'tilde','^':'Hat','\xAF':'macr','\u02D8':'breve','\u02D9':'dot','\xA8':'die','\u02DA':'ring','\u02DD':'dblac','\xB8':'cedil','\u02DB':'ogon','\u02C6':'circ','\u02C7':'caron','\xB0':'deg','\xA9':'copy','\xAE':'reg','\u2117':'copysr','\u2118':'wp','\u211E':'rx','\u2127':'mho','\u2129':'iiota','\u2190':'larr','\u219A':'nlarr','\u2192':'rarr','\u219B':'nrarr','\u2191':'uarr','\u2193':'darr','\u2194':'harr','\u21AE':'nharr','\u2195':'varr','\u2196':'nwarr','\u2197':'nearr','\u2198':'searr','\u2199':'swarr','\u219D':'rarrw','\u219D\u0338':'nrarrw','\u219E':'Larr','\u219F':'Uarr','\u21A0':'Rarr','\u21A1':'Darr','\u21A2':'larrtl','\u21A3':'rarrtl','\u21A4':'mapstoleft','\u21A5':'mapstoup','\u21A6':'map','\u21A7':'mapstodown','\u21A9':'larrhk','\u21AA':'rarrhk','\u21AB':'larrlp','\u21AC':'rarrlp','\u21AD':'harrw','\u21B0':'lsh','\u21B1':'rsh','\u21B2':'ldsh','\u21B3':'rdsh','\u21B5':'crarr','\u21B6':'cularr','\u21B7':'curarr','\u21BA':'olarr','\u21BB':'orarr','\u21BC':'lharu','\u21BD':'lhard','\u21BE':'uharr','\u21BF':'uharl','\u21C0':'rharu','\u21C1':'rhard','\u21C2':'dharr','\u21C3':'dharl','\u21C4':'rlarr','\u21C5':'udarr','\u21C6':'lrarr','\u21C7':'llarr','\u21C8':'uuarr','\u21C9':'rrarr','\u21CA':'ddarr','\u21CB':'lrhar','\u21CC':'rlhar','\u21D0':'lArr','\u21CD':'nlArr','\u21D1':'uArr','\u21D2':'rArr','\u21CF':'nrArr','\u21D3':'dArr','\u21D4':'iff','\u21CE':'nhArr','\u21D5':'vArr','\u21D6':'nwArr','\u21D7':'neArr','\u21D8':'seArr','\u21D9':'swArr','\u21DA':'lAarr','\u21DB':'rAarr','\u21DD':'zigrarr','\u21E4':'larrb','\u21E5':'rarrb','\u21F5':'duarr','\u21FD':'loarr','\u21FE':'roarr','\u21FF':'hoarr','\u2200':'forall','\u2201':'comp','\u2202':'part','\u2202\u0338':'npart','\u2203':'exist','\u2204':'nexist','\u2205':'empty','\u2207':'Del','\u2208':'in','\u2209':'notin','\u220B':'ni','\u220C':'notni','\u03F6':'bepsi','\u220F':'prod','\u2210':'coprod','\u2211':'sum','+':'plus','\xB1':'pm','\xF7':'div','\xD7':'times','<':'lt','\u226E':'nlt','<\u20D2':'nvlt','=':'equals','\u2260':'ne','=\u20E5':'bne','\u2A75':'Equal','>':'gt','\u226F':'ngt','>\u20D2':'nvgt','\xAC':'not','|':'vert','\xA6':'brvbar','\u2212':'minus','\u2213':'mp','\u2214':'plusdo','\u2044':'frasl','\u2216':'setmn','\u2217':'lowast','\u2218':'compfn','\u221A':'Sqrt','\u221D':'prop','\u221E':'infin','\u221F':'angrt','\u2220':'ang','\u2220\u20D2':'nang','\u2221':'angmsd','\u2222':'angsph','\u2223':'mid','\u2224':'nmid','\u2225':'par','\u2226':'npar','\u2227':'and','\u2228':'or','\u2229':'cap','\u2229\uFE00':'caps','\u222A':'cup','\u222A\uFE00':'cups','\u222B':'int','\u222C':'Int','\u222D':'tint','\u2A0C':'qint','\u222E':'oint','\u222F':'Conint','\u2230':'Cconint','\u2231':'cwint','\u2232':'cwconint','\u2233':'awconint','\u2234':'there4','\u2235':'becaus','\u2236':'ratio','\u2237':'Colon','\u2238':'minusd','\u223A':'mDDot','\u223B':'homtht','\u223C':'sim','\u2241':'nsim','\u223C\u20D2':'nvsim','\u223D':'bsim','\u223D\u0331':'race','\u223E':'ac','\u223E\u0333':'acE','\u223F':'acd','\u2240':'wr','\u2242':'esim','\u2242\u0338':'nesim','\u2243':'sime','\u2244':'nsime','\u2245':'cong','\u2247':'ncong','\u2246':'simne','\u2248':'ap','\u2249':'nap','\u224A':'ape','\u224B':'apid','\u224B\u0338':'napid','\u224C':'bcong','\u224D':'CupCap','\u226D':'NotCupCap','\u224D\u20D2':'nvap','\u224E':'bump','\u224E\u0338':'nbump','\u224F':'bumpe','\u224F\u0338':'nbumpe','\u2250':'doteq','\u2250\u0338':'nedot','\u2251':'eDot','\u2252':'efDot','\u2253':'erDot','\u2254':'colone','\u2255':'ecolon','\u2256':'ecir','\u2257':'cire','\u2259':'wedgeq','\u225A':'veeeq','\u225C':'trie','\u225F':'equest','\u2261':'equiv','\u2262':'nequiv','\u2261\u20E5':'bnequiv','\u2264':'le','\u2270':'nle','\u2264\u20D2':'nvle','\u2265':'ge','\u2271':'nge','\u2265\u20D2':'nvge','\u2266':'lE','\u2266\u0338':'nlE','\u2267':'gE','\u2267\u0338':'ngE','\u2268\uFE00':'lvnE','\u2268':'lnE','\u2269':'gnE','\u2269\uFE00':'gvnE','\u226A':'ll','\u226A\u0338':'nLtv','\u226A\u20D2':'nLt','\u226B':'gg','\u226B\u0338':'nGtv','\u226B\u20D2':'nGt','\u226C':'twixt','\u2272':'lsim','\u2274':'nlsim','\u2273':'gsim','\u2275':'ngsim','\u2276':'lg','\u2278':'ntlg','\u2277':'gl','\u2279':'ntgl','\u227A':'pr','\u2280':'npr','\u227B':'sc','\u2281':'nsc','\u227C':'prcue','\u22E0':'nprcue','\u227D':'sccue','\u22E1':'nsccue','\u227E':'prsim','\u227F':'scsim','\u227F\u0338':'NotSucceedsTilde','\u2282':'sub','\u2284':'nsub','\u2282\u20D2':'vnsub','\u2283':'sup','\u2285':'nsup','\u2283\u20D2':'vnsup','\u2286':'sube','\u2288':'nsube','\u2287':'supe','\u2289':'nsupe','\u228A\uFE00':'vsubne','\u228A':'subne','\u228B\uFE00':'vsupne','\u228B':'supne','\u228D':'cupdot','\u228E':'uplus','\u228F':'sqsub','\u228F\u0338':'NotSquareSubset','\u2290':'sqsup','\u2290\u0338':'NotSquareSuperset','\u2291':'sqsube','\u22E2':'nsqsube','\u2292':'sqsupe','\u22E3':'nsqsupe','\u2293':'sqcap','\u2293\uFE00':'sqcaps','\u2294':'sqcup','\u2294\uFE00':'sqcups','\u2295':'oplus','\u2296':'ominus','\u2297':'otimes','\u2298':'osol','\u2299':'odot','\u229A':'ocir','\u229B':'oast','\u229D':'odash','\u229E':'plusb','\u229F':'minusb','\u22A0':'timesb','\u22A1':'sdotb','\u22A2':'vdash','\u22AC':'nvdash','\u22A3':'dashv','\u22A4':'top','\u22A5':'bot','\u22A7':'models','\u22A8':'vDash','\u22AD':'nvDash','\u22A9':'Vdash','\u22AE':'nVdash','\u22AA':'Vvdash','\u22AB':'VDash','\u22AF':'nVDash','\u22B0':'prurel','\u22B2':'vltri','\u22EA':'nltri','\u22B3':'vrtri','\u22EB':'nrtri','\u22B4':'ltrie','\u22EC':'nltrie','\u22B4\u20D2':'nvltrie','\u22B5':'rtrie','\u22ED':'nrtrie','\u22B5\u20D2':'nvrtrie','\u22B6':'origof','\u22B7':'imof','\u22B8':'mumap','\u22B9':'hercon','\u22BA':'intcal','\u22BB':'veebar','\u22BD':'barvee','\u22BE':'angrtvb','\u22BF':'lrtri','\u22C0':'Wedge','\u22C1':'Vee','\u22C2':'xcap','\u22C3':'xcup','\u22C4':'diam','\u22C5':'sdot','\u22C6':'Star','\u22C7':'divonx','\u22C8':'bowtie','\u22C9':'ltimes','\u22CA':'rtimes','\u22CB':'lthree','\u22CC':'rthree','\u22CD':'bsime','\u22CE':'cuvee','\u22CF':'cuwed','\u22D0':'Sub','\u22D1':'Sup','\u22D2':'Cap','\u22D3':'Cup','\u22D4':'fork','\u22D5':'epar','\u22D6':'ltdot','\u22D7':'gtdot','\u22D8':'Ll','\u22D8\u0338':'nLl','\u22D9':'Gg','\u22D9\u0338':'nGg','\u22DA\uFE00':'lesg','\u22DA':'leg','\u22DB':'gel','\u22DB\uFE00':'gesl','\u22DE':'cuepr','\u22DF':'cuesc','\u22E6':'lnsim','\u22E7':'gnsim','\u22E8':'prnsim','\u22E9':'scnsim','\u22EE':'vellip','\u22EF':'ctdot','\u22F0':'utdot','\u22F1':'dtdot','\u22F2':'disin','\u22F3':'isinsv','\u22F4':'isins','\u22F5':'isindot','\u22F5\u0338':'notindot','\u22F6':'notinvc','\u22F7':'notinvb','\u22F9':'isinE','\u22F9\u0338':'notinE','\u22FA':'nisd','\u22FB':'xnis','\u22FC':'nis','\u22FD':'notnivc','\u22FE':'notnivb','\u2305':'barwed','\u2306':'Barwed','\u230C':'drcrop','\u230D':'dlcrop','\u230E':'urcrop','\u230F':'ulcrop','\u2310':'bnot','\u2312':'profline','\u2313':'profsurf','\u2315':'telrec','\u2316':'target','\u231C':'ulcorn','\u231D':'urcorn','\u231E':'dlcorn','\u231F':'drcorn','\u2322':'frown','\u2323':'smile','\u232D':'cylcty','\u232E':'profalar','\u2336':'topbot','\u233D':'ovbar','\u233F':'solbar','\u237C':'angzarr','\u23B0':'lmoust','\u23B1':'rmoust','\u23B4':'tbrk','\u23B5':'bbrk','\u23B6':'bbrktbrk','\u23DC':'OverParenthesis','\u23DD':'UnderParenthesis','\u23DE':'OverBrace','\u23DF':'UnderBrace','\u23E2':'trpezium','\u23E7':'elinters','\u2423':'blank','\u2500':'boxh','\u2502':'boxv','\u250C':'boxdr','\u2510':'boxdl','\u2514':'boxur','\u2518':'boxul','\u251C':'boxvr','\u2524':'boxvl','\u252C':'boxhd','\u2534':'boxhu','\u253C':'boxvh','\u2550':'boxH','\u2551':'boxV','\u2552':'boxdR','\u2553':'boxDr','\u2554':'boxDR','\u2555':'boxdL','\u2556':'boxDl','\u2557':'boxDL','\u2558':'boxuR','\u2559':'boxUr','\u255A':'boxUR','\u255B':'boxuL','\u255C':'boxUl','\u255D':'boxUL','\u255E':'boxvR','\u255F':'boxVr','\u2560':'boxVR','\u2561':'boxvL','\u2562':'boxVl','\u2563':'boxVL','\u2564':'boxHd','\u2565':'boxhD','\u2566':'boxHD','\u2567':'boxHu','\u2568':'boxhU','\u2569':'boxHU','\u256A':'boxvH','\u256B':'boxVh','\u256C':'boxVH','\u2580':'uhblk','\u2584':'lhblk','\u2588':'block','\u2591':'blk14','\u2592':'blk12','\u2593':'blk34','\u25A1':'squ','\u25AA':'squf','\u25AB':'EmptyVerySmallSquare','\u25AD':'rect','\u25AE':'marker','\u25B1':'fltns','\u25B3':'xutri','\u25B4':'utrif','\u25B5':'utri','\u25B8':'rtrif','\u25B9':'rtri','\u25BD':'xdtri','\u25BE':'dtrif','\u25BF':'dtri','\u25C2':'ltrif','\u25C3':'ltri','\u25CA':'loz','\u25CB':'cir','\u25EC':'tridot','\u25EF':'xcirc','\u25F8':'ultri','\u25F9':'urtri','\u25FA':'lltri','\u25FB':'EmptySmallSquare','\u25FC':'FilledSmallSquare','\u2605':'starf','\u2606':'star','\u260E':'phone','\u2640':'female','\u2642':'male','\u2660':'spades','\u2663':'clubs','\u2665':'hearts','\u2666':'diams','\u266A':'sung','\u2713':'check','\u2717':'cross','\u2720':'malt','\u2736':'sext','\u2758':'VerticalSeparator','\u27C8':'bsolhsub','\u27C9':'suphsol','\u27F5':'xlarr','\u27F6':'xrarr','\u27F7':'xharr','\u27F8':'xlArr','\u27F9':'xrArr','\u27FA':'xhArr','\u27FC':'xmap','\u27FF':'dzigrarr','\u2902':'nvlArr','\u2903':'nvrArr','\u2904':'nvHarr','\u2905':'Map','\u290C':'lbarr','\u290D':'rbarr','\u290E':'lBarr','\u290F':'rBarr','\u2910':'RBarr','\u2911':'DDotrahd','\u2912':'UpArrowBar','\u2913':'DownArrowBar','\u2916':'Rarrtl','\u2919':'latail','\u291A':'ratail','\u291B':'lAtail','\u291C':'rAtail','\u291D':'larrfs','\u291E':'rarrfs','\u291F':'larrbfs','\u2920':'rarrbfs','\u2923':'nwarhk','\u2924':'nearhk','\u2925':'searhk','\u2926':'swarhk','\u2927':'nwnear','\u2928':'toea','\u2929':'tosa','\u292A':'swnwar','\u2933':'rarrc','\u2933\u0338':'nrarrc','\u2935':'cudarrr','\u2936':'ldca','\u2937':'rdca','\u2938':'cudarrl','\u2939':'larrpl','\u293C':'curarrm','\u293D':'cularrp','\u2945':'rarrpl','\u2948':'harrcir','\u2949':'Uarrocir','\u294A':'lurdshar','\u294B':'ldrushar','\u294E':'LeftRightVector','\u294F':'RightUpDownVector','\u2950':'DownLeftRightVector','\u2951':'LeftUpDownVector','\u2952':'LeftVectorBar','\u2953':'RightVectorBar','\u2954':'RightUpVectorBar','\u2955':'RightDownVectorBar','\u2956':'DownLeftVectorBar','\u2957':'DownRightVectorBar','\u2958':'LeftUpVectorBar','\u2959':'LeftDownVectorBar','\u295A':'LeftTeeVector','\u295B':'RightTeeVector','\u295C':'RightUpTeeVector','\u295D':'RightDownTeeVector','\u295E':'DownLeftTeeVector','\u295F':'DownRightTeeVector','\u2960':'LeftUpTeeVector','\u2961':'LeftDownTeeVector','\u2962':'lHar','\u2963':'uHar','\u2964':'rHar','\u2965':'dHar','\u2966':'luruhar','\u2967':'ldrdhar','\u2968':'ruluhar','\u2969':'rdldhar','\u296A':'lharul','\u296B':'llhard','\u296C':'rharul','\u296D':'lrhard','\u296E':'udhar','\u296F':'duhar','\u2970':'RoundImplies','\u2971':'erarr','\u2972':'simrarr','\u2973':'larrsim','\u2974':'rarrsim','\u2975':'rarrap','\u2976':'ltlarr','\u2978':'gtrarr','\u2979':'subrarr','\u297B':'suplarr','\u297C':'lfisht','\u297D':'rfisht','\u297E':'ufisht','\u297F':'dfisht','\u299A':'vzigzag','\u299C':'vangrt','\u299D':'angrtvbd','\u29A4':'ange','\u29A5':'range','\u29A6':'dwangle','\u29A7':'uwangle','\u29A8':'angmsdaa','\u29A9':'angmsdab','\u29AA':'angmsdac','\u29AB':'angmsdad','\u29AC':'angmsdae','\u29AD':'angmsdaf','\u29AE':'angmsdag','\u29AF':'angmsdah','\u29B0':'bemptyv','\u29B1':'demptyv','\u29B2':'cemptyv','\u29B3':'raemptyv','\u29B4':'laemptyv','\u29B5':'ohbar','\u29B6':'omid','\u29B7':'opar','\u29B9':'operp','\u29BB':'olcross','\u29BC':'odsold','\u29BE':'olcir','\u29BF':'ofcir','\u29C0':'olt','\u29C1':'ogt','\u29C2':'cirscir','\u29C3':'cirE','\u29C4':'solb','\u29C5':'bsolb','\u29C9':'boxbox','\u29CD':'trisb','\u29CE':'rtriltri','\u29CF':'LeftTriangleBar','\u29CF\u0338':'NotLeftTriangleBar','\u29D0':'RightTriangleBar','\u29D0\u0338':'NotRightTriangleBar','\u29DC':'iinfin','\u29DD':'infintie','\u29DE':'nvinfin','\u29E3':'eparsl','\u29E4':'smeparsl','\u29E5':'eqvparsl','\u29EB':'lozf','\u29F4':'RuleDelayed','\u29F6':'dsol','\u2A00':'xodot','\u2A01':'xoplus','\u2A02':'xotime','\u2A04':'xuplus','\u2A06':'xsqcup','\u2A0D':'fpartint','\u2A10':'cirfnint','\u2A11':'awint','\u2A12':'rppolint','\u2A13':'scpolint','\u2A14':'npolint','\u2A15':'pointint','\u2A16':'quatint','\u2A17':'intlarhk','\u2A22':'pluscir','\u2A23':'plusacir','\u2A24':'simplus','\u2A25':'plusdu','\u2A26':'plussim','\u2A27':'plustwo','\u2A29':'mcomma','\u2A2A':'minusdu','\u2A2D':'loplus','\u2A2E':'roplus','\u2A2F':'Cross','\u2A30':'timesd','\u2A31':'timesbar','\u2A33':'smashp','\u2A34':'lotimes','\u2A35':'rotimes','\u2A36':'otimesas','\u2A37':'Otimes','\u2A38':'odiv','\u2A39':'triplus','\u2A3A':'triminus','\u2A3B':'tritime','\u2A3C':'iprod','\u2A3F':'amalg','\u2A40':'capdot','\u2A42':'ncup','\u2A43':'ncap','\u2A44':'capand','\u2A45':'cupor','\u2A46':'cupcap','\u2A47':'capcup','\u2A48':'cupbrcap','\u2A49':'capbrcup','\u2A4A':'cupcup','\u2A4B':'capcap','\u2A4C':'ccups','\u2A4D':'ccaps','\u2A50':'ccupssm','\u2A53':'And','\u2A54':'Or','\u2A55':'andand','\u2A56':'oror','\u2A57':'orslope','\u2A58':'andslope','\u2A5A':'andv','\u2A5B':'orv','\u2A5C':'andd','\u2A5D':'ord','\u2A5F':'wedbar','\u2A66':'sdote','\u2A6A':'simdot','\u2A6D':'congdot','\u2A6D\u0338':'ncongdot','\u2A6E':'easter','\u2A6F':'apacir','\u2A70':'apE','\u2A70\u0338':'napE','\u2A71':'eplus','\u2A72':'pluse','\u2A73':'Esim','\u2A77':'eDDot','\u2A78':'equivDD','\u2A79':'ltcir','\u2A7A':'gtcir','\u2A7B':'ltquest','\u2A7C':'gtquest','\u2A7D':'les','\u2A7D\u0338':'nles','\u2A7E':'ges','\u2A7E\u0338':'nges','\u2A7F':'lesdot','\u2A80':'gesdot','\u2A81':'lesdoto','\u2A82':'gesdoto','\u2A83':'lesdotor','\u2A84':'gesdotol','\u2A85':'lap','\u2A86':'gap','\u2A87':'lne','\u2A88':'gne','\u2A89':'lnap','\u2A8A':'gnap','\u2A8B':'lEg','\u2A8C':'gEl','\u2A8D':'lsime','\u2A8E':'gsime','\u2A8F':'lsimg','\u2A90':'gsiml','\u2A91':'lgE','\u2A92':'glE','\u2A93':'lesges','\u2A94':'gesles','\u2A95':'els','\u2A96':'egs','\u2A97':'elsdot','\u2A98':'egsdot','\u2A99':'el','\u2A9A':'eg','\u2A9D':'siml','\u2A9E':'simg','\u2A9F':'simlE','\u2AA0':'simgE','\u2AA1':'LessLess','\u2AA1\u0338':'NotNestedLessLess','\u2AA2':'GreaterGreater','\u2AA2\u0338':'NotNestedGreaterGreater','\u2AA4':'glj','\u2AA5':'gla','\u2AA6':'ltcc','\u2AA7':'gtcc','\u2AA8':'lescc','\u2AA9':'gescc','\u2AAA':'smt','\u2AAB':'lat','\u2AAC':'smte','\u2AAC\uFE00':'smtes','\u2AAD':'late','\u2AAD\uFE00':'lates','\u2AAE':'bumpE','\u2AAF':'pre','\u2AAF\u0338':'npre','\u2AB0':'sce','\u2AB0\u0338':'nsce','\u2AB3':'prE','\u2AB4':'scE','\u2AB5':'prnE','\u2AB6':'scnE','\u2AB7':'prap','\u2AB8':'scap','\u2AB9':'prnap','\u2ABA':'scnap','\u2ABB':'Pr','\u2ABC':'Sc','\u2ABD':'subdot','\u2ABE':'supdot','\u2ABF':'subplus','\u2AC0':'supplus','\u2AC1':'submult','\u2AC2':'supmult','\u2AC3':'subedot','\u2AC4':'supedot','\u2AC5':'subE','\u2AC5\u0338':'nsubE','\u2AC6':'supE','\u2AC6\u0338':'nsupE','\u2AC7':'subsim','\u2AC8':'supsim','\u2ACB\uFE00':'vsubnE','\u2ACB':'subnE','\u2ACC\uFE00':'vsupnE','\u2ACC':'supnE','\u2ACF':'csub','\u2AD0':'csup','\u2AD1':'csube','\u2AD2':'csupe','\u2AD3':'subsup','\u2AD4':'supsub','\u2AD5':'subsub','\u2AD6':'supsup','\u2AD7':'suphsub','\u2AD8':'supdsub','\u2AD9':'forkv','\u2ADA':'topfork','\u2ADB':'mlcp','\u2AE4':'Dashv','\u2AE6':'Vdashl','\u2AE7':'Barv','\u2AE8':'vBar','\u2AE9':'vBarv','\u2AEB':'Vbar','\u2AEC':'Not','\u2AED':'bNot','\u2AEE':'rnmid','\u2AEF':'cirmid','\u2AF0':'midcir','\u2AF1':'topcir','\u2AF2':'nhpar','\u2AF3':'parsim','\u2AFD':'parsl','\u2AFD\u20E5':'nparsl','\u266D':'flat','\u266E':'natur','\u266F':'sharp','\xA4':'curren','\xA2':'cent','$':'dollar','\xA3':'pound','\xA5':'yen','\u20AC':'euro','\xB9':'sup1','\xBD':'half','\u2153':'frac13','\xBC':'frac14','\u2155':'frac15','\u2159':'frac16','\u215B':'frac18','\xB2':'sup2','\u2154':'frac23','\u2156':'frac25','\xB3':'sup3','\xBE':'frac34','\u2157':'frac35','\u215C':'frac38','\u2158':'frac45','\u215A':'frac56','\u215D':'frac58','\u215E':'frac78','\uD835\uDCB6':'ascr','\uD835\uDD52':'aopf','\uD835\uDD1E':'afr','\uD835\uDD38':'Aopf','\uD835\uDD04':'Afr','\uD835\uDC9C':'Ascr','\xAA':'ordf','\xE1':'aacute','\xC1':'Aacute','\xE0':'agrave','\xC0':'Agrave','\u0103':'abreve','\u0102':'Abreve','\xE2':'acirc','\xC2':'Acirc','\xE5':'aring','\xC5':'angst','\xE4':'auml','\xC4':'Auml','\xE3':'atilde','\xC3':'Atilde','\u0105':'aogon','\u0104':'Aogon','\u0101':'amacr','\u0100':'Amacr','\xE6':'aelig','\xC6':'AElig','\uD835\uDCB7':'bscr','\uD835\uDD53':'bopf','\uD835\uDD1F':'bfr','\uD835\uDD39':'Bopf','\u212C':'Bscr','\uD835\uDD05':'Bfr','\uD835\uDD20':'cfr','\uD835\uDCB8':'cscr','\uD835\uDD54':'copf','\u212D':'Cfr','\uD835\uDC9E':'Cscr','\u2102':'Copf','\u0107':'cacute','\u0106':'Cacute','\u0109':'ccirc','\u0108':'Ccirc','\u010D':'ccaron','\u010C':'Ccaron','\u010B':'cdot','\u010A':'Cdot','\xE7':'ccedil','\xC7':'Ccedil','\u2105':'incare','\uD835\uDD21':'dfr','\u2146':'dd','\uD835\uDD55':'dopf','\uD835\uDCB9':'dscr','\uD835\uDC9F':'Dscr','\uD835\uDD07':'Dfr','\u2145':'DD','\uD835\uDD3B':'Dopf','\u010F':'dcaron','\u010E':'Dcaron','\u0111':'dstrok','\u0110':'Dstrok','\xF0':'eth','\xD0':'ETH','\u2147':'ee','\u212F':'escr','\uD835\uDD22':'efr','\uD835\uDD56':'eopf','\u2130':'Escr','\uD835\uDD08':'Efr','\uD835\uDD3C':'Eopf','\xE9':'eacute','\xC9':'Eacute','\xE8':'egrave','\xC8':'Egrave','\xEA':'ecirc','\xCA':'Ecirc','\u011B':'ecaron','\u011A':'Ecaron','\xEB':'euml','\xCB':'Euml','\u0117':'edot','\u0116':'Edot','\u0119':'eogon','\u0118':'Eogon','\u0113':'emacr','\u0112':'Emacr','\uD835\uDD23':'ffr','\uD835\uDD57':'fopf','\uD835\uDCBB':'fscr','\uD835\uDD09':'Ffr','\uD835\uDD3D':'Fopf','\u2131':'Fscr','\uFB00':'fflig','\uFB03':'ffilig','\uFB04':'ffllig','\uFB01':'filig','fj':'fjlig','\uFB02':'fllig','\u0192':'fnof','\u210A':'gscr','\uD835\uDD58':'gopf','\uD835\uDD24':'gfr','\uD835\uDCA2':'Gscr','\uD835\uDD3E':'Gopf','\uD835\uDD0A':'Gfr','\u01F5':'gacute','\u011F':'gbreve','\u011E':'Gbreve','\u011D':'gcirc','\u011C':'Gcirc','\u0121':'gdot','\u0120':'Gdot','\u0122':'Gcedil','\uD835\uDD25':'hfr','\u210E':'planckh','\uD835\uDCBD':'hscr','\uD835\uDD59':'hopf','\u210B':'Hscr','\u210C':'Hfr','\u210D':'Hopf','\u0125':'hcirc','\u0124':'Hcirc','\u210F':'hbar','\u0127':'hstrok','\u0126':'Hstrok','\uD835\uDD5A':'iopf','\uD835\uDD26':'ifr','\uD835\uDCBE':'iscr','\u2148':'ii','\uD835\uDD40':'Iopf','\u2110':'Iscr','\u2111':'Im','\xED':'iacute','\xCD':'Iacute','\xEC':'igrave','\xCC':'Igrave','\xEE':'icirc','\xCE':'Icirc','\xEF':'iuml','\xCF':'Iuml','\u0129':'itilde','\u0128':'Itilde','\u0130':'Idot','\u012F':'iogon','\u012E':'Iogon','\u012B':'imacr','\u012A':'Imacr','\u0133':'ijlig','\u0132':'IJlig','\u0131':'imath','\uD835\uDCBF':'jscr','\uD835\uDD5B':'jopf','\uD835\uDD27':'jfr','\uD835\uDCA5':'Jscr','\uD835\uDD0D':'Jfr','\uD835\uDD41':'Jopf','\u0135':'jcirc','\u0134':'Jcirc','\u0237':'jmath','\uD835\uDD5C':'kopf','\uD835\uDCC0':'kscr','\uD835\uDD28':'kfr','\uD835\uDCA6':'Kscr','\uD835\uDD42':'Kopf','\uD835\uDD0E':'Kfr','\u0137':'kcedil','\u0136':'Kcedil','\uD835\uDD29':'lfr','\uD835\uDCC1':'lscr','\u2113':'ell','\uD835\uDD5D':'lopf','\u2112':'Lscr','\uD835\uDD0F':'Lfr','\uD835\uDD43':'Lopf','\u013A':'lacute','\u0139':'Lacute','\u013E':'lcaron','\u013D':'Lcaron','\u013C':'lcedil','\u013B':'Lcedil','\u0142':'lstrok','\u0141':'Lstrok','\u0140':'lmidot','\u013F':'Lmidot','\uD835\uDD2A':'mfr','\uD835\uDD5E':'mopf','\uD835\uDCC2':'mscr','\uD835\uDD10':'Mfr','\uD835\uDD44':'Mopf','\u2133':'Mscr','\uD835\uDD2B':'nfr','\uD835\uDD5F':'nopf','\uD835\uDCC3':'nscr','\u2115':'Nopf','\uD835\uDCA9':'Nscr','\uD835\uDD11':'Nfr','\u0144':'nacute','\u0143':'Nacute','\u0148':'ncaron','\u0147':'Ncaron','\xF1':'ntilde','\xD1':'Ntilde','\u0146':'ncedil','\u0145':'Ncedil','\u2116':'numero','\u014B':'eng','\u014A':'ENG','\uD835\uDD60':'oopf','\uD835\uDD2C':'ofr','\u2134':'oscr','\uD835\uDCAA':'Oscr','\uD835\uDD12':'Ofr','\uD835\uDD46':'Oopf','\xBA':'ordm','\xF3':'oacute','\xD3':'Oacute','\xF2':'ograve','\xD2':'Ograve','\xF4':'ocirc','\xD4':'Ocirc','\xF6':'ouml','\xD6':'Ouml','\u0151':'odblac','\u0150':'Odblac','\xF5':'otilde','\xD5':'Otilde','\xF8':'oslash','\xD8':'Oslash','\u014D':'omacr','\u014C':'Omacr','\u0153':'oelig','\u0152':'OElig','\uD835\uDD2D':'pfr','\uD835\uDCC5':'pscr','\uD835\uDD61':'popf','\u2119':'Popf','\uD835\uDD13':'Pfr','\uD835\uDCAB':'Pscr','\uD835\uDD62':'qopf','\uD835\uDD2E':'qfr','\uD835\uDCC6':'qscr','\uD835\uDCAC':'Qscr','\uD835\uDD14':'Qfr','\u211A':'Qopf','\u0138':'kgreen','\uD835\uDD2F':'rfr','\uD835\uDD63':'ropf','\uD835\uDCC7':'rscr','\u211B':'Rscr','\u211C':'Re','\u211D':'Ropf','\u0155':'racute','\u0154':'Racute','\u0159':'rcaron','\u0158':'Rcaron','\u0157':'rcedil','\u0156':'Rcedil','\uD835\uDD64':'sopf','\uD835\uDCC8':'sscr','\uD835\uDD30':'sfr','\uD835\uDD4A':'Sopf','\uD835\uDD16':'Sfr','\uD835\uDCAE':'Sscr','\u24C8':'oS','\u015B':'sacute','\u015A':'Sacute','\u015D':'scirc','\u015C':'Scirc','\u0161':'scaron','\u0160':'Scaron','\u015F':'scedil','\u015E':'Scedil','\xDF':'szlig','\uD835\uDD31':'tfr','\uD835\uDCC9':'tscr','\uD835\uDD65':'topf','\uD835\uDCAF':'Tscr','\uD835\uDD17':'Tfr','\uD835\uDD4B':'Topf','\u0165':'tcaron','\u0164':'Tcaron','\u0163':'tcedil','\u0162':'Tcedil','\u2122':'trade','\u0167':'tstrok','\u0166':'Tstrok','\uD835\uDCCA':'uscr','\uD835\uDD66':'uopf','\uD835\uDD32':'ufr','\uD835\uDD4C':'Uopf','\uD835\uDD18':'Ufr','\uD835\uDCB0':'Uscr','\xFA':'uacute','\xDA':'Uacute','\xF9':'ugrave','\xD9':'Ugrave','\u016D':'ubreve','\u016C':'Ubreve','\xFB':'ucirc','\xDB':'Ucirc','\u016F':'uring','\u016E':'Uring','\xFC':'uuml','\xDC':'Uuml','\u0171':'udblac','\u0170':'Udblac','\u0169':'utilde','\u0168':'Utilde','\u0173':'uogon','\u0172':'Uogon','\u016B':'umacr','\u016A':'Umacr','\uD835\uDD33':'vfr','\uD835\uDD67':'vopf','\uD835\uDCCB':'vscr','\uD835\uDD19':'Vfr','\uD835\uDD4D':'Vopf','\uD835\uDCB1':'Vscr','\uD835\uDD68':'wopf','\uD835\uDCCC':'wscr','\uD835\uDD34':'wfr','\uD835\uDCB2':'Wscr','\uD835\uDD4E':'Wopf','\uD835\uDD1A':'Wfr','\u0175':'wcirc','\u0174':'Wcirc','\uD835\uDD35':'xfr','\uD835\uDCCD':'xscr','\uD835\uDD69':'xopf','\uD835\uDD4F':'Xopf','\uD835\uDD1B':'Xfr','\uD835\uDCB3':'Xscr','\uD835\uDD36':'yfr','\uD835\uDCCE':'yscr','\uD835\uDD6A':'yopf','\uD835\uDCB4':'Yscr','\uD835\uDD1C':'Yfr','\uD835\uDD50':'Yopf','\xFD':'yacute','\xDD':'Yacute','\u0177':'ycirc','\u0176':'Ycirc','\xFF':'yuml','\u0178':'Yuml','\uD835\uDCCF':'zscr','\uD835\uDD37':'zfr','\uD835\uDD6B':'zopf','\u2128':'Zfr','\u2124':'Zopf','\uD835\uDCB5':'Zscr','\u017A':'zacute','\u0179':'Zacute','\u017E':'zcaron','\u017D':'Zcaron','\u017C':'zdot','\u017B':'Zdot','\u01B5':'imped','\xFE':'thorn','\xDE':'THORN','\u0149':'napos','\u03B1':'alpha','\u0391':'Alpha','\u03B2':'beta','\u0392':'Beta','\u03B3':'gamma','\u0393':'Gamma','\u03B4':'delta','\u0394':'Delta','\u03B5':'epsi','\u03F5':'epsiv','\u0395':'Epsilon','\u03DD':'gammad','\u03DC':'Gammad','\u03B6':'zeta','\u0396':'Zeta','\u03B7':'eta','\u0397':'Eta','\u03B8':'theta','\u03D1':'thetav','\u0398':'Theta','\u03B9':'iota','\u0399':'Iota','\u03BA':'kappa','\u03F0':'kappav','\u039A':'Kappa','\u03BB':'lambda','\u039B':'Lambda','\u03BC':'mu','\xB5':'micro','\u039C':'Mu','\u03BD':'nu','\u039D':'Nu','\u03BE':'xi','\u039E':'Xi','\u03BF':'omicron','\u039F':'Omicron','\u03C0':'pi','\u03D6':'piv','\u03A0':'Pi','\u03C1':'rho','\u03F1':'rhov','\u03A1':'Rho','\u03C3':'sigma','\u03A3':'Sigma','\u03C2':'sigmaf','\u03C4':'tau','\u03A4':'Tau','\u03C5':'upsi','\u03A5':'Upsilon','\u03D2':'Upsi','\u03C6':'phi','\u03D5':'phiv','\u03A6':'Phi','\u03C7':'chi','\u03A7':'Chi','\u03C8':'psi','\u03A8':'Psi','\u03C9':'omega','\u03A9':'ohm','\u0430':'acy','\u0410':'Acy','\u0431':'bcy','\u0411':'Bcy','\u0432':'vcy','\u0412':'Vcy','\u0433':'gcy','\u0413':'Gcy','\u0453':'gjcy','\u0403':'GJcy','\u0434':'dcy','\u0414':'Dcy','\u0452':'djcy','\u0402':'DJcy','\u0435':'iecy','\u0415':'IEcy','\u0451':'iocy','\u0401':'IOcy','\u0454':'jukcy','\u0404':'Jukcy','\u0436':'zhcy','\u0416':'ZHcy','\u0437':'zcy','\u0417':'Zcy','\u0455':'dscy','\u0405':'DScy','\u0438':'icy','\u0418':'Icy','\u0456':'iukcy','\u0406':'Iukcy','\u0457':'yicy','\u0407':'YIcy','\u0439':'jcy','\u0419':'Jcy','\u0458':'jsercy','\u0408':'Jsercy','\u043A':'kcy','\u041A':'Kcy','\u045C':'kjcy','\u040C':'KJcy','\u043B':'lcy','\u041B':'Lcy','\u0459':'ljcy','\u0409':'LJcy','\u043C':'mcy','\u041C':'Mcy','\u043D':'ncy','\u041D':'Ncy','\u045A':'njcy','\u040A':'NJcy','\u043E':'ocy','\u041E':'Ocy','\u043F':'pcy','\u041F':'Pcy','\u0440':'rcy','\u0420':'Rcy','\u0441':'scy','\u0421':'Scy','\u0442':'tcy','\u0422':'Tcy','\u045B':'tshcy','\u040B':'TSHcy','\u0443':'ucy','\u0423':'Ucy','\u045E':'ubrcy','\u040E':'Ubrcy','\u0444':'fcy','\u0424':'Fcy','\u0445':'khcy','\u0425':'KHcy','\u0446':'tscy','\u0426':'TScy','\u0447':'chcy','\u0427':'CHcy','\u045F':'dzcy','\u040F':'DZcy','\u0448':'shcy','\u0428':'SHcy','\u0449':'shchcy','\u0429':'SHCHcy','\u044A':'hardcy','\u042A':'HARDcy','\u044B':'ycy','\u042B':'Ycy','\u044C':'softcy','\u042C':'SOFTcy','\u044D':'ecy','\u042D':'Ecy','\u044E':'yucy','\u042E':'YUcy','\u044F':'yacy','\u042F':'YAcy','\u2135':'aleph','\u2136':'beth','\u2137':'gimel','\u2138':'daleth'};

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
	var decodeMap = {'aacute':'\xE1','Aacute':'\xC1','abreve':'\u0103','Abreve':'\u0102','ac':'\u223E','acd':'\u223F','acE':'\u223E\u0333','acirc':'\xE2','Acirc':'\xC2','acute':'\xB4','acy':'\u0430','Acy':'\u0410','aelig':'\xE6','AElig':'\xC6','af':'\u2061','afr':'\uD835\uDD1E','Afr':'\uD835\uDD04','agrave':'\xE0','Agrave':'\xC0','alefsym':'\u2135','aleph':'\u2135','alpha':'\u03B1','Alpha':'\u0391','amacr':'\u0101','Amacr':'\u0100','amalg':'\u2A3F','amp':'&','AMP':'&','and':'\u2227','And':'\u2A53','andand':'\u2A55','andd':'\u2A5C','andslope':'\u2A58','andv':'\u2A5A','ang':'\u2220','ange':'\u29A4','angle':'\u2220','angmsd':'\u2221','angmsdaa':'\u29A8','angmsdab':'\u29A9','angmsdac':'\u29AA','angmsdad':'\u29AB','angmsdae':'\u29AC','angmsdaf':'\u29AD','angmsdag':'\u29AE','angmsdah':'\u29AF','angrt':'\u221F','angrtvb':'\u22BE','angrtvbd':'\u299D','angsph':'\u2222','angst':'\xC5','angzarr':'\u237C','aogon':'\u0105','Aogon':'\u0104','aopf':'\uD835\uDD52','Aopf':'\uD835\uDD38','ap':'\u2248','apacir':'\u2A6F','ape':'\u224A','apE':'\u2A70','apid':'\u224B','apos':'\'','ApplyFunction':'\u2061','approx':'\u2248','approxeq':'\u224A','aring':'\xE5','Aring':'\xC5','ascr':'\uD835\uDCB6','Ascr':'\uD835\uDC9C','Assign':'\u2254','ast':'*','asymp':'\u2248','asympeq':'\u224D','atilde':'\xE3','Atilde':'\xC3','auml':'\xE4','Auml':'\xC4','awconint':'\u2233','awint':'\u2A11','backcong':'\u224C','backepsilon':'\u03F6','backprime':'\u2035','backsim':'\u223D','backsimeq':'\u22CD','Backslash':'\u2216','Barv':'\u2AE7','barvee':'\u22BD','barwed':'\u2305','Barwed':'\u2306','barwedge':'\u2305','bbrk':'\u23B5','bbrktbrk':'\u23B6','bcong':'\u224C','bcy':'\u0431','Bcy':'\u0411','bdquo':'\u201E','becaus':'\u2235','because':'\u2235','Because':'\u2235','bemptyv':'\u29B0','bepsi':'\u03F6','bernou':'\u212C','Bernoullis':'\u212C','beta':'\u03B2','Beta':'\u0392','beth':'\u2136','between':'\u226C','bfr':'\uD835\uDD1F','Bfr':'\uD835\uDD05','bigcap':'\u22C2','bigcirc':'\u25EF','bigcup':'\u22C3','bigodot':'\u2A00','bigoplus':'\u2A01','bigotimes':'\u2A02','bigsqcup':'\u2A06','bigstar':'\u2605','bigtriangledown':'\u25BD','bigtriangleup':'\u25B3','biguplus':'\u2A04','bigvee':'\u22C1','bigwedge':'\u22C0','bkarow':'\u290D','blacklozenge':'\u29EB','blacksquare':'\u25AA','blacktriangle':'\u25B4','blacktriangledown':'\u25BE','blacktriangleleft':'\u25C2','blacktriangleright':'\u25B8','blank':'\u2423','blk12':'\u2592','blk14':'\u2591','blk34':'\u2593','block':'\u2588','bne':'=\u20E5','bnequiv':'\u2261\u20E5','bnot':'\u2310','bNot':'\u2AED','bopf':'\uD835\uDD53','Bopf':'\uD835\uDD39','bot':'\u22A5','bottom':'\u22A5','bowtie':'\u22C8','boxbox':'\u29C9','boxdl':'\u2510','boxdL':'\u2555','boxDl':'\u2556','boxDL':'\u2557','boxdr':'\u250C','boxdR':'\u2552','boxDr':'\u2553','boxDR':'\u2554','boxh':'\u2500','boxH':'\u2550','boxhd':'\u252C','boxhD':'\u2565','boxHd':'\u2564','boxHD':'\u2566','boxhu':'\u2534','boxhU':'\u2568','boxHu':'\u2567','boxHU':'\u2569','boxminus':'\u229F','boxplus':'\u229E','boxtimes':'\u22A0','boxul':'\u2518','boxuL':'\u255B','boxUl':'\u255C','boxUL':'\u255D','boxur':'\u2514','boxuR':'\u2558','boxUr':'\u2559','boxUR':'\u255A','boxv':'\u2502','boxV':'\u2551','boxvh':'\u253C','boxvH':'\u256A','boxVh':'\u256B','boxVH':'\u256C','boxvl':'\u2524','boxvL':'\u2561','boxVl':'\u2562','boxVL':'\u2563','boxvr':'\u251C','boxvR':'\u255E','boxVr':'\u255F','boxVR':'\u2560','bprime':'\u2035','breve':'\u02D8','Breve':'\u02D8','brvbar':'\xA6','bscr':'\uD835\uDCB7','Bscr':'\u212C','bsemi':'\u204F','bsim':'\u223D','bsime':'\u22CD','bsol':'\\','bsolb':'\u29C5','bsolhsub':'\u27C8','bull':'\u2022','bullet':'\u2022','bump':'\u224E','bumpe':'\u224F','bumpE':'\u2AAE','bumpeq':'\u224F','Bumpeq':'\u224E','cacute':'\u0107','Cacute':'\u0106','cap':'\u2229','Cap':'\u22D2','capand':'\u2A44','capbrcup':'\u2A49','capcap':'\u2A4B','capcup':'\u2A47','capdot':'\u2A40','CapitalDifferentialD':'\u2145','caps':'\u2229\uFE00','caret':'\u2041','caron':'\u02C7','Cayleys':'\u212D','ccaps':'\u2A4D','ccaron':'\u010D','Ccaron':'\u010C','ccedil':'\xE7','Ccedil':'\xC7','ccirc':'\u0109','Ccirc':'\u0108','Cconint':'\u2230','ccups':'\u2A4C','ccupssm':'\u2A50','cdot':'\u010B','Cdot':'\u010A','cedil':'\xB8','Cedilla':'\xB8','cemptyv':'\u29B2','cent':'\xA2','centerdot':'\xB7','CenterDot':'\xB7','cfr':'\uD835\uDD20','Cfr':'\u212D','chcy':'\u0447','CHcy':'\u0427','check':'\u2713','checkmark':'\u2713','chi':'\u03C7','Chi':'\u03A7','cir':'\u25CB','circ':'\u02C6','circeq':'\u2257','circlearrowleft':'\u21BA','circlearrowright':'\u21BB','circledast':'\u229B','circledcirc':'\u229A','circleddash':'\u229D','CircleDot':'\u2299','circledR':'\xAE','circledS':'\u24C8','CircleMinus':'\u2296','CirclePlus':'\u2295','CircleTimes':'\u2297','cire':'\u2257','cirE':'\u29C3','cirfnint':'\u2A10','cirmid':'\u2AEF','cirscir':'\u29C2','ClockwiseContourIntegral':'\u2232','CloseCurlyDoubleQuote':'\u201D','CloseCurlyQuote':'\u2019','clubs':'\u2663','clubsuit':'\u2663','colon':':','Colon':'\u2237','colone':'\u2254','Colone':'\u2A74','coloneq':'\u2254','comma':',','commat':'@','comp':'\u2201','compfn':'\u2218','complement':'\u2201','complexes':'\u2102','cong':'\u2245','congdot':'\u2A6D','Congruent':'\u2261','conint':'\u222E','Conint':'\u222F','ContourIntegral':'\u222E','copf':'\uD835\uDD54','Copf':'\u2102','coprod':'\u2210','Coproduct':'\u2210','copy':'\xA9','COPY':'\xA9','copysr':'\u2117','CounterClockwiseContourIntegral':'\u2233','crarr':'\u21B5','cross':'\u2717','Cross':'\u2A2F','cscr':'\uD835\uDCB8','Cscr':'\uD835\uDC9E','csub':'\u2ACF','csube':'\u2AD1','csup':'\u2AD0','csupe':'\u2AD2','ctdot':'\u22EF','cudarrl':'\u2938','cudarrr':'\u2935','cuepr':'\u22DE','cuesc':'\u22DF','cularr':'\u21B6','cularrp':'\u293D','cup':'\u222A','Cup':'\u22D3','cupbrcap':'\u2A48','cupcap':'\u2A46','CupCap':'\u224D','cupcup':'\u2A4A','cupdot':'\u228D','cupor':'\u2A45','cups':'\u222A\uFE00','curarr':'\u21B7','curarrm':'\u293C','curlyeqprec':'\u22DE','curlyeqsucc':'\u22DF','curlyvee':'\u22CE','curlywedge':'\u22CF','curren':'\xA4','curvearrowleft':'\u21B6','curvearrowright':'\u21B7','cuvee':'\u22CE','cuwed':'\u22CF','cwconint':'\u2232','cwint':'\u2231','cylcty':'\u232D','dagger':'\u2020','Dagger':'\u2021','daleth':'\u2138','darr':'\u2193','dArr':'\u21D3','Darr':'\u21A1','dash':'\u2010','dashv':'\u22A3','Dashv':'\u2AE4','dbkarow':'\u290F','dblac':'\u02DD','dcaron':'\u010F','Dcaron':'\u010E','dcy':'\u0434','Dcy':'\u0414','dd':'\u2146','DD':'\u2145','ddagger':'\u2021','ddarr':'\u21CA','DDotrahd':'\u2911','ddotseq':'\u2A77','deg':'\xB0','Del':'\u2207','delta':'\u03B4','Delta':'\u0394','demptyv':'\u29B1','dfisht':'\u297F','dfr':'\uD835\uDD21','Dfr':'\uD835\uDD07','dHar':'\u2965','dharl':'\u21C3','dharr':'\u21C2','DiacriticalAcute':'\xB4','DiacriticalDot':'\u02D9','DiacriticalDoubleAcute':'\u02DD','DiacriticalGrave':'`','DiacriticalTilde':'\u02DC','diam':'\u22C4','diamond':'\u22C4','Diamond':'\u22C4','diamondsuit':'\u2666','diams':'\u2666','die':'\xA8','DifferentialD':'\u2146','digamma':'\u03DD','disin':'\u22F2','div':'\xF7','divide':'\xF7','divideontimes':'\u22C7','divonx':'\u22C7','djcy':'\u0452','DJcy':'\u0402','dlcorn':'\u231E','dlcrop':'\u230D','dollar':'$','dopf':'\uD835\uDD55','Dopf':'\uD835\uDD3B','dot':'\u02D9','Dot':'\xA8','DotDot':'\u20DC','doteq':'\u2250','doteqdot':'\u2251','DotEqual':'\u2250','dotminus':'\u2238','dotplus':'\u2214','dotsquare':'\u22A1','doublebarwedge':'\u2306','DoubleContourIntegral':'\u222F','DoubleDot':'\xA8','DoubleDownArrow':'\u21D3','DoubleLeftArrow':'\u21D0','DoubleLeftRightArrow':'\u21D4','DoubleLeftTee':'\u2AE4','DoubleLongLeftArrow':'\u27F8','DoubleLongLeftRightArrow':'\u27FA','DoubleLongRightArrow':'\u27F9','DoubleRightArrow':'\u21D2','DoubleRightTee':'\u22A8','DoubleUpArrow':'\u21D1','DoubleUpDownArrow':'\u21D5','DoubleVerticalBar':'\u2225','downarrow':'\u2193','Downarrow':'\u21D3','DownArrow':'\u2193','DownArrowBar':'\u2913','DownArrowUpArrow':'\u21F5','DownBreve':'\u0311','downdownarrows':'\u21CA','downharpoonleft':'\u21C3','downharpoonright':'\u21C2','DownLeftRightVector':'\u2950','DownLeftTeeVector':'\u295E','DownLeftVector':'\u21BD','DownLeftVectorBar':'\u2956','DownRightTeeVector':'\u295F','DownRightVector':'\u21C1','DownRightVectorBar':'\u2957','DownTee':'\u22A4','DownTeeArrow':'\u21A7','drbkarow':'\u2910','drcorn':'\u231F','drcrop':'\u230C','dscr':'\uD835\uDCB9','Dscr':'\uD835\uDC9F','dscy':'\u0455','DScy':'\u0405','dsol':'\u29F6','dstrok':'\u0111','Dstrok':'\u0110','dtdot':'\u22F1','dtri':'\u25BF','dtrif':'\u25BE','duarr':'\u21F5','duhar':'\u296F','dwangle':'\u29A6','dzcy':'\u045F','DZcy':'\u040F','dzigrarr':'\u27FF','eacute':'\xE9','Eacute':'\xC9','easter':'\u2A6E','ecaron':'\u011B','Ecaron':'\u011A','ecir':'\u2256','ecirc':'\xEA','Ecirc':'\xCA','ecolon':'\u2255','ecy':'\u044D','Ecy':'\u042D','eDDot':'\u2A77','edot':'\u0117','eDot':'\u2251','Edot':'\u0116','ee':'\u2147','efDot':'\u2252','efr':'\uD835\uDD22','Efr':'\uD835\uDD08','eg':'\u2A9A','egrave':'\xE8','Egrave':'\xC8','egs':'\u2A96','egsdot':'\u2A98','el':'\u2A99','Element':'\u2208','elinters':'\u23E7','ell':'\u2113','els':'\u2A95','elsdot':'\u2A97','emacr':'\u0113','Emacr':'\u0112','empty':'\u2205','emptyset':'\u2205','EmptySmallSquare':'\u25FB','emptyv':'\u2205','EmptyVerySmallSquare':'\u25AB','emsp':'\u2003','emsp13':'\u2004','emsp14':'\u2005','eng':'\u014B','ENG':'\u014A','ensp':'\u2002','eogon':'\u0119','Eogon':'\u0118','eopf':'\uD835\uDD56','Eopf':'\uD835\uDD3C','epar':'\u22D5','eparsl':'\u29E3','eplus':'\u2A71','epsi':'\u03B5','epsilon':'\u03B5','Epsilon':'\u0395','epsiv':'\u03F5','eqcirc':'\u2256','eqcolon':'\u2255','eqsim':'\u2242','eqslantgtr':'\u2A96','eqslantless':'\u2A95','Equal':'\u2A75','equals':'=','EqualTilde':'\u2242','equest':'\u225F','Equilibrium':'\u21CC','equiv':'\u2261','equivDD':'\u2A78','eqvparsl':'\u29E5','erarr':'\u2971','erDot':'\u2253','escr':'\u212F','Escr':'\u2130','esdot':'\u2250','esim':'\u2242','Esim':'\u2A73','eta':'\u03B7','Eta':'\u0397','eth':'\xF0','ETH':'\xD0','euml':'\xEB','Euml':'\xCB','euro':'\u20AC','excl':'!','exist':'\u2203','Exists':'\u2203','expectation':'\u2130','exponentiale':'\u2147','ExponentialE':'\u2147','fallingdotseq':'\u2252','fcy':'\u0444','Fcy':'\u0424','female':'\u2640','ffilig':'\uFB03','fflig':'\uFB00','ffllig':'\uFB04','ffr':'\uD835\uDD23','Ffr':'\uD835\uDD09','filig':'\uFB01','FilledSmallSquare':'\u25FC','FilledVerySmallSquare':'\u25AA','fjlig':'fj','flat':'\u266D','fllig':'\uFB02','fltns':'\u25B1','fnof':'\u0192','fopf':'\uD835\uDD57','Fopf':'\uD835\uDD3D','forall':'\u2200','ForAll':'\u2200','fork':'\u22D4','forkv':'\u2AD9','Fouriertrf':'\u2131','fpartint':'\u2A0D','frac12':'\xBD','frac13':'\u2153','frac14':'\xBC','frac15':'\u2155','frac16':'\u2159','frac18':'\u215B','frac23':'\u2154','frac25':'\u2156','frac34':'\xBE','frac35':'\u2157','frac38':'\u215C','frac45':'\u2158','frac56':'\u215A','frac58':'\u215D','frac78':'\u215E','frasl':'\u2044','frown':'\u2322','fscr':'\uD835\uDCBB','Fscr':'\u2131','gacute':'\u01F5','gamma':'\u03B3','Gamma':'\u0393','gammad':'\u03DD','Gammad':'\u03DC','gap':'\u2A86','gbreve':'\u011F','Gbreve':'\u011E','Gcedil':'\u0122','gcirc':'\u011D','Gcirc':'\u011C','gcy':'\u0433','Gcy':'\u0413','gdot':'\u0121','Gdot':'\u0120','ge':'\u2265','gE':'\u2267','gel':'\u22DB','gEl':'\u2A8C','geq':'\u2265','geqq':'\u2267','geqslant':'\u2A7E','ges':'\u2A7E','gescc':'\u2AA9','gesdot':'\u2A80','gesdoto':'\u2A82','gesdotol':'\u2A84','gesl':'\u22DB\uFE00','gesles':'\u2A94','gfr':'\uD835\uDD24','Gfr':'\uD835\uDD0A','gg':'\u226B','Gg':'\u22D9','ggg':'\u22D9','gimel':'\u2137','gjcy':'\u0453','GJcy':'\u0403','gl':'\u2277','gla':'\u2AA5','glE':'\u2A92','glj':'\u2AA4','gnap':'\u2A8A','gnapprox':'\u2A8A','gne':'\u2A88','gnE':'\u2269','gneq':'\u2A88','gneqq':'\u2269','gnsim':'\u22E7','gopf':'\uD835\uDD58','Gopf':'\uD835\uDD3E','grave':'`','GreaterEqual':'\u2265','GreaterEqualLess':'\u22DB','GreaterFullEqual':'\u2267','GreaterGreater':'\u2AA2','GreaterLess':'\u2277','GreaterSlantEqual':'\u2A7E','GreaterTilde':'\u2273','gscr':'\u210A','Gscr':'\uD835\uDCA2','gsim':'\u2273','gsime':'\u2A8E','gsiml':'\u2A90','gt':'>','Gt':'\u226B','GT':'>','gtcc':'\u2AA7','gtcir':'\u2A7A','gtdot':'\u22D7','gtlPar':'\u2995','gtquest':'\u2A7C','gtrapprox':'\u2A86','gtrarr':'\u2978','gtrdot':'\u22D7','gtreqless':'\u22DB','gtreqqless':'\u2A8C','gtrless':'\u2277','gtrsim':'\u2273','gvertneqq':'\u2269\uFE00','gvnE':'\u2269\uFE00','Hacek':'\u02C7','hairsp':'\u200A','half':'\xBD','hamilt':'\u210B','hardcy':'\u044A','HARDcy':'\u042A','harr':'\u2194','hArr':'\u21D4','harrcir':'\u2948','harrw':'\u21AD','Hat':'^','hbar':'\u210F','hcirc':'\u0125','Hcirc':'\u0124','hearts':'\u2665','heartsuit':'\u2665','hellip':'\u2026','hercon':'\u22B9','hfr':'\uD835\uDD25','Hfr':'\u210C','HilbertSpace':'\u210B','hksearow':'\u2925','hkswarow':'\u2926','hoarr':'\u21FF','homtht':'\u223B','hookleftarrow':'\u21A9','hookrightarrow':'\u21AA','hopf':'\uD835\uDD59','Hopf':'\u210D','horbar':'\u2015','HorizontalLine':'\u2500','hscr':'\uD835\uDCBD','Hscr':'\u210B','hslash':'\u210F','hstrok':'\u0127','Hstrok':'\u0126','HumpDownHump':'\u224E','HumpEqual':'\u224F','hybull':'\u2043','hyphen':'\u2010','iacute':'\xED','Iacute':'\xCD','ic':'\u2063','icirc':'\xEE','Icirc':'\xCE','icy':'\u0438','Icy':'\u0418','Idot':'\u0130','iecy':'\u0435','IEcy':'\u0415','iexcl':'\xA1','iff':'\u21D4','ifr':'\uD835\uDD26','Ifr':'\u2111','igrave':'\xEC','Igrave':'\xCC','ii':'\u2148','iiiint':'\u2A0C','iiint':'\u222D','iinfin':'\u29DC','iiota':'\u2129','ijlig':'\u0133','IJlig':'\u0132','Im':'\u2111','imacr':'\u012B','Imacr':'\u012A','image':'\u2111','ImaginaryI':'\u2148','imagline':'\u2110','imagpart':'\u2111','imath':'\u0131','imof':'\u22B7','imped':'\u01B5','Implies':'\u21D2','in':'\u2208','incare':'\u2105','infin':'\u221E','infintie':'\u29DD','inodot':'\u0131','int':'\u222B','Int':'\u222C','intcal':'\u22BA','integers':'\u2124','Integral':'\u222B','intercal':'\u22BA','Intersection':'\u22C2','intlarhk':'\u2A17','intprod':'\u2A3C','InvisibleComma':'\u2063','InvisibleTimes':'\u2062','iocy':'\u0451','IOcy':'\u0401','iogon':'\u012F','Iogon':'\u012E','iopf':'\uD835\uDD5A','Iopf':'\uD835\uDD40','iota':'\u03B9','Iota':'\u0399','iprod':'\u2A3C','iquest':'\xBF','iscr':'\uD835\uDCBE','Iscr':'\u2110','isin':'\u2208','isindot':'\u22F5','isinE':'\u22F9','isins':'\u22F4','isinsv':'\u22F3','isinv':'\u2208','it':'\u2062','itilde':'\u0129','Itilde':'\u0128','iukcy':'\u0456','Iukcy':'\u0406','iuml':'\xEF','Iuml':'\xCF','jcirc':'\u0135','Jcirc':'\u0134','jcy':'\u0439','Jcy':'\u0419','jfr':'\uD835\uDD27','Jfr':'\uD835\uDD0D','jmath':'\u0237','jopf':'\uD835\uDD5B','Jopf':'\uD835\uDD41','jscr':'\uD835\uDCBF','Jscr':'\uD835\uDCA5','jsercy':'\u0458','Jsercy':'\u0408','jukcy':'\u0454','Jukcy':'\u0404','kappa':'\u03BA','Kappa':'\u039A','kappav':'\u03F0','kcedil':'\u0137','Kcedil':'\u0136','kcy':'\u043A','Kcy':'\u041A','kfr':'\uD835\uDD28','Kfr':'\uD835\uDD0E','kgreen':'\u0138','khcy':'\u0445','KHcy':'\u0425','kjcy':'\u045C','KJcy':'\u040C','kopf':'\uD835\uDD5C','Kopf':'\uD835\uDD42','kscr':'\uD835\uDCC0','Kscr':'\uD835\uDCA6','lAarr':'\u21DA','lacute':'\u013A','Lacute':'\u0139','laemptyv':'\u29B4','lagran':'\u2112','lambda':'\u03BB','Lambda':'\u039B','lang':'\u27E8','Lang':'\u27EA','langd':'\u2991','langle':'\u27E8','lap':'\u2A85','Laplacetrf':'\u2112','laquo':'\xAB','larr':'\u2190','lArr':'\u21D0','Larr':'\u219E','larrb':'\u21E4','larrbfs':'\u291F','larrfs':'\u291D','larrhk':'\u21A9','larrlp':'\u21AB','larrpl':'\u2939','larrsim':'\u2973','larrtl':'\u21A2','lat':'\u2AAB','latail':'\u2919','lAtail':'\u291B','late':'\u2AAD','lates':'\u2AAD\uFE00','lbarr':'\u290C','lBarr':'\u290E','lbbrk':'\u2772','lbrace':'{','lbrack':'[','lbrke':'\u298B','lbrksld':'\u298F','lbrkslu':'\u298D','lcaron':'\u013E','Lcaron':'\u013D','lcedil':'\u013C','Lcedil':'\u013B','lceil':'\u2308','lcub':'{','lcy':'\u043B','Lcy':'\u041B','ldca':'\u2936','ldquo':'\u201C','ldquor':'\u201E','ldrdhar':'\u2967','ldrushar':'\u294B','ldsh':'\u21B2','le':'\u2264','lE':'\u2266','LeftAngleBracket':'\u27E8','leftarrow':'\u2190','Leftarrow':'\u21D0','LeftArrow':'\u2190','LeftArrowBar':'\u21E4','LeftArrowRightArrow':'\u21C6','leftarrowtail':'\u21A2','LeftCeiling':'\u2308','LeftDoubleBracket':'\u27E6','LeftDownTeeVector':'\u2961','LeftDownVector':'\u21C3','LeftDownVectorBar':'\u2959','LeftFloor':'\u230A','leftharpoondown':'\u21BD','leftharpoonup':'\u21BC','leftleftarrows':'\u21C7','leftrightarrow':'\u2194','Leftrightarrow':'\u21D4','LeftRightArrow':'\u2194','leftrightarrows':'\u21C6','leftrightharpoons':'\u21CB','leftrightsquigarrow':'\u21AD','LeftRightVector':'\u294E','LeftTee':'\u22A3','LeftTeeArrow':'\u21A4','LeftTeeVector':'\u295A','leftthreetimes':'\u22CB','LeftTriangle':'\u22B2','LeftTriangleBar':'\u29CF','LeftTriangleEqual':'\u22B4','LeftUpDownVector':'\u2951','LeftUpTeeVector':'\u2960','LeftUpVector':'\u21BF','LeftUpVectorBar':'\u2958','LeftVector':'\u21BC','LeftVectorBar':'\u2952','leg':'\u22DA','lEg':'\u2A8B','leq':'\u2264','leqq':'\u2266','leqslant':'\u2A7D','les':'\u2A7D','lescc':'\u2AA8','lesdot':'\u2A7F','lesdoto':'\u2A81','lesdotor':'\u2A83','lesg':'\u22DA\uFE00','lesges':'\u2A93','lessapprox':'\u2A85','lessdot':'\u22D6','lesseqgtr':'\u22DA','lesseqqgtr':'\u2A8B','LessEqualGreater':'\u22DA','LessFullEqual':'\u2266','LessGreater':'\u2276','lessgtr':'\u2276','LessLess':'\u2AA1','lesssim':'\u2272','LessSlantEqual':'\u2A7D','LessTilde':'\u2272','lfisht':'\u297C','lfloor':'\u230A','lfr':'\uD835\uDD29','Lfr':'\uD835\uDD0F','lg':'\u2276','lgE':'\u2A91','lHar':'\u2962','lhard':'\u21BD','lharu':'\u21BC','lharul':'\u296A','lhblk':'\u2584','ljcy':'\u0459','LJcy':'\u0409','ll':'\u226A','Ll':'\u22D8','llarr':'\u21C7','llcorner':'\u231E','Lleftarrow':'\u21DA','llhard':'\u296B','lltri':'\u25FA','lmidot':'\u0140','Lmidot':'\u013F','lmoust':'\u23B0','lmoustache':'\u23B0','lnap':'\u2A89','lnapprox':'\u2A89','lne':'\u2A87','lnE':'\u2268','lneq':'\u2A87','lneqq':'\u2268','lnsim':'\u22E6','loang':'\u27EC','loarr':'\u21FD','lobrk':'\u27E6','longleftarrow':'\u27F5','Longleftarrow':'\u27F8','LongLeftArrow':'\u27F5','longleftrightarrow':'\u27F7','Longleftrightarrow':'\u27FA','LongLeftRightArrow':'\u27F7','longmapsto':'\u27FC','longrightarrow':'\u27F6','Longrightarrow':'\u27F9','LongRightArrow':'\u27F6','looparrowleft':'\u21AB','looparrowright':'\u21AC','lopar':'\u2985','lopf':'\uD835\uDD5D','Lopf':'\uD835\uDD43','loplus':'\u2A2D','lotimes':'\u2A34','lowast':'\u2217','lowbar':'_','LowerLeftArrow':'\u2199','LowerRightArrow':'\u2198','loz':'\u25CA','lozenge':'\u25CA','lozf':'\u29EB','lpar':'(','lparlt':'\u2993','lrarr':'\u21C6','lrcorner':'\u231F','lrhar':'\u21CB','lrhard':'\u296D','lrm':'\u200E','lrtri':'\u22BF','lsaquo':'\u2039','lscr':'\uD835\uDCC1','Lscr':'\u2112','lsh':'\u21B0','Lsh':'\u21B0','lsim':'\u2272','lsime':'\u2A8D','lsimg':'\u2A8F','lsqb':'[','lsquo':'\u2018','lsquor':'\u201A','lstrok':'\u0142','Lstrok':'\u0141','lt':'<','Lt':'\u226A','LT':'<','ltcc':'\u2AA6','ltcir':'\u2A79','ltdot':'\u22D6','lthree':'\u22CB','ltimes':'\u22C9','ltlarr':'\u2976','ltquest':'\u2A7B','ltri':'\u25C3','ltrie':'\u22B4','ltrif':'\u25C2','ltrPar':'\u2996','lurdshar':'\u294A','luruhar':'\u2966','lvertneqq':'\u2268\uFE00','lvnE':'\u2268\uFE00','macr':'\xAF','male':'\u2642','malt':'\u2720','maltese':'\u2720','map':'\u21A6','Map':'\u2905','mapsto':'\u21A6','mapstodown':'\u21A7','mapstoleft':'\u21A4','mapstoup':'\u21A5','marker':'\u25AE','mcomma':'\u2A29','mcy':'\u043C','Mcy':'\u041C','mdash':'\u2014','mDDot':'\u223A','measuredangle':'\u2221','MediumSpace':'\u205F','Mellintrf':'\u2133','mfr':'\uD835\uDD2A','Mfr':'\uD835\uDD10','mho':'\u2127','micro':'\xB5','mid':'\u2223','midast':'*','midcir':'\u2AF0','middot':'\xB7','minus':'\u2212','minusb':'\u229F','minusd':'\u2238','minusdu':'\u2A2A','MinusPlus':'\u2213','mlcp':'\u2ADB','mldr':'\u2026','mnplus':'\u2213','models':'\u22A7','mopf':'\uD835\uDD5E','Mopf':'\uD835\uDD44','mp':'\u2213','mscr':'\uD835\uDCC2','Mscr':'\u2133','mstpos':'\u223E','mu':'\u03BC','Mu':'\u039C','multimap':'\u22B8','mumap':'\u22B8','nabla':'\u2207','nacute':'\u0144','Nacute':'\u0143','nang':'\u2220\u20D2','nap':'\u2249','napE':'\u2A70\u0338','napid':'\u224B\u0338','napos':'\u0149','napprox':'\u2249','natur':'\u266E','natural':'\u266E','naturals':'\u2115','nbsp':'\xA0','nbump':'\u224E\u0338','nbumpe':'\u224F\u0338','ncap':'\u2A43','ncaron':'\u0148','Ncaron':'\u0147','ncedil':'\u0146','Ncedil':'\u0145','ncong':'\u2247','ncongdot':'\u2A6D\u0338','ncup':'\u2A42','ncy':'\u043D','Ncy':'\u041D','ndash':'\u2013','ne':'\u2260','nearhk':'\u2924','nearr':'\u2197','neArr':'\u21D7','nearrow':'\u2197','nedot':'\u2250\u0338','NegativeMediumSpace':'\u200B','NegativeThickSpace':'\u200B','NegativeThinSpace':'\u200B','NegativeVeryThinSpace':'\u200B','nequiv':'\u2262','nesear':'\u2928','nesim':'\u2242\u0338','NestedGreaterGreater':'\u226B','NestedLessLess':'\u226A','NewLine':'\n','nexist':'\u2204','nexists':'\u2204','nfr':'\uD835\uDD2B','Nfr':'\uD835\uDD11','nge':'\u2271','ngE':'\u2267\u0338','ngeq':'\u2271','ngeqq':'\u2267\u0338','ngeqslant':'\u2A7E\u0338','nges':'\u2A7E\u0338','nGg':'\u22D9\u0338','ngsim':'\u2275','ngt':'\u226F','nGt':'\u226B\u20D2','ngtr':'\u226F','nGtv':'\u226B\u0338','nharr':'\u21AE','nhArr':'\u21CE','nhpar':'\u2AF2','ni':'\u220B','nis':'\u22FC','nisd':'\u22FA','niv':'\u220B','njcy':'\u045A','NJcy':'\u040A','nlarr':'\u219A','nlArr':'\u21CD','nldr':'\u2025','nle':'\u2270','nlE':'\u2266\u0338','nleftarrow':'\u219A','nLeftarrow':'\u21CD','nleftrightarrow':'\u21AE','nLeftrightarrow':'\u21CE','nleq':'\u2270','nleqq':'\u2266\u0338','nleqslant':'\u2A7D\u0338','nles':'\u2A7D\u0338','nless':'\u226E','nLl':'\u22D8\u0338','nlsim':'\u2274','nlt':'\u226E','nLt':'\u226A\u20D2','nltri':'\u22EA','nltrie':'\u22EC','nLtv':'\u226A\u0338','nmid':'\u2224','NoBreak':'\u2060','NonBreakingSpace':'\xA0','nopf':'\uD835\uDD5F','Nopf':'\u2115','not':'\xAC','Not':'\u2AEC','NotCongruent':'\u2262','NotCupCap':'\u226D','NotDoubleVerticalBar':'\u2226','NotElement':'\u2209','NotEqual':'\u2260','NotEqualTilde':'\u2242\u0338','NotExists':'\u2204','NotGreater':'\u226F','NotGreaterEqual':'\u2271','NotGreaterFullEqual':'\u2267\u0338','NotGreaterGreater':'\u226B\u0338','NotGreaterLess':'\u2279','NotGreaterSlantEqual':'\u2A7E\u0338','NotGreaterTilde':'\u2275','NotHumpDownHump':'\u224E\u0338','NotHumpEqual':'\u224F\u0338','notin':'\u2209','notindot':'\u22F5\u0338','notinE':'\u22F9\u0338','notinva':'\u2209','notinvb':'\u22F7','notinvc':'\u22F6','NotLeftTriangle':'\u22EA','NotLeftTriangleBar':'\u29CF\u0338','NotLeftTriangleEqual':'\u22EC','NotLess':'\u226E','NotLessEqual':'\u2270','NotLessGreater':'\u2278','NotLessLess':'\u226A\u0338','NotLessSlantEqual':'\u2A7D\u0338','NotLessTilde':'\u2274','NotNestedGreaterGreater':'\u2AA2\u0338','NotNestedLessLess':'\u2AA1\u0338','notni':'\u220C','notniva':'\u220C','notnivb':'\u22FE','notnivc':'\u22FD','NotPrecedes':'\u2280','NotPrecedesEqual':'\u2AAF\u0338','NotPrecedesSlantEqual':'\u22E0','NotReverseElement':'\u220C','NotRightTriangle':'\u22EB','NotRightTriangleBar':'\u29D0\u0338','NotRightTriangleEqual':'\u22ED','NotSquareSubset':'\u228F\u0338','NotSquareSubsetEqual':'\u22E2','NotSquareSuperset':'\u2290\u0338','NotSquareSupersetEqual':'\u22E3','NotSubset':'\u2282\u20D2','NotSubsetEqual':'\u2288','NotSucceeds':'\u2281','NotSucceedsEqual':'\u2AB0\u0338','NotSucceedsSlantEqual':'\u22E1','NotSucceedsTilde':'\u227F\u0338','NotSuperset':'\u2283\u20D2','NotSupersetEqual':'\u2289','NotTilde':'\u2241','NotTildeEqual':'\u2244','NotTildeFullEqual':'\u2247','NotTildeTilde':'\u2249','NotVerticalBar':'\u2224','npar':'\u2226','nparallel':'\u2226','nparsl':'\u2AFD\u20E5','npart':'\u2202\u0338','npolint':'\u2A14','npr':'\u2280','nprcue':'\u22E0','npre':'\u2AAF\u0338','nprec':'\u2280','npreceq':'\u2AAF\u0338','nrarr':'\u219B','nrArr':'\u21CF','nrarrc':'\u2933\u0338','nrarrw':'\u219D\u0338','nrightarrow':'\u219B','nRightarrow':'\u21CF','nrtri':'\u22EB','nrtrie':'\u22ED','nsc':'\u2281','nsccue':'\u22E1','nsce':'\u2AB0\u0338','nscr':'\uD835\uDCC3','Nscr':'\uD835\uDCA9','nshortmid':'\u2224','nshortparallel':'\u2226','nsim':'\u2241','nsime':'\u2244','nsimeq':'\u2244','nsmid':'\u2224','nspar':'\u2226','nsqsube':'\u22E2','nsqsupe':'\u22E3','nsub':'\u2284','nsube':'\u2288','nsubE':'\u2AC5\u0338','nsubset':'\u2282\u20D2','nsubseteq':'\u2288','nsubseteqq':'\u2AC5\u0338','nsucc':'\u2281','nsucceq':'\u2AB0\u0338','nsup':'\u2285','nsupe':'\u2289','nsupE':'\u2AC6\u0338','nsupset':'\u2283\u20D2','nsupseteq':'\u2289','nsupseteqq':'\u2AC6\u0338','ntgl':'\u2279','ntilde':'\xF1','Ntilde':'\xD1','ntlg':'\u2278','ntriangleleft':'\u22EA','ntrianglelefteq':'\u22EC','ntriangleright':'\u22EB','ntrianglerighteq':'\u22ED','nu':'\u03BD','Nu':'\u039D','num':'#','numero':'\u2116','numsp':'\u2007','nvap':'\u224D\u20D2','nvdash':'\u22AC','nvDash':'\u22AD','nVdash':'\u22AE','nVDash':'\u22AF','nvge':'\u2265\u20D2','nvgt':'>\u20D2','nvHarr':'\u2904','nvinfin':'\u29DE','nvlArr':'\u2902','nvle':'\u2264\u20D2','nvlt':'<\u20D2','nvltrie':'\u22B4\u20D2','nvrArr':'\u2903','nvrtrie':'\u22B5\u20D2','nvsim':'\u223C\u20D2','nwarhk':'\u2923','nwarr':'\u2196','nwArr':'\u21D6','nwarrow':'\u2196','nwnear':'\u2927','oacute':'\xF3','Oacute':'\xD3','oast':'\u229B','ocir':'\u229A','ocirc':'\xF4','Ocirc':'\xD4','ocy':'\u043E','Ocy':'\u041E','odash':'\u229D','odblac':'\u0151','Odblac':'\u0150','odiv':'\u2A38','odot':'\u2299','odsold':'\u29BC','oelig':'\u0153','OElig':'\u0152','ofcir':'\u29BF','ofr':'\uD835\uDD2C','Ofr':'\uD835\uDD12','ogon':'\u02DB','ograve':'\xF2','Ograve':'\xD2','ogt':'\u29C1','ohbar':'\u29B5','ohm':'\u03A9','oint':'\u222E','olarr':'\u21BA','olcir':'\u29BE','olcross':'\u29BB','oline':'\u203E','olt':'\u29C0','omacr':'\u014D','Omacr':'\u014C','omega':'\u03C9','Omega':'\u03A9','omicron':'\u03BF','Omicron':'\u039F','omid':'\u29B6','ominus':'\u2296','oopf':'\uD835\uDD60','Oopf':'\uD835\uDD46','opar':'\u29B7','OpenCurlyDoubleQuote':'\u201C','OpenCurlyQuote':'\u2018','operp':'\u29B9','oplus':'\u2295','or':'\u2228','Or':'\u2A54','orarr':'\u21BB','ord':'\u2A5D','order':'\u2134','orderof':'\u2134','ordf':'\xAA','ordm':'\xBA','origof':'\u22B6','oror':'\u2A56','orslope':'\u2A57','orv':'\u2A5B','oS':'\u24C8','oscr':'\u2134','Oscr':'\uD835\uDCAA','oslash':'\xF8','Oslash':'\xD8','osol':'\u2298','otilde':'\xF5','Otilde':'\xD5','otimes':'\u2297','Otimes':'\u2A37','otimesas':'\u2A36','ouml':'\xF6','Ouml':'\xD6','ovbar':'\u233D','OverBar':'\u203E','OverBrace':'\u23DE','OverBracket':'\u23B4','OverParenthesis':'\u23DC','par':'\u2225','para':'\xB6','parallel':'\u2225','parsim':'\u2AF3','parsl':'\u2AFD','part':'\u2202','PartialD':'\u2202','pcy':'\u043F','Pcy':'\u041F','percnt':'%','period':'.','permil':'\u2030','perp':'\u22A5','pertenk':'\u2031','pfr':'\uD835\uDD2D','Pfr':'\uD835\uDD13','phi':'\u03C6','Phi':'\u03A6','phiv':'\u03D5','phmmat':'\u2133','phone':'\u260E','pi':'\u03C0','Pi':'\u03A0','pitchfork':'\u22D4','piv':'\u03D6','planck':'\u210F','planckh':'\u210E','plankv':'\u210F','plus':'+','plusacir':'\u2A23','plusb':'\u229E','pluscir':'\u2A22','plusdo':'\u2214','plusdu':'\u2A25','pluse':'\u2A72','PlusMinus':'\xB1','plusmn':'\xB1','plussim':'\u2A26','plustwo':'\u2A27','pm':'\xB1','Poincareplane':'\u210C','pointint':'\u2A15','popf':'\uD835\uDD61','Popf':'\u2119','pound':'\xA3','pr':'\u227A','Pr':'\u2ABB','prap':'\u2AB7','prcue':'\u227C','pre':'\u2AAF','prE':'\u2AB3','prec':'\u227A','precapprox':'\u2AB7','preccurlyeq':'\u227C','Precedes':'\u227A','PrecedesEqual':'\u2AAF','PrecedesSlantEqual':'\u227C','PrecedesTilde':'\u227E','preceq':'\u2AAF','precnapprox':'\u2AB9','precneqq':'\u2AB5','precnsim':'\u22E8','precsim':'\u227E','prime':'\u2032','Prime':'\u2033','primes':'\u2119','prnap':'\u2AB9','prnE':'\u2AB5','prnsim':'\u22E8','prod':'\u220F','Product':'\u220F','profalar':'\u232E','profline':'\u2312','profsurf':'\u2313','prop':'\u221D','Proportion':'\u2237','Proportional':'\u221D','propto':'\u221D','prsim':'\u227E','prurel':'\u22B0','pscr':'\uD835\uDCC5','Pscr':'\uD835\uDCAB','psi':'\u03C8','Psi':'\u03A8','puncsp':'\u2008','qfr':'\uD835\uDD2E','Qfr':'\uD835\uDD14','qint':'\u2A0C','qopf':'\uD835\uDD62','Qopf':'\u211A','qprime':'\u2057','qscr':'\uD835\uDCC6','Qscr':'\uD835\uDCAC','quaternions':'\u210D','quatint':'\u2A16','quest':'?','questeq':'\u225F','quot':'"','QUOT':'"','rAarr':'\u21DB','race':'\u223D\u0331','racute':'\u0155','Racute':'\u0154','radic':'\u221A','raemptyv':'\u29B3','rang':'\u27E9','Rang':'\u27EB','rangd':'\u2992','range':'\u29A5','rangle':'\u27E9','raquo':'\xBB','rarr':'\u2192','rArr':'\u21D2','Rarr':'\u21A0','rarrap':'\u2975','rarrb':'\u21E5','rarrbfs':'\u2920','rarrc':'\u2933','rarrfs':'\u291E','rarrhk':'\u21AA','rarrlp':'\u21AC','rarrpl':'\u2945','rarrsim':'\u2974','rarrtl':'\u21A3','Rarrtl':'\u2916','rarrw':'\u219D','ratail':'\u291A','rAtail':'\u291C','ratio':'\u2236','rationals':'\u211A','rbarr':'\u290D','rBarr':'\u290F','RBarr':'\u2910','rbbrk':'\u2773','rbrace':'}','rbrack':']','rbrke':'\u298C','rbrksld':'\u298E','rbrkslu':'\u2990','rcaron':'\u0159','Rcaron':'\u0158','rcedil':'\u0157','Rcedil':'\u0156','rceil':'\u2309','rcub':'}','rcy':'\u0440','Rcy':'\u0420','rdca':'\u2937','rdldhar':'\u2969','rdquo':'\u201D','rdquor':'\u201D','rdsh':'\u21B3','Re':'\u211C','real':'\u211C','realine':'\u211B','realpart':'\u211C','reals':'\u211D','rect':'\u25AD','reg':'\xAE','REG':'\xAE','ReverseElement':'\u220B','ReverseEquilibrium':'\u21CB','ReverseUpEquilibrium':'\u296F','rfisht':'\u297D','rfloor':'\u230B','rfr':'\uD835\uDD2F','Rfr':'\u211C','rHar':'\u2964','rhard':'\u21C1','rharu':'\u21C0','rharul':'\u296C','rho':'\u03C1','Rho':'\u03A1','rhov':'\u03F1','RightAngleBracket':'\u27E9','rightarrow':'\u2192','Rightarrow':'\u21D2','RightArrow':'\u2192','RightArrowBar':'\u21E5','RightArrowLeftArrow':'\u21C4','rightarrowtail':'\u21A3','RightCeiling':'\u2309','RightDoubleBracket':'\u27E7','RightDownTeeVector':'\u295D','RightDownVector':'\u21C2','RightDownVectorBar':'\u2955','RightFloor':'\u230B','rightharpoondown':'\u21C1','rightharpoonup':'\u21C0','rightleftarrows':'\u21C4','rightleftharpoons':'\u21CC','rightrightarrows':'\u21C9','rightsquigarrow':'\u219D','RightTee':'\u22A2','RightTeeArrow':'\u21A6','RightTeeVector':'\u295B','rightthreetimes':'\u22CC','RightTriangle':'\u22B3','RightTriangleBar':'\u29D0','RightTriangleEqual':'\u22B5','RightUpDownVector':'\u294F','RightUpTeeVector':'\u295C','RightUpVector':'\u21BE','RightUpVectorBar':'\u2954','RightVector':'\u21C0','RightVectorBar':'\u2953','ring':'\u02DA','risingdotseq':'\u2253','rlarr':'\u21C4','rlhar':'\u21CC','rlm':'\u200F','rmoust':'\u23B1','rmoustache':'\u23B1','rnmid':'\u2AEE','roang':'\u27ED','roarr':'\u21FE','robrk':'\u27E7','ropar':'\u2986','ropf':'\uD835\uDD63','Ropf':'\u211D','roplus':'\u2A2E','rotimes':'\u2A35','RoundImplies':'\u2970','rpar':')','rpargt':'\u2994','rppolint':'\u2A12','rrarr':'\u21C9','Rrightarrow':'\u21DB','rsaquo':'\u203A','rscr':'\uD835\uDCC7','Rscr':'\u211B','rsh':'\u21B1','Rsh':'\u21B1','rsqb':']','rsquo':'\u2019','rsquor':'\u2019','rthree':'\u22CC','rtimes':'\u22CA','rtri':'\u25B9','rtrie':'\u22B5','rtrif':'\u25B8','rtriltri':'\u29CE','RuleDelayed':'\u29F4','ruluhar':'\u2968','rx':'\u211E','sacute':'\u015B','Sacute':'\u015A','sbquo':'\u201A','sc':'\u227B','Sc':'\u2ABC','scap':'\u2AB8','scaron':'\u0161','Scaron':'\u0160','sccue':'\u227D','sce':'\u2AB0','scE':'\u2AB4','scedil':'\u015F','Scedil':'\u015E','scirc':'\u015D','Scirc':'\u015C','scnap':'\u2ABA','scnE':'\u2AB6','scnsim':'\u22E9','scpolint':'\u2A13','scsim':'\u227F','scy':'\u0441','Scy':'\u0421','sdot':'\u22C5','sdotb':'\u22A1','sdote':'\u2A66','searhk':'\u2925','searr':'\u2198','seArr':'\u21D8','searrow':'\u2198','sect':'\xA7','semi':';','seswar':'\u2929','setminus':'\u2216','setmn':'\u2216','sext':'\u2736','sfr':'\uD835\uDD30','Sfr':'\uD835\uDD16','sfrown':'\u2322','sharp':'\u266F','shchcy':'\u0449','SHCHcy':'\u0429','shcy':'\u0448','SHcy':'\u0428','ShortDownArrow':'\u2193','ShortLeftArrow':'\u2190','shortmid':'\u2223','shortparallel':'\u2225','ShortRightArrow':'\u2192','ShortUpArrow':'\u2191','shy':'\xAD','sigma':'\u03C3','Sigma':'\u03A3','sigmaf':'\u03C2','sigmav':'\u03C2','sim':'\u223C','simdot':'\u2A6A','sime':'\u2243','simeq':'\u2243','simg':'\u2A9E','simgE':'\u2AA0','siml':'\u2A9D','simlE':'\u2A9F','simne':'\u2246','simplus':'\u2A24','simrarr':'\u2972','slarr':'\u2190','SmallCircle':'\u2218','smallsetminus':'\u2216','smashp':'\u2A33','smeparsl':'\u29E4','smid':'\u2223','smile':'\u2323','smt':'\u2AAA','smte':'\u2AAC','smtes':'\u2AAC\uFE00','softcy':'\u044C','SOFTcy':'\u042C','sol':'/','solb':'\u29C4','solbar':'\u233F','sopf':'\uD835\uDD64','Sopf':'\uD835\uDD4A','spades':'\u2660','spadesuit':'\u2660','spar':'\u2225','sqcap':'\u2293','sqcaps':'\u2293\uFE00','sqcup':'\u2294','sqcups':'\u2294\uFE00','Sqrt':'\u221A','sqsub':'\u228F','sqsube':'\u2291','sqsubset':'\u228F','sqsubseteq':'\u2291','sqsup':'\u2290','sqsupe':'\u2292','sqsupset':'\u2290','sqsupseteq':'\u2292','squ':'\u25A1','square':'\u25A1','Square':'\u25A1','SquareIntersection':'\u2293','SquareSubset':'\u228F','SquareSubsetEqual':'\u2291','SquareSuperset':'\u2290','SquareSupersetEqual':'\u2292','SquareUnion':'\u2294','squarf':'\u25AA','squf':'\u25AA','srarr':'\u2192','sscr':'\uD835\uDCC8','Sscr':'\uD835\uDCAE','ssetmn':'\u2216','ssmile':'\u2323','sstarf':'\u22C6','star':'\u2606','Star':'\u22C6','starf':'\u2605','straightepsilon':'\u03F5','straightphi':'\u03D5','strns':'\xAF','sub':'\u2282','Sub':'\u22D0','subdot':'\u2ABD','sube':'\u2286','subE':'\u2AC5','subedot':'\u2AC3','submult':'\u2AC1','subne':'\u228A','subnE':'\u2ACB','subplus':'\u2ABF','subrarr':'\u2979','subset':'\u2282','Subset':'\u22D0','subseteq':'\u2286','subseteqq':'\u2AC5','SubsetEqual':'\u2286','subsetneq':'\u228A','subsetneqq':'\u2ACB','subsim':'\u2AC7','subsub':'\u2AD5','subsup':'\u2AD3','succ':'\u227B','succapprox':'\u2AB8','succcurlyeq':'\u227D','Succeeds':'\u227B','SucceedsEqual':'\u2AB0','SucceedsSlantEqual':'\u227D','SucceedsTilde':'\u227F','succeq':'\u2AB0','succnapprox':'\u2ABA','succneqq':'\u2AB6','succnsim':'\u22E9','succsim':'\u227F','SuchThat':'\u220B','sum':'\u2211','Sum':'\u2211','sung':'\u266A','sup':'\u2283','Sup':'\u22D1','sup1':'\xB9','sup2':'\xB2','sup3':'\xB3','supdot':'\u2ABE','supdsub':'\u2AD8','supe':'\u2287','supE':'\u2AC6','supedot':'\u2AC4','Superset':'\u2283','SupersetEqual':'\u2287','suphsol':'\u27C9','suphsub':'\u2AD7','suplarr':'\u297B','supmult':'\u2AC2','supne':'\u228B','supnE':'\u2ACC','supplus':'\u2AC0','supset':'\u2283','Supset':'\u22D1','supseteq':'\u2287','supseteqq':'\u2AC6','supsetneq':'\u228B','supsetneqq':'\u2ACC','supsim':'\u2AC8','supsub':'\u2AD4','supsup':'\u2AD6','swarhk':'\u2926','swarr':'\u2199','swArr':'\u21D9','swarrow':'\u2199','swnwar':'\u292A','szlig':'\xDF','Tab':'\t','target':'\u2316','tau':'\u03C4','Tau':'\u03A4','tbrk':'\u23B4','tcaron':'\u0165','Tcaron':'\u0164','tcedil':'\u0163','Tcedil':'\u0162','tcy':'\u0442','Tcy':'\u0422','tdot':'\u20DB','telrec':'\u2315','tfr':'\uD835\uDD31','Tfr':'\uD835\uDD17','there4':'\u2234','therefore':'\u2234','Therefore':'\u2234','theta':'\u03B8','Theta':'\u0398','thetasym':'\u03D1','thetav':'\u03D1','thickapprox':'\u2248','thicksim':'\u223C','ThickSpace':'\u205F\u200A','thinsp':'\u2009','ThinSpace':'\u2009','thkap':'\u2248','thksim':'\u223C','thorn':'\xFE','THORN':'\xDE','tilde':'\u02DC','Tilde':'\u223C','TildeEqual':'\u2243','TildeFullEqual':'\u2245','TildeTilde':'\u2248','times':'\xD7','timesb':'\u22A0','timesbar':'\u2A31','timesd':'\u2A30','tint':'\u222D','toea':'\u2928','top':'\u22A4','topbot':'\u2336','topcir':'\u2AF1','topf':'\uD835\uDD65','Topf':'\uD835\uDD4B','topfork':'\u2ADA','tosa':'\u2929','tprime':'\u2034','trade':'\u2122','TRADE':'\u2122','triangle':'\u25B5','triangledown':'\u25BF','triangleleft':'\u25C3','trianglelefteq':'\u22B4','triangleq':'\u225C','triangleright':'\u25B9','trianglerighteq':'\u22B5','tridot':'\u25EC','trie':'\u225C','triminus':'\u2A3A','TripleDot':'\u20DB','triplus':'\u2A39','trisb':'\u29CD','tritime':'\u2A3B','trpezium':'\u23E2','tscr':'\uD835\uDCC9','Tscr':'\uD835\uDCAF','tscy':'\u0446','TScy':'\u0426','tshcy':'\u045B','TSHcy':'\u040B','tstrok':'\u0167','Tstrok':'\u0166','twixt':'\u226C','twoheadleftarrow':'\u219E','twoheadrightarrow':'\u21A0','uacute':'\xFA','Uacute':'\xDA','uarr':'\u2191','uArr':'\u21D1','Uarr':'\u219F','Uarrocir':'\u2949','ubrcy':'\u045E','Ubrcy':'\u040E','ubreve':'\u016D','Ubreve':'\u016C','ucirc':'\xFB','Ucirc':'\xDB','ucy':'\u0443','Ucy':'\u0423','udarr':'\u21C5','udblac':'\u0171','Udblac':'\u0170','udhar':'\u296E','ufisht':'\u297E','ufr':'\uD835\uDD32','Ufr':'\uD835\uDD18','ugrave':'\xF9','Ugrave':'\xD9','uHar':'\u2963','uharl':'\u21BF','uharr':'\u21BE','uhblk':'\u2580','ulcorn':'\u231C','ulcorner':'\u231C','ulcrop':'\u230F','ultri':'\u25F8','umacr':'\u016B','Umacr':'\u016A','uml':'\xA8','UnderBar':'_','UnderBrace':'\u23DF','UnderBracket':'\u23B5','UnderParenthesis':'\u23DD','Union':'\u22C3','UnionPlus':'\u228E','uogon':'\u0173','Uogon':'\u0172','uopf':'\uD835\uDD66','Uopf':'\uD835\uDD4C','uparrow':'\u2191','Uparrow':'\u21D1','UpArrow':'\u2191','UpArrowBar':'\u2912','UpArrowDownArrow':'\u21C5','updownarrow':'\u2195','Updownarrow':'\u21D5','UpDownArrow':'\u2195','UpEquilibrium':'\u296E','upharpoonleft':'\u21BF','upharpoonright':'\u21BE','uplus':'\u228E','UpperLeftArrow':'\u2196','UpperRightArrow':'\u2197','upsi':'\u03C5','Upsi':'\u03D2','upsih':'\u03D2','upsilon':'\u03C5','Upsilon':'\u03A5','UpTee':'\u22A5','UpTeeArrow':'\u21A5','upuparrows':'\u21C8','urcorn':'\u231D','urcorner':'\u231D','urcrop':'\u230E','uring':'\u016F','Uring':'\u016E','urtri':'\u25F9','uscr':'\uD835\uDCCA','Uscr':'\uD835\uDCB0','utdot':'\u22F0','utilde':'\u0169','Utilde':'\u0168','utri':'\u25B5','utrif':'\u25B4','uuarr':'\u21C8','uuml':'\xFC','Uuml':'\xDC','uwangle':'\u29A7','vangrt':'\u299C','varepsilon':'\u03F5','varkappa':'\u03F0','varnothing':'\u2205','varphi':'\u03D5','varpi':'\u03D6','varpropto':'\u221D','varr':'\u2195','vArr':'\u21D5','varrho':'\u03F1','varsigma':'\u03C2','varsubsetneq':'\u228A\uFE00','varsubsetneqq':'\u2ACB\uFE00','varsupsetneq':'\u228B\uFE00','varsupsetneqq':'\u2ACC\uFE00','vartheta':'\u03D1','vartriangleleft':'\u22B2','vartriangleright':'\u22B3','vBar':'\u2AE8','Vbar':'\u2AEB','vBarv':'\u2AE9','vcy':'\u0432','Vcy':'\u0412','vdash':'\u22A2','vDash':'\u22A8','Vdash':'\u22A9','VDash':'\u22AB','Vdashl':'\u2AE6','vee':'\u2228','Vee':'\u22C1','veebar':'\u22BB','veeeq':'\u225A','vellip':'\u22EE','verbar':'|','Verbar':'\u2016','vert':'|','Vert':'\u2016','VerticalBar':'\u2223','VerticalLine':'|','VerticalSeparator':'\u2758','VerticalTilde':'\u2240','VeryThinSpace':'\u200A','vfr':'\uD835\uDD33','Vfr':'\uD835\uDD19','vltri':'\u22B2','vnsub':'\u2282\u20D2','vnsup':'\u2283\u20D2','vopf':'\uD835\uDD67','Vopf':'\uD835\uDD4D','vprop':'\u221D','vrtri':'\u22B3','vscr':'\uD835\uDCCB','Vscr':'\uD835\uDCB1','vsubne':'\u228A\uFE00','vsubnE':'\u2ACB\uFE00','vsupne':'\u228B\uFE00','vsupnE':'\u2ACC\uFE00','Vvdash':'\u22AA','vzigzag':'\u299A','wcirc':'\u0175','Wcirc':'\u0174','wedbar':'\u2A5F','wedge':'\u2227','Wedge':'\u22C0','wedgeq':'\u2259','weierp':'\u2118','wfr':'\uD835\uDD34','Wfr':'\uD835\uDD1A','wopf':'\uD835\uDD68','Wopf':'\uD835\uDD4E','wp':'\u2118','wr':'\u2240','wreath':'\u2240','wscr':'\uD835\uDCCC','Wscr':'\uD835\uDCB2','xcap':'\u22C2','xcirc':'\u25EF','xcup':'\u22C3','xdtri':'\u25BD','xfr':'\uD835\uDD35','Xfr':'\uD835\uDD1B','xharr':'\u27F7','xhArr':'\u27FA','xi':'\u03BE','Xi':'\u039E','xlarr':'\u27F5','xlArr':'\u27F8','xmap':'\u27FC','xnis':'\u22FB','xodot':'\u2A00','xopf':'\uD835\uDD69','Xopf':'\uD835\uDD4F','xoplus':'\u2A01','xotime':'\u2A02','xrarr':'\u27F6','xrArr':'\u27F9','xscr':'\uD835\uDCCD','Xscr':'\uD835\uDCB3','xsqcup':'\u2A06','xuplus':'\u2A04','xutri':'\u25B3','xvee':'\u22C1','xwedge':'\u22C0','yacute':'\xFD','Yacute':'\xDD','yacy':'\u044F','YAcy':'\u042F','ycirc':'\u0177','Ycirc':'\u0176','ycy':'\u044B','Ycy':'\u042B','yen':'\xA5','yfr':'\uD835\uDD36','Yfr':'\uD835\uDD1C','yicy':'\u0457','YIcy':'\u0407','yopf':'\uD835\uDD6A','Yopf':'\uD835\uDD50','yscr':'\uD835\uDCCE','Yscr':'\uD835\uDCB4','yucy':'\u044E','YUcy':'\u042E','yuml':'\xFF','Yuml':'\u0178','zacute':'\u017A','Zacute':'\u0179','zcaron':'\u017E','Zcaron':'\u017D','zcy':'\u0437','Zcy':'\u0417','zdot':'\u017C','Zdot':'\u017B','zeetrf':'\u2128','ZeroWidthSpace':'\u200B','zeta':'\u03B6','Zeta':'\u0396','zfr':'\uD835\uDD37','Zfr':'\u2128','zhcy':'\u0436','ZHcy':'\u0416','zigrarr':'\u21DD','zopf':'\uD835\uDD6B','Zopf':'\u2124','zscr':'\uD835\uDCCF','Zscr':'\uD835\uDCB5','zwj':'\u200D','zwnj':'\u200C'};
	var decodeMapLegacy = {'aacute':'\xE1','Aacute':'\xC1','acirc':'\xE2','Acirc':'\xC2','acute':'\xB4','aelig':'\xE6','AElig':'\xC6','agrave':'\xE0','Agrave':'\xC0','amp':'&','AMP':'&','aring':'\xE5','Aring':'\xC5','atilde':'\xE3','Atilde':'\xC3','auml':'\xE4','Auml':'\xC4','brvbar':'\xA6','ccedil':'\xE7','Ccedil':'\xC7','cedil':'\xB8','cent':'\xA2','copy':'\xA9','COPY':'\xA9','curren':'\xA4','deg':'\xB0','divide':'\xF7','eacute':'\xE9','Eacute':'\xC9','ecirc':'\xEA','Ecirc':'\xCA','egrave':'\xE8','Egrave':'\xC8','eth':'\xF0','ETH':'\xD0','euml':'\xEB','Euml':'\xCB','frac12':'\xBD','frac14':'\xBC','frac34':'\xBE','gt':'>','GT':'>','iacute':'\xED','Iacute':'\xCD','icirc':'\xEE','Icirc':'\xCE','iexcl':'\xA1','igrave':'\xEC','Igrave':'\xCC','iquest':'\xBF','iuml':'\xEF','Iuml':'\xCF','laquo':'\xAB','lt':'<','LT':'<','macr':'\xAF','micro':'\xB5','middot':'\xB7','nbsp':'\xA0','not':'\xAC','ntilde':'\xF1','Ntilde':'\xD1','oacute':'\xF3','Oacute':'\xD3','ocirc':'\xF4','Ocirc':'\xD4','ograve':'\xF2','Ograve':'\xD2','ordf':'\xAA','ordm':'\xBA','oslash':'\xF8','Oslash':'\xD8','otilde':'\xF5','Otilde':'\xD5','ouml':'\xF6','Ouml':'\xD6','para':'\xB6','plusmn':'\xB1','pound':'\xA3','quot':'"','QUOT':'"','raquo':'\xBB','reg':'\xAE','REG':'\xAE','sect':'\xA7','shy':'\xAD','sup1':'\xB9','sup2':'\xB2','sup3':'\xB3','szlig':'\xDF','thorn':'\xFE','THORN':'\xDE','times':'\xD7','uacute':'\xFA','Uacute':'\xDA','ucirc':'\xFB','Ucirc':'\xDB','ugrave':'\xF9','Ugrave':'\xD9','uml':'\xA8','uuml':'\xFC','Uuml':'\xDC','yacute':'\xFD','Yacute':'\xDD','yen':'\xA5','yuml':'\xFF'};
	var decodeMapNumeric = {'0':'\uFFFD','128':'\u20AC','130':'\u201A','131':'\u0192','132':'\u201E','133':'\u2026','134':'\u2020','135':'\u2021','136':'\u02C6','137':'\u2030','138':'\u0160','139':'\u2039','140':'\u0152','142':'\u017D','145':'\u2018','146':'\u2019','147':'\u201C','148':'\u201D','149':'\u2022','150':'\u2013','151':'\u2014','152':'\u02DC','153':'\u2122','154':'\u0161','155':'\u203A','156':'\u0153','158':'\u017E','159':'\u0178'};
	var invalidReferenceCodePoints = [1,2,3,4,5,6,7,8,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,64976,64977,64978,64979,64980,64981,64982,64983,64984,64985,64986,64987,64988,64989,64990,64991,64992,64993,64994,64995,64996,64997,64998,64999,65000,65001,65002,65003,65004,65005,65006,65007,65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111];

	/*--------------------------------------------------------------------------*/

	var stringFromCharCode = String.fromCharCode;

	var object = {};
	var hasOwnProperty = object.hasOwnProperty;
	var has = function(object, propertyName) {
		return hasOwnProperty.call(object, propertyName);
	};

	var contains = function(array, value) {
		var index = -1;
		var length = array.length;
		while (++index < length) {
			if (array[index] == value) {
				return true;
			}
		}
		return false;
	};

	var merge = function(options, defaults) {
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
	var codePointToSymbol = function(codePoint, strict) {
		var output = '';
		if ((codePoint >= 0xD800 && codePoint <= 0xDFFF) || codePoint > 0x10FFFF) {
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

	var hexEscape = function(codePoint) {
		return '&#x' + codePoint.toString(16).toUpperCase() + ';';
	};

	var decEscape = function(codePoint) {
		return '&#' + codePoint + ';';
	};

	var parseError = function(message) {
		throw Error('Parse error: ' + message);
	};

	/*--------------------------------------------------------------------------*/

	var encode = function(string, options) {
		options = merge(options, encode.options);
		var strict = options.strict;
		if (strict && regexInvalidRawCodePoint.test(string)) {
			parseError('forbidden code point');
		}
		var encodeEverything = options.encodeEverything;
		var useNamedReferences = options.useNamedReferences;
		var allowUnsafeSymbols = options.allowUnsafeSymbols;
		var escapeCodePoint = options.decimal ? decEscape : hexEscape;

		var escapeBmpSymbol = function(symbol) {
			return escapeCodePoint(symbol.charCodeAt(0));
		};

		if (encodeEverything) {
			// Encode ASCII symbols.
			string = string.replace(regexAsciiWhitelist, function(symbol) {
				// Use named references if requested & possible.
				if (useNamedReferences && has(encodeMap, symbol)) {
					return '&' + encodeMap[symbol] + ';';
				}
				return escapeBmpSymbol(symbol);
			});
			// Shorten a few escapes that represent two symbols, of which at least one
			// is within the ASCII range.
			if (useNamedReferences) {
				string = string
					.replace(/&gt;\u20D2/g, '&nvgt;')
					.replace(/&lt;\u20D2/g, '&nvlt;')
					.replace(/&#x66;&#x6A;/g, '&fjlig;');
			}
			// Encode non-ASCII symbols.
			if (useNamedReferences) {
				// Encode non-ASCII symbols that can be replaced with a named reference.
				string = string.replace(regexEncodeNonAscii, function(string) {
					// Note: there is no need to check `has(encodeMap, string)` here.
					return '&' + encodeMap[string] + ';';
				});
			}
			// Note: any remaining non-ASCII symbols are handled outside of the `if`.
		} else if (useNamedReferences) {
			// Apply named character references.
			// Encode `<>"'&` using named character references.
			if (!allowUnsafeSymbols) {
				string = string.replace(regexEscape, function(string) {
					return '&' + encodeMap[string] + ';'; // no need to check `has()` here
				});
			}
			// Shorten escapes that represent two symbols, of which at least one is
			// `<>"'&`.
			string = string
				.replace(/&gt;\u20D2/g, '&nvgt;')
				.replace(/&lt;\u20D2/g, '&nvlt;');
			// Encode non-ASCII symbols that can be replaced with a named reference.
			string = string.replace(regexEncodeNonAscii, function(string) {
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
			.replace(regexAstralSymbols, function($0) {
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
		'decimal' : false
	};

	var decode = function(html, options) {
		options = merge(options, decode.options);
		var strict = options.strict;
		if (strict && regexInvalidEntity.test(html)) {
			parseError('malformed character reference');
		}
		return html.replace(regexDecode, function($0, $1, $2, $3, $4, $5, $6, $7) {
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
						parseError(
							'named character reference was not terminated by a semicolon'
						);
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
					parseError(
						'named character reference was not terminated by a semicolon'
					);
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

	var escape = function(string) {
		return string.replace(regexEscape, function($0) {
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
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return he;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}	else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = he;
		} else { // in Narwhal or RingoJS v0.7.0-
			for (var key in he) {
				has(he, key) && (freeExports[key] = he[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.he = he;
	}

}(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37)(module)))

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 38 */
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
      "click": _vm.click,
      "longpress": _vm.longpress
    }
  }) : _c('text', {
    style: _vm.getStyle,
    on: {
      "click": _vm.click,
      "longpress": _vm.longpress
    }
  }, [_vm._v(_vm._s(_vm.getFontName) + "\n")])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(40);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(41)
)

/* script */
__vue_exports__ = __webpack_require__(42)

/* template */
var __vue_template__ = __webpack_require__(43)
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
/* 41 */
/***/ (function(module, exports) {

module.exports = {
  "slider-wrap": {
    "paddingRight": "22.5",
    "paddingLeft": "22.5"
  },
  "level-text-wrap": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "marginBottom": "-21.6"
  },
  "level-text": {
    "flex": 1,
    "fontSize": "42",
    "paddingTop": "7.2",
    "paddingBottom": "7.2",
    "textAlign": "center"
  },
  "all": {
    "height": "9",
    "marginTop": "43.2",
    "backgroundColor": "#e6e6e6"
  },
  "selected": {
    "marginTop": "-9",
    "height": "9",
    "backgroundColor": "#198ded"
  },
  "dot-wrap": {
    "height": "86.4",
    "width": "116.4",
    "marginTop": "-47.52",
    "marginLeft": "-57.6",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "dot": {
    "height": "45",
    "width": "45",
    "backgroundColor": "#198ded",
    "borderRadius": "43.2"
  },
  "num": {
    "width": "78",
    "height": "78",
    "marginLeft": "-39",
    "borderRadius": "79.2",
    "backgroundColor": "#198ded",
    "color": "#ffffff",
    "fontSize": "42",
    "fontWeight": "700",
    "textAlign": "center",
    "lineHeight": "78"
  }
}

/***/ }),
/* 42 */
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
	name: 'FmSlider',
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
/* 43 */
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(45);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(46)
)

/* script */
__vue_exports__ = __webpack_require__(47)

/* template */
var __vue_template__ = __webpack_require__(48)
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
/* 46 */
/***/ (function(module, exports) {

module.exports = {
  "fm-btn-wrap": {
    "height": 72,
    "alignItems": "center",
    "flexDirection": "row",
    "borderRadius": 72
  },
  "fm-btn": {
    "paddingLeft": 36,
    "paddingRight": 36,
    "lineHeight": 72,
    "fontSize": 36,
    "fontWeight": "500",
    "textAlign": "center",
    "minWidth": 144,
    "maxWidth": 300,
    "fontFamily": "sans-serif-medium"
  },
  "fm-btn-max-padding": {
    "paddingLeft": 24,
    "paddingRight": 24
  },
  "fm-btn-freeSize": {
    "maxWidth": 1080
  },
  "fm-btn-hollow": {
    "borderWidth": 4,
    "lineHeight": 64,
    "borderStye": "solid"
  }
}

/***/ }),
/* 47 */
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


var small_size = 48; //48dp
var large_size = 80; //80dp
var max_size = 100; //100dp
var dis_color = '#cccccc';
var transparent = 'transparent';
var dom = weex.requireModule('dom');

exports.default = {
	name: 'FmButton',
	data: function data() {
		return {
			max: false
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
		disabled: Boolean,
		freeSize: {
			type: Boolean,
			default: true
		}
	},

	computed: {
		btnClz: function btnClz() {
			var clz = [];

			if (this.max) {
				clz.push('fm-btn-max-padding');
			}

			if (this.bgColor == transparent) {
				clz.push('fm-btn-hollow');
			}

			if (this.freeSize) {
				clz.push('fm-btn-freeSize');
			}

			return clz;
		},
		btnStyle: function btnStyle() {
			var sty = {};

			if (this.bgColor != transparent) {
				sty.backgroundColor = this.bgColor;
			}
			if (this.disabled) {
				sty.backgroundColor = dis_color;
			}

			return sty;
		},
		textStyle: function textStyle() {
			var sty = {};

			if (this.color) {
				sty.color = this.color;
				if (this.bgColor == transparent) {
					sty.borderColor = this.color;
				}
			}

			return sty;
		}
	},

	methods: {
		btnClick: function btnClick(evt) {
			if (!this.disabled) {
				this.$emit('buttonClicked', evt);
			}
		}
	},

	mounted: function mounted() {
		var _this = this;

		setTimeout(function () {
			dom.getComponentRect(_this.$refs.text, function (option) {
				if (option.size.width >= 240) {
					_this.max = true;
				}
			});
		}, 50);
	}
};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["fm-btn-wrap"],
    style: _vm.btnStyle,
    on: {
      "click": _vm.btnClick
    }
  }, [_c('text', {
    ref: "text",
    staticClass: ["fm-btn"],
    class: _vm.btnClz,
    style: _vm.textStyle
  }, [_vm._v(_vm._s(_vm.text))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(50);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(51)
)

/* script */
__vue_exports__ = __webpack_require__(52)

/* template */
var __vue_template__ = __webpack_require__(53)
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
/* 51 */
/***/ (function(module, exports) {

module.exports = {
  "fm-wrapper": {
    "paddingTop": 72,
    "paddingRight": 48,
    "paddingLeft": 48
  },
  "fm-textarea": {
    "paddingBottom": 27,
    "paddingLeft": 24,
    "borderBottomStyle": "solid",
    "borderBottomWidth": 3,
    "borderBottomColor": "#e6e6e6",
    "fontSize": 48,
    "color": "#000000",
    "placeholderColor": "#dddddd",
    "caretColor": "#198ded",
    "borderBottomColor:focus": "#198ded"
  },
  "fm-input-wrap": {
    "position": "relative"
  },
  "delete": {
    "position": "absolute",
    "top": 69,
    "right": 72,
    "width": 60,
    "height": 60,
    "paddingTop": 6,
    "paddingRight": 6,
    "paddingBottom": 6,
    "paddingLeft": 6,
    "backgroundColor": "rgba(0,0,0,0.2)",
    "borderRadius": 30
  },
  "visible": {
    "position": "absolute",
    "top": 63,
    "right": 72,
    "width": 72,
    "height": 72
  },
  "fm-textarea-error": {
    "borderBottomColor": "#df2b18"
  },
  "error-msg": {
    "fontSize": 36,
    "color": "#df2b18",
    "marginLeft": 24
  }
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fmIcon = __webpack_require__(0);

var _fmIcon2 = _interopRequireDefault(_fmIcon);

var _locale = __webpack_require__(2);

var _locale2 = _interopRequireDefault(_locale);

var _locale3 = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'FmInput',
  mixins: [_locale2.default],
  components: { FmIcon: _fmIcon2.default },
  mounted: function mounted() {
    if (this.type === 'password') {
      this.pwdModel = true;
    }
    this.value = this.inputValue || '';
  },
  data: function data() {
    return {
      value: '',
      rows: 1,
      isFocus: false,
      pwdModel: false,
      pwdVisible: false
    };
  },

  watch: {
    inputValue: function inputValue(val) {
      this.value = val;
    }
  },
  props: {
    inputValue: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: function _default() {
        return (0, _locale3.t)('el.input.placeholder');
      }
    },
    maxlength: [String, Number],
    inputPattern: RegExp,
    inputErrorMessage: {
      type: String,
      default: '输入有误'
    },
    type: String,
    autofocus: Boolean,
    disabled: Boolean,
    returnKeyType: {
      type: String,
      default: 'default'
    },
    nightMode: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    visibleValue: function visibleValue() {
      return this.type === 'password' ? '&#xe6a9;' : '&#xe6e8;';
    },
    inputClz: function inputClz() {
      var clz = ['fm-textarea'];
      if (this.hasError) {
        clz.push('fm-textarea-error');
      }
      return clz;
    },
    inputStyle: function inputStyle() {
      var style = { paddingRight: 24 };
      if (this.delShow || this.visibleShow) {
        style.paddingRight = 108;
      }
      return style;
    },
    delShow: function delShow() {
      return !this.pwdModel && this.isFocus && this.value;
    },
    visibleShow: function visibleShow() {
      return this.isFocus && this.pwdModel;
    },
    hasError: function hasError() {
      var inputPattern = this.inputPattern,
          value = this.value;

      if (inputPattern) {
        if (!value.match(inputPattern)) {
          return true;
        }
        return false;
      }
      return false;
    }
  },
  methods: {
    delClick: function delClick(e) {
      this.value = '';
    },
    toggleVisible: function toggleVisible(e) {
      this.pwdVisible ? this.$refs.input.setType('password') : this.$refs.input.setType('visible');
      this.pwdVisible = !this.pwdVisible;
      // if (this.type === 'password') {
      // 	this.type = 'text'
      // } else {
      // 	this.type = 'password'
      // }
    },
    input: function input(evt) {
      this.value = evt.value;
      this.$emit('input', evt);
    },
    change: function change(evt) {
      this.$emit('change', evt);
    },
    beFocus: function beFocus(evt) {
      this.isFocus = true;
      this.$emit('focus', evt);
    },
    beBlur: function beBlur(evt) {
      this.isFocus = false;
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
    },
    setValue: function setValue(value) {
      this.value = value;
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

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["fm-wrapper"]
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
    style: _vm.inputStyle,
    attrs: {
      "type": _vm.type,
      "value": _vm.value,
      "maxlength": _vm.maxlength,
      "placeholder": _vm.placeholder,
      "autofocus": _vm.autofocus,
      "disabled": _vm.disabled,
      "returnKeyType": _vm.returnKeyType,
      "nightMode": _vm.nightMode
    },
    on: {
      "input": _vm.input,
      "change": _vm.change,
      "focus": _vm.beFocus,
      "blur": _vm.beBlur
    }
  }), (_vm.delShow) ? _c('fm-icon', {
    staticClass: ["delete"],
    attrs: {
      "value": "&#xe6c0;",
      "iconStyle": 48,
      "color": "#fff"
    },
    on: {
      "fmClick": _vm.delClick
    }
  }) : _vm._e(), (_vm.visibleShow) ? _c('fm-icon', {
    staticClass: ["visible"],
    attrs: {
      "value": _vm.visibleValue,
      "iconStyle": 72,
      "color": "#666"
    },
    on: {
      "fmClick": _vm.toggleVisible
    }
  }) : _vm._e(), (_vm.hasError) ? _c('text', {
    staticClass: ["error-msg"]
  }, [_vm._v(_vm._s(_vm.inputErrorMessage))]) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(55);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(56)
)

/* script */
__vue_exports__ = __webpack_require__(57)

/* template */
var __vue_template__ = __webpack_require__(58)
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
/* 56 */
/***/ (function(module, exports) {

module.exports = {
  "header-wrap": {
    "marginTop": "27",
    "marginRight": "66",
    "marginLeft": "66"
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
    "fontSize": "42",
    "fontWeight": "700",
    "textAlign": "center",
    "color": "#666666"
  },
  "bottom-line": {
    "height": "7.2",
    "marginTop": "27",
    "backgroundColor": "#f34949"
  },
  "slider-wrap": {
    "flexDirection": "row",
    "borderTopWidth": "3",
    "borderColor": "#dddddd"
  }
}

/***/ }),
/* 57 */
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

var dom = weex.requireModule('dom');
var animation = weex.requireModule('animation');

exports.default = {
  name: 'FmTabView',
  data: function data() {
    return {
      width: 0, // 单个tab宽度
      min: 0,
      transX: 0,
      startX: 0,
      moveX: 0,
      current: 0, // 当前tab index
      lineWidth: 0, // 标题下划线宽度
      lineLeft: 0,
      line: 0 // 标题下划线translate计算比例
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
        width: (this.width || 1080) + 'px'
      };
    }
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      var platform = weex.config.env.platform;

      var head = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && platform.toLowerCase() === 'web' ? _this.$refs.header.$children[0].$children[0] : _this.$refs.header.children[0].children[0];
      dom.getComponentRect(head, function (opt) {
        _this.lineWidth = opt.size.width + 36;
        _this.lineLeft = opt.size.left - 66 - 18;
      });
      dom.getComponentRect(_this.$refs.slider, function (opt) {
        _this.width = opt.size.width;
        _this.line = _this.width / (_this.width - 132) * _this.items.length;
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

      if (decimal > 0.2 && direct) {
        int = Math.min(0, int + 1);
      } else if (decimal < -0.2 && !direct) {
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
/* 58 */
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
      key: idx,
      staticClass: ["body"],
      style: _vm.itemStyle
    }, [_vm._t(item.name)], 2)
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(60);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(61)
)

/* script */
__vue_exports__ = __webpack_require__(62)

/* template */
var __vue_template__ = __webpack_require__(63)
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
/* 61 */
/***/ (function(module, exports) {

module.exports = {
  "tip-wrap": {
    "flexDirection": "row",
    "height": "120",
    "paddingTop": "21.6"
  },
  "arrow": {
    "position": "absolute",
    "top": "10.8",
    "width": "21.6",
    "height": "21.6",
    "transform": "rotate(45deg)"
  },
  "content-wrap": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": "27",
    "paddingBottom": "27",
    "paddingLeft": "30",
    "borderRadius": "6"
  },
  "content": {
    "height": "51",
    "maxWidth": "678",
    "fontSize": "42",
    "color": "#ffffff"
  },
  "split": {
    "width": "3",
    "height": "42",
    "marginLeft": "27",
    "backgroundColor": "#ffffff",
    "opacity": 0.4
  },
  "close": {
    "color": "#ffffff",
    "fontSize": "54",
    "marginTop": "9",
    "marginLeft": "30",
    "marginRight": "30"
  }
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _fmIcon = __webpack_require__(0);

var _fmIcon2 = _interopRequireDefault(_fmIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	name: 'FmTips',
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
/* 63 */
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
      "fmClick": _vm.close
    }
  })], 2), _c('text', {
    staticClass: ["arrow"],
    style: _vm.arrowStyle
  })]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(65);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(66)
)

/* script */
__vue_exports__ = __webpack_require__(67)

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
/* 66 */
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
    "fontSize": "36",
    "lineHeight": "48"
  }
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(9);

var _utils2 = _interopRequireDefault(_utils);

var _fmText = __webpack_require__(3);

var _fmText2 = _interopRequireDefault(_fmText);

var _fmIcon = __webpack_require__(0);

var _fmIcon2 = _interopRequireDefault(_fmIcon);

var _fmTag = __webpack_require__(4);

var _fmTag2 = _interopRequireDefault(_fmTag);

var _fmRichTextLink = __webpack_require__(68);

var _fmRichTextLink2 = _interopRequireDefault(_fmRichTextLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'FmRichText',
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
      return _utils2.default.isNonEmptyArray(this.configList);
    },
    isString: function isString() {
      return _utils2.default.isString(this.configList);
    }
  },
  methods: {
    linkBeClick: function linkBeClick(obj) {
      this.$emit('linkBeClick', obj);
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

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(69)

/* template */
var __vue_template__ = __webpack_require__(70)
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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fmText = __webpack_require__(3);

var _fmText2 = _interopRequireDefault(_fmText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
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
}; //
//
//
//
//
//
//
//
//

/***/ }),
/* 70 */
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
/* 71 */
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

/* styles */
__vue_styles__.push(__webpack_require__(74)
)

/* script */
__vue_exports__ = __webpack_require__(75)

/* template */
var __vue_template__ = __webpack_require__(76)
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
/* 74 */
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
    "fontSize": "36",
    "lineHeight": "48"
  }
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _utils = __webpack_require__(9);

var _utils2 = _interopRequireDefault(_utils);

var _fmText = __webpack_require__(3);

var _fmText2 = _interopRequireDefault(_fmText);

var _fmIcon = __webpack_require__(0);

var _fmIcon2 = _interopRequireDefault(_fmIcon);

var _fmTag = __webpack_require__(4);

var _fmTag2 = _interopRequireDefault(_fmTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'FmSpecialRichText',
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

      if (_utils2.default.isNonEmptyArray(configList) && configList.length === 2) {
        var r1 = configList[0];
        var r2 = configList[1];
        var iconStyle = r1.style;
        var textStyle = r2.style;
        var style = {};
        var fontSize = 36;
        var tagWidth = iconStyle && iconStyle.width ? iconStyle.width : 36;

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
      if (_utils2.default.isNonEmptyArray(configList) && configList.length === 2) {
        var iconStyle = configList[0].style;
        var textStyle = configList[1].style;
        var fontSize = 36;
        var tagHeight = iconStyle && iconStyle.height ? iconStyle.height : 39;
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
/* 76 */
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(78);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(79)
)

/* script */
__vue_exports__ = __webpack_require__(80)

/* template */
var __vue_template__ = __webpack_require__(81)
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
/* 79 */
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
    "fontSize": "36",
    "lineHeight": "42"
  },
  "text_large": {
    "fontFamily": "sans-serif-medium",
    "fontWeight": "500",
    "fontSize": "48",
    "lineHeight": "72"
  },
  "text_huge": {
    "fontFamily": "sans-serif-medium",
    "fontWeight": "500",
    "fontSize": "54",
    "lineHeight": "78"
  },
  "more": {
    "position": "absolute",
    "right": "18",
    "bottom": 0,
    "fontFamily": "sans-serif-medium",
    "fontWeight": "500"
  },
  "test": {
    "flexDirection": "row"
  }
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _locale = __webpack_require__(2);

var _locale2 = _interopRequireDefault(_locale);

var _locale3 = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'FmFoldableText',
    mixins: [_locale2.default],
    data: function data() {
        return {
            expandHeight: '',
            unexpandHeight: '',
            animationHeight: '',
            foldText: '',
            foldable: true
        };
    },

    props: {
        width: {
            type: Number,
            default: 1020
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
            default: function _default() {
                return (0, _locale3.t)('el.foldabletext.more');
            }
        }
    },
    mounted: function mounted() {
        if (this.foldText === '') {
            var textStyle = this.textStyle;

            var fontSize = textStyle && textStyle.fontSize ? textStyle.fontSize : this.large ? 48 : this.huge ? 54 : 36;
            // 计算折叠后的文本
            var size1 = fontSize + 36 * 0.04; // 汉字
            var size2 = fontSize * 0.56; // 英文
            var size3 = fontSize * 0.556; // 数字
            var size4 = fontSize * 0.80; // 全角
            var size5 = fontSize * 0.2; // 半角
            var tSize = 0,
                tmpStr = '';
            var hideWidth = this.width * this.lines + fontSize; // 不显示“更多”情况下所能容纳最大的字体宽度
            var maxWith = this.width * this.lines - size1 * this.tipValue.length; // 显示“更多”情况下所能容纳最大的字体宽度
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
                        if (tSize >= hideWidth) {
                            tmpStr += '..';
                            break;
                        }
                    } else {
                        tmpStr += c;
                    }
                }
                // 文字不超过范围 不折叠
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

            tSize < hideWidth && (this.foldable = false) && (this.folded = false);
            this.foldText = tmpStr;
        }
    },

    computed: {
        getText: function getText() {
            return this.folded && this.foldable ? this.foldText : this.text;
        },
        planeStyle: function planeStyle() {
            return {
                width: this.width
            };
        },
        moreStyle: function moreStyle() {
            return _extends({
                fontSize: this.large ? 48 : this.huge ? 54 : 36,
                lineHeight: this.large ? 72 : this.huge ? 78 : 42,
                color: '#198ded',
                fontWeight: '600'
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
            this.foldable && (this.folded = !this.folded);
        }
    }
};

/***/ }),
/* 81 */
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
  }, [_vm._v(_vm._s(_vm.getText))]), (_vm.foldable && _vm.folded) ? _c('text', {
    ref: "more",
    staticClass: ["more"],
    style: _vm.moreStyle
  }, [_vm._v(_vm._s(_vm.tipValue))]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(83)

/* template */
var __vue_template__ = __webpack_require__(84)
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
/* 83 */
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

exports.default = {
    name: 'FmImage',
    data: function data() {
        return {
            loaded: false
        };
    },
    props: {
        src: {
            type: String,
            default: ''
        },
        scale: {
            type: Number,
            default: 0
        },
        width: {
            type: Number,
            default: 1
        },
        height: {
            type: Number,
            default: 1
        },
        occupyingColor: {
            type: Number,
            default: 'transparent'
        },
        imgStyle: {
            type: Object
        }
    },
    computed: {
        getStyle: function getStyle() {
            return _extends({
                width: this.width,
                height: this.height,
                backgroundColor: this.loaded ? 'transparent' : this.occupyingColor
            }, this.imgStyle);
        }
    },
    methods: {
        onLoad: function onLoad(e) {
            e.success && (this.loaded = true);
            if (e.success && e.size && e.size.naturalWidth > 0 && this.scale) {
                this.width = e.size.naturalWidth * this.scale;
                this.height = e.size.naturalHeight * this.scale;
            }
        }
    }
};

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('image', {
    ref: "img",
    style: _vm.getStyle,
    attrs: {
      "src": _vm.src
    },
    on: {
      "load": _vm.onLoad
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(86)
)

/* script */
__vue_exports__ = __webpack_require__(87)

/* template */
var __vue_template__ = __webpack_require__(88)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-overlay/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-62a3cf0e"
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
/* 86 */
/***/ (function(module, exports) {

module.exports = {
  "fm-overlay": {
    "width": 1080,
    "position": "fixed",
    "left": 0,
    "top": 0,
    "bottom": 0,
    "right": 0
  }
}

/***/ }),
/* 87 */
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

var animation = weex.requireModule('animation');
exports.default = {
  name: 'FmOverlay',
  props: {
    show: {
      type: Boolean,
      default: true
    },
    hasAnimation: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    timingFunction: {
      type: Array,
      default: function _default() {
        return ['ease-in', 'ease-out'];
      }
    },
    opacity: {
      type: [Number, String],
      default: 0.5
    },
    canAutoClose: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    overlayStyle: function overlayStyle() {
      return {
        opacity: this.hasAnimation ? 0 : 1,
        backgroundColor: 'rgba(0, 0, 0,' + this.opacity + ')'
      };
    },
    shouldShow: function shouldShow() {
      var _this = this;

      var show = this.show,
          hasAnimation = this.hasAnimation;

      hasAnimation && setTimeout(function () {
        _this.appearOverlay(show);
      }, 50);
      return show;
    }
  },
  methods: {
    overlayClicked: function overlayClicked(e) {
      this.canAutoClose ? this.appearOverlay(false) : this.$emit('fmOverlayBodyClicked', {});
    },
    appearOverlay: function appearOverlay(bool) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.duration;
      var hasAnimation = this.hasAnimation,
          timingFunction = this.timingFunction,
          canAutoClose = this.canAutoClose;

      var needEmit = !bool && canAutoClose;
      needEmit && this.$emit('fmOverlayBodyClicking', {});
      var overlayEl = this.$refs['fm-overlay'];
      if (hasAnimation && overlayEl) {
        animation.transition(overlayEl, {
          styles: {
            opacity: bool ? 1 : 0
          },
          duration: duration,
          timingFunction: timingFunction[bool ? 0 : 1],
          delay: 0
        }, function () {
          needEmit && _this2.$emit('fmOverlayBodyClicked', {});
        });
      } else {
        needEmit && this.$emit('fmOverlayBodyClicked', {});
      }
    },
    hide: function hide() {
      this.appearOverlay(false);
    }
  }
};

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.show) ? _c('div', {
    ref: "fm-overlay",
    staticClass: ["fm-overlay"],
    style: _vm.overlayStyle,
    attrs: {
      "watch": _vm.shouldShow
    },
    on: {
      "click": _vm.overlayClicked
    }
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(90)
)

/* script */
__vue_exports__ = __webpack_require__(91)

/* template */
var __vue_template__ = __webpack_require__(96)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-dialog/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7d902260"
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
/* 90 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "position": "fixed",
    "width": "1080",
    "zIndex": 99999
  },
  "dialog-box": {
    "position": "fixed",
    "left": "72",
    "width": "936",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "10",
    "boxShadow": "0 0 30px 0 rgba(0, 0, 0, 0.3)"
  },
  "content-title": {
    "marginTop": "63",
    "paddingLeft": "72",
    "paddingRight": "72",
    "marginBottom": "18"
  },
  "content-subtext": {
    "paddingLeft": "72",
    "paddingRight": "72"
  },
  "dialog-footer": {
    "justifyContent": "center",
    "alignItems": "center",
    "flexWrap": "wrap",
    "paddingTop": "36",
    "paddingRight": 0,
    "paddingBottom": "36",
    "paddingLeft": 0
  }
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fmOverlay = __webpack_require__(6);

var _fmOverlay2 = _interopRequireDefault(_fmOverlay);

var _fmText = __webpack_require__(3);

var _fmText2 = _interopRequireDefault(_fmText);

var _fmSimpleBtn = __webpack_require__(7);

var _fmSimpleBtn2 = _interopRequireDefault(_fmSimpleBtn);

var _locale = __webpack_require__(2);

var _locale2 = _interopRequireDefault(_locale);

var _locale3 = __webpack_require__(1);

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
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
var type_alert = 'alert';
var type_confirm = 'confirm';
exports.default = {
  name: 'FmDialog',
  mixins: [_locale2.default],
  components: { FmOverlay: _fmOverlay2.default, FmText: _fmText2.default, FmSimpleBtn: _fmSimpleBtn2.default },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    top: {
      type: Number,
      default: 400
    },
    cancelText: {
      type: String,
      default: function _default() {
        return (0, _locale3.t)('el.common.cancel');
      }
    },
    confirmText: {
      type: String,
      default: function _default() {
        return (0, _locale3.t)('el.common.confirm');
      }
    },
    confirmColor: {
      type: String,
      default: '#198DED'
    },
    cancelColor: {
      type: String,
      default: '#198DED'
    },
    hasAnimation: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    timingFunction: {
      type: Array,
      default: function _default() {
        return ['ease-out', 'ease-out'];
      }
    },
    canAutoClose: {
      type: Boolean,
      default: true
    },
    btns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    btnDirection: {
      type: String,
      default: 'row'
    },
    cancelCb: Function,
    confirmCb: Function,
    type: {
      type: String,
      default: type_confirm
    },
    overlayOpacity: {
      type: Number,
      default: 0.5
    }
  },
  data: function data() {
    return {
      pageHeight: 1334,
      self_show: false,
      dialogOpacity: 0
    };
  },
  created: function created() {
    var _weex$config$env = weex.config.env,
        deviceHeight = _weex$config$env.deviceHeight,
        deviceWidth = _weex$config$env.deviceWidth;

    this.pageHeight = deviceHeight / deviceWidth * 1080;
    this.self_show = this.show;
  },

  watch: {
    show: function show(val, oldVal) {
      var _this = this;

      if (val) {
        this.self_show = true;
        setTimeout(function () {
          _this.appearDialog(true);
        }, 50);
      } else {
        this.$refs['fm-overlay'].hide();
        this.appearDialog(false);
      }
    }
  },
  computed: {
    dialogBtns: function dialogBtns() {
      var btns = [];
      if (!this.btns || !this.btns.length) {
        if (this.type === type_alert) {
          btns = [{
            text: this.confirmText,
            color: this.confirmColor,
            type: 'confirm'
          }];
        } else if (this.type === type_confirm) {
          btns = [{
            text: this.cancelText,
            color: this.cancelColor,
            type: 'cancel'
          }, {
            text: this.confirmText,
            color: this.confirmColor,
            type: 'confirm'
          }];
        }
      } else {
        btns = btns.concat(this.btns);
      }
      return btns;
    },
    dialogStyle: function dialogStyle() {
      return {
        opacity: this.dialogOpacity,
        top: this.top
      };
    },
    btnStyle: function btnStyle() {
      var btnDirection = this.btnDirection,
          btns = this.btns;

      return {
        flexDirection: btns.length > 2 ? 'column' : btnDirection
      };
    }
  },
  methods: {
    handleTouchEnd: function handleTouchEnd(e) {
      // 原生上有点击穿透问题
      e.preventDefault && e.preventDefault();
    },
    overlayClicked: function overlayClicked() {
      this.canAutoClose && (this.appearDialog(false) || this.$emit('fmDialogOverlayClicked', {}));
      this.cancelCb && this.cancelCb();
    },
    btnClick: function btnClick(btn) {
      if (btn.type && btn.type === 'cancel') {
        this.$emit('fmDialogBtnClicked', { type: 'cancel' });
        this.cancelCb && this.cancelCb();
      } else if (btn.type && btn.type === 'confirm') {
        this.$emit('fmDialogBtnClicked', { type: 'confirm' });
        this.confirmCb && this.confirmCb();
      } else {
        this.$emit('fmDialogBtnClicked', btn);
      }
    },
    appearDialog: function appearDialog(bool) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.duration;
      var hasAnimation = this.hasAnimation,
          timingFunction = this.timingFunction;

      var dialogEl = this.$refs['dialog-box'];
      this.dialogOpacity = bool ? 0 : 1;
      if (hasAnimation && dialogEl) {
        animation.transition(dialogEl, {
          styles: {
            opacity: bool ? 1 : 0
          },
          duration: duration,
          timingFunction: timingFunction[bool ? 0 : 1],
          delay: 0
        }, function () {
          _this2.self_show = bool;
          _this2.dialogOpacity = bool ? 1 : 0;
        });
      } else {
        this.self_show = bool;
        this.dialogOpacity = bool ? 1 : 0;
      }
    }
  }
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(93)
)

/* script */
__vue_exports__ = __webpack_require__(94)

/* template */
var __vue_template__ = __webpack_require__(95)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-simple-btn/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-71bcd719"
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
/* 93 */
/***/ (function(module, exports) {

module.exports = {
  "dialog-btn": {
    "flex": 1,
    "paddingLeft": "48",
    "paddingRight": "48"
  },
  "btnText": {
    "fontFamily": "sans-serif-medium",
    "fontWeight": "500",
    "fontSize": "48",
    "color": "#198ded",
    "textAlign": "center"
  },
  "dialog-btnText": {
    "paddingTop": "36",
    "paddingRight": "36",
    "paddingBottom": "36",
    "paddingLeft": "36"
  },
  "actionSheet-btnText": {
    "lineHeight": "192",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1",
    "borderBottomColor": "#E6E6E6"
  }
}

/***/ }),
/* 94 */
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

exports.default = {
	name: 'FmSimpleBtn',
	props: {
		text: String,
		type: String,
		color: String,
		msg: [String, Number, Array, Object],
		scene: {
			type: String,
			defalut: 'dialog'
		}
	},
	computed: {
		btnClz: function btnClz() {
			var clz = ['btnText'];
			if (this.scene === 'dialog') {
				clz.push('dialog-btnText');
			} else if (this.scene === 'actionSheet') {
				clz.push('actionSheet-btnText');
			}
			return clz;
		},
		btnStyle: function btnStyle() {
			var color = this.color;

			if (color) {
				return {
					color: color
				};
			}
		}
	},
	methods: {
		click: function click() {
			var text = this.text,
			    msg = this.msg,
			    type = this.type;

			this.$emit('click', { text: text, type: type, msg: msg });
		}
	}
};

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["dialog-btn"]
  }, [_c('text', {
    class: _vm.btnClz,
    style: _vm.btnStyle,
    on: {
      "click": function($event) {
        _vm.click()
      }
    }
  }, [_vm._v(_vm._s(_vm.text))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [(_vm.self_show) ? _c('fm-overlay', {
    ref: "fm-overlay",
    attrs: {
      "hasAnimation": true,
      "canAutoClose": false,
      "opacity": _vm.overlayOpacity
    },
    on: {
      "fmOverlayBodyClicked": _vm.overlayClicked
    }
  }) : _vm._e(), (_vm.self_show) ? _c('div', {
    ref: "dialog-box",
    staticClass: ["dialog-box"],
    style: _vm.dialogStyle,
    on: {
      "touchend": _vm.handleTouchEnd
    }
  }, [_c('div', {
    staticClass: ["dialog-content"]
  }, [_vm._t("title", [_c('fm-text', {
    staticClass: ["content-title"],
    attrs: {
      "medium": "",
      "title": ""
    }
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._t("content", [_c('fm-text', {
    staticClass: ["content-subtext"]
  }, [_vm._v(_vm._s(_vm.content))])])], 2), _c('div', {
    staticClass: ["dialog-footer"],
    style: _vm.btnStyle
  }, [_vm._t("btn-group", _vm._l((_vm.dialogBtns), function(btn, index) {
    return _c('fm-simple-btn', _vm._b({
      key: index,
      attrs: {
        "scene": "dialog"
      },
      on: {
        "click": _vm.btnClick
      }
    }, 'fm-simple-btn', btn, false))
  }))], 2)]) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alert = exports.confirm = undefined;

var _fmDialog = __webpack_require__(10);

var _fmDialog2 = _interopRequireDefault(_fmDialog);

var _locale = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VCDialog = Vue.extend(_fmDialog2.default);
var VC_DIALOG = new VCDialog().$mount();

function dialog(options) {
  VC_DIALOG.show = true;
  VC_DIALOG.title = options.title;
  VC_DIALOG.content = options.content;
  VC_DIALOG.type = options.type;
  VC_DIALOG.canAutoClose = options.canAutoClose;
  options.cancelText && (VC_DIALOG.cancelText = options.cancelText);
  options.confirmText && (VC_DIALOG.confirmText = options.confirmText);
  VC_DIALOG.cancelCb = options.cancelCb;
  VC_DIALOG.confirmCb = options.confirmCb;
}

var added = false;
function addDialog() {
  if (!added) {
    if (weex.config.env.platform === 'Web') {
      document.body.appendChild(VC_DIALOG.$el);
    } else {
      weex.document.body.appendChild(VC_DIALOG.$el);
    }
    added = true;
  }
}

var noop = function noop() {};
function resetDialog() {
  VC_DIALOG.show = false;
  VC_DIALOG.cancelCb = noop;
  VC_DIALOG.confirmCb = noop;
  setTimeout(function () {
    VC_DIALOG.title = '';
    VC_DIALOG.content = '';
    VC_DIALOG.canAutoClose = true;
    VC_DIALOG.type = 'alert';
    VC_DIALOG.cancelText = (0, _locale.t)('el.common.cancel');
    VC_DIALOG.confirmText = (0, _locale.t)('el.common.confirm');
  }, 300);
}

function confirm(options) {
  addDialog();
  return new Promise(function (resolve, reject) {
    dialog({
      title: options.title,
      content: options.message,
      type: 'confirm',
      cancelText: options.cancelText,
      confirmText: options.confirmText,
      cancelCb: function cancelCb() {
        resetDialog();
        reject();
      },
      confirmCb: function confirmCb() {
        resetDialog();
        resolve();
      }
    });
  });
}

function alert(options) {
  addDialog();
  return new Promise(function (resolve, reject) {
    dialog({
      title: options.title,
      content: options.message,
      type: 'alert',
      confirmText: options.confirmText,
      cancelCb: function cancelCb() {
        resetDialog();
        reject();
      },
      confirmCb: function confirmCb() {
        resetDialog();
        resolve();
      }
    });
  });
}

exports.confirm = confirm;
exports.alert = alert;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(99)
)

/* script */
__vue_exports__ = __webpack_require__(100)

/* template */
var __vue_template__ = __webpack_require__(101)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-popup/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1efac52a"
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
/* 99 */
/***/ (function(module, exports) {

module.exports = {
  "fm-popup": {
    "position": "fixed",
    "width": "1080"
  },
  "top": {
    "left": 0,
    "right": 0
  },
  "bottom": {
    "left": 0,
    "right": 0
  },
  "left": {
    "bottom": 0,
    "top": 0
  },
  "right": {
    "bottom": 0,
    "top": 0
  }
}

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _fmOverlay = __webpack_require__(6);

var _fmOverlay2 = _interopRequireDefault(_fmOverlay);

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

var animation = weex.requireModule('animation');
var platform = weex.config.env.platform;

var isWeb = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && platform.toLowerCase() === 'web';
exports.default = {
  name: 'FmPopup',
  components: { FmOverlay: _fmOverlay2.default },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    pos: {
      type: String,
      default: 'bottom'
    },
    popupColor: {
      type: String,
      default: '#FFFFFF'
    },
    overlayCfg: {
      type: Object,
      default: function _default() {
        return {
          hasAnimation: true,
          timingFunction: ['ease-in', 'ease-out'],
          duration: 300,
          opacity: 0.5
        };
      }
    },
    height: {
      type: [Number, String],
      default: 840
    },
    standOut: {
      type: [Number, String],
      default: 0
    },
    width: {
      type: [Number, String],
      default: 1080
    },
    animation: {
      type: Object,
      default: function _default() {
        return {
          timingFunction: 'ease-out'
        };
      }
    }
  },
  data: function data() {
    return {
      haveOverlay: true,
      isOverShow: true
    };
  },
  computed: {
    isNeedShow: function isNeedShow() {
      var _this = this;

      setTimeout(function () {
        _this.appearPopup(_this.show);
      }, 50);
      return this.show;
    },
    _height: function _height() {
      this.appearPopup(this.show, 150);
      return this.height;
    },
    transformValue: function transformValue() {
      return this.getTransform(this.pos, this.width, this.height, true);
    },
    padStyle: function padStyle() {
      var pos = this.pos,
          width = this.width,
          height = this.height,
          popupColor = this.popupColor;

      var style = {
        width: width + 'px',
        backgroundColor: popupColor
      };
      pos === 'top' && (style = _extends({}, style, {
        top: -height + 'px',
        height: height + 'px'
      }));
      pos === 'bottom' && (style = _extends({}, style, {
        bottom: -height + 'px',
        height: height + 'px'
      }));
      pos === 'left' && (style = _extends({}, style, {
        left: -width + 'px'
      }));
      pos === 'right' && (style = _extends({}, style, {
        right: -width + 'px'
      }));
      return style;
    }
  },
  methods: {
    handleTouchEnd: function handleTouchEnd(e) {
      var platform = weex.config.env.platform;

      platform === 'Web' && e.preventDefault && e.preventDefault();
    },
    hide: function hide() {
      this.appearPopup(false);
      this.$refs.overlay.appearOverlay(false);
    },
    fmOverlayBodyClicking: function fmOverlayBodyClicking() {
      this.isShow && this.appearPopup(false);
    },
    appearPopup: function appearPopup(bool) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

      this.isShow = bool;
      var popupEl = this.$refs['fm-popup'];
      if (!popupEl) {
        return;
      }
      animation.transition(popupEl, _extends({
        styles: {
          transform: this.getTransform(this.pos, this.width, this.height, !bool)
        },
        duration: duration,
        delay: 0
      }, this.animation), function () {
        if (!bool) {
          _this2.$emit('fmPopupOverlayClicked', { pos: _this2.pos });
        }
      });
    },
    getTransform: function getTransform(pos, width, height, bool) {
      var _size = pos === 'top' || pos === 'bottom' ? height : width;
      var _transform = void 0;
      if (isWeb) {
        _size -= this.standOut;
      }
      bool && (_size = 0);
      switch (pos) {
        case 'top':
          _transform = 'translateY(' + _size + 'px)';
          break;
        case 'bottom':
          _transform = 'translateY(-' + _size + 'px)';
          break;
        case 'left':
          _transform = 'translateX(' + _size + 'px)';
          break;
        case 'right':
          _transform = 'translateX(-' + _size + 'px)';
          break;
      }
      return _transform;
    }
  }
};

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    on: {
      "touchend": _vm.handleTouchEnd
    }
  }, [(_vm.show) ? _c('fm-overlay', _vm._b({
    ref: "overlay",
    attrs: {
      "show": _vm.haveOverlay && _vm.isOverShow
    },
    on: {
      "fmOverlayBodyClicking": _vm.fmOverlayBodyClicking
    }
  }, 'fm-overlay', _vm.overlayCfg, false)) : _vm._e()], 1), (_vm.show) ? _c('div', {
    ref: "fm-popup",
    class: ['fm-popup', _vm.pos],
    style: _vm.padStyle,
    attrs: {
      "height": _vm._height,
      "hack": _vm.isNeedShow
    },
    on: {
      "click": function () {}
    }
  }, [_vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(103);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(104)
)

/* script */
__vue_exports__ = __webpack_require__(105)

/* template */
var __vue_template__ = __webpack_require__(106)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-action-sheet/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-87819b40"
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
/* 104 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fmPopup = __webpack_require__(11);

var _fmPopup2 = _interopRequireDefault(_fmPopup);

var _fmSimpleBtn = __webpack_require__(7);

var _fmSimpleBtn2 = _interopRequireDefault(_fmSimpleBtn);

var _locale = __webpack_require__(2);

var _locale2 = _interopRequireDefault(_locale);

var _locale3 = __webpack_require__(1);

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

exports.default = {
  name: 'FmActionSheet',
  mixins: [_locale2.default],
  components: { FmPopup: _fmPopup2.default, FmSimpleBtn: _fmSimpleBtn2.default },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    canAutoClose: {
      type: Boolean,
      default: true
    },
    confirmText: {
      type: String,
      default: function _default() {
        return (0, _locale3.t)('el.common.delete');
      }
    },
    confirmColor: {
      type: String,
      default: '#DE3938'
    },
    cancelText: {
      type: String,
      default: function _default() {
        return (0, _locale3.t)('el.common.cancel');
      }
    },
    actionBtns: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    overlayCfg: function overlayCfg() {
      var canAutoClose = this.canAutoClose;

      return {
        hasAnimation: true,
        timingFunction: ['ease-in', 'ease-out'],
        duration: 300,
        opacity: 0.5,
        canAutoClose: canAutoClose
      };
    },
    _height: function _height() {
      return 192.0 * this.btns.length;
    },
    btns: function btns() {
      var btns = [];
      if (!this.actionBtns || !this.actionBtns.length) {
        btns = [{
          text: this.confirmText,
          color: this.confirmColor,
          type: 'confirm'
        }, {
          text: this.cancelText,
          type: 'cancel'
        }];
      } else {
        btns = this.actionBtns.concat([{
          text: this.cancelText,
          type: 'cancel'
        }]);
      }
      return btns;
    }
  },
  methods: {
    popupOverlayClick: function popupOverlayClick() {
      this.canAutoClose && this.$emit('fmActionSheetOverlayClick', {});
    },
    btnClick: function btnClick(btn) {
      this.$refs['fm-popup'].hide();
      this.$emit('fmActionSheetBtnClicked', btn);
    }
  }
};

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('fm-popup', {
    ref: "fm-popup",
    attrs: {
      "haveOverlay": true,
      "popupColor": "#FFFFFF",
      "show": _vm.show,
      "overlayCfg": _vm.overlayCfg,
      "pos": "bottom",
      "height": _vm._height
    },
    on: {
      "fmPopupOverlayClicked": _vm.popupOverlayClick
    }
  }, _vm._l((_vm.btns), function(btn, index) {
    return _c('fm-simple-btn', {
      key: index,
      attrs: {
        "scene": "actionSheet",
        "color": btn.color,
        "text": btn.text,
        "type": btn.type,
        "msg": btn.msg
      },
      on: {
        "click": _vm.btnClick
      }
    })
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(108);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(109)
)

/* script */
__vue_exports__ = __webpack_require__(110)

/* template */
var __vue_template__ = __webpack_require__(111)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-cell/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0397b13a"
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
/* 109 */
/***/ (function(module, exports) {

module.exports = {
  "cell-wrapper": {
    "flexDirection": "row",
    "minHeight": "192",
    "paddingTop": 0,
    "paddingRight": "48",
    "paddingBottom": 0,
    "paddingLeft": "48"
  },
  "cell-wrapper-center": {
    "alignItems": "center"
  },
  "content": {
    "flex": 1,
    "flexDirection": "row",
    "paddingTop": "51",
    "paddingRight": 0,
    "paddingBottom": "51",
    "paddingLeft": 0,
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1",
    "borderBottomColor": "#E6E6E6"
  },
  "text": {
    "justifyContent": "center"
  },
  "content-min": {
    "height": "192"
  },
  "subTitle": {
    "lineHeight": "34",
    "marginTop": "18"
  },
  "description": {
    "lineHeight": "48",
    "marginTop": "12"
  },
  "cell-image": {
    "marginTop": "48",
    "marginRight": "48"
  },
  "cell-image-center": {
    "marginTop": 0
  },
  "img-avatar": {
    "borderRadius": "60"
  }
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fmText = __webpack_require__(3);

var _fmText2 = _interopRequireDefault(_fmText);

var _fmImage = __webpack_require__(5);

var _fmImage2 = _interopRequireDefault(_fmImage);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var SCENE_AVATAR = 'avatar';
var SCENE_ICON = 'icon';
var SCENE_SMALL = 'app-small';
var SCENE_BIG = 'app-big';

exports.default = {
  name: 'FmCell',
  components: { FmText: _fmText2.default, FmImage: _fmImage2.default },
  props: {
    title: String,
    subTitle: String,
    description: String,
    scene: {
      type: String,
      default: SCENE_AVATAR
    },
    imgSrc: String,
    occupyingColor: {
      type: String,
      default: '#EEEEEE'
    }
  },
  computed: {
    wrapperClz: function wrapperClz() {
      var clz = ['cell-wrapper'];
      var subTitle = this.subTitle,
          description = this.description,
          scene = this.scene;

      if (scene === SCENE_AVATAR && !subTitle && !description || scene === SCENE_ICON || scene === SCENE_SMALL || scene === SCENE_BIG) {
        clz.push('cell-wrapper-center');
      }
      return clz;
    },
    imgClz: function imgClz() {
      var clz = ['cell-image'];
      var subTitle = this.subTitle,
          description = this.description,
          scene = this.scene;

      if (!subTitle && !description || scene === SCENE_ICON || scene === SCENE_SMALL || scene === SCENE_BIG) {
        clz.push('cell-image-center');
      }
      return clz;
    },
    contentClz: function contentClz() {
      var clz = ['content'];
      var subTitle = this.subTitle,
          description = this.description;

      if (!subTitle && !description) {
        clz.push('content-min');
      }
      return clz;
    }
  }
};

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.wrapperClz
  }, [(_vm.imgSrc) ? _c('div', {
    class: _vm.imgClz
  }, [(_vm.scene === 'avatar') ? _c('fm-image', {
    staticClass: ["img-avatar"],
    attrs: {
      "src": _vm.imgSrc,
      "width": "120",
      "height": "120",
      "occupyingColor": _vm.occupyingColor
    }
  }) : (_vm.scene === 'icon') ? _c('fm-image', {
    staticClass: ["img-icon"],
    attrs: {
      "src": _vm.imgSrc,
      "width": "96",
      "height": "96",
      "occupyingColor": _vm.occupyingColor
    }
  }) : (_vm.scene === 'app-small') ? _c('fm-image', {
    staticClass: ["img-app-small"],
    attrs: {
      "src": _vm.imgSrc,
      "width": "135",
      "height": "135",
      "occupyingColor": _vm.occupyingColor
    }
  }) : (_vm.scene === 'app-big') ? _c('fm-image', {
    staticClass: ["img-app-big"],
    attrs: {
      "src": _vm.imgSrc,
      "width": "192",
      "height": "192",
      "occupyingColor": _vm.occupyingColor
    }
  }) : _vm._e()], 1) : _vm._e(), _c('div', {
    class: _vm.contentClz
  }, [_vm._t("left"), _c('div', {
    staticClass: ["text"]
  }, [_vm._t("title", [(_vm.title) ? _c('fm-text', {
    staticClass: ["title"],
    attrs: {
      "medium": "",
      "title": "",
      "textStyle": {
        lineHeight: 50
      }
    }
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e()]), (_vm.subTitle) ? _c('fm-text', {
    staticClass: ["subTitle"],
    attrs: {
      "small": ""
    }
  }, [_vm._v(_vm._s(_vm.subTitle))]) : _vm._e(), (_vm.description) ? _c('fm-text', {
    staticClass: ["description"]
  }, [_vm._v(_vm._s(_vm.description))]) : _vm._e()], 2), _vm._t("right")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(113);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(114)
)

/* script */
__vue_exports__ = __webpack_require__(115)

/* template */
var __vue_template__ = __webpack_require__(116)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-rater/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3d6886e0"
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
/* 114 */
/***/ (function(module, exports) {

module.exports = {
  "rater-wrap": {
    "position": "relative",
    "flexDirection": "row"
  },
  "rater-star": {
    "flexDirection": "row",
    "position": "absolute",
    "overflow": "hidden",
    "left": 0,
    "top": 0
  },
  "rater-star-bg": {
    "flexDirection": "row"
  },
  "rater-star-cover": {
    "position": "absolute",
    "overflow": "hidden",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0
  },
  "star_small": {
    "width": "30",
    "height": "30",
    "marginTop": 0,
    "marginRight": "3",
    "marginBottom": 0,
    "marginLeft": "3"
  },
  "star_big": {
    "width": "60",
    "height": "60",
    "marginTop": 0,
    "marginRight": "13",
    "marginBottom": 0,
    "marginLeft": "13"
  }
}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fmIcon = __webpack_require__(0);

var _fmIcon2 = _interopRequireDefault(_fmIcon);

var _fmImage = __webpack_require__(5);

var _fmImage2 = _interopRequireDefault(_fmImage);

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

var dom = weex.requireModule('dom');
exports.default = {
  name: 'FmRater',
  components: { FmIcon: _fmIcon2.default, FmImage: _fmImage2.default },
  props: {
    score: {
      type: Number,
      default: 5
    },
    fullScore: {
      type: Number,
      default: 10
    },
    size: {
      type: String,
      default: 'big'
    },
    theme: {
      type: String,
      default: 'normal'
    },
    canChange: {
      type: Boolean,
      default: true
    },
    canSlide: {
      type: Boolean,
      default: true
    },
    starImgs: {
      type: Array,
      default: ['https://raw.githubusercontent.com/Yanjiie/weex-flymeui/master/assets/star1.png', 'https://raw.githubusercontent.com/Yanjiie/weex-flymeui/master/assets/star2.png', 'https://raw.githubusercontent.com/Yanjiie/weex-flymeui/master/assets/star3.png', 'https://raw.githubusercontent.com/Yanjiie/weex-flymeui/master/assets/star4.png', 'https://raw.githubusercontent.com/Yanjiie/weex-flymeui/master/assets/star5.png']
    },
    starSpecialImg: {
      type: String,
      default: 'https://raw.githubusercontent.com/Yanjiie/weex-flymeui/master/assets/star_special.png'
    },
    starDarkImg: {
      type: String,
      default: 'https://raw.githubusercontent.com/Yanjiie/weex-flymeui/master/assets/star_dark.png'
    },
    starBgImg: {
      type: String,
      default: 'https://raw.githubusercontent.com/Yanjiie/weex-flymeui/master/assets/star_bg.png'
    },
    starDarkBgImg: {
      type: String,
      default: 'https://raw.githubusercontent.com/Yanjiie/weex-flymeui/master/assets/star_dark_bg.png'
    }
  },
  data: function data() {
    return {
      offset_left: 0,
      starCount: 5
    };
  },
  computed: {
    starClz: function starClz() {
      var clz = ['star'];
      this.size === 'big' ? clz.push('star_big') : clz.push('star_small');
      return clz;
    },
    wraperWidth: function wraperWidth() {
      var score = this.score,
          fullScore = this.fullScore,
          size = this.size;

      var half_star_width = size === 'big' ? 43 : 18;
      var percent = score / fullScore;
      var length = score <= 0 ? 0 : percent >= 1 ? 10 : percent.toFixed(1) * 10;
      length = length === NaN ? 0 : length;
      return !length ? {
        width: 1,
        opacity: 0
      } : {
        width: length * half_star_width,
        opacity: 1
      };
    },
    getImgs: function getImgs() {
      var theme = this.theme;

      if (theme === 'normal') {
        return this.starImgs;
      } else if (theme === 'special') {
        var arr = [];
        for (var i = 0; i < 5; i++) {
          arr.push(this.starSpecialImg);
        }
        return arr;
      } else if (theme === 'dark') {
        var _arr = [];
        for (var _i = 0; _i < 5; _i++) {
          _arr.push(this.starDarkImg);
        }
        return _arr;
      }
    },
    getBgImgs: function getBgImgs() {
      var theme = this.theme;

      if (theme === 'normal' || theme === 'special') {
        return this.starBgImg;
      } else if (theme === 'dark') {
        return this.starDarkBgImg;
      }
    }
  },
  methods: {
    raterTouchStart: function raterTouchStart(e) {
      var canChange = this.canChange,
          canSlide = this.canSlide;

      if (!canChange || !canSlide) return;
      this.calculateScore(e.changedTouches[0].pageX, true);
    },
    raterTouchmove: function raterTouchmove(e) {
      var canChange = this.canChange,
          canSlide = this.canSlide;

      if (!canChange || !canSlide) return;
      this.calculateScore(e.changedTouches[0].pageX, true);
    },
    raterTouchend: function raterTouchend(e) {
      var canChange = this.canChange;

      if (!canChange) return;
      this.calculateScore(e.changedTouches[0].pageX, true);
    },
    calculateScore: function calculateScore(pageX, needEmit) {
      var size = this.size,
          fullScore = this.fullScore;

      if (weex.config.env.platform === 'Web') {
        pageX = pageX * 2 / 750 * 1080 - this.offset_left;
      } else if (weex.config.env.platform === 'iOS') {
        pageX = pageX - this.offset_left;
      }
      var half_star_width = size === 'big' ? 43 : 18;
      var half_star_score = fullScore / 10;
      var star_num = (pageX / half_star_width).toFixed(0);
      var score_percent = star_num <= 0 ? 0 : star_num >= 10 ? 10 : star_num;
      this.score = score_percent * half_star_score;
      needEmit && this.$emit('fmRaterScoreChanged', { score: this.score });
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (weex.config.env.platform !== 'Android') {
      setTimeout(function () {
        dom.getComponentRect(_this.$refs.rater, function (option) {
          _this.offset_left = option.size.left;
        });
      }, 50);
    }
  }
};

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "rater",
    staticClass: ["rater-wrap"],
    on: {
      "touchstart": _vm.raterTouchStart,
      "touchmove": _vm.raterTouchmove,
      "touchend": _vm.raterTouchend
    }
  }, [_c('div', {
    staticClass: ["rater-star-bg"]
  }, [_c('image', {
    class: _vm.starClz,
    attrs: {
      "src": _vm.getBgImgs
    }
  }), _c('image', {
    class: _vm.starClz,
    attrs: {
      "src": _vm.getBgImgs
    }
  }), _c('image', {
    class: _vm.starClz,
    attrs: {
      "src": _vm.getBgImgs
    }
  }), _c('image', {
    class: _vm.starClz,
    attrs: {
      "src": _vm.getBgImgs
    }
  }), _c('image', {
    class: _vm.starClz,
    attrs: {
      "src": _vm.getBgImgs
    }
  })]), _c('div', {
    staticClass: ["rater-star"],
    style: _vm.wraperWidth
  }, _vm._l((_vm.getImgs), function(item, index) {
    return _c('image', {
      key: index,
      class: _vm.starClz,
      attrs: {
        "src": item
      }
    })
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(118)
)

/* script */
__vue_exports__ = __webpack_require__(119)

/* template */
var __vue_template__ = __webpack_require__(120)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-snack-bar/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-c22c29dc"
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
/* 118 */
/***/ (function(module, exports) {

module.exports = {
  "fm-snack-bar": {
    "position": "fixed",
    "left": 0,
    "right": 0,
    "backgroundColor": "#FFFFFF",
    "flexDirection": "row",
    "paddingTop": 0,
    "paddingRight": "72",
    "paddingBottom": 0,
    "paddingLeft": "72",
    "justifyContent": "space-between",
    "alignItems": "center",
    "minHeight": 0
  },
  "title": {
    "fontSize": "42",
    "fontFamily": "sans-serif-medium",
    "fontWeight": "500"
  },
  "closeText": {
    "fontSize": "42",
    "fontFamily": "sans-serif-medium",
    "fontWeight": "500"
  },
  "rotate": {
    "fontSize": "54",
    "fontWeight": "700",
    "transform": "rotate(180deg)"
  }
}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _fmIcon = __webpack_require__(0);

var _fmIcon2 = _interopRequireDefault(_fmIcon);

var _locale = __webpack_require__(2);

var _locale2 = _interopRequireDefault(_locale);

var _locale3 = __webpack_require__(1);

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

var animation = weex.requireModule('animation');
var platform = weex.config.env.platform;

var isWeb = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && platform.toLowerCase() === 'web';
exports.default = {
	name: 'FmSnackBar',
	mixins: [_locale2.default],
	components: { FmIcon: _fmIcon2.default },
	props: {
		show: {
			type: Boolean,
			default: false
		},
		backgroundColor: {
			type: String,
			default: '#323232'
		},
		title: String,
		titleColor: {
			type: String,
			default: '#FFFFFF'
		},
		closeText: {
			type: String,
			default: function _default() {
				return (0, _locale3.t)('el.common.close');
			}
		},
		closeColor: {
			type: String,
			default: '#198DED'
		},
		height: {
			type: Number,
			default: 144
		},
		animation: {
			type: Object,
			default: function _default() {
				return {
					timingFunction: 'ease-out'
				};
			}
		},
		autoClose: {
			type: Boolean,
			default: true
		},
		stayTime: {
			type: Number,
			default: 3000
		},
		type: {
			type: String,
			default: 'normal'
		},
		clickCb: Function,
		dismissCb: Function
	},
	computed: {
		barStyle: function barStyle() {
			var height = this.height,
			    backgroundColor = this.backgroundColor;

			return {
				backgroundColor: backgroundColor,
				bottom: -height + 'px',
				height: height + 'px'
			};
		},
		isNeedShow: function isNeedShow() {
			var _this = this;

			setTimeout(function () {
				_this.appearBar(_this.show);
			}, 50);
			return this.show;
		}
	},
	data: function data() {
		return {
			timer: null
		};
	},
	methods: {
		appearBar: function appearBar(bool) {
			var _this2 = this;

			var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 150;

			this.isShow = bool;
			var popupEl = this.$refs['fm-snack-bar'];
			if (!popupEl) {
				return;
			}
			animation.transition(popupEl, _extends({
				styles: {
					transform: this.getTransform(this.height, bool)
				},
				duration: duration,
				delay: 0
			}, this.animation), function () {
				var autoClose = _this2.autoClose,
				    stayTime = _this2.stayTime;

				if (bool && autoClose) {
					_this2.timer = setTimeout(function () {
						_this2.appearBar(false);
					}, stayTime);
				} else if (!bool) {
					_this2.dismissCb && _this2.dismissCb();
					_this2.$emit('fmSnackBarDismissed', { pos: _this2.pos });
				}
			});
		},
		getTransform: function getTransform(height, bool) {
			bool || (height = 0);
			return 'translateY(-' + height + 'px)';
		},
		hide: function hide() {
			if (this.timer) {
				clearTimeout(this.timer);
				this.timer = null;
			}
			this.appearBar(false);
		},
		ctrClick: function ctrClick() {
			this.clickCb && this.clickCb();
			this.hide();
		},
		snackClick: function snackClick() {
			var type = this.type;

			if (type === 'jump') {
				this.clickCb && this.clickCb();
				this.hide();
			}
			this.$emit('fmSnackBarBeClicked', {});
		}
	}
};

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', {
    ref: "fm-snack-bar",
    staticClass: ["fm-snack-bar"],
    style: _vm.barStyle,
    attrs: {
      "hack": _vm.isNeedShow
    },
    on: {
      "click": _vm.snackClick
    }
  }, [_vm._t("title", [_c('text', {
    staticClass: ["title"],
    style: {
      color: _vm.titleColor
    }
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._t("right", [(_vm.type === 'jump') ? _c('fm-icon', {
    staticClass: ["rotate"],
    style: {
      color: _vm.titleColor
    },
    attrs: {
      "value": "&#xe6b5;"
    }
  }) : (_vm.type === 'normal') ? _c('text', {
    staticClass: ["closeText"],
    style: {
      color: _vm.closeColor
    },
    on: {
      "click": _vm.ctrClick
    }
  }, [_vm._v(_vm._s(_vm.closeText))]) : _vm._e()])], 2) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fmSnackBar = __webpack_require__(12);

var _fmSnackBar2 = _interopRequireDefault(_fmSnackBar);

var _locale = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VCSnackBar = Vue.extend(_fmSnackBar2.default);

function snackbar(options) {
  var defaultOptions = {
    title: '',
    backgroundColor: '#323232',
    titleColor: '#FFFFFF',
    closeText: (0, _locale.t)('el.common.close'),
    closeColor: '#198DED',
    autoClose: true,
    stayTime: 3000,
    type: 'normal'
  };

  var VC_SNACKBAR = new VCSnackBar().$mount();
  options = Object.assign(defaultOptions, options);
  VC_SNACKBAR.show = true;
  VC_SNACKBAR.title = options.title;
  VC_SNACKBAR.backgroundColor = options.backgroundColor;
  VC_SNACKBAR.titleColor = options.titleColor;
  VC_SNACKBAR.closeText = options.closeText;
  VC_SNACKBAR.closeColor = options.closeColor;
  VC_SNACKBAR.autoClose = options.autoClose;
  VC_SNACKBAR.stayTime = options.stayTime;
  VC_SNACKBAR.type = options.type;
  VC_SNACKBAR.clickCb = options.clickCb;
  VC_SNACKBAR.dismissCb = function () {
    removeSnackBar();
    options.dismissCb();
  };

  addSnackBar();

  function addSnackBar() {
    if (weex.config.env.platform === 'Web') {
      document.body.appendChild(VC_SNACKBAR.$el);
    } else {
      weex.document.body.appendChild(VC_SNACKBAR.$el);
    }
  }

  function removeSnackBar() {
    if (weex.config.env.platform === 'Web') {
      document.body.removeChild(VC_SNACKBAR.$el);
    } else {
      weex.document.body.removeChild(VC_SNACKBAR.$el);
    }
  }
}

function showSnackBar(options) {
  return new Promise(function (resolve, reject) {
    options = Object.assign(options, {
      clickCb: function clickCb() {
        resolve();
      },
      dismissCb: function dismissCb() {
        reject();
      }
    });
    snackbar(options);
  });
}

exports.default = showSnackBar;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(123);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(124)
)

/* script */
__vue_exports__ = __webpack_require__(125)

/* template */
var __vue_template__ = __webpack_require__(126)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-checkbox/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7b90d04a"
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
/* 124 */
/***/ (function(module, exports) {

module.exports = {
  "border": {
    "marginTop": 0,
    "marginRight": "48",
    "marginBottom": 0,
    "marginLeft": "48",
    "backgroundColor": "#e6e6e6",
    "height": "1"
  },
  "checkbox-content": {
    "position": "relative",
    "flex": 1,
    "flexDirection": "row",
    "paddingTop": "51",
    "paddingRight": "96",
    "paddingBottom": "51",
    "paddingLeft": "96",
    "alignItems": "center",
    "justifyContent": "space-between",
    "backgroundColor:active": "#eeeeee"
  },
  "label": {
    "fontFamily": "sans-serif-medium",
    "fontWeight": "500",
    "fontSize": "48",
    "lineHeight": "54",
    "justifyContent": "center"
  },
  "checked": {
    "color": "#198ded"
  },
  "icon-wrap": {
    "position": "absolute",
    "right": "102",
    "top": "0",
    "bottom": "0",
    "opacity": 1,
    "overflow": "hidden",
    "paddingTop": "40",
    "paddingRight": 0,
    "paddingBottom": "40",
    "paddingLeft": 0,
    "width": "72"
  },
  "icon": {
    "fontSize": "72",
    "color": "#198ded",
    "fontWeight": "bold",
    "width": "72",
    "height": "64",
    "justifyContent": "center"
  }
}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fmIcon = __webpack_require__(0);

var _fmIcon2 = _interopRequireDefault(_fmIcon);

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
//
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
  name: 'FmCheckbox',
  components: { FmIcon: _fmIcon2.default },
  props: {
    value: {
      type: String,
      default: ''
    },
    checked: Boolean,
    disabled: Boolean
  },
  data: function data() {
    return {
      isChecked: false,
      selfChecked: false
    };
  },
  computed: {
    _checked: {
      get: function get() {
        return this.isGroup ? this.store.indexOf(this.value) !== -1 ? true : false : this.selfChecked;
      },
      set: function set(val) {
        if (this.isGroup) {
          if (val) {
            this.isLimitExceeded = false;
            this._checkboxGroup.max !== undefined && this.store.length >= this._checkboxGroup.max && (this.isLimitExceeded = true);

            this.isLimitExceeded === false && (this.addToStore() || this.appearIcon(val));
          } else {
            this.isLimitExceeded = false;
            this._checkboxGroup.min !== undefined && this.store.length <= this._checkboxGroup.min && (this.isLimitExceeded = true);

            this.isLimitExceeded === false && (this.deleteFromStore() || this.appearIcon(val));
          }
        } else {
          this.selfChecked = val;
          this.appearIcon(val);
        }
        this.$emit('fmCheckboxChecked', { value: this.value, checked: val });
      }
    },
    isGroup: function isGroup() {
      var parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== 'FmCheckListGroup') {
          parent = parent.$parent;
        } else {
          this._checkboxGroup = parent;
          return true;
        }
      }
      return false;
    },
    store: function store() {
      return this._checkboxGroup ? this._checkboxGroup.value : this.value;
    }
  },
  methods: {
    toggleChecked: function toggleChecked() {
      !this.disabled && (this._checked = !this._checked);
    },
    appearIcon: function appearIcon(bool) {
      var _this = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 150;

      var iconEl = this.$refs['fm-icon'];
      if (!iconEl) {
        return;
      }
      var style = bool ? {
        opacity: 1,
        width: 72
      } : {
        opacity: 0
      };
      animation.transition(iconEl, {
        styles: style,
        duration: duration,
        delay: 0,
        timingFunction: 'ease-out'
      }, function () {
        _this.isChecked = bool;
      });
    },
    addToStore: function addToStore() {
      if (Array.isArray(this.store) && this.store.indexOf(this.value) === -1) {
        this.store.push(this.value);
      }
    },
    deleteFromStore: function deleteFromStore() {
      if (Array.isArray(this.store) && this.store.indexOf(this.value) !== -1) {
        this.store.splice(this.store.indexOf(this.value), 1);
      }
    }
  },
  created: function created() {
    this.isGroup;
    this.$slots.default && (this.value = this.$slots.default[0].text);
    this.checked && (this.addToStore() || (this.selfChecked = true) && (this.isChecked = true));
    this._checked && (this.selfChecked = true) && (this.isChecked = true);
  }
};

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["fm-checkbox"]
  }, [_c('div', {
    staticClass: ["checkbox-content"],
    on: {
      "click": _vm.toggleChecked
    }
  }, [(_vm.$slots.default || _vm.value) ? _c('text', {
    staticClass: ["label"],
    style: {
      color: _vm._checked ? '#198DED' : '#000000'
    }
  }, [_vm._t("default"), (!_vm.$slots.default) ? [_vm._v(_vm._s(_vm.value))] : _vm._e()], 2) : _vm._e(), _c('div', {
    staticClass: ["icon-wrap"]
  }, [_c('fm-icon', {
    ref: "fm-icon",
    staticClass: ["icon"],
    style: {
      width: _vm.isChecked ? 72 : 1
    },
    attrs: {
      "value": "&#xe6de;",
      "iconStyle": 48,
      "color": "#0A73C9"
    }
  })], 1)]), _c('div', {
    staticClass: ["border"]
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(128);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(129)

/* template */
var __vue_template__ = __webpack_require__(130)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-check-list-group/index.vue"
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
/* 129 */
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

exports.default = {
	componentName: 'FmCheckListGroup',
	props: {
		value: {
			type: Array,
			default: function _default() {
				return [];
			}
		},
		disabled: Boolean,
		min: Number,
		max: Number,
		textColor: String
	},
	watch: {
		value: function value(_value) {
			this.$emit('fmCheckListGroupChecked', _value);
		}
	}
};

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["fm-check-list-group"]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(132);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(133)

/* template */
var __vue_template__ = __webpack_require__(134)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-action-view/index.vue"
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
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//

exports.default = {
  name: 'FmActionView',
  props: {
    act: String
  }
};

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (!_vm.isWeb) ? _c('Fmactiveview', {
    attrs: {
      "act": _vm.act
    }
  }) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(136)
)

/* script */
__vue_exports__ = __webpack_require__(137)

/* template */
var __vue_template__ = __webpack_require__(138)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-searchbar/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2c971da9"
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
/* 136 */
/***/ (function(module, exports) {

module.exports = {
  "fm-status-bar": {
    "height": "66",
    "width": "1080",
    "backgroundColor": "#ffffff"
  },
  "fm-search-bar": {
    "paddingTop": 0,
    "paddingRight": "48",
    "paddingBottom": 0,
    "paddingLeft": "48",
    "backgroundColor": "#ffffff",
    "width": "1080",
    "height": "144",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "2",
    "borderBottomColor": "rgba(0,0,0,0.1)"
  },
  "search-input-wrap": {
    "flex": 1,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "paddingLeft": "35",
    "height": "90",
    "backgroundColor": "rgba(0,0,0,0.05)",
    "outline": "none",
    "borderRadius": "45"
  },
  "search-bar-input": {
    "flex": 1,
    "height": "90",
    "marginLeft": "24",
    "marginRight": "9",
    "lineHeight": "90",
    "fontSize": "42",
    "backgroundColor": "rgba(0,0,0,0)",
    "fontFamily": "sans-serif-medium",
    "fontWeight": "500",
    "color": "#616161"
  },
  "search-bar-icon": {
    "lineHeight": "42",
    "height": "42",
    "fontWeight": "700"
  },
  "search-bar-back": {
    "marginLeft": "-18",
    "marginRight": "30",
    "lineHeight": "72",
    "height": "72",
    "fontWeight": "700"
  },
  "search-bar-delete": {
    "width": "60",
    "height": "60",
    "marginRight": "15",
    "fontWeight": "700",
    "paddingTop": "6",
    "paddingRight": "5",
    "paddingBottom": "6",
    "paddingLeft": "5",
    "backgroundColor": "rgba(77,77,77,0.5)",
    "borderRadius": "30"
  },
  "search-enter": {
    "fontFamily": "sans-serif-medium",
    "fontWeight": "500",
    "fontSize": "48",
    "lineHeight": "96",
    "marginLeft": "48",
    "color": "rgba(0,0,0,0.4)",
    "textAlign": "center"
  },
  "right-btn": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "right": "24",
    "justifyContent": "center"
  }
}

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fmIcon = __webpack_require__(0);

var _fmIcon2 = _interopRequireDefault(_fmIcon);

var _locale = __webpack_require__(2);

var _locale2 = _interopRequireDefault(_locale);

var _locale3 = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigator = weex.requireModule('navigator'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'FmSearchbar',
  mixins: [_locale2.default],
  components: { FmIcon: _fmIcon2.default },
  props: {
    statusbar: {
      type: Boolean,
      default: false
    },
    inputValue: {
      type: [String, Number],
      default: ''
    },
    useDefaultReturn: {
      type: Boolean,
      default: true
    },
    hasPrev: {
      type: Boolean,
      default: true
    },
    backgroundColor: {
      type: String,
      default: '#FFFFFF'
    },
    iconColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.4)'
    },
    leftColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.6)'
    },
    inputBackground: String,
    borderStyle: {
      type: Object,
      default: function _default() {
        return {
          borderBottomStyle: 'solid',
          borderBottomWidth: 2,
          borderBottomColor: 'rgba(0, 0, 0, 0.1)'
        };
      }
    },
    placeholder: String,
    autofocus: Boolean,
    disabled: Boolean,
    inputType: {
      type: String,
      default: 'text'
    },
    searchText: {
      type: String,
      default: function _default() {
        return (0, _locale3.t)('el.searchbar.search');
      }
    },
    searchColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.4)'
    },
    searchHighlightColor: {
      type: String,
      default: '#198DED'
    },
    searchTextSize: {
      type: Number,
      default: 48
    },
    returnKeyType: {
      type: String,
      default: 'search'
    },
    placeholderColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.4)'
    },
    inputColor: {
      type: String,
      default: '#616161'
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    inputValue: function inputValue(val) {
      this.value = val;
    }
  },
  data: function data() {
    return {
      isFocus: false,
      value: ''
    };
  },
  computed: {
    delShow: function delShow() {
      return this.isFocus && this.value;
    },
    barStyle: function barStyle() {
      var style = {
        borderBottomStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)'
      };
      Object.assign(style, this.borderStyle);
      style.backgroundColor = this.backgroundColor;
      return style;
    },
    searchTextStyle: function searchTextStyle() {
      var value = this.value,
          searchColor = this.searchColor,
          searchHighlightColor = this.searchHighlightColor,
          searchTextSize = this.searchTextSize;

      return {
        color: value ? searchHighlightColor : searchColor,
        fontSize: searchTextSize
      };
    }
  },
  methods: {
    onBack: function onBack(e) {
      var self = this;
      if (self.useDefaultReturn) {
        Navigator.pop({}, function (e) {});
      }
      self.$emit('fmSearchbarleftBtnClicked', {});
    },
    delClick: function delClick(e) {
      this.value = '';
    },
    onInput: function onInput(e) {
      this.value = e.value;
      this.$emit('input', e);
    },
    onFocus: function onFocus(e) {
      this.isFocus = true;
      this.$emit('focus', e);
    },
    onBlur: function onBlur(e) {
      this.isFocus = false;
      this.$emit('blur', e);
    },
    focus: function focus() {
      this.$refs.input.focus();
    },
    blur: function blur() {
      this.$refs.input.blur();
    },
    onSubmit: function onSubmit(e) {
      this.$emit('fmSearchbarSubmit', { value: this.value });
    },
    onSearch: function onSearch(e) {
      this.$emit('fmSearchbarSubmit', { value: this.value });
    },
    setSelectionRange: function setSelectionRange(start, end) {
      this.$refs.input.setSelectionRange(start, end);
    },
    getEditSelectionRange: function getEditSelectionRange(callback) {
      this.$refs.input.getEditSelectionRange(callback);
    },
    setValue: function setValue(value) {
      this.value = value;
    }
  },
  mounted: function mounted() {
    this.value = this.inputValue || '';
  }
};

/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', [(_vm.statusbar) ? _c('div', {
    staticClass: ["fm-status-bar"],
    style: {
      backgroundColor: _vm.backgroundColor
    }
  }) : _vm._e(), _c('div', {
    staticClass: ["fm-search-bar"],
    style: _vm.barStyle
  }, [(_vm.hasPrev) ? _vm._t("left", [_c('fm-icon', {
    staticClass: ["search-bar-back"],
    attrs: {
      "value": "&#xe6b5;",
      "iconStyle": 72,
      "color": _vm.leftColor
    },
    on: {
      "fmClick": _vm.onBack
    }
  })]) : _vm._e(), _c('div', {
    staticClass: ["search-input-wrap"],
    style: _vm.inputBackground ? {
      backgroundColor: _vm.inputBackground
    } : {}
  }, [_c('fm-icon', {
    staticClass: ["search-bar-icon"],
    attrs: {
      "value": "&#xe6d4;",
      "iconStyle": 42,
      "color": _vm.iconColor
    }
  }), _c('input', {
    ref: "input",
    staticClass: ["search-bar-input"],
    style: {
      color: _vm.inputColor,
      'placeholder-color': _vm.placeholderColor
    },
    attrs: {
      "autofocus": _vm.autofocus,
      "disabled": _vm.disabled,
      "value": _vm.value,
      "type": _vm.inputType,
      "returnKeyType": _vm.returnKeyType,
      "placeholder": _vm.placeholder
    },
    on: {
      "blur": _vm.onBlur,
      "focus": _vm.onFocus,
      "input": _vm.onInput,
      "return": _vm.onSubmit
    }
  }), _c('fm-icon', {
    staticClass: ["search-bar-delete"],
    style: {
      opacity: _vm.delShow ? 1 : 0
    },
    attrs: {
      "value": "&#xe6c0;",
      "iconStyle": 48,
      "color": "#FFFFFF"
    },
    on: {
      "fmClick": _vm.delClick
    }
  }), _c('div', {
    staticClass: ["right-btn"],
    style: {
      opacity: !_vm.delShow ? 1 : 0
    }
  }, [_vm._t("input-right")], 2)], 1), _vm._t("right", [(_vm.searchText) ? _c('text', {
    staticClass: ["search-enter"],
    style: _vm.searchTextStyle,
    on: {
      "click": _vm.onSearch
    }
  }, [_vm._v(_vm._s(_vm.searchText))]) : _vm._e()])], 2)]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(140);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(141)
)

/* script */
__vue_exports__ = __webpack_require__(142)

/* template */
var __vue_template__ = __webpack_require__(143)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-titlebar/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4c8e40d3"
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
/* 141 */
/***/ (function(module, exports) {

module.exports = {
  "fm-status-bar": {
    "height": "66",
    "width": "1080"
  },
  "fm-title-bar": {
    "paddingLeft": "48",
    "width": "1080",
    "height": "144",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "title-bar-back": {
    "marginLeft": "-18",
    "marginRight": "45",
    "lineHeight": "72",
    "height": "72",
    "fontWeight": "700"
  },
  "title-wrap": {
    "flex": 1
  },
  "title-text": {
    "flex": 1,
    "textOverflow": "ellipsis",
    "lines": 1,
    "fontFamily": "sans-serif-medium",
    "fontWeight": "500",
    "fontSize": "48",
    "lineHeight": "57",
    "color": "rgba(0,0,0,0.6)"
  },
  "btn-icon": {
    "marginRight": "48",
    "color": "#198DED",
    "lineHeight": "72",
    "height": "72"
  },
  "btn-text": {
    "marginRight": "48",
    "fontFamily": "sans-serif-medium",
    "fontWeight": "500",
    "fontSize": "48",
    "lineHeight": "57",
    "color": "#198DED"
  }
}

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _fmIcon = __webpack_require__(0);

var _fmIcon2 = _interopRequireDefault(_fmIcon);

var _locale = __webpack_require__(2);

var _locale2 = _interopRequireDefault(_locale);

var _locale3 = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigator = weex.requireModule('navigator'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	name: 'FmTitlebar',
	mixins: [_locale2.default],
	components: { FmIcon: _fmIcon2.default },
	props: {
		title: {
			type: String,
			default: '标题'
		},
		titleColor: {
			type: String,
			default: 'rgba(0, 0, 0, 0.6)'
		},
		statusbar: {
			type: Boolean,
			default: false
		},
		useDefaultReturn: {
			type: Boolean,
			default: true
		},
		hasPrev: {
			type: Boolean,
			default: true
		},
		borderStyle: {
			type: Object,
			default: function _default() {
				return {
					borderBottomStyle: 'solid',
					borderBottomWidth: 2,
					borderBottomColor: 'rgba(0, 0, 0, 0.1)'
				};
			}
		},
		backgroundColor: {
			type: String,
			default: '#FFFFFF'
		},
		leftColor: {
			type: String,
			default: 'rgba(0, 0, 0, 0.6)'
		},
		rightBtns: [Object, Array],
		rightText: String,
		show: {
			type: Boolean,
			default: true
		}
	},
	computed: {
		btns: function btns() {
			var rightBtns = this.rightBtns,
			    rightText = this.rightText;

			var btns = [];
			if (Array.isArray(rightBtns)) {
				btns = btns.concat(rightBtns.slice(0, 3));
			} else if (Object.prototype.toString.call(rightBtns).slice(8, -1).toLowerCase() === 'object') {
				btns.push(rightBtns);
			} else if (rightText) {
				btns.push({ type: 'text', value: rightText });
			}
			return btns;
		},
		barStyle: function barStyle() {
			var style = {
				borderBottomStyle: 'solid',
				borderBottomWidth: 2,
				borderBottomColor: 'rgba(0, 0, 0, 0.1)',
				paddingRight: this.rightBtns ? 0 : 48
			};
			Object.assign(style, this.borderStyle);
			style.backgroundColor = this.backgroundColor;
			return style;
		}
	},
	methods: {
		onBack: function onBack(e) {
			var self = this;
			if (self.useDefaultReturn) {
				Navigator.pop({}, function (e) {});
			}
			self.$emit('fmTitlebarLeftBtnClicked', {});
		},
		rightBtnClick: function rightBtnClick(idx, item) {
			this.$emit('fmTitlebarRightBtnClicked', { idx: idx, value: item });
		}
	}
};

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', [(_vm.statusbar) ? _c('div', {
    staticClass: ["fm-status-bar"],
    style: {
      backgroundColor: _vm.backgroundColor
    }
  }) : _vm._e(), _c('div', {
    staticClass: ["fm-title-bar"],
    style: _vm.barStyle
  }, [(_vm.hasPrev) ? _vm._t("left", [_c('fm-icon', {
    staticClass: ["title-bar-back"],
    attrs: {
      "value": "&#xe6b5;",
      "iconStyle": 72,
      "color": _vm.leftColor
    },
    on: {
      "fmClick": _vm.onBack
    }
  })]) : _vm._e(), _c('div', {
    staticClass: ["title-wrap"]
  }, [_vm._t("middle", [_c('text', {
    staticClass: ["title-text"],
    style: {
      color: _vm.titleColor
    }
  }, [_vm._v(_vm._s(_vm.title))])])], 2), _vm._t("right", _vm._l((_vm.btns), function(item, idx) {
    return _c('div', {
      key: idx
    }, [(item.type === 'icon') ? _c('fm-icon', {
      staticClass: ["btn-icon"],
      style: item.color ? {
        color: item.color
      } : {},
      attrs: {
        "value": item.value,
        "iconStyle": 72
      },
      on: {
        "fmClick": function($event) {
          _vm.rightBtnClick(idx, item)
        }
      }
    }) : _c('text', {
      staticClass: ["btn-text"],
      style: item.color ? {
        color: item.color
      } : {},
      on: {
        "click": function($event) {
          _vm.rightBtnClick(idx, item)
        }
      }
    }, [_vm._v(_vm._s(item.value))])], 1)
  }))], 2)]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(145);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(146)

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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-multi-check-group/index.vue"
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
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fmMultiCheckCell = __webpack_require__(13);

var _fmMultiCheckCell2 = _interopRequireDefault(_fmMultiCheckCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  componentName: 'FmMultiCheckGroup',
  components: { FmMultiCheckCell: _fmMultiCheckCell2.default },
  props: {
    checking: {
      type: Boolean,
      default: false
    },
    value: {
      type: Object,
      default: function _default() {
        return [];
      }
    }
  },
  methods: {
    finish: function finish() {
      this.checking = false;
    },
    active: function active() {
      this.checking = true;
    }
  },
  watch: {
    value: function value(_value) {
      this.$emit('fmMultiCheckGroupSelected', _value);
    },
    checking: function checking(value) {
      this.$emit('fmMultiCheckGroupStateChange', value);
    }
  }
}; //
//
//
//
//
//

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(148)
)

/* script */
__vue_exports__ = __webpack_require__(149)

/* template */
var __vue_template__ = __webpack_require__(154)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-multi-check-cell/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7848559a"
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
/* 148 */
/***/ (function(module, exports) {

module.exports = {
  "check-cell-wrap": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingTop": 0,
    "paddingRight": "20",
    "paddingBottom": 0,
    "paddingLeft": "20",
    "backgroundColor:active": "#eeeeee"
  },
  "right": {
    "width": "24",
    "height": "24"
  }
}

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkIcon = __webpack_require__(150);

var _checkIcon2 = _interopRequireDefault(_checkIcon);

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

var dom = weex.requireModule('dom');
exports.default = {
  name: 'FmMultiCheckCell',
  components: { CheckIcon: _checkIcon2.default },
  props: {
    identity: {
      type: [String, Object, Number, Array],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    _selected: {
      get: function get() {
        return this.store.indexOf(this.identity) !== -1 ? true : false;
      },
      set: function set(val) {
        if (val) {
          this.addToStore();
        } else {
          this.deleteFromStore();
        }
      }
    },
    isGroup: function isGroup() {
      var parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== 'FmMultiCheckGroup') {
          parent = parent.$parent;
        } else {
          this._group = parent;
          return true;
        }
      }
      return false;
    },
    checking: function checking() {
      return this._group.checking;
    },
    store: function store() {
      return this._group.value;
    }
  },
  methods: {
    onClick: function onClick(e) {
      if (this._group.checking && !this.disabled) {
        this.toggleSelected();
      }
    },
    toggleSelected: function toggleSelected() {
      !this.disabled && (this._selected = !this._selected);
    },
    onLongpress: function onLongpress(e) {
      !this._group.checking && (this._group.checking = true) && !this.disabled && (this._selected = true);
    },
    addToStore: function addToStore() {
      var identity = this.identity;

      if (Array.isArray(this.store) && this.store.indexOf(identity) === -1) {
        this.store.push(identity);
      }
    },
    deleteFromStore: function deleteFromStore() {
      var identity = this.identity;

      if (Array.isArray(this.store) && this.store.indexOf(identity) !== -1) {
        this.store.splice(this.store.indexOf(identity), 1);
      }
    }
  },
  created: function created() {
    if (!this.isGroup) {
      throw Error('fm-multi-check-cell must be used in fm-multi-check-group !');
    }
  }
};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(151)
)

/* script */
__vue_exports__ = __webpack_require__(152)

/* template */
var __vue_template__ = __webpack_require__(153)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-multi-check-cell/check-icon.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5482748d"
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
/* 151 */
/***/ (function(module, exports) {

module.exports = {
  "animate-wrap": {
    "width": "24",
    "height": "24"
  },
  "unchecked": {
    "width": "24",
    "height": "24"
  },
  "checked": {
    "position": "absolute",
    "left": 0,
    "top": 0,
    "width": "24",
    "height": "24",
    "transform": "scale(0)",
    "backgroundColor": "#ffffff",
    "borderRadius": "12"
  }
}

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fmIcon = __webpack_require__(0);

var _fmIcon2 = _interopRequireDefault(_fmIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var animation = weex.requireModule('animation'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { FmIcon: _fmIcon2.default },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    bgImg: {
      type: String,
      default: 'http://design.flyme.cn/weexui/assets/mz_btn_check_button_square_off.png'
    },
    checkedImg: {
      type: String,
      default: 'http://design.flyme.cn/weexui/assets/mz_btn_check_button_square_on.png'
    },
    checkedDisableImg: {
      type: String,
      default: 'http://design.flyme.cn/weexui/assets/mz_btn_check_button_square_on_disable.png'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    checked: function checked(bool) {
      this.appearChecked(bool);
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    getCheckedImg: function getCheckedImg() {
      var disabled = this.disabled,
          checkedImg = this.checkedImg,
          checkedDisableImg = this.checkedDisableImg;

      return disabled ? checkedDisableImg : checkedImg;
    },
    wrapStyle: function wrapStyle() {
      return this.show ? {
        opacity: 1
      } : {
        opacity: 0,
        transform: 'rotateX(90deg)'
      };
    },
    checkedStyle: function checkedStyle() {
      return this.checked ? {
        opacity: 1
      } : {
        opacity: 0
      };
    },
    isNeedShow: function isNeedShow() {
      this.appear(this.show);
    },
    isNeedChecked: function isNeedChecked() {
      var _this = this;

      setTimeout(function () {
        _this.appearChecked(_this.checked);
      }, 50);
    }
  },
  methods: {
    appear: function appear(bool) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

      var animateEl = this.$refs['animate-wrap'];
      if (!animateEl || !bool) {
        return;
      }
      var style = {
        transform: 'rotateX(0deg)'
      };
      animation.transition(animateEl, {
        styles: style,
        duration: duration,
        delay: 0,
        timingFunction: 'ease-out'
      }, function () {});
    },
    appearChecked: function appearChecked(bool) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;

      var animateEl = this.$refs['check-icon'];
      if (!animateEl) {
        return;
      }
      var style = bool ? {
        transform: 'scale(1)'
      } : {
        transform: 'scale(0)'
      };
      animation.transition(animateEl, {
        styles: style,
        duration: duration,
        delay: 0,
        timingFunction: 'ease-out'
      }, function () {});
    }
  }
};

/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["check-icon"]
  }, [_c('div', {
    ref: "animate-wrap",
    staticClass: ["animate-wrap"],
    style: _vm.wrapStyle,
    attrs: {
      "hack": _vm.isNeedShow
    }
  }, [_c('image', {
    staticClass: ["unchecked"],
    attrs: {
      "src": _vm.bgImg
    }
  }), _c('image', {
    ref: "check-icon",
    staticClass: ["checked"],
    attrs: {
      "src": _vm.getCheckedImg,
      "watch": _vm.isNeedChecked
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 154 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('cell', {
    staticClass: ["check-cell-wrap"],
    appendAsTree: true,
    attrs: {
      "ripple": "normal",
      "append": "tree"
    },
    on: {
      "longpress": _vm.onLongpress,
      "click": _vm.onClick
    }
  }, [_c('div', {
    ref: "wrapper",
    staticClass: ["wrapper"]
  }, [_vm._t("default")], 2), _c('div', {
    staticClass: ["right"]
  }, [_c('check-icon', {
    attrs: {
      "show": _vm.checking,
      "checked": _vm._selected,
      "disabled": _vm.disabled
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    ref: "group"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(157);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(158)
)

/* script */
__vue_exports__ = __webpack_require__(159)

/* template */
var __vue_template__ = __webpack_require__(160)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-rcy-check/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-621075a1"
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
/* 158 */
/***/ (function(module, exports) {

module.exports = {
  "cell": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingTop": 0,
    "paddingRight": "20",
    "paddingBottom": 0,
    "paddingLeft": "20",
    "width": "360",
    "height": "92"
  },
  "check-wrap": {
    "width": "24",
    "height": "24"
  },
  "unchecked": {
    "width": "24",
    "height": "24"
  },
  "checked": {
    "position": "absolute",
    "left": 0,
    "top": 0,
    "width": "24",
    "height": "24",
    "transform": "scale(0)",
    "borderRadius": "12"
  },
  "loading": {
    "justifyContent": "center"
  }
}

/***/ }),
/* 159 */
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
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
  props: {
    // List dataSource
    dataSource: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // Custom load data function
    loadData: Function
  },
  data: function data() {
    return {
      // Is checkind state
      checking: false,
      // Is load end
      end: false
    };
  },

  computed: {
    recycleList: function recycleList() {
      return this.$refs.rcy;
    }
  },
  methods: {
    /*
     * InSide Function 
     */
    // Handle cell be longpress
    $onCellLongpress: function $onCellLongpress(e) {
      var _this = this;

      if (!this.checking) {
        var index = e.index;
        var tmp = [];
        this.recycleList.getListDataSize(function (res) {
          _this.checking = true;
          _this.recycleList.resetLoadmore();
          _this.recycleList.setPullLoadEnable(false);
          for (var i = 0; i < res; i++) {
            _this.dataSource[i].checking = _this.checking;
            tmp.push(_this.dataSource[i]);
          }
          tmp[index].checked = true;
          _this.dataSource = tmp;
          _this.recycleList.setListData(_this.dataSource);
          _this.$emit('fmRcyCheckStateChange', true);
        });
      }
    },

    // Handle cell be click
    $onCellCheck: function $onCellCheck(item, i) {
      if (item.checking) {
        item.checked = !item.checked;
        this.dataSource[i] = item;
        this.recycleList.updateData(this.dataSource[i], i);
        this.$emit('fmRcyCheckValueChange', this.dataSource);
      } else {
        this.$emit('fmRcyCheckCellBeClick', { value: item, index: i });
      }
    },

    // Handle list loadmore, is a js hook
    $onLoadMore: function $onLoadMore() {
      var _this2 = this;

      if (!this.checking && !this.end) {
        if (this.loadData && typeof this.loadData === 'function') {
          this.loadData();
        }
      }
      if (!this.checked) {
        this.recycleList.setLoadingDisplay('hide');
        this.recycleList.setPullLoadEnable(false);
      } else if (!this.end) {
        setTimeout(function () {
          _this2.recycleList.setLoadingDisplay('hide');
          _this2.recycleList.setPullLoadEnable(true);
          _this2.recycleList.resetLoadmore();
        }, 400);
      }
    },


    /*
     * OutSide Function 
     */
    // Quit checking model if this.checking is true, will emit @fmRcyCheckFinish Event.
    finish: function finish() {
      var _this3 = this;

      if (this.checking) {
        this.recycleList.getListDataSize(function (res) {
          var tmp = [];
          var checkList = [];
          var checkIndex = [];
          _this3.checking = false;
          _this3.recycleList.setPullLoadEnable(true);
          _this3.recycleList.resetLoadmore();
          for (var i = 0; i < res; i++) {
            _this3.dataSource[i].checking = _this3.checking;
            _this3.dataSource[i].checked && checkList.push(_this3.dataSource[i]) && checkIndex.push(i);
            tmp.push(_this3.dataSource[i]);
          }
          _this3.dataSource = tmp;
          _this3.recycleList.setListData(_this3.dataSource);
          _this3.$emit('fmRcyCheckFinish', { indexs: checkIndex, values: checkList });
          _this3.$emit('fmRcyCheckStateChange', false);
        });
      }
    },

    // Toggle all item's checked state when in checking Model, will emit @fmRcyCheckValueChange Event.
    toggleAll: function toggleAll(bool) {
      var _this4 = this;

      if (this.checking) {
        var tmp = [];
        this.recycleList.getListDataSize(function (res) {
          for (var i = 0; i < res; i++) {
            _this4.dataSource[i].checked = bool;
            tmp.push(_this4.dataSource[i]);
          }
          _this4.dataSource = tmp;
          _this4.recycleList.setListData(_this4.dataSource);
          _this4.$emit('fmRcyCheckValueChange', _this4.dataSource);
        });
      }
    },

    // Append data at this.dataSource and append item at recycle-list.
    appendData: function appendData(data) {
      this.dataSource = this.dataSource.concat(data);
      this.recycleList.appendData(data);
    },

    // Remove data from this.dataSource and remove item from recycle-list.
    removeData: function removeData(array) {
      this.dataSource = this.dataSource.filter(function (value, index) {
        return array.indexOf(index) < 0;
      });
      this.recycleList.removeData(array);
      this.$emit('fmRcyCheckValueChange', this.dataSource);
    },

    // When this.loadData function complete, call this function to reset loading state.
    resetLoading: function resetLoading() {
      this.recycleList.setLoadingDisplay('hide');
    },

    // Set loading no more data Tip and change loading state.
    loadingEnd: function loadingEnd(tipStr) {
      var _this5 = this;

      this.end = true;
      this.$refs.loadText.setAttr('value', tipStr, false);
      setTimeout(function () {
        _this5.recycleList.setLoadingDisplay('hide');
        _this5.recycleList.setPullLoadEnable(true);
        _this5.recycleList.resetLoadmore();
      }, 400);
    },

    // Reset loding, make it can load more again.
    resetLoadMore: function resetLoadMore() {
      this.end = true;
      this.recycleList.setPullLoadEnable(true);
      this.recycleList.resetLoadmore();
    }
  }
};

/***/ }),
/* 160 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('recycle-list', {
    ref: "rcy",
    staticStyle: {
      width: "360px"
    },
    appendAsTree: true,
    attrs: {
      "templateKey": "type",
      "alias": "item",
      "index": "i",
      "append": "tree",
      "showScrollbar": "true",
      "listData": _vm.dataSource,
      "bindingExpression": "dataSource",
      "alias": "item",
      "index": "i"
    },
    on: {
      "loadmore": function($event) {
        _vm.$onLoadMore()
      },
      "mlongclick": _vm.$onCellLongpress
    }
  }, [_c('cell-slot', {
    appendAsTree: true,
    attrs: {
      "templateType": "check-cell",
      "ripple": "normal",
      "itemId": {
        "@binding": "item.itemId"
      },
      "append": "tree"
    },
    on: {
      "click": {
        handler: function($$_1, $$_2, $event) {
          _vm.$onCellCheck($$_1, $$_2);
        },
        params: [{
          "@binding": "item"
        }, {
          "@binding": "i"
        }]
      }
    }
  }, [_c('div', [_c('div', {
    staticClass: ["cell"]
  }, [_c('div', {
    staticClass: ["content"]
  }, [_c('text', {
    attrs: {
      "value": {
        "@binding": "item.itemId"
      }
    }
  }), _c('text', {
    attrs: {
      "a": {
        "@binding": "i"
      },
      "[[once]]": true,
      "value": {
        "@binding": "i"
      }
    }
  })]), _c('div', {
    staticClass: ["check-wrap"],
    attrs: {
      "[[match]]": "item.checking"
    }
  }, [_c('image', {
    staticClass: ["unchecked"],
    attrs: {
      "src": "http://design.flyme.cn/weexui/assets/mz_btn_check_button_square_off.png"
    }
  }), _c('image', {
    staticClass: ["checked"],
    attrs: {
      "src": {
        "@binding": "item.disabled ? 'http://design.flyme.cn/weexui/assets/mz_btn_check_button_square_on_disable.png' : 'http://design.flyme.cn/weexui/assets/mz_btn_check_button_square_on.png'"
      },
      "[[match]]": "item.checked"
    }
  })])])])]), _c('loading', {
    staticClass: ["loading"],
    attrs: {
      "display": "hide"
    },
    on: {
      "loading": _vm.onloading
    }
  }, [_c('text', {
    ref: "loadText",
    staticClass: ["indicator"],
    attrs: {
      "value": "正在加载中 .."
    }
  })])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(162)
)

/* script */
__vue_exports__ = __webpack_require__(163)

/* template */
var __vue_template__ = __webpack_require__(164)
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
/* 162 */
/***/ (function(module, exports) {

module.exports = {
  "logo": {
    "paddingTop": "132",
    "paddingBottom": "60",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "doc": {
    "paddingTop": "10"
  },
  "desc": {
    "width": "774",
    "marginTop": "54"
  }
}

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(8);

var intent = weex.requireModule('intent'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    link: String
  },
  components: { FmText: _index.FmText, FmImage: _index.FmImage },
  methods: {
    click: function click() {
      if (weex.config.env.platform === 'Web') {
        window.location.href = this.link;
      } else {
        intent.openViewIntent(this.link);
      }
    }
  }
};

/***/ }),
/* 164 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["logo"],
    attrs: {
      "bubble": "true"
    }
  }, [_c('fm-image', {
    attrs: {
      "scale": 1,
      "src": "http://design.flyme.cn/weexui/assets/design_logo.png"
    }
  }), _c('fm-text', {
    staticClass: ["desc"],
    attrs: {
      "textValue": "为你提供最全面的公共规范内容展示，让你方便调用动画参数、设计参数以及控件代码",
      "textStyle": {
        fontSize: 42,
        color: 'rgba(0, 0, 0, 0.6)',
        fontWeight: 400
      }
    }
  }), _c('div', {
    staticClass: ["doc"]
  }, [_c('fm-text', {
    staticClass: ["link"],
    style: {
      fontSize: 36,
      color: '#198ded',
      fontWeight: 400,
      textDecoration: 'underline'
    },
    attrs: {
      "textValue": "查看使用文档"
    },
    on: {
      "click": _vm.click
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(166)
)

/* script */
__vue_exports__ = __webpack_require__(167)

/* template */
var __vue_template__ = __webpack_require__(168)
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
/* 166 */
/***/ (function(module, exports) {

module.exports = {
  "category": {
    "marginTop": "30",
    "paddingLeft": "36",
    "width": "1080",
    "height": "102",
    "backgroundColor": "#198ded",
    "justifyContent": "center"
  },
  "category-text": {
    "color": "#ffffff",
    "fontWeight": "600",
    "fontSize": "42"
  }
}

/***/ }),
/* 167 */
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

exports.default = {
  props: {
    title: String
  }
};

/***/ }),
/* 168 */
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
/* 169 */
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
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(221);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var meta = weex.requireModule('meta');
// 配置 viewport 的宽度为 1080px
meta.setViewport({
  width: 360
});
_index2.default.el = '#root';
exports.default = new Vue(_index2.default);

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(222)
)

/* script */
__vue_exports__ = __webpack_require__(223)

/* template */
var __vue_template__ = __webpack_require__(224)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/example/component/multiCheck/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-939d094c"
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
/* 222 */
/***/ (function(module, exports) {

module.exports = {
  "header": {
    "height": "64",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "0.3",
    "borderBottomColor": "#e6e6e6",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "alignItems": "center"
  },
  "headerText": {
    "fontSize": "16",
    "color": "#198ded",
    "fontWeight": "500",
    "fontFamily": "sans-serif-medium"
  },
  "cell-text": {
    "fontSize": "14"
  },
  "test": {
    "height": "100",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "0.3",
    "borderBottomColor": "#e6e6e6"
  },
  "click-test": {
    "width": "100",
    "height": "100",
    "backgroundColor": "#0000FF"
  }
}

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(8);

var _title = __webpack_require__(161);

var _title2 = _interopRequireDefault(_title);

var _category = __webpack_require__(165);

var _category2 = _interopRequireDefault(_category);

var _setNav = __webpack_require__(169);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');

exports.default = _defineProperty({
  components: { Title: _title2.default, Category: _category2.default, FmMultiCheckGroup: _index.FmMultiCheckGroup, FmMultiCheckCell: _index.FmMultiCheckCell },
  methods: {
    click: function click() {
      modal.toast({ message: '点击了安装' });
    }
  },
  data: function data() {
    return {
      dataSource: [{
        name: '第一条数据',
        disabled: true
      }, {
        name: '第二条数据',
        disabled: false
      }, {
        name: '第三条数据',
        disabled: false
      }, {
        name: '第四条数据',
        disabled: true
      }, {
        name: '第五条数据',
        disabled: false
      }, {
        name: '第六条数据',
        disabled: false
      }, {
        name: '第七条数据',
        disabled: false
      }, {
        name: '第八条数据',
        disabled: false
      }, {
        name: '第九条数据',
        disabled: false
      }],
      checkData: ['第一条数据', '第三条数据']
    };
  }
}, 'methods', {
  cancel: function cancel() {
    this.$refs.multiSelect.finish();
  },
  selecting: function selecting(value) {
    this.checkData = value;
  },
  toggalAll: function toggalAll() {
    if (this.checkData.length < 9) {
      this.checkData = ['第一条数据', '第二条数据', '第三条数据', '第四条数据', '第五条数据', '第六条数据', '第七条数据', '第八条数据', '第九条数据'];
    } else {
      this.checkData = [];
    }
  },
  beClick: function beClick(e) {
    modal.toast({ message: 'childClick' });
  },
  longpress: function longpress(e) {
    this.$refs.multiSelect.active();
    modal.toast({ message: 'longpress' });
  }
});

/***/ }),
/* 224 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: ["header"]
  }, [_c('text', {
    staticClass: ["headerText"],
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v("取消")]), _c('text', {
    staticClass: ["headerText"]
  }, [_vm._v("已选择 " + _vm._s(_vm.checkData.length) + " 个")]), _c('text', {
    staticClass: ["headerText"],
    on: {
      "click": _vm.toggalAll
    }
  }, [_vm._v("全选")])]), _c('fm-multi-check-group', {
    ref: "multiSelect",
    attrs: {
      "value": _vm.checkData
    },
    on: {
      "fmMultiCheckGroupSelected": _vm.selecting
    }
  }, _vm._l((_vm.dataSource), function(item, index) {
    return _c('fm-multi-check-cell', {
      key: index,
      attrs: {
        "identity": item.name,
        "disabled": item.disabled
      }
    }, [_c('div', {
      staticClass: ["test"],
      attrs: {
        "bubble": "true"
      }
    }, [_c('div', {
      staticClass: ["click-test"],
      on: {
        "click": _vm.beClick,
        "longpress": _vm.longpress
      }
    }), _c('text', {
      staticClass: ["cell-text"]
    }, [_vm._v(_vm._s(item.name))])])])
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.native.js.map