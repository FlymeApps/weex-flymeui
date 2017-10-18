// { "framework": "Vue" }

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["npm/weex-mzui/index"] = factory();
	else
		root["npm/weex-mzui/index"] = factory();
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
exports.FmSwitch = undefined;

var _fmSwitch = __webpack_require__(1);

var _fmSwitch2 = _interopRequireDefault(_fmSwitch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.FmSwitch = _fmSwitch2.default;

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
var __vue_template__ = __webpack_require__(5)
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

var _theme = __webpack_require__(20);

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
    changState: function changState(e) {
      if (this.isAnimate || this.disabled) return;
      this.checked = !this.checked;
      this.toggleState();
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
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["fm-switch"],
    style: _vm.getBgStyle,
    on: {
      "click": _vm.changState
    }
  }, [_c('div', {
    ref: "ctrBall",
    staticClass: ["ctr-ball"],
    style: _vm.ballStyle
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
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

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.native.js.map