definePlugin('@plugins/com.msgbyte.genshin/index-b5ab0930.js', ['exports', 'react', './index-e0f14c29', 'axios', '@capital/common', '@capital/component', 'styled-components'], (function (exports, React$2, index, require$$1, common, component, styled) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var React__default = /*#__PURE__*/_interopDefaultLegacy(React$2);
	var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);
	var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getAugmentedNamespace(n) {
		if (n.__esModule) return n;
		var a = Object.defineProperty({}, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	var lib$3 = {};

	/******************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	/* global Reflect, Promise */

	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};

	function __extends$1(d, b) {
	    if (typeof b !== "function" && b !== null)
	        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	var __assign$1 = function() {
	    __assign$1 = Object.assign || function __assign(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign$1.apply(this, arguments);
	};

	function __rest(s, e) {
	    var t = {};
	    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	        t[p] = s[p];
	    if (s != null && typeof Object.getOwnPropertySymbols === "function")
	        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
	                t[p[i]] = s[p[i]];
	        }
	    return t;
	}

	function __decorate(decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	}

	function __param(paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	}

	function __metadata(metadataKey, metadataValue) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
	}

	function __awaiter(thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	}

	function __generator(thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	}

	var __createBinding = Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	        desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	});

	function __exportStar(m, o) {
	    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
	}

	function __values(o) {
	    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
	    if (m) return m.call(o);
	    if (o && typeof o.length === "number") return {
	        next: function () {
	            if (o && i >= o.length) o = void 0;
	            return { value: o && o[i++], done: !o };
	        }
	    };
	    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
	}

	function __read(o, n) {
	    var m = typeof Symbol === "function" && o[Symbol.iterator];
	    if (!m) return o;
	    var i = m.call(o), r, ar = [], e;
	    try {
	        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	    }
	    catch (error) { e = { error: error }; }
	    finally {
	        try {
	            if (r && !r.done && (m = i["return"])) m.call(i);
	        }
	        finally { if (e) throw e.error; }
	    }
	    return ar;
	}

	/** @deprecated */
	function __spread() {
	    for (var ar = [], i = 0; i < arguments.length; i++)
	        ar = ar.concat(__read(arguments[i]));
	    return ar;
	}

	/** @deprecated */
	function __spreadArrays() {
	    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
	    for (var r = Array(s), k = 0, i = 0; i < il; i++)
	        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
	            r[k] = a[j];
	    return r;
	}

	function __spreadArray(to, from, pack) {
	    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
	        if (ar || !(i in from)) {
	            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
	            ar[i] = from[i];
	        }
	    }
	    return to.concat(ar || Array.prototype.slice.call(from));
	}

	function __await(v) {
	    return this instanceof __await ? (this.v = v, this) : new __await(v);
	}

	function __asyncGenerator(thisArg, _arguments, generator) {
	    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	    var g = generator.apply(thisArg, _arguments || []), i, q = [];
	    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
	    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
	    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
	    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
	    function fulfill(value) { resume("next", value); }
	    function reject(value) { resume("throw", value); }
	    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
	}

	function __asyncDelegator(o) {
	    var i, p;
	    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
	    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
	}

	function __asyncValues(o) {
	    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	    var m = o[Symbol.asyncIterator], i;
	    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
	    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
	    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
	}

	function __makeTemplateObject(cooked, raw) {
	    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
	    return cooked;
	}
	var __setModuleDefault = Object.create ? (function(o, v) {
	    Object.defineProperty(o, "default", { enumerable: true, value: v });
	}) : function(o, v) {
	    o["default"] = v;
	};

	function __importStar(mod) {
	    if (mod && mod.__esModule) return mod;
	    var result = {};
	    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
	    __setModuleDefault(result, mod);
	    return result;
	}

	function __importDefault(mod) {
	    return (mod && mod.__esModule) ? mod : { default: mod };
	}

	function __classPrivateFieldGet(receiver, state, kind, f) {
	    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
	    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
	    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
	}

	function __classPrivateFieldSet(receiver, state, value, kind, f) {
	    if (kind === "m") throw new TypeError("Private method is not writable");
	    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
	    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
	    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
	}

	function __classPrivateFieldIn(state, receiver) {
	    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
	    return typeof state === "function" ? receiver === state : state.has(receiver);
	}

	var tslib_es6 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		__extends: __extends$1,
		get __assign () { return __assign$1; },
		__rest: __rest,
		__decorate: __decorate,
		__param: __param,
		__metadata: __metadata,
		__awaiter: __awaiter,
		__generator: __generator,
		__createBinding: __createBinding,
		__exportStar: __exportStar,
		__values: __values,
		__read: __read,
		__spread: __spread,
		__spreadArrays: __spreadArrays,
		__spreadArray: __spreadArray,
		__await: __await,
		__asyncGenerator: __asyncGenerator,
		__asyncDelegator: __asyncDelegator,
		__asyncValues: __asyncValues,
		__makeTemplateObject: __makeTemplateObject,
		__importStar: __importStar,
		__importDefault: __importDefault,
		__classPrivateFieldGet: __classPrivateFieldGet,
		__classPrivateFieldSet: __classPrivateFieldSet,
		__classPrivateFieldIn: __classPrivateFieldIn
	});

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(tslib_es6);

	var util = {};

	var getGachaData$1 = {};

	Object.defineProperty(getGachaData$1, "__esModule", { value: true });
	getGachaData$1.getOfficialGachaPool = getGachaData$1.getGachaData = getGachaData$1.getGachaIndex = void 0;
	const tslib_1 = require$$0;
	const axios_1 = tslib_1.__importDefault(require$$1__default["default"]);
	const API_ENDPOINT = 'https://webstatic.mihoyo.com/hk4e/gacha_info/cn_gf01';
	async function getGachaIndex() {
	    const { data } = await axios_1.default.get(`${API_ENDPOINT}/gacha/list.json`);
	    if (data.retcode !== 0 || !data.data)
	        throw { code: data.retcode, ...data };
	    return data?.data?.list;
	}
	getGachaData$1.getGachaIndex = getGachaIndex;
	async function getGachaData(id) {
	    return (await axios_1.default.get(`${API_ENDPOINT}/${id}/zh-cn.json`)).data;
	}
	getGachaData$1.getGachaData = getGachaData;
	async function getOfficialGachaPool(type) {
	    const list = await getGachaIndex();
	    const poolData = list.filter((i) => i.gacha_type === type);
	    if (poolData.length < 1)
	        return null;
	    const id = poolData[0].gacha_id;
	    const pool = await getGachaData(id);
	    pool.begin_time = poolData[0].begin_time;
	    pool.end_time = poolData[0].end_time;
	    return pool;
	}
	getGachaData$1.getOfficialGachaPool = getOfficialGachaPool;

	var poolStructureConverter$1 = {};

	Object.defineProperty(poolStructureConverter$1, "__esModule", { value: true });
	poolStructureConverter$1.poolStructureConverter = void 0;
	const gachaType = {
	    '200': 'permanent',
	    '100': 'novice',
	    '301': 'character',
	    '302': 'weapon'
	};
	const itemType = {
	    武器: 'weapon',
	    角色: 'character'
	};
	function poolStructureConverter(data) {
	    const pool = {
	        name: '',
	        type: '',
	        begin: '',
	        end: '',
	        upSSR: [],
	        upSR: [],
	        ssr: [],
	        sr: [],
	        r: []
	    };
	    pool.name = data.title.replace(/<\/?.+?>/g, '');
	    pool.type = gachaType[data.gacha_type];
	    pool.begin = data.begin_time;
	    pool.end = data.end_time;
	    // 5*
	    data.r5_prob_list.forEach((item) => {
	        const name = item.item_name;
	        const type = item.item_type;
	        const gachaItem = { name, type: itemType[type], rarity: 5 };
	        item.is_up === 1 ? pool.upSSR.push(gachaItem) : pool.ssr.push(gachaItem);
	    });
	    // 4*
	    data.r4_prob_list.forEach((item) => {
	        const name = item.item_name;
	        const type = item.item_type;
	        const gachaItem = { name, type: itemType[type], rarity: 4 };
	        item.is_up === 1 ? pool.upSR.push(gachaItem) : pool.sr.push(gachaItem);
	    });
	    // 3*
	    data.r3_prob_list.forEach((item) => {
	        const name = item.item_name;
	        const type = item.item_type;
	        const gachaItem = { name, type: itemType[type], rarity: 3 };
	        pool.r.push(gachaItem);
	    });
	    return pool;
	}
	poolStructureConverter$1.poolStructureConverter = poolStructureConverter;

	(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = require$$0;
	tslib_1.__exportStar(getGachaData$1, exports);
	tslib_1.__exportStar(poolStructureConverter$1, exports);

	}(util));

	var types = {};

	var App = {};

	Object.defineProperty(App, "__esModule", { value: true });

	var GachaPool$1 = {};

	Object.defineProperty(GachaPool$1, "__esModule", { value: true });

	(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = require$$0;
	tslib_1.__exportStar(App, exports);
	tslib_1.__exportStar(GachaPool$1, exports);

	}(types));

	(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.GenshinGachaKit = exports.util = void 0;
	const tslib_1 = require$$0;
	const util_1 = util;
	tslib_1.__exportStar(types, exports);
	exports.util = tslib_1.__importStar(util);
	function randomNum() {
	    return Math.random();
	}
	function randomPick(list) {
	    return list[Math.floor(Math.random() * list.length)];
	}
	class GenshinGachaKit {
	    constructor(gachaPool) {
	        // Init gacha pool
	        if (gachaPool) {
	            this.setGachaPool(gachaPool);
	        }
	        // Init counter
	        this.setCounter({
	            total: 0,
	            ensureSSR: 0,
	            lastUpSSR: 0,
	            lastUpSR: 0,
	            lastSSR: 0,
	            lastSR: 0,
	            upSSR: [],
	            upSR: [],
	            ssr: [],
	            sr: []
	        });
	        // Init result
	        this.setResult({
	            ssr: [],
	            sr: [],
	            r: []
	        });
	    }
	    /**
	     * @method setGachaPool 配置卡池信息
	     * @param {AppGachaPool} gachaPool 卡池信息
	     * @return {this}
	     */
	    setGachaPool(gachaPool) {
	        this._gachaPool = gachaPool;
	        return this;
	    }
	    async setOfficialGachaPool(type) {
	        const pool = await util_1.getOfficialGachaPool(type);
	        if (pool) {
	            this.setGachaPool(util_1.poolStructureConverter(pool));
	        }
	        else {
	            throw 'No such pool';
	        }
	        return this;
	    }
	    setCounter(name, value) {
	        this._counter = this._counter || {};
	        if (typeof name === 'string' && typeof value !== 'undefined') {
	            this._counter[name] = value;
	        }
	        else if (typeof name === 'object') {
	            this._counter = {
	                ...this._counter,
	                ...name
	            };
	        }
	        return this;
	    }
	    increaseCounter(name, increase = 1) {
	        const value = this.getCounter(name);
	        if (typeof value === 'number') {
	            this.setCounter(name, value + increase);
	        }
	        else if (value.constructor.name.toLowerCase() === 'array') {
	            this.setCounter(name, [...value, increase]);
	        }
	        return this;
	    }
	    clearCounter() {
	        this.setCounter({
	            total: 0,
	            ensureSSR: 0,
	            lastUpSSR: 0,
	            lastUpSR: 0,
	            lastSSR: 0,
	            lastSR: 0,
	            upSSR: [],
	            upSR: [],
	            ssr: [],
	            sr: []
	        });
	        return this;
	    }
	    /**
	     * @method getCounter 获取指定计数器记录，若未指定则以键值对返回全部计数器记录
	     * @param name
	     * total {number} 总抽取数;
	     * ensureSSR {0 | 1} 是否位于“大保底”状态;
	     * lastUpSSR {number} 距离上一次 UP 5 星已过去多少抽;
	     * lastUpSR {number} 距离上一次 UP 4 星已过去多少抽;
	     * lastSSR {number} 距离上一次 5 星已过去多少抽;
	     * lastSR {number} 距离上一次 4 星已过去多少抽;
	     * upSSR {number[]} 每次获取 UP 5 星的间隔;
	     * upSR {number[]} 每次获取 UP 4 星的间隔;
	     * ssr {number[]} 每次获取 5 星的间隔;
	     * sr {number[]} 每次获取 4 星的间隔;
	     * @return {number | number[] | AppCounter}
	     */
	    getCounter(name) {
	        return name ? this._counter?.[name] || 0 : this._counter;
	    }
	    setResult(type, value) {
	        if (typeof type === 'string' && typeof value !== 'undefined') {
	            this._result[type] = value;
	        }
	        else {
	            this._result = type;
	        }
	        return this;
	    }
	    increaseResult(type, item) {
	        const oldResult = this.getResult(type);
	        const sameItem = oldResult.filter((i) => i.name === item.name);
	        if (sameItem.length < 1) {
	            item.count = 1;
	            this.setResult(type, [...oldResult, item]);
	        }
	        else {
	            sameItem[0].count && sameItem[0].count++;
	        }
	        return this;
	    }
	    clearResult() {
	        this.setResult({
	            ssr: [],
	            sr: [],
	            r: []
	        });
	        return this;
	    }
	    /**
	     *
	     * @param type
	     * @returns
	     */
	    getResult(type) {
	        return type ? this._result?.[type] || [] : this._result;
	    }
	    /**
	     * @function specialRoll
	     * @param {number} count
	     * @return {0|1|2} 分别代表失败、抽中、抽中 UP
	     */
	    _generateRoll({ lastCount, baseChance, upChance, softEnsure, turningPoint, hardEnsure }) {
	        let chance = 0;
	        const more = (1 - baseChance) / (softEnsure - turningPoint);
	        if (lastCount <= turningPoint) {
	            chance = baseChance;
	        }
	        else {
	            chance = baseChance + more * (lastCount - turningPoint);
	        }
	        if (chance >= randomNum()) {
	            if (randomNum() >= upChance || hardEnsure) {
	                return 2;
	            }
	            return 1;
	        }
	        return 0;
	    }
	    rollSSR(ensure) {
	        this.increaseCounter('lastSSR');
	        this.increaseCounter('lastUpSSR');
	        const count = this.getCounter('lastSSR');
	        const upCount = this.getCounter('lastUpSSR');
	        const result = this._generateRoll({
	            lastCount: count,
	            baseChance: 0.006,
	            upChance: 0.5,
	            softEnsure: 90,
	            turningPoint: 72,
	            hardEnsure: ensure
	        });
	        if (result === 1) {
	            this.setCounter('ensureSSR', 1);
	        }
	        if (result === 2) {
	            this.setCounter('ensureSSR', 0);
	            this.increaseCounter('upSSR', upCount);
	            this.setCounter('lastUpSSR', 0);
	        }
	        if (result > 0) {
	            this.increaseCounter('ssr', count);
	            this.setCounter('lastSSR', 0);
	        }
	        return result;
	    }
	    rollSR() {
	        this.increaseCounter('lastSR');
	        this.increaseCounter('lastUpSR');
	        const result = this._generateRoll({
	            lastCount: this.getCounter('lastSR'),
	            baseChance: 0.051,
	            upChance: 0.5,
	            softEnsure: 10,
	            hardEnsure: false,
	            turningPoint: 7
	        });
	        if (result === 2) {
	            this.increaseCounter('upSR', this.getCounter('lastUpSR'));
	            this.setCounter('lastUpSR', 0);
	        }
	        if (result > 0) {
	            this.increaseCounter('sr', this.getCounter('lastSR'));
	            this.setCounter('lastSR', 0);
	        }
	        return result;
	    }
	    /**
	     * @method singleWish 进行单次抽取并获取结果
	     * @return {AppGachaItem} 抽取结果
	     */
	    singleWish() {
	        this.increaseCounter('total');
	        const getSSR = (isUP) => {
	            if (this._gachaPool.upSSR.length < 1) {
	                this._gachaPool.upSSR = this._gachaPool.ssr;
	            }
	            const character = randomPick(isUP ? this._gachaPool.upSSR : this._gachaPool.ssr);
	            character.rarity = 5;
	            this.increaseResult('ssr', character);
	            return character;
	        };
	        const getSR = (isUP) => {
	            if (this._gachaPool.upSR.length < 1) {
	                this._gachaPool.upSR = this._gachaPool.sr;
	            }
	            const character = randomPick(isUP ? this._gachaPool.upSR : this._gachaPool.sr);
	            character.rarity = 4;
	            this.increaseResult('sr', character);
	            return character;
	        };
	        const getR = () => {
	            const character = randomPick(this._gachaPool.r);
	            character.rarity = 3;
	            this.increaseResult('r', character);
	            return character;
	        };
	        const isSSR = this.rollSSR(Boolean(this.getCounter('ensureSSR')));
	        if (isSSR > 0) {
	            return getSSR(isSSR === 2);
	        }
	        else {
	            const isSR = this.rollSR();
	            if (isSR > 0) {
	                return getSR(isSR === 2);
	            }
	            else {
	                return getR();
	            }
	        }
	    }
	    /**
	     * @method multiWish 进行多次抽取并获取结果集合
	     * @param count 抽取的次数
	     * @return {AppGachaItem[]} 结果集合
	     */
	    multiWish(count) {
	        const result = [];
	        for (let i = 0; i < count; i++) {
	            result.push(this.singleWish());
	        }
	        return result;
	    }
	}
	exports.GenshinGachaKit = GenshinGachaKit;

	}(lib$3));

	var htmlReactParser = {exports: {}};

	var lib$2 = {};

	var possibleStandardNamesOptimized$1 = {};

	// An attribute in which the DOM/SVG standard name is the same as the React prop name (e.g., 'accept').
	var SAME$1 = 0;
	possibleStandardNamesOptimized$1.SAME = SAME$1;

	// An attribute in which the React prop name is the camelcased version of the DOM/SVG standard name (e.g., 'acceptCharset').
	var CAMELCASE$1 = 1;
	possibleStandardNamesOptimized$1.CAMELCASE = CAMELCASE$1;

	possibleStandardNamesOptimized$1.possibleStandardNames = {
	  accept: 0,
	  acceptCharset: 1,
	  'accept-charset': 'acceptCharset',
	  accessKey: 1,
	  action: 0,
	  allowFullScreen: 1,
	  alt: 0,
	  as: 0,
	  async: 0,
	  autoCapitalize: 1,
	  autoComplete: 1,
	  autoCorrect: 1,
	  autoFocus: 1,
	  autoPlay: 1,
	  autoSave: 1,
	  capture: 0,
	  cellPadding: 1,
	  cellSpacing: 1,
	  challenge: 0,
	  charSet: 1,
	  checked: 0,
	  children: 0,
	  cite: 0,
	  class: 'className',
	  classID: 1,
	  className: 1,
	  cols: 0,
	  colSpan: 1,
	  content: 0,
	  contentEditable: 1,
	  contextMenu: 1,
	  controls: 0,
	  controlsList: 1,
	  coords: 0,
	  crossOrigin: 1,
	  dangerouslySetInnerHTML: 1,
	  data: 0,
	  dateTime: 1,
	  default: 0,
	  defaultChecked: 1,
	  defaultValue: 1,
	  defer: 0,
	  dir: 0,
	  disabled: 0,
	  disablePictureInPicture: 1,
	  disableRemotePlayback: 1,
	  download: 0,
	  draggable: 0,
	  encType: 1,
	  enterKeyHint: 1,
	  for: 'htmlFor',
	  form: 0,
	  formMethod: 1,
	  formAction: 1,
	  formEncType: 1,
	  formNoValidate: 1,
	  formTarget: 1,
	  frameBorder: 1,
	  headers: 0,
	  height: 0,
	  hidden: 0,
	  high: 0,
	  href: 0,
	  hrefLang: 1,
	  htmlFor: 1,
	  httpEquiv: 1,
	  'http-equiv': 'httpEquiv',
	  icon: 0,
	  id: 0,
	  innerHTML: 1,
	  inputMode: 1,
	  integrity: 0,
	  is: 0,
	  itemID: 1,
	  itemProp: 1,
	  itemRef: 1,
	  itemScope: 1,
	  itemType: 1,
	  keyParams: 1,
	  keyType: 1,
	  kind: 0,
	  label: 0,
	  lang: 0,
	  list: 0,
	  loop: 0,
	  low: 0,
	  manifest: 0,
	  marginWidth: 1,
	  marginHeight: 1,
	  max: 0,
	  maxLength: 1,
	  media: 0,
	  mediaGroup: 1,
	  method: 0,
	  min: 0,
	  minLength: 1,
	  multiple: 0,
	  muted: 0,
	  name: 0,
	  noModule: 1,
	  nonce: 0,
	  noValidate: 1,
	  open: 0,
	  optimum: 0,
	  pattern: 0,
	  placeholder: 0,
	  playsInline: 1,
	  poster: 0,
	  preload: 0,
	  profile: 0,
	  radioGroup: 1,
	  readOnly: 1,
	  referrerPolicy: 1,
	  rel: 0,
	  required: 0,
	  reversed: 0,
	  role: 0,
	  rows: 0,
	  rowSpan: 1,
	  sandbox: 0,
	  scope: 0,
	  scoped: 0,
	  scrolling: 0,
	  seamless: 0,
	  selected: 0,
	  shape: 0,
	  size: 0,
	  sizes: 0,
	  span: 0,
	  spellCheck: 1,
	  src: 0,
	  srcDoc: 1,
	  srcLang: 1,
	  srcSet: 1,
	  start: 0,
	  step: 0,
	  style: 0,
	  summary: 0,
	  tabIndex: 1,
	  target: 0,
	  title: 0,
	  type: 0,
	  useMap: 1,
	  value: 0,
	  width: 0,
	  wmode: 0,
	  wrap: 0,
	  about: 0,
	  accentHeight: 1,
	  'accent-height': 'accentHeight',
	  accumulate: 0,
	  additive: 0,
	  alignmentBaseline: 1,
	  'alignment-baseline': 'alignmentBaseline',
	  allowReorder: 1,
	  alphabetic: 0,
	  amplitude: 0,
	  arabicForm: 1,
	  'arabic-form': 'arabicForm',
	  ascent: 0,
	  attributeName: 1,
	  attributeType: 1,
	  autoReverse: 1,
	  azimuth: 0,
	  baseFrequency: 1,
	  baselineShift: 1,
	  'baseline-shift': 'baselineShift',
	  baseProfile: 1,
	  bbox: 0,
	  begin: 0,
	  bias: 0,
	  by: 0,
	  calcMode: 1,
	  capHeight: 1,
	  'cap-height': 'capHeight',
	  clip: 0,
	  clipPath: 1,
	  'clip-path': 'clipPath',
	  clipPathUnits: 1,
	  clipRule: 1,
	  'clip-rule': 'clipRule',
	  color: 0,
	  colorInterpolation: 1,
	  'color-interpolation': 'colorInterpolation',
	  colorInterpolationFilters: 1,
	  'color-interpolation-filters': 'colorInterpolationFilters',
	  colorProfile: 1,
	  'color-profile': 'colorProfile',
	  colorRendering: 1,
	  'color-rendering': 'colorRendering',
	  contentScriptType: 1,
	  contentStyleType: 1,
	  cursor: 0,
	  cx: 0,
	  cy: 0,
	  d: 0,
	  datatype: 0,
	  decelerate: 0,
	  descent: 0,
	  diffuseConstant: 1,
	  direction: 0,
	  display: 0,
	  divisor: 0,
	  dominantBaseline: 1,
	  'dominant-baseline': 'dominantBaseline',
	  dur: 0,
	  dx: 0,
	  dy: 0,
	  edgeMode: 1,
	  elevation: 0,
	  enableBackground: 1,
	  'enable-background': 'enableBackground',
	  end: 0,
	  exponent: 0,
	  externalResourcesRequired: 1,
	  fill: 0,
	  fillOpacity: 1,
	  'fill-opacity': 'fillOpacity',
	  fillRule: 1,
	  'fill-rule': 'fillRule',
	  filter: 0,
	  filterRes: 1,
	  filterUnits: 1,
	  floodOpacity: 1,
	  'flood-opacity': 'floodOpacity',
	  floodColor: 1,
	  'flood-color': 'floodColor',
	  focusable: 0,
	  fontFamily: 1,
	  'font-family': 'fontFamily',
	  fontSize: 1,
	  'font-size': 'fontSize',
	  fontSizeAdjust: 1,
	  'font-size-adjust': 'fontSizeAdjust',
	  fontStretch: 1,
	  'font-stretch': 'fontStretch',
	  fontStyle: 1,
	  'font-style': 'fontStyle',
	  fontVariant: 1,
	  'font-variant': 'fontVariant',
	  fontWeight: 1,
	  'font-weight': 'fontWeight',
	  format: 0,
	  from: 0,
	  fx: 0,
	  fy: 0,
	  g1: 0,
	  g2: 0,
	  glyphName: 1,
	  'glyph-name': 'glyphName',
	  glyphOrientationHorizontal: 1,
	  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
	  glyphOrientationVertical: 1,
	  'glyph-orientation-vertical': 'glyphOrientationVertical',
	  glyphRef: 1,
	  gradientTransform: 1,
	  gradientUnits: 1,
	  hanging: 0,
	  horizAdvX: 1,
	  'horiz-adv-x': 'horizAdvX',
	  horizOriginX: 1,
	  'horiz-origin-x': 'horizOriginX',
	  ideographic: 0,
	  imageRendering: 1,
	  'image-rendering': 'imageRendering',
	  in2: 0,
	  in: 0,
	  inlist: 0,
	  intercept: 0,
	  k1: 0,
	  k2: 0,
	  k3: 0,
	  k4: 0,
	  k: 0,
	  kernelMatrix: 1,
	  kernelUnitLength: 1,
	  kerning: 0,
	  keyPoints: 1,
	  keySplines: 1,
	  keyTimes: 1,
	  lengthAdjust: 1,
	  letterSpacing: 1,
	  'letter-spacing': 'letterSpacing',
	  lightingColor: 1,
	  'lighting-color': 'lightingColor',
	  limitingConeAngle: 1,
	  local: 0,
	  markerEnd: 1,
	  'marker-end': 'markerEnd',
	  markerHeight: 1,
	  markerMid: 1,
	  'marker-mid': 'markerMid',
	  markerStart: 1,
	  'marker-start': 'markerStart',
	  markerUnits: 1,
	  markerWidth: 1,
	  mask: 0,
	  maskContentUnits: 1,
	  maskUnits: 1,
	  mathematical: 0,
	  mode: 0,
	  numOctaves: 1,
	  offset: 0,
	  opacity: 0,
	  operator: 0,
	  order: 0,
	  orient: 0,
	  orientation: 0,
	  origin: 0,
	  overflow: 0,
	  overlinePosition: 1,
	  'overline-position': 'overlinePosition',
	  overlineThickness: 1,
	  'overline-thickness': 'overlineThickness',
	  paintOrder: 1,
	  'paint-order': 'paintOrder',
	  panose1: 0,
	  'panose-1': 'panose1',
	  pathLength: 1,
	  patternContentUnits: 1,
	  patternTransform: 1,
	  patternUnits: 1,
	  pointerEvents: 1,
	  'pointer-events': 'pointerEvents',
	  points: 0,
	  pointsAtX: 1,
	  pointsAtY: 1,
	  pointsAtZ: 1,
	  prefix: 0,
	  preserveAlpha: 1,
	  preserveAspectRatio: 1,
	  primitiveUnits: 1,
	  property: 0,
	  r: 0,
	  radius: 0,
	  refX: 1,
	  refY: 1,
	  renderingIntent: 1,
	  'rendering-intent': 'renderingIntent',
	  repeatCount: 1,
	  repeatDur: 1,
	  requiredExtensions: 1,
	  requiredFeatures: 1,
	  resource: 0,
	  restart: 0,
	  result: 0,
	  results: 0,
	  rotate: 0,
	  rx: 0,
	  ry: 0,
	  scale: 0,
	  security: 0,
	  seed: 0,
	  shapeRendering: 1,
	  'shape-rendering': 'shapeRendering',
	  slope: 0,
	  spacing: 0,
	  specularConstant: 1,
	  specularExponent: 1,
	  speed: 0,
	  spreadMethod: 1,
	  startOffset: 1,
	  stdDeviation: 1,
	  stemh: 0,
	  stemv: 0,
	  stitchTiles: 1,
	  stopColor: 1,
	  'stop-color': 'stopColor',
	  stopOpacity: 1,
	  'stop-opacity': 'stopOpacity',
	  strikethroughPosition: 1,
	  'strikethrough-position': 'strikethroughPosition',
	  strikethroughThickness: 1,
	  'strikethrough-thickness': 'strikethroughThickness',
	  string: 0,
	  stroke: 0,
	  strokeDasharray: 1,
	  'stroke-dasharray': 'strokeDasharray',
	  strokeDashoffset: 1,
	  'stroke-dashoffset': 'strokeDashoffset',
	  strokeLinecap: 1,
	  'stroke-linecap': 'strokeLinecap',
	  strokeLinejoin: 1,
	  'stroke-linejoin': 'strokeLinejoin',
	  strokeMiterlimit: 1,
	  'stroke-miterlimit': 'strokeMiterlimit',
	  strokeWidth: 1,
	  'stroke-width': 'strokeWidth',
	  strokeOpacity: 1,
	  'stroke-opacity': 'strokeOpacity',
	  suppressContentEditableWarning: 1,
	  suppressHydrationWarning: 1,
	  surfaceScale: 1,
	  systemLanguage: 1,
	  tableValues: 1,
	  targetX: 1,
	  targetY: 1,
	  textAnchor: 1,
	  'text-anchor': 'textAnchor',
	  textDecoration: 1,
	  'text-decoration': 'textDecoration',
	  textLength: 1,
	  textRendering: 1,
	  'text-rendering': 'textRendering',
	  to: 0,
	  transform: 0,
	  typeof: 0,
	  u1: 0,
	  u2: 0,
	  underlinePosition: 1,
	  'underline-position': 'underlinePosition',
	  underlineThickness: 1,
	  'underline-thickness': 'underlineThickness',
	  unicode: 0,
	  unicodeBidi: 1,
	  'unicode-bidi': 'unicodeBidi',
	  unicodeRange: 1,
	  'unicode-range': 'unicodeRange',
	  unitsPerEm: 1,
	  'units-per-em': 'unitsPerEm',
	  unselectable: 0,
	  vAlphabetic: 1,
	  'v-alphabetic': 'vAlphabetic',
	  values: 0,
	  vectorEffect: 1,
	  'vector-effect': 'vectorEffect',
	  version: 0,
	  vertAdvY: 1,
	  'vert-adv-y': 'vertAdvY',
	  vertOriginX: 1,
	  'vert-origin-x': 'vertOriginX',
	  vertOriginY: 1,
	  'vert-origin-y': 'vertOriginY',
	  vHanging: 1,
	  'v-hanging': 'vHanging',
	  vIdeographic: 1,
	  'v-ideographic': 'vIdeographic',
	  viewBox: 1,
	  viewTarget: 1,
	  visibility: 0,
	  vMathematical: 1,
	  'v-mathematical': 'vMathematical',
	  vocab: 0,
	  widths: 0,
	  wordSpacing: 1,
	  'word-spacing': 'wordSpacing',
	  writingMode: 1,
	  'writing-mode': 'writingMode',
	  x1: 0,
	  x2: 0,
	  x: 0,
	  xChannelSelector: 1,
	  xHeight: 1,
	  'x-height': 'xHeight',
	  xlinkActuate: 1,
	  'xlink:actuate': 'xlinkActuate',
	  xlinkArcrole: 1,
	  'xlink:arcrole': 'xlinkArcrole',
	  xlinkHref: 1,
	  'xlink:href': 'xlinkHref',
	  xlinkRole: 1,
	  'xlink:role': 'xlinkRole',
	  xlinkShow: 1,
	  'xlink:show': 'xlinkShow',
	  xlinkTitle: 1,
	  'xlink:title': 'xlinkTitle',
	  xlinkType: 1,
	  'xlink:type': 'xlinkType',
	  xmlBase: 1,
	  'xml:base': 'xmlBase',
	  xmlLang: 1,
	  'xml:lang': 'xmlLang',
	  xmlns: 0,
	  'xml:space': 'xmlSpace',
	  xmlnsXlink: 1,
	  'xmlns:xlink': 'xmlnsXlink',
	  xmlSpace: 1,
	  y1: 0,
	  y2: 0,
	  y: 0,
	  yChannelSelector: 1,
	  z: 0,
	  zoomAndPan: 1
	};

	Object.defineProperty(lib$2, '__esModule', { value: true });

	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
	}

	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
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

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	// A reserved attribute.
	// It is handled by React separately and shouldn't be written to the DOM.
	var RESERVED = 0; // A simple string attribute.
	// Attributes that aren't in the filter are presumed to have this type.

	var STRING = 1; // A string attribute that accepts booleans in React. In HTML, these are called
	// "enumerated" attributes with "true" and "false" as possible values.
	// When true, it should be set to a "true" string.
	// When false, it should be set to a "false" string.

	var BOOLEANISH_STRING = 2; // A real boolean attribute.
	// When true, it should be present (set either to an empty string or its name).
	// When false, it should be omitted.

	var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
	// When true, it should be present (set either to an empty string or its name).
	// When false, it should be omitted.
	// For any other value, should be present with that value.

	var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
	// When falsy, it should be removed.

	var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
	// When falsy, it should be removed.

	var POSITIVE_NUMERIC = 6;
	function getPropertyInfo(name) {
	  return properties.hasOwnProperty(name) ? properties[name] : null;
	}

	function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL, removeEmptyString) {
	  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
	  this.attributeName = attributeName;
	  this.attributeNamespace = attributeNamespace;
	  this.mustUseProperty = mustUseProperty;
	  this.propertyName = name;
	  this.type = type;
	  this.sanitizeURL = sanitizeURL;
	  this.removeEmptyString = removeEmptyString;
	} // When adding attributes to this list, be sure to also add them to
	// the `possibleStandardNames` module to ensure casing and incorrect
	// name warnings.


	var properties = {}; // These props are reserved by React. They shouldn't be written to the DOM.

	var reservedProps = ['children', 'dangerouslySetInnerHTML', // TODO: This prevents the assignment of defaultValue to regular
	// elements (not just inputs). Now that ReactDOMInput assigns to the
	// defaultValue property -- do we need this?
	'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'];
	reservedProps.forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
	  name, // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // A few React string attributes have a different name.
	// This is a mapping from React prop names to the attribute names.

	[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
	  var _ref2 = _slicedToArray(_ref, 2),
	      name = _ref2[0],
	      attributeName = _ref2[1];

	  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
	  attributeName, // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These are "enumerated" HTML attributes that accept "true" and "false".
	// In React, we let users pass `true` and `false` even though technically
	// these aren't boolean attributes (they are coerced to strings).

	['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
	  name.toLowerCase(), // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These are "enumerated" SVG attributes that accept "true" and "false".
	// In React, we let users pass `true` and `false` even though technically
	// these aren't boolean attributes (they are coerced to strings).
	// Since these are SVG attributes, their attribute names are case-sensitive.

	['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
	  name, // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These are HTML boolean attributes.

	['allowFullScreen', 'async', // Note: there is a special case that prevents it from being written to the DOM
	// on the client side because the browsers are inconsistent. Instead we call focus().
	'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'disableRemotePlayback', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', // Microdata
	'itemScope'].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
	  name.toLowerCase(), // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These are the few React props that we set as DOM properties
	// rather than attributes. These are all booleans.

	['checked', // Note: `option.selected` is not updated if `select.multiple` is
	// disabled with `removeAttribute`. We have special logic for handling this.
	'multiple', 'muted', 'selected' // NOTE: if you add a camelCased prop to this list,
	// you'll need to set attributeName to name.toLowerCase()
	// instead in the assignment below.
	].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
	  name, // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These are HTML attributes that are "overloaded booleans": they behave like
	// booleans, but can also accept a string value.

	['capture', 'download' // NOTE: if you add a camelCased prop to this list,
	// you'll need to set attributeName to name.toLowerCase()
	// instead in the assignment below.
	].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
	  name, // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These are HTML attributes that must be positive numbers.

	['cols', 'rows', 'size', 'span' // NOTE: if you add a camelCased prop to this list,
	// you'll need to set attributeName to name.toLowerCase()
	// instead in the assignment below.
	].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
	  name, // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These are HTML attributes that must be numbers.

	['rowSpan', 'start'].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
	  name.toLowerCase(), // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	});
	var CAMELIZE = /[\-\:]([a-z])/g;

	var capitalize$1 = function capitalize(token) {
	  return token[1].toUpperCase();
	}; // This is a list of all SVG attributes that need special casing, namespacing,
	// or boolean value assignment. Regular attributes that just accept strings
	// and have the same names are omitted, just like in the HTML attribute filter.
	// Some of these attributes can be hard to find. This list was created by
	// scraping the MDN documentation.


	['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height' // NOTE: if you add a camelCased prop to this list,
	// you'll need to set attributeName to name.toLowerCase()
	// instead in the assignment below.
	].forEach(function (attributeName) {
	  var name = attributeName.replace(CAMELIZE, capitalize$1);
	  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
	  attributeName, null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // String SVG attributes with the xlink namespace.

	['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type' // NOTE: if you add a camelCased prop to this list,
	// you'll need to set attributeName to name.toLowerCase()
	// instead in the assignment below.
	].forEach(function (attributeName) {
	  var name = attributeName.replace(CAMELIZE, capitalize$1);
	  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
	  attributeName, 'http://www.w3.org/1999/xlink', false, // sanitizeURL
	  false);
	}); // String SVG attributes with the xml namespace.

	['xml:base', 'xml:lang', 'xml:space' // NOTE: if you add a camelCased prop to this list,
	// you'll need to set attributeName to name.toLowerCase()
	// instead in the assignment below.
	].forEach(function (attributeName) {
	  var name = attributeName.replace(CAMELIZE, capitalize$1);
	  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
	  attributeName, 'http://www.w3.org/XML/1998/namespace', false, // sanitizeURL
	  false);
	}); // These attribute exists both in HTML and SVG.
	// The attribute name is case-sensitive in SVG so we can't just use
	// the React name like we do for attributes that exist only in HTML.

	['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
	  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
	  attributeName.toLowerCase(), // attributeName
	  null, // attributeNamespace
	  false, // sanitizeURL
	  false);
	}); // These attributes accept URLs. These must not allow javascript: URLS.
	// These will also need to accept Trusted Types object in the future.

	var xlinkHref = 'xlinkHref';
	properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, // mustUseProperty
	'xlink:href', 'http://www.w3.org/1999/xlink', true, // sanitizeURL
	false);
	['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
	  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
	  attributeName.toLowerCase(), // attributeName
	  null, // attributeNamespace
	  true, // sanitizeURL
	  true);
	});

	var _require = possibleStandardNamesOptimized$1,
	    CAMELCASE = _require.CAMELCASE,
	    SAME = _require.SAME,
	    possibleStandardNamesOptimized = _require.possibleStandardNames;

	var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
	var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
	/**
	 * Checks whether a property name is a custom attribute.
	 *
	 * @see {@link https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/HTMLDOMPropertyConfig.js#L23-L25}
	 *
	 * @param {string}
	 * @return {boolean}
	 */

	var isCustomAttribute = RegExp.prototype.test.bind( // eslint-disable-next-line no-misleading-character-class
	new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));
	var possibleStandardNames = Object.keys(possibleStandardNamesOptimized).reduce(function (accumulator, standardName) {
	  var propName = possibleStandardNamesOptimized[standardName];

	  if (propName === SAME) {
	    accumulator[standardName] = standardName;
	  } else if (propName === CAMELCASE) {
	    accumulator[standardName.toLowerCase()] = standardName;
	  } else {
	    accumulator[standardName] = propName;
	  }

	  return accumulator;
	}, {});

	lib$2.BOOLEAN = BOOLEAN;
	lib$2.BOOLEANISH_STRING = BOOLEANISH_STRING;
	lib$2.NUMERIC = NUMERIC;
	lib$2.OVERLOADED_BOOLEAN = OVERLOADED_BOOLEAN;
	lib$2.POSITIVE_NUMERIC = POSITIVE_NUMERIC;
	lib$2.RESERVED = RESERVED;
	lib$2.STRING = STRING;
	lib$2.getPropertyInfo = getPropertyInfo;
	lib$2.isCustomAttribute = isCustomAttribute;
	lib$2.possibleStandardNames = possibleStandardNames;

	var cjs = {};

	// http://www.w3.org/TR/CSS21/grammar.html
	// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
	var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

	var NEWLINE_REGEX = /\n/g;
	var WHITESPACE_REGEX = /^\s*/;

	// declaration
	var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
	var COLON_REGEX = /^:\s*/;
	var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
	var SEMICOLON_REGEX = /^[;\s]*/;

	// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
	var TRIM_REGEX = /^\s+|\s+$/g;

	// strings
	var NEWLINE = '\n';
	var FORWARD_SLASH = '/';
	var ASTERISK = '*';
	var EMPTY_STRING = '';

	// types
	var TYPE_COMMENT = 'comment';
	var TYPE_DECLARATION = 'declaration';

	/**
	 * @param {String} style
	 * @param {Object} [options]
	 * @return {Object[]}
	 * @throws {TypeError}
	 * @throws {Error}
	 */
	var inlineStyleParser = function(style, options) {
	  if (typeof style !== 'string') {
	    throw new TypeError('First argument must be a string');
	  }

	  if (!style) return [];

	  options = options || {};

	  /**
	   * Positional.
	   */
	  var lineno = 1;
	  var column = 1;

	  /**
	   * Update lineno and column based on `str`.
	   *
	   * @param {String} str
	   */
	  function updatePosition(str) {
	    var lines = str.match(NEWLINE_REGEX);
	    if (lines) lineno += lines.length;
	    var i = str.lastIndexOf(NEWLINE);
	    column = ~i ? str.length - i : column + str.length;
	  }

	  /**
	   * Mark position and patch `node.position`.
	   *
	   * @return {Function}
	   */
	  function position() {
	    var start = { line: lineno, column: column };
	    return function(node) {
	      node.position = new Position(start);
	      whitespace();
	      return node;
	    };
	  }

	  /**
	   * Store position information for a node.
	   *
	   * @constructor
	   * @property {Object} start
	   * @property {Object} end
	   * @property {undefined|String} source
	   */
	  function Position(start) {
	    this.start = start;
	    this.end = { line: lineno, column: column };
	    this.source = options.source;
	  }

	  /**
	   * Non-enumerable source string.
	   */
	  Position.prototype.content = style;

	  /**
	   * Error `msg`.
	   *
	   * @param {String} msg
	   * @throws {Error}
	   */
	  function error(msg) {
	    var err = new Error(
	      options.source + ':' + lineno + ':' + column + ': ' + msg
	    );
	    err.reason = msg;
	    err.filename = options.source;
	    err.line = lineno;
	    err.column = column;
	    err.source = style;

	    if (options.silent) ; else {
	      throw err;
	    }
	  }

	  /**
	   * Match `re` and return captures.
	   *
	   * @param {RegExp} re
	   * @return {undefined|Array}
	   */
	  function match(re) {
	    var m = re.exec(style);
	    if (!m) return;
	    var str = m[0];
	    updatePosition(str);
	    style = style.slice(str.length);
	    return m;
	  }

	  /**
	   * Parse whitespace.
	   */
	  function whitespace() {
	    match(WHITESPACE_REGEX);
	  }

	  /**
	   * Parse comments.
	   *
	   * @param {Object[]} [rules]
	   * @return {Object[]}
	   */
	  function comments(rules) {
	    var c;
	    rules = rules || [];
	    while ((c = comment())) {
	      if (c !== false) {
	        rules.push(c);
	      }
	    }
	    return rules;
	  }

	  /**
	   * Parse comment.
	   *
	   * @return {Object}
	   * @throws {Error}
	   */
	  function comment() {
	    var pos = position();
	    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;

	    var i = 2;
	    while (
	      EMPTY_STRING != style.charAt(i) &&
	      (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))
	    ) {
	      ++i;
	    }
	    i += 2;

	    if (EMPTY_STRING === style.charAt(i - 1)) {
	      return error('End of comment missing');
	    }

	    var str = style.slice(2, i - 2);
	    column += 2;
	    updatePosition(str);
	    style = style.slice(i);
	    column += 2;

	    return pos({
	      type: TYPE_COMMENT,
	      comment: str
	    });
	  }

	  /**
	   * Parse declaration.
	   *
	   * @return {Object}
	   * @throws {Error}
	   */
	  function declaration() {
	    var pos = position();

	    // prop
	    var prop = match(PROPERTY_REGEX);
	    if (!prop) return;
	    comment();

	    // :
	    if (!match(COLON_REGEX)) return error("property missing ':'");

	    // val
	    var val = match(VALUE_REGEX);

	    var ret = pos({
	      type: TYPE_DECLARATION,
	      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
	      value: val
	        ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING))
	        : EMPTY_STRING
	    });

	    // ;
	    match(SEMICOLON_REGEX);

	    return ret;
	  }

	  /**
	   * Parse declarations.
	   *
	   * @return {Object[]}
	   */
	  function declarations() {
	    var decls = [];

	    comments(decls);

	    // declarations
	    var decl;
	    while ((decl = declaration())) {
	      if (decl !== false) {
	        decls.push(decl);
	        comments(decls);
	      }
	    }

	    return decls;
	  }

	  whitespace();
	  return declarations();
	};

	/**
	 * Trim `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	function trim(str) {
	  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
	}

	var parse = inlineStyleParser;

	/**
	 * Parses inline style to object.
	 *
	 * @example
	 * // returns { 'line-height': '42' }
	 * StyleToObject('line-height: 42;');
	 *
	 * @param  {String}      style      - The inline style.
	 * @param  {Function}    [iterator] - The iterator function.
	 * @return {null|Object}
	 */
	function StyleToObject(style, iterator) {
	  var output = null;
	  if (!style || typeof style !== 'string') {
	    return output;
	  }

	  var declaration;
	  var declarations = parse(style);
	  var hasIterator = typeof iterator === 'function';
	  var property;
	  var value;

	  for (var i = 0, len = declarations.length; i < len; i++) {
	    declaration = declarations[i];
	    property = declaration.property;
	    value = declaration.value;

	    if (hasIterator) {
	      iterator(property, value, declaration);
	    } else if (value) {
	      output || (output = {});
	      output[property] = value;
	    }
	  }

	  return output;
	}

	var styleToObject = StyleToObject;

	var utilities$4 = {};

	utilities$4.__esModule = true;
	utilities$4.camelCase = void 0;
	var CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9-]+$/;
	var HYPHEN_REGEX = /-([a-z])/g;
	var NO_HYPHEN_REGEX = /^[^-]+$/;
	var VENDOR_PREFIX_REGEX = /^-(webkit|moz|ms|o|khtml)-/;
	var MS_VENDOR_PREFIX_REGEX = /^-(ms)-/;
	var skipCamelCase = function (property) {
	    return !property ||
	        NO_HYPHEN_REGEX.test(property) ||
	        CUSTOM_PROPERTY_REGEX.test(property);
	};
	var capitalize = function (match, character) {
	    return character.toUpperCase();
	};
	var trimHyphen = function (match, prefix) { return "".concat(prefix, "-"); };
	var camelCase = function (property, options) {
	    if (options === void 0) { options = {}; }
	    if (skipCamelCase(property)) {
	        return property;
	    }
	    property = property.toLowerCase();
	    if (options.reactCompat) {
	        property = property.replace(MS_VENDOR_PREFIX_REGEX, trimHyphen);
	    }
	    else {
	        property = property.replace(VENDOR_PREFIX_REGEX, trimHyphen);
	    }
	    return property.replace(HYPHEN_REGEX, capitalize);
	};
	utilities$4.camelCase = camelCase;

	(function (exports) {
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	exports.__esModule = true;
	var style_to_object_1 = __importDefault(styleToObject);
	var utilities_1 = utilities$4;
	function StyleToJS(style, options) {
	    var output = {};
	    if (!style || typeof style !== 'string') {
	        return output;
	    }
	    (0, style_to_object_1["default"])(style, function (property, value) {
	        if (property && value) {
	            output[(0, utilities_1.camelCase)(property, options)] = value;
	        }
	    });
	    return output;
	}
	exports["default"] = StyleToJS;
	}(cjs));

	var React$1 = React__default["default"];
	var styleToJS = cjs.default;

	/**
	 * Swap key with value in an object.
	 *
	 * @param {object} obj - The object.
	 * @param {Function} [override] - The override method.
	 * @returns - The inverted object.
	 */
	function invertObject(obj, override) {
	  if (!obj || typeof obj !== 'object') {
	    throw new TypeError('First argument must be an object');
	  }

	  var key;
	  var value;
	  var isOverridePresent = typeof override === 'function';
	  var overrides = {};
	  var result = {};

	  for (key in obj) {
	    value = obj[key];

	    if (isOverridePresent) {
	      overrides = override(key, value);
	      if (overrides && overrides.length === 2) {
	        result[overrides[0]] = overrides[1];
	        continue;
	      }
	    }

	    if (typeof value === 'string') {
	      result[value] = key;
	    }
	  }

	  return result;
	}

	/**
	 * Check if a given tag is a custom component.
	 *
	 * @see {@link https://github.com/facebook/react/blob/v16.6.3/packages/react-dom/src/shared/isCustomComponent.js}
	 *
	 * @param {string} tagName - The name of the html tag.
	 * @param {object} props - The props being passed to the element.
	 * @returns - Whether tag is custom component.
	 */
	function isCustomComponent(tagName, props) {
	  if (tagName.indexOf('-') === -1) {
	    return props && typeof props.is === 'string';
	  }

	  switch (tagName) {
	    // These are reserved SVG and MathML elements.
	    // We don't mind this whitelist too much because we expect it to never grow.
	    // The alternative is to track the namespace in a few places which is convoluted.
	    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
	    case 'annotation-xml':
	    case 'color-profile':
	    case 'font-face':
	    case 'font-face-src':
	    case 'font-face-uri':
	    case 'font-face-format':
	    case 'font-face-name':
	    case 'missing-glyph':
	      return false;
	    default:
	      return true;
	  }
	}

	var styleToJSOptions = { reactCompat: true };

	/**
	 * Sets style prop.
	 *
	 * @param {null|undefined|string} style
	 * @param {object} props
	 */
	function setStyleProp$1(style, props) {
	  if (style === null || style === undefined) {
	    return;
	  }
	  try {
	    props.style = styleToJS(style, styleToJSOptions);
	  } catch (err) {
	    props.style = {};
	  }
	}

	/**
	 * @constant {boolean}
	 * @see {@link https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html}
	 */
	var PRESERVE_CUSTOM_ATTRIBUTES = React$1.version.split('.')[0] >= 16;

	// Taken from
	// https://github.com/facebook/react/blob/cae635054e17a6f107a39d328649137b83f25972/packages/react-dom/src/client/validateDOMNesting.js#L213
	var elementsWithNoTextChildren = new Set([
	  'tr',
	  'tbody',
	  'thead',
	  'tfoot',
	  'colgroup',
	  'table',
	  'head',
	  'html',
	  'frameset'
	]);

	/**
	 * Checks if the given node can contain text nodes
	 *
	 * @param {DomElement} node - Node.
	 * @returns - Whether node can contain text nodes.
	 */
	function canTextBeChildOfNode$1(node) {
	  return !elementsWithNoTextChildren.has(node.name);
	}

	var utilities$3 = {
	  PRESERVE_CUSTOM_ATTRIBUTES: PRESERVE_CUSTOM_ATTRIBUTES,
	  invertObject: invertObject,
	  isCustomComponent: isCustomComponent,
	  setStyleProp: setStyleProp$1,
	  canTextBeChildOfNode: canTextBeChildOfNode$1,
	  elementsWithNoTextChildren: elementsWithNoTextChildren
	};

	var reactProperty = lib$2;
	var utilities$2 = utilities$3;

	/**
	 * Converts HTML/SVG DOM attributes to React props.
	 *
	 * @param {object} [attributes={}] - HTML/SVG DOM attributes.
	 * @returns - React props.
	 */
	var attributesToProps$2 = function attributesToProps(attributes) {
	  attributes = attributes || {};

	  var valueOnlyInputs = {
	    reset: true,
	    submit: true
	  };

	  var attributeName;
	  var attributeNameLowerCased;
	  var attributeValue;
	  var propName;
	  var propertyInfo;
	  var props = {};
	  var inputIsValueOnly = attributes.type && valueOnlyInputs[attributes.type];

	  for (attributeName in attributes) {
	    attributeValue = attributes[attributeName];

	    // ARIA (aria-*) or custom data (data-*) attribute
	    if (reactProperty.isCustomAttribute(attributeName)) {
	      props[attributeName] = attributeValue;
	      continue;
	    }

	    // convert HTML/SVG attribute to React prop
	    attributeNameLowerCased = attributeName.toLowerCase();
	    propName = getPropName(attributeNameLowerCased);

	    if (propName) {
	      propertyInfo = reactProperty.getPropertyInfo(propName);

	      // convert attribute to uncontrolled component prop (e.g., `value` to `defaultValue`)
	      // https://reactjs.org/docs/uncontrolled-components.html
	      if (
	        (propName === 'checked' || propName === 'value') &&
	        !inputIsValueOnly
	      ) {
	        propName = getPropName('default' + attributeNameLowerCased);
	      }

	      props[propName] = attributeValue;

	      switch (propertyInfo && propertyInfo.type) {
	        case reactProperty.BOOLEAN:
	          props[propName] = true;
	          break;
	        case reactProperty.OVERLOADED_BOOLEAN:
	          if (attributeValue === '') {
	            props[propName] = true;
	          }
	          break;
	      }
	      continue;
	    }

	    // preserve custom attribute if React >=16
	    if (utilities$2.PRESERVE_CUSTOM_ATTRIBUTES) {
	      props[attributeName] = attributeValue;
	    }
	  }

	  // transform inline style to object
	  utilities$2.setStyleProp(attributes.style, props);

	  return props;
	};

	/**
	 * Gets prop name from lowercased attribute name.
	 *
	 * @param {string} attributeName - Lowercased attribute name.
	 * @returns - Prop name.
	 */
	function getPropName(attributeName) {
	  return reactProperty.possibleStandardNames[attributeName];
	}

	var React = React__default["default"];
	var attributesToProps$1 = attributesToProps$2;
	var utilities$1 = utilities$3;

	var setStyleProp = utilities$1.setStyleProp;
	var canTextBeChildOfNode = utilities$1.canTextBeChildOfNode;

	/**
	 * Converts DOM nodes to JSX element(s).
	 *
	 * @param {DomElement[]} nodes - DOM nodes.
	 * @param {object} [options={}] - Options.
	 * @param {Function} [options.replace] - Replacer.
	 * @param {object} [options.library] - Library (React, Preact, etc.).
	 * @returns - String or JSX element(s).
	 */
	function domToReact$1(nodes, options) {
	  options = options || {};

	  var library = options.library || React;
	  var cloneElement = library.cloneElement;
	  var createElement = library.createElement;
	  var isValidElement = library.isValidElement;

	  var result = [];
	  var node;
	  var isWhitespace;
	  var hasReplace = typeof options.replace === 'function';
	  var replaceElement;
	  var props;
	  var children;
	  var trim = options.trim;

	  for (var i = 0, len = nodes.length; i < len; i++) {
	    node = nodes[i];

	    // replace with custom React element (if present)
	    if (hasReplace) {
	      replaceElement = options.replace(node);

	      if (isValidElement(replaceElement)) {
	        // set "key" prop for sibling elements
	        // https://fb.me/react-warning-keys
	        if (len > 1) {
	          replaceElement = cloneElement(replaceElement, {
	            key: replaceElement.key || i
	          });
	        }
	        result.push(replaceElement);
	        continue;
	      }
	    }

	    if (node.type === 'text') {
	      isWhitespace = !node.data.trim().length;

	      if (isWhitespace && node.parent && !canTextBeChildOfNode(node.parent)) {
	        // We have a whitespace node that can't be nested in its parent
	        // so skip it
	        continue;
	      }

	      if (trim && isWhitespace) {
	        // Trim is enabled and we have a whitespace node
	        // so skip it
	        continue;
	      }

	      // We have a text node that's not whitespace and it can be nested
	      // in its parent so add it to the results
	      result.push(node.data);
	      continue;
	    }

	    props = node.attribs;
	    if (skipAttributesToProps(node)) {
	      setStyleProp(props.style, props);
	    } else if (props) {
	      props = attributesToProps$1(props);
	    }

	    children = null;

	    switch (node.type) {
	      case 'script':
	      case 'style':
	        // prevent text in <script> or <style> from being escaped
	        // https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
	        if (node.children[0]) {
	          props.dangerouslySetInnerHTML = {
	            __html: node.children[0].data
	          };
	        }
	        break;

	      case 'tag':
	        // setting textarea value in children is an antipattern in React
	        // https://reactjs.org/docs/forms.html#the-textarea-tag
	        if (node.name === 'textarea' && node.children[0]) {
	          props.defaultValue = node.children[0].data;
	        } else if (node.children && node.children.length) {
	          // continue recursion of creating React elements (if applicable)
	          children = domToReact$1(node.children, options);
	        }
	        break;

	      // skip all other cases (e.g., comment)
	      default:
	        continue;
	    }

	    // set "key" prop for sibling elements
	    // https://fb.me/react-warning-keys
	    if (len > 1) {
	      props.key = i;
	    }

	    result.push(createElement(node.name, props, children));
	  }

	  return result.length === 1 ? result[0] : result;
	}

	/**
	 * Determines whether DOM element attributes should be transformed to props.
	 * Web Components should not have their attributes transformed except for `style`.
	 *
	 * @param {DomElement} node
	 * @returns - Whether node attributes should be converted to props.
	 */
	function skipAttributesToProps(node) {
	  return (
	    utilities$1.PRESERVE_CUSTOM_ATTRIBUTES &&
	    node.type === 'tag' &&
	    utilities$1.isCustomComponent(node.name, node.attribs)
	  );
	}

	var domToReact_1 = domToReact$1;

	/**
	 * SVG elements are case-sensitive.
	 *
	 * @see {@link https://developer.mozilla.org/docs/Web/SVG/Element#SVG_elements_A_to_Z}
	 */

	var CASE_SENSITIVE_TAG_NAMES$1 = [
	  'animateMotion',
	  'animateTransform',
	  'clipPath',
	  'feBlend',
	  'feColorMatrix',
	  'feComponentTransfer',
	  'feComposite',
	  'feConvolveMatrix',
	  'feDiffuseLighting',
	  'feDisplacementMap',
	  'feDropShadow',
	  'feFlood',
	  'feFuncA',
	  'feFuncB',
	  'feFuncG',
	  'feFuncR',
	  'feGaussainBlur',
	  'feImage',
	  'feMerge',
	  'feMergeNode',
	  'feMorphology',
	  'feOffset',
	  'fePointLight',
	  'feSpecularLighting',
	  'feSpotLight',
	  'feTile',
	  'feTurbulence',
	  'foreignObject',
	  'linearGradient',
	  'radialGradient',
	  'textPath'
	];

	var constants$1 = {
	  CASE_SENSITIVE_TAG_NAMES: CASE_SENSITIVE_TAG_NAMES$1
	};

	var node = {};

	var lib$1 = {};

	(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
	/** Types of elements found in htmlparser2's DOM */
	var ElementType;
	(function (ElementType) {
	    /** Type for the root element of a document */
	    ElementType["Root"] = "root";
	    /** Type for Text */
	    ElementType["Text"] = "text";
	    /** Type for <? ... ?> */
	    ElementType["Directive"] = "directive";
	    /** Type for <!-- ... --> */
	    ElementType["Comment"] = "comment";
	    /** Type for <script> tags */
	    ElementType["Script"] = "script";
	    /** Type for <style> tags */
	    ElementType["Style"] = "style";
	    /** Type for Any tag */
	    ElementType["Tag"] = "tag";
	    /** Type for <![CDATA[ ... ]]> */
	    ElementType["CDATA"] = "cdata";
	    /** Type for <!doctype ...> */
	    ElementType["Doctype"] = "doctype";
	})(ElementType = exports.ElementType || (exports.ElementType = {}));
	/**
	 * Tests whether an element is a tag or not.
	 *
	 * @param elem Element to test
	 */
	function isTag(elem) {
	    return (elem.type === ElementType.Tag ||
	        elem.type === ElementType.Script ||
	        elem.type === ElementType.Style);
	}
	exports.isTag = isTag;
	// Exports for backwards compatibility
	/** Type for the root element of a document */
	exports.Root = ElementType.Root;
	/** Type for Text */
	exports.Text = ElementType.Text;
	/** Type for <? ... ?> */
	exports.Directive = ElementType.Directive;
	/** Type for <!-- ... --> */
	exports.Comment = ElementType.Comment;
	/** Type for <script> tags */
	exports.Script = ElementType.Script;
	/** Type for <style> tags */
	exports.Style = ElementType.Style;
	/** Type for Any tag */
	exports.Tag = ElementType.Tag;
	/** Type for <![CDATA[ ... ]]> */
	exports.CDATA = ElementType.CDATA;
	/** Type for <!doctype ...> */
	exports.Doctype = ElementType.Doctype;
	}(lib$1));

	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        if (typeof b !== "function" && b !== null)
	            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};
	Object.defineProperty(node, "__esModule", { value: true });
	node.cloneNode = node.hasChildren = node.isDocument = node.isDirective = node.isComment = node.isText = node.isCDATA = node.isTag = node.Element = node.Document = node.NodeWithChildren = node.ProcessingInstruction = node.Comment = node.Text = node.DataNode = node.Node = void 0;
	var domelementtype_1 = lib$1;
	var nodeTypes = new Map([
	    [domelementtype_1.ElementType.Tag, 1],
	    [domelementtype_1.ElementType.Script, 1],
	    [domelementtype_1.ElementType.Style, 1],
	    [domelementtype_1.ElementType.Directive, 1],
	    [domelementtype_1.ElementType.Text, 3],
	    [domelementtype_1.ElementType.CDATA, 4],
	    [domelementtype_1.ElementType.Comment, 8],
	    [domelementtype_1.ElementType.Root, 9],
	]);
	/**
	 * This object will be used as the prototype for Nodes when creating a
	 * DOM-Level-1-compliant structure.
	 */
	var Node = /** @class */ (function () {
	    /**
	     *
	     * @param type The type of the node.
	     */
	    function Node(type) {
	        this.type = type;
	        /** Parent of the node */
	        this.parent = null;
	        /** Previous sibling */
	        this.prev = null;
	        /** Next sibling */
	        this.next = null;
	        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */
	        this.startIndex = null;
	        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */
	        this.endIndex = null;
	    }
	    Object.defineProperty(Node.prototype, "nodeType", {
	        // Read-only aliases
	        /**
	         * [DOM spec](https://dom.spec.whatwg.org/#dom-node-nodetype)-compatible
	         * node {@link type}.
	         */
	        get: function () {
	            var _a;
	            return (_a = nodeTypes.get(this.type)) !== null && _a !== void 0 ? _a : 1;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Node.prototype, "parentNode", {
	        // Read-write aliases for properties
	        /**
	         * Same as {@link parent}.
	         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	         */
	        get: function () {
	            return this.parent;
	        },
	        set: function (parent) {
	            this.parent = parent;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Node.prototype, "previousSibling", {
	        /**
	         * Same as {@link prev}.
	         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	         */
	        get: function () {
	            return this.prev;
	        },
	        set: function (prev) {
	            this.prev = prev;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Node.prototype, "nextSibling", {
	        /**
	         * Same as {@link next}.
	         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	         */
	        get: function () {
	            return this.next;
	        },
	        set: function (next) {
	            this.next = next;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    /**
	     * Clone this node, and optionally its children.
	     *
	     * @param recursive Clone child nodes as well.
	     * @returns A clone of the node.
	     */
	    Node.prototype.cloneNode = function (recursive) {
	        if (recursive === void 0) { recursive = false; }
	        return cloneNode(this, recursive);
	    };
	    return Node;
	}());
	node.Node = Node;
	/**
	 * A node that contains some data.
	 */
	var DataNode = /** @class */ (function (_super) {
	    __extends(DataNode, _super);
	    /**
	     * @param type The type of the node
	     * @param data The content of the data node
	     */
	    function DataNode(type, data) {
	        var _this = _super.call(this, type) || this;
	        _this.data = data;
	        return _this;
	    }
	    Object.defineProperty(DataNode.prototype, "nodeValue", {
	        /**
	         * Same as {@link data}.
	         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	         */
	        get: function () {
	            return this.data;
	        },
	        set: function (data) {
	            this.data = data;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return DataNode;
	}(Node));
	node.DataNode = DataNode;
	/**
	 * Text within the document.
	 */
	var Text$1 = /** @class */ (function (_super) {
	    __extends(Text, _super);
	    function Text(data) {
	        return _super.call(this, domelementtype_1.ElementType.Text, data) || this;
	    }
	    return Text;
	}(DataNode));
	node.Text = Text$1;
	/**
	 * Comments within the document.
	 */
	var Comment$1 = /** @class */ (function (_super) {
	    __extends(Comment, _super);
	    function Comment(data) {
	        return _super.call(this, domelementtype_1.ElementType.Comment, data) || this;
	    }
	    return Comment;
	}(DataNode));
	node.Comment = Comment$1;
	/**
	 * Processing instructions, including doc types.
	 */
	var ProcessingInstruction$1 = /** @class */ (function (_super) {
	    __extends(ProcessingInstruction, _super);
	    function ProcessingInstruction(name, data) {
	        var _this = _super.call(this, domelementtype_1.ElementType.Directive, data) || this;
	        _this.name = name;
	        return _this;
	    }
	    return ProcessingInstruction;
	}(DataNode));
	node.ProcessingInstruction = ProcessingInstruction$1;
	/**
	 * A `Node` that can have children.
	 */
	var NodeWithChildren = /** @class */ (function (_super) {
	    __extends(NodeWithChildren, _super);
	    /**
	     * @param type Type of the node.
	     * @param children Children of the node. Only certain node types can have children.
	     */
	    function NodeWithChildren(type, children) {
	        var _this = _super.call(this, type) || this;
	        _this.children = children;
	        return _this;
	    }
	    Object.defineProperty(NodeWithChildren.prototype, "firstChild", {
	        // Aliases
	        /** First child of the node. */
	        get: function () {
	            var _a;
	            return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(NodeWithChildren.prototype, "lastChild", {
	        /** Last child of the node. */
	        get: function () {
	            return this.children.length > 0
	                ? this.children[this.children.length - 1]
	                : null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(NodeWithChildren.prototype, "childNodes", {
	        /**
	         * Same as {@link children}.
	         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	         */
	        get: function () {
	            return this.children;
	        },
	        set: function (children) {
	            this.children = children;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return NodeWithChildren;
	}(Node));
	node.NodeWithChildren = NodeWithChildren;
	/**
	 * The root node of the document.
	 */
	var Document = /** @class */ (function (_super) {
	    __extends(Document, _super);
	    function Document(children) {
	        return _super.call(this, domelementtype_1.ElementType.Root, children) || this;
	    }
	    return Document;
	}(NodeWithChildren));
	node.Document = Document;
	/**
	 * An element within the DOM.
	 */
	var Element$1 = /** @class */ (function (_super) {
	    __extends(Element, _super);
	    /**
	     * @param name Name of the tag, eg. `div`, `span`.
	     * @param attribs Object mapping attribute names to attribute values.
	     * @param children Children of the node.
	     */
	    function Element(name, attribs, children, type) {
	        if (children === void 0) { children = []; }
	        if (type === void 0) { type = name === "script"
	            ? domelementtype_1.ElementType.Script
	            : name === "style"
	                ? domelementtype_1.ElementType.Style
	                : domelementtype_1.ElementType.Tag; }
	        var _this = _super.call(this, type, children) || this;
	        _this.name = name;
	        _this.attribs = attribs;
	        return _this;
	    }
	    Object.defineProperty(Element.prototype, "tagName", {
	        // DOM Level 1 aliases
	        /**
	         * Same as {@link name}.
	         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	         */
	        get: function () {
	            return this.name;
	        },
	        set: function (name) {
	            this.name = name;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Element.prototype, "attributes", {
	        get: function () {
	            var _this = this;
	            return Object.keys(this.attribs).map(function (name) {
	                var _a, _b;
	                return ({
	                    name: name,
	                    value: _this.attribs[name],
	                    namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
	                    prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name],
	                });
	            });
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return Element;
	}(NodeWithChildren));
	node.Element = Element$1;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node is a `Element`, `false` otherwise.
	 */
	function isTag(node) {
	    return (0, domelementtype_1.isTag)(node);
	}
	node.isTag = isTag;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
	 */
	function isCDATA(node) {
	    return node.type === domelementtype_1.ElementType.CDATA;
	}
	node.isCDATA = isCDATA;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node has the type `Text`, `false` otherwise.
	 */
	function isText(node) {
	    return node.type === domelementtype_1.ElementType.Text;
	}
	node.isText = isText;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node has the type `Comment`, `false` otherwise.
	 */
	function isComment(node) {
	    return node.type === domelementtype_1.ElementType.Comment;
	}
	node.isComment = isComment;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
	 */
	function isDirective(node) {
	    return node.type === domelementtype_1.ElementType.Directive;
	}
	node.isDirective = isDirective;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
	 */
	function isDocument(node) {
	    return node.type === domelementtype_1.ElementType.Root;
	}
	node.isDocument = isDocument;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node is a `NodeWithChildren` (has children), `false` otherwise.
	 */
	function hasChildren(node) {
	    return Object.prototype.hasOwnProperty.call(node, "children");
	}
	node.hasChildren = hasChildren;
	/**
	 * Clone a node, and optionally its children.
	 *
	 * @param recursive Clone child nodes as well.
	 * @returns A clone of the node.
	 */
	function cloneNode(node, recursive) {
	    if (recursive === void 0) { recursive = false; }
	    var result;
	    if (isText(node)) {
	        result = new Text$1(node.data);
	    }
	    else if (isComment(node)) {
	        result = new Comment$1(node.data);
	    }
	    else if (isTag(node)) {
	        var children = recursive ? cloneChildren(node.children) : [];
	        var clone_1 = new Element$1(node.name, __assign({}, node.attribs), children);
	        children.forEach(function (child) { return (child.parent = clone_1); });
	        if (node.namespace != null) {
	            clone_1.namespace = node.namespace;
	        }
	        if (node["x-attribsNamespace"]) {
	            clone_1["x-attribsNamespace"] = __assign({}, node["x-attribsNamespace"]);
	        }
	        if (node["x-attribsPrefix"]) {
	            clone_1["x-attribsPrefix"] = __assign({}, node["x-attribsPrefix"]);
	        }
	        result = clone_1;
	    }
	    else if (isCDATA(node)) {
	        var children = recursive ? cloneChildren(node.children) : [];
	        var clone_2 = new NodeWithChildren(domelementtype_1.ElementType.CDATA, children);
	        children.forEach(function (child) { return (child.parent = clone_2); });
	        result = clone_2;
	    }
	    else if (isDocument(node)) {
	        var children = recursive ? cloneChildren(node.children) : [];
	        var clone_3 = new Document(children);
	        children.forEach(function (child) { return (child.parent = clone_3); });
	        if (node["x-mode"]) {
	            clone_3["x-mode"] = node["x-mode"];
	        }
	        result = clone_3;
	    }
	    else if (isDirective(node)) {
	        var instruction = new ProcessingInstruction$1(node.name, node.data);
	        if (node["x-name"] != null) {
	            instruction["x-name"] = node["x-name"];
	            instruction["x-publicId"] = node["x-publicId"];
	            instruction["x-systemId"] = node["x-systemId"];
	        }
	        result = instruction;
	    }
	    else {
	        throw new Error("Not implemented yet: ".concat(node.type));
	    }
	    result.startIndex = node.startIndex;
	    result.endIndex = node.endIndex;
	    if (node.sourceCodeLocation != null) {
	        result.sourceCodeLocation = node.sourceCodeLocation;
	    }
	    return result;
	}
	node.cloneNode = cloneNode;
	function cloneChildren(childs) {
	    var children = childs.map(function (child) { return cloneNode(child, true); });
	    for (var i = 1; i < children.length; i++) {
	        children[i].prev = children[i - 1];
	        children[i - 1].next = children[i];
	    }
	    return children;
	}

	var constants = constants$1;
	var domhandler = node;

	var CASE_SENSITIVE_TAG_NAMES = constants.CASE_SENSITIVE_TAG_NAMES;

	var Comment = domhandler.Comment;
	var Element = domhandler.Element;
	var ProcessingInstruction = domhandler.ProcessingInstruction;
	var Text = domhandler.Text;

	var caseSensitiveTagNamesMap = {};
	var tagName;

	for (var i = 0, len = CASE_SENSITIVE_TAG_NAMES.length; i < len; i++) {
	  tagName = CASE_SENSITIVE_TAG_NAMES[i];
	  caseSensitiveTagNamesMap[tagName.toLowerCase()] = tagName;
	}

	/**
	 * Gets case-sensitive tag name.
	 *
	 * @param  {string}           tagName - Tag name in lowercase.
	 * @return {string|undefined}         - Case-sensitive tag name.
	 */
	function getCaseSensitiveTagName(tagName) {
	  return caseSensitiveTagNamesMap[tagName];
	}

	/**
	 * Formats DOM attributes to a hash map.
	 *
	 * @param  {NamedNodeMap} attributes - List of attributes.
	 * @return {object}                  - Map of attribute name to value.
	 */
	function formatAttributes(attributes) {
	  var result = {};
	  var attribute;
	  // `NamedNodeMap` is array-like
	  for (var i = 0, len = attributes.length; i < len; i++) {
	    attribute = attributes[i];
	    result[attribute.name] = attribute.value;
	  }
	  return result;
	}

	/**
	 * Corrects the tag name if it is case-sensitive (SVG).
	 * Otherwise, returns the lowercase tag name (HTML).
	 *
	 * @param  {string} tagName - Lowercase tag name.
	 * @return {string}         - Formatted tag name.
	 */
	function formatTagName(tagName) {
	  tagName = tagName.toLowerCase();
	  var caseSensitiveTagName = getCaseSensitiveTagName(tagName);
	  if (caseSensitiveTagName) {
	    return caseSensitiveTagName;
	  }
	  return tagName;
	}

	/**
	 * Transforms DOM nodes to `domhandler` nodes.
	 *
	 * @param  {NodeList}     nodes         - DOM nodes.
	 * @param  {Element|null} [parent=null] - Parent node.
	 * @param  {string}       [directive]   - Directive.
	 * @return {Array<Comment|Element|ProcessingInstruction|Text>}
	 */
	function formatDOM$1(nodes, parent, directive) {
	  parent = parent || null;
	  var result = [];

	  for (var index = 0, len = nodes.length; index < len; index++) {
	    var node = nodes[index];
	    var current;

	    // set the node data given the type
	    switch (node.nodeType) {
	      case 1:
	        // script, style, or tag
	        current = new Element(
	          formatTagName(node.nodeName),
	          formatAttributes(node.attributes)
	        );
	        current.children = formatDOM$1(node.childNodes, current);
	        break;

	      case 3:
	        current = new Text(node.nodeValue);
	        break;

	      case 8:
	        current = new Comment(node.nodeValue);
	        break;

	      default:
	        continue;
	    }

	    // set previous node next
	    var prev = result[index - 1] || null;
	    if (prev) {
	      prev.next = current;
	    }

	    // set properties for current node
	    current.parent = parent;
	    current.prev = prev;
	    current.next = null;

	    result.push(current);
	  }

	  if (directive) {
	    current = new ProcessingInstruction(
	      directive.substring(0, directive.indexOf(' ')).toLowerCase(),
	      directive
	    );
	    current.next = result[0] || null;
	    current.parent = parent;
	    result.unshift(current);

	    if (result[1]) {
	      result[1].prev = result[0];
	    }
	  }

	  return result;
	}

	/**
	 * Detects if browser is Internet Explorer.
	 *
	 * @return {boolean} - Whether IE is detected.
	 */
	function isIE$1() {
	  return /(MSIE |Trident\/|Edge\/)/.test(navigator.userAgent);
	}

	var utilities = {
	  formatAttributes: formatAttributes,
	  formatDOM: formatDOM$1,
	  isIE: isIE$1
	};

	// constants
	var HTML = 'html';
	var HEAD = 'head';
	var BODY = 'body';
	var FIRST_TAG_REGEX = /<([a-zA-Z]+[0-9]?)/; // e.g., <h1>
	var HEAD_TAG_REGEX = /<head.*>/i;
	var BODY_TAG_REGEX = /<body.*>/i;

	// falls back to `parseFromString` if `createHTMLDocument` cannot be used
	var parseFromDocument = function () {
	  throw new Error(
	    'This browser does not support `document.implementation.createHTMLDocument`'
	  );
	};

	var parseFromString = function () {
	  throw new Error(
	    'This browser does not support `DOMParser.prototype.parseFromString`'
	  );
	};

	/**
	 * DOMParser (performance: slow).
	 *
	 * @see https://developer.mozilla.org/docs/Web/API/DOMParser#Parsing_an_SVG_or_HTML_document
	 */
	if (typeof window.DOMParser === 'function') {
	  var domParser = new window.DOMParser();
	  var mimeType = 'text/html';

	  /**
	   * Creates an HTML document using `DOMParser.parseFromString`.
	   *
	   * @param  {string} html      - The HTML string.
	   * @param  {string} [tagName] - The element to render the HTML (with 'body' as fallback).
	   * @return {HTMLDocument}
	   */
	  parseFromString = function (html, tagName) {
	    if (tagName) {
	      html = '<' + tagName + '>' + html + '</' + tagName + '>';
	    }

	    return domParser.parseFromString(html, mimeType);
	  };

	  parseFromDocument = parseFromString;
	}

	/**
	 * DOMImplementation (performance: fair).
	 *
	 * @see https://developer.mozilla.org/docs/Web/API/DOMImplementation/createHTMLDocument
	 */
	if (document.implementation) {
	  var isIE = utilities.isIE;

	  // title parameter is required in IE
	  // https://msdn.microsoft.com/en-us/library/ff975457(v=vs.85).aspx
	  var doc = document.implementation.createHTMLDocument(
	    isIE() ? 'html-dom-parser' : undefined
	  );

	  /**
	   * Use HTML document created by `document.implementation.createHTMLDocument`.
	   *
	   * @param  {string} html      - The HTML string.
	   * @param  {string} [tagName] - The element to render the HTML (with 'body' as fallback).
	   * @return {HTMLDocument}
	   */
	  parseFromDocument = function (html, tagName) {
	    if (tagName) {
	      doc.documentElement.getElementsByTagName(tagName)[0].innerHTML = html;
	      return doc;
	    }

	    doc.documentElement.innerHTML = html;
	    return doc;
	  };
	}

	/**
	 * Template (performance: fast).
	 *
	 * @see https://developer.mozilla.org/docs/Web/HTML/Element/template
	 */
	var template = document.createElement('template');
	var parseFromTemplate;

	if (template.content) {
	  /**
	   * Uses a template element (content fragment) to parse HTML.
	   *
	   * @param  {string} html - The HTML string.
	   * @return {NodeList}
	   */
	  parseFromTemplate = function (html) {
	    template.innerHTML = html;
	    return template.content.childNodes;
	  };
	}

	/**
	 * Parses HTML string to DOM nodes.
	 *
	 * @param  {string}   html - HTML markup.
	 * @return {NodeList}
	 */
	function domparser$1(html) {
	  var firstTagName;
	  var match = html.match(FIRST_TAG_REGEX);

	  if (match && match[1]) {
	    firstTagName = match[1].toLowerCase();
	  }

	  var doc;
	  var element;
	  var elements;

	  switch (firstTagName) {
	    case HTML:
	      doc = parseFromString(html);

	      // the created document may come with filler head/body elements,
	      // so make sure to remove them if they don't actually exist
	      if (!HEAD_TAG_REGEX.test(html)) {
	        element = doc.getElementsByTagName(HEAD)[0];
	        if (element) {
	          element.parentNode.removeChild(element);
	        }
	      }

	      if (!BODY_TAG_REGEX.test(html)) {
	        element = doc.getElementsByTagName(BODY)[0];
	        if (element) {
	          element.parentNode.removeChild(element);
	        }
	      }

	      return doc.getElementsByTagName(HTML);

	    case HEAD:
	    case BODY:
	      elements = parseFromDocument(html).getElementsByTagName(firstTagName);

	      // if there's a sibling element, then return both elements
	      if (BODY_TAG_REGEX.test(html) && HEAD_TAG_REGEX.test(html)) {
	        return elements[0].parentNode.childNodes;
	      }
	      return elements;

	    // low-level tag or text
	    default:
	      if (parseFromTemplate) {
	        return parseFromTemplate(html);
	      }

	      return parseFromDocument(html, BODY).getElementsByTagName(BODY)[0]
	        .childNodes;
	  }
	}

	var domparser_1 = domparser$1;

	var domparser = domparser_1;
	var formatDOM = utilities.formatDOM;

	var DIRECTIVE_REGEX = /<(![a-zA-Z\s]+)>/; // e.g., <!doctype html>

	/**
	 * Parses HTML string to DOM nodes in browser.
	 *
	 * @param  {string} html  - HTML markup.
	 * @return {DomElement[]} - DOM elements.
	 */
	function HTMLDOMParser(html) {
	  if (typeof html !== 'string') {
	    throw new TypeError('First argument must be a string');
	  }

	  if (html === '') {
	    return [];
	  }

	  // match directive
	  var match = html.match(DIRECTIVE_REGEX);
	  var directive;

	  if (match && match[1]) {
	    directive = match[1];
	  }

	  return formatDOM(domparser(html), null, directive);
	}

	var htmlToDom = HTMLDOMParser;

	var lib = {};

	(function (exports) {
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
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
	var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
	    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DomHandler = void 0;
	var domelementtype_1 = lib$1;
	var node_1 = node;
	__exportStar(node, exports);
	var reWhitespace = /\s+/g;
	// Default options
	var defaultOpts = {
	    normalizeWhitespace: false,
	    withStartIndices: false,
	    withEndIndices: false,
	    xmlMode: false,
	};
	var DomHandler = /** @class */ (function () {
	    /**
	     * @param callback Called once parsing has completed.
	     * @param options Settings for the handler.
	     * @param elementCB Callback whenever a tag is closed.
	     */
	    function DomHandler(callback, options, elementCB) {
	        /** The elements of the DOM */
	        this.dom = [];
	        /** The root element for the DOM */
	        this.root = new node_1.Document(this.dom);
	        /** Indicated whether parsing has been completed. */
	        this.done = false;
	        /** Stack of open tags. */
	        this.tagStack = [this.root];
	        /** A data node that is still being written to. */
	        this.lastNode = null;
	        /** Reference to the parser instance. Used for location information. */
	        this.parser = null;
	        // Make it possible to skip arguments, for backwards-compatibility
	        if (typeof options === "function") {
	            elementCB = options;
	            options = defaultOpts;
	        }
	        if (typeof callback === "object") {
	            options = callback;
	            callback = undefined;
	        }
	        this.callback = callback !== null && callback !== void 0 ? callback : null;
	        this.options = options !== null && options !== void 0 ? options : defaultOpts;
	        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
	    }
	    DomHandler.prototype.onparserinit = function (parser) {
	        this.parser = parser;
	    };
	    // Resets the handler back to starting state
	    DomHandler.prototype.onreset = function () {
	        this.dom = [];
	        this.root = new node_1.Document(this.dom);
	        this.done = false;
	        this.tagStack = [this.root];
	        this.lastNode = null;
	        this.parser = null;
	    };
	    // Signals the handler that parsing is done
	    DomHandler.prototype.onend = function () {
	        if (this.done)
	            return;
	        this.done = true;
	        this.parser = null;
	        this.handleCallback(null);
	    };
	    DomHandler.prototype.onerror = function (error) {
	        this.handleCallback(error);
	    };
	    DomHandler.prototype.onclosetag = function () {
	        this.lastNode = null;
	        var elem = this.tagStack.pop();
	        if (this.options.withEndIndices) {
	            elem.endIndex = this.parser.endIndex;
	        }
	        if (this.elementCB)
	            this.elementCB(elem);
	    };
	    DomHandler.prototype.onopentag = function (name, attribs) {
	        var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : undefined;
	        var element = new node_1.Element(name, attribs, undefined, type);
	        this.addNode(element);
	        this.tagStack.push(element);
	    };
	    DomHandler.prototype.ontext = function (data) {
	        var normalizeWhitespace = this.options.normalizeWhitespace;
	        var lastNode = this.lastNode;
	        if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
	            if (normalizeWhitespace) {
	                lastNode.data = (lastNode.data + data).replace(reWhitespace, " ");
	            }
	            else {
	                lastNode.data += data;
	            }
	            if (this.options.withEndIndices) {
	                lastNode.endIndex = this.parser.endIndex;
	            }
	        }
	        else {
	            if (normalizeWhitespace) {
	                data = data.replace(reWhitespace, " ");
	            }
	            var node = new node_1.Text(data);
	            this.addNode(node);
	            this.lastNode = node;
	        }
	    };
	    DomHandler.prototype.oncomment = function (data) {
	        if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
	            this.lastNode.data += data;
	            return;
	        }
	        var node = new node_1.Comment(data);
	        this.addNode(node);
	        this.lastNode = node;
	    };
	    DomHandler.prototype.oncommentend = function () {
	        this.lastNode = null;
	    };
	    DomHandler.prototype.oncdatastart = function () {
	        var text = new node_1.Text("");
	        var node = new node_1.NodeWithChildren(domelementtype_1.ElementType.CDATA, [text]);
	        this.addNode(node);
	        text.parent = node;
	        this.lastNode = text;
	    };
	    DomHandler.prototype.oncdataend = function () {
	        this.lastNode = null;
	    };
	    DomHandler.prototype.onprocessinginstruction = function (name, data) {
	        var node = new node_1.ProcessingInstruction(name, data);
	        this.addNode(node);
	    };
	    DomHandler.prototype.handleCallback = function (error) {
	        if (typeof this.callback === "function") {
	            this.callback(error, this.dom);
	        }
	        else if (error) {
	            throw error;
	        }
	    };
	    DomHandler.prototype.addNode = function (node) {
	        var parent = this.tagStack[this.tagStack.length - 1];
	        var previousSibling = parent.children[parent.children.length - 1];
	        if (this.options.withStartIndices) {
	            node.startIndex = this.parser.startIndex;
	        }
	        if (this.options.withEndIndices) {
	            node.endIndex = this.parser.endIndex;
	        }
	        parent.children.push(node);
	        if (previousSibling) {
	            node.prev = previousSibling;
	            previousSibling.next = node;
	        }
	        node.parent = parent;
	        this.lastNode = null;
	    };
	    return DomHandler;
	}());
	exports.DomHandler = DomHandler;
	exports.default = DomHandler;
	}(lib));

	var domToReact = domToReact_1;
	var attributesToProps = attributesToProps$2;
	var htmlToDOM = htmlToDom;

	// support backwards compatibility for ES Module
	htmlToDOM =
	  /* istanbul ignore next */
	  typeof htmlToDOM.default === 'function' ? htmlToDOM.default : htmlToDOM;

	var domParserOptions = { lowerCaseAttributeNames: false };

	/**
	 * Converts HTML string to React elements.
	 *
	 * @param {string} html - HTML string.
	 * @param {object} [options] - Parser options.
	 * @param {object} [options.htmlparser2] - htmlparser2 options.
	 * @param {object} [options.library] - Library for React, Preact, etc.
	 * @param {Function} [options.replace] - Replace method.
	 * @returns {JSX.Element|JSX.Element[]|string} - React element(s), empty array, or string.
	 */
	function HTMLReactParser(html, options) {
	  if (typeof html !== 'string') {
	    throw new TypeError('First argument must be a string');
	  }
	  if (html === '') {
	    return [];
	  }
	  options = options || {};
	  return domToReact(
	    htmlToDOM(html, options.htmlparser2 || domParserOptions),
	    options
	  );
	}

	HTMLReactParser.domToReact = domToReact;
	HTMLReactParser.htmlToDOM = htmlToDOM;
	HTMLReactParser.attributesToProps = attributesToProps;
	HTMLReactParser.Element = lib.Element;

	// support CommonJS and ES Modules
	htmlReactParser.exports = HTMLReactParser;
	htmlReactParser.exports.default = HTMLReactParser;

	var HTMLReactParser$1 = htmlReactParser.exports;

	HTMLReactParser$1.domToReact;
	HTMLReactParser$1.htmlToDOM;
	HTMLReactParser$1.attributesToProps;
	HTMLReactParser$1.Element;

	const GenshinRichtext = React__default["default"].memo(({ raw }) => {
	  const el = React$2.useMemo(() => {
	    const processedHtml = raw.replace(/\<color=(.*?)\>(.*?)\<\/color\>/g, '<span style="color: $1;">$2</span>');
	    return HTMLReactParser$1(processedHtml);
	  }, [raw]);
	  return /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, el);
	});
	GenshinRichtext.displayName = "GenshinRichtext";

	const ItemRoot = styled__default["default"].div`
  position: relative;

  .text {
    position: absolute;
    bottom: 0;
    color: #444;
    font-size: 24px;
    width: 100%;
    text-align: center;
    font-weight: bold;
    line-height: 44px;
    text-wrap: nowrap;
  }
`;
	const GachaPoolItem = React__default["default"].memo((props) => {
	  return /* @__PURE__ */ React__default["default"].createElement("div", null, props.items.map((i) => /* @__PURE__ */ React__default["default"].createElement(ItemRoot, {
	    key: i.item_id
	  }, /* @__PURE__ */ React__default["default"].createElement("img", {
	    src: i.item_img
	  }), /* @__PURE__ */ React__default["default"].createElement("div", {
	    className: "text"
	  }, i.item_name))));
	});
	GachaPoolItem.displayName = "GachaPoolItem";

	async function openFullScreenVideo(src) {
	  return new Promise((resolve, reject) => {
	    const containerEl = document.createElement("div");
	    containerEl.style.position = "fixed";
	    containerEl.style.height = "100vh";
	    containerEl.style.width = "100vw";
	    containerEl.style.left = "0px";
	    containerEl.style.top = "0px";
	    containerEl.style.zIndex = "99999";
	    containerEl.style.backgroundColor = "#000000";
	    containerEl.style.display = "flex";
	    containerEl.style.alignItems = "center";
	    containerEl.style.justifyContent = "center";
	    const videoEl = document.createElement("video");
	    videoEl.src = src;
	    videoEl.autoplay = true;
	    videoEl.addEventListener("ended", () => {
	      containerEl.removeChild(videoEl);
	      document.body.removeChild(containerEl);
	      resolve();
	    });
	    videoEl.addEventListener("error", () => {
	      reject();
	    });
	    containerEl.appendChild(videoEl);
	    document.body.appendChild(containerEl);
	  });
	}

	const wishVideoUrl = {
	  "5star": "https://tailchat.moonrailgun.com/genshin/5starwish.webm",
	  "4star": "https://tailchat.moonrailgun.com/genshin/4starwish.webm",
	  "5star-single": "https://tailchat.moonrailgun.com/genshin/5starwish-single.webm",
	  "4star-single": "https://tailchat.moonrailgun.com/genshin/4starwish-single.webm",
	  "3star-single": "https://tailchat.moonrailgun.com/genshin/3starwish-single.webm"
	};

	function getAppGachaItemText(item) {
	  if (item.count >= 2) {
	    return `${item.name}(${item.count})`;
	  } else {
	    return item.name;
	  }
	}
	function parseResultType(items) {
	  if (items.length === 1) {
	    const rarity = items[0].rarity;
	    if (rarity === 3) {
	      return "3star-single";
	    } else if (rarity === 4) {
	      return "4star-single";
	    } else if (rarity === 5) {
	      return "5star-single";
	    }
	  } else {
	    if (items.some((i) => i.rarity === 5)) {
	      return "5star";
	    } else if (items.some((i) => i.rarity === 4)) {
	      return "4star";
	    }
	  }
	  return "3star-single";
	}

	function pickName(item) {
	  return item.name;
	}
	const WishResultText = React__default["default"].memo(({ label, items, withCount }) => {
	  if (items.length === 0) {
	    return null;
	  }
	  return /* @__PURE__ */ React__default["default"].createElement("span", null, label, ":", " ", items.map(withCount ? getAppGachaItemText : pickName).join(", "));
	});
	WishResultText.displayName = "WishResultText";

	const GachaResult = React__default["default"].memo((props) => {
	  const { gachaResult, withCount } = props;
	  return /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("div", {
	    style: { color: "#c17a4e" }
	  }, /* @__PURE__ */ React__default["default"].createElement(WishResultText, {
	    label: "5\u661F",
	    items: gachaResult.ssr,
	    withCount
	  })), /* @__PURE__ */ React__default["default"].createElement("div", {
	    style: { color: "#865cad" }
	  }, /* @__PURE__ */ React__default["default"].createElement(WishResultText, {
	    label: "4\u661F",
	    items: gachaResult.sr,
	    withCount
	  })), /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement(WishResultText, {
	    label: "3\u661F",
	    items: gachaResult.r,
	    withCount
	  })));
	});
	GachaResult.displayName = "GachaResult";

	const WishResultModal = React__default["default"].memo(({ items }) => {
	  return /* @__PURE__ */ React__default["default"].createElement(common.ModalWrapper, {
	    title: "\u62BD\u5361\u7ED3\u679C"
	  }, /* @__PURE__ */ React__default["default"].createElement(GachaResult, {
	    gachaResult: {
	      ssr: items.filter((i) => i.rarity === 5),
	      sr: items.filter((i) => i.rarity === 4),
	      r: items.filter((i) => i.rarity === 3)
	    },
	    withCount: false
	  }));
	});
	WishResultModal.displayName = "WishResultModal";

	function useWish(poolData) {
	  const [gachaResult, setGachaResult] = React$2.useState({
	    ssr: [],
	    sr: [],
	    r: []
	  });
	  const [gachaCount, setGachaCount] = React$2.useState(0);
	  const gachaKit = React$2.useMemo(() => {
	    return poolData ? new lib$3.GenshinGachaKit(lib$3.util.poolStructureConverter(poolData)) : null;
	  }, [poolData]);
	  const handleGacha = React$2.useCallback((num) => {
	    if (!gachaKit) {
	      return;
	    }
	    const res = gachaKit.multiWish(num);
	    openFullScreenVideo(wishVideoUrl[parseResultType(res)]).then(() => {
	      common.openModal(/* @__PURE__ */ React__default["default"].createElement(WishResultModal, {
	        items: res
	      }));
	      setGachaCount(gachaKit.getCounter("total"));
	      setGachaResult(JSON.parse(JSON.stringify(gachaKit.getResult())));
	    });
	  }, [gachaKit]);
	  return { handleGacha, gachaResult, gachaCount };
	}

	const GachaPool = React__default["default"].memo((props) => {
	  var _a, _b;
	  const { value: poolData } = common.useAsync(() => {
	    return lib$3.util.getGachaData(props.gachaId);
	  }, [props.gachaId]);
	  const { handleGacha, gachaResult, gachaCount } = useWish(poolData);
	  if (!poolData) {
	    return /* @__PURE__ */ React__default["default"].createElement("div", null, "Loading...");
	  }
	  return /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("div", null, poolData.banner), /* @__PURE__ */ React__default["default"].createElement("div", null, poolData.date_range), /* @__PURE__ */ React__default["default"].createElement("div", {
	    className: "gacha-pool"
	  }, /* @__PURE__ */ React__default["default"].createElement(GachaPoolItem, {
	    items: (_a = poolData.r5_up_items) != null ? _a : []
	  }), /* @__PURE__ */ React__default["default"].createElement(GachaPoolItem, {
	    items: (_b = poolData.r4_up_items) != null ? _b : []
	  })), /* @__PURE__ */ React__default["default"].createElement(component.Space, null, /* @__PURE__ */ React__default["default"].createElement(component.Button, {
	    type: "primary",
	    onClick: () => handleGacha(1)
	  }, "\u6A21\u62DF\u5355\u62BD"), /* @__PURE__ */ React__default["default"].createElement(component.Button, {
	    type: "primary",
	    onClick: () => handleGacha(10)
	  }, "\u6A21\u62DF\u5341\u8FDE")), gachaCount > 0 && /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("div", null, "\u5DF2\u62BD: ", gachaCount, " \u6B21"), /* @__PURE__ */ React__default["default"].createElement(GachaResult, {
	    gachaResult,
	    withCount: true
	  })), /* @__PURE__ */ React__default["default"].createElement(component.Divider, null), /* @__PURE__ */ React__default["default"].createElement(GenshinRichtext, {
	    raw: poolData.content
	  }));
	});
	GachaPool.displayName = "GachaPool";

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
	var objectProto$c = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$9 = objectProto$c.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$c.toString;

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
	  var isOwn = hasOwnProperty$9.call(value, symToStringTag$1),
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

	var objectProto$b = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto$b.toString;

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

	function isObject$3(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	var isObject_1 = isObject$3;

	var baseGetTag$4 = _baseGetTag,
	    isObject$2 = isObject_1;

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
	  if (!isObject$2(value)) {
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
	    isObject$1 = isObject_1,
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
	    objectProto$a = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty$8).replace(reRegExpChar, '\\$&')
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
	  if (!isObject$1(value) || isMasked(value)) {
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
	function baseAssignValue$1(object, key, value) {
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

	var _baseAssignValue = baseAssignValue$1;

	/**
	 * A specialized version of `baseAggregator` for arrays.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} setter The function to set `accumulator` values.
	 * @param {Function} iteratee The iteratee to transform keys.
	 * @param {Object} accumulator The initial aggregated object.
	 * @returns {Function} Returns `accumulator`.
	 */

	function arrayAggregator$1(array, setter, iteratee, accumulator) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    var value = array[index];
	    setter(accumulator, value, iteratee(value), array);
	  }
	  return accumulator;
	}

	var _arrayAggregator = arrayAggregator$1;

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
	var argsTag$2 = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments$1(value) {
	  return isObjectLike$4(value) && baseGetTag$3(value) == argsTag$2;
	}

	var _baseIsArguments = baseIsArguments$1;

	var baseIsArguments = _baseIsArguments,
	    isObjectLike$3 = isObjectLike_1;

	/** Used for built-in method references. */
	var objectProto$9 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable$1 = objectProto$9.propertyIsEnumerable;

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
	var isArguments$2 = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike$3(value) && hasOwnProperty$7.call(value, 'callee') &&
	    !propertyIsEnumerable$1.call(value, 'callee');
	};

	var isArguments_1 = isArguments$2;

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

	var isBuffer$2 = {exports: {}};

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
	}(isBuffer$2, isBuffer$2.exports));

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
	function isIndex$2(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER$1 : length;

	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}

	var _isIndex = isIndex$2;

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

	var baseGetTag$2 = _baseGetTag,
	    isLength$2 = isLength_1,
	    isObjectLike$2 = isObjectLike_1;

	/** `Object#toString` result references. */
	var argsTag$1 = '[object Arguments]',
	    arrayTag$1 = '[object Array]',
	    boolTag$1 = '[object Boolean]',
	    dateTag$1 = '[object Date]',
	    errorTag$1 = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag$2 = '[object Map]',
	    numberTag$1 = '[object Number]',
	    objectTag$2 = '[object Object]',
	    regexpTag$1 = '[object RegExp]',
	    setTag$2 = '[object Set]',
	    stringTag$1 = '[object String]',
	    weakMapTag$1 = '[object WeakMap]';

	var arrayBufferTag$1 = '[object ArrayBuffer]',
	    dataViewTag$2 = '[object DataView]',
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
	typedArrayTags[dataViewTag$2] = typedArrayTags[dateTag$1] =
	typedArrayTags[errorTag$1] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag$2] = typedArrayTags[numberTag$1] =
	typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$1] =
	typedArrayTags[setTag$2] = typedArrayTags[stringTag$1] =
	typedArrayTags[weakMapTag$1] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray$1(value) {
	  return isObjectLike$2(value) &&
	    isLength$2(value.length) && !!typedArrayTags[baseGetTag$2(value)];
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
	var isTypedArray$2 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	var isTypedArray_1 = isTypedArray$2;

	var baseTimes = _baseTimes,
	    isArguments$1 = isArguments_1,
	    isArray$8 = isArray_1,
	    isBuffer$1 = isBuffer$2.exports,
	    isIndex$1 = _isIndex,
	    isTypedArray$1 = isTypedArray_1;

	/** Used for built-in method references. */
	var objectProto$8 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys$1(value, inherited) {
	  var isArr = isArray$8(value),
	      isArg = !isArr && isArguments$1(value),
	      isBuff = !isArr && !isArg && isBuffer$1(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray$1(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty$6.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex$1(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _arrayLikeKeys = arrayLikeKeys$1;

	/** Used for built-in method references. */

	var objectProto$7 = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype$1(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$7;

	  return value === proto;
	}

	var _isPrototype = isPrototype$1;

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

	var isPrototype = _isPrototype,
	    nativeKeys = _nativeKeys;

	/** Used for built-in method references. */
	var objectProto$6 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys$1(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty$5.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeys = baseKeys$1;

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

	var arrayLikeKeys = _arrayLikeKeys,
	    baseKeys = _baseKeys,
	    isArrayLike$1 = isArrayLike_1;

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
	function keys$3(object) {
	  return isArrayLike$1(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	var keys_1 = keys$3;

	var baseFor = _baseFor,
	    keys$2 = keys_1;

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn$1(object, iteratee) {
	  return object && baseFor(object, iteratee, keys$2);
	}

	var _baseForOwn = baseForOwn$1;

	var isArrayLike = isArrayLike_1;

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach$1(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	var _createBaseEach = createBaseEach$1;

	var baseForOwn = _baseForOwn,
	    createBaseEach = _createBaseEach;

	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach$1 = createBaseEach(baseForOwn);

	var _baseEach = baseEach$1;

	var baseEach = _baseEach;

	/**
	 * Aggregates elements of `collection` on `accumulator` with keys transformed
	 * by `iteratee` and values set by `setter`.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} setter The function to set `accumulator` values.
	 * @param {Function} iteratee The iteratee to transform keys.
	 * @param {Object} accumulator The initial aggregated object.
	 * @returns {Function} Returns `accumulator`.
	 */
	function baseAggregator$1(collection, setter, iteratee, accumulator) {
	  baseEach(collection, function(value, key, collection) {
	    setter(accumulator, value, iteratee(value), collection);
	  });
	  return accumulator;
	}

	var _baseAggregator = baseAggregator$1;

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

	function eq$2(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	var eq_1 = eq$2;

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

	var ListCache$3 = _ListCache;

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear$1() {
	  this.__data__ = new ListCache$3;
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

	var getNative$5 = _getNative,
	    root$5 = _root;

	/* Built-in method references that are verified to be native. */
	var Map$4 = getNative$5(root$5, 'Map');

	var _Map = Map$4;

	var getNative$4 = _getNative;

	/* Built-in method references that are verified to be native. */
	var nativeCreate$4 = getNative$4(Object, 'create');

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
	var objectProto$5 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

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
	  return hasOwnProperty$4.call(data, key) ? data[key] : undefined;
	}

	var _hashGet = hashGet$1;

	var nativeCreate$1 = _nativeCreate;

	/** Used for built-in method references. */
	var objectProto$4 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

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
	  return nativeCreate$1 ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
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

	var Hash = _Hash,
	    ListCache$2 = _ListCache,
	    Map$3 = _Map;

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
	    'map': new (Map$3 || ListCache$2),
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

	var ListCache$1 = _ListCache,
	    Map$2 = _Map,
	    MapCache$2 = _MapCache;

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
	    if (!Map$2 || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache$2(pairs);
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

	var MapCache$1 = _MapCache,
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

	  this.__data__ = new MapCache$1;
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

	var root$4 = _root;

	/** Built-in value references. */
	var Uint8Array$1 = root$4.Uint8Array;

	var _Uint8Array = Uint8Array$1;

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */

	function mapToArray$1(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	var _mapToArray = mapToArray$1;

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

	var Symbol$2 = _Symbol,
	    Uint8Array = _Uint8Array,
	    eq = eq_1,
	    equalArrays$1 = _equalArrays,
	    mapToArray = _mapToArray,
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
	    symbolTag$1 = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag$1 = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : undefined,
	    symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;

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
	    case dataViewTag$1:
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
	      var convert = mapToArray;

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

	    case symbolTag$1:
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
	    isArray$7 = isArray_1;

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
	  return isArray$7(object) ? result : arrayPush(result, symbolsFunc(object));
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
	var objectProto$3 = Object.prototype;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;

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
	    keys$1 = keys_1;

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys$1(object) {
	  return baseGetAllKeys(object, keys$1, getSymbols);
	}

	var _getAllKeys = getAllKeys$1;

	var getAllKeys = _getAllKeys;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$3 = 1;

	/** Used for built-in method references. */
	var objectProto$2 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

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
	    if (!(isPartial ? key in other : hasOwnProperty$2.call(other, key))) {
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

	var getNative$3 = _getNative,
	    root$3 = _root;

	/* Built-in method references that are verified to be native. */
	var DataView$1 = getNative$3(root$3, 'DataView');

	var _DataView = DataView$1;

	var getNative$2 = _getNative,
	    root$2 = _root;

	/* Built-in method references that are verified to be native. */
	var Promise$2 = getNative$2(root$2, 'Promise');

	var _Promise = Promise$2;

	var getNative$1 = _getNative,
	    root$1 = _root;

	/* Built-in method references that are verified to be native. */
	var Set$2 = getNative$1(root$1, 'Set');

	var _Set = Set$2;

	var getNative = _getNative,
	    root = _root;

	/* Built-in method references that are verified to be native. */
	var WeakMap$1 = getNative(root, 'WeakMap');

	var _WeakMap = WeakMap$1;

	var DataView = _DataView,
	    Map$1 = _Map,
	    Promise$1 = _Promise,
	    Set$1 = _Set,
	    WeakMap = _WeakMap,
	    baseGetTag$1 = _baseGetTag,
	    toSource = _toSource;

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag$1 = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

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
	var getTag$1 = baseGetTag$1;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map$1 && getTag$1(new Map$1) != mapTag) ||
	    (Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag) ||
	    (Set$1 && getTag$1(new Set$1) != setTag) ||
	    (WeakMap && getTag$1(new WeakMap) != weakMapTag)) {
	  getTag$1 = function(value) {
	    var result = baseGetTag$1(value),
	        Ctor = result == objectTag$1 ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	var _getTag = getTag$1;

	var Stack$1 = _Stack,
	    equalArrays = _equalArrays,
	    equalByTag = _equalByTag,
	    equalObjects = _equalObjects,
	    getTag = _getTag,
	    isArray$6 = isArray_1,
	    isBuffer = isBuffer$2.exports,
	    isTypedArray = isTypedArray_1;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$2 = 1;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

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
	  var objIsArr = isArray$6(object),
	      othIsArr = isArray$6(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);

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
	    var objIsWrapped = objIsObj && hasOwnProperty$1.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty$1.call(other, '__wrapped__');

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
	    isObjectLike$1 = isObjectLike_1;

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
	  if (value == null || other == null || (!isObjectLike$1(value) && !isObjectLike$1(other))) {
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
	    keys = keys_1;

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData$1(object) {
	  var result = keys(object),
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

	var baseGetTag = _baseGetTag,
	    isObjectLike = isObjectLike_1;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

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
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}

	var isSymbol_1 = isSymbol$3;

	var isArray$5 = isArray_1,
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
	  if (isArray$5(value)) {
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

	var MapCache = _MapCache;

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
	  memoized.cache = new (memoize$1.Cache || MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize$1.Cache = MapCache;

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

	function arrayMap$1(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	var _arrayMap = arrayMap$1;

	var Symbol$1 = _Symbol,
	    arrayMap = _arrayMap,
	    isArray$4 = isArray_1,
	    isSymbol$1 = isSymbol_1;

	/** Used as references for various `Number` constants. */
	var INFINITY$1 = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

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
	  if (isArray$4(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString$1) + '';
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

	var isArray$3 = isArray_1,
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
	function castPath$2(value, object) {
	  if (isArray$3(value)) {
	    return value;
	  }
	  return isKey$2(value, object) ? [value] : stringToPath(toString(value));
	}

	var _castPath = castPath$2;

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
	function toKey$4(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	var _toKey = toKey$4;

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

	var castPath = _castPath,
	    isArguments = isArguments_1,
	    isArray$2 = isArray_1,
	    isIndex = _isIndex,
	    isLength = isLength_1,
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
	function hasPath$1(object, path, hasFunc) {
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
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray$2(object) || isArguments(object));
	}

	var _hasPath = hasPath$1;

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
	    isArray$1 = isArray_1,
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
	    return isArray$1(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	var _baseIteratee = baseIteratee$1;

	var arrayAggregator = _arrayAggregator,
	    baseAggregator = _baseAggregator,
	    baseIteratee = _baseIteratee,
	    isArray = isArray_1;

	/**
	 * Creates a function like `_.groupBy`.
	 *
	 * @private
	 * @param {Function} setter The function to set accumulator values.
	 * @param {Function} [initializer] The accumulator object initializer.
	 * @returns {Function} Returns the new aggregator function.
	 */
	function createAggregator$1(setter, initializer) {
	  return function(collection, iteratee) {
	    var func = isArray(collection) ? arrayAggregator : baseAggregator,
	        accumulator = initializer ? initializer() : {};

	    return func(collection, setter, baseIteratee(iteratee), accumulator);
	  };
	}

	var _createAggregator = createAggregator$1;

	var baseAssignValue = _baseAssignValue,
	    createAggregator = _createAggregator;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an object composed of keys generated from the results of running
	 * each element of `collection` thru `iteratee`. The order of grouped values
	 * is determined by the order they occur in `collection`. The corresponding
	 * value of each key is an array of elements responsible for generating the
	 * key. The iteratee is invoked with one argument: (value).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
	 * @returns {Object} Returns the composed aggregate object.
	 * @example
	 *
	 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
	 * // => { '4': [4.2], '6': [6.1, 6.3] }
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.groupBy(['one', 'two', 'three'], 'length');
	 * // => { '3': ['one', 'two'], '5': ['three'] }
	 */
	var groupBy = createAggregator(function(result, value, key) {
	  if (hasOwnProperty.call(result, key)) {
	    result[key].push(value);
	  } else {
	    baseAssignValue(result, key, [value]);
	  }
	});

	var groupBy_1 = groupBy;

	var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

	var css = "/* purgecss start ignore */\n\n.plugin-genshin-panel {\n  width: 100%;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n}\n\n.plugin-genshin-panel .gacha-title {\n  font-weight: bold;\n  font-size: 22px;\n  margin-bottom: 10px;\n}\n\n.plugin-genshin-panel .gacha-pool {\n  display: flex;\n  flex-direction: column;\n}\n\n.plugin-genshin-panel .gacha-pool > div {\n  display: flex;\n  margin-bottom: 10px;\n}\n\n.plugin-genshin-panel .gacha-pool > div > div {\n  margin-right: 10px;\n}\n\n/* purgecss end ignore */\n";
	n(css,{});

	const GenshinPanel = React__default["default"].memo(() => {
	  const { value: gachaList, loading } = common.useAsync(async () => {
	    var _a, _b, _c, _d;
	    const gacha = await lib$3.util.getGachaIndex();
	    const dict = groupBy_1(gacha, "gacha_type");
	    return [
	      ...(_a = dict["301"]) != null ? _a : [],
	      ...(_b = dict["302"]) != null ? _b : [],
	      ...(_c = dict["200"]) != null ? _c : [],
	      ...(_d = dict["100"]) != null ? _d : []
	    ];
	  }, []);
	  return /* @__PURE__ */ React__default["default"].createElement("div", {
	    className: "plugin-genshin-panel"
	  }, /* @__PURE__ */ React__default["default"].createElement("div", {
	    className: "gacha-title"
	  }, index.Translate.genshin, " - ", index.Translate.gacha), loading && /* @__PURE__ */ React__default["default"].createElement(component.LoadingSpinner, null), /* @__PURE__ */ React__default["default"].createElement(component.PillTabs, {
	    items: (gachaList != null ? gachaList : []).map((item) => ({
	      key: String(item.gacha_id),
	      label: `${item.gacha_name}(${item.begin_time} - ${item.end_time})`,
	      children: /* @__PURE__ */ React__default["default"].createElement(GachaPool, {
	        gachaId: item.gacha_id
	      })
	    }))
	  }));
	});
	GenshinPanel.displayName = "GenshinPanel";

	exports["default"] = GenshinPanel;

}));
//# sourceMappingURL=index-b5ab0930.js.map
