/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _App = __webpack_require__(/*! ../shared/App */ \"./src/shared/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _routes = __webpack_require__(/*! ../shared/routes */ \"./src/shared/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\napp.use((0, _cors2.default)());\n\napp.use(_express2.default.static('public'));\n\napp.get('*', function (req, res, next) {\n  var activeRoute = _routes2.default.find(function (path) {\n    return (0, _reactRouterDom.matchPath)(req.path, path);\n  }) || {};\n\n  var apiResponse = activeRoute.getInitialData ? activeRoute.getInitialData(req.path) : Promise.resolve();\n\n  apiResponse.then(function (data) {\n    var markup = (0, _server.renderToString)(_react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: req.url, context: { data: data } },\n      _react2.default.createElement(_App2.default, null)\n    ));\n\n    res.send('\\n      <!DOCTYPE html>\\n      <html>\\n        <head>\\n          <title>Home</title>\\n          <link type=\"text/css\" rel=\"stylesheet\" href=\"http://localhost:3000/styles.css\">\\n          <script>window.__SERIALIZED_DATA__ = ' + JSON.stringify(data) + '</script>\\n        </head>\\n  \\n        <body>\\n          <div id=\"app\">' + markup + '</div>\\n  \\n          <script src=\"/bundle.js\"></script>\\n        </body>\\n      </html>\\n    ');\n  }).catch(next);\n});\n\nvar PORT = 3000;\n\napp.listen(PORT, function () {\n  console.log('Server is listening on port ' + PORT);\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/shared/App.css":
/*!****************************!*\
  !*** ./src/shared/App.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/shared/App.css?");

/***/ }),

/***/ "./src/shared/App.js":
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Navbar = __webpack_require__(/*! ./components/Navbar */ \"./src/shared/components/Navbar.js\");\n\nvar _Navbar2 = _interopRequireDefault(_Navbar);\n\nvar _LazyModal = __webpack_require__(/*! ./components/LazyModal */ \"./src/shared/components/LazyModal.js\");\n\nvar _LazyModal2 = _interopRequireDefault(_LazyModal);\n\nvar _NoMatch = __webpack_require__(/*! ./components/NoMatch */ \"./src/shared/components/NoMatch.js\");\n\nvar _NoMatch2 = _interopRequireDefault(_NoMatch);\n\nvar _UniversalDataloader = __webpack_require__(/*! ./components/UniversalDataloader */ \"./src/shared/components/UniversalDataloader.js\");\n\nvar _UniversalDataloader2 = _interopRequireDefault(_UniversalDataloader);\n\nvar _routes = __webpack_require__(/*! ./routes */ \"./src/shared/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\n__webpack_require__(/*! ./App.css */ \"./src/shared/App.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, App);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      open: false\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'app' },\n        _react2.default.createElement(_Navbar2.default, null),\n        _react2.default.createElement(\n          'main',\n          null,\n          _react2.default.createElement(\n            _reactRouterDom.Switch,\n            null,\n            _routes2.default.map(function (_ref2) {\n              var path = _ref2.path,\n                  exact = _ref2.exact,\n                  C = _ref2.C,\n                  rest = _objectWithoutProperties(_ref2, ['path', 'exact', 'C']);\n\n              return _react2.default.createElement(_reactRouterDom.Route, {\n                key: path,\n                path: path,\n                exact: exact,\n                render: function render(props) {\n                  return _react2.default.createElement(\n                    _UniversalDataloader2.default,\n                    _extends({}, props, rest),\n                    function (dataProps) {\n                      return _react2.default.createElement(C, dataProps);\n                    }\n                  );\n                }\n              });\n            }),\n            _react2.default.createElement(_reactRouterDom.Route, { render: function render(props) {\n                return _react2.default.createElement(_NoMatch2.default, props);\n              } })\n          )\n        ),\n        this.state.open && _react2.default.createElement(_LazyModal2.default, null)\n      );\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nexports.default = App;\n\n//# sourceURL=webpack:///./src/shared/App.js?");

/***/ }),

