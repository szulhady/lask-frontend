module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/bar-chart-horizontal","2":"components/button","3":"components/button-training","4":"components/dialog-training","5":"components/header","6":"components/io-socket-status","7":"components/login-form","8":"components/logo","9":"components/model","10":"components/notification","11":"components/pie","12":"components/register-form2","13":"components/single-line-chart","14":"components/single-line-chart-performance","15":"components/status","16":"components/summary","17":"components/vuetify-logo","18":"pages/index","19":"pages/inspire","20":"pages/login","21":"pages/overview","22":"pages/register"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 59);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return createSimpleFunctional; });
/* unused harmony export directiveConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addOnceEventListener; });
/* unused harmony export passiveSupported */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addPassiveEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return getNestedValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return deepEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return getObjectValueByPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return getPropertyFromItem; });
/* unused harmony export createRange */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return getZIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return escapeHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return filterObjectOnKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return convertToUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return kebabCase; });
/* unused harmony export isObject */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return keyCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return remapInternalIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return camelize; });
/* unused harmony export arrayDiff */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return upperFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return groupItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return wrapInArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return sortItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return defaultFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return searchItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return getSlotType; });
/* unused harmony export debounce */
/* unused harmony export throttle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return getPrefixedScopedSlots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return getSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return padEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return chunk; });
/* unused harmony export humanReadableFileSize */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return camelizeObjectKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return mergeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return fillArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return composedPath; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

function createSimpleFunctional(c, el = 'div', name) {
  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    name: name || c.replace(/__/g, '-'),
    functional: true,
    props: {
      tag: {
        type: String,
        default: el
      }
    },

    render(h, {
      data,
      props,
      children
    }) {
      data.staticClass = `${c} ${data.staticClass || ''}`.trim();
      return h(props.tag, data, children);
    }

  });
}
function directiveConfig(binding, defaults = {}) {
  return { ...defaults,
    ...binding.modifiers,
    value: binding.arg,
    ...(binding.value || {})
  };
}
function addOnceEventListener(el, eventName, cb, options = false) {
  const once = event => {
    cb(event);
    el.removeEventListener(eventName, once, options);
  };

  el.addEventListener(eventName, once, options);
}
let passiveSupported = false;

try {
  if (typeof window !== 'undefined') {
    const testListenerOpts = Object.defineProperty({}, 'passive', {
      get: () => {
        passiveSupported = true;
      }
    });
    window.addEventListener('testListener', testListenerOpts, testListenerOpts);
    window.removeEventListener('testListener', testListenerOpts, testListenerOpts);
  }
} catch (e) {
  console.warn(e);
}
/* eslint-disable-line no-console */



function addPassiveEventListener(el, event, cb, options) {
  el.addEventListener(event, cb, passiveSupported ? options : false);
}
function getNestedValue(obj, path, fallback) {
  const last = path.length - 1;
  if (last < 0) return obj === undefined ? fallback : obj;

  for (let i = 0; i < last; i++) {
    if (obj == null) {
      return fallback;
    }

    obj = obj[path[i]];
  }

  if (obj == null) return fallback;
  return obj[path[last]] === undefined ? fallback : obj[path[last]];
}
function deepEqual(a, b) {
  if (a === b) return true;

  if (a instanceof Date && b instanceof Date && a.getTime() !== b.getTime()) {
    // If the values are Date, compare them as timestamps
    return false;
  }

  if (a !== Object(a) || b !== Object(b)) {
    // If the values aren't objects, they were already checked for equality
    return false;
  }

  const props = Object.keys(a);

  if (props.length !== Object.keys(b).length) {
    // Different number of props, don't bother to check
    return false;
  }

  return props.every(p => deepEqual(a[p], b[p]));
}
function getObjectValueByPath(obj, path, fallback) {
  // credit: http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key#comment55278413_6491621
  if (obj == null || !path || typeof path !== 'string') return fallback;
  if (obj[path] !== undefined) return obj[path];
  path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties

  path = path.replace(/^\./, ''); // strip a leading dot

  return getNestedValue(obj, path.split('.'), fallback);
}
function getPropertyFromItem(item, property, fallback) {
  if (property == null) return item === undefined ? fallback : item;
  if (item !== Object(item)) return fallback === undefined ? item : fallback;
  if (typeof property === 'string') return getObjectValueByPath(item, property, fallback);
  if (Array.isArray(property)) return getNestedValue(item, property, fallback);
  if (typeof property !== 'function') return fallback;
  const value = property(item, fallback);
  return typeof value === 'undefined' ? fallback : value;
}
function createRange(length) {
  return Array.from({
    length
  }, (v, k) => k);
}
function getZIndex(el) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE) return 0;
  const index = +window.getComputedStyle(el).getPropertyValue('z-index');
  if (!index) return getZIndex(el.parentNode);
  return index;
}
const tagsToReplace = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};
function escapeHTML(str) {
  return str.replace(/[&<>]/g, tag => tagsToReplace[tag] || tag);
}
function filterObjectOnKeys(obj, keys) {
  const filtered = {};

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    if (typeof obj[key] !== 'undefined') {
      filtered[key] = obj[key];
    }
  }

  return filtered;
}
function convertToUnit(str, unit = 'px') {
  if (str == null || str === '') {
    return undefined;
  } else if (isNaN(+str)) {
    return String(str);
  } else {
    return `${Number(str)}${unit}`;
  }
}
function kebabCase(str) {
  return (str || '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
function isObject(obj) {
  return obj !== null && typeof obj === 'object';
} // KeyboardEvent.keyCode aliases

const keyCodes = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16
});
/**
 * This remaps internal names like '$cancel' or '$vuetify.icons.cancel'
 * to the current name or component for that icon.
 */

function remapInternalIcon(vm, iconName) {
  // Look for custom component in the configuration
  const component = vm.$vuetify.icons.component; // Look for overrides

  if (iconName.startsWith('$')) {
    // Get the target icon name
    const iconPath = `$vuetify.icons.values.${iconName.split('$').pop().split('.').pop()}`; // Now look up icon indirection name,
    // e.g. '$vuetify.icons.values.cancel'

    const override = getObjectValueByPath(vm, iconPath, iconName);
    if (typeof override === 'string') iconName = override;else return override;
  }

  if (component == null) {
    return iconName;
  }

  return {
    component,
    props: {
      icon: iconName
    }
  };
}
function keys(o) {
  return Object.keys(o);
}
/**
 * Camelize a hyphen-delimited string.
 */

const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '');
};
/**
 * Returns the set difference of B and A, i.e. the set of elements in B but not in A
 */

function arrayDiff(a, b) {
  const diff = [];

  for (let i = 0; i < b.length; i++) {
    if (a.indexOf(b[i]) < 0) diff.push(b[i]);
  }

  return diff;
}
/**
 * Makes the first character of a string uppercase
 */

function upperFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function groupItems(items, groupBy, groupDesc) {
  const key = groupBy[0];
  const groups = [];
  let current;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const val = getObjectValueByPath(item, key, null);

    if (current !== val) {
      current = val;
      groups.push({
        name: val != null ? val : '',
        items: []
      });
    }

    groups[groups.length - 1].items.push(item);
  }

  return groups;
}
function wrapInArray(v) {
  return v != null ? Array.isArray(v) ? v : [v] : [];
}
function sortItems(items, sortBy, sortDesc, locale, customSorters) {
  if (sortBy === null || !sortBy.length) return items;
  const stringCollator = new Intl.Collator(locale, {
    sensitivity: 'accent',
    usage: 'sort'
  });
  return items.sort((a, b) => {
    for (let i = 0; i < sortBy.length; i++) {
      const sortKey = sortBy[i];
      let sortA = getObjectValueByPath(a, sortKey);
      let sortB = getObjectValueByPath(b, sortKey);

      if (sortDesc[i]) {
        [sortA, sortB] = [sortB, sortA];
      }

      if (customSorters && customSorters[sortKey]) {
        const customResult = customSorters[sortKey](sortA, sortB);
        if (!customResult) continue;
        return customResult;
      } // Check if both cannot be evaluated


      if (sortA === null && sortB === null) {
        continue;
      } // Dates should be compared numerically


      if (sortA instanceof Date && sortB instanceof Date) {
        return sortA.getTime() - sortB.getTime();
      }

      [sortA, sortB] = [sortA, sortB].map(s => (s || '').toString().toLocaleLowerCase());

      if (sortA !== sortB) {
        if (!isNaN(sortA) && !isNaN(sortB)) return Number(sortA) - Number(sortB);
        return stringCollator.compare(sortA, sortB);
      }
    }

    return 0;
  });
}
function defaultFilter(value, search, item) {
  return value != null && search != null && typeof value !== 'boolean' && value.toString().toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1;
}
function searchItems(items, search) {
  if (!search) return items;
  search = search.toString().toLowerCase();
  if (search.trim() === '') return items;
  return items.filter(item => Object.keys(item).some(key => defaultFilter(getObjectValueByPath(item, key), search, item)));
}
/**
 * Returns:
 *  - 'normal' for old style slots - `<template slot="default">`
 *  - 'scoped' for old style scoped slots (`<template slot="default" slot-scope="data">`) or bound v-slot (`#default="data"`)
 *  - 'v-slot' for unbound v-slot (`#default`) - only if the third param is true, otherwise counts as scoped
 */

function getSlotType(vm, name, split) {
  if (vm.$slots.hasOwnProperty(name) && vm.$scopedSlots.hasOwnProperty(name) && vm.$scopedSlots[name].name) {
    return split ? 'v-slot' : 'scoped';
  }

  if (vm.$slots.hasOwnProperty(name)) return 'normal';
  if (vm.$scopedSlots.hasOwnProperty(name)) return 'scoped';
}
function debounce(fn, delay) {
  let timeoutId = 0;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}
function throttle(fn, limit) {
  let throttling = false;
  return (...args) => {
    if (!throttling) {
      throttling = true;
      setTimeout(() => throttling = false, limit);
      return fn(...args);
    }
  };
}
function getPrefixedScopedSlots(prefix, scopedSlots) {
  return Object.keys(scopedSlots).filter(k => k.startsWith(prefix)).reduce((obj, k) => {
    obj[k.replace(prefix, '')] = scopedSlots[k];
    return obj;
  }, {});
}
function getSlot(vm, name = 'default', data, optional = false) {
  if (vm.$scopedSlots.hasOwnProperty(name)) {
    return vm.$scopedSlots[name](data instanceof Function ? data() : data);
  } else if (vm.$slots.hasOwnProperty(name) && (!data || optional)) {
    return vm.$slots[name];
  }

  return undefined;
}
function clamp(value, min = 0, max = 1) {
  return Math.max(min, Math.min(max, value));
}
function padEnd(str, length, char = '0') {
  return str + char.repeat(Math.max(0, length - str.length));
}
function chunk(str, size = 1) {
  const chunked = [];
  let index = 0;

  while (index < str.length) {
    chunked.push(str.substr(index, size));
    index += size;
  }

  return chunked;
}
function humanReadableFileSize(bytes, binary = false) {
  const base = binary ? 1024 : 1000;

  if (bytes < base) {
    return `${bytes} B`;
  }

  const prefix = binary ? ['Ki', 'Mi', 'Gi'] : ['k', 'M', 'G'];
  let unit = -1;

  while (Math.abs(bytes) >= base && unit < prefix.length - 1) {
    bytes /= base;
    ++unit;
  }

  return `${bytes.toFixed(1)} ${prefix[unit]}B`;
}
function camelizeObjectKeys(obj) {
  if (!obj) return {};
  return Object.keys(obj).reduce((o, key) => {
    o[camelize(key)] = obj[key];
    return o;
  }, {});
}
function mergeDeep(source = {}, target = {}) {
  for (const key in target) {
    const sourceProperty = source[key];
    const targetProperty = target[key]; // Only continue deep merging if
    // both properties are objects

    if (isObject(sourceProperty) && isObject(targetProperty)) {
      source[key] = mergeDeep(sourceProperty, targetProperty);
      continue;
    }

    source[key] = targetProperty;
  }

  return source;
}
function fillArray(length, obj) {
  return Array(length).fill(obj);
}
/**  Polyfill for Event.prototype.composedPath */

function composedPath(e) {
  if (e.composedPath) return e.composedPath();
  const path = [];
  let el = e.target;

  while (el) {
    path.push(el);

    if (el.tagName === 'HTML') {
      path.push(document);
      path.push(window);
      return path;
    }

    el = el.parentElement;
  }

  return path;
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export consoleInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return consoleWarn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return consoleError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deprecate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return breaking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removed; });
/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* eslint-disable no-console */


function createMessage(message, vm, parent) {
  if (_framework__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].config.silent) return;

  if (parent) {
    vm = {
      _isVue: true,
      $parent: parent,
      $options: vm
    };
  }

  if (vm) {
    // Only show each message once per instance
    vm.$_alreadyWarned = vm.$_alreadyWarned || [];
    if (vm.$_alreadyWarned.includes(message)) return;
    vm.$_alreadyWarned.push(message);
  }

  return `[Vuetify] ${message}` + (vm ? generateComponentTrace(vm) : '');
}

function consoleInfo(message, vm, parent) {
  const newMessage = createMessage(message, vm, parent);
  newMessage != null && console.info(newMessage);
}
function consoleWarn(message, vm, parent) {
  const newMessage = createMessage(message, vm, parent);
  newMessage != null && console.warn(newMessage);
}
function consoleError(message, vm, parent) {
  const newMessage = createMessage(message, vm, parent);
  newMessage != null && console.error(newMessage);
}
function deprecate(original, replacement, vm, parent) {
  consoleWarn(`[UPGRADE] '${original}' is deprecated, use '${replacement}' instead.`, vm, parent);
}
function breaking(original, replacement, vm, parent) {
  consoleError(`[BREAKING] '${original}' has been removed, use '${replacement}' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide`, vm, parent);
}
function removed(original, vm, parent) {
  consoleWarn(`[REMOVED] '${original}' has been removed. You can safely omit it.`, vm, parent);
}
/**
 * Shamelessly stolen from vuejs/vue/blob/dev/src/core/util/debug.js
 */

const classifyRE = /(?:^|[-_])(\w)/g;

const classify = str => str.replace(classifyRE, c => c.toUpperCase()).replace(/[-_]/g, '');

function formatComponentName(vm, includeFile) {
  if (vm.$root === vm) {
    return '<Root>';
  }

  const options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm || {};
  let name = options.name || options._componentTag;
  const file = options.__file;

  if (!name && file) {
    const match = file.match(/([^/\\]+)\.vue$/);
    name = match && match[1];
  }

  return (name ? `<${classify(name)}>` : `<Anonymous>`) + (file && includeFile !== false ? ` at ${file}` : '');
}

function generateComponentTrace(vm) {
  if (vm._isVue && vm.$parent) {
    const tree = [];
    let currentRecursiveSequence = 0;

    while (vm) {
      if (tree.length > 0) {
        const last = tree[tree.length - 1];

        if (last.constructor === vm.constructor) {
          currentRecursiveSequence++;
          vm = vm.$parent;
          continue;
        } else if (currentRecursiveSequence > 0) {
          tree[tree.length - 1] = [last, currentRecursiveSequence];
          currentRecursiveSequence = 0;
        }
      }

      tree.push(vm);
      vm = vm.$parent;
    }

    return '\n\nfound in\n\n' + tree.map((vm, i) => `${i === 0 ? '---> ' : ' '.repeat(5 + i * 2)}${Array.isArray(vm) ? `${formatComponentName(vm[0])}... (${vm[1]} recursive calls)` : formatComponentName(vm)}`).join('\n');
  } else {
    return `\n\n(found in ${formatComponentName(vm)})`;
  }
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
class Service {
  constructor() {
    this.framework = {};
  }

  init(root, ssrContext) {}

}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
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

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mixins; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable max-len, import/export, no-use-before-define */

function mixins(...args) {
  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    mixins: args
  });
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isCssColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return colorToInt; });
/* unused harmony export classToHex */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return intToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colorToHex; });
/* unused harmony export HSVAtoRGBA */
/* unused harmony export RGBAtoHSVA */
/* unused harmony export HSVAtoHSLA */
/* unused harmony export HSLAtoHSVA */
/* unused harmony export RGBAtoCSS */
/* unused harmony export RGBtoCSS */
/* unused harmony export RGBAtoHex */
/* unused harmony export HexToRGBA */
/* unused harmony export HexToHSVA */
/* unused harmony export HSVAtoHex */
/* unused harmony export parseHex */
/* unused harmony export parseGradient */
/* unused harmony export RGBtoInt */
/* unused harmony export contrastRatio */
/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _color_transformSRGB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
// Utilities



function isCssColor(color) {
  return !!color && !!color.match(/^(#|var\(--|(rgb|hsl)a?\()/);
}
function colorToInt(color) {
  let rgb;

  if (typeof color === 'number') {
    rgb = color;
  } else if (typeof color === 'string') {
    let c = color[0] === '#' ? color.substring(1) : color;

    if (c.length === 3) {
      c = c.split('').map(char => char + char).join('');
    }

    if (c.length !== 6) {
      Object(_console__WEBPACK_IMPORTED_MODULE_0__[/* consoleWarn */ "c"])(`'${color}' is not a valid rgb color`);
    }

    rgb = parseInt(c, 16);
  } else {
    throw new TypeError(`Colors can only be numbers or strings, recieved ${color == null ? color : color.constructor.name} instead`);
  }

  if (rgb < 0) {
    Object(_console__WEBPACK_IMPORTED_MODULE_0__[/* consoleWarn */ "c"])(`Colors cannot be negative: '${color}'`);
    rgb = 0;
  } else if (rgb > 0xffffff || isNaN(rgb)) {
    Object(_console__WEBPACK_IMPORTED_MODULE_0__[/* consoleWarn */ "c"])(`'${color}' is not a valid rgb color`);
    rgb = 0xffffff;
  }

  return rgb;
}
function classToHex(color, colors, currentTheme) {
  const [colorName, colorModifier] = color.toString().trim().replace('-', '').split(' ', 2);
  let hexColor = '';

  if (colorName && colorName in colors) {
    if (colorModifier && colorModifier in colors[colorName]) {
      hexColor = colors[colorName][colorModifier];
    } else if ('base' in colors[colorName]) {
      hexColor = colors[colorName].base;
    }
  } else if (colorName && colorName in currentTheme) {
    hexColor = currentTheme[colorName];
  }

  return hexColor;
}
function intToHex(color) {
  let hexColor = color.toString(16);
  if (hexColor.length < 6) hexColor = '0'.repeat(6 - hexColor.length) + hexColor;
  return '#' + hexColor;
}
function colorToHex(color) {
  return intToHex(colorToInt(color));
}
/**
 * Converts HSVA to RGBA. Based on formula from https://en.wikipedia.org/wiki/HSL_and_HSV
 *
 * @param color HSVA color as an array [0-360, 0-1, 0-1, 0-1]
 */

function HSVAtoRGBA(hsva) {
  const {
    h,
    s,
    v,
    a
  } = hsva;

  const f = n => {
    const k = (n + h / 60) % 6;
    return v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
  };

  const rgb = [f(5), f(3), f(1)].map(v => Math.round(v * 255));
  return {
    r: rgb[0],
    g: rgb[1],
    b: rgb[2],
    a
  };
}
/**
 * Converts RGBA to HSVA. Based on formula from https://en.wikipedia.org/wiki/HSL_and_HSV
 *
 * @param color RGBA color as an array [0-255, 0-255, 0-255, 0-1]
 */

function RGBAtoHSVA(rgba) {
  if (!rgba) return {
    h: 0,
    s: 1,
    v: 1,
    a: 1
  };
  const r = rgba.r / 255;
  const g = rgba.g / 255;
  const b = rgba.b / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;

  if (max !== min) {
    if (max === r) {
      h = 60 * (0 + (g - b) / (max - min));
    } else if (max === g) {
      h = 60 * (2 + (b - r) / (max - min));
    } else if (max === b) {
      h = 60 * (4 + (r - g) / (max - min));
    }
  }

  if (h < 0) h = h + 360;
  const s = max === 0 ? 0 : (max - min) / max;
  const hsv = [h, s, max];
  return {
    h: hsv[0],
    s: hsv[1],
    v: hsv[2],
    a: rgba.a
  };
}
function HSVAtoHSLA(hsva) {
  const {
    h,
    s,
    v,
    a
  } = hsva;
  const l = v - v * s / 2;
  const sprime = l === 1 || l === 0 ? 0 : (v - l) / Math.min(l, 1 - l);
  return {
    h,
    s: sprime,
    l,
    a
  };
}
function HSLAtoHSVA(hsl) {
  const {
    h,
    s,
    l,
    a
  } = hsl;
  const v = l + s * Math.min(l, 1 - l);
  const sprime = v === 0 ? 0 : 2 - 2 * l / v;
  return {
    h,
    s: sprime,
    v,
    a
  };
}
function RGBAtoCSS(rgba) {
  return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
}
function RGBtoCSS(rgba) {
  return RGBAtoCSS({ ...rgba,
    a: 1
  });
}
function RGBAtoHex(rgba) {
  const toHex = v => {
    const h = Math.round(v).toString(16);
    return ('00'.substr(0, 2 - h.length) + h).toUpperCase();
  };

  return `#${[toHex(rgba.r), toHex(rgba.g), toHex(rgba.b), toHex(Math.round(rgba.a * 255))].join('')}`;
}
function HexToRGBA(hex) {
  const rgba = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[/* chunk */ "e"])(hex.slice(1), 2).map(c => parseInt(c, 16));
  return {
    r: rgba[0],
    g: rgba[1],
    b: rgba[2],
    a: Math.round(rgba[3] / 255 * 100) / 100
  };
}
function HexToHSVA(hex) {
  const rgb = HexToRGBA(hex);
  return RGBAtoHSVA(rgb);
}
function HSVAtoHex(hsva) {
  return RGBAtoHex(HSVAtoRGBA(hsva));
}
function parseHex(hex) {
  if (hex.startsWith('#')) {
    hex = hex.slice(1);
  }

  hex = hex.replace(/([^0-9a-f])/gi, 'F');

  if (hex.length === 3 || hex.length === 4) {
    hex = hex.split('').map(x => x + x).join('');
  }

  if (hex.length === 6) {
    hex = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[/* padEnd */ "A"])(hex, 8, 'F');
  } else {
    hex = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[/* padEnd */ "A"])(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[/* padEnd */ "A"])(hex, 6), 8, 'F');
  }

  return `#${hex}`.toUpperCase().substr(0, 9);
}
function parseGradient(gradient, colors, currentTheme) {
  return gradient.replace(/([a-z]+(\s[a-z]+-[1-5])?)(?=$|,)/gi, x => {
    return classToHex(x, colors, currentTheme) || x;
  }).replace(/(rgba\()#[0-9a-f]+(?=,)/gi, x => {
    return 'rgba(' + Object.values(HexToRGBA(parseHex(x.replace(/rgba\(/, '')))).slice(0, 3).join(',');
  });
}
function RGBtoInt(rgba) {
  return (rgba.r << 16) + (rgba.g << 8) + rgba.b;
}
/**
 * Returns the contrast ratio (1-21) between two colors.
 *
 * @param c1 First color
 * @param c2 Second color
 */

function contrastRatio(c1, c2) {
  const [, y1] = Object(_color_transformSRGB__WEBPACK_IMPORTED_MODULE_2__[/* toXYZ */ "b"])(RGBtoInt(c1));
  const [, y2] = Object(_color_transformSRGB__WEBPACK_IMPORTED_MODULE_2__[/* toXYZ */ "b"])(RGBtoInt(c2));
  return (Math.max(y1, y2) + 0.05) / (Math.min(y1, y2) + 0.05);
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fromXYZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return toXYZ; });
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
 // For converting XYZ to sRGB

const srgbForwardMatrix = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.2040, 1.0570]]; // Forward gamma adjust

const srgbForwardTransform = C => C <= 0.0031308 ? C * 12.92 : 1.055 * C ** (1 / 2.4) - 0.055; // For converting sRGB to XYZ


const srgbReverseMatrix = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]]; // Reverse gamma adjust

const srgbReverseTransform = C => C <= 0.04045 ? C / 12.92 : ((C + 0.055) / 1.055) ** 2.4;

function fromXYZ(xyz) {
  const rgb = Array(3);
  const transform = srgbForwardTransform;
  const matrix = srgbForwardMatrix; // Matrix transform, then gamma adjustment

  for (let i = 0; i < 3; ++i) {
    rgb[i] = Math.round(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__[/* clamp */ "f"])(transform(matrix[i][0] * xyz[0] + matrix[i][1] * xyz[1] + matrix[i][2] * xyz[2])) * 255);
  } // Rescale back to [0, 255]


  return (rgb[0] << 16) + (rgb[1] << 8) + (rgb[2] << 0);
}
function toXYZ(rgb) {
  const xyz = [0, 0, 0];
  const transform = srgbReverseTransform;
  const matrix = srgbReverseMatrix; // Rescale from [0, 255] to [0, 1] then adjust sRGB gamma to linear RGB

  const r = transform((rgb >> 16 & 0xff) / 255);
  const g = transform((rgb >> 8 & 0xff) / 255);
  const b = transform((rgb >> 0 & 0xff) / 255); // Matrix color space transform

  for (let i = 0; i < 3; ++i) {
    xyz[i] = matrix[i][0] * r + matrix[i][1] * g + matrix[i][2] * b;
  }

  return xyz;
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return functionalThemeClasses; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* @vue/component */

const Themeable = vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend().extend({
  name: 'themeable',

  provide() {
    return {
      theme: this.themeableProvide
    };
  },

  inject: {
    theme: {
      default: {
        isDark: false
      }
    }
  },
  props: {
    dark: {
      type: Boolean,
      default: null
    },
    light: {
      type: Boolean,
      default: null
    }
  },

  data() {
    return {
      themeableProvide: {
        isDark: false
      }
    };
  },

  computed: {
    appIsDark() {
      return this.$vuetify.theme.dark || false;
    },

    isDark() {
      if (this.dark === true) {
        // explicitly dark
        return true;
      } else if (this.light === true) {
        // explicitly light
        return false;
      } else {
        // inherit from parent, or default false if there is none
        return this.theme.isDark;
      }
    },

    themeClasses() {
      return {
        'theme--dark': this.isDark,
        'theme--light': !this.isDark
      };
    },

    /** Used by menus and dialogs, inherits from v-app instead of the parent */
    rootIsDark() {
      if (this.dark === true) {
        // explicitly dark
        return true;
      } else if (this.light === true) {
        // explicitly light
        return false;
      } else {
        // inherit from v-app
        return this.appIsDark;
      }
    },

    rootThemeClasses() {
      return {
        'theme--dark': this.rootIsDark,
        'theme--light': !this.rootIsDark
      };
    }

  },
  watch: {
    isDark: {
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.themeableProvide.isDark = this.isDark;
        }
      },

      immediate: true
    }
  }
});
/* harmony default export */ __webpack_exports__["a"] = (Themeable);
function functionalThemeClasses(context) {
  const vm = { ...context.props,
    ...context.injections
  };
  const isDark = Themeable.options.computed.isDark.call(vm);
  return Themeable.options.computed.themeClasses.call({
    isDark
  });
}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@socket.io/component-emitter");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.byteLength = exports.installTimerFunctions = exports.pick = void 0;
const globalThis_js_1 = __webpack_require__(47);
function pick(obj, ...attr) {
    return attr.reduce((acc, k) => {
        if (obj.hasOwnProperty(k)) {
            acc[k] = obj[k];
        }
        return acc;
    }, {});
}
exports.pick = pick;
// Keep a reference to the real timeout functions so they can be used when overridden
const NATIVE_SET_TIMEOUT = setTimeout;
const NATIVE_CLEAR_TIMEOUT = clearTimeout;
function installTimerFunctions(obj, opts) {
    if (opts.useNativeTimers) {
        obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThis_js_1.globalThisShim);
        obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThis_js_1.globalThisShim);
    }
    else {
        obj.setTimeoutFn = setTimeout.bind(globalThis_js_1.globalThisShim);
        obj.clearTimeoutFn = clearTimeout.bind(globalThis_js_1.globalThisShim);
    }
}
exports.installTimerFunctions = installTimerFunctions;
// base64 encoded buffers are about 33% bigger (https://en.wikipedia.org/wiki/Base64)
const BASE64_OVERHEAD = 1.33;
// we could also have used `new Blob([obj]).size`, but it isn't supported in IE9
function byteLength(obj) {
    if (typeof obj === "string") {
        return utf8Length(obj);
    }
    // arraybuffer or blob
    return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
exports.byteLength = byteLength;
function utf8Length(str) {
    let c = 0, length = 0;
    for (let i = 0, l = str.length; i < l; i++) {
        c = str.charCodeAt(i);
        if (c < 0x80) {
            length += 1;
        }
        else if (c < 0x800) {
            length += 2;
        }
        else if (c < 0xd800 || c >= 0xe000) {
            length += 3;
        }
        else {
            i++;
            length += 4;
        }
    }
    return length;
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ framework_Vuetify; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/install.js


function install(Vue, args = {}) {
  if (install.installed) return;
  install.installed = true;

  if (external_vue_default.a !== Vue) {
    Object(console["b" /* consoleError */])(`Multiple instances of Vue detected
See https://github.com/vuetifyjs/vuetify/issues/4068

If you're seeing "$attrs is readonly", it's caused by this`);
  }

  const components = args.components || {};
  const directives = args.directives || {};

  for (const name in directives) {
    const directive = directives[name];
    Vue.directive(name, directive);
  }

  (function registerComponents(components) {
    if (components) {
      for (const key in components) {
        const component = components[key];

        if (component && !registerComponents(component.$_vuetify_subcomponents)) {
          Vue.component(key, component);
        }
      }

      return true;
    }

    return false;
  })(components); // Used to avoid multiple mixins being setup
  // when in dev mode and hot module reload
  // https://github.com/vuejs/vue/issues/5089#issuecomment-284260111


  if (Vue.$_vuetify_installed) return;
  Vue.$_vuetify_installed = true;
  Vue.mixin({
    beforeCreate() {
      const options = this.$options;

      if (options.vuetify) {
        options.vuetify.init(this, this.$ssrContext);
        this.$vuetify = Vue.observable(options.vuetify.framework);
      } else {
        this.$vuetify = options.parent && options.parent.$vuetify || this;
      }
    },

    beforeMount() {
      // @ts-ignore
      if (this.$options.vuetify && this.$el && this.$el.hasAttribute('data-server-rendered')) {
        // @ts-ignore
        this.$vuetify.isHydrating = true; // @ts-ignore

        this.$vuetify.breakpoint.update(true);
      }
    },

    mounted() {
      // @ts-ignore
      if (this.$options.vuetify && this.$vuetify.isHydrating) {
        // @ts-ignore
        this.$vuetify.isHydrating = false; // @ts-ignore

        this.$vuetify.breakpoint.update();
      }
    }

  });
}
// EXTERNAL MODULE: ./node_modules/vuetify/src/styles/main.sass
var main = __webpack_require__(73);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/locale/en.js
/* harmony default export */ var en = ({
  badge: 'Badge',
  close: 'Close',
  dataIterator: {
    noResultsText: 'No matching records found',
    loadingText: 'Loading items...'
  },
  dataTable: {
    itemsPerPageText: 'Rows per page:',
    ariaLabel: {
      sortDescending: 'Sorted descending.',
      sortAscending: 'Sorted ascending.',
      sortNone: 'Not sorted.',
      activateNone: 'Activate to remove sorting.',
      activateDescending: 'Activate to sort descending.',
      activateAscending: 'Activate to sort ascending.'
    },
    sortBy: 'Sort by'
  },
  dataFooter: {
    itemsPerPageText: 'Items per page:',
    itemsPerPageAll: 'All',
    nextPage: 'Next page',
    prevPage: 'Previous page',
    firstPage: 'First page',
    lastPage: 'Last page',
    pageText: '{0}-{1} of {2}'
  },
  datePicker: {
    itemsSelected: '{0} selected',
    nextMonthAriaLabel: 'Next month',
    nextYearAriaLabel: 'Next year',
    prevMonthAriaLabel: 'Previous month',
    prevYearAriaLabel: 'Previous year'
  },
  noDataText: 'No data available',
  carousel: {
    prev: 'Previous visual',
    next: 'Next visual',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}'
    }
  },
  calendar: {
    moreEvents: '{0} more'
  },
  fileInput: {
    counter: '{0} files',
    counterSize: '{0} files ({1} in total)'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Pagination Navigation',
      next: 'Next page',
      previous: 'Previous page',
      page: 'Goto Page {0}',
      currentPage: 'Current Page, Page {0}'
    }
  },
  rating: {
    ariaLabel: {
      icon: 'Rating {0} of {1}'
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vuetify/lib/presets/default/index.js
// Styles
 // Locale


const default_preset = {
  breakpoint: {
    // TODO: update to MD2 spec in v3 - 1280
    mobileBreakpoint: 1264,
    scrollBarWidth: 16,
    thresholds: {
      xs: 600,
      sm: 960,
      md: 1280,
      lg: 1920
    }
  },
  icons: {
    // TODO: remove v3
    iconfont: 'mdi',
    values: {}
  },
  lang: {
    current: 'en',
    locales: {
      en: en
    },
    // Default translator exists in lang service
    t: undefined
  },
  rtl: false,
  theme: {
    dark: false,
    default: 'light',
    disable: false,
    options: {
      cspNonce: undefined,
      customProperties: undefined,
      minifyTheme: undefined,
      themeCache: undefined,
      variations: true
    },
    themes: {
      light: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00'
      },
      dark: {
        primary: '#2196F3',
        secondary: '#424242',
        accent: '#FF4081',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00'
      }
    }
  }
};
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/services/service/index.js
var service = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/presets/index.js
// Preset
 // Utilities




class presets_Presets extends service["a" /* Service */] {
  constructor(parentPreset, parent) {
    super(); // The default preset

    const defaultPreset = Object(helpers["z" /* mergeDeep */])({}, default_preset); // The user provided preset

    const {
      userPreset
    } = parent; // The user provided global preset

    const {
      preset: globalPreset = {},
      ...preset
    } = userPreset;

    if (globalPreset.preset != null) {
      Object(console["c" /* consoleWarn */])('Global presets do not support the **preset** option, it can be safely omitted');
    }

    parent.preset = Object(helpers["z" /* mergeDeep */])(Object(helpers["z" /* mergeDeep */])(defaultPreset, globalPreset), preset);
  }

}
presets_Presets.property = 'presets';
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/application/index.js
// Extensions

class application_Application extends service["a" /* Service */] {
  constructor() {
    super(...arguments);
    this.bar = 0;
    this.top = 0;
    this.left = 0;
    this.insetFooter = 0;
    this.right = 0;
    this.bottom = 0;
    this.footer = 0;
    this.application = {
      bar: {},
      top: {},
      left: {},
      insetFooter: {},
      right: {},
      bottom: {},
      footer: {}
    };
  }

  register(uid, location, size) {
    this.application[location][uid] = size;
    this.update(location);
  }

  unregister(uid, location) {
    if (this.application[location][uid] == null) return;
    delete this.application[location][uid];
    this.update(location);
  }

  update(location) {
    this[location] = Object.values(this.application[location]).reduce((acc, cur) => acc + cur, 0);
  }

}
application_Application.property = 'application';
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/breakpoint/index.js
// Extensions

class breakpoint_Breakpoint extends service["a" /* Service */] {
  constructor(preset) {
    super(); // Public

    this.xs = false;
    this.sm = false;
    this.md = false;
    this.lg = false;
    this.xl = false;
    this.xsOnly = false;
    this.smOnly = false;
    this.smAndDown = false;
    this.smAndUp = false;
    this.mdOnly = false;
    this.mdAndDown = false;
    this.mdAndUp = false;
    this.lgOnly = false;
    this.lgAndDown = false;
    this.lgAndUp = false;
    this.xlOnly = false; // Value is xs to match v2.x functionality

    this.name = 'xs';
    this.height = 0;
    this.width = 0; // TODO: Add functionality to detect this dynamically in v3
    // Value is true to match v2.x functionality

    this.mobile = true;
    this.resizeTimeout = 0;
    const {
      mobileBreakpoint,
      scrollBarWidth,
      thresholds
    } = preset[breakpoint_Breakpoint.property];
    this.mobileBreakpoint = mobileBreakpoint;
    this.scrollBarWidth = scrollBarWidth;
    this.thresholds = thresholds;
  }

  init() {
    this.update();
    /* istanbul ignore if */

    if (typeof window === 'undefined') return;
    window.addEventListener('resize', this.onResize.bind(this), {
      passive: true
    });
  }
  /* eslint-disable-next-line max-statements */


  update(ssr = false) {
    const height = ssr ? 0 : this.getClientHeight();
    const width = ssr ? 0 : this.getClientWidth();
    const xs = width < this.thresholds.xs;
    const sm = width < this.thresholds.sm && !xs;
    const md = width < this.thresholds.md - this.scrollBarWidth && !(sm || xs);
    const lg = width < this.thresholds.lg - this.scrollBarWidth && !(md || sm || xs);
    const xl = width >= this.thresholds.lg - this.scrollBarWidth;
    this.height = height;
    this.width = width;
    this.xs = xs;
    this.sm = sm;
    this.md = md;
    this.lg = lg;
    this.xl = xl;
    this.xsOnly = xs;
    this.smOnly = sm;
    this.smAndDown = (xs || sm) && !(md || lg || xl);
    this.smAndUp = !xs && (sm || md || lg || xl);
    this.mdOnly = md;
    this.mdAndDown = (xs || sm || md) && !(lg || xl);
    this.mdAndUp = !(xs || sm) && (md || lg || xl);
    this.lgOnly = lg;
    this.lgAndDown = (xs || sm || md || lg) && !xl;
    this.lgAndUp = !(xs || sm || md) && (lg || xl);
    this.xlOnly = xl;

    switch (true) {
      case xs:
        this.name = 'xs';
        break;

      case sm:
        this.name = 'sm';
        break;

      case md:
        this.name = 'md';
        break;

      case lg:
        this.name = 'lg';
        break;

      default:
        this.name = 'xl';
        break;
    }

    if (typeof this.mobileBreakpoint === 'number') {
      this.mobile = width < parseInt(this.mobileBreakpoint, 10);
      return;
    }

    const breakpoints = {
      xs: 0,
      sm: 1,
      md: 2,
      lg: 3,
      xl: 4
    };
    const current = breakpoints[this.name];
    const max = breakpoints[this.mobileBreakpoint];
    this.mobile = current <= max;
  }

  onResize() {
    clearTimeout(this.resizeTimeout); // Added debounce to match what
    // v-resize used to do but was
    // removed due to a memory leak
    // https://github.com/vuetifyjs/vuetify/pull/2997

    this.resizeTimeout = window.setTimeout(this.update.bind(this), 200);
  } // Cross-browser support as described in:
  // https://stackoverflow.com/questions/1248081


  getClientWidth() {
    /* istanbul ignore if */
    if (typeof document === 'undefined') return 0; // SSR

    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }

  getClientHeight() {
    /* istanbul ignore if */
    if (typeof document === 'undefined') return 0; // SSR

    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }

}
breakpoint_Breakpoint.property = 'breakpoint';
// EXTERNAL MODULE: ./node_modules/vuetify/lib/services/goto/index.js + 2 modules
var services_goto = __webpack_require__(137);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/mdi-svg.js
const icons = {
  complete: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z',
  cancel: 'M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z',
  close: 'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z',
  delete: 'M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z',
  clear: 'M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z',
  success: 'M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z',
  info: 'M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2ZM13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z',
  warning: 'M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z',
  error: 'M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z',
  prev: 'M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z',
  next: 'M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z',
  checkboxOn: 'M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z',
  checkboxOff: 'M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z',
  checkboxIndeterminate: 'M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z',
  delimiter: 'M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z',
  sort: 'M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z',
  expand: 'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z',
  menu: 'M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z',
  subgroup: 'M7,10L12,15L17,10H7Z',
  dropdown: 'M7,10L12,15L17,10H7Z',
  radioOn: 'M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z',
  radioOff: 'M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z',
  edit: 'M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z',
  ratingEmpty: 'M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z',
  ratingFull: 'M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z',
  ratingHalf: 'M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z',
  loading: 'M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12',
  first: 'M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z',
  last: 'M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z',
  unfold: 'M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z',
  file: 'M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z',
  plus: 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z',
  minus: 'M19,13H5V11H19V13Z'
};
/* harmony default export */ var mdi_svg = (icons);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/md.js
const md_icons = {
  complete: 'check',
  cancel: 'cancel',
  close: 'close',
  delete: 'cancel',
  clear: 'clear',
  success: 'check_circle',
  info: 'info',
  warning: 'priority_high',
  error: 'warning',
  prev: 'chevron_left',
  next: 'chevron_right',
  checkboxOn: 'check_box',
  checkboxOff: 'check_box_outline_blank',
  checkboxIndeterminate: 'indeterminate_check_box',
  delimiter: 'fiber_manual_record',
  sort: 'arrow_upward',
  expand: 'keyboard_arrow_down',
  menu: 'menu',
  subgroup: 'arrow_drop_down',
  dropdown: 'arrow_drop_down',
  radioOn: 'radio_button_checked',
  radioOff: 'radio_button_unchecked',
  edit: 'edit',
  ratingEmpty: 'star_border',
  ratingFull: 'star',
  ratingHalf: 'star_half',
  loading: 'cached',
  first: 'first_page',
  last: 'last_page',
  unfold: 'unfold_more',
  file: 'attach_file',
  plus: 'add',
  minus: 'remove'
};
/* harmony default export */ var md = (md_icons);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/mdi.js
const mdi_icons = {
  complete: 'mdi-check',
  cancel: 'mdi-close-circle',
  close: 'mdi-close',
  delete: 'mdi-close-circle',
  clear: 'mdi-close',
  success: 'mdi-check-circle',
  info: 'mdi-information',
  warning: 'mdi-exclamation',
  error: 'mdi-alert',
  prev: 'mdi-chevron-left',
  next: 'mdi-chevron-right',
  checkboxOn: 'mdi-checkbox-marked',
  checkboxOff: 'mdi-checkbox-blank-outline',
  checkboxIndeterminate: 'mdi-minus-box',
  delimiter: 'mdi-circle',
  sort: 'mdi-arrow-up',
  expand: 'mdi-chevron-down',
  menu: 'mdi-menu',
  subgroup: 'mdi-menu-down',
  dropdown: 'mdi-menu-down',
  radioOn: 'mdi-radiobox-marked',
  radioOff: 'mdi-radiobox-blank',
  edit: 'mdi-pencil',
  ratingEmpty: 'mdi-star-outline',
  ratingFull: 'mdi-star',
  ratingHalf: 'mdi-star-half-full',
  loading: 'mdi-cached',
  first: 'mdi-page-first',
  last: 'mdi-page-last',
  unfold: 'mdi-unfold-more-horizontal',
  file: 'mdi-paperclip',
  plus: 'mdi-plus',
  minus: 'mdi-minus'
};
/* harmony default export */ var mdi = (mdi_icons);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/fa.js
const fa_icons = {
  complete: 'fas fa-check',
  cancel: 'fas fa-times-circle',
  close: 'fas fa-times',
  delete: 'fas fa-times-circle',
  clear: 'fas fa-times-circle',
  success: 'fas fa-check-circle',
  info: 'fas fa-info-circle',
  warning: 'fas fa-exclamation',
  error: 'fas fa-exclamation-triangle',
  prev: 'fas fa-chevron-left',
  next: 'fas fa-chevron-right',
  checkboxOn: 'fas fa-check-square',
  checkboxOff: 'far fa-square',
  checkboxIndeterminate: 'fas fa-minus-square',
  delimiter: 'fas fa-circle',
  sort: 'fas fa-sort-up',
  expand: 'fas fa-chevron-down',
  menu: 'fas fa-bars',
  subgroup: 'fas fa-caret-down',
  dropdown: 'fas fa-caret-down',
  radioOn: 'far fa-dot-circle',
  radioOff: 'far fa-circle',
  edit: 'fas fa-edit',
  ratingEmpty: 'far fa-star',
  ratingFull: 'fas fa-star',
  ratingHalf: 'fas fa-star-half',
  loading: 'fas fa-sync',
  first: 'fas fa-step-backward',
  last: 'fas fa-step-forward',
  unfold: 'fas fa-arrows-alt-v',
  file: 'fas fa-paperclip',
  plus: 'fas fa-plus',
  minus: 'fas fa-minus'
};
/* harmony default export */ var fa = (fa_icons);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/fa4.js
const fa4_icons = {
  complete: 'fa fa-check',
  cancel: 'fa fa-times-circle',
  close: 'fa fa-times',
  delete: 'fa fa-times-circle',
  clear: 'fa fa-times-circle',
  success: 'fa fa-check-circle',
  info: 'fa fa-info-circle',
  warning: 'fa fa-exclamation',
  error: 'fa fa-exclamation-triangle',
  prev: 'fa fa-chevron-left',
  next: 'fa fa-chevron-right',
  checkboxOn: 'fa fa-check-square',
  checkboxOff: 'fa fa-square-o',
  checkboxIndeterminate: 'fa fa-minus-square',
  delimiter: 'fa fa-circle',
  sort: 'fa fa-sort-up',
  expand: 'fa fa-chevron-down',
  menu: 'fa fa-bars',
  subgroup: 'fa fa-caret-down',
  dropdown: 'fa fa-caret-down',
  radioOn: 'fa fa-dot-circle-o',
  radioOff: 'fa fa-circle-o',
  edit: 'fa fa-pencil',
  ratingEmpty: 'fa fa-star-o',
  ratingFull: 'fa fa-star',
  ratingHalf: 'fa fa-star-half-o',
  loading: 'fa fa-refresh',
  first: 'fa fa-step-backward',
  last: 'fa fa-step-forward',
  unfold: 'fa fa-angle-double-down',
  file: 'fa fa-paperclip',
  plus: 'fa fa-plus',
  minus: 'fa fa-minus'
};
/* harmony default export */ var fa4 = (fa4_icons);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/fa-svg.js

function convertToComponentDeclarations(component, iconSet) {
  const result = {};

  for (const key in iconSet) {
    result[key] = {
      component,
      props: {
        icon: iconSet[key].split(' fa-')
      }
    };
  }

  return result;
}
/* harmony default export */ var fa_svg = (convertToComponentDeclarations('font-awesome-icon', fa));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/index.js






/* harmony default export */ var presets = (Object.freeze({
  mdiSvg: mdi_svg,
  md: md,
  mdi: mdi,
  fa: fa,
  fa4: fa4,
  faSvg: fa_svg
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/index.js
// Extensions
 // Utilities

 // Presets


class icons_Icons extends service["a" /* Service */] {
  constructor(preset) {
    super();
    const {
      iconfont,
      values,
      component
    } = preset[icons_Icons.property];
    this.component = component;
    this.iconfont = iconfont;
    this.values = Object(helpers["z" /* mergeDeep */])(presets[iconfont], values);
  }

}
icons_Icons.property = 'icons';
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/lang/index.js
// Extensions
 // Utilities



const LANG_PREFIX = '$vuetify.';
const fallback = Symbol('Lang fallback');

function getTranslation(locale, key, usingDefault = false, defaultLocale) {
  const shortKey = key.replace(LANG_PREFIX, '');
  let translation = Object(helpers["p" /* getObjectValueByPath */])(locale, shortKey, fallback);

  if (translation === fallback) {
    if (usingDefault) {
      Object(console["b" /* consoleError */])(`Translation key "${shortKey}" not found in fallback`);
      translation = key;
    } else {
      Object(console["c" /* consoleWarn */])(`Translation key "${shortKey}" not found, falling back to default`);
      translation = getTranslation(defaultLocale, key, true, defaultLocale);
    }
  }

  return translation;
}

class lang_Lang extends service["a" /* Service */] {
  constructor(preset) {
    super();
    this.defaultLocale = 'en';
    const {
      current,
      locales,
      t
    } = preset[lang_Lang.property];
    this.current = current;
    this.locales = locales;
    this.translator = t || this.defaultTranslator;
  }

  currentLocale(key) {
    const translation = this.locales[this.current];
    const defaultLocale = this.locales[this.defaultLocale];
    return getTranslation(translation, key, false, defaultLocale);
  }

  t(key, ...params) {
    if (!key.startsWith(LANG_PREFIX)) return this.replace(key, params);
    return this.translator(key, ...params);
  }

  defaultTranslator(key, ...params) {
    return this.replace(this.currentLocale(key), params);
  }

  replace(str, params) {
    return str.replace(/\{(\d+)\}/g, (match, index) => {
      /* istanbul ignore next */
      return String(params[+index]);
    });
  }

}
lang_Lang.property = 'lang';
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/colorUtils.js
var colorUtils = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/color/transformSRGB.js
var transformSRGB = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/util/color/transformCIELAB.js
const delta = 0.20689655172413793; // 6÷29

const cielabForwardTransform = t => t > delta ** 3 ? Math.cbrt(t) : t / (3 * delta ** 2) + 4 / 29;

const cielabReverseTransform = t => t > delta ? t ** 3 : 3 * delta ** 2 * (t - 4 / 29);

function fromXYZ(xyz) {
  const transform = cielabForwardTransform;
  const transformedY = transform(xyz[1]);
  return [116 * transformedY - 16, 500 * (transform(xyz[0] / 0.95047) - transformedY), 200 * (transformedY - transform(xyz[2] / 1.08883))];
}
function toXYZ(lab) {
  const transform = cielabReverseTransform;
  const Ln = (lab[0] + 16) / 116;
  return [transform(Ln + lab[1] / 500) * 0.95047, transform(Ln), transform(Ln - lab[2] / 200) * 1.08883];
}
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/theme/utils.js




function parse(theme, isItem = false, variations = true) {
  const {
    anchor,
    ...variant
  } = theme;
  const colors = Object.keys(variant);
  const parsedTheme = {};

  for (let i = 0; i < colors.length; ++i) {
    const name = colors[i];
    const value = theme[name];
    if (value == null) continue;

    if (!variations) {
      parsedTheme[name] = {
        base: Object(colorUtils["c" /* intToHex */])(Object(colorUtils["b" /* colorToInt */])(value))
      };
    } else if (isItem) {
      /* istanbul ignore else */
      if (name === 'base' || name.startsWith('lighten') || name.startsWith('darken')) {
        parsedTheme[name] = Object(colorUtils["a" /* colorToHex */])(value);
      }
    } else if (typeof value === 'object') {
      parsedTheme[name] = parse(value, true, variations);
    } else {
      parsedTheme[name] = genVariations(name, Object(colorUtils["b" /* colorToInt */])(value));
    }
  }

  if (!isItem) {
    parsedTheme.anchor = anchor || parsedTheme.base || parsedTheme.primary.base;
  }

  return parsedTheme;
}
/**
 * Generate the CSS for a base color (.primary)
 */

const genBaseColor = (name, value) => {
  return `
.v-application .${name} {
  background-color: ${value} !important;
  border-color: ${value} !important;
}
.v-application .${name}--text {
  color: ${value} !important;
  caret-color: ${value} !important;
}`;
};
/**
 * Generate the CSS for a variant color (.primary.darken-2)
 */


const genVariantColor = (name, variant, value) => {
  const [type, n] = variant.split(/(\d)/, 2);
  return `
.v-application .${name}.${type}-${n} {
  background-color: ${value} !important;
  border-color: ${value} !important;
}
.v-application .${name}--text.text--${type}-${n} {
  color: ${value} !important;
  caret-color: ${value} !important;
}`;
};

const genColorVariableName = (name, variant = 'base') => `--v-${name}-${variant}`;

const genColorVariable = (name, variant = 'base') => `var(${genColorVariableName(name, variant)})`;

function genStyles(theme, cssVar = false) {
  const {
    anchor,
    ...variant
  } = theme;
  const colors = Object.keys(variant);
  if (!colors.length) return '';
  let variablesCss = '';
  let css = '';
  const aColor = cssVar ? genColorVariable('anchor') : anchor;
  css += `.v-application a { color: ${aColor}; }`;
  cssVar && (variablesCss += `  ${genColorVariableName('anchor')}: ${anchor};\n`);

  for (let i = 0; i < colors.length; ++i) {
    const name = colors[i];
    const value = theme[name];
    css += genBaseColor(name, cssVar ? genColorVariable(name) : value.base);
    cssVar && (variablesCss += `  ${genColorVariableName(name)}: ${value.base};\n`);
    const variants = Object(helpers["y" /* keys */])(value);

    for (let i = 0; i < variants.length; ++i) {
      const variant = variants[i];
      const variantValue = value[variant];
      if (variant === 'base') continue;
      css += genVariantColor(name, variant, cssVar ? genColorVariable(name, variant) : variantValue);
      cssVar && (variablesCss += `  ${genColorVariableName(name, variant)}: ${variantValue};\n`);
    }
  }

  if (cssVar) {
    variablesCss = `:root {\n${variablesCss}}\n\n`;
  }

  return variablesCss + css;
}
function genVariations(name, value) {
  const values = {
    base: Object(colorUtils["c" /* intToHex */])(value)
  };

  for (let i = 5; i > 0; --i) {
    values[`lighten${i}`] = Object(colorUtils["c" /* intToHex */])(lighten(value, i));
  }

  for (let i = 1; i <= 4; ++i) {
    values[`darken${i}`] = Object(colorUtils["c" /* intToHex */])(darken(value, i));
  }

  return values;
}
function lighten(value, amount) {
  const lab = fromXYZ(transformSRGB["b" /* toXYZ */](value));
  lab[0] = lab[0] + amount * 10;
  return transformSRGB["a" /* fromXYZ */](toXYZ(lab));
}
function darken(value, amount) {
  const lab = fromXYZ(transformSRGB["b" /* toXYZ */](value));
  lab[0] = lab[0] - amount * 10;
  return transformSRGB["a" /* fromXYZ */](toXYZ(lab));
}
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/theme/index.js
/* eslint-disable no-multi-spaces */
// Extensions
 // Utilities


 // Types


class theme_Theme extends service["a" /* Service */] {
  constructor(preset) {
    super();
    this.disabled = false;
    this.isDark = null;
    this.unwatch = null;
    this.vueMeta = null;
    const {
      dark,
      disable,
      options,
      themes
    } = preset[theme_Theme.property];
    this.dark = Boolean(dark);
    this.defaults = this.themes = themes;
    this.options = options;

    if (disable) {
      this.disabled = true;
      return;
    }

    this.themes = {
      dark: this.fillVariant(themes.dark, true),
      light: this.fillVariant(themes.light, false)
    };
  } // When setting css, check for element and apply new values

  /* eslint-disable-next-line accessor-pairs */


  set css(val) {
    if (this.vueMeta) {
      if (this.isVueMeta23) {
        this.applyVueMeta23();
      }

      return;
    }

    this.checkOrCreateStyleElement() && (this.styleEl.innerHTML = val);
  }

  set dark(val) {
    const oldDark = this.isDark;
    this.isDark = val; // Only apply theme after dark
    // has already been set before

    oldDark != null && this.applyTheme();
  }

  get dark() {
    return Boolean(this.isDark);
  } // Apply current theme default
  // only called on client side


  applyTheme() {
    if (this.disabled) return this.clearCss();
    this.css = this.generatedStyles;
  }

  clearCss() {
    this.css = '';
  } // Initialize theme for SSR and SPA
  // Attach to ssrContext head or
  // apply new theme to document


  init(root, ssrContext) {
    if (this.disabled) return;
    /* istanbul ignore else */

    if (root.$meta) {
      this.initVueMeta(root);
    } else if (ssrContext) {
      this.initSSR(ssrContext);
    }

    this.initTheme(root);
  } // Allows for you to set target theme


  setTheme(theme, value) {
    this.themes[theme] = Object.assign(this.themes[theme], value);
    this.applyTheme();
  } // Reset theme defaults


  resetThemes() {
    this.themes.light = Object.assign({}, this.defaults.light);
    this.themes.dark = Object.assign({}, this.defaults.dark);
    this.applyTheme();
  } // Check for existence of style element


  checkOrCreateStyleElement() {
    this.styleEl = document.getElementById('vuetify-theme-stylesheet');
    /* istanbul ignore next */

    if (this.styleEl) return true;
    this.genStyleElement(); // If doesn't have it, create it

    return Boolean(this.styleEl);
  }

  fillVariant(theme = {}, dark) {
    const defaultTheme = this.themes[dark ? 'dark' : 'light'];
    return Object.assign({}, defaultTheme, theme);
  } // Generate the style element
  // if applicable


  genStyleElement() {
    /* istanbul ignore if */
    if (typeof document === 'undefined') return;
    /* istanbul ignore next */

    this.styleEl = document.createElement('style');
    this.styleEl.type = 'text/css';
    this.styleEl.id = 'vuetify-theme-stylesheet';

    if (this.options.cspNonce) {
      this.styleEl.setAttribute('nonce', this.options.cspNonce);
    }

    document.head.appendChild(this.styleEl);
  }

  initVueMeta(root) {
    this.vueMeta = root.$meta();

    if (this.isVueMeta23) {
      // vue-meta needs to apply after mounted()
      root.$nextTick(() => {
        this.applyVueMeta23();
      });
      return;
    }

    const metaKeyName = typeof this.vueMeta.getOptions === 'function' ? this.vueMeta.getOptions().keyName : 'metaInfo';
    const metaInfo = root.$options[metaKeyName] || {};

    root.$options[metaKeyName] = () => {
      metaInfo.style = metaInfo.style || [];
      const vuetifyStylesheet = metaInfo.style.find(s => s.id === 'vuetify-theme-stylesheet');

      if (!vuetifyStylesheet) {
        metaInfo.style.push({
          cssText: this.generatedStyles,
          type: 'text/css',
          id: 'vuetify-theme-stylesheet',
          nonce: (this.options || {}).cspNonce
        });
      } else {
        vuetifyStylesheet.cssText = this.generatedStyles;
      }

      return metaInfo;
    };
  }

  applyVueMeta23() {
    const {
      set
    } = this.vueMeta.addApp('vuetify');
    set({
      style: [{
        cssText: this.generatedStyles,
        type: 'text/css',
        id: 'vuetify-theme-stylesheet',
        nonce: this.options.cspNonce
      }]
    });
  }

  initSSR(ssrContext) {
    // SSR
    const nonce = this.options.cspNonce ? ` nonce="${this.options.cspNonce}"` : '';
    ssrContext.head = ssrContext.head || '';
    ssrContext.head += `<style type="text/css" id="vuetify-theme-stylesheet"${nonce}>${this.generatedStyles}</style>`;
  }

  initTheme(root) {
    // Only watch for reactivity on client side
    if (typeof document === 'undefined') return; // If we get here somehow, ensure
    // existing instance is removed

    if (this.unwatch) {
      this.unwatch();
      this.unwatch = null;
    } // TODO: Update to use RFC if merged
    // https://github.com/vuejs/rfcs/blob/advanced-reactivity-api/active-rfcs/0000-advanced-reactivity-api.md


    root.$once('hook:created', () => {
      const obs = external_vue_default.a.observable({
        themes: this.themes
      });
      this.unwatch = root.$watch(() => obs.themes, () => this.applyTheme(), {
        deep: true
      });
    });
    this.applyTheme();
  }

  get currentTheme() {
    const target = this.dark ? 'dark' : 'light';
    return this.themes[target];
  }

  get generatedStyles() {
    const theme = this.parsedTheme;
    /* istanbul ignore next */

    const options = this.options || {};
    let css;

    if (options.themeCache != null) {
      css = options.themeCache.get(theme);
      /* istanbul ignore if */

      if (css != null) return css;
    }

    css = genStyles(theme, options.customProperties);

    if (options.minifyTheme != null) {
      css = options.minifyTheme(css);
    }

    if (options.themeCache != null) {
      options.themeCache.set(theme, css);
    }

    return css;
  }

  get parsedTheme() {
    return parse(this.currentTheme || {}, undefined, Object(helpers["o" /* getNestedValue */])(this.options, ['variations'], true));
  } // Is using v2.3 of vue-meta
  // https://github.com/nuxt/vue-meta/releases/tag/v2.3.0


  get isVueMeta23() {
    return typeof this.vueMeta.addApp === 'function';
  }

}
theme_Theme.property = 'theme';
// CONCATENATED MODULE: ./node_modules/vuetify/lib/framework.js
 // Services


class framework_Vuetify {
  constructor(userPreset = {}) {
    this.framework = {
      isHydrating: false
    };
    this.installed = [];
    this.preset = {};
    this.userPreset = {};
    this.userPreset = userPreset;
    this.use(presets_Presets);
    this.use(application_Application);
    this.use(breakpoint_Breakpoint);
    this.use(services_goto["a" /* Goto */]);
    this.use(icons_Icons);
    this.use(lang_Lang);
    this.use(theme_Theme);
  } // Called on the new vuetify instance
  // bootstrap in install beforeCreate
  // Exposes ssrContext if available


  init(root, ssrContext) {
    this.installed.forEach(property => {
      const service = this.framework[property];
      service.framework = this.framework;
      service.init(root, ssrContext);
    }); // rtl is not installed and
    // will never be called by
    // the init process

    this.framework.rtl = Boolean(this.preset.rtl);
  } // Instantiate a VuetifyService


  use(Service) {
    const property = Service.property;
    if (this.installed.includes(property)) return; // TODO maybe a specific type for arg 2?

    this.framework[property] = new Service(this.preset, this);
    this.installed.push(property);
  }

}
framework_Vuetify.install = install;
framework_Vuetify.installed = false;
framework_Vuetify.version = "2.6.7";
framework_Vuetify.config = {
  silent: false
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("tiny-emitter/instance.js");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
// Helpers
 // Types


/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_1___default.a.extend({
  name: 'measurable',
  props: {
    height: [Number, String],
    maxHeight: [Number, String],
    maxWidth: [Number, String],
    minHeight: [Number, String],
    minWidth: [Number, String],
    width: [Number, String]
  },
  computed: {
    measurableStyles() {
      const styles = {};
      const height = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__[/* convertToUnit */ "h"])(this.height);
      const minHeight = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__[/* convertToUnit */ "h"])(this.minHeight);
      const minWidth = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__[/* convertToUnit */ "h"])(this.minWidth);
      const maxHeight = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__[/* convertToUnit */ "h"])(this.maxHeight);
      const maxWidth = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__[/* convertToUnit */ "h"])(this.maxWidth);
      const width = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__[/* convertToUnit */ "h"])(this.width);
      if (height) styles.height = height;
      if (minHeight) styles.minHeight = minHeight;
      if (minWidth) styles.minWidth = minWidth;
      if (maxHeight) styles.maxHeight = maxHeight;
      if (maxWidth) styles.maxWidth = maxWidth;
      if (width) styles.width = width;
      return styles;
    }

  }
}));

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.decodePayload = exports.decodePacket = exports.encodePayload = exports.encodePacket = exports.protocol = void 0;
const encodePacket_js_1 = __webpack_require__(90);
exports.encodePacket = encodePacket_js_1.default;
const decodePacket_js_1 = __webpack_require__(91);
exports.decodePacket = decodePacket_js_1.default;
const SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
const encodePayload = (packets, callback) => {
    // some packets may be added to the array while encoding, so the initial length must be saved
    const length = packets.length;
    const encodedPackets = new Array(length);
    let count = 0;
    packets.forEach((packet, i) => {
        // force base64 encoding for binary packets
        (0, encodePacket_js_1.default)(packet, false, encodedPacket => {
            encodedPackets[i] = encodedPacket;
            if (++count === length) {
                callback(encodedPackets.join(SEPARATOR));
            }
        });
    });
};
exports.encodePayload = encodePayload;
const decodePayload = (encodedPayload, binaryType) => {
    const encodedPackets = encodedPayload.split(SEPARATOR);
    const packets = [];
    for (let i = 0; i < encodedPackets.length; i++) {
        const decodedPacket = (0, decodePacket_js_1.default)(encodedPackets[i], binaryType);
        packets.push(decodedPacket);
        if (decodedPacket.type === "error") {
            break;
        }
    }
    return packets;
};
exports.decodePayload = decodePayload;
exports.protocol = 4;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VSheet_VSheet_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _src_components_VSheet_VSheet_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSheet_VSheet_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);
/* harmony import */ var _mixins_elevatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);
/* harmony import */ var _mixins_measurable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _mixins_roundable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
// Styles
 // Mixins






 // Helpers


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_elevatable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _mixins_measurable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _mixins_roundable__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]).extend({
  name: 'v-sheet',
  props: {
    outlined: Boolean,
    shaped: Boolean,
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    classes() {
      return {
        'v-sheet': true,
        'v-sheet--outlined': this.outlined,
        'v-sheet--shaped': this.shaped,
        ...this.themeClasses,
        ...this.elevationClasses,
        ...this.roundedClasses
      };
    },

    styles() {
      return this.measurableStyles;
    }

  },

  render(h) {
    const data = {
      class: this.classes,
      style: this.styles,
      on: this.listeners$
    };
    return h(this.tag, this.setBackgroundColor(this.color, data), this.$slots.default);
  }

}));

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
const engine_io_parser_1 = __webpack_require__(20);
const component_emitter_1 = __webpack_require__(13);
const util_js_1 = __webpack_require__(15);
const debug_1 = __importDefault(__webpack_require__(8)); // debug()
const debug = (0, debug_1.default)("engine.io-client:transport"); // debug()
class TransportError extends Error {
    constructor(reason, description, context) {
        super(reason);
        this.description = description;
        this.context = context;
        this.type = "TransportError";
    }
}
class Transport extends component_emitter_1.Emitter {
    /**
     * Transport abstract constructor.
     *
     * @param {Object} options.
     * @api private
     */
    constructor(opts) {
        super();
        this.writable = false;
        (0, util_js_1.installTimerFunctions)(this, opts);
        this.opts = opts;
        this.query = opts.query;
        this.readyState = "";
        this.socket = opts.socket;
    }
    /**
     * Emits an error.
     *
     * @param {String} reason
     * @param description
     * @param context - the error context
     * @return {Transport} for chaining
     * @api protected
     */
    onError(reason, description, context) {
        super.emitReserved("error", new TransportError(reason, description, context));
        return this;
    }
    /**
     * Opens the transport.
     *
     * @api public
     */
    open() {
        if ("closed" === this.readyState || "" === this.readyState) {
            this.readyState = "opening";
            this.doOpen();
        }
        return this;
    }
    /**
     * Closes the transport.
     *
     * @api public
     */
    close() {
        if ("opening" === this.readyState || "open" === this.readyState) {
            this.doClose();
            this.onClose();
        }
        return this;
    }
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     * @api public
     */
    send(packets) {
        if ("open" === this.readyState) {
            this.write(packets);
        }
        else {
            // this might happen if the transport was silently closed in the beforeunload event handler
            debug("transport is not open, discarding packets");
        }
    }
    /**
     * Called upon open
     *
     * @api protected
     */
    onOpen() {
        this.readyState = "open";
        this.writable = true;
        super.emitReserved("open");
    }
    /**
     * Called with data.
     *
     * @param {String} data
     * @api protected
     */
    onData(data) {
        const packet = (0, engine_io_parser_1.decodePacket)(data, this.socket.binaryType);
        this.onPacket(packet);
    }
    /**
     * Called with a decoded packet.
     *
     * @api protected
     */
    onPacket(packet) {
        super.emitReserved("packet", packet);
    }
    /**
     * Called upon close.
     *
     * @api protected
     */
    onClose(details) {
        this.readyState = "closed";
        super.emitReserved("close", details);
    }
}
exports.Transport = Transport;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// imported from https://github.com/galkn/querystring
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = exports.encode = void 0;
function encode(obj) {
    let str = '';
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            if (str.length)
                str += '&';
            str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
        }
    }
    return str;
}
exports.encode = encode;
/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */
function decode(qs) {
    let qry = {};
    let pairs = qs.split('&');
    for (let i = 0, l = pairs.length; i < l; i++) {
        let pair = pairs[i].split('=');
        qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return qry;
}
exports.decode = decode;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Decoder = exports.Encoder = exports.PacketType = exports.protocol = void 0;
const component_emitter_1 = __webpack_require__(13);
const binary_js_1 = __webpack_require__(98);
const is_binary_js_1 = __webpack_require__(51);
const debug_1 = __webpack_require__(8); // debug()
const debug = debug_1.default("socket.io-parser"); // debug()
/**
 * Protocol version.
 *
 * @public
 */
exports.protocol = 5;
var PacketType;
(function (PacketType) {
    PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
    PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType[PacketType["EVENT"] = 2] = "EVENT";
    PacketType[PacketType["ACK"] = 3] = "ACK";
    PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType = exports.PacketType || (exports.PacketType = {}));
/**
 * A socket.io Encoder instance
 */
class Encoder {
    /**
     * Encoder constructor
     *
     * @param {function} replacer - custom replacer to pass down to JSON.parse
     */
    constructor(replacer) {
        this.replacer = replacer;
    }
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */
    encode(obj) {
        debug("encoding packet %j", obj);
        if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
            if (is_binary_js_1.hasBinary(obj)) {
                obj.type =
                    obj.type === PacketType.EVENT
                        ? PacketType.BINARY_EVENT
                        : PacketType.BINARY_ACK;
                return this.encodeAsBinary(obj);
            }
        }
        return [this.encodeAsString(obj)];
    }
    /**
     * Encode packet as string.
     */
    encodeAsString(obj) {
        // first is type
        let str = "" + obj.type;
        // attachments if we have them
        if (obj.type === PacketType.BINARY_EVENT ||
            obj.type === PacketType.BINARY_ACK) {
            str += obj.attachments + "-";
        }
        // if we have a namespace other than `/`
        // we append it followed by a comma `,`
        if (obj.nsp && "/" !== obj.nsp) {
            str += obj.nsp + ",";
        }
        // immediately followed by the id
        if (null != obj.id) {
            str += obj.id;
        }
        // json data
        if (null != obj.data) {
            str += JSON.stringify(obj.data, this.replacer);
        }
        debug("encoded %j as %s", obj, str);
        return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */
    encodeAsBinary(obj) {
        const deconstruction = binary_js_1.deconstructPacket(obj);
        const pack = this.encodeAsString(deconstruction.packet);
        const buffers = deconstruction.buffers;
        buffers.unshift(pack); // add packet info to beginning of data list
        return buffers; // write all the buffers
    }
}
exports.Encoder = Encoder;
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 */
class Decoder extends component_emitter_1.Emitter {
    /**
     * Decoder constructor
     *
     * @param {function} reviver - custom reviver to pass down to JSON.stringify
     */
    constructor(reviver) {
        super();
        this.reviver = reviver;
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */
    add(obj) {
        let packet;
        if (typeof obj === "string") {
            if (this.reconstructor) {
                throw new Error("got plaintext data when reconstructing a packet");
            }
            packet = this.decodeString(obj);
            if (packet.type === PacketType.BINARY_EVENT ||
                packet.type === PacketType.BINARY_ACK) {
                // binary packet's json
                this.reconstructor = new BinaryReconstructor(packet);
                // no attachments, labeled binary but no binary data to follow
                if (packet.attachments === 0) {
                    super.emitReserved("decoded", packet);
                }
            }
            else {
                // non-binary full packet
                super.emitReserved("decoded", packet);
            }
        }
        else if (is_binary_js_1.isBinary(obj) || obj.base64) {
            // raw binary data
            if (!this.reconstructor) {
                throw new Error("got binary data when not reconstructing a packet");
            }
            else {
                packet = this.reconstructor.takeBinaryData(obj);
                if (packet) {
                    // received final buffer
                    this.reconstructor = null;
                    super.emitReserved("decoded", packet);
                }
            }
        }
        else {
            throw new Error("Unknown type: " + obj);
        }
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */
    decodeString(str) {
        let i = 0;
        // look up type
        const p = {
            type: Number(str.charAt(0)),
        };
        if (PacketType[p.type] === undefined) {
            throw new Error("unknown packet type " + p.type);
        }
        // look up attachments if type binary
        if (p.type === PacketType.BINARY_EVENT ||
            p.type === PacketType.BINARY_ACK) {
            const start = i + 1;
            while (str.charAt(++i) !== "-" && i != str.length) { }
            const buf = str.substring(start, i);
            if (buf != Number(buf) || str.charAt(i) !== "-") {
                throw new Error("Illegal attachments");
            }
            p.attachments = Number(buf);
        }
        // look up namespace (if any)
        if ("/" === str.charAt(i + 1)) {
            const start = i + 1;
            while (++i) {
                const c = str.charAt(i);
                if ("," === c)
                    break;
                if (i === str.length)
                    break;
            }
            p.nsp = str.substring(start, i);
        }
        else {
            p.nsp = "/";
        }
        // look up id
        const next = str.charAt(i + 1);
        if ("" !== next && Number(next) == next) {
            const start = i + 1;
            while (++i) {
                const c = str.charAt(i);
                if (null == c || Number(c) != c) {
                    --i;
                    break;
                }
                if (i === str.length)
                    break;
            }
            p.id = Number(str.substring(start, i + 1));
        }
        // look up json data
        if (str.charAt(++i)) {
            const payload = this.tryParse(str.substr(i));
            if (Decoder.isPayloadValid(p.type, payload)) {
                p.data = payload;
            }
            else {
                throw new Error("invalid payload");
            }
        }
        debug("decoded %s as %j", str, p);
        return p;
    }
    tryParse(str) {
        try {
            return JSON.parse(str, this.reviver);
        }
        catch (e) {
            return false;
        }
    }
    static isPayloadValid(type, payload) {
        switch (type) {
            case PacketType.CONNECT:
                return typeof payload === "object";
            case PacketType.DISCONNECT:
                return payload === undefined;
            case PacketType.CONNECT_ERROR:
                return typeof payload === "string" || typeof payload === "object";
            case PacketType.EVENT:
            case PacketType.BINARY_EVENT:
                return Array.isArray(payload) && payload.length > 0;
            case PacketType.ACK:
            case PacketType.BINARY_ACK:
                return Array.isArray(payload);
        }
    }
    /**
     * Deallocates a parser's resources
     */
    destroy() {
        if (this.reconstructor) {
            this.reconstructor.finishedReconstruction();
        }
    }
}
exports.Decoder = Decoder;
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */
class BinaryReconstructor {
    constructor(packet) {
        this.packet = packet;
        this.buffers = [];
        this.reconPack = packet;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */
    takeBinaryData(binData) {
        this.buffers.push(binData);
        if (this.buffers.length === this.reconPack.attachments) {
            // done with buffer list
            const packet = binary_js_1.reconstructPacket(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return packet;
        }
        return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */
    finishedReconstruction() {
        this.reconPack = null;
        this.buffers = [];
    }
}


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.connect = exports.io = exports.Socket = exports.Manager = exports.protocol = void 0;
const url_js_1 = __webpack_require__(87);
const manager_js_1 = __webpack_require__(97);
Object.defineProperty(exports, "Manager", { enumerable: true, get: function () { return manager_js_1.Manager; } });
const socket_js_1 = __webpack_require__(50);
Object.defineProperty(exports, "Socket", { enumerable: true, get: function () { return socket_js_1.Socket; } });
const debug_1 = __importDefault(__webpack_require__(8)); // debug()
const debug = debug_1.default("socket.io-client"); // debug()
/**
 * Managers cache.
 */
const cache = {};
function lookup(uri, opts) {
    if (typeof uri === "object") {
        opts = uri;
        uri = undefined;
    }
    opts = opts || {};
    const parsed = url_js_1.url(uri, opts.path || "/socket.io");
    const source = parsed.source;
    const id = parsed.id;
    const path = parsed.path;
    const sameNamespace = cache[id] && path in cache[id]["nsps"];
    const newConnection = opts.forceNew ||
        opts["force new connection"] ||
        false === opts.multiplex ||
        sameNamespace;
    let io;
    if (newConnection) {
        debug("ignoring socket cache for %s", source);
        io = new manager_js_1.Manager(source, opts);
    }
    else {
        if (!cache[id]) {
            debug("new io instance for %s", source);
            cache[id] = new manager_js_1.Manager(source, opts);
        }
        io = cache[id];
    }
    if (parsed.query && !opts.query) {
        opts.query = parsed.queryKey;
    }
    return io.socket(parsed.path, opts);
}
exports.io = lookup;
exports.connect = lookup;
exports.default = lookup;
// so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
// namespace (e.g. `io.connect(...)`), for backward compatibility
Object.assign(lookup, {
    Manager: manager_js_1.Manager,
    Socket: socket_js_1.Socket,
    io: lookup,
    connect: lookup,
});
/**
 * Protocol version.
 *
 * @public
 */
var socket_io_parser_1 = __webpack_require__(25);
Object.defineProperty(exports, "protocol", { enumerable: true, get: function () { return socket_io_parser_1.protocol; } });

module.exports = lookup;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _util_colorUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);



/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'colorable',
  props: {
    color: String
  },
  methods: {
    setBackgroundColor(color, data = {}) {
      if (typeof data.style === 'string') {
        // istanbul ignore next
        Object(_util_console__WEBPACK_IMPORTED_MODULE_1__[/* consoleError */ "b"])('style must be an object', this); // istanbul ignore next

        return data;
      }

      if (typeof data.class === 'string') {
        // istanbul ignore next
        Object(_util_console__WEBPACK_IMPORTED_MODULE_1__[/* consoleError */ "b"])('class must be an object', this); // istanbul ignore next

        return data;
      }

      if (Object(_util_colorUtils__WEBPACK_IMPORTED_MODULE_2__[/* isCssColor */ "d"])(color)) {
        data.style = { ...data.style,
          'background-color': `${color}`,
          'border-color': `${color}`
        };
      } else if (color) {
        data.class = { ...data.class,
          [color]: true
        };
      }

      return data;
    },

    setTextColor(color, data = {}) {
      if (typeof data.style === 'string') {
        // istanbul ignore next
        Object(_util_console__WEBPACK_IMPORTED_MODULE_1__[/* consoleError */ "b"])('style must be an object', this); // istanbul ignore next

        return data;
      }

      if (typeof data.class === 'string') {
        // istanbul ignore next
        Object(_util_console__WEBPACK_IMPORTED_MODULE_1__[/* consoleError */ "b"])('class must be an object', this); // istanbul ignore next

        return data;
      }

      if (Object(_util_colorUtils__WEBPACK_IMPORTED_MODULE_2__[/* isCssColor */ "d"])(color)) {
        data.style = { ...data.style,
          color: `${color}`,
          'caret-color': `${color}`
        };
      } else if (color) {
        const [colorName, colorModifier] = color.toString().trim().split(' ', 2);
        data.class = { ...data.class,
          [colorName + '--text']: true
        };

        if (colorModifier) {
          data.class['text--' + colorModifier] = true;
        }
      }

      return data;
    }

  }
}));

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mergeData; });
/* unused harmony export mergeStyles */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mergeClasses; });
/* unused harmony export mergeListeners */
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

const pattern = {
  styleList: /;(?![^(]*\))/g,
  styleProp: /:(.*)/
};

function parseStyle(style) {
  const styleMap = {};

  for (const s of style.split(pattern.styleList)) {
    let [key, val] = s.split(pattern.styleProp);
    key = key.trim();

    if (!key) {
      continue;
    } // May be undefined if the `key: value` pair is incomplete.


    if (typeof val === 'string') {
      val = val.trim();
    }

    styleMap[Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* camelize */ "c"])(key)] = val;
  }

  return styleMap;
}

function mergeData() {
  const mergeTarget = {};
  let i = arguments.length;
  let prop; // Allow for variadic argument length.

  while (i--) {
    // Iterate through the data properties and execute merge strategies
    // Object.keys eliminates need for hasOwnProperty call
    for (prop of Object.keys(arguments[i])) {
      switch (prop) {
        // Array merge strategy (array concatenation)
        case 'class':
        case 'directives':
          if (arguments[i][prop]) {
            mergeTarget[prop] = mergeClasses(mergeTarget[prop], arguments[i][prop]);
          }

          break;

        case 'style':
          if (arguments[i][prop]) {
            mergeTarget[prop] = mergeStyles(mergeTarget[prop], arguments[i][prop]);
          }

          break;
        // Space delimited string concatenation strategy

        case 'staticClass':
          if (!arguments[i][prop]) {
            break;
          }

          if (mergeTarget[prop] === undefined) {
            mergeTarget[prop] = '';
          }

          if (mergeTarget[prop]) {
            // Not an empty string, so concatenate
            mergeTarget[prop] += ' ';
          }

          mergeTarget[prop] += arguments[i][prop].trim();
          break;
        // Object, the properties of which to merge via array merge strategy (array concatenation).
        // Callback merge strategy merges callbacks to the beginning of the array,
        // so that the last defined callback will be invoked first.
        // This is done since to mimic how Object.assign merging
        // uses the last given value to assign.

        case 'on':
        case 'nativeOn':
          if (arguments[i][prop]) {
            mergeTarget[prop] = mergeListeners(mergeTarget[prop], arguments[i][prop]);
          }

          break;
        // Object merge strategy

        case 'attrs':
        case 'props':
        case 'domProps':
        case 'scopedSlots':
        case 'staticStyle':
        case 'hook':
        case 'transition':
          if (!arguments[i][prop]) {
            break;
          }

          if (!mergeTarget[prop]) {
            mergeTarget[prop] = {};
          }

          mergeTarget[prop] = { ...arguments[i][prop],
            ...mergeTarget[prop]
          };
          break;
        // Reassignment strategy (no merge)

        default:
          // slot, key, ref, tag, show, keepAlive
          if (!mergeTarget[prop]) {
            mergeTarget[prop] = arguments[i][prop];
          }

      }
    }
  }

  return mergeTarget;
}
function mergeStyles(target, source) {
  if (!target) return source;
  if (!source) return target;
  target = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* wrapInArray */ "F"])(typeof target === 'string' ? parseStyle(target) : target);
  return target.concat(typeof source === 'string' ? parseStyle(source) : source);
}
function mergeClasses(target, source) {
  if (!source) return target;
  if (!target) return source;
  return target ? Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* wrapInArray */ "F"])(target).concat(source) : source;
}
function mergeListeners(...args) {
  if (!args[0]) return args[1];
  if (!args[1]) return args[0];
  const dest = {};

  for (let i = 2; i--;) {
    const arg = args[i];

    for (const event in arg) {
      if (!arg[event]) continue;

      if (dest[event]) {
        // Merge current listeners before (because we are iterating backwards).
        // Note that neither "target" or "source" must be altered.
        dest[event] = [].concat(arg[event], dest[event]);
      } else {
        // Straight assign.
        dest[event] = arg[event];
      }
    }
  }

  return dest;
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Intersect */
function inserted(el, binding, vnode) {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
  const modifiers = binding.modifiers || {};
  const value = binding.value;
  const {
    handler,
    options
  } = typeof value === 'object' ? value : {
    handler: value,
    options: {}
  };
  const observer = new IntersectionObserver((entries = [], observer) => {
    var _el$_observe;

    const _observe = (_el$_observe = el._observe) == null ? void 0 : _el$_observe[vnode.context._uid];

    if (!_observe) return; // Just in case, should never fire

    const isIntersecting = entries.some(entry => entry.isIntersecting); // If is not quiet or has already been
    // initted, invoke the user callback

    if (handler && (!modifiers.quiet || _observe.init) && (!modifiers.once || isIntersecting || _observe.init)) {
      handler(entries, observer, isIntersecting);
    }

    if (isIntersecting && modifiers.once) unbind(el, binding, vnode);else _observe.init = true;
  }, options);
  el._observe = Object(el._observe);
  el._observe[vnode.context._uid] = {
    init: false,
    observer
  };
  observer.observe(el);
}

function unbind(el, binding, vnode) {
  var _el$_observe2;

  const observe = (_el$_observe2 = el._observe) == null ? void 0 : _el$_observe2[vnode.context._uid];
  if (!observe) return;
  observe.observer.unobserve(el);
  delete el._observe[vnode.context._uid];
}

const Intersect = {
  inserted,
  unbind
};
/* harmony default export */ __webpack_exports__["a"] = (Intersect);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return factory; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


const availableProps = {
  absolute: Boolean,
  bottom: Boolean,
  fixed: Boolean,
  left: Boolean,
  right: Boolean,
  top: Boolean
};
function factory(selected = []) {
  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    name: 'positionable',
    props: selected.length ? Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* filterObjectOnKeys */ "n"])(availableProps, selected) : availableProps
  });
}
/* harmony default export */ __webpack_exports__["a"] = (factory()); // Add a `*` before the second `/`

/* Tests /
let single = factory(['top']).extend({
  created () {
    this.top
    this.bottom
    this.absolute
  }
})

let some = factory(['top', 'bottom']).extend({
  created () {
    this.top
    this.bottom
    this.absolute
  }
})

let all = factory().extend({
  created () {
    this.top
    this.bottom
    this.absolute
    this.foobar
  }
})
/**/

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return factory; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

function factory(prop = 'value', event = 'input') {
  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    name: 'toggleable',
    model: {
      prop,
      event
    },
    props: {
      [prop]: {
        required: false
      }
    },

    data() {
      return {
        isActive: !!this[prop]
      };
    },

    watch: {
      [prop](val) {
        this.isActive = !!val;
      },

      isActive(val) {
        !!val !== this[prop] && this.$emit(event, val);
      }

    }
  });
}
/* eslint-disable-next-line @typescript-eslint/no-redeclare */

const Toggleable = factory();
/* harmony default export */ __webpack_exports__["a"] = (Toggleable);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/**
 * This mixin provides `attrs$` and `listeners$` to work around
 * vue bug https://github.com/vuejs/vue/issues/10115
 */

function makeWatcher(property) {
  return function (val, oldVal) {
    for (const attr in oldVal) {
      if (!Object.prototype.hasOwnProperty.call(val, attr)) {
        this.$delete(this.$data[property], attr);
      }
    }

    for (const attr in val) {
      this.$set(this.$data[property], attr, val[attr]);
    }
  };
}

/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  data: () => ({
    attrs$: {},
    listeners$: {}
  }),

  created() {
    // Work around unwanted re-renders: https://github.com/vuejs/vue/issues/10115
    // Make sure to use `attrs$` instead of `$attrs` (confusing right?)
    this.$watch('$attrs', makeWatcher('attrs$'), {
      immediate: true
    });
    this.$watch('$listeners', makeWatcher('listeners$'), {
      immediate: true
    });
  }

}));

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'elevatable',
  props: {
    elevation: [Number, String]
  },
  computed: {
    computedElevation() {
      return this.elevation;
    },

    elevationClasses() {
      const elevation = this.computedElevation;
      if (elevation == null) return {};
      if (isNaN(parseInt(elevation))) return {};
      return {
        [`elevation-${this.elevation}`]: true
      };
    }

  }
}));

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'roundable',
  props: {
    rounded: [Boolean, String],
    tile: Boolean
  },
  computed: {
    roundedClasses() {
      const composite = [];
      const rounded = typeof this.rounded === 'string' ? String(this.rounded) : this.rounded === true;

      if (this.tile) {
        composite.push('rounded-0');
      } else if (typeof rounded === 'string') {
        const values = rounded.split(' ');

        for (const value of values) {
          composite.push(`rounded-${value}`);
        }
      } else if (rounded) {
        composite.push('rounded');
      }

      return composite.length > 0 ? {
        [composite.join(' ')]: true
      } : {};
    }

  }
}));

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1ac3e3e8", content, true, context)
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6439d180", content, true, context)
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("f814aab4", content, true, context)
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pattern.9e6e2f0.png";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("3419ecf4", content, true, context)
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = exports.installTimerFunctions = exports.transports = exports.Transport = exports.protocol = exports.Socket = void 0;
const socket_js_1 = __webpack_require__(88);
Object.defineProperty(exports, "Socket", { enumerable: true, get: function () { return socket_js_1.Socket; } });
exports.protocol = socket_js_1.Socket.protocol;
var transport_js_1 = __webpack_require__(23);
Object.defineProperty(exports, "Transport", { enumerable: true, get: function () { return transport_js_1.Transport; } });
var index_js_1 = __webpack_require__(45);
Object.defineProperty(exports, "transports", { enumerable: true, get: function () { return index_js_1.transports; } });
var util_js_1 = __webpack_require__(15);
Object.defineProperty(exports, "installTimerFunctions", { enumerable: true, get: function () { return util_js_1.installTimerFunctions; } });
var parseuri_js_1 = __webpack_require__(49);
Object.defineProperty(exports, "parse", { enumerable: true, get: function () { return parseuri_js_1.parse; } });


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.transports = void 0;
const polling_js_1 = __webpack_require__(89);
const websocket_js_1 = __webpack_require__(94);
exports.transports = {
    websocket: websocket_js_1.WS,
    polling: polling_js_1.Polling
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ERROR_PACKET = exports.PACKET_TYPES_REVERSE = exports.PACKET_TYPES = void 0;
const PACKET_TYPES = Object.create(null); // no Map = no polyfill
exports.PACKET_TYPES = PACKET_TYPES;
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
const PACKET_TYPES_REVERSE = Object.create(null);
exports.PACKET_TYPES_REVERSE = PACKET_TYPES_REVERSE;
Object.keys(PACKET_TYPES).forEach(key => {
    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
const ERROR_PACKET = { type: "error", data: "parser error" };
exports.ERROR_PACKET = ERROR_PACKET;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.globalThisShim = void 0;
exports.globalThisShim = global;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// imported from https://github.com/unshiftio/yeast

Object.defineProperty(exports, "__esModule", { value: true });
exports.yeast = exports.decode = exports.encode = void 0;
const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''), length = 64, map = {};
let seed = 0, i = 0, prev;
/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */
function encode(num) {
    let encoded = '';
    do {
        encoded = alphabet[num % length] + encoded;
        num = Math.floor(num / length);
    } while (num > 0);
    return encoded;
}
exports.encode = encode;
/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */
function decode(str) {
    let decoded = 0;
    for (i = 0; i < str.length; i++) {
        decoded = decoded * length + map[str.charAt(i)];
    }
    return decoded;
}
exports.decode = decode;
/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */
function yeast() {
    const now = encode(+new Date());
    if (now !== prev)
        return seed = 0, prev = now;
    return now + '.' + encode(seed++);
}
exports.yeast = yeast;
//
// Map each character to its index.
//
for (; i < length; i++)
    map[alphabet[i]] = i;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
// imported from https://github.com/galkn/parseuri
/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */
const re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
const parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];
function parse(str) {
    const src = str, b = str.indexOf('['), e = str.indexOf(']');
    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }
    let m = re.exec(str || ''), uri = {}, i = 14;
    while (i--) {
        uri[parts[i]] = m[i] || '';
    }
    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }
    uri.pathNames = pathNames(uri, uri['path']);
    uri.queryKey = queryKey(uri, uri['query']);
    return uri;
}
exports.parse = parse;
function pathNames(obj, path) {
    const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
    if (path.substr(0, 1) == '/' || path.length === 0) {
        names.splice(0, 1);
    }
    if (path.substr(path.length - 1, 1) == '/') {
        names.splice(names.length - 1, 1);
    }
    return names;
}
function queryKey(uri, query) {
    const data = {};
    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
        if ($1) {
            data[$1] = $2;
        }
    });
    return data;
}


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Socket = void 0;
const socket_io_parser_1 = __webpack_require__(25);
const on_js_1 = __webpack_require__(52);
const component_emitter_1 = __webpack_require__(13);
const debug_1 = __importDefault(__webpack_require__(8)); // debug()
const debug = debug_1.default("socket.io-client:socket"); // debug()
/**
 * Internal events.
 * These events can't be emitted by the user.
 */
const RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1,
});
class Socket extends component_emitter_1.Emitter {
    /**
     * `Socket` constructor.
     *
     * @public
     */
    constructor(io, nsp, opts) {
        super();
        this.connected = false;
        this.receiveBuffer = [];
        this.sendBuffer = [];
        this.ids = 0;
        this.acks = {};
        this.flags = {};
        this.io = io;
        this.nsp = nsp;
        if (opts && opts.auth) {
            this.auth = opts.auth;
        }
        if (this.io._autoConnect)
            this.open();
    }
    /**
     * Whether the socket is currently disconnected
     */
    get disconnected() {
        return !this.connected;
    }
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */
    subEvents() {
        if (this.subs)
            return;
        const io = this.io;
        this.subs = [
            on_js_1.on(io, "open", this.onopen.bind(this)),
            on_js_1.on(io, "packet", this.onpacket.bind(this)),
            on_js_1.on(io, "error", this.onerror.bind(this)),
            on_js_1.on(io, "close", this.onclose.bind(this)),
        ];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects
     */
    get active() {
        return !!this.subs;
    }
    /**
     * "Opens" the socket.
     *
     * @public
     */
    connect() {
        if (this.connected)
            return this;
        this.subEvents();
        if (!this.io["_reconnecting"])
            this.io.open(); // ensure open
        if ("open" === this.io._readyState)
            this.onopen();
        return this;
    }
    /**
     * Alias for connect()
     */
    open() {
        return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * @return self
     * @public
     */
    send(...args) {
        args.unshift("message");
        this.emit.apply(this, args);
        return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @return self
     * @public
     */
    emit(ev, ...args) {
        if (RESERVED_EVENTS.hasOwnProperty(ev)) {
            throw new Error('"' + ev + '" is a reserved event name');
        }
        args.unshift(ev);
        const packet = {
            type: socket_io_parser_1.PacketType.EVENT,
            data: args,
        };
        packet.options = {};
        packet.options.compress = this.flags.compress !== false;
        // event ack callback
        if ("function" === typeof args[args.length - 1]) {
            const id = this.ids++;
            debug("emitting packet with ack id %d", id);
            const ack = args.pop();
            this._registerAckCallback(id, ack);
            packet.id = id;
        }
        const isTransportWritable = this.io.engine &&
            this.io.engine.transport &&
            this.io.engine.transport.writable;
        const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
        if (discardPacket) {
            debug("discard packet as the transport is not currently writable");
        }
        else if (this.connected) {
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
        }
        else {
            this.sendBuffer.push(packet);
        }
        this.flags = {};
        return this;
    }
    /**
     * @private
     */
    _registerAckCallback(id, ack) {
        const timeout = this.flags.timeout;
        if (timeout === undefined) {
            this.acks[id] = ack;
            return;
        }
        // @ts-ignore
        const timer = this.io.setTimeoutFn(() => {
            delete this.acks[id];
            for (let i = 0; i < this.sendBuffer.length; i++) {
                if (this.sendBuffer[i].id === id) {
                    debug("removing packet with ack id %d from the buffer", id);
                    this.sendBuffer.splice(i, 1);
                }
            }
            debug("event with ack id %d has timed out after %d ms", id, timeout);
            ack.call(this, new Error("operation has timed out"));
        }, timeout);
        this.acks[id] = (...args) => {
            // @ts-ignore
            this.io.clearTimeoutFn(timer);
            ack.apply(this, [null, ...args]);
        };
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */
    packet(packet) {
        packet.nsp = this.nsp;
        this.io._packet(packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */
    onopen() {
        debug("transport is open - connecting");
        if (typeof this.auth == "function") {
            this.auth((data) => {
                this.packet({ type: socket_io_parser_1.PacketType.CONNECT, data });
            });
        }
        else {
            this.packet({ type: socket_io_parser_1.PacketType.CONNECT, data: this.auth });
        }
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */
    onerror(err) {
        if (!this.connected) {
            this.emitReserved("connect_error", err);
        }
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @param description
     * @private
     */
    onclose(reason, description) {
        debug("close (%s)", reason);
        this.connected = false;
        delete this.id;
        this.emitReserved("disconnect", reason, description);
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */
    onpacket(packet) {
        const sameNamespace = packet.nsp === this.nsp;
        if (!sameNamespace)
            return;
        switch (packet.type) {
            case socket_io_parser_1.PacketType.CONNECT:
                if (packet.data && packet.data.sid) {
                    const id = packet.data.sid;
                    this.onconnect(id);
                }
                else {
                    this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                }
                break;
            case socket_io_parser_1.PacketType.EVENT:
            case socket_io_parser_1.PacketType.BINARY_EVENT:
                this.onevent(packet);
                break;
            case socket_io_parser_1.PacketType.ACK:
            case socket_io_parser_1.PacketType.BINARY_ACK:
                this.onack(packet);
                break;
            case socket_io_parser_1.PacketType.DISCONNECT:
                this.ondisconnect();
                break;
            case socket_io_parser_1.PacketType.CONNECT_ERROR:
                this.destroy();
                const err = new Error(packet.data.message);
                // @ts-ignore
                err.data = packet.data.data;
                this.emitReserved("connect_error", err);
                break;
        }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */
    onevent(packet) {
        const args = packet.data || [];
        debug("emitting event %j", args);
        if (null != packet.id) {
            debug("attaching ack callback to event");
            args.push(this.ack(packet.id));
        }
        if (this.connected) {
            this.emitEvent(args);
        }
        else {
            this.receiveBuffer.push(Object.freeze(args));
        }
    }
    emitEvent(args) {
        if (this._anyListeners && this._anyListeners.length) {
            const listeners = this._anyListeners.slice();
            for (const listener of listeners) {
                listener.apply(this, args);
            }
        }
        super.emit.apply(this, args);
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */
    ack(id) {
        const self = this;
        let sent = false;
        return function (...args) {
            // prevent double callbacks
            if (sent)
                return;
            sent = true;
            debug("sending ack %j", args);
            self.packet({
                type: socket_io_parser_1.PacketType.ACK,
                id: id,
                data: args,
            });
        };
    }
    /**
     * Called upon a server acknowlegement.
     *
     * @param packet
     * @private
     */
    onack(packet) {
        const ack = this.acks[packet.id];
        if ("function" === typeof ack) {
            debug("calling ack %s with %j", packet.id, packet.data);
            ack.apply(this, packet.data);
            delete this.acks[packet.id];
        }
        else {
            debug("bad ack %s", packet.id);
        }
    }
    /**
     * Called upon server connect.
     *
     * @private
     */
    onconnect(id) {
        debug("socket connected with id %s", id);
        this.id = id;
        this.connected = true;
        this.emitBuffered();
        this.emitReserved("connect");
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */
    emitBuffered() {
        this.receiveBuffer.forEach((args) => this.emitEvent(args));
        this.receiveBuffer = [];
        this.sendBuffer.forEach((packet) => {
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
        });
        this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */
    ondisconnect() {
        debug("server disconnect (%s)", this.nsp);
        this.destroy();
        this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */
    destroy() {
        if (this.subs) {
            // clean subscriptions to avoid reconnections
            this.subs.forEach((subDestroy) => subDestroy());
            this.subs = undefined;
        }
        this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually.
     *
     * @return self
     * @public
     */
    disconnect() {
        if (this.connected) {
            debug("performing disconnect (%s)", this.nsp);
            this.packet({ type: socket_io_parser_1.PacketType.DISCONNECT });
        }
        // remove socket from pool
        this.destroy();
        if (this.connected) {
            // fire events
            this.onclose("io client disconnect");
        }
        return this;
    }
    /**
     * Alias for disconnect()
     *
     * @return self
     * @public
     */
    close() {
        return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     * @public
     */
    compress(compress) {
        this.flags.compress = compress;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @returns self
     * @public
     */
    get volatile() {
        this.flags.volatile = true;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the server:
     *
     * ```
     * socket.timeout(5000).emit("my-event", (err) => {
     *   if (err) {
     *     // the server did not acknowledge the event in the given delay
     *   }
     * });
     * ```
     *
     * @returns self
     * @public
     */
    timeout(timeout) {
        this.flags.timeout = timeout;
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @param listener
     * @public
     */
    onAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @param listener
     * @public
     */
    prependAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @param listener
     * @public
     */
    offAny(listener) {
        if (!this._anyListeners) {
            return this;
        }
        if (listener) {
            const listeners = this._anyListeners;
            for (let i = 0; i < listeners.length; i++) {
                if (listener === listeners[i]) {
                    listeners.splice(i, 1);
                    return this;
                }
            }
        }
        else {
            this._anyListeners = [];
        }
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     *
     * @public
     */
    listenersAny() {
        return this._anyListeners || [];
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @param listener
     *
     * <pre><code>
     *
     * socket.onAnyOutgoing((event, ...args) => {
     *   console.log(event);
     * });
     *
     * </pre></code>
     *
     * @public
     */
    onAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @param listener
     *
     * <pre><code>
     *
     * socket.prependAnyOutgoing((event, ...args) => {
     *   console.log(event);
     * });
     *
     * </pre></code>
     *
     * @public
     */
    prependAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @param listener
     *
     * <pre><code>
     *
     * const handler = (event, ...args) => {
     *   console.log(event);
     * }
     *
     * socket.onAnyOutgoing(handler);
     *
     * // then later
     * socket.offAnyOutgoing(handler);
     *
     * </pre></code>
     *
     * @public
     */
    offAnyOutgoing(listener) {
        if (!this._anyOutgoingListeners) {
            return this;
        }
        if (listener) {
            const listeners = this._anyOutgoingListeners;
            for (let i = 0; i < listeners.length; i++) {
                if (listener === listeners[i]) {
                    listeners.splice(i, 1);
                    return this;
                }
            }
        }
        else {
            this._anyOutgoingListeners = [];
        }
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     *
     * @public
     */
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || [];
    }
    /**
     * Notify the listeners for each packet sent
     *
     * @param packet
     *
     * @private
     */
    notifyOutgoingListeners(packet) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const listeners = this._anyOutgoingListeners.slice();
            for (const listener of listeners) {
                listener.apply(this, packet.data);
            }
        }
    }
}
exports.Socket = Socket;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.hasBinary = exports.isBinary = void 0;
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const isView = (obj) => {
    return typeof ArrayBuffer.isView === "function"
        ? ArrayBuffer.isView(obj)
        : obj.buffer instanceof ArrayBuffer;
};
const toString = Object.prototype.toString;
const withNativeBlob = typeof Blob === "function" ||
    (typeof Blob !== "undefined" &&
        toString.call(Blob) === "[object BlobConstructor]");
const withNativeFile = typeof File === "function" ||
    (typeof File !== "undefined" &&
        toString.call(File) === "[object FileConstructor]");
/**
 * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
 *
 * @private
 */
function isBinary(obj) {
    return ((withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj))) ||
        (withNativeBlob && obj instanceof Blob) ||
        (withNativeFile && obj instanceof File));
}
exports.isBinary = isBinary;
function hasBinary(obj, toJSON) {
    if (!obj || typeof obj !== "object") {
        return false;
    }
    if (Array.isArray(obj)) {
        for (let i = 0, l = obj.length; i < l; i++) {
            if (hasBinary(obj[i])) {
                return true;
            }
        }
        return false;
    }
    if (isBinary(obj)) {
        return true;
    }
    if (obj.toJSON &&
        typeof obj.toJSON === "function" &&
        arguments.length === 1) {
        return hasBinary(obj.toJSON(), true);
    }
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
            return true;
        }
    }
    return false;
}
exports.hasBinary = hasBinary;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.on = void 0;
function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
        obj.off(ev, fn);
    };
}
exports.on = on;


/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("echarts");

/***/ }),
/* 57 */,
/* 58 */,
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(60);
module.exports = __webpack_require__(100);


/***/ }),
/* 60 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("3d49e0e5", content, true)

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-application{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-application .text--primary{color:rgba(0,0,0,.87) !important}.theme--light.v-application .text--secondary{color:rgba(0,0,0,.6) !important}.theme--light.v-application .text--disabled{color:rgba(0,0,0,.38) !important}.theme--dark.v-application{background:#121212;color:#fff}.theme--dark.v-application .text--primary{color:#fff !important}.theme--dark.v-application .text--secondary{color:rgba(255,255,255,.7) !important}.theme--dark.v-application .text--disabled{color:rgba(255,255,255,.5) !important}.v-application{display:flex;position:relative}.v-application a{cursor:pointer}.v-application--is-rtl{direction:rtl}.v-application--wrap{flex:1 1 auto;backface-visibility:hidden;display:flex;flex-direction:column;min-height:100vh;max-width:100%;position:relative}@-moz-document url-prefix(){@media print{.v-application{display:block}.v-application--wrap{display:block}}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_bfedb7fe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_bfedb7fe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_bfedb7fe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_bfedb7fe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_bfedb7fe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\nh1[data-v-bfedb7fe] {\n  font-size: 20px;\n}\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.nuxt-progress {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 2px;\n  width: 0%;\n  opacity: 1;\n  transition: width 0.1s, opacity 0.4s;\n  background-color: black;\n  z-index: 999999;\n}\n.nuxt-progress.nuxt-progress-notransition {\n  transition: none;\n}\n.nuxt-progress-failed {\n  background-color: red;\n}\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("a9b20584", content, true)

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-app-bar.v-toolbar.v-sheet{background-color:#f5f5f5}.theme--dark.v-app-bar.v-toolbar.v-sheet{background-color:#272727}.v-sheet.v-app-bar.v-toolbar{border-radius:0}.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined){box-shadow:0px 2px 4px -1px rgba(0,0,0,.2),0px 4px 5px 0px rgba(0,0,0,.14),0px 1px 10px 0px rgba(0,0,0,.12)}.v-sheet.v-app-bar.v-toolbar.v-sheet--shaped{border-radius:24px 0}.v-app-bar:not([data-booted=true]){transition:none !important}.v-app-bar.v-app-bar--fixed{position:fixed;top:0;z-index:5}.v-app-bar.v-app-bar.v-app-bar--hide-shadow{box-shadow:0px 0px 0px 0px rgba(0,0,0,.2),0px 0px 0px 0px rgba(0,0,0,.14),0px 0px 0px 0px rgba(0,0,0,.12) !important}.v-app-bar--fade-img-on-scroll .v-toolbar__image .v-image__image{transition:.4s opacity cubic-bezier(0.4, 0, 0.2, 1)}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll .v-toolbar__image{will-change:opacity}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--collapse-on-scroll .v-toolbar__extension{display:none}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--is-scrolled .v-toolbar__title{padding-top:9px}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--is-scrolled:not(.v-app-bar--bottom) .v-toolbar__title{padding-bottom:9px}.v-app-bar.v-app-bar--shrink-on-scroll .v-toolbar__title{font-size:inherit}.v-app-bar-title__placeholder,.v-app-bar-title__content{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-app-bar-title__content{position:absolute}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("402355ff", content, true)

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-toolbar.v-sheet{background-color:#fff}.theme--dark.v-toolbar.v-sheet{background-color:#272727}.v-sheet.v-toolbar{border-radius:0}.v-sheet.v-toolbar:not(.v-sheet--outlined){box-shadow:0px 2px 4px -1px rgba(0,0,0,.2),0px 4px 5px 0px rgba(0,0,0,.14),0px 1px 10px 0px rgba(0,0,0,.12)}.v-sheet.v-toolbar.v-sheet--shaped{border-radius:24px 0}.v-toolbar{contain:layout;display:block;flex:1 1 auto;max-width:100%;transition:.2s cubic-bezier(0.4, 0, 0.2, 1) transform,.2s cubic-bezier(0.4, 0, 0.2, 1) background-color,.2s cubic-bezier(0.4, 0, 0.2, 1) left,.2s cubic-bezier(0.4, 0, 0.2, 1) right,280ms cubic-bezier(0.4, 0, 0.2, 1) box-shadow,.25s cubic-bezier(0.4, 0, 0.2, 1) max-width,.25s cubic-bezier(0.4, 0, 0.2, 1) width;position:relative;box-shadow:0px 2px 4px -1px rgba(0,0,0,.2),0px 4px 5px 0px rgba(0,0,0,.14),0px 1px 10px 0px rgba(0,0,0,.12)}.v-toolbar .v-input{padding-top:0;margin-top:0}.v-toolbar__content,.v-toolbar__extension{padding:4px 16px}.v-toolbar__content .v-btn.v-btn--icon.v-size--default,.v-toolbar__extension .v-btn.v-btn--icon.v-size--default{height:48px;width:48px}.v-application--is-ltr .v-toolbar__content>.v-btn.v-btn--icon:first-child,.v-application--is-ltr .v-toolbar__extension>.v-btn.v-btn--icon:first-child{margin-left:-12px}.v-application--is-rtl .v-toolbar__content>.v-btn.v-btn--icon:first-child,.v-application--is-rtl .v-toolbar__extension>.v-btn.v-btn--icon:first-child{margin-right:-12px}.v-application--is-ltr .v-toolbar__content>.v-btn.v-btn--icon:first-child+.v-toolbar__title,.v-application--is-ltr .v-toolbar__extension>.v-btn.v-btn--icon:first-child+.v-toolbar__title{padding-left:20px}.v-application--is-rtl .v-toolbar__content>.v-btn.v-btn--icon:first-child+.v-toolbar__title,.v-application--is-rtl .v-toolbar__extension>.v-btn.v-btn--icon:first-child+.v-toolbar__title{padding-right:20px}.v-application--is-ltr .v-toolbar__content>.v-btn.v-btn--icon:last-child,.v-application--is-ltr .v-toolbar__extension>.v-btn.v-btn--icon:last-child{margin-right:-12px}.v-application--is-rtl .v-toolbar__content>.v-btn.v-btn--icon:last-child,.v-application--is-rtl .v-toolbar__extension>.v-btn.v-btn--icon:last-child{margin-left:-12px}.v-toolbar__content>.v-tabs,.v-toolbar__extension>.v-tabs{height:inherit;margin-top:-4px;margin-bottom:-4px}.v-toolbar__content>.v-tabs>.v-slide-group.v-tabs-bar,.v-toolbar__extension>.v-tabs>.v-slide-group.v-tabs-bar{background-color:inherit;height:inherit}.v-toolbar__content>.v-tabs:first-child,.v-toolbar__extension>.v-tabs:first-child{margin-left:-16px}.v-toolbar__content>.v-tabs:last-child,.v-toolbar__extension>.v-tabs:last-child{margin-right:-16px}.v-toolbar__content,.v-toolbar__extension{align-items:center;display:flex;position:relative;z-index:0}.v-toolbar__image{border-radius:inherit;position:absolute;top:0;bottom:0;width:100%;z-index:0;contain:strict}.v-toolbar__image .v-image{border-radius:inherit}.v-toolbar__items{display:flex;height:inherit}.v-toolbar__items>.v-btn{border-radius:0;height:100% !important;max-height:none}.v-toolbar__title{font-size:1.25rem;line-height:1.5;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-toolbar.v-toolbar--absolute{position:absolute;top:0;z-index:1}.v-toolbar.v-toolbar--bottom{top:initial;bottom:0}.v-toolbar.v-toolbar--collapse .v-toolbar__title{white-space:nowrap}.v-toolbar.v-toolbar--collapsed{max-width:112px;overflow:hidden}.v-application--is-ltr .v-toolbar.v-toolbar--collapsed{border-bottom-right-radius:24px}.v-application--is-rtl .v-toolbar.v-toolbar--collapsed{border-bottom-left-radius:24px}.v-toolbar.v-toolbar--collapsed .v-toolbar__title,.v-toolbar.v-toolbar--collapsed .v-toolbar__extension{display:none}.v-toolbar--dense .v-toolbar__content,.v-toolbar--dense .v-toolbar__extension{padding-top:0;padding-bottom:0}.v-toolbar--flat{box-shadow:0px 0px 0px 0px rgba(0,0,0,.2),0px 0px 0px 0px rgba(0,0,0,.14),0px 0px 0px 0px rgba(0,0,0,.12) !important}.v-toolbar--floating{display:inline-flex}.v-toolbar--prominent .v-toolbar__content{align-items:flex-start}.v-toolbar--prominent .v-toolbar__title{font-size:1.5rem;padding-top:6px}.v-toolbar--prominent:not(.v-toolbar--bottom) .v-toolbar__title{align-self:flex-end;padding-bottom:6px;padding-top:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(72);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("63000ea3", content, true)

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-sheet{background-color:#fff;border-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-sheet--outlined{border:thin solid rgba(0,0,0,.12)}.theme--dark.v-sheet{background-color:#1e1e1e;border-color:#1e1e1e;color:#fff}.theme--dark.v-sheet--outlined{border:thin solid rgba(255,255,255,.12)}.v-sheet{border-radius:0}.v-sheet:not(.v-sheet--outlined){box-shadow:0px 0px 0px 0px rgba(0,0,0,.2),0px 0px 0px 0px rgba(0,0,0,.14),0px 0px 0px 0px rgba(0,0,0,.12)}.v-sheet.v-sheet--shaped{border-radius:24px 0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(74);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("2840f874", content, true)

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@keyframes v-shake{59%{margin-left:0}60%,80%{margin-left:2px}70%,90%{margin-left:-2px}}.v-application .black{background-color:#000 !important;border-color:#000 !important}.v-application .black--text{color:#000 !important;caret-color:#000 !important}.v-application .white{background-color:#fff !important;border-color:#fff !important}.v-application .white--text{color:#fff !important;caret-color:#fff !important}.v-application .transparent{background-color:transparent !important;border-color:transparent !important}.v-application .transparent--text{color:transparent !important;caret-color:transparent !important}.v-application .red{background-color:#f44336 !important;border-color:#f44336 !important}.v-application .red--text{color:#f44336 !important;caret-color:#f44336 !important}.v-application .red.lighten-5{background-color:#ffebee !important;border-color:#ffebee !important}.v-application .red--text.text--lighten-5{color:#ffebee !important;caret-color:#ffebee !important}.v-application .red.lighten-4{background-color:#ffcdd2 !important;border-color:#ffcdd2 !important}.v-application .red--text.text--lighten-4{color:#ffcdd2 !important;caret-color:#ffcdd2 !important}.v-application .red.lighten-3{background-color:#ef9a9a !important;border-color:#ef9a9a !important}.v-application .red--text.text--lighten-3{color:#ef9a9a !important;caret-color:#ef9a9a !important}.v-application .red.lighten-2{background-color:#e57373 !important;border-color:#e57373 !important}.v-application .red--text.text--lighten-2{color:#e57373 !important;caret-color:#e57373 !important}.v-application .red.lighten-1{background-color:#ef5350 !important;border-color:#ef5350 !important}.v-application .red--text.text--lighten-1{color:#ef5350 !important;caret-color:#ef5350 !important}.v-application .red.darken-1{background-color:#e53935 !important;border-color:#e53935 !important}.v-application .red--text.text--darken-1{color:#e53935 !important;caret-color:#e53935 !important}.v-application .red.darken-2{background-color:#d32f2f !important;border-color:#d32f2f !important}.v-application .red--text.text--darken-2{color:#d32f2f !important;caret-color:#d32f2f !important}.v-application .red.darken-3{background-color:#c62828 !important;border-color:#c62828 !important}.v-application .red--text.text--darken-3{color:#c62828 !important;caret-color:#c62828 !important}.v-application .red.darken-4{background-color:#b71c1c !important;border-color:#b71c1c !important}.v-application .red--text.text--darken-4{color:#b71c1c !important;caret-color:#b71c1c !important}.v-application .red.accent-1{background-color:#ff8a80 !important;border-color:#ff8a80 !important}.v-application .red--text.text--accent-1{color:#ff8a80 !important;caret-color:#ff8a80 !important}.v-application .red.accent-2{background-color:#ff5252 !important;border-color:#ff5252 !important}.v-application .red--text.text--accent-2{color:#ff5252 !important;caret-color:#ff5252 !important}.v-application .red.accent-3{background-color:#ff1744 !important;border-color:#ff1744 !important}.v-application .red--text.text--accent-3{color:#ff1744 !important;caret-color:#ff1744 !important}.v-application .red.accent-4{background-color:#d50000 !important;border-color:#d50000 !important}.v-application .red--text.text--accent-4{color:#d50000 !important;caret-color:#d50000 !important}.v-application .pink{background-color:#e91e63 !important;border-color:#e91e63 !important}.v-application .pink--text{color:#e91e63 !important;caret-color:#e91e63 !important}.v-application .pink.lighten-5{background-color:#fce4ec !important;border-color:#fce4ec !important}.v-application .pink--text.text--lighten-5{color:#fce4ec !important;caret-color:#fce4ec !important}.v-application .pink.lighten-4{background-color:#f8bbd0 !important;border-color:#f8bbd0 !important}.v-application .pink--text.text--lighten-4{color:#f8bbd0 !important;caret-color:#f8bbd0 !important}.v-application .pink.lighten-3{background-color:#f48fb1 !important;border-color:#f48fb1 !important}.v-application .pink--text.text--lighten-3{color:#f48fb1 !important;caret-color:#f48fb1 !important}.v-application .pink.lighten-2{background-color:#f06292 !important;border-color:#f06292 !important}.v-application .pink--text.text--lighten-2{color:#f06292 !important;caret-color:#f06292 !important}.v-application .pink.lighten-1{background-color:#ec407a !important;border-color:#ec407a !important}.v-application .pink--text.text--lighten-1{color:#ec407a !important;caret-color:#ec407a !important}.v-application .pink.darken-1{background-color:#d81b60 !important;border-color:#d81b60 !important}.v-application .pink--text.text--darken-1{color:#d81b60 !important;caret-color:#d81b60 !important}.v-application .pink.darken-2{background-color:#c2185b !important;border-color:#c2185b !important}.v-application .pink--text.text--darken-2{color:#c2185b !important;caret-color:#c2185b !important}.v-application .pink.darken-3{background-color:#ad1457 !important;border-color:#ad1457 !important}.v-application .pink--text.text--darken-3{color:#ad1457 !important;caret-color:#ad1457 !important}.v-application .pink.darken-4{background-color:#880e4f !important;border-color:#880e4f !important}.v-application .pink--text.text--darken-4{color:#880e4f !important;caret-color:#880e4f !important}.v-application .pink.accent-1{background-color:#ff80ab !important;border-color:#ff80ab !important}.v-application .pink--text.text--accent-1{color:#ff80ab !important;caret-color:#ff80ab !important}.v-application .pink.accent-2{background-color:#ff4081 !important;border-color:#ff4081 !important}.v-application .pink--text.text--accent-2{color:#ff4081 !important;caret-color:#ff4081 !important}.v-application .pink.accent-3{background-color:#f50057 !important;border-color:#f50057 !important}.v-application .pink--text.text--accent-3{color:#f50057 !important;caret-color:#f50057 !important}.v-application .pink.accent-4{background-color:#c51162 !important;border-color:#c51162 !important}.v-application .pink--text.text--accent-4{color:#c51162 !important;caret-color:#c51162 !important}.v-application .purple{background-color:#9c27b0 !important;border-color:#9c27b0 !important}.v-application .purple--text{color:#9c27b0 !important;caret-color:#9c27b0 !important}.v-application .purple.lighten-5{background-color:#f3e5f5 !important;border-color:#f3e5f5 !important}.v-application .purple--text.text--lighten-5{color:#f3e5f5 !important;caret-color:#f3e5f5 !important}.v-application .purple.lighten-4{background-color:#e1bee7 !important;border-color:#e1bee7 !important}.v-application .purple--text.text--lighten-4{color:#e1bee7 !important;caret-color:#e1bee7 !important}.v-application .purple.lighten-3{background-color:#ce93d8 !important;border-color:#ce93d8 !important}.v-application .purple--text.text--lighten-3{color:#ce93d8 !important;caret-color:#ce93d8 !important}.v-application .purple.lighten-2{background-color:#ba68c8 !important;border-color:#ba68c8 !important}.v-application .purple--text.text--lighten-2{color:#ba68c8 !important;caret-color:#ba68c8 !important}.v-application .purple.lighten-1{background-color:#ab47bc !important;border-color:#ab47bc !important}.v-application .purple--text.text--lighten-1{color:#ab47bc !important;caret-color:#ab47bc !important}.v-application .purple.darken-1{background-color:#8e24aa !important;border-color:#8e24aa !important}.v-application .purple--text.text--darken-1{color:#8e24aa !important;caret-color:#8e24aa !important}.v-application .purple.darken-2{background-color:#7b1fa2 !important;border-color:#7b1fa2 !important}.v-application .purple--text.text--darken-2{color:#7b1fa2 !important;caret-color:#7b1fa2 !important}.v-application .purple.darken-3{background-color:#6a1b9a !important;border-color:#6a1b9a !important}.v-application .purple--text.text--darken-3{color:#6a1b9a !important;caret-color:#6a1b9a !important}.v-application .purple.darken-4{background-color:#4a148c !important;border-color:#4a148c !important}.v-application .purple--text.text--darken-4{color:#4a148c !important;caret-color:#4a148c !important}.v-application .purple.accent-1{background-color:#ea80fc !important;border-color:#ea80fc !important}.v-application .purple--text.text--accent-1{color:#ea80fc !important;caret-color:#ea80fc !important}.v-application .purple.accent-2{background-color:#e040fb !important;border-color:#e040fb !important}.v-application .purple--text.text--accent-2{color:#e040fb !important;caret-color:#e040fb !important}.v-application .purple.accent-3{background-color:#d500f9 !important;border-color:#d500f9 !important}.v-application .purple--text.text--accent-3{color:#d500f9 !important;caret-color:#d500f9 !important}.v-application .purple.accent-4{background-color:#a0f !important;border-color:#a0f !important}.v-application .purple--text.text--accent-4{color:#a0f !important;caret-color:#a0f !important}.v-application .deep-purple{background-color:#673ab7 !important;border-color:#673ab7 !important}.v-application .deep-purple--text{color:#673ab7 !important;caret-color:#673ab7 !important}.v-application .deep-purple.lighten-5{background-color:#ede7f6 !important;border-color:#ede7f6 !important}.v-application .deep-purple--text.text--lighten-5{color:#ede7f6 !important;caret-color:#ede7f6 !important}.v-application .deep-purple.lighten-4{background-color:#d1c4e9 !important;border-color:#d1c4e9 !important}.v-application .deep-purple--text.text--lighten-4{color:#d1c4e9 !important;caret-color:#d1c4e9 !important}.v-application .deep-purple.lighten-3{background-color:#b39ddb !important;border-color:#b39ddb !important}.v-application .deep-purple--text.text--lighten-3{color:#b39ddb !important;caret-color:#b39ddb !important}.v-application .deep-purple.lighten-2{background-color:#9575cd !important;border-color:#9575cd !important}.v-application .deep-purple--text.text--lighten-2{color:#9575cd !important;caret-color:#9575cd !important}.v-application .deep-purple.lighten-1{background-color:#7e57c2 !important;border-color:#7e57c2 !important}.v-application .deep-purple--text.text--lighten-1{color:#7e57c2 !important;caret-color:#7e57c2 !important}.v-application .deep-purple.darken-1{background-color:#5e35b1 !important;border-color:#5e35b1 !important}.v-application .deep-purple--text.text--darken-1{color:#5e35b1 !important;caret-color:#5e35b1 !important}.v-application .deep-purple.darken-2{background-color:#512da8 !important;border-color:#512da8 !important}.v-application .deep-purple--text.text--darken-2{color:#512da8 !important;caret-color:#512da8 !important}.v-application .deep-purple.darken-3{background-color:#4527a0 !important;border-color:#4527a0 !important}.v-application .deep-purple--text.text--darken-3{color:#4527a0 !important;caret-color:#4527a0 !important}.v-application .deep-purple.darken-4{background-color:#311b92 !important;border-color:#311b92 !important}.v-application .deep-purple--text.text--darken-4{color:#311b92 !important;caret-color:#311b92 !important}.v-application .deep-purple.accent-1{background-color:#b388ff !important;border-color:#b388ff !important}.v-application .deep-purple--text.text--accent-1{color:#b388ff !important;caret-color:#b388ff !important}.v-application .deep-purple.accent-2{background-color:#7c4dff !important;border-color:#7c4dff !important}.v-application .deep-purple--text.text--accent-2{color:#7c4dff !important;caret-color:#7c4dff !important}.v-application .deep-purple.accent-3{background-color:#651fff !important;border-color:#651fff !important}.v-application .deep-purple--text.text--accent-3{color:#651fff !important;caret-color:#651fff !important}.v-application .deep-purple.accent-4{background-color:#6200ea !important;border-color:#6200ea !important}.v-application .deep-purple--text.text--accent-4{color:#6200ea !important;caret-color:#6200ea !important}.v-application .indigo{background-color:#3f51b5 !important;border-color:#3f51b5 !important}.v-application .indigo--text{color:#3f51b5 !important;caret-color:#3f51b5 !important}.v-application .indigo.lighten-5{background-color:#e8eaf6 !important;border-color:#e8eaf6 !important}.v-application .indigo--text.text--lighten-5{color:#e8eaf6 !important;caret-color:#e8eaf6 !important}.v-application .indigo.lighten-4{background-color:#c5cae9 !important;border-color:#c5cae9 !important}.v-application .indigo--text.text--lighten-4{color:#c5cae9 !important;caret-color:#c5cae9 !important}.v-application .indigo.lighten-3{background-color:#9fa8da !important;border-color:#9fa8da !important}.v-application .indigo--text.text--lighten-3{color:#9fa8da !important;caret-color:#9fa8da !important}.v-application .indigo.lighten-2{background-color:#7986cb !important;border-color:#7986cb !important}.v-application .indigo--text.text--lighten-2{color:#7986cb !important;caret-color:#7986cb !important}.v-application .indigo.lighten-1{background-color:#5c6bc0 !important;border-color:#5c6bc0 !important}.v-application .indigo--text.text--lighten-1{color:#5c6bc0 !important;caret-color:#5c6bc0 !important}.v-application .indigo.darken-1{background-color:#3949ab !important;border-color:#3949ab !important}.v-application .indigo--text.text--darken-1{color:#3949ab !important;caret-color:#3949ab !important}.v-application .indigo.darken-2{background-color:#303f9f !important;border-color:#303f9f !important}.v-application .indigo--text.text--darken-2{color:#303f9f !important;caret-color:#303f9f !important}.v-application .indigo.darken-3{background-color:#283593 !important;border-color:#283593 !important}.v-application .indigo--text.text--darken-3{color:#283593 !important;caret-color:#283593 !important}.v-application .indigo.darken-4{background-color:#1a237e !important;border-color:#1a237e !important}.v-application .indigo--text.text--darken-4{color:#1a237e !important;caret-color:#1a237e !important}.v-application .indigo.accent-1{background-color:#8c9eff !important;border-color:#8c9eff !important}.v-application .indigo--text.text--accent-1{color:#8c9eff !important;caret-color:#8c9eff !important}.v-application .indigo.accent-2{background-color:#536dfe !important;border-color:#536dfe !important}.v-application .indigo--text.text--accent-2{color:#536dfe !important;caret-color:#536dfe !important}.v-application .indigo.accent-3{background-color:#3d5afe !important;border-color:#3d5afe !important}.v-application .indigo--text.text--accent-3{color:#3d5afe !important;caret-color:#3d5afe !important}.v-application .indigo.accent-4{background-color:#304ffe !important;border-color:#304ffe !important}.v-application .indigo--text.text--accent-4{color:#304ffe !important;caret-color:#304ffe !important}.v-application .blue{background-color:#2196f3 !important;border-color:#2196f3 !important}.v-application .blue--text{color:#2196f3 !important;caret-color:#2196f3 !important}.v-application .blue.lighten-5{background-color:#e3f2fd !important;border-color:#e3f2fd !important}.v-application .blue--text.text--lighten-5{color:#e3f2fd !important;caret-color:#e3f2fd !important}.v-application .blue.lighten-4{background-color:#bbdefb !important;border-color:#bbdefb !important}.v-application .blue--text.text--lighten-4{color:#bbdefb !important;caret-color:#bbdefb !important}.v-application .blue.lighten-3{background-color:#90caf9 !important;border-color:#90caf9 !important}.v-application .blue--text.text--lighten-3{color:#90caf9 !important;caret-color:#90caf9 !important}.v-application .blue.lighten-2{background-color:#64b5f6 !important;border-color:#64b5f6 !important}.v-application .blue--text.text--lighten-2{color:#64b5f6 !important;caret-color:#64b5f6 !important}.v-application .blue.lighten-1{background-color:#42a5f5 !important;border-color:#42a5f5 !important}.v-application .blue--text.text--lighten-1{color:#42a5f5 !important;caret-color:#42a5f5 !important}.v-application .blue.darken-1{background-color:#1e88e5 !important;border-color:#1e88e5 !important}.v-application .blue--text.text--darken-1{color:#1e88e5 !important;caret-color:#1e88e5 !important}.v-application .blue.darken-2{background-color:#1976d2 !important;border-color:#1976d2 !important}.v-application .blue--text.text--darken-2{color:#1976d2 !important;caret-color:#1976d2 !important}.v-application .blue.darken-3{background-color:#1565c0 !important;border-color:#1565c0 !important}.v-application .blue--text.text--darken-3{color:#1565c0 !important;caret-color:#1565c0 !important}.v-application .blue.darken-4{background-color:#0d47a1 !important;border-color:#0d47a1 !important}.v-application .blue--text.text--darken-4{color:#0d47a1 !important;caret-color:#0d47a1 !important}.v-application .blue.accent-1{background-color:#82b1ff !important;border-color:#82b1ff !important}.v-application .blue--text.text--accent-1{color:#82b1ff !important;caret-color:#82b1ff !important}.v-application .blue.accent-2{background-color:#448aff !important;border-color:#448aff !important}.v-application .blue--text.text--accent-2{color:#448aff !important;caret-color:#448aff !important}.v-application .blue.accent-3{background-color:#2979ff !important;border-color:#2979ff !important}.v-application .blue--text.text--accent-3{color:#2979ff !important;caret-color:#2979ff !important}.v-application .blue.accent-4{background-color:#2962ff !important;border-color:#2962ff !important}.v-application .blue--text.text--accent-4{color:#2962ff !important;caret-color:#2962ff !important}.v-application .light-blue{background-color:#03a9f4 !important;border-color:#03a9f4 !important}.v-application .light-blue--text{color:#03a9f4 !important;caret-color:#03a9f4 !important}.v-application .light-blue.lighten-5{background-color:#e1f5fe !important;border-color:#e1f5fe !important}.v-application .light-blue--text.text--lighten-5{color:#e1f5fe !important;caret-color:#e1f5fe !important}.v-application .light-blue.lighten-4{background-color:#b3e5fc !important;border-color:#b3e5fc !important}.v-application .light-blue--text.text--lighten-4{color:#b3e5fc !important;caret-color:#b3e5fc !important}.v-application .light-blue.lighten-3{background-color:#81d4fa !important;border-color:#81d4fa !important}.v-application .light-blue--text.text--lighten-3{color:#81d4fa !important;caret-color:#81d4fa !important}.v-application .light-blue.lighten-2{background-color:#4fc3f7 !important;border-color:#4fc3f7 !important}.v-application .light-blue--text.text--lighten-2{color:#4fc3f7 !important;caret-color:#4fc3f7 !important}.v-application .light-blue.lighten-1{background-color:#29b6f6 !important;border-color:#29b6f6 !important}.v-application .light-blue--text.text--lighten-1{color:#29b6f6 !important;caret-color:#29b6f6 !important}.v-application .light-blue.darken-1{background-color:#039be5 !important;border-color:#039be5 !important}.v-application .light-blue--text.text--darken-1{color:#039be5 !important;caret-color:#039be5 !important}.v-application .light-blue.darken-2{background-color:#0288d1 !important;border-color:#0288d1 !important}.v-application .light-blue--text.text--darken-2{color:#0288d1 !important;caret-color:#0288d1 !important}.v-application .light-blue.darken-3{background-color:#0277bd !important;border-color:#0277bd !important}.v-application .light-blue--text.text--darken-3{color:#0277bd !important;caret-color:#0277bd !important}.v-application .light-blue.darken-4{background-color:#01579b !important;border-color:#01579b !important}.v-application .light-blue--text.text--darken-4{color:#01579b !important;caret-color:#01579b !important}.v-application .light-blue.accent-1{background-color:#80d8ff !important;border-color:#80d8ff !important}.v-application .light-blue--text.text--accent-1{color:#80d8ff !important;caret-color:#80d8ff !important}.v-application .light-blue.accent-2{background-color:#40c4ff !important;border-color:#40c4ff !important}.v-application .light-blue--text.text--accent-2{color:#40c4ff !important;caret-color:#40c4ff !important}.v-application .light-blue.accent-3{background-color:#00b0ff !important;border-color:#00b0ff !important}.v-application .light-blue--text.text--accent-3{color:#00b0ff !important;caret-color:#00b0ff !important}.v-application .light-blue.accent-4{background-color:#0091ea !important;border-color:#0091ea !important}.v-application .light-blue--text.text--accent-4{color:#0091ea !important;caret-color:#0091ea !important}.v-application .cyan{background-color:#00bcd4 !important;border-color:#00bcd4 !important}.v-application .cyan--text{color:#00bcd4 !important;caret-color:#00bcd4 !important}.v-application .cyan.lighten-5{background-color:#e0f7fa !important;border-color:#e0f7fa !important}.v-application .cyan--text.text--lighten-5{color:#e0f7fa !important;caret-color:#e0f7fa !important}.v-application .cyan.lighten-4{background-color:#b2ebf2 !important;border-color:#b2ebf2 !important}.v-application .cyan--text.text--lighten-4{color:#b2ebf2 !important;caret-color:#b2ebf2 !important}.v-application .cyan.lighten-3{background-color:#80deea !important;border-color:#80deea !important}.v-application .cyan--text.text--lighten-3{color:#80deea !important;caret-color:#80deea !important}.v-application .cyan.lighten-2{background-color:#4dd0e1 !important;border-color:#4dd0e1 !important}.v-application .cyan--text.text--lighten-2{color:#4dd0e1 !important;caret-color:#4dd0e1 !important}.v-application .cyan.lighten-1{background-color:#26c6da !important;border-color:#26c6da !important}.v-application .cyan--text.text--lighten-1{color:#26c6da !important;caret-color:#26c6da !important}.v-application .cyan.darken-1{background-color:#00acc1 !important;border-color:#00acc1 !important}.v-application .cyan--text.text--darken-1{color:#00acc1 !important;caret-color:#00acc1 !important}.v-application .cyan.darken-2{background-color:#0097a7 !important;border-color:#0097a7 !important}.v-application .cyan--text.text--darken-2{color:#0097a7 !important;caret-color:#0097a7 !important}.v-application .cyan.darken-3{background-color:#00838f !important;border-color:#00838f !important}.v-application .cyan--text.text--darken-3{color:#00838f !important;caret-color:#00838f !important}.v-application .cyan.darken-4{background-color:#006064 !important;border-color:#006064 !important}.v-application .cyan--text.text--darken-4{color:#006064 !important;caret-color:#006064 !important}.v-application .cyan.accent-1{background-color:#84ffff !important;border-color:#84ffff !important}.v-application .cyan--text.text--accent-1{color:#84ffff !important;caret-color:#84ffff !important}.v-application .cyan.accent-2{background-color:#18ffff !important;border-color:#18ffff !important}.v-application .cyan--text.text--accent-2{color:#18ffff !important;caret-color:#18ffff !important}.v-application .cyan.accent-3{background-color:#00e5ff !important;border-color:#00e5ff !important}.v-application .cyan--text.text--accent-3{color:#00e5ff !important;caret-color:#00e5ff !important}.v-application .cyan.accent-4{background-color:#00b8d4 !important;border-color:#00b8d4 !important}.v-application .cyan--text.text--accent-4{color:#00b8d4 !important;caret-color:#00b8d4 !important}.v-application .teal{background-color:#009688 !important;border-color:#009688 !important}.v-application .teal--text{color:#009688 !important;caret-color:#009688 !important}.v-application .teal.lighten-5{background-color:#e0f2f1 !important;border-color:#e0f2f1 !important}.v-application .teal--text.text--lighten-5{color:#e0f2f1 !important;caret-color:#e0f2f1 !important}.v-application .teal.lighten-4{background-color:#b2dfdb !important;border-color:#b2dfdb !important}.v-application .teal--text.text--lighten-4{color:#b2dfdb !important;caret-color:#b2dfdb !important}.v-application .teal.lighten-3{background-color:#80cbc4 !important;border-color:#80cbc4 !important}.v-application .teal--text.text--lighten-3{color:#80cbc4 !important;caret-color:#80cbc4 !important}.v-application .teal.lighten-2{background-color:#4db6ac !important;border-color:#4db6ac !important}.v-application .teal--text.text--lighten-2{color:#4db6ac !important;caret-color:#4db6ac !important}.v-application .teal.lighten-1{background-color:#26a69a !important;border-color:#26a69a !important}.v-application .teal--text.text--lighten-1{color:#26a69a !important;caret-color:#26a69a !important}.v-application .teal.darken-1{background-color:#00897b !important;border-color:#00897b !important}.v-application .teal--text.text--darken-1{color:#00897b !important;caret-color:#00897b !important}.v-application .teal.darken-2{background-color:#00796b !important;border-color:#00796b !important}.v-application .teal--text.text--darken-2{color:#00796b !important;caret-color:#00796b !important}.v-application .teal.darken-3{background-color:#00695c !important;border-color:#00695c !important}.v-application .teal--text.text--darken-3{color:#00695c !important;caret-color:#00695c !important}.v-application .teal.darken-4{background-color:#004d40 !important;border-color:#004d40 !important}.v-application .teal--text.text--darken-4{color:#004d40 !important;caret-color:#004d40 !important}.v-application .teal.accent-1{background-color:#a7ffeb !important;border-color:#a7ffeb !important}.v-application .teal--text.text--accent-1{color:#a7ffeb !important;caret-color:#a7ffeb !important}.v-application .teal.accent-2{background-color:#64ffda !important;border-color:#64ffda !important}.v-application .teal--text.text--accent-2{color:#64ffda !important;caret-color:#64ffda !important}.v-application .teal.accent-3{background-color:#1de9b6 !important;border-color:#1de9b6 !important}.v-application .teal--text.text--accent-3{color:#1de9b6 !important;caret-color:#1de9b6 !important}.v-application .teal.accent-4{background-color:#00bfa5 !important;border-color:#00bfa5 !important}.v-application .teal--text.text--accent-4{color:#00bfa5 !important;caret-color:#00bfa5 !important}.v-application .green{background-color:#4caf50 !important;border-color:#4caf50 !important}.v-application .green--text{color:#4caf50 !important;caret-color:#4caf50 !important}.v-application .green.lighten-5{background-color:#e8f5e9 !important;border-color:#e8f5e9 !important}.v-application .green--text.text--lighten-5{color:#e8f5e9 !important;caret-color:#e8f5e9 !important}.v-application .green.lighten-4{background-color:#c8e6c9 !important;border-color:#c8e6c9 !important}.v-application .green--text.text--lighten-4{color:#c8e6c9 !important;caret-color:#c8e6c9 !important}.v-application .green.lighten-3{background-color:#a5d6a7 !important;border-color:#a5d6a7 !important}.v-application .green--text.text--lighten-3{color:#a5d6a7 !important;caret-color:#a5d6a7 !important}.v-application .green.lighten-2{background-color:#81c784 !important;border-color:#81c784 !important}.v-application .green--text.text--lighten-2{color:#81c784 !important;caret-color:#81c784 !important}.v-application .green.lighten-1{background-color:#66bb6a !important;border-color:#66bb6a !important}.v-application .green--text.text--lighten-1{color:#66bb6a !important;caret-color:#66bb6a !important}.v-application .green.darken-1{background-color:#43a047 !important;border-color:#43a047 !important}.v-application .green--text.text--darken-1{color:#43a047 !important;caret-color:#43a047 !important}.v-application .green.darken-2{background-color:#388e3c !important;border-color:#388e3c !important}.v-application .green--text.text--darken-2{color:#388e3c !important;caret-color:#388e3c !important}.v-application .green.darken-3{background-color:#2e7d32 !important;border-color:#2e7d32 !important}.v-application .green--text.text--darken-3{color:#2e7d32 !important;caret-color:#2e7d32 !important}.v-application .green.darken-4{background-color:#1b5e20 !important;border-color:#1b5e20 !important}.v-application .green--text.text--darken-4{color:#1b5e20 !important;caret-color:#1b5e20 !important}.v-application .green.accent-1{background-color:#b9f6ca !important;border-color:#b9f6ca !important}.v-application .green--text.text--accent-1{color:#b9f6ca !important;caret-color:#b9f6ca !important}.v-application .green.accent-2{background-color:#69f0ae !important;border-color:#69f0ae !important}.v-application .green--text.text--accent-2{color:#69f0ae !important;caret-color:#69f0ae !important}.v-application .green.accent-3{background-color:#00e676 !important;border-color:#00e676 !important}.v-application .green--text.text--accent-3{color:#00e676 !important;caret-color:#00e676 !important}.v-application .green.accent-4{background-color:#00c853 !important;border-color:#00c853 !important}.v-application .green--text.text--accent-4{color:#00c853 !important;caret-color:#00c853 !important}.v-application .light-green{background-color:#8bc34a !important;border-color:#8bc34a !important}.v-application .light-green--text{color:#8bc34a !important;caret-color:#8bc34a !important}.v-application .light-green.lighten-5{background-color:#f1f8e9 !important;border-color:#f1f8e9 !important}.v-application .light-green--text.text--lighten-5{color:#f1f8e9 !important;caret-color:#f1f8e9 !important}.v-application .light-green.lighten-4{background-color:#dcedc8 !important;border-color:#dcedc8 !important}.v-application .light-green--text.text--lighten-4{color:#dcedc8 !important;caret-color:#dcedc8 !important}.v-application .light-green.lighten-3{background-color:#c5e1a5 !important;border-color:#c5e1a5 !important}.v-application .light-green--text.text--lighten-3{color:#c5e1a5 !important;caret-color:#c5e1a5 !important}.v-application .light-green.lighten-2{background-color:#aed581 !important;border-color:#aed581 !important}.v-application .light-green--text.text--lighten-2{color:#aed581 !important;caret-color:#aed581 !important}.v-application .light-green.lighten-1{background-color:#9ccc65 !important;border-color:#9ccc65 !important}.v-application .light-green--text.text--lighten-1{color:#9ccc65 !important;caret-color:#9ccc65 !important}.v-application .light-green.darken-1{background-color:#7cb342 !important;border-color:#7cb342 !important}.v-application .light-green--text.text--darken-1{color:#7cb342 !important;caret-color:#7cb342 !important}.v-application .light-green.darken-2{background-color:#689f38 !important;border-color:#689f38 !important}.v-application .light-green--text.text--darken-2{color:#689f38 !important;caret-color:#689f38 !important}.v-application .light-green.darken-3{background-color:#558b2f !important;border-color:#558b2f !important}.v-application .light-green--text.text--darken-3{color:#558b2f !important;caret-color:#558b2f !important}.v-application .light-green.darken-4{background-color:#33691e !important;border-color:#33691e !important}.v-application .light-green--text.text--darken-4{color:#33691e !important;caret-color:#33691e !important}.v-application .light-green.accent-1{background-color:#ccff90 !important;border-color:#ccff90 !important}.v-application .light-green--text.text--accent-1{color:#ccff90 !important;caret-color:#ccff90 !important}.v-application .light-green.accent-2{background-color:#b2ff59 !important;border-color:#b2ff59 !important}.v-application .light-green--text.text--accent-2{color:#b2ff59 !important;caret-color:#b2ff59 !important}.v-application .light-green.accent-3{background-color:#76ff03 !important;border-color:#76ff03 !important}.v-application .light-green--text.text--accent-3{color:#76ff03 !important;caret-color:#76ff03 !important}.v-application .light-green.accent-4{background-color:#64dd17 !important;border-color:#64dd17 !important}.v-application .light-green--text.text--accent-4{color:#64dd17 !important;caret-color:#64dd17 !important}.v-application .lime{background-color:#cddc39 !important;border-color:#cddc39 !important}.v-application .lime--text{color:#cddc39 !important;caret-color:#cddc39 !important}.v-application .lime.lighten-5{background-color:#f9fbe7 !important;border-color:#f9fbe7 !important}.v-application .lime--text.text--lighten-5{color:#f9fbe7 !important;caret-color:#f9fbe7 !important}.v-application .lime.lighten-4{background-color:#f0f4c3 !important;border-color:#f0f4c3 !important}.v-application .lime--text.text--lighten-4{color:#f0f4c3 !important;caret-color:#f0f4c3 !important}.v-application .lime.lighten-3{background-color:#e6ee9c !important;border-color:#e6ee9c !important}.v-application .lime--text.text--lighten-3{color:#e6ee9c !important;caret-color:#e6ee9c !important}.v-application .lime.lighten-2{background-color:#dce775 !important;border-color:#dce775 !important}.v-application .lime--text.text--lighten-2{color:#dce775 !important;caret-color:#dce775 !important}.v-application .lime.lighten-1{background-color:#d4e157 !important;border-color:#d4e157 !important}.v-application .lime--text.text--lighten-1{color:#d4e157 !important;caret-color:#d4e157 !important}.v-application .lime.darken-1{background-color:#c0ca33 !important;border-color:#c0ca33 !important}.v-application .lime--text.text--darken-1{color:#c0ca33 !important;caret-color:#c0ca33 !important}.v-application .lime.darken-2{background-color:#afb42b !important;border-color:#afb42b !important}.v-application .lime--text.text--darken-2{color:#afb42b !important;caret-color:#afb42b !important}.v-application .lime.darken-3{background-color:#9e9d24 !important;border-color:#9e9d24 !important}.v-application .lime--text.text--darken-3{color:#9e9d24 !important;caret-color:#9e9d24 !important}.v-application .lime.darken-4{background-color:#827717 !important;border-color:#827717 !important}.v-application .lime--text.text--darken-4{color:#827717 !important;caret-color:#827717 !important}.v-application .lime.accent-1{background-color:#f4ff81 !important;border-color:#f4ff81 !important}.v-application .lime--text.text--accent-1{color:#f4ff81 !important;caret-color:#f4ff81 !important}.v-application .lime.accent-2{background-color:#eeff41 !important;border-color:#eeff41 !important}.v-application .lime--text.text--accent-2{color:#eeff41 !important;caret-color:#eeff41 !important}.v-application .lime.accent-3{background-color:#c6ff00 !important;border-color:#c6ff00 !important}.v-application .lime--text.text--accent-3{color:#c6ff00 !important;caret-color:#c6ff00 !important}.v-application .lime.accent-4{background-color:#aeea00 !important;border-color:#aeea00 !important}.v-application .lime--text.text--accent-4{color:#aeea00 !important;caret-color:#aeea00 !important}.v-application .yellow{background-color:#ffeb3b !important;border-color:#ffeb3b !important}.v-application .yellow--text{color:#ffeb3b !important;caret-color:#ffeb3b !important}.v-application .yellow.lighten-5{background-color:#fffde7 !important;border-color:#fffde7 !important}.v-application .yellow--text.text--lighten-5{color:#fffde7 !important;caret-color:#fffde7 !important}.v-application .yellow.lighten-4{background-color:#fff9c4 !important;border-color:#fff9c4 !important}.v-application .yellow--text.text--lighten-4{color:#fff9c4 !important;caret-color:#fff9c4 !important}.v-application .yellow.lighten-3{background-color:#fff59d !important;border-color:#fff59d !important}.v-application .yellow--text.text--lighten-3{color:#fff59d !important;caret-color:#fff59d !important}.v-application .yellow.lighten-2{background-color:#fff176 !important;border-color:#fff176 !important}.v-application .yellow--text.text--lighten-2{color:#fff176 !important;caret-color:#fff176 !important}.v-application .yellow.lighten-1{background-color:#ffee58 !important;border-color:#ffee58 !important}.v-application .yellow--text.text--lighten-1{color:#ffee58 !important;caret-color:#ffee58 !important}.v-application .yellow.darken-1{background-color:#fdd835 !important;border-color:#fdd835 !important}.v-application .yellow--text.text--darken-1{color:#fdd835 !important;caret-color:#fdd835 !important}.v-application .yellow.darken-2{background-color:#fbc02d !important;border-color:#fbc02d !important}.v-application .yellow--text.text--darken-2{color:#fbc02d !important;caret-color:#fbc02d !important}.v-application .yellow.darken-3{background-color:#f9a825 !important;border-color:#f9a825 !important}.v-application .yellow--text.text--darken-3{color:#f9a825 !important;caret-color:#f9a825 !important}.v-application .yellow.darken-4{background-color:#f57f17 !important;border-color:#f57f17 !important}.v-application .yellow--text.text--darken-4{color:#f57f17 !important;caret-color:#f57f17 !important}.v-application .yellow.accent-1{background-color:#ffff8d !important;border-color:#ffff8d !important}.v-application .yellow--text.text--accent-1{color:#ffff8d !important;caret-color:#ffff8d !important}.v-application .yellow.accent-2{background-color:#ff0 !important;border-color:#ff0 !important}.v-application .yellow--text.text--accent-2{color:#ff0 !important;caret-color:#ff0 !important}.v-application .yellow.accent-3{background-color:#ffea00 !important;border-color:#ffea00 !important}.v-application .yellow--text.text--accent-3{color:#ffea00 !important;caret-color:#ffea00 !important}.v-application .yellow.accent-4{background-color:#ffd600 !important;border-color:#ffd600 !important}.v-application .yellow--text.text--accent-4{color:#ffd600 !important;caret-color:#ffd600 !important}.v-application .amber{background-color:#ffc107 !important;border-color:#ffc107 !important}.v-application .amber--text{color:#ffc107 !important;caret-color:#ffc107 !important}.v-application .amber.lighten-5{background-color:#fff8e1 !important;border-color:#fff8e1 !important}.v-application .amber--text.text--lighten-5{color:#fff8e1 !important;caret-color:#fff8e1 !important}.v-application .amber.lighten-4{background-color:#ffecb3 !important;border-color:#ffecb3 !important}.v-application .amber--text.text--lighten-4{color:#ffecb3 !important;caret-color:#ffecb3 !important}.v-application .amber.lighten-3{background-color:#ffe082 !important;border-color:#ffe082 !important}.v-application .amber--text.text--lighten-3{color:#ffe082 !important;caret-color:#ffe082 !important}.v-application .amber.lighten-2{background-color:#ffd54f !important;border-color:#ffd54f !important}.v-application .amber--text.text--lighten-2{color:#ffd54f !important;caret-color:#ffd54f !important}.v-application .amber.lighten-1{background-color:#ffca28 !important;border-color:#ffca28 !important}.v-application .amber--text.text--lighten-1{color:#ffca28 !important;caret-color:#ffca28 !important}.v-application .amber.darken-1{background-color:#ffb300 !important;border-color:#ffb300 !important}.v-application .amber--text.text--darken-1{color:#ffb300 !important;caret-color:#ffb300 !important}.v-application .amber.darken-2{background-color:#ffa000 !important;border-color:#ffa000 !important}.v-application .amber--text.text--darken-2{color:#ffa000 !important;caret-color:#ffa000 !important}.v-application .amber.darken-3{background-color:#ff8f00 !important;border-color:#ff8f00 !important}.v-application .amber--text.text--darken-3{color:#ff8f00 !important;caret-color:#ff8f00 !important}.v-application .amber.darken-4{background-color:#ff6f00 !important;border-color:#ff6f00 !important}.v-application .amber--text.text--darken-4{color:#ff6f00 !important;caret-color:#ff6f00 !important}.v-application .amber.accent-1{background-color:#ffe57f !important;border-color:#ffe57f !important}.v-application .amber--text.text--accent-1{color:#ffe57f !important;caret-color:#ffe57f !important}.v-application .amber.accent-2{background-color:#ffd740 !important;border-color:#ffd740 !important}.v-application .amber--text.text--accent-2{color:#ffd740 !important;caret-color:#ffd740 !important}.v-application .amber.accent-3{background-color:#ffc400 !important;border-color:#ffc400 !important}.v-application .amber--text.text--accent-3{color:#ffc400 !important;caret-color:#ffc400 !important}.v-application .amber.accent-4{background-color:#ffab00 !important;border-color:#ffab00 !important}.v-application .amber--text.text--accent-4{color:#ffab00 !important;caret-color:#ffab00 !important}.v-application .orange{background-color:#ff9800 !important;border-color:#ff9800 !important}.v-application .orange--text{color:#ff9800 !important;caret-color:#ff9800 !important}.v-application .orange.lighten-5{background-color:#fff3e0 !important;border-color:#fff3e0 !important}.v-application .orange--text.text--lighten-5{color:#fff3e0 !important;caret-color:#fff3e0 !important}.v-application .orange.lighten-4{background-color:#ffe0b2 !important;border-color:#ffe0b2 !important}.v-application .orange--text.text--lighten-4{color:#ffe0b2 !important;caret-color:#ffe0b2 !important}.v-application .orange.lighten-3{background-color:#ffcc80 !important;border-color:#ffcc80 !important}.v-application .orange--text.text--lighten-3{color:#ffcc80 !important;caret-color:#ffcc80 !important}.v-application .orange.lighten-2{background-color:#ffb74d !important;border-color:#ffb74d !important}.v-application .orange--text.text--lighten-2{color:#ffb74d !important;caret-color:#ffb74d !important}.v-application .orange.lighten-1{background-color:#ffa726 !important;border-color:#ffa726 !important}.v-application .orange--text.text--lighten-1{color:#ffa726 !important;caret-color:#ffa726 !important}.v-application .orange.darken-1{background-color:#fb8c00 !important;border-color:#fb8c00 !important}.v-application .orange--text.text--darken-1{color:#fb8c00 !important;caret-color:#fb8c00 !important}.v-application .orange.darken-2{background-color:#f57c00 !important;border-color:#f57c00 !important}.v-application .orange--text.text--darken-2{color:#f57c00 !important;caret-color:#f57c00 !important}.v-application .orange.darken-3{background-color:#ef6c00 !important;border-color:#ef6c00 !important}.v-application .orange--text.text--darken-3{color:#ef6c00 !important;caret-color:#ef6c00 !important}.v-application .orange.darken-4{background-color:#e65100 !important;border-color:#e65100 !important}.v-application .orange--text.text--darken-4{color:#e65100 !important;caret-color:#e65100 !important}.v-application .orange.accent-1{background-color:#ffd180 !important;border-color:#ffd180 !important}.v-application .orange--text.text--accent-1{color:#ffd180 !important;caret-color:#ffd180 !important}.v-application .orange.accent-2{background-color:#ffab40 !important;border-color:#ffab40 !important}.v-application .orange--text.text--accent-2{color:#ffab40 !important;caret-color:#ffab40 !important}.v-application .orange.accent-3{background-color:#ff9100 !important;border-color:#ff9100 !important}.v-application .orange--text.text--accent-3{color:#ff9100 !important;caret-color:#ff9100 !important}.v-application .orange.accent-4{background-color:#ff6d00 !important;border-color:#ff6d00 !important}.v-application .orange--text.text--accent-4{color:#ff6d00 !important;caret-color:#ff6d00 !important}.v-application .deep-orange{background-color:#ff5722 !important;border-color:#ff5722 !important}.v-application .deep-orange--text{color:#ff5722 !important;caret-color:#ff5722 !important}.v-application .deep-orange.lighten-5{background-color:#fbe9e7 !important;border-color:#fbe9e7 !important}.v-application .deep-orange--text.text--lighten-5{color:#fbe9e7 !important;caret-color:#fbe9e7 !important}.v-application .deep-orange.lighten-4{background-color:#ffccbc !important;border-color:#ffccbc !important}.v-application .deep-orange--text.text--lighten-4{color:#ffccbc !important;caret-color:#ffccbc !important}.v-application .deep-orange.lighten-3{background-color:#ffab91 !important;border-color:#ffab91 !important}.v-application .deep-orange--text.text--lighten-3{color:#ffab91 !important;caret-color:#ffab91 !important}.v-application .deep-orange.lighten-2{background-color:#ff8a65 !important;border-color:#ff8a65 !important}.v-application .deep-orange--text.text--lighten-2{color:#ff8a65 !important;caret-color:#ff8a65 !important}.v-application .deep-orange.lighten-1{background-color:#ff7043 !important;border-color:#ff7043 !important}.v-application .deep-orange--text.text--lighten-1{color:#ff7043 !important;caret-color:#ff7043 !important}.v-application .deep-orange.darken-1{background-color:#f4511e !important;border-color:#f4511e !important}.v-application .deep-orange--text.text--darken-1{color:#f4511e !important;caret-color:#f4511e !important}.v-application .deep-orange.darken-2{background-color:#e64a19 !important;border-color:#e64a19 !important}.v-application .deep-orange--text.text--darken-2{color:#e64a19 !important;caret-color:#e64a19 !important}.v-application .deep-orange.darken-3{background-color:#d84315 !important;border-color:#d84315 !important}.v-application .deep-orange--text.text--darken-3{color:#d84315 !important;caret-color:#d84315 !important}.v-application .deep-orange.darken-4{background-color:#bf360c !important;border-color:#bf360c !important}.v-application .deep-orange--text.text--darken-4{color:#bf360c !important;caret-color:#bf360c !important}.v-application .deep-orange.accent-1{background-color:#ff9e80 !important;border-color:#ff9e80 !important}.v-application .deep-orange--text.text--accent-1{color:#ff9e80 !important;caret-color:#ff9e80 !important}.v-application .deep-orange.accent-2{background-color:#ff6e40 !important;border-color:#ff6e40 !important}.v-application .deep-orange--text.text--accent-2{color:#ff6e40 !important;caret-color:#ff6e40 !important}.v-application .deep-orange.accent-3{background-color:#ff3d00 !important;border-color:#ff3d00 !important}.v-application .deep-orange--text.text--accent-3{color:#ff3d00 !important;caret-color:#ff3d00 !important}.v-application .deep-orange.accent-4{background-color:#dd2c00 !important;border-color:#dd2c00 !important}.v-application .deep-orange--text.text--accent-4{color:#dd2c00 !important;caret-color:#dd2c00 !important}.v-application .brown{background-color:#795548 !important;border-color:#795548 !important}.v-application .brown--text{color:#795548 !important;caret-color:#795548 !important}.v-application .brown.lighten-5{background-color:#efebe9 !important;border-color:#efebe9 !important}.v-application .brown--text.text--lighten-5{color:#efebe9 !important;caret-color:#efebe9 !important}.v-application .brown.lighten-4{background-color:#d7ccc8 !important;border-color:#d7ccc8 !important}.v-application .brown--text.text--lighten-4{color:#d7ccc8 !important;caret-color:#d7ccc8 !important}.v-application .brown.lighten-3{background-color:#bcaaa4 !important;border-color:#bcaaa4 !important}.v-application .brown--text.text--lighten-3{color:#bcaaa4 !important;caret-color:#bcaaa4 !important}.v-application .brown.lighten-2{background-color:#a1887f !important;border-color:#a1887f !important}.v-application .brown--text.text--lighten-2{color:#a1887f !important;caret-color:#a1887f !important}.v-application .brown.lighten-1{background-color:#8d6e63 !important;border-color:#8d6e63 !important}.v-application .brown--text.text--lighten-1{color:#8d6e63 !important;caret-color:#8d6e63 !important}.v-application .brown.darken-1{background-color:#6d4c41 !important;border-color:#6d4c41 !important}.v-application .brown--text.text--darken-1{color:#6d4c41 !important;caret-color:#6d4c41 !important}.v-application .brown.darken-2{background-color:#5d4037 !important;border-color:#5d4037 !important}.v-application .brown--text.text--darken-2{color:#5d4037 !important;caret-color:#5d4037 !important}.v-application .brown.darken-3{background-color:#4e342e !important;border-color:#4e342e !important}.v-application .brown--text.text--darken-3{color:#4e342e !important;caret-color:#4e342e !important}.v-application .brown.darken-4{background-color:#3e2723 !important;border-color:#3e2723 !important}.v-application .brown--text.text--darken-4{color:#3e2723 !important;caret-color:#3e2723 !important}.v-application .blue-grey{background-color:#607d8b !important;border-color:#607d8b !important}.v-application .blue-grey--text{color:#607d8b !important;caret-color:#607d8b !important}.v-application .blue-grey.lighten-5{background-color:#eceff1 !important;border-color:#eceff1 !important}.v-application .blue-grey--text.text--lighten-5{color:#eceff1 !important;caret-color:#eceff1 !important}.v-application .blue-grey.lighten-4{background-color:#cfd8dc !important;border-color:#cfd8dc !important}.v-application .blue-grey--text.text--lighten-4{color:#cfd8dc !important;caret-color:#cfd8dc !important}.v-application .blue-grey.lighten-3{background-color:#b0bec5 !important;border-color:#b0bec5 !important}.v-application .blue-grey--text.text--lighten-3{color:#b0bec5 !important;caret-color:#b0bec5 !important}.v-application .blue-grey.lighten-2{background-color:#90a4ae !important;border-color:#90a4ae !important}.v-application .blue-grey--text.text--lighten-2{color:#90a4ae !important;caret-color:#90a4ae !important}.v-application .blue-grey.lighten-1{background-color:#78909c !important;border-color:#78909c !important}.v-application .blue-grey--text.text--lighten-1{color:#78909c !important;caret-color:#78909c !important}.v-application .blue-grey.darken-1{background-color:#546e7a !important;border-color:#546e7a !important}.v-application .blue-grey--text.text--darken-1{color:#546e7a !important;caret-color:#546e7a !important}.v-application .blue-grey.darken-2{background-color:#455a64 !important;border-color:#455a64 !important}.v-application .blue-grey--text.text--darken-2{color:#455a64 !important;caret-color:#455a64 !important}.v-application .blue-grey.darken-3{background-color:#37474f !important;border-color:#37474f !important}.v-application .blue-grey--text.text--darken-3{color:#37474f !important;caret-color:#37474f !important}.v-application .blue-grey.darken-4{background-color:#263238 !important;border-color:#263238 !important}.v-application .blue-grey--text.text--darken-4{color:#263238 !important;caret-color:#263238 !important}.v-application .grey{background-color:#9e9e9e !important;border-color:#9e9e9e !important}.v-application .grey--text{color:#9e9e9e !important;caret-color:#9e9e9e !important}.v-application .grey.lighten-5{background-color:#fafafa !important;border-color:#fafafa !important}.v-application .grey--text.text--lighten-5{color:#fafafa !important;caret-color:#fafafa !important}.v-application .grey.lighten-4{background-color:#f5f5f5 !important;border-color:#f5f5f5 !important}.v-application .grey--text.text--lighten-4{color:#f5f5f5 !important;caret-color:#f5f5f5 !important}.v-application .grey.lighten-3{background-color:#eee !important;border-color:#eee !important}.v-application .grey--text.text--lighten-3{color:#eee !important;caret-color:#eee !important}.v-application .grey.lighten-2{background-color:#e0e0e0 !important;border-color:#e0e0e0 !important}.v-application .grey--text.text--lighten-2{color:#e0e0e0 !important;caret-color:#e0e0e0 !important}.v-application .grey.lighten-1{background-color:#bdbdbd !important;border-color:#bdbdbd !important}.v-application .grey--text.text--lighten-1{color:#bdbdbd !important;caret-color:#bdbdbd !important}.v-application .grey.darken-1{background-color:#757575 !important;border-color:#757575 !important}.v-application .grey--text.text--darken-1{color:#757575 !important;caret-color:#757575 !important}.v-application .grey.darken-2{background-color:#616161 !important;border-color:#616161 !important}.v-application .grey--text.text--darken-2{color:#616161 !important;caret-color:#616161 !important}.v-application .grey.darken-3{background-color:#424242 !important;border-color:#424242 !important}.v-application .grey--text.text--darken-3{color:#424242 !important;caret-color:#424242 !important}.v-application .grey.darken-4{background-color:#212121 !important;border-color:#212121 !important}.v-application .grey--text.text--darken-4{color:#212121 !important;caret-color:#212121 !important}.v-application .shades.black{background-color:#000 !important;border-color:#000 !important}.v-application .shades--text.text--black{color:#000 !important;caret-color:#000 !important}.v-application .shades.white{background-color:#fff !important;border-color:#fff !important}.v-application .shades--text.text--white{color:#fff !important;caret-color:#fff !important}.v-application .shades.transparent{background-color:transparent !important;border-color:transparent !important}.v-application .shades--text.text--transparent{color:transparent !important;caret-color:transparent !important}/*!\n * ress.css • v2.0.4\n * MIT License\n * github.com/filipelinhares/ress\n */html{box-sizing:border-box;overflow-y:scroll;-webkit-text-size-adjust:100%;word-break:normal;-moz-tab-size:4;tab-size:4}*,::before,::after{background-repeat:no-repeat;box-sizing:inherit}::before,::after{text-decoration:inherit;vertical-align:inherit}*{padding:0;margin:0}hr{overflow:visible;height:0}details,main{display:block}summary{display:list-item}small{font-size:80%}[hidden]{display:none}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}a{background-color:transparent}a:active,a:hover{outline-width:0}code,kbd,pre,samp{font-family:monospace,monospace}pre{font-size:1em}b,strong{font-weight:bolder}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}input{border-radius:0}[disabled]{cursor:default}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}textarea{overflow:auto;resize:vertical}button,input,optgroup,select,textarea{font:inherit}optgroup{font-weight:bold}button{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit],[role=button]{cursor:pointer;color:inherit}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{outline:1px dotted ButtonText}button,html [type=button],[type=reset],[type=submit]{-webkit-appearance:button}button,input,select,textarea{background-color:transparent;border-style:none}select{-moz-appearance:none;-webkit-appearance:none}select::-ms-expand{display:none}select::-ms-value{color:currentColor}legend{border:0;color:inherit;display:table;max-width:100%;white-space:normal;max-width:100%}::-webkit-file-upload-button{-webkit-appearance:button;color:inherit;font:inherit}img{border-style:none}progress{vertical-align:baseline}@media screen{[hidden~=screen]{display:inherit}[hidden~=screen]:not(:active):not(:focus):not(:target){position:absolute !important;clip:rect(0 0 0 0) !important}}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-disabled=true]{cursor:default}.v-application .elevation-24{box-shadow:0px 11px 15px -7px rgba(0,0,0,.2),0px 24px 38px 3px rgba(0,0,0,.14),0px 9px 46px 8px rgba(0,0,0,.12) !important}.v-application .elevation-23{box-shadow:0px 11px 14px -7px rgba(0,0,0,.2),0px 23px 36px 3px rgba(0,0,0,.14),0px 9px 44px 8px rgba(0,0,0,.12) !important}.v-application .elevation-22{box-shadow:0px 10px 14px -6px rgba(0,0,0,.2),0px 22px 35px 3px rgba(0,0,0,.14),0px 8px 42px 7px rgba(0,0,0,.12) !important}.v-application .elevation-21{box-shadow:0px 10px 13px -6px rgba(0,0,0,.2),0px 21px 33px 3px rgba(0,0,0,.14),0px 8px 40px 7px rgba(0,0,0,.12) !important}.v-application .elevation-20{box-shadow:0px 10px 13px -6px rgba(0,0,0,.2),0px 20px 31px 3px rgba(0,0,0,.14),0px 8px 38px 7px rgba(0,0,0,.12) !important}.v-application .elevation-19{box-shadow:0px 9px 12px -6px rgba(0,0,0,.2),0px 19px 29px 2px rgba(0,0,0,.14),0px 7px 36px 6px rgba(0,0,0,.12) !important}.v-application .elevation-18{box-shadow:0px 9px 11px -5px rgba(0,0,0,.2),0px 18px 28px 2px rgba(0,0,0,.14),0px 7px 34px 6px rgba(0,0,0,.12) !important}.v-application .elevation-17{box-shadow:0px 8px 11px -5px rgba(0,0,0,.2),0px 17px 26px 2px rgba(0,0,0,.14),0px 6px 32px 5px rgba(0,0,0,.12) !important}.v-application .elevation-16{box-shadow:0px 8px 10px -5px rgba(0,0,0,.2),0px 16px 24px 2px rgba(0,0,0,.14),0px 6px 30px 5px rgba(0,0,0,.12) !important}.v-application .elevation-15{box-shadow:0px 8px 9px -5px rgba(0,0,0,.2),0px 15px 22px 2px rgba(0,0,0,.14),0px 6px 28px 5px rgba(0,0,0,.12) !important}.v-application .elevation-14{box-shadow:0px 7px 9px -4px rgba(0,0,0,.2),0px 14px 21px 2px rgba(0,0,0,.14),0px 5px 26px 4px rgba(0,0,0,.12) !important}.v-application .elevation-13{box-shadow:0px 7px 8px -4px rgba(0,0,0,.2),0px 13px 19px 2px rgba(0,0,0,.14),0px 5px 24px 4px rgba(0,0,0,.12) !important}.v-application .elevation-12{box-shadow:0px 7px 8px -4px rgba(0,0,0,.2),0px 12px 17px 2px rgba(0,0,0,.14),0px 5px 22px 4px rgba(0,0,0,.12) !important}.v-application .elevation-11{box-shadow:0px 6px 7px -4px rgba(0,0,0,.2),0px 11px 15px 1px rgba(0,0,0,.14),0px 4px 20px 3px rgba(0,0,0,.12) !important}.v-application .elevation-10{box-shadow:0px 6px 6px -3px rgba(0,0,0,.2),0px 10px 14px 1px rgba(0,0,0,.14),0px 4px 18px 3px rgba(0,0,0,.12) !important}.v-application .elevation-9{box-shadow:0px 5px 6px -3px rgba(0,0,0,.2),0px 9px 12px 1px rgba(0,0,0,.14),0px 3px 16px 2px rgba(0,0,0,.12) !important}.v-application .elevation-8{box-shadow:0px 5px 5px -3px rgba(0,0,0,.2),0px 8px 10px 1px rgba(0,0,0,.14),0px 3px 14px 2px rgba(0,0,0,.12) !important}.v-application .elevation-7{box-shadow:0px 4px 5px -2px rgba(0,0,0,.2),0px 7px 10px 1px rgba(0,0,0,.14),0px 2px 16px 1px rgba(0,0,0,.12) !important}.v-application .elevation-6{box-shadow:0px 3px 5px -1px rgba(0,0,0,.2),0px 6px 10px 0px rgba(0,0,0,.14),0px 1px 18px 0px rgba(0,0,0,.12) !important}.v-application .elevation-5{box-shadow:0px 3px 5px -1px rgba(0,0,0,.2),0px 5px 8px 0px rgba(0,0,0,.14),0px 1px 14px 0px rgba(0,0,0,.12) !important}.v-application .elevation-4{box-shadow:0px 2px 4px -1px rgba(0,0,0,.2),0px 4px 5px 0px rgba(0,0,0,.14),0px 1px 10px 0px rgba(0,0,0,.12) !important}.v-application .elevation-3{box-shadow:0px 3px 3px -2px rgba(0,0,0,.2),0px 3px 4px 0px rgba(0,0,0,.14),0px 1px 8px 0px rgba(0,0,0,.12) !important}.v-application .elevation-2{box-shadow:0px 3px 1px -2px rgba(0,0,0,.2),0px 2px 2px 0px rgba(0,0,0,.14),0px 1px 5px 0px rgba(0,0,0,.12) !important}.v-application .elevation-1{box-shadow:0px 2px 1px -1px rgba(0,0,0,.2),0px 1px 1px 0px rgba(0,0,0,.14),0px 1px 3px 0px rgba(0,0,0,.12) !important}.v-application .elevation-0{box-shadow:0px 0px 0px 0px rgba(0,0,0,.2),0px 0px 0px 0px rgba(0,0,0,.14),0px 0px 0px 0px rgba(0,0,0,.12) !important}.carousel-transition-enter{transform:translate(100%, 0)}.carousel-transition-leave,.carousel-transition-leave-to{position:absolute;top:0;transform:translate(-100%, 0)}.carousel-reverse-transition-enter{transform:translate(-100%, 0)}.carousel-reverse-transition-leave,.carousel-reverse-transition-leave-to{position:absolute;top:0;transform:translate(100%, 0)}.dialog-transition-enter-active,.dialog-transition-leave-active{pointer-events:none !important}.dialog-transition-enter,.dialog-transition-leave-to{transform:scale(0.5);opacity:0}.dialog-transition-enter-to,.dialog-transition-leave{opacity:1}.dialog-bottom-transition-enter,.dialog-bottom-transition-leave-to{transform:translateY(100%)}.dialog-top-transition-enter,.dialog-top-transition-leave-to{transform:translateY(-100%)}.picker-transition-enter-active,.picker-transition-leave-active,.picker-reverse-transition-enter-active,.picker-reverse-transition-leave-active{transition:.3s cubic-bezier(0, 0, 0.2, 1)}.picker-transition-enter,.picker-transition-leave-to,.picker-reverse-transition-enter,.picker-reverse-transition-leave-to{opacity:0}.picker-transition-leave,.picker-transition-leave-active,.picker-transition-leave-to,.picker-reverse-transition-leave,.picker-reverse-transition-leave-active,.picker-reverse-transition-leave-to{position:absolute !important}.picker-transition-enter{transform:translate(0, 100%)}.picker-transition-leave-to{transform:translate(0, -100%)}.picker-reverse-transition-enter{transform:translate(0, -100%)}.picker-reverse-transition-leave-to{transform:translate(0, 100%)}.picker-title-transition-enter-to,.picker-title-transition-leave{transform:translate(0, 0)}.picker-title-transition-enter{transform:translate(-100%, 0)}.picker-title-transition-leave-to{opacity:0;transform:translate(100%, 0)}.picker-title-transition-leave,.picker-title-transition-leave-to,.picker-title-transition-leave-active{position:absolute !important}.tab-transition-enter{transform:translate(100%, 0)}.tab-transition-leave,.tab-transition-leave-active{position:absolute;top:0}.tab-transition-leave-to{position:absolute;transform:translate(-100%, 0)}.tab-reverse-transition-enter{transform:translate(-100%, 0)}.tab-reverse-transition-leave,.tab-reverse-transition-leave-to{top:0;position:absolute;transform:translate(100%, 0)}.expand-transition-enter-active,.expand-transition-leave-active{transition:.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important}.expand-transition-move{transition:transform .6s}.expand-x-transition-enter-active,.expand-x-transition-leave-active{transition:.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important}.expand-x-transition-move{transition:transform .6s}.scale-transition-enter-active,.scale-transition-leave-active{transition:.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important}.scale-transition-move{transition:transform .6s}.scale-transition-enter,.scale-transition-leave,.scale-transition-leave-to{opacity:0;transform:scale(0)}.scale-rotate-transition-enter-active,.scale-rotate-transition-leave-active{transition:.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important}.scale-rotate-transition-move{transition:transform .6s}.scale-rotate-transition-enter,.scale-rotate-transition-leave,.scale-rotate-transition-leave-to{opacity:0;transform:scale(0) rotate(-45deg)}.scale-rotate-reverse-transition-enter-active,.scale-rotate-reverse-transition-leave-active{transition:.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important}.scale-rotate-reverse-transition-move{transition:transform .6s}.scale-rotate-reverse-transition-enter,.scale-rotate-reverse-transition-leave,.scale-rotate-reverse-transition-leave-to{opacity:0;transform:scale(0) rotate(45deg)}.message-transition-enter-active,.message-transition-leave-active{transition:.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important}.message-transition-move{transition:transform .6s}.message-transition-enter,.message-transition-leave-to{opacity:0;transform:translateY(-15px)}.message-transition-leave,.message-transition-leave-active{position:absolute}.slide-y-transition-enter-active,.slide-y-transition-leave-active{transition:.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important}.slide-y-transition-move{transition:transform .6s}.slide-y-transition-enter,.slide-y-transition-leave-to{opacity:0;transform:translateY(-15px)}.slide-y-reverse-transition-enter-active,.slide-y-reverse-transition-leave-active{transition:.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important}.slide-y-reverse-transition-move{transition:transform .6s}.slide-y-reverse-transition-enter,.slide-y-reverse-transition-leave-to{opacity:0;transform:translateY(15px)}.scroll-y-transition-enter-active,.scroll-y-transition-leave-active{transition:.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important}.scroll-y-transition-move{transition:transform .6s}.scroll-y-transition-enter,.scroll-y-transition-leave-to{opacity:0}.scroll-y-transition-enter{transform:translateY(-15px)}.scroll-y-transition-leave-to{transform:translateY(15px)}.scroll-y-reverse-transition-enter-active,.scroll-y-reverse-transition-leave-active{transition:.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important}.scroll-y-reverse-transition-move{transition:transform .6s}.scroll-y-reverse-transition-enter,.scroll-y-reverse-transition-leave-to{opacity:0}.scroll-y-reverse-transition-enter{transform:translateY(15px)}.scroll-y-reverse-transition-leave-to{transform:translateY(-15px)}.scroll-x-transition-enter-active,.scroll-x-transition-leave-active{transition:.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important}.scroll-x-transition-move{transition:transform .6s}.scroll-x-transition-enter,.scroll-x-transition-leave-to{opacity:0}.scroll-x-transition-enter{transform:translateX(-15px)}.scroll-x-transition-leave-to{transform:translateX(15px)}.scroll-x-reverse-transition-enter-active,.scroll-x-reverse-transition-leave-active{transition:.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important}.scroll-x-reverse-transition-move{transition:transform .6s}.scroll-x-reverse-transition-enter,.scroll-x-reverse-transition-leave-to{opacity:0}.scroll-x-reverse-transition-enter{transform:translateX(15px)}.scroll-x-reverse-transition-leave-to{transform:translateX(-15px)}.slide-x-transition-enter-active,.slide-x-transition-leave-active{transition:.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important}.slide-x-transition-move{transition:transform .6s}.slide-x-transition-enter,.slide-x-transition-leave-to{opacity:0;transform:translateX(-15px)}.slide-x-reverse-transition-enter-active,.slide-x-reverse-transition-leave-active{transition:.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important}.slide-x-reverse-transition-move{transition:transform .6s}.slide-x-reverse-transition-enter,.slide-x-reverse-transition-leave-to{opacity:0;transform:translateX(15px)}.fade-transition-enter-active,.fade-transition-leave-active{transition:.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important}.fade-transition-move{transition:transform .6s}.fade-transition-enter,.fade-transition-leave-to{opacity:0 !important}.fab-transition-enter-active,.fab-transition-leave-active{transition:.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important}.fab-transition-move{transition:transform .6s}.fab-transition-enter,.fab-transition-leave-to{transform:scale(0) rotate(-45deg)}.v-application .blockquote{padding:16px 0 16px 24px;font-size:18px;font-weight:300}.v-application code,.v-application kbd{border-radius:3px;font-size:85%;font-weight:normal}.v-application code{padding:.2em .4em}.v-application kbd{padding:.2em .4rem;box-shadow:0px 3px 1px -2px rgba(0,0,0,.2),0px 2px 2px 0px rgba(0,0,0,.14),0px 1px 5px 0px rgba(0,0,0,.12)}.theme--light.v-application code{background-color:rgba(0,0,0,.05);color:currentColor}.theme--light.v-application kbd{background:#212529;color:#fff}.theme--dark.v-application code{background-color:rgba(255,255,255,.1);color:currentColor}.theme--dark.v-application kbd{background:#212529;color:#fff}html{font-size:16px;overflow-x:hidden;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:rgba(0,0,0,0)}html.overflow-y-hidden{overflow-y:hidden !important}.v-application{font-family:\"Roboto\",sans-serif;line-height:1.5}.v-application ::-ms-clear,.v-application ::-ms-reveal{display:none}@supports(-webkit-touch-callout: none){body{cursor:pointer}}.v-application .theme--light.heading{color:rgba(0,0,0,.87)}.v-application .theme--dark.heading{color:#fff}.v-application ul,.v-application ol{padding-left:24px}.v-application .display-4{font-size:6rem !important;font-weight:300;line-height:6rem;letter-spacing:-0.015625em !important;font-family:\"Roboto\",sans-serif !important}.v-application .display-3{font-size:3.75rem !important;font-weight:300;line-height:3.75rem;letter-spacing:-0.0083333333em !important;font-family:\"Roboto\",sans-serif !important}.v-application .display-2{font-size:3rem !important;font-weight:400;line-height:3.125rem;letter-spacing:normal !important;font-family:\"Roboto\",sans-serif !important}.v-application .display-1{font-size:2.125rem !important;font-weight:400;line-height:2.5rem;letter-spacing:.0073529412em !important;font-family:\"Roboto\",sans-serif !important}.v-application .headline{font-size:1.5rem !important;font-weight:400;line-height:2rem;letter-spacing:normal !important;font-family:\"Roboto\",sans-serif !important}.v-application .title{font-size:1.25rem !important;font-weight:500;line-height:2rem;letter-spacing:.0125em !important;font-family:\"Roboto\",sans-serif !important}.v-application .subtitle-2{font-size:.875rem !important;font-weight:500;letter-spacing:.0071428571em !important;line-height:1.375rem;font-family:\"Roboto\",sans-serif !important}.v-application .subtitle-1{font-size:1rem !important;font-weight:normal;letter-spacing:.009375em !important;line-height:1.75rem;font-family:\"Roboto\",sans-serif !important}.v-application .body-2{font-size:.875rem !important;font-weight:400;letter-spacing:.0178571429em !important;line-height:1.25rem;font-family:\"Roboto\",sans-serif !important}.v-application .body-1{font-size:1rem !important;font-weight:400;letter-spacing:.03125em !important;line-height:1.5rem;font-family:\"Roboto\",sans-serif !important}.v-application .caption{font-size:.75rem !important;font-weight:400;letter-spacing:.0333333333em !important;line-height:1.25rem;font-family:\"Roboto\",sans-serif !important}.v-application .overline{font-size:.75rem !important;font-weight:500;letter-spacing:.1666666667em !important;line-height:2rem;text-transform:uppercase;font-family:\"Roboto\",sans-serif !important}.v-application p{margin-bottom:16px}@media only print{.v-application .hidden-print-only{display:none !important}}@media only screen{.v-application .hidden-screen-only{display:none !important}}@media only screen and (max-width: 599.98px){.v-application .hidden-xs-only{display:none !important}}@media only screen and (min-width: 600px)and (max-width: 959.98px){.v-application .hidden-sm-only{display:none !important}}@media only screen and (max-width: 959.98px){.v-application .hidden-sm-and-down{display:none !important}}@media only screen and (min-width: 600px){.v-application .hidden-sm-and-up{display:none !important}}@media only screen and (min-width: 960px)and (max-width: 1263.98px){.v-application .hidden-md-only{display:none !important}}@media only screen and (max-width: 1263.98px){.v-application .hidden-md-and-down{display:none !important}}@media only screen and (min-width: 960px){.v-application .hidden-md-and-up{display:none !important}}@media only screen and (min-width: 1264px)and (max-width: 1903.98px){.v-application .hidden-lg-only{display:none !important}}@media only screen and (max-width: 1903.98px){.v-application .hidden-lg-and-down{display:none !important}}@media only screen and (min-width: 1264px){.v-application .hidden-lg-and-up{display:none !important}}@media only screen and (min-width: 1904px){.v-application .hidden-xl-only{display:none !important}}.d-sr-only,.d-sr-only-focusable:not(:focus){border:0 !important;clip:rect(0, 0, 0, 0) !important;height:1px !important;margin:-1px !important;overflow:hidden !important;padding:0 !important;position:absolute !important;white-space:nowrap !important;width:1px !important}.v-application .font-weight-thin{font-weight:100 !important}.v-application .font-weight-light{font-weight:300 !important}.v-application .font-weight-regular{font-weight:400 !important}.v-application .font-weight-medium{font-weight:500 !important}.v-application .font-weight-bold{font-weight:700 !important}.v-application .font-weight-black{font-weight:900 !important}.v-application .font-italic{font-style:italic !important}.v-application .transition-fast-out-slow-in{transition:.3s cubic-bezier(0.4, 0, 0.2, 1) !important}.v-application .transition-linear-out-slow-in{transition:.3s cubic-bezier(0, 0, 0.2, 1) !important}.v-application .transition-fast-out-linear-in{transition:.3s cubic-bezier(0.4, 0, 1, 1) !important}.v-application .transition-ease-in-out{transition:.3s cubic-bezier(0.4, 0, 0.6, 1) !important}.v-application .transition-fast-in-fast-out{transition:.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important}.v-application .transition-swing{transition:.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important}.v-application .overflow-auto{overflow:auto !important}.v-application .overflow-hidden{overflow:hidden !important}.v-application .overflow-visible{overflow:visible !important}.v-application .overflow-x-auto{overflow-x:auto !important}.v-application .overflow-x-hidden{overflow-x:hidden !important}.v-application .overflow-y-auto{overflow-y:auto !important}.v-application .overflow-y-hidden{overflow-y:hidden !important}.v-application .d-none{display:none !important}.v-application .d-inline{display:inline !important}.v-application .d-inline-block{display:inline-block !important}.v-application .d-block{display:block !important}.v-application .d-table{display:table !important}.v-application .d-table-row{display:table-row !important}.v-application .d-table-cell{display:table-cell !important}.v-application .d-flex{display:flex !important}.v-application .d-inline-flex{display:inline-flex !important}.v-application .float-none{float:none !important}.v-application .float-left{float:left !important}.v-application .float-right{float:right !important}.v-application--is-rtl .float-end{float:left !important}.v-application--is-rtl .float-start{float:right !important}.v-application--is-ltr .float-end{float:right !important}.v-application--is-ltr .float-start{float:left !important}.v-application .flex-fill{flex:1 1 auto !important}.v-application .flex-row{flex-direction:row !important}.v-application .flex-column{flex-direction:column !important}.v-application .flex-row-reverse{flex-direction:row-reverse !important}.v-application .flex-column-reverse{flex-direction:column-reverse !important}.v-application .flex-grow-0{flex-grow:0 !important}.v-application .flex-grow-1{flex-grow:1 !important}.v-application .flex-shrink-0{flex-shrink:0 !important}.v-application .flex-shrink-1{flex-shrink:1 !important}.v-application .flex-wrap{flex-wrap:wrap !important}.v-application .flex-nowrap{flex-wrap:nowrap !important}.v-application .flex-wrap-reverse{flex-wrap:wrap-reverse !important}.v-application .justify-start{justify-content:flex-start !important}.v-application .justify-end{justify-content:flex-end !important}.v-application .justify-center{justify-content:center !important}.v-application .justify-space-between{justify-content:space-between !important}.v-application .justify-space-around{justify-content:space-around !important}.v-application .align-start{align-items:flex-start !important}.v-application .align-end{align-items:flex-end !important}.v-application .align-center{align-items:center !important}.v-application .align-baseline{align-items:baseline !important}.v-application .align-stretch{align-items:stretch !important}.v-application .align-content-start{align-content:flex-start !important}.v-application .align-content-end{align-content:flex-end !important}.v-application .align-content-center{align-content:center !important}.v-application .align-content-space-between{align-content:space-between !important}.v-application .align-content-space-around{align-content:space-around !important}.v-application .align-content-stretch{align-content:stretch !important}.v-application .align-self-auto{align-self:auto !important}.v-application .align-self-start{align-self:flex-start !important}.v-application .align-self-end{align-self:flex-end !important}.v-application .align-self-center{align-self:center !important}.v-application .align-self-baseline{align-self:baseline !important}.v-application .align-self-stretch{align-self:stretch !important}.v-application .order-first{order:-1 !important}.v-application .order-0{order:0 !important}.v-application .order-1{order:1 !important}.v-application .order-2{order:2 !important}.v-application .order-3{order:3 !important}.v-application .order-4{order:4 !important}.v-application .order-5{order:5 !important}.v-application .order-6{order:6 !important}.v-application .order-7{order:7 !important}.v-application .order-8{order:8 !important}.v-application .order-9{order:9 !important}.v-application .order-10{order:10 !important}.v-application .order-11{order:11 !important}.v-application .order-12{order:12 !important}.v-application .order-last{order:13 !important}.v-application .ma-0{margin:0px !important}.v-application .ma-1{margin:4px !important}.v-application .ma-2{margin:8px !important}.v-application .ma-3{margin:12px !important}.v-application .ma-4{margin:16px !important}.v-application .ma-5{margin:20px !important}.v-application .ma-6{margin:24px !important}.v-application .ma-7{margin:28px !important}.v-application .ma-8{margin:32px !important}.v-application .ma-9{margin:36px !important}.v-application .ma-10{margin:40px !important}.v-application .ma-11{margin:44px !important}.v-application .ma-12{margin:48px !important}.v-application .ma-13{margin:52px !important}.v-application .ma-14{margin:56px !important}.v-application .ma-15{margin:60px !important}.v-application .ma-16{margin:64px !important}.v-application .ma-auto{margin:auto !important}.v-application .mx-0{margin-right:0px !important;margin-left:0px !important}.v-application .mx-1{margin-right:4px !important;margin-left:4px !important}.v-application .mx-2{margin-right:8px !important;margin-left:8px !important}.v-application .mx-3{margin-right:12px !important;margin-left:12px !important}.v-application .mx-4{margin-right:16px !important;margin-left:16px !important}.v-application .mx-5{margin-right:20px !important;margin-left:20px !important}.v-application .mx-6{margin-right:24px !important;margin-left:24px !important}.v-application .mx-7{margin-right:28px !important;margin-left:28px !important}.v-application .mx-8{margin-right:32px !important;margin-left:32px !important}.v-application .mx-9{margin-right:36px !important;margin-left:36px !important}.v-application .mx-10{margin-right:40px !important;margin-left:40px !important}.v-application .mx-11{margin-right:44px !important;margin-left:44px !important}.v-application .mx-12{margin-right:48px !important;margin-left:48px !important}.v-application .mx-13{margin-right:52px !important;margin-left:52px !important}.v-application .mx-14{margin-right:56px !important;margin-left:56px !important}.v-application .mx-15{margin-right:60px !important;margin-left:60px !important}.v-application .mx-16{margin-right:64px !important;margin-left:64px !important}.v-application .mx-auto{margin-right:auto !important;margin-left:auto !important}.v-application .my-0{margin-top:0px !important;margin-bottom:0px !important}.v-application .my-1{margin-top:4px !important;margin-bottom:4px !important}.v-application .my-2{margin-top:8px !important;margin-bottom:8px !important}.v-application .my-3{margin-top:12px !important;margin-bottom:12px !important}.v-application .my-4{margin-top:16px !important;margin-bottom:16px !important}.v-application .my-5{margin-top:20px !important;margin-bottom:20px !important}.v-application .my-6{margin-top:24px !important;margin-bottom:24px !important}.v-application .my-7{margin-top:28px !important;margin-bottom:28px !important}.v-application .my-8{margin-top:32px !important;margin-bottom:32px !important}.v-application .my-9{margin-top:36px !important;margin-bottom:36px !important}.v-application .my-10{margin-top:40px !important;margin-bottom:40px !important}.v-application .my-11{margin-top:44px !important;margin-bottom:44px !important}.v-application .my-12{margin-top:48px !important;margin-bottom:48px !important}.v-application .my-13{margin-top:52px !important;margin-bottom:52px !important}.v-application .my-14{margin-top:56px !important;margin-bottom:56px !important}.v-application .my-15{margin-top:60px !important;margin-bottom:60px !important}.v-application .my-16{margin-top:64px !important;margin-bottom:64px !important}.v-application .my-auto{margin-top:auto !important;margin-bottom:auto !important}.v-application .mt-0{margin-top:0px !important}.v-application .mt-1{margin-top:4px !important}.v-application .mt-2{margin-top:8px !important}.v-application .mt-3{margin-top:12px !important}.v-application .mt-4{margin-top:16px !important}.v-application .mt-5{margin-top:20px !important}.v-application .mt-6{margin-top:24px !important}.v-application .mt-7{margin-top:28px !important}.v-application .mt-8{margin-top:32px !important}.v-application .mt-9{margin-top:36px !important}.v-application .mt-10{margin-top:40px !important}.v-application .mt-11{margin-top:44px !important}.v-application .mt-12{margin-top:48px !important}.v-application .mt-13{margin-top:52px !important}.v-application .mt-14{margin-top:56px !important}.v-application .mt-15{margin-top:60px !important}.v-application .mt-16{margin-top:64px !important}.v-application .mt-auto{margin-top:auto !important}.v-application .mr-0{margin-right:0px !important}.v-application .mr-1{margin-right:4px !important}.v-application .mr-2{margin-right:8px !important}.v-application .mr-3{margin-right:12px !important}.v-application .mr-4{margin-right:16px !important}.v-application .mr-5{margin-right:20px !important}.v-application .mr-6{margin-right:24px !important}.v-application .mr-7{margin-right:28px !important}.v-application .mr-8{margin-right:32px !important}.v-application .mr-9{margin-right:36px !important}.v-application .mr-10{margin-right:40px !important}.v-application .mr-11{margin-right:44px !important}.v-application .mr-12{margin-right:48px !important}.v-application .mr-13{margin-right:52px !important}.v-application .mr-14{margin-right:56px !important}.v-application .mr-15{margin-right:60px !important}.v-application .mr-16{margin-right:64px !important}.v-application .mr-auto{margin-right:auto !important}.v-application .mb-0{margin-bottom:0px !important}.v-application .mb-1{margin-bottom:4px !important}.v-application .mb-2{margin-bottom:8px !important}.v-application .mb-3{margin-bottom:12px !important}.v-application .mb-4{margin-bottom:16px !important}.v-application .mb-5{margin-bottom:20px !important}.v-application .mb-6{margin-bottom:24px !important}.v-application .mb-7{margin-bottom:28px !important}.v-application .mb-8{margin-bottom:32px !important}.v-application .mb-9{margin-bottom:36px !important}.v-application .mb-10{margin-bottom:40px !important}.v-application .mb-11{margin-bottom:44px !important}.v-application .mb-12{margin-bottom:48px !important}.v-application .mb-13{margin-bottom:52px !important}.v-application .mb-14{margin-bottom:56px !important}.v-application .mb-15{margin-bottom:60px !important}.v-application .mb-16{margin-bottom:64px !important}.v-application .mb-auto{margin-bottom:auto !important}.v-application .ml-0{margin-left:0px !important}.v-application .ml-1{margin-left:4px !important}.v-application .ml-2{margin-left:8px !important}.v-application .ml-3{margin-left:12px !important}.v-application .ml-4{margin-left:16px !important}.v-application .ml-5{margin-left:20px !important}.v-application .ml-6{margin-left:24px !important}.v-application .ml-7{margin-left:28px !important}.v-application .ml-8{margin-left:32px !important}.v-application .ml-9{margin-left:36px !important}.v-application .ml-10{margin-left:40px !important}.v-application .ml-11{margin-left:44px !important}.v-application .ml-12{margin-left:48px !important}.v-application .ml-13{margin-left:52px !important}.v-application .ml-14{margin-left:56px !important}.v-application .ml-15{margin-left:60px !important}.v-application .ml-16{margin-left:64px !important}.v-application .ml-auto{margin-left:auto !important}.v-application--is-ltr .ms-0{margin-left:0px !important}.v-application--is-rtl .ms-0{margin-right:0px !important}.v-application--is-ltr .ms-1{margin-left:4px !important}.v-application--is-rtl .ms-1{margin-right:4px !important}.v-application--is-ltr .ms-2{margin-left:8px !important}.v-application--is-rtl .ms-2{margin-right:8px !important}.v-application--is-ltr .ms-3{margin-left:12px !important}.v-application--is-rtl .ms-3{margin-right:12px !important}.v-application--is-ltr .ms-4{margin-left:16px !important}.v-application--is-rtl .ms-4{margin-right:16px !important}.v-application--is-ltr .ms-5{margin-left:20px !important}.v-application--is-rtl .ms-5{margin-right:20px !important}.v-application--is-ltr .ms-6{margin-left:24px !important}.v-application--is-rtl .ms-6{margin-right:24px !important}.v-application--is-ltr .ms-7{margin-left:28px !important}.v-application--is-rtl .ms-7{margin-right:28px !important}.v-application--is-ltr .ms-8{margin-left:32px !important}.v-application--is-rtl .ms-8{margin-right:32px !important}.v-application--is-ltr .ms-9{margin-left:36px !important}.v-application--is-rtl .ms-9{margin-right:36px !important}.v-application--is-ltr .ms-10{margin-left:40px !important}.v-application--is-rtl .ms-10{margin-right:40px !important}.v-application--is-ltr .ms-11{margin-left:44px !important}.v-application--is-rtl .ms-11{margin-right:44px !important}.v-application--is-ltr .ms-12{margin-left:48px !important}.v-application--is-rtl .ms-12{margin-right:48px !important}.v-application--is-ltr .ms-13{margin-left:52px !important}.v-application--is-rtl .ms-13{margin-right:52px !important}.v-application--is-ltr .ms-14{margin-left:56px !important}.v-application--is-rtl .ms-14{margin-right:56px !important}.v-application--is-ltr .ms-15{margin-left:60px !important}.v-application--is-rtl .ms-15{margin-right:60px !important}.v-application--is-ltr .ms-16{margin-left:64px !important}.v-application--is-rtl .ms-16{margin-right:64px !important}.v-application--is-ltr .ms-auto{margin-left:auto !important}.v-application--is-rtl .ms-auto{margin-right:auto !important}.v-application--is-ltr .me-0{margin-right:0px !important}.v-application--is-rtl .me-0{margin-left:0px !important}.v-application--is-ltr .me-1{margin-right:4px !important}.v-application--is-rtl .me-1{margin-left:4px !important}.v-application--is-ltr .me-2{margin-right:8px !important}.v-application--is-rtl .me-2{margin-left:8px !important}.v-application--is-ltr .me-3{margin-right:12px !important}.v-application--is-rtl .me-3{margin-left:12px !important}.v-application--is-ltr .me-4{margin-right:16px !important}.v-application--is-rtl .me-4{margin-left:16px !important}.v-application--is-ltr .me-5{margin-right:20px !important}.v-application--is-rtl .me-5{margin-left:20px !important}.v-application--is-ltr .me-6{margin-right:24px !important}.v-application--is-rtl .me-6{margin-left:24px !important}.v-application--is-ltr .me-7{margin-right:28px !important}.v-application--is-rtl .me-7{margin-left:28px !important}.v-application--is-ltr .me-8{margin-right:32px !important}.v-application--is-rtl .me-8{margin-left:32px !important}.v-application--is-ltr .me-9{margin-right:36px !important}.v-application--is-rtl .me-9{margin-left:36px !important}.v-application--is-ltr .me-10{margin-right:40px !important}.v-application--is-rtl .me-10{margin-left:40px !important}.v-application--is-ltr .me-11{margin-right:44px !important}.v-application--is-rtl .me-11{margin-left:44px !important}.v-application--is-ltr .me-12{margin-right:48px !important}.v-application--is-rtl .me-12{margin-left:48px !important}.v-application--is-ltr .me-13{margin-right:52px !important}.v-application--is-rtl .me-13{margin-left:52px !important}.v-application--is-ltr .me-14{margin-right:56px !important}.v-application--is-rtl .me-14{margin-left:56px !important}.v-application--is-ltr .me-15{margin-right:60px !important}.v-application--is-rtl .me-15{margin-left:60px !important}.v-application--is-ltr .me-16{margin-right:64px !important}.v-application--is-rtl .me-16{margin-left:64px !important}.v-application--is-ltr .me-auto{margin-right:auto !important}.v-application--is-rtl .me-auto{margin-left:auto !important}.v-application .ma-n1{margin:-4px !important}.v-application .ma-n2{margin:-8px !important}.v-application .ma-n3{margin:-12px !important}.v-application .ma-n4{margin:-16px !important}.v-application .ma-n5{margin:-20px !important}.v-application .ma-n6{margin:-24px !important}.v-application .ma-n7{margin:-28px !important}.v-application .ma-n8{margin:-32px !important}.v-application .ma-n9{margin:-36px !important}.v-application .ma-n10{margin:-40px !important}.v-application .ma-n11{margin:-44px !important}.v-application .ma-n12{margin:-48px !important}.v-application .ma-n13{margin:-52px !important}.v-application .ma-n14{margin:-56px !important}.v-application .ma-n15{margin:-60px !important}.v-application .ma-n16{margin:-64px !important}.v-application .mx-n1{margin-right:-4px !important;margin-left:-4px !important}.v-application .mx-n2{margin-right:-8px !important;margin-left:-8px !important}.v-application .mx-n3{margin-right:-12px !important;margin-left:-12px !important}.v-application .mx-n4{margin-right:-16px !important;margin-left:-16px !important}.v-application .mx-n5{margin-right:-20px !important;margin-left:-20px !important}.v-application .mx-n6{margin-right:-24px !important;margin-left:-24px !important}.v-application .mx-n7{margin-right:-28px !important;margin-left:-28px !important}.v-application .mx-n8{margin-right:-32px !important;margin-left:-32px !important}.v-application .mx-n9{margin-right:-36px !important;margin-left:-36px !important}.v-application .mx-n10{margin-right:-40px !important;margin-left:-40px !important}.v-application .mx-n11{margin-right:-44px !important;margin-left:-44px !important}.v-application .mx-n12{margin-right:-48px !important;margin-left:-48px !important}.v-application .mx-n13{margin-right:-52px !important;margin-left:-52px !important}.v-application .mx-n14{margin-right:-56px !important;margin-left:-56px !important}.v-application .mx-n15{margin-right:-60px !important;margin-left:-60px !important}.v-application .mx-n16{margin-right:-64px !important;margin-left:-64px !important}.v-application .my-n1{margin-top:-4px !important;margin-bottom:-4px !important}.v-application .my-n2{margin-top:-8px !important;margin-bottom:-8px !important}.v-application .my-n3{margin-top:-12px !important;margin-bottom:-12px !important}.v-application .my-n4{margin-top:-16px !important;margin-bottom:-16px !important}.v-application .my-n5{margin-top:-20px !important;margin-bottom:-20px !important}.v-application .my-n6{margin-top:-24px !important;margin-bottom:-24px !important}.v-application .my-n7{margin-top:-28px !important;margin-bottom:-28px !important}.v-application .my-n8{margin-top:-32px !important;margin-bottom:-32px !important}.v-application .my-n9{margin-top:-36px !important;margin-bottom:-36px !important}.v-application .my-n10{margin-top:-40px !important;margin-bottom:-40px !important}.v-application .my-n11{margin-top:-44px !important;margin-bottom:-44px !important}.v-application .my-n12{margin-top:-48px !important;margin-bottom:-48px !important}.v-application .my-n13{margin-top:-52px !important;margin-bottom:-52px !important}.v-application .my-n14{margin-top:-56px !important;margin-bottom:-56px !important}.v-application .my-n15{margin-top:-60px !important;margin-bottom:-60px !important}.v-application .my-n16{margin-top:-64px !important;margin-bottom:-64px !important}.v-application .mt-n1{margin-top:-4px !important}.v-application .mt-n2{margin-top:-8px !important}.v-application .mt-n3{margin-top:-12px !important}.v-application .mt-n4{margin-top:-16px !important}.v-application .mt-n5{margin-top:-20px !important}.v-application .mt-n6{margin-top:-24px !important}.v-application .mt-n7{margin-top:-28px !important}.v-application .mt-n8{margin-top:-32px !important}.v-application .mt-n9{margin-top:-36px !important}.v-application .mt-n10{margin-top:-40px !important}.v-application .mt-n11{margin-top:-44px !important}.v-application .mt-n12{margin-top:-48px !important}.v-application .mt-n13{margin-top:-52px !important}.v-application .mt-n14{margin-top:-56px !important}.v-application .mt-n15{margin-top:-60px !important}.v-application .mt-n16{margin-top:-64px !important}.v-application .mr-n1{margin-right:-4px !important}.v-application .mr-n2{margin-right:-8px !important}.v-application .mr-n3{margin-right:-12px !important}.v-application .mr-n4{margin-right:-16px !important}.v-application .mr-n5{margin-right:-20px !important}.v-application .mr-n6{margin-right:-24px !important}.v-application .mr-n7{margin-right:-28px !important}.v-application .mr-n8{margin-right:-32px !important}.v-application .mr-n9{margin-right:-36px !important}.v-application .mr-n10{margin-right:-40px !important}.v-application .mr-n11{margin-right:-44px !important}.v-application .mr-n12{margin-right:-48px !important}.v-application .mr-n13{margin-right:-52px !important}.v-application .mr-n14{margin-right:-56px !important}.v-application .mr-n15{margin-right:-60px !important}.v-application .mr-n16{margin-right:-64px !important}.v-application .mb-n1{margin-bottom:-4px !important}.v-application .mb-n2{margin-bottom:-8px !important}.v-application .mb-n3{margin-bottom:-12px !important}.v-application .mb-n4{margin-bottom:-16px !important}.v-application .mb-n5{margin-bottom:-20px !important}.v-application .mb-n6{margin-bottom:-24px !important}.v-application .mb-n7{margin-bottom:-28px !important}.v-application .mb-n8{margin-bottom:-32px !important}.v-application .mb-n9{margin-bottom:-36px !important}.v-application .mb-n10{margin-bottom:-40px !important}.v-application .mb-n11{margin-bottom:-44px !important}.v-application .mb-n12{margin-bottom:-48px !important}.v-application .mb-n13{margin-bottom:-52px !important}.v-application .mb-n14{margin-bottom:-56px !important}.v-application .mb-n15{margin-bottom:-60px !important}.v-application .mb-n16{margin-bottom:-64px !important}.v-application .ml-n1{margin-left:-4px !important}.v-application .ml-n2{margin-left:-8px !important}.v-application .ml-n3{margin-left:-12px !important}.v-application .ml-n4{margin-left:-16px !important}.v-application .ml-n5{margin-left:-20px !important}.v-application .ml-n6{margin-left:-24px !important}.v-application .ml-n7{margin-left:-28px !important}.v-application .ml-n8{margin-left:-32px !important}.v-application .ml-n9{margin-left:-36px !important}.v-application .ml-n10{margin-left:-40px !important}.v-application .ml-n11{margin-left:-44px !important}.v-application .ml-n12{margin-left:-48px !important}.v-application .ml-n13{margin-left:-52px !important}.v-application .ml-n14{margin-left:-56px !important}.v-application .ml-n15{margin-left:-60px !important}.v-application .ml-n16{margin-left:-64px !important}.v-application--is-ltr .ms-n1{margin-left:-4px !important}.v-application--is-rtl .ms-n1{margin-right:-4px !important}.v-application--is-ltr .ms-n2{margin-left:-8px !important}.v-application--is-rtl .ms-n2{margin-right:-8px !important}.v-application--is-ltr .ms-n3{margin-left:-12px !important}.v-application--is-rtl .ms-n3{margin-right:-12px !important}.v-application--is-ltr .ms-n4{margin-left:-16px !important}.v-application--is-rtl .ms-n4{margin-right:-16px !important}.v-application--is-ltr .ms-n5{margin-left:-20px !important}.v-application--is-rtl .ms-n5{margin-right:-20px !important}.v-application--is-ltr .ms-n6{margin-left:-24px !important}.v-application--is-rtl .ms-n6{margin-right:-24px !important}.v-application--is-ltr .ms-n7{margin-left:-28px !important}.v-application--is-rtl .ms-n7{margin-right:-28px !important}.v-application--is-ltr .ms-n8{margin-left:-32px !important}.v-application--is-rtl .ms-n8{margin-right:-32px !important}.v-application--is-ltr .ms-n9{margin-left:-36px !important}.v-application--is-rtl .ms-n9{margin-right:-36px !important}.v-application--is-ltr .ms-n10{margin-left:-40px !important}.v-application--is-rtl .ms-n10{margin-right:-40px !important}.v-application--is-ltr .ms-n11{margin-left:-44px !important}.v-application--is-rtl .ms-n11{margin-right:-44px !important}.v-application--is-ltr .ms-n12{margin-left:-48px !important}.v-application--is-rtl .ms-n12{margin-right:-48px !important}.v-application--is-ltr .ms-n13{margin-left:-52px !important}.v-application--is-rtl .ms-n13{margin-right:-52px !important}.v-application--is-ltr .ms-n14{margin-left:-56px !important}.v-application--is-rtl .ms-n14{margin-right:-56px !important}.v-application--is-ltr .ms-n15{margin-left:-60px !important}.v-application--is-rtl .ms-n15{margin-right:-60px !important}.v-application--is-ltr .ms-n16{margin-left:-64px !important}.v-application--is-rtl .ms-n16{margin-right:-64px !important}.v-application--is-ltr .me-n1{margin-right:-4px !important}.v-application--is-rtl .me-n1{margin-left:-4px !important}.v-application--is-ltr .me-n2{margin-right:-8px !important}.v-application--is-rtl .me-n2{margin-left:-8px !important}.v-application--is-ltr .me-n3{margin-right:-12px !important}.v-application--is-rtl .me-n3{margin-left:-12px !important}.v-application--is-ltr .me-n4{margin-right:-16px !important}.v-application--is-rtl .me-n4{margin-left:-16px !important}.v-application--is-ltr .me-n5{margin-right:-20px !important}.v-application--is-rtl .me-n5{margin-left:-20px !important}.v-application--is-ltr .me-n6{margin-right:-24px !important}.v-application--is-rtl .me-n6{margin-left:-24px !important}.v-application--is-ltr .me-n7{margin-right:-28px !important}.v-application--is-rtl .me-n7{margin-left:-28px !important}.v-application--is-ltr .me-n8{margin-right:-32px !important}.v-application--is-rtl .me-n8{margin-left:-32px !important}.v-application--is-ltr .me-n9{margin-right:-36px !important}.v-application--is-rtl .me-n9{margin-left:-36px !important}.v-application--is-ltr .me-n10{margin-right:-40px !important}.v-application--is-rtl .me-n10{margin-left:-40px !important}.v-application--is-ltr .me-n11{margin-right:-44px !important}.v-application--is-rtl .me-n11{margin-left:-44px !important}.v-application--is-ltr .me-n12{margin-right:-48px !important}.v-application--is-rtl .me-n12{margin-left:-48px !important}.v-application--is-ltr .me-n13{margin-right:-52px !important}.v-application--is-rtl .me-n13{margin-left:-52px !important}.v-application--is-ltr .me-n14{margin-right:-56px !important}.v-application--is-rtl .me-n14{margin-left:-56px !important}.v-application--is-ltr .me-n15{margin-right:-60px !important}.v-application--is-rtl .me-n15{margin-left:-60px !important}.v-application--is-ltr .me-n16{margin-right:-64px !important}.v-application--is-rtl .me-n16{margin-left:-64px !important}.v-application .pa-0{padding:0px !important}.v-application .pa-1{padding:4px !important}.v-application .pa-2{padding:8px !important}.v-application .pa-3{padding:12px !important}.v-application .pa-4{padding:16px !important}.v-application .pa-5{padding:20px !important}.v-application .pa-6{padding:24px !important}.v-application .pa-7{padding:28px !important}.v-application .pa-8{padding:32px !important}.v-application .pa-9{padding:36px !important}.v-application .pa-10{padding:40px !important}.v-application .pa-11{padding:44px !important}.v-application .pa-12{padding:48px !important}.v-application .pa-13{padding:52px !important}.v-application .pa-14{padding:56px !important}.v-application .pa-15{padding:60px !important}.v-application .pa-16{padding:64px !important}.v-application .px-0{padding-right:0px !important;padding-left:0px !important}.v-application .px-1{padding-right:4px !important;padding-left:4px !important}.v-application .px-2{padding-right:8px !important;padding-left:8px !important}.v-application .px-3{padding-right:12px !important;padding-left:12px !important}.v-application .px-4{padding-right:16px !important;padding-left:16px !important}.v-application .px-5{padding-right:20px !important;padding-left:20px !important}.v-application .px-6{padding-right:24px !important;padding-left:24px !important}.v-application .px-7{padding-right:28px !important;padding-left:28px !important}.v-application .px-8{padding-right:32px !important;padding-left:32px !important}.v-application .px-9{padding-right:36px !important;padding-left:36px !important}.v-application .px-10{padding-right:40px !important;padding-left:40px !important}.v-application .px-11{padding-right:44px !important;padding-left:44px !important}.v-application .px-12{padding-right:48px !important;padding-left:48px !important}.v-application .px-13{padding-right:52px !important;padding-left:52px !important}.v-application .px-14{padding-right:56px !important;padding-left:56px !important}.v-application .px-15{padding-right:60px !important;padding-left:60px !important}.v-application .px-16{padding-right:64px !important;padding-left:64px !important}.v-application .py-0{padding-top:0px !important;padding-bottom:0px !important}.v-application .py-1{padding-top:4px !important;padding-bottom:4px !important}.v-application .py-2{padding-top:8px !important;padding-bottom:8px !important}.v-application .py-3{padding-top:12px !important;padding-bottom:12px !important}.v-application .py-4{padding-top:16px !important;padding-bottom:16px !important}.v-application .py-5{padding-top:20px !important;padding-bottom:20px !important}.v-application .py-6{padding-top:24px !important;padding-bottom:24px !important}.v-application .py-7{padding-top:28px !important;padding-bottom:28px !important}.v-application .py-8{padding-top:32px !important;padding-bottom:32px !important}.v-application .py-9{padding-top:36px !important;padding-bottom:36px !important}.v-application .py-10{padding-top:40px !important;padding-bottom:40px !important}.v-application .py-11{padding-top:44px !important;padding-bottom:44px !important}.v-application .py-12{padding-top:48px !important;padding-bottom:48px !important}.v-application .py-13{padding-top:52px !important;padding-bottom:52px !important}.v-application .py-14{padding-top:56px !important;padding-bottom:56px !important}.v-application .py-15{padding-top:60px !important;padding-bottom:60px !important}.v-application .py-16{padding-top:64px !important;padding-bottom:64px !important}.v-application .pt-0{padding-top:0px !important}.v-application .pt-1{padding-top:4px !important}.v-application .pt-2{padding-top:8px !important}.v-application .pt-3{padding-top:12px !important}.v-application .pt-4{padding-top:16px !important}.v-application .pt-5{padding-top:20px !important}.v-application .pt-6{padding-top:24px !important}.v-application .pt-7{padding-top:28px !important}.v-application .pt-8{padding-top:32px !important}.v-application .pt-9{padding-top:36px !important}.v-application .pt-10{padding-top:40px !important}.v-application .pt-11{padding-top:44px !important}.v-application .pt-12{padding-top:48px !important}.v-application .pt-13{padding-top:52px !important}.v-application .pt-14{padding-top:56px !important}.v-application .pt-15{padding-top:60px !important}.v-application .pt-16{padding-top:64px !important}.v-application .pr-0{padding-right:0px !important}.v-application .pr-1{padding-right:4px !important}.v-application .pr-2{padding-right:8px !important}.v-application .pr-3{padding-right:12px !important}.v-application .pr-4{padding-right:16px !important}.v-application .pr-5{padding-right:20px !important}.v-application .pr-6{padding-right:24px !important}.v-application .pr-7{padding-right:28px !important}.v-application .pr-8{padding-right:32px !important}.v-application .pr-9{padding-right:36px !important}.v-application .pr-10{padding-right:40px !important}.v-application .pr-11{padding-right:44px !important}.v-application .pr-12{padding-right:48px !important}.v-application .pr-13{padding-right:52px !important}.v-application .pr-14{padding-right:56px !important}.v-application .pr-15{padding-right:60px !important}.v-application .pr-16{padding-right:64px !important}.v-application .pb-0{padding-bottom:0px !important}.v-application .pb-1{padding-bottom:4px !important}.v-application .pb-2{padding-bottom:8px !important}.v-application .pb-3{padding-bottom:12px !important}.v-application .pb-4{padding-bottom:16px !important}.v-application .pb-5{padding-bottom:20px !important}.v-application .pb-6{padding-bottom:24px !important}.v-application .pb-7{padding-bottom:28px !important}.v-application .pb-8{padding-bottom:32px !important}.v-application .pb-9{padding-bottom:36px !important}.v-application .pb-10{padding-bottom:40px !important}.v-application .pb-11{padding-bottom:44px !important}.v-application .pb-12{padding-bottom:48px !important}.v-application .pb-13{padding-bottom:52px !important}.v-application .pb-14{padding-bottom:56px !important}.v-application .pb-15{padding-bottom:60px !important}.v-application .pb-16{padding-bottom:64px !important}.v-application .pl-0{padding-left:0px !important}.v-application .pl-1{padding-left:4px !important}.v-application .pl-2{padding-left:8px !important}.v-application .pl-3{padding-left:12px !important}.v-application .pl-4{padding-left:16px !important}.v-application .pl-5{padding-left:20px !important}.v-application .pl-6{padding-left:24px !important}.v-application .pl-7{padding-left:28px !important}.v-application .pl-8{padding-left:32px !important}.v-application .pl-9{padding-left:36px !important}.v-application .pl-10{padding-left:40px !important}.v-application .pl-11{padding-left:44px !important}.v-application .pl-12{padding-left:48px !important}.v-application .pl-13{padding-left:52px !important}.v-application .pl-14{padding-left:56px !important}.v-application .pl-15{padding-left:60px !important}.v-application .pl-16{padding-left:64px !important}.v-application--is-ltr .ps-0{padding-left:0px !important}.v-application--is-rtl .ps-0{padding-right:0px !important}.v-application--is-ltr .ps-1{padding-left:4px !important}.v-application--is-rtl .ps-1{padding-right:4px !important}.v-application--is-ltr .ps-2{padding-left:8px !important}.v-application--is-rtl .ps-2{padding-right:8px !important}.v-application--is-ltr .ps-3{padding-left:12px !important}.v-application--is-rtl .ps-3{padding-right:12px !important}.v-application--is-ltr .ps-4{padding-left:16px !important}.v-application--is-rtl .ps-4{padding-right:16px !important}.v-application--is-ltr .ps-5{padding-left:20px !important}.v-application--is-rtl .ps-5{padding-right:20px !important}.v-application--is-ltr .ps-6{padding-left:24px !important}.v-application--is-rtl .ps-6{padding-right:24px !important}.v-application--is-ltr .ps-7{padding-left:28px !important}.v-application--is-rtl .ps-7{padding-right:28px !important}.v-application--is-ltr .ps-8{padding-left:32px !important}.v-application--is-rtl .ps-8{padding-right:32px !important}.v-application--is-ltr .ps-9{padding-left:36px !important}.v-application--is-rtl .ps-9{padding-right:36px !important}.v-application--is-ltr .ps-10{padding-left:40px !important}.v-application--is-rtl .ps-10{padding-right:40px !important}.v-application--is-ltr .ps-11{padding-left:44px !important}.v-application--is-rtl .ps-11{padding-right:44px !important}.v-application--is-ltr .ps-12{padding-left:48px !important}.v-application--is-rtl .ps-12{padding-right:48px !important}.v-application--is-ltr .ps-13{padding-left:52px !important}.v-application--is-rtl .ps-13{padding-right:52px !important}.v-application--is-ltr .ps-14{padding-left:56px !important}.v-application--is-rtl .ps-14{padding-right:56px !important}.v-application--is-ltr .ps-15{padding-left:60px !important}.v-application--is-rtl .ps-15{padding-right:60px !important}.v-application--is-ltr .ps-16{padding-left:64px !important}.v-application--is-rtl .ps-16{padding-right:64px !important}.v-application--is-ltr .pe-0{padding-right:0px !important}.v-application--is-rtl .pe-0{padding-left:0px !important}.v-application--is-ltr .pe-1{padding-right:4px !important}.v-application--is-rtl .pe-1{padding-left:4px !important}.v-application--is-ltr .pe-2{padding-right:8px !important}.v-application--is-rtl .pe-2{padding-left:8px !important}.v-application--is-ltr .pe-3{padding-right:12px !important}.v-application--is-rtl .pe-3{padding-left:12px !important}.v-application--is-ltr .pe-4{padding-right:16px !important}.v-application--is-rtl .pe-4{padding-left:16px !important}.v-application--is-ltr .pe-5{padding-right:20px !important}.v-application--is-rtl .pe-5{padding-left:20px !important}.v-application--is-ltr .pe-6{padding-right:24px !important}.v-application--is-rtl .pe-6{padding-left:24px !important}.v-application--is-ltr .pe-7{padding-right:28px !important}.v-application--is-rtl .pe-7{padding-left:28px !important}.v-application--is-ltr .pe-8{padding-right:32px !important}.v-application--is-rtl .pe-8{padding-left:32px !important}.v-application--is-ltr .pe-9{padding-right:36px !important}.v-application--is-rtl .pe-9{padding-left:36px !important}.v-application--is-ltr .pe-10{padding-right:40px !important}.v-application--is-rtl .pe-10{padding-left:40px !important}.v-application--is-ltr .pe-11{padding-right:44px !important}.v-application--is-rtl .pe-11{padding-left:44px !important}.v-application--is-ltr .pe-12{padding-right:48px !important}.v-application--is-rtl .pe-12{padding-left:48px !important}.v-application--is-ltr .pe-13{padding-right:52px !important}.v-application--is-rtl .pe-13{padding-left:52px !important}.v-application--is-ltr .pe-14{padding-right:56px !important}.v-application--is-rtl .pe-14{padding-left:56px !important}.v-application--is-ltr .pe-15{padding-right:60px !important}.v-application--is-rtl .pe-15{padding-left:60px !important}.v-application--is-ltr .pe-16{padding-right:64px !important}.v-application--is-rtl .pe-16{padding-left:64px !important}.v-application .rounded-0{border-radius:0 !important}.v-application .rounded-sm{border-radius:2px !important}.v-application .rounded{border-radius:4px !important}.v-application .rounded-lg{border-radius:8px !important}.v-application .rounded-xl{border-radius:24px !important}.v-application .rounded-pill{border-radius:9999px !important}.v-application .rounded-circle{border-radius:50% !important}.v-application .rounded-t-0{border-top-left-radius:0 !important;border-top-right-radius:0 !important}.v-application .rounded-t-sm{border-top-left-radius:2px !important;border-top-right-radius:2px !important}.v-application .rounded-t{border-top-left-radius:4px !important;border-top-right-radius:4px !important}.v-application .rounded-t-lg{border-top-left-radius:8px !important;border-top-right-radius:8px !important}.v-application .rounded-t-xl{border-top-left-radius:24px !important;border-top-right-radius:24px !important}.v-application .rounded-t-pill{border-top-left-radius:9999px !important;border-top-right-radius:9999px !important}.v-application .rounded-t-circle{border-top-left-radius:50% !important;border-top-right-radius:50% !important}.v-application .rounded-r-0{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}.v-application .rounded-r-sm{border-top-right-radius:2px !important;border-bottom-right-radius:2px !important}.v-application .rounded-r{border-top-right-radius:4px !important;border-bottom-right-radius:4px !important}.v-application .rounded-r-lg{border-top-right-radius:8px !important;border-bottom-right-radius:8px !important}.v-application .rounded-r-xl{border-top-right-radius:24px !important;border-bottom-right-radius:24px !important}.v-application .rounded-r-pill{border-top-right-radius:9999px !important;border-bottom-right-radius:9999px !important}.v-application .rounded-r-circle{border-top-right-radius:50% !important;border-bottom-right-radius:50% !important}.v-application .rounded-b-0{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}.v-application .rounded-b-sm{border-bottom-left-radius:2px !important;border-bottom-right-radius:2px !important}.v-application .rounded-b{border-bottom-left-radius:4px !important;border-bottom-right-radius:4px !important}.v-application .rounded-b-lg{border-bottom-left-radius:8px !important;border-bottom-right-radius:8px !important}.v-application .rounded-b-xl{border-bottom-left-radius:24px !important;border-bottom-right-radius:24px !important}.v-application .rounded-b-pill{border-bottom-left-radius:9999px !important;border-bottom-right-radius:9999px !important}.v-application .rounded-b-circle{border-bottom-left-radius:50% !important;border-bottom-right-radius:50% !important}.v-application .rounded-l-0{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}.v-application .rounded-l-sm{border-top-left-radius:2px !important;border-bottom-left-radius:2px !important}.v-application .rounded-l{border-top-left-radius:4px !important;border-bottom-left-radius:4px !important}.v-application .rounded-l-lg{border-top-left-radius:8px !important;border-bottom-left-radius:8px !important}.v-application .rounded-l-xl{border-top-left-radius:24px !important;border-bottom-left-radius:24px !important}.v-application .rounded-l-pill{border-top-left-radius:9999px !important;border-bottom-left-radius:9999px !important}.v-application .rounded-l-circle{border-top-left-radius:50% !important;border-bottom-left-radius:50% !important}.v-application .rounded-tl-0{border-top-left-radius:0 !important}.v-application .rounded-tl-sm{border-top-left-radius:2px !important}.v-application .rounded-tl{border-top-left-radius:4px !important}.v-application .rounded-tl-lg{border-top-left-radius:8px !important}.v-application .rounded-tl-xl{border-top-left-radius:24px !important}.v-application .rounded-tl-pill{border-top-left-radius:9999px !important}.v-application .rounded-tl-circle{border-top-left-radius:50% !important}.v-application .rounded-tr-0{border-top-right-radius:0 !important}.v-application .rounded-tr-sm{border-top-right-radius:2px !important}.v-application .rounded-tr{border-top-right-radius:4px !important}.v-application .rounded-tr-lg{border-top-right-radius:8px !important}.v-application .rounded-tr-xl{border-top-right-radius:24px !important}.v-application .rounded-tr-pill{border-top-right-radius:9999px !important}.v-application .rounded-tr-circle{border-top-right-radius:50% !important}.v-application .rounded-br-0{border-bottom-right-radius:0 !important}.v-application .rounded-br-sm{border-bottom-right-radius:2px !important}.v-application .rounded-br{border-bottom-right-radius:4px !important}.v-application .rounded-br-lg{border-bottom-right-radius:8px !important}.v-application .rounded-br-xl{border-bottom-right-radius:24px !important}.v-application .rounded-br-pill{border-bottom-right-radius:9999px !important}.v-application .rounded-br-circle{border-bottom-right-radius:50% !important}.v-application .rounded-bl-0{border-bottom-left-radius:0 !important}.v-application .rounded-bl-sm{border-bottom-left-radius:2px !important}.v-application .rounded-bl{border-bottom-left-radius:4px !important}.v-application .rounded-bl-lg{border-bottom-left-radius:8px !important}.v-application .rounded-bl-xl{border-bottom-left-radius:24px !important}.v-application .rounded-bl-pill{border-bottom-left-radius:9999px !important}.v-application .rounded-bl-circle{border-bottom-left-radius:50% !important}.v-application .text-left{text-align:left !important}.v-application .text-right{text-align:right !important}.v-application .text-center{text-align:center !important}.v-application .text-justify{text-align:justify !important}.v-application .text-start{text-align:start !important}.v-application .text-end{text-align:end !important}.v-application .text-decoration-line-through{text-decoration:line-through !important}.v-application .text-decoration-none{text-decoration:none !important}.v-application .text-decoration-overline{text-decoration:overline !important}.v-application .text-decoration-underline{text-decoration:underline !important}.v-application .text-wrap{white-space:normal !important}.v-application .text-no-wrap{white-space:nowrap !important}.v-application .text-pre{white-space:pre !important}.v-application .text-pre-line{white-space:pre-line !important}.v-application .text-pre-wrap{white-space:pre-wrap !important}.v-application .text-break{overflow-wrap:break-word !important;word-break:break-word !important}.v-application .text-truncate{white-space:nowrap !important;overflow:hidden !important;text-overflow:ellipsis !important}.v-application .text-none{text-transform:none !important}.v-application .text-capitalize{text-transform:capitalize !important}.v-application .text-lowercase{text-transform:lowercase !important}.v-application .text-uppercase{text-transform:uppercase !important}.v-application .text-h1{font-size:6rem !important;font-weight:300;line-height:6rem;letter-spacing:-0.015625em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-h2{font-size:3.75rem !important;font-weight:300;line-height:3.75rem;letter-spacing:-0.0083333333em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-h3{font-size:3rem !important;font-weight:400;line-height:3.125rem;letter-spacing:normal !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-h4{font-size:2.125rem !important;font-weight:400;line-height:2.5rem;letter-spacing:.0073529412em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-h5{font-size:1.5rem !important;font-weight:400;line-height:2rem;letter-spacing:normal !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-h6{font-size:1.25rem !important;font-weight:500;line-height:2rem;letter-spacing:.0125em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-subtitle-1{font-size:1rem !important;font-weight:normal;line-height:1.75rem;letter-spacing:.009375em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-subtitle-2{font-size:.875rem !important;font-weight:500;line-height:1.375rem;letter-spacing:.0071428571em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-body-1{font-size:1rem !important;font-weight:400;line-height:1.5rem;letter-spacing:.03125em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-body-2{font-size:.875rem !important;font-weight:400;line-height:1.25rem;letter-spacing:.0178571429em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-button{font-size:.875rem !important;font-weight:500;line-height:2.25rem;letter-spacing:.0892857143em !important;font-family:\"Roboto\",sans-serif !important;text-transform:uppercase !important}.v-application .text-caption{font-size:.75rem !important;font-weight:400;line-height:1.25rem;letter-spacing:.0333333333em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-overline{font-size:.75rem !important;font-weight:500;line-height:2rem;letter-spacing:.1666666667em !important;font-family:\"Roboto\",sans-serif !important;text-transform:uppercase !important}@media(min-width: 600px){.v-application .d-sm-none{display:none !important}.v-application .d-sm-inline{display:inline !important}.v-application .d-sm-inline-block{display:inline-block !important}.v-application .d-sm-block{display:block !important}.v-application .d-sm-table{display:table !important}.v-application .d-sm-table-row{display:table-row !important}.v-application .d-sm-table-cell{display:table-cell !important}.v-application .d-sm-flex{display:flex !important}.v-application .d-sm-inline-flex{display:inline-flex !important}.v-application .float-sm-none{float:none !important}.v-application .float-sm-left{float:left !important}.v-application .float-sm-right{float:right !important}.v-application--is-rtl .float-sm-end{float:left !important}.v-application--is-rtl .float-sm-start{float:right !important}.v-application--is-ltr .float-sm-end{float:right !important}.v-application--is-ltr .float-sm-start{float:left !important}.v-application .flex-sm-fill{flex:1 1 auto !important}.v-application .flex-sm-row{flex-direction:row !important}.v-application .flex-sm-column{flex-direction:column !important}.v-application .flex-sm-row-reverse{flex-direction:row-reverse !important}.v-application .flex-sm-column-reverse{flex-direction:column-reverse !important}.v-application .flex-sm-grow-0{flex-grow:0 !important}.v-application .flex-sm-grow-1{flex-grow:1 !important}.v-application .flex-sm-shrink-0{flex-shrink:0 !important}.v-application .flex-sm-shrink-1{flex-shrink:1 !important}.v-application .flex-sm-wrap{flex-wrap:wrap !important}.v-application .flex-sm-nowrap{flex-wrap:nowrap !important}.v-application .flex-sm-wrap-reverse{flex-wrap:wrap-reverse !important}.v-application .justify-sm-start{justify-content:flex-start !important}.v-application .justify-sm-end{justify-content:flex-end !important}.v-application .justify-sm-center{justify-content:center !important}.v-application .justify-sm-space-between{justify-content:space-between !important}.v-application .justify-sm-space-around{justify-content:space-around !important}.v-application .align-sm-start{align-items:flex-start !important}.v-application .align-sm-end{align-items:flex-end !important}.v-application .align-sm-center{align-items:center !important}.v-application .align-sm-baseline{align-items:baseline !important}.v-application .align-sm-stretch{align-items:stretch !important}.v-application .align-content-sm-start{align-content:flex-start !important}.v-application .align-content-sm-end{align-content:flex-end !important}.v-application .align-content-sm-center{align-content:center !important}.v-application .align-content-sm-space-between{align-content:space-between !important}.v-application .align-content-sm-space-around{align-content:space-around !important}.v-application .align-content-sm-stretch{align-content:stretch !important}.v-application .align-self-sm-auto{align-self:auto !important}.v-application .align-self-sm-start{align-self:flex-start !important}.v-application .align-self-sm-end{align-self:flex-end !important}.v-application .align-self-sm-center{align-self:center !important}.v-application .align-self-sm-baseline{align-self:baseline !important}.v-application .align-self-sm-stretch{align-self:stretch !important}.v-application .order-sm-first{order:-1 !important}.v-application .order-sm-0{order:0 !important}.v-application .order-sm-1{order:1 !important}.v-application .order-sm-2{order:2 !important}.v-application .order-sm-3{order:3 !important}.v-application .order-sm-4{order:4 !important}.v-application .order-sm-5{order:5 !important}.v-application .order-sm-6{order:6 !important}.v-application .order-sm-7{order:7 !important}.v-application .order-sm-8{order:8 !important}.v-application .order-sm-9{order:9 !important}.v-application .order-sm-10{order:10 !important}.v-application .order-sm-11{order:11 !important}.v-application .order-sm-12{order:12 !important}.v-application .order-sm-last{order:13 !important}.v-application .ma-sm-0{margin:0px !important}.v-application .ma-sm-1{margin:4px !important}.v-application .ma-sm-2{margin:8px !important}.v-application .ma-sm-3{margin:12px !important}.v-application .ma-sm-4{margin:16px !important}.v-application .ma-sm-5{margin:20px !important}.v-application .ma-sm-6{margin:24px !important}.v-application .ma-sm-7{margin:28px !important}.v-application .ma-sm-8{margin:32px !important}.v-application .ma-sm-9{margin:36px !important}.v-application .ma-sm-10{margin:40px !important}.v-application .ma-sm-11{margin:44px !important}.v-application .ma-sm-12{margin:48px !important}.v-application .ma-sm-13{margin:52px !important}.v-application .ma-sm-14{margin:56px !important}.v-application .ma-sm-15{margin:60px !important}.v-application .ma-sm-16{margin:64px !important}.v-application .ma-sm-auto{margin:auto !important}.v-application .mx-sm-0{margin-right:0px !important;margin-left:0px !important}.v-application .mx-sm-1{margin-right:4px !important;margin-left:4px !important}.v-application .mx-sm-2{margin-right:8px !important;margin-left:8px !important}.v-application .mx-sm-3{margin-right:12px !important;margin-left:12px !important}.v-application .mx-sm-4{margin-right:16px !important;margin-left:16px !important}.v-application .mx-sm-5{margin-right:20px !important;margin-left:20px !important}.v-application .mx-sm-6{margin-right:24px !important;margin-left:24px !important}.v-application .mx-sm-7{margin-right:28px !important;margin-left:28px !important}.v-application .mx-sm-8{margin-right:32px !important;margin-left:32px !important}.v-application .mx-sm-9{margin-right:36px !important;margin-left:36px !important}.v-application .mx-sm-10{margin-right:40px !important;margin-left:40px !important}.v-application .mx-sm-11{margin-right:44px !important;margin-left:44px !important}.v-application .mx-sm-12{margin-right:48px !important;margin-left:48px !important}.v-application .mx-sm-13{margin-right:52px !important;margin-left:52px !important}.v-application .mx-sm-14{margin-right:56px !important;margin-left:56px !important}.v-application .mx-sm-15{margin-right:60px !important;margin-left:60px !important}.v-application .mx-sm-16{margin-right:64px !important;margin-left:64px !important}.v-application .mx-sm-auto{margin-right:auto !important;margin-left:auto !important}.v-application .my-sm-0{margin-top:0px !important;margin-bottom:0px !important}.v-application .my-sm-1{margin-top:4px !important;margin-bottom:4px !important}.v-application .my-sm-2{margin-top:8px !important;margin-bottom:8px !important}.v-application .my-sm-3{margin-top:12px !important;margin-bottom:12px !important}.v-application .my-sm-4{margin-top:16px !important;margin-bottom:16px !important}.v-application .my-sm-5{margin-top:20px !important;margin-bottom:20px !important}.v-application .my-sm-6{margin-top:24px !important;margin-bottom:24px !important}.v-application .my-sm-7{margin-top:28px !important;margin-bottom:28px !important}.v-application .my-sm-8{margin-top:32px !important;margin-bottom:32px !important}.v-application .my-sm-9{margin-top:36px !important;margin-bottom:36px !important}.v-application .my-sm-10{margin-top:40px !important;margin-bottom:40px !important}.v-application .my-sm-11{margin-top:44px !important;margin-bottom:44px !important}.v-application .my-sm-12{margin-top:48px !important;margin-bottom:48px !important}.v-application .my-sm-13{margin-top:52px !important;margin-bottom:52px !important}.v-application .my-sm-14{margin-top:56px !important;margin-bottom:56px !important}.v-application .my-sm-15{margin-top:60px !important;margin-bottom:60px !important}.v-application .my-sm-16{margin-top:64px !important;margin-bottom:64px !important}.v-application .my-sm-auto{margin-top:auto !important;margin-bottom:auto !important}.v-application .mt-sm-0{margin-top:0px !important}.v-application .mt-sm-1{margin-top:4px !important}.v-application .mt-sm-2{margin-top:8px !important}.v-application .mt-sm-3{margin-top:12px !important}.v-application .mt-sm-4{margin-top:16px !important}.v-application .mt-sm-5{margin-top:20px !important}.v-application .mt-sm-6{margin-top:24px !important}.v-application .mt-sm-7{margin-top:28px !important}.v-application .mt-sm-8{margin-top:32px !important}.v-application .mt-sm-9{margin-top:36px !important}.v-application .mt-sm-10{margin-top:40px !important}.v-application .mt-sm-11{margin-top:44px !important}.v-application .mt-sm-12{margin-top:48px !important}.v-application .mt-sm-13{margin-top:52px !important}.v-application .mt-sm-14{margin-top:56px !important}.v-application .mt-sm-15{margin-top:60px !important}.v-application .mt-sm-16{margin-top:64px !important}.v-application .mt-sm-auto{margin-top:auto !important}.v-application .mr-sm-0{margin-right:0px !important}.v-application .mr-sm-1{margin-right:4px !important}.v-application .mr-sm-2{margin-right:8px !important}.v-application .mr-sm-3{margin-right:12px !important}.v-application .mr-sm-4{margin-right:16px !important}.v-application .mr-sm-5{margin-right:20px !important}.v-application .mr-sm-6{margin-right:24px !important}.v-application .mr-sm-7{margin-right:28px !important}.v-application .mr-sm-8{margin-right:32px !important}.v-application .mr-sm-9{margin-right:36px !important}.v-application .mr-sm-10{margin-right:40px !important}.v-application .mr-sm-11{margin-right:44px !important}.v-application .mr-sm-12{margin-right:48px !important}.v-application .mr-sm-13{margin-right:52px !important}.v-application .mr-sm-14{margin-right:56px !important}.v-application .mr-sm-15{margin-right:60px !important}.v-application .mr-sm-16{margin-right:64px !important}.v-application .mr-sm-auto{margin-right:auto !important}.v-application .mb-sm-0{margin-bottom:0px !important}.v-application .mb-sm-1{margin-bottom:4px !important}.v-application .mb-sm-2{margin-bottom:8px !important}.v-application .mb-sm-3{margin-bottom:12px !important}.v-application .mb-sm-4{margin-bottom:16px !important}.v-application .mb-sm-5{margin-bottom:20px !important}.v-application .mb-sm-6{margin-bottom:24px !important}.v-application .mb-sm-7{margin-bottom:28px !important}.v-application .mb-sm-8{margin-bottom:32px !important}.v-application .mb-sm-9{margin-bottom:36px !important}.v-application .mb-sm-10{margin-bottom:40px !important}.v-application .mb-sm-11{margin-bottom:44px !important}.v-application .mb-sm-12{margin-bottom:48px !important}.v-application .mb-sm-13{margin-bottom:52px !important}.v-application .mb-sm-14{margin-bottom:56px !important}.v-application .mb-sm-15{margin-bottom:60px !important}.v-application .mb-sm-16{margin-bottom:64px !important}.v-application .mb-sm-auto{margin-bottom:auto !important}.v-application .ml-sm-0{margin-left:0px !important}.v-application .ml-sm-1{margin-left:4px !important}.v-application .ml-sm-2{margin-left:8px !important}.v-application .ml-sm-3{margin-left:12px !important}.v-application .ml-sm-4{margin-left:16px !important}.v-application .ml-sm-5{margin-left:20px !important}.v-application .ml-sm-6{margin-left:24px !important}.v-application .ml-sm-7{margin-left:28px !important}.v-application .ml-sm-8{margin-left:32px !important}.v-application .ml-sm-9{margin-left:36px !important}.v-application .ml-sm-10{margin-left:40px !important}.v-application .ml-sm-11{margin-left:44px !important}.v-application .ml-sm-12{margin-left:48px !important}.v-application .ml-sm-13{margin-left:52px !important}.v-application .ml-sm-14{margin-left:56px !important}.v-application .ml-sm-15{margin-left:60px !important}.v-application .ml-sm-16{margin-left:64px !important}.v-application .ml-sm-auto{margin-left:auto !important}.v-application--is-ltr .ms-sm-0{margin-left:0px !important}.v-application--is-rtl .ms-sm-0{margin-right:0px !important}.v-application--is-ltr .ms-sm-1{margin-left:4px !important}.v-application--is-rtl .ms-sm-1{margin-right:4px !important}.v-application--is-ltr .ms-sm-2{margin-left:8px !important}.v-application--is-rtl .ms-sm-2{margin-right:8px !important}.v-application--is-ltr .ms-sm-3{margin-left:12px !important}.v-application--is-rtl .ms-sm-3{margin-right:12px !important}.v-application--is-ltr .ms-sm-4{margin-left:16px !important}.v-application--is-rtl .ms-sm-4{margin-right:16px !important}.v-application--is-ltr .ms-sm-5{margin-left:20px !important}.v-application--is-rtl .ms-sm-5{margin-right:20px !important}.v-application--is-ltr .ms-sm-6{margin-left:24px !important}.v-application--is-rtl .ms-sm-6{margin-right:24px !important}.v-application--is-ltr .ms-sm-7{margin-left:28px !important}.v-application--is-rtl .ms-sm-7{margin-right:28px !important}.v-application--is-ltr .ms-sm-8{margin-left:32px !important}.v-application--is-rtl .ms-sm-8{margin-right:32px !important}.v-application--is-ltr .ms-sm-9{margin-left:36px !important}.v-application--is-rtl .ms-sm-9{margin-right:36px !important}.v-application--is-ltr .ms-sm-10{margin-left:40px !important}.v-application--is-rtl .ms-sm-10{margin-right:40px !important}.v-application--is-ltr .ms-sm-11{margin-left:44px !important}.v-application--is-rtl .ms-sm-11{margin-right:44px !important}.v-application--is-ltr .ms-sm-12{margin-left:48px !important}.v-application--is-rtl .ms-sm-12{margin-right:48px !important}.v-application--is-ltr .ms-sm-13{margin-left:52px !important}.v-application--is-rtl .ms-sm-13{margin-right:52px !important}.v-application--is-ltr .ms-sm-14{margin-left:56px !important}.v-application--is-rtl .ms-sm-14{margin-right:56px !important}.v-application--is-ltr .ms-sm-15{margin-left:60px !important}.v-application--is-rtl .ms-sm-15{margin-right:60px !important}.v-application--is-ltr .ms-sm-16{margin-left:64px !important}.v-application--is-rtl .ms-sm-16{margin-right:64px !important}.v-application--is-ltr .ms-sm-auto{margin-left:auto !important}.v-application--is-rtl .ms-sm-auto{margin-right:auto !important}.v-application--is-ltr .me-sm-0{margin-right:0px !important}.v-application--is-rtl .me-sm-0{margin-left:0px !important}.v-application--is-ltr .me-sm-1{margin-right:4px !important}.v-application--is-rtl .me-sm-1{margin-left:4px !important}.v-application--is-ltr .me-sm-2{margin-right:8px !important}.v-application--is-rtl .me-sm-2{margin-left:8px !important}.v-application--is-ltr .me-sm-3{margin-right:12px !important}.v-application--is-rtl .me-sm-3{margin-left:12px !important}.v-application--is-ltr .me-sm-4{margin-right:16px !important}.v-application--is-rtl .me-sm-4{margin-left:16px !important}.v-application--is-ltr .me-sm-5{margin-right:20px !important}.v-application--is-rtl .me-sm-5{margin-left:20px !important}.v-application--is-ltr .me-sm-6{margin-right:24px !important}.v-application--is-rtl .me-sm-6{margin-left:24px !important}.v-application--is-ltr .me-sm-7{margin-right:28px !important}.v-application--is-rtl .me-sm-7{margin-left:28px !important}.v-application--is-ltr .me-sm-8{margin-right:32px !important}.v-application--is-rtl .me-sm-8{margin-left:32px !important}.v-application--is-ltr .me-sm-9{margin-right:36px !important}.v-application--is-rtl .me-sm-9{margin-left:36px !important}.v-application--is-ltr .me-sm-10{margin-right:40px !important}.v-application--is-rtl .me-sm-10{margin-left:40px !important}.v-application--is-ltr .me-sm-11{margin-right:44px !important}.v-application--is-rtl .me-sm-11{margin-left:44px !important}.v-application--is-ltr .me-sm-12{margin-right:48px !important}.v-application--is-rtl .me-sm-12{margin-left:48px !important}.v-application--is-ltr .me-sm-13{margin-right:52px !important}.v-application--is-rtl .me-sm-13{margin-left:52px !important}.v-application--is-ltr .me-sm-14{margin-right:56px !important}.v-application--is-rtl .me-sm-14{margin-left:56px !important}.v-application--is-ltr .me-sm-15{margin-right:60px !important}.v-application--is-rtl .me-sm-15{margin-left:60px !important}.v-application--is-ltr .me-sm-16{margin-right:64px !important}.v-application--is-rtl .me-sm-16{margin-left:64px !important}.v-application--is-ltr .me-sm-auto{margin-right:auto !important}.v-application--is-rtl .me-sm-auto{margin-left:auto !important}.v-application .ma-sm-n1{margin:-4px !important}.v-application .ma-sm-n2{margin:-8px !important}.v-application .ma-sm-n3{margin:-12px !important}.v-application .ma-sm-n4{margin:-16px !important}.v-application .ma-sm-n5{margin:-20px !important}.v-application .ma-sm-n6{margin:-24px !important}.v-application .ma-sm-n7{margin:-28px !important}.v-application .ma-sm-n8{margin:-32px !important}.v-application .ma-sm-n9{margin:-36px !important}.v-application .ma-sm-n10{margin:-40px !important}.v-application .ma-sm-n11{margin:-44px !important}.v-application .ma-sm-n12{margin:-48px !important}.v-application .ma-sm-n13{margin:-52px !important}.v-application .ma-sm-n14{margin:-56px !important}.v-application .ma-sm-n15{margin:-60px !important}.v-application .ma-sm-n16{margin:-64px !important}.v-application .mx-sm-n1{margin-right:-4px !important;margin-left:-4px !important}.v-application .mx-sm-n2{margin-right:-8px !important;margin-left:-8px !important}.v-application .mx-sm-n3{margin-right:-12px !important;margin-left:-12px !important}.v-application .mx-sm-n4{margin-right:-16px !important;margin-left:-16px !important}.v-application .mx-sm-n5{margin-right:-20px !important;margin-left:-20px !important}.v-application .mx-sm-n6{margin-right:-24px !important;margin-left:-24px !important}.v-application .mx-sm-n7{margin-right:-28px !important;margin-left:-28px !important}.v-application .mx-sm-n8{margin-right:-32px !important;margin-left:-32px !important}.v-application .mx-sm-n9{margin-right:-36px !important;margin-left:-36px !important}.v-application .mx-sm-n10{margin-right:-40px !important;margin-left:-40px !important}.v-application .mx-sm-n11{margin-right:-44px !important;margin-left:-44px !important}.v-application .mx-sm-n12{margin-right:-48px !important;margin-left:-48px !important}.v-application .mx-sm-n13{margin-right:-52px !important;margin-left:-52px !important}.v-application .mx-sm-n14{margin-right:-56px !important;margin-left:-56px !important}.v-application .mx-sm-n15{margin-right:-60px !important;margin-left:-60px !important}.v-application .mx-sm-n16{margin-right:-64px !important;margin-left:-64px !important}.v-application .my-sm-n1{margin-top:-4px !important;margin-bottom:-4px !important}.v-application .my-sm-n2{margin-top:-8px !important;margin-bottom:-8px !important}.v-application .my-sm-n3{margin-top:-12px !important;margin-bottom:-12px !important}.v-application .my-sm-n4{margin-top:-16px !important;margin-bottom:-16px !important}.v-application .my-sm-n5{margin-top:-20px !important;margin-bottom:-20px !important}.v-application .my-sm-n6{margin-top:-24px !important;margin-bottom:-24px !important}.v-application .my-sm-n7{margin-top:-28px !important;margin-bottom:-28px !important}.v-application .my-sm-n8{margin-top:-32px !important;margin-bottom:-32px !important}.v-application .my-sm-n9{margin-top:-36px !important;margin-bottom:-36px !important}.v-application .my-sm-n10{margin-top:-40px !important;margin-bottom:-40px !important}.v-application .my-sm-n11{margin-top:-44px !important;margin-bottom:-44px !important}.v-application .my-sm-n12{margin-top:-48px !important;margin-bottom:-48px !important}.v-application .my-sm-n13{margin-top:-52px !important;margin-bottom:-52px !important}.v-application .my-sm-n14{margin-top:-56px !important;margin-bottom:-56px !important}.v-application .my-sm-n15{margin-top:-60px !important;margin-bottom:-60px !important}.v-application .my-sm-n16{margin-top:-64px !important;margin-bottom:-64px !important}.v-application .mt-sm-n1{margin-top:-4px !important}.v-application .mt-sm-n2{margin-top:-8px !important}.v-application .mt-sm-n3{margin-top:-12px !important}.v-application .mt-sm-n4{margin-top:-16px !important}.v-application .mt-sm-n5{margin-top:-20px !important}.v-application .mt-sm-n6{margin-top:-24px !important}.v-application .mt-sm-n7{margin-top:-28px !important}.v-application .mt-sm-n8{margin-top:-32px !important}.v-application .mt-sm-n9{margin-top:-36px !important}.v-application .mt-sm-n10{margin-top:-40px !important}.v-application .mt-sm-n11{margin-top:-44px !important}.v-application .mt-sm-n12{margin-top:-48px !important}.v-application .mt-sm-n13{margin-top:-52px !important}.v-application .mt-sm-n14{margin-top:-56px !important}.v-application .mt-sm-n15{margin-top:-60px !important}.v-application .mt-sm-n16{margin-top:-64px !important}.v-application .mr-sm-n1{margin-right:-4px !important}.v-application .mr-sm-n2{margin-right:-8px !important}.v-application .mr-sm-n3{margin-right:-12px !important}.v-application .mr-sm-n4{margin-right:-16px !important}.v-application .mr-sm-n5{margin-right:-20px !important}.v-application .mr-sm-n6{margin-right:-24px !important}.v-application .mr-sm-n7{margin-right:-28px !important}.v-application .mr-sm-n8{margin-right:-32px !important}.v-application .mr-sm-n9{margin-right:-36px !important}.v-application .mr-sm-n10{margin-right:-40px !important}.v-application .mr-sm-n11{margin-right:-44px !important}.v-application .mr-sm-n12{margin-right:-48px !important}.v-application .mr-sm-n13{margin-right:-52px !important}.v-application .mr-sm-n14{margin-right:-56px !important}.v-application .mr-sm-n15{margin-right:-60px !important}.v-application .mr-sm-n16{margin-right:-64px !important}.v-application .mb-sm-n1{margin-bottom:-4px !important}.v-application .mb-sm-n2{margin-bottom:-8px !important}.v-application .mb-sm-n3{margin-bottom:-12px !important}.v-application .mb-sm-n4{margin-bottom:-16px !important}.v-application .mb-sm-n5{margin-bottom:-20px !important}.v-application .mb-sm-n6{margin-bottom:-24px !important}.v-application .mb-sm-n7{margin-bottom:-28px !important}.v-application .mb-sm-n8{margin-bottom:-32px !important}.v-application .mb-sm-n9{margin-bottom:-36px !important}.v-application .mb-sm-n10{margin-bottom:-40px !important}.v-application .mb-sm-n11{margin-bottom:-44px !important}.v-application .mb-sm-n12{margin-bottom:-48px !important}.v-application .mb-sm-n13{margin-bottom:-52px !important}.v-application .mb-sm-n14{margin-bottom:-56px !important}.v-application .mb-sm-n15{margin-bottom:-60px !important}.v-application .mb-sm-n16{margin-bottom:-64px !important}.v-application .ml-sm-n1{margin-left:-4px !important}.v-application .ml-sm-n2{margin-left:-8px !important}.v-application .ml-sm-n3{margin-left:-12px !important}.v-application .ml-sm-n4{margin-left:-16px !important}.v-application .ml-sm-n5{margin-left:-20px !important}.v-application .ml-sm-n6{margin-left:-24px !important}.v-application .ml-sm-n7{margin-left:-28px !important}.v-application .ml-sm-n8{margin-left:-32px !important}.v-application .ml-sm-n9{margin-left:-36px !important}.v-application .ml-sm-n10{margin-left:-40px !important}.v-application .ml-sm-n11{margin-left:-44px !important}.v-application .ml-sm-n12{margin-left:-48px !important}.v-application .ml-sm-n13{margin-left:-52px !important}.v-application .ml-sm-n14{margin-left:-56px !important}.v-application .ml-sm-n15{margin-left:-60px !important}.v-application .ml-sm-n16{margin-left:-64px !important}.v-application--is-ltr .ms-sm-n1{margin-left:-4px !important}.v-application--is-rtl .ms-sm-n1{margin-right:-4px !important}.v-application--is-ltr .ms-sm-n2{margin-left:-8px !important}.v-application--is-rtl .ms-sm-n2{margin-right:-8px !important}.v-application--is-ltr .ms-sm-n3{margin-left:-12px !important}.v-application--is-rtl .ms-sm-n3{margin-right:-12px !important}.v-application--is-ltr .ms-sm-n4{margin-left:-16px !important}.v-application--is-rtl .ms-sm-n4{margin-right:-16px !important}.v-application--is-ltr .ms-sm-n5{margin-left:-20px !important}.v-application--is-rtl .ms-sm-n5{margin-right:-20px !important}.v-application--is-ltr .ms-sm-n6{margin-left:-24px !important}.v-application--is-rtl .ms-sm-n6{margin-right:-24px !important}.v-application--is-ltr .ms-sm-n7{margin-left:-28px !important}.v-application--is-rtl .ms-sm-n7{margin-right:-28px !important}.v-application--is-ltr .ms-sm-n8{margin-left:-32px !important}.v-application--is-rtl .ms-sm-n8{margin-right:-32px !important}.v-application--is-ltr .ms-sm-n9{margin-left:-36px !important}.v-application--is-rtl .ms-sm-n9{margin-right:-36px !important}.v-application--is-ltr .ms-sm-n10{margin-left:-40px !important}.v-application--is-rtl .ms-sm-n10{margin-right:-40px !important}.v-application--is-ltr .ms-sm-n11{margin-left:-44px !important}.v-application--is-rtl .ms-sm-n11{margin-right:-44px !important}.v-application--is-ltr .ms-sm-n12{margin-left:-48px !important}.v-application--is-rtl .ms-sm-n12{margin-right:-48px !important}.v-application--is-ltr .ms-sm-n13{margin-left:-52px !important}.v-application--is-rtl .ms-sm-n13{margin-right:-52px !important}.v-application--is-ltr .ms-sm-n14{margin-left:-56px !important}.v-application--is-rtl .ms-sm-n14{margin-right:-56px !important}.v-application--is-ltr .ms-sm-n15{margin-left:-60px !important}.v-application--is-rtl .ms-sm-n15{margin-right:-60px !important}.v-application--is-ltr .ms-sm-n16{margin-left:-64px !important}.v-application--is-rtl .ms-sm-n16{margin-right:-64px !important}.v-application--is-ltr .me-sm-n1{margin-right:-4px !important}.v-application--is-rtl .me-sm-n1{margin-left:-4px !important}.v-application--is-ltr .me-sm-n2{margin-right:-8px !important}.v-application--is-rtl .me-sm-n2{margin-left:-8px !important}.v-application--is-ltr .me-sm-n3{margin-right:-12px !important}.v-application--is-rtl .me-sm-n3{margin-left:-12px !important}.v-application--is-ltr .me-sm-n4{margin-right:-16px !important}.v-application--is-rtl .me-sm-n4{margin-left:-16px !important}.v-application--is-ltr .me-sm-n5{margin-right:-20px !important}.v-application--is-rtl .me-sm-n5{margin-left:-20px !important}.v-application--is-ltr .me-sm-n6{margin-right:-24px !important}.v-application--is-rtl .me-sm-n6{margin-left:-24px !important}.v-application--is-ltr .me-sm-n7{margin-right:-28px !important}.v-application--is-rtl .me-sm-n7{margin-left:-28px !important}.v-application--is-ltr .me-sm-n8{margin-right:-32px !important}.v-application--is-rtl .me-sm-n8{margin-left:-32px !important}.v-application--is-ltr .me-sm-n9{margin-right:-36px !important}.v-application--is-rtl .me-sm-n9{margin-left:-36px !important}.v-application--is-ltr .me-sm-n10{margin-right:-40px !important}.v-application--is-rtl .me-sm-n10{margin-left:-40px !important}.v-application--is-ltr .me-sm-n11{margin-right:-44px !important}.v-application--is-rtl .me-sm-n11{margin-left:-44px !important}.v-application--is-ltr .me-sm-n12{margin-right:-48px !important}.v-application--is-rtl .me-sm-n12{margin-left:-48px !important}.v-application--is-ltr .me-sm-n13{margin-right:-52px !important}.v-application--is-rtl .me-sm-n13{margin-left:-52px !important}.v-application--is-ltr .me-sm-n14{margin-right:-56px !important}.v-application--is-rtl .me-sm-n14{margin-left:-56px !important}.v-application--is-ltr .me-sm-n15{margin-right:-60px !important}.v-application--is-rtl .me-sm-n15{margin-left:-60px !important}.v-application--is-ltr .me-sm-n16{margin-right:-64px !important}.v-application--is-rtl .me-sm-n16{margin-left:-64px !important}.v-application .pa-sm-0{padding:0px !important}.v-application .pa-sm-1{padding:4px !important}.v-application .pa-sm-2{padding:8px !important}.v-application .pa-sm-3{padding:12px !important}.v-application .pa-sm-4{padding:16px !important}.v-application .pa-sm-5{padding:20px !important}.v-application .pa-sm-6{padding:24px !important}.v-application .pa-sm-7{padding:28px !important}.v-application .pa-sm-8{padding:32px !important}.v-application .pa-sm-9{padding:36px !important}.v-application .pa-sm-10{padding:40px !important}.v-application .pa-sm-11{padding:44px !important}.v-application .pa-sm-12{padding:48px !important}.v-application .pa-sm-13{padding:52px !important}.v-application .pa-sm-14{padding:56px !important}.v-application .pa-sm-15{padding:60px !important}.v-application .pa-sm-16{padding:64px !important}.v-application .px-sm-0{padding-right:0px !important;padding-left:0px !important}.v-application .px-sm-1{padding-right:4px !important;padding-left:4px !important}.v-application .px-sm-2{padding-right:8px !important;padding-left:8px !important}.v-application .px-sm-3{padding-right:12px !important;padding-left:12px !important}.v-application .px-sm-4{padding-right:16px !important;padding-left:16px !important}.v-application .px-sm-5{padding-right:20px !important;padding-left:20px !important}.v-application .px-sm-6{padding-right:24px !important;padding-left:24px !important}.v-application .px-sm-7{padding-right:28px !important;padding-left:28px !important}.v-application .px-sm-8{padding-right:32px !important;padding-left:32px !important}.v-application .px-sm-9{padding-right:36px !important;padding-left:36px !important}.v-application .px-sm-10{padding-right:40px !important;padding-left:40px !important}.v-application .px-sm-11{padding-right:44px !important;padding-left:44px !important}.v-application .px-sm-12{padding-right:48px !important;padding-left:48px !important}.v-application .px-sm-13{padding-right:52px !important;padding-left:52px !important}.v-application .px-sm-14{padding-right:56px !important;padding-left:56px !important}.v-application .px-sm-15{padding-right:60px !important;padding-left:60px !important}.v-application .px-sm-16{padding-right:64px !important;padding-left:64px !important}.v-application .py-sm-0{padding-top:0px !important;padding-bottom:0px !important}.v-application .py-sm-1{padding-top:4px !important;padding-bottom:4px !important}.v-application .py-sm-2{padding-top:8px !important;padding-bottom:8px !important}.v-application .py-sm-3{padding-top:12px !important;padding-bottom:12px !important}.v-application .py-sm-4{padding-top:16px !important;padding-bottom:16px !important}.v-application .py-sm-5{padding-top:20px !important;padding-bottom:20px !important}.v-application .py-sm-6{padding-top:24px !important;padding-bottom:24px !important}.v-application .py-sm-7{padding-top:28px !important;padding-bottom:28px !important}.v-application .py-sm-8{padding-top:32px !important;padding-bottom:32px !important}.v-application .py-sm-9{padding-top:36px !important;padding-bottom:36px !important}.v-application .py-sm-10{padding-top:40px !important;padding-bottom:40px !important}.v-application .py-sm-11{padding-top:44px !important;padding-bottom:44px !important}.v-application .py-sm-12{padding-top:48px !important;padding-bottom:48px !important}.v-application .py-sm-13{padding-top:52px !important;padding-bottom:52px !important}.v-application .py-sm-14{padding-top:56px !important;padding-bottom:56px !important}.v-application .py-sm-15{padding-top:60px !important;padding-bottom:60px !important}.v-application .py-sm-16{padding-top:64px !important;padding-bottom:64px !important}.v-application .pt-sm-0{padding-top:0px !important}.v-application .pt-sm-1{padding-top:4px !important}.v-application .pt-sm-2{padding-top:8px !important}.v-application .pt-sm-3{padding-top:12px !important}.v-application .pt-sm-4{padding-top:16px !important}.v-application .pt-sm-5{padding-top:20px !important}.v-application .pt-sm-6{padding-top:24px !important}.v-application .pt-sm-7{padding-top:28px !important}.v-application .pt-sm-8{padding-top:32px !important}.v-application .pt-sm-9{padding-top:36px !important}.v-application .pt-sm-10{padding-top:40px !important}.v-application .pt-sm-11{padding-top:44px !important}.v-application .pt-sm-12{padding-top:48px !important}.v-application .pt-sm-13{padding-top:52px !important}.v-application .pt-sm-14{padding-top:56px !important}.v-application .pt-sm-15{padding-top:60px !important}.v-application .pt-sm-16{padding-top:64px !important}.v-application .pr-sm-0{padding-right:0px !important}.v-application .pr-sm-1{padding-right:4px !important}.v-application .pr-sm-2{padding-right:8px !important}.v-application .pr-sm-3{padding-right:12px !important}.v-application .pr-sm-4{padding-right:16px !important}.v-application .pr-sm-5{padding-right:20px !important}.v-application .pr-sm-6{padding-right:24px !important}.v-application .pr-sm-7{padding-right:28px !important}.v-application .pr-sm-8{padding-right:32px !important}.v-application .pr-sm-9{padding-right:36px !important}.v-application .pr-sm-10{padding-right:40px !important}.v-application .pr-sm-11{padding-right:44px !important}.v-application .pr-sm-12{padding-right:48px !important}.v-application .pr-sm-13{padding-right:52px !important}.v-application .pr-sm-14{padding-right:56px !important}.v-application .pr-sm-15{padding-right:60px !important}.v-application .pr-sm-16{padding-right:64px !important}.v-application .pb-sm-0{padding-bottom:0px !important}.v-application .pb-sm-1{padding-bottom:4px !important}.v-application .pb-sm-2{padding-bottom:8px !important}.v-application .pb-sm-3{padding-bottom:12px !important}.v-application .pb-sm-4{padding-bottom:16px !important}.v-application .pb-sm-5{padding-bottom:20px !important}.v-application .pb-sm-6{padding-bottom:24px !important}.v-application .pb-sm-7{padding-bottom:28px !important}.v-application .pb-sm-8{padding-bottom:32px !important}.v-application .pb-sm-9{padding-bottom:36px !important}.v-application .pb-sm-10{padding-bottom:40px !important}.v-application .pb-sm-11{padding-bottom:44px !important}.v-application .pb-sm-12{padding-bottom:48px !important}.v-application .pb-sm-13{padding-bottom:52px !important}.v-application .pb-sm-14{padding-bottom:56px !important}.v-application .pb-sm-15{padding-bottom:60px !important}.v-application .pb-sm-16{padding-bottom:64px !important}.v-application .pl-sm-0{padding-left:0px !important}.v-application .pl-sm-1{padding-left:4px !important}.v-application .pl-sm-2{padding-left:8px !important}.v-application .pl-sm-3{padding-left:12px !important}.v-application .pl-sm-4{padding-left:16px !important}.v-application .pl-sm-5{padding-left:20px !important}.v-application .pl-sm-6{padding-left:24px !important}.v-application .pl-sm-7{padding-left:28px !important}.v-application .pl-sm-8{padding-left:32px !important}.v-application .pl-sm-9{padding-left:36px !important}.v-application .pl-sm-10{padding-left:40px !important}.v-application .pl-sm-11{padding-left:44px !important}.v-application .pl-sm-12{padding-left:48px !important}.v-application .pl-sm-13{padding-left:52px !important}.v-application .pl-sm-14{padding-left:56px !important}.v-application .pl-sm-15{padding-left:60px !important}.v-application .pl-sm-16{padding-left:64px !important}.v-application--is-ltr .ps-sm-0{padding-left:0px !important}.v-application--is-rtl .ps-sm-0{padding-right:0px !important}.v-application--is-ltr .ps-sm-1{padding-left:4px !important}.v-application--is-rtl .ps-sm-1{padding-right:4px !important}.v-application--is-ltr .ps-sm-2{padding-left:8px !important}.v-application--is-rtl .ps-sm-2{padding-right:8px !important}.v-application--is-ltr .ps-sm-3{padding-left:12px !important}.v-application--is-rtl .ps-sm-3{padding-right:12px !important}.v-application--is-ltr .ps-sm-4{padding-left:16px !important}.v-application--is-rtl .ps-sm-4{padding-right:16px !important}.v-application--is-ltr .ps-sm-5{padding-left:20px !important}.v-application--is-rtl .ps-sm-5{padding-right:20px !important}.v-application--is-ltr .ps-sm-6{padding-left:24px !important}.v-application--is-rtl .ps-sm-6{padding-right:24px !important}.v-application--is-ltr .ps-sm-7{padding-left:28px !important}.v-application--is-rtl .ps-sm-7{padding-right:28px !important}.v-application--is-ltr .ps-sm-8{padding-left:32px !important}.v-application--is-rtl .ps-sm-8{padding-right:32px !important}.v-application--is-ltr .ps-sm-9{padding-left:36px !important}.v-application--is-rtl .ps-sm-9{padding-right:36px !important}.v-application--is-ltr .ps-sm-10{padding-left:40px !important}.v-application--is-rtl .ps-sm-10{padding-right:40px !important}.v-application--is-ltr .ps-sm-11{padding-left:44px !important}.v-application--is-rtl .ps-sm-11{padding-right:44px !important}.v-application--is-ltr .ps-sm-12{padding-left:48px !important}.v-application--is-rtl .ps-sm-12{padding-right:48px !important}.v-application--is-ltr .ps-sm-13{padding-left:52px !important}.v-application--is-rtl .ps-sm-13{padding-right:52px !important}.v-application--is-ltr .ps-sm-14{padding-left:56px !important}.v-application--is-rtl .ps-sm-14{padding-right:56px !important}.v-application--is-ltr .ps-sm-15{padding-left:60px !important}.v-application--is-rtl .ps-sm-15{padding-right:60px !important}.v-application--is-ltr .ps-sm-16{padding-left:64px !important}.v-application--is-rtl .ps-sm-16{padding-right:64px !important}.v-application--is-ltr .pe-sm-0{padding-right:0px !important}.v-application--is-rtl .pe-sm-0{padding-left:0px !important}.v-application--is-ltr .pe-sm-1{padding-right:4px !important}.v-application--is-rtl .pe-sm-1{padding-left:4px !important}.v-application--is-ltr .pe-sm-2{padding-right:8px !important}.v-application--is-rtl .pe-sm-2{padding-left:8px !important}.v-application--is-ltr .pe-sm-3{padding-right:12px !important}.v-application--is-rtl .pe-sm-3{padding-left:12px !important}.v-application--is-ltr .pe-sm-4{padding-right:16px !important}.v-application--is-rtl .pe-sm-4{padding-left:16px !important}.v-application--is-ltr .pe-sm-5{padding-right:20px !important}.v-application--is-rtl .pe-sm-5{padding-left:20px !important}.v-application--is-ltr .pe-sm-6{padding-right:24px !important}.v-application--is-rtl .pe-sm-6{padding-left:24px !important}.v-application--is-ltr .pe-sm-7{padding-right:28px !important}.v-application--is-rtl .pe-sm-7{padding-left:28px !important}.v-application--is-ltr .pe-sm-8{padding-right:32px !important}.v-application--is-rtl .pe-sm-8{padding-left:32px !important}.v-application--is-ltr .pe-sm-9{padding-right:36px !important}.v-application--is-rtl .pe-sm-9{padding-left:36px !important}.v-application--is-ltr .pe-sm-10{padding-right:40px !important}.v-application--is-rtl .pe-sm-10{padding-left:40px !important}.v-application--is-ltr .pe-sm-11{padding-right:44px !important}.v-application--is-rtl .pe-sm-11{padding-left:44px !important}.v-application--is-ltr .pe-sm-12{padding-right:48px !important}.v-application--is-rtl .pe-sm-12{padding-left:48px !important}.v-application--is-ltr .pe-sm-13{padding-right:52px !important}.v-application--is-rtl .pe-sm-13{padding-left:52px !important}.v-application--is-ltr .pe-sm-14{padding-right:56px !important}.v-application--is-rtl .pe-sm-14{padding-left:56px !important}.v-application--is-ltr .pe-sm-15{padding-right:60px !important}.v-application--is-rtl .pe-sm-15{padding-left:60px !important}.v-application--is-ltr .pe-sm-16{padding-right:64px !important}.v-application--is-rtl .pe-sm-16{padding-left:64px !important}.v-application .text-sm-left{text-align:left !important}.v-application .text-sm-right{text-align:right !important}.v-application .text-sm-center{text-align:center !important}.v-application .text-sm-justify{text-align:justify !important}.v-application .text-sm-start{text-align:start !important}.v-application .text-sm-end{text-align:end !important}.v-application .text-sm-h1{font-size:6rem !important;font-weight:300;line-height:6rem;letter-spacing:-0.015625em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-sm-h2{font-size:3.75rem !important;font-weight:300;line-height:3.75rem;letter-spacing:-0.0083333333em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-sm-h3{font-size:3rem !important;font-weight:400;line-height:3.125rem;letter-spacing:normal !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-sm-h4{font-size:2.125rem !important;font-weight:400;line-height:2.5rem;letter-spacing:.0073529412em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-sm-h5{font-size:1.5rem !important;font-weight:400;line-height:2rem;letter-spacing:normal !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-sm-h6{font-size:1.25rem !important;font-weight:500;line-height:2rem;letter-spacing:.0125em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-sm-subtitle-1{font-size:1rem !important;font-weight:normal;line-height:1.75rem;letter-spacing:.009375em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-sm-subtitle-2{font-size:.875rem !important;font-weight:500;line-height:1.375rem;letter-spacing:.0071428571em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-sm-body-1{font-size:1rem !important;font-weight:400;line-height:1.5rem;letter-spacing:.03125em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-sm-body-2{font-size:.875rem !important;font-weight:400;line-height:1.25rem;letter-spacing:.0178571429em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-sm-button{font-size:.875rem !important;font-weight:500;line-height:2.25rem;letter-spacing:.0892857143em !important;font-family:\"Roboto\",sans-serif !important;text-transform:uppercase !important}.v-application .text-sm-caption{font-size:.75rem !important;font-weight:400;line-height:1.25rem;letter-spacing:.0333333333em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-sm-overline{font-size:.75rem !important;font-weight:500;line-height:2rem;letter-spacing:.1666666667em !important;font-family:\"Roboto\",sans-serif !important;text-transform:uppercase !important}}@media(min-width: 960px){.v-application .d-md-none{display:none !important}.v-application .d-md-inline{display:inline !important}.v-application .d-md-inline-block{display:inline-block !important}.v-application .d-md-block{display:block !important}.v-application .d-md-table{display:table !important}.v-application .d-md-table-row{display:table-row !important}.v-application .d-md-table-cell{display:table-cell !important}.v-application .d-md-flex{display:flex !important}.v-application .d-md-inline-flex{display:inline-flex !important}.v-application .float-md-none{float:none !important}.v-application .float-md-left{float:left !important}.v-application .float-md-right{float:right !important}.v-application--is-rtl .float-md-end{float:left !important}.v-application--is-rtl .float-md-start{float:right !important}.v-application--is-ltr .float-md-end{float:right !important}.v-application--is-ltr .float-md-start{float:left !important}.v-application .flex-md-fill{flex:1 1 auto !important}.v-application .flex-md-row{flex-direction:row !important}.v-application .flex-md-column{flex-direction:column !important}.v-application .flex-md-row-reverse{flex-direction:row-reverse !important}.v-application .flex-md-column-reverse{flex-direction:column-reverse !important}.v-application .flex-md-grow-0{flex-grow:0 !important}.v-application .flex-md-grow-1{flex-grow:1 !important}.v-application .flex-md-shrink-0{flex-shrink:0 !important}.v-application .flex-md-shrink-1{flex-shrink:1 !important}.v-application .flex-md-wrap{flex-wrap:wrap !important}.v-application .flex-md-nowrap{flex-wrap:nowrap !important}.v-application .flex-md-wrap-reverse{flex-wrap:wrap-reverse !important}.v-application .justify-md-start{justify-content:flex-start !important}.v-application .justify-md-end{justify-content:flex-end !important}.v-application .justify-md-center{justify-content:center !important}.v-application .justify-md-space-between{justify-content:space-between !important}.v-application .justify-md-space-around{justify-content:space-around !important}.v-application .align-md-start{align-items:flex-start !important}.v-application .align-md-end{align-items:flex-end !important}.v-application .align-md-center{align-items:center !important}.v-application .align-md-baseline{align-items:baseline !important}.v-application .align-md-stretch{align-items:stretch !important}.v-application .align-content-md-start{align-content:flex-start !important}.v-application .align-content-md-end{align-content:flex-end !important}.v-application .align-content-md-center{align-content:center !important}.v-application .align-content-md-space-between{align-content:space-between !important}.v-application .align-content-md-space-around{align-content:space-around !important}.v-application .align-content-md-stretch{align-content:stretch !important}.v-application .align-self-md-auto{align-self:auto !important}.v-application .align-self-md-start{align-self:flex-start !important}.v-application .align-self-md-end{align-self:flex-end !important}.v-application .align-self-md-center{align-self:center !important}.v-application .align-self-md-baseline{align-self:baseline !important}.v-application .align-self-md-stretch{align-self:stretch !important}.v-application .order-md-first{order:-1 !important}.v-application .order-md-0{order:0 !important}.v-application .order-md-1{order:1 !important}.v-application .order-md-2{order:2 !important}.v-application .order-md-3{order:3 !important}.v-application .order-md-4{order:4 !important}.v-application .order-md-5{order:5 !important}.v-application .order-md-6{order:6 !important}.v-application .order-md-7{order:7 !important}.v-application .order-md-8{order:8 !important}.v-application .order-md-9{order:9 !important}.v-application .order-md-10{order:10 !important}.v-application .order-md-11{order:11 !important}.v-application .order-md-12{order:12 !important}.v-application .order-md-last{order:13 !important}.v-application .ma-md-0{margin:0px !important}.v-application .ma-md-1{margin:4px !important}.v-application .ma-md-2{margin:8px !important}.v-application .ma-md-3{margin:12px !important}.v-application .ma-md-4{margin:16px !important}.v-application .ma-md-5{margin:20px !important}.v-application .ma-md-6{margin:24px !important}.v-application .ma-md-7{margin:28px !important}.v-application .ma-md-8{margin:32px !important}.v-application .ma-md-9{margin:36px !important}.v-application .ma-md-10{margin:40px !important}.v-application .ma-md-11{margin:44px !important}.v-application .ma-md-12{margin:48px !important}.v-application .ma-md-13{margin:52px !important}.v-application .ma-md-14{margin:56px !important}.v-application .ma-md-15{margin:60px !important}.v-application .ma-md-16{margin:64px !important}.v-application .ma-md-auto{margin:auto !important}.v-application .mx-md-0{margin-right:0px !important;margin-left:0px !important}.v-application .mx-md-1{margin-right:4px !important;margin-left:4px !important}.v-application .mx-md-2{margin-right:8px !important;margin-left:8px !important}.v-application .mx-md-3{margin-right:12px !important;margin-left:12px !important}.v-application .mx-md-4{margin-right:16px !important;margin-left:16px !important}.v-application .mx-md-5{margin-right:20px !important;margin-left:20px !important}.v-application .mx-md-6{margin-right:24px !important;margin-left:24px !important}.v-application .mx-md-7{margin-right:28px !important;margin-left:28px !important}.v-application .mx-md-8{margin-right:32px !important;margin-left:32px !important}.v-application .mx-md-9{margin-right:36px !important;margin-left:36px !important}.v-application .mx-md-10{margin-right:40px !important;margin-left:40px !important}.v-application .mx-md-11{margin-right:44px !important;margin-left:44px !important}.v-application .mx-md-12{margin-right:48px !important;margin-left:48px !important}.v-application .mx-md-13{margin-right:52px !important;margin-left:52px !important}.v-application .mx-md-14{margin-right:56px !important;margin-left:56px !important}.v-application .mx-md-15{margin-right:60px !important;margin-left:60px !important}.v-application .mx-md-16{margin-right:64px !important;margin-left:64px !important}.v-application .mx-md-auto{margin-right:auto !important;margin-left:auto !important}.v-application .my-md-0{margin-top:0px !important;margin-bottom:0px !important}.v-application .my-md-1{margin-top:4px !important;margin-bottom:4px !important}.v-application .my-md-2{margin-top:8px !important;margin-bottom:8px !important}.v-application .my-md-3{margin-top:12px !important;margin-bottom:12px !important}.v-application .my-md-4{margin-top:16px !important;margin-bottom:16px !important}.v-application .my-md-5{margin-top:20px !important;margin-bottom:20px !important}.v-application .my-md-6{margin-top:24px !important;margin-bottom:24px !important}.v-application .my-md-7{margin-top:28px !important;margin-bottom:28px !important}.v-application .my-md-8{margin-top:32px !important;margin-bottom:32px !important}.v-application .my-md-9{margin-top:36px !important;margin-bottom:36px !important}.v-application .my-md-10{margin-top:40px !important;margin-bottom:40px !important}.v-application .my-md-11{margin-top:44px !important;margin-bottom:44px !important}.v-application .my-md-12{margin-top:48px !important;margin-bottom:48px !important}.v-application .my-md-13{margin-top:52px !important;margin-bottom:52px !important}.v-application .my-md-14{margin-top:56px !important;margin-bottom:56px !important}.v-application .my-md-15{margin-top:60px !important;margin-bottom:60px !important}.v-application .my-md-16{margin-top:64px !important;margin-bottom:64px !important}.v-application .my-md-auto{margin-top:auto !important;margin-bottom:auto !important}.v-application .mt-md-0{margin-top:0px !important}.v-application .mt-md-1{margin-top:4px !important}.v-application .mt-md-2{margin-top:8px !important}.v-application .mt-md-3{margin-top:12px !important}.v-application .mt-md-4{margin-top:16px !important}.v-application .mt-md-5{margin-top:20px !important}.v-application .mt-md-6{margin-top:24px !important}.v-application .mt-md-7{margin-top:28px !important}.v-application .mt-md-8{margin-top:32px !important}.v-application .mt-md-9{margin-top:36px !important}.v-application .mt-md-10{margin-top:40px !important}.v-application .mt-md-11{margin-top:44px !important}.v-application .mt-md-12{margin-top:48px !important}.v-application .mt-md-13{margin-top:52px !important}.v-application .mt-md-14{margin-top:56px !important}.v-application .mt-md-15{margin-top:60px !important}.v-application .mt-md-16{margin-top:64px !important}.v-application .mt-md-auto{margin-top:auto !important}.v-application .mr-md-0{margin-right:0px !important}.v-application .mr-md-1{margin-right:4px !important}.v-application .mr-md-2{margin-right:8px !important}.v-application .mr-md-3{margin-right:12px !important}.v-application .mr-md-4{margin-right:16px !important}.v-application .mr-md-5{margin-right:20px !important}.v-application .mr-md-6{margin-right:24px !important}.v-application .mr-md-7{margin-right:28px !important}.v-application .mr-md-8{margin-right:32px !important}.v-application .mr-md-9{margin-right:36px !important}.v-application .mr-md-10{margin-right:40px !important}.v-application .mr-md-11{margin-right:44px !important}.v-application .mr-md-12{margin-right:48px !important}.v-application .mr-md-13{margin-right:52px !important}.v-application .mr-md-14{margin-right:56px !important}.v-application .mr-md-15{margin-right:60px !important}.v-application .mr-md-16{margin-right:64px !important}.v-application .mr-md-auto{margin-right:auto !important}.v-application .mb-md-0{margin-bottom:0px !important}.v-application .mb-md-1{margin-bottom:4px !important}.v-application .mb-md-2{margin-bottom:8px !important}.v-application .mb-md-3{margin-bottom:12px !important}.v-application .mb-md-4{margin-bottom:16px !important}.v-application .mb-md-5{margin-bottom:20px !important}.v-application .mb-md-6{margin-bottom:24px !important}.v-application .mb-md-7{margin-bottom:28px !important}.v-application .mb-md-8{margin-bottom:32px !important}.v-application .mb-md-9{margin-bottom:36px !important}.v-application .mb-md-10{margin-bottom:40px !important}.v-application .mb-md-11{margin-bottom:44px !important}.v-application .mb-md-12{margin-bottom:48px !important}.v-application .mb-md-13{margin-bottom:52px !important}.v-application .mb-md-14{margin-bottom:56px !important}.v-application .mb-md-15{margin-bottom:60px !important}.v-application .mb-md-16{margin-bottom:64px !important}.v-application .mb-md-auto{margin-bottom:auto !important}.v-application .ml-md-0{margin-left:0px !important}.v-application .ml-md-1{margin-left:4px !important}.v-application .ml-md-2{margin-left:8px !important}.v-application .ml-md-3{margin-left:12px !important}.v-application .ml-md-4{margin-left:16px !important}.v-application .ml-md-5{margin-left:20px !important}.v-application .ml-md-6{margin-left:24px !important}.v-application .ml-md-7{margin-left:28px !important}.v-application .ml-md-8{margin-left:32px !important}.v-application .ml-md-9{margin-left:36px !important}.v-application .ml-md-10{margin-left:40px !important}.v-application .ml-md-11{margin-left:44px !important}.v-application .ml-md-12{margin-left:48px !important}.v-application .ml-md-13{margin-left:52px !important}.v-application .ml-md-14{margin-left:56px !important}.v-application .ml-md-15{margin-left:60px !important}.v-application .ml-md-16{margin-left:64px !important}.v-application .ml-md-auto{margin-left:auto !important}.v-application--is-ltr .ms-md-0{margin-left:0px !important}.v-application--is-rtl .ms-md-0{margin-right:0px !important}.v-application--is-ltr .ms-md-1{margin-left:4px !important}.v-application--is-rtl .ms-md-1{margin-right:4px !important}.v-application--is-ltr .ms-md-2{margin-left:8px !important}.v-application--is-rtl .ms-md-2{margin-right:8px !important}.v-application--is-ltr .ms-md-3{margin-left:12px !important}.v-application--is-rtl .ms-md-3{margin-right:12px !important}.v-application--is-ltr .ms-md-4{margin-left:16px !important}.v-application--is-rtl .ms-md-4{margin-right:16px !important}.v-application--is-ltr .ms-md-5{margin-left:20px !important}.v-application--is-rtl .ms-md-5{margin-right:20px !important}.v-application--is-ltr .ms-md-6{margin-left:24px !important}.v-application--is-rtl .ms-md-6{margin-right:24px !important}.v-application--is-ltr .ms-md-7{margin-left:28px !important}.v-application--is-rtl .ms-md-7{margin-right:28px !important}.v-application--is-ltr .ms-md-8{margin-left:32px !important}.v-application--is-rtl .ms-md-8{margin-right:32px !important}.v-application--is-ltr .ms-md-9{margin-left:36px !important}.v-application--is-rtl .ms-md-9{margin-right:36px !important}.v-application--is-ltr .ms-md-10{margin-left:40px !important}.v-application--is-rtl .ms-md-10{margin-right:40px !important}.v-application--is-ltr .ms-md-11{margin-left:44px !important}.v-application--is-rtl .ms-md-11{margin-right:44px !important}.v-application--is-ltr .ms-md-12{margin-left:48px !important}.v-application--is-rtl .ms-md-12{margin-right:48px !important}.v-application--is-ltr .ms-md-13{margin-left:52px !important}.v-application--is-rtl .ms-md-13{margin-right:52px !important}.v-application--is-ltr .ms-md-14{margin-left:56px !important}.v-application--is-rtl .ms-md-14{margin-right:56px !important}.v-application--is-ltr .ms-md-15{margin-left:60px !important}.v-application--is-rtl .ms-md-15{margin-right:60px !important}.v-application--is-ltr .ms-md-16{margin-left:64px !important}.v-application--is-rtl .ms-md-16{margin-right:64px !important}.v-application--is-ltr .ms-md-auto{margin-left:auto !important}.v-application--is-rtl .ms-md-auto{margin-right:auto !important}.v-application--is-ltr .me-md-0{margin-right:0px !important}.v-application--is-rtl .me-md-0{margin-left:0px !important}.v-application--is-ltr .me-md-1{margin-right:4px !important}.v-application--is-rtl .me-md-1{margin-left:4px !important}.v-application--is-ltr .me-md-2{margin-right:8px !important}.v-application--is-rtl .me-md-2{margin-left:8px !important}.v-application--is-ltr .me-md-3{margin-right:12px !important}.v-application--is-rtl .me-md-3{margin-left:12px !important}.v-application--is-ltr .me-md-4{margin-right:16px !important}.v-application--is-rtl .me-md-4{margin-left:16px !important}.v-application--is-ltr .me-md-5{margin-right:20px !important}.v-application--is-rtl .me-md-5{margin-left:20px !important}.v-application--is-ltr .me-md-6{margin-right:24px !important}.v-application--is-rtl .me-md-6{margin-left:24px !important}.v-application--is-ltr .me-md-7{margin-right:28px !important}.v-application--is-rtl .me-md-7{margin-left:28px !important}.v-application--is-ltr .me-md-8{margin-right:32px !important}.v-application--is-rtl .me-md-8{margin-left:32px !important}.v-application--is-ltr .me-md-9{margin-right:36px !important}.v-application--is-rtl .me-md-9{margin-left:36px !important}.v-application--is-ltr .me-md-10{margin-right:40px !important}.v-application--is-rtl .me-md-10{margin-left:40px !important}.v-application--is-ltr .me-md-11{margin-right:44px !important}.v-application--is-rtl .me-md-11{margin-left:44px !important}.v-application--is-ltr .me-md-12{margin-right:48px !important}.v-application--is-rtl .me-md-12{margin-left:48px !important}.v-application--is-ltr .me-md-13{margin-right:52px !important}.v-application--is-rtl .me-md-13{margin-left:52px !important}.v-application--is-ltr .me-md-14{margin-right:56px !important}.v-application--is-rtl .me-md-14{margin-left:56px !important}.v-application--is-ltr .me-md-15{margin-right:60px !important}.v-application--is-rtl .me-md-15{margin-left:60px !important}.v-application--is-ltr .me-md-16{margin-right:64px !important}.v-application--is-rtl .me-md-16{margin-left:64px !important}.v-application--is-ltr .me-md-auto{margin-right:auto !important}.v-application--is-rtl .me-md-auto{margin-left:auto !important}.v-application .ma-md-n1{margin:-4px !important}.v-application .ma-md-n2{margin:-8px !important}.v-application .ma-md-n3{margin:-12px !important}.v-application .ma-md-n4{margin:-16px !important}.v-application .ma-md-n5{margin:-20px !important}.v-application .ma-md-n6{margin:-24px !important}.v-application .ma-md-n7{margin:-28px !important}.v-application .ma-md-n8{margin:-32px !important}.v-application .ma-md-n9{margin:-36px !important}.v-application .ma-md-n10{margin:-40px !important}.v-application .ma-md-n11{margin:-44px !important}.v-application .ma-md-n12{margin:-48px !important}.v-application .ma-md-n13{margin:-52px !important}.v-application .ma-md-n14{margin:-56px !important}.v-application .ma-md-n15{margin:-60px !important}.v-application .ma-md-n16{margin:-64px !important}.v-application .mx-md-n1{margin-right:-4px !important;margin-left:-4px !important}.v-application .mx-md-n2{margin-right:-8px !important;margin-left:-8px !important}.v-application .mx-md-n3{margin-right:-12px !important;margin-left:-12px !important}.v-application .mx-md-n4{margin-right:-16px !important;margin-left:-16px !important}.v-application .mx-md-n5{margin-right:-20px !important;margin-left:-20px !important}.v-application .mx-md-n6{margin-right:-24px !important;margin-left:-24px !important}.v-application .mx-md-n7{margin-right:-28px !important;margin-left:-28px !important}.v-application .mx-md-n8{margin-right:-32px !important;margin-left:-32px !important}.v-application .mx-md-n9{margin-right:-36px !important;margin-left:-36px !important}.v-application .mx-md-n10{margin-right:-40px !important;margin-left:-40px !important}.v-application .mx-md-n11{margin-right:-44px !important;margin-left:-44px !important}.v-application .mx-md-n12{margin-right:-48px !important;margin-left:-48px !important}.v-application .mx-md-n13{margin-right:-52px !important;margin-left:-52px !important}.v-application .mx-md-n14{margin-right:-56px !important;margin-left:-56px !important}.v-application .mx-md-n15{margin-right:-60px !important;margin-left:-60px !important}.v-application .mx-md-n16{margin-right:-64px !important;margin-left:-64px !important}.v-application .my-md-n1{margin-top:-4px !important;margin-bottom:-4px !important}.v-application .my-md-n2{margin-top:-8px !important;margin-bottom:-8px !important}.v-application .my-md-n3{margin-top:-12px !important;margin-bottom:-12px !important}.v-application .my-md-n4{margin-top:-16px !important;margin-bottom:-16px !important}.v-application .my-md-n5{margin-top:-20px !important;margin-bottom:-20px !important}.v-application .my-md-n6{margin-top:-24px !important;margin-bottom:-24px !important}.v-application .my-md-n7{margin-top:-28px !important;margin-bottom:-28px !important}.v-application .my-md-n8{margin-top:-32px !important;margin-bottom:-32px !important}.v-application .my-md-n9{margin-top:-36px !important;margin-bottom:-36px !important}.v-application .my-md-n10{margin-top:-40px !important;margin-bottom:-40px !important}.v-application .my-md-n11{margin-top:-44px !important;margin-bottom:-44px !important}.v-application .my-md-n12{margin-top:-48px !important;margin-bottom:-48px !important}.v-application .my-md-n13{margin-top:-52px !important;margin-bottom:-52px !important}.v-application .my-md-n14{margin-top:-56px !important;margin-bottom:-56px !important}.v-application .my-md-n15{margin-top:-60px !important;margin-bottom:-60px !important}.v-application .my-md-n16{margin-top:-64px !important;margin-bottom:-64px !important}.v-application .mt-md-n1{margin-top:-4px !important}.v-application .mt-md-n2{margin-top:-8px !important}.v-application .mt-md-n3{margin-top:-12px !important}.v-application .mt-md-n4{margin-top:-16px !important}.v-application .mt-md-n5{margin-top:-20px !important}.v-application .mt-md-n6{margin-top:-24px !important}.v-application .mt-md-n7{margin-top:-28px !important}.v-application .mt-md-n8{margin-top:-32px !important}.v-application .mt-md-n9{margin-top:-36px !important}.v-application .mt-md-n10{margin-top:-40px !important}.v-application .mt-md-n11{margin-top:-44px !important}.v-application .mt-md-n12{margin-top:-48px !important}.v-application .mt-md-n13{margin-top:-52px !important}.v-application .mt-md-n14{margin-top:-56px !important}.v-application .mt-md-n15{margin-top:-60px !important}.v-application .mt-md-n16{margin-top:-64px !important}.v-application .mr-md-n1{margin-right:-4px !important}.v-application .mr-md-n2{margin-right:-8px !important}.v-application .mr-md-n3{margin-right:-12px !important}.v-application .mr-md-n4{margin-right:-16px !important}.v-application .mr-md-n5{margin-right:-20px !important}.v-application .mr-md-n6{margin-right:-24px !important}.v-application .mr-md-n7{margin-right:-28px !important}.v-application .mr-md-n8{margin-right:-32px !important}.v-application .mr-md-n9{margin-right:-36px !important}.v-application .mr-md-n10{margin-right:-40px !important}.v-application .mr-md-n11{margin-right:-44px !important}.v-application .mr-md-n12{margin-right:-48px !important}.v-application .mr-md-n13{margin-right:-52px !important}.v-application .mr-md-n14{margin-right:-56px !important}.v-application .mr-md-n15{margin-right:-60px !important}.v-application .mr-md-n16{margin-right:-64px !important}.v-application .mb-md-n1{margin-bottom:-4px !important}.v-application .mb-md-n2{margin-bottom:-8px !important}.v-application .mb-md-n3{margin-bottom:-12px !important}.v-application .mb-md-n4{margin-bottom:-16px !important}.v-application .mb-md-n5{margin-bottom:-20px !important}.v-application .mb-md-n6{margin-bottom:-24px !important}.v-application .mb-md-n7{margin-bottom:-28px !important}.v-application .mb-md-n8{margin-bottom:-32px !important}.v-application .mb-md-n9{margin-bottom:-36px !important}.v-application .mb-md-n10{margin-bottom:-40px !important}.v-application .mb-md-n11{margin-bottom:-44px !important}.v-application .mb-md-n12{margin-bottom:-48px !important}.v-application .mb-md-n13{margin-bottom:-52px !important}.v-application .mb-md-n14{margin-bottom:-56px !important}.v-application .mb-md-n15{margin-bottom:-60px !important}.v-application .mb-md-n16{margin-bottom:-64px !important}.v-application .ml-md-n1{margin-left:-4px !important}.v-application .ml-md-n2{margin-left:-8px !important}.v-application .ml-md-n3{margin-left:-12px !important}.v-application .ml-md-n4{margin-left:-16px !important}.v-application .ml-md-n5{margin-left:-20px !important}.v-application .ml-md-n6{margin-left:-24px !important}.v-application .ml-md-n7{margin-left:-28px !important}.v-application .ml-md-n8{margin-left:-32px !important}.v-application .ml-md-n9{margin-left:-36px !important}.v-application .ml-md-n10{margin-left:-40px !important}.v-application .ml-md-n11{margin-left:-44px !important}.v-application .ml-md-n12{margin-left:-48px !important}.v-application .ml-md-n13{margin-left:-52px !important}.v-application .ml-md-n14{margin-left:-56px !important}.v-application .ml-md-n15{margin-left:-60px !important}.v-application .ml-md-n16{margin-left:-64px !important}.v-application--is-ltr .ms-md-n1{margin-left:-4px !important}.v-application--is-rtl .ms-md-n1{margin-right:-4px !important}.v-application--is-ltr .ms-md-n2{margin-left:-8px !important}.v-application--is-rtl .ms-md-n2{margin-right:-8px !important}.v-application--is-ltr .ms-md-n3{margin-left:-12px !important}.v-application--is-rtl .ms-md-n3{margin-right:-12px !important}.v-application--is-ltr .ms-md-n4{margin-left:-16px !important}.v-application--is-rtl .ms-md-n4{margin-right:-16px !important}.v-application--is-ltr .ms-md-n5{margin-left:-20px !important}.v-application--is-rtl .ms-md-n5{margin-right:-20px !important}.v-application--is-ltr .ms-md-n6{margin-left:-24px !important}.v-application--is-rtl .ms-md-n6{margin-right:-24px !important}.v-application--is-ltr .ms-md-n7{margin-left:-28px !important}.v-application--is-rtl .ms-md-n7{margin-right:-28px !important}.v-application--is-ltr .ms-md-n8{margin-left:-32px !important}.v-application--is-rtl .ms-md-n8{margin-right:-32px !important}.v-application--is-ltr .ms-md-n9{margin-left:-36px !important}.v-application--is-rtl .ms-md-n9{margin-right:-36px !important}.v-application--is-ltr .ms-md-n10{margin-left:-40px !important}.v-application--is-rtl .ms-md-n10{margin-right:-40px !important}.v-application--is-ltr .ms-md-n11{margin-left:-44px !important}.v-application--is-rtl .ms-md-n11{margin-right:-44px !important}.v-application--is-ltr .ms-md-n12{margin-left:-48px !important}.v-application--is-rtl .ms-md-n12{margin-right:-48px !important}.v-application--is-ltr .ms-md-n13{margin-left:-52px !important}.v-application--is-rtl .ms-md-n13{margin-right:-52px !important}.v-application--is-ltr .ms-md-n14{margin-left:-56px !important}.v-application--is-rtl .ms-md-n14{margin-right:-56px !important}.v-application--is-ltr .ms-md-n15{margin-left:-60px !important}.v-application--is-rtl .ms-md-n15{margin-right:-60px !important}.v-application--is-ltr .ms-md-n16{margin-left:-64px !important}.v-application--is-rtl .ms-md-n16{margin-right:-64px !important}.v-application--is-ltr .me-md-n1{margin-right:-4px !important}.v-application--is-rtl .me-md-n1{margin-left:-4px !important}.v-application--is-ltr .me-md-n2{margin-right:-8px !important}.v-application--is-rtl .me-md-n2{margin-left:-8px !important}.v-application--is-ltr .me-md-n3{margin-right:-12px !important}.v-application--is-rtl .me-md-n3{margin-left:-12px !important}.v-application--is-ltr .me-md-n4{margin-right:-16px !important}.v-application--is-rtl .me-md-n4{margin-left:-16px !important}.v-application--is-ltr .me-md-n5{margin-right:-20px !important}.v-application--is-rtl .me-md-n5{margin-left:-20px !important}.v-application--is-ltr .me-md-n6{margin-right:-24px !important}.v-application--is-rtl .me-md-n6{margin-left:-24px !important}.v-application--is-ltr .me-md-n7{margin-right:-28px !important}.v-application--is-rtl .me-md-n7{margin-left:-28px !important}.v-application--is-ltr .me-md-n8{margin-right:-32px !important}.v-application--is-rtl .me-md-n8{margin-left:-32px !important}.v-application--is-ltr .me-md-n9{margin-right:-36px !important}.v-application--is-rtl .me-md-n9{margin-left:-36px !important}.v-application--is-ltr .me-md-n10{margin-right:-40px !important}.v-application--is-rtl .me-md-n10{margin-left:-40px !important}.v-application--is-ltr .me-md-n11{margin-right:-44px !important}.v-application--is-rtl .me-md-n11{margin-left:-44px !important}.v-application--is-ltr .me-md-n12{margin-right:-48px !important}.v-application--is-rtl .me-md-n12{margin-left:-48px !important}.v-application--is-ltr .me-md-n13{margin-right:-52px !important}.v-application--is-rtl .me-md-n13{margin-left:-52px !important}.v-application--is-ltr .me-md-n14{margin-right:-56px !important}.v-application--is-rtl .me-md-n14{margin-left:-56px !important}.v-application--is-ltr .me-md-n15{margin-right:-60px !important}.v-application--is-rtl .me-md-n15{margin-left:-60px !important}.v-application--is-ltr .me-md-n16{margin-right:-64px !important}.v-application--is-rtl .me-md-n16{margin-left:-64px !important}.v-application .pa-md-0{padding:0px !important}.v-application .pa-md-1{padding:4px !important}.v-application .pa-md-2{padding:8px !important}.v-application .pa-md-3{padding:12px !important}.v-application .pa-md-4{padding:16px !important}.v-application .pa-md-5{padding:20px !important}.v-application .pa-md-6{padding:24px !important}.v-application .pa-md-7{padding:28px !important}.v-application .pa-md-8{padding:32px !important}.v-application .pa-md-9{padding:36px !important}.v-application .pa-md-10{padding:40px !important}.v-application .pa-md-11{padding:44px !important}.v-application .pa-md-12{padding:48px !important}.v-application .pa-md-13{padding:52px !important}.v-application .pa-md-14{padding:56px !important}.v-application .pa-md-15{padding:60px !important}.v-application .pa-md-16{padding:64px !important}.v-application .px-md-0{padding-right:0px !important;padding-left:0px !important}.v-application .px-md-1{padding-right:4px !important;padding-left:4px !important}.v-application .px-md-2{padding-right:8px !important;padding-left:8px !important}.v-application .px-md-3{padding-right:12px !important;padding-left:12px !important}.v-application .px-md-4{padding-right:16px !important;padding-left:16px !important}.v-application .px-md-5{padding-right:20px !important;padding-left:20px !important}.v-application .px-md-6{padding-right:24px !important;padding-left:24px !important}.v-application .px-md-7{padding-right:28px !important;padding-left:28px !important}.v-application .px-md-8{padding-right:32px !important;padding-left:32px !important}.v-application .px-md-9{padding-right:36px !important;padding-left:36px !important}.v-application .px-md-10{padding-right:40px !important;padding-left:40px !important}.v-application .px-md-11{padding-right:44px !important;padding-left:44px !important}.v-application .px-md-12{padding-right:48px !important;padding-left:48px !important}.v-application .px-md-13{padding-right:52px !important;padding-left:52px !important}.v-application .px-md-14{padding-right:56px !important;padding-left:56px !important}.v-application .px-md-15{padding-right:60px !important;padding-left:60px !important}.v-application .px-md-16{padding-right:64px !important;padding-left:64px !important}.v-application .py-md-0{padding-top:0px !important;padding-bottom:0px !important}.v-application .py-md-1{padding-top:4px !important;padding-bottom:4px !important}.v-application .py-md-2{padding-top:8px !important;padding-bottom:8px !important}.v-application .py-md-3{padding-top:12px !important;padding-bottom:12px !important}.v-application .py-md-4{padding-top:16px !important;padding-bottom:16px !important}.v-application .py-md-5{padding-top:20px !important;padding-bottom:20px !important}.v-application .py-md-6{padding-top:24px !important;padding-bottom:24px !important}.v-application .py-md-7{padding-top:28px !important;padding-bottom:28px !important}.v-application .py-md-8{padding-top:32px !important;padding-bottom:32px !important}.v-application .py-md-9{padding-top:36px !important;padding-bottom:36px !important}.v-application .py-md-10{padding-top:40px !important;padding-bottom:40px !important}.v-application .py-md-11{padding-top:44px !important;padding-bottom:44px !important}.v-application .py-md-12{padding-top:48px !important;padding-bottom:48px !important}.v-application .py-md-13{padding-top:52px !important;padding-bottom:52px !important}.v-application .py-md-14{padding-top:56px !important;padding-bottom:56px !important}.v-application .py-md-15{padding-top:60px !important;padding-bottom:60px !important}.v-application .py-md-16{padding-top:64px !important;padding-bottom:64px !important}.v-application .pt-md-0{padding-top:0px !important}.v-application .pt-md-1{padding-top:4px !important}.v-application .pt-md-2{padding-top:8px !important}.v-application .pt-md-3{padding-top:12px !important}.v-application .pt-md-4{padding-top:16px !important}.v-application .pt-md-5{padding-top:20px !important}.v-application .pt-md-6{padding-top:24px !important}.v-application .pt-md-7{padding-top:28px !important}.v-application .pt-md-8{padding-top:32px !important}.v-application .pt-md-9{padding-top:36px !important}.v-application .pt-md-10{padding-top:40px !important}.v-application .pt-md-11{padding-top:44px !important}.v-application .pt-md-12{padding-top:48px !important}.v-application .pt-md-13{padding-top:52px !important}.v-application .pt-md-14{padding-top:56px !important}.v-application .pt-md-15{padding-top:60px !important}.v-application .pt-md-16{padding-top:64px !important}.v-application .pr-md-0{padding-right:0px !important}.v-application .pr-md-1{padding-right:4px !important}.v-application .pr-md-2{padding-right:8px !important}.v-application .pr-md-3{padding-right:12px !important}.v-application .pr-md-4{padding-right:16px !important}.v-application .pr-md-5{padding-right:20px !important}.v-application .pr-md-6{padding-right:24px !important}.v-application .pr-md-7{padding-right:28px !important}.v-application .pr-md-8{padding-right:32px !important}.v-application .pr-md-9{padding-right:36px !important}.v-application .pr-md-10{padding-right:40px !important}.v-application .pr-md-11{padding-right:44px !important}.v-application .pr-md-12{padding-right:48px !important}.v-application .pr-md-13{padding-right:52px !important}.v-application .pr-md-14{padding-right:56px !important}.v-application .pr-md-15{padding-right:60px !important}.v-application .pr-md-16{padding-right:64px !important}.v-application .pb-md-0{padding-bottom:0px !important}.v-application .pb-md-1{padding-bottom:4px !important}.v-application .pb-md-2{padding-bottom:8px !important}.v-application .pb-md-3{padding-bottom:12px !important}.v-application .pb-md-4{padding-bottom:16px !important}.v-application .pb-md-5{padding-bottom:20px !important}.v-application .pb-md-6{padding-bottom:24px !important}.v-application .pb-md-7{padding-bottom:28px !important}.v-application .pb-md-8{padding-bottom:32px !important}.v-application .pb-md-9{padding-bottom:36px !important}.v-application .pb-md-10{padding-bottom:40px !important}.v-application .pb-md-11{padding-bottom:44px !important}.v-application .pb-md-12{padding-bottom:48px !important}.v-application .pb-md-13{padding-bottom:52px !important}.v-application .pb-md-14{padding-bottom:56px !important}.v-application .pb-md-15{padding-bottom:60px !important}.v-application .pb-md-16{padding-bottom:64px !important}.v-application .pl-md-0{padding-left:0px !important}.v-application .pl-md-1{padding-left:4px !important}.v-application .pl-md-2{padding-left:8px !important}.v-application .pl-md-3{padding-left:12px !important}.v-application .pl-md-4{padding-left:16px !important}.v-application .pl-md-5{padding-left:20px !important}.v-application .pl-md-6{padding-left:24px !important}.v-application .pl-md-7{padding-left:28px !important}.v-application .pl-md-8{padding-left:32px !important}.v-application .pl-md-9{padding-left:36px !important}.v-application .pl-md-10{padding-left:40px !important}.v-application .pl-md-11{padding-left:44px !important}.v-application .pl-md-12{padding-left:48px !important}.v-application .pl-md-13{padding-left:52px !important}.v-application .pl-md-14{padding-left:56px !important}.v-application .pl-md-15{padding-left:60px !important}.v-application .pl-md-16{padding-left:64px !important}.v-application--is-ltr .ps-md-0{padding-left:0px !important}.v-application--is-rtl .ps-md-0{padding-right:0px !important}.v-application--is-ltr .ps-md-1{padding-left:4px !important}.v-application--is-rtl .ps-md-1{padding-right:4px !important}.v-application--is-ltr .ps-md-2{padding-left:8px !important}.v-application--is-rtl .ps-md-2{padding-right:8px !important}.v-application--is-ltr .ps-md-3{padding-left:12px !important}.v-application--is-rtl .ps-md-3{padding-right:12px !important}.v-application--is-ltr .ps-md-4{padding-left:16px !important}.v-application--is-rtl .ps-md-4{padding-right:16px !important}.v-application--is-ltr .ps-md-5{padding-left:20px !important}.v-application--is-rtl .ps-md-5{padding-right:20px !important}.v-application--is-ltr .ps-md-6{padding-left:24px !important}.v-application--is-rtl .ps-md-6{padding-right:24px !important}.v-application--is-ltr .ps-md-7{padding-left:28px !important}.v-application--is-rtl .ps-md-7{padding-right:28px !important}.v-application--is-ltr .ps-md-8{padding-left:32px !important}.v-application--is-rtl .ps-md-8{padding-right:32px !important}.v-application--is-ltr .ps-md-9{padding-left:36px !important}.v-application--is-rtl .ps-md-9{padding-right:36px !important}.v-application--is-ltr .ps-md-10{padding-left:40px !important}.v-application--is-rtl .ps-md-10{padding-right:40px !important}.v-application--is-ltr .ps-md-11{padding-left:44px !important}.v-application--is-rtl .ps-md-11{padding-right:44px !important}.v-application--is-ltr .ps-md-12{padding-left:48px !important}.v-application--is-rtl .ps-md-12{padding-right:48px !important}.v-application--is-ltr .ps-md-13{padding-left:52px !important}.v-application--is-rtl .ps-md-13{padding-right:52px !important}.v-application--is-ltr .ps-md-14{padding-left:56px !important}.v-application--is-rtl .ps-md-14{padding-right:56px !important}.v-application--is-ltr .ps-md-15{padding-left:60px !important}.v-application--is-rtl .ps-md-15{padding-right:60px !important}.v-application--is-ltr .ps-md-16{padding-left:64px !important}.v-application--is-rtl .ps-md-16{padding-right:64px !important}.v-application--is-ltr .pe-md-0{padding-right:0px !important}.v-application--is-rtl .pe-md-0{padding-left:0px !important}.v-application--is-ltr .pe-md-1{padding-right:4px !important}.v-application--is-rtl .pe-md-1{padding-left:4px !important}.v-application--is-ltr .pe-md-2{padding-right:8px !important}.v-application--is-rtl .pe-md-2{padding-left:8px !important}.v-application--is-ltr .pe-md-3{padding-right:12px !important}.v-application--is-rtl .pe-md-3{padding-left:12px !important}.v-application--is-ltr .pe-md-4{padding-right:16px !important}.v-application--is-rtl .pe-md-4{padding-left:16px !important}.v-application--is-ltr .pe-md-5{padding-right:20px !important}.v-application--is-rtl .pe-md-5{padding-left:20px !important}.v-application--is-ltr .pe-md-6{padding-right:24px !important}.v-application--is-rtl .pe-md-6{padding-left:24px !important}.v-application--is-ltr .pe-md-7{padding-right:28px !important}.v-application--is-rtl .pe-md-7{padding-left:28px !important}.v-application--is-ltr .pe-md-8{padding-right:32px !important}.v-application--is-rtl .pe-md-8{padding-left:32px !important}.v-application--is-ltr .pe-md-9{padding-right:36px !important}.v-application--is-rtl .pe-md-9{padding-left:36px !important}.v-application--is-ltr .pe-md-10{padding-right:40px !important}.v-application--is-rtl .pe-md-10{padding-left:40px !important}.v-application--is-ltr .pe-md-11{padding-right:44px !important}.v-application--is-rtl .pe-md-11{padding-left:44px !important}.v-application--is-ltr .pe-md-12{padding-right:48px !important}.v-application--is-rtl .pe-md-12{padding-left:48px !important}.v-application--is-ltr .pe-md-13{padding-right:52px !important}.v-application--is-rtl .pe-md-13{padding-left:52px !important}.v-application--is-ltr .pe-md-14{padding-right:56px !important}.v-application--is-rtl .pe-md-14{padding-left:56px !important}.v-application--is-ltr .pe-md-15{padding-right:60px !important}.v-application--is-rtl .pe-md-15{padding-left:60px !important}.v-application--is-ltr .pe-md-16{padding-right:64px !important}.v-application--is-rtl .pe-md-16{padding-left:64px !important}.v-application .text-md-left{text-align:left !important}.v-application .text-md-right{text-align:right !important}.v-application .text-md-center{text-align:center !important}.v-application .text-md-justify{text-align:justify !important}.v-application .text-md-start{text-align:start !important}.v-application .text-md-end{text-align:end !important}.v-application .text-md-h1{font-size:6rem !important;font-weight:300;line-height:6rem;letter-spacing:-0.015625em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-md-h2{font-size:3.75rem !important;font-weight:300;line-height:3.75rem;letter-spacing:-0.0083333333em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-md-h3{font-size:3rem !important;font-weight:400;line-height:3.125rem;letter-spacing:normal !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-md-h4{font-size:2.125rem !important;font-weight:400;line-height:2.5rem;letter-spacing:.0073529412em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-md-h5{font-size:1.5rem !important;font-weight:400;line-height:2rem;letter-spacing:normal !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-md-h6{font-size:1.25rem !important;font-weight:500;line-height:2rem;letter-spacing:.0125em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-md-subtitle-1{font-size:1rem !important;font-weight:normal;line-height:1.75rem;letter-spacing:.009375em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-md-subtitle-2{font-size:.875rem !important;font-weight:500;line-height:1.375rem;letter-spacing:.0071428571em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-md-body-1{font-size:1rem !important;font-weight:400;line-height:1.5rem;letter-spacing:.03125em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-md-body-2{font-size:.875rem !important;font-weight:400;line-height:1.25rem;letter-spacing:.0178571429em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-md-button{font-size:.875rem !important;font-weight:500;line-height:2.25rem;letter-spacing:.0892857143em !important;font-family:\"Roboto\",sans-serif !important;text-transform:uppercase !important}.v-application .text-md-caption{font-size:.75rem !important;font-weight:400;line-height:1.25rem;letter-spacing:.0333333333em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-md-overline{font-size:.75rem !important;font-weight:500;line-height:2rem;letter-spacing:.1666666667em !important;font-family:\"Roboto\",sans-serif !important;text-transform:uppercase !important}}@media(min-width: 1264px){.v-application .d-lg-none{display:none !important}.v-application .d-lg-inline{display:inline !important}.v-application .d-lg-inline-block{display:inline-block !important}.v-application .d-lg-block{display:block !important}.v-application .d-lg-table{display:table !important}.v-application .d-lg-table-row{display:table-row !important}.v-application .d-lg-table-cell{display:table-cell !important}.v-application .d-lg-flex{display:flex !important}.v-application .d-lg-inline-flex{display:inline-flex !important}.v-application .float-lg-none{float:none !important}.v-application .float-lg-left{float:left !important}.v-application .float-lg-right{float:right !important}.v-application--is-rtl .float-lg-end{float:left !important}.v-application--is-rtl .float-lg-start{float:right !important}.v-application--is-ltr .float-lg-end{float:right !important}.v-application--is-ltr .float-lg-start{float:left !important}.v-application .flex-lg-fill{flex:1 1 auto !important}.v-application .flex-lg-row{flex-direction:row !important}.v-application .flex-lg-column{flex-direction:column !important}.v-application .flex-lg-row-reverse{flex-direction:row-reverse !important}.v-application .flex-lg-column-reverse{flex-direction:column-reverse !important}.v-application .flex-lg-grow-0{flex-grow:0 !important}.v-application .flex-lg-grow-1{flex-grow:1 !important}.v-application .flex-lg-shrink-0{flex-shrink:0 !important}.v-application .flex-lg-shrink-1{flex-shrink:1 !important}.v-application .flex-lg-wrap{flex-wrap:wrap !important}.v-application .flex-lg-nowrap{flex-wrap:nowrap !important}.v-application .flex-lg-wrap-reverse{flex-wrap:wrap-reverse !important}.v-application .justify-lg-start{justify-content:flex-start !important}.v-application .justify-lg-end{justify-content:flex-end !important}.v-application .justify-lg-center{justify-content:center !important}.v-application .justify-lg-space-between{justify-content:space-between !important}.v-application .justify-lg-space-around{justify-content:space-around !important}.v-application .align-lg-start{align-items:flex-start !important}.v-application .align-lg-end{align-items:flex-end !important}.v-application .align-lg-center{align-items:center !important}.v-application .align-lg-baseline{align-items:baseline !important}.v-application .align-lg-stretch{align-items:stretch !important}.v-application .align-content-lg-start{align-content:flex-start !important}.v-application .align-content-lg-end{align-content:flex-end !important}.v-application .align-content-lg-center{align-content:center !important}.v-application .align-content-lg-space-between{align-content:space-between !important}.v-application .align-content-lg-space-around{align-content:space-around !important}.v-application .align-content-lg-stretch{align-content:stretch !important}.v-application .align-self-lg-auto{align-self:auto !important}.v-application .align-self-lg-start{align-self:flex-start !important}.v-application .align-self-lg-end{align-self:flex-end !important}.v-application .align-self-lg-center{align-self:center !important}.v-application .align-self-lg-baseline{align-self:baseline !important}.v-application .align-self-lg-stretch{align-self:stretch !important}.v-application .order-lg-first{order:-1 !important}.v-application .order-lg-0{order:0 !important}.v-application .order-lg-1{order:1 !important}.v-application .order-lg-2{order:2 !important}.v-application .order-lg-3{order:3 !important}.v-application .order-lg-4{order:4 !important}.v-application .order-lg-5{order:5 !important}.v-application .order-lg-6{order:6 !important}.v-application .order-lg-7{order:7 !important}.v-application .order-lg-8{order:8 !important}.v-application .order-lg-9{order:9 !important}.v-application .order-lg-10{order:10 !important}.v-application .order-lg-11{order:11 !important}.v-application .order-lg-12{order:12 !important}.v-application .order-lg-last{order:13 !important}.v-application .ma-lg-0{margin:0px !important}.v-application .ma-lg-1{margin:4px !important}.v-application .ma-lg-2{margin:8px !important}.v-application .ma-lg-3{margin:12px !important}.v-application .ma-lg-4{margin:16px !important}.v-application .ma-lg-5{margin:20px !important}.v-application .ma-lg-6{margin:24px !important}.v-application .ma-lg-7{margin:28px !important}.v-application .ma-lg-8{margin:32px !important}.v-application .ma-lg-9{margin:36px !important}.v-application .ma-lg-10{margin:40px !important}.v-application .ma-lg-11{margin:44px !important}.v-application .ma-lg-12{margin:48px !important}.v-application .ma-lg-13{margin:52px !important}.v-application .ma-lg-14{margin:56px !important}.v-application .ma-lg-15{margin:60px !important}.v-application .ma-lg-16{margin:64px !important}.v-application .ma-lg-auto{margin:auto !important}.v-application .mx-lg-0{margin-right:0px !important;margin-left:0px !important}.v-application .mx-lg-1{margin-right:4px !important;margin-left:4px !important}.v-application .mx-lg-2{margin-right:8px !important;margin-left:8px !important}.v-application .mx-lg-3{margin-right:12px !important;margin-left:12px !important}.v-application .mx-lg-4{margin-right:16px !important;margin-left:16px !important}.v-application .mx-lg-5{margin-right:20px !important;margin-left:20px !important}.v-application .mx-lg-6{margin-right:24px !important;margin-left:24px !important}.v-application .mx-lg-7{margin-right:28px !important;margin-left:28px !important}.v-application .mx-lg-8{margin-right:32px !important;margin-left:32px !important}.v-application .mx-lg-9{margin-right:36px !important;margin-left:36px !important}.v-application .mx-lg-10{margin-right:40px !important;margin-left:40px !important}.v-application .mx-lg-11{margin-right:44px !important;margin-left:44px !important}.v-application .mx-lg-12{margin-right:48px !important;margin-left:48px !important}.v-application .mx-lg-13{margin-right:52px !important;margin-left:52px !important}.v-application .mx-lg-14{margin-right:56px !important;margin-left:56px !important}.v-application .mx-lg-15{margin-right:60px !important;margin-left:60px !important}.v-application .mx-lg-16{margin-right:64px !important;margin-left:64px !important}.v-application .mx-lg-auto{margin-right:auto !important;margin-left:auto !important}.v-application .my-lg-0{margin-top:0px !important;margin-bottom:0px !important}.v-application .my-lg-1{margin-top:4px !important;margin-bottom:4px !important}.v-application .my-lg-2{margin-top:8px !important;margin-bottom:8px !important}.v-application .my-lg-3{margin-top:12px !important;margin-bottom:12px !important}.v-application .my-lg-4{margin-top:16px !important;margin-bottom:16px !important}.v-application .my-lg-5{margin-top:20px !important;margin-bottom:20px !important}.v-application .my-lg-6{margin-top:24px !important;margin-bottom:24px !important}.v-application .my-lg-7{margin-top:28px !important;margin-bottom:28px !important}.v-application .my-lg-8{margin-top:32px !important;margin-bottom:32px !important}.v-application .my-lg-9{margin-top:36px !important;margin-bottom:36px !important}.v-application .my-lg-10{margin-top:40px !important;margin-bottom:40px !important}.v-application .my-lg-11{margin-top:44px !important;margin-bottom:44px !important}.v-application .my-lg-12{margin-top:48px !important;margin-bottom:48px !important}.v-application .my-lg-13{margin-top:52px !important;margin-bottom:52px !important}.v-application .my-lg-14{margin-top:56px !important;margin-bottom:56px !important}.v-application .my-lg-15{margin-top:60px !important;margin-bottom:60px !important}.v-application .my-lg-16{margin-top:64px !important;margin-bottom:64px !important}.v-application .my-lg-auto{margin-top:auto !important;margin-bottom:auto !important}.v-application .mt-lg-0{margin-top:0px !important}.v-application .mt-lg-1{margin-top:4px !important}.v-application .mt-lg-2{margin-top:8px !important}.v-application .mt-lg-3{margin-top:12px !important}.v-application .mt-lg-4{margin-top:16px !important}.v-application .mt-lg-5{margin-top:20px !important}.v-application .mt-lg-6{margin-top:24px !important}.v-application .mt-lg-7{margin-top:28px !important}.v-application .mt-lg-8{margin-top:32px !important}.v-application .mt-lg-9{margin-top:36px !important}.v-application .mt-lg-10{margin-top:40px !important}.v-application .mt-lg-11{margin-top:44px !important}.v-application .mt-lg-12{margin-top:48px !important}.v-application .mt-lg-13{margin-top:52px !important}.v-application .mt-lg-14{margin-top:56px !important}.v-application .mt-lg-15{margin-top:60px !important}.v-application .mt-lg-16{margin-top:64px !important}.v-application .mt-lg-auto{margin-top:auto !important}.v-application .mr-lg-0{margin-right:0px !important}.v-application .mr-lg-1{margin-right:4px !important}.v-application .mr-lg-2{margin-right:8px !important}.v-application .mr-lg-3{margin-right:12px !important}.v-application .mr-lg-4{margin-right:16px !important}.v-application .mr-lg-5{margin-right:20px !important}.v-application .mr-lg-6{margin-right:24px !important}.v-application .mr-lg-7{margin-right:28px !important}.v-application .mr-lg-8{margin-right:32px !important}.v-application .mr-lg-9{margin-right:36px !important}.v-application .mr-lg-10{margin-right:40px !important}.v-application .mr-lg-11{margin-right:44px !important}.v-application .mr-lg-12{margin-right:48px !important}.v-application .mr-lg-13{margin-right:52px !important}.v-application .mr-lg-14{margin-right:56px !important}.v-application .mr-lg-15{margin-right:60px !important}.v-application .mr-lg-16{margin-right:64px !important}.v-application .mr-lg-auto{margin-right:auto !important}.v-application .mb-lg-0{margin-bottom:0px !important}.v-application .mb-lg-1{margin-bottom:4px !important}.v-application .mb-lg-2{margin-bottom:8px !important}.v-application .mb-lg-3{margin-bottom:12px !important}.v-application .mb-lg-4{margin-bottom:16px !important}.v-application .mb-lg-5{margin-bottom:20px !important}.v-application .mb-lg-6{margin-bottom:24px !important}.v-application .mb-lg-7{margin-bottom:28px !important}.v-application .mb-lg-8{margin-bottom:32px !important}.v-application .mb-lg-9{margin-bottom:36px !important}.v-application .mb-lg-10{margin-bottom:40px !important}.v-application .mb-lg-11{margin-bottom:44px !important}.v-application .mb-lg-12{margin-bottom:48px !important}.v-application .mb-lg-13{margin-bottom:52px !important}.v-application .mb-lg-14{margin-bottom:56px !important}.v-application .mb-lg-15{margin-bottom:60px !important}.v-application .mb-lg-16{margin-bottom:64px !important}.v-application .mb-lg-auto{margin-bottom:auto !important}.v-application .ml-lg-0{margin-left:0px !important}.v-application .ml-lg-1{margin-left:4px !important}.v-application .ml-lg-2{margin-left:8px !important}.v-application .ml-lg-3{margin-left:12px !important}.v-application .ml-lg-4{margin-left:16px !important}.v-application .ml-lg-5{margin-left:20px !important}.v-application .ml-lg-6{margin-left:24px !important}.v-application .ml-lg-7{margin-left:28px !important}.v-application .ml-lg-8{margin-left:32px !important}.v-application .ml-lg-9{margin-left:36px !important}.v-application .ml-lg-10{margin-left:40px !important}.v-application .ml-lg-11{margin-left:44px !important}.v-application .ml-lg-12{margin-left:48px !important}.v-application .ml-lg-13{margin-left:52px !important}.v-application .ml-lg-14{margin-left:56px !important}.v-application .ml-lg-15{margin-left:60px !important}.v-application .ml-lg-16{margin-left:64px !important}.v-application .ml-lg-auto{margin-left:auto !important}.v-application--is-ltr .ms-lg-0{margin-left:0px !important}.v-application--is-rtl .ms-lg-0{margin-right:0px !important}.v-application--is-ltr .ms-lg-1{margin-left:4px !important}.v-application--is-rtl .ms-lg-1{margin-right:4px !important}.v-application--is-ltr .ms-lg-2{margin-left:8px !important}.v-application--is-rtl .ms-lg-2{margin-right:8px !important}.v-application--is-ltr .ms-lg-3{margin-left:12px !important}.v-application--is-rtl .ms-lg-3{margin-right:12px !important}.v-application--is-ltr .ms-lg-4{margin-left:16px !important}.v-application--is-rtl .ms-lg-4{margin-right:16px !important}.v-application--is-ltr .ms-lg-5{margin-left:20px !important}.v-application--is-rtl .ms-lg-5{margin-right:20px !important}.v-application--is-ltr .ms-lg-6{margin-left:24px !important}.v-application--is-rtl .ms-lg-6{margin-right:24px !important}.v-application--is-ltr .ms-lg-7{margin-left:28px !important}.v-application--is-rtl .ms-lg-7{margin-right:28px !important}.v-application--is-ltr .ms-lg-8{margin-left:32px !important}.v-application--is-rtl .ms-lg-8{margin-right:32px !important}.v-application--is-ltr .ms-lg-9{margin-left:36px !important}.v-application--is-rtl .ms-lg-9{margin-right:36px !important}.v-application--is-ltr .ms-lg-10{margin-left:40px !important}.v-application--is-rtl .ms-lg-10{margin-right:40px !important}.v-application--is-ltr .ms-lg-11{margin-left:44px !important}.v-application--is-rtl .ms-lg-11{margin-right:44px !important}.v-application--is-ltr .ms-lg-12{margin-left:48px !important}.v-application--is-rtl .ms-lg-12{margin-right:48px !important}.v-application--is-ltr .ms-lg-13{margin-left:52px !important}.v-application--is-rtl .ms-lg-13{margin-right:52px !important}.v-application--is-ltr .ms-lg-14{margin-left:56px !important}.v-application--is-rtl .ms-lg-14{margin-right:56px !important}.v-application--is-ltr .ms-lg-15{margin-left:60px !important}.v-application--is-rtl .ms-lg-15{margin-right:60px !important}.v-application--is-ltr .ms-lg-16{margin-left:64px !important}.v-application--is-rtl .ms-lg-16{margin-right:64px !important}.v-application--is-ltr .ms-lg-auto{margin-left:auto !important}.v-application--is-rtl .ms-lg-auto{margin-right:auto !important}.v-application--is-ltr .me-lg-0{margin-right:0px !important}.v-application--is-rtl .me-lg-0{margin-left:0px !important}.v-application--is-ltr .me-lg-1{margin-right:4px !important}.v-application--is-rtl .me-lg-1{margin-left:4px !important}.v-application--is-ltr .me-lg-2{margin-right:8px !important}.v-application--is-rtl .me-lg-2{margin-left:8px !important}.v-application--is-ltr .me-lg-3{margin-right:12px !important}.v-application--is-rtl .me-lg-3{margin-left:12px !important}.v-application--is-ltr .me-lg-4{margin-right:16px !important}.v-application--is-rtl .me-lg-4{margin-left:16px !important}.v-application--is-ltr .me-lg-5{margin-right:20px !important}.v-application--is-rtl .me-lg-5{margin-left:20px !important}.v-application--is-ltr .me-lg-6{margin-right:24px !important}.v-application--is-rtl .me-lg-6{margin-left:24px !important}.v-application--is-ltr .me-lg-7{margin-right:28px !important}.v-application--is-rtl .me-lg-7{margin-left:28px !important}.v-application--is-ltr .me-lg-8{margin-right:32px !important}.v-application--is-rtl .me-lg-8{margin-left:32px !important}.v-application--is-ltr .me-lg-9{margin-right:36px !important}.v-application--is-rtl .me-lg-9{margin-left:36px !important}.v-application--is-ltr .me-lg-10{margin-right:40px !important}.v-application--is-rtl .me-lg-10{margin-left:40px !important}.v-application--is-ltr .me-lg-11{margin-right:44px !important}.v-application--is-rtl .me-lg-11{margin-left:44px !important}.v-application--is-ltr .me-lg-12{margin-right:48px !important}.v-application--is-rtl .me-lg-12{margin-left:48px !important}.v-application--is-ltr .me-lg-13{margin-right:52px !important}.v-application--is-rtl .me-lg-13{margin-left:52px !important}.v-application--is-ltr .me-lg-14{margin-right:56px !important}.v-application--is-rtl .me-lg-14{margin-left:56px !important}.v-application--is-ltr .me-lg-15{margin-right:60px !important}.v-application--is-rtl .me-lg-15{margin-left:60px !important}.v-application--is-ltr .me-lg-16{margin-right:64px !important}.v-application--is-rtl .me-lg-16{margin-left:64px !important}.v-application--is-ltr .me-lg-auto{margin-right:auto !important}.v-application--is-rtl .me-lg-auto{margin-left:auto !important}.v-application .ma-lg-n1{margin:-4px !important}.v-application .ma-lg-n2{margin:-8px !important}.v-application .ma-lg-n3{margin:-12px !important}.v-application .ma-lg-n4{margin:-16px !important}.v-application .ma-lg-n5{margin:-20px !important}.v-application .ma-lg-n6{margin:-24px !important}.v-application .ma-lg-n7{margin:-28px !important}.v-application .ma-lg-n8{margin:-32px !important}.v-application .ma-lg-n9{margin:-36px !important}.v-application .ma-lg-n10{margin:-40px !important}.v-application .ma-lg-n11{margin:-44px !important}.v-application .ma-lg-n12{margin:-48px !important}.v-application .ma-lg-n13{margin:-52px !important}.v-application .ma-lg-n14{margin:-56px !important}.v-application .ma-lg-n15{margin:-60px !important}.v-application .ma-lg-n16{margin:-64px !important}.v-application .mx-lg-n1{margin-right:-4px !important;margin-left:-4px !important}.v-application .mx-lg-n2{margin-right:-8px !important;margin-left:-8px !important}.v-application .mx-lg-n3{margin-right:-12px !important;margin-left:-12px !important}.v-application .mx-lg-n4{margin-right:-16px !important;margin-left:-16px !important}.v-application .mx-lg-n5{margin-right:-20px !important;margin-left:-20px !important}.v-application .mx-lg-n6{margin-right:-24px !important;margin-left:-24px !important}.v-application .mx-lg-n7{margin-right:-28px !important;margin-left:-28px !important}.v-application .mx-lg-n8{margin-right:-32px !important;margin-left:-32px !important}.v-application .mx-lg-n9{margin-right:-36px !important;margin-left:-36px !important}.v-application .mx-lg-n10{margin-right:-40px !important;margin-left:-40px !important}.v-application .mx-lg-n11{margin-right:-44px !important;margin-left:-44px !important}.v-application .mx-lg-n12{margin-right:-48px !important;margin-left:-48px !important}.v-application .mx-lg-n13{margin-right:-52px !important;margin-left:-52px !important}.v-application .mx-lg-n14{margin-right:-56px !important;margin-left:-56px !important}.v-application .mx-lg-n15{margin-right:-60px !important;margin-left:-60px !important}.v-application .mx-lg-n16{margin-right:-64px !important;margin-left:-64px !important}.v-application .my-lg-n1{margin-top:-4px !important;margin-bottom:-4px !important}.v-application .my-lg-n2{margin-top:-8px !important;margin-bottom:-8px !important}.v-application .my-lg-n3{margin-top:-12px !important;margin-bottom:-12px !important}.v-application .my-lg-n4{margin-top:-16px !important;margin-bottom:-16px !important}.v-application .my-lg-n5{margin-top:-20px !important;margin-bottom:-20px !important}.v-application .my-lg-n6{margin-top:-24px !important;margin-bottom:-24px !important}.v-application .my-lg-n7{margin-top:-28px !important;margin-bottom:-28px !important}.v-application .my-lg-n8{margin-top:-32px !important;margin-bottom:-32px !important}.v-application .my-lg-n9{margin-top:-36px !important;margin-bottom:-36px !important}.v-application .my-lg-n10{margin-top:-40px !important;margin-bottom:-40px !important}.v-application .my-lg-n11{margin-top:-44px !important;margin-bottom:-44px !important}.v-application .my-lg-n12{margin-top:-48px !important;margin-bottom:-48px !important}.v-application .my-lg-n13{margin-top:-52px !important;margin-bottom:-52px !important}.v-application .my-lg-n14{margin-top:-56px !important;margin-bottom:-56px !important}.v-application .my-lg-n15{margin-top:-60px !important;margin-bottom:-60px !important}.v-application .my-lg-n16{margin-top:-64px !important;margin-bottom:-64px !important}.v-application .mt-lg-n1{margin-top:-4px !important}.v-application .mt-lg-n2{margin-top:-8px !important}.v-application .mt-lg-n3{margin-top:-12px !important}.v-application .mt-lg-n4{margin-top:-16px !important}.v-application .mt-lg-n5{margin-top:-20px !important}.v-application .mt-lg-n6{margin-top:-24px !important}.v-application .mt-lg-n7{margin-top:-28px !important}.v-application .mt-lg-n8{margin-top:-32px !important}.v-application .mt-lg-n9{margin-top:-36px !important}.v-application .mt-lg-n10{margin-top:-40px !important}.v-application .mt-lg-n11{margin-top:-44px !important}.v-application .mt-lg-n12{margin-top:-48px !important}.v-application .mt-lg-n13{margin-top:-52px !important}.v-application .mt-lg-n14{margin-top:-56px !important}.v-application .mt-lg-n15{margin-top:-60px !important}.v-application .mt-lg-n16{margin-top:-64px !important}.v-application .mr-lg-n1{margin-right:-4px !important}.v-application .mr-lg-n2{margin-right:-8px !important}.v-application .mr-lg-n3{margin-right:-12px !important}.v-application .mr-lg-n4{margin-right:-16px !important}.v-application .mr-lg-n5{margin-right:-20px !important}.v-application .mr-lg-n6{margin-right:-24px !important}.v-application .mr-lg-n7{margin-right:-28px !important}.v-application .mr-lg-n8{margin-right:-32px !important}.v-application .mr-lg-n9{margin-right:-36px !important}.v-application .mr-lg-n10{margin-right:-40px !important}.v-application .mr-lg-n11{margin-right:-44px !important}.v-application .mr-lg-n12{margin-right:-48px !important}.v-application .mr-lg-n13{margin-right:-52px !important}.v-application .mr-lg-n14{margin-right:-56px !important}.v-application .mr-lg-n15{margin-right:-60px !important}.v-application .mr-lg-n16{margin-right:-64px !important}.v-application .mb-lg-n1{margin-bottom:-4px !important}.v-application .mb-lg-n2{margin-bottom:-8px !important}.v-application .mb-lg-n3{margin-bottom:-12px !important}.v-application .mb-lg-n4{margin-bottom:-16px !important}.v-application .mb-lg-n5{margin-bottom:-20px !important}.v-application .mb-lg-n6{margin-bottom:-24px !important}.v-application .mb-lg-n7{margin-bottom:-28px !important}.v-application .mb-lg-n8{margin-bottom:-32px !important}.v-application .mb-lg-n9{margin-bottom:-36px !important}.v-application .mb-lg-n10{margin-bottom:-40px !important}.v-application .mb-lg-n11{margin-bottom:-44px !important}.v-application .mb-lg-n12{margin-bottom:-48px !important}.v-application .mb-lg-n13{margin-bottom:-52px !important}.v-application .mb-lg-n14{margin-bottom:-56px !important}.v-application .mb-lg-n15{margin-bottom:-60px !important}.v-application .mb-lg-n16{margin-bottom:-64px !important}.v-application .ml-lg-n1{margin-left:-4px !important}.v-application .ml-lg-n2{margin-left:-8px !important}.v-application .ml-lg-n3{margin-left:-12px !important}.v-application .ml-lg-n4{margin-left:-16px !important}.v-application .ml-lg-n5{margin-left:-20px !important}.v-application .ml-lg-n6{margin-left:-24px !important}.v-application .ml-lg-n7{margin-left:-28px !important}.v-application .ml-lg-n8{margin-left:-32px !important}.v-application .ml-lg-n9{margin-left:-36px !important}.v-application .ml-lg-n10{margin-left:-40px !important}.v-application .ml-lg-n11{margin-left:-44px !important}.v-application .ml-lg-n12{margin-left:-48px !important}.v-application .ml-lg-n13{margin-left:-52px !important}.v-application .ml-lg-n14{margin-left:-56px !important}.v-application .ml-lg-n15{margin-left:-60px !important}.v-application .ml-lg-n16{margin-left:-64px !important}.v-application--is-ltr .ms-lg-n1{margin-left:-4px !important}.v-application--is-rtl .ms-lg-n1{margin-right:-4px !important}.v-application--is-ltr .ms-lg-n2{margin-left:-8px !important}.v-application--is-rtl .ms-lg-n2{margin-right:-8px !important}.v-application--is-ltr .ms-lg-n3{margin-left:-12px !important}.v-application--is-rtl .ms-lg-n3{margin-right:-12px !important}.v-application--is-ltr .ms-lg-n4{margin-left:-16px !important}.v-application--is-rtl .ms-lg-n4{margin-right:-16px !important}.v-application--is-ltr .ms-lg-n5{margin-left:-20px !important}.v-application--is-rtl .ms-lg-n5{margin-right:-20px !important}.v-application--is-ltr .ms-lg-n6{margin-left:-24px !important}.v-application--is-rtl .ms-lg-n6{margin-right:-24px !important}.v-application--is-ltr .ms-lg-n7{margin-left:-28px !important}.v-application--is-rtl .ms-lg-n7{margin-right:-28px !important}.v-application--is-ltr .ms-lg-n8{margin-left:-32px !important}.v-application--is-rtl .ms-lg-n8{margin-right:-32px !important}.v-application--is-ltr .ms-lg-n9{margin-left:-36px !important}.v-application--is-rtl .ms-lg-n9{margin-right:-36px !important}.v-application--is-ltr .ms-lg-n10{margin-left:-40px !important}.v-application--is-rtl .ms-lg-n10{margin-right:-40px !important}.v-application--is-ltr .ms-lg-n11{margin-left:-44px !important}.v-application--is-rtl .ms-lg-n11{margin-right:-44px !important}.v-application--is-ltr .ms-lg-n12{margin-left:-48px !important}.v-application--is-rtl .ms-lg-n12{margin-right:-48px !important}.v-application--is-ltr .ms-lg-n13{margin-left:-52px !important}.v-application--is-rtl .ms-lg-n13{margin-right:-52px !important}.v-application--is-ltr .ms-lg-n14{margin-left:-56px !important}.v-application--is-rtl .ms-lg-n14{margin-right:-56px !important}.v-application--is-ltr .ms-lg-n15{margin-left:-60px !important}.v-application--is-rtl .ms-lg-n15{margin-right:-60px !important}.v-application--is-ltr .ms-lg-n16{margin-left:-64px !important}.v-application--is-rtl .ms-lg-n16{margin-right:-64px !important}.v-application--is-ltr .me-lg-n1{margin-right:-4px !important}.v-application--is-rtl .me-lg-n1{margin-left:-4px !important}.v-application--is-ltr .me-lg-n2{margin-right:-8px !important}.v-application--is-rtl .me-lg-n2{margin-left:-8px !important}.v-application--is-ltr .me-lg-n3{margin-right:-12px !important}.v-application--is-rtl .me-lg-n3{margin-left:-12px !important}.v-application--is-ltr .me-lg-n4{margin-right:-16px !important}.v-application--is-rtl .me-lg-n4{margin-left:-16px !important}.v-application--is-ltr .me-lg-n5{margin-right:-20px !important}.v-application--is-rtl .me-lg-n5{margin-left:-20px !important}.v-application--is-ltr .me-lg-n6{margin-right:-24px !important}.v-application--is-rtl .me-lg-n6{margin-left:-24px !important}.v-application--is-ltr .me-lg-n7{margin-right:-28px !important}.v-application--is-rtl .me-lg-n7{margin-left:-28px !important}.v-application--is-ltr .me-lg-n8{margin-right:-32px !important}.v-application--is-rtl .me-lg-n8{margin-left:-32px !important}.v-application--is-ltr .me-lg-n9{margin-right:-36px !important}.v-application--is-rtl .me-lg-n9{margin-left:-36px !important}.v-application--is-ltr .me-lg-n10{margin-right:-40px !important}.v-application--is-rtl .me-lg-n10{margin-left:-40px !important}.v-application--is-ltr .me-lg-n11{margin-right:-44px !important}.v-application--is-rtl .me-lg-n11{margin-left:-44px !important}.v-application--is-ltr .me-lg-n12{margin-right:-48px !important}.v-application--is-rtl .me-lg-n12{margin-left:-48px !important}.v-application--is-ltr .me-lg-n13{margin-right:-52px !important}.v-application--is-rtl .me-lg-n13{margin-left:-52px !important}.v-application--is-ltr .me-lg-n14{margin-right:-56px !important}.v-application--is-rtl .me-lg-n14{margin-left:-56px !important}.v-application--is-ltr .me-lg-n15{margin-right:-60px !important}.v-application--is-rtl .me-lg-n15{margin-left:-60px !important}.v-application--is-ltr .me-lg-n16{margin-right:-64px !important}.v-application--is-rtl .me-lg-n16{margin-left:-64px !important}.v-application .pa-lg-0{padding:0px !important}.v-application .pa-lg-1{padding:4px !important}.v-application .pa-lg-2{padding:8px !important}.v-application .pa-lg-3{padding:12px !important}.v-application .pa-lg-4{padding:16px !important}.v-application .pa-lg-5{padding:20px !important}.v-application .pa-lg-6{padding:24px !important}.v-application .pa-lg-7{padding:28px !important}.v-application .pa-lg-8{padding:32px !important}.v-application .pa-lg-9{padding:36px !important}.v-application .pa-lg-10{padding:40px !important}.v-application .pa-lg-11{padding:44px !important}.v-application .pa-lg-12{padding:48px !important}.v-application .pa-lg-13{padding:52px !important}.v-application .pa-lg-14{padding:56px !important}.v-application .pa-lg-15{padding:60px !important}.v-application .pa-lg-16{padding:64px !important}.v-application .px-lg-0{padding-right:0px !important;padding-left:0px !important}.v-application .px-lg-1{padding-right:4px !important;padding-left:4px !important}.v-application .px-lg-2{padding-right:8px !important;padding-left:8px !important}.v-application .px-lg-3{padding-right:12px !important;padding-left:12px !important}.v-application .px-lg-4{padding-right:16px !important;padding-left:16px !important}.v-application .px-lg-5{padding-right:20px !important;padding-left:20px !important}.v-application .px-lg-6{padding-right:24px !important;padding-left:24px !important}.v-application .px-lg-7{padding-right:28px !important;padding-left:28px !important}.v-application .px-lg-8{padding-right:32px !important;padding-left:32px !important}.v-application .px-lg-9{padding-right:36px !important;padding-left:36px !important}.v-application .px-lg-10{padding-right:40px !important;padding-left:40px !important}.v-application .px-lg-11{padding-right:44px !important;padding-left:44px !important}.v-application .px-lg-12{padding-right:48px !important;padding-left:48px !important}.v-application .px-lg-13{padding-right:52px !important;padding-left:52px !important}.v-application .px-lg-14{padding-right:56px !important;padding-left:56px !important}.v-application .px-lg-15{padding-right:60px !important;padding-left:60px !important}.v-application .px-lg-16{padding-right:64px !important;padding-left:64px !important}.v-application .py-lg-0{padding-top:0px !important;padding-bottom:0px !important}.v-application .py-lg-1{padding-top:4px !important;padding-bottom:4px !important}.v-application .py-lg-2{padding-top:8px !important;padding-bottom:8px !important}.v-application .py-lg-3{padding-top:12px !important;padding-bottom:12px !important}.v-application .py-lg-4{padding-top:16px !important;padding-bottom:16px !important}.v-application .py-lg-5{padding-top:20px !important;padding-bottom:20px !important}.v-application .py-lg-6{padding-top:24px !important;padding-bottom:24px !important}.v-application .py-lg-7{padding-top:28px !important;padding-bottom:28px !important}.v-application .py-lg-8{padding-top:32px !important;padding-bottom:32px !important}.v-application .py-lg-9{padding-top:36px !important;padding-bottom:36px !important}.v-application .py-lg-10{padding-top:40px !important;padding-bottom:40px !important}.v-application .py-lg-11{padding-top:44px !important;padding-bottom:44px !important}.v-application .py-lg-12{padding-top:48px !important;padding-bottom:48px !important}.v-application .py-lg-13{padding-top:52px !important;padding-bottom:52px !important}.v-application .py-lg-14{padding-top:56px !important;padding-bottom:56px !important}.v-application .py-lg-15{padding-top:60px !important;padding-bottom:60px !important}.v-application .py-lg-16{padding-top:64px !important;padding-bottom:64px !important}.v-application .pt-lg-0{padding-top:0px !important}.v-application .pt-lg-1{padding-top:4px !important}.v-application .pt-lg-2{padding-top:8px !important}.v-application .pt-lg-3{padding-top:12px !important}.v-application .pt-lg-4{padding-top:16px !important}.v-application .pt-lg-5{padding-top:20px !important}.v-application .pt-lg-6{padding-top:24px !important}.v-application .pt-lg-7{padding-top:28px !important}.v-application .pt-lg-8{padding-top:32px !important}.v-application .pt-lg-9{padding-top:36px !important}.v-application .pt-lg-10{padding-top:40px !important}.v-application .pt-lg-11{padding-top:44px !important}.v-application .pt-lg-12{padding-top:48px !important}.v-application .pt-lg-13{padding-top:52px !important}.v-application .pt-lg-14{padding-top:56px !important}.v-application .pt-lg-15{padding-top:60px !important}.v-application .pt-lg-16{padding-top:64px !important}.v-application .pr-lg-0{padding-right:0px !important}.v-application .pr-lg-1{padding-right:4px !important}.v-application .pr-lg-2{padding-right:8px !important}.v-application .pr-lg-3{padding-right:12px !important}.v-application .pr-lg-4{padding-right:16px !important}.v-application .pr-lg-5{padding-right:20px !important}.v-application .pr-lg-6{padding-right:24px !important}.v-application .pr-lg-7{padding-right:28px !important}.v-application .pr-lg-8{padding-right:32px !important}.v-application .pr-lg-9{padding-right:36px !important}.v-application .pr-lg-10{padding-right:40px !important}.v-application .pr-lg-11{padding-right:44px !important}.v-application .pr-lg-12{padding-right:48px !important}.v-application .pr-lg-13{padding-right:52px !important}.v-application .pr-lg-14{padding-right:56px !important}.v-application .pr-lg-15{padding-right:60px !important}.v-application .pr-lg-16{padding-right:64px !important}.v-application .pb-lg-0{padding-bottom:0px !important}.v-application .pb-lg-1{padding-bottom:4px !important}.v-application .pb-lg-2{padding-bottom:8px !important}.v-application .pb-lg-3{padding-bottom:12px !important}.v-application .pb-lg-4{padding-bottom:16px !important}.v-application .pb-lg-5{padding-bottom:20px !important}.v-application .pb-lg-6{padding-bottom:24px !important}.v-application .pb-lg-7{padding-bottom:28px !important}.v-application .pb-lg-8{padding-bottom:32px !important}.v-application .pb-lg-9{padding-bottom:36px !important}.v-application .pb-lg-10{padding-bottom:40px !important}.v-application .pb-lg-11{padding-bottom:44px !important}.v-application .pb-lg-12{padding-bottom:48px !important}.v-application .pb-lg-13{padding-bottom:52px !important}.v-application .pb-lg-14{padding-bottom:56px !important}.v-application .pb-lg-15{padding-bottom:60px !important}.v-application .pb-lg-16{padding-bottom:64px !important}.v-application .pl-lg-0{padding-left:0px !important}.v-application .pl-lg-1{padding-left:4px !important}.v-application .pl-lg-2{padding-left:8px !important}.v-application .pl-lg-3{padding-left:12px !important}.v-application .pl-lg-4{padding-left:16px !important}.v-application .pl-lg-5{padding-left:20px !important}.v-application .pl-lg-6{padding-left:24px !important}.v-application .pl-lg-7{padding-left:28px !important}.v-application .pl-lg-8{padding-left:32px !important}.v-application .pl-lg-9{padding-left:36px !important}.v-application .pl-lg-10{padding-left:40px !important}.v-application .pl-lg-11{padding-left:44px !important}.v-application .pl-lg-12{padding-left:48px !important}.v-application .pl-lg-13{padding-left:52px !important}.v-application .pl-lg-14{padding-left:56px !important}.v-application .pl-lg-15{padding-left:60px !important}.v-application .pl-lg-16{padding-left:64px !important}.v-application--is-ltr .ps-lg-0{padding-left:0px !important}.v-application--is-rtl .ps-lg-0{padding-right:0px !important}.v-application--is-ltr .ps-lg-1{padding-left:4px !important}.v-application--is-rtl .ps-lg-1{padding-right:4px !important}.v-application--is-ltr .ps-lg-2{padding-left:8px !important}.v-application--is-rtl .ps-lg-2{padding-right:8px !important}.v-application--is-ltr .ps-lg-3{padding-left:12px !important}.v-application--is-rtl .ps-lg-3{padding-right:12px !important}.v-application--is-ltr .ps-lg-4{padding-left:16px !important}.v-application--is-rtl .ps-lg-4{padding-right:16px !important}.v-application--is-ltr .ps-lg-5{padding-left:20px !important}.v-application--is-rtl .ps-lg-5{padding-right:20px !important}.v-application--is-ltr .ps-lg-6{padding-left:24px !important}.v-application--is-rtl .ps-lg-6{padding-right:24px !important}.v-application--is-ltr .ps-lg-7{padding-left:28px !important}.v-application--is-rtl .ps-lg-7{padding-right:28px !important}.v-application--is-ltr .ps-lg-8{padding-left:32px !important}.v-application--is-rtl .ps-lg-8{padding-right:32px !important}.v-application--is-ltr .ps-lg-9{padding-left:36px !important}.v-application--is-rtl .ps-lg-9{padding-right:36px !important}.v-application--is-ltr .ps-lg-10{padding-left:40px !important}.v-application--is-rtl .ps-lg-10{padding-right:40px !important}.v-application--is-ltr .ps-lg-11{padding-left:44px !important}.v-application--is-rtl .ps-lg-11{padding-right:44px !important}.v-application--is-ltr .ps-lg-12{padding-left:48px !important}.v-application--is-rtl .ps-lg-12{padding-right:48px !important}.v-application--is-ltr .ps-lg-13{padding-left:52px !important}.v-application--is-rtl .ps-lg-13{padding-right:52px !important}.v-application--is-ltr .ps-lg-14{padding-left:56px !important}.v-application--is-rtl .ps-lg-14{padding-right:56px !important}.v-application--is-ltr .ps-lg-15{padding-left:60px !important}.v-application--is-rtl .ps-lg-15{padding-right:60px !important}.v-application--is-ltr .ps-lg-16{padding-left:64px !important}.v-application--is-rtl .ps-lg-16{padding-right:64px !important}.v-application--is-ltr .pe-lg-0{padding-right:0px !important}.v-application--is-rtl .pe-lg-0{padding-left:0px !important}.v-application--is-ltr .pe-lg-1{padding-right:4px !important}.v-application--is-rtl .pe-lg-1{padding-left:4px !important}.v-application--is-ltr .pe-lg-2{padding-right:8px !important}.v-application--is-rtl .pe-lg-2{padding-left:8px !important}.v-application--is-ltr .pe-lg-3{padding-right:12px !important}.v-application--is-rtl .pe-lg-3{padding-left:12px !important}.v-application--is-ltr .pe-lg-4{padding-right:16px !important}.v-application--is-rtl .pe-lg-4{padding-left:16px !important}.v-application--is-ltr .pe-lg-5{padding-right:20px !important}.v-application--is-rtl .pe-lg-5{padding-left:20px !important}.v-application--is-ltr .pe-lg-6{padding-right:24px !important}.v-application--is-rtl .pe-lg-6{padding-left:24px !important}.v-application--is-ltr .pe-lg-7{padding-right:28px !important}.v-application--is-rtl .pe-lg-7{padding-left:28px !important}.v-application--is-ltr .pe-lg-8{padding-right:32px !important}.v-application--is-rtl .pe-lg-8{padding-left:32px !important}.v-application--is-ltr .pe-lg-9{padding-right:36px !important}.v-application--is-rtl .pe-lg-9{padding-left:36px !important}.v-application--is-ltr .pe-lg-10{padding-right:40px !important}.v-application--is-rtl .pe-lg-10{padding-left:40px !important}.v-application--is-ltr .pe-lg-11{padding-right:44px !important}.v-application--is-rtl .pe-lg-11{padding-left:44px !important}.v-application--is-ltr .pe-lg-12{padding-right:48px !important}.v-application--is-rtl .pe-lg-12{padding-left:48px !important}.v-application--is-ltr .pe-lg-13{padding-right:52px !important}.v-application--is-rtl .pe-lg-13{padding-left:52px !important}.v-application--is-ltr .pe-lg-14{padding-right:56px !important}.v-application--is-rtl .pe-lg-14{padding-left:56px !important}.v-application--is-ltr .pe-lg-15{padding-right:60px !important}.v-application--is-rtl .pe-lg-15{padding-left:60px !important}.v-application--is-ltr .pe-lg-16{padding-right:64px !important}.v-application--is-rtl .pe-lg-16{padding-left:64px !important}.v-application .text-lg-left{text-align:left !important}.v-application .text-lg-right{text-align:right !important}.v-application .text-lg-center{text-align:center !important}.v-application .text-lg-justify{text-align:justify !important}.v-application .text-lg-start{text-align:start !important}.v-application .text-lg-end{text-align:end !important}.v-application .text-lg-h1{font-size:6rem !important;font-weight:300;line-height:6rem;letter-spacing:-0.015625em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-lg-h2{font-size:3.75rem !important;font-weight:300;line-height:3.75rem;letter-spacing:-0.0083333333em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-lg-h3{font-size:3rem !important;font-weight:400;line-height:3.125rem;letter-spacing:normal !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-lg-h4{font-size:2.125rem !important;font-weight:400;line-height:2.5rem;letter-spacing:.0073529412em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-lg-h5{font-size:1.5rem !important;font-weight:400;line-height:2rem;letter-spacing:normal !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-lg-h6{font-size:1.25rem !important;font-weight:500;line-height:2rem;letter-spacing:.0125em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-lg-subtitle-1{font-size:1rem !important;font-weight:normal;line-height:1.75rem;letter-spacing:.009375em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-lg-subtitle-2{font-size:.875rem !important;font-weight:500;line-height:1.375rem;letter-spacing:.0071428571em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-lg-body-1{font-size:1rem !important;font-weight:400;line-height:1.5rem;letter-spacing:.03125em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-lg-body-2{font-size:.875rem !important;font-weight:400;line-height:1.25rem;letter-spacing:.0178571429em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-lg-button{font-size:.875rem !important;font-weight:500;line-height:2.25rem;letter-spacing:.0892857143em !important;font-family:\"Roboto\",sans-serif !important;text-transform:uppercase !important}.v-application .text-lg-caption{font-size:.75rem !important;font-weight:400;line-height:1.25rem;letter-spacing:.0333333333em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-lg-overline{font-size:.75rem !important;font-weight:500;line-height:2rem;letter-spacing:.1666666667em !important;font-family:\"Roboto\",sans-serif !important;text-transform:uppercase !important}}@media(min-width: 1904px){.v-application .d-xl-none{display:none !important}.v-application .d-xl-inline{display:inline !important}.v-application .d-xl-inline-block{display:inline-block !important}.v-application .d-xl-block{display:block !important}.v-application .d-xl-table{display:table !important}.v-application .d-xl-table-row{display:table-row !important}.v-application .d-xl-table-cell{display:table-cell !important}.v-application .d-xl-flex{display:flex !important}.v-application .d-xl-inline-flex{display:inline-flex !important}.v-application .float-xl-none{float:none !important}.v-application .float-xl-left{float:left !important}.v-application .float-xl-right{float:right !important}.v-application--is-rtl .float-xl-end{float:left !important}.v-application--is-rtl .float-xl-start{float:right !important}.v-application--is-ltr .float-xl-end{float:right !important}.v-application--is-ltr .float-xl-start{float:left !important}.v-application .flex-xl-fill{flex:1 1 auto !important}.v-application .flex-xl-row{flex-direction:row !important}.v-application .flex-xl-column{flex-direction:column !important}.v-application .flex-xl-row-reverse{flex-direction:row-reverse !important}.v-application .flex-xl-column-reverse{flex-direction:column-reverse !important}.v-application .flex-xl-grow-0{flex-grow:0 !important}.v-application .flex-xl-grow-1{flex-grow:1 !important}.v-application .flex-xl-shrink-0{flex-shrink:0 !important}.v-application .flex-xl-shrink-1{flex-shrink:1 !important}.v-application .flex-xl-wrap{flex-wrap:wrap !important}.v-application .flex-xl-nowrap{flex-wrap:nowrap !important}.v-application .flex-xl-wrap-reverse{flex-wrap:wrap-reverse !important}.v-application .justify-xl-start{justify-content:flex-start !important}.v-application .justify-xl-end{justify-content:flex-end !important}.v-application .justify-xl-center{justify-content:center !important}.v-application .justify-xl-space-between{justify-content:space-between !important}.v-application .justify-xl-space-around{justify-content:space-around !important}.v-application .align-xl-start{align-items:flex-start !important}.v-application .align-xl-end{align-items:flex-end !important}.v-application .align-xl-center{align-items:center !important}.v-application .align-xl-baseline{align-items:baseline !important}.v-application .align-xl-stretch{align-items:stretch !important}.v-application .align-content-xl-start{align-content:flex-start !important}.v-application .align-content-xl-end{align-content:flex-end !important}.v-application .align-content-xl-center{align-content:center !important}.v-application .align-content-xl-space-between{align-content:space-between !important}.v-application .align-content-xl-space-around{align-content:space-around !important}.v-application .align-content-xl-stretch{align-content:stretch !important}.v-application .align-self-xl-auto{align-self:auto !important}.v-application .align-self-xl-start{align-self:flex-start !important}.v-application .align-self-xl-end{align-self:flex-end !important}.v-application .align-self-xl-center{align-self:center !important}.v-application .align-self-xl-baseline{align-self:baseline !important}.v-application .align-self-xl-stretch{align-self:stretch !important}.v-application .order-xl-first{order:-1 !important}.v-application .order-xl-0{order:0 !important}.v-application .order-xl-1{order:1 !important}.v-application .order-xl-2{order:2 !important}.v-application .order-xl-3{order:3 !important}.v-application .order-xl-4{order:4 !important}.v-application .order-xl-5{order:5 !important}.v-application .order-xl-6{order:6 !important}.v-application .order-xl-7{order:7 !important}.v-application .order-xl-8{order:8 !important}.v-application .order-xl-9{order:9 !important}.v-application .order-xl-10{order:10 !important}.v-application .order-xl-11{order:11 !important}.v-application .order-xl-12{order:12 !important}.v-application .order-xl-last{order:13 !important}.v-application .ma-xl-0{margin:0px !important}.v-application .ma-xl-1{margin:4px !important}.v-application .ma-xl-2{margin:8px !important}.v-application .ma-xl-3{margin:12px !important}.v-application .ma-xl-4{margin:16px !important}.v-application .ma-xl-5{margin:20px !important}.v-application .ma-xl-6{margin:24px !important}.v-application .ma-xl-7{margin:28px !important}.v-application .ma-xl-8{margin:32px !important}.v-application .ma-xl-9{margin:36px !important}.v-application .ma-xl-10{margin:40px !important}.v-application .ma-xl-11{margin:44px !important}.v-application .ma-xl-12{margin:48px !important}.v-application .ma-xl-13{margin:52px !important}.v-application .ma-xl-14{margin:56px !important}.v-application .ma-xl-15{margin:60px !important}.v-application .ma-xl-16{margin:64px !important}.v-application .ma-xl-auto{margin:auto !important}.v-application .mx-xl-0{margin-right:0px !important;margin-left:0px !important}.v-application .mx-xl-1{margin-right:4px !important;margin-left:4px !important}.v-application .mx-xl-2{margin-right:8px !important;margin-left:8px !important}.v-application .mx-xl-3{margin-right:12px !important;margin-left:12px !important}.v-application .mx-xl-4{margin-right:16px !important;margin-left:16px !important}.v-application .mx-xl-5{margin-right:20px !important;margin-left:20px !important}.v-application .mx-xl-6{margin-right:24px !important;margin-left:24px !important}.v-application .mx-xl-7{margin-right:28px !important;margin-left:28px !important}.v-application .mx-xl-8{margin-right:32px !important;margin-left:32px !important}.v-application .mx-xl-9{margin-right:36px !important;margin-left:36px !important}.v-application .mx-xl-10{margin-right:40px !important;margin-left:40px !important}.v-application .mx-xl-11{margin-right:44px !important;margin-left:44px !important}.v-application .mx-xl-12{margin-right:48px !important;margin-left:48px !important}.v-application .mx-xl-13{margin-right:52px !important;margin-left:52px !important}.v-application .mx-xl-14{margin-right:56px !important;margin-left:56px !important}.v-application .mx-xl-15{margin-right:60px !important;margin-left:60px !important}.v-application .mx-xl-16{margin-right:64px !important;margin-left:64px !important}.v-application .mx-xl-auto{margin-right:auto !important;margin-left:auto !important}.v-application .my-xl-0{margin-top:0px !important;margin-bottom:0px !important}.v-application .my-xl-1{margin-top:4px !important;margin-bottom:4px !important}.v-application .my-xl-2{margin-top:8px !important;margin-bottom:8px !important}.v-application .my-xl-3{margin-top:12px !important;margin-bottom:12px !important}.v-application .my-xl-4{margin-top:16px !important;margin-bottom:16px !important}.v-application .my-xl-5{margin-top:20px !important;margin-bottom:20px !important}.v-application .my-xl-6{margin-top:24px !important;margin-bottom:24px !important}.v-application .my-xl-7{margin-top:28px !important;margin-bottom:28px !important}.v-application .my-xl-8{margin-top:32px !important;margin-bottom:32px !important}.v-application .my-xl-9{margin-top:36px !important;margin-bottom:36px !important}.v-application .my-xl-10{margin-top:40px !important;margin-bottom:40px !important}.v-application .my-xl-11{margin-top:44px !important;margin-bottom:44px !important}.v-application .my-xl-12{margin-top:48px !important;margin-bottom:48px !important}.v-application .my-xl-13{margin-top:52px !important;margin-bottom:52px !important}.v-application .my-xl-14{margin-top:56px !important;margin-bottom:56px !important}.v-application .my-xl-15{margin-top:60px !important;margin-bottom:60px !important}.v-application .my-xl-16{margin-top:64px !important;margin-bottom:64px !important}.v-application .my-xl-auto{margin-top:auto !important;margin-bottom:auto !important}.v-application .mt-xl-0{margin-top:0px !important}.v-application .mt-xl-1{margin-top:4px !important}.v-application .mt-xl-2{margin-top:8px !important}.v-application .mt-xl-3{margin-top:12px !important}.v-application .mt-xl-4{margin-top:16px !important}.v-application .mt-xl-5{margin-top:20px !important}.v-application .mt-xl-6{margin-top:24px !important}.v-application .mt-xl-7{margin-top:28px !important}.v-application .mt-xl-8{margin-top:32px !important}.v-application .mt-xl-9{margin-top:36px !important}.v-application .mt-xl-10{margin-top:40px !important}.v-application .mt-xl-11{margin-top:44px !important}.v-application .mt-xl-12{margin-top:48px !important}.v-application .mt-xl-13{margin-top:52px !important}.v-application .mt-xl-14{margin-top:56px !important}.v-application .mt-xl-15{margin-top:60px !important}.v-application .mt-xl-16{margin-top:64px !important}.v-application .mt-xl-auto{margin-top:auto !important}.v-application .mr-xl-0{margin-right:0px !important}.v-application .mr-xl-1{margin-right:4px !important}.v-application .mr-xl-2{margin-right:8px !important}.v-application .mr-xl-3{margin-right:12px !important}.v-application .mr-xl-4{margin-right:16px !important}.v-application .mr-xl-5{margin-right:20px !important}.v-application .mr-xl-6{margin-right:24px !important}.v-application .mr-xl-7{margin-right:28px !important}.v-application .mr-xl-8{margin-right:32px !important}.v-application .mr-xl-9{margin-right:36px !important}.v-application .mr-xl-10{margin-right:40px !important}.v-application .mr-xl-11{margin-right:44px !important}.v-application .mr-xl-12{margin-right:48px !important}.v-application .mr-xl-13{margin-right:52px !important}.v-application .mr-xl-14{margin-right:56px !important}.v-application .mr-xl-15{margin-right:60px !important}.v-application .mr-xl-16{margin-right:64px !important}.v-application .mr-xl-auto{margin-right:auto !important}.v-application .mb-xl-0{margin-bottom:0px !important}.v-application .mb-xl-1{margin-bottom:4px !important}.v-application .mb-xl-2{margin-bottom:8px !important}.v-application .mb-xl-3{margin-bottom:12px !important}.v-application .mb-xl-4{margin-bottom:16px !important}.v-application .mb-xl-5{margin-bottom:20px !important}.v-application .mb-xl-6{margin-bottom:24px !important}.v-application .mb-xl-7{margin-bottom:28px !important}.v-application .mb-xl-8{margin-bottom:32px !important}.v-application .mb-xl-9{margin-bottom:36px !important}.v-application .mb-xl-10{margin-bottom:40px !important}.v-application .mb-xl-11{margin-bottom:44px !important}.v-application .mb-xl-12{margin-bottom:48px !important}.v-application .mb-xl-13{margin-bottom:52px !important}.v-application .mb-xl-14{margin-bottom:56px !important}.v-application .mb-xl-15{margin-bottom:60px !important}.v-application .mb-xl-16{margin-bottom:64px !important}.v-application .mb-xl-auto{margin-bottom:auto !important}.v-application .ml-xl-0{margin-left:0px !important}.v-application .ml-xl-1{margin-left:4px !important}.v-application .ml-xl-2{margin-left:8px !important}.v-application .ml-xl-3{margin-left:12px !important}.v-application .ml-xl-4{margin-left:16px !important}.v-application .ml-xl-5{margin-left:20px !important}.v-application .ml-xl-6{margin-left:24px !important}.v-application .ml-xl-7{margin-left:28px !important}.v-application .ml-xl-8{margin-left:32px !important}.v-application .ml-xl-9{margin-left:36px !important}.v-application .ml-xl-10{margin-left:40px !important}.v-application .ml-xl-11{margin-left:44px !important}.v-application .ml-xl-12{margin-left:48px !important}.v-application .ml-xl-13{margin-left:52px !important}.v-application .ml-xl-14{margin-left:56px !important}.v-application .ml-xl-15{margin-left:60px !important}.v-application .ml-xl-16{margin-left:64px !important}.v-application .ml-xl-auto{margin-left:auto !important}.v-application--is-ltr .ms-xl-0{margin-left:0px !important}.v-application--is-rtl .ms-xl-0{margin-right:0px !important}.v-application--is-ltr .ms-xl-1{margin-left:4px !important}.v-application--is-rtl .ms-xl-1{margin-right:4px !important}.v-application--is-ltr .ms-xl-2{margin-left:8px !important}.v-application--is-rtl .ms-xl-2{margin-right:8px !important}.v-application--is-ltr .ms-xl-3{margin-left:12px !important}.v-application--is-rtl .ms-xl-3{margin-right:12px !important}.v-application--is-ltr .ms-xl-4{margin-left:16px !important}.v-application--is-rtl .ms-xl-4{margin-right:16px !important}.v-application--is-ltr .ms-xl-5{margin-left:20px !important}.v-application--is-rtl .ms-xl-5{margin-right:20px !important}.v-application--is-ltr .ms-xl-6{margin-left:24px !important}.v-application--is-rtl .ms-xl-6{margin-right:24px !important}.v-application--is-ltr .ms-xl-7{margin-left:28px !important}.v-application--is-rtl .ms-xl-7{margin-right:28px !important}.v-application--is-ltr .ms-xl-8{margin-left:32px !important}.v-application--is-rtl .ms-xl-8{margin-right:32px !important}.v-application--is-ltr .ms-xl-9{margin-left:36px !important}.v-application--is-rtl .ms-xl-9{margin-right:36px !important}.v-application--is-ltr .ms-xl-10{margin-left:40px !important}.v-application--is-rtl .ms-xl-10{margin-right:40px !important}.v-application--is-ltr .ms-xl-11{margin-left:44px !important}.v-application--is-rtl .ms-xl-11{margin-right:44px !important}.v-application--is-ltr .ms-xl-12{margin-left:48px !important}.v-application--is-rtl .ms-xl-12{margin-right:48px !important}.v-application--is-ltr .ms-xl-13{margin-left:52px !important}.v-application--is-rtl .ms-xl-13{margin-right:52px !important}.v-application--is-ltr .ms-xl-14{margin-left:56px !important}.v-application--is-rtl .ms-xl-14{margin-right:56px !important}.v-application--is-ltr .ms-xl-15{margin-left:60px !important}.v-application--is-rtl .ms-xl-15{margin-right:60px !important}.v-application--is-ltr .ms-xl-16{margin-left:64px !important}.v-application--is-rtl .ms-xl-16{margin-right:64px !important}.v-application--is-ltr .ms-xl-auto{margin-left:auto !important}.v-application--is-rtl .ms-xl-auto{margin-right:auto !important}.v-application--is-ltr .me-xl-0{margin-right:0px !important}.v-application--is-rtl .me-xl-0{margin-left:0px !important}.v-application--is-ltr .me-xl-1{margin-right:4px !important}.v-application--is-rtl .me-xl-1{margin-left:4px !important}.v-application--is-ltr .me-xl-2{margin-right:8px !important}.v-application--is-rtl .me-xl-2{margin-left:8px !important}.v-application--is-ltr .me-xl-3{margin-right:12px !important}.v-application--is-rtl .me-xl-3{margin-left:12px !important}.v-application--is-ltr .me-xl-4{margin-right:16px !important}.v-application--is-rtl .me-xl-4{margin-left:16px !important}.v-application--is-ltr .me-xl-5{margin-right:20px !important}.v-application--is-rtl .me-xl-5{margin-left:20px !important}.v-application--is-ltr .me-xl-6{margin-right:24px !important}.v-application--is-rtl .me-xl-6{margin-left:24px !important}.v-application--is-ltr .me-xl-7{margin-right:28px !important}.v-application--is-rtl .me-xl-7{margin-left:28px !important}.v-application--is-ltr .me-xl-8{margin-right:32px !important}.v-application--is-rtl .me-xl-8{margin-left:32px !important}.v-application--is-ltr .me-xl-9{margin-right:36px !important}.v-application--is-rtl .me-xl-9{margin-left:36px !important}.v-application--is-ltr .me-xl-10{margin-right:40px !important}.v-application--is-rtl .me-xl-10{margin-left:40px !important}.v-application--is-ltr .me-xl-11{margin-right:44px !important}.v-application--is-rtl .me-xl-11{margin-left:44px !important}.v-application--is-ltr .me-xl-12{margin-right:48px !important}.v-application--is-rtl .me-xl-12{margin-left:48px !important}.v-application--is-ltr .me-xl-13{margin-right:52px !important}.v-application--is-rtl .me-xl-13{margin-left:52px !important}.v-application--is-ltr .me-xl-14{margin-right:56px !important}.v-application--is-rtl .me-xl-14{margin-left:56px !important}.v-application--is-ltr .me-xl-15{margin-right:60px !important}.v-application--is-rtl .me-xl-15{margin-left:60px !important}.v-application--is-ltr .me-xl-16{margin-right:64px !important}.v-application--is-rtl .me-xl-16{margin-left:64px !important}.v-application--is-ltr .me-xl-auto{margin-right:auto !important}.v-application--is-rtl .me-xl-auto{margin-left:auto !important}.v-application .ma-xl-n1{margin:-4px !important}.v-application .ma-xl-n2{margin:-8px !important}.v-application .ma-xl-n3{margin:-12px !important}.v-application .ma-xl-n4{margin:-16px !important}.v-application .ma-xl-n5{margin:-20px !important}.v-application .ma-xl-n6{margin:-24px !important}.v-application .ma-xl-n7{margin:-28px !important}.v-application .ma-xl-n8{margin:-32px !important}.v-application .ma-xl-n9{margin:-36px !important}.v-application .ma-xl-n10{margin:-40px !important}.v-application .ma-xl-n11{margin:-44px !important}.v-application .ma-xl-n12{margin:-48px !important}.v-application .ma-xl-n13{margin:-52px !important}.v-application .ma-xl-n14{margin:-56px !important}.v-application .ma-xl-n15{margin:-60px !important}.v-application .ma-xl-n16{margin:-64px !important}.v-application .mx-xl-n1{margin-right:-4px !important;margin-left:-4px !important}.v-application .mx-xl-n2{margin-right:-8px !important;margin-left:-8px !important}.v-application .mx-xl-n3{margin-right:-12px !important;margin-left:-12px !important}.v-application .mx-xl-n4{margin-right:-16px !important;margin-left:-16px !important}.v-application .mx-xl-n5{margin-right:-20px !important;margin-left:-20px !important}.v-application .mx-xl-n6{margin-right:-24px !important;margin-left:-24px !important}.v-application .mx-xl-n7{margin-right:-28px !important;margin-left:-28px !important}.v-application .mx-xl-n8{margin-right:-32px !important;margin-left:-32px !important}.v-application .mx-xl-n9{margin-right:-36px !important;margin-left:-36px !important}.v-application .mx-xl-n10{margin-right:-40px !important;margin-left:-40px !important}.v-application .mx-xl-n11{margin-right:-44px !important;margin-left:-44px !important}.v-application .mx-xl-n12{margin-right:-48px !important;margin-left:-48px !important}.v-application .mx-xl-n13{margin-right:-52px !important;margin-left:-52px !important}.v-application .mx-xl-n14{margin-right:-56px !important;margin-left:-56px !important}.v-application .mx-xl-n15{margin-right:-60px !important;margin-left:-60px !important}.v-application .mx-xl-n16{margin-right:-64px !important;margin-left:-64px !important}.v-application .my-xl-n1{margin-top:-4px !important;margin-bottom:-4px !important}.v-application .my-xl-n2{margin-top:-8px !important;margin-bottom:-8px !important}.v-application .my-xl-n3{margin-top:-12px !important;margin-bottom:-12px !important}.v-application .my-xl-n4{margin-top:-16px !important;margin-bottom:-16px !important}.v-application .my-xl-n5{margin-top:-20px !important;margin-bottom:-20px !important}.v-application .my-xl-n6{margin-top:-24px !important;margin-bottom:-24px !important}.v-application .my-xl-n7{margin-top:-28px !important;margin-bottom:-28px !important}.v-application .my-xl-n8{margin-top:-32px !important;margin-bottom:-32px !important}.v-application .my-xl-n9{margin-top:-36px !important;margin-bottom:-36px !important}.v-application .my-xl-n10{margin-top:-40px !important;margin-bottom:-40px !important}.v-application .my-xl-n11{margin-top:-44px !important;margin-bottom:-44px !important}.v-application .my-xl-n12{margin-top:-48px !important;margin-bottom:-48px !important}.v-application .my-xl-n13{margin-top:-52px !important;margin-bottom:-52px !important}.v-application .my-xl-n14{margin-top:-56px !important;margin-bottom:-56px !important}.v-application .my-xl-n15{margin-top:-60px !important;margin-bottom:-60px !important}.v-application .my-xl-n16{margin-top:-64px !important;margin-bottom:-64px !important}.v-application .mt-xl-n1{margin-top:-4px !important}.v-application .mt-xl-n2{margin-top:-8px !important}.v-application .mt-xl-n3{margin-top:-12px !important}.v-application .mt-xl-n4{margin-top:-16px !important}.v-application .mt-xl-n5{margin-top:-20px !important}.v-application .mt-xl-n6{margin-top:-24px !important}.v-application .mt-xl-n7{margin-top:-28px !important}.v-application .mt-xl-n8{margin-top:-32px !important}.v-application .mt-xl-n9{margin-top:-36px !important}.v-application .mt-xl-n10{margin-top:-40px !important}.v-application .mt-xl-n11{margin-top:-44px !important}.v-application .mt-xl-n12{margin-top:-48px !important}.v-application .mt-xl-n13{margin-top:-52px !important}.v-application .mt-xl-n14{margin-top:-56px !important}.v-application .mt-xl-n15{margin-top:-60px !important}.v-application .mt-xl-n16{margin-top:-64px !important}.v-application .mr-xl-n1{margin-right:-4px !important}.v-application .mr-xl-n2{margin-right:-8px !important}.v-application .mr-xl-n3{margin-right:-12px !important}.v-application .mr-xl-n4{margin-right:-16px !important}.v-application .mr-xl-n5{margin-right:-20px !important}.v-application .mr-xl-n6{margin-right:-24px !important}.v-application .mr-xl-n7{margin-right:-28px !important}.v-application .mr-xl-n8{margin-right:-32px !important}.v-application .mr-xl-n9{margin-right:-36px !important}.v-application .mr-xl-n10{margin-right:-40px !important}.v-application .mr-xl-n11{margin-right:-44px !important}.v-application .mr-xl-n12{margin-right:-48px !important}.v-application .mr-xl-n13{margin-right:-52px !important}.v-application .mr-xl-n14{margin-right:-56px !important}.v-application .mr-xl-n15{margin-right:-60px !important}.v-application .mr-xl-n16{margin-right:-64px !important}.v-application .mb-xl-n1{margin-bottom:-4px !important}.v-application .mb-xl-n2{margin-bottom:-8px !important}.v-application .mb-xl-n3{margin-bottom:-12px !important}.v-application .mb-xl-n4{margin-bottom:-16px !important}.v-application .mb-xl-n5{margin-bottom:-20px !important}.v-application .mb-xl-n6{margin-bottom:-24px !important}.v-application .mb-xl-n7{margin-bottom:-28px !important}.v-application .mb-xl-n8{margin-bottom:-32px !important}.v-application .mb-xl-n9{margin-bottom:-36px !important}.v-application .mb-xl-n10{margin-bottom:-40px !important}.v-application .mb-xl-n11{margin-bottom:-44px !important}.v-application .mb-xl-n12{margin-bottom:-48px !important}.v-application .mb-xl-n13{margin-bottom:-52px !important}.v-application .mb-xl-n14{margin-bottom:-56px !important}.v-application .mb-xl-n15{margin-bottom:-60px !important}.v-application .mb-xl-n16{margin-bottom:-64px !important}.v-application .ml-xl-n1{margin-left:-4px !important}.v-application .ml-xl-n2{margin-left:-8px !important}.v-application .ml-xl-n3{margin-left:-12px !important}.v-application .ml-xl-n4{margin-left:-16px !important}.v-application .ml-xl-n5{margin-left:-20px !important}.v-application .ml-xl-n6{margin-left:-24px !important}.v-application .ml-xl-n7{margin-left:-28px !important}.v-application .ml-xl-n8{margin-left:-32px !important}.v-application .ml-xl-n9{margin-left:-36px !important}.v-application .ml-xl-n10{margin-left:-40px !important}.v-application .ml-xl-n11{margin-left:-44px !important}.v-application .ml-xl-n12{margin-left:-48px !important}.v-application .ml-xl-n13{margin-left:-52px !important}.v-application .ml-xl-n14{margin-left:-56px !important}.v-application .ml-xl-n15{margin-left:-60px !important}.v-application .ml-xl-n16{margin-left:-64px !important}.v-application--is-ltr .ms-xl-n1{margin-left:-4px !important}.v-application--is-rtl .ms-xl-n1{margin-right:-4px !important}.v-application--is-ltr .ms-xl-n2{margin-left:-8px !important}.v-application--is-rtl .ms-xl-n2{margin-right:-8px !important}.v-application--is-ltr .ms-xl-n3{margin-left:-12px !important}.v-application--is-rtl .ms-xl-n3{margin-right:-12px !important}.v-application--is-ltr .ms-xl-n4{margin-left:-16px !important}.v-application--is-rtl .ms-xl-n4{margin-right:-16px !important}.v-application--is-ltr .ms-xl-n5{margin-left:-20px !important}.v-application--is-rtl .ms-xl-n5{margin-right:-20px !important}.v-application--is-ltr .ms-xl-n6{margin-left:-24px !important}.v-application--is-rtl .ms-xl-n6{margin-right:-24px !important}.v-application--is-ltr .ms-xl-n7{margin-left:-28px !important}.v-application--is-rtl .ms-xl-n7{margin-right:-28px !important}.v-application--is-ltr .ms-xl-n8{margin-left:-32px !important}.v-application--is-rtl .ms-xl-n8{margin-right:-32px !important}.v-application--is-ltr .ms-xl-n9{margin-left:-36px !important}.v-application--is-rtl .ms-xl-n9{margin-right:-36px !important}.v-application--is-ltr .ms-xl-n10{margin-left:-40px !important}.v-application--is-rtl .ms-xl-n10{margin-right:-40px !important}.v-application--is-ltr .ms-xl-n11{margin-left:-44px !important}.v-application--is-rtl .ms-xl-n11{margin-right:-44px !important}.v-application--is-ltr .ms-xl-n12{margin-left:-48px !important}.v-application--is-rtl .ms-xl-n12{margin-right:-48px !important}.v-application--is-ltr .ms-xl-n13{margin-left:-52px !important}.v-application--is-rtl .ms-xl-n13{margin-right:-52px !important}.v-application--is-ltr .ms-xl-n14{margin-left:-56px !important}.v-application--is-rtl .ms-xl-n14{margin-right:-56px !important}.v-application--is-ltr .ms-xl-n15{margin-left:-60px !important}.v-application--is-rtl .ms-xl-n15{margin-right:-60px !important}.v-application--is-ltr .ms-xl-n16{margin-left:-64px !important}.v-application--is-rtl .ms-xl-n16{margin-right:-64px !important}.v-application--is-ltr .me-xl-n1{margin-right:-4px !important}.v-application--is-rtl .me-xl-n1{margin-left:-4px !important}.v-application--is-ltr .me-xl-n2{margin-right:-8px !important}.v-application--is-rtl .me-xl-n2{margin-left:-8px !important}.v-application--is-ltr .me-xl-n3{margin-right:-12px !important}.v-application--is-rtl .me-xl-n3{margin-left:-12px !important}.v-application--is-ltr .me-xl-n4{margin-right:-16px !important}.v-application--is-rtl .me-xl-n4{margin-left:-16px !important}.v-application--is-ltr .me-xl-n5{margin-right:-20px !important}.v-application--is-rtl .me-xl-n5{margin-left:-20px !important}.v-application--is-ltr .me-xl-n6{margin-right:-24px !important}.v-application--is-rtl .me-xl-n6{margin-left:-24px !important}.v-application--is-ltr .me-xl-n7{margin-right:-28px !important}.v-application--is-rtl .me-xl-n7{margin-left:-28px !important}.v-application--is-ltr .me-xl-n8{margin-right:-32px !important}.v-application--is-rtl .me-xl-n8{margin-left:-32px !important}.v-application--is-ltr .me-xl-n9{margin-right:-36px !important}.v-application--is-rtl .me-xl-n9{margin-left:-36px !important}.v-application--is-ltr .me-xl-n10{margin-right:-40px !important}.v-application--is-rtl .me-xl-n10{margin-left:-40px !important}.v-application--is-ltr .me-xl-n11{margin-right:-44px !important}.v-application--is-rtl .me-xl-n11{margin-left:-44px !important}.v-application--is-ltr .me-xl-n12{margin-right:-48px !important}.v-application--is-rtl .me-xl-n12{margin-left:-48px !important}.v-application--is-ltr .me-xl-n13{margin-right:-52px !important}.v-application--is-rtl .me-xl-n13{margin-left:-52px !important}.v-application--is-ltr .me-xl-n14{margin-right:-56px !important}.v-application--is-rtl .me-xl-n14{margin-left:-56px !important}.v-application--is-ltr .me-xl-n15{margin-right:-60px !important}.v-application--is-rtl .me-xl-n15{margin-left:-60px !important}.v-application--is-ltr .me-xl-n16{margin-right:-64px !important}.v-application--is-rtl .me-xl-n16{margin-left:-64px !important}.v-application .pa-xl-0{padding:0px !important}.v-application .pa-xl-1{padding:4px !important}.v-application .pa-xl-2{padding:8px !important}.v-application .pa-xl-3{padding:12px !important}.v-application .pa-xl-4{padding:16px !important}.v-application .pa-xl-5{padding:20px !important}.v-application .pa-xl-6{padding:24px !important}.v-application .pa-xl-7{padding:28px !important}.v-application .pa-xl-8{padding:32px !important}.v-application .pa-xl-9{padding:36px !important}.v-application .pa-xl-10{padding:40px !important}.v-application .pa-xl-11{padding:44px !important}.v-application .pa-xl-12{padding:48px !important}.v-application .pa-xl-13{padding:52px !important}.v-application .pa-xl-14{padding:56px !important}.v-application .pa-xl-15{padding:60px !important}.v-application .pa-xl-16{padding:64px !important}.v-application .px-xl-0{padding-right:0px !important;padding-left:0px !important}.v-application .px-xl-1{padding-right:4px !important;padding-left:4px !important}.v-application .px-xl-2{padding-right:8px !important;padding-left:8px !important}.v-application .px-xl-3{padding-right:12px !important;padding-left:12px !important}.v-application .px-xl-4{padding-right:16px !important;padding-left:16px !important}.v-application .px-xl-5{padding-right:20px !important;padding-left:20px !important}.v-application .px-xl-6{padding-right:24px !important;padding-left:24px !important}.v-application .px-xl-7{padding-right:28px !important;padding-left:28px !important}.v-application .px-xl-8{padding-right:32px !important;padding-left:32px !important}.v-application .px-xl-9{padding-right:36px !important;padding-left:36px !important}.v-application .px-xl-10{padding-right:40px !important;padding-left:40px !important}.v-application .px-xl-11{padding-right:44px !important;padding-left:44px !important}.v-application .px-xl-12{padding-right:48px !important;padding-left:48px !important}.v-application .px-xl-13{padding-right:52px !important;padding-left:52px !important}.v-application .px-xl-14{padding-right:56px !important;padding-left:56px !important}.v-application .px-xl-15{padding-right:60px !important;padding-left:60px !important}.v-application .px-xl-16{padding-right:64px !important;padding-left:64px !important}.v-application .py-xl-0{padding-top:0px !important;padding-bottom:0px !important}.v-application .py-xl-1{padding-top:4px !important;padding-bottom:4px !important}.v-application .py-xl-2{padding-top:8px !important;padding-bottom:8px !important}.v-application .py-xl-3{padding-top:12px !important;padding-bottom:12px !important}.v-application .py-xl-4{padding-top:16px !important;padding-bottom:16px !important}.v-application .py-xl-5{padding-top:20px !important;padding-bottom:20px !important}.v-application .py-xl-6{padding-top:24px !important;padding-bottom:24px !important}.v-application .py-xl-7{padding-top:28px !important;padding-bottom:28px !important}.v-application .py-xl-8{padding-top:32px !important;padding-bottom:32px !important}.v-application .py-xl-9{padding-top:36px !important;padding-bottom:36px !important}.v-application .py-xl-10{padding-top:40px !important;padding-bottom:40px !important}.v-application .py-xl-11{padding-top:44px !important;padding-bottom:44px !important}.v-application .py-xl-12{padding-top:48px !important;padding-bottom:48px !important}.v-application .py-xl-13{padding-top:52px !important;padding-bottom:52px !important}.v-application .py-xl-14{padding-top:56px !important;padding-bottom:56px !important}.v-application .py-xl-15{padding-top:60px !important;padding-bottom:60px !important}.v-application .py-xl-16{padding-top:64px !important;padding-bottom:64px !important}.v-application .pt-xl-0{padding-top:0px !important}.v-application .pt-xl-1{padding-top:4px !important}.v-application .pt-xl-2{padding-top:8px !important}.v-application .pt-xl-3{padding-top:12px !important}.v-application .pt-xl-4{padding-top:16px !important}.v-application .pt-xl-5{padding-top:20px !important}.v-application .pt-xl-6{padding-top:24px !important}.v-application .pt-xl-7{padding-top:28px !important}.v-application .pt-xl-8{padding-top:32px !important}.v-application .pt-xl-9{padding-top:36px !important}.v-application .pt-xl-10{padding-top:40px !important}.v-application .pt-xl-11{padding-top:44px !important}.v-application .pt-xl-12{padding-top:48px !important}.v-application .pt-xl-13{padding-top:52px !important}.v-application .pt-xl-14{padding-top:56px !important}.v-application .pt-xl-15{padding-top:60px !important}.v-application .pt-xl-16{padding-top:64px !important}.v-application .pr-xl-0{padding-right:0px !important}.v-application .pr-xl-1{padding-right:4px !important}.v-application .pr-xl-2{padding-right:8px !important}.v-application .pr-xl-3{padding-right:12px !important}.v-application .pr-xl-4{padding-right:16px !important}.v-application .pr-xl-5{padding-right:20px !important}.v-application .pr-xl-6{padding-right:24px !important}.v-application .pr-xl-7{padding-right:28px !important}.v-application .pr-xl-8{padding-right:32px !important}.v-application .pr-xl-9{padding-right:36px !important}.v-application .pr-xl-10{padding-right:40px !important}.v-application .pr-xl-11{padding-right:44px !important}.v-application .pr-xl-12{padding-right:48px !important}.v-application .pr-xl-13{padding-right:52px !important}.v-application .pr-xl-14{padding-right:56px !important}.v-application .pr-xl-15{padding-right:60px !important}.v-application .pr-xl-16{padding-right:64px !important}.v-application .pb-xl-0{padding-bottom:0px !important}.v-application .pb-xl-1{padding-bottom:4px !important}.v-application .pb-xl-2{padding-bottom:8px !important}.v-application .pb-xl-3{padding-bottom:12px !important}.v-application .pb-xl-4{padding-bottom:16px !important}.v-application .pb-xl-5{padding-bottom:20px !important}.v-application .pb-xl-6{padding-bottom:24px !important}.v-application .pb-xl-7{padding-bottom:28px !important}.v-application .pb-xl-8{padding-bottom:32px !important}.v-application .pb-xl-9{padding-bottom:36px !important}.v-application .pb-xl-10{padding-bottom:40px !important}.v-application .pb-xl-11{padding-bottom:44px !important}.v-application .pb-xl-12{padding-bottom:48px !important}.v-application .pb-xl-13{padding-bottom:52px !important}.v-application .pb-xl-14{padding-bottom:56px !important}.v-application .pb-xl-15{padding-bottom:60px !important}.v-application .pb-xl-16{padding-bottom:64px !important}.v-application .pl-xl-0{padding-left:0px !important}.v-application .pl-xl-1{padding-left:4px !important}.v-application .pl-xl-2{padding-left:8px !important}.v-application .pl-xl-3{padding-left:12px !important}.v-application .pl-xl-4{padding-left:16px !important}.v-application .pl-xl-5{padding-left:20px !important}.v-application .pl-xl-6{padding-left:24px !important}.v-application .pl-xl-7{padding-left:28px !important}.v-application .pl-xl-8{padding-left:32px !important}.v-application .pl-xl-9{padding-left:36px !important}.v-application .pl-xl-10{padding-left:40px !important}.v-application .pl-xl-11{padding-left:44px !important}.v-application .pl-xl-12{padding-left:48px !important}.v-application .pl-xl-13{padding-left:52px !important}.v-application .pl-xl-14{padding-left:56px !important}.v-application .pl-xl-15{padding-left:60px !important}.v-application .pl-xl-16{padding-left:64px !important}.v-application--is-ltr .ps-xl-0{padding-left:0px !important}.v-application--is-rtl .ps-xl-0{padding-right:0px !important}.v-application--is-ltr .ps-xl-1{padding-left:4px !important}.v-application--is-rtl .ps-xl-1{padding-right:4px !important}.v-application--is-ltr .ps-xl-2{padding-left:8px !important}.v-application--is-rtl .ps-xl-2{padding-right:8px !important}.v-application--is-ltr .ps-xl-3{padding-left:12px !important}.v-application--is-rtl .ps-xl-3{padding-right:12px !important}.v-application--is-ltr .ps-xl-4{padding-left:16px !important}.v-application--is-rtl .ps-xl-4{padding-right:16px !important}.v-application--is-ltr .ps-xl-5{padding-left:20px !important}.v-application--is-rtl .ps-xl-5{padding-right:20px !important}.v-application--is-ltr .ps-xl-6{padding-left:24px !important}.v-application--is-rtl .ps-xl-6{padding-right:24px !important}.v-application--is-ltr .ps-xl-7{padding-left:28px !important}.v-application--is-rtl .ps-xl-7{padding-right:28px !important}.v-application--is-ltr .ps-xl-8{padding-left:32px !important}.v-application--is-rtl .ps-xl-8{padding-right:32px !important}.v-application--is-ltr .ps-xl-9{padding-left:36px !important}.v-application--is-rtl .ps-xl-9{padding-right:36px !important}.v-application--is-ltr .ps-xl-10{padding-left:40px !important}.v-application--is-rtl .ps-xl-10{padding-right:40px !important}.v-application--is-ltr .ps-xl-11{padding-left:44px !important}.v-application--is-rtl .ps-xl-11{padding-right:44px !important}.v-application--is-ltr .ps-xl-12{padding-left:48px !important}.v-application--is-rtl .ps-xl-12{padding-right:48px !important}.v-application--is-ltr .ps-xl-13{padding-left:52px !important}.v-application--is-rtl .ps-xl-13{padding-right:52px !important}.v-application--is-ltr .ps-xl-14{padding-left:56px !important}.v-application--is-rtl .ps-xl-14{padding-right:56px !important}.v-application--is-ltr .ps-xl-15{padding-left:60px !important}.v-application--is-rtl .ps-xl-15{padding-right:60px !important}.v-application--is-ltr .ps-xl-16{padding-left:64px !important}.v-application--is-rtl .ps-xl-16{padding-right:64px !important}.v-application--is-ltr .pe-xl-0{padding-right:0px !important}.v-application--is-rtl .pe-xl-0{padding-left:0px !important}.v-application--is-ltr .pe-xl-1{padding-right:4px !important}.v-application--is-rtl .pe-xl-1{padding-left:4px !important}.v-application--is-ltr .pe-xl-2{padding-right:8px !important}.v-application--is-rtl .pe-xl-2{padding-left:8px !important}.v-application--is-ltr .pe-xl-3{padding-right:12px !important}.v-application--is-rtl .pe-xl-3{padding-left:12px !important}.v-application--is-ltr .pe-xl-4{padding-right:16px !important}.v-application--is-rtl .pe-xl-4{padding-left:16px !important}.v-application--is-ltr .pe-xl-5{padding-right:20px !important}.v-application--is-rtl .pe-xl-5{padding-left:20px !important}.v-application--is-ltr .pe-xl-6{padding-right:24px !important}.v-application--is-rtl .pe-xl-6{padding-left:24px !important}.v-application--is-ltr .pe-xl-7{padding-right:28px !important}.v-application--is-rtl .pe-xl-7{padding-left:28px !important}.v-application--is-ltr .pe-xl-8{padding-right:32px !important}.v-application--is-rtl .pe-xl-8{padding-left:32px !important}.v-application--is-ltr .pe-xl-9{padding-right:36px !important}.v-application--is-rtl .pe-xl-9{padding-left:36px !important}.v-application--is-ltr .pe-xl-10{padding-right:40px !important}.v-application--is-rtl .pe-xl-10{padding-left:40px !important}.v-application--is-ltr .pe-xl-11{padding-right:44px !important}.v-application--is-rtl .pe-xl-11{padding-left:44px !important}.v-application--is-ltr .pe-xl-12{padding-right:48px !important}.v-application--is-rtl .pe-xl-12{padding-left:48px !important}.v-application--is-ltr .pe-xl-13{padding-right:52px !important}.v-application--is-rtl .pe-xl-13{padding-left:52px !important}.v-application--is-ltr .pe-xl-14{padding-right:56px !important}.v-application--is-rtl .pe-xl-14{padding-left:56px !important}.v-application--is-ltr .pe-xl-15{padding-right:60px !important}.v-application--is-rtl .pe-xl-15{padding-left:60px !important}.v-application--is-ltr .pe-xl-16{padding-right:64px !important}.v-application--is-rtl .pe-xl-16{padding-left:64px !important}.v-application .text-xl-left{text-align:left !important}.v-application .text-xl-right{text-align:right !important}.v-application .text-xl-center{text-align:center !important}.v-application .text-xl-justify{text-align:justify !important}.v-application .text-xl-start{text-align:start !important}.v-application .text-xl-end{text-align:end !important}.v-application .text-xl-h1{font-size:6rem !important;font-weight:300;line-height:6rem;letter-spacing:-0.015625em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-xl-h2{font-size:3.75rem !important;font-weight:300;line-height:3.75rem;letter-spacing:-0.0083333333em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-xl-h3{font-size:3rem !important;font-weight:400;line-height:3.125rem;letter-spacing:normal !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-xl-h4{font-size:2.125rem !important;font-weight:400;line-height:2.5rem;letter-spacing:.0073529412em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-xl-h5{font-size:1.5rem !important;font-weight:400;line-height:2rem;letter-spacing:normal !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-xl-h6{font-size:1.25rem !important;font-weight:500;line-height:2rem;letter-spacing:.0125em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-xl-subtitle-1{font-size:1rem !important;font-weight:normal;line-height:1.75rem;letter-spacing:.009375em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-xl-subtitle-2{font-size:.875rem !important;font-weight:500;line-height:1.375rem;letter-spacing:.0071428571em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-xl-body-1{font-size:1rem !important;font-weight:400;line-height:1.5rem;letter-spacing:.03125em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-xl-body-2{font-size:.875rem !important;font-weight:400;line-height:1.25rem;letter-spacing:.0178571429em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-xl-button{font-size:.875rem !important;font-weight:500;line-height:2.25rem;letter-spacing:.0892857143em !important;font-family:\"Roboto\",sans-serif !important;text-transform:uppercase !important}.v-application .text-xl-caption{font-size:.75rem !important;font-weight:400;line-height:1.25rem;letter-spacing:.0333333333em !important;font-family:\"Roboto\",sans-serif !important}.v-application .text-xl-overline{font-size:.75rem !important;font-weight:500;line-height:2rem;letter-spacing:.1666666667em !important;font-family:\"Roboto\",sans-serif !important;text-transform:uppercase !important}}@media print{.v-application .d-print-none{display:none !important}.v-application .d-print-inline{display:inline !important}.v-application .d-print-inline-block{display:inline-block !important}.v-application .d-print-block{display:block !important}.v-application .d-print-table{display:table !important}.v-application .d-print-table-row{display:table-row !important}.v-application .d-print-table-cell{display:table-cell !important}.v-application .d-print-flex{display:flex !important}.v-application .d-print-inline-flex{display:inline-flex !important}.v-application .float-print-none{float:none !important}.v-application .float-print-left{float:left !important}.v-application .float-print-right{float:right !important}.v-application--is-rtl .float-print-end{float:left !important}.v-application--is-rtl .float-print-start{float:right !important}.v-application--is-ltr .float-print-end{float:right !important}.v-application--is-ltr .float-print-start{float:left !important}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(76);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("1cdf85c7", content, true)

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-image{color:rgba(0,0,0,.87)}.theme--dark.v-image{color:#fff}.v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("2fba213c", content, true)

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-responsive{position:relative;overflow:hidden;flex:1 0 auto;max-width:100%;display:flex}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-application--is-ltr .v-responsive__sizer~.v-responsive__content{margin-left:-100%}.v-application--is-rtl .v-responsive__sizer~.v-responsive__content{margin-right:-100%}.v-responsive__sizer{transition:padding-bottom .2s cubic-bezier(0.25, 0.8, 0.5, 1);flex:1 0 0px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("744bab4a", content, true)

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container.grow-shrink-0{flex-grow:0;flex-shrink:0}.container.fill-height{align-items:center;display:flex;flex-wrap:wrap}.container.fill-height>.row{flex:1 1 100%;max-width:calc(100% + 24px)}.container.fill-height>.layout{height:100%;flex:1 1 auto}.container.fill-height>.layout.grow-shrink-0{flex-grow:0;flex-shrink:0}.container.grid-list-xs .layout .flex{padding:1px}.container.grid-list-xs .layout:only-child{margin:-1px}.container.grid-list-xs .layout:not(:only-child){margin:auto -1px}.container.grid-list-xs *:not(:only-child) .layout:first-child{margin-top:-1px}.container.grid-list-xs *:not(:only-child) .layout:last-child{margin-bottom:-1px}.container.grid-list-sm .layout .flex{padding:2px}.container.grid-list-sm .layout:only-child{margin:-2px}.container.grid-list-sm .layout:not(:only-child){margin:auto -2px}.container.grid-list-sm *:not(:only-child) .layout:first-child{margin-top:-2px}.container.grid-list-sm *:not(:only-child) .layout:last-child{margin-bottom:-2px}.container.grid-list-md .layout .flex{padding:4px}.container.grid-list-md .layout:only-child{margin:-4px}.container.grid-list-md .layout:not(:only-child){margin:auto -4px}.container.grid-list-md *:not(:only-child) .layout:first-child{margin-top:-4px}.container.grid-list-md *:not(:only-child) .layout:last-child{margin-bottom:-4px}.container.grid-list-lg .layout .flex{padding:8px}.container.grid-list-lg .layout:only-child{margin:-8px}.container.grid-list-lg .layout:not(:only-child){margin:auto -8px}.container.grid-list-lg *:not(:only-child) .layout:first-child{margin-top:-8px}.container.grid-list-lg *:not(:only-child) .layout:last-child{margin-bottom:-8px}.container.grid-list-xl .layout .flex{padding:12px}.container.grid-list-xl .layout:only-child{margin:-12px}.container.grid-list-xl .layout:not(:only-child){margin:auto -12px}.container.grid-list-xl *:not(:only-child) .layout:first-child{margin-top:-12px}.container.grid-list-xl *:not(:only-child) .layout:last-child{margin-bottom:-12px}.layout{display:flex;flex:1 1 auto;flex-wrap:nowrap;min-width:0}.layout.reverse{flex-direction:row-reverse}.layout.column{flex-direction:column}.layout.column.reverse{flex-direction:column-reverse}.layout.column>.flex{max-width:100%}.layout.wrap{flex-wrap:wrap}.layout.grow-shrink-0{flex-grow:0;flex-shrink:0}@media all and (min-width: 0){.flex.xs12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order-xs12{order:12}.flex.xs11{flex-basis:91.6666666667%;flex-grow:0;max-width:91.6666666667%}.flex.order-xs11{order:11}.flex.xs10{flex-basis:83.3333333333%;flex-grow:0;max-width:83.3333333333%}.flex.order-xs10{order:10}.flex.xs9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order-xs9{order:9}.flex.xs8{flex-basis:66.6666666667%;flex-grow:0;max-width:66.6666666667%}.flex.order-xs8{order:8}.flex.xs7{flex-basis:58.3333333333%;flex-grow:0;max-width:58.3333333333%}.flex.order-xs7{order:7}.flex.xs6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order-xs6{order:6}.flex.xs5{flex-basis:41.6666666667%;flex-grow:0;max-width:41.6666666667%}.flex.order-xs5{order:5}.flex.xs4{flex-basis:33.3333333333%;flex-grow:0;max-width:33.3333333333%}.flex.order-xs4{order:4}.flex.xs3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order-xs3{order:3}.flex.xs2{flex-basis:16.6666666667%;flex-grow:0;max-width:16.6666666667%}.flex.order-xs2{order:2}.flex.xs1{flex-basis:8.3333333333%;flex-grow:0;max-width:8.3333333333%}.flex.order-xs1{order:1}.v-application--is-ltr .flex.offset-xs12{margin-left:100%}.v-application--is-rtl .flex.offset-xs12{margin-right:100%}.v-application--is-ltr .flex.offset-xs11{margin-left:91.6666666667%}.v-application--is-rtl .flex.offset-xs11{margin-right:91.6666666667%}.v-application--is-ltr .flex.offset-xs10{margin-left:83.3333333333%}.v-application--is-rtl .flex.offset-xs10{margin-right:83.3333333333%}.v-application--is-ltr .flex.offset-xs9{margin-left:75%}.v-application--is-rtl .flex.offset-xs9{margin-right:75%}.v-application--is-ltr .flex.offset-xs8{margin-left:66.6666666667%}.v-application--is-rtl .flex.offset-xs8{margin-right:66.6666666667%}.v-application--is-ltr .flex.offset-xs7{margin-left:58.3333333333%}.v-application--is-rtl .flex.offset-xs7{margin-right:58.3333333333%}.v-application--is-ltr .flex.offset-xs6{margin-left:50%}.v-application--is-rtl .flex.offset-xs6{margin-right:50%}.v-application--is-ltr .flex.offset-xs5{margin-left:41.6666666667%}.v-application--is-rtl .flex.offset-xs5{margin-right:41.6666666667%}.v-application--is-ltr .flex.offset-xs4{margin-left:33.3333333333%}.v-application--is-rtl .flex.offset-xs4{margin-right:33.3333333333%}.v-application--is-ltr .flex.offset-xs3{margin-left:25%}.v-application--is-rtl .flex.offset-xs3{margin-right:25%}.v-application--is-ltr .flex.offset-xs2{margin-left:16.6666666667%}.v-application--is-rtl .flex.offset-xs2{margin-right:16.6666666667%}.v-application--is-ltr .flex.offset-xs1{margin-left:8.3333333333%}.v-application--is-rtl .flex.offset-xs1{margin-right:8.3333333333%}.v-application--is-ltr .flex.offset-xs0{margin-left:0%}.v-application--is-rtl .flex.offset-xs0{margin-right:0%}}@media all and (min-width: 600px){.flex.sm12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order-sm12{order:12}.flex.sm11{flex-basis:91.6666666667%;flex-grow:0;max-width:91.6666666667%}.flex.order-sm11{order:11}.flex.sm10{flex-basis:83.3333333333%;flex-grow:0;max-width:83.3333333333%}.flex.order-sm10{order:10}.flex.sm9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order-sm9{order:9}.flex.sm8{flex-basis:66.6666666667%;flex-grow:0;max-width:66.6666666667%}.flex.order-sm8{order:8}.flex.sm7{flex-basis:58.3333333333%;flex-grow:0;max-width:58.3333333333%}.flex.order-sm7{order:7}.flex.sm6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order-sm6{order:6}.flex.sm5{flex-basis:41.6666666667%;flex-grow:0;max-width:41.6666666667%}.flex.order-sm5{order:5}.flex.sm4{flex-basis:33.3333333333%;flex-grow:0;max-width:33.3333333333%}.flex.order-sm4{order:4}.flex.sm3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order-sm3{order:3}.flex.sm2{flex-basis:16.6666666667%;flex-grow:0;max-width:16.6666666667%}.flex.order-sm2{order:2}.flex.sm1{flex-basis:8.3333333333%;flex-grow:0;max-width:8.3333333333%}.flex.order-sm1{order:1}.v-application--is-ltr .flex.offset-sm12{margin-left:100%}.v-application--is-rtl .flex.offset-sm12{margin-right:100%}.v-application--is-ltr .flex.offset-sm11{margin-left:91.6666666667%}.v-application--is-rtl .flex.offset-sm11{margin-right:91.6666666667%}.v-application--is-ltr .flex.offset-sm10{margin-left:83.3333333333%}.v-application--is-rtl .flex.offset-sm10{margin-right:83.3333333333%}.v-application--is-ltr .flex.offset-sm9{margin-left:75%}.v-application--is-rtl .flex.offset-sm9{margin-right:75%}.v-application--is-ltr .flex.offset-sm8{margin-left:66.6666666667%}.v-application--is-rtl .flex.offset-sm8{margin-right:66.6666666667%}.v-application--is-ltr .flex.offset-sm7{margin-left:58.3333333333%}.v-application--is-rtl .flex.offset-sm7{margin-right:58.3333333333%}.v-application--is-ltr .flex.offset-sm6{margin-left:50%}.v-application--is-rtl .flex.offset-sm6{margin-right:50%}.v-application--is-ltr .flex.offset-sm5{margin-left:41.6666666667%}.v-application--is-rtl .flex.offset-sm5{margin-right:41.6666666667%}.v-application--is-ltr .flex.offset-sm4{margin-left:33.3333333333%}.v-application--is-rtl .flex.offset-sm4{margin-right:33.3333333333%}.v-application--is-ltr .flex.offset-sm3{margin-left:25%}.v-application--is-rtl .flex.offset-sm3{margin-right:25%}.v-application--is-ltr .flex.offset-sm2{margin-left:16.6666666667%}.v-application--is-rtl .flex.offset-sm2{margin-right:16.6666666667%}.v-application--is-ltr .flex.offset-sm1{margin-left:8.3333333333%}.v-application--is-rtl .flex.offset-sm1{margin-right:8.3333333333%}.v-application--is-ltr .flex.offset-sm0{margin-left:0%}.v-application--is-rtl .flex.offset-sm0{margin-right:0%}}@media all and (min-width: 960px){.flex.md12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order-md12{order:12}.flex.md11{flex-basis:91.6666666667%;flex-grow:0;max-width:91.6666666667%}.flex.order-md11{order:11}.flex.md10{flex-basis:83.3333333333%;flex-grow:0;max-width:83.3333333333%}.flex.order-md10{order:10}.flex.md9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order-md9{order:9}.flex.md8{flex-basis:66.6666666667%;flex-grow:0;max-width:66.6666666667%}.flex.order-md8{order:8}.flex.md7{flex-basis:58.3333333333%;flex-grow:0;max-width:58.3333333333%}.flex.order-md7{order:7}.flex.md6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order-md6{order:6}.flex.md5{flex-basis:41.6666666667%;flex-grow:0;max-width:41.6666666667%}.flex.order-md5{order:5}.flex.md4{flex-basis:33.3333333333%;flex-grow:0;max-width:33.3333333333%}.flex.order-md4{order:4}.flex.md3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order-md3{order:3}.flex.md2{flex-basis:16.6666666667%;flex-grow:0;max-width:16.6666666667%}.flex.order-md2{order:2}.flex.md1{flex-basis:8.3333333333%;flex-grow:0;max-width:8.3333333333%}.flex.order-md1{order:1}.v-application--is-ltr .flex.offset-md12{margin-left:100%}.v-application--is-rtl .flex.offset-md12{margin-right:100%}.v-application--is-ltr .flex.offset-md11{margin-left:91.6666666667%}.v-application--is-rtl .flex.offset-md11{margin-right:91.6666666667%}.v-application--is-ltr .flex.offset-md10{margin-left:83.3333333333%}.v-application--is-rtl .flex.offset-md10{margin-right:83.3333333333%}.v-application--is-ltr .flex.offset-md9{margin-left:75%}.v-application--is-rtl .flex.offset-md9{margin-right:75%}.v-application--is-ltr .flex.offset-md8{margin-left:66.6666666667%}.v-application--is-rtl .flex.offset-md8{margin-right:66.6666666667%}.v-application--is-ltr .flex.offset-md7{margin-left:58.3333333333%}.v-application--is-rtl .flex.offset-md7{margin-right:58.3333333333%}.v-application--is-ltr .flex.offset-md6{margin-left:50%}.v-application--is-rtl .flex.offset-md6{margin-right:50%}.v-application--is-ltr .flex.offset-md5{margin-left:41.6666666667%}.v-application--is-rtl .flex.offset-md5{margin-right:41.6666666667%}.v-application--is-ltr .flex.offset-md4{margin-left:33.3333333333%}.v-application--is-rtl .flex.offset-md4{margin-right:33.3333333333%}.v-application--is-ltr .flex.offset-md3{margin-left:25%}.v-application--is-rtl .flex.offset-md3{margin-right:25%}.v-application--is-ltr .flex.offset-md2{margin-left:16.6666666667%}.v-application--is-rtl .flex.offset-md2{margin-right:16.6666666667%}.v-application--is-ltr .flex.offset-md1{margin-left:8.3333333333%}.v-application--is-rtl .flex.offset-md1{margin-right:8.3333333333%}.v-application--is-ltr .flex.offset-md0{margin-left:0%}.v-application--is-rtl .flex.offset-md0{margin-right:0%}}@media all and (min-width: 1264px){.flex.lg12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order-lg12{order:12}.flex.lg11{flex-basis:91.6666666667%;flex-grow:0;max-width:91.6666666667%}.flex.order-lg11{order:11}.flex.lg10{flex-basis:83.3333333333%;flex-grow:0;max-width:83.3333333333%}.flex.order-lg10{order:10}.flex.lg9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order-lg9{order:9}.flex.lg8{flex-basis:66.6666666667%;flex-grow:0;max-width:66.6666666667%}.flex.order-lg8{order:8}.flex.lg7{flex-basis:58.3333333333%;flex-grow:0;max-width:58.3333333333%}.flex.order-lg7{order:7}.flex.lg6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order-lg6{order:6}.flex.lg5{flex-basis:41.6666666667%;flex-grow:0;max-width:41.6666666667%}.flex.order-lg5{order:5}.flex.lg4{flex-basis:33.3333333333%;flex-grow:0;max-width:33.3333333333%}.flex.order-lg4{order:4}.flex.lg3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order-lg3{order:3}.flex.lg2{flex-basis:16.6666666667%;flex-grow:0;max-width:16.6666666667%}.flex.order-lg2{order:2}.flex.lg1{flex-basis:8.3333333333%;flex-grow:0;max-width:8.3333333333%}.flex.order-lg1{order:1}.v-application--is-ltr .flex.offset-lg12{margin-left:100%}.v-application--is-rtl .flex.offset-lg12{margin-right:100%}.v-application--is-ltr .flex.offset-lg11{margin-left:91.6666666667%}.v-application--is-rtl .flex.offset-lg11{margin-right:91.6666666667%}.v-application--is-ltr .flex.offset-lg10{margin-left:83.3333333333%}.v-application--is-rtl .flex.offset-lg10{margin-right:83.3333333333%}.v-application--is-ltr .flex.offset-lg9{margin-left:75%}.v-application--is-rtl .flex.offset-lg9{margin-right:75%}.v-application--is-ltr .flex.offset-lg8{margin-left:66.6666666667%}.v-application--is-rtl .flex.offset-lg8{margin-right:66.6666666667%}.v-application--is-ltr .flex.offset-lg7{margin-left:58.3333333333%}.v-application--is-rtl .flex.offset-lg7{margin-right:58.3333333333%}.v-application--is-ltr .flex.offset-lg6{margin-left:50%}.v-application--is-rtl .flex.offset-lg6{margin-right:50%}.v-application--is-ltr .flex.offset-lg5{margin-left:41.6666666667%}.v-application--is-rtl .flex.offset-lg5{margin-right:41.6666666667%}.v-application--is-ltr .flex.offset-lg4{margin-left:33.3333333333%}.v-application--is-rtl .flex.offset-lg4{margin-right:33.3333333333%}.v-application--is-ltr .flex.offset-lg3{margin-left:25%}.v-application--is-rtl .flex.offset-lg3{margin-right:25%}.v-application--is-ltr .flex.offset-lg2{margin-left:16.6666666667%}.v-application--is-rtl .flex.offset-lg2{margin-right:16.6666666667%}.v-application--is-ltr .flex.offset-lg1{margin-left:8.3333333333%}.v-application--is-rtl .flex.offset-lg1{margin-right:8.3333333333%}.v-application--is-ltr .flex.offset-lg0{margin-left:0%}.v-application--is-rtl .flex.offset-lg0{margin-right:0%}}@media all and (min-width: 1904px){.flex.xl12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order-xl12{order:12}.flex.xl11{flex-basis:91.6666666667%;flex-grow:0;max-width:91.6666666667%}.flex.order-xl11{order:11}.flex.xl10{flex-basis:83.3333333333%;flex-grow:0;max-width:83.3333333333%}.flex.order-xl10{order:10}.flex.xl9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order-xl9{order:9}.flex.xl8{flex-basis:66.6666666667%;flex-grow:0;max-width:66.6666666667%}.flex.order-xl8{order:8}.flex.xl7{flex-basis:58.3333333333%;flex-grow:0;max-width:58.3333333333%}.flex.order-xl7{order:7}.flex.xl6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order-xl6{order:6}.flex.xl5{flex-basis:41.6666666667%;flex-grow:0;max-width:41.6666666667%}.flex.order-xl5{order:5}.flex.xl4{flex-basis:33.3333333333%;flex-grow:0;max-width:33.3333333333%}.flex.order-xl4{order:4}.flex.xl3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order-xl3{order:3}.flex.xl2{flex-basis:16.6666666667%;flex-grow:0;max-width:16.6666666667%}.flex.order-xl2{order:2}.flex.xl1{flex-basis:8.3333333333%;flex-grow:0;max-width:8.3333333333%}.flex.order-xl1{order:1}.v-application--is-ltr .flex.offset-xl12{margin-left:100%}.v-application--is-rtl .flex.offset-xl12{margin-right:100%}.v-application--is-ltr .flex.offset-xl11{margin-left:91.6666666667%}.v-application--is-rtl .flex.offset-xl11{margin-right:91.6666666667%}.v-application--is-ltr .flex.offset-xl10{margin-left:83.3333333333%}.v-application--is-rtl .flex.offset-xl10{margin-right:83.3333333333%}.v-application--is-ltr .flex.offset-xl9{margin-left:75%}.v-application--is-rtl .flex.offset-xl9{margin-right:75%}.v-application--is-ltr .flex.offset-xl8{margin-left:66.6666666667%}.v-application--is-rtl .flex.offset-xl8{margin-right:66.6666666667%}.v-application--is-ltr .flex.offset-xl7{margin-left:58.3333333333%}.v-application--is-rtl .flex.offset-xl7{margin-right:58.3333333333%}.v-application--is-ltr .flex.offset-xl6{margin-left:50%}.v-application--is-rtl .flex.offset-xl6{margin-right:50%}.v-application--is-ltr .flex.offset-xl5{margin-left:41.6666666667%}.v-application--is-rtl .flex.offset-xl5{margin-right:41.6666666667%}.v-application--is-ltr .flex.offset-xl4{margin-left:33.3333333333%}.v-application--is-rtl .flex.offset-xl4{margin-right:33.3333333333%}.v-application--is-ltr .flex.offset-xl3{margin-left:25%}.v-application--is-rtl .flex.offset-xl3{margin-right:25%}.v-application--is-ltr .flex.offset-xl2{margin-left:16.6666666667%}.v-application--is-rtl .flex.offset-xl2{margin-right:16.6666666667%}.v-application--is-ltr .flex.offset-xl1{margin-left:8.3333333333%}.v-application--is-rtl .flex.offset-xl1{margin-right:8.3333333333%}.v-application--is-ltr .flex.offset-xl0{margin-left:0%}.v-application--is-rtl .flex.offset-xl0{margin-right:0%}}.flex,.child-flex>*{flex:1 1 auto;max-width:100%}.flex.grow-shrink-0,.child-flex>*.grow-shrink-0{flex-grow:0;flex-shrink:0}.spacer{flex-grow:1 !important}.grow{flex-grow:1 !important;flex-shrink:0 !important}.shrink{flex-grow:0 !important;flex-shrink:1 !important}.fill-height{height:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("424d9537", content, true)

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-main{display:flex;flex:1 0 auto;max-width:100%;transition:.2s cubic-bezier(0.4, 0, 0.2, 1)}.v-main:not([data-booted=true]){transition:none !important}.v-main__wrap{flex:1 1 auto;max-width:100%;position:relative}@-moz-document url-prefix(){@media print{.v-main{display:block}}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_3b83cbc6_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_3b83cbc6_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_3b83cbc6_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_3b83cbc6_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_3b83cbc6_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(41);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(42);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html{overflow-y:hidden}*{font-family:\"Orbitron\",sans-serif;letter-spacing:1px}body{padding:0 !important;box-sizing:border-box !important}.top-header{background-color:#40566b !important}.v-application::before{content:\"\";position:fixed;top:0;left:0;right:0;height:100%;background-color:transparent;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:4.6875rem;background-repeat:repeat;background-attachment:initial}.v-application{background-color:#273136;z-index:2}.title-main{font-size:1rem;color:#fff;padding-left:20px;text-transform:uppercase;letter-spacing:3px}.v-main__wrap::before{content:\"\";position:fixed;top:0;left:0;right:0;height:100%;z-index:-5;background:linear-gradient(180deg, rgba(50, 70, 80, 0.9) 0, #0d101b 100%)}.v-main__wrap::after{content:\"\";position:fixed;top:0;height:100%;left:0;right:0;z-index:-10;background-color:#273136;background-image:linear-gradient(180deg, rgba(50, 70, 80, 0.9) 0, #0d101b 100%);background-image:url(\"/cover5.jpg\");background-repeat:no-repeat;background-position:center;background-attachment:initial;height:100%;transition:background .2s linear;background-size:cover}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_15819b3e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_15819b3e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_15819b3e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_15819b3e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_15819b3e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(41);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(42);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\r\n/* html {\r\n  overflow: hidden !important;\r\n  scrollbar-width: none;\r\n  -ms-overflow-style: none;\r\n}\r\n\r\n\r\nhtml::-webkit-scrollbar {\r\n  width: 0;\r\n  height: 0;\r\n} */\n.v-main__wrap::before {\r\n  content: \"\";\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 100%;\r\n  z-index: -5;\r\n  background: linear-gradient(180deg, rgba(50, 70, 80, 0.9) 0, #0d101b 100%);\n}\n.v-main__wrap::after {\r\n  content: \"\";\r\n  position: fixed;\r\n  top: 0;\r\n  height: 100%;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: -10;\r\n  background-color: #273136;\r\n  background-image: linear-gradient(\r\n    180deg,\r\n    rgba(50, 70, 80, 0.9) 0,\r\n    #0d101b 100%\r\n  );\r\n  background-image: url(\"/cover5.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-attachment: initial;\r\n  height: 100%;\r\n  transition: background 0.2s linear;\r\n  background-size: cover;\n}\n.section2 {\r\n  min-height: 100vh;\r\n  min-width: 100vw;\r\n  /* background: grey; */\r\n  /* background-image: url(\"/52-Converted-01.svg\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover; */\r\n  /* background-size: 300px; */\r\n  overflow: hidden;\r\n  background: 0 0;\r\n  position: relative;\r\n  z-index: 1;\n}\n.section2::before {\r\n  content: \"\";\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 100%;\r\n  background-color: transparent;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: 4.6875rem;\r\n  background-repeat: repeat;\r\n  background-attachment: initial;\n}\n.section2 {\r\n  /* background-color: rgba(88, 104, 124, 1); */\r\n  background-color: #273136;\n}\r\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.url = void 0;
const engine_io_client_1 = __webpack_require__(44);
const debug_1 = __importDefault(__webpack_require__(8)); // debug()
const debug = debug_1.default("socket.io-client:url"); // debug()
/**
 * URL parser.
 *
 * @param uri - url
 * @param path - the request path of the connection
 * @param loc - An object meant to mimic window.location.
 *        Defaults to window.location.
 * @public
 */
function url(uri, path = "", loc) {
    let obj = uri;
    // default to window.location
    loc = loc || (typeof location !== "undefined" && location);
    if (null == uri)
        uri = loc.protocol + "//" + loc.host;
    // relative path support
    if (typeof uri === "string") {
        if ("/" === uri.charAt(0)) {
            if ("/" === uri.charAt(1)) {
                uri = loc.protocol + uri;
            }
            else {
                uri = loc.host + uri;
            }
        }
        if (!/^(https?|wss?):\/\//.test(uri)) {
            debug("protocol-less url %s", uri);
            if ("undefined" !== typeof loc) {
                uri = loc.protocol + "//" + uri;
            }
            else {
                uri = "https://" + uri;
            }
        }
        // parse
        debug("parse %s", uri);
        obj = engine_io_client_1.parse(uri);
    }
    // make sure we treat `localhost:80` and `localhost` equally
    if (!obj.port) {
        if (/^(http|ws)$/.test(obj.protocol)) {
            obj.port = "80";
        }
        else if (/^(http|ws)s$/.test(obj.protocol)) {
            obj.port = "443";
        }
    }
    obj.path = obj.path || "/";
    const ipv6 = obj.host.indexOf(":") !== -1;
    const host = ipv6 ? "[" + obj.host + "]" : obj.host;
    // define unique id
    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
    // define href
    obj.href =
        obj.protocol +
            "://" +
            host +
            (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
}
exports.url = url;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Socket = void 0;
const index_js_1 = __webpack_require__(45);
const util_js_1 = __webpack_require__(15);
const parseqs_js_1 = __webpack_require__(24);
const parseuri_js_1 = __webpack_require__(49);
const debug_1 = __importDefault(__webpack_require__(8)); // debug()
const component_emitter_1 = __webpack_require__(13);
const engine_io_parser_1 = __webpack_require__(20);
const debug = (0, debug_1.default)("engine.io-client:socket"); // debug()
class Socket extends component_emitter_1.Emitter {
    /**
     * Socket constructor.
     *
     * @param {String|Object} uri or options
     * @param {Object} opts - options
     * @api public
     */
    constructor(uri, opts = {}) {
        super();
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = null;
        }
        if (uri) {
            uri = (0, parseuri_js_1.parse)(uri);
            opts.hostname = uri.host;
            opts.secure = uri.protocol === "https" || uri.protocol === "wss";
            opts.port = uri.port;
            if (uri.query)
                opts.query = uri.query;
        }
        else if (opts.host) {
            opts.hostname = (0, parseuri_js_1.parse)(opts.host).host;
        }
        (0, util_js_1.installTimerFunctions)(this, opts);
        this.secure =
            null != opts.secure
                ? opts.secure
                : typeof location !== "undefined" && "https:" === location.protocol;
        if (opts.hostname && !opts.port) {
            // if no port is specified manually, use the protocol default
            opts.port = this.secure ? "443" : "80";
        }
        this.hostname =
            opts.hostname ||
                (typeof location !== "undefined" ? location.hostname : "localhost");
        this.port =
            opts.port ||
                (typeof location !== "undefined" && location.port
                    ? location.port
                    : this.secure
                        ? "443"
                        : "80");
        this.transports = opts.transports || ["polling", "websocket"];
        this.readyState = "";
        this.writeBuffer = [];
        this.prevBufferLen = 0;
        this.opts = Object.assign({
            path: "/engine.io",
            agent: false,
            withCredentials: false,
            upgrade: true,
            timestampParam: "t",
            rememberUpgrade: false,
            rejectUnauthorized: true,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: true
        }, opts);
        this.opts.path = this.opts.path.replace(/\/$/, "") + "/";
        if (typeof this.opts.query === "string") {
            this.opts.query = (0, parseqs_js_1.decode)(this.opts.query);
        }
        // set on handshake
        this.id = null;
        this.upgrades = null;
        this.pingInterval = null;
        this.pingTimeout = null;
        // set on heartbeat
        this.pingTimeoutTimer = null;
        if (typeof addEventListener === "function") {
            if (this.opts.closeOnBeforeunload) {
                // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
                // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
                // closed/reloaded)
                addEventListener("beforeunload", () => {
                    if (this.transport) {
                        // silently close the transport
                        this.transport.removeAllListeners();
                        this.transport.close();
                    }
                }, false);
            }
            if (this.hostname !== "localhost") {
                this.offlineEventListener = () => {
                    this.onClose("transport close", {
                        description: "network connection lost"
                    });
                };
                addEventListener("offline", this.offlineEventListener, false);
            }
        }
        this.open();
    }
    /**
     * Creates transport of the given type.
     *
     * @param {String} transport name
     * @return {Transport}
     * @api private
     */
    createTransport(name) {
        debug('creating transport "%s"', name);
        const query = Object.assign({}, this.opts.query);
        // append engine.io protocol identifier
        query.EIO = engine_io_parser_1.protocol;
        // transport name
        query.transport = name;
        // session id if we already have one
        if (this.id)
            query.sid = this.id;
        const opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
            query,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        });
        debug("options: %j", opts);
        return new index_js_1.transports[name](opts);
    }
    /**
     * Initializes transport to use and starts probe.
     *
     * @api private
     */
    open() {
        let transport;
        if (this.opts.rememberUpgrade &&
            Socket.priorWebsocketSuccess &&
            this.transports.indexOf("websocket") !== -1) {
            transport = "websocket";
        }
        else if (0 === this.transports.length) {
            // Emit error on next tick so it can be listened to
            this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available");
            }, 0);
            return;
        }
        else {
            transport = this.transports[0];
        }
        this.readyState = "opening";
        // Retry with the next transport if the transport is disabled (jsonp: false)
        try {
            transport = this.createTransport(transport);
        }
        catch (e) {
            debug("error while creating transport: %s", e);
            this.transports.shift();
            this.open();
            return;
        }
        transport.open();
        this.setTransport(transport);
    }
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @api private
     */
    setTransport(transport) {
        debug("setting transport %s", transport.name);
        if (this.transport) {
            debug("clearing existing transport %s", this.transport.name);
            this.transport.removeAllListeners();
        }
        // set up transport
        this.transport = transport;
        // set up transport listeners
        transport
            .on("drain", this.onDrain.bind(this))
            .on("packet", this.onPacket.bind(this))
            .on("error", this.onError.bind(this))
            .on("close", reason => this.onClose("transport close", reason));
    }
    /**
     * Probes a transport.
     *
     * @param {String} transport name
     * @api private
     */
    probe(name) {
        debug('probing transport "%s"', name);
        let transport = this.createTransport(name);
        let failed = false;
        Socket.priorWebsocketSuccess = false;
        const onTransportOpen = () => {
            if (failed)
                return;
            debug('probe transport "%s" opened', name);
            transport.send([{ type: "ping", data: "probe" }]);
            transport.once("packet", msg => {
                if (failed)
                    return;
                if ("pong" === msg.type && "probe" === msg.data) {
                    debug('probe transport "%s" pong', name);
                    this.upgrading = true;
                    this.emitReserved("upgrading", transport);
                    if (!transport)
                        return;
                    Socket.priorWebsocketSuccess = "websocket" === transport.name;
                    debug('pausing current transport "%s"', this.transport.name);
                    this.transport.pause(() => {
                        if (failed)
                            return;
                        if ("closed" === this.readyState)
                            return;
                        debug("changing transport and sending upgrade packet");
                        cleanup();
                        this.setTransport(transport);
                        transport.send([{ type: "upgrade" }]);
                        this.emitReserved("upgrade", transport);
                        transport = null;
                        this.upgrading = false;
                        this.flush();
                    });
                }
                else {
                    debug('probe transport "%s" failed', name);
                    const err = new Error("probe error");
                    // @ts-ignore
                    err.transport = transport.name;
                    this.emitReserved("upgradeError", err);
                }
            });
        };
        function freezeTransport() {
            if (failed)
                return;
            // Any callback called by transport should be ignored since now
            failed = true;
            cleanup();
            transport.close();
            transport = null;
        }
        // Handle any error that happens while probing
        const onerror = err => {
            const error = new Error("probe error: " + err);
            // @ts-ignore
            error.transport = transport.name;
            freezeTransport();
            debug('probe transport "%s" failed because of error: %s', name, err);
            this.emitReserved("upgradeError", error);
        };
        function onTransportClose() {
            onerror("transport closed");
        }
        // When the socket is closed while we're probing
        function onclose() {
            onerror("socket closed");
        }
        // When the socket is upgraded while we're probing
        function onupgrade(to) {
            if (transport && to.name !== transport.name) {
                debug('"%s" works - aborting "%s"', to.name, transport.name);
                freezeTransport();
            }
        }
        // Remove all listeners on the transport and on self
        const cleanup = () => {
            transport.removeListener("open", onTransportOpen);
            transport.removeListener("error", onerror);
            transport.removeListener("close", onTransportClose);
            this.off("close", onclose);
            this.off("upgrading", onupgrade);
        };
        transport.once("open", onTransportOpen);
        transport.once("error", onerror);
        transport.once("close", onTransportClose);
        this.once("close", onclose);
        this.once("upgrading", onupgrade);
        transport.open();
    }
    /**
     * Called when connection is deemed open.
     *
     * @api private
     */
    onOpen() {
        debug("socket open");
        this.readyState = "open";
        Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
        this.emitReserved("open");
        this.flush();
        // we check for `readyState` in case an `open`
        // listener already closed the socket
        if ("open" === this.readyState &&
            this.opts.upgrade &&
            this.transport.pause) {
            debug("starting upgrade probes");
            let i = 0;
            const l = this.upgrades.length;
            for (; i < l; i++) {
                this.probe(this.upgrades[i]);
            }
        }
    }
    /**
     * Handles a packet.
     *
     * @api private
     */
    onPacket(packet) {
        if ("opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState) {
            debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
            this.emitReserved("packet", packet);
            // Socket is live - any packet counts
            this.emitReserved("heartbeat");
            switch (packet.type) {
                case "open":
                    this.onHandshake(JSON.parse(packet.data));
                    break;
                case "ping":
                    this.resetPingTimeout();
                    this.sendPacket("pong");
                    this.emitReserved("ping");
                    this.emitReserved("pong");
                    break;
                case "error":
                    const err = new Error("server error");
                    // @ts-ignore
                    err.code = packet.data;
                    this.onError(err);
                    break;
                case "message":
                    this.emitReserved("data", packet.data);
                    this.emitReserved("message", packet.data);
                    break;
            }
        }
        else {
            debug('packet received with socket readyState "%s"', this.readyState);
        }
    }
    /**
     * Called upon handshake completion.
     *
     * @param {Object} data - handshake obj
     * @api private
     */
    onHandshake(data) {
        this.emitReserved("handshake", data);
        this.id = data.sid;
        this.transport.query.sid = data.sid;
        this.upgrades = this.filterUpgrades(data.upgrades);
        this.pingInterval = data.pingInterval;
        this.pingTimeout = data.pingTimeout;
        this.maxPayload = data.maxPayload;
        this.onOpen();
        // In case open handler closes socket
        if ("closed" === this.readyState)
            return;
        this.resetPingTimeout();
    }
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @api private
     */
    resetPingTimeout() {
        this.clearTimeoutFn(this.pingTimeoutTimer);
        this.pingTimeoutTimer = this.setTimeoutFn(() => {
            this.onClose("ping timeout");
        }, this.pingInterval + this.pingTimeout);
        if (this.opts.autoUnref) {
            this.pingTimeoutTimer.unref();
        }
    }
    /**
     * Called on `drain` event
     *
     * @api private
     */
    onDrain() {
        this.writeBuffer.splice(0, this.prevBufferLen);
        // setting prevBufferLen = 0 is very important
        // for example, when upgrading, upgrade packet is sent over,
        // and a nonzero prevBufferLen could cause problems on `drain`
        this.prevBufferLen = 0;
        if (0 === this.writeBuffer.length) {
            this.emitReserved("drain");
        }
        else {
            this.flush();
        }
    }
    /**
     * Flush write buffers.
     *
     * @api private
     */
    flush() {
        if ("closed" !== this.readyState &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length) {
            const packets = this.getWritablePackets();
            debug("flushing %d packets in socket", packets.length);
            this.transport.send(packets);
            // keep track of current length of writeBuffer
            // splice writeBuffer and callbackBuffer on `drain`
            this.prevBufferLen = packets.length;
            this.emitReserved("flush");
        }
    }
    /**
     * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
     * long-polling)
     *
     * @private
     */
    getWritablePackets() {
        const shouldCheckPayloadSize = this.maxPayload &&
            this.transport.name === "polling" &&
            this.writeBuffer.length > 1;
        if (!shouldCheckPayloadSize) {
            return this.writeBuffer;
        }
        let payloadSize = 1; // first packet type
        for (let i = 0; i < this.writeBuffer.length; i++) {
            const data = this.writeBuffer[i].data;
            if (data) {
                payloadSize += (0, util_js_1.byteLength)(data);
            }
            if (i > 0 && payloadSize > this.maxPayload) {
                debug("only send %d out of %d packets", i, this.writeBuffer.length);
                return this.writeBuffer.slice(0, i);
            }
            payloadSize += 2; // separator + packet type
        }
        debug("payload size is %d (max: %d)", payloadSize, this.maxPayload);
        return this.writeBuffer;
    }
    /**
     * Sends a message.
     *
     * @param {String} message.
     * @param {Function} callback function.
     * @param {Object} options.
     * @return {Socket} for chaining.
     * @api public
     */
    write(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
    }
    send(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} callback function.
     * @api private
     */
    sendPacket(type, data, options, fn) {
        if ("function" === typeof data) {
            fn = data;
            data = undefined;
        }
        if ("function" === typeof options) {
            fn = options;
            options = null;
        }
        if ("closing" === this.readyState || "closed" === this.readyState) {
            return;
        }
        options = options || {};
        options.compress = false !== options.compress;
        const packet = {
            type: type,
            data: data,
            options: options
        };
        this.emitReserved("packetCreate", packet);
        this.writeBuffer.push(packet);
        if (fn)
            this.once("flush", fn);
        this.flush();
    }
    /**
     * Closes the connection.
     *
     * @api public
     */
    close() {
        const close = () => {
            this.onClose("forced close");
            debug("socket closing - telling transport to close");
            this.transport.close();
        };
        const cleanupAndClose = () => {
            this.off("upgrade", cleanupAndClose);
            this.off("upgradeError", cleanupAndClose);
            close();
        };
        const waitForUpgrade = () => {
            // wait for upgrade to finish since we can't send packets while pausing a transport
            this.once("upgrade", cleanupAndClose);
            this.once("upgradeError", cleanupAndClose);
        };
        if ("opening" === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
            if (this.writeBuffer.length) {
                this.once("drain", () => {
                    if (this.upgrading) {
                        waitForUpgrade();
                    }
                    else {
                        close();
                    }
                });
            }
            else if (this.upgrading) {
                waitForUpgrade();
            }
            else {
                close();
            }
        }
        return this;
    }
    /**
     * Called upon transport error
     *
     * @api private
     */
    onError(err) {
        debug("socket error %j", err);
        Socket.priorWebsocketSuccess = false;
        this.emitReserved("error", err);
        this.onClose("transport error", err);
    }
    /**
     * Called upon transport close.
     *
     * @api private
     */
    onClose(reason, description) {
        if ("opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState) {
            debug('socket close with reason: "%s"', reason);
            // clear timers
            this.clearTimeoutFn(this.pingTimeoutTimer);
            // stop event from firing again for transport
            this.transport.removeAllListeners("close");
            // ensure transport won't stay open
            this.transport.close();
            // ignore further transport communication
            this.transport.removeAllListeners();
            if (typeof removeEventListener === "function") {
                removeEventListener("offline", this.offlineEventListener, false);
            }
            // set ready state
            this.readyState = "closed";
            // clear session id
            this.id = null;
            // emit close event
            this.emitReserved("close", reason, description);
            // clean buffers after, so users can still
            // grab the buffers on `close` event
            this.writeBuffer = [];
            this.prevBufferLen = 0;
        }
    }
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} server upgrades
     * @api private
     *
     */
    filterUpgrades(upgrades) {
        const filteredUpgrades = [];
        let i = 0;
        const j = upgrades.length;
        for (; i < j; i++) {
            if (~this.transports.indexOf(upgrades[i]))
                filteredUpgrades.push(upgrades[i]);
        }
        return filteredUpgrades;
    }
}
exports.Socket = Socket;
Socket.protocol = engine_io_parser_1.protocol;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = exports.Polling = void 0;
const transport_js_1 = __webpack_require__(23);
const debug_1 = __importDefault(__webpack_require__(8)); // debug()
const yeast_js_1 = __webpack_require__(48);
const parseqs_js_1 = __webpack_require__(24);
const engine_io_parser_1 = __webpack_require__(20);
const xmlhttprequest_js_1 = __webpack_require__(92);
const component_emitter_1 = __webpack_require__(13);
const util_js_1 = __webpack_require__(15);
const globalThis_js_1 = __webpack_require__(47);
const debug = (0, debug_1.default)("engine.io-client:polling"); // debug()
function empty() { }
const hasXHR2 = (function () {
    const xhr = new xmlhttprequest_js_1.XHR({
        xdomain: false
    });
    return null != xhr.responseType;
})();
class Polling extends transport_js_1.Transport {
    /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @api public
     */
    constructor(opts) {
        super(opts);
        this.polling = false;
        if (typeof location !== "undefined") {
            const isSSL = "https:" === location.protocol;
            let port = location.port;
            // some user agents have empty `location.port`
            if (!port) {
                port = isSSL ? "443" : "80";
            }
            this.xd =
                (typeof location !== "undefined" &&
                    opts.hostname !== location.hostname) ||
                    port !== opts.port;
            this.xs = opts.secure !== isSSL;
        }
        /**
         * XHR supports binary
         */
        const forceBase64 = opts && opts.forceBase64;
        this.supportsBinary = hasXHR2 && !forceBase64;
    }
    /**
     * Transport name.
     */
    get name() {
        return "polling";
    }
    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @api private
     */
    doOpen() {
        this.poll();
    }
    /**
     * Pauses polling.
     *
     * @param {Function} callback upon buffers are flushed and transport is paused
     * @api private
     */
    pause(onPause) {
        this.readyState = "pausing";
        const pause = () => {
            debug("paused");
            this.readyState = "paused";
            onPause();
        };
        if (this.polling || !this.writable) {
            let total = 0;
            if (this.polling) {
                debug("we are currently polling - waiting to pause");
                total++;
                this.once("pollComplete", function () {
                    debug("pre-pause polling complete");
                    --total || pause();
                });
            }
            if (!this.writable) {
                debug("we are currently writing - waiting to pause");
                total++;
                this.once("drain", function () {
                    debug("pre-pause writing complete");
                    --total || pause();
                });
            }
        }
        else {
            pause();
        }
    }
    /**
     * Starts polling cycle.
     *
     * @api public
     */
    poll() {
        debug("polling");
        this.polling = true;
        this.doPoll();
        this.emitReserved("poll");
    }
    /**
     * Overloads onData to detect payloads.
     *
     * @api private
     */
    onData(data) {
        debug("polling got data %s", data);
        const callback = packet => {
            // if its the first message we consider the transport open
            if ("opening" === this.readyState && packet.type === "open") {
                this.onOpen();
            }
            // if its a close packet, we close the ongoing requests
            if ("close" === packet.type) {
                this.onClose({ description: "transport closed by the server" });
                return false;
            }
            // otherwise bypass onData and handle the message
            this.onPacket(packet);
        };
        // decode payload
        (0, engine_io_parser_1.decodePayload)(data, this.socket.binaryType).forEach(callback);
        // if an event did not trigger closing
        if ("closed" !== this.readyState) {
            // if we got data we're not polling
            this.polling = false;
            this.emitReserved("pollComplete");
            if ("open" === this.readyState) {
                this.poll();
            }
            else {
                debug('ignoring poll - transport state "%s"', this.readyState);
            }
        }
    }
    /**
     * For polling, send a close packet.
     *
     * @api private
     */
    doClose() {
        const close = () => {
            debug("writing close packet");
            this.write([{ type: "close" }]);
        };
        if ("open" === this.readyState) {
            debug("transport open - closing");
            close();
        }
        else {
            // in case we're trying to close while
            // handshaking is in progress (GH-164)
            debug("transport not open - deferring close");
            this.once("open", close);
        }
    }
    /**
     * Writes a packets payload.
     *
     * @param {Array} data packets
     * @param {Function} drain callback
     * @api private
     */
    write(packets) {
        this.writable = false;
        (0, engine_io_parser_1.encodePayload)(packets, data => {
            this.doWrite(data, () => {
                this.writable = true;
                this.emitReserved("drain");
            });
        });
    }
    /**
     * Generates uri for connection.
     *
     * @api private
     */
    uri() {
        let query = this.query || {};
        const schema = this.opts.secure ? "https" : "http";
        let port = "";
        // cache busting is forced
        if (false !== this.opts.timestampRequests) {
            query[this.opts.timestampParam] = (0, yeast_js_1.yeast)();
        }
        if (!this.supportsBinary && !query.sid) {
            query.b64 = 1;
        }
        // avoid port if default for schema
        if (this.opts.port &&
            (("https" === schema && Number(this.opts.port) !== 443) ||
                ("http" === schema && Number(this.opts.port) !== 80))) {
            port = ":" + this.opts.port;
        }
        const encodedQuery = (0, parseqs_js_1.encode)(query);
        const ipv6 = this.opts.hostname.indexOf(":") !== -1;
        return (schema +
            "://" +
            (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
            port +
            this.opts.path +
            (encodedQuery.length ? "?" + encodedQuery : ""));
    }
    /**
     * Creates a request.
     *
     * @param {String} method
     * @api private
     */
    request(opts = {}) {
        Object.assign(opts, { xd: this.xd, xs: this.xs }, this.opts);
        return new Request(this.uri(), opts);
    }
    /**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @api private
     */
    doWrite(data, fn) {
        const req = this.request({
            method: "POST",
            data: data
        });
        req.on("success", fn);
        req.on("error", (xhrStatus, context) => {
            this.onError("xhr post error", xhrStatus, context);
        });
    }
    /**
     * Starts a poll cycle.
     *
     * @api private
     */
    doPoll() {
        debug("xhr poll");
        const req = this.request();
        req.on("data", this.onData.bind(this));
        req.on("error", (xhrStatus, context) => {
            this.onError("xhr poll error", xhrStatus, context);
        });
        this.pollXhr = req;
    }
}
exports.Polling = Polling;
class Request extends component_emitter_1.Emitter {
    /**
     * Request constructor
     *
     * @param {Object} options
     * @api public
     */
    constructor(uri, opts) {
        super();
        (0, util_js_1.installTimerFunctions)(this, opts);
        this.opts = opts;
        this.method = opts.method || "GET";
        this.uri = uri;
        this.async = false !== opts.async;
        this.data = undefined !== opts.data ? opts.data : null;
        this.create();
    }
    /**
     * Creates the XHR object and sends the request.
     *
     * @api private
     */
    create() {
        const opts = (0, util_js_1.pick)(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        opts.xdomain = !!this.opts.xd;
        opts.xscheme = !!this.opts.xs;
        const xhr = (this.xhr = new xmlhttprequest_js_1.XHR(opts));
        try {
            debug("xhr open %s: %s", this.method, this.uri);
            xhr.open(this.method, this.uri, this.async);
            try {
                if (this.opts.extraHeaders) {
                    xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
                    for (let i in this.opts.extraHeaders) {
                        if (this.opts.extraHeaders.hasOwnProperty(i)) {
                            xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
                        }
                    }
                }
            }
            catch (e) { }
            if ("POST" === this.method) {
                try {
                    xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                }
                catch (e) { }
            }
            try {
                xhr.setRequestHeader("Accept", "*/*");
            }
            catch (e) { }
            // ie6 check
            if ("withCredentials" in xhr) {
                xhr.withCredentials = this.opts.withCredentials;
            }
            if (this.opts.requestTimeout) {
                xhr.timeout = this.opts.requestTimeout;
            }
            xhr.onreadystatechange = () => {
                if (4 !== xhr.readyState)
                    return;
                if (200 === xhr.status || 1223 === xhr.status) {
                    this.onLoad();
                }
                else {
                    // make sure the `error` event handler that's user-set
                    // does not throw in the same tick and gets caught here
                    this.setTimeoutFn(() => {
                        this.onError(typeof xhr.status === "number" ? xhr.status : 0);
                    }, 0);
                }
            };
            debug("xhr data %s", this.data);
            xhr.send(this.data);
        }
        catch (e) {
            // Need to defer since .create() is called directly from the constructor
            // and thus the 'error' event can only be only bound *after* this exception
            // occurs.  Therefore, also, we cannot throw here at all.
            this.setTimeoutFn(() => {
                this.onError(e);
            }, 0);
            return;
        }
        if (typeof document !== "undefined") {
            this.index = Request.requestsCount++;
            Request.requests[this.index] = this;
        }
    }
    /**
     * Called upon error.
     *
     * @api private
     */
    onError(err) {
        this.emitReserved("error", err, this.xhr);
        this.cleanup(true);
    }
    /**
     * Cleans up house.
     *
     * @api private
     */
    cleanup(fromError) {
        if ("undefined" === typeof this.xhr || null === this.xhr) {
            return;
        }
        this.xhr.onreadystatechange = empty;
        if (fromError) {
            try {
                this.xhr.abort();
            }
            catch (e) { }
        }
        if (typeof document !== "undefined") {
            delete Request.requests[this.index];
        }
        this.xhr = null;
    }
    /**
     * Called upon load.
     *
     * @api private
     */
    onLoad() {
        const data = this.xhr.responseText;
        if (data !== null) {
            this.emitReserved("data", data);
            this.emitReserved("success");
            this.cleanup();
        }
    }
    /**
     * Aborts the request.
     *
     * @api public
     */
    abort() {
        this.cleanup();
    }
}
exports.Request = Request;
Request.requestsCount = 0;
Request.requests = {};
/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */
if (typeof document !== "undefined") {
    // @ts-ignore
    if (typeof attachEvent === "function") {
        // @ts-ignore
        attachEvent("onunload", unloadHandler);
    }
    else if (typeof addEventListener === "function") {
        const terminationEvent = "onpagehide" in globalThis_js_1.globalThisShim ? "pagehide" : "unload";
        addEventListener(terminationEvent, unloadHandler, false);
    }
}
function unloadHandler() {
    for (let i in Request.requests) {
        if (Request.requests.hasOwnProperty(i)) {
            Request.requests[i].abort();
        }
    }
}


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const commons_js_1 = __webpack_require__(46);
const encodePacket = ({ type, data }, supportsBinary, callback) => {
    if (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) {
        const buffer = toBuffer(data);
        return callback(encodeBuffer(buffer, supportsBinary));
    }
    // plain string
    return callback(commons_js_1.PACKET_TYPES[type] + (data || ""));
};
const toBuffer = data => {
    if (Buffer.isBuffer(data)) {
        return data;
    }
    else if (data instanceof ArrayBuffer) {
        return Buffer.from(data);
    }
    else {
        return Buffer.from(data.buffer, data.byteOffset, data.byteLength);
    }
};
// only 'message' packets can contain binary, so the type prefix is not needed
const encodeBuffer = (data, supportsBinary) => {
    return supportsBinary ? data : "b" + data.toString("base64");
};
exports.default = encodePacket;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const commons_js_1 = __webpack_require__(46);
const decodePacket = (encodedPacket, binaryType) => {
    if (typeof encodedPacket !== "string") {
        return {
            type: "message",
            data: mapBinary(encodedPacket, binaryType)
        };
    }
    const type = encodedPacket.charAt(0);
    if (type === "b") {
        const buffer = Buffer.from(encodedPacket.substring(1), "base64");
        return {
            type: "message",
            data: mapBinary(buffer, binaryType)
        };
    }
    if (!commons_js_1.PACKET_TYPES_REVERSE[type]) {
        return commons_js_1.ERROR_PACKET;
    }
    return encodedPacket.length > 1
        ? {
            type: commons_js_1.PACKET_TYPES_REVERSE[type],
            data: encodedPacket.substring(1)
        }
        : {
            type: commons_js_1.PACKET_TYPES_REVERSE[type]
        };
};
const mapBinary = (data, binaryType) => {
    const isBuffer = Buffer.isBuffer(data);
    switch (binaryType) {
        case "arraybuffer":
            return isBuffer ? toArrayBuffer(data) : data;
        case "nodebuffer":
        default:
            return data; // assuming the data is already a Buffer
    }
};
const toArrayBuffer = (buffer) => {
    const arrayBuffer = new ArrayBuffer(buffer.length);
    const view = new Uint8Array(arrayBuffer);
    for (let i = 0; i < buffer.length; i++) {
        view[i] = buffer[i];
    }
    return arrayBuffer;
};
exports.default = decodePacket;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.XHR = void 0;
const XMLHttpRequestModule = __importStar(__webpack_require__(93));
exports.XHR = XMLHttpRequestModule.default || XMLHttpRequestModule;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("xmlhttprequest-ssl");

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WS = void 0;
const transport_js_1 = __webpack_require__(23);
const parseqs_js_1 = __webpack_require__(24);
const yeast_js_1 = __webpack_require__(48);
const util_js_1 = __webpack_require__(15);
const websocket_constructor_js_1 = __webpack_require__(95);
const debug_1 = __importDefault(__webpack_require__(8)); // debug()
const engine_io_parser_1 = __webpack_require__(20);
const debug = (0, debug_1.default)("engine.io-client:websocket"); // debug()
// detect ReactNative environment
const isReactNative = typeof navigator !== "undefined" &&
    typeof navigator.product === "string" &&
    navigator.product.toLowerCase() === "reactnative";
class WS extends transport_js_1.Transport {
    /**
     * WebSocket transport constructor.
     *
     * @api {Object} connection options
     * @api public
     */
    constructor(opts) {
        super(opts);
        this.supportsBinary = !opts.forceBase64;
    }
    /**
     * Transport name.
     *
     * @api public
     */
    get name() {
        return "websocket";
    }
    /**
     * Opens socket.
     *
     * @api private
     */
    doOpen() {
        if (!this.check()) {
            // let probe timeout
            return;
        }
        const uri = this.uri();
        const protocols = this.opts.protocols;
        // React Native only supports the 'headers' option, and will print a warning if anything else is passed
        const opts = isReactNative
            ? {}
            : (0, util_js_1.pick)(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        if (this.opts.extraHeaders) {
            opts.headers = this.opts.extraHeaders;
        }
        try {
            this.ws =
                websocket_constructor_js_1.usingBrowserWebSocket && !isReactNative
                    ? protocols
                        ? new websocket_constructor_js_1.WebSocket(uri, protocols)
                        : new websocket_constructor_js_1.WebSocket(uri)
                    : new websocket_constructor_js_1.WebSocket(uri, protocols, opts);
        }
        catch (err) {
            return this.emitReserved("error", err);
        }
        this.ws.binaryType = this.socket.binaryType || websocket_constructor_js_1.defaultBinaryType;
        this.addEventListeners();
    }
    /**
     * Adds event listeners to the socket
     *
     * @api private
     */
    addEventListeners() {
        this.ws.onopen = () => {
            if (this.opts.autoUnref) {
                this.ws._socket.unref();
            }
            this.onOpen();
        };
        this.ws.onclose = closeEvent => this.onClose({
            description: "websocket connection closed",
            context: closeEvent
        });
        this.ws.onmessage = ev => this.onData(ev.data);
        this.ws.onerror = e => this.onError("websocket error", e);
    }
    /**
     * Writes data to socket.
     *
     * @param {Array} array of packets.
     * @api private
     */
    write(packets) {
        this.writable = false;
        // encodePacket efficient as it uses WS framing
        // no need for encodePayload
        for (let i = 0; i < packets.length; i++) {
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            (0, engine_io_parser_1.encodePacket)(packet, this.supportsBinary, data => {
                // always create a new object (GH-437)
                const opts = {};
                if (!websocket_constructor_js_1.usingBrowserWebSocket) {
                    if (packet.options) {
                        opts.compress = packet.options.compress;
                    }
                    if (this.opts.perMessageDeflate) {
                        const len = 
                        // @ts-ignore
                        "string" === typeof data ? Buffer.byteLength(data) : data.length;
                        if (len < this.opts.perMessageDeflate.threshold) {
                            opts.compress = false;
                        }
                    }
                }
                // Sometimes the websocket has already been closed but the browser didn't
                // have a chance of informing us about it yet, in that case send will
                // throw an error
                try {
                    if (websocket_constructor_js_1.usingBrowserWebSocket) {
                        // TypeError is thrown when passing the second argument on Safari
                        this.ws.send(data);
                    }
                    else {
                        this.ws.send(data, opts);
                    }
                }
                catch (e) {
                    debug("websocket closed before onclose event");
                }
                if (lastPacket) {
                    // fake drain
                    // defer to next tick to allow Socket to clear writeBuffer
                    (0, websocket_constructor_js_1.nextTick)(() => {
                        this.writable = true;
                        this.emitReserved("drain");
                    }, this.setTimeoutFn);
                }
            });
        }
    }
    /**
     * Closes socket.
     *
     * @api private
     */
    doClose() {
        if (typeof this.ws !== "undefined") {
            this.ws.close();
            this.ws = null;
        }
    }
    /**
     * Generates uri for connection.
     *
     * @api private
     */
    uri() {
        let query = this.query || {};
        const schema = this.opts.secure ? "wss" : "ws";
        let port = "";
        // avoid port if default for schema
        if (this.opts.port &&
            (("wss" === schema && Number(this.opts.port) !== 443) ||
                ("ws" === schema && Number(this.opts.port) !== 80))) {
            port = ":" + this.opts.port;
        }
        // append timestamp to URI
        if (this.opts.timestampRequests) {
            query[this.opts.timestampParam] = (0, yeast_js_1.yeast)();
        }
        // communicate binary support capabilities
        if (!this.supportsBinary) {
            query.b64 = 1;
        }
        const encodedQuery = (0, parseqs_js_1.encode)(query);
        const ipv6 = this.opts.hostname.indexOf(":") !== -1;
        return (schema +
            "://" +
            (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
            port +
            this.opts.path +
            (encodedQuery.length ? "?" + encodedQuery : ""));
    }
    /**
     * Feature detection for WebSocket.
     *
     * @return {Boolean} whether this transport is available.
     * @api public
     */
    check() {
        return !!websocket_constructor_js_1.WebSocket;
    }
}
exports.WS = WS;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextTick = exports.defaultBinaryType = exports.usingBrowserWebSocket = exports.WebSocket = void 0;
const ws_1 = __importDefault(__webpack_require__(96));
exports.WebSocket = ws_1.default;
exports.usingBrowserWebSocket = false;
exports.defaultBinaryType = "nodebuffer";
exports.nextTick = process.nextTick;


/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("ws");

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const engine_io_client_1 = __webpack_require__(44);
const socket_js_1 = __webpack_require__(50);
const parser = __importStar(__webpack_require__(25));
const on_js_1 = __webpack_require__(52);
const backo2_js_1 = __webpack_require__(99);
const component_emitter_1 = __webpack_require__(13);
const debug_1 = __importDefault(__webpack_require__(8)); // debug()
const debug = debug_1.default("socket.io-client:manager"); // debug()
class Manager extends component_emitter_1.Emitter {
    constructor(uri, opts) {
        var _a;
        super();
        this.nsps = {};
        this.subs = [];
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = undefined;
        }
        opts = opts || {};
        opts.path = opts.path || "/socket.io";
        this.opts = opts;
        engine_io_client_1.installTimerFunctions(this, opts);
        this.reconnection(opts.reconnection !== false);
        this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
        this.reconnectionDelay(opts.reconnectionDelay || 1000);
        this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
        this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
        this.backoff = new backo2_js_1.Backoff({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor(),
        });
        this.timeout(null == opts.timeout ? 20000 : opts.timeout);
        this._readyState = "closed";
        this.uri = uri;
        const _parser = opts.parser || parser;
        this.encoder = new _parser.Encoder();
        this.decoder = new _parser.Decoder();
        this._autoConnect = opts.autoConnect !== false;
        if (this._autoConnect)
            this.open();
    }
    reconnection(v) {
        if (!arguments.length)
            return this._reconnection;
        this._reconnection = !!v;
        return this;
    }
    reconnectionAttempts(v) {
        if (v === undefined)
            return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
    }
    reconnectionDelay(v) {
        var _a;
        if (v === undefined)
            return this._reconnectionDelay;
        this._reconnectionDelay = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
        return this;
    }
    randomizationFactor(v) {
        var _a;
        if (v === undefined)
            return this._randomizationFactor;
        this._randomizationFactor = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
        return this;
    }
    reconnectionDelayMax(v) {
        var _a;
        if (v === undefined)
            return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
        return this;
    }
    timeout(v) {
        if (!arguments.length)
            return this._timeout;
        this._timeout = v;
        return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */
    maybeReconnectOnOpen() {
        // Only try to reconnect if it's the first time we're connecting
        if (!this._reconnecting &&
            this._reconnection &&
            this.backoff.attempts === 0) {
            // keeps reconnection from firing twice for the same reconnection loop
            this.reconnect();
        }
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */
    open(fn) {
        debug("readyState %s", this._readyState);
        if (~this._readyState.indexOf("open"))
            return this;
        debug("opening %s", this.uri);
        this.engine = new engine_io_client_1.Socket(this.uri, this.opts);
        const socket = this.engine;
        const self = this;
        this._readyState = "opening";
        this.skipReconnect = false;
        // emit `open`
        const openSubDestroy = on_js_1.on(socket, "open", function () {
            self.onopen();
            fn && fn();
        });
        // emit `error`
        const errorSub = on_js_1.on(socket, "error", (err) => {
            debug("error");
            self.cleanup();
            self._readyState = "closed";
            this.emitReserved("error", err);
            if (fn) {
                fn(err);
            }
            else {
                // Only do this if there is no fn to handle the error
                self.maybeReconnectOnOpen();
            }
        });
        if (false !== this._timeout) {
            const timeout = this._timeout;
            debug("connect attempt will timeout after %d", timeout);
            if (timeout === 0) {
                openSubDestroy(); // prevents a race condition with the 'open' event
            }
            // set timer
            const timer = this.setTimeoutFn(() => {
                debug("connect attempt timed out after %d", timeout);
                openSubDestroy();
                socket.close();
                // @ts-ignore
                socket.emit("error", new Error("timeout"));
            }, timeout);
            if (this.opts.autoUnref) {
                timer.unref();
            }
            this.subs.push(function subDestroy() {
                clearTimeout(timer);
            });
        }
        this.subs.push(openSubDestroy);
        this.subs.push(errorSub);
        return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */
    connect(fn) {
        return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */
    onopen() {
        debug("open");
        // clear old subs
        this.cleanup();
        // mark as open
        this._readyState = "open";
        this.emitReserved("open");
        // add new subs
        const socket = this.engine;
        this.subs.push(on_js_1.on(socket, "ping", this.onping.bind(this)), on_js_1.on(socket, "data", this.ondata.bind(this)), on_js_1.on(socket, "error", this.onerror.bind(this)), on_js_1.on(socket, "close", this.onclose.bind(this)), on_js_1.on(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */
    onping() {
        this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */
    ondata(data) {
        this.decoder.add(data);
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */
    ondecoded(packet) {
        this.emitReserved("packet", packet);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */
    onerror(err) {
        debug("error", err);
        this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */
    socket(nsp, opts) {
        let socket = this.nsps[nsp];
        if (!socket) {
            socket = new socket_js_1.Socket(this, nsp, opts);
            this.nsps[nsp] = socket;
        }
        return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */
    _destroy(socket) {
        const nsps = Object.keys(this.nsps);
        for (const nsp of nsps) {
            const socket = this.nsps[nsp];
            if (socket.active) {
                debug("socket %s is still active, skipping close", nsp);
                return;
            }
        }
        this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */
    _packet(packet) {
        debug("writing packet %j", packet);
        const encodedPackets = this.encoder.encode(packet);
        for (let i = 0; i < encodedPackets.length; i++) {
            this.engine.write(encodedPackets[i], packet.options);
        }
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */
    cleanup() {
        debug("cleanup");
        this.subs.forEach((subDestroy) => subDestroy());
        this.subs.length = 0;
        this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */
    _close() {
        debug("disconnect");
        this.skipReconnect = true;
        this._reconnecting = false;
        this.onclose("forced close");
        if (this.engine)
            this.engine.close();
    }
    /**
     * Alias for close()
     *
     * @private
     */
    disconnect() {
        return this._close();
    }
    /**
     * Called upon engine close.
     *
     * @private
     */
    onclose(reason, description) {
        debug("closed due to %s", reason);
        this.cleanup();
        this.backoff.reset();
        this._readyState = "closed";
        this.emitReserved("close", reason, description);
        if (this._reconnection && !this.skipReconnect) {
            this.reconnect();
        }
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */
    reconnect() {
        if (this._reconnecting || this.skipReconnect)
            return this;
        const self = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
            debug("reconnect failed");
            this.backoff.reset();
            this.emitReserved("reconnect_failed");
            this._reconnecting = false;
        }
        else {
            const delay = this.backoff.duration();
            debug("will wait %dms before reconnect attempt", delay);
            this._reconnecting = true;
            const timer = this.setTimeoutFn(() => {
                if (self.skipReconnect)
                    return;
                debug("attempting reconnect");
                this.emitReserved("reconnect_attempt", self.backoff.attempts);
                // check again for the case socket closed in above events
                if (self.skipReconnect)
                    return;
                self.open((err) => {
                    if (err) {
                        debug("reconnect attempt error");
                        self._reconnecting = false;
                        self.reconnect();
                        this.emitReserved("reconnect_error", err);
                    }
                    else {
                        debug("reconnect success");
                        self.onreconnect();
                    }
                });
            }, delay);
            if (this.opts.autoUnref) {
                timer.unref();
            }
            this.subs.push(function subDestroy() {
                clearTimeout(timer);
            });
        }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */
    onreconnect() {
        const attempt = this.backoff.attempts;
        this._reconnecting = false;
        this.backoff.reset();
        this.emitReserved("reconnect", attempt);
    }
}
exports.Manager = Manager;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.reconstructPacket = exports.deconstructPacket = void 0;
const is_binary_js_1 = __webpack_require__(51);
/**
 * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @public
 */
function deconstructPacket(packet) {
    const buffers = [];
    const packetData = packet.data;
    const pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length; // number of binary 'attachments'
    return { packet: pack, buffers: buffers };
}
exports.deconstructPacket = deconstructPacket;
function _deconstructPacket(data, buffers) {
    if (!data)
        return data;
    if (is_binary_js_1.isBinary(data)) {
        const placeholder = { _placeholder: true, num: buffers.length };
        buffers.push(data);
        return placeholder;
    }
    else if (Array.isArray(data)) {
        const newData = new Array(data.length);
        for (let i = 0; i < data.length; i++) {
            newData[i] = _deconstructPacket(data[i], buffers);
        }
        return newData;
    }
    else if (typeof data === "object" && !(data instanceof Date)) {
        const newData = {};
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                newData[key] = _deconstructPacket(data[key], buffers);
            }
        }
        return newData;
    }
    return data;
}
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @public
 */
function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    packet.attachments = undefined; // no longer useful
    return packet;
}
exports.reconstructPacket = reconstructPacket;
function _reconstructPacket(data, buffers) {
    if (!data)
        return data;
    if (data && data._placeholder === true) {
        const isIndexValid = typeof data.num === "number" &&
            data.num >= 0 &&
            data.num < buffers.length;
        if (isIndexValid) {
            return buffers[data.num]; // appropriate buffer (should be natural order anyway)
        }
        else {
            throw new Error("illegal attachments");
        }
    }
    else if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            data[i] = _reconstructPacket(data[i], buffers);
        }
    }
    else if (typeof data === "object") {
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                data[key] = _reconstructPacket(data[key], buffers);
            }
        }
    }
    return data;
}


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Backoff = void 0;
function Backoff(opts) {
    opts = opts || {};
    this.ms = opts.min || 100;
    this.max = opts.max || 10000;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
}
exports.Backoff = Backoff;
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */
Backoff.prototype.duration = function () {
    var ms = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var rand = Math.random();
        var deviation = Math.floor(rand * this.jitter * ms);
        ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
    }
    return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */
Backoff.prototype.reset = function () {
    this.attempts = 0;
};
/**
 * Set the minimum duration
 *
 * @api public
 */
Backoff.prototype.setMin = function (min) {
    this.ms = min;
};
/**
 * Set the maximum duration
 *
 * @api public
 */
Backoff.prototype.setMax = function (max) {
    this.max = max;
};
/**
 * Set the jitter
 *
 * @api public
 */
Backoff.prototype.setJitter = function (jitter) {
    this.jitter = jitter;
};


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "IoSocketStatus", function() { return IoSocketStatus; });
__webpack_require__.d(components_namespaceObject, "BarChartHorizontal", function() { return BarChartHorizontal; });
__webpack_require__.d(components_namespaceObject, "Button", function() { return Button; });
__webpack_require__.d(components_namespaceObject, "ButtonTraining", function() { return ButtonTraining; });
__webpack_require__.d(components_namespaceObject, "DialogTraining", function() { return DialogTraining; });
__webpack_require__.d(components_namespaceObject, "Header", function() { return Header; });
__webpack_require__.d(components_namespaceObject, "Logo", function() { return Logo; });
__webpack_require__.d(components_namespaceObject, "Model", function() { return Model; });
__webpack_require__.d(components_namespaceObject, "Notification", function() { return Notification; });
__webpack_require__.d(components_namespaceObject, "Pie", function() { return Pie; });
__webpack_require__.d(components_namespaceObject, "SingleLineChart", function() { return SingleLineChart; });
__webpack_require__.d(components_namespaceObject, "SingleLineChartPerformance", function() { return SingleLineChartPerformance; });
__webpack_require__.d(components_namespaceObject, "Status", function() { return Status; });
__webpack_require__.d(components_namespaceObject, "Summary", function() { return Summary; });
__webpack_require__.d(components_namespaceObject, "VuetifyLogo", function() { return VuetifyLogo; });
__webpack_require__.d(components_namespaceObject, "LoginForm", function() { return LoginForm; });
__webpack_require__.d(components_namespaceObject, "RegisterForm2", function() { return RegisterForm2; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(4);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(53);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.req) {
      app.context.req = context.req;
    }

    if (context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(54);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(26);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(21);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(27);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _721bb414 = () => interopDefault(__webpack_require__.e(/* import() | pages/inspire */ 19).then(__webpack_require__.bind(null, 327)));

const _1728d1a3 = () => interopDefault(__webpack_require__.e(/* import() | pages/login */ 20).then(__webpack_require__.bind(null, 323)));

const _3d2bb7a2 = () => interopDefault(__webpack_require__.e(/* import() | pages/overview */ 21).then(__webpack_require__.bind(null, 324)));

const _55167f4e = () => interopDefault(__webpack_require__.e(/* import() | pages/register */ 22).then(__webpack_require__.bind(null, 325)));

const _4d812e8c = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 18).then(__webpack_require__.bind(null, 326)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/inspire",
    component: _721bb414,
    name: "inspire"
  }, {
    path: "/login",
    component: _1728d1a3,
    name: "login"
  }, {
    path: "/overview",
    component: _3d2bb7a2,
    name: "overview"
  }, {
    path: "/register",
    component: _55167f4e,
    name: "register"
  }, {
    path: "/",
    component: _4d812e8c,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VApp/VApp.sass
var VApp = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VApp/VApp.js
// Styles
 // Mixins

 // Utilities


/* @vue/component */

/* harmony default export */ var VApp_VApp = (Object(mixins["a" /* default */])(themeable["a" /* default */]).extend({
  name: 'v-app',
  props: {
    dark: {
      type: Boolean,
      default: undefined
    },
    id: {
      type: String,
      default: 'app'
    },
    light: {
      type: Boolean,
      default: undefined
    }
  },
  computed: {
    isDark() {
      return this.$vuetify.theme.dark;
    }

  },

  beforeCreate() {
    if (!this.$vuetify || this.$vuetify === this.$root) {
      throw new Error('Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object');
    }
  },

  render(h) {
    const wrapper = h('div', {
      staticClass: 'v-application--wrap'
    }, this.$slots.default);
    return h('div', {
      staticClass: 'v-application',
      class: {
        'v-application--is-rtl': this.$vuetify.rtl,
        'v-application--is-ltr': !this.$vuetify.rtl,
        ...this.themeClasses
      },
      attrs: {
        'data-app': true
      },
      domProps: {
        id: this.id
      }
    }, [wrapper]);
  }

}));
// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=template&id=bfedb7fe&scoped=true&


var errorvue_type_template_id_bfedb7fe_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c(VApp_VApp, {
    attrs: {
      "dark": ""
    }
  }, [_vm.error.statusCode === 404 ? _c('h1', [_vm._v("\n      " + _vm._s(_vm.pageNotFound) + "\n    ")]) : _c('h1', [_vm._v("\n      " + _vm._s(_vm.otherError) + "\n    ")]), _vm._v(" "), _c('NuxtLink', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("\n      Home page\n    ")])], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/error.vue?vue&type=template&id=bfedb7fe&scoped=true&

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=script&lang=js&
/* harmony default export */ var errorvue_type_script_lang_js_ = ({
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    };
  },

  head() {
    const title = this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  }

});
// CONCATENATED MODULE: ./layouts/error.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_errorvue_type_script_lang_js_ = (errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./layouts/error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(63)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_js_,
  errorvue_type_template_id_bfedb7fe_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "bfedb7fe",
  "26fe9382"
  
)

/* harmony default export */ var layouts_error = (error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: layouts_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(layouts_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(65)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "2bcb075a"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VAppBar/VAppBar.sass
var VAppBar = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VToolbar/VToolbar.sass
var VToolbar = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VImg/VImg.sass
var VImg = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/intersect/index.js
var intersect = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VResponsive/VResponsive.sass
var VResponsive = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/measurable/index.js
var measurable = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VResponsive/VResponsive.js
 // Mixins

 // Utils



/* @vue/component */

/* harmony default export */ var VResponsive_VResponsive = (Object(mixins["a" /* default */])(measurable["a" /* default */]).extend({
  name: 'v-responsive',
  props: {
    aspectRatio: [String, Number],
    contentClass: String
  },
  computed: {
    computedAspectRatio() {
      return Number(this.aspectRatio);
    },

    aspectStyle() {
      return this.computedAspectRatio ? {
        paddingBottom: 1 / this.computedAspectRatio * 100 + '%'
      } : undefined;
    },

    __cachedSizer() {
      if (!this.aspectStyle) return [];
      return this.$createElement('div', {
        style: this.aspectStyle,
        staticClass: 'v-responsive__sizer'
      });
    }

  },
  methods: {
    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-responsive__content',
        class: this.contentClass
      }, Object(helpers["s" /* getSlot */])(this));
    }

  },

  render(h) {
    return h('div', {
      staticClass: 'v-responsive',
      style: this.measurableStyles,
      on: this.$listeners
    }, [this.__cachedSizer, this.genContent()]);
  }

}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VResponsive/index.js


/* harmony default export */ var components_VResponsive = (VResponsive_VResponsive);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mergeData.js
var mergeData = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var util_console = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js
// Styles
 // Directives

 // Components

 // Mixins

 // Utils





const hasIntersect = typeof window !== 'undefined' && 'IntersectionObserver' in window;
/* @vue/component */

/* harmony default export */ var VImg_VImg = (Object(mixins["a" /* default */])(components_VResponsive, themeable["a" /* default */]).extend({
  name: 'v-img',
  directives: {
    intersect: intersect["a" /* default */]
  },
  props: {
    alt: String,
    contain: Boolean,
    eager: Boolean,
    gradient: String,
    lazySrc: String,
    options: {
      type: Object,
      // For more information on types, navigate to:
      // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      default: () => ({
        root: undefined,
        rootMargin: undefined,
        threshold: undefined
      })
    },
    position: {
      type: String,
      default: 'center center'
    },
    sizes: String,
    src: {
      type: [String, Object],
      default: ''
    },
    srcset: String,
    transition: {
      type: [Boolean, String],
      default: 'fade-transition'
    }
  },

  data() {
    return {
      currentSrc: '',
      image: null,
      isLoading: true,
      calculatedAspectRatio: undefined,
      naturalWidth: undefined,
      hasError: false
    };
  },

  computed: {
    computedAspectRatio() {
      return Number(this.normalisedSrc.aspect || this.calculatedAspectRatio);
    },

    normalisedSrc() {
      return this.src && typeof this.src === 'object' ? {
        src: this.src.src,
        srcset: this.srcset || this.src.srcset,
        lazySrc: this.lazySrc || this.src.lazySrc,
        aspect: Number(this.aspectRatio || this.src.aspect)
      } : {
        src: this.src,
        srcset: this.srcset,
        lazySrc: this.lazySrc,
        aspect: Number(this.aspectRatio || 0)
      };
    },

    __cachedImage() {
      if (!(this.normalisedSrc.src || this.normalisedSrc.lazySrc || this.gradient)) return [];
      const backgroundImage = [];
      const src = this.isLoading ? this.normalisedSrc.lazySrc : this.currentSrc;
      if (this.gradient) backgroundImage.push(`linear-gradient(${this.gradient})`);
      if (src) backgroundImage.push(`url("${src}")`);
      const image = this.$createElement('div', {
        staticClass: 'v-image__image',
        class: {
          'v-image__image--preload': this.isLoading,
          'v-image__image--contain': this.contain,
          'v-image__image--cover': !this.contain
        },
        style: {
          backgroundImage: backgroundImage.join(', '),
          backgroundPosition: this.position
        },
        key: +this.isLoading
      });
      /* istanbul ignore if */

      if (!this.transition) return image;
      return this.$createElement('transition', {
        attrs: {
          name: this.transition,
          mode: 'in-out'
        }
      }, [image]);
    }

  },
  watch: {
    src() {
      // Force re-init when src changes
      if (!this.isLoading) this.init(undefined, undefined, true);else this.loadImage();
    },

    '$vuetify.breakpoint.width': 'getSrc'
  },

  mounted() {
    this.init();
  },

  methods: {
    init(entries, observer, isIntersecting) {
      // If the current browser supports the intersection
      // observer api, the image is not observable, and
      // the eager prop isn't being used, do not load
      if (hasIntersect && !isIntersecting && !this.eager) return;

      if (this.normalisedSrc.lazySrc) {
        const lazyImg = new Image();
        lazyImg.src = this.normalisedSrc.lazySrc;
        this.pollForSize(lazyImg, null);
      }
      /* istanbul ignore else */


      if (this.normalisedSrc.src) this.loadImage();
    },

    onLoad() {
      this.getSrc();
      this.isLoading = false;
      this.$emit('load', this.src);

      if (this.image && (this.normalisedSrc.src.endsWith('.svg') || this.normalisedSrc.src.startsWith('data:image/svg+xml'))) {
        if (this.image.naturalHeight && this.image.naturalWidth) {
          this.naturalWidth = this.image.naturalWidth;
          this.calculatedAspectRatio = this.image.naturalWidth / this.image.naturalHeight;
        } else {
          this.calculatedAspectRatio = 1;
        }
      }
    },

    onError() {
      this.hasError = true;
      this.$emit('error', this.src);
    },

    getSrc() {
      /* istanbul ignore else */
      if (this.image) this.currentSrc = this.image.currentSrc || this.image.src;
    },

    loadImage() {
      const image = new Image();
      this.image = image;

      image.onload = () => {
        /* istanbul ignore if */
        if (image.decode) {
          image.decode().catch(err => {
            Object(util_console["c" /* consoleWarn */])(`Failed to decode image, trying to render anyway\n\n` + `src: ${this.normalisedSrc.src}` + (err.message ? `\nOriginal error: ${err.message}` : ''), this);
          }).then(this.onLoad);
        } else {
          this.onLoad();
        }
      };

      image.onerror = this.onError;
      this.hasError = false;
      this.sizes && (image.sizes = this.sizes);
      this.normalisedSrc.srcset && (image.srcset = this.normalisedSrc.srcset);
      image.src = this.normalisedSrc.src;
      this.$emit('loadstart', this.normalisedSrc.src);
      this.aspectRatio || this.pollForSize(image);
      this.getSrc();
    },

    pollForSize(img, timeout = 100) {
      const poll = () => {
        const {
          naturalHeight,
          naturalWidth
        } = img;

        if (naturalHeight || naturalWidth) {
          this.naturalWidth = naturalWidth;
          this.calculatedAspectRatio = naturalWidth / naturalHeight;
        } else if (!img.complete && this.isLoading && !this.hasError && timeout != null) {
          setTimeout(poll, timeout);
        }
      };

      poll();
    },

    genContent() {
      const content = components_VResponsive.options.methods.genContent.call(this);

      if (this.naturalWidth) {
        this._b(content.data, 'div', {
          style: {
            width: `${this.naturalWidth}px`
          }
        });
      }

      return content;
    },

    __genPlaceholder() {
      const slot = Object(helpers["s" /* getSlot */])(this, 'placeholder');

      if (slot) {
        const placeholder = this.isLoading ? [this.$createElement('div', {
          staticClass: 'v-image__placeholder'
        }, slot)] : [];
        if (!this.transition) return placeholder[0];
        return this.$createElement('transition', {
          props: {
            appear: true,
            name: this.transition
          }
        }, placeholder);
      }
    }

  },

  render(h) {
    const node = components_VResponsive.options.render.call(this, h);
    const data = Object(mergeData["a" /* default */])(node.data, {
      staticClass: 'v-image',
      attrs: {
        'aria-label': this.alt,
        role: this.alt ? 'img' : undefined
      },
      class: this.themeClasses,
      // Only load intersect directive if it
      // will work in the current browser.
      directives: hasIntersect ? [{
        name: 'intersect',
        modifiers: {
          once: true
        },
        value: {
          handler: this.init,
          options: this.options
        }
      }] : undefined
    });
    node.children = [this.__cachedSizer, this.__cachedImage, this.__genPlaceholder(), this.genContent()];
    return h(node.tag, data, node.children);
  }

}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
// Styles
 // Extensions

 // Components

 // Utilities



/* @vue/component */

/* harmony default export */ var VToolbar_VToolbar = (VSheet["a" /* default */].extend({
  name: 'v-toolbar',
  props: {
    absolute: Boolean,
    bottom: Boolean,
    collapse: Boolean,
    dense: Boolean,
    extended: Boolean,
    extensionHeight: {
      default: 48,
      type: [Number, String]
    },
    flat: Boolean,
    floating: Boolean,
    prominent: Boolean,
    short: Boolean,
    src: {
      type: [String, Object],
      default: ''
    },
    tag: {
      type: String,
      default: 'header'
    }
  },
  data: () => ({
    isExtended: false
  }),
  computed: {
    computedHeight() {
      const height = this.computedContentHeight;
      if (!this.isExtended) return height;
      const extensionHeight = parseInt(this.extensionHeight);
      return this.isCollapsed ? height : height + (!isNaN(extensionHeight) ? extensionHeight : 0);
    },

    computedContentHeight() {
      if (this.height) return parseInt(this.height);
      if (this.isProminent && this.dense) return 96;
      if (this.isProminent && this.short) return 112;
      if (this.isProminent) return 128;
      if (this.dense) return 48;
      if (this.short || this.$vuetify.breakpoint.smAndDown) return 56;
      return 64;
    },

    classes() {
      return { ...VSheet["a" /* default */].options.computed.classes.call(this),
        'v-toolbar': true,
        'v-toolbar--absolute': this.absolute,
        'v-toolbar--bottom': this.bottom,
        'v-toolbar--collapse': this.collapse,
        'v-toolbar--collapsed': this.isCollapsed,
        'v-toolbar--dense': this.dense,
        'v-toolbar--extended': this.isExtended,
        'v-toolbar--flat': this.flat,
        'v-toolbar--floating': this.floating,
        'v-toolbar--prominent': this.isProminent
      };
    },

    isCollapsed() {
      return this.collapse;
    },

    isProminent() {
      return this.prominent;
    },

    styles() {
      return { ...this.measurableStyles,
        height: Object(helpers["h" /* convertToUnit */])(this.computedHeight)
      };
    }

  },

  created() {
    const breakingProps = [['app', '<v-app-bar app>'], ['manual-scroll', '<v-app-bar :value="false">'], ['clipped-left', '<v-app-bar clipped-left>'], ['clipped-right', '<v-app-bar clipped-right>'], ['inverted-scroll', '<v-app-bar inverted-scroll>'], ['scroll-off-screen', '<v-app-bar scroll-off-screen>'], ['scroll-target', '<v-app-bar scroll-target>'], ['scroll-threshold', '<v-app-bar scroll-threshold>'], ['card', '<v-app-bar flat>']];
    /* istanbul ignore next */

    breakingProps.forEach(([original, replacement]) => {
      if (this.$attrs.hasOwnProperty(original)) Object(util_console["a" /* breaking */])(original, replacement, this);
    });
  },

  methods: {
    genBackground() {
      const props = {
        height: Object(helpers["h" /* convertToUnit */])(this.computedHeight),
        src: this.src
      };
      const image = this.$scopedSlots.img ? this.$scopedSlots.img({
        props
      }) : this.$createElement(VImg_VImg, {
        props
      });
      return this.$createElement('div', {
        staticClass: 'v-toolbar__image'
      }, [image]);
    },

    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-toolbar__content',
        style: {
          height: Object(helpers["h" /* convertToUnit */])(this.computedContentHeight)
        }
      }, Object(helpers["s" /* getSlot */])(this));
    },

    genExtension() {
      return this.$createElement('div', {
        staticClass: 'v-toolbar__extension',
        style: {
          height: Object(helpers["h" /* convertToUnit */])(this.extensionHeight)
        }
      }, Object(helpers["s" /* getSlot */])(this, 'extension'));
    }

  },

  render(h) {
    this.isExtended = this.extended || !!this.$scopedSlots.extension;
    const children = [this.genContent()];
    const data = this.setBackgroundColor(this.color, {
      class: this.classes,
      style: this.styles,
      on: this.$listeners
    });
    if (this.isExtended) children.push(this.genExtension());
    if (this.src || this.$scopedSlots.img) children.unshift(this.genBackground());
    return h(this.tag, data, children);
  }

}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/directives/scroll/index.js
function inserted(el, binding, vnode) {
  const {
    self = false
  } = binding.modifiers || {};
  const value = binding.value;
  const options = typeof value === 'object' && value.options || {
    passive: true
  };
  const handler = typeof value === 'function' || 'handleEvent' in value ? value : value.handler;
  const target = self ? el : binding.arg ? document.querySelector(binding.arg) : window;
  if (!target) return;
  target.addEventListener('scroll', handler, options);
  el._onScroll = Object(el._onScroll);
  el._onScroll[vnode.context._uid] = {
    handler,
    options,
    // Don't reference self
    target: self ? undefined : target
  };
}

function unbind(el, binding, vnode) {
  var _el$_onScroll;

  if (!((_el$_onScroll = el._onScroll) != null && _el$_onScroll[vnode.context._uid])) return;
  const {
    handler,
    options,
    target = el
  } = el._onScroll[vnode.context._uid];
  target.removeEventListener('scroll', handler, options);
  delete el._onScroll[vnode.context._uid];
}

const Scroll = {
  inserted,
  unbind
};
/* harmony default export */ var directives_scroll = (Scroll);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/positionable/index.js
var positionable = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/applicationable/index.js
 // Util


function applicationable(value, events = []) {
  /* @vue/component */
  return Object(mixins["a" /* default */])(Object(positionable["b" /* factory */])(['absolute', 'fixed'])).extend({
    name: 'applicationable',
    props: {
      app: Boolean
    },
    computed: {
      applicationProperty() {
        return value;
      }

    },
    watch: {
      // If previous value was app
      // reset the provided prop
      app(x, prev) {
        prev ? this.removeApplication(true) : this.callUpdate();
      },

      applicationProperty(newVal, oldVal) {
        this.$vuetify.application.unregister(this._uid, oldVal);
      }

    },

    activated() {
      this.callUpdate();
    },

    created() {
      for (let i = 0, length = events.length; i < length; i++) {
        this.$watch(events[i], this.callUpdate);
      }

      this.callUpdate();
    },

    mounted() {
      this.callUpdate();
    },

    deactivated() {
      this.removeApplication();
    },

    destroyed() {
      this.removeApplication();
    },

    methods: {
      callUpdate() {
        if (!this.app) return;
        this.$vuetify.application.register(this._uid, this.applicationProperty, this.updateApplication());
      },

      removeApplication(force = false) {
        if (!force && !this.app) return;
        this.$vuetify.application.unregister(this._uid, this.applicationProperty);
      },

      updateApplication: () => 0
    }
  });
}
// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/scrollable/index.js
// Directives
 // Utilities

 // Types


/**
 * Scrollable
 *
 * Used for monitoring scrolling and
 * invoking functions based upon
 * scrolling thresholds being
 * met.
 */

/* @vue/component */

/* harmony default export */ var scrollable = (external_vue_default.a.extend({
  name: 'scrollable',
  directives: {
    Scroll: Scroll
  },
  props: {
    scrollTarget: String,
    scrollThreshold: [String, Number]
  },
  data: () => ({
    currentScroll: 0,
    currentThreshold: 0,
    isActive: false,
    isScrollingUp: false,
    previousScroll: 0,
    savedScroll: 0,
    target: null
  }),
  computed: {
    /**
     * A computed property that returns
     * whether scrolling features are
     * enabled or disabled
     */
    canScroll() {
      return typeof window !== 'undefined';
    },

    /**
     * The threshold that must be met before
     * thresholdMet function is invoked
     */
    computedScrollThreshold() {
      return this.scrollThreshold ? Number(this.scrollThreshold) : 300;
    }

  },
  watch: {
    isScrollingUp() {
      this.savedScroll = this.savedScroll || this.currentScroll;
    },

    isActive() {
      this.savedScroll = 0;
    }

  },

  mounted() {
    if (this.scrollTarget) {
      this.target = document.querySelector(this.scrollTarget);

      if (!this.target) {
        Object(util_console["c" /* consoleWarn */])(`Unable to locate element with identifier ${this.scrollTarget}`, this);
      }
    }
  },

  methods: {
    onScroll() {
      if (!this.canScroll) return;
      this.previousScroll = this.currentScroll;
      this.currentScroll = this.target ? this.target.scrollTop : window.pageYOffset;
      this.isScrollingUp = this.currentScroll < this.previousScroll;
      this.currentThreshold = Math.abs(this.currentScroll - this.computedScrollThreshold);
      this.$nextTick(() => {
        if (Math.abs(this.currentScroll - this.savedScroll) > this.computedScrollThreshold) this.thresholdMet();
      });
    },

    /**
     * The method invoked when
     * scrolling in any direction
     * has exceeded the threshold
     */
    thresholdMet() {}

  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/ssr-bootable/index.js

/**
 * SSRBootable
 *
 * @mixin
 *
 * Used in layout components (drawer, toolbar, content)
 * to avoid an entry animation when using SSR
 */

/* harmony default export */ var ssr_bootable = (external_vue_default.a.extend({
  name: 'ssr-bootable',
  data: () => ({
    isBooted: false
  }),

  mounted() {
    // Use setAttribute instead of dataset
    // because dataset does not work well
    // with unit tests
    window.requestAnimationFrame(() => {
      this.$el.setAttribute('data-booted', 'true');
      this.isBooted = true;
    });
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/toggleable/index.js
var toggleable = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VAppBar/VAppBar.js
// Styles
 // Extensions

 // Directives

 // Mixins




 // Utilities



const baseMixins = Object(mixins["a" /* default */])(VToolbar_VToolbar, scrollable, ssr_bootable, toggleable["a" /* default */], applicationable('top', ['clippedLeft', 'clippedRight', 'computedHeight', 'invertedScroll', 'isExtended', 'isProminent', 'value']));
/* @vue/component */

/* harmony default export */ var VAppBar_VAppBar = (baseMixins.extend({
  name: 'v-app-bar',
  directives: {
    Scroll: directives_scroll
  },

  provide() {
    return {
      VAppBar: this
    };
  },

  props: {
    clippedLeft: Boolean,
    clippedRight: Boolean,
    collapseOnScroll: Boolean,
    elevateOnScroll: Boolean,
    fadeImgOnScroll: Boolean,
    hideOnScroll: Boolean,
    invertedScroll: Boolean,
    scrollOffScreen: Boolean,
    shrinkOnScroll: Boolean,
    value: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      isActive: this.value
    };
  },

  computed: {
    applicationProperty() {
      return !this.bottom ? 'top' : 'bottom';
    },

    canScroll() {
      return scrollable.options.computed.canScroll.call(this) && (this.invertedScroll || this.elevateOnScroll || this.hideOnScroll || this.collapseOnScroll || this.isBooted || // If falsy, user has provided an
      // explicit value which should
      // overwrite anything we do
      !this.value);
    },

    classes() {
      return { ...VToolbar_VToolbar.options.computed.classes.call(this),
        'v-toolbar--collapse': this.collapse || this.collapseOnScroll,
        'v-app-bar': true,
        'v-app-bar--clipped': this.clippedLeft || this.clippedRight,
        'v-app-bar--fade-img-on-scroll': this.fadeImgOnScroll,
        'v-app-bar--elevate-on-scroll': this.elevateOnScroll,
        'v-app-bar--fixed': !this.absolute && (this.app || this.fixed),
        'v-app-bar--hide-shadow': this.hideShadow,
        'v-app-bar--is-scrolled': this.currentScroll > 0,
        'v-app-bar--shrink-on-scroll': this.shrinkOnScroll
      };
    },

    scrollRatio() {
      const threshold = this.computedScrollThreshold;
      return Math.max((threshold - this.currentScroll) / threshold, 0);
    },

    computedContentHeight() {
      if (!this.shrinkOnScroll) return VToolbar_VToolbar.options.computed.computedContentHeight.call(this);
      const min = this.dense ? 48 : 56;
      const max = this.computedOriginalHeight;
      return min + (max - min) * this.scrollRatio;
    },

    computedFontSize() {
      if (!this.isProminent) return undefined;
      const min = 1.25;
      const max = 1.5;
      return min + (max - min) * this.scrollRatio;
    },

    computedLeft() {
      if (!this.app || this.clippedLeft) return 0;
      return this.$vuetify.application.left;
    },

    computedMarginTop() {
      if (!this.app) return 0;
      return this.$vuetify.application.bar;
    },

    computedOpacity() {
      if (!this.fadeImgOnScroll) return undefined;
      return this.scrollRatio;
    },

    computedOriginalHeight() {
      let height = VToolbar_VToolbar.options.computed.computedContentHeight.call(this);
      if (this.isExtended) height += parseInt(this.extensionHeight);
      return height;
    },

    computedRight() {
      if (!this.app || this.clippedRight) return 0;
      return this.$vuetify.application.right;
    },

    computedScrollThreshold() {
      if (this.scrollThreshold) return Number(this.scrollThreshold);
      return this.computedOriginalHeight - (this.dense ? 48 : 56);
    },

    computedTransform() {
      if (!this.canScroll || this.elevateOnScroll && this.currentScroll === 0 && this.isActive) return 0;
      if (this.isActive) return 0;
      const scrollOffScreen = this.scrollOffScreen ? this.computedHeight : this.computedContentHeight;
      return this.bottom ? scrollOffScreen : -scrollOffScreen;
    },

    hideShadow() {
      if (this.elevateOnScroll && this.isExtended) {
        return this.currentScroll < this.computedScrollThreshold;
      }

      if (this.elevateOnScroll) {
        return this.currentScroll === 0 || this.computedTransform < 0;
      }

      return (!this.isExtended || this.scrollOffScreen) && this.computedTransform !== 0;
    },

    isCollapsed() {
      if (!this.collapseOnScroll) {
        return VToolbar_VToolbar.options.computed.isCollapsed.call(this);
      }

      return this.currentScroll > 0;
    },

    isProminent() {
      return VToolbar_VToolbar.options.computed.isProminent.call(this) || this.shrinkOnScroll;
    },

    styles() {
      return { ...VToolbar_VToolbar.options.computed.styles.call(this),
        fontSize: Object(helpers["h" /* convertToUnit */])(this.computedFontSize, 'rem'),
        marginTop: Object(helpers["h" /* convertToUnit */])(this.computedMarginTop),
        transform: `translateY(${Object(helpers["h" /* convertToUnit */])(this.computedTransform)})`,
        left: Object(helpers["h" /* convertToUnit */])(this.computedLeft),
        right: Object(helpers["h" /* convertToUnit */])(this.computedRight)
      };
    }

  },
  watch: {
    canScroll: 'onScroll',

    computedTransform() {
      // Normally we do not want the v-app-bar
      // to update the application top value
      // to avoid screen jump. However, in
      // this situation, we must so that
      // the clipped drawer can update
      // its top value when scrolled
      if (!this.canScroll || !this.clippedLeft && !this.clippedRight) return;
      this.callUpdate();
    },

    invertedScroll(val) {
      this.isActive = !val || this.currentScroll !== 0;
    },

    hideOnScroll(val) {
      this.isActive = !val || this.currentScroll < this.computedScrollThreshold;
    }

  },

  created() {
    if (this.invertedScroll) this.isActive = false;
  },

  methods: {
    genBackground() {
      const render = VToolbar_VToolbar.options.methods.genBackground.call(this);
      render.data = this._b(render.data || {}, render.tag, {
        style: {
          opacity: this.computedOpacity
        }
      });
      return render;
    },

    updateApplication() {
      return this.invertedScroll ? 0 : this.computedHeight + this.computedTransform;
    },

    thresholdMet() {
      if (this.invertedScroll) {
        this.isActive = this.currentScroll > this.computedScrollThreshold;
        return;
      }

      if (this.hideOnScroll) {
        this.isActive = this.isScrollingUp || this.currentScroll < this.computedScrollThreshold;
      }

      if (this.currentThreshold < this.computedScrollThreshold) return;
      this.savedScroll = this.currentScroll;
    }

  },

  render(h) {
    const render = VToolbar_VToolbar.options.render.call(this, h);
    render.data = render.data || {};

    if (this.canScroll) {
      render.data.directives = render.data.directives || [];
      render.data.directives.push({
        arg: this.scrollTarget,
        name: 'scroll',
        value: this.onScroll
      });
    }

    return render;
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VMain/VMain.sass
var VMain = __webpack_require__(81);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VMain/VMain.js
// Styles
 // Mixins


/* @vue/component */

/* harmony default export */ var VMain_VMain = (ssr_bootable.extend({
  name: 'v-main',
  props: {
    tag: {
      type: String,
      default: 'main'
    }
  },
  computed: {
    styles() {
      const {
        bar,
        top,
        right,
        footer,
        insetFooter,
        bottom,
        left
      } = this.$vuetify.application;
      return {
        paddingTop: `${top + bar}px`,
        paddingRight: `${right}px`,
        paddingBottom: `${footer + insetFooter + bottom}px`,
        paddingLeft: `${left}px`
      };
    }

  },

  render(h) {
    const data = {
      staticClass: 'v-main',
      style: this.styles,
      ref: 'main'
    };
    return h(this.tag, data, [h('div', {
      staticClass: 'v-main__wrap'
    }, this.$slots.default)]);
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(142);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
// Components
 // Utilities


const VToolbarTitle = Object(helpers["i" /* createSimpleFunctional */])('v-toolbar__title');
const VToolbarItems = Object(helpers["i" /* createSimpleFunctional */])('v-toolbar__items');

/* harmony default export */ var components_VToolbar = ({
  $_vuetify_subcomponents: {
    VToolbar: VToolbar_VToolbar,
    VToolbarItems,
    VToolbarTitle
  }
});
// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=3b83cbc6&






var defaultvue_type_template_id_3b83cbc6_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c(VApp_VApp, {
    attrs: {
      "dark": ""
    }
  }, [_c(VAppBar_VAppBar, {
    staticClass: "top-header",
    attrs: {
      "clipped-left": _vm.clipped,
      "fixed": "",
      "height": "46px",
      "app": ""
    }
  }, [_c('img', {
    attrs: {
      "src": "syringe.ico",
      "alt": "syringe icon",
      "width": "30px"
    }
  }), _vm._v(" "), _c(VToolbarTitle, {
    staticClass: "title-main",
    domProps: {
      "textContent": _vm._s(_vm.title)
    }
  }), _vm._v(" "), _c(VSpacer["a" /* default */])], 1), _vm._v(" "), _c(VMain_VMain, [_c('nuxt')], 1)], 1);
};

var defaultvue_type_template_id_3b83cbc6_staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=3b83cbc6&

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  data() {
    return {
      clipped: false,
      fixed: false,
      title: "Local Anaesthesia Simulator Kit"
    };
  }

});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue



function default_injectStyles (context) {
  
  var style0 = __webpack_require__(83)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_3b83cbc6_render,
  defaultvue_type_template_id_3b83cbc6_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "6874ba8a"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/login.vue?vue&type=template&id=15819b3e&


var loginvue_type_template_id_15819b3e_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('section', [_c(VMain_VMain, {
    staticClass: "section2"
  }, [_c('nuxt')], 1)], 1);
};

var loginvue_type_template_id_15819b3e_staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/login.vue?vue&type=template&id=15819b3e&

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/login.vue?vue&type=script&lang=js&
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  mounted: function () {
    let elHtml = document.getElementsByTagName("html")[0];
    elHtml.style.overflowY = "hidden";
  }
});
// CONCATENATED MODULE: ./layouts/login.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/login.vue



function login_injectStyles (context) {
  
  var style0 = __webpack_require__(85)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var login_component = Object(componentNormalizer["a" /* default */])(
  layouts_loginvue_type_script_lang_js_,
  loginvue_type_template_id_15819b3e_render,
  loginvue_type_template_id_15819b3e_staticRenderFns,
  false,
  login_injectStyles,
  null,
  "a63fcf3a"
  
)

/* harmony default export */ var layouts_login = (login_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js







const layouts = {
  "_default": sanitizeComponent(layouts_default),
  "_login": sanitizeComponent(layouts_login)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (layouts_error.options || layouts_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(101), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {}; // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}
// CONCATENATED MODULE: ./.nuxt/components/index.js
const IoSocketStatus = () => __webpack_require__.e(/* import() | components/io-socket-status */ 6).then(__webpack_require__.bind(null, 322)).then(c => wrapFunctional(c.default || c));
const BarChartHorizontal = () => __webpack_require__.e(/* import() | components/bar-chart-horizontal */ 1).then(__webpack_require__.bind(null, 299)).then(c => wrapFunctional(c.default || c));
const Button = () => __webpack_require__.e(/* import() | components/button */ 2).then(__webpack_require__.bind(null, 297)).then(c => wrapFunctional(c.default || c));
const ButtonTraining = () => __webpack_require__.e(/* import() | components/button-training */ 3).then(__webpack_require__.bind(null, 300)).then(c => wrapFunctional(c.default || c));
const DialogTraining = () => __webpack_require__.e(/* import() | components/dialog-training */ 4).then(__webpack_require__.bind(null, 291)).then(c => wrapFunctional(c.default || c));
const Header = () => __webpack_require__.e(/* import() | components/header */ 5).then(__webpack_require__.bind(null, 305)).then(c => wrapFunctional(c.default || c));
const Logo = () => __webpack_require__.e(/* import() | components/logo */ 8).then(__webpack_require__.bind(null, 307)).then(c => wrapFunctional(c.default || c));
const Model = () => __webpack_require__.e(/* import() | components/model */ 9).then(__webpack_require__.bind(null, 292)).then(c => wrapFunctional(c.default || c));
const Notification = () => __webpack_require__.e(/* import() | components/notification */ 10).then(__webpack_require__.bind(null, 177)).then(c => wrapFunctional(c.default || c));
const Pie = () => __webpack_require__.e(/* import() | components/pie */ 11).then(__webpack_require__.bind(null, 296)).then(c => wrapFunctional(c.default || c));
const SingleLineChart = () => __webpack_require__.e(/* import() | components/single-line-chart */ 13).then(__webpack_require__.bind(null, 298)).then(c => wrapFunctional(c.default || c));
const SingleLineChartPerformance = () => __webpack_require__.e(/* import() | components/single-line-chart-performance */ 14).then(__webpack_require__.bind(null, 295)).then(c => wrapFunctional(c.default || c));
const Status = () => __webpack_require__.e(/* import() | components/status */ 15).then(__webpack_require__.bind(null, 290)).then(c => wrapFunctional(c.default || c));
const Summary = () => __webpack_require__.e(/* import() | components/summary */ 16).then(__webpack_require__.bind(null, 294)).then(c => wrapFunctional(c.default || c));
const VuetifyLogo = () => __webpack_require__.e(/* import() | components/vuetify-logo */ 17).then(__webpack_require__.bind(null, 308)).then(c => wrapFunctional(c.default || c));
const LoginForm = () => __webpack_require__.e(/* import() | components/login-form */ 7).then(__webpack_require__.bind(null, 293)).then(c => wrapFunctional(c.default || c));
const RegisterForm2 = () => __webpack_require__.e(/* import() | components/register-form2 */ 12).then(__webpack_require__.bind(null, 306)).then(c => wrapFunctional(c.default || c)); // nuxt/nuxt.js#8607

function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js



for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: ./node_modules/vuetify/lib/framework.js + 18 modules
var framework = __webpack_require__(16);

// CONCATENATED MODULE: ./.nuxt/vuetify/options.js
/* harmony default export */ var vuetify_options = ({
  "theme": {
    "dark": true,
    "themes": {
      "dark": {
        "primary": "#1976d2",
        "accent": "#424242",
        "secondary": "#ff8f00",
        "info": "#26a69a",
        "warning": "#ffc107",
        "error": "#dd2c00",
        "success": "#00e676",
        "firstIcon": "#db7e22",
        "secondIcon": "#328f2b",
        "thirdIcon": "#f44336",
        "fourthIcon": "#2b7e8f"
      }
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/vuetify/plugin.js



external_vue_default.a.use(framework["a" /* default */], {});
/* harmony default export */ var vuetify_plugin = (ctx => {
  const vuetifyOptions = typeof vuetify_options === 'function' ? vuetify_options(ctx) : vuetify_options;
  vuetifyOptions.icons = vuetifyOptions.icons || {};
  vuetifyOptions.icons.iconfont = 'mdi';
  const vuetify = new framework["a" /* default */](vuetifyOptions);
  ctx.app.vuetify = vuetify;
  ctx.$vuetify = vuetify.framework;
});
// EXTERNAL MODULE: ./node_modules/socket.io-client/build/cjs/index.js
var cjs = __webpack_require__(28);
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);

// EXTERNAL MODULE: external "debug"
var external_debug_ = __webpack_require__(8);
var external_debug_default = /*#__PURE__*/__webpack_require__.n(external_debug_);

// EXTERNAL MODULE: external "tiny-emitter/instance.js"
var instance_js_ = __webpack_require__(17);
var instance_js_default = /*#__PURE__*/__webpack_require__.n(instance_js_);

// CONCATENATED MODULE: ./.nuxt/nuxt-socket-io.js
/* eslint-disable no-console */

/*
 * Copyright 2021 Richard Schloss (https://github.com/richardeschloss/nuxt-socket-io)
 */



/*
 TODO:
 1) will enable when '@nuxtjs/composition-api' reaches stable version:
 2) will bump from devDep to dep when stable
*/

const debug = external_debug_default()('nuxt-socket-io');

const isRefImpl = any => any && any.constructor.name === 'RefImpl';

const delay = (ms, timerObj) => new Promise((resolve, reject) => {
  timerObj.timer = setTimeout(() => resolve(true), ms);

  timerObj.abort = () => {
    clearTimeout(timerObj.timer);
    reject(new Error('AbortError'));
  };
});

const _sockets = {};
let warn, infoMsgs;

function camelCase(str) {
  return str.replace(/[_\-\s](.)/g, function ($1) {
    return $1.toUpperCase();
  }).replace(/[-_\s]/g, '').replace(/^(.)/, function ($1) {
    return $1.toLowerCase();
  }).replace(/[^\w\s]/gi, '');
}

function propExists(obj, path) {
  // eslint-disable-next-line array-callback-return
  const exists = path.split('.').reduce((out, prop) => {
    if (out !== undefined && out[prop] !== undefined) {
      return out[prop];
    }
  }, obj);
  return exists !== undefined;
}

function parseEntry(entry, entryType) {
  let evt, mapTo, pre, emitEvt, msgLabel, post;

  if (typeof entry === 'string') {
    let subItems = [];
    let body;
    const items = entry.trim().split(/\s*\]\s*/);

    if (items.length > 1) {
      pre = items[0];
      subItems = items[1].split(/\s*\[\s*/);
    } else {
      subItems = items[0].split(/\s*\[\s*/);
    }

    ;
    [body, post] = subItems;

    if (body.includes('-->')) {
      ;
      [evt, mapTo] = body.split(/\s*-->\s*/);
    } else if (body.includes('<--')) {
      ;
      [evt, mapTo] = body.split(/\s*<--\s*/);
    } else {
      evt = body;
    }

    if (entryType === 'emitter') {
      ;
      [emitEvt, msgLabel] = evt.split(/\s*\+\s*/);
    } else if (mapTo === undefined) {
      mapTo = evt;
    }
  }

  return {
    pre,
    post,
    evt,
    mapTo,
    emitEvt,
    msgLabel
  };
}

function assignMsg(ctx, prop) {
  let msg;

  if (prop !== undefined) {
    if (ctx[prop] !== undefined) {
      if (typeof ctx[prop] === 'object') {
        msg = Array.isArray(ctx[prop]) ? [] : {};
        Object.assign(msg, ctx[prop]);
      } else {
        msg = ctx[prop];
      }
    } else {
      warn(`prop or data item "${prop}" not defined`);
    }

    debug(`assigned ${prop} to ${msg}`);
  }

  return msg;
}

function assignResp(ctx, prop, resp) {
  if (prop !== undefined) {
    if (ctx[prop] !== undefined) {
      if (typeof ctx[prop] !== 'function') {
        // In vue3, it's possible to create
        // reactive refs on the fly with ref()
        // so check for that here.
        // (this would elimnate the need for v2's
        // this.$set because we just set the value prop
        // to trigger the UI changes)
        if (isRefImpl(ctx[prop])) {
          ctx[prop].value = resp;
        } else {
          ctx[prop] = resp;
        }

        debug(`assigned ${resp} to ${prop}`);
      }
    } else {
      warn(`${prop} not defined on instance`);
    }
  }
}

async function runHook(ctx, prop, data) {
  if (prop !== undefined) {
    if (ctx[prop]) {
      return await ctx[prop](data);
    } else {
      warn(`method ${prop} not defined`);
    }
  }
}

function propByPath(obj, path) {
  // eslint-disable-next-line array-callback-return
  return path.split(/[/.]/).reduce((out, prop) => {
    if (out !== undefined && out[prop] !== undefined) {
      return out[prop];
    }
  }, obj);
}
/**
 * Validate the provided sockets are an array
 * of at least 1 item
 * @param {Array<*>} sockets
 */


function validateSockets(sockets) {
  return sockets && Array.isArray(sockets) && sockets.length > 0;
}

const register = {
  clientApiEvents({
    ctx,
    store,
    socket,
    api
  }) {
    const {
      evts
    } = api;
    Object.entries(evts).forEach(([emitEvt, schema]) => {
      const {
        data: dataT
      } = schema;
      const fn = emitEvt + 'Emit';

      if (ctx[emitEvt] !== undefined) {
        if (dataT !== undefined) {
          Object.entries(dataT).forEach(([key, val]) => {
            ctx.$set(ctx[emitEvt], key, val);
          });
          debug('Initialized data for', emitEvt, dataT);
        }
      }

      if (ctx[fn] !== undefined) {
        return;
      }

      ctx[fn] = async fnArgs => {
        const {
          label: apiLabel,
          ack,
          ...args
        } = fnArgs || {};
        const label = apiLabel || api.label;
        const msg = Object.keys(args).length > 0 ? args : { ...ctx[emitEvt]
        };
        msg.method = fn;

        if (ack) {
          const ackd = await store.dispatch('$nuxtSocket/emit', {
            label,
            socket,
            evt: emitEvt,
            msg
          });
          return ackd;
        } else {
          store.dispatch('$nuxtSocket/emit', {
            label,
            socket,
            evt: emitEvt,
            msg,
            noAck: true
          });
        }
      };

      debug('Registered clientAPI method', fn);
    });
  },

  clientApiMethods({
    ctx,
    socket,
    api
  }) {
    const {
      methods
    } = api;
    const evts = Object.assign({}, methods, {
      getAPI: {}
    });
    Object.entries(evts).forEach(([evt, schema]) => {
      if (socket.hasListeners(evt)) {
        warn(`evt ${evt} already has a listener registered`);
      }

      socket.on(evt, async (msg, cb) => {
        if (evt === 'getAPI') {
          if (cb) {
            cb(api);
          }
        } else if (ctx[evt] !== undefined) {
          msg.method = evt;
          const resp = await ctx[evt](msg);

          if (cb) {
            cb(resp);
          }
        } else if (cb) {
          // eslint-disable-next-line node/no-callback-literal
          cb({
            emitErr: 'notImplemented',
            msg: `Client has not yet implemented method (${evt})`
          });
        }
      });
      debug(`registered client api method ${evt}`);

      if (evt !== 'getAPI' && ctx[evt] === undefined) {
        warn(`client api method ${evt} has not been defined. ` + 'Either update the client api or define the method so it can be used by callers');
      }
    });
  },

  clientAPI({
    ctx,
    store,
    socket,
    clientAPI
  }) {
    if (clientAPI.methods) {
      register.clientApiMethods({
        ctx,
        socket,
        api: clientAPI
      });
    }

    if (clientAPI.evts) {
      register.clientApiEvents({
        ctx,
        store,
        socket,
        api: clientAPI
      });
    }

    store.commit('$nuxtSocket/SET_CLIENT_API', clientAPI);
    debug('clientAPI registered', clientAPI);
  },

  serverApiEvents({
    ctx,
    socket,
    api,
    label,
    ioDataProp,
    apiIgnoreEvts
  }) {
    const {
      evts
    } = api;
    Object.entries(evts).forEach(([evt, entry]) => {
      const {
        methods = [],
        data: dataT
      } = entry;

      if (apiIgnoreEvts.includes(evt)) {
        debug(`Event ${evt} is in ignore list ("apiIgnoreEvts"), not registering.`);
        return;
      }

      if (socket.hasListeners(evt)) {
        warn(`evt ${evt} already has a listener registered`);
      }

      if (methods.length === 0) {
        let initVal = dataT;

        if (typeof initVal === 'object') {
          initVal = Array.isArray(dataT) ? [] : {};
        }

        ctx.$set(ctx[ioDataProp], evt, initVal);
      } else {
        methods.forEach(method => {
          if (ctx[ioDataProp][method] === undefined) {
            ctx.$set(ctx[ioDataProp], method, {});
          }

          ctx.$set(ctx[ioDataProp][method], evt, Array.isArray(dataT) ? [] : {});
        });
      }

      socket.on(evt, (msg, cb) => {
        debug(`serverAPI event ${evt} rxd with msg`, msg);
        const {
          method,
          data
        } = msg;

        if (method !== undefined) {
          if (ctx[ioDataProp][method] === undefined) {
            ctx.$set(ctx[ioDataProp], method, {});
          }

          ctx.$set(ctx[ioDataProp][method], evt, data);
        } else {
          ctx.$set(ctx[ioDataProp], evt, data);
        }

        if (cb) {
          // eslint-disable-next-line node/no-callback-literal
          cb({
            ack: 'ok'
          });
        }
      });
      debug(`Registered listener for ${evt} on ${label}`);
    });
  },

  serverApiMethods({
    ctx,
    socket,
    store,
    api,
    label,
    ioApiProp,
    ioDataProp
  }) {
    Object.entries(api.methods).forEach(([fn, schema]) => {
      const {
        msg: msgT,
        resp: respT
      } = schema;

      if (ctx[ioDataProp][fn] === undefined) {
        ctx.$set(ctx[ioDataProp], fn, {});

        if (msgT !== undefined) {
          ctx.$set(ctx[ioDataProp][fn], 'msg', { ...msgT
          });
        }

        if (respT !== undefined) {
          ctx.$set(ctx[ioDataProp][fn], 'resp', Array.isArray(respT) ? [] : {});
        }
      }

      ctx[ioApiProp][fn] = async args => {
        const emitEvt = fn;
        const msg = args !== undefined ? args : { ...ctx[ioDataProp][fn].msg
        };
        debug(`${ioApiProp}:${label}: Emitting ${emitEvt} with ${msg}`);
        const resp = await store.dispatch('$nuxtSocket/emit', {
          label,
          socket,
          evt: emitEvt,
          msg
        });
        ctx[ioDataProp][fn].resp = resp;
        return resp;
      };
    });
  },

  async serverAPI({
    ctx,
    socket,
    store,
    label,
    apiIgnoreEvts,
    ioApiProp,
    ioDataProp,
    serverAPI,
    clientAPI = {}
  }) {
    if (ctx[ioApiProp] === undefined) {
      console.error(`[nuxt-socket-io]: ${ioApiProp} needs to be defined in the current context for ` + 'serverAPI registration (vue requirement)');
      return;
    }

    const apiLabel = serverAPI.label || label;
    debug('register api for', apiLabel);
    const api = store.state.$nuxtSocket.ioApis[apiLabel] || {};
    const fetchedApi = await store.dispatch('$nuxtSocket/emit', {
      label: apiLabel,
      socket,
      evt: serverAPI.evt || 'getAPI',
      msg: serverAPI.data || {}
    });
    const isPeer = clientAPI.label === fetchedApi.label && parseFloat(clientAPI.version) === parseFloat(fetchedApi.version);

    if (isPeer) {
      Object.assign(api, clientAPI);
      store.commit('$nuxtSocket/SET_API', {
        label: apiLabel,
        api
      });
      debug(`api for ${apiLabel} registered`, api);
    } else if (parseFloat(api.version) !== parseFloat(fetchedApi.version)) {
      Object.assign(api, fetchedApi);
      store.commit('$nuxtSocket/SET_API', {
        label: apiLabel,
        api
      });
      debug(`api for ${apiLabel} registered`, api);
    }

    ctx.$set(ctx, ioApiProp, api);

    if (api.methods !== undefined) {
      register.serverApiMethods({
        ctx,
        socket,
        store,
        api,
        label,
        ioApiProp,
        ioDataProp
      });
      debug(`Attached methods for ${label} to ${ioApiProp}`, Object.keys(api.methods));
    }

    if (api.evts !== undefined) {
      register.serverApiEvents({
        ctx,
        socket,
        api,
        label,
        ioDataProp,
        apiIgnoreEvts
      });
      debug(`registered evts for ${label} to ${ioApiProp}`);
    }

    ctx.$set(ctx[ioApiProp], 'ready', true);
    debug('ioApi', ctx[ioApiProp]);
  },

  emitErrors({
    ctx,
    err,
    emitEvt,
    emitErrorsProp
  }) {
    if (ctx[emitErrorsProp][emitEvt] === undefined) {
      ctx[emitErrorsProp][emitEvt] = [];
    }

    ctx[emitErrorsProp][emitEvt].push(err);
  },

  /**
   * @param {*} info
   * @param {number} info.emitTimeout
   * @param {*} info.timerObj
   * @param {*} [info.ctx]
   * @param {string} [info.emitEvt]
   * @param {string} [info.emitErrorsProp]
   */
  async emitTimeout({
    ctx,
    emitEvt,
    emitErrorsProp,
    emitTimeout,
    timerObj
  }) {
    const timedOut = await delay(emitTimeout, timerObj).catch(() => {});

    if (!timedOut) {
      return;
    }

    const err = {
      message: 'emitTimeout',
      emitEvt,
      emitTimeout,
      hint: [`1) Is ${emitEvt} supported on the backend?`, `2) Is emitTimeout ${emitTimeout} ms too small?`].join('\r\n'),
      timestamp: Date.now()
    };
    debug('emitEvt timed out', err);

    if (ctx !== undefined && typeof ctx[emitErrorsProp] === 'object') {
      register.emitErrors({
        ctx,
        err,
        emitEvt,
        emitErrorsProp
      });
    } else {
      throw err;
    }
  },

  emitBacks({
    ctx,
    socket,
    entries
  }) {
    entries.forEach(entry => {
      const {
        pre,
        post,
        evt,
        mapTo
      } = parseEntry(entry, 'emitBack');

      if (propExists(ctx, mapTo)) {
        debug('registered local emitBack', {
          mapTo
        });
        ctx.$watch(mapTo, async function (data, oldData) {
          debug('local data changed', evt, data);
          const preResult = await runHook(ctx, pre, {
            data,
            oldData
          });

          if (preResult === false) {
            return;
          }

          debug('Emitting back:', {
            evt,
            mapTo,
            data
          });
          const p = socket.emitP(evt, {
            data
          });

          if (post === undefined) {
            return;
          }

          const resp = await p;
          runHook(ctx, post, resp);
          return resp;
        });
      } else {
        warn(`Specified emitback ${mapTo} is not defined in component`);
      }
    });
  },

  emitBacksVuex({
    ctx,
    store,
    useSocket,
    socket,
    entries
  }) {
    entries.forEach(entry => {
      const {
        pre,
        post,
        evt,
        mapTo
      } = parseEntry(entry, 'emitBack');

      if (useSocket.registeredWatchers.includes(mapTo)) {
        return;
      }

      store.watch(state => {
        const watchProp = propByPath(state, mapTo);

        if (watchProp === undefined) {
          throw new Error([`[nuxt-socket-io]: Trying to register emitback ${mapTo} failed`, 'because it is not defined in Vuex.', 'Is state set up correctly in your stores folder?'].join('\n'));
        }

        useSocket.registeredWatchers.push(mapTo);
        debug('emitBack registered', {
          mapTo
        });
        return watchProp;
      }, async (data, oldData) => {
        debug('vuex emitBack data changed', {
          emitBack: evt,
          data,
          oldData
        });
        const preResult = await runHook(ctx, pre, {
          data,
          oldData
        });

        if (preResult === false) {
          return;
        }

        debug('Emitting back:', {
          evt,
          mapTo,
          data
        });
        socket.emit(evt, {
          data
        }, resp => {
          runHook(ctx, post, resp);
        });
      });
    });
  },

  emitters({
    ctx,
    socket,
    entries,
    emitTimeout,
    emitErrorsProp
  }) {
    entries.forEach(entry => {
      const {
        pre,
        post,
        mapTo,
        emitEvt,
        msgLabel
      } = parseEntry(entry, 'emitter');

      ctx[emitEvt] = async function (msg = assignMsg(ctx, msgLabel)) {
        debug('Emit evt', {
          emitEvt,
          msg
        });
        const preResult = await runHook(ctx, pre, msg);

        if (preResult === false) {
          return;
        }

        const p = [socket.emitP(emitEvt, msg)];
        const timerObj = {};

        if (emitTimeout) {
          p.push(register.emitTimeout({
            ctx,
            emitEvt,
            emitErrorsProp,
            emitTimeout,
            timerObj
          }));
        }

        const resp = await Promise.race(p);
        debug('Emitter response rxd', {
          emitEvt,
          resp
        });

        if (timerObj.abort) {
          timerObj.abort();
        }

        const {
          emitError,
          ...errorDetails
        } = resp || {};

        if (emitError !== undefined) {
          const err = {
            message: emitError,
            emitEvt,
            errorDetails,
            timestamp: Date.now()
          };
          debug('Emit error occurred', err);

          if (typeof ctx[emitErrorsProp] === 'object') {
            register.emitErrors({
              ctx,
              err,
              emitEvt,
              emitErrorsProp
            });
          } else {
            throw err;
          }
        } else {
          assignResp(ctx.$data || ctx, mapTo, resp);
          runHook(ctx, post, resp);
          return resp;
        }
      };

      debug('Emitter created', {
        emitter: emitEvt
      });
    });
  },

  listeners({
    ctx,
    socket,
    entries
  }) {
    entries.forEach(entry => {
      const {
        pre,
        post,
        evt,
        mapTo
      } = parseEntry(entry);
      debug('Registered local listener', evt);
      socket.on(evt, async resp => {
        debug('Local listener received data', {
          evt,
          resp
        });
        await runHook(ctx, pre);
        assignResp(ctx.$data || ctx, mapTo, resp);
        runHook(ctx, post, resp);
      });
    });
  },

  listenersVuex({
    ctx,
    socket,
    entries,
    storeFn,
    useSocket
  }) {
    entries.forEach(entry => {
      const {
        pre,
        post,
        evt,
        mapTo
      } = parseEntry(entry);

      async function vuexListenerEvt(resp) {
        debug('Vuex listener received data', {
          evt,
          resp
        });
        await runHook(ctx, pre);
        storeFn(mapTo, resp);
        runHook(ctx, post, resp);
      }

      if (useSocket.registeredVuexListeners.includes(evt)) {
        return;
      }

      socket.on(evt, vuexListenerEvt);
      debug('Registered vuex listener', evt);
      useSocket.registeredVuexListeners.push(evt);
    });
  },

  namespace({
    ctx,
    namespaceCfg,
    socket,
    emitTimeout,
    emitErrorsProp
  }) {
    const {
      emitters = [],
      listeners = [],
      emitBacks = []
    } = namespaceCfg;
    const sets = {
      emitters,
      listeners,
      emitBacks
    };
    Object.entries(sets).forEach(([setName, entries]) => {
      if (Array.isArray(entries)) {
        register[setName]({
          ctx,
          socket,
          entries,
          emitTimeout,
          emitErrorsProp
        });
      } else {
        warn(`[nuxt-socket-io]: ${setName} needs to be an array in namespace config`);
      }
    });
  },

  /**
   * @param {import('vuex').Store} store
   */
  vuexModule(store) {
    store.registerModule('$nuxtSocket', {
      namespaced: true,
      state: {
        clientApis: {},
        ioApis: {},
        emitErrors: {},
        emitTimeouts: {}
      },
      mutations: {
        SET_API(state, {
          label,
          api
        }) {
          state.ioApis[label] = api;
        },

        SET_CLIENT_API(state, {
          label = 'clientAPI',
          ...api
        }) {
          state.clientApis[label] = api;
        },

        SET_EMIT_ERRORS(state, {
          label,
          emitEvt,
          err
        }) {
          if (state.emitErrors[label] === undefined) {
            state.emitErrors[label] = {};
          }

          if (state.emitErrors[label][emitEvt] === undefined) {
            state.emitErrors[label][emitEvt] = [];
          }

          state.emitErrors[label][emitEvt].push(err);
        },

        SET_EMIT_TIMEOUT(state, {
          label,
          emitTimeout
        }) {
          state.emitTimeouts[label] = emitTimeout;
        }

      },
      actions: {
        async emit({
          state,
          commit
        }, {
          label,
          socket = _sockets[label],
          evt,
          msg,
          emitTimeout = state.emitTimeouts[label],
          noAck
        }) {
          debug('$nuxtSocket vuex action "emit" dispatched', label, evt);

          if (socket === undefined) {
            throw new Error('socket instance required. Please provide a valid socket label or socket instance');
          }

          register.emitP(socket);
          debug(`Emitting ${evt} with msg`, msg);
          const timerObj = {};
          const p = [socket.emitP(evt, msg)];

          if (noAck) {
            return;
          }

          if (emitTimeout) {
            p.push(register.emitTimeout({
              emitTimeout,
              timerObj
            }).catch(err => {
              if (label !== undefined && label !== '') {
                commit('SET_EMIT_ERRORS', {
                  label,
                  emitEvt: evt,
                  err
                });
                debug(`[nuxt-socket-io]: ${label} Emit error occurred and logged to vuex `, err);
              } else {
                throw new Error(JSON.stringify(err, null, '\t'));
              }
            }));
          }

          const resp = await Promise.race(p);
          debug('Emitter response rxd', {
            evt,
            resp
          });

          if (timerObj.abort) {
            timerObj.abort();
          }

          const {
            emitError,
            ...errorDetails
          } = resp || {};

          if (emitError !== undefined) {
            const err = {
              message: emitError,
              emitEvt: evt,
              errorDetails,
              timestamp: Date.now()
            };
            debug('Emit error occurred', err);

            if (label !== undefined && label !== '') {
              debug(`[nuxt-socket-io]: ${label} Emit error ${err.message} occurred and logged to vuex `, err);
              commit('SET_EMIT_ERRORS', {
                label,
                emitEvt: evt,
                err
              }); // resolve()
            } else {
              throw new Error(JSON.stringify(err, null, '\t'));
            }
          } else {
            return resp;
          }
        }

      }
    }, {
      preserveState: false
    });
  },

  vuexOpts({
    ctx,
    vuexOpts,
    useSocket,
    socket,
    store
  }) {
    const {
      mutations = [],
      actions = [],
      emitBacks = []
    } = vuexOpts;
    const sets = {
      mutations,
      actions,
      emitBacks
    };
    const storeFns = {
      mutations: 'commit',
      actions: 'dispatch'
    };
    Object.entries(sets).forEach(([setName, entries]) => {
      if (Array.isArray(entries)) {
        const fnName = storeFns[setName];

        if (fnName) {
          register.listenersVuex({
            ctx,
            socket,
            entries,
            storeFn: store[fnName],
            useSocket
          });
        } else {
          register.emitBacksVuex({
            ctx,
            store,
            useSocket,
            socket,
            entries
          });
        }
      } else {
        warn(`[nuxt-socket-io]: vuexOption ${setName} needs to be an array`);
      }
    });
  },

  /**
   * @param {import('@nuxt/types').Context } ctx
   * @param {import('socket.io-client').Socket} socket
   * @param {string} connectUrl
   * @param {string} statusProp
   */
  socketStatus(ctx, socket, connectUrl, statusProp) {
    const socketStatus = {
      connectUrl
    };
    const clientEvts = ['connect_error', 'connect_timeout', 'reconnect', 'reconnect_attempt', 'reconnect_error', 'reconnect_failed', 'ping', 'pong'];
    clientEvts.forEach(evt => {
      const prop = camelCase(evt);
      socketStatus[prop] = ''; // @ts-ignore

      socket.io.on(evt,
      /** @param {*} resp */
      resp => {
        Object.assign(ctx[statusProp], {
          [prop]: resp
        });
      });
    });
    Object.assign(ctx, {
      [statusProp]: socketStatus
    });
  },

  teardown({
    ctx,
    socket,
    useSocket
  }) {
    // Setup listener for "closeSockets" in case
    // multiple instances of nuxtSocket exist in the same
    // component (only one destroy/unmount event takes place).
    // When we teardown, we want to remove the listeners of all
    // the socket.io-client instances
    ctx.$once('closeSockets', function () {
      debug('closing socket id=' + socket.id);
      socket.removeAllListeners();
      socket.close();
    });

    if (!ctx.registeredTeardown) {
      // ctx.$destroy is defined in vue2
      // but will go away in vue3 (in favor of onUnmounted)
      // save user's destroy method and honor it after
      // we run nuxt-socket-io's teardown
      ctx.onComponentDestroy = ctx.$destroy || ctx.onUnmounted;
      debug('teardown enabled for socket', {
        name: useSocket.name
      }); // Our $destroy method
      // Gets called automatically on the destroy lifecycle
      // in v2. In v3, we have call it with the
      // onUnmounted hook

      ctx.$destroy = function () {
        debug('component destroyed, closing socket(s)', {
          name: useSocket.name,
          url: useSocket.url
        });
        useSocket.registeredVuexListeners = [];
        ctx.$emit('closeSockets'); // Only run the user's destroy method
        // if it exists

        if (ctx.onComponentDestroy) {
          ctx.onComponentDestroy();
        }
      }; // onUnmounted will only exist in v3


      if (ctx.onUnmounted) {
        ctx.onUnmounted = ctx.$destroy;
      }

      ctx.registeredTeardown = true;
    }

    socket.on('disconnect', () => {
      debug('server disconnected', {
        name: useSocket.name,
        url: useSocket.url
      });
      socket.close();
    });
  },

  /**
   * @param {import('vue/types/vue').Vue } ctx
   */
  stubs(ctx) {
    // Use a tiny event bus now. Can probably
    // be replaced by watch eventually. For now this works.
    if (!ctx.$on) {
      //  || !ctx.$emit || !ctx.$once) {
      ctx.$once = (...args) => instance_js_default.a.once(...args);

      ctx.$on = (...args) => instance_js_default.a.on(...args);

      ctx.$off = (...args) => instance_js_default.a.off(...args);

      ctx.$emit = (...args) => instance_js_default.a.emit(...args);
    }

    if (!ctx.$set) {
      ctx.$set = (obj, key, val) => {
        if (isRefImpl(obj[key])) {
          obj[key].value = val;
        } else {
          obj[key] = val;
        }
      };
    }

    if (!ctx.$watch) {
      ctx.$watch = (label, cb) => {// will enable when '@nuxtjs/composition-api' reaches stable version:
        // vueWatch(ctx.$data[label], cb)
      };
    }
  },

  /**
   * Promisified emit
   */
  emitP(socket) {
    socket.emitP = (evt, msg) => new Promise(resolve => socket.emit(evt, msg, resolve));
  },

  /**
   * Promisified once.
   * Where's the promisified on? Answer: doesn't
   * really fit in to the websocket design.
   */
  onceP(socket) {
    socket.onceP = evt => new Promise(resolve => socket.once(evt, resolve));
  }

};
/**
 * @param {import('./types.d').NuxtSocketOpts} ioOpts
 */

function nuxtSocket(ioOpts) {
  const {
    name,
    channel = '',
    statusProp = 'socketStatus',
    persist,
    teardown = !persist,
    emitTimeout,
    emitErrorsProp = 'emitErrors',
    ioApiProp = 'ioApi',
    ioDataProp = 'ioData',
    apiIgnoreEvts = [],
    serverAPI,
    clientAPI,
    vuex,
    namespaceCfg,
    ...connectOpts
  } = ioOpts;
  const {
    $config
  } = this;
  const {
    nuxtSocketIO: pluginOptions
  } = $config;
  const store = this.$store || this.store;
  const runtimeOptions = { ...pluginOptions
  }; // If runtime config is also defined,
  // gracefully merge those options in here.
  // If naming conflicts extist between sockets, give
  // module options the priority

  if ($config.io) {
    Object.assign(runtimeOptions, $config.io);
    runtimeOptions.sockets = validateSockets(pluginOptions.sockets) ? pluginOptions.sockets : [];

    if (validateSockets($config.io.sockets)) {
      $config.io.sockets.forEach(socket => {
        const fnd = runtimeOptions.sockets.find(({
          name
        }) => name === socket.name);

        if (fnd === undefined) {
          runtimeOptions.sockets.push(socket);
        }
      });
    }
  }

  const mergedOpts = { ...runtimeOptions,
    ...ioOpts
  };
  const {
    sockets,
    warnings = true,
    info = true
  } = mergedOpts;
  warn = warnings && "production" !== 'production' ? console.warn : () => {};
  infoMsgs = info && "production" !== 'production' ? console.info : () => {};

  if (!validateSockets(sockets)) {
    throw new Error("Please configure sockets if planning to use nuxt-socket-io: \r\n [{name: '', url: ''}]");
  }

  register.stubs(this);
  let useSocket = null;

  if (!name) {
    useSocket = sockets.find(s => s.default === true);
  } else {
    useSocket = sockets.find(s => s.name === name);
  }

  if (!useSocket) {
    useSocket = sockets[0];
  }

  if (!useSocket.name) {
    useSocket.name = 'dflt';
  }

  if (!useSocket.url) {
    warn(`URL not defined for socket "${useSocket.name}". Defaulting to "window.location"`);
  }

  if (!useSocket.registeredWatchers) {
    useSocket.registeredWatchers = [];
  }

  if (!useSocket.registeredVuexListeners) {
    useSocket.registeredVuexListeners = [];
  }

  let {
    url: connectUrl
  } = useSocket;

  if (connectUrl) {
    connectUrl += channel;
  }

  const {
    namespaces = {}
  } = useSocket;
  let socket;
  const label = persist && typeof persist === 'string' ? persist : `${useSocket.name}${channel}`;

  function connectSocket() {
    if (connectUrl) {
      socket = cjs_default()(connectUrl, connectOpts);
      infoMsgs('[nuxt-socket-io]: connect', useSocket.name, connectUrl, connectOpts);
    } else {
      socket = cjs_default()(channel, connectOpts);
      infoMsgs('[nuxt-socket-io]: connect', useSocket.name, window.location, channel, connectOpts);
    }
  }

  if (persist) {
    if (_sockets[label]) {
      debug(`resuing persisted socket ${label}`);
      socket = _sockets[label];

      if (socket.disconnected) {
        debug('persisted socket disconnected, reconnecting...');
        connectSocket();
      }
    } else {
      debug(`socket ${label} does not exist, creating and connecting to it..`);
      connectSocket();
      _sockets[label] = socket;
    }
  } else {
    connectSocket();
  }

  register.emitP(socket);
  register.onceP(socket);

  if (!store.state.$nuxtSocket) {
    debug('vuex store $nuxtSocket does not exist....registering it');
    register.vuexModule(store);
  }

  if (emitTimeout) {
    store.commit('$nuxtSocket/SET_EMIT_TIMEOUT', {
      label,
      emitTimeout
    });
  }

  const mergedNspCfg = Object.assign({ ...namespaces[channel]
  }, namespaceCfg);

  if (mergedNspCfg.emitters || mergedNspCfg.listeners || mergedNspCfg.emitBacks) {
    register.namespace({
      ctx: this,
      namespaceCfg: mergedNspCfg,
      socket,
      emitTimeout,
      emitErrorsProp
    });
    debug('namespaces configured for socket', {
      name: useSocket.name,
      channel,
      namespaceCfg
    });
  }

  if (serverAPI) {
    register.serverAPI({
      store,
      label,
      apiIgnoreEvts,
      ioApiProp,
      ioDataProp,
      ctx: this,
      socket,
      emitTimeout,
      emitErrorsProp,
      serverAPI,
      clientAPI
    });
  }

  if (clientAPI) {
    register.clientAPI({
      ctx: this,
      store,
      socket,
      clientAPI
    });
  }

  const vuexOpts = { ...useSocket.vuex,
    ...vuex
  };

  if (vuexOpts) {
    register.vuexOpts({
      ctx: this,
      vuexOpts,
      useSocket,
      socket,
      store
    });
    debug('vuexOpts configured for socket', {
      name: useSocket.name,
      vuexOpts
    });
  }

  if (this.socketStatus !== undefined && typeof this.socketStatus === 'object') {
    register.socketStatus(this, socket, connectUrl || window.location.origin, statusProp);
    debug('socketStatus registered for socket', {
      name: useSocket.name,
      url: connectUrl
    });
  }

  if (teardown) {
    register.teardown({
      ctx: this,
      socket,
      useSocket
    });
  }

  return socket;
}

/* harmony default export */ var nuxt_socket_io = (function (_, inject) {
  inject('nuxtSocket', nuxtSocket);
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(18);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(55);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        continue;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Intercept to apply default headers

  axios.onRequest(config => {
    config.headers = { ...axios.defaults.headers.common,
      ...config.headers
    };
  }); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || 'http://localhost:3000/'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// EXTERNAL MODULE: external "echarts"
var external_echarts_ = __webpack_require__(56);

// CONCATENATED MODULE: ./plugins/echarts.js


external_vue_default.a.prototype.$echarts = external_echarts_;
// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(29);

// CONCATENATED MODULE: ./.nuxt/auth/utilities.js
const isUnset = o => typeof o === 'undefined' || o === null;
const isSet = o => !isUnset(o);
const isSameURL = (a, b) => a.split('?')[0].replace(/\/+$/, '') === b.split('?')[0].replace(/\/+$/, '');
const isRelativeURL = u => u && u.length && /^\/([a-zA-Z0-9@\-%_~][/a-zA-Z0-9@\-%_~]*)?([?][^#]*)?(#[^#]*)?$/.test(u);
const parseQuery = queryString => {
  const query = {};
  const pairs = queryString.split('&');

  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }

  return query;
};
const encodeQuery = queryObject => {
  return Object.entries(queryObject).filter(([key, value]) => typeof value !== 'undefined').map(([key, value]) => encodeURIComponent(key) + (value != null ? '=' + encodeURIComponent(value) : '')).join('&');
};
const routeOption = (route, key, value) => {
  return route.matched.some(m => {
    if (false) {} else {
      // SSR
      return Object.values(m.components).some(component => Object.values(component._Ctor).some(ctor => ctor.options && ctor.options[key] === value));
    }
  });
};
const utilities_getMatchedComponents = (route, matches = false) => {
  return [].concat.apply([], route.matched.map(function (m, index) {
    return Object.keys(m.components).map(function (key) {
      matches && matches.push(index);
      return m.components[key];
    });
  }));
};
function normalizePath(path = '') {
  // Remove query string
  let result = path.split('?')[0]; // Remove redundant / from the end of path

  if (result.charAt(result.length - 1) === '/') {
    result = result.slice(0, -1);
  }

  return result;
}
function encodeValue(val) {
  if (typeof val === 'string') {
    return val;
  }

  return JSON.stringify(val);
}
function decodeValue(val) {
  // Try to parse as json
  if (typeof val === 'string') {
    try {
      return JSON.parse(val);
    } catch (_) {}
  } // Return as is


  return val;
}
/**
 * Get property defined by dot notation in string.
 * Based on  https://github.com/dy/dotprop (MIT)
 *
 * @param  {Object} holder   Target object where to look property up
 * @param  {string} propName Dot notation, like 'this.a.b.c'
 * @return {*}          A property value
 */

function getProp(holder, propName) {
  if (!propName || !holder) {
    return holder;
  }

  if (propName in holder) {
    return holder[propName];
  }

  const propParts = Array.isArray(propName) ? propName : (propName + '').split('.');
  let result = holder;

  while (propParts.length && result) {
    result = result[propParts.shift()];
  }

  return result;
}
// CONCATENATED MODULE: ./.nuxt/auth/storage.js



class storage_Storage {
  constructor(ctx, options) {
    this.ctx = ctx;
    this.options = options;

    this._initState();
  } // ------------------------------------
  // Universal
  // ------------------------------------


  setUniversal(key, value) {
    // Unset null, undefined
    if (isUnset(value)) {
      return this.removeUniversal(key);
    } // Local state


    this.setState(key, value); // Cookies

    this.setCookie(key, value); // Local Storage

    this.setLocalStorage(key, value);
    return value;
  }

  getUniversal(key) {
    // Local state
    let value = this.getState(key); // Cookies

    if (isUnset(value)) {
      value = this.getCookie(key);
    } // Local Storage


    if (isUnset(value)) {
      value = this.getLocalStorage(key);
    }

    return value;
  }

  syncUniversal(key, defaultValue) {
    let value = this.getUniversal(key);

    if (isUnset(value) && isSet(defaultValue)) {
      value = defaultValue;
    }

    if (isSet(value)) {
      this.setUniversal(key, value);
    }

    return value;
  }

  removeUniversal(key) {
    this.removeState(key);
    this.removeLocalStorage(key);
    this.removeCookie(key);
  } // ------------------------------------
  // Local state (reactive)
  // ------------------------------------


  _initState() {
    // Private state is suitable to keep information not being exposed to Vuex store
    // This helps prevent stealing token from SSR response HTML
    external_vue_default.a.set(this, '_state', {}); // Use vuex for local state's if possible

    this._useVuex = this.options.vuex && this.ctx.store;

    if (this._useVuex) {
      const storeModule = {
        namespaced: true,
        state: () => this.options.initialState,
        mutations: {
          SET(state, payload) {
            external_vue_default.a.set(state, payload.key, payload.value);
          }

        }
      };
      this.ctx.store.registerModule(this.options.vuex.namespace, storeModule, {
        preserveState: Boolean(this.ctx.store.state[this.options.vuex.namespace])
      });
      this.state = this.ctx.store.state[this.options.vuex.namespace];
    } else {
      external_vue_default.a.set(this, 'state', {});
    }
  }

  setState(key, value) {
    if (key[0] === '_') {
      external_vue_default.a.set(this._state, key, value);
    } else {
      if (this._useVuex) {
        this.ctx.store.commit(this.options.vuex.namespace + '/SET', {
          key,
          value
        });
      } else {
        external_vue_default.a.set(this.state, key, value);
      }
    }

    return value;
  }

  getState(key) {
    if (key[0] !== '_') {
      return this.state[key];
    } else {
      return this._state[key];
    }
  }

  watchState(key, fn) {
    if (this._useVuex) {
      return this.ctx.store.watch(state => getProp(state[this.options.vuex.namespace], key), fn);
    }
  }

  removeState(key) {
    this.setState(key, undefined);
  } // ------------------------------------
  // Local storage
  // ------------------------------------


  setLocalStorage(key, value) {
    // Unset null, undefined
    if (isUnset(value)) {
      return this.removeLocalStorage(key);
    }

    if (typeof localStorage === 'undefined' || !this.options.localStorage) {
      return;
    }

    const _key = this.options.localStorage.prefix + key;

    try {
      localStorage.setItem(_key, encodeValue(value));
    } catch (e) {
      if (!this.options.ignoreExceptions) {
        throw e;
      }
    }

    return value;
  }

  getLocalStorage(key) {
    if (typeof localStorage === 'undefined' || !this.options.localStorage) {
      return;
    }

    const _key = this.options.localStorage.prefix + key;

    const value = localStorage.getItem(_key);
    return decodeValue(value);
  }

  removeLocalStorage(key) {
    if (typeof localStorage === 'undefined' || !this.options.localStorage) {
      return;
    }

    const _key = this.options.localStorage.prefix + key;

    localStorage.removeItem(_key);
  } // ------------------------------------
  // Cookies
  // ------------------------------------


  getCookies() {
    const cookieStr =  false ? undefined : this.ctx.req.headers.cookie;
    return Object(external_cookie_["parse"])(cookieStr || '') || {};
  }

  setCookie(key, value, options = {}) {
    if (!this.options.cookie ||  true && !this.ctx.res) {
      return;
    }

    const _key = this.options.cookie.prefix + key;

    const _options = Object.assign({}, this.options.cookie.options, options);

    const _value = encodeValue(value); // Unset null, undefined


    if (isUnset(value)) {
      _options.maxAge = -1;
    } // Accept expires as a number for js-cookie compatiblity


    if (typeof _options.expires === 'number') {
      _options.expires = new Date(new Date() * 1 + _options.expires * 864e+5);
    }

    const serializedCookie = Object(external_cookie_["serialize"])(_key, _value, _options);

    if (false) {} else if ( true && this.ctx.res) {
      // Send Set-Cookie header from server side
      const prevCookies = this.ctx.res.getHeader('Set-Cookie');
      this.ctx.res.setHeader('Set-Cookie', [].concat(prevCookies, serializedCookie).filter(v => v));
    }

    return value;
  }

  getCookie(key) {
    if (!this.options.cookie ||  true && !this.ctx.req) {
      return;
    }

    const _key = this.options.cookie.prefix + key;

    const cookies = this.getCookies();
    const value = cookies[_key] ? decodeURIComponent(cookies[_key]) : undefined;
    return decodeValue(value);
  }

  removeCookie(key, options) {
    this.setCookie(key, undefined, options);
  }

}
// CONCATENATED MODULE: ./.nuxt/auth/auth.js


class auth_Auth {
  constructor(ctx, options) {
    this.ctx = ctx;
    this.options = options; // Strategies

    this.strategies = {}; // Error listeners

    this._errorListeners = []; // Redirect listeners

    this._redirectListeners = []; // Storage & State

    options.initialState = {
      user: null,
      loggedIn: false
    };
    const storage = new storage_Storage(ctx, options);
    this.$storage = storage;
    this.$state = storage.state;
  }

  async init() {
    // Reset on error
    if (this.options.resetOnError) {
      this.onError((...args) => {
        if (typeof this.options.resetOnError !== 'function' || this.options.resetOnError(...args)) {
          this.reset();
        }
      });
    } // Restore strategy


    this.$storage.syncUniversal('strategy', this.options.defaultStrategy); // Set default strategy if current one is invalid

    if (!this.strategy) {
      this.$storage.setUniversal('strategy', this.options.defaultStrategy); // Give up if still invalid

      if (!this.strategy) {
        return Promise.resolve();
      }
    }

    try {
      // Call mounted for active strategy on initial load
      await this.mounted();
    } catch (error) {
      this.callOnError(error);
    } finally {
      // Watch for loggedIn changes only in client side
      if (false) {}
    }
  } // Backward compatibility


  get state() {
    if (!this._state_warn_shown) {
      this._state_warn_shown = true; // eslint-disable-next-line no-console

      console.warn('[AUTH] $auth.state is deprecated. Please use $auth.$state or top level props like $auth.loggedIn');
    }

    return this.$state;
  }

  getState(key) {
    if (!this._get_state_warn_shown) {
      this._get_state_warn_shown = true; // eslint-disable-next-line no-console

      console.warn('[AUTH] $auth.getState is deprecated. Please use $auth.$storage.getState() or top level props like $auth.loggedIn');
    }

    return this.$storage.getState(key);
  } // ---------------------------------------------------------------
  // Strategy and Scheme
  // ---------------------------------------------------------------


  get strategy() {
    return this.strategies[this.$state.strategy];
  }

  registerStrategy(name, strategy) {
    this.strategies[name] = strategy;
  }

  setStrategy(name) {
    if (name === this.$storage.getUniversal('strategy')) {
      return Promise.resolve();
    } // Set strategy


    this.$storage.setUniversal('strategy', name); // Call mounted hook on active strategy

    return this.mounted();
  }

  mounted() {
    if (!this.strategy.mounted) {
      return this.fetchUserOnce();
    }

    return Promise.resolve(this.strategy.mounted(...arguments)).catch(error => {
      this.callOnError(error, {
        method: 'mounted'
      });
      return Promise.reject(error);
    });
  }

  loginWith(name, ...args) {
    return this.setStrategy(name).then(() => this.login(...args));
  }

  login() {
    if (!this.strategy.login) {
      return Promise.resolve();
    }

    return this.wrapLogin(this.strategy.login(...arguments)).catch(error => {
      this.callOnError(error, {
        method: 'login'
      });
      return Promise.reject(error);
    });
  }

  fetchUser() {
    if (!this.strategy.fetchUser) {
      return Promise.resolve();
    }

    return Promise.resolve(this.strategy.fetchUser(...arguments)).catch(error => {
      this.callOnError(error, {
        method: 'fetchUser'
      });
      return Promise.reject(error);
    });
  }

  logout() {
    if (!this.strategy.logout) {
      this.reset();
      return Promise.resolve();
    }

    return Promise.resolve(this.strategy.logout(...arguments)).catch(error => {
      this.callOnError(error, {
        method: 'logout'
      });
      return Promise.reject(error);
    });
  }

  setUserToken(token) {
    if (!this.strategy.setUserToken) {
      this.setToken(this.strategy.name, token);
      return Promise.resolve();
    }

    return Promise.resolve(this.strategy.setUserToken(token)).catch(error => {
      this.callOnError(error, {
        method: 'setUserToken'
      });
      return Promise.reject(error);
    });
  }

  reset() {
    if (!this.strategy.reset) {
      this.setUser(false);
      this.setToken(this.$state.strategy, false);
      this.setRefreshToken(this.$state.strategy, false);
      return Promise.resolve();
    }

    return Promise.resolve(this.strategy.reset(...arguments)).catch(error => {
      this.callOnError(error, {
        method: 'reset'
      });
      return Promise.reject(error);
    });
  } // ---------------------------------------------------------------
  // Token helpers
  // ---------------------------------------------------------------


  getToken(strategy) {
    const _key = this.options.token.prefix + strategy;

    return this.$storage.getUniversal(_key);
  }

  setToken(strategy, token) {
    const _key = this.options.token.prefix + strategy;

    return this.$storage.setUniversal(_key, token);
  }

  syncToken(strategy) {
    const _key = this.options.token.prefix + strategy;

    return this.$storage.syncUniversal(_key);
  } // ---------------------------------------------------------------
  // Refresh token helpers
  // ---------------------------------------------------------------


  getRefreshToken(strategy) {
    const _key = this.options.refresh_token.prefix + strategy;

    return this.$storage.getUniversal(_key);
  }

  setRefreshToken(strategy, refreshToken) {
    const _key = this.options.refresh_token.prefix + strategy;

    return this.$storage.setUniversal(_key, refreshToken);
  }

  syncRefreshToken(strategy) {
    const _key = this.options.refresh_token.prefix + strategy;

    return this.$storage.syncUniversal(_key);
  } // ---------------------------------------------------------------
  // User helpers
  // ---------------------------------------------------------------


  get user() {
    return this.$state.user;
  }

  get loggedIn() {
    return this.$state.loggedIn;
  }

  fetchUserOnce() {
    if (!this.$state.user) {
      return this.fetchUser(...arguments);
    }

    return Promise.resolve();
  }

  setUser(user) {
    this.$storage.setState('user', user);
    this.$storage.setState('loggedIn', Boolean(user));
  } // ---------------------------------------------------------------
  // Utils
  // ---------------------------------------------------------------


  get busy() {
    return this.$storage.getState('busy');
  }

  request(endpoint, defaults, withResponse) {
    const _endpoint = typeof defaults === 'object' ? Object.assign({}, defaults, endpoint) : endpoint;

    if (!this.ctx.app.$axios) {
      // eslint-disable-next-line no-console
      console.error('[AUTH] add the @nuxtjs/axios module to nuxt.config file');
      return;
    }

    return this.ctx.app.$axios.request(_endpoint).then(response => {
      const result = _endpoint.propertyName ? getProp(response.data, _endpoint.propertyName) : response.data;

      if (withResponse) {
        return {
          response,
          result
        };
      } else {
        return result;
      }
    }).catch(error => {
      // Call all error handlers
      this.callOnError(error, {
        method: 'request'
      }); // Throw error

      return Promise.reject(error);
    });
  }

  requestWith(strategy, endpoint, defaults, withResponse) {
    const token = this.getToken(strategy);

    const _endpoint = Object.assign({}, defaults, endpoint);

    const tokenName = this.strategies[strategy].options.tokenName || 'Authorization';

    if (!_endpoint.headers) {
      _endpoint.headers = {};
    }

    if (!_endpoint.headers[tokenName] && isSet(token) && token) {
      _endpoint.headers[tokenName] = token;
    }

    return this.request(_endpoint, false, withResponse);
  }

  wrapLogin(promise) {
    this.$storage.setState('busy', true);
    this.error = null;
    return Promise.resolve(promise).then(response => {
      this.$storage.setState('busy', false);
      return response;
    }).catch(error => {
      this.$storage.setState('busy', false);
      return Promise.reject(error);
    });
  }

  onError(listener) {
    this._errorListeners.push(listener);
  }

  callOnError(error, payload = {}) {
    this.error = error;

    for (const fn of this._errorListeners) {
      fn(error, payload);
    }
  }

  redirect(name, noRouter = false) {
    if (!this.options.redirect) {
      return;
    }

    const from = this.options.fullPathRedirect ? this.ctx.route.fullPath : this.ctx.route.path;
    let to = this.options.redirect[name];

    if (!to) {
      return;
    } // Apply rewrites


    if (this.options.rewriteRedirects) {
      if (name === 'login' && isRelativeURL(from) && !isSameURL(to, from)) {
        this.$storage.setUniversal('redirect', from);
      }

      if (name === 'home') {
        const redirect = this.$storage.getUniversal('redirect');
        this.$storage.setUniversal('redirect', null);

        if (isRelativeURL(redirect)) {
          to = redirect;
        }
      }
    } // Call onRedirect hook


    to = this.callOnRedirect(to, from) || to; // Prevent infinity redirects

    if (isSameURL(to, from)) {
      return;
    }

    if (false) {} else {
      this.ctx.redirect(to, this.ctx.query);
    }
  }

  onRedirect(listener) {
    this._redirectListeners.push(listener);
  }

  callOnRedirect(to, from) {
    for (const fn of this._redirectListeners) {
      to = fn(to, from) || to;
    }

    return to;
  }

  hasScope(scope) {
    const userScopes = this.$state.user && getProp(this.$state.user, this.options.scopeKey);

    if (!userScopes) {
      return false;
    }

    if (Array.isArray(userScopes)) {
      return userScopes.includes(scope);
    }

    return Boolean(getProp(userScopes, scope));
  }

}
// CONCATENATED MODULE: ./.nuxt/auth/middleware.js



_nuxt_middleware.auth = function (ctx) {
  // Disable middleware if options: { auth: false } is set on the route
  if (routeOption(ctx.route, 'auth', false)) {
    return;
  } // Disable middleware if no route was matched to allow 404/error page


  const matches = [];
  const Components = utilities_getMatchedComponents(ctx.route, matches);

  if (!Components.length) {
    return;
  }

  const {
    login,
    callback
  } = ctx.$auth.options.redirect;
  const pageIsInGuestMode = routeOption(ctx.route, 'auth', 'guest');

  const insidePage = page => normalizePath(ctx.route.path) === normalizePath(page);

  if (ctx.$auth.$state.loggedIn) {
    // -- Authorized --
    if (!login || insidePage(login) || pageIsInGuestMode) {
      ctx.$auth.redirect('home');
    }
  } else {
    // -- Guest --
    // (Those passing `callback` at runtime need to mark their callback component
    // with `auth: false` to avoid an unnecessary redirect from callback to login)
    if (!pageIsInGuestMode && (!callback || !insidePage(callback))) {
      ctx.$auth.redirect('login');
    }
  }
};
// CONCATENATED MODULE: ./.nuxt/auth/schemes/local.js
class LocalScheme {
  constructor(auth, options) {
    this.$auth = auth;
    this.name = options._name;
    this.options = Object.assign({}, DEFAULTS, options);
  }

  _setToken(token) {
    if (this.options.globalToken) {
      // Set Authorization token for all axios requests
      this.$auth.ctx.app.$axios.setHeader(this.options.tokenName, token);
    }
  }

  _clearToken() {
    if (this.options.globalToken) {
      // Clear Authorization token for all axios requests
      this.$auth.ctx.app.$axios.setHeader(this.options.tokenName, false);
    }
  }

  mounted() {
    if (this.options.tokenRequired) {
      const token = this.$auth.syncToken(this.name);

      this._setToken(token);
    }

    return this.$auth.fetchUserOnce();
  }

  async login(endpoint) {
    if (!this.options.endpoints.login) {
      return;
    } // Ditch any leftover local tokens before attempting to log in


    await this.$auth.reset();
    const {
      response,
      result
    } = await this.$auth.request(endpoint, this.options.endpoints.login, true);

    if (this.options.tokenRequired) {
      const token = this.options.tokenType ? this.options.tokenType + ' ' + result : result;
      this.$auth.setToken(this.name, token);

      this._setToken(token);
    }

    if (this.options.autoFetchUser) {
      await this.fetchUser();
    }

    return response;
  }

  async setUserToken(tokenValue) {
    const token = this.options.tokenType ? this.options.tokenType + ' ' + tokenValue : tokenValue;
    this.$auth.setToken(this.name, token);

    this._setToken(token);

    return this.fetchUser();
  }

  async fetchUser(endpoint) {
    // Token is required but not available
    if (this.options.tokenRequired && !this.$auth.getToken(this.name)) {
      return;
    } // User endpoint is disabled.


    if (!this.options.endpoints.user) {
      this.$auth.setUser({});
      return;
    } // Try to fetch user and then set


    const user = await this.$auth.requestWith(this.name, endpoint, this.options.endpoints.user);
    this.$auth.setUser(user);
  }

  async logout(endpoint) {
    // Only connect to logout endpoint if it's configured
    if (this.options.endpoints.logout) {
      await this.$auth.requestWith(this.name, endpoint, this.options.endpoints.logout).catch(() => {});
    } // But reset regardless


    return this.$auth.reset();
  }

  async reset() {
    if (this.options.tokenRequired) {
      this._clearToken();
    }

    this.$auth.setUser(false);
    this.$auth.setToken(this.name, false);
    this.$auth.setRefreshToken(this.name, false);
    return Promise.resolve();
  }

}
const DEFAULTS = {
  tokenRequired: true,
  tokenType: 'Bearer',
  globalToken: true,
  tokenName: 'Authorization',
  autoFetchUser: true
};
// CONCATENATED MODULE: ./.nuxt/auth/plugin.js

 // Active schemes


/* harmony default export */ var auth_plugin = (function (ctx, inject) {
  // Options
  const options = {
    "resetOnError": true,
    "scopeKey": "scope",
    "rewriteRedirects": true,
    "fullPathRedirect": false,
    "watchLoggedIn": true,
    "redirect": {
      "login": "/login",
      "logout": "/login",
      "home": "/",
      "callback": "/callback",
      "user": "/user/profile"
    },
    "vuex": {
      "namespace": "auth"
    },
    "cookie": {
      "prefix": "auth.",
      "options": {
        "path": "/",
        "maxAge": 100000
      }
    },
    "localStorage": false,
    "token": {
      "prefix": "_token."
    },
    "refresh_token": {
      "prefix": "_refresh_token."
    },
    "defaultStrategy": "local"
  }; // Create a new Auth instance

  const $auth = new auth_Auth(ctx, options); // Register strategies
  // local

  $auth.registerStrategy('local', new LocalScheme($auth, {
    "endpoints": {
      "login": {
        "url": "http://167.172.74.203:7777/api/auth/login",
        "method": "post",
        "propertyName": "token"
      },
      "logout": false,
      "user": {
        "url": "http://167.172.74.203:7777/api/auth/me",
        "method": "GET",
        "propertyName": false
      }
    },
    "scheme": "local",
    "token": {
      "maxAge": 10000,
      "type": "Bearer"
    },
    "tokenType": "Bearer",
    "localStorage": false,
    "_name": "local"
  })); // Inject it to nuxt context as $auth

  inject('auth', $auth);
  ctx.$auth = $auth; // Initialize auth

  return $auth.init().catch(error => {
    if (false) {}
  });
});
// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: .\\components\\plugin.js (mode: 'all')

 // Source: .\\vuetify\\plugin.js (mode: 'all')

 // Source: .\\nuxt-socket-io.js (mode: 'all')

 // Source: .\\axios.js (mode: 'all')

 // Source: ..\\plugins\\echarts.js (mode: 'all')

 // Source: .\\auth\\plugin.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;

function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "titleTemplate": "%s - Dashboard",
      "title": "LASK",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Orbitron&display=swap\")"
      }, {
        "rel": "stylesheet",
        "type": "text\u002Fcss",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"
      }, {
        "rel": "stylesheet",
        "type": "text\u002Fcss",
        "href": "https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"
      }],
      "style": [],
      "script": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof vuetify_plugin === 'function') {
    await vuetify_plugin(app.context, inject);
  }

  if (typeof nuxt_socket_io === 'function') {
    await nuxt_socket_io(app.context, inject);
  }

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/echarts.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/echarts.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof auth_plugin === 'function') {
    await auth_plugin(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}

    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target
  // Public runtime config

  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (layouts_error.options || layouts_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(layouts_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : layouts_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "state", function() { return /* binding */ state; });
__webpack_require__.d(__webpack_exports__, "mutations", function() { return /* binding */ mutations; });
__webpack_require__.d(__webpack_exports__, "getters", function() { return /* binding */ getters; });

// CONCATENATED MODULE: ./src/utils/class.js
class SummaryCard {
  /**
  * @param {string} icon - Icon class (mdi).
  * @param {string} text - Description of the card.
  * @param {int} data - Data display on the card.
  * @param {string} classIn - Class color(vuetify).
  */
  constructor(icon, text, data, classIn) {
    this.icon = icon, this.text = text, this.data = data, this.class = classIn;
  } // Using toJSON method to avoid POJO's error in vuex


  toJSON() {
    return {
      icon: this.icon,
      text: this.text,
      data: this.data,
      class: this.class
    };
  }

}
class class_status {
  constructor(date, attempts, success, acceptable, fail, rate) {
    this.date = date, this.attempts = attempts, this.success = success, this.acceptable = acceptable, this.fail = fail, this.rate = rate;
  }

  toJSON() {
    return {
      date: this.date,
      attempts: this.attempts,
      success: this.success,
      acceptable: this.acceptable,
      fail: this.fail,
      rate: this.rate
    };
  }

}
// CONCATENATED MODULE: ./store/index.js

const state = () => ({
  summaryCard: [new SummaryCard('mdi-account', 'USERNAME', '2022123456', 'firstIcon'), // new SummaryCard('mdi-percent-outline', 'OVERALL', '90%', 'firstIcon'),
  new SummaryCard('mdi-clipboard-text-multiple-outline', 'SESSIONS', 10, 'secondIcon'), new SummaryCard('mdi-needle', 'ATTEMPTS', 200, 'fourthIcon'), new SummaryCard('mdi-bullseye', 'ACCURACY', '70%', 'thirdIcon')],
  openDialogTraining: false,
  countAccurate: 0,
  countAcceptable: 0,
  countUnacceptable: 0,
  reset: false,
  forceArray: [],
  timeArray: [],
  headers: [{
    text: "Date",
    align: "start",
    sortable: false,
    value: "date"
  }, {
    text: "Attempts",
    value: "attempts"
  }, {
    text: "Success",
    value: "success"
  }, {
    text: "Acceptable",
    value: "acceptable"
  }, {
    text: "Fail",
    value: "fail"
  }, {
    text: "Success Rate",
    value: "rate"
  }],
  status: [new class_status('10 Jan 2022', 60, 20, 20, 20, '20%'), new class_status('10 Jan 2022', 60, 20, 20, 20, '20%'), new class_status('10 Jan 2022', 60, 20, 20, 20, '20%'), new class_status('10 Jan 2022', 60, 20, 20, 20, '20%'), new class_status('10 Jan 2022', 60, 20, 20, 20, '20%'), new class_status('10 Jan 2022', 60, 20, 20, 20, '20%'), new class_status('10 Jan 2022', 60, 20, 20, 20, '20%'), new class_status('10 Jan 2022', 60, 20, 20, 20, '20%'), new class_status('10 Jan 2022', 60, 20, 20, 20, '20%'), new class_status('10 Jan 2022', 60, 20, 20, 20, '20%'), new class_status('10 Jan 2022', 60, 20, 20, 20, '20%'), new class_status('10 Jan 2022', 60, 20, 20, 20, '20%'), new class_status('10 Jan 2022', 60, 20, 20, 20, '20%'), new class_status('10 Jan 2022', 60, 20, 20, 20, '20%'), new class_status('10 Jan 2022', 60, 20, 20, 20, '20%')]
});
const mutations = {
  setOpenDialogTraining(state, payload) {
    state.openDialogTraining = payload;
  }

};
const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn;
  },

  loggedInUser(state) {
    return state.auth.user; // return {username:"ali"}
  }

};

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.delete-all.js");

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.every.js");

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.filter.js");

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.find.js");

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.find-key.js");

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.includes.js");

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.key-of.js");

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.map-keys.js");

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.map-values.js");

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.merge.js");

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.reduce.js");

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.some.js");

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.update.js");

/***/ }),
/* 115 */,
/* 116 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.typed-array.set.js");

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.array.last-item.js");

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.string.at.js");

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.weak-map.delete-all.js");

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.array.last-index.js");

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.add-all.js");

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.delete-all.js");

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.difference.js");

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.every.js");

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.filter.js");

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.find.js");

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.intersection.js");

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.is-disjoint-from.js");

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.is-subset-of.js");

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.is-superset-of.js");

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.join.js");

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.map.js");

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.reduce.js");

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.some.js");

/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.symmetric-difference.js");

/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.union.js");

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ goTo; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ goto_Goto; });

// NAMESPACE OBJECT: ./node_modules/vuetify/lib/services/goto/easing-patterns.js
var easing_patterns_namespaceObject = {};
__webpack_require__.r(easing_patterns_namespaceObject);
__webpack_require__.d(easing_patterns_namespaceObject, "linear", function() { return linear; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInQuad", function() { return easeInQuad; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeOutQuad", function() { return easeOutQuad; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInOutQuad", function() { return easeInOutQuad; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInCubic", function() { return easeInCubic; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeOutCubic", function() { return easeOutCubic; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInOutCubic", function() { return easeInOutCubic; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInQuart", function() { return easeInQuart; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeOutQuart", function() { return easeOutQuart; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInOutQuart", function() { return easeInOutQuart; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInQuint", function() { return easeInQuint; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeOutQuint", function() { return easeOutQuint; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInOutQuint", function() { return easeInOutQuint; });

// EXTERNAL MODULE: ./node_modules/vuetify/lib/services/service/index.js
var service = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/goto/easing-patterns.js
// linear
const linear = t => t; // accelerating from zero velocity

const easeInQuad = t => t ** 2; // decelerating to zero velocity

const easeOutQuad = t => t * (2 - t); // acceleration until halfway, then deceleration

const easeInOutQuad = t => t < 0.5 ? 2 * t ** 2 : -1 + (4 - 2 * t) * t; // accelerating from zero velocity

const easeInCubic = t => t ** 3; // decelerating to zero velocity

const easeOutCubic = t => --t ** 3 + 1; // acceleration until halfway, then deceleration

const easeInOutCubic = t => t < 0.5 ? 4 * t ** 3 : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; // accelerating from zero velocity

const easeInQuart = t => t ** 4; // decelerating to zero velocity

const easeOutQuart = t => 1 - --t ** 4; // acceleration until halfway, then deceleration

const easeInOutQuart = t => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t; // accelerating from zero velocity

const easeInQuint = t => t ** 5; // decelerating to zero velocity

const easeOutQuint = t => 1 + --t ** 5; // acceleration until halfway, then deceleration

const easeInOutQuint = t => t < 0.5 ? 16 * t ** 5 : 1 + 16 * --t ** 5;
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/goto/util.js
// Return target's cumulative offset from the top
function getOffset(target) {
  if (typeof target === 'number') {
    return target;
  }

  let el = $(target);

  if (!el) {
    throw typeof target === 'string' ? new Error(`Target element "${target}" not found.`) : new TypeError(`Target must be a Number/Selector/HTMLElement/VueComponent, received ${type(target)} instead.`);
  }

  let totalOffset = 0;

  while (el) {
    totalOffset += el.offsetTop;
    el = el.offsetParent;
  }

  return totalOffset;
}
function getContainer(container) {
  const el = $(container);
  if (el) return el;
  throw typeof container === 'string' ? new Error(`Container element "${container}" not found.`) : new TypeError(`Container must be a Selector/HTMLElement/VueComponent, received ${type(container)} instead.`);
}

function type(el) {
  return el == null ? el : el.constructor.name;
}

function $(el) {
  if (typeof el === 'string') {
    return document.querySelector(el);
  } else if (el && el._isVue) {
    return el.$el;
  } else if (el instanceof HTMLElement) {
    return el;
  } else {
    return null;
  }
}
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/goto/index.js
// Extensions
 // Utilities



function goTo(_target, _settings = {}) {
  const settings = {
    container: document.scrollingElement || document.body || document.documentElement,
    duration: 500,
    offset: 0,
    easing: 'easeInOutCubic',
    appOffset: true,
    ..._settings
  };
  const container = getContainer(settings.container);
  /* istanbul ignore else */

  if (settings.appOffset && goTo.framework.application) {
    const isDrawer = container.classList.contains('v-navigation-drawer');
    const isClipped = container.classList.contains('v-navigation-drawer--clipped');
    const {
      bar,
      top
    } = goTo.framework.application;
    settings.offset += bar;
    /* istanbul ignore else */

    if (!isDrawer || isClipped) settings.offset += top;
  }

  const startTime = performance.now();
  let targetLocation;

  if (typeof _target === 'number') {
    targetLocation = getOffset(_target) - settings.offset;
  } else {
    targetLocation = getOffset(_target) - getOffset(container) - settings.offset;
  }

  const startLocation = container.scrollTop;
  if (targetLocation === startLocation) return Promise.resolve(targetLocation);
  const ease = typeof settings.easing === 'function' ? settings.easing : easing_patterns_namespaceObject[settings.easing];
  /* istanbul ignore else */

  if (!ease) throw new TypeError(`Easing function "${settings.easing}" not found.`); // Cannot be tested properly in jsdom

  /* istanbul ignore next */

  return new Promise(resolve => requestAnimationFrame(function step(currentTime) {
    const timeElapsed = currentTime - startTime;
    const progress = Math.abs(settings.duration ? Math.min(timeElapsed / settings.duration, 1) : 1);
    container.scrollTop = Math.floor(startLocation + (targetLocation - startLocation) * ease(progress));
    const clientHeight = container === document.body ? document.documentElement.clientHeight : container.clientHeight;
    const reachBottom = clientHeight + container.scrollTop >= container.scrollHeight;

    if (progress === 1 || // Need to go lower but reach bottom
    targetLocation > container.scrollTop && reachBottom) {
      return resolve(targetLocation);
    }

    requestAnimationFrame(step);
  }));
}
goTo.framework = {};

goTo.init = () => {};

class goto_Goto extends service["a" /* Service */] {
  constructor() {
    super();
    return goTo;
  }

}
goto_Goto.property = 'goTo';

/***/ }),
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony import */ var _src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = (Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "i"])('spacer', 'div', 'v-spacer'));

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map