(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":27}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":28}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/is-iterable"), __esModule: true };
},{"core-js/library/fn/is-iterable":29}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/json/stringify"), __esModule: true };
},{"core-js/library/fn/json/stringify":30}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/map"), __esModule: true };
},{"core-js/library/fn/map":31}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":32}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":33}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":34}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-descriptor"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-descriptor":35}],10:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-descriptors"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-descriptors":36}],11:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":37}],12:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":38}],13:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":39}],14:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":40}],15:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/set"), __esModule: true };
},{"core-js/library/fn/set":41}],16:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":42}],17:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":43}],18:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],19:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"../core-js/object/define-property":8}],20:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};
},{"../core-js/object/define-property":8}],21:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _assign = require("../core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
},{"../core-js/object/assign":6}],22:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _getPrototypeOf = require("../core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = require("../core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};
},{"../core-js/object/get-own-property-descriptor":9,"../core-js/object/get-prototype-of":11}],23:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _setPrototypeOf = require("../core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require("../core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
},{"../core-js/object/create":7,"../core-js/object/set-prototype-of":13,"../helpers/typeof":26}],24:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
},{"../helpers/typeof":26}],25:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _isIterable2 = require("../core-js/is-iterable");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = require("../core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
},{"../core-js/get-iterator":2,"../core-js/is-iterable":3}],26:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":16,"../core-js/symbol/iterator":17}],27:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/_core').Array.from;

},{"../../modules/_core":58,"../../modules/es6.array.from":133,"../../modules/es6.string.iterator":146}],28:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');

},{"../modules/core.get-iterator":131,"../modules/es6.string.iterator":146,"../modules/web.dom.iterable":159}],29:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.is-iterable');

},{"../modules/core.is-iterable":132,"../modules/es6.string.iterator":146,"../modules/web.dom.iterable":159}],30:[function(require,module,exports){
var core = require('../../modules/_core');
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

},{"../../modules/_core":58}],31:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.map');
require('../modules/es7.map.to-json');
require('../modules/es7.map.of');
require('../modules/es7.map.from');
module.exports = require('../modules/_core').Map;

},{"../modules/_core":58,"../modules/es6.map":135,"../modules/es6.object.to-string":143,"../modules/es6.string.iterator":146,"../modules/es7.map.from":148,"../modules/es7.map.of":149,"../modules/es7.map.to-json":150,"../modules/web.dom.iterable":159}],32:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;

},{"../../modules/_core":58,"../../modules/es6.object.assign":136}],33:[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};

},{"../../modules/_core":58,"../../modules/es6.object.create":137}],34:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

},{"../../modules/_core":58,"../../modules/es6.object.define-property":138}],35:[function(require,module,exports){
require('../../modules/es6.object.get-own-property-descriptor');
var $Object = require('../../modules/_core').Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};

},{"../../modules/_core":58,"../../modules/es6.object.get-own-property-descriptor":139}],36:[function(require,module,exports){
require('../../modules/es7.object.get-own-property-descriptors');
module.exports = require('../../modules/_core').Object.getOwnPropertyDescriptors;

},{"../../modules/_core":58,"../../modules/es7.object.get-own-property-descriptors":151}],37:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/_core').Object.getPrototypeOf;

},{"../../modules/_core":58,"../../modules/es6.object.get-prototype-of":140}],38:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;

},{"../../modules/_core":58,"../../modules/es6.object.keys":141}],39:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/_core').Object.setPrototypeOf;

},{"../../modules/_core":58,"../../modules/es6.object.set-prototype-of":142}],40:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
require('../modules/es7.promise.finally');
require('../modules/es7.promise.try');
module.exports = require('../modules/_core').Promise;

},{"../modules/_core":58,"../modules/es6.object.to-string":143,"../modules/es6.promise":144,"../modules/es6.string.iterator":146,"../modules/es7.promise.finally":152,"../modules/es7.promise.try":153,"../modules/web.dom.iterable":159}],41:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.set');
require('../modules/es7.set.to-json');
require('../modules/es7.set.of');
require('../modules/es7.set.from');
module.exports = require('../modules/_core').Set;

},{"../modules/_core":58,"../modules/es6.object.to-string":143,"../modules/es6.set":145,"../modules/es6.string.iterator":146,"../modules/es7.set.from":154,"../modules/es7.set.of":155,"../modules/es7.set.to-json":156,"../modules/web.dom.iterable":159}],42:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;

},{"../../modules/_core":58,"../../modules/es6.object.to-string":143,"../../modules/es6.symbol":147,"../../modules/es7.symbol.async-iterator":157,"../../modules/es7.symbol.observable":158}],43:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');

},{"../../modules/_wks-ext":128,"../../modules/es6.string.iterator":146,"../../modules/web.dom.iterable":159}],44:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],45:[function(require,module,exports){
module.exports = function () { /* empty */ };

},{}],46:[function(require,module,exports){
module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

},{}],47:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":78}],48:[function(require,module,exports){
var forOf = require('./_for-of');

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

},{"./_for-of":68}],49:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-absolute-index":118,"./_to-iobject":120,"./_to-length":121}],50:[function(require,module,exports){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = require('./_ctx');
var IObject = require('./_iobject');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var asc = require('./_array-species-create');
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

},{"./_array-species-create":52,"./_ctx":60,"./_iobject":75,"./_to-length":121,"./_to-object":122}],51:[function(require,module,exports){
var isObject = require('./_is-object');
var isArray = require('./_is-array');
var SPECIES = require('./_wks')('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

},{"./_is-array":77,"./_is-object":78,"./_wks":129}],52:[function(require,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

},{"./_array-species-constructor":51}],53:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof');
var TAG = require('./_wks')('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

},{"./_cof":54,"./_wks":129}],54:[function(require,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],55:[function(require,module,exports){
'use strict';
var dP = require('./_object-dp').f;
var create = require('./_object-create');
var redefineAll = require('./_redefine-all');
var ctx = require('./_ctx');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var $iterDefine = require('./_iter-define');
var step = require('./_iter-step');
var setSpecies = require('./_set-species');
var DESCRIPTORS = require('./_descriptors');
var fastKey = require('./_meta').fastKey;
var validate = require('./_validate-collection');
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

},{"./_an-instance":46,"./_ctx":60,"./_descriptors":62,"./_for-of":68,"./_iter-define":81,"./_iter-step":83,"./_meta":86,"./_object-create":90,"./_object-dp":91,"./_redefine-all":106,"./_set-species":111,"./_validate-collection":126}],56:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = require('./_classof');
var from = require('./_array-from-iterable');
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};

},{"./_array-from-iterable":48,"./_classof":53}],57:[function(require,module,exports){
'use strict';
var global = require('./_global');
var $export = require('./_export');
var meta = require('./_meta');
var fails = require('./_fails');
var hide = require('./_hide');
var redefineAll = require('./_redefine-all');
var forOf = require('./_for-of');
var anInstance = require('./_an-instance');
var isObject = require('./_is-object');
var setToStringTag = require('./_set-to-string-tag');
var dP = require('./_object-dp').f;
var each = require('./_array-methods')(0);
var DESCRIPTORS = require('./_descriptors');

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

},{"./_an-instance":46,"./_array-methods":50,"./_descriptors":62,"./_export":66,"./_fails":67,"./_for-of":68,"./_global":69,"./_hide":71,"./_is-object":78,"./_meta":86,"./_object-dp":91,"./_redefine-all":106,"./_set-to-string-tag":112}],58:[function(require,module,exports){
var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],59:[function(require,module,exports){
'use strict';
var $defineProperty = require('./_object-dp');
var createDesc = require('./_property-desc');

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

},{"./_object-dp":91,"./_property-desc":105}],60:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":44}],61:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],62:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":67}],63:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":69,"./_is-object":78}],64:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],65:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

},{"./_object-gops":96,"./_object-keys":99,"./_object-pie":100}],66:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var ctx = require('./_ctx');
var hide = require('./_hide');
var has = require('./_has');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":58,"./_ctx":60,"./_global":69,"./_has":70,"./_hide":71}],67:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],68:[function(require,module,exports){
var ctx = require('./_ctx');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var anObject = require('./_an-object');
var toLength = require('./_to-length');
var getIterFn = require('./core.get-iterator-method');
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;

},{"./_an-object":47,"./_ctx":60,"./_is-array-iter":76,"./_iter-call":79,"./_to-length":121,"./core.get-iterator-method":130}],69:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],70:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],71:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":62,"./_object-dp":91,"./_property-desc":105}],72:[function(require,module,exports){
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":69}],73:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":62,"./_dom-create":63,"./_fails":67}],74:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

},{}],75:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":54}],76:[function(require,module,exports){
// check on default Array iterator
var Iterators = require('./_iterators');
var ITERATOR = require('./_wks')('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

},{"./_iterators":84,"./_wks":129}],77:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

},{"./_cof":54}],78:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],79:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

},{"./_an-object":47}],80:[function(require,module,exports){
'use strict';
var create = require('./_object-create');
var descriptor = require('./_property-desc');
var setToStringTag = require('./_set-to-string-tag');
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"./_hide":71,"./_object-create":90,"./_property-desc":105,"./_set-to-string-tag":112,"./_wks":129}],81:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var $export = require('./_export');
var redefine = require('./_redefine');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var $iterCreate = require('./_iter-create');
var setToStringTag = require('./_set-to-string-tag');
var getPrototypeOf = require('./_object-gpo');
var ITERATOR = require('./_wks')('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

},{"./_export":66,"./_hide":71,"./_iter-create":80,"./_iterators":84,"./_library":85,"./_object-gpo":97,"./_redefine":107,"./_set-to-string-tag":112,"./_wks":129}],82:[function(require,module,exports){
var ITERATOR = require('./_wks')('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

},{"./_wks":129}],83:[function(require,module,exports){
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],84:[function(require,module,exports){
module.exports = {};

},{}],85:[function(require,module,exports){
module.exports = true;

},{}],86:[function(require,module,exports){
var META = require('./_uid')('meta');
var isObject = require('./_is-object');
var has = require('./_has');
var setDesc = require('./_object-dp').f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !require('./_fails')(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

},{"./_fails":67,"./_has":70,"./_is-object":78,"./_object-dp":91,"./_uid":124}],87:[function(require,module,exports){
var global = require('./_global');
var macrotask = require('./_task').set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = require('./_cof')(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

},{"./_cof":54,"./_global":69,"./_task":117}],88:[function(require,module,exports){
'use strict';
// 25.4.1.5 NewPromiseCapability(C)
var aFunction = require('./_a-function');

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};

},{"./_a-function":44}],89:[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
var toObject = require('./_to-object');
var IObject = require('./_iobject');
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;

},{"./_fails":67,"./_iobject":75,"./_object-gops":96,"./_object-keys":99,"./_object-pie":100,"./_to-object":122}],90:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');
var dPs = require('./_object-dps');
var enumBugKeys = require('./_enum-bug-keys');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":47,"./_dom-create":63,"./_enum-bug-keys":64,"./_html":72,"./_object-dps":92,"./_shared-key":113}],91:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":47,"./_descriptors":62,"./_ie8-dom-define":73,"./_to-primitive":123}],92:[function(require,module,exports){
var dP = require('./_object-dp');
var anObject = require('./_an-object');
var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

},{"./_an-object":47,"./_descriptors":62,"./_object-dp":91,"./_object-keys":99}],93:[function(require,module,exports){
var pIE = require('./_object-pie');
var createDesc = require('./_property-desc');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var has = require('./_has');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

},{"./_descriptors":62,"./_has":70,"./_ie8-dom-define":73,"./_object-pie":100,"./_property-desc":105,"./_to-iobject":120,"./_to-primitive":123}],94:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject');
var gOPN = require('./_object-gopn').f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":95,"./_to-iobject":120}],95:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require('./_object-keys-internal');
var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

},{"./_enum-bug-keys":64,"./_object-keys-internal":98}],96:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;

},{}],97:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');
var toObject = require('./_to-object');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

},{"./_has":70,"./_shared-key":113,"./_to-object":122}],98:[function(require,module,exports){
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_array-includes":49,"./_has":70,"./_shared-key":113,"./_to-iobject":120}],99:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_enum-bug-keys":64,"./_object-keys-internal":98}],100:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;

},{}],101:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export');
var core = require('./_core');
var fails = require('./_fails');
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};

},{"./_core":58,"./_export":66,"./_fails":67}],102:[function(require,module,exports){
// all object keys, includes non-enumerable and symbols
var gOPN = require('./_object-gopn');
var gOPS = require('./_object-gops');
var anObject = require('./_an-object');
var Reflect = require('./_global').Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

},{"./_an-object":47,"./_global":69,"./_object-gopn":95,"./_object-gops":96}],103:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

},{}],104:[function(require,module,exports){
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var newPromiseCapability = require('./_new-promise-capability');

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

},{"./_an-object":47,"./_is-object":78,"./_new-promise-capability":88}],105:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],106:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

},{"./_hide":71}],107:[function(require,module,exports){
module.exports = require('./_hide');

},{"./_hide":71}],108:[function(require,module,exports){
'use strict';
// https://tc39.github.io/proposal-setmap-offrom/
var $export = require('./_export');
var aFunction = require('./_a-function');
var ctx = require('./_ctx');
var forOf = require('./_for-of');

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};

},{"./_a-function":44,"./_ctx":60,"./_export":66,"./_for-of":68}],109:[function(require,module,exports){
'use strict';
// https://tc39.github.io/proposal-setmap-offrom/
var $export = require('./_export');

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};

},{"./_export":66}],110:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object');
var anObject = require('./_an-object');
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

},{"./_an-object":47,"./_ctx":60,"./_is-object":78,"./_object-gopd":93}],111:[function(require,module,exports){
'use strict';
var global = require('./_global');
var core = require('./_core');
var dP = require('./_object-dp');
var DESCRIPTORS = require('./_descriptors');
var SPECIES = require('./_wks')('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};

},{"./_core":58,"./_descriptors":62,"./_global":69,"./_object-dp":91,"./_wks":129}],112:[function(require,module,exports){
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_has":70,"./_object-dp":91,"./_wks":129}],113:[function(require,module,exports){
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":114,"./_uid":124}],114:[function(require,module,exports){
var core = require('./_core');
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: require('./_library') ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});

},{"./_core":58,"./_global":69,"./_library":85}],115:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = require('./_an-object');
var aFunction = require('./_a-function');
var SPECIES = require('./_wks')('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

},{"./_a-function":44,"./_an-object":47,"./_wks":129}],116:[function(require,module,exports){
var toInteger = require('./_to-integer');
var defined = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

},{"./_defined":61,"./_to-integer":119}],117:[function(require,module,exports){
var ctx = require('./_ctx');
var invoke = require('./_invoke');
var html = require('./_html');
var cel = require('./_dom-create');
var global = require('./_global');
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (require('./_cof')(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};

},{"./_cof":54,"./_ctx":60,"./_dom-create":63,"./_global":69,"./_html":72,"./_invoke":74}],118:[function(require,module,exports){
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":119}],119:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],120:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_defined":61,"./_iobject":75}],121:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":119}],122:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":61}],123:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":78}],124:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],125:[function(require,module,exports){
var global = require('./_global');
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';

},{"./_global":69}],126:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

},{"./_is-object":78}],127:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var LIBRARY = require('./_library');
var wksExt = require('./_wks-ext');
var defineProperty = require('./_object-dp').f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

},{"./_core":58,"./_global":69,"./_library":85,"./_object-dp":91,"./_wks-ext":128}],128:[function(require,module,exports){
exports.f = require('./_wks');

},{"./_wks":129}],129:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":69,"./_shared":114,"./_uid":124}],130:[function(require,module,exports){
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

},{"./_classof":53,"./_core":58,"./_iterators":84,"./_wks":129}],131:[function(require,module,exports){
var anObject = require('./_an-object');
var get = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

},{"./_an-object":47,"./_core":58,"./core.get-iterator-method":130}],132:[function(require,module,exports){
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};

},{"./_classof":53,"./_core":58,"./_iterators":84,"./_wks":129}],133:[function(require,module,exports){
'use strict';
var ctx = require('./_ctx');
var $export = require('./_export');
var toObject = require('./_to-object');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var toLength = require('./_to-length');
var createProperty = require('./_create-property');
var getIterFn = require('./core.get-iterator-method');

$export($export.S + $export.F * !require('./_iter-detect')(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

},{"./_create-property":59,"./_ctx":60,"./_export":66,"./_is-array-iter":76,"./_iter-call":79,"./_iter-detect":82,"./_to-length":121,"./_to-object":122,"./core.get-iterator-method":130}],134:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables');
var step = require('./_iter-step');
var Iterators = require('./_iterators');
var toIObject = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"./_add-to-unscopables":45,"./_iter-define":81,"./_iter-step":83,"./_iterators":84,"./_to-iobject":120}],135:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');
var validate = require('./_validate-collection');
var MAP = 'Map';

// 23.1 Map Objects
module.exports = require('./_collection')(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

},{"./_collection":57,"./_collection-strong":55,"./_validate-collection":126}],136:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', { assign: require('./_object-assign') });

},{"./_export":66,"./_object-assign":89}],137:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: require('./_object-create') });

},{"./_export":66,"./_object-create":90}],138:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

},{"./_descriptors":62,"./_export":66,"./_object-dp":91}],139:[function(require,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = require('./_to-iobject');
var $getOwnPropertyDescriptor = require('./_object-gopd').f;

require('./_object-sap')('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

},{"./_object-gopd":93,"./_object-sap":101,"./_to-iobject":120}],140:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./_to-object');
var $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

},{"./_object-gpo":97,"./_object-sap":101,"./_to-object":122}],141:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object');
var $keys = require('./_object-keys');

require('./_object-sap')('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

},{"./_object-keys":99,"./_object-sap":101,"./_to-object":122}],142:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', { setPrototypeOf: require('./_set-proto').set });

},{"./_export":66,"./_set-proto":110}],143:[function(require,module,exports){

},{}],144:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var global = require('./_global');
var ctx = require('./_ctx');
var classof = require('./_classof');
var $export = require('./_export');
var isObject = require('./_is-object');
var aFunction = require('./_a-function');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var speciesConstructor = require('./_species-constructor');
var task = require('./_task').set;
var microtask = require('./_microtask')();
var newPromiseCapabilityModule = require('./_new-promise-capability');
var perform = require('./_perform');
var userAgent = require('./_user-agent');
var promiseResolve = require('./_promise-resolve');
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = require('./_redefine-all')($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
require('./_set-to-string-tag')($Promise, PROMISE);
require('./_set-species')(PROMISE);
Wrapper = require('./_core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

},{"./_a-function":44,"./_an-instance":46,"./_classof":53,"./_core":58,"./_ctx":60,"./_export":66,"./_for-of":68,"./_global":69,"./_is-object":78,"./_iter-detect":82,"./_library":85,"./_microtask":87,"./_new-promise-capability":88,"./_perform":103,"./_promise-resolve":104,"./_redefine-all":106,"./_set-species":111,"./_set-to-string-tag":112,"./_species-constructor":115,"./_task":117,"./_user-agent":125,"./_wks":129}],145:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');
var validate = require('./_validate-collection');
var SET = 'Set';

// 23.2 Set Objects
module.exports = require('./_collection')(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);

},{"./_collection":57,"./_collection-strong":55,"./_validate-collection":126}],146:[function(require,module,exports){
'use strict';
var $at = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

},{"./_iter-define":81,"./_string-at":116}],147:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global = require('./_global');
var has = require('./_has');
var DESCRIPTORS = require('./_descriptors');
var $export = require('./_export');
var redefine = require('./_redefine');
var META = require('./_meta').KEY;
var $fails = require('./_fails');
var shared = require('./_shared');
var setToStringTag = require('./_set-to-string-tag');
var uid = require('./_uid');
var wks = require('./_wks');
var wksExt = require('./_wks-ext');
var wksDefine = require('./_wks-define');
var enumKeys = require('./_enum-keys');
var isArray = require('./_is-array');
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var createDesc = require('./_property-desc');
var _create = require('./_object-create');
var gOPNExt = require('./_object-gopn-ext');
var $GOPD = require('./_object-gopd');
var $DP = require('./_object-dp');
var $keys = require('./_object-keys');
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !require('./_library')) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

},{"./_an-object":47,"./_descriptors":62,"./_enum-keys":65,"./_export":66,"./_fails":67,"./_global":69,"./_has":70,"./_hide":71,"./_is-array":77,"./_is-object":78,"./_library":85,"./_meta":86,"./_object-create":90,"./_object-dp":91,"./_object-gopd":93,"./_object-gopn":95,"./_object-gopn-ext":94,"./_object-gops":96,"./_object-keys":99,"./_object-pie":100,"./_property-desc":105,"./_redefine":107,"./_set-to-string-tag":112,"./_shared":114,"./_to-iobject":120,"./_to-primitive":123,"./_uid":124,"./_wks":129,"./_wks-define":127,"./_wks-ext":128}],148:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
require('./_set-collection-from')('Map');

},{"./_set-collection-from":108}],149:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
require('./_set-collection-of')('Map');

},{"./_set-collection-of":109}],150:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = require('./_export');

$export($export.P + $export.R, 'Map', { toJSON: require('./_collection-to-json')('Map') });

},{"./_collection-to-json":56,"./_export":66}],151:[function(require,module,exports){
// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = require('./_export');
var ownKeys = require('./_own-keys');
var toIObject = require('./_to-iobject');
var gOPD = require('./_object-gopd');
var createProperty = require('./_create-property');

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});

},{"./_create-property":59,"./_export":66,"./_object-gopd":93,"./_own-keys":102,"./_to-iobject":120}],152:[function(require,module,exports){
// https://github.com/tc39/proposal-promise-finally
'use strict';
var $export = require('./_export');
var core = require('./_core');
var global = require('./_global');
var speciesConstructor = require('./_species-constructor');
var promiseResolve = require('./_promise-resolve');

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });

},{"./_core":58,"./_export":66,"./_global":69,"./_promise-resolve":104,"./_species-constructor":115}],153:[function(require,module,exports){
'use strict';
// https://github.com/tc39/proposal-promise-try
var $export = require('./_export');
var newPromiseCapability = require('./_new-promise-capability');
var perform = require('./_perform');

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });

},{"./_export":66,"./_new-promise-capability":88,"./_perform":103}],154:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
require('./_set-collection-from')('Set');

},{"./_set-collection-from":108}],155:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
require('./_set-collection-of')('Set');

},{"./_set-collection-of":109}],156:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = require('./_export');

$export($export.P + $export.R, 'Set', { toJSON: require('./_collection-to-json')('Set') });

},{"./_collection-to-json":56,"./_export":66}],157:[function(require,module,exports){
require('./_wks-define')('asyncIterator');

},{"./_wks-define":127}],158:[function(require,module,exports){
require('./_wks-define')('observable');

},{"./_wks-define":127}],159:[function(require,module,exports){
require('./es6.array.iterator');
var global = require('./_global');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var TO_STRING_TAG = require('./_wks')('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

},{"./_global":69,"./_hide":71,"./_iterators":84,"./_wks":129,"./es6.array.iterator":134}],160:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var fbemitter = {
  EventEmitter: require('./lib/BaseEventEmitter'),
  EmitterSubscription : require('./lib/EmitterSubscription')
};

module.exports = fbemitter;

},{"./lib/BaseEventEmitter":161,"./lib/EmitterSubscription":162}],161:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule BaseEventEmitter
 * @typechecks
 */

'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var EmitterSubscription = require('./EmitterSubscription');
var EventSubscriptionVendor = require('./EventSubscriptionVendor');

var emptyFunction = require('fbjs/lib/emptyFunction');
var invariant = require('fbjs/lib/invariant');

/**
 * @class BaseEventEmitter
 * @description
 * An EventEmitter is responsible for managing a set of listeners and publishing
 * events to them when it is told that such events happened. In addition to the
 * data for the given event it also sends a event control object which allows
 * the listeners/handlers to prevent the default behavior of the given event.
 *
 * The emitter is designed to be generic enough to support all the different
 * contexts in which one might want to emit events. It is a simple multicast
 * mechanism on top of which extra functionality can be composed. For example, a
 * more advanced emitter may use an EventHolder and EventFactory.
 */

var BaseEventEmitter = (function () {
  /**
   * @constructor
   */

  function BaseEventEmitter() {
    _classCallCheck(this, BaseEventEmitter);

    this._subscriber = new EventSubscriptionVendor();
    this._currentSubscription = null;
  }

  /**
   * Adds a listener to be invoked when events of the specified type are
   * emitted. An optional calling context may be provided. The data arguments
   * emitted will be passed to the listener function.
   *
   * TODO: Annotate the listener arg's type. This is tricky because listeners
   *       can be invoked with varargs.
   *
   * @param {string} eventType - Name of the event to listen to
   * @param {function} listener - Function to invoke when the specified event is
   *   emitted
   * @param {*} context - Optional context object to use when invoking the
   *   listener
   */

  BaseEventEmitter.prototype.addListener = function addListener(eventType, listener, context) {
    return this._subscriber.addSubscription(eventType, new EmitterSubscription(this._subscriber, listener, context));
  };

  /**
   * Similar to addListener, except that the listener is removed after it is
   * invoked once.
   *
   * @param {string} eventType - Name of the event to listen to
   * @param {function} listener - Function to invoke only once when the
   *   specified event is emitted
   * @param {*} context - Optional context object to use when invoking the
   *   listener
   */

  BaseEventEmitter.prototype.once = function once(eventType, listener, context) {
    var emitter = this;
    return this.addListener(eventType, function () {
      emitter.removeCurrentListener();
      listener.apply(context, arguments);
    });
  };

  /**
   * Removes all of the registered listeners, including those registered as
   * listener maps.
   *
   * @param {?string} eventType - Optional name of the event whose registered
   *   listeners to remove
   */

  BaseEventEmitter.prototype.removeAllListeners = function removeAllListeners(eventType) {
    this._subscriber.removeAllSubscriptions(eventType);
  };

  /**
   * Provides an API that can be called during an eventing cycle to remove the
   * last listener that was invoked. This allows a developer to provide an event
   * object that can remove the listener (or listener map) during the
   * invocation.
   *
   * If it is called when not inside of an emitting cycle it will throw.
   *
   * @throws {Error} When called not during an eventing cycle
   *
   * @example
   *   var subscription = emitter.addListenerMap({
   *     someEvent: function(data, event) {
   *       console.log(data);
   *       emitter.removeCurrentListener();
   *     }
   *   });
   *
   *   emitter.emit('someEvent', 'abc'); // logs 'abc'
   *   emitter.emit('someEvent', 'def'); // does not log anything
   */

  BaseEventEmitter.prototype.removeCurrentListener = function removeCurrentListener() {
    !!!this._currentSubscription ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Not in an emitting cycle; there is no current subscription') : invariant(false) : undefined;
    this._subscriber.removeSubscription(this._currentSubscription);
  };

  /**
   * Returns an array of listeners that are currently registered for the given
   * event.
   *
   * @param {string} eventType - Name of the event to query
   * @return {array}
   */

  BaseEventEmitter.prototype.listeners = function listeners(eventType) /* TODO: Array<EventSubscription> */{
    var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
    return subscriptions ? subscriptions.filter(emptyFunction.thatReturnsTrue).map(function (subscription) {
      return subscription.listener;
    }) : [];
  };

  /**
   * Emits an event of the given type with the given data. All handlers of that
   * particular type will be notified.
   *
   * @param {string} eventType - Name of the event to emit
   * @param {*} Arbitrary arguments to be passed to each registered listener
   *
   * @example
   *   emitter.addListener('someEvent', function(message) {
   *     console.log(message);
   *   });
   *
   *   emitter.emit('someEvent', 'abc'); // logs 'abc'
   */

  BaseEventEmitter.prototype.emit = function emit(eventType) {
    var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
    if (subscriptions) {
      var keys = Object.keys(subscriptions);
      for (var ii = 0; ii < keys.length; ii++) {
        var key = keys[ii];
        var subscription = subscriptions[key];
        // The subscription may have been removed during this event loop.
        if (subscription) {
          this._currentSubscription = subscription;
          this.__emitToSubscription.apply(this, [subscription].concat(Array.prototype.slice.call(arguments)));
        }
      }
      this._currentSubscription = null;
    }
  };

  /**
   * Provides a hook to override how the emitter emits an event to a specific
   * subscription. This allows you to set up logging and error boundaries
   * specific to your environment.
   *
   * @param {EmitterSubscription} subscription
   * @param {string} eventType
   * @param {*} Arbitrary arguments to be passed to each registered listener
   */

  BaseEventEmitter.prototype.__emitToSubscription = function __emitToSubscription(subscription, eventType) {
    var args = Array.prototype.slice.call(arguments, 2);
    subscription.listener.apply(subscription.context, args);
  };

  return BaseEventEmitter;
})();

module.exports = BaseEventEmitter;
}).call(this,require('_process'))

},{"./EmitterSubscription":162,"./EventSubscriptionVendor":164,"_process":181,"fbjs/lib/emptyFunction":165,"fbjs/lib/invariant":166}],162:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * 
 * @providesModule EmitterSubscription
 * @typechecks
 */

'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventSubscription = require('./EventSubscription');

/**
 * EmitterSubscription represents a subscription with listener and context data.
 */

var EmitterSubscription = (function (_EventSubscription) {
  _inherits(EmitterSubscription, _EventSubscription);

  /**
   * @param {EventSubscriptionVendor} subscriber - The subscriber that controls
   *   this subscription
   * @param {function} listener - Function to invoke when the specified event is
   *   emitted
   * @param {*} context - Optional context object to use when invoking the
   *   listener
   */

  function EmitterSubscription(subscriber, listener, context) {
    _classCallCheck(this, EmitterSubscription);

    _EventSubscription.call(this, subscriber);
    this.listener = listener;
    this.context = context;
  }

  return EmitterSubscription;
})(EventSubscription);

module.exports = EmitterSubscription;
},{"./EventSubscription":163}],163:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventSubscription
 * @typechecks
 */

'use strict';

/**
 * EventSubscription represents a subscription to a particular event. It can
 * remove its own subscription.
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var EventSubscription = (function () {

  /**
   * @param {EventSubscriptionVendor} subscriber the subscriber that controls
   *   this subscription.
   */

  function EventSubscription(subscriber) {
    _classCallCheck(this, EventSubscription);

    this.subscriber = subscriber;
  }

  /**
   * Removes this subscription from the subscriber that controls it.
   */

  EventSubscription.prototype.remove = function remove() {
    if (this.subscriber) {
      this.subscriber.removeSubscription(this);
      this.subscriber = null;
    }
  };

  return EventSubscription;
})();

