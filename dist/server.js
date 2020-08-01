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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server-dev.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/util/logger.js":
/*!*******************************!*\
  !*** ./src/js/util/logger.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nconst winston = __webpack_require__(/*! winston */ \"winston\");\n\nconst logger = winston.createLogger({\n  transports: [new winston.transports.Console()]\n});\nexports.default = logger;\n\n//# sourceURL=webpack:///./src/js/util/logger.js?");

/***/ }),

/***/ "./src/server/config/aws-config.js":
/*!*****************************************!*\
  !*** ./src/server/config/aws-config.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nconst config = {\n  localConfig: {\n    region: 'local',\n    endpoint: 'http://localhost:4569'\n  }\n};\nexports.default = config;\n\n//# sourceURL=webpack:///./src/server/config/aws-config.js?");

/***/ }),

/***/ "./src/server/config/data-config.js":
/*!******************************************!*\
  !*** ./src/server/config/data-config.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nconst config = {\n  tableName: \"Products\"\n};\nexports.default = config;\n\n//# sourceURL=webpack:///./src/server/config/data-config.js?");

/***/ }),

/***/ "./src/server/routes/items-route.js":
/*!******************************************!*\
  !*** ./src/server/routes/items-route.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _awsSdk = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n\nvar _awsSdk2 = _interopRequireDefault(_awsSdk);\n\nvar _awsConfig = __webpack_require__(/*! ../config/aws-config */ \"./src/server/config/aws-config.js\");\n\nvar _awsConfig2 = _interopRequireDefault(_awsConfig);\n\nvar _dataConfig = __webpack_require__(/*! ../config/data-config */ \"./src/server/config/data-config.js\");\n\nvar _dataConfig2 = _interopRequireDefault(_dataConfig);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst router = _express2.default.Router();\n\n_awsSdk2.default.config.update(_awsConfig2.default.localConfig);\n\nconst docClient = new _awsSdk2.default.DynamoDB.DocumentClient();\nconst params = {\n  TableName: _dataConfig2.default.tableName\n};\nrouter.get('/', function (req, res, next) {\n  res.set('content-type', 'application/json');\n  docClient.scan(params, function (err, data) {\n    if (err) {\n      res.send({\n        success: false,\n        message: 'Error: Server error'\n      });\n    } else {\n      const {\n        Items\n      } = data;\n      res.send({\n        success: true,\n        message: 'Loaded products',\n        items: Items\n      });\n    }\n  });\n});\nexports.default = router;\n\n//# sourceURL=webpack:///./src/server/routes/items-route.js?");

/***/ }),

/***/ "./src/server/server-dev.js":
/*!**********************************!*\
  !*** ./src/server/server-dev.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar _webpack2 = _interopRequireDefault(_webpack);\n\nvar _webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n\nvar _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);\n\nvar _webpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n\nvar _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);\n\nvar _webpackDevConfig = __webpack_require__(/*! ../../webpack.dev.config.js */ \"./webpack.dev.config.js\");\n\nvar _webpackDevConfig2 = _interopRequireDefault(_webpackDevConfig);\n\nvar _logger = __webpack_require__(/*! ../js/util/logger */ \"./src/js/util/logger.js\");\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nvar _itemsRoute = __webpack_require__(/*! ./routes/items-route */ \"./src/server/routes/items-route.js\");\n\nvar _itemsRoute2 = _interopRequireDefault(_itemsRoute);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/*\n  App Setup\n*/\nconst app = (0, _express2.default)(),\n      DIST_DIR = __dirname,\n      HTML_FILE = _path2.default.join(DIST_DIR, 'index.html'),\n      compiler = (0, _webpack2.default)((0, _webpackDevConfig2.default)());\n/*\n  Middlewares\n*/\n\n\napp.use((0, _webpackDevMiddleware2.default)(compiler, {\n  publicPath: (0, _webpackDevConfig2.default)().output.publicPath\n}));\napp.use((0, _webpackHotMiddleware2.default)(compiler));\n/*\n  Routes\n*/\n\napp.use('/items', _itemsRoute2.default);\n/*\n  React Container Setup\n*/\n\napp.get('*', (req, res, next) => {\n  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {\n    if (err) {\n      return next(err);\n    }\n\n    res.set('content-type', 'text/html');\n    res.send(result);\n    res.end();\n  });\n});\nconst PORT = process.env.PORT || 3000;\napp.listen(PORT, () => {\n  _logger2.default.info(`App listening to ${PORT}....`);\n\n  _logger2.default.info('Press Ctrl+C to quit.');\n});\n\n//# sourceURL=webpack:///./src/server/server-dev.js?");

/***/ }),

/***/ "./webpack.dev.config.js":
/*!*******************************!*\
  !*** ./webpack.dev.config.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst HtmlWebPackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nconst dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\n\nmodule.exports = (env, argv) => {\n  const dotenvEnv = dotenv.config().parsed; // reduce it to a nice object, the same as before\n\n  const envKeys = Object.keys(dotenvEnv).reduce((prev, next) => {\n    prev[`process.env.${next}`] = JSON.stringify(dotenvEnv[next]);\n    return prev;\n  }, {});\n  return {\n    entry: {\n      main: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/index.js']\n    },\n    output: {\n      path: path.join(__dirname, 'dist'),\n      publicPath: '/',\n      filename: '[name].js'\n    },\n    mode: 'development',\n    target: 'web',\n    devtool: 'source-map',\n    module: {\n      rules: [{\n        enforce: \"pre\",\n        test: /\\.js$/,\n        exclude: /node_modules/,\n        loader: \"eslint-loader\",\n        options: {\n          emitWarning: true,\n          failOnError: false,\n          failOnWarning: false\n        }\n      }, {\n        test: /\\.js$/,\n        exclude: /node_modules/,\n        loader: \"babel-loader\"\n      }, {\n        // Loads the javacript into html template provided.\n        // Entry point is set below in HtmlWebPackPlugin in Plugins \n        test: /\\.html$/,\n        use: [{\n          loader: \"html-loader\" //options: { minimize: true }\n\n        }]\n      }, {\n        test: /\\.css$/,\n        use: ['style-loader', 'css-loader']\n      }, {\n        test: /\\.(png|svg|jpg|gif)$/,\n        use: ['file-loader']\n      }]\n    },\n    plugins: [new HtmlWebPackPlugin({\n      template: \"./src/html/index.html\",\n      filename: \"./index.html\",\n      excludeChunks: ['server']\n    }), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin(), new webpack.DefinePlugin(envKeys)]\n  };\n};\n\n//# sourceURL=webpack:///./webpack.dev.config.js?");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-sdk\");\n\n//# sourceURL=webpack:///external_%22aws-sdk%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"winston\");\n\n//# sourceURL=webpack:///external_%22winston%22?");

/***/ })

/******/ });