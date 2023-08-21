definePlugin('@plugins/com.msgbyte.bbcode/parser-34594393.js', ['exports', 'react'], (function (exports, React) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var dist = {exports: {}};

	(function (module, exports) {
	(function (global, factory) {
	    factory(exports) ;
	})(commonjsGlobal, (function (exports) {
	    var TagNode$1 = {};

	    var char = {};

	    Object.defineProperty(char, "__esModule", {
	        value: true
	    });
	    var BACKSLASH_1 = char.BACKSLASH = char.PLACEHOLDER_SPACE = char.PLACEHOLDER_SPACE_TAB = SLASH_1 = char.SLASH = CLOSE_BRAKET_1 = char.CLOSE_BRAKET = OPEN_BRAKET_1 = char.OPEN_BRAKET = SPACE_1 = char.SPACE = QUOTEMARK_1 = char.QUOTEMARK = EQ_1 = char.EQ = TAB_1 = char.TAB = char.R = char.F = N_1 = char.N = void 0;
	    var N = '\n';
	    var TAB = '\t';
	    var F = '\f';
	    var R = '\r';
	    var EQ = '=';
	    var QUOTEMARK = '"';
	    var SPACE = ' ';
	    var OPEN_BRAKET = '[';
	    var CLOSE_BRAKET = ']';
	    var SLASH = '/';
	    var BACKSLASH = '\\';
	    var PLACEHOLDER_SPACE_TAB = '    ';
	    var PLACEHOLDER_SPACE = ' ';
	    var N_1 = char.N = N;
	    char.F = F;
	    char.R = R;
	    var TAB_1 = char.TAB = TAB;
	    var EQ_1 = char.EQ = EQ;
	    var QUOTEMARK_1 = char.QUOTEMARK = QUOTEMARK;
	    var SPACE_1 = char.SPACE = SPACE;
	    var OPEN_BRAKET_1 = char.OPEN_BRAKET = OPEN_BRAKET;
	    var CLOSE_BRAKET_1 = char.CLOSE_BRAKET = CLOSE_BRAKET;
	    var SLASH_1 = char.SLASH = SLASH;
	    char.PLACEHOLDER_SPACE_TAB = PLACEHOLDER_SPACE_TAB;
	    char.PLACEHOLDER_SPACE = PLACEHOLDER_SPACE;
	    BACKSLASH_1 = char.BACKSLASH = BACKSLASH;

	    var lib = {};

	    Object.defineProperty(lib, "__esModule", {
	        value: true
	    });
	    lib.isEOL = lib.isStringNode = isTagNode_1 = lib.isTagNode = lib.getUniqAttr = lib.getNodeLength = lib.escapeHTML = lib.appendToNode = lib.attrValue = lib.attrsToString = void 0;
	    var _char$1 = char;
	    function _arrayWithoutHoles(arr) {
	        if (Array.isArray(arr)) {
	            for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
	                arr2[i] = arr[i];
	            }
	            return arr2;
	        }
	    }
	    function _iterableToArray(iter) {
	        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
	    }
	    function _nonIterableSpread() {
	        throw new TypeError("Invalid attempt to spread non-iterable instance");
	    }
	    function _toConsumableArray(arr) {
	        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
	    }
	    var _typeof = function(obj) {
	        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
	    };
	    var isTagNode = function(el) {
	        return typeof el === 'object' && !!el.tag;
	    };
	    var isStringNode = function(el) {
	        return typeof el === 'string';
	    };
	    var isEOL = function(el) {
	        return el === _char$1.N;
	    };
	    var keysReduce = function(obj, reduce, def) {
	        return Object.keys(obj).reduce(reduce, def);
	    };
	    var getNodeLength = function(node) {
	        if (isTagNode(node)) {
	            return node.content.reduce(function(count, contentNode) {
	                return count + getNodeLength(contentNode);
	            }, 0);
	        }
	        if (isStringNode(node)) {
	            return node.length;
	        }
	        return 0;
	    };
	    /**
	     * Appends value to Tag Node
	     * @param {TagNode} node
	     * @param value
	     */ var appendToNode = function(node, value) {
	        node.content.push(value);
	    };
	    /**
	     * Replaces " to &qquot;
	     * @param {String} value
	     */ var escapeHTML = function(value) {
	        return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;')// eslint-disable-next-line no-script-url
	        .replace(/(javascript):/gi, '$1%3A');
	    };
	    /**
	     * Acept name and value and return valid html5 attribute string
	     * @param {String} name
	     * @param {String} value
	     * @return {string}
	     */ var attrValue = function(name, value) {
	        var type = typeof value === "undefined" ? "undefined" : _typeof(value);
	        var types = {
	            boolean: function() {
	                return value ? "".concat(name) : '';
	            },
	            number: function() {
	                return "".concat(name, "=\"").concat(value, "\"");
	            },
	            string: function() {
	                return "".concat(name, "=\"").concat(escapeHTML(value), "\"");
	            },
	            object: function() {
	                return "".concat(name, "=\"").concat(escapeHTML(JSON.stringify(value)), "\"");
	            }
	        };
	        return types[type] ? types[type]() : '';
	    };
	    /**
	     * Transforms attrs to html params string
	     * @param values
	     */ var attrsToString = function(values) {
	        // To avoid some malformed attributes
	        if (values == null) {
	            return '';
	        }
	        return keysReduce(values, function(arr, key) {
	            return _toConsumableArray(arr).concat([
	                attrValue(key, values[key])
	            ]);
	        }, [
	            ''
	        ]).join(' ');
	    };
	    /**
	     * Gets value from
	     * @example
	     * getUniqAttr({ 'foo': true, 'bar': bar' }) => 'bar'
	     * @param attrs
	     * @returns {string}
	     */ var getUniqAttr = function(attrs) {
	        return keysReduce(attrs, function(res, key) {
	            return attrs[key] === key ? attrs[key] : null;
	        }, null);
	    };
	    lib.attrsToString = attrsToString;
	    lib.attrValue = attrValue;
	    lib.appendToNode = appendToNode;
	    lib.escapeHTML = escapeHTML;
	    lib.getNodeLength = getNodeLength;
	    lib.getUniqAttr = getUniqAttr;
	    var isTagNode_1 = lib.isTagNode = isTagNode;
	    lib.isStringNode = isStringNode;
	    lib.isEOL = isEOL;

	    Object.defineProperty(TagNode$1, "__esModule", {
	        value: true
	    });
	    var default_1 = TagNode$1.default = exports.TagNode = TagNode$1.TagNode = void 0;
	    var _char = char;
	    var _index = lib;
	    function _classCallCheck$1(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }
	    function _defineProperties$1(target, props) {
	        for(var i = 0; i < props.length; i++){
	            var descriptor = props[i];
	            descriptor.enumerable = descriptor.enumerable || false;
	            descriptor.configurable = true;
	            if ("value" in descriptor) descriptor.writable = true;
	            Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }
	    function _createClass$1(Constructor, protoProps, staticProps) {
	        if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
	        if (staticProps) _defineProperties$1(Constructor, staticProps);
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
	    function _objectSpread(target) {
	        for(var i = 1; i < arguments.length; i++){
	            var source = arguments[i] != null ? arguments[i] : {
	            };
	            var ownKeys = Object.keys(source);
	            if (typeof Object.getOwnPropertySymbols === "function") {
	                ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
	                    return Object.getOwnPropertyDescriptor(source, sym).enumerable;
	                }));
	            }
	            ownKeys.forEach(function(key) {
	                _defineProperty(target, key, source[key]);
	            });
	        }
	        return target;
	    }
	    var getTagAttrs = function(tag, params) {
	        var uniqAattr = (_index).getUniqAttr(params);
	        if (uniqAattr) {
	            var tagAttr = (_index).attrValue(tag, uniqAattr);
	            var attrs = _objectSpread({
	            }, params);
	            delete attrs[uniqAattr];
	            var attrsStr = (_index).attrsToString(attrs);
	            return "".concat(tagAttr).concat(attrsStr);
	        }
	        return "".concat(tag).concat((_index).attrsToString(params));
	    };
	    var TagNode = /*#__PURE__*/ function() {
	        function TagNode(tag, attrs, content) {
	            _classCallCheck$1(this, TagNode);
	            this.tag = tag;
	            this.attrs = attrs;
	            this.content = Array.isArray(content) ? content : [
	                content
	            ];
	        }
	        _createClass$1(TagNode, [
	            {
	                key: "attr",
	                value: function attr(name, value) {
	                    if (typeof value !== 'undefined') {
	                        this.attrs[name] = value;
	                    }
	                    return this.attrs[name];
	                }
	            },
	            {
	                key: "append",
	                value: function append(value) {
	                    return (_index).appendToNode(this, value);
	                }
	            },
	            {
	                key: "length",
	                get: function get() {
	                    return (_index).getNodeLength(this);
	                }
	            },
	            {
	                key: "toTagStart",
	                value: function toTagStart(param) {
	                    var ref = param === void 0 ? {
	                    } : param, _openTag = ref.openTag, openTag = _openTag === void 0 ? _char.OPEN_BRAKET : _openTag, _closeTag = ref.closeTag, closeTag = _closeTag === void 0 ? _char.CLOSE_BRAKET : _closeTag;
	                    var tagAttrs = getTagAttrs(this.tag, this.attrs);
	                    return "".concat(openTag).concat(tagAttrs).concat(closeTag);
	                }
	            },
	            {
	                key: "toTagEnd",
	                value: function toTagEnd(param) {
	                    var ref = param === void 0 ? {
	                    } : param, _openTag = ref.openTag, openTag = _openTag === void 0 ? _char.OPEN_BRAKET : _openTag, _closeTag = ref.closeTag, closeTag = _closeTag === void 0 ? _char.CLOSE_BRAKET : _closeTag;
	                    return "".concat(openTag).concat(_char.SLASH).concat(this.tag).concat(closeTag);
	                }
	            },
	            {
	                key: "toTagNode",
	                value: function toTagNode() {
	                    return new TagNode(this.tag.toLowerCase(), this.attrs, this.content);
	                }
	            },
	            {
	                key: "toString",
	                value: function toString(param) {
	                    var ref = param === void 0 ? {
	                    } : param, _openTag = ref.openTag, openTag = _openTag === void 0 ? _char.OPEN_BRAKET : _openTag, _closeTag = ref.closeTag, closeTag = _closeTag === void 0 ? _char.CLOSE_BRAKET : _closeTag;
	                    var isEmpty = this.content.length === 0;
	                    var content = this.content.reduce(function(r, node) {
	                        return r + node.toString({
	                            openTag: openTag,
	                            closeTag: closeTag
	                        });
	                    }, '');
	                    var tagStart = this.toTagStart({
	                        openTag: openTag,
	                        closeTag: closeTag
	                    });
	                    if (isEmpty) {
	                        return tagStart;
	                    }
	                    return "".concat(tagStart).concat(content).concat(this.toTagEnd({
	                        openTag: openTag,
	                        closeTag: closeTag
	                    }));
	                }
	            }
	        ]);
	        return TagNode;
	    }();
	    TagNode.create = function(tag, param, param1) {
	        var attrs = param === void 0 ? {
	        } : param, content = param1 === void 0 ? [] : param1;
	        return new TagNode(tag, attrs, content);
	    };
	    TagNode.isOf = function(node, type) {
	        return node.tag === type;
	    };
	    exports.TagNode = TagNode$1.TagNode = TagNode;
	    var _default = TagNode;
	    default_1 = TagNode$1.default = _default;

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }
	    function _defineProperties(target, props) {
	        for(var i = 0; i < props.length; i++){
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
	        return Constructor;
	    }
	    // type, value, line, row,
	    var TOKEN_TYPE_ID = 'type'; // 0;
	    var TOKEN_VALUE_ID = 'value'; // 1;
	    var TOKEN_COLUMN_ID = 'row'; // 2;
	    var TOKEN_LINE_ID = 'line'; // 3;
	    var TOKEN_TYPE_WORD = 1; // 'word';
	    var TOKEN_TYPE_TAG = 2; // 'tag';
	    var TOKEN_TYPE_ATTR_NAME = 3; // 'attr-name';
	    var TOKEN_TYPE_ATTR_VALUE = 4; // 'attr-value';
	    var TOKEN_TYPE_SPACE = 5; // 'space';
	    var TOKEN_TYPE_NEW_LINE = 6; // 'new-line';
	    /**
	     * @param {Token} token
	     * @returns {string}
	     */ var getTokenValue = function(token) {
	        if (token && typeof token[TOKEN_VALUE_ID] !== 'undefined') {
	            return token[TOKEN_VALUE_ID];
	        }
	        return '';
	    };
	    /**
	     * @param {Token}token
	     * @returns {number}
	     */ var getTokenLine = function(token) {
	        return token && token[TOKEN_LINE_ID] || 0;
	    };
	    var getTokenColumn = function(token) {
	        return token && token[TOKEN_COLUMN_ID] || 0;
	    };
	    /**
	     * @param {Token} token
	     * @returns {boolean}
	     */ var isTextToken = function(token) {
	        if (token && typeof token[TOKEN_TYPE_ID] !== 'undefined') {
	            return token[TOKEN_TYPE_ID] === TOKEN_TYPE_SPACE || token[TOKEN_TYPE_ID] === TOKEN_TYPE_NEW_LINE || token[TOKEN_TYPE_ID] === TOKEN_TYPE_WORD;
	        }
	        return false;
	    };
	    /**
	     * @param {Token} token
	     * @returns {boolean}
	     */ var isTagToken = function(token) {
	        if (token && typeof token[TOKEN_TYPE_ID] !== 'undefined') {
	            return token[TOKEN_TYPE_ID] === TOKEN_TYPE_TAG;
	        }
	        return false;
	    };
	    var isTagEnd = function(token) {
	        return getTokenValue(token).charCodeAt(0) === SLASH_1.charCodeAt(0);
	    };
	    var isTagStart = function(token) {
	        return !isTagEnd(token);
	    };
	    var isAttrNameToken = function(token) {
	        if (token && typeof token[TOKEN_TYPE_ID] !== 'undefined') {
	            return token[TOKEN_TYPE_ID] === TOKEN_TYPE_ATTR_NAME;
	        }
	        return false;
	    };
	    /**
	     * @param {Token} token
	     * @returns {boolean}
	     */ var isAttrValueToken = function(token) {
	        if (token && typeof token[TOKEN_TYPE_ID] !== 'undefined') {
	            return token[TOKEN_TYPE_ID] === TOKEN_TYPE_ATTR_VALUE;
	        }
	        return false;
	    };
	    var getTagName = function(token) {
	        var value = getTokenValue(token);
	        return isTagEnd(token) ? value.slice(1) : value;
	    };
	    var convertTagToText = function(token) {
	        var text = OPEN_BRAKET_1;
	        text += getTokenValue(token);
	        text += CLOSE_BRAKET_1;
	        return text;
	    };
	    var Token = /*#__PURE__*/ function() {
	        function Token(type, value, line, row) {
	            _classCallCheck(this, Token);
	            this[TOKEN_TYPE_ID] = Number(type);
	            this[TOKEN_VALUE_ID] = String(value);
	            this[TOKEN_LINE_ID] = Number(line);
	            this[TOKEN_COLUMN_ID] = Number(row);
	        }
	        _createClass(Token, [
	            {
	                key: "isEmpty",
	                value: function isEmpty() {
	                    // eslint-disable-next-line no-restricted-globals
	                    return isNaN(this[TOKEN_TYPE_ID]);
	                }
	            },
	            {
	                key: "isText",
	                value: function isText() {
	                    return isTextToken(this);
	                }
	            },
	            {
	                key: "isTag",
	                value: function isTag() {
	                    return isTagToken(this);
	                }
	            },
	            {
	                key: "isAttrName",
	                value: function isAttrName() {
	                    return isAttrNameToken(this);
	                }
	            },
	            {
	                key: "isAttrValue",
	                value: function isAttrValue() {
	                    return isAttrValueToken(this);
	                }
	            },
	            {
	                key: "isStart",
	                value: function isStart() {
	                    return isTagStart(this);
	                }
	            },
	            {
	                key: "isEnd",
	                value: function isEnd() {
	                    return isTagEnd(this);
	                }
	            },
	            {
	                key: "getName",
	                value: function getName() {
	                    return getTagName(this);
	                }
	            },
	            {
	                key: "getValue",
	                value: function getValue() {
	                    return getTokenValue(this);
	                }
	            },
	            {
	                key: "getLine",
	                value: function getLine() {
	                    return getTokenLine(this);
	                }
	            },
	            {
	                key: "getColumn",
	                value: function getColumn() {
	                    return getTokenColumn(this);
	                }
	            },
	            {
	                key: "toString",
	                value: function toString() {
	                    return convertTagToText(this);
	                }
	            }
	        ]);
	        return Token;
	    }();
	    var TYPE_WORD = TOKEN_TYPE_WORD;
	    var TYPE_TAG = TOKEN_TYPE_TAG;
	    var TYPE_ATTR_NAME = TOKEN_TYPE_ATTR_NAME;
	    var TYPE_ATTR_VALUE = TOKEN_TYPE_ATTR_VALUE;
	    var TYPE_SPACE = TOKEN_TYPE_SPACE;
	    var TYPE_NEW_LINE = TOKEN_TYPE_NEW_LINE;

	    function CharGrabber(source, options) {
	        var cursor = {
	            pos: 0,
	            len: source.length
	        };
	        var substrUntilChar = function(char) {
	            var pos = cursor.pos;
	            var idx = source.indexOf(char, pos);
	            return idx >= 0 ? source.substr(pos, idx - pos) : '';
	        };
	        var includes = function(val) {
	            return source.indexOf(val, cursor.pos) >= 0;
	        };
	        var hasNext = function() {
	            return cursor.len > cursor.pos;
	        };
	        var isLast = function() {
	            return cursor.pos === cursor.len;
	        };
	        var skip = function(param, silent) {
	            var num = param === void 0 ? 1 : param;
	            cursor.pos += num;
	            if (options && options.onSkip && !silent) {
	                options.onSkip();
	            }
	        };
	        var rest = function() {
	            return source.substr(cursor.pos);
	        };
	        var curr = function() {
	            return source[cursor.pos];
	        };
	        var prev = function() {
	            var prevPos = cursor.pos - 1;
	            return typeof source[prevPos] !== 'undefined' ? source[prevPos] : null;
	        };
	        var next = function() {
	            var nextPos = cursor.pos + 1;
	            return nextPos <= source.length - 1 ? source[nextPos] : null;
	        };
	        var grabWhile = function(cond, silent) {
	            var start = 0;
	            if (hasNext()) {
	                start = cursor.pos;
	                while(hasNext() && cond(curr())){
	                    skip(1, silent);
	                }
	            }
	            return source.substr(start, cursor.pos - start);
	        };
	        /**
	       * @type {skip}
	       */ this.skip = skip;
	        /**
	       * @returns {Boolean}
	       */ this.hasNext = hasNext;
	        /**
	       * @returns {String}
	       */ this.getCurr = curr;
	        /**
	       * @returns {String}
	       */ this.getRest = rest;
	        /**
	       * @returns {String}
	       */ this.getNext = next;
	        /**
	       * @returns {String}
	       */ this.getPrev = prev;
	        /**
	       * @returns {Boolean}
	       */ this.isLast = isLast;
	        /**
	       * @returns {Boolean}
	       */ this.includes = includes;
	        /**
	       * @param {Function} cond
	       * @param {Boolean} silent
	       * @return {String}
	       */ this.grabWhile = grabWhile;
	        /**
	       * Grabs rest of string until it find a char
	       * @param {String} char
	       * @return {String}
	       */ this.substrUntilChar = substrUntilChar;
	    }
	    /**
	     * Creates a grabber wrapper for source string, that helps to iterate over string char by char
	     * @param {String} source
	     * @param {Object} options
	     * @param {Function} options.onSkip
	     * @return CharGrabber
	     */ var createCharGrabber = function(source, options) {
	        return new CharGrabber(source, options);
	    };
	    /**
	     * Trims string from start and end by char
	     * @example
	     *  trimChar('*hello*', '*') ==> 'hello'
	     * @param {String} str
	     * @param {String} charToRemove
	     * @returns {String}
	     */ var trimChar = function(str, charToRemove) {
	        while(str.charAt(0) === charToRemove){
	            // eslint-disable-next-line no-param-reassign
	            str = str.substring(1);
	        }
	        while(str.charAt(str.length - 1) === charToRemove){
	            // eslint-disable-next-line no-param-reassign
	            str = str.substring(0, str.length - 1);
	        }
	        return str;
	    };
	    /**
	     * Unquotes \" to "
	     * @param str
	     * @return {String}
	     */ var unquote = function(str) {
	        return str.replace(BACKSLASH_1 + QUOTEMARK_1, QUOTEMARK_1);
	    };
	    function NodeList(param) {
	        var values = param === void 0 ? [] : param;
	        var nodes = values;
	        var getLast = function() {
	            return Array.isArray(nodes) && nodes.length > 0 && typeof nodes[nodes.length - 1] !== 'undefined' ? nodes[nodes.length - 1] : null;
	        };
	        var flushLast = function() {
	            return nodes.length ? nodes.pop() : false;
	        };
	        var push = function(value) {
	            return nodes.push(value);
	        };
	        var toArray = function() {
	            return nodes;
	        };
	        this.push = push;
	        this.toArray = toArray;
	        this.getLast = getLast;
	        this.flushLast = flushLast;
	    }
	    /**
	     *
	     * @param values
	     * @return {NodeList}
	     */ var createList = function(param) {
	        var values = param === void 0 ? [] : param;
	        return new NodeList(values);
	    };

	    // for cases <!-- -->
	    var EM = '!';
	    /**
	     * Creates a Token entity class
	     * @param {Number} type
	     * @param {String} value
	     * @param {Number} r line number
	     * @param {Number} cl char number in line
	     */ var createToken = function(type, value, param, param1) {
	        var r = param === void 0 ? 0 : param, cl = param1 === void 0 ? 0 : param1;
	        return new Token(type, value, r, cl);
	    };
	    /**
	     * @typedef {Object} Lexer
	     * @property {Function} tokenize
	     * @property {Function} isTokenNested
	     */ /**
	     * @param {String} buffer
	     * @param {Object} options
	     * @param {Function} options.onToken
	     * @param {String} options.openTag
	     * @param {String} options.closeTag
	     * @param {Boolean} options.enableEscapeTags
	     * @return {Lexer}
	     */ function createLexer(buffer, param) {
	        var options = param === void 0 ? {
	        } : param;
	        var emitToken = /**
	       * Emits newly created token to subscriber
	       * @param {Number} type
	       * @param {String} value
	       */ function emitToken(type, value) {
	            var token = createToken(type, value, row, col);
	            onToken(token);
	            tokenIndex += 1;
	            tokens[tokenIndex] = token;
	        };
	        var nextTagState = function nextTagState(tagChars, isSingleValueTag) {
	            if (tagMode === TAG_STATE_ATTR) {
	                var validAttrName = function(char) {
	                    return !(char === EQ_1 || isWhiteSpace(char));
	                };
	                var name = tagChars.grabWhile(validAttrName);
	                var isEnd = tagChars.isLast();
	                var isValue = tagChars.getCurr() !== EQ_1;
	                tagChars.skip();
	                if (isEnd || isValue) {
	                    emitToken(TYPE_ATTR_VALUE, unq(name));
	                } else {
	                    emitToken(TYPE_ATTR_NAME, name);
	                }
	                if (isEnd) {
	                    return TAG_STATE_NAME;
	                }
	                if (isValue) {
	                    return TAG_STATE_ATTR;
	                }
	                return TAG_STATE_VALUE;
	            }
	            if (tagMode === TAG_STATE_VALUE) {
	                var stateSpecial = false;
	                var validAttrValue = function(char) {
	                    // const isEQ = char === EQ;
	                    var isQM = char === QUOTEMARK_1;
	                    var prevChar = tagChars.getPrev();
	                    var nextChar = tagChars.getNext();
	                    var isPrevSLASH = prevChar === BACKSLASH_1;
	                    var isNextEQ = nextChar === EQ_1;
	                    var isWS = isWhiteSpace(char);
	                    // const isPrevWS = isWhiteSpace(prevChar);
	                    var isNextWS = isWhiteSpace(nextChar);
	                    if (stateSpecial && isSpecialChar(char)) {
	                        return true;
	                    }
	                    if (isQM && !isPrevSLASH) {
	                        stateSpecial = !stateSpecial;
	                        if (!stateSpecial && !(isNextEQ || isNextWS)) {
	                            return false;
	                        }
	                    }
	                    if (!isSingleValueTag) {
	                        return isWS === false;
	                    // return (isEQ || isWS) === false;
	                    }
	                    return true;
	                };
	                var name = tagChars.grabWhile(validAttrValue);
	                tagChars.skip();
	                emitToken(TYPE_ATTR_VALUE, unq(name));
	                if (tagChars.isLast()) {
	                    return TAG_STATE_NAME;
	                }
	                return TAG_STATE_ATTR;
	            }
	            var validName = function(char) {
	                return !(char === EQ_1 || isWhiteSpace(char) || tagChars.isLast());
	            };
	            var name = tagChars.grabWhile(validName);
	            emitToken(TYPE_TAG, name);
	            tagChars.skip();
	            // in cases when we has [url=someval]GET[/url] and we dont need to parse all
	            if (isSingleValueTag) {
	                return TAG_STATE_VALUE;
	            }
	            var hasEQ = tagChars.includes(EQ_1);
	            return hasEQ ? TAG_STATE_ATTR : TAG_STATE_VALUE;
	        };
	        var stateTag = function stateTag() {
	            var currChar = chars.getCurr();
	            if (currChar === openTag) {
	                var nextChar = chars.getNext();
	                chars.skip();
	                // detect case where we have '[My word [tag][/tag]' or we have '[My last line word'
	                var substr = chars.substrUntilChar(closeTag);
	                var hasInvalidChars = substr.length === 0 || substr.indexOf(openTag) >= 0;
	                if (isCharReserved(nextChar) || hasInvalidChars || chars.isLast()) {
	                    emitToken(TYPE_WORD, currChar);
	                    return STATE_WORD;
	                }
	                // [myTag   ]
	                var isNoAttrsInTag = substr.indexOf(EQ_1) === -1;
	                // [/myTag]
	                var isClosingTag = substr[0] === SLASH_1;
	                if (isNoAttrsInTag || isClosingTag) {
	                    var name = chars.grabWhile(function(char) {
	                        return char !== closeTag;
	                    });
	                    chars.skip(); // skip closeTag
	                    emitToken(TYPE_TAG, name);
	                    return STATE_WORD;
	                }
	                return STATE_TAG_ATTRS;
	            }
	            return STATE_WORD;
	        };
	        var stateAttrs = function stateAttrs() {
	            var silent = true;
	            var tagStr = chars.grabWhile(function(char) {
	                return char !== closeTag;
	            }, silent);
	            var tagGrabber = createCharGrabber(tagStr, {
	                onSkip: onSkip
	            });
	            var hasSpace = tagGrabber.includes(SPACE_1);
	            tagMode = TAG_STATE_NAME;
	            while(tagGrabber.hasNext()){
	                tagMode = nextTagState(tagGrabber, !hasSpace);
	            }
	            chars.skip(); // skip closeTag
	            return STATE_WORD;
	        };
	        var stateWord = function stateWord() {
	            if (isNewLine(chars.getCurr())) {
	                emitToken(TYPE_NEW_LINE, chars.getCurr());
	                chars.skip();
	                col = 0;
	                row++;
	                return STATE_WORD;
	            }
	            if (isWhiteSpace(chars.getCurr())) {
	                emitToken(TYPE_SPACE, chars.grabWhile(isWhiteSpace));
	                return STATE_WORD;
	            }
	            if (chars.getCurr() === openTag) {
	                if (chars.includes(closeTag)) {
	                    return STATE_TAG;
	                }
	                emitToken(TYPE_WORD, chars.getCurr());
	                chars.skip();
	                return STATE_WORD;
	            }
	            if (escapeTags) {
	                if (isEscapeChar(chars.getCurr())) {
	                    var currChar = chars.getCurr();
	                    var nextChar = chars.getNext();
	                    chars.skip(); // skip the \ without emitting anything
	                    if (isEscapableChar(nextChar)) {
	                        chars.skip(); // skip past the [, ] or \ as well
	                        emitToken(TYPE_WORD, nextChar);
	                        return STATE_WORD;
	                    }
	                    emitToken(TYPE_WORD, currChar);
	                    return STATE_WORD;
	                }
	                var isChar = function(char) {
	                    return isCharToken(char) && !isEscapeChar(char);
	                };
	                emitToken(TYPE_WORD, chars.grabWhile(isChar));
	                return STATE_WORD;
	            }
	            emitToken(TYPE_WORD, chars.grabWhile(isCharToken));
	            return STATE_WORD;
	        };
	        var tokenize = function tokenize() {
	            stateMode = STATE_WORD;
	            while(chars.hasNext()){
	                switch(stateMode){
	                    case STATE_TAG:
	                        stateMode = stateTag();
	                        break;
	                    case STATE_TAG_ATTRS:
	                        stateMode = stateAttrs();
	                        break;
	                    case STATE_WORD:
	                        stateMode = stateWord();
	                        break;
	                    default:
	                        stateMode = STATE_WORD;
	                        break;
	                }
	            }
	            tokens.length = tokenIndex + 1;
	            return tokens;
	        };
	        var isTokenNested = function isTokenNested(token) {
	            var value = openTag + SLASH_1 + token.getValue();
	            // potential bottleneck
	            return buffer.indexOf(value) > -1;
	        };
	        var STATE_WORD = 0;
	        var STATE_TAG = 1;
	        var STATE_TAG_ATTRS = 2;
	        var TAG_STATE_NAME = 0;
	        var TAG_STATE_ATTR = 1;
	        var TAG_STATE_VALUE = 2;
	        var row = 0;
	        var col = 0;
	        var tokenIndex = -1;
	        var stateMode = STATE_WORD;
	        var tagMode = TAG_STATE_NAME;
	        var tokens = new Array(Math.floor(buffer.length));
	        var openTag = options.openTag || OPEN_BRAKET_1;
	        var closeTag = options.closeTag || CLOSE_BRAKET_1;
	        var escapeTags = !!options.enableEscapeTags;
	        var onToken = options.onToken || function() {
	        };
	        var RESERVED_CHARS = [
	            closeTag,
	            openTag,
	            QUOTEMARK_1,
	            BACKSLASH_1,
	            SPACE_1,
	            TAB_1,
	            EQ_1,
	            N_1,
	            EM
	        ];
	        var NOT_CHAR_TOKENS = [
	            // ...(options.enableEscapeTags ? [BACKSLASH] : []),
	            openTag,
	            SPACE_1,
	            TAB_1,
	            N_1, 
	        ];
	        var WHITESPACES = [
	            SPACE_1,
	            TAB_1
	        ];
	        var SPECIAL_CHARS = [
	            EQ_1,
	            SPACE_1,
	            TAB_1
	        ];
	        var isCharReserved = function(char) {
	            return RESERVED_CHARS.indexOf(char) >= 0;
	        };
	        var isNewLine = function(char) {
	            return char === N_1;
	        };
	        var isWhiteSpace = function(char) {
	            return WHITESPACES.indexOf(char) >= 0;
	        };
	        var isCharToken = function(char) {
	            return NOT_CHAR_TOKENS.indexOf(char) === -1;
	        };
	        var isSpecialChar = function(char) {
	            return SPECIAL_CHARS.indexOf(char) >= 0;
	        };
	        var isEscapableChar = function(char) {
	            return char === openTag || char === closeTag || char === BACKSLASH_1;
	        };
	        var isEscapeChar = function(char) {
	            return char === BACKSLASH_1;
	        };
	        var onSkip = function() {
	            col++;
	        };
	        var unq = function(val) {
	            return unquote(trimChar(val, QUOTEMARK_1));
	        };
	        var chars = createCharGrabber(buffer, {
	            onSkip: onSkip
	        });
	        return {
	            tokenize: tokenize,
	            isTokenNested: isTokenNested
	        };
	    }

	    /**
	     * @public
	     * @param {String} input
	     * @param {Object} opts
	     * @param {Function} opts.createTokenizer
	     * @param {Array<string>} opts.onlyAllowTags
	     * @param {String} opts.openTag
	     * @param {String} opts.closeTag
	     * @param {Boolean} opts.enableEscapeTags
	     * @return {Array}
	     */ var parse = function(input, param) {
	        var opts = param === void 0 ? {
	        } : param;
	        var options = opts;
	        var openTag = options.openTag || OPEN_BRAKET_1;
	        var closeTag = options.closeTag || CLOSE_BRAKET_1;
	        var tokenizer = null;
	        /**
	       * Result AST of nodes
	       * @private
	       * @type {NodeList}
	       */ var nodes = createList();
	        /**
	       * Temp buffer of nodes that's nested to another node
	       * @private
	       * @type {NodeList}
	       */ var nestedNodes = createList();
	        /**
	       * Temp buffer of nodes [tag..]...[/tag]
	       * @private
	       * @type {NodeList}
	       */ var tagNodes = createList();
	        /**
	       * Temp buffer of tag attributes
	       * @private
	       * @type {NodeList}
	       */ var tagNodesAttrName = createList();
	        /**
	       * Cache for nested tags checks
	       */ var nestedTagsMap = new Set();
	        /**
	       *
	       * @param token
	       * @returns {boolean}
	       */ var isTokenNested = function(token) {
	            var value = token.getValue();
	            if (!nestedTagsMap.has(value) && tokenizer.isTokenNested && tokenizer.isTokenNested(token)) {
	                nestedTagsMap.add(value);
	                return true;
	            }
	            return nestedTagsMap.has(value);
	        };
	        /**
	       * @param tagName
	       * @returns {boolean}
	       */ var isTagNested = function(tagName) {
	            return Boolean(nestedTagsMap.has(tagName));
	        };
	        /**
	       * @private
	       * @param {String} value
	       * @return {boolean}
	       */ var isAllowedTag = function(value) {
	            if (options.onlyAllowTags && options.onlyAllowTags.length) {
	                return options.onlyAllowTags.indexOf(value) >= 0;
	            }
	            return true;
	        };
	        /**
	       * Flushes temp tag nodes and its attributes buffers
	       * @private
	       * @return {Array}
	       */ var flushTagNodes = function() {
	            if (tagNodes.flushLast()) {
	                tagNodesAttrName.flushLast();
	            }
	        };
	        /**
	       * @private
	       * @return {Array}
	       */ var getNodes = function() {
	            var lastNestedNode = nestedNodes.getLast();
	            if (lastNestedNode && Array.isArray(lastNestedNode.content)) {
	                return lastNestedNode.content;
	            }
	            return nodes.toArray();
	        };
	        /**
	       * @private
	       * @param {string|TagNode} node
	       */ var appendNodes = function(node) {
	            var items = getNodes();
	            if (Array.isArray(items)) {
	                if (isTagNode_1(node)) {
	                    if (isAllowedTag(node.tag)) {
	                        items.push(node.toTagNode());
	                    } else {
	                        items.push(node.toTagStart({
	                            openTag: openTag,
	                            closeTag: closeTag
	                        }));
	                        if (node.content.length) {
	                            node.content.forEach(function(item) {
	                                items.push(item);
	                            });
	                            items.push(node.toTagEnd({
	                                openTag: openTag,
	                                closeTag: closeTag
	                            }));
	                        }
	                    }
	                } else {
	                    items.push(node);
	                }
	            }
	        };
	        /**
	       * @private
	       * @param {Token} token
	       */ var handleTagStart = function(token) {
	            flushTagNodes();
	            var tagNode = default_1.create(token.getValue());
	            var isNested = isTokenNested(token);
	            tagNodes.push(tagNode);
	            if (isNested) {
	                nestedNodes.push(tagNode);
	            } else {
	                appendNodes(tagNode);
	            }
	        };
	        /**
	       * @private
	       * @param {Token} token
	       */ var handleTagEnd = function(token) {
	            flushTagNodes();
	            var lastNestedNode = nestedNodes.flushLast();
	            if (lastNestedNode) {
	                appendNodes(lastNestedNode);
	            } else if (typeof options.onError === 'function') {
	                var tag = token.getValue();
	                var line = token.getLine();
	                var column = token.getColumn();
	                options.onError({
	                    message: "Inconsistent tag '".concat(tag, "' on line ").concat(line, " and column ").concat(column),
	                    tagName: tag,
	                    lineNumber: line,
	                    columnNumber: column
	                });
	            }
	        };
	        /**
	       * @private
	       * @param {Token} token
	       */ var handleTag = function(token) {
	            // [tag]
	            if (token.isStart()) {
	                handleTagStart(token);
	            }
	            // [/tag]
	            if (token.isEnd()) {
	                handleTagEnd(token);
	            }
	        };
	        /**
	       * @private
	       * @param {Token} token
	       */ var handleNode = function(token) {
	            /**
	         * @type {TagNode}
	         */ var lastTagNode = tagNodes.getLast();
	            var tokenValue = token.getValue();
	            var isNested = isTagNested(token);
	            if (lastTagNode) {
	                if (token.isAttrName()) {
	                    tagNodesAttrName.push(tokenValue);
	                    lastTagNode.attr(tagNodesAttrName.getLast(), '');
	                } else if (token.isAttrValue()) {
	                    var attrName = tagNodesAttrName.getLast();
	                    if (attrName) {
	                        lastTagNode.attr(attrName, tokenValue);
	                        tagNodesAttrName.flushLast();
	                    } else {
	                        lastTagNode.attr(tokenValue, tokenValue);
	                    }
	                } else if (token.isText()) {
	                    if (isNested) {
	                        lastTagNode.append(tokenValue);
	                    } else {
	                        appendNodes(tokenValue);
	                    }
	                } else if (token.isTag()) {
	                    // if tag is not allowed, just past it as is
	                    appendNodes(token.toString());
	                }
	            } else if (token.isText()) {
	                appendNodes(tokenValue);
	            } else if (token.isTag()) {
	                // if tag is not allowed, just past it as is
	                appendNodes(token.toString());
	            }
	        };
	        /**
	       * @private
	       * @param {Token} token
	       */ var onToken = function(token) {
	            if (token.isTag()) {
	                handleTag(token);
	            } else {
	                handleNode(token);
	            }
	        };
	        tokenizer = (opts.createTokenizer ? opts.createTokenizer : createLexer)(input, {
	            onToken: onToken,
	            onlyAllowTags: options.onlyAllowTags,
	            openTag: openTag,
	            closeTag: closeTag,
	            enableEscapeTags: options.enableEscapeTags
	        });
	        // eslint-disable-next-line no-unused-vars
	        tokenizer.tokenize();
	        return nodes.toArray();
	    };

	    exports["default"] = parse;
	    exports.parse = parse;

	    Object.defineProperty(exports, '__esModule', { value: true });

	}));
	}(dist, dist.exports));

	/**
	 * Gets the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the last element of `array`.
	 * @example
	 *
	 * _.last([1, 2, 3]);
	 * // => 3
	 */

	function last(array) {
	  var length = array == null ? 0 : array.length;
	  return length ? array[length - 1] : undefined;
	}

	var last_1 = last;

	/** Detect free variable `global` from Node.js. */

	var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	var _freeGlobal = freeGlobal$1;

	var freeGlobal = _freeGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root$8 = freeGlobal || freeSelf || Function('return this')();

	var _root = root$8;

	var root$7 = _root;

	/** Built-in value references. */
	var Symbol$5 = root$7.Symbol;

	var _Symbol = Symbol$5;

	var Symbol$4 = _Symbol;

	/** Used for built-in method references. */
	var objectProto$e = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$b = objectProto$e.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$e.toString;

	/** Built-in value references. */
	var symToStringTag$1 = Symbol$4 ? Symbol$4.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag$1(value) {
	  var isOwn = hasOwnProperty$b.call(value, symToStringTag$1),
	      tag = value[symToStringTag$1];

	  try {
	    value[symToStringTag$1] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString$1.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag$1] = tag;
	    } else {
	      delete value[symToStringTag$1];
	    }
	  }
	  return result;
	}

	var _getRawTag = getRawTag$1;

	/** Used for built-in method references. */

	var objectProto$d = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto$d.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString$1(value) {
	  return nativeObjectToString.call(value);
	}

	var _objectToString = objectToString$1;

	var Symbol$3 = _Symbol,
	    getRawTag = _getRawTag,
	    objectToString = _objectToString;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol$3 ? Symbol$3.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag$5(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	var _baseGetTag = baseGetTag$5;

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */

	function isObject$4(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	var isObject_1 = isObject$4;

	var baseGetTag$4 = _baseGetTag,
	    isObject$3 = isObject_1;

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag$1 = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction$2(value) {
	  if (!isObject$3(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag$4(value);
	  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	var isFunction_1 = isFunction$2;

	var root$6 = _root;

	/** Used to detect overreaching core-js shims. */
	var coreJsData$1 = root$6['__core-js_shared__'];

	var _coreJsData = coreJsData$1;

	var coreJsData = _coreJsData;

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked$1(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	var _isMasked = isMasked$1;

	/** Used for built-in method references. */

	var funcProto$1 = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$1 = funcProto$1.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource$2(func) {
	  if (func != null) {
	    try {
	      return funcToString$1.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	var _toSource = toSource$2;

	var isFunction$1 = isFunction_1,
	    isMasked = _isMasked,
	    isObject$2 = isObject_1,
	    toSource$1 = _toSource;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto$c = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$a = objectProto$c.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty$a).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative$1(value) {
	  if (!isObject$2(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource$1(value));
	}

	var _baseIsNative = baseIsNative$1;

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */

	function getValue$1(object, key) {
	  return object == null ? undefined : object[key];
	}

	var _getValue = getValue$1;

	var baseIsNative = _baseIsNative,
	    getValue = _getValue;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative$7(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	var _getNative = getNative$7;

	var getNative$6 = _getNative;

	var defineProperty$1 = (function() {
	  try {
	    var func = getNative$6(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	var _defineProperty = defineProperty$1;

	var defineProperty = _defineProperty;

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue$2(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	var _baseAssignValue = baseAssignValue$2;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */

	function eq$3(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	var eq_1 = eq$3;

	var baseAssignValue$1 = _baseAssignValue,
	    eq$2 = eq_1;

	/** Used for built-in method references. */
	var objectProto$b = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$9 = objectProto$b.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue$1(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty$9.call(object, key) && eq$2(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue$1(object, key, value);
	  }
	}

	var _assignValue = assignValue$1;

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */

	var isArray$9 = Array.isArray;

	var isArray_1 = isArray$9;

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */

	function isObjectLike$5(value) {
	  return value != null && typeof value == 'object';
	}

	var isObjectLike_1 = isObjectLike$5;

	var baseGetTag$3 = _baseGetTag,
	    isObjectLike$4 = isObjectLike_1;

	/** `Object#toString` result references. */
	var symbolTag$1 = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol$3(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike$4(value) && baseGetTag$3(value) == symbolTag$1);
	}

	var isSymbol_1 = isSymbol$3;

	var isArray$8 = isArray_1,
	    isSymbol$2 = isSymbol_1;

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey$3(value, object) {
	  if (isArray$8(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol$2(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	var _isKey = isKey$3;

	var getNative$5 = _getNative;

	/* Built-in method references that are verified to be native. */
	var nativeCreate$4 = getNative$5(Object, 'create');

	var _nativeCreate = nativeCreate$4;

	var nativeCreate$3 = _nativeCreate;

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear$1() {
	  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
	  this.size = 0;
	}

	var _hashClear = hashClear$1;

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */

	function hashDelete$1(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _hashDelete = hashDelete$1;

	var nativeCreate$2 = _nativeCreate;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto$a = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet$1(key) {
	  var data = this.__data__;
	  if (nativeCreate$2) {
	    var result = data[key];
	    return result === HASH_UNDEFINED$2 ? undefined : result;
	  }
	  return hasOwnProperty$8.call(data, key) ? data[key] : undefined;
	}

	var _hashGet = hashGet$1;

	var nativeCreate$1 = _nativeCreate;

	/** Used for built-in method references. */
	var objectProto$9 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas$1(key) {
	  var data = this.__data__;
	  return nativeCreate$1 ? (data[key] !== undefined) : hasOwnProperty$7.call(data, key);
	}

	var _hashHas = hashHas$1;

	var nativeCreate = _nativeCreate;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet$1(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
	  return this;
	}

	var _hashSet = hashSet$1;

	var hashClear = _hashClear,
	    hashDelete = _hashDelete,
	    hashGet = _hashGet,
	    hashHas = _hashHas,
	    hashSet = _hashSet;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash$1(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash$1.prototype.clear = hashClear;
	Hash$1.prototype['delete'] = hashDelete;
	Hash$1.prototype.get = hashGet;
	Hash$1.prototype.has = hashHas;
	Hash$1.prototype.set = hashSet;

	var _Hash = Hash$1;

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */

	function listCacheClear$1() {
	  this.__data__ = [];
	  this.size = 0;
	}

	var _listCacheClear = listCacheClear$1;

	var eq$1 = eq_1;

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf$4(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq$1(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	var _assocIndexOf = assocIndexOf$4;

	var assocIndexOf$3 = _assocIndexOf;

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete$1(key) {
	  var data = this.__data__,
	      index = assocIndexOf$3(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	var _listCacheDelete = listCacheDelete$1;

	var assocIndexOf$2 = _assocIndexOf;

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet$1(key) {
	  var data = this.__data__,
	      index = assocIndexOf$2(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	var _listCacheGet = listCacheGet$1;

	var assocIndexOf$1 = _assocIndexOf;

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas$1(key) {
	  return assocIndexOf$1(this.__data__, key) > -1;
	}

	var _listCacheHas = listCacheHas$1;

	var assocIndexOf = _assocIndexOf;

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet$1(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	var _listCacheSet = listCacheSet$1;

	var listCacheClear = _listCacheClear,
	    listCacheDelete = _listCacheDelete,
	    listCacheGet = _listCacheGet,
	    listCacheHas = _listCacheHas,
	    listCacheSet = _listCacheSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache$4(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache$4.prototype.clear = listCacheClear;
	ListCache$4.prototype['delete'] = listCacheDelete;
	ListCache$4.prototype.get = listCacheGet;
	ListCache$4.prototype.has = listCacheHas;
	ListCache$4.prototype.set = listCacheSet;

	var _ListCache = ListCache$4;

	var getNative$4 = _getNative,
	    root$5 = _root;

	/* Built-in method references that are verified to be native. */
	var Map$3 = getNative$4(root$5, 'Map');

	var _Map = Map$3;

	var Hash = _Hash,
	    ListCache$3 = _ListCache,
	    Map$2 = _Map;

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear$1() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map$2 || ListCache$3),
	    'string': new Hash
	  };
	}

	var _mapCacheClear = mapCacheClear$1;

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */

	function isKeyable$1(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	var _isKeyable = isKeyable$1;

	var isKeyable = _isKeyable;

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData$4(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	var _getMapData = getMapData$4;

	var getMapData$3 = _getMapData;

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete$1(key) {
	  var result = getMapData$3(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _mapCacheDelete = mapCacheDelete$1;

	var getMapData$2 = _getMapData;

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet$1(key) {
	  return getMapData$2(this, key).get(key);
	}

	var _mapCacheGet = mapCacheGet$1;

	var getMapData$1 = _getMapData;

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas$1(key) {
	  return getMapData$1(this, key).has(key);
	}

	var _mapCacheHas = mapCacheHas$1;

	var getMapData = _getMapData;

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet$1(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	var _mapCacheSet = mapCacheSet$1;

	var mapCacheClear = _mapCacheClear,
	    mapCacheDelete = _mapCacheDelete,
	    mapCacheGet = _mapCacheGet,
	    mapCacheHas = _mapCacheHas,
	    mapCacheSet = _mapCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache$3(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache$3.prototype.clear = mapCacheClear;
	MapCache$3.prototype['delete'] = mapCacheDelete;
	MapCache$3.prototype.get = mapCacheGet;
	MapCache$3.prototype.has = mapCacheHas;
	MapCache$3.prototype.set = mapCacheSet;

	var _MapCache = MapCache$3;

	var MapCache$2 = _MapCache;

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize$1(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize$1.Cache || MapCache$2);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize$1.Cache = MapCache$2;

	var memoize_1 = memoize$1;

	var memoize = memoize_1;

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped$1(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	var _memoizeCapped = memoizeCapped$1;

	var memoizeCapped = _memoizeCapped;

	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath$1 = memoizeCapped(function(string) {
	  var result = [];
	  if (string.charCodeAt(0) === 46 /* . */) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, subString) {
	    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	var _stringToPath = stringToPath$1;

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */

	function arrayMap$2(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	var _arrayMap = arrayMap$2;

	var Symbol$2 = _Symbol,
	    arrayMap$1 = _arrayMap,
	    isArray$7 = isArray_1,
	    isSymbol$1 = isSymbol_1;

	/** Used as references for various `Number` constants. */
	var INFINITY$1 = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : undefined,
	    symbolToString = symbolProto$1 ? symbolProto$1.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString$1(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray$7(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap$1(value, baseToString$1) + '';
	  }
	  if (isSymbol$1(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
	}

	var _baseToString = baseToString$1;

	var baseToString = _baseToString;

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString$1(value) {
	  return value == null ? '' : baseToString(value);
	}

	var toString_1 = toString$1;

	var isArray$6 = isArray_1,
	    isKey$2 = _isKey,
	    stringToPath = _stringToPath,
	    toString = toString_1;

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath$3(value, object) {
	  if (isArray$6(value)) {
	    return value;
	  }
	  return isKey$2(value, object) ? [value] : stringToPath(toString(value));
	}

	var _castPath = castPath$3;

	/** Used as references for various `Number` constants. */

	var MAX_SAFE_INTEGER$1 = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex$3(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER$1 : length;

	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}

	var _isIndex = isIndex$3;

	var isSymbol = isSymbol_1;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey$5(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	var _toKey = toKey$5;

	var assignValue = _assignValue,
	    castPath$2 = _castPath,
	    isIndex$2 = _isIndex,
	    isObject$1 = isObject_1,
	    toKey$4 = _toKey;

	/**
	 * The base implementation of `_.set`.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @param {Function} [customizer] The function to customize path creation.
	 * @returns {Object} Returns `object`.
	 */
	function baseSet$1(object, path, value, customizer) {
	  if (!isObject$1(object)) {
	    return object;
	  }
	  path = castPath$2(path, object);

	  var index = -1,
	      length = path.length,
	      lastIndex = length - 1,
	      nested = object;

	  while (nested != null && ++index < length) {
	    var key = toKey$4(path[index]),
	        newValue = value;

	    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
	      return object;
	    }

	    if (index != lastIndex) {
	      var objValue = nested[key];
	      newValue = customizer ? customizer(objValue, key, nested) : undefined;
	      if (newValue === undefined) {
	        newValue = isObject$1(objValue)
	          ? objValue
	          : (isIndex$2(path[index + 1]) ? [] : {});
	      }
	    }
	    assignValue(nested, key, newValue);
	    nested = nested[key];
	  }
	  return object;
	}

	var _baseSet = baseSet$1;

	var baseSet = _baseSet;

	/**
	 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
	 * it's created. Arrays are created for missing index properties while objects
	 * are created for all other missing properties. Use `_.setWith` to customize
	 * `path` creation.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.set(object, 'a[0].b.c', 4);
	 * console.log(object.a[0].b.c);
	 * // => 4
	 *
	 * _.set(object, ['x', '0', 'y', 'z'], 5);
	 * console.log(object.x[0].y.z);
	 * // => 5
	 */
	function set(object, path, value) {
	  return object == null ? object : baseSet(object, path, value);
	}

	var set_1 = set;

	var castPath$1 = _castPath,
	    toKey$3 = _toKey;

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet$2(object, path) {
	  path = castPath$1(path, object);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey$3(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	var _baseGet = baseGet$2;

	var baseGet$1 = _baseGet;

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get$1(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet$1(object, path);
	  return result === undefined ? defaultValue : result;
	}

	var get_1 = get$1;

	/** Used for built-in method references. */

	var objectProto$8 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas$1(object, key) {
	  return object != null && hasOwnProperty$6.call(object, key);
	}

	var _baseHas = baseHas$1;

	var baseGetTag$2 = _baseGetTag,
	    isObjectLike$3 = isObjectLike_1;

	/** `Object#toString` result references. */
	var argsTag$2 = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments$1(value) {
	  return isObjectLike$3(value) && baseGetTag$2(value) == argsTag$2;
	}

	var _baseIsArguments = baseIsArguments$1;

	var baseIsArguments = _baseIsArguments,
	    isObjectLike$2 = isObjectLike_1;

	/** Used for built-in method references. */
	var objectProto$7 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable$1 = objectProto$7.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments$3 = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike$2(value) && hasOwnProperty$5.call(value, 'callee') &&
	    !propertyIsEnumerable$1.call(value, 'callee');
	};

	var isArguments_1 = isArguments$3;

	/** Used as references for various `Number` constants. */

	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength$3(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	var isLength_1 = isLength$3;

	var castPath = _castPath,
	    isArguments$2 = isArguments_1,
	    isArray$5 = isArray_1,
	    isIndex$1 = _isIndex,
	    isLength$2 = isLength_1,
	    toKey$2 = _toKey;

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath$2(object, path, hasFunc) {
	  path = castPath(path, object);

	  var index = -1,
	      length = path.length,
	      result = false;

	  while (++index < length) {
	    var key = toKey$2(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength$2(length) && isIndex$1(key, length) &&
	    (isArray$5(object) || isArguments$2(object));
	}

	var _hasPath = hasPath$2;

	var baseHas = _baseHas,
	    hasPath$1 = _hasPath;

	/**
	 * Checks if `path` is a direct property of `object`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = { 'a': { 'b': 2 } };
	 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.has(object, 'a');
	 * // => true
	 *
	 * _.has(object, 'a.b');
	 * // => true
	 *
	 * _.has(object, ['a', 'b']);
	 * // => true
	 *
	 * _.has(other, 'a');
	 * // => false
	 */
	function has(object, path) {
	  return object != null && hasPath$1(object, path, baseHas);
	}

	var has_1 = has;

	/** Used for built-in method references. */

	var objectProto$6 = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype$2(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$6;

	  return value === proto;
	}

	var _isPrototype = isPrototype$2;

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */

	function overArg$1(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	var _overArg = overArg$1;

	var overArg = _overArg;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys$1 = overArg(Object.keys, Object);

	var _nativeKeys = nativeKeys$1;

	var isPrototype$1 = _isPrototype,
	    nativeKeys = _nativeKeys;

	/** Used for built-in method references. */
	var objectProto$5 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys$2(object) {
	  if (!isPrototype$1(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty$4.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeys = baseKeys$2;

	var getNative$3 = _getNative,
	    root$4 = _root;

	/* Built-in method references that are verified to be native. */
	var DataView$1 = getNative$3(root$4, 'DataView');

	var _DataView = DataView$1;

	var getNative$2 = _getNative,
	    root$3 = _root;

	/* Built-in method references that are verified to be native. */
	var Promise$2 = getNative$2(root$3, 'Promise');

	var _Promise = Promise$2;

	var getNative$1 = _getNative,
	    root$2 = _root;

	/* Built-in method references that are verified to be native. */
	var Set$2 = getNative$1(root$2, 'Set');

	var _Set = Set$2;

	var getNative = _getNative,
	    root$1 = _root;

	/* Built-in method references that are verified to be native. */
	var WeakMap$1 = getNative(root$1, 'WeakMap');

	var _WeakMap = WeakMap$1;

	var DataView = _DataView,
	    Map$1 = _Map,
	    Promise$1 = _Promise,
	    Set$1 = _Set,
	    WeakMap = _WeakMap,
	    baseGetTag$1 = _baseGetTag,
	    toSource = _toSource;

	/** `Object#toString` result references. */
	var mapTag$4 = '[object Map]',
	    objectTag$2 = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag$4 = '[object Set]',
	    weakMapTag$1 = '[object WeakMap]';

	var dataViewTag$2 = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map$1),
	    promiseCtorString = toSource(Promise$1),
	    setCtorString = toSource(Set$1),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag$3 = baseGetTag$1;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag$3(new DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
	    (Map$1 && getTag$3(new Map$1) != mapTag$4) ||
	    (Promise$1 && getTag$3(Promise$1.resolve()) != promiseTag) ||
	    (Set$1 && getTag$3(new Set$1) != setTag$4) ||
	    (WeakMap && getTag$3(new WeakMap) != weakMapTag$1)) {
	  getTag$3 = function(value) {
	    var result = baseGetTag$1(value),
	        Ctor = result == objectTag$2 ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag$2;
	        case mapCtorString: return mapTag$4;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag$4;
	        case weakMapCtorString: return weakMapTag$1;
	      }
	    }
	    return result;
	  };
	}

	var _getTag = getTag$3;

	var isFunction = isFunction_1,
	    isLength$1 = isLength_1;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike$2(value) {
	  return value != null && isLength$1(value.length) && !isFunction(value);
	}

	var isArrayLike_1 = isArrayLike$2;

	var isBuffer$3 = {exports: {}};

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */

	function stubFalse() {
	  return false;
	}

	var stubFalse_1 = stubFalse;

	(function (module, exports) {
	var root = _root,
	    stubFalse = stubFalse_1;

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;
	}(isBuffer$3, isBuffer$3.exports));

	var baseGetTag = _baseGetTag,
	    isLength = isLength_1,
	    isObjectLike$1 = isObjectLike_1;

	/** `Object#toString` result references. */
	var argsTag$1 = '[object Arguments]',
	    arrayTag$1 = '[object Array]',
	    boolTag$1 = '[object Boolean]',
	    dateTag$1 = '[object Date]',
	    errorTag$1 = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag$3 = '[object Map]',
	    numberTag$1 = '[object Number]',
	    objectTag$1 = '[object Object]',
	    regexpTag$1 = '[object RegExp]',
	    setTag$3 = '[object Set]',
	    stringTag$1 = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag$1 = '[object ArrayBuffer]',
	    dataViewTag$1 = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] =
	typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] =
	typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag$1] =
	typedArrayTags[errorTag$1] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag$3] = typedArrayTags[numberTag$1] =
	typedArrayTags[objectTag$1] = typedArrayTags[regexpTag$1] =
	typedArrayTags[setTag$3] = typedArrayTags[stringTag$1] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray$1(value) {
	  return isObjectLike$1(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	var _baseIsTypedArray = baseIsTypedArray$1;

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */

	function baseUnary$1(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	var _baseUnary = baseUnary$1;

	var _nodeUtil = {exports: {}};

	(function (module, exports) {
	var freeGlobal = _freeGlobal;

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;

	    if (types) {
	      return types;
	    }

	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;
	}(_nodeUtil, _nodeUtil.exports));

	var baseIsTypedArray = _baseIsTypedArray,
	    baseUnary = _baseUnary,
	    nodeUtil = _nodeUtil.exports;

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray$3 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	var isTypedArray_1 = isTypedArray$3;

	var baseKeys$1 = _baseKeys,
	    getTag$2 = _getTag,
	    isArguments$1 = isArguments_1,
	    isArray$4 = isArray_1,
	    isArrayLike$1 = isArrayLike_1,
	    isBuffer$2 = isBuffer$3.exports,
	    isPrototype = _isPrototype,
	    isTypedArray$2 = isTypedArray_1;

	/** `Object#toString` result references. */
	var mapTag$2 = '[object Map]',
	    setTag$2 = '[object Set]';

	/** Used for built-in method references. */
	var objectProto$4 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

	/**
	 * Checks if `value` is an empty object, collection, map, or set.
	 *
	 * Objects are considered empty if they have no own enumerable string keyed
	 * properties.
	 *
	 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
	 * jQuery-like collections are considered empty if they have a `length` of `0`.
	 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	 * @example
	 *
	 * _.isEmpty(null);
	 * // => true
	 *
	 * _.isEmpty(true);
	 * // => true
	 *
	 * _.isEmpty(1);
	 * // => true
	 *
	 * _.isEmpty([1, 2, 3]);
	 * // => false
	 *
	 * _.isEmpty({ 'a': 1 });
	 * // => false
	 */
	function isEmpty(value) {
	  if (value == null) {
	    return true;
	  }
	  if (isArrayLike$1(value) &&
	      (isArray$4(value) || typeof value == 'string' || typeof value.splice == 'function' ||
	        isBuffer$2(value) || isTypedArray$2(value) || isArguments$1(value))) {
	    return !value.length;
	  }
	  var tag = getTag$2(value);
	  if (tag == mapTag$2 || tag == setTag$2) {
	    return !value.size;
	  }
	  if (isPrototype(value)) {
	    return !baseKeys$1(value).length;
	  }
	  for (var key in value) {
	    if (hasOwnProperty$3.call(value, key)) {
	      return false;
	    }
	  }
	  return true;
	}

	var isEmpty_1 = isEmpty;

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */

	function createBaseFor$1(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	var _createBaseFor = createBaseFor$1;

	var createBaseFor = _createBaseFor;

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor$1 = createBaseFor();

	var _baseFor = baseFor$1;

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */

	function baseTimes$1(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	var _baseTimes = baseTimes$1;

	var baseTimes = _baseTimes,
	    isArguments = isArguments_1,
	    isArray$3 = isArray_1,
	    isBuffer$1 = isBuffer$3.exports,
	    isIndex = _isIndex,
	    isTypedArray$1 = isTypedArray_1;

	/** Used for built-in method references. */
	var objectProto$3 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys$1(value, inherited) {
	  var isArr = isArray$3(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer$1(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray$1(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty$2.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _arrayLikeKeys = arrayLikeKeys$1;

	var arrayLikeKeys = _arrayLikeKeys,
	    baseKeys = _baseKeys,
	    isArrayLike = isArrayLike_1;

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys$4(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	var keys_1 = keys$4;

	var baseFor = _baseFor,
	    keys$3 = keys_1;

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn$1(object, iteratee) {
	  return object && baseFor(object, iteratee, keys$3);
	}

	var _baseForOwn = baseForOwn$1;

	var ListCache$2 = _ListCache;

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear$1() {
	  this.__data__ = new ListCache$2;
	  this.size = 0;
	}

	var _stackClear = stackClear$1;

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */

	function stackDelete$1(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	var _stackDelete = stackDelete$1;

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */

	function stackGet$1(key) {
	  return this.__data__.get(key);
	}

	var _stackGet = stackGet$1;

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */

	function stackHas$1(key) {
	  return this.__data__.has(key);
	}

	var _stackHas = stackHas$1;

	var ListCache$1 = _ListCache,
	    Map = _Map,
	    MapCache$1 = _MapCache;

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet$1(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache$1) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache$1(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	var _stackSet = stackSet$1;

	var ListCache = _ListCache,
	    stackClear = _stackClear,
	    stackDelete = _stackDelete,
	    stackGet = _stackGet,
	    stackHas = _stackHas,
	    stackSet = _stackSet;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack$2(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack$2.prototype.clear = stackClear;
	Stack$2.prototype['delete'] = stackDelete;
	Stack$2.prototype.get = stackGet;
	Stack$2.prototype.has = stackHas;
	Stack$2.prototype.set = stackSet;

	var _Stack = Stack$2;

	/** Used to stand-in for `undefined` hash values. */

	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd$1(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	var _setCacheAdd = setCacheAdd$1;

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */

	function setCacheHas$1(value) {
	  return this.__data__.has(value);
	}

	var _setCacheHas = setCacheHas$1;

	var MapCache = _MapCache,
	    setCacheAdd = _setCacheAdd,
	    setCacheHas = _setCacheHas;

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache$1(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
	SetCache$1.prototype.has = setCacheHas;

	var _SetCache = SetCache$1;

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */

	function arraySome$1(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	var _arraySome = arraySome$1;

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */

	function cacheHas$1(cache, key) {
	  return cache.has(key);
	}

	var _cacheHas = cacheHas$1;

	var SetCache = _SetCache,
	    arraySome = _arraySome,
	    cacheHas = _cacheHas;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$5 = 1,
	    COMPARE_UNORDERED_FLAG$3 = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Check that cyclic values are equal.
	  var arrStacked = stack.get(array);
	  var othStacked = stack.get(other);
	  if (arrStacked && othStacked) {
	    return arrStacked == other && othStacked == array;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG$3) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	var _equalArrays = equalArrays$2;

	var root = _root;

	/** Built-in value references. */
	var Uint8Array$1 = root.Uint8Array;

	var _Uint8Array = Uint8Array$1;

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */

	function mapToArray$2(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	var _mapToArray = mapToArray$2;

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */

	function setToArray$1(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	var _setToArray = setToArray$1;

	var Symbol$1 = _Symbol,
	    Uint8Array = _Uint8Array,
	    eq = eq_1,
	    equalArrays$1 = _equalArrays,
	    mapToArray$1 = _mapToArray,
	    setToArray = _setToArray;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$4 = 1,
	    COMPARE_UNORDERED_FLAG$2 = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag$1 = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag$1 = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag$1:
	      var convert = mapToArray$1;

	    case setTag$1:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG$2;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	var _equalByTag = equalByTag$1;

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */

	function arrayPush$1(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	var _arrayPush = arrayPush$1;

	var arrayPush = _arrayPush,
	    isArray$2 = isArray_1;

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys$1(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray$2(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	var _baseGetAllKeys = baseGetAllKeys$1;

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */

	function arrayFilter$1(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	var _arrayFilter = arrayFilter$1;

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */

	function stubArray$1() {
	  return [];
	}

	var stubArray_1 = stubArray$1;

	var arrayFilter = _arrayFilter,
	    stubArray = stubArray_1;

	/** Used for built-in method references. */
	var objectProto$2 = Object.prototype;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols$1 = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};

	var _getSymbols = getSymbols$1;

	var baseGetAllKeys = _baseGetAllKeys,
	    getSymbols = _getSymbols,
	    keys$2 = keys_1;

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys$1(object) {
	  return baseGetAllKeys(object, keys$2, getSymbols);
	}

	var _getAllKeys = getAllKeys$1;

	var getAllKeys = _getAllKeys;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$3 = 1;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
	      return false;
	    }
	  }
	  // Check that cyclic values are equal.
	  var objStacked = stack.get(object);
	  var othStacked = stack.get(other);
	  if (objStacked && othStacked) {
	    return objStacked == other && othStacked == object;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	var _equalObjects = equalObjects$1;

	var Stack$1 = _Stack,
	    equalArrays = _equalArrays,
	    equalByTag = _equalByTag,
	    equalObjects = _equalObjects,
	    getTag$1 = _getTag,
	    isArray$1 = isArray_1,
	    isBuffer = isBuffer$3.exports,
	    isTypedArray = isTypedArray_1;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$2 = 1;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray$1(object),
	      othIsArr = isArray$1(other),
	      objTag = objIsArr ? arrayTag : getTag$1(object),
	      othTag = othIsArr ? arrayTag : getTag$1(other);

	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;

	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack$1);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack$1);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack$1);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	var _baseIsEqualDeep = baseIsEqualDeep$1;

	var baseIsEqualDeep = _baseIsEqualDeep,
	    isObjectLike = isObjectLike_1;

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual$2(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$2, stack);
	}

	var _baseIsEqual = baseIsEqual$2;

	var Stack = _Stack,
	    baseIsEqual$1 = _baseIsEqual;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$1 = 1,
	    COMPARE_UNORDERED_FLAG$1 = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch$1(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	var _baseIsMatch = baseIsMatch$1;

	var isObject = isObject_1;

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable$2(value) {
	  return value === value && !isObject(value);
	}

	var _isStrictComparable = isStrictComparable$2;

	var isStrictComparable$1 = _isStrictComparable,
	    keys$1 = keys_1;

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData$1(object) {
	  var result = keys$1(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, isStrictComparable$1(value)];
	  }
	  return result;
	}

	var _getMatchData = getMatchData$1;

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */

	function matchesStrictComparable$2(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	var _matchesStrictComparable = matchesStrictComparable$2;

	var baseIsMatch = _baseIsMatch,
	    getMatchData = _getMatchData,
	    matchesStrictComparable$1 = _matchesStrictComparable;

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches$1(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	var _baseMatches = baseMatches$1;

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */

	function baseHasIn$1(object, key) {
	  return object != null && key in Object(object);
	}

	var _baseHasIn = baseHasIn$1;

	var baseHasIn = _baseHasIn,
	    hasPath = _hasPath;

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn$1(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	var hasIn_1 = hasIn$1;

	var baseIsEqual = _baseIsEqual,
	    get = get_1,
	    hasIn = hasIn_1,
	    isKey$1 = _isKey,
	    isStrictComparable = _isStrictComparable,
	    matchesStrictComparable = _matchesStrictComparable,
	    toKey$1 = _toKey;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty$1(path, srcValue) {
	  if (isKey$1(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey$1(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	  };
	}

	var _baseMatchesProperty = baseMatchesProperty$1;

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */

	function identity$1(value) {
	  return value;
	}

	var identity_1 = identity$1;

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */

	function baseProperty$1(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	var _baseProperty = baseProperty$1;

	var baseGet = _baseGet;

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep$1(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	var _basePropertyDeep = basePropertyDeep$1;

	var baseProperty = _baseProperty,
	    basePropertyDeep = _basePropertyDeep,
	    isKey = _isKey,
	    toKey = _toKey;

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property$1(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	var property_1 = property$1;

	var baseMatches = _baseMatches,
	    baseMatchesProperty = _baseMatchesProperty,
	    identity = identity_1,
	    isArray = isArray_1,
	    property = property_1;

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee$1(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	var _baseIteratee = baseIteratee$1;

	var baseAssignValue = _baseAssignValue,
	    baseForOwn = _baseForOwn,
	    baseIteratee = _baseIteratee;

	/**
	 * The opposite of `_.mapValues`; this method creates an object with the
	 * same values as `object` and keys generated by running each own enumerable
	 * string keyed property of `object` thru `iteratee`. The iteratee is invoked
	 * with three arguments: (value, key, object).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.8.0
	 * @category Object
	 * @param {Object} object The object to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Object} Returns the new mapped object.
	 * @see _.mapValues
	 * @example
	 *
	 * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
	 *   return key + value;
	 * });
	 * // => { 'a1': 1, 'b2': 2 }
	 */
	function mapKeys(object, iteratee) {
	  var result = {};
	  iteratee = baseIteratee(iteratee);

	  baseForOwn(object, function(value, key, object) {
	    baseAssignValue(result, iteratee(value, key, object), value);
	  });
	  return result;
	}

	var mapKeys_1 = mapKeys;

	var arrayMap = _arrayMap;

	/**
	 * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
	 * of key-value pairs for `object` corresponding to the property names of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the key-value pairs.
	 */
	function baseToPairs$1(object, props) {
	  return arrayMap(props, function(key) {
	    return [key, object[key]];
	  });
	}

	var _baseToPairs = baseToPairs$1;

	/**
	 * Converts `set` to its value-value pairs.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the value-value pairs.
	 */

	function setToPairs$1(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = [value, value];
	  });
	  return result;
	}

	var _setToPairs = setToPairs$1;

	var baseToPairs = _baseToPairs,
	    getTag = _getTag,
	    mapToArray = _mapToArray,
	    setToPairs = _setToPairs;

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    setTag = '[object Set]';

	/**
	 * Creates a `_.toPairs` or `_.toPairsIn` function.
	 *
	 * @private
	 * @param {Function} keysFunc The function to get the keys of a given object.
	 * @returns {Function} Returns the new pairs function.
	 */
	function createToPairs$1(keysFunc) {
	  return function(object) {
	    var tag = getTag(object);
	    if (tag == mapTag) {
	      return mapToArray(object);
	    }
	    if (tag == setTag) {
	      return setToPairs(object);
	    }
	    return baseToPairs(object, keysFunc(object));
	  };
	}

	var _createToPairs = createToPairs$1;

	var createToPairs = _createToPairs,
	    keys = keys_1;

	/**
	 * Creates an array of own enumerable string keyed-value pairs for `object`
	 * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
	 * entries are returned.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @alias entries
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the key-value pairs.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.toPairs(new Foo);
	 * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
	 */
	var toPairs = createToPairs(keys);

	var toPairs_1 = toPairs;

	const tagMap = {};
	const registerBBCodeTag = (tagName, component) => {
	  tagMap[tagName] = component;
	};
	const DefaultBBCodeComponent = React__default["default"].memo((props) => {
	  if (has_1(tagMap, "_text")) {
	    const Component = tagMap["_text"];
	    return /* @__PURE__ */ React__default["default"].createElement(Component, null, props.node.content.join(""));
	  } else {
	    return null;
	  }
	});
	DefaultBBCodeComponent.displayName = "DefaultBBCodeComponent";
	const getBBCodeTag = (tagName) => {
	  var _a;
	  return (_a = tagMap[tagName]) != null ? _a : DefaultBBCodeComponent;
	};
	class BBCodeParser {
	  constructor() {
	    this.options = {
	      onlyAllowTags: Object.keys(tagMap),
	      onError: (err) => {
	        console.warn(err.message, err.lineNumber, err.columnNumber);
	      }
	    };
	  }
	  preProcessText(input, processFn) {
	    const ast = dist.exports.parse(input, this.options);
	    return ast.map((node, index) => {
	      if (typeof node === "string") {
	        const text = node;
	        return processFn(text);
	      }
	      const { tag, content, attrs } = node;
	      const attrsStr = toPairs_1(attrs).map(([key, value]) => {
	        if (key === value) {
	          return `="${value}"`;
	        } else {
	          return ` ${key}="${value}"`;
	        }
	      }).join("");
	      return `[${tag}${attrsStr}]${content.join("")}[/${tag}]`;
	    }).join("");
	  }
	  parse(input) {
	    try {
	      return dist.exports.parse(input, this.options).map((node) => {
	        if (isObject_1(node)) {
	          const content = get_1(node, "content");
	          const attrs = get_1(node, "attrs");
	          if (isEmpty_1(attrs) && isArray_1(content) && content.length === 0) {
	            const tag = get_1(node, "tag");
	            if (typeof tag === "string") {
	              return `[${tag}]`;
	            }
	          }
	          set_1(node, "attrs", mapKeys_1(attrs, (value, key) => {
	            if (value === key) {
	              return node.tag;
	            } else {
	              return key;
	            }
	          }));
	        }
	        return node;
	      });
	    } catch (e) {
	      console.warn(e);
	      return [];
	    }
	  }
	  render(input) {
	    const ast = this.parse(input);
	    return ast.reduce((prev, curr) => {
	      if (typeof curr === "string" && typeof last_1(prev) === "string") {
	        prev[prev.length - 1] += curr;
	      } else {
	        prev.push(curr);
	      }
	      return prev;
	    }, []).map((node, index) => {
	      if (typeof node === "string") {
	        if (has_1(tagMap, "_text")) {
	          const Component = tagMap["_text"];
	          return /* @__PURE__ */ React__default["default"].createElement(Component, {
	            key: index
	          }, node);
	        } else {
	          return node;
	        }
	      }
	      if (typeof node === "object") {
	        const Component = getBBCodeTag(node.tag);
	        return /* @__PURE__ */ React__default["default"].createElement(Component, {
	          key: index,
	          node
	        });
	      }
	      return null;
	    });
	  }
	}
	const bbcodeParser = new BBCodeParser();

	exports.bbcodeParser = bbcodeParser;
	exports.registerBBCodeTag = registerBBCodeTag;

}));
//# sourceMappingURL=parser-34594393.js.map
