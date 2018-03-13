// { "framework": "Vue" }

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["npm/weex-flymeui/index"] = factory();
	else
		root["npm/weex-flymeui/index"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
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
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
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

var listToStyles = __webpack_require__(21)

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

var _index = __webpack_require__(49);

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
exports.use = exports.t = undefined;

var _zhCN = __webpack_require__(33);

var _zhCN2 = _interopRequireDefault(_zhCN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lang = _zhCN2.default;

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _locale = __webpack_require__(4);

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(44);

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

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 Copyright 2018 Alibaba Group

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _universalEnv = __webpack_require__(1);

var _bindingxParser = __webpack_require__(3);

function requireModule(moduleName) {
  try {
    if ((typeof weex === 'undefined' ? 'undefined' : _typeof(weex)) !== undefined && weex.requireModule) {
      // eslint-disable-line
      return weex.requireModule(moduleName); // eslint-disable-line
    }
  } catch (err) {}
  return window.require('@weex-module/' + moduleName);
};

var isSupportNewBinding = true;
var isSupportBinding = true;
var WeexBinding = void 0;
var WebBinding = {};
if (_universalEnv.isWeb) {
  WebBinding = __webpack_require__(5);
} else {
  try {
    WeexBinding = requireModule('bindingx');
    isSupportNewBinding = true;
  } catch (e) {
    isSupportNewBinding = false;
  }
  if (!WeexBinding || !WeexBinding.bind) {
    try {
      WeexBinding = requireModule('binding');
      isSupportNewBinding = true;
    } catch (e) {
      isSupportNewBinding = false;
    }
  }
  isSupportNewBinding = !!(WeexBinding && WeexBinding.bind && WeexBinding.unbind);
  if (!isSupportNewBinding) {
    try {
      WeexBinding = requireModule('expressionBinding');
      isSupportBinding = true;
    } catch (err) {
      isSupportBinding = false;
    }
  }
  isSupportBinding = !!(WeexBinding && (WeexBinding.bind || WeexBinding.createBinding));
}

function formatExpression(expression) {
  if (expression === undefined) return;
  try {
    expression = JSON.parse(expression);
  } catch (err) {}
  var resultExpression = {};
  if (typeof expression === 'string') {
    resultExpression.origin = expression;
  } else if (expression) {
    resultExpression.origin = expression.origin;
    resultExpression.transformed = expression.transformed;
  }
  if (!resultExpression.transformed && !resultExpression.origin) return;
  resultExpression.transformed = resultExpression.transformed || (0, _bindingxParser.parse)(resultExpression.origin);
  return resultExpression;
}

// 统一回调参数
function fixCallback(callback) {
  return function () {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (typeof callback === 'function') {
      return callback({
        state: params.state === 'end' ? 'exit' : params.state,
        t: params.t !== undefined ? params.t : params.deltaT
      });
    }
  };
}

exports.default = {
  // 是否支持新版本的binding
  isSupportNewBinding: isSupportNewBinding,
  // 是否支持binding
  isSupportBinding: isSupportBinding,
  _bindingInstances: [],
  /**
   * 绑定
   * @param options 参数
   * @example
   {
     anchor:blockRef,
     eventType:'pan',
     props: [
     {
       element:blockRef,
       property:'transform.translateX',
       expression:{
         origin:"x+1",
         transformed:"{\"type\":\"+\",\"children\":[{\"type\":\"Identifier\",\"value\":\"x\"},{\"type\":\"NumericLiteral\",\"value\":1}]}"
       }
     }
    ]
   }
   */
  bind: function bind(options) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

    if (!options) {
      throw new Error('should pass options for binding');
    }

    options.exitExpression = formatExpression(options.exitExpression);

    if (options.props) {
      options.props.forEach(function (prop) {
        prop.expression = formatExpression(prop.expression);
      });
    }

    if (_universalEnv.isWeex) {
      if (WeexBinding && isSupportBinding) {
        if (isSupportNewBinding) {
          return WeexBinding.bind(options, options && options.eventType === 'timing' ? fixCallback(callback) : callback);
        } else {
          WeexBinding.enableBinding(options.anchor, options.eventType);
          // 处理expression的参数格式
          var expressionArgs = options.props.map(function (prop) {
            return {
              element: prop.element,
              property: prop.property,
              expression: prop.expression.transformed
            };
          });
          WeexBinding.createBinding(options.anchor, options.eventType, '', expressionArgs, callback);
        }
      }
    } else {
      return WebBinding.bind(options, callback);
    }
  },

  /**
   *  @param {object} options
   *  @example
   *  {eventType:'pan',
   *   token:self.gesToken}
   */
  unbind: function unbind(options) {
    if (!options) {
      throw new Error('should pass options for binding');
    }
    if (_universalEnv.isWeex) {
      if (WeexBinding && isSupportBinding) {
        if (isSupportNewBinding) {
          return WeexBinding.unbind(options);
        } else {
          return WeexBinding.disableBinding(options.anchor, options.eventType);
        }
      }
    } else {
      return WebBinding.unbind(options);
    }
  },
  unbindAll: function unbindAll() {
    if (_universalEnv.isWeex) {
      if (WeexBinding && isSupportBinding) {
        if (isSupportNewBinding) {
          return WeexBinding.unbindAll();
        } else {
          return WeexBinding.disableAll();
        }
      }
    } else {
      return WebBinding.unbindAll();
    }
  },
  getComputedStyle: function getComputedStyle(el) {
    if (_universalEnv.isWeex) {
      if (isSupportNewBinding) {
        return WeexBinding.getComputedStyle(el);
      } else {
        return {};
      }
    } else {
      return WebBinding.getComputedStyle(el);
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// https://www.w3.org/TR/html5/webappapis.html#dom-navigator-appcodename
var isWeb = exports.isWeb = (typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) === 'object' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko');
var isNode = exports.isNode = typeof process !== 'undefined' && !!(process.versions && process.versions.node);
var isWeex = exports.isWeex = typeof callNative === 'function';
var isReactNative = exports.isReactNative = typeof __fbBatchedBridgeConfig !== 'undefined';
exports['default'] = module.exports;
exports.default = module.exports;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(4);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var lex = {
  InputElementDiv: '<WhiteSpace>|<LineTerminator>|<ReservedWord>|<Identifier>|<NumericLiteral>|<Punctuator>|<StringLiteral>',
  InputElementRegExp: '<WhiteSpace>|<LineTerminator>|<ReservedWord>|<Identifier>|<NumericLiteral>|<Punctuator>|<StringLiteral>',
  ReservedWord: '<Keyword>|<NullLiteral>|<BooleanLiteral>',
  WhiteSpace: /[\t\v\f\u0020\u00A0\u1680\u180E\u2000-\u200A\u202F\u205f\u3000\uFEFF]/,
  LineTerminator: /[\n\r\u2028\u2029]/,
  Keyword: /new(?![_$a-zA-Z0-9])|void(?![_$a-zA-Z0-9])|delete(?![_$a-zA-Z0-9])|in(?![_$a-zA-Z0-9])|instanceof(?![_$a-zA-Z0-9])|typeof(?![_$a-zA-Z0-9])/,
  NullLiteral: /null(?![_$a-zA-Z0-9])/,
  BooleanLiteral: /(?:true|false)(?![_$a-zA-Z0-9])/,
  Identifier: /[_$a-zA-Z][_$a-zA-Z0-9]*/,
  Punctuator: /\/|=>|\*\*|>>>=|>>=|<<=|===|!==|>>>|<<|%=|\*=|-=|\+=|<=|>=|==|!=|\^=|\|=|\|\||&&|&=|>>|\+\+|--|\:|}|\*|&|\||\^|!|~|-|\+|\?|%|=|>|<|,|;|\.(?![0-9])|\]|\[|\)|\(|{/,
  DivPunctuator: /\/=|\//,
  NumericLiteral: /(?:0[xX][0-9a-fA-F]*|\.[0-9]+|(?:[1-9]+[0-9]*|0)(?:\.[0-9]*|\.)?)(?:[eE][+-]{0,1}[0-9]+)?(?![_$a-zA-Z0-9])/,
  StringLiteral: /"(?:[^"\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*"|'(?:[^'\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*'/,
  RegularExpressionLiteral: /\/(?:\[(?:\\[\s\S]|[^\]])*\]|[^*\/\\\n\r\u2028\u2029]|\\[^\n\r\u2028\u2029])(?:\[(?:\\[\s\S]|[^\]])*\]|[^\/\\\n\r\u2028\u2029]|\\[^\n\r\u2028\u2029])*\/[0-9a-zA-Z]*/
};

function XRegExp(xregexps, rootname, flag) {
  var expnames = [rootname];

  function buildRegExp(source) {
    var regexp = new RegExp;
    regexp.compile(source.replace(/<([^>]+)>/g,
      function (all, expname) {
        if (!xregexps[expname])
          return '';
        expnames.push(expname);
        if (xregexps[expname] instanceof RegExp)
          return '(' + xregexps[expname].source + ')';
        return '(' + buildRegExp(xregexps[expname]).source + ')';
      }), flag);
    return regexp;
  }

  var regexp = buildRegExp(xregexps[rootname]);
  this.exec = function (string) {
    var matches = regexp.exec(string);
    if (matches == null)
      return null;
    var result = new String(matches[0]);
    for (var i = 0; i < expnames.length; i++)
      if (matches[i])
        result[expnames[i]] = matches[i];
    return result;
  };
  Object.defineProperty(this, 'lastIndex',
    {
      'get': function () {
        return regexp.lastIndex;
      },
      'set': function (v) {
        regexp.lastIndex = v;
      }
    });
}

function LexicalParser() {
  var inputElementDiv = new XRegExp(lex, 'InputElementDiv', 'g');
  var inputElementRegExp = new XRegExp(lex, 'InputElementRegExp', 'g');
  var source;
  Object.defineProperty(this, 'source', {
    'get': function () {
      return source;
    },
    'set': function (v) {
      source = v;
      inputElementDiv.lastIndex = 0;
      inputElementRegExp.lastIndex = 0;
    }
  });
  this.reset = function () {
    inputElementDiv.lastIndex = 0;
    inputElementRegExp.lastIndex = 0;
  };
  this.getNextToken = function (useDiv) {
    var lastIndex = inputElementDiv.lastIndex;
    var inputElement;
    if (useDiv)
      inputElement = inputElementDiv;
    else
      inputElement = inputElementRegExp;
    var token = inputElement.exec(source);
    if (token && inputElement.lastIndex - lastIndex > token.length) {
      throw new SyntaxError('Unexpected token ILLEGAL');
    }
    inputElementDiv.lastIndex = inputElement.lastIndex;
    inputElementRegExp.lastIndex = inputElement.lastIndex;
    return token;
  };
}

var rules = {
  'IdentifierName': [['Identifier']],
  'Literal': [['NullLiteral'], ['BooleanLiteral'], ['NumericLiteral'], ['StringLiteral'], ['RegularExpressionLiteral']],
  'PrimaryExpression': [['Identifier'], ['Literal'], ['(', 'Expression', ')']],
  'CallExpression': [['PrimaryExpression', 'Arguments'], ['CallExpression', 'Arguments']],
  'Arguments': [['(', ')'], ['(', 'ArgumentList', ')']],
  'ArgumentList': [['ConditionalExpression'], ['ArgumentList', ',', 'ConditionalExpression']],
  'LeftHandSideExpression': [['PrimaryExpression'], ['CallExpression']],
  'UnaryExpression': [['LeftHandSideExpression'], ['void', 'UnaryExpression'], ['+', 'UnaryExpression'], ['-', 'UnaryExpression'], ['~', 'UnaryExpression'], ['!', 'UnaryExpression']],
  'ExponentiationExpression': [['UnaryExpression'], ['ExponentiationExpression', '**', 'UnaryExpression']],
  'MultiplicativeExpression': [['MultiplicativeExpression', '/', 'ExponentiationExpression'], ['ExponentiationExpression'], ['MultiplicativeExpression', '*', 'ExponentiationExpression'], ['MultiplicativeExpression', '%', 'ExponentiationExpression']],
  'AdditiveExpression': [['MultiplicativeExpression'], ['AdditiveExpression', '+', 'MultiplicativeExpression'], ['AdditiveExpression', '-', 'MultiplicativeExpression']],
  'ShiftExpression': [['AdditiveExpression'], ['ShiftExpression', '<<', 'AdditiveExpression'], ['ShiftExpression', '>>', 'AdditiveExpression'], ['ShiftExpression', '>>>', 'AdditiveExpression']],
  'RelationalExpression': [['ShiftExpression'], ['RelationalExpression', '<', 'ShiftExpression'], ['RelationalExpression', '>', 'ShiftExpression'], ['RelationalExpression', '<=', 'ShiftExpression'], ['RelationalExpression', '>=', 'ShiftExpression'], ['RelationalExpression', 'instanceof', 'ShiftExpression'], ['RelationalExpression', 'in', 'ShiftExpression']],
  'EqualityExpression': [['RelationalExpression'], ['EqualityExpression', '==', 'RelationalExpression'], ['EqualityExpression', '!=', 'RelationalExpression'], ['EqualityExpression', '===', 'RelationalExpression'], ['EqualityExpression', '!==', 'RelationalExpression']],
  'BitwiseANDExpression': [['EqualityExpression'], ['BitwiseANDExpression', '&', 'EqualityExpression']],
  'BitwiseXORExpression': [['BitwiseANDExpression'], ['BitwiseXORExpression', '^', 'BitwiseANDExpression']],
  'BitwiseORExpression': [['BitwiseXORExpression'], ['BitwiseORExpression', '|', 'BitwiseXORExpression']],
  'LogicalANDExpression': [['BitwiseORExpression'], ['LogicalANDExpression', '&&', 'BitwiseORExpression']],
  'LogicalORExpression': [['LogicalANDExpression'], ['LogicalORExpression', '||', 'LogicalANDExpression']],
  'ConditionalExpression': [['LogicalORExpression'], ['LogicalORExpression', '?', 'LogicalORExpression', ':', 'LogicalORExpression']],
  'Expression': [['ConditionalExpression'], ['Expression', ',', 'ConditionalExpression']],
  'Program': [['Expression']]

};

function Symbol(symbolName, token) {
  this.name = symbolName;
  this.token = token;
  this.childNodes = [];
  this.toString = function (indent) {
    if (!indent)
      indent = '';
    if (this.childNodes.length == 1)
      return this.childNodes[0].toString(indent);
    var str = indent + this.name + (this.token != undefined && this.name != this.token ? ':' + this.token : '') + '\n';
    for (var i = 0; i < this.childNodes.length; i++)
      str += this.childNodes[i].toString(indent + '    ');
    return str;
  };
}

function SyntacticalParser() {
  var currentRule;
  var root = {
    Program: '$'
  };
  var hash = {};

  function closureNode(node) {

    hash[JSON.stringify(node)] = node;

    var queue = Object.getOwnPropertyNames(node);
    while (queue.length) {
      var symbolName = queue.shift();
      if (!rules[symbolName])
        continue;
      rules[symbolName].forEach(function (rule) {
        if (!node[rule[0]])
          queue.push(rule[0]);
        var rulenode = node;
        var lastnode = null;
        rule.forEach(function (symbol) {
          if (!rulenode[symbol])
            rulenode[symbol] = {};
          lastnode = rulenode;
          rulenode = rulenode[symbol];
        });
        if (node[symbolName].$div)
          rulenode.$div = true;
        rulenode.$reduce = symbolName;
        rulenode.$count = rule.length;
      });
    }

    for (var p in node) {
      if (typeof node[p] != 'object' || p.charAt(0) == '$' || node[p].$closure)
        continue;
      if (hash[JSON.stringify(node[p])])
        node[p] = hash[JSON.stringify(node[p])];
      else {
        closureNode(node[p]);
      }
    }
    node.$closure = true;
  }

  closureNode(root);
  var symbolStack = [];
  var statusStack = [root];
  var current = root;
  this.insertSymbol = function insertSymbol(symbol, haveLineTerminator) {
    while (!current[symbol.name] && current.$reduce) {
      var count = current.$count;
      var newsymbol = new Symbol(current.$reduce);
      while (count--)
        newsymbol.childNodes.push(symbolStack.pop()), statusStack.pop();
      current = statusStack[statusStack.length - 1];
      this.insertSymbol(newsymbol);
    }
    current = current[symbol.name];
    symbolStack.push(symbol), statusStack.push(current);
    if (!current)
      throw new Error();
    return current.$div;
  };
  this.reset = function () {
    current = root;
    symbolStack = [];
    statusStack = [root];
  };
  Object.defineProperty(this, 'grammarTree', {
    'get': function () {
      try {
        while (current.$reduce) {
          var count = current.$count;
          var newsymbol = new Symbol(current.$reduce);
          while (count--)
            newsymbol.childNodes.push(symbolStack.pop()), statusStack.pop();
          current = statusStack[statusStack.length - 1];
          this.insertSymbol(newsymbol);
        }
        if (symbolStack.length > 0 && current[';']) {
          this.insertSymbol(new Symbol(';', ';'));
          return this.grammarTree;
        }
        if (symbolStack.length != 1 || symbolStack[0].name != 'Program')
          throw new Error();
      } catch (e) {
        throw new SyntaxError('Unexpected end of input');
      }
      return symbolStack[0];
    }
  });
}

function Parser() {
  this.lexicalParser = new LexicalParser();
  this.syntacticalParser = new SyntacticalParser();
  var terminalSymbols = ['NullLiteral', 'BooleanLiteral', 'NumericLiteral', 'StringLiteral', 'RegularExpressionLiteral', 'Identifier', '**', '=>', '{', '}', '(', ')', '[', ']', '.', ';', ',', '<', '>', '<=', '>=', '==', '!=', '===', '!==', '+', '-', '*', '%', '++', '--', '<<', '>>', '>>>', '&', '|', '^', '!', '~', '&&', '||', '?', ':', '=', '+=', '-=', '*=', '%=', '<<=', '>>=', '>>>=', '&=', '|=', '^=', '/', '/=', 'instanceof', 'typeof', 'new', 'void', 'debugger', 'this', 'delete', 'in'];
  var terminalSymbolIndex = {};
  terminalSymbols.forEach(function (e) {
    Object.defineProperty(terminalSymbolIndex, e, {});
  });
  this.reset = function () {
    this.lexicalParser.reset();
    this.syntacticalParser.reset();
  };
  this.parse = function (source, onInputElement) {
    var token;
    var haveLineTerminator = false;
    this.lexicalParser.source = source;
    var useDiv = false;
    while (token = this.lexicalParser.getNextToken(useDiv)) {
      if (onInputElement)
        onInputElement(token);
      try {
        if (Object.getOwnPropertyNames(token).some(
            (e) => {
              if (terminalSymbolIndex.hasOwnProperty(e)) {
                useDiv = this.syntacticalParser.insertSymbol(new Symbol(e, token), haveLineTerminator);
                haveLineTerminator = false;
                return true;
              } else
                return false;
            }))
          continue;
        if ((token.Keyword || token.Punctuator || token.DivPunctuator) && terminalSymbolIndex.hasOwnProperty(token.toString())) {
          useDiv = this.syntacticalParser.insertSymbol(new Symbol(token.toString(), token), haveLineTerminator);
        }
      } catch (e) {
        throw new SyntaxError('Unexpected token ' + token);
      }
    }
    return this.syntacticalParser.grammarTree;
  };
}

var parser = new Parser();

function JavaScriptExpression(text) {
  parser.reset();
  this.tree = (parser.parse(text));
  this.paths = [];
  var context = Object.create(null);
  var me = this;
  var pathIndex = Object.create(null);
  this.isSimple;
  this.isConst;
  walk(this.tree);
  checkSimple(this.tree);
  if (this.paths.length === 0) {
    this.isConst = true;
  }
  this.setter = function (path) {
    var curr = context;
    for (var i = 0; i < path.length - 1; i++) {
      if (!curr[path[i]])
        curr[path[i]] = Object.create(null);
      curr = curr[path[i]];
    }
    return {
      isCompleted: function () {
        for (var p in pathIndex)
          if (!pathIndex[p])
            return false;
        return true;
      },
      set: function (value) {
        if (!pathIndex[path.join('.')]) {
          pathIndex[path.join('.')] = true;
        }
        curr[path[i]] = (value);
        if (this.isCompleted()) {
          return me.exec();
        } else {
          return undefined;
        }
      }
    };
  };

  this.valueOf = this.exec = function () {
    try {
      return function () {
        return eval(text);
      }.call(context);
    } catch (e) {
    }
  };

  function checkSimple(symbol) {

    var curr = symbol;
    while (curr.childNodes.length <= 1 && curr.name !== 'MemberExpression') {
      curr = curr.childNodes[0];
    }
    // TODO: need to point out "[……]"
    if (curr.name === 'MemberExpression') {
      me.isSimple = true;
    } else {
      me.isSimple = false;
    }
  }

  function walk(symbol) {
    if (symbol.name === 'CallExpression' && symbol.childNodes[symbol.childNodes.length - 1].name !== 'CallExpression') {
      var path = getPath(symbol.childNodes[1]);
      walk(symbol.childNodes[0]);
    } else if (symbol.name === 'NewExpression' && symbol.childNodes.length === 1) {
      var path = getPath(symbol.childNodes[0]);
    } else if (symbol.name === 'MemberExpression' && symbol.childNodes.length === 1) {
      var path = getPath(symbol);
    } else {
      for (var i = 0; i < symbol.childNodes.length; i++)
        walk(symbol.childNodes[i]);
    }

  }


  function getPath(symbol) {
    // [["PrimaryExpression"], ["MemberExpression", "[", "Expression", "]"], ["MemberExpression", ".", "IdentifierName"], ["new", "MemberExpression", "Arguments"]],

    if (symbol.childNodes[0].name === 'IdentifierName') { // MemberExpression : MemberExpression "." IdentifierName
      var path = getPath(symbol.childNodes[2]);
      if (path)
        path = path.concat(symbol.childNodes[0].childNodes[0].token.toString());
      createPath(path);
      return path;

    } else if (symbol.childNodes[0].name === 'PrimaryExpression') { // MemberExpression : PrimaryExpression
      if (symbol.childNodes[0].childNodes[0].name === 'Identifier') {
        var path = [symbol.childNodes[0].childNodes[0].token.toString()];
        createPath(path);
        return path;
      } else {
        return null;
      }
    } else if (symbol.childNodes[0].name === ']') { // MemberExpression : MemberExpression "[" Expression "]"
      getPath(symbol.childNodes[3]);
      walk(symbol.childNodes[1]);
      return null;

    } else if (symbol.childNodes[0].name === 'Arguments') { // MemberExpression : "new" MemberExpression Arguments
      walk(symbol.childNodes[0]);
      walk(symbol.childNodes[1]);
      return null;
    } else {
      for (var i = 0; i < symbol.childNodes.length; i++)
        walk(symbol.childNodes[i]);
    }
  }


  function createPath(path) {
    var curr = context;
    for (var i = 0; i < path.length - 1; i++) {
      if (!curr[path[i]])
        curr[path[i]] = Object.create(null);
      curr = curr[path[i]];
    }
    me.paths.push(path);
    pathIndex[path.join('.')] = false;
  }
}

function visit(tree) {
  var childNodes = tree.childNodes.slice().reverse();
  var children = childNodes.filter(e =>
    !e.token || !e.token.Punctuator);
  if (tree.name === 'UnaryExpression') {
    // negative number support
    if (childNodes.length === 2 && childNodes[0].name === '-' && children.length === 1) {
      var res = visit(children[0]);
      res.value = -res.value;
      return res;
    }
  }

  if (tree.name === 'Arguments') {
    var argumentList = [];
    var listNode = children[0];
    while (listNode) {
      if (listNode.childNodes.length === 3) {
        argumentList.unshift(listNode.childNodes[0]);
        listNode = listNode.childNodes[2];
      }
      if (listNode.childNodes.length === 1) {
        argumentList.unshift(listNode.childNodes[0]);
        listNode = null;
      }
    }
    return {
      type: 'Arguments',
      children: argumentList.map(e => visit(e))
    };
  }


  if (children && children.length === 1) {
    var res = visit(children[0]);
    return res;
  }

  if (tree.token && ['NullLiteral', 'BooleanLiteral', 'NumericLiteral', 'StringLiteral', 'Identifier'].some(e => tree.token[e])) {
    var type = Object.keys(tree.token).filter(e => e.match(/Literal/) || e.match(/Identifier/))[0];
    var value = {
      'NullLiteral': null,
      'BooleanLiteral': Boolean(tree.token),
      'NumericLiteral': Number(tree.token),
      'StringLiteral': tree.token,
      'Identifier': tree.token,
    }[type];

    return {
      type: type,
      value: value
    };
  }

  if (tree.name === 'CallExpression')
    return {
      type: 'CallExpression',
      children: [visit(childNodes[0]), visit(childNodes[1])]
    };

  return {
    type: childNodes.filter(e => e.token && e.token.Punctuator)[0].name,
    children: childNodes.filter(e => !e.token || !e.token.Punctuator).map(e => visit(e))
  };
}

function parse(originExp) {
  let exp = new JavaScriptExpression(originExp);
  return JSON.stringify(visit(exp.tree), null);
}

module.exports = {
  parse: parse
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function findIndex(o, condition) {
  return o.indexOf(find(o, condition));
}

function dropWhile(o, condition) {
  var result = [];
  map(o, function (v, k) {
    if (!condition(v, k)) {
      result.push(v);
    }
  });
  return result;
}

function filter(o, condition) {
  var result = [];
  forEach(o, function (v, k) {
    if (condition(v, k)) {
      result.push(v);
    }
  });
  return result;
}

function map(o, fn) {
  if (o instanceof Array) {
    return Array.prototype.map.call(o, fn);
  } else {
    var result = [];
    forEach(o, function (v, k) {
      result.push(fn(v, k));
    });
    return result;
  }
}

/*
 forEach({a: 1, b: 2}, (v, k) => {
 console.log({
 v, k
 })
 })

 forEach([1,2,3],(v,k)=>{
 console.log({
 v,k
 })
 })
 */

function forEach(o, fn) {
  if (o instanceof Array) {
    return Array.prototype.forEach.call(o, fn);
  }
  Object.keys(o).forEach(function (key) {
    fn(o[key], key);
  });
}

/* console.log(
 find([{name: 1}, {name: 2}], (o) => {
 return o.name === 2;
 }))

 console.log(find([{name: 1,age:2}, {name: 2}], {name:1}))
 */
function find(o, condition) {
  var result = null;
  forEach(o, function (v, k) {
    if (typeof condition === 'function') {
      if (condition(v, k)) {
        result = v;
      }
    } else {
      var propName = Object.keys(condition)[0];
      if (propName && v[propName] === condition[propName]) {
        result = v;
      }
    }
  });
  return result;
}

module.exports = {
  find: find,
  forEach: forEach,
  map: map,
  filter: filter,
  dropWhile: dropWhile,
  findIndex: findIndex
};

/***/ })
/******/ ]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 Copyright 2018 Alibaba Group

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

/**
 * Transforms matrix into an object
 *
 * @param string matrix
 * @return object
 */

// TODO matrix4 for 3D
var matrixToTransformObj = function matrixToTransformObj(matrix) {
  // this happens when there was no rotation yet in CSS
  if (matrix === 'none') {
    matrix = 'matrix(0,0,0,0,0)';
  }
  var obj = {},
      values = matrix.match(/([-+]?[\d\.]+)/g);

  var _values = _slicedToArray(values, 6),
      a = _values[0],
      b = _values[1],
      c = _values[2],
      d = _values[3],
      e = _values[4],
      f = _values[5];

  obj.rotate = obj.rotateZ = Math.round(Math.atan2(parseFloat(b), parseFloat(a)) * (180 / Math.PI)) || 0;
  obj.translateX = e !== undefined ? pxTo750(e) : 0;
  obj.translateY = f !== undefined ? pxTo750(f) : 0;
  obj.scaleX = Math.sqrt(a * a + b * b);
  obj.scaleY = Math.sqrt(c * c + d * d);
  return obj;
};

function pxTo750(n) {
  return n / document.body.clientWidth * 750;
}

function px(n) {
  return n / 750 * document.body.clientWidth;
  // return Math.round(n / 750 * document.body.clientWidth);
}

function clamp(n, min, max) {
  return n < min ? min : n > max ? max : n;
}

var vendor = function () {
  var el = document.createElement('div').style;
  var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
      transform,
      i = 0,
      l = vendors.length;
  for (; i < l; i++) {
    transform = vendors[i] + 'ransform';
    if (transform in el) return vendors[i].substr(0, vendors[i].length - 1);
  }
  return false;
}();

/**
 *  add vendor to attribute
 *  @memberOf Util
 *  @param {String} attrName name of attribute
 *  @return { String }
 **/
function prefixStyle(attrName) {
  if (vendor === false) return false;
  if (vendor === '') return attrName;
  return vendor + attrName.charAt(0).toUpperCase() + attrName.substr(1);
}

exports.matrixToTransformObj = matrixToTransformObj;
exports.pxTo750 = pxTo750;
exports.px = px;
exports.clamp = clamp;
exports.prefixStyle = prefixStyle;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Copyright 2018 Alibaba Group
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _simpleLodash = __webpack_require__(1);

var _simpleLodash2 = _interopRequireDefault(_simpleLodash);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimingHandler = function () {
  function TimingHandler(binding) {
    _classCallCheck(this, TimingHandler);

    this.binding = null;

    this.binding = binding;
    var props = binding.options.props;


    _simpleLodash2.default.map(props, function (prop) {
      var element = prop.element,
          config = prop.config;

      if (config && element) {
        if (config.perspective) {
          if (element.parentNode) {
            element.parentNode.style[(0, _utils.prefixStyle)('transformStyle')] = 'preserve-3d';
            element.parentNode.style[(0, _utils.prefixStyle)('perspective')] = config.perspective + 'px';
            element.parentNode.style[(0, _utils.prefixStyle)('perspectiveOrigin')] = '0 0';
          }
        }
        if (config.transformOrigin) {
          element.style[(0, _utils.prefixStyle)('transformOrigin')] = config.transformOrigin;
        }
      }
    });
  }

  _createClass(TimingHandler, [{
    key: 'destroy',
    value: function destroy() {}
  }]);

  return TimingHandler;
}();

exports.default = TimingHandler;
;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PI = Math.PI,
    sin = Math.sin,
    cos = Math.cos,
    sqrt = Math.sqrt,
    pow = Math.pow;

var c1 = 1.70158;
var c2 = c1 * 1.525;
var c3 = c1 + 1;
var c4 = 2 * PI / 3;
var c5 = 2 * PI / 4.5;

// x is the fraction of animation progress, in the range 0..1
function bounceOut(x) {
  var n1 = 7.5625,
      d1 = 2.75;
  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + .75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + .9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + .984375;
  }
}

var Easing = {
  linear: function linear(x) {
    return x;
  },
  easeInQuad: function easeInQuad(x) {
    return x * x;
  },
  easeOutQuad: function easeOutQuad(x) {
    return 1 - (1 - x) * (1 - x);
  },
  easeInOutQuad: function easeInOutQuad(x) {
    return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
  },
  easeInCubic: function easeInCubic(x) {
    return x * x * x;
  },
  easeOutCubic: function easeOutCubic(x) {
    return 1 - pow(1 - x, 3);
  },
  easeInOutCubic: function easeInOutCubic(x) {
    return x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
  },
  easeInQuart: function easeInQuart(x) {
    return x * x * x * x;
  },
  easeOutQuart: function easeOutQuart(x) {
    return 1 - pow(1 - x, 4);
  },
  easeInOutQuart: function easeInOutQuart(x) {
    return x < 0.5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2;
  },
  easeInQuint: function easeInQuint(x) {
    return x * x * x * x * x;
  },
  easeOutQuint: function easeOutQuint(x) {
    return 1 - pow(1 - x, 5);
  },
  easeInOutQuint: function easeInOutQuint(x) {
    return x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;
  },
  easeInSine: function easeInSine(x) {
    return 1 - cos(x * PI / 2);
  },
  easeOutSine: function easeOutSine(x) {
    return sin(x * PI / 2);
  },
  easeInOutSine: function easeInOutSine(x) {
    return -(cos(PI * x) - 1) / 2;
  },
  easeInExpo: function easeInExpo(x) {
    return x === 0 ? 0 : pow(2, 10 * x - 10);
  },
  easeOutExpo: function easeOutExpo(x) {
    return x === 1 ? 1 : 1 - pow(2, -10 * x);
  },
  easeInOutExpo: function easeInOutExpo(x) {
    return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2;
  },
  easeInCirc: function easeInCirc(x) {
    return 1 - sqrt(1 - pow(x, 2));
  },
  easeOutCirc: function easeOutCirc(x) {
    return sqrt(1 - pow(x - 1, 2));
  },
  easeInOutCirc: function easeInOutCirc(x) {
    return x < 0.5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
  },
  easeInElastic: function easeInElastic(x) {
    return x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
  },
  easeOutElastic: function easeOutElastic(x) {
    return x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
  },
  easeInOutElastic: function easeInOutElastic(x) {
    return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 : pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1;
  },
  easeInBack: function easeInBack(x) {
    return c3 * x * x * x - c1 * x * x;
  },
  easeOutBack: function easeOutBack(x) {
    return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
  },
  easeInOutBack: function easeInOutBack(x) {
    return x < 0.5 ? pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
  },
  easeInBounce: function easeInBounce(x) {
    return 1 - bounceOut(1 - x);
  },
  easeOutBounce: bounceOut,
  easeInOutBounce: function easeInOutBounce(x) {
    return x < 0.5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2;
  },
  cubicBezier: function cubicBezier() {}
};

module.exports = Easing;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Bezier(x1, y1, x2, y2, epsilon) {
  var curveX = function curveX(t) {
    var v = 1 - t;
    return 3 * v * v * t * x1 + 3 * v * t * t * x2 + t * t * t;
  };

  var curveY = function curveY(t) {
    var v = 1 - t;
    return 3 * v * v * t * y1 + 3 * v * t * t * y2 + t * t * t;
  };

  var derivativeCurveX = function derivativeCurveX(t) {
    var v = 1 - t;
    return 3 * (2 * (t - 1) * t + v * v) * x1 + 3 * (-t * t * t + 2 * v * t) * x2;
  };

  return function (t) {

    var x = t,
        t0,
        t1,
        t2,
        x2,
        d2,
        i;

    // First try a few iterations of Newton's method -- normally very fast.
    for (t2 = x, i = 0; i < 8; i++) {
      x2 = curveX(t2) - x;
      if (Math.abs(x2) < epsilon) return curveY(t2);
      d2 = derivativeCurveX(t2);
      if (Math.abs(d2) < 1e-6) break;
      t2 = t2 - x2 / d2;
    }

    t0 = 0, t1 = 1, t2 = x;

    if (t2 < t0) return curveY(t0);
    if (t2 > t1) return curveY(t1);

    // Fallback to the bisection method for reliability.
    while (t0 < t1) {
      x2 = curveX(t2);
      if (Math.abs(x2 - x) < epsilon) return curveY(t2);
      if (x > x2) t0 = t2;else t1 = t2;
      t2 = (t1 - t0) * .5 + t0;
    }

    // Failure
    return curveY(t2);
  };
};

module.exports = Bezier;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
  window.setTimeout(callback, 1000 / 60);
};

var cancelRAF = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || window.clearTimeout;

module.exports = {
  raf: raf,
  cancelRAF: cancelRAF
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(4);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var easing = __webpack_require__(0);
var bezier = __webpack_require__(1);

var _require = __webpack_require__(2),
    raf = _require.raf,
    cancelRAF = _require.cancelRAF;

var assign = __webpack_require__(5);

var TYPES = {
  START: 'start',
  END: 'end',
  RUN: 'run',
  STOP: 'stop'
};

var noop = function noop() {};

var MIN_DURATION = 1;

function Timer(cfg) {
  this.init(cfg);
}

Timer.prototype = {
  init: function init(cfg) {
    this.cfg = assign({
      easing: 'linear',
      duration: Infinity,
      onStart: noop,
      onRun: noop,
      onStop: noop,
      onEnd: noop
    }, cfg);
  },
  run: function run() {
    var _cfg = this.cfg,
        duration = _cfg.duration,
        onStart = _cfg.onStart,
        onRun = _cfg.onRun;

    if (duration <= MIN_DURATION) {
      this.isfinished = true;
      typeof onRun === 'function' ? onRun({ percent: 1 }) : null;
      this.stop();
    }
    if (this.isfinished) return;
    this._hasFinishedPercent = this._stop && this._stop.percent || 0;
    this._stop = null;
    this.start = Date.now();
    this.percent = 0;
    typeof onStart === 'function' ? onStart({ percent: 0, type: TYPES.START }) : null;
    // epsilon determines the precision of the solved values
    var epsilon = 1000 / 60 / duration / 4;
    var b = this.cfg.bezierArgs;
    this.easingFn = b && b.length === 4 ? bezier(b[0], b[1], b[2], b[3], epsilon) : easing[this.cfg.easing];
    this._run();
  },

  _run: function _run() {
    var _this = this;

    var _cfg2 = this.cfg,
        onRun = _cfg2.onRun,
        onStop = _cfg2.onStop;

    cancelRAF(this._raf);
    this._raf = raf(function () {
      _this.now = Date.now();
      _this.t = _this.now - _this.start;
      _this.duration = _this.now - _this.start >= _this.cfg.duration ? _this.cfg.duration : _this.now - _this.start;
      _this.progress = _this.easingFn(_this.duration / _this.cfg.duration);
      _this.percent = _this.duration / _this.cfg.duration + _this._hasFinishedPercent;
      if (_this.percent >= 1 || _this._stop) {
        _this.percent = _this._stop && _this._stop.percent ? _this._stop.percent : 1;
        _this.duration = _this._stop && _this._stop.duration ? _this._stop.duration : _this.duration;

        typeof onRun === 'function' ? onRun({
          percent: _this.progress,
          originPercent: _this.percent,
          t: _this.t,
          type: TYPES.RUN
        }) : null;

        typeof onStop === 'function' ? onStop({
          percent: _this.percent,
          t: _this.t,
          type: TYPES.STOP
        }) : null;

        if (_this.percent >= 1) {
          _this.isfinished = true;
          _this.stop();
        }
        return;
      }

      typeof onRun === 'function' ? onRun({
        percent: _this.progress,
        originPercent: _this.percent,
        t: _this.t,
        type: TYPES.RUN
      }) : null;

      _this._run();
    });
  },

  stop: function stop() {
    var onEnd = this.cfg.onEnd;

    this._stop = {
      percent: this.percent,
      now: this.now
    };
    typeof onEnd === 'function' ? onEnd({
      percent: 1,
      t: this.t,
      type: TYPES.END
    }) : null;
    cancelRAF(this._raf);
  }
};

Timer.Easing = easing;
Timer.Bezier = bezier;
Timer.raf = raf;
Timer.cancelRAF = cancelRAF;
module.exports = Timer;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ })
/******/ ]);
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 Copyright 2018 Alibaba Group

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _quaternion = __webpack_require__(6);

var _quaternion2 = _interopRequireDefault(_quaternion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Vector3(x, y, z) {

  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
}

Vector3.prototype = {

  constructor: Vector3,

  isVector3: true,

  set: function set(x, y, z) {

    this.x = x;
    this.y = y;
    this.z = z;

    return this;
  },

  applyEuler: function () {

    var quaternion;

    return function applyEuler(euler) {

      if ((euler && euler.isEuler) === false) {

        console.error('THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.');
      }

      if (quaternion === undefined) quaternion = new _quaternion2.default();

      return this.applyQuaternion(quaternion.setFromEuler(euler));
    };
  }(),

  applyQuaternion: function applyQuaternion(q) {

    var x = this.x,
        y = this.y,
        z = this.z;
    var qx = q.x,
        qy = q.y,
        qz = q.z,
        qw = q.w;

    // calculate quat * vector

    var ix = qw * x + qy * z - qz * y;
    var iy = qw * y + qz * x - qx * z;
    var iz = qw * z + qx * y - qy * x;
    var iw = -qx * x - qy * y - qz * z;

    // calculate result * inverse quat

    this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

    return this;
  }

};

exports.default = Vector3;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 Copyright 2018 Alibaba Group

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectAssign = __webpack_require__(0);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Quaternion(x, y, z, w) {

  this._x = x || 0;
  this._y = y || 0;
  this._z = z || 0;
  this._w = w !== undefined ? w : 1;
}

Quaternion.prototype = {

  constructor: Quaternion,

  get x() {

    return this._x;
  },

  set x(value) {

    this._x = value;
    this.onChangeCallback();
  },

  get y() {

    return this._y;
  },

  set y(value) {

    this._y = value;
    this.onChangeCallback();
  },

  get z() {

    return this._z;
  },

  set z(value) {

    this._z = value;
    this.onChangeCallback();
  },

  get w() {

    return this._w;
  },

  set w(value) {

    this._w = value;
    this.onChangeCallback();
  },

  set: function set(x, y, z, w) {

    this._x = x;
    this._y = y;
    this._z = z;
    this._w = w;

    this.onChangeCallback();

    return this;
  },

  clone: function clone() {

    return new this.constructor(this._x, this._y, this._z, this._w);
  },

  copy: function copy(quaternion) {

    this._x = quaternion.x;
    this._y = quaternion.y;
    this._z = quaternion.z;
    this._w = quaternion.w;

    this.onChangeCallback();

    return this;
  },

  setFromEuler: function setFromEuler(euler, update) {

    if ((euler && euler.isEuler) === false) {

      throw new Error('THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.');
    }

    // http://www.mathworks.com/matlabcentral/fileexchange/
    //  20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
    //  content/SpinCalc.m

    var c1 = Math.cos(euler._x / 2);
    var c2 = Math.cos(euler._y / 2);
    var c3 = Math.cos(euler._z / 2);
    var s1 = Math.sin(euler._x / 2);
    var s2 = Math.sin(euler._y / 2);
    var s3 = Math.sin(euler._z / 2);

    var order = euler.order;

    if (order === 'XYZ') {

      this._x = s1 * c2 * c3 + c1 * s2 * s3;
      this._y = c1 * s2 * c3 - s1 * c2 * s3;
      this._z = c1 * c2 * s3 + s1 * s2 * c3;
      this._w = c1 * c2 * c3 - s1 * s2 * s3;
    } else if (order === 'YXZ') {

      this._x = s1 * c2 * c3 + c1 * s2 * s3;
      this._y = c1 * s2 * c3 - s1 * c2 * s3;
      this._z = c1 * c2 * s3 - s1 * s2 * c3;
      this._w = c1 * c2 * c3 + s1 * s2 * s3;
    } else if (order === 'ZXY') {

      this._x = s1 * c2 * c3 - c1 * s2 * s3;
      this._y = c1 * s2 * c3 + s1 * c2 * s3;
      this._z = c1 * c2 * s3 + s1 * s2 * c3;
      this._w = c1 * c2 * c3 - s1 * s2 * s3;
    } else if (order === 'ZYX') {

      this._x = s1 * c2 * c3 - c1 * s2 * s3;
      this._y = c1 * s2 * c3 + s1 * c2 * s3;
      this._z = c1 * c2 * s3 - s1 * s2 * c3;
      this._w = c1 * c2 * c3 + s1 * s2 * s3;
    } else if (order === 'YZX') {

      this._x = s1 * c2 * c3 + c1 * s2 * s3;
      this._y = c1 * s2 * c3 + s1 * c2 * s3;
      this._z = c1 * c2 * s3 - s1 * s2 * c3;
      this._w = c1 * c2 * c3 - s1 * s2 * s3;
    } else if (order === 'XZY') {

      this._x = s1 * c2 * c3 - c1 * s2 * s3;
      this._y = c1 * s2 * c3 - s1 * c2 * s3;
      this._z = c1 * c2 * s3 + s1 * s2 * c3;
      this._w = c1 * c2 * c3 + s1 * s2 * s3;
    }

    if (update !== false) this.onChangeCallback();

    return this;
  },

  setFromAxisAngle: function setFromAxisAngle(axis, angle) {

    // http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm

    // assumes axis is normalized

    var halfAngle = angle / 2,
        s = Math.sin(halfAngle);

    this._x = axis.x * s;
    this._y = axis.y * s;
    this._z = axis.z * s;
    this._w = Math.cos(halfAngle);

    this.onChangeCallback();

    return this;
  },

  // normalize: function() {
  //
  //   var l = this.length();
  //
  //   if (l === 0) {
  //
  //     this._x = 0;
  //     this._y = 0;
  //     this._z = 0;
  //     this._w = 1;
  //
  //   } else {
  //
  //     l = 1 / l;
  //
  //     this._x = this._x * l;
  //     this._y = this._y * l;
  //     this._z = this._z * l;
  //     this._w = this._w * l;
  //
  //   }
  //
  //   this.onChangeCallback();
  //
  //   return this;
  //
  // },

  multiply: function multiply(q, p) {

    if (p !== undefined) {

      console.warn('THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.');
      return this.multiplyQuaternions(q, p);
    }

    return this.multiplyQuaternions(this, q);
  },

  multiplyQuaternions: function multiplyQuaternions(a, b) {

    // from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm

    var qax = a._x,
        qay = a._y,
        qaz = a._z,
        qaw = a._w;
    var qbx = b._x,
        qby = b._y,
        qbz = b._z,
        qbw = b._w;

    this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
    this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
    this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
    this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

    this.onChangeCallback();

    return this;
  },

  slerp: function slerp(qb, t) {

    if (t === 0) return this;
    if (t === 1) return this.copy(qb);

    var x = this._x,
        y = this._y,
        z = this._z,
        w = this._w;

    // http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

    var cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;

    if (cosHalfTheta < 0) {

      this._w = -qb._w;
      this._x = -qb._x;
      this._y = -qb._y;
      this._z = -qb._z;

      cosHalfTheta = -cosHalfTheta;
    } else {

      this.copy(qb);
    }

    if (cosHalfTheta >= 1.0) {

      this._w = w;
      this._x = x;
      this._y = y;
      this._z = z;

      return this;
    }

    var sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);

    if (Math.abs(sinHalfTheta) < 0.001) {

      this._w = 0.5 * (w + this._w);
      this._x = 0.5 * (x + this._x);
      this._y = 0.5 * (y + this._y);
      this._z = 0.5 * (z + this._z);

      return this;
    }

    var halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
    var ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta,
        ratioB = Math.sin(t * halfTheta) / sinHalfTheta;

    this._w = w * ratioA + this._w * ratioB;
    this._x = x * ratioA + this._x * ratioB;
    this._y = y * ratioA + this._y * ratioB;
    this._z = z * ratioA + this._z * ratioB;

    this.onChangeCallback();

    return this;
  },

  onChange: function onChange(callback) {

    this.onChangeCallback = callback;

    return this;
  },

  onChangeCallback: function onChangeCallback() {}

};

(0, _objectAssign2.default)(Quaternion, {

  slerp: function slerp(qa, qb, qm, t) {

    return qm.copy(qa).slerp(qb, t);
  },

  slerpFlat: function slerpFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t) {

    // fuzz-free, array-based Quaternion SLERP operation

    var x0 = src0[srcOffset0 + 0],
        y0 = src0[srcOffset0 + 1],
        z0 = src0[srcOffset0 + 2],
        w0 = src0[srcOffset0 + 3],
        x1 = src1[srcOffset1 + 0],
        y1 = src1[srcOffset1 + 1],
        z1 = src1[srcOffset1 + 2],
        w1 = src1[srcOffset1 + 3];

    if (w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1) {

      var s = 1 - t,
          cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1,
          dir = cos >= 0 ? 1 : -1,
          sqrSin = 1 - cos * cos;

      // Skip the Slerp for tiny steps to avoid numeric problems:
      if (sqrSin > Number.EPSILON) {

        var sin = Math.sqrt(sqrSin),
            len = Math.atan2(sin, cos * dir);

        s = Math.sin(s * len) / sin;
        t = Math.sin(t * len) / sin;
      }

      var tDir = t * dir;

      x0 = x0 * s + x1 * tDir;
      y0 = y0 * s + y1 * tDir;
      z0 = z0 * s + z1 * tDir;
      w0 = w0 * s + w1 * tDir;

      // Normalize in case we just did a lerp:
      if (s === 1 - t) {

        var f = 1 / Math.sqrt(x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0);

        x0 *= f;
        y0 *= f;
        z0 *= f;
        w0 *= f;
      }
    }

    dst[dstOffset] = x0;
    dst[dstOffset + 1] = y0;
    dst[dstOffset + 2] = z0;
    dst[dstOffset + 3] = w0;
  }

});

exports.default = Quaternion;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 Copyright 2018 Alibaba Group

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

var _Math = {
  DEG2RAD: Math.PI / 180,
  RAD2DEG: 180 / Math.PI,
  degToRad: function degToRad(degrees) {
    return degrees * _Math.DEG2RAD;
  },
  radToDeg: function radToDeg(radians) {
    return radians * _Math.RAD2DEG;
  }
};

exports.default = _Math;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 Copyright 2018 Alibaba Group

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _simpleLodash = __webpack_require__(1);

var _simpleLodash2 = _interopRequireDefault(_simpleLodash);

var _expression = __webpack_require__(9);

var _expression2 = _interopRequireDefault(_expression);

var _handlers = __webpack_require__(10);

var _utils = __webpack_require__(2);

var _fn = __webpack_require__(18);

var _fn2 = _interopRequireDefault(_fn);

var _objectAssign = __webpack_require__(0);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// transform
var vendorTransform = (0, _utils.prefixStyle)('transform');

var Binding = function () {
  function Binding(options, callback) {
    _classCallCheck(this, Binding);

    this._eventHandler = null;
    this.elTransforms = [];
    this.token = null;

    this.options = options;
    this.callback = callback;
    this.token = this.genToken();
    this._initElTransforms();
    var eventType = options.eventType;

    switch (eventType) {
      case 'pan':
        this._eventHandler = new _handlers.PanHandler(this);
        break;
      case 'orientation':
        this._eventHandler = new _handlers.OrientationHandler(this);
        break;
      case 'timing':
        this._eventHandler = new _handlers.TimingHandler(this);
        break;
      case 'scroll':
        this._eventHandler = new _handlers.ScrollHandler(this);
        break;
    }
  }

  _createClass(Binding, [{
    key: 'genToken',
    value: function genToken() {
      return parseInt(Math.random() * 10000000);
    }
  }, {
    key: '_initElTransforms',
    value: function _initElTransforms() {
      var _options$props = this.options.props,
          props = _options$props === undefined ? [] : _options$props;

      var elTransforms = this.elTransforms;
      props.forEach(function (prop) {
        var element = prop.element;

        if (!_simpleLodash2.default.find(elTransforms, function (o) {
          return o.element === element;
        })) {
          elTransforms.push({
            element: element,
            transform: {
              translateX: 0,
              translateY: 0,
              translateZ: 0,
              scaleX: 1,
              scaleY: 1,
              scaleZ: 1,
              rotateX: 0,
              rotateY: 0,
              rotateZ: 0
            }
          });
        }
      });
    }
  }, {
    key: 'getValue',
    value: function getValue(params, expression) {
      return _expression2.default.execute(expression, (0, _objectAssign2.default)(_fn2.default, params));
    }

    // TODO scroll.contentOffset 待确认及补全

  }, {
    key: 'setProperty',
    value: function setProperty(el, property, val) {
      var elTransform = _simpleLodash2.default.find(this.elTransforms, function (o) {
        return o.element === el;
      });
      switch (property) {
        case 'transform.translateX':
          elTransform.transform.translateX = (0, _utils.px)(val);
          break;
        case 'transform.translateY':
          elTransform.transform.translateY = (0, _utils.px)(val);
          break;
        case 'transform.translateZ':
          elTransform.transform.translateZ = (0, _utils.px)(val);
          break;
        case 'transform.rotateX':
          elTransform.transform.rotateX = val;
          break;
        case 'transform.rotateY':
          elTransform.transform.rotateY = val;
          break;
        case 'transform.rotateZ':
          elTransform.transform.rotateZ = val;
          break;
        case 'transform.rotate':
          elTransform.transform.rotateZ = val;
          break;
        case 'transform.scaleX':
          elTransform.transform.scaleX = val;
          break;
        case 'transform.scaleY':
          elTransform.transform.scaleY = val;
          break;
        case 'transform.scale':
          elTransform.transform.scaleX = val;
          elTransform.transform.scaleY = val;
          break;
        case 'width':
          el.style.width = (0, _utils.px)(val) + 'px';
          break;
        case 'height':
          el.style.height = (0, _utils.px)(val) + 'px';
          break;
        case 'opacity':
          el.style.opacity = val;
          break;
        case 'background-color':
          el.style['background-color'] = val;
          break;
        case 'color':
          el.style.color = val;
          break;
        case 'border-top-left-radius':
        case 'border-top-right-radius':
        case 'border-bottom-left-radius':
        case 'border-bottom-right-radius':
        case 'border-radius':
          el.style[property] = (0, _utils.px)(val) + 'px';
          break;
      }
      el.style[vendorTransform] = ['translateX(' + elTransform.transform.translateX + 'px)', 'translateY(' + elTransform.transform.translateY + 'px)', 'translateZ(' + elTransform.transform.translateZ + 'px)', 'scaleX(' + elTransform.transform.scaleX + ')', 'scaleY(' + elTransform.transform.scaleY + ')', 'rotateX(' + elTransform.transform.rotateX + 'deg)', 'rotateY(' + elTransform.transform.rotateY + 'deg)', 'rotateZ(' + elTransform.transform.rotateZ + 'deg)'].join(' ');
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this._eventHandler.destroy();
    }
  }]);

  return Binding;
}();

module.exports = {
  _bindingInstances: [],
  /**
   * 绑定
   * @param options 参数
   * @example
   {
     anchor:blockRef,
     eventType:'pan',
     props: [
     {
       element:blockRef,
       property:'transform.translateX',
       expression:{
         origin:"x+1",
         transformed:"{\"type\":\"+\",\"children\":[{\"type\":\"Identifier\",\"value\":\"x\"},{\"type\":\"NumericLiteral\",\"value\":1}]}"
       }
     }
    ]
   }
   */
  bind: function bind(options) {
    var _this = this;

    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

    if (!options) {
      throw new Error('should pass options for binding');
    }
    var existInstances = _simpleLodash2.default.filter(this._bindingInstances, function (instance) {
      if (options.anchor) {
        return instance.options.anchor === options.anchor && instance.options.eventType === options.eventType;
      }
    });
    // 销毁上次实例
    if (existInstances) {
      _simpleLodash2.default.forEach(existInstances, function (inst) {
        inst.destroy();
        _this._bindingInstances = _simpleLodash2.default.dropWhile(_this._bindingInstances, function (bindInst) {
          return bindInst === inst;
        });
      });
    }
    var binding = new Binding(options, callback);
    this._bindingInstances.push(binding);
    return { token: binding.token };
  },

  /**
   *  @param {object} options
   *  @example
   *  {eventType:'pan',
   *   token:self.gesToken}
   */
  unbind: function unbind(options) {
    if (!options) {
      throw new Error('should pass options for binding');
    }
    var inst = _simpleLodash2.default.find(this._bindingInstances, function (instance) {
      return instance.options.eventType === options.eventType && instance.token === options.token;
    });
    if (inst) {
      inst.destroy();
    }
  },
  unbindAll: function unbindAll() {
    this._bindingInstances.forEach(function (inst) {
      inst.destroy({
        eventType: inst.options.eventType,
        token: inst.token
      });
    });
  },
  getComputedStyle: function getComputedStyle(elRef) {
    var computedStyle = window.getComputedStyle(elRef);
    var style = (0, _utils.matrixToTransformObj)(computedStyle[vendorTransform]);
    style.opacity = Number(computedStyle.opacity);
    style.width = (0, _utils.pxTo750)(computedStyle.width.replace('px', ''));
    style.height = (0, _utils.pxTo750)(computedStyle.height.replace('px', ''));
    style['background-color'] = computedStyle['background-color'];
    style.color = computedStyle.color;
    style.width = (0, _utils.pxTo750)(computedStyle.width.replace('px', ''));
    style.height = (0, _utils.pxTo750)(computedStyle.height.replace('px', ''));
    style['border-top-left-radius'] = (0, _utils.pxTo750)(computedStyle['border-top-left-radius'].replace('px', ''));
    style['border-top-right-radius'] = (0, _utils.pxTo750)(computedStyle['border-top-right-radius'].replace('px', ''));
    style['border-bottom-left-radius'] = (0, _utils.pxTo750)(computedStyle['border-bottom-left-radius'].replace('px', ''));
    style['border-bottom-right-radius'] = (0, _utils.pxTo750)(computedStyle['border-bottom-right-radius'].replace('px', ''));
    return style;
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 Copyright 2018 Alibaba Group

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});
function toNumber(value) {
  return Number(value);
}

function toBoolean(value) {
  return !!value;
}

function equal(v1, v2) {
  return v1 == v2;
}

function strictlyEqual(v1, v2) {
  return v1 === v2;
}

function execute(node, scope) {

  var type = node.type;
  var children = node.children;
  switch (type) {
    case 'StringLiteral':
      return String(node.value);
    case 'NumericLiteral':
      return parseFloat(node.value);
    case 'BooleanLiteral':
      return !!node.value;
    case 'Identifier':
      return scope[node.value];
    case 'CallExpression':
      var fn = execute(children[0], scope);
      // console.log('fn:',fn)
      var args = [];
      var jsonArguments = children[1].children;
      for (var i = 0; i < jsonArguments.length; i++) {
        args.push(execute(jsonArguments[i], scope));
      }
      return fn.apply(null, args);
    case '?':
      if (execute(children[0], scope)) {
        return execute(children[1], scope);
      }
      return execute(children[2], scope);
    case '+':
      return toNumber(execute(children[0], scope)) + toNumber(execute(children[1], scope));
    case '-':
      return toNumber(execute(children[0], scope)) - toNumber(execute(children[1], scope));
    case '*':
      return toNumber(execute(children[0], scope)) * toNumber(execute(children[1], scope));
    case '/':
      return toNumber(execute(children[0], scope)) / toNumber(execute(children[1], scope));
    case '%':
      return toNumber(execute(children[0], scope)) % toNumber(execute(children[1], scope));
    case '**':
      return Math.pow(toNumber(execute(children[0], scope)), toNumber(execute(children[1], scope)));

    case '>':
      return toNumber(execute(children[0], scope)) > toNumber(execute(children[1], scope));
    case '<':
      return toNumber(execute(children[0], scope)) < toNumber(execute(children[1], scope));
    case '>=':
      return toNumber(execute(children[0], scope)) >= toNumber(execute(children[1], scope));
    case '<=':
      return toNumber(execute(children[0], scope)) <= toNumber(execute(children[1], scope));

    case '==':
      return equal(execute(children[0], scope), execute(children[1], scope));
    case '===':
      return strictlyEqual(execute(children[0], scope), execute(children[1], scope));
    case '!=':
      return !equal(execute(children[0], scope), execute(children[1], scope));
    case '!==':
      return !strictlyEqual(execute(children[0], scope), execute(children[1], scope));

    case '&&':
      var result = void 0;
      result = execute(children[0], scope);
      if (!toBoolean(result)) return result;
      return execute(children[1], scope);
    case '||':
      result = execute(children[0], scope);
      if (toBoolean(result)) return result;
      return execute(children[1], scope);
    case '!':
      return !toBoolean(execute(children[0], scope));

  }
  return null;
}

exports.default = {
  execute: execute
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 Copyright 2018 Alibaba Group

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollHandler = exports.TimingHandler = exports.OrientationHandler = exports.PanHandler = undefined;

var _pan = __webpack_require__(11);

var _pan2 = _interopRequireDefault(_pan);

var _orientation = __webpack_require__(13);

var _orientation2 = _interopRequireDefault(_orientation);

var _timing = __webpack_require__(16);

var _timing2 = _interopRequireDefault(_timing);

var _scroll = __webpack_require__(17);

var _scroll2 = _interopRequireDefault(_scroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.PanHandler = _pan2.default;
exports.OrientationHandler = _orientation2.default;
exports.TimingHandler = _timing2.default;
exports.ScrollHandler = _scroll2.default;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 Copyright 2018 Alibaba Group

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pan = __webpack_require__(12);

var _pan2 = _interopRequireDefault(_pan);

var _common = __webpack_require__(3);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PanHandler = function (_CommonHandler) {
  _inherits(PanHandler, _CommonHandler);

  function PanHandler(binding) {
    _classCallCheck(this, PanHandler);

    var _this = _possibleConstructorReturn(this, (PanHandler.__proto__ || Object.getPrototypeOf(PanHandler)).call(this, binding));

    _this._onPan = function (e) {
      var x = e.deltaX;
      var y = e.deltaY;
      var _this$binding$options = _this.binding.options.props,
          props = _this$binding$options === undefined ? [] : _this$binding$options;

      props.forEach(function (prop) {
        var element = prop.element,
            property = prop.property,
            expression = prop.expression;

        var transformed = JSON.parse(expression.transformed);
        var val = _this.binding.getValue({ x: x, y: y }, transformed);
        _this.binding.setProperty(element, property, val);
      });
    };

    _this._onPanStart = function () {
      _this.binding.callback({ deltaX: 0, state: 'start', deltaY: 0 });
    };

    _this._onPanEnd = function (e) {
      _this.binding.callback({ deltaX: parseInt(e.deltaX), state: 'end', deltaY: parseInt(e.deltaY) });
    };

    var anchor = binding.options.anchor;

    var panGesture = _this.panGesture = new _pan2.default(anchor, binding.options.options);
    panGesture.on('pan', _this._onPan);
    panGesture.on('panstart', _this._onPanStart);
    panGesture.on('panend', _this._onPanEnd);
    return _this;
  }

  _createClass(PanHandler, [{
    key: 'destroy',
    value: function destroy() {
      var panGesture = this.panGesture;
      panGesture.off('pan', this._onPan);
      panGesture.off('panstart', this._onPanStart);
      panGesture.off('panend', this._onPanEnd);
      panGesture.destroy();
    }
  }]);

  return PanHandler;
}(_common2.default);

exports.default = PanHandler;
;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 Copyright 2018 Alibaba Group

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _simpleLodash = __webpack_require__(1);

var _simpleLodash2 = _interopRequireDefault(_simpleLodash);

var _objectAssign = __webpack_require__(0);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var abs = Math.abs;


var DEFAULT_CONFIG = {
  thresholdX: 10,
  thresholdY: 10,
  touchAction: 'auto',
  touchActionRatio: 1 / 2
};

var PanGesture = function () {
  function PanGesture(el, config) {
    var _this = this;

    _classCallCheck(this, PanGesture);

    this.startX = null;
    this.startY = null;
    this.panStartX = null;
    this.panStartY = null;
    this.deltaX = 0;
    this.deltaY = 0;
    this.events = {
      'panstart': [],
      'pan': [],
      'panend': [],
      'pancancel': []
    };

    this.onTouchStart = function (e) {
      // e.preventDefault();
    };

    this.handlePanStart = function (e) {
      e.preventDefault();
      if (_this.panStartX === null || _this.panStartY === null) {
        _this.panStartX = (0, _utils.pxTo750)(e.touches[0].pageX);
        _this.panStartY = (0, _utils.pxTo750)(e.touches[0].pageY);
        _this.events.panstart.forEach(function (handler) {
          handler(e);
        });
        return;
      }
    };

    this.onTouchMove = function (e) {
      var _config = _this.config,
          thresholdX = _config.thresholdX,
          thresholdY = _config.thresholdY,
          touchAction = _config.touchAction,
          touchActionRatio = _config.touchActionRatio;

      if (_this.startX === null || _this.startY === null) {
        _this.startX = e.touches[0].pageX;
        _this.startY = e.touches[0].pageY;
      }
      var dx = e.touches[0].pageX - _this.startX;
      var dy = e.touches[0].pageY - _this.startY;

      switch (touchAction) {
        case 'auto':
          e.preventDefault();
          if (abs(dx) >= thresholdX || abs(dy) >= thresholdY) {
            _this.handlePanStart(e);
          }
          break;
        case 'pan-x':
          if (abs(dx) >= thresholdX && abs(dy / dx) < touchActionRatio && abs(dy) < thresholdY) {
            _this.handlePanStart(e);
          }
          break;
        case 'pan-y':
          if (abs(dy) >= thresholdY && abs(dx / dy) < touchActionRatio && abs(dx) < thresholdX) {
            _this.handlePanStart(e);
          }
          break;
      }

      if (_this.panStartX !== null && _this.panStartY !== null) {
        switch (touchAction) {
          case 'auto':
            _this.deltaX = (0, _utils.pxTo750)(e.touches[0].pageX) - _this.panStartX;
            _this.deltaY = (0, _utils.pxTo750)(e.touches[0].pageY) - _this.panStartY;
            break;
          case 'pan-x':
            _this.deltaX = (0, _utils.pxTo750)(e.touches[0].pageX) - _this.panStartX;
            _this.deltaY = 0;
            break;
          case 'pan-y':
            _this.deltaX = 0;
            _this.deltaY = (0, _utils.pxTo750)(e.touches[0].pageY) - _this.panStartY;
            break;
        }
        e.deltaX = _this.deltaX;
        e.deltaY = _this.deltaY;
        _this.events.pan.forEach(function (handler) {
          handler(e);
        });
      }
    };

    this.onTouchEnd = function (e) {
      e.deltaX = _this.deltaX;
      e.deltaY = _this.deltaY;
      _this.events.panend.forEach(function (handler) {
        handler(e);
      });
    };

    this.onTouchCancel = function (e) {
      e.deltaX = _this.deltaX;
      e.deltaY = _this.deltaY;
      _this.events.pancancel.forEach(function (handler) {
        handler(e);
      });
    };

    this.el = el;
    this.config = (0, _objectAssign2.default)(DEFAULT_CONFIG, config);
    this.el.addEventListener('touchstart', this.onTouchStart);
    this.el.addEventListener('touchmove', this.onTouchMove);
    this.el.addEventListener('touchend', this.onTouchEnd);
    this.el.addEventListener('touchcancel', this.onTouchCancel);
  }

  _createClass(PanGesture, [{
    key: 'on',
    value: function on(fn, handler) {
      if (!this.events[fn]) return;
      this.events[fn].push(handler);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.el.removeEventListener('touchstart', this.onTouchStart);
      this.el.removeEventListener('touchmove', this.onTouchMove);
      this.el.removeEventListener('touchend', this.onTouchEnd);
      this.el.removeEventListener('touchcancel', this.onTouchCancel);
      this.offAll();
      this.startX = null;
      this.startY = null;
      this.panStartX = null;
      this.panStartY = null;
    }
  }, {
    key: 'offAll',
    value: function offAll() {
      var _this2 = this;

      _simpleLodash2.default.map(this.events, function (handlers, fn) {
        _simpleLodash2.default.forEach(handlers, function (handler) {
          _this2.off(fn, handler);
        });
      });
    }
  }, {
    key: 'off',
    value: function off(fn, handler) {
      if (!fn) return;
      if (fn && this.events[fn] && this.events[fn].length) {
        if (!handler) return;
        var h = _simpleLodash2.default.find(this.events[fn], function (o) {
          return o === handler;
        });
        var i = _simpleLodash2.default.findIndex(this.events[fn], function (o) {
          return o === handler;
        });
        if (h) {
          this.events[fn].splice(i, 1);
        }
      }
    }
  }]);

  return PanGesture;
}();

exports.default = PanGesture;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 Copyright 2018 Alibaba Group

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vector = __webpack_require__(5);

var _vector2 = _interopRequireDefault(_vector);

var _orientation_controls = __webpack_require__(14);

var _orientation_controls2 = _interopRequireDefault(_orientation_controls);

var _math = __webpack_require__(7);

var _math2 = _interopRequireDefault(_math);

var _animationUtil = __webpack_require__(4);

var _common = __webpack_require__(3);

var _common2 = _interopRequireDefault(_common);

var _objectAssign = __webpack_require__(0);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrientationHandler = function (_CommonHandler) {
  _inherits(OrientationHandler, _CommonHandler);

  function OrientationHandler(binding) {
    _classCallCheck(this, OrientationHandler);

    var _this = _possibleConstructorReturn(this, (OrientationHandler.__proto__ || Object.getPrototypeOf(OrientationHandler)).call(this, binding));

    _this.binding = null;
    _this.control = null;
    _this.start = null;
    _this.timer = null;

    _this._onOrientation = function (e) {
      var props = _this.binding.options.props;

      props.forEach(function (prop) {
        var element = prop.element,
            property = prop.property,
            expression = prop.expression;

        var transformed = JSON.parse(expression.transformed);
        var val = _this.binding.getValue(e, transformed);
        _this.binding.setProperty(element, property, val);
      });
    };

    _this.options = (0, _objectAssign2.default)({
      sceneType: '2d'
    }, binding.options.options);
    _this.binding = binding;
    if (_this.options.sceneType.toLowerCase() === '2d') {
      _this.controlX = new _orientation_controls2.default({ beta: 90 });
      _this.controlY = new _orientation_controls2.default({ gamma: 90, alpha: 0 });
    } else {
      _this.control = new _orientation_controls2.default();
    }
    _this.run();
    return _this;
  }

  _createClass(OrientationHandler, [{
    key: 'run',
    value: function run() {
      var _this2 = this;

      // 2d场景
      if (this.options.sceneType.toLowerCase() === '2d') {
        this.controlX.update();
        this.controlY.update();
        var _controlX$deviceOrien = this.controlX.deviceOrientation,
            alpha = _controlX$deviceOrien.alpha,
            beta = _controlX$deviceOrien.beta,
            gamma = _controlX$deviceOrien.gamma,
            dalpha = _controlX$deviceOrien.dalpha,
            dbeta = _controlX$deviceOrien.dbeta,
            dgamma = _controlX$deviceOrien.dgamma;

        var vecX = new _vector2.default(0, 0, 1);
        vecX.applyQuaternion(this.controlX.quaternion);
        var vecY = new _vector2.default(0, 1, 1);
        vecY.applyQuaternion(this.controlY.quaternion);
        // 0,180 -> -90,90
        var x = _math2.default.radToDeg(Math.acos(vecX.x)) - 90;
        var y = _math2.default.radToDeg(Math.acos(vecY.y)) - 90;
        if (!this.start && !isNaN(x) && !isNaN(y)) {
          this.start = {
            x: x,
            y: y
          };
        }
        if (this.start) {
          var dx = x - this.start.x;
          var dy = y - this.start.y;
          this._onOrientation({
            x: x, y: y, dx: dx, dy: dy, alpha: alpha, beta: beta, gamma: gamma, dalpha: dalpha, dbeta: dbeta, dgamma: dgamma
          });
        }
      } else {
        // 3d场景
        this.control.update();
        var _control$deviceOrient = this.control.deviceOrientation,
            _alpha = _control$deviceOrient.alpha,
            _beta = _control$deviceOrient.beta,
            _gamma = _control$deviceOrient.gamma,
            _dalpha = _control$deviceOrient.dalpha,
            _dbeta = _control$deviceOrient.dbeta,
            _dgamma = _control$deviceOrient.dgamma;
        var _control$quaternion = this.control.quaternion,
            _x = _control$quaternion.x,
            _y = _control$quaternion.y,
            z = _control$quaternion.z;

        this._onOrientation({ alpha: _alpha, beta: _beta, gamma: _gamma, dalpha: _dalpha, dbeta: _dbeta, dgamma: _dgamma, x: _x, y: _y, z: z });
      }
      this.timer = (0, _animationUtil.raf)(function () {
        _this2.run();
      });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      if (this.timer) {
        (0, _animationUtil.cancelRAF)(this.timer);
        this.timer = null;
      }
    }
  }]);

  return OrientationHandler;
}(_common2.default);

exports.default = OrientationHandler;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 Copyright 2018 Alibaba Group

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _quaternion = __webpack_require__(6);

var _quaternion2 = _interopRequireDefault(_quaternion);

var _vector = __webpack_require__(5);

var _vector2 = _interopRequireDefault(_vector);

var _euler = __webpack_require__(15);

var _euler2 = _interopRequireDefault(_euler);

var _math = __webpack_require__(7);

var _math2 = _interopRequireDefault(_math);

var _objectAssign = __webpack_require__(0);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isNaNOrUndefined(n) {
  return n === undefined || isNaN(n) || n === null;
}

function DeviceOrientationControls(object) {
  var scope = this;
  this.object = (0, _objectAssign2.default)({
    alphaOffsetAngle: 0,
    betaOffsetAngle: 0,
    gammaOffsetAngle: 0
  }, object);

  this.alphaOffsetAngle = this.object.alphaOffsetAngle;
  this.betaOffsetAngle = this.object.betaOffsetAngle;
  this.gammaOffsetAngle = this.object.gammaOffsetAngle;

  this.quaternion = new _quaternion2.default(0, 0, 0, 1);
  this.enabled = true;
  this.deviceOrientation = {};
  this.screenOrientation = 0;
  this.start = null;

  this.recordsAlpha = [];

  function formatRecords(records, threshold) {
    var l = records.length;
    var times = 0;
    if (l > 1) {
      for (var i = 0; i < l; i++) {
        if (records[i - 1] != undefined && records[i] != undefined) {
          if (records[i] - records[i - 1] < -threshold / 2) {
            times = Math.floor(records[i - 1] / threshold) + 1;
            records[i] = records[i] + times * threshold;
          }
          if (records[i] - records[i - 1] > threshold / 2) {
            records[i] = records[i] - threshold;
          }
        }
      }
    }
    return records;
  }

  var onDeviceOrientationChangeEvent = function onDeviceOrientationChangeEvent(e) {

    var alpha = e.alpha;
    var beta = e.beta;
    var gamma = e.gamma;
    var recordsAlpha = scope.recordsAlpha;

    if (!scope.start) {
      scope.start = {
        alpha: alpha,
        beta: beta,
        gamma: gamma
      };
    }
    recordsAlpha.push(alpha);
    if (recordsAlpha.length > 5) {
      recordsAlpha = formatRecords(recordsAlpha, 360);
      recordsAlpha.shift();
    }

    var formatAlpha = (recordsAlpha[recordsAlpha.length - 1] - scope.start.alpha) % 360;
    if (!isNaNOrUndefined(alpha) && !isNaNOrUndefined(beta) && !isNaNOrUndefined(gamma)) {
      scope.enabled = true;
    }

    scope.deviceOrientation = {
      alpha: alpha,
      beta: beta,
      gamma: gamma,
      formatAlpha: formatAlpha,
      dalpha: alpha - scope.start.alpha,
      dbeta: beta - scope.start.beta,
      dgamma: gamma - scope.start.gamma
    };
  };

  var onScreenOrientationChangeEvent = function onScreenOrientationChangeEvent() {

    scope.screenOrientation = window.orientation || 0;
  };

  // The angles alpha, beta and gamma form a set of intrinsic Tait-Bryan angles of type Z-X'-Y''

  var setObjectQuaternion = function () {

    var zee = new _vector2.default(0, 0, 1);

    var euler = new _euler2.default();

    var q0 = new _quaternion2.default();

    var q1 = new _quaternion2.default(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5)); // - PI/2 around the x-axis

    return function (quaternion, alpha, beta, gamma, orient) {

      euler.set(beta, alpha, -gamma, 'YXZ'); // 'ZXY' for the device, but 'YXZ' for us

      quaternion.setFromEuler(euler); // orient the device

      quaternion.multiply(q1); // camera looks out the back of the device, not the top

      quaternion.multiply(q0.setFromAxisAngle(zee, -orient)); // adjust for screen orientation
    };
  }();

  this.connect = function () {
    onScreenOrientationChangeEvent(); // run once on load
    window.addEventListener('orientationchange', onScreenOrientationChangeEvent, false);
    window.addEventListener('deviceorientation', onDeviceOrientationChangeEvent, false);
  };

  this.disconnect = function () {
    window.removeEventListener('orientationchange', onScreenOrientationChangeEvent, false);
    window.removeEventListener('deviceorientation', onDeviceOrientationChangeEvent, false);
    scope.enabled = false;
  };

  this.update = function () {
    if (scope.enabled === false) return;
    var alpha = !isNaNOrUndefined(scope.deviceOrientation.formatAlpha) ? _math2.default.degToRad(!isNaNOrUndefined(scope.object.alpha) ? scope.object.alpha : scope.deviceOrientation.formatAlpha + scope.alphaOffsetAngle) : 0; // Z
    var beta = !isNaNOrUndefined(scope.deviceOrientation.beta) ? _math2.default.degToRad(!isNaNOrUndefined(scope.object.beta) ? scope.object.beta : scope.deviceOrientation.beta + scope.betaOffsetAngle) : 0; // X'
    var gamma = !isNaNOrUndefined(scope.deviceOrientation.gamma) ? _math2.default.degToRad(!isNaNOrUndefined(scope.object.gamma) ? scope.object.gamma : scope.deviceOrientation.gamma + scope.gammaOffsetAngle) : 0; // Y''
    var orient = scope.screenOrientation ? _math2.default.degToRad(scope.screenOrientation) : 0; // O
    setObjectQuaternion(scope.quaternion, alpha, beta, gamma, orient);
  };

  this.updateAlphaOffsetAngle = function (angle) {
    this.alphaOffsetAngle = angle;
    this.update();
  };
  this.updateBetaOffsetAngle = function (angle) {
    this.betaOffsetAngle = angle;
    this.update();
  };
  this.updateGammaOffsetAngle = function (angle) {
    this.gammaOffsetAngle = angle;
    this.update();
  };

  this.dispose = function () {
    this.disconnect();
  };

  this.connect();
};

exports.default = DeviceOrientationControls;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 Copyright 2018 Alibaba Group

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Euler = function () {
  function Euler(x, y, z, order) {
    _classCallCheck(this, Euler);

    this.isEuler = true;
    this._x = 0;
    this._y = 0;
    this._z = 0;

    this._x = x || 0;
    this._y = y || 0;
    this._z = z || 0;
    this._order = order || Euler.DefaultOrder;
  }

  _createClass(Euler, [{
    key: 'set',
    value: function set(x, y, z, order) {
      this._x = x;
      this._y = y;
      this._z = z;
      this._order = order || this._order;
      this.onChangeCallback();
      return this;
    }
  }, {
    key: 'onChange',
    value: function onChange(callback) {
      this.onChangeCallback = callback;
      return this;
    }
  }, {
    key: 'onChangeCallback',
    value: function onChangeCallback() {}
  }, {
    key: 'order',
    get: function get() {
      return this._order;
    },
    set: function set(value) {
      this._order = value;
      this.onChangeCallback();
    }
  }]);

  return Euler;
}();

Euler.RotationOrders = ['XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX'];
Euler.DefaultOrder = 'XYZ';
exports.default = Euler;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 Copyright 2018 Alibaba Group

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animationUtil = __webpack_require__(4);

var _animationUtil2 = _interopRequireDefault(_animationUtil);

var _common = __webpack_require__(3);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimingHandler = function (_CommonHandler) {
  _inherits(TimingHandler, _CommonHandler);

  function TimingHandler(binding) {
    _classCallCheck(this, TimingHandler);

    var _this = _possibleConstructorReturn(this, (TimingHandler.__proto__ || Object.getPrototypeOf(TimingHandler)).call(this, binding));

    var _this$binding$options = _this.binding.options,
        _this$binding$options2 = _this$binding$options.props,
        props = _this$binding$options2 === undefined ? [] : _this$binding$options2,
        exitExpression = _this$binding$options.exitExpression;


    props.forEach(function (prop) {
      var expression = prop.expression;

      if (expression && expression.transformed && typeof expression.transformed === 'string') {
        expression.transformed = JSON.parse(expression.transformed);
      }
    });

    var exitTransformed = void 0;
    if (exitExpression && exitExpression.transformed) {
      exitTransformed = JSON.parse(exitExpression.transformed);
    }

    var animation = _this.animation = new _animationUtil2.default({
      duration: Infinity,
      easing: 'linear',
      onStart: function onStart() {
        _this.binding.callback({ state: 'start', t: 0 });
      },
      onRun: function onRun(e) {
        if (exitTransformed && _this.binding.getValue({ t: e.t }, exitTransformed)) {
          _this.animation.stop();
        }
        props.forEach(function (prop) {
          _this.animate(_extends({
            exitTransformed: exitTransformed,
            t: e.t
          }, prop));
        });
      },
      onStop: function onStop(e) {
        _this.binding.callback({ state: 'exit', t: e.t - 1000 / 60 });
      }
    });
    animation.run();
    return _this;
  }

  _createClass(TimingHandler, [{
    key: 'animate',
    value: function animate(args) {
      var element = args.element,
          property = args.property,
          expression = args.expression,
          t = args.t;

      var value = this.binding.getValue({ t: t }, expression.transformed);
      this.binding.setProperty(element, property, value);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      if (this.animation) {
        this.animation.stop();
      }
    }
  }]);

  return TimingHandler;
}(_common2.default);

exports.default = TimingHandler;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 Copyright 2018 Alibaba Group

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _common = __webpack_require__(3);

var _common2 = _interopRequireDefault(_common);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function isTurner(prev, now) {

  return prev / now < 0;
}

var ScrollHandler = function (_CommonHandler) {
  _inherits(ScrollHandler, _CommonHandler);

  function ScrollHandler(binding) {
    _classCallCheck(this, ScrollHandler);

    var _this = _possibleConstructorReturn(this, (ScrollHandler.__proto__ || Object.getPrototypeOf(ScrollHandler)).call(this, binding));

    _this.dx = 0;
    _this.dy = 0;
    _this.prevX = null;
    _this.prevY = null;
    _this.tx = 0;
    _this.ty = 0;
    _this.tdx = 0;
    _this.tdy = 0;

    _this._onScroll = function (e) {
      var props = _this.binding.options.props;

      var callback = _this.binding.callback;
      var x = (0, _utils.pxTo750)(e.target.scrollLeft);
      var y = (0, _utils.pxTo750)(e.target.scrollTop);
      props.forEach(function (prop) {
        var element = prop.element,
            property = prop.property,
            expression = prop.expression;

        var transformed = JSON.parse(expression.transformed);
        var val = _this.binding.getValue({
          x: x,
          y: y,
          dx: _this.dx,
          dy: _this.dy,
          tdx: _this.tdx,
          tdy: _this.tdy
        }, transformed);

        _this.binding.setProperty(element, property, val);
      });

      if (_this.prevX !== null && _this.prevY !== null) {
        var dx = x - _this.prevX;
        var dy = y - _this.prevY;
        var cbParams = {
          x: x,
          y: y
        };
        // 拐点
        if (isTurner(_this.dx, dx)) {
          _this.tx = x;
          cbParams.state = 'turn';
        }
        if (isTurner(_this.dy, dy)) {
          _this.ty = y;
          cbParams.state = 'turn';
        }

        _this.dx = cbParams.dx = x - _this.prevX;
        _this.dy = cbParams.dy = y - _this.prevY;
        _this.tdx = cbParams.tdx = x - _this.tx;
        _this.tdy = cbParams.tdy = y - _this.ty;
        if (cbParams.state) {
          callback(cbParams);
        }
      }

      _this.prevX = x;
      _this.prevY = y;
    };

    var anchor = binding.options.anchor;

    _this.tx = (0, _utils.pxTo750)(anchor.scrollLeft);
    _this.ty = (0, _utils.pxTo750)(anchor.scrollTop);
    anchor.addEventListener('scroll', _this._onScroll);
    return _this;
  }

  _createClass(ScrollHandler, [{
    key: 'destroy',
    value: function destroy() {
      var anchor = this.binding.options.anchor;

      anchor.removeEventListener('scroll', this._onScroll);
    }
  }]);

  return ScrollHandler;
}(_common2.default);

exports.default = ScrollHandler;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 Copyright 2018 Alibaba Group

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleLodash = __webpack_require__(1);

var _simpleLodash2 = _interopRequireDefault(_simpleLodash);

var _animationUtil = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// inset function
function colorToDecimal(hexColor) {
  var hex = hexColor.replace(/'|"|#/g, '');
  return parseInt(hex, 16);
}

function decToHex(dec) {
  var hex = dec.toString(16);
  var a = [];
  for (var i = 0; i < 6 - hex.length; i++) {
    a.push('0');
  }
  return a.join('') + hex;
}

function parseColor(hexColor) {
  var hex = hexColor.replace(/'|"|#/g, '');
  hex = hex.length === 3 ? [hex[0], hex[0], hex[1], hex[1], hex[2], hex[2]].join('') : hex;
  var r = '' + hex[0] + hex[1];
  var g = '' + hex[2] + hex[3];
  var b = '' + hex[4] + hex[5];
  return {
    r: r,
    g: g,
    b: b,
    dr: colorToDecimal(r),
    dg: colorToDecimal(g),
    db: colorToDecimal(b)
  };
}

var Fn = {
  max: Math.max,
  min: Math.min,
  sin: Math.sin,
  cos: Math.cos,
  tan: Math.tan,
  sqrt: Math.sqrt,
  cbrt: Math.cbrt,
  log: Math.log,
  abs: Math.abs,
  atan: Math.atan,
  floor: Math.floor,
  ceil: Math.ceil,
  pow: Math.pow,
  exp: Math.exp,
  PI: Math.PI,
  E: Math.E,
  acos: Math.acos,
  asin: Math.asin,
  sign: Math.sign,
  atan2: Math.atan2,
  round: Math.round,
  rgb: function rgb(r, g, b) {
    return 'rgb(' + parseInt(r) + ',' + parseInt(g) + ',' + parseInt(b) + ')';
  },
  rgba: function rgba(r, g, b, a) {
    return 'rgb(' + parseInt(r) + ',' + parseInt(g) + ',' + parseInt(b) + ',' + a + ')';
  },
  getArgs: function getArgs() {
    return arguments;
  },
  evaluateColor: function evaluateColor(colorFrom, colorTo, percent) {
    percent = percent > 1 ? 1 : percent;
    var from = parseColor(colorFrom);
    var to = parseColor(colorTo);
    var dr = parseInt((to.dr - from.dr) * percent + from.dr);
    var dg = parseInt((to.dg - from.dg) * percent + from.dg);
    var db = parseInt((to.db - from.db) * percent + from.db);
    var resDec = dr * 16 * 16 * 16 * 16 + dg * 16 * 16 + db;
    return '#' + decToHex(resDec);
  }
};

// inset all easing functions
_simpleLodash2.default.map(_animationUtil.Easing, function (v, k) {
  if (k !== 'cubicBezier') {
    Fn[k] = function (t, begin, offset, duration) {
      t = Math.max(Math.min(t / duration, 1));
      return v(t) * offset + begin;
    };
  }
});

Fn.cubicBezier = function (t, begin, offset, duration, x1, y1, x2, y2) {
  t = Math.max(Math.min(t / duration, 1));
  var epsilon = 1000 / 60 / duration / 4;
  return (0, _animationUtil.Bezier)(x1, y1, x2, y2, epsilon)(t) * offset + begin; // eslint-disable-line
};

exports.default = Fn;

/***/ })
/******/ ]);
});

/***/ })
/******/ ]);
});

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(102);

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

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(105);

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

var _index = __webpack_require__(114);

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
exports.FmBtnbarItem = exports.FmBtnbar = exports.FmTabbarItem = exports.FmTabbar = exports.FmPanItem = exports.FmTabPage = exports.FmSimpleList = exports.FmRcyCheck = exports.FmMultiCheckCell = exports.FmMultiCheckGroup = exports.FmTitlebar = exports.FmSearchbar = exports.FmActionView = exports.FmCheckListGroup = exports.FmCheckbox = exports.showSnackBar = exports.FmSnackBar = exports.FmRater = exports.FmItem = exports.FmActionSheet = exports.FmPopup = exports.alert = exports.confirm = exports.FmSimpleBtn = exports.FmDialog = exports.FmOverlay = exports.FmImage = exports.FmFoldableText = exports.FmSpecialRichText = exports.FmRichText = exports.FmTips = exports.FmInput = exports.FmButton = exports.FmSlider = exports.FmIcon = exports.FmText = exports.FmTagWall = exports.FmTag = exports.FmSwitch = exports.Utils = undefined;

var _utils = __webpack_require__(13);

var _utils2 = _interopRequireDefault(_utils);

var _fmSwitch = __webpack_require__(23);

var _fmSwitch2 = _interopRequireDefault(_fmSwitch);

var _fmTag = __webpack_require__(8);

var _fmTag2 = _interopRequireDefault(_fmTag);

var _fmTagWall = __webpack_require__(35);

var _fmTagWall2 = _interopRequireDefault(_fmTagWall);

var _fmText = __webpack_require__(6);

var _fmText2 = _interopRequireDefault(_fmText);

var _fmIcon = __webpack_require__(3);

var _fmIcon2 = _interopRequireDefault(_fmIcon);

var _fmSlider = __webpack_require__(57);

var _fmSlider2 = _interopRequireDefault(_fmSlider);

var _fmButton = __webpack_require__(63);

var _fmButton2 = _interopRequireDefault(_fmButton);

var _fmInput = __webpack_require__(69);

var _fmInput2 = _interopRequireDefault(_fmInput);

var _fmTips = __webpack_require__(75);

var _fmTips2 = _interopRequireDefault(_fmTips);

var _fmRichText = __webpack_require__(81);

var _fmRichText2 = _interopRequireDefault(_fmRichText);

var _fmSpecialRichText = __webpack_require__(90);

var _fmSpecialRichText2 = _interopRequireDefault(_fmSpecialRichText);

var _fmFoldableText = __webpack_require__(96);

var _fmFoldableText2 = _interopRequireDefault(_fmFoldableText);

var _fmImage = __webpack_require__(9);

var _fmImage2 = _interopRequireDefault(_fmImage);

var _fmOverlay = __webpack_require__(10);

var _fmOverlay2 = _interopRequireDefault(_fmOverlay);

var _fmDialog = __webpack_require__(15);

var _fmDialog2 = _interopRequireDefault(_fmDialog);

var _fmSimpleBtn = __webpack_require__(11);

var _fmSimpleBtn2 = _interopRequireDefault(_fmSimpleBtn);

var _dialog = __webpack_require__(120);

var _fmPopup = __webpack_require__(16);

var _fmPopup2 = _interopRequireDefault(_fmPopup);

var _fmActionSheet = __webpack_require__(126);

var _fmActionSheet2 = _interopRequireDefault(_fmActionSheet);

var _fmItem = __webpack_require__(132);

var _fmItem2 = _interopRequireDefault(_fmItem);

var _fmRater = __webpack_require__(139);

var _fmRater2 = _interopRequireDefault(_fmRater);

var _fmSnackBar = __webpack_require__(17);

var _fmSnackBar2 = _interopRequireDefault(_fmSnackBar);

var _snackbar = __webpack_require__(150);

var _snackbar2 = _interopRequireDefault(_snackbar);

var _fmCheckbox = __webpack_require__(151);

var _fmCheckbox2 = _interopRequireDefault(_fmCheckbox);

var _fmCheckListGroup = __webpack_require__(157);

var _fmCheckListGroup2 = _interopRequireDefault(_fmCheckListGroup);

var _fmActionView = __webpack_require__(161);

var _fmActionView2 = _interopRequireDefault(_fmActionView);

var _fmSearchbar = __webpack_require__(22);

var _fmSearchbar2 = _interopRequireDefault(_fmSearchbar);

var _fmTitlebar = __webpack_require__(170);

var _fmTitlebar2 = _interopRequireDefault(_fmTitlebar);

var _fmMultiCheckGroup = __webpack_require__(176);

var _fmMultiCheckGroup2 = _interopRequireDefault(_fmMultiCheckGroup);

var _fmMultiCheckCell = __webpack_require__(18);

var _fmMultiCheckCell2 = _interopRequireDefault(_fmMultiCheckCell);

var _fmRcyCheck = __webpack_require__(190);

var _fmRcyCheck2 = _interopRequireDefault(_fmRcyCheck);

var _fmSimpleList = __webpack_require__(196);

var _fmSimpleList2 = _interopRequireDefault(_fmSimpleList);

var _fmTabPage = __webpack_require__(207);

var _fmTabPage2 = _interopRequireDefault(_fmTabPage);

var _fmPanItem = __webpack_require__(215);

var _fmPanItem2 = _interopRequireDefault(_fmPanItem);

var _fmTabbar = __webpack_require__(219);

var _fmTabbar2 = _interopRequireDefault(_fmTabbar);

var _fmTabbarItem = __webpack_require__(19);

var _fmTabbarItem2 = _interopRequireDefault(_fmTabbarItem);

var _fmBtnbar = __webpack_require__(230);

var _fmBtnbar2 = _interopRequireDefault(_fmBtnbar);

var _fmBtnbarItem = __webpack_require__(20);

var _fmBtnbarItem2 = _interopRequireDefault(_fmBtnbarItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Utils = _utils2.default;
exports.FmSwitch = _fmSwitch2.default;
exports.FmTag = _fmTag2.default;
exports.FmTagWall = _fmTagWall2.default;
exports.FmText = _fmText2.default;
exports.FmIcon = _fmIcon2.default;
exports.FmSlider = _fmSlider2.default;
exports.FmButton = _fmButton2.default;
exports.FmInput = _fmInput2.default;
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
exports.FmItem = _fmItem2.default;
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
exports.FmSimpleList = _fmSimpleList2.default;
exports.FmTabPage = _fmTabPage2.default;
exports.FmPanItem = _fmPanItem2.default;
exports.FmTabbar = _fmTabbar2.default;
exports.FmTabbarItem = _fmTabbarItem2.default;
exports.FmBtnbar = _fmBtnbar2.default;
exports.FmBtnbarItem = _fmBtnbarItem2.default;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                                * Created by Yanjiie on 18/03/08. Fork from https://github.com/alibaba/weex-ui
                                                                                                                                                                                                                                                                                */

var _weexBindingx = __webpack_require__(7);

var _weexBindingx2 = _interopRequireDefault(_weexBindingx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Utils = {
  _typeof: function _typeof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  },
  isPlainObject: function isPlainObject(obj) {
    return Utils._typeof(obj) === 'object';
  },
  isString: function isString(obj) {
    return typeof obj === 'string';
  },
  isNonEmptyArray: function isNonEmptyArray() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
  },
  isObject: function isObject(item) {
    return item && (typeof item === 'undefined' ? 'undefined' : _typeof2(item)) === 'object' && !Array.isArray(item);
  },
  isEmptyObject: function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },
  decodeIconFont: function decodeIconFont(text) {
    // 正则匹配 图标和文字混排 eg: 我去上学校&#xe600;,天天不&#xe600;迟到
    var regExp = /&#x[a-z|0-9]{4,5};?/g;
    if (regExp.test(text)) {
      return text.replace(new RegExp(regExp, 'g'), function (iconText) {
        var replace = iconText.replace(/&#x/, '0x').replace(/;$/, '');
        return String.fromCharCode(replace);
      });
    } else {
      return text;
    }
  },
  mergeDeep: function mergeDeep(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    if (!sources.length) return target;
    var source = sources.shift();
    if (Utils.isObject(target) && Utils.isObject(source)) {
      for (var key in source) {
        if (Utils.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, _defineProperty({}, key, {}));
          }
          Utils.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, _defineProperty({}, key, source[key]));
        }
      }
    }
    return Utils.mergeDeep.apply(Utils, [target].concat(sources));
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
      animated: animated.toString()
    }, callback);
  },

  env: {
    isWeb: function isWeb() {
      var platform = weex.config.env.platform;

      return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) === 'object' && platform.toLowerCase() === 'web';
    },
    isIOS: function isIOS() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'ios';
    },

    /**
     * 是否为 iPhone X
     * @returns {boolean}
     */
    isIPhoneX: function isIPhoneX() {
      var deviceHeight = weex.config.env.deviceHeight;

      if (Utils.env.isWeb()) {
        return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) !== undefined && window.screen && window.screen.width && window.screen.height && parseInt(window.screen.width, 10) === 375 && parseInt(window.screen.height, 10) === 812;
      }
      return Utils.env.isIOS() && deviceHeight === 2436;
    },
    isAndroid: function isAndroid() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'android';
    },
    supportsEB: function supportsEB() {
      return _weexBindingx2.default.isSupportBinding && !Utils.env.isWeb();
    },


    /**
     * 判断Android容器是否支持是否支持expressionBinding(处理方式很不一致)
     * @returns {boolean}
     */
    supportsEBForAndroid: function supportsEBForAndroid() {
      return Utils.env.isAndroid() && Utils.env.supportsEB();
    },


    /**
     * 判断IOS容器是否支持是否支持expressionBinding
     * @returns {boolean}
     */
    supportsEBForIos: function supportsEBForIos() {
      return Utils.env.isIOS() && Utils.env.supportsEB();
    },


    /**
     * 获取weex屏幕真实的设置高度，需要减去导航栏高度
     * @returns {Number}
     */
    getPageHeight: function getPageHeight() {
      var env = weex.config.env;

      var navHeight = Utils.env.isWeb() ? 0 : Utils.env.isIPhoneX() ? 176 : 132;
      return env.deviceHeight / env.deviceWidth * 750 - navHeight;
    },

    /**
     * 获取weex屏幕真实的设置高度
     * @returns {Number}
     */
    getScreenHeight: function getScreenHeight() {
      var env = weex.config.env;

      return env.deviceHeight / env.deviceWidth * 750;
    }
  },

  /**
   * 版本号比较
   * @memberOf Utils
   * @param currVer {string}
   * @param promoteVer {string}
   * @returns {boolean}
   * @example
   *
   * const { Utils } = require('@ali/wx-bridge');
   * const { compareVersion } = Utils;
   * console.log(compareVersion('0.1.100', '0.1.11')); // 'true'
   */
  compareVersion: function compareVersion() {
    var currVer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.0.0';
    var promoteVer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.0.0';

    if (currVer === promoteVer) return true;
    var currVerArr = currVer.split('.');
    var promoteVerArr = promoteVer.split('.');
    var len = Math.max(currVerArr.length, promoteVerArr.length);
    for (var i = 0; i < len; i++) {
      var proVal = ~~promoteVerArr[i];
      var curVal = ~~currVerArr[i];
      if (proVal < curVal) {
        return true;
      } else if (proVal > curVal) {
        return false;
      }
    }
    return false;
  },

  /**
   * 分割数组
   * @param arr 被分割数组
   * @param size 分割数组的长度
   * @returns {Array}
   */
  arrayChunk: function arrayChunk() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

    var groups = [];
    if (arr && arr.length > 0) {
      groups = arr.map(function (e, i) {
        return i % size === 0 ? arr.slice(i, i + size) : null;
      }).filter(function (e) {
        return e;
      });
    }
    return groups;
  },
  truncateString: function truncateString(str, len) {
    var hasDot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var newLength = 0;
    var newStr = '';
    var singleChar = '';
    var chineseRegex = /[^\x00-\xff]/g;
    var strLength = str.replace(chineseRegex, '**').length;
    for (var i = 0; i < strLength; i++) {
      singleChar = str.charAt(i).toString();
      if (singleChar.match(chineseRegex) !== null) {
        newLength += 2;
      } else {
        newLength++;
      }
      if (newLength > len) {
        break;
      }
      newStr += singleChar;
    }

    if (hasDot && strLength > len) {
      newStr += '...';
    }
    return newStr;
  },

  animation: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param ref
     * @param transform 运动类型
     * @param status
     * @param callback 回调函数
     */
    pageTransitionAnimation: function pageTransitionAnimation(ref, transform, status, callback) {
      var animation = weex.requireModule('animation');
      animation.transition(ref, {
        styles: {
          transform: transform
        },
        duration: status ? 250 : 300, // ms
        timingFunction: status ? 'ease-in' : 'ease-out',
        delay: 0 // ms
      }, function () {
        callback && callback();
      });
    }
  },
  uiStyle: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param animationType 页面转场动画的类型 push，model
     * @param size 分割数组的长度
     * @returns {}
     */
    pageTransitionAnimationStyle: function pageTransitionAnimationStyle(animationType) {
      if (animationType === 'push') {
        return {
          left: '750px',
          top: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      } else if (animationType === 'model') {
        return {
          top: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px',
          left: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      }
      return {};
    }
  }
};

exports.default = Utils;

/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(110);

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

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(121);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(179);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(224);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(235);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 21 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(165);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(24);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(25)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(27),
  /* template */
  __webpack_require__(28),
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0185baaa", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-058cc90e\",\"scoped\":true,\"hasInlineConfig\":false}!./switch.css", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-058cc90e\",\"scoped\":true,\"hasInlineConfig\":false}!./switch.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n/** 默认主题色 blue **/\n.fm-switch[data-v-058cc90e] {\n  flex-direction: row;\n  align-items: center;\n  width: 144px;\n  height: 72px;\n  border-radius: 72px;\n  background-color: #198ded;\n}\n.ctr-ball[data-v-058cc90e] {\n  width: 48px;\n  height: 48px;\n  border-radius: 24px;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/lib/theme-paint/lib/switch.css"],"names":[],"mappings":";AAAA,iBAAiB;AACjB,kBAAkB;AAClB;EACE,oBAAoB;EACpB,oBAAoB;EACpB,aAAa;EACb,aAAa;EACb,oBAAoB;EACpB,0BAA0B;CAAE;AAE9B;EACE,YAAY;EACZ,aAAa;EACb,oBAAoB;CAAE","file":"switch.css","sourcesContent":["@charset \"UTF-8\";\n/** 默认主题色 blue **/\n.fm-switch {\n  flex-direction: row;\n  align-items: center;\n  width: 144px;\n  height: 72px;\n  border-radius: 72px;\n  background-color: #198ded; }\n\n.ctr-ball {\n  width: 48px;\n  height: 48px;\n  border-radius: 24px; }\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 27 */
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
      var _this = this;

      this.isAnimate = true;
      var style = bool ? {
        backgroundColor: this.focusColor,
        transform: 'scale(1) translate(72px, 0)',
        transformOrigin: 'center center'
      } : {
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
    if (this.common) {
      this.focusColor = '#198DED';
      this.blurColor = '#7E97AC';
    }
    this.checked ? this.ballStyle = {
      backgroundColor: this.focusColor,
      transform: 'scale(1.0) translate(72px, 0)'
    } : this.ballStyle = {
      backgroundColor: this.blurColor,
      transform: 'scale(0.6)'
    };
  }
};

/***/ }),
/* 28 */
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(30)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(34),
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.fm-tag[data-v-2072c04b] {\n    align-items: center;\n\t  flex-direction: row;\n}\n.tag-item[data-v-2072c04b] {\n    padding: 9px;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n}\n.tag-border[data-v-2072c04b] {\n    border-radius: 4.5px;\n}\n.tag-huge[data-v-2072c04b] {\n    border-radius: 100px;\n    height: 72px;\n    padding: 12px 42px;\n}\n.tag-hollow[data-v-2072c04b] {\n    border-width: 3px;\n}\n.tag-text[data-v-2072c04b] {\n    font-family: \"Source Han Sans CN\", Roboto, sans-serif;\n    font-weight: bold;\n}\n.tag-font-small[data-v-2072c04b] {\n    font-size: 24px;\n}\n.tag-font-big[data-v-2072c04b] {\n    font-size: 30px;\n}\n.tag-font-huge[data-v-2072c04b] {\n    font-size: 42px;\n    font-family: sans-serif-medium;\n    font-weight: 500;\n}\n.tag-margin-small[data-v-2072c04b] {\n    margin-right: 6px;\n    margin-bottom: 6px;\n}\n.tag-margin-big[data-v-2072c04b] {\n    margin-right: 12px;\n    margin-bottom: 12px;\n}\n.tag-margin-huge[data-v-2072c04b] {\n    margin-right: 36px;\n    margin-bottom: 36px;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-tag/index.vue?e5b149b2"],"names":[],"mappings":";AAWA;IACA,oBAAA;GACA,oBAAA;CACA;AAEA;IACA,aAAA;IACA,wBAAA;IACA,oBAAA;IACA,iBAAA;CACA;AAEA;IACA,qBAAA;CACA;AAEA;IACA,qBAAA;IACA,aAAA;IACA,mBAAA;CACA;AAEA;IACA,kBAAA;CACA;AAEA;IACA,sDAAA;IACA,kBAAA;CACA;AAEA;IACA,gBAAA;CACA;AAEA;IACA,gBAAA;CACA;AAEA;IACA,gBAAA;IACA,+BAAA;IACA,iBAAA;CACA;AAEA;IACA,kBAAA;IACA,mBAAA;CACA;AAEA;IACA,mBAAA;IACA,oBAAA;CACA;AAEA;IACA,mBAAA;IACA,oBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n  <div :class=\"tagClass\">\n    <div v-if=\"showSolid || showHollow\"\n        :class=\"['tag-item', 'tag-border', size === 'huge' && 'tag-huge', showHollow && 'tag-hollow']\"\n        :style=\"tagTextStyle\">\n      <text :class=\"textClass\" ref='content' :style=\"textStyle\"><slot></slot><template v-if=\"!$slots.default\">{{ value }}</template></text>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n  .fm-tag {\n    align-items: center;\n\t  flex-direction: row;\n  }\n\n  .tag-item {\n    padding: 9px;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n  }\n\n  .tag-border {\n    border-radius: 4.5px;\n  }\n\n  .tag-huge {\n    border-radius: 100px;\n    height: 72px;\n    padding: 12px 42px;\n  }\n\n  .tag-hollow {\n    border-width: 3px;\n  }\n\n  .tag-text {\n    font-family: \"Source Han Sans CN\", Roboto, sans-serif;\n    font-weight: bold;\n  }\n\n  .tag-font-small {\n    font-size: 24px;\n  }\n\n  .tag-font-big {\n    font-size: 30px;\n  }\n\n  .tag-font-huge {\n    font-size: 42px;\n    font-family: sans-serif-medium;\n    font-weight: 500;\n  }\n\n  .tag-margin-small {\n    margin-right: 6px;\n    margin-bottom: 6px;\n  }\n\n  .tag-margin-big {\n    margin-right: 12px;\n    margin-bottom: 12px;\n  }\n\n  .tag-margin-huge {\n    margin-right: 36px;\n    margin-bottom: 36px;\n  }\n</style>\n\n<script>\nimport Locale from 'weex-flymeui/lib/mixins/locale';\nimport { t } from 'weex-flymeui/lib/locale';\n\nexport default {\n  name: 'FmTag',\n  mixins: [Locale],\n  props: {\n    type: {\n      type: String,\n      default: 'solid'\n    },\n    size: {\n      type: String,\n      default: 'small'\n    },\n    value: {\n      type: [String, Number],\n      default () {\n        return t('el.tag.tagName');\n      }\n    },\n    color: {\n      type: String,\n      default: '#198DED'\n    },\n    fontColor: {\n      type: String,\n      default: '#FFFFFF'\n    }\n  },\n  computed: {\n    showSolid () {\n      const { type, value } = this;\n      return type === 'solid' && value !== '';\n    },\n    showHollow () {\n      const { type, value } = this;\n      return type === 'hollow' && value !== '';\n    },\n    tagTextStyle () {\n      const { color, showSolid } = this;\n      return showSolid ? { backgroundColor: color } : { borderColor: color };\n    },\n    textStyle () {\n      const { fontColor } = this;\n      return { color: fontColor };\n    },\n    textClass () {\n      const clz = ['tag-text'];\n      const { size } = this;\n      clz.push(`tag-font-${size}`);\n      return clz;\n    },\n    tagClass () {\n      const clz = ['fm-tag'];\n      const { size } = this;\n      clz.push(`tag-margin-${size}`);\n      return clz;\n    }\n  },\n  created () {\n    this.$slots.default && (this.value = this.$slots.default[0].text);\n  }\n};\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _locale = __webpack_require__(5);

var _locale2 = _interopRequireDefault(_locale);

var _locale3 = __webpack_require__(4);

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
      var fontColor = this.fontColor;

      return { color: fontColor };
    },
    textClass: function textClass() {
      var clz = ['tag-text'];
      var size = this.size;

      clz.push('tag-font-' + size);
      return clz;
    },
    tagClass: function tagClass() {
      var clz = ['fm-tag'];
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
/* 33 */
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
      close: '关闭',
      title: '标题',
      more: '更多'
    },
    titlebar: {
      title: '标题'
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.tagClass,
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [(_vm.showSolid || _vm.showHollow) ? _c('div', {
    class: ['tag-item', 'tag-border', _vm.size === 'huge' && 'tag-huge', _vm.showHollow && 'tag-hollow'],
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.tagTextStyle))
  }, [_c('text', {
    ref: "content",
    class: _vm.textClass,
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.textStyle))
  }, [_vm._t("default"), (!_vm.$slots.default) ? [_vm._v(_vm._s(_vm.value))] : _vm._e()], 2)]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2072c04b", module.exports)
  }
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(36);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(37)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(39),
  /* template */
  __webpack_require__(43),
  /* scopeId */
  "data-v-1a0456a2",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-tag-wall/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a0456a2", Component.options)
  } else {
    hotAPI.reload("data-v-1a0456a2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("3c0e67b4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1a0456a2\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1a0456a2\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.wall-wrap[data-v-1a0456a2] {\n  width: 1080px;\n}\n.title-wrap[data-v-1a0456a2] {\n  flex-direction: row;\n  padding: 27px 49px;\n  justify-content: space-between;\n}\n.title-text[data-v-1a0456a2] {\n  font-family: sans-serif-medium;\n  font-weight: 500;\n  font-size: 36px;\n  line-height: 54px;\n}\n.title-rightBtn[data-v-1a0456a2] {\n  font-family: sans-serif-medium;\n  font-weight: 500;\n  font-size: 36px;\n  line-height: 54px;\n}\n.tags-wrap[data-v-1a0456a2] {\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 0 24px 0 48px;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-tag-wall/index.vue?aaa8f3b6"],"names":[],"mappings":";AAsBA;EACA,cAAA;CACA;AAEA;EACA,oBAAA;EACA,mBAAA;EACA,+BAAA;CACA;AAEA;EACA,+BAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;CACA;AAEA;EACA,+BAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;CACA;AAEA;EACA,oBAAA;EACA,gBAAA;EACA,uBAAA;CACA","file":"index.vue","sourcesContent":["<!-- Created by Yanjiie on 2018/3/2. -->\n<template>\n  <div class=\"wall-wrap\">\n    <div class=\"title-wrap\">\n      <slot name=\"left\">\n        <text class=\"title-text\" :style=\"{ color: titleColor }\">{{ title }}</text>\n      </slot>\n      <slot name=\"right\">\n        <text class=\"title-rightBtn\" :style=\"{ color: rightColor }\" @click=\"btnClicked\">{{ rightText }}</text>\n      </slot>\n    </div>\n    <div class=\"tags-wrap\">\n      <item v-for=\"(item, index) in list\"\n            v-bind=\"Object.assign({}, customStyles, item)\"\n            :key=\"index\"\n            :index=\"index\"\n            @select=\"onSelect(index)\" />\n    </div>\n  </div>\n</template>\n\n<style scoped>\n  .wall-wrap {\n    width: 1080px;\n  }\n\n  .title-wrap {\n    flex-direction: row;\n    padding: 27px 49px;\n    justify-content: space-between;\n  }\n\n  .title-text {\n    font-family: sans-serif-medium;\n    font-weight: 500;\n    font-size: 36px;\n    line-height: 54px;\n  }\n\n  .title-rightBtn {\n    font-family: sans-serif-medium;\n    font-weight: 500;\n    font-size: 36px;\n    line-height: 54px;\n  }\n\n  .tags-wrap {\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 0 24px 0 48px;\n  }\n</style>\n\n<script>\nimport Item from './item.vue';\nimport Locale from 'weex-flymeui/lib/mixins/locale';\nimport { t } from 'weex-flymeui/lib/locale';\n\nexport default {\n  name: 'FmTagWall',\n  mixins: [Locale],\n  components: { Item },\n  props: {\n    list: {\n      type: Array,\n      default: () => ([])\n    },\n    title: {\n      type: String,\n      default () {\n        return t('el.common.title');\n      }\n    },\n    titleColor: {\n      type: String,\n      default: 'rgba(0, 0, 0, 0.4)'\n    },\n    rightText: {\n      type: String,\n      default: ''\n    },\n    rightColor: {\n      type: String,\n      default: '#198DED'\n    },\n    customStyles: {\n      type: Object,\n      default: () => ({})\n    }\n  },\n  methods: {\n    onSelect (index) {\n      this.$emit('fmTagWallSelected', { title: this.list[index].title, index });\n    },\n    btnClicked () {\n      this.$emit('fmTagWallRightBtnClicked');\n    }\n  }\n};\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _item = __webpack_require__(40);

var _item2 = _interopRequireDefault(_item);

var _locale = __webpack_require__(5);

var _locale2 = _interopRequireDefault(_locale);

var _locale3 = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'FmTagWall',
  mixins: [_locale2.default],
  components: { Item: _item2.default },
  props: {
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    title: {
      type: String,
      default: function _default() {
        return (0, _locale3.t)('el.common.title');
      }
    },
    titleColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.4)'
    },
    rightText: {
      type: String,
      default: ''
    },
    rightColor: {
      type: String,
      default: '#198DED'
    },
    customStyles: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  methods: {
    onSelect: function onSelect(index) {
      this.$emit('fmTagWallSelected', { title: this.list[index].title, index: index });
    },
    btnClicked: function btnClicked() {
      this.$emit('fmTagWallRightBtnClicked');
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

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(41),
  /* template */
  __webpack_require__(42),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-tag-wall/item.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] item.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ead85e1a", Component.options)
  } else {
    hotAPI.reload("data-v-ead85e1a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 41 */
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

exports.default = {
  props: {
    index: {
      type: Number,
      default: -1
    },
    title: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 72
    },
    padding: {
      type: Number,
      default: 30
    },
    borderRadius: {
      type: Number,
      default: 6
    },
    borderWidth: {
      type: Number,
      default: 2
    },
    fontSize: {
      type: Number,
      default: 42
    },
    originBorderColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.08)'
    },
    originTitleColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.6)'
    },
    originBackgroundColor: {
      type: String,
      default: '#FFFFFF'
    },
    color: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    borderColor: {
      type: String,
      default: ''
    },
    lineSpacing: {
      type: Number,
      default: 24
    },
    itemSpacing: {
      type: Number,
      default: 24
    }
  },
  computed: {
    wrapStyle: function wrapStyle() {
      var borderRadius = this.borderRadius,
          height = this.height,
          padding = this.padding,
          borderWidth = this.borderWidth,
          originBorderColor = this.originBorderColor,
          originBackgroundColor = this.originBackgroundColor,
          backgroundColor = this.backgroundColor,
          borderColor = this.borderColor,
          color = this.color,
          itemSpacing = this.itemSpacing,
          lineSpacing = this.lineSpacing;

      return {
        justifyContent: 'center',
        borderRadius: borderRadius,
        height: height,
        paddingLeft: padding,
        paddingRight: padding,
        borderWidth: borderWidth,
        backgroundColor: backgroundColor || originBackgroundColor,
        borderColor: borderColor || color || originBorderColor,
        marginRight: itemSpacing,
        marginBottom: lineSpacing
      };
    },
    titleStyle: function titleStyle() {
      var fontSize = this.fontSize,
          color = this.color,
          originTitleColor = this.originTitleColor;

      return {
        fontSize: fontSize,
        color: color || originTitleColor
      };
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('select', this.index);
    }
  }
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wall-item",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.wrapStyle)),
    on: {
      "click": _vm.onClick
    }
  }, [_c('text', {
    staticClass: "text-title",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.titleStyle))
  }, [_vm._v(_vm._s(_vm.title))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ead85e1a", module.exports)
  }
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wall-wrap",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_c('div', {
    staticClass: "title-wrap",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_vm._t("left", [_c('text', {
    staticClass: "title-text",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      color: _vm.titleColor
    }))
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _vm._t("right", [_c('text', {
    staticClass: "title-rightBtn",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      color: _vm.rightColor
    })),
    on: {
      "click": _vm.btnClicked
    }
  }, [_vm._v(_vm._s(_vm.rightText))])])], 2), _vm._v(" "), _c('div', {
    staticClass: "tags-wrap",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, _vm._l((_vm.list), function(item, index) {
    return _c('item', _vm._b({
      key: index,
      staticStyle: _vm.$processStyle(undefined),
      style: (_vm.$processStyle(undefined)),
      attrs: {
        "index": index
      },
      on: {
        "select": function($event) {
          _vm.onSelect(index)
        }
      }
    }, 'item', Object.assign({}, _vm.customStyles, item), false))
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1a0456a2", module.exports)
  }
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(45)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(47),
  /* template */
  __webpack_require__(48),
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.text[data-v-68596e9c] {\n\tfont-size: 42;\n\tline-height: 63;\n\tcolor: #999999;\n\tfont-family: \"Source Han Sans CN\", Roboto, sans-serif;\n}\n.medium[data-v-68596e9c] {\n\tfont-family: sans-serif-medium;\n\tfont-weight: 500;\n}\n.bold[data-v-68596e9c] {\n\tfont-weight: 700;\n}\n.light[data-v-68596e9c] {\n\tfont-weight: 400;\n}\n.small[data-v-68596e9c] {\n\tfont-size: 36;\n}\n.large[data-v-68596e9c] {\n\tfont-size: 48;\n\tfont-weight: 500;\n\tline-height: 72;\n\tcolor: #000000;\n}\n.huge[data-v-68596e9c] {\n\tfont-size: 54;\n\tline-height: 81;\n\tcolor: #000000;\n}\n.margin-text[data-v-68596e9c] {\n\tmargin-right: 9;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-text/index.vue?d3bc9fac"],"names":[],"mappings":";AAKA;CACA,cAAA;CACA,gBAAA;CACA,eAAA;CACA,sDAAA;CACA;AACA;CACA,+BAAA;CACA,iBAAA;CACA;AACA;CACA,iBAAA;CACA;AACA;CACA,iBAAA;CACA;AACA;CACA,cAAA;CACA;AACA;CACA,cAAA;CACA,iBAAA;CACA,gBAAA;CACA,eAAA;CACA;AACA;CACA,cAAA;CACA,gBAAA;CACA,eAAA;CACA;AACA;CACA,gBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n  <text :class=\"textClz\"><slot></slot><template v-if=\"!$slots.default\">{{ value }}</template></text>\n</template>\n\n<style scoped>\n\t.text {\n\t\tfont-size: 42;\n\t\tline-height: 63;\n\t\tcolor: #999999;\n\t\tfont-family: \"Source Han Sans CN\", Roboto, sans-serif;\n\t}\n\t.medium {\n\t\tfont-family: sans-serif-medium;\n\t\tfont-weight: 500;\n\t}\n\t.bold {\n\t\tfont-weight: 700;\n\t}\n\t.light {\n\t\tfont-weight: 400;\n\t}\n\t.small {\n\t\tfont-size: 36;\n\t}\n\t.large {\n\t\tfont-size: 48;\n\t\tfont-weight: 500;\n\t\tline-height: 72;\n\t\tcolor: #000000;\n\t}\n\t.huge {\n\t\tfont-size: 54;\n\t\tline-height: 81;\n\t\tcolor: #000000;\n\t}\n\t.margin-text {\n\t\tmargin-right: 9;\n\t}\n</style>\n\n<script>\nexport default {\n  name: 'FmText',\n  props: {\n    value: String,\n    fontWeight: {\n      type: String,\n      default: 'normal'\n    },\n    size: {\n      type: String,\n      default: 'normal'\n    },\n    hasTextMargin: {\n      type: Boolean,\n      default: true\n    }\n  },\n  computed: {\n    textClz () {\n      const clz = ['text'];\n      if (this.hasTextMargin) {\n        clz.push('margin-text');\n      }\n      if (this.size !== 'normal') {\n        clz.push(`${this.size}`);\n      }\n      if (this.fontWeight !== 'normal') {\n        clz.push(`${this.fontWeight}`);\n      }\n      return clz;\n    }\n  },\n  created () {\n    this.$slots.default && (this.value = this.$slots.default[0].text);\n  }\n};\n</script>\n"],"sourceRoot":""}]);

// exports


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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    class: _vm.textClz,
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_vm._t("default"), (!_vm.$slots.default) ? [_vm._v(_vm._s(_vm.value))] : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-68596e9c", module.exports)
  }
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(50)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(52),
  /* template */
  __webpack_require__(56),
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"index.vue","sourceRoot":""}]);

// exports


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _map = __webpack_require__(53);

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//

// 引入he模块，使用它解决weex-template-compiler在编译阶段进行decode
var he = __webpack_require__(54);
var dom = weex.requireModule('dom');
exports.default = {
  name: 'FmIcon',
  props: {
    name: {
      default: 'wancheng',
      type: String
    },
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
      default: '#666666'
    }
  },
  data: function data() {
    return {
      Icon: _map2.default
    };
  },
  computed: {
    getIcon: function getIcon() {
      var Icon = this.Icon,
          name = this.name,
          value = this.value;

      return he.decode(value === '' ? Icon[name] : value);
    },
    mergeStyle: function mergeStyle() {
      var iconStyle = this.iconStyle;

      var style = { fontFamily: 'flymeicon', color: this.color };
      if (Object.prototype.toString.call(this.iconStyle).slice(8, -1).toLowerCase() !== 'object') {
        style.fontSize = iconStyle + 'px';
        style.height = iconStyle + 'px';
      } else {
        style = Object.assign({}, style, _extends({}, iconStyle));
      }
      return style;
    }
  },
  beforeCreate: function beforeCreate() {
    dom.addRule('fontFace', {
      'fontFamily': 'flymeicon',
      'src': "url('http://design.flyme.cn/weexui/assets/iconfont.ttf')"
    });
  }
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  biaoqing: '&#xe6a3;',
  bofang: '&#xe6a4;',
  bianji: '&#xe6a5;',
  bofang2: '&#xe6a7;',
  cebianlan: '&#xe6a7;',
  caijian: '&#xe6a8;',
  chakan: '&#xe6a9;',
  chexiao: '&#xe6aa;',
  chuangkouhua: '&#xe6ab;',
  daojishi: '&#xe6ac;',
  dianzan: '&#xe6ad;',
  chuangkouhua2: '&#xe6ae;',
  dianhua: '&#xe6af;',
  diannao: '&#xe6b0;',
  dingwei2: '&#xe6b1;',
  dingwei: '&#xe6b2;',
  dingyue: '&#xe6b3;',
  erweima: '&#xe6b4;',
  fanhui: '&#xe6b5;',
  fasong: '&#xe6b6;',
  fujian: '&#xe6b7;',
  fenlei: '&#xe6b8;',
  fanhui2: '&#xeb9;',
  fenxiang: '&#xe6ba;',
  fuzhi: '&#xe6bb;',
  gengduo: '&#xe6bc;',
  gouwuche: '&#xe6bd;',
  gongjuxiang: '&#xe6be;',
  gengduo2: '&#xe6bf;',
  guanbi: '&#xe6c0;',
  jishi: '&#xe6c1;',
  hongxin: '&#xe6c2;',
  jingyin: '&#xe6c3;',
  jianpan: '&#xe6c3;',
  jiesuo: '&#xe6c5;',
  jisuanqi: '&#xe6c36;',
  liangdu: '&#xe6c7;',
  lvjing: '&#xe6c8;',
  paixu: '&#xe6c9;',
  paihang: '&#xe6ca;',
  paizhao: '&#xe6cb;',
  pingmutoushe: '&#xe6cc;',
  riqi: '&#xe6cd;',
  shanchu: '&#xe6ce;',
  shangchaun: '&#xe6cf;',
  shangyishou: '&#xe6d0;',
  shezhi: '&#xe6d1;',
  shizhong: '&#xe6d2;',
  shezhi1: '&#xe6d3;',
  sousuo: '&#xe6d4;',
  shuqian: '&#xe6d5;',
  shuoming: '&#xe6d6;',
  shuaxin: '&#xe6d7;',
  suoding: '&#xe6d8;',
  shipin: '&#xe6d9;',
  tuichu: '&#xe6da;',
  tupian: '&#xe6db;',
  tianjia: '&#xe6dc;',
  tixing: '&#xe6dd;',
  wancheng: '&#xe6de;',
  wengao: '&#xe6df;',
  xiayishou: '&#xe6e0;',
  xinxi: '&#xe6e1;',
  xiazai: '&#xe6e2;',
  xingxing: '&#xe6e3;',
  xinxi1: '&#xe6e4;',
  xuanxiangliebiao: '&#xe6e5;',
  yidu: '&#xe6e6;',
  yinliang: '&#xe6e7;',
  yinbi: '&#xe6e8;',
  yuyin: '&#xe6e9;',
  zanting: '&#xe6ea;',
  yonghu: '&#xe6eb;',
  youjian: '&#xe6ec;',
  zhiding: '&#xe6ed;',
  chongzuo: '&#xe6ee;',
  zhuye: '&#xe6ef;',
  ziti: '&#xe6f0;',
  VPN: '&#xe6f1;',
  'Wi-Fi': '&#xe6f2;',
  zhuti: '&#xe6f3;',
  lanya: '&#xe6f4;',
  quanping: '&#xe6f5;',
  pingmufanzhuan: '&#xe6f6;',
  gouwu: '&#xe6f7;',
  saomiao: '&#xe6f8;'
};

/***/ }),
/* 54 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(55)(module)))

/***/ }),
/* 55 */
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.mergeStyle))
  }, [_vm._v(_vm._s(_vm.getIcon) + "\n")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-77aa90fe", module.exports)
  }
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(58);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(59)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(61),
  /* template */
  __webpack_require__(62),
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.slider-wrap[data-v-18ede8e6] {\n  padding-right: 22.5px;\n  padding-left: 22.5px;\n}\n.level-text-wrap[data-v-18ede8e6] {\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: -21.6px;\n}\n.level-text[data-v-18ede8e6] {\n  flex: 1;\n  font-size: 42px;\n  padding-top: 7.2px;\n  padding-bottom: 7.2px;\n  text-align: center;\n}\n.all[data-v-18ede8e6] {\n  height: 9px;\n  margin-top: 43.2px;\n  background-color: #e6e6e6;\n}\n.selected[data-v-18ede8e6] {\n  margin-top: -9px;\n  height: 9px;\n  background-color: #198ded;\n}\n.dot-wrap[data-v-18ede8e6] {\n  height: 86.4px;\n  width: 116.4px;\n  margin-top: -47.52px;\n  margin-left: -57.6px;\n  align-items: center;\n  justify-content: center;\n}\n.dot[data-v-18ede8e6] {\n  height: 45px;\n  width: 45px;\n  background-color: #198ded;\n  border-radius: 43.2px;\n}\n.num[data-v-18ede8e6] {\n  width: 78px;\n  height: 78px;\n  margin-left: -39px;\n  border-radius: 79.2px;\n  background-color: #198ded;\n  color: #ffffff;\n  font-size: 42px;\n  font-weight: 700;\n  text-align: center;\n  line-height: 78px;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-slider/index.vue?05ecf7de"],"names":[],"mappings":";AAeA;EACA,sBAAA;EACA,qBAAA;CACA;AACA;EACA,oBAAA;EACA,oBAAA;EACA,wBAAA;EACA,uBAAA;CACA;AACA;EACA,QAAA;EACA,gBAAA;EACA,mBAAA;EACA,sBAAA;EACA,mBAAA;CACA;AACA;EACA,YAAA;EACA,mBAAA;EACA,0BAAA;CACA;AACA;EACA,iBAAA;EACA,YAAA;EACA,0BAAA;CACA;AACA;EACA,eAAA;EACA,eAAA;EACA,qBAAA;EACA,qBAAA;EACA,oBAAA;EACA,wBAAA;CACA;AACA;EACA,aAAA;EACA,YAAA;EACA,0BAAA;EACA,sBAAA;CACA;AACA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,0BAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;EACA,kBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n  <div class=\"slider-wrap\">\n    <div v-if=\"!!levelTexts && this.per\" class=\"level-text-wrap\" :style=\"textStyle\">\n      <text class=\"level-text\" v-for=\"(text, idx) in levelTexts\" @click=\"levelClick(idx)\" :key=\"idx\">{{text}}</text>\n    </div>\n    <text v-else-if=\"showProgress\" class=\"num\" :style=\"progressStyle\">{{progressText}}</text>\n    <div class=\"all\" ref=\"bg\"></div>\n    <div class=\"selected\" :style=\"selStyle\"></div>\n    <div class=\"dot-wrap\" :style=\"dotStyle\" @touchmove=\"move\" @touchstart=\"start\" @touchend=\"end\">\n      <div class=\"dot\"></div>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n  .slider-wrap {\n    padding-right: 22.5px;\n    padding-left: 22.5px;\n  }\n  .level-text-wrap {\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: -21.6px;\n  }\n  .level-text {\n    flex: 1;\n    font-size: 42px;\n    padding-top: 7.2px;\n    padding-bottom: 7.2px;\n    text-align: center;\n  }\n  .all {\n    height: 9px;\n    margin-top: 43.2px;\n    background-color: #e6e6e6;\n  }\n  .selected {\n    margin-top: -9px;\n    height: 9px;\n    background-color: #198ded;\n  }\n  .dot-wrap {\n    height: 86.4px;\n    width: 116.4px;\n    margin-top: -47.52px;\n    margin-left: -57.6px;\n    align-items: center;\n    justify-content: center;\n  }\n  .dot {\n    height: 45px;\n    width: 45px;\n    background-color: #198ded;\n    border-radius: 43.2px;\n  }\n  .num {\n    width: 78px;\n    height: 78px;\n    margin-left: -39px;\n    border-radius: 79.2px;\n    background-color: #198ded;\n    color: #ffffff;\n    font-size: 42px;\n    font-weight: 700;\n    text-align: center;\n    line-height: 78px;\n  }\n</style>\n\n<script>\nconst dom = weex.requireModule('dom');\n\nexport default {\n  name: 'FmSlider',\n  data () {\n    return {\n      transX: 0,\n      startX: 0,\n      max: 0,\n      per: 0,\n      comparePer: 0,\n      progressOpacity: 0,\n      progressText: null,\n      levelAlias: 0\n    };\n  },\n\n  props: {\n    level: [String, Number],\n    levelTexts: Array,\n    showProgress: Boolean,\n    vertical: Boolean,\n    value: {\n      type: [String, Number],\n      default: 0\n    }\n  },\n\n  computed: {\n    textStyle () {\n      return {\n        width: `${this.max + this.per}px`,\n        'margin-left': `${-this.per / 2}px`\n      };\n    },\n    dotStyle () {\n      return {\n        transform: `translateX(${this.transX}px)`\n      };\n    },\n    selStyle () {\n      return {\n        width: `${this.transX}px`\n      };\n    },\n    progressStyle () {\n      return {\n        transform: `translateX(${this.transX}px)`,\n        opacity: this.progressOpacity\n      };\n    }\n  },\n\n  created () {\n    this.screen = 'screenY';// this.vertical ? 'screenY' : 'screenX'\n  },\n\n  mounted () {\n    setTimeout(() => {\n      dom.getComponentRect(this.$refs.bg, opt => {\n        this.max = opt.size.width;\n\n        if (this.levelTexts) {\n          this.levelAlias = Math.max(this.levelTexts.length - 1, 0);\n        } else {\n          this.levelAlias = this.level;\n        }\n\n        if (this.levelAlias && this.levelAlias > 0) {\n          this.per = this.max / this.levelAlias;\n          this.comparePer = this.per / 2;\n        }\n\n        this.transX = this.per ? (this.per * this.value) : (this.max * this.value / 100);\n      });\n    }, 100);\n  },\n\n  methods: {\n    levelClick (idx) {\n      this.transX = Math.min(this.per * idx, this.max);\n      this.end();\n    },\n    start (event) {\n      this.startX = event.changedTouches[0].screenX;\n      this.progressOpacity = 1;\n    },\n    move (event) {\n      const x = +event.changedTouches[0].screenX;\n      const sub = x - this.startX;\n      let target;\n\n      if (this.per) {\n        if (Math.abs(sub) >= this.comparePer) {\n          target = this.transX + (sub > 0 ? this.per : -this.per);\n          this.startX = target;\n        }\n      } else {\n        target = this.transX + sub;\n        this.startX = x;\n      }\n\n      if (target !== undefined) {\n        this.transX = Math.min(Math.max(target, 0), this.max);\n      }\n\n      this.progressText = this.per\n        ? Math.round(this.transX / this.per)\n        : Math.floor(this.transX / this.max * 100);\n    },\n    end (event) {\n      this.progressOpacity = 0;\n      this.$emit('selected', {\n        rate: this.transX / this.max,\n        level: this.per ? Math.round(this.transX / this.per) : 0\n      });\n    }\n  }\n};\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 61 */
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
    this.screen = 'screenY'; // this.vertical ? 'screenY' : 'screenX'
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
/* 62 */
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
      key: idx,
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(64);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(65)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(67),
  /* template */
  __webpack_require__(68),
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.fm-btn-wrap[data-v-45eab412] {\n  height: 72;\n  align-items: center;\n  flex-direction: row;\n  border-radius: 72;\n}\n.fm-btn[data-v-45eab412] {\n  padding-left: 36;\n  padding-right: 36;\n  line-height: 72;\n  font-size: 36;\n  font-weight: 700;\n  text-align: center;\n  min-width: 144;\n  max-width: 300;\n  font-family: sans-serif-medium;\n  font-weight: 500;\n}\n.fm-btn-max-padding[data-v-45eab412] {\n  padding-left: 24;\n  padding-right: 24;\n}\n.fm-btn-freeSize[data-v-45eab412] {\n  max-width: 1080;\n}\n.fm-btn-show[data-v-45eab412] {\n}\n.fm-btn-hollow[data-v-45eab412] {\n  border-width: 4;\n  line-height: 64;\n  border-style: solid;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-button/index.vue?ea0e1e36"],"names":[],"mappings":";AAOA;EACA,WAAA;EACA,oBAAA;EACA,oBAAA;EACA,kBAAA;CACA;AACA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,cAAA;EACA,iBAAA;EACA,mBAAA;EACA,eAAA;EACA,eAAA;EACA,+BAAA;EACA,iBAAA;CACA;AACA;EACA,iBAAA;EACA,kBAAA;CACA;AACA;EACA,gBAAA;CACA;AACA;CAEA;AACA;EACA,gBAAA;EACA,gBAAA;EACA,oBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n  <div class=\"fm-btn-wrap\" :style=\"btnStyle\" @click=\"btnClick\">\n    <text ref=\"text\" class=\"fm-btn\" :class=\"btnClz\" :style=\"textStyle\">{{text}}</text>\n  </div>\n</template>\n\n<style scoped>\n  .fm-btn-wrap {\n    height: 72;\n    align-items: center;\n    flex-direction: row;\n    border-radius: 72;\n  }\n  .fm-btn {\n    padding-left: 36;\n    padding-right: 36;\n    line-height: 72;\n    font-size: 36;\n    font-weight: 700;\n    text-align: center;\n    min-width: 144;\n    max-width: 300;\n    font-family: sans-serif-medium;\n    font-weight: 500;\n  }\n  .fm-btn-max-padding {\n    padding-left: 24;\n    padding-right: 24;\n  }\n  .fm-btn-freeSize {\n    max-width: 1080;\n  }\n  .fm-btn-show {\n\n  }\n  .fm-btn-hollow {\n    border-width: 4;\n    line-height: 64;\n    border-style: solid;\n  }\n</style>\n\n<script>\nconst dis_color = '#cccccc';\nconst transparent = 'transparent';\nconst dom = weex.requireModule('dom');\n\nexport default {\n  name: 'FmButton',\n  data () {\n    return {\n      max: false\n    };\n  },\n  props: {\n    text: String,\n    bgColor: {\n      type: String,\n      default: '#198ded'\n    },\n    color: {\n      type: String,\n      default: '#ffffff'\n    },\n    disabled: Boolean,\n    freeSize: {\n      type: Boolean,\n      default: true\n    }\n  },\n  computed: {\n    btnClz () {\n      const clz = [];\n      if (this.max) {\n        clz.push('fm-btn-max-padding');\n      }\n      if (this.bgColor === transparent) {\n        clz.push('fm-btn-hollow');\n      }\n      if (this.freeSize) {\n        clz.push('fm-btn-freeSize');\n      }\n      return clz;\n    },\n    btnStyle () {\n      const sty = {};\n      if (this.bgColor !== transparent) {\n        sty.backgroundColor = this.bgColor;\n      }\n      if (this.disabled) {\n        sty.backgroundColor = dis_color;\n      }\n      return sty;\n    },\n    textStyle () {\n      const sty = {};\n      if (this.color) {\n        sty.color = this.color;\n        if (this.bgColor === transparent) {\n          sty.borderColor = this.color;\n        }\n      }\n      return sty;\n    }\n  },\n  methods: {\n    btnClick (evt) {\n      if (!this.disabled) {\n        this.$emit('buttonClicked', evt);\n      }\n    }\n  },\n  mounted () {\n    setTimeout(() => {\n      dom.getComponentRect(this.$refs.text, option => {\n        if (option.size.width >= 240) {\n          this.max = true;\n        }\n      });\n    }, 50);\n  }\n};\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 67 */
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
      if (this.bgColor === transparent) {
        clz.push('fm-btn-hollow');
      }
      if (this.freeSize) {
        clz.push('fm-btn-freeSize');
      }
      return clz;
    },
    btnStyle: function btnStyle() {
      var sty = {};
      if (this.bgColor !== transparent) {
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
        if (this.bgColor === transparent) {
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fm-btn-wrap",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.btnStyle)),
    on: {
      "click": _vm.btnClick
    }
  }, [_c('text', {
    ref: "text",
    staticClass: "fm-btn",
    class: _vm.btnClz,
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.textStyle))
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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(70);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(71)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(73),
  /* template */
  __webpack_require__(74),
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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(72);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("8d06ff64", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-10b8a20a\",\"scoped\":true,\"hasInlineConfig\":false}!./input.css", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-10b8a20a\",\"scoped\":true,\"hasInlineConfig\":false}!./input.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n/** 默认主题色 blue **/\n.fm-wrapper[data-v-10b8a20a] {\n  padding-top: 72;\n  padding-right: 48;\n  padding-left: 48;\n}\n.fm-textarea[data-v-10b8a20a] {\n  padding-bottom: 27;\n  padding-left: 24;\n  border-bottom-style: solid;\n  border-bottom-width: 3;\n  border-bottom-color: #e6e6e6;\n  font-size: 48;\n  color: #000000;\n  placeholder-color: #dddddd;\n  caret-color: #198ded;\n}\n.fm-input-wrap[data-v-10b8a20a] {\n  position: relative;\n}\n.delete[data-v-10b8a20a] {\n  position: absolute;\n  top: 69;\n  right: 72;\n  width: 60;\n  height: 60;\n  padding: 6;\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 30;\n}\n.visible[data-v-10b8a20a] {\n  position: absolute;\n  top: 63;\n  right: 72;\n  width: 72;\n  height: 72;\n}\n.fm-textarea[data-v-10b8a20a]:focus {\n  border-bottom-color: #198ded;\n}\n.fm-textarea-error[data-v-10b8a20a] {\n  border-bottom-color: #df2b18;\n}\n.error-msg[data-v-10b8a20a] {\n  font-size: 36;\n  color: #df2b18;\n  margin-left: 24;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/lib/theme-paint/lib/input.css"],"names":[],"mappings":";AAAA,iBAAiB;AACjB,kBAAkB;AAClB;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;CAAE;AAErB;EACE,mBAAmB;EACnB,iBAAiB;EACjB,2BAA2B;EAC3B,uBAAuB;EACvB,6BAA6B;EAC7B,cAAc;EACd,eAAe;EACf,2BAA2B;EAC3B,qBAAqB;CAAE;AAEzB;EACE,mBAAmB;CAAE;AAEvB;EACE,mBAAmB;EACnB,QAAQ;EACR,UAAU;EACV,UAAU;EACV,WAAW;EACX,WAAW;EACX,qCAAqC;EACrC,kBAAkB;CAAE;AAEtB;EACE,mBAAmB;EACnB,QAAQ;EACR,UAAU;EACV,UAAU;EACV,WAAW;CAAE;AAEf;EACE,6BAA6B;CAAE;AAEjC;EACE,6BAA6B;CAAE;AAEjC;EACE,cAAc;EACd,eAAe;EACf,gBAAgB;CAAE","file":"input.css","sourcesContent":["@charset \"UTF-8\";\n/** 默认主题色 blue **/\n.fm-wrapper {\n  padding-top: 72;\n  padding-right: 48;\n  padding-left: 48; }\n\n.fm-textarea {\n  padding-bottom: 27;\n  padding-left: 24;\n  border-bottom-style: solid;\n  border-bottom-width: 3;\n  border-bottom-color: #e6e6e6;\n  font-size: 48;\n  color: #000000;\n  placeholder-color: #dddddd;\n  caret-color: #198ded; }\n\n.fm-input-wrap {\n  position: relative; }\n\n.delete {\n  position: absolute;\n  top: 69;\n  right: 72;\n  width: 60;\n  height: 60;\n  padding: 6;\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 30; }\n\n.visible {\n  position: absolute;\n  top: 63;\n  right: 72;\n  width: 72;\n  height: 72; }\n\n.fm-textarea:focus {\n  border-bottom-color: #198ded; }\n\n.fm-textarea-error {\n  border-bottom-color: #df2b18; }\n\n.error-msg {\n  font-size: 36;\n  color: #df2b18;\n  margin-left: 24; }\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fmIcon = __webpack_require__(3);

var _fmIcon2 = _interopRequireDefault(_fmIcon);

var _locale = __webpack_require__(5);

var _locale2 = _interopRequireDefault(_locale);

var _locale3 = __webpack_require__(4);

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
      return this.type === 'password' ? 'chakan;' : 'yinbi';
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fm-wrapper",
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
    style: (_vm.$processStyle(_vm.inputStyle)),
    attrs: {
      "type": _vm.type,
      "maxlength": _vm.maxlength,
      "placeholder": _vm.placeholder,
      "autofocus": _vm.autofocus,
      "disabled": _vm.disabled,
      "return-key-type": _vm.returnKeyType,
      "nightMode": _vm.nightMode
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
  }), _vm._v(" "), (_vm.delShow) ? _c('fm-icon', {
    staticClass: "delete",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "name": "guanbi",
      "icon-style": 48,
      "color": "#fff"
    },
    on: {
      "click": _vm.delClick
    }
  }) : _vm._e(), _vm._v(" "), (_vm.visibleShow) ? _c('fm-icon', {
    staticClass: "visible",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "name": _vm.visibleValue,
      "icon-style": 72,
      "color": "#666"
    },
    on: {
      "click": _vm.toggleVisible
    }
  }) : _vm._e(), _vm._v(" "), (_vm.hasError) ? _c('text', {
    staticClass: "error-msg",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_vm._v(_vm._s(_vm.inputErrorMessage))]) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-10b8a20a", module.exports)
  }
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(76);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(77)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(79),
  /* template */
  __webpack_require__(80),
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.tip-wrap[data-v-9924f606] {\n  flex-direction: row;\n  height: 120px;\n  padding-top: 21.6px;\n}\n.arrow[data-v-9924f606] {\n  position: absolute;\n  top: 10.8px;\n  width: 21.6px;\n  height: 21.6px;\n  transform: rotate(45deg);\n}\n.content-wrap[data-v-9924f606] {\n  flex-direction: row;\n  align-items: center;\n  padding-top: 27px;\n  padding-bottom: 27px;\n  padding-left: 30px;\n  border-radius: 6px;\n}\n.content[data-v-9924f606] {\n  height: 51px;\n  max-width: 678px;\n  font-size: 42px;\n  color: #ffffff;\n}\n.split[data-v-9924f606] {\n  width: 3px;\n  height: 42px;\n  margin-left: 27px;\n  background-color: #ffffff;\n  opacity: .4;\n}\n.close[data-v-9924f606] {\n  color: #ffffff;\n  font-size: 54px;\n  margin-top: 9px;\n  margin-left: 30px;\n  margin-right: 30px;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-tips/index.vue?cb4e18ba"],"names":[],"mappings":";AAaA;EACA,oBAAA;EACA,cAAA;EACA,oBAAA;CACA;AACA;EACA,mBAAA;EACA,YAAA;EACA,cAAA;EACA,eAAA;EACA,yBAAA;CACA;AACA;EACA,oBAAA;EACA,oBAAA;EACA,kBAAA;EACA,qBAAA;EACA,mBAAA;EACA,mBAAA;CACA;AACA;EACA,aAAA;EACA,iBAAA;EACA,gBAAA;EACA,eAAA;CACA;AACA;EACA,WAAA;EACA,aAAA;EACA,kBAAA;EACA,0BAAA;EACA,YAAA;CACA;AACA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n  <div v-if=\"show\" class=\"tip-wrap\" :style=\"wrapStyle\">\n    <div class=\"content-wrap\" :style=\"background\">\n      <slot></slot>\n      <text class=\"content\">{{message}}</text>\n      <text class=\"split\"></text>\n      <fm-icon class=\"close\" @click=\"close\" name=\"guanbi\" />\n    </div>\n    <text class=\"arrow\" :style=\"arrowStyle\"></text>\n  </div>\n</template>\n\n<style scoped>\n  .tip-wrap {\n    flex-direction: row;\n    height: 120px;\n    padding-top: 21.6px;\n  }\n  .arrow {\n    position: absolute;\n    top: 10.8px;\n    width: 21.6px;\n    height: 21.6px;\n    transform: rotate(45deg);\n  }\n  .content-wrap {\n    flex-direction: row;\n    align-items: center;\n    padding-top: 27px;\n    padding-bottom: 27px;\n    padding-left: 30px;\n    border-radius: 6px;\n  }\n  .content {\n    height: 51px;\n    max-width: 678px;\n    font-size: 42px;\n    color: #ffffff;\n  }\n  .split {\n    width: 3px;\n    height: 42px;\n    margin-left: 27px;\n    background-color: #ffffff;\n    opacity: .4;\n  }\n  .close {\n    color: #ffffff;\n    font-size: 54px;\n    margin-top: 9px;\n    margin-left: 30px;\n    margin-right: 30px;\n  }\n</style>\n\n<script>\nimport FmIcon from '../fm-icon';\nexport default {\n  name: 'FmTips',\n  data () {\n    return {\n      show: true\n    };\n  },\n  components: { FmIcon },\n  computed: {\n    background () {\n      return {\n        backgroundColor: this.bgColor\n      };\n    },\n    wrapStyle () {\n      return {\n        'justify-content': this.right ? 'flex-end' : 'flex-start'\n      };\n    },\n    arrowStyle () {\n      const sty = {\n        backgroundColor: this.bgColor\n      };\n      if (this.right) {\n        sty.right = '18px';\n      } else {\n        sty.left = '18px';\n      }\n\n      return sty;\n    }\n  },\n\n  props: {\n    message: String,\n    bgColor: {\n      type: String,\n      default: '#198ded'\n    },\n    right: Boolean\n  },\n\n  methods: {\n    close () {\n      this.show = false;\n      this.$emit('close');\n    }\n  }\n};\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fmIcon = __webpack_require__(3);

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

/***/ }),
/* 80 */
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
      "name": "guanbi"
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
/* 81 */
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(83)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(85),
  /* template */
  __webpack_require__(89),
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
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.fm-rich-text[data-v-a8d59aa2] {\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  flex-direction: row;\n  flex-shrink: 1;\n}\n.default-text[data-v-a8d59aa2] {\n  color: #A5A5A5;\n  font-size: 36px;\n  line-height: 48px;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-rich-text/index.vue?dc6bd536"],"names":[],"mappings":";AAiCA;EACA,4BAAA;EACA,oBAAA;EACA,gBAAA;EACA,oBAAA;EACA,eAAA;CACA;AAEA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n  <div>\n    <div class=\"fm-rich-text\" v-if=\"isNotEmptyArray\">\n      <div v-for=\"(v, idx) in configList\" :key=\"idx\">\n        <fm-text v-if=\"v.type=='text' && v.text\"\n                            :value=\"v.text\"\n                            :has-text-margin=\"hasTextMargin\"></fm-text>\n\n        <fm-rich-text-link v-if=\"v.type=='link' && v.href && v.text\"\n                            :link-value=\"v.text\"\n                            :link-style=\"v.style\"\n                            :link-href=\"v.href\"\n                            :has-text-margin=\"hasTextMargin\"\n                            @fmRichTextLinkClick=\"linkBeClick\"></fm-rich-text-link>\n\n        <fm-icon v-if=\"v.type=='icon'\"\n                            :color=\"v.color\"\n                            :name=\"v.value\"\n                            :iconStyle=\"v.style\"></fm-icon>\n\n        <fm-tag v-if=\"v.type=='tag'\"\n                           :type=\"v.tagType\"\n                           :size=\"v.size\"\n                           :value=\"v.value\"\n                           :color=\"v.color\"\n                           :fontColor=\"v.fontColor\"></fm-tag>\n      </div>\n    </div>\n    <fm-text :value=\"configList\" v-if=\"isString\"></fm-text>\n  </div>\n</template>\n\n<style scoped>\n  .fm-rich-text {\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: wrap;\n    flex-direction: row;\n    flex-shrink: 1;\n  }\n\n  .default-text {\n    color: #A5A5A5;\n    font-size: 36px;\n    line-height: 48px;\n  }\n</style>\n\n<script>\nimport Utils from './utils';\nimport FmText from '../fm-text';\nimport FmIcon from '../fm-icon';\nimport FmTag from '../fm-tag';\nimport FmRichTextLink from './fm-rich-text-link.vue';\nexport default {\n  name: 'FmRichText',\n  components: {\n    FmText, FmIcon, FmTag, FmRichTextLink\n  },\n  props: {\n    configList: {\n      type: [Array, String],\n      default: function () {\n        return [];\n      }\n    },\n    hasTextMargin: {\n      type: Boolean,\n      default: true\n    }\n  },\n  data: () => ({}),\n  computed: {\n    isNotEmptyArray () {\n      return Utils.isNonEmptyArray(this.configList);\n    },\n    isString () {\n      return Utils.isString(this.configList);\n    }\n  },\n  methods: {\n    linkBeClick (obj) {\n      this.$emit('linkBeClick', obj);\n    }\n  }\n};\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(14);

var _utils2 = _interopRequireDefault(_utils);

var _fmText = __webpack_require__(6);

var _fmText2 = _interopRequireDefault(_fmText);

var _fmIcon = __webpack_require__(3);

var _fmIcon2 = _interopRequireDefault(_fmIcon);

var _fmTag = __webpack_require__(8);

var _fmTag2 = _interopRequireDefault(_fmTag);

var _fmRichTextLink = __webpack_require__(86);

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

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(87),
  /* template */
  __webpack_require__(88),
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
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fmText = __webpack_require__(6);

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

/***/ }),
/* 88 */
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
      "value": _vm.linkValue,
      "has-text-margin": _vm.hasTextMargin
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.isNotEmptyArray) ? _c('div', {
    staticClass: "fm-rich-text",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, _vm._l((_vm.configList), function(v, idx) {
    return _c('div', {
      key: idx,
      staticStyle: _vm.$processStyle(undefined),
      style: (_vm.$processStyle(undefined))
    }, [(v.type == 'text' && v.text) ? _c('fm-text', {
      staticStyle: _vm.$processStyle(undefined),
      style: (_vm.$processStyle(undefined)),
      attrs: {
        "value": v.text,
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
        "name": v.value,
        "iconStyle": v.style
      }
    }) : _vm._e(), _vm._v(" "), (v.type == 'tag') ? _c('fm-tag', {
      staticStyle: _vm.$processStyle(undefined),
      style: (_vm.$processStyle(undefined)),
      attrs: {
        "type": v.tagType,
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
      "value": _vm.configList
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
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(91);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(92)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(94),
  /* template */
  __webpack_require__(95),
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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
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
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.fm-special-rich-text[data-v-584ad4ca] {\n  position: relative;\n}\n.tag-div[data-v-584ad4ca] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: #A5A5A5;\n  font-size: 36px;\n  line-height: 48px;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-special-rich-text/index.vue?8fdb50e6"],"names":[],"mappings":";AAmBA;EACA,mBAAA;CACA;AAEA;EACA,mBAAA;EACA,OAAA;EACA,QAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n  <div class=\"fm-special-rich-text\">\n    <div class=\"tag-div\"\n         :style=\"{top:top+'px'}\">\n      <fm-icon v-if=\"newList[0].type == 'icon' && newList[0].value\"\n                          :name=\"newList[0].value\"\n                          :iconStyle=\"newList[0].style\"></fm-icon>\n      <fm-tag v-if=\"newList[0].type=='tag'\"\n                          :type=\"newList[0].tagType\"\n                          :size=\"newList[0].size\"\n                          :value=\"newList[0].value\"\n                          :color=\"newList[0].color\"\n                          :fontColor=\"newList[0].fontColor\"></fm-tag>\n    </div>\n    <fm-text :value=\"newList[1].value\" v-if=\"newList[1].value\"></fm-text>\n  </div>\n</template>\n\n<style scoped>\n  .fm-special-rich-text {\n    position: relative;\n  }\n\n  .tag-div {\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: #A5A5A5;\n    font-size: 36px;\n    line-height: 48px;\n  }\n</style>\n\n<script>\nimport Utils from '../fm-rich-text/utils';\nimport FmText from '../fm-text';\nimport FmIcon from '../fm-icon';\nimport FmTag from '../fm-tag';\nexport default {\n  name: 'FmSpecialRichText',\n  components: {\n    FmText, FmIcon, FmTag\n  },\n  props: {\n    configList: {\n      type: [Array, String],\n      default: () => ({})\n    }\n  },\n  computed: {\n    newList () {\n      const { configList } = this;\n      if (Utils.isNonEmptyArray(configList) && configList.length === 2) {\n        let r1 = configList[0];\n        let r2 = configList[1];\n        const iconStyle = r1.style;\n        const textStyle = r2.style;\n        let style = {};\n        let fontSize = 36;\n        const tagWidth = iconStyle && iconStyle.width ? iconStyle.width : 36;\n\n        if (textStyle && textStyle.fontSize) {\n          fontSize = textStyle.fontSize;\n          style = {\n            fontSize: textStyle.fontSize,\n            lineHeight: textStyle.fontSize * 1.4\n          };\n        }\n\n        if (textStyle && textStyle.color) {\n          style = {\n            ...style,\n            color: textStyle.color\n          };\n        }\n\n        if (r1.type === 'tag' && iconStyle && iconStyle.width) {\n          r1 = {\n            ...r1,\n            style: { ...iconStyle, width: null }\n          };\n        }\n        const newValue = r2.value ? new Array(Math.ceil(tagWidth / fontSize) + 1).join('   ') + `  ${r2.value}` : '';\n        r2 = {\n          ...r2,\n          style,\n          value: newValue\n        };\n        return [r1, r2];\n      } else {\n        return [];\n      }\n    },\n    top () {\n      const { configList } = this;\n      if (configList[0].type === 'tag') return 0;\n      if (Utils.isNonEmptyArray(configList) && configList.length === 2) {\n        const iconStyle = configList[0].style;\n        const textStyle = configList[1].style;\n        let fontSize = 36;\n        const tagHeight = iconStyle && iconStyle.height ? iconStyle.height : 39;\n        if (textStyle && textStyle.fontSize) {\n          fontSize = textStyle.fontSize;\n        }\n        return Math.ceil((fontSize * 1.3 - tagHeight) / 2);\n      } else {\n        return 0;\n      }\n    }\n  }\n};\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 94 */
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

var _utils = __webpack_require__(14);

var _utils2 = _interopRequireDefault(_utils);

var _fmText = __webpack_require__(6);

var _fmText2 = _interopRequireDefault(_fmText);

var _fmIcon = __webpack_require__(3);

var _fmIcon2 = _interopRequireDefault(_fmIcon);

var _fmTag = __webpack_require__(8);

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
/* 95 */
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
      "name": _vm.newList[0].value,
      "iconStyle": _vm.newList[0].style
    }
  }) : _vm._e(), _vm._v(" "), (_vm.newList[0].type == 'tag') ? _c('fm-tag', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "type": _vm.newList[0].tagType,
      "size": _vm.newList[0].size,
      "value": _vm.newList[0].value,
      "color": _vm.newList[0].color,
      "fontColor": _vm.newList[0].fontColor
    }
  }) : _vm._e()], 1), _vm._v(" "), (_vm.newList[1].value) ? _c('fm-text', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "value": _vm.newList[1].value
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
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(97);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(98)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(100),
  /* template */
  __webpack_require__(101),
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
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(99);
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
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.container[data-v-52ae49d0] {\n  position: relative;\n}\n.text[data-v-52ae49d0] {\n  font-family: \"Source Han Sans CN\", Roboto, sans-serif;\n  color: #999999;\n}\n.text_small[data-v-52ae49d0] {\n  font-size: 36px;\n  line-height: 42px;\n}\n.text_large[data-v-52ae49d0] {\n  font-family: sans-serif-medium;\n  font-weight: 500;\n  font-size: 48px;\n  font-weight: 500;\n  line-height: 72px;\n}\n.text_huge[data-v-52ae49d0] {\n  font-family: sans-serif-medium;\n  font-weight: 500;\n  font-size: 54px;\n  line-height: 78px;\n}\n.more[data-v-52ae49d0] {\n  position: absolute;\n  right: 18px;\n  bottom: 0;\n  font-family: sans-serif-medium;\n  font-weight: 500;\n}\n.test[data-v-52ae49d0] {\n  flex-direction: row;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-foldable-text/index.vue?30e80c3a"],"names":[],"mappings":";AAUA;EACA,mBAAA;CACA;AACA;EACA,sDAAA;EACA,eAAA;CACA;AACA;EACA,gBAAA;EACA,kBAAA;CACA;AACA;EACA,+BAAA;EACA,iBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;CACA;AACA;EACA,+BAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;CACA;AACA;EACA,mBAAA;EACA,YAAA;EACA,UAAA;EACA,+BAAA;EACA,iBAAA;CACA;AACA;EACA,oBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n  <div class=\"wrapper\" @click=\"fold\">\n    <div class=\"container\" ref=\"plane\" :style=\"planeStyle\">\n      <text :class=\"textClz\" ref=\"text\" :style=\"textStyle\">{{ getText }}</text>\n      <text class=\"more\" v-if=\"foldable && folded\" ref=\"more\" :style=\"moreStyle\">{{ tipValue }}</text>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n  .container {\n    position: relative;\n  }\n  .text {\n    font-family: \"Source Han Sans CN\", Roboto, sans-serif;\n    color: #999999;\n  }\n  .text_small {\n    font-size: 36px;\n    line-height: 42px;\n  }\n  .text_large {\n    font-family: sans-serif-medium;\n    font-weight: 500;\n    font-size: 48px;\n    font-weight: 500;\n    line-height: 72px;\n  }\n  .text_huge {\n    font-family: sans-serif-medium;\n    font-weight: 500;\n    font-size: 54px;\n    line-height: 78px;\n  }\n  .more {\n    position: absolute;\n    right: 18px;\n    bottom: 0;\n    font-family: sans-serif-medium;\n    font-weight: 500;\n  }\n  .test {\n    flex-direction: row;\n  }\n</style>\n\n<script>\nimport Locale from 'weex-flymeui/lib/mixins/locale';\nimport { t } from 'weex-flymeui/lib/locale';\n\nexport default {\n  name: 'FmFoldableText',\n  mixins: [Locale],\n  data () {\n    return {\n      expandHeight: '',\n      unexpandHeight: '',\n      animationHeight: '',\n      foldText: '',\n      foldable: true\n    };\n  },\n  props: {\n    width: {\n      type: Number,\n      default: 1020\n    },\n    text: {\n      type: String,\n      default: ''\n    },\n    lines: {\n      type: Number,\n      default: 2\n    },\n    folded: {\n      type: Boolean,\n      default: true\n    },\n    small: {\n      type: Boolean,\n      default: true\n    },\n    large: Boolean,\n    huge: Boolean,\n    textStyle: Object,\n    tipStyle: Object,\n    tipValue: {\n      type: String,\n      default () {\n        return t('el.foldabletext.more');\n      }\n    }\n  },\n  mounted () {\n    if (this.foldText === '') {\n      const { textStyle } = this;\n      const fontSize = (textStyle && textStyle.fontSize) ? textStyle.fontSize : this.large ? 48 : this.huge ? 54 : 36;\n      // 计算折叠后的文本\n      const size1 = fontSize + 36 * 0.04; // 汉字\n      const size2 = fontSize * 0.56; // 英文\n      const size3 = fontSize * 0.556; // 数字\n      const size4 = fontSize * 0.80; // 全角\n      const size5 = fontSize * 0.2; // 半角\n      let tSize = 0;\n      let tmpStr = '';\n      const hideWidth = this.width * this.lines + fontSize; // 不显示“更多”情况下所能容纳最大的字体宽度\n      const maxWith = this.width * this.lines - size1 * this.tipValue.length; // 显示“更多”情况下所能容纳最大的字体宽度\n      for (const c of this.text) {\n        if (/^[\\u4e00-\\u9fa5]/.test(c)) {\n          // 汉字\n          tSize += size1;\n        } else if (/^[a-zA-Z]/.test(c)) {\n          // 英文\n          tSize += size2;\n        } else if (/^[0-9]/.test(c)) {\n          // 数字\n          tSize += size3;\n        } else if (/^[·《》，。？、：；“”‘’——【】]/.test(c)) {\n          // 全角\n          tSize += size4;\n        } else if (/^[`~!@#\\$%\\^&\\*\\(\\)_\\-\\+=\\{\\}\\[\\]|\\\\:;\"'<>,.\\?\\/\\s]/.test(c)) {\n          // 半角\n          tSize += size5;\n        } else {\n          // 其他\n          tSize += size1;\n        }\n        if (tSize >= maxWith) {\n          if (tSize >= hideWidth) {\n            tmpStr += '..';\n            break;\n          }\n        } else {\n          tmpStr += c;\n        }\n      }\n      // 文字不超过范围 不折叠\n      (tSize < hideWidth) && (this.foldable = false) && (this.folded = false);\n      this.foldText = tmpStr;\n    }\n  },\n  computed: {\n    getText () {\n      return this.folded && this.foldable ? this.foldText : this.text;\n    },\n    planeStyle () {\n      return {\n        width: this.width\n      };\n    },\n    moreStyle () {\n      return {\n        fontSize: this.large ? 48 : this.huge ? 54 : 36,\n        lineHeight: this.large ? 72 : this.huge ? 78 : 42,\n        color: '#198ded',\n        fontWeight: '600',\n        ...this.tipStyle\n      };\n    },\n    textClz () {\n      const clz = ['text', 'text_small'];\n      if (this.large) {\n        clz.push('text_large');\n      } else if (this.huge) {\n        clz.push('text_huge');\n      }\n      return clz;\n    }\n  },\n  methods: {\n    fold () {\n      this.foldable && (this.folded = !this.folded);\n    }\n  }\n};\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 100 */
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

var _locale = __webpack_require__(5);

var _locale2 = _interopRequireDefault(_locale);

var _locale3 = __webpack_require__(4);

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
      var tSize = 0;
      var tmpStr = '';
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
/* 101 */
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
  }, [_vm._v(_vm._s(_vm.getText))]), _vm._v(" "), (_vm.foldable && _vm.folded) ? _c('text', {
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
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(103),
  /* template */
  __webpack_require__(104),
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
/* 103 */
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
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('image', {
    ref: "img",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.getStyle)),
    attrs: {
      "src": _vm.src
    },
    on: {
      "load": _vm.onLoad
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-120a0168", module.exports)
  }
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(106)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(108),
  /* template */
  __webpack_require__(109),
  /* scopeId */
  "data-v-10e45e81",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-overlay/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-10e45e81", Component.options)
  } else {
    hotAPI.reload("data-v-10e45e81", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(107);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("78c6b5b6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-10e45e81\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-10e45e81\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.fm-overlay[data-v-10e45e81] {\n  width: 1080;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-overlay/index.vue?5977a40c"],"names":[],"mappings":";AAaA;EACA,YAAA;EACA,gBAAA;EACA,QAAA;EACA,OAAA;EACA,UAAA;EACA,SAAA;CACA","file":"index.vue","sourcesContent":["<template>\n  <div>\n    <div class=\"fm-overlay\"\n         ref=\"fm-overlay\"\n         v-if=\"show\"\n         :watch=\"shouldShow\"\n         @click=\"overlayClicked\"\n         :style=\"overlayStyle\">\n    </div>\n  </div>\n</template>\n\n<style scoped>\n  .fm-overlay {\n    width: 1080;\n    position: fixed;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n  }\n</style>\n\n<script>\nconst animation = weex.requireModule('animation');\nexport default {\n  name: 'FmOverlay',\n  props: {\n    show: {\n      type: Boolean,\n      default: true\n    },\n    hasAnimation: {\n      type: Boolean,\n      default: true\n    },\n    duration: {\n      type: [Number, String],\n      default: 300\n    },\n    timingFunction: {\n      type: Array,\n      default: () => (['ease-in', 'ease-out'])\n    },\n    opacity: {\n      type: [Number, String],\n      default: 0.5\n    },\n    canAutoClose: {\n      type: Boolean,\n      default: true\n    }\n  },\n  computed: {\n    overlayStyle () {\n      return {\n        opacity: this.hasAnimation ? 0 : 1,\n        backgroundColor: `rgba(0, 0, 0,${this.opacity})`\n      };\n    },\n    shouldShow () {\n      const { show, hasAnimation } = this;\n      hasAnimation && setTimeout(() => {\n        this.appearOverlay(show);\n      }, 50);\n      return show;\n    }\n  },\n  methods: {\n    overlayClicked (e) {\n      this.canAutoClose ? this.appearOverlay(false) : this.$emit('fmOverlayBodyClicked', {});\n    },\n    appearOverlay (bool, duration = this.duration) {\n      const { hasAnimation, timingFunction, canAutoClose } = this;\n      const needEmit = !bool && canAutoClose;\n      needEmit && (this.$emit('fmOverlayBodyClicking', {}));\n      const overlayEl = this.$refs['fm-overlay'];\n      if (hasAnimation && overlayEl) {\n        animation.transition(overlayEl, {\n          styles: {\n            opacity: bool ? 1 : 0\n          },\n          duration,\n          timingFunction: timingFunction[bool ? 0 : 1],\n          delay: 0\n        }, () => {\n          needEmit && (this.$emit('fmOverlayBodyClicked', {}));\n        });\n      } else {\n        needEmit && (this.$emit('fmOverlayBodyClicked', {}));\n      }\n    },\n    hide () {\n      this.appearOverlay(false);\n    }\n  }\n};\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 108 */
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
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.show) ? _c('div', {
    ref: "fm-overlay",
    staticClass: "fm-overlay",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.overlayStyle)),
    attrs: {
      "watch": _vm.shouldShow
    },
    on: {
      "click": _vm.overlayClicked
    }
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-10e45e81", module.exports)
  }
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(111)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(113),
  /* template */
  __webpack_require__(119),
  /* scopeId */
  "data-v-2016588d",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-dialog/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2016588d", Component.options)
  } else {
    hotAPI.reload("data-v-2016588d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(112);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("dbb36500", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2016588d\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2016588d\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.container[data-v-2016588d] {\n  position: fixed;\n  width: 1080px;\n  /*兼容H5异常*/\n  z-index: 99999;\n}\n.dialog-box[data-v-2016588d] {\n  position: fixed;\n  left: 72px;\n  width: 936px;\n  background-color: #FFFFFF;\n  border-radius: 10px;\n  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);\n}\n.content-title[data-v-2016588d] {\n  margin-top: 63px;\n  padding-left: 72px;\n  padding-right: 72px;\n  margin-bottom: 18px;\n}\n.content-subtext[data-v-2016588d] {\n  padding-left: 72px;\n  padding-right: 72px;\n}\n.dialog-footer[data-v-2016588d] {\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 36px 0;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-dialog/index.vue?7d9dafc6"],"names":[],"mappings":";AA+BA;EACA,gBAAA;EACA,cAAA;EACA,UAAA;EACA,eAAA;CACA;AAEA;EACA,gBAAA;EACA,WAAA;EACA,aAAA;EACA,0BAAA;EACA,oBAAA;EACA,0CAAA;CACA;AAEA;EACA,iBAAA;EACA,mBAAA;EACA,oBAAA;EACA,oBAAA;CACA;AAEA;EACA,mBAAA;EACA,oBAAA;CACA;AAEA;EACA,wBAAA;EACA,oBAAA;EACA,gBAAA;EACA,gBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n  <div class=\"container\">\n      <fm-overlay v-if=\"self_show\"\n                  :hasAnimation=\"true\"\n                  :canAutoClose=\"false\"\n                  :opacity=\"overlayOpacity\"\n                  @fmOverlayBodyClicked=\"overlayClicked\"\n                  ref=\"fm-overlay\"></fm-overlay>\n      <div class=\"dialog-box\"\n           ref=\"dialog-box\"\n           v-if=\"self_show\"\n           :style=\"dialogStyle\"\n           @touchend=\"handleTouchEnd\">\n        <div class=\"dialog-content\">\n          <slot name=\"title\">\n            <fm-text class=\"content-title\" medium title>{{ title }}</fm-text>\n          </slot>\n          <slot name=\"content\">\n            <fm-text class=\"content-subtext\">{{ content }}</fm-text>\n          </slot>\n        </div>\n        <div class=\"dialog-footer\" :style=\"btnStyle\">\n          <slot name=\"btn-group\">\n            <fm-simple-btn v-for=\"(btn, index) in dialogBtns\" scene=\"dialog\" v-bind=\"btn\" @click=\"btnClick\" :key=\"index\"></fm-simple-btn>\n          </slot>\n        </div>\n      </div>\n  </div>\n</template>\n\n<style scoped>\n  .container {\n    position: fixed;\n    width: 1080px;\n    /*兼容H5异常*/\n    z-index: 99999;\n  }\n\n  .dialog-box {\n    position: fixed;\n    left: 72px;\n    width: 936px;\n    background-color: #FFFFFF;\n    border-radius: 10px;\n    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);\n  }\n\n  .content-title {\n    margin-top: 63px;\n    padding-left: 72px;\n    padding-right: 72px;\n    margin-bottom: 18px;\n  }\n\n  .content-subtext {\n    padding-left: 72px;\n    padding-right: 72px;\n  }\n\n  .dialog-footer {\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    padding: 36px 0;\n  }\n</style>\n\n<script>\nconst animation = weex.requireModule('animation');\nconst type_alert = 'alert';\nconst type_confirm = 'confirm';\nimport FmOverlay from '../fm-overlay';\nimport FmText from '../fm-text';\nimport FmSimpleBtn from '../fm-simple-btn';\nimport Locale from 'weex-flymeui/lib/mixins/locale';\nimport { t } from 'weex-flymeui/lib/locale';\n\nexport default {\n  name: 'FmDialog',\n  mixins: [Locale],\n  components: { FmOverlay, FmText, FmSimpleBtn },\n  props: {\n    show: {\n      type: Boolean,\n      default: false\n    },\n    title: {\n      type: String,\n      default: ''\n    },\n    content: {\n      type: String,\n      default: ''\n    },\n    top: {\n      type: Number,\n      default: 400\n    },\n    cancelText: {\n      type: String,\n      default () {\n        return t('el.common.cancel');\n      }\n    },\n    confirmText: {\n      type: String,\n      default () {\n        return t('el.common.confirm');\n      }\n    },\n    confirmColor: {\n      type: String,\n      default: '#198DED'\n    },\n    cancelColor: {\n      type: String,\n      default: '#198DED'\n    },\n    hasAnimation: {\n      type: Boolean,\n      default: true\n    },\n    duration: {\n      type: [Number, String],\n      default: 300\n    },\n    timingFunction: {\n      type: Array,\n      default: () => (['ease-out', 'ease-out'])\n    },\n    canAutoClose: {\n      type: Boolean,\n      default: true\n    },\n    btns: {\n      type: Array,\n      default: () => ([])\n    },\n    btnDirection: {\n      type: String,\n      default: 'row'\n    },\n    cancelCb: Function,\n    confirmCb: Function,\n    type: {\n      type: String,\n      default: type_confirm\n    },\n    overlayOpacity: {\n      type: Number,\n      default: 0.5\n    }\n  },\n  data: () => ({\n    pageHeight: 1334,\n    self_show: false,\n    dialogOpacity: 0\n  }),\n  created () {\n    const { env: { deviceHeight, deviceWidth }} = weex.config;\n    this.pageHeight = deviceHeight / deviceWidth * 1080;\n    this.self_show = this.show;\n  },\n  watch: {\n    show: function (val, oldVal) {\n      if (val) {\n        this.self_show = true;\n        setTimeout(() => {\n          this.appearDialog(true);\n        }, 50);\n      } else {\n        this.$refs['fm-overlay'].hide();\n        this.appearDialog(false);\n      }\n    }\n  },\n  computed: {\n    dialogBtns () {\n      let btns = [];\n      if (!this.btns || !this.btns.length) {\n        if (this.type === type_alert) {\n          btns = [{\n            text: this.confirmText,\n            color: this.confirmColor,\n            type: 'confirm'\n          }];\n        } else if (this.type === type_confirm) {\n          btns = [{\n            text: this.cancelText,\n            color: this.cancelColor,\n            type: 'cancel'\n          }, {\n            text: this.confirmText,\n            color: this.confirmColor,\n            type: 'confirm'\n          }];\n        }\n      } else {\n        btns = btns.concat(this.btns);\n      }\n      return btns;\n    },\n    dialogStyle () {\n      return {\n        opacity: this.dialogOpacity,\n        top: this.top\n      };\n    },\n    btnStyle () {\n      const { btnDirection, btns } = this;\n      return {\n        flexDirection: btns.length > 2 ? 'column' : btnDirection\n      };\n    }\n  },\n  methods: {\n    handleTouchEnd (e) {\n      // 原生上有点击穿透问题\n      e.preventDefault && e.preventDefault();\n    },\n    overlayClicked () {\n      this.canAutoClose && (this.appearDialog(false) || this.$emit('fmDialogOverlayClicked', {}));\n      this.cancelCb && this.cancelCb();\n    },\n    btnClick (btn) {\n      if (btn.type && btn.type === 'cancel') {\n        this.$emit('fmDialogBtnClicked', { type: 'cancel' });\n        this.cancelCb && this.cancelCb();\n      } else if (btn.type && btn.type === 'confirm') {\n        this.$emit('fmDialogBtnClicked', { type: 'confirm' });\n        this.confirmCb && this.confirmCb();\n      } else {\n        this.$emit('fmDialogBtnClicked', btn);\n      }\n    },\n    appearDialog (bool, duration = this.duration) {\n      const { hasAnimation, timingFunction } = this;\n      const dialogEl = this.$refs['dialog-box'];\n      this.dialogOpacity = bool ? 0 : 1;\n      if (hasAnimation && dialogEl) {\n        animation.transition(dialogEl, {\n          styles: {\n            opacity: bool ? 1 : 0\n          },\n          duration,\n          timingFunction: timingFunction[bool ? 0 : 1],\n          delay: 0\n        }, () => {\n          this.self_show = bool;\n          this.dialogOpacity = bool ? 1 : 0;\n        });\n      } else {\n        this.self_show = bool;\n        this.dialogOpacity = bool ? 1 : 0;\n      }\n    }\n  }\n};\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fmOverlay = __webpack_require__(10);

var _fmOverlay2 = _interopRequireDefault(_fmOverlay);

var _fmText = __webpack_require__(6);

var _fmText2 = _interopRequireDefault(_fmText);

var _fmSimpleBtn = __webpack_require__(11);

var _fmSimpleBtn2 = _interopRequireDefault(_fmSimpleBtn);

var _locale = __webpack_require__(5);

var _locale2 = _interopRequireDefault(_locale);

var _locale3 = __webpack_require__(4);

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
/* 114 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(115)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(117),
  /* template */
  __webpack_require__(118),
  /* scopeId */
  "data-v-5cb22ec6",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-simple-btn/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5cb22ec6", Component.options)
  } else {
    hotAPI.reload("data-v-5cb22ec6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(116);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("4a68a452", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5cb22ec6\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5cb22ec6\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.dialog-btn[data-v-5cb22ec6] {\n    flex: 1;\n\t\tpadding-left: 48px;\n\t\tpadding-right: 48px;\n}\n.btnText[data-v-5cb22ec6] {\n    font-family: sans-serif-medium;\n    font-weight: 500;\n    font-size: 48px;\n    color: #198ded;\n    text-align: center;\n}\n.dialog-btnText[data-v-5cb22ec6] {\n    padding: 36px;\n}\n.actionSheet-btnText[data-v-5cb22ec6] {\n\t\tline-height: 192px;\n\t\tborder-bottom-style: solid;\n\t\tborder-bottom-width: 1px;\n\t\tborder-bottom-color: #E6E6E6;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-simple-btn/index.vue?010236d4"],"names":[],"mappings":";AAOA;IACA,QAAA;EACA,mBAAA;EACA,oBAAA;CACA;AAEA;IACA,+BAAA;IACA,iBAAA;IACA,gBAAA;IACA,eAAA;IACA,mBAAA;CACA;AAEA;IACA,cAAA;CACA;AAEA;EACA,mBAAA;EACA,2BAAA;EACA,yBAAA;EACA,6BAAA;CACA","file":"index.vue","sourcesContent":["<template>\n  <div class=\"dialog-btn\">\n    <text :class=\"btnClz\" :style=\"btnStyle\" @click=\"click()\">{{ text }}</text>\n\t</div>\n</template>\n\n<style scoped>\n  .dialog-btn {\n    flex: 1;\n\t\tpadding-left: 48px;\n\t\tpadding-right: 48px;\n  }\n\n\t.btnText {\n    font-family: sans-serif-medium;\n    font-weight: 500;\n    font-size: 48px;\n    color: #198ded;\n    text-align: center;\n\t}\n\n  .dialog-btnText {\n    padding: 36px;\n  }\n\n\t.actionSheet-btnText {\n\t\tline-height: 192px;\n\t\tborder-bottom-style: solid;\n\t\tborder-bottom-width: 1px;\n\t\tborder-bottom-color: #E6E6E6;\n\t}\n</style>\n\n<script>\nexport default {\n  name: 'FmSimpleBtn',\n  props: {\n    text: String,\n    type: String,\n    color: String,\n    msg: [String, Number, Array, Object],\n    scene: {\n      type: String,\n      defalut: 'dialog'\n    }\n  },\n  computed: {\n    btnClz () {\n      const clz = ['btnText'];\n      if (this.scene === 'dialog') {\n        clz.push('dialog-btnText');\n      } else if (this.scene === 'actionSheet') {\n        clz.push('actionSheet-btnText');\n      }\n      return clz;\n    },\n    btnStyle () {\n      const { color } = this;\n      if (color) {\n        return {\n          color: color\n        };\n      }\n    }\n  },\n  methods: {\n    click () {\n      const { text, msg, type } = this;\n      this.$emit('click', { text: text, type: type, msg: msg });\n    }\n  }\n};\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 117 */
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
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dialog-btn",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_c('text', {
    class: _vm.btnClz,
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.btnStyle)),
    on: {
      "click": function($event) {
        _vm.click()
      }
    }
  }, [_vm._v(_vm._s(_vm.text))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5cb22ec6", module.exports)
  }
}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [(_vm.self_show) ? _c('fm-overlay', {
    ref: "fm-overlay",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "hasAnimation": true,
      "canAutoClose": false,
      "opacity": _vm.overlayOpacity
    },
    on: {
      "fmOverlayBodyClicked": _vm.overlayClicked
    }
  }) : _vm._e(), _vm._v(" "), (_vm.self_show) ? _c('div', {
    ref: "dialog-box",
    staticClass: "dialog-box",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.dialogStyle)),
    on: {
      "touchend": _vm.handleTouchEnd
    }
  }, [_c('div', {
    staticClass: "dialog-content",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_vm._t("title", [_c('fm-text', {
    staticClass: "content-title",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "medium": "",
      "title": ""
    }
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _vm._t("content", [_c('fm-text', {
    staticClass: "content-subtext",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_vm._v(_vm._s(_vm.content))])])], 2), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.btnStyle))
  }, [_vm._t("btn-group", _vm._l((_vm.dialogBtns), function(btn, index) {
    return _c('fm-simple-btn', _vm._b({
      key: index,
      staticStyle: _vm.$processStyle(undefined),
      style: (_vm.$processStyle(undefined)),
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
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2016588d", module.exports)
  }
}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alert = exports.confirm = undefined;

var _fmDialog = __webpack_require__(15);

var _fmDialog2 = _interopRequireDefault(_fmDialog);

var _locale = __webpack_require__(4);

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
/* 121 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(122)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(124),
  /* template */
  __webpack_require__(125),
  /* scopeId */
  "data-v-0a22d546",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-popup/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0a22d546", Component.options)
  } else {
    hotAPI.reload("data-v-0a22d546", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(123);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("4bec9f5c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0a22d546\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0a22d546\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.fm-popup[data-v-0a22d546] {\n\t\tposition: fixed;\n\t\twidth: 1080px;\n}\n.top[data-v-0a22d546] {\n    left: 0;\n    right: 0;\n}\n.bottom[data-v-0a22d546] {\n    left: 0;\n    right: 0;\n}\n.left[data-v-0a22d546] {\n    bottom: 0;\n    top: 0;\n}\n.right[data-v-0a22d546] {\n    bottom: 0;\n    top: 0;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-popup/index.vue?76594ed0"],"names":[],"mappings":";AAsBA;EACA,gBAAA;EACA,cAAA;CACA;AAEA;IACA,QAAA;IACA,SAAA;CACA;AAEA;IACA,QAAA;IACA,SAAA;CACA;AAEA;IACA,UAAA;IACA,OAAA;CACA;AAEA;IACA,UAAA;IACA,OAAA;CACA","file":"index.vue","sourcesContent":["<template>\n  <div>\n    <div @touchend=\"handleTouchEnd\">\n      <fm-overlay :show=\"haveOverlay && isOverShow\"\n                   v-if=\"show\"\n                   ref=\"overlay\"\n                   v-bind=\"overlayCfg\"\n                   @fmOverlayBodyClicking=\"fmOverlayBodyClicking\"></fm-overlay>\n    </div>\n    <div ref=\"fm-popup\"\n         v-if=\"show\"\n         :height=\"_height\"\n         :hack=\"isNeedShow\"\n         @click=\"()=>{}\"\n         :class=\"['fm-popup', pos]\"\n         :style=\"padStyle\">\n      <slot></slot>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n\t.fm-popup {\n\t\tposition: fixed;\n\t\twidth: 1080px;\n\t}\n\n  .top {\n    left: 0;\n    right: 0;\n  }\n\n  .bottom {\n    left: 0;\n    right: 0;\n  }\n\n  .left {\n    bottom: 0;\n    top: 0;\n  }\n\n  .right {\n    bottom: 0;\n    top: 0;\n  }\n</style>\n\n<script>\nconst animation = weex.requireModule('animation');\nconst { platform } = weex.config.env;\nconst isWeb = typeof (window) === 'object' && platform.toLowerCase() === 'web';\nimport FmOverlay from '../fm-overlay';\n\nexport default {\n  name: 'FmPopup',\n  components: { FmOverlay },\n  props: {\n    show: {\n      type: Boolean,\n      default: false\n    },\n    pos: {\n      type: String,\n      default: 'bottom'\n    },\n    popupColor: {\n      type: String,\n      default: '#FFFFFF'\n    },\n    overlayCfg: {\n      type: Object,\n      default: () => ({\n        hasAnimation: true,\n        timingFunction: ['ease-in', 'ease-out'],\n        duration: 300,\n        opacity: 0.5\n      })\n    },\n    height: {\n      type: [Number, String],\n      default: 840\n    },\n    standOut: {\n      type: [Number, String],\n      default: 0\n    },\n    width: {\n      type: [Number, String],\n      default: 1080\n    },\n    animation: {\n      type: Object,\n      default: () => ({\n        timingFunction: 'ease-out'\n      })\n    }\n  },\n  data: () => ({\n    haveOverlay: true,\n    isOverShow: true\n  }),\n  computed: {\n    isNeedShow () {\n      setTimeout(() => {\n        this.appearPopup(this.show);\n      }, 50);\n      return this.show;\n    },\n    _height () {\n      this.appearPopup(this.show, 150);\n      return this.height;\n    },\n    transformValue () {\n      return this.getTransform(this.pos, this.width, this.height, true);\n    },\n    padStyle () {\n      const { pos, width, height, popupColor } = this;\n      let style = {\n        width: `${width}px`,\n        backgroundColor: popupColor\n      };\n      pos === 'top' && (style = {\n        ...style,\n        top: `${-height}px`,\n        height: `${height}px`\n      });\n      pos === 'bottom' && (style = {\n        ...style,\n        bottom: `${-height}px`,\n        height: `${height}px`\n      });\n      pos === 'left' && (style = {\n        ...style,\n        left: `${-width}px`\n      });\n      pos === 'right' && (style = {\n        ...style,\n        right: `${-width}px`\n      });\n      return style;\n    }\n  },\n  methods: {\n    handleTouchEnd (e) {\n      const { platform } = weex.config.env;\n      platform === 'Web' && e.preventDefault && e.preventDefault();\n    },\n    hide () {\n      this.appearPopup(false);\n      this.$refs.overlay.appearOverlay(false);\n    },\n    fmOverlayBodyClicking () {\n      this.isShow && this.appearPopup(false);\n    },\n    appearPopup (bool, duration = 300) {\n      this.isShow = bool;\n      const popupEl = this.$refs['fm-popup'];\n      if (!popupEl) {\n        return;\n      }\n      animation.transition(popupEl, {\n        styles: {\n          transform: this.getTransform(this.pos, this.width, this.height, !bool)\n        },\n        duration,\n        delay: 0,\n        ...this.animation\n      }, () => {\n        if (!bool) {\n          this.$emit('fmPopupOverlayClicked', { pos: this.pos });\n        }\n      });\n    },\n    getTransform (pos, width, height, bool) {\n      let _size = pos === 'top' || pos === 'bottom' ? height : width;\n      let _transform;\n      if (isWeb) {\n        _size -= this.standOut;\n      }\n      bool && (_size = 0);\n      switch (pos) {\n        case 'top':\n          _transform = `translateY(${_size}px)`;\n          break;\n        case 'bottom':\n          _transform = `translateY(-${_size}px)`;\n          break;\n        case 'left':\n          _transform = `translateX(${_size}px)`;\n          break;\n        case 'right':\n          _transform = `translateX(-${_size}px)`;\n          break;\n      }\n      return _transform;\n    }\n  }\n};\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _fmOverlay = __webpack_require__(10);

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
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    on: {
      "touchend": _vm.handleTouchEnd
    }
  }, [(_vm.show) ? _c('fm-overlay', _vm._b({
    ref: "overlay",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "show": _vm.haveOverlay && _vm.isOverShow
    },
    on: {
      "fmOverlayBodyClicking": _vm.fmOverlayBodyClicking
    }
  }, 'fm-overlay', _vm.overlayCfg, false)) : _vm._e()], 1), _vm._v(" "), (_vm.show) ? _c('div', {
    ref: "fm-popup",
    class: ['fm-popup', _vm.pos],
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.padStyle)),
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
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0a22d546", module.exports)
  }
}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(127);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(128)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(130),
  /* template */
  __webpack_require__(131),
  /* scopeId */
  "data-v-81855a66",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-action-sheet/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-81855a66", Component.options)
  } else {
    hotAPI.reload("data-v-81855a66", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(129);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("2e06ec50", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-81855a66\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-81855a66\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"index.vue","sourceRoot":""}]);

// exports


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fmPopup = __webpack_require__(16);

var _fmPopup2 = _interopRequireDefault(_fmPopup);

var _fmSimpleBtn = __webpack_require__(11);

var _fmSimpleBtn2 = _interopRequireDefault(_fmSimpleBtn);

var _locale = __webpack_require__(5);

var _locale2 = _interopRequireDefault(_locale);

var _locale3 = __webpack_require__(4);

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
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('fm-popup', {
    ref: "fm-popup",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "have-overlay": true,
      "popup-color": "#FFFFFF",
      "show": _vm.show,
      "overlay-cfg": _vm.overlayCfg,
      "pos": "bottom",
      "height": _vm._height
    },
    on: {
      "fmPopupOverlayClicked": _vm.popupOverlayClick
    }
  }, _vm._l((_vm.btns), function(btn, index) {
    return _c('fm-simple-btn', {
      key: index,
      staticStyle: _vm.$processStyle(undefined),
      style: (_vm.$processStyle(undefined)),
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
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-81855a66", module.exports)
  }
}

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(133);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(134)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(136),
  /* template */
  __webpack_require__(138),
  /* scopeId */
  "data-v-6c88d718",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-item/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6c88d718", Component.options)
  } else {
    hotAPI.reload("data-v-6c88d718", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(135);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("c2621516", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6c88d718\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6c88d718\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.fm-item[data-v-6c88d718] {\n  padding: 0 48px;\n}\n.fm-item[data-v-6c88d718]:active {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.item-wrapper[data-v-6c88d718] {\n  flex-direction: row;\n  align-items: center;\n}\n.item-border[data-v-6c88d718] {\n  background-color: rgba(0, 0, 0, 0.1);\n  height: 2px;\n}\n.content[data-v-6c88d718] {\n  flex: 1;\n  flex-direction: row;\n}\n.content-text[data-v-6c88d718] {\n  flex: 1;\n  justify-content: center;\n}\n.text-title[data-v-6c88d718] {\n  font-size: 48px;\n  color: #000000;\n  line-height: 57px;\n  text-overflow: ellipsis;\n  lines: 1;\n}\n.text-summary[data-v-6c88d718] {\n  margin-top: 9px;\n  font-size: 36px;\n  color: rgba(0, 0, 0, 0.4);\n  line-height: 42px;\n  text-overflow: ellipsis;\n  lines: 1;\n}\n.text-description[data-v-6c88d718] {\n  flex: 1;\n  margin-top: 9px;\n  font-size: 36px;\n  color: rgba(0, 0, 0, 0.4);\n  line-height: 42px;\n}\n.image[data-v-6c88d718] {\n  margin-right: 48px;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-item/index.vue?33110834"],"names":[],"mappings":";AA8BA;EACA,gBAAA;CACA;AAEA;EACA,sCAAA;CACA;AAEA;EACA,oBAAA;EACA,oBAAA;CACA;AAEA;EACA,qCAAA;EACA,YAAA;CACA;AAEA;EACA,QAAA;EACA,oBAAA;CACA;AAEA;EACA,QAAA;EACA,wBAAA;CACA;AAEA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,wBAAA;EACA,SAAA;CACA;AAEA;EACA,gBAAA;EACA,gBAAA;EACA,0BAAA;EACA,kBAAA;EACA,wBAAA;EACA,SAAA;CACA;AAEA;EACA,QAAA;EACA,gBAAA;EACA,gBAAA;EACA,0BAAA;EACA,kBAAA;CACA;AAEA;EACA,mBAAA;CACA","file":"index.vue","sourcesContent":["<!-- Created by Yanjiie on 2018/3/9. -->\n<template>\n  <div class=\"fm-item\" @click=\"itemClicked\" @longpress=\"itemLongpress\">\n    <div class=\"item-wrapper\" :style=\"wrapStyle\">\n      <div v-if=\"imgSrc\" class=\"image\">\n        <fm-image :src=\"imgSrc\"\n                  :width=\"scene.imgWidth || imgWidth\"\n                  :height=\"scene.imgHeight || imgHeight\"\n                  :style=\"{ borderRadius: scene.imgRadius || imgRadius }\"\n                  :occupyingColor=\"occupyingColor\"></fm-image>\n      </div>\n      <div class=\"content\">\n        <slot name=\"left\">\n        </slot>\n        <div class=\"content-text\">\n          <slot name=\"title\">\n            <text v-if=\"title\" class=\"text-title\" :style=\"{ color: titleColor }\">{{ title }}</text>\n          </slot>\n          <text v-if=\"summary\" class=\"text-summary\" :style=\"{ color: summaryColor }\">{{ summary }}</text>\n          <text v-if=\"description\" class=\"text-description\" :style=\"{ color: descColor }\">{{ description }}</text>\n        </div>\n        <slot name=\"right\">\n        </slot>\n      </div>\n    </div>\n    <div class=\"item-border\" :style=\"{ marginLeft: imgSrc ? (scene.imgWidth || imgWidth) + 48 : 0 }\"></div>\n  </div>\n</template>\n\n<style scoped>\n  .fm-item {\n    padding: 0 48px;\n  }\n\n  .fm-item:active {\n    background-color: rgba(0, 0, 0, 0.05);\n  }\n\n  .item-wrapper {\n    flex-direction: row;\n    align-items: center;\n  }\n\n  .item-border {\n    background-color: rgba(0, 0, 0, 0.1);\n    height: 2px;\n  }\n\n  .content {\n    flex: 1;\n    flex-direction: row;\n  }\n\n  .content-text {\n    flex: 1;\n    justify-content: center;\n  }\n\n  .text-title {\n    font-size: 48px;\n    color: #000000;\n    line-height: 57px;\n    text-overflow: ellipsis;\n    lines: 1;\n  }\n\n  .text-summary {\n    margin-top: 9px;\n    font-size: 36px;\n    color: rgba(0, 0, 0, 0.4);\n    line-height: 42px;\n    text-overflow: ellipsis;\n    lines: 1;\n  }\n\n  .text-description {\n    flex: 1;\n    margin-top: 9px;\n    font-size: 36px;\n    color: rgba(0, 0, 0, 0.4);\n    line-height: 42px;\n  }\n\n  .image {\n    margin-right: 48px;\n  }\n</style>\n\n<script>\nimport FmImage from '../fm-image';\nimport Scene from './scene';\n\nexport default {\n  name: 'FmItem',\n  components: { FmImage },\n  props: {\n    type: {\n      type: String,\n      default: 'normal'\n    },\n    title: String,\n    summary: String,\n    description: String,\n    imgSrc: String,\n    titleColor: {\n      type: String,\n      default: '#000000'\n    },\n    summaryColor: {\n      type: String,\n      default: 'rgba(0, 0, 0, 0.4)'\n    },\n    descColor: {\n      type: String,\n      default: 'rgba(0, 0, 0, 0.4)'\n    },\n    imgWidth: {\n      type: Number,\n      default: 96\n    },\n    imgHeight: {\n      type: Number,\n      default: 96\n    },\n    imgRadius: {\n      type: Number,\n      default: 0\n    },\n    imgPosition: {\n      type: String,\n      default: 'center'\n    },\n    paddingTop: {\n      type: Number,\n      default: 54\n    },\n    paddingBottom: {\n      type: Number,\n      default: 54\n    },\n    occupyingColor: {\n      type: String,\n      default: 'rgba(0, 0, 0, 0.1)'\n    }\n  },\n  data: () => ({\n    scene: {}\n  }),\n  computed: {\n    wrapStyle () {\n      const { paddingTop, paddingBottom, imgPosition, scene } = this;\n      return {\n        paddingTop: scene.paddingTop || paddingTop,\n        paddingBottom: scene.paddingBottom || paddingBottom,\n        alignItems: (scene.imgPosition || imgPosition) === 'top' ? 'flex-start' : (scene.imgPosition || imgPosition) === 'bottom' ? 'flex-end' : 'center'\n      };\n    }\n  },\n  mounted () {\n    this.scene = Scene[this.type];\n  },\n  methods: {\n    itemClicked (e) {\n      this.$emit('fmItemClicked', e);\n    },\n    itemLongpress (e) {\n      this.$emit('fmItemLongpress', e);\n    }\n  }\n};\n</script>\n\n\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fmImage = __webpack_require__(9);

var _fmImage2 = _interopRequireDefault(_fmImage);

var _scene = __webpack_require__(137);

var _scene2 = _interopRequireDefault(_scene);

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

exports.default = {
  name: 'FmItem',
  components: { FmImage: _fmImage2.default },
  props: {
    type: {
      type: String,
      default: 'normal'
    },
    title: String,
    summary: String,
    description: String,
    imgSrc: String,
    titleColor: {
      type: String,
      default: '#000000'
    },
    summaryColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.4)'
    },
    descColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.4)'
    },
    imgWidth: {
      type: Number,
      default: 96
    },
    imgHeight: {
      type: Number,
      default: 96
    },
    imgRadius: {
      type: Number,
      default: 0
    },
    imgPosition: {
      type: String,
      default: 'center'
    },
    paddingTop: {
      type: Number,
      default: 54
    },
    paddingBottom: {
      type: Number,
      default: 54
    },
    occupyingColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.1)'
    }
  },
  data: function data() {
    return {
      scene: {}
    };
  },
  computed: {
    wrapStyle: function wrapStyle() {
      var paddingTop = this.paddingTop,
          paddingBottom = this.paddingBottom,
          imgPosition = this.imgPosition,
          scene = this.scene;

      return {
        paddingTop: scene.paddingTop || paddingTop,
        paddingBottom: scene.paddingBottom || paddingBottom,
        alignItems: (scene.imgPosition || imgPosition) === 'top' ? 'flex-start' : (scene.imgPosition || imgPosition) === 'bottom' ? 'flex-end' : 'center'
      };
    }
  },
  mounted: function mounted() {
    this.scene = _scene2.default[this.type];
  },

  methods: {
    itemClicked: function itemClicked(e) {
      this.$emit('fmItemClicked', e);
    },
    itemLongpress: function itemLongpress(e) {
      this.$emit('fmItemLongpress', e);
    }
  }
};

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'single': {
    paddingTop: 48,
    paddingBottom: 48
  },
  'normal': {},
  'avatar-single': {
    imgWidth: 120,
    imgHeight: 120,
    imgRadius: 60,
    paddingTop: 48,
    paddingBottom: 48
  },
  'avatar-normal': {
    imgWidth: 120,
    imgHeight: 120,
    imgRadius: 60,
    paddingTop: 48,
    paddingBottom: 48,
    imgPosition: 'top'
  },
  'icon-small': {
    imgWidth: 96,
    imgHeight: 96,
    paddingTop: 36,
    paddingBottom: 36
  },
  'icon-middle': {
    imgWidth: 138,
    imgHeight: 138,
    imgRadius: 4,
    paddingTop: 24,
    paddingBottom: 24
  },
  'icon-large': {
    imgWidth: 192,
    imgHeight: 192,
    paddingTop: 36,
    paddingBottom: 36
  }
};

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fm-item",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    on: {
      "click": _vm.itemClicked,
      "longpress": _vm.itemLongpress
    }
  }, [_c('div', {
    staticClass: "item-wrapper",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.wrapStyle))
  }, [(_vm.imgSrc) ? _c('div', {
    staticClass: "image",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_c('fm-image', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      borderRadius: _vm.scene.imgRadius || _vm.imgRadius
    })),
    attrs: {
      "src": _vm.imgSrc,
      "width": _vm.scene.imgWidth || _vm.imgWidth,
      "height": _vm.scene.imgHeight || _vm.imgHeight,
      "occupyingColor": _vm.occupyingColor
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "content",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_vm._t("left"), _vm._v(" "), _c('div', {
    staticClass: "content-text",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_vm._t("title", [(_vm.title) ? _c('text', {
    staticClass: "text-title",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      color: _vm.titleColor
    }))
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e()]), _vm._v(" "), (_vm.summary) ? _c('text', {
    staticClass: "text-summary",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      color: _vm.summaryColor
    }))
  }, [_vm._v(_vm._s(_vm.summary))]) : _vm._e(), _vm._v(" "), (_vm.description) ? _c('text', {
    staticClass: "text-description",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      color: _vm.descColor
    }))
  }, [_vm._v(_vm._s(_vm.description))]) : _vm._e()], 2), _vm._v(" "), _vm._t("right")], 2)]), _vm._v(" "), _c('div', {
    staticClass: "item-border",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      marginLeft: _vm.imgSrc ? (_vm.scene.imgWidth || _vm.imgWidth) + 48 : 0
    }))
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6c88d718", module.exports)
  }
}

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


/* styles */
__webpack_require__(141)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(143),
  /* template */
  __webpack_require__(144),
  /* scopeId */
  "data-v-8580e67a",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-rater/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8580e67a", Component.options)
  } else {
    hotAPI.reload("data-v-8580e67a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(142);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("67560904", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-8580e67a\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-8580e67a\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.rater-wrap[data-v-8580e67a] {\n  position: relative;\n  flex-direction: row;\n}\n.rater-star[data-v-8580e67a] {\n  flex-direction: row;\n  position: absolute;\n  overflow: hidden;\n  left: 0;\n  top: 0;\n}\n.rater-star-bg[data-v-8580e67a] {\n  flex-direction: row;\n}\n.rater-star-cover[data-v-8580e67a] {\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.star[data-v-8580e67a] {\n}\n.star_small[data-v-8580e67a] {\n  width: 30px;\n  height: 30px;\n  margin: 0 3px;\n}\n.star_big[data-v-8580e67a] {\n  width: 60px;\n  height: 60px;\n  margin: 0 13px;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-rater/index.vue?42367a60"],"names":[],"mappings":";AAgBA;EACA,mBAAA;EACA,oBAAA;CACA;AAEA;EACA,oBAAA;EACA,mBAAA;EACA,iBAAA;EACA,QAAA;EACA,OAAA;CACA;AAEA;EACA,oBAAA;CACA;AAEA;EACA,mBAAA;EACA,iBAAA;EACA,OAAA;EACA,UAAA;EACA,QAAA;EACA,SAAA;CACA;AAEA;CAEA;AAEA;EACA,YAAA;EACA,aAAA;EACA,cAAA;CACA;AAEA;EACA,YAAA;EACA,aAAA;EACA,eAAA;CACA","file":"index.vue","sourcesContent":["<template>\n  <div class=\"rater-wrap\" ref=\"rater\" @touchstart=\"raterTouchStart\" @touchmove=\"raterTouchmove\" @touchend=\"raterTouchend\">\n    <div class=\"rater-star-bg\">\n      <image :class=\"starClz\" :src=\"getBgImgs\" />\n      <image :class=\"starClz\" :src=\"getBgImgs\" />\n      <image :class=\"starClz\" :src=\"getBgImgs\" />\n      <image :class=\"starClz\" :src=\"getBgImgs\" />\n      <image :class=\"starClz\" :src=\"getBgImgs\" />\n    </div>\n    <div class=\"rater-star\" :style=\"wraperWidth\">\n      <image :class=\"starClz\" v-for=\"(item, index) in getImgs\" :key=\"index\" :src=\"item\" />\n    </div>\n  </div>\n</template>\n\n<style scoped>\n  .rater-wrap {\n    position: relative;\n    flex-direction: row;\n  }\n\n  .rater-star {\n    flex-direction: row;\n    position: absolute;\n    overflow: hidden;\n    left: 0;\n    top: 0;\n  }\n\n  .rater-star-bg {\n    flex-direction: row;\n  }\n\n  .rater-star-cover {\n    position: absolute;\n    overflow: hidden;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n\n  .star {\n\n  }\n\n  .star_small {\n    width: 30px;\n    height: 30px;\n    margin: 0 3px;\n  }\n\n  .star_big {\n    width: 60px;\n    height: 60px;\n    margin: 0 13px;\n  }\n</style>\n\n<script>\nimport FmIcon from '../fm-icon';\nimport FmImage from '../fm-image';\nconst dom = weex.requireModule('dom');\nexport default {\n  name: 'FmRater',\n  components: { FmIcon, FmImage },\n  props: {\n    score: {\n      type: Number,\n      default: 5\n    },\n    fullScore: {\n      type: Number,\n      default: 10\n    },\n    size: {\n      type: String,\n      default: 'big'\n    },\n    theme: {\n      type: String,\n      default: 'normal'\n    },\n    canChange: {\n      type: Boolean,\n      default: true\n    },\n    canSlide: {\n      type: Boolean,\n      default: true\n    },\n    starImgs: {\n      type: Array,\n      default: [\n        'https://raw.githubusercontent.com/Yanjiie/weex-flymeui/master/assets/star1.png',\n        'https://raw.githubusercontent.com/Yanjiie/weex-flymeui/master/assets/star2.png',\n        'https://raw.githubusercontent.com/Yanjiie/weex-flymeui/master/assets/star3.png',\n        'https://raw.githubusercontent.com/Yanjiie/weex-flymeui/master/assets/star4.png',\n        'https://raw.githubusercontent.com/Yanjiie/weex-flymeui/master/assets/star5.png'\n      ]\n    },\n    starSpecialImg: {\n      type: String,\n      default: 'https://raw.githubusercontent.com/Yanjiie/weex-flymeui/master/assets/star_special.png'\n    },\n    starDarkImg: {\n      type: String,\n      default: 'https://raw.githubusercontent.com/Yanjiie/weex-flymeui/master/assets/star_dark.png'\n    },\n    starBgImg: {\n      type: String,\n      default: 'https://raw.githubusercontent.com/Yanjiie/weex-flymeui/master/assets/star_bg.png'\n    },\n    starDarkBgImg: {\n      type: String,\n      default: 'https://raw.githubusercontent.com/Yanjiie/weex-flymeui/master/assets/star_dark_bg.png'\n    }\n  },\n  data: () => ({\n    offset_left: 0,\n    starCount: 5\n  }),\n  computed: {\n    starClz () {\n      const clz = ['star'];\n      this.size === 'big' ? clz.push('star_big') : clz.push('star_small');\n      return clz;\n    },\n    wraperWidth () {\n      const { score, fullScore, size } = this;\n      const half_star_width = size === 'big' ? 43 : 18;\n      const percent = score / fullScore;\n      let length = score <= 0 ? 0 : percent >= 1 ? 10 : percent.toFixed(1) * 10;\n      length = isNaN(length) ? 0 : length;\n      return !length ? {\n        width: 1,\n        opacity: 0\n      } : {\n        width: length * half_star_width,\n        opacity: 1\n      };\n    },\n    getImgs () {\n      const { theme } = this;\n      if (theme === 'normal') {\n        return this.starImgs;\n      } else if (theme === 'special') {\n        const arr = [];\n        for (let i = 0; i < 5; i++) {\n          arr.push(this.starSpecialImg);\n        }\n        return arr;\n      } else if (theme === 'dark') {\n        const arr = [];\n        for (let i = 0; i < 5; i++) {\n          arr.push(this.starDarkImg);\n        }\n        return arr;\n      }\n    },\n    getBgImgs () {\n      const { theme } = this;\n      if (theme === 'normal' || theme === 'special') {\n        return this.starBgImg;\n      } else if (theme === 'dark') {\n        return this.starDarkBgImg;\n      }\n    }\n  },\n  methods: {\n    raterTouchStart (e) {\n      const { canChange, canSlide } = this;\n      if (!canChange || !canSlide) return;\n      this.calculateScore(e.changedTouches[0].pageX, true);\n    },\n    raterTouchmove (e) {\n      const { canChange, canSlide } = this;\n      if (!canChange || !canSlide) return;\n      this.calculateScore(e.changedTouches[0].pageX, true);\n    },\n    raterTouchend (e) {\n      const { canChange } = this;\n      if (!canChange) return;\n      this.calculateScore(e.changedTouches[0].pageX, true);\n    },\n    calculateScore (pageX, needEmit) {\n      const { size, fullScore } = this;\n      if (weex.config.env.platform === 'Web') {\n        pageX = pageX * 2 / 750 * 1080 - this.offset_left;\n      } else if (weex.config.env.platform === 'iOS') {\n        pageX = pageX - this.offset_left;\n      }\n      const half_star_width = size === 'big' ? 43 : 18;\n      const half_star_score = fullScore / 10;\n      const star_num = (pageX / half_star_width).toFixed(0);\n      const score_percent = star_num <= 0 ? 0 : star_num >= 10 ? 10 : star_num;\n      this.score = score_percent * half_star_score;\n      needEmit && this.$emit('fmRaterScoreChanged', { score: this.score });\n    }\n  },\n  mounted () {\n    if (weex.config.env.platform !== 'Android') {\n      setTimeout(() => {\n        dom.getComponentRect(this.$refs.rater, option => {\n          this.offset_left = option.size.left;\n        });\n      }, 50);\n    }\n  }\n};\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fmIcon = __webpack_require__(3);

var _fmIcon2 = _interopRequireDefault(_fmIcon);

var _fmImage = __webpack_require__(9);

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
      length = isNaN(length) ? 0 : length;
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
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "rater",
    staticClass: "rater-wrap",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    on: {
      "touchstart": _vm.raterTouchStart,
      "touchmove": _vm.raterTouchmove,
      "touchend": _vm.raterTouchend
    }
  }, [_c('div', {
    staticClass: "rater-star-bg",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_c('image', {
    class: _vm.starClz,
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "src": _vm.getBgImgs
    }
  }), _vm._v(" "), _c('image', {
    class: _vm.starClz,
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "src": _vm.getBgImgs
    }
  }), _vm._v(" "), _c('image', {
    class: _vm.starClz,
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "src": _vm.getBgImgs
    }
  }), _vm._v(" "), _c('image', {
    class: _vm.starClz,
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "src": _vm.getBgImgs
    }
  }), _vm._v(" "), _c('image', {
    class: _vm.starClz,
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "src": _vm.getBgImgs
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "rater-star",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.wraperWidth))
  }, _vm._l((_vm.getImgs), function(item, index) {
    return _c('image', {
      key: index,
      class: _vm.starClz,
      staticStyle: _vm.$processStyle(undefined),
      style: (_vm.$processStyle(undefined)),
      attrs: {
        "src": item
      }
    })
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8580e67a", module.exports)
  }
}

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(146)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(148),
  /* template */
  __webpack_require__(149),
  /* scopeId */
  "data-v-81772c76",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-snack-bar/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-81772c76", Component.options)
  } else {
    hotAPI.reload("data-v-81772c76", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(147);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("6efa08b7", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-81772c76\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-81772c76\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.fm-snack-bar[data-v-81772c76] {\n\t\tposition: fixed;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tbackground-color: #FFFFFF;\n\t\tflex-direction: row;\n\t\tpadding: 0 72px;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tmin-height: 0;\n}\n.title[data-v-81772c76], .closeText[data-v-81772c76] {\n\t\tfont-size: 42px;\n\t\tfont-family: sans-serif-medium;\n\t\tfont-weight: 500;\n}\n.rotate[data-v-81772c76] {\n\t\tfont-size: 54px;\n    height: 54px;\n\t\tfont-weight: 700;\n\t\ttransform: rotate(180deg);\n}\n\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-snack-bar/index.vue?39a4b4a5"],"names":[],"mappings":";AAkBA;EACA,gBAAA;EACA,QAAA;EACA,SAAA;EACA,0BAAA;EACA,oBAAA;EACA,gBAAA;EACA,+BAAA;EACA,oBAAA;EACA,cAAA;CACA;AAEA;EACA,gBAAA;EACA,+BAAA;EACA,iBAAA;CACA;AAEA;EACA,gBAAA;IACA,aAAA;EACA,iBAAA;EACA,0BAAA;CACA","file":"index.vue","sourcesContent":["<template>\n\t<div ref=\"fm-snack-bar\"\n\t\tv-if=\"show\"\n\t\t:hack=\"isNeedShow\"\n\t\tclass=\"fm-snack-bar\"\n\t\t:style=\"barStyle\"\n\t\t@click=\"snackClick\">\n\t\t<slot name=\"title\">\n\t\t\t<text class=\"title\" :style=\"{ color: titleColor }\">{{ title }}</text>\n\t\t</slot>\n\t\t<slot name=\"right\">\n\t\t\t<fm-icon v-if=\"type === 'jump'\" name=\"fanhui\" class=\"rotate\" :style=\"{ color: titleColor }\" />\n\t\t\t<text v-else-if=\"type === 'normal'\" class=\"closeText\" :style=\"{ color: closeColor }\" @click=\"ctrClick\">{{ closeText }}</text>\n\t\t</slot>\n\t</div>\n</template>\n\n<style scoped>\n\t.fm-snack-bar {\n\t\tposition: fixed;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tbackground-color: #FFFFFF;\n\t\tflex-direction: row;\n\t\tpadding: 0 72px;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tmin-height: 0;\n\t}\n\n\t.title, .closeText {\n\t\tfont-size: 42px;\n\t\tfont-family: sans-serif-medium;\n\t\tfont-weight: 500;\n\t}\n\n\t.rotate {\n\t\tfont-size: 54px;\n    height: 54px;\n\t\tfont-weight: 700;\n\t\ttransform: rotate(180deg);\n\t}\n\n</style>\n\n<script>\nconst animation = weex.requireModule('animation');\nimport FmIcon from '../fm-icon';\nimport Locale from 'weex-flymeui/lib/mixins/locale';\nimport { t } from 'weex-flymeui/lib/locale';\nexport default {\n  name: 'FmSnackBar',\n  mixins: [Locale],\n  components: { FmIcon },\n  props: {\n    show: {\n      type: Boolean,\n      default: false\n    },\n    backgroundColor: {\n      type: String,\n      default: '#323232'\n    },\n    title: String,\n    titleColor: {\n      type: String,\n      default: '#FFFFFF'\n    },\n    closeText: {\n      type: String,\n      default () {\n        return t('el.common.close');\n      }\n    },\n    closeColor: {\n      type: String,\n      default: '#198DED'\n    },\n    height: {\n      type: Number,\n      default: 144\n    },\n    animation: {\n      type: Object,\n      default: () => ({\n        timingFunction: 'ease-out'\n      })\n    },\n    autoClose: {\n      type: Boolean,\n      default: true\n    },\n    stayTime: {\n      type: Number,\n      default: 3000\n    },\n    type: {\n      type: String,\n      default: 'normal'\n    },\n    clickCb: Function,\n    dismissCb: Function\n  },\n  computed: {\n    barStyle () {\n      const { height, backgroundColor } = this;\n      return {\n        backgroundColor: backgroundColor,\n        bottom: `${-height}px`,\n        height: `${height}px`\n      };\n    },\n    isNeedShow () {\n      setTimeout(() => {\n        this.appearBar(this.show);\n      }, 50);\n      return this.show;\n    }\n  },\n  data: () => ({\n    timer: null\n  }),\n  methods: {\n    appearBar (bool, duration = 150) {\n      this.isShow = bool;\n      const popupEl = this.$refs['fm-snack-bar'];\n      if (!popupEl) {\n        return;\n      }\n      animation.transition(popupEl, {\n        styles: {\n          transform: this.getTransform(this.height, bool)\n        },\n        duration,\n        delay: 0,\n        ...this.animation\n      }, () => {\n        const { autoClose, stayTime } = this;\n        if (bool && autoClose) {\n          this.timer = setTimeout(() => {\n            this.appearBar(false);\n          }, stayTime);\n        } else if (!bool) {\n          this.dismissCb && this.dismissCb();\n          this.$emit('fmSnackBarDismissed', { pos: this.pos });\n        }\n      });\n    },\n    getTransform (height, bool) {\n      bool || (height = 0);\n      return `translateY(-${height}px)`;\n    },\n    hide () {\n      if (this.timer) {\n        clearTimeout(this.timer);\n        this.timer = null;\n      }\n      this.appearBar(false);\n    },\n    ctrClick () {\n      this.clickCb && this.clickCb();\n      this.hide();\n    },\n    snackClick () {\n      const { type } = this;\n      if (type === 'jump') {\n        this.clickCb && this.clickCb();\n        this.hide();\n      }\n      this.$emit('fmSnackBarBeClicked', {});\n    }\n  }\n};\n</script>\n\n\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fmIcon = __webpack_require__(3);

var _fmIcon2 = _interopRequireDefault(_fmIcon);

var _locale = __webpack_require__(5);

var _locale2 = _interopRequireDefault(_locale);

var _locale3 = __webpack_require__(4);

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

var animation = weex.requireModule('animation');
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
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', {
    ref: "fm-snack-bar",
    staticClass: "fm-snack-bar",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.barStyle)),
    attrs: {
      "hack": _vm.isNeedShow
    },
    on: {
      "click": _vm.snackClick
    }
  }, [_vm._t("title", [_c('text', {
    staticClass: "title",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      color: _vm.titleColor
    }))
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _vm._t("right", [(_vm.type === 'jump') ? _c('fm-icon', {
    staticClass: "rotate",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      color: _vm.titleColor
    })),
    attrs: {
      "name": "fanhui"
    }
  }) : (_vm.type === 'normal') ? _c('text', {
    staticClass: "closeText",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      color: _vm.closeColor
    })),
    on: {
      "click": _vm.ctrClick
    }
  }, [_vm._v(_vm._s(_vm.closeText))]) : _vm._e()])], 2) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-81772c76", module.exports)
  }
}

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fmSnackBar = __webpack_require__(17);

var _fmSnackBar2 = _interopRequireDefault(_fmSnackBar);

var _locale = __webpack_require__(4);

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
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(152);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(153)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(155),
  /* template */
  __webpack_require__(156),
  /* scopeId */
  "data-v-47ee1270",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-checkbox/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47ee1270", Component.options)
  } else {
    hotAPI.reload("data-v-47ee1270", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(154);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("016767aa", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-47ee1270\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-47ee1270\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.fm-checkbox[data-v-47ee1270] {\n}\n.border[data-v-47ee1270] {\n  margin: 0 48px;\n  background-color: #e6e6e6;\n  height: 1px;\n}\n.checkbox-content[data-v-47ee1270] {\n  position: relative;\n  flex: 1;\n  flex-direction: row;\n  padding: 51px 96px;\n  align-items: center;\n  justify-content: space-between;\n}\n.checkbox-content[data-v-47ee1270]:active {\n  background-color: #eeeeee;\n}\n.label[data-v-47ee1270] {\n  font-family: sans-serif-medium;\n  font-weight: 500;\n  font-size: 48px;\n  line-height: 54px;\n  justify-content: center;\n}\n.checked[data-v-47ee1270] {\n  color: #198ded;\n}\n.icon-wrap[data-v-47ee1270] {\n  position: absolute;\n  right: 102px;\n  top: 0px;\n  bottom: 0px;\n  opacity: 1;\n  overflow: hidden;\n  padding: 40px 0;\n  width: 72px;\n}\n.icon[data-v-47ee1270] {\n  font-size: 72px;\n  color: #198ded;\n  font-weight: bold;\n  width: 72px;\n  height: 64px;\n  justify-content: center;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-checkbox/index.vue?b01f3cd6"],"names":[],"mappings":";AAgBA;CACA;AAEA;EACA,eAAA;EACA,0BAAA;EACA,YAAA;CACA;AAEA;EACA,mBAAA;EACA,QAAA;EACA,oBAAA;EACA,mBAAA;EACA,oBAAA;EACA,+BAAA;CACA;AAEA;EACA,0BAAA;CACA;AAEA;EACA,+BAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;EACA,wBAAA;CACA;AAEA;EACA,eAAA;CACA;AAEA;EACA,mBAAA;EACA,aAAA;EACA,SAAA;EACA,YAAA;EACA,WAAA;EACA,iBAAA;EACA,gBAAA;EACA,YAAA;CACA;AAEA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,aAAA;EACA,wBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n  <div class=\"fm-checkbox\">\n    <div class=\"checkbox-content\" @click=\"toggleChecked\">\n      <text class=\"label\"  v-if=\"$slots.default || value\" :style=\"{ color: _checked ? '#198DED': '#000000' }\">\n        <slot></slot>\n      <template v-if=\"!$slots.default\">{{ value }}</template>\n      </text>\n      <div class=\"icon-wrap\">\n        <fm-icon class=\"icon\" ref=\"fm-icon\" :style=\"{ width: isChecked ? 72 : 1 }\" name=\"wancheng\" :icon-style=\"48\" color=\"#0A73C9\" />\n      </div>\n    </div>\n    <div class=\"border\"></div>\n  </div>\n</template>\n\n<style scoped>\n  .fm-checkbox {\n  }\n\n  .border {\n    margin: 0 48px;\n    background-color: #e6e6e6;\n    height: 1px;\n  }\n\n  .checkbox-content {\n    position: relative;\n    flex: 1;\n    flex-direction: row;\n    padding: 51px 96px;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  .checkbox-content:active {\n    background-color: #eeeeee;\n  }\n\n  .label {\n    font-family: sans-serif-medium;\n    font-weight: 500;\n    font-size: 48px;\n    line-height: 54px;\n    justify-content: center;\n  }\n\n  .checked {\n    color: #198ded;\n  }\n\n  .icon-wrap {\n    position: absolute;\n    right: 102px;\n    top: 0px;\n    bottom: 0px;\n    opacity: 1;\n    overflow: hidden;\n    padding: 40px 0;\n    width: 72px;\n  }\n\n  .icon {\n    font-size: 72px;\n    color: #198ded;\n    font-weight: bold;\n    width: 72px;\n    height: 64px;\n    justify-content: center;\n  }\n</style>\n\n<script>\nconst animation = weex.requireModule('animation');\nimport FmIcon from '../fm-icon';\nexport default {\n  name: 'FmCheckbox',\n  components: { FmIcon },\n  props: {\n    value: {\n      type: String,\n      default: ''\n    },\n    checked: Boolean,\n    disabled: Boolean\n  },\n  data: () => ({\n    isChecked: false,\n    selfChecked: false\n  }),\n  computed: {\n    _checked: {\n      get () {\n        return this.isGroup\n          ? this.store.indexOf(this.value) !== -1\n          : this.selfChecked;\n      },\n      set (val) {\n        if (this.isGroup) {\n          if (val) {\n            this.isLimitExceeded = false;\n            this._checkboxGroup.max !== undefined &&\n                this.store.length >= this._checkboxGroup.max &&\n                (this.isLimitExceeded = true);\n\n            this.isLimitExceeded === false &&\n                (this.addToStore() || this.appearIcon(val));\n          } else {\n            this.isLimitExceeded = false;\n            this._checkboxGroup.min !== undefined &&\n                this.store.length <= this._checkboxGroup.min &&\n                (this.isLimitExceeded = true);\n\n            this.isLimitExceeded === false &&\n                (this.deleteFromStore() || this.appearIcon(val));\n          }\n        } else {\n          this.selfChecked = val;\n          this.appearIcon(val);\n        }\n        this.$emit('fmCheckboxChecked', { value: this.value, checked: val });\n      }\n    },\n    isGroup () {\n      let parent = this.$parent;\n      while (parent) {\n        if (parent.$options.componentName !== 'FmCheckListGroup') {\n          parent = parent.$parent;\n        } else {\n          this._checkboxGroup = parent;\n          return true;\n        }\n      }\n      return false;\n    },\n    store () {\n      return this._checkboxGroup ? this._checkboxGroup.value : this.value;\n    }\n  },\n  methods: {\n    toggleChecked () {\n      !this.disabled && (this._checked = !this._checked);\n    },\n    appearIcon (bool, duration = 150) {\n      const iconEl = this.$refs['fm-icon'];\n      if (!iconEl) {\n        return;\n      }\n      const style = bool\n        ? {\n          opacity: 1,\n          width: 72\n        }\n        : {\n          opacity: 0\n        };\n      animation.transition(\n        iconEl,\n        {\n          styles: style,\n          duration,\n          delay: 0,\n          timingFunction: 'ease-out'\n        },\n        () => {\n          this.isChecked = bool;\n        }\n      );\n    },\n    addToStore () {\n      if (Array.isArray(this.store) && this.store.indexOf(this.value) === -1) {\n        this.store.push(this.value);\n      }\n    },\n    deleteFromStore () {\n      if (Array.isArray(this.store) && this.store.indexOf(this.value) !== -1) {\n        this.store.splice(this.store.indexOf(this.value), 1);\n      }\n    }\n  },\n  created () {\n    this.isGroup;\n    this.$slots.default && (this.value = this.$slots.default[0].text);\n    this.checked &&\n        (this.addToStore() ||\n          ((this.selfChecked = true) && (this.isChecked = true)));\n    this._checked && ((this.selfChecked = true) && (this.isChecked = true));\n  }\n};\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fmIcon = __webpack_require__(3);

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
        return this.isGroup ? this.store.indexOf(this.value) !== -1 : this.selfChecked;
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
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fm-checkbox",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_c('div', {
    staticClass: "checkbox-content",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    on: {
      "click": _vm.toggleChecked
    }
  }, [(_vm.$slots.default || _vm.value) ? _c('text', {
    staticClass: "label",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      color: _vm._checked ? '#198DED' : '#000000'
    }))
  }, [_vm._t("default"), _vm._v(" "), (!_vm.$slots.default) ? [_vm._v(_vm._s(_vm.value))] : _vm._e()], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "icon-wrap",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_c('fm-icon', {
    ref: "fm-icon",
    staticClass: "icon",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      width: _vm.isChecked ? 72 : 1
    })),
    attrs: {
      "name": "wancheng",
      "icon-style": 48,
      "color": "#0A73C9"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "border",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-47ee1270", module.exports)
  }
}

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(158);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(159),
  /* template */
  __webpack_require__(160),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-check-list-group/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-417c38fa", Component.options)
  } else {
    hotAPI.reload("data-v-417c38fa", Component.options)
  }
})()}

module.exports = Component.exports


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
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fm-check-list-group",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-417c38fa", module.exports)
  }
}

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(162);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(163),
  /* template */
  __webpack_require__(164),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-action-view/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-edee1fe6", Component.options)
  } else {
    hotAPI.reload("data-v-edee1fe6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 163 */
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
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (!_vm.isWeb) ? _c('Fmactiveview', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "act": _vm.act
    }
  }) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-edee1fe6", module.exports)
  }
}

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(166)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(168),
  /* template */
  __webpack_require__(169),
  /* scopeId */
  "data-v-4cf19c5c",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-searchbar/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4cf19c5c", Component.options)
  } else {
    hotAPI.reload("data-v-4cf19c5c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(167);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("67d91b20", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4cf19c5c\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4cf19c5c\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.fm-status-bar[data-v-4cf19c5c] {\n    height: 66px;\n    width: 1080px;\n    background-color: #ffffff;\n}\n.fm-search-bar[data-v-4cf19c5c] {\n    padding: 0 48px;\n    background-color: #ffffff;\n    width: 1080px;\n    height: 144px;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom-style: solid;\n    border-bottom-width: 2px;\n    border-bottom-color: rgba(0, 0, 0, 0.1);\n}\n.search-input-wrap[data-v-4cf19c5c] {\n    flex: 1;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    padding-left: 35px;\n    height: 90px;\n    background-color: rgba(0, 0, 0, 0.05);\n    outline: none;\n    border-radius: 45px;\n}\n.search-bar-input[data-v-4cf19c5c] {\n    flex: 1;\n    height: 90px;\n    margin-left: 24px;\n    margin-right: 9px;\n    line-height: 90px;\n    font-size: 42px;\n    background-color: transparent;\n    font-family: sans-serif-medium;\n    font-weight: 500;\n    color: #616161;\n}\n.search-bar-icon[data-v-4cf19c5c] {\n    line-height: 42px;\n    height: 42px;\n    font-weight: 700;\n}\n.search-bar-back[data-v-4cf19c5c] {\n\t\tmargin-left: -18px;\n\t\tmargin-right: 30px;\n    line-height: 72px;\n    height: 72px;\n    font-weight: 700;\n}\n.search-bar-delete[data-v-4cf19c5c] {\n    width: 60px;\n    height: 60px;\n    margin-right: 15px;\n    font-weight: 700;\n    padding: 6px 5px;\n    background-color: rgba(77, 77, 77, 0.5);\n    border-radius: 30px;\n}\n.search-enter[data-v-4cf19c5c] {\n    font-family: sans-serif-medium;\n    font-weight: 500;\n    font-size: 48px;\n    line-height: 96px;\n    margin-left: 48px;\n    color: rgba(0, 0, 0, 0.4);\n    text-align: center;\n}\n.right-btn[data-v-4cf19c5c] {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 24px;\n    justify-content: center;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-searchbar/index.vue?3267b991"],"names":[],"mappings":";AAoCA;IACA,aAAA;IACA,cAAA;IACA,0BAAA;CACA;AAEA;IACA,gBAAA;IACA,0BAAA;IACA,cAAA;IACA,cAAA;IACA,oBAAA;IACA,oBAAA;IACA,+BAAA;IACA,2BAAA;IACA,yBAAA;IACA,wCAAA;CACA;AAEA;IACA,QAAA;IACA,oBAAA;IACA,oBAAA;IACA,wBAAA;IACA,mBAAA;IACA,aAAA;IACA,sCAAA;IACA,cAAA;IACA,oBAAA;CACA;AAEA;IACA,QAAA;IACA,aAAA;IACA,kBAAA;IACA,kBAAA;IACA,kBAAA;IACA,gBAAA;IACA,8BAAA;IACA,+BAAA;IACA,iBAAA;IACA,eAAA;CACA;AAEA;IACA,kBAAA;IACA,aAAA;IACA,iBAAA;CACA;AAEA;EACA,mBAAA;EACA,mBAAA;IACA,kBAAA;IACA,aAAA;IACA,iBAAA;CACA;AAEA;IACA,YAAA;IACA,aAAA;IACA,mBAAA;IACA,iBAAA;IACA,iBAAA;IACA,wCAAA;IACA,oBAAA;CACA;AAEA;IACA,+BAAA;IACA,iBAAA;IACA,gBAAA;IACA,kBAAA;IACA,kBAAA;IACA,0BAAA;IACA,mBAAA;CACA;AAEA;IACA,mBAAA;IACA,OAAA;IACA,UAAA;IACA,YAAA;IACA,wBAAA;CACA","file":"index.vue","sourcesContent":["<!-- Created by Yanjiie on 18/02/26-->\n<template>\n  <div v-if=\"show\">\n    <div class=\"fm-status-bar\" v-if=\"statusbar\" :style=\"{ backgroundColor: backgroundColor }\"></div>\n    <div class=\"fm-search-bar\" :style=\"barStyle\">\n      <slot name=\"left\" v-if=\"hasPrev\">\n        <fm-icon @click=\"onBack\" class=\"search-bar-back\" name=\"fanhui\" :icon-style=\"72\" :color=\"leftColor\"/>\n      </slot>\n        <div class=\"search-input-wrap\" :style=\"inputBackground ? { backgroundColor: inputBackground} : {}\">\n          <fm-icon class=\"search-bar-icon\" name=\"sousuo\" :icon-style=\"42\" :color=\"iconColor\" />\n          <input @blur=\"onBlur\"\n                @focus=\"onFocus\"\n                @input=\"onInput\"\n                @return=\"onSubmit\"\n                :autofocus=\"autofocus\"\n                :disabled=\"disabled\"\n                :value=\"value\"\n                ref=\"input\"\n                :type=\"inputType\"\n                :return-key-type=\"returnKeyType\"\n                :placeholder=\"placeholder\"\n                :style=\"{color: inputColor, 'placeholder-color': placeholderColor}\"\n                class=\"search-bar-input\"/>\n          <fm-icon :style=\"{ opacity: delShow ? 1 : 0 }\" class=\"search-bar-delete\" name=\"guanbi\" :icon-style=\"48\" color=\"#FFFFFF\" @click=\"delClick\" />\n          <div :style=\"{ opacity: !delShow ? 1 : 0 }\" class=\"right-btn\">\n            <slot name=\"input-right\"></slot>\n          </div>\n        </div>\n      <slot name=\"right\">\n        <text v-if=\"searchText\" class=\"search-enter\" @click=\"onSearch\" :style=\"searchTextStyle\">{{ searchText }}</text>\n      </slot>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n  .fm-status-bar {\n    height: 66px;\n    width: 1080px;\n    background-color: #ffffff;\n  }\n\n  .fm-search-bar {\n    padding: 0 48px;\n    background-color: #ffffff;\n    width: 1080px;\n    height: 144px;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom-style: solid;\n    border-bottom-width: 2px;\n    border-bottom-color: rgba(0, 0, 0, 0.1);\n  }\n\n  .search-input-wrap {\n    flex: 1;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    padding-left: 35px;\n    height: 90px;\n    background-color: rgba(0, 0, 0, 0.05);\n    outline: none;\n    border-radius: 45px;\n  }\n\n  .search-bar-input {\n    flex: 1;\n    height: 90px;\n    margin-left: 24px;\n    margin-right: 9px;\n    line-height: 90px;\n    font-size: 42px;\n    background-color: transparent;\n    font-family: sans-serif-medium;\n    font-weight: 500;\n    color: #616161;\n  }\n\n  .search-bar-icon {\n    line-height: 42px;\n    height: 42px;\n    font-weight: 700;\n  }\n\n  .search-bar-back {\n\t\tmargin-left: -18px;\n\t\tmargin-right: 30px;\n    line-height: 72px;\n    height: 72px;\n    font-weight: 700;\n  }\n\n  .search-bar-delete {\n    width: 60px;\n    height: 60px;\n    margin-right: 15px;\n    font-weight: 700;\n    padding: 6px 5px;\n    background-color: rgba(77, 77, 77, 0.5);\n    border-radius: 30px;\n  }\n\n  .search-enter {\n    font-family: sans-serif-medium;\n    font-weight: 500;\n    font-size: 48px;\n    line-height: 96px;\n    margin-left: 48px;\n    color: rgba(0, 0, 0, 0.4);\n    text-align: center;\n  }\n\n  .right-btn {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 24px;\n    justify-content: center;\n  }\n</style>\n\n<script>\nimport FmIcon from '../fm-icon';\nimport Locale from 'weex-flymeui/lib/mixins/locale';\nimport { t } from 'weex-flymeui/lib/locale';\nconst Navigator = weex.requireModule('navigator');\n\nexport default {\n  name: 'FmSearchbar',\n  mixins: [Locale],\n  components: { FmIcon },\n  props: {\n    statusbar: {\n      type: Boolean,\n      default: false\n    },\n    inputValue: {\n      type: [String, Number],\n      default: ''\n    },\n    useDefaultReturn: {\n      type: Boolean,\n      default: true\n    },\n    hasPrev: {\n      type: Boolean,\n      default: true\n    },\n    backgroundColor: {\n      type: String,\n      default: '#FFFFFF'\n    },\n    iconColor: {\n      type: String,\n      default: 'rgba(0, 0, 0, 0.4)'\n    },\n    leftColor: {\n      type: String,\n      default: 'rgba(0, 0, 0, 0.6)'\n    },\n    inputBackground: String,\n    borderStyle: {\n      type: Object,\n      default: () => ({\n        borderBottomStyle: 'solid',\n        borderBottomWidth: 2,\n        borderBottomColor: 'rgba(0, 0, 0, 0.1)'\n      })\n    },\n    placeholder: String,\n    autofocus: Boolean,\n    disabled: Boolean,\n    inputType: {\n      type: String,\n      default: 'text'\n    },\n    searchText: {\n      type: String,\n      default () {\n        return t('el.searchbar.search');\n      }\n    },\n    searchColor: {\n      type: String,\n      default: 'rgba(0, 0, 0, 0.4)'\n    },\n    searchHighlightColor: {\n      type: String,\n      default: '#198DED'\n    },\n    searchTextSize: {\n      type: Number,\n      default: 48\n    },\n    returnKeyType: {\n      type: String,\n      default: 'search'\n    },\n    placeholderColor: {\n      type: String,\n      default: 'rgba(0, 0, 0, 0.4)'\n    },\n    inputColor: {\n      type: String,\n      default: '#616161'\n    },\n    show: {\n      type: Boolean,\n      default: true\n    }\n  },\n  watch: {\n    inputValue (val) {\n      this.value = val;\n    }\n  },\n  data: () => ({\n    isFocus: false,\n    value: ''\n  }),\n  computed: {\n    delShow () {\n      return this.isFocus && this.value;\n    },\n    barStyle () {\n      const style = {\n        borderBottomStyle: 'solid',\n        borderBottomWidth: 2,\n        borderBottomColor: 'rgba(0, 0, 0, 0.1)'\n      };\n      Object.assign(style, this.borderStyle);\n      style.backgroundColor = this.backgroundColor;\n      return style;\n    },\n    searchTextStyle () {\n      const { value, searchColor, searchHighlightColor, searchTextSize } = this;\n      return {\n        color: value ? searchHighlightColor : searchColor,\n        fontSize: searchTextSize\n      };\n    }\n  },\n  methods: {\n    onBack (e) {\n      const self = this;\n      if (self.useDefaultReturn) {\n        Navigator.pop({}, e => {\n        });\n      }\n      self.$emit('fmSearchbarleftBtnClicked', {});\n    },\n    delClick (e) {\n      this.value = '';\n    },\n    onInput (e) {\n      this.value = e.value;\n      this.$emit('input', e);\n    },\n    onFocus (e) {\n      this.isFocus = true;\n      this.$emit('focus', e);\n    },\n    onBlur (e) {\n      this.isFocus = false;\n      this.$emit('blur', e);\n    },\n    focus () {\n      this.$refs.input.focus();\n    },\n    blur () {\n      this.$refs.input.blur();\n    },\n    onSubmit (e) {\n      this.$emit('fmSearchbarSubmit', { value: this.value });\n    },\n    onSearch (e) {\n      this.$emit('fmSearchbarSubmit', { value: this.value });\n    },\n    setSelectionRange (start, end) {\n      this.$refs.input.setSelectionRange(start, end);\n    },\n    getEditSelectionRange (callback) {\n      this.$refs.input.getEditSelectionRange(callback);\n    },\n    setValue (value) {\n      this.value = value;\n    }\n  },\n  mounted () {\n    this.value = this.inputValue || '';\n  }\n};\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fmIcon = __webpack_require__(3);

var _fmIcon2 = _interopRequireDefault(_fmIcon);

var _locale = __webpack_require__(5);

var _locale2 = _interopRequireDefault(_locale);

var _locale3 = __webpack_require__(4);

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
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', [(_vm.statusbar) ? _c('div', {
    staticClass: "fm-status-bar",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      backgroundColor: _vm.backgroundColor
    }))
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "fm-search-bar",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.barStyle))
  }, [(_vm.hasPrev) ? _vm._t("left", [_c('fm-icon', {
    staticClass: "search-bar-back",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "name": "fanhui",
      "icon-style": 72,
      "color": _vm.leftColor
    },
    on: {
      "click": _vm.onBack
    }
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "search-input-wrap",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.inputBackground ? {
      backgroundColor: _vm.inputBackground
    } : {}))
  }, [_c('fm-icon', {
    staticClass: "search-bar-icon",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "name": "sousuo",
      "icon-style": 42,
      "color": _vm.iconColor
    }
  }), _vm._v(" "), _c('input', {
    ref: "input",
    staticClass: "search-bar-input",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      color: _vm.inputColor,
      'placeholder-color': _vm.placeholderColor
    })),
    attrs: {
      "autofocus": _vm.autofocus,
      "disabled": _vm.disabled,
      "type": _vm.inputType,
      "return-key-type": _vm.returnKeyType,
      "placeholder": _vm.placeholder
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "blur": _vm.onBlur,
      "focus": _vm.onFocus,
      "input": _vm.onInput,
      "return": _vm.onSubmit
    }
  }), _vm._v(" "), _c('fm-icon', {
    staticClass: "search-bar-delete",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      opacity: _vm.delShow ? 1 : 0
    })),
    attrs: {
      "name": "guanbi",
      "icon-style": 48,
      "color": "#FFFFFF"
    },
    on: {
      "click": _vm.delClick
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "right-btn",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      opacity: !_vm.delShow ? 1 : 0
    }))
  }, [_vm._t("input-right")], 2)], 1), _vm._v(" "), _vm._t("right", [(_vm.searchText) ? _c('text', {
    staticClass: "search-enter",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.searchTextStyle)),
    on: {
      "click": _vm.onSearch
    }
  }, [_vm._v(_vm._s(_vm.searchText))]) : _vm._e()])], 2)]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4cf19c5c", module.exports)
  }
}

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(171);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(172)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(174),
  /* template */
  __webpack_require__(175),
  /* scopeId */
  "data-v-665f9fc0",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-titlebar/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-665f9fc0", Component.options)
  } else {
    hotAPI.reload("data-v-665f9fc0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(173);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("430b124e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-665f9fc0\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-665f9fc0\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.fm-status-bar[data-v-665f9fc0] {\n  height: 66px;\n  width: 1080px;\n}\n.fm-title-bar[data-v-665f9fc0] {\n  padding-left: 48px;\n  width: 1080px;\n  height: 144px;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.title-bar-back[data-v-665f9fc0] {\n  margin-left: -18px;\n  margin-right: 45px;\n  line-height: 72px;\n  height: 72px;\n  font-weight: 700;\n}\n.title-wrap[data-v-665f9fc0] {\n  flex: 1;\n}\n.title-text[data-v-665f9fc0] {\n  flex: 1;\n  text-overflow: ellipsis;\n  lines: 1;\n  font-family: sans-serif-medium;\n  font-weight: 500;\n  font-size: 48px;\n  line-height: 57px;\n  color: rgba(0, 0, 0, 0.6);\n}\n.btn-icon[data-v-665f9fc0] {\n  margin-right: 48px;\n  color: #198DED;\n  line-height: 72px;\n  height: 72px;\n}\n.btn-text[data-v-665f9fc0] {\n  margin-right: 48px;\n  font-family: sans-serif-medium;\n  font-weight: 500;\n  font-size: 48px;\n  line-height: 57px;\n  color: #198DED;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-titlebar/index.vue?802db8ba"],"names":[],"mappings":";AAuBA;EACA,aAAA;EACA,cAAA;CACA;AAEA;EACA,mBAAA;EACA,cAAA;EACA,cAAA;EACA,oBAAA;EACA,oBAAA;EACA,+BAAA;CACA;AAEA;EACA,mBAAA;EACA,mBAAA;EACA,kBAAA;EACA,aAAA;EACA,iBAAA;CACA;AAEA;EACA,QAAA;CACA;AAEA;EACA,QAAA;EACA,wBAAA;EACA,SAAA;EACA,+BAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;EACA,0BAAA;CACA;AAEA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;EACA,aAAA;CACA;AAEA;EACA,mBAAA;EACA,+BAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;EACA,eAAA;CACA","file":"index.vue","sourcesContent":["<template>\n  <div v-if=\"show\">\n    <div class=\"fm-status-bar\" v-if=\"statusbar\" :style=\"{ backgroundColor: backgroundColor }\"></div>\n    <div class=\"fm-title-bar\" :style=\"barStyle\">\n      <slot name=\"left\" v-if=\"hasPrev\">\n        <fm-icon @click=\"onBack\" class=\"title-bar-back\" name=\"fanhui\" :icon-style=\"72\" :color=\"leftColor\" />\n      </slot>\n      <div class=\"title-wrap\">\n        <slot name=\"middle\">\n          <text class=\"title-text\" :style=\"{ color: titleColor }\">{{ title }}</text>\n        </slot>\n      </div>\n      <slot name=\"right\">\n        <div v-for=\"(item, idx) in btns\" :key=\"idx\">\n          <fm-icon class=\"btn-icon\" v-if=\"item.type === 'icon'\" :name=\"item.value\" :style=\"item.color ? { color:item.color } : {}\" :icon-style=\"72\" @click=\"rightBtnClick(idx, item)\"/>\n          <text class=\"btn-text\" v-else :style=\"item.color ? { color:item.color } : {}\" @click=\"rightBtnClick(idx, item)\">{{ item.value }}</text>\n        </div>\n      </slot>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n  .fm-status-bar {\n    height: 66px;\n    width: 1080px;\n  }\n\n  .fm-title-bar {\n    padding-left: 48px;\n    width: 1080px;\n    height: 144px;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  .title-bar-back {\n    margin-left: -18px;\n    margin-right: 45px;\n    line-height: 72px;\n    height: 72px;\n    font-weight: 700;\n  }\n\n  .title-wrap {\n    flex: 1;\n  }\n\n  .title-text {\n    flex: 1;\n    text-overflow: ellipsis;\n    lines: 1;\n    font-family: sans-serif-medium;\n    font-weight: 500;\n    font-size: 48px;\n    line-height: 57px;\n    color: rgba(0, 0, 0, 0.6);\n  }\n\n  .btn-icon {\n    margin-right: 48px;\n    color: #198DED;\n    line-height: 72px;\n    height: 72px;\n  }\n\n  .btn-text {\n    margin-right: 48px;\n    font-family: sans-serif-medium;\n    font-weight: 500;\n    font-size: 48px;\n    line-height: 57px;\n    color: #198DED;\n  }\n</style>\n\n<script>\nimport FmIcon from '../fm-icon';\nimport Locale from 'weex-flymeui/lib/mixins/locale';\nimport { t } from 'weex-flymeui/lib/locale';\nconst Navigator = weex.requireModule('navigator');\n\nexport default {\n  name: 'FmTitlebar',\n  mixins: [Locale],\n  components: { FmIcon },\n  props: {\n    title: {\n      type: String,\n      default () {\n        return t('el.titlebar.title');\n      }\n    },\n    titleColor: {\n      type: String,\n      default: 'rgba(0, 0, 0, 0.6)'\n    },\n    statusbar: {\n      type: Boolean,\n      default: false\n    },\n    useDefaultReturn: {\n      type: Boolean,\n      default: true\n    },\n    hasPrev: {\n      type: Boolean,\n      default: true\n    },\n    borderStyle: {\n      type: Object,\n      default: () => ({\n        borderBottomStyle: 'solid',\n        borderBottomWidth: 2,\n        borderBottomColor: 'rgba(0, 0, 0, 0.1)'\n      })\n    },\n    backgroundColor: {\n      type: String,\n      default: '#FFFFFF'\n    },\n    leftColor: {\n      type: String,\n      default: 'rgba(0, 0, 0, 0.6)'\n    },\n    rightBtns: [Object, Array],\n    rightText: String,\n    show: {\n      type: Boolean,\n      default: true\n    }\n  },\n  computed: {\n    btns () {\n      const { rightBtns, rightText } = this;\n      let btns = [];\n      if (Array.isArray(rightBtns)) {\n        btns = btns.concat(rightBtns.slice(0, 3));\n      } else if (Object.prototype.toString.call(rightBtns).slice(8, -1).toLowerCase() === 'object') {\n        btns.push(rightBtns);\n      } else if (rightText) {\n        btns.push({ type: 'text', value: rightText });\n      }\n      return btns;\n    },\n    barStyle () {\n      const style = {\n        borderBottomStyle: 'solid',\n        borderBottomWidth: 2,\n        borderBottomColor: 'rgba(0, 0, 0, 0.1)',\n        paddingRight: this.rightBtns ? 0 : 48\n      };\n      Object.assign(style, this.borderStyle);\n      style.backgroundColor = this.backgroundColor;\n      return style;\n    }\n  },\n  methods: {\n    onBack (e) {\n      const self = this;\n      if (self.useDefaultReturn) {\n        Navigator.pop({}, e => {\n        });\n      }\n      self.$emit('fmTitlebarLeftBtnClicked', {});\n    },\n    rightBtnClick (idx, item) {\n      this.$emit('fmTitlebarRightBtnClicked', { idx: idx, value: item });\n    }\n  }\n};\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fmIcon = __webpack_require__(3);

var _fmIcon2 = _interopRequireDefault(_fmIcon);

var _locale = __webpack_require__(5);

var _locale2 = _interopRequireDefault(_locale);

var _locale3 = __webpack_require__(4);

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
      default: function _default() {
        return (0, _locale3.t)('el.titlebar.title');
      }
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
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', [(_vm.statusbar) ? _c('div', {
    staticClass: "fm-status-bar",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      backgroundColor: _vm.backgroundColor
    }))
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "fm-title-bar",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.barStyle))
  }, [(_vm.hasPrev) ? _vm._t("left", [_c('fm-icon', {
    staticClass: "title-bar-back",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "name": "fanhui",
      "icon-style": 72,
      "color": _vm.leftColor
    },
    on: {
      "click": _vm.onBack
    }
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "title-wrap",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_vm._t("middle", [_c('text', {
    staticClass: "title-text",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      color: _vm.titleColor
    }))
  }, [_vm._v(_vm._s(_vm.title))])])], 2), _vm._v(" "), _vm._t("right", _vm._l((_vm.btns), function(item, idx) {
    return _c('div', {
      key: idx,
      staticStyle: _vm.$processStyle(undefined),
      style: (_vm.$processStyle(undefined))
    }, [(item.type === 'icon') ? _c('fm-icon', {
      staticClass: "btn-icon",
      staticStyle: _vm.$processStyle(undefined),
      style: (_vm.$processStyle(item.color ? {
        color: item.color
      } : {})),
      attrs: {
        "name": item.value,
        "icon-style": 72
      },
      on: {
        "click": function($event) {
          _vm.rightBtnClick(idx, item)
        }
      }
    }) : _c('text', {
      staticClass: "btn-text",
      staticStyle: _vm.$processStyle(undefined),
      style: (_vm.$processStyle(item.color ? {
        color: item.color
      } : {})),
      on: {
        "click": function($event) {
          _vm.rightBtnClick(idx, item)
        }
      }
    }, [_vm._v(_vm._s(item.value))])], 1)
  }))], 2)]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-665f9fc0", module.exports)
  }
}

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(177);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(178),
  /* template */
  __webpack_require__(189),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-multi-check-group/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7670d617", Component.options)
  } else {
    hotAPI.reload("data-v-7670d617", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fmMultiCheckCell = __webpack_require__(18);

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
/* 179 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(180)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(182),
  /* template */
  __webpack_require__(188),
  /* scopeId */
  "data-v-3e6c11c0",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-multi-check-cell/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e6c11c0", Component.options)
  } else {
    hotAPI.reload("data-v-3e6c11c0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(181);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("6c1051da", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3e6c11c0\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3e6c11c0\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.check-cell-wrap[data-v-3e6c11c0] {\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n}\n.check-cell-wrap[data-v-3e6c11c0]:active {\n  background-color: #eeeeee;\n}\n.right[data-v-3e6c11c0] {\n  width: 24px;\n  height: 24px;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-multi-check-cell/index.vue?2192434a"],"names":[],"mappings":";AAYA;EACA,oBAAA;EACA,+BAAA;EACA,oBAAA;EACA,gBAAA;CACA;AAEA;EACA,0BAAA;CACA;AAEA;EACA,YAAA;EACA,aAAA;CACA","file":"index.vue","sourcesContent":["<template>\n  <cell class=\"check-cell-wrap\" @longpress=\"onLongpress\" @click=\"onClick\" ripple=\"normal\">\n    <div class=\"wrapper\" ref=\"wrapper\">\n      <slot></slot>\n    </div>\n    <div class=\"right\">\n      <check-icon :show=\"checking\" :checked=\"_selected\" :disabled=\"disabled\"></check-icon>\n    </div>\n  </cell>\n</template>\n\n<style scoped>\n  .check-cell-wrap {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 20px;\n  }\n\n  .check-cell-wrap:active {\n    background-color: #eeeeee;\n  }\n\n  .right {\n    width: 24px;\n    height: 24px;\n  }\n</style>\n\n<script>\nconst dom = weex.requireModule('dom');\nimport CheckIcon from './check-icon.vue';\n\nexport default {\n  name: 'FmMultiCheckCell',\n  components: { CheckIcon },\n  props: {\n    identity: {\n      type: [String, Object, Number, Array],\n      required: true\n    },\n    disabled: {\n      type: Boolean,\n      default: false\n    }\n  },\n  computed: {\n    _selected: {\n      get () {\n        return this.store.indexOf(this.identity) !== -1;\n      },\n      set (val) {\n        if (val) {\n          this.addToStore();\n        } else {\n          this.deleteFromStore();\n        }\n      }\n    },\n    isGroup () {\n      let parent = this.$parent;\n      while (parent) {\n        if (parent.$options.componentName !== 'FmM\bultiCheckGroup') {\n          parent = parent.$parent;\n        } else {\n          this._group = parent;\n          return true;\n        }\n      }\n      return false;\n    },\n    checking () {\n      return this._group.checking;\n    },\n    store () {\n      return this._group.value;\n    }\n  },\n  methods: {\n    onClick (e) {\n      if (this._group.checking && !this.disabled) {\n        this.toggleSelected();\n      }\n    },\n    toggleSelected () {\n      !this.disabled && (this._selected = !this._selected);\n    },\n    onLongpress (e) {\n      !this._group.checking &&\n          (this._group.checking = true) &&\n          !this.disabled &&\n          (this._selected = true);\n    },\n    addToStore () {\n      const { identity } = this;\n      if (Array.isArray(this.store) && this.store.indexOf(identity) === -1) {\n        this.store.push(identity);\n      }\n    },\n    deleteFromStore () {\n      const { identity } = this;\n      if (Array.isArray(this.store) && this.store.indexOf(identity) !== -1) {\n        this.store.splice(this.store.indexOf(identity), 1);\n      }\n    }\n  },\n  created () {\n    if (!this.isGroup) {\n      throw Error('fm-multi-check-cell must be used in fm-multi-check-group !');\n    }\n  }\n};\n</script>\n\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkIcon = __webpack_require__(183);

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
        return this.store.indexOf(this.identity) !== -1;
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
/* 183 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(184)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(186),
  /* template */
  __webpack_require__(187),
  /* scopeId */
  "data-v-00ad7ec0",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-multi-check-cell/check-icon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] check-icon.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-00ad7ec0", Component.options)
  } else {
    hotAPI.reload("data-v-00ad7ec0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(185);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("93567d90", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-00ad7ec0\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./check-icon.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-00ad7ec0\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./check-icon.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.animate-wrap[data-v-00ad7ec0] {\n  width: 24px;\n  height: 24px;\n}\n.unchecked[data-v-00ad7ec0] {\n  width: 24px;\n  height: 24px;\n}\n.checked[data-v-00ad7ec0] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 24px;\n  height: 24px;\n  transform: scale(0);\n  background-color: #ffffff;\n  border-radius: 12px;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-multi-check-cell/check-icon.vue?7ced5edf"],"names":[],"mappings":";AAgBA;EACA,YAAA;EACA,aAAA;CACA;AAEA;EACA,YAAA;EACA,aAAA;CACA;AAEA;EACA,mBAAA;EACA,QAAA;EACA,OAAA;EACA,YAAA;EACA,aAAA;EACA,oBAAA;EACA,0BAAA;EACA,oBAAA;CACA","file":"check-icon.vue","sourcesContent":["<template>\n  <div class=\"check-icon\">\n    <div class=\"animate-wrap\" :hack=\"isNeedShow\" ref=\"animate-wrap\" :style=\"wrapStyle\">\n      <image\n        class=\"unchecked\"\n        :src=\"bgImg\" />\n      <image \n        class=\"checked\"\n        :src=\"getCheckedImg\" \n        ref=\"check-icon\"\n        :watch=\"isNeedChecked\" />\n    </div>\n  </div>\n</template>\n\n<style scoped>\n  .animate-wrap {\n    width: 24px;\n    height: 24px;\n  }\n\n  .unchecked {\n    width: 24px;\n    height: 24px;\n  }\n\n  .checked {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 24px;\n    height: 24px;\n    transform: scale(0);\n    background-color: #ffffff;\n    border-radius: 12px;\n  }\n</style>\n\n<script>\nimport FmIcon from '../fm-icon';\nconst animation = weex.requireModule('animation');\nexport default {\n  components: { FmIcon },\n  props: {\n    show: {\n      type: Boolean,\n      default: false\n    },\n    checked: {\n      type: Boolean,\n      default: false\n    },\n    bgImg: {\n      type: String,\n      default:\n          'http://design.flyme.cn/weexui/assets/mz_btn_check_button_square_off.png'\n    },\n    checkedImg: {\n      type: String,\n      default:\n          'http://design.flyme.cn/weexui/assets/mz_btn_check_button_square_on.png'\n    },\n    checkedDisableImg: {\n      type: String,\n      default:\n          'http://design.flyme.cn/weexui/assets/mz_btn_check_button_square_on_disable.png'\n    },\n    disabled: {\n      type: Boolean,\n      default: false\n    }\n  },\n  watch: {\n    checked (bool) {\n      this.appearChecked(bool);\n    }\n  },\n  data: () => ({}),\n  computed: {\n    getCheckedImg () {\n      const { disabled, checkedImg, checkedDisableImg } = this;\n      return disabled ? checkedDisableImg : checkedImg;\n    },\n    wrapStyle () {\n      return this.show\n        ? {\n          opacity: 1\n        }\n        : {\n          opacity: 0,\n          transform: 'rotateX(90deg)'\n        };\n    },\n    checkedStyle () {\n      return this.checked\n        ? {\n          opacity: 1\n        }\n        : {\n          opacity: 0\n        };\n    },\n    isNeedShow () {\n      this.appear(this.show);\n    },\n    isNeedChecked () {\n      setTimeout(() => {\n        this.appearChecked(this.checked);\n      }, 50);\n    }\n  },\n  methods: {\n    appear (bool, duration = 200) {\n      const animateEl = this.$refs['animate-wrap'];\n      if (!animateEl || !bool) {\n        return;\n      }\n      const style = {\n        transform: 'rotateX(0deg)'\n      };\n      animation.transition(\n        animateEl,\n        {\n          styles: style,\n          duration,\n          delay: 0,\n          timingFunction: 'ease-out'\n        },\n        () => {}\n      );\n    },\n    appearChecked (bool, duration = 30) {\n      const animateEl = this.$refs['check-icon'];\n      if (!animateEl) {\n        return;\n      }\n      const style = bool\n        ? {\n          transform: 'scale(1)'\n        }\n        : {\n          transform: 'scale(0)'\n        };\n      animation.transition(\n        animateEl,\n        {\n          styles: style,\n          duration,\n          delay: 0,\n          timingFunction: 'ease-out'\n        },\n        () => {}\n      );\n    }\n  }\n};\n</script>\n\n\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fmIcon = __webpack_require__(3);

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
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "check-icon",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_c('div', {
    ref: "animate-wrap",
    staticClass: "animate-wrap",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.wrapStyle)),
    attrs: {
      "hack": _vm.isNeedShow
    }
  }, [_c('image', {
    staticClass: "unchecked",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "src": _vm.bgImg
    }
  }), _vm._v(" "), _c('image', {
    ref: "check-icon",
    staticClass: "checked",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "src": _vm.getCheckedImg,
      "watch": _vm.isNeedChecked
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-00ad7ec0", module.exports)
  }
}

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('cell', {
    staticClass: "check-cell-wrap",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "ripple": "normal"
    },
    on: {
      "longpress": _vm.onLongpress,
      "click": _vm.onClick
    }
  }, [_c('div', {
    ref: "wrapper",
    staticClass: "wrapper",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
    staticClass: "right",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_c('check-icon', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "show": _vm.checking,
      "checked": _vm._selected,
      "disabled": _vm.disabled
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3e6c11c0", module.exports)
  }
}

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    ref: "group",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7670d617", module.exports)
  }
}

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(191);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(192)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(194),
  /* template */
  __webpack_require__(195),
  /* scopeId */
  "data-v-fb2a1758",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-rcy-check/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fb2a1758", Component.options)
  } else {
    hotAPI.reload("data-v-fb2a1758", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(193);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("dab637fc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-fb2a1758\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-fb2a1758\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.cell[data-v-fb2a1758] {\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n  width: 360px;\n  height: 92px;\n}\n.check-wrap[data-v-fb2a1758] {\n  width: 24px;\n  height: 24px;\n}\n.unchecked[data-v-fb2a1758] {\n  width: 24px;\n  height: 24px;\n}\n.checked[data-v-fb2a1758] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 24px;\n  height: 24px;\n  transform: scale(0);\n  border-radius: 12px;\n}\n.loading[data-v-fb2a1758] {\n  justify-content: center;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-rcy-check/index.vue?40005bbf"],"names":[],"mappings":";AA8CA;EACA,oBAAA;EACA,+BAAA;EACA,oBAAA;EACA,gBAAA;EACA,aAAA;EACA,aAAA;CACA;AAEA;EACA,YAAA;EACA,aAAA;CACA;AAEA;EACA,YAAA;EACA,aAAA;CACA;AAEA;EACA,mBAAA;EACA,QAAA;EACA,OAAA;EACA,YAAA;EACA,aAAA;EACA,oBAAA;EACA,oBAAA;CACA;AAEA;EACA,wBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n  <recycle-list\n    ref=\"rcy\"\n    template-key=\"type\"\n    alias=\"item\"\n    index=\"i\"\n    append='tree'\n    @loadmore=\"$onLoadMore()\"\n    showScrollbar=\"true\" style='width:360px'\n    @mlongclick=\"$onCellLongpress\"\n    for=\"(item, i) in dataSource\">\n\n    <cell-slot template-type=\"check-cell\" :itemId=\"item.itemId\" @click=\"$onCellCheck(item, i)\" ripple=\"normal\">\n      <div>\n        <div class=\"cell\">\n          <!-- Content start -->\n          <div class=\"content\">\n            <text>{{ item.itemId }}</text>\n            <text v-once :a=\"i\">{{ i }}</text>\n          </div>\n          <!-- Content end -->\n\n          <!-- Right circle start -->\n          <div class=\"check-wrap\" v-if=\"item.checking\">\n            <image\n              class=\"unchecked\"\n              src=\"http://design.flyme.cn/weexui/assets/mz_btn_check_button_square_off.png\" />\n            <image\n              class=\"checked\"\n              v-if=\"item.checked\"\n              :src=\"item.disabled ? 'http://design.flyme.cn/weexui/assets/mz_btn_check_button_square_on_disable.png' : 'http://design.flyme.cn/weexui/assets/mz_btn_check_button_square_on.png'\"\n            />\n          </div>\n          <!-- Right circle end -->\n        </div>\n      </div>\n    </cell-slot>\n\n    <loading class=\"loading\" @loading=\"onloading\" display=\"hide\">\n      <text class=\"indicator\" ref=\"loadText\">正在加载中 ..</text>\n    </loading>\n\n  </recycle-list>\n</template>\n\n<style scoped>\n  .cell {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 20px;\n    width: 360px;\n    height: 92px;\n  }\n\n  .check-wrap {\n    width: 24px;\n    height: 24px;\n  }\n\n  .unchecked {\n    width: 24px;\n    height: 24px;\n  }\n\n  .checked {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 24px;\n    height: 24px;\n    transform: scale(0);\n    border-radius: 12px;\n  }\n\n  .loading {\n    justify-content: center;\n  }\n</style>\n\n<script>\nexport default {\n  props: {\n    // List dataSource\n    dataSource: {\n      type: Array,\n      default: () => []\n    },\n    // Custom load data function\n    loadData: Function\n  },\n  data () {\n    return {\n      // Is checkind state\n      checking: false,\n      // Is load end\n      end: false\n    };\n  },\n  computed: {\n    recycleList () {\n      return this.$refs.rcy;\n    }\n  },\n  methods: {\n    /*\n       * InSide Function\n       */\n    // Handle cell be longpress\n    $onCellLongpress (e) {\n      if (!this.checking) {\n        const index = e.index;\n        const tmp = [];\n        this.recycleList.getListDataSize(res => {\n          this.checking = true;\n          this.recycleList.resetLoadmore();\n          this.recycleList.setPullLoadEnable(false);\n          for (let i = 0; i < res; i++) {\n            this.dataSource[i].checking = this.checking;\n            tmp.push(this.dataSource[i]);\n          }\n          tmp[index].checked = true;\n          this.dataSource = tmp;\n          this.recycleList.setListData(this.dataSource);\n          this.$emit('fmRcyCheckStateChange', true);\n        });\n      }\n    },\n    // Handle cell be click\n    $onCellCheck (item, i) {\n      if (item.checking) {\n        item.checked = !item.checked;\n        this.dataSource[i] = item;\n        this.recycleList.updateData(this.dataSource[i], i);\n        this.$emit('fmRcyCheckValueChange', this.dataSource);\n      } else {\n        this.$emit('fmRcyCheckCellBeClick', { value: item, index: i });\n      }\n    },\n    // Handle list loadmore, is a js hook\n    $onLoadMore () {\n      if (!this.checking && !this.end) {\n        if (this.loadData && typeof this.loadData === 'function') { this.loadData(); }\n      }\n      if (!this.checked) {\n        this.recycleList.setLoadingDisplay('hide');\n        this.recycleList.setPullLoadEnable(false);\n      } else if (!this.end) {\n        setTimeout(() => {\n          this.recycleList.setLoadingDisplay('hide');\n          this.recycleList.setPullLoadEnable(true);\n          this.recycleList.resetLoadmore();\n        }, 400);\n      }\n    },\n\n    /*\n       * OutSide Function\n       */\n    // Quit checking model if this.checking is true, will emit @fmRcyCheckFinish Event.\n    finish () {\n      if (this.checking) {\n        this.recycleList.getListDataSize(res => {\n          const tmp = [];\n          const checkList = [];\n          const checkIndex = [];\n          this.checking = false;\n          this.recycleList.setPullLoadEnable(true);\n          this.recycleList.resetLoadmore();\n          for (let i = 0; i < res; i++) {\n            this.dataSource[i].checking = this.checking;\n            this.dataSource[i].checked && (checkList.push(this.dataSource[i])) && (checkIndex.push(i));\n            tmp.push(this.dataSource[i]);\n          }\n          this.dataSource = tmp;\n          this.recycleList.setListData(this.dataSource);\n          this.$emit('fmRcyCheckFinish', { indexs: checkIndex, values: checkList });\n          this.$emit('fmRcyCheckStateChange', false);\n        });\n      }\n    },\n    // Toggle all item's checked state when in checking Model, will emit @fmRcyCheckValueChange Event.\n    toggleAll (bool) {\n      if (this.checking) {\n        const tmp = [];\n        this.recycleList.getListDataSize(res => {\n          for (let i = 0; i < res; i++) {\n            this.dataSource[i].checked = bool;\n            tmp.push(this.dataSource[i]);\n          }\n          this.dataSource = tmp;\n          this.recycleList.setListData(this.dataSource);\n          this.$emit('fmRcyCheckValueChange', this.dataSource);\n        });\n      }\n    },\n    // Append data at this.dataSource and append item at recycle-list.\n    appendData (data) {\n      this.dataSource = this.dataSource.concat(data);\n      this.recycleList.appendData(data);\n    },\n    // Remove data from this.dataSource and remove item from recycle-list.\n    removeData (array) {\n      this.dataSource = this.dataSource.filter((value, index) => {\n        return array.indexOf(index) < 0;\n      });\n      this.recycleList.removeData(array);\n      this.$emit('fmRcyCheckValueChange', this.dataSource);\n    },\n    // When this.loadData function complete, call this function to reset loading state.\n    resetLoading () {\n      this.recycleList.setLoadingDisplay('hide');\n    },\n    // Set loading no more data Tip and change loading state.\n    loadingEnd (tipStr) {\n      this.end = true;\n      this.$refs.loadText.setAttr('value', tipStr, false);\n      setTimeout(() => {\n        this.recycleList.setLoadingDisplay('hide');\n        this.recycleList.setPullLoadEnable(true);\n        this.recycleList.resetLoadmore();\n      }, 400);\n    },\n    // Reset loding, make it can load more again.\n    resetLoadMore () {\n      this.end = true;\n      this.recycleList.setPullLoadEnable(true);\n      this.recycleList.resetLoadmore();\n    }\n  }\n};\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 194 */
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
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('recycle-list', {
    ref: "rcy",
    staticStyle: _vm.$processStyle({
      "width": "360px"
    }),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "template-key": "type",
      "alias": "item",
      "index": "i",
      "append": "tree",
      "showScrollbar": "true",
      "for": "(item, i) in dataSource"
    },
    on: {
      "loadmore": function($event) {
        _vm.$onLoadMore()
      },
      "mlongclick": _vm.$onCellLongpress
    }
  }, [_c('cell-slot', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "template-type": "check-cell",
      "itemId": _vm.item.itemId,
      "ripple": "normal"
    },
    on: {
      "click": function($event) {
        _vm.$onCellCheck(_vm.item, _vm.i)
      }
    }
  }, [_c('div', [_c('div', {
    staticClass: "cell",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_c('div', {
    staticClass: "content",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_c('text', [_vm._v(_vm._s(_vm.item.itemId))]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), (_vm.item.checking) ? _c('div', {
    staticClass: "check-wrap",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_c('image', {
    staticClass: "unchecked",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "src": "http://design.flyme.cn/weexui/assets/mz_btn_check_button_square_off.png"
    }
  }), _vm._v(" "), (_vm.item.checked) ? _c('image', {
    staticClass: "checked",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "src": _vm.item.disabled ? 'http://design.flyme.cn/weexui/assets/mz_btn_check_button_square_on_disable.png' : 'http://design.flyme.cn/weexui/assets/mz_btn_check_button_square_on.png'
    }
  }) : _vm._e()]) : _vm._e()])])]), _vm._v(" "), _c('loading', {
    staticClass: "loading",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "display": "hide"
    },
    on: {
      "loading": _vm.onloading
    }
  }, [_c('text', {
    ref: "loadText",
    staticClass: "indicator",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_vm._v("正在加载中 ..")])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "a": _vm.i
    }
  }, [_vm._v(_vm._s(_vm.i))])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fb2a1758", module.exports)
  }
}

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(197);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(198)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(200),
  /* template */
  __webpack_require__(206),
  /* scopeId */
  "data-v-d7ab306c",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-simple-list/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d7ab306c", Component.options)
  } else {
    hotAPI.reload("data-v-d7ab306c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(199);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("1ac5d268", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-d7ab306c\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-d7ab306c\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.list-wrap[data-v-d7ab306c] {\n  width: 1080px;\n}\n.title-wrap[data-v-d7ab306c] {\n  flex-direction: row;\n  padding: 27px 49px;\n  justify-content: space-between;\n}\n.title-text[data-v-d7ab306c] {\n  font-family: sans-serif-medium;\n  font-weight: 500;\n  font-size: 36px;\n  line-height: 54px;\n}\n.title-rightBtn[data-v-d7ab306c] {\n  font-family: sans-serif-medium;\n  font-weight: 500;\n  font-size: 36px;\n  line-height: 54px;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-simple-list/index.vue?50baeb08"],"names":[],"mappings":";AAwBA;EACA,cAAA;CACA;AAEA;EACA,oBAAA;EACA,mBAAA;EACA,+BAAA;CACA;AAEA;EACA,+BAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;CACA;AAEA;EACA,+BAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;CACA","file":"index.vue","sourcesContent":["<!-- Created by Yanjiie on 2018/3/5. -->\n<template>\n  <div class=\"list-wrap\">\n    <div class=\"title-wrap\">\n      <slot name=\"left\">\n        <text class=\"title-text\" :style=\"{ color: titleColor }\">{{ title }}</text>\n      </slot>\n      <slot name=\"right\">\n        <text class=\"title-rightBtn\" :style=\"{ color: rightColor }\" @click=\"btnClicked\">{{ rightText }}</text>\n      </slot>\n    </div>\n    <div class=\"item-wrap\">\n      <item v-for=\"(item, index) in list\"\n            v-bind=\"Object.assign({}, customStyles, item)\"\n            :key=\"index\"\n            :index=\"index\"\n            @select=\"onSelect(index)\"\n            @leftClicked=\"leftIconClicked(index)\"\n            @rightClicked=\"rightIconClicked(index)\" />\n    </div>\n  </div>\n</template>\n\n<style scoped>\n  .list-wrap {\n    width: 1080px;\n  }\n\n  .title-wrap {\n    flex-direction: row;\n    padding: 27px 49px;\n    justify-content: space-between;\n  }\n\n  .title-text {\n    font-family: sans-serif-medium;\n    font-weight: 500;\n    font-size: 36px;\n    line-height: 54px;\n  }\n\n  .title-rightBtn {\n    font-family: sans-serif-medium;\n    font-weight: 500;\n    font-size: 36px;\n    line-height: 54px;\n  }\n</style>\n\n<script>\nimport Item from './item.vue';\nimport Locale from 'weex-flymeui/lib/mixins/locale';\nimport { t } from 'weex-flymeui/lib/locale';\n\nexport default {\n  name: 'FmSimpleList',\n  mixins: [Locale],\n  components: { Item },\n  props: {\n    list: {\n      type: Array,\n      default: () => ([])\n    },\n    title: {\n      type: String,\n      default () {\n        return t('el.common.title');\n      }\n    },\n    titleColor: {\n      type: String,\n      default: 'rgba(0, 0, 0, 0.4)'\n    },\n    rightText: {\n      type: String,\n      default: ''\n    },\n    rightColor: {\n      type: String,\n      default: '#198DED'\n    },\n    customStyles: {\n      type: Object,\n      default: () => ({})\n    }\n  },\n  methods: {\n    onSelect (index) {\n      this.$emit('fmSimpleListSelected', { model: this.list[index], index });\n    },\n    btnClicked () {\n      this.$emit('fmSimpleListRightBtnClicked');\n    },\n    leftIconClicked (index) {\n      this.$emit('fmSimpleListLeftIconClicked', { model: this.list[index], index });\n    },\n    rightIconClicked (index) {\n      this.$emit('fmSimpleListRightIconClicked', { model: this.list[index], index });\n    }\n  }\n};\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _item = __webpack_require__(201);

var _item2 = _interopRequireDefault(_item);

var _locale = __webpack_require__(5);

var _locale2 = _interopRequireDefault(_locale);

var _locale3 = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'FmSimpleList',
  mixins: [_locale2.default],
  components: { Item: _item2.default },
  props: {
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    title: {
      type: String,
      default: function _default() {
        return (0, _locale3.t)('el.common.title');
      }
    },
    titleColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.4)'
    },
    rightText: {
      type: String,
      default: ''
    },
    rightColor: {
      type: String,
      default: '#198DED'
    },
    customStyles: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  methods: {
    onSelect: function onSelect(index) {
      this.$emit('fmSimpleListSelected', { model: this.list[index], index: index });
    },
    btnClicked: function btnClicked() {
      this.$emit('fmSimpleListRightBtnClicked');
    },
    leftIconClicked: function leftIconClicked(index) {
      this.$emit('fmSimpleListLeftIconClicked', { model: this.list[index], index: index });
    },
    rightIconClicked: function rightIconClicked(index) {
      this.$emit('fmSimpleListRightIconClicked', { model: this.list[index], index: index });
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
/* 201 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(202)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(204),
  /* template */
  __webpack_require__(205),
  /* scopeId */
  "data-v-6f5a0a6a",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-simple-list/item.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] item.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f5a0a6a", Component.options)
  } else {
    hotAPI.reload("data-v-6f5a0a6a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(203);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("2d9189e9", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6f5a0a6a\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./item.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6f5a0a6a\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./item.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.list-item[data-v-6f5a0a6a] {\n  padding: 0 48px;\n}\n.list-item[data-v-6f5a0a6a]:active {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.item-wrap[data-v-6f5a0a6a] {\n  height: 144px;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.text-title[data-v-6f5a0a6a] {\n  flex: 1;\n  text-overflow: ellipsis;\n  font-size: 42px;\n  margin-right: 26px;\n  lines: 1;\n}\n.icon[data-v-6f5a0a6a] {\n  margin: 12px;\n  font-size: 48px;\n  height: 48px;\n  font-weight: 700;\n}\n.icon-left[data-v-6f5a0a6a] {\n  margin-right: 38px;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-simple-list/item.vue?7ca96128"],"names":[],"mappings":";AAiBA;EACA,gBAAA;CACA;AAEA;EACA,sCAAA;CACA;AAEA;EACA,cAAA;EACA,oBAAA;EACA,oBAAA;EACA,+BAAA;CACA;AAEA;EACA,QAAA;EACA,wBAAA;EACA,gBAAA;EACA,mBAAA;EACA,SAAA;CACA;AAEA;EACA,aAAA;EACA,gBAAA;EACA,aAAA;EACA,iBAAA;CACA;AAEA;EACA,mBAAA;CACA","file":"item.vue","sourcesContent":["<!-- Created by Yanjiie on 2018/3/5. -->\n<template>\n  <div class=\"list-item\" @click=\"onClick\">\n    <div class=\"item-wrap\" :style=\"wrapStyle\">\n      <fm-icon class=\"icon icon-left\" v-if=\"leftIcon || originLeftIcon\"\n                                      :name=\"leftIcon || originLeftIcon\"\n                                      :color='leftColor || originIconColor'\n                                      @click=\"onLeftClick\" />\n      <text class=\"text-title\" :style=\"titleStyle\">{{ title }}</text>\n      <fm-icon class=\"icon\" :name=\"rightIcon || originRightIcon\"\n                            :color='rightColor || originIconColor'\n                            @click=\"onRightClick\" />\n    </div>\n  </div>\n</template>\n\n<style scoped>\n  .list-item {\n    padding: 0 48px;\n  }\n\n  .list-item:active {\n    background-color: rgba(0, 0, 0, 0.05);\n  }\n\n  .item-wrap {\n    height: 144px;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  .text-title {\n    flex: 1;\n    text-overflow: ellipsis;\n    font-size: 42px;\n    margin-right: 26px;\n    lines: 1;\n  }\n\n  .icon {\n    margin: 12px;\n    font-size: 48px;\n    height: 48px;\n    font-weight: 700;\n  }\n\n  .icon-left {\n    margin-right: 38px;\n  }\n</style>\n\n<script>\nimport FmIcon from '../fm-icon';\nexport default {\n  components: { FmIcon },\n  props: {\n    index: {\n      type: Number,\n      default: -1\n    },\n    title: {\n      type: String,\n      default: ''\n    },\n    color: {\n      type: String,\n      default: ''\n    },\n    fontSize: {\n      type: Number,\n      default: 42\n    },\n    borderWidth: {\n      type: Number,\n      default: 2\n    },\n    borderColor: {\n      type: String,\n      default: 'rgba(0, 0, 0, 0.1)'\n    },\n    leftIcon: {\n      type: String,\n      default: ''\n    },\n    leftColor: {\n      type: String,\n      default: ''\n    },\n    rightIcon: {\n      type: String,\n      default: ''\n    },\n    rightColor: {\n      type: String,\n      default: ''\n    },\n    originTitleColor: {\n      type: String,\n      default: '#000000'\n    },\n    originLeftIcon: {\n      type: String,\n      default: 'shizhong'\n    },\n    originRightIcon: {\n      type: String,\n      default: 'guanbi'\n    },\n    originIconColor: {\n      type: String,\n      default: '#999999'\n    }\n  },\n  computed: {\n    wrapStyle () {\n      const { borderWidth, borderColor } = this;\n      return {\n        borderBottomWidth: borderWidth,\n        borderColor\n      };\n    },\n    titleStyle () {\n      const { color, originTitleColor, fontSize } = this;\n      return {\n        fontSize,\n        color: color || originTitleColor\n      };\n    }\n  },\n  methods: {\n    onClick () {\n      this.$emit('select', this.index);\n    },\n    onLeftClick () {\n      this.$emit('leftClicked', this.index);\n    },\n    onRightClick () {\n      this.$emit('rightClicked', this.index);\n    }\n  }\n};\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fmIcon = __webpack_require__(3);

var _fmIcon2 = _interopRequireDefault(_fmIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: { FmIcon: _fmIcon2.default },
  props: {
    index: {
      type: Number,
      default: -1
    },
    title: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    fontSize: {
      type: Number,
      default: 42
    },
    borderWidth: {
      type: Number,
      default: 2
    },
    borderColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.1)'
    },
    leftIcon: {
      type: String,
      default: ''
    },
    leftColor: {
      type: String,
      default: ''
    },
    rightIcon: {
      type: String,
      default: ''
    },
    rightColor: {
      type: String,
      default: ''
    },
    originTitleColor: {
      type: String,
      default: '#000000'
    },
    originLeftIcon: {
      type: String,
      default: 'shizhong'
    },
    originRightIcon: {
      type: String,
      default: 'guanbi'
    },
    originIconColor: {
      type: String,
      default: '#999999'
    }
  },
  computed: {
    wrapStyle: function wrapStyle() {
      var borderWidth = this.borderWidth,
          borderColor = this.borderColor;

      return {
        borderBottomWidth: borderWidth,
        borderColor: borderColor
      };
    },
    titleStyle: function titleStyle() {
      var color = this.color,
          originTitleColor = this.originTitleColor,
          fontSize = this.fontSize;

      return {
        fontSize: fontSize,
        color: color || originTitleColor
      };
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('select', this.index);
    },
    onLeftClick: function onLeftClick() {
      this.$emit('leftClicked', this.index);
    },
    onRightClick: function onRightClick() {
      this.$emit('rightClicked', this.index);
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

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "list-item",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    on: {
      "click": _vm.onClick
    }
  }, [_c('div', {
    staticClass: "item-wrap",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.wrapStyle))
  }, [(_vm.leftIcon || _vm.originLeftIcon) ? _c('fm-icon', {
    staticClass: "icon icon-left",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "name": _vm.leftIcon || _vm.originLeftIcon,
      "color": _vm.leftColor || _vm.originIconColor
    },
    on: {
      "click": _vm.onLeftClick
    }
  }) : _vm._e(), _vm._v(" "), _c('text', {
    staticClass: "text-title",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.titleStyle))
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('fm-icon', {
    staticClass: "icon",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "name": _vm.rightIcon || _vm.originRightIcon,
      "color": _vm.rightColor || _vm.originIconColor
    },
    on: {
      "click": _vm.onRightClick
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6f5a0a6a", module.exports)
  }
}

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "list-wrap",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_c('div', {
    staticClass: "title-wrap",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_vm._t("left", [_c('text', {
    staticClass: "title-text",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      color: _vm.titleColor
    }))
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _vm._t("right", [_c('text', {
    staticClass: "title-rightBtn",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      color: _vm.rightColor
    })),
    on: {
      "click": _vm.btnClicked
    }
  }, [_vm._v(_vm._s(_vm.rightText))])])], 2), _vm._v(" "), _c('div', {
    staticClass: "item-wrap",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, _vm._l((_vm.list), function(item, index) {
    return _c('item', _vm._b({
      key: index,
      staticStyle: _vm.$processStyle(undefined),
      style: (_vm.$processStyle(undefined)),
      attrs: {
        "index": index
      },
      on: {
        "select": function($event) {
          _vm.onSelect(index)
        },
        "leftClicked": function($event) {
          _vm.leftIconClicked(index)
        },
        "rightClicked": function($event) {
          _vm.rightIconClicked(index)
        }
      }
    }, 'item', Object.assign({}, _vm.customStyles, item), false))
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d7ab306c", module.exports)
  }
}

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(208);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(209)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(211),
  /* template */
  __webpack_require__(214),
  /* scopeId */
  "data-v-4c615fcc",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-tab-page/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c615fcc", Component.options)
  } else {
    hotAPI.reload("data-v-4c615fcc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(210);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("18454dae", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4c615fcc\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4c615fcc\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.fm-tab-page[data-v-4c615fcc] {\n  width: 1080px;\n}\n.tab-title-list[data-v-4c615fcc] {\n  width: 1080px;\n  flex-direction: row;\n}\n.tab-title-wrap[data-v-4c615fcc] {\n  flex-direction: row;\n  justify-content: space-around;\n  padding: 0 48px;\n  border-bottom-width: 2px;\n  border-color: rgba(0,0,0,0.10);\n}\n.title-item[data-v-4c615fcc] {\n  padding: 27px 18px;\n  margin-right: 42px;\n}\n.item-title[data-v-4c615fcc] {\n  font-family: sans-serif-medium;\n  font-weight: 500;\n  font-size: 42px;\n  line-height: 57px;\n}\n.border-bottom[data-v-4c615fcc] {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 3px;\n  width: 132px;\n}\n.tab-page-wrap[data-v-4c615fcc] {\n  width: 1080px;\n  overflow: hidden;\n}\n.tab-container[data-v-4c615fcc] {\n  flex: 1;\n  flex-direction: row;\n  position: absolute;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-tab-page/index.vue?74ef630b"],"names":[],"mappings":";AAwCA;EACA,cAAA;CACA;AAEA;EACA,cAAA;EACA,oBAAA;CACA;AAEA;EACA,oBAAA;EACA,8BAAA;EACA,gBAAA;EACA,yBAAA;EACA,+BAAA;CACA;AAEA;EACA,mBAAA;EACA,mBAAA;CACA;AAEA;EACA,+BAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;CACA;AAEA;EACA,mBAAA;EACA,QAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;CACA;AAEA;EACA,cAAA;EACA,iBAAA;CACA;AAEA;EACA,QAAA;EACA,oBAAA;EACA,mBAAA;CACA","file":"index.vue","sourcesContent":["<!-- Created by Yanjiie on 18/03/06. -->\n<template>\n  <div class=\"fm-tab-page\"\n       :style=\"{ height: (tabPageHeight)+'px' }\">\n    <scroller class=\"tab-title-list\"\n              ref=\"tab-title-list\"\n              :show-scrollbar=\"false\"\n              scroll-direction=\"horizontal\"\n              :style=\"{ height: (cTabStyles.height)+'px'}\">\n\n      <div class=\"tab-title-wrap\"\n           ref=\"tab-title-wrap\">\n        <div class=\"title-item\"\n             v-for=\"(v, idx) in tabTitles\"\n             :key=\"idx\"\n             @click=\"setPage(idx)\"\n             :ref=\"'fm-tab-title-'+idx\">\n          <text class=\"item-title\"\n                :style=\"{ fontSize: cTabStyles.fontSize, color: currentPage === idx ? cTabStyles.activeTitleColor : cTabStyles.titleColor, paddingLeft: cTabStyles.padding, paddingRight: cTabStyles.padding}\">{{ v.title }}</text>\n        </div>\n        <div class=\"border-bottom\"\n              ref=\"tab-border\"\n              :style=\"{ width: bottomInitWidth, transform: `translateX(${bottomInitOffset}px)`, backgroundColor: cTabStyles.activeBottomColor}\"></div>\n      </div>\n    </scroller>\n    <div class=\"tab-page-wrap\"\n         ref=\"tab-page-wrap\"\n         @panstart=\"_onTouchStart\"\n         @panmove=\"_onTouchMove\"\n         @panend=\"_onTouchEnd\"\n         :style=\"{ height: (tabPageHeight-cTabStyles.height)+'px' }\">\n      <div class=\"tab-container\"\n           ref=\"tab-container\">\n        <slot></slot>\n      </div>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n  .fm-tab-page {\n    width: 1080px;\n  }\n\n  .tab-title-list {\n    width: 1080px;\n    flex-direction: row;\n  }\n\n  .tab-title-wrap {\n    flex-direction: row;\n    justify-content: space-around;\n    padding: 0 48px;\n    border-bottom-width: 2px;\n    border-color: rgba(0,0,0,0.10);\n  }\n\n  .title-item {\n    padding: 27px 18px;\n    margin-right: 42px;\n  }\n\n  .item-title {\n    font-family: sans-serif-medium;\n    font-weight: 500;\n    font-size: 42px;\n    line-height: 57px;\n  }\n\n  .border-bottom {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    height: 3px;\n    width: 132px;\n  }\n\n  .tab-page-wrap {\n    width: 1080px;\n    overflow: hidden;\n  }\n\n  .tab-container {\n    flex: 1;\n    flex-direction: row;\n    position: absolute;\n  }\n</style>\n\n<script>\nimport { isWeex } from 'universal-env';\nimport Binding from 'weex-bindingx';\nconst animation = weex.requireModule('animation');\nconst dom = weex.requireModule('dom');\nconst isH5 = weex.config.env.platform === 'Web';\n\nexport default {\n  name: 'FmTabPage',\n  props: {\n    tabTitles: {\n      type: Array,\n      default: () => ([])\n    },\n    panDist: {\n      type: Number,\n      default: 200\n    },\n    duration: {\n      type: [Number, String],\n      default: 300\n    },\n    tabPageHeight: {\n      type: [String, Number],\n      default: 1920\n    },\n    tabStyles: {\n      type: Object,\n      default: () => ({})\n    },\n    timingFunction: {\n      type: String,\n      default: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'\n    }\n  },\n  computed: {\n    maxPage () {\n      return this.tabTitles.length - 1;\n    },\n    cTabStyles () {\n      const defaultStyle = {\n        titleColor: 'rgba(0, 0, 0, 0.6)',\n        activeTitleColor: '#198DED',\n        height: 102,\n        padding: 18,\n        fontSize: 42,\n        activeBottomColor: '#198DED'\n      };\n      return Object.assign({}, defaultStyle, this.tabStyles);\n    }\n  },\n  data: () => ({\n    currentPage: 0,\n    gesToken: null,\n    isMoving: false,\n    startTime: 0,\n    deltaX: 0,\n    translateX: 0,\n    startPosX: 0,\n    startPosY: 0,\n    judge: 'INITIAL',\n    bottomInitWidth: 0,\n    bottomInitOffset: 48,\n    tabPositions: []\n  }),\n  methods: {\n    next () {\n      let page = this.currentPage;\n      if (page < this.maxPage) {\n        page++;\n      }\n      this.setPage(page);\n    },\n    prev () {\n      let page = this.currentPage;\n      if (page > 0) {\n        page--;\n      }\n      this.setPage(page);\n    },\n    _onTouchStart (e) {\n      if (isH5) {\n        this.startPosX = this._getTouchXPos(e);\n        this.startPosY = this._getTouchYPos(e);\n        this.deltaX = 0;\n        this.startTime = new Date().getTime();\n      } else {\n        this.bindExp(this.$refs['tab-page-wrap']);\n      }\n    },\n    _onTouchMove (e) {\n      if (isH5) {\n        this.deltaX = this._getTouchXPos(e) - this.startPosX;\n        this.deltaY = Math.abs(this._getTouchYPos(e) - this.startPosY + 1);\n        if (this.judge === 'INITIAL' && Math.abs(this.deltaX) / this.deltaY > 1.73) {\n          this.judge = 'SLIDE_ING';\n        }\n      }\n    },\n    _onTouchEnd (e) {\n      if (isH5) {\n        if (this.judge === 'SLIDE_ING') {\n          if (this.deltaX < -50) {\n            this.next();\n          } else if (this.deltaX > 50) {\n            this.prev();\n          }\n        }\n        this.judge = 'INITIAL';\n      }\n    },\n    bindExp (element) {\n      if (!this.isMoving && element && this.getEl(element)) {\n        const tabPageEl = this.getEl(this.$refs['tab-container']);\n        const tabBorderEl = this.getEl(this.$refs['tab-border']);\n        const tabScrollEl = this.getEl(this.$refs['tab-title-list']);\n        const { currentPage, panDist, maxPage } = this;\n        const dist = currentPage * 1080; // tab 页偏移距离\n\n        const currOffset = this.tabPositions[currentPage].offset; // 当前 title 偏移量\n        const currWidth = this.tabPositions[currentPage].width; // 当前 title 宽度\n        const prevOffset = this.tabPositions[currentPage <= 0 ? 0 : currentPage - 1].offset; // 上一页 title 偏移量\n        const prevWidth = this.tabPositions[currentPage <= 0 ? 0 : currentPage - 1].width; // 上一页 title 宽度\n        const nextOffset = this.tabPositions[currentPage >= maxPage ? maxPage : currentPage + 1].offset; // 下一页 title 偏移量\n        const nextWidth = this.tabPositions[currentPage >= maxPage ? maxPage : currentPage + 1].width; // 上一页 title 宽度\n\n        // binding props\n        let tabExp = `x + ${-dist}`; // tab 页插值表达式\n\n        // bottom border 偏移动画插值表达式\n        const borderMoveExp = `x / 1080 * (x > 0 ? -${currOffset - prevOffset} : -${nextOffset - currOffset}) + ${currOffset}`;\n\n        /**\n         * bottom border 宽度动画变化规则描述\n         * @param currWidth 当前 tab 宽度(起始宽度)\n         * @param peakWidth 峰值宽度\n         * @param toWidth 最终宽度\n         * 变化描述：\n         *  当 currWidth === toWidth 时:\n         *    动画公式：currWidth -> toWidth (currWidth 递增至 toWidth)\n         *  当 currWidth !== toWidth 时:\n         *    动画公式：currWidth -> peakWidth -> toWidth (currWidth 先递增至 peakWidth 然后递减至 toWidth)\n         * peakWidth 峰值计算公式：peakWidth = currWidth / 2 + currWidth\n         */\n        // 滑向下一页的宽度变化动画插值表达式\n        const peakValue = currWidth / 2;\n        // 滑向下一页的宽度变化动画插值器\n        const nextInterpolator = nextWidth === currWidth ? `(abs(x) <= 540 ? (abs(x)/540 * ${peakValue}) : (2-abs(x)/540) * ${peakValue})` : `(abs(x)/1080 * ${nextWidth - currWidth})`;\n        // 滑向上一页的宽度变化动画插值器\n        const prevInterpolator = prevWidth === currWidth ? `(abs(x) <= 540 ? (abs(x)/540 * ${peakValue}) : (2-abs(x)/540) * ${peakValue})` : `(abs(x)/1080 * ${prevWidth - currWidth})`;\n        // bottom border 宽度变化动画插值器\n        let borderWidthExp = `${currWidth} + (x > 0 ? ${prevInterpolator} : ${nextInterpolator})`;\n\n        // tab scroller 滑动动画插值表达式\n        const tabScrollExp = `${(currOffset - 540 + currWidth / 2)} - x / 1080 * ${(nextOffset - 540 + nextWidth / 2) - (currOffset - 540 + currWidth / 2)} - ${(currOffset - 540) < 0 ? 48 : 0}`;\n\n        // 当页数为 0 或 max 时去除尽头动画\n        if (currentPage === 0) {\n          tabExp = `x >= 0 ? 0 : x`;\n          borderWidthExp = `x >= 0 ? ${currWidth} : ${borderWidthExp}`;\n        } else if (currentPage === maxPage) {\n          tabExp = `x <= 0 ? ${-maxPage * 1080} : x + ${-dist}`;\n          borderWidthExp = `x <= 0 ? ${currWidth} : ${borderWidthExp}`;\n        }\n\n        const props = [{\n          element: tabPageEl,\n          property: 'transform.translateX',\n          expression: {\n            origin: tabExp\n          }\n        }, {\n          element: tabBorderEl,\n          property: 'transform.translateX',\n          expression: borderMoveExp\n        }, {\n          element: tabBorderEl,\n          property: 'width',\n          expression: borderWidthExp\n        }, {\n          element: tabScrollEl,\n          property: 'scroll.contentOffset',\n          expression: tabScrollExp\n        }];\n\n        if (this.gesToken) {\n          Binding.unbind(this.gesToken);\n        }\n\n        this.gesToken = Binding.bind({\n          anchor: this.getEl(element),\n          eventType: 'pan',\n          props\n        }, (e) => {\n          const { deltaX, state } = e;\n          if (state === 'end') {\n            if (deltaX < -panDist) {\n              this.next();\n            } else if (deltaX > panDist) {\n              this.prev();\n            } else {\n              this.setPage(currentPage);\n            }\n          }\n        });\n      }\n    },\n    setPage (page, url = null) {\n      if (this.isMoving === true) {\n        return;\n      }\n      this.isMoving = true;\n      const currentTabEl = this.$refs[`fm-tab-title-${page}`][0];\n      const tabWidth = this.tabPositions[page].width;\n      const tabOffset = this.tabPositions[page].offset;\n\n      if (tabOffset >= 1080 / 2) {\n        dom.scrollToElement(currentTabEl, {\n          offset: -1080 / 2 + tabWidth / 2,\n          animated: true\n        });\n      } else {\n        dom.scrollToElement(currentTabEl, {\n          offset: -tabOffset,\n          animated: true\n        });\n      }\n\n      this.isMoving = false;\n      this.currentPage = page;\n      this._animateTransformX(page);\n      this._animateBorder(page);\n      this.$emit('fmTabPageTabSelected', { page });\n    },\n    _animateTransformX (page) {\n      const { duration, timingFunction } = this;\n      const containerEl = this.$refs[`tab-container`];\n      const dist = page * 1080;\n      this.x = -dist;\n      animation.transition(containerEl, {\n        styles: {\n          transform: `translateX(${-dist}px)`\n        },\n        duration: duration,\n        timingFunction,\n        delay: 0\n      }, () => {\n      });\n    },\n    _animateBorder (page) {\n      const { duration, timingFunction, tabPositions } = this;\n      const borderEl = this.$refs[`tab-border`];\n      const dist = tabPositions[page].offset;\n      animation.transition(borderEl, {\n        styles: {\n          transform: `translateX(${dist}px)`,\n          width: tabPositions[page].width\n        },\n        duration: duration,\n        timingFunction,\n        needLayout: false\n      }, () => {\n      });\n    },\n    _getTouchXPos (e) {\n      return e.changedTouches[0]['pageX'];\n    },\n    _getTouchYPos (e) {\n      return e.changedTouches[0]['pageY'];\n    },\n    getEl (el) {\n      if (typeof el === 'string' || typeof el === 'number') return el;\n      return isWeex ? el.ref : el instanceof HTMLElement ? el : el.$el;\n    },\n    _calculatePositions () {\n      const { tabTitles } = this;\n      tabTitles.map((item, i) => {\n        dom.getComponentRect(this.$refs['fm-tab-title-' + i][0], rect => {\n          this.tabPositions[i] = {\n            width: rect.size.width,\n            offset: rect.size.left\n          };\n          i === 0 && (this.bottomInitWidth = rect.size.width);\n        });\n      });\n    }\n  },\n  mounted () {\n    const tabPageEl = this.getEl(this.$refs['tab-page-wrap']);\n    Binding.prepare && Binding.prepare({\n      anchor: tabPageEl,\n      eventType: 'pan'\n    });\n    setTimeout(() => {\n      this._calculatePositions();\n    }, 50);\n  }\n};\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _universalEnv = __webpack_require__(212);

var _weexBindingx = __webpack_require__(7);

var _weexBindingx2 = _interopRequireDefault(_weexBindingx);

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

var animation = weex.requireModule('animation');
var dom = weex.requireModule('dom');
var isH5 = weex.config.env.platform === 'Web';

exports.default = {
  name: 'FmTabPage',
  props: {
    tabTitles: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    panDist: {
      type: Number,
      default: 200
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    tabPageHeight: {
      type: [String, Number],
      default: 1920
    },
    tabStyles: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    timingFunction: {
      type: String,
      default: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }
  },
  computed: {
    maxPage: function maxPage() {
      return this.tabTitles.length - 1;
    },
    cTabStyles: function cTabStyles() {
      var defaultStyle = {
        titleColor: 'rgba(0, 0, 0, 0.6)',
        activeTitleColor: '#198DED',
        height: 102,
        padding: 18,
        fontSize: 42,
        activeBottomColor: '#198DED'
      };
      return Object.assign({}, defaultStyle, this.tabStyles);
    }
  },
  data: function data() {
    return {
      currentPage: 0,
      gesToken: null,
      isMoving: false,
      startTime: 0,
      deltaX: 0,
      translateX: 0,
      startPosX: 0,
      startPosY: 0,
      judge: 'INITIAL',
      bottomInitWidth: 0,
      bottomInitOffset: 48,
      tabPositions: []
    };
  },
  methods: {
    next: function next() {
      var page = this.currentPage;
      if (page < this.maxPage) {
        page++;
      }
      this.setPage(page);
    },
    prev: function prev() {
      var page = this.currentPage;
      if (page > 0) {
        page--;
      }
      this.setPage(page);
    },
    _onTouchStart: function _onTouchStart(e) {
      if (isH5) {
        this.startPosX = this._getTouchXPos(e);
        this.startPosY = this._getTouchYPos(e);
        this.deltaX = 0;
        this.startTime = new Date().getTime();
      } else {
        this.bindExp(this.$refs['tab-page-wrap']);
      }
    },
    _onTouchMove: function _onTouchMove(e) {
      if (isH5) {
        this.deltaX = this._getTouchXPos(e) - this.startPosX;
        this.deltaY = Math.abs(this._getTouchYPos(e) - this.startPosY + 1);
        if (this.judge === 'INITIAL' && Math.abs(this.deltaX) / this.deltaY > 1.73) {
          this.judge = 'SLIDE_ING';
        }
      }
    },
    _onTouchEnd: function _onTouchEnd(e) {
      if (isH5) {
        if (this.judge === 'SLIDE_ING') {
          if (this.deltaX < -50) {
            this.next();
          } else if (this.deltaX > 50) {
            this.prev();
          }
        }
        this.judge = 'INITIAL';
      }
    },
    bindExp: function bindExp(element) {
      var _this = this;

      if (!this.isMoving && element && this.getEl(element)) {
        var tabPageEl = this.getEl(this.$refs['tab-container']);
        var tabBorderEl = this.getEl(this.$refs['tab-border']);
        var tabScrollEl = this.getEl(this.$refs['tab-title-list']);
        var currentPage = this.currentPage,
            panDist = this.panDist,
            maxPage = this.maxPage;

        var dist = currentPage * 1080; // tab 页偏移距离

        var currOffset = this.tabPositions[currentPage].offset; // 当前 title 偏移量
        var currWidth = this.tabPositions[currentPage].width; // 当前 title 宽度
        var prevOffset = this.tabPositions[currentPage <= 0 ? 0 : currentPage - 1].offset; // 上一页 title 偏移量
        var prevWidth = this.tabPositions[currentPage <= 0 ? 0 : currentPage - 1].width; // 上一页 title 宽度
        var nextOffset = this.tabPositions[currentPage >= maxPage ? maxPage : currentPage + 1].offset; // 下一页 title 偏移量
        var nextWidth = this.tabPositions[currentPage >= maxPage ? maxPage : currentPage + 1].width; // 上一页 title 宽度

        // binding props
        var tabExp = 'x + ' + -dist; // tab 页插值表达式

        // bottom border 偏移动画插值表达式
        var borderMoveExp = 'x / 1080 * (x > 0 ? -' + (currOffset - prevOffset) + ' : -' + (nextOffset - currOffset) + ') + ' + currOffset;

        /**
         * bottom border 宽度动画变化规则描述
         * @param currWidth 当前 tab 宽度(起始宽度)
         * @param peakWidth 峰值宽度
         * @param toWidth 最终宽度
         * 变化描述：
         *  当 currWidth === toWidth 时:
         *    动画公式：currWidth -> toWidth (currWidth 递增至 toWidth)
         *  当 currWidth !== toWidth 时:
         *    动画公式：currWidth -> peakWidth -> toWidth (currWidth 先递增至 peakWidth 然后递减至 toWidth)
         * peakWidth 峰值计算公式：peakWidth = currWidth / 2 + currWidth
         */
        // 滑向下一页的宽度变化动画插值表达式
        var peakValue = currWidth / 2;
        // 滑向下一页的宽度变化动画插值器
        var nextInterpolator = nextWidth === currWidth ? '(abs(x) <= 540 ? (abs(x)/540 * ' + peakValue + ') : (2-abs(x)/540) * ' + peakValue + ')' : '(abs(x)/1080 * ' + (nextWidth - currWidth) + ')';
        // 滑向上一页的宽度变化动画插值器
        var prevInterpolator = prevWidth === currWidth ? '(abs(x) <= 540 ? (abs(x)/540 * ' + peakValue + ') : (2-abs(x)/540) * ' + peakValue + ')' : '(abs(x)/1080 * ' + (prevWidth - currWidth) + ')';
        // bottom border 宽度变化动画插值器
        var borderWidthExp = currWidth + ' + (x > 0 ? ' + prevInterpolator + ' : ' + nextInterpolator + ')';

        // tab scroller 滑动动画插值表达式
        var tabScrollExp = currOffset - 540 + currWidth / 2 + ' - x / 1080 * ' + (nextOffset - 540 + nextWidth / 2 - (currOffset - 540 + currWidth / 2)) + ' - ' + (currOffset - 540 < 0 ? 48 : 0);

        // 当页数为 0 或 max 时去除尽头动画
        if (currentPage === 0) {
          tabExp = 'x >= 0 ? 0 : x';
          borderWidthExp = 'x >= 0 ? ' + currWidth + ' : ' + borderWidthExp;
        } else if (currentPage === maxPage) {
          tabExp = 'x <= 0 ? ' + -maxPage * 1080 + ' : x + ' + -dist;
          borderWidthExp = 'x <= 0 ? ' + currWidth + ' : ' + borderWidthExp;
        }

        var props = [{
          element: tabPageEl,
          property: 'transform.translateX',
          expression: {
            origin: tabExp
          }
        }, {
          element: tabBorderEl,
          property: 'transform.translateX',
          expression: borderMoveExp
        }, {
          element: tabBorderEl,
          property: 'width',
          expression: borderWidthExp
        }, {
          element: tabScrollEl,
          property: 'scroll.contentOffset',
          expression: tabScrollExp
        }];

        if (this.gesToken) {
          _weexBindingx2.default.unbind(this.gesToken);
        }

        this.gesToken = _weexBindingx2.default.bind({
          anchor: this.getEl(element),
          eventType: 'pan',
          props: props
        }, function (e) {
          var deltaX = e.deltaX,
              state = e.state;

          if (state === 'end') {
            if (deltaX < -panDist) {
              _this.next();
            } else if (deltaX > panDist) {
              _this.prev();
            } else {
              _this.setPage(currentPage);
            }
          }
        });
      }
    },
    setPage: function setPage(page) {
      var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (this.isMoving === true) {
        return;
      }
      this.isMoving = true;
      var currentTabEl = this.$refs['fm-tab-title-' + page][0];
      var tabWidth = this.tabPositions[page].width;
      var tabOffset = this.tabPositions[page].offset;

      if (tabOffset >= 1080 / 2) {
        dom.scrollToElement(currentTabEl, {
          offset: -1080 / 2 + tabWidth / 2,
          animated: true
        });
      } else {
        dom.scrollToElement(currentTabEl, {
          offset: -tabOffset,
          animated: true
        });
      }

      this.isMoving = false;
      this.currentPage = page;
      this._animateTransformX(page);
      this._animateBorder(page);
      this.$emit('fmTabPageTabSelected', { page: page });
    },
    _animateTransformX: function _animateTransformX(page) {
      var duration = this.duration,
          timingFunction = this.timingFunction;

      var containerEl = this.$refs['tab-container'];
      var dist = page * 1080;
      this.x = -dist;
      animation.transition(containerEl, {
        styles: {
          transform: 'translateX(' + -dist + 'px)'
        },
        duration: duration,
        timingFunction: timingFunction,
        delay: 0
      }, function () {});
    },
    _animateBorder: function _animateBorder(page) {
      var duration = this.duration,
          timingFunction = this.timingFunction,
          tabPositions = this.tabPositions;

      var borderEl = this.$refs['tab-border'];
      var dist = tabPositions[page].offset;
      animation.transition(borderEl, {
        styles: {
          transform: 'translateX(' + dist + 'px)',
          width: tabPositions[page].width
        },
        duration: duration,
        timingFunction: timingFunction,
        needLayout: false
      }, function () {});
    },
    _getTouchXPos: function _getTouchXPos(e) {
      return e.changedTouches[0]['pageX'];
    },
    _getTouchYPos: function _getTouchYPos(e) {
      return e.changedTouches[0]['pageY'];
    },
    getEl: function getEl(el) {
      if (typeof el === 'string' || typeof el === 'number') return el;
      return _universalEnv.isWeex ? el.ref : el instanceof HTMLElement ? el : el.$el;
    },
    _calculatePositions: function _calculatePositions() {
      var _this2 = this;

      var tabTitles = this.tabTitles;

      tabTitles.map(function (item, i) {
        dom.getComponentRect(_this2.$refs['fm-tab-title-' + i][0], function (rect) {
          _this2.tabPositions[i] = {
            width: rect.size.width,
            offset: rect.size.left
          };
          i === 0 && (_this2.bottomInitWidth = rect.size.width);
        });
      });
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    var tabPageEl = this.getEl(this.$refs['tab-page-wrap']);
    _weexBindingx2.default.prepare && _weexBindingx2.default.prepare({
      anchor: tabPageEl,
      eventType: 'pan'
    });
    setTimeout(function () {
      _this3._calculatePositions();
    }, 50);
  }
};

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// https://www.w3.org/TR/html5/webappapis.html#dom-navigator-appcodename
var isWeb = exports.isWeb = (typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) === 'object' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko');
var isNode = exports.isNode = typeof process !== 'undefined' && !!(process.versions && process.versions.node);
var isWeex = exports.isWeex = typeof callNative === 'function';
var isReactNative = exports.isReactNative = typeof __fbBatchedBridgeConfig !== 'undefined';
exports['default'] = module.exports;
exports.default = module.exports;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(213)))

/***/ }),
/* 213 */
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
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fm-tab-page",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      height: (_vm.tabPageHeight) + 'px'
    }))
  }, [_c('scroller', {
    ref: "tab-title-list",
    staticClass: "tab-title-list",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      height: (_vm.cTabStyles.height) + 'px'
    })),
    attrs: {
      "show-scrollbar": false,
      "scroll-direction": "horizontal"
    }
  }, [_c('div', {
    ref: "tab-title-wrap",
    staticClass: "tab-title-wrap",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_vm._l((_vm.tabTitles), function(v, idx) {
    return _c('div', {
      key: idx,
      ref: 'fm-tab-title-' + idx,
      refInFor: true,
      staticClass: "title-item",
      staticStyle: _vm.$processStyle(undefined),
      style: (_vm.$processStyle(undefined)),
      on: {
        "click": function($event) {
          _vm.setPage(idx)
        }
      }
    }, [_c('text', {
      staticClass: "item-title",
      staticStyle: _vm.$processStyle(undefined),
      style: (_vm.$processStyle({
        fontSize: _vm.cTabStyles.fontSize,
        color: _vm.currentPage === idx ? _vm.cTabStyles.activeTitleColor : _vm.cTabStyles.titleColor,
        paddingLeft: _vm.cTabStyles.padding,
        paddingRight: _vm.cTabStyles.padding
      }))
    }, [_vm._v(_vm._s(v.title))])])
  }), _vm._v(" "), _c('div', {
    ref: "tab-border",
    staticClass: "border-bottom",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      width: _vm.bottomInitWidth,
      transform: ("translateX(" + _vm.bottomInitOffset + "px)"),
      backgroundColor: _vm.cTabStyles.activeBottomColor
    }))
  })], 2)]), _vm._v(" "), _c('div', {
    ref: "tab-page-wrap",
    staticClass: "tab-page-wrap",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      height: (_vm.tabPageHeight - _vm.cTabStyles.height) + 'px'
    })),
    on: {
      "panstart": _vm._onTouchStart,
      "panmove": _vm._onTouchMove,
      "panend": _vm._onTouchEnd
    }
  }, [_c('div', {
    ref: "tab-container",
    staticClass: "tab-container",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_vm._t("default")], 2)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4c615fcc", module.exports)
  }
}

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(216);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(217),
  /* template */
  __webpack_require__(218),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-pan-item/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2948fd70", Component.options)
  } else {
    hotAPI.reload("data-v-2948fd70", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _weexBindingx = __webpack_require__(7);

var _weexBindingx2 = _interopRequireDefault(_weexBindingx);

var _utils = __webpack_require__(13);

var _utils2 = _interopRequireDefault(_utils);

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

exports.default = {
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      isPanning: false,
      appearMap: [],
      supportAndroid: _utils2.default.env.supportsEBForAndroid()
    };
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      if (_this.supportAndroid) {
        var element = _this.$refs['fm-pan-item'];
        _weexBindingx2.default.prepare && _weexBindingx2.default.prepare({
          anchor: element.ref,
          eventType: 'pan'
        });
      }
    }, 300);
  },

  methods: {
    itemClicked: function itemClicked() {
      if (this.isPanning) {
        return;
      }
      this.url && _utils2.default.goToH5Page(this.url, true);
      this.$emit('fmPanItemClicked', { extId: this.extId });
    },
    dispatchPan: function dispatchPan(e) {
      var _this2 = this;

      if (this.supportAndroid) {
        if (e.state === 'start') {
          this.isPanning = true;
          var element = this.$refs['fm-pan-item'];
          element && this.$emit('fmPanItemPan', { element: element });
        } else if (e.state === 'end') {
          setTimeout(function () {
            _this2.isPanning = false;
          }, 50);
        }
      }
    }
  }
};

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.supportAndroid) ? _c('div', {
    ref: "fm-pan-item",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    on: {
      "horizontalpan": _vm.dispatchPan,
      "appear": _vm.onItemAppear,
      "disappear": _vm.onItemDisAppear,
      "click": _vm.itemClicked
    }
  }, [_vm._t("default")], 2) : _c('div', {
    ref: "fm-pan-item",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    on: {
      "click": _vm.itemClicked
    }
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2948fd70", module.exports)
  }
}

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(220);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(221)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(223),
  /* template */
  __webpack_require__(229),
  /* scopeId */
  "data-v-1595dfba",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-tabbar/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1595dfba", Component.options)
  } else {
    hotAPI.reload("data-v-1595dfba", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(222);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("142f750f", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1595dfba\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1595dfba\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.fm-tabbar[data-v-1595dfba] {\n  flex-direction: row;\n  width: 1080px;\n  height: 144px;\n  align-items: center;\n  justify-content: center;\n  padding: 0 90px;\n  border-top-width: 2px;\n  border-top-color: rgba(0, 0, 0, 0.1);\n}\n.tabbar-item[data-v-1595dfba] {\n  flex: 1;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-tabbar/index.vue?4da322d2"],"names":[],"mappings":";AAaA;EACA,oBAAA;EACA,cAAA;EACA,cAAA;EACA,oBAAA;EACA,wBAAA;EACA,gBAAA;EACA,sBAAA;EACA,qCAAA;CACA;AAEA;EACA,QAAA;CACA","file":"index.vue","sourcesContent":["<!-- Created by Yanjiie on 2018/03/12. -->\n<template>\n  <div class=\"fm-tabbar\" :style=\"{ backgroundColor: backgroundColor }\">\n    <fm-tabbar-item class=\"tabbar-item\"\n                    v-if=\"!$slots.default\"\n                    v-for=\"(item, index) in items\"\n                    :key=\"index\"\n                    v-bind=\"Object.assign({}, customStyles, item)\"></fm-tabbar-item>\n    <slot />\n  </div>\n</template>\n\n<style scoped>\n  .fm-tabbar {\n    flex-direction: row;\n    width: 1080px;\n    height: 144px;\n    align-items: center;\n    justify-content: center;\n    padding: 0 90px;\n    border-top-width: 2px;\n    border-top-color: rgba(0, 0, 0, 0.1);\n  }\n\n  .tabbar-item {\n    flex: 1;\n  }\n</style>\n\n<script>\nimport FmTabbarItem from '../fm-tabbar-item';\nexport default {\n  name: 'FmTabbar',\n  components: { FmTabbarItem },\n  props: {\n    activeIndex: {\n      type: Number,\n      default: -1\n    },\n    items: {\n      type: Array,\n      default: () => ([])\n    },\n    backgroundColor: {\n      type: String,\n      default: '#FFFFFF'\n    },\n    customStyles: {\n      type: Object,\n      default: () => ({})\n    }\n  },\n  data: () => ({\n    renderItems: []\n  }),\n  watch: {\n    renderItems () {\n      this.setActiveItem();\n    },\n    activeIndex () {\n      this.setActiveItem();\n    }\n  },\n  methods: {\n    setActiveItem () {\n      this.renderItems.forEach((item, index) => {\n        item.active = index === this.activeIndex;\n      });\n    },\n    onChange (index) {\n      this.$emit('fmTabbarSelected', { index });\n    }\n  }\n};\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fmTabbarItem = __webpack_require__(19);

var _fmTabbarItem2 = _interopRequireDefault(_fmTabbarItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'FmTabbar',
  components: { FmTabbarItem: _fmTabbarItem2.default },
  props: {
    activeIndex: {
      type: Number,
      default: -1
    },
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    backgroundColor: {
      type: String,
      default: '#FFFFFF'
    },
    customStyles: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      renderItems: []
    };
  },
  watch: {
    renderItems: function renderItems() {
      this.setActiveItem();
    },
    activeIndex: function activeIndex() {
      this.setActiveItem();
    }
  },
  methods: {
    setActiveItem: function setActiveItem() {
      var _this = this;

      this.renderItems.forEach(function (item, index) {
        item.active = index === _this.activeIndex;
      });
    },
    onChange: function onChange(index) {
      this.$emit('fmTabbarSelected', { index: index });
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

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(225)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(227),
  /* template */
  __webpack_require__(228),
  /* scopeId */
  "data-v-32d8605a",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-tabbar-item/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-32d8605a", Component.options)
  } else {
    hotAPI.reload("data-v-32d8605a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(226);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("00916df2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-32d8605a\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-32d8605a\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.fm-tabbar-item[data-v-32d8605a] {\n  height: 144px;\n  align-items: center;\n  justify-content: center;\n}\n.fm-tabbar-item[data-v-32d8605a]:active {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.icon-wrap[data-v-32d8605a] {\n  padding-top: 8px;\n  padding-left: 30px;\n  padding-right: 30px;\n  margin-top: -8px;\n}\n.item-icon[data-v-32d8605a] {\n  margin-bottom: 6px;\n}\n.item-title[data-v-32d8605a] {\n  font-size: 30px;\n  line-height: 36px;\n}\n.dot[data-v-32d8605a] {\n  position: absolute;\n  top: 8px;\n  right: 30px;\n  width: 18px;\n  height: 18px;\n  border-radius: 9px;\n  background-color: #EF2828;\n  box-shadow: 0 0 0 3px #FFFFFF;\n}\n.badge[data-v-32d8605a] {\n  position: absolute;\n  justify-content: center;\n  top: 0;\n  left: 69px;\n  border-width: 3px;\n  border-color: #FFFFFF;\n  border-radius: 24px;\n}\n.badge-msg[data-v-32d8605a] {\n  line-height: 36px;\n  padding: 0 6px;\n  font-size: 24px;\n  color: #FFFFFF;\n  background-color: #EF2828;\n  border-radius: 24px;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-tabbar-item/index.vue?73023a0e"],"names":[],"mappings":";AAsBA;EACA,cAAA;EACA,oBAAA;EACA,wBAAA;CACA;AAEA;EACA,sCAAA;CACA;AAEA;EACA,iBAAA;EACA,mBAAA;EACA,oBAAA;EACA,iBAAA;CACA;AAEA;EACA,mBAAA;CACA;AAEA;EACA,gBAAA;EACA,kBAAA;CACA;AAEA;EACA,mBAAA;EACA,SAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,0BAAA;EACA,8BAAA;CACA;AAEA;EACA,mBAAA;EACA,wBAAA;EACA,OAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,oBAAA;CACA;AAEA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;EACA,0BAAA;EACA,oBAAA;CACA","file":"index.vue","sourcesContent":["<!-- Created by Yanjiie on 2018/03/12. -->\n<template>\n  <div class=\"fm-tabbar-item\" @click=\"onClick\">\n    <div class=\"icon-wrap\">\n      <slot name=\"icon\" :active=\"active\">\n        <fm-icon class=\"item-icon\"\n                :name=\"icon\"\n                icon-style=\"72\"\n                :color=\"!active ? iconColor : (activeIconColor || activeColor)\" />\n      </slot>\n      <div class=\"dot\" v-if=\"dot\"></div>\n      <div class=\"badge\" v-if=\"!dot && badge\">\n        <text class=\"badge-msg\">{{ badge }}</text>\n      </div>\n    </div>\n    <slot name=\"title\" :active=\"active\">\n      <text class=\"item-title\" :style=\"{ color: !active ? titleColor : activeColor }\"><slot></slot><template v-if=\"!$slots.default\">{{ title }}</template></text>\n    </slot>\n  </div>\n</template>\n\n<style scoped>\n  .fm-tabbar-item {\n    height: 144px;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .fm-tabbar-item:active {\n    background-color: rgba(0, 0, 0, 0.05);\n  }\n\n  .icon-wrap {\n    padding-top: 8px;\n    padding-left: 30px;\n    padding-right: 30px;\n    margin-top: -8px;\n  }\n\n  .item-icon {\n    margin-bottom: 6px;\n  }\n\n  .item-title {\n    font-size: 30px;\n    line-height: 36px;\n  }\n\n  .dot {\n    position: absolute;\n    top: 8px;\n    right: 30px;\n    width: 18px;\n    height: 18px;\n    border-radius: 9px;\n    background-color: #EF2828;\n    box-shadow: 0 0 0 3px #FFFFFF;\n  }\n\n  .badge {\n    position: absolute;\n    justify-content: center;\n    top: 0;\n    left: 69px;\n    border-width: 3px;\n    border-color: #FFFFFF;\n    border-radius: 24px;\n  }\n\n  .badge-msg {\n    line-height: 36px;\n    padding: 0 6px;\n    font-size: 24px;\n    color: #FFFFFF;\n    background-color: #EF2828;\n    border-radius: 24px;\n  }\n</style>\n\n<script>\nimport FmIcon from '../fm-icon';\nexport default {\n  name: 'FmTabbarItem',\n  components: { FmIcon },\n  props: {\n    title: {\n      type: String,\n      default: ''\n    },\n    titleColor: {\n      type: String,\n      default: 'rgba(0, 0, 0, 0.75)'\n    },\n    activeColor: {\n      type: String,\n      default: '#198DED'\n    },\n    icon: {\n      type: String,\n      default: ''\n    },\n    iconColor: {\n      type: String,\n      default: 'rgba(0, 0, 0, 0.6)'\n    },\n    activeIconColor: {\n      type: String,\n      default: ''\n    },\n    badge: {\n      type: [Number, String],\n      default: ''\n    },\n    dot: Boolean\n  },\n  data: () => ({\n    active: false\n  }),\n  beforeCreate () {\n    let parent = this.$parent;\n    while (parent) {\n      if (parent.$options.name !== 'FmTabbar') {\n        parent = parent.$parent;\n      } else {\n        this._parent = parent;\n        break;\n      }\n    }\n    this._parent.renderItems.push(this);\n  },\n  created () {\n    this.$slots.default && (this.title = this.$slots.default[0].text);\n  },\n  destroyed () {\n    this._parent.renderItems.splice(this._parent.items.indexOf(this), 1);\n  },\n  methods: {\n    onClick (e) {\n      this._parent.onChange(this._parent.renderItems.indexOf(this));\n      this.$emit('select', this.index);\n    }\n  }\n};\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fmIcon = __webpack_require__(3);

var _fmIcon2 = _interopRequireDefault(_fmIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'FmTabbarItem',
  components: { FmIcon: _fmIcon2.default },
  props: {
    title: {
      type: String,
      default: ''
    },
    titleColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.75)'
    },
    activeColor: {
      type: String,
      default: '#198DED'
    },
    icon: {
      type: String,
      default: ''
    },
    iconColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.6)'
    },
    activeIconColor: {
      type: String,
      default: ''
    },
    badge: {
      type: [Number, String],
      default: ''
    },
    dot: Boolean
  },
  data: function data() {
    return {
      active: false
    };
  },
  beforeCreate: function beforeCreate() {
    var parent = this.$parent;
    while (parent) {
      if (parent.$options.name !== 'FmTabbar') {
        parent = parent.$parent;
      } else {
        this._parent = parent;
        break;
      }
    }
    this._parent.renderItems.push(this);
  },
  created: function created() {
    this.$slots.default && (this.title = this.$slots.default[0].text);
  },
  destroyed: function destroyed() {
    this._parent.renderItems.splice(this._parent.items.indexOf(this), 1);
  },

  methods: {
    onClick: function onClick(e) {
      this._parent.onChange(this._parent.renderItems.indexOf(this));
      this.$emit('select', this.index);
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
//
//
//
//
//
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
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fm-tabbar-item",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    on: {
      "click": _vm.onClick
    }
  }, [_c('div', {
    staticClass: "icon-wrap",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_vm._t("icon", [_c('fm-icon', {
    staticClass: "item-icon",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    attrs: {
      "name": _vm.icon,
      "icon-style": "72",
      "color": !_vm.active ? _vm.iconColor : (_vm.activeIconColor || _vm.activeColor)
    }
  })], {
    active: _vm.active
  }), _vm._v(" "), (_vm.dot) ? _c('div', {
    staticClass: "dot",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }) : _vm._e(), _vm._v(" "), (!_vm.dot && _vm.badge) ? _c('div', {
    staticClass: "badge",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_c('text', {
    staticClass: "badge-msg",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_vm._v(_vm._s(_vm.badge))])]) : _vm._e()], 2), _vm._v(" "), _vm._t("title", [_c('text', {
    staticClass: "item-title",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      color: !_vm.active ? _vm.titleColor : _vm.activeColor
    }))
  }, [_vm._t("default"), (!_vm.$slots.default) ? [_vm._v(_vm._s(_vm.title))] : _vm._e()], 2)], {
    active: _vm.active
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-32d8605a", module.exports)
  }
}

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fm-tabbar",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      backgroundColor: _vm.backgroundColor
    }))
  }, [_vm._l((_vm.items), function(item, index) {
    return (!_vm.$slots.default) ? _c('fm-tabbar-item', _vm._b({
      key: index,
      staticClass: "tabbar-item",
      staticStyle: _vm.$processStyle(undefined),
      style: (_vm.$processStyle(undefined))
    }, 'fm-tabbar-item', Object.assign({}, _vm.customStyles, item), false)) : _vm._e()
  }), _vm._v(" "), _vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1595dfba", module.exports)
  }
}

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(231);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(232)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(234),
  /* template */
  __webpack_require__(241),
  /* scopeId */
  "data-v-5aa1ccbc",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-btnbar/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5aa1ccbc", Component.options)
  } else {
    hotAPI.reload("data-v-5aa1ccbc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(233);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("dfb23e2a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5aa1ccbc\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5aa1ccbc\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.fm-btnbar[data-v-5aa1ccbc] {\n  flex-direction: row;\n  width: 1080px;\n  height: 144px;\n  align-items: center;\n  justify-content: center;\n  padding: 0 48px;\n  border-top-width: 2px;\n  border-top-color: rgba(0, 0, 0, 0.1);\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-btnbar/index.vue?03596a54"],"names":[],"mappings":";AAaA;EACA,oBAAA;EACA,cAAA;EACA,cAAA;EACA,oBAAA;EACA,wBAAA;EACA,gBAAA;EACA,sBAAA;EACA,qCAAA;CACA","file":"index.vue","sourcesContent":["<!-- Created by Yanjiie on 2018/03/13. -->\n<template>\n  <div class=\"fm-btnbar\" :style=\"{ backgroundColor: backgroundColor }\">\n    <fm-btnbar-item class=\"tabbar-item\"\n                    v-if=\"!$slots.default\"\n                    v-for=\"(item, index) in items\"\n                    :key=\"index\"\n                    v-bind=\"Object.assign({}, item)\"></fm-btnbar-item>\n    <slot />\n  </div>\n</template>\n\n<style scoped>\n  .fm-btnbar {\n    flex-direction: row;\n    width: 1080px;\n    height: 144px;\n    align-items: center;\n    justify-content: center;\n    padding: 0 48px;\n    border-top-width: 2px;\n    border-top-color: rgba(0, 0, 0, 0.1);\n  }\n</style>\n\n<script>\nimport FmBtnbarItem from '../fm-btnbar-item';\nexport default {\n  name: 'FmBtnbar',\n  components: { FmBtnbarItem },\n  props: {\n    items: {\n      type: Array,\n      default: () => ([])\n    },\n    backgroundColor: {\n      type: String,\n      default: '#FFFFFF'\n    }\n  },\n  data: () => ({\n    renderItems: []\n  }),\n  watch: {\n    renderItems (val) {\n      val.forEach((item, index) => {\n        item.width = val.length > 1 ? 396 : 720;\n      });\n    }\n  },\n  methods: {\n    btnClicked (index) {\n      this.$emit('fmBtnbarBtnClicked', { index });\n    }\n  }\n};\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fmBtnbarItem = __webpack_require__(20);

var _fmBtnbarItem2 = _interopRequireDefault(_fmBtnbarItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'FmBtnbar',
  components: { FmBtnbarItem: _fmBtnbarItem2.default },
  props: {
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    backgroundColor: {
      type: String,
      default: '#FFFFFF'
    }
  },
  data: function data() {
    return {
      renderItems: []
    };
  },
  watch: {
    renderItems: function renderItems(val) {
      val.forEach(function (item, index) {
        item.width = val.length > 1 ? 396 : 720;
      });
    }
  },
  methods: {
    btnClicked: function btnClicked(index) {
      this.$emit('fmBtnbarBtnClicked', { index: index });
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

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(236)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(238),
  /* template */
  __webpack_require__(240),
  /* scopeId */
  "data-v-4e5bea4c",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-btnbar-item/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e5bea4c", Component.options)
  } else {
    hotAPI.reload("data-v-4e5bea4c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(237);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("a64611d2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4e5bea4c\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4e5bea4c\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.fm-btnbar-item[data-v-4e5bea4c] {\n  height: 114px;\n  border-radius: 57px;\n  margin: 0 33px;\n  padding: 0 33px;\n  align-items: center;\n  justify-content: center;\n  transform: scale(1);\n  transition-property: transform,backgroundColor;\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.item-title[data-v-4e5bea4c] {\n  lines: 1;\n  text-overflow: ellipsis;\n  text-align: center;\n  color: #FFFFFF;\n  font-size: 48px;\n  font-weight: 500;\n  font-family: sans-serif-medium;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-btnbar-item/index.vue?1184a307"],"names":[],"mappings":";AAiBA;EACA,cAAA;EACA,oBAAA;EACA,eAAA;EACA,gBAAA;EACA,oBAAA;EACA,wBAAA;EACA,oBAAA;EACA,+CAAA;EACA,0BAAA;EACA,gEAAA;CACA;AAEA;EACA,SAAA;EACA,wBAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,+BAAA;CACA","file":"index.vue","sourcesContent":["<!-- Created by Yanjiie on 2018/03/13. -->\n<template>\n  <div v-if=\"width !== 0\"\n       class=\"fm-btnbar-item\"\n       :style=\"computedStyle\"\n       @click=\"onClick\"\n       @touchstart=\"_startHandle\"\n       @touchend=\"_endHandle\"\n       ref=\"btn\">\n    <slot name=\"title\">\n      <text class=\"item-title\"\n            :style=\"{ width: width - 56 }\"><slot></slot><template v-if=\"!$slots.default\">{{ title }}</template></text>\n    </slot>\n  </div>\n</template>\n\n<style scoped>\n  .fm-btnbar-item {\n    height: 114px;\n    border-radius: 57px;\n    margin: 0 33px;\n    padding: 0 33px;\n    align-items: center;\n    justify-content: center;\n    transform: scale(1);\n    transition-property: transform,backgroundColor;\n    transition-duration: 0.2s;\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  .item-title {\n    lines: 1;\n    text-overflow: ellipsis;\n    text-align: center;\n    color: #FFFFFF;\n    font-size: 48px;\n    font-weight: 500;\n    font-family: sans-serif-medium;\n  }\n</style>\n\n<script>\nimport THEME from './theme';\nexport default {\n  name: 'FmBtnbarItem',\n  props: {\n    title: {\n      type: String,\n      default: ''\n    },\n    theme: {\n      type: String,\n      default: 'blue'\n    },\n    titleColor: {\n      type: String,\n      default: '#FFFFFF'\n    },\n    normalColor: {\n      type: String,\n      default: ''\n    },\n    activeColor: {\n      type: String,\n      default: ''\n    },\n    disabled: Boolean,\n    disabledColor: {\n      type: String,\n      default: '#B2B2B2'\n    }\n  },\n  computed: {\n    computedStyle () {\n      const { normalColor, activeColor, active, width, theme, disabled, disabledColor } = this;\n      const backgroundColor = disabled ? disabledColor : (active ? activeColor || THEME[theme].highlight : normalColor || THEME[theme].normal);\n      const transform = disabled ? 'scale(1)' : `scale(${active ? 0.95 : 1})`;\n      return {\n        backgroundColor,\n        transform,\n        width\n      };\n    }\n  },\n  data: () => ({\n    active: false,\n    width: 0\n  }),\n  methods: {\n    _startHandle (e) {\n      this.active = true;\n    },\n    _endHandle (e) {\n      this.active = false;\n    },\n    onClick (e) {\n      this.disabled || this._parent.btnClicked(this._parent.renderItems.indexOf(this));\n      this.disabled || this.$emit('btnClicked', e);\n    }\n  },\n  beforeCreate () {\n    let parent = this.$parent;\n    while (parent) {\n      if (parent.$options.name !== 'FmBtnbar') {\n        parent = parent.$parent;\n      } else {\n        this._parent = parent;\n        this._parent.renderItems.push(this);\n        break;\n      }\n    }\n  },\n  created () {\n    this.$slots.default && (this.title = this.$slots.default[0].text);\n  },\n  destroyed () {\n    this._parent.renderItems.splice(this._parent.items.indexOf(this), 1);\n  }\n};\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _theme = __webpack_require__(239);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'FmBtnbarItem',
  props: {
    title: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'blue'
    },
    titleColor: {
      type: String,
      default: '#FFFFFF'
    },
    normalColor: {
      type: String,
      default: ''
    },
    activeColor: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    disabledColor: {
      type: String,
      default: '#B2B2B2'
    }
  },
  computed: {
    computedStyle: function computedStyle() {
      var normalColor = this.normalColor,
          activeColor = this.activeColor,
          active = this.active,
          width = this.width,
          theme = this.theme,
          disabled = this.disabled,
          disabledColor = this.disabledColor;

      var backgroundColor = disabled ? disabledColor : active ? activeColor || _theme2.default[theme].highlight : normalColor || _theme2.default[theme].normal;
      var transform = disabled ? 'scale(1)' : 'scale(' + (active ? 0.95 : 1) + ')';
      return {
        backgroundColor: backgroundColor,
        transform: transform,
        width: width
      };
    }
  },
  data: function data() {
    return {
      active: false,
      width: 0
    };
  },
  methods: {
    _startHandle: function _startHandle(e) {
      this.active = true;
    },
    _endHandle: function _endHandle(e) {
      this.active = false;
    },
    onClick: function onClick(e) {
      this.disabled || this._parent.btnClicked(this._parent.renderItems.indexOf(this));
      this.disabled || this.$emit('btnClicked', e);
    }
  },
  beforeCreate: function beforeCreate() {
    var parent = this.$parent;
    while (parent) {
      if (parent.$options.name !== 'FmBtnbar') {
        parent = parent.$parent;
      } else {
        this._parent = parent;
        this._parent.renderItems.push(this);
        break;
      }
    }
  },
  created: function created() {
    this.$slots.default && (this.title = this.$slots.default[0].text);
  },
  destroyed: function destroyed() {
    this._parent.renderItems.splice(this._parent.items.indexOf(this), 1);
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
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  blue: {
    normal: '#198DED',
    highlight: '#0A73C9'
  },
  limegreen: {
    normal: '#3BC06B',
    highlight: '#2AA155'
  },
  seagreen: {
    normal: '#04C0CF',
    highlight: '#009FAD'
  },
  gray: {
    normal: '#7E97AC',
    highlight: '#687E8F'
  },
  crimson: {
    normal: '#D33A2A',
    highlight: '#B83125'
  },
  firebrick: {
    normal: '#F12528',
    highlight: '#CF2124'
  },
  tomato: {
    normal: '#FC5B23',
    highlight: '#DB4914'
  },
  coral: {
    normal: '#FFAF00',
    highlight: '#C99014'
  }
};

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.width !== 0) ? _c('div', {
    ref: "btn",
    staticClass: "fm-btnbar-item",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.computedStyle)),
    on: {
      "click": _vm.onClick,
      "touchstart": _vm._startHandle,
      "touchend": _vm._endHandle
    }
  }, [_vm._t("title", [_c('text', {
    staticClass: "item-title",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      width: _vm.width - 56
    }))
  }, [_vm._t("default"), (!_vm.$slots.default) ? [_vm._v(_vm._s(_vm.title))] : _vm._e()], 2)])], 2) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4e5bea4c", module.exports)
  }
}

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fm-btnbar",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      backgroundColor: _vm.backgroundColor
    }))
  }, [_vm._l((_vm.items), function(item, index) {
    return (!_vm.$slots.default) ? _c('fm-btnbar-item', _vm._b({
      key: index,
      staticClass: "tabbar-item",
      staticStyle: _vm.$processStyle(undefined),
      style: (_vm.$processStyle(undefined))
    }, 'fm-btnbar-item', Object.assign({}, item), false)) : _vm._e()
  }), _vm._v(" "), _vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5aa1ccbc", module.exports)
  }
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.web.js.map