module.exports = EventSubscription;
},{}],164:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * 
 * @providesModule EventSubscriptionVendor
 * @typechecks
 */

'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var invariant = require('fbjs/lib/invariant');

/**
 * EventSubscriptionVendor stores a set of EventSubscriptions that are
 * subscribed to a particular event type.
 */

var EventSubscriptionVendor = (function () {
  function EventSubscriptionVendor() {
    _classCallCheck(this, EventSubscriptionVendor);

    this._subscriptionsForType = {};
    this._currentSubscription = null;
  }

  /**
   * Adds a subscription keyed by an event type.
   *
   * @param {string} eventType
   * @param {EventSubscription} subscription
   */

  EventSubscriptionVendor.prototype.addSubscription = function addSubscription(eventType, subscription) {
    !(subscription.subscriber === this) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'The subscriber of the subscription is incorrectly set.') : invariant(false) : undefined;
    if (!this._subscriptionsForType[eventType]) {
      this._subscriptionsForType[eventType] = [];
    }
    var key = this._subscriptionsForType[eventType].length;
    this._subscriptionsForType[eventType].push(subscription);
    subscription.eventType = eventType;
    subscription.key = key;
    return subscription;
  };

  /**
   * Removes a bulk set of the subscriptions.
   *
   * @param {?string} eventType - Optional name of the event type whose
   *   registered supscriptions to remove, if null remove all subscriptions.
   */

  EventSubscriptionVendor.prototype.removeAllSubscriptions = function removeAllSubscriptions(eventType) {
    if (eventType === undefined) {
      this._subscriptionsForType = {};
    } else {
      delete this._subscriptionsForType[eventType];
    }
  };

  /**
   * Removes a specific subscription. Instead of calling this function, call
   * `subscription.remove()` directly.
   *
   * @param {object} subscription
   */

  EventSubscriptionVendor.prototype.removeSubscription = function removeSubscription(subscription) {
    var eventType = subscription.eventType;
    var key = subscription.key;

    var subscriptionsForType = this._subscriptionsForType[eventType];
    if (subscriptionsForType) {
      delete subscriptionsForType[key];
    }
  };

  /**
   * Returns the array of subscriptions that are currently registered for the
   * given event type.
   *
   * Note: This array can be potentially sparse as subscriptions are deleted
   * from it when they are removed.
   *
   * TODO: This returns a nullable array. wat?
   *
   * @param {string} eventType
   * @return {?array}
   */

  EventSubscriptionVendor.prototype.getSubscriptionsForType = function getSubscriptionsForType(eventType) {
    return this._subscriptionsForType[eventType];
  };

  return EventSubscriptionVendor;
})();

module.exports = EventSubscriptionVendor;
}).call(this,require('_process'))

},{"_process":181,"fbjs/lib/invariant":166}],165:[function(require,module,exports){
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;
},{}],166:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
}).call(this,require('_process'))

},{"_process":181}],167:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

var emptyFunction = require('./emptyFunction');

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
}).call(this,require('_process'))

},{"./emptyFunction":165,"_process":181}],168:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};
},{}],169:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.locationsAreEqual = exports.createLocation = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _resolvePathname = require('resolve-pathname');

var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

var _valueEqual = require('value-equal');

var _valueEqual2 = _interopRequireDefault(_valueEqual);

var _PathUtils = require('./PathUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = (0, _PathUtils.parsePath)(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
};
},{"./PathUtils":170,"resolve-pathname":217,"value-equal":221}],170:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = exports.hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = exports.stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};
},{}],171:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = require('./LocationUtils');

var _PathUtils = require('./PathUtils');

var _createTransitionManager = require('./createTransitionManager');

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = require('./DOMUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = (0, _DOMUtils.supportsHistory)();
  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + (0, _PathUtils.createPath)(location);
  };

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createBrowserHistory;
},{"./DOMUtils":168,"./LocationUtils":169,"./PathUtils":170,"./createTransitionManager":174,"invariant":177,"warning":222}],172:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = require('./LocationUtils');

var _PathUtils = require('./PathUtils');

var _createTransitionManager = require('./createTransitionManager');

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = require('./DOMUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + (0, _PathUtils.stripLeadingSlash)(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: _PathUtils.stripLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  },
  slash: {
    encodePath: _PathUtils.addLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;


  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && (0, _LocationUtils.locationsAreEqual)(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === (0, _PathUtils.createPath)(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [(0, _PathUtils.createPath)(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + (0, _PathUtils.createPath)(location));
  };

  var push = function push(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        (0, _warning2.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf((0, _PathUtils.createPath)(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    (0, _warning2.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createHashHistory;
},{"./DOMUtils":168,"./LocationUtils":169,"./PathUtils":170,"./createTransitionManager":174,"invariant":177,"warning":222}],173:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _PathUtils = require('./PathUtils');

var _LocationUtils = require('./LocationUtils');

var _createTransitionManager = require('./createTransitionManager');

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};

/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? (0, _LocationUtils.createLocation)(entry, undefined, createKey()) : (0, _LocationUtils.createLocation)(entry, undefined, entry.key || createKey());
  });

  // Public interface

  var createHref = _PathUtils.createPath;

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;

      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

    var action = 'POP';
    var location = history.entries[nextIndex];

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createMemoryHistory;
},{"./LocationUtils":169,"./PathUtils":170,"./createTransitionManager":174,"warning":222}],174:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

exports.default = createTransitionManager;
},{"warning":222}],175:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.createPath = exports.parsePath = exports.locationsAreEqual = exports.createLocation = exports.createMemoryHistory = exports.createHashHistory = exports.createBrowserHistory = undefined;

var _LocationUtils = require('./LocationUtils');

Object.defineProperty(exports, 'createLocation', {
  enumerable: true,
  get: function get() {
    return _LocationUtils.createLocation;
  }
});
Object.defineProperty(exports, 'locationsAreEqual', {
  enumerable: true,
  get: function get() {
    return _LocationUtils.locationsAreEqual;
  }
});

var _PathUtils = require('./PathUtils');

Object.defineProperty(exports, 'parsePath', {
  enumerable: true,
  get: function get() {
    return _PathUtils.parsePath;
  }
});
Object.defineProperty(exports, 'createPath', {
  enumerable: true,
  get: function get() {
    return _PathUtils.createPath;
  }
});

var _createBrowserHistory2 = require('./createBrowserHistory');

var _createBrowserHistory3 = _interopRequireDefault(_createBrowserHistory2);

var _createHashHistory2 = require('./createHashHistory');

var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);

var _createMemoryHistory2 = require('./createMemoryHistory');

var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createBrowserHistory = _createBrowserHistory3.default;
exports.createHashHistory = _createHashHistory3.default;
exports.createMemoryHistory = _createMemoryHistory3.default;
},{"./LocationUtils":169,"./PathUtils":170,"./createBrowserHistory":171,"./createHashHistory":172,"./createMemoryHistory":173}],176:[function(require,module,exports){
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.hoistNonReactStatics = factory());
}(this, (function () {
    'use strict';
    
    var REACT_STATICS = {
        childContextTypes: true,
        contextTypes: true,
        defaultProps: true,
        displayName: true,
        getDefaultProps: true,
        getDerivedStateFromProps: true,
        mixins: true,
        propTypes: true,
        type: true
    };
    
    var KNOWN_STATICS = {
        name: true,
        length: true,
        prototype: true,
        caller: true,
        callee: true,
        arguments: true,
        arity: true
    };
    
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = getPrototypeOf && getPrototypeOf(Object);
    
    return function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
        if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
            
            if (objectPrototype) {
                var inheritedComponent = getPrototypeOf(sourceComponent);
                if (inheritedComponent && inheritedComponent !== objectPrototype) {
                    hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
                }
            }
            
            var keys = getOwnPropertyNames(sourceComponent);
            
            if (getOwnPropertySymbols) {
                keys = keys.concat(getOwnPropertySymbols(sourceComponent));
            }
            
            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                    var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                    try { // Avoid failures from read-only properties
                        defineProperty(targetComponent, key, descriptor);
                    } catch (e) {}
                }
            }
            
            return targetComponent;
        }
        
        return targetComponent;
    };
})));

},{}],177:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))

},{"_process":181}],178:[function(require,module,exports){
module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

},{}],179:[function(require,module,exports){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

'use strict';
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

},{}],180:[function(require,module,exports){
var isarray = require('isarray')

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

},{"isarray":178}],181:[function(require,module,exports){
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

},{}],182:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

if (process.env.NODE_ENV !== 'production') {
  var invariant = require('fbjs/lib/invariant');
  var warning = require('fbjs/lib/warning');
  var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

}).call(this,require('_process'))

},{"./lib/ReactPropTypesSecret":186,"_process":181,"fbjs/lib/invariant":166,"fbjs/lib/warning":167}],183:[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var emptyFunction = require('fbjs/lib/emptyFunction');
var invariant = require('fbjs/lib/invariant');
var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

},{"./lib/ReactPropTypesSecret":186,"fbjs/lib/emptyFunction":165,"fbjs/lib/invariant":166}],184:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var emptyFunction = require('fbjs/lib/emptyFunction');
var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');
var assign = require('object-assign');

var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
var checkPropTypes = require('./checkPropTypes');

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

}).call(this,require('_process'))

},{"./checkPropTypes":182,"./lib/ReactPropTypesSecret":186,"_process":181,"fbjs/lib/emptyFunction":165,"fbjs/lib/invariant":166,"fbjs/lib/warning":167,"object-assign":179}],185:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}

}).call(this,require('_process'))

},{"./factoryWithThrowingShims":183,"./factoryWithTypeCheckers":184,"_process":181}],186:[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

},{}],187:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

},{}],188:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};

},{}],189:[function(require,module,exports){
'use strict';

exports.decode = exports.parse = require('./decode');
exports.encode = exports.stringify = require('./encode');

},{"./decode":187,"./encode":188}],190:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _warning = require("warning");

var _warning2 = _interopRequireDefault(_warning);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _history = require("history");

var _Router = require("./Router");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for a <Router> that uses HTML5 history.
 */
var BrowserRouter = function (_React$Component) {
  _inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _history.createBrowserHistory)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  BrowserRouter.prototype.componentWillMount = function componentWillMount() {
    (0, _warning2.default)(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.");
  };

  BrowserRouter.prototype.render = function render() {
    return _react2.default.createElement(_Router2.default, { history: this.history, children: this.props.children });
  };

  return BrowserRouter;
}(_react2.default.Component);

BrowserRouter.propTypes = {
  basename: _propTypes2.default.string,
  forceRefresh: _propTypes2.default.bool,
  getUserConfirmation: _propTypes2.default.func,
  keyLength: _propTypes2.default.number,
  children: _propTypes2.default.node
};
exports.default = BrowserRouter;
},{"./Router":198,"history":175,"prop-types":185,"react":"react","warning":204}],191:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _warning = require("warning");

var _warning2 = _interopRequireDefault(_warning);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _history = require("history");

var _Router = require("./Router");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for a <Router> that uses window.location.hash.
 */
var HashRouter = function (_React$Component) {
  _inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _history.createHashHistory)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  HashRouter.prototype.componentWillMount = function componentWillMount() {
    (0, _warning2.default)(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.");
  };

  HashRouter.prototype.render = function render() {
    return _react2.default.createElement(_Router2.default, { history: this.history, children: this.props.children });
  };

  return HashRouter;
}(_react2.default.Component);

HashRouter.propTypes = {
  basename: _propTypes2.default.string,
  getUserConfirmation: _propTypes2.default.func,
  hashType: _propTypes2.default.oneOf(["hashbang", "noslash", "slash"]),
  children: _propTypes2.default.node
};
exports.default = HashRouter;
},{"./Router":198,"history":175,"prop-types":185,"react":"react","warning":204}],192:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _invariant = require("invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _history = require("history");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a history-aware <a>.
 */

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;


          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        innerRef = _props.innerRef,
        props = _objectWithoutProperties(_props, ["replace", "to", "innerRef"]); // eslint-disable-line no-unused-vars

    (0, _invariant2.default)(this.context.router, "You should not use <Link> outside a <Router>");

    (0, _invariant2.default)(to !== undefined, 'You must specify the "to" property');

    var history = this.context.router.history;

    var location = typeof to === "string" ? (0, _history.createLocation)(to, null, null, history.location) : to;

    var href = history.createHref(location);
    return _react2.default.createElement("a", _extends({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
  };

  return Link;
}(_react2.default.Component);

Link.propTypes = {
  onClick: _propTypes2.default.func,
  target: _propTypes2.default.string,
  replace: _propTypes2.default.bool,
  to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired,
  innerRef: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
};
Link.defaultProps = {
  replace: false
};
Link.contextTypes = {
  router: _propTypes2.default.shape({
    history: _propTypes2.default.shape({
      push: _propTypes2.default.func.isRequired,
      replace: _propTypes2.default.func.isRequired,
      createHref: _propTypes2.default.func.isRequired
    }).isRequired
  }).isRequired
};
exports.default = Link;
},{"history":175,"invariant":177,"prop-types":185,"react":"react"}],193:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _MemoryRouter = require("react-router/MemoryRouter");

var _MemoryRouter2 = _interopRequireDefault(_MemoryRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _MemoryRouter2.default; // Written in this round about way for babel-transform-imports
},{"react-router/MemoryRouter":206}],194:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Route = require("./Route");

var _Route2 = _interopRequireDefault(_Route);

var _Link = require("./Link");

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      ariaCurrent = _ref["aria-current"],
      rest = _objectWithoutProperties(_ref, ["to", "exact", "strict", "location", "activeClassName", "className", "activeStyle", "style", "isActive", "aria-current"]);

  var path = (typeof to === "undefined" ? "undefined" : _typeof(to)) === "object" ? to.pathname : to;

  // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
  var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");

  return _react2.default.createElement(_Route2.default, {
    path: escapedPath,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return _react2.default.createElement(_Link2.default, _extends({
        to: to,
        className: isActive ? [className, activeClassName].filter(function (i) {
          return i;
        }).join(" ") : className,
        style: isActive ? _extends({}, style, activeStyle) : style,
        "aria-current": isActive && ariaCurrent || null
      }, rest));
    }
  });
};

NavLink.propTypes = {
  to: _Link2.default.propTypes.to,
  exact: _propTypes2.default.bool,
  strict: _propTypes2.default.bool,
  location: _propTypes2.default.object,
  activeClassName: _propTypes2.default.string,
  className: _propTypes2.default.string,
  activeStyle: _propTypes2.default.object,
  style: _propTypes2.default.object,
  isActive: _propTypes2.default.func,
  "aria-current": _propTypes2.default.oneOf(["page", "step", "location", "date", "time", "true"])
};

NavLink.defaultProps = {
  activeClassName: "active",
  "aria-current": "page"
};

exports.default = NavLink;
},{"./Link":192,"./Route":197,"prop-types":185,"react":"react"}],195:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _Prompt = require("react-router/Prompt");

var _Prompt2 = _interopRequireDefault(_Prompt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Prompt2.default; // Written in this round about way for babel-transform-imports
},{"react-router/Prompt":207}],196:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _Redirect = require("react-router/Redirect");

var _Redirect2 = _interopRequireDefault(_Redirect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Redirect2.default; // Written in this round about way for babel-transform-imports
},{"react-router/Redirect":208}],197:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _Route = require("react-router/Route");

var _Route2 = _interopRequireDefault(_Route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Route2.default; // Written in this round about way for babel-transform-imports
},{"react-router/Route":209}],198:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _Router = require("react-router/Router");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Router2.default; // Written in this round about way for babel-transform-imports
},{"react-router/Router":210}],199:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _StaticRouter = require("react-router/StaticRouter");

var _StaticRouter2 = _interopRequireDefault(_StaticRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _StaticRouter2.default; // Written in this round about way for babel-transform-imports
},{"react-router/StaticRouter":211}],200:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _Switch = require("react-router/Switch");

var _Switch2 = _interopRequireDefault(_Switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Switch2.default; // Written in this round about way for babel-transform-imports
},{"react-router/Switch":212}],201:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _generatePath = require("react-router/generatePath");

var _generatePath2 = _interopRequireDefault(_generatePath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _generatePath2.default; // Written in this round about way for babel-transform-imports
},{"react-router/generatePath":213}],202:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.withRouter = exports.matchPath = exports.generatePath = exports.Switch = exports.StaticRouter = exports.Router = exports.Route = exports.Redirect = exports.Prompt = exports.NavLink = exports.MemoryRouter = exports.Link = exports.HashRouter = exports.BrowserRouter = undefined;

var _BrowserRouter2 = require("./BrowserRouter");

var _BrowserRouter3 = _interopRequireDefault(_BrowserRouter2);

var _HashRouter2 = require("./HashRouter");

var _HashRouter3 = _interopRequireDefault(_HashRouter2);

var _Link2 = require("./Link");

var _Link3 = _interopRequireDefault(_Link2);

var _MemoryRouter2 = require("./MemoryRouter");

var _MemoryRouter3 = _interopRequireDefault(_MemoryRouter2);

var _NavLink2 = require("./NavLink");

var _NavLink3 = _interopRequireDefault(_NavLink2);

var _Prompt2 = require("./Prompt");

var _Prompt3 = _interopRequireDefault(_Prompt2);

var _Redirect2 = require("./Redirect");

var _Redirect3 = _interopRequireDefault(_Redirect2);

var _Route2 = require("./Route");

var _Route3 = _interopRequireDefault(_Route2);

var _Router2 = require("./Router");

var _Router3 = _interopRequireDefault(_Router2);

var _StaticRouter2 = require("./StaticRouter");

var _StaticRouter3 = _interopRequireDefault(_StaticRouter2);

var _Switch2 = require("./Switch");

var _Switch3 = _interopRequireDefault(_Switch2);

var _generatePath2 = require("./generatePath");

var _generatePath3 = _interopRequireDefault(_generatePath2);

var _matchPath2 = require("./matchPath");

var _matchPath3 = _interopRequireDefault(_matchPath2);

var _withRouter2 = require("./withRouter");

var _withRouter3 = _interopRequireDefault(_withRouter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BrowserRouter = _BrowserRouter3.default;
exports.HashRouter = _HashRouter3.default;
exports.Link = _Link3.default;
exports.MemoryRouter = _MemoryRouter3.default;
exports.NavLink = _NavLink3.default;
exports.Prompt = _Prompt3.default;
exports.Redirect = _Redirect3.default;
exports.Route = _Route3.default;
exports.Router = _Router3.default;
exports.StaticRouter = _StaticRouter3.default;
exports.Switch = _Switch3.default;
exports.generatePath = _generatePath3.default;
exports.matchPath = _matchPath3.default;
exports.withRouter = _withRouter3.default;
},{"./BrowserRouter":190,"./HashRouter":191,"./Link":192,"./MemoryRouter":193,"./NavLink":194,"./Prompt":195,"./Redirect":196,"./Route":197,"./Router":198,"./StaticRouter":199,"./Switch":200,"./generatePath":201,"./matchPath":203,"./withRouter":205}],203:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _matchPath = require("react-router/matchPath");

var _matchPath2 = _interopRequireDefault(_matchPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _matchPath2.default; // Written in this round about way for babel-transform-imports
},{"react-router/matchPath":214}],204:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule warning
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":181}],205:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _withRouter = require("react-router/withRouter");

var _withRouter2 = _interopRequireDefault(_withRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _withRouter2.default; // Written in this round about way for babel-transform-imports
},{"react-router/withRouter":216}],206:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _warning = require("warning");

var _warning2 = _interopRequireDefault(_warning);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _history = require("history");

var _Router = require("./Router");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for a <Router> that stores location in memory.
 */
var MemoryRouter = function (_React$Component) {
  _inherits(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, MemoryRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _history.createMemoryHistory)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  MemoryRouter.prototype.componentWillMount = function componentWillMount() {
    (0, _warning2.default)(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.");
  };

  MemoryRouter.prototype.render = function render() {
    return _react2.default.createElement(_Router2.default, { history: this.history, children: this.props.children });
  };

  return MemoryRouter;
}(_react2.default.Component);

MemoryRouter.propTypes = {
  initialEntries: _propTypes2.default.array,
  initialIndex: _propTypes2.default.number,
  getUserConfirmation: _propTypes2.default.func,
  keyLength: _propTypes2.default.number,
  children: _propTypes2.default.node
};
exports.default = MemoryRouter;
},{"./Router":210,"history":175,"prop-types":185,"react":"react","warning":215}],207:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _invariant = require("invariant");

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for prompting the user before navigating away
 * from a screen with a component.
 */
var Prompt = function (_React$Component) {
  _inherits(Prompt, _React$Component);

  function Prompt() {
    _classCallCheck(this, Prompt);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Prompt.prototype.enable = function enable(message) {
    if (this.unblock) this.unblock();

    this.unblock = this.context.router.history.block(message);
  };

  Prompt.prototype.disable = function disable() {
    if (this.unblock) {
      this.unblock();
      this.unblock = null;
    }
  };

  Prompt.prototype.componentWillMount = function componentWillMount() {
    (0, _invariant2.default)(this.context.router, "You should not use <Prompt> outside a <Router>");

    if (this.props.when) this.enable(this.props.message);
  };

  Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.when) {
      if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
    } else {
      this.disable();
    }
  };

  Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
    this.disable();
  };

  Prompt.prototype.render = function render() {
    return null;
  };

  return Prompt;
}(_react2.default.Component);

Prompt.propTypes = {
  when: _propTypes2.default.bool,
  message: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]).isRequired
};
Prompt.defaultProps = {
  when: true
};
Prompt.contextTypes = {
  router: _propTypes2.default.shape({
    history: _propTypes2.default.shape({
      block: _propTypes2.default.func.isRequired
    }).isRequired
  }).isRequired
};
exports.default = Prompt;
},{"invariant":177,"prop-types":185,"react":"react"}],208:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = require("warning");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = require("invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _history = require("history");

var _generatePath = require("./generatePath");

var _generatePath2 = _interopRequireDefault(_generatePath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for updating the location programmatically
 * with a component.
 */
var Redirect = function (_React$Component) {
  _inherits(Redirect, _React$Component);

  function Redirect() {
    _classCallCheck(this, Redirect);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Redirect.prototype.isStatic = function isStatic() {
    return this.context.router && this.context.router.staticContext;
  };

  Redirect.prototype.componentWillMount = function componentWillMount() {
    (0, _invariant2.default)(this.context.router, "You should not use <Redirect> outside a <Router>");

    if (this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidMount = function componentDidMount() {
    if (!this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var prevTo = (0, _history.createLocation)(prevProps.to);
    var nextTo = (0, _history.createLocation)(this.props.to);

    if ((0, _history.locationsAreEqual)(prevTo, nextTo)) {
      (0, _warning2.default)(false, "You tried to redirect to the same route you're currently on: " + ("\"" + nextTo.pathname + nextTo.search + "\""));
      return;
    }

    this.perform();
  };

  Redirect.prototype.computeTo = function computeTo(_ref) {
    var computedMatch = _ref.computedMatch,
        to = _ref.to;

    if (computedMatch) {
      if (typeof to === "string") {
        return (0, _generatePath2.default)(to, computedMatch.params);
      } else {
        return _extends({}, to, {
          pathname: (0, _generatePath2.default)(to.pathname, computedMatch.params)
        });
      }
    }

    return to;
  };

  Redirect.prototype.perform = function perform() {
    var history = this.context.router.history;
    var push = this.props.push;

    var to = this.computeTo(this.props);

    if (push) {
      history.push(to);
    } else {
      history.replace(to);
    }
  };

  Redirect.prototype.render = function render() {
    return null;
  };

  return Redirect;
}(_react2.default.Component);

Redirect.propTypes = {
  computedMatch: _propTypes2.default.object, // private, from <Switch>
  push: _propTypes2.default.bool,
  from: _propTypes2.default.string,
  to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
};
Redirect.defaultProps = {
  push: false
};
Redirect.contextTypes = {
  router: _propTypes2.default.shape({
    history: _propTypes2.default.shape({
      push: _propTypes2.default.func.isRequired,
      replace: _propTypes2.default.func.isRequired
    }).isRequired,
    staticContext: _propTypes2.default.object
  }).isRequired
};
exports.default = Redirect;
},{"./generatePath":213,"history":175,"invariant":177,"prop-types":185,"react":"react","warning":215}],209:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = require("warning");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = require("invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _matchPath = require("./matchPath");

var _matchPath2 = _interopRequireDefault(_matchPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isEmptyChildren = function isEmptyChildren(children) {
  return _react2.default.Children.count(children) === 0;
};

/**
 * The public API for matching a single path and rendering.
 */

var Route = function (_React$Component) {
  _inherits(Route, _React$Component);

  function Route() {
    var _temp, _this, _ret;

    _classCallCheck(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props, _this.context.router)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Route.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        route: {
          location: this.props.location || this.context.router.route.location,
          match: this.state.match
        }
      })
    };
  };

  Route.prototype.computeMatch = function computeMatch(_ref, router) {
    var computedMatch = _ref.computedMatch,
        location = _ref.location,
        path = _ref.path,
        strict = _ref.strict,
        exact = _ref.exact,
        sensitive = _ref.sensitive;

    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

    (0, _invariant2.default)(router, "You should not use <Route> or withRouter() outside a <Router>");

    var route = router.route;

    var pathname = (location || route.location).pathname;

    return (0, _matchPath2.default)(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }, route.match);
  };

  Route.prototype.componentWillMount = function componentWillMount() {
    (0, _warning2.default)(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored");

    (0, _warning2.default)(!(this.props.component && this.props.children && !isEmptyChildren(this.props.children)), "You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored");

    (0, _warning2.default)(!(this.props.render && this.props.children && !isEmptyChildren(this.props.children)), "You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored");
  };

  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    (0, _warning2.default)(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    (0, _warning2.default)(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

    this.setState({
      match: this.computeMatch(nextProps, nextContext.router)
    });
  };

  Route.prototype.render = function render() {
    var match = this.state.match;
    var _props = this.props,
        children = _props.children,
        component = _props.component,
        render = _props.render;
    var _context$router = this.context.router,
        history = _context$router.history,
        route = _context$router.route,
        staticContext = _context$router.staticContext;

    var location = this.props.location || route.location;
    var props = { match: match, location: location, history: history, staticContext: staticContext };

    if (component) return match ? _react2.default.createElement(component, props) : null;

    if (render) return match ? render(props) : null;

    if (typeof children === "function") return children(props);

    if (children && !isEmptyChildren(children)) return _react2.default.Children.only(children);

    return null;
  };

  return Route;
}(_react2.default.Component);

Route.propTypes = {
  computedMatch: _propTypes2.default.object, // private, from <Switch>
  path: _propTypes2.default.string,
  exact: _propTypes2.default.bool,
  strict: _propTypes2.default.bool,
  sensitive: _propTypes2.default.bool,
  component: _propTypes2.default.func,
  render: _propTypes2.default.func,
  children: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node]),
  location: _propTypes2.default.object
};
Route.contextTypes = {
  router: _propTypes2.default.shape({
    history: _propTypes2.default.object.isRequired,
    route: _propTypes2.default.object.isRequired,
    staticContext: _propTypes2.default.object
  })
};
Route.childContextTypes = {
  router: _propTypes2.default.object.isRequired
};
exports.default = Route;
},{"./matchPath":214,"invariant":177,"prop-types":185,"react":"react","warning":215}],210:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = require("warning");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = require("invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for putting history on context.
 */
var Router = function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router() {
    var _temp, _this, _ret;

    _classCallCheck(this, Router);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props.history.location.pathname)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Router.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        history: this.props.history,
        route: {
          location: this.props.history.location,
          match: this.state.match
        }
      })
    };
  };

  Router.prototype.computeMatch = function computeMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        history = _props.history;


    (0, _invariant2.default)(children == null || _react2.default.Children.count(children) === 1, "A <Router> may have only one child element");

    // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.
    this.unlisten = history.listen(function () {
      _this2.setState({
        match: _this2.computeMatch(history.location.pathname)
      });
    });
  };

  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    (0, _warning2.default)(this.props.history === nextProps.history, "You cannot change <Router history>");
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Router.prototype.render = function render() {
    var children = this.props.children;

    return children ? _react2.default.Children.only(children) : null;
  };

  return Router;
}(_react2.default.Component);

Router.propTypes = {
  history: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.node
};
Router.contextTypes = {
  router: _propTypes2.default.object
};
Router.childContextTypes = {
  router: _propTypes2.default.object.isRequired
};
exports.default = Router;
},{"invariant":177,"prop-types":185,"react":"react","warning":215}],211:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = require("warning");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = require("invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _history = require("history");

var _Router = require("./Router");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
};

