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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

var listToStyles = __webpack_require__(8)

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
exports.FmTips = exports.FmTabView = exports.FmInput = exports.FmButton = exports.FmSlider = exports.FmIcon = exports.FmText = exports.FmTag = exports.FmSwitch = undefined;

var _fmSwitch = __webpack_require__(4);

var _fmSwitch2 = _interopRequireDefault(_fmSwitch);

var _fmTag = __webpack_require__(12);

var _fmTag2 = _interopRequireDefault(_fmTag);

var _fmText = __webpack_require__(18);

var _fmText2 = _interopRequireDefault(_fmText);

var _fmIcon = __webpack_require__(24);

var _fmIcon2 = _interopRequireDefault(_fmIcon);

var _fmSlider = __webpack_require__(28);

var _fmSlider2 = _interopRequireDefault(_fmSlider);

var _fmButton = __webpack_require__(34);

var _fmButton2 = _interopRequireDefault(_fmButton);

var _fmInput = __webpack_require__(40);

var _fmInput2 = _interopRequireDefault(_fmInput);

var _fmTabView = __webpack_require__(46);

var _fmTabView2 = _interopRequireDefault(_fmTabView);

var _fmTips = __webpack_require__(52);

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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(5);

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


/* styles */
__webpack_require__(6)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(11),
  /* scopeId */
  "data-v-ceed072a",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-mzui/packages/fm-switch/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ceed072a", Component.options)
  } else {
    hotAPI.reload("data-v-ceed072a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("64069b76", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-ceed072a\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-ceed072a\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.fm-switch[data-v-ceed072a] {\n  flex-direction: row;\n  align-items: center;\n  width: 100px;\n  height: 50px;\n  border-radius: 25px;\n}\n.ctr-ball[data-v-ceed072a] {\n  width: 34px;\n  height: 34px;\n  border-radius: 17px;\n}\n\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-mzui/packages/fm-switch/index.vue?4e4432ae"],"names":[],"mappings":";AAWA;EACA,oBAAA;EACA,oBAAA;EACA,aAAA;EACA,aAAA;EACA,oBAAA;CACA;AAEA;EACA,YAAA;EACA,aAAA;EACA,oBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"fm-switch\" @click=\"changeState\" :style=\"getBgStyle\">\n        <div \n          class=\"ctr-ball\" \n          :style=\"ballStyle\"\n          ref=\"ctrBall\"></div>\n    </div>\n</template>\n\n<style scoped>\n\n  .fm-switch {\n    flex-direction: row;\n    align-items: center;\n    width: 100px;\n    height: 50px;\n    border-radius: 25px;\n  }\n\n  .ctr-ball {\n    width: 34px;\n    height: 34px;\n    border-radius: 17px;\n  }\n\n</style>\n\n<script>\n\nimport { THEME } from './theme'\nconst animation = weex.requireModule('animation')\n\nexport default {\n    name: 'fm-switch',\n    props: {\n      checked: {\n        type: Boolean,\n        default: false\n      },\n      theme: {\n        type: String,\n        default: 'default'\n      },\n      disabled: {\n        type: Boolean,\n        default: false\n      }\n    },\n    data() {\n      return {\n        isAnimate: false,\n        focusColor: '#198ded',\n        blurColor: '#7e97ac',\n        ballStyle: {\n          backgroundColor: this.blurColor\n        }\n      }\n    },\n    computed: {\n      getBgStyle() {\n        let style = this.theme === 'default' ? {\n          borderWidth: 4,\n          borderColor: '#7e97ac'\n        } : THEME[this.theme]\n        if (this.disabled) {\n          style.opacity = 0.3\n        } else {\n          style.opacity = 1\n        }\n        return style\n      }\n    },\n    methods: {\n      changeState(e) {\n        if (this.isAnimate || this.disabled) return\n        this.checked = !this.checked\n        this.toggleState()\n        this.$emit('change', this.checked)\n      },\n      toggleState(){\n          this.isAnimate = true\n          const style = this.checked ? {\n            backgroundColor: this.focusColor,\n            transform: 'scale(1)',\n            transform: 'translate(50px, 0)',\n            transformOrigin: 'center center'\n          } : {\n            backgroundColor: this.blurColor,\n            transform: 'scale(0.6)',\n            transformOrigin: 'center center'\n          }\n          const ctrBall = this.$refs.ctrBall\n          animation.transition(ctrBall, {\n            styles: style,\n            timingFunction: 'ease',\n            duration: 260\n          }, () => {\n            this.isAnimate = false\n          })\n      }\n    },\n    mounted() {\n      const { bgStyle, focusColor, blurColor } = this\n      if (this.theme !== 'default') {\n          this.focusColor = this.blurColor = '#fff'\n      }\n      this.checked ? this.ballStyle = {\n          backgroundColor: this.focusColor,\n          transform: 'scale(1.0)',\n          transform: 'translate(50px, 0)'\n      } : this.ballStyle = {\n          backgroundColor: this.blurColor,\n          transform: 'scale(0.6)'\n      }\n    }\n}\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 8 */
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
     require("vue-hot-reload-api").rerender("data-v-ceed072a", module.exports)
  }
}

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


