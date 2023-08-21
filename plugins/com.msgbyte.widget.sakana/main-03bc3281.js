definePlugin('@plugins/com.msgbyte.widget.sakana/main-03bc3281.js', (function () { 'use strict';

    var resizeObservers = [];

    var hasActiveObservations = function () {
        return resizeObservers.some(function (ro) { return ro.activeTargets.length > 0; });
    };

    var hasSkippedObservations = function () {
        return resizeObservers.some(function (ro) { return ro.skippedTargets.length > 0; });
    };

    var msg = 'ResizeObserver loop completed with undelivered notifications.';
    var deliverResizeLoopError = function () {
        var event;
        if (typeof ErrorEvent === 'function') {
            event = new ErrorEvent('error', {
                message: msg
            });
        }
        else {
            event = document.createEvent('Event');
            event.initEvent('error', false, false);
            event.message = msg;
        }
        window.dispatchEvent(event);
    };

    var ResizeObserverBoxOptions;
    (function (ResizeObserverBoxOptions) {
        ResizeObserverBoxOptions["BORDER_BOX"] = "border-box";
        ResizeObserverBoxOptions["CONTENT_BOX"] = "content-box";
        ResizeObserverBoxOptions["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
    })(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));

    var freeze = function (obj) { return Object.freeze(obj); };

    var ResizeObserverSize = (function () {
        function ResizeObserverSize(inlineSize, blockSize) {
            this.inlineSize = inlineSize;
            this.blockSize = blockSize;
            freeze(this);
        }
        return ResizeObserverSize;
    }());

    var DOMRectReadOnly = (function () {
        function DOMRectReadOnly(x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.top = this.y;
            this.left = this.x;
            this.bottom = this.top + this.height;
            this.right = this.left + this.width;
            return freeze(this);
        }
        DOMRectReadOnly.prototype.toJSON = function () {
            var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
            return { x: x, y: y, top: top, right: right, bottom: bottom, left: left, width: width, height: height };
        };
        DOMRectReadOnly.fromRect = function (rectangle) {
            return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
        };
        return DOMRectReadOnly;
    }());

    var isSVG = function (target) { return target instanceof SVGElement && 'getBBox' in target; };
    var isHidden = function (target) {
        if (isSVG(target)) {
            var _a = target.getBBox(), width = _a.width, height = _a.height;
            return !width && !height;
        }
        var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
        return !(offsetWidth || offsetHeight || target.getClientRects().length);
    };
    var isElement = function (obj) {
        var _a;
        if (obj instanceof Element) {
            return true;
        }
        var scope = (_a = obj === null || obj === void 0 ? void 0 : obj.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView;
        return !!(scope && obj instanceof scope.Element);
    };
    var isReplacedElement = function (target) {
        switch (target.tagName) {
            case 'INPUT':
                if (target.type !== 'image') {
                    break;
                }
            case 'VIDEO':
            case 'AUDIO':
            case 'EMBED':
            case 'OBJECT':
            case 'CANVAS':
            case 'IFRAME':
            case 'IMG':
                return true;
        }
        return false;
    };

    var global = typeof window !== 'undefined' ? window : {};

    var cache = new WeakMap();
    var scrollRegexp = /auto|scroll/;
    var verticalRegexp = /^tb|vertical/;
    var IE = (/msie|trident/i).test(global.navigator && global.navigator.userAgent);
    var parseDimension = function (pixel) { return parseFloat(pixel || '0'); };
    var size = function (inlineSize, blockSize, switchSizes) {
        if (inlineSize === void 0) { inlineSize = 0; }
        if (blockSize === void 0) { blockSize = 0; }
        if (switchSizes === void 0) { switchSizes = false; }
        return new ResizeObserverSize((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
    };
    var zeroBoxes = freeze({
        devicePixelContentBoxSize: size(),
        borderBoxSize: size(),
        contentBoxSize: size(),
        contentRect: new DOMRectReadOnly(0, 0, 0, 0)
    });
    var calculateBoxSizes = function (target, forceRecalculation) {
        if (forceRecalculation === void 0) { forceRecalculation = false; }
        if (cache.has(target) && !forceRecalculation) {
            return cache.get(target);
        }
        if (isHidden(target)) {
            cache.set(target, zeroBoxes);
            return zeroBoxes;
        }
        var cs = getComputedStyle(target);
        var svg = isSVG(target) && target.ownerSVGElement && target.getBBox();
        var removePadding = !IE && cs.boxSizing === 'border-box';
        var switchSizes = verticalRegexp.test(cs.writingMode || '');
        var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || '');
        var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || '');
        var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
        var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
        var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
        var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
        var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
        var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
        var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
        var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
        var horizontalPadding = paddingLeft + paddingRight;
        var verticalPadding = paddingTop + paddingBottom;
        var horizontalBorderArea = borderLeft + borderRight;
        var verticalBorderArea = borderTop + borderBottom;
        var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
        var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
        var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
        var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
        var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
        var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
        var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
        var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
        var boxes = freeze({
            devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
            borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
            contentBoxSize: size(contentWidth, contentHeight, switchSizes),
            contentRect: new DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
        });
        cache.set(target, boxes);
        return boxes;
    };
    var calculateBoxSize = function (target, observedBox, forceRecalculation) {
        var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
        switch (observedBox) {
            case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
                return devicePixelContentBoxSize;
            case ResizeObserverBoxOptions.BORDER_BOX:
                return borderBoxSize;
            default:
                return contentBoxSize;
        }
    };

    var ResizeObserverEntry = (function () {
        function ResizeObserverEntry(target) {
            var boxes = calculateBoxSizes(target);
            this.target = target;
            this.contentRect = boxes.contentRect;
            this.borderBoxSize = freeze([boxes.borderBoxSize]);
            this.contentBoxSize = freeze([boxes.contentBoxSize]);
            this.devicePixelContentBoxSize = freeze([boxes.devicePixelContentBoxSize]);
        }
        return ResizeObserverEntry;
    }());

    var calculateDepthForNode = function (node) {
        if (isHidden(node)) {
            return Infinity;
        }
        var depth = 0;
        var parent = node.parentNode;
        while (parent) {
            depth += 1;
            parent = parent.parentNode;
        }
        return depth;
    };

    var broadcastActiveObservations = function () {
        var shallowestDepth = Infinity;
        var callbacks = [];
        resizeObservers.forEach(function processObserver(ro) {
            if (ro.activeTargets.length === 0) {
                return;
            }
            var entries = [];
            ro.activeTargets.forEach(function processTarget(ot) {
                var entry = new ResizeObserverEntry(ot.target);
                var targetDepth = calculateDepthForNode(ot.target);
                entries.push(entry);
                ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox);
                if (targetDepth < shallowestDepth) {
                    shallowestDepth = targetDepth;
                }
            });
            callbacks.push(function resizeObserverCallback() {
                ro.callback.call(ro.observer, entries, ro.observer);
            });
            ro.activeTargets.splice(0, ro.activeTargets.length);
        });
        for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
            var callback = callbacks_1[_i];
            callback();
        }
        return shallowestDepth;
    };

    var gatherActiveObservationsAtDepth = function (depth) {
        resizeObservers.forEach(function processObserver(ro) {
            ro.activeTargets.splice(0, ro.activeTargets.length);
            ro.skippedTargets.splice(0, ro.skippedTargets.length);
            ro.observationTargets.forEach(function processTarget(ot) {
                if (ot.isActive()) {
                    if (calculateDepthForNode(ot.target) > depth) {
                        ro.activeTargets.push(ot);
                    }
                    else {
                        ro.skippedTargets.push(ot);
                    }
                }
            });
        });
    };

    var process = function () {
        var depth = 0;
        gatherActiveObservationsAtDepth(depth);
        while (hasActiveObservations()) {
            depth = broadcastActiveObservations();
            gatherActiveObservationsAtDepth(depth);
        }
        if (hasSkippedObservations()) {
            deliverResizeLoopError();
        }
        return depth > 0;
    };

    var trigger;
    var callbacks = [];
    var notify = function () { return callbacks.splice(0).forEach(function (cb) { return cb(); }); };
    var queueMicroTask = function (callback) {
        if (!trigger) {
            var toggle_1 = 0;
            var el_1 = document.createTextNode('');
            var config = { characterData: true };
            new MutationObserver(function () { return notify(); }).observe(el_1, config);
            trigger = function () { el_1.textContent = "".concat(toggle_1 ? toggle_1-- : toggle_1++); };
        }
        callbacks.push(callback);
        trigger();
    };

    var queueResizeObserver = function (cb) {
        queueMicroTask(function ResizeObserver() {
            requestAnimationFrame(cb);
        });
    };

    var watching = 0;
    var isWatching = function () { return !!watching; };
    var CATCH_PERIOD = 250;
    var observerConfig = { attributes: true, characterData: true, childList: true, subtree: true };
    var events = [
        'resize',
        'load',
        'transitionend',
        'animationend',
        'animationstart',
        'animationiteration',
        'keyup',
        'keydown',
        'mouseup',
        'mousedown',
        'mouseover',
        'mouseout',
        'blur',
        'focus'
    ];
    var time = function (timeout) {
        if (timeout === void 0) { timeout = 0; }
        return Date.now() + timeout;
    };
    var scheduled = false;
    var Scheduler = (function () {
        function Scheduler() {
            var _this = this;
            this.stopped = true;
            this.listener = function () { return _this.schedule(); };
        }
        Scheduler.prototype.run = function (timeout) {
            var _this = this;
            if (timeout === void 0) { timeout = CATCH_PERIOD; }
            if (scheduled) {
                return;
            }
            scheduled = true;
            var until = time(timeout);
            queueResizeObserver(function () {
                var elementsHaveResized = false;
                try {
                    elementsHaveResized = process();
                }
                finally {
                    scheduled = false;
                    timeout = until - time();
                    if (!isWatching()) {
                        return;
                    }
                    if (elementsHaveResized) {
                        _this.run(1000);
                    }
                    else if (timeout > 0) {
                        _this.run(timeout);
                    }
                    else {
                        _this.start();
                    }
                }
            });
        };
        Scheduler.prototype.schedule = function () {
            this.stop();
            this.run();
        };
        Scheduler.prototype.observe = function () {
            var _this = this;
            var cb = function () { return _this.observer && _this.observer.observe(document.body, observerConfig); };
            document.body ? cb() : global.addEventListener('DOMContentLoaded', cb);
        };
        Scheduler.prototype.start = function () {
            var _this = this;
            if (this.stopped) {
                this.stopped = false;
                this.observer = new MutationObserver(this.listener);
                this.observe();
                events.forEach(function (name) { return global.addEventListener(name, _this.listener, true); });
            }
        };
        Scheduler.prototype.stop = function () {
            var _this = this;
            if (!this.stopped) {
                this.observer && this.observer.disconnect();
                events.forEach(function (name) { return global.removeEventListener(name, _this.listener, true); });
                this.stopped = true;
            }
        };
        return Scheduler;
    }());
    var scheduler = new Scheduler();
    var updateCount = function (n) {
        !watching && n > 0 && scheduler.start();
        watching += n;
        !watching && scheduler.stop();
    };

    var skipNotifyOnElement = function (target) {
        return !isSVG(target)
            && !isReplacedElement(target)
            && getComputedStyle(target).display === 'inline';
    };
    var ResizeObservation = (function () {
        function ResizeObservation(target, observedBox) {
            this.target = target;
            this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX;
            this.lastReportedSize = {
                inlineSize: 0,
                blockSize: 0
            };
        }
        ResizeObservation.prototype.isActive = function () {
            var size = calculateBoxSize(this.target, this.observedBox, true);
            if (skipNotifyOnElement(this.target)) {
                this.lastReportedSize = size;
            }
            if (this.lastReportedSize.inlineSize !== size.inlineSize
                || this.lastReportedSize.blockSize !== size.blockSize) {
                return true;
            }
            return false;
        };
        return ResizeObservation;
    }());

    var ResizeObserverDetail = (function () {
        function ResizeObserverDetail(resizeObserver, callback) {
            this.activeTargets = [];
            this.skippedTargets = [];
            this.observationTargets = [];
            this.observer = resizeObserver;
            this.callback = callback;
        }
        return ResizeObserverDetail;
    }());

    var observerMap = new WeakMap();
    var getObservationIndex = function (observationTargets, target) {
        for (var i = 0; i < observationTargets.length; i += 1) {
            if (observationTargets[i].target === target) {
                return i;
            }
        }
        return -1;
    };
    var ResizeObserverController = (function () {
        function ResizeObserverController() {
        }
        ResizeObserverController.connect = function (resizeObserver, callback) {
            var detail = new ResizeObserverDetail(resizeObserver, callback);
            observerMap.set(resizeObserver, detail);
        };
        ResizeObserverController.observe = function (resizeObserver, target, options) {
            var detail = observerMap.get(resizeObserver);
            var firstObservation = detail.observationTargets.length === 0;
            if (getObservationIndex(detail.observationTargets, target) < 0) {
                firstObservation && resizeObservers.push(detail);
                detail.observationTargets.push(new ResizeObservation(target, options && options.box));
                updateCount(1);
                scheduler.schedule();
            }
        };
        ResizeObserverController.unobserve = function (resizeObserver, target) {
            var detail = observerMap.get(resizeObserver);
            var index = getObservationIndex(detail.observationTargets, target);
            var lastObservation = detail.observationTargets.length === 1;
            if (index >= 0) {
                lastObservation && resizeObservers.splice(resizeObservers.indexOf(detail), 1);
                detail.observationTargets.splice(index, 1);
                updateCount(-1);
            }
        };
        ResizeObserverController.disconnect = function (resizeObserver) {
            var _this = this;
            var detail = observerMap.get(resizeObserver);
            detail.observationTargets.slice().forEach(function (ot) { return _this.unobserve(resizeObserver, ot.target); });
            detail.activeTargets.splice(0, detail.activeTargets.length);
        };
        return ResizeObserverController;
    }());

    var ResizeObserver = (function () {
        function ResizeObserver(callback) {
            if (arguments.length === 0) {
                throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
            }
            if (typeof callback !== 'function') {
                throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
            }
            ResizeObserverController.connect(this, callback);
        }
        ResizeObserver.prototype.observe = function (target, options) {
            if (arguments.length === 0) {
                throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
            }
            if (!isElement(target)) {
                throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
            }
            ResizeObserverController.observe(this, target, options);
        };
        ResizeObserver.prototype.unobserve = function (target) {
            if (arguments.length === 0) {
                throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
            }
            if (!isElement(target)) {
                throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
            }
            ResizeObserverController.unobserve(this, target);
        };
        ResizeObserver.prototype.disconnect = function () {
            ResizeObserverController.disconnect(this);
        };
        ResizeObserver.toString = function () {
            return 'function ResizeObserver () { [polyfill code] }';
        };
        return ResizeObserver;
    }());

    var img$1 = "data:image/png;base64,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";

    var img = "data:image/png;base64,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";

    const chisato = {
        image: img$1,
        initialState: {
            i: 0.08,
            s: 0.1,
            d: 0.99,
            r: 1,
            y: 40,
            t: 0,
            w: 0,
        },
    };
    const takina = {
        image: img,
        initialState: {
            i: 0.08,
            s: 0.1,
            d: 0.988,
            r: 12,
            y: 2,
            t: 0,
            w: 0,
        },
    };
    var characters = {
        chisato,
        takina,
    };

    var svgClose = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"sakana-widget-icon\" viewBox=\"0 0 512 512\"><path d=\"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z\" fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"10\" stroke-width=\"32\"/><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M320 320 192 192m0 128 128-128\"/></svg>";

    var svgGitHub = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"sakana-widget-icon\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z\"/></svg>";

    var svgPerson = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"sakana-widget-icon\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 0 1-6.14-.32 124.27 124.27 0 0 0-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 0 0-32.35 29.58 4 4 0 0 1-6.14.32A175.32 175.32 0 0 1 80 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 0 1-46.68 119.25z\"/><path fill=\"currentColor\" d=\"M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z\"/></svg>";

    var svgSync = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"sakana-widget-icon\" viewBox=\"0 0 512 512\"><path d=\"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z\" fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"10\" stroke-width=\"32\"/><path d=\"M351.82 271.87v-16A96.15 96.15 0 0 0 184.09 192m-24.2 48.17v16A96.22 96.22 0 0 0 327.81 320\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"m135.87 256 23.59-23.6 24.67 23.6m192 0-23.59 23.6-24.67-23.6\"/></svg>";

    /* eslint-disable @typescript-eslint/no-explicit-any */
    /**
     * simple is object
     */
    function isObject(value) {
        const type = typeof value;
        return value != null && (type === 'object' || type === 'function');
    }
    /**
     * simple deep clone
     */
    function cloneDeep(value) {
        if (typeof window.structuredClone === 'function') {
            return window.structuredClone(value);
        }
        else {
            return JSON.parse(JSON.stringify(value));
        }
    }
    /**
     * simple deep merge
     */
    function mergeDeep(target, source) {
        const _target = cloneDeep(target);
        const _source = cloneDeep(source);
        if (!isObject(_target) || !isObject(_source)) {
            return _target;
        }
        Object.keys(_source).forEach((key) => {
            if (isObject(_source[key])) {
                if (!isObject(_target[key])) {
                    _target[key] = {};
                }
                _target[key] = mergeDeep(_target[key], _source[key]);
            }
            else {
                _target[key] = _source[key];
            }
        });
        return _target;
    }
    /**
     * throttle a func with requestAnimationFrame,
     * https://github.com/wuct/raf-throttle/blob/master/rafThrottle.js
     */
    function throttle(callback) {
        let requestId = null;
        let lastArgs;
        const later = (context) => () => {
            requestId = null;
            callback.apply(context, lastArgs);
        };
        const throttled = function (...args) {
            lastArgs = args;
            if (requestId === null) {
                // @ts-expect-error this refers to context inherited from outside
                requestId = requestAnimationFrame(later(this));
            }
        };
        return throttled;
    }
    /**
     * get the canvas context with device pixel ratio
     */
    function getCanvasCtx(canvas, appSize, devicePixelRatio = (window.devicePixelRatio || 1) * 2) {
        const canvasRenderSize = appSize * devicePixelRatio;
        canvas.width = canvasRenderSize;
        canvas.height = canvasRenderSize;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            return null;
        }
        // scale all drawing operations by the dpr
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(devicePixelRatio, devicePixelRatio);
        return ctx;
    }

    /*! sakana-widget | DSRKafuU (https://dsrkafuu.net) | Copyright (c) MIT License */
    const defaultOptions = {
        size: 200,
        autoFit: false,
        character: 'chisato',
        controls: true,
        rod: true,
        draggable: true,
        stroke: {
            color: '#b4b4b4',
            width: 10,
        },
        threshold: 0.1,
        rotate: 0,
    };
    // register default characters
    let _characters = null;
    function _initCharacters() {
        if (_characters)
            return;
        _characters = {};
        Object.keys(characters).forEach((key) => {
            const _char = characters[key];
            _characters[key] = cloneDeep(_char);
        });
    }
    /**
     * widget instance class
     */
    class SakanaWidget {
        constructor(options = {}) {
            this._lastRunUnix = Date.now();
            this._frameUnix = 1000 / 60; // default to speed of 60 fps
            this._running = true;
            this._magicForceTimeout = 0;
            this._magicForceEnabled = false;
            this._resizeObserver = null;
            /**
             * @private
             * calculate limit and update from size
             */
            this._updateLimit = (size) => {
                let maxR = size / 5;
                if (maxR < 30) {
                    maxR = 30;
                }
                else if (maxR > 60) {
                    maxR = 60;
                }
                const maxY = size / 4;
                const minY = -maxY;
                this._limit = { maxR, maxY, minY };
            };
            /**
             * @private
             * refresh widget size
             */
            this._updateSize = (size) => {
                this._options.size = size;
                this._imageSize = this._options.size / 1.25;
                this._canvasSize = this._options.size * 1.5;
                // widget root app
                this._domApp.style.width = `${size}px`;
                this._domApp.style.height = `${size}px`;
                // canvas stroke palette
                this._domCanvas.style.width = `${this._canvasSize}px`;
                this._domCanvas.style.height = `${this._canvasSize}px`;
                const ctx = getCanvasCtx(this._domCanvas, this._canvasSize);
                if (!ctx) {
                    throw new Error('Invalid canvas context');
                }
                this._domCanvasCtx = ctx;
                this._draw(); // refresh canvas
                // widget main container
                this._domMain.style.width = `${size}px`;
                this._domMain.style.height = `${size}px`;
                // widget image
                this._domImage.style.width = `${this._imageSize}px`;
                this._domImage.style.height = `${this._imageSize}px`;
                this._domImage.style.transformOrigin = `50% ${size}px`; // use the bottom center of widget as trans origin
            };
            /**
             * @private
             * create widget dom elements
             */
            this._updateDom = () => {
                // wrapper
                const wrapper = document.createElement('div');
                wrapper.className = 'sakana-widget-wrapper';
                this._domWrapper = wrapper;
                // widget root app
                const app = document.createElement('div');
                app.className = 'sakana-widget-app';
                this._domApp = app;
                wrapper.appendChild(app);
                // canvas stroke palette
                const canvas = document.createElement('canvas');
                canvas.className = 'sakana-widget-canvas';
                this._domCanvas = canvas;
                app.appendChild(canvas);
                // widget main container
                const main = document.createElement('div');
                main.className = 'sakana-widget-main';
                this._domMain = main;
                app.appendChild(main);
                // widget image
                const img = document.createElement('div');
                img.className = 'sakana-widget-img';
                img.style.backgroundImage = `url('${this._image}')`;
                this._domImage = img;
                main.appendChild(img);
                // control bar
                const ctrl = document.createElement('div');
                ctrl.className = 'sakana-widget-ctrl';
                if (this._options.controls) {
                    main.appendChild(ctrl);
                }
                const itemClass = 'sakana-widget-ctrl-item';
                const person = document.createElement('div');
                person.className = itemClass;
                person.innerHTML = svgPerson;
                this._domCtrlPerson = person;
                ctrl.appendChild(person);
                const magic = document.createElement('div');
                magic.className = itemClass;
                magic.innerHTML = svgSync;
                this._domCtrlMagic = magic;
                ctrl.appendChild(magic);
                const github = document.createElement('a');
                github.className = itemClass;
                github.href = '//github.com/dsrkafuu/sakana-widget';
                github.target = '_blank';
                github.innerHTML = svgGitHub;
                ctrl.appendChild(github);
                const close = document.createElement('div');
                close.className = itemClass;
                close.innerHTML = svgClose;
                this._domCtrlClose = close;
                ctrl.appendChild(close);
            };
            /**
             * @private
             * calculate center of the image
             */
            this._calcCenterPoint = (degree, radius, x, y) => {
                const radian = (Math.PI / 180) * degree;
                const cos = Math.cos(radian);
                const sin = Math.sin(radian);
                const nx = sin * radius + cos * x - sin * y;
                const ny = cos * radius - cos * y - sin * x;
                return { nx, ny };
            };
            /**
             * @private
             * draw a frame
             */
            this._draw = () => {
                const { r, y } = this._state;
                const { size, controls, stroke } = this._options;
                const img = this._domImage;
                const imgSize = this._imageSize;
                const ctx = this._domCanvasCtx;
                // move the image
                const x = r * 1;
                img.style.transform = `rotate(${r}deg) translateX(${x}px) translateY(${y}px)`;
                // draw the canvas line
                ctx.clearRect(0, 0, this._canvasSize, this._canvasSize);
                ctx.save();
                // use the bottom center of widget as axis origin
                // note that canvas is 1.5 times larger than widget
                ctx.translate(this._canvasSize / 2, size + (this._canvasSize - size) / 2);
                ctx.strokeStyle = stroke.color;
                ctx.lineWidth = stroke.width;
                ctx.lineCap = 'round';
                if (this._options.rod) {
                    ctx.beginPath();
                }
                // use the bottom center (different offset) of widget as start of the line
                if (controls) {
                    ctx.moveTo(0, -10);
                }
                else {
                    ctx.moveTo(0, 10);
                }
                if (this._options.rod) {
                    const radius = size - imgSize / 2;
                    const { nx, ny } = this._calcCenterPoint(r, radius, x, y);
                    ctx.lineTo(nx, -ny);
                    ctx.stroke();
                }
                ctx.restore();
            };
            /**
             * @private
             * run the widget in animation frame
             */
            this._run = () => {
                let originRotate = this._options.rotate;
                originRotate = Math.min(120, Math.max(0, originRotate));
                const cut = this._options.threshold;
                if (!this._running) {
                    return;
                }
                let { r, y, t, w } = this._state;
                const { d, i } = this._state;
                const thisRunUnix = Date.now();
                let _inertia = i;
                // ignore if frame diff is above 16ms (60fps)
                const lastRunUnixDiff = thisRunUnix - this._lastRunUnix;
                if (lastRunUnixDiff < 16) {
                    _inertia = (i / this._frameUnix) * lastRunUnixDiff;
                }
                this._lastRunUnix = thisRunUnix;
                w = w - r * 2 - originRotate;
                r = r + w * _inertia * 1.2;
                this._state.w = w * d;
                this._state.r = r;
                t = t - y * 2;
                y = y + t * _inertia * 2;
                this._state.t = t * d;
                this._state.y = y;
                // stop if motion is too little
                if (Math.max(Math.abs(this._state.w), Math.abs(this._state.r), Math.abs(this._state.t), Math.abs(this._state.y)) < cut) {
                    this._running = false;
                    return;
                }
                this._draw();
                requestAnimationFrame(this._run);
            };
            /**
             * @private
             * manually move the widget
             */
            this._move = (x, y) => {
                const { maxR, maxY, minY } = this._limit;
                let r = x * this._state.s;
                r = Math.max(-maxR, r);
                r = Math.min(maxR, r);
                y = y * this._state.s * 2;
                y = Math.max(minY, y);
                y = Math.min(maxY, y);
                this._state.r = r;
                this._state.y = y;
                this._state.w = 0;
                this._state.t = 0;
                this._draw();
            };
            /**
             * @private
             * handle mouse down event
             */
            this._onMouseDown = (e) => {
                e.preventDefault();
                this._running = false;
                const { pageY } = e;
                const _downPageY = pageY;
                this._state.w = 0;
                this._state.t = 0;
                const onMouseMove = (e) => {
                    const rect = this._domMain.getBoundingClientRect();
                    const leftCenter = rect.left + rect.width / 2;
                    const { pageX, pageY } = e;
                    const x = pageX - leftCenter;
                    const y = pageY - _downPageY;
                    this._move(x, y);
                };
                const onMouseUp = () => {
                    document.removeEventListener('mousemove', onMouseMove);
                    document.removeEventListener('mouseup', onMouseUp);
                    this._running = true;
                    requestAnimationFrame(this._run);
                };
                document.addEventListener('mousemove', onMouseMove);
                document.addEventListener('mouseup', onMouseUp);
            };
            /**
             * @private
             * handle touch start event
             */
            this._onTouchStart = (e) => {
                e.preventDefault();
                this._running = false;
                if (!e.touches[0]) {
                    return;
                }
                const { pageY } = e.touches[0];
                const _downPageY = pageY;
                this._state.w = 0;
                this._state.t = 0;
                const onTouchMove = (e) => {
                    if (!e.touches[0]) {
                        return;
                    }
                    const rect = this._domMain.getBoundingClientRect();
                    const leftCenter = rect.left + rect.width / 2;
                    const { pageX, pageY } = e.touches[0];
                    const x = pageX - leftCenter;
                    const y = pageY - _downPageY;
                    this._move(x, y);
                };
                const onTouchEnd = () => {
                    document.removeEventListener('touchmove', onTouchMove);
                    document.removeEventListener('touchend', onTouchEnd);
                    this._running = true;
                    requestAnimationFrame(this._run);
                };
                document.addEventListener('touchmove', onTouchMove);
                document.addEventListener('touchend', onTouchEnd);
            };
            /**
             * @private
             * do a force on widget (for auto mode)
             */
            this._magicForce = () => {
                // 0.1 probability to randomly switch character
                if (Math.random() < 0.1) {
                    const available = Object.keys(_characters);
                    const index = Math.floor(Math.random() * available.length);
                    const _char = available[index];
                    this.setCharacter(_char);
                }
                else {
                    // add random velocities in the vertical and horizontal directions
                    this._state.t = this._state.t + (Math.random() - 0.5) * 150;
                    this._state.w = this._state.w + (Math.random() - 0.5) * 200;
                }
                if (!this._running) {
                    this._running = true;
                    requestAnimationFrame(this._run);
                }
                // set a variable delay between applying magic powers
                this._magicForceTimeout = window.setTimeout(this._magicForce, Math.random() * 3000 + 2000);
            };
            /**
             * @public
             * switch the auto mode
             */
            this.triggetAutoMode = () => {
                this._magicForceEnabled = !this._magicForceEnabled;
                // toggle icon rotate
                const icon = this._domCtrlMagic.querySelector('svg');
                if (this._magicForceEnabled) {
                    icon.classList.add('sakana-widget-icon--rotate');
                }
                else {
                    icon.classList.remove('sakana-widget-icon--rotate');
                }
                // clear the timer or start a timer
                clearTimeout(this._magicForceTimeout);
                if (this._magicForceEnabled) {
                    this._magicForceTimeout = window.setTimeout(this._magicForce, Math.random() * 1000 + 500);
                }
            };
            /**
             * @public
             * set current state of widget
             */
            this.setState = (state) => {
                if (!this._state) {
                    this._state = {};
                }
                this._state = mergeDeep(this._state, cloneDeep(state));
                return this;
            };
            /**
             * @public
             * set current character of widget
             */
            this.setCharacter = (name) => {
                const targetChar = _characters[name];
                if (!targetChar) {
                    throw new Error(`invalid character ${name}`);
                }
                this._char = name;
                this._image = targetChar.image;
                this.setState(targetChar.initialState);
                // refresh the widget image
                if (this._domImage) {
                    this._domImage.style.backgroundImage = `url('${this._image}')`;
                }
                return this;
            };
            /**
             * @public
             * set to next character of widget
             */
            this.nextCharacter = () => {
                const _chars = Object.keys(SakanaWidget.getCharacters()).sort();
                const curCharIdx = _chars.indexOf(this._char);
                const nextCharIdx = (curCharIdx + 1) % _chars.length;
                const nextChar = _chars[nextCharIdx];
                this.setCharacter(nextChar);
                return this;
            };
            /**
             * @private
             * handle widget resize
             */
            this._onResize = (rect) => {
                let newSize = Math.min(rect.width, rect.height);
                newSize = Math.max(120, newSize); // at least 120
                this._updateSize(newSize);
                this._updateLimit(newSize);
            };
            /**
             * @public
             * mount the widget
             */
            this.mount = (el) => {
                // pre check
                let _el;
                if (typeof el === 'string') {
                    _el = document.querySelector(el);
                }
                else {
                    _el = el;
                }
                if (!_el) {
                    throw new Error('Invalid mounting element');
                }
                const parent = _el.parentNode;
                if (!parent) {
                    throw new Error('Invalid mounting element parent');
                }
                // append event listeners
                if (this._options.draggable) {
                    this._domImage.addEventListener('mousedown', this._onMouseDown);
                    this._domImage.addEventListener('touchstart', this._onTouchStart);
                }
                this._domCtrlPerson.addEventListener('click', this.nextCharacter);
                this._domCtrlMagic.addEventListener('click', this.triggetAutoMode);
                this._domCtrlClose.addEventListener('click', this.unmount);
                // if auto fit mode
                if (this._options.autoFit) {
                    // initial resize
                    this._onResize(this._domWrapper.getBoundingClientRect());
                    // handle furture resize
                    this._resizeObserver = new ResizeObserver(throttle((entries) => {
                        if (!entries || !entries[0])
                            return;
                        this._onResize(entries[0].contentRect);
                    }));
                    this._resizeObserver.observe(this._domWrapper);
                }
                // mount node
                const _newEl = _el.cloneNode(false);
                _newEl.appendChild(this._domWrapper);
                parent.replaceChild(_newEl, _el);
                requestAnimationFrame(this._run);
                return this;
            };
            /**
             * @public
             * unmount the widget
             */
            this.unmount = () => {
                // remove event listeners
                this._domImage.removeEventListener('mousedown', this._onMouseDown);
                this._domImage.removeEventListener('touchstart', this._onTouchStart);
                this._domCtrlPerson.removeEventListener('click', this.nextCharacter);
                this._domCtrlMagic.removeEventListener('click', this.triggetAutoMode);
                this._domCtrlClose.removeEventListener('click', this.unmount);
                // if auto fit mode
                this._resizeObserver && this._resizeObserver.disconnect();
                // unmount node
                const _el = this._domWrapper.parentNode;
                if (!_el) {
                    throw new Error('Invalid mounting element');
                }
                _el.removeChild(this._domWrapper);
                return this;
            };
            if (_characters == null) {
                _initCharacters();
            }
            this._options = cloneDeep(defaultOptions);
            this._options = mergeDeep(this._options, options);
            // init default character
            this.setCharacter(this._options.character);
            // init dom
            this._updateDom();
            this._updateSize(this._options.size);
            this._updateLimit(this._options.size);
        }
    }
    /**
     * @public
     * @static
     * get data of a registered character
     */
    SakanaWidget.getCharacter = (name) => {
        if (_characters == null) {
            _initCharacters();
        }
        const _char = _characters[name];
        return _char ? cloneDeep(_char) : null;
    };
    /**
     * @public
     * @static
     * get all registered character
     */
    SakanaWidget.getCharacters = () => {
        if (_characters == null) {
            _initCharacters();
        }
        return cloneDeep(_characters);
    };
    /**
     * @public
     * @static
     * registered a new character
     */
    SakanaWidget.registerCharacter = (name, character) => {
        const _char = cloneDeep(character);
        // validate inertia
        let inertia = _char.initialState.i;
        inertia = Math.min(0.5, Math.max(0, inertia));
        _char.initialState.i = inertia;
        // register character
        _characters[name] = _char;
    };

    var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

    var css = "/* purgecss start ignore */\n\n.sakana-widget *,\r\n.sakana-widget *::before,\r\n.sakana-widget *::after {\n  box-sizing: border-box;\n}\n\n.sakana-widget-wrapper {\n  pointer-events: none;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.sakana-widget-app {\n  pointer-events: none;\n  position: relative;\n}\n\n.sakana-widget-canvas {\n  z-index: 10;\n  pointer-events: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.sakana-widget-main {\n  z-index: 20;\n  pointer-events: none;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.sakana-widget-img {\n  z-index: 40;\n  cursor: move;\n  pointer-events: auto;\n  position: relative;\n  background: no-repeat 50% 50%;\n  background-size: cover;\n}\n\n.sakana-widget-ctrl {\n  z-index: 30;\n  cursor: pointer;\n  pointer-events: auto;\n  position: relative;\n  height: 24px;\n  width: 112px;\n  display: flex;\n  border-radius: 6px;\n  background-color: #ddd;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n}\n\n.sakana-widget-ctrl-item {\n  height: 24px;\n  width: 28px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #555;\n  background-color: transparent;\n}\n\n.sakana-widget-ctrl-item:hover {\n  color: #555;\n  background-color: rgba(255, 255, 255, 0.25);\n}\n\n.sakana-widget-icon {\n  height: 18px;\n  width: 18px;\n}\n\n.sakana-widget-icon--rotate {\n  animation: sakana-widget-spin 2s linear infinite;\n}\n\n@keyframes sakana-widget-spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* purgecss end ignore */";
    n(css,{});

    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.left = "60px";
    container.style.bottom = "0px";
    document.body.appendChild(container);
    new SakanaWidget().setState({ r: 1, y: 1, t: 0, w: 0 }).mount(container);

}));
//# sourceMappingURL=main-03bc3281.js.map
