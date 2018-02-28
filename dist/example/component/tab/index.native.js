// { "framework": "Vue" }

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["npm/weex-flymeui/example/component/tab/index"] = factory();
	else
		root["npm/weex-flymeui/example/component/tab/index"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 285);
/******/ })
/************************************************************************/
/******/ ({

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(286);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var meta = weex.requireModule('meta');
// 配置 viewport 的宽度为 1080px
meta.setViewport({
  width: 1080
});
_index2.default.el = '#root';
exports.default = new Vue(_index2.default);

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(287)
)

/* script */
__vue_exports__ = __webpack_require__(288)

/* template */
var __vue_template__ = __webpack_require__(289)
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
__vue_options__.__file = "/Users/suen/Documents/develop/project/weex-flymeui/example/component/tab/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-58c586c0"
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

/***/ 287:
/***/ (function(module, exports) {

module.exports = {
  "tab-wrapper": {
    "position": "absolute",
    "top": "192",
    "bottom": 0,
    "left": 0,
    "right": 0
  },
  "list": {
    "flex": 1
  },
  "cell": {
    "height": "192"
  },
  "tab-title": {
    "height": "192",
    "backgroundColor": "#eeeeee"
  }
}

/***/ }),

/***/ 288:
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
//
//
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
	data: function data() {
		return {
			offsetXRatio: 0
		};
	},

	methods: {
		_onIndexChange: function _onIndexChange(e) {
			modal.toast({ message: e.index });
		},
		_onScroll: function _onScroll(e) {
			this.offsetXRatio = e.offsetXRatio;
		}
	}
};

/***/ }),

/***/ 289:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: ["tab-title"]
  }, [_c('text', [_vm._v("偏移量: " + _vm._s(_vm.offsetXRatio))])]), _c('slider', {
    staticClass: ["tab-wrapper"],
    attrs: {
      "infinite": "false",
      "offsetAccuracy": "0.1"
    },
    on: {
      "change": _vm._onIndexChange,
      "scroll": _vm._onScroll
    }
  }, [_vm._m(0), _vm._m(1), _vm._m(2), _vm._m(3)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["list"]
  }, [_c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list1")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list1")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list1")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list1")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list1")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list1")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list1")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list1")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list1")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list1")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list1")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list1")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["list"]
  }, [_c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list2")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list2")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list2")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list2")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list2")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list2")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list2")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list2")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list2")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list2")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list2")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list2")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["list"]
  }, [_c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list3")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list3")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list3")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list3")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list3")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list3")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list3")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list3")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list3")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list3")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list3")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list3")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["list"]
  }, [_c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list4")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list4")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list4")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list4")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list4")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list4")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list4")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list4")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list4")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list4")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list4")])]), _c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v("list4")])])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });
});
//# sourceMappingURL=index.native.js.map