/* styles */
__webpack_require__(14)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(17),
  /* scopeId */
  "data-v-630456ce",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-mzui/packages/fm-tag/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-630456ce", Component.options)
  } else {
    hotAPI.reload("data-v-630456ce", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(15);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("f307fc5c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-630456ce\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-630456ce\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.fm-tag[data-v-630456ce] {\n  align-items: flex-start;\n}\n.tag-item[data-v-630456ce] {\n  padding: 7px;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n.tag-border[data-v-630456ce] {\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.tag-hollow[data-v-630456ce] {\n  border-width: 1px;\n}\n.tag-text[data-v-630456ce] {\n  font-family: \"Source Han Sans CN\", Roboto, sans-serif;\n  font-weight: bold;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-mzui/packages/fm-tag/index.vue?4b8a389f"],"names":[],"mappings":";AAYA;EACA,wBAAA;CACA;AAEA;EACA,aAAA;EACA,wBAAA;EACA,oBAAA;EACA,iBAAA;CACA;AAEA;EACA,+BAAA;EACA,gCAAA;EACA,4BAAA;EACA,6BAAA;CACA;AAEA;EACA,kBAAA;CACA;AAEA;EACA,sDAAA;EACA,kBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"fm-tag\" :style=\"{margin: size === 'small' ? '2.34px' : '4.68px'}\">\n        <div v-if=\"showSolid || showHollow\"\n            :class=\"['tag-item','tag-border',showHollow && 'tag-hollow']\"\n            :style=\"tagTextStyle\">\n        <text class=\"tag-text\" ref='content' :style=\"textStyle\">{{value}}</text>\n        </div>\n    </div>\n</template>\n\n<style scoped>\n\n  .fm-tag {\n    align-items: flex-start;\n  }\n\n  .tag-item {\n    padding: 7px;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n  }\n\n  .tag-border {\n    border-bottom-left-radius: 4px;\n    border-bottom-right-radius: 4px;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n  }\n\n  .tag-hollow {\n    border-width: 1px;\n  }\n\n  .tag-text {\n    font-family: \"Source Han Sans CN\", Roboto, sans-serif;\n    font-weight: bold;\n  }\n</style>\n\n<script>\nexport default {\n    props: {\n      type: {\n        type: String,\n        default: 'solid'\n      },\n      size: {\n        type: String,\n        default: 'small'\n      },\n      value: {\n        type: [String, Number],\n        default: '标签'\n      },\n      color: {\n        type: String,\n        default: '#198ded'\n      },\n      fontColor: {\n        type: String,\n        default: '#fff'\n      }\n    },\n    computed: {\n      showSolid () {\n        const { type, value } = this;\n        return type === 'solid' && value !== '';\n      },\n      showHollow () {\n        const { type, value } = this;\n        return type === 'hollow' && value !== '';\n      },\n      tagTextStyle () {\n        const { color, showSolid } = this;\n        return showSolid ? { backgroundColor: color } : { borderColor: color }\n      },\n      textStyle() {\n        const { fontColor, size } = this;\n        return {color: fontColor, fontSize: size === 'small' ? '19px' : '21px'}\n      }\n    }\n}\n</script>\n\n\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fm-tag",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle({
      margin: _vm.size === 'small' ? '2.34px' : '4.68px'
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
     require("vue-hot-reload-api").rerender("data-v-630456ce", module.exports)
  }
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(19);

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


/* styles */
__webpack_require__(20)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(23),
  /* scopeId */
  "data-v-41aa83b8",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-mzui/packages/fm-text/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41aa83b8", Component.options)
  } else {
    hotAPI.reload("data-v-41aa83b8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("a9827f88", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-41aa83b8\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-41aa83b8\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.text[data-v-41aa83b8] {\n    font-size: 29.17px;\n    line-height: 43px;\n    color: #999;\n    font-family: \"Source Han Sans CN\", Roboto, sans-serif;\n}\n.medium[data-v-41aa83b8] {\n    font-weight: 500;\n}\n.bold[data-v-41aa83b8] {\n    font-weight: 700;\n}\n.light[data-v-41aa83b8] {\n    font-weight: 400;\n    line-height: 38px;\n}\n.title[data-v-41aa83b8] {\n    font-size: 33px;\n    font-weight: 500;\n    line-height: 48px;\n    color: #000;\n}\n.small[data-v-41aa83b8] {\n    font-size: 25px;\n}\n.large[data-v-41aa83b8] {\n    font-size: 33px;\n    font-weight: 500;\n    line-height: 50px;\n    color: #000;\n}\n.huge[data-v-41aa83b8] {\n    font-size: 38px;\n    line-height: 56px;\n    color: #000;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-mzui/packages/fm-text/index.vue?4f92993e"],"names":[],"mappings":";AAKA;IACA,mBAAA;IACA,kBAAA;IACA,YAAA;IACA,sDAAA;CACA;AAEA;IACA,iBAAA;CACA;AACA;IACA,iBAAA;CACA;AACA;IACA,iBAAA;IACA,kBAAA;CACA;AAEA;IACA,gBAAA;IACA,iBAAA;IACA,kBAAA;IACA,YAAA;CACA;AAEA;IACA,gBAAA;CACA;AACA;IACA,gBAAA;IACA,iBAAA;IACA,kBAAA;IACA,YAAA;CACA;AACA;IACA,gBAAA;IACA,kBAAA;IACA,YAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <text :class=\"textClz\">{{ text }}</text>\n</template>\n\n<style scoped>\n    .text {\n        font-size: 29.17px;\n        line-height: 43px;\n        color: #999;\n        font-family: \"Source Han Sans CN\", Roboto, sans-serif;\n    }\n\n    .medium {\n        font-weight: 500;\n    }\n    .bold {\n        font-weight: 700;\n    }\n    .light {\n        font-weight: 400;\n        line-height: 38px;\n    }\n\n    .title {\n        font-size: 33px;\n        font-weight: 500;\n        line-height: 48px;\n        color: #000;\n    }\n\n    .small {\n        font-size: 25px;\n    }\n    .large {\n        font-size: 33px;\n        font-weight: 500;\n        line-height: 50px;\n        color: #000;\n    }\n    .huge {\n        font-size: 38px;\n        line-height: 56px;\n        color: #000;\n    }\n</style>\n\n<script>\nexport default {\n    props: {\n        text: [String, Number],\n        medium: Boolean,\n        bold: Boolean,\n        light: Boolean,\n        title: Boolean,\n        small: Boolean,\n        large: Boolean,\n        huge: Boolean\n    },\n\n    computed: {\n        textClz () {\n            let clz = ['text']\n            if (this.medium) {\n                clz.push('medium')\n            }\n            if (this.light) {\n                clz.push('light')\n            }\n            if (this.title) {\n                clz.push('title')\n            }\n            if (this.bold) {\n                clz.push('bold')\n            }\n            if (this.small) {\n                clz.push('small')\n            }\n            if (this.large) {\n                clz.push('large')\n            }\n            if (this.huge) {\n                clz.push('huge')\n            }\n\n            return clz\n        }\n    }\n}\n</script>"],"sourceRoot":""}]);