/***/ "./src/shared/apiCalls.js":
/*!********************************!*\
  !*** ./src/shared/apiCalls.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.fetchPostById = exports.fetchAllPosts = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar baseUri = 'http://localhost:3002';\n\nvar fetchAllPosts = exports.fetchAllPosts = function fetchAllPosts() {\n  return _axios2.default.get(baseUri + '/posts').then(function (_ref) {\n    var data = _ref.data;\n    return data;\n  }).catch(function (e) {\n    console.log(e);\n    return null;\n  });\n};\n\nvar fetchPostById = exports.fetchPostById = function fetchPostById(id) {\n  return _axios2.default.get(baseUri + '/post/' + id).then(function (_ref2) {\n    var data = _ref2.data;\n    return data;\n  }).catch(function (e) {\n    console.warn(e);\n    return null;\n  });\n};\n\n//# sourceURL=webpack:///./src/shared/apiCalls.js?");

/***/ }),

/***/ "./src/shared/components/Home.js":
/*!***************************************!*\
  !*** ./src/shared/components/Home.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home(_ref) {\n  var loading = _ref.loading,\n      posts = _ref.data;\n  return _react2.default.createElement(\n    \"div\",\n    { className: \"home\" },\n    loading ? _react2.default.createElement(\n      \"div\",\n      { className: \"loader\" },\n      \"Loading\"\n    ) : _react2.default.createElement(\n      \"div\",\n      { className: \"posts\" },\n      posts.map(function (post) {\n        return _react2.default.createElement(\n          \"h3\",\n          { key: post.id },\n          post.title\n        );\n      })\n    )\n  );\n};\n\nexports.default = Home;\n\n//# sourceURL=webpack:///./src/shared/components/Home.js?");

/***/ }),

/***/ "./src/shared/components/LazyModal.js":
/*!********************************************!*\
  !*** ./src/shared/components/LazyModal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar LazyModal = function LazyModal() {\n  return _react2.default.createElement(\n    \"div\",\n    { className: \"modal\" },\n    \"This is a lazy loaded modal. All hail component based code splitting.\"\n  );\n};\n\nexports.default = LazyModal;\n\n//# sourceURL=webpack:///./src/shared/components/LazyModal.js?");

/***/ }),

/***/ "./src/shared/components/Navbar.js":
/*!*****************************************!*\
  !*** ./src/shared/components/Navbar.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Navbar = function Navbar() {\n  return _react2.default.createElement(\n    'header',\n    { className: 'navbar' },\n    _react2.default.createElement(\n      'section',\n      { className: 'navbar-section' },\n      _react2.default.createElement(NavButton, { to: '/', text: 'Home' }),\n      _react2.default.createElement(NavButton, { to: '/post/1', text: 'Post One' }),\n      _react2.default.createElement(NavButton, { to: '/post/2', text: 'Post Two' })\n    )\n  );\n};\n\nvar NavButton = function NavButton(_ref) {\n  var to = _ref.to,\n      text = _ref.text;\n  return _react2.default.createElement(\n    _reactRouterDom.NavLink,\n    { to: to, className: 'btn btn-link', activeClassName: 'btn btn-primary' },\n    text\n  );\n};\n\nexports.default = Navbar;\n\n//# sourceURL=webpack:///./src/shared/components/Navbar.js?");

/***/ }),

/***/ "./src/shared/components/NoMatch.js":
/*!******************************************!*\
  !*** ./src/shared/components/NoMatch.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar NoMatch = function NoMatch() {\n  return _react2.default.createElement(\n    \"div\",\n    { className: \"route\" },\n    \"No such route!!\"\n  );\n};\n\nexports.default = NoMatch;\n\n//# sourceURL=webpack:///./src/shared/components/NoMatch.js?");

/***/ }),