var addBasename = function addBasename(basename, location) {
  if (!basename) return location;

  return _extends({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
};

var stripBasename = function stripBasename(basename, location) {
  if (!basename) return location;

  var base = addLeadingSlash(basename);

  if (location.pathname.indexOf(base) !== 0) return location;

  return _extends({}, location, {
    pathname: location.pathname.substr(base.length)
  });
};

var createURL = function createURL(location) {
  return typeof location === "string" ? location : (0, _history.createPath)(location);
};

var staticHandler = function staticHandler(methodName) {
  return function () {
    (0, _invariant2.default)(false, "You cannot %s with <StaticRouter>", methodName);
  };
};

var noop = function noop() {};

/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */

var StaticRouter = function (_React$Component) {
  _inherits(StaticRouter, _React$Component);

  function StaticRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, StaticRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
      return addLeadingSlash(_this.props.basename + createURL(path));
    }, _this.handlePush = function (location) {
      var _this$props = _this.props,
          basename = _this$props.basename,
          context = _this$props.context;

      context.action = "PUSH";
      context.location = addBasename(basename, (0, _history.createLocation)(location));
      context.url = createURL(context.location);
    }, _this.handleReplace = function (location) {
      var _this$props2 = _this.props,
          basename = _this$props2.basename,
          context = _this$props2.context;

      context.action = "REPLACE";
      context.location = addBasename(basename, (0, _history.createLocation)(location));
      context.url = createURL(context.location);
    }, _this.handleListen = function () {
      return noop;
    }, _this.handleBlock = function () {
      return noop;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  StaticRouter.prototype.getChildContext = function getChildContext() {
    return {
      router: {
        staticContext: this.props.context
      }
    };
  };

  StaticRouter.prototype.componentWillMount = function componentWillMount() {
    (0, _warning2.default)(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.");
  };

  StaticRouter.prototype.render = function render() {
    var _props = this.props,
        basename = _props.basename,
        context = _props.context,
        location = _props.location,
        props = _objectWithoutProperties(_props, ["basename", "context", "location"]);

    var history = {
      createHref: this.createHref,
      action: "POP",
      location: stripBasename(basename, (0, _history.createLocation)(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };

    return _react2.default.createElement(_Router2.default, _extends({}, props, { history: history }));
  };

  return StaticRouter;
}(_react2.default.Component);

StaticRouter.propTypes = {
  basename: _propTypes2.default.string,
  context: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
};
StaticRouter.defaultProps = {
  basename: "",
  location: "/"
};
StaticRouter.childContextTypes = {
  router: _propTypes2.default.object.isRequired
};
exports.default = StaticRouter;
},{"./Router":210,"history":175,"invariant":177,"prop-types":185,"react":"react","warning":215}],212:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = require("warning");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = require("invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _matchPath = require("./matchPath");

var _matchPath2 = _interopRequireDefault(_matchPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for rendering the first <Route> that matches.
 */
var Switch = function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch() {
    _classCallCheck(this, Switch);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Switch.prototype.componentWillMount = function componentWillMount() {
    (0, _invariant2.default)(this.context.router, "You should not use <Switch> outside a <Router>");
  };

  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    (0, _warning2.default)(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    (0, _warning2.default)(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
  };

  Switch.prototype.render = function render() {
    var route = this.context.router.route;
    var children = this.props.children;

    var location = this.props.location || route.location;

    var match = void 0,
        child = void 0;
    _react2.default.Children.forEach(children, function (element) {
      if (match == null && _react2.default.isValidElement(element)) {
        var _element$props = element.props,
            pathProp = _element$props.path,
            exact = _element$props.exact,
            strict = _element$props.strict,
            sensitive = _element$props.sensitive,
            from = _element$props.from;

        var path = pathProp || from;

        child = element;
        match = (0, _matchPath2.default)(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }, route.match);
      }
    });

    return match ? _react2.default.cloneElement(child, { location: location, computedMatch: match }) : null;
  };

  return Switch;
}(_react2.default.Component);

Switch.contextTypes = {
  router: _propTypes2.default.shape({
    route: _propTypes2.default.object.isRequired
  }).isRequired
};
Switch.propTypes = {
  children: _propTypes2.default.node,
  location: _propTypes2.default.object
};
exports.default = Switch;
},{"./matchPath":214,"invariant":177,"prop-types":185,"react":"react","warning":215}],213:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _pathToRegexp = require("path-to-regexp");

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compileGenerator = function compileGenerator(pattern) {
  var cacheKey = pattern;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var compiledGenerator = _pathToRegexp2.default.compile(pattern);

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledGenerator;
    cacheCount++;
  }

  return compiledGenerator;
};

/**
 * Public API for generating a URL pathname from a pattern and parameters.
 */
var generatePath = function generatePath() {
  var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (pattern === "/") {
    return pattern;
  }
  var generator = compileGenerator(pattern);
  return generator(params, { pretty: true });
};

exports.default = generatePath;
},{"path-to-regexp":180}],214:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _pathToRegexp = require("path-to-regexp");

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compilePath = function compilePath(pattern, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var keys = [];
  var re = (0, _pathToRegexp2.default)(pattern, keys, options);
  var compiledPattern = { re: re, keys: keys };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};

/**
 * Public API for matching a URL pathname to a path pattern.
 */
var matchPath = function matchPath(pathname) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var parent = arguments[2];

  if (typeof options === "string") options = { path: options };

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === undefined ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === undefined ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === undefined ? false : _options$sensitive;


  if (path == null) return parent;

  var _compilePath = compilePath(path, { end: exact, strict: strict, sensitive: sensitive }),
      re = _compilePath.re,
      keys = _compilePath.keys;

  var match = re.exec(pathname);

  if (!match) return null;

  var url = match[0],
      values = match.slice(1);

  var isExact = pathname === url;

  if (exact && !isExact) return null;

  return {
    path: path, // the path pattern used to match
    url: path === "/" && url === "" ? "/" : url, // the matched portion of the URL
    isExact: isExact, // whether or not we matched exactly
    params: keys.reduce(function (memo, key, index) {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
};

exports.default = matchPath;
},{"path-to-regexp":180}],215:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule warning
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":181}],216:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = require("hoist-non-react-statics");

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _Route = require("./Route");

var _Route2 = _interopRequireDefault(_Route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * A public higher-order component to access the imperative API
 */
var withRouter = function withRouter(Component) {
  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutProperties(props, ["wrappedComponentRef"]);

    return _react2.default.createElement(_Route2.default, {
      children: function children(routeComponentProps) {
        return _react2.default.createElement(Component, _extends({}, remainingProps, routeComponentProps, {
          ref: wrappedComponentRef
        }));
      }
    });
  };

  C.displayName = "withRouter(" + (Component.displayName || Component.name) + ")";
  C.WrappedComponent = Component;
  C.propTypes = {
    wrappedComponentRef: _propTypes2.default.func
  };

  return (0, _hoistNonReactStatics2.default)(C, Component);
};

exports.default = withRouter;
},{"./Route":209,"hoist-non-react-statics":176,"prop-types":185,"react":"react"}],217:[function(require,module,exports){
'use strict';

exports.__esModule = true;
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

exports.default = resolvePathname;
module.exports = exports['default'];
},{}],218:[function(require,module,exports){
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;

},{}],219:[function(require,module,exports){
// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && msCrypto.getRandomValues.bind(msCrypto));
if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

},{}],220:[function(require,module,exports){
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;

},{"./lib/bytesToUuid":218,"./lib/rng":219}],221:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

exports.default = valueEqual;
module.exports = exports['default'];
},{}],222:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":181}],223:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _models = require('../models');

var models = _interopRequireWildcard(_models);

var _apis = require('../apis');

var _utils = require('../utils');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function actionGenerator(name, act) {
  var n = name + '_' + act;
  return function (payload) {
    return function (dispatch) {
      dispatch({ type: n, payload: payload });
      return new _promise2.default(function (resolve, reject) {
        resolve({ type: n, payload: payload });
      });
    };
  };
}
function apiActionGenerator(name, act, uri, method, filter, type) {
  var n = name + '_' + act;
  return function (params, payload) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return function (dispatch) {
      dispatch({ type: n + '_Pending' });
      var api = _apis.apis['' + n],
          apicall = method == 'post' ? api.apply(undefined, [payload, params].concat(args)) : api.apply(undefined, [params, payload].concat(args));
      return apicall.then(function (res) {
        dispatch({ type: n + '_Success', payload: res.data, response: res });
        return res;
      }).catch(function (res) {
        dispatch({ type: n + '_Failure', payload: res.data, response: res });
        return _promise2.default.reject(res);
      });
    };
  };
}

var basicActions = {
  Error: 'Error',
  Load: 'Load',
  Clear: 'Clear', Save: 'Save', Unload: 'Unload',
  LoadAll: 'LoadAll',
  SaveAll: 'SaveAll',
  Loadmore: 'Loadmore',
  Reset: 'Reset', Search: 'Search', Select: 'Select'
};
var actions = {};
(0, _keys2.default)(models).map(function (name) {
  var model = models[name] || {},
      acts = (0, _extends3.default)({}, basicActions, model.acts || {});
  (0, _keys2.default)(acts).map(function (act) {
    var value = acts[act];
    if (value.indexOf('api') == 0) {
      var _value$split = value.split('|'),
          _value$split2 = (0, _slicedToArray3.default)(_value$split, 5),
          api = _value$split2[0],
          method = _value$split2[1],
          filter = _value$split2[2],
          type = _value$split2[3],
          uri = _value$split2[4];

      actions[name + '_' + act] = apiActionGenerator(name, act, uri, method, filter == 'true', type);
    } else {
      actions[name + '_' + act] = actionGenerator(name, act);
    }
  });
});
exports.actions = actions;

},{"../apis":227,"../models":275,"../utils":314,"babel-runtime/core-js/object/keys":12,"babel-runtime/core-js/promise":14,"babel-runtime/helpers/extends":21,"babel-runtime/helpers/slicedToArray":25}],224:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, act, uri, method, filter, type) {
  switch (name + "_" + act) {}
};

},{}],225:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function (name, act, uri, method, filter, type) {
  switch (name + '_' + act) {
    case name + '_SignUp':
      {
        if (config.firebase) {
          return function (queryParams, postParams, headers) {
            return firebase.auth().createUserWithEmailAndPassword(postParams.email, postParams.password).then(function (res) {
              var user = res.user,
                  uid = user.uid;
              if (uid) {
                var state = _store.store.getState()[name];
                var data = state.fields.reduce(function (rs, k) {
                  rs[k] = postParams[k] || '';
                  return rs;
                }, {});
                return firebase.database().ref('users/' + uid).set((0, _extends3.default)({}, data, { uid: uid, username: uid })).then(function (e) {
                  return user.sendEmailVerification();
                }).then(function (e) {
                  return _promise2.default.resolve({ status: 200, data: data });
                });
              } else return firebase.auth().signOut().then(function (e) {
                return _promise2.default.reject({ status: 400, data: { code: 'UserNotRegistered', message: 'User is not registered successfully' } });
              });
            }).catch(function (err) {
              return _promise2.default.reject({ status: 400, data: err });
            });
          };
        }
      }
    case name + '_SignIn':
      {
        if (config.firebase) {
          return function (queryParams, postParams, headers) {
            return firebase.auth().signInWithEmailAndPassword(postParams.email, postParams.password).then(function (res) {
              var user = res.user,
                  uid = user.uid,
                  emailVerified = user.emailVerified;
              if (!emailVerified) return _promise2.default.reject({ message: 'You have not verified your email.' });else return _promise2.default.resolve({ status: 200, data: user });
            }).catch(function (err) {
              return _promise2.default.reject({ status: 400, data: err });
            });
          };
        }
      }
    case name + '_SignOut':
      {
        if (config.firebase) {
          return function (queryParams, postParams, headers) {
            return firebase.auth().signOut();
          };
        }
      }
  }
};

var _store = require('../../store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"../../store":307,"babel-runtime/core-js/promise":14,"babel-runtime/helpers/extends":21}],226:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Application = require('./Application');

Object.defineProperty(exports, 'Application', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Application).default;
  }
});

var _User = require('./User');

Object.defineProperty(exports, 'User', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_User).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./Application":224,"./User":225}],227:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apis = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _models = require('../models');

var models = _interopRequireWildcard(_models);

var _store = require('../store');

var _utils = require('../utils');

var _custom = require('./custom');

var custom = _interopRequireWildcard(_custom);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function apiGetGenerator(name, act, uri, method, filter, type) {
  if (custom[name]) {
    var api = custom[name](name, act, uri, method, filter, type);
    if (api) return api;
  }
  return function (queryParams, postParams, headers) {
    var o = (0, _utils.apiurl)(uri),
        ourl = (0, _utils.url)(o, (0, _utils.query)(queryParams));
    var state = _store.store.getState()[name],
        actState = state[act] || {};
    if (filter) queryParams = (0, _extends3.default)({}, actState.filter, queryParams);
    if (method == 'post' && type == 'form') {
      return _utils.apiCall.post(ourl, (0, _utils.query)(postParams), { headers: (0, _extends3.default)({}, _utils.apiCall.defaults.headers, {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }) });
    }
    return _utils.apiCall[method](ourl, postParams);
  };
}

var apis = {};
(0, _keys2.default)(models).map(function (name) {
  var model = models[name] || {},
      acts = model.acts || {};
  (0, _keys2.default)(acts).map(function (act) {
    var value = acts[act];
    if (value.indexOf('api') == 0) {
      var _value$split = value.split('|'),
          _value$split2 = (0, _slicedToArray3.default)(_value$split, 5),
          api = _value$split2[0],
          method = _value$split2[1],
          filter = _value$split2[2],
          type = _value$split2[3],
          uri = _value$split2[4];

      apis[name + '_' + act] = apiGetGenerator(name, act, uri, method, filter == 'true', type);
    }
  });
});

exports.apis = apis;

},{"../models":275,"../store":307,"../utils":314,"./custom":226,"babel-runtime/core-js/object/keys":12,"babel-runtime/helpers/extends":21,"babel-runtime/helpers/slicedToArray":25}],228:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Application = exports.regCmps = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _reactRouter = require('react-router');

var _actions = require('../actions');

var _store = require('../store');

var _routes = require('../routes');

var _loaders = require('../loaders');

var _utils = require('../utils');

var _emitter = require('../emitter');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var regCmps = exports.regCmps = new _map2.default();

var Application = exports.Application = function () {
  function Application() {
    var _this = this;

    (0, _classCallCheck3.default)(this, Application);

    this.facebook_sdk_init = function (e) {
      if (!config.facebook) return;

      var _ref = e ? e.detail || [] : [],
          _ref2 = (0, _slicedToArray3.default)(_ref, 2),
          cb = _ref2[0],
          t = _ref2[1];

      new _loaders.JsLoader('//connect.facebook.net/en_US/sdk.js', 'facebook-sdk', cb, t).set('callback_name', 'fbAsyncInit').load();
    };

    this.google_platform_init = function (e) {
      if (!config.google || !config.google.clientId) return;

      var _ref3 = e ? e.detail || [] : [],
          _ref4 = (0, _slicedToArray3.default)(_ref3, 2),
          cb = _ref4[0],
          t = _ref4[1];

      new _loaders.MetaLoader(config.google.clientId, 'google-signin-client_id').load();
      new _loaders.JsLoader('//apis.google.com/js/client:platform.js?onload=google_platform_loaded', 'google-platform', cb, t).load();
    };

    this.google_maps_api_init = function (e) {
      if (!config.google || !config.google.apiKey) return;

      var _ref5 = e ? e.detail || [] : [],
          _ref6 = (0, _slicedToArray3.default)(_ref5, 2),
          cb = _ref6[0],
          t = _ref6[1];

      new _loaders.JsLoader('//maps.googleapis.com/maps/api/js?key=' + config.google.apiKey + '&libraries=places&callback=google_maps_api_callback', 'google-maps-api', cb, t).load();
    };

    this.unload = function (e) {
      (0, _keys2.default)(_this.events.app).map(function (o) {
        return _this.events.app[o].remove();
      });
      (0, _keys2.default)(_this.events.window).map(function (o) {
        return window.removeEventListener(o, _this.events.window[o]);
      });
    };

    this.refresh = function (e) {
      return _this.render();
    };

    this.resize = function (e) {
      return _this.refresh();
    };

    this.cmp_mounted = function (cmp) {
      return _this.regCmps.set(cmp.cmpId, cmp);
    };

    this.cmp_unmounted = function (cmp) {
      return _this.regCmps.delete(cmp.cmpId);
    };

    this.beforeRender = function (e) {
      _this.facebook_sdk_init();
      _this.google_platform_init();
      _this.google_maps_api_init();
    };

    this.afterRender = function (e) {
      if (config.theme) jQuery('body').addClass(config.theme);
      _this.events = {
        app: {
          unload: _emitter.emitter.addListener('unload', _this.unload),
          // resize: emitter.addListener('resize', this.resize),
          refresh: _emitter.emitter.addListener('refresh', _this.refresh),
          cmp_mounted: _emitter.emitter.addListener('cmp_mounted', _this.cmp_mounted),
          cmp_unmounted: _emitter.emitter.addListener('cmp_unmounted', _this.cmp_unmounted)
        },
        window: {
          unload: function unload() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            return _emitter.emitter.emit.apply(_emitter.emitter, ['unload'].concat(args));
          },
          resize: function resize() {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            return _emitter.emitter.emit.apply(_emitter.emitter, ['resize'].concat(args));
          }
        }
      };
      (0, _keys2.default)(_this.events.window).map(function (o) {
        return window.addEventListener(o, _this.events.window[o]);
      });
    };
  }

  (0, _createClass3.default)(Application, [{
    key: 'render',
    value: function render() {
      this.beforeRender();
      if (!this.store) {
        throw 'No store provided';
        return;
      }
      if (!this.routes) {
        throw 'No routes provided';
        return;
      }
      if (!this.container) {
        throw 'No container provided';
        return;
      }
      _reactDom2.default.render(_react2.default.createElement(
        _reactRedux.Provider,
        { store: this.store },
        _react2.default.createElement(
          _reactRouterRedux.ConnectedRouter,
          { history: _utils.history },
          _react2.default.createElement(
            _reactRouter.Switch,
            null,
            this.routes
          )
        )
      ), this.container, this.afterRender);
    }
  }, {
    key: 'dispatch',
    value: function dispatch() {
      this.render();
    }
  }, {
    key: 'regCmps',
    get: function get() {
      return regCmps;
    }
  }, {
    key: 'container',
    get: function get() {
      return document.getElementById(this.__container || config.container || 'application');
    },
    set: function set(v) {
      this.__container = v;
    }
  }, {
    key: 'store',
    get: function get() {
      return this.__store || _store.store;
    },
    set: function set(v) {
      this.__store = v;
    }
  }, {
    key: 'routes',
    get: function get() {
      return this.__routes || _routes.routes;
    },
    set: function set(v) {
      this.__routes = v;
    }
  }]);
  return Application;
}();

},{"../actions":223,"../emitter":265,"../loaders":267,"../routes":306,"../store":307,"../utils":314,"babel-runtime/core-js/map":5,"babel-runtime/core-js/object/keys":12,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/slicedToArray":25,"react":"react","react-dom":"react-dom","react-redux":"react-redux","react-router":"react-router","react-router-redux":"react-router-redux"}],229:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function (_Component) {
  (0, _inherits3.default)(Button, _Component);

  function Button() {
    (0, _classCallCheck3.default)(this, Button);
    return (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).apply(this, arguments));
  }

  (0, _createClass3.default)(Button, [{
    key: 'renderChildren',
    value: function renderChildren() {
      return this.props.children || this.props.title || this.props.label || this.props.text;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'button',
        (0, _extends3.default)({}, this.props, { type: this.props.type || 'button', className: this.className, onClick: this.onClick }),
        this.children
      );
    }
  }, {
    key: 'cmpClassName',
    get: function get() {
      return 'button ' + (this.props.disabled ? 'disabled' : '');
    }
  }]);
  return Button;
}(_Component3.default);

exports.default = Button;

},{"./Component":230,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/extends":21,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],230:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Spinner = require('./Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Message = require('./Message');

var _Message2 = _interopRequireDefault(_Message);

var _apis = require('../apis');

var _emitter = require('../emitter');

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uuid = utils.uuid;

var Component = function (_RAComponent) {
  (0, _inherits3.default)(Component, _RAComponent);

  function Component(props) {
    (0, _classCallCheck3.default)(this, Component);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Component.__proto__ || (0, _getPrototypeOf2.default)(Component)).call(this, props));

    _this.onClick = function () {
      var _this$props;

      return _this.props.onClick ? (_this$props = _this.props).onClick.apply(_this$props, arguments) : false;
    };

    _this.state = _this.initialState();
    return _this;
  }

  (0, _createClass3.default)(Component, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.dom) this.dom.ezy = this;
      if (this.api) this.apiCall();
    }
  }, {
    key: 'UNSAFE_componentWillUpdate',
    value: function UNSAFE_componentWillUpdate(nextProps, nextState) {
      (0, _assign2.default)(this.state, this.User);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState, snapshot) {}
  }, {
    key: 'initialState',
    value: function initialState() {
      return this.state = (0, _extends3.default)({}, this.User, {
        loading: false,
        error: false, message: false, uuid: uuid(),
        api: this.props.api,
        apiParams: this.props.apiParams,
        apiMethod: this.props.apiMethod || 'get',
        apiDataType: this.props.apiDataType,
        apiSuccess: this.props.apiSuccess,
        apiFailure: this.props.apiFailure
      });
    }
  }, {
    key: 'setAttr',
    value: function setAttr(n, v) {
      this.state[n] = v;
      this.refreshing = true;
    }
  }, {
    key: 'apiCall',
    value: function apiCall() {
      var _this2 = this;

      var uri = this.utils.apiurl(this.api),
          method = this.apiMethod,
          params = this.apiParams,
          type = this.apiDataType,
          apiCall = this.utils.apiCall;
      if (method == 'get') uri = this.utils.url(uri, this.utils.query({ params: params }));
      if (method == 'post' && type == 'form') {
        return apiCall.post(uri, this.utils.query(params), { headers: (0, _extends3.default)({}, apiCall.defaults.headers, {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          }) });
      }
      return apiCall[method](uri, params).then(function (res) {
        if (_this2.apiSuccess) _this2.apiSuccess(res.data);
        return res;
      }).catch(function (res) {
        if (_this2.apiFailure) _this2.apiFailure(res.data);
        return res;
      });
    }
  }, {
    key: 'refresh',
    value: function refresh() {
      this.refreshing = true;
    }
  }, {
    key: 'renderError',
    value: function renderError() {
      return this.error ? _react2.default.createElement(
        _Message2.default,
        { error: true, key: 'error' },
        this.error
      ) : null;
    }
  }, {
    key: 'renderMessage',
    value: function renderMessage() {
      return this.message ? _react2.default.createElement(
        _Message2.default,
        { key: 'message' },
        this.message
      ) : null;
    }
  }, {
    key: 'renderLoading',
    value: function renderLoading(size) {
      return _react2.default.createElement(_Spinner2.default, { size: size });
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      return this.props.children;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, this.props.id ? { id: this.props.id } : {}, { className: this.className, onClick: this.onClick }),
        this.children
      );
    }
  }, {
    key: 'klass',
    get: function get() {
      return this.constructor.name;
    }
  }, {
    key: 'config',
    get: function get() {
      return config;
    }
  }, {
    key: 'fname',
    get: function get() {
      return this.state.fname;
    }
  }, {
    key: 'lname',
    get: function get() {
      return this.state.lname;
    }
  }, {
    key: 'fullname',
    get: function get() {
      return this.state.fullname;
    }
  }, {
    key: 'email',
    get: function get() {
      return this.state.email;
    }
  }, {
    key: 'phoneNumber',
    get: function get() {
      return this.state.phoneNumber;
    }
  }, {
    key: 'nationality',
    get: function get() {
      return this.state.nationality;
    }
  }, {
    key: 'displayName',
    get: function get() {
      return this.state.displayName || this.state.fullname || [this.state.fname, this.state.lname].filter(function (o) {
        return o;
      }).join(' ');
    }
  }, {
    key: 'avatar',
    get: function get() {
      return this.state.avatar;
    }
  }, {
    key: 'apis',
    get: function get() {
      return _apis.apis;
    }
  }, {
    key: 'actions',
    get: function get() {
      return this.props.actions;
    }
  }, {
    key: 'User',
    get: function get() {
      return this.props.User && this.props.User.User || {};
    }
  }, {
    key: 'UserFields',
    get: function get() {
      return this.props.User && this.props.User.fields || [];
    }
  }, {
    key: 'logged',
    get: function get() {
      return this.User.email && this.User.token;
    }
  }, {
    key: 'error',
    get: function get() {
      return this.state.error;
    }
  }, {
    key: 'message',
    get: function get() {
      return this.state.message;
    }
  }, {
    key: 'utils',
    get: function get() {
      return utils;
    }
  }, {
    key: 'log',
    get: function get() {
      return utils.log;
    }
  }, {
    key: 'open',
    get: function get() {
      return function (url) {
        return utils.history.push(url);
      };
    }
  }, {
    key: 'openNewTab',
    get: function get() {
      return utils.openNewTab;
    }
  }, {
    key: 'refreshing',
    get: function get() {
      return this.state.refreshing || false;
    },
    set: function set(v) {
      var _this3 = this;

      if (v) this.forceUpdate(function (e) {
        return _this3.state.refreshing = false;
      });
    }
  }, {
    key: 'cmpId',
    get: function get() {
      return null;
    }
  }, {
    key: 'uuid',
    get: function get() {
      return this.state.uuid;
    }
  }, {
    key: 'cmpClassName',
    get: function get() {
      return '';
    }
  }, {
    key: 'className',
    get: function get() {
      return (this.cmpClassName || '') + ' ' + (this.props.className || '') + ' ' + (this.cmpId || '');
    }
  }, {
    key: 'dom',
    get: function get() {
      return _reactDom2.default.findDOMNode(this);
    }
  }, {
    key: 'id',
    get: function get() {
      return this.props.id;
    }
  }, {
    key: 'children',
    get: function get() {
      var children = this.renderChildren();
      if (Array.isArray(children)) {
        children = children.filter(function (o) {
          return o;
        });
        if (!children.length) children = null;
      }
      return children;
    }
  }, {
    key: 'api',
    get: function get() {
      return this.state.api;
    },
    set: function set(v) {
      if (v != this.state.api) this.setAttr('api', v);
    }
  }, {
    key: 'apiParams',
    get: function get() {
      return this.state.apiParams;
    },
    set: function set(v) {
      if (v != this.state.apiParams) this.setAttr('apiParams', v);
    }
  }, {
    key: 'apiMethod',
    get: function get() {
      return this.state.apiMethod;
    },
    set: function set(v) {
      if (v != this.state.apiMethod) this.setAttr('apiMethod', v);
    }
  }, {
    key: 'apiDataType',
    get: function get() {
      return this.state.apiDataType;
    },
    set: function set(v) {
      if (v != this.state.apiDataType) this.setAttr('apiDataType', v);
    }
  }, {
    key: 'apiSuccess',
    get: function get() {
      return this.state.apiSuccess;
    },
    set: function set(v) {
      if (v != this.state.apiSuccess) this.setAttr('apiSuccess', v);
    }
  }, {
    key: 'apiFailure',
    get: function get() {
      return this.state.apiFailure;
    },
    set: function set(v) {
      if (v != this.state.apiFailure) this.setAttr('apiFailure', v);
    }
  }]);
  return Component;
}(_react.Component);

exports.default = Component;

},{"../apis":227,"../emitter":265,"../utils":314,"./Message":246,"./Spinner":255,"babel-runtime/core-js/object/assign":6,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/extends":21,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react","react-dom":"react-dom"}],231:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContactUs = function (_Component) {
  (0, _inherits3.default)(ContactUs, _Component);

  function ContactUs() {
    (0, _classCallCheck3.default)(this, ContactUs);
    return (0, _possibleConstructorReturn3.default)(this, (ContactUs.__proto__ || (0, _getPrototypeOf2.default)(ContactUs)).apply(this, arguments));
  }

  (0, _createClass3.default)(ContactUs, [{
    key: 'initialState',
    value: function initialState() {
      return this.state = (0, _extends3.default)({}, (0, _get3.default)(ContactUs.prototype.__proto__ || (0, _getPrototypeOf2.default)(ContactUs.prototype), 'initialState', this).call(this), {
        name: this.props.name, email: this.props.email, mobile: this.props.mobile, company: this.props.company, subject: this.props.subject, body: this.props.body
      });
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'form' },
        _react2.default.createElement(_Input2.default, { autocomplete: 'off', ref: function ref(e) {
            return _this2.name = e;
          }, value: this.state.email, placeholder: 'Your name (required)', onChange: function onChange(e) {
            return _this2.setState({ name: e.target.value });
          } }),
        _react2.default.createElement(_Input2.default, { autocomplete: 'off', ref: function ref(e) {
            return _this2.email = e;
          }, type: 'email', value: this.state.email, placeholder: 'Email', onChange: function onChange(e) {
            return _this2.setState({ email: e.target.value });
          } }),
        _react2.default.createElement(_Input2.default, { autocomplete: 'off', ref: function ref(e) {
            return _this2.mobile = e;
          }, value: this.state.email, placeholder: 'Your mobile (required)', onChange: function onChange(e) {
            return _this2.setState({ mobile: e.target.value });
          } }),
        _react2.default.createElement(_Input2.default, { autocomplete: 'off', ref: function ref(e) {
            return _this2.company = e;
          }, value: this.state.email, placeholder: 'Your company (required)', onChange: function onChange(e) {
            return _this2.setState({ company: e.target.value });
          } }),
        _react2.default.createElement(_Input2.default, { autocomplete: 'off', ref: function ref(e) {
            return _this2.subject = e;
          }, value: this.state.email, placeholder: 'Your subject (required)', onChange: function onChange(e) {
            return _this2.setState({ subject: e.target.value });
          } }),
        _react2.default.createElement(_Input2.default, { autocomplete: 'off', ref: function ref(e) {
            return _this2.body = e;
          }, type: 'textarea', value: this.state.email, placeholder: 'Your message (required)', onChange: function onChange(e) {
            return _this2.setState({ body: e.target.value });
          } }),
        _react2.default.createElement(
          _Button2.default,
          { onClick: function onClick(e) {
              return _this2.onClickSignUp();
            } },
          'Confirm'
        )
      );
    }
  }, {
    key: 'cmpClassName',
    get: function get() {
      return 'contact-us';
    }
  }]);
  return ContactUs;
}(_Component3.default);

exports.default = (0, _utils.connect)(ContactUs);

},{"../utils":314,"./Button":229,"./Component":230,"./Form":236,"./Input":238,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/extends":21,"babel-runtime/helpers/get":22,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],232:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = function (_Component) {
  (0, _inherits3.default)(Content, _Component);

  function Content() {
    (0, _classCallCheck3.default)(this, Content);
    return (0, _possibleConstructorReturn3.default)(this, (Content.__proto__ || (0, _getPrototypeOf2.default)(Content)).apply(this, arguments));
  }

  (0, _createClass3.default)(Content, [{
    key: 'cmpClassName',
    get: function get() {
      return 'content';
    }
  }]);
  return Content;
}(_Component3.default);

exports.default = (0, _utils.connect)(Content);

},{"../utils":314,"./Component":230,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],233:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Copyright = function (_Component) {
  (0, _inherits3.default)(Copyright, _Component);

  function Copyright() {
    (0, _classCallCheck3.default)(this, Copyright);
    return (0, _possibleConstructorReturn3.default)(this, (Copyright.__proto__ || (0, _getPrototypeOf2.default)(Copyright)).apply(this, arguments));
  }

  (0, _createClass3.default)(Copyright, [{
    key: 'renderChildren',
    value: function renderChildren() {
      return _react2.default.createElement(
        'span',
        null,
        '@ ',
        this.config.AppName,
        ' ',
        _react2.default.createElement(
          'span',
          { className: 'year' },
          new Date().getFullYear()
        )
      );
    }
  }, {
    key: 'cmpClassName',
    get: function get() {
      return 'copyright';
    }
  }]);
  return Copyright;
}(_Component3.default);

exports.default = Copyright;

},{"./Component":230,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],234:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _Logo = require('./Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _Space = require('./Space');

var _Space2 = _interopRequireDefault(_Space);

var _Copyright = require('./Copyright');

var _Copyright2 = _interopRequireDefault(_Copyright);

var _SocialShare = require('./SocialShare');

var _SocialShare2 = _interopRequireDefault(_SocialShare);

var _ContactUs = require('./ContactUs');

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function (_Component) {
  (0, _inherits3.default)(Footer, _Component);

  function Footer() {
    (0, _classCallCheck3.default)(this, Footer);
    return (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).apply(this, arguments));
  }

  (0, _createClass3.default)(Footer, [{
    key: 'renderChildren',
    value: function renderChildren() {
      var _this2 = this;

      return [_react2.default.createElement(_Logo2.default, { className: 'small' }), _react2.default.createElement(_Copyright2.default, null), _react2.default.createElement(
        'div',
        { className: 'contact-us-link', onClick: function onClick(e) {
            return _this2.actions.Application_AddModal({ header: 'Contact Us', content: _react2.default.createElement(_ContactUs2.default, null) });
          } },
        'Contact Us'
      ), _react2.default.createElement(
        'a',
        { className: 'mailto-link', href: 'mailto://' + this.config.emails.support },
        'E-mail us'
      ), _react2.default.createElement(_Space2.default, null), _react2.default.createElement(_SocialShare2.default, null)];
    }
  }, {
    key: 'cmpClassName',
    get: function get() {
      return 'footer';
    }
  }]);
  return Footer;
}(_Component3.default);

exports.default = (0, _utils.connect)(Footer);

},{"../utils":314,"./Component":230,"./ContactUs":231,"./Copyright":233,"./Logo":244,"./SocialShare":253,"./Space":254,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],235:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _InputCountry = require('./InputCountry');

var _InputCountry2 = _interopRequireDefault(_InputCountry);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ForgotPassword = function (_Component) {
  (0, _inherits3.default)(ForgotPassword, _Component);

  function ForgotPassword() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ForgotPassword);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ForgotPassword.__proto__ || (0, _getPrototypeOf2.default)(ForgotPassword)).call.apply(_ref, [this].concat(args))), _this), _this.emailValid = function (e) {
      if (_this.utils.validateEmail(_this.state.email)) {
        _this.emailInput.error = null;
        return true;
      }
      _this.emailInput.error = 'Email is invalid';
    }, _this.onClickSwitchForm = function (v) {
      return _this.actions.Application_SwitchForm(v);
    }, _this.showError = function (err) {
      return _this.actions.Application_AddModal({ header: 'Error!', content: _react2.default.createElement(
          'p',
          null,
          'Some error occurred: ',
          _react2.default.createElement(
            'span',
            { className: 'red-text' },
            err && err.message || ''
          ),
          _react2.default.createElement('br', null),
          ' Please try again.'
        ) });
    }, _this.showSuccess = function (e) {
      return _this.actions.Application_AddModal({ header: 'Congratulation!', content: _react2.default.createElement(
          'p',
          null,
          'A reset password email has been sent to ',
          _react2.default.createElement(
            'span',
            { className: 'red-text' },
            _this.state.email
          ),
          '. Thanks'
        ) });
    }, _this.onClickForgotPassword = function (e) {
      var valid = _this.emailValid();
      if (valid) {
        if (_this.config.firebase) {
          firebase.auth().sendPasswordResetEmail(_this.state.email).then(function (res) {
            return _this.showSuccess();
          }).catch(function (err) {
            return _this.showError(err);
          });
        } else _this.actions.User_ForgotPassword(_this.state).then(function (e) {
          if (e.status == 200) _this.showSuccess();else _this.showError(e);
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ForgotPassword, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: this.className },
        _react2.default.createElement(
          'div',
          { className: 'heading' },
          'Forgot Password'
        ),
        _react2.default.createElement(
          _Form2.default,
          { autofill: 'off' },
          _react2.default.createElement(_Input2.default, { ref: function ref(e) {
              return _this2.emailInput = e;
            }, type: 'email', value: this.state.email,
            required: true, name: 'email',
            label: 'What is your email address?',
            placeholder: 'Email Address', onChange: function onChange(e) {
              return _this2.setState({ email: e.target.value });
            } }),
          _react2.default.createElement(
            'div',
            { className: 'actions' },
            _react2.default.createElement(
              _Button2.default,
              { className: 'btn-submit', onClick: function onClick(e) {
                  return _this2.onClickForgotPassword();
                } },
              'Submit'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'switch' },
          _react2.default.createElement(
            'span',
            { onClick: function onClick(e) {
                return _this2.onClickSwitchForm('signin');
              } },
            'Sign in'
          ),
          _react2.default.createElement(
            'span',
            { onClick: function onClick(e) {
                return _this2.onClickSwitchForm('signup');
              } },
            'Sign up'
          )
        )
      );
    }
  }, {
    key: 'cmpClassName',
    get: function get() {
      return 'forgot-password';
    }
  }]);
  return ForgotPassword;
}(_Component3.default);

exports.default = (0, _utils.connect)(ForgotPassword);

},{"../utils":314,"./Button":229,"./Component":230,"./Form":236,"./Input":238,"./InputCountry":239,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],236:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = function (_Component) {
  (0, _inherits3.default)(Form, _Component);

  function Form() {
    (0, _classCallCheck3.default)(this, Form);
    return (0, _possibleConstructorReturn3.default)(this, (Form.__proto__ || (0, _getPrototypeOf2.default)(Form)).apply(this, arguments));
  }

  (0, _createClass3.default)(Form, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        (0, _extends3.default)({}, this.props, { className: this.className, onClick: this.onClick }),
        this.children
      );
    }
  }, {
    key: 'cmpClassName',
    get: function get() {
      return 'form';
    }
  }]);
  return Form;
}(_Component3.default);

exports.default = Form;

},{"./Component":230,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/extends":21,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],237:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _Logo = require('./Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Space = require('./Space');

var _Space2 = _interopRequireDefault(_Space);

var _UserBox = require('./UserBox');

var _UserBox2 = _interopRequireDefault(_UserBox);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);
    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _get3.default)(Header.prototype.__proto__ || (0, _getPrototypeOf2.default)(Header.prototype), 'componentDidMount', this).call(this);
      if (!this.props.Application.Menus.loaded) this.actions.Application_Menus();
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      return this.props.children || [_react2.default.createElement(_Logo2.default, null), _react2.default.createElement(_Space2.default, null), _react2.default.createElement(_Menu2.default, { className: 'top', items: this.props.Application.Menus.top }), _react2.default.createElement(_UserBox2.default, null)];
    }
  }, {
    key: 'cmpClassName',
    get: function get() {
      return 'header';
    }
  }]);
  return Header;
}(_Component3.default);

exports.default = (0, _utils.connect)(Header);

},{"../utils":314,"./Component":230,"./Logo":244,"./Menu":245,"./Space":254,"./UserBox":261,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/get":22,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],238:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function (_Component) {
  (0, _inherits3.default)(Input, _Component);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).call.apply(_ref, [this].concat(args))), _this), _this.getLabel = function (o) {
      return o && (o.name || o.label || o.title) || '';
    }, _this.onChange = function (e) {
      var text = e.target.value;
      if (_this.type == 'select') {
        var options = [].concat(_this.state.options);
        _this.optionsShown = true;
        if (!text) options.map(function (o) {
          return o.hidden = false;
        });else options.map(function (o) {
          return o.hidden = !_this.getLabel(o).toLowerCase().includes(text.toLowerCase());
        });
      } else _this.value = e.target.value;
    }, _this.onFocus = function (e) {
      if (_this.type == 'select') _this.optionsShown = true;
      if (_this.props.onClick) _this.props.onClick(e);
    }, _this.onBlur = function (e) {
      setTimeout(function (e) {
        if (_this.type == 'select') _this.optionsShown = false;
        if (_this.props.onClick) _this.props.onClick(e);
      }, 100);
    }, _this.onClickOption = function (e, o) {
      e.preventDefault();
      e.stopPropagation();
      _this.value = o.value;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Input, [{
    key: 'initialState',
    value: function initialState() {
      this.state = (0, _extends3.default)({}, (0, _get3.default)(Input.prototype.__proto__ || (0, _getPrototypeOf2.default)(Input.prototype), 'initialState', this).call(this), {
        optionsShown: false,
        options: this.props.options,
        value: this.props.value || this.props.defaultValue,
        type: this.props.type || 'text',
        isPassword: this.props.type == 'password',
        textField: this.props.textField || 'name',
        valueField: this.props.valueField || 'value'
      });
      return this.state;
    }
  }, {
    key: 'renderLabel',
    value: function renderLabel() {
      var _this2 = this;

      var label = this.props.label || this.props.title || this.props.text;
      return label ? _react2.default.createElement(
        'div',
        { className: 'label', onClick: function onClick(e) {
            return _this2.input.focus();
          } },
        label,
        this.required ? ' (*)' : ''
      ) : null;
    }
  }, {
    key: 'renderDescription',
    value: function renderDescription() {
      var _this3 = this;

      var description = this.props.description;
      return description ? _react2.default.createElement(
        'div',
        { className: 'description', onClick: function onClick(e) {
            return _this3.input.focus();
          } },
        description
      ) : null;
    }
  }, {
    key: 'renderHint',
    value: function renderHint() {
      var hint = this.props.hint || this.props.tooltip;
      return hint ? _react2.default.createElement(
        'div',
        { className: 'hint' },
        hint
      ) : null;
    }
  }, {
    key: 'renderError',
    value: function renderError() {
      return typeof this.error == 'string' ? _react2.default.createElement(
        'div',
        { className: 'error' },
        this.error
      ) : null;
    }
  }, {
    key: 'renderOption',
    value: function renderOption(o) {
      var _this4 = this;

      return _react2.default.createElement(
        'div',
        { className: 'option ' + (this.selected && this.selected.name == o.name ? 'selected' : ''), onClick: function onClick(e) {
            _this4.onClickOption(e, o);
          } },
        this.getLabel(o)
      );
    }
  }, {
    key: 'renderOptions',
    value: function renderOptions() {
      var _this5 = this;

      if (this.type != 'select' || !this.optionsShown) return null;
      return _react2.default.createElement(
        'div',
        { className: 'options' },
        this.options.map(function (o) {
          return _this5.renderOption(o);
        })
      );
    }
  }, {
    key: 'renderIcon',
    value: function renderIcon() {
      var _this6 = this;

      if (!this.isPassword) return null;
      return _react2.default.createElement(
        'i',
        { onClick: function onClick(e) {
            return _this6.setState({ type: _this6.type == 'password' ? 'text' : 'password' });
          }, className: 'material-icons' },
        'remove_red_eye'
      );
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _this7 = this;

      return [this.renderLabel(), this.renderDescription(), _react2.default.createElement(
        'div',
        { className: 'field-wrapper' },
        this.type == 'textarea' ? _react2.default.createElement('textarea', (0, _extends3.default)({}, this.utils.exclude(this.props, 'type', 'className', 'placeholder', 'onChange'), {
          className: 'field',
          placeholder: this.placeholder,
          value: this.value,
          onChange: this.onChange,
          ref: function ref(e) {
            return _this7.input = e;
          }
        })) : _react2.default.createElement('input', (0, _extends3.default)({}, this.utils.exclude(this.props, 'type', 'className', 'placeholder', 'onChange'), {
          className: 'field',
          placeholder: this.placeholder,
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          onChange: this.onChange,
          value: this.type == 'select' ? this.selected.name : this.value,
          type: this.type == 'select' ? 'text' : this.type,
          ref: function ref(e) {
            return _this7.input = e;
          }
        })),
        this.renderHint(),
        this.renderError(),
        this.renderOptions(),
        this.renderIcon()
      )];
    }
  }, {
    key: 'cmpClassName',
    get: function get() {
      var rs = ['input', this.type];
      rs.push(this.error ? 'invalid' : 'valid');
      if (this.optionsShown) rs.push('options-shown');
      if (this.isPassword && this.type != 'password') rs.push('password-shown');
      return rs.join(' ');
    }
  }, {
    key: 'isPassword',
    get: function get() {
      return this.state.isPassword;
    }
  }, {
    key: 'type',
    get: function get() {
      return this.state.type;
    },
    set: function set(v) {
      this.setState({ type: v });
    }
  }, {
    key: 'required',
    get: function get() {
      return this.props.required !== undefined && this.props.required !== false && this.props.required !== null;
    }
  }, {
    key: 'placeholder',
    get: function get() {
      return this.props.placeholder ? this.props.placeholder + ' ' + (this.required ? '(required)' : '') : '';
    }
  }, {
    key: 'error',
    get: function get() {
      return this.state.error;
    },
    set: function set(v) {
      this.setState({ error: v });
    }
  }, {
    key: 'value',
    get: function get() {
      return this.state.value;
    },
    set: function set(v) {
      this.state.value = v;
      this.state.error = null;
      this.refreshing = true;
      if (this.props.onChange) this.props.onChange({ target: (0, _extends3.default)({}, this.selected, { value: v }) });
    }
  }, {
    key: 'optionsShown',
    get: function get() {
      return this.state.optionsShown;
    },
    set: function set(v) {
      this.setAttr('optionsShown', v);
    }
  }, {
    key: 'textField',
    get: function get() {
      return this.state.textField;
    },
    set: function set(v) {
      this.setAttr('textField', v);
    }
  }, {
    key: 'valueField',
    get: function get() {
      return this.state.valueField;
    },
    set: function set(v) {
      this.setAttr('valueField', v);
    }
  }, {
    key: 'selected',
    get: function get() {
      var _this8 = this;

      return this.options.find(function (o) {
        return o.value == _this8.state.value;
      }) || {};
    }
  }, {
    key: 'options',
    get: function get() {
      return [].concat(this.state.options).filter(function (o) {
        return o && !o.hidden;
      });
    },
    set: function set(v) {
      this.setAttr('options', v);
    }
  }, {
    key: 'apiSuccess',
    get: function get() {
      var _this9 = this;

      return function (data) {
        if (_this9.type == 'select') {
          _this9.options = [].concat(data).filter(function (o) {
            return o;
          }).map(function (o) {
            return { name: o[_this9.textField], value: o[_this9.valueField], origin: o };
          });
        }
      };
    }
  }]);
  return Input;
}(_Component3.default);

exports.default = Input;

},{"./Component":230,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/extends":21,"babel-runtime/helpers/get":22,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],239:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input2 = require('./Input');

var _Input3 = _interopRequireDefault(_Input2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputCountry = function (_Input) {
  (0, _inherits3.default)(InputCountry, _Input);

  function InputCountry() {
    (0, _classCallCheck3.default)(this, InputCountry);
    return (0, _possibleConstructorReturn3.default)(this, (InputCountry.__proto__ || (0, _getPrototypeOf2.default)(InputCountry)).apply(this, arguments));
  }

  (0, _createClass3.default)(InputCountry, [{
    key: 'type',
    get: function get() {
      return 'select';
    }
  }, {
    key: 'textField',
    get: function get() {
      return 'name';
    }
  }, {
    key: 'valueField',
    get: function get() {
      return 'alpha3Code';
    }
  }, {
    key: 'api',
    get: function get() {
      return this.config.api.countries;
    }
  }]);
  return InputCountry;
}(_Input3.default);

exports.default = InputCountry;

},{"./Input":238,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],240:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input2 = require('./Input');

var _Input3 = _interopRequireDefault(_Input2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputDate = function (_Input) {
  (0, _inherits3.default)(InputDate, _Input);

  function InputDate() {
    (0, _classCallCheck3.default)(this, InputDate);
    return (0, _possibleConstructorReturn3.default)(this, (InputDate.__proto__ || (0, _getPrototypeOf2.default)(InputDate)).apply(this, arguments));
  }

  (0, _createClass3.default)(InputDate, [{
    key: 'type',
    get: function get() {
      return 'date';
    }
  }]);
  return InputDate;
}(_Input3.default);

exports.default = InputDate;

},{"./Input":238,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],241:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _Logo = require('./Logo');

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Introduction = function (_Component) {
  (0, _inherits3.default)(Introduction, _Component);

  function Introduction() {
    (0, _classCallCheck3.default)(this, Introduction);
    return (0, _possibleConstructorReturn3.default)(this, (Introduction.__proto__ || (0, _getPrototypeOf2.default)(Introduction)).apply(this, arguments));
  }

  (0, _createClass3.default)(Introduction, [{
    key: 'renderChildren',
    value: function renderChildren() {
      return [
      // <Logo className='small'/>,
      _react2.default.createElement('div', { className: 'text', dangerouslySetInnerHTML: { __html: 'Single account<br/> and one-stop KYC for all ICOs' } })];
    }
  }, {
    key: 'cmpClassName',
    get: function get() {
      return 'introduction';
    }
  }]);
  return Introduction;
}(_Component3.default);

exports.default = Introduction;

},{"./Component":230,"./Logo":244,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],242:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Logo = require('./Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _UserBox = require('./UserBox');

var _UserBox2 = _interopRequireDefault(_UserBox);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Left = function (_Component) {
  (0, _inherits3.default)(Left, _Component);

  function Left() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Left);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Left.__proto__ || (0, _getPrototypeOf2.default)(Left)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
      if (_this.utils.isMobile()) {
        e.preventDefault();
        e.stopPropagation();
        _this.state.showing = !_this.state.showing;
        var left = jQuery(_this.dom);
        if (_this.state.showing) left.addClass('open').show('slide', { direction: 'right' }, 500);else left.hide('slide', { direction: 'left' }, 500, function (e) {
          return left.removeClass('open').show();
        });
      }
    }, _this.onClickCollapse = function (e) {
      e.preventDefault();
      e.stopPropagation();
      _this.state.collapsed = !_this.state.collapsed;
      var o = jQuery(_this.dom),
          menu = o.find('.menu.menu0');
      var duration = _this.config.leftMenuAnimationDuration;
      var cb = function cb(e) {
        o.find('.collapsing-icon').text(_this.state.collapsed ? 'arrow_forward' : 'arrow_back');
        o.toggleClass('collapsed').show('slow');
      };
      if (_this.state.collapsed) o.hide('slide', { direction: 'left' }, 500, cb);else o.show('slide', { direction: 'left' }, 1000, cb);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Left, [{
    key: 'initialState',
    value: function initialState() {
      return this.state = (0, _extends3.default)({}, (0, _get3.default)(Left.prototype.__proto__ || (0, _getPrototypeOf2.default)(Left.prototype), 'initialState', this).call(this), {
        collapsed: false,
        showing: false
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _get3.default)(Left.prototype.__proto__ || (0, _getPrototypeOf2.default)(Left.prototype), 'componentDidMount', this).call(this);
      if (this.utils.isMobile()) {
        var left = jQuery(this.dom);
        left.draggable({ containment: 'parent', axis: 'x' });
      }
    }
  }, {
    key: 'renderLeftContent',
    value: function renderLeftContent() {
      return _react2.default.createElement(_Menu2.default, { items: this.items });
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _this2 = this;

      return [!this.showing ? _react2.default.createElement(
        'i',
        { onClick: function onClick(e) {
            return _this2.onClick(e);
          }, className: 'material-icons mobile menu-icon' },
        'menu'
      ) : null, _react2.default.createElement(
        'i',
        { onClick: function onClick(e) {
            return _this2.onClickCollapse(e);
          }, className: 'material-icons collapsing-icon' },
        this.state.collapsed ? 'arrow_forward' : 'arrow_back'
      ), _react2.default.createElement(
        'div',
        { className: 'wrapper' },
        _react2.default.createElement(
          'div',
          { className: 'mobile' },
          _react2.default.createElement(_Logo2.default, null),
          _react2.default.createElement(_UserBox2.default, null)
        ),
        this.renderLeftContent()
      )].filter(function (o) {
        return o;
      });
    }
  }, {
    key: 'collapsed',
    get: function get() {
      return this.state.collapsed;
    },
    set: function set(v) {
      this.setAttr('collapsed', v);
    }
  }, {
    key: 'showing',
    get: function get() {
      return this.state.showing;
    },
    set: function set(v) {
      this.setAttr('showing', v);
    }
  }, {
    key: 'items',
    get: function get() {
      return [].concat(this.props.items).filter(function (o) {
        return o;
      });
    }
  }, {
    key: 'cmpClassName',
    get: function get() {
      return 'left ' + (this.showing ? 'open' : '');
    }
  }]);
  return Left;
}(_Component3.default);

exports.default = (0, _utils.connect)(Left);

},{"../utils":314,"./Component":230,"./Logo":244,"./Menu":245,"./UserBox":261,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/extends":21,"babel-runtime/helpers/get":22,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],243:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LineChart = function (_Component) {
  (0, _inherits3.default)(LineChart, _Component);

  function LineChart() {
    (0, _classCallCheck3.default)(this, LineChart);
    return (0, _possibleConstructorReturn3.default)(this, (LineChart.__proto__ || (0, _getPrototypeOf2.default)(LineChart)).apply(this, arguments));
  }

  (0, _createClass3.default)(LineChart, [{
    key: 'initialState',
    value: function initialState() {
      return this.state = (0, _extends3.default)({}, (0, _get3.default)(LineChart.prototype.__proto__ || (0, _getPrototypeOf2.default)(LineChart.prototype), 'initialState', this).call(this), {
        id: this.props.id || 'linechart',
        data: this.props.data,
        height: this.props.height,
        width: this.props.width,
        margin: this.props.width
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _get3.default)(LineChart.prototype.__proto__ || (0, _getPrototypeOf2.default)(LineChart.prototype), 'componentDidMount', this).call(this);
      linechart(this);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      (0, _get3.default)(LineChart.prototype.__proto__ || (0, _getPrototypeOf2.default)(LineChart.prototype), 'componentDidUpdate', this).call(this, prevProps, prevState, snapshot);
      linechart(this);
    }
  }, {
    key: 'cmpClassName',
    get: function get() {
      return 'chart linechart';
    }
  }, {
    key: 'id',
    get: function get() {
      return this.state.id;
    },
    set: function set(v) {
      this.setAttr('id', v);
    }
  }, {
    key: 'data',
    get: function get() {
      return [].concat(this.state.data).filter(function (o) {
        return o;
      });
    },
    set: function set(v) {
      this.setAttr('data', v);
    }
  }, {
    key: 'width',
    get: function get() {
      return this.state.width;
    },
    set: function set(v) {
      this.setAttr('width', v);
    }
  }, {
    key: 'height',
    get: function get() {
      return this.state.height;
    },
    set: function set(v) {
      this.setAttr('height', v);
    }
  }, {
    key: 'margin',
    get: function get() {
      return this.state.margin;
    },
    set: function set(v) {
      this.setAttr('margin', v);
    }
  }]);
  return LineChart;
}(_Component3.default);

exports.default = LineChart;

},{"../utils":314,"./Component":230,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/extends":21,"babel-runtime/helpers/get":22,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],244:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logo = function (_Component) {
  (0, _inherits3.default)(Logo, _Component);

  function Logo() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Logo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Logo.__proto__ || (0, _getPrototypeOf2.default)(Logo)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
      return location.pathname != _this.config.apppath ? _this.open(_this.config.apppath) : false;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Logo, [{
    key: 'renderChildren',
    value: function renderChildren() {
      return this.props.showName ? this.config.AppName : null;
    }
  }, {
    key: 'cmpClassName',
    get: function get() {
      return 'logo';
    }
  }]);
  return Logo;
}(_Component3.default);

exports.default = Logo;

},{"./Component":230,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],245:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var trim = function trim(s) {
  return (typeof s == 'string' ? s : '').trim().replace(/^\//g, '').replace(/\/$/g, '');
};

var Menu = function (_Component) {
  (0, _inherits3.default)(Menu, _Component);

  function Menu() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).call.apply(_ref, [this].concat(args))), _this), _this.nodeUrl = function (n) {
      return _this.utils.url(_this.utils.baseurl(trim('' + _this.root + (n.url || ''))));
    }, _this.nodeClassName = function (n) {
      var url = _this.nodeUrl(n),
          path = trim(location.pathname);
      n.active = url == location.href || [url].concat(n.active).filter(function (o) {
        return o;
      }).reduce(function (rs, o) {
        if (!rs) rs = path == o || path == trim(o);
        return rs;
      }, false);
      var rs = [n.className, n.private ? 'private' : 'public', 'node node' + _this.level, n.active ? 'active' : null, _this.hasChildren(n) ? 'has-children' : null];
      return rs.filter(function (o) {
        return o;
      }).join(' ');
    }, _this.hasChildren = function (n) {
      return n.children && n.children.length;
    }, _this.nodeClick = function (e, n) {
      if (n.onClick) return n.onClick(e);
      return _this.open(_this.nodeUrl(n));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Menu, [{
    key: 'renderMenu',
    value: function renderMenu(items, className) {
      var _this2 = this;

      items = [].concat(items).filter(function (n) {
        return n;
      });
      if (!items.length) return null;
      return _react2.default.createElement(
        'ul',
        { className: this.className },
        items.map(function (n, i) {
          var title = n.title || n.name || n.label;
          var description = n.description;
          var image = !n.image ? null : /<\/?[^>]*>/.test(n.image) ? n.image : '<img src="' + n.image + '" alt="' + title + '"/>';
          return n.html ? _react2.default.createElement(
            'li',
            { key: i, className: _this2.nodeClassName(n) },
            n.html
          ) : _react2.default.createElement(
            'li',
            { key: i, className: _this2.nodeClassName(n) },
            _react2.default.createElement(
              'div',
              { className: 'name', onClick: function onClick(e) {
                  return _this2.nodeClick(e, n);
                } },
              !image ? null : _react2.default.createElement('div', { className: 'image', dangerouslySetInnerHTML: { __html: image } }),
              _react2.default.createElement(
                'span',
                null,
                title
              )
            ),
            !description ? null : _react2.default.createElement(
              'div',
              { className: 'description' },
              description
            ),
            _react2.default.createElement(Menu, { items: n.children, level: _this2.level + 1 })
          );
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return this.renderMenu(this.items, this.className);
    }
  }, {
    key: 'className',
    get: function get() {
      return 'menu menu' + this.level + ' ' + (this.level == 0 && this.props.className || '');
    }
  }, {
    key: 'level',
    get: function get() {
      return this.props.level || 0;
    }
  }, {
    key: 'root',
    get: function get() {
      return (this.props.root || '') + '/';
    }
  }, {
    key: 'items',
    get: function get() {
      return [].concat(this.props.items).filter(function (o) {
        return o;
      });
    }
  }]);
  return Menu;
}(_Component3.default);

exports.default = Menu;

},{"./Component":230,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react","react-router-dom":202}],246:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _apis = require('../apis');

var _emitter = require('../emitter');

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uuid = utils.uuid,
    connect = utils.connect;

var Message = function (_RAComponent) {
  (0, _inherits3.default)(Message, _RAComponent);

  function Message() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Message);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Message.__proto__ || (0, _getPrototypeOf2.default)(Message)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      message: _this.props.message || _this.props.children || '',
      error: _this.props.error || ''
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Message, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function (e) {
        return _this2.onClick(e);
      }, 7000);
    }
  }, {
    key: 'onClick',
    value: function onClick(e) {
      if (!this.props.data) return;
      this.props.actions.Application_RemoveMessage(this.props.data);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          onClick: this.onClick.bind(this),
          className: (this.props.className || '') + ' message ' + (this.error ? 'error' : '') },
        this.message
      );
    }
  }, {
    key: 'message',
    get: function get() {
      return this.props.data && this.props.data.message || this.state.message || '';
    }
  }, {
    key: 'error',
    get: function get() {
      return this.props.data ? this.props.data.error : this.state.error;
    }
  }]);
  return Message;
}(_react.Component);

exports.default = connect(Message);

},{"../apis":227,"../emitter":265,"../utils":314,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react","react-dom":"react-dom"}],247:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function (_Component) {
  (0, _inherits3.default)(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.removeModal = function (e) {
      return _this.actions.Application_RemoveModal(_this.props.data);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Modal, [{
    key: 'renderHeader',
    value: function renderHeader() {
      return this.props.header ? _react2.default.createElement(
        'div',
        { className: 'm-header' },
        this.props.header
      ) : null;
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      var content = this.props.children || this.props.content;
      return content ? _react2.default.createElement(
        'div',
        { className: 'm-content' },
        content
      ) : null;
    }
  }, {
    key: 'renderFooter',
    value: function renderFooter() {
      return this.props.footer ? _react2.default.createElement(
        'div',
        { className: 'm-footer' },
        this.props.footer
      ) : null;
    }
  }, {
    key: 'renderCloseIcon',
    value: function renderCloseIcon() {
      return _react2.default.createElement(
        'div',
        { className: 'm-close', onClick: this.removeModal },
        _react2.default.createElement(
          'i',
          { className: 'material-icons' },
          'close'
        )
      );
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      return _react2.default.createElement(
        'div',
        { className: 'm-container' },
        this.renderHeader(),
        this.renderContent(),
        this.renderFooter(),
        this.renderCloseIcon()
      );
    }
  }, {
    key: 'cmpClassName',
    get: function get() {
      return 'm-overlay';
    }
  }]);
  return Modal;
}(_Component3.default);

exports.default = (0, _utils.connect)(Modal);

},{"../utils":314,"./Component":230,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],248:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MonthlyBox = function (_Component) {
  (0, _inherits3.default)(MonthlyBox, _Component);

  function MonthlyBox() {
    (0, _classCallCheck3.default)(this, MonthlyBox);
    return (0, _possibleConstructorReturn3.default)(this, (MonthlyBox.__proto__ || (0, _getPrototypeOf2.default)(MonthlyBox)).apply(this, arguments));
  }

  (0, _createClass3.default)(MonthlyBox, [{
    key: 'renderChildren',
    value: function renderChildren() {
      var _this2 = this;

      return [_react2.default.createElement('div', { className: 'box-title', dangerouslySetInnerHTML: { __html: 'Monthly Sale' } }), _react2.default.createElement(
        'div',
        { className: 'box-heading' },
        this.sale,
        ' ',
        this.currency
      ), _react2.default.createElement(
        'div',
        { className: 'box-content' },
        _react2.default.createElement(
          'div',
          { className: 'coins' },
          (0, _keys2.default)(this.coins).map(function (o) {
            return _react2.default.createElement(
              'div',
              { className: 'coin' },
              _react2.default.createElement(
                'div',
                { className: 'coin-name' },
                o
              ),
              _react2.default.createElement(
                'div',
                { className: 'coin-sale' },
                _this2.coins[o].format()
              )
            );
          })
        )
      ), _react2.default.createElement(
        'div',
        { className: 'box-percentage-wrapper' },
        _react2.default.createElement(
          'div',
          { className: 'box-percentage-text', style: { left: this.percentage + '%' } },
          this.percentage
        ),
        _react2.default.createElement('div', { className: 'box-percentage', style: { width: this.percentage + '%' } })
      )];
    }
  }, {
    key: 'cmpClassName',
    get: function get() {
      return 'box monthly ' + (this.negative ? 'negative' : 'positive');
    }
  }, {
    key: 'data',
    get: function get() {
      return this.props.data || {};
    }
  }, {
    key: 'coins',
    get: function get() {
      return this.data.coins || this.props.coins || {};
    }
  }, {
    key: 'sale',
    get: function get() {
      return this.data.sale || this.props.sale || 0;
    }
  }, {
    key: 'currency',
    get: function get() {
      return this.data.currency || this.props.currency || 'USD';
    }
  }, {
    key: 'percentage',
    get: function get() {
      return this.data.percentage || this.props.percentage || 0;
    }
  }, {
    key: 'negative',
    get: function get() {
      return this.data.negative || this.props.negative;
    }
  }]);
  return MonthlyBox;
}(_Component3.default);

