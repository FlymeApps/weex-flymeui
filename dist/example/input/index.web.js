// { "framework": "Vue" }

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["npm/@flyme/weex-flymeui/example/input/index"] = factory();
	else
		root["npm/@flyme/weex-flymeui/example/input/index"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 121);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(13)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
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
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(17);

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


/**
 * Created by Tw93 on 2017/6/26.
 */
var UrlParser = __webpack_require__(71);
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
/* 7 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FmImage = exports.FmFoldableText = exports.FmSpecialRichText = exports.FmRichText = exports.FmTips = exports.FmTabView = exports.FmInput = exports.FmButton = exports.FmSlider = exports.FmIcon = exports.FmText = exports.FmTag = exports.FmSwitch = undefined;

var _fmSwitch = __webpack_require__(9);

var _fmSwitch2 = _interopRequireDefault(_fmSwitch);

var _fmTag = __webpack_require__(5);

var _fmTag2 = _interopRequireDefault(_fmTag);

var _fmText = __webpack_require__(3);

var _fmText2 = _interopRequireDefault(_fmText);

var _fmIcon = __webpack_require__(4);

var _fmIcon2 = _interopRequireDefault(_fmIcon);

var _fmSlider = __webpack_require__(34);

var _fmSlider2 = _interopRequireDefault(_fmSlider);

var _fmButton = __webpack_require__(40);

var _fmButton2 = _interopRequireDefault(_fmButton);

var _fmInput = __webpack_require__(46);

var _fmInput2 = _interopRequireDefault(_fmInput);

var _fmTabView = __webpack_require__(52);

var _fmTabView2 = _interopRequireDefault(_fmTabView);

var _fmTips = __webpack_require__(58);

var _fmTips2 = _interopRequireDefault(_fmTips);

var _fmRichText = __webpack_require__(64);

var _fmRichText2 = _interopRequireDefault(_fmRichText);

var _fmSpecialRichText = __webpack_require__(76);

var _fmSpecialRichText2 = _interopRequireDefault(_fmSpecialRichText);

var _fmFoldableText = __webpack_require__(82);

var _fmFoldableText2 = _interopRequireDefault(_fmFoldableText);

var _fmImage = __webpack_require__(88);

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(10);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(11)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(16),
  /* scopeId */
  "data-v-058cc90e",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-switch/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-058cc90e", Component.options)
  } else {
    hotAPI.reload("data-v-058cc90e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("67eb2269", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-058cc90e\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-058cc90e\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.fm-switch[data-v-058cc90e] {\n  flex-direction: row;\n  align-items: center;\n  width: 48px;\n  height: 24px;\n  border-radius: 24px;\n}\n.ctr-ball[data-v-058cc90e] {\n  width: 16px;\n  height: 16px;\n  border-radius: 8px;\n}\n\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-switch/index.vue?f0e4519e"],"names":[],"mappings":";AAWA;EACA,oBAAA;EACA,oBAAA;EACA,YAAA;EACA,aAAA;EACA,oBAAA;CACA;AAEA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"fm-switch\" @click=\"changeState\" :style=\"getBgStyle\">\n        <div \n          class=\"ctr-ball\" \n          :style=\"ballStyle\"\n          ref=\"ctrBall\"></div>\n    </div>\n</template>\n\n<style scoped>\n\n  .fm-switch {\n    flex-direction: row;\n    align-items: center;\n    width: 48px;\n    height: 24px;\n    border-radius: 24px;\n  }\n\n  .ctr-ball {\n    width: 16px;\n    height: 16px;\n    border-radius: 8px;\n  }\n\n</style>\n\n<script>\n\nimport { THEME } from './theme'\nconst animation = weex.requireModule('animation')\n\nexport default {\n    name: 'fm-switch',\n    props: {\n      checked: {\n        type: Boolean,\n        default: false\n      },\n      theme: {\n        type: String,\n        default: 'default'\n      },\n      disabled: {\n        type: Boolean,\n        default: false\n      }\n    },\n    data() {\n      return {\n        isAnimate: false,\n        focusColor: '#198ded',\n        blurColor: '#7e97ac',\n        ballStyle: {\n          backgroundColor: this.blurColor\n        }\n      }\n    },\n    computed: {\n      getBgStyle() {\n        let style = this.theme === 'default' ? {\n          borderWidth: 2,\n          borderColor: '#7e97ac'\n        } : THEME[this.theme]\n        if (this.disabled) {\n          style.opacity = 0.3\n        } else {\n          style.opacity = 1\n        }\n        return style\n      }\n    },\n    methods: {\n      changeState(e) {\n        if (this.isAnimate || this.disabled) return\n        this.checked = !this.checked\n        this.toggleState()\n        this.$emit('change', this.checked)\n      },\n      toggleState(){\n          this.isAnimate = true\n          const style = this.checked ? {\n            backgroundColor: this.focusColor,\n            transform: 'scale(1)',\n            transform: 'translate(24px, 0)',\n            transformOrigin: 'center center'\n          } : {\n            backgroundColor: this.blurColor,\n            transform: 'scale(0.6)',\n            transformOrigin: 'center center'\n          }\n          const ctrBall = this.$refs.ctrBall\n          animation.transition(ctrBall, {\n            styles: style,\n            timingFunction: 'ease',\n            duration: 260\n          }, () => {\n            this.isAnimate = false\n          })\n      }\n    },\n    mounted() {\n      const { bgStyle, focusColor, blurColor } = this\n      if (this.theme !== 'default') {\n          this.focusColor = this.blurColor = '#fff'\n      }\n      this.checked ? this.ballStyle = {\n          backgroundColor: this.focusColor,\n          transform: 'scale(1.0)',\n          transform: 'translate(24px, 0)'\n      } : this.ballStyle = {\n          backgroundColor: this.blurColor,\n          transform: 'scale(0.6)'\n      }\n    }\n}\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] });
    } else {
      newStyles[id].parts.push(part);
    }
  }
  return styles;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _theme = __webpack_require__(15);

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
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fm-switch",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.getBgStyle)),
    on: {
      "click": _vm.changeState
    }
  }, [_c('div', {
    ref: "ctrBall",
    staticClass: "ctr-ball",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.ballStyle))
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-058cc90e", module.exports)
  }
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(18)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(21),
  /* scopeId */
  "data-v-2072c04b",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-tag/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2072c04b", Component.options)
  } else {
    hotAPI.reload("data-v-2072c04b", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("1f281ec2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2072c04b\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2072c04b\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.fm-tag[data-v-2072c04b] {\n  align-items: flex-start;\n}\n.tag-item[data-v-2072c04b] {\n  padding: 3px;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n.tag-border[data-v-2072c04b] {\n  border-bottom-left-radius: 1.5px;\n  border-bottom-right-radius: 1.5px;\n  border-top-left-radius: 1.5px;\n  border-top-right-radius: 1.5px;\n}\n.tag-hollow[data-v-2072c04b] {\n  border-width: 1px;\n}\n.tag-text[data-v-2072c04b] {\n  font-family: \"Source Han Sans CN\", Roboto, sans-serif;\n  font-weight: bold;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-tag/index.vue?08715863"],"names":[],"mappings":";AAYA;EACA,wBAAA;CACA;AAEA;EACA,aAAA;EACA,wBAAA;EACA,oBAAA;EACA,iBAAA;CACA;AAEA;EACA,iCAAA;EACA,kCAAA;EACA,8BAAA;EACA,+BAAA;CACA;AAEA;EACA,kBAAA;CACA;AAEA;EACA,sDAAA;EACA,kBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"fm-tag\" :style=\"{margin: size === 'small' ? '1px' : '1.5px'}\">\n        <div v-if=\"showSolid || showHollow\"\n            :class=\"['tag-item','tag-border',showHollow && 'tag-hollow']\"\n            :style=\"tagTextStyle\">\n        <text class=\"tag-text\" ref='content' :style=\"textStyle\">{{value}}</text>\n        </div>\n    </div>\n</template>\n\n<style scoped>\n\n  .fm-tag {\n    align-items: flex-start;\n  }\n\n  .tag-item {\n    padding: 3px;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n  }\n\n  .tag-border {\n    border-bottom-left-radius: 1.5px;\n    border-bottom-right-radius: 1.5px;\n    border-top-left-radius: 1.5px;\n    border-top-right-radius: 1.5px;\n  }\n\n  .tag-hollow {\n    border-width: 1px;\n  }\n\n  .tag-text {\n    font-family: \"Source Han Sans CN\", Roboto, sans-serif;\n    font-weight: bold;\n  }\n</style>\n\n<script>\nexport default {\n    props: {\n      tagType: {\n        type: String,\n        default: 'solid'\n      },\n      size: {\n        type: String,\n        default: 'small'\n      },\n      value: {\n        type: [String, Number],\n        default: '标签'\n      },\n      color: {\n        type: String,\n        default: '#198ded'\n      },\n      fontColor: {\n        type: String,\n        default: '#fff'\n      }\n    },\n    computed: {\n      showSolid () {\n        const { tagType, value } = this;\n        return tagType === 'solid' && value !== '';\n      },\n      showHollow () {\n        const { tagType, value } = this;\n        return tagType === 'hollow' && value !== '';\n      },\n      tagTextStyle () {\n        const { color, showSolid } = this;\n        return showSolid ? { backgroundColor: color } : { borderColor: color }\n      },\n      textStyle() {\n        const { fontColor, size } = this;\n        return {color: fontColor, fontSize: size === 'small' ? '8px' : '10px'}\n      }\n    }\n}\n</script>\n\n\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fm-tag",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      margin: _vm.size === 'small' ? '1px' : '1.5px'
    }))
  }, [(_vm.showSolid || _vm.showHollow) ? _c('div', {
    class: ['tag-item', 'tag-border', _vm.showHollow && 'tag-hollow'],
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.tagTextStyle))
  }, [_c('text', {
    ref: "content",
    staticClass: "tag-text",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.textStyle))
  }, [_vm._v(_vm._s(_vm.value))])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2072c04b", module.exports)
  }
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(23)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(25),
  /* template */
  __webpack_require__(26),
  /* scopeId */
  "data-v-68596e9c",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-text/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68596e9c", Component.options)
  } else {
    hotAPI.reload("data-v-68596e9c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("42fe6026", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-68596e9c\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-68596e9c\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.text[data-v-68596e9c] {\n    font-size: 14px;\n    line-height: 21px;\n    color: #999;\n    font-family: \"Source Han Sans CN\", Roboto, sans-serif;\n}\n.medium[data-v-68596e9c] {\n    font-family: sans-serif-medium;\n    font-weight: 500;\n}\n.bold[data-v-68596e9c] {\n    font-weight: 700;\n}\n.light[data-v-68596e9c] {\n    font-weight: 400;\n    line-height: 18px;\n}\n.title[data-v-68596e9c] {\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 23px;\n    color: #000;\n}\n.small[data-v-68596e9c] {\n    font-size: 12px;\n}\n.large[data-v-68596e9c] {\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 24px;\n    color: #000;\n}\n.huge[data-v-68596e9c] {\n    font-size: 18px;\n    line-height: 27px;\n    color: #000;\n}\n.margin-text[data-v-68596e9c] {\n    margin-right: 3px;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-text/index.vue?3cc9fc16"],"names":[],"mappings":";AAKA;IACA,gBAAA;IACA,kBAAA;IACA,YAAA;IACA,sDAAA;CACA;AAEA;IACA,+BAAA;IACA,iBAAA;CACA;AACA;IACA,iBAAA;CACA;AACA;IACA,iBAAA;IACA,kBAAA;CACA;AAEA;IACA,gBAAA;IACA,iBAAA;IACA,kBAAA;IACA,YAAA;CACA;AAEA;IACA,gBAAA;CACA;AACA;IACA,gBAAA;IACA,iBAAA;IACA,kBAAA;IACA,YAAA;CACA;AACA;IACA,gBAAA;IACA,kBAAA;IACA,YAAA;CACA;AACA;IACA,kBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <text :class=\"textClz\" :style=\"getStyle\">{{textValue}}</text>\n</template>\n\n<style scoped>\n    .text {\n        font-size: 14px;\n        line-height: 21px;\n        color: #999;\n        font-family: \"Source Han Sans CN\", Roboto, sans-serif;\n    }\n\n    .medium {\n        font-family: sans-serif-medium;\n        font-weight: 500;\n    }\n    .bold {\n        font-weight: 700;\n    }\n    .light {\n        font-weight: 400;\n        line-height: 18px;\n    }\n\n    .title {\n        font-size: 16px;\n        font-weight: 500;\n        line-height: 23px;\n        color: #000;\n    }\n\n    .small {\n        font-size: 12px;\n    }\n    .large {\n        font-size: 16px;\n        font-weight: 500;\n        line-height: 24px;\n        color: #000;\n    }\n    .huge {\n        font-size: 18px;\n        line-height: 27px;\n        color: #000;\n    }\n    .margin-text {\n        margin-right: 3px;\n    }\n</style>\n\n<script>\nexport default {\n    props: {\n        textValue: [String, Number],\n        medium: Boolean,\n        bold: Boolean,\n        light: Boolean,\n        title: Boolean,\n        small: Boolean,\n        large: Boolean,\n        huge: Boolean,\n        textStyle: {\n            type: Object,\n            default: () => ({})\n        },\n        hasTextMargin: {\n            type: Boolean,\n            default: true\n        }\n    },\n\n    computed: {\n        textClz () {\n            let clz = ['text']\n            if (this.medium) {\n                clz.push('medium')\n            }\n            if (this.light) {\n                clz.push('light')\n            }\n            if (this.title) {\n                clz.push('title')\n            }\n            if (this.bold) {\n                clz.push('bold')\n            }\n            if (this.small) {\n                clz.push('small')\n            }\n            if (this.large) {\n                clz.push('large')\n            }\n            if (this.huge) {\n                clz.push('huge')\n            }\n            if (this.hasTextMargin) {\n                clz.push('margin-text')\n            }\n            return clz\n        },\n        getStyle () {\n            return {\n                ...this.textStyle\n            }\n      }\n    }\n}\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    class: _vm.textClz,
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.getStyle))
  }, [_vm._v(_vm._s(_vm.textValue))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-68596e9c", module.exports)
  }
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(28)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(33),
  /* scopeId */
  "data-v-77aa90fe",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-icon/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-77aa90fe", Component.options)
  } else {
    hotAPI.reload("data-v-77aa90fe", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("db906fb8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-77aa90fe\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-77aa90fe\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.fm-image[data-v-77aa90fe] {\n  width: 43px;\n  height: 12px;\n  margin-right: 6px;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-icon/index.vue?565a4016"],"names":[],"mappings":";AAgBA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <image v-if=\"isImg\" class=\"fm-image\"\n          :src=\"value\"\n          @load=\"onLoad\"\n          @click=\"e=>$emit('click', e)\"\n          @longpress=\"e=>$emit('longpress', e)\"\n          :style=\"{ width: computedStyle.width, height: computedStyle.height }\">\n    </image>\n    <text v-else :style=\"getStyle\"\n          @click=\"e=>$emit('click', e)\"\n          @longpress=\"e=>$emit('longpress', e)\"\n          >{{ getFontName }}\n    </text>\n</template>\n\n<style scoped>\n  .fm-image {\n    width: 43px;\n    height: 12px;\n    margin-right: 6px;\n  }\n</style>\n\n<script>\n  const dom = weex.requireModule('dom')\n  // 引入he模块，使用它解决weex-template-compiler在编译阶段进行decode\n  const he = require(\"he\");\n  export default {\n    props: {\n      value: {\n        type: String,\n        default: ''\n      },\n      iconStyle: {\n        type: [Number, Object],\n        default: 14\n      },\n      color: {\n        type: String,\n        default: '#000000'\n      }\n    },\n    data: () => ({\n      width: 43\n    }),\n    computed: {\n      computedStyle () {\n        if (Object.prototype.toString.call(this.iconStyle).slice(8, -1).toLowerCase() !== 'object') {\n          this.iconStyle = { height: 12 }\n        }\n        const { width, iconStyle } = this\n        if (iconStyle && iconStyle.width && iconStyle.height) {\n          return {\n            width: `${iconStyle.width}px`,\n            height: `${iconStyle.height}px`\n          }\n        } else {\n          return {\n            width: `${width}px`,\n            height: `${iconStyle.height}px`\n          }\n        }\n      },\n      isImg() {\n        let { value } = this\n        if (value.indexOf(\"http\") === 0 || value.indexOf(\"//\") === 0) {\n          return true\n        }\n        return false\n      },\n      getStyle () {\n        const { iconStyle } = this\n        let style = { fontFamily: 'flymeicon', color: this.color }\n        if (Object.prototype.toString.call(this.iconStyle).slice(8, -1).toLowerCase() === 'object') {\n          iconStyle.size && (style.fontSize = `${iconStyle.size}px`)\n          iconStyle.lineHeight && (style.lineHeight = `${iconStyle.lineHeight}px`)\n        } else {\n          style.fontSize = iconStyle\n        }\n        return style\n      },\n      // 匹配对应的字体图标的unicode\n      getFontName: function() {\n          return he.decode(this.value)\n      }\n    },\n    created () {\n      dom.addRule('fontFace', {\n        'fontFamily': 'flymeicon',\n        'src': \"url('http://weixin.res.flyme.cn/upload/iconfont.ttf')\"\n      })\n    },\n    methods: {\n      onLoad (e) {\n        if (e.success && e.size && e.size.naturalWidth > 0) {\n          const width = e.size.naturalWidth\n          const height = e.size.naturalHeight\n          this.width = width * (this.iconStyle.height / height)\n        }\n      }\n    }\n  }\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 30 */
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
var he = __webpack_require__(31);
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
/* 31 */
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
	if ("function" == 'function' && _typeof(__webpack_require__(7)) == 'object' && __webpack_require__(7)) {
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)(module)))

