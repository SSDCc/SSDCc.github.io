definePlugin('@plugins/com.msgbyte.posthog', ['@capital/common'], (function (common) { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  // Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
  // This work is free. You can redistribute it and/or modify it
  // under the terms of the WTFPL, Version 2
  // For more information see LICENSE.txt or http://www.wtfpl.net/
  //
  // For more information, the home page:
  // http://pieroxy.net/blog/pages/lz-string/testing.html
  //
  // LZ-based compression algorithm, version 1.4.4
  // private property
  var f = String.fromCharCode;
  var keyStrBase64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  var keyStrUriSafe = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$';
  var baseReverseDic = {};

  function getBaseValue(alphabet, character) {
    if (!baseReverseDic[alphabet]) {
      baseReverseDic[alphabet] = {};

      for (var i = 0; i < alphabet.length; i++) {
        baseReverseDic[alphabet][alphabet.charAt(i)] = i;
      }
    }

    return baseReverseDic[alphabet][character];
  }

  var LZString = {
    compressToBase64: function compressToBase64(input) {
      if (input == null) return '';

      var res = LZString._compress(input, 6, function (a) {
        return keyStrBase64.charAt(a);
      });

      switch (res.length % 4 // To produce valid Base64
      ) {
        default: // When could this happen ?

        case 0:
          return res;

        case 1:
          return res + '===';

        case 2:
          return res + '==';

        case 3:
          return res + '=';
      }
    },
    decompressFromBase64: function decompressFromBase64(input) {
      if (input == null) return '';
      if (input == '') return null;
      return LZString._decompress(input.length, 32, function (index) {
        return getBaseValue(keyStrBase64, input.charAt(index));
      });
    },
    compressToUTF16: function compressToUTF16(input) {
      if (input == null) return '';
      return LZString._compress(input, 15, function (a) {
        return f(a + 32);
      }) + ' ';
    },
    decompressFromUTF16: function decompressFromUTF16(compressed) {
      if (compressed == null) return '';
      if (compressed == '') return null;
      return LZString._decompress(compressed.length, 16384, function (index) {
        return compressed.charCodeAt(index) - 32;
      });
    },
    //compress into uint8array (UCS-2 big endian format)
    compressToUint8Array: function compressToUint8Array(uncompressed) {
      var compressed = LZString.compress(uncompressed);
      var buf = new Uint8Array(compressed.length * 2); // 2 bytes per character

      for (var i = 0, TotalLen = compressed.length; i < TotalLen; i++) {
        var current_value = compressed.charCodeAt(i);
        buf[i * 2] = current_value >>> 8;
        buf[i * 2 + 1] = current_value % 256;
      }

      return buf;
    },
    //decompress from uint8array (UCS-2 big endian format)
    decompressFromUint8Array: function decompressFromUint8Array(compressed) {
      if (compressed === null || compressed === undefined) {
        return LZString.decompress(compressed);
      } else {
        var buf = new Array(compressed.length / 2); // 2 bytes per character

        for (var i = 0, TotalLen = buf.length; i < TotalLen; i++) {
          buf[i] = compressed[i * 2] * 256 + compressed[i * 2 + 1];
        }

        var result = [];
        buf.forEach(function (c) {
          result.push(f(c));
        });
        return LZString.decompress(result.join(''));
      }
    },
    //compress into a string that is already URI encoded
    compressToEncodedURIComponent: function compressToEncodedURIComponent(input) {
      if (input == null) return '';
      return LZString._compress(input, 6, function (a) {
        return keyStrUriSafe.charAt(a);
      });
    },
    //decompress from an output of compressToEncodedURIComponent
    decompressFromEncodedURIComponent: function decompressFromEncodedURIComponent(input) {
      if (input == null) return '';
      if (input == '') return null;
      input = input.replace(/ /g, '+');
      return LZString._decompress(input.length, 32, function (index) {
        return getBaseValue(keyStrUriSafe, input.charAt(index));
      });
    },
    compress: function compress(uncompressed) {
      return LZString._compress(uncompressed, 16, function (a) {
        return f(a);
      });
    },
    _compress: function _compress(uncompressed, bitsPerChar, getCharFromInt) {
      if (uncompressed == null) return '';
      var i,
          value,
          context_c = '',
          context_wc = '',
          context_w = '',
          context_enlargeIn = 2,
          // Compensate for the first entry which should not count
      context_dictSize = 3,
          context_numBits = 2,
          context_data_val = 0,
          context_data_position = 0,
          ii;
      var context_dictionary = {},
          context_dictionaryToCreate = {},
          context_data = [];

      for (ii = 0; ii < uncompressed.length; ii += 1) {
        context_c = uncompressed.charAt(ii);

        if (!Object.prototype.hasOwnProperty.call(context_dictionary, context_c)) {
          context_dictionary[context_c] = context_dictSize++;
          context_dictionaryToCreate[context_c] = true;
        }

        context_wc = context_w + context_c;

        if (Object.prototype.hasOwnProperty.call(context_dictionary, context_wc)) {
          context_w = context_wc;
        } else {
          if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
            if (context_w.charCodeAt(0) < 256) {
              for (i = 0; i < context_numBits; i++) {
                context_data_val = context_data_val << 1;

                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }
              }

              value = context_w.charCodeAt(0);

              for (i = 0; i < 8; i++) {
                context_data_val = context_data_val << 1 | value & 1;

                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }

                value = value >> 1;
              }
            } else {
              value = 1;

              for (i = 0; i < context_numBits; i++) {
                context_data_val = context_data_val << 1 | value;

                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }

                value = 0;
              }

              value = context_w.charCodeAt(0);

              for (i = 0; i < 16; i++) {
                context_data_val = context_data_val << 1 | value & 1;

                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }

                value = value >> 1;
              }
            }

            context_enlargeIn--;

            if (context_enlargeIn == 0) {
              context_enlargeIn = Math.pow(2, context_numBits);
              context_numBits++;
            }

            delete context_dictionaryToCreate[context_w];
          } else {
            value = context_dictionary[context_w];

            for (i = 0; i < context_numBits; i++) {
              context_data_val = context_data_val << 1 | value & 1;

              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }

              value = value >> 1;
            }
          }

          context_enlargeIn--;

          if (context_enlargeIn == 0) {
            context_enlargeIn = Math.pow(2, context_numBits);
            context_numBits++;
          } // Add wc to the dictionary.


          context_dictionary[context_wc] = context_dictSize++;
          context_w = String(context_c);
        }
      } // Output the code for w.


      if (context_w !== '') {
        if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
          if (context_w.charCodeAt(0) < 256) {
            for (i = 0; i < context_numBits; i++) {
              context_data_val = context_data_val << 1;

              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
            }

            value = context_w.charCodeAt(0);

            for (i = 0; i < 8; i++) {
              context_data_val = context_data_val << 1 | value & 1;

              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }

              value = value >> 1;
            }
          } else {
            value = 1;

            for (i = 0; i < context_numBits; i++) {
              context_data_val = context_data_val << 1 | value;

              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }

              value = 0;
            }

            value = context_w.charCodeAt(0);

            for (i = 0; i < 16; i++) {
              context_data_val = context_data_val << 1 | value & 1;

              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }

              value = value >> 1;
            }
          }

          context_enlargeIn--;

          if (context_enlargeIn == 0) {
            context_enlargeIn = Math.pow(2, context_numBits);
            context_numBits++;
          }

          delete context_dictionaryToCreate[context_w];
        } else {
          value = context_dictionary[context_w];

          for (i = 0; i < context_numBits; i++) {
            context_data_val = context_data_val << 1 | value & 1;

            if (context_data_position == bitsPerChar - 1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }

            value = value >> 1;
          }
        }

        context_enlargeIn--;

        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
      } // Mark the end of the stream


      value = 2;

      for (i = 0; i < context_numBits; i++) {
        context_data_val = context_data_val << 1 | value & 1;

        if (context_data_position == bitsPerChar - 1) {
          context_data_position = 0;
          context_data.push(getCharFromInt(context_data_val));
          context_data_val = 0;
        } else {
          context_data_position++;
        }

        value = value >> 1;
      } // Flush the last char


      while (true) {
        context_data_val = context_data_val << 1;

        if (context_data_position == bitsPerChar - 1) {
          context_data.push(getCharFromInt(context_data_val));
          break;
        } else context_data_position++;
      }

      return context_data.join('');
    },
    decompress: function decompress(compressed) {
      if (compressed == null) return '';
      if (compressed == '') return null;
      return LZString._decompress(compressed.length, 32768, function (index) {
        return compressed.charCodeAt(index);
      });
    },
    _decompress: function _decompress(length, resetValue, getNextValue) {
      var dictionary = [],
          result = [],
          data = {
        val: getNextValue(0),
        position: resetValue,
        index: 1
      };
      var enlargeIn = 4,
          dictSize = 4,
          numBits = 3,
          entry = '',
          i,
          w,
          bits,
          resb,
          maxpower,
          power,
          c;

      for (i = 0; i < 3; i += 1) {
        dictionary[i] = i;
      }

      bits = 0;
      maxpower = Math.pow(2, 2);
      power = 1;

      while (power != maxpower) {
        resb = data.val & data.position;
        data.position >>= 1;

        if (data.position == 0) {
          data.position = resetValue;
          data.val = getNextValue(data.index++);
        }

        bits |= (resb > 0 ? 1 : 0) * power;
        power <<= 1;
      }

      switch (bits) {
        case 0:
          bits = 0;
          maxpower = Math.pow(2, 8);
          power = 1;

          while (power != maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;

            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }

            bits |= (resb > 0 ? 1 : 0) * power;
            power <<= 1;
          }

          c = f(bits);
          break;

        case 1:
          bits = 0;
          maxpower = Math.pow(2, 16);
          power = 1;

          while (power != maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;

            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }

            bits |= (resb > 0 ? 1 : 0) * power;
            power <<= 1;
          }

          c = f(bits);
          break;

        case 2:
          return '';
      } // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore


      dictionary[3] = c; // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore

      w = c; // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore

      result.push(c);

      while (true) {
        if (data.index > length) {
          return '';
        }

        bits = 0;
        maxpower = Math.pow(2, numBits);
        power = 1;

        while (power != maxpower) {
          resb = data.val & data.position;
          data.position >>= 1;

          if (data.position == 0) {
            data.position = resetValue;
            data.val = getNextValue(data.index++);
          }

          bits |= (resb > 0 ? 1 : 0) * power;
          power <<= 1;
        }

        switch (c = bits) {
          case 0:
            bits = 0;
            maxpower = Math.pow(2, 8);
            power = 1;

            while (power != maxpower) {
              resb = data.val & data.position;
              data.position >>= 1;

              if (data.position == 0) {
                data.position = resetValue;
                data.val = getNextValue(data.index++);
              }

              bits |= (resb > 0 ? 1 : 0) * power;
              power <<= 1;
            }

            dictionary[dictSize++] = f(bits);
            c = dictSize - 1;
            enlargeIn--;
            break;

          case 1:
            bits = 0;
            maxpower = Math.pow(2, 16);
            power = 1;

            while (power != maxpower) {
              resb = data.val & data.position;
              data.position >>= 1;

              if (data.position == 0) {
                data.position = resetValue;
                data.val = getNextValue(data.index++);
              }

              bits |= (resb > 0 ? 1 : 0) * power;
              power <<= 1;
            }

            dictionary[dictSize++] = f(bits);
            c = dictSize - 1;
            enlargeIn--;
            break;

          case 2:
            return result.join('');
        }

        if (enlargeIn == 0) {
          enlargeIn = Math.pow(2, numBits);
          numBits++;
        }

        if (dictionary[c]) {
          entry = dictionary[c];
        } else {
          if (c === dictSize) {
            entry = w + w.charAt(0);
          } else {
            return null;
          }
        }

        result.push(entry); // Add w+entry[0] to the dictionary.

        dictionary[dictSize++] = w + entry.charAt(0);
        enlargeIn--;
        w = entry;

        if (enlargeIn == 0) {
          enlargeIn = Math.pow(2, numBits);
          numBits++;
        }
      }
    }
  };

  var version = "1.35.0";

  // e.g.     Config.DEBUG = Config.DEBUG || instance.get_config('debug')

  var Config = {
    DEBUG: false,
    LIB_VERSION: version
  };

  /*
   * Saved references to long variable names, so that closure compiler can
   * minimize file size.
   */
  var ArrayProto = Array.prototype;
  var ObjProto = Object.prototype;
  var toString = ObjProto.toString;
  var hasOwnProperty = ObjProto.hasOwnProperty;
  var win = typeof window !== 'undefined' ? window : {};
  var navigator = win.navigator || {
    userAgent: ''
  };
  var document$1 = win.document || {};
  var userAgent = navigator.userAgent;
  var nativeForEach = ArrayProto.forEach,
      nativeIndexOf = ArrayProto.indexOf,
      nativeIsArray = Array.isArray,
      breaker = {}; // Console override

  var logger = {
    /** @type {function(...*)} */
    log: function log() {
      if (Config.DEBUG && !_isUndefined(window.console) && window.console) {
        // Don't log PostHog debug messages in rrweb
        var log = '__rrweb_original__' in window.console.log ? window.console.log['__rrweb_original__'] : window.console.log;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        try {
          log.apply(window.console, args);
        } catch (err) {
          _eachArray(args, function (arg) {
            log(arg);
          });
        }
      }
    },

    /** @type {function(...*)} */
    error: function error() {
      if (Config.DEBUG && !_isUndefined(window.console) && window.console) {
        for (var _len2 = arguments.length, _args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          _args[_key2] = arguments[_key2];
        }

        var args = ['PostHog error:'].concat(_args); // Don't log PostHog debug messages in rrweb

        var error = '__rrweb_original__' in window.console.error ? window.console.error['__rrweb_original__'] : window.console.error;

        try {
          error.apply(window.console, args);
        } catch (err) {
          _eachArray(args, function (arg) {
            error(arg);
          });
        }
      }
    },

    /** @type {function(...*)} */
    critical: function critical() {
      if (!_isUndefined(window.console) && window.console) {
        for (var _len3 = arguments.length, _args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          _args[_key3] = arguments[_key3];
        }

        var args = ['PostHog error:'].concat(_args); // Don't log PostHog debug messages in rrweb

        var error = '__rrweb_original__' in window.console.error ? window.console.error['__rrweb_original__'] : window.console.error;

        try {
          error.apply(window.console, args);
        } catch (err) {
          _eachArray(args, function (arg) {
            error(arg);
          });
        }
      }
    }
  }; // UNDERSCORE
  // Embed part of the Underscore Library

  var _trim = function _trim(str) {
    return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
  var _bind_instance_methods = function _bind_instance_methods(obj) {
    for (var func in obj) {
      if (typeof obj[func] === 'function') {
        obj[func] = obj[func].bind(obj);
      }
    }
  };
  /**
   * @param {*=} obj
   * @param {function(...*)=} iterator
   * @param {Object=} thisArg
   */

  function _each(obj, iterator, thisArg) {
    if (obj === null || obj === undefined) {
      return;
    }

    if (nativeForEach && Array.isArray(obj) && obj.forEach === nativeForEach) {
      obj.forEach(iterator, thisArg);
    } else if ('length' in obj && obj.length === +obj.length) {
      for (var i = 0, l = obj.length; i < l; i++) {
        if (i in obj && iterator.call(thisArg, obj[i], i) === breaker) {
          return;
        }
      }
    } else {
      for (var _key4 in obj) {
        if (hasOwnProperty.call(obj, _key4)) {
          if (iterator.call(thisArg, obj[_key4], _key4) === breaker) {
            return;
          }
        }
      }
    }
  }
  function _eachArray(obj, iterator, thisArg) {
    if (Array.isArray(obj)) {
      if (nativeForEach && obj.forEach === nativeForEach) {
        obj.forEach(iterator, thisArg);
      } else if ('length' in obj && obj.length === +obj.length) {
        for (var i = 0, l = obj.length; i < l; i++) {
          if (i in obj && iterator.call(thisArg, obj[i], i) === breaker) {
            return;
          }
        }
      }
    }
  }
  var _extend = function _extend(obj) {
    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key5 = 1; _key5 < _len4; _key5++) {
      args[_key5 - 1] = arguments[_key5];
    }

    _eachArray(args, function (source) {
      for (var prop in source) {
        if (source[prop] !== void 0) {
          obj[prop] = source[prop];
        }
      }
    });

    return obj;
  };
  var _isArray = nativeIsArray || function (obj) {
    return toString.call(obj) === '[object Array]';
  }; // from a comment on http://dbj.org/dbj/?p=286
  // fails on only one very rare and deliberate custom object:
  // let bomb = { toString : undefined, valueOf: function(o) { return "function BOMBA!"; }};

  var _isFunction = function _isFunction(f) {
    try {
      return /^\s*\bfunction\b/.test(f);
    } catch (x) {
      return false;
    }
  };
  var _include = function _include(obj, target) {
    var found = false;

    if (obj === null) {
      return found;
    }

    if (nativeIndexOf && obj.indexOf === nativeIndexOf) {
      return obj.indexOf(target) != -1;
    }

    _each(obj, function (value) {
      if (found || (found = value === target)) {
        return breaker;
      }

      return;
    });

    return found;
  };
  function _includes(str, needle) {
    return str.indexOf(needle) !== -1;
  } // Underscore Addons

  var _isObject = function _isObject(obj) {
    return obj === Object(obj) && !_isArray(obj);
  };
  var _isUndefined = function _isUndefined(obj) {
    return obj === void 0;
  };
  var _isString = function _isString(obj) {
    return toString.call(obj) == '[object String]';
  };
  var _isDate = function _isDate(obj) {
    return toString.call(obj) == '[object Date]';
  };
  var _isNumber = function _isNumber(obj) {
    return toString.call(obj) == '[object Number]';
  };
  var _encodeDates = function _encodeDates(obj) {
    _each(obj, function (v, k) {
      if (_isDate(v)) {
        obj[k] = _formatDate(v);
      } else if (_isObject(v)) {
        obj[k] = _encodeDates(v); // recurse
      }
    });

    return obj;
  };
  var _timestamp = function _timestamp() {
    Date.now = Date.now || function () {
      return +new Date();
    };

    return Date.now();
  };
  var _formatDate = function _formatDate(d) {
    // YYYY-MM-DDTHH:MM:SS in UTC
    function pad(n) {
      return n < 10 ? '0' + n : n;
    }

    return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds());
  };
  var _safewrap = function _safewrap(f) {
    return function () {
      try {
        for (var _len5 = arguments.length, args = new Array(_len5), _key7 = 0; _key7 < _len5; _key7++) {
          args[_key7] = arguments[_key7];
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return f.apply(this, args);
      } catch (e) {
        logger.critical('Implementation error. Please turn on debug and contact support@posthog.com.');

        if (Config.DEBUG) {
          logger.critical(e);
        }
      }
    };
  }; // eslint-disable-next-line @typescript-eslint/ban-types

  var _safewrap_class = function _safewrap_class(klass, functions) {
    for (var i = 0; i < functions.length; i++) {
      klass.prototype[functions[i]] = _safewrap(klass.prototype[functions[i]]);
    }
  };
  var _safewrap_instance_methods = function _safewrap_instance_methods(obj) {
    for (var func in obj) {
      if (typeof obj[func] === 'function') {
        obj[func] = _safewrap(obj[func]);
      }
    }
  };
  var _strip_empty_properties = function _strip_empty_properties(p) {
    var ret = {};

    _each(p, function (v, k) {
      if (_isString(v) && v.length > 0) {
        ret[k] = v;
      }
    });

    return ret;
  };
  var COPY_IN_PROGRESS_ATTRIBUTE = typeof Symbol !== 'undefined' ? Symbol('__deepCircularCopyInProgress__') : '__deepCircularCopyInProgress__';
  /**
   * Deep copies an object.
   * It handles cycles by replacing all references to them with `undefined`
   * Also supports customizing native values
   *
   * @param value
   * @param customizer
   * @param [key] if provided this is the object key associated with the value to be copied. It allows the customizer function to have context when it runs
   * @returns {{}|undefined|*}
   */

  function deepCircularCopy(value, customizer, key) {
    if (value !== Object(value)) return customizer ? customizer(value, key) : value; // primitive value

    if (value[COPY_IN_PROGRESS_ATTRIBUTE]) return undefined;
    value[COPY_IN_PROGRESS_ATTRIBUTE] = true;
    var result;

    if (_isArray(value)) {
      result = [];

      _eachArray(value, function (it) {
        result.push(deepCircularCopy(it, customizer));
      });
    } else {
      result = {};

      _each(value, function (val, key) {
        if (key !== COPY_IN_PROGRESS_ATTRIBUTE) {
          result[key] = deepCircularCopy(val, customizer, key);
        }
      });
    }

    delete value[COPY_IN_PROGRESS_ATTRIBUTE];
    return result;
  }

  var LONG_STRINGS_ALLOW_LIST = ['$performance_raw'];
  function _copyAndTruncateStrings(object, maxStringLength) {
    return deepCircularCopy(object, function (value, key) {
      if (key && LONG_STRINGS_ALLOW_LIST.indexOf(key) > -1) {
        return value;
      }

      if (typeof value === 'string' && maxStringLength !== null) {
        return value.slice(0, maxStringLength);
      }

      return value;
    });
  }
  function _base64Encode(data) {
    var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var o1,
        o2,
        o3,
        h1,
        h2,
        h3,
        h4,
        bits,
        i = 0,
        ac = 0,
        enc = '';
    var tmp_arr = [];

    if (!data) {
      return data;
    }

    data = _utf8Encode(data);

    do {
      // pack three octets into four hexets
      o1 = data.charCodeAt(i++);
      o2 = data.charCodeAt(i++);
      o3 = data.charCodeAt(i++);
      bits = o1 << 16 | o2 << 8 | o3;
      h1 = bits >> 18 & 0x3f;
      h2 = bits >> 12 & 0x3f;
      h3 = bits >> 6 & 0x3f;
      h4 = bits & 0x3f; // use hexets to index into b64, and append result to encoded string

      tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
    } while (i < data.length);

    enc = tmp_arr.join('');

    switch (data.length % 3) {
      case 1:
        enc = enc.slice(0, -2) + '==';
        break;

      case 2:
        enc = enc.slice(0, -1) + '=';
        break;
    }

    return enc;
  }
  var _utf8Encode = function _utf8Encode(string) {
    string = (string + '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    var utftext = '',
        start,
        end;
    var stringl = 0,
        n;
    start = end = 0;
    stringl = string.length;

    for (n = 0; n < stringl; n++) {
      var c1 = string.charCodeAt(n);
      var enc = null;

      if (c1 < 128) {
        end++;
      } else if (c1 > 127 && c1 < 2048) {
        enc = String.fromCharCode(c1 >> 6 | 192, c1 & 63 | 128);
      } else {
        enc = String.fromCharCode(c1 >> 12 | 224, c1 >> 6 & 63 | 128, c1 & 63 | 128);
      }

      if (enc !== null) {
        if (end > start) {
          utftext += string.substring(start, end);
        }

        utftext += enc;
        start = end = n + 1;
      }
    }

    if (end > start) {
      utftext += string.substring(start, string.length);
    }

    return utftext;
  };
  var _UUID = function () {
    // Time/ticks information
    // 1*new Date() is a cross browser version of Date.now()
    var T = function T() {
      var d = new Date().valueOf();
      var i = 0; // this while loop figures how many browser ticks go by
      // before 1*new Date() returns a new number, ie the amount
      // of ticks that go by per millisecond

      while (d == new Date().valueOf()) {
        i++;
      }

      return d.toString(16) + i.toString(16);
    }; // Math.Random entropy


    var R = function R() {
      return Math.random().toString(16).replace('.', '');
    }; // User agent entropy
    // This function takes the user agent string, and then xors
    // together each sequence of 8 bytes.  This produces a final
    // sequence of 8 bytes which it returns as hex.


    var UA = function UA() {
      var ua = userAgent;
      var i,
          ch,
          ret = 0,
          buffer = [];

      function xor(result, byte_array) {
        var j,
            tmp = 0;

        for (j = 0; j < byte_array.length; j++) {
          tmp |= buffer[j] << j * 8;
        }

        return result ^ tmp;
      }

      for (i = 0; i < ua.length; i++) {
        ch = ua.charCodeAt(i);
        buffer.unshift(ch & 0xff);

        if (buffer.length >= 4) {
          ret = xor(ret, buffer);
          buffer = [];
        }
      }

      if (buffer.length > 0) {
        ret = xor(ret, buffer);
      }

      return ret.toString(16);
    };

    return function () {
      var se = (window.screen.height * window.screen.width).toString(16);
      return T() + '-' + R() + '-' + UA() + '-' + se + '-' + T();
    };
  }(); // _.isBlockedUA()
  // This is to block various web spiders from executing our JS and
  // sending false capturing data

  var _isBlockedUA = function _isBlockedUA(ua) {
    if (/(google web preview|baiduspider|yandexbot|bingbot|googlebot|yahoo! slurp|ahrefsbot|facebookexternalhit|facebookcatalog)/i.test(ua)) {
      return true;
    }

    return false;
  };
  /**
   * @param {Object=} formdata
   * @param {string=} arg_separator
   */

  var _HTTPBuildQuery = function _HTTPBuildQuery(formdata) {
    var arg_separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '&';
    var use_val;
    var use_key;
    var tph_arr = [];

    _each(formdata, function (val, key) {
      use_val = encodeURIComponent(val.toString());
      use_key = encodeURIComponent(key);
      tph_arr[tph_arr.length] = use_key + '=' + use_val;
    });

    return tph_arr.join(arg_separator);
  };
  var _getQueryParam = function _getQueryParam(url, param) {
    // Expects a raw URL
    var cleanParam = param.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    var regexS = '[\\?&]' + cleanParam + '=([^&#]*)';
    var regex = new RegExp(regexS);
    var results = regex.exec(url);

    if (results === null || results && typeof results[1] !== 'string' && results[1].length) {
      return '';
    } else {
      var result = results[1];

      try {
        result = decodeURIComponent(result);
      } catch (err) {
        logger.error('Skipping decoding for malformed query param: ' + result);
      }

      return result.replace(/\+/g, ' ');
    }
  };
  var _getHashParam = function _getHashParam(hash, param) {
    var matches = hash.match(new RegExp(param + '=([^&]*)'));
    return matches ? matches[1] : null;
  };
  var _register_event = function () {
    // written by Dean Edwards, 2005
    // with input from Tino Zijdel - crisp@xs4all.nl
    // with input from Carl Sverre - mail@carlsverre.com
    // with input from PostHog
    // http://dean.edwards.name/weblog/2005/10/add-event/
    // https://gist.github.com/1930440

    /**
     * @param {Object} element
     * @param {string} type
     * @param {function(...*)} handler
     * @param {boolean=} oldSchool
     * @param {boolean=} useCapture
     */
    var register_event = function register_event(element, type, handler, oldSchool, useCapture) {
      if (!element) {
        logger.error('No valid element provided to register_event');
        return;
      }

      if (element.addEventListener && !oldSchool) {
        element.addEventListener(type, handler, !!useCapture);
      } else {
        var ontype = 'on' + type;
        var old_handler = element[ontype] // can be undefined
        ;
        element[ontype] = makeHandler(element, handler, old_handler);
      }
    };

    function makeHandler(element, new_handler, old_handlers) {
      return function (event) {
        event = event || fixEvent(window.event); // this basically happens in firefox whenever another script
        // overwrites the onload callback and doesn't pass the event
        // object to previously defined callbacks.  All the browsers
        // that don't define window.event implement addEventListener
        // so the dom_loaded handler will still be fired as usual.

        if (!event) {
          return undefined;
        }

        var ret = true;
        var old_result;

        if (_isFunction(old_handlers)) {
          old_result = old_handlers(event);
        }

        var new_result = new_handler.call(element, event);

        if (false === old_result || false === new_result) {
          ret = false;
        }

        return ret;
      };
    }

    function fixEvent(event) {
      if (event) {
        event.preventDefault = fixEvent.preventDefault;
        event.stopPropagation = fixEvent.stopPropagation;
      }

      return event;
    }

    fixEvent.preventDefault = function () {
      this.returnValue = false;
    };

    fixEvent.stopPropagation = function () {
      this.cancelBubble = true;
    };

    return register_event;
  }();
  var _info = {
    campaignParams: function campaignParams() {
      var campaign_keywords = 'utm_source utm_medium utm_campaign utm_content utm_term gclid fbclid msclkid'.split(' ');
      var params = {};

      _each(campaign_keywords, function (kwkey) {
        var kw = _getQueryParam(document$1.URL, kwkey);

        if (kw.length) {
          params[kwkey] = kw;
        }
      });

      return params;
    },
    searchEngine: function searchEngine(referrer) {
      if (referrer.search('https?://(.*)google.([^/?]*)') === 0) {
        return 'google';
      } else if (referrer.search('https?://(.*)bing.com') === 0) {
        return 'bing';
      } else if (referrer.search('https?://(.*)yahoo.com') === 0) {
        return 'yahoo';
      } else if (referrer.search('https?://(.*)duckduckgo.com') === 0) {
        return 'duckduckgo';
      } else {
        return null;
      }
    },
    searchInfo: function searchInfo(referrer) {
      var search = _info.searchEngine(referrer),
          param = search != 'yahoo' ? 'q' : 'p',
          ret = {};

      if (search !== null) {
        ret['$search_engine'] = search;

        var keyword = _getQueryParam(referrer, param);

        if (keyword.length) {
          ret['ph_keyword'] = keyword;
        }
      }

      return ret;
    },

    /**
     * This function detects which browser is running this script.
     * The order of the checks are important since many user agents
     * include key words used in later checks.
     */
    browser: function browser(user_agent, vendor, opera) {
      vendor = vendor || ''; // vendor is undefined for at least IE9

      if (opera || _includes(user_agent, ' OPR/')) {
        if (_includes(user_agent, 'Mini')) {
          return 'Opera Mini';
        }

        return 'Opera';
      } else if (/(BlackBerry|PlayBook|BB10)/i.test(user_agent)) {
        return 'BlackBerry';
      } else if (_includes(user_agent, 'IEMobile') || _includes(user_agent, 'WPDesktop')) {
        return 'Internet Explorer Mobile';
      } else if (_includes(user_agent, 'SamsungBrowser/')) {
        // https://developer.samsung.com/internet/user-agent-string-format
        return 'Samsung Internet';
      } else if (_includes(user_agent, 'Edge') || _includes(user_agent, 'Edg/')) {
        return 'Microsoft Edge';
      } else if (_includes(user_agent, 'FBIOS')) {
        return 'Facebook Mobile';
      } else if (_includes(user_agent, 'Chrome')) {
        return 'Chrome';
      } else if (_includes(user_agent, 'CriOS')) {
        return 'Chrome iOS';
      } else if (_includes(user_agent, 'UCWEB') || _includes(user_agent, 'UCBrowser')) {
        return 'UC Browser';
      } else if (_includes(user_agent, 'FxiOS')) {
        return 'Firefox iOS';
      } else if (_includes(vendor, 'Apple')) {
        if (_includes(user_agent, 'Mobile')) {
          return 'Mobile Safari';
        }

        return 'Safari';
      } else if (_includes(user_agent, 'Android')) {
        return 'Android Mobile';
      } else if (_includes(user_agent, 'Konqueror')) {
        return 'Konqueror';
      } else if (_includes(user_agent, 'Firefox')) {
        return 'Firefox';
      } else if (_includes(user_agent, 'MSIE') || _includes(user_agent, 'Trident/')) {
        return 'Internet Explorer';
      } else if (_includes(user_agent, 'Gecko')) {
        return 'Mozilla';
      } else {
        return '';
      }
    },

    /**
     * This function detects which browser version is running this script,
     * parsing major and minor version (e.g., 42.1). User agent strings from:
     * http://www.useragentstring.com/pages/useragentstring.php
     */
    browserVersion: function browserVersion(userAgent, vendor, opera) {
      var browser = _info.browser(userAgent, vendor, opera);

      var versionRegexs = {
        'Internet Explorer Mobile': /rv:(\d+(\.\d+)?)/,
        'Microsoft Edge': /Edge?\/(\d+(\.\d+)?)/,
        Chrome: /Chrome\/(\d+(\.\d+)?)/,
        'Chrome iOS': /CriOS\/(\d+(\.\d+)?)/,
        'UC Browser': /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
        Safari: /Version\/(\d+(\.\d+)?)/,
        'Mobile Safari': /Version\/(\d+(\.\d+)?)/,
        Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
        Firefox: /Firefox\/(\d+(\.\d+)?)/,
        'Firefox iOS': /FxiOS\/(\d+(\.\d+)?)/,
        Konqueror: /Konqueror:(\d+(\.\d+)?)/,
        BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
        'Android Mobile': /android\s(\d+(\.\d+)?)/,
        'Samsung Internet': /SamsungBrowser\/(\d+(\.\d+)?)/,
        'Internet Explorer': /(rv:|MSIE )(\d+(\.\d+)?)/,
        Mozilla: /rv:(\d+(\.\d+)?)/
      };
      var regex = versionRegexs[browser];

      if (regex === undefined) {
        return null;
      }

      var matches = userAgent.match(regex);

      if (!matches) {
        return null;
      }

      return parseFloat(matches[matches.length - 2]);
    },
    browserLanguage: function browserLanguage() {
      return navigator.language || // Any modern browser
      navigator.userLanguage // IE11
      ;
    },
    os: function os() {
      var a = userAgent;

      if (/Windows/i.test(a)) {
        if (/Phone/.test(a) || /WPDesktop/.test(a)) {
          return 'Windows Phone';
        }

        return 'Windows';
      } else if (/(iPhone|iPad|iPod)/.test(a)) {
        return 'iOS';
      } else if (/Android/.test(a)) {
        return 'Android';
      } else if (/(BlackBerry|PlayBook|BB10)/i.test(a)) {
        return 'BlackBerry';
      } else if (/Mac/i.test(a)) {
        return 'Mac OS X';
      } else if (/Linux/.test(a)) {
        return 'Linux';
      } else if (/CrOS/.test(a)) {
        return 'Chrome OS';
      } else {
        return '';
      }
    },
    device: function device(user_agent) {
      if (/Windows Phone/i.test(user_agent) || /WPDesktop/.test(user_agent)) {
        return 'Windows Phone';
      } else if (/iPad/.test(user_agent)) {
        return 'iPad';
      } else if (/iPod/.test(user_agent)) {
        return 'iPod Touch';
      } else if (/iPhone/.test(user_agent)) {
        return 'iPhone';
      } else if (/(BlackBerry|PlayBook|BB10)/i.test(user_agent)) {
        return 'BlackBerry';
      } else if (/Android/.test(user_agent) && !/Mobile/.test(user_agent)) {
        return 'Android Tablet';
      } else if (/Android/.test(user_agent)) {
        return 'Android';
      } else {
        return '';
      }
    },
    deviceType: function deviceType(user_agent) {
      var device = this.device(user_agent);

      if (device === 'iPad' || device === 'Android Tablet') {
        return 'Tablet';
      } else if (device) {
        return 'Mobile';
      } else {
        return 'Desktop';
      }
    },
    referringDomain: function referringDomain(referrer) {
      var split = referrer.split('/');

      if (split.length >= 3) {
        return split[2];
      }

      return '';
    },
    properties: function properties() {
      return _extend(_strip_empty_properties({
        $os: _info.os(),
        $browser: _info.browser(userAgent, navigator.vendor, window.opera),
        $device: _info.device(userAgent),
        $device_type: _info.deviceType(userAgent)
      }), {
        $current_url: window.location.href,
        $host: window.location.host,
        $pathname: window.location.pathname,
        $browser_version: _info.browserVersion(userAgent, navigator.vendor, window.opera),
        $browser_language: _info.browserLanguage(),
        $screen_height: window.screen.height,
        $screen_width: window.screen.width,
        $viewport_height: window.innerHeight,
        $viewport_width: window.innerWidth,
        $lib: 'web',
        $lib_version: Config.LIB_VERSION,
        $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
        $time: _timestamp() / 1000 // epoch time in seconds

      });
    },
    people_properties: function people_properties() {
      return _extend(_strip_empty_properties({
        $os: _info.os(),
        $browser: _info.browser(userAgent, navigator.vendor, window.opera)
      }), {
        $browser_version: _info.browserVersion(userAgent, navigator.vendor, window.opera)
      });
    }
  };

  function getClassName(el) {
    switch (_typeof(el.className)) {
      case 'string':
        return el.className;
      // TODO: when is this ever used?

      case 'object':
        // handle cases where className might be SVGAnimatedString or some other type
        return ('baseVal' in el.className ? el.className.baseVal : null) || el.getAttribute('class') || '';

      default:
        // future proof
        return '';
    }
  }
  /*
   * Get the direct text content of an element, protecting against sensitive data collection.
   * Concats textContent of each of the element's text node children; this avoids potential
   * collection of sensitive data that could happen if we used element.textContent and the
   * element had sensitive child elements, since element.textContent includes child content.
   * Scrubs values that look like they could be sensitive (i.e. cc or ssn number).
   * @param {Element} el - element to get the text of
   * @returns {string} the element's direct text content
   */

  function getSafeText(el) {
    var elText = '';

    if (shouldCaptureElement(el) && !isSensitiveElement(el) && el.childNodes && el.childNodes.length) {
      _each(el.childNodes, function (child) {
        if (isTextNode(child) && child.textContent) {
          elText += _trim(child.textContent) // scrub potentially sensitive values
          .split(/(\s+)/).filter(shouldCaptureValue).join('') // normalize whitespace
          .replace(/[\r\n]/g, ' ').replace(/[ ]+/g, ' ') // truncate
          .substring(0, 255);
        }
      });
    }

    return _trim(elText);
  }
  /*
   * Check whether an element has nodeType Node.ELEMENT_NODE
   * @param {Element} el - element to check
   * @returns {boolean} whether el is of the correct nodeType
   */

  function isElementNode(el) {
    return !!el && el.nodeType === 1; // Node.ELEMENT_NODE - use integer constant for browser portability
  }
  /*
   * Check whether an element is of a given tag type.
   * Due to potential reference discrepancies (such as the webcomponents.js polyfill),
   * we want to match tagNames instead of specific references because something like
   * element === document.body won't always work because element might not be a native
   * element.
   * @param {Element} el - element to check
   * @param {string} tag - tag name (e.g., "div")
   * @returns {boolean} whether el is of the given tag type
   */

  function isTag(el, tag) {
    return !!el && !!el.tagName && el.tagName.toLowerCase() === tag.toLowerCase();
  }
  /*
   * Check whether an element has nodeType Node.TEXT_NODE
   * @param {Element} el - element to check
   * @returns {boolean} whether el is of the correct nodeType
   */

  function isTextNode(el) {
    return !!el && el.nodeType === 3; // Node.TEXT_NODE - use integer constant for browser portability
  }
  /*
   * Check whether an element has nodeType Node.DOCUMENT_FRAGMENT_NODE
   * @param {Element} el - element to check
   * @returns {boolean} whether el is of the correct nodeType
   */

  function isDocumentFragment(el) {
    return !!el && el.nodeType === 11; // Node.DOCUMENT_FRAGMENT_NODE - use integer constant for browser portability
  }
  var usefulElements = ['a', 'button', 'form', 'input', 'select', 'textarea', 'label'];
  /*
   * Check whether a DOM event should be "captured" or if it may contain sentitive data
   * using a variety of heuristics.
   * @param {Element} el - element to check
   * @param {Event} event - event to check
   * @returns {boolean} whether the event should be captured
   */

  function shouldCaptureDomEvent(el, event) {
    if (!el || isTag(el, 'html') || !isElementNode(el)) {
      return false;
    }

    var parentIsUsefulElement = false;
    var targetElementList = [el]; // TODO: remove this var, it's never queried

    var parentNode = true;
    var curEl = el;

    while (curEl.parentNode && !isTag(curEl, 'body')) {
      // If element is a shadow root, we skip it
      if (isDocumentFragment(curEl.parentNode)) {
        targetElementList.push(curEl.parentNode.host);
        curEl = curEl.parentNode.host;
        continue;
      }

      parentNode = curEl.parentNode || false;
      if (!parentNode) break;

      if (usefulElements.indexOf(parentNode.tagName.toLowerCase()) > -1) {
        parentIsUsefulElement = true;
      } else {
        var _compStyles = window.getComputedStyle(parentNode);

        if (_compStyles && _compStyles.getPropertyValue('cursor') === 'pointer') {
          parentIsUsefulElement = true;
        }
      }

      targetElementList.push(parentNode);
      curEl = parentNode;
    }

    var compStyles = window.getComputedStyle(el);

    if (compStyles && compStyles.getPropertyValue('cursor') === 'pointer' && event.type === 'click') {
      return true;
    }

    var tag = el.tagName.toLowerCase();

    switch (tag) {
      case 'html':
        return false;

      case 'form':
        return event.type === 'submit';

      case 'input':
        return event.type === 'change' || event.type === 'click';

      case 'select':
      case 'textarea':
        return event.type === 'change' || event.type === 'click';

      default:
        if (parentIsUsefulElement) return event.type === 'click';
        return event.type === 'click' && (usefulElements.indexOf(tag) > -1 || el.getAttribute('contenteditable') === 'true');
    }
  }
  /*
   * Check whether a DOM element should be "captured" or if it may contain sentitive data
   * using a variety of heuristics.
   * @param {Element} el - element to check
   * @returns {boolean} whether the element should be captured
   */

  function shouldCaptureElement(el) {
    for (var curEl = el; curEl.parentNode && !isTag(curEl, 'body'); curEl = curEl.parentNode) {
      var classes = getClassName(curEl).split(' ');

      if (_includes(classes, 'ph-sensitive') || _includes(classes, 'ph-no-capture')) {
        return false;
      }
    }

    if (_includes(getClassName(el).split(' '), 'ph-include')) {
      return true;
    } // don't include hidden or password fields


    var type = el.type || '';

    if (typeof type === 'string') {
      // it's possible for el.type to be a DOM element if el is a form with a child input[name="type"]
      switch (type.toLowerCase()) {
        case 'hidden':
          return false;

        case 'password':
          return false;
      }
    } // filter out data from fields that look like sensitive fields


    var name = el.name || el.id || ''; // See https://github.com/posthog/posthog-js/issues/165
    // Under specific circumstances a bug caused .replace to be called on a DOM element
    // instead of a string, removing the element from the page. Ensure this issue is mitigated.

    if (typeof name === 'string') {
      // it's possible for el.name or el.id to be a DOM element if el is a form with a child input[name="name"]
      var sensitiveNameRegex = /^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i;

      if (sensitiveNameRegex.test(name.replace(/[^a-zA-Z0-9]/g, ''))) {
        return false;
      }
    }

    return true;
  }
  /*
   * Check whether a DOM element is 'sensitive' and we should only capture limited data
   * @param {Element} el - element to check
   * @returns {boolean} whether the element should be captured
   */

  function isSensitiveElement(el) {
    // don't send data from inputs or similar elements since there will always be
    // a risk of clientside javascript placing sensitive data in attributes
    var allowedInputTypes = ['button', 'checkbox', 'submit', 'reset'];

    if (isTag(el, 'input') && !allowedInputTypes.includes(el.type) || isTag(el, 'select') || isTag(el, 'textarea') || el.getAttribute('contenteditable') === 'true') {
      return true;
    }

    return false;
  }
  /*
   * Check whether a string value should be "captured" or if it may contain sentitive data
   * using a variety of heuristics.
   * @param {string} value - string value to check
   * @returns {boolean} whether the element should be captured
   */

  function shouldCaptureValue(value) {
    if (value === null || _isUndefined(value)) {
      return false;
    }

    if (typeof value === 'string') {
      value = _trim(value); // check to see if input value looks like a credit card number
      // see: https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9781449327453/ch04s20.html

      var ccRegex = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;

      if (ccRegex.test((value || '').replace(/[- ]/g, ''))) {
        return false;
      } // check to see if input value looks like a social security number


      var ssnRegex = /(^\d{3}-?\d{2}-?\d{4}$)/;

      if (ssnRegex.test(value)) {
        return false;
      }
    }

    return true;
  }
  /*
   * Check whether an attribute name is an Angular style attr (either _ngcontent or _nghost)
   * These update on each build and lead to noise in the element chain
   * More details on the attributes here: https://angular.io/guide/view-encapsulation
   * @param {string} attributeName - string value to check
   * @returns {boolean} whether the element is an angular tag
   */

  function isAngularStyleAttr(attributeName) {
    if (typeof attributeName === 'string') {
      return attributeName.substring(0, 10) === '_ngcontent' || attributeName.substring(0, 7) === '_nghost';
    }

    return false;
  }
  function loadScript(scriptUrlToLoad, callback) {
    var scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.src = scriptUrlToLoad;
    scriptTag.onload = callback;
    var scripts = document.getElementsByTagName('script');

    if (scripts.length > 0) {
      var _scripts$0$parentNode;

      (_scripts$0$parentNode = scripts[0].parentNode) === null || _scripts$0$parentNode === void 0 ? void 0 : _scripts$0$parentNode.insertBefore(scriptTag, scripts[0]);
    } else {
      document.body.appendChild(scriptTag);
    }
  }

  // Naive rage click implementation: If mouse has not moved than RAGE_CLICK_THRESHOLD_PX
  // over RAGE_CLICK_CLICK_COUNT clicks with max RAGE_CLICK_TIMEOUT_MS between clicks, it's
  // counted as a rage click
  var RAGE_CLICK_THRESHOLD_PX = 30;
  var RAGE_CLICK_TIMEOUT_MS = 1000;
  var RAGE_CLICK_CLICK_COUNT = 3;

  var RageClick = /*#__PURE__*/function () {
    function RageClick(instance) {
      var enabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : instance.get_config('rageclick');

      _classCallCheck(this, RageClick);

      this.clicks = [];
      this.instance = instance;
      this.enabled = enabled;
    }

    _createClass(RageClick, [{
      key: "click",
      value: function click(x, y, timestamp) {
        if (!this.enabled) {
          return;
        }

        var lastClick = this.clicks[this.clicks.length - 1];

        if (lastClick && Math.abs(x - lastClick.x) + Math.abs(y - lastClick.y) < RAGE_CLICK_THRESHOLD_PX && timestamp - lastClick.timestamp < RAGE_CLICK_TIMEOUT_MS) {
          this.clicks.push({
            x: x,
            y: y,
            timestamp: timestamp
          });

          if (this.clicks.length === RAGE_CLICK_CLICK_COUNT) {
            this.instance.capture('$rageclick');
          }
        } else {
          this.clicks = [{
            x: x,
            y: y,
            timestamp: timestamp
          }];
        }
      }
    }]);

    return RageClick;
  }();

  var autocapture = {
    _initializedTokens: [],
    _previousElementSibling: function _previousElementSibling(el) {
      if (el.previousElementSibling) {
        return el.previousElementSibling;
      } else {
        var _el = el;

        do {
          _el = _el.previousSibling; // resolves to ChildNode->Node, which is Element's parent class
        } while (_el && !isElementNode(_el));

        return _el;
      }
    },
    _getPropertiesFromElement: function _getPropertiesFromElement(elem, maskInputs, maskText) {
      var tag_name = elem.tagName.toLowerCase();
      var props = {
        tag_name: tag_name
      };

      if (usefulElements.indexOf(tag_name) > -1 && !maskText) {
        props['$el_text'] = getSafeText(elem);
      }

      var classes = getClassName(elem);
      if (classes.length > 0) props['classes'] = classes.split(' ').filter(function (c) {
        return c !== '';
      });

      _each(elem.attributes, function (attr) {
        // Only capture attributes we know are safe
        if (isSensitiveElement(elem) && ['name', 'id', 'class'].indexOf(attr.name) === -1) return;

        if (!maskInputs && shouldCaptureValue(attr.value) && !isAngularStyleAttr(attr.name)) {
          props['attr__' + attr.name] = attr.value;
        }
      });

      var nthChild = 1;
      var nthOfType = 1;
      var currentElem = elem;

      while (currentElem = this._previousElementSibling(currentElem)) {
        // eslint-disable-line no-cond-assign
        nthChild++;

        if (currentElem.tagName === elem.tagName) {
          nthOfType++;
        }
      }

      props['nth_child'] = nthChild;
      props['nth_of_type'] = nthOfType;
      return props;
    },
    _getDefaultProperties: function _getDefaultProperties(eventType) {
      return {
        $event_type: eventType,
        $ce_version: 1
      };
    },
    _extractCustomPropertyValue: function _extractCustomPropertyValue(customProperty) {
      var propValues = [];

      _each(document.querySelectorAll(customProperty['css_selector']), function (matchedElem) {
        var value;

        if (['input', 'select'].indexOf(matchedElem.tagName.toLowerCase()) > -1) {
          value = matchedElem['value'];
        } else if (matchedElem['textContent']) {
          value = matchedElem['textContent'];
        }

        if (shouldCaptureValue(value)) {
          propValues.push(value);
        }
      });

      return propValues.join(', ');
    },
    // TODO: delete custom_properties after changeless typescript refactor
    _getCustomProperties: function _getCustomProperties(targetElementList) {
      var _this = this;

      var props = {}; // will be deleted

      _each(this._customProperties, function (customProperty) {
        _each(customProperty['event_selectors'], function (eventSelector) {
          var eventElements = document.querySelectorAll(eventSelector);

          _each(eventElements, function (eventElement) {
            if (_includes(targetElementList, eventElement) && shouldCaptureElement(eventElement)) {
              props[customProperty['name']] = _this._extractCustomPropertyValue(customProperty);
            }
          });
        });
      });

      return props;
    },
    _getEventTarget: function _getEventTarget(e) {
      // https://developer.mozilla.org/en-US/docs/Web/API/Event/target#Compatibility_notes
      if (typeof e.target === 'undefined') {
        return e.srcElement || null;
      } else {
        var _e$target;

        if ((_e$target = e.target) !== null && _e$target !== void 0 && _e$target.shadowRoot) {
          return e.composedPath()[0] || null;
        }

        return e.target || null;
      }
    },
    _captureEvent: function _captureEvent(e, instance) {
      var _this2 = this;

      /*** Don't mess with this code without running IE8 tests on it ***/
      var target = this._getEventTarget(e);

      if (isTextNode(target)) {
        // defeat Safari bug (see: http://www.quirksmode.org/js/events_properties.html)
        target = target.parentNode || null;
      }

      if (e.type === 'click' && e instanceof MouseEvent) {
        var _this$rageclicks;

        (_this$rageclicks = this.rageclicks) === null || _this$rageclicks === void 0 ? void 0 : _this$rageclicks.click(e.clientX, e.clientY, new Date().getTime());
      }

      if (target && shouldCaptureDomEvent(target, e)) {
        var targetElementList = [target];
        var curEl = target;

        while (curEl.parentNode && !isTag(curEl, 'body')) {
          if (isDocumentFragment(curEl.parentNode)) {
            targetElementList.push(curEl.parentNode.host);
            curEl = curEl.parentNode.host;
            continue;
          }

          targetElementList.push(curEl.parentNode);
          curEl = curEl.parentNode;
        }

        var elementsJson = [];
        var href,
            explicitNoCapture = false;

        _each(targetElementList, function (el) {
          var shouldCaptureEl = shouldCaptureElement(el); // if the element or a parent element is an anchor tag
          // include the href as a property

          if (el.tagName.toLowerCase() === 'a') {
            href = el.getAttribute('href');
            href = shouldCaptureEl && shouldCaptureValue(href) && href;
          } // allow users to programmatically prevent capturing of elements by adding class 'ph-no-capture'


          var classes = getClassName(el).split(' ');

          if (_includes(classes, 'ph-no-capture')) {
            explicitNoCapture = true;
          }

          elementsJson.push(_this2._getPropertiesFromElement(el, instance.get_config('mask_all_element_attributes'), instance.get_config('mask_all_text')));
        });

        if (!instance.get_config('mask_all_text')) {
          elementsJson[0]['$el_text'] = getSafeText(target);
        }

        if (href) {
          elementsJson[0]['attr__href'] = href;
        }

        if (explicitNoCapture) {
          return false;
        }

        var props = _extend(this._getDefaultProperties(e.type), {
          $elements: elementsJson
        }, this._getCustomProperties(targetElementList));

        instance.capture('$autocapture', props);
        return true;
      }
    },
    // only reason is to stub for unit tests
    // since you can't override window.location props
    _navigate: function _navigate(href) {
      window.location.href = href;
    },
    _addDomEventHandlers: function _addDomEventHandlers(instance) {
      var _this3 = this;

      var handler = function handler(e) {
        e = e || window.event;

        _this3._captureEvent(e, instance);
      };

      _register_event(document, 'submit', handler, false, true);

      _register_event(document, 'change', handler, false, true);

      _register_event(document, 'click', handler, false, true);
    },
    _customProperties: [],
    rageclicks: null,
    init: function init(instance) {
      this.rageclicks = new RageClick(instance);
    },
    afterDecideResponse: function afterDecideResponse(response, instance) {
      var token = instance.get_config('token');

      if (this._initializedTokens.indexOf(token) > -1) {
        logger.log('autocapture already initialized for token "' + token + '"');
        return;
      }

      this._initializedTokens.push(token);

      if (response && response['config'] && response['config']['enable_collect_everything'] && instance.get_config('autocapture')) {
        // TODO: delete custom_properties after changeless typescript refactor
        if (response['custom_properties']) {
          this._customProperties = response['custom_properties'];
        }

        this._addDomEventHandlers(instance);
      } else {
        instance['__autocapture_enabled'] = false;
      }
    },
    // this is a mechanism to ramp up CE with no server-side interaction.
    // when CE is active, every page load results in a decide request. we
    // need to gently ramp this up so we don't overload decide. this decides
    // deterministically if CE is enabled for this project by modding the char
    // value of the project token.
    enabledForProject: function enabledForProject(token, numBuckets, numEnabledBuckets) {
      if (!token) {
        return true;
      }

      numBuckets = !_isUndefined(numBuckets) ? numBuckets : 10;
      numEnabledBuckets = !_isUndefined(numEnabledBuckets) ? numEnabledBuckets : 10;
      var charCodeSum = 0;

      for (var i = 0; i < token.length; i++) {
        charCodeSum += token.charCodeAt(i);
      }

      return charCodeSum % numBuckets < numEnabledBuckets;
    },
    isBrowserSupported: function isBrowserSupported() {
      return _isFunction(document.querySelectorAll);
    }
  };

  _bind_instance_methods(autocapture);

  _safewrap_instance_methods(autocapture);

  var DOMAIN_MATCH_REGEX = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i; // Methods partially borrowed from quirksmode.org/js/cookies.html

  var cookieStore = {
    is_supported: function is_supported() {
      return true;
    },
    error: function error(msg) {
      logger.error('cookieStore error: ' + msg);
    },
    get: function get(name) {
      try {
        var nameEQ = name + '=';
        var ca = document.cookie.split(';');

        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];

          while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
          }

          if (c.indexOf(nameEQ) === 0) {
            return decodeURIComponent(c.substring(nameEQ.length, c.length));
          }
        }
      } catch (err) {}

      return null;
    },
    parse: function parse(name) {
      var cookie;

      try {
        cookie = JSON.parse(cookieStore.get(name)) || {};
      } catch (err) {// noop
      }

      return cookie;
    },
    set: function set(name, value, days, cross_subdomain, is_secure) {
      try {
        var cdomain = '',
            expires = '',
            secure = '';

        if (cross_subdomain) {
          var matches = document.location.hostname.match(DOMAIN_MATCH_REGEX),
              domain = matches ? matches[0] : '';
          cdomain = domain ? '; domain=.' + domain : '';
        }

        if (days) {
          var date = new Date();
          date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
          expires = '; expires=' + date.toUTCString();
        }

        if (is_secure) {
          secure = '; secure';
        }

        var new_cookie_val = name + '=' + encodeURIComponent(JSON.stringify(value)) + expires + '; path=/' + cdomain + secure;
        document.cookie = new_cookie_val;
        return new_cookie_val;
      } catch (err) {
        return;
      }
    },
    remove: function remove(name, cross_subdomain) {
      try {
        cookieStore.set(name, '', -1, cross_subdomain);
      } catch (err) {
        return;
      }
    }
  };
  var _localStorage_supported = null;
  var localStore = {
    is_supported: function is_supported() {
      if (_localStorage_supported !== null) {
        return _localStorage_supported;
      }

      var supported = true;

      if (window) {
        try {
          var key = '__mplssupport__',
              val = 'xyz';
          localStore.set(key, val);

          if (localStore.get(key) !== '"xyz"') {
            supported = false;
          }

          localStore.remove(key);
        } catch (err) {
          supported = false;
        }
      } else {
        supported = false;
      }

      if (!supported) {
        logger.error('localStorage unsupported; falling back to cookie store');
      }

      _localStorage_supported = supported;
      return supported;
    },
    error: function error(msg) {
      logger.error('localStorage error: ' + msg);
    },
    get: function get(name) {
      try {
        return window.localStorage.getItem(name);
      } catch (err) {
        localStore.error(err);
      }

      return null;
    },
    parse: function parse(name) {
      try {
        return JSON.parse(localStore.get(name)) || {};
      } catch (err) {// noop
      }

      return null;
    },
    set: function set(name, value) {
      try {
        window.localStorage.setItem(name, JSON.stringify(value));
      } catch (err) {
        localStore.error(err);
      }
    },
    remove: function remove(name) {
      try {
        window.localStorage.removeItem(name);
      } catch (err) {
        localStore.error(err);
      }
    }
  }; // Use localstorage for most data but still use cookie for distinct_id
  // This solves issues with cookies having too much data in them causing headers too large
  // Also makes sure we don't have to send a ton of data to the server

  var localPlusCookieStore = _objectSpread2(_objectSpread2({}, localStore), {}, {
    parse: function parse(name) {
      try {
        var extend = {};

        try {
          // See if there's a cookie stored with data.
          extend = cookieStore.parse(name) || {};

          if (extend['distinct_id']) {
            cookieStore.set(name, {
              distinct_id: extend['distinct_id']
            });
          }
        } catch (err) {}

        var value = _extend(extend, JSON.parse(localStore.get(name) || '{}'));

        localStore.set(name, value);
        return value;
      } catch (err) {// noop
      }

      return null;
    },
    set: function set(name, value, days, cross_subdomain, is_secure) {
      try {
        localStore.set(name, value);

        if (value.distinct_id) {
          cookieStore.set(name, {
            distinct_id: value.distinct_id
          }, days, cross_subdomain, is_secure);
        }
      } catch (err) {
        localStore.error(err);
      }
    },
    remove: function remove(name, cross_subdomain) {
      try {
        window.localStorage.removeItem(name);
        cookieStore.remove(name, cross_subdomain);
      } catch (err) {
        localStore.error(err);
      }
    }
  });
  var memoryStorage = {}; // Storage that only lasts the length of the pageview if we don't want to use cookies

  var memoryStore = {
    is_supported: function is_supported() {
      return true;
    },
    error: function error(msg) {
      logger.error('memoryStorage error: ' + msg);
    },
    get: function get(name) {
      return memoryStorage[name] || null;
    },
    parse: function parse(name) {
      return memoryStorage[name] || null;
    },
    set: function set(name, value) {
      memoryStorage[name] = value;
    },
    remove: function remove(name) {
      delete memoryStorage[name];
    }
  };
  var sessionStorageSupported = null;

  var sessionStore = {
    is_supported: function is_supported() {
      if (sessionStorageSupported !== null) {
        return sessionStorageSupported;
      }

      sessionStorageSupported = true;

      if (window) {
        try {
          var key = '__support__',
              val = 'xyz';
          sessionStore.set(key, val);

          if (sessionStore.get(key) !== '"xyz"') {
            sessionStorageSupported = false;
          }

          sessionStore.remove(key);
        } catch (err) {
          sessionStorageSupported = false;
        }
      } else {
        sessionStorageSupported = false;
      }

      return sessionStorageSupported;
    },
    error: function error(msg) {
      if (Config.DEBUG) {
        logger.error('sessionStorage error: ', msg);
      }
    },
    get: function get(name) {
      try {
        return window.sessionStorage.getItem(name);
      } catch (err) {
        sessionStore.error(err);
      }

      return null;
    },
    parse: function parse(name) {
      try {
        return JSON.parse(sessionStore.get(name)) || null;
      } catch (err) {// noop
      }

      return null;
    },
    set: function set(name, value) {
      try {
        window.sessionStorage.setItem(name, JSON.stringify(value));
      } catch (err) {
        sessionStore.error(err);
      }
    },
    remove: function remove(name) {
      try {
        window.sessionStorage.removeItem(name);
      } catch (err) {
        sessionStore.error(err);
      }
    }
  };

  /**
   * GDPR utils
   *
   * The General Data Protection Regulation (GDPR) is a regulation in EU law on data protection
   * and privacy for all individuals within the European Union. It addresses the export of personal
   * data outside the EU. The GDPR aims primarily to give control back to citizens and residents
   * over their personal data and to simplify the regulatory environment for international business
   * by unifying the regulation within the EU.
   *
   * This set of utilities is intended to enable opt in/out functionality in the PostHog JS SDK.
   * These functions are used internally by the SDK and are not intended to be publicly exposed.
   */

  /**
   * A function used to capture a PostHog event (e.g. PostHogLib.capture)
   * @callback captureFunction
   * @param {String} event_name The name of the event. This can be anything the user does - 'Button Click', 'Sign Up', 'Item Purchased', etc.
   * @param {Object} [properties] A set of properties to include with the event you're sending. These describe the user who did the event or details about the event itself.
   * @param {Function} [callback] If provided, the callback function will be called after capturing the event.
   */

  /** Public **/
  var GDPR_DEFAULT_PERSISTENCE_PREFIX = '__ph_opt_in_out_';
  /**
   * Opt the user in to data capturing and cookies/localstorage for the given token
   * @param {string} token - PostHog project capturing token
   * @param {Object} [options]
   * @param {captureFunction} [options.capture] - function used for capturing a PostHog event to record the opt-in action
   * @param {string} [options.captureEventName] - event name to be used for capturing the opt-in action
   * @param {Object} [options.captureProperties] - set of properties to be captured along with the opt-in action
   * @param {string} [options.persistenceType] Persistence mechanism used - cookie or localStorage
   * @param {string} [options.persistencePrefix=__ph_opt_in_out] - custom prefix to be used in the cookie/localstorage name
   * @param {Number} [options.cookieExpiration] - number of days until the opt-in cookie expires
   * @param {boolean} [options.crossSubdomainCookie] - whether the opt-in cookie is set as cross-subdomain or not
   * @param {boolean} [options.secureCookie] - whether the opt-in cookie is set as secure or not
   */

  function optIn(token, options) {
    _optInOut(true, token, options);
  }
  /**
   * Opt the user out of data capturing and cookies/localstorage for the given token
   * @param {string} token - PostHog project capturing token
   * @param {Object} [options]
   * @param {string} [options.persistenceType] Persistence mechanism used - cookie or localStorage
   * @param {string} [options.persistencePrefix=__ph_opt_in_out] - custom prefix to be used in the cookie/localstorage name
   * @param {Number} [options.cookieExpiration] - number of days until the opt-out cookie expires
   * @param {boolean} [options.crossSubdomainCookie] - whether the opt-out cookie is set as cross-subdomain or not
   * @param {boolean} [options.secureCookie] - whether the opt-out cookie is set as secure or not
   */

  function optOut(token, options) {
    _optInOut(false, token, options);
  }
  /**
   * Check whether the user has opted in to data capturing and cookies/localstorage for the given token
   * @param {string} token - PostHog project capturing token
   * @param {Object} [options]
   * @param {string} [options.persistenceType] Persistence mechanism used - cookie or localStorage
   * @param {string} [options.persistencePrefix=__ph_opt_in_out] - custom prefix to be used in the cookie/localstorage name
   * @returns {boolean} whether the user has opted in to the given opt type
   */

  function hasOptedIn(token, options) {
    return _getStorageValue(token, options) === '1';
  }
  /**
   * Check whether the user has opted out of data capturing and cookies/localstorage for the given token
   * @param {string} token - PostHog project capturing token
   * @param {Object} [options]
   * @param {string} [options.persistenceType] Persistence mechanism used - cookie or localStorage
   * @param {string} [options.persistencePrefix=__ph_opt_in_out] - custom prefix to be used in the cookie/localstorage name
   * @param {boolean} [options.respectDnt] - flag to take browser DNT setting into account
   * @returns {boolean} whether the user has opted out of the given opt type
   */

  function hasOptedOut(token, options) {
    if (_hasDoNotTrackFlagOn(options)) {
      return true;
    }

    return _getStorageValue(token, options) === '0';
  }
  /**
   * Clear the user's opt in/out status of data capturing and cookies/localstorage for the given token
   * @param {string} token - PostHog project capturing token
   * @param {Object} [options]
   * @param {string} [options.persistenceType] Persistence mechanism used - cookie or localStorage
   * @param {string} [options.persistencePrefix=__ph_opt_in_out] - custom prefix to be used in the cookie/localstorage name
   * @param {Number} [options.cookieExpiration] - number of days until the opt-in cookie expires
   * @param {boolean} [options.crossSubdomainCookie] - whether the opt-in cookie is set as cross-subdomain or not
   * @param {boolean} [options.secureCookie] - whether the opt-in cookie is set as secure or not
   */

  function clearOptInOut(token, options) {
    options = options || {};

    _getStorage(options).remove(_getStorageKey(token, options), !!options.crossSubdomainCookie);
  }
  /** Private **/

  /**
   * Get storage util
   * @param {Object} [options]
   * @param {string} [options.persistenceType]
   * @returns {object} either cookieStore or localStore
   */

  function _getStorage(options) {
    options = options || {};

    if (options.persistenceType === 'localStorage') {
      return localStore;
    }

    if (options.persistenceType === 'localStorage+cookie') {
      return localPlusCookieStore;
    }

    return cookieStore;
  }
  /**
   * Get the name of the cookie that is used for the given opt type (capturing, cookie, etc.)
   * @param {string} token - PostHog project capturing token
   * @param {Object} [options]
   * @param {string} [options.persistencePrefix=__ph_opt_in_out] - custom prefix to be used in the cookie/localstorage name
   * @returns {string} the name of the cookie for the given opt type
   */


  function _getStorageKey(token, options) {
    options = options || {};
    return (options.persistencePrefix || GDPR_DEFAULT_PERSISTENCE_PREFIX) + token;
  }
  /**
   * Get the value of the cookie that is used for the given opt type (capturing, cookie, etc.)
   * @param {string} token - PostHog project capturing token
   * @param {Object} [options]
   * @param {string} [options.persistencePrefix=__ph_opt_in_out] - custom prefix to be used in the cookie/localstorage name
   * @returns {string} the value of the cookie for the given opt type
   */


  function _getStorageValue(token, options) {
    return _getStorage(options).get(_getStorageKey(token, options));
  }
  /**
   * Check whether the user has set the DNT/doNotTrack setting to true in their browser
   * @param {Object} [options]
   * @param {string} [options.window] - alternate window object to check; used to force various DNT settings in browser tests
   * @param {boolean} [options.respectDnt] - flag to take browser DNT setting into account
   * @returns {boolean} whether the DNT setting is true
   */


  function _hasDoNotTrackFlagOn(options) {
    if (options && options.respectDnt) {
      var win$1 = options && options.window || win;
      var nav = win$1['navigator'] || {};
      var hasDntOn = false;

      _each([nav['doNotTrack'], // standard
      nav['msDoNotTrack'], win$1['doNotTrack']], function (dntValue) {
        if (_includes([true, 1, '1', 'yes'], dntValue)) {
          hasDntOn = true;
        }
      });

      return hasDntOn;
    }

    return false;
  }
  /**
   * Set cookie/localstorage for the user indicating that they are opted in or out for the given opt type
   * @param {boolean} optValue - whether to opt the user in or out for the given opt type
   * @param {string} token - PostHog project capturing token
   * @param {Object} [options]
   * @param {captureFunction} [options.capture] - function used for capturing a PostHog event to record the opt-in action
   * @param {string} [options.captureEventName] - event name to be used for capturing the opt-in action
   * @param {Object} [options.captureProperties] - set of properties to be captured along with the opt-in action
   * @param {string} [options.persistencePrefix=__ph_opt_in_out] - custom prefix to be used in the cookie/localstorage name
   * @param {Number} [options.cookieExpiration] - number of days until the opt-in cookie expires
   * @param {boolean} [options.crossSubdomainCookie] - whether the opt-in cookie is set as cross-subdomain or not
   * @param {boolean} [options.secureCookie] - whether the opt-in cookie is set as secure or not
   */


  function _optInOut(optValue, token, options) {
    if (!_isString(token) || !token.length) {
      console.error('gdpr.' + (optValue ? 'optIn' : 'optOut') + ' called with an invalid token');
      return;
    }

    options = options || {};

    _getStorage(options).set(_getStorageKey(token, options), optValue ? 1 : 0, _isNumber(options.cookieExpiration) ? options.cookieExpiration : null, options.crossSubdomainCookie, options.secureCookie);

    if (options.capture && optValue) {
      // only capture event if opting in (optValue=true)
      options.capture(options.captureEventName || '$opt_in', options.captureProperties || {}, {
        send_instantly: true
      });
    }
  }

  function userOptedOut(posthog, silenceErrors) {
    var optedOut = false;

    try {
      var token = posthog.get_config('token');
      var respectDnt = posthog.get_config('respect_dnt');
      var persistenceType = posthog.get_config('opt_out_capturing_persistence_type');
      var persistencePrefix = posthog.get_config('opt_out_capturing_cookie_prefix') || undefined;
      var win = posthog.get_config('window'); // used to override window during browser tests

      if (token) {
        // if there was an issue getting the token, continue method execution as normal
        optedOut = hasOptedOut(token, {
          respectDnt: respectDnt,
          persistenceType: persistenceType,
          persistencePrefix: persistencePrefix,
          window: win
        });
      }
    } catch (err) {
      if (!silenceErrors) {
        console.error('Unexpected error when checking capturing opt-out status: ' + err);
      }
    }

    return optedOut;
  }
  /**
   * Wrap a method with a check for whether the user is opted out of data capturing and cookies/localstorage for the given token
   * If the user has opted out, return early instead of executing the method.
   * If a callback argument was provided, execute it passing the 0 error code.
   * @param {PostHog} posthog - the posthog instance
   * @param {function} method - wrapped method to be executed if the user has not opted out
   * @param silenceErrors
   * @returns {*} the result of executing method OR undefined if the user has opted out
   */

  function addOptOutCheck(posthog, method, silenceErrors) {
    return function () {
      var optedOut = userOptedOut(posthog, silenceErrors);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (!optedOut) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return method.apply(this, args);
      }

      var callback = args[args.length - 1];

      if (typeof callback === 'function') {
        callback(0);
      }

      return;
    };
  }

  var SET_ACTION = '$set';
  var SET_ONCE_ACTION = '$set_once';
  /**
   * PostHog People Object
   * @constructor
   */

  var PostHogPeople = /*#__PURE__*/function () {
    function PostHogPeople(posthog) {
      var _this = this;

      _classCallCheck(this, PostHogPeople);

      this._posthog = posthog;
      /*
       * Set properties on a user record.
       *
       * ### Usage:
       *
       *     posthog.people.set('gender', 'm');
       *
       *     // or set multiple properties at once
       *     posthog.people.set({
       *         'Company': 'Acme',
       *         'Plan': 'Premium',
       *         'Upgrade date': new Date()
       *     });
       *     // properties can be strings, integers, dates, or lists
       *
       * @param {Object|String} prop If a string, this is the name of the property. If an object, this is an associative array of names and values.
       * @param {*} [to] A value to set on the given property name
       * @param {Function} [callback] If provided, the callback will be called after capturing the event.
       */

      this.set = addOptOutCheck(posthog, function (prop, to, callback) {
        var data = _this.set_action(prop, to);

        if (_isObject(prop)) {
          callback = to;
        } // make sure that the referrer info has been updated and saved


        if (_this._get_config('save_referrer')) {
          _this._posthog.persistence.update_referrer_info(document.referrer);
        } // update $set object with default people properties


        data[SET_ACTION] = _extend({}, _info.people_properties(), _this._posthog.persistence.get_referrer_info(), data[SET_ACTION]);
        return _this._send_request(data, callback);
      });
      /*
       * Set properties on a user record, only if they do not yet exist.
       * This will not overwrite previous people property values, unlike
       * people.set().
       *
       * ### Usage:
       *
       *     posthog.people.set_once('First Login Date', new Date());
       *
       *     // or set multiple properties at once
       *     posthog.people.set_once({
       *         'First Login Date': new Date(),
       *         'Starting Plan': 'Premium'
       *     });
       *
       *     // properties can be strings, integers or dates
       *
       * @param {Object|String} prop If a string, this is the name of the property. If an object, this is an associative array of names and values.
       * @param {*} [to] A value to set on the given property name
       * @param {Function} [callback] If provided, the callback will be called after capturing the event.
       */

      this.set_once = addOptOutCheck(posthog, function (prop, to, callback) {
        var data = _this.set_once_action(prop, to);

        if (_isObject(prop)) {
          callback = to;
        }

        return _this._send_request(data, callback);
      });
    }

    _createClass(PostHogPeople, [{
      key: "toString",
      value: function toString() {
        return this._posthog.toString() + '.people';
      }
    }, {
      key: "_send_request",
      value: function _send_request(data, callback) {
        data['$token'] = this._get_config('token');
        data['$distinct_id'] = this._posthog.get_distinct_id();

        var device_id = this._posthog.get_property('$device_id');

        var user_id = this._posthog.get_property('$user_id');

        var had_persisted_distinct_id = this._posthog.get_property('$had_persisted_distinct_id');

        if (device_id) {
          data['$device_id'] = device_id;
        }

        if (user_id) {
          data['$user_id'] = user_id;
        }

        if (had_persisted_distinct_id) {
          data['$had_persisted_distinct_id'] = had_persisted_distinct_id;
        }

        var date_encoded_data = _encodeDates(data);

        var truncated_data = _copyAndTruncateStrings(date_encoded_data, this._get_config('properties_string_max_length'));

        var json_data = JSON.stringify(date_encoded_data);

        var encoded_data = _base64Encode(json_data);

        this._posthog._send_request(this._get_config('api_host') + '/engage/', {
          data: encoded_data
        }, {}, this._posthog._prepare_callback(callback, truncated_data));

        return truncated_data;
      }
    }, {
      key: "_get_config",
      value: function _get_config(conf_var) {
        return this._posthog.get_config(conf_var);
      }
    }, {
      key: "_is_reserved_property",
      value: function _is_reserved_property(prop) {
        return prop === '$distinct_id' || prop === '$token' || prop === '$device_id' || prop === '$user_id' || prop === '$had_persisted_distinct_id';
      } // Internal methods for posthog.people API.
      // These methods shouldn't involve network I/O.

    }, {
      key: "set_action",
      value: function set_action(prop, to) {
        return this.apiActionParser(SET_ACTION, prop, to);
      }
    }, {
      key: "set_once_action",
      value: function set_once_action(prop, to) {
        return this.apiActionParser(SET_ONCE_ACTION, prop, to);
      }
    }, {
      key: "apiActionParser",
      value: function apiActionParser(actionType, prop, to) {
        var _this2 = this;

        var data = {};
        var props = {};

        if (_isObject(prop)) {
          _each(prop, function (v, k) {
            if (!_this2._is_reserved_property(k)) {
              props[k] = v;
            }
          });
        } else {
          props[prop] = to;
        }

        data[actionType] = props;
        return data;
      }
    }]);

    return PostHogPeople;
  }();

  var parseFeatureFlagDecideResponse = function parseFeatureFlagDecideResponse(response, persistence) {
    var flags = response['featureFlags'];

    if (flags) {
      // using the v1 api
      if (Array.isArray(flags)) {
        var $enabled_feature_flags = {};

        if (flags) {
          for (var i = 0; i < flags.length; i++) {
            $enabled_feature_flags[flags[i]] = true;
          }
        }

        persistence && persistence.register({
          $active_feature_flags: flags,
          $enabled_feature_flags: $enabled_feature_flags
        });
      } else {
        // using the v2 api
        persistence && persistence.register({
          $active_feature_flags: Object.keys(flags || {}),
          $enabled_feature_flags: flags || {}
        });
      }
    } else {
      if (persistence) {
        persistence.unregister('$active_feature_flags');
        persistence.unregister('$enabled_feature_flags');
      }
    }
  };
  var PostHogFeatureFlags = /*#__PURE__*/function () {
    function PostHogFeatureFlags(instance) {
      _classCallCheck(this, PostHogFeatureFlags);

      this.instance = instance;
      this._override_warning = false;
      this.flagCallReported = {};
      this.featureFlagEventHandlers = [];
      this.reloadFeatureFlagsQueued = false;
      this.reloadFeatureFlagsInAction = false;
    }

    _createClass(PostHogFeatureFlags, [{
      key: "getFlags",
      value: function getFlags() {
        return Object.keys(this.getFlagVariants());
      }
    }, {
      key: "getFlagVariants",
      value: function getFlagVariants() {
        var enabledFlags = this.instance.get_property('$enabled_feature_flags');
        var overriddenFlags = this.instance.get_property('$override_feature_flags');

        if (!overriddenFlags) {
          return enabledFlags || {};
        }

        var finalFlags = _extend({}, enabledFlags);

        var overriddenKeys = Object.keys(overriddenFlags);

        for (var i = 0; i < overriddenKeys.length; i++) {
          if (overriddenFlags[overriddenKeys[i]] === false) {
            delete finalFlags[overriddenKeys[i]];
          } else {
            finalFlags[overriddenKeys[i]] = overriddenFlags[overriddenKeys[i]];
          }
        }

        if (!this._override_warning) {
          console.warn('[PostHog] Overriding feature flags!', {
            enabledFlags: enabledFlags,
            overriddenFlags: overriddenFlags,
            finalFlags: finalFlags
          });
          this._override_warning = true;
        }

        return finalFlags;
      }
      /**
       * Reloads feature flags asynchronously.
       *
       * Constraints:
       *
       * 1. Avoid parallel requests
       * 2. Delay a few milliseconds after each reloadFeatureFlags call to batch subsequent changes together
       * 3. Don't call this during initial load (as /decide will be called instead), see posthog-core.js
       */

    }, {
      key: "reloadFeatureFlags",
      value: function reloadFeatureFlags() {
        if (!this.reloadFeatureFlagsQueued) {
          this.reloadFeatureFlagsQueued = true;

          this._startReloadTimer();
        }
      }
    }, {
      key: "setAnonymousDistinctId",
      value: function setAnonymousDistinctId(anon_distinct_id) {
        this.$anon_distinct_id = anon_distinct_id;
      }
    }, {
      key: "setReloadingPaused",
      value: function setReloadingPaused(isPaused) {
        this.reloadFeatureFlagsInAction = isPaused;
      }
    }, {
      key: "resetRequestQueue",
      value: function resetRequestQueue() {
        this.reloadFeatureFlagsQueued = false;
      }
    }, {
      key: "_startReloadTimer",
      value: function _startReloadTimer() {
        var _this = this;

        if (this.reloadFeatureFlagsQueued && !this.reloadFeatureFlagsInAction) {
          setTimeout(function () {
            if (!_this.reloadFeatureFlagsInAction && _this.reloadFeatureFlagsQueued) {
              _this.reloadFeatureFlagsQueued = false;

              _this._reloadFeatureFlagsRequest();
            }
          }, 5);
        }
      }
    }, {
      key: "_reloadFeatureFlagsRequest",
      value: function _reloadFeatureFlagsRequest() {
        var _this2 = this;

        this.setReloadingPaused(true);
        var token = this.instance.get_config('token');
        var json_data = JSON.stringify({
          token: token,
          distinct_id: this.instance.get_distinct_id(),
          groups: this.instance.getGroups(),
          $anon_distinct_id: this.$anon_distinct_id
        });

        var encoded_data = _base64Encode(json_data);

        this.instance._send_request(this.instance.get_config('api_host') + '/decide/?v=2', {
          data: encoded_data
        }, {
          method: 'POST'
        }, this.instance._prepare_callback(function (response) {
          // reset anon_distinct_id after at least a single request with it
          // makes it through
          _this2.$anon_distinct_id = undefined;

          _this2.receivedFeatureFlags(response); // :TRICKY: Reload - start another request if queued!


          _this2.setReloadingPaused(false);

          _this2._startReloadTimer();
        }));
      }
      /*
       * Get feature flag's value for user.
       *
       * ### Usage:
       *
       *     if(posthog.getFeatureFlag('my-flag') === 'some-variant') { // do something }
       *
       * @param {Object|String} key Key of the feature flag.
       * @param {Object|String} options (optional) If {send_event: false}, we won't send an $feature_flag_call event to PostHog.
       */

    }, {
      key: "getFeatureFlag",
      value: function getFeatureFlag(key) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (!this.getFlags()) {
          console.warn('getFeatureFlag for key "' + key + '" failed. Feature flags didn\'t load in time.');
          return false;
        }

        var flagValue = this.getFlagVariants()[key];

        if ((options.send_event || !('send_event' in options)) && !this.flagCallReported[key]) {
          this.flagCallReported[key] = true;
          this.instance.capture('$feature_flag_called', {
            $feature_flag: key,
            $feature_flag_response: flagValue
          });
        }

        return flagValue;
      }
      /*
       * See if feature flag is enabled for user.
       *
       * ### Usage:
       *
       *     if(posthog.isFeatureEnabled('beta-feature')) { // do something }
       *
       * @param {Object|String} key Key of the feature flag.
       * @param {Object|String} options (optional) If {send_event: false}, we won't send an $feature_flag_call event to PostHog.
       */

    }, {
      key: "isFeatureEnabled",
      value: function isFeatureEnabled(key) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (!this.getFlags()) {
          console.warn('isFeatureEnabled for key "' + key + '" failed. Feature flags didn\'t load in time.');
          return false;
        }

        return !!this.getFeatureFlag(key, options);
      }
    }, {
      key: "addFeatureFlagsHandler",
      value: function addFeatureFlagsHandler(handler) {
        this.featureFlagEventHandlers.push(handler);
      }
    }, {
      key: "receivedFeatureFlags",
      value: function receivedFeatureFlags(response) {
        this.instance.decideEndpointWasHit = true;
        parseFeatureFlagDecideResponse(response, this.instance.persistence);
        var flags = this.getFlags();
        var variants = this.getFlagVariants();
        this.featureFlagEventHandlers.forEach(function (handler) {
          return handler(flags, variants);
        });
      }
      /*
       * Override feature flags for debugging.
       *
       * ### Usage:
       *
       *     - posthog.feature_flags.override(false)
       *     - posthog.feature_flags.override(['beta-feature'])
       *     - posthog.feature_flags.override({'beta-feature': 'variant', 'other-feature': True})
       *
       * @param {Object|Array|String} flags Flags to override with.
       */

    }, {
      key: "override",
      value: function override(flags) {
        this._override_warning = false;

        if (flags === false) {
          this.instance.persistence.unregister('$override_feature_flags');
        } else if (Array.isArray(flags)) {
          var flagsObj = {};

          for (var i = 0; i < flags.length; i++) {
            flagsObj[flags[i]] = true;
          }

          this.instance.persistence.register({
            $override_feature_flags: flagsObj
          });
        } else {
          this.instance.persistence.register({
            $override_feature_flags: flags
          });
        }
      }
      /*
       * Register an event listener that runs when feature flags become available or when they change.
       * If there are flags, the listener is called immediately in addition to being called on future changes.
       *
       * ### Usage:
       *
       *     posthog.onFeatureFlags(function(featureFlags) { // do something })
       *
       * @param {Function} [callback] The callback function will be called once the feature flags are ready or when they are updated.
       *                              It'll return a list of feature flags enabled for the user.
       */

    }, {
      key: "onFeatureFlags",
      value: function onFeatureFlags(callback) {
        this.addFeatureFlagsHandler(callback);

        if (this.instance.decideEndpointWasHit) {
          var flags = this.getFlags();
          var flagVariants = this.getFlagVariants();
          callback(flags, flagVariants);
        }
      }
    }]);

    return PostHogFeatureFlags;
  }();

  /*
   * Constants
   */
  var SET_QUEUE_KEY = '__mps';
  var SET_ONCE_QUEUE_KEY = '__mpso';
  var UNSET_QUEUE_KEY = '__mpus';
  var ADD_QUEUE_KEY = '__mpa';
  var APPEND_QUEUE_KEY = '__mpap';
  var REMOVE_QUEUE_KEY = '__mpr';
  var UNION_QUEUE_KEY = '__mpu'; // This key is deprecated, but we want to check for it to see whether aliasing is allowed.

  var PEOPLE_DISTINCT_ID_KEY = '$people_distinct_id';
  var ALIAS_ID_KEY = '__alias';
  var CAMPAIGN_IDS_KEY = '__cmpns';
  var EVENT_TIMERS_KEY = '__timers';
  var SESSION_RECORDING_ENABLED_SERVER_SIDE = '$session_recording_enabled_server_side';
  var CONSOLE_LOG_RECORDING_ENABLED_SERVER_SIDE = '$console_log_recording_enabled_server_side';
  var SESSION_ID = '$sesid';
  var ENABLED_FEATURE_FLAGS = '$enabled_feature_flags';
  var RESERVED_PROPERTIES = [SET_QUEUE_KEY, SET_ONCE_QUEUE_KEY, UNSET_QUEUE_KEY, ADD_QUEUE_KEY, APPEND_QUEUE_KEY, REMOVE_QUEUE_KEY, UNION_QUEUE_KEY, PEOPLE_DISTINCT_ID_KEY, ALIAS_ID_KEY, CAMPAIGN_IDS_KEY, EVENT_TIMERS_KEY, SESSION_RECORDING_ENABLED_SERVER_SIDE, SESSION_ID, ENABLED_FEATURE_FLAGS];
  /**
   * PostHog Persistence Object
   * @constructor
   */

  var PostHogPersistence = /*#__PURE__*/function () {
    function PostHogPersistence(config) {
      _classCallCheck(this, PostHogPersistence);

      // clean chars that aren't accepted by the http spec for cookie values
      // https://datatracker.ietf.org/doc/html/rfc2616#section-2.2
      var token = '';

      if (config['token']) {
        token = config['token'].replace(/\+/g, 'PL').replace(/\//g, 'SL').replace(/=/g, 'EQ');
      }

      this.props = {};
      this.campaign_params_saved = false;

      if (config['persistence_name']) {
        this.name = 'ph_' + config['persistence_name'];
      } else {
        this.name = 'ph_' + token + '_posthog';
      }

      var storage_type = config['persistence'].toLowerCase();

      if (storage_type !== 'cookie' && storage_type.indexOf('localstorage') === -1 && storage_type !== 'memory') {
        logger.critical('Unknown persistence type ' + storage_type + '; falling back to cookie');
        storage_type = config['persistence'] = 'cookie';
      }

      if (storage_type === 'localstorage' && localStore.is_supported()) {
        this.storage = localStore;
      } else if (storage_type === 'localstorage+cookie' && localPlusCookieStore.is_supported()) {
        this.storage = localPlusCookieStore;
      } else if (storage_type === 'memory') {
        this.storage = memoryStore;
      } else {
        this.storage = cookieStore;
      }

      this.load();
      this.update_config(config);
      this.save();
    }

    _createClass(PostHogPersistence, [{
      key: "properties",
      value: function properties() {
        var p = {}; // Filter out reserved properties

        _each(this.props, function (v, k) {
          if (k === ENABLED_FEATURE_FLAGS && _typeof(v) === 'object') {
            var keys = Object.keys(v);

            for (var i = 0; i < keys.length; i++) {
              p["$feature/".concat(keys[i])] = v[keys[i]];
            }
          } else if (!_include(RESERVED_PROPERTIES, k)) {
            p[k] = v;
          }
        });

        return p;
      }
    }, {
      key: "load",
      value: function load() {
        if (this.disabled) {
          return;
        }

        var entry = this.storage.parse(this.name);

        if (entry) {
          this.props = _extend({}, entry);
        }
      }
    }, {
      key: "save",
      value: function save() {
        if (this.disabled) {
          return;
        }

        this.storage.set(this.name, this.props, this.expire_days, this.cross_subdomain, this.secure);
      }
    }, {
      key: "remove",
      value: function remove() {
        // remove both domain and subdomain cookies
        this.storage.remove(this.name, false);
        this.storage.remove(this.name, true);
      } // removes the storage entry and deletes all loaded data
      // forced name for tests

    }, {
      key: "clear",
      value: function clear() {
        this.remove();
        this.props = {};
      }
      /**
       * @param {Object} props
       * @param {*=} default_value
       * @param {number=} days
       */

    }, {
      key: "register_once",
      value: function register_once(props, default_value, days) {
        var _this = this;

        if (_isObject(props)) {
          if (typeof default_value === 'undefined') {
            default_value = 'None';
          }

          this.expire_days = typeof days === 'undefined' ? this.default_expiry : days;

          _each(props, function (val, prop) {
            if (!_this.props.hasOwnProperty(prop) || _this.props[prop] === default_value) {
              _this.props[prop] = val;
            }
          });

          this.save();
          return true;
        }

        return false;
      }
      /**
       * @param {Object} props
       * @param {number=} days
       */

    }, {
      key: "register",
      value: function register(props, days) {
        if (_isObject(props)) {
          this.expire_days = typeof days === 'undefined' ? this.default_expiry : days;

          _extend(this.props, props);

          this.save();
          return true;
        }

        return false;
      }
    }, {
      key: "unregister",
      value: function unregister(prop) {
        if (prop in this.props) {
          delete this.props[prop];
          this.save();
        }
      }
    }, {
      key: "update_campaign_params",
      value: function update_campaign_params() {
        if (!this.campaign_params_saved) {
          this.register(_info.campaignParams());
          this.campaign_params_saved = true;
        }
      }
    }, {
      key: "update_search_keyword",
      value: function update_search_keyword(referrer) {
        this.register(_info.searchInfo(referrer));
      } // EXPORTED METHOD, we test this directly.

    }, {
      key: "update_referrer_info",
      value: function update_referrer_info(referrer) {
        this.register({
          $referrer: referrer || this.props['$referrer'] || '$direct',
          $referring_domain: _info.referringDomain(referrer) || this.props['$referring_domain'] || '$direct'
        });
      }
    }, {
      key: "get_referrer_info",
      value: function get_referrer_info() {
        return _strip_empty_properties({
          $referrer: this['props']['$referrer'],
          $referring_domain: this['props']['$referring_domain']
        });
      } // safely fills the passed in object with stored properties,
      // does not override any properties defined in both
      // returns the passed in object

    }, {
      key: "safe_merge",
      value: function safe_merge(props) {
        _each(this.props, function (val, prop) {
          if (!(prop in props)) {
            props[prop] = val;
          }
        });

        return props;
      }
    }, {
      key: "update_config",
      value: function update_config(config) {
        this.default_expiry = this.expire_days = config['cookie_expiration'];
        this.set_disabled(config['disable_persistence']);
        this.set_cross_subdomain(config['cross_subdomain_cookie']);
        this.set_secure(config['secure_cookie']);
      }
    }, {
      key: "set_disabled",
      value: function set_disabled(disabled) {
        this.disabled = disabled;

        if (this.disabled) {
          this.remove();
        } else {
          this.save();
        }
      }
    }, {
      key: "set_cross_subdomain",
      value: function set_cross_subdomain(cross_subdomain) {
        if (cross_subdomain !== this.cross_subdomain) {
          this.cross_subdomain = cross_subdomain;
          this.remove();
          this.save();
        }
      }
    }, {
      key: "get_cross_subdomain",
      value: function get_cross_subdomain() {
        return !!this.cross_subdomain;
      }
    }, {
      key: "set_secure",
      value: function set_secure(secure) {
        if (secure !== this.secure) {
          this.secure = secure;
          this.remove();
          this.save();
        }
      }
    }, {
      key: "set_event_timer",
      value: function set_event_timer(event_name, timestamp) {
        var timers = this.props[EVENT_TIMERS_KEY] || {};
        timers[event_name] = timestamp;
        this.props[EVENT_TIMERS_KEY] = timers;
        this.save();
      }
    }, {
      key: "remove_event_timer",
      value: function remove_event_timer(event_name) {
        var timers = this.props[EVENT_TIMERS_KEY] || {};
        var timestamp = timers[event_name];

        if (!_isUndefined(timestamp)) {
          delete this.props[EVENT_TIMERS_KEY][event_name];
          this.save();
        }

        return timestamp;
      }
    }]);

    return PostHogPersistence;
  }();

  var replacementImageURI = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNOCAwSDE2TDAgMTZWOEw4IDBaIiBmaWxsPSIjMkQyRDJEIi8+CjxwYXRoIGQ9Ik0xNiA4VjE2SDhMMTYgOFoiIGZpbGw9IiMyRDJEMkQiLz4KPC9zdmc+Cg==';
  /*
   * Check whether a data payload is nearing 5mb. If it is, it checks the data for
   * data URIs (the likely culprit for large payloads). If it finds data URIs, it either replaces
   * it with a generic image (if it's an image) or removes it.
   * @data {object} the rr-web data object
   * @returns {object} the rr-web data object with data uris filtered out
   */

  function filterDataURLsFromLargeDataObjects(data) {
    if (data && _typeof(data) === 'object') {
      var stringifiedData = JSON.stringify(data); // String length of 5000000 is an approximation of 5mb
      // Note: with compression, this limit may be able to be increased
      // but we're assuming most of the size is from a data uri which
      // is unlikely to be compressed further

      if (stringifiedData.length > 5000000) {
        // Regex that matches the pattern for a dataURI with the shape 'data:{mime type};{encoding},{data}'. It:
        // 1) Checks if the pattern starts with 'data:' (potentially, not at the start of the string)
        // 2) Extracts the mime type of the data uri in the first group
        // 3) Determines when the data URI ends.Depending on if it's used in the src tag or css, it can end with a ) or "
        var dataURIRegex = /data:([\w\/\-\.]+);(\w+),([^)"]*)/gim;
        var matches = stringifiedData.matchAll(dataURIRegex);

        var _iterator = _createForOfIteratorHelper(matches),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var match = _step.value;

            if (match[1].toLocaleLowerCase().slice(0, 6) === 'image/') {
              stringifiedData = stringifiedData.replace(match[0], replacementImageURI);
            } else {
              stringifiedData = stringifiedData.replace(match[0], '');
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return JSON.parse(stringifiedData);
    }

    return data;
  }
  var CONSOLE_LOG_PLUGIN_NAME = 'rrweb/console@1'; // The name of the rr-web plugin that emits console logs
  // Console logs can be really large. This function truncates large logs
  // It's a simple function that just truncates long strings.
  // TODO: Ideally this function would have better handling of objects + lists,
  // so they could still be rendered in a pretty way after truncation.

  function truncateLargeConsoleLogs(event) {
    var MAX_STRING_SIZE = 2000; // Maximum number of characters allowed in a string

    var MAX_STRINGS_PER_LOG = 10; // A log can consist of multiple strings (e.g. consol.log('string1', 'string2'))

    if (event && _typeof(event) === 'object' && event.type === PLUGIN_EVENT_TYPE && _typeof(event.data) === 'object' && event.data.plugin === CONSOLE_LOG_PLUGIN_NAME) {
      // Note: event.data.payload.payload comes from rr-web, and is an array of strings
      if (event.data.payload.payload.length > MAX_STRINGS_PER_LOG) {
        event.data.payload.payload = event.data.payload.payload.slice(0, MAX_STRINGS_PER_LOG);
        event.data.payload.payload.push('...[truncated]');
      }

      var updatedPayload = [];

      for (var i = 0; i < event.data.payload.payload.length; i++) {
        if (event.data.payload.payload[i] && // Value can be null
        event.data.payload.payload[i].length > MAX_STRING_SIZE) {
          updatedPayload.push(event.data.payload.payload[i].slice(0, MAX_STRING_SIZE) + '...[truncated]');
        } else {
          updatedPayload.push(event.data.payload.payload[i]);
        }
      }

      event.data.payload.payload = updatedPayload;
      return event;
    }

    return event;
  }

  var BASE_ENDPOINT = '/e/';
  var FULL_SNAPSHOT_EVENT_TYPE = 2;
  var META_EVENT_TYPE = 4;
  var INCREMENTAL_SNAPSHOT_EVENT_TYPE = 3;
  var PLUGIN_EVENT_TYPE = 6;
  var MUTATION_SOURCE_TYPE = 0;
  var SessionRecording = /*#__PURE__*/function () {
    function SessionRecording(instance) {
      _classCallCheck(this, SessionRecording);

      this.instance = instance;
      this.captureStarted = false;
      this.snapshots = [];
      this.emit = false; // Controls whether data is sent to the server or not

      this.endpoint = BASE_ENDPOINT;
      this.stopRrweb = undefined;
      this.windowId = null;
      this.sessionId = null;
      this.receivedDecide = false;
    }

    _createClass(SessionRecording, [{
      key: "startRecordingIfEnabled",
      value: function startRecordingIfEnabled() {
        if (this.isRecordingEnabled()) {
          this.startCaptureAndTrySendingQueuedSnapshots();
        } else {
          this.stopRecording();
        }
      }
    }, {
      key: "started",
      value: function started() {
        return this.captureStarted;
      }
    }, {
      key: "stopRecording",
      value: function stopRecording() {
        if (this.captureStarted && this.stopRrweb) {
          this.stopRrweb();
          this.stopRrweb = undefined;
          this.captureStarted = false;
        }
      }
    }, {
      key: "isRecordingEnabled",
      value: function isRecordingEnabled() {
        var enabled_server_side = !!this.instance.get_property(SESSION_RECORDING_ENABLED_SERVER_SIDE);
        var enabled_client_side = !this.instance.get_config('disable_session_recording');
        return enabled_server_side && enabled_client_side;
      }
    }, {
      key: "isConsoleLogCaptureEnabled",
      value: function isConsoleLogCaptureEnabled() {
        var enabled_server_side = !!this.instance.get_property(CONSOLE_LOG_RECORDING_ENABLED_SERVER_SIDE);
        var enabled_client_side = this.instance.get_config('enable_recording_console_log');
        return enabled_client_side !== null && enabled_client_side !== void 0 ? enabled_client_side : enabled_server_side;
      }
    }, {
      key: "afterDecideResponse",
      value: function afterDecideResponse(response) {
        var _response$sessionReco2;

        this.receivedDecide = true;

        if (this.instance.persistence) {
          var _response$sessionReco, _this$instance$persis;

          this.instance.persistence.register((_this$instance$persis = {}, _defineProperty(_this$instance$persis, SESSION_RECORDING_ENABLED_SERVER_SIDE, !!response['sessionRecording']), _defineProperty(_this$instance$persis, CONSOLE_LOG_RECORDING_ENABLED_SERVER_SIDE, (_response$sessionReco = response.sessionRecording) === null || _response$sessionReco === void 0 ? void 0 : _response$sessionReco.consoleLogRecordingEnabled), _this$instance$persis));
        }

        if ((_response$sessionReco2 = response.sessionRecording) !== null && _response$sessionReco2 !== void 0 && _response$sessionReco2.endpoint) {
          var _response$sessionReco3;

          this.endpoint = (_response$sessionReco3 = response.sessionRecording) === null || _response$sessionReco3 === void 0 ? void 0 : _response$sessionReco3.endpoint;
        }

        this.startRecordingIfEnabled();
      }
    }, {
      key: "startCaptureAndTrySendingQueuedSnapshots",
      value: function startCaptureAndTrySendingQueuedSnapshots() {
        var _this = this;

        // Only submit data after we've received a decide response to account for
        // changing endpoints and the feature being disabled on the server side.
        if (this.receivedDecide) {
          this.emit = true;
          this.snapshots.forEach(function (properties) {
            return _this._captureSnapshot(properties);
          });
        }

        this._startCapture();
      }
    }, {
      key: "_startCapture",
      value: function _startCapture() {
        // According to the rrweb docs, rrweb is not supported on IE11 and below:
        // "rrweb does not support IE11 and below because it uses the MutationObserver API which was supported by these browsers."
        // https://github.com/rrweb-io/rrweb/blob/master/guide.md#compatibility-note
        //
        // However, MutationObserver does exist on IE11, it just doesn't work well and does not detect all changes.
        // Instead, when we load "recorder.js", the first JS error is about "Object.assign" being undefined.
        // Thus instead of MutationObserver, we look for this function and block recording if it's undefined.
        if (typeof Object.assign === 'undefined') {
          return;
        }

        if (!this.captureStarted && !this.instance.get_config('disable_session_recording')) {
          this.captureStarted = true;
          loadScript(this.instance.get_config('api_host') + '/static/recorder.js?v=' + Config.LIB_VERSION, this._onScriptLoaded.bind(this));
        }
      }
    }, {
      key: "_updateWindowAndSessionIds",
      value: function _updateWindowAndSessionIds(event) {
        var _event$data;

        // Some recording events are triggered by non-user events (e.g. "X minutes ago" text updating on the screen).
        // We don't want to extend the session or trigger a new session in these cases. These events are designated by event
        // type -> incremental update, and source -> mutation.
        var isNotUserInteraction = event.type === INCREMENTAL_SNAPSHOT_EVENT_TYPE && ((_event$data = event.data) === null || _event$data === void 0 ? void 0 : _event$data.source) === MUTATION_SOURCE_TYPE;

        var _this$instance$sessio = this.instance.sessionManager.checkAndGetSessionAndWindowId(isNotUserInteraction, event.timestamp),
            windowId = _this$instance$sessio.windowId,
            sessionId = _this$instance$sessio.sessionId; // Event types FullSnapshot and Meta mean we're already in the process of sending a full snapshot


        if ((this.windowId !== windowId || this.sessionId !== sessionId) && [FULL_SNAPSHOT_EVENT_TYPE, META_EVENT_TYPE].indexOf(event.type) === -1) {
          var _this$rrwebRecord;

          (_this$rrwebRecord = this.rrwebRecord) === null || _this$rrwebRecord === void 0 ? void 0 : _this$rrwebRecord.takeFullSnapshot();
        }

        this.windowId = windowId;
        this.sessionId = sessionId;
      }
    }, {
      key: "_onScriptLoaded",
      value: function _onScriptLoaded() {
        var _this$rrwebRecord2,
            _this2 = this;

        // rrweb config info: https://github.com/rrweb-io/rrweb/blob/7d5d0033258d6c29599fb08412202d9a2c7b9413/src/record/index.ts#L28
        var sessionRecordingOptions = {
          // select set of rrweb config options we expose to our users
          // see https://github.com/rrweb-io/rrweb/blob/master/guide.md
          blockClass: 'ph-no-capture',
          blockSelector: undefined,
          ignoreClass: 'ph-ignore-input',
          maskAllInputs: true,
          maskInputOptions: {},
          maskInputFn: undefined,
          slimDOMOptions: {},
          collectFonts: false,
          inlineStylesheet: true
        }; // We switched from loading all of rrweb to just the record part, but
        // keep backwards compatibility if someone hasn't upgraded PostHog
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore

        this.rrwebRecord = window.rrweb ? window.rrweb.record : window.rrwebRecord; // only allows user to set our 'whitelisted' options

        var userSessionRecordingOptions = this.instance.get_config('session_recording');

        for (var _i = 0, _Object$entries = Object.entries(userSessionRecordingOptions || {}); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          if (key in sessionRecordingOptions) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            sessionRecordingOptions[key] = value;
          }
        }

        this.stopRrweb = (_this$rrwebRecord2 = this.rrwebRecord) === null || _this$rrwebRecord2 === void 0 ? void 0 : _this$rrwebRecord2.call(this, _objectSpread2({
          emit: function emit(event) {
            event = truncateLargeConsoleLogs(filterDataURLsFromLargeDataObjects(event));

            _this2._updateWindowAndSessionIds(event);

            var properties = {
              $snapshot_data: event,
              $session_id: _this2.sessionId,
              $window_id: _this2.windowId
            };

            _this2.instance._captureMetrics.incr('rrweb-record');

            _this2.instance._captureMetrics.incr("rrweb-record-".concat(event.type));

            if (_this2.emit) {
              _this2._captureSnapshot(properties);
            } else {
              _this2.snapshots.push(properties);
            }
          },
          plugins: window.rrwebConsoleRecord && this.isConsoleLogCaptureEnabled() ? [window.rrwebConsoleRecord.getRecordConsolePlugin()] : []
        }, sessionRecordingOptions)); // :TRICKY: rrweb does not capture navigation within SPA-s, so hook into our $pageview events to get access to all events.
        //   Dropping the initial event is fine (it's always captured by rrweb).

        this.instance._addCaptureHook(function (eventName) {
          if (eventName === '$pageview') {
            var _this2$rrwebRecord;

            (_this2$rrwebRecord = _this2.rrwebRecord) === null || _this2$rrwebRecord === void 0 ? void 0 : _this2$rrwebRecord.addCustomEvent('$pageview', {
              href: window.location.href
            });
          }
        });
      }
    }, {
      key: "_captureSnapshot",
      value: function _captureSnapshot(properties) {
        // :TRICKY: Make sure we batch these requests, use a custom endpoint and don't truncate the strings.
        this.instance.capture('$snapshot', properties, {
          transport: 'XHR',
          method: 'POST',
          endpoint: this.endpoint,
          _noTruncate: true,
          _batchKey: 'sessionRecording',
          _metrics: {
            rrweb_full_snapshot: properties.$snapshot_data.type === FULL_SNAPSHOT_EVENT_TYPE
          }
        });
      }
    }]);

    return SessionRecording;
  }();

  var Decide = /*#__PURE__*/function () {
    function Decide(instance) {
      _classCallCheck(this, Decide);

      this.instance = instance; // don't need to wait for `decide` to return if flags were provided on initialisation

      this.instance.decideEndpointWasHit = this.instance._hasBootstrappedFeatureFlags();
    }

    _createClass(Decide, [{
      key: "call",
      value: function call() {
        var _this = this;

        /*
        Calls /decide endpoint to fetch options for autocapture, session recording, feature flags & compression.
        */
        var json_data = JSON.stringify({
          token: this.instance.get_config('token'),
          distinct_id: this.instance.get_distinct_id(),
          groups: this.instance.getGroups()
        });

        var encoded_data = _base64Encode(json_data);

        this.instance._send_request("".concat(this.instance.get_config('api_host'), "/decide/?v=2"), {
          data: encoded_data,
          verbose: true
        }, {
          method: 'POST'
        }, function (response) {
          return _this.parseDecideResponse(response);
        });
      }
    }, {
      key: "parseDecideResponse",
      value: function parseDecideResponse(response) {
        var _this2 = this,
            _this$instance$sessio;

        if ((response === null || response === void 0 ? void 0 : response.status) === 0) {
          console.error('Failed to fetch feature flags from PostHog.');
          return;
        }

        this.instance.decideEndpointWasHit = true;

        if (!(document && document.body)) {
          console.log('document not ready yet, trying again in 500 milliseconds...');
          setTimeout(function () {
            _this2.parseDecideResponse(response);
          }, 500);
          return;
        }

        this.instance.toolbar.afterDecideResponse(response);
        (_this$instance$sessio = this.instance.sessionRecording) === null || _this$instance$sessio === void 0 ? void 0 : _this$instance$sessio.afterDecideResponse(response);
        autocapture.afterDecideResponse(response, this.instance);
        this.instance.featureFlags.receivedFeatureFlags(response);
        this.instance['compression'] = {};

        if (response['supportedCompression'] && !this.instance.get_config('disable_compression')) {
          var compression = {};

          var _iterator = _createForOfIteratorHelper(response['supportedCompression']),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var method = _step.value;
              compression[method] = true;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          this.instance['compression'] = compression;
        }

        if (response['siteApps']) {
          if (this.instance.get_config('opt_in_site_apps')) {
            var apiHost = this.instance.get_config('api_host');

            var _iterator2 = _createForOfIteratorHelper(response['siteApps']),
                _step2;

            try {
              var _loop = function _loop() {
                var _step2$value = _step2.value,
                    id = _step2$value.id,
                    url = _step2$value.url;
                var script = document.createElement('script');
                script.src = [apiHost, apiHost[apiHost.length - 1] === '/' && url[0] === '/' ? url.substring(1) : url].join('');

                script.onerror = function (e) {
                  console.error("Error while initializing PostHog app with config id ".concat(id), e);
                };

                window["__$$ph_site_app_".concat(id)] = _this2.instance;
                document.body.appendChild(script);
              };

              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          } else if (response['siteApps'].length > 0) {
            console.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
          }
        }
      }
    }]);

    return Decide;
  }();

  var POSTHOG_MANAGED_HOSTS = ['https://app.posthog.com', 'https://eu.posthog.com'];

  var _excluded = ["source"];
  var Toolbar = /*#__PURE__*/function () {
    function Toolbar(instance) {
      _classCallCheck(this, Toolbar);

      this.instance = instance;
    }

    _createClass(Toolbar, [{
      key: "afterDecideResponse",
      value: function afterDecideResponse(response) {
        var toolbarParams = response['toolbarParams'] || response['editorParams'] || (response['toolbarVersion'] ? {
          toolbarVersion: response['toolbarVersion']
        } : {});

        if (response['isAuthenticated'] && toolbarParams['toolbarVersion'] && toolbarParams['toolbarVersion'].indexOf('toolbar') === 0) {
          this.loadToolbar(_objectSpread2(_objectSpread2({}, toolbarParams), {}, {
            apiURL: this.instance.get_config('api_host')
          }));
        }
      }
      /**
       * To load the toolbar, we need an access token and other state. That state comes from one of three places:
       * 1. In the URL hash params
       * 2. From session storage under the key `toolbarParams` if the toolbar was initialized on a previous page
       */

    }, {
      key: "maybeLoadToolbar",
      value: function maybeLoadToolbar() {
        var location = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location;
        var localStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        var history = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window.history;

        try {
          // Before running the code we check if we can access localStorage, if not we opt-out
          if (!localStorage) {
            try {
              window.localStorage.setItem('test', 'test');
              window.localStorage.removeItem('test');
            } catch (error) {
              return false;
            } // If localStorage was undefined, and localStorage is supported we set the default value


            localStorage = window.localStorage;
          }

          var stateHash = _getHashParam(location.hash, '__posthog') || _getHashParam(location.hash, 'state');

          var state = stateHash ? JSON.parse(decodeURIComponent(stateHash)) : null;
          var parseFromUrl = state && state['action'] === 'ph_authorize';
          var toolbarParams;

          if (parseFromUrl) {
            // happens if they are initializing the toolbar using an old snippet
            toolbarParams = state;
            toolbarParams.source = 'url';

            if (toolbarParams && Object.keys(toolbarParams).length > 0) {
              if (state['desiredHash']) {
                // hash that was in the url before the redirect
                location.hash = state['desiredHash'];
              } else if (history) {
                history.replaceState('', document.title, location.pathname + location.search); // completely remove hash
              } else {
                location.hash = ''; // clear hash (but leaves # unfortunately)
              }
            }
          } else {
            // get credentials from localStorage from a previous initialzation
            toolbarParams = JSON.parse(localStorage.getItem('_postHogToolbarParams') || '{}');
            toolbarParams.source = 'localstorage'; // delete "add-action" or other intent from toolbarParams, otherwise we'll have the same intent
            // every time we open the page (e.g. you just visiting your own site an hour later)

            delete toolbarParams.userIntent;
          }

          if (!toolbarParams.apiURL) {
            toolbarParams.apiURL = this.instance.get_config('api_host');
          }

          if (toolbarParams['token'] && this.instance.get_config('token') === toolbarParams['token']) {
            this.loadToolbar(toolbarParams);
            return true;
          } else {
            return false;
          }
        } catch (e) {
          return false;
        }
      }
    }, {
      key: "loadToolbar",
      value: function loadToolbar(params) {
        var _this = this;

        if (window['_postHogToolbarLoaded']) {
          return false;
        } // only load the toolbar once, even if there are multiple instances of PostHogLib
        window['_postHogToolbarLoaded'] = true;
        var host = (params === null || params === void 0 ? void 0 : params['jsURL']) || (params === null || params === void 0 ? void 0 : params['apiURL']) || this.instance.get_config('api_host');
        var toolbarUrl = "".concat(host).concat(host.endsWith('/') ? '' : '/', "static/toolbar.js?_ts=").concat(new Date().getTime());
        var disableToolbarMetrics = !POSTHOG_MANAGED_HOSTS.includes(this.instance.get_config('api_host')) && this.instance.get_config('advanced_disable_toolbar_metrics');

        var toolbarParams = _objectSpread2(_objectSpread2({
          apiURL: host,
          // defaults to api_host from the instance config if nothing else set
          jsURL: host,
          // defaults to api_host from the instance config if nothing else set
          token: this.instance.get_config('token')
        }, params), disableToolbarMetrics ? {
          instrument: false
        } : {});

        toolbarParams.source;
            var paramsToPersist = _objectWithoutProperties(toolbarParams, _excluded); // eslint-disable-line


        window.localStorage.setItem('_postHogToolbarParams', JSON.stringify(paramsToPersist));
        loadScript(toolbarUrl, function () {
          (window['ph_load_toolbar'] || window['ph_load_editor'])(toolbarParams, _this.instance);
        }); // Turbolinks doesn't fire an onload event but does replace the entire page, including the toolbar

        _register_event(window, 'turbolinks:load', function () {
          window['_postHogToolbarLoaded'] = false;

          _this.loadToolbar(toolbarParams);
        });

        return true;
      }
      /** @deprecated Use "loadToolbar" instead. */

    }, {
      key: "_loadEditor",
      value: function _loadEditor(params) {
        return this.loadToolbar(params);
      }
      /** @deprecated Use "maybeLoadToolbar" instead. */

    }, {
      key: "maybeLoadEditor",
      value: function maybeLoadEditor() {
        var location = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location;
        var localStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        var history = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window.history;
        return this.maybeLoadToolbar(location, localStorage, history);
      }
    }]);

    return Toolbar;
  }();

  var RequestQueueScaffold = /*#__PURE__*/function () {
    // flag to continue to recursively poll or not
    // to track empty polls
    // to become interval for reference to clear later
    function RequestQueueScaffold() {
      var pollInterval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;

      _classCallCheck(this, RequestQueueScaffold);

      this.isPolling = true; // flag to continue to recursively poll or not

      this._event_queue = [];
      this._empty_queue_count = 0; // to track empty polls

      this._poller = undefined; // to become interval for reference to clear later

      this._pollInterval = pollInterval;
    }

    _createClass(RequestQueueScaffold, [{
      key: "setPollInterval",
      value: function setPollInterval(interval) {
        this._pollInterval = interval; // Reset interval if running already

        if (this.isPolling) {
          this.poll();
        }
      } // // eslint-disable-next-line no-unused-vars
      // enqueue(_requestData: Record<string, any>): void {
      //     return
      // }

    }, {
      key: "poll",
      value: function poll() {
        return;
      }
    }, {
      key: "unload",
      value: function unload() {
        return;
      }
    }, {
      key: "getTime",
      value: function getTime() {
        return new Date().getTime();
      }
    }]);

    return RequestQueueScaffold;
  }();

  var RequestQueue = /*#__PURE__*/function (_RequestQueueScaffold) {
    _inherits(RequestQueue, _RequestQueueScaffold);

    var _super = _createSuper(RequestQueue);

    function RequestQueue(captureMetrics, handlePollRequest) {
      var _this;

      var pollInterval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;

      _classCallCheck(this, RequestQueue);

      _this = _super.call(this, pollInterval);
      _this.handlePollRequest = handlePollRequest;
      _this.captureMetrics = captureMetrics;
      return _this;
    }

    _createClass(RequestQueue, [{
      key: "enqueue",
      value: function enqueue(url, data, options) {
        this.captureMetrics.incr('batch-enqueue');

        this._event_queue.push({
          url: url,
          data: data,
          options: options
        });

        if (!this.isPolling) {
          this.isPolling = true;
          this.poll();
        }
      }
    }, {
      key: "poll",
      value: function poll() {
        var _this2 = this;

        clearTimeout(this._poller);
        this._poller = setTimeout(function () {
          if (_this2._event_queue.length > 0) {
            var requests = _this2.formatQueue();

            var _loop = function _loop(key) {
              var _requests$key = requests[key],
                  url = _requests$key.url,
                  data = _requests$key.data,
                  options = _requests$key.options;

              _each(data, function (_, dataKey) {
                data[dataKey]['offset'] = Math.abs(data[dataKey]['timestamp'] - _this2.getTime());
                delete data[dataKey]['timestamp'];
              });

              _this2.handlePollRequest(url, data, options);

              _this2.captureMetrics.incr('batch-requests');

              _this2.captureMetrics.incr("batch-requests-".concat(url.slice(url.length - 2)));

              _this2.captureMetrics.incr('batch-handle', data.length);

              _this2.captureMetrics.incr("batch-handle-".concat(url.slice(url.length - 2)), data.length);
            };

            for (var key in requests) {
              _loop(key);
            }

            _this2._event_queue.length = 0; // flush the _event_queue

            _this2._empty_queue_count = 0;
          } else {
            _this2._empty_queue_count++;
          }
          /**
           * _empty_queue_count will increment each time the queue is polled
           *  and it is empty. To avoid empty polling (user went idle, stepped away from comp)
           *  we can turn it off with the isPolling flag.
           *
           * Polling will be re enabled when the next time PostHogLib.capture is called with
           *  an event that should be added to the event queue.
           */


          if (_this2._empty_queue_count > 4) {
            _this2.isPolling = false;
            _this2._empty_queue_count = 0;
          }

          if (_this2.isPolling) {
            _this2.poll();
          }
        }, this._pollInterval);
      }
    }, {
      key: "updateUnloadMetrics",
      value: function updateUnloadMetrics() {
        var requests = this.formatQueue();

        for (var key in requests) {
          var _requests$key2 = requests[key],
              _url = _requests$key2.url,
              _data = _requests$key2.data;
          this.captureMetrics.incr('batch-unload-requests');
          this.captureMetrics.incr("batch-unload-requests-".concat(_url.slice(_url.length - 2)));
          this.captureMetrics.incr('batch-unload', _data.length);
          this.captureMetrics.incr("batch-unload-".concat(_url.slice(_url.length - 2)), _data.length);
        }
      }
    }, {
      key: "unload",
      value: function unload() {
        var _this3 = this;

        clearTimeout(this._poller);
        var requests = this._event_queue.length > 0 ? this.formatQueue() : {};
        this._event_queue.length = 0;
        var requestValues = Object.values(requests); // Always force events to be sent before recordings, as events are more important, and recordings are bigger and thus less likely to arrive

        var sortedRequests = [].concat(_toConsumableArray(requestValues.filter(function (r) {
          return r.url.indexOf('/e') === 0;
        })), _toConsumableArray(requestValues.filter(function (r) {
          return r.url.indexOf('/e') !== 0;
        })));
        sortedRequests.map(function (_ref) {
          var url = _ref.url,
              data = _ref.data,
              options = _ref.options;

          _this3.handlePollRequest(url, data, _objectSpread2(_objectSpread2({}, options), {}, {
            transport: 'sendBeacon'
          }));
        });
      }
    }, {
      key: "formatQueue",
      value: function formatQueue() {
        var requests = {};

        _each(this._event_queue, function (request) {
          var url = request.url,
              data = request.data,
              options = request.options;
          var key = (options ? options._batchKey : null) || url;

          if (requests[key] === undefined) {
            requests[key] = {
              data: [],
              url: url,
              options: options
            };
          } // :TRICKY: Metrics-only code


          if (options && requests[key].options && requests[key].options._metrics && !requests[key].options._metrics['rrweb_full_snapshot']) {
            requests[key].options._metrics['rrweb_full_snapshot'] = options._metrics['rrweb_full_snapshot'];
          }

          requests[key].data.push(data);
        });

        return requests;
      }
    }]);

    return RequestQueue;
  }(RequestQueueScaffold);

  var CaptureMetrics = /*#__PURE__*/function () {
    function CaptureMetrics(enabled) {
      _classCallCheck(this, CaptureMetrics);

      this.enabled = enabled;
      this.metrics = {};
    }

    _createClass(CaptureMetrics, [{
      key: "incr",
      value: function incr(key) {
        var by = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        if (this.enabled) {
          key = "phjs-".concat(key);
          this.metrics[key] = (this.metrics[key] || 0) + by;
        }
      }
    }, {
      key: "decr",
      value: function decr(key) {
        if (this.enabled) {
          key = "phjs-".concat(key);
          this.metrics[key] = (this.metrics[key] || 0) - 1;
        }
      }
    }]);

    return CaptureMetrics;
  }();

  // DEFLATE is a complex format; to read this code, you should probably check the RFC first:


  var u8 = Uint8Array,
      u16 = Uint16Array,
      u32 = Uint32Array; // fixed length extra bits

  var fleb = new u8([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0,
  /* unused */
  0, 0,
  /* impossible */
  0]); // fixed distance extra bits
  // see fleb note

  var fdeb = new u8([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13,
  /* unused */
  0, 0]); // code length index map

  var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]); // get base, reverse index map from extra bits

  var freb = function freb(eb, start) {
    var b = new u16(31);

    for (var i = 0; i < 31; ++i) {
      b[i] = start += 1 << eb[i - 1];
    } // numbers here are at max 18 bits


    var r = new u32(b[30]);

    for (var i = 1; i < 30; ++i) {
      for (var j = b[i]; j < b[i + 1]; ++j) {
        r[j] = j - b[i] << 5 | i;
      }
    }

    return [b, r];
  };

  var _a = freb(fleb, 2),
      fl = _a[0],
      revfl = _a[1]; // we can ignore the fact that the other numbers are wrong; they never happen anyway


  fl[28] = 258, revfl[258] = 28;

  var _b = freb(fdeb, 0),
      revfd = _b[1]; // map of value to reverse (assuming 16 bits)


  var rev = new u16(32768);

  for (var i = 0; i < 32768; ++i) {
    // reverse table algorithm from SO
    var x = (i & 0xAAAA) >>> 1 | (i & 0x5555) << 1;
    x = (x & 0xCCCC) >>> 2 | (x & 0x3333) << 2;
    x = (x & 0xF0F0) >>> 4 | (x & 0x0F0F) << 4;
    rev[i] = ((x & 0xFF00) >>> 8 | (x & 0x00FF) << 8) >>> 1;
  } // create huffman tree from u8 "map": index -> code length for code index
  // mb (max bits) must be at most 15
  // TODO: optimize/split up?


  var hMap = function hMap(cd, mb, r) {
    var s = cd.length; // index

    var i = 0; // u16 "map": index -> # of codes with bit length = index

    var l = new u16(mb); // length of cd must be 288 (total # of codes)

    for (; i < s; ++i) {
      ++l[cd[i] - 1];
    } // u16 "map": index -> minimum code for bit length = index


    var le = new u16(mb);

    for (i = 0; i < mb; ++i) {
      le[i] = le[i - 1] + l[i - 1] << 1;
    }

    var co;

    if (r) {
      // u16 "map": index -> number of actual bits, symbol for code
      co = new u16(1 << mb); // bits to remove for reverser

      var rvb = 15 - mb;

      for (i = 0; i < s; ++i) {
        // ignore 0 lengths
        if (cd[i]) {
          // num encoding both symbol and bits read
          var sv = i << 4 | cd[i]; // free bits

          var r_1 = mb - cd[i]; // start value

          var v = le[cd[i] - 1]++ << r_1; // m is end value

          for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
            // every 16 bit value starting with the code yields the same result
            co[rev[v] >>> rvb] = sv;
          }
        }
      }
    } else {
      co = new u16(s);

      for (i = 0; i < s; ++i) {
        co[i] = rev[le[cd[i] - 1]++] >>> 15 - cd[i];
      }
    }

    return co;
  }; // fixed length tree


  var flt = new u8(288);

  for (var i = 0; i < 144; ++i) {
    flt[i] = 8;
  }

  for (var i = 144; i < 256; ++i) {
    flt[i] = 9;
  }

  for (var i = 256; i < 280; ++i) {
    flt[i] = 7;
  }

  for (var i = 280; i < 288; ++i) {
    flt[i] = 8;
  } // fixed distance tree


  var fdt = new u8(32);

  for (var i = 0; i < 32; ++i) {
    fdt[i] = 5;
  } // fixed length map


  var flm = /*#__PURE__*/hMap(flt, 9, 0);
   // fixed distance map

  var fdm = /*#__PURE__*/hMap(fdt, 5, 0);
   // find max of array


  var shft = function shft(p) {
    return (p / 8 >> 0) + (p & 7 && 1);
  }; // typed array slice - allows garbage collector to free original reference,
  // while being more compatible than .slice


  var slc = function slc(v, s, e) {
    if (s == null || s < 0) s = 0;
    if (e == null || e > v.length) e = v.length; // can't use .constructor in case user-supplied

    var n = new (v instanceof u16 ? u16 : v instanceof u32 ? u32 : u8)(e - s);
    n.set(v.subarray(s, e));
    return n;
  }; // expands raw DEFLATE data


  var wbits = function wbits(d, p, v) {
    v <<= p & 7;
    var o = p / 8 >> 0;
    d[o] |= v;
    d[o + 1] |= v >>> 8;
  }; // starting at p, write the minimum number of bits (>8) that can hold v to d


  var wbits16 = function wbits16(d, p, v) {
    v <<= p & 7;
    var o = p / 8 >> 0;
    d[o] |= v;
    d[o + 1] |= v >>> 8;
    d[o + 2] |= v >>> 16;
  }; // creates code lengths from a frequency table


  var hTree = function hTree(d, mb) {
    // Need extra info to make a tree
    var t = [];

    for (var i = 0; i < d.length; ++i) {
      if (d[i]) t.push({
        s: i,
        f: d[i]
      });
    }

    var s = t.length;
    var t2 = t.slice();
    if (!s) return [new u8(0), 0];

    if (s == 1) {
      var v = new u8(t[0].s + 1);
      v[t[0].s] = 1;
      return [v, 1];
    }

    t.sort(function (a, b) {
      return a.f - b.f;
    }); // after i2 reaches last ind, will be stopped
    // freq must be greater than largest possible number of symbols

    t.push({
      s: -1,
      f: 25001
    });
    var l = t[0],
        r = t[1],
        i0 = 0,
        i1 = 1,
        i2 = 2;
    t[0] = {
      s: -1,
      f: l.f + r.f,
      l: l,
      r: r
    }; // efficient algorithm from UZIP.js
    // i0 is lookbehind, i2 is lookahead - after processing two low-freq
    // symbols that combined have high freq, will start processing i2 (high-freq,
    // non-composite) symbols instead
    // see https://reddit.com/r/photopea/comments/ikekht/uzipjs_questions/

    while (i1 != s - 1) {
      l = t[t[i0].f < t[i2].f ? i0++ : i2++];
      r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
      t[i1++] = {
        s: -1,
        f: l.f + r.f,
        l: l,
        r: r
      };
    }

    var maxSym = t2[0].s;

    for (var i = 1; i < s; ++i) {
      if (t2[i].s > maxSym) maxSym = t2[i].s;
    } // code lengths


    var tr = new u16(maxSym + 1); // max bits in tree

    var mbt = ln(t[i1 - 1], tr, 0);

    if (mbt > mb) {
      // more algorithms from UZIP.js
      // TODO: find out how this code works (debt)
      //  ind    debt
      var i = 0,
          dt = 0; //    left            cost

      var lft = mbt - mb,
          cst = 1 << lft;
      t2.sort(function (a, b) {
        return tr[b.s] - tr[a.s] || a.f - b.f;
      });

      for (; i < s; ++i) {
        var i2_1 = t2[i].s;

        if (tr[i2_1] > mb) {
          dt += cst - (1 << mbt - tr[i2_1]);
          tr[i2_1] = mb;
        } else break;
      }

      dt >>>= lft;

      while (dt > 0) {
        var i2_2 = t2[i].s;
        if (tr[i2_2] < mb) dt -= 1 << mb - tr[i2_2]++ - 1;else ++i;
      }

      for (; i >= 0 && dt; --i) {
        var i2_3 = t2[i].s;

        if (tr[i2_3] == mb) {
          --tr[i2_3];
          ++dt;
        }
      }

      mbt = mb;
    }

    return [new u8(tr), mbt];
  }; // get the max length and assign length codes


  var ln = function ln(n, l, d) {
    return n.s == -1 ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1)) : l[n.s] = d;
  }; // length codes generation


  var lc = function lc(c) {
    var s = c.length; // Note that the semicolon was intentional

    while (s && !c[--s]) {
    }

    var cl = new u16(++s); //  ind      num         streak

    var cli = 0,
        cln = c[0],
        cls = 1;

    var w = function w(v) {
      cl[cli++] = v;
    };

    for (var i = 1; i <= s; ++i) {
      if (c[i] == cln && i != s) ++cls;else {
        if (!cln && cls > 2) {
          for (; cls > 138; cls -= 138) {
            w(32754);
          }

          if (cls > 2) {
            w(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
            cls = 0;
          }
        } else if (cls > 3) {
          w(cln), --cls;

          for (; cls > 6; cls -= 6) {
            w(8304);
          }

          if (cls > 2) w(cls - 3 << 5 | 8208), cls = 0;
        }

        while (cls--) {
          w(cln);
        }

        cls = 1;
        cln = c[i];
      }
    }

    return [cl.subarray(0, cli), s];
  }; // calculate the length of output from tree, code lengths


  var clen = function clen(cf, cl) {
    var l = 0;

    for (var i = 0; i < cl.length; ++i) {
      l += cf[i] * cl[i];
    }

    return l;
  }; // writes a fixed block
  // returns the new bit pos


  var wfblk = function wfblk(out, pos, dat) {
    // no need to write 00 as type: TypedArray defaults to 0
    var s = dat.length;
    var o = shft(pos + 2);
    out[o] = s & 255;
    out[o + 1] = s >>> 8;
    out[o + 2] = out[o] ^ 255;
    out[o + 3] = out[o + 1] ^ 255;

    for (var i = 0; i < s; ++i) {
      out[o + i + 4] = dat[i];
    }

    return (o + 4 + s) * 8;
  }; // writes a block


  var wblk = function wblk(dat, out, _final2, syms, lf, df, eb, li, bs, bl, p) {
    wbits(out, p++, _final2);
    ++lf[256];

    var _a = hTree(lf, 15),
        dlt = _a[0],
        mlb = _a[1];

    var _b = hTree(df, 15),
        ddt = _b[0],
        mdb = _b[1];

    var _c = lc(dlt),
        lclt = _c[0],
        nlc = _c[1];

    var _d = lc(ddt),
        lcdt = _d[0],
        ndc = _d[1];

    var lcfreq = new u16(19);

    for (var i = 0; i < lclt.length; ++i) {
      lcfreq[lclt[i] & 31]++;
    }

    for (var i = 0; i < lcdt.length; ++i) {
      lcfreq[lcdt[i] & 31]++;
    }

    var _e = hTree(lcfreq, 7),
        lct = _e[0],
        mlcb = _e[1];

    var nlcc = 19;

    for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc) {
    }

    var flen = bl + 5 << 3;
    var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
    var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + (2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18]);
    if (flen <= ftlen && flen <= dtlen) return wfblk(out, p, dat.subarray(bs, bs + bl));
    var lm, ll, dm, dl;
    wbits(out, p, 1 + (dtlen < ftlen)), p += 2;

    if (dtlen < ftlen) {
      lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
      var llm = hMap(lct, mlcb, 0);
      wbits(out, p, nlc - 257);
      wbits(out, p + 5, ndc - 1);
      wbits(out, p + 10, nlcc - 4);
      p += 14;

      for (var i = 0; i < nlcc; ++i) {
        wbits(out, p + 3 * i, lct[clim[i]]);
      }

      p += 3 * nlcc;
      var lcts = [lclt, lcdt];

      for (var it = 0; it < 2; ++it) {
        var clct = lcts[it];

        for (var i = 0; i < clct.length; ++i) {
          var len = clct[i] & 31;
          wbits(out, p, llm[len]), p += lct[len];
          if (len > 15) wbits(out, p, clct[i] >>> 5 & 127), p += clct[i] >>> 12;
        }
      }
    } else {
      lm = flm, ll = flt, dm = fdm, dl = fdt;
    }

    for (var i = 0; i < li; ++i) {
      if (syms[i] > 255) {
        var len = syms[i] >>> 18 & 31;
        wbits16(out, p, lm[len + 257]), p += ll[len + 257];
        if (len > 7) wbits(out, p, syms[i] >>> 23 & 31), p += fleb[len];
        var dst = syms[i] & 31;
        wbits16(out, p, dm[dst]), p += dl[dst];
        if (dst > 3) wbits16(out, p, syms[i] >>> 5 & 8191), p += fdeb[dst];
      } else {
        wbits16(out, p, lm[syms[i]]), p += ll[syms[i]];
      }
    }

    wbits16(out, p, lm[256]);
    return p + ll[256];
  }; // deflate options (nice << 13) | chain


  var deo = /*#__PURE__*/new u32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]); // empty

  var et = /*#__PURE__*/new u8(0); // compresses data into a raw DEFLATE buffer

  var dflt = function dflt(dat, lvl, plvl, pre, post, lst) {
    var s = dat.length;
    var o = new u8(pre + s + 5 * (1 + Math.floor(s / 7000)) + post); // writing to this writes to the output buffer

    var w = o.subarray(pre, o.length - post);
    var pos = 0;

    if (!lvl || s < 8) {
      for (var i = 0; i <= s; i += 65535) {
        // end
        var e = i + 65535;

        if (e < s) {
          // write full block
          pos = wfblk(w, pos, dat.subarray(i, e));
        } else {
          // write final block
          w[i] = lst;
          pos = wfblk(w, pos, dat.subarray(i, s));
        }
      }
    } else {
      var opt = deo[lvl - 1];
      var n = opt >>> 13,
          c = opt & 8191;
      var msk_1 = (1 << plvl) - 1; //    prev 2-byte val map    curr 2-byte val map

      var prev = new u16(32768),
          head = new u16(msk_1 + 1);
      var bs1_1 = Math.ceil(plvl / 3),
          bs2_1 = 2 * bs1_1;

      var hsh = function hsh(i) {
        return (dat[i] ^ dat[i + 1] << bs1_1 ^ dat[i + 2] << bs2_1) & msk_1;
      }; // 24576 is an arbitrary number of maximum symbols per block
      // 424 buffer for last block


      var syms = new u32(25000); // length/literal freq   distance freq

      var lf = new u16(288),
          df = new u16(32); //  l/lcnt  exbits  index  l/lind  waitdx  bitpos

      var lc_1 = 0,
          eb = 0,
          i = 0,
          li = 0,
          wi = 0,
          bs = 0;

      for (; i < s; ++i) {
        // hash value
        var hv = hsh(i); // index mod 32768

        var imod = i & 32767; // previous index with this value

        var pimod = head[hv];
        prev[imod] = pimod;
        head[hv] = imod; // We always should modify head and prev, but only add symbols if
        // this data is not yet processed ("wait" for wait index)

        if (wi <= i) {
          // bytes remaining
          var rem = s - i;

          if ((lc_1 > 7000 || li > 24576) && rem > 423) {
            pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
            li = lc_1 = eb = 0, bs = i;

            for (var j = 0; j < 286; ++j) {
              lf[j] = 0;
            }

            for (var j = 0; j < 30; ++j) {
              df[j] = 0;
            }
          } //  len    dist   chain


          var l = 2,
              d = 0,
              ch_1 = c,
              dif = imod - pimod & 32767;

          if (rem > 2 && hv == hsh(i - dif)) {
            var maxn = Math.min(n, rem) - 1;
            var maxd = Math.min(32767, i); // max possible length
            // not capped at dif because decompressors implement "rolling" index population

            var ml = Math.min(258, rem);

            while (dif <= maxd && --ch_1 && imod != pimod) {
              if (dat[i + l] == dat[i + l - dif]) {
                var nl = 0;

                for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl) {
                }

                if (nl > l) {
                  l = nl, d = dif; // break out early when we reach "nice" (we are satisfied enough)

                  if (nl > maxn) break; // now, find the rarest 2-byte sequence within this
                  // length of literals and search for that instead.
                  // Much faster than just using the start

                  var mmd = Math.min(dif, nl - 2);
                  var md = 0;

                  for (var j = 0; j < mmd; ++j) {
                    var ti = i - dif + j + 32768 & 32767;
                    var pti = prev[ti];
                    var cd = ti - pti + 32768 & 32767;
                    if (cd > md) md = cd, pimod = ti;
                  }
                }
              } // check the previous match


              imod = pimod, pimod = prev[imod];
              dif += imod - pimod + 32768 & 32767;
            }
          } // d will be nonzero only when a match was found


          if (d) {
            // store both dist and len data in one Uint32
            // Make sure this is recognized as a len/dist with 28th bit (2^28)
            syms[li++] = 268435456 | revfl[l] << 18 | revfd[d];
            var lin = revfl[l] & 31,
                din = revfd[d] & 31;
            eb += fleb[lin] + fdeb[din];
            ++lf[257 + lin];
            ++df[din];
            wi = i + l;
            ++lc_1;
          } else {
            syms[li++] = dat[i];
            ++lf[dat[i]];
          }
        }
      }

      pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos); // this is the easiest way to avoid needing to maintain state

      if (!lst) pos = wfblk(w, pos, et);
    }

    return slc(o, 0, pre + shft(pos) + post);
  }; // CRC32 table


  var crct = /*#__PURE__*/function () {
    var t = new u32(256);

    for (var i = 0; i < 256; ++i) {
      var c = i,
          k = 9;

      while (--k) {
        c = (c & 1 && 0xEDB88320) ^ c >>> 1;
      }

      t[i] = c;
    }

    return t;
  }(); // CRC32


  var crc = function crc() {
    var c = 0xFFFFFFFF;
    return {
      p: function p(d) {
        // closures have awful performance
        var cr = c;

        for (var i = 0; i < d.length; ++i) {
          cr = crct[cr & 255 ^ d[i]] ^ cr >>> 8;
        }

        c = cr;
      },
      d: function d() {
        return c ^ 0xFFFFFFFF;
      }
    };
  }; // Alder32

  var dopt = function dopt(dat, opt, pre, post, st) {
    return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 12 + opt.mem, pre, post, !st);
  }; // Walmart object spread


  var wbytes = function wbytes(d, b, v) {
    for (; v; ++b) {
      d[b] = v, v >>>= 8;
    }
  }; // gzip header


  var gzh = function gzh(c, o) {
    var fn = o.filename;
    c[0] = 31, c[1] = 139, c[2] = 8, c[8] = o.level < 2 ? 4 : o.level == 9 ? 2 : 0, c[9] = 3; // assume Unix

    if (o.mtime != 0) wbytes(c, 4, Math.floor(new Date(o.mtime || Date.now()) / 1000));

    if (fn) {
      c[3] = 8;

      for (var i = 0; i <= fn.length; ++i) {
        c[i + 10] = fn.charCodeAt(i);
      }
    }
  }; // gzip footer: -8 to -4 = CRC, -4 to -0 is length


  var gzhl = function gzhl(o) {
    return 10 + (o.filename && o.filename.length + 1 || 0);
  }; // zlib header
  /**
   * Compresses data with GZIP
   * @param data The data to compress
   * @param opts The compression options
   * @returns The gzipped version of the data
   */

  function gzipSync(data, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var c = crc(),
        l = data.length;
    c.p(data);
    var d = dopt(data, opts, gzhl(opts), 8),
        s = d.length;
    return gzh(d, opts), wbytes(d, s - 8, c.d()), wbytes(d, s - 4, l), d;
  }
  /**
   * Converts a string into a Uint8Array for use with compression/decompression methods
   * @param str The string to encode
   * @param latin1 Whether or not to interpret the data as Latin-1. This should
   *               not need to be true unless decoding a binary string.
   * @returns The string encoded in UTF-8/Latin-1 binary
   */


  function strToU8(str, latin1) {
    var l = str.length;
    if (!latin1 && typeof TextEncoder != 'undefined') return new TextEncoder().encode(str);
    var ar = new u8(str.length + (str.length >>> 1));
    var ai = 0;

    var w = function w(v) {
      ar[ai++] = v;
    };

    for (var i = 0; i < l; ++i) {
      if (ai + 5 > ar.length) {
        var n = new u8(ai + 8 + (l - i << 1));
        n.set(ar);
        ar = n;
      }

      var c = str.charCodeAt(i);
      if (c < 128 || latin1) w(c);else if (c < 2048) w(192 | c >>> 6), w(128 | c & 63);else if (c > 55295 && c < 57344) c = 65536 + (c & 1023 << 10) | str.charCodeAt(++i) & 1023, w(240 | c >>> 18), w(128 | c >>> 12 & 63), w(128 | c >>> 6 & 63), w(128 | c & 63);else w(224 | c >>> 12), w(128 | c >>> 6 & 63), w(128 | c & 63);
    }

    return slc(ar, 0, ai);
  }

  var Compression;

  (function (Compression) {
    Compression["GZipJS"] = "gzip-js";
    Compression["LZ64"] = "lz64";
    Compression["Base64"] = "base64";
  })(Compression || (Compression = {}));

  function decideCompression(compressionSupport) {
    if (compressionSupport[Compression.GZipJS]) {
      return Compression.GZipJS;
    } else if (compressionSupport[Compression.LZ64]) {
      return Compression.LZ64;
    } else {
      return Compression.Base64;
    }
  }
  function compressData(compression, jsonData, options) {
    if (compression === Compression.LZ64) {
      return [{
        data: LZString.compressToBase64(jsonData),
        compression: Compression.LZ64
      }, options];
    } else if (compression === Compression.GZipJS) {
      // :TRICKY: This returns an UInt8Array. We don't encode this to a string - returning a blob will do this for us.
      return [gzipSync(strToU8(jsonData), {
        mtime: 0
      }), _objectSpread2(_objectSpread2({}, options), {}, {
        blob: true,
        urlQueryArgs: {
          compression: Compression.GZipJS
        }
      })];
    } else {
      return [{
        data: _base64Encode(jsonData)
      }, options];
    }
  }

  var addParamsToURL = function addParamsToURL(url, urlQueryArgs, parameterOptions) {
    var args = urlQueryArgs || {};
    args['ip'] = parameterOptions['ip'] ? 1 : 0;
    args['_'] = new Date().getTime().toString();
    args['ver'] = Config.LIB_VERSION;
    var halves = url.split('?');

    if (halves.length > 1) {
      var params = halves[1].split('&');

      var _iterator = _createForOfIteratorHelper(params),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p = _step.value;
          var key = p.split('=')[0];

          if (args[key]) {
            delete args[key];
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    var argSeparator = url.indexOf('?') > -1 ? '&' : '?';
    return url + argSeparator + _HTTPBuildQuery(args);
  };
  var encodePostData = function encodePostData(data, options) {
    if (options.blob && data.buffer) {
      return new Blob([data.buffer], {
        type: 'text/plain'
      });
    }

    if (options.sendBeacon || options.blob) {
      var body = encodePostData(data, {
        method: 'POST'
      });
      return new Blob([body], {
        type: 'application/x-www-form-urlencoded'
      });
    }

    if (options.method !== 'POST') {
      return null;
    }

    var body_data;

    var isUint8Array = function isUint8Array(d) {
      return Object.prototype.toString.call(d) === '[object Uint8Array]';
    };

    if (Array.isArray(data) || isUint8Array(data)) {
      // TODO: eh? passing an Array here?
      body_data = 'data=' + encodeURIComponent(data);
    } else {
      body_data = 'data=' + encodeURIComponent(data.data);
    }

    if ('compression' in data && data.compression) {
      body_data += '&compression=' + data.compression;
    }

    return body_data;
  };
  var xhr = function xhr(_ref) {
    var url = _ref.url,
        data = _ref.data,
        headers = _ref.headers,
        options = _ref.options,
        captureMetrics = _ref.captureMetrics,
        callback = _ref.callback,
        retriesPerformedSoFar = _ref.retriesPerformedSoFar,
        retryQueue = _ref.retryQueue,
        onXHRError = _ref.onXHRError;
    var req = new XMLHttpRequest();
    req.open(options.method || 'GET', url, true);
    var body = encodePostData(data, options);
    captureMetrics.incr('_send_request');
    captureMetrics.incr('_send_request_inflight');

    _each(headers, function (headerValue, headerName) {
      req.setRequestHeader(headerName, headerValue);
    });

    if (options.method === 'POST' && !options.blob) {
      req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    } // send the ph_optout cookie
    // withCredentials cannot be modified until after calling .open on Android and Mobile Safari


    req.withCredentials = true;

    req.onreadystatechange = function () {
      if (req.readyState === 4) {
        captureMetrics.incr("xhr-response");
        captureMetrics.incr("xhr-response-".concat(req.status));
        captureMetrics.decr('_send_request_inflight'); // XMLHttpRequest.DONE == 4, except in safari 4

        if (req.status === 200) {
          if (callback) {
            var response;

            try {
              response = JSON.parse(req.responseText);
            } catch (e) {
              logger.error(e);
              return;
            }

            callback(response);
          }
        } else {
          if (typeof onXHRError === 'function') {
            onXHRError(req);
          } // don't retry certain errors


          if ([401, 403, 404, 500].indexOf(req.status) < 0) {
            retryQueue.enqueue({
              url: url,
              data: data,
              options: options,
              headers: headers,
              retriesPerformedSoFar: (retriesPerformedSoFar || 0) + 1,
              callback: callback
            });
          }

          if (callback) {
            callback({
              status: 0
            });
          }
        }
      }
    };

    req.send(body);
  };

  var RetryQueue = /*#__PURE__*/function (_RequestQueueScaffold) {
    _inherits(RetryQueue, _RequestQueueScaffold);

    var _super = _createSuper(RetryQueue);

    function RetryQueue(captureMetrics, onXHRError) {
      var _this;

      _classCallCheck(this, RetryQueue);

      _this = _super.call(this);
      _this.captureMetrics = captureMetrics;
      _this.isPolling = false;
      _this.queue = [];
      _this.areWeOnline = true;
      _this.onXHRError = onXHRError;

      if ('onLine' in window.navigator) {
        _this.areWeOnline = window.navigator.onLine;
        window.addEventListener('online', function () {
          _this._handleWeAreNowOnline();
        });
        window.addEventListener('offline', function () {
          _this.areWeOnline = false;
        });
      }

      return _this;
    }

    _createClass(RetryQueue, [{
      key: "enqueue",
      value: function enqueue(requestData) {
        var retriesPerformedSoFar = requestData.retriesPerformedSoFar || 0;

        if (retriesPerformedSoFar >= 10) {
          return;
        }

        var msToNextRetry = 3000 * Math.pow(2, retriesPerformedSoFar);
        var retryAt = new Date(Date.now() + msToNextRetry);
        console.warn("Enqueued failed request for retry in ".concat(msToNextRetry));
        this.queue.push({
          retryAt: retryAt,
          requestData: requestData
        });

        if (!this.isPolling) {
          this.isPolling = true;
          this.poll();
        }
      }
    }, {
      key: "poll",
      value: function poll() {
        var _this2 = this;

        this._poller && clearTimeout(this._poller);
        this._poller = setTimeout(function () {
          if (_this2.areWeOnline && _this2.queue.length > 0) {
            _this2.flush();
          }

          _this2.poll();
        }, this._pollInterval);
      }
    }, {
      key: "flush",
      value: function flush() {
        // using Date.now to make tests easier as recommended here https://codewithhugo.com/mocking-the-current-date-in-jest-tests/
        var now = new Date(Date.now());
        var toFlush = this.queue.filter(function (_ref) {
          var retryAt = _ref.retryAt;
          return retryAt < now;
        });

        if (toFlush.length > 0) {
          this.queue = this.queue.filter(function (_ref2) {
            var retryAt = _ref2.retryAt;
            return retryAt >= now;
          });

          var _iterator = _createForOfIteratorHelper(toFlush),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var requestData = _step.value.requestData;

              this._executeXhrRequest(requestData);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }
    }, {
      key: "unload",
      value: function unload() {
        if (this._poller) {
          clearTimeout(this._poller);
          this._poller = undefined;
        }

        var _iterator2 = _createForOfIteratorHelper(this.queue),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var requestData = _step2.value.requestData;
            var url = requestData.url,
                data = requestData.data,
                options = requestData.options;

            try {
              window.navigator.sendBeacon(url, encodePostData(data, _objectSpread2(_objectSpread2({}, options), {}, {
                sendBeacon: true
              })));
            } catch (e) {
              // Note sendBeacon automatically retries, and after the first retry it will loose reference to contextual `this`.
              // This means in some cases `this.getConfig` will be undefined.
              if (Config.DEBUG) {
                console.error(e);
              }
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        this.queue = [];
      }
    }, {
      key: "_executeXhrRequest",
      value: function _executeXhrRequest(_ref3) {
        var url = _ref3.url,
            data = _ref3.data,
            options = _ref3.options,
            headers = _ref3.headers,
            callback = _ref3.callback,
            retriesPerformedSoFar = _ref3.retriesPerformedSoFar;
        xhr({
          url: url,
          data: data || {},
          options: options || {},
          headers: headers || {},
          retriesPerformedSoFar: retriesPerformedSoFar || 0,
          callback: callback,
          captureMetrics: this.captureMetrics,
          retryQueue: this,
          onXHRError: this.onXHRError
        });
      }
    }, {
      key: "_handleWeAreNowOnline",
      value: function _handleWeAreNowOnline() {
        this.areWeOnline = true;
        this.flush();
      }
    }]);

    return RetryQueue;
  }(RequestQueueScaffold);

  var SESSION_CHANGE_THRESHOLD = 30 * 60 * 1000; // 30 mins

  var SESSION_LENGTH_LIMIT = 24 * 3600 * 1000; // 24 hours

  var SessionIdManager = /*#__PURE__*/function () {
    function SessionIdManager(config, persistence) {
      _classCallCheck(this, SessionIdManager);

      this.persistence = persistence;
      this._windowId = undefined;
      this._sessionId = undefined;
      this._sessionStartTimestamp = null;
      this._sessionActivityTimestamp = null;
      var persistenceName = config['persistence_name'] || config['token'];
      this.window_id_storage_key = 'ph_' + persistenceName + '_window_id';
      this.primary_window_exists_storage_key = 'ph_' + persistenceName + '_primary_window_exists'; // primary_window_exists is set when the DOM has been loaded and is cleared on unload
      // if it exists here it means there was no unload which suggests this window is opened as a tab duplication, window.open, etc.

      if (!this.persistence.disabled && sessionStore.is_supported()) {
        var lastWindowId = sessionStore.parse(this.window_id_storage_key);
        var primaryWindowExists = sessionStore.parse(this.primary_window_exists_storage_key);

        if (lastWindowId && !primaryWindowExists) {
          // Persist window from previous storage state
          this._windowId = lastWindowId;
        } else {
          // Wipe any reference to previous window id
          sessionStore.remove(this.window_id_storage_key);
        } // Flag this session as having a primary window


        sessionStore.set(this.primary_window_exists_storage_key, true);
      }

      this._listenToReloadWindow();
    } // Note: this tries to store the windowId in sessionStorage. SessionStorage is unique to the current window/tab,
    // and persists page loads/reloads. So it's uniquely suited for storing the windowId. This function also respects
    // when persistence is disabled (by user config) and when sessionStorage is not supported (it *should* be supported on all browsers),
    // and in that case, it falls back to memory (which sadly, won't persist page loads)


    _createClass(SessionIdManager, [{
      key: "_setWindowId",
      value: function _setWindowId(windowId) {
        if (windowId !== this._windowId) {
          this._windowId = windowId;

          if (!this.persistence.disabled && sessionStore.is_supported()) {
            sessionStore.set(this.window_id_storage_key, windowId);
          }
        }
      }
    }, {
      key: "_getWindowId",
      value: function _getWindowId() {
        if (this._windowId) {
          return this._windowId;
        }

        if (!this.persistence.disabled && sessionStore.is_supported()) {
          return sessionStore.parse(this.window_id_storage_key);
        } // New window id will be generated


        return null;
      } // Note: 'this.persistence.register' can be disabled in the config.
      // In that case, this works by storing sessionId and the timestamp in memory.

    }, {
      key: "_setSessionId",
      value: function _setSessionId(sessionId, sessionActivityTimestamp, sessionStartTimestamp) {
        if (sessionId !== this._sessionId || sessionActivityTimestamp !== this._sessionActivityTimestamp || sessionStartTimestamp !== this._sessionStartTimestamp) {
          this._sessionStartTimestamp = sessionStartTimestamp;
          this._sessionActivityTimestamp = sessionActivityTimestamp;
          this._sessionId = sessionId;
          this.persistence.register(_defineProperty({}, SESSION_ID, [sessionActivityTimestamp, sessionId, sessionStartTimestamp]));
        }
      }
    }, {
      key: "_getSessionId",
      value: function _getSessionId() {
        if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp) {
          return [this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp];
        }

        var sessionId = this.persistence.props[SESSION_ID];

        if (Array.isArray(sessionId) && sessionId.length === 2) {
          // Storage does not yet have a session start time. Add the last activity timestamp as the start time
          sessionId.push(sessionId[0]);
        }

        return sessionId || [0, null, 0];
      } // Resets the session id by setting it to null. On the subsequent call to checkAndGetSessionAndWindowId,
      // new ids will be generated.

    }, {
      key: "resetSessionId",
      value: function resetSessionId() {
        this._setSessionId(null, null, null);
      }
      /*
       * Listens to window unloads and removes the primaryWindowExists key from sessionStorage.
       * Reloaded or fresh tabs created after a DOM unloads (reloading the same tab) WILL NOT have this primaryWindowExists flag in session storage.
       * Cloned sessions (new tab, tab duplication, window.open(), ...) WILL have this primaryWindowExists flag in their copied session storage.
       * We conditionally check the primaryWindowExists value in the constructor to decide if the window id in the last session storage should be carried over.
       */

    }, {
      key: "_listenToReloadWindow",
      value: function _listenToReloadWindow() {
        var _this = this;

        window.addEventListener('beforeunload', function () {
          if (!_this.persistence.disabled && sessionStore.is_supported()) {
            sessionStore.remove(_this.primary_window_exists_storage_key);
          }
        });
      }
      /*
       * This function returns the current sessionId and windowId. It should be used to
       * access these values over directly calling `._sessionId` or `._windowId`. In addition
       * to returning the sessionId and windowId, this function also manages cycling the
       * sessionId and windowId when appropriate by doing the following:
       *
       * 1. If the sessionId or windowId is not set, it will generate a new one and store it.
       * 2. If the readOnly param is set to false, it will:
       *    a. Check if it has been > SESSION_CHANGE_THRESHOLD since the last call with this flag set.
       *       If so, it will generate a new sessionId and store it.
       *    b. Update the timestamp stored with the sessionId to ensure the current session is extended
       *       for the appropriate amount of time.
       *
       * @param {boolean} readOnly (optional) Defaults to False. Should be set to True when the call to the function should not extend or cycle the session (e.g. being called for non-user generated events)
       * @param {Number} timestamp (optional) Defaults to the current time. The timestamp to be stored with the sessionId (used when determining if a new sessionId should be generated)
       */

    }, {
      key: "checkAndGetSessionAndWindowId",
      value: function checkAndGetSessionAndWindowId() {
        var readOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        var _timestamp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        var timestamp = _timestamp || new Date().getTime(); // eslint-disable-next-line prefer-const


        var _this$_getSessionId = this._getSessionId(),
            _this$_getSessionId2 = _slicedToArray(_this$_getSessionId, 3),
            lastTimestamp = _this$_getSessionId2[0],
            sessionId = _this$_getSessionId2[1],
            startTimestamp = _this$_getSessionId2[2];

        var windowId = this._getWindowId();

        var sessionPastMaximumLength = startTimestamp && startTimestamp > 0 && Math.abs(timestamp - startTimestamp) > SESSION_LENGTH_LIMIT;

        if (!sessionId || !readOnly && Math.abs(timestamp - lastTimestamp) > SESSION_CHANGE_THRESHOLD || sessionPastMaximumLength) {
          sessionId = _UUID();
          windowId = _UUID();
          startTimestamp = timestamp;
        } else if (!windowId) {
          windowId = _UUID();
        }

        var newTimestamp = lastTimestamp === 0 || !readOnly || sessionPastMaximumLength ? timestamp : lastTimestamp;
        var sessionStartTimestamp = startTimestamp === 0 ? new Date().getTime() : startTimestamp;

        this._setWindowId(windowId);

        this._setSessionId(sessionId, newTimestamp, sessionStartTimestamp);

        return {
          sessionId: sessionId,
          windowId: windowId
        };
      }
    }]);

    return SessionIdManager;
  }();

  function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
  }

  function optimisePerformanceData(performanceEntries) {
    performanceEntries.forEach(function (performanceEntry, index) {
      for (var performanceEntryItemKey_ in performanceEntry) {
        var performanceEntryItemKey = performanceEntryItemKey_;

        if (isFloat(performanceEntry[performanceEntryItemKey]) && performanceEntry[performanceEntryItemKey].toString().match(/^\d+\.\d{4,}$/)) {
          performanceEntries[index][performanceEntryItemKey] = Number(performanceEntry[performanceEntryItemKey].toFixed(3));
        }

        if (performanceEntryItemKey === 'serverTiming' && performanceEntry[performanceEntryItemKey].length === 0) {
          delete performanceEntries[index][performanceEntryItemKey];
        }

        if (performanceEntryItemKey === 'entryType' && performanceEntry[performanceEntryItemKey] === 'resource') {
          // Writeable<> doesn't support inherited attributes from PerformanceEntry on PerformanceResourceTiming
          delete performanceEntries[index][performanceEntryItemKey];
        }

        if (performanceEntryItemKey === 'nextHopProtocol') {
          // Writeable<> doesn't support inherited attributes from PerformanceEntry on PerformanceResourceTiming
          delete performanceEntries[index][performanceEntryItemKey];
        }

        if (performanceEntry[performanceEntryItemKey] === 0) {
          delete performanceEntries[index][performanceEntryItemKey];
        }
      }
    });
    return deduplicateKeys(performanceEntries);
  }
  function getPerformanceEntriesByType(type) {
    // wide support but not available pre IE 10
    try {
      // stringifying and then parsing made data collection more reliable
      var entriesOfType = JSON.parse(JSON.stringify(win.performance.getEntriesByType(type)));
      return optimisePerformanceData(entriesOfType);
    } catch (ex) {
      if (Config.DEBUG) {
        console.warn('not able to capture performance data (' + type + ') - ' + ex);
      }

      return [];
    }
  }
  /**
   * https://developer.mozilla.org/en-US/docs/Web/API/Performance/getEntriesByType
   *
   *  The arrays in the prformance data are populated by getEntriesByType
   *  They contain PerformanceEntry objects for the given performance type.
   *  This means each object in the array shares a set of keys
   *
   * @param performanceEntries
   * @returns {(string[]|*)[]}
   */

  function deduplicateKeys(performanceEntries) {
    if (performanceEntries.length === 0) {
      return [];
    }

    var keys = Object.keys(performanceEntries[0]);
    return [keys, performanceEntries.map(function (obj) {
      return keys.map(function (key) {
        return obj[key];
      });
    })];
  }
  /*
  The duration property is on the PerformanceNavigationTiming object.

  It is a timestamp that is the difference between the PerformanceNavigationTiming.loadEventEnd
  and PerformanceEntry.startTime properties.
  https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming

  Even in browsers that implement it, it is not always available to us
   */

  function pageLoadFrom(performanceData) {
    var keys = performanceData.navigation && performanceData.navigation[0];
    var values = performanceData.navigation && performanceData.navigation[1] && performanceData.navigation[1][0];
    var durationIndex = keys && keys.indexOf('duration');

    if (durationIndex > -1) {
      return values[durationIndex];
    } else {
      var endKeyIndex = keys && keys.indexOf('loadEventEnd');
      var startKeyIndex = keys && keys.indexOf('startTime'); // start key is not present if start is 0

      if (endKeyIndex > -1) {
        var end = values && values[endKeyIndex];
        var start = values && values[startKeyIndex] || 0;
        return end - start;
      }
    }
  }
  function getPerformanceData() {
    var performanceEntries = {
      navigation: getPerformanceEntriesByType('navigation'),
      paint: getPerformanceEntriesByType('paint'),
      resource: getPerformanceEntriesByType('resource')
    };

    if (_typeof(win) !== undefined && win.performance && win.performance.clearResourceTimings) {
      win.performance.clearResourceTimings();
    }

    var properties = {};
    var pageLoad = pageLoadFrom(performanceEntries);

    if (pageLoad) {
      properties['$performance_page_loaded'] = pageLoad;
    }

    properties['$performance_raw'] = JSON.stringify(performanceEntries);
    return properties;
  }

  /**
   * Integrate Sentry with PostHog. This will add a direct link to the person in Sentry, and an $exception event in PostHog
   *
   * ### Usage
   *
   *     Sentry.init({
   *          dsn: 'https://example',
   *          integrations: [
   *              new posthog.SentryIntegration(posthog)
   *          ]
   *     })
   *
   * @param {Object} [posthog] The posthog object
   * @param {string} [organization] Optional: The Sentry organization, used to send a direct link from PostHog to Sentry
   * @param {Number} [projectId] Optional: The Sentry project id, used to send a direct link from PostHog to Sentry
   * @param {string} [prefix] Optional: Url of a self-hosted sentry instance (default: https://sentry.io/organizations/)
   */
  var SentryIntegration = /*#__PURE__*/_createClass(function SentryIntegration(_posthog, organization, projectId, prefix) {
    _classCallCheck(this, SentryIntegration);

    // setupOnce gets called by Sentry when it intializes the plugin
    // 'this' is not this: PostHogLib object, but the new class that's created.
    // TODO: refactor to a real class. The types
    this.name = 'posthog-js';

    this.setupOnce = function (addGlobalEventProcessor) {
      addGlobalEventProcessor(function (event) {
        var _event$exception, _exceptions$, _exceptions$2;

        if (event.level !== 'error' || !_posthog.__loaded) return event;
        if (!event.tags) event.tags = {};
        event.tags['PostHog Person URL'] = _posthog.config.api_host + '/person/' + _posthog.get_distinct_id();

        if (_posthog.sessionRecordingStarted()) {
          event.tags['PostHog Recording URL'] = _posthog.config.api_host + '/recordings/#sessionRecordingId=' + _posthog.sessionManager.checkAndGetSessionAndWindowId(true).sessionId;
        }

        var exceptions = ((_event$exception = event.exception) === null || _event$exception === void 0 ? void 0 : _event$exception.values) || [];
        var data = {
          $sentry_event_id: event.event_id,
          $sentry_exception: event.exception,
          $sentry_exception_message: (_exceptions$ = exceptions[0]) === null || _exceptions$ === void 0 ? void 0 : _exceptions$.value,
          $sentry_exception_type: (_exceptions$2 = exceptions[0]) === null || _exceptions$2 === void 0 ? void 0 : _exceptions$2.type,
          $sentry_tags: event.tags
        };
        if (organization && projectId) data['$sentry_url'] = (prefix || 'https://sentry.io/organizations/') + organization + '/issues/?project=' + projectId + '&query=' + event.event_id;

        _posthog.capture('$exception', data);

        return event;
      });
    };
  });

  /**
   * Extend Segment with extra PostHog JS functionality. Required for things like Recordings and feature flags to work correctly.
   *
   * ### Usage
   *
   *  ```js
   *  // After your standard segment anyalytics install
   *  analytics.load("GOEDfA21zZTtR7clsBuDvmBKAtAdZ6Np");
   *
   *  analytics.ready(() => {
   *    posthog.init('<posthog-api-key>', {
   *      capture_pageview: false,
   *      segment: window.analytics, // NOTE: Be sure to use window.analytics here!
   *    });
   *    window.analytics.page();
   *  })
   *  ```
   */
  // Loosely based on https://github.com/segmentio/analytics-next/blob/master/packages/core/src/plugins/index.ts
  var createSegmentIntegration = function createSegmentIntegration(posthog) {
    var enrichEvent = function enrichEvent(ctx, eventName) {
      if (!ctx.event.userId && ctx.event.anonymousId !== posthog.get_distinct_id()) {
        // This is our only way of detecting that segment's analytics.reset() has been called so we also call it
        posthog.reset();
      }

      if (ctx.event.userId && ctx.event.userId !== posthog.get_distinct_id()) {
        posthog.register({
          distinct_id: ctx.event.userId
        });
        posthog.reloadFeatureFlags();
      }

      var additionalProperties = posthog._calculate_event_properties(eventName, ctx.event.properties);

      ctx.event.properties = Object.assign({}, additionalProperties, ctx.event.properties);
      return ctx;
    };

    return {
      name: 'PostHog JS',
      type: 'enrichment',
      version: '1.0.0',
      isLoaded: function isLoaded() {
        return true;
      },
      load: function load() {
        return Promise.resolve();
      },
      track: function track(ctx) {
        return enrichEvent(ctx, ctx.event.event);
      },
      page: function page(ctx) {
        return enrichEvent(ctx, '$pageview');
      },
      identify: function identify(ctx) {
        return enrichEvent(ctx, '$identify');
      },
      screen: function screen(ctx) {
        return enrichEvent(ctx, '$screen');
      }
    };
  };

  /*
  SIMPLE STYLE GUIDE:

  this.x === public function
  this._x === internal - only use within this file
  this.__x === private - only use within the class

  Globals should be all caps
  */

  var InitType;

  (function (InitType) {
    InitType[InitType["INIT_MODULE"] = 0] = "INIT_MODULE";
    InitType[InitType["INIT_SNIPPET"] = 1] = "INIT_SNIPPET";
  })(InitType || (InitType = {}));

  var init_type; // TODO: the type of this is very loose. Sometimes it's also PostHogLib itself

  var posthog_master; // some globals for comparisons

  var __NOOP = function __NOOP() {};

  var __NOOPTIONS = {};
  var PRIMARY_INSTANCE_NAME = 'posthog';
  /*
   * Dynamic... constants? Is that an oxymoron?
   */
  // http://hacks.mozilla.org/2009/07/cross-site-xmlhttprequest-with-cors/
  // https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest#withCredentials

  var USE_XHR = win.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest(); // IE<10 does not support cross-origin XHR's but script tags
  // with defer won't block window.onload; ENQUEUE_REQUESTS
  // should only be true for Opera<12

  var ENQUEUE_REQUESTS = !USE_XHR && userAgent.indexOf('MSIE') === -1 && userAgent.indexOf('Mozilla') === -1;

  var defaultConfig = function defaultConfig() {
    var _document$location, _document$location$ho, _window$location;

    return {
      api_host: 'https://app.posthog.com',
      api_method: 'POST',
      api_transport: 'XHR',
      token: '',
      autocapture: true,
      rageclick: false,
      cross_subdomain_cookie: (document$1 === null || document$1 === void 0 ? void 0 : (_document$location = document$1.location) === null || _document$location === void 0 ? void 0 : (_document$location$ho = _document$location.hostname) === null || _document$location$ho === void 0 ? void 0 : _document$location$ho.indexOf('herokuapp.com')) === -1,
      persistence: 'cookie',
      persistence_name: '',
      cookie_name: '',
      loaded: __NOOP,
      store_google: true,
      save_referrer: true,
      test: false,
      verbose: false,
      img: false,
      capture_pageview: true,
      debug: false,
      cookie_expiration: 365,
      upgrade: false,
      disable_session_recording: false,
      disable_persistence: false,
      disable_cookie: false,
      enable_recording_console_log: undefined,
      // When undefined, it falls back to the server-side setting
      secure_cookie: (win === null || win === void 0 ? void 0 : (_window$location = win.location) === null || _window$location === void 0 ? void 0 : _window$location.protocol) === 'https:',
      ip: true,
      opt_out_capturing_by_default: false,
      opt_out_persistence_by_default: false,
      opt_out_capturing_persistence_type: 'localStorage',
      opt_out_capturing_cookie_prefix: null,
      opt_in_site_apps: false,
      property_blacklist: [],
      respect_dnt: false,
      sanitize_properties: null,
      xhr_headers: {},
      // { header: value, header2: value }
      inapp_protocol: '//',
      inapp_link_new_window: false,
      request_batching: true,
      properties_string_max_length: 65535,
      session_recording: {
        // select set of rrweb config options we expose to our users
        // see https://github.com/rrweb-io/rrweb/blob/master/guide.md
        blockClass: 'ph-no-capture',
        blockSelector: null,
        ignoreClass: 'ph-ignore-input',
        maskAllInputs: true,
        maskInputOptions: {},
        maskInputFn: null,
        slimDOMOptions: {},
        collectFonts: false,
        inlineStylesheet: true
      },
      mask_all_element_attributes: false,
      mask_all_text: false,
      advanced_disable_decide: false,
      advanced_disable_toolbar_metrics: false,
      on_xhr_error: function on_xhr_error(req) {
        var error = 'Bad HTTP status: ' + req.status + ' ' + req.statusText;
        console.error(error);
      },
      get_device_id: function get_device_id(uuid) {
        return uuid;
      },
      // Used for internal testing
      _onCapture: __NOOP,
      _capture_metrics: false,
      _capture_performance: false,
      name: 'posthog',
      callback_fn: 'posthog._jsc',
      bootstrap: {},
      disable_compression: false
    };
  };
  /**
   * create_mplib(token:string, config:object, name:string)
   *
   * This function is used by the init method of PostHogLib objects
   * as well as the main initializer at the end of the JSLib (that
   * initializes document.posthog as well as any additional instances
   * declared before this file has loaded).
   */


  var create_mplib = function create_mplib(token, config, name) {
    var instance;
    var target = name === PRIMARY_INSTANCE_NAME || !posthog_master ? posthog_master : name ? posthog_master[name] : undefined;

    if (target && init_type === InitType.INIT_MODULE) {
      instance = target;
    } else {
      if (target && !_isArray(target)) {
        console.error('You have already initialized ' + name); // TODO: throw something instead?
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore

        return;
      }

      instance = new PostHog();
    }

    instance._init(token, config, name);

    instance.toolbar.maybeLoadToolbar();
    instance.sessionRecording = new SessionRecording(instance);
    instance.sessionRecording.startRecordingIfEnabled();
    instance.__autocapture_enabled = instance.get_config('autocapture');

    if (instance.get_config('autocapture')) {
      var num_buckets = 100;
      var num_enabled_buckets = 100;

      if (!autocapture.enabledForProject(instance.get_config('token'), num_buckets, num_enabled_buckets)) {
        instance.__autocapture_enabled = false;
        logger.log('Not in active bucket: disabling Automatic Event Collection.');
      } else if (!autocapture.isBrowserSupported()) {
        instance.__autocapture_enabled = false;
        logger.log('Disabling Automatic Event Collection because this browser is not supported');
      } else {
        autocapture.init(instance);
      }
    } // if any instance on the page has debug = true, we set the
    // global debug to be true


    Config.DEBUG = Config.DEBUG || instance.get_config('debug'); // if target is not defined, we called init after the lib already
    // loaded, so there won't be an array of things to execute

    if (typeof target !== 'undefined' && _isArray(target)) {
      // Crunch through the people queue first - we queue this data up &
      // flush on identify, so it's better to do all these operations first
      instance._execute_array.call(instance.people, target.people);

      instance._execute_array(target);
    }

    return instance;
  };
  /**
   * PostHog Library Object
   * @constructor
   */


  var PostHog = /*#__PURE__*/function () {
    function PostHog() {
      var _this = this;

      _classCallCheck(this, PostHog);

      this.config = defaultConfig();
      this.compression = {};
      this.decideEndpointWasHit = false;
      this.SentryIntegration = SentryIntegration;

      this.segmentIntegration = function () {
        return createSegmentIntegration(_this);
      };

      this.__captureHooks = [];
      this.__request_queue = [];
      this.__loaded = false;
      this.__autocapture_enabled = undefined;

      this._jsc = function () {};

      this.people = new PostHogPeople(this);
      this.featureFlags = new PostHogFeatureFlags(this);
      this.feature_flags = this.featureFlags;
      this.toolbar = new Toolbar(this); // these are created in _init() after we have the config

      this._captureMetrics = undefined;
      this._requestQueue = undefined;
      this._retryQueue = undefined;
      this.persistence = undefined;
      this.sessionManager = undefined;
    } // Initialization methods

    /**
     * This function initializes a new instance of the PostHog capturing object.
     * All new instances are added to the main posthog object as sub properties (such as
     * posthog.library_name) and also returned by this function. To define a
     * second instance on the page, you would call:
     *
     *     posthog.init('new token', { your: 'config' }, 'library_name');
     *
     * and use it like so:
     *
     *     posthog.library_name.capture(...);
     *
     * @param {String} token   Your PostHog API token
     * @param {Object} [config]  A dictionary of config options to override. <a href="https://github.com/posthog/posthog-js/blob/6e0e873/src/posthog-core.js#L57-L91">See a list of default config options</a>.
     * @param {String} [name]    The name for the new posthog instance that you want created
     */


    _createClass(PostHog, [{
      key: "init",
      value: function init(token, config, name) {
        if (_isUndefined(name)) {
          console.error('You must name your new library: init(token, config, name)');
          return;
        }

        if (name === PRIMARY_INSTANCE_NAME) {
          console.error('You must initialize the main posthog object right after you include the PostHog js snippet');
          return;
        }

        var instance = create_mplib(token, config, name);
        posthog_master[name] = instance;

        instance._loaded();

        return instance;
      } // posthog._init(token:string, config:object, name:string)
      //
      // This function sets up the current instance of the posthog
      // library.  The difference between this method and the init(...)
      // method is this one initializes the actual instance, whereas the
      // init(...) method sets up a new library and calls _init on it.
      //

    }, {
      key: "_init",
      value: function _init(token) {
        var _config$bootstrap;

        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var name = arguments.length > 2 ? arguments[2] : undefined;
        this.__loaded = true;
        this.config = {}; // will be set right below

        this._triggered_notifs = [];
        this.set_config(_extend({}, defaultConfig(), config, {
          name: name,
          token: token,
          callback_fn: (name === PRIMARY_INSTANCE_NAME ? name : PRIMARY_INSTANCE_NAME + '.' + name) + '._jsc'
        }));

        this._jsc = function () {};

        this._captureMetrics = new CaptureMetrics(this.get_config('_capture_metrics'));
        this._requestQueue = new RequestQueue(this._captureMetrics, this._handle_queued_event.bind(this));
        this._retryQueue = new RetryQueue(this._captureMetrics, this.get_config('on_xhr_error'));
        this.__captureHooks = [];
        this.__request_queue = [];
        this.persistence = new PostHogPersistence(this.config);
        this.sessionManager = new SessionIdManager(this.config, this.persistence);

        this._gdpr_init();

        if (config.segment) {
          // Use segments anonymousId instead
          this.config.get_device_id = function () {
            return config.segment.user().anonymousId();
          }; // If a segment user ID exists, set it as the distinct_id


          if (config.segment.user().id()) {
            this.register({
              distinct_id: config.segment.user().id()
            });
          }

          config.segment.register(this.segmentIntegration());
        }

        if (((_config$bootstrap = config.bootstrap) === null || _config$bootstrap === void 0 ? void 0 : _config$bootstrap.distinctID) !== undefined) {
          var _config$bootstrap2;

          var uuid = this.get_config('get_device_id')(_UUID());
          var deviceID = (_config$bootstrap2 = config.bootstrap) !== null && _config$bootstrap2 !== void 0 && _config$bootstrap2.isIdentifiedID ? uuid : config.bootstrap.distinctID;
          this.register({
            distinct_id: config.bootstrap.distinctID,
            $device_id: deviceID
          });
        }

        if (this._hasBootstrappedFeatureFlags()) {
          var _config$bootstrap3;

          var activeFlags = Object.keys(((_config$bootstrap3 = config.bootstrap) === null || _config$bootstrap3 === void 0 ? void 0 : _config$bootstrap3.featureFlags) || {}).filter(function (flag) {
            var _config$bootstrap4, _config$bootstrap4$fe;

            return !!((_config$bootstrap4 = config.bootstrap) !== null && _config$bootstrap4 !== void 0 && (_config$bootstrap4$fe = _config$bootstrap4.featureFlags) !== null && _config$bootstrap4$fe !== void 0 && _config$bootstrap4$fe[flag]);
          }).reduce(function (res, key) {
            var _config$bootstrap5, _config$bootstrap5$fe;

            return res[key] = ((_config$bootstrap5 = config.bootstrap) === null || _config$bootstrap5 === void 0 ? void 0 : (_config$bootstrap5$fe = _config$bootstrap5.featureFlags) === null || _config$bootstrap5$fe === void 0 ? void 0 : _config$bootstrap5$fe[key]) || false, res;
          }, {});
          this.featureFlags.receivedFeatureFlags({
            featureFlags: activeFlags
          });
        }

        if (!this.get_distinct_id()) {
          // There is no need to set the distinct id
          // or the device id if something was already stored
          // in the persitence
          var _uuid = this.get_config('get_device_id')(_UUID());

          this.register_once({
            distinct_id: _uuid,
            $device_id: _uuid
          }, '');
        } // Set up event handler for pageleave
        // Use `onpagehide` if available, see https://calendar.perfplanet.com/2020/beaconing-in-practice/#beaconing-reliability-avoiding-abandons


        win.addEventListener && win.addEventListener('onpagehide' in self ? 'pagehide' : 'unload', this._handle_unload.bind(this));
      } // Private methods

    }, {
      key: "_loaded",
      value: function _loaded() {
        // Pause `reloadFeatureFlags` calls in config.loaded callback.
        // These feature flags are loaded in the decide call made right afterwards
        this.featureFlags.setReloadingPaused(true);

        try {
          this.get_config('loaded')(this);
        } catch (err) {
          console.error('`loaded` function failed', err);
        }

        this._start_queue_if_opted_in(); // this happens after so a user can call identify in
        // the loaded callback


        if (this.get_config('capture_pageview')) {
          this.capture('$pageview', {}, {
            send_instantly: true
          });
        } // Call decide to get what features are enabled and other settings.
        // As a reminder, if the /decide endpoint is disabled, feature flags, toolbar, session recording, autocapture,
        // and compression will not be available.


        if (!this.get_config('advanced_disable_decide')) {
          new Decide(this).call();
        }

        this.featureFlags.resetRequestQueue();
        this.featureFlags.setReloadingPaused(false);
      }
    }, {
      key: "_start_queue_if_opted_in",
      value: function _start_queue_if_opted_in() {
        if (!this.has_opted_out_capturing()) {
          if (this.get_config('request_batching')) {
            this._requestQueue.poll();
          }
        }
      }
    }, {
      key: "_dom_loaded",
      value: function _dom_loaded() {
        var _this2 = this;

        if (!this.has_opted_out_capturing()) {
          _eachArray(this.__request_queue, function (item) {
            _this2._send_request.apply(_this2, _toConsumableArray(item));
          });
        }

        this.__request_queue = [];

        this._start_queue_if_opted_in();
      }
      /**
       * _prepare_callback() should be called by callers of _send_request for use
       * as the callback argument.
       *
       * If there is no callback, this returns null.
       * If we are going to make XHR/XDR requests, this returns a function.
       * If we are going to use script tags, this returns a string to use as the
       * callback GET param.
       */
      // TODO: get rid of the "| string"

    }, {
      key: "_prepare_callback",
      value: function _prepare_callback(callback, data) {
        if (_isUndefined(callback)) {
          return null;
        }

        if (USE_XHR) {
          return function (response) {
            callback(response, data);
          };
        } else {
          // if the user gives us a callback, we store as a random
          // property on this instances jsc function and update our
          // callback string to reflect that.
          var jsc = this._jsc;
          var randomized_cb = '' + Math.floor(Math.random() * 100000000);
          var callback_string = this.get_config('callback_fn') + '[' + randomized_cb + ']';

          jsc[randomized_cb] = function (response) {
            delete jsc[randomized_cb];
            callback(response, data);
          };

          return callback_string;
        }
      }
    }, {
      key: "_handle_unload",
      value: function _handle_unload() {
        if (!this.get_config('request_batching')) {
          if (this.get_config('capture_pageview')) {
            this.capture('$pageleave', null, {
              transport: 'sendBeacon'
            });
          }

          return;
        }

        if (this.get_config('capture_pageview')) {
          this.capture('$pageleave');
        }

        if (this.get_config('_capture_metrics')) {
          this._requestQueue.updateUnloadMetrics();

          this.capture('$capture_metrics', this._captureMetrics.metrics);
        }

        this._requestQueue.unload();

        this._retryQueue.unload();
      }
    }, {
      key: "_handle_queued_event",
      value: function _handle_queued_event(url, data, options) {
        var jsonData = JSON.stringify(data);

        this.__compress_and_send_json_request(url, jsonData, options || __NOOPTIONS, __NOOP);
      }
    }, {
      key: "__compress_and_send_json_request",
      value: function __compress_and_send_json_request(url, jsonData, options, callback) {
        var _compressData = compressData(decideCompression(this.compression), jsonData, options),
            _compressData2 = _slicedToArray(_compressData, 2),
            data = _compressData2[0],
            _options = _compressData2[1];

        this._send_request(url, data, _options, callback);
      }
    }, {
      key: "_send_request",
      value: function _send_request(url, data, options, callback) {
        if (ENQUEUE_REQUESTS) {
          this.__request_queue.push([url, data, options, callback]);

          return;
        }

        var DEFAULT_OPTIONS = {
          method: this.get_config('api_method'),
          transport: this.get_config('api_transport'),
          verbose: this.get_config('verbose')
        };
        options = _extend(DEFAULT_OPTIONS, options || {});

        if (!USE_XHR) {
          options.method = 'GET';
        }

        var useSendBeacon = 'sendBeacon' in win.navigator && options.transport === 'sendBeacon';
        url = addParamsToURL(url, options.urlQueryArgs || {}, {
          ip: this.get_config('ip')
        });

        if (_isObject(data) && this.get_config('img')) {
          var img = document$1.createElement('img');
          img.src = url;
          document$1.body.appendChild(img);
        } else if (useSendBeacon) {
          // beacon documentation https://w3c.github.io/beacon/
          // beacons format the message and use the type property
          // also no need to try catch as sendBeacon does not report errors
          //   and is defined as best effort attempt
          try {
            win.navigator.sendBeacon(url, encodePostData(data, _objectSpread2(_objectSpread2({}, options), {}, {
              sendBeacon: true
            })));
          } catch (e) {
            if (this.get_config('debug')) {
              console.error(e);
            }
          }
        } else if (USE_XHR) {
          try {
            xhr({
              url: url,
              data: data,
              headers: this.get_config('xhr_headers'),
              options: options,
              captureMetrics: this._captureMetrics,
              callback: callback,
              retriesPerformedSoFar: 0,
              retryQueue: this._retryQueue,
              onXHRError: this.get_config('on_xhr_error')
            });
          } catch (e) {
            console.error(e);
          }
        } else {
          var _s$parentNode;

          var script = document$1.createElement('script');
          script.type = 'text/javascript';
          script.async = true;
          script.defer = true;
          script.src = url;
          var s = document$1.getElementsByTagName('script')[0];
          (_s$parentNode = s.parentNode) === null || _s$parentNode === void 0 ? void 0 : _s$parentNode.insertBefore(script, s);
        }
      }
      /**
       * _execute_array() deals with processing any posthog function
       * calls that were called before the PostHog library were loaded
       * (and are thus stored in an array so they can be called later)
       *
       * Note: we fire off all the posthog function calls && user defined
       * functions BEFORE we fire off posthog capturing calls. This is so
       * identify/register/set_config calls can properly modify early
       * capturing calls.
       *
       * @param {Array} array
       */

    }, {
      key: "_execute_array",
      value: function _execute_array(array) {
        var _this3 = this;

        var fn_name;
        var alias_calls = [];
        var other_calls = [];
        var capturing_calls = [];

        _eachArray(array, function (item) {
          if (item) {
            fn_name = item[0];

            if (_isArray(fn_name)) {
              capturing_calls.push(item); // chained call e.g. posthog.get_group().set()
            } else if (typeof item === 'function') {
              item.call(_this3);
            } else if (_isArray(item) && fn_name === 'alias') {
              alias_calls.push(item);
            } else if (_isArray(item) && fn_name.indexOf('capture') !== -1 && typeof _this3[fn_name] === 'function') {
              capturing_calls.push(item);
            } else {
              other_calls.push(item);
            }
          }
        });

        var execute = function execute(calls, thisArg) {
          _eachArray(calls, function (item) {
            if (_isArray(item[0])) {
              // chained call
              var caller = thisArg;

              _each(item, function (call) {
                caller = caller[call[0]].apply(caller, call.slice(1));
              });
            } else {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              this[item[0]].apply(this, item.slice(1));
            }
          }, thisArg);
        };

        execute(alias_calls, this);
        execute(other_calls, this);
        execute(capturing_calls, this);
      }
    }, {
      key: "_hasBootstrappedFeatureFlags",
      value: function _hasBootstrappedFeatureFlags() {
        var _this$config$bootstra, _this$config$bootstra2;

        return ((_this$config$bootstra = this.config.bootstrap) === null || _this$config$bootstra === void 0 ? void 0 : _this$config$bootstra.featureFlags) && Object.keys((_this$config$bootstra2 = this.config.bootstrap) === null || _this$config$bootstra2 === void 0 ? void 0 : _this$config$bootstra2.featureFlags).length > 0 || false;
      }
      /**
       * push() keeps the standard async-array-push
       * behavior around after the lib is loaded.
       * This is only useful for external integrations that
       * do not wish to rely on our convenience methods
       * (created in the snippet).
       *
       * ### Usage:
       *     posthog.push(['register', { a: 'b' }]);
       *
       * @param {Array} item A [function_name, args...] array to be executed
       */

    }, {
      key: "push",
      value: function push(item) {
        this._execute_array([item]);
      }
      /**
       * Capture an event. This is the most important and
       * frequently used PostHog function.
       *
       * ### Usage:
       *
       *     // capture an event named 'Registered'
       *     posthog.capture('Registered', {'Gender': 'Male', 'Age': 21});
       *
       *     // capture an event using navigator.sendBeacon
       *     posthog.capture('Left page', {'duration_seconds': 35}, {transport: 'sendBeacon'});
       *
       * @param {String} event_name The name of the event. This can be anything the user does - 'Button Click', 'Sign Up', 'Item Purchased', etc.
       * @param {Object} [properties] A set of properties to include with the event you're sending. These describe the user who did the event or details about the event itself.
       * @param {Object} [options] Optional configuration for this capture request.
       * @param {String} [options.transport] Transport method for network request ('XHR' or 'sendBeacon').
       * @param {Date} [options.timestamp] Timestamp is a Date object. If not set, it'll automatically be set to the current time.
       */

    }, {
      key: "capture",
      value: function capture(event_name, properties) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __NOOPTIONS;

        // While developing, a developer might purposefully _not_ call init(),
        // in this case, we would like capture to be a noop.
        if (!this.__loaded) {
          return;
        }

        if (userOptedOut(this, false)) {
          return;
        }

        this._captureMetrics.incr('capture');

        if (event_name === '$snapshot') {
          this._captureMetrics.incr('snapshot');
        }

        options = options || __NOOPTIONS;
        var transport = options['transport']; // external API, don't minify 'transport' prop

        if (transport) {
          options.transport = transport; // 'transport' prop name can be minified internally
        } // typing doesn't prevent interesting data


        if (_isUndefined(event_name) || typeof event_name !== 'string') {
          console.error('No event name provided to posthog.capture');
          return;
        }

        if (_isBlockedUA(userAgent)) {
          return;
        } // update persistence


        this.persistence.update_search_keyword(document$1.referrer);

        if (this.get_config('store_google')) {
          this.persistence.update_campaign_params();
        }

        if (this.get_config('save_referrer')) {
          this.persistence.update_referrer_info(document$1.referrer);
        }

        var data = {
          event: event_name,
          properties: this._calculate_event_properties(event_name, properties || {})
        };

        if (event_name === '$identify' && options.$set) {
          data['$set'] = options['$set'];
        }

        data = _copyAndTruncateStrings(data, options._noTruncate ? null : this.get_config('properties_string_max_length'));
        data.timestamp = options.timestamp || new Date();

        if (this.get_config('debug')) {
          logger.log('PostHog.js send', data);
        }

        var jsonData = JSON.stringify(data);
        var url = this.get_config('api_host') + (options.endpoint || '/e/');
        var has_unique_traits = options !== __NOOPTIONS;

        if (this.get_config('request_batching') && (!has_unique_traits || options._batchKey) && !options.send_instantly) {
          this._requestQueue.enqueue(url, data, options);
        } else {
          this.__compress_and_send_json_request(url, jsonData, options);
        }

        this._invokeCaptureHooks(event_name, data);

        return data;
      }
    }, {
      key: "_addCaptureHook",
      value: function _addCaptureHook(callback) {
        this.__captureHooks.push(callback);
      }
    }, {
      key: "_invokeCaptureHooks",
      value: function _invokeCaptureHooks(eventName, eventData) {
        this.config._onCapture(eventName, eventData);

        _each(this.__captureHooks, function (callback) {
          return callback(eventName);
        });
      }
    }, {
      key: "_calculate_event_properties",
      value: function _calculate_event_properties(event_name, event_properties) {
        // set defaults
        var start_timestamp = this.persistence.remove_event_timer(event_name);

        var properties = _objectSpread2({}, event_properties);

        properties['token'] = this.get_config('token');

        if (event_name === '$snapshot') {
          var persistenceProps = this.persistence.properties();
          properties['distinct_id'] = persistenceProps.distinct_id;
          return properties;
        } // set $duration if time_event was previously called for this event


        if (typeof start_timestamp !== 'undefined') {
          var duration_in_ms = new Date().getTime() - start_timestamp;
          properties['$duration'] = parseFloat((duration_in_ms / 1000).toFixed(3));
        }

        if (this.sessionManager) {
          var _this$sessionManager$ = this.sessionManager.checkAndGetSessionAndWindowId(),
              sessionId = _this$sessionManager$.sessionId,
              windowId = _this$sessionManager$.windowId;

          properties['$session_id'] = sessionId;
          properties['$window_id'] = windowId;
        } // note: extend writes to the first object, so lets make sure we
        // don't write to the persistence properties object and info
        // properties object by passing in a new object
        // update properties with pageview info and super-properties


        properties = _extend({}, _info.properties(), this.persistence.properties(), properties);

        if (event_name === '$pageview' && this.get_config('_capture_performance')) {
          properties = _extend(properties, getPerformanceData());
        }

        var property_blacklist = this.get_config('property_blacklist');

        if (_isArray(property_blacklist)) {
          _each(property_blacklist, function (blacklisted_prop) {
            delete properties[blacklisted_prop];
          });
        } else {
          console.error('Invalid value for property_blacklist config: ' + property_blacklist);
        }

        var sanitize_properties = this.get_config('sanitize_properties');

        if (sanitize_properties) {
          properties = sanitize_properties(properties, event_name);
        }

        return properties;
      }
      /**
       * Register a set of super properties, which are included with all
       * events. This will overwrite previous super property values.
       *
       * ### Usage:
       *
       *     // register 'Gender' as a super property
       *     posthog.register({'Gender': 'Female'});
       *
       *     // register several super properties when a user signs up
       *     posthog.register({
       *         'Email': 'jdoe@example.com',
       *         'Account Type': 'Free'
       *     });
       *
       * @param {Object} properties An associative array of properties to store about the user
       * @param {Number} [days] How many days since the user's last visit to store the super properties
       */

    }, {
      key: "register",
      value: function register(properties, days) {
        this.persistence.register(properties, days);
      }
      /**
       * Register a set of super properties only once. This will not
       * overwrite previous super property values, unlike register().
       *
       * ### Usage:
       *
       *     // register a super property for the first time only
       *     posthog.register_once({
       *         'First Login Date': new Date().toISOString()
       *     });
       *
       * ### Notes:
       *
       * If default_value is specified, current super properties
       * with that value will be overwritten.
       *
       * @param {Object} properties An associative array of properties to store about the user
       * @param {*} [default_value] Value to override if already set in super properties (ex: 'False') Default: 'None'
       * @param {Number} [days] How many days since the users last visit to store the super properties
       */

    }, {
      key: "register_once",
      value: function register_once(properties, default_value, days) {
        this.persistence.register_once(properties, default_value, days);
      }
      /**
       * Delete a super property stored with the current user.
       *
       * @param {String} property The name of the super property to remove
       */

    }, {
      key: "unregister",
      value: function unregister(property) {
        this.persistence.unregister(property);
      }
    }, {
      key: "_register_single",
      value: function _register_single(prop, value) {
        this.register(_defineProperty({}, prop, value));
      }
      /*
       * Get feature flag value for user (supports multivariate flags).
       *
       * ### Usage:
       *
       *     if(posthog.getFeatureFlag('beta-feature') === 'some-value') { // do something }
       *
       * @param {Object|String} prop Key of the feature flag.
       * @param {Object|String} options (optional) If {send_event: false}, we won't send an $feature_flag_call event to PostHog.
       */

    }, {
      key: "getFeatureFlag",
      value: function getFeatureFlag(key, options) {
        return this.featureFlags.getFeatureFlag(key, options);
      }
      /*
       * See if feature flag is enabled for user.
       *
       * ### Usage:
       *
       *     if(posthog.isFeatureEnabled('beta-feature')) { // do something }
       *
       * @param {Object|String} prop Key of the feature flag.
       * @param {Object|String} options (optional) If {send_event: false}, we won't send an $feature_flag_call event to PostHog.
       */

    }, {
      key: "isFeatureEnabled",
      value: function isFeatureEnabled(key, options) {
        return this.featureFlags.isFeatureEnabled(key, options);
      }
    }, {
      key: "reloadFeatureFlags",
      value: function reloadFeatureFlags() {
        this.featureFlags.reloadFeatureFlags();
      }
      /*
       * Register an event listener that runs when feature flags become available or when they change.
       * If there are flags, the listener is called immediately in addition to being called on future changes.
       *
       * ### Usage:
       *
       *     posthog.onFeatureFlags(function(featureFlags) { // do something })
       *
       * @param {Function} [callback] The callback function will be called once the feature flags are ready or when they are updated.
       *                              It'll return a list of feature flags enabled for the user.
       */

    }, {
      key: "onFeatureFlags",
      value: function onFeatureFlags(callback) {
        return this.featureFlags.onFeatureFlags(callback);
      }
      /**
       * Identify a user with a unique ID instead of a PostHog
       * randomly generated distinct_id. If the method is never called,
       * then unique visitors will be identified by a UUID generated
       * the first time they visit the site.
       *
       * If user properties are passed, they are also sent to posthog.
       *
       * ### Usage:
       *
       *      posthog.identify('[user unique id]')
       *      posthog.identify('[user unique id]', { email: 'john@example.com' })
       *      posthog.identify('[user unique id]', {}, { referral_code: '12345' })
       *
       * ### Notes:
       *
       * You can call this function to overwrite a previously set
       * unique ID for the current user. PostHog cannot translate
       * between IDs at this time, so when you change a user's ID
       * they will appear to be a new user.
       *
       * When used alone, posthog.identify will change the user's
       * distinct_id to the unique ID provided. When used in tandem
       * with posthog.alias, it will allow you to identify based on
       * unique ID and map that back to the original, anonymous
       * distinct_id given to the user upon her first arrival to your
       * site (thus connecting anonymous pre-signup activity to
       * post-signup activity). Though the two work together, do not
       * call identify() at the same time as alias(). Calling the two
       * at the same time can cause a race condition, so it is best
       * practice to call identify on the original, anonymous ID
       * right after you've aliased it.
       *
       * @param {String} [new_distinct_id] A string that uniquely identifies a user. If not provided, the distinct_id currently in the persistent store (cookie or localStorage) will be used.
       * @param {Object} [userPropertiesToSet] Optional: An associative array of properties to store about the user
       * @param {Object} [userPropertiesToSetOnce] Optional: An associative array of properties to store about the user. If property is previously set, this does not override that value.
       */

    }, {
      key: "identify",
      value: function identify(new_distinct_id, userPropertiesToSet, userPropertiesToSetOnce) {
        //if the new_distinct_id has not been set ignore the identify event
        if (!new_distinct_id) {
          console.error('Unique user id has not been set in posthog.identify');
          return;
        }

        this._captureMetrics.incr('identify');

        var previous_distinct_id = this.get_distinct_id();
        this.register({
          $user_id: new_distinct_id
        });

        if (!this.get_property('$device_id')) {
          // The persisted distinct id might not actually be a device id at all
          // it might be a distinct id of the user from before
          var device_id = previous_distinct_id;
          this.register_once({
            $had_persisted_distinct_id: true,
            $device_id: device_id
          }, '');
        } // identify only changes the distinct id if it doesn't match either the existing or the alias;
        // if it's new, blow away the alias as well.


        if (new_distinct_id !== previous_distinct_id && new_distinct_id !== this.get_property(ALIAS_ID_KEY)) {
          this.unregister(ALIAS_ID_KEY);
          this.register({
            distinct_id: new_distinct_id
          });
        } // send an $identify event any time the distinct_id is changing and the old ID is an anoymous ID
        // - logic on the server will determine whether or not to do anything with it.


        if (new_distinct_id !== previous_distinct_id && (!this.get_property('$device_id') || previous_distinct_id === this.get_property('$device_id'))) {
          this.capture('$identify', {
            distinct_id: new_distinct_id,
            $anon_distinct_id: previous_distinct_id
          }, {
            $set: userPropertiesToSet || {},
            $set_once: userPropertiesToSetOnce || {}
          }); // let the reload feature flag request know to send this previous distinct id
          // for flag consistency

          this.featureFlags.setAnonymousDistinctId(previous_distinct_id);
        } else {
          if (userPropertiesToSet) {
            this.people.set(userPropertiesToSet);
          }

          if (userPropertiesToSetOnce) {
            this.people.set_once(userPropertiesToSetOnce);
          }
        } // Reload active feature flags if the user identity changes.
        // Note we don't reload this on property changes as these get processed async


        if (new_distinct_id !== previous_distinct_id) {
          this.reloadFeatureFlags();
        }
      }
      /**
       * Alpha feature: don't use unless you know what you're doing!
       *
       * Sets group analytics information for subsequent events and reloads feature flags.
       *
       * @param {String} groupType Group type (example: 'organization')
       * @param {String} groupKey Group key (example: 'org::5')
       * @param {Object} groupPropertiesToSet Optional properties to set for group
       */

    }, {
      key: "group",
      value: function group(groupType, groupKey, groupPropertiesToSet) {
        if (!groupType || !groupKey) {
          console.error('posthog.group requires a group type and group key');
          return;
        }

        this._captureMetrics.incr('group');

        var existingGroups = this.getGroups();
        this.register({
          $groups: _objectSpread2(_objectSpread2({}, existingGroups), {}, _defineProperty({}, groupType, groupKey))
        });

        if (groupPropertiesToSet) {
          this.capture('$groupidentify', {
            $group_type: groupType,
            $group_key: groupKey,
            $group_set: groupPropertiesToSet
          });
        } // If groups change, reload feature flags.


        if (existingGroups[groupType] !== groupKey) {
          this.reloadFeatureFlags();
        }
      }
      /**
       * Clears super properties and generates a new random distinct_id for this instance.
       * Useful for clearing data when a user logs out.
       */

    }, {
      key: "reset",
      value: function reset(reset_device_id) {
        var device_id = this.get_property('$device_id');
        this.persistence.clear();
        this.sessionManager.resetSessionId();
        var uuid = this.get_config('get_device_id')(_UUID());
        this.register_once({
          distinct_id: uuid,
          $device_id: reset_device_id ? uuid : device_id
        }, '');
      }
      /**
       * Returns the current distinct id of the user. This is either the id automatically
       * generated by the library or the id that has been passed by a call to identify().
       *
       * ### Notes:
       *
       * get_distinct_id() can only be called after the PostHog library has finished loading.
       * init() has a loaded function available to handle this automatically. For example:
       *
       *     // set distinct_id after the posthog library has loaded
       *     posthog.init('YOUR PROJECT TOKEN', {
       *         loaded: function(posthog) {
       *             distinct_id = posthog.get_distinct_id();
       *         }
       *     });
       */

    }, {
      key: "get_distinct_id",
      value: function get_distinct_id() {
        return this.get_property('distinct_id');
      }
    }, {
      key: "getGroups",
      value: function getGroups() {
        return this.get_property('$groups') || {};
      }
      /**
       * Create an alias, which PostHog will use to link two distinct_ids going forward (not retroactively).
       * Multiple aliases can map to the same original ID, but not vice-versa. Aliases can also be chained - the
       * following is a valid scenario:
       *
       *     posthog.alias('new_id', 'existing_id');
       *     ...
       *     posthog.alias('newer_id', 'new_id');
       *
       * If the original ID is not passed in, we will use the current distinct_id - probably the auto-generated GUID.
       *
       * ### Notes:
       *
       * The best practice is to call alias() when a unique ID is first created for a user
       * (e.g., when a user first registers for an account and provides an email address).
       * alias() should never be called more than once for a given user, except to
       * chain a newer ID to a previously new ID, as described above.
       *
       * @param {String} alias A unique identifier that you want to use for this user in the future.
       * @param {String} [original] The current identifier being used for this user.
       */

    }, {
      key: "alias",
      value: function alias(_alias, original) {
        // If the $people_distinct_id key exists in persistence, there has been a previous
        // posthog.people.identify() call made for this user. It is VERY BAD to make an alias with
        // this ID, as it will duplicate users.
        if (_alias === this.get_property(PEOPLE_DISTINCT_ID_KEY)) {
          logger.critical('Attempting to create alias for existing People user - aborting.');
          return -2;
        }

        if (_isUndefined(original)) {
          original = this.get_distinct_id();
        }

        if (_alias !== original) {
          this._register_single(ALIAS_ID_KEY, _alias);

          return this.capture('$create_alias', {
            alias: _alias,
            distinct_id: original
          });
        } else {
          console.error('alias matches current distinct_id - skipping api call.');
          this.identify(_alias);
          return -1;
        }
      }
      /**
       * Update the configuration of a posthog library instance.
       *
       * The default config is:
       *
       *     {
       *       // Posthog host
       *       api_host: 'https://app.posthog.com',
       *
       *       // HTTP method for capturing requests
       *       api_method: 'POST'
       *
       *       // Automatically capture clicks, form submissions and change events
       *       autocapture: true
       *
       *       // Capture rage clicks (beta) - useful for session recording
       *       rageclick: false
       *
       *       // transport for sending requests ('XHR' or 'sendBeacon')
       *       // NB: sendBeacon should only be used for scenarios such as
       *       // page unload where a "best-effort" attempt to send is
       *       // acceptable; the sendBeacon API does not support callbacks
       *       // or any way to know the result of the request. PostHog
       *       // capturing via sendBeacon will not support any event-
       *       // batching or retry mechanisms.
       *       api_transport: 'XHR'
       *
       *       // super properties cookie expiration (in days)
       *       cookie_expiration: 365
       *
       *       // super properties span subdomains
       *       cross_subdomain_cookie: true
       *
       *       // debug mode
       *       debug: false
       *
       *       // if this is true, the posthog cookie or localStorage entry
       *       // will be deleted, and no user persistence will take place
       *       disable_persistence: false
       *
       *       // if this is true, PostHog will automatically determine
       *       // City, Region and Country data using the IP address of
       *       //the client
       *       ip: true
       *
       *       // opt users out of capturing by this PostHog instance by default
       *       opt_out_capturing_by_default: false
       *
       *       // opt users out of browser data storage by this PostHog instance by default
       *       opt_out_persistence_by_default: false
       *
       *       // persistence mechanism used by opt-in/opt-out methods - cookie
       *       // or localStorage - falls back to cookie if localStorage is unavailable
       *       opt_out_capturing_persistence_type: 'localStorage'
       *
       *       // customize the name of cookie/localStorage set by opt-in/opt-out methods
       *       opt_out_capturing_cookie_prefix: null
       *
       *       // type of persistent store for super properties (cookie/
       *       // localStorage) if set to 'localStorage', any existing
       *       // posthog cookie value with the same persistence_name
       *       // will be transferred to localStorage and deleted
       *       persistence: 'cookie'
       *
       *       // name for super properties persistent store
       *       persistence_name: ''
       *
       *       // names of properties/superproperties which should never
       *       // be sent with capture() calls
       *       property_blacklist: []
       *
       *       // if this is true, posthog cookies will be marked as
       *       // secure, meaning they will only be transmitted over https
       *       secure_cookie: false
       *
       *       // should we capture a page view on page load
       *       capture_pageview: true
       *
       *       // if you set upgrade to be true, the library will check for
       *       // a cookie from our old js library and import super
       *       // properties from it, then the old cookie is deleted
       *       // The upgrade config option only works in the initialization,
       *       // so make sure you set it when you create the library.
       *       upgrade: false
       *
       *       // if this is true, session recording is always disabled.
       *       disable_session_recording: false,
       *
       *       // extra HTTP request headers to set for each API request, in
       *       // the format {'Header-Name': value}
       *       xhr_headers: {}
       *
       *       // protocol for fetching in-app message resources, e.g.
       *       // 'https://' or 'http://'; defaults to '//' (which defers to the
       *       // current page's protocol)
       *       inapp_protocol: '//'
       *
       *       // whether to open in-app message link in new tab/window
       *       inapp_link_new_window: false
       *
       *      // a set of rrweb config options that PostHog users can configure
       *      // see https://github.com/rrweb-io/rrweb/blob/master/guide.md
       *      session_recording: {
       *         blockClass: 'ph-no-capture',
       *         blockSelector: null,
       *         ignoreClass: 'ph-ignore-input',
       *         maskAllInputs: true,
       *         maskInputOptions: {},
       *         maskInputFn: null,
       *         slimDOMOptions: {},
       *         collectFonts: false
       *      }
       *
       *      // prevent autocapture from capturing any attribute names on elements
       *      mask_all_element_attributes: false
       *
       *      // prevent autocapture from capturing textContent on all elements
       *      mask_all_text: false
       *
       *      // Anonymous users get a random UUID as their device by default.
       *      // This option allows overriding that option.
       *      get_device_id: (uuid) => uuid
       *     }
       *
       *
       * @param {Object} config A dictionary of new configuration values to update
       */

    }, {
      key: "set_config",
      value: function set_config(config) {
        var oldConfig = _objectSpread2({}, this.config);

        if (_isObject(config)) {
          _extend(this.config, config);

          if (!this.get_config('persistence_name')) {
            this.config.persistence_name = this.config.cookie_name;
          }

          if (!this.get_config('disable_persistence')) {
            this.config.disable_persistence = this.config.disable_cookie;
          }

          if (this.persistence) {
            this.persistence.update_config(this.config);
          }

          if (localStore.is_supported() && localStore.get('ph_debug') === 'true') {
            this.config.debug = true;
          }

          if (this.get_config('debug')) {
            Config.DEBUG = true;
          }

          if (this.sessionRecording && typeof config.disable_session_recording !== 'undefined') {
            if (oldConfig.disable_session_recording !== config.disable_session_recording) {
              if (config.disable_session_recording) {
                this.sessionRecording.stopRecording();
              } else {
                this.sessionRecording.startRecordingIfEnabled();
              }
            }
          }
        }
      }
      /**
       * turns session recording on, and updates the config option
       * disable_session_recording to false
       */

    }, {
      key: "startSessionRecording",
      value: function startSessionRecording() {
        this.set_config({
          disable_session_recording: false
        });
      }
      /**
       * turns session recording off, and updates the config option
       * disable_session_recording to true
       */

    }, {
      key: "stopSessionRecording",
      value: function stopSessionRecording() {
        this.set_config({
          disable_session_recording: true
        });
      }
      /**
       * returns a boolean indicating whether session recording
       * is currently running
       */

    }, {
      key: "sessionRecordingStarted",
      value: function sessionRecordingStarted() {
        var _this$sessionRecordin;

        return !!((_this$sessionRecordin = this.sessionRecording) !== null && _this$sessionRecordin !== void 0 && _this$sessionRecordin.started());
      }
      /**
       * returns a boolean indicating whether the toolbar loaded
       * @param toolbarParams
       */

    }, {
      key: "loadToolbar",
      value: function loadToolbar(params) {
        return this.toolbar.loadToolbar(params);
      }
      /**
       * returns the current config object for the library.
       */

    }, {
      key: "get_config",
      value: function get_config(prop_name) {
        var _this$config;

        return (_this$config = this.config) === null || _this$config === void 0 ? void 0 : _this$config[prop_name];
      }
      /**
       * Returns the value of the super property named property_name. If no such
       * property is set, get_property() will return the undefined value.
       *
       * ### Notes:
       *
       * get_property() can only be called after the PostHog library has finished loading.
       * init() has a loaded function available to handle this automatically. For example:
       *
       *     // grab value for 'user_id' after the posthog library has loaded
       *     posthog.init('YOUR PROJECT TOKEN', {
       *         loaded: function(posthog) {
       *             user_id = posthog.get_property('user_id');
       *         }
       *     });
       *
       * @param {String} property_name The name of the super property you want to retrieve
       */

    }, {
      key: "get_property",
      value: function get_property(property_name) {
        return this.persistence['props'][property_name];
      }
    }, {
      key: "toString",
      value: function toString() {
        var _this$get_config;

        var name = (_this$get_config = this.get_config('name')) !== null && _this$get_config !== void 0 ? _this$get_config : PRIMARY_INSTANCE_NAME;

        if (name !== PRIMARY_INSTANCE_NAME) {
          name = PRIMARY_INSTANCE_NAME + '.' + name;
        }

        return name;
      } // perform some housekeeping around GDPR opt-in/out state

    }, {
      key: "_gdpr_init",
      value: function _gdpr_init() {
        var is_localStorage_requested = this.get_config('opt_out_capturing_persistence_type') === 'localStorage'; // try to convert opt-in/out cookies to localStorage if possible

        if (is_localStorage_requested && localStore.is_supported()) {
          if (!this.has_opted_in_capturing() && this.has_opted_in_capturing({
            persistence_type: 'cookie'
          })) {
            this.opt_in_capturing({
              enable_persistence: false
            });
          }

          if (!this.has_opted_out_capturing() && this.has_opted_out_capturing({
            persistence_type: 'cookie'
          })) {
            this.opt_out_capturing({
              clear_persistence: false
            });
          }

          this.clear_opt_in_out_capturing({
            persistence_type: 'cookie',
            enable_persistence: false
          });
        } // check whether the user has already opted out - if so, clear & disable persistence


        if (this.has_opted_out_capturing()) {
          this._gdpr_update_persistence({
            clear_persistence: true
          }); // check whether we should opt out by default
          // note: we don't clear persistence here by default since opt-out default state is often
          //       used as an initial state while GDPR information is being collected

        } else if (!this.has_opted_in_capturing() && (this.get_config('opt_out_capturing_by_default') || cookieStore.get('ph_optout'))) {
          cookieStore.remove('ph_optout');
          this.opt_out_capturing({
            clear_persistence: this.get_config('opt_out_persistence_by_default')
          });
        }
      }
      /**
       * Enable or disable persistence based on options
       * only enable/disable if persistence is not already in this state
       * @param {boolean} [options.clear_persistence] If true, will delete all data stored by the sdk in persistence and disable it
       * @param {boolean} [options.enable_persistence] If true, will re-enable sdk persistence
       */

    }, {
      key: "_gdpr_update_persistence",
      value: function _gdpr_update_persistence(options) {
        var disabled;

        if (options && options['clear_persistence']) {
          disabled = true;
        } else if (options && options['enable_persistence']) {
          disabled = false;
        } else {
          return;
        }

        if (!this.get_config('disable_persistence') && this.persistence.disabled !== disabled) {
          this.persistence.set_disabled(disabled);
        }
      } // call a base gdpr function after constructing the appropriate token and options args

    }, {
      key: "_gdpr_call_func",
      value: function _gdpr_call_func(func, options) {
        options = _extend({
          capture: this.capture.bind(this),
          persistence_type: this.get_config('opt_out_capturing_persistence_type'),
          cookie_prefix: this.get_config('opt_out_capturing_cookie_prefix'),
          cookie_expiration: this.get_config('cookie_expiration'),
          cross_subdomain_cookie: this.get_config('cross_subdomain_cookie'),
          secure_cookie: this.get_config('secure_cookie')
        }, options || {}); // check if localStorage can be used for recording opt out status, fall back to cookie if not

        if (!localStore.is_supported() && options['persistence_type'] === 'localStorage') {
          options['persistence_type'] = 'cookie';
        }

        return func(this.get_config('token'), {
          capture: options['capture'],
          captureEventName: options['capture_event_name'],
          captureProperties: options['capture_properties'],
          persistenceType: options['persistence_type'],
          persistencePrefix: options['cookie_prefix'],
          cookieExpiration: options['cookie_expiration'],
          crossSubdomainCookie: options['cross_subdomain_cookie'],
          secureCookie: options['secure_cookie']
        });
      }
      /**
       * Opt the user in to data capturing and cookies/localstorage for this PostHog instance
       *
       * ### Usage
       *
       *     // opt user in
       *     posthog.opt_in_capturing();
       *
       *     // opt user in with specific event name, properties, cookie configuration
       *     posthog.opt_in_capturing({
       *         capture_event_name: 'User opted in',
       *         capture_event_properties: {
       *             'Email': 'jdoe@example.com'
       *         },
       *         cookie_expiration: 30,
       *         secure_cookie: true
       *     });
       *
       * @param {Object} [options] A dictionary of config options to override
       * @param {function} [options.capture] Function used for capturing a PostHog event to record the opt-in action (default is this PostHog instance's capture method)
       * @param {string} [options.capture_event_name=$opt_in] Event name to be used for capturing the opt-in action
       * @param {Object} [options.capture_properties] Set of properties to be captured along with the opt-in action
       * @param {boolean} [options.enable_persistence=true] If true, will re-enable sdk persistence
       * @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
       * @param {string} [options.cookie_prefix=__ph_opt_in_out] Custom prefix to be used in the cookie/localstorage name
       * @param {Number} [options.cookie_expiration] Number of days until the opt-in cookie expires (overrides value specified in this PostHog instance's config)
       * @param {boolean} [options.cross_subdomain_cookie] Whether the opt-in cookie is set as cross-subdomain or not (overrides value specified in this PostHog instance's config)
       * @param {boolean} [options.secure_cookie] Whether the opt-in cookie is set as secure or not (overrides value specified in this PostHog instance's config)
       */

    }, {
      key: "opt_in_capturing",
      value: function opt_in_capturing(options) {
        options = _extend({
          enable_persistence: true
        }, options || {});

        this._gdpr_call_func(optIn, options);

        this._gdpr_update_persistence(options);
      }
      /**
       * Opt the user out of data capturing and cookies/localstorage for this PostHog instance
       *
       * ### Usage
       *
       *     // opt user out
       *     posthog.opt_out_capturing();
       *
       *     // opt user out with different cookie configuration from PostHog instance
       *     posthog.opt_out_capturing({
       *         cookie_expiration: 30,
       *         secure_cookie: true
       *     });
       *
       * @param {Object} [options] A dictionary of config options to override
       * @param {boolean} [options.clear_persistence=true] If true, will delete all data stored by the sdk in persistence
       * @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
       * @param {string} [options.cookie_prefix=__ph_opt_in_out] Custom prefix to be used in the cookie/localstorage name
       * @param {Number} [options.cookie_expiration] Number of days until the opt-in cookie expires (overrides value specified in this PostHog instance's config)
       * @param {boolean} [options.cross_subdomain_cookie] Whether the opt-in cookie is set as cross-subdomain or not (overrides value specified in this PostHog instance's config)
       * @param {boolean} [options.secure_cookie] Whether the opt-in cookie is set as secure or not (overrides value specified in this PostHog instance's config)
       */

    }, {
      key: "opt_out_capturing",
      value: function opt_out_capturing(options) {
        var _options = _extend({
          clear_persistence: true
        }, options || {});

        this._gdpr_call_func(optOut, _options);

        this._gdpr_update_persistence(_options);
      }
      /**
       * Check whether the user has opted in to data capturing and cookies/localstorage for this PostHog instance
       *
       * ### Usage
       *
       *     const has_opted_in = posthog.has_opted_in_capturing();
       *     // use has_opted_in value
       *
       * @param {Object} [options] A dictionary of config options to override
       * @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
       * @param {string} [options.cookie_prefix=__ph_opt_in_out] Custom prefix to be used in the cookie/localstorage name
       * @returns {boolean} current opt-in status
       */

    }, {
      key: "has_opted_in_capturing",
      value: function has_opted_in_capturing(options) {
        return this._gdpr_call_func(hasOptedIn, options);
      }
      /**
       * Check whether the user has opted out of data capturing and cookies/localstorage for this PostHog instance
       *
       * ### Usage
       *
       *     const has_opted_out = posthog.has_opted_out_capturing();
       *     // use has_opted_out value
       *
       * @param {Object} [options] A dictionary of config options to override
       * @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
       * @param {string} [options.cookie_prefix=__ph_opt_in_out] Custom prefix to be used in the cookie/localstorage name
       * @returns {boolean} current opt-out status
       */

    }, {
      key: "has_opted_out_capturing",
      value: function has_opted_out_capturing(options) {
        return this._gdpr_call_func(hasOptedOut, options);
      }
      /**
       * Clear the user's opt in/out status of data capturing and cookies/localstorage for this PostHog instance
       *
       * ### Usage
       *
       *     // clear user's opt-in/out status
       *     posthog.clear_opt_in_out_capturing();
       *
       *     // clear user's opt-in/out status with specific cookie configuration - should match
       *     // configuration used when opt_in_capturing/opt_out_capturing methods were called.
       *     posthog.clear_opt_in_out_capturing({
       *         cookie_expiration: 30,
       *         secure_cookie: true
       *     });
       *
       * @param {Object} [options] A dictionary of config options to override
       * @param {boolean} [options.enable_persistence=true] If true, will re-enable sdk persistence
       * @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
       * @param {string} [options.cookie_prefix=__ph_opt_in_out] Custom prefix to be used in the cookie/localstorage name
       * @param {Number} [options.cookie_expiration] Number of days until the opt-in cookie expires (overrides value specified in this PostHog instance's config)
       * @param {boolean} [options.cross_subdomain_cookie] Whether the opt-in cookie is set as cross-subdomain or not (overrides value specified in this PostHog instance's config)
       * @param {boolean} [options.secure_cookie] Whether the opt-in cookie is set as secure or not (overrides value specified in this PostHog instance's config)
       */

    }, {
      key: "clear_opt_in_out_capturing",
      value: function clear_opt_in_out_capturing(options) {
        var _options = _extend({
          enable_persistence: true
        }, options !== null && options !== void 0 ? options : {});

        this._gdpr_call_func(clearOptInOut, _options);

        this._gdpr_update_persistence(_options);
      }
    }, {
      key: "debug",
      value: function debug(_debug) {
        if (_debug === false) {
          win.console.log("You've disabled debug mode.");
          localStorage && localStorage.removeItem('ph_debug');
          this.set_config({
            debug: false
          });
        } else {
          win.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`.");
          localStorage && localStorage.setItem('ph_debug', 'true');
          this.set_config({
            debug: true
          });
        }
      }
    }, {
      key: "decodeLZ64",
      value: function decodeLZ64(input) {
        return LZString.decompressFromBase64(input || null);
      }
    }]);

    return PostHog;
  }();

  _safewrap_class(PostHog, ['identify']);

  var instances = {};

  var extend_mp = function extend_mp() {
    // add all the sub posthog instances
    _each(instances, function (instance, name) {
      if (name !== PRIMARY_INSTANCE_NAME) {
        posthog_master[name] = instance;
      }
    });
  };

  var override_ph_init_func = function override_ph_init_func() {
    // we override the snippets init function to handle the case where a
    // user initializes the posthog library after the script loads & runs
    posthog_master['init'] = function (token, config, name) {
      if (name) {
        // initialize a sub library
        if (!posthog_master[name]) {
          posthog_master[name] = instances[name] = create_mplib(token || '', config || {}, name);

          posthog_master[name]._loaded();
        }

        return posthog_master[name];
      } else {
        var instance = posthog_master;

        if (instances[PRIMARY_INSTANCE_NAME]) {
          // main posthog lib already initialized
          instance = instances[PRIMARY_INSTANCE_NAME];
        } else if (token) {
          // intialize the main posthog lib
          instance = create_mplib(token, config || {}, PRIMARY_INSTANCE_NAME);

          instance._loaded();

          instances[PRIMARY_INSTANCE_NAME] = instance;
        }
        posthog_master = instance;

        if (init_type === InitType.INIT_SNIPPET) {
          win[PRIMARY_INSTANCE_NAME] = posthog_master;
        }

        extend_mp();
        return instance;
      }
    };
  };

  var add_dom_loaded_handler = function add_dom_loaded_handler() {
    // Cross browser DOM Loaded support
    function dom_loaded_handler() {
      // function flag since we only want to execute this once
      if (dom_loaded_handler.done) {
        return;
      }
      dom_loaded_handler.done = true;
      ENQUEUE_REQUESTS = false;

      _each(instances, function (inst) {
        inst._dom_loaded();
      });
    }

    if (document$1.addEventListener) {
      if (document$1.readyState === 'complete') {
        // safari 4 can fire the DOMContentLoaded event before loading all
        // external JS (including this file). you will see some copypasta
        // on the internet that checks for 'complete' and 'loaded', but
        // 'loaded' is an IE thing
        dom_loaded_handler();
      } else {
        document$1.addEventListener('DOMContentLoaded', dom_loaded_handler, false);
      }
    } // fallback handler, always will work


    _register_event(win, 'load', dom_loaded_handler, true);
  };
  function init_as_module() {
    init_type = InitType.INIT_MODULE;
    posthog_master = new PostHog();
    override_ph_init_func();
    posthog_master['init']();
    add_dom_loaded_handler();
    return posthog_master;
  }

  var posthog = init_as_module();

  try {
    posthog.init("phc_xRCv3qbbOBMQkz31kbYMngXxn7Ey5JMu0BZIFktO6km", {
      api_host: "https://app.posthog.com",
      autocapture: false,
      disable_session_recording: true
    });
    const PLUGIN_NAME = "posthog";
    console.log(`Plugin ${PLUGIN_NAME} is loaded`);
    setTimeout(() => {
      console.log("Report plugin install status");
      try {
        const d = window.localStorage["$TailchatInstalledPlugins"];
        if (!d) {
          posthog.capture("Report Plugin", {
            plugins: [],
            pluginNum: 0,
            pluginRaw: ""
          });
          return;
        }
        const storage = JSON.parse(d);
        const list = storage.rawData;
        if (!list || !Array.isArray(list)) {
          return;
        }
        posthog.capture("Report Plugin", {
          plugins: list.map((item) => item.name),
          pluginNum: list.length,
          pluginRaw: JSON.stringify(list)
        });
      } catch (err) {
      }
    }, 2e3);
    common.sharedEvent.on("loginSuccess", (userInfo) => {
      posthog.identify(userInfo._id, {
        email: userInfo.email,
        username: `${userInfo.nickname}#${userInfo.discriminator}`,
        avatar: userInfo.avatar,
        temporary: userInfo.temporary
      });
    });
    common.sharedEvent.on("appLoaded", () => {
      posthog.capture("App Loaded", {
        usage: performance.now()
      });
    });
  } catch (err) {
    console.error(err);
  }

}));
//# sourceMappingURL=index.js.map
