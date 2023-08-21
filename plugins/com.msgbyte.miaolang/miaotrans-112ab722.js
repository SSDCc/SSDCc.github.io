definePlugin('@plugins/com.msgbyte.miaolang/miaotrans-112ab722.js', ['exports', './index-f914e0eb', '@capital/common'], (function (exports, index, common) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var build = {};

	var trans = {};

	var base64 = {exports: {}};

	(function (module, exports) {
	(function (global, factory) {
	    module.exports = factory()
	        ;
	}((typeof self !== 'undefined' ? self
	    : typeof window !== 'undefined' ? window
	        : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal
	            : commonjsGlobal), function () {
	    /**
	     *  base64.ts
	     *
	     *  Licensed under the BSD 3-Clause License.
	     *    http://opensource.org/licenses/BSD-3-Clause
	     *
	     *  References:
	     *    http://en.wikipedia.org/wiki/Base64
	     *
	     * @author Dan Kogai (https://github.com/dankogai)
	     */
	    var version = '3.7.2';
	    /**
	     * @deprecated use lowercase `version`.
	     */
	    var VERSION = version;
	    var _hasatob = typeof atob === 'function';
	    var _hasbtoa = typeof btoa === 'function';
	    var _hasBuffer = typeof Buffer === 'function';
	    var _TD = typeof TextDecoder === 'function' ? new TextDecoder() : undefined;
	    var _TE = typeof TextEncoder === 'function' ? new TextEncoder() : undefined;
	    var b64ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	    var b64chs = Array.prototype.slice.call(b64ch);
	    var b64tab = (function (a) {
	        var tab = {};
	        a.forEach(function (c, i) { return tab[c] = i; });
	        return tab;
	    })(b64chs);
	    var b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
	    var _fromCC = String.fromCharCode.bind(String);
	    var _U8Afrom = typeof Uint8Array.from === 'function'
	        ? Uint8Array.from.bind(Uint8Array)
	        : function (it, fn) {
	            if (fn === void 0) { fn = function (x) { return x; }; }
	            return new Uint8Array(Array.prototype.slice.call(it, 0).map(fn));
	        };
	    var _mkUriSafe = function (src) { return src
	        .replace(/=/g, '').replace(/[+\/]/g, function (m0) { return m0 == '+' ? '-' : '_'; }); };
	    var _tidyB64 = function (s) { return s.replace(/[^A-Za-z0-9\+\/]/g, ''); };
	    /**
	     * polyfill version of `btoa`
	     */
	    var btoaPolyfill = function (bin) {
	        // console.log('polyfilled');
	        var u32, c0, c1, c2, asc = '';
	        var pad = bin.length % 3;
	        for (var i = 0; i < bin.length;) {
	            if ((c0 = bin.charCodeAt(i++)) > 255 ||
	                (c1 = bin.charCodeAt(i++)) > 255 ||
	                (c2 = bin.charCodeAt(i++)) > 255)
	                throw new TypeError('invalid character found');
	            u32 = (c0 << 16) | (c1 << 8) | c2;
	            asc += b64chs[u32 >> 18 & 63]
	                + b64chs[u32 >> 12 & 63]
	                + b64chs[u32 >> 6 & 63]
	                + b64chs[u32 & 63];
	        }
	        return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
	    };
	    /**
	     * does what `window.btoa` of web browsers do.
	     * @param {String} bin binary string
	     * @returns {string} Base64-encoded string
	     */
	    var _btoa = _hasbtoa ? function (bin) { return btoa(bin); }
	        : _hasBuffer ? function (bin) { return Buffer.from(bin, 'binary').toString('base64'); }
	            : btoaPolyfill;
	    var _fromUint8Array = _hasBuffer
	        ? function (u8a) { return Buffer.from(u8a).toString('base64'); }
	        : function (u8a) {
	            // cf. https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string/12713326#12713326
	            var maxargs = 0x1000;
	            var strs = [];
	            for (var i = 0, l = u8a.length; i < l; i += maxargs) {
	                strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
	            }
	            return _btoa(strs.join(''));
	        };
	    /**
	     * converts a Uint8Array to a Base64 string.
	     * @param {boolean} [urlsafe] URL-and-filename-safe a la RFC4648 §5
	     * @returns {string} Base64 string
	     */
	    var fromUint8Array = function (u8a, urlsafe) {
	        if (urlsafe === void 0) { urlsafe = false; }
	        return urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
	    };
	    // This trick is found broken https://github.com/dankogai/js-base64/issues/130
	    // const utob = (src: string) => unescape(encodeURIComponent(src));
	    // reverting good old fationed regexp
	    var cb_utob = function (c) {
	        if (c.length < 2) {
	            var cc = c.charCodeAt(0);
	            return cc < 0x80 ? c
	                : cc < 0x800 ? (_fromCC(0xc0 | (cc >>> 6))
	                    + _fromCC(0x80 | (cc & 0x3f)))
	                    : (_fromCC(0xe0 | ((cc >>> 12) & 0x0f))
	                        + _fromCC(0x80 | ((cc >>> 6) & 0x3f))
	                        + _fromCC(0x80 | (cc & 0x3f)));
	        }
	        else {
	            var cc = 0x10000
	                + (c.charCodeAt(0) - 0xD800) * 0x400
	                + (c.charCodeAt(1) - 0xDC00);
	            return (_fromCC(0xf0 | ((cc >>> 18) & 0x07))
	                + _fromCC(0x80 | ((cc >>> 12) & 0x3f))
	                + _fromCC(0x80 | ((cc >>> 6) & 0x3f))
	                + _fromCC(0x80 | (cc & 0x3f)));
	        }
	    };
	    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
	    /**
	     * @deprecated should have been internal use only.
	     * @param {string} src UTF-8 string
	     * @returns {string} UTF-16 string
	     */
	    var utob = function (u) { return u.replace(re_utob, cb_utob); };
	    //
	    var _encode = _hasBuffer
	        ? function (s) { return Buffer.from(s, 'utf8').toString('base64'); }
	        : _TE
	            ? function (s) { return _fromUint8Array(_TE.encode(s)); }
	            : function (s) { return _btoa(utob(s)); };
	    /**
	     * converts a UTF-8-encoded string to a Base64 string.
	     * @param {boolean} [urlsafe] if `true` make the result URL-safe
	     * @returns {string} Base64 string
	     */
	    var encode = function (src, urlsafe) {
	        if (urlsafe === void 0) { urlsafe = false; }
	        return urlsafe
	            ? _mkUriSafe(_encode(src))
	            : _encode(src);
	    };
	    /**
	     * converts a UTF-8-encoded string to URL-safe Base64 RFC4648 §5.
	     * @returns {string} Base64 string
	     */
	    var encodeURI = function (src) { return encode(src, true); };
	    // This trick is found broken https://github.com/dankogai/js-base64/issues/130
	    // const btou = (src: string) => decodeURIComponent(escape(src));
	    // reverting good old fationed regexp
	    var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
	    var cb_btou = function (cccc) {
	        switch (cccc.length) {
	            case 4:
	                var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
	                    | ((0x3f & cccc.charCodeAt(1)) << 12)
	                    | ((0x3f & cccc.charCodeAt(2)) << 6)
	                    | (0x3f & cccc.charCodeAt(3)), offset = cp - 0x10000;
	                return (_fromCC((offset >>> 10) + 0xD800)
	                    + _fromCC((offset & 0x3FF) + 0xDC00));
	            case 3:
	                return _fromCC(((0x0f & cccc.charCodeAt(0)) << 12)
	                    | ((0x3f & cccc.charCodeAt(1)) << 6)
	                    | (0x3f & cccc.charCodeAt(2)));
	            default:
	                return _fromCC(((0x1f & cccc.charCodeAt(0)) << 6)
	                    | (0x3f & cccc.charCodeAt(1)));
	        }
	    };
	    /**
	     * @deprecated should have been internal use only.
	     * @param {string} src UTF-16 string
	     * @returns {string} UTF-8 string
	     */
	    var btou = function (b) { return b.replace(re_btou, cb_btou); };
	    /**
	     * polyfill version of `atob`
	     */
	    var atobPolyfill = function (asc) {
	        // console.log('polyfilled');
	        asc = asc.replace(/\s+/g, '');
	        if (!b64re.test(asc))
	            throw new TypeError('malformed base64.');
	        asc += '=='.slice(2 - (asc.length & 3));
	        var u24, bin = '', r1, r2;
	        for (var i = 0; i < asc.length;) {
	            u24 = b64tab[asc.charAt(i++)] << 18
	                | b64tab[asc.charAt(i++)] << 12
	                | (r1 = b64tab[asc.charAt(i++)]) << 6
	                | (r2 = b64tab[asc.charAt(i++)]);
	            bin += r1 === 64 ? _fromCC(u24 >> 16 & 255)
	                : r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255)
	                    : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255);
	        }
	        return bin;
	    };
	    /**
	     * does what `window.atob` of web browsers do.
	     * @param {String} asc Base64-encoded string
	     * @returns {string} binary string
	     */
	    var _atob = _hasatob ? function (asc) { return atob(_tidyB64(asc)); }
	        : _hasBuffer ? function (asc) { return Buffer.from(asc, 'base64').toString('binary'); }
	            : atobPolyfill;
	    //
	    var _toUint8Array = _hasBuffer
	        ? function (a) { return _U8Afrom(Buffer.from(a, 'base64')); }
	        : function (a) { return _U8Afrom(_atob(a), function (c) { return c.charCodeAt(0); }); };
	    /**
	     * converts a Base64 string to a Uint8Array.
	     */
	    var toUint8Array = function (a) { return _toUint8Array(_unURI(a)); };
	    //
	    var _decode = _hasBuffer
	        ? function (a) { return Buffer.from(a, 'base64').toString('utf8'); }
	        : _TD
	            ? function (a) { return _TD.decode(_toUint8Array(a)); }
	            : function (a) { return btou(_atob(a)); };
	    var _unURI = function (a) { return _tidyB64(a.replace(/[-_]/g, function (m0) { return m0 == '-' ? '+' : '/'; })); };
	    /**
	     * converts a Base64 string to a UTF-8 string.
	     * @param {String} src Base64 string.  Both normal and URL-safe are supported
	     * @returns {string} UTF-8 string
	     */
	    var decode = function (src) { return _decode(_unURI(src)); };
	    /**
	     * check if a value is a valid Base64 string
	     * @param {String} src a value to check
	      */
	    var isValid = function (src) {
	        if (typeof src !== 'string')
	            return false;
	        var s = src.replace(/\s+/g, '').replace(/={0,2}$/, '');
	        return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
	    };
	    //
	    var _noEnum = function (v) {
	        return {
	            value: v, enumerable: false, writable: true, configurable: true
	        };
	    };
	    /**
	     * extend String.prototype with relevant methods
	     */
	    var extendString = function () {
	        var _add = function (name, body) { return Object.defineProperty(String.prototype, name, _noEnum(body)); };
	        _add('fromBase64', function () { return decode(this); });
	        _add('toBase64', function (urlsafe) { return encode(this, urlsafe); });
	        _add('toBase64URI', function () { return encode(this, true); });
	        _add('toBase64URL', function () { return encode(this, true); });
	        _add('toUint8Array', function () { return toUint8Array(this); });
	    };
	    /**
	     * extend Uint8Array.prototype with relevant methods
	     */
	    var extendUint8Array = function () {
	        var _add = function (name, body) { return Object.defineProperty(Uint8Array.prototype, name, _noEnum(body)); };
	        _add('toBase64', function (urlsafe) { return fromUint8Array(this, urlsafe); });
	        _add('toBase64URI', function () { return fromUint8Array(this, true); });
	        _add('toBase64URL', function () { return fromUint8Array(this, true); });
	    };
	    /**
	     * extend Builtin prototypes with relevant methods
	     */
	    var extendBuiltins = function () {
	        extendString();
	        extendUint8Array();
	    };
	    var gBase64 = {
	        version: version,
	        VERSION: VERSION,
	        atob: _atob,
	        atobPolyfill: atobPolyfill,
	        btoa: _btoa,
	        btoaPolyfill: btoaPolyfill,
	        fromBase64: decode,
	        toBase64: encode,
	        encode: encode,
	        encodeURI: encodeURI,
	        encodeURL: encodeURI,
	        utob: utob,
	        btou: btou,
	        decode: decode,
	        isValid: isValid,
	        fromUint8Array: fromUint8Array,
	        toUint8Array: toUint8Array,
	        extendString: extendString,
	        extendUint8Array: extendUint8Array,
	        extendBuiltins: extendBuiltins
	    };
	    //
	    // export Base64 to the namespace
	    //
	    // ES5 is yet to have Object.assign() that may make transpilers unhappy.
	    // gBase64.Base64 = Object.assign({}, gBase64);
	    gBase64.Base64 = {};
	    Object.keys(gBase64).forEach(function (k) { return gBase64.Base64[k] = gBase64[k]; });
	    return gBase64;
	}));
	}(base64));

	/**
	 * @author: oldj
	 * @homepage: https://oldj.net
	 */
	Object.defineProperty(trans, "__esModule", { value: true });
	trans.isMiao = trans.miao2human = trans.human2miao = void 0;
	var js_base64_1 = base64.exports;
	var b64 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/=';
	// const codes = ['0', '1234']
	var codes = ['\u200b', '\u200c\u200d'];
	// const codes = [
	//   '\u200b',
	//   '\u0300\u0301\u0302\u0303\u0304\u0306\u0307\u0308\u0309\u030a\u030b\u030c\u030d\u030e\u030f\u0310\u0311'
	//   + '\u0323\u0324\u0325\u0326\u0327\u0328\u032d\u032e',
	// ]
	var table = [];
	var makeTable = function () {
	    var sep = codes[0], chars = codes[1];
	    var char_count = b64.length;
	    var code_len = chars.length;
	    while (table.length < char_count) {
	        var table_len = table.length;
	        for (var i = 0; i < code_len; i++) {
	            var c = chars.charAt(i);
	            if (!table.includes(c)) {
	                if (table.length >= char_count)
	                    break;
	                table.push(c);
	            }
	            for (var j = 0; j < table_len; j++) {
	                if (table.length >= char_count)
	                    break;
	                var t = "".concat(c).concat(table[j]);
	                if (!table.includes(t)) {
	                    table.push(t);
	                }
	            }
	        }
	    }
	    for (var i = 0; i < table.length; i++) {
	        table[i] = sep + table[i];
	    }
	};
	makeTable();
	var addPunctuations = function (t, options) {
	    var _a = options !== null && options !== void 0 ? options : {}, _b = _a.calls, calls = _b === void 0 ? '喵' : _b, _c = _a.halfwidthSymbol, halfwidthSymbol = _c === void 0 ? false : _c;
	    var a = t.split('');
	    var idx = 0;
	    while (idx < a.length) {
	        var c = a[idx].charCodeAt(0);
	        var delta = (c % 60) + 1;
	        idx += delta;
	        if (!a[idx]) {
	            break;
	        }
	        a[idx] += calls;
	        var mod = idx % 32;
	        switch (mod) {
	            case 0:
	            case 1:
	            case 2:
	            case 3:
	                a[idx] += halfwidthSymbol ? ',' : '，';
	                break;
	            case 7:
	                a[idx] += halfwidthSymbol ? '.' : '。';
	                break;
	            case 8:
	                a[idx] += halfwidthSymbol ? '?' : '？';
	                break;
	            case 9:
	                a[idx] += halfwidthSymbol ? '!' : '！';
	                break;
	            case 10:
	                a[idx] += halfwidthSymbol ? '~' : '～';
	                break;
	        }
	    }
	    t = "".concat(calls).concat(a.join('')).concat(calls).concat(halfwidthSymbol ? '.' : '。');
	    return t;
	};
	/**
	 * Add Animal Calls
	 */
	var addCalls = function (t, options) {
	    t = addPunctuations(t, options);
	    return t;
	};
	var human2miao = function (t, options) {
	    t = js_base64_1.Base64.encode(t);
	    var len = t.length;
	    var arr = [];
	    for (var i = 0; i < len; i++) {
	        var c = t.charAt(i);
	        var n = b64.indexOf(c);
	        // console.log(c, n, table[n])
	        arr.push(table[n]);
	    }
	    var data = arr.join('');
	    return addCalls(data, options);
	};
	trans.human2miao = human2miao;
	var clean = function (t) {
	    return t.replace(/[^\u200b\u200c\u200d]/ig, '');
	};
	var miao2human = function (t) {
	    t = clean(t);
	    for (var idx = table.length; idx >= 0; idx--) {
	        var reg = new RegExp(table[idx], 'ig');
	        t = t.replace(reg, b64.charAt(idx));
	    }
	    t = js_base64_1.Base64.decode(t);
	    return t;
	};
	trans.miao2human = miao2human;
	/**
	 * 判断一个字符串是否是喵语言
	 */
	var isMiao$1 = function (t) {
	    if (!t)
	        return false;
	    return clean(t).length > 0;
	};
	trans.isMiao = isMiao$1;

	/**
	 * @author: oldj
	 * @homepage: https://oldj.net
	 */
	Object.defineProperty(build, "__esModule", { value: true });
	var trans_1 = trans;
	var _default = build.default = {
	    human2miao: trans_1.human2miao,
	    miao2human: trans_1.miao2human,
	    encode: trans_1.human2miao,
	    decode: trans_1.miao2human,
	    isMiao: trans_1.isMiao,
	};

	function encode(human) {
	  return _default.encode(human, {
	    calls: index.Translate.calls,
	    halfwidthSymbol: common.getLanguage() !== "zh-CN"
	  });
	}
	function decode(miao) {
	  return _default.decode(miao);
	}
	function isMiao(input) {
	  return _default.isMiao(input);
	}

	exports.decode = decode;
	exports.encode = encode;
	exports.isMiao = isMiao;

}));
//# sourceMappingURL=miaotrans-112ab722.js.map