/***/ }),
/* 32 */
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.isImg) ? _c('image', {
    staticClass: "fm-image",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      width: _vm.computedStyle.width,
      height: _vm.computedStyle.height
    })),
    attrs: {
      "src": _vm.value
    },
    on: {
      "load": _vm.onLoad,
      "click": function (e) { return _vm.$emit('click', e); },
      "longpress": function (e) { return _vm.$emit('longpress', e); }
    }
  }) : _c('text', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.getStyle)),
    on: {
      "click": function (e) { return _vm.$emit('click', e); },
      "longpress": function (e) { return _vm.$emit('longpress', e); }
    }
  }, [_vm._v(_vm._s(_vm.getFontName) + "\n")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-77aa90fe", module.exports)
  }
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(35);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(36)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(38),
  /* template */
  __webpack_require__(39),
  /* scopeId */
  "data-v-18ede8e6",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-slider/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-18ede8e6", Component.options)
  } else {
    hotAPI.reload("data-v-18ede8e6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("4e312738", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-18ede8e6\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-18ede8e6\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.slider-wrap[data-v-18ede8e6] {\n\tpadding-right: 7.5px;\n\tpadding-left: 7.5px;\n}\n.level-text-wrap[data-v-18ede8e6] {\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin-bottom: -7.2px;\n}\n.level-text[data-v-18ede8e6] {\n\tflex: 1;\n\tfont-size: 14px;\n\tpadding-top: 2.4px;\n\tpadding-bottom: 2.4px;\n\ttext-align: center;\n}\n.all[data-v-18ede8e6] {\n\theight: 3px;\n\tmargin-top: 14.4px;\n\tbackground-color: #e6e6e6;\n}\n.selected[data-v-18ede8e6] {\n\tmargin-top: -3px;\n\theight: 3px;\n\tbackground-color: #198ded;\n}\n.dot-wrap[data-v-18ede8e6] {\n\theight: 28.8px;\n\twidth: 38.8px;\n\tmargin-top: -15.84px;\n\tmargin-left: -19.2px;\n\talign-items: center;\n\tjustify-content: center;\n}\n.dot[data-v-18ede8e6] {\n\theight: 15px;\n\twidth: 15px;\n\tbackground-color: #198ded;\n\tborder-radius: 14.4px;\n}\n.num[data-v-18ede8e6] {\n\twidth: 26px;\n\theight: 26px;\n\tmargin-left: -13px;\n\tborder-radius: 26.4px;\n\tbackground-color: #198ded;\n\tcolor: #ffffff;\n\tfont-size: 14px;\n\tfont-weight: 700;\n\ttext-align: center;\n\tline-height: 26px;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-slider/index.vue?319e26ba"],"names":[],"mappings":";AAeA;CACA,qBAAA;CACA,oBAAA;CACA;AACA;CACA,oBAAA;CACA,oBAAA;CACA,wBAAA;CACA,sBAAA;CACA;AACA;CACA,QAAA;CACA,gBAAA;CACA,mBAAA;CACA,sBAAA;CACA,mBAAA;CACA;AACA;CACA,YAAA;CACA,mBAAA;CACA,0BAAA;CACA;AACA;CACA,iBAAA;CACA,YAAA;CACA,0BAAA;CACA;AACA;CACA,eAAA;CACA,cAAA;CACA,qBAAA;CACA,qBAAA;CACA,oBAAA;CACA,wBAAA;CACA;AACA;CACA,aAAA;CACA,YAAA;CACA,0BAAA;CACA,sBAAA;CACA;AACA;CACA,YAAA;CACA,aAAA;CACA,mBAAA;CACA,sBAAA;CACA,0BAAA;CACA,eAAA;CACA,gBAAA;CACA,iBAAA;CACA,mBAAA;CACA,kBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n<div class=\"slider-wrap\">\n\t<div v-if=\"!!levelTexts && this.per\" class=\"level-text-wrap\" :style=\"textStyle\">\n\t\t<text class=\"level-text\" v-for=\"(text, idx) in levelTexts\" @click=\"levelClick(idx)\">{{text}}</text>\n\t</div>\n\t<text v-else-if=\"showProgress\" class=\"num\" :style=\"progressStyle\">{{progressText}}</text>\n\t<div class=\"all\" ref=\"bg\"></div>\n\t<div class=\"selected\" :style=\"selStyle\"></div>\n\t<div class=\"dot-wrap\" :style=\"dotStyle\" @touchmove=\"move\" @touchstart=\"start\" @touchend=\"end\">\n\t\t<div class=\"dot\"></div>\n\t</div>\n</div>\n</template>\n\n<style scoped>\n.slider-wrap {\n\tpadding-right: 7.5px;\n\tpadding-left: 7.5px;\n}\n.level-text-wrap {\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin-bottom: -7.2px;\n}\n.level-text {\n\tflex: 1;\n\tfont-size: 14px;\n\tpadding-top: 2.4px;\n\tpadding-bottom: 2.4px;\n\ttext-align: center;\n}\n.all {\n\theight: 3px;\n\tmargin-top: 14.4px;\n\tbackground-color: #e6e6e6;\n}\n.selected {\n\tmargin-top: -3px;\n\theight: 3px;\n\tbackground-color: #198ded;\n}\n.dot-wrap {\n\theight: 28.8px;\n\twidth: 38.8px;\n\tmargin-top: -15.84px;\n\tmargin-left: -19.2px;\n\talign-items: center;\n\tjustify-content: center;\n}\n.dot {\n\theight: 15px;\n\twidth: 15px;\n\tbackground-color: #198ded;\n\tborder-radius: 14.4px;\n}\n.num {\n\twidth: 26px;\n\theight: 26px;\n\tmargin-left: -13px;\n\tborder-radius: 26.4px;\n\tbackground-color: #198ded;\n\tcolor: #ffffff;\n\tfont-size: 14px;\n\tfont-weight: 700;\n\ttext-align: center;\n\tline-height: 26px;\n}\n</style>\n\n<script>\nconst dom = weex.requireModule('dom')\n\nexport default {\n\tdata () {\n\t\treturn {\n\t\t\ttransX: 0,\n\t\t\tstartX: 0,\n\t\t\tmax: 0,\n\t\t\tper: 0,\n\t\t\tcomparePer: 0,\n\t\t\tprogressOpacity: 0,\n\t\t\tprogressText: null,\n\t\t\tlevelAlias: 0\n\t\t}\n\t},\n\n\tprops: {\n\t\tlevel: [String, Number],\n\t\tlevelTexts: Array,\n\t\tshowProgress: Boolean,\n\t\tvertical: Boolean,\n\t\tvalue: {\n\t\t\ttype: [String, Number],\n\t\t\tdefault: 0\n\t\t}\n\t},\n\n\tcomputed: {\n\t\ttextStyle () {\n\t\t\treturn {\n\t\t\t\twidth: `${this.max + this.per}px`,\n\t\t\t\t'margin-left': `${-this.per/2}px`\n\t\t\t}\n\t\t},\n\t\tdotStyle () {\n\t\t\treturn {\n\t\t\t\ttransform: `translateX(${this.transX}px)`\n\t\t\t}\n\t\t},\n\t\tselStyle () {\n\t\t\treturn {\n\t\t\t\twidth: `${this.transX}px`\n\t\t\t}\n\t\t},\n\t\tprogressStyle () {\n\t\t\treturn {\n\t\t\t\ttransform: `translateX(${this.transX}px)`,\n\t\t\t\topacity: this.progressOpacity\n\t\t\t}\n\t\t}\n\t},\n\n\tcreated () {\n\t\tthis.screen = 'screenY'//this.vertical ? 'screenY' : 'screenX'\n\t},\n\n\tmounted () {\n\t\tsetTimeout(() => {\n\t\t\tdom.getComponentRect(this.$refs.bg, opt => {\n\n\t\t\t\tthis.max = opt.size.width\n\n\t\t\t\tif (this.levelTexts) {\n\t\t\t\t\tthis.levelAlias = Math.max(this.levelTexts.length - 1, 0)\n\t\t\t\t} else {\n\t\t\t\t\tthis.levelAlias = this.level\n\t\t\t\t}\n\n\t\t\t\tif (this.levelAlias && this.levelAlias > 0) {\n\t\t\t\t\tthis.per = this.max / this.levelAlias\n\t\t\t\t\tthis.comparePer = this.per / 2\n\t\t\t\t}\n\n\t\t\t\tthis.transX = this.per ? (this.per * this.value) : (this.max * this.value / 100)\n\t\t\t})\n\t\t}, 100)\n\t},\n\n\tmethods: {\n\t\tlevelClick (idx) {\n\t\t\tthis.transX = Math.min(this.per * idx, this.max)\n\t\t\tthis.end()\n\t\t},\n\t\tstart (event) {\n\t\t\tthis.startX = event.changedTouches[0].screenX\n\t\t\tthis.progressOpacity = 1\n\t\t},\n\t\tmove (event) {\n\t\t\tlet x = +event.changedTouches[0].screenX\n\t\t\tlet sub = x - this.startX\n\t\t\tlet target\n\n\t\t\tif (this.per) {\n\t\t\t\tif (Math.abs(sub) >= this.comparePer) {\n\t\t\t\t\ttarget = this.transX + (sub > 0 ? this.per : -this.per)\n\t\t\t\t\tthis.startX = target\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\ttarget = this.transX + sub\n\t\t\t\tthis.startX = x\n\t\t\t}\n\t\t\t\n\t\t\tif (target !== undefined) {\n\t\t\t\tthis.transX = Math.min(Math.max(target, 0), this.max)\n\t\t\t}\n\t\t\t\n\t\t\tthis.progressText = this.per \n\t\t\t\t? Math.round(this.transX / this.per)\n\t\t\t\t: Math.floor(this.transX / this.max * 100)\n\t\t},\n\t\tend (event) {\n\t\t\tthis.progressOpacity = 0\n\t\t\tthis.$emit('selected', {\n\t\t\t\trate: this.transX / this.max,\n\t\t\t\tlevel: this.per ? Math.round(this.transX / this.per) : 0\n\t\t\t})\n\t\t}\n\t}\n}\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 38 */
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "slider-wrap",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [(!!_vm.levelTexts && this.per) ? _c('div', {
    staticClass: "level-text-wrap",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.textStyle))
  }, _vm._l((_vm.levelTexts), function(text, idx) {
    return _c('text', {
      staticClass: "level-text",
      staticStyle: _vm.$processStyle(undefined),
      style: (_vm.$processStyle(undefined)),
      on: {
        "click": function($event) {
          _vm.levelClick(idx)
        }
      }
    }, [_vm._v(_vm._s(text))])
  })) : (_vm.showProgress) ? _c('text', {
    staticClass: "num",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.progressStyle))
  }, [_vm._v(_vm._s(_vm.progressText))]) : _vm._e(), _vm._v(" "), _c('div', {
    ref: "bg",
    staticClass: "all",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }), _vm._v(" "), _c('div', {
    staticClass: "selected",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.selStyle))
  }), _vm._v(" "), _c('div', {
    staticClass: "dot-wrap",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.dotStyle)),
    on: {
      "touchmove": _vm.move,
      "touchstart": _vm.start,
      "touchend": _vm.end
    }
  }, [_c('div', {
    staticClass: "dot",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-18ede8e6", module.exports)
  }
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(41);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(42)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(44),
  /* template */
  __webpack_require__(45),
  /* scopeId */
  "data-v-45eab412",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-button/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-45eab412", Component.options)
  } else {
    hotAPI.reload("data-v-45eab412", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("43a7c61e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-45eab412\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-45eab412\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.fm-btn-wrap[data-v-45eab412] {\n\theight: 24px;\n\talign-items: center;\n\tflex-direction: row;\n\tmax-width: 100px;\n}\n.fm-btn[data-v-45eab412] {\n\theight: 24px;\n\tpadding-left: 12px;\n\tpadding-right: 12px;\n\tline-height: 24px;\n\tborder-radius: 24px;\n\tfont-size: 14px;\n\tfont-weight: 700;\n\ttext-align: center;\n\topacity: 0;\n}\n.fm-btn-small[data-v-45eab412] {\n\twidth: 100px;\n}\n.fm-btn-large[data-v-45eab412] {\n\tpadding-left: 8px;\n\tpadding-right: 8px;\n}\n.fm-btn-max[data-v-45eab412] {\n\twidth: 100px;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-button/index.vue?40dca438"],"names":[],"mappings":";AAQA;CACA,aAAA;CACA,oBAAA;CACA,oBAAA;CACA,iBAAA;CACA;AACA;CACA,aAAA;CACA,mBAAA;CACA,oBAAA;CACA,kBAAA;CACA,oBAAA;CACA,gBAAA;CACA,iBAAA;CACA,mBAAA;CACA,WAAA;CACA;AACA;CACA,aAAA;CACA;AACA;CACA,kBAAA;CACA,mBAAA;CACA;AACA;CACA,aAAA;CACA","file":"index.vue","sourcesContent":["<template>\n<div class=\"fm-btn-wrap\">\n\t<text ref=\"text\" class=\"fm-btn\" :class=\"btnClz\" :style=\"btnStyle\"\n\t\t@click=\"btnClick\">{{text}}</text>\n</div>\n</template>\n\n<style scoped>\n.fm-btn-wrap {\n\theight: 24px;\n\talign-items: center;\n\tflex-direction: row;\n\tmax-width: 100px;\n}\n.fm-btn {\n\theight: 24px;\n\tpadding-left: 12px;\n\tpadding-right: 12px;\n\tline-height: 24px;\n\tborder-radius: 24px;\n\tfont-size: 14px;\n\tfont-weight: 700;\n\ttext-align: center;\n\topacity: 0;\n}\n.fm-btn-small {\n\twidth: 100px;\n}\n.fm-btn-large {\n\tpadding-left: 8px;\n\tpadding-right: 8px;\n}\n.fm-btn-max {\n\twidth: 100px;\n}\n</style>\n\n<script>\n\nconst small_size = 48      //48dp\nconst large_size = 80 //80dp\nconst max_size = 100   //100dp\nconst dis_color = '#cccccc'\nconst transparent = 'transparent'\n\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\tlarge: false,\n\t\t\tsmall: false,\n\t\t\tmax: false,\n\t\t\tshow: false\n\t\t}\n\t},\n\n\tprops: {\n\t\ttext: String,\n\t\tbgColor: {\n\t\t\ttype: String,\n\t\t\tdefault: '#198ded'\n\t\t},\n\t\tcolor: {\n\t\t\ttype: String,\n\t\t\tdefault: '#ffffff'\n\t\t},\n\t\tdisabled: Boolean\n\t},\n\n\tcomputed: {\n\t\tbtnClz() {\n\t\t\tlet clz = []\n\n\t\t\tif (this.large) {\n\t\t\t\tclz.push('fm-btn-large')\n\t\t\t}\n\t\t\tif (this.small) {\n\t\t\t\tclz.push('fm-btn-small')\n\t\t\t}\n\t\t\tif (this.max) {\n\t\t\t\tclz.push('fm-btn-max')\n\t\t\t}\n\n\t\t\treturn clz\n\t\t},\n\t\tbtnStyle() {\n\t\t\tlet sty = {}\n\n\t\t\tif (this.bgColor != transparent) {\n\t\t\t\tsty.backgroundColor = this.bgColor\n\t\t\t}\n\t\t\tif (this.color) {\n\t\t\t\tsty.color = this.color\n\t\t\t\tif (this.bgColor == transparent) {\n\t\t\t\t\tsty.borderColor = this.color\n\t\t\t\t\tsty.borderWidth = 1.44,\n\t\t\t\t\tsty.borderStyle = 'solid',\n\t\t\t\t\tsty.lineHeight = 21.12\n\t\t\t\t}\n\t\t\t}\n\t\t\tif (this.disabled) {\n\t\t\t\tsty.backgroundColor = dis_color\n\t\t\t}\n\t\t\tif (this.show) {\n\t\t\t\tsty.opacity = 1;\n\t\t\t}\n\n\t\t\treturn sty\n\t\t}\n\t},\n\n\tmethods: {\n\t\tbtnClick(evt) {\n\t\t\tif (!this.disabled) {\n\t\t\t\tthis.$emit('click', evt)\n\t\t\t}\n\t\t}\n\t},\n\n\tmounted() {\n\t\tlet w = this.text.length * 14 + 50\n\n\t\tif (w < small_size) {\n\t\t\tthis.small = true\n\t\t} else if (w > large_size) {\n\t\t\tthis.large = true\n\t\t}\n\n\t\tif (w >= max_size) {\n\t\t\tthis.max = true\n\t\t}\n\n\t\tthis.show = true\n\t}\n}\n</script>"],"sourceRoot":""}]);