/***/ "./src/shared/components/Post.js":
/*!***************************************!*\
  !*** ./src/shared/components/Post.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// class Post extends Component {\n//   constructor(props) {\n//     super(props);\n\n//     console.log(this.props);\n\n//     let post;\n//     if (__isBrowser__ && window.__SERIALIZED_DATA__) {\n//       post = window.__SERIALIZED_DATA__;\n//       delete window.__SERIALIZED_DATA__;\n//     } else if (this.props.staticContext) {\n//       post = this.props.staticContext;\n//     }\n\n//     this.state = {\n//       post,\n//       loading: post ? false : true,\n//     };\n//   }\n\n//   componentDidMount() {\n//     if (!this.state.post) {\n//       console.log('cdm');\n//       this.fetchData(this.props.match.params.id);\n//     }\n//   }\n\n//   componentDidUpdate(prevProps) {\n//     const id = this.props.match.params.id;\n//     if (prevProps.match.params.id !== id) {\n//       console.log('cdu');\n//       this.fetchData(id);\n//     }\n//   }\n\n//   fetchData = id => {\n//     this.setState({ loading: true });\n\n//     this.props.getInitialData(id).then(post => {\n//       this.setState({ post, loading: false });\n//     });\n//   };\n\n//   render() {\n//     const { post, loading } = this.state;\n//     return (\n//       <div className=\"post\">\n//         {loading ? (\n//           <div className=\"loader\">Loading</div>\n//         ) : (\n//           <Fragment>\n//             <h3>{post.title}</h3>\n//             <p>{post.content}</p>\n//           </Fragment>\n//         )}\n//       </div>\n//     );\n//   }\n// }\n\nvar Post = function Post(_ref) {\n  var loading = _ref.loading,\n      data = _ref.data;\n  return _react2.default.createElement(\n    \"div\",\n    { className: \"post\" },\n    loading ? _react2.default.createElement(\n      \"div\",\n      { className: \"loader\" },\n      \"Loading\"\n    ) : _react2.default.createElement(\n      _react.Fragment,\n      null,\n      _react2.default.createElement(\n        \"h3\",\n        null,\n        data.title\n      ),\n      _react2.default.createElement(\n        \"p\",\n        null,\n        data.content\n      )\n    )\n  );\n};\n\nexports.default = Post;\n\n//# sourceURL=webpack:///./src/shared/components/Post.js?");

/***/ }),

/***/ "./src/shared/components/UniversalDataloader.js":
/*!******************************************************!*\
  !*** ./src/shared/components/UniversalDataloader.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar UniversalDataloader = function (_Component) {\n  _inherits(UniversalDataloader, _Component);\n\n  function UniversalDataloader(props) {\n    _classCallCheck(this, UniversalDataloader);\n\n    var _this = _possibleConstructorReturn(this, (UniversalDataloader.__proto__ || Object.getPrototypeOf(UniversalDataloader)).call(this, props));\n\n    _initialiseProps.call(_this);\n\n    var data = void 0;\n    if (false) {} else if (_this.props.staticContext) {\n      data = _this.props.staticContext.data;\n    }\n\n    _this.state = {\n      data: data,\n      loading: data ? false : true\n    };\n    return _this;\n  }\n\n  _createClass(UniversalDataloader, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      if (!this.state.data) {\n        this.fetchData(this.props.match.params.id);\n      }\n    }\n  }, {\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate(prevProps) {\n      var id = this.props.match.params.id;\n      if (prevProps.match.params.id !== id) {\n        this.fetchData(id);\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return this.props.children(this.state);\n    }\n  }]);\n\n  return UniversalDataloader;\n}(_react.Component);\n\nvar _initialiseProps = function _initialiseProps() {\n  var _this2 = this;\n\n  this.fetchData = function (id) {\n    _this2.setState({ loading: true });\n\n    _this2.props.getInitialData(id).then(function (data) {\n      _this2.setState({ data: data, loading: false });\n    });\n  };\n};\n\nexports.default = UniversalDataloader;\n\n//# sourceURL=webpack:///./src/shared/components/UniversalDataloader.js?");

/***/ }),

/***/ "./src/shared/routes.js":
/*!******************************!*\
  !*** ./src/shared/routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Home = __webpack_require__(/*! ./components/Home */ \"./src/shared/components/Home.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Post = __webpack_require__(/*! ./components/Post */ \"./src/shared/components/Post.js\");\n\nvar _Post2 = _interopRequireDefault(_Post);\n\nvar _apiCalls = __webpack_require__(/*! ./apiCalls */ \"./src/shared/apiCalls.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar routes = [{\n  path: '/',\n  exact: true,\n  C: _Home2.default,\n  getInitialData: function getInitialData() {\n    return (0, _apiCalls.fetchAllPosts)();\n  }\n}, {\n  path: '/post/:id',\n  C: _Post2.default,\n  getInitialData: function getInitialData() {\n    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n    return (0, _apiCalls.fetchPostById)(path.split('/').pop());\n  }\n}];\n\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/shared/routes.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });