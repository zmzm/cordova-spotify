exports["SpotifyPlugin"] =
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["play"] = play;
/**
 * Plays a track by its URI.
 *
 * When `positionMs` is < 0, this function immediately throws an error
 * instead of returning a rejected promise.
 *
 * `auth` may change freely during runtime. The plugin will handle the
 * required login / logout processes automatically when a new track is played.
 *
 * @param {string} trackUri The URI of the track to play.
 * @param {AuthorizationData} auth Valid authorization data.
 * @param {number} positionMs The position (in millseconds) to start playing from. Must be >= 0.
 * @returns {Promise<void>} A promise that resolves when the track starts playing.
 * @async
 */
function play(success, error, trackUri, token, clientId, positionMs) {
    if (!trackUri) {
        throw new ReferenceError("trackUri parameter is null");
    }
    if (!token) {
        throw new ReferenceError("token parameter is null");
    }
    if (!clientId) {
        throw new ReferenceError("clientId parameter is null");
    }
    if (positionMs !== undefined && positionMs < 0) {
        throw new RangeError("positionMs parameter is < 0");
    }
    var resolve = function (v) { return setTimeout(function () { return success(v); }); };
    var reject = function (e) { return setTimeout(function () { return error(e); }); };
    cordova.exec(function (event) { return resolve(event); }, function (err) { return reject(err); }, 'SpotifyConnector', 'play', [trackUri, token, clientId, positionMs || 0]);
}


/***/ })
/******/ ]);
//# sourceMappingURL=SpotifyPlugin.js.map