// exports


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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fm-btn-wrap",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_c('text', {
    ref: "text",
    staticClass: "fm-btn",
    class: _vm.btnClz,
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.btnStyle)),
    on: {
      "click": _vm.btnClick
    }
  }, [_vm._v(_vm._s(_vm.text))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-45eab412", module.exports)
  }
}

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


/* styles */
__webpack_require__(48)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(50),
  /* template */
  __webpack_require__(51),
  /* scopeId */
  "data-v-10b8a20a",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-input/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-10b8a20a", Component.options)
  } else {
    hotAPI.reload("data-v-10b8a20a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("1f79d965", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-10b8a20a\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-10b8a20a\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.fm-input-wrap[data-v-10b8a20a] {\n\tpadding-top: 24px;\n\tpadding-right: 6px;\n\tpadding-left: 6px;\n}\n.fm-textarea[data-v-10b8a20a] {\n\tpadding-bottom: 9px;\n\tpadding-right: 8px;\n\tpadding-left: 8px;\n\tborder-bottom-style: solid;\n\tborder-bottom-width: 1px;\n\tborder-bottom-color: #E6E6E6;\n\tfont-size: 16px;\n\tline-height: 12px;\n\tcolor: #000000;\n\tplaceholder-color: #dddddd;\n\tcaret-color: #198ded;\n}\n.fm-textarea[data-v-10b8a20a]:focus {\n\tborder-bottom-color: #198ded;\n}\n.fm-textarea-error[data-v-10b8a20a] {\n\tborder-bottom-color: #df2b18;\n}\n.error-msg[data-v-10b8a20a] {\n\tfont-size: 12px;\n\tcolor: #df2b18;\n\tmargin-left: 8px;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-input/index.vue?7ee64cb0"],"names":[],"mappings":";AA6BA;CACA,kBAAA;CACA,mBAAA;CACA,kBAAA;CACA;AACA;CACA,oBAAA;CACA,mBAAA;CACA,kBAAA;CACA,2BAAA;CACA,yBAAA;CACA,6BAAA;CACA,gBAAA;CACA,kBAAA;CACA,eAAA;CACA,2BAAA;CACA,qBAAA;CACA;AACA;CACA,6BAAA;CACA;AACA;CACA,6BAAA;CACA;AACA;CACA,gBAAA;CACA,eAAA;CACA,iBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n<div class=\"fm-input-wrap\">\n\t<textarea v-if=\"type === 'textarea'\"\n\t\t:class=\"inputClz\" \n\t\t:value=\"value\" \n\t\t:rows=\"rows\" \n\t\t:maxlength=\"maxlength\" \n\t\t:placeholder=\"placeholder\" \n\t\t@input=\"input\"\n\t\t@change=\"change\"\n\t\t@focus=\"beFocus\"\n\t\t@blur=\"beBlur\"\n\t\tref=\"input\" />\n\t<input v-else \n\t\t:type=\"type\"\n\t\t:class=\"inputClz\" \n\t\t:value=\"value\" \n\t\t:maxlength=\"maxlength\" \n\t\t:placeholder=\"placeholder\"\n\t\t@input=\"input\"\n\t\t@change=\"change\"\n\t\t@focus=\"beFocus\"\n\t\t@blur=\"beBlur\"\n\t\tref=\"input\" />\n\t<text v-if=\"hasError\" class=\"error-msg\">{{errorMessage}}</text>\n</div>\n</template>\n\n<style scoped>\n.fm-input-wrap {\n\tpadding-top: 24px;\n\tpadding-right: 6px;\n\tpadding-left: 6px; \n}\n.fm-textarea {\n\tpadding-bottom: 9px;\n\tpadding-right: 8px;\n\tpadding-left: 8px;\n\tborder-bottom-style: solid;\n\tborder-bottom-width: 1px;\n\tborder-bottom-color: #E6E6E6;\n\tfont-size: 16px;\n\tline-height: 12px;\n\tcolor: #000000;\n\tplaceholder-color: #dddddd;\n\tcaret-color: #198ded;\n}\n.fm-textarea:focus {\n\tborder-bottom-color: #198ded;\n}\n.fm-textarea-error {\n\tborder-bottom-color: #df2b18;\n}\n.error-msg {\n\tfont-size: 12px;\n\tcolor: #df2b18;\n\tmargin-left: 8px;\n}\n</style>\n\n<script>\nconst dom = weex.requireModule('dom')\n\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\trows: 1,\n\t\t\tinput: this.$refs.input\n\t\t}\n\t},\n\n\tprops: {\n\t\tvalue: [String, Number],\n\t\tplaceholder: {\n\t\t\ttype: String,\n\t\t\tdefault: '请输入'\n\t\t},\n\t\tmaxlength: [String, Number],\n\t\thasError: Boolean,\n\t\terrorMessage: {\n\t\t\ttype: 'String',\n\t\t\tdefault: '输入有误'\n\t\t},\n\t\ttype: String\n\t},\n\n\tcomputed: {\n\t\tinputClz() {\n\t\t\tlet clz = ['fm-textarea']\n\t\t\tif (this.hasError) {\n\t\t\t\tclz.push('fm-textarea-error')\n\t\t\t}\n\t\t\treturn clz\n\t\t}\n\t},\n\n\tmethods: {\n\t\tinput (evt) {\n\t\t\tthis.$emit('input', evt)\n\t\t},\n\t\tchange (evt) {\n\t\t\tthis.$emit('change', evt)\n\t\t},\n\t\tbeFocus (evt) {\n\t\t\tthis.$emit('focus', evt)\n\t\t},\n\t\tbeBlur (evt) {\n\t\t\tthis.$emit('blur', evt)\n\t\t},\n\t\tfocus () {\n\t\t\tthis.$refs.input.focus()\n\t\t},\n\t\tblur () {\n\t\t\tthis.$refs.input.blur()\n\t\t},\n\t\tsetSelectionRange (start, end) {\n\t\t\tthis.$refs.input.setSelectionRange(start, end)\n\t\t},\n\t\tgetEditSelectionRange (callback) {\n\t\t\tthis.$refs.input.getEditSelectionRange(callback)\n\t\t}\n\t}\n}\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 50 */
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fm-input-wrap",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [(_vm.type === 'textarea') ? _c('textarea', {
    ref: "input",
    class: _vm.inputClz,
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "rows": _vm.rows,
      "maxlength": _vm.maxlength,
      "placeholder": _vm.placeholder
    },
    domProps: {
      "value": _vm.value
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
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "type": _vm.type,
      "maxlength": _vm.maxlength,
      "placeholder": _vm.placeholder
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "input": _vm.input,
      "change": _vm.change,
      "focus": _vm.beFocus,
      "blur": _vm.beBlur
    }
  }), _vm._v(" "), (_vm.hasError) ? _c('text', {
    staticClass: "error-msg",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_vm._v(_vm._s(_vm.errorMessage))]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-10b8a20a", module.exports)
  }
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(53);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(54)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(56),
  /* template */
  __webpack_require__(57),
  /* scopeId */
  "data-v-745d9462",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-tab-view/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-745d9462", Component.options)
  } else {
    hotAPI.reload("data-v-745d9462", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("44bacdde", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-745d9462\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-745d9462\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.header-wrap[data-v-745d9462] {\n\tmargin-top: 9px;\n\tmargin-right: 22px;\n\tmargin-left: 22px;\n}\n.header[data-v-745d9462] {\n\tflex-direction: row;\n\tjustify-content: center;\n}\n.title[data-v-745d9462] {\n\tflex: 1;\n\tflex-direction: row;\n\tjustify-content: center;\n}\n.text-selected[data-v-745d9462] {\n\tcolor: #f34949;\n}\n.text[data-v-745d9462] {\n\tfont-size: 14px;\n\tfont-weight: 700;\n\ttext-align: center;\n\tcolor: #666666;\n}\n.bottom-line[data-v-745d9462] {\n\theight: 2.4px;\n\tmargin-top: 9px;\n\tbackground-color: #f34949;\n}\n.slider-wrap[data-v-745d9462] {\n\tflex-direction: row;\n\tborder-top-width: 1px;\n\tborder-color: #dddddd;\n}\n.body[data-v-745d9462] {\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-tab-view/index.vue?97e53d10"],"names":[],"mappings":";AA2BA;CACA,gBAAA;CACA,mBAAA;CACA,kBAAA;CACA;AACA;CACA,oBAAA;CACA,wBAAA;CACA;AACA;CACA,QAAA;CACA,oBAAA;CACA,wBAAA;CACA;AACA;CACA,eAAA;CACA;AACA;CACA,gBAAA;CACA,iBAAA;CACA,mBAAA;CACA,eAAA;CACA;AACA;CACA,cAAA;CACA,gBAAA;CACA,0BAAA;CACA;AACA;CACA,oBAAA;CACA,sBAAA;CACA,sBAAA;CACA;AACA;CACA","file":"index.vue","sourcesContent":["<template>\n<div class=\"tab-wrap\">\n\t<div class=\"header-wrap\">\n\t\t<div class=\"header\" ref=\"header\">\n\t\t\t<div v-for=\"(item, idx) in items\" \n\t\t\t\t:key=\"item.name\" \n\t\t\t\tclass=\"title\" \n\t\t\t\t@click=\"titleClick(idx)\">\n\t\t\t\t<text :class=\"['text', idx == current ? 'text-selected' : '']\" >{{item.text}}</text>\t\n\t\t\t</div>\n\t\t</div>\n\t\t<text class=\"bottom-line\" :style=\"lineStyle\" ref=\"line\"></text>\n\t</div>\n\t<div class=\"slider-wrap\" \n\t\tref=\"slider\" \n\t\t:style=\"listStyle\"\n\t\t@touchmove=\"move\" \n\t\t@touchstart=\"start\" \n\t\t@touchend=\"end\">\n\t\t<div v-for=\"(item, idx) in items\" class=\"body\" :style=\"itemStyle\">\n\t\t\t<slot :name=\"item.name\"></slot>\n\t\t</div>\n\t</div>\n</div>\n</template>\n\n<style scoped>\n.header-wrap {\n\tmargin-top: 9px;\n\tmargin-right: 22px;\n\tmargin-left: 22px;\n}\n.header {\n\tflex-direction: row;\n\tjustify-content: center;\n}\n.title {\n\tflex: 1;\n\tflex-direction: row;\n\tjustify-content: center;\n}\n.text-selected {\n\tcolor: #f34949;\n}\n.text {\n\tfont-size: 14px;\n\tfont-weight: 700;\n\ttext-align: center;\n\tcolor: #666666;\n}\n.bottom-line {\n\theight: 2.4px;\n\tmargin-top: 9px;\n\tbackground-color: #f34949;\n}\n.slider-wrap {\n\tflex-direction: row;\n\tborder-top-width: 1px;\n\tborder-color: #dddddd;\n}\n.body {\n}\n</style>\n\n<script>\nconst dom = weex.requireModule('dom')\nconst animation = weex.requireModule('animation')\n\nexport default {\n\tdata () {\n\t\treturn {\n\t\t\twidth: 0,//单个tab宽度\n\t\t\tmin: 0,\n\t\t\ttransX: 0,\n\t\t\tstartX: 0,\n\t\t\tmoveX: 0,\n\t\t\tcurrent: 0,//当前tab index\n\t\t\tlineWidth: 0,//标题下划线宽度\n\t\t\tlineLeft: 0,\n\t\t\tline: 0//标题下划线translate计算比例\n\t\t}\n\t},\n\tprops: {\n\t\titems: {\n\t\t\ttype: Array,\n\t\t\trequired: true\n\t\t}\n\t},\n\tcomputed: {\n\t\tlineStyle () {\n\t\t\treturn {\n\t\t\t\twidth: `${this.lineWidth}px`,\n\t\t\t\t'margin-left': `${this.lineLeft}px`,\n\t\t\t\ttransform: `translateX(${-this.transX/this.line}px)`\n\t\t\t}\n\t\t},\n\t\tlistStyle () {\n\t\t\tlet sty = {\n\t\t\t\topacity: this.width === 0 ? 0 : 1\n\t\t\t}\n\t\t\t\n\t\t\tif (this.width > 0) {\n\t\t\t\tsty.width = `${this.width * this.items.length}px`\n\t\t\t\tsty.transform = `translateX(${this.transX}px)`\n\t\t\t}\n\n\t\t\treturn sty\n\t\t},\n\t\titemStyle () {\n\t\t\treturn {\n\t\t\t\twidth: `${this.width || 360}px`\n\t\t\t}\n\t\t}\n\t},\n\tmounted () {\n\t\tsetTimeout(() => {\n\t\t\tlet { platform } = weex.config.env;\n\t\t\tlet head = (typeof(window) === 'object' && platform.toLowerCase() === 'web') ? this.$refs.header.$children[0].$children[0] : this.$refs.header.children[0].children[0]\n\t\t\tdom.getComponentRect(head, opt => {\n\t\t\t\tthis.lineWidth = opt.size.width + 12\n\t\t\t\tthis.lineLeft = opt.size.left - 22 - 6\n\t\t\t})\n\t\t\tdom.getComponentRect(this.$refs.slider, opt => {\n\t\t\t\tthis.width = opt.size.width\n\t\t\t\tthis.line = this.width / (this.width - 44) * this.items.length\n\t\t\t\tthis.min = -this.width * (this.items.length - 1)\n\t\t\t})\n\t\t}, 100)\n\t},\n\tmethods: {\n\t\ttitleClick (idx) {\n\t\t\tthis.slide(-idx * this.width, -idx)\n\t\t\tthis.$emit('titleclick', idx)\n\t\t},\n\t\tstart (evt) {\n\t\t\tif (this.sliding) return\n\t\t\tthis.startX = evt.changedTouches[0].screenX\n\t\t\tthis.moveX = this.startX\n\t\t},\n\t\tmove (evt) {\n\t\t\tif (this.sliding) return\n\t\t\tlet x = evt.changedTouches[0].screenX\n\t\t\tlet sub = x - this.moveX\n\n\t\t\tthis.transX = Math.max(this.min, Math.min(0, this.transX + sub))\n\t\t\tthis.moveX = x\n\t\t},\n\t\tend (evt) {\n\t\t\tthis.sliding = true\n\n\t\t\tlet x = evt.changedTouches[0].screenX\n\t\t\tlet direct = x - this.startX > 0\n\t\t\tlet num = Math.floor(Math.abs(this.transX) / this.width)\n\t\t\tlet decimal = this.transX % this.width / this.width\n\t\t\tlet int = this.transX > 0 ? num : -num\n\t\t\tlet max = -this.items.length + 1\n\n\t\t\tif (decimal > .2 && direct) {\n\t\t\t\tint = Math.min(0, int + 1)\n\t\t\t} else if (decimal < -.2 && !direct) {\n\t\t\t\tint = Math.max(max, int - 1)\n\t\t\t}\n\n\t\t\tthis.slide(int * this.width, int)\n\t\t},\n\t\tslide (trans, idx) {\n\t\t\tanimation.transition(this.$refs.slider, {\n\t\t\t\tstyles: {\n\t\t\t\t\ttransform: `translateX(${trans}px)`\n\t\t\t\t},\n\t\t\t\tduration: 200,\n\t\t\t\ttimingFunction: 'ease-out'\n\t\t\t}, () => {\n\t\t\t\tthis.current = -idx\n\t\t\t\tthis.transX = trans\n\t\t\t\tthis.sliding = false\n\t\t\t\tthis.$emit('slidend', {selected: this.current})\n\t\t\t})\n\t\t\tanimation.transition(this.$refs.line, {\n\t\t\t\tstyles: {\n\t\t\t\t\ttransform: `translateX(${-trans/this.line}px)`\n\t\t\t\t},\n\t\t\t\tduration: 200,\n\t\t\t\ttimingFunction: 'ease-out'\n\t\t\t})\n\t\t}\n\t}\n}\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 56 */
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tab-wrap",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_c('div', {
    staticClass: "header-wrap",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_c('div', {
    ref: "header",
    staticClass: "header",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, _vm._l((_vm.items), function(item, idx) {
    return _c('div', {
      key: item.name,
      staticClass: "title",
      staticStyle: _vm.$processStyle(undefined),
      style: (_vm.$processStyle(undefined)),
      on: {
        "click": function($event) {
          _vm.titleClick(idx)
        }
      }
    }, [_c('text', {
      class: ['text', idx == _vm.current ? 'text-selected' : ''],
      staticStyle: _vm.$processStyle(undefined),
      style: (_vm.$processStyle(undefined))
    }, [_vm._v(_vm._s(item.text))])])
  })), _vm._v(" "), _c('text', {
    ref: "line",
    staticClass: "bottom-line",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.lineStyle))
  })]), _vm._v(" "), _c('div', {
    ref: "slider",
    staticClass: "slider-wrap",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.listStyle)),
    on: {
      "touchmove": _vm.move,
      "touchstart": _vm.start,
      "touchend": _vm.end
    }
  }, _vm._l((_vm.items), function(item, idx) {
    return _c('div', {
      staticClass: "body",
      staticStyle: _vm.$processStyle(undefined),
      style: (_vm.$processStyle(_vm.itemStyle))
    }, [_vm._t(item.name)], 2)
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-745d9462", module.exports)
  }
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(59);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(60)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(62),
  /* template */
  __webpack_require__(63),
  /* scopeId */
  "data-v-9924f606",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-tips/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9924f606", Component.options)
  } else {
    hotAPI.reload("data-v-9924f606", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("081951f4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-9924f606\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-9924f606\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.tip-wrap[data-v-9924f606] {\n\tflex-direction: row;\n\theight: 40px;\n\tpadding-top: 7.2px;\n}\n.arrow[data-v-9924f606] {\n\tposition: absolute;\n\ttop: 3.6px;\n\twidth: 7.2px;\n\theight: 7.2px;\n\ttransform: rotate(45deg);\n}\n.content-wrap[data-v-9924f606] {\n\tflex-direction: row;\n\talign-items: center;\n\tpadding-top: 9px;\n\tpadding-bottom: 9px;\n\tpadding-left: 10px;\n\tborder-radius: 2px;\n}\n.content[data-v-9924f606] {\n\theight: 17px;\n\tmax-width: 226px;\n\tfont-size: 14px;\n\tcolor: #ffffff;\n}\n.split[data-v-9924f606] {\n\twidth: 1px;\n\theight: 14px;\n\tmargin-left: 9px;\n\tbackground-color: #ffffff;\n\topacity: .4;\n}\n.close[data-v-9924f606] {\n\tcolor: #ffffff;\n\tfont-size: 18px;\n\tmargin-top: 3px;\n\tmargin-left: 10px;\n\tmargin-right: 10px;\n}\n\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-tips/index.vue?81fda80e"],"names":[],"mappings":";AAaA;CACA,oBAAA;CACA,aAAA;CACA,mBAAA;CACA;AACA;CACA,mBAAA;CACA,WAAA;CACA,aAAA;CACA,cAAA;CACA,yBAAA;CACA;AACA;CACA,oBAAA;CACA,oBAAA;CACA,iBAAA;CACA,oBAAA;CACA,mBAAA;CACA,mBAAA;CACA;AACA;CACA,aAAA;CACA,iBAAA;CACA,gBAAA;CACA,eAAA;CACA;AACA;CACA,WAAA;CACA,aAAA;CACA,iBAAA;CACA,0BAAA;CACA,YAAA;CACA;AACA;CACA,eAAA;CACA,gBAAA;CACA,gBAAA;CACA,kBAAA;CACA,mBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n<div v-if=\"show\" class=\"tip-wrap\" :style=\"wrapStyle\">\n\t<div class=\"content-wrap\" :style=\"background\">\n\t\t<slot></slot>\n\t\t<text class=\"content\">{{message}}</text>\n\t\t<text class=\"split\"></text>\n\t\t<fm-icon class=\"close\" @click=\"close\" value=\"&#xe6c0;\" />\n\t</div>\n\t<text class=\"arrow\" :style=\"arrowStyle\"></text>\n</div>\n</template>\n\n<style scoped>\n.tip-wrap {\n\tflex-direction: row;\n\theight: 40px;\n\tpadding-top: 7.2px;\n}\n.arrow {\n\tposition: absolute;\n\ttop: 3.6px;\n\twidth: 7.2px;\n\theight: 7.2px;\n\ttransform: rotate(45deg);\n}\n.content-wrap {\n\tflex-direction: row;\n\talign-items: center;\n\tpadding-top: 9px;\n\tpadding-bottom: 9px;\n\tpadding-left: 10px;\n\tborder-radius: 2px;\n}\n.content {\n\theight: 17px;\n\tmax-width: 226px;\n\tfont-size: 14px;\n\tcolor: #ffffff;\n}\n.split {\n\twidth: 1px;\n\theight: 14px;\n\tmargin-left: 9px;\n\tbackground-color: #ffffff;\n\topacity: .4;\n}\n.close {\n\tcolor: #ffffff;\n\tfont-size: 18px;\n\tmargin-top: 3px;\n\tmargin-left: 10px;\n\tmargin-right: 10px;\n}\n\n</style>\n\n<script>\nimport FmIcon from '../fm-icon'\nexport default {\n\tdata () {\n\t\treturn {\n\t\t\tshow: true\n\t\t}\n\t},\n\tcomponents: { FmIcon },\n\tcomputed: {\n\t\tbackground () {\n\t\t\treturn {\n\t\t\t\tbackgroundColor: this.bgColor\n\t\t\t}\n\t\t},\n\t\twrapStyle () {\n\t\t\treturn {\n\t\t\t\t'justify-content': this.right ? 'flex-end' : 'flex-start'\n\t\t\t}\n\t\t},\n\t\tarrowStyle () {\n\t\t\tlet sty = {\n\t\t\t\tbackgroundColor: this.bgColor\n\t\t\t}\n\t\t\tif (this.right) {\n\t\t\t\tsty.right = '18px'\n\t\t\t} else {\n\t\t\t\tsty.left = '18px'\n\t\t\t}\n\n\t\t\treturn sty\n\t\t}\n\t},\n\n\tprops: {\n\t\tmessage: String,\n\t\tbgColor: {\n\t\t\ttype: String,\n\t\t\tdefault: '#198ded'\n\t\t},\n\t\tright: Boolean\n\t},\n\n\tmethods: {\n\t\tclose () {\n\t\t\tthis.show = false\n\t\t\tthis.$emit('close')\n\t\t}\n\t}\n}\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _fmIcon = __webpack_require__(4);

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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', {
    staticClass: "tip-wrap",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.wrapStyle))
  }, [_c('div', {
    staticClass: "content-wrap",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.background))
  }, [_vm._t("default"), _vm._v(" "), _c('text', {
    staticClass: "content",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_vm._v(_vm._s(_vm.message))]), _vm._v(" "), _c('text', {
    staticClass: "split",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }), _vm._v(" "), _c('fm-icon', {
    staticClass: "close",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "value": "&#xe6c0;"
    },
    on: {
      "click": _vm.close
    }
  })], 2), _vm._v(" "), _c('text', {
    staticClass: "arrow",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.arrowStyle))
  })]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9924f606", module.exports)
  }
}

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