exports.default = MonthlyBox;

},{"../utils":314,"./Component":230,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/core-js/object/keys":12,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],249:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _Message = require('./Message');

var _Message2 = _interopRequireDefault(_Message);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Content = require('./Content');

var _Content2 = _interopRequireDefault(_Content);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function (_Component) {
  (0, _inherits3.default)(Page, _Component);

  function Page() {
    (0, _classCallCheck3.default)(this, Page);
    return (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).apply(this, arguments));
  }

  (0, _createClass3.default)(Page, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      (0, _get3.default)(Page.prototype.__proto__ || (0, _getPrototypeOf2.default)(Page.prototype), 'componentDidMount', this).call(this);
      addEventListener('UserSignedIn', function (_ref) {
        var _ref$detail = (0, _slicedToArray3.default)(_ref.detail, 1),
            user = _ref$detail[0];

        return _this2.actions.User_Load(user);
      });
      addEventListener('UserSignedOut', function (e) {
        return _this2.actions.User_Unload();
      });
    }
  }, {
    key: 'renderPageComponents',
    value: function renderPageComponents() {
      return null;
    }
  }, {
    key: 'renderTopHeader',
    value: function renderTopHeader() {
      return null;
    }
  }, {
    key: 'renderHeader',
    value: function renderHeader() {
      return _react2.default.createElement(_Header2.default, null);
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      return _react2.default.createElement(
        _Content2.default,
        null,
        this.renderPageComponents()
      );
    }
  }, {
    key: 'renderFooter',
    value: function renderFooter() {
      return _react2.default.createElement(_Footer2.default, null);
    }
  }, {
    key: 'renderModals',
    value: function renderModals() {
      var modals = [].concat(this.props.Application.modals).filter(function (o) {
        return o;
      });
      if (!modals.length) return null;
      return modals.map(function (o) {
        return _react2.default.createElement(
          _Modal2.default,
          { data: o, header: o.header, footer: o.footer },
          o.content
        );
      });
    }
  }, {
    key: 'renderMessages',
    value: function renderMessages() {
      var messages = [].concat(this.props.Application.messages).filter(function (o) {
        return o;
      });
      if (!messages.length) return null;
      return _react2.default.createElement(
        'div',
        { className: 'messages' },
        messages.map(function (o) {
          return _react2.default.createElement(_Message2.default, { data: o });
        })
      );
    }
  }, {
    key: 'renderPageLoading',
    value: function renderPageLoading() {
      return this.loading ? _react2.default.createElement(
        'div',
        { className: 'm-overlay' },
        this.renderLoading()
      ) : null;
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      return [this.renderTopHeader(), this.renderHeader(), this.renderContent(), this.renderFooter(), this.renderPageLoading(), this.renderModals(), this.renderMessages()];
    }
  }, {
    key: 'cmpClassName',
    get: function get() {
      return 'container page ' + (this.logged ? 'logged' : 'not-logged') + ' ' + (this.User.verified ? 'user-verified' : 'user-not-verified');
    }
  }, {
    key: 'loading',
    get: function get() {
      return this.props.Application.loading;
    }
  }]);
  return Page;
}(_Component3.default);

exports.default = Page;

},{"./Component":230,"./Content":232,"./Footer":234,"./Header":237,"./Message":246,"./Modal":247,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/get":22,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"babel-runtime/helpers/slicedToArray":25,"react":"react"}],250:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PieChart = function (_Component) {
  (0, _inherits3.default)(PieChart, _Component);

  function PieChart() {
    (0, _classCallCheck3.default)(this, PieChart);
    return (0, _possibleConstructorReturn3.default)(this, (PieChart.__proto__ || (0, _getPrototypeOf2.default)(PieChart)).apply(this, arguments));
  }

  (0, _createClass3.default)(PieChart, [{
    key: 'initialState',
    value: function initialState() {
      return this.state = (0, _extends3.default)({}, (0, _get3.default)(PieChart.prototype.__proto__ || (0, _getPrototypeOf2.default)(PieChart.prototype), 'initialState', this).call(this), {
        id: this.props.id || 'piechart',
        data: this.props.data,
        height: this.props.height,
        width: this.props.width,
        margin: this.props.width
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _get3.default)(PieChart.prototype.__proto__ || (0, _getPrototypeOf2.default)(PieChart.prototype), 'componentDidMount', this).call(this);
      piechart(this);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      (0, _get3.default)(PieChart.prototype.__proto__ || (0, _getPrototypeOf2.default)(PieChart.prototype), 'componentDidUpdate', this).call(this, prevProps, prevState, snapshot);
      piechart(this);
    }
  }, {
    key: 'cmpClassName',
    get: function get() {
      return 'chart piechart';
    }
  }, {
    key: 'id',
    get: function get() {
      return this.state.id;
    },
    set: function set(v) {
      this.setAttr('id', v);
    }
  }, {
    key: 'data',
    get: function get() {
      return [].concat(this.state.data).filter(function (o) {
        return o;
      });
    },
    set: function set(v) {
      this.setAttr('data', v);
    }
  }, {
    key: 'width',
    get: function get() {
      return this.state.width;
    },
    set: function set(v) {
      this.setAttr('width', v);
    }
  }, {
    key: 'height',
    get: function get() {
      return this.state.height;
    },
    set: function set(v) {
      this.setAttr('height', v);
    }
  }, {
    key: 'margin',
    get: function get() {
      return this.state.margin;
    },
    set: function set(v) {
      this.setAttr('margin', v);
    }
  }]);
  return PieChart;
}(_Component3.default);

exports.default = PieChart;

},{"../utils":314,"./Component":230,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/extends":21,"babel-runtime/helpers/get":22,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],251:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _SignUp = require('./SignUp');

var _SignUp2 = _interopRequireDefault(_SignUp);

var _ForgotPassword = require('./ForgotPassword');

var _ForgotPassword2 = _interopRequireDefault(_ForgotPassword);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignInSignUp = function (_Component) {
  (0, _inherits3.default)(SignInSignUp, _Component);

  function SignInSignUp() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SignInSignUp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SignInSignUp.__proto__ || (0, _getPrototypeOf2.default)(SignInSignUp)).call.apply(_ref, [this].concat(args))), _this), _this.valid = function (e) {
      return _this.emailValid() ? _this.passwordValid() : false;
    }, _this.emailValid = function (e) {
      if (_this.utils.validateEmail(_this.state.email)) {
        _this.emailInput.error = null;
        return true;
      }
      _this.emailInput.error = 'Email is invalid';
    }, _this.passwordValid = function (e) {
      if (_this.state.password) {
        _this.passwordInput.error = null;
        return true;
      }
      _this.passwordInput.error = 'Password is invalid';
    }, _this.onClickSwitchForm = function (v) {
      return _this.actions.Application_SwitchForm(v);
    }, _this.showError = function (err) {
      return _this.actions.Application_AddModal({ header: 'Error!', content: _react2.default.createElement(
          'p',
          null,
          'Some error occurred: ',
          _react2.default.createElement(
            'span',
            { className: 'red-text' },
            err && err.message || ''
          ),
          _react2.default.createElement('br', null),
          ' Please try again.'
        ) });
    }, _this.showSuccess = function (user) {
      return _this.open(_this.utils.baseurl());
    }, _this.onClickSignIn = function (e) {
      var valid = _this.valid();
      if (valid) {
        _this.actions.Application_Indicator(true);
        _this.actions.User_SignIn(_this.state).then(function (res) {
          return _this.showSuccess(res.data);
        }).catch(function (res) {
          return _this.showError(res.data);
        }).finally(function (res) {
          return _this.actions.Application_Indicator(false);
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SignInSignUp, [{
    key: 'renderSignIn',
    value: function renderSignIn() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'sign-in' },
        _react2.default.createElement(
          'div',
          { className: 'heading' },
          'Sign In'
        ),
        _react2.default.createElement(
          _Form2.default,
          { autocomplete: 'off', autofill: 'off' },
          _react2.default.createElement(_Input2.default, { ref: function ref(e) {
              return _this2.emailInput = e;
            }, type: 'email', value: this.state.email, label: 'E-Mail', placeholder: 'Email', onChange: function onChange(e) {
              return _this2.setState({ email: e.target.value });
            } }),
          _react2.default.createElement(_Input2.default, { ref: function ref(e) {
              return _this2.passwordInput = e;
            }, type: 'password', value: this.state.password, label: 'Password', placeholder: 'Password', onChange: function onChange(e) {
              return _this2.setState({ password: e.target.value });
            } }),
          _react2.default.createElement(
            'div',
            { className: 'actions' },
            _react2.default.createElement(
              _Button2.default,
              { onClick: function onClick(e) {
                  return _this2.onClickSignIn();
                } },
              'Sign In'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'switch' },
          'Don\'t have an account? ',
          _react2.default.createElement(
            'span',
            { onClick: function onClick(e) {
                return _this2.onClickSwitchForm('signup');
              } },
            'Register'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'span',
            { onClick: function onClick(e) {
                return _this2.onClickSwitchForm('forgot');
              } },
            'Forgot Password'
          )
        )
      );
    }
  }, {
    key: 'renderSignUp',
    value: function renderSignUp() {
      return _react2.default.createElement(_SignUp2.default, null);
    }
  }, {
    key: 'renderForgotPassword',
    value: function renderForgotPassword() {
      return _react2.default.createElement(_ForgotPassword2.default, null);
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      return this.props.Application.form == 'signin' ? this.renderSignIn() : this.props.Application.form == 'signup' ? this.renderSignUp() : this.props.Application.form == 'forgot' ? this.renderForgotPassword() : null;
    }
  }, {
    key: 'cmpClassName',
    get: function get() {
      return 'signin-signup';
    }
  }]);
  return SignInSignUp;
}(_Component3.default);

exports.default = (0, _utils.connect)(SignInSignUp);

},{"../utils":314,"./Button":229,"./Component":230,"./ForgotPassword":235,"./Form":236,"./Input":238,"./SignUp":252,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],252:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _InputCountry = require('./InputCountry');

var _InputCountry2 = _interopRequireDefault(_InputCountry);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignUp = function (_Component) {
  (0, _inherits3.default)(SignUp, _Component);

  function SignUp() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SignUp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SignUp.__proto__ || (0, _getPrototypeOf2.default)(SignUp)).call.apply(_ref, [this].concat(args))), _this), _this.fullnameValid = function (e) {
      if (_this.state.fullname) {
        _this.fullnameInput.error = null;
        return true;
      }
      _this.fullnameInput.error = 'Please enter your full name';
    }, _this.emailValid = function (e) {
      if (_this.utils.validateEmail(_this.state.email)) {
        _this.emailInput.error = null;
        return true;
      }
      _this.emailInput.error = 'Email is invalid';
    }, _this.phoneNumberValid = function (e) {
      if (_this.state.phoneNumber) {
        _this.phoneNumberInput.error = null;
        return true;
      }
      _this.phoneNumberInput.error = 'Please enter your phone number';
    }, _this.nationalityValid = function (e) {
      if (_this.state.nationality) {
        _this.nationalityInput.error = null;
        return true;
      }
      _this.nationalityInput.error = 'Please enter your nationality';
    }, _this.passwordValid = function (e) {
      if (_this.state.password && _this.state.password.length >= 6 && _this.state.password == _this.state.confirm) {
        _this.passwordInput.error = null;
        _this.confirmInput.error = null;
        return true;
      }
      if (!_this.state.password || _this.state.password.length < 6) {
        _this.passwordInput.error = 'Password is invalid, must have at least 6 characters';
        _this.confirmInput.error = null;
      } else if (_this.state.password != _this.state.confirm) {
        _this.passwordInput.error = null;
        _this.confirmInput.error = 'Password confirm does not match';
      }
    }, _this.onPrev = function (v) {
      _this.state.step--;
      jQuery(_this.dom).find('.step.active').fadeOut(function (e) {
        jQuery(_this.dom).find('.step.active').removeClass('active');
        var next = jQuery(_this.dom).find('.step' + _this.state.step);
        next.fadeIn(function (e) {
          next.addClass('active');
          if (_this.state.step == 0) jQuery(_this.dom).find('.btn-prev').addClass('hidden');
          jQuery(_this.dom).find('.btn-next').removeClass('hidden');
          jQuery(_this.dom).find('.btn-submit').addClass('hidden');
        });
      });
    }, _this.onNext = function (v) {
      var valid = false;
      if (_this.state.step == 0) valid = _this.fullnameValid() && _this.emailValid() && _this.phoneNumberValid() && _this.nationalityValid();
      // if (this.state.step == 1) valid = this.phoneNumberValid() && this.nationalityValid()
      if (valid) {
        _this.state.step++;
        jQuery(_this.dom).find('.step.active').fadeOut(function (e) {
          jQuery(_this.dom).find('.step.active').removeClass('active');
          var next = jQuery(_this.dom).find('.step' + _this.state.step);
          next.fadeIn(function (e) {
            next.addClass('active');
            jQuery(_this.dom).find('.btn-prev').removeClass('hidden');
            if (_this.state.step == 1) jQuery(_this.dom).find('.btn-next').addClass('hidden');
            if (_this.state.step == 1) jQuery(_this.dom).find('.btn-submit').removeClass('hidden');
          });
        });
      }
    }, _this.onClickSwitchForm = function (v) {
      return _this.actions.Application_SwitchForm(v);
    }, _this.showError = function (err) {
      return _this.actions.Application_AddModal({ header: 'Error!', content: _react2.default.createElement(
          'p',
          null,
          'Some error occurred: ',
          _react2.default.createElement(
            'span',
            { className: 'red-text' },
            err && err.message || ''
          ),
          _react2.default.createElement('br', null),
          ' Please try again.'
        ) });
    }, _this.showSuccess = function (user) {
      return _this.actions.Application_AddModal({ header: 'Congratulation!', content: _react2.default.createElement(
          'p',
          null,
          'You have successfully signed up as ',
          _react2.default.createElement(
            'span',
            { className: 'red-text' },
            _this.state.email
          ),
          '.',
          _react2.default.createElement('br', null),
          'Please verify your account in your email. Thanks'
        ) }).then(function (e) {
        return _this.onClickSwitchForm('signin');
      }).then(function (e) {
        return _this.open(_this.utils.baseurl());
      });
    }, _this.onClickSignUp = function (e) {
      var valid = _this.passwordValid();
      if (valid) {
        _this.actions.Application_Indicator(true);
        _this.actions.User_SignUp(_this.state).then(function (res) {
          return _this.showSuccess(res.data);
        }).catch(function (res) {
          return _this.showError(res.data);
        }).finally(function (res) {
          return _this.actions.Application_Indicator(false);
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SignUp, [{
    key: 'initialState',
    value: function initialState() {
      return this.state = (0, _extends3.default)({}, (0, _get3.default)(SignUp.prototype.__proto__ || (0, _getPrototypeOf2.default)(SignUp.prototype), 'initialState', this).call(this), {
        // phoneNumber: '97728266',
        // fullname: 'Phi Duc Tien',
        // email: 'im.phitien@gmail.com',
        // nationality: 'VNM',
        // password: 'tien123',
        // confirm: 'tien123',
        step: 0
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: this.className },
        _react2.default.createElement(
          'div',
          { className: 'heading' },
          'Sign Up'
        ),
        _react2.default.createElement(
          _Form2.default,
          { autofill: 'off' },
          _react2.default.createElement(
            'div',
            { className: 'fields-group step step0 active' },
            _react2.default.createElement(_Input2.default, { ref: function ref(e) {
                return _this2.emailInput = e;
              }, type: 'email', value: this.state.email,
              required: true, name: 'email',
              label: 'What is your email address?',
              placeholder: 'Email Address', onChange: function onChange(e) {
                return _this2.setState({ email: e.target.value });
              } }),
            _react2.default.createElement(_Input2.default, { ref: function ref(e) {
                return _this2.fullnameInput = e;
              }, type: 'text', value: this.state.fullname,
              required: true, name: 'fullname',
              label: 'What is your first name?',
              description: 'Must match the full name on your ID.',
              placeholder: 'Full Name', onChange: function onChange(e) {
                return _this2.setState({ fullname: e.target.value });
              } }),
            _react2.default.createElement(_Input2.default, { ref: function ref(e) {
                return _this2.phoneNumberInput = e;
              }, type: 'text', value: this.state.phoneNumber,
              required: true, name: 'phoneNumber',
              label: 'What is your phone number?',
              description: 'Please include your country code.',
              placeholder: 'Phone Number', onChange: function onChange(e) {
                return _this2.setState({ phoneNumber: e.target.value });
              } }),
            _react2.default.createElement(_InputCountry2.default, { ref: function ref(e) {
                return _this2.nationalityInput = e;
              }, value: this.state.nationality,
              required: true, name: 'nationality',
              label: 'What is your nationality?', autofill: 'off',
              description: 'Must match your proof of identity document.',
              placeholder: 'Nationality', onChange: function onChange(e) {
                return _this2.setState({ nationality: e.target.value });
              }
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'fields-group step step1' },
            _react2.default.createElement(_Input2.default, { ref: function ref(e) {
                return _this2.passwordInput = e;
              }, type: 'password', value: this.state.password,
              required: true, name: 'password',
              label: 'Please enter your password',
              placeholder: 'Password', onChange: function onChange(e) {
                return _this2.setState({ password: e.target.value });
              } }),
            _react2.default.createElement(_Input2.default, { ref: function ref(e) {
                return _this2.confirmInput = e;
              }, type: 'password', value: this.state.confirm,
              required: true, name: 'confirm',
              label: 'One more time',
              placeholder: 'Confirm Password', onChange: function onChange(e) {
                return _this2.setState({ confirm: e.target.value });
              } })
          ),
          _react2.default.createElement(
            'div',
            { className: 'actions' },
            _react2.default.createElement(
              _Button2.default,
              { className: 'btn-prev ' + (this.state.step == 0 ? 'hidden' : ''), onClick: function onClick(e) {
                  return _this2.onPrev();
                } },
              'Previous'
            ),
            _react2.default.createElement(
              _Button2.default,
              { className: 'btn-next ' + (this.state.step == 1 ? 'hidden' : ''), onClick: function onClick(e) {
                  return _this2.onNext();
                } },
              'Next'
            ),
            _react2.default.createElement(
              _Button2.default,
              { disabled: this.User.loading, className: 'btn-submit ' + (this.state.step < 1 ? 'hidden' : ''), onClick: function onClick(e) {
                  return _this2.onClickSignUp();
                } },
              'Agree & Submit'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'switch' },
          'Already have an account? ',
          _react2.default.createElement(
            'span',
            { onClick: function onClick(e) {
                return _this2.onClickSwitchForm('signin');
              } },
            'Sign in'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'span',
            { onClick: function onClick(e) {
                return _this2.onClickSwitchForm('forgot');
              } },
            'Forgot Password'
          )
        )
      );
    }
  }, {
    key: 'cmpClassName',
    get: function get() {
      return 'sign-up';
    }
  }]);
  return SignUp;
}(_Component3.default);

exports.default = (0, _utils.connect)(SignUp);

},{"../utils":314,"./Button":229,"./Component":230,"./Form":236,"./Input":238,"./InputCountry":239,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/extends":21,"babel-runtime/helpers/get":22,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],253:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SocialShare = function (_Component) {
  (0, _inherits3.default)(SocialShare, _Component);

  function SocialShare() {
    (0, _classCallCheck3.default)(this, SocialShare);
    return (0, _possibleConstructorReturn3.default)(this, (SocialShare.__proto__ || (0, _getPrototypeOf2.default)(SocialShare)).apply(this, arguments));
  }

  (0, _createClass3.default)(SocialShare, [{
    key: 'renderAddThis',
    value: function renderAddThis() {
      if (typeof addthis != 'undefined') addthis.toolbox('.addthis_toolbox');
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _get3.default)(SocialShare.prototype.__proto__ || (0, _getPrototypeOf2.default)(SocialShare.prototype), 'componentDidMount', this).call(this);
      if (this.config.addthis) {
        if (typeof addthis == 'undefined') jQuery.getScript(this.config.addthis, this.renderAddThis.bind(this));else this.renderAddThis();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      (0, _get3.default)(SocialShare.prototype.__proto__ || (0, _getPrototypeOf2.default)(SocialShare.prototype), 'componentDidUpdate', this).call(this, prevProps, prevState, snapshot);
      if (this.config.addthis) {
        if (typeof addthis == 'undefined') jQuery.getScript(this.config.addthis, this.renderAddThis.bind(this));else this.renderAddThis();
      }
    }
  }, {
    key: 'renderFacebook',
    value: function renderFacebook(url) {
      return _react2.default.createElement('i', { className: 'fa fa-facebook', onClick: function onClick(e) {
          FB.ui({
            method: 'share',
            href: 'http://vnexpress.net'
          }, function (res) {
            console.log(res);
          });
        } });
    }
  }, {
    key: 'renderTwitter',
    value: function renderTwitter(url) {
      var _this2 = this;

      return _react2.default.createElement('i', { className: 'fa fa-twitter', onClick: function onClick(e) {
          return _this2.openNewTab(url);
        } });
    }
  }, {
    key: 'renderLinkedin',
    value: function renderLinkedin(url) {
      var _this3 = this;

      return _react2.default.createElement('i', { className: 'fa fa-linkedin', onClick: function onClick(e) {
          return _this3.openNewTab(url);
        } });
    }
  }, {
    key: 'renderTelegram',
    value: function renderTelegram(url) {
      var _this4 = this;

      return _react2.default.createElement('i', { className: 'fa fa-telegram', onClick: function onClick(e) {
          return _this4.openNewTab(url);
        } });
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _this5 = this;

      var items = ['facebook', 'twitter', 'linkedin', 'telegram', 'whatsapp', 'wechat'];
      return _react2.default.createElement(
        'div',
        { className: 'addthis_inline_share_toolbox_0fd7 addthis_toolbox addthis_default_style addthis_32x32_style' },
        items.map(function (o) {
          return _react2.default.createElement('a', { className: 'addthis_button addthis_button_' + o });
        })
      );
      var links = this.config.social;
      return (0, _keys2.default)(links).map(function (k) {
        return _this5['render' + k.ucfirst()] ? _this5['render' + k.ucfirst()](links[k]) : null;
      }).filter(function (o) {
        return o;
      });
    }
  }, {
    key: 'cmpClassName',
    get: function get() {
      return 'social-share';
    }
  }]);
  return SocialShare;
}(_Component3.default);

exports.default = SocialShare;

},{"./Component":230,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/core-js/object/keys":12,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/get":22,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],254:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Space = function (_Component) {
  (0, _inherits3.default)(Space, _Component);

  function Space() {
    (0, _classCallCheck3.default)(this, Space);
    return (0, _possibleConstructorReturn3.default)(this, (Space.__proto__ || (0, _getPrototypeOf2.default)(Space)).apply(this, arguments));
  }

  (0, _createClass3.default)(Space, [{
    key: 'cmpClassName',
    get: function get() {
      return 'space';
    }
  }]);
  return Space;
}(_Component3.default);

exports.default = Space;

},{"./Component":230,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],255:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uuid = utils.uuid,
    connect = utils.connect;

var Spinner = function (_RAComponent) {
  (0, _inherits3.default)(Spinner, _RAComponent);

  function Spinner() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Spinner);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Spinner.__proto__ || (0, _getPrototypeOf2.default)(Spinner)).call.apply(_ref, [this].concat(args))), _this), _this.state = { size: _this.props.size || 'normal' }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Spinner, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: (this.props.className || '') + ' spinner spinner-' + this.state.size });
    }
  }]);
  return Spinner;
}(_react.Component);

exports.default = connect(Spinner);

},{"../utils":314,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react","react-dom":"react-dom"}],256:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSteps = exports.stepName = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stepName = exports.stepName = function stepName(o) {
  return o.name || o.title || o.label || o.heading;
};
var getSteps = exports.getSteps = function getSteps(o) {
  return [].concat(o).filter(function (o) {
    return o && o.props && stepName(o.props);
  });
};

var Step = function (_Component) {
  (0, _inherits3.default)(Step, _Component);

  function Step() {
    (0, _classCallCheck3.default)(this, Step);
    return (0, _possibleConstructorReturn3.default)(this, (Step.__proto__ || (0, _getPrototypeOf2.default)(Step)).apply(this, arguments));
  }

  (0, _createClass3.default)(Step, [{
    key: 'initialState',
    value: function initialState() {
      return (0, _extends3.default)({}, (0, _get3.default)(Step.prototype.__proto__ || (0, _getPrototypeOf2.default)(Step.prototype), 'initialState', this).call(this), {
        name: stepName(this.props)
      });
    }
  }, {
    key: 'cmpClassName',
    get: function get() {
      return 'step';
    }
  }, {
    key: 'name',
    get: function get() {
      return this.state.name;
    },
    set: function set(v) {
      this.setAttr('name', v);
    }
  }]);
  return Step;
}(_Component3.default);

