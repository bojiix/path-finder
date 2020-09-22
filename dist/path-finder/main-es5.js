(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
    /*!*********************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/css-loader/dist/cjs.js??ref--14-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--14-3!./node_modules/sass-loader/dist/cjs.js??ref--14-4!./src/styles.scss ***!
      \*********************************************************************************************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesCssLoaderDistCjsJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesResolveUrlLoaderIndexJsNode_modulesSassLoaderDistCjsJsSrcStylesScss(module, exports, __webpack_require__) {
      // Imports
      var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
      /*! ../node_modules/css-loader/dist/runtime/api.js */
      "./node_modules/css-loader/dist/runtime/api.js");

      exports = ___CSS_LOADER_API_IMPORT___(true); // Module

      exports.push([module.i, "*,\nul {\n  padding: 0;\n  margin: 0;\n  user-select: none;\n  /* standard syntax */\n  -webkit-user-select: none;\n  /* webkit (safari, chrome) browsers */\n  -moz-user-select: none;\n  /* mozilla browsers */\n  -khtml-user-select: none;\n  /* webkit (konqueror) browsers */\n  -ms-user-select: none;\n  /* IE10+ */\n  /* Safari/Chrome, other WebKit */\n  /* Firefox, other Gecko */\n  box-sizing: border-box;\n  font-family: consolas;\n}", "", {
        "version": 3,
        "sources": ["styles.scss"],
        "names": [],
        "mappings": "AAAA;;EAEE,UAAA;EACA,SAAA;EACA,iBAAA;EAAmB,oBAAA;EACnB,yBAAA;EAA2B,qCAAA;EAC3B,sBAAA;EAAwB,qBAAA;EACxB,wBAAA;EAA0B,gCAAA;EAC1B,qBAAA;EAAuB,UAAA;EACS,gCAAA;EACH,yBAAA;EAC7B,sBAAA;EACA,qBAAA;AAQF",
        "file": "styles.scss",
        "sourcesContent": ["*,\r\nul {\r\n  padding: 0;\r\n  margin: 0;\r\n  user-select: none; /* standard syntax */\r\n  -webkit-user-select: none; /* webkit (safari, chrome) browsers */\r\n  -moz-user-select: none; /* mozilla browsers */\r\n  -khtml-user-select: none; /* webkit (konqueror) browsers */\r\n  -ms-user-select: none; /* IE10+ */\r\n  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\r\n  -moz-box-sizing: border-box; /* Firefox, other Gecko */\r\n  box-sizing: border-box;\r\n  font-family: consolas;\r\n}\r\n\r\n$colors: (\r\n  primary: #387ef5,\r\n  secondary: #32db64,\r\n  danger: #f53d3d,\r\n  light: #f4f4f4,\r\n  dark: #222,\r\n  favorite: #69bb7b,\r\n  visited1: rgb(66, 169, 187),\r\n  visited2: rgb(197, 106, 206),\r\n  wall: #2e3c5a,\r\n  path: rgb(241, 206, 49),\r\n);\r\n\r\n@mixin rule($key, $value, $prefix) {\r\n  #{$prefix}-#{$key}: $value;\r\n}\r\n@mixin map-to-string($map, $prefix) {\r\n  @each $key, $value in $map {\r\n    @include rule($key, $value, $prefix);\r\n  }\r\n}\r\n\r\n:export {\r\n  @include map-to-string($colors, \"colors\");\r\n}\r\n"]
      }]); // Exports

      exports.locals = {
        "colors-primary": "#387ef5",
        "colors-secondary": "#32db64",
        "colors-danger": "#f53d3d",
        "colors-light": "#f4f4f4",
        "colors-dark": "#222",
        "colors-favorite": "#69bb7b",
        "colors-visited1": "#42a9bb",
        "colors-visited2": "#c56ace",
        "colors-wall": "#2e3c5a",
        "colors-path": "#f1ce31"
      };
      module.exports = exports;
      /***/
    },

    /***/
    "./node_modules/css-loader/dist/runtime/api.js":
    /*!*****************************************************!*\
      !*** ./node_modules/css-loader/dist/runtime/api.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function node_modulesCssLoaderDistRuntimeApiJs(module, exports, __webpack_require__) {
      "use strict";
      /*
        MIT License http://www.opensource.org/licenses/mit-license.php
        Author Tobias Koppers @sokra
      */
      // css base code, injected by the css-loader
      // eslint-disable-next-line func-names

      module.exports = function (useSourceMap) {
        var list = []; // return the list of modules as css string

        list.toString = function toString() {
          return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);

            if (item[2]) {
              return "@media ".concat(item[2], " {").concat(content, "}");
            }

            return content;
          }).join('');
        }; // import a list of modules into the list
        // eslint-disable-next-line func-names


        list.i = function (modules, mediaQuery, dedupe) {
          if (typeof modules === 'string') {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, '']];
          }

          var alreadyImportedModules = {};

          if (dedupe) {
            for (var i = 0; i < this.length; i++) {
              // eslint-disable-next-line prefer-destructuring
              var id = this[i][0];

              if (id != null) {
                alreadyImportedModules[id] = true;
              }
            }
          }

          for (var _i = 0; _i < modules.length; _i++) {
            var item = [].concat(modules[_i]);

            if (dedupe && alreadyImportedModules[item[0]]) {
              // eslint-disable-next-line no-continue
              continue;
            }

            if (mediaQuery) {
              if (!item[2]) {
                item[2] = mediaQuery;
              } else {
                item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
              }
            }

            list.push(item);
          }
        };

        return list;
      };

      function cssWithMappingToString(item, useSourceMap) {
        var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

        var cssMapping = item[3];

        if (!cssMapping) {
          return content;
        }

        if (useSourceMap && typeof btoa === 'function') {
          var sourceMapping = toComment(cssMapping);
          var sourceURLs = cssMapping.sources.map(function (source) {
            return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
          });
          return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
        }

        return [content].join('\n');
      } // Adapted from convert-source-map (MIT)


      function toComment(sourceMap) {
        // eslint-disable-next-line no-undef
        var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
        var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
        return "/*# ".concat(data, " */");
      }
      /***/

    },

    /***/
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
    /*!****************************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
      \****************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
      "use strict";

      var isOldIE = function isOldIE() {
        var memo;
        return function memorize() {
          if (typeof memo === 'undefined') {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            memo = Boolean(window && document && document.all && !window.atob);
          }

          return memo;
        };
      }();

      var getTarget = function getTarget() {
        var memo = {};
        return function memorize(target) {
          if (typeof memo[target] === 'undefined') {
            var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

            if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
              try {
                // This will throw an exception if access to iframe is blocked
                // due to cross-origin restrictions
                styleTarget = styleTarget.contentDocument.head;
              } catch (e) {
                // istanbul ignore next
                styleTarget = null;
              }
            }

            memo[target] = styleTarget;
          }

          return memo[target];
        };
      }();

      var stylesInDom = [];

      function getIndexByIdentifier(identifier) {
        var result = -1;

        for (var i = 0; i < stylesInDom.length; i++) {
          if (stylesInDom[i].identifier === identifier) {
            result = i;
            break;
          }
        }

        return result;
      }

      function modulesToDom(list, options) {
        var idCountMap = {};
        var identifiers = [];

        for (var i = 0; i < list.length; i++) {
          var item = list[i];
          var id = options.base ? item[0] + options.base : item[0];
          var count = idCountMap[id] || 0;
          var identifier = "".concat(id, " ").concat(count);
          idCountMap[id] = count + 1;
          var index = getIndexByIdentifier(identifier);
          var obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3]
          };

          if (index !== -1) {
            stylesInDom[index].references++;
            stylesInDom[index].updater(obj);
          } else {
            stylesInDom.push({
              identifier: identifier,
              updater: addStyle(obj, options),
              references: 1
            });
          }

          identifiers.push(identifier);
        }

        return identifiers;
      }

      function insertStyleElement(options) {
        var style = document.createElement('style');
        var attributes = options.attributes || {};

        if (typeof attributes.nonce === 'undefined') {
          var nonce = true ? __webpack_require__.nc : undefined;

          if (nonce) {
            attributes.nonce = nonce;
          }
        }

        Object.keys(attributes).forEach(function (key) {
          style.setAttribute(key, attributes[key]);
        });

        if (typeof options.insert === 'function') {
          options.insert(style);
        } else {
          var target = getTarget(options.insert || 'head');

          if (!target) {
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          }

          target.appendChild(style);
        }

        return style;
      }

      function removeStyleElement(style) {
        // istanbul ignore if
        if (style.parentNode === null) {
          return false;
        }

        style.parentNode.removeChild(style);
      }
      /* istanbul ignore next  */


      var replaceText = function replaceText() {
        var textStore = [];
        return function replace(index, replacement) {
          textStore[index] = replacement;
          return textStore.filter(Boolean).join('\n');
        };
      }();

      function applyToSingletonTag(style, index, remove, obj) {
        var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

        /* istanbul ignore if  */

        if (style.styleSheet) {
          style.styleSheet.cssText = replaceText(index, css);
        } else {
          var cssNode = document.createTextNode(css);
          var childNodes = style.childNodes;

          if (childNodes[index]) {
            style.removeChild(childNodes[index]);
          }

          if (childNodes.length) {
            style.insertBefore(cssNode, childNodes[index]);
          } else {
            style.appendChild(cssNode);
          }
        }
      }

      function applyToTag(style, options, obj) {
        var css = obj.css;
        var media = obj.media;
        var sourceMap = obj.sourceMap;

        if (media) {
          style.setAttribute('media', media);
        } else {
          style.removeAttribute('media');
        }

        if (sourceMap && btoa) {
          css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
        } // For old IE

        /* istanbul ignore if  */


        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          while (style.firstChild) {
            style.removeChild(style.firstChild);
          }

          style.appendChild(document.createTextNode(css));
        }
      }

      var singleton = null;
      var singletonCounter = 0;

      function addStyle(obj, options) {
        var style;
        var update;
        var remove;

        if (options.singleton) {
          var styleIndex = singletonCounter++;
          style = singleton || (singleton = insertStyleElement(options));
          update = applyToSingletonTag.bind(null, style, styleIndex, false);
          remove = applyToSingletonTag.bind(null, style, styleIndex, true);
        } else {
          style = insertStyleElement(options);
          update = applyToTag.bind(null, style, options);

          remove = function remove() {
            removeStyleElement(style);
          };
        }

        update(obj);
        return function updateStyle(newObj) {
          if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
              return;
            }

            update(obj = newObj);
          } else {
            remove();
          }
        };
      }

      module.exports = function (list, options) {
        options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
        // tags it will allow on a page

        if (!options.singleton && typeof options.singleton !== 'boolean') {
          options.singleton = isOldIE();
        }

        list = list || [];
        var lastIdentifiers = modulesToDom(list, options);
        return function update(newList) {
          newList = newList || [];

          if (Object.prototype.toString.call(newList) !== '[object Array]') {
            return;
          }

          for (var i = 0; i < lastIdentifiers.length; i++) {
            var identifier = lastIdentifiers[i];
            var index = getIndexByIdentifier(identifier);
            stylesInDom[index].references--;
          }

          var newLastIdentifiers = modulesToDom(newList, options);

          for (var _i = 0; _i < lastIdentifiers.length; _i++) {
            var _identifier = lastIdentifiers[_i];

            var _index = getIndexByIdentifier(_identifier);

            if (stylesInDom[_index].references === 0) {
              stylesInDom[_index].updater();

              stylesInDom.splice(_index, 1);
            }
          }

          lastIdentifiers = newLastIdentifiers;
        };
      };
      /***/

    },

    /***/
    "./node_modules/worker-plugin/dist/loader.js?name=0!./src/app/grid/grid.worker.ts":
    /*!****************************************************************************************!*\
      !*** ./node_modules/worker-plugin/dist/loader.js?name=0!./src/app/grid/grid.worker.ts ***!
      \****************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesWorkerPluginDistLoaderJsName0SrcAppGridGridWorkerTs(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + "0-es5.worker.js";
      /***/
    },

    /***/
    "./src/app/algorithms/backtracking.ts":
    /*!********************************************!*\
      !*** ./src/app/algorithms/backtracking.ts ***!
      \********************************************/

    /*! exports provided: BackTracking */

    /***/
    function srcAppAlgorithmsBacktrackingTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BackTracking", function () {
        return BackTracking;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./globals */
      "./src/app/algorithms/globals.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var BackTracking = /*#__PURE__*/function () {
        function BackTracking() {
          _classCallCheck(this, BackTracking);

          this.stopAlgo = false;
          this.currentPath = [];
        }

        _createClass(BackTracking, [{
          key: "start",
          value: function start(interCommService) {
            var _this = this;

            this.stopAlgo = false;

            if (_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].paths.length == 0) {
              _globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].paths.push(_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].startPoint);

              _globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].currentLevelInPaths = 1;
            }

            var result1 = function result1(value) {
              _this.clear();

              console.log("value", value);

              _globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].shortestPath.forEach(function (el) {
                console.log("el", el);
              });

              Object(_globals__WEBPACK_IMPORTED_MODULE_1__["updateShortestPath"])(_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].colorIndex);
              interCommService.setMessage("reset-button");
            };

            var result = function result(value) {
              console.log(value);

              if (value == true) {
                _globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].currentLevelInShortestPath = 1;

                _this.currentPath.push(_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].startPoint);

                _this.minimum = _globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].horizontalGridSize * _globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].verticalGridSize + 1;
                _globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].colorOffset = _globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].colorPreset.getColorOffset();
                _globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].colorIndex = Math.floor(Math.random() * Math.floor(3));

                _this.secondWave(_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].currentLevelInShortestPath).then(function (value) {
                  return result1(value);
                });
              }
            };

            if (_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].currentLevelInShortestPath == 0) {
              console.log("sh", _globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].shortestPath);
              this.firstWave(_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].currentLevelInPaths).then(function (value) {
                return result(value);
              });
            }
          }
        }, {
          key: "stop",
          value: function stop() {
            this.stopAlgo = true;
          }
        }, {
          key: "clear",
          value: function clear() {
            this.currentPath = [];
          }
        }, {
          key: "firstWave",
          value: function firstWave(lvl) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _loop, x, _ret;

              return regeneratorRuntime.wrap(function _callee$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].currentLevelInPaths = lvl;

                      if (!(this.stopAlgo == true)) {
                        _context2.next = 3;
                        break;
                      }

                      return _context2.abrupt("return", false);

                    case 3:
                      _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop(x) {
                        var i, j, newPoint;
                        return regeneratorRuntime.wrap(function _loop$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                i = void 0, j = void 0;

                                if (!(_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].paths[lvl - 1] == undefined)) {
                                  _context.next = 3;
                                  break;
                                }

                                return _context.abrupt("return", {
                                  v: true
                                });

                              case 3:
                                i = _globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].paths[lvl - 1].verticalPos + _globals__WEBPACK_IMPORTED_MODULE_1__["dirY"][x];
                                j = _globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].paths[lvl - 1].horizontalPos + _globals__WEBPACK_IMPORTED_MODULE_1__["dirX"][x];
                                newPoint = {};
                                newPoint.verticalPos = i;
                                newPoint.horizontalPos = j;

                                if (!(i < 0 || i >= _globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].verticalGridSize || j < 0 || j >= _globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].horizontalGridSize || _globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].paths.find(function (obj) {
                                  return obj.verticalPos == i && obj.horizontalPos == j;
                                }) || _globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].freq_table[i][j] != 0 && _globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].freq_table[i][j] != "end")) {
                                  _context.next = 10;
                                  break;
                                }

                                return _context.abrupt("return", "continue");

                              case 10:
                                _globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].paths.push(newPoint);

                                if (!(JSON.stringify(_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].paths[_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].paths.length - 1]) === JSON.stringify(_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].endPoint))) {
                                  _context.next = 13;
                                  break;
                                }

                                return _context.abrupt("return", {
                                  v: true
                                });

                              case 13:
                                Object(_globals__WEBPACK_IMPORTED_MODULE_1__["addPaths"])(_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].grid.nativeElement.children[i + 1].children[j]);
                                _context.next = 16;
                                return Object(_globals__WEBPACK_IMPORTED_MODULE_1__["delay"])(_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].speed);

                              case 16:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _loop);
                      });
                      x = 0;

                    case 5:
                      if (!(x < 4)) {
                        _context2.next = 15;
                        break;
                      }

                      return _context2.delegateYield(_loop(x), "t0", 7);

                    case 7:
                      _ret = _context2.t0;

                      if (!(_ret === "continue")) {
                        _context2.next = 10;
                        break;
                      }

                      return _context2.abrupt("continue", 12);

                    case 10:
                      if (!(typeof _ret === "object")) {
                        _context2.next = 12;
                        break;
                      }

                      return _context2.abrupt("return", _ret.v);

                    case 12:
                      x++;
                      _context2.next = 5;
                      break;

                    case 15:
                      return _context2.abrupt("return", this.firstWave(lvl + 1));

                    case 16:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "secondWave",
          value: function secondWave(lvl) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var _loop2, x, _ret2;

              return regeneratorRuntime.wrap(function _callee2$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!(this.stopAlgo == true)) {
                        _context4.next = 5;
                        break;
                      }

                      _context4.next = 3;
                      return Object(_globals__WEBPACK_IMPORTED_MODULE_1__["delay"])(1);

                    case 3:
                      _context4.next = 0;
                      break;

                    case 5:
                      _loop2 = /*#__PURE__*/regeneratorRuntime.mark(function _loop2(x) {
                        var i, j, newPoint;
                        return regeneratorRuntime.wrap(function _loop2$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                i = void 0, j = void 0;
                                i = _this2.currentPath[lvl - 1].verticalPos + _globals__WEBPACK_IMPORTED_MODULE_1__["dirY"][x];
                                j = _this2.currentPath[lvl - 1].horizontalPos + _globals__WEBPACK_IMPORTED_MODULE_1__["dirX"][x];
                                newPoint = {};
                                newPoint.verticalPos = i;
                                newPoint.horizontalPos = j;

                                if (!(!_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].paths.find(function (obj) {
                                  return JSON.stringify(obj) === JSON.stringify(newPoint);
                                }) || _this2.currentPath.find(function (obj) {
                                  return JSON.stringify(obj) === JSON.stringify(newPoint);
                                }) || _globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].freq_table[i][j] == 3)) {
                                  _context3.next = 8;
                                  break;
                                }

                                return _context3.abrupt("return", "continue");

                              case 8:
                                if (!(JSON.stringify(newPoint) === JSON.stringify(_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].endPoint))) {
                                  _context3.next = 11;
                                  break;
                                }

                                if (_this2.currentPath.length + 1 < _globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].shortestPath.length || _globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].shortestPath.length == 0) {
                                  _this2.minimum = _this2.currentPath.length;
                                  _globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].shortestPath = _this2.currentPath.slice();

                                  _globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].shortestPath.push(_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].endPoint);
                                }

                                return _context3.abrupt("return", "continue");

                              case 11:
                                _this2.currentPath.push(newPoint);

                                Object(_globals__WEBPACK_IMPORTED_MODULE_1__["updateShortestPath"])(_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].colorIndex, i + 1, j);
                                _context3.next = 15;
                                return Object(_globals__WEBPACK_IMPORTED_MODULE_1__["delay"])(1);

                              case 15:
                                _context3.next = 17;
                                return _this2.secondWave(lvl + 1);

                              case 17:
                                _this2.currentPath.pop();

                                Object(_globals__WEBPACK_IMPORTED_MODULE_1__["updateShortestPath"])(_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].colorIndex, undefined, undefined, _globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].grid.nativeElement.children[i + 1].children[j]);

                              case 19:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _loop2);
                      });
                      x = 0;

                    case 7:
                      if (!(x < 4)) {
                        _context4.next = 15;
                        break;
                      }

                      return _context4.delegateYield(_loop2(x), "t0", 9);

                    case 9:
                      _ret2 = _context4.t0;

                      if (!(_ret2 === "continue")) {
                        _context4.next = 12;
                        break;
                      }

                      return _context4.abrupt("continue", 12);

                    case 12:
                      x++;
                      _context4.next = 7;
                      break;

                    case 15:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return BackTracking;
      }();

      BackTracking.ɵfac = function BackTracking_Factory(t) {
        return new (t || BackTracking)();
      };

      BackTracking.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: BackTracking,
        factory: BackTracking.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BackTracking, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/algorithms/globals.ts":
    /*!***************************************!*\
      !*** ./src/app/algorithms/globals.ts ***!
      \***************************************/

    /*! exports provided: GlobalVariables, delay, RGB, dirY, dirX, dirYcomplex, dirXcomplex, algorithms, speeds, addPaths, updateFreq, updateShortestPath */

    /***/
    function srcAppAlgorithmsGlobalsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalVariables", function () {
        return GlobalVariables;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "delay", function () {
        return delay;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RGB", function () {
        return RGB;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dirY", function () {
        return dirY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dirX", function () {
        return dirX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dirYcomplex", function () {
        return dirYcomplex;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dirXcomplex", function () {
        return dirXcomplex;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "algorithms", function () {
        return algorithms;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "speeds", function () {
        return speeds;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "addPaths", function () {
        return addPaths;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateFreq", function () {
        return updateFreq;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateShortestPath", function () {
        return updateShortestPath;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/styles.scss */
      "./src/styles.scss");
      /* harmony import */


      var src_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(src_styles_scss__WEBPACK_IMPORTED_MODULE_1__);

      var GlobalVariables = function GlobalVariables() {
        _classCallCheck(this, GlobalVariables);
      };

      GlobalVariables.speed = 0;
      GlobalVariables.verticalGridSize = 30;
      GlobalVariables.paths = [];
      GlobalVariables.shortestPath = [];
      GlobalVariables.currentLevelInPaths = 0;
      GlobalVariables.currentLevelInShortestPath = 0;

      function delay(ms) {
        return new Promise(function (resolve) {
          return setTimeout(resolve, ms);
        });
      }

      var RGB = ["R", "G", "B"];
      var dirY = [-1, 0, 1, 0];
      var dirX = [0, 1, 0, -1];
      var dirYcomplex = [-1, -1, 0, 1, 1, 1, 0, -1];
      var dirXcomplex = [0, 1, 1, 1, 0, -1, -1, -1];
      var algorithms = ["Dijkstra's Algorithm", "A* Search", "Greedy Best-first Search", "Back-tracking"];
      var speeds = [{
        text: "Fastest",
        value: 1
      }, {
        text: "Very Fast",
        value: 25
      }, {
        text: "Fast",
        value: 50
      }, {
        text: "Medium",
        value: 150
      }, {
        text: "Slow",
        value: 250
      }, {
        text: "Very Slow",
        value: 500
      }, {
        text: "Slowest",
        value: 1000
      }];

      function addPaths(el) {
        if (el.className == "grid-block" && Array.from(el.children).length == 0) {
          el.style.background = src_styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a["colors-visited1"]; //el.style.borderColor = "#fff";

          updateFreq(2, el, undefined, undefined);
          return true;
        }

        return false;
      }

      function updateFreq(val, el, i, j) {
        if (el == window) {
          return -1;
        }

        if (el != undefined && (i == undefined || j == undefined)) {
          i = Array.from(el.parentNode.parentNode.children).indexOf(el.parentNode) - 1;
          j = Array.from(el.parentNode.children).indexOf(el);
        }

        if (typeof val === "string") {
          val = val.split(/[- ]/)[0];
        }

        GlobalVariables.freq_table[i][j] = val; //console.log(i, j);

        if (val == "start") {
          GlobalVariables.startPoint = {
            verticalPos: i,
            horizontalPos: j
          };
        } else if (val == "end") {
          GlobalVariables.endPoint = {
            verticalPos: i,
            horizontalPos: j
          };
        } //console.log(this.freq_table);

      }

      function updateShortestPath() {
        var colorIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        var j = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
        var el = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var color, colorOffset, x, ni, nj, block, angle, pos;
          return regeneratorRuntime.wrap(function _callee3$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  if (!(el != undefined)) {
                    _context5.next = 4;
                    break;
                  }

                  addPaths(el); //updateFreq(2, el, undefined, undefined);

                  _context5.next = 38;
                  break;

                case 4:
                  color = GlobalVariables.colorPreset.defaultColor.shortestPathNodeDefault;
                  colorOffset = GlobalVariables.colorOffset;

                  if (!(i != undefined && j != undefined)) {
                    _context5.next = 10;
                    break;
                  }

                  GlobalVariables.grid.nativeElement.children[i].children[j].style.background = GlobalVariables.colorPreset.getColor(color);
                  updateFreq(1, undefined, i - 1, j);
                  return _context5.abrupt("return");

                case 10:
                  console.log("fooor", color, colorOffset, GlobalVariables.paths.length);
                  x = 1;

                case 12:
                  if (!(x < GlobalVariables.shortestPath.length - 1)) {
                    _context5.next = 38;
                    break;
                  }

                  ni = void 0, nj = void 0;
                  console.log(color);
                  i = GlobalVariables.shortestPath[x].verticalPos;
                  j = GlobalVariables.shortestPath[x].horizontalPos;
                  ni = GlobalVariables.shortestPath[x + 1].verticalPos;
                  nj = GlobalVariables.shortestPath[x + 1].horizontalPos;
                  GlobalVariables.grid.nativeElement.children[i + 1].children[j].style.background = GlobalVariables.colorPreset.getColor(color); //this.colorPreset.changeColor(color, colorOffset, this.RGB)

                  updateFreq(1, undefined, i, j);
                  block = GlobalVariables.renderer.createElement("div");
                  block.setAttribute("class", "start-node");
                  GlobalVariables.renderer.appendChild(GlobalVariables.grid.nativeElement.children[i + 1].children[j], block); //console.log(block.style);

                  block.style.borderWidth = "0 1px 1px 0";
                  block.style.padding = "2px";
                  block.style.position = "absolute";
                  block.style.top = "50%";
                  block.style.left = "50%";
                  block.style.borderColor = "#2e3c5a";
                  angle = "rotate(45deg)", pos = "translate(-20%, -70%)";

                  if (i > ni) {
                    angle = "rotate(-135deg)";
                    pos = "translate(0%, -45%)";
                  } else if (i < ni) {
                    angle = "rotate(45deg)";
                    pos = "translate(-45%, 0%)";
                  } else if (j > nj) {
                    angle = "rotate(135deg)";
                    pos = "translate(0%, 45%)";
                  } else if (j < nj) {
                    angle = "rotate(-45deg)";
                    pos = "translate(-20%, -70%)"; // translate(-{border-sum}px, -{2*padding}px)
                  }

                  block.style.transform = angle + " " + pos;
                  _context5.next = 35;
                  return delay(50);

                case 35:
                  x++;
                  _context5.next = 12;
                  break;

                case 38:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee3);
        }));
      }
      /***/

    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _top_header_top_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./top-header/top-header.component */
      "./src/app/top-header/top-header.component.ts");
      /* harmony import */


      var _objects_header_objects_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./objects-header/objects-header.component */
      "./src/app/objects-header/objects-header.component.ts");
      /* harmony import */


      var _grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./grid/grid.component */
      "./src/app/grid/grid.component.ts");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./footer/footer.component */
      "./src/app/footer/footer.component.ts");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'path-finder';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 4,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-objects-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
          }
        },
        directives: [_top_header_top_header_component__WEBPACK_IMPORTED_MODULE_1__["TopHeaderComponent"], _objects_header_objects_header_component__WEBPACK_IMPORTED_MODULE_2__["ObjectsHeaderComponent"], _grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _top_header_top_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./top-header/top-header.component */
      "./src/app/top-header/top-header.component.ts");
      /* harmony import */


      var _objects_header_objects_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./objects-header/objects-header.component */
      "./src/app/objects-header/objects-header.component.ts");
      /* harmony import */


      var _grid_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./grid/grid.component */
      "./src/app/grid/grid.component.ts");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./footer/footer.component */
      "./src/app/footer/footer.component.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _top_header_top_header_component__WEBPACK_IMPORTED_MODULE_4__["TopHeaderComponent"], _objects_header_objects_header_component__WEBPACK_IMPORTED_MODULE_5__["ObjectsHeaderComponent"], _grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _top_header_top_header_component__WEBPACK_IMPORTED_MODULE_4__["TopHeaderComponent"], _objects_header_objects_header_component__WEBPACK_IMPORTED_MODULE_5__["ObjectsHeaderComponent"], _grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/footer/footer.component.ts":
    /*!********************************************!*\
      !*** ./src/app/footer/footer.component.ts ***!
      \********************************************/

    /*! exports provided: FooterComponent */

    /***/
    function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 2,
        vars: 0,
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "All rights reserved to !");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/grid/grid.component.ts":
    /*!****************************************!*\
      !*** ./src/app/grid/grid.component.ts ***!
      \****************************************/

    /*! exports provided: GridComponent */

    /***/
    function srcAppGridGridComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */


      (function (__webpack__worker__0) {
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "GridComponent", function () {
          return GridComponent;
        });
        /* harmony import */


        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @angular/core */
        "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
        /* harmony import */


        var _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../algorithms/globals */
        "./src/app/algorithms/globals.ts");
        /* harmony import */


        var src_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! src/styles.scss */
        "./src/styles.scss");
        /* harmony import */


        var src_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(src_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */


        var _services_draggables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../services/draggables.service */
        "./src/app/services/draggables.service.ts");
        /* harmony import */


        var _services_inter_communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../services/inter-communication.service */
        "./src/app/services/inter-communication.service.ts");
        /* harmony import */


        var _presets_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ../presets/colors */
        "./src/app/presets/colors.ts");
        /* harmony import */


        var _algorithms_backtracking__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ../algorithms/backtracking */
        "./src/app/algorithms/backtracking.ts");
        /* harmony import */


        var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! @angular/common */
        "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

        var _c0 = ["grid"];

        var _c1 = function _c1(a0) {
          return {
            "algo-name": a0
          };
        };

        var GridComponent = /*#__PURE__*/function () {
          function GridComponent(renderer, elementRef, dragService, interCommService, colorPreset, bt) {
            _classCallCheck(this, GridComponent);

            this.renderer = renderer;
            this.elementRef = elementRef;
            this.dragService = dragService;
            this.interCommService = interCommService;
            this.colorPreset = colorPreset;
            this.bt = bt;
            this.draggables = {};
            this.node_type = ["start", "end", "bomb", "weight", "wall"]; ////!!!!!!!!!!???

            this.mousedown = false;
            this.eraseWall = false;
            this.chosenAlgorithm = "";
            this.stopAlgo = false;
          }

          _createClass(GridComponent, [{
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {
              _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].grid = this.grid;
              _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].colorPreset = this.colorPreset;
              _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].renderer = this.renderer;
              this.createGrid(); //this.runWorker();
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              this.registerSubscriptions();
              this.setSeparateEvents();
            }
          }, {
            key: "registerSubscriptions",
            value: function registerSubscriptions() {
              var _this3 = this;

              this.interCommService.dataObservable.subscribe(function (message) {
                //console.log(message);
                if (message == "clear-board") {
                  _this3.clearBoard();
                } else if (message == "clear-walls-weight") {
                  _this3.clearWallsAndWeight();
                } else if (message == "clear-path") {
                  _this3.clearPaths();
                } else if (_algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["algorithms"].indexOf(message) > -1) {
                  _this3.chosenAlgorithm = message;
                } else if (message == "remove-algo") {
                  _this3.chosenAlgorithm = "";
                } else if (message == "start-visualizing") {
                  _this3.stopAlgo = false;

                  _this3.visualize();
                } else if (message == "stop-visualizing") {
                  _this3.stopAlgo = true;

                  _this3.visualize();
                } else if (typeof message === "string") {
                  var x = message.split(/[-]/);

                  if (x[0] == "speed") {
                    _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].speed = parseInt(x[1]);
                  }
                }
              });
              this.addOption();
            }
          }, {
            key: "setSeparateEvents",
            value: function setSeparateEvents() {
              var _this4 = this;

              /*window.addEventListener('mousedown', e => {
                e.stopPropagation();
              }, true);*/
              window.addEventListener("mouseup", function (e) {
                e.stopPropagation();
                _this4.mousedown = false;
              }, true);
              /*window*/

              document.getElementById("grid-section").addEventListener("dblclick", function (e) {
                e.stopPropagation();
                _this4.eraseWall = !_this4.eraseWall;
                _this4.grid.nativeElement.style.cursor = "cell";

                if (_this4.eraseWall == true) {
                  _this4.grid.nativeElement.style.cursor = "pointer";

                  _this4.addOrRemoveWall(e.target);
                }
              }, true);
              window.addEventListener("drop", function (e) {
                return _this4.onDrop(e);
              }, false);
              window.addEventListener("dragover", function (e) {
                return _this4.onDragOver(e);
              }, false);
            }
          }, {
            key: "addOption",
            value: function addOption() {
              var _this5 = this;

              this.dragService.currentOption.subscribe(function (option) {
                _this5.option = option;

                if (!(option in _this5.draggables) && option != "" || option in _this5.draggables && option != "start-node" && option != "end-node square") {
                  _this5.draggables[option] = option in _this5.draggables ? _this5.draggables[option] + 1 : 1; //console.log(this.draggables);

                  var block = _this5.renderer.createElement("div");

                  block.setAttribute("class", option);
                  block.setAttribute("style", "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);");
                  block.style.cursor = "inherit";

                  var block1 = _this5.renderer.createElement("div");

                  if (option == "bomb-node square") block1.innerHTML = "!";
                  if (option != "start-node") _this5.renderer.appendChild(block, block1);
                  var to_break = false;
                  var rows = Array.from(_this5.grid.nativeElement.children);

                  var _iterator = _createForOfIteratorHelper(rows.entries()),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var _step$value = _slicedToArray(_step.value, 2),
                          i = _step$value[0],
                          row = _step$value[1];

                      if (i > 0) {
                        var rowArray = Array.from(row.children);

                        var _iterator2 = _createForOfIteratorHelper(rowArray.entries()),
                            _step2;

                        try {
                          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                            var _step2$value = _slicedToArray(_step2.value, 2),
                                j = _step2$value[0],
                                blockToAddIn = _step2$value[1];

                            var children = Array.from(blockToAddIn.children);

                            if (children.length == 0 && _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].freq_table[i - 1][j] == 0) {
                              to_break = true;

                              var parent = _this5.renderer.createElement("div");

                              parent.setAttribute("draggable", "true");
                              parent.setAttribute("class", "draggable");
                              parent.addEventListener("dragstart", function (e) {
                                return _this5.onDragStart(e);
                              }, true);

                              _this5.renderer.appendChild(parent, block);

                              _this5.renderer.appendChild(blockToAddIn, parent);

                              Object(_algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["updateFreq"])(block.className, undefined, i - 1, j);
                              break;
                            }
                          }
                        } catch (err) {
                          _iterator2.e(err);
                        } finally {
                          _iterator2.f();
                        }
                      }

                      if (to_break == true) break;
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }
                } else {}
              });
            }
          }, {
            key: "createGrid",
            value: function createGrid() {
              var _this6 = this;

              var blockSize;
              this.grid.nativeElement.style.cursor = "cell";
              this.windowWidth = window.innerWidth;
              _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].freq_table = [];
              var firstBlock = this.renderer.createElement("div");
              firstBlock.setAttribute("class", "grid-block");
              this.renderer.appendChild(this.grid.nativeElement, firstBlock);
              firstBlock = this.grid.nativeElement.children[1];
              blockSize = parseFloat(window.getComputedStyle(firstBlock).width);
              var nWidth = parseFloat(window.getComputedStyle(this.grid.nativeElement).width);
              var hLength = Math.floor(nWidth / blockSize) - 1;
              var vLength = _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].verticalGridSize;
              _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].horizontalGridSize = hLength;

              for (var i = 0; i < vLength; i++) {
                var row = this.renderer.createElement("div");
                row.setAttribute("class", "grid-row");
                this.renderer.appendChild(this.grid.nativeElement, row);
                _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].freq_table[i] = [];

                for (var j = 0; j < hLength; j++) {
                  _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].freq_table[i][j] = 0;

                  if (i == 0 && j == 0) {
                    this.renderer.appendChild(row, firstBlock);
                    firstBlock.addEventListener("dragover", function (e) {
                      return _this6.onDragOver(e);
                    }, true);
                    firstBlock.addEventListener("drop", function (e) {
                      return _this6.onDrop(e);
                    }, true);
                    firstBlock.addEventListener("mouseover", function (e) {
                      return _this6.onMouseOver(e);
                    }, true);
                    firstBlock.addEventListener("mousedown", function (e) {
                      return _this6.onMouseDown(e);
                    }, true);
                    continue;
                  }

                  var block = this.renderer.createElement("div");
                  block.setAttribute("class", "grid-block");
                  block.addEventListener("dragover", function (e) {
                    return _this6.onDragOver(e);
                  }, true);
                  block.addEventListener("drop", function (e) {
                    return _this6.onDrop(e);
                  }, true);
                  block.addEventListener("mouseover", function (e) {
                    return _this6.onMouseOver(e);
                  }, true);
                  block.addEventListener("mousedown", function (e) {
                    return _this6.onMouseDown(e);
                  }, true);
                  var att = document.createAttribute("style");
                  var r = 0,
                      b = 0;

                  if (j == hLength - 1) {
                    r = 1;
                  }

                  if (i == vLength - 1) {
                    b = 1;
                  }

                  if (r == 1 || b == 1) {
                    att.value = "border-width: 1px " + r + "px " + b + "px " + "1px;";
                    block.setAttributeNode(att);
                  }

                  this.renderer.appendChild(row, block);
                }
              }

              this.grid.nativeElement.setAttribute("id", "grid-new");
            }
          }, {
            key: "stopAlgorithm",
            value: function stopAlgorithm() {
              this.interCommService.setMessage("stop-visualizing");
            }
          }, {
            key: "destroyGrid",
            value: function destroyGrid() {
              var _this7 = this;

              this.stopAlgorithm();
              var first = true;
              this.grid.nativeElement.setAttribute("id", "grid");
              var children = Array.from(this.grid.nativeElement.children);
              children.forEach(function (child) {
                if (!first) {
                  _this7.renderer.removeChild(_this7.grid.nativeElement, child);
                } else {
                  first = false;
                }
              });
              this.draggables = {};
              _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].currentLevelInPaths = 0;
              _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].currentLevelInShortestPath = 0;
              _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].paths = [];
              _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].freq_table = [];
              _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].shortestPath = [];
              this.bt.clear();
            }
          }, {
            key: "clearBoard",
            value: function clearBoard() {
              var _this8 = this;

              this.stopAlgorithm();
              var aux = this.eraseWall;
              this.eraseWall = true;
              var rows = Array.from(this.grid.nativeElement.children);

              var _iterator3 = _createForOfIteratorHelper(rows.entries()),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _step3$value = _slicedToArray(_step3.value, 2),
                      i = _step3$value[0],
                      row = _step3$value[1];

                  if (i > 0) {
                    var rowArray = Array.from(row.children);

                    var _iterator4 = _createForOfIteratorHelper(rowArray.entries()),
                        _step4;

                    try {
                      var _loop3 = function _loop3() {
                        var _step4$value = _slicedToArray(_step4.value, 2),
                            j = _step4$value[0],
                            block = _step4$value[1];

                        if (_this8.addOrRemoveWall(block) == false) {
                          block.style.background = "none";
                          Object(_algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["updateFreq"])(0, undefined, i - 1, j);
                          Array.from(block.children).forEach(function (child) {
                            _this8.renderer.removeChild(block, child);
                          });
                        }
                      };

                      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                        _loop3();
                      }
                    } catch (err) {
                      _iterator4.e(err);
                    } finally {
                      _iterator4.f();
                    }
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              this.eraseWall = aux;
              this.draggables = {};
              _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].currentLevelInPaths = 0;
              _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].currentLevelInShortestPath = 0;
              _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].paths = [];
              _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].shortestPath = [];
              this.bt.clear();
            }
          }, {
            key: "clearWallsAndWeight",
            value: function clearWallsAndWeight() {
              var _this9 = this;

              this.stopAlgorithm();
              var aux = this.eraseWall;
              this.eraseWall = true;
              var rows = Array.from(this.grid.nativeElement.children);

              var _iterator5 = _createForOfIteratorHelper(rows.entries()),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var _step5$value = _slicedToArray(_step5.value, 2),
                      i = _step5$value[0],
                      row = _step5$value[1];

                  if (i > 0) {
                    var rowArray = Array.from(row.children);

                    var _iterator6 = _createForOfIteratorHelper(rowArray.entries()),
                        _step6;

                    try {
                      var _loop4 = function _loop4() {
                        var _step6$value = _slicedToArray(_step6.value, 2),
                            j = _step6$value[0],
                            block = _step6$value[1];

                        if (_this9.addOrRemoveWall(block, _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].freq_table[i - 1][j]) == false) {
                          if (_algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].freq_table[i - 1][j] == "weight") {
                            Object(_algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["updateFreq"])(0, undefined, i - 1, j);
                            Array.from(block.children).forEach(function (child) {
                              _this9.renderer.removeChild(block, child);
                            });
                          }
                        }
                      };

                      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                        _loop4();
                      }
                    } catch (err) {
                      _iterator6.e(err);
                    } finally {
                      _iterator6.f();
                    }
                  }
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              this.eraseWall = aux;
              delete this.draggables["weight-node square"];
            }
          }, {
            key: "clearPaths",
            value: function clearPaths() {
              this.stopAlgorithm();

              for (var x = 0; x < _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].paths.length; x++) {
                var i = void 0,
                    j = void 0;
                i = _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].paths[x].verticalPos;
                j = _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].paths[x].horizontalPos;

                if (_algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].freq_table[i][j] == 1 || _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].freq_table[i][j] == 2) {
                  Object(_algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["updateFreq"])(0, undefined, i, j);
                  this.grid.nativeElement.children[i + 1].children[j].style.background = "none";
                }
              }

              _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].currentLevelInPaths = 0;
              _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].currentLevelInShortestPath = 0;
              _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].paths = [];
              _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].shortestPath = [];
              this.bt.clear();
            }
          }, {
            key: "addOrRemoveWall",
            value: function addOrRemoveWall(el) {
              var freq = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
              var i, j;

              if (freq == -1) {
                i = Array.from(el.parentNode.parentNode.children).indexOf(el.parentNode) - 1;
                j = Array.from(el.parentNode.children).indexOf(el);
                freq = _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].freq_table[i][j];
              }

              if (el.className == "grid-block" && Array.from(el.children).length == 0 && freq != 1 //&&
              //freq != 2
              ) {
                  if (this.eraseWall == false) {
                    //console.log(el.style);
                    el.style.background = src_styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a["colors-wall"];
                    Object(_algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["updateFreq"])(3, el, undefined, undefined);
                  } else if (freq != 2) {
                    el.style.background = "none";
                    Object(_algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["updateFreq"])(0, el, undefined, undefined); //this will eraseWall the drawn paths too
                  } else if (freq == 2) {
                    return false;
                  }

                  return true;
                }

              return false;
            } //////////// events

          }, {
            key: "alert",
            value: function alert() {
              if (window.confirm("Beware!") == true) {
                console.log("zoom");
              } else {
                console.log("not zoom");
              }
            }
          }, {
            key: "onResize",
            value: function onResize(event) {
              if (this.windowWidth == window.innerWidth) return; //this.alert();

              this.windowWidth = window.innerWidth;
              this.destroyGrid();
              this.createGrid();
            }
          }, {
            key: "onDragStart",
            value: function onDragStart(event) {
              if (!(event instanceof DragEvent)) return;
              event.stopPropagation(); //event.preventDefault();

              this.dragged = event.currentTarget;
              this.mousedown = false;
            }
          }, {
            key: "onDragOver",
            value: function onDragOver(event) {
              if (event instanceof DragEvent) {
                event.stopPropagation();
                event.preventDefault();
                this.mousedown = false;
              }
            }
          }, {
            key: "onDrop",
            value: function onDrop(event) {
              if (event instanceof DragEvent) {
                event.stopPropagation();
                event.preventDefault();
              } else return;

              this.mousedown = false;

              if (event.currentTarget != window) {
                if (this.dragged.parentNode.className != event.currentTarget.className) return;
                if (Array.from(event.currentTarget.children).length > 0) return;
              } //console.log(this.dragged.parentNode, event.target, event.currentTarget);


              var i, j;
              i = Array.from(this.dragged.parentNode.parentNode.parentNode.children).indexOf(this.dragged.parentNode.parentNode) - 1;
              j = Array.from(this.dragged.parentNode.parentNode.children).indexOf(this.dragged.parentNode);
              _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].freq_table[i][j] = 0;

              if (Object(_algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["updateFreq"])(this.dragged.firstElementChild.className, event.currentTarget, undefined, undefined) == -1) {
                delete this.draggables[this.dragged.firstElementChild.className];
                this.dragged.parentNode.removeChild(this.dragged);
                return;
              }

              this.renderer.setStyle(event.currentTarget, "background", "none");
              event.currentTarget.appendChild(this.dragged);
            }
          }, {
            key: "onMouseOver",
            value: function onMouseOver(event) {
              if (this.mousedown == true) {
                this.addOrRemoveWall(event.currentTarget);
              }
            }
          }, {
            key: "onMouseDown",
            value: function onMouseDown(event) {
              if (event.which != "1") return;
              this.mousedown = true;
              this.addOrRemoveWall(event.currentTarget);
            } //////////////// Visualize

          }, {
            key: "visualize",
            value: function visualize() {
              if (this.chosenAlgorithm == "Dijkstra's Algorithm") {
                this.dijkstra();
              } else if (this.chosenAlgorithm == "A* Search") {
                this.astar();
              } else if (this.chosenAlgorithm == "Greedy Best-first Search") {
                this.greedybfs();
              } else if (this.chosenAlgorithm == "Back-tracking") {
                this.backtracking();
              }
            }
          }, {
            key: "dijkstra",
            value: function dijkstra() {}
          }, {
            key: "astar",
            value: function astar() {}
          }, {
            key: "greedybfs",
            value: function greedybfs() {}
          }, {
            key: "backtracking",
            value: function backtracking() {
              if (this.stopAlgo == false) {
                this.bt.start(this.interCommService); //back-tracking start
              } else {
                this.bt.stop();
              }
            } ////////////////////////////

          }, {
            key: "runWorker",
            value: function runWorker() {
              if (typeof Worker !== "undefined") {
                var worker = new Worker(__webpack__worker__0, undefined);

                worker.onmessage = function (_ref) {
                  var data = _ref.data;
                };

                worker.postMessage(this.grid.nativeElement.offsetWidth);
              } else {}
            }
          }]);

          return GridComponent;
        }();

        GridComponent.ɵfac = function GridComponent_Factory(t) {
          return new (t || GridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_draggables_service__WEBPACK_IMPORTED_MODULE_3__["DraggablesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_inter_communication_service__WEBPACK_IMPORTED_MODULE_4__["InterCommunicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_presets_colors__WEBPACK_IMPORTED_MODULE_5__["Colors"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_algorithms_backtracking__WEBPACK_IMPORTED_MODULE_6__["BackTracking"]));
        };

        GridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: GridComponent,
          selectors: [["app-grid"]],
          viewQuery: function GridComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
            }
          },
          decls: 9,
          vars: 5,
          consts: [["id", "grid-section"], [3, "ngClass"], [1, "container"], ["id", "grid", 2, "position", "relative", 3, "resize"], ["grid", ""], ["id", "draggables"]],
          template: function GridComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3, 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function GridComponent_Template_div_resize_5_listener($event) {
                return ctx.onResize($event);
              }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx.chosenAlgorithm != ""));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.chosenAlgorithm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.option, "\n");
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]],
          styles: ["#grid-section[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n\n.algo-name[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.algo-name[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 75%;\n  margin: 0 auto;\n  padding: 20px 0;\n}\n\n#grid[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n#grid-new[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 auto;\n}\n\n.grid-row[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n\n.grid-block[_ngcontent-%COMP%] {\n  position: relative;\n  border: 1px solid #686969;\n  border-width: 1px 0 0 1px;\n  padding: 12px;\n  display: inline-block;\n}\n\n.grid-block[_ngcontent-%COMP%]:hover {\n  background-color: rgba(43, 42, 92, 0.15);\n}\n\n#draggables[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n\n.draggable[_ngcontent-%COMP%] {\n  cursor: move;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.draggable[_ngcontent-%COMP%]:active   .start-node[_ngcontent-%COMP%] {\n  border-width: 0 7px 7px 0;\n  padding: 7px;\n}\n\n.draggable[_ngcontent-%COMP%]:active   .square[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JpZC9ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUFFO0VBQ0Usa0JBQUE7QUFFSjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUVFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUNFO0VBQ0Usd0NBQUE7QUFDSjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQUY7O0FBRUk7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFBTjs7QUFFSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQU4iLCJmaWxlIjoic3JjL2FwcC9ncmlkL2dyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZ3JpZC1zZWN0aW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5hbGdvLW5hbWUge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgaDMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuXHJcbiNncmlkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2dyaWQtbmV3IHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5ncmlkLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmdyaWQtYmxvY2sge1xyXG4gIC8vY3Vyc29yOiBjZWxsO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNjg2OTY5O1xyXG4gIGJvcmRlci13aWR0aDogMXB4IDAgMCAxcHg7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCA0MiwgOTIsIDAuMTUpO1xyXG4gIH1cclxufVxyXG5cclxuI2RyYWdnYWJsZXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5kcmFnZ2FibGUge1xyXG4gIGN1cnNvcjogbW92ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gICY6YWN0aXZlIHtcclxuICAgIC5zdGFydC1ub2RlIHtcclxuICAgICAgYm9yZGVyLXdpZHRoOiAwIDdweCA3cHggMDtcclxuICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgfVxyXG4gICAgLnNxdWFyZSB7XHJcbiAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */", "*[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  user-select: none;\n  \n  -webkit-user-select: none;\n  \n  -moz-user-select: none;\n  \n  -khtml-user-select: none;\n  \n  -ms-user-select: none;\n  \n  \n  \n  box-sizing: border-box;\n  font-family: consolas;\n}\n\n[_ngcontent-%COMP%]:export {\n  colors-primary: #387ef5;\n  colors-secondary: #32db64;\n  colors-danger: #f53d3d;\n  colors-light: #f4f4f4;\n  colors-dark: #222;\n  colors-favorite: #69bb7b;\n  colors-visited1: #42a9bb;\n  colors-visited2: #c56ace;\n  colors-wall: #2e3c5a;\n  colors-path: #f1ce31;\n}\n\n.header[_ngcontent-%COMP%] {\n  width: 100%;\n  color: black;\n  font-size: 18px;\n  font-family: consolas;\n}\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 85%;\n  padding: 20px 0;\n  margin: 0 auto;\n}\n\n.horiz-list[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n\n.horiz-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 20px;\n}\n\n.horiz-list[_ngcontent-%COMP%]    > .draggable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.horiz-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-of-type {\n  margin-right: 0;\n}\n\n.start-node[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  border: solid #2e3c5a;\n  border-width: 0 4px 4px 0;\n  padding: 4px;\n  transform: translateY(1px) rotate(-45deg);\n}\n\n.square[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n}\n\n.end-node[_ngcontent-%COMP%] {\n  position: relative;\n  background: #2e3c5a;\n  border-radius: 50%;\n  transform: translateY(3px);\n}\n\n.end-node[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  background: #2e3c5a;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.bomb-node[_ngcontent-%COMP%] {\n  position: relative;\n  background: #2e3c5a;\n  border-radius: 50%;\n  transform: translateY(3px);\n}\n\n.bomb-node[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #fff;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.weight-node[_ngcontent-%COMP%] {\n  position: relative;\n  background: #2e3c5a;\n  border-top-left-radius: 50%;\n  border-top-right-radius: 50%;\n  transform: translateY(3px);\n}\n\n.weight-node[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 13px;\n  height: 4px;\n  top: 4px;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #fff;\n  border-top-left-radius: 50%;\n  border-top-right-radius: 50%;\n}\n\n.vertical-line[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.unvisited[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n  transform: translateY(4px);\n}\n\n.visited1[_ngcontent-%COMP%] {\n  background: #42a9bb;\n  transform: translateY(3px);\n  margin-right: 5px;\n}\n\n.visited2[_ngcontent-%COMP%] {\n  background: #c56ace;\n  transform: translateY(3px);\n}\n\n.shortest-path[_ngcontent-%COMP%] {\n  background: #f1ce31;\n  transform: translateY(3px);\n}\n\n.wall[_ngcontent-%COMP%] {\n  background: #2e3c5a;\n  transform: translateY(3px);\n}\n\n\n\n\n\n\n\n\n\n\n\n@media only screen and (max-width: 1650px) {\n  .vertical-line[_ngcontent-%COMP%], .unselectables[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvb2JqZWN0cy1oZWFkZXIvb2JqZWN0cy1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsVUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUFtQixvQkFBQTtFQUNuQix5QkFBQTtFQUEyQixxQ0FBQTtFQUMzQixzQkFBQTtFQUF3QixxQkFBQTtFQUN4Qix3QkFBQTtFQUEwQixnQ0FBQTtFQUMxQixxQkFBQTtFQUF1QixVQUFBO0VBQ1MsZ0NBQUE7RUFDSCx5QkFBQTtFQUM3QixzQkFBQTtFQUNBLHFCQUFBO0FDUUY7O0FEaUJBO0VBUkUsdUJBZE87RUFjUCx5QkFkTztFQWNQLHNCQWRPO0VBY1AscUJBZE87RUFjUCxpQkFkTztFQWNQLHdCQWRPO0VBY1Asd0JBZE87RUFjUCx3QkFkTztFQWNQLG9CQWRPO0VBY1Asb0JBZE87QUNrQlQ7O0FBM0JBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUE4QkY7O0FBM0JBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUE4QkY7O0FBM0JBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUE4QkY7O0FBMUJFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQTZCSjs7QUEzQkU7RUFDRSxlQUFBO0FBNkJKOztBQTNCRTtFQUNFLGVBQUE7QUE2Qko7O0FBdEJBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtBQXlCRjs7QUF0QkE7RUFDRSxxQkFBQTtFQUNBLFdBYk07RUFjTixZQWRNO0FBdUNSOztBQXRCQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBeUJGOztBQXhCRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBMEJKOztBQXRCQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBeUJGOztBQXhCRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBaEZJO0VBaUZKLGlCQUFBO0VBQ0EsZUFBQTtBQTBCSjs7QUF0QkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FBeUJGOztBQXhCRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBbkdJO0VBb0dKLDJCQUFBO0VBQ0EsNEJBQUE7QUEwQko7O0FBdEJBO0VBQ0UsWUFBQTtBQXlCRjs7QUF0QkE7RUFDRSxzQkFBQTtFQUNBLDBCQUFBO0FBeUJGOztBQW5CQTtFQUNFLG1CQUpTO0VBS1QsMEJBQUE7RUFDQSxpQkFBQTtBQXNCRjs7QUFuQkE7RUFDRSxtQkFUUztFQVVULDBCQUFBO0FBc0JGOztBQWpCQTtFQUNFLG1CQUhjO0VBSWQsMEJBQUE7QUFvQkY7O0FBZkE7RUFDRSxtQkFISztFQUlMLDBCQUFBO0FBa0JGOztBQWZBLGlEQUFBOztBQUlBLG9FQUFBOztBQUlBLHFEQUFBOztBQUlBLG1EQUFBOztBQUlBLG9FQUFBOztBQUlBO0VBQ0U7O0lBRUUsd0JBQUE7RUFHRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvb2JqZWN0cy1oZWFkZXIvb2JqZWN0cy1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqLFxyXG51bCB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIHN0YW5kYXJkIHN5bnRheCAqL1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIHdlYmtpdCAoc2FmYXJpLCBjaHJvbWUpIGJyb3dzZXJzICovXHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogbW96aWxsYSBicm93c2VycyAqL1xyXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogd2Via2l0IChrb25xdWVyb3IpIGJyb3dzZXJzICovXHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRTEwKyAqL1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogU2FmYXJpL0Nocm9tZSwgb3RoZXIgV2ViS2l0ICovXHJcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBGaXJlZm94LCBvdGhlciBHZWNrbyAqL1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6IGNvbnNvbGFzO1xyXG59XHJcblxyXG4kY29sb3JzOiAoXHJcbiAgcHJpbWFyeTogIzM4N2VmNSxcclxuICBzZWNvbmRhcnk6ICMzMmRiNjQsXHJcbiAgZGFuZ2VyOiAjZjUzZDNkLFxyXG4gIGxpZ2h0OiAjZjRmNGY0LFxyXG4gIGRhcms6ICMyMjIsXHJcbiAgZmF2b3JpdGU6ICM2OWJiN2IsXHJcbiAgdmlzaXRlZDE6IHJnYig2NiwgMTY5LCAxODcpLFxyXG4gIHZpc2l0ZWQyOiByZ2IoMTk3LCAxMDYsIDIwNiksXHJcbiAgd2FsbDogIzJlM2M1YSxcclxuICBwYXRoOiByZ2IoMjQxLCAyMDYsIDQ5KSxcclxuKTtcclxuXHJcbkBtaXhpbiBydWxlKCRrZXksICR2YWx1ZSwgJHByZWZpeCkge1xyXG4gICN7JHByZWZpeH0tI3ska2V5fTogJHZhbHVlO1xyXG59XHJcbkBtaXhpbiBtYXAtdG8tc3RyaW5nKCRtYXAsICRwcmVmaXgpIHtcclxuICBAZWFjaCAka2V5LCAkdmFsdWUgaW4gJG1hcCB7XHJcbiAgICBAaW5jbHVkZSBydWxlKCRrZXksICR2YWx1ZSwgJHByZWZpeCk7XHJcbiAgfVxyXG59XHJcblxyXG46ZXhwb3J0IHtcclxuICBAaW5jbHVkZSBtYXAtdG8tc3RyaW5nKCRjb2xvcnMsIFwiY29sb3JzXCIpO1xyXG59XHJcbiIsIiosXG51bCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIHN0YW5kYXJkIHN5bnRheCAqL1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAvKiB3ZWJraXQgKHNhZmFyaSwgY2hyb21lKSBicm93c2VycyAqL1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBtb3ppbGxhIGJyb3dzZXJzICovXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogd2Via2l0IChrb25xdWVyb3IpIGJyb3dzZXJzICovXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogSUUxMCsgKi9cbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKiBTYWZhcmkvQ2hyb21lLCBvdGhlciBXZWJLaXQgKi9cbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKiBGaXJlZm94LCBvdGhlciBHZWNrbyAqL1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogY29uc29sYXM7XG59XG5cbjpleHBvcnQge1xuICBjb2xvcnMtcHJpbWFyeTogIzM4N2VmNTtcbiAgY29sb3JzLXNlY29uZGFyeTogIzMyZGI2NDtcbiAgY29sb3JzLWRhbmdlcjogI2Y1M2QzZDtcbiAgY29sb3JzLWxpZ2h0OiAjZjRmNGY0O1xuICBjb2xvcnMtZGFyazogIzIyMjtcbiAgY29sb3JzLWZhdm9yaXRlOiAjNjliYjdiO1xuICBjb2xvcnMtdmlzaXRlZDE6ICM0MmE5YmI7XG4gIGNvbG9ycy12aXNpdGVkMjogI2M1NmFjZTtcbiAgY29sb3JzLXdhbGw6ICMyZTNjNWE7XG4gIGNvbG9ycy1wYXRoOiAjZjFjZTMxO1xufVxuXG4uaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogY29uc29sYXM7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4NSU7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5ob3Jpei1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaG9yaXotbGlzdCA+IGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLmhvcml6LWxpc3QgPiAuZHJhZ2dhYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhvcml6LWxpc3QgPiBkaXY6bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uc3RhcnQtbm9kZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IHNvbGlkICMyZTNjNWE7XG4gIGJvcmRlci13aWR0aDogMCA0cHggNHB4IDA7XG4gIHBhZGRpbmc6IDRweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCkgcm90YXRlKC00NWRlZyk7XG59XG5cbi5zcXVhcmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG59XG5cbi5lbmQtbm9kZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogIzJlM2M1YTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcbn1cbi5lbmQtbm9kZSBkaXYge1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDdweDtcbiAgYmFja2dyb3VuZDogIzJlM2M1YTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uYm9tYi1ub2RlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjMmUzYzVhO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xufVxuLmJvbWItbm9kZSBkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLndlaWdodC1ub2RlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjMmUzYzVhO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xufVxuLndlaWdodC1ub2RlIGRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEzcHg7XG4gIGhlaWdodDogNHB4O1xuICB0b3A6IDRweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwJTtcbn1cblxuLnZlcnRpY2FsLWxpbmUge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi51bnZpc2l0ZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbn1cblxuLnZpc2l0ZWQxIHtcbiAgYmFja2dyb3VuZDogIzQyYTliYjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4udmlzaXRlZDIge1xuICBiYWNrZ3JvdW5kOiAjYzU2YWNlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcbn1cblxuLnNob3J0ZXN0LXBhdGgge1xuICBiYWNrZ3JvdW5kOiAjZjFjZTMxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcbn1cblxuLndhbGwge1xuICBiYWNrZ3JvdW5kOiAjMmUzYzVhO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcbn1cblxuLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCA2MDBweCBhbmQgZG93bikgKi9cbi8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xuLyogTWVkaXVtIGRldmljZXMgKGxhbmRzY2FwZSB0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXG4vKiBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBsYXB0b3BzIGFuZCBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY1MHB4KSB7XG4gIC52ZXJ0aWNhbC1saW5lLFxuLnVuc2VsZWN0YWJsZXMge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"]
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridComponent, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
            args: [{
              selector: "app-grid",
              templateUrl: "./grid.component.html",
              styleUrls: ["./grid.component.scss", "../objects-header/objects-header.component.scss"]
            }]
          }], function () {
            return [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
            }, {
              type: _services_draggables_service__WEBPACK_IMPORTED_MODULE_3__["DraggablesService"]
            }, {
              type: _services_inter_communication_service__WEBPACK_IMPORTED_MODULE_4__["InterCommunicationService"]
            }, {
              type: _presets_colors__WEBPACK_IMPORTED_MODULE_5__["Colors"]
            }, {
              type: _algorithms_backtracking__WEBPACK_IMPORTED_MODULE_6__["BackTracking"]
            }];
          }, {
            grid: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
              args: ["grid"]
            }]
          });
        })();
        /* WEBPACK VAR INJECTION */

      }).call(this, __webpack_require__(
      /*! ./node_modules/worker-plugin/dist/loader.js?name=0!./grid.worker */
      "./node_modules/worker-plugin/dist/loader.js?name=0!./src/app/grid/grid.worker.ts"));
      /***/
    },

    /***/
    "./src/app/objects-header/objects-header.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/objects-header/objects-header.component.ts ***!
      \************************************************************/

    /*! exports provided: ObjectsHeaderComponent */

    /***/
    function srcAppObjectsHeaderObjectsHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObjectsHeaderComponent", function () {
        return ObjectsHeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_draggables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/draggables.service */
      "./src/app/services/draggables.service.ts");

      var ObjectsHeaderComponent = /*#__PURE__*/function () {
        function ObjectsHeaderComponent(dragService) {
          _classCallCheck(this, ObjectsHeaderComponent);

          this.dragService = dragService;
        }

        _createClass(ObjectsHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.dragService.currentOption.subscribe(option => {
            //   this.option = option;
            //   console.log(option);
            // });
          }
        }, {
          key: "changeOption",
          value: function changeOption(option) {
            this.dragService.setDraggable(option);
          }
        }]);

        return ObjectsHeaderComponent;
      }();

      ObjectsHeaderComponent.ɵfac = function ObjectsHeaderComponent_Factory(t) {
        return new (t || ObjectsHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_draggables_service__WEBPACK_IMPORTED_MODULE_1__["DraggablesService"]));
      };

      ObjectsHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ObjectsHeaderComponent,
        selectors: [["app-objects-header"]],
        decls: 34,
        vars: 0,
        consts: [[1, "header"], [1, "container"], [1, "horiz-list"], [1, "draggable", 3, "click"], [1, "start-node"], [1, "end-node", "square"], [1, "bomb-node", "square"], [1, "weight-node", "square"], [1, "vertical-line"], [1, "unselectables"], [1, "square", "unvisited"], [1, "square", "visited1"], [1, "square", "visited2"], [1, "square", "shortest-path"], [1, "square", "wall"]],
        template: function ObjectsHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ObjectsHeaderComponent_Template_div_click_3_listener() {
              return ctx.changeOption("start-node");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Start Node ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ObjectsHeaderComponent_Template_div_click_6_listener() {
              return ctx.changeOption("end-node square");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Target Node ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ObjectsHeaderComponent_Template_div_click_10_listener() {
              return ctx.changeOption("bomb-node square");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Bomb Node ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ObjectsHeaderComponent_Template_div_click_15_listener() {
              return ctx.changeOption("weight-node square");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Weight Node ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "|");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Unvisited Nodes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Visited Nodes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Shortest-path Nodes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Wall Nodes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["*[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  user-select: none;\n  \n  -webkit-user-select: none;\n  \n  -moz-user-select: none;\n  \n  -khtml-user-select: none;\n  \n  -ms-user-select: none;\n  \n  \n  \n  box-sizing: border-box;\n  font-family: consolas;\n}\n\n[_ngcontent-%COMP%]:export {\n  colors-primary: #387ef5;\n  colors-secondary: #32db64;\n  colors-danger: #f53d3d;\n  colors-light: #f4f4f4;\n  colors-dark: #222;\n  colors-favorite: #69bb7b;\n  colors-visited1: #42a9bb;\n  colors-visited2: #c56ace;\n  colors-wall: #2e3c5a;\n  colors-path: #f1ce31;\n}\n\n.header[_ngcontent-%COMP%] {\n  width: 100%;\n  color: black;\n  font-size: 18px;\n  font-family: consolas;\n}\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 85%;\n  padding: 20px 0;\n  margin: 0 auto;\n}\n\n.horiz-list[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n\n.horiz-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 20px;\n}\n\n.horiz-list[_ngcontent-%COMP%]    > .draggable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.horiz-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-of-type {\n  margin-right: 0;\n}\n\n.start-node[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  border: solid #2e3c5a;\n  border-width: 0 4px 4px 0;\n  padding: 4px;\n  transform: translateY(1px) rotate(-45deg);\n}\n\n.square[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n}\n\n.end-node[_ngcontent-%COMP%] {\n  position: relative;\n  background: #2e3c5a;\n  border-radius: 50%;\n  transform: translateY(3px);\n}\n\n.end-node[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  background: #2e3c5a;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.bomb-node[_ngcontent-%COMP%] {\n  position: relative;\n  background: #2e3c5a;\n  border-radius: 50%;\n  transform: translateY(3px);\n}\n\n.bomb-node[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #fff;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.weight-node[_ngcontent-%COMP%] {\n  position: relative;\n  background: #2e3c5a;\n  border-top-left-radius: 50%;\n  border-top-right-radius: 50%;\n  transform: translateY(3px);\n}\n\n.weight-node[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 13px;\n  height: 4px;\n  top: 4px;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #fff;\n  border-top-left-radius: 50%;\n  border-top-right-radius: 50%;\n}\n\n.vertical-line[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.unvisited[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n  transform: translateY(4px);\n}\n\n.visited1[_ngcontent-%COMP%] {\n  background: #42a9bb;\n  transform: translateY(3px);\n  margin-right: 5px;\n}\n\n.visited2[_ngcontent-%COMP%] {\n  background: #c56ace;\n  transform: translateY(3px);\n}\n\n.shortest-path[_ngcontent-%COMP%] {\n  background: #f1ce31;\n  transform: translateY(3px);\n}\n\n.wall[_ngcontent-%COMP%] {\n  background: #2e3c5a;\n  transform: translateY(3px);\n}\n\n\n\n\n\n\n\n\n\n\n\n@media only screen and (max-width: 1650px) {\n  .vertical-line[_ngcontent-%COMP%], .unselectables[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvb2JqZWN0cy1oZWFkZXIvb2JqZWN0cy1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsVUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUFtQixvQkFBQTtFQUNuQix5QkFBQTtFQUEyQixxQ0FBQTtFQUMzQixzQkFBQTtFQUF3QixxQkFBQTtFQUN4Qix3QkFBQTtFQUEwQixnQ0FBQTtFQUMxQixxQkFBQTtFQUF1QixVQUFBO0VBQ1MsZ0NBQUE7RUFDSCx5QkFBQTtFQUM3QixzQkFBQTtFQUNBLHFCQUFBO0FDUUY7O0FEaUJBO0VBUkUsdUJBZE87RUFjUCx5QkFkTztFQWNQLHNCQWRPO0VBY1AscUJBZE87RUFjUCxpQkFkTztFQWNQLHdCQWRPO0VBY1Asd0JBZE87RUFjUCx3QkFkTztFQWNQLG9CQWRPO0VBY1Asb0JBZE87QUNrQlQ7O0FBM0JBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUE4QkY7O0FBM0JBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUE4QkY7O0FBM0JBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUE4QkY7O0FBMUJFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQTZCSjs7QUEzQkU7RUFDRSxlQUFBO0FBNkJKOztBQTNCRTtFQUNFLGVBQUE7QUE2Qko7O0FBdEJBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtBQXlCRjs7QUF0QkE7RUFDRSxxQkFBQTtFQUNBLFdBYk07RUFjTixZQWRNO0FBdUNSOztBQXRCQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBeUJGOztBQXhCRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBMEJKOztBQXRCQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBeUJGOztBQXhCRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBaEZJO0VBaUZKLGlCQUFBO0VBQ0EsZUFBQTtBQTBCSjs7QUF0QkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FBeUJGOztBQXhCRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBbkdJO0VBb0dKLDJCQUFBO0VBQ0EsNEJBQUE7QUEwQko7O0FBdEJBO0VBQ0UsWUFBQTtBQXlCRjs7QUF0QkE7RUFDRSxzQkFBQTtFQUNBLDBCQUFBO0FBeUJGOztBQW5CQTtFQUNFLG1CQUpTO0VBS1QsMEJBQUE7RUFDQSxpQkFBQTtBQXNCRjs7QUFuQkE7RUFDRSxtQkFUUztFQVVULDBCQUFBO0FBc0JGOztBQWpCQTtFQUNFLG1CQUhjO0VBSWQsMEJBQUE7QUFvQkY7O0FBZkE7RUFDRSxtQkFISztFQUlMLDBCQUFBO0FBa0JGOztBQWZBLGlEQUFBOztBQUlBLG9FQUFBOztBQUlBLHFEQUFBOztBQUlBLG1EQUFBOztBQUlBLG9FQUFBOztBQUlBO0VBQ0U7O0lBRUUsd0JBQUE7RUFHRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvb2JqZWN0cy1oZWFkZXIvb2JqZWN0cy1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqLFxyXG51bCB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIHN0YW5kYXJkIHN5bnRheCAqL1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIHdlYmtpdCAoc2FmYXJpLCBjaHJvbWUpIGJyb3dzZXJzICovXHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogbW96aWxsYSBicm93c2VycyAqL1xyXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogd2Via2l0IChrb25xdWVyb3IpIGJyb3dzZXJzICovXHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRTEwKyAqL1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogU2FmYXJpL0Nocm9tZSwgb3RoZXIgV2ViS2l0ICovXHJcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBGaXJlZm94LCBvdGhlciBHZWNrbyAqL1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6IGNvbnNvbGFzO1xyXG59XHJcblxyXG4kY29sb3JzOiAoXHJcbiAgcHJpbWFyeTogIzM4N2VmNSxcclxuICBzZWNvbmRhcnk6ICMzMmRiNjQsXHJcbiAgZGFuZ2VyOiAjZjUzZDNkLFxyXG4gIGxpZ2h0OiAjZjRmNGY0LFxyXG4gIGRhcms6ICMyMjIsXHJcbiAgZmF2b3JpdGU6ICM2OWJiN2IsXHJcbiAgdmlzaXRlZDE6IHJnYig2NiwgMTY5LCAxODcpLFxyXG4gIHZpc2l0ZWQyOiByZ2IoMTk3LCAxMDYsIDIwNiksXHJcbiAgd2FsbDogIzJlM2M1YSxcclxuICBwYXRoOiByZ2IoMjQxLCAyMDYsIDQ5KSxcclxuKTtcclxuXHJcbkBtaXhpbiBydWxlKCRrZXksICR2YWx1ZSwgJHByZWZpeCkge1xyXG4gICN7JHByZWZpeH0tI3ska2V5fTogJHZhbHVlO1xyXG59XHJcbkBtaXhpbiBtYXAtdG8tc3RyaW5nKCRtYXAsICRwcmVmaXgpIHtcclxuICBAZWFjaCAka2V5LCAkdmFsdWUgaW4gJG1hcCB7XHJcbiAgICBAaW5jbHVkZSBydWxlKCRrZXksICR2YWx1ZSwgJHByZWZpeCk7XHJcbiAgfVxyXG59XHJcblxyXG46ZXhwb3J0IHtcclxuICBAaW5jbHVkZSBtYXAtdG8tc3RyaW5nKCRjb2xvcnMsIFwiY29sb3JzXCIpO1xyXG59XHJcbiIsIiosXG51bCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIHN0YW5kYXJkIHN5bnRheCAqL1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAvKiB3ZWJraXQgKHNhZmFyaSwgY2hyb21lKSBicm93c2VycyAqL1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBtb3ppbGxhIGJyb3dzZXJzICovXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogd2Via2l0IChrb25xdWVyb3IpIGJyb3dzZXJzICovXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogSUUxMCsgKi9cbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKiBTYWZhcmkvQ2hyb21lLCBvdGhlciBXZWJLaXQgKi9cbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKiBGaXJlZm94LCBvdGhlciBHZWNrbyAqL1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogY29uc29sYXM7XG59XG5cbjpleHBvcnQge1xuICBjb2xvcnMtcHJpbWFyeTogIzM4N2VmNTtcbiAgY29sb3JzLXNlY29uZGFyeTogIzMyZGI2NDtcbiAgY29sb3JzLWRhbmdlcjogI2Y1M2QzZDtcbiAgY29sb3JzLWxpZ2h0OiAjZjRmNGY0O1xuICBjb2xvcnMtZGFyazogIzIyMjtcbiAgY29sb3JzLWZhdm9yaXRlOiAjNjliYjdiO1xuICBjb2xvcnMtdmlzaXRlZDE6ICM0MmE5YmI7XG4gIGNvbG9ycy12aXNpdGVkMjogI2M1NmFjZTtcbiAgY29sb3JzLXdhbGw6ICMyZTNjNWE7XG4gIGNvbG9ycy1wYXRoOiAjZjFjZTMxO1xufVxuXG4uaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogY29uc29sYXM7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4NSU7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5ob3Jpei1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaG9yaXotbGlzdCA+IGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLmhvcml6LWxpc3QgPiAuZHJhZ2dhYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhvcml6LWxpc3QgPiBkaXY6bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uc3RhcnQtbm9kZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IHNvbGlkICMyZTNjNWE7XG4gIGJvcmRlci13aWR0aDogMCA0cHggNHB4IDA7XG4gIHBhZGRpbmc6IDRweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCkgcm90YXRlKC00NWRlZyk7XG59XG5cbi5zcXVhcmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG59XG5cbi5lbmQtbm9kZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogIzJlM2M1YTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcbn1cbi5lbmQtbm9kZSBkaXYge1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDdweDtcbiAgYmFja2dyb3VuZDogIzJlM2M1YTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uYm9tYi1ub2RlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjMmUzYzVhO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xufVxuLmJvbWItbm9kZSBkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLndlaWdodC1ub2RlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjMmUzYzVhO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xufVxuLndlaWdodC1ub2RlIGRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEzcHg7XG4gIGhlaWdodDogNHB4O1xuICB0b3A6IDRweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwJTtcbn1cblxuLnZlcnRpY2FsLWxpbmUge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi51bnZpc2l0ZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbn1cblxuLnZpc2l0ZWQxIHtcbiAgYmFja2dyb3VuZDogIzQyYTliYjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4udmlzaXRlZDIge1xuICBiYWNrZ3JvdW5kOiAjYzU2YWNlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcbn1cblxuLnNob3J0ZXN0LXBhdGgge1xuICBiYWNrZ3JvdW5kOiAjZjFjZTMxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcbn1cblxuLndhbGwge1xuICBiYWNrZ3JvdW5kOiAjMmUzYzVhO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcbn1cblxuLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCA2MDBweCBhbmQgZG93bikgKi9cbi8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xuLyogTWVkaXVtIGRldmljZXMgKGxhbmRzY2FwZSB0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXG4vKiBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBsYXB0b3BzIGFuZCBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY1MHB4KSB7XG4gIC52ZXJ0aWNhbC1saW5lLFxuLnVuc2VsZWN0YWJsZXMge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObjectsHeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-objects-header',
            templateUrl: './objects-header.component.html',
            styleUrls: ['./objects-header.component.scss']
          }]
        }], function () {
          return [{
            type: _services_draggables_service__WEBPACK_IMPORTED_MODULE_1__["DraggablesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/presets/colors.ts":
    /*!***********************************!*\
      !*** ./src/app/presets/colors.ts ***!
      \***********************************/

    /*! exports provided: Colors */

    /***/
    function srcAppPresetsColorsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Colors", function () {
        return Colors;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../algorithms/globals */
      "./src/app/algorithms/globals.ts");
      /* harmony import */


      var src_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/styles.scss */
      "./src/styles.scss");
      /* harmony import */


      var src_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(src_styles_scss__WEBPACK_IMPORTED_MODULE_2__);

      var Colors = /*#__PURE__*/function () {
        function Colors() {
          _classCallCheck(this, Colors);

          this.defaultColor = {
            startNode: "rgb()",
            targetNode: "rgb()",
            bombNode: "rgb()",
            weightNode: "rgb()",
            unvisitedNode: "rgb()",
            visitedNode: "rgb()",
            shortestPathNodeDefault: {
              R: 241,
              G: 206,
              B: 49,
              index: 0,
              asc: true
            },
            wallNode: src_styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a["colors-visited1"]
          };
        }

        _createClass(Colors, [{
          key: "getColor",
          value: function getColor(el) {
            return "rgb(" + el.R + ", " + el.G + ", " + el.B + ")";
          }
        }, {
          key: "nextIndex",
          value: function nextIndex(el) {
            if (el.index == 2) el.index = 0;else el.index++;
            return el;
          }
        }, {
          key: "changeOffset",
          value: function changeOffset(el) {
            //prototype
            var offset = 0;
            offset = 255 - el;
            return offset;
          }
        }, {
          key: "changeColor",
          value: function changeColor(el, off, rgb) {
            if (el.asc == true) {
              if (el[rgb[el.index]] + off > 200) {
                if (el.index == 2) el.asc = false;
                this.nextIndex(el);
              } else {
                el[rgb[el.index]] += off;
              }
            }

            if (el.asc == false) {
              if (el[rgb[el.index]] - off < 55) {
                if (el.index == 2) el.asc = true;
                this.nextIndex(el);
              } else {
                el[rgb[el.index]] -= off;
              }
            }
          }
        }, {
          key: "getColorOffset",
          value: function getColorOffset() {
            return Math.floor(255 / _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].paths.length) + 10;
          }
        }]);

        return Colors;
      }();

      Colors.ɵfac = function Colors_Factory(t) {
        return new (t || Colors)();
      };

      Colors.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: Colors,
        factory: Colors.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Colors, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/draggables.service.ts":
    /*!************************************************!*\
      !*** ./src/app/services/draggables.service.ts ***!
      \************************************************/

    /*! exports provided: DraggablesService */

    /***/
    function srcAppServicesDraggablesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DraggablesService", function () {
        return DraggablesService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var DraggablesService = /*#__PURE__*/function () {
        function DraggablesService() {
          _classCallCheck(this, DraggablesService);

          this.optionSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
          this.currentOption = this.optionSource.asObservable();
        }

        _createClass(DraggablesService, [{
          key: "setDraggable",
          value: function setDraggable(option) {
            this.optionSource.next(option);
          }
        }]);

        return DraggablesService;
      }();

      DraggablesService.ɵfac = function DraggablesService_Factory(t) {
        return new (t || DraggablesService)();
      };

      DraggablesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DraggablesService,
        factory: DraggablesService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DraggablesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/inter-communication.service.ts":
    /*!*********************************************************!*\
      !*** ./src/app/services/inter-communication.service.ts ***!
      \*********************************************************/

    /*! exports provided: InterCommunicationService */

    /***/
    function srcAppServicesInterCommunicationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InterCommunicationService", function () {
        return InterCommunicationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var InterCommunicationService = /*#__PURE__*/function () {
        function InterCommunicationService() {
          _classCallCheck(this, InterCommunicationService);

          this.dataSourse = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
          this.dataObservable = this.dataSourse.asObservable();
        }

        _createClass(InterCommunicationService, [{
          key: "setMessage",
          value: function setMessage(option) {
            this.dataSourse.next(option);
          }
        }]);

        return InterCommunicationService;
      }();

      InterCommunicationService.ɵfac = function InterCommunicationService_Factory(t) {
        return new (t || InterCommunicationService)();
      };

      InterCommunicationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: InterCommunicationService,
        factory: InterCommunicationService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterCommunicationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/top-header/top-header.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/top-header/top-header.component.ts ***!
      \****************************************************/

    /*! exports provided: TopHeaderComponent */

    /***/
    function srcAppTopHeaderTopHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopHeaderComponent", function () {
        return TopHeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../algorithms/globals */
      "./src/app/algorithms/globals.ts");
      /* harmony import */


      var _services_inter_communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/inter-communication.service */
      "./src/app/services/inter-communication.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function TopHeaderComponent_li_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopHeaderComponent_li_11_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var item_r2 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.setAlgo(item_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2);
        }
      }

      function TopHeaderComponent_li_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopHeaderComponent_li_33_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var item_r6 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.setSpeed(item_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6 == null ? null : item_r6.text);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "disabled": a0,
          "pause": a1
        };
      };

      var TopHeaderComponent = /*#__PURE__*/function () {
        function TopHeaderComponent(interCommService) {
          _classCallCheck(this, TopHeaderComponent);

          this.interCommService = interCommService;
          this.algorithms = _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["algorithms"];
          this.speeds = _algorithms_globals__WEBPACK_IMPORTED_MODULE_1__["speeds"];
          this.isAlgoSelected = false;
          this.selectedAlgo = "";
          this.toStop = true;
          this.buttonContents = ["Visualize!", "Pause!", "Stop!"];
          this.buttonContent = "Visualize!";
        }

        _createClass(TopHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.interCommService.dataObservable.subscribe(function (message) {
              console.log(message);

              if (message == "reset-button") {
                _this10.toStop = true;
                _this10.buttonContent = _this10.buttonContents[0];
              }
            });
          }
        }, {
          key: "setAlgo",
          value: function setAlgo(algo) {
            if (algo == this.selectedAlgo) {
              this.isAlgoSelected = false;
              this.selectedAlgo = "";
              this.interCommService.setMessage("remove-algo"); //alert('Algorithm removed!');

              return;
            }

            this.isAlgoSelected = true;
            this.selectedAlgo = algo;
            this.interCommService.setMessage(algo);
          }
        }, {
          key: "start_stop",
          value: function start_stop() {
            if (this.isAlgoSelected == false) {
              alert("Please choose an algorithm!");
              return;
            }

            this.toStop = !this.toStop;

            if (this.toStop == false) {
              this.buttonContent = this.buttonContents[1];
              this.interCommService.setMessage("start-visualizing");
            } else {
              this.buttonContent = this.buttonContents[0];
              this.interCommService.setMessage("stop-visualizing");
            }
          }
        }, {
          key: "clearBoard",
          value: function clearBoard() {
            this.interCommService.setMessage("clear-board");
          }
        }, {
          key: "clearWallsAndWeight",
          value: function clearWallsAndWeight() {
            this.interCommService.setMessage("clear-walls-weight");
          }
        }, {
          key: "clearPath",
          value: function clearPath() {
            this.interCommService.setMessage("clear-path");
          }
        }, {
          key: "setSpeed",
          value: function setSpeed(speed) {
            this.selectedSpeed = speed === null || speed === void 0 ? void 0 : speed.text;
            this.interCommService.setMessage("speed-" + (speed === null || speed === void 0 ? void 0 : speed.value));
          }
        }]);

        return TopHeaderComponent;
      }();

      TopHeaderComponent.ɵfac = function TopHeaderComponent_Factory(t) {
        return new (t || TopHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_inter_communication_service__WEBPACK_IMPORTED_MODULE_2__["InterCommunicationService"]));
      };

      TopHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TopHeaderComponent,
        selectors: [["app-top-header"]],
        decls: 34,
        vars: 8,
        consts: [[1, "header"], [1, "container"], ["id", "title"], [1, "horiz-list"], ["id", "left"], [1, "hover"], [1, "list"], [1, "arrow", "down"], [1, "dropdown"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["id", "vis-btn", 3, "click"], [3, "ngClass"], ["id", "right"], [3, "click"], [3, "click", 4, "ngFor", "ngForOf"], [3, "value", "click"]],
        template: function TopHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Pathfinding Visualizer ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Algorithms");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TopHeaderComponent_li_11_Template, 2, 2, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Mazes & Patterns");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Add Bomb ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopHeaderComponent_Template_div_click_18_listener() {
              return ctx.start_stop();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopHeaderComponent_Template_div_click_22_listener() {
              return ctx.clearBoard();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Clear Board ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopHeaderComponent_Template_div_click_24_listener() {
              return ctx.clearWallsAndWeight();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Clear Walls & Weight ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopHeaderComponent_Template_div_click_26_listener() {
              return ctx.clearPath();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Clear Path ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, TopHeaderComponent_li_33_Template, 2, 1, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.algorithms);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, !ctx.isAlgoSelected, !ctx.toStop));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.buttonContent, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Speed:", ctx.selectedSpeed, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.speeds);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        styles: [".header[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #2e3c5a;\n  color: #fff;\n  font-size: 18px;\n  font-weight: bold;\n  font-family: consolas;\n}\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 90%;\n  margin: 0 auto;\n  text-align: center;\n}\n\n#title[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 0 !important;\n  margin-right: 10px !important;\n}\n\n.horiz-list[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: left;\n}\n\n.horiz-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 10px;\n}\n\n.horiz-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-of-type {\n  margin-right: 0;\n  margin-left: 10px;\n}\n\n.horiz-list[_ngcontent-%COMP%]    > #vis-btn[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.horiz-list[_ngcontent-%COMP%]    > #vis-btn[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 10px;\n  color: #fff;\n  font-size: 20px;\n  font-weight: bold;\n  font-family: consolas;\n  background-color: #5cd3a5;\n  padding: 13px;\n  border-radius: 5px;\n  transition: 0.2s;\n  border: none;\n  text-align: center;\n  text-decoration: none;\n}\n\n.horiz-list[_ngcontent-%COMP%]    > #vis-btn[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:active {\n  background-color: #348867;\n}\n\n.horiz-list[_ngcontent-%COMP%]    > #vis-btn[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%] {\n  background-color: #348867;\n}\n\n.horiz-list[_ngcontent-%COMP%]    > #vis-btn[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]:active {\n  background-color: #1f4637;\n}\n\n.horiz-list[_ngcontent-%COMP%]    > #vis-btn[_ngcontent-%COMP%]   .pause[_ngcontent-%COMP%] {\n  background-color: #af2121;\n}\n\n.horiz-list[_ngcontent-%COMP%]    > #vis-btn[_ngcontent-%COMP%]   .pause[_ngcontent-%COMP%]:active {\n  background-color: #531616;\n}\n\n.horiz-list[_ngcontent-%COMP%]   #left[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], .horiz-list[_ngcontent-%COMP%]   #right[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: inline-block;\n  cursor: pointer;\n}\n\n.horiz-list[_ngcontent-%COMP%]   #left[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.horiz-list[_ngcontent-%COMP%]   #right[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.horiz-list[_ngcontent-%COMP%]   #right[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  padding: 3px;\n  opacity: 0.5;\n  margin-left: 8px;\n}\n\n.down[_ngcontent-%COMP%] {\n  transform: translateY(-3px) rotate(45deg);\n}\n\n.hover[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 24px 18px;\n}\n\n.hover[_ngcontent-%COMP%]:hover {\n  background-color: #5cd3a5;\n}\n\n.hover[_ngcontent-%COMP%]:hover   .dropdown[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  display: none;\n  top: 100%;\n  position: absolute;\n  z-index: 50;\n  list-style: none;\n  min-width: 250px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  background-color: #2e3c5a;\n  border-bottom-left-radius: 12px;\n  border-bottom-right-radius: 12px;\n  transform: translateX(-18px);\n}\n\n.dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n\n.dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #5cd3a5;\n}\n\n.dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n\n\n\n\n\n\n\n\n\n\n@media only screen and (max-width: 1200px) {\n  .container[_ngcontent-%COMP%], #title[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n\n  #title[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 25px;\n    padding-bottom: 5px;\n    margin: 0 !important;\n  }\n}\n\n@media only screen and (max-width: 1690px) {\n  #right[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #right[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .container[_ngcontent-%COMP%]   .horiz-list[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex: 2;\n  }\n  .container[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n  #vis-btn[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLWhlYWRlci90b3AtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFHQTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQUFKOztBQUdBO0VBRUkscUJBQUE7RUFDQSxnQkFBQTtBQURKOztBQUVJO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtBQUFSOztBQUNRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBQ1o7O0FBRUk7RUFDSSxVQUFBO0FBQVI7O0FBQ1E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUNaOztBQUFZO0VBQ0kseUJBQUE7QUFFaEI7O0FBQ1E7RUFDSSx5QkFBQTtBQUNaOztBQUFZO0VBQ0kseUJBQUE7QUFFaEI7O0FBQ1E7RUFDSSx5QkFBQTtBQUNaOztBQUFZO0VBQ0kseUJBQUE7QUFFaEI7O0FBRUk7RUFDSSxxQkFBQTtFQUNBLGVBQUE7QUFBUjs7QUFHUTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFEWjs7QUFLUTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFIWjs7QUFJWTtFQUNJLFNBQUE7QUFGaEI7O0FBUUE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBQ0kseUNBQUE7QUFMSjs7QUFRQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQUxKOztBQU1JO0VBQ0kseUJBQUE7QUFKUjs7QUFLUTtFQUNJLGNBQUE7QUFIWjs7QUFRQTtFQUNJLGFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0VBQ0EseUJBQUE7RUFFQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7QUFOSjs7QUFPSTtFQUNJLGtCQUFBO0FBTFI7O0FBTVE7RUFDSSx5QkFBQTtBQUpaOztBQU1RO0VBQ0ksK0JBQUE7RUFDQSxnQ0FBQTtBQUpaOztBQVNBLGlEQUFBOztBQUtBLG9FQUFBOztBQUtBLHFEQUFBOztBQUtBLG1EQUFBOztBQUtBLG9FQUFBOztBQUNBO0VBQ0k7SUFDSSx5QkFBQTtFQXRCTjs7RUF3QkU7SUFDSSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtFQXJCTjtBQUNGOztBQXdCQTtFQUNJO0lBQ0ksYUFBQTtFQXRCTjtFQXVCTTtJQUNJLHlCQUFBO0VBckJWOztFQTJCRTtJQUNJLGFBQUE7SUFDQSw4QkFBQTtJQUNBLG1CQUFBO0VBeEJOO0VBeUJNO0lBQ0ksYUFBQTtJQUNBLDhCQUFBO0lBQ0EsbUJBQUE7SUFDQSxPQUFBO0VBdkJWO0VBeUJNO0lBQ0ksT0FBQTtFQXZCVjs7RUEwQkU7SUFDSSxTQUFBO0VBdkJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90b3AtaGVhZGVyL3RvcC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA2MCwgOTApO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiBjb25zb2xhcztcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvL3BhZGRpbmc6IDE1cHggMDtcclxufVxyXG5cclxuI3RpdGxlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhvcml6LWxpc3Qge1xyXG4gICAgLy93aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAmID4gZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmID4gI3Zpcy1idG4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGNvbnNvbGFzO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDIxMSwgMTY1KTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTNweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MiwgMTM2LCAxMDMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaXNhYmxlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MiwgMTM2LCAxMDMpO1xyXG4gICAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzEsIDcwLCA1NSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhdXNlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NSwgMzMsIDMzKTtcclxuICAgICAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgzLCAyMiwgMjIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgI2xlZnQgPiAqLCAjcmlnaHQgPiAqIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgI2xlZnQge1xyXG4gICAgICAgICYgPiAqOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICNyaWdodCB7XHJcbiAgICAgICAgJiA+ICoge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYXJyb3cge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4uZG93biB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCkgcm90YXRlKDQ1ZGVnKTtcclxufVxyXG5cclxuLmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDI0cHggMThweDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgMjExLCAxNjUpO1xyXG4gICAgICAgIC5kcm9wZG93biB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmRyb3Bkb3duIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA1MDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDYwLCA5MCk7XHJcbiAgICAvL2JvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMThweCk7XHJcbiAgICBsaSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDIxMSwgMTY1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIEV4dHJhIHNtYWxsIGRldmljZXMgKHBob25lcywgNjAwcHggYW5kIGRvd24pICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIFxyXG59XHJcblxyXG4vKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgXHJcbn1cclxuXHJcbi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBcclxufVxyXG5cclxuLyogTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBcclxufVxyXG5cclxuLyogRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgbGFwdG9wcyBhbmQgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuY29udGFpbmVyLCAjdGl0bGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAjdGl0bGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2OTBweCkge1xyXG4gICAgI3JpZ2h0IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lOyAgICBcclxuICAgICAgICAmID4gKiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfSAgIFxyXG4gICAgfVxyXG4gICAgI2xlZnQge1xyXG5cclxuICAgIH1cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLmhvcml6LWxpc3Qge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXg6IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICN0aXRsZSB7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgI3Zpcy1idG4ge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopHeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-top-header",
            templateUrl: "./top-header.component.html",
            styleUrls: ["./top-header.component.scss"]
          }]
        }], function () {
          return [{
            type: _services_inter_communication_service__WEBPACK_IMPORTED_MODULE_2__["InterCommunicationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "./src/styles.scss":
    /*!*************************!*\
      !*** ./src/styles.scss ***!
      \*************************/

    /*! no static exports found */

    /***/
    function srcStylesScss(module, exports, __webpack_require__) {
      var api = __webpack_require__(
      /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
      "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");

      var content = __webpack_require__(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--14-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--14-3!../node_modules/sass-loader/dist/cjs.js??ref--14-4!./styles.scss */
      "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

      content = content.__esModule ? content["default"] : content;

      if (typeof content === 'string') {
        content = [[module.i, content, '']];
      }

      var options = {};
      options.insert = "head";
      options.singleton = false;
      var update = api(content, options);
      module.exports = content.locals || {};
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\work\web\path-finder\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map