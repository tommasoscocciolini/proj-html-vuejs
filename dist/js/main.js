/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

var app = new Vue({
  el: '#root',
  data: {
    navEl: [{
      name: 'Home',
      link: ''
    }, {
      name: 'About',
      link: ''
    }, {
      name: 'Services',
      link: ''
    }, {
      name: 'Blog',
      link: ''
    }, {
      name: 'Contact',
      link: ''
    }, {
      name: 'Portfolio',
      link: ''
    }],
    latestWorks: [{
      name: 'Basket of Flower on table',
      screen: './img/latest1.jpg',
      type: 'Branding Strategy'
    }, {
      name: 'Purinky Products',
      screen: './img/latest4.jpg',
      type: 'Digital Experience'
    }, {
      name: 'Satisfy Poster',
      screen: './img/latest3.jpg',
      type: 'Branding Strategy'
    }, {
      name: 'Mock-up',
      screen: './img/latest2.jpg',
      type: 'Digital Experience'
    }],
    wwd: [{
      what: 'Data Analysis',
      desc: 'When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper',
      screen: './img/dataAnalysis.png'
    }, {
      what: 'SEO Optimization',
      desc: 'When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper',
      screen: './img/seo-optimization.png'
    }, {
      what: 'Security Data',
      desc: 'When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper',
      screen: './img/securityData.png'
    }, {
      what: 'Branding Strategy',
      desc: 'When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper',
      screen: './img/brandingstrats.png'
    }],
    plans: [{
      name: 'Designing',
      subtitle: 'Process',
      price: 40
    }, {
      name: 'Developing',
      subtitle: 'Product',
      price: 60
    }, {
      name: 'Supporting',
      subtitle: 'Clients',
      price: 80
    }],
    servicesPlans: [{
      type: 'Creative',
      tx1: 'Design Enabled'
    }, {
      type: 'Vibrant',
      tx1: 'Color Usage'
    }, {
      type: 'Eye',
      tx1: 'Catching Design'
    }, {
      type: 'Extreme',
      tx1: 'Typography'
    }, {
      type: 'Exceptional',
      tx1: 'Design'
    }],
    // posts: [
    //   {
    //     date: 'April 21, 2019',
    //     contact: 'Alex',
    //     title: 'Amazon gets CCI nod to aquire 49% stake in',
    //     text: 'When, while the lovely valley teems with vapour around me and the meridian sun s...'
    //   },
    // ]
    testimonials: [{
      iconPath: './img/id1.png',
      rate: 3,
      text: 'When, while the lovely valley teems with vapour around me and the meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand',
      name: 'Michkel Anegl',
      role: 'Marketing Management'
    }, {
      iconPath: './img/id2.png',
      rate: 3,
      text: 'When, while the lovely valley teems with vapour around me and the meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand',
      name: 'Michkel Anegl',
      role: 'Marketing Management'
    }, {
      iconPath: './img/id3.png',
      rate: 3,
      text: 'When, while the lovely valley teems with vapour around me and the meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand',
      name: 'Michkel Anegl',
      role: 'Marketing Management'
    }],
    sponsors: [{
      logo: './img/client-1-1.png'
    }, {
      logo: './img/clienty-2.png'
    }, {
      logo: './img/clienty-4.png'
    }, {
      logo: './img/client-5.png'
    }, {
      logo: './img/clienty-3.png'
    }]
  },
  methods: {
    getImgScreen: function getImgScreen(work) {
      var imgSrc = String("./img/latest" + latestWorks.screen + ".jpg");
      return String(imgSrc);
    }
  },
  created: function created() {},
  computed: {}
});

/***/ }),

/***/ "./src/scss/master.scss":
/*!******************************!*\
  !*** ./src/scss/master.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/js/main": 0,
/******/ 			"dist/css/master": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/css/master"], () => (__webpack_require__("./src/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/css/master"], () => (__webpack_require__("./src/scss/master.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;