exports.default = Step;

},{"./Button":229,"./Component":230,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/extends":21,"babel-runtime/helpers/get":22,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],257:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Step = require('./Step');

var _Step2 = _interopRequireDefault(_Step);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Steps = function (_Component) {
  (0, _inherits3.default)(Steps, _Component);

  function Steps() {
    (0, _classCallCheck3.default)(this, Steps);
    return (0, _possibleConstructorReturn3.default)(this, (Steps.__proto__ || (0, _getPrototypeOf2.default)(Steps)).apply(this, arguments));
  }

  (0, _createClass3.default)(Steps, [{
    key: 'initialState',
    value: function initialState() {
      return (0, _extends3.default)({}, (0, _get3.default)(Steps.prototype.__proto__ || (0, _getPrototypeOf2.default)(Steps.prototype), 'initialState', this).call(this), {
        current: this.props.current || 0,
        stopJumping: this.props.stopJumping
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      jQuery('.step-header-item').each(function () {
        var me = jQuery(this),
            w = me.outerWidth() - me.find('.step-header-item-index').outerWidth();
        me.find('.step-header-item-line').width(w / 2 - 3);
      });
    }
  }, {
    key: 'onClickPrev',
    value: function onClickPrev(e) {
      if (this.current > 0) this.current = this.current - 1;
    }
  }, {
    key: 'onClickNext',
    value: function onClickNext(e) {
      var steps = this.steps,
          current = this.current,
          currentStep = this.currentStep;
      if (current <= steps.length - 1) {
        if (this.currentStep.props.validate()) {
          if (current != steps.length - 1) this.current = current + 1;
          this.currentStep.props.onNext();
        }
      }
    }
  }, {
    key: 'renderHeading',
    value: function renderHeading() {
      return _react2.default.createElement(
        'div',
        { className: 'heading' },
        this.currentStep ? (0, _Step.stepName)(this.currentStep.props) : null
      );
    }
  }, {
    key: 'renderActions',
    value: function renderActions() {
      var _this2 = this;

      var steps = this.steps,
          current = this.current;
      return _react2.default.createElement(
        'div',
        { className: 'actions' },
        current == 0 ? null : _react2.default.createElement(
          _Button2.default,
          { onClick: function onClick(e) {
              return _this2.onClickPrev(e);
            } },
          'Previous'
        ),
        _react2.default.createElement(
          _Button2.default,
          { onClick: function onClick(e) {
              return _this2.onClickNext(e);
            } },
          current == steps.length - 1 ? 'Finish' : 'Next'
        )
      );
    }
  }, {
    key: 'renderHeader',
    value: function renderHeader() {
      var _this3 = this;

      var steps = this.steps;
      return _react2.default.createElement(
        'div',
        { className: 'step-header' },
        steps.map(function (o, i) {
          return _react2.default.createElement(
            'div',
            { onClick: function onClick(e) {
                return _this3.stopJumping ? false : _this3.current = i;
              }, className: 'step-header-item ' + (i == _this3.current ? 'active' : '') },
            _react2.default.createElement('div', { className: 'step-header-item-line step-header-item-line-before' }),
            _react2.default.createElement(
              'div',
              { className: 'step-header-item-index' },
              i + 1
            ),
            _react2.default.createElement(
              'div',
              { className: 'step-header-item-name' },
              (0, _Step.stepName)(o.props)
            ),
            _react2.default.createElement('div', { className: 'step-header-item-line step-header-item-line-after' })
          );
        })
      );
    }
  }, {
    key: 'cmpClassName',
    get: function get() {
      return 'steps';
    }
  }, {
    key: 'stopJumping',
    get: function get() {
      return this.state.stopJumping;
    },
    set: function set(v) {
      this.setAttr('stopJumping', v);
    }
  }, {
    key: 'current',
    get: function get() {
      return this.state.current;
    },
    set: function set(v) {
      this.setAttr('current', v || 0);
    }
  }, {
    key: 'currentStep',
    get: function get() {
      return this.steps.length ? this.steps[this.current] : null;
    }
  }, {
    key: 'steps',
    get: function get() {
      var _this4 = this;

      return (0, _Step.getSteps)((0, _get3.default)(Steps.prototype.__proto__ || (0, _getPrototypeOf2.default)(Steps.prototype), 'children', this)).map(function (o, i) {
        return (0, _extends3.default)({}, o, { props: (0, _extends3.default)({}, o.props, {
            className: (o.props.className || '') + ' ' + (i == _this4.current ? 'active' : ''),
            validate: typeof o.props.validate == 'function' ? o.props.validate : function (e) {
              return true;
            },
            onNext: typeof o.props.onNext == 'function' ? o.props.onNext : function (e) {
              return true;
            }
          }) });
      });
    }
  }, {
    key: 'children',
    get: function get() {
      return [].concat(this.renderHeader())
      // .concat(this.renderHeading())
      .concat(this.steps).concat(this.renderActions());
    }
  }]);
  return Steps;
}(_Component3.default);

exports.default = Steps;

},{"./Button":229,"./Component":230,"./Step":256,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/extends":21,"babel-runtime/helpers/get":22,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],258:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCName = function getCName(o) {
  return o.name || o.title || o.label || o.heading;
};
var getCField = function getCField(o) {
  return o.field;
};
var data = function data(f, r) {
  return r[f] || '';
};
var getCText = function getCText(o, r) {
  var rs = '',
      f = getCField(o);
  if (o.text) {
    try {
      eval('rs = ' + o.text);
    } catch (e) {}
  } else if (f) rs = r[f];
  return rs;
};
var getCTitle = function getCTitle(o, r) {
  var rs = '',
      f = getCField(o);
  if (o.title) {
    try {
      eval('rs = ' + o.title);
    } catch (e) {}
  } else if (f) rs = r[f];
  return rs;
};

var Table = function (_Component) {
  (0, _inherits3.default)(Table, _Component);

  function Table() {
    (0, _classCallCheck3.default)(this, Table);
    return (0, _possibleConstructorReturn3.default)(this, (Table.__proto__ || (0, _getPrototypeOf2.default)(Table)).apply(this, arguments));
  }

  (0, _createClass3.default)(Table, [{
    key: 'initialState',
    value: function initialState() {
      return this.state = (0, _extends3.default)({}, (0, _get3.default)(Table.prototype.__proto__ || (0, _getPrototypeOf2.default)(Table.prototype), 'initialState', this).call(this), {
        colums: [].concat(this.props.colums).filter(function (o) {
          return o;
        }),
        rows: [].concat(this.props.rows).filter(function (o) {
          return o;
        }),
        settings: this.props.settings || {}
      });
    }
  }, {
    key: 'renderHeaderCell',
    value: function renderHeaderCell(o) {
      return _react2.default.createElement('div', { className: 'cell header-cell', dangerouslySetInnerHTML: { __html: getCName(o) } });
    }
  }, {
    key: 'renderHeader',
    value: function renderHeader() {
      var _this2 = this;

      var cols = this.colums.filter(function (o) {
        return !o.hidden;
      });
      if (!cols.length) return null;
      return _react2.default.createElement(
        'div',
        { className: 'table-header' },
        _react2.default.createElement(
          'table',
          null,
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              cols.map(function (o) {
                return _react2.default.createElement(
                  'td',
                  null,
                  _this2.renderHeaderCell(o)
                );
              })
            )
          )
        )
      );
    }
  }, {
    key: 'renderCell',
    value: function renderCell(o, r) {
      return _react2.default.createElement('div', { className: 'cell table-cell', title: getCTitle(o, r), dangerouslySetInnerHTML: { __html: getCText(o, r) } });
    }
  }, {
    key: 'renderRow',
    value: function renderRow(r) {
      var _this3 = this;

      var cols = this.colums.filter(function (o) {
        return !o.hidden;
      });
      if (!cols.length) return null;
      return _react2.default.createElement(
        'tr',
        null,
        cols.map(function (o) {
          return _react2.default.createElement(
            'td',
            null,
            _this3.renderCell(o, r)
          );
        })
      );
    }
  }, {
    key: 'renderBody',
    value: function renderBody() {
      var _this4 = this;

      var cols = this.colums.filter(function (o) {
        return !o.hidden;
      });
      if (!cols.length) return null;
      var rows = this.rows.filter(function (o) {
        return !o.hidden;
      });
      return _react2.default.createElement(
        'div',
        { className: 'table-body' },
        _react2.default.createElement(
          'table',
          null,
          _react2.default.createElement(
            'tbody',
            null,
            rows.map(function (r) {
              return _this4.renderRow(r);
            })
          )
        )
      );
    }
  }, {
    key: 'renderFooter',
    value: function renderFooter() {
      return null;
    }
    // renderChildren() {return <div className='table-container'>
    //   {this.renderHeader()}
    //   {this.renderBody()}
    //   {this.renderFooter()}
    // </div>}

  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _this5 = this;

      var cols = this.colums.filter(function (o) {
        return !o.hidden;
      });
      if (!cols.length) return null;
      var rows = this.rows.filter(function (o) {
        return !o.hidden;
      });
      return _react2.default.createElement(
        'div',
        { className: 'table-container' },
        _react2.default.createElement(
          'table',
          null,
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              cols.map(function (o) {
                return _react2.default.createElement(
                  'td',
                  null,
                  _this5.renderHeaderCell(o)
                );
              })
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            rows.map(function (r) {
              return _this5.renderRow(r);
            })
          )
        )
      );
    }
  }, {
    key: 'cmpClassName',
    get: function get() {
      return 'table';
    }
  }, {
    key: 'colums',
    get: function get() {
      return [].concat(this.state.colums).filter(function (o) {
        return o;
      });
    },
    set: function set(v) {
      this.setAttr('colums', v);
    }
  }, {
    key: 'rows',
    get: function get() {
      return [].concat(this.state.rows).filter(function (o) {
        return o;
      });
    },
    set: function set(v) {
      this.setAttr('rows', v);
    }
  }, {
    key: 'settings',
    get: function get() {
      return this.state.settings;
    },
    set: function set(v) {
      this.setAttr('settings', (0, _extends3.default)({}, this.state.settings, v));
    }
  }, {
    key: 'apiSuccess',
    get: function get() {
      var _this6 = this;

      return function (data) {
        if (data.hasOwnProperty('settings')) _this6.settings = data.settings;
        if (data.hasOwnProperty('colums')) _this6.colums = data.colums;
        if (data.hasOwnProperty('rows')) _this6.rows = data.rows;
      };
    }
  }]);
  return Table;
}(_Component3.default);

exports.default = Table;

},{"./Component":230,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/extends":21,"babel-runtime/helpers/get":22,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],259:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodayOrderBox = function (_Component) {
  (0, _inherits3.default)(TodayOrderBox, _Component);

  function TodayOrderBox() {
    (0, _classCallCheck3.default)(this, TodayOrderBox);
    return (0, _possibleConstructorReturn3.default)(this, (TodayOrderBox.__proto__ || (0, _getPrototypeOf2.default)(TodayOrderBox)).apply(this, arguments));
  }

  (0, _createClass3.default)(TodayOrderBox, [{
    key: 'renderChildren',
    value: function renderChildren() {
      var _this2 = this;

      return [_react2.default.createElement('div', { className: 'box-title', dangerouslySetInnerHTML: { __html: 'Today\'s Order' } }), _react2.default.createElement(
        'div',
        { className: 'box-heading' },
        this.sale,
        ' ',
        this.currency
      ), _react2.default.createElement(
        'div',
        { className: 'box-content' },
        _react2.default.createElement(
          'div',
          { className: 'coins' },
          (0, _keys2.default)(this.coins).map(function (o) {
            return _react2.default.createElement(
              'div',
              { className: 'coin' },
              _react2.default.createElement(
                'div',
                { className: 'coin-name' },
                o
              ),
              _react2.default.createElement(
                'div',
                { className: 'coin-sale' },
                _this2.coins[o].format()
              )
            );
          })
        )
      ), _react2.default.createElement(
        'div',
        { className: 'box-percentage-wrapper' },
        _react2.default.createElement(
          'div',
          { className: 'box-percentage-text', style: { left: this.percentage + '%' } },
          this.percentage
        ),
        _react2.default.createElement('div', { className: 'box-percentage', style: { width: this.percentage + '%' } })
      )];
    }
  }, {
    key: 'cmpClassName',
    get: function get() {
      return 'box today-order ' + (this.negative ? 'negative' : 'positive');
    }
  }, {
    key: 'data',
    get: function get() {
      return this.props.data || {};
    }
  }, {
    key: 'coins',
    get: function get() {
      return this.data.coins || this.props.coins || {};
    }
  }, {
    key: 'sale',
    get: function get() {
      return this.data.sale || this.props.sale || 0;
    }
  }, {
    key: 'currency',
    get: function get() {
      return this.data.currency || this.props.currency || 'USD';
    }
  }, {
    key: 'percentage',
    get: function get() {
      return this.data.percentage || this.props.percentage || 0;
    }
  }, {
    key: 'negative',
    get: function get() {
      return this.data.negative || this.props.negative;
    }
  }]);
  return TodayOrderBox;
}(_Component3.default);

exports.default = TodayOrderBox;

},{"../utils":314,"./Component":230,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/core-js/object/keys":12,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],260:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodayVisitBox = function (_Component) {
  (0, _inherits3.default)(TodayVisitBox, _Component);

  function TodayVisitBox() {
    (0, _classCallCheck3.default)(this, TodayVisitBox);
    return (0, _possibleConstructorReturn3.default)(this, (TodayVisitBox.__proto__ || (0, _getPrototypeOf2.default)(TodayVisitBox)).apply(this, arguments));
  }

  (0, _createClass3.default)(TodayVisitBox, [{
    key: 'renderChildren',
    value: function renderChildren() {
      return [_react2.default.createElement('div', { className: 'box-title', dangerouslySetInnerHTML: { __html: 'Today\'s Visits' } }), _react2.default.createElement(
        'div',
        { className: 'box-heading' },
        this.total
      ), _react2.default.createElement(
        'div',
        { className: 'box-content' },
        _react2.default.createElement(
          'div',
          { className: 'today' },
          this.today
        ),
        _react2.default.createElement(
          'div',
          { className: 'live' },
          _react2.default.createElement('h3', { dangerouslySetInnerHTML: { __html: 'Live' } }),
          _react2.default.createElement(
            'span',
            null,
            this.live
          ),
          _react2.default.createElement('label', { dangerouslySetInnerHTML: { __html: 'visitors right now' } })
        )
      ), _react2.default.createElement(
        'div',
        { className: 'box-percentage-wrapper' },
        _react2.default.createElement(
          'div',
          { className: 'box-percentage-text', style: { left: this.percentage + '%' } },
          this.percentage
        ),
        _react2.default.createElement('div', { className: 'box-percentage', style: { width: this.percentage + '%' } })
      )];
    }
  }, {
    key: 'cmpClassName',
    get: function get() {
      return 'box today-visit ' + (this.negative ? 'negative' : 'positive');
    }
  }, {
    key: 'data',
    get: function get() {
      return this.props.data || {};
    }
  }, {
    key: 'total',
    get: function get() {
      return this.data.total || this.props.total || 0;
    }
  }, {
    key: 'live',
    get: function get() {
      return this.data.live || this.props.live || 0;
    }
  }, {
    key: 'percentage',
    get: function get() {
      return this.data.percentage || this.props.percentage || 0;
    }
  }, {
    key: 'negative',
    get: function get() {
      return this.data.negative || this.props.negative;
    }
  }, {
    key: 'today',
    get: function get() {
      return new Date().format();
    }
  }]);
  return TodayVisitBox;
}(_Component3.default);

exports.default = TodayVisitBox;

},{"../utils":314,"./Component":230,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],261:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserBox = function (_Component) {
  (0, _inherits3.default)(UserBox, _Component);

  function UserBox() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, UserBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = UserBox.__proto__ || (0, _getPrototypeOf2.default)(UserBox)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (v) {
      return _this.actions.Application_SwitchForm(v).then(function (e) {
        return _this.open(_this.utils.baseurl('login'));
      });
    }, _this.onClickSignOut = function (v) {
      return _this.actions.User_SignOut().then(function (e) {
        return _this.open(_this.utils.baseurl());
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(UserBox, [{
    key: 'renderUserInfo',
    value: function renderUserInfo() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        {
          onClick: function onClick(e) {
            return _this2.open('account');
          },
          className: 'user-info',
          title: typeof this.config.userHint == 'function' ? this.config.userHint(this.User) : ''
        },
        _react2.default.createElement(
          'div',
          { className: 'name' },
          this.displayName,
          _react2.default.createElement(
            'div',
            { className: 'status' },
            this.config.userVerified(this.User) ? 'verified' : 'not verified'
          )
        ),
        _react2.default.createElement('div', { className: 'avatar', style: this.avatar ? { backgroundImage: 'url(' + this.avatar + ')' } : {} })
      );
    }
  }, {
    key: 'renderLogged',
    value: function renderLogged() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { className: 'actions' },
        this.renderUserInfo(),
        _react2.default.createElement(
          'i',
          { className: 'material-icons', onClick: function onClick(e) {
              return _this3.onClickSignOut();
            } },
          'exit_to_app'
        )
      );
    }
  }, {
    key: 'renderUnlogged',
    value: function renderUnlogged() {
      var _this4 = this;

      return _react2.default.createElement(
        'div',
        { className: 'actions' },
        _react2.default.createElement(
          _Button2.default,
          { className: 'btn-signup transparent ' + (this.props.Application.form != 'signin' ? 'bordered' : ''), onClick: function onClick(e) {
              return _this4.onClick('signup');
            } },
          'Sign Up'
        ),
        _react2.default.createElement(
          _Button2.default,
          { className: 'btn-signin transparent ' + (this.props.Application.form == 'signin' ? 'bordered' : ''), onClick: function onClick(e) {
              return _this4.onClick('signin');
            } },
          'Sign In'
        )
      );
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      return this.logged ? this.renderLogged() : this.renderUnlogged();
    }
  }, {
    key: 'cmpClassName',
    get: function get() {
      return 'user-box';
    }
  }]);
  return UserBox;
}(_Component3.default);

exports.default = (0, _utils.connect)(UserBox);

},{"../utils":314,"./Button":229,"./Component":230,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],262:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Button = require('./Button');

Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Button).default;
  }
});

var _Component = require('./Component');

Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Component).default;
  }
});

var _ContactUs = require('./ContactUs');

Object.defineProperty(exports, 'ContactUs', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ContactUs).default;
  }
});

var _Content = require('./Content');

Object.defineProperty(exports, 'Content', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Content).default;
  }
});

var _Copyright = require('./Copyright');

Object.defineProperty(exports, 'Copyright', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Copyright).default;
  }
});

var _Footer = require('./Footer');

Object.defineProperty(exports, 'Footer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Footer).default;
  }
});

var _ForgotPassword = require('./ForgotPassword');

Object.defineProperty(exports, 'ForgotPassword', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ForgotPassword).default;
  }
});

var _Form = require('./Form');

Object.defineProperty(exports, 'Form', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Form).default;
  }
});

var _Header = require('./Header');

Object.defineProperty(exports, 'Header', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Header).default;
  }
});

var _Input = require('./Input');

Object.defineProperty(exports, 'Input', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Input).default;
  }
});

var _InputCountry = require('./InputCountry');

Object.defineProperty(exports, 'InputCountry', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_InputCountry).default;
  }
});

var _InputDate = require('./InputDate');

Object.defineProperty(exports, 'InputDate', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_InputDate).default;
  }
});

var _Introduction = require('./Introduction');

Object.defineProperty(exports, 'Introduction', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Introduction).default;
  }
});

var _Left = require('./Left');

Object.defineProperty(exports, 'Left', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Left).default;
  }
});

var _LineChart = require('./LineChart');

Object.defineProperty(exports, 'LineChart', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LineChart).default;
  }
});

var _Logo = require('./Logo');

Object.defineProperty(exports, 'Logo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Logo).default;
  }
});

var _Menu = require('./Menu');

Object.defineProperty(exports, 'Menu', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Menu).default;
  }
});
Object.defineProperty(exports, 'Message', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Component).default;
  }
});

var _Modal = require('./Modal');

Object.defineProperty(exports, 'Modal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Modal).default;
  }
});

var _MonthlyBox = require('./MonthlyBox');

Object.defineProperty(exports, 'MonthlyBox', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_MonthlyBox).default;
  }
});

var _Page = require('./Page');

Object.defineProperty(exports, 'Page', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Page).default;
  }
});

var _PieChart = require('./PieChart');

Object.defineProperty(exports, 'PieChart', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PieChart).default;
  }
});

var _SignInSignUp = require('./SignInSignUp');

Object.defineProperty(exports, 'SignInSignUp', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SignInSignUp).default;
  }
});

var _SignUp = require('./SignUp');

Object.defineProperty(exports, 'SignUp', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SignUp).default;
  }
});

var _SocialShare = require('./SocialShare');

Object.defineProperty(exports, 'SocialShare', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SocialShare).default;
  }
});

var _Space = require('./Space');

Object.defineProperty(exports, 'Space', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Space).default;
  }
});
Object.defineProperty(exports, 'Spinner', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Component).default;
  }
});

var _Step = require('./Step');

Object.defineProperty(exports, 'Step', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Step).default;
  }
});

var _Steps = require('./Steps');

Object.defineProperty(exports, 'Steps', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Steps).default;
  }
});

var _Table = require('./Table');

Object.defineProperty(exports, 'Table', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Table).default;
  }
});

var _TodayOrderBox = require('./TodayOrderBox');

Object.defineProperty(exports, 'TodayOrderBox', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TodayOrderBox).default;
  }
});

var _TodayVisitBox = require('./TodayVisitBox');

Object.defineProperty(exports, 'TodayVisitBox', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TodayVisitBox).default;
  }
});

var _UserBox = require('./UserBox');

Object.defineProperty(exports, 'UserBox', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_UserBox).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./Button":229,"./Component":230,"./ContactUs":231,"./Content":232,"./Copyright":233,"./Footer":234,"./ForgotPassword":235,"./Form":236,"./Header":237,"./Input":238,"./InputCountry":239,"./InputDate":240,"./Introduction":241,"./Left":242,"./LineChart":243,"./Logo":244,"./Menu":245,"./Modal":247,"./MonthlyBox":248,"./Page":249,"./PieChart":250,"./SignInSignUp":251,"./SignUp":252,"./SocialShare":253,"./Space":254,"./Step":256,"./Steps":257,"./Table":258,"./TodayOrderBox":259,"./TodayVisitBox":260,"./UserBox":261}],263:[function(require,module,exports){
"use strict";

module.exports = exports = {
  // apiurl: 'http://localhost:2810/admin/',
};

},{}],264:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils');

exports.default = (0, _utils.merge)(config, require('./dev'));

},{"../utils":314,"./dev":263}],265:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emitter = undefined;

var _fbemitter = require('fbemitter');

var emitter = exports.emitter = new _fbemitter.EventEmitter();

},{"fbemitter":160}],266:[function(require,module,exports){
'use strict';

var _applications = require('./applications');

require('./prototypes');
require('./config');


new _applications.Application().dispatch();

},{"./applications":228,"./config":264,"./prototypes":296}],267:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MetaLoader = exports.StyleLoader = exports.CssLoader = exports.JsLoader = exports.Loader = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = exports.Loader = function () {
    function Loader(obj, id, cb, t) {
        (0, _classCallCheck3.default)(this, Loader);

        this.id = id;
        this.obj = obj;
        this.callback_name = (this.id || '').replace(/\W/g, '_') + '_callback';
        this.event = (this.id || '').replace(/\W/g, '_') + '_loaded';
        this.callback = cb;
        this.time = t || 500;
    }

    (0, _createClass3.default)(Loader, [{
        key: 'set',
        value: function set(k, v) {
            this[k] = v;
            return this;
        }
    }, {
        key: 'addCallback',
        value: function addCallback() {
            (0, _utils.loadJs)('', this.callback_name, null, '\n            window.' + this.callback_name + ' = function() {\n                setTimeout(e => dispatchEvent(new CustomEvent(\'' + this.event + '\')), ' + this.time + ')\n            }\n        ');
        }
    }, {
        key: 'load',
        value: function load() {
            this.addCallback();
        }
    }]);
    return Loader;
}();

var JsLoader = exports.JsLoader = function (_Loader) {
    (0, _inherits3.default)(JsLoader, _Loader);

    function JsLoader() {
        (0, _classCallCheck3.default)(this, JsLoader);
        return (0, _possibleConstructorReturn3.default)(this, (JsLoader.__proto__ || (0, _getPrototypeOf2.default)(JsLoader)).apply(this, arguments));
    }

    (0, _createClass3.default)(JsLoader, [{
        key: 'load',
        value: function load() {
            (0, _get3.default)(JsLoader.prototype.__proto__ || (0, _getPrototypeOf2.default)(JsLoader.prototype), 'load', this).call(this);
            (0, _utils.loadJs)(this.obj, this.id, this.callback || window[this.callback_name]);
        }
    }]);
    return JsLoader;
}(Loader);

var CssLoader = exports.CssLoader = function (_Loader2) {
    (0, _inherits3.default)(CssLoader, _Loader2);

    function CssLoader() {
        (0, _classCallCheck3.default)(this, CssLoader);
        return (0, _possibleConstructorReturn3.default)(this, (CssLoader.__proto__ || (0, _getPrototypeOf2.default)(CssLoader)).apply(this, arguments));
    }

    (0, _createClass3.default)(CssLoader, [{
        key: 'load',
        value: function load() {
            (0, _get3.default)(CssLoader.prototype.__proto__ || (0, _getPrototypeOf2.default)(CssLoader.prototype), 'load', this).call(this);
            (0, _utils.loadCss)(this.obj, this.id, this.callback || window[this.callback_name]);
        }
    }]);
    return CssLoader;
}(Loader);

var StyleLoader = exports.StyleLoader = function (_Loader3) {
    (0, _inherits3.default)(StyleLoader, _Loader3);

    function StyleLoader() {
        (0, _classCallCheck3.default)(this, StyleLoader);
        return (0, _possibleConstructorReturn3.default)(this, (StyleLoader.__proto__ || (0, _getPrototypeOf2.default)(StyleLoader)).apply(this, arguments));
    }

    (0, _createClass3.default)(StyleLoader, [{
        key: 'load',
        value: function load() {
            (0, _get3.default)(StyleLoader.prototype.__proto__ || (0, _getPrototypeOf2.default)(StyleLoader.prototype), 'load', this).call(this);
            (0, _utils.loadStyle)(this.obj, this.id, this.callback || window[this.callback_name]);
        }
    }]);
    return StyleLoader;
}(Loader);

var MetaLoader = exports.MetaLoader = function (_Loader4) {
    (0, _inherits3.default)(MetaLoader, _Loader4);

    function MetaLoader() {
        (0, _classCallCheck3.default)(this, MetaLoader);
        return (0, _possibleConstructorReturn3.default)(this, (MetaLoader.__proto__ || (0, _getPrototypeOf2.default)(MetaLoader)).apply(this, arguments));
    }

    (0, _createClass3.default)(MetaLoader, [{
        key: 'load',
        value: function load() {
            (0, _get3.default)(MetaLoader.prototype.__proto__ || (0, _getPrototypeOf2.default)(MetaLoader.prototype), 'load', this).call(this);
            (0, _utils.loadMeta)(this.obj, this.id, this.callback || window[this.callback_name]);
        }
    }]);
    return MetaLoader;
}(Loader);

},{"../utils":314,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/get":22,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24}],268:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.headerMiddleware = undefined;

var _utils = require('../utils');

var headerMiddleware = exports.headerMiddleware = function headerMiddleware(store) {
  return function (next) {
    return function (action) {
      var User = store.getState().User.User,
          token = User.token;
      (0, _utils.requestHeader)('token', token);
      next(action);
    };
  };
};

},{"../utils":314}],269:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _headerMiddleware = require('./headerMiddleware');

Object.defineProperty(exports, 'headerMiddleware', {
  enumerable: true,
  get: function get() {
    return _headerMiddleware.headerMiddleware;
  }
});

},{"./headerMiddleware":268}],270:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _config = config,
    api = _config.api;
var acts = exports.acts = {
  Menus: 'api|get|true|body|' + api.menus,
  SwitchForm: 'SwitchForm',
  Indicator: 'Indicator',
  AddModal: 'AddModal',
  RemoveModal: 'RemoveModal',
  AddMessage: 'AddMessage',
  RemoveMessage: 'RemoveMessage'
};
var Menus = exports.Menus = {};
exports.default = {
  loading: false, error: false, persistent: false, loadmore: false,
  form: 'signin',
  modals: [],
  messages: [],
  acts: acts,
  Menus: Menus
};

},{}],271:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _config = config,
    api = _config.api;
var acts = exports.acts = {
  MonthlyReport: "api|get|true|body|" + api.monthly
};
var MonthlyReport = exports.MonthlyReport = {};
exports.default = {
  loading: false, error: false, persistent: false, loadmore: false,
  acts: acts,
  MonthlyReport: MonthlyReport
};

},{}],272:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _config = config,
    api = _config.api;
var acts = exports.acts = {
  Order: "api|get|true|body|" + api.todayorder,
  Visit: "api|get|true|body|" + api.todayvisit
};
var Order = exports.Order = {};
var Visit = exports.Visit = {};
exports.default = {
  loading: false, error: false, persistent: false, loadmore: false,
  acts: acts,
  Order: Order,
  Visit: Visit
};

},{}],273:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = exports.acts = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _config = config,
    api = _config.api;
var acts = exports.acts = {
  User: 'api|get|true|body|' + api.profile,
  Update: 'api|post|true|form|' + api.profile_update,
  SignIn: 'api|post|true|form|' + api.signin,
  SignUp: 'api|post|true|form|' + api.signup,
  SignOut: 'api|get|true|form|' + api.signout,
  ForgotPassword: 'api|get|true|form|' + api.forget_password,
  ChangePassword: 'api|post|true|form|' + api.change_password
};
var User = exports.User = {
  token: '',
  username: '',
  uid: '',
  phoneNumber: '',
  name: '',
  fname: '',
  lname: '',
  birthday: '',
  email: '',
  nationality: '',
  avatar: '',
  created_date: '',
  facebook: '',
  displayName: '',
  fullname: '',
  gender: '',
  documentType: '',
  document: '',
  verified: false
};
exports.default = {
  loading: false, error: false, persistent: true, loadmore: false,
  fields: (0, _keys2.default)(User),
  acts: acts,
  User: User
};

},{"babel-runtime/core-js/object/keys":12}],274:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _config = config,
    api = _config.api;
var acts = exports.acts = {
  Coins: "api|get|true|body|" + api.wallet
};
var Coins = exports.Coins = { list: [], filter: {}, loading: false };
exports.default = {
  loading: false, error: false, persistent: false, loadmore: false,
  acts: acts,
  Coins: Coins
};

},{}],275:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Application = require('./Application');

Object.defineProperty(exports, 'Application', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Application).default;
  }
});

var _MonthlyReport = require('./MonthlyReport');

Object.defineProperty(exports, 'MonthlyReport', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_MonthlyReport).default;
  }
});

var _TodayReport = require('./TodayReport');

Object.defineProperty(exports, 'TodayReport', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TodayReport).default;
  }
});

var _User = require('./User');

Object.defineProperty(exports, 'User', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_User).default;
  }
});

var _Wallet = require('./Wallet');

Object.defineProperty(exports, 'Wallet', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Wallet).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./Application":270,"./MonthlyReport":271,"./TodayReport":272,"./User":273,"./Wallet":274}],276:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AboutPage = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../components');