/* styles */
__webpack_require__(66)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(68),
  /* template */
  __webpack_require__(75),
  /* scopeId */
  "data-v-a8d59aa2",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-rich-text/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a8d59aa2", Component.options)
  } else {
    hotAPI.reload("data-v-a8d59aa2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("7a84f44f", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a8d59aa2\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a8d59aa2\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.fm-rich-text[data-v-a8d59aa2] {\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  flex-direction: row;\n  flex-shrink: 1;\n}\n.default-text[data-v-a8d59aa2] {\n  color: #A5A5A5;\n  font-size: 12px;\n  line-height: 16px;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-rich-text/index.vue?51faf661"],"names":[],"mappings":";AAkCA;EACA,4BAAA;EACA,oBAAA;EACA,gBAAA;EACA,oBAAA;EACA,eAAA;CACA;AAEA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n  <div>\n    <div class=\"fm-rich-text\" v-if=\"isNotEmptyArray\">\n      <div v-for=\"v in configList\">\n        <fm-text v-if=\"v.type=='text' && v.text\"\n                            :text-value=\"v.text\"\n                            :text-style=\"v.style\"\n                            :has-text-margin=\"hasTextMargin\"></fm-text>\n\n        <fm-rich-text-link v-if=\"v.type=='link' && v.href && v.text\"\n                            :link-value=\"v.text\"\n                            :link-style=\"v.style\"\n                            :link-href=\"v.href\"\n                            :has-text-margin=\"hasTextMargin\"\n                            @fmRichTextLinkClick=\"linkBeClick\"></fm-rich-text-link>\n\n        <fm-icon v-if=\"v.type=='icon'\"\n                            :color=\"v.color\"\n                            :value=\"v.value\"\n                            :iconStyle=\"v.style\"></fm-icon>\n\n        <fm-tag v-if=\"v.type=='tag'\"\n                           :tagType=\"v.tagType\"\n                           :size=\"v.size\"\n                           :value=\"v.value\"\n                           :color=\"v.color\"\n                           :fontColor=\"v.fontColor\"></fm-tag>\n      </div>\n    </div>\n    <fm-text :text-value=\"configList\" v-if=\"isString\"></fm-text>\n  </div>\n</template>\n\n<style scoped>\n  .fm-rich-text {\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: wrap;\n    flex-direction: row;\n    flex-shrink: 1;\n  }\n\n  .default-text {\n    color: #A5A5A5;\n    font-size: 12px;\n    line-height: 16px;\n  }\n</style>\n\n<script>\n  const Utils = require('./utils');\n  import FmText from '../fm-text'\n  import FmIcon from '../fm-icon'\n  import FmTag from '../fm-tag'\n  import FmRichTextLink from './fm-rich-text-link.vue'\n  module.exports = {\n    components: {\n      FmText, FmIcon, FmTag, FmRichTextLink\n    },\n    props: {\n      configList: {\n        type: [Array, String],\n        default: function () {\n          return []\n        }\n      },\n      hasTextMargin: {\n        type: Boolean,\n        default: true\n      }\n    },\n    data: () => ({}),\n    computed: {\n      isNotEmptyArray () {\n        return Utils.isNonEmptyArray(this.configList);\n      },\n      isString () {\n        return Utils.isString(this.configList);\n      }\n    },\n    methods: {\n        linkBeClick(obj) {\n            this.$emit('linkBeClick', obj)\n        }\n    }\n  };\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fmText = __webpack_require__(3);

var _fmText2 = _interopRequireDefault(_fmText);

var _fmIcon = __webpack_require__(4);

var _fmIcon2 = _interopRequireDefault(_fmIcon);

var _fmTag = __webpack_require__(5);

var _fmTag2 = _interopRequireDefault(_fmTag);

var _fmRichTextLink = __webpack_require__(69);

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

var Utils = __webpack_require__(6);

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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(70),
  /* template */
  __webpack_require__(74),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-rich-text/fm-rich-text-link.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] fm-rich-text-link.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-96e452e8", Component.options)
  } else {
    hotAPI.reload("data-v-96e452e8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fmText = __webpack_require__(3);

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

var Utils = __webpack_require__(6);

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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var required = __webpack_require__(72),
    qs = __webpack_require__(73),
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
/* 72 */
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
/* 73 */
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    on: {
      "click": _vm.onLinkClick
    }
  }, [_c('fm-text', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "text-value": _vm.linkValue,
      "has-text-margin": _vm.hasTextMargin,
      "text-style": _vm.linkStyle ? _vm.linkStyle : _vm.defObj
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-96e452e8", module.exports)
  }
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.isNotEmptyArray) ? _c('div', {
    staticClass: "fm-rich-text",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, _vm._l((_vm.configList), function(v) {
    return _c('div', [(v.type == 'text' && v.text) ? _c('fm-text', {
      staticStyle: _vm.$processStyle(undefined),
      style: (_vm.$processStyle(undefined)),
      attrs: {
        "text-value": v.text,
        "text-style": v.style,
        "has-text-margin": _vm.hasTextMargin
      }
    }) : _vm._e(), _vm._v(" "), (v.type == 'link' && v.href && v.text) ? _c('fm-rich-text-link', {
      staticStyle: _vm.$processStyle(undefined),
      style: (_vm.$processStyle(undefined)),
      attrs: {
        "link-value": v.text,
        "link-style": v.style,
        "link-href": v.href,
        "has-text-margin": _vm.hasTextMargin
      },
      on: {
        "fmRichTextLinkClick": _vm.linkBeClick
      }
    }) : _vm._e(), _vm._v(" "), (v.type == 'icon') ? _c('fm-icon', {
      staticStyle: _vm.$processStyle(undefined),
      style: (_vm.$processStyle(undefined)),
      attrs: {
        "color": v.color,
        "value": v.value,
        "iconStyle": v.style
      }
    }) : _vm._e(), _vm._v(" "), (v.type == 'tag') ? _c('fm-tag', {
      staticStyle: _vm.$processStyle(undefined),
      style: (_vm.$processStyle(undefined)),
      attrs: {
        "tagType": v.tagType,
        "size": v.size,
        "value": v.value,
        "color": v.color,
        "fontColor": v.fontColor
      }
    }) : _vm._e()], 1)
  })) : _vm._e(), _vm._v(" "), (_vm.isString) ? _c('fm-text', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "text-value": _vm.configList
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a8d59aa2", module.exports)
  }
}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(77);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(78)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(80),
  /* template */
  __webpack_require__(81),
  /* scopeId */
  "data-v-584ad4ca",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-special-rich-text/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-584ad4ca", Component.options)
  } else {
    hotAPI.reload("data-v-584ad4ca", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("7e75f768", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-584ad4ca\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-584ad4ca\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.fm-special-rich-text[data-v-584ad4ca] {\n  position: relative;\n}\n.tag-div[data-v-584ad4ca] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: #A5A5A5;\n  font-size: 12px;\n  line-height: 16px;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-special-rich-text/index.vue?23c88351"],"names":[],"mappings":";AAmBA;EACA,mBAAA;CACA;AAEA;EACA,mBAAA;EACA,OAAA;EACA,QAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n  <div class=\"fm-special-rich-text\">\n    <div class=\"tag-div\"\n         :style=\"{top:top+'px'}\">\n      <fm-icon v-if=\"newList[0].type == 'icon' && newList[0].value\"\n                          :value=\"newList[0].value\"\n                          :iconStyle=\"newList[0].style\"></fm-icon>\n      <fm-tag v-if=\"newList[0].type=='tag'\"\n                          :tagType=\"newList[0].tagType\"\n                          :size=\"newList[0].size\"\n                          :value=\"newList[0].value\"\n                          :color=\"newList[0].color\"\n                          :fontColor=\"newList[0].fontColor\"></fm-tag>\n    </div>\n    <fm-text :text-value=\"newList[1].value\" :textStyle=\"newList[1].style\" v-if=\"newList[1].value\"></fm-text>\n  </div>\n</template>\n\n<style scoped>\n  .fm-special-rich-text {\n    position: relative;\n  }\n\n  .tag-div {\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: #A5A5A5;\n    font-size: 12px;\n    line-height: 16px;\n  }\n</style>\n\n<script>\n  const Utils = require('../fm-rich-text/utils');\n  import FmText from '../fm-text'\n  import FmIcon from '../fm-icon'\n  import FmTag from '../fm-tag'\n  module.exports = {\n    components: {\n      FmText, FmIcon, FmTag\n    },\n    props: {\n      configList: {\n        type: [Array, String],\n        default: () => ({})\n      }\n    },\n    computed: {\n      newList () {\n        const { configList } = this;\n        if (Utils.isNonEmptyArray(configList) && configList.length === 2) {\n          let r1 = configList[0];\n          let r2 = configList[1];\n          const iconStyle = r1.style;\n          const textStyle = r2.style;\n          let style = {};\n          let fontSize = 12;\n          const tagWidth = iconStyle && iconStyle.width ? iconStyle.width : 12;\n\n          if (textStyle && textStyle.fontSize) {\n            fontSize = textStyle.fontSize;\n            style = {\n              fontSize: textStyle.fontSize,\n              lineHeight: textStyle.fontSize * 1.4\n            }\n          }\n\n          if (textStyle && textStyle.color) {\n            style = {\n              ...style,\n              color: textStyle.color\n            }\n          }\n\n          if (r1.type === 'tag' && iconStyle && iconStyle.width) {\n            r1 = {\n              ...r1,\n              style: { ...iconStyle, width: null }\n            }\n          }\n          const newValue = r2.value ? new Array(Math.ceil(tagWidth / fontSize) + 1).join('   ') + `  ${r2.value}` : '';\n          r2 = {\n            ...r2,\n            style,\n            value: newValue\n          }\n          return [r1, r2];\n        } else {\n          return [];\n        }\n      },\n      top () {\n        const { configList } = this;\n        if (configList[0].type === 'tag') return 0\n        if (Utils.isNonEmptyArray(configList) && configList.length === 2) {\n          const iconStyle = configList[0].style;\n          const textStyle = configList[1].style;\n          let fontSize = 12;\n          const tagHeight = iconStyle && iconStyle.height ? iconStyle.height : 13;\n          if (textStyle && textStyle.fontSize) {\n            fontSize = textStyle.fontSize;\n          }\n          return Math.ceil((fontSize * 1.3 - tagHeight) / 2);\n        } else {\n          return 0;\n        }\n      }\n    }\n  };\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fmText = __webpack_require__(3);

var _fmText2 = _interopRequireDefault(_fmText);

var _fmIcon = __webpack_require__(4);

var _fmIcon2 = _interopRequireDefault(_fmIcon);

var _fmTag = __webpack_require__(5);

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

var Utils = __webpack_require__(6);

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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fm-special-rich-text",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_c('div', {
    staticClass: "tag-div",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      top: _vm.top + 'px'
    }))
  }, [(_vm.newList[0].type == 'icon' && _vm.newList[0].value) ? _c('fm-icon', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "value": _vm.newList[0].value,
      "iconStyle": _vm.newList[0].style
    }
  }) : _vm._e(), _vm._v(" "), (_vm.newList[0].type == 'tag') ? _c('fm-tag', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "tagType": _vm.newList[0].tagType,
      "size": _vm.newList[0].size,
      "value": _vm.newList[0].value,
      "color": _vm.newList[0].color,
      "fontColor": _vm.newList[0].fontColor
    }
  }) : _vm._e()], 1), _vm._v(" "), (_vm.newList[1].value) ? _c('fm-text', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "text-value": _vm.newList[1].value,
      "textStyle": _vm.newList[1].style
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-584ad4ca", module.exports)
  }
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(83);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(84)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(86),
  /* template */
  __webpack_require__(87),
  /* scopeId */
  "data-v-52ae49d0",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-foldable-text/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-52ae49d0", Component.options)
  } else {
    hotAPI.reload("data-v-52ae49d0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(85);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("8d1044c0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-52ae49d0\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-52ae49d0\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.container[data-v-52ae49d0] {\n    position: relative;\n}\n.text[data-v-52ae49d0] {\n    font-family: \"Source Han Sans CN\", Roboto, sans-serif;\n    color: #999;\n}\n.text_small[data-v-52ae49d0] {\n    font-size: 12px;\n    line-height: 14px;\n}\n.text_large[data-v-52ae49d0] {\n    font-family: sans-serif-medium;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 24px;\n}\n.text_huge[data-v-52ae49d0] {\n    font-family: sans-serif-medium;\n    font-size: 18px;\n    line-height: 26px;\n}\n.more[data-v-52ae49d0] {\n    position: absolute;\n    right: 6px;\n    bottom: 0;\n}\n.test[data-v-52ae49d0] {\n    flex-direction: row;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-foldable-text/index.vue?218b3de5"],"names":[],"mappings":";AAUA;IACA,mBAAA;CACA;AACA;IACA,sDAAA;IACA,YAAA;CACA;AACA;IACA,gBAAA;IACA,kBAAA;CACA;AACA;IACA,+BAAA;IACA,gBAAA;IACA,iBAAA;IACA,kBAAA;CACA;AACA;IACA,+BAAA;IACA,gBAAA;IACA,kBAAA;CACA;AACA;IACA,mBAAA;IACA,WAAA;IACA,UAAA;CACA;AACA;IACA,oBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"wrapper\" @click=\"fold\">\n        <div class=\"container\" ref=\"plane\" :style=\"planeStyle\">\n            <text :class=\"textClz\" ref=\"text\" :style=\"textStyle\">{{ getText }}</text>\n            <text class=\"more\" v-if=\"folded\" ref=\"more\" :style=\"moreStyle\">{{ tipValue }}</text>\n        </div>\n    </div>\n</template>\n\n<style scoped>\n.container {\n    position: relative;\n}\n.text {\n    font-family: \"Source Han Sans CN\", Roboto, sans-serif;\n    color: #999;\n}\n.text_small {\n    font-size: 12px;\n    line-height: 14px;\n}\n.text_large {\n    font-family: sans-serif-medium;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 24px;\n}\n.text_huge {\n    font-family: sans-serif-medium;\n    font-size: 18px;\n    line-height: 26px;\n}\n.more {\n    position: absolute;\n    right: 6px;\n    bottom: 0;\n}\n.test {\n    flex-direction: row;\n}\n</style>\n\n<script>\nexport default {\n    data() {\n        return {\n            expandHeight: '',\n            unexpandHeight: '',\n            animationHeight: '',\n            foldText: ''\n        }\n    },\n    props: {\n        width: {\n            type: Number,\n            default: 340\n        },\n        text: {\n            type: String,\n            default: ''\n        },\n        lines: {\n            type: Number,\n            default: 2\n        },\n        folded: {\n            type: Boolean,\n            default: true\n        },\n        small: {\n            type: Boolean,\n            default: true\n        },\n        large: Boolean,\n        huge: Boolean,\n        textStyle: Object,\n        tipStyle: Object,\n        tipValue: {\n            type: String,\n            default: '更多'\n        }\n    },\n    mounted() {\n        if (this.foldText === '') {\n            const { textStyle } = this\n            let fontSize = (textStyle && textStyle.fontSize) ? textStyle.fontSize : this.large ? 16 : this.huge ? 18 : 12\n            // 计算折叠后的文本\n            let size1 = fontSize + fontSize * 0.03 // 汉字\n            let size2 = fontSize * 0.56 // 英文\n            let size3 = fontSize * 0.556 // 数字\n            let size4 = fontSize * 0.77 // 全角\n            let size5 = fontSize * 0.2 // 半角\n            let tSize = 0, tmpStr = ''\n            let maxWith = this.width * this.lines - size1 * this.tipValue.length\n            for (let c of this.text) {\n                if (/^[\\u4e00-\\u9fa5]/.test(c)) {\n                    // 汉字\n                    tSize += size1\n                } else if (/^[a-zA-Z]/.test(c)){\n                    // 英文\n                    tSize += size2\n                } else if (/^[0-9]/.test(c)){\n                    // 数字\n                    tSize += size3\n                } else if (/^[·《》，。？、：；“”‘’——【】]/.test(c)) {\n                    // 全角\n                    tSize += size4\n                } else if (/^[`~!@#\\$%\\^&\\*\\(\\)_\\-\\+=\\{\\}\\[\\]|\\\\:;\"'<>,.\\?\\/\\s]/.test(c)) {\n                    // 半角\n                    tSize += size5\n                } else {\n                    // 其他\n                    tSize += size1\n                }\n                if (tSize >= maxWith) {\n                    tmpStr += '..'\n                    break\n                }\n                tmpStr += c\n            }\n            this.foldText = tmpStr\n        }\n    },\n    computed: {\n        getText() {\n            return this.folded ? this.foldText : this.text\n        },\n        planeStyle() {\n            return {\n                width: this.width\n            }\n        },\n        moreStyle() {\n            return {\n                fontSize: this.large ? 16 : this.huge ? 18 : 12,\n                lineHeight: this.large ? 24 : this.huge ? 26 : 14,\n                color: '#198ded',\n                fontWeight: '600',\n                backgroundColor: '#fff',\n                ...this.tipStyle\n            }\n        },\n        textClz() {\n            let clz = ['text', 'text_small']\n            if (this.large) {\n                clz.push('text_large')\n            } else if (this.huge) {\n                clz.push('text_huge')\n            }\n            return clz\n        }\n    },\n    methods: {\n        fold() {\n            this.folded = !this.folded\n        }\n    }\n}\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 86 */
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
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    on: {
      "click": _vm.fold
    }
  }, [_c('div', {
    ref: "plane",
    staticClass: "container",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.planeStyle))
  }, [_c('text', {
    ref: "text",
    class: _vm.textClz,
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.textStyle))
  }, [_vm._v(_vm._s(_vm.getText))]), _vm._v(" "), (_vm.folded) ? _c('text', {
    ref: "more",
    staticClass: "more",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.moreStyle))
  }, [_vm._v(_vm._s(_vm.tipValue))]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-52ae49d0", module.exports)
  }
}