// exports


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    class: _vm.textClz,
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined))
  }, [_vm._v(_vm._s(_vm.text))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-41aa83b8", module.exports)
  }
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(25);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(26),
  /* template */
  __webpack_require__(27),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-mzui/packages/fm-icon/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e9fbf320", Component.options)
  } else {
    hotAPI.reload("data-v-e9fbf320", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 26 */
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.style)),
    on: {
      "click": function (e) { return _vm.$emit('click', e); },
      "longpress": function (e) { return _vm.$emit('longpress', e); }
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e9fbf320", module.exports)
  }
}

/***/ }),
/* 28 */
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(30)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(33),
  /* scopeId */
  "data-v-97846c50",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-mzui/packages/fm-slider/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-97846c50", Component.options)
  } else {
    hotAPI.reload("data-v-97846c50", Component.options)
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
var update = __webpack_require__(2)("514930f0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-97846c50\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-97846c50\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
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
exports.push([module.i, "\n.slider-wrap[data-v-97846c50] {\n\tpadding-right: 15.75px;\n\tpadding-left: 15.75px;\n}\n.level-text-wrap[data-v-97846c50] {\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin-bottom: -15px;\n}\n.level-text[data-v-97846c50] {\n\tflex: 1;\n\tpadding-top: 5px;\n\tpadding-bottom: 5px;\n\ttext-align: center;\n}\n.all[data-v-97846c50] {\n\theight: 6.25px;\n\tmargin-top: 30px;\n\tbackground-color: #e6e6e6;\n}\n.selected[data-v-97846c50] {\n\tmargin-top: -6.25px;\n\theight: 6.25px;\n\tbackground-color: #198ded;\n}\n.dot-wrap[data-v-97846c50] {\n\theight: 60px;\n\twidth: 80px;\n\tmargin-top: -33px;\n\tmargin-left: -40px;\n\talign-items: center;\n\tjustify-content: center;\n}\n.dot[data-v-97846c50] {\n\theight: 31.25px;\n\twidth: 31.25px;\n\tbackground-color: #198ded;\n\tborder-radius: 30px;\n}\n.num[data-v-97846c50] {\n\twidth: 54.2px;\n\theight: 54.2px;\n\tmargin-left: -27.1px;\n\tborder-radius: 55px;\n\tbackground-color: #198ded;\n\tcolor: #ffffff;\n\tfont-size: 29.2px;\n\tfont-weight: 700;\n\ttext-align: center;\n\tline-height: 54px;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-mzui/packages/fm-slider/index.vue?2dc0b53a"],"names":[],"mappings":";AAeA;CACA,uBAAA;CACA,sBAAA;CACA;AACA;CACA,oBAAA;CACA,oBAAA;CACA,wBAAA;CACA,qBAAA;CACA;AACA;CACA,QAAA;CACA,iBAAA;CACA,oBAAA;CACA,mBAAA;CACA;AACA;CACA,eAAA;CACA,iBAAA;CACA,0BAAA;CACA;AACA;CACA,oBAAA;CACA,eAAA;CACA,0BAAA;CACA;AACA;CACA,aAAA;CACA,YAAA;CACA,kBAAA;CACA,mBAAA;CACA,oBAAA;CACA,wBAAA;CACA;AACA;CACA,gBAAA;CACA,eAAA;CACA,0BAAA;CACA,oBAAA;CACA;AACA;CACA,cAAA;CACA,eAAA;CACA,qBAAA;CACA,oBAAA;CACA,0BAAA;CACA,eAAA;CACA,kBAAA;CACA,iBAAA;CACA,mBAAA;CACA,kBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n<div class=\"slider-wrap\">\n\t<div v-if=\"!!levelTexts && this.per\" class=\"level-text-wrap\" :style=\"textStyle\">\n\t\t<text class=\"level-text\" v-for=\"(text, idx) in levelTexts\" @click=\"levelClick(idx)\">{{text}}</text>\n\t</div>\n\t<text v-else-if=\"showProgress\" class=\"num\" :style=\"progressStyle\">{{progressText}}</text>\n\t<div class=\"all\" ref=\"bg\"></div>\n\t<div class=\"selected\" :style=\"selStyle\"></div>\n\t<div class=\"dot-wrap\" :style=\"dotStyle\" @touchmove=\"move\" @touchstart=\"start\" @touchend=\"end\">\n\t\t<div class=\"dot\"></div>\n\t</div>\n</div>\n</template>\n\n<style scoped>\n.slider-wrap {\n\tpadding-right: 15.75px;\n\tpadding-left: 15.75px;\n}\n.level-text-wrap {\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin-bottom: -15px;\n}\n.level-text {\n\tflex: 1;\n\tpadding-top: 5px;\n\tpadding-bottom: 5px;\n\ttext-align: center;\n}\n.all {\n\theight: 6.25px;\n\tmargin-top: 30px;\n\tbackground-color: #e6e6e6;\n}\n.selected {\n\tmargin-top: -6.25px;\n\theight: 6.25px;\n\tbackground-color: #198ded;\n}\n.dot-wrap {\n\theight: 60px;\n\twidth: 80px;\n\tmargin-top: -33px;\n\tmargin-left: -40px;\n\talign-items: center;\n\tjustify-content: center;\n}\n.dot {\n\theight: 31.25px;\n\twidth: 31.25px;\n\tbackground-color: #198ded;\n\tborder-radius: 30px;\n}\n.num {\n\twidth: 54.2px;\n\theight: 54.2px;\n\tmargin-left: -27.1px;\n\tborder-radius: 55px;\n\tbackground-color: #198ded;\n\tcolor: #ffffff;\n\tfont-size: 29.2px;\n\tfont-weight: 700;\n\ttext-align: center;\n\tline-height: 54px;\n}\n</style>\n\n<script>\nconst dom = weex.requireModule('dom')\n\nexport default {\n\tdata () {\n\t\treturn {\n\t\t\ttransX: 0,\n\t\t\tstartX: 0,\n\t\t\tmax: 0,\n\t\t\tper: 0,\n\t\t\tcomparePer: 0,\n\t\t\tprogressOpacity: 0,\n\t\t\tprogressText: null,\n\t\t\tlevelAlias: 0\n\t\t}\n\t},\n\n\tprops: {\n\t\tlevel: [String, Number],\n\t\tlevelTexts: Array,\n\t\tshowProgress: Boolean,\n\t\tvertical: Boolean,\n\t\tvalue: {\n\t\t\ttype: [String, Number],\n\t\t\tdefault: 0\n\t\t}\n\t},\n\n\tcomputed: {\n\t\ttextStyle () {\n\t\t\treturn {\n\t\t\t\twidth: `${this.max + this.per}px`,\n\t\t\t\t'margin-left': `${-this.per/2}px`\n\t\t\t}\n\t\t},\n\t\tdotStyle () {\n\t\t\treturn {\n\t\t\t\ttransform: `translateX(${this.transX}px)`\n\t\t\t}\n\t\t},\n\t\tselStyle () {\n\t\t\treturn {\n\t\t\t\twidth: `${this.transX}px`\n\t\t\t}\n\t\t},\n\t\tprogressStyle () {\n\t\t\treturn {\n\t\t\t\ttransform: `translateX(${this.transX}px)`,\n\t\t\t\topacity: this.progressOpacity\n\t\t\t}\n\t\t}\n\t},\n\n\tcreated () {\n\t\tthis.screen = 'screenY'//this.vertical ? 'screenY' : 'screenX'\n\t},\n\n\tmounted () {\n\t\tsetTimeout(() => {\n\t\t\tdom.getComponentRect(this.$refs.bg, opt => {\n\n\t\t\t\tthis.max = opt.size.width\n\n\t\t\t\tif (this.levelTexts) {\n\t\t\t\t\tthis.levelAlias = Math.max(this.levelTexts.length - 1, 0)\n\t\t\t\t} else {\n\t\t\t\t\tthis.levelAlias = this.level\n\t\t\t\t}\n\n\t\t\t\tif (this.levelAlias && this.levelAlias > 0) {\n\t\t\t\t\tthis.per = this.max / this.levelAlias\n\t\t\t\t\tthis.comparePer = this.per / 2\n\t\t\t\t}\n\n\t\t\t\tthis.transX = this.per ? (this.per * this.value) : (this.max * this.value / 100)\n\t\t\t\tconsole.log(this.transX)\n\t\t\t})\n\t\t}, 100)\n\t},\n\n\tmethods: {\n\t\tlevelClick (idx) {\n\t\t\tthis.transX = Math.min(this.per * idx, this.max)\n\t\t\tthis.end()\n\t\t},\n\t\tstart (event) {\n\t\t\tthis.startX = event.changedTouches[0].screenX\n\t\t\tthis.progressOpacity = 1\n\t\t},\n\t\tmove (event) {\n\t\t\tlet x = +event.changedTouches[0].screenX\n\t\t\tlet sub = x - this.startX\n\t\t\tlet target\n\n\t\t\tif (this.per) {\n\t\t\t\tif (Math.abs(sub) >= this.comparePer) {\n\t\t\t\t\ttarget = this.transX + (sub > 0 ? this.per : -this.per)\n\t\t\t\t\tthis.startX = target\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\ttarget = this.transX + sub\n\t\t\t\tthis.startX = x\n\t\t\t}\n\t\t\t\n\t\t\tif (target !== undefined) {\n\t\t\t\tthis.transX = Math.min(Math.max(target, 0), this.max)\n\t\t\t}\n\t\t\t\n\t\t\tthis.progressText = this.per \n\t\t\t\t? Math.round(this.transX / this.per)\n\t\t\t\t: Math.floor(this.transX / this.max * 100)\n\t\t},\n\t\tend (event) {\n\t\t\tthis.progressOpacity = 0\n\t\t\tthis.$emit('selected', {\n\t\t\t\trate: this.transX / this.max,\n\t\t\t\tlevel: this.per ? Math.round(this.transX / this.per) : 0\n\t\t\t})\n\t\t}\n\t}\n}\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 32 */
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
/* 33 */
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
     require("vue-hot-reload-api").rerender("data-v-97846c50", module.exports)
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
  "data-v-785a86e9",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-mzui/packages/fm-button/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-785a86e9", Component.options)
  } else {
    hotAPI.reload("data-v-785a86e9", Component.options)
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
var update = __webpack_require__(2)("7bbd266d", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-785a86e9\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-785a86e9\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
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
exports.push([module.i, "\n.fm-btn-wrap[data-v-785a86e9] {\n\theight: 50px;\n\talign-items: center;\n\tflex-direction: row;\n\tmax-width: 208.3333px;\n}\n.fm-btn[data-v-785a86e9] {\n\theight: 50px;\n\tpadding-left: 25px;\n\tpadding-right: 25px;\n\tline-height: 50px;\n\tborder-radius: 50px;\n\tfont-size: 29.1667px;\n\tfont-weight: 700;\n\ttext-align: center;\n\topacity: 0;\n}\n.fm-btn-small[data-v-785a86e9] {\n\twidth: 100px;\n}\n.fm-btn-large[data-v-785a86e9] {\n\tpadding-left: 16.6667px;\n\tpadding-right: 16.6667px;\n}\n.fm-btn-max[data-v-785a86e9] {\n\twidth: 208.3333px;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-mzui/packages/fm-button/index.vue?078cecae"],"names":[],"mappings":";AAQA;CACA,aAAA;CACA,oBAAA;CACA,oBAAA;CACA,sBAAA;CACA;AACA;CACA,aAAA;CACA,mBAAA;CACA,oBAAA;CACA,kBAAA;CACA,oBAAA;CACA,qBAAA;CACA,iBAAA;CACA,mBAAA;CACA,WAAA;CACA;AACA;CACA,aAAA;CACA;AACA;CACA,wBAAA;CACA,yBAAA;CACA;AACA;CACA,kBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n<div class=\"fm-btn-wrap\">\n\t<text ref=\"text\" class=\"fm-btn\" :class=\"btnClz\" :style=\"btnStyle\"\n\t\t@click=\"btnClick\">{{text}}</text>\n</div>\n</template>\n\n<style scoped>\n.fm-btn-wrap {\n\theight: 50px;\n\talign-items: center;\n\tflex-direction: row;\n\tmax-width: 208.3333px;\n}\n.fm-btn {\n\theight: 50px;\n\tpadding-left: 25px;\n\tpadding-right: 25px;\n\tline-height: 50px;\n\tborder-radius: 50px;\n\tfont-size: 29.1667px;\n\tfont-weight: 700;\n\ttext-align: center;\n\topacity: 0;\n}\n.fm-btn-small {\n\twidth: 100px;\n}\n.fm-btn-large {\n\tpadding-left: 16.6667px;\n\tpadding-right: 16.6667px;\n}\n.fm-btn-max {\n\twidth: 208.3333px;\n}\n</style>\n\n<script>\n\nconst small_size = 100      //48dp\nconst large_size = 166.6667 //80dp\nconst max_size = 208.3333   //100dp\nconst dis_color = '#cccccc'\nconst transparent = 'transparent'\n\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\tlarge: false,\n\t\t\tsmall: false,\n\t\t\tmax: false,\n\t\t\tshow: false\n\t\t}\n\t},\n\n\tprops: {\n\t\ttext: String,\n\t\tbgColor: {\n\t\t\ttype: String,\n\t\t\tdefault: '#198ded'\n\t\t},\n\t\tcolor: {\n\t\t\ttype: String,\n\t\t\tdefault: '#ffffff'\n\t\t},\n\t\tdisabled: Boolean\n\t},\n\n\tcomputed: {\n\t\tbtnClz() {\n\t\t\tlet clz = []\n\n\t\t\tif (this.large) {\n\t\t\t\tclz.push('fm-btn-large')\n\t\t\t}\n\t\t\tif (this.small) {\n\t\t\t\tclz.push('fm-btn-small')\n\t\t\t}\n\t\t\tif (this.max) {\n\t\t\t\tclz.push('fm-btn-max')\n\t\t\t}\n\n\t\t\treturn clz\n\t\t},\n\t\tbtnStyle() {\n\t\t\tlet sty = {}\n\n\t\t\tif (this.bgColor != transparent) {\n\t\t\t\tsty.backgroundColor = this.bgColor\n\t\t\t}\n\t\t\tif (this.color) {\n\t\t\t\tsty.color = this.color\n\t\t\t\tif (this.bgColor == transparent) {\n\t\t\t\t\tsty.borderColor = this.color\n\t\t\t\t\tsty.borderWidth = '3px'\n\t\t\t\t\tsty.borderStyle = 'solid'\n\t\t\t\t}\n\t\t\t}\n\t\t\tif (this.disabled) {\n\t\t\t\tsty.backgroundColor = dis_color\n\t\t\t}\n\t\t\tif (this.show) {\n\t\t\t\tsty.opacity = 1;\n\t\t\t}\n\n\t\t\treturn sty\n\t\t}\n\t},\n\n\tmethods: {\n\t\tbtnClick(evt) {\n\t\t\tif (!this.disabled) {\n\t\t\t\tthis.$emit('click', evt)\n\t\t\t}\n\t\t}\n\t},\n\n\tmounted() {\n\t\tlet w = this.text.length * 29.1667 + 50\n\n\t\tif (w < small_size) {\n\t\t\tthis.small = true\n\t\t} else if (w > large_size) {\n\t\t\tthis.large = true\n\t\t}\n\n\t\tif (w >= max_size) {\n\t\t\tthis.max = true\n\t\t}\n\n\t\tthis.show = true\n\t}\n}\n</script>"],"sourceRoot":""}]);

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
/* 39 */
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
     require("vue-hot-reload-api").rerender("data-v-785a86e9", module.exports)
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
  "data-v-4f3ae7c9",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-mzui/packages/fm-input/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4f3ae7c9", Component.options)
  } else {
    hotAPI.reload("data-v-4f3ae7c9", Component.options)
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
var update = __webpack_require__(2)("69c02e14", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4f3ae7c9\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4f3ae7c9\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
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
exports.push([module.i, "\n.fm-input-wrap[data-v-4f3ae7c9] {\n\tpadding-top: 50px;\n\tpadding-right: 12.5px;\n\tpadding-left: 12.5px;\n}\n.fm-textarea[data-v-4f3ae7c9] {\n\tpadding-bottom: 18.75px;\n\tpadding-right: 16.67px;\n\tpadding-left: 16.67px;\n\tborder-bottom-style: solid;\n\tborder-bottom-width: 2.5px;\n\tborder-bottom-color: #E6E6E6;\n\tfont-size: 33.33px;\n\tline-height: 50px;\n\tcolor: #000000;\n\tplaceholder-color: #dddddd;\n\tcaret-color: #198ded;\n}\n.fm-textarea[data-v-4f3ae7c9]:focus {\n\tborder-bottom-color: #198ded;\n}\n.fm-textarea-error[data-v-4f3ae7c9] {\n\tborder-bottom-color: #df2b18;\n}\n.error-msg[data-v-4f3ae7c9] {\n\tfont-size: 25px;\n\tcolor: #df2b18;\n\tmargin-left: 16.67px;\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-mzui/packages/fm-input/index.vue?5292fe42"],"names":[],"mappings":";AA6BA;CACA,kBAAA;CACA,sBAAA;CACA,qBAAA;CACA;AACA;CACA,wBAAA;CACA,uBAAA;CACA,sBAAA;CACA,2BAAA;CACA,2BAAA;CACA,6BAAA;CACA,mBAAA;CACA,kBAAA;CACA,eAAA;CACA,2BAAA;CACA,qBAAA;CACA;AACA;CACA,6BAAA;CACA;AACA;CACA,6BAAA;CACA;AACA;CACA,gBAAA;CACA,eAAA;CACA,qBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n<div class=\"fm-input-wrap\">\n\t<textarea v-if=\"type === 'textarea'\"\n\t\t:class=\"inputClz\" \n\t\t:value=\"value\" \n\t\t:rows=\"rows\" \n\t\t:maxlength=\"maxlength\" \n\t\t:placeholder=\"placeholder\" \n\t\t@input=\"input\"\n\t\t@change=\"change\"\n\t\t@focus=\"focus\"\n\t\t@blur=\"blur\"\n\t\tref=\"input\" />\n\t<input v-else \n\t\t:type=\"type\"\n\t\t:class=\"inputClz\" \n\t\t:value=\"value\" \n\t\t:maxlength=\"maxlength\" \n\t\t:placeholder=\"placeholder\"\n\t\t@input=\"input\"\n\t\t@change=\"change\"\n\t\t@focus=\"focus\"\n\t\t@blur=\"blur\"\n\t\tref=\"input\" />\n\t<text v-if=\"hasError\" class=\"error-msg\">{{errorMessage}}</text>\n</div>\n</template>\n\n<style scoped>\n.fm-input-wrap {\n\tpadding-top: 50px;\n\tpadding-right: 12.5px;\n\tpadding-left: 12.5px; \n}\n.fm-textarea {\n\tpadding-bottom: 18.75px;\n\tpadding-right: 16.67px;\n\tpadding-left: 16.67px;\n\tborder-bottom-style: solid;\n\tborder-bottom-width: 2.5px;\n\tborder-bottom-color: #E6E6E6;\n\tfont-size: 33.33px;\n\tline-height: 50px;\n\tcolor: #000000;\n\tplaceholder-color: #dddddd;\n\tcaret-color: #198ded;\n}\n.fm-textarea:focus {\n\tborder-bottom-color: #198ded;\n}\n.fm-textarea-error {\n\tborder-bottom-color: #df2b18;\n}\n.error-msg {\n\tfont-size: 25px;\n\tcolor: #df2b18;\n\tmargin-left: 16.67px;\n}\n</style>\n\n<script>\nconst dom = weex.requireModule('dom')\n\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\trows: 1\n\t\t}\n\t},\n\n\tprops: {\n\t\tvalue: [String, Number],\n\t\tplaceholder: {\n\t\t\ttype: String,\n\t\t\tdefault: '请输入'\n\t\t},\n\t\tmaxlength: [String, Number],\n\t\thasError: Boolean,\n\t\terrorMessage: {\n\t\t\ttype: 'String',\n\t\t\tdefault: '输入有误'\n\t\t},\n\t\ttype: String\n\t},\n\n\tcomputed: {\n\t\tinputClz() {\n\t\t\tlet clz = ['fm-textarea']\n\t\t\tif (this.hasError) {\n\t\t\t\tclz.push('fm-textarea-error')\n\t\t\t}\n\t\t\treturn clz\n\t\t}\n\t},\n\n\tmethods: {\n\t\tinput (evt) {\n\t\t\tthis.$emit('input', evt)\n\t\t},\n\t\tchange (evt) {\n\t\t\tthis.$emit('change', evt)\n\t\t},\n\t\tfocus (evt) {\n\t\t\tthis.$emit('focus', evt)\n\t\t},\n\t\tblur (evt) {\n\t\t\tthis.$emit('blur', evt)\n\t\t}\n\t}\n}\n</script>"],"sourceRoot":""}]);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* 45 */
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
      "focus": _vm.focus,
      "blur": _vm.blur
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
      "focus": _vm.focus,
      "blur": _vm.blur
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
     require("vue-hot-reload-api").rerender("data-v-4f3ae7c9", module.exports)
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
  "data-v-7b3900d4",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-mzui/packages/fm-tab-view/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b3900d4", Component.options)
  } else {
    hotAPI.reload("data-v-7b3900d4", Component.options)
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
var update = __webpack_require__(2)("3a486de2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7b3900d4\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7b3900d4\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
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
exports.push([module.i, "\n.header-wrap[data-v-7b3900d4] {\n\tmargin-top: 18.75px;\n\tmargin-right: 45.83px;\n\tmargin-left: 45.83px;\n}\n.header[data-v-7b3900d4] {\n\tflex-direction: row;\n\tjustify-content: center;\n}\n.title[data-v-7b3900d4] {\n\tflex: 1;\n\tflex-direction: row;\n\tjustify-content: center;\n}\n.text-selected[data-v-7b3900d4] {\n\tcolor: #f34949;\n}\n.text[data-v-7b3900d4] {\n\tfont-size: 29.17px;\n\tfont-weight: 700;\n\ttext-align: center;\n\tcolor: #666666;\n}\n.bottom-line[data-v-7b3900d4] {\n\theight: 5px;\n\tmargin-top: 18.75px;\n\tbackground-color: #f34949;\n}\n.slider-wrap[data-v-7b3900d4] {\n\tflex-direction: row;\n\tborder-top-width: 2px;\n\tborder-color: #dddddd;\n}\n.body[data-v-7b3900d4] {\n}\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-mzui/packages/fm-tab-view/index.vue?671b20e4"],"names":[],"mappings":";AA2BA;CACA,oBAAA;CACA,sBAAA;CACA,qBAAA;CACA;AACA;CACA,oBAAA;CACA,wBAAA;CACA;AACA;CACA,QAAA;CACA,oBAAA;CACA,wBAAA;CACA;AACA;CACA,eAAA;CACA;AACA;CACA,mBAAA;CACA,iBAAA;CACA,mBAAA;CACA,eAAA;CACA;AACA;CACA,YAAA;CACA,oBAAA;CACA,0BAAA;CACA;AACA;CACA,oBAAA;CACA,sBAAA;CACA,sBAAA;CACA;AACA;CACA","file":"index.vue","sourcesContent":["<template>\n<div class=\"tab-wrap\">\n\t<div class=\"header-wrap\">\n\t\t<div class=\"header\" ref=\"header\">\n\t\t\t<div v-for=\"(item, idx) in items\" \n\t\t\t\t:key=\"item.name\" \n\t\t\t\tclass=\"title\" \n\t\t\t\t@click=\"titleClick(idx)\">\n\t\t\t\t<text :class=\"['text', idx == current ? 'text-selected' : '']\" >{{item.text}}</text>\t\n\t\t\t</div>\n\t\t</div>\n\t\t<text class=\"bottom-line\" :style=\"lineStyle\" ref=\"line\"></text>\n\t</div>\n\t<div class=\"slider-wrap\" \n\t\tref=\"slider\" \n\t\t:style=\"listStyle\"\n\t\t@touchmove=\"move\" \n\t\t@touchstart=\"start\" \n\t\t@touchend=\"end\">\n\t\t<div v-for=\"(item, idx) in items\" class=\"body\" :style=\"itemStyle\">\n\t\t\t<slot :name=\"item.name\"></slot>\n\t\t</div>\n\t</div>\n</div>\n</template>\n\n<style scoped>\n.header-wrap {\n\tmargin-top: 18.75px;\n\tmargin-right: 45.83px;\n\tmargin-left: 45.83px;\n}\n.header {\n\tflex-direction: row;\n\tjustify-content: center;\n}\n.title {\n\tflex: 1;\n\tflex-direction: row;\n\tjustify-content: center;\n}\n.text-selected {\n\tcolor: #f34949;\n}\n.text {\n\tfont-size: 29.17px;\n\tfont-weight: 700;\n\ttext-align: center;\n\tcolor: #666666;\n}\n.bottom-line {\n\theight: 5px;\n\tmargin-top: 18.75px;\n\tbackground-color: #f34949;\n}\n.slider-wrap {\n\tflex-direction: row;\n\tborder-top-width: 2px;\n\tborder-color: #dddddd;\n}\n.body {\n}\n</style>\n\n<script>\nconst dom = weex.requireModule('dom')\nconst animation = weex.requireModule('animation')\n\nexport default {\n\tdata () {\n\t\treturn {\n\t\t\twidth: 0,//单个tab宽度\n\t\t\tmin: 0,\n\t\t\ttransX: 0,\n\t\t\tstartX: 0,\n\t\t\tmoveX: 0,\n\t\t\tcurrent: 0,//当前tab index\n\t\t\tlineWidth: 0,//标题下划线宽度\n\t\t\tlineLeft: 0,\n\t\t\tline: 0//标题下划线translate计算比例\n\t\t}\n\t},\n\tprops: {\n\t\titems: {\n\t\t\ttype: Array,\n\t\t\trequired: true\n\t\t}\n\t},\n\tcomputed: {\n\t\tlineStyle () {\n\t\t\treturn {\n\t\t\t\twidth: `${this.lineWidth}px`,\n\t\t\t\t'margin-left': `${this.lineLeft}px`,\n\t\t\t\ttransform: `translateX(${-this.transX/this.line}px)`\n\t\t\t}\n\t\t},\n\t\tlistStyle () {\n\t\t\tlet sty = {\n\t\t\t\topacity: this.width === 0 ? 0 : 1\n\t\t\t}\n\t\t\t\n\t\t\tif (this.width > 0) {\n\t\t\t\tsty.width = `${this.width * this.items.length}px`\n\t\t\t\tsty.transform = `translateX(${this.transX}px)`\n\t\t\t}\n\n\t\t\treturn sty\n\t\t},\n\t\titemStyle () {\n\t\t\treturn {\n\t\t\t\twidth: `${this.width || 750}px`\n\t\t\t}\n\t\t}\n\t},\n\tmounted () {\n\t\tsetTimeout(() => {\n\t\t\tlet { platform } = weex.config.env;\n\t\t\tlet head = (typeof(window) === 'object' && platform.toLowerCase() === 'web') ? this.$refs.header.$children[0].$children[0] : this.$refs.header.children[0].children[0]\n\t\t\tdom.getComponentRect(head, opt => {\n\t\t\t\tthis.lineWidth = opt.size.width + 25\n\t\t\t\tthis.lineLeft = opt.size.left - 46 - 12.5\n\t\t\t})\n\t\t\tdom.getComponentRect(this.$refs.slider, opt => {\n\t\t\t\tthis.width = opt.size.width\n\t\t\t\tthis.line = this.width / (this.width - 92) * this.items.length\n\t\t\t\tthis.min = -this.width * (this.items.length - 1)\n\t\t\t})\n\t\t}, 100)\n\t},\n\tmethods: {\n\t\ttitleClick (idx) {\n\t\t\tthis.slide(-idx * this.width, -idx)\n\t\t\tthis.$emit('titleclick', idx)\n\t\t},\n\t\tstart (evt) {\n\t\t\tif (this.sliding) return\n\t\t\tthis.startX = evt.changedTouches[0].screenX\n\t\t\tthis.moveX = this.startX\n\t\t},\n\t\tmove (evt) {\n\t\t\tif (this.sliding) return\n\t\t\tlet x = evt.changedTouches[0].screenX\n\t\t\tlet sub = x - this.moveX\n\n\t\t\tthis.transX = Math.max(this.min, Math.min(0, this.transX + sub))\n\t\t\tthis.moveX = x\n\t\t},\n\t\tend (evt) {\n\t\t\tthis.sliding = true\n\n\t\t\tlet x = evt.changedTouches[0].screenX\n\t\t\tlet direct = x - this.startX > 0\n\t\t\tlet num = Math.floor(Math.abs(this.transX) / this.width)\n\t\t\tlet decimal = this.transX % this.width / this.width\n\t\t\tlet int = this.transX > 0 ? num : -num\n\t\t\tlet max = -this.items.length + 1\n\n\t\t\tif (decimal > .2 && direct) {\n\t\t\t\tint = Math.min(0, int + 1)\n\t\t\t} else if (decimal < -.2 && !direct) {\n\t\t\t\tint = Math.max(max, int - 1)\n\t\t\t}\n\n\t\t\tthis.slide(int * this.width, int)\n\t\t},\n\t\tslide (trans, idx) {\n\t\t\tanimation.transition(this.$refs.slider, {\n\t\t\t\tstyles: {\n\t\t\t\t\ttransform: `translateX(${trans}px)`\n\t\t\t\t},\n\t\t\t\tduration: 200,\n\t\t\t\ttimingFunction: 'ease-out'\n\t\t\t}, () => {\n\t\t\t\tthis.current = -idx\n\t\t\t\tthis.transX = trans\n\t\t\t\tthis.sliding = false\n\t\t\t\tthis.$emit('slidend', {selected: this.current})\n\t\t\t})\n\t\t\tanimation.transition(this.$refs.line, {\n\t\t\t\tstyles: {\n\t\t\t\t\ttransform: `translateX(${-trans/this.line}px)`\n\t\t\t\t},\n\t\t\t\tduration: 200,\n\t\t\t\ttimingFunction: 'ease-out'\n\t\t\t})\n\t\t}\n\t}\n}\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 50 */
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
/* 51 */
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
     require("vue-hot-reload-api").rerender("data-v-7b3900d4", module.exports)
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
  "data-v-72760b22",
  /* cssModules */
  null
)
Component.options.__file = "/Users/suen/Documents/develop/project/weex-mzui/packages/fm-tips/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-72760b22", Component.options)
  } else {
    hotAPI.reload("data-v-72760b22", Component.options)
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
var update = __webpack_require__(2)("931b880c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-72760b22\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-72760b22\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
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
exports.push([module.i, "\n.tip-wrap[data-v-72760b22] {\n\tflex-direction: row;\n\theight: 92px;\n\tmax-width: 630px;\n\tpadding-top: 15px;\n}\n.arrow[data-v-72760b22] {\n\tposition: absolute;\n\ttop: 7.5px;\n\twidth: 15px;\n\theight: 15px;\n\ttransform: rotate(45deg);\n}\n.content-wrap[data-v-72760b22] {\n\tflex-direction: row;\n\talign-items: center;\n\tpadding-top: 18.75px;\n\tpadding-right: 20.83px;\n\tpadding-bottom: 18.75px;\n\tpadding-left: 20.83px;\n\tborder-radius: 4px;\n}\n.content[data-v-72760b22] {\n\theight: 35px;\n\tmax-width: 512px;\n\tfont-size: 29.17px;\n\tcolor: #ffffff;\n}\n.split[data-v-72760b22] {\n\twidth: 2px;\n\theight: 31.25px;\n\tmargin-left: 20.83px;\n\tmargin-right: 20.83px;\n\tbackground-color: #ffffff;\n\topacity: .4;\n}\n.close[data-v-72760b22] {\n\twidth: 31.25px;\n\theight: 31.25px;\n\tline-height: 32px;\n\tcolor: #ffffff;\n\tfont-size: 50px;\n\ttransform: rotate(45deg);\n}\n\n", "", {"version":3,"sources":["/Users/suen/Documents/develop/project/weex-mzui/packages/fm-tips/index.vue?6375c262"],"names":[],"mappings":";AAaA;CACA,oBAAA;CACA,aAAA;CACA,iBAAA;CACA,kBAAA;CACA;AACA;CACA,mBAAA;CACA,WAAA;CACA,YAAA;CACA,aAAA;CACA,yBAAA;CACA;AACA;CACA,oBAAA;CACA,oBAAA;CACA,qBAAA;CACA,uBAAA;CACA,wBAAA;CACA,sBAAA;CACA,mBAAA;CACA;AACA;CACA,aAAA;CACA,iBAAA;CACA,mBAAA;CACA,eAAA;CACA;AACA;CACA,WAAA;CACA,gBAAA;CACA,qBAAA;CACA,sBAAA;CACA,0BAAA;CACA,YAAA;CACA;AACA;CACA,eAAA;CACA,gBAAA;CACA,kBAAA;CACA,eAAA;CACA,gBAAA;CACA,yBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n<div v-if=\"show\" class=\"tip-wrap\" :style=\"wrapStyle\">\n\t<div class=\"content-wrap\" :style=\"background\">\n\t\t<slot></slot>\n\t\t<text class=\"content\">{{message}}</text>\n\t\t<text class=\"split\"></text>\n\t\t<text class=\"close\" @click=\"close\">+</text>\n\t</div>\n\t<text class=\"arrow\" :style=\"arrowStyle\"></text>\n</div>\n</template>\n\n<style scoped>\n.tip-wrap {\n\tflex-direction: row;\n\theight: 92px;\n\tmax-width: 630px;\n\tpadding-top: 15px;\n}\n.arrow {\n\tposition: absolute;\n\ttop: 7.5px;\n\twidth: 15px;\n\theight: 15px;\n\ttransform: rotate(45deg);\n}\n.content-wrap {\n\tflex-direction: row;\n\talign-items: center;\n\tpadding-top: 18.75px;\n\tpadding-right: 20.83px;\n\tpadding-bottom: 18.75px;\n\tpadding-left: 20.83px;\n\tborder-radius: 4px;\n}\n.content {\n\theight: 35px;\n\tmax-width: 512px;\n\tfont-size: 29.17px;\n\tcolor: #ffffff;\n}\n.split {\n\twidth: 2px;\n\theight: 31.25px;\n\tmargin-left: 20.83px;\n\tmargin-right: 20.83px;\n\tbackground-color: #ffffff;\n\topacity: .4;\n}\n.close {\n\twidth: 31.25px;\n\theight: 31.25px;\n\tline-height: 32px;\n\tcolor: #ffffff;\n\tfont-size: 50px;\n\ttransform: rotate(45deg);\n}\n\n</style>\n\n<script>\nexport default {\n\tdata () {\n\t\treturn {\n\t\t\tshow: true\n\t\t}\n\t},\n\n\tcomputed: {\n\t\tbackground () {\n\t\t\treturn {\n\t\t\t\tbackgroundColor: this.bgColor\n\t\t\t}\n\t\t},\n\t\twrapStyle () {\n\t\t\treturn {\n\t\t\t\t'justify-content': this.right ? 'flex-end' : 'flex-start'\n\t\t\t}\n\t\t},\n\t\tarrowStyle () {\n\t\t\tlet sty = {\n\t\t\t\tbackgroundColor: this.bgColor\n\t\t\t}\n\t\t\tif (this.right) {\n\t\t\t\tsty.right = '38px'\n\t\t\t} else {\n\t\t\t\tsty.left = '38px'\n\t\t\t}\n\n\t\t\treturn sty\n\t\t}\n\t},\n\n\tprops: {\n\t\tmessage: String,\n\t\tbgColor: {\n\t\t\ttype: String,\n\t\t\tdefault: '#198ded'\n\t\t},\n\t\tright: Boolean\n\t},\n\n\tmethods: {\n\t\tclose () {\n\t\t\tthis.show = false\n\t\t\tthis.$emit('close')\n\t\t}\n\t}\n}\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),
/* 56 */
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
/* 57 */
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
  }), _vm._v(" "), _c('text', {
    staticClass: "close",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(undefined)),
    on: {
      "click": _vm.close
    }
  }, [_vm._v("+")])], 2), _vm._v(" "), _c('text', {
    staticClass: "arrow",
    staticStyle: _vm.$processStyle(undefined),
    style: (_vm.$processStyle(_vm.arrowStyle))
  })]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-72760b22", module.exports)
  }
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.web.js.map