var _BasePage2 = require('./BasePage');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AboutPage = exports.AboutPage = function (_BasePage) {
  (0, _inherits3.default)(AboutPage, _BasePage);

  function AboutPage() {
    (0, _classCallCheck3.default)(this, AboutPage);
    return (0, _possibleConstructorReturn3.default)(this, (AboutPage.__proto__ || (0, _getPrototypeOf2.default)(AboutPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(AboutPage, [{
    key: 'renderMainContent',
    value: function renderMainContent() {
      return _react2.default.createElement(_components.Form, { className: 'inline' });
    }
  }, {
    key: 'cmpId',
    get: function get() {
      return 'page-about';
    }
  }, {
    key: 'html',
    get: function get() {
      return 'about.html';
    }
  }]);
  return AboutPage;
}(_BasePage2.BasePage);

},{"../components":262,"./BasePage":278,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],277:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccountPage = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../components');

var _BasePage2 = require('./BasePage');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AccountPage = exports.AccountPage = function (_BasePage) {
  (0, _inherits3.default)(AccountPage, _BasePage);

  function AccountPage() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AccountPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AccountPage.__proto__ || (0, _getPrototypeOf2.default)(AccountPage)).call.apply(_ref, [this].concat(args))), _this), _this.fullnameValid = function (e) {
      if (_this.state.fullname) {
        _this.fullnameInput.error = null;
        return true;
      }
      _this.fullnameInput.error = 'Please enter your full name';
    }, _this.emailValid = function (e) {
      if (_this.utils.validateEmail(_this.state.email)) {
        _this.emailInput.error = null;
        return true;
      }
      _this.emailInput.error = 'Email is invalid';
    }, _this.phoneNumberValid = function (e) {
      if (_this.state.phoneNumber) {
        _this.phoneNumberInput.error = null;
        return true;
      }
      _this.phoneNumberInput.error = 'Please enter your phone number';
    }, _this.nationalityValid = function (e) {
      if (_this.state.nationality) {
        _this.nationalityInput.error = null;
        return true;
      }
      _this.nationalityInput.error = 'Please enter your nationality';
    }, _this.birthdayValid = function (e) {
      if (_this.state.birthday) {
        _this.birthdayInput.error = null;
        return true;
      }
      _this.birthdayInput.error = 'Please enter your birthday';
    }, _this.onClickSave = function (e) {
      var valid = _this.fullnameValid();
      // if (valid) valid = this.emailValid()
      if (valid) valid = _this.phoneNumberValid();
      if (valid) valid = _this.nationalityValid();
      if (valid) valid = _this.birthdayValid();
      if (valid) {
        if (_this.config.firebase) {
          var data = _this.UserFields.reduce(function (rs, k) {
            rs[k] = _this.state[k] || '';
            return rs;
          }, {});
          firebase.database().ref('users/' + _this.User.username).set(data, function (err) {
            if (err) _this.actions.Application_AddMessage({ message: err.message, error: true });else _this.actions.Application_AddMessage({ message: 'Account saved successfully' });
          });
        } else _this.actions.User_Update(_this.state).then(function (e) {
          if (e.status == 200) _this.actions.Application_AddMessage({ message: 'Account saved successfully' });else _this.actions.Application_AddMessage({ message: e.message || 'Some error occurred', error: true });
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AccountPage, [{
    key: 'renderMainContent',
    value: function renderMainContent() {
      var _this2 = this;

      return _react2.default.createElement(
        _components.Form,
        { className: 'half' },
        _react2.default.createElement(
          'div',
          { className: 'heading' },
          'Account Details'
        ),
        _react2.default.createElement(
          'div',
          { className: 'horizontal fields-group' },
          _react2.default.createElement(_components.Input, { ref: function ref(e) {
              return _this2.fullnameInput = e;
            }, type: 'text', value: this.state.fullname,
            required: true,
            label: 'What is your full name?',
            description: 'Must match the full name on your ID.',
            placeholder: 'Full Name', onChange: function onChange(e) {
              return _this2.setState({ fullname: e.target.value });
            } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'horizontal fields-group' },
          _react2.default.createElement(_components.Input, { ref: function ref(e) {
              return _this2.lnameInput = e;
            }, type: 'text', value: this.state.lname,
            required: true,
            label: 'What is your last name?',
            description: 'Must match the last name on your ID.',
            placeholder: 'Last Name', onChange: function onChange(e) {
              return _this2.setState({ lname: e.target.value });
            } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'horizontal fields-group' },
          _react2.default.createElement(_components.Input, { ref: function ref(e) {
              return _this2.emailInput = e;
            }, type: 'email', value: this.state.email,
            required: true, disabled: true,
            label: 'What is your email address?',
            placeholder: 'Email Address', onChange: function onChange(e) {
              return _this2.setState({ email: e.target.value });
            } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'horizontal fields-group' },
          _react2.default.createElement(_components.Input, { ref: function ref(e) {
              return _this2.phoneNumberInput = e;
            }, type: 'text', value: this.state.phoneNumber,
            required: true,
            label: 'What is your phone number?',
            description: 'Please include your country code.',
            placeholder: 'Phone Number', onChange: function onChange(e) {
              return _this2.setState({ phoneNumber: e.target.value });
            } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'horizontal fields-group' },
          _react2.default.createElement(_components.InputCountry, { ref: function ref(e) {
              return _this2.nationalityInput = e;
            }, value: this.state.nationality,
            required: true,
            label: 'What is your nationality?',
            description: 'Must match your proof of identity document.',
            placeholder: 'Nationality', onChange: function onChange(e) {
              return _this2.setState({ nationality: e.target.value });
            }
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'horizontal fields-group' },
          _react2.default.createElement(_components.InputDate, { ref: function ref(e) {
              return _this2.birthdayInput = e;
            }, value: this.state.birthday,
            required: true,
            label: 'What is your birthday?',
            placeholder: 'Birthday', onChange: function onChange(e) {
              return _this2.setState({ birthday: e.target.value });
            }
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'actions' },
          _react2.default.createElement(
            _components.Button,
            { className: 'btn-submit', onClick: function onClick(e) {
                return _this2.onClickSave();
              } },
            'Save'
          )
        )
      );
    }
  }, {
    key: 'cmpId',
    get: function get() {
      return 'page-account';
    }
  }, {
    key: 'private',
    get: function get() {
      return true;
    }
  }]);
  return AccountPage;
}(_BasePage2.BasePage);

},{"../components":262,"./BasePage":278,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],278:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasePage = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BasePage = exports.BasePage = function (_Page) {
  (0, _inherits3.default)(BasePage, _Page);

  function BasePage() {
    (0, _classCallCheck3.default)(this, BasePage);
    return (0, _possibleConstructorReturn3.default)(this, (BasePage.__proto__ || (0, _getPrototypeOf2.default)(BasePage)).apply(this, arguments));
  }

  (0, _createClass3.default)(BasePage, [{
    key: 'initialState',
    value: function initialState() {
      return this.state = (0, _extends3.default)({}, (0, _get3.default)(BasePage.prototype.__proto__ || (0, _getPrototypeOf2.default)(BasePage.prototype), 'initialState', this).call(this), {
        html: null
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      (0, _get3.default)(BasePage.prototype.__proto__ || (0, _getPrototypeOf2.default)(BasePage.prototype), 'componentDidMount', this).call(this);
      this.actions.User_Load(JSON.parse(localStorage.getItem('User')));
      if (this.html) this.utils.apiCall.get(this.utils.baseurl('static/html/' + this.html)).then(function (res) {
        return _this2.setState({ html: res.data });
      });
    }
    // renderTopHeader() {return <div className='top-header'></div>}

  }, {
    key: 'renderHeader',
    value: function renderHeader() {
      return _react2.default.createElement(
        _components.Header,
        null,
        _react2.default.createElement(_components.Logo, null),
        _react2.default.createElement(_components.Space, null),
        _react2.default.createElement(_components.Menu, { className: 'top', items: this.props.Application.Menus.top }),
        _react2.default.createElement(_components.UserBox, null)
      );
    }
  }, {
    key: 'renderLeft',
    value: function renderLeft() {
      var _this3 = this;

      return _react2.default.createElement(_components.Left, { ref: function ref(e) {
          return _this3.left = e;
        }, items: this.props.Application.Menus.left });
    }
  }, {
    key: 'renderMain',
    value: function renderMain() {
      var _this4 = this;

      return _react2.default.createElement(
        'div',
        { ref: function ref(e) {
            return _this4.main = e;
          }, className: 'main' },
        this.renderStaticHtml(),
        !this.private || this.logged ? this.renderMainContent() : this.renderMainContentAnonymous()
      );
    }
  }, {
    key: 'renderStaticHtml',
    value: function renderStaticHtml() {
      return this.state.html ? _react2.default.createElement('div', { className: 'static-html', dangerouslySetInnerHTML: { __html: this.state.html } }) : null;
    }
  }, {
    key: 'renderMainContent',
    value: function renderMainContent() {
      return null;
    }
  }, {
    key: 'renderMainContentAnonymous',
    value: function renderMainContentAnonymous() {
      return _react2.default.createElement(
        'div',
        { className: 'not-logged' },
        _react2.default.createElement(_components.Introduction, null),
        _react2.default.createElement(_components.SignInSignUp, null)
      );
    }
  }, {
    key: 'renderRight',
    value: function renderRight() {
      var _this5 = this;

      return _react2.default.createElement(
        'div',
        { ref: function ref(e) {
            return _this5.right = e;
          }, className: 'right' },
        _react2.default.createElement(
          'div',
          { className: 'wrapper' },
          this.renderRightContent()
        )
      );
    }
  }, {
    key: 'renderRightContent',
    value: function renderRightContent() {
      return null;
    }
  }, {
    key: 'renderPageComponents',
    value: function renderPageComponents() {
      return [this.renderLeft(), this.renderMain(), this.renderRight()];
    }
  }, {
    key: 'private',
    get: function get() {
      return false;
    }
  }, {
    key: 'html',
    get: function get() {
      return null;
    }
  }]);
  return BasePage;
}(_components.Page);

},{"../components":262,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/extends":21,"babel-runtime/helpers/get":22,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],279:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BountyPage = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../components');

var _BasePage2 = require('./BasePage');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BountyPage = exports.BountyPage = function (_BasePage) {
  (0, _inherits3.default)(BountyPage, _BasePage);

  function BountyPage() {
    (0, _classCallCheck3.default)(this, BountyPage);
    return (0, _possibleConstructorReturn3.default)(this, (BountyPage.__proto__ || (0, _getPrototypeOf2.default)(BountyPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(BountyPage, [{
    key: 'renderMainContent',
    value: function renderMainContent() {
      return _react2.default.createElement(_components.Form, { className: 'inline' });
    }
  }, {
    key: 'cmpId',
    get: function get() {
      return 'page-bounty';
    }
  }, {
    key: 'html',
    get: function get() {
      return 'bounty.html';
    }
  }]);
  return BountyPage;
}(_BasePage2.BasePage);

},{"../components":262,"./BasePage":278,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],280:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BuyersPage = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../components');

var _BasePage2 = require('./BasePage');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BuyersPage = exports.BuyersPage = function (_BasePage) {
  (0, _inherits3.default)(BuyersPage, _BasePage);

  function BuyersPage() {
    (0, _classCallCheck3.default)(this, BuyersPage);
    return (0, _possibleConstructorReturn3.default)(this, (BuyersPage.__proto__ || (0, _getPrototypeOf2.default)(BuyersPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(BuyersPage, [{
    key: 'renderMainContent',
    value: function renderMainContent() {
      return _react2.default.createElement(_components.Form, { className: 'inline' });
    }
  }, {
    key: 'cmpId',
    get: function get() {
      return 'page-security';
    }
  }, {
    key: 'html',
    get: function get() {
      return 'buyers.html';
    }
  }]);
  return BuyersPage;
}(_BasePage2.BasePage);

},{"../components":262,"./BasePage":278,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],281:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashboardPage = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../components');

var _BasePage2 = require('./BasePage');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DashboardPage = exports.DashboardPage = function (_BasePage) {
  (0, _inherits3.default)(DashboardPage, _BasePage);

  function DashboardPage() {
    (0, _classCallCheck3.default)(this, DashboardPage);
    return (0, _possibleConstructorReturn3.default)(this, (DashboardPage.__proto__ || (0, _getPrototypeOf2.default)(DashboardPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(DashboardPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _get3.default)(DashboardPage.prototype.__proto__ || (0, _getPrototypeOf2.default)(DashboardPage.prototype), 'componentDidMount', this).call(this);
      this.actions.MonthlyReport_MonthlyReport();
      this.actions.TodayReport_Order();
      this.actions.TodayReport_Visit();
    }
  }, {
    key: 'renderMainContent',
    value: function renderMainContent() {
      var _this2 = this;

      return _react2.default.createElement(
        _components.Form,
        { className: 'inline' },
        _react2.default.createElement(
          'div',
          { className: 'boxes' },
          _react2.default.createElement(_components.MonthlyBox, { data: this.props.MonthlyReport.MonthlyReport }),
          _react2.default.createElement(_components.TodayOrderBox, { data: this.props.TodayReport.Order }),
          _react2.default.createElement(_components.TodayVisitBox, { data: this.props.TodayReport.Visit })
        ),
        _react2.default.createElement(
          'div',
          { className: 'boxes' },
          _react2.default.createElement(_components.PieChart, { id: 'piechart' }),
          _react2.default.createElement(_components.LineChart, { id: 'linechart', className: 'flex1 right', height: 300, ref: function ref(e) {
              return _this2.statisticLineChart = e;
            }, api: this.config.api.statistic,
            apiSuccess: function apiSuccess(data) {
              return _this2.statisticLineChart.data = data;
            } })
        )
      );
    }
  }, {
    key: 'cmpId',
    get: function get() {
      return 'page-dashboard';
    }
  }, {
    key: 'private',
    get: function get() {
      return true;
    }
  }]);
  return DashboardPage;
}(_BasePage2.BasePage);

},{"../components":262,"./BasePage":278,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/get":22,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],282:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FaqPage = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../components');

var _BasePage2 = require('./BasePage');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaqPage = exports.FaqPage = function (_BasePage) {
  (0, _inherits3.default)(FaqPage, _BasePage);

  function FaqPage() {
    (0, _classCallCheck3.default)(this, FaqPage);
    return (0, _possibleConstructorReturn3.default)(this, (FaqPage.__proto__ || (0, _getPrototypeOf2.default)(FaqPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(FaqPage, [{
    key: 'renderMainContent',
    value: function renderMainContent() {
      return _react2.default.createElement(_components.Form, { className: 'inline' });
    }
  }, {
    key: 'cmpId',
    get: function get() {
      return 'page-security';
    }
  }, {
    key: 'html',
    get: function get() {
      return 'faq.html';
    }
  }]);
  return FaqPage;
}(_BasePage2.BasePage);

},{"../components":262,"./BasePage":278,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],283:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomePage = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DashboardPage2 = require('./DashboardPage');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = exports.HomePage = function (_DashboardPage) {
  (0, _inherits3.default)(HomePage, _DashboardPage);

  function HomePage() {
    (0, _classCallCheck3.default)(this, HomePage);
    return (0, _possibleConstructorReturn3.default)(this, (HomePage.__proto__ || (0, _getPrototypeOf2.default)(HomePage)).apply(this, arguments));
  }

  return HomePage;
}(_DashboardPage2.DashboardPage);

},{"./DashboardPage":281,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],284:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginPage = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../components');

var _BasePage2 = require('./BasePage');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginPage = exports.LoginPage = function (_BasePage) {
  (0, _inherits3.default)(LoginPage, _BasePage);

  function LoginPage() {
    (0, _classCallCheck3.default)(this, LoginPage);
    return (0, _possibleConstructorReturn3.default)(this, (LoginPage.__proto__ || (0, _getPrototypeOf2.default)(LoginPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(LoginPage, [{
    key: 'cmpId',
    get: function get() {
      return 'page-login';
    }
  }, {
    key: 'private',
    get: function get() {
      return true;
    }
  }]);
  return LoginPage;
}(_BasePage2.BasePage);

},{"../components":262,"./BasePage":278,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],285:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PasswordPage = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../components');

var _BasePage2 = require('./BasePage');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PasswordPage = exports.PasswordPage = function (_BasePage) {
  (0, _inherits3.default)(PasswordPage, _BasePage);

  function PasswordPage() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PasswordPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PasswordPage.__proto__ || (0, _getPrototypeOf2.default)(PasswordPage)).call.apply(_ref, [this].concat(args))), _this), _this.passwordValid = function (e) {
      if (_this.state.opassword && _this.state.password && _this.state.password.length >= 6 && _this.state.password == _this.state.confirm) {
        _this.opassword.error = null;
        _this.password.error = null;
        _this.confirm.error = null;
        return true;
      }
      if (!_this.state.opassword) {
        _this.opassword.error = 'Please provide your old password';
        _this.password.error = null;
        _this.confirm.error = null;
      }
      if (!_this.state.password || _this.state.password.length < 6) {
        _this.opassword.error = null;
        _this.password.error = 'Password is invalid, must have at least 6 characters';
        _this.confirm.error = null;
      } else if (_this.state.password != _this.state.confirm) {
        _this.opassword.error = null;
        _this.password.error = null;
        _this.confirm.error = 'Password confirm does not match';
      }
    }, _this.showError = function (err) {
      return _this.actions.Application_AddModal({ header: 'Error!', content: _react2.default.createElement(
          'p',
          null,
          'Some error occurred: ',
          _react2.default.createElement(
            'span',
            { className: 'red-text' },
            err && err.message || ''
          ),
          '.',
          _react2.default.createElement('br', null),
          ' Please try again.'
        ) });
    }, _this.showSuccess = function (e) {
      return _this.actions.Application_AddModal({ header: 'Congratulation!', content: _react2.default.createElement(
          'p',
          null,
          'You have changed password successfully'
        ) });
    }, _this.onClickSave = function (e) {
      var valid = _this.passwordValid();
      if (valid) {
        if (_this.config.firebase) {
          firebase.auth().signInWithEmailAndPassword(_this.User.email, _this.state.opassword).then(function (user) {
            firebase.auth().currentUser.updatePassword(_this.state.password).then(function (e) {
              return _this.showSuccess(e);
            }).catch(function (err) {
              return _this.showError(err);
            });
          }).catch(function (err) {
            return _this.showError(err);
          });
        } else _this.actions.ChangePassword(_this.state).then(function (e) {
          if (e.status == 200) _this.showSuccess();else _this.showError(err);
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PasswordPage, [{
    key: 'renderMainContent',
    value: function renderMainContent() {
      var _this2 = this;

      return _react2.default.createElement(
        _components.Form,
        { className: 'inline form-password' },
        _react2.default.createElement(
          'div',
          { className: 'heading' },
          'Password change'
        ),
        _react2.default.createElement(
          'p',
          null,
          '- All the usual warning about good passwords apply, plus it\'s your money!',
          _react2.default.createElement('br', null),
          '- For your protection, we must be very conservative when processing password reset requests.'
        ),
        _react2.default.createElement(_components.Input, { autocomplete: 'off', name: 'opassword', ref: function ref(e) {
            return _this2.opassword = e;
          }, type: 'password', value: this.state.password, label: 'Old password', placeholder: 'Old password', onChange: function onChange(e) {
            return _this2.setState({ opassword: e.target.value });
          } }),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(_components.Input, { name: 'password', ref: function ref(e) {
            return _this2.password = e;
          }, type: 'password', value: this.state.password, label: 'New password', placeholder: 'New password', onChange: function onChange(e) {
            return _this2.setState({ password: e.target.value });
          } }),
        _react2.default.createElement(_components.Input, { name: 'confirm', ref: function ref(e) {
            return _this2.confirm = e;
          }, type: 'password', value: this.state.confirm, label: 'Confirm password', placeholder: 'Confirm password', onChange: function onChange(e) {
            return _this2.setState({ confirm: e.target.value });
          } }),
        _react2.default.createElement(
          'div',
          { className: 'actions' },
          _react2.default.createElement(
            _components.Button,
            { className: 'btn-submit', onClick: function onClick(e) {
                return _this2.onClickSave();
              } },
            'Change'
          )
        )
      );
    }
  }, {
    key: 'cmpId',
    get: function get() {
      return 'page-password';
    }
  }, {
    key: 'private',
    get: function get() {
      return true;
    }
  }]);
  return PasswordPage;
}(_BasePage2.BasePage);

},{"../components":262,"./BasePage":278,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],286:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProspectivePage = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../components');

var _BasePage2 = require('./BasePage');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProspectivePage = exports.ProspectivePage = function (_BasePage) {
  (0, _inherits3.default)(ProspectivePage, _BasePage);

  function ProspectivePage() {
    (0, _classCallCheck3.default)(this, ProspectivePage);
    return (0, _possibleConstructorReturn3.default)(this, (ProspectivePage.__proto__ || (0, _getPrototypeOf2.default)(ProspectivePage)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProspectivePage, [{
    key: 'renderMainContent',
    value: function renderMainContent() {
      var _this2 = this;

      return _react2.default.createElement(
        _components.Form,
        { className: 'inline' },
        _react2.default.createElement(
          'p',
          null,
          'If you would like to implement ICOSID for your ICO, please ',
          _react2.default.createElement(
            'a',
            { onClick: function onClick(e) {
                return _this2.actions.Application_AddModal({ header: 'Contact Us', content: _react2.default.createElement(_components.ContactUs, null) });
              } },
            'Contact Us'
          )
        )
      );
    }
  }, {
    key: 'cmpId',
    get: function get() {
      return 'page-prospective';
    }
  }, {
    key: 'html',
    get: function get() {
      return 'prospective.html';
    }
  }]);
  return ProspectivePage;
}(_BasePage2.BasePage);

},{"../components":262,"./BasePage":278,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],287:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecurityPage = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../components');

var _BasePage2 = require('./BasePage');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SecurityPage = exports.SecurityPage = function (_BasePage) {
  (0, _inherits3.default)(SecurityPage, _BasePage);

  function SecurityPage() {
    (0, _classCallCheck3.default)(this, SecurityPage);
    return (0, _possibleConstructorReturn3.default)(this, (SecurityPage.__proto__ || (0, _getPrototypeOf2.default)(SecurityPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(SecurityPage, [{
    key: 'renderMainContent',
    value: function renderMainContent() {
      return _react2.default.createElement(
        _components.Form,
        { className: 'inline' },
        _react2.default.createElement(
          'div',
          { className: 'heading' },
          'Two-Factor Authentication'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Two-Factor Authentication makes your account strongly secure.'
        ),
        _react2.default.createElement(
          'div',
          { className: 'horizontal space-between' },
          _react2.default.createElement(
            'div',
            null,
            'Two-factor authentication'
          ),
          _react2.default.createElement(
            'div',
            null,
            'Google Authenticator'
          ),
          _react2.default.createElement(
            'div',
            null,
            'Enable Authentication'
          )
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'div',
          { className: 'heading' },
          'Latest Activity'
        ),
        _react2.default.createElement(
          'p',
          null,
          'The activity history displays information about time, IP addresses and devices from which your profile has been recently accessed. If you see any suspicious activity, you can terminate it here.'
        ),
        _react2.default.createElement(_components.Table, { api: this.config.api.securities })
      );
    }
  }, {
    key: 'cmpId',
    get: function get() {
      return 'page-security';
    }
  }, {
    key: 'private',
    get: function get() {
      return true;
    }
  }]);
  return SecurityPage;
}(_BasePage2.BasePage);

},{"../components":262,"./BasePage":278,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],288:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerificationPage = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../components');

var _BasePage2 = require('./BasePage');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VerificationPage = exports.VerificationPage = function (_BasePage) {
  (0, _inherits3.default)(VerificationPage, _BasePage);

  function VerificationPage() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, VerificationPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = VerificationPage.__proto__ || (0, _getPrototypeOf2.default)(VerificationPage)).call.apply(_ref, [this].concat(args))), _this), _this.fullnameValid = function (e) {
      if (_this.state.fullname) {
        _this.fullnameInput.error = null;
        return true;
      }
      _this.fullnameInput.error = 'Please enter your fullname';
    }, _this.genderValid = function (e) {
      if (_this.state.gender) {
        _this.genderInput.error = null;
        return true;
      }
      _this.genderInput.error = 'Please specify your gender';
    }, _this.nationalityValid = function (e) {
      if (_this.state.nationality) {
        _this.nationalityInput.error = null;
        return true;
      }
      _this.nationalityInput.error = 'Please give your nationality';
    }, _this.phoneNumberValid = function (e) {
      if (_this.state.phoneNumber) {
        _this.phoneNumberInput.error = null;
        return true;
      }
      _this.phoneNumberInput.error = 'Please give your phone number';
    }, _this.documentTypeValid = function (e) {
      if (_this.state.documentType) {
        _this.documentTypeInput.error = null;
        return true;
      }
      _this.documentTypeInput.error = 'Please specify your document type';
    }, _this.documentValid = function (e) {
      if (_this.state.document) {
        _this.documentInput.error = null;
        return true;
      }
      _this.documentInput.error = 'Please uploade your document';
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(VerificationPage, [{
    key: 'onValidateKYC',
    value: function onValidateKYC() {
      var _this2 = this;

      var valid = this.fullnameValid();
      if (valid) valid = this.genderValid();
      if (valid) valid = this.nationalityValid();
      if (valid) valid = this.phoneNumberValid();
      if (valid) {
        if (this.config.firebase) {
          var data = this.UserFields.reduce(function (rs, k) {
            rs[k] = _this2.state[k] || '';
            return rs;
          }, {});
          firebase.database().ref('users/' + this.User.username).set(data, function (err) {
            if (err) _this2.actions.Application_AddMessage({ message: err.message, error: true });else _this2.actions.Application_AddMessage({ message: 'Account saved successfully' });
          });
        } else this.actions.User_Update(this.state).then(function (e) {
          if (e.status == 200) _this2.actions.Application_AddMessage({ message: 'Account saved successfully' });else _this2.actions.Application_AddMessage({ message: e.message || 'Some error occurred', error: true });
        });
      }
      return valid;
    }
  }, {
    key: 'onValidatePoR',
    value: function onValidatePoR() {
      var _this3 = this;

      var valid = this.documentTypeValid();
      // if (valid) valid = this.documentValid()
      if (valid) {
        if (this.config.firebase) {
          var data = this.UserFields.reduce(function (rs, k) {
            rs[k] = _this3.state[k] || '';
            return rs;
          }, {});
          firebase.database().ref('users/' + this.User.username).set(data, function (err) {
            if (err) _this3.actions.Application_AddMessage({ message: err.message, error: true });else _this3.actions.Application_AddMessage({ message: 'Account saved successfully' });
          });
        } else this.actions.User_Update(this.state).then(function (e) {
          if (e.status == 200) _this3.actions.Application_AddMessage({ message: 'Account saved successfully' });else _this3.actions.Application_AddMessage({ message: e.message || 'Some error occurred', error: true });
        });
      }
      return valid;
    }
  }, {
    key: 'renderMainContent',
    value: function renderMainContent() {
      var _this4 = this;

      return _react2.default.createElement(
        _components.Form,
        { className: 'form-verification' },
        _react2.default.createElement(
          'div',
          { className: 'heading' },
          'Verification'
        ),
        _react2.default.createElement(
          _components.Steps,
          { current: 0, stopJumping: true },
          _react2.default.createElement(
            _components.Step,
            { name: 'Intro', notitle: true },
            _react2.default.createElement(
              'p',
              null,
              'You should obtain two levels of verification: ',
              _react2.default.createElement('br', null),
              '- KYC by Onfido ',
              _react2.default.createElement('br', null),
              '- Proof of Residence.',
              _react2.default.createElement('br', null),
              'For each subsequent level can not go without passing the previous levels.'
            )
          ),
          _react2.default.createElement(
            _components.Step,
            { name: 'KYC', validate: this.onValidateKYC.bind(this) },
            _react2.default.createElement(
              'p',
              null,
              'Complete verification to unlock account opportunities. Verification procedure is very simple and intuitive. We will only ask you to provide us some personal information and supporting documents.'
            ),
            _react2.default.createElement(
              'div',
              { className: 'warning-block' },
              _react2.default.createElement(
                'i',
                { className: 'material-icons' },
                'warning'
              ),
              'If you provide fake or incorrect documents, we can block your account without any explanation.'
            ),
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
              'div',
              { className: 'horizontal fields-group' },
              _react2.default.createElement(_components.Input, { className: 'flex2', autocomplete: 'off', required: true, ref: function ref(e) {
                  return _this4.fullnameInput = e;
                }, value: this.state.fullname, label: 'Full name', placeholder: 'Full name', onChange: function onChange(e) {
                  return _this4.setState({ fullname: e.target.value });
                } }),
              _react2.default.createElement(_components.InputDate, { className: 'flex1', ref: function ref(e) {
                  return _this4.birthdayInput = e;
                }, value: this.state.birthday, required: true,
                label: 'Birthday', placeholder: 'Birthday',
                onChange: function onChange(e) {
                  return _this4.setState({ birthday: e.target.value });
                }
              }),
              _react2.default.createElement(_components.Input, { className: 'flex1', autocomplete: 'off', required: true, ref: function ref(e) {
                  return _this4.genderInput = e;
                }, type: 'select', value: this.state.gender, label: 'Gender', placeholder: 'Gender', onChange: function onChange(e) {
                  return _this4.setState({ gender: e.target.value });
                },
                api: this.config.api.genders })
            ),
            _react2.default.createElement(
              'div',
              { className: 'horizontal fields-group' },
              _react2.default.createElement(_components.InputCountry, { autocomplete: 'off', required: true, ref: function ref(e) {
                  return _this4.nationalityInput = e;
                },
                value: this.state.nationality,
                label: 'Nationality', placeholder: 'Nationality',
                onChange: function onChange(e) {
                  return _this4.setState({ nationality: e.target.value });
                }
              }),
              _react2.default.createElement(_components.Input, { autocomplete: 'off', required: true, ref: function ref(e) {
                  return _this4.phoneNumberInput = e;
                }, value: this.state.phoneNumber, label: 'Mobile', placeholder: 'Mobile', onChange: function onChange(e) {
                  return _this4.setState({ phoneNumber: e.target.value });
                } })
            )
          ),
          _react2.default.createElement(
            _components.Step,
            { name: 'PoR', validate: this.onValidatePoR.bind(this) },
            _react2.default.createElement(
              'div',
              { className: 'horizontal fields-group' },
              _react2.default.createElement(_components.Input, { className: 'flex1', autocomplete: 'off', required: true, ref: function ref(e) {
                  return _this4.documentTypeInput = e;
                }, type: 'select', value: this.state.documentType, label: 'Document type', placeholder: 'Document type', onChange: function onChange(e) {
                  return _this4.setState({ documentType: e.target.value });
                },
                api: this.config.api.documentTypes }),
              _react2.default.createElement(_components.Input, { className: 'flex3', autocomplete: 'off', required: true, ref: function ref(e) {
                  return _this4.documentInput = e;
                }, type: 'file', value: this.state.document, label: 'Document', placeholder: 'Document', onChange: function onChange(e) {
                  return _this4.setState({ document: e.target.value });
                } })
            )
          )
        )
      );
    }
  }, {
    key: 'cmpId',
    get: function get() {
      return 'page-verification';
    }
  }, {
    key: 'private',
    get: function get() {
      return true;
    }
  }]);
  return VerificationPage;
}(_BasePage2.BasePage);

},{"../components":262,"./BasePage":278,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],289:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WalletPage = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../components');

var _BasePage2 = require('./BasePage');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WalletPage = exports.WalletPage = function (_BasePage) {
  (0, _inherits3.default)(WalletPage, _BasePage);

  function WalletPage() {
    (0, _classCallCheck3.default)(this, WalletPage);
    return (0, _possibleConstructorReturn3.default)(this, (WalletPage.__proto__ || (0, _getPrototypeOf2.default)(WalletPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(WalletPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _get3.default)(WalletPage.prototype.__proto__ || (0, _getPrototypeOf2.default)(WalletPage.prototype), 'componentDidMount', this).call(this);
      this.actions.Wallet_Coins();
    }
  }, {
    key: 'renderMainContent',
    value: function renderMainContent() {
      return _react2.default.createElement(
        _components.Form,
        { className: 'inline wallet-items' },
        this.items.map(function (o) {
          return _react2.default.createElement(
            'div',
            { className: 'wallet-item', 'data-code': o.code, 'data-name': o.name },
            _react2.default.createElement(
              'div',
              { className: 'wallet-item-amount', 'data-code': o.code, 'data-name': o.name },
              o.amount,
              _react2.default.createElement(
                'span',
                { className: 'wallet-item-usd' },
                o.usd
              )
            )
          );
        })
      );
    }
  }, {
    key: 'cmpId',
    get: function get() {
      return 'page-wallet';
    }
  }, {
    key: 'html',
    get: function get() {
      return 'wallet.html';
    }
  }, {
    key: 'items',
    get: function get() {
      return [].concat(this.props.Wallet.Coins.list).filter(function (o) {
        return o;
      });
    }
  }]);
  return WalletPage;
}(_BasePage2.BasePage);

},{"../components":262,"./BasePage":278,"babel-runtime/core-js/object/get-prototype-of":11,"babel-runtime/helpers/classCallCheck":18,"babel-runtime/helpers/createClass":19,"babel-runtime/helpers/get":22,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/possibleConstructorReturn":24,"react":"react"}],290:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AboutPage = require('./AboutPage');

Object.defineProperty(exports, 'AboutPage', {
  enumerable: true,
  get: function get() {
    return _AboutPage.AboutPage;
  }
});

var _AccountPage = require('./AccountPage');

Object.defineProperty(exports, 'AccountPage', {
  enumerable: true,
  get: function get() {
    return _AccountPage.AccountPage;
  }
});

var _BountyPage = require('./BountyPage');

Object.defineProperty(exports, 'BountyPage', {
  enumerable: true,
  get: function get() {
    return _BountyPage.BountyPage;
  }
});

var _BuyersPage = require('./BuyersPage');

Object.defineProperty(exports, 'BuyersPage', {
  enumerable: true,
  get: function get() {
    return _BuyersPage.BuyersPage;
  }
});

var _DashboardPage = require('./DashboardPage');

Object.defineProperty(exports, 'DashboardPage', {
  enumerable: true,
  get: function get() {
    return _DashboardPage.DashboardPage;
  }
});

var _FaqPage = require('./FaqPage');

Object.defineProperty(exports, 'FaqPage', {
  enumerable: true,
  get: function get() {
    return _FaqPage.FaqPage;
  }
});

var _HomePage = require('./HomePage');

Object.defineProperty(exports, 'HomePage', {
  enumerable: true,
  get: function get() {
    return _HomePage.HomePage;
  }
});

var _LoginPage = require('./LoginPage');

Object.defineProperty(exports, 'LoginPage', {
  enumerable: true,
  get: function get() {
    return _LoginPage.LoginPage;
  }
});

var _PasswordPage = require('./PasswordPage');

Object.defineProperty(exports, 'PasswordPage', {
  enumerable: true,
  get: function get() {
    return _PasswordPage.PasswordPage;
  }
});

var _ProspectivePage = require('./ProspectivePage');

Object.defineProperty(exports, 'ProspectivePage', {
  enumerable: true,
  get: function get() {
    return _ProspectivePage.ProspectivePage;
  }
});

var _SecurityPage = require('./SecurityPage');

Object.defineProperty(exports, 'SecurityPage', {
  enumerable: true,
  get: function get() {
    return _SecurityPage.SecurityPage;
  }
});

var _VerificationPage = require('./VerificationPage');

Object.defineProperty(exports, 'VerificationPage', {
  enumerable: true,
  get: function get() {
    return _VerificationPage.VerificationPage;
  }
});

var _WalletPage = require('./WalletPage');

Object.defineProperty(exports, 'WalletPage', {
  enumerable: true,
  get: function get() {
    return _WalletPage.WalletPage;
  }
});

},{"./AboutPage":276,"./AccountPage":277,"./BountyPage":279,"./BuyersPage":280,"./DashboardPage":281,"./FaqPage":282,"./HomePage":283,"./LoginPage":284,"./PasswordPage":285,"./ProspectivePage":286,"./SecurityPage":287,"./VerificationPage":288,"./WalletPage":289}],291:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _utils = require('../utils');

var _all = require('./all');

var all = _interopRequireWildcard(_all);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _keys2.default)(all).reduce(function (rs, k) {
  rs[k] = (0, _utils.connect)(all[k]);
  return rs;
}, {});

},{"../utils":314,"./all":290,"babel-runtime/core-js/object/keys":12}],292:[function(require,module,exports){
"use strict";

Array.prototype.merge = function () {
  return this.concat.apply(this, arguments).filter(function (o) {
    return o;
  });
};
Array.prototype.diff = function (a) {
  return this.filter(function (o) {
    return a.indexOf(o) < 0;
  });
};

},{}],293:[function(require,module,exports){
"use strict";

Date.prototype.format = function (f) {
  if (!jQuery) return this.toLocaleDateString();
  if (!f && (!config || !config.dateformat)) return this.toLocaleDateString();
  if (!f) f = config.dateformat;
  return jQuery.datepicker.formatDate(f, this);
};

},{}],294:[function(require,module,exports){
'use strict';

Number.prototype.format = function () {
  return this.toFixed(9);
};
Number.prototype.percent = function (n) {
  if (n) return '' + this.toFixed(9) + '%';
  return '' + this + '%';
};

},{}],295:[function(require,module,exports){
"use strict";

String.prototype.lcfirst = function () {
    return this.substr(0, 1).toLowerCase() + this.substr(1);
};
String.prototype.toCamel = function () {
    var str = this.replace(/^([A-Z])|\s([a-z])/g, function (match, p1, p2, offset) {
        if (p2) return " " + p2.toUpperCase();
        return p1.toLowerCase();
    });
    return str;
};
String.prototype.ucfirst = function () {
    return this.substr(0, 1).toUpperCase() + this.substr(1);
};

},{}],296:[function(require,module,exports){
'use strict';

require('./Array');
require('./Date');
require('./Number');
require('./String');

},{"./Array":292,"./Date":293,"./Number":294,"./String":295}],297:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function (name, state, action, initialState) {
  var subname = 'Menus',
      props = name + '_' + subname;
  switch (action.type) {
    case name + '_Indicator':
      {
        state.loading = action.payload;
        return state;
      }

    case name + '_SwitchForm':
      {
        state.form = action.payload;
        return state;
      }
    case name + '_AddModal':
      {
        state.modals.push(action.payload);
        return state;
      }
    case name + '_RemoveModal':
      {
        var i = state.modals.indexOf(action.payload);
        if (i >= 0) state.modals.splice(i, 1);
        return state;
      }

    case name + '_AddMessage':
      {
        state.messages.push(action.payload);
        return state;
      }
    case name + '_RemoveMessage':
      {
        var _i = state.messages.indexOf(action.payload);
        if (_i >= 0) state.messages.splice(_i, 1);
        return state;
      }

    case props + '_Pending':
      {
        return (0, _extends3.default)({}, state, { loading: true });
      }
    case props + '_Success':
      {
        state[subname] = (0, _extends3.default)({}, state[subname], action.payload);
        state[subname].loaded = true;
        return (0, _extends3.default)({}, state, { loading: false });
      }
    case props + '_Failure':
      {
        return (0, _extends3.default)({}, state, { loading: false });
      }
  }
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"babel-runtime/helpers/extends":21}],298:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function (name, state, action, initialState) {
  switch (action.type) {
    case name + "_Order_Pending":
      {
        state.Order.loading = true;
        return state;
      }
    case name + "_Order_Success":
      {
        state.Order = (0, _extends3.default)({}, state.Order, action.payload, { loaded: true });
        return state;
      }
    case name + "_Order_Failure":
      {
        state.Order.loading = false;
        return state;
      }

    case name + "_Visit_Pending":
      {
        state.Visit.loading = true;
        return state;
      }
    case name + "_Visit_Success":
      {
        state.Visit = (0, _extends3.default)({}, state.Visit, action.payload, { loaded: true });
        return state;
      }
    case name + "_Visit_Failure":
      {
        state.Visit.loading = false;
        return state;
      }
  }
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"babel-runtime/helpers/extends":21}],299:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends5 = require('babel-runtime/helpers/extends');

var _extends6 = _interopRequireDefault(_extends5);

exports.default = function (name, state, action, initialState) {
  switch (action.type) {
    case name + '_ChangePassword_Pending':
      {
        return (0, _extends6.default)({}, state, { loading: true });
      }
    case name + '_ChangePassword_Success':
      {
        return (0, _extends6.default)({}, state, { error: false, loading: false });
      }
    case name + '_ChangePassword_Failure':
      {
        return (0, _extends6.default)({}, state, action.payload, { loading: false });
      }

    case name + '_Update_Pending':
      {
        return (0, _extends6.default)({}, state, { loading: true });
      }
    case name + '_Update_Success':
      {
        state[name] = action.payload;
        (0, _persit.persitUser)(state[name]);
        return (0, _extends6.default)({}, state, { error: false, loading: false });
      }
    case name + '_Update_Failure':
      {
        return (0, _extends6.default)({}, state, action.payload, { loading: false });
      }

    case name + '_Register_Pending':
      {
        return (0, _extends6.default)({}, state, { loading: true });
      }
    case name + '_Register_Success':
      {
        return (0, _extends6.default)({}, state, { error: false }, action.payload, { loading: false });
      }
    case name + '_Register_Failure':
      {
        return (0, _extends6.default)({}, state, action.payload, { loading: false });
      }

    case name + '_SignIn_Pending':
      {
        return (0, _extends6.default)({}, state, { loading: true });
      }
    case name + '_SignIn_Success':
      {
        state[name] = action.payload;
        (0, _persit.persitUser)(state[name]);
        return (0, _extends6.default)({}, state, { error: false, loading: false });
      }
    case name + '_SignIn_Failure':
      {
        return (0, _extends6.default)({}, state, action.payload, { loading: false });
      }

    case name + '_SignOut_Pending':
      {
        var _extends2;

        (0, _persit.persitUser)({});
        return (0, _extends6.default)({}, state, (_extends2 = {}, (0, _defineProperty3.default)(_extends2, name, {}), (0, _defineProperty3.default)(_extends2, 'error', false), (0, _defineProperty3.default)(_extends2, 'loading', false), _extends2));
      }
    case name + '_SignOut_Success':
      {
        var _extends3;

        return (0, _extends6.default)({}, state, (_extends3 = {}, (0, _defineProperty3.default)(_extends3, name, {}), (0, _defineProperty3.default)(_extends3, 'error', false), (0, _defineProperty3.default)(_extends3, 'loading', false), _extends3));
      }
    case name + '_SignOut_Failure':
      {
        var _extends4;

        return (0, _extends6.default)({}, state, (_extends4 = {}, (0, _defineProperty3.default)(_extends4, name, {}), (0, _defineProperty3.default)(_extends4, 'error', false), (0, _defineProperty3.default)(_extends4, 'loading', false), _extends4));
      }
  }
};

var _persit = require('../persit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"../persit":305,"babel-runtime/helpers/defineProperty":20,"babel-runtime/helpers/extends":21}],300:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, state, action, initialState) {
  switch (action.type) {
    case name + "_Coins_Pending":
      {
        state.Coins.loading = true;
        return state;
      }
    case name + "_Coins_Success":
      {
        state.Coins.list = action.payload;
        state.Coins.loading = false;
        return state;
      }
    case name + "_Coins_Failure":
      {
        state.Coins.loading = false;
        return state;
      }
  }
};

},{}],301:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _models = require('../models');

var models = _interopRequireWildcard(_models);

var _utils = require('../utils');

var _helper = require('./helper');

var _custom = require('./custom');

var custom = _interopRequireWildcard(_custom);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reducerGenerator(name) {
  var initialState = models[name] || {};
  var loadmore = initialState.loadmore;

  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    if ((0, _typeof3.default)(action.payload) == 'object' && action.payload && action.payload.hasOwnProperty('dispatchConfig')) return state;
    var rs = void 0;
    if (custom[name]) rs = custom[name](name, state, action, initialState);
    if (!rs) rs = (0, _helper.stateToProps)(name, state, action, loadmore);
    if (!rs) rs = state;
    return (0, _extends3.default)({}, rs, { __flag: !rs.__flag });
  };
}

var all = {};
(0, _keys2.default)(models).map(function (name) {
  var model = models[name] || {};
  all[name] = reducerGenerator(name);
});
exports.default = all;

},{"../models":275,"../utils":314,"./custom":302,"./helper":303,"babel-runtime/core-js/object/keys":12,"babel-runtime/helpers/extends":21,"babel-runtime/helpers/typeof":26}],302:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Application = require('./Application');

Object.defineProperty(exports, 'Application', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Application).default;
  }
});

var _TodayReport = require('./TodayReport');

Object.defineProperty(exports, 'TodayReport', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TodayReport).default;
  }
});

var _User = require('./User');

Object.defineProperty(exports, 'User', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_User).default;
  }
});

var _Wallet = require('./Wallet');

Object.defineProperty(exports, 'Wallet', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Wallet).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./Application":297,"./TodayReport":298,"./User":299,"./Wallet":300}],303:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.stateToProps = stateToProps;

var _utils = require('../utils');

var _persit = require('./persit');

var persit = _interopRequireWildcard(_persit);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _config = config,
    MAX_PAGE = _config.MAX_PAGE;
function stateToProps(name, state, action, loadmore) {
  var subname = name + 's',
      prop = name + '_' + name,
      props = name + '_' + subname;

  switch (action.type) {
    case name + '_Load':
      {
        var data = state[name] = (0, _extends3.default)({}, state[name], action.payload || {});
        return state;
      }
    case name + '_Clear':
      {
        state.message = false;
        state.error = false;
        state.loading = false;
        return state;
      }
    case name + '_Error':
      {
        return (0, _extends3.default)({}, state, { error: action.payload, loading: false });
      }
    case name + '_Save':
      {
        state[name] = (0, _extends3.default)({}, state[name], action.payload || {});
        if (persit['persit' + name]) persit['persit' + name](state[name]);
        return state;
      }
    case name + '_Unload':
      {
        state[name] = {};
        if (persit['persit' + name]) persit['persit' + name](state[name]);
        return state;
      }
    case prop + '_Pending':
      {
        return (0, _extends3.default)({}, state, { loading: true });
      }
    case prop + '_Success':
      {
        state[name] = (0, _extends3.default)({}, state[name], action.payload || {});
        if (persit['persit' + name]) persit['persit' + name](state[name]);
        state.loading = false;
        return state;
      }
    case prop + '_Failure':
      {
        return (0, _extends3.default)({}, state, { loading: false });
      }

    //subname
    case name + '_Select':
      {
        var item = state[subname].list.find(function (o) {
          o.selected = false;
          return o.id == action.payload.id;
        });
        if (item) item.selected = true;
        return state;
      }
    case name + '_LoadAll':
      {
        var _data = state[subname] = (0, _extends3.default)({}, state[subname], action.payload || {});
        return state;
      }
    case name + '_SaveAll':
      {
        state[subname] = (0, _extends3.default)({}, state[subname], action.payload || {});
        if (persit['persit' + subname]) persit['persit' + subname](state[subname]);
        return state;
      }

    case name + '_Loadmore':
      {
        var page = state[subname].filter.page;
        state[subname].filter.page = page < MAX_PAGE ? page + 1 : page;
        return state;
      }
    case name + '_Search':
      {
        state[subname].filter = (0, _extends3.default)({}, state[subname].filter, action.payload, { page: 0 });
        return state;
      }
    case name + '_Reset':
      {
        state.error = false;
        state.message = false;
        state[subname].filter.page = 0;
        state[subname].list = [];
        state[subname].loaded = false;
        return state;
      }

    case props + '_Pending':
      {
        return (0, _extends3.default)({}, state, { loading: true });
      }
    case props + '_Success':
      {
        state[subname].list = [].concat(loadmore ? state[subname].list : null).concat(action.payload).filter(function (o) {
          return o;
        }).reduce(function (rs, o) {
          if (!rs.find(function (c) {
            return c.id == o.id;
          })) rs.push(o);
          return rs;
        }, []);
        state[subname].loaded = true;
        return (0, _extends3.default)({}, state, { loading: false });
      }
    case props + '_Failure':
      {
        return (0, _extends3.default)({}, state, { loading: false });
      }
  }
}

},{"../utils":314,"./persit":305,"babel-runtime/helpers/extends":21}],304:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducers = undefined;

var _redux = require('redux');

var _all = require('./all');

var _all2 = _interopRequireDefault(_all);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)(_all2.default);

exports.reducers = reducers;

},{"./all":301,"redux":"redux"}],305:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.persitUser = persitUser;

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function persitUser(User) {
  localStorage.setItem('User', (0, _stringify2.default)(User));
}

},{"../utils":314,"babel-runtime/core-js/json/stringify":4}],306:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _pages = require('../pages');

var _pages2 = _interopRequireDefault(_pages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apppath = (config.apppath || '').trim().replace(/\/*$/g, '') + '/';

var routes = exports.routes = [{ path: '' + apppath, component: _pages2.default.HomePage }].concat((0, _keys2.default)(_pages2.default).filter(function (o) {
  return o && o != 'HomePage';
}).map(function (o) {
  return { path: '' + apppath + o.replace('Page', '').toLowerCase(), component: _pages2.default[o] };
})).map(function (r, i) {
  return _react2.default.createElement(_reactRouter.Route, (0, _extends3.default)({ key: i, exact: true }, r));
});

},{"../pages":291,"babel-runtime/core-js/object/keys":12,"babel-runtime/helpers/extends":21,"react":"react","react-router":"react-router"}],307:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = undefined;
exports.appstore = appstore;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _middlewares = require('../middlewares');

var _reducers = require('../reducers');

var _models = require('../models');

var models = _interopRequireWildcard(_models);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function appstore() {
  var middleware = (0, _redux.applyMiddleware)(_reduxThunk2.default, _middlewares.headerMiddleware);
  var enhancer = (0, _redux.compose)(middleware);
  return (0, _redux.createStore)(_reducers.reducers, models, enhancer);
}

var store = exports.store = appstore();

},{"../middlewares":269,"../models":275,"../reducers":304,"redux":"redux","redux-thunk":"redux-thunk"}],308:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiCall = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.requestHeaders = requestHeaders;
exports.requestHeader = requestHeader;
exports.apicall = apicall;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _emitter = require('../emitter');

var _log = require('./log');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apiCall = _axios2.default.create({
  timeout: 60000,
  maxRedirects: 10,
  maxContentLength: 50 * 1000 * 1000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'token': ''
  }
});

apiCall.interceptors.response.use(function (res, req) {
  (0, _log.log)('api', res.request.responseURL);
  return res;
}, function (error) {
  var res = error.response || {};

  var _ref = res || {},
      data = _ref.data,
      status = _ref.status;

  var _ref2 = data || {},
      code = _ref2.code,
      message = _ref2.message;

  (0, _log.log)('api-error', code, message, res.request.responseURL, (0, _stringify2.default)(data));
  if (status === 401 || status === 403) {
    requestHeader('token', '');
    localStorage.clear();
    _emitter.emitter.emit('not-authenticated');
  }
  return _promise2.default.reject(res);
});
function requestHeaders(headers) {
  (0, _keys2.default)(headers || {}).map(function (k) {
    apiCall.defaults.headers[k] = headers[k];
  });
}
function requestHeader(k, v) {
  apiCall.defaults.headers[k] = v;
}
function apicall(headers) {
  requestHeaders(headers);
  return apiCall;
}
exports.apiCall = apiCall;

},{"../emitter":265,"./log":316,"axios":"axios","babel-runtime/core-js/json/stringify":4,"babel-runtime/core-js/object/keys":12,"babel-runtime/core-js/promise":14}],309:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.append = append;
exports.loadJs = loadJs;
exports.loadCss = loadCss;
exports.loadStyle = loadStyle;
exports.loadMeta = loadMeta;

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function append(tagName, props) {
  if (document.getElementById(props.id)) return props.onload ? props.onload() : true;
  props = (0, _keys2.default)(props).reduce(function (rs, k) {
    if (props[k]) rs[k] = props[k];
    return rs;
  }, {});
  var tags = document.getElementsByTagName(tagName),
      el = document.createElement(tagName);
  (0, _objectAssign2.default)(el, props);
  document.head.appendChild(el);
}
function loadJs(src, id, onload, innerHTML) {
  append('script', { src: src, id: id, onload: onload, innerHTML: innerHTML });
}
function loadCss(href, id, onload) {
  append('link', { id: id, href: href, type: 'text/css', rel: 'stylesheet', onload: onload });
}
function loadStyle(style, id, onload) {
  append('style', { id: id, innerHTML: style, onload: onload });
}
function loadMeta(name, content, onload) {
  append('meta', { id: name, name: name, content: content, onload: onload });
}

},{"babel-runtime/core-js/object/keys":12,"object-assign":179}],310:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getOwnPropertyDescriptors = require('babel-runtime/core-js/object/get-own-property-descriptors');

var _getOwnPropertyDescriptors2 = _interopRequireDefault(_getOwnPropertyDescriptors);

exports.connect = connect;

var _reactRedux = require('react-redux');

var _mapDispatchToProps = require('./mapDispatchToProps');

var _mapStateToProps = require('./mapStateToProps');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('../prototypes');

function connect(o) {
  var no = (0, _reactRedux.connect)(_mapStateToProps.mapStateToProps, _mapDispatchToProps.mapDispatchToProps)(o);
  if (!no.prototype) return no;
  var descriptors = (0, _getOwnPropertyDescriptors2.default)(o.prototype),
      keys = (0, _keys2.default)(descriptors);
  var ndescriptors = (0, _getOwnPropertyDescriptors2.default)(no.prototype),
      nkeys = (0, _keys2.default)(ndescriptors);
  var exclusion = [/initialState/, /^render.*/];
  var diff = keys.diff(nkeys).filter(function (k) {
    return !exclusion.reduce(function (rs, reg) {
      if (!rs) rs = reg.test(k);
      return rs;
    }, false);
  });
  diff.forEach(function (k) {
    if (!no.prototype) return;
    var descriptor = descriptors[k];
    try {
      // Object.defineProperty(no.prototype, k, descriptors[k])
    } catch (e) {
      console.log('Failed', o.name, k, e.message, descriptor);
    }
  });
  return no;
}

},{"../prototypes":296,"./mapDispatchToProps":317,"./mapStateToProps":318,"babel-runtime/core-js/object/get-own-property-descriptors":10,"babel-runtime/core-js/object/keys":12,"react-redux":"react-redux"}],311:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

exports.exclude = exclude;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function exclude(o) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (!args.length) return o;
  return (0, _keys2.default)(o).reduce(function (rs, k) {
    !args.includes(k) ? rs[k] = o[k] : false;
    return rs;
  }, {});
}

},{"babel-runtime/core-js/object/keys":12}],312:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.history = undefined;

var _createBrowserHistory = require('history/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = exports.history = (0, _createBrowserHistory2.default)();

},{"history/createBrowserHistory":171}],313:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

exports.include = include;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function include(o) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (!args.length) return o;
  return (0, _keys2.default)(o).reduce(function (rs, k) {
    args.includes(k) ? rs[k] = o[k] : false;
    return rs;
  }, {});
}

},{"babel-runtime/core-js/object/keys":12}],314:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apiCall = require('./apiCall');

Object.defineProperty(exports, 'apiCall', {
  enumerable: true,
  get: function get() {
    return _apiCall.apiCall;
  }
});
Object.defineProperty(exports, 'requestHeader', {
  enumerable: true,
  get: function get() {
    return _apiCall.requestHeader;
  }
});
Object.defineProperty(exports, 'requestHeaders', {
  enumerable: true,
  get: function get() {
    return _apiCall.requestHeaders;
  }
});

var _append = require('./append');

Object.defineProperty(exports, 'append', {
  enumerable: true,
  get: function get() {
    return _append.append;
  }
});
Object.defineProperty(exports, 'loadJs', {
  enumerable: true,
  get: function get() {
    return _append.loadJs;
  }
});
Object.defineProperty(exports, 'loadCss', {
  enumerable: true,
  get: function get() {
    return _append.loadCss;
  }
});
Object.defineProperty(exports, 'loadStyle', {
  enumerable: true,
  get: function get() {
    return _append.loadStyle;
  }
});
Object.defineProperty(exports, 'loadMeta', {
  enumerable: true,
  get: function get() {
    return _append.loadMeta;
  }
});

var _connect = require('./connect');

Object.defineProperty(exports, 'connect', {
  enumerable: true,
  get: function get() {
    return _connect.connect;
  }
});

var _exclude = require('./exclude');

Object.defineProperty(exports, 'exclude', {
  enumerable: true,
  get: function get() {
    return _exclude.exclude;
  }
});

var _history = require('./history');

Object.defineProperty(exports, 'history', {
  enumerable: true,
  get: function get() {
    return _history.history;
  }
});

var _include = require('./include');

Object.defineProperty(exports, 'include', {
  enumerable: true,
  get: function get() {
    return _include.include;
  }
});

var _isMobile = require('./isMobile');

Object.defineProperty(exports, 'isMobile', {
  enumerable: true,
  get: function get() {
    return _isMobile.isMobile;
  }
});

var _log = require('./log');

Object.defineProperty(exports, 'log', {
  enumerable: true,
  get: function get() {
    return _log.log;
  }
});

var _mapDispatchToProps = require('./mapDispatchToProps');

Object.defineProperty(exports, 'mapDispatchToProps', {
  enumerable: true,
  get: function get() {
    return _mapDispatchToProps.mapDispatchToProps;
  }
});

var _mapStateToProps = require('./mapStateToProps');

Object.defineProperty(exports, 'mapStateToProps', {
  enumerable: true,
  get: function get() {
    return _mapStateToProps.mapStateToProps;
  }
});

var _merge = require('./merge');

Object.defineProperty(exports, 'merge', {
  enumerable: true,
  get: function get() {
    return _merge.merge;
  }
});

var _openNewTab = require('./openNewTab');

Object.defineProperty(exports, 'openNewTab', {
  enumerable: true,
  get: function get() {
    return _openNewTab.openNewTab;
  }
});

var _query = require('./query');

Object.defineProperty(exports, 'query', {
  enumerable: true,
  get: function get() {
    return _query.query;
  }
});

var _url = require('./url');

Object.defineProperty(exports, 'url', {
  enumerable: true,
  get: function get() {
    return _url.url;
  }
});
Object.defineProperty(exports, 'url_is_absolute', {
  enumerable: true,
  get: function get() {
    return _url.url_is_absolute;
  }
});
Object.defineProperty(exports, 'url_normalize', {
  enumerable: true,
  get: function get() {
    return _url.url_normalize;
  }
});
Object.defineProperty(exports, 'baseurl', {
  enumerable: true,
  get: function get() {
    return _url.baseurl;
  }
});
Object.defineProperty(exports, 'apiurl', {
  enumerable: true,
  get: function get() {
    return _url.apiurl;
  }
});

var _uuid = require('./uuid');

Object.defineProperty(exports, 'uuid', {
  enumerable: true,
  get: function get() {
    return _uuid.uuid;
  }
});

var _validateEmail = require('./validateEmail');

Object.defineProperty(exports, 'validateEmail', {
  enumerable: true,
  get: function get() {
    return _validateEmail.validateEmail;
  }
});

},{"./apiCall":308,"./append":309,"./connect":310,"./exclude":311,"./history":312,"./include":313,"./isMobile":315,"./log":316,"./mapDispatchToProps":317,"./mapStateToProps":318,"./merge":319,"./openNewTab":320,"./query":321,"./url":322,"./uuid":323,"./validateEmail":324}],315:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMobile = isMobile;
function isMobile() {
  return jQuery(window).width() <= 768;
}

},{}],316:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = log;
function log() {
  var _console;

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  (_console = console).log.apply(_console, [config.appname + "-Log"].concat(args));
}

},{}],317:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapDispatchToProps = mapDispatchToProps;

var _redux = require('redux');

var _actions = require('../actions');

var _models = require('../models');

var models = _interopRequireWildcard(_models);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(_actions.actions, dispatch),
    dispatch: dispatch
  };
}

},{"../actions":223,"../models":275,"redux":"redux"}],318:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.mapStateToProps = mapStateToProps;

var _redux = require('redux');

var _actions = require('../actions');

var _models = require('../models');

var models = _interopRequireWildcard(_models);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return (0, _keys2.default)(models).reduce(function (rs, k) {
    rs[k] = state[k];
    return rs;
  }, {});
}

},{"../actions":223,"../models":275,"babel-runtime/core-js/object/keys":12,"redux":"redux"}],319:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.isObject = isObject;
exports.merge = merge;

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isObject(o) {
  if (!o) return false;
  if (Array.isArray(o)) return false;
  return (typeof o === 'undefined' ? 'undefined' : (0, _typeof3.default)(o)) == 'object';
}
function merge(target, o) {
  if (!isObject(target)) return target = o;
  if (!isObject(o)) return target;
  if (!target) target = {};
  var keys = (0, _from2.default)(new _set2.default([].concat((0, _keys2.default)(target)).concat((0, _keys2.default)(o)).filter(function (o) {
    return o;
  })));
  target = keys.reduce(function (rs, k) {
    var v = o[k];
    if (v !== undefined) rs[k] = !isObject(v) ? v : (0, _objectAssign2.default)({}, rs[k], v);
    return rs;
  }, target);
  return target;
}

},{"babel-runtime/core-js/array/from":1,"babel-runtime/core-js/object/keys":12,"babel-runtime/core-js/set":15,"babel-runtime/helpers/typeof":26,"object-assign":179}],320:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openNewTab = openNewTab;
function openNewTab(url) {
  window.open(url);
}

},{}],321:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.query = query;

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function query(o) {
  if ((typeof o === 'undefined' ? 'undefined' : (0, _typeof3.default)(o)) != 'object') return o;
  return _querystring2.default.stringify(o);
}

},{"babel-runtime/helpers/typeof":26,"querystring":189}],322:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.url_is_absolute = url_is_absolute;
exports.url_normalize = url_normalize;
exports.baseurl = baseurl;
exports.apiurl = apiurl;
exports.url = url;
function url_is_absolute(root, o) {
  return o.startsWith('http') || o.startsWith('/') || o.startsWith(root);
}
function url_normalize(root, o) {
  var uri = !o || o == '/' ? root : o.replace(/\{root\}/g, root || '');
  if (!url_is_absolute(root, uri)) uri = '' + root + uri;
  return uri;
}
function baseurl(o) {
  return url_normalize(config.baseurl, o);
}
function apiurl(o) {
  return url_normalize(config.apiurl, o);
}
function url(o, query) {
  var uri = o || '';
  if (!query) return uri;
  uri = uri.replace(/\W+$/g, '');
  query = (query || '').replace(/^\W+/g, '').replace(/\W+$/g, '');
  return uri.includes('?') ? uri + '&' + query : uri + '?' + query;
}

},{}],323:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uuid = undefined;

var _v = require('uuid/v1');

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uuid = exports.uuid = _v2.default;

},{"uuid/v1":220}],324:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateEmail = validateEmail;
function validateEmail(s) {
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(s);
}

},{}]},{},[266])

//# sourceMappingURL=index.js.map