/***/ }),
/* 88 */
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(90),
  /* template */
  __webpack_require__(91),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-image/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-120a0168", Component.options)
  } else {
    hotAPI.reload("data-v-120a0168", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 90 */
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
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fm-image",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_c('image', {
    ref: "img",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.getStyle)),
    attrs: {
      "src": _vm.src
    },
    on: {
      "load": _vm.onLoad
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-120a0168", module.exports)
  }
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(94)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(96),
  /* template */
  __webpack_require__(97),
  /* scopeId */
  "data-v-930bf874",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/example/_mods/title.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] title.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-930bf874", Component.options)
  } else {
    hotAPI.reload("data-v-930bf874", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(98)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(100),
  /* template */
  __webpack_require__(101),
  /* scopeId */
  "data-v-00b1ae00",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/example/_mods/category.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] category.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-00b1ae00", Component.options)
  } else {
    hotAPI.reload("data-v-00b1ae00", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(95);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("41cc3783", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-930bf874\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./title.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-930bf874\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./title.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.wxc-title[data-v-930bf874] {\n  margin-top: 10px;\n  margin-left: 10px;\n  flex-direction: row;\n  align-items: center;\n}\n.logo[data-v-930bf874] {\n  width: 60px;\n  height: 60px;\n  margin-left: 10px;\n}\n.text[data-v-930bf874] {\n  margin-left: 10px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #000;\n}\n\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/example/_mods/title.vue?0b13c1a4"],"names":[],"mappings":";AAQA;EACA,iBAAA;EACA,kBAAA;EACA,oBAAA;EACA,oBAAA;CACA;AAEA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;CACA;AAEA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,YAAA;CACA","file":"title.vue","sourcesContent":["<template>\n  <div class=\"wxc-title\">\n    <image class=\"logo\" src=\"http://design.flyme.cn/book/images/Flyme_logo.png\"></image>\n    <text class=\"text\">{{title}}</text>\n  </div>\n</template>\n\n<style scoped>\n  .wxc-title {\n    margin-top: 10px;\n    margin-left: 10px;\n    flex-direction: row;\n    align-items: center;\n  }\n\n  .logo {\n    width: 60px;\n    height: 60px;\n    margin-left: 10px;\n  }\n\n  .text {\n    margin-left: 10px;\n    font-size: 16px;\n    font-weight: 600;\n    color: #000;\n  }\n\n</style>\n\n<script>\n  export default {\n    props: {\n      title: String\n    }\n  }\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 96 */
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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wxc-title",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_c('image', {
    staticClass: "logo",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "src": "http://design.flyme.cn/book/images/Flyme_logo.png"
    }
  }), _vm._v(" "), _c('text', {
    staticClass: "text",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_vm._v(_vm._s(_vm.title))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-930bf874", module.exports)
  }
}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(99);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("3bc9d13a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-00b1ae00\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./category.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-00b1ae00\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./category.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.category[data-v-00b1ae00] {\n  margin-top: 10px;\n  padding-left: 12px;\n  width: 360px;\n  height: 34px;\n  background-color: #198ded;\n  justify-content: center;\n}\n.category-text[data-v-00b1ae00] {\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n}\n\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/example/_mods/category.vue?1f930373"],"names":[],"mappings":";AAOA;EACA,iBAAA;EACA,mBAAA;EACA,aAAA;EACA,aAAA;EACA,0BAAA;EACA,wBAAA;CACA;AAEA;EACA,YAAA;EACA,iBAAA;EACA,gBAAA;CACA","file":"category.vue","sourcesContent":["<template>\n  <div class=\"category\">\n    <text class=\"category-text\">{{title}}</text>\n  </div>\n</template>\n\n<style scoped>\n  .category {\n    margin-top: 10px;\n    padding-left: 12px;\n    width: 360px;\n    height: 34px;\n    background-color: #198ded;\n    justify-content: center;\n  }\n\n  .category-text {\n    color: #fff;\n    font-weight: 600;\n    font-size: 14px;\n  }\n\n</style>\n\n<script>\n  export default {\n    props: {\n      title: String\n    }\n  }\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 100 */
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
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "category",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_c('text', {
    staticClass: "category-text",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_vm._v(_vm._s(_vm.title))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-00b1ae00", module.exports)
  }
}

/***/ }),
/* 102 */
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
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(122);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var meta = weex.requireModule('meta');
// 配置 viewport 的宽度为 360px
meta.setViewport({
  width: 360
});
_index2.default.el = '#root';
exports.default = new Vue(_index2.default);

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(123)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(125),
  /* template */
  __webpack_require__(126),
  /* scopeId */
  "data-v-7048e1fa",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/example/input/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7048e1fa", Component.options)
  } else {
    hotAPI.reload("data-v-7048e1fa", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(124);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("49517cd2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7048e1fa\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7048e1fa\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.mzui-demo[data-v-7048e1fa] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    background-color: #fff;\n}\n.title[data-v-7048e1fa] {\n    margin-top: 20px;\n    margin-bottom: 10px;\n    color: #aaa;\n}\n.contaniner[data-v-7048e1fa] {\n    padding: 10px;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/example/input/index.vue?3a1c13bc"],"names":[],"mappings":";AAqBA;IACA,mBAAA;IACA,OAAA;IACA,SAAA;IACA,QAAA;IACA,UAAA;IACA,uBAAA;CACA;AACA;IACA,iBAAA;IACA,oBAAA;IACA,YAAA;CACA;AACA;IACA,cAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"mzui-demo\">\n        <scroller class=\"scroller\">\n            <title title=\"fm-input\"></title>\n            <category title=\"默认的输入框\"></category>\n            <fm-input />\n            <category title=\"带初始值的输入框\"></category>\n            <fm-input type=\"textarea\" placeholder=\"textarea\" />\n            <fm-input value=\"value\" />\n            <category title=\"限制最大输入长度\"></category>\n            <fm-input maxlength=\"20\" placeholder=\"maxlength:20\" />\n            <category title=\"不同的输入类型\"></category>\n            <fm-input type=\"time\" placeholder=\"time\" />\n            <fm-input type=\"password\" placeholder=\"password\" />\n            <category title=\"输入有误\"></category>\n            <fm-input hasError value=\"hasError\" />\n        </scroller>\n    </div>\n</template>\n\n<style scoped>\n    .mzui-demo {\n        position: absolute;\n        top: 0;\n        right: 0;\n        left: 0;\n        bottom: 0;\n        background-color: #fff;\n    }\n    .title {\n        margin-top: 20px;\n        margin-bottom: 10px;\n        color: #aaa;\n    }\n    .contaniner {\n        padding: 10px;\n    }\n</style>\n\n<script>\nimport { FmInput } from '../../index';\nimport Title from '../_mods/title.vue';\nimport Category from '../_mods/category.vue';\nimport { setTitle } from '../_mods/set-nav';\n\nconst modal = weex.requireModule('modal');\n\nexport default {\n    components: { Title, Category, FmInput }\n}\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(8);

var _title = __webpack_require__(92);

var _title2 = _interopRequireDefault(_title);

var _category = __webpack_require__(93);

var _category2 = _interopRequireDefault(_category);

var _setNav = __webpack_require__(102);

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

var modal = weex.requireModule('modal');

exports.default = {
    components: { Title: _title2.default, Category: _category2.default, FmInput: _index.FmInput }
};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mzui-demo",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_c('scroller', {
    staticClass: "scroller",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_c('title', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "title": "fm-input"
    }
  }), _vm._v(" "), _c('category', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "title": "默认的输入框"
    }
  }), _vm._v(" "), _c('fm-input'), _vm._v(" "), _c('category', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "title": "带初始值的输入框"
    }
  }), _vm._v(" "), _c('fm-input', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "type": "textarea",
      "placeholder": "textarea"
    }
  }), _vm._v(" "), _c('fm-input', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "value": "value"
    }
  }), _vm._v(" "), _c('category', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "title": "限制最大输入长度"
    }
  }), _vm._v(" "), _c('fm-input', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "maxlength": "20",
      "placeholder": "maxlength:20"
    }
  }), _vm._v(" "), _c('category', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "title": "不同的输入类型"
    }
  }), _vm._v(" "), _c('fm-input', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "type": "time",
      "placeholder": "time"
    }
  }), _vm._v(" "), _c('fm-input', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "type": "password",
      "placeholder": "password"
    }
  }), _vm._v(" "), _c('category', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "title": "输入有误"
    }
  }), _vm._v(" "), _c('fm-input', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "hasError": "",
      "value": "hasError"
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7048e1fa", module.exports)
  }
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.web.js.map