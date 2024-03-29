definePlugin('@plugins/com.msgbyte.sentry/lazy-47f7831e.js', ['@capital/common'], (function (common) { 'use strict';

  // eslint-disable-next-line @typescript-eslint/unbound-method
  const objectToString = Object.prototype.toString;

  /**
   * Checks whether given value's type is one of a few Error or Error-like
   * {@link isError}.
   *
   * @param wat A value to be checked.
   * @returns A boolean representing the result.
   */
  function isError(wat) {
    switch (objectToString.call(wat)) {
      case '[object Error]':
      case '[object Exception]':
      case '[object DOMException]':
        return true;
      default:
        return isInstanceOf(wat, Error);
    }
  }
  /**
   * Checks whether given value is an instance of the given built-in class.
   *
   * @param wat The value to be checked
   * @param className
   * @returns A boolean representing the result.
   */
  function isBuiltin(wat, className) {
    return objectToString.call(wat) === `[object ${className}]`;
  }

  /**
   * Checks whether given value's type is ErrorEvent
   * {@link isErrorEvent}.
   *
   * @param wat A value to be checked.
   * @returns A boolean representing the result.
   */
  function isErrorEvent$1(wat) {
    return isBuiltin(wat, 'ErrorEvent');
  }

  /**
   * Checks whether given value's type is DOMError
   * {@link isDOMError}.
   *
   * @param wat A value to be checked.
   * @returns A boolean representing the result.
   */
  function isDOMError(wat) {
    return isBuiltin(wat, 'DOMError');
  }

  /**
   * Checks whether given value's type is DOMException
   * {@link isDOMException}.
   *
   * @param wat A value to be checked.
   * @returns A boolean representing the result.
   */
  function isDOMException(wat) {
    return isBuiltin(wat, 'DOMException');
  }

  /**
   * Checks whether given value's type is a string
   * {@link isString}.
   *
   * @param wat A value to be checked.
   * @returns A boolean representing the result.
   */
  function isString(wat) {
    return isBuiltin(wat, 'String');
  }

  /**
   * Checks whether given value is a primitive (undefined, null, number, boolean, string, bigint, symbol)
   * {@link isPrimitive}.
   *
   * @param wat A value to be checked.
   * @returns A boolean representing the result.
   */
  function isPrimitive(wat) {
    return wat === null || (typeof wat !== 'object' && typeof wat !== 'function');
  }

  /**
   * Checks whether given value's type is an object literal
   * {@link isPlainObject}.
   *
   * @param wat A value to be checked.
   * @returns A boolean representing the result.
   */
  function isPlainObject(wat) {
    return isBuiltin(wat, 'Object');
  }

  /**
   * Checks whether given value's type is an Event instance
   * {@link isEvent}.
   *
   * @param wat A value to be checked.
   * @returns A boolean representing the result.
   */
  function isEvent(wat) {
    return typeof Event !== 'undefined' && isInstanceOf(wat, Event);
  }

  /**
   * Checks whether given value's type is an Element instance
   * {@link isElement}.
   *
   * @param wat A value to be checked.
   * @returns A boolean representing the result.
   */
  function isElement$1(wat) {
    return typeof Element !== 'undefined' && isInstanceOf(wat, Element);
  }

  /**
   * Checks whether given value's type is an regexp
   * {@link isRegExp}.
   *
   * @param wat A value to be checked.
   * @returns A boolean representing the result.
   */
  function isRegExp(wat) {
    return isBuiltin(wat, 'RegExp');
  }

  /**
   * Checks whether given value has a then function.
   * @param wat A value to be checked.
   */
  function isThenable(wat) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return Boolean(wat && wat.then && typeof wat.then === 'function');
  }

  /**
   * Checks whether given value's type is a SyntheticEvent
   * {@link isSyntheticEvent}.
   *
   * @param wat A value to be checked.
   * @returns A boolean representing the result.
   */
  function isSyntheticEvent(wat) {
    return isPlainObject(wat) && 'nativeEvent' in wat && 'preventDefault' in wat && 'stopPropagation' in wat;
  }

  /**
   * Checks whether given value is NaN
   * {@link isNaN}.
   *
   * @param wat A value to be checked.
   * @returns A boolean representing the result.
   */
  function isNaN$1(wat) {
    return typeof wat === 'number' && wat !== wat;
  }

  /**
   * Checks whether given value's type is an instance of provided constructor.
   * {@link isInstanceOf}.
   *
   * @param wat A value to be checked.
   * @param base A constructor to be used in a check.
   * @returns A boolean representing the result.
   */
  function isInstanceOf(wat, base) {
    try {
      return wat instanceof base;
    } catch (_e) {
      return false;
    }
  }

  /** Internal global with common properties and Sentry extensions  */

  // The code below for 'isGlobalObj' and 'GLOBAL_OBJ' was copied from core-js before modification
  // https://github.com/zloirock/core-js/blob/1b944df55282cdc99c90db5f49eb0b6eda2cc0a3/packages/core-js/internals/global.js
  // core-js has the following licence:
  //
  // Copyright (c) 2014-2022 Denis Pushkarev
  //
  // Permission is hereby granted, free of charge, to any person obtaining a copy
  // of this software and associated documentation files (the "Software"), to deal
  // in the Software without restriction, including without limitation the rights
  // to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  // copies of the Software, and to permit persons to whom the Software is
  // furnished to do so, subject to the following conditions:
  //
  // The above copyright notice and this permission notice shall be included in
  // all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  // AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  // LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  // OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  // THE SOFTWARE.

  /** Returns 'obj' if it's the global object, otherwise returns undefined */
  function isGlobalObj(obj) {
    return obj && obj.Math == Math ? obj : undefined;
  }

  /** Get's the global object for the current JavaScript runtime */
  const GLOBAL_OBJ =
    (typeof globalThis == 'object' && isGlobalObj(globalThis)) ||
    // eslint-disable-next-line no-restricted-globals
    (typeof window == 'object' && isGlobalObj(window)) ||
    (typeof self == 'object' && isGlobalObj(self)) ||
    (typeof global == 'object' && isGlobalObj(global)) ||
    (function () {
      return this;
    })() ||
    {};

  /**
   * @deprecated Use GLOBAL_OBJ instead or WINDOW from @sentry/browser. This will be removed in v8
   */
  function getGlobalObject() {
    return GLOBAL_OBJ ;
  }

  /**
   * Returns a global singleton contained in the global `__SENTRY__` object.
   *
   * If the singleton doesn't already exist in `__SENTRY__`, it will be created using the given factory
   * function and added to the `__SENTRY__` object.
   *
   * @param name name of the global singleton on __SENTRY__
   * @param creator creator Factory function to create the singleton if it doesn't already exist on `__SENTRY__`
   * @param obj (Optional) The global object on which to look for `__SENTRY__`, if not `GLOBAL_OBJ`'s return value
   * @returns the singleton
   */
  function getGlobalSingleton(name, creator, obj) {
    const gbl = (obj || GLOBAL_OBJ) ;
    const __SENTRY__ = (gbl.__SENTRY__ = gbl.__SENTRY__ || {});
    const singleton = __SENTRY__[name] || (__SENTRY__[name] = creator());
    return singleton;
  }

  // eslint-disable-next-line deprecation/deprecation
  const WINDOW$6 = getGlobalObject();

  const DEFAULT_MAX_STRING_LENGTH = 80;

  /**
   * Given a child DOM element, returns a query-selector statement describing that
   * and its ancestors
   * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
   * @returns generated DOM path
   */
  function htmlTreeAsString(
    elem,
    options = {},
  ) {

    // try/catch both:
    // - accessing event.target (see getsentry/raven-js#838, #768)
    // - `htmlTreeAsString` because it's complex, and just accessing the DOM incorrectly
    // - can throw an exception in some circumstances.
    try {
      let currentElem = elem ;
      const MAX_TRAVERSE_HEIGHT = 5;
      const out = [];
      let height = 0;
      let len = 0;
      const separator = ' > ';
      const sepLength = separator.length;
      let nextStr;
      const keyAttrs = Array.isArray(options) ? options : options.keyAttrs;
      const maxStringLength = (!Array.isArray(options) && options.maxStringLength) || DEFAULT_MAX_STRING_LENGTH;

      while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
        nextStr = _htmlElementAsString(currentElem, keyAttrs);
        // bail out if
        // - nextStr is the 'html' element
        // - the length of the string that would be created exceeds maxStringLength
        //   (ignore this limit if we are on the first iteration)
        if (nextStr === 'html' || (height > 1 && len + out.length * sepLength + nextStr.length >= maxStringLength)) {
          break;
        }

        out.push(nextStr);

        len += nextStr.length;
        currentElem = currentElem.parentNode;
      }

      return out.reverse().join(separator);
    } catch (_oO) {
      return '<unknown>';
    }
  }

  /**
   * Returns a simple, query-selector representation of a DOM element
   * e.g. [HTMLElement] => input#foo.btn[name=baz]
   * @returns generated DOM path
   */
  function _htmlElementAsString(el, keyAttrs) {
    const elem = el

  ;

    const out = [];
    let className;
    let classes;
    let key;
    let attr;
    let i;

    if (!elem || !elem.tagName) {
      return '';
    }

    out.push(elem.tagName.toLowerCase());

    // Pairs of attribute keys defined in `serializeAttribute` and their values on element.
    const keyAttrPairs =
      keyAttrs && keyAttrs.length
        ? keyAttrs.filter(keyAttr => elem.getAttribute(keyAttr)).map(keyAttr => [keyAttr, elem.getAttribute(keyAttr)])
        : null;

    if (keyAttrPairs && keyAttrPairs.length) {
      keyAttrPairs.forEach(keyAttrPair => {
        out.push(`[${keyAttrPair[0]}="${keyAttrPair[1]}"]`);
      });
    } else {
      if (elem.id) {
        out.push(`#${elem.id}`);
      }

      // eslint-disable-next-line prefer-const
      className = elem.className;
      if (className && isString(className)) {
        classes = className.split(/\s+/);
        for (i = 0; i < classes.length; i++) {
          out.push(`.${classes[i]}`);
        }
      }
    }
    const allowedAttrs = ['aria-label', 'type', 'name', 'title', 'alt'];
    for (i = 0; i < allowedAttrs.length; i++) {
      key = allowedAttrs[i];
      attr = elem.getAttribute(key);
      if (attr) {
        out.push(`[${key}="${attr}"]`);
      }
    }
    return out.join('');
  }

  /**
   * A safe form of location.href
   */
  function getLocationHref() {
    try {
      return WINDOW$6.document.location.href;
    } catch (oO) {
      return '';
    }
  }

  /**
   * Gets a DOM element by using document.querySelector.
   *
   * This wrapper will first check for the existance of the function before
   * actually calling it so that we don't have to take care of this check,
   * every time we want to access the DOM.
   *
   * Reason: DOM/querySelector is not available in all environments.
   *
   * We have to cast to any because utils can be consumed by a variety of environments,
   * and we don't want to break TS users. If you know what element will be selected by
   * `document.querySelector`, specify it as part of the generic call. For example,
   * `const element = getDomElement<Element>('selector');`
   *
   * @param selector the selector string passed on to document.querySelector
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function getDomElement(selector) {
    if (WINDOW$6.document && WINDOW$6.document.querySelector) {
      return WINDOW$6.document.querySelector(selector) ;
    }
    return null;
  }

  /** An error emitted by Sentry SDKs and related utilities. */
  class SentryError extends Error {
    /** Display name of this error instance. */

     constructor( message, logLevel = 'warn') {
      super(message);this.message = message;
      this.name = new.target.prototype.constructor.name;
      // This sets the prototype to be `Error`, not `SentryError`. It's unclear why we do this, but commenting this line
      // out causes various (seemingly totally unrelated) playwright tests consistently time out. FYI, this makes
      // instances of `SentryError` fail `obj instanceof SentryError` checks.
      Object.setPrototypeOf(this, new.target.prototype);
      this.logLevel = logLevel;
    }
  }

  /** Regular expression used to parse a Dsn. */
  const DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

  function isValidProtocol(protocol) {
    return protocol === 'http' || protocol === 'https';
  }

  /**
   * Renders the string representation of this Dsn.
   *
   * By default, this will render the public representation without the password
   * component. To get the deprecated private representation, set `withPassword`
   * to true.
   *
   * @param withPassword When set to true, the password will be included.
   */
  function dsnToString(dsn, withPassword = false) {
    const { host, path, pass, port, projectId, protocol, publicKey } = dsn;
    return (
      `${protocol}://${publicKey}${withPassword && pass ? `:${pass}` : ''}` +
      `@${host}${port ? `:${port}` : ''}/${path ? `${path}/` : path}${projectId}`
    );
  }

  /**
   * Parses a Dsn from a given string.
   *
   * @param str A Dsn as string
   * @returns Dsn as DsnComponents
   */
  function dsnFromString(str) {
    const match = DSN_REGEX.exec(str);

    if (!match) {
      throw new SentryError(`Invalid Sentry Dsn: ${str}`);
    }

    const [protocol, publicKey, pass = '', host, port = '', lastPath] = match.slice(1);
    let path = '';
    let projectId = lastPath;

    const split = projectId.split('/');
    if (split.length > 1) {
      path = split.slice(0, -1).join('/');
      projectId = split.pop() ;
    }

    if (projectId) {
      const projectMatch = projectId.match(/^\d+/);
      if (projectMatch) {
        projectId = projectMatch[0];
      }
    }

    return dsnFromComponents({ host, pass, path, projectId, port, protocol: protocol , publicKey });
  }

  function dsnFromComponents(components) {
    return {
      protocol: components.protocol,
      publicKey: components.publicKey || '',
      pass: components.pass || '',
      host: components.host,
      port: components.port || '',
      path: components.path || '',
      projectId: components.projectId,
    };
  }

  function validateDsn(dsn) {
    if (!(typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__)) {
      return;
    }

    const { port, projectId, protocol } = dsn;

    const requiredComponents = ['protocol', 'publicKey', 'host', 'projectId'];
    requiredComponents.forEach(component => {
      if (!dsn[component]) {
        throw new SentryError(`Invalid Sentry Dsn: ${component} missing`);
      }
    });

    if (!projectId.match(/^\d+$/)) {
      throw new SentryError(`Invalid Sentry Dsn: Invalid projectId ${projectId}`);
    }

    if (!isValidProtocol(protocol)) {
      throw new SentryError(`Invalid Sentry Dsn: Invalid protocol ${protocol}`);
    }

    if (port && isNaN(parseInt(port, 10))) {
      throw new SentryError(`Invalid Sentry Dsn: Invalid port ${port}`);
    }

    return true;
  }

  /** The Sentry Dsn, identifying a Sentry instance and project. */
  function makeDsn(from) {
    const components = typeof from === 'string' ? dsnFromString(from) : dsnFromComponents(from);
    validateDsn(components);
    return components;
  }

  /** Prefix for logging strings */
  const PREFIX = 'Sentry Logger ';

  const CONSOLE_LEVELS = ['debug', 'info', 'warn', 'error', 'log', 'assert', 'trace'] ;

  /**
   * Temporarily disable sentry console instrumentations.
   *
   * @param callback The function to run against the original `console` messages
   * @returns The results of the callback
   */
  function consoleSandbox(callback) {
    if (!('console' in GLOBAL_OBJ)) {
      return callback();
    }

    const originalConsole = GLOBAL_OBJ.console ;
    const wrappedLevels = {};

    // Restore all wrapped console methods
    CONSOLE_LEVELS.forEach(level => {
      // TODO(v7): Remove this check as it's only needed for Node 6
      const originalWrappedFunc =
        originalConsole[level] && (originalConsole[level] ).__sentry_original__;
      if (level in originalConsole && originalWrappedFunc) {
        wrappedLevels[level] = originalConsole[level] ;
        originalConsole[level] = originalWrappedFunc ;
      }
    });

    try {
      return callback();
    } finally {
      // Revert restoration to wrapped state
      Object.keys(wrappedLevels).forEach(level => {
        originalConsole[level] = wrappedLevels[level ];
      });
    }
  }

  function makeLogger() {
    let enabled = false;
    const logger = {
      enable: () => {
        enabled = true;
      },
      disable: () => {
        enabled = false;
      },
    };

    if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__)) {
      CONSOLE_LEVELS.forEach(name => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        logger[name] = (...args) => {
          if (enabled) {
            consoleSandbox(() => {
              GLOBAL_OBJ.console[name](`${PREFIX}[${name}]:`, ...args);
            });
          }
        };
      });
    } else {
      CONSOLE_LEVELS.forEach(name => {
        logger[name] = () => undefined;
      });
    }

    return logger ;
  }

  // Ensure we only have a single logger instance, even if multiple versions of @sentry/utils are being used
  let logger;
  if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__)) {
    logger = getGlobalSingleton('logger', makeLogger);
  } else {
    logger = makeLogger();
  }

  /**
   * Truncates given string to the maximum characters count
   *
   * @param str An object that contains serializable values
   * @param max Maximum number of characters in truncated string (0 = unlimited)
   * @returns string Encoded
   */
  function truncate(str, max = 0) {
    if (typeof str !== 'string' || max === 0) {
      return str;
    }
    return str.length <= max ? str : `${str.slice(0, max)}...`;
  }

  /**
   * Join values in array
   * @param input array of values to be joined together
   * @param delimiter string to be placed in-between values
   * @returns Joined values
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function safeJoin(input, delimiter) {
    if (!Array.isArray(input)) {
      return '';
    }

    const output = [];
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < input.length; i++) {
      const value = input[i];
      try {
        output.push(String(value));
      } catch (e) {
        output.push('[value cannot be serialized]');
      }
    }

    return output.join(delimiter);
  }

  /**
   * Checks if the given value matches a regex or string
   *
   * @param value The string to test
   * @param pattern Either a regex or a string against which `value` will be matched
   * @param requireExactStringMatch If true, `value` must match `pattern` exactly. If false, `value` will match
   * `pattern` if it contains `pattern`. Only applies to string-type patterns.
   */
  function isMatchingPattern(
    value,
    pattern,
    requireExactStringMatch = false,
  ) {
    if (!isString(value)) {
      return false;
    }

    if (isRegExp(pattern)) {
      return pattern.test(value);
    }
    if (isString(pattern)) {
      return requireExactStringMatch ? value === pattern : value.includes(pattern);
    }

    return false;
  }

  /**
   * Test the given string against an array of strings and regexes. By default, string matching is done on a
   * substring-inclusion basis rather than a strict equality basis
   *
   * @param testString The string to test
   * @param patterns The patterns against which to test the string
   * @param requireExactStringMatch If true, `testString` must match one of the given string patterns exactly in order to
   * count. If false, `testString` will match a string pattern if it contains that pattern.
   * @returns
   */
  function stringMatchesSomePattern(
    testString,
    patterns = [],
    requireExactStringMatch = false,
  ) {
    return patterns.some(pattern => isMatchingPattern(testString, pattern, requireExactStringMatch));
  }

  /**
   * Replace a method in an object with a wrapped version of itself.
   *
   * @param source An object that contains a method to be wrapped.
   * @param name The name of the method to be wrapped.
   * @param replacementFactory A higher-order function that takes the original version of the given method and returns a
   * wrapped version. Note: The function returned by `replacementFactory` needs to be a non-arrow function, in order to
   * preserve the correct value of `this`, and the original method must be called using `origMethod.call(this, <other
   * args>)` or `origMethod.apply(this, [<other args>])` (rather than being called directly), again to preserve `this`.
   * @returns void
   */
  function fill(source, name, replacementFactory) {
    if (!(name in source)) {
      return;
    }

    const original = source[name] ;
    const wrapped = replacementFactory(original) ;

    // Make sure it's a function first, as we need to attach an empty prototype for `defineProperties` to work
    // otherwise it'll throw "TypeError: Object.defineProperties called on non-object"
    if (typeof wrapped === 'function') {
      try {
        markFunctionWrapped(wrapped, original);
      } catch (_Oo) {
        // This can throw if multiple fill happens on a global object like XMLHttpRequest
        // Fixes https://github.com/getsentry/sentry-javascript/issues/2043
      }
    }

    source[name] = wrapped;
  }

  /**
   * Defines a non-enumerable property on the given object.
   *
   * @param obj The object on which to set the property
   * @param name The name of the property to be set
   * @param value The value to which to set the property
   */
  function addNonEnumerableProperty(obj, name, value) {
    Object.defineProperty(obj, name, {
      // enumerable: false, // the default, so we can save on bundle size by not explicitly setting it
      value: value,
      writable: true,
      configurable: true,
    });
  }

  /**
   * Remembers the original function on the wrapped function and
   * patches up the prototype.
   *
   * @param wrapped the wrapper function
   * @param original the original function that gets wrapped
   */
  function markFunctionWrapped(wrapped, original) {
    const proto = original.prototype || {};
    wrapped.prototype = original.prototype = proto;
    addNonEnumerableProperty(wrapped, '__sentry_original__', original);
  }

  /**
   * This extracts the original function if available.  See
   * `markFunctionWrapped` for more information.
   *
   * @param func the function to unwrap
   * @returns the unwrapped version of the function if available.
   */
  function getOriginalFunction(func) {
    return func.__sentry_original__;
  }

  /**
   * Encodes given object into url-friendly format
   *
   * @param object An object that contains serializable values
   * @returns string Encoded
   */
  function urlEncode(object) {
    return Object.keys(object)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`)
      .join('&');
  }

  /**
   * Transforms any `Error` or `Event` into a plain object with all of their enumerable properties, and some of their
   * non-enumerable properties attached.
   *
   * @param value Initial source that we have to transform in order for it to be usable by the serializer
   * @returns An Event or Error turned into an object - or the value argurment itself, when value is neither an Event nor
   *  an Error.
   */
  function convertToPlainObject(value)

   {
    if (isError(value)) {
      return {
        message: value.message,
        name: value.name,
        stack: value.stack,
        ...getOwnProperties(value),
      };
    } else if (isEvent(value)) {
      const newObj

   = {
        type: value.type,
        target: serializeEventTarget(value.target),
        currentTarget: serializeEventTarget(value.currentTarget),
        ...getOwnProperties(value),
      };

      if (typeof CustomEvent !== 'undefined' && isInstanceOf(value, CustomEvent)) {
        newObj.detail = value.detail;
      }

      return newObj;
    } else {
      return value;
    }
  }

  /** Creates a string representation of the target of an `Event` object */
  function serializeEventTarget(target) {
    try {
      return isElement$1(target) ? htmlTreeAsString(target) : Object.prototype.toString.call(target);
    } catch (_oO) {
      return '<unknown>';
    }
  }

  /** Filters out all but an object's own properties */
  function getOwnProperties(obj) {
    if (typeof obj === 'object' && obj !== null) {
      const extractedProps = {};
      for (const property in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, property)) {
          extractedProps[property] = (obj )[property];
        }
      }
      return extractedProps;
    } else {
      return {};
    }
  }

  /**
   * Given any captured exception, extract its keys and create a sorted
   * and truncated list that will be used inside the event message.
   * eg. `Non-error exception captured with keys: foo, bar, baz`
   */
  function extractExceptionKeysForMessage(exception, maxLength = 40) {
    const keys = Object.keys(convertToPlainObject(exception));
    keys.sort();

    if (!keys.length) {
      return '[object has no keys]';
    }

    if (keys[0].length >= maxLength) {
      return truncate(keys[0], maxLength);
    }

    for (let includedKeys = keys.length; includedKeys > 0; includedKeys--) {
      const serialized = keys.slice(0, includedKeys).join(', ');
      if (serialized.length > maxLength) {
        continue;
      }
      if (includedKeys === keys.length) {
        return serialized;
      }
      return truncate(serialized, maxLength);
    }

    return '';
  }

  /**
   * Given any object, return a new object having removed all fields whose value was `undefined`.
   * Works recursively on objects and arrays.
   *
   * Attention: This function keeps circular references in the returned object.
   */
  function dropUndefinedKeys(inputValue) {
    // This map keeps track of what already visited nodes map to.
    // Our Set - based memoBuilder doesn't work here because we want to the output object to have the same circular
    // references as the input object.
    const memoizationMap = new Map();

    // This function just proxies `_dropUndefinedKeys` to keep the `memoBuilder` out of this function's API
    return _dropUndefinedKeys(inputValue, memoizationMap);
  }

  function _dropUndefinedKeys(inputValue, memoizationMap) {
    if (isPlainObject(inputValue)) {
      // If this node has already been visited due to a circular reference, return the object it was mapped to in the new object
      const memoVal = memoizationMap.get(inputValue);
      if (memoVal !== undefined) {
        return memoVal ;
      }

      const returnValue = {};
      // Store the mapping of this value in case we visit it again, in case of circular data
      memoizationMap.set(inputValue, returnValue);

      for (const key of Object.keys(inputValue)) {
        if (typeof inputValue[key] !== 'undefined') {
          returnValue[key] = _dropUndefinedKeys(inputValue[key], memoizationMap);
        }
      }

      return returnValue ;
    }

    if (Array.isArray(inputValue)) {
      // If this node has already been visited due to a circular reference, return the array it was mapped to in the new object
      const memoVal = memoizationMap.get(inputValue);
      if (memoVal !== undefined) {
        return memoVal ;
      }

      const returnValue = [];
      // Store the mapping of this value in case we visit it again, in case of circular data
      memoizationMap.set(inputValue, returnValue);

      inputValue.forEach((item) => {
        returnValue.push(_dropUndefinedKeys(item, memoizationMap));
      });

      return returnValue ;
    }

    return inputValue;
  }

  const STACKTRACE_LIMIT = 50;

  const debugIdParserCache = new Map();

  /**
   * Creates a stack parser with the supplied line parsers
   *
   * StackFrames are returned in the correct order for Sentry Exception
   * frames and with Sentry SDK internal frames removed from the top and bottom
   *
   */
  function createStackParser(...parsers) {
    const sortedParsers = parsers.sort((a, b) => a[0] - b[0]).map(p => p[1]);

    return (stack, skipFirst = 0) => {
      const frames = [];

      for (const parser of sortedParsers) {
        let debugIdCache = debugIdParserCache.get(parser);
        if (!debugIdCache) {
          debugIdCache = new Map();
          debugIdParserCache.set(parser, debugIdCache);
        }

        const debugIdMap = GLOBAL_OBJ._sentryDebugIds;

        if (debugIdMap) {
          Object.keys(debugIdMap).forEach(debugIdStackTrace => {
            debugIdStackTrace.split('\n').forEach(line => {
              const frame = parser(line);
              if (frame && frame.filename) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                debugIdCache.set(frame.filename, debugIdMap[debugIdStackTrace]);
              }
            });
          });
        }
      }

      for (const line of stack.split('\n').slice(skipFirst)) {
        // Ignore lines over 1kb as they are unlikely to be stack frames.
        // Many of the regular expressions use backtracking which results in run time that increases exponentially with
        // input size. Huge strings can result in hangs/Denial of Service:
        // https://github.com/getsentry/sentry-javascript/issues/2286
        if (line.length > 1024) {
          continue;
        }

        // https://github.com/getsentry/sentry-javascript/issues/5459
        // Remove webpack (error: *) wrappers
        const cleanedLine = line.replace(/\(error: (.*)\)/, '$1');

        for (const parser of sortedParsers) {
          const frame = parser(cleanedLine);

          if (frame) {
            const debugIdCache = debugIdParserCache.get(parser);
            if (debugIdCache && frame.filename) {
              const cachedDebugId = debugIdCache.get(frame.filename);
              if (cachedDebugId) {
                frame.debug_id = cachedDebugId;
              }
            }

            frames.push(frame);
            break;
          }
        }
      }

      return stripSentryFramesAndReverse(frames);
    };
  }

  /**
   * Gets a stack parser implementation from Options.stackParser
   * @see Options
   *
   * If options contains an array of line parsers, it is converted into a parser
   */
  function stackParserFromStackParserOptions(stackParser) {
    if (Array.isArray(stackParser)) {
      return createStackParser(...stackParser);
    }
    return stackParser;
  }

  /**
   * @hidden
   */
  function stripSentryFramesAndReverse(stack) {
    if (!stack.length) {
      return [];
    }

    let localStack = stack;

    const firstFrameFunction = localStack[0].function || '';
    const lastFrameFunction = localStack[localStack.length - 1].function || '';

    // If stack starts with one of our API calls, remove it (starts, meaning it's the top of the stack - aka last call)
    if (firstFrameFunction.indexOf('captureMessage') !== -1 || firstFrameFunction.indexOf('captureException') !== -1) {
      localStack = localStack.slice(1);
    }

    // If stack ends with one of our internal API calls, remove it (ends, meaning it's the bottom of the stack - aka top-most call)
    if (lastFrameFunction.indexOf('sentryWrapped') !== -1) {
      localStack = localStack.slice(0, -1);
    }

    // The frame where the crash happened, should be the last entry in the array
    return localStack
      .slice(0, STACKTRACE_LIMIT)
      .map(frame => ({
        ...frame,
        filename: frame.filename || localStack[0].filename,
        function: frame.function || '?',
      }))
      .reverse();
  }

  const defaultFunctionName = '<anonymous>';

  /**
   * Safely extract function name from itself
   */
  function getFunctionName(fn) {
    try {
      if (!fn || typeof fn !== 'function') {
        return defaultFunctionName;
      }
      return fn.name || defaultFunctionName;
    } catch (e) {
      // Just accessing custom props in some Selenium environments
      // can cause a "Permission denied" exception (see raven-js#495).
      return defaultFunctionName;
    }
  }

  // eslint-disable-next-line deprecation/deprecation
  const WINDOW$5 = getGlobalObject();

  /**
   * Tells whether current environment supports Fetch API
   * {@link supportsFetch}.
   *
   * @returns Answer to the given question.
   */
  function supportsFetch() {
    if (!('fetch' in WINDOW$5)) {
      return false;
    }

    try {
      new Headers();
      new Request('http://www.example.com');
      new Response();
      return true;
    } catch (e) {
      return false;
    }
  }
  /**
   * isNativeFetch checks if the given function is a native implementation of fetch()
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  function isNativeFetch(func) {
    return func && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(func.toString());
  }

  /**
   * Tells whether current environment supports Fetch API natively
   * {@link supportsNativeFetch}.
   *
   * @returns true if `window.fetch` is natively implemented, false otherwise
   */
  function supportsNativeFetch() {
    if (!supportsFetch()) {
      return false;
    }

    // Fast path to avoid DOM I/O
    // eslint-disable-next-line @typescript-eslint/unbound-method
    if (isNativeFetch(WINDOW$5.fetch)) {
      return true;
    }

    // window.fetch is implemented, but is polyfilled or already wrapped (e.g: by a chrome extension)
    // so create a "pure" iframe to see if that has native fetch
    let result = false;
    const doc = WINDOW$5.document;
    // eslint-disable-next-line deprecation/deprecation
    if (doc && typeof (doc.createElement ) === 'function') {
      try {
        const sandbox = doc.createElement('iframe');
        sandbox.hidden = true;
        doc.head.appendChild(sandbox);
        if (sandbox.contentWindow && sandbox.contentWindow.fetch) {
          // eslint-disable-next-line @typescript-eslint/unbound-method
          result = isNativeFetch(sandbox.contentWindow.fetch);
        }
        doc.head.removeChild(sandbox);
      } catch (err) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
          logger.warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', err);
      }
    }

    return result;
  }

  /**
   * Tells whether current environment supports History API
   * {@link supportsHistory}.
   *
   * @returns Answer to the given question.
   */
  function supportsHistory() {
    // NOTE: in Chrome App environment, touching history.pushState, *even inside
    //       a try/catch block*, will cause Chrome to output an error to console.error
    // borrowed from: https://github.com/angular/angular.js/pull/13945/files
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const chrome = (WINDOW$5 ).chrome;
    const isChromePackagedApp = chrome && chrome.app && chrome.app.runtime;
    /* eslint-enable @typescript-eslint/no-unsafe-member-access */
    const hasHistoryApi = 'history' in WINDOW$5 && !!WINDOW$5.history.pushState && !!WINDOW$5.history.replaceState;

    return !isChromePackagedApp && hasHistoryApi;
  }

  // eslint-disable-next-line deprecation/deprecation
  const WINDOW$4 = getGlobalObject();

  /**
   * Instrument native APIs to call handlers that can be used to create breadcrumbs, APM spans etc.
   *  - Console API
   *  - Fetch API
   *  - XHR API
   *  - History API
   *  - DOM API (click/typing)
   *  - Error API
   *  - UnhandledRejection API
   */

  const handlers = {};
  const instrumented = {};

  /** Instruments given API */
  function instrument(type) {
    if (instrumented[type]) {
      return;
    }

    instrumented[type] = true;

    switch (type) {
      case 'console':
        instrumentConsole();
        break;
      case 'dom':
        instrumentDOM();
        break;
      case 'xhr':
        instrumentXHR();
        break;
      case 'fetch':
        instrumentFetch();
        break;
      case 'history':
        instrumentHistory();
        break;
      case 'error':
        instrumentError();
        break;
      case 'unhandledrejection':
        instrumentUnhandledRejection();
        break;
      default:
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.warn('unknown instrumentation type:', type);
        return;
    }
  }

  /**
   * Add handler that will be called when given type of instrumentation triggers.
   * Use at your own risk, this might break without changelog notice, only used internally.
   * @hidden
   */
  function addInstrumentationHandler(type, callback) {
    handlers[type] = handlers[type] || [];
    (handlers[type] ).push(callback);
    instrument(type);
  }

  /** JSDoc */
  function triggerHandlers(type, data) {
    if (!type || !handlers[type]) {
      return;
    }

    for (const handler of handlers[type] || []) {
      try {
        handler(data);
      } catch (e) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
          logger.error(
            `Error while triggering instrumentation handler.\nType: ${type}\nName: ${getFunctionName(handler)}\nError:`,
            e,
          );
      }
    }
  }

  /** JSDoc */
  function instrumentConsole() {
    if (!('console' in WINDOW$4)) {
      return;
    }

    CONSOLE_LEVELS.forEach(function (level) {
      if (!(level in WINDOW$4.console)) {
        return;
      }

      fill(WINDOW$4.console, level, function (originalConsoleMethod) {
        return function (...args) {
          triggerHandlers('console', { args, level });

          // this fails for some browsers. :(
          if (originalConsoleMethod) {
            originalConsoleMethod.apply(WINDOW$4.console, args);
          }
        };
      });
    });
  }

  /** JSDoc */
  function instrumentFetch() {
    if (!supportsNativeFetch()) {
      return;
    }

    fill(WINDOW$4, 'fetch', function (originalFetch) {
      return function (...args) {
        const handlerData = {
          args,
          fetchData: {
            method: getFetchMethod(args),
            url: getFetchUrl(args),
          },
          startTimestamp: Date.now(),
        };

        triggerHandlers('fetch', {
          ...handlerData,
        });

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        return originalFetch.apply(WINDOW$4, args).then(
          (response) => {
            triggerHandlers('fetch', {
              ...handlerData,
              endTimestamp: Date.now(),
              response,
            });
            return response;
          },
          (error) => {
            triggerHandlers('fetch', {
              ...handlerData,
              endTimestamp: Date.now(),
              error,
            });
            // NOTE: If you are a Sentry user, and you are seeing this stack frame,
            //       it means the sentry.javascript SDK caught an error invoking your application code.
            //       This is expected behavior and NOT indicative of a bug with sentry.javascript.
            throw error;
          },
        );
      };
    });
  }

  /* eslint-disable @typescript-eslint/no-unsafe-member-access */
  /** Extract `method` from fetch call arguments */
  function getFetchMethod(fetchArgs = []) {
    if ('Request' in WINDOW$4 && isInstanceOf(fetchArgs[0], Request) && fetchArgs[0].method) {
      return String(fetchArgs[0].method).toUpperCase();
    }
    if (fetchArgs[1] && fetchArgs[1].method) {
      return String(fetchArgs[1].method).toUpperCase();
    }
    return 'GET';
  }

  /** Extract `url` from fetch call arguments */
  function getFetchUrl(fetchArgs = []) {
    if (typeof fetchArgs[0] === 'string') {
      return fetchArgs[0];
    }
    if ('Request' in WINDOW$4 && isInstanceOf(fetchArgs[0], Request)) {
      return fetchArgs[0].url;
    }
    return String(fetchArgs[0]);
  }
  /* eslint-enable @typescript-eslint/no-unsafe-member-access */

  /** JSDoc */
  function instrumentXHR() {
    if (!('XMLHttpRequest' in WINDOW$4)) {
      return;
    }

    const xhrproto = XMLHttpRequest.prototype;

    fill(xhrproto, 'open', function (originalOpen) {
      return function ( ...args) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const xhr = this;
        const url = args[1];
        const xhrInfo = (xhr.__sentry_xhr__ = {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          method: isString(args[0]) ? args[0].toUpperCase() : args[0],
          url: args[1],
        });

        // if Sentry key appears in URL, don't capture it as a request
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (isString(url) && xhrInfo.method === 'POST' && url.match(/sentry_key/)) {
          xhr.__sentry_own_request__ = true;
        }

        const onreadystatechangeHandler = function () {
          if (xhr.readyState === 4) {
            try {
              // touching statusCode in some platforms throws
              // an exception
              xhrInfo.status_code = xhr.status;
            } catch (e) {
              /* do nothing */
            }

            triggerHandlers('xhr', {
              args,
              endTimestamp: Date.now(),
              startTimestamp: Date.now(),
              xhr,
            });
          }
        };

        if ('onreadystatechange' in xhr && typeof xhr.onreadystatechange === 'function') {
          fill(xhr, 'onreadystatechange', function (original) {
            return function (...readyStateArgs) {
              onreadystatechangeHandler();
              return original.apply(xhr, readyStateArgs);
            };
          });
        } else {
          xhr.addEventListener('readystatechange', onreadystatechangeHandler);
        }

        return originalOpen.apply(xhr, args);
      };
    });

    fill(xhrproto, 'send', function (originalSend) {
      return function ( ...args) {
        if (this.__sentry_xhr__ && args[0] !== undefined) {
          this.__sentry_xhr__.body = args[0];
        }

        triggerHandlers('xhr', {
          args,
          startTimestamp: Date.now(),
          xhr: this,
        });

        return originalSend.apply(this, args);
      };
    });
  }

  let lastHref;

  /** JSDoc */
  function instrumentHistory() {
    if (!supportsHistory()) {
      return;
    }

    const oldOnPopState = WINDOW$4.onpopstate;
    WINDOW$4.onpopstate = function ( ...args) {
      const to = WINDOW$4.location.href;
      // keep track of the current URL state, as we always receive only the updated state
      const from = lastHref;
      lastHref = to;
      triggerHandlers('history', {
        from,
        to,
      });
      if (oldOnPopState) {
        // Apparently this can throw in Firefox when incorrectly implemented plugin is installed.
        // https://github.com/getsentry/sentry-javascript/issues/3344
        // https://github.com/bugsnag/bugsnag-js/issues/469
        try {
          return oldOnPopState.apply(this, args);
        } catch (_oO) {
          // no-empty
        }
      }
    };

    /** @hidden */
    function historyReplacementFunction(originalHistoryFunction) {
      return function ( ...args) {
        const url = args.length > 2 ? args[2] : undefined;
        if (url) {
          // coerce to string (this is what pushState does)
          const from = lastHref;
          const to = String(url);
          // keep track of the current URL state, as we always receive only the updated state
          lastHref = to;
          triggerHandlers('history', {
            from,
            to,
          });
        }
        return originalHistoryFunction.apply(this, args);
      };
    }

    fill(WINDOW$4.history, 'pushState', historyReplacementFunction);
    fill(WINDOW$4.history, 'replaceState', historyReplacementFunction);
  }

  const debounceDuration = 1000;
  let debounceTimerID;
  let lastCapturedEvent;

  /**
   * Decide whether the current event should finish the debounce of previously captured one.
   * @param previous previously captured event
   * @param current event to be captured
   */
  function shouldShortcircuitPreviousDebounce(previous, current) {
    // If there was no previous event, it should always be swapped for the new one.
    if (!previous) {
      return true;
    }

    // If both events have different type, then user definitely performed two separate actions. e.g. click + keypress.
    if (previous.type !== current.type) {
      return true;
    }

    try {
      // If both events have the same type, it's still possible that actions were performed on different targets.
      // e.g. 2 clicks on different buttons.
      if (previous.target !== current.target) {
        return true;
      }
    } catch (e) {
      // just accessing `target` property can throw an exception in some rare circumstances
      // see: https://github.com/getsentry/sentry-javascript/issues/838
    }

    // If both events have the same type _and_ same `target` (an element which triggered an event, _not necessarily_
    // to which an event listener was attached), we treat them as the same action, as we want to capture
    // only one breadcrumb. e.g. multiple clicks on the same button, or typing inside a user input box.
    return false;
  }

  /**
   * Decide whether an event should be captured.
   * @param event event to be captured
   */
  function shouldSkipDOMEvent(event) {
    // We are only interested in filtering `keypress` events for now.
    if (event.type !== 'keypress') {
      return false;
    }

    try {
      const target = event.target ;

      if (!target || !target.tagName) {
        return true;
      }

      // Only consider keypress events on actual input elements. This will disregard keypresses targeting body
      // e.g.tabbing through elements, hotkeys, etc.
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return false;
      }
    } catch (e) {
      // just accessing `target` property can throw an exception in some rare circumstances
      // see: https://github.com/getsentry/sentry-javascript/issues/838
    }

    return true;
  }

  /**
   * Wraps addEventListener to capture UI breadcrumbs
   * @param handler function that will be triggered
   * @param globalListener indicates whether event was captured by the global event listener
   * @returns wrapped breadcrumb events handler
   * @hidden
   */
  function makeDOMEventHandler(handler, globalListener = false) {
    return (event) => {
      // It's possible this handler might trigger multiple times for the same
      // event (e.g. event propagation through node ancestors).
      // Ignore if we've already captured that event.
      if (!event || lastCapturedEvent === event) {
        return;
      }

      // We always want to skip _some_ events.
      if (shouldSkipDOMEvent(event)) {
        return;
      }

      const name = event.type === 'keypress' ? 'input' : event.type;

      // If there is no debounce timer, it means that we can safely capture the new event and store it for future comparisons.
      if (debounceTimerID === undefined) {
        handler({
          event: event,
          name,
          global: globalListener,
        });
        lastCapturedEvent = event;
      }
      // If there is a debounce awaiting, see if the new event is different enough to treat it as a unique one.
      // If that's the case, emit the previous event and store locally the newly-captured DOM event.
      else if (shouldShortcircuitPreviousDebounce(lastCapturedEvent, event)) {
        handler({
          event: event,
          name,
          global: globalListener,
        });
        lastCapturedEvent = event;
      }

      // Start a new debounce timer that will prevent us from capturing multiple events that should be grouped together.
      clearTimeout(debounceTimerID);
      debounceTimerID = WINDOW$4.setTimeout(() => {
        debounceTimerID = undefined;
      }, debounceDuration);
    };
  }

  /** JSDoc */
  function instrumentDOM() {
    if (!('document' in WINDOW$4)) {
      return;
    }

    // Make it so that any click or keypress that is unhandled / bubbled up all the way to the document triggers our dom
    // handlers. (Normally we have only one, which captures a breadcrumb for each click or keypress.) Do this before
    // we instrument `addEventListener` so that we don't end up attaching this handler twice.
    const triggerDOMHandler = triggerHandlers.bind(null, 'dom');
    const globalDOMEventHandler = makeDOMEventHandler(triggerDOMHandler, true);
    WINDOW$4.document.addEventListener('click', globalDOMEventHandler, false);
    WINDOW$4.document.addEventListener('keypress', globalDOMEventHandler, false);

    // After hooking into click and keypress events bubbled up to `document`, we also hook into user-handled
    // clicks & keypresses, by adding an event listener of our own to any element to which they add a listener. That
    // way, whenever one of their handlers is triggered, ours will be, too. (This is needed because their handler
    // could potentially prevent the event from bubbling up to our global listeners. This way, our handler are still
    // guaranteed to fire at least once.)
    ['EventTarget', 'Node'].forEach((target) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const proto = (WINDOW$4 )[target] && (WINDOW$4 )[target].prototype;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, no-prototype-builtins
      if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
        return;
      }

      fill(proto, 'addEventListener', function (originalAddEventListener) {
        return function (

          type,
          listener,
          options,
        ) {
          if (type === 'click' || type == 'keypress') {
            try {
              const el = this ;
              const handlers = (el.__sentry_instrumentation_handlers__ = el.__sentry_instrumentation_handlers__ || {});
              const handlerForType = (handlers[type] = handlers[type] || { refCount: 0 });

              if (!handlerForType.handler) {
                const handler = makeDOMEventHandler(triggerDOMHandler);
                handlerForType.handler = handler;
                originalAddEventListener.call(this, type, handler, options);
              }

              handlerForType.refCount++;
            } catch (e) {
              // Accessing dom properties is always fragile.
              // Also allows us to skip `addEventListenrs` calls with no proper `this` context.
            }
          }

          return originalAddEventListener.call(this, type, listener, options);
        };
      });

      fill(
        proto,
        'removeEventListener',
        function (originalRemoveEventListener) {
          return function (

            type,
            listener,
            options,
          ) {
            if (type === 'click' || type == 'keypress') {
              try {
                const el = this ;
                const handlers = el.__sentry_instrumentation_handlers__ || {};
                const handlerForType = handlers[type];

                if (handlerForType) {
                  handlerForType.refCount--;
                  // If there are no longer any custom handlers of the current type on this element, we can remove ours, too.
                  if (handlerForType.refCount <= 0) {
                    originalRemoveEventListener.call(this, type, handlerForType.handler, options);
                    handlerForType.handler = undefined;
                    delete handlers[type]; // eslint-disable-line @typescript-eslint/no-dynamic-delete
                  }

                  // If there are no longer any custom handlers of any type on this element, cleanup everything.
                  if (Object.keys(handlers).length === 0) {
                    delete el.__sentry_instrumentation_handlers__;
                  }
                }
              } catch (e) {
                // Accessing dom properties is always fragile.
                // Also allows us to skip `addEventListenrs` calls with no proper `this` context.
              }
            }

            return originalRemoveEventListener.call(this, type, listener, options);
          };
        },
      );
    });
  }

  let _oldOnErrorHandler = null;
  /** JSDoc */
  function instrumentError() {
    _oldOnErrorHandler = WINDOW$4.onerror;

    WINDOW$4.onerror = function (msg, url, line, column, error) {
      triggerHandlers('error', {
        column,
        error,
        line,
        msg,
        url,
      });

      if (_oldOnErrorHandler) {
        // eslint-disable-next-line prefer-rest-params
        return _oldOnErrorHandler.apply(this, arguments);
      }

      return false;
    };
  }

  let _oldOnUnhandledRejectionHandler = null;
  /** JSDoc */
  function instrumentUnhandledRejection() {
    _oldOnUnhandledRejectionHandler = WINDOW$4.onunhandledrejection;

    WINDOW$4.onunhandledrejection = function (e) {
      triggerHandlers('unhandledrejection', e);

      if (_oldOnUnhandledRejectionHandler) {
        // eslint-disable-next-line prefer-rest-params
        return _oldOnUnhandledRejectionHandler.apply(this, arguments);
      }

      return true;
    };
  }

  /* eslint-disable @typescript-eslint/no-unsafe-member-access */
  /* eslint-disable @typescript-eslint/no-explicit-any */

  /**
   * Helper to decycle json objects
   */
  function memoBuilder() {
    const hasWeakSet = typeof WeakSet === 'function';
    const inner = hasWeakSet ? new WeakSet() : [];
    function memoize(obj) {
      if (hasWeakSet) {
        if (inner.has(obj)) {
          return true;
        }
        inner.add(obj);
        return false;
      }
      // eslint-disable-next-line @typescript-eslint/prefer-for-of
      for (let i = 0; i < inner.length; i++) {
        const value = inner[i];
        if (value === obj) {
          return true;
        }
      }
      inner.push(obj);
      return false;
    }

    function unmemoize(obj) {
      if (hasWeakSet) {
        inner.delete(obj);
      } else {
        for (let i = 0; i < inner.length; i++) {
          if (inner[i] === obj) {
            inner.splice(i, 1);
            break;
          }
        }
      }
    }
    return [memoize, unmemoize];
  }

  /**
   * UUID4 generator
   *
   * @returns string Generated UUID4.
   */
  function uuid4() {
    const gbl = GLOBAL_OBJ ;
    const crypto = gbl.crypto || gbl.msCrypto;

    if (crypto && crypto.randomUUID) {
      return crypto.randomUUID().replace(/-/g, '');
    }

    const getRandomByte =
      crypto && crypto.getRandomValues ? () => crypto.getRandomValues(new Uint8Array(1))[0] : () => Math.random() * 16;

    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
    // Concatenating the following numbers as strings results in '10000000100040008000100000000000'
    return (([1e7] ) + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, c =>
      // eslint-disable-next-line no-bitwise
      ((c ) ^ ((getRandomByte() & 15) >> ((c ) / 4))).toString(16),
    );
  }

  function getFirstException(event) {
    return event.exception && event.exception.values ? event.exception.values[0] : undefined;
  }

  /**
   * Extracts either message or type+value from an event that can be used for user-facing logs
   * @returns event's description
   */
  function getEventDescription(event) {
    const { message, event_id: eventId } = event;
    if (message) {
      return message;
    }

    const firstException = getFirstException(event);
    if (firstException) {
      if (firstException.type && firstException.value) {
        return `${firstException.type}: ${firstException.value}`;
      }
      return firstException.type || firstException.value || eventId || '<unknown>';
    }
    return eventId || '<unknown>';
  }

  /**
   * Adds exception values, type and value to an synthetic Exception.
   * @param event The event to modify.
   * @param value Value of the exception.
   * @param type Type of the exception.
   * @hidden
   */
  function addExceptionTypeValue(event, value, type) {
    const exception = (event.exception = event.exception || {});
    const values = (exception.values = exception.values || []);
    const firstException = (values[0] = values[0] || {});
    if (!firstException.value) {
      firstException.value = value || '';
    }
    if (!firstException.type) {
      firstException.type = type || 'Error';
    }
  }

  /**
   * Adds exception mechanism data to a given event. Uses defaults if the second parameter is not passed.
   *
   * @param event The event to modify.
   * @param newMechanism Mechanism data to add to the event.
   * @hidden
   */
  function addExceptionMechanism(event, newMechanism) {
    const firstException = getFirstException(event);
    if (!firstException) {
      return;
    }

    const defaultMechanism = { type: 'generic', handled: true };
    const currentMechanism = firstException.mechanism;
    firstException.mechanism = { ...defaultMechanism, ...currentMechanism, ...newMechanism };

    if (newMechanism && 'data' in newMechanism) {
      const mergedData = { ...(currentMechanism && currentMechanism.data), ...newMechanism.data };
      firstException.mechanism.data = mergedData;
    }
  }

  /**
   * Checks whether or not we've already captured the given exception (note: not an identical exception - the very object
   * in question), and marks it captured if not.
   *
   * This is useful because it's possible for an error to get captured by more than one mechanism. After we intercept and
   * record an error, we rethrow it (assuming we've intercepted it before it's reached the top-level global handlers), so
   * that we don't interfere with whatever effects the error might have had were the SDK not there. At that point, because
   * the error has been rethrown, it's possible for it to bubble up to some other code we've instrumented. If it's not
   * caught after that, it will bubble all the way up to the global handlers (which of course we also instrument). This
   * function helps us ensure that even if we encounter the same error more than once, we only record it the first time we
   * see it.
   *
   * Note: It will ignore primitives (always return `false` and not mark them as seen), as properties can't be set on
   * them. {@link: Object.objectify} can be used on exceptions to convert any that are primitives into their equivalent
   * object wrapper forms so that this check will always work. However, because we need to flag the exact object which
   * will get rethrown, and because that rethrowing happens outside of the event processing pipeline, the objectification
   * must be done before the exception captured.
   *
   * @param A thrown exception to check or flag as having been seen
   * @returns `true` if the exception has already been captured, `false` if not (with the side effect of marking it seen)
   */
  function checkOrSetAlreadyCaught(exception) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (exception && (exception ).__sentry_captured__) {
      return true;
    }

    try {
      // set it this way rather than by assignment so that it's not ennumerable and therefore isn't recorded by the
      // `ExtraErrorData` integration
      addNonEnumerableProperty(exception , '__sentry_captured__', true);
    } catch (err) {
      // `exception` is a primitive, so we can't mark it seen
    }

    return false;
  }

  /**
   * Checks whether the given input is already an array, and if it isn't, wraps it in one.
   *
   * @param maybeArray Input to turn into an array, if necessary
   * @returns The input, if already an array, or an array with the input as the only element, if not
   */
  function arrayify(maybeArray) {
    return Array.isArray(maybeArray) ? maybeArray : [maybeArray];
  }

  /*
   * This module exists for optimizations in the build process through rollup and terser.  We define some global
   * constants, which can be overridden during build. By guarding certain pieces of code with functions that return these
   * constants, we can control whether or not they appear in the final bundle. (Any code guarded by a false condition will
   * never run, and will hence be dropped during treeshaking.) The two primary uses for this are stripping out calls to
   * `logger` and preventing node-related code from appearing in browser bundles.
   *
   * Attention:
   * This file should not be used to define constants/flags that are intended to be used for tree-shaking conducted by
   * users. These flags should live in their respective packages, as we identified user tooling (specifically webpack)
   * having issues tree-shaking these constants across package boundaries.
   * An example for this is the __SENTRY_DEBUG__ constant. It is declared in each package individually because we want
   * users to be able to shake away expressions that it guards.
   */

  /**
   * Figures out if we're building a browser bundle.
   *
   * @returns true if this is a browser bundle build.
   */
  function isBrowserBundle() {
    return typeof __SENTRY_BROWSER_BUNDLE__ !== 'undefined' && !!__SENTRY_BROWSER_BUNDLE__;
  }

  /**
   * Get source of SDK.
   */
  function getSDKSource() {
    // @ts-ignore "npm" is injected by rollup during build process
    return "npm";
  }

  /**
   * NOTE: In order to avoid circular dependencies, if you add a function to this module and it needs to print something,
   * you must either a) use `console.log` rather than the logger, or b) put your function elsewhere.
   */

  /**
   * Checks whether we're in the Node.js or Browser environment
   *
   * @returns Answer to given question
   */
  function isNodeEnv() {
    // explicitly check for browser bundles as those can be optimized statically
    // by terser/rollup.
    return (
      !isBrowserBundle() &&
      Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]'
    );
  }

  /**
   * Requires a module which is protected against bundler minification.
   *
   * @param request The module path to resolve
   */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
  function dynamicRequire(mod, request) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return mod.require(request);
  }

  /**
   * Helper for dynamically loading module that should work with linked dependencies.
   * The problem is that we _should_ be using `require(require.resolve(moduleName, { paths: [cwd()] }))`
   * However it's _not possible_ to do that with Webpack, as it has to know all the dependencies during
   * build time. `require.resolve` is also not available in any other way, so we cannot create,
   * a fake helper like we do with `dynamicRequire`.
   *
   * We always prefer to use local package, thus the value is not returned early from each `try/catch` block.
   * That is to mimic the behavior of `require.resolve` exactly.
   *
   * @param moduleName module name to require
   * @returns possibly required module
   */
  function loadModule(moduleName) {
    let mod;

    try {
      mod = dynamicRequire(module, moduleName);
    } catch (e) {
      // no-empty
    }

    try {
      const { cwd } = dynamicRequire(module, 'process');
      mod = dynamicRequire(module, `${cwd()}/node_modules/${moduleName}`) ;
    } catch (e) {
      // no-empty
    }

    return mod;
  }

  /**
   * Recursively normalizes the given object.
   *
   * - Creates a copy to prevent original input mutation
   * - Skips non-enumerable properties
   * - When stringifying, calls `toJSON` if implemented
   * - Removes circular references
   * - Translates non-serializable values (`undefined`/`NaN`/functions) to serializable format
   * - Translates known global objects/classes to a string representations
   * - Takes care of `Error` object serialization
   * - Optionally limits depth of final output
   * - Optionally limits number of properties/elements included in any single object/array
   *
   * @param input The object to be normalized.
   * @param depth The max depth to which to normalize the object. (Anything deeper stringified whole.)
   * @param maxProperties The max number of elements or properties to be included in any single array or
   * object in the normallized output.
   * @returns A normalized version of the object, or `"**non-serializable**"` if any errors are thrown during normalization.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function normalize(input, depth = +Infinity, maxProperties = +Infinity) {
    try {
      // since we're at the outermost level, we don't provide a key
      return visit('', input, depth, maxProperties);
    } catch (err) {
      return { ERROR: `**non-serializable** (${err})` };
    }
  }

  /** JSDoc */
  function normalizeToSize(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    object,
    // Default Node.js REPL depth
    depth = 3,
    // 100kB, as 200kB is max payload size, so half sounds reasonable
    maxSize = 100 * 1024,
  ) {
    const normalized = normalize(object, depth);

    if (jsonSize(normalized) > maxSize) {
      return normalizeToSize(object, depth - 1, maxSize);
    }

    return normalized ;
  }

  /**
   * Visits a node to perform normalization on it
   *
   * @param key The key corresponding to the given node
   * @param value The node to be visited
   * @param depth Optional number indicating the maximum recursion depth
   * @param maxProperties Optional maximum number of properties/elements included in any single object/array
   * @param memo Optional Memo class handling decycling
   */
  function visit(
    key,
    value,
    depth = +Infinity,
    maxProperties = +Infinity,
    memo = memoBuilder(),
  ) {
    const [memoize, unmemoize] = memo;

    // Get the simple cases out of the way first
    if (value === null || (['number', 'boolean', 'string'].includes(typeof value) && !isNaN$1(value))) {
      return value ;
    }

    const stringified = stringifyValue(key, value);

    // Anything we could potentially dig into more (objects or arrays) will have come back as `"[object XXXX]"`.
    // Everything else will have already been serialized, so if we don't see that pattern, we're done.
    if (!stringified.startsWith('[object ')) {
      return stringified;
    }

    // From here on, we can assert that `value` is either an object or an array.

    // Do not normalize objects that we know have already been normalized. As a general rule, the
    // "__sentry_skip_normalization__" property should only be used sparingly and only should only be set on objects that
    // have already been normalized.
    if ((value )['__sentry_skip_normalization__']) {
      return value ;
    }

    // We're also done if we've reached the max depth
    if (depth === 0) {
      // At this point we know `serialized` is a string of the form `"[object XXXX]"`. Clean it up so it's just `"[XXXX]"`.
      return stringified.replace('object ', '');
    }

    // If we've already visited this branch, bail out, as it's circular reference. If not, note that we're seeing it now.
    if (memoize(value)) {
      return '[Circular ~]';
    }

    // If the value has a `toJSON` method, we call it to extract more information
    const valueWithToJSON = value ;
    if (valueWithToJSON && typeof valueWithToJSON.toJSON === 'function') {
      try {
        const jsonValue = valueWithToJSON.toJSON();
        // We need to normalize the return value of `.toJSON()` in case it has circular references
        return visit('', jsonValue, depth - 1, maxProperties, memo);
      } catch (err) {
        // pass (The built-in `toJSON` failed, but we can still try to do it ourselves)
      }
    }

    // At this point we know we either have an object or an array, we haven't seen it before, and we're going to recurse
    // because we haven't yet reached the max depth. Create an accumulator to hold the results of visiting each
    // property/entry, and keep track of the number of items we add to it.
    const normalized = (Array.isArray(value) ? [] : {}) ;
    let numAdded = 0;

    // Before we begin, convert`Error` and`Event` instances into plain objects, since some of each of their relevant
    // properties are non-enumerable and otherwise would get missed.
    const visitable = convertToPlainObject(value );

    for (const visitKey in visitable) {
      // Avoid iterating over fields in the prototype if they've somehow been exposed to enumeration.
      if (!Object.prototype.hasOwnProperty.call(visitable, visitKey)) {
        continue;
      }

      if (numAdded >= maxProperties) {
        normalized[visitKey] = '[MaxProperties ~]';
        break;
      }

      // Recursively visit all the child nodes
      const visitValue = visitable[visitKey];
      normalized[visitKey] = visit(visitKey, visitValue, depth - 1, maxProperties, memo);

      numAdded++;
    }

    // Once we've visited all the branches, remove the parent from memo storage
    unmemoize(value);

    // Return accumulated values
    return normalized;
  }

  /**
   * Stringify the given value. Handles various known special values and types.
   *
   * Not meant to be used on simple primitives which already have a string representation, as it will, for example, turn
   * the number 1231 into "[Object Number]", nor on `null`, as it will throw.
   *
   * @param value The value to stringify
   * @returns A stringified representation of the given value
   */
  function stringifyValue(
    key,
    // this type is a tiny bit of a cheat, since this function does handle NaN (which is technically a number), but for
    // our internal use, it'll do
    value,
  ) {
    try {
      if (key === 'domain' && value && typeof value === 'object' && (value )._events) {
        return '[Domain]';
      }

      if (key === 'domainEmitter') {
        return '[DomainEmitter]';
      }

      // It's safe to use `global`, `window`, and `document` here in this manner, as we are asserting using `typeof` first
      // which won't throw if they are not present.

      if (typeof global !== 'undefined' && value === global) {
        return '[Global]';
      }

      // eslint-disable-next-line no-restricted-globals
      if (typeof window !== 'undefined' && value === window) {
        return '[Window]';
      }

      // eslint-disable-next-line no-restricted-globals
      if (typeof document !== 'undefined' && value === document) {
        return '[Document]';
      }

      // React's SyntheticEvent thingy
      if (isSyntheticEvent(value)) {
        return '[SyntheticEvent]';
      }

      if (typeof value === 'number' && value !== value) {
        return '[NaN]';
      }

      // this catches `undefined` (but not `null`, which is a primitive and can be serialized on its own)
      if (value === void 0) {
        return '[undefined]';
      }

      if (typeof value === 'function') {
        return `[Function: ${getFunctionName(value)}]`;
      }

      if (typeof value === 'symbol') {
        return `[${String(value)}]`;
      }

      // stringified BigInts are indistinguishable from regular numbers, so we need to label them to avoid confusion
      if (typeof value === 'bigint') {
        return `[BigInt: ${String(value)}]`;
      }

      // Now that we've knocked out all the special cases and the primitives, all we have left are objects. Simply casting
      // them to strings means that instances of classes which haven't defined their `toStringTag` will just come out as
      // `"[object Object]"`. If we instead look at the constructor's name (which is the same as the name of the class),
      // we can make sure that only plain objects come out that way.
      return `[object ${getConstructorName(value)}]`;
    } catch (err) {
      return `**non-serializable** (${err})`;
    }
  }

  function getConstructorName(value) {
    const prototype = Object.getPrototypeOf(value);

    return prototype ? prototype.constructor.name : 'null prototype';
  }

  /** Calculates bytes size of input string */
  function utf8Length(value) {
    // eslint-disable-next-line no-bitwise
    return ~-encodeURI(value).split(/%..|./).length;
  }

  /** Calculates bytes size of input object */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function jsonSize(value) {
    return utf8Length(JSON.stringify(value));
  }

  /* eslint-disable @typescript-eslint/explicit-function-return-type */

  /** SyncPromise internal states */
  var States; (function (States) {
    /** Pending */
    const PENDING = 0; States[States["PENDING"] = PENDING] = "PENDING";
    /** Resolved / OK */
    const RESOLVED = 1; States[States["RESOLVED"] = RESOLVED] = "RESOLVED";
    /** Rejected / Error */
    const REJECTED = 2; States[States["REJECTED"] = REJECTED] = "REJECTED";
  })(States || (States = {}));

  // Overloads so we can call resolvedSyncPromise without arguments and generic argument

  /**
   * Creates a resolved sync promise.
   *
   * @param value the value to resolve the promise with
   * @returns the resolved sync promise
   */
  function resolvedSyncPromise(value) {
    return new SyncPromise(resolve => {
      resolve(value);
    });
  }

  /**
   * Creates a rejected sync promise.
   *
   * @param value the value to reject the promise with
   * @returns the rejected sync promise
   */
  function rejectedSyncPromise(reason) {
    return new SyncPromise((_, reject) => {
      reject(reason);
    });
  }

  /**
   * Thenable class that behaves like a Promise and follows it's interface
   * but is not async internally
   */
  class SyncPromise {
     __init() {this._state = States.PENDING;}
     __init2() {this._handlers = [];}

     constructor(
      executor,
    ) {SyncPromise.prototype.__init.call(this);SyncPromise.prototype.__init2.call(this);SyncPromise.prototype.__init3.call(this);SyncPromise.prototype.__init4.call(this);SyncPromise.prototype.__init5.call(this);SyncPromise.prototype.__init6.call(this);
      try {
        executor(this._resolve, this._reject);
      } catch (e) {
        this._reject(e);
      }
    }

    /** JSDoc */
     then(
      onfulfilled,
      onrejected,
    ) {
      return new SyncPromise((resolve, reject) => {
        this._handlers.push([
          false,
          result => {
            if (!onfulfilled) {
              // TODO: ¯\_(ツ)_/¯
              // TODO: FIXME
              resolve(result );
            } else {
              try {
                resolve(onfulfilled(result));
              } catch (e) {
                reject(e);
              }
            }
          },
          reason => {
            if (!onrejected) {
              reject(reason);
            } else {
              try {
                resolve(onrejected(reason));
              } catch (e) {
                reject(e);
              }
            }
          },
        ]);
        this._executeHandlers();
      });
    }

    /** JSDoc */
     catch(
      onrejected,
    ) {
      return this.then(val => val, onrejected);
    }

    /** JSDoc */
     finally(onfinally) {
      return new SyncPromise((resolve, reject) => {
        let val;
        let isRejected;

        return this.then(
          value => {
            isRejected = false;
            val = value;
            if (onfinally) {
              onfinally();
            }
          },
          reason => {
            isRejected = true;
            val = reason;
            if (onfinally) {
              onfinally();
            }
          },
        ).then(() => {
          if (isRejected) {
            reject(val);
            return;
          }

          resolve(val );
        });
      });
    }

    /** JSDoc */
      __init3() {this._resolve = (value) => {
      this._setResult(States.RESOLVED, value);
    };}

    /** JSDoc */
      __init4() {this._reject = (reason) => {
      this._setResult(States.REJECTED, reason);
    };}

    /** JSDoc */
      __init5() {this._setResult = (state, value) => {
      if (this._state !== States.PENDING) {
        return;
      }

      if (isThenable(value)) {
        void (value ).then(this._resolve, this._reject);
        return;
      }

      this._state = state;
      this._value = value;

      this._executeHandlers();
    };}

    /** JSDoc */
      __init6() {this._executeHandlers = () => {
      if (this._state === States.PENDING) {
        return;
      }

      const cachedHandlers = this._handlers.slice();
      this._handlers = [];

      cachedHandlers.forEach(handler => {
        if (handler[0]) {
          return;
        }

        if (this._state === States.RESOLVED) {
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          handler[1](this._value );
        }

        if (this._state === States.REJECTED) {
          handler[2](this._value);
        }

        handler[0] = true;
      });
    };}
  }

  /**
   * Creates an new PromiseBuffer object with the specified limit
   * @param limit max number of promises that can be stored in the buffer
   */
  function makePromiseBuffer(limit) {
    const buffer = [];

    function isReady() {
      return limit === undefined || buffer.length < limit;
    }

    /**
     * Remove a promise from the queue.
     *
     * @param task Can be any PromiseLike<T>
     * @returns Removed promise.
     */
    function remove(task) {
      return buffer.splice(buffer.indexOf(task), 1)[0];
    }

    /**
     * Add a promise (representing an in-flight action) to the queue, and set it to remove itself on fulfillment.
     *
     * @param taskProducer A function producing any PromiseLike<T>; In previous versions this used to be `task:
     *        PromiseLike<T>`, but under that model, Promises were instantly created on the call-site and their executor
     *        functions therefore ran immediately. Thus, even if the buffer was full, the action still happened. By
     *        requiring the promise to be wrapped in a function, we can defer promise creation until after the buffer
     *        limit check.
     * @returns The original promise.
     */
    function add(taskProducer) {
      if (!isReady()) {
        return rejectedSyncPromise(new SentryError('Not adding Promise because buffer limit was reached.'));
      }

      // start the task and add its promise to the queue
      const task = taskProducer();
      if (buffer.indexOf(task) === -1) {
        buffer.push(task);
      }
      void task
        .then(() => remove(task))
        // Use `then(null, rejectionHandler)` rather than `catch(rejectionHandler)` so that we can use `PromiseLike`
        // rather than `Promise`. `PromiseLike` doesn't have a `.catch` method, making its polyfill smaller. (ES5 didn't
        // have promises, so TS has to polyfill when down-compiling.)
        .then(null, () =>
          remove(task).then(null, () => {
            // We have to add another catch here because `remove()` starts a new promise chain.
          }),
        );
      return task;
    }

    /**
     * Wait for all promises in the queue to resolve or for timeout to expire, whichever comes first.
     *
     * @param timeout The time, in ms, after which to resolve to `false` if the queue is still non-empty. Passing `0` (or
     * not passing anything) will make the promise wait as long as it takes for the queue to drain before resolving to
     * `true`.
     * @returns A promise which will resolve to `true` if the queue is already empty or drains before the timeout, and
     * `false` otherwise
     */
    function drain(timeout) {
      return new SyncPromise((resolve, reject) => {
        let counter = buffer.length;

        if (!counter) {
          return resolve(true);
        }

        // wait for `timeout` ms and then resolve to `false` (if not cancelled first)
        const capturedSetTimeout = setTimeout(() => {
          if (timeout && timeout > 0) {
            resolve(false);
          }
        }, timeout);

        // if all promises resolve in time, cancel the timer and resolve to `true`
        buffer.forEach(item => {
          void resolvedSyncPromise(item).then(() => {
            if (!--counter) {
              clearTimeout(capturedSetTimeout);
              resolve(true);
            }
          }, reject);
        });
      });
    }

    return {
      $: buffer,
      add,
      drain,
    };
  }

  /**
   * Parses string form of URL into an object
   * // borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
   * // intentionally using regex and not <a/> href parsing trick because React Native and other
   * // environments where DOM might not be available
   * @returns parsed URL object
   */
  function parseUrl(url)

   {
    if (!url) {
      return {};
    }

    const match = url.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);

    if (!match) {
      return {};
    }

    // coerce to undefined values to empty string so we don't get 'undefined'
    const query = match[6] || '';
    const fragment = match[8] || '';
    return {
      host: match[4],
      path: match[5],
      protocol: match[2],
      relative: match[5] + query + fragment, // everything minus origin
    };
  }

  /**
   * Strip the query string and fragment off of a given URL or path (if present)
   *
   * @param urlPath Full URL or path, including possible query string and/or fragment
   * @returns URL or path without query string or fragment
   */
  function stripUrlQueryAndFragment(urlPath) {
    // eslint-disable-next-line no-useless-escape
    return urlPath.split(/[\?#]/, 1)[0];
  }

  /**
   * Returns number of URL segments of a passed string URL.
   */
  function getNumberOfUrlSegments(url) {
    // split at '/' or at '\/' to split regex urls correctly
    return url.split(/\\?\//).filter(s => s.length > 0 && s !== ',').length;
  }

  /**
   * Extracts a complete and parameterized path from the request object and uses it to construct transaction name.
   * If the parameterized transaction name cannot be extracted, we fall back to the raw URL.
   *
   * Additionally, this function determines and returns the transaction name source
   *
   * eg. GET /mountpoint/user/:id
   *
   * @param req A request object
   * @param options What to include in the transaction name (method, path, or a custom route name to be
   *                used instead of the request's route)
   *
   * @returns A tuple of the fully constructed transaction name [0] and its source [1] (can be either 'route' or 'url')
   */
  function extractPathForTransaction(
    req,
    options = {},
  ) {
    const method = req.method && req.method.toUpperCase();

    let path = '';
    let source = 'url';

    // Check to see if there's a parameterized route we can use (as there is in Express)
    if (options.customRoute || req.route) {
      path = options.customRoute || `${req.baseUrl || ''}${req.route && req.route.path}`;
      source = 'route';
    }

    // Otherwise, just take the original URL
    else if (req.originalUrl || req.url) {
      path = stripUrlQueryAndFragment(req.originalUrl || req.url || '');
    }

    let name = '';
    if (options.method && method) {
      name += method;
    }
    if (options.method && options.path) {
      name += ' ';
    }
    if (options.path && path) {
      name += path;
    }

    return [name, source];
  }

  // Note: Ideally the `SeverityLevel` type would be derived from `validSeverityLevels`, but that would mean either
  //
  // a) moving `validSeverityLevels` to `@sentry/types`,
  // b) moving the`SeverityLevel` type here, or
  // c) importing `validSeverityLevels` from here into `@sentry/types`.
  //
  // Option A would make `@sentry/types` a runtime dependency of `@sentry/utils` (not good), and options B and C would
  // create a circular dependency between `@sentry/types` and `@sentry/utils` (also not good). So a TODO accompanying the
  // type, reminding anyone who changes it to change this list also, will have to do.

  const validSeverityLevels = ['fatal', 'error', 'warning', 'log', 'info', 'debug'];

  /**
   * Converts a string-based level into a `SeverityLevel`, normalizing it along the way.
   *
   * @param level String representation of desired `SeverityLevel`.
   * @returns The `SeverityLevel` corresponding to the given string, or 'log' if the string isn't a valid level.
   */
  function severityLevelFromString(level) {
    return (level === 'warn' ? 'warning' : validSeverityLevels.includes(level) ? level : 'log') ;
  }

  // eslint-disable-next-line deprecation/deprecation
  const WINDOW$3 = getGlobalObject();

  /**
   * An object that can return the current timestamp in seconds since the UNIX epoch.
   */

  /**
   * A TimestampSource implementation for environments that do not support the Performance Web API natively.
   *
   * Note that this TimestampSource does not use a monotonic clock. A call to `nowSeconds` may return a timestamp earlier
   * than a previously returned value. We do not try to emulate a monotonic behavior in order to facilitate debugging. It
   * is more obvious to explain "why does my span have negative duration" than "why my spans have zero duration".
   */
  const dateTimestampSource = {
    nowSeconds: () => Date.now() / 1000,
  };

  /**
   * A partial definition of the [Performance Web API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Performance}
   * for accessing a high-resolution monotonic clock.
   */

  /**
   * Returns a wrapper around the native Performance API browser implementation, or undefined for browsers that do not
   * support the API.
   *
   * Wrapping the native API works around differences in behavior from different browsers.
   */
  function getBrowserPerformance() {
    const { performance } = WINDOW$3;
    if (!performance || !performance.now) {
      return undefined;
    }

    // Replace performance.timeOrigin with our own timeOrigin based on Date.now().
    //
    // This is a partial workaround for browsers reporting performance.timeOrigin such that performance.timeOrigin +
    // performance.now() gives a date arbitrarily in the past.
    //
    // Additionally, computing timeOrigin in this way fills the gap for browsers where performance.timeOrigin is
    // undefined.
    //
    // The assumption that performance.timeOrigin + performance.now() ~= Date.now() is flawed, but we depend on it to
    // interact with data coming out of performance entries.
    //
    // Note that despite recommendations against it in the spec, browsers implement the Performance API with a clock that
    // might stop when the computer is asleep (and perhaps under other circumstances). Such behavior causes
    // performance.timeOrigin + performance.now() to have an arbitrary skew over Date.now(). In laptop computers, we have
    // observed skews that can be as long as days, weeks or months.
    //
    // See https://github.com/getsentry/sentry-javascript/issues/2590.
    //
    // BUG: despite our best intentions, this workaround has its limitations. It mostly addresses timings of pageload
    // transactions, but ignores the skew built up over time that can aversely affect timestamps of navigation
    // transactions of long-lived web pages.
    const timeOrigin = Date.now() - performance.now();

    return {
      now: () => performance.now(),
      timeOrigin,
    };
  }

  /**
   * Returns the native Performance API implementation from Node.js. Returns undefined in old Node.js versions that don't
   * implement the API.
   */
  function getNodePerformance() {
    try {
      const perfHooks = dynamicRequire(module, 'perf_hooks') ;
      return perfHooks.performance;
    } catch (_) {
      return undefined;
    }
  }

  /**
   * The Performance API implementation for the current platform, if available.
   */
  const platformPerformance = isNodeEnv() ? getNodePerformance() : getBrowserPerformance();

  const timestampSource =
    platformPerformance === undefined
      ? dateTimestampSource
      : {
          nowSeconds: () => (platformPerformance.timeOrigin + platformPerformance.now()) / 1000,
        };

  /**
   * Returns a timestamp in seconds since the UNIX epoch using the Date API.
   */
  const dateTimestampInSeconds = dateTimestampSource.nowSeconds.bind(dateTimestampSource);

  /**
   * Returns a timestamp in seconds since the UNIX epoch using either the Performance or Date APIs, depending on the
   * availability of the Performance API.
   *
   * See `usingPerformanceAPI` to test whether the Performance API is used.
   *
   * BUG: Note that because of how browsers implement the Performance API, the clock might stop when the computer is
   * asleep. This creates a skew between `dateTimestampInSeconds` and `timestampInSeconds`. The
   * skew can grow to arbitrary amounts like days, weeks or months.
   * See https://github.com/getsentry/sentry-javascript/issues/2590.
   */
  const timestampInSeconds = timestampSource.nowSeconds.bind(timestampSource);

  // Re-exported with an old name for backwards-compatibility.
  const timestampWithMs = timestampInSeconds;

  /**
   * The number of milliseconds since the UNIX epoch. This value is only usable in a browser, and only when the
   * performance API is available.
   */
  const browserPerformanceTimeOrigin = (() => {
    // Unfortunately browsers may report an inaccurate time origin data, through either performance.timeOrigin or
    // performance.timing.navigationStart, which results in poor results in performance data. We only treat time origin
    // data as reliable if they are within a reasonable threshold of the current time.

    const { performance } = WINDOW$3;
    if (!performance || !performance.now) {
      return undefined;
    }

    const threshold = 3600 * 1000;
    const performanceNow = performance.now();
    const dateNow = Date.now();

    // if timeOrigin isn't available set delta to threshold so it isn't used
    const timeOriginDelta = performance.timeOrigin
      ? Math.abs(performance.timeOrigin + performanceNow - dateNow)
      : threshold;
    const timeOriginIsReliable = timeOriginDelta < threshold;

    // While performance.timing.navigationStart is deprecated in favor of performance.timeOrigin, performance.timeOrigin
    // is not as widely supported. Namely, performance.timeOrigin is undefined in Safari as of writing.
    // Also as of writing, performance.timing is not available in Web Workers in mainstream browsers, so it is not always
    // a valid fallback. In the absence of an initial time provided by the browser, fallback to the current time from the
    // Date API.
    // eslint-disable-next-line deprecation/deprecation
    const navigationStart = performance.timing && performance.timing.navigationStart;
    const hasNavigationStart = typeof navigationStart === 'number';
    // if navigationStart isn't available set delta to threshold so it isn't used
    const navigationStartDelta = hasNavigationStart ? Math.abs(navigationStart + performanceNow - dateNow) : threshold;
    const navigationStartIsReliable = navigationStartDelta < threshold;

    if (timeOriginIsReliable || navigationStartIsReliable) {
      // Use the more reliable time origin
      if (timeOriginDelta <= navigationStartDelta) {
        return performance.timeOrigin;
      } else {
        return navigationStart;
      }
    }
    return dateNow;
  })();

  const TRACEPARENT_REGEXP = new RegExp(
    '^[ \\t]*' + // whitespace
      '([0-9a-f]{32})?' + // trace_id
      '-?([0-9a-f]{16})?' + // span_id
      '-?([01])?' + // sampled
      '[ \\t]*$', // whitespace
  );

  /**
   * Extract transaction context data from a `sentry-trace` header.
   *
   * @param traceparent Traceparent string
   *
   * @returns Object containing data from the header, or undefined if traceparent string is malformed
   */
  function extractTraceparentData(traceparent) {
    const matches = traceparent.match(TRACEPARENT_REGEXP);

    if (!traceparent || !matches) {
      // empty string or no matches is invalid traceparent data
      return undefined;
    }

    let parentSampled;
    if (matches[3] === '1') {
      parentSampled = true;
    } else if (matches[3] === '0') {
      parentSampled = false;
    }

    return {
      traceId: matches[1],
      parentSampled,
      parentSpanId: matches[2],
    };
  }

  /**
   * Creates an envelope.
   * Make sure to always explicitly provide the generic to this function
   * so that the envelope types resolve correctly.
   */
  function createEnvelope(headers, items = []) {
    return [headers, items] ;
  }

  /**
   * Add an item to an envelope.
   * Make sure to always explicitly provide the generic to this function
   * so that the envelope types resolve correctly.
   */
  function addItemToEnvelope(envelope, newItem) {
    const [headers, items] = envelope;
    return [headers, [...items, newItem]] ;
  }

  /**
   * Convenience function to loop through the items and item types of an envelope.
   * (This function was mostly created because working with envelope types is painful at the moment)
   */
  function forEachEnvelopeItem(
    envelope,
    callback,
  ) {
    const envelopeItems = envelope[1];
    envelopeItems.forEach((envelopeItem) => {
      const envelopeItemType = envelopeItem[0].type;
      callback(envelopeItem, envelopeItemType);
    });
  }

  /**
   * Encode a string to UTF8.
   */
  function encodeUTF8(input, textEncoder) {
    const utf8 = textEncoder || new TextEncoder();
    return utf8.encode(input);
  }

  /**
   * Serializes an envelope.
   */
  function serializeEnvelope(envelope, textEncoder) {
    const [envHeaders, items] = envelope;

    // Initially we construct our envelope as a string and only convert to binary chunks if we encounter binary data
    let parts = JSON.stringify(envHeaders);

    function append(next) {
      if (typeof parts === 'string') {
        parts = typeof next === 'string' ? parts + next : [encodeUTF8(parts, textEncoder), next];
      } else {
        parts.push(typeof next === 'string' ? encodeUTF8(next, textEncoder) : next);
      }
    }

    for (const item of items) {
      const [itemHeaders, payload] = item;

      append(`\n${JSON.stringify(itemHeaders)}\n`);

      if (typeof payload === 'string' || payload instanceof Uint8Array) {
        append(payload);
      } else {
        let stringifiedPayload;
        try {
          stringifiedPayload = JSON.stringify(payload);
        } catch (e) {
          // In case, despite all our efforts to keep `payload` circular-dependency-free, `JSON.strinify()` still
          // fails, we try again after normalizing it again with infinite normalization depth. This of course has a
          // performance impact but in this case a performance hit is better than throwing.
          stringifiedPayload = JSON.stringify(normalize(payload));
        }
        append(stringifiedPayload);
      }
    }

    return typeof parts === 'string' ? parts : concatBuffers(parts);
  }

  function concatBuffers(buffers) {
    const totalLength = buffers.reduce((acc, buf) => acc + buf.length, 0);

    const merged = new Uint8Array(totalLength);
    let offset = 0;
    for (const buffer of buffers) {
      merged.set(buffer, offset);
      offset += buffer.length;
    }

    return merged;
  }

  /**
   * Creates attachment envelope items
   */
  function createAttachmentEnvelopeItem(
    attachment,
    textEncoder,
  ) {
    const buffer = typeof attachment.data === 'string' ? encodeUTF8(attachment.data, textEncoder) : attachment.data;

    return [
      dropUndefinedKeys({
        type: 'attachment',
        length: buffer.length,
        filename: attachment.filename,
        content_type: attachment.contentType,
        attachment_type: attachment.attachmentType,
      }),
      buffer,
    ];
  }

  const ITEM_TYPE_TO_DATA_CATEGORY_MAP = {
    session: 'session',
    sessions: 'session',
    attachment: 'attachment',
    transaction: 'transaction',
    event: 'error',
    client_report: 'internal',
    user_report: 'default',
    profile: 'profile',
    replay_event: 'replay',
    replay_recording: 'replay',
  };

  /**
   * Maps the type of an envelope item to a data category.
   */
  function envelopeItemTypeToDataCategory(type) {
    return ITEM_TYPE_TO_DATA_CATEGORY_MAP[type];
  }

  /** Extracts the minimal SDK info from from the metadata or an events */
  function getSdkMetadataForEnvelopeHeader(metadataOrEvent) {
    if (!metadataOrEvent || !metadataOrEvent.sdk) {
      return;
    }
    const { name, version } = metadataOrEvent.sdk;
    return { name, version };
  }

  /**
   * Creates event envelope headers, based on event, sdk info and tunnel
   * Note: This function was extracted from the core package to make it available in Replay
   */
  function createEventEnvelopeHeaders(
    event,
    sdkInfo,
    tunnel,
    dsn,
  ) {
    const dynamicSamplingContext = event.sdkProcessingMetadata && event.sdkProcessingMetadata.dynamicSamplingContext;

    return {
      event_id: event.event_id ,
      sent_at: new Date().toISOString(),
      ...(sdkInfo && { sdk: sdkInfo }),
      ...(!!tunnel && { dsn: dsnToString(dsn) }),
      ...(event.type === 'transaction' &&
        dynamicSamplingContext && {
          trace: dropUndefinedKeys({ ...dynamicSamplingContext }),
        }),
    };
  }

  /**
   * Creates client report envelope
   * @param discarded_events An array of discard events
   * @param dsn A DSN that can be set on the header. Optional.
   */
  function createClientReportEnvelope(
    discarded_events,
    dsn,
    timestamp,
  ) {
    const clientReportItem = [
      { type: 'client_report' },
      {
        timestamp: timestamp || dateTimestampInSeconds(),
        discarded_events,
      },
    ];
    return createEnvelope(dsn ? { dsn } : {}, [clientReportItem]);
  }

  // Intentionally keeping the key broad, as we don't know for sure what rate limit headers get returned from backend

  const DEFAULT_RETRY_AFTER = 60 * 1000; // 60 seconds

  /**
   * Extracts Retry-After value from the request header or returns default value
   * @param header string representation of 'Retry-After' header
   * @param now current unix timestamp
   *
   */
  function parseRetryAfterHeader(header, now = Date.now()) {
    const headerDelay = parseInt(`${header}`, 10);
    if (!isNaN(headerDelay)) {
      return headerDelay * 1000;
    }

    const headerDate = Date.parse(`${header}`);
    if (!isNaN(headerDate)) {
      return headerDate - now;
    }

    return DEFAULT_RETRY_AFTER;
  }

  /**
   * Gets the time that the given category is disabled until for rate limiting.
   * In case no category-specific limit is set but a general rate limit across all categories is active,
   * that time is returned.
   *
   * @return the time in ms that the category is disabled until or 0 if there's no active rate limit.
   */
  function disabledUntil(limits, category) {
    return limits[category] || limits.all || 0;
  }

  /**
   * Checks if a category is rate limited
   */
  function isRateLimited(limits, category, now = Date.now()) {
    return disabledUntil(limits, category) > now;
  }

  /**
   * Update ratelimits from incoming headers.
   *
   * @return the updated RateLimits object.
   */
  function updateRateLimits(
    limits,
    { statusCode, headers },
    now = Date.now(),
  ) {
    const updatedRateLimits = {
      ...limits,
    };

    // "The name is case-insensitive."
    // https://developer.mozilla.org/en-US/docs/Web/API/Headers/get
    const rateLimitHeader = headers && headers['x-sentry-rate-limits'];
    const retryAfterHeader = headers && headers['retry-after'];

    if (rateLimitHeader) {
      /**
       * rate limit headers are of the form
       *     <header>,<header>,..
       * where each <header> is of the form
       *     <retry_after>: <categories>: <scope>: <reason_code>
       * where
       *     <retry_after> is a delay in seconds
       *     <categories> is the event type(s) (error, transaction, etc) being rate limited and is of the form
       *         <category>;<category>;...
       *     <scope> is what's being limited (org, project, or key) - ignored by SDK
       *     <reason_code> is an arbitrary string like "org_quota" - ignored by SDK
       */
      for (const limit of rateLimitHeader.trim().split(',')) {
        const [retryAfter, categories] = limit.split(':', 2);
        const headerDelay = parseInt(retryAfter, 10);
        const delay = (!isNaN(headerDelay) ? headerDelay : 60) * 1000; // 60sec default
        if (!categories) {
          updatedRateLimits.all = now + delay;
        } else {
          for (const category of categories.split(';')) {
            updatedRateLimits[category] = now + delay;
          }
        }
      }
    } else if (retryAfterHeader) {
      updatedRateLimits.all = now + parseRetryAfterHeader(retryAfterHeader, now);
    } else if (statusCode === 429) {
      updatedRateLimits.all = now + 60 * 1000;
    }

    return updatedRateLimits;
  }

  const BAGGAGE_HEADER_NAME = 'baggage';

  const SENTRY_BAGGAGE_KEY_PREFIX = 'sentry-';

  const SENTRY_BAGGAGE_KEY_PREFIX_REGEX = /^sentry-/;

  /**
   * Max length of a serialized baggage string
   *
   * https://www.w3.org/TR/baggage/#limits
   */
  const MAX_BAGGAGE_STRING_LENGTH = 8192;

  /**
   * Takes a baggage header and turns it into Dynamic Sampling Context, by extracting all the "sentry-" prefixed values
   * from it.
   *
   * @param baggageHeader A very bread definition of a baggage header as it might appear in various frameworks.
   * @returns The Dynamic Sampling Context that was found on `baggageHeader`, if there was any, `undefined` otherwise.
   */
  function baggageHeaderToDynamicSamplingContext(
    // Very liberal definition of what any incoming header might look like
    baggageHeader,
  ) {
    if (!isString(baggageHeader) && !Array.isArray(baggageHeader)) {
      return undefined;
    }

    // Intermediary object to store baggage key value pairs of incoming baggage headers on.
    // It is later used to read Sentry-DSC-values from.
    let baggageObject = {};

    if (Array.isArray(baggageHeader)) {
      // Combine all baggage headers into one object containing the baggage values so we can later read the Sentry-DSC-values from it
      baggageObject = baggageHeader.reduce((acc, curr) => {
        const currBaggageObject = baggageHeaderToObject(curr);
        return {
          ...acc,
          ...currBaggageObject,
        };
      }, {});
    } else {
      // Return undefined if baggage header is an empty string (technically an empty baggage header is not spec conform but
      // this is how we choose to handle it)
      if (!baggageHeader) {
        return undefined;
      }

      baggageObject = baggageHeaderToObject(baggageHeader);
    }

    // Read all "sentry-" prefixed values out of the baggage object and put it onto a dynamic sampling context object.
    const dynamicSamplingContext = Object.entries(baggageObject).reduce((acc, [key, value]) => {
      if (key.match(SENTRY_BAGGAGE_KEY_PREFIX_REGEX)) {
        const nonPrefixedKey = key.slice(SENTRY_BAGGAGE_KEY_PREFIX.length);
        acc[nonPrefixedKey] = value;
      }
      return acc;
    }, {});

    // Only return a dynamic sampling context object if there are keys in it.
    // A keyless object means there were no sentry values on the header, which means that there is no DSC.
    if (Object.keys(dynamicSamplingContext).length > 0) {
      return dynamicSamplingContext ;
    } else {
      return undefined;
    }
  }

  /**
   * Turns a Dynamic Sampling Object into a baggage header by prefixing all the keys on the object with "sentry-".
   *
   * @param dynamicSamplingContext The Dynamic Sampling Context to turn into a header. For convenience and compatibility
   * with the `getDynamicSamplingContext` method on the Transaction class ,this argument can also be `undefined`. If it is
   * `undefined` the function will return `undefined`.
   * @returns a baggage header, created from `dynamicSamplingContext`, or `undefined` either if `dynamicSamplingContext`
   * was `undefined`, or if `dynamicSamplingContext` didn't contain any values.
   */
  function dynamicSamplingContextToSentryBaggageHeader(
    // this also takes undefined for convenience and bundle size in other places
    dynamicSamplingContext,
  ) {
    // Prefix all DSC keys with "sentry-" and put them into a new object
    const sentryPrefixedDSC = Object.entries(dynamicSamplingContext).reduce(
      (acc, [dscKey, dscValue]) => {
        if (dscValue) {
          acc[`${SENTRY_BAGGAGE_KEY_PREFIX}${dscKey}`] = dscValue;
        }
        return acc;
      },
      {},
    );

    return objectToBaggageHeader(sentryPrefixedDSC);
  }

  /**
   * Will parse a baggage header, which is a simple key-value map, into a flat object.
   *
   * @param baggageHeader The baggage header to parse.
   * @returns a flat object containing all the key-value pairs from `baggageHeader`.
   */
  function baggageHeaderToObject(baggageHeader) {
    return baggageHeader
      .split(',')
      .map(baggageEntry => baggageEntry.split('=').map(keyOrValue => decodeURIComponent(keyOrValue.trim())))
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});
  }

  /**
   * Turns a flat object (key-value pairs) into a baggage header, which is also just key-value pairs.
   *
   * @param object The object to turn into a baggage header.
   * @returns a baggage header string, or `undefined` if the object didn't have any values, since an empty baggage header
   * is not spec compliant.
   */
  function objectToBaggageHeader(object) {
    if (Object.keys(object).length === 0) {
      // An empty baggage header is not spec compliant: We return undefined.
      return undefined;
    }

    return Object.entries(object).reduce((baggageHeader, [objectKey, objectValue], currentIndex) => {
      const baggageEntry = `${encodeURIComponent(objectKey)}=${encodeURIComponent(objectValue)}`;
      const newBaggageHeader = currentIndex === 0 ? baggageEntry : `${baggageHeader},${baggageEntry}`;
      if (newBaggageHeader.length > MAX_BAGGAGE_STRING_LENGTH) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
          logger.warn(
            `Not adding key: ${objectKey} with val: ${objectValue} to baggage header due to exceeding baggage size limits.`,
          );
        return baggageHeader;
      } else {
        return newBaggageHeader;
      }
    }, '');
  }

  /**
   * Creates a new `Session` object by setting certain default parameters. If optional @param context
   * is passed, the passed properties are applied to the session object.
   *
   * @param context (optional) additional properties to be applied to the returned session object
   *
   * @returns a new `Session` object
   */
  function makeSession$1(context) {
    // Both timestamp and started are in seconds since the UNIX epoch.
    const startingTime = timestampInSeconds();

    const session = {
      sid: uuid4(),
      init: true,
      timestamp: startingTime,
      started: startingTime,
      duration: 0,
      status: 'ok',
      errors: 0,
      ignoreDuration: false,
      toJSON: () => sessionToJSON(session),
    };

    if (context) {
      updateSession(session, context);
    }

    return session;
  }

  /**
   * Updates a session object with the properties passed in the context.
   *
   * Note that this function mutates the passed object and returns void.
   * (Had to do this instead of returning a new and updated session because closing and sending a session
   * makes an update to the session after it was passed to the sending logic.
   * @see BaseClient.captureSession )
   *
   * @param session the `Session` to update
   * @param context the `SessionContext` holding the properties that should be updated in @param session
   */
  // eslint-disable-next-line complexity
  function updateSession(session, context = {}) {
    if (context.user) {
      if (!session.ipAddress && context.user.ip_address) {
        session.ipAddress = context.user.ip_address;
      }

      if (!session.did && !context.did) {
        session.did = context.user.id || context.user.email || context.user.username;
      }
    }

    session.timestamp = context.timestamp || timestampInSeconds();

    if (context.ignoreDuration) {
      session.ignoreDuration = context.ignoreDuration;
    }
    if (context.sid) {
      // Good enough uuid validation. — Kamil
      session.sid = context.sid.length === 32 ? context.sid : uuid4();
    }
    if (context.init !== undefined) {
      session.init = context.init;
    }
    if (!session.did && context.did) {
      session.did = `${context.did}`;
    }
    if (typeof context.started === 'number') {
      session.started = context.started;
    }
    if (session.ignoreDuration) {
      session.duration = undefined;
    } else if (typeof context.duration === 'number') {
      session.duration = context.duration;
    } else {
      const duration = session.timestamp - session.started;
      session.duration = duration >= 0 ? duration : 0;
    }
    if (context.release) {
      session.release = context.release;
    }
    if (context.environment) {
      session.environment = context.environment;
    }
    if (!session.ipAddress && context.ipAddress) {
      session.ipAddress = context.ipAddress;
    }
    if (!session.userAgent && context.userAgent) {
      session.userAgent = context.userAgent;
    }
    if (typeof context.errors === 'number') {
      session.errors = context.errors;
    }
    if (context.status) {
      session.status = context.status;
    }
  }

  /**
   * Closes a session by setting its status and updating the session object with it.
   * Internally calls `updateSession` to update the passed session object.
   *
   * Note that this function mutates the passed session (@see updateSession for explanation).
   *
   * @param session the `Session` object to be closed
   * @param status the `SessionStatus` with which the session was closed. If you don't pass a status,
   *               this function will keep the previously set status, unless it was `'ok'` in which case
   *               it is changed to `'exited'`.
   */
  function closeSession(session, status) {
    let context = {};
    if (status) {
      context = { status };
    } else if (session.status === 'ok') {
      context = { status: 'exited' };
    }

    updateSession(session, context);
  }

  /**
   * Serializes a passed session object to a JSON object with a slightly different structure.
   * This is necessary because the Sentry backend requires a slightly different schema of a session
   * than the one the JS SDKs use internally.
   *
   * @param session the session to be converted
   *
   * @returns a JSON object of the passed session
   */
  function sessionToJSON(session) {
    return dropUndefinedKeys({
      sid: `${session.sid}`,
      init: session.init,
      // Make sure that sec is converted to ms for date constructor
      started: new Date(session.started * 1000).toISOString(),
      timestamp: new Date(session.timestamp * 1000).toISOString(),
      status: session.status,
      errors: session.errors,
      did: typeof session.did === 'number' || typeof session.did === 'string' ? `${session.did}` : undefined,
      duration: session.duration,
      attrs: {
        release: session.release,
        environment: session.environment,
        ip_address: session.ipAddress,
        user_agent: session.userAgent,
      },
    });
  }

  /**
   * Default value for maximum number of breadcrumbs added to an event.
   */
  const DEFAULT_MAX_BREADCRUMBS = 100;

  /**
   * Holds additional event information. {@link Scope.applyToEvent} will be
   * called by the client before an event will be sent.
   */
  class Scope  {
    /** Flag if notifying is happening. */

    /** Callback for client to receive scope changes. */

    /** Callback list that will be called after {@link applyToEvent}. */

    /** Array of breadcrumbs. */

    /** User */

    /** Tags */

    /** Extra */

    /** Contexts */

    /** Attachments */

    /**
     * A place to stash data which is needed at some point in the SDK's event processing pipeline but which shouldn't get
     * sent to Sentry
     */

    /** Fingerprint */

    /** Severity */
    // eslint-disable-next-line deprecation/deprecation

    /** Transaction Name */

    /** Span */

    /** Session */

    /** Request Mode Session Status */

    // NOTE: Any field which gets added here should get added not only to the constructor but also to the `clone` method.

     constructor() {
      this._notifyingListeners = false;
      this._scopeListeners = [];
      this._eventProcessors = [];
      this._breadcrumbs = [];
      this._attachments = [];
      this._user = {};
      this._tags = {};
      this._extra = {};
      this._contexts = {};
      this._sdkProcessingMetadata = {};
    }

    /**
     * Inherit values from the parent scope.
     * @param scope to clone.
     */
     static clone(scope) {
      const newScope = new Scope();
      if (scope) {
        newScope._breadcrumbs = [...scope._breadcrumbs];
        newScope._tags = { ...scope._tags };
        newScope._extra = { ...scope._extra };
        newScope._contexts = { ...scope._contexts };
        newScope._user = scope._user;
        newScope._level = scope._level;
        newScope._span = scope._span;
        newScope._session = scope._session;
        newScope._transactionName = scope._transactionName;
        newScope._fingerprint = scope._fingerprint;
        newScope._eventProcessors = [...scope._eventProcessors];
        newScope._requestSession = scope._requestSession;
        newScope._attachments = [...scope._attachments];
        newScope._sdkProcessingMetadata = { ...scope._sdkProcessingMetadata };
      }
      return newScope;
    }

    /**
     * Add internal on change listener. Used for sub SDKs that need to store the scope.
     * @hidden
     */
     addScopeListener(callback) {
      this._scopeListeners.push(callback);
    }

    /**
     * @inheritDoc
     */
     addEventProcessor(callback) {
      this._eventProcessors.push(callback);
      return this;
    }

    /**
     * @inheritDoc
     */
     setUser(user) {
      this._user = user || {};
      if (this._session) {
        updateSession(this._session, { user });
      }
      this._notifyScopeListeners();
      return this;
    }

    /**
     * @inheritDoc
     */
     getUser() {
      return this._user;
    }

    /**
     * @inheritDoc
     */
     getRequestSession() {
      return this._requestSession;
    }

    /**
     * @inheritDoc
     */
     setRequestSession(requestSession) {
      this._requestSession = requestSession;
      return this;
    }

    /**
     * @inheritDoc
     */
     setTags(tags) {
      this._tags = {
        ...this._tags,
        ...tags,
      };
      this._notifyScopeListeners();
      return this;
    }

    /**
     * @inheritDoc
     */
     setTag(key, value) {
      this._tags = { ...this._tags, [key]: value };
      this._notifyScopeListeners();
      return this;
    }

    /**
     * @inheritDoc
     */
     setExtras(extras) {
      this._extra = {
        ...this._extra,
        ...extras,
      };
      this._notifyScopeListeners();
      return this;
    }

    /**
     * @inheritDoc
     */
     setExtra(key, extra) {
      this._extra = { ...this._extra, [key]: extra };
      this._notifyScopeListeners();
      return this;
    }

    /**
     * @inheritDoc
     */
     setFingerprint(fingerprint) {
      this._fingerprint = fingerprint;
      this._notifyScopeListeners();
      return this;
    }

    /**
     * @inheritDoc
     */
     setLevel(
      // eslint-disable-next-line deprecation/deprecation
      level,
    ) {
      this._level = level;
      this._notifyScopeListeners();
      return this;
    }

    /**
     * @inheritDoc
     */
     setTransactionName(name) {
      this._transactionName = name;
      this._notifyScopeListeners();
      return this;
    }

    /**
     * @inheritDoc
     */
     setContext(key, context) {
      if (context === null) {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete this._contexts[key];
      } else {
        this._contexts[key] = context;
      }

      this._notifyScopeListeners();
      return this;
    }

    /**
     * @inheritDoc
     */
     setSpan(span) {
      this._span = span;
      this._notifyScopeListeners();
      return this;
    }

    /**
     * @inheritDoc
     */
     getSpan() {
      return this._span;
    }

    /**
     * @inheritDoc
     */
     getTransaction() {
      // Often, this span (if it exists at all) will be a transaction, but it's not guaranteed to be. Regardless, it will
      // have a pointer to the currently-active transaction.
      const span = this.getSpan();
      return span && span.transaction;
    }

    /**
     * @inheritDoc
     */
     setSession(session) {
      if (!session) {
        delete this._session;
      } else {
        this._session = session;
      }
      this._notifyScopeListeners();
      return this;
    }

    /**
     * @inheritDoc
     */
     getSession() {
      return this._session;
    }

    /**
     * @inheritDoc
     */
     update(captureContext) {
      if (!captureContext) {
        return this;
      }

      if (typeof captureContext === 'function') {
        const updatedScope = (captureContext )(this);
        return updatedScope instanceof Scope ? updatedScope : this;
      }

      if (captureContext instanceof Scope) {
        this._tags = { ...this._tags, ...captureContext._tags };
        this._extra = { ...this._extra, ...captureContext._extra };
        this._contexts = { ...this._contexts, ...captureContext._contexts };
        if (captureContext._user && Object.keys(captureContext._user).length) {
          this._user = captureContext._user;
        }
        if (captureContext._level) {
          this._level = captureContext._level;
        }
        if (captureContext._fingerprint) {
          this._fingerprint = captureContext._fingerprint;
        }
        if (captureContext._requestSession) {
          this._requestSession = captureContext._requestSession;
        }
      } else if (isPlainObject(captureContext)) {
        // eslint-disable-next-line no-param-reassign
        captureContext = captureContext ;
        this._tags = { ...this._tags, ...captureContext.tags };
        this._extra = { ...this._extra, ...captureContext.extra };
        this._contexts = { ...this._contexts, ...captureContext.contexts };
        if (captureContext.user) {
          this._user = captureContext.user;
        }
        if (captureContext.level) {
          this._level = captureContext.level;
        }
        if (captureContext.fingerprint) {
          this._fingerprint = captureContext.fingerprint;
        }
        if (captureContext.requestSession) {
          this._requestSession = captureContext.requestSession;
        }
      }

      return this;
    }

    /**
     * @inheritDoc
     */
     clear() {
      this._breadcrumbs = [];
      this._tags = {};
      this._extra = {};
      this._user = {};
      this._contexts = {};
      this._level = undefined;
      this._transactionName = undefined;
      this._fingerprint = undefined;
      this._requestSession = undefined;
      this._span = undefined;
      this._session = undefined;
      this._notifyScopeListeners();
      this._attachments = [];
      return this;
    }

    /**
     * @inheritDoc
     */
     addBreadcrumb(breadcrumb, maxBreadcrumbs) {
      const maxCrumbs = typeof maxBreadcrumbs === 'number' ? maxBreadcrumbs : DEFAULT_MAX_BREADCRUMBS;

      // No data has been changed, so don't notify scope listeners
      if (maxCrumbs <= 0) {
        return this;
      }

      const mergedBreadcrumb = {
        timestamp: dateTimestampInSeconds(),
        ...breadcrumb,
      };
      this._breadcrumbs = [...this._breadcrumbs, mergedBreadcrumb].slice(-maxCrumbs);
      this._notifyScopeListeners();

      return this;
    }

    /**
     * @inheritDoc
     */
     getLastBreadcrumb() {
      return this._breadcrumbs[this._breadcrumbs.length - 1];
    }

    /**
     * @inheritDoc
     */
     clearBreadcrumbs() {
      this._breadcrumbs = [];
      this._notifyScopeListeners();
      return this;
    }

    /**
     * @inheritDoc
     */
     addAttachment(attachment) {
      this._attachments.push(attachment);
      return this;
    }

    /**
     * @inheritDoc
     */
     getAttachments() {
      return this._attachments;
    }

    /**
     * @inheritDoc
     */
     clearAttachments() {
      this._attachments = [];
      return this;
    }

    /**
     * Applies data from the scope to the event and runs all event processors on it.
     *
     * @param event Event
     * @param hint Object containing additional information about the original exception, for use by the event processors.
     * @hidden
     */
     applyToEvent(event, hint = {}) {
      if (this._extra && Object.keys(this._extra).length) {
        event.extra = { ...this._extra, ...event.extra };
      }
      if (this._tags && Object.keys(this._tags).length) {
        event.tags = { ...this._tags, ...event.tags };
      }
      if (this._user && Object.keys(this._user).length) {
        event.user = { ...this._user, ...event.user };
      }
      if (this._contexts && Object.keys(this._contexts).length) {
        event.contexts = { ...this._contexts, ...event.contexts };
      }
      if (this._level) {
        event.level = this._level;
      }
      if (this._transactionName) {
        event.transaction = this._transactionName;
      }

      // We want to set the trace context for normal events only if there isn't already
      // a trace context on the event. There is a product feature in place where we link
      // errors with transaction and it relies on that.
      if (this._span) {
        event.contexts = { trace: this._span.getTraceContext(), ...event.contexts };
        const transactionName = this._span.transaction && this._span.transaction.name;
        if (transactionName) {
          event.tags = { transaction: transactionName, ...event.tags };
        }
      }

      this._applyFingerprint(event);

      event.breadcrumbs = [...(event.breadcrumbs || []), ...this._breadcrumbs];
      event.breadcrumbs = event.breadcrumbs.length > 0 ? event.breadcrumbs : undefined;

      event.sdkProcessingMetadata = { ...event.sdkProcessingMetadata, ...this._sdkProcessingMetadata };

      return this._notifyEventProcessors([...getGlobalEventProcessors(), ...this._eventProcessors], event, hint);
    }

    /**
     * Add data which will be accessible during event processing but won't get sent to Sentry
     */
     setSDKProcessingMetadata(newData) {
      this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata, ...newData };

      return this;
    }

    /**
     * This will be called after {@link applyToEvent} is finished.
     */
     _notifyEventProcessors(
      processors,
      event,
      hint,
      index = 0,
    ) {
      return new SyncPromise((resolve, reject) => {
        const processor = processors[index];
        if (event === null || typeof processor !== 'function') {
          resolve(event);
        } else {
          const result = processor({ ...event }, hint) ;

          (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
            processor.id &&
            result === null &&
            logger.log(`Event processor "${processor.id}" dropped event`);

          if (isThenable(result)) {
            void result
              .then(final => this._notifyEventProcessors(processors, final, hint, index + 1).then(resolve))
              .then(null, reject);
          } else {
            void this._notifyEventProcessors(processors, result, hint, index + 1)
              .then(resolve)
              .then(null, reject);
          }
        }
      });
    }

    /**
     * This will be called on every set call.
     */
     _notifyScopeListeners() {
      // We need this check for this._notifyingListeners to be able to work on scope during updates
      // If this check is not here we'll produce endless recursion when something is done with the scope
      // during the callback.
      if (!this._notifyingListeners) {
        this._notifyingListeners = true;
        this._scopeListeners.forEach(callback => {
          callback(this);
        });
        this._notifyingListeners = false;
      }
    }

    /**
     * Applies fingerprint from the scope to the event if there's one,
     * uses message if there's one instead or get rid of empty fingerprint
     */
     _applyFingerprint(event) {
      // Make sure it's an array first and we actually have something in place
      event.fingerprint = event.fingerprint ? arrayify(event.fingerprint) : [];

      // If we have something on the scope, then merge it with event
      if (this._fingerprint) {
        event.fingerprint = event.fingerprint.concat(this._fingerprint);
      }

      // If we have no data at all, remove empty array default
      if (event.fingerprint && !event.fingerprint.length) {
        delete event.fingerprint;
      }
    }
  }

  /**
   * Returns the global event processors.
   */
  function getGlobalEventProcessors() {
    return getGlobalSingleton('globalEventProcessors', () => []);
  }

  /**
   * Add a EventProcessor to be kept globally.
   * @param callback EventProcessor to add
   */
  function addGlobalEventProcessor(callback) {
    getGlobalEventProcessors().push(callback);
  }

  /**
   * API compatibility version of this hub.
   *
   * WARNING: This number should only be increased when the global interface
   * changes and new methods are introduced.
   *
   * @hidden
   */
  const API_VERSION = 4;

  /**
   * Default maximum number of breadcrumbs added to an event. Can be overwritten
   * with {@link Options.maxBreadcrumbs}.
   */
  const DEFAULT_BREADCRUMBS = 100;

  /**
   * A layer in the process stack.
   * @hidden
   */

  /**
   * @inheritDoc
   */
  class Hub  {
    /** Is a {@link Layer}[] containing the client and scope */
      __init() {this._stack = [{}];}

    /** Contains the last event id of a captured event.  */

    /**
     * Creates a new instance of the hub, will push one {@link Layer} into the
     * internal stack on creation.
     *
     * @param client bound to the hub.
     * @param scope bound to the hub.
     * @param version number, higher number means higher priority.
     */
     constructor(client, scope = new Scope(),   _version = API_VERSION) {this._version = _version;Hub.prototype.__init.call(this);
      this.getStackTop().scope = scope;
      if (client) {
        this.bindClient(client);
      }
    }

    /**
     * @inheritDoc
     */
     isOlderThan(version) {
      return this._version < version;
    }

    /**
     * @inheritDoc
     */
     bindClient(client) {
      const top = this.getStackTop();
      top.client = client;
      if (client && client.setupIntegrations) {
        client.setupIntegrations();
      }
    }

    /**
     * @inheritDoc
     */
     pushScope() {
      // We want to clone the content of prev scope
      const scope = Scope.clone(this.getScope());
      this.getStack().push({
        client: this.getClient(),
        scope,
      });
      return scope;
    }

    /**
     * @inheritDoc
     */
     popScope() {
      if (this.getStack().length <= 1) return false;
      return !!this.getStack().pop();
    }

    /**
     * @inheritDoc
     */
     withScope(callback) {
      const scope = this.pushScope();
      try {
        callback(scope);
      } finally {
        this.popScope();
      }
    }

    /**
     * @inheritDoc
     */
     getClient() {
      return this.getStackTop().client ;
    }

    /** Returns the scope of the top stack. */
     getScope() {
      return this.getStackTop().scope;
    }

    /** Returns the scope stack for domains or the process. */
     getStack() {
      return this._stack;
    }

    /** Returns the topmost scope layer in the order domain > local > process. */
     getStackTop() {
      return this._stack[this._stack.length - 1];
    }

    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
     captureException(exception, hint) {
      const eventId = (this._lastEventId = hint && hint.event_id ? hint.event_id : uuid4());
      const syntheticException = new Error('Sentry syntheticException');
      this._withClient((client, scope) => {
        client.captureException(
          exception,
          {
            originalException: exception,
            syntheticException,
            ...hint,
            event_id: eventId,
          },
          scope,
        );
      });
      return eventId;
    }

    /**
     * @inheritDoc
     */
     captureMessage(
      message,
      // eslint-disable-next-line deprecation/deprecation
      level,
      hint,
    ) {
      const eventId = (this._lastEventId = hint && hint.event_id ? hint.event_id : uuid4());
      const syntheticException = new Error(message);
      this._withClient((client, scope) => {
        client.captureMessage(
          message,
          level,
          {
            originalException: message,
            syntheticException,
            ...hint,
            event_id: eventId,
          },
          scope,
        );
      });
      return eventId;
    }

    /**
     * @inheritDoc
     */
     captureEvent(event, hint) {
      const eventId = hint && hint.event_id ? hint.event_id : uuid4();
      if (!event.type) {
        this._lastEventId = eventId;
      }

      this._withClient((client, scope) => {
        client.captureEvent(event, { ...hint, event_id: eventId }, scope);
      });
      return eventId;
    }

    /**
     * @inheritDoc
     */
     lastEventId() {
      return this._lastEventId;
    }

    /**
     * @inheritDoc
     */
     addBreadcrumb(breadcrumb, hint) {
      const { scope, client } = this.getStackTop();

      if (!scope || !client) return;

      const { beforeBreadcrumb = null, maxBreadcrumbs = DEFAULT_BREADCRUMBS } =
        (client.getOptions && client.getOptions()) || {};

      if (maxBreadcrumbs <= 0) return;

      const timestamp = dateTimestampInSeconds();
      const mergedBreadcrumb = { timestamp, ...breadcrumb };
      const finalBreadcrumb = beforeBreadcrumb
        ? (consoleSandbox(() => beforeBreadcrumb(mergedBreadcrumb, hint)) )
        : mergedBreadcrumb;

      if (finalBreadcrumb === null) return;

      scope.addBreadcrumb(finalBreadcrumb, maxBreadcrumbs);
    }

    /**
     * @inheritDoc
     */
     setUser(user) {
      const scope = this.getScope();
      if (scope) scope.setUser(user);
    }

    /**
     * @inheritDoc
     */
     setTags(tags) {
      const scope = this.getScope();
      if (scope) scope.setTags(tags);
    }

    /**
     * @inheritDoc
     */
     setExtras(extras) {
      const scope = this.getScope();
      if (scope) scope.setExtras(extras);
    }

    /**
     * @inheritDoc
     */
     setTag(key, value) {
      const scope = this.getScope();
      if (scope) scope.setTag(key, value);
    }

    /**
     * @inheritDoc
     */
     setExtra(key, extra) {
      const scope = this.getScope();
      if (scope) scope.setExtra(key, extra);
    }

    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
     setContext(name, context) {
      const scope = this.getScope();
      if (scope) scope.setContext(name, context);
    }

    /**
     * @inheritDoc
     */
     configureScope(callback) {
      const { scope, client } = this.getStackTop();
      if (scope && client) {
        callback(scope);
      }
    }

    /**
     * @inheritDoc
     */
     run(callback) {
      const oldHub = makeMain(this);
      try {
        callback(this);
      } finally {
        makeMain(oldHub);
      }
    }

    /**
     * @inheritDoc
     */
     getIntegration(integration) {
      const client = this.getClient();
      if (!client) return null;
      try {
        return client.getIntegration(integration);
      } catch (_oO) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.warn(`Cannot retrieve integration ${integration.id} from the current Hub`);
        return null;
      }
    }

    /**
     * @inheritDoc
     */
     startTransaction(context, customSamplingContext) {
      return this._callExtensionMethod('startTransaction', context, customSamplingContext);
    }

    /**
     * @inheritDoc
     */
     traceHeaders() {
      return this._callExtensionMethod('traceHeaders');
    }

    /**
     * @inheritDoc
     */
     captureSession(endSession = false) {
      // both send the update and pull the session from the scope
      if (endSession) {
        return this.endSession();
      }

      // only send the update
      this._sendSessionUpdate();
    }

    /**
     * @inheritDoc
     */
     endSession() {
      const layer = this.getStackTop();
      const scope = layer && layer.scope;
      const session = scope && scope.getSession();
      if (session) {
        closeSession(session);
      }
      this._sendSessionUpdate();

      // the session is over; take it off of the scope
      if (scope) {
        scope.setSession();
      }
    }

    /**
     * @inheritDoc
     */
     startSession(context) {
      const { scope, client } = this.getStackTop();
      const { release, environment } = (client && client.getOptions()) || {};

      // Will fetch userAgent if called from browser sdk
      const { userAgent } = GLOBAL_OBJ.navigator || {};

      const session = makeSession$1({
        release,
        environment,
        ...(scope && { user: scope.getUser() }),
        ...(userAgent && { userAgent }),
        ...context,
      });

      if (scope) {
        // End existing session if there's one
        const currentSession = scope.getSession && scope.getSession();
        if (currentSession && currentSession.status === 'ok') {
          updateSession(currentSession, { status: 'exited' });
        }
        this.endSession();

        // Afterwards we set the new session on the scope
        scope.setSession(session);
      }

      return session;
    }

    /**
     * Returns if default PII should be sent to Sentry and propagated in ourgoing requests
     * when Tracing is used.
     */
     shouldSendDefaultPii() {
      const client = this.getClient();
      const options = client && client.getOptions();
      return Boolean(options && options.sendDefaultPii);
    }

    /**
     * Sends the current Session on the scope
     */
     _sendSessionUpdate() {
      const { scope, client } = this.getStackTop();
      if (!scope) return;

      const session = scope.getSession();
      if (session) {
        if (client && client.captureSession) {
          client.captureSession(session);
        }
      }
    }

    /**
     * Internal helper function to call a method on the top client if it exists.
     *
     * @param method The method to call on the client.
     * @param args Arguments to pass to the client function.
     */
     _withClient(callback) {
      const { scope, client } = this.getStackTop();
      if (client) {
        callback(client, scope);
      }
    }

    /**
     * Calls global extension method and binding current instance to the function call
     */
    // @ts-ignore Function lacks ending return statement and return type does not include 'undefined'. ts(2366)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
     _callExtensionMethod(method, ...args) {
      const carrier = getMainCarrier();
      const sentry = carrier.__SENTRY__;
      if (sentry && sentry.extensions && typeof sentry.extensions[method] === 'function') {
        return sentry.extensions[method].apply(this, args);
      }
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.warn(`Extension method ${method} couldn't be found, doing nothing.`);
    }
  }

  /**
   * Returns the global shim registry.
   *
   * FIXME: This function is problematic, because despite always returning a valid Carrier,
   * it has an optional `__SENTRY__` property, which then in turn requires us to always perform an unnecessary check
   * at the call-site. We always access the carrier through this function, so we can guarantee that `__SENTRY__` is there.
   **/
  function getMainCarrier() {
    GLOBAL_OBJ.__SENTRY__ = GLOBAL_OBJ.__SENTRY__ || {
      extensions: {},
      hub: undefined,
    };
    return GLOBAL_OBJ;
  }

  /**
   * Replaces the current main hub with the passed one on the global object
   *
   * @returns The old replaced hub
   */
  function makeMain(hub) {
    const registry = getMainCarrier();
    const oldHub = getHubFromCarrier(registry);
    setHubOnCarrier(registry, hub);
    return oldHub;
  }

  /**
   * Returns the default hub instance.
   *
   * If a hub is already registered in the global carrier but this module
   * contains a more recent version, it replaces the registered version.
   * Otherwise, the currently registered hub will be returned.
   */
  function getCurrentHub() {
    // Get main carrier (global for every environment)
    const registry = getMainCarrier();

    // If there's no hub, or its an old API, assign a new one
    if (!hasHubOnCarrier(registry) || getHubFromCarrier(registry).isOlderThan(API_VERSION)) {
      setHubOnCarrier(registry, new Hub());
    }

    // Prefer domains over global if they are there (applicable only to Node environment)
    if (isNodeEnv()) {
      return getHubFromActiveDomain(registry);
    }
    // Return hub that lives on a global object
    return getHubFromCarrier(registry);
  }

  /**
   * Try to read the hub from an active domain, and fallback to the registry if one doesn't exist
   * @returns discovered hub
   */
  function getHubFromActiveDomain(registry) {
    try {
      const sentry = getMainCarrier().__SENTRY__;
      const activeDomain = sentry && sentry.extensions && sentry.extensions.domain && sentry.extensions.domain.active;

      // If there's no active domain, just return global hub
      if (!activeDomain) {
        return getHubFromCarrier(registry);
      }

      // If there's no hub on current domain, or it's an old API, assign a new one
      if (!hasHubOnCarrier(activeDomain) || getHubFromCarrier(activeDomain).isOlderThan(API_VERSION)) {
        const registryHubTopStack = getHubFromCarrier(registry).getStackTop();
        setHubOnCarrier(activeDomain, new Hub(registryHubTopStack.client, Scope.clone(registryHubTopStack.scope)));
      }

      // Return hub that lives on a domain
      return getHubFromCarrier(activeDomain);
    } catch (_Oo) {
      // Return hub that lives on a global object
      return getHubFromCarrier(registry);
    }
  }

  /**
   * This will tell whether a carrier has a hub on it or not
   * @param carrier object
   */
  function hasHubOnCarrier(carrier) {
    return !!(carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub);
  }

  /**
   * This will create a new {@link Hub} and add to the passed object on
   * __SENTRY__.hub.
   * @param carrier object
   * @hidden
   */
  function getHubFromCarrier(carrier) {
    return getGlobalSingleton('hub', () => new Hub(), carrier);
  }

  /**
   * This will set passed {@link Hub} on the passed object's __SENTRY__.hub attribute
   * @param carrier object
   * @param hub Hub
   * @returns A boolean indicating success or failure
   */
  function setHubOnCarrier(carrier, hub) {
    if (!carrier) return false;
    const __SENTRY__ = (carrier.__SENTRY__ = carrier.__SENTRY__ || {});
    __SENTRY__.hub = hub;
    return true;
  }

  // Note: All functions in this file are typed with a return value of `ReturnType<Hub[HUB_FUNCTION]>`,
  // where HUB_FUNCTION is some method on the Hub class.
  //
  // This is done to make sure the top level SDK methods stay in sync with the hub methods.
  // Although every method here has an explicit return type, some of them (that map to void returns) do not
  // contain `return` keywords. This is done to save on bundle size, as `return` is not minifiable.

  /**
   * Captures an exception event and sends it to Sentry.
   *
   * @param exception An exception-like object.
   * @param captureContext Additional scope data to apply to exception event.
   * @returns The generated eventId.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  function captureException(exception, captureContext) {
    return getCurrentHub().captureException(exception, { captureContext });
  }

  /**
   * Records a new breadcrumb which will be attached to future events.
   *
   * Breadcrumbs will be added to subsequent events to provide more context on
   * user's actions prior to an error or crash.
   *
   * @param breadcrumb The breadcrumb to record.
   */
  function addBreadcrumb(breadcrumb) {
    getCurrentHub().addBreadcrumb(breadcrumb);
  }

  /**
   * Sets context data with the given name.
   * @param name of the context
   * @param context Any kind of data. This data will be normalized.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function setContext(name, context) {
    getCurrentHub().setContext(name, context);
  }

  /**
   * Updates user context information for future events.
   *
   * @param user User context object to be set in the current context. Pass `null` to unset the user.
   */
  function setUser(user) {
    getCurrentHub().setUser(user);
  }

  /**
   * Creates a new scope with and executes the given operation within.
   * The scope is automatically removed once the operation
   * finishes or throws.
   *
   * This is essentially a convenience function for:
   *
   *     pushScope();
   *     callback();
   *     popScope();
   *
   * @param callback that will be enclosed into push/popScope.
   */
  function withScope(callback) {
    getCurrentHub().withScope(callback);
  }

  const SENTRY_API_VERSION = '7';

  /** Returns the prefix to construct Sentry ingestion API endpoints. */
  function getBaseApiEndpoint(dsn) {
    const protocol = dsn.protocol ? `${dsn.protocol}:` : '';
    const port = dsn.port ? `:${dsn.port}` : '';
    return `${protocol}//${dsn.host}${port}${dsn.path ? `/${dsn.path}` : ''}/api/`;
  }

  /** Returns the ingest API endpoint for target. */
  function _getIngestEndpoint(dsn) {
    return `${getBaseApiEndpoint(dsn)}${dsn.projectId}/envelope/`;
  }

  /** Returns a URL-encoded string with auth config suitable for a query string. */
  function _encodedAuth(dsn, sdkInfo) {
    return urlEncode({
      // We send only the minimum set of required information. See
      // https://github.com/getsentry/sentry-javascript/issues/2572.
      sentry_key: dsn.publicKey,
      sentry_version: SENTRY_API_VERSION,
      ...(sdkInfo && { sentry_client: `${sdkInfo.name}/${sdkInfo.version}` }),
    });
  }

  /**
   * Returns the envelope endpoint URL with auth in the query string.
   *
   * Sending auth as part of the query string and not as custom HTTP headers avoids CORS preflight requests.
   */
  function getEnvelopeEndpointWithUrlEncodedAuth(
    dsn,
    // TODO (v8): Remove `tunnelOrOptions` in favor of `options`, and use the substitute code below
    // options: ClientOptions = {} as ClientOptions,
    tunnelOrOptions = {} ,
  ) {
    // TODO (v8): Use this code instead
    // const { tunnel, _metadata = {} } = options;
    // return tunnel ? tunnel : `${_getIngestEndpoint(dsn)}?${_encodedAuth(dsn, _metadata.sdk)}`;

    const tunnel = typeof tunnelOrOptions === 'string' ? tunnelOrOptions : tunnelOrOptions.tunnel;
    const sdkInfo =
      typeof tunnelOrOptions === 'string' || !tunnelOrOptions._metadata ? undefined : tunnelOrOptions._metadata.sdk;

    return tunnel ? tunnel : `${_getIngestEndpoint(dsn)}?${_encodedAuth(dsn, sdkInfo)}`;
  }

  /**
   * Apply SdkInfo (name, version, packages, integrations) to the corresponding event key.
   * Merge with existing data if any.
   **/
  function enhanceEventWithSdkInfo(event, sdkInfo) {
    if (!sdkInfo) {
      return event;
    }
    event.sdk = event.sdk || {};
    event.sdk.name = event.sdk.name || sdkInfo.name;
    event.sdk.version = event.sdk.version || sdkInfo.version;
    event.sdk.integrations = [...(event.sdk.integrations || []), ...(sdkInfo.integrations || [])];
    event.sdk.packages = [...(event.sdk.packages || []), ...(sdkInfo.packages || [])];
    return event;
  }

  /** Creates an envelope from a Session */
  function createSessionEnvelope(
    session,
    dsn,
    metadata,
    tunnel,
  ) {
    const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
    const envelopeHeaders = {
      sent_at: new Date().toISOString(),
      ...(sdkInfo && { sdk: sdkInfo }),
      ...(!!tunnel && { dsn: dsnToString(dsn) }),
    };

    const envelopeItem =
      'aggregates' in session ? [{ type: 'sessions' }, session] : [{ type: 'session' }, session];

    return createEnvelope(envelopeHeaders, [envelopeItem]);
  }

  /**
   * Create an Envelope from an event.
   */
  function createEventEnvelope(
    event,
    dsn,
    metadata,
    tunnel,
  ) {
    const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);

    /*
      Note: Due to TS, event.type may be `replay_event`, theoretically.
      In practice, we never call `createEventEnvelope` with `replay_event` type,
      and we'd have to adjut a looot of types to make this work properly.
      We want to avoid casting this around, as that could lead to bugs (e.g. when we add another type)
      So the safe choice is to really guard against the replay_event type here.
    */
    const eventType = event.type && event.type !== 'replay_event' ? event.type : 'event';

    enhanceEventWithSdkInfo(event, metadata && metadata.sdk);

    const envelopeHeaders = createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn);

    // Prevent this data (which, if it exists, was used in earlier steps in the processing pipeline) from being sent to
    // sentry. (Note: Our use of this property comes and goes with whatever we might be debugging, whatever hacks we may
    // have temporarily added, etc. Even if we don't happen to be using it at some point in the future, let's not get rid
    // of this `delete`, lest we miss putting it back in the next time the property is in use.)
    delete event.sdkProcessingMetadata;

    const eventItem = [{ type: eventType }, event];
    return createEnvelope(envelopeHeaders, [eventItem]);
  }

  const installedIntegrations = [];

  /** Map of integrations assigned to a client */

  /**
   * Remove duplicates from the given array, preferring the last instance of any duplicate. Not guaranteed to
   * preseve the order of integrations in the array.
   *
   * @private
   */
  function filterDuplicates(integrations) {
    const integrationsByName = {};

    integrations.forEach(currentInstance => {
      const { name } = currentInstance;

      const existingInstance = integrationsByName[name];

      // We want integrations later in the array to overwrite earlier ones of the same type, except that we never want a
      // default instance to overwrite an existing user instance
      if (existingInstance && !existingInstance.isDefaultInstance && currentInstance.isDefaultInstance) {
        return;
      }

      integrationsByName[name] = currentInstance;
    });

    return Object.values(integrationsByName);
  }

  /** Gets integrations to install */
  function getIntegrationsToSetup(options) {
    const defaultIntegrations = options.defaultIntegrations || [];
    const userIntegrations = options.integrations;

    // We flag default instances, so that later we can tell them apart from any user-created instances of the same class
    defaultIntegrations.forEach(integration => {
      integration.isDefaultInstance = true;
    });

    let integrations;

    if (Array.isArray(userIntegrations)) {
      integrations = [...defaultIntegrations, ...userIntegrations];
    } else if (typeof userIntegrations === 'function') {
      integrations = arrayify(userIntegrations(defaultIntegrations));
    } else {
      integrations = defaultIntegrations;
    }

    const finalIntegrations = filterDuplicates(integrations);

    // The `Debug` integration prints copies of the `event` and `hint` which will be passed to `beforeSend` or
    // `beforeSendTransaction`. It therefore has to run after all other integrations, so that the changes of all event
    // processors will be reflected in the printed values. For lack of a more elegant way to guarantee that, we therefore
    // locate it and, assuming it exists, pop it out of its current spot and shove it onto the end of the array.
    const debugIndex = finalIntegrations.findIndex(integration => integration.name === 'Debug');
    if (debugIndex !== -1) {
      const [debugInstance] = finalIntegrations.splice(debugIndex, 1);
      finalIntegrations.push(debugInstance);
    }

    return finalIntegrations;
  }

  /**
   * Given a list of integration instances this installs them all. When `withDefaults` is set to `true` then all default
   * integrations are added unless they were already provided before.
   * @param integrations array of integration instances
   * @param withDefault should enable default integrations
   */
  function setupIntegrations(integrations) {
    const integrationIndex = {};

    integrations.forEach(integration => {
      // guard against empty provided integrations
      if (integration) {
        setupIntegration(integration, integrationIndex);
      }
    });

    return integrationIndex;
  }

  /** Setup a single integration.  */
  function setupIntegration(integration, integrationIndex) {
    integrationIndex[integration.name] = integration;

    if (installedIntegrations.indexOf(integration.name) === -1) {
      integration.setupOnce(addGlobalEventProcessor, getCurrentHub);
      installedIntegrations.push(integration.name);
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log(`Integration installed: ${integration.name}`);
    }
  }

  /**
   * Adds common information to events.
   *
   * The information includes release and environment from `options`,
   * breadcrumbs and context (extra, tags and user) from the scope.
   *
   * Information that is already present in the event is never overwritten. For
   * nested objects, such as the context, keys are merged.
   *
   * Note: This also triggers callbacks for `addGlobalEventProcessor`, but not `beforeSend`.
   *
   * @param event The original event.
   * @param hint May contain additional information about the original exception.
   * @param scope A scope containing event metadata.
   * @returns A new event with more information.
   * @hidden
   */
  function prepareEvent(
    options,
    event,
    hint,
    scope,
  ) {
    const { normalizeDepth = 3, normalizeMaxBreadth = 1000 } = options;
    const prepared = {
      ...event,
      event_id: event.event_id || hint.event_id || uuid4(),
      timestamp: event.timestamp || dateTimestampInSeconds(),
    };
    const integrations = hint.integrations || options.integrations.map(i => i.name);

    applyClientOptions(prepared, options);
    applyIntegrationsMetadata(prepared, integrations);

    // If we have scope given to us, use it as the base for further modifications.
    // This allows us to prevent unnecessary copying of data if `captureContext` is not provided.
    let finalScope = scope;
    if (hint.captureContext) {
      finalScope = Scope.clone(finalScope).update(hint.captureContext);
    }

    // We prepare the result here with a resolved Event.
    let result = resolvedSyncPromise(prepared);

    // This should be the last thing called, since we want that
    // {@link Hub.addEventProcessor} gets the finished prepared event.
    //
    // We need to check for the existence of `finalScope.getAttachments`
    // because `getAttachments` can be undefined if users are using an older version
    // of `@sentry/core` that does not have the `getAttachments` method.
    // See: https://github.com/getsentry/sentry-javascript/issues/5229
    if (finalScope) {
      // Collect attachments from the hint and scope
      if (finalScope.getAttachments) {
        const attachments = [...(hint.attachments || []), ...finalScope.getAttachments()];

        if (attachments.length) {
          hint.attachments = attachments;
        }
      }

      // In case we have a hub we reassign it.
      result = finalScope.applyToEvent(prepared, hint);
    }

    return result.then(evt => {
      if (typeof normalizeDepth === 'number' && normalizeDepth > 0) {
        return normalizeEvent(evt, normalizeDepth, normalizeMaxBreadth);
      }
      return evt;
    });
  }

  /**
   *  Enhances event using the client configuration.
   *  It takes care of all "static" values like environment, release and `dist`,
   *  as well as truncating overly long values.
   * @param event event instance to be enhanced
   */
  function applyClientOptions(event, options) {
    const { environment, release, dist, maxValueLength = 250 } = options;

    if (!('environment' in event)) {
      event.environment = 'environment' in options ? environment : 'production';
    }

    if (event.release === undefined && release !== undefined) {
      event.release = release;
    }

    if (event.dist === undefined && dist !== undefined) {
      event.dist = dist;
    }

    if (event.message) {
      event.message = truncate(event.message, maxValueLength);
    }

    const exception = event.exception && event.exception.values && event.exception.values[0];
    if (exception && exception.value) {
      exception.value = truncate(exception.value, maxValueLength);
    }

    const request = event.request;
    if (request && request.url) {
      request.url = truncate(request.url, maxValueLength);
    }
  }

  /**
   * This function adds all used integrations to the SDK info in the event.
   * @param event The event that will be filled with all integrations.
   */
  function applyIntegrationsMetadata(event, integrationNames) {
    if (integrationNames.length > 0) {
      event.sdk = event.sdk || {};
      event.sdk.integrations = [...(event.sdk.integrations || []), ...integrationNames];
    }
  }

  /**
   * Applies `normalize` function on necessary `Event` attributes to make them safe for serialization.
   * Normalized keys:
   * - `breadcrumbs.data`
   * - `user`
   * - `contexts`
   * - `extra`
   * @param event Event
   * @returns Normalized event
   */
  function normalizeEvent(event, depth, maxBreadth) {
    if (!event) {
      return null;
    }

    const normalized = {
      ...event,
      ...(event.breadcrumbs && {
        breadcrumbs: event.breadcrumbs.map(b => ({
          ...b,
          ...(b.data && {
            data: normalize(b.data, depth, maxBreadth),
          }),
        })),
      }),
      ...(event.user && {
        user: normalize(event.user, depth, maxBreadth),
      }),
      ...(event.contexts && {
        contexts: normalize(event.contexts, depth, maxBreadth),
      }),
      ...(event.extra && {
        extra: normalize(event.extra, depth, maxBreadth),
      }),
    };

    // event.contexts.trace stores information about a Transaction. Similarly,
    // event.spans[] stores information about child Spans. Given that a
    // Transaction is conceptually a Span, normalization should apply to both
    // Transactions and Spans consistently.
    // For now the decision is to skip normalization of Transactions and Spans,
    // so this block overwrites the normalized event to add back the original
    // Transaction information prior to normalization.
    if (event.contexts && event.contexts.trace && normalized.contexts) {
      normalized.contexts.trace = event.contexts.trace;

      // event.contexts.trace.data may contain circular/dangerous data so we need to normalize it
      if (event.contexts.trace.data) {
        normalized.contexts.trace.data = normalize(event.contexts.trace.data, depth, maxBreadth);
      }
    }

    // event.spans[].data may contain circular/dangerous data so we need to normalize it
    if (event.spans) {
      normalized.spans = event.spans.map(span => {
        // We cannot use the spread operator here because `toJSON` on `span` is non-enumerable
        if (span.data) {
          span.data = normalize(span.data, depth, maxBreadth);
        }
        return span;
      });
    }

    return normalized;
  }

  const ALREADY_SEEN_ERROR = "Not capturing exception because it's already been captured.";

  /**
   * Base implementation for all JavaScript SDK clients.
   *
   * Call the constructor with the corresponding options
   * specific to the client subclass. To access these options later, use
   * {@link Client.getOptions}.
   *
   * If a Dsn is specified in the options, it will be parsed and stored. Use
   * {@link Client.getDsn} to retrieve the Dsn at any moment. In case the Dsn is
   * invalid, the constructor will throw a {@link SentryException}. Note that
   * without a valid Dsn, the SDK will not send any events to Sentry.
   *
   * Before sending an event, it is passed through
   * {@link BaseClient._prepareEvent} to add SDK information and scope data
   * (breadcrumbs and context). To add more custom information, override this
   * method and extend the resulting prepared event.
   *
   * To issue automatically created events (e.g. via instrumentation), use
   * {@link Client.captureEvent}. It will prepare the event and pass it through
   * the callback lifecycle. To issue auto-breadcrumbs, use
   * {@link Client.addBreadcrumb}.
   *
   * @example
   * class NodeClient extends BaseClient<NodeOptions> {
   *   public constructor(options: NodeOptions) {
   *     super(options);
   *   }
   *
   *   // ...
   * }
   */
  class BaseClient {
    /** Options passed to the SDK. */

    /** The client Dsn, if specified in options. Without this Dsn, the SDK will be disabled. */

    /** Array of set up integrations. */
     __init() {this._integrations = {};}

    /** Indicates whether this client's integrations have been set up. */
     __init2() {this._integrationsInitialized = false;}

    /** Number of calls being processed */
     __init3() {this._numProcessing = 0;}

    /** Holds flushable  */
     __init4() {this._outcomes = {};}

    /**
     * Initializes this client instance.
     *
     * @param options Options for the client.
     */
     constructor(options) {BaseClient.prototype.__init.call(this);BaseClient.prototype.__init2.call(this);BaseClient.prototype.__init3.call(this);BaseClient.prototype.__init4.call(this);
      this._options = options;
      if (options.dsn) {
        this._dsn = makeDsn(options.dsn);
        const url = getEnvelopeEndpointWithUrlEncodedAuth(this._dsn, options);
        this._transport = options.transport({
          recordDroppedEvent: this.recordDroppedEvent.bind(this),
          ...options.transportOptions,
          url,
        });
      } else {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.warn('No DSN provided, client will not do anything.');
      }
    }

    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
     captureException(exception, hint, scope) {
      // ensure we haven't captured this very object before
      if (checkOrSetAlreadyCaught(exception)) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log(ALREADY_SEEN_ERROR);
        return;
      }

      let eventId = hint && hint.event_id;

      this._process(
        this.eventFromException(exception, hint)
          .then(event => this._captureEvent(event, hint, scope))
          .then(result => {
            eventId = result;
          }),
      );

      return eventId;
    }

    /**
     * @inheritDoc
     */
     captureMessage(
      message,
      // eslint-disable-next-line deprecation/deprecation
      level,
      hint,
      scope,
    ) {
      let eventId = hint && hint.event_id;

      const promisedEvent = isPrimitive(message)
        ? this.eventFromMessage(String(message), level, hint)
        : this.eventFromException(message, hint);

      this._process(
        promisedEvent
          .then(event => this._captureEvent(event, hint, scope))
          .then(result => {
            eventId = result;
          }),
      );

      return eventId;
    }

    /**
     * @inheritDoc
     */
     captureEvent(event, hint, scope) {
      // ensure we haven't captured this very object before
      if (hint && hint.originalException && checkOrSetAlreadyCaught(hint.originalException)) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log(ALREADY_SEEN_ERROR);
        return;
      }

      let eventId = hint && hint.event_id;

      this._process(
        this._captureEvent(event, hint, scope).then(result => {
          eventId = result;
        }),
      );

      return eventId;
    }

    /**
     * @inheritDoc
     */
     captureSession(session) {
      if (!this._isEnabled()) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.warn('SDK not enabled, will not capture session.');
        return;
      }

      if (!(typeof session.release === 'string')) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.warn('Discarded session because of missing or non-string release');
      } else {
        this.sendSession(session);
        // After sending, we set init false to indicate it's not the first occurrence
        updateSession(session, { init: false });
      }
    }

    /**
     * @inheritDoc
     */
     getDsn() {
      return this._dsn;
    }

    /**
     * @inheritDoc
     */
     getOptions() {
      return this._options;
    }

    /**
     * @see SdkMetadata in @sentry/types
     *
     * @return The metadata of the SDK
     */
     getSdkMetadata() {
      return this._options._metadata;
    }

    /**
     * @inheritDoc
     */
     getTransport() {
      return this._transport;
    }

    /**
     * @inheritDoc
     */
     flush(timeout) {
      const transport = this._transport;
      if (transport) {
        return this._isClientDoneProcessing(timeout).then(clientFinished => {
          return transport.flush(timeout).then(transportFlushed => clientFinished && transportFlushed);
        });
      } else {
        return resolvedSyncPromise(true);
      }
    }

    /**
     * @inheritDoc
     */
     close(timeout) {
      return this.flush(timeout).then(result => {
        this.getOptions().enabled = false;
        return result;
      });
    }

    /**
     * Sets up the integrations
     */
     setupIntegrations() {
      if (this._isEnabled() && !this._integrationsInitialized) {
        this._integrations = setupIntegrations(this._options.integrations);
        this._integrationsInitialized = true;
      }
    }

    /**
     * Gets an installed integration by its `id`.
     *
     * @returns The installed integration or `undefined` if no integration with that `id` was installed.
     */
     getIntegrationById(integrationId) {
      return this._integrations[integrationId];
    }

    /**
     * @inheritDoc
     */
     getIntegration(integration) {
      try {
        return (this._integrations[integration.id] ) || null;
      } catch (_oO) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.warn(`Cannot retrieve integration ${integration.id} from the current Client`);
        return null;
      }
    }

    /**
     * @inheritDoc
     */
     addIntegration(integration) {
      setupIntegration(integration, this._integrations);
    }

    /**
     * @inheritDoc
     */
     sendEvent(event, hint = {}) {
      if (this._dsn) {
        let env = createEventEnvelope(event, this._dsn, this._options._metadata, this._options.tunnel);

        for (const attachment of hint.attachments || []) {
          env = addItemToEnvelope(
            env,
            createAttachmentEnvelopeItem(
              attachment,
              this._options.transportOptions && this._options.transportOptions.textEncoder,
            ),
          );
        }

        this._sendEnvelope(env);
      }
    }

    /**
     * @inheritDoc
     */
     sendSession(session) {
      if (this._dsn) {
        const env = createSessionEnvelope(session, this._dsn, this._options._metadata, this._options.tunnel);
        this._sendEnvelope(env);
      }
    }

    /**
     * @inheritDoc
     */
     recordDroppedEvent(reason, category, _event) {
      // Note: we use `event` in replay, where we overwrite this hook.

      if (this._options.sendClientReports) {
        // We want to track each category (error, transaction, session, replay_event) separately
        // but still keep the distinction between different type of outcomes.
        // We could use nested maps, but it's much easier to read and type this way.
        // A correct type for map-based implementation if we want to go that route
        // would be `Partial<Record<SentryRequestType, Partial<Record<Outcome, number>>>>`
        // With typescript 4.1 we could even use template literal types
        const key = `${reason}:${category}`;
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log(`Adding outcome: "${key}"`);

        // The following works because undefined + 1 === NaN and NaN is falsy
        this._outcomes[key] = this._outcomes[key] + 1 || 1;
      }
    }

    /** Updates existing session based on the provided event */
     _updateSessionFromEvent(session, event) {
      let crashed = false;
      let errored = false;
      const exceptions = event.exception && event.exception.values;

      if (exceptions) {
        errored = true;

        for (const ex of exceptions) {
          const mechanism = ex.mechanism;
          if (mechanism && mechanism.handled === false) {
            crashed = true;
            break;
          }
        }
      }

      // A session is updated and that session update is sent in only one of the two following scenarios:
      // 1. Session with non terminal status and 0 errors + an error occurred -> Will set error count to 1 and send update
      // 2. Session with non terminal status and 1 error + a crash occurred -> Will set status crashed and send update
      const sessionNonTerminal = session.status === 'ok';
      const shouldUpdateAndSend = (sessionNonTerminal && session.errors === 0) || (sessionNonTerminal && crashed);

      if (shouldUpdateAndSend) {
        updateSession(session, {
          ...(crashed && { status: 'crashed' }),
          errors: session.errors || Number(errored || crashed),
        });
        this.captureSession(session);
      }
    }

    /**
     * Determine if the client is finished processing. Returns a promise because it will wait `timeout` ms before saying
     * "no" (resolving to `false`) in order to give the client a chance to potentially finish first.
     *
     * @param timeout The time, in ms, after which to resolve to `false` if the client is still busy. Passing `0` (or not
     * passing anything) will make the promise wait as long as it takes for processing to finish before resolving to
     * `true`.
     * @returns A promise which will resolve to `true` if processing is already done or finishes before the timeout, and
     * `false` otherwise
     */
     _isClientDoneProcessing(timeout) {
      return new SyncPromise(resolve => {
        let ticked = 0;
        const tick = 1;

        const interval = setInterval(() => {
          if (this._numProcessing == 0) {
            clearInterval(interval);
            resolve(true);
          } else {
            ticked += tick;
            if (timeout && ticked >= timeout) {
              clearInterval(interval);
              resolve(false);
            }
          }
        }, tick);
      });
    }

    /** Determines whether this SDK is enabled and a valid Dsn is present. */
     _isEnabled() {
      return this.getOptions().enabled !== false && this._dsn !== undefined;
    }

    /**
     * Adds common information to events.
     *
     * The information includes release and environment from `options`,
     * breadcrumbs and context (extra, tags and user) from the scope.
     *
     * Information that is already present in the event is never overwritten. For
     * nested objects, such as the context, keys are merged.
     *
     * @param event The original event.
     * @param hint May contain additional information about the original exception.
     * @param scope A scope containing event metadata.
     * @returns A new event with more information.
     */
     _prepareEvent(event, hint, scope) {
      const options = this.getOptions();
      const integrations = Object.keys(this._integrations);
      if (!hint.integrations && integrations.length > 0) {
        hint.integrations = integrations;
      }
      return prepareEvent(options, event, hint, scope);
    }

    /**
     * Processes the event and logs an error in case of rejection
     * @param event
     * @param hint
     * @param scope
     */
     _captureEvent(event, hint = {}, scope) {
      return this._processEvent(event, hint, scope).then(
        finalEvent => {
          return finalEvent.event_id;
        },
        reason => {
          if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__)) {
            // If something's gone wrong, log the error as a warning. If it's just us having used a `SentryError` for
            // control flow, log just the message (no stack) as a log-level log.
            const sentryError = reason ;
            if (sentryError.logLevel === 'log') {
              logger.log(sentryError.message);
            } else {
              logger.warn(sentryError);
            }
          }
          return undefined;
        },
      );
    }

    /**
     * Processes an event (either error or message) and sends it to Sentry.
     *
     * This also adds breadcrumbs and context information to the event. However,
     * platform specific meta data (such as the User's IP address) must be added
     * by the SDK implementor.
     *
     *
     * @param event The event to send to Sentry.
     * @param hint May contain additional information about the original exception.
     * @param scope A scope containing event metadata.
     * @returns A SyncPromise that resolves with the event or rejects in case event was/will not be send.
     */
     _processEvent(event, hint, scope) {
      const options = this.getOptions();
      const { sampleRate } = options;

      if (!this._isEnabled()) {
        return rejectedSyncPromise(new SentryError('SDK not enabled, will not capture event.', 'log'));
      }

      const isTransaction = isTransactionEvent(event);
      const isError = isErrorEvent(event);
      const eventType = event.type || 'error';
      const beforeSendLabel = `before send for type \`${eventType}\``;

      // 1.0 === 100% events are sent
      // 0.0 === 0% events are sent
      // Sampling for transaction happens somewhere else
      if (isError && typeof sampleRate === 'number' && Math.random() > sampleRate) {
        this.recordDroppedEvent('sample_rate', 'error', event);
        return rejectedSyncPromise(
          new SentryError(
            `Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`,
            'log',
          ),
        );
      }

      const dataCategory = eventType === 'replay_event' ? 'replay' : eventType;

      return this._prepareEvent(event, hint, scope)
        .then(prepared => {
          if (prepared === null) {
            this.recordDroppedEvent('event_processor', dataCategory, event);
            throw new SentryError('An event processor returned `null`, will not send event.', 'log');
          }

          const isInternalException = hint.data && (hint.data ).__sentry__ === true;
          if (isInternalException) {
            return prepared;
          }

          const result = processBeforeSend(options, prepared, hint);
          return _validateBeforeSendResult(result, beforeSendLabel);
        })
        .then(processedEvent => {
          if (processedEvent === null) {
            this.recordDroppedEvent('before_send', dataCategory, event);
            throw new SentryError(`${beforeSendLabel} returned \`null\`, will not send event.`, 'log');
          }

          const session = scope && scope.getSession();
          if (!isTransaction && session) {
            this._updateSessionFromEvent(session, processedEvent);
          }

          // None of the Sentry built event processor will update transaction name,
          // so if the transaction name has been changed by an event processor, we know
          // it has to come from custom event processor added by a user
          const transactionInfo = processedEvent.transaction_info;
          if (isTransaction && transactionInfo && processedEvent.transaction !== event.transaction) {
            const source = 'custom';
            processedEvent.transaction_info = {
              ...transactionInfo,
              source,
            };
          }

          this.sendEvent(processedEvent, hint);
          return processedEvent;
        })
        .then(null, reason => {
          if (reason instanceof SentryError) {
            throw reason;
          }

          this.captureException(reason, {
            data: {
              __sentry__: true,
            },
            originalException: reason ,
          });
          throw new SentryError(
            `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${reason}`,
          );
        });
    }

    /**
     * Occupies the client with processing and event
     */
     _process(promise) {
      this._numProcessing++;
      void promise.then(
        value => {
          this._numProcessing--;
          return value;
        },
        reason => {
          this._numProcessing--;
          return reason;
        },
      );
    }

    /**
     * @inheritdoc
     */
     _sendEnvelope(envelope) {
      if (this._transport && this._dsn) {
        this._transport.send(envelope).then(null, reason => {
          (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.error('Error while sending event:', reason);
        });
      } else {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.error('Transport disabled');
      }
    }

    /**
     * Clears outcomes on this client and returns them.
     */
     _clearOutcomes() {
      const outcomes = this._outcomes;
      this._outcomes = {};
      return Object.keys(outcomes).map(key => {
        const [reason, category] = key.split(':') ;
        return {
          reason,
          category,
          quantity: outcomes[key],
        };
      });
    }

    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types

  }

  /**
   * Verifies that return value of configured `beforeSend` or `beforeSendTransaction` is of expected type, and returns the value if so.
   */
  function _validateBeforeSendResult(
    beforeSendResult,
    beforeSendLabel,
  ) {
    const invalidValueError = `${beforeSendLabel} must return \`null\` or a valid event.`;
    if (isThenable(beforeSendResult)) {
      return beforeSendResult.then(
        event => {
          if (!isPlainObject(event) && event !== null) {
            throw new SentryError(invalidValueError);
          }
          return event;
        },
        e => {
          throw new SentryError(`${beforeSendLabel} rejected with ${e}`);
        },
      );
    } else if (!isPlainObject(beforeSendResult) && beforeSendResult !== null) {
      throw new SentryError(invalidValueError);
    }
    return beforeSendResult;
  }

  /**
   * Process the matching `beforeSendXXX` callback.
   */
  function processBeforeSend(
    options,
    event,
    hint,
  ) {
    const { beforeSend, beforeSendTransaction } = options;

    if (isErrorEvent(event) && beforeSend) {
      return beforeSend(event, hint);
    }

    if (isTransactionEvent(event) && beforeSendTransaction) {
      return beforeSendTransaction(event, hint);
    }

    return event;
  }

  function isErrorEvent(event) {
    return event.type === undefined;
  }

  function isTransactionEvent(event) {
    return event.type === 'transaction';
  }

  /** A class object that can instantiate Client objects. */

  /**
   * Internal function to create a new SDK client instance. The client is
   * installed and then bound to the current scope.
   *
   * @param clientClass The client class to instantiate.
   * @param options Options to pass to the client.
   */
  function initAndBind(
    clientClass,
    options,
  ) {
    if (options.debug === true) {
      if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__)) {
        logger.enable();
      } else {
        // use `console.warn` rather than `logger.warn` since by non-debug bundles have all `logger.x` statements stripped
        // eslint-disable-next-line no-console
        console.warn('[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.');
      }
    }
    const hub = getCurrentHub();
    const scope = hub.getScope();
    if (scope) {
      scope.update(options.initialScope);
    }

    const client = new clientClass(options);
    hub.bindClient(client);
  }

  const DEFAULT_TRANSPORT_BUFFER_SIZE = 30;

  /**
   * Creates an instance of a Sentry `Transport`
   *
   * @param options
   * @param makeRequest
   */
  function createTransport(
    options,
    makeRequest,
    buffer = makePromiseBuffer(
      options.bufferSize || DEFAULT_TRANSPORT_BUFFER_SIZE,
    ),
  ) {
    let rateLimits = {};

    const flush = (timeout) => buffer.drain(timeout);

    function send(envelope) {
      const filteredEnvelopeItems = [];

      // Drop rate limited items from envelope
      forEachEnvelopeItem(envelope, (item, type) => {
        const envelopeItemDataCategory = envelopeItemTypeToDataCategory(type);
        if (isRateLimited(rateLimits, envelopeItemDataCategory)) {
          const event = getEventForEnvelopeItem(item, type);
          options.recordDroppedEvent('ratelimit_backoff', envelopeItemDataCategory, event);
        } else {
          filteredEnvelopeItems.push(item);
        }
      });

      // Skip sending if envelope is empty after filtering out rate limited events
      if (filteredEnvelopeItems.length === 0) {
        return resolvedSyncPromise();
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const filteredEnvelope = createEnvelope(envelope[0], filteredEnvelopeItems );

      // Creates client report for each item in an envelope
      const recordEnvelopeLoss = (reason) => {
        forEachEnvelopeItem(filteredEnvelope, (item, type) => {
          const event = getEventForEnvelopeItem(item, type);
          options.recordDroppedEvent(reason, envelopeItemTypeToDataCategory(type), event);
        });
      };

      const requestTask = () =>
        makeRequest({ body: serializeEnvelope(filteredEnvelope, options.textEncoder) }).then(
          response => {
            // We don't want to throw on NOK responses, but we want to at least log them
            if (response.statusCode !== undefined && (response.statusCode < 200 || response.statusCode >= 300)) {
              (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.warn(`Sentry responded with status code ${response.statusCode} to sent event.`);
            }

            rateLimits = updateRateLimits(rateLimits, response);
            return response;
          },
          error => {
            recordEnvelopeLoss('network_error');
            throw error;
          },
        );

      return buffer.add(requestTask).then(
        result => result,
        error => {
          if (error instanceof SentryError) {
            (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.error('Skipped sending event because buffer is full.');
            recordEnvelopeLoss('queue_overflow');
            return resolvedSyncPromise();
          } else {
            throw error;
          }
        },
      );
    }

    return {
      send,
      flush,
    };
  }

  function getEventForEnvelopeItem(item, type) {
    if (type !== 'event' && type !== 'transaction') {
      return undefined;
    }

    return Array.isArray(item) ? (item )[1] : undefined;
  }

  const SDK_VERSION = '7.38.0';

  let originalFunctionToString;

  /** Patch toString calls to return proper name for wrapped functions */
  class FunctionToString  {constructor() { FunctionToString.prototype.__init.call(this); }
    /**
     * @inheritDoc
     */
     static __initStatic() {this.id = 'FunctionToString';}

    /**
     * @inheritDoc
     */
     __init() {this.name = FunctionToString.id;}

    /**
     * @inheritDoc
     */
     setupOnce() {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      originalFunctionToString = Function.prototype.toString;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Function.prototype.toString = function ( ...args) {
        const context = getOriginalFunction(this) || this;
        return originalFunctionToString.apply(context, args);
      };
    }
  } FunctionToString.__initStatic();

  // "Script error." is hard coded into browsers for errors that it can't read.
  // this is the result of a script being pulled in from an external domain and CORS.
  const DEFAULT_IGNORE_ERRORS = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];

  /** Options for the InboundFilters integration */

  /** Inbound filters configurable by the user */
  class InboundFilters  {
    /**
     * @inheritDoc
     */
     static __initStatic() {this.id = 'InboundFilters';}

    /**
     * @inheritDoc
     */
     __init() {this.name = InboundFilters.id;}

     constructor(  _options = {}) {this._options = _options;InboundFilters.prototype.__init.call(this);}

    /**
     * @inheritDoc
     */
     setupOnce(addGlobalEventProcessor, getCurrentHub) {
      const eventProcess = (event) => {
        const hub = getCurrentHub();
        if (hub) {
          const self = hub.getIntegration(InboundFilters);
          if (self) {
            const client = hub.getClient();
            const clientOptions = client ? client.getOptions() : {};
            const options = _mergeOptions(self._options, clientOptions);
            return _shouldDropEvent$1(event, options) ? null : event;
          }
        }
        return event;
      };

      eventProcess.id = this.name;
      addGlobalEventProcessor(eventProcess);
    }
  } InboundFilters.__initStatic();

  /** JSDoc */
  function _mergeOptions(
    internalOptions = {},
    clientOptions = {},
  ) {
    return {
      allowUrls: [...(internalOptions.allowUrls || []), ...(clientOptions.allowUrls || [])],
      denyUrls: [...(internalOptions.denyUrls || []), ...(clientOptions.denyUrls || [])],
      ignoreErrors: [
        ...(internalOptions.ignoreErrors || []),
        ...(clientOptions.ignoreErrors || []),
        ...DEFAULT_IGNORE_ERRORS,
      ],
      ignoreInternal: internalOptions.ignoreInternal !== undefined ? internalOptions.ignoreInternal : true,
    };
  }

  /** JSDoc */
  function _shouldDropEvent$1(event, options) {
    if (options.ignoreInternal && _isSentryError(event)) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        logger.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${getEventDescription(event)}`);
      return true;
    }
    if (_isIgnoredError(event, options.ignoreErrors)) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        logger.warn(
          `Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${getEventDescription(event)}`,
        );
      return true;
    }
    if (_isDeniedUrl(event, options.denyUrls)) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        logger.warn(
          `Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${getEventDescription(
          event,
        )}.\nUrl: ${_getEventFilterUrl(event)}`,
        );
      return true;
    }
    if (!_isAllowedUrl(event, options.allowUrls)) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        logger.warn(
          `Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${getEventDescription(
          event,
        )}.\nUrl: ${_getEventFilterUrl(event)}`,
        );
      return true;
    }
    return false;
  }

  function _isIgnoredError(event, ignoreErrors) {
    if (!ignoreErrors || !ignoreErrors.length) {
      return false;
    }

    return _getPossibleEventMessages(event).some(message => stringMatchesSomePattern(message, ignoreErrors));
  }

  function _isDeniedUrl(event, denyUrls) {
    // TODO: Use Glob instead?
    if (!denyUrls || !denyUrls.length) {
      return false;
    }
    const url = _getEventFilterUrl(event);
    return !url ? false : stringMatchesSomePattern(url, denyUrls);
  }

  function _isAllowedUrl(event, allowUrls) {
    // TODO: Use Glob instead?
    if (!allowUrls || !allowUrls.length) {
      return true;
    }
    const url = _getEventFilterUrl(event);
    return !url ? true : stringMatchesSomePattern(url, allowUrls);
  }

  function _getPossibleEventMessages(event) {
    if (event.message) {
      return [event.message];
    }
    if (event.exception) {
      try {
        const { type = '', value = '' } = (event.exception.values && event.exception.values[0]) || {};
        return [`${value}`, `${type}: ${value}`];
      } catch (oO) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.error(`Cannot extract message for event ${getEventDescription(event)}`);
        return [];
      }
    }
    return [];
  }

  function _isSentryError(event) {
    try {
      // @ts-ignore can't be a sentry error if undefined
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return event.exception.values[0].type === 'SentryError';
    } catch (e) {
      // ignore
    }
    return false;
  }

  function _getLastValidUrl(frames = []) {
    for (let i = frames.length - 1; i >= 0; i--) {
      const frame = frames[i];

      if (frame && frame.filename !== '<anonymous>' && frame.filename !== '[native code]') {
        return frame.filename || null;
      }
    }

    return null;
  }

  function _getEventFilterUrl(event) {
    try {
      let frames;
      try {
        // @ts-ignore we only care about frames if the whole thing here is defined
        frames = event.exception.values[0].stacktrace.frames;
      } catch (e) {
        // ignore
      }
      return frames ? _getLastValidUrl(frames) : null;
    } catch (oO) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.error(`Cannot extract url for event ${getEventDescription(event)}`);
      return null;
    }
  }

  const WINDOW$2 = GLOBAL_OBJ ;

  let ignoreOnError = 0;

  /**
   * @hidden
   */
  function shouldIgnoreOnError() {
    return ignoreOnError > 0;
  }

  /**
   * @hidden
   */
  function ignoreNextOnError() {
    // onerror should trigger before setTimeout
    ignoreOnError++;
    setTimeout(() => {
      ignoreOnError--;
    });
  }

  /**
   * Instruments the given function and sends an event to Sentry every time the
   * function throws an exception.
   *
   * @param fn A function to wrap. It is generally safe to pass an unbound function, because the returned wrapper always
   * has a correct `this` context.
   * @returns The wrapped function.
   * @hidden
   */
  function wrap$1(
    fn,
    options

   = {},
    before,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) {
    // for future readers what this does is wrap a function and then create
    // a bi-directional wrapping between them.
    //
    // example: wrapped = wrap(original);
    //  original.__sentry_wrapped__ -> wrapped
    //  wrapped.__sentry_original__ -> original

    if (typeof fn !== 'function') {
      return fn;
    }

    try {
      // if we're dealing with a function that was previously wrapped, return
      // the original wrapper.
      const wrapper = fn.__sentry_wrapped__;
      if (wrapper) {
        return wrapper;
      }

      // We don't wanna wrap it twice
      if (getOriginalFunction(fn)) {
        return fn;
      }
    } catch (e) {
      // Just accessing custom props in some Selenium environments
      // can cause a "Permission denied" exception (see raven-js#495).
      // Bail on wrapping and return the function as-is (defers to window.onerror).
      return fn;
    }

    /* eslint-disable prefer-rest-params */
    // It is important that `sentryWrapped` is not an arrow function to preserve the context of `this`
    const sentryWrapped = function () {
      const args = Array.prototype.slice.call(arguments);

      try {
        if (before && typeof before === 'function') {
          before.apply(this, arguments);
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
        const wrappedArguments = args.map((arg) => wrap$1(arg, options));

        // Attempt to invoke user-land function
        // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
        //       means the sentry.javascript SDK caught an error invoking your application code. This
        //       is expected behavior and NOT indicative of a bug with sentry.javascript.
        return fn.apply(this, wrappedArguments);
      } catch (ex) {
        ignoreNextOnError();

        withScope((scope) => {
          scope.addEventProcessor((event) => {
            if (options.mechanism) {
              addExceptionTypeValue(event, undefined, undefined);
              addExceptionMechanism(event, options.mechanism);
            }

            event.extra = {
              ...event.extra,
              arguments: args,
            };

            return event;
          });

          captureException(ex);
        });

        throw ex;
      }
    };
    /* eslint-enable prefer-rest-params */

    // Accessing some objects may throw
    // ref: https://github.com/getsentry/sentry-javascript/issues/1168
    try {
      for (const property in fn) {
        if (Object.prototype.hasOwnProperty.call(fn, property)) {
          sentryWrapped[property] = fn[property];
        }
      }
    } catch (_oO) {} // eslint-disable-line no-empty

    // Signal that this function has been wrapped/filled already
    // for both debugging and to prevent it to being wrapped/filled twice
    markFunctionWrapped(sentryWrapped, fn);

    addNonEnumerableProperty(fn, '__sentry_wrapped__', sentryWrapped);

    // Restore original function name (not all browsers allow that)
    try {
      const descriptor = Object.getOwnPropertyDescriptor(sentryWrapped, 'name') ;
      if (descriptor.configurable) {
        Object.defineProperty(sentryWrapped, 'name', {
          get() {
            return fn.name;
          },
        });
      }
      // eslint-disable-next-line no-empty
    } catch (_oO) {}

    return sentryWrapped;
  }

  /**
   * This function creates an exception from a JavaScript Error
   */
  function exceptionFromError(stackParser, ex) {
    // Get the frames first since Opera can lose the stack if we touch anything else first
    const frames = parseStackFrames(stackParser, ex);

    const exception = {
      type: ex && ex.name,
      value: extractMessage(ex),
    };

    if (frames.length) {
      exception.stacktrace = { frames };
    }

    if (exception.type === undefined && exception.value === '') {
      exception.value = 'Unrecoverable error caught';
    }

    return exception;
  }

  /**
   * @hidden
   */
  function eventFromPlainObject(
    stackParser,
    exception,
    syntheticException,
    isUnhandledRejection,
  ) {
    const hub = getCurrentHub();
    const client = hub.getClient();
    const normalizeDepth = client && client.getOptions().normalizeDepth;

    const event = {
      exception: {
        values: [
          {
            type: isEvent(exception) ? exception.constructor.name : isUnhandledRejection ? 'UnhandledRejection' : 'Error',
            value: `Non-Error ${
            isUnhandledRejection ? 'promise rejection' : 'exception'
          } captured with keys: ${extractExceptionKeysForMessage(exception)}`,
          },
        ],
      },
      extra: {
        __serialized__: normalizeToSize(exception, normalizeDepth),
      },
    };

    if (syntheticException) {
      const frames = parseStackFrames(stackParser, syntheticException);
      if (frames.length) {
        // event.exception.values[0] has been set above
        (event.exception ).values[0].stacktrace = { frames };
      }
    }

    return event;
  }

  /**
   * @hidden
   */
  function eventFromError(stackParser, ex) {
    return {
      exception: {
        values: [exceptionFromError(stackParser, ex)],
      },
    };
  }

  /** Parses stack frames from an error */
  function parseStackFrames(
    stackParser,
    ex,
  ) {
    // Access and store the stacktrace property before doing ANYTHING
    // else to it because Opera is not very good at providing it
    // reliably in other circumstances.
    const stacktrace = ex.stacktrace || ex.stack || '';

    const popSize = getPopSize(ex);

    try {
      return stackParser(stacktrace, popSize);
    } catch (e) {
      // no-empty
    }

    return [];
  }

  // Based on our own mapping pattern - https://github.com/getsentry/sentry/blob/9f08305e09866c8bd6d0c24f5b0aabdd7dd6c59c/src/sentry/lang/javascript/errormapping.py#L83-L108
  const reactMinifiedRegexp = /Minified React error #\d+;/i;

  function getPopSize(ex) {
    if (ex) {
      if (typeof ex.framesToPop === 'number') {
        return ex.framesToPop;
      }

      if (reactMinifiedRegexp.test(ex.message)) {
        return 1;
      }
    }

    return 0;
  }

  /**
   * There are cases where stacktrace.message is an Event object
   * https://github.com/getsentry/sentry-javascript/issues/1949
   * In this specific case we try to extract stacktrace.message.error.message
   */
  function extractMessage(ex) {
    const message = ex && ex.message;
    if (!message) {
      return 'No error message';
    }
    if (message.error && typeof message.error.message === 'string') {
      return message.error.message;
    }
    return message;
  }

  /**
   * Creates an {@link Event} from all inputs to `captureException` and non-primitive inputs to `captureMessage`.
   * @hidden
   */
  function eventFromException(
    stackParser,
    exception,
    hint,
    attachStacktrace,
  ) {
    const syntheticException = (hint && hint.syntheticException) || undefined;
    const event = eventFromUnknownInput(stackParser, exception, syntheticException, attachStacktrace);
    addExceptionMechanism(event); // defaults to { type: 'generic', handled: true }
    event.level = 'error';
    if (hint && hint.event_id) {
      event.event_id = hint.event_id;
    }
    return resolvedSyncPromise(event);
  }

  /**
   * Builds and Event from a Message
   * @hidden
   */
  function eventFromMessage(
    stackParser,
    message,
    // eslint-disable-next-line deprecation/deprecation
    level = 'info',
    hint,
    attachStacktrace,
  ) {
    const syntheticException = (hint && hint.syntheticException) || undefined;
    const event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
    event.level = level;
    if (hint && hint.event_id) {
      event.event_id = hint.event_id;
    }
    return resolvedSyncPromise(event);
  }

  /**
   * @hidden
   */
  function eventFromUnknownInput(
    stackParser,
    exception,
    syntheticException,
    attachStacktrace,
    isUnhandledRejection,
  ) {
    let event;

    if (isErrorEvent$1(exception ) && (exception ).error) {
      // If it is an ErrorEvent with `error` property, extract it to get actual Error
      const errorEvent = exception ;
      return eventFromError(stackParser, errorEvent.error );
    }

    // If it is a `DOMError` (which is a legacy API, but still supported in some browsers) then we just extract the name
    // and message, as it doesn't provide anything else. According to the spec, all `DOMExceptions` should also be
    // `Error`s, but that's not the case in IE11, so in that case we treat it the same as we do a `DOMError`.
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/DOMError
    // https://developer.mozilla.org/en-US/docs/Web/API/DOMException
    // https://webidl.spec.whatwg.org/#es-DOMException-specialness
    if (isDOMError(exception ) || isDOMException(exception )) {
      const domException = exception ;

      if ('stack' in (exception )) {
        event = eventFromError(stackParser, exception );
      } else {
        const name = domException.name || (isDOMError(domException) ? 'DOMError' : 'DOMException');
        const message = domException.message ? `${name}: ${domException.message}` : name;
        event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
        addExceptionTypeValue(event, message);
      }
      if ('code' in domException) {
        event.tags = { ...event.tags, 'DOMException.code': `${domException.code}` };
      }

      return event;
    }
    if (isError(exception)) {
      // we have a real Error object, do nothing
      return eventFromError(stackParser, exception);
    }
    if (isPlainObject(exception) || isEvent(exception)) {
      // If it's a plain object or an instance of `Event` (the built-in JS kind, not this SDK's `Event` type), serialize
      // it manually. This will allow us to group events based on top-level keys which is much better than creating a new
      // group on any key/value change.
      const objectException = exception ;
      event = eventFromPlainObject(stackParser, objectException, syntheticException, isUnhandledRejection);
      addExceptionMechanism(event, {
        synthetic: true,
      });
      return event;
    }

    // If none of previous checks were valid, then it means that it's not:
    // - an instance of DOMError
    // - an instance of DOMException
    // - an instance of Event
    // - an instance of Error
    // - a valid ErrorEvent (one with an error property)
    // - a plain Object
    //
    // So bail out and capture it as a simple message:
    event = eventFromString(stackParser, exception , syntheticException, attachStacktrace);
    addExceptionTypeValue(event, `${exception}`, undefined);
    addExceptionMechanism(event, {
      synthetic: true,
    });

    return event;
  }

  /**
   * @hidden
   */
  function eventFromString(
    stackParser,
    input,
    syntheticException,
    attachStacktrace,
  ) {
    const event = {
      message: input,
    };

    if (attachStacktrace && syntheticException) {
      const frames = parseStackFrames(stackParser, syntheticException);
      if (frames.length) {
        event.exception = {
          values: [{ value: input, stacktrace: { frames } }],
        };
      }
    }

    return event;
  }

  /* eslint-disable @typescript-eslint/no-unsafe-member-access */

  /** JSDoc */

  /** maxStringLength gets capped to prevent 100 breadcrumbs exceeding 1MB event payload size */
  const MAX_ALLOWED_STRING_LENGTH = 1024;

  const BREADCRUMB_INTEGRATION_ID = 'Breadcrumbs';

  /**
   * Default Breadcrumbs instrumentations
   * TODO: Deprecated - with v6, this will be renamed to `Instrument`
   */
  class Breadcrumbs  {
    /**
     * @inheritDoc
     */
     static __initStatic() {this.id = BREADCRUMB_INTEGRATION_ID;}

    /**
     * @inheritDoc
     */
     __init() {this.name = Breadcrumbs.id;}

    /**
     * Options of the breadcrumbs integration.
     */
    // This field is public, because we use it in the browser client to check if the `sentry` option is enabled.

    /**
     * @inheritDoc
     */
     constructor(options) {Breadcrumbs.prototype.__init.call(this);
      this.options = {
        console: true,
        dom: true,
        fetch: true,
        history: true,
        sentry: true,
        xhr: true,
        ...options,
      };
    }

    /**
     * Instrument browser built-ins w/ breadcrumb capturing
     *  - Console API
     *  - DOM API (click/typing)
     *  - XMLHttpRequest API
     *  - Fetch API
     *  - History API
     */
     setupOnce() {
      if (this.options.console) {
        addInstrumentationHandler('console', _consoleBreadcrumb);
      }
      if (this.options.dom) {
        addInstrumentationHandler('dom', _domBreadcrumb(this.options.dom));
      }
      if (this.options.xhr) {
        addInstrumentationHandler('xhr', _xhrBreadcrumb);
      }
      if (this.options.fetch) {
        addInstrumentationHandler('fetch', _fetchBreadcrumb);
      }
      if (this.options.history) {
        addInstrumentationHandler('history', _historyBreadcrumb);
      }
    }

    /**
     * Adds a breadcrumb for Sentry events or transactions if this option is enabled.
     */
     addSentryBreadcrumb(event) {
      if (this.options.sentry) {
        getCurrentHub().addBreadcrumb(
          {
            category: `sentry.${event.type === 'transaction' ? 'transaction' : 'event'}`,
            event_id: event.event_id,
            level: event.level,
            message: getEventDescription(event),
          },
          {
            event,
          },
        );
      }
    }
  } Breadcrumbs.__initStatic();

  /**
   * A HOC that creaes a function that creates breadcrumbs from DOM API calls.
   * This is a HOC so that we get access to dom options in the closure.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function _domBreadcrumb(dom) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function _innerDomBreadcrumb(handlerData) {
      let target;
      let keyAttrs = typeof dom === 'object' ? dom.serializeAttribute : undefined;

      let maxStringLength =
        typeof dom === 'object' && typeof dom.maxStringLength === 'number' ? dom.maxStringLength : undefined;
      if (maxStringLength && maxStringLength > MAX_ALLOWED_STRING_LENGTH) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
          logger.warn(
            `\`dom.maxStringLength\` cannot exceed ${MAX_ALLOWED_STRING_LENGTH}, but a value of ${maxStringLength} was configured. Sentry will use ${MAX_ALLOWED_STRING_LENGTH} instead.`,
          );
        maxStringLength = MAX_ALLOWED_STRING_LENGTH;
      }

      if (typeof keyAttrs === 'string') {
        keyAttrs = [keyAttrs];
      }

      // Accessing event.target can throw (see getsentry/raven-js#838, #768)
      try {
        target = handlerData.event.target
          ? htmlTreeAsString(handlerData.event.target , { keyAttrs, maxStringLength })
          : htmlTreeAsString(handlerData.event , { keyAttrs, maxStringLength });
      } catch (e) {
        target = '<unknown>';
      }

      if (target.length === 0) {
        return;
      }

      getCurrentHub().addBreadcrumb(
        {
          category: `ui.${handlerData.name}`,
          message: target,
        },
        {
          event: handlerData.event,
          name: handlerData.name,
          global: handlerData.global,
        },
      );
    }

    return _innerDomBreadcrumb;
  }

  /**
   * Creates breadcrumbs from console API calls
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function _consoleBreadcrumb(handlerData) {
    // This is a hack to fix a Vue3-specific bug that causes an infinite loop of
    // console warnings. This happens when a Vue template is rendered with
    // an undeclared variable, which we try to stringify, ultimately causing
    // Vue to issue another warning which repeats indefinitely.
    // see: https://github.com/getsentry/sentry-javascript/pull/6010
    // see: https://github.com/getsentry/sentry-javascript/issues/5916
    for (let i = 0; i < handlerData.args.length; i++) {
      if (handlerData.args[i] === 'ref=Ref<') {
        handlerData.args[i + 1] = 'viewRef';
        break;
      }
    }
    const breadcrumb = {
      category: 'console',
      data: {
        arguments: handlerData.args,
        logger: 'console',
      },
      level: severityLevelFromString(handlerData.level),
      message: safeJoin(handlerData.args, ' '),
    };

    if (handlerData.level === 'assert') {
      if (handlerData.args[0] === false) {
        breadcrumb.message = `Assertion failed: ${safeJoin(handlerData.args.slice(1), ' ') || 'console.assert'}`;
        breadcrumb.data.arguments = handlerData.args.slice(1);
      } else {
        // Don't capture a breadcrumb for passed assertions
        return;
      }
    }

    getCurrentHub().addBreadcrumb(breadcrumb, {
      input: handlerData.args,
      level: handlerData.level,
    });
  }

  /**
   * Creates breadcrumbs from XHR API calls
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function _xhrBreadcrumb(handlerData) {
    if (handlerData.endTimestamp) {
      // We only capture complete, non-sentry requests
      if (handlerData.xhr.__sentry_own_request__) {
        return;
      }

      const { method, url, status_code, body } = handlerData.xhr.__sentry_xhr__ || {};

      getCurrentHub().addBreadcrumb(
        {
          category: 'xhr',
          data: {
            method,
            url,
            status_code,
          },
          type: 'http',
        },
        {
          xhr: handlerData.xhr,
          input: body,
        },
      );

      return;
    }
  }

  /**
   * Creates breadcrumbs from fetch API calls
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function _fetchBreadcrumb(handlerData) {
    // We only capture complete fetch requests
    if (!handlerData.endTimestamp) {
      return;
    }

    if (handlerData.fetchData.url.match(/sentry_key/) && handlerData.fetchData.method === 'POST') {
      // We will not create breadcrumbs for fetch requests that contain `sentry_key` (internal sentry requests)
      return;
    }

    if (handlerData.error) {
      getCurrentHub().addBreadcrumb(
        {
          category: 'fetch',
          data: handlerData.fetchData,
          level: 'error',
          type: 'http',
        },
        {
          data: handlerData.error,
          input: handlerData.args,
        },
      );
    } else {
      getCurrentHub().addBreadcrumb(
        {
          category: 'fetch',
          data: {
            ...handlerData.fetchData,
            status_code: handlerData.response.status,
          },
          type: 'http',
        },
        {
          input: handlerData.args,
          response: handlerData.response,
        },
      );
    }
  }

  /**
   * Creates breadcrumbs from history API calls
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function _historyBreadcrumb(handlerData) {
    let from = handlerData.from;
    let to = handlerData.to;
    const parsedLoc = parseUrl(WINDOW$2.location.href);
    let parsedFrom = parseUrl(from);
    const parsedTo = parseUrl(to);

    // Initial pushState doesn't provide `from` information
    if (!parsedFrom.path) {
      parsedFrom = parsedLoc;
    }

    // Use only the path component of the URL if the URL matches the current
    // document (almost all the time when using pushState)
    if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host) {
      to = parsedTo.relative;
    }
    if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host) {
      from = parsedFrom.relative;
    }

    getCurrentHub().addBreadcrumb({
      category: 'navigation',
      data: {
        from,
        to,
      },
    });
  }

  /**
   * Configuration options for the Sentry Browser SDK.
   * @see @sentry/types Options for more information.
   */

  /**
   * The Sentry Browser SDK Client.
   *
   * @see BrowserOptions for documentation on configuration options.
   * @see SentryClient for usage documentation.
   */
  class BrowserClient extends BaseClient {
    /**
     * Creates a new Browser SDK instance.
     *
     * @param options Configuration options for this SDK.
     */
     constructor(options) {
      const sdkSource = WINDOW$2.SENTRY_SDK_SOURCE || getSDKSource();

      options._metadata = options._metadata || {};
      options._metadata.sdk = options._metadata.sdk || {
        name: 'sentry.javascript.browser',
        packages: [
          {
            name: `${sdkSource}:@sentry/browser`,
            version: SDK_VERSION,
          },
        ],
        version: SDK_VERSION,
      };

      super(options);

      if (options.sendClientReports && WINDOW$2.document) {
        WINDOW$2.document.addEventListener('visibilitychange', () => {
          if (WINDOW$2.document.visibilityState === 'hidden') {
            this._flushOutcomes();
          }
        });
      }
    }

    /**
     * @inheritDoc
     */
     eventFromException(exception, hint) {
      return eventFromException(this._options.stackParser, exception, hint, this._options.attachStacktrace);
    }

    /**
     * @inheritDoc
     */
     eventFromMessage(
      message,
      // eslint-disable-next-line deprecation/deprecation
      level = 'info',
      hint,
    ) {
      return eventFromMessage(this._options.stackParser, message, level, hint, this._options.attachStacktrace);
    }

    /**
     * @inheritDoc
     */
     sendEvent(event, hint) {
      // We only want to add the sentry event breadcrumb when the user has the breadcrumb integration installed and
      // activated its `sentry` option.
      // We also do not want to use the `Breadcrumbs` class here directly, because we do not want it to be included in
      // bundles, if it is not used by the SDK.
      // This all sadly is a bit ugly, but we currently don't have a "pre-send" hook on the integrations so we do it this
      // way for now.
      const breadcrumbIntegration = this.getIntegrationById(BREADCRUMB_INTEGRATION_ID) ;
      // We check for definedness of `addSentryBreadcrumb` in case users provided their own integration with id
      // "Breadcrumbs" that does not have this function.
      if (breadcrumbIntegration && breadcrumbIntegration.addSentryBreadcrumb) {
        breadcrumbIntegration.addSentryBreadcrumb(event);
      }

      super.sendEvent(event, hint);
    }

    /**
     * @inheritDoc
     */
     _prepareEvent(event, hint, scope) {
      event.platform = event.platform || 'javascript';
      return super._prepareEvent(event, hint, scope);
    }

    /**
     * Sends client reports as an envelope.
     */
     _flushOutcomes() {
      const outcomes = this._clearOutcomes();

      if (outcomes.length === 0) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('No outcomes to send');
        return;
      }

      if (!this._dsn) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('No dsn provided, will not send outcomes');
        return;
      }

      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('Sending outcomes:', outcomes);

      const url = getEnvelopeEndpointWithUrlEncodedAuth(this._dsn, this._options);
      const envelope = createClientReportEnvelope(outcomes, this._options.tunnel && dsnToString(this._dsn));

      try {
        const isRealNavigator = Object.prototype.toString.call(WINDOW$2 && WINDOW$2.navigator) === '[object Navigator]';
        const hasSendBeacon = isRealNavigator && typeof WINDOW$2.navigator.sendBeacon === 'function';
        // Make sure beacon is not used if user configures custom transport options
        if (hasSendBeacon && !this._options.transportOptions) {
          // Prevent illegal invocations - https://xgwang.me/posts/you-may-not-know-beacon/#it-may-throw-error%2C-be-sure-to-catch
          const sendBeacon = WINDOW$2.navigator.sendBeacon.bind(WINDOW$2.navigator);
          sendBeacon(url, serializeEnvelope(envelope));
        } else {
          // If beacon is not supported or if they are using the tunnel option
          // use our regular transport to send client reports to Sentry.
          this._sendEnvelope(envelope);
        }
      } catch (e) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.error(e);
      }
    }
  }

  let cachedFetchImpl = undefined;

  /**
   * A special usecase for incorrectly wrapped Fetch APIs in conjunction with ad-blockers.
   * Whenever someone wraps the Fetch API and returns the wrong promise chain,
   * this chain becomes orphaned and there is no possible way to capture it's rejections
   * other than allowing it bubble up to this very handler. eg.
   *
   * const f = window.fetch;
   * window.fetch = function () {
   *   const p = f.apply(this, arguments);
   *
   *   p.then(function() {
   *     console.log('hi.');
   *   });
   *
   *   return p;
   * }
   *
   * `p.then(function () { ... })` is producing a completely separate promise chain,
   * however, what's returned is `p` - the result of original `fetch` call.
   *
   * This mean, that whenever we use the Fetch API to send our own requests, _and_
   * some ad-blocker blocks it, this orphaned chain will _always_ reject,
   * effectively causing another event to be captured.
   * This makes a whole process become an infinite loop, which we need to somehow
   * deal with, and break it in one way or another.
   *
   * To deal with this issue, we are making sure that we _always_ use the real
   * browser Fetch API, instead of relying on what `window.fetch` exposes.
   * The only downside to this would be missing our own requests as breadcrumbs,
   * but because we are already not doing this, it should be just fine.
   *
   * Possible failed fetch error messages per-browser:
   *
   * Chrome:  Failed to fetch
   * Edge:    Failed to Fetch
   * Firefox: NetworkError when attempting to fetch resource
   * Safari:  resource blocked by content blocker
   */
  function getNativeFetchImplementation() {
    if (cachedFetchImpl) {
      return cachedFetchImpl;
    }

    /* eslint-disable @typescript-eslint/unbound-method */

    // Fast path to avoid DOM I/O
    if (isNativeFetch(WINDOW$2.fetch)) {
      return (cachedFetchImpl = WINDOW$2.fetch.bind(WINDOW$2));
    }

    const document = WINDOW$2.document;
    let fetchImpl = WINDOW$2.fetch;
    // eslint-disable-next-line deprecation/deprecation
    if (document && typeof document.createElement === 'function') {
      try {
        const sandbox = document.createElement('iframe');
        sandbox.hidden = true;
        document.head.appendChild(sandbox);
        const contentWindow = sandbox.contentWindow;
        if (contentWindow && contentWindow.fetch) {
          fetchImpl = contentWindow.fetch;
        }
        document.head.removeChild(sandbox);
      } catch (e) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
          logger.warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', e);
      }
    }

    return (cachedFetchImpl = fetchImpl.bind(WINDOW$2));
    /* eslint-enable @typescript-eslint/unbound-method */
  }

  /** Clears cached fetch impl */
  function clearCachedFetchImplementation() {
    cachedFetchImpl = undefined;
  }

  /**
   * Creates a Transport that uses the Fetch API to send events to Sentry.
   */
  function makeFetchTransport(
    options,
    nativeFetch = getNativeFetchImplementation(),
  ) {
    function makeRequest(request) {
      const requestOptions = {
        body: request.body,
        method: 'POST',
        referrerPolicy: 'origin',
        headers: options.headers,
        // Outgoing requests are usually cancelled when navigating to a different page, causing a "TypeError: Failed to
        // fetch" error and sending a "network_error" client-outcome - in Chrome, the request status shows "(cancelled)".
        // The `keepalive` flag keeps outgoing requests alive, even when switching pages. We want this since we're
        // frequently sending events right before the user is switching pages (eg. whenfinishing navigation transactions).
        // Gotchas:
        // - `keepalive` isn't supported by Firefox
        // - As per spec (https://fetch.spec.whatwg.org/#http-network-or-cache-fetch), a request with `keepalive: true`
        //   and a content length of > 64 kibibytes returns a network error. We will therefore only activate the flag when
        //   we're below that limit.
        keepalive: request.body.length <= 65536,
        ...options.fetchOptions,
      };

      try {
        return nativeFetch(options.url, requestOptions).then(response => ({
          statusCode: response.status,
          headers: {
            'x-sentry-rate-limits': response.headers.get('X-Sentry-Rate-Limits'),
            'retry-after': response.headers.get('Retry-After'),
          },
        }));
      } catch (e) {
        clearCachedFetchImplementation();
        return rejectedSyncPromise(e);
      }
    }

    return createTransport(options, makeRequest);
  }

  /**
   * The DONE ready state for XmlHttpRequest
   *
   * Defining it here as a constant b/c XMLHttpRequest.DONE is not always defined
   * (e.g. during testing, it is `undefined`)
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState}
   */
  const XHR_READYSTATE_DONE = 4;

  /**
   * Creates a Transport that uses the XMLHttpRequest API to send events to Sentry.
   */
  function makeXHRTransport(options) {
    function makeRequest(request) {
      return new SyncPromise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onerror = reject;

        xhr.onreadystatechange = () => {
          if (xhr.readyState === XHR_READYSTATE_DONE) {
            resolve({
              statusCode: xhr.status,
              headers: {
                'x-sentry-rate-limits': xhr.getResponseHeader('X-Sentry-Rate-Limits'),
                'retry-after': xhr.getResponseHeader('Retry-After'),
              },
            });
          }
        };

        xhr.open('POST', options.url);

        for (const header in options.headers) {
          if (Object.prototype.hasOwnProperty.call(options.headers, header)) {
            xhr.setRequestHeader(header, options.headers[header]);
          }
        }

        xhr.send(request.body);
      });
    }

    return createTransport(options, makeRequest);
  }

  // global reference to slice
  const UNKNOWN_FUNCTION = '?';
  const CHROME_PRIORITY = 30;
  const WINJS_PRIORITY = 40;
  const GECKO_PRIORITY = 50;

  function createFrame(filename, func, lineno, colno) {
    const frame = {
      filename,
      abs_path: filename, // As opposed to filename, abs_path is immutable (I can't control your actions but don't touch it!)
      function: func,
      in_app: true, // All browser frames are considered in_app
    };

    if (lineno !== undefined) {
      frame.lineno = lineno;
    }

    if (colno !== undefined) {
      frame.colno = colno;
    }

    return frame;
  }

  // Chromium based browsers: Chrome, Brave, new Opera, new Edge
  const chromeRegex =
    /^\s*at (?:(.*\).*?|.*?) ?\((?:address at )?)?(?:async )?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
  const chromeEvalRegex = /\((\S*)(?::(\d+))(?::(\d+))\)/;

  const chrome = line => {
    const parts = chromeRegex.exec(line);

    if (parts) {
      const isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line

      if (isEval) {
        const subMatch = chromeEvalRegex.exec(parts[2]);

        if (subMatch) {
          // throw out eval line/column and use top-most line/column number
          parts[2] = subMatch[1]; // url
          parts[3] = subMatch[2]; // line
          parts[4] = subMatch[3]; // column
        }
      }

      // Kamil: One more hack won't hurt us right? Understanding and adding more rules on top of these regexps right now
      // would be way too time consuming. (TODO: Rewrite whole RegExp to be more readable)
      const [func, filename] = extractSafariExtensionDetails(parts[1] || UNKNOWN_FUNCTION, parts[2]);

      return createFrame(filename, func, parts[3] ? +parts[3] : undefined, parts[4] ? +parts[4] : undefined);
    }

    return;
  };

  const chromeStackLineParser = [CHROME_PRIORITY, chrome];

  // gecko regex: `(?:bundle|\d+\.js)`: `bundle` is for react native, `\d+\.js` also but specifically for ram bundles because it
  // generates filenames without a prefix like `file://` the filenames in the stacktrace are just 42.js
  // We need this specific case for now because we want no other regex to match.
  const geckoREgex =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
  const geckoEvalRegex = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

  const gecko = line => {
    const parts = geckoREgex.exec(line);

    if (parts) {
      const isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
      if (isEval) {
        const subMatch = geckoEvalRegex.exec(parts[3]);

        if (subMatch) {
          // throw out eval line/column and use top-most line number
          parts[1] = parts[1] || 'eval';
          parts[3] = subMatch[1];
          parts[4] = subMatch[2];
          parts[5] = ''; // no column when eval
        }
      }

      let filename = parts[3];
      let func = parts[1] || UNKNOWN_FUNCTION;
      [func, filename] = extractSafariExtensionDetails(func, filename);

      return createFrame(filename, func, parts[4] ? +parts[4] : undefined, parts[5] ? +parts[5] : undefined);
    }

    return;
  };

  const geckoStackLineParser = [GECKO_PRIORITY, gecko];

  const winjsRegex =
    /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;

  const winjs = line => {
    const parts = winjsRegex.exec(line);

    return parts
      ? createFrame(parts[2], parts[1] || UNKNOWN_FUNCTION, +parts[3], parts[4] ? +parts[4] : undefined)
      : undefined;
  };

  const winjsStackLineParser = [WINJS_PRIORITY, winjs];

  const defaultStackLineParsers = [chromeStackLineParser, geckoStackLineParser, winjsStackLineParser];

  const defaultStackParser = createStackParser(...defaultStackLineParsers);

  /**
   * Safari web extensions, starting version unknown, can produce "frames-only" stacktraces.
   * What it means, is that instead of format like:
   *
   * Error: wat
   *   at function@url:row:col
   *   at function@url:row:col
   *   at function@url:row:col
   *
   * it produces something like:
   *
   *   function@url:row:col
   *   function@url:row:col
   *   function@url:row:col
   *
   * Because of that, it won't be captured by `chrome` RegExp and will fall into `Gecko` branch.
   * This function is extracted so that we can use it in both places without duplicating the logic.
   * Unfortunately "just" changing RegExp is too complicated now and making it pass all tests
   * and fix this case seems like an impossible, or at least way too time-consuming task.
   */
  const extractSafariExtensionDetails = (func, filename) => {
    const isSafariExtension = func.indexOf('safari-extension') !== -1;
    const isSafariWebExtension = func.indexOf('safari-web-extension') !== -1;

    return isSafariExtension || isSafariWebExtension
      ? [
          func.indexOf('@') !== -1 ? func.split('@')[0] : UNKNOWN_FUNCTION,
          isSafariExtension ? `safari-extension:${filename}` : `safari-web-extension:${filename}`,
        ]
      : [func, filename];
  };

  /* eslint-disable @typescript-eslint/no-unsafe-member-access */

  /** Global handlers */
  class GlobalHandlers  {
    /**
     * @inheritDoc
     */
     static __initStatic() {this.id = 'GlobalHandlers';}

    /**
     * @inheritDoc
     */
     __init() {this.name = GlobalHandlers.id;}

    /** JSDoc */

    /**
     * Stores references functions to installing handlers. Will set to undefined
     * after they have been run so that they are not used twice.
     */
     __init2() {this._installFunc = {
      onerror: _installGlobalOnErrorHandler,
      onunhandledrejection: _installGlobalOnUnhandledRejectionHandler,
    };}

    /** JSDoc */
     constructor(options) {GlobalHandlers.prototype.__init.call(this);GlobalHandlers.prototype.__init2.call(this);
      this._options = {
        onerror: true,
        onunhandledrejection: true,
        ...options,
      };
    }
    /**
     * @inheritDoc
     */
     setupOnce() {
      Error.stackTraceLimit = 50;
      const options = this._options;

      // We can disable guard-for-in as we construct the options object above + do checks against
      // `this._installFunc` for the property.
      // eslint-disable-next-line guard-for-in
      for (const key in options) {
        const installFunc = this._installFunc[key ];
        if (installFunc && options[key ]) {
          globalHandlerLog(key);
          installFunc();
          this._installFunc[key ] = undefined;
        }
      }
    }
  } GlobalHandlers.__initStatic();

  /** JSDoc */
  function _installGlobalOnErrorHandler() {
    addInstrumentationHandler(
      'error',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (data) => {
        const [hub, stackParser, attachStacktrace] = getHubAndOptions();
        if (!hub.getIntegration(GlobalHandlers)) {
          return;
        }
        const { msg, url, line, column, error } = data;
        if (shouldIgnoreOnError() || (error && error.__sentry_own_request__)) {
          return;
        }

        const event =
          error === undefined && isString(msg)
            ? _eventFromIncompleteOnError(msg, url, line, column)
            : _enhanceEventWithInitialFrame(
                eventFromUnknownInput(stackParser, error || msg, undefined, attachStacktrace, false),
                url,
                line,
                column,
              );

        event.level = 'error';

        addMechanismAndCapture(hub, error, event, 'onerror');
      },
    );
  }

  /** JSDoc */
  function _installGlobalOnUnhandledRejectionHandler() {
    addInstrumentationHandler(
      'unhandledrejection',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (e) => {
        const [hub, stackParser, attachStacktrace] = getHubAndOptions();
        if (!hub.getIntegration(GlobalHandlers)) {
          return;
        }
        let error = e;

        // dig the object of the rejection out of known event types
        try {
          // PromiseRejectionEvents store the object of the rejection under 'reason'
          // see https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent
          if ('reason' in e) {
            error = e.reason;
          }
          // something, somewhere, (likely a browser extension) effectively casts PromiseRejectionEvents
          // to CustomEvents, moving the `promise` and `reason` attributes of the PRE into
          // the CustomEvent's `detail` attribute, since they're not part of CustomEvent's spec
          // see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent and
          // https://github.com/getsentry/sentry-javascript/issues/2380
          else if ('detail' in e && 'reason' in e.detail) {
            error = e.detail.reason;
          }
        } catch (_oO) {
          // no-empty
        }

        if (shouldIgnoreOnError() || (error && error.__sentry_own_request__)) {
          return true;
        }

        const event = isPrimitive(error)
          ? _eventFromRejectionWithPrimitive(error)
          : eventFromUnknownInput(stackParser, error, undefined, attachStacktrace, true);

        event.level = 'error';

        addMechanismAndCapture(hub, error, event, 'onunhandledrejection');
        return;
      },
    );
  }

  /**
   * Create an event from a promise rejection where the `reason` is a primitive.
   *
   * @param reason: The `reason` property of the promise rejection
   * @returns An Event object with an appropriate `exception` value
   */
  function _eventFromRejectionWithPrimitive(reason) {
    return {
      exception: {
        values: [
          {
            type: 'UnhandledRejection',
            // String() is needed because the Primitive type includes symbols (which can't be automatically stringified)
            value: `Non-Error promise rejection captured with value: ${String(reason)}`,
          },
        ],
      },
    };
  }

  /**
   * This function creates a stack from an old, error-less onerror handler.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function _eventFromIncompleteOnError(msg, url, line, column) {
    const ERROR_TYPES_RE =
      /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;

    // If 'message' is ErrorEvent, get real message from inside
    let message = isErrorEvent$1(msg) ? msg.message : msg;
    let name = 'Error';

    const groups = message.match(ERROR_TYPES_RE);
    if (groups) {
      name = groups[1];
      message = groups[2];
    }

    const event = {
      exception: {
        values: [
          {
            type: name,
            value: message,
          },
        ],
      },
    };

    return _enhanceEventWithInitialFrame(event, url, line, column);
  }

  /** JSDoc */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function _enhanceEventWithInitialFrame(event, url, line, column) {
    // event.exception
    const e = (event.exception = event.exception || {});
    // event.exception.values
    const ev = (e.values = e.values || []);
    // event.exception.values[0]
    const ev0 = (ev[0] = ev[0] || {});
    // event.exception.values[0].stacktrace
    const ev0s = (ev0.stacktrace = ev0.stacktrace || {});
    // event.exception.values[0].stacktrace.frames
    const ev0sf = (ev0s.frames = ev0s.frames || []);

    const colno = isNaN(parseInt(column, 10)) ? undefined : column;
    const lineno = isNaN(parseInt(line, 10)) ? undefined : line;
    const filename = isString(url) && url.length > 0 ? url : getLocationHref();

    // event.exception.values[0].stacktrace.frames
    if (ev0sf.length === 0) {
      ev0sf.push({
        colno,
        filename,
        function: '?',
        in_app: true,
        lineno,
      });
    }

    return event;
  }

  function globalHandlerLog(type) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log(`Global Handler attached: ${type}`);
  }

  function addMechanismAndCapture(hub, error, event, type) {
    addExceptionMechanism(event, {
      handled: false,
      type,
    });
    hub.captureEvent(event, {
      originalException: error,
    });
  }

  function getHubAndOptions() {
    const hub = getCurrentHub();
    const client = hub.getClient();
    const options = (client && client.getOptions()) || {
      stackParser: () => [],
      attachStacktrace: false,
    };
    return [hub, options.stackParser, options.attachStacktrace];
  }

  const DEFAULT_EVENT_TARGET = [
    'EventTarget',
    'Window',
    'Node',
    'ApplicationCache',
    'AudioTrackList',
    'ChannelMergerNode',
    'CryptoOperation',
    'EventSource',
    'FileReader',
    'HTMLUnknownElement',
    'IDBDatabase',
    'IDBRequest',
    'IDBTransaction',
    'KeyOperation',
    'MediaController',
    'MessagePort',
    'ModalWindow',
    'Notification',
    'SVGElementInstance',
    'Screen',
    'TextTrack',
    'TextTrackCue',
    'TextTrackList',
    'WebSocket',
    'WebSocketWorker',
    'Worker',
    'XMLHttpRequest',
    'XMLHttpRequestEventTarget',
    'XMLHttpRequestUpload',
  ];

  /** Wrap timer functions and event targets to catch errors and provide better meta data */
  class TryCatch  {
    /**
     * @inheritDoc
     */
     static __initStatic() {this.id = 'TryCatch';}

    /**
     * @inheritDoc
     */
     __init() {this.name = TryCatch.id;}

    /** JSDoc */

    /**
     * @inheritDoc
     */
     constructor(options) {TryCatch.prototype.__init.call(this);
      this._options = {
        XMLHttpRequest: true,
        eventTarget: true,
        requestAnimationFrame: true,
        setInterval: true,
        setTimeout: true,
        ...options,
      };
    }

    /**
     * Wrap timer functions and event targets to catch errors
     * and provide better metadata.
     */
     setupOnce() {
      if (this._options.setTimeout) {
        fill(WINDOW$2, 'setTimeout', _wrapTimeFunction);
      }

      if (this._options.setInterval) {
        fill(WINDOW$2, 'setInterval', _wrapTimeFunction);
      }

      if (this._options.requestAnimationFrame) {
        fill(WINDOW$2, 'requestAnimationFrame', _wrapRAF);
      }

      if (this._options.XMLHttpRequest && 'XMLHttpRequest' in WINDOW$2) {
        fill(XMLHttpRequest.prototype, 'send', _wrapXHR);
      }

      const eventTargetOption = this._options.eventTarget;
      if (eventTargetOption) {
        const eventTarget = Array.isArray(eventTargetOption) ? eventTargetOption : DEFAULT_EVENT_TARGET;
        eventTarget.forEach(_wrapEventTarget);
      }
    }
  } TryCatch.__initStatic();

  /** JSDoc */
  function _wrapTimeFunction(original) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function ( ...args) {
      const originalCallback = args[0];
      args[0] = wrap$1(originalCallback, {
        mechanism: {
          data: { function: getFunctionName(original) },
          handled: true,
          type: 'instrument',
        },
      });
      return original.apply(this, args);
    };
  }

  /** JSDoc */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function _wrapRAF(original) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function ( callback) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return original.apply(this, [
        wrap$1(callback, {
          mechanism: {
            data: {
              function: 'requestAnimationFrame',
              handler: getFunctionName(original),
            },
            handled: true,
            type: 'instrument',
          },
        }),
      ]);
    };
  }

  /** JSDoc */
  function _wrapXHR(originalSend) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function ( ...args) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const xhr = this;
      const xmlHttpRequestProps = ['onload', 'onerror', 'onprogress', 'onreadystatechange'];

      xmlHttpRequestProps.forEach(prop => {
        if (prop in xhr && typeof xhr[prop] === 'function') {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          fill(xhr, prop, function (original) {
            const wrapOptions = {
              mechanism: {
                data: {
                  function: prop,
                  handler: getFunctionName(original),
                },
                handled: true,
                type: 'instrument',
              },
            };

            // If Instrument integration has been called before TryCatch, get the name of original function
            const originalFunction = getOriginalFunction(original);
            if (originalFunction) {
              wrapOptions.mechanism.data.handler = getFunctionName(originalFunction);
            }

            // Otherwise wrap directly
            return wrap$1(original, wrapOptions);
          });
        }
      });

      return originalSend.apply(this, args);
    };
  }

  /** JSDoc */
  function _wrapEventTarget(target) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const globalObject = WINDOW$2 ;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const proto = globalObject[target] && globalObject[target].prototype;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, no-prototype-builtins
    if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
      return;
    }

    fill(proto, 'addEventListener', function (original)

   {
      return function (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any

        eventName,
        fn,
        options,
      ) {
        try {
          if (typeof fn.handleEvent === 'function') {
            // ESlint disable explanation:
            //  First, it is generally safe to call `wrap` with an unbound function. Furthermore, using `.bind()` would
            //  introduce a bug here, because bind returns a new function that doesn't have our
            //  flags(like __sentry_original__) attached. `wrap` checks for those flags to avoid unnecessary wrapping.
            //  Without those flags, every call to addEventListener wraps the function again, causing a memory leak.
            // eslint-disable-next-line @typescript-eslint/unbound-method
            fn.handleEvent = wrap$1(fn.handleEvent, {
              mechanism: {
                data: {
                  function: 'handleEvent',
                  handler: getFunctionName(fn),
                  target,
                },
                handled: true,
                type: 'instrument',
              },
            });
          }
        } catch (err) {
          // can sometimes get 'Permission denied to access property "handle Event'
        }

        return original.apply(this, [
          eventName,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          wrap$1(fn , {
            mechanism: {
              data: {
                function: 'addEventListener',
                handler: getFunctionName(fn),
                target,
              },
              handled: true,
              type: 'instrument',
            },
          }),
          options,
        ]);
      };
    });

    fill(
      proto,
      'removeEventListener',
      function (
        originalRemoveEventListener,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ) {
        return function (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any

          eventName,
          fn,
          options,
        ) {
          /**
           * There are 2 possible scenarios here:
           *
           * 1. Someone passes a callback, which was attached prior to Sentry initialization, or by using unmodified
           * method, eg. `document.addEventListener.call(el, name, handler). In this case, we treat this function
           * as a pass-through, and call original `removeEventListener` with it.
           *
           * 2. Someone passes a callback, which was attached after Sentry was initialized, which means that it was using
           * our wrapped version of `addEventListener`, which internally calls `wrap` helper.
           * This helper "wraps" whole callback inside a try/catch statement, and attached appropriate metadata to it,
           * in order for us to make a distinction between wrapped/non-wrapped functions possible.
           * If a function was wrapped, it has additional property of `__sentry_wrapped__`, holding the handler.
           *
           * When someone adds a handler prior to initialization, and then do it again, but after,
           * then we have to detach both of them. Otherwise, if we'd detach only wrapped one, it'd be impossible
           * to get rid of the initial handler and it'd stick there forever.
           */
          const wrappedEventHandler = fn ;
          try {
            const originalEventHandler = wrappedEventHandler && wrappedEventHandler.__sentry_wrapped__;
            if (originalEventHandler) {
              originalRemoveEventListener.call(this, eventName, originalEventHandler, options);
            }
          } catch (e) {
            // ignore, accessing __sentry_wrapped__ will throw in some Selenium environments
          }
          return originalRemoveEventListener.call(this, eventName, wrappedEventHandler, options);
        };
      },
    );
  }

  const DEFAULT_KEY = 'cause';
  const DEFAULT_LIMIT = 5;

  /** Adds SDK info to an event. */
  class LinkedErrors  {
    /**
     * @inheritDoc
     */
     static __initStatic() {this.id = 'LinkedErrors';}

    /**
     * @inheritDoc
     */
      __init() {this.name = LinkedErrors.id;}

    /**
     * @inheritDoc
     */

    /**
     * @inheritDoc
     */

    /**
     * @inheritDoc
     */
     constructor(options = {}) {LinkedErrors.prototype.__init.call(this);
      this._key = options.key || DEFAULT_KEY;
      this._limit = options.limit || DEFAULT_LIMIT;
    }

    /**
     * @inheritDoc
     */
     setupOnce() {
      const client = getCurrentHub().getClient();
      if (!client) {
        return;
      }
      addGlobalEventProcessor((event, hint) => {
        const self = getCurrentHub().getIntegration(LinkedErrors);
        return self ? _handler(client.getOptions().stackParser, self._key, self._limit, event, hint) : event;
      });
    }
  } LinkedErrors.__initStatic();

  /**
   * @inheritDoc
   */
  function _handler(
    parser,
    key,
    limit,
    event,
    hint,
  ) {
    if (!event.exception || !event.exception.values || !hint || !isInstanceOf(hint.originalException, Error)) {
      return event;
    }
    const linkedErrors = _walkErrorTree(parser, limit, hint.originalException , key);
    event.exception.values = [...linkedErrors, ...event.exception.values];
    return event;
  }

  /**
   * JSDOC
   */
  function _walkErrorTree(
    parser,
    limit,
    error,
    key,
    stack = [],
  ) {
    if (!isInstanceOf(error[key], Error) || stack.length + 1 >= limit) {
      return stack;
    }
    const exception = exceptionFromError(parser, error[key]);
    return _walkErrorTree(parser, limit, error[key], key, [exception, ...stack]);
  }

  /** HttpContext integration collects information about HTTP request headers */
  class HttpContext  {constructor() { HttpContext.prototype.__init.call(this); }
    /**
     * @inheritDoc
     */
     static __initStatic() {this.id = 'HttpContext';}

    /**
     * @inheritDoc
     */
     __init() {this.name = HttpContext.id;}

    /**
     * @inheritDoc
     */
     setupOnce() {
      addGlobalEventProcessor((event) => {
        if (getCurrentHub().getIntegration(HttpContext)) {
          // if none of the information we want exists, don't bother
          if (!WINDOW$2.navigator && !WINDOW$2.location && !WINDOW$2.document) {
            return event;
          }

          // grab as much info as exists and add it to the event
          const url = (event.request && event.request.url) || (WINDOW$2.location && WINDOW$2.location.href);
          const { referrer } = WINDOW$2.document || {};
          const { userAgent } = WINDOW$2.navigator || {};

          const headers = {
            ...(event.request && event.request.headers),
            ...(referrer && { Referer: referrer }),
            ...(userAgent && { 'User-Agent': userAgent }),
          };
          const request = { ...event.request, ...(url && { url }), headers };

          return { ...event, request };
        }
        return event;
      });
    }
  } HttpContext.__initStatic();

  /** Deduplication filter */
  class Dedupe  {constructor() { Dedupe.prototype.__init.call(this); }
    /**
     * @inheritDoc
     */
     static __initStatic() {this.id = 'Dedupe';}

    /**
     * @inheritDoc
     */
     __init() {this.name = Dedupe.id;}

    /**
     * @inheritDoc
     */

    /**
     * @inheritDoc
     */
     setupOnce(addGlobalEventProcessor, getCurrentHub) {
      const eventProcessor = currentEvent => {
        // We want to ignore any non-error type events, e.g. transactions or replays
        // These should never be deduped, and also not be compared against as _previousEvent.
        if (currentEvent.type) {
          return currentEvent;
        }

        const self = getCurrentHub().getIntegration(Dedupe);
        if (self) {
          // Juuust in case something goes wrong
          try {
            if (_shouldDropEvent(currentEvent, self._previousEvent)) {
              (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.warn('Event dropped due to being a duplicate of previously captured event.');
              return null;
            }
          } catch (_oO) {
            return (self._previousEvent = currentEvent);
          }

          return (self._previousEvent = currentEvent);
        }
        return currentEvent;
      };

      eventProcessor.id = this.name;
      addGlobalEventProcessor(eventProcessor);
    }
  } Dedupe.__initStatic();

  /** JSDoc */
  function _shouldDropEvent(currentEvent, previousEvent) {
    if (!previousEvent) {
      return false;
    }

    if (_isSameMessageEvent(currentEvent, previousEvent)) {
      return true;
    }

    if (_isSameExceptionEvent(currentEvent, previousEvent)) {
      return true;
    }

    return false;
  }

  /** JSDoc */
  function _isSameMessageEvent(currentEvent, previousEvent) {
    const currentMessage = currentEvent.message;
    const previousMessage = previousEvent.message;

    // If neither event has a message property, they were both exceptions, so bail out
    if (!currentMessage && !previousMessage) {
      return false;
    }

    // If only one event has a stacktrace, but not the other one, they are not the same
    if ((currentMessage && !previousMessage) || (!currentMessage && previousMessage)) {
      return false;
    }

    if (currentMessage !== previousMessage) {
      return false;
    }

    if (!_isSameFingerprint(currentEvent, previousEvent)) {
      return false;
    }

    if (!_isSameStacktrace(currentEvent, previousEvent)) {
      return false;
    }

    return true;
  }

  /** JSDoc */
  function _isSameExceptionEvent(currentEvent, previousEvent) {
    const previousException = _getExceptionFromEvent(previousEvent);
    const currentException = _getExceptionFromEvent(currentEvent);

    if (!previousException || !currentException) {
      return false;
    }

    if (previousException.type !== currentException.type || previousException.value !== currentException.value) {
      return false;
    }

    if (!_isSameFingerprint(currentEvent, previousEvent)) {
      return false;
    }

    if (!_isSameStacktrace(currentEvent, previousEvent)) {
      return false;
    }

    return true;
  }

  /** JSDoc */
  function _isSameStacktrace(currentEvent, previousEvent) {
    let currentFrames = _getFramesFromEvent(currentEvent);
    let previousFrames = _getFramesFromEvent(previousEvent);

    // If neither event has a stacktrace, they are assumed to be the same
    if (!currentFrames && !previousFrames) {
      return true;
    }

    // If only one event has a stacktrace, but not the other one, they are not the same
    if ((currentFrames && !previousFrames) || (!currentFrames && previousFrames)) {
      return false;
    }

    currentFrames = currentFrames ;
    previousFrames = previousFrames ;

    // If number of frames differ, they are not the same
    if (previousFrames.length !== currentFrames.length) {
      return false;
    }

    // Otherwise, compare the two
    for (let i = 0; i < previousFrames.length; i++) {
      const frameA = previousFrames[i];
      const frameB = currentFrames[i];

      if (
        frameA.filename !== frameB.filename ||
        frameA.lineno !== frameB.lineno ||
        frameA.colno !== frameB.colno ||
        frameA.function !== frameB.function
      ) {
        return false;
      }
    }

    return true;
  }

  /** JSDoc */
  function _isSameFingerprint(currentEvent, previousEvent) {
    let currentFingerprint = currentEvent.fingerprint;
    let previousFingerprint = previousEvent.fingerprint;

    // If neither event has a fingerprint, they are assumed to be the same
    if (!currentFingerprint && !previousFingerprint) {
      return true;
    }

    // If only one event has a fingerprint, but not the other one, they are not the same
    if ((currentFingerprint && !previousFingerprint) || (!currentFingerprint && previousFingerprint)) {
      return false;
    }

    currentFingerprint = currentFingerprint ;
    previousFingerprint = previousFingerprint ;

    // Otherwise, compare the two
    try {
      return !!(currentFingerprint.join('') === previousFingerprint.join(''));
    } catch (_oO) {
      return false;
    }
  }

  /** JSDoc */
  function _getExceptionFromEvent(event) {
    return event.exception && event.exception.values && event.exception.values[0];
  }

  /** JSDoc */
  function _getFramesFromEvent(event) {
    const exception = event.exception;

    if (exception) {
      try {
        // @ts-ignore Object could be undefined
        return exception.values[0].stacktrace.frames;
      } catch (_oO) {
        return undefined;
      }
    }
    return undefined;
  }

  const defaultIntegrations = [
    new InboundFilters(),
    new FunctionToString(),
    new TryCatch(),
    new Breadcrumbs(),
    new GlobalHandlers(),
    new LinkedErrors(),
    new Dedupe(),
    new HttpContext(),
  ];

  /**
   * A magic string that build tooling can leverage in order to inject a release value into the SDK.
   */

  /**
   * The Sentry Browser SDK Client.
   *
   * To use this SDK, call the {@link init} function as early as possible when
   * loading the web page. To set context information or send manual events, use
   * the provided methods.
   *
   * @example
   *
   * ```
   *
   * import { init } from '@sentry/browser';
   *
   * init({
   *   dsn: '__DSN__',
   *   // ...
   * });
   * ```
   *
   * @example
   * ```
   *
   * import { configureScope } from '@sentry/browser';
   * configureScope((scope: Scope) => {
   *   scope.setExtra({ battery: 0.7 });
   *   scope.setTag({ user_mode: 'admin' });
   *   scope.setUser({ id: '4711' });
   * });
   * ```
   *
   * @example
   * ```
   *
   * import { addBreadcrumb } from '@sentry/browser';
   * addBreadcrumb({
   *   message: 'My Breadcrumb',
   *   // ...
   * });
   * ```
   *
   * @example
   *
   * ```
   *
   * import * as Sentry from '@sentry/browser';
   * Sentry.captureMessage('Hello, world!');
   * Sentry.captureException(new Error('Good bye'));
   * Sentry.captureEvent({
   *   message: 'Manual',
   *   stacktrace: [
   *     // ...
   *   ],
   * });
   * ```
   *
   * @see {@link BrowserOptions} for documentation on configuration options.
   */
  function init$1(options = {}) {
    if (options.defaultIntegrations === undefined) {
      options.defaultIntegrations = defaultIntegrations;
    }
    if (options.release === undefined) {
      // This allows build tooling to find-and-replace __SENTRY_RELEASE__ to inject a release value
      if (typeof __SENTRY_RELEASE__ === 'string') {
        options.release = __SENTRY_RELEASE__;
      }

      // This supports the variable that sentry-webpack-plugin injects
      if (WINDOW$2.SENTRY_RELEASE && WINDOW$2.SENTRY_RELEASE.id) {
        options.release = WINDOW$2.SENTRY_RELEASE.id;
      }
    }
    if (options.autoSessionTracking === undefined) {
      options.autoSessionTracking = true;
    }
    if (options.sendClientReports === undefined) {
      options.sendClientReports = true;
    }

    const clientOptions = {
      ...options,
      stackParser: stackParserFromStackParserOptions(options.stackParser || defaultStackParser),
      integrations: getIntegrationsToSetup(options),
      transport: options.transport || (supportsFetch() ? makeFetchTransport : makeXHRTransport),
    };

    initAndBind(BrowserClient, clientOptions);

    if (options.autoSessionTracking) {
      startSessionTracking();
    }
  }

  function startSessionOnHub(hub) {
    hub.startSession({ ignoreDuration: true });
    hub.captureSession();
  }

  /**
   * Enable automatic Session Tracking for the initial page load.
   */
  function startSessionTracking() {
    if (typeof WINDOW$2.document === 'undefined') {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        logger.warn('Session tracking in non-browser environment with @sentry/browser is not supported.');
      return;
    }

    const hub = getCurrentHub();

    // The only way for this to be false is for there to be a version mismatch between @sentry/browser (>= 6.0.0) and
    // @sentry/hub (< 5.27.0). In the simple case, there won't ever be such a mismatch, because the two packages are
    // pinned at the same version in package.json, but there are edge cases where it's possible. See
    // https://github.com/getsentry/sentry-javascript/issues/3207 and
    // https://github.com/getsentry/sentry-javascript/issues/3234 and
    // https://github.com/getsentry/sentry-javascript/issues/3278.
    if (!hub.captureSession) {
      return;
    }

    // The session duration for browser sessions does not track a meaningful
    // concept that can be used as a metric.
    // Automatically captured sessions are akin to page views, and thus we
    // discard their duration.
    startSessionOnHub(hub);

    // We want to create a session for every navigation as well
    addInstrumentationHandler('history', ({ from, to }) => {
      // Don't create an additional session for the initial route or if the location did not change
      if (!(from === undefined || from === to)) {
        startSessionOnHub(getCurrentHub());
      }
    });
  }

  // exporting a separate copy of `WINDOW` rather than exporting the one from `@sentry/browser`
  // prevents the browser package from being bundled in the CDN bundle, and avoids a
  // circular dependency between the browser and replay packages should `@sentry/browser` import
  // from `@sentry/replay` in the future
  const WINDOW$1 = GLOBAL_OBJ ;

  const REPLAY_SESSION_KEY = 'sentryReplaySession';
  const REPLAY_EVENT_NAME = 'replay_event';
  const UNABLE_TO_SEND_REPLAY = 'Unable to send Replay';

  // The idle limit for a session
  const SESSION_IDLE_DURATION = 300000; // 5 minutes in ms

  // Grace period to keep a session when a user changes tabs or hides window
  const VISIBILITY_CHANGE_TIMEOUT = SESSION_IDLE_DURATION;

  // The maximum length of a session
  const MAX_SESSION_LIFE = 3600000; // 60 minutes

  /** Default flush delays */
  const DEFAULT_FLUSH_MIN_DELAY = 5000;
  // XXX: Temp fix for our debounce logic where `maxWait` would never occur if it
  // was the same as `wait`
  const DEFAULT_FLUSH_MAX_DELAY = 5500;

  /* How long to wait for error checkouts */
  const ERROR_CHECKOUT_TIME = 60000;

  const RETRY_BASE_INTERVAL = 5000;
  const RETRY_MAX_COUNT = 3;

  var NodeType;
  (function (NodeType) {
      NodeType[NodeType["Document"] = 0] = "Document";
      NodeType[NodeType["DocumentType"] = 1] = "DocumentType";
      NodeType[NodeType["Element"] = 2] = "Element";
      NodeType[NodeType["Text"] = 3] = "Text";
      NodeType[NodeType["CDATA"] = 4] = "CDATA";
      NodeType[NodeType["Comment"] = 5] = "Comment";
  })(NodeType || (NodeType = {}));

  function isElement(n) {
      return n.nodeType === n.ELEMENT_NODE;
  }
  function isShadowRoot(n) {
      const host = n === null || n === void 0 ? void 0 : n.host;
      return Boolean(host && host.shadowRoot && host.shadowRoot === n);
  }
  function maskInputValue({ input, maskInputSelector, unmaskInputSelector, maskInputOptions, tagName, type, value, maskInputFn, }) {
      let text = value || '';
      if (unmaskInputSelector && input.matches(unmaskInputSelector)) {
          return text;
      }
      if (maskInputOptions[tagName.toLowerCase()] ||
          maskInputOptions[type] ||
          (maskInputSelector && input.matches(maskInputSelector))) {
          if (maskInputFn) {
              text = maskInputFn(text);
          }
          else {
              text = '*'.repeat(text.length);
          }
      }
      return text;
  }
  const ORIGINAL_ATTRIBUTE_NAME = '__rrweb_original__';
  function is2DCanvasBlank(canvas) {
      const ctx = canvas.getContext('2d');
      if (!ctx)
          return true;
      const chunkSize = 50;
      for (let x = 0; x < canvas.width; x += chunkSize) {
          for (let y = 0; y < canvas.height; y += chunkSize) {
              const getImageData = ctx.getImageData;
              const originalGetImageData = ORIGINAL_ATTRIBUTE_NAME in getImageData
                  ? getImageData[ORIGINAL_ATTRIBUTE_NAME]
                  : getImageData;
              const pixelBuffer = new Uint32Array(originalGetImageData.call(ctx, x, y, Math.min(chunkSize, canvas.width - x), Math.min(chunkSize, canvas.height - y)).data.buffer);
              if (pixelBuffer.some((pixel) => pixel !== 0))
                  return false;
          }
      }
      return true;
  }

  let _id = 1;
  const tagNameRegex = new RegExp('[^a-z0-9-_:]');
  const IGNORED_NODE = -2;
  function defaultMaskFn(str) {
      return str.replace(/[\S]/g, '*');
  }
  function genId() {
      return _id++;
  }
  function getValidTagName(element) {
      if (element instanceof HTMLFormElement) {
          return 'form';
      }
      const processedTagName = element.tagName.toLowerCase().trim();
      if (tagNameRegex.test(processedTagName)) {
          return 'div';
      }
      return processedTagName;
  }
  function getCssRulesString(s) {
      try {
          const rules = s.rules || s.cssRules;
          return rules ? Array.from(rules).map(getCssRuleString).join('') : null;
      }
      catch (error) {
          return null;
      }
  }
  function getCssRuleString(rule) {
      let cssStringified = rule.cssText;
      if (isCSSImportRule(rule)) {
          try {
              cssStringified = getCssRulesString(rule.styleSheet) || cssStringified;
          }
          catch (_a) {
          }
      }
      return cssStringified;
  }
  function isCSSImportRule(rule) {
      return 'styleSheet' in rule;
  }
  function stringifyStyleSheet(sheet) {
      return sheet.cssRules
          ? Array.from(sheet.cssRules)
              .map((rule) => rule.cssText || '')
              .join('')
          : '';
  }
  function extractOrigin(url) {
      let origin = '';
      if (url.indexOf('//') > -1) {
          origin = url.split('/').slice(0, 3).join('/');
      }
      else {
          origin = url.split('/')[0];
      }
      origin = origin.split('?')[0];
      return origin;
  }
  let canvasService;
  let canvasCtx;
  const URL_IN_CSS_REF = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm;
  const RELATIVE_PATH = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/;
  const DATA_URI = /^(data:)([^,]*),(.*)/i;
  function absoluteToStylesheet(cssText, href) {
      return (cssText || '').replace(URL_IN_CSS_REF, (origin, quote1, path1, quote2, path2, path3) => {
          const filePath = path1 || path2 || path3;
          const maybeQuote = quote1 || quote2 || '';
          if (!filePath) {
              return origin;
          }
          if (!RELATIVE_PATH.test(filePath)) {
              return `url(${maybeQuote}${filePath}${maybeQuote})`;
          }
          if (DATA_URI.test(filePath)) {
              return `url(${maybeQuote}${filePath}${maybeQuote})`;
          }
          if (filePath[0] === '/') {
              return `url(${maybeQuote}${extractOrigin(href) + filePath}${maybeQuote})`;
          }
          const stack = href.split('/');
          const parts = filePath.split('/');
          stack.pop();
          for (const part of parts) {
              if (part === '.') {
                  continue;
              }
              else if (part === '..') {
                  stack.pop();
              }
              else {
                  stack.push(part);
              }
          }
          return `url(${maybeQuote}${stack.join('/')}${maybeQuote})`;
      });
  }
  const SRCSET_NOT_SPACES = /^[^ \t\n\r\u000c]+/;
  const SRCSET_COMMAS_OR_SPACES = /^[, \t\n\r\u000c]+/;
  function getAbsoluteSrcsetString(doc, attributeValue) {
      if (attributeValue.trim() === '') {
          return attributeValue;
      }
      let pos = 0;
      function collectCharacters(regEx) {
          let chars;
          let match = regEx.exec(attributeValue.substring(pos));
          if (match) {
              chars = match[0];
              pos += chars.length;
              return chars;
          }
          return '';
      }
      let output = [];
      while (true) {
          collectCharacters(SRCSET_COMMAS_OR_SPACES);
          if (pos >= attributeValue.length) {
              break;
          }
          let url = collectCharacters(SRCSET_NOT_SPACES);
          if (url.slice(-1) === ',') {
              url = absoluteToDoc(doc, url.substring(0, url.length - 1));
              output.push(url);
          }
          else {
              let descriptorsStr = '';
              url = absoluteToDoc(doc, url);
              let inParens = false;
              while (true) {
                  let c = attributeValue.charAt(pos);
                  if (c === '') {
                      output.push((url + descriptorsStr).trim());
                      break;
                  }
                  else if (!inParens) {
                      if (c === ',') {
                          pos += 1;
                          output.push((url + descriptorsStr).trim());
                          break;
                      }
                      else if (c === '(') {
                          inParens = true;
                      }
                  }
                  else {
                      if (c === ')') {
                          inParens = false;
                      }
                  }
                  descriptorsStr += c;
                  pos += 1;
              }
          }
      }
      return output.join(', ');
  }
  function absoluteToDoc(doc, attributeValue) {
      if (!attributeValue || attributeValue.trim() === '') {
          return attributeValue;
      }
      const a = doc.createElement('a');
      a.href = attributeValue;
      return a.href;
  }
  function isSVGElement(el) {
      return Boolean(el.tagName === 'svg' || el.ownerSVGElement);
  }
  function getHref() {
      const a = document.createElement('a');
      a.href = '';
      return a.href;
  }
  function transformAttribute(doc, tagName, name, value, maskAllText, maskTextFn) {
      if (name === 'src' || (name === 'href' && value)) {
          return absoluteToDoc(doc, value);
      }
      else if (name === 'xlink:href' && value && value[0] !== '#') {
          return absoluteToDoc(doc, value);
      }
      else if (name === 'background' &&
          value &&
          (tagName === 'table' || tagName === 'td' || tagName === 'th')) {
          return absoluteToDoc(doc, value);
      }
      else if (name === 'srcset' && value) {
          return getAbsoluteSrcsetString(doc, value);
      }
      else if (name === 'style' && value) {
          return absoluteToStylesheet(value, getHref());
      }
      else if (tagName === 'object' && name === 'data' && value) {
          return absoluteToDoc(doc, value);
      }
      else if (maskAllText && ['placeholder', 'title', 'aria-label'].indexOf(name) > -1) {
          return maskTextFn ? maskTextFn(value) : defaultMaskFn(value);
      }
      else {
          return value;
      }
  }
  function _isBlockedElement(element, blockClass, blockSelector, unblockSelector) {
      if (unblockSelector && element.matches(unblockSelector)) {
          return false;
      }
      if (typeof blockClass === 'string') {
          if (element.classList.contains(blockClass)) {
              return true;
          }
      }
      else {
          for (let eIndex = 0; eIndex < element.classList.length; eIndex++) {
              const className = element.classList[eIndex];
              if (blockClass.test(className)) {
                  return true;
              }
          }
      }
      if (blockSelector) {
          return element.matches(blockSelector);
      }
      return false;
  }
  function needMaskingText(node, maskTextClass, maskTextSelector, unmaskTextSelector, maskAllText) {
      if (!node) {
          return false;
      }
      if (node.nodeType !== node.ELEMENT_NODE) {
          return needMaskingText(node.parentNode, maskTextClass, maskTextSelector, unmaskTextSelector, maskAllText);
      }
      if (unmaskTextSelector) {
          if (node.matches(unmaskTextSelector) ||
              node.closest(unmaskTextSelector)) {
              return false;
          }
      }
      if (maskAllText) {
          return true;
      }
      if (typeof maskTextClass === 'string') {
          if (node.classList.contains(maskTextClass)) {
              return true;
          }
      }
      else {
          for (let eIndex = 0; eIndex < node.classList.length; eIndex++) {
              const className = node.classList[eIndex];
              if (maskTextClass.test(className)) {
                  return true;
              }
          }
      }
      if (maskTextSelector) {
          if (node.matches(maskTextSelector)) {
              return true;
          }
      }
      return needMaskingText(node.parentNode, maskTextClass, maskTextSelector, unmaskTextSelector, maskAllText);
  }
  function onceIframeLoaded(iframeEl, listener, iframeLoadTimeout) {
      const win = iframeEl.contentWindow;
      if (!win) {
          return;
      }
      let fired = false;
      let readyState;
      try {
          readyState = win.document.readyState;
      }
      catch (error) {
          return;
      }
      if (readyState !== 'complete') {
          const timer = setTimeout(() => {
              if (!fired) {
                  listener();
                  fired = true;
              }
          }, iframeLoadTimeout);
          iframeEl.addEventListener('load', () => {
              clearTimeout(timer);
              fired = true;
              listener();
          });
          return;
      }
      const blankUrl = 'about:blank';
      if (win.location.href !== blankUrl ||
          iframeEl.src === blankUrl ||
          iframeEl.src === '') {
          setTimeout(listener, 0);
          return;
      }
      iframeEl.addEventListener('load', listener);
  }
  function serializeNode(n, options) {
      var _a;
      const { doc, blockClass, blockSelector, unblockSelector, maskTextClass, maskTextSelector, unmaskTextSelector, inlineStylesheet, maskInputSelector, unmaskInputSelector, maskAllText, maskInputOptions = {}, maskTextFn, maskInputFn, dataURLOptions = {}, inlineImages, recordCanvas, keepIframeSrcFn, } = options;
      let rootId;
      if (doc.__sn) {
          const docId = doc.__sn.id;
          rootId = docId === 1 ? undefined : docId;
      }
      switch (n.nodeType) {
          case n.DOCUMENT_NODE:
              if (n.compatMode !== 'CSS1Compat') {
                  return {
                      type: NodeType.Document,
                      childNodes: [],
                      compatMode: n.compatMode,
                      rootId,
                  };
              }
              else {
                  return {
                      type: NodeType.Document,
                      childNodes: [],
                      rootId,
                  };
              }
          case n.DOCUMENT_TYPE_NODE:
              return {
                  type: NodeType.DocumentType,
                  name: n.name,
                  publicId: n.publicId,
                  systemId: n.systemId,
                  rootId,
              };
          case n.ELEMENT_NODE:
              const needBlock = _isBlockedElement(n, blockClass, blockSelector, unblockSelector);
              const tagName = getValidTagName(n);
              let attributes = {};
              for (const { name, value } of Array.from(n.attributes)) {
                  attributes[name] = transformAttribute(doc, tagName, name, value, maskAllText, maskTextFn);
              }
              if (tagName === 'link' && inlineStylesheet) {
                  const stylesheet = Array.from(doc.styleSheets).find((s) => {
                      return s.href === n.href;
                  });
                  let cssText = null;
                  if (stylesheet) {
                      cssText = getCssRulesString(stylesheet);
                  }
                  if (cssText) {
                      delete attributes.rel;
                      delete attributes.href;
                      attributes._cssText = absoluteToStylesheet(cssText, stylesheet.href);
                  }
              }
              if (tagName === 'style' &&
                  n.sheet &&
                  !(n.innerText ||
                      n.textContent ||
                      '').trim().length) {
                  const cssText = getCssRulesString(n.sheet);
                  if (cssText) {
                      attributes._cssText = absoluteToStylesheet(cssText, getHref());
                  }
              }
              if (tagName === 'input' ||
                  tagName === 'textarea' ||
                  tagName === 'select') {
                  const value = n.value;
                  if (attributes.type !== 'radio' &&
                      attributes.type !== 'checkbox' &&
                      attributes.type !== 'submit' &&
                      attributes.type !== 'button' &&
                      value) {
                      attributes.value = maskInputValue({
                          input: n,
                          type: attributes.type,
                          tagName,
                          value,
                          maskInputSelector,
                          unmaskInputSelector,
                          maskInputOptions,
                          maskInputFn,
                      });
                  }
                  else if (n.checked) {
                      attributes.checked = n.checked;
                  }
              }
              if (tagName === 'option') {
                  if (n.selected && !maskInputOptions['select']) {
                      attributes.selected = true;
                  }
                  else {
                      delete attributes.selected;
                  }
              }
              if (tagName === 'canvas' && recordCanvas) {
                  if (n.__context === '2d') {
                      if (!is2DCanvasBlank(n)) {
                          attributes.rr_dataURL = n.toDataURL(dataURLOptions.type, dataURLOptions.quality);
                      }
                  }
                  else if (!('__context' in n)) {
                      const canvasDataURL = n.toDataURL(dataURLOptions.type, dataURLOptions.quality);
                      const blankCanvas = document.createElement('canvas');
                      blankCanvas.width = n.width;
                      blankCanvas.height = n.height;
                      const blankCanvasDataURL = blankCanvas.toDataURL(dataURLOptions.type, dataURLOptions.quality);
                      if (canvasDataURL !== blankCanvasDataURL) {
                          attributes.rr_dataURL = canvasDataURL;
                      }
                  }
              }
              if (tagName === 'img' && inlineImages) {
                  if (!canvasService) {
                      canvasService = doc.createElement('canvas');
                      canvasCtx = canvasService.getContext('2d');
                  }
                  const image = n;
                  const oldValue = image.crossOrigin;
                  image.crossOrigin = 'anonymous';
                  const recordInlineImage = () => {
                      try {
                          canvasService.width = image.naturalWidth;
                          canvasService.height = image.naturalHeight;
                          canvasCtx.drawImage(image, 0, 0);
                          attributes.rr_dataURL = canvasService.toDataURL(dataURLOptions.type, dataURLOptions.quality);
                      }
                      catch (err) {
                          console.warn(`Cannot inline img src=${image.currentSrc}! Error: ${err}`);
                      }
                      oldValue
                          ? (attributes.crossOrigin = oldValue)
                          : delete attributes.crossOrigin;
                  };
                  if (image.complete && image.naturalWidth !== 0)
                      recordInlineImage();
                  else
                      image.onload = recordInlineImage;
              }
              if (tagName === 'audio' || tagName === 'video') {
                  attributes.rr_mediaState = n.paused
                      ? 'paused'
                      : 'played';
                  attributes.rr_mediaCurrentTime = n.currentTime;
              }
              if (n.scrollLeft) {
                  attributes.rr_scrollLeft = n.scrollLeft;
              }
              if (n.scrollTop) {
                  attributes.rr_scrollTop = n.scrollTop;
              }
              if (needBlock) {
                  const { width, height } = n.getBoundingClientRect();
                  attributes = {
                      class: attributes.class,
                      rr_width: `${width}px`,
                      rr_height: `${height}px`,
                  };
              }
              if (tagName === 'iframe' && !keepIframeSrcFn(attributes.src)) {
                  if (!n.contentDocument) {
                      attributes.rr_src = attributes.src;
                  }
                  delete attributes.src;
              }
              return {
                  type: NodeType.Element,
                  tagName,
                  attributes,
                  childNodes: [],
                  isSVG: isSVGElement(n) || undefined,
                  needBlock,
                  rootId,
              };
          case n.TEXT_NODE:
              const parentTagName = n.parentNode && n.parentNode.tagName;
              let textContent = n.textContent;
              const isStyle = parentTagName === 'STYLE' ? true : undefined;
              const isScript = parentTagName === 'SCRIPT' ? true : undefined;
              if (isStyle && textContent) {
                  try {
                      if (n.nextSibling || n.previousSibling) {
                      }
                      else if ((_a = n.parentNode.sheet) === null || _a === void 0 ? void 0 : _a.cssRules) {
                          textContent = stringifyStyleSheet(n.parentNode.sheet);
                      }
                  }
                  catch (err) {
                      console.warn(`Cannot get CSS styles from text's parentNode. Error: ${err}`, n);
                  }
                  textContent = absoluteToStylesheet(textContent, getHref());
              }
              if (isScript) {
                  textContent = 'SCRIPT_PLACEHOLDER';
              }
              if (parentTagName === 'TEXTAREA' && textContent) {
                  textContent = maskInputValue({
                      input: n.parentNode,
                      maskInputSelector,
                      unmaskInputSelector,
                      maskInputOptions,
                      tagName: parentTagName,
                      type: null,
                      value: textContent,
                      maskInputFn,
                  });
              }
              else if (!isStyle &&
                  !isScript &&
                  needMaskingText(n, maskTextClass, maskTextSelector, unmaskTextSelector, maskAllText) &&
                  textContent) {
                  textContent = maskTextFn
                      ? maskTextFn(textContent)
                      : defaultMaskFn(textContent);
              }
              return {
                  type: NodeType.Text,
                  textContent: textContent || '',
                  isStyle,
                  rootId,
              };
          case n.CDATA_SECTION_NODE:
              return {
                  type: NodeType.CDATA,
                  textContent: '',
                  rootId,
              };
          case n.COMMENT_NODE:
              return {
                  type: NodeType.Comment,
                  textContent: n.textContent || '',
                  rootId,
              };
          default:
              return false;
      }
  }
  function lowerIfExists(maybeAttr) {
      if (maybeAttr === undefined) {
          return '';
      }
      else {
          return maybeAttr.toLowerCase();
      }
  }
  function slimDOMExcluded(sn, slimDOMOptions) {
      if (slimDOMOptions.comment && sn.type === NodeType.Comment) {
          return true;
      }
      else if (sn.type === NodeType.Element) {
          if (slimDOMOptions.script &&
              (sn.tagName === 'script' ||
                  (sn.tagName === 'link' &&
                      sn.attributes.rel === 'preload' &&
                      sn.attributes.as === 'script') ||
                  (sn.tagName === 'link' &&
                      sn.attributes.rel === 'prefetch' &&
                      typeof sn.attributes.href === 'string' &&
                      sn.attributes.href.endsWith('.js')))) {
              return true;
          }
          else if (slimDOMOptions.headFavicon &&
              ((sn.tagName === 'link' && sn.attributes.rel === 'shortcut icon') ||
                  (sn.tagName === 'meta' &&
                      (lowerIfExists(sn.attributes.name).match(/^msapplication-tile(image|color)$/) ||
                          lowerIfExists(sn.attributes.name) === 'application-name' ||
                          lowerIfExists(sn.attributes.rel) === 'icon' ||
                          lowerIfExists(sn.attributes.rel) === 'apple-touch-icon' ||
                          lowerIfExists(sn.attributes.rel) === 'shortcut icon')))) {
              return true;
          }
          else if (sn.tagName === 'meta') {
              if (slimDOMOptions.headMetaDescKeywords &&
                  lowerIfExists(sn.attributes.name).match(/^description|keywords$/)) {
                  return true;
              }
              else if (slimDOMOptions.headMetaSocial &&
                  (lowerIfExists(sn.attributes.property).match(/^(og|twitter|fb):/) ||
                      lowerIfExists(sn.attributes.name).match(/^(og|twitter):/) ||
                      lowerIfExists(sn.attributes.name) === 'pinterest')) {
                  return true;
              }
              else if (slimDOMOptions.headMetaRobots &&
                  (lowerIfExists(sn.attributes.name) === 'robots' ||
                      lowerIfExists(sn.attributes.name) === 'googlebot' ||
                      lowerIfExists(sn.attributes.name) === 'bingbot')) {
                  return true;
              }
              else if (slimDOMOptions.headMetaHttpEquiv &&
                  sn.attributes['http-equiv'] !== undefined) {
                  return true;
              }
              else if (slimDOMOptions.headMetaAuthorship &&
                  (lowerIfExists(sn.attributes.name) === 'author' ||
                      lowerIfExists(sn.attributes.name) === 'generator' ||
                      lowerIfExists(sn.attributes.name) === 'framework' ||
                      lowerIfExists(sn.attributes.name) === 'publisher' ||
                      lowerIfExists(sn.attributes.name) === 'progid' ||
                      lowerIfExists(sn.attributes.property).match(/^article:/) ||
                      lowerIfExists(sn.attributes.property).match(/^product:/))) {
                  return true;
              }
              else if (slimDOMOptions.headMetaVerification &&
                  (lowerIfExists(sn.attributes.name) === 'google-site-verification' ||
                      lowerIfExists(sn.attributes.name) === 'yandex-verification' ||
                      lowerIfExists(sn.attributes.name) === 'csrf-token' ||
                      lowerIfExists(sn.attributes.name) === 'p:domain_verify' ||
                      lowerIfExists(sn.attributes.name) === 'verify-v1' ||
                      lowerIfExists(sn.attributes.name) === 'verification' ||
                      lowerIfExists(sn.attributes.name) === 'shopify-checkout-api-token')) {
                  return true;
              }
          }
      }
      return false;
  }
  function serializeNodeWithId(n, options) {
      const { doc, map, blockClass, blockSelector, unblockSelector, maskTextClass, maskTextSelector, unmaskTextSelector, skipChild = false, inlineStylesheet = true, maskInputSelector, unmaskInputSelector, maskAllText, maskInputOptions = {}, maskTextFn, maskInputFn, slimDOMOptions, dataURLOptions = {}, inlineImages = false, recordCanvas = false, onSerialize, onIframeLoad, iframeLoadTimeout = 5000, keepIframeSrcFn = () => false, } = options;
      let { preserveWhiteSpace = true } = options;
      const _serializedNode = serializeNode(n, {
          doc,
          blockClass,
          blockSelector,
          unblockSelector,
          maskTextClass,
          maskTextSelector,
          unmaskTextSelector,
          inlineStylesheet,
          maskInputSelector,
          unmaskInputSelector,
          maskAllText,
          maskInputOptions,
          maskTextFn,
          maskInputFn,
          dataURLOptions,
          inlineImages,
          recordCanvas,
          keepIframeSrcFn,
      });
      if (!_serializedNode) {
          console.warn(n, 'not serialized');
          return null;
      }
      let id;
      if ('__sn' in n) {
          id = n.__sn.id;
      }
      else if (slimDOMExcluded(_serializedNode, slimDOMOptions) ||
          (!preserveWhiteSpace &&
              _serializedNode.type === NodeType.Text &&
              !_serializedNode.isStyle &&
              !_serializedNode.textContent.replace(/^\s+|\s+$/gm, '').length)) {
          id = IGNORED_NODE;
      }
      else {
          id = genId();
      }
      const serializedNode = Object.assign(_serializedNode, { id });
      n.__sn = serializedNode;
      if (id === IGNORED_NODE) {
          return null;
      }
      map[id] = n;
      if (onSerialize) {
          onSerialize(n);
      }
      let recordChild = !skipChild;
      if (serializedNode.type === NodeType.Element) {
          recordChild = recordChild && !serializedNode.needBlock;
          delete serializedNode.needBlock;
          if (n.shadowRoot)
              serializedNode.isShadowHost = true;
      }
      if ((serializedNode.type === NodeType.Document ||
          serializedNode.type === NodeType.Element) &&
          recordChild) {
          if (slimDOMOptions.headWhitespace &&
              _serializedNode.type === NodeType.Element &&
              _serializedNode.tagName === 'head') {
              preserveWhiteSpace = false;
          }
          const bypassOptions = {
              doc,
              map,
              blockClass,
              blockSelector,
              unblockSelector,
              maskTextClass,
              maskTextSelector,
              unmaskTextSelector,
              skipChild,
              inlineStylesheet,
              maskInputSelector,
              unmaskInputSelector,
              maskAllText,
              maskInputOptions,
              maskTextFn,
              maskInputFn,
              slimDOMOptions,
              dataURLOptions,
              inlineImages,
              recordCanvas,
              preserveWhiteSpace,
              onSerialize,
              onIframeLoad,
              iframeLoadTimeout,
              keepIframeSrcFn,
          };
          for (const childN of Array.from(n.childNodes)) {
              const serializedChildNode = serializeNodeWithId(childN, bypassOptions);
              if (serializedChildNode) {
                  serializedNode.childNodes.push(serializedChildNode);
              }
          }
          if (isElement(n) && n.shadowRoot) {
              for (const childN of Array.from(n.shadowRoot.childNodes)) {
                  const serializedChildNode = serializeNodeWithId(childN, bypassOptions);
                  if (serializedChildNode) {
                      serializedChildNode.isShadow = true;
                      serializedNode.childNodes.push(serializedChildNode);
                  }
              }
          }
      }
      if (n.parentNode && isShadowRoot(n.parentNode)) {
          serializedNode.isShadow = true;
      }
      if (serializedNode.type === NodeType.Element &&
          serializedNode.tagName === 'iframe') {
          onceIframeLoaded(n, () => {
              const iframeDoc = n.contentDocument;
              if (iframeDoc && onIframeLoad) {
                  const serializedIframeNode = serializeNodeWithId(iframeDoc, {
                      doc: iframeDoc,
                      map,
                      blockClass,
                      blockSelector,
                      unblockSelector,
                      maskTextClass,
                      maskTextSelector,
                      unmaskTextSelector,
                      skipChild: false,
                      inlineStylesheet,
                      maskInputSelector,
                      unmaskInputSelector,
                      maskAllText,
                      maskInputOptions,
                      maskTextFn,
                      maskInputFn,
                      slimDOMOptions,
                      dataURLOptions,
                      inlineImages,
                      recordCanvas,
                      preserveWhiteSpace,
                      onSerialize,
                      onIframeLoad,
                      iframeLoadTimeout,
                      keepIframeSrcFn,
                  });
                  if (serializedIframeNode) {
                      onIframeLoad(n, serializedIframeNode);
                  }
              }
          }, iframeLoadTimeout);
      }
      return serializedNode;
  }
  function snapshot(n, options) {
      const { blockClass = 'rr-block', blockSelector = null, unblockSelector = null, maskTextClass = 'rr-mask', maskTextSelector = null, unmaskTextSelector = null, inlineStylesheet = true, inlineImages = false, recordCanvas = false, maskInputSelector = null, unmaskInputSelector = null, maskAllText = false, maskAllInputs = false, maskTextFn, maskInputFn, slimDOM = false, dataURLOptions, preserveWhiteSpace, onSerialize, onIframeLoad, iframeLoadTimeout, keepIframeSrcFn = () => false, } = options || {};
      const idNodeMap = {};
      const maskInputOptions = maskAllInputs === true
          ? {
              color: true,
              date: true,
              'datetime-local': true,
              email: true,
              month: true,
              number: true,
              range: true,
              search: true,
              tel: true,
              text: true,
              time: true,
              url: true,
              week: true,
              textarea: true,
              select: true,
              password: true,
          }
          : maskAllInputs === false
              ? {
                  password: true,
              }
              : maskAllInputs;
      const slimDOMOptions = slimDOM === true || slimDOM === 'all'
          ?
              {
                  script: true,
                  comment: true,
                  headFavicon: true,
                  headWhitespace: true,
                  headMetaDescKeywords: slimDOM === 'all',
                  headMetaSocial: true,
                  headMetaRobots: true,
                  headMetaHttpEquiv: true,
                  headMetaAuthorship: true,
                  headMetaVerification: true,
              }
          : slimDOM === false
              ? {}
              : slimDOM;
      return [
          serializeNodeWithId(n, {
              doc: n,
              map: idNodeMap,
              blockClass,
              blockSelector,
              unblockSelector,
              maskTextClass,
              maskTextSelector,
              unmaskTextSelector,
              skipChild: false,
              inlineStylesheet,
              maskInputSelector,
              unmaskInputSelector,
              maskAllText,
              maskInputOptions,
              maskTextFn,
              maskInputFn,
              slimDOMOptions,
              dataURLOptions,
              inlineImages,
              recordCanvas,
              preserveWhiteSpace,
              onSerialize,
              onIframeLoad,
              iframeLoadTimeout,
              keepIframeSrcFn,
          }),
          idNodeMap,
      ];
  }

  var EventType;
  (function (EventType) {
      EventType[EventType["DomContentLoaded"] = 0] = "DomContentLoaded";
      EventType[EventType["Load"] = 1] = "Load";
      EventType[EventType["FullSnapshot"] = 2] = "FullSnapshot";
      EventType[EventType["IncrementalSnapshot"] = 3] = "IncrementalSnapshot";
      EventType[EventType["Meta"] = 4] = "Meta";
      EventType[EventType["Custom"] = 5] = "Custom";
      EventType[EventType["Plugin"] = 6] = "Plugin";
  })(EventType || (EventType = {}));
  var IncrementalSource;
  (function (IncrementalSource) {
      IncrementalSource[IncrementalSource["Mutation"] = 0] = "Mutation";
      IncrementalSource[IncrementalSource["MouseMove"] = 1] = "MouseMove";
      IncrementalSource[IncrementalSource["MouseInteraction"] = 2] = "MouseInteraction";
      IncrementalSource[IncrementalSource["Scroll"] = 3] = "Scroll";
      IncrementalSource[IncrementalSource["ViewportResize"] = 4] = "ViewportResize";
      IncrementalSource[IncrementalSource["Input"] = 5] = "Input";
      IncrementalSource[IncrementalSource["TouchMove"] = 6] = "TouchMove";
      IncrementalSource[IncrementalSource["MediaInteraction"] = 7] = "MediaInteraction";
      IncrementalSource[IncrementalSource["StyleSheetRule"] = 8] = "StyleSheetRule";
      IncrementalSource[IncrementalSource["CanvasMutation"] = 9] = "CanvasMutation";
      IncrementalSource[IncrementalSource["Font"] = 10] = "Font";
      IncrementalSource[IncrementalSource["Log"] = 11] = "Log";
      IncrementalSource[IncrementalSource["Drag"] = 12] = "Drag";
      IncrementalSource[IncrementalSource["StyleDeclaration"] = 13] = "StyleDeclaration";
  })(IncrementalSource || (IncrementalSource = {}));
  var MouseInteractions;
  (function (MouseInteractions) {
      MouseInteractions[MouseInteractions["MouseUp"] = 0] = "MouseUp";
      MouseInteractions[MouseInteractions["MouseDown"] = 1] = "MouseDown";
      MouseInteractions[MouseInteractions["Click"] = 2] = "Click";
      MouseInteractions[MouseInteractions["ContextMenu"] = 3] = "ContextMenu";
      MouseInteractions[MouseInteractions["DblClick"] = 4] = "DblClick";
      MouseInteractions[MouseInteractions["Focus"] = 5] = "Focus";
      MouseInteractions[MouseInteractions["Blur"] = 6] = "Blur";
      MouseInteractions[MouseInteractions["TouchStart"] = 7] = "TouchStart";
      MouseInteractions[MouseInteractions["TouchMove_Departed"] = 8] = "TouchMove_Departed";
      MouseInteractions[MouseInteractions["TouchEnd"] = 9] = "TouchEnd";
      MouseInteractions[MouseInteractions["TouchCancel"] = 10] = "TouchCancel";
  })(MouseInteractions || (MouseInteractions = {}));
  var CanvasContext;
  (function (CanvasContext) {
      CanvasContext[CanvasContext["2D"] = 0] = "2D";
      CanvasContext[CanvasContext["WebGL"] = 1] = "WebGL";
      CanvasContext[CanvasContext["WebGL2"] = 2] = "WebGL2";
  })(CanvasContext || (CanvasContext = {}));
  var MediaInteractions;
  (function (MediaInteractions) {
      MediaInteractions[MediaInteractions["Play"] = 0] = "Play";
      MediaInteractions[MediaInteractions["Pause"] = 1] = "Pause";
      MediaInteractions[MediaInteractions["Seeked"] = 2] = "Seeked";
      MediaInteractions[MediaInteractions["VolumeChange"] = 3] = "VolumeChange";
  })(MediaInteractions || (MediaInteractions = {}));
  var ReplayerEvents;
  (function (ReplayerEvents) {
      ReplayerEvents["Start"] = "start";
      ReplayerEvents["Pause"] = "pause";
      ReplayerEvents["Resume"] = "resume";
      ReplayerEvents["Resize"] = "resize";
      ReplayerEvents["Finish"] = "finish";
      ReplayerEvents["FullsnapshotRebuilded"] = "fullsnapshot-rebuilded";
      ReplayerEvents["LoadStylesheetStart"] = "load-stylesheet-start";
      ReplayerEvents["LoadStylesheetEnd"] = "load-stylesheet-end";
      ReplayerEvents["SkipStart"] = "skip-start";
      ReplayerEvents["SkipEnd"] = "skip-end";
      ReplayerEvents["MouseInteraction"] = "mouse-interaction";
      ReplayerEvents["EventCast"] = "event-cast";
      ReplayerEvents["CustomEvent"] = "custom-event";
      ReplayerEvents["Flush"] = "flush";
      ReplayerEvents["StateChange"] = "state-change";
      ReplayerEvents["PlayBack"] = "play-back";
  })(ReplayerEvents || (ReplayerEvents = {}));

  function on(type, fn, target = document) {
      const options = { capture: true, passive: true };
      target.addEventListener(type, fn, options);
      return () => target.removeEventListener(type, fn, options);
  }
  function createMirror() {
      return {
          map: {},
          getId(n) {
              if (!n || !n.__sn) {
                  return -1;
              }
              return n.__sn.id;
          },
          getNode(id) {
              return this.map[id] || null;
          },
          removeNodeFromMap(n) {
              const id = n.__sn && n.__sn.id;
              delete this.map[id];
              if (n.childNodes) {
                  n.childNodes.forEach((child) => this.removeNodeFromMap(child));
              }
          },
          has(id) {
              return this.map.hasOwnProperty(id);
          },
          reset() {
              this.map = {};
          },
      };
  }
  const DEPARTED_MIRROR_ACCESS_WARNING = 'Please stop import mirror directly. Instead of that,' +
      '\r\n' +
      'now you can use replayer.getMirror() to access the mirror instance of a replayer,' +
      '\r\n' +
      'or you can use record.mirror to access the mirror instance during recording.';
  let _mirror = {
      map: {},
      getId() {
          console.error(DEPARTED_MIRROR_ACCESS_WARNING);
          return -1;
      },
      getNode() {
          console.error(DEPARTED_MIRROR_ACCESS_WARNING);
          return null;
      },
      removeNodeFromMap() {
          console.error(DEPARTED_MIRROR_ACCESS_WARNING);
      },
      has() {
          console.error(DEPARTED_MIRROR_ACCESS_WARNING);
          return false;
      },
      reset() {
          console.error(DEPARTED_MIRROR_ACCESS_WARNING);
      },
  };
  if (typeof window !== 'undefined' && window.Proxy && window.Reflect) {
      _mirror = new Proxy(_mirror, {
          get(target, prop, receiver) {
              if (prop === 'map') {
                  console.error(DEPARTED_MIRROR_ACCESS_WARNING);
              }
              return Reflect.get(target, prop, receiver);
          },
      });
  }
  function throttle(func, wait, options = {}) {
      let timeout = null;
      let previous = 0;
      return function (arg) {
          let now = Date.now();
          if (!previous && options.leading === false) {
              previous = now;
          }
          let remaining = wait - (now - previous);
          let context = this;
          let args = arguments;
          if (remaining <= 0 || remaining > wait) {
              if (timeout) {
                  clearTimeout(timeout);
                  timeout = null;
              }
              previous = now;
              func.apply(context, args);
          }
          else if (!timeout && options.trailing !== false) {
              timeout = setTimeout(() => {
                  previous = options.leading === false ? 0 : Date.now();
                  timeout = null;
                  func.apply(context, args);
              }, remaining);
          }
      };
  }
  function hookSetter(target, key, d, isRevoked, win = window) {
      const original = win.Object.getOwnPropertyDescriptor(target, key);
      win.Object.defineProperty(target, key, isRevoked
          ? d
          : {
              set(value) {
                  setTimeout(() => {
                      d.set.call(this, value);
                  }, 0);
                  if (original && original.set) {
                      original.set.call(this, value);
                  }
              },
          });
      return () => hookSetter(target, key, original || {}, true);
  }
  function patch(source, name, replacement) {
      try {
          if (!(name in source)) {
              return () => { };
          }
          const original = source[name];
          const wrapped = replacement(original);
          if (typeof wrapped === 'function') {
              wrapped.prototype = wrapped.prototype || {};
              Object.defineProperties(wrapped, {
                  __rrweb_original__: {
                      enumerable: false,
                      value: original,
                  },
              });
          }
          source[name] = wrapped;
          return () => {
              source[name] = original;
          };
      }
      catch (_a) {
          return () => { };
      }
  }
  function getWindowHeight() {
      return (window.innerHeight ||
          (document.documentElement && document.documentElement.clientHeight) ||
          (document.body && document.body.clientHeight));
  }
  function getWindowWidth() {
      return (window.innerWidth ||
          (document.documentElement && document.documentElement.clientWidth) ||
          (document.body && document.body.clientWidth));
  }
  function isBlocked(node, blockClass, blockSelector, unblockSelector) {
      if (!node) {
          return false;
      }
      if (node.nodeType === node.ELEMENT_NODE) {
          let needBlock = false;
          const needUnblock = unblockSelector && node.matches(unblockSelector);
          if (typeof blockClass === 'string') {
              if (node.closest !== undefined) {
                  needBlock =
                      !needUnblock &&
                          node.closest('.' + blockClass) !== null;
              }
              else {
                  needBlock =
                      !needUnblock && node.classList.contains(blockClass);
              }
          }
          else {
              !needUnblock &&
                  node.classList.forEach((className) => {
                      if (blockClass.test(className)) {
                          needBlock = true;
                      }
                  });
          }
          if (!needBlock && blockSelector) {
              needBlock = node.matches(blockSelector);
          }
          return ((!needUnblock && needBlock) ||
              isBlocked(node.parentNode, blockClass, blockSelector, unblockSelector));
      }
      if (node.nodeType === node.TEXT_NODE) {
          return isBlocked(node.parentNode, blockClass, blockSelector, unblockSelector);
      }
      return isBlocked(node.parentNode, blockClass, blockSelector, unblockSelector);
  }
  function isIgnored(n) {
      if ('__sn' in n) {
          return n.__sn.id === IGNORED_NODE;
      }
      return false;
  }
  function isAncestorRemoved(target, mirror) {
      if (isShadowRoot(target)) {
          return false;
      }
      const id = mirror.getId(target);
      if (!mirror.has(id)) {
          return true;
      }
      if (target.parentNode &&
          target.parentNode.nodeType === target.DOCUMENT_NODE) {
          return false;
      }
      if (!target.parentNode) {
          return true;
      }
      return isAncestorRemoved(target.parentNode, mirror);
  }
  function isTouchEvent(event) {
      return Boolean(event.changedTouches);
  }
  function polyfill(win = window) {
      if ('NodeList' in win && !win.NodeList.prototype.forEach) {
          win.NodeList.prototype.forEach = Array.prototype
              .forEach;
      }
      if ('DOMTokenList' in win && !win.DOMTokenList.prototype.forEach) {
          win.DOMTokenList.prototype.forEach = Array.prototype
              .forEach;
      }
      if (!Node.prototype.contains) {
          Node.prototype.contains = function contains(node) {
              if (!(0 in arguments)) {
                  throw new TypeError('1 argument is required');
              }
              do {
                  if (this === node) {
                      return true;
                  }
              } while ((node = node && node.parentNode));
              return false;
          };
      }
  }
  function isIframeINode(node) {
      if ('__sn' in node) {
          return (node.__sn.type === NodeType.Element && node.__sn.tagName === 'iframe');
      }
      return false;
  }
  function hasShadowRoot(n) {
      return Boolean(n === null || n === void 0 ? void 0 : n.shadowRoot);
  }

  function isNodeInLinkedList(n) {
      return '__ln' in n;
  }
  class DoubleLinkedList {
      constructor() {
          this.length = 0;
          this.head = null;
      }
      get(position) {
          if (position >= this.length) {
              throw new Error('Position outside of list range');
          }
          let current = this.head;
          for (let index = 0; index < position; index++) {
              current = (current === null || current === void 0 ? void 0 : current.next) || null;
          }
          return current;
      }
      addNode(n) {
          const node = {
              value: n,
              previous: null,
              next: null,
          };
          n.__ln = node;
          if (n.previousSibling && isNodeInLinkedList(n.previousSibling)) {
              const current = n.previousSibling.__ln.next;
              node.next = current;
              node.previous = n.previousSibling.__ln;
              n.previousSibling.__ln.next = node;
              if (current) {
                  current.previous = node;
              }
          }
          else if (n.nextSibling &&
              isNodeInLinkedList(n.nextSibling) &&
              n.nextSibling.__ln.previous) {
              const current = n.nextSibling.__ln.previous;
              node.previous = current;
              node.next = n.nextSibling.__ln;
              n.nextSibling.__ln.previous = node;
              if (current) {
                  current.next = node;
              }
          }
          else {
              if (this.head) {
                  this.head.previous = node;
              }
              node.next = this.head;
              this.head = node;
          }
          this.length++;
      }
      removeNode(n) {
          const current = n.__ln;
          if (!this.head) {
              return;
          }
          if (!current.previous) {
              this.head = current.next;
              if (this.head) {
                  this.head.previous = null;
              }
          }
          else {
              current.previous.next = current.next;
              if (current.next) {
                  current.next.previous = current.previous;
              }
          }
          if (n.__ln) {
              delete n.__ln;
          }
          this.length--;
      }
  }
  const moveKey = (id, parentId) => `${id}@${parentId}`;
  function isINode(n) {
      return '__sn' in n;
  }
  class MutationBuffer {
      constructor() {
          this.frozen = false;
          this.locked = false;
          this.texts = [];
          this.attributes = [];
          this.removes = [];
          this.mapRemoves = [];
          this.movedMap = {};
          this.addedSet = new Set();
          this.movedSet = new Set();
          this.droppedSet = new Set();
          this.processMutations = (mutations) => {
              mutations.forEach(this.processMutation);
              this.emit();
          };
          this.emit = () => {
              if (this.frozen || this.locked) {
                  return;
              }
              const adds = [];
              const addList = new DoubleLinkedList();
              const getNextId = (n) => {
                  let ns = n;
                  let nextId = IGNORED_NODE;
                  while (nextId === IGNORED_NODE) {
                      ns = ns && ns.nextSibling;
                      nextId = ns && this.mirror.getId(ns);
                  }
                  return nextId;
              };
              const pushAdd = (n) => {
                  var _a, _b, _c, _d, _e;
                  const shadowHost = n.getRootNode
                      ? (_a = n.getRootNode()) === null || _a === void 0 ? void 0 : _a.host
                      : null;
                  let rootShadowHost = shadowHost;
                  while ((_c = (_b = rootShadowHost === null || rootShadowHost === void 0 ? void 0 : rootShadowHost.getRootNode) === null || _b === void 0 ? void 0 : _b.call(rootShadowHost)) === null || _c === void 0 ? void 0 : _c.host)
                      rootShadowHost =
                          ((_e = (_d = rootShadowHost === null || rootShadowHost === void 0 ? void 0 : rootShadowHost.getRootNode) === null || _d === void 0 ? void 0 : _d.call(rootShadowHost)) === null || _e === void 0 ? void 0 : _e.host) ||
                              null;
                  const notInDoc = !this.doc.contains(n) &&
                      (rootShadowHost === null || !this.doc.contains(rootShadowHost));
                  if (!n.parentNode || notInDoc) {
                      return;
                  }
                  const parentId = isShadowRoot(n.parentNode)
                      ? this.mirror.getId(shadowHost)
                      : this.mirror.getId(n.parentNode);
                  const nextId = getNextId(n);
                  if (parentId === -1 || nextId === -1) {
                      return addList.addNode(n);
                  }
                  let sn = serializeNodeWithId(n, {
                      doc: this.doc,
                      map: this.mirror.map,
                      blockClass: this.blockClass,
                      blockSelector: this.blockSelector,
                      unblockSelector: this.unblockSelector,
                      maskTextClass: this.maskTextClass,
                      maskTextSelector: this.maskTextSelector,
                      unmaskTextSelector: this.unmaskTextSelector,
                      maskInputSelector: this.maskInputSelector,
                      unmaskInputSelector: this.unmaskInputSelector,
                      skipChild: true,
                      inlineStylesheet: this.inlineStylesheet,
                      maskAllText: this.maskAllText,
                      maskInputOptions: this.maskInputOptions,
                      maskTextFn: this.maskTextFn,
                      maskInputFn: this.maskInputFn,
                      slimDOMOptions: this.slimDOMOptions,
                      recordCanvas: this.recordCanvas,
                      inlineImages: this.inlineImages,
                      onSerialize: (currentN) => {
                          if (isIframeINode(currentN)) {
                              this.iframeManager.addIframe(currentN);
                          }
                          if (hasShadowRoot(n)) {
                              this.shadowDomManager.addShadowRoot(n.shadowRoot, document);
                          }
                      },
                      onIframeLoad: (iframe, childSn) => {
                          this.iframeManager.attachIframe(iframe, childSn);
                          this.shadowDomManager.observeAttachShadow(iframe);
                      },
                  });
                  if (sn) {
                      adds.push({
                          parentId,
                          nextId,
                          node: sn,
                      });
                  }
              };
              while (this.mapRemoves.length) {
                  this.mirror.removeNodeFromMap(this.mapRemoves.shift());
              }
              for (const n of this.movedSet) {
                  if (isParentRemoved(this.removes, n, this.mirror) &&
                      !this.movedSet.has(n.parentNode)) {
                      continue;
                  }
                  pushAdd(n);
              }
              for (const n of this.addedSet) {
                  if (!isAncestorInSet(this.droppedSet, n) &&
                      !isParentRemoved(this.removes, n, this.mirror)) {
                      pushAdd(n);
                  }
                  else if (isAncestorInSet(this.movedSet, n)) {
                      pushAdd(n);
                  }
                  else {
                      this.droppedSet.add(n);
                  }
              }
              let candidate = null;
              while (addList.length) {
                  let node = null;
                  if (candidate) {
                      const parentId = this.mirror.getId(candidate.value.parentNode);
                      const nextId = getNextId(candidate.value);
                      if (parentId !== -1 && nextId !== -1) {
                          node = candidate;
                      }
                  }
                  if (!node) {
                      for (let index = addList.length - 1; index >= 0; index--) {
                          const _node = addList.get(index);
                          if (_node) {
                              const parentId = this.mirror.getId(_node.value.parentNode);
                              const nextId = getNextId(_node.value);
                              if (parentId !== -1 && nextId !== -1) {
                                  node = _node;
                                  break;
                              }
                          }
                      }
                  }
                  if (!node) {
                      while (addList.head) {
                          addList.removeNode(addList.head.value);
                      }
                      break;
                  }
                  candidate = node.previous;
                  addList.removeNode(node.value);
                  pushAdd(node.value);
              }
              const payload = {
                  texts: this.texts
                      .map((text) => ({
                      id: this.mirror.getId(text.node),
                      value: text.value,
                  }))
                      .filter((text) => this.mirror.has(text.id)),
                  attributes: this.attributes
                      .map((attribute) => ({
                      id: this.mirror.getId(attribute.node),
                      attributes: attribute.attributes,
                  }))
                      .filter((attribute) => this.mirror.has(attribute.id)),
                  removes: this.removes,
                  adds,
              };
              if (!payload.texts.length &&
                  !payload.attributes.length &&
                  !payload.removes.length &&
                  !payload.adds.length) {
                  return;
              }
              this.texts = [];
              this.attributes = [];
              this.removes = [];
              this.addedSet = new Set();
              this.movedSet = new Set();
              this.droppedSet = new Set();
              this.movedMap = {};
              this.mutationCb(payload);
          };
          this.processMutation = (m) => {
              if (isIgnored(m.target)) {
                  return;
              }
              switch (m.type) {
                  case 'characterData': {
                      const value = m.target.textContent;
                      if (!isBlocked(m.target, this.blockClass, this.blockSelector, this.unblockSelector) && value !== m.oldValue) {
                          this.texts.push({
                              value: needMaskingText(m.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextSelector, this.maskAllText) && value
                                  ? this.maskTextFn
                                      ? this.maskTextFn(value)
                                      : value.replace(/[\S]/g, '*')
                                  : value,
                              node: m.target,
                          });
                      }
                      break;
                  }
                  case 'attributes': {
                      const target = m.target;
                      let value = m.target.getAttribute(m.attributeName);
                      if (m.attributeName === 'value') {
                          value = maskInputValue({
                              input: target,
                              maskInputSelector: this.maskInputSelector,
                              unmaskInputSelector: this.unmaskInputSelector,
                              maskInputOptions: this.maskInputOptions,
                              tagName: m.target.tagName,
                              type: m.target.getAttribute('type'),
                              value,
                              maskInputFn: this.maskInputFn,
                          });
                      }
                      if (isBlocked(m.target, this.blockClass, this.blockSelector, this.unblockSelector) || value === m.oldValue) {
                          return;
                      }
                      let item = this.attributes.find((a) => a.node === m.target);
                      if (!item) {
                          item = {
                              node: m.target,
                              attributes: {},
                          };
                          this.attributes.push(item);
                      }
                      if (m.attributeName === 'style') {
                          const old = this.doc.createElement('span');
                          if (m.oldValue) {
                              old.setAttribute('style', m.oldValue);
                          }
                          if (item.attributes.style === undefined ||
                              item.attributes.style === null) {
                              item.attributes.style = {};
                          }
                          try {
                              const styleObj = item.attributes.style;
                              for (const pname of Array.from(target.style)) {
                                  const newValue = target.style.getPropertyValue(pname);
                                  const newPriority = target.style.getPropertyPriority(pname);
                                  if (newValue !== old.style.getPropertyValue(pname) ||
                                      newPriority !== old.style.getPropertyPriority(pname)) {
                                      if (newPriority === '') {
                                          styleObj[pname] = newValue;
                                      }
                                      else {
                                          styleObj[pname] = [newValue, newPriority];
                                      }
                                  }
                              }
                              for (const pname of Array.from(old.style)) {
                                  if (target.style.getPropertyValue(pname) === '') {
                                      styleObj[pname] = false;
                                  }
                              }
                          }
                          catch (error) {
                              console.warn('[rrweb] Error when parsing update to style attribute:', error);
                          }
                      }
                      else {
                          item.attributes[m.attributeName] = transformAttribute(this.doc, m.target.tagName, m.attributeName, value, this.maskAllText, this.maskTextFn);
                      }
                      break;
                  }
                  case 'childList': {
                      m.addedNodes.forEach((n) => this.genAdds(n, m.target));
                      m.removedNodes.forEach((n) => {
                          const nodeId = this.mirror.getId(n);
                          const parentId = isShadowRoot(m.target)
                              ? this.mirror.getId(m.target.host)
                              : this.mirror.getId(m.target);
                          if (isBlocked(m.target, this.blockClass, this.blockSelector, this.unblockSelector) || isIgnored(n)) {
                              return;
                          }
                          if (this.addedSet.has(n)) {
                              deepDelete(this.addedSet, n);
                              this.droppedSet.add(n);
                          }
                          else if (this.addedSet.has(m.target) && nodeId === -1) ;
                          else if (isAncestorRemoved(m.target, this.mirror)) ;
                          else if (this.movedSet.has(n) &&
                              this.movedMap[moveKey(nodeId, parentId)]) {
                              deepDelete(this.movedSet, n);
                          }
                          else {
                              this.removes.push({
                                  parentId,
                                  id: nodeId,
                                  isShadow: isShadowRoot(m.target) ? true : undefined,
                              });
                          }
                          this.mapRemoves.push(n);
                      });
                      break;
                  }
              }
          };
          this.genAdds = (n, target) => {
              if (target && isBlocked(target, this.blockClass, this.blockSelector, this.unblockSelector)) {
                  return;
              }
              if (isINode(n)) {
                  if (isIgnored(n)) {
                      return;
                  }
                  this.movedSet.add(n);
                  let targetId = null;
                  if (target && isINode(target)) {
                      targetId = target.__sn.id;
                  }
                  if (targetId) {
                      this.movedMap[moveKey(n.__sn.id, targetId)] = true;
                  }
              }
              else {
                  this.addedSet.add(n);
                  this.droppedSet.delete(n);
              }
              if (!isBlocked(n, this.blockClass, this.blockSelector, this.unblockSelector))
                  n.childNodes.forEach((childN) => this.genAdds(childN));
          };
      }
      init(options) {
          [
              'mutationCb',
              'blockClass',
              'blockSelector',
              'unblockSelector',
              'maskTextClass',
              'maskTextSelector',
              'unmaskTextSelector',
              'maskInputSelector',
              'unmaskInputSelector',
              'inlineStylesheet',
              'maskAllText',
              'maskInputOptions',
              'maskTextFn',
              'maskInputFn',
              'recordCanvas',
              'inlineImages',
              'slimDOMOptions',
              'doc',
              'mirror',
              'iframeManager',
              'shadowDomManager',
              'canvasManager',
          ].forEach((key) => {
              this[key] = options[key];
          });
      }
      freeze() {
          this.frozen = true;
          this.canvasManager.freeze();
      }
      unfreeze() {
          this.frozen = false;
          this.canvasManager.unfreeze();
          this.emit();
      }
      isFrozen() {
          return this.frozen;
      }
      lock() {
          this.locked = true;
          this.canvasManager.lock();
      }
      unlock() {
          this.locked = false;
          this.canvasManager.unlock();
          this.emit();
      }
      reset() {
          this.shadowDomManager.reset();
          this.canvasManager.reset();
      }
  }
  function deepDelete(addsSet, n) {
      addsSet.delete(n);
      n.childNodes.forEach((childN) => deepDelete(addsSet, childN));
  }
  function isParentRemoved(removes, n, mirror) {
      const { parentNode } = n;
      if (!parentNode) {
          return false;
      }
      const parentId = mirror.getId(parentNode);
      if (removes.some((r) => r.id === parentId)) {
          return true;
      }
      return isParentRemoved(removes, parentNode, mirror);
  }
  function isAncestorInSet(set, n) {
      const { parentNode } = n;
      if (!parentNode) {
          return false;
      }
      if (set.has(parentNode)) {
          return true;
      }
      return isAncestorInSet(set, parentNode);
  }

  const callbackWrapper = (cb) => {
      const rrwebWrapped = (...rest) => {
          try {
              return cb(...rest);
          }
          catch (error) {
              try {
                  error.__rrweb__ = true;
              }
              catch (_a) {
              }
              throw error;
          }
      };
      return rrwebWrapped;
  };

  const mutationBuffers = [];
  function getEventTarget(event) {
      try {
          if ('composedPath' in event) {
              const path = event.composedPath();
              if (path.length) {
                  return path[0];
              }
          }
          else if ('path' in event && event.path.length) {
              return event.path[0];
          }
      }
      catch (_a) { }
      return event && event.target;
  }
  function initMutationObserver(options, rootEl) {
      var _a, _b;
      const mutationBuffer = new MutationBuffer();
      mutationBuffers.push(mutationBuffer);
      mutationBuffer.init(options);
      let mutationObserverCtor = window.MutationObserver ||
          window.__rrMutationObserver;
      const angularZoneSymbol = (_b = (_a = window === null || window === void 0 ? void 0 : window.Zone) === null || _a === void 0 ? void 0 : _a.__symbol__) === null || _b === void 0 ? void 0 : _b.call(_a, 'MutationObserver');
      if (angularZoneSymbol &&
          window[angularZoneSymbol]) {
          mutationObserverCtor = window[angularZoneSymbol];
      }
      const observer = new mutationObserverCtor(callbackWrapper(mutationBuffer.processMutations.bind(mutationBuffer)));
      observer.observe(rootEl, {
          attributes: true,
          attributeOldValue: true,
          characterData: true,
          characterDataOldValue: true,
          childList: true,
          subtree: true,
      });
      return observer;
  }
  function initMoveObserver({ mousemoveCb, sampling, doc, mirror, }) {
      if (sampling.mousemove === false) {
          return () => { };
      }
      const threshold = typeof sampling.mousemove === 'number' ? sampling.mousemove : 50;
      const callbackThreshold = typeof sampling.mousemoveCallback === 'number'
          ? sampling.mousemoveCallback
          : 500;
      let positions = [];
      let timeBaseline;
      const wrappedCb = throttle((source) => {
          const totalOffset = Date.now() - timeBaseline;
          callbackWrapper(mousemoveCb)(positions.map((p) => {
              p.timeOffset -= totalOffset;
              return p;
          }), source);
          positions = [];
          timeBaseline = null;
      }, callbackThreshold);
      const updatePosition = throttle((evt) => {
          const target = getEventTarget(evt);
          const { clientX, clientY } = isTouchEvent(evt)
              ? evt.changedTouches[0]
              : evt;
          if (!timeBaseline) {
              timeBaseline = Date.now();
          }
          positions.push({
              x: clientX,
              y: clientY,
              id: mirror.getId(target),
              timeOffset: Date.now() - timeBaseline,
          });
          wrappedCb(typeof DragEvent !== 'undefined' && evt instanceof DragEvent
              ? IncrementalSource.Drag
              : evt instanceof MouseEvent
                  ? IncrementalSource.MouseMove
                  : IncrementalSource.TouchMove);
      }, threshold, {
          trailing: false,
      });
      const handlers = [
          on('mousemove', callbackWrapper(updatePosition), doc),
          on('touchmove', callbackWrapper(updatePosition), doc),
          on('drag', callbackWrapper(updatePosition), doc),
      ];
      return callbackWrapper(() => {
          handlers.forEach((h) => h());
      });
  }
  function initMouseInteractionObserver({ mouseInteractionCb, doc, mirror, blockClass, blockSelector, unblockSelector, sampling, }) {
      if (sampling.mouseInteraction === false) {
          return () => { };
      }
      const disableMap = sampling.mouseInteraction === true ||
          sampling.mouseInteraction === undefined
          ? {}
          : sampling.mouseInteraction;
      const handlers = [];
      const getHandler = (eventKey) => {
          return (event) => {
              const target = getEventTarget(event);
              if (isBlocked(target, blockClass, blockSelector, unblockSelector)) {
                  return;
              }
              const e = isTouchEvent(event) ? event.changedTouches[0] : event;
              if (!e) {
                  return;
              }
              const id = mirror.getId(target);
              const { clientX, clientY } = e;
              callbackWrapper(mouseInteractionCb)({
                  type: MouseInteractions[eventKey],
                  id,
                  x: clientX,
                  y: clientY,
              });
          };
      };
      Object.keys(MouseInteractions)
          .filter((key) => Number.isNaN(Number(key)) &&
          !key.endsWith('_Departed') &&
          disableMap[key] !== false)
          .forEach((eventKey) => {
          const eventName = eventKey.toLowerCase();
          const handler = callbackWrapper(getHandler(eventKey));
          handlers.push(on(eventName, handler, doc));
      });
      return callbackWrapper(() => {
          handlers.forEach((h) => h());
      });
  }
  function initScrollObserver({ scrollCb, doc, mirror, blockClass, blockSelector, unblockSelector, sampling, }) {
      const updatePosition = throttle((evt) => {
          const target = getEventTarget(evt);
          if (!target || isBlocked(target, blockClass, blockSelector, unblockSelector)) {
              return;
          }
          const id = mirror.getId(target);
          if (target === doc) {
              const scrollEl = (doc.scrollingElement || doc.documentElement);
              callbackWrapper(scrollCb)({
                  id,
                  x: scrollEl.scrollLeft,
                  y: scrollEl.scrollTop,
              });
          }
          else {
              callbackWrapper(scrollCb)({
                  id,
                  x: target.scrollLeft,
                  y: target.scrollTop,
              });
          }
      }, sampling.scroll || 100);
      return on('scroll', callbackWrapper(updatePosition), doc);
  }
  function initViewportResizeObserver({ viewportResizeCb, }) {
      let lastH = -1;
      let lastW = -1;
      const updateDimension = throttle(() => {
          const height = getWindowHeight();
          const width = getWindowWidth();
          if (lastH !== height || lastW !== width) {
              callbackWrapper(viewportResizeCb)({
                  width: Number(width),
                  height: Number(height),
              });
              lastH = height;
              lastW = width;
          }
      }, 200);
      return on('resize', callbackWrapper(updateDimension), window);
  }
  function wrapEventWithUserTriggeredFlag(v, enable) {
      const value = Object.assign({}, v);
      if (!enable)
          delete value.userTriggered;
      return value;
  }
  const INPUT_TAGS = ['INPUT', 'TEXTAREA', 'SELECT'];
  const lastInputValueMap = new WeakMap();
  function initInputObserver({ inputCb, doc, mirror, blockClass, blockSelector, unblockSelector, ignoreClass, ignoreSelector, maskInputSelector, unmaskInputSelector, maskInputOptions, maskInputFn, sampling, userTriggeredOnInput, }) {
      function eventHandler(event) {
          let target = getEventTarget(event);
          const userTriggered = event.isTrusted;
          if (target && target.tagName === 'OPTION')
              target = target.parentElement;
          if (!target ||
              !target.tagName ||
              INPUT_TAGS.indexOf(target.tagName) < 0 ||
              isBlocked(target, blockClass, blockSelector, unblockSelector)) {
              return;
          }
          const type = target.type;
          if (target.classList.contains(ignoreClass) ||
              (ignoreSelector && target.matches(ignoreSelector))) {
              return;
          }
          let text = target.value;
          let isChecked = false;
          if (type === 'radio' || type === 'checkbox') {
              isChecked = target.checked;
          }
          else if (maskInputOptions[target.tagName.toLowerCase()] ||
              maskInputOptions[type]) {
              text = maskInputValue({
                  input: target,
                  maskInputOptions,
                  maskInputSelector,
                  unmaskInputSelector,
                  tagName: target.tagName,
                  type,
                  value: text,
                  maskInputFn,
              });
          }
          cbWithDedup(target, callbackWrapper(wrapEventWithUserTriggeredFlag)({ text, isChecked, userTriggered }, userTriggeredOnInput));
          const name = target.name;
          if (type === 'radio' && name && isChecked) {
              doc
                  .querySelectorAll(`input[type="radio"][name="${name}"]`)
                  .forEach((el) => {
                  if (el !== target) {
                      cbWithDedup(el, callbackWrapper(wrapEventWithUserTriggeredFlag)({
                          text: el.value,
                          isChecked: !isChecked,
                          userTriggered: false,
                      }, userTriggeredOnInput));
                  }
              });
          }
      }
      function cbWithDedup(target, v) {
          const lastInputValue = lastInputValueMap.get(target);
          if (!lastInputValue ||
              lastInputValue.text !== v.text ||
              lastInputValue.isChecked !== v.isChecked) {
              lastInputValueMap.set(target, v);
              const id = mirror.getId(target);
              inputCb(Object.assign(Object.assign({}, v), { id }));
          }
      }
      const events = sampling.input === 'last' ? ['change'] : ['input', 'change'];
      const handlers = events.map((eventName) => on(eventName, callbackWrapper(eventHandler), doc));
      const propertyDescriptor = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');
      const hookProperties = [
          [HTMLInputElement.prototype, 'value'],
          [HTMLInputElement.prototype, 'checked'],
          [HTMLSelectElement.prototype, 'value'],
          [HTMLTextAreaElement.prototype, 'value'],
          [HTMLSelectElement.prototype, 'selectedIndex'],
          [HTMLOptionElement.prototype, 'selected'],
      ];
      if (propertyDescriptor && propertyDescriptor.set) {
          handlers.push(...hookProperties.map((p) => hookSetter(p[0], p[1], {
              set() {
                  callbackWrapper(eventHandler)({ target: this });
              },
          })));
      }
      return callbackWrapper(() => {
          handlers.forEach((h) => h());
      });
  }
  function getNestedCSSRulePositions(rule) {
      const positions = [];
      function recurse(childRule, pos) {
          if ((hasNestedCSSRule('CSSGroupingRule') &&
              childRule.parentRule instanceof CSSGroupingRule) ||
              (hasNestedCSSRule('CSSMediaRule') &&
                  childRule.parentRule instanceof CSSMediaRule) ||
              (hasNestedCSSRule('CSSSupportsRule') &&
                  childRule.parentRule instanceof CSSSupportsRule) ||
              (hasNestedCSSRule('CSSConditionRule') &&
                  childRule.parentRule instanceof CSSConditionRule)) {
              const rules = Array.from(childRule.parentRule.cssRules);
              const index = rules.indexOf(childRule);
              pos.unshift(index);
          }
          else {
              const rules = Array.from(childRule.parentStyleSheet.cssRules);
              const index = rules.indexOf(childRule);
              pos.unshift(index);
          }
          return pos;
      }
      return recurse(rule, positions);
  }
  function initStyleSheetObserver({ styleSheetRuleCb, mirror }, { win }) {
      if (!win.CSSStyleSheet || !win.CSSStyleSheet.prototype) {
          return () => { };
      }
      const insertRule = win.CSSStyleSheet.prototype.insertRule;
      win.CSSStyleSheet.prototype.insertRule = new Proxy(insertRule, {
          apply: callbackWrapper((target, thisArg, argumentsList) => {
              const [rule, index] = argumentsList;
              const id = mirror.getId(thisArg.ownerNode);
              if (id !== -1) {
                  styleSheetRuleCb({
                      id,
                      adds: [{ rule, index }],
                  });
              }
              return target.apply(thisArg, argumentsList);
          }),
      });
      const deleteRule = win.CSSStyleSheet.prototype.deleteRule;
      win.CSSStyleSheet.prototype.deleteRule = new Proxy(deleteRule, {
          apply: callbackWrapper((target, thisArg, argumentsList) => {
              const [index] = argumentsList;
              const id = mirror.getId(thisArg.ownerNode);
              if (id !== -1) {
                  styleSheetRuleCb({
                      id,
                      removes: [{ index }],
                  });
              }
              return target.apply(thisArg, argumentsList);
          }),
      });
      const supportedNestedCSSRuleTypes = {};
      if (canMonkeyPatchNestedCSSRule('CSSGroupingRule')) {
          supportedNestedCSSRuleTypes.CSSGroupingRule = win.CSSGroupingRule;
      }
      else {
          if (canMonkeyPatchNestedCSSRule('CSSMediaRule')) {
              supportedNestedCSSRuleTypes.CSSMediaRule = win.CSSMediaRule;
          }
          if (canMonkeyPatchNestedCSSRule('CSSConditionRule')) {
              supportedNestedCSSRuleTypes.CSSConditionRule = win.CSSConditionRule;
          }
          if (canMonkeyPatchNestedCSSRule('CSSSupportsRule')) {
              supportedNestedCSSRuleTypes.CSSSupportsRule = win.CSSSupportsRule;
          }
      }
      const unmodifiedFunctions = {};
      Object.entries(supportedNestedCSSRuleTypes).forEach(([typeKey, type]) => {
          unmodifiedFunctions[typeKey] = {
              insertRule: type.prototype.insertRule,
              deleteRule: type.prototype.deleteRule,
          };
          type.prototype.insertRule = new Proxy(unmodifiedFunctions[typeKey].insertRule, {
              apply: callbackWrapper((target, thisArg, argumentsList) => {
                  const [rule, index] = argumentsList;
                  const id = mirror.getId(thisArg.parentStyleSheet.ownerNode);
                  if (id !== -1) {
                      styleSheetRuleCb({
                          id,
                          adds: [
                              {
                                  rule,
                                  index: [
                                      ...getNestedCSSRulePositions(thisArg),
                                      index || 0,
                                  ],
                              },
                          ],
                      });
                  }
                  return target.apply(thisArg, argumentsList);
              }),
          });
          type.prototype.deleteRule = new Proxy(unmodifiedFunctions[typeKey].deleteRule, {
              apply: callbackWrapper((target, thisArg, argumentsList) => {
                  const [index] = argumentsList;
                  const id = mirror.getId(thisArg.parentStyleSheet.ownerNode);
                  if (id !== -1) {
                      styleSheetRuleCb({
                          id,
                          removes: [
                              { index: [...getNestedCSSRulePositions(thisArg), index] },
                          ],
                      });
                  }
                  return target.apply(thisArg, argumentsList);
              }),
          });
      });
      return callbackWrapper(() => {
          win.CSSStyleSheet.prototype.insertRule = insertRule;
          win.CSSStyleSheet.prototype.deleteRule = deleteRule;
          Object.entries(supportedNestedCSSRuleTypes).forEach(([typeKey, type]) => {
              type.prototype.insertRule = unmodifiedFunctions[typeKey].insertRule;
              type.prototype.deleteRule = unmodifiedFunctions[typeKey].deleteRule;
          });
      });
  }
  function initStyleDeclarationObserver({ styleDeclarationCb, mirror }, { win }) {
      const setProperty = win.CSSStyleDeclaration.prototype.setProperty;
      win.CSSStyleDeclaration.prototype.setProperty = new Proxy(setProperty, {
          apply: callbackWrapper((target, thisArg, argumentsList) => {
              var _a, _b;
              const [property, value, priority] = argumentsList;
              const id = mirror.getId((_b = (_a = thisArg.parentRule) === null || _a === void 0 ? void 0 : _a.parentStyleSheet) === null || _b === void 0 ? void 0 : _b.ownerNode);
              if (id !== -1) {
                  styleDeclarationCb({
                      id,
                      set: {
                          property,
                          value,
                          priority,
                      },
                      index: getNestedCSSRulePositions(thisArg.parentRule),
                  });
              }
              return target.apply(thisArg, argumentsList);
          }),
      });
      const removeProperty = win.CSSStyleDeclaration.prototype.removeProperty;
      win.CSSStyleDeclaration.prototype.removeProperty = new Proxy(removeProperty, {
          apply: callbackWrapper((target, thisArg, argumentsList) => {
              var _a, _b;
              const [property] = argumentsList;
              const id = mirror.getId((_b = (_a = thisArg.parentRule) === null || _a === void 0 ? void 0 : _a.parentStyleSheet) === null || _b === void 0 ? void 0 : _b.ownerNode);
              if (id !== -1) {
                  styleDeclarationCb({
                      id,
                      remove: {
                          property,
                      },
                      index: getNestedCSSRulePositions(thisArg.parentRule),
                  });
              }
              return target.apply(thisArg, argumentsList);
          }),
      });
      return callbackWrapper(() => {
          win.CSSStyleDeclaration.prototype.setProperty = setProperty;
          win.CSSStyleDeclaration.prototype.removeProperty = removeProperty;
      });
  }
  function initMediaInteractionObserver({ mediaInteractionCb, blockClass, blockSelector, unblockSelector, mirror, sampling, }) {
      const handler = (type) => throttle(callbackWrapper((event) => {
          const target = getEventTarget(event);
          if (!target || isBlocked(target, blockClass, blockSelector, unblockSelector)) {
              return;
          }
          const { currentTime, volume, muted } = target;
          mediaInteractionCb({
              type,
              id: mirror.getId(target),
              currentTime,
              volume,
              muted,
          });
      }), sampling.media || 500);
      const handlers = [
          on('play', handler(0)),
          on('pause', handler(1)),
          on('seeked', handler(2)),
          on('volumechange', handler(3)),
      ];
      return callbackWrapper(() => {
          handlers.forEach((h) => h());
      });
  }
  function initFontObserver({ fontCb, doc }) {
      const win = doc.defaultView;
      if (!win) {
          return () => { };
      }
      const handlers = [];
      const fontMap = new WeakMap();
      const originalFontFace = win.FontFace;
      win.FontFace = function FontFace(family, source, descriptors) {
          const fontFace = new originalFontFace(family, source, descriptors);
          fontMap.set(fontFace, {
              family,
              buffer: typeof source !== 'string',
              descriptors,
              fontSource: typeof source === 'string'
                  ? source
                  :
                      JSON.stringify(Array.from(new Uint8Array(source))),
          });
          return fontFace;
      };
      const restoreHandler = patch(doc.fonts, 'add', function (original) {
          return function (fontFace) {
              setTimeout(() => {
                  const p = fontMap.get(fontFace);
                  if (p) {
                      fontCb(p);
                      fontMap.delete(fontFace);
                  }
              }, 0);
              return original.apply(this, [fontFace]);
          };
      });
      handlers.push(() => {
          win.FontFace = originalFontFace;
      });
      handlers.push(restoreHandler);
      return callbackWrapper(() => {
          handlers.forEach((h) => h());
      });
  }
  function mergeHooks(o, hooks) {
      const { mutationCb, mousemoveCb, mouseInteractionCb, scrollCb, viewportResizeCb, inputCb, mediaInteractionCb, styleSheetRuleCb, styleDeclarationCb, canvasMutationCb, fontCb, } = o;
      o.mutationCb = (...p) => {
          if (hooks.mutation) {
              hooks.mutation(...p);
          }
          mutationCb(...p);
      };
      o.mousemoveCb = (...p) => {
          if (hooks.mousemove) {
              hooks.mousemove(...p);
          }
          mousemoveCb(...p);
      };
      o.mouseInteractionCb = (...p) => {
          if (hooks.mouseInteraction) {
              hooks.mouseInteraction(...p);
          }
          mouseInteractionCb(...p);
      };
      o.scrollCb = (...p) => {
          if (hooks.scroll) {
              hooks.scroll(...p);
          }
          scrollCb(...p);
      };
      o.viewportResizeCb = (...p) => {
          if (hooks.viewportResize) {
              hooks.viewportResize(...p);
          }
          viewportResizeCb(...p);
      };
      o.inputCb = (...p) => {
          if (hooks.input) {
              hooks.input(...p);
          }
          inputCb(...p);
      };
      o.mediaInteractionCb = (...p) => {
          if (hooks.mediaInteaction) {
              hooks.mediaInteaction(...p);
          }
          mediaInteractionCb(...p);
      };
      o.styleSheetRuleCb = (...p) => {
          if (hooks.styleSheetRule) {
              hooks.styleSheetRule(...p);
          }
          styleSheetRuleCb(...p);
      };
      o.styleDeclarationCb = (...p) => {
          if (hooks.styleDeclaration) {
              hooks.styleDeclaration(...p);
          }
          styleDeclarationCb(...p);
      };
      o.canvasMutationCb = (...p) => {
          if (hooks.canvasMutation) {
              hooks.canvasMutation(...p);
          }
          canvasMutationCb(...p);
      };
      o.fontCb = (...p) => {
          if (hooks.font) {
              hooks.font(...p);
          }
          fontCb(...p);
      };
  }
  function initObservers(o, hooks = {}) {
      const currentWindow = o.doc.defaultView;
      if (!currentWindow) {
          return () => { };
      }
      mergeHooks(o, hooks);
      const mutationObserver = initMutationObserver(o, o.doc);
      const mousemoveHandler = initMoveObserver(o);
      const mouseInteractionHandler = initMouseInteractionObserver(o);
      const scrollHandler = initScrollObserver(o);
      const viewportResizeHandler = initViewportResizeObserver(o);
      const inputHandler = initInputObserver(o);
      const mediaInteractionHandler = initMediaInteractionObserver(o);
      const styleSheetObserver = initStyleSheetObserver(o, { win: currentWindow });
      const styleDeclarationObserver = initStyleDeclarationObserver(o, {
          win: currentWindow,
      });
      const fontObserver = o.collectFonts ? initFontObserver(o) : () => { };
      const pluginHandlers = [];
      for (const plugin of o.plugins) {
          pluginHandlers.push(plugin.observer(plugin.callback, currentWindow, plugin.options));
      }
      return callbackWrapper(() => {
          mutationBuffers.forEach((b) => b.reset());
          mutationObserver.disconnect();
          mousemoveHandler();
          mouseInteractionHandler();
          scrollHandler();
          viewportResizeHandler();
          inputHandler();
          mediaInteractionHandler();
          try {
              styleSheetObserver();
              styleDeclarationObserver();
          }
          catch (e) {
          }
          fontObserver();
          pluginHandlers.forEach((h) => h());
      });
  }
  function hasNestedCSSRule(prop) {
      return typeof window[prop] !== 'undefined';
  }
  function canMonkeyPatchNestedCSSRule(prop) {
      return Boolean(typeof window[prop] !== 'undefined' &&
          window[prop].prototype &&
          'insertRule' in window[prop].prototype &&
          'deleteRule' in window[prop].prototype);
  }

  class IframeManager {
      constructor(options) {
          this.iframes = new WeakMap();
          this.mutationCb = options.mutationCb;
      }
      addIframe(iframeEl) {
          this.iframes.set(iframeEl, true);
      }
      addLoadListener(cb) {
          this.loadListener = cb;
      }
      attachIframe(iframeEl, childSn) {
          var _a;
          this.mutationCb({
              adds: [
                  {
                      parentId: iframeEl.__sn.id,
                      nextId: null,
                      node: childSn,
                  },
              ],
              removes: [],
              texts: [],
              attributes: [],
              isAttachIframe: true,
          });
          (_a = this.loadListener) === null || _a === void 0 ? void 0 : _a.call(this, iframeEl);
      }
  }

  class ShadowDomManager {
      constructor(options) {
          this.restorePatches = [];
          this.mutationCb = options.mutationCb;
          this.scrollCb = options.scrollCb;
          this.bypassOptions = options.bypassOptions;
          this.mirror = options.mirror;
          const manager = this;
          this.restorePatches.push(patch(HTMLElement.prototype, 'attachShadow', function (original) {
              return function () {
                  const shadowRoot = original.apply(this, arguments);
                  if (this.shadowRoot)
                      manager.addShadowRoot(this.shadowRoot, this.ownerDocument);
                  return shadowRoot;
              };
          }));
      }
      addShadowRoot(shadowRoot, doc) {
          initMutationObserver(Object.assign(Object.assign({}, this.bypassOptions), { doc, mutationCb: this.mutationCb, mirror: this.mirror, shadowDomManager: this }), shadowRoot);
          initScrollObserver(Object.assign(Object.assign({}, this.bypassOptions), { scrollCb: this.scrollCb, doc: shadowRoot, mirror: this.mirror }));
      }
      observeAttachShadow(iframeElement) {
          if (iframeElement.contentWindow) {
              const manager = this;
              this.restorePatches.push(patch(iframeElement.contentWindow.HTMLElement.prototype, 'attachShadow', function (original) {
                  return function () {
                      const shadowRoot = original.apply(this, arguments);
                      if (this.shadowRoot)
                          manager.addShadowRoot(this.shadowRoot, iframeElement.contentDocument);
                      return shadowRoot;
                  };
              }));
          }
      }
      reset() {
          this.restorePatches.forEach((restorePatch) => restorePatch());
      }
  }

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

  function initCanvas2DMutationObserver(cb, win, blockClass, unblockSelector, blockSelector, mirror) {
      const handlers = [];
      const props2D = Object.getOwnPropertyNames(win.CanvasRenderingContext2D.prototype);
      for (const prop of props2D) {
          try {
              if (typeof win.CanvasRenderingContext2D.prototype[prop] !== 'function') {
                  continue;
              }
              const restoreHandler = patch(win.CanvasRenderingContext2D.prototype, prop, function (original) {
                  return function (...args) {
                      if (!isBlocked(this.canvas, blockClass, blockSelector, unblockSelector)) {
                          setTimeout(() => {
                              const recordArgs = [...args];
                              if (prop === 'drawImage') {
                                  if (recordArgs[0] &&
                                      recordArgs[0] instanceof HTMLCanvasElement) {
                                      const canvas = recordArgs[0];
                                      const ctx = canvas.getContext('2d');
                                      let imgd = ctx === null || ctx === void 0 ? void 0 : ctx.getImageData(0, 0, canvas.width, canvas.height);
                                      let pix = imgd === null || imgd === void 0 ? void 0 : imgd.data;
                                      recordArgs[0] = JSON.stringify(pix);
                                  }
                              }
                              cb(this.canvas, {
                                  type: CanvasContext['2D'],
                                  property: prop,
                                  args: recordArgs,
                              });
                          }, 0);
                      }
                      return original.apply(this, args);
                  };
              });
              handlers.push(restoreHandler);
          }
          catch (_a) {
              const hookHandler = hookSetter(win.CanvasRenderingContext2D.prototype, prop, {
                  set(v) {
                      cb(this.canvas, {
                          type: CanvasContext['2D'],
                          property: prop,
                          args: [v],
                          setter: true,
                      });
                  },
              });
              handlers.push(hookHandler);
          }
      }
      return () => {
          handlers.forEach((h) => h());
      };
  }

  function initCanvasContextObserver(win, blockClass, blockSelector, unblockSelector) {
      const handlers = [];
      try {
          const restoreHandler = patch(win.HTMLCanvasElement.prototype, 'getContext', function (original) {
              return function (contextType, ...args) {
                  if (!isBlocked(this, blockClass, blockSelector, unblockSelector)) {
                      if (!('__context' in this))
                          this.__context = contextType;
                  }
                  return original.apply(this, [contextType, ...args]);
              };
          });
          handlers.push(restoreHandler);
      }
      catch (_a) {
          console.error('failed to patch HTMLCanvasElement.prototype.getContext');
      }
      return () => {
          handlers.forEach((h) => h());
      };
  }

  /*
   * base64-arraybuffer 1.0.2 <https://github.com/niklasvh/base64-arraybuffer>
   * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
   * Released under MIT License
   */
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  // Use a lookup table to find the index.
  var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
  for (var i = 0; i < chars.length; i++) {
      lookup[chars.charCodeAt(i)] = i;
  }
  var encode = function (arraybuffer) {
      var bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = '';
      for (i = 0; i < len; i += 3) {
          base64 += chars[bytes[i] >> 2];
          base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
          base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
          base64 += chars[bytes[i + 2] & 63];
      }
      if (len % 3 === 2) {
          base64 = base64.substring(0, base64.length - 1) + '=';
      }
      else if (len % 3 === 1) {
          base64 = base64.substring(0, base64.length - 2) + '==';
      }
      return base64;
  };

  const webGLVarMap = new Map();
  function variableListFor(ctx, ctor) {
      let contextMap = webGLVarMap.get(ctx);
      if (!contextMap) {
          contextMap = new Map();
          webGLVarMap.set(ctx, contextMap);
      }
      if (!contextMap.has(ctor)) {
          contextMap.set(ctor, []);
      }
      return contextMap.get(ctor);
  }
  const saveWebGLVar = (value, win, ctx) => {
      if (!value ||
          !(isInstanceOfWebGLObject(value, win) || typeof value === 'object'))
          return;
      const name = value.constructor.name;
      const list = variableListFor(ctx, name);
      let index = list.indexOf(value);
      if (index === -1) {
          index = list.length;
          list.push(value);
      }
      return index;
  };
  function serializeArg(value, win, ctx) {
      if (value instanceof Array) {
          return value.map((arg) => serializeArg(arg, win, ctx));
      }
      else if (value === null) {
          return value;
      }
      else if (value instanceof Float32Array ||
          value instanceof Float64Array ||
          value instanceof Int32Array ||
          value instanceof Uint32Array ||
          value instanceof Uint8Array ||
          value instanceof Uint16Array ||
          value instanceof Int16Array ||
          value instanceof Int8Array ||
          value instanceof Uint8ClampedArray) {
          const name = value.constructor.name;
          return {
              rr_type: name,
              args: [Object.values(value)],
          };
      }
      else if (value instanceof ArrayBuffer) {
          const name = value.constructor.name;
          const base64 = encode(value);
          return {
              rr_type: name,
              base64,
          };
      }
      else if (value instanceof DataView) {
          const name = value.constructor.name;
          return {
              rr_type: name,
              args: [
                  serializeArg(value.buffer, win, ctx),
                  value.byteOffset,
                  value.byteLength,
              ],
          };
      }
      else if (value instanceof HTMLImageElement) {
          const name = value.constructor.name;
          const { src } = value;
          return {
              rr_type: name,
              src,
          };
      }
      else if (value instanceof ImageData) {
          const name = value.constructor.name;
          return {
              rr_type: name,
              args: [serializeArg(value.data, win, ctx), value.width, value.height],
          };
      }
      else if (isInstanceOfWebGLObject(value, win) || typeof value === 'object') {
          const name = value.constructor.name;
          const index = saveWebGLVar(value, win, ctx);
          return {
              rr_type: name,
              index: index,
          };
      }
      return value;
  }
  const serializeArgs = (args, win, ctx) => {
      return [...args].map((arg) => serializeArg(arg, win, ctx));
  };
  const isInstanceOfWebGLObject = (value, win) => {
      const webGLConstructorNames = [
          'WebGLActiveInfo',
          'WebGLBuffer',
          'WebGLFramebuffer',
          'WebGLProgram',
          'WebGLRenderbuffer',
          'WebGLShader',
          'WebGLShaderPrecisionFormat',
          'WebGLTexture',
          'WebGLUniformLocation',
          'WebGLVertexArrayObject',
          'WebGLVertexArrayObjectOES',
      ];
      const supportedWebGLConstructorNames = webGLConstructorNames.filter((name) => typeof win[name] === 'function');
      return Boolean(supportedWebGLConstructorNames.find((name) => value instanceof win[name]));
  };

  function patchGLPrototype(prototype, type, cb, blockClass, unblockSelector, blockSelector, mirror, win) {
      const handlers = [];
      const props = Object.getOwnPropertyNames(prototype);
      for (const prop of props) {
          try {
              if (typeof prototype[prop] !== 'function') {
                  continue;
              }
              const restoreHandler = patch(prototype, prop, function (original) {
                  return function (...args) {
                      const result = original.apply(this, args);
                      saveWebGLVar(result, win, prototype);
                      if (!isBlocked(this.canvas, blockClass, blockSelector, unblockSelector)) {
                          const id = mirror.getId(this.canvas);
                          const recordArgs = serializeArgs([...args], win, prototype);
                          const mutation = {
                              type,
                              property: prop,
                              args: recordArgs,
                          };
                          cb(this.canvas, mutation);
                      }
                      return result;
                  };
              });
              handlers.push(restoreHandler);
          }
          catch (_a) {
              const hookHandler = hookSetter(prototype, prop, {
                  set(v) {
                      cb(this.canvas, {
                          type,
                          property: prop,
                          args: [v],
                          setter: true,
                      });
                  },
              });
              handlers.push(hookHandler);
          }
      }
      return handlers;
  }
  function initCanvasWebGLMutationObserver(cb, win, blockClass, blockSelector, unblockSelector, mirror) {
      const handlers = [];
      handlers.push(...patchGLPrototype(win.WebGLRenderingContext.prototype, CanvasContext.WebGL, cb, blockClass, blockSelector, unblockSelector, mirror, win));
      if (typeof win.WebGL2RenderingContext !== 'undefined') {
          handlers.push(...patchGLPrototype(win.WebGL2RenderingContext.prototype, CanvasContext.WebGL2, cb, blockClass, blockSelector, unblockSelector, mirror, win));
      }
      return () => {
          handlers.forEach((h) => h());
      };
  }

  class CanvasManager {
      reset() {
          this.pendingCanvasMutations.clear();
          this.resetObservers && this.resetObservers();
      }
      freeze() {
          this.frozen = true;
      }
      unfreeze() {
          this.frozen = false;
      }
      lock() {
          this.locked = true;
      }
      unlock() {
          this.locked = false;
      }
      constructor(options) {
          this.pendingCanvasMutations = new Map();
          this.rafStamps = { latestId: 0, invokeId: null };
          this.frozen = false;
          this.locked = false;
          this.processMutation = function (target, mutation) {
              const newFrame = this.rafStamps.invokeId &&
                  this.rafStamps.latestId !== this.rafStamps.invokeId;
              if (newFrame || !this.rafStamps.invokeId)
                  this.rafStamps.invokeId = this.rafStamps.latestId;
              if (!this.pendingCanvasMutations.has(target)) {
                  this.pendingCanvasMutations.set(target, []);
              }
              this.pendingCanvasMutations.get(target).push(mutation);
          };
          this.mutationCb = options.mutationCb;
          this.mirror = options.mirror;
          if (options.recordCanvas === true)
              this.initCanvasMutationObserver(options.win, options.blockClass, options.blockSelector, options.unblockSelector);
      }
      initCanvasMutationObserver(win, blockClass, unblockSelector, blockSelector) {
          this.startRAFTimestamping();
          this.startPendingCanvasMutationFlusher();
          const canvasContextReset = initCanvasContextObserver(win, blockClass, blockSelector, unblockSelector);
          const canvas2DReset = initCanvas2DMutationObserver(this.processMutation.bind(this), win, blockClass, blockSelector, unblockSelector, this.mirror);
          const canvasWebGL1and2Reset = initCanvasWebGLMutationObserver(this.processMutation.bind(this), win, blockClass, blockSelector, unblockSelector, this.mirror);
          this.resetObservers = () => {
              canvasContextReset();
              canvas2DReset();
              canvasWebGL1and2Reset();
          };
      }
      startPendingCanvasMutationFlusher() {
          requestAnimationFrame(() => this.flushPendingCanvasMutations());
      }
      startRAFTimestamping() {
          const setLatestRAFTimestamp = (timestamp) => {
              this.rafStamps.latestId = timestamp;
              requestAnimationFrame(setLatestRAFTimestamp);
          };
          requestAnimationFrame(setLatestRAFTimestamp);
      }
      flushPendingCanvasMutations() {
          this.pendingCanvasMutations.forEach((values, canvas) => {
              const id = this.mirror.getId(canvas);
              this.flushPendingCanvasMutationFor(canvas, id);
          });
          requestAnimationFrame(() => this.flushPendingCanvasMutations());
      }
      flushPendingCanvasMutationFor(canvas, id) {
          if (this.frozen || this.locked) {
              return;
          }
          const valuesWithType = this.pendingCanvasMutations.get(canvas);
          if (!valuesWithType || id === -1)
              return;
          const values = valuesWithType.map((value) => {
              const rest = __rest(value, ["type"]);
              return rest;
          });
          const { type } = valuesWithType[0];
          this.mutationCb({ id, type, commands: values });
          this.pendingCanvasMutations.delete(canvas);
      }
  }

  function wrapEvent(e) {
      return Object.assign(Object.assign({}, e), { timestamp: Date.now() });
  }
  let wrappedEmit;
  let takeFullSnapshot;
  const mirror = createMirror();
  function record(options = {}) {
      const { emit, checkoutEveryNms, checkoutEveryNth, blockClass = 'rr-block', blockSelector = null, unblockSelector = null, ignoreClass = 'rr-ignore', ignoreSelector = null, maskTextClass = 'rr-mask', maskTextSelector = null, maskInputSelector = null, unmaskTextSelector = null, unmaskInputSelector = null, inlineStylesheet = true, maskAllText = false, maskAllInputs, maskInputOptions: _maskInputOptions, slimDOMOptions: _slimDOMOptions, maskInputFn, maskTextFn, hooks, packFn, sampling = {}, mousemoveWait, recordCanvas = false, userTriggeredOnInput = false, collectFonts = false, inlineImages = false, plugins, keepIframeSrcFn = () => false, } = options;
      if (!emit) {
          throw new Error('emit function is required');
      }
      if (mousemoveWait !== undefined && sampling.mousemove === undefined) {
          sampling.mousemove = mousemoveWait;
      }
      const maskInputOptions = maskAllInputs === true
          ? {
              color: true,
              date: true,
              'datetime-local': true,
              email: true,
              month: true,
              number: true,
              range: true,
              search: true,
              tel: true,
              text: true,
              time: true,
              url: true,
              week: true,
              textarea: true,
              select: true,
              password: true,
          }
          : _maskInputOptions !== undefined
              ? _maskInputOptions
              : { password: true };
      const slimDOMOptions = _slimDOMOptions === true || _slimDOMOptions === 'all'
          ? {
              script: true,
              comment: true,
              headFavicon: true,
              headWhitespace: true,
              headMetaSocial: true,
              headMetaRobots: true,
              headMetaHttpEquiv: true,
              headMetaVerification: true,
              headMetaAuthorship: _slimDOMOptions === 'all',
              headMetaDescKeywords: _slimDOMOptions === 'all',
          }
          : _slimDOMOptions
              ? _slimDOMOptions
              : {};
      polyfill();
      let lastFullSnapshotEvent;
      let incrementalSnapshotCount = 0;
      const eventProcessor = (e) => {
          for (const plugin of plugins || []) {
              if (plugin.eventProcessor) {
                  e = plugin.eventProcessor(e);
              }
          }
          if (packFn) {
              e = packFn(e);
          }
          return e;
      };
      wrappedEmit = (e, isCheckout) => {
          var _a;
          if (((_a = mutationBuffers[0]) === null || _a === void 0 ? void 0 : _a.isFrozen()) &&
              e.type !== EventType.FullSnapshot &&
              !(e.type === EventType.IncrementalSnapshot &&
                  e.data.source === IncrementalSource.Mutation)) {
              mutationBuffers.forEach((buf) => buf.unfreeze());
          }
          emit(eventProcessor(e), isCheckout);
          if (e.type === EventType.FullSnapshot) {
              lastFullSnapshotEvent = e;
              incrementalSnapshotCount = 0;
          }
          else if (e.type === EventType.IncrementalSnapshot) {
              if (e.data.source === IncrementalSource.Mutation &&
                  e.data.isAttachIframe) {
                  return;
              }
              incrementalSnapshotCount++;
              const exceedCount = checkoutEveryNth && incrementalSnapshotCount >= checkoutEveryNth;
              const exceedTime = checkoutEveryNms &&
                  e.timestamp - lastFullSnapshotEvent.timestamp > checkoutEveryNms;
              if (exceedCount || exceedTime) {
                  takeFullSnapshot(true);
              }
          }
      };
      const wrappedMutationEmit = (m) => {
          wrappedEmit(wrapEvent({
              type: EventType.IncrementalSnapshot,
              data: Object.assign({ source: IncrementalSource.Mutation }, m),
          }));
      };
      const wrappedScrollEmit = (p) => wrappedEmit(wrapEvent({
          type: EventType.IncrementalSnapshot,
          data: Object.assign({ source: IncrementalSource.Scroll }, p),
      }));
      const wrappedCanvasMutationEmit = (p) => wrappedEmit(wrapEvent({
          type: EventType.IncrementalSnapshot,
          data: Object.assign({ source: IncrementalSource.CanvasMutation }, p),
      }));
      const iframeManager = new IframeManager({
          mutationCb: wrappedMutationEmit,
      });
      const canvasManager = new CanvasManager({
          recordCanvas,
          mutationCb: wrappedCanvasMutationEmit,
          win: window,
          blockClass,
          blockSelector,
          unblockSelector,
          mirror,
      });
      const shadowDomManager = new ShadowDomManager({
          mutationCb: wrappedMutationEmit,
          scrollCb: wrappedScrollEmit,
          bypassOptions: {
              blockClass,
              blockSelector,
              unblockSelector,
              maskTextClass,
              maskTextSelector,
              unmaskTextSelector,
              maskInputSelector,
              unmaskInputSelector,
              inlineStylesheet,
              maskAllText,
              maskInputOptions,
              maskTextFn,
              maskInputFn,
              recordCanvas,
              inlineImages,
              sampling,
              slimDOMOptions,
              iframeManager,
              canvasManager,
          },
          mirror,
      });
      takeFullSnapshot = (isCheckout = false) => {
          var _a, _b, _c, _d;
          wrappedEmit(wrapEvent({
              type: EventType.Meta,
              data: {
                  href: window.location.href,
                  width: getWindowWidth(),
                  height: getWindowHeight(),
              },
          }), isCheckout);
          mutationBuffers.forEach((buf) => buf.lock());
          const [node, idNodeMap] = snapshot(document, {
              blockClass,
              blockSelector,
              unblockSelector,
              maskTextClass,
              maskTextSelector,
              unmaskTextSelector,
              maskInputSelector,
              unmaskInputSelector,
              inlineStylesheet,
              maskAllText,
              maskAllInputs: maskInputOptions,
              maskTextFn,
              slimDOM: slimDOMOptions,
              recordCanvas,
              inlineImages,
              onSerialize: (n) => {
                  if (isIframeINode(n)) {
                      iframeManager.addIframe(n);
                  }
                  if (hasShadowRoot(n)) {
                      shadowDomManager.addShadowRoot(n.shadowRoot, document);
                  }
              },
              onIframeLoad: (iframe, childSn) => {
                  iframeManager.attachIframe(iframe, childSn);
                  shadowDomManager.observeAttachShadow(iframe);
              },
              keepIframeSrcFn,
          });
          if (!node) {
              return console.warn('Failed to snapshot the document');
          }
          mirror.map = idNodeMap;
          wrappedEmit(wrapEvent({
              type: EventType.FullSnapshot,
              data: {
                  node,
                  initialOffset: {
                      left: window.pageXOffset !== undefined
                          ? window.pageXOffset
                          : (document === null || document === void 0 ? void 0 : document.documentElement.scrollLeft) ||
                              ((_b = (_a = document === null || document === void 0 ? void 0 : document.body) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.scrollLeft) ||
                              (document === null || document === void 0 ? void 0 : document.body.scrollLeft) ||
                              0,
                      top: window.pageYOffset !== undefined
                          ? window.pageYOffset
                          : (document === null || document === void 0 ? void 0 : document.documentElement.scrollTop) ||
                              ((_d = (_c = document === null || document === void 0 ? void 0 : document.body) === null || _c === void 0 ? void 0 : _c.parentElement) === null || _d === void 0 ? void 0 : _d.scrollTop) ||
                              (document === null || document === void 0 ? void 0 : document.body.scrollTop) ||
                              0,
                  },
              },
          }));
          mutationBuffers.forEach((buf) => buf.unlock());
      };
      try {
          const handlers = [];
          handlers.push(on('DOMContentLoaded', () => {
              wrappedEmit(wrapEvent({
                  type: EventType.DomContentLoaded,
                  data: {},
              }));
          }));
          const observe = (doc) => {
              var _a;
              return callbackWrapper(initObservers)({
                  mutationCb: wrappedMutationEmit,
                  mousemoveCb: (positions, source) => wrappedEmit(wrapEvent({
                      type: EventType.IncrementalSnapshot,
                      data: {
                          source,
                          positions,
                      },
                  })),
                  mouseInteractionCb: (d) => wrappedEmit(wrapEvent({
                      type: EventType.IncrementalSnapshot,
                      data: Object.assign({ source: IncrementalSource.MouseInteraction }, d),
                  })),
                  scrollCb: wrappedScrollEmit,
                  viewportResizeCb: (d) => wrappedEmit(wrapEvent({
                      type: EventType.IncrementalSnapshot,
                      data: Object.assign({ source: IncrementalSource.ViewportResize }, d),
                  })),
                  inputCb: (v) => wrappedEmit(wrapEvent({
                      type: EventType.IncrementalSnapshot,
                      data: Object.assign({ source: IncrementalSource.Input }, v),
                  })),
                  mediaInteractionCb: (p) => wrappedEmit(wrapEvent({
                      type: EventType.IncrementalSnapshot,
                      data: Object.assign({ source: IncrementalSource.MediaInteraction }, p),
                  })),
                  styleSheetRuleCb: (r) => wrappedEmit(wrapEvent({
                      type: EventType.IncrementalSnapshot,
                      data: Object.assign({ source: IncrementalSource.StyleSheetRule }, r),
                  })),
                  styleDeclarationCb: (r) => wrappedEmit(wrapEvent({
                      type: EventType.IncrementalSnapshot,
                      data: Object.assign({ source: IncrementalSource.StyleDeclaration }, r),
                  })),
                  canvasMutationCb: wrappedCanvasMutationEmit,
                  fontCb: (p) => wrappedEmit(wrapEvent({
                      type: EventType.IncrementalSnapshot,
                      data: Object.assign({ source: IncrementalSource.Font }, p),
                  })),
                  blockClass,
                  ignoreClass,
                  ignoreSelector,
                  maskTextClass,
                  maskTextSelector,
                  unmaskTextSelector,
                  maskInputSelector,
                  unmaskInputSelector,
                  maskInputOptions,
                  inlineStylesheet,
                  sampling,
                  recordCanvas,
                  inlineImages,
                  userTriggeredOnInput,
                  collectFonts,
                  doc,
                  maskAllText,
                  maskInputFn,
                  maskTextFn,
                  blockSelector,
                  unblockSelector,
                  slimDOMOptions,
                  mirror,
                  iframeManager,
                  shadowDomManager,
                  canvasManager,
                  plugins: ((_a = plugins === null || plugins === void 0 ? void 0 : plugins.filter((p) => p.observer)) === null || _a === void 0 ? void 0 : _a.map((p) => ({
                      observer: p.observer,
                      options: p.options,
                      callback: (payload) => wrappedEmit(wrapEvent({
                          type: EventType.Plugin,
                          data: {
                              plugin: p.name,
                              payload,
                          },
                      })),
                  }))) || [],
              }, hooks);
          };
          iframeManager.addLoadListener((iframeEl) => {
              try {
                  handlers.push(observe(iframeEl.contentDocument));
              }
              catch (error) {
                  console.warn(error);
              }
          });
          const init = () => {
              takeFullSnapshot();
              handlers.push(observe(document));
          };
          if (document.readyState === 'interactive' ||
              document.readyState === 'complete') {
              init();
          }
          else {
              handlers.push(on('load', () => {
                  wrappedEmit(wrapEvent({
                      type: EventType.Load,
                      data: {},
                  }));
                  init();
              }, window));
          }
          return () => {
              handlers.forEach((h) => h());
          };
      }
      catch (error) {
          console.warn(error);
      }
  }
  record.addCustomEvent = (tag, payload) => {
      if (!wrappedEmit) {
          throw new Error('please add custom event after start recording');
      }
      wrappedEmit(wrapEvent({
          type: EventType.Custom,
          data: {
              tag,
              payload,
          },
      }));
  };
  record.freezePage = () => {
      mutationBuffers.forEach((buf) => buf.freeze());
  };
  record.takeFullSnapshot = (isCheckout) => {
      if (!takeFullSnapshot) {
          throw new Error('please take full snapshot after start recording');
      }
      takeFullSnapshot(isCheckout);
  };
  record.mirror = mirror;

  const NAVIGATION_ENTRY_KEYS = [
    'name',
    'type',
    'startTime',
    'transferSize',
    'duration',
  ];

  function isNavigationEntryEqual(a) {
    return function (b) {
      return NAVIGATION_ENTRY_KEYS.every(key => a[key] === b[key]);
    };
  }

  /**
   * There are some difficulties diagnosing why there are duplicate navigation
   * entries. We've witnessed several intermittent results:
   * - duplicate entries have duration = 0
   * - duplicate entries are the same object reference
   * - none of the above
   *
   * Compare the values of several keys to determine if the entries are duplicates or not.
   */
  // TODO (high-prio): Figure out wth is returned here
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function dedupePerformanceEntries(
    currentList,
    newList,
  ) {
    // Partition `currentList` into 3 different lists based on entryType
    const [existingNavigationEntries, existingLcpEntries, existingEntries] = currentList.reduce(
      (acc, entry) => {
        if (entry.entryType === 'navigation') {
          acc[0].push(entry );
        } else if (entry.entryType === 'largest-contentful-paint') {
          acc[1].push(entry );
        } else {
          acc[2].push(entry);
        }
        return acc;
      },
      [[], [], []],
    );

    const newEntries = [];
    const newNavigationEntries = [];
    let newLcpEntry = existingLcpEntries.length
      ? existingLcpEntries[existingLcpEntries.length - 1] // Take the last element as list is sorted
      : undefined;

    newList.forEach(entry => {
      if (entry.entryType === 'largest-contentful-paint') {
        // We want the latest LCP event only
        if (!newLcpEntry || newLcpEntry.startTime < entry.startTime) {
          newLcpEntry = entry;
        }
        return;
      }

      if (entry.entryType === 'navigation') {
        const navigationEntry = entry ;

        // Check if the navigation entry is contained in currentList or newList
        if (
          // Ignore any navigation entries with duration 0, as they are likely duplicates
          entry.duration > 0 &&
          // Ensure new entry does not already exist in existing entries
          !existingNavigationEntries.find(isNavigationEntryEqual(navigationEntry)) &&
          // Ensure new entry does not already exist in new list of navigation entries
          !newNavigationEntries.find(isNavigationEntryEqual(navigationEntry))
        ) {
          newNavigationEntries.push(navigationEntry);
        }

        // Otherwise this navigation entry is considered a duplicate and is thrown away
        return;
      }

      newEntries.push(entry);
    });

    // Re-combine and sort by startTime
    return [
      ...(newLcpEntry ? [newLcpEntry] : []),
      ...existingNavigationEntries,
      ...existingEntries,
      ...newEntries,
      ...newNavigationEntries,
    ].sort((a, b) => a.startTime - b.startTime);
  }

  /**
   * Sets up a PerformanceObserver to listen to all performance entry types.
   */
  function setupPerformanceObserver(replay) {
    const performanceObserverHandler = (list) => {
      // For whatever reason the observer was returning duplicate navigation
      // entries (the other entry types were not duplicated).
      const newPerformanceEntries = dedupePerformanceEntries(
        replay.performanceEvents,
        list.getEntries() ,
      );
      replay.performanceEvents = newPerformanceEntries;
    };

    const performanceObserver = new PerformanceObserver(performanceObserverHandler);

    [
      'element',
      'event',
      'first-input',
      'largest-contentful-paint',
      'layout-shift',
      'longtask',
      'navigation',
      'paint',
      'resource',
    ].forEach(type => {
      try {
        performanceObserver.observe({
          type,
          buffered: true,
        });
      } catch (e) {
        // This can throw if an entry type is not supported in the browser.
        // Ignore these errors.
      }
    });

    return performanceObserver;
  }

  const r = `/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
function t(t){let e=t.length;for(;--e>=0;)t[e]=0}const e=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),a=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),i=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),n=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=new Array(576);t(s);const r=new Array(60);t(r);const o=new Array(512);t(o);const l=new Array(256);t(l);const h=new Array(29);t(h);const d=new Array(30);function _(t,e,a,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}let f,c,u;function w(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}t(d);const m=t=>t<256?o[t]:o[256+(t>>>7)],b=(t,e)=>{t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},g=(t,e,a)=>{t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,b(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},p=(t,e,a)=>{g(t,a[2*e],a[2*e+1])},k=(t,e)=>{let a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},v=(t,e,a)=>{const i=new Array(16);let n,s,r=0;for(n=1;n<=15;n++)r=r+a[n-1]<<1,i[n]=r;for(s=0;s<=e;s++){let e=t[2*s+1];0!==e&&(t[2*s]=k(i[e]++,e))}},y=t=>{let e;for(e=0;e<286;e++)t.dyn_ltree[2*e]=0;for(e=0;e<30;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.sym_next=t.matches=0},x=t=>{t.bi_valid>8?b(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},z=(t,e,a,i)=>{const n=2*e,s=2*a;return t[n]<t[s]||t[n]===t[s]&&i[e]<=i[a]},A=(t,e,a)=>{const i=t.heap[a];let n=a<<1;for(;n<=t.heap_len&&(n<t.heap_len&&z(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!z(e,i,t.heap[n],t.depth));)t.heap[a]=t.heap[n],a=n,n<<=1;t.heap[a]=i},E=(t,i,n)=>{let s,r,o,_,f=0;if(0!==t.sym_next)do{s=255&t.pending_buf[t.sym_buf+f++],s+=(255&t.pending_buf[t.sym_buf+f++])<<8,r=t.pending_buf[t.sym_buf+f++],0===s?p(t,r,i):(o=l[r],p(t,o+256+1,i),_=e[o],0!==_&&(r-=h[o],g(t,r,_)),s--,o=m(s),p(t,o,n),_=a[o],0!==_&&(s-=d[o],g(t,s,_)))}while(f<t.sym_next);p(t,256,i)},R=(t,e)=>{const a=e.dyn_tree,i=e.stat_desc.static_tree,n=e.stat_desc.has_stree,s=e.stat_desc.elems;let r,o,l,h=-1;for(t.heap_len=0,t.heap_max=573,r=0;r<s;r++)0!==a[2*r]?(t.heap[++t.heap_len]=h=r,t.depth[r]=0):a[2*r+1]=0;for(;t.heap_len<2;)l=t.heap[++t.heap_len]=h<2?++h:0,a[2*l]=1,t.depth[l]=0,t.opt_len--,n&&(t.static_len-=i[2*l+1]);for(e.max_code=h,r=t.heap_len>>1;r>=1;r--)A(t,a,r);l=s;do{r=t.heap[1],t.heap[1]=t.heap[t.heap_len--],A(t,a,1),o=t.heap[1],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=o,a[2*l]=a[2*r]+a[2*o],t.depth[l]=(t.depth[r]>=t.depth[o]?t.depth[r]:t.depth[o])+1,a[2*r+1]=a[2*o+1]=l,t.heap[1]=l++,A(t,a,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],((t,e)=>{const a=e.dyn_tree,i=e.max_code,n=e.stat_desc.static_tree,s=e.stat_desc.has_stree,r=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,l=e.stat_desc.max_length;let h,d,_,f,c,u,w=0;for(f=0;f<=15;f++)t.bl_count[f]=0;for(a[2*t.heap[t.heap_max]+1]=0,h=t.heap_max+1;h<573;h++)d=t.heap[h],f=a[2*a[2*d+1]+1]+1,f>l&&(f=l,w++),a[2*d+1]=f,d>i||(t.bl_count[f]++,c=0,d>=o&&(c=r[d-o]),u=a[2*d],t.opt_len+=u*(f+c),s&&(t.static_len+=u*(n[2*d+1]+c)));if(0!==w){do{for(f=l-1;0===t.bl_count[f];)f--;t.bl_count[f]--,t.bl_count[f+1]+=2,t.bl_count[l]--,w-=2}while(w>0);for(f=l;0!==f;f--)for(d=t.bl_count[f];0!==d;)_=t.heap[--h],_>i||(a[2*_+1]!==f&&(t.opt_len+=(f-a[2*_+1])*a[2*_],a[2*_+1]=f),d--)}})(t,e),v(a,h,t.bl_count)},Z=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),e[2*(a+1)+1]=65535,i=0;i<=a;i++)n=r,r=e[2*(i+1)+1],++o<l&&n===r||(o<h?t.bl_tree[2*n]+=o:0!==n?(n!==s&&t.bl_tree[2*n]++,t.bl_tree[32]++):o<=10?t.bl_tree[34]++:t.bl_tree[36]++,o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4))},U=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),i=0;i<=a;i++)if(n=r,r=e[2*(i+1)+1],!(++o<l&&n===r)){if(o<h)do{p(t,n,t.bl_tree)}while(0!=--o);else 0!==n?(n!==s&&(p(t,n,t.bl_tree),o--),p(t,16,t.bl_tree),g(t,o-3,2)):o<=10?(p(t,17,t.bl_tree),g(t,o-3,3)):(p(t,18,t.bl_tree),g(t,o-11,7));o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4)}};let S=!1;const D=(t,e,a,i)=>{g(t,0+(i?1:0),3),x(t),b(t,a),b(t,~a),a&&t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a};var T=(t,e,a,i)=>{let o,l,h=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=(t=>{let e,a=4093624447;for(e=0;e<=31;e++,a>>>=1)if(1&a&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<256;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0})(t)),R(t,t.l_desc),R(t,t.d_desc),h=(t=>{let e;for(Z(t,t.dyn_ltree,t.l_desc.max_code),Z(t,t.dyn_dtree,t.d_desc.max_code),R(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*n[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e})(t),o=t.opt_len+3+7>>>3,l=t.static_len+3+7>>>3,l<=o&&(o=l)):o=l=a+5,a+4<=o&&-1!==e?D(t,e,a,i):4===t.strategy||l===o?(g(t,2+(i?1:0),3),E(t,s,r)):(g(t,4+(i?1:0),3),((t,e,a,i)=>{let s;for(g(t,e-257,5),g(t,a-1,5),g(t,i-4,4),s=0;s<i;s++)g(t,t.bl_tree[2*n[s]+1],3);U(t,t.dyn_ltree,e-1),U(t,t.dyn_dtree,a-1)})(t,t.l_desc.max_code+1,t.d_desc.max_code+1,h+1),E(t,t.dyn_ltree,t.dyn_dtree)),y(t),i&&x(t)},O={_tr_init:t=>{S||((()=>{let t,n,w,m,b;const g=new Array(16);for(w=0,m=0;m<28;m++)for(h[m]=w,t=0;t<1<<e[m];t++)l[w++]=m;for(l[w-1]=m,b=0,m=0;m<16;m++)for(d[m]=b,t=0;t<1<<a[m];t++)o[b++]=m;for(b>>=7;m<30;m++)for(d[m]=b<<7,t=0;t<1<<a[m]-7;t++)o[256+b++]=m;for(n=0;n<=15;n++)g[n]=0;for(t=0;t<=143;)s[2*t+1]=8,t++,g[8]++;for(;t<=255;)s[2*t+1]=9,t++,g[9]++;for(;t<=279;)s[2*t+1]=7,t++,g[7]++;for(;t<=287;)s[2*t+1]=8,t++,g[8]++;for(v(s,287,g),t=0;t<30;t++)r[2*t+1]=5,r[2*t]=k(t,5);f=new _(s,e,257,286,15),c=new _(r,a,0,30,15),u=new _(new Array(0),i,0,19,7)})(),S=!0),t.l_desc=new w(t.dyn_ltree,f),t.d_desc=new w(t.dyn_dtree,c),t.bl_desc=new w(t.bl_tree,u),t.bi_buf=0,t.bi_valid=0,y(t)},_tr_stored_block:D,_tr_flush_block:T,_tr_tally:(t,e,a)=>(t.pending_buf[t.sym_buf+t.sym_next++]=e,t.pending_buf[t.sym_buf+t.sym_next++]=e>>8,t.pending_buf[t.sym_buf+t.sym_next++]=a,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(l[a]+256+1)]++,t.dyn_dtree[2*m(e)]++),t.sym_next===t.sym_end),_tr_align:t=>{g(t,2,3),p(t,256,s),(t=>{16===t.bi_valid?(b(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)})(t)}};var F=(t,e,a,i)=>{let n=65535&t|0,s=t>>>16&65535|0,r=0;for(;0!==a;){r=a>2e3?2e3:a,a-=r;do{n=n+e[i++]|0,s=s+n|0}while(--r);n%=65521,s%=65521}return n|s<<16|0};const L=new Uint32Array((()=>{let t,e=[];for(var a=0;a<256;a++){t=a;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e})());var N=(t,e,a,i)=>{const n=L,s=i+a;t^=-1;for(let a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t},I={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},B={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:C,_tr_stored_block:H,_tr_flush_block:M,_tr_tally:j,_tr_align:K}=O,{Z_NO_FLUSH:P,Z_PARTIAL_FLUSH:Y,Z_FULL_FLUSH:G,Z_FINISH:X,Z_BLOCK:W,Z_OK:q,Z_STREAM_END:J,Z_STREAM_ERROR:Q,Z_DATA_ERROR:V,Z_BUF_ERROR:$,Z_DEFAULT_COMPRESSION:tt,Z_FILTERED:et,Z_HUFFMAN_ONLY:at,Z_RLE:it,Z_FIXED:nt,Z_DEFAULT_STRATEGY:st,Z_UNKNOWN:rt,Z_DEFLATED:ot}=B,lt=(t,e)=>(t.msg=I[e],e),ht=t=>2*t-(t>4?9:0),dt=t=>{let e=t.length;for(;--e>=0;)t[e]=0},_t=t=>{let e,a,i,n=t.w_size;e=t.hash_size,i=e;do{a=t.head[--i],t.head[i]=a>=n?a-n:0}while(--e);e=n,i=e;do{a=t.prev[--i],t.prev[i]=a>=n?a-n:0}while(--e)};let ft=(t,e,a)=>(e<<t.hash_shift^a)&t.hash_mask;const ct=t=>{const e=t.state;let a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},ut=(t,e)=>{M(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,ct(t.strm)},wt=(t,e)=>{t.pending_buf[t.pending++]=e},mt=(t,e)=>{t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},bt=(t,e,a,i)=>{let n=t.avail_in;return n>i&&(n=i),0===n?0:(t.avail_in-=n,e.set(t.input.subarray(t.next_in,t.next_in+n),a),1===t.state.wrap?t.adler=F(t.adler,e,n,a):2===t.state.wrap&&(t.adler=N(t.adler,e,n,a)),t.next_in+=n,t.total_in+=n,n)},gt=(t,e)=>{let a,i,n=t.max_chain_length,s=t.strstart,r=t.prev_length,o=t.nice_match;const l=t.strstart>t.w_size-262?t.strstart-(t.w_size-262):0,h=t.window,d=t.w_mask,_=t.prev,f=t.strstart+258;let c=h[s+r-1],u=h[s+r];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do{if(a=e,h[a+r]===u&&h[a+r-1]===c&&h[a]===h[s]&&h[++a]===h[s+1]){s+=2,a++;do{}while(h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&s<f);if(i=258-(f-s),s=f-258,i>r){if(t.match_start=e,r=i,i>=o)break;c=h[s+r-1],u=h[s+r]}}}while((e=_[e&d])>l&&0!=--n);return r<=t.lookahead?r:t.lookahead},pt=t=>{const e=t.w_size;let a,i,n;do{if(i=t.window_size-t.lookahead-t.strstart,t.strstart>=e+(e-262)&&(t.window.set(t.window.subarray(e,e+e-i),0),t.match_start-=e,t.strstart-=e,t.block_start-=e,t.insert>t.strstart&&(t.insert=t.strstart),_t(t),i+=e),0===t.strm.avail_in)break;if(a=bt(t.strm,t.window,t.strstart+t.lookahead,i),t.lookahead+=a,t.lookahead+t.insert>=3)for(n=t.strstart-t.insert,t.ins_h=t.window[n],t.ins_h=ft(t,t.ins_h,t.window[n+1]);t.insert&&(t.ins_h=ft(t,t.ins_h,t.window[n+3-1]),t.prev[n&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=n,n++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<262&&0!==t.strm.avail_in)},kt=(t,e)=>{let a,i,n,s=t.pending_buf_size-5>t.w_size?t.w_size:t.pending_buf_size-5,r=0,o=t.strm.avail_in;do{if(a=65535,n=t.bi_valid+42>>3,t.strm.avail_out<n)break;if(n=t.strm.avail_out-n,i=t.strstart-t.block_start,a>i+t.strm.avail_in&&(a=i+t.strm.avail_in),a>n&&(a=n),a<s&&(0===a&&e!==X||e===P||a!==i+t.strm.avail_in))break;r=e===X&&a===i+t.strm.avail_in?1:0,H(t,0,0,r),t.pending_buf[t.pending-4]=a,t.pending_buf[t.pending-3]=a>>8,t.pending_buf[t.pending-2]=~a,t.pending_buf[t.pending-1]=~a>>8,ct(t.strm),i&&(i>a&&(i=a),t.strm.output.set(t.window.subarray(t.block_start,t.block_start+i),t.strm.next_out),t.strm.next_out+=i,t.strm.avail_out-=i,t.strm.total_out+=i,t.block_start+=i,a-=i),a&&(bt(t.strm,t.strm.output,t.strm.next_out,a),t.strm.next_out+=a,t.strm.avail_out-=a,t.strm.total_out+=a)}while(0===r);return o-=t.strm.avail_in,o&&(o>=t.w_size?(t.matches=2,t.window.set(t.strm.input.subarray(t.strm.next_in-t.w_size,t.strm.next_in),0),t.strstart=t.w_size,t.insert=t.strstart):(t.window_size-t.strstart<=o&&(t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,t.insert>t.strstart&&(t.insert=t.strstart)),t.window.set(t.strm.input.subarray(t.strm.next_in-o,t.strm.next_in),t.strstart),t.strstart+=o,t.insert+=o>t.w_size-t.insert?t.w_size-t.insert:o),t.block_start=t.strstart),t.high_water<t.strstart&&(t.high_water=t.strstart),r?4:e!==P&&e!==X&&0===t.strm.avail_in&&t.strstart===t.block_start?2:(n=t.window_size-t.strstart,t.strm.avail_in>n&&t.block_start>=t.w_size&&(t.block_start-=t.w_size,t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,n+=t.w_size,t.insert>t.strstart&&(t.insert=t.strstart)),n>t.strm.avail_in&&(n=t.strm.avail_in),n&&(bt(t.strm,t.window,t.strstart,n),t.strstart+=n,t.insert+=n>t.w_size-t.insert?t.w_size-t.insert:n),t.high_water<t.strstart&&(t.high_water=t.strstart),n=t.bi_valid+42>>3,n=t.pending_buf_size-n>65535?65535:t.pending_buf_size-n,s=n>t.w_size?t.w_size:n,i=t.strstart-t.block_start,(i>=s||(i||e===X)&&e!==P&&0===t.strm.avail_in&&i<=n)&&(a=i>n?n:i,r=e===X&&0===t.strm.avail_in&&a===i?1:0,H(t,t.block_start,a,r),t.block_start+=a,ct(t.strm)),r?3:1)},vt=(t,e)=>{let a,i;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a)),t.match_length>=3)if(i=j(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=ft(t,t.ins_h,t.window[t.strstart+1]);else i=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2},yt=(t,e)=>{let a,i,n;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a),t.match_length<=5&&(t.strategy===et||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){n=t.strstart+t.lookahead-3,i=j(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=n&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,i&&(ut(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if(i=j(t,0,t.window[t.strstart-1]),i&&ut(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=j(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2};function xt(t,e,a,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=i,this.func=n}const zt=[new xt(0,0,0,0,kt),new xt(4,4,8,4,vt),new xt(4,5,16,8,vt),new xt(4,6,32,32,vt),new xt(4,4,16,16,yt),new xt(8,16,32,32,yt),new xt(8,16,128,128,yt),new xt(8,32,128,256,yt),new xt(32,128,258,1024,yt),new xt(32,258,258,4096,yt)];function At(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=ot,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),dt(this.dyn_ltree),dt(this.dyn_dtree),dt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),dt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),dt(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Et=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||42!==e.status&&57!==e.status&&69!==e.status&&73!==e.status&&91!==e.status&&103!==e.status&&113!==e.status&&666!==e.status?1:0},Rt=t=>{if(Et(t))return lt(t,Q);t.total_in=t.total_out=0,t.data_type=rt;const e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=2===e.wrap?57:e.wrap?42:113,t.adler=2===e.wrap?0:1,e.last_flush=-2,C(e),q},Zt=t=>{const e=Rt(t);var a;return e===q&&((a=t.state).window_size=2*a.w_size,dt(a.head),a.max_lazy_match=zt[a.level].max_lazy,a.good_match=zt[a.level].good_length,a.nice_match=zt[a.level].nice_length,a.max_chain_length=zt[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=2,a.match_available=0,a.ins_h=0),e},Ut=(t,e,a,i,n,s)=>{if(!t)return Q;let r=1;if(e===tt&&(e=6),i<0?(r=0,i=-i):i>15&&(r=2,i-=16),n<1||n>9||a!==ot||i<8||i>15||e<0||e>9||s<0||s>nt||8===i&&1!==r)return lt(t,Q);8===i&&(i=9);const o=new At;return t.state=o,o.strm=t,o.status=42,o.wrap=r,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+3-1)/3),o.window=new Uint8Array(2*o.w_size),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=3*(o.lit_bufsize-1),o.level=e,o.strategy=s,o.method=a,Zt(t)};var St={deflateInit:(t,e)=>Ut(t,e,ot,15,8,st),deflateInit2:Ut,deflateReset:Zt,deflateResetKeep:Rt,deflateSetHeader:(t,e)=>Et(t)||2!==t.state.wrap?Q:(t.state.gzhead=e,q),deflate:(t,e)=>{if(Et(t)||e>W||e<0)return t?lt(t,Q):Q;const a=t.state;if(!t.output||0!==t.avail_in&&!t.input||666===a.status&&e!==X)return lt(t,0===t.avail_out?$:Q);const i=a.last_flush;if(a.last_flush=e,0!==a.pending){if(ct(t),0===t.avail_out)return a.last_flush=-1,q}else if(0===t.avail_in&&ht(e)<=ht(i)&&e!==X)return lt(t,$);if(666===a.status&&0!==t.avail_in)return lt(t,$);if(42===a.status&&0===a.wrap&&(a.status=113),42===a.status){let e=ot+(a.w_bits-8<<4)<<8,i=-1;if(i=a.strategy>=at||a.level<2?0:a.level<6?1:6===a.level?2:3,e|=i<<6,0!==a.strstart&&(e|=32),e+=31-e%31,mt(a,e),0!==a.strstart&&(mt(a,t.adler>>>16),mt(a,65535&t.adler)),t.adler=1,a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(57===a.status)if(t.adler=0,wt(a,31),wt(a,139),wt(a,8),a.gzhead)wt(a,(a.gzhead.text?1:0)+(a.gzhead.hcrc?2:0)+(a.gzhead.extra?4:0)+(a.gzhead.name?8:0)+(a.gzhead.comment?16:0)),wt(a,255&a.gzhead.time),wt(a,a.gzhead.time>>8&255),wt(a,a.gzhead.time>>16&255),wt(a,a.gzhead.time>>24&255),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,255&a.gzhead.os),a.gzhead.extra&&a.gzhead.extra.length&&(wt(a,255&a.gzhead.extra.length),wt(a,a.gzhead.extra.length>>8&255)),a.gzhead.hcrc&&(t.adler=N(t.adler,a.pending_buf,a.pending,0)),a.gzindex=0,a.status=69;else if(wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,3),a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q;if(69===a.status){if(a.gzhead.extra){let e=a.pending,i=(65535&a.gzhead.extra.length)-a.gzindex;for(;a.pending+i>a.pending_buf_size;){let n=a.pending_buf_size-a.pending;if(a.pending_buf.set(a.gzhead.extra.subarray(a.gzindex,a.gzindex+n),a.pending),a.pending=a.pending_buf_size,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex+=n,ct(t),0!==a.pending)return a.last_flush=-1,q;e=0,i-=n}let n=new Uint8Array(a.gzhead.extra);a.pending_buf.set(n.subarray(a.gzindex,a.gzindex+i),a.pending),a.pending+=i,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex=0}a.status=73}if(73===a.status){if(a.gzhead.name){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.name.length?255&a.gzhead.name.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),a.gzindex=0}a.status=91}if(91===a.status){if(a.gzhead.comment){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.comment.length?255&a.gzhead.comment.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i))}a.status=103}if(103===a.status){if(a.gzhead.hcrc){if(a.pending+2>a.pending_buf_size&&(ct(t),0!==a.pending))return a.last_flush=-1,q;wt(a,255&t.adler),wt(a,t.adler>>8&255),t.adler=0}if(a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(0!==t.avail_in||0!==a.lookahead||e!==P&&666!==a.status){let i=0===a.level?kt(a,e):a.strategy===at?((t,e)=>{let a;for(;;){if(0===t.lookahead&&(pt(t),0===t.lookahead)){if(e===P)return 1;break}if(t.match_length=0,a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):a.strategy===it?((t,e)=>{let a,i,n,s;const r=t.window;for(;;){if(t.lookahead<=258){if(pt(t),t.lookahead<=258&&e===P)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=t.strstart-1,i=r[n],i===r[++n]&&i===r[++n]&&i===r[++n])){s=t.strstart+258;do{}while(i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&n<s);t.match_length=258-(s-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=j(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):zt[a.level].func(a,e);if(3!==i&&4!==i||(a.status=666),1===i||3===i)return 0===t.avail_out&&(a.last_flush=-1),q;if(2===i&&(e===Y?K(a):e!==W&&(H(a,0,0,!1),e===G&&(dt(a.head),0===a.lookahead&&(a.strstart=0,a.block_start=0,a.insert=0))),ct(t),0===t.avail_out))return a.last_flush=-1,q}return e!==X?q:a.wrap<=0?J:(2===a.wrap?(wt(a,255&t.adler),wt(a,t.adler>>8&255),wt(a,t.adler>>16&255),wt(a,t.adler>>24&255),wt(a,255&t.total_in),wt(a,t.total_in>>8&255),wt(a,t.total_in>>16&255),wt(a,t.total_in>>24&255)):(mt(a,t.adler>>>16),mt(a,65535&t.adler)),ct(t),a.wrap>0&&(a.wrap=-a.wrap),0!==a.pending?q:J)},deflateEnd:t=>{if(Et(t))return Q;const e=t.state.status;return t.state=null,113===e?lt(t,V):q},deflateSetDictionary:(t,e)=>{let a=e.length;if(Et(t))return Q;const i=t.state,n=i.wrap;if(2===n||1===n&&42!==i.status||i.lookahead)return Q;if(1===n&&(t.adler=F(t.adler,e,a,0)),i.wrap=0,a>=i.w_size){0===n&&(dt(i.head),i.strstart=0,i.block_start=0,i.insert=0);let t=new Uint8Array(i.w_size);t.set(e.subarray(a-i.w_size,a),0),e=t,a=i.w_size}const s=t.avail_in,r=t.next_in,o=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,pt(i);i.lookahead>=3;){let t=i.strstart,e=i.lookahead-2;do{i.ins_h=ft(i,i.ins_h,i.window[t+3-1]),i.prev[t&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=t,t++}while(--e);i.strstart=t,i.lookahead=2,pt(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=2,i.match_available=0,t.next_in=r,t.input=o,t.avail_in=s,i.wrap=n,q},deflateInfo:"pako deflate (from Nodeca project)"};const Dt=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var Tt=function(t){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const a=e.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(const e in a)Dt(a,e)&&(t[e]=a[e])}}return t},Ot=t=>{let e=0;for(let a=0,i=t.length;a<i;a++)e+=t[a].length;const a=new Uint8Array(e);for(let e=0,i=0,n=t.length;e<n;e++){let n=t[e];a.set(n,i),i+=n.length}return a};let Ft=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){Ft=!1}const Lt=new Uint8Array(256);for(let t=0;t<256;t++)Lt[t]=t>=252?6:t>=248?5:t>=240?4:t>=224?3:t>=192?2:1;Lt[254]=Lt[254]=1;var Nt=t=>{if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);let e,a,i,n,s,r=t.length,o=0;for(n=0;n<r;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),o+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(o),s=0,n=0;s<o;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),a<128?e[s++]=a:a<2048?(e[s++]=192|a>>>6,e[s++]=128|63&a):a<65536?(e[s++]=224|a>>>12,e[s++]=128|a>>>6&63,e[s++]=128|63&a):(e[s++]=240|a>>>18,e[s++]=128|a>>>12&63,e[s++]=128|a>>>6&63,e[s++]=128|63&a);return e},It=(t,e)=>{const a=e||t.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(t.subarray(0,e));let i,n;const s=new Array(2*a);for(n=0,i=0;i<a;){let e=t[i++];if(e<128){s[n++]=e;continue}let r=Lt[e];if(r>4)s[n++]=65533,i+=r-1;else{for(e&=2===r?31:3===r?15:7;r>1&&i<a;)e=e<<6|63&t[i++],r--;r>1?s[n++]=65533:e<65536?s[n++]=e:(e-=65536,s[n++]=55296|e>>10&1023,s[n++]=56320|1023&e)}}return((t,e)=>{if(e<65534&&t.subarray&&Ft)return String.fromCharCode.apply(null,t.length===e?t:t.subarray(0,e));let a="";for(let i=0;i<e;i++)a+=String.fromCharCode(t[i]);return a})(s,n)},Bt=(t,e)=>{(e=e||t.length)>t.length&&(e=t.length);let a=e-1;for(;a>=0&&128==(192&t[a]);)a--;return a<0||0===a?e:a+Lt[t[a]]>e?a:e};var Ct=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0};const Ht=Object.prototype.toString,{Z_NO_FLUSH:Mt,Z_SYNC_FLUSH:jt,Z_FULL_FLUSH:Kt,Z_FINISH:Pt,Z_OK:Yt,Z_STREAM_END:Gt,Z_DEFAULT_COMPRESSION:Xt,Z_DEFAULT_STRATEGY:Wt,Z_DEFLATED:qt}=B;function Jt(t){this.options=Tt({level:Xt,method:qt,chunkSize:16384,windowBits:15,memLevel:8,strategy:Wt},t||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=St.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==Yt)throw new Error(I[a]);if(e.header&&St.deflateSetHeader(this.strm,e.header),e.dictionary){let t;if(t="string"==typeof e.dictionary?Nt(e.dictionary):"[object ArrayBuffer]"===Ht.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,a=St.deflateSetDictionary(this.strm,t),a!==Yt)throw new Error(I[a]);this._dict_set=!0}}function Qt(t,e){const a=new Jt(e);if(a.push(t,!0),a.err)throw a.msg||I[a.err];return a.result}Jt.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize;let n,s;if(this.ended)return!1;for(s=e===~~e?e:!0===e?Pt:Mt,"string"==typeof t?a.input=Nt(t):"[object ArrayBuffer]"===Ht.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;)if(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),(s===jt||s===Kt)&&a.avail_out<=6)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else{if(n=St.deflate(a,s),n===Gt)return a.next_out>0&&this.onData(a.output.subarray(0,a.next_out)),n=St.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===Yt;if(0!==a.avail_out){if(s>0&&a.next_out>0)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else if(0===a.avail_in)break}else this.onData(a.output)}return!0},Jt.prototype.onData=function(t){this.chunks.push(t)},Jt.prototype.onEnd=function(t){t===Yt&&(this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var Vt={Deflate:Jt,deflate:Qt,deflateRaw:function(t,e){return(e=e||{}).raw=!0,Qt(t,e)},gzip:function(t,e){return(e=e||{}).gzip=!0,Qt(t,e)},constants:B};var $t=function(t,e){let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z,A;const E=t.state;a=t.next_in,z=t.input,i=a+(t.avail_in-5),n=t.next_out,A=t.output,s=n-(e-t.avail_out),r=n+(t.avail_out-257),o=E.dmax,l=E.wsize,h=E.whave,d=E.wnext,_=E.window,f=E.hold,c=E.bits,u=E.lencode,w=E.distcode,m=(1<<E.lenbits)-1,b=(1<<E.distbits)-1;t:do{c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=u[f&m];e:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,0===p)A[n++]=65535&g;else{if(!(16&p)){if(0==(64&p)){g=u[(65535&g)+(f&(1<<p)-1)];continue e}if(32&p){E.mode=16191;break t}t.msg="invalid literal/length code",E.mode=16209;break t}k=65535&g,p&=15,p&&(c<p&&(f+=z[a++]<<c,c+=8),k+=f&(1<<p)-1,f>>>=p,c-=p),c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=w[f&b];a:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,!(16&p)){if(0==(64&p)){g=w[(65535&g)+(f&(1<<p)-1)];continue a}t.msg="invalid distance code",E.mode=16209;break t}if(v=65535&g,p&=15,c<p&&(f+=z[a++]<<c,c+=8,c<p&&(f+=z[a++]<<c,c+=8)),v+=f&(1<<p)-1,v>o){t.msg="invalid distance too far back",E.mode=16209;break t}if(f>>>=p,c-=p,p=n-s,v>p){if(p=v-p,p>h&&E.sane){t.msg="invalid distance too far back",E.mode=16209;break t}if(y=0,x=_,0===d){if(y+=l-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}else if(d<p){if(y+=l+d-p,p-=d,p<k){k-=p;do{A[n++]=_[y++]}while(--p);if(y=0,d<k){p=d,k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}}else if(y+=d-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}for(;k>2;)A[n++]=x[y++],A[n++]=x[y++],A[n++]=x[y++],k-=3;k&&(A[n++]=x[y++],k>1&&(A[n++]=x[y++]))}else{y=n-v;do{A[n++]=A[y++],A[n++]=A[y++],A[n++]=A[y++],k-=3}while(k>2);k&&(A[n++]=A[y++],k>1&&(A[n++]=A[y++]))}break}}break}}while(a<i&&n<r);k=c>>3,a-=k,c-=k<<3,f&=(1<<c)-1,t.next_in=a,t.next_out=n,t.avail_in=a<i?i-a+5:5-(a-i),t.avail_out=n<r?r-n+257:257-(n-r),E.hold=f,E.bits=c};const te=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),ee=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),ae=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),ie=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var ne=(t,e,a,i,n,s,r,o)=>{const l=o.bits;let h,d,_,f,c,u,w=0,m=0,b=0,g=0,p=0,k=0,v=0,y=0,x=0,z=0,A=null;const E=new Uint16Array(16),R=new Uint16Array(16);let Z,U,S,D=null;for(w=0;w<=15;w++)E[w]=0;for(m=0;m<i;m++)E[e[a+m]]++;for(p=l,g=15;g>=1&&0===E[g];g--);if(p>g&&(p=g),0===g)return n[s++]=20971520,n[s++]=20971520,o.bits=1,0;for(b=1;b<g&&0===E[b];b++);for(p<b&&(p=b),y=1,w=1;w<=15;w++)if(y<<=1,y-=E[w],y<0)return-1;if(y>0&&(0===t||1!==g))return-1;for(R[1]=0,w=1;w<15;w++)R[w+1]=R[w]+E[w];for(m=0;m<i;m++)0!==e[a+m]&&(r[R[e[a+m]]++]=m);if(0===t?(A=D=r,u=20):1===t?(A=te,D=ee,u=257):(A=ae,D=ie,u=0),z=0,m=0,w=b,c=s,k=p,v=0,_=-1,x=1<<p,f=x-1,1===t&&x>852||2===t&&x>592)return 1;for(;;){Z=w-v,r[m]+1<u?(U=0,S=r[m]):r[m]>=u?(U=D[r[m]-u],S=A[r[m]-u]):(U=96,S=0),h=1<<w-v,d=1<<k,b=d;do{d-=h,n[c+(z>>v)+d]=Z<<24|U<<16|S|0}while(0!==d);for(h=1<<w-1;z&h;)h>>=1;if(0!==h?(z&=h-1,z+=h):z=0,m++,0==--E[w]){if(w===g)break;w=e[a+r[m]]}if(w>p&&(z&f)!==_){for(0===v&&(v=p),c+=b,k=w-v,y=1<<k;k+v<g&&(y-=E[k+v],!(y<=0));)k++,y<<=1;if(x+=1<<k,1===t&&x>852||2===t&&x>592)return 1;_=z&f,n[_]=p<<24|k<<16|c-s|0}}return 0!==z&&(n[c+z]=w-v<<24|64<<16|0),o.bits=p,0};const{Z_FINISH:se,Z_BLOCK:re,Z_TREES:oe,Z_OK:le,Z_STREAM_END:he,Z_NEED_DICT:de,Z_STREAM_ERROR:_e,Z_DATA_ERROR:fe,Z_MEM_ERROR:ce,Z_BUF_ERROR:ue,Z_DEFLATED:we}=B,me=16209,be=t=>(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24);function ge(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const pe=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||e.mode<16180||e.mode>16211?1:0},ke=t=>{if(pe(t))return _e;const e=t.state;return t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=16180,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(852),e.distcode=e.distdyn=new Int32Array(592),e.sane=1,e.back=-1,le},ve=t=>{if(pe(t))return _e;const e=t.state;return e.wsize=0,e.whave=0,e.wnext=0,ke(t)},ye=(t,e)=>{let a;if(pe(t))return _e;const i=t.state;return e<0?(a=0,e=-e):(a=5+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?_e:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=a,i.wbits=e,ve(t))},xe=(t,e)=>{if(!t)return _e;const a=new ge;t.state=a,a.strm=t,a.window=null,a.mode=16180;const i=ye(t,e);return i!==le&&(t.state=null),i};let ze,Ae,Ee=!0;const Re=t=>{if(Ee){ze=new Int32Array(512),Ae=new Int32Array(32);let e=0;for(;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(ne(1,t.lens,0,288,ze,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;ne(2,t.lens,0,32,Ae,0,t.work,{bits:5}),Ee=!1}t.lencode=ze,t.lenbits=9,t.distcode=Ae,t.distbits=5},Ze=(t,e,a,i)=>{let n;const s=t.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),i>=s.wsize?(s.window.set(e.subarray(a-s.wsize,a),0),s.wnext=0,s.whave=s.wsize):(n=s.wsize-s.wnext,n>i&&(n=i),s.window.set(e.subarray(a-i,a-i+n),s.wnext),(i-=n)?(s.window.set(e.subarray(a-i,a),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=n,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=n))),0};var Ue={inflateReset:ve,inflateReset2:ye,inflateResetKeep:ke,inflateInit:t=>xe(t,15),inflateInit2:xe,inflate:(t,e)=>{let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z=0;const A=new Uint8Array(4);let E,R;const Z=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(pe(t)||!t.output||!t.input&&0!==t.avail_in)return _e;a=t.state,16191===a.mode&&(a.mode=16192),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,_=o,f=l,x=le;t:for(;;)switch(a.mode){case 16180:if(0===a.wrap){a.mode=16192;break}for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(2&a.wrap&&35615===h){0===a.wbits&&(a.wbits=15),a.check=0,A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0),h=0,d=0,a.mode=16181;break}if(a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&h)<<8)+(h>>8))%31){t.msg="incorrect header check",a.mode=me;break}if((15&h)!==we){t.msg="unknown compression method",a.mode=me;break}if(h>>>=4,d-=4,y=8+(15&h),0===a.wbits&&(a.wbits=y),y>15||y>a.wbits){t.msg="invalid window size",a.mode=me;break}a.dmax=1<<a.wbits,a.flags=0,t.adler=a.check=1,a.mode=512&h?16189:16191,h=0,d=0;break;case 16181:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.flags=h,(255&a.flags)!==we){t.msg="unknown compression method",a.mode=me;break}if(57344&a.flags){t.msg="unknown header flags set",a.mode=me;break}a.head&&(a.head.text=h>>8&1),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16182;case 16182:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.time=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,A[2]=h>>>16&255,A[3]=h>>>24&255,a.check=N(a.check,A,4,0)),h=0,d=0,a.mode=16183;case 16183:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.xflags=255&h,a.head.os=h>>8),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16184;case 16184:if(1024&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length=h,a.head&&(a.head.extra_len=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0}else a.head&&(a.head.extra=null);a.mode=16185;case 16185:if(1024&a.flags&&(c=a.length,c>o&&(c=o),c&&(a.head&&(y=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Uint8Array(a.head.extra_len)),a.head.extra.set(i.subarray(s,s+c),y)),512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,a.length-=c),a.length))break t;a.length=0,a.mode=16186;case 16186:if(2048&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.name+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.name=null);a.length=0,a.mode=16187;case 16187:if(4096&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.comment+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.comment=null);a.mode=16188;case 16188:if(512&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(65535&a.check)){t.msg="header crc mismatch",a.mode=me;break}h=0,d=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),t.adler=a.check=0,a.mode=16191;break;case 16189:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}t.adler=a.check=be(h),h=0,d=0,a.mode=16190;case 16190:if(0===a.havedict)return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,de;t.adler=a.check=1,a.mode=16191;case 16191:if(e===re||e===oe)break t;case 16192:if(a.last){h>>>=7&d,d-=7&d,a.mode=16206;break}for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}switch(a.last=1&h,h>>>=1,d-=1,3&h){case 0:a.mode=16193;break;case 1:if(Re(a),a.mode=16199,e===oe){h>>>=2,d-=2;break t}break;case 2:a.mode=16196;break;case 3:t.msg="invalid block type",a.mode=me}h>>>=2,d-=2;break;case 16193:for(h>>>=7&d,d-=7&d;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if((65535&h)!=(h>>>16^65535)){t.msg="invalid stored block lengths",a.mode=me;break}if(a.length=65535&h,h=0,d=0,a.mode=16194,e===oe)break t;case 16194:a.mode=16195;case 16195:if(c=a.length,c){if(c>o&&(c=o),c>l&&(c=l),0===c)break t;n.set(i.subarray(s,s+c),r),o-=c,s+=c,l-=c,r+=c,a.length-=c;break}a.mode=16191;break;case 16196:for(;d<14;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.nlen=257+(31&h),h>>>=5,d-=5,a.ndist=1+(31&h),h>>>=5,d-=5,a.ncode=4+(15&h),h>>>=4,d-=4,a.nlen>286||a.ndist>30){t.msg="too many length or distance symbols",a.mode=me;break}a.have=0,a.mode=16197;case 16197:for(;a.have<a.ncode;){for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.lens[Z[a.have++]]=7&h,h>>>=3,d-=3}for(;a.have<19;)a.lens[Z[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,E={bits:a.lenbits},x=ne(0,a.lens,0,19,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid code lengths set",a.mode=me;break}a.have=0,a.mode=16198;case 16198:for(;a.have<a.nlen+a.ndist;){for(;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(g<16)h>>>=m,d-=m,a.lens[a.have++]=g;else{if(16===g){for(R=m+2;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(h>>>=m,d-=m,0===a.have){t.msg="invalid bit length repeat",a.mode=me;break}y=a.lens[a.have-1],c=3+(3&h),h>>>=2,d-=2}else if(17===g){for(R=m+3;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=3+(7&h),h>>>=3,d-=3}else{for(R=m+7;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=11+(127&h),h>>>=7,d-=7}if(a.have+c>a.nlen+a.ndist){t.msg="invalid bit length repeat",a.mode=me;break}for(;c--;)a.lens[a.have++]=y}}if(a.mode===me)break;if(0===a.lens[256]){t.msg="invalid code -- missing end-of-block",a.mode=me;break}if(a.lenbits=9,E={bits:a.lenbits},x=ne(1,a.lens,0,a.nlen,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid literal/lengths set",a.mode=me;break}if(a.distbits=6,a.distcode=a.distdyn,E={bits:a.distbits},x=ne(2,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,E),a.distbits=E.bits,x){t.msg="invalid distances set",a.mode=me;break}if(a.mode=16199,e===oe)break t;case 16199:a.mode=16200;case 16200:if(o>=6&&l>=258){t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,$t(t,f),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,16191===a.mode&&(a.back=-1);break}for(a.back=0;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(b&&0==(240&b)){for(p=m,k=b,v=g;z=a.lencode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,a.length=g,0===b){a.mode=16205;break}if(32&b){a.back=-1,a.mode=16191;break}if(64&b){t.msg="invalid literal/length code",a.mode=me;break}a.extra=15&b,a.mode=16201;case 16201:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=16202;case 16202:for(;z=a.distcode[h&(1<<a.distbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(0==(240&b)){for(p=m,k=b,v=g;z=a.distcode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,64&b){t.msg="invalid distance code",a.mode=me;break}a.offset=g,a.extra=15&b,a.mode=16203;case 16203:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.offset+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){t.msg="invalid distance too far back",a.mode=me;break}a.mode=16204;case 16204:if(0===l)break t;if(c=f-l,a.offset>c){if(c=a.offset-c,c>a.whave&&a.sane){t.msg="invalid distance too far back",a.mode=me;break}c>a.wnext?(c-=a.wnext,u=a.wsize-c):u=a.wnext-c,c>a.length&&(c=a.length),w=a.window}else w=n,u=r-a.offset,c=a.length;c>l&&(c=l),l-=c,a.length-=c;do{n[r++]=w[u++]}while(--c);0===a.length&&(a.mode=16200);break;case 16205:if(0===l)break t;n[r++]=a.length,l--,a.mode=16200;break;case 16206:if(a.wrap){for(;d<32;){if(0===o)break t;o--,h|=i[s++]<<d,d+=8}if(f-=l,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,r-f):F(a.check,n,f,r-f)),f=l,4&a.wrap&&(a.flags?h:be(h))!==a.check){t.msg="incorrect data check",a.mode=me;break}h=0,d=0}a.mode=16207;case 16207:if(a.wrap&&a.flags){for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(4294967295&a.total)){t.msg="incorrect length check",a.mode=me;break}h=0,d=0}a.mode=16208;case 16208:x=he;break t;case me:x=fe;break t;case 16210:return ce;default:return _e}return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,(a.wsize||f!==t.avail_out&&a.mode<me&&(a.mode<16206||e!==se))&&Ze(t,t.output,t.next_out,f-t.avail_out),_-=t.avail_in,f-=t.avail_out,t.total_in+=_,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,t.next_out-f):F(a.check,n,f,t.next_out-f)),t.data_type=a.bits+(a.last?64:0)+(16191===a.mode?128:0)+(16199===a.mode||16194===a.mode?256:0),(0===_&&0===f||e===se)&&x===le&&(x=ue),x},inflateEnd:t=>{if(pe(t))return _e;let e=t.state;return e.window&&(e.window=null),t.state=null,le},inflateGetHeader:(t,e)=>{if(pe(t))return _e;const a=t.state;return 0==(2&a.wrap)?_e:(a.head=e,e.done=!1,le)},inflateSetDictionary:(t,e)=>{const a=e.length;let i,n,s;return pe(t)?_e:(i=t.state,0!==i.wrap&&16190!==i.mode?_e:16190===i.mode&&(n=1,n=F(n,e,a,0),n!==i.check)?fe:(s=Ze(t,e,a,a),s?(i.mode=16210,ce):(i.havedict=1,le)))},inflateInfo:"pako inflate (from Nodeca project)"};var Se=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1};const De=Object.prototype.toString,{Z_NO_FLUSH:Te,Z_FINISH:Oe,Z_OK:Fe,Z_STREAM_END:Le,Z_NEED_DICT:Ne,Z_STREAM_ERROR:Ie,Z_DATA_ERROR:Be,Z_MEM_ERROR:Ce}=B;function He(t){this.options=Tt({chunkSize:65536,windowBits:15,to:""},t||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=Ue.inflateInit2(this.strm,e.windowBits);if(a!==Fe)throw new Error(I[a]);if(this.header=new Se,Ue.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=Nt(e.dictionary):"[object ArrayBuffer]"===De.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(a=Ue.inflateSetDictionary(this.strm,e.dictionary),a!==Fe)))throw new Error(I[a])}He.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize,n=this.options.dictionary;let s,r,o;if(this.ended)return!1;for(r=e===~~e?e:!0===e?Oe:Te,"[object ArrayBuffer]"===De.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;){for(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),s=Ue.inflate(a,r),s===Ne&&n&&(s=Ue.inflateSetDictionary(a,n),s===Fe?s=Ue.inflate(a,r):s===Be&&(s=Ne));a.avail_in>0&&s===Le&&a.state.wrap>0&&0!==t[a.next_in];)Ue.inflateReset(a),s=Ue.inflate(a,r);switch(s){case Ie:case Be:case Ne:case Ce:return this.onEnd(s),this.ended=!0,!1}if(o=a.avail_out,a.next_out&&(0===a.avail_out||s===Le))if("string"===this.options.to){let t=Bt(a.output,a.next_out),e=a.next_out-t,n=It(a.output,t);a.next_out=e,a.avail_out=i-e,e&&a.output.set(a.output.subarray(t,t+e),0),this.onData(n)}else this.onData(a.output.length===a.next_out?a.output:a.output.subarray(0,a.next_out));if(s!==Fe||0!==o){if(s===Le)return s=Ue.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(0===a.avail_in)break}}return!0},He.prototype.onData=function(t){this.chunks.push(t)},He.prototype.onEnd=function(t){t===Fe&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};const{Deflate:Me,deflate:je,deflateRaw:Ke,gzip:Pe}=Vt;var Ye=Me,Ge=je,Xe=B;const We=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const e=this._hasEvents?",":"";this.deflate.push(e+t,Xe.Z_SYNC_FLUSH),this._hasEvents=!0}finish(){if(this.deflate.push("]",Xe.Z_FINISH),this.deflate.err)throw this.deflate.err;const t=this.deflate.result;return this._init(),t}_init(){this._hasEvents=!1,this.deflate=new Ye,this.deflate.push("[",Xe.Z_NO_FLUSH)}},qe={clear:()=>{We.clear()},addEvent:t=>We.addEvent(t),finish:()=>We.finish(),compress:t=>function(t){return Ge(t)}(t)};addEventListener("message",(function(t){const e=t.data.method,a=t.data.id,i=t.data.arg;if(e in qe&&"function"==typeof qe[e])try{const t=qe[e](i);postMessage({id:a,method:e,success:!0,response:t})}catch(t){postMessage({id:a,method:e,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});`;

  function e(){const e=new Blob([r]);return URL.createObjectURL(e)}

  /**
   * A basic event buffer that does not do any compression.
   * Used as fallback if the compression worker cannot be loaded or is disabled.
   */
  class EventBufferArray  {
    /** All the events that are buffered to be sent. */

     constructor() {
      this.events = [];
    }

    /** @inheritdoc */
     get hasEvents() {
      return this.events.length > 0;
    }

    /** @inheritdoc */
     destroy() {
      this.events = [];
    }

    /** @inheritdoc */
     async addEvent(event, isCheckout) {
      if (isCheckout) {
        this.events = [event];
        return;
      }

      this.events.push(event);
      return;
    }

    /** @inheritdoc */
     finish() {
      return new Promise(resolve => {
        // Make a copy of the events array reference and immediately clear the
        // events member so that we do not lose new events while uploading
        // attachment.
        const eventsRet = this.events;
        this.events = [];
        resolve(JSON.stringify(eventsRet));
      });
    }
  }

  /**
   * Event buffer that uses a web worker to compress events.
   * Exported only for testing.
   */
  class WorkerHandler {

     constructor(worker) {
      this._worker = worker;
      this._id = 0;
    }

    /**
     * Ensure the worker is ready (or not).
     * This will either resolve when the worker is ready, or reject if an error occured.
     */
     ensureReady() {
      // Ensure we only check once
      if (this._ensureReadyPromise) {
        return this._ensureReadyPromise;
      }

      this._ensureReadyPromise = new Promise((resolve, reject) => {
        this._worker.addEventListener(
          'message',
          ({ data }) => {
            if ((data ).success) {
              resolve();
            } else {
              reject();
            }
          },
          { once: true },
        );

        this._worker.addEventListener(
          'error',
          error => {
            reject(error);
          },
          { once: true },
        );
      });

      return this._ensureReadyPromise;
    }

    /**
     * Destroy the worker.
     */
     destroy() {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('[Replay] Destroying compression worker');
      this._worker.terminate();
    }

    /**
     * Post message to worker and wait for response before resolving promise.
     */
     postMessage(method, arg) {
      const id = this._getAndIncrementId();

      return new Promise((resolve, reject) => {
        const listener = ({ data }) => {
          const response = data ;
          if (response.method !== method) {
            return;
          }

          // There can be multiple listeners for a single method, the id ensures
          // that the response matches the caller.
          if (response.id !== id) {
            return;
          }

          // At this point, we'll always want to remove listener regardless of result status
          this._worker.removeEventListener('message', listener);

          if (!response.success) {
            // TODO: Do some error handling, not sure what
            (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.error('[Replay]', response.response);

            reject(new Error('Error in compression worker'));
            return;
          }

          resolve(response.response );
        };

        // Note: we can't use `once` option because it's possible it needs to
        // listen to multiple messages
        this._worker.addEventListener('message', listener);
        this._worker.postMessage({ id, method, arg });
      });
    }

    /** Get the current ID and increment it for the next call. */
     _getAndIncrementId() {
      return this._id++;
    }
  }

  /**
   * Event buffer that uses a web worker to compress events.
   * Exported only for testing.
   */
  class EventBufferCompressionWorker  {
    /** @inheritdoc */

     constructor(worker) {
      this._worker = new WorkerHandler(worker);
      this.hasEvents = false;
    }

    /**
     * Ensure the worker is ready (or not).
     * This will either resolve when the worker is ready, or reject if an error occured.
     */
     ensureReady() {
      return this._worker.ensureReady();
    }

    /**
     * Destroy the event buffer.
     */
     destroy() {
      this._worker.destroy();
    }

    /**
     * Add an event to the event buffer.
     *
     * Returns true if event was successfuly received and processed by worker.
     */
     async addEvent(event, isCheckout) {
      this.hasEvents = true;

      if (isCheckout) {
        // This event is a checkout, make sure worker buffer is cleared before
        // proceeding.
        await this._clear();
      }

      return this._sendEventToWorker(event);
    }

    /**
     * Finish the event buffer and return the compressed data.
     */
     finish() {
      return this._finishRequest();
    }

    /**
     * Send the event to the worker.
     */
     _sendEventToWorker(event) {
      return this._worker.postMessage('addEvent', JSON.stringify(event));
    }

    /**
     * Finish the request and return the compressed data from the worker.
     */
     async _finishRequest() {
      const response = await this._worker.postMessage('finish');

      this.hasEvents = false;

      return response;
    }

    /** Clear any pending events from the worker. */
     _clear() {
      return this._worker.postMessage('clear');
    }
  }

  /**
   * This proxy will try to use the compression worker, and fall back to use the simple buffer if an error occurs there.
   * This can happen e.g. if the worker cannot be loaded.
   * Exported only for testing.
   */
  class EventBufferProxy  {

     constructor(worker) {
      this._fallback = new EventBufferArray();
      this._compression = new EventBufferCompressionWorker(worker);
      this._used = this._fallback;

      this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded();
    }

    /** @inheritDoc */
     get hasEvents() {
      return this._used.hasEvents;
    }

    /** @inheritDoc */
     destroy() {
      this._fallback.destroy();
      this._compression.destroy();
    }

    /**
     * Add an event to the event buffer.
     *
     * Returns true if event was successfully added.
     */
     addEvent(event, isCheckout) {
      return this._used.addEvent(event, isCheckout);
    }

    /** @inheritDoc */
     async finish() {
      // Ensure the worker is loaded, so the sent event is compressed
      await this.ensureWorkerIsLoaded();

      return this._used.finish();
    }

    /** Ensure the worker has loaded. */
     ensureWorkerIsLoaded() {
      return this._ensureWorkerIsLoadedPromise;
    }

    /** Actually check if the worker has been loaded. */
     async _ensureWorkerIsLoaded() {
      try {
        await this._compression.ensureReady();
      } catch (error) {
        // If the worker fails to load, we fall back to the simple buffer.
        // Nothing more to do from our side here
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('[Replay] Failed to load the compression worker, falling back to simple buffer');
        return;
      }

      // Now we need to switch over the array buffer to the compression worker
      await this._switchToCompressionWorker();
    }

    /** Switch the used buffer to the compression worker. */
     async _switchToCompressionWorker() {
      const { events } = this._fallback;

      const addEventPromises = [];
      for (const event of events) {
        addEventPromises.push(this._compression.addEvent(event));
      }

      // We switch over to the new buffer immediately - any further events will be added
      // after the previously buffered ones
      this._used = this._compression;

      // Wait for original events to be re-added before resolving
      try {
        await Promise.all(addEventPromises);
      } catch (error) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.warn('[Replay] Failed to add events when switching buffers.', error);
      }
    }
  }

  /**
   * Create an event buffer for replays.
   */
  function createEventBuffer({ useCompression }) {
    // eslint-disable-next-line no-restricted-globals
    if (useCompression && window.Worker) {
      try {
        const workerUrl = e();

        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('[Replay] Using compression worker');
        const worker = new Worker(workerUrl);
        return new EventBufferProxy(worker);
      } catch (error) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('[Replay] Failed to create compression worker');
        // Fall back to use simple event buffer array
      }
    }

    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('[Replay] Using simple buffer');
    return new EventBufferArray();
  }

  /**
   * Given an initial timestamp and an expiry duration, checks to see if current
   * time should be considered as expired.
   */
  function isExpired(
    initialTime,
    expiry,
    targetTime = +new Date(),
  ) {
    // Always expired if < 0
    if (initialTime === null || expiry === undefined || expiry < 0) {
      return true;
    }

    // Never expires if == 0
    if (expiry === 0) {
      return false;
    }

    return initialTime + expiry <= targetTime;
  }

  /**
   * Checks to see if session is expired
   */
  function isSessionExpired(session, idleTimeout, targetTime = +new Date()) {
    return (
      // First, check that maximum session length has not been exceeded
      isExpired(session.started, MAX_SESSION_LIFE, targetTime) ||
      // check that the idle timeout has not been exceeded (i.e. user has
      // performed an action within the last `idleTimeout` ms)
      isExpired(session.lastActivity, idleTimeout, targetTime)
    );
  }

  /**
   * Save a session to session storage.
   */
  function saveSession(session) {
    const hasSessionStorage = 'sessionStorage' in WINDOW$1;
    if (!hasSessionStorage) {
      return;
    }

    try {
      WINDOW$1.sessionStorage.setItem(REPLAY_SESSION_KEY, JSON.stringify(session));
    } catch (e) {
      // Ignore potential SecurityError exceptions
    }
  }

  /**
   * Given a sample rate, returns true if replay should be sampled.
   *
   * 1.0 = 100% sampling
   * 0.0 = 0% sampling
   */
  function isSampled(sampleRate) {
    if (sampleRate === undefined) {
      return false;
    }

    // Math.random() returns a number in range of 0 to 1 (inclusive of 0, but not 1)
    return Math.random() < sampleRate;
  }

  /**
   * Get a session with defaults & applied sampling.
   */
  function makeSession(session) {
    const now = new Date().getTime();
    const id = session.id || uuid4();
    // Note that this means we cannot set a started/lastActivity of `0`, but this should not be relevant outside of tests.
    const started = session.started || now;
    const lastActivity = session.lastActivity || now;
    const segmentId = session.segmentId || 0;
    const sampled = session.sampled;

    return {
      id,
      started,
      lastActivity,
      segmentId,
      sampled,
    };
  }

  /**
   * Get the sampled status for a session based on sample rates & current sampled status.
   */
  function getSessionSampleType(sessionSampleRate, errorSampleRate) {
    return isSampled(sessionSampleRate) ? 'session' : isSampled(errorSampleRate) ? 'error' : false;
  }

  /**
   * Create a new session, which in its current implementation is a Sentry event
   * that all replays will be saved to as attachments. Currently, we only expect
   * one of these Sentry events per "replay session".
   */
  function createSession({ sessionSampleRate, errorSampleRate, stickySession = false }) {
    const sampled = getSessionSampleType(sessionSampleRate, errorSampleRate);
    const session = makeSession({
      sampled,
    });

    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log(`[Replay] Creating new session: ${session.id}`);

    if (stickySession) {
      saveSession(session);
    }

    return session;
  }

  /**
   * Fetches a session from storage
   */
  function fetchSession() {
    const hasSessionStorage = 'sessionStorage' in WINDOW$1;

    if (!hasSessionStorage) {
      return null;
    }

    try {
      // This can throw if cookies are disabled
      const sessionStringFromStorage = WINDOW$1.sessionStorage.getItem(REPLAY_SESSION_KEY);

      if (!sessionStringFromStorage) {
        return null;
      }

      const sessionObj = JSON.parse(sessionStringFromStorage) ;

      return makeSession(sessionObj);
    } catch (e) {
      return null;
    }
  }

  /**
   * Get or create a session
   */
  function getSession({
    expiry,
    currentSession,
    stickySession,
    sessionSampleRate,
    errorSampleRate,
  }) {
    // If session exists and is passed, use it instead of always hitting session storage
    const session = currentSession || (stickySession && fetchSession());

    if (session) {
      // If there is a session, check if it is valid (e.g. "last activity" time
      // should be within the "session idle time", and "session started" time is
      // within "max session time").
      const isExpired = isSessionExpired(session, expiry);

      if (!isExpired) {
        return { type: 'saved', session };
      } else if (session.sampled === 'error') {
        // Error samples should not be re-created when expired, but instead we stop when the replay is done
        const discardedSession = makeSession({ sampled: false });
        return { type: 'new', session: discardedSession };
      } else {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('[Replay] Session has expired');
      }
      // Otherwise continue to create a new session
    }

    const newSession = createSession({
      stickySession,
      sessionSampleRate,
      errorSampleRate,
    });

    return { type: 'new', session: newSession };
  }

  /**
   * Add an event to the event buffer
   */
  async function addEvent(
    replay,
    event,
    isCheckout,
  ) {
    if (!replay.eventBuffer) {
      // This implies that `_isEnabled` is false
      return null;
    }

    if (replay.isPaused()) {
      // Do not add to event buffer when recording is paused
      return null;
    }

    // TODO: sadness -- we will want to normalize timestamps to be in ms -
    // requires coordination with frontend
    const isMs = event.timestamp > 9999999999;
    const timestampInMs = isMs ? event.timestamp : event.timestamp * 1000;

    // Throw out events that happen more than 5 minutes ago. This can happen if
    // page has been left open and idle for a long period of time and user
    // comes back to trigger a new session. The performance entries rely on
    // `performance.timeOrigin`, which is when the page first opened.
    if (timestampInMs + SESSION_IDLE_DURATION < new Date().getTime()) {
      return null;
    }

    // Only record earliest event if a new session was created, otherwise it
    // shouldn't be relevant
    const earliestEvent = replay.getContext().earliestEvent;
    if (replay.session && replay.session.segmentId === 0 && (!earliestEvent || timestampInMs < earliestEvent)) {
      replay.getContext().earliestEvent = timestampInMs;
    }

    try {
      return await replay.eventBuffer.addEvent(event, isCheckout);
    } catch (error) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.error(error);
      replay.stop('addEvent');

      const client = getCurrentHub().getClient();

      if (client) {
        client.recordDroppedEvent('internal_sdk_error', 'replay');
      }
    }
  }

  /**
   * Create a breadcrumb for a replay.
   */
  function createBreadcrumb(
    breadcrumb,
  ) {
    return {
      timestamp: new Date().getTime() / 1000,
      type: 'default',
      ...breadcrumb,
    };
  }

  /**
   * Add a breadcrumb event to replay.
   */
  function addBreadcrumbEvent(replay, breadcrumb) {
    if (breadcrumb.category === 'sentry.transaction') {
      return;
    }

    if (breadcrumb.category === 'ui.click') {
      replay.triggerUserActivity();
    } else {
      replay.checkAndHandleExpiredSession();
    }

    replay.addUpdate(() => {
      void addEvent(replay, {
        type: EventType.Custom,
        // TODO: We were converting from ms to seconds for breadcrumbs, spans,
        // but maybe we should just keep them as milliseconds
        timestamp: (breadcrumb.timestamp || 0) * 1000,
        data: {
          tag: 'breadcrumb',
          payload: breadcrumb,
        },
      });

      // Do not flush after console log messages
      return breadcrumb.category === 'console';
    });
  }

  const handleDomListener =
    (replay) =>
    (handlerData) => {
      if (!replay.isEnabled()) {
        return;
      }

      const result = handleDom(handlerData);

      if (!result) {
        return;
      }

      addBreadcrumbEvent(replay, result);
    };

  /**
   * An event handler to react to DOM events.
   */
  function handleDom(handlerData) {
    // Taken from https://github.com/getsentry/sentry-javascript/blob/master/packages/browser/src/integrations/breadcrumbs.ts#L112
    let target;
    let targetNode;

    // Accessing event.target can throw (see getsentry/raven-js#838, #768)
    try {
      targetNode = getTargetNode(handlerData);
      target = htmlTreeAsString(targetNode);
    } catch (e) {
      target = '<unknown>';
    }

    if (target.length === 0) {
      return null;
    }

    return createBreadcrumb({
      category: `ui.${handlerData.name}`,
      message: target,
      data: {
        // Not sure why this errors, Node should be correct (Argument of type 'Node' is not assignable to parameter of type 'INode')
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...(targetNode ? { nodeId: record.mirror.getId(targetNode ) } : {}),
      },
    });
  }

  function getTargetNode(handlerData) {
    if (isEventWithTarget(handlerData.event)) {
      return handlerData.event.target;
    }

    return handlerData.event;
  }

  function isEventWithTarget(event) {
    return !!(event ).target;
  }

  /**
   * Create a "span" for each performance entry. The parent transaction is `this.replayEvent`.
   */
  function createPerformanceSpans(
    replay,
    entries,
  ) {
    return entries.map(({ type, start, end, name, data }) =>
      addEvent(replay, {
        type: EventType.Custom,
        timestamp: start,
        data: {
          tag: 'performanceSpan',
          payload: {
            op: type,
            description: name,
            startTimestamp: start,
            endTimestamp: end,
            data,
          },
        },
      }),
    );
  }

  /**
   * Check whether a given request URL should be filtered out. This is so we
   * don't log Sentry ingest requests.
   */
  function shouldFilterRequest(replay, url) {
    // If we enabled the `traceInternals` experiment, we want to trace everything
    if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && replay.getOptions()._experiments.traceInternals) {
      return false;
    }

    return _isSentryRequest(url);
  }

  /**
   * Checks wether a given URL belongs to the configured Sentry DSN.
   */
  function _isSentryRequest(url) {
    const client = getCurrentHub().getClient();
    const dsn = client && client.getDsn();
    return dsn ? url.includes(dsn.host) : false;
  }

  /** only exported for tests */
  function handleFetch(handlerData) {
    if (!handlerData.endTimestamp) {
      return null;
    }

    const { startTimestamp, endTimestamp, fetchData, response } = handlerData;

    return {
      type: 'resource.fetch',
      start: startTimestamp / 1000,
      end: endTimestamp / 1000,
      name: fetchData.url,
      data: {
        method: fetchData.method,
        statusCode: response.status,
      },
    };
  }

  /**
   * Returns a listener to be added to `addInstrumentationHandler('fetch', listener)`.
   */
  function handleFetchSpanListener(replay) {
    return (handlerData) => {
      if (!replay.isEnabled()) {
        return;
      }

      const result = handleFetch(handlerData);

      if (result === null) {
        return;
      }

      if (shouldFilterRequest(replay, result.name)) {
        return;
      }

      replay.addUpdate(() => {
        createPerformanceSpans(replay, [result]);
        // Returning true will cause `addUpdate` to not flush
        // We do not want network requests to cause a flush. This will prevent
        // recurring/polling requests from keeping the replay session alive.
        return true;
      });
    };
  }

  /**
   * Returns true if we think the given event is an error originating inside of rrweb.
   */
  function isRrwebError(event, hint) {
    if (event.type || !event.exception || !event.exception.values || !event.exception.values.length) {
      return false;
    }

    // @ts-ignore this may be set by rrweb when it finds errors
    if (hint.originalException && hint.originalException.__rrweb__) {
      return true;
    }

    // Check if any exception originates from rrweb
    return event.exception.values.some(exception => {
      if (!exception.stacktrace || !exception.stacktrace.frames || !exception.stacktrace.frames.length) {
        return false;
      }

      return exception.stacktrace.frames.some(frame => frame.filename && frame.filename.includes('/rrweb/src/'));
    });
  }

  /**
   * Returns a listener to be added to `addGlobalEventProcessor(listener)`.
   */
  function handleGlobalEventListener(replay) {
    return (event, hint) => {
      // Do not apply replayId to the root event
      if (event.type === REPLAY_EVENT_NAME) {
        // Replays have separate set of breadcrumbs, do not include breadcrumbs
        // from core SDK
        delete event.breadcrumbs;
        return event;
      }

      // Unless `captureExceptions` is enabled, we want to ignore errors coming from rrweb
      // As there can be a bunch of stuff going wrong in internals there, that we don't want to bubble up to users
      if (isRrwebError(event, hint) && !replay.getOptions()._experiments.captureExceptions) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('[Replay] Ignoring error from rrweb internals', event);
        return null;
      }

      // Only tag transactions with replayId if not waiting for an error
      // @ts-ignore private
      if (!event.type || replay.recordingMode === 'session') {
        event.tags = { ...event.tags, replayId: replay.getSessionId() };
      }

      // Collect traceIds in _context regardless of `recordingMode` - if it's true,
      // _context gets cleared on every checkout
      if (event.type === 'transaction' && event.contexts && event.contexts.trace && event.contexts.trace.trace_id) {
        replay.getContext().traceIds.add(event.contexts.trace.trace_id );
        return event;
      }

      // no event type means error
      if (!event.type) {
        replay.getContext().errorIds.add(event.event_id );
      }

      if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && replay.getOptions()._experiments.traceInternals) {
        const exc = getEventExceptionValues(event);
        addInternalBreadcrumb({
          message: `Tagging event (${event.event_id}) - ${event.message} - ${exc.type}: ${exc.value}`,
        });
      }

      // Need to be very careful that this does not cause an infinite loop
      if (
        replay.recordingMode === 'error' &&
        event.exception &&
        event.message !== UNABLE_TO_SEND_REPLAY // ignore this error because otherwise we could loop indefinitely with trying to capture replay and failing
      ) {
        setTimeout(async () => {
          // Allow flush to complete before resuming as a session recording, otherwise
          // the checkout from `startRecording` may be included in the payload.
          // Prefer to keep the error replay as a separate (and smaller) segment
          // than the session replay.
          await replay.flushImmediate();

          if (replay.stopRecording()) {
            // Reset all "capture on error" configuration before
            // starting a new recording
            replay.recordingMode = 'session';
            replay.startRecording();
          }
        });
      }

      return event;
    };
  }

  function addInternalBreadcrumb(arg) {
    const { category, level, message, ...rest } = arg;

    addBreadcrumb({
      category: category || 'console',
      level: level || 'debug',
      message: `[debug]: ${message}`,
      ...rest,
    });
  }

  function getEventExceptionValues(event) {
    return {
      type: 'Unknown',
      value: 'n/a',
      ...(event.exception && event.exception.values && event.exception.values[0]),
    };
  }

  function handleHistory(handlerData) {
    const { from, to } = handlerData;

    const now = new Date().getTime() / 1000;

    return {
      type: 'navigation.push',
      start: now,
      end: now,
      name: to,
      data: {
        previous: from,
      },
    };
  }

  /**
   * Returns a listener to be added to `addInstrumentationHandler('history', listener)`.
   */
  function handleHistorySpanListener(replay) {
    return (handlerData) => {
      if (!replay.isEnabled()) {
        return;
      }

      const result = handleHistory(handlerData);

      if (result === null) {
        return;
      }

      // Need to collect visited URLs
      replay.getContext().urls.push(result.name);
      replay.triggerUserActivity();

      replay.addUpdate(() => {
        createPerformanceSpans(replay, [result]);
        // Returning false to flush
        return false;
      });
    };
  }

  let _LAST_BREADCRUMB = null;

  const handleScopeListener =
    (replay) =>
    (scope) => {
      if (!replay.isEnabled()) {
        return;
      }

      const result = handleScope(scope);

      if (!result) {
        return;
      }

      addBreadcrumbEvent(replay, result);
    };

  /**
   * An event handler to handle scope changes.
   */
  function handleScope(scope) {
    // TODO (v8): Remove this guard. This was put in place because we introduced
    // Scope.getLastBreadcrumb mid-v7 which caused incompatibilities with older SDKs.
    // For now, we'll just return null if the method doesn't exist but we should eventually
    // get rid of this guard.
    const newBreadcrumb = scope.getLastBreadcrumb && scope.getLastBreadcrumb();

    // Listener can be called when breadcrumbs have not changed, so we store the
    // reference to the last crumb and only return a crumb if it has changed
    if (_LAST_BREADCRUMB === newBreadcrumb || !newBreadcrumb) {
      return null;
    }

    _LAST_BREADCRUMB = newBreadcrumb;

    if (
      newBreadcrumb.category &&
      (['fetch', 'xhr', 'sentry.event', 'sentry.transaction'].includes(newBreadcrumb.category) ||
        newBreadcrumb.category.startsWith('ui.'))
    ) {
      return null;
    }

    return createBreadcrumb(newBreadcrumb);
  }

  // From sentry-javascript
  // e.g. https://github.com/getsentry/sentry-javascript/blob/c7fc025bf9fa8c073fdb56351808ce53909fbe45/packages/utils/src/instrument.ts#L180

  function handleXhr(handlerData) {
    if (handlerData.xhr.__sentry_own_request__) {
      // Taken from sentry-javascript
      // Only capture non-sentry requests
      return null;
    }

    if (handlerData.startTimestamp) {
      // TODO: See if this is still needed
      handlerData.xhr.__sentry_xhr__ = handlerData.xhr.__sentry_xhr__ || {};
      handlerData.xhr.__sentry_xhr__.startTimestamp = handlerData.startTimestamp;
    }

    if (!handlerData.endTimestamp) {
      return null;
    }

    const { method, url, status_code: statusCode } = handlerData.xhr.__sentry_xhr__ || {};

    if (url === undefined) {
      return null;
    }

    const timestamp = handlerData.xhr.__sentry_xhr__
      ? handlerData.xhr.__sentry_xhr__.startTimestamp || 0
      : handlerData.endTimestamp;

    return {
      type: 'resource.xhr',
      name: url,
      start: timestamp / 1000,
      end: handlerData.endTimestamp / 1000,
      data: {
        method,
        statusCode,
      },
    };
  }

  /**
   * Returns a listener to be added to `addInstrumentationHandler('xhr', listener)`.
   */
  function handleXhrSpanListener(replay) {
    return (handlerData) => {
      if (!replay.isEnabled()) {
        return;
      }

      const result = handleXhr(handlerData);

      if (result === null) {
        return;
      }

      if (shouldFilterRequest(replay, result.name)) {
        return;
      }

      replay.addUpdate(() => {
        createPerformanceSpans(replay, [result]);
        // Returning true will cause `addUpdate` to not flush
        // We do not want network requests to cause a flush. This will prevent
        // recurring/polling requests from keeping the replay session alive.
        return true;
      });
    };
  }

  /**
   * Add global listeners that cannot be removed.
   */
  function addGlobalListeners(replay) {
    // Listeners from core SDK //
    const scope = getCurrentHub().getScope();
    if (scope) {
      scope.addScopeListener(handleScopeListener(replay));
    }
    addInstrumentationHandler('dom', handleDomListener(replay));
    addInstrumentationHandler('fetch', handleFetchSpanListener(replay));
    addInstrumentationHandler('xhr', handleXhrSpanListener(replay));
    addInstrumentationHandler('history', handleHistorySpanListener(replay));

    // Tag all (non replay) events that get sent to Sentry with the current
    // replay ID so that we can reference them later in the UI
    addGlobalEventProcessor(handleGlobalEventListener(replay));
  }

  /**
   * Create a "span" for the total amount of memory being used by JS objects
   * (including v8 internal objects).
   */
  async function addMemoryEntry(replay) {
    // window.performance.memory is a non-standard API and doesn't work on all browsers, so we try-catch this
    try {
      return Promise.all(
        createPerformanceSpans(replay, [
          // @ts-ignore memory doesn't exist on type Performance as the API is non-standard (we check that it exists above)
          createMemoryEntry(WINDOW$1.performance.memory),
        ]),
      );
    } catch (error) {
      // Do nothing
      return [];
    }
  }

  function createMemoryEntry(memoryEntry) {
    const { jsHeapSizeLimit, totalJSHeapSize, usedJSHeapSize } = memoryEntry;
    // we don't want to use `getAbsoluteTime` because it adds the event time to the
    // time origin, so we get the current timestamp instead
    const time = new Date().getTime() / 1000;
    return {
      type: 'memory',
      name: 'memory',
      start: time,
      end: time,
      data: {
        memory: {
          jsHeapSizeLimit,
          totalJSHeapSize,
          usedJSHeapSize,
        },
      },
    };
  }

  // Map entryType -> function to normalize data for event
  // @ts-ignore TODO: entry type does not fit the create* functions entry type
  const ENTRY_TYPES = {
    // @ts-ignore TODO: entry type does not fit the create* functions entry type
    resource: createResourceEntry,
    paint: createPaintEntry,
    // @ts-ignore TODO: entry type does not fit the create* functions entry type
    navigation: createNavigationEntry,
    // @ts-ignore TODO: entry type does not fit the create* functions entry type
    ['largest-contentful-paint']: createLargestContentfulPaint,
  };

  /**
   * Create replay performance entries from the browser performance entries.
   */
  function createPerformanceEntries(entries) {
    return entries.map(createPerformanceEntry).filter(Boolean) ;
  }

  function createPerformanceEntry(entry) {
    if (ENTRY_TYPES[entry.entryType] === undefined) {
      return null;
    }

    return ENTRY_TYPES[entry.entryType](entry);
  }

  function getAbsoluteTime(time) {
    // browserPerformanceTimeOrigin can be undefined if `performance` or
    // `performance.now` doesn't exist, but this is already checked by this integration
    return ((browserPerformanceTimeOrigin || WINDOW$1.performance.timeOrigin) + time) / 1000;
  }

  // TODO: type definition!
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function createPaintEntry(entry) {
    const { duration, entryType, name, startTime } = entry;

    const start = getAbsoluteTime(startTime);
    return {
      type: entryType,
      name,
      start,
      end: start + duration,
    };
  }

  // TODO: type definition!
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function createNavigationEntry(entry) {
    // TODO: There looks to be some more interesting bits in here (domComplete, domContentLoaded)
    const { entryType, name, duration, domComplete, startTime, transferSize, type } = entry;

    // Ignore entries with no duration, they do not seem to be useful and cause dupes
    if (duration === 0) {
      return null;
    }

    return {
      type: `${entryType}.${type}`,
      start: getAbsoluteTime(startTime),
      end: getAbsoluteTime(domComplete),
      name,
      data: {
        size: transferSize,
        duration,
      },
    };
  }

  // TODO: type definition!
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function createResourceEntry(entry) {
    const { entryType, initiatorType, name, responseEnd, startTime, encodedBodySize, transferSize } = entry;

    // Core SDK handles these
    if (['fetch', 'xmlhttprequest'].includes(initiatorType)) {
      return null;
    }

    return {
      type: `${entryType}.${initiatorType}`,
      start: getAbsoluteTime(startTime),
      end: getAbsoluteTime(responseEnd),
      name,
      data: {
        size: transferSize,
        encodedBodySize,
      },
    };
  }

  // TODO: type definition!
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function createLargestContentfulPaint(entry) {
    const { entryType, startTime, size } = entry;

    let startTimeOrNavigationActivation = 0;

    if (WINDOW$1.performance) {
      const navEntry = WINDOW$1.performance.getEntriesByType('navigation')[0]

  ;

      // See https://github.com/GoogleChrome/web-vitals/blob/9f11c4c6578fb4c5ee6fa4e32b9d1d756475f135/src/lib/getActivationStart.ts#L21
      startTimeOrNavigationActivation = (navEntry && navEntry.activationStart) || 0;
    }

    const start = getAbsoluteTime(startTimeOrNavigationActivation);
    const value = Math.max(startTime - startTimeOrNavigationActivation, 0);

    return {
      type: entryType,
      name: entryType,
      start,
      end: start + value,
      data: {
        value,
        size,
        // Not sure why this errors, Node should be correct (Argument of type 'Node' is not assignable to parameter of type 'INode')
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        nodeId: record.mirror.getId(entry.element ),
      },
    };
  }

  /**
   * Heavily simplified debounce function based on lodash.debounce.
   *
   * This function takes a callback function (@param fun) and delays its invocation
   * by @param wait milliseconds. Optionally, a maxWait can be specified in @param options,
   * which ensures that the callback is invoked at least once after the specified max. wait time.
   *
   * @param func the function whose invocation is to be debounced
   * @param wait the minimum time until the function is invoked after it was called once
   * @param options the options object, which can contain the `maxWait` property
   *
   * @returns the debounced version of the function, which needs to be called at least once to start the
   *          debouncing process. Subsequent calls will reset the debouncing timer and, in case @paramfunc
   *          was already invoked in the meantime, return @param func's return value.
   *          The debounced function has two additional properties:
   *          - `flush`: Invokes the debounced function immediately and returns its return value
   *          - `cancel`: Cancels the debouncing process and resets the debouncing timer
   */
  function debounce(func, wait, options) {
    let callbackReturnValue;

    let timerId;
    let maxTimerId;

    const maxWait = options && options.maxWait ? Math.max(options.maxWait, wait) : 0;

    function invokeFunc() {
      cancelTimers();
      callbackReturnValue = func();
      return callbackReturnValue;
    }

    function cancelTimers() {
      timerId !== undefined && clearTimeout(timerId);
      maxTimerId !== undefined && clearTimeout(maxTimerId);
      timerId = maxTimerId = undefined;
    }

    function flush() {
      if (timerId !== undefined || maxTimerId !== undefined) {
        return invokeFunc();
      }
      return callbackReturnValue;
    }

    function debounced() {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(invokeFunc, wait);

      if (maxWait && maxTimerId === undefined) {
        maxTimerId = setTimeout(invokeFunc, maxWait);
      }

      return callbackReturnValue;
    }

    debounced.cancel = cancelTimers;
    debounced.flush = flush;
    return debounced;
  }

  let _originalRecordDroppedEvent;

  /**
   * Overwrite the `recordDroppedEvent` method on the client, so we can find out which events were dropped.
   * */
  function overwriteRecordDroppedEvent(errorIds) {
    const client = getCurrentHub().getClient();

    if (!client) {
      return;
    }

    const _originalCallback = client.recordDroppedEvent.bind(client);

    const recordDroppedEvent = (
      reason,
      category,
      event,
    ) => {
      if (event && !event.type && event.event_id) {
        errorIds.delete(event.event_id);
      }

      return _originalCallback(reason, category, event);
    };

    client.recordDroppedEvent = recordDroppedEvent;
    _originalRecordDroppedEvent = _originalCallback;
  }

  /**
   * Restore the original method.
   * */
  function restoreRecordDroppedEvent() {
    const client = getCurrentHub().getClient();

    if (!client || !_originalRecordDroppedEvent) {
      return;
    }

    client.recordDroppedEvent = _originalRecordDroppedEvent;
  }

  /**
   * Create a replay envelope ready to be sent.
   * This includes both the replay event, as well as the recording data.
   */
  function createReplayEnvelope(
    replayEvent,
    recordingData,
    dsn,
    tunnel,
  ) {
    return createEnvelope(
      createEventEnvelopeHeaders(replayEvent, getSdkMetadataForEnvelopeHeader(replayEvent), tunnel, dsn),
      [
        [{ type: 'replay_event' }, replayEvent],
        [
          {
            type: 'replay_recording',
            // If string then we need to encode to UTF8, otherwise will have
            // wrong size. TextEncoder has similar browser support to
            // MutationObserver, although it does not accept IE11.
            length:
              typeof recordingData === 'string' ? new TextEncoder().encode(recordingData).length : recordingData.length,
          },
          recordingData,
        ],
      ],
    );
  }

  /**
   * Prepare the recording data ready to be sent.
   */
  function prepareRecordingData({
    recordingData,
    headers,
  }

  ) {
    let payloadWithSequence;

    // XXX: newline is needed to separate sequence id from events
    const replayHeaders = `${JSON.stringify(headers)}
`;

    if (typeof recordingData === 'string') {
      payloadWithSequence = `${replayHeaders}${recordingData}`;
    } else {
      const enc = new TextEncoder();
      // XXX: newline is needed to separate sequence id from events
      const sequence = enc.encode(replayHeaders);
      // Merge the two Uint8Arrays
      payloadWithSequence = new Uint8Array(sequence.length + recordingData.length);
      payloadWithSequence.set(sequence);
      payloadWithSequence.set(recordingData, sequence.length);
    }

    return payloadWithSequence;
  }

  /**
   * Prepare a replay event & enrich it with the SDK metadata.
   */
  async function prepareReplayEvent({
    client,
    scope,
    replayId: event_id,
    event,
  }

  ) {
    const integrations =
      typeof client._integrations === 'object' && client._integrations !== null && !Array.isArray(client._integrations)
        ? Object.keys(client._integrations)
        : undefined;
    const preparedEvent = (await prepareEvent(
      client.getOptions(),
      event,
      { event_id, integrations },
      scope,
    )) ;

    // If e.g. a global event processor returned null
    if (!preparedEvent) {
      return null;
    }

    // This normally happens in browser client "_prepareEvent"
    // but since we do not use this private method from the client, but rather the plain import
    // we need to do this manually.
    preparedEvent.platform = preparedEvent.platform || 'javascript';

    // extract the SDK name because `client._prepareEvent` doesn't add it to the event
    const metadata = client.getSdkMetadata && client.getSdkMetadata();
    const { name, version } = (metadata && metadata.sdk) || {};

    preparedEvent.sdk = {
      ...preparedEvent.sdk,
      name: name || 'sentry.javascript.unknown',
      version: version || '0.0.0',
    };

    return preparedEvent;
  }

  /**
   * Send replay attachment using `fetch()`
   */
  async function sendReplayRequest({
    recordingData,
    replayId,
    segmentId: segment_id,
    includeReplayStartTimestamp,
    eventContext,
    timestamp,
    session,
    options,
  }) {
    const preparedRecordingData = prepareRecordingData({
      recordingData,
      headers: {
        segment_id,
      },
    });

    const { urls, errorIds, traceIds, initialTimestamp } = eventContext;

    const hub = getCurrentHub();
    const client = hub.getClient();
    const scope = hub.getScope();
    const transport = client && client.getTransport();
    const dsn = client && client.getDsn();

    if (!client || !scope || !transport || !dsn || !session.sampled) {
      return;
    }

    const baseEvent = {
      // @ts-ignore private api
      type: REPLAY_EVENT_NAME,
      ...(includeReplayStartTimestamp ? { replay_start_timestamp: initialTimestamp / 1000 } : {}),
      timestamp: timestamp / 1000,
      error_ids: errorIds,
      trace_ids: traceIds,
      urls,
      replay_id: replayId,
      segment_id,
      replay_type: session.sampled,
    };

    const replayEvent = await prepareReplayEvent({ scope, client, replayId, event: baseEvent });

    if (!replayEvent) {
      // Taken from baseclient's `_processEvent` method, where this is handled for errors/transactions
      client.recordDroppedEvent('event_processor', 'replay', baseEvent);
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('An event processor returned `null`, will not send event.');
      return;
    }

    replayEvent.contexts = {
      ...replayEvent.contexts,
      replay: {
        ...(replayEvent.contexts && replayEvent.contexts.replay),
        session_sample_rate: options.sessionSampleRate,
        error_sample_rate: options.errorSampleRate,
      },
    };

    /*
    For reference, the fully built event looks something like this:
    {
        "type": "replay_event",
        "timestamp": 1670837008.634,
        "error_ids": [
            "errorId"
        ],
        "trace_ids": [
            "traceId"
        ],
        "urls": [
            "https://example.com"
        ],
        "replay_id": "eventId",
        "segment_id": 3,
        "replay_type": "error",
        "platform": "javascript",
        "event_id": "eventId",
        "environment": "production",
        "sdk": {
            "integrations": [
                "BrowserTracing",
                "Replay"
            ],
            "name": "sentry.javascript.browser",
            "version": "7.25.0"
        },
        "sdkProcessingMetadata": {},
        "contexts": {
          "replay": {
            "session_sample_rate": 1,
            "error_sample_rate": 0,
          },
        },
    }
    */

    const envelope = createReplayEnvelope(replayEvent, preparedRecordingData, dsn, client.getOptions().tunnel);

    let response;

    try {
      response = await transport.send(envelope);
    } catch (e) {
      throw new Error(UNABLE_TO_SEND_REPLAY);
    }

    // TODO (v8): we can remove this guard once transport.send's type signature doesn't include void anymore
    if (!response) {
      return response;
    }

    // If the status code is invalid, we want to immediately stop & not retry
    if (typeof response.statusCode === 'number' && (response.statusCode < 200 || response.statusCode >= 300)) {
      throw new TransportStatusCodeError(response.statusCode);
    }

    return response;
  }

  /**
   * This error indicates that the transport returned an invalid status code.
   */
  class TransportStatusCodeError extends Error {
     constructor(statusCode) {
      super(`Transport returned status code ${statusCode}`);
    }
  }

  /**
   * Finalize and send the current replay event to Sentry
   */
  async function sendReplay(
    replayData,
    retryConfig = {
      count: 0,
      interval: RETRY_BASE_INTERVAL,
    },
  ) {
    const { recordingData, options } = replayData;

    // short circuit if there's no events to upload (this shouldn't happen as _runFlush makes this check)
    if (!recordingData.length) {
      return;
    }

    try {
      await sendReplayRequest(replayData);
      return true;
    } catch (err) {
      if (err instanceof TransportStatusCodeError) {
        throw err;
      }

      // Capture error for every failed replay
      setContext('Replays', {
        _retryCount: retryConfig.count,
      });

      if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && options._experiments && options._experiments.captureExceptions) {
        captureException(err);
      }

      // If an error happened here, it's likely that uploading the attachment
      // failed, we'll can retry with the same events payload
      if (retryConfig.count >= RETRY_MAX_COUNT) {
        throw new Error(`${UNABLE_TO_SEND_REPLAY} - max retries exceeded`);
      }

      // will retry in intervals of 5, 10, 30
      retryConfig.interval *= ++retryConfig.count;

      return await new Promise((resolve, reject) => {
        setTimeout(async () => {
          try {
            await sendReplay(replayData, retryConfig);
            resolve(true);
          } catch (err) {
            reject(err);
          }
        }, retryConfig.interval);
      });
    }
  }

  /* eslint-disable max-lines */ // TODO: We might want to split this file up

  /**
   * The main replay container class, which holds all the state and methods for recording and sending replays.
   */
  class ReplayContainer  {
     __init() {this.eventBuffer = null;}

    /**
     * List of PerformanceEntry from PerformanceObserver
     */
     __init2() {this.performanceEvents = [];}

    /**
     * Recording can happen in one of two modes:
     * * session: Record the whole session, sending it continuously
     * * error: Always keep the last 60s of recording, and when an error occurs, send it immediately
     */
     __init3() {this.recordingMode = 'session';}

    /**
     * Options to pass to `rrweb.record()`
     */

     __init4() {this._performanceObserver = null;}

     __init5() {this._flushLock = null;}

    /**
     * Timestamp of the last user activity. This lives across sessions.
     */
     __init6() {this._lastActivity = new Date().getTime();}

    /**
     * Is the integration currently active?
     */
     __init7() {this._isEnabled = false;}

    /**
     * Paused is a state where:
     * - DOM Recording is not listening at all
     * - Nothing will be added to event buffer (e.g. core SDK events)
     */
     __init8() {this._isPaused = false;}

    /**
     * Have we attached listeners to the core SDK?
     * Note we have to track this as there is no way to remove instrumentation handlers.
     */
     __init9() {this._hasInitializedCoreListeners = false;}

    /**
     * Function to stop recording
     */
     __init10() {this._stopRecording = null;}

     __init11() {this._context = {
      errorIds: new Set(),
      traceIds: new Set(),
      urls: [],
      earliestEvent: null,
      initialTimestamp: new Date().getTime(),
      initialUrl: '',
    };}

     constructor({
      options,
      recordingOptions,
    }

  ) {ReplayContainer.prototype.__init.call(this);ReplayContainer.prototype.__init2.call(this);ReplayContainer.prototype.__init3.call(this);ReplayContainer.prototype.__init4.call(this);ReplayContainer.prototype.__init5.call(this);ReplayContainer.prototype.__init6.call(this);ReplayContainer.prototype.__init7.call(this);ReplayContainer.prototype.__init8.call(this);ReplayContainer.prototype.__init9.call(this);ReplayContainer.prototype.__init10.call(this);ReplayContainer.prototype.__init11.call(this);ReplayContainer.prototype.__init12.call(this);ReplayContainer.prototype.__init13.call(this);ReplayContainer.prototype.__init14.call(this);ReplayContainer.prototype.__init15.call(this);ReplayContainer.prototype.__init16.call(this);
      this._recordingOptions = recordingOptions;
      this._options = options;

      this._debouncedFlush = debounce(() => this._flush(), this._options.flushMinDelay, {
        maxWait: this._options.flushMaxDelay,
      });
    }

    /** Get the event context. */
     getContext() {
      return this._context;
    }

    /** If recording is currently enabled. */
     isEnabled() {
      return this._isEnabled;
    }

    /** If recording is currently paused. */
     isPaused() {
      return this._isPaused;
    }

    /** Get the replay integration options. */
     getOptions() {
      return this._options;
    }

    /**
     * Initializes the plugin.
     *
     * Creates or loads a session, attaches listeners to varying events (DOM,
     * _performanceObserver, Recording, Sentry SDK, etc)
     */
     start() {
      this._setInitialState();

      if (!this._loadAndCheckSession()) {
        return;
      }

      // If there is no session, then something bad has happened - can't continue
      if (!this.session) {
        this._handleException(new Error('No session found'));
        return;
      }

      if (!this.session.sampled) {
        // If session was not sampled, then we do not initialize the integration at all.
        return;
      }

      // If session is sampled for errors, then we need to set the recordingMode
      // to 'error', which will configure recording with different options.
      if (this.session.sampled === 'error') {
        this.recordingMode = 'error';
      }

      // setup() is generally called on page load or manually - in both cases we
      // should treat it as an activity
      this._updateSessionActivity();

      this.eventBuffer = createEventBuffer({
        useCompression: this._options.useCompression,
      });

      this._addListeners();

      // Need to set as enabled before we start recording, as `record()` can trigger a flush with a new checkout
      this._isEnabled = true;

      this.startRecording();
    }

    /**
     * Start recording.
     *
     * Note that this will cause a new DOM checkout
     */
     startRecording() {
      try {
        this._stopRecording = record({
          ...this._recordingOptions,
          // When running in error sampling mode, we need to overwrite `checkoutEveryNms`
          // Without this, it would record forever, until an error happens, which we don't want
          // instead, we'll always keep the last 60 seconds of replay before an error happened
          ...(this.recordingMode === 'error' && { checkoutEveryNms: ERROR_CHECKOUT_TIME }),
          emit: this._handleRecordingEmit,
        });
      } catch (err) {
        this._handleException(err);
      }
    }

    /**
     * Stops the recording, if it was running.
     * Returns true if it was stopped, else false.
     */
     stopRecording() {
      try {
        if (this._stopRecording) {
          this._stopRecording();
          this._stopRecording = undefined;
          return true;
        }

        return false;
      } catch (err) {
        this._handleException(err);
        return false;
      }
    }

    /**
     * Currently, this needs to be manually called (e.g. for tests). Sentry SDK
     * does not support a teardown
     */
     stop(reason) {
      if (!this._isEnabled) {
        return;
      }

      try {
        if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__)) {
          const msg = `[Replay] Stopping Replay${reason ? ` triggered by ${reason}` : ''}`;

          // When `traceInternals` is enabled, we want to log this to the console
          // Else, use the regular debug output
          // eslint-disable-next-line
          const log = this.getOptions()._experiments.traceInternals ? console.warn : logger.log;
          log(msg);
        }

        this._isEnabled = false;
        this._removeListeners();
        this.stopRecording();
        this.eventBuffer && this.eventBuffer.destroy();
        this.eventBuffer = null;
        this._debouncedFlush.cancel();
      } catch (err) {
        this._handleException(err);
      }
    }

    /**
     * Pause some replay functionality. See comments for `_isPaused`.
     * This differs from stop as this only stops DOM recording, it is
     * not as thorough of a shutdown as `stop()`.
     */
     pause() {
      this._isPaused = true;
      this.stopRecording();
    }

    /**
     * Resumes recording, see notes for `pause().
     *
     * Note that calling `startRecording()` here will cause a
     * new DOM checkout.`
     */
     resume() {
      if (!this._loadAndCheckSession()) {
        return;
      }

      this._isPaused = false;
      this.startRecording();
    }

    /**
     * We want to batch uploads of replay events. Save events only if
     * `<flushMinDelay>` milliseconds have elapsed since the last event
     * *OR* if `<flushMaxDelay>` milliseconds have elapsed.
     *
     * Accepts a callback to perform side-effects and returns true to stop batch
     * processing and hand back control to caller.
     */
     addUpdate(cb) {
      // We need to always run `cb` (e.g. in the case of `this.recordingMode == 'error'`)
      const cbResult = cb();

      // If this option is turned on then we will only want to call `flush`
      // explicitly
      if (this.recordingMode === 'error') {
        return;
      }

      // If callback is true, we do not want to continue with flushing -- the
      // caller will need to handle it.
      if (cbResult === true) {
        return;
      }

      // addUpdate is called quite frequently - use _debouncedFlush so that it
      // respects the flush delays and does not flush immediately
      this._debouncedFlush();
    }

    /**
     * Updates the user activity timestamp and resumes recording. This should be
     * called in an event handler for a user action that we consider as the user
     * being "active" (e.g. a mouse click).
     */
     triggerUserActivity() {
      this._updateUserActivity();

      // This case means that recording was once stopped due to inactivity.
      // Ensure that recording is resumed.
      if (!this._stopRecording) {
        // Create a new session, otherwise when the user action is flushed, it
        // will get rejected due to an expired session.
        if (!this._loadAndCheckSession()) {
          return;
        }

        // Note: This will cause a new DOM checkout
        this.resume();
        return;
      }

      // Otherwise... recording was never suspended, continue as normalish
      this.checkAndHandleExpiredSession();

      this._updateSessionActivity();
    }

    /**
     *
     * Always flush via `_debouncedFlush` so that we do not have flushes triggered
     * from calling both `flush` and `_debouncedFlush`. Otherwise, there could be
     * cases of mulitple flushes happening closely together.
     */
     flushImmediate() {
      this._debouncedFlush();
      // `.flush` is provided by the debounced function, analogously to lodash.debounce
      return this._debouncedFlush.flush() ;
    }

    /** Get the current sesion (=replay) ID */
     getSessionId() {
      return this.session && this.session.id;
    }

    /**
     * Checks if recording should be stopped due to user inactivity. Otherwise
     * check if session is expired and create a new session if so. Triggers a new
     * full snapshot on new session.
     *
     * Returns true if session is not expired, false otherwise.
     * @hidden
     */
     checkAndHandleExpiredSession(expiry) {
      const oldSessionId = this.getSessionId();

      // Prevent starting a new session if the last user activity is older than
      // MAX_SESSION_LIFE. Otherwise non-user activity can trigger a new
      // session+recording. This creates noisy replays that do not have much
      // content in them.
      if (this._lastActivity && isExpired(this._lastActivity, MAX_SESSION_LIFE)) {
        // Pause recording
        this.pause();
        return;
      }

      // --- There is recent user activity --- //
      // This will create a new session if expired, based on expiry length
      if (!this._loadAndCheckSession(expiry)) {
        return;
      }

      // Session was expired if session ids do not match
      const expired = oldSessionId !== this.getSessionId();

      if (!expired) {
        return true;
      }

      // Session is expired, trigger a full snapshot (which will create a new session)
      this._triggerFullSnapshot();

      return false;
    }

    /** A wrapper to conditionally capture exceptions. */
     _handleException(error) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.error('[Replay]', error);

      if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && this._options._experiments && this._options._experiments.captureExceptions) {
        captureException(error);
      }
    }

    /**
     * Loads (or refreshes) the current session.
     * Returns false if session is not recorded.
     */
     _loadAndCheckSession(expiry = SESSION_IDLE_DURATION) {
      const { type, session } = getSession({
        expiry,
        stickySession: Boolean(this._options.stickySession),
        currentSession: this.session,
        sessionSampleRate: this._options.sessionSampleRate,
        errorSampleRate: this._options.errorSampleRate,
      });

      // If session was newly created (i.e. was not loaded from storage), then
      // enable flag to create the root replay
      if (type === 'new') {
        this._setInitialState();
      }

      const currentSessionId = this.getSessionId();
      if (session.id !== currentSessionId) {
        session.previousSessionId = currentSessionId;
      }

      this.session = session;

      if (!this.session.sampled) {
        this.stop('session unsampled');
        return false;
      }

      return true;
    }

    /**
     * Capture some initial state that can change throughout the lifespan of the
     * replay. This is required because otherwise they would be captured at the
     * first flush.
     */
     _setInitialState() {
      const urlPath = `${WINDOW$1.location.pathname}${WINDOW$1.location.hash}${WINDOW$1.location.search}`;
      const url = `${WINDOW$1.location.origin}${urlPath}`;

      this.performanceEvents = [];

      // Reset _context as well
      this._clearContext();

      this._context.initialUrl = url;
      this._context.initialTimestamp = new Date().getTime();
      this._context.urls.push(url);
    }

    /**
     * Adds listeners to record events for the replay
     */
     _addListeners() {
      try {
        WINDOW$1.document.addEventListener('visibilitychange', this._handleVisibilityChange);
        WINDOW$1.addEventListener('blur', this._handleWindowBlur);
        WINDOW$1.addEventListener('focus', this._handleWindowFocus);

        // We need to filter out dropped events captured by `addGlobalEventProcessor(this.handleGlobalEvent)` below
        overwriteRecordDroppedEvent(this._context.errorIds);

        // There is no way to remove these listeners, so ensure they are only added once
        if (!this._hasInitializedCoreListeners) {
          addGlobalListeners(this);

          this._hasInitializedCoreListeners = true;
        }
      } catch (err) {
        this._handleException(err);
      }

      // PerformanceObserver //
      if (!('PerformanceObserver' in WINDOW$1)) {
        return;
      }

      this._performanceObserver = setupPerformanceObserver(this);
    }

    /**
     * Cleans up listeners that were created in `_addListeners`
     */
     _removeListeners() {
      try {
        WINDOW$1.document.removeEventListener('visibilitychange', this._handleVisibilityChange);

        WINDOW$1.removeEventListener('blur', this._handleWindowBlur);
        WINDOW$1.removeEventListener('focus', this._handleWindowFocus);

        restoreRecordDroppedEvent();

        if (this._performanceObserver) {
          this._performanceObserver.disconnect();
          this._performanceObserver = null;
        }
      } catch (err) {
        this._handleException(err);
      }
    }

    /**
     * Handler for recording events.
     *
     * Adds to event buffer, and has varying flushing behaviors if the event was a checkout.
     */
     __init12() {this._handleRecordingEmit = (
      event,
      isCheckout,
    ) => {
      // If this is false, it means session is expired, create and a new session and wait for checkout
      if (!this.checkAndHandleExpiredSession()) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.error('[Replay] Received replay event after session expired.');

        return;
      }

      this.addUpdate(() => {
        // The session is always started immediately on pageload/init, but for
        // error-only replays, it should reflect the most recent checkout
        // when an error occurs. Clear any state that happens before this current
        // checkout. This needs to happen before `addEvent()` which updates state
        // dependent on this reset.
        if (this.recordingMode === 'error' && event.type === 2) {
          this._setInitialState();
        }

        // We need to clear existing events on a checkout, otherwise they are
        // incremental event updates and should be appended
        void addEvent(this, event, isCheckout);

        // Different behavior for full snapshots (type=2), ignore other event types
        // See https://github.com/rrweb-io/rrweb/blob/d8f9290ca496712aa1e7d472549480c4e7876594/packages/rrweb/src/types.ts#L16
        if (event.type !== 2) {
          return false;
        }

        // If there is a previousSessionId after a full snapshot occurs, then
        // the replay session was started due to session expiration. The new session
        // is started before triggering a new checkout and contains the id
        // of the previous session. Do not immediately flush in this case
        // to avoid capturing only the checkout and instead the replay will
        // be captured if they perform any follow-up actions.
        if (this.session && this.session.previousSessionId) {
          return true;
        }

        // See note above re: session start needs to reflect the most recent
        // checkout.
        if (this.recordingMode === 'error' && this.session && this._context.earliestEvent) {
          this.session.started = this._context.earliestEvent;
          this._maybeSaveSession();
        }

        // Flush immediately so that we do not miss the first segment, otherwise
        // it can prevent loading on the UI. This will cause an increase in short
        // replays (e.g. opening and closing a tab quickly), but these can be
        // filtered on the UI.
        if (this.recordingMode === 'session') {
          // We want to ensure the worker is ready, as otherwise we'd always send the first event uncompressed
          void this.flushImmediate();
        }

        return true;
      });
    };}

    /**
     * Handle when visibility of the page content changes. Opening a new tab will
     * cause the state to change to hidden because of content of current page will
     * be hidden. Likewise, moving a different window to cover the contents of the
     * page will also trigger a change to a hidden state.
     */
     __init13() {this._handleVisibilityChange = () => {
      if (WINDOW$1.document.visibilityState === 'visible') {
        this._doChangeToForegroundTasks();
      } else {
        this._doChangeToBackgroundTasks();
      }
    };}

    /**
     * Handle when page is blurred
     */
     __init14() {this._handleWindowBlur = () => {
      const breadcrumb = createBreadcrumb({
        category: 'ui.blur',
      });

      // Do not count blur as a user action -- it's part of the process of them
      // leaving the page
      this._doChangeToBackgroundTasks(breadcrumb);
    };}

    /**
     * Handle when page is focused
     */
     __init15() {this._handleWindowFocus = () => {
      const breadcrumb = createBreadcrumb({
        category: 'ui.focus',
      });

      // Do not count focus as a user action -- instead wait until they focus and
      // interactive with page
      this._doChangeToForegroundTasks(breadcrumb);
    };}

    /**
     * Tasks to run when we consider a page to be hidden (via blurring and/or visibility)
     */
     _doChangeToBackgroundTasks(breadcrumb) {
      if (!this.session) {
        return;
      }

      const expired = isSessionExpired(this.session, VISIBILITY_CHANGE_TIMEOUT);

      if (breadcrumb && !expired) {
        this._createCustomBreadcrumb(breadcrumb);
      }

      // Send replay when the page/tab becomes hidden. There is no reason to send
      // replay if it becomes visible, since no actions we care about were done
      // while it was hidden
      this._conditionalFlush();
    }

    /**
     * Tasks to run when we consider a page to be visible (via focus and/or visibility)
     */
     _doChangeToForegroundTasks(breadcrumb) {
      if (!this.session) {
        return;
      }

      const isSessionActive = this.checkAndHandleExpiredSession(VISIBILITY_CHANGE_TIMEOUT);

      if (!isSessionActive) {
        // If the user has come back to the page within VISIBILITY_CHANGE_TIMEOUT
        // ms, we will re-use the existing session, otherwise create a new
        // session
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('[Replay] Document has become active, but session has expired');
        return;
      }

      if (breadcrumb) {
        this._createCustomBreadcrumb(breadcrumb);
      }
    }

    /**
     * Trigger rrweb to take a full snapshot which will cause this plugin to
     * create a new Replay event.
     */
     _triggerFullSnapshot() {
      try {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('[Replay] Taking full rrweb snapshot');
        record.takeFullSnapshot(true);
      } catch (err) {
        this._handleException(err);
      }
    }

    /**
     * Update user activity (across session lifespans)
     */
     _updateUserActivity(_lastActivity = new Date().getTime()) {
      this._lastActivity = _lastActivity;
    }

    /**
     * Updates the session's last activity timestamp
     */
     _updateSessionActivity(_lastActivity = new Date().getTime()) {
      if (this.session) {
        this.session.lastActivity = _lastActivity;
        this._maybeSaveSession();
      }
    }

    /**
     * Helper to create (and buffer) a replay breadcrumb from a core SDK breadcrumb
     */
     _createCustomBreadcrumb(breadcrumb) {
      this.addUpdate(() => {
        void addEvent(this, {
          type: EventType.Custom,
          timestamp: breadcrumb.timestamp || 0,
          data: {
            tag: 'breadcrumb',
            payload: breadcrumb,
          },
        });
      });
    }

    /**
     * Observed performance events are added to `this.performanceEvents`. These
     * are included in the replay event before it is finished and sent to Sentry.
     */
     _addPerformanceEntries() {
      // Copy and reset entries before processing
      const entries = [...this.performanceEvents];
      this.performanceEvents = [];

      return Promise.all(createPerformanceSpans(this, createPerformanceEntries(entries)));
    }

    /**
     * Only flush if `this.recordingMode === 'session'`
     */
     _conditionalFlush() {
      if (this.recordingMode === 'error') {
        return;
      }

      void this.flushImmediate();
    }

    /**
     * Clear _context
     */
     _clearContext() {
      // XXX: `initialTimestamp` and `initialUrl` do not get cleared
      this._context.errorIds.clear();
      this._context.traceIds.clear();
      this._context.urls = [];
      this._context.earliestEvent = null;
    }

    /**
     * Return and clear _context
     */
     _popEventContext() {
      if (this._context.earliestEvent && this._context.earliestEvent < this._context.initialTimestamp) {
        this._context.initialTimestamp = this._context.earliestEvent;
      }

      const _context = {
        initialTimestamp: this._context.initialTimestamp,
        initialUrl: this._context.initialUrl,
        errorIds: Array.from(this._context.errorIds).filter(Boolean),
        traceIds: Array.from(this._context.traceIds).filter(Boolean),
        urls: this._context.urls,
      };

      this._clearContext();

      return _context;
    }

    /**
     * Flushes replay event buffer to Sentry.
     *
     * Performance events are only added right before flushing - this is
     * due to the buffered performance observer events.
     *
     * Should never be called directly, only by `flush`
     */
     async _runFlush() {
      if (!this.session || !this.eventBuffer) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.error('[Replay] No session or eventBuffer found to flush.');
        return;
      }

      await this._addPerformanceEntries();

      // Check eventBuffer again, as it could have been stopped in the meanwhile
      if (!this.eventBuffer || !this.eventBuffer.hasEvents) {
        return;
      }

      // Only attach memory event if eventBuffer is not empty
      await addMemoryEntry(this);

      // Check eventBuffer again, as it could have been stopped in the meanwhile
      if (!this.eventBuffer) {
        return;
      }

      try {
        // Note this empties the event buffer regardless of outcome of sending replay
        const recordingData = await this.eventBuffer.finish();

        // NOTE: Copy values from instance members, as it's possible they could
        // change before the flush finishes.
        const replayId = this.session.id;
        const eventContext = this._popEventContext();
        // Always increment segmentId regardless of outcome of sending replay
        const segmentId = this.session.segmentId++;
        this._maybeSaveSession();

        await sendReplay({
          replayId,
          recordingData,
          segmentId,
          includeReplayStartTimestamp: segmentId === 0,
          eventContext,
          session: this.session,
          options: this.getOptions(),
          timestamp: new Date().getTime(),
        });
      } catch (err) {
        this._handleException(err);

        // This means we retried 3 times and all of them failed,
        // or we ran into a problem we don't want to retry, like rate limiting.
        // In this case, we want to completely stop the replay - otherwise, we may get inconsistent segments
        this.stop('sendReplay');

        const client = getCurrentHub().getClient();

        if (client) {
          client.recordDroppedEvent('send_error', 'replay');
        }
      }
    }

    /**
     * Flush recording data to Sentry. Creates a lock so that only a single flush
     * can be active at a time. Do not call this directly.
     */
     __init16() {this._flush = async () => {
      if (!this._isEnabled) {
        // This can happen if e.g. the replay was stopped because of exceeding the retry limit
        return;
      }

      if (!this.checkAndHandleExpiredSession()) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.error('[Replay] Attempting to finish replay event after session expired.');
        return;
      }

      if (!this.session) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.error('[Replay] No session found to flush.');
        return;
      }

      // A flush is about to happen, cancel any queued flushes
      this._debouncedFlush.cancel();

      // this._flushLock acts as a lock so that future calls to `_flush()`
      // will be blocked until this promise resolves
      if (!this._flushLock) {
        this._flushLock = this._runFlush();
        await this._flushLock;
        this._flushLock = null;
        return;
      }

      // Wait for previous flush to finish, then call the debounced `_flush()`.
      // It's possible there are other flush requests queued and waiting for it
      // to resolve. We want to reduce all outstanding requests (as well as any
      // new flush requests that occur within a second of the locked flush
      // completing) into a single flush.

      try {
        await this._flushLock;
      } catch (err) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.error(err);
      } finally {
        this._debouncedFlush();
      }
    };}

    /** Save the session, if it is sticky */
     _maybeSaveSession() {
      if (this.session && this._options.stickySession) {
        saveSession(this.session);
      }
    }
  }

  function getOption(
    selectors,
    defaultSelectors,
    deprecatedClassOption,
    deprecatedSelectorOption,
  ) {
    const deprecatedSelectors = typeof deprecatedSelectorOption === 'string' ? deprecatedSelectorOption.split(',') : [];

    const allSelectors = [
      ...selectors,
      // @deprecated
      ...deprecatedSelectors,

      // sentry defaults
      ...defaultSelectors,
    ];

    // @deprecated
    if (typeof deprecatedClassOption !== 'undefined') {
      // NOTE: No support for RegExp
      if (typeof deprecatedClassOption === 'string') {
        allSelectors.push(`.${deprecatedClassOption}`);
      }

      // eslint-disable-next-line no-console
      console.warn(
        '[Replay] You are using a deprecated configuration item for privacy. Read the documentation on how to use the new privacy configuration.',
      );
    }

    return allSelectors.join(',');
  }

  /**
   * Returns privacy related configuration for use in rrweb
   */
  function getPrivacyOptions({
    mask,
    unmask,
    block,
    unblock,
    ignore,

    // eslint-disable-next-line deprecation/deprecation
    blockClass,
    // eslint-disable-next-line deprecation/deprecation
    blockSelector,
    // eslint-disable-next-line deprecation/deprecation
    maskTextClass,
    // eslint-disable-next-line deprecation/deprecation
    maskTextSelector,
    // eslint-disable-next-line deprecation/deprecation
    ignoreClass,
  }) {
    const maskSelector = getOption(mask, ['.sentry-mask', '[data-sentry-mask]'], maskTextClass, maskTextSelector);
    const unmaskSelector = getOption(unmask, ['.sentry-unmask', '[data-sentry-unmask]']);

    const options = {
      // We are making the decision to make text and input selectors the same
      maskTextSelector: maskSelector,
      unmaskTextSelector: unmaskSelector,
      maskInputSelector: maskSelector,
      unmaskInputSelector: unmaskSelector,

      blockSelector: getOption(block, ['.sentry-block', '[data-sentry-block]'], blockClass, blockSelector),
      unblockSelector: getOption(unblock, ['.sentry-unblock', '[data-sentry-unblock]']),
      ignoreSelector: getOption(ignore, ['.sentry-ignore', '[data-sentry-ignore]'], ignoreClass),
    };

    if (blockClass instanceof RegExp) {
      options.blockClass = blockClass;
    }

    if (maskTextClass instanceof RegExp) {
      options.maskTextClass = maskTextClass;
    }

    return options;
  }

  /**
   * Returns true if we are in the browser.
   */
  function isBrowser() {
    // eslint-disable-next-line no-restricted-globals
    return typeof window !== 'undefined' && (!isNodeEnv() || isElectronNodeRenderer());
  }

  // Electron renderers with nodeIntegration enabled are detected as Node.js so we specifically test for them
  function isElectronNodeRenderer() {
    return typeof process !== 'undefined' && (process ).type === 'renderer';
  }

  const MEDIA_SELECTORS = 'img,image,svg,video,object,picture,embed,map,audio';

  let _initialized = false;

  /**
   * The main replay integration class, to be passed to `init({  integrations: [] })`.
   */
  class Replay  {
    /**
     * @inheritDoc
     */
     static __initStatic() {this.id = 'Replay';}

    /**
     * @inheritDoc
     */
     __init() {this.name = Replay.id;}

    /**
     * Options to pass to `rrweb.record()`
     */

    /**
     * Initial options passed to the replay integration, merged with default values.
     * Note: `sessionSampleRate` and `errorSampleRate` are not required here, as they
     * can only be finally set when setupOnce() is called.
     *
     * @private
     */

     constructor({
      flushMinDelay = DEFAULT_FLUSH_MIN_DELAY,
      flushMaxDelay = DEFAULT_FLUSH_MAX_DELAY,
      stickySession = true,
      useCompression = true,
      _experiments = {},
      sessionSampleRate,
      errorSampleRate,
      maskAllText = true,
      maskAllInputs = true,
      blockAllMedia = true,

      mask = [],
      unmask = [],
      block = [],
      unblock = [],
      ignore = [],
      maskFn,

      // eslint-disable-next-line deprecation/deprecation
      blockClass,
      // eslint-disable-next-line deprecation/deprecation
      blockSelector,
      // eslint-disable-next-line deprecation/deprecation
      maskInputOptions,
      // eslint-disable-next-line deprecation/deprecation
      maskTextClass,
      // eslint-disable-next-line deprecation/deprecation
      maskTextSelector,
      // eslint-disable-next-line deprecation/deprecation
      ignoreClass,
    } = {}) {Replay.prototype.__init.call(this);
      this._recordingOptions = {
        maskAllInputs,
        maskAllText,
        maskInputOptions: { ...(maskInputOptions || {}), password: true },
        maskTextFn: maskFn,
        maskInputFn: maskFn,

        ...getPrivacyOptions({
          mask,
          unmask,
          block,
          unblock,
          ignore,
          blockClass,
          blockSelector,
          maskTextClass,
          maskTextSelector,
          ignoreClass,
        }),

        // Our defaults
        slimDOMOptions: 'all',
        inlineStylesheet: true,
        // Disable inline images as it will increase segment/replay size
        inlineImages: false,
        // collect fonts, but be aware that `sentry.io` needs to be an allowed
        // origin for playback
        collectFonts: true,
      };

      this._initialOptions = {
        flushMinDelay,
        flushMaxDelay,
        stickySession,
        sessionSampleRate,
        errorSampleRate,
        useCompression,
        blockAllMedia,
        _experiments,
      };

      if (typeof sessionSampleRate === 'number') {
        // eslint-disable-next-line
        console.warn(
          `[Replay] You are passing \`sessionSampleRate\` to the Replay integration.
This option is deprecated and will be removed soon.
Instead, configure \`replaysSessionSampleRate\` directly in the SDK init options, e.g.:
Sentry.init({ replaysSessionSampleRate: ${sessionSampleRate} })`,
        );

        this._initialOptions.sessionSampleRate = sessionSampleRate;
      }

      if (typeof errorSampleRate === 'number') {
        // eslint-disable-next-line
        console.warn(
          `[Replay] You are passing \`errorSampleRate\` to the Replay integration.
This option is deprecated and will be removed soon.
Instead, configure \`replaysOnErrorSampleRate\` directly in the SDK init options, e.g.:
Sentry.init({ replaysOnErrorSampleRate: ${errorSampleRate} })`,
        );

        this._initialOptions.errorSampleRate = errorSampleRate;
      }

      if (this._initialOptions.blockAllMedia) {
        // `blockAllMedia` is a more user friendly option to configure blocking
        // embedded media elements
        this._recordingOptions.blockSelector = !this._recordingOptions.blockSelector
          ? MEDIA_SELECTORS
          : `${this._recordingOptions.blockSelector},${MEDIA_SELECTORS}`;
      }

      if (this._isInitialized && isBrowser()) {
        throw new Error('Multiple Sentry Session Replay instances are not supported');
      }

      this._isInitialized = true;
    }

    /** If replay has already been initialized */
     get _isInitialized() {
      return _initialized;
    }

    /** Update _isInitialized */
     set _isInitialized(value) {
      _initialized = value;
    }

    /**
     * We previously used to create a transaction in `setupOnce` and it would
     * potentially create a transaction before some native SDK integrations have run
     * and applied their own global event processor. An example is:
     * https://github.com/getsentry/sentry-javascript/blob/b47ceafbdac7f8b99093ce6023726ad4687edc48/packages/browser/src/integrations/useragent.ts
     *
     * So we call `replay.setup` in next event loop as a workaround to wait for other
     * global event processors to finish. This is no longer needed, but keeping it
     * here to avoid any future issues.
     */
     setupOnce() {
      if (!isBrowser()) {
        return;
      }

      this._setup();

      // XXX: See method comments above
      setTimeout(() => this.start());
    }

    /**
     * Initializes the plugin.
     *
     * Creates or loads a session, attaches listeners to varying events (DOM,
     * PerformanceObserver, Recording, Sentry SDK, etc)
     */
     start() {
      if (!this._replay) {
        return;
      }

      this._replay.start();
    }

    /**
     * Currently, this needs to be manually called (e.g. for tests). Sentry SDK
     * does not support a teardown
     */
     stop() {
      if (!this._replay) {
        return;
      }

      this._replay.stop();
    }

    /**
     * Immediately send all pending events.
     */
     flush() {
      if (!this._replay || !this._replay.isEnabled()) {
        return;
      }

      return this._replay.flushImmediate();
    }

    /** Setup the integration. */
     _setup() {
      // Client is not available in constructor, so we need to wait until setupOnce
      const finalOptions = loadReplayOptionsFromClient(this._initialOptions);

      this._replay = new ReplayContainer({
        options: finalOptions,
        recordingOptions: this._recordingOptions,
      });
    }
  } Replay.__initStatic();

  /** Parse Replay-related options from SDK options */
  function loadReplayOptionsFromClient(initialOptions) {
    const client = getCurrentHub().getClient();
    const opt = client && (client.getOptions() );

    const finalOptions = { sessionSampleRate: 0, errorSampleRate: 0, ...dropUndefinedKeys(initialOptions) };

    if (!opt) {
      // eslint-disable-next-line no-console
      console.warn('SDK client is not available.');
      return finalOptions;
    }

    if (
      initialOptions.sessionSampleRate == null && // TODO remove once deprecated rates are removed
      initialOptions.errorSampleRate == null && // TODO remove once deprecated rates are removed
      opt.replaysSessionSampleRate == null &&
      opt.replaysOnErrorSampleRate == null
    ) {
      // eslint-disable-next-line no-console
      console.warn(
        'Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.',
      );
    }

    if (typeof opt.replaysSessionSampleRate === 'number') {
      finalOptions.sessionSampleRate = opt.replaysSessionSampleRate;
    }

    if (typeof opt.replaysOnErrorSampleRate === 'number') {
      finalOptions.errorSampleRate = opt.replaysOnErrorSampleRate;
    }

    return finalOptions;
  }

  /**
   * Inits the React SDK
   */
  function init(options) {
    options._metadata = options._metadata || {};
    options._metadata.sdk = options._metadata.sdk || {
      name: 'sentry.javascript.react',
      packages: [
        {
          name: 'npm:@sentry/react',
          version: SDK_VERSION,
        },
      ],
      version: SDK_VERSION,
    };
    init$1(options);
  }

  /**
   * Determines if tracing is currently enabled.
   *
   * Tracing is enabled when at least one of `tracesSampleRate` and `tracesSampler` is defined in the SDK config.
   */
  function hasTracingEnabled(
    maybeOptions,
  ) {
    const client = getCurrentHub().getClient();
    const options = maybeOptions || (client && client.getOptions());
    return !!options && ('tracesSampleRate' in options || 'tracesSampler' in options);
  }

  /** Grabs active transaction off scope, if any */
  function getActiveTransaction(maybeHub) {
    const hub = maybeHub || getCurrentHub();
    const scope = hub.getScope();
    return scope && (scope.getTransaction() );
  }

  /**
   * Converts from milliseconds to seconds
   * @param time time in ms
   */
  function msToSec(time) {
    return time / 1000;
  }

  /**
   * Configures global error listeners
   */
  function registerErrorInstrumentation() {
    addInstrumentationHandler('error', errorCallback);
    addInstrumentationHandler('unhandledrejection', errorCallback);
  }

  /**
   * If an error or unhandled promise occurs, we mark the active transaction as failed
   */
  function errorCallback() {
    const activeTransaction = getActiveTransaction();
    if (activeTransaction) {
      const status = 'internal_error';
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log(`[Tracing] Transaction: ${status} -> Global error occured`);
      activeTransaction.setStatus(status);
    }
  }

  /**
   * Keeps track of finished spans for a given transaction
   * @internal
   * @hideconstructor
   * @hidden
   */
  class SpanRecorder {
     __init() {this.spans = [];}

     constructor(maxlen = 1000) {SpanRecorder.prototype.__init.call(this);
      this._maxlen = maxlen;
    }

    /**
     * This is just so that we don't run out of memory while recording a lot
     * of spans. At some point we just stop and flush out the start of the
     * trace tree (i.e.the first n spans with the smallest
     * start_timestamp).
     */
     add(span) {
      if (this.spans.length > this._maxlen) {
        span.spanRecorder = undefined;
      } else {
        this.spans.push(span);
      }
    }
  }

  /**
   * Span contains all data about a span
   */
  class Span  {
    /**
     * @inheritDoc
     */
     __init2() {this.traceId = uuid4();}

    /**
     * @inheritDoc
     */
     __init3() {this.spanId = uuid4().substring(16);}

    /**
     * @inheritDoc
     */

    /**
     * Internal keeper of the status
     */

    /**
     * @inheritDoc
     */

    /**
     * Timestamp in seconds when the span was created.
     */
     __init4() {this.startTimestamp = timestampWithMs();}

    /**
     * Timestamp in seconds when the span ended.
     */

    /**
     * @inheritDoc
     */

    /**
     * @inheritDoc
     */

    /**
     * @inheritDoc
     */
     __init5() {this.tags = {};}

    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
     __init6() {this.data = {};}

    /**
     * List of spans that were finalized
     */

    /**
     * @inheritDoc
     */

    /**
     * The instrumenter that created this span.
     */
     __init7() {this.instrumenter = 'sentry';}

    /**
     * You should never call the constructor manually, always use `Sentry.startTransaction()`
     * or call `startChild()` on an existing span.
     * @internal
     * @hideconstructor
     * @hidden
     */
     constructor(spanContext) {Span.prototype.__init2.call(this);Span.prototype.__init3.call(this);Span.prototype.__init4.call(this);Span.prototype.__init5.call(this);Span.prototype.__init6.call(this);Span.prototype.__init7.call(this);
      if (!spanContext) {
        return this;
      }
      if (spanContext.traceId) {
        this.traceId = spanContext.traceId;
      }
      if (spanContext.spanId) {
        this.spanId = spanContext.spanId;
      }
      if (spanContext.parentSpanId) {
        this.parentSpanId = spanContext.parentSpanId;
      }
      // We want to include booleans as well here
      if ('sampled' in spanContext) {
        this.sampled = spanContext.sampled;
      }
      if (spanContext.op) {
        this.op = spanContext.op;
      }
      if (spanContext.description) {
        this.description = spanContext.description;
      }
      if (spanContext.data) {
        this.data = spanContext.data;
      }
      if (spanContext.tags) {
        this.tags = spanContext.tags;
      }
      if (spanContext.status) {
        this.status = spanContext.status;
      }
      if (spanContext.startTimestamp) {
        this.startTimestamp = spanContext.startTimestamp;
      }
      if (spanContext.endTimestamp) {
        this.endTimestamp = spanContext.endTimestamp;
      }
      if (spanContext.instrumenter) {
        this.instrumenter = spanContext.instrumenter;
      }
    }

    /**
     * @inheritDoc
     */
     startChild(
      spanContext,
    ) {
      const childSpan = new Span({
        ...spanContext,
        parentSpanId: this.spanId,
        sampled: this.sampled,
        traceId: this.traceId,
      });

      childSpan.spanRecorder = this.spanRecorder;
      if (childSpan.spanRecorder) {
        childSpan.spanRecorder.add(childSpan);
      }

      childSpan.transaction = this.transaction;

      if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && childSpan.transaction) {
        const opStr = (spanContext && spanContext.op) || '< unknown op >';
        const nameStr = childSpan.transaction.name || '< unknown name >';
        const idStr = childSpan.transaction.spanId;

        const logMessage = `[Tracing] Starting '${opStr}' span on transaction '${nameStr}' (${idStr}).`;
        childSpan.transaction.metadata.spanMetadata[childSpan.spanId] = { logMessage };
        logger.log(logMessage);
      }

      return childSpan;
    }

    /**
     * @inheritDoc
     */
     setTag(key, value) {
      this.tags = { ...this.tags, [key]: value };
      return this;
    }

    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
     setData(key, value) {
      this.data = { ...this.data, [key]: value };
      return this;
    }

    /**
     * @inheritDoc
     */
     setStatus(value) {
      this.status = value;
      return this;
    }

    /**
     * @inheritDoc
     */
     setHttpStatus(httpStatus) {
      this.setTag('http.status_code', String(httpStatus));
      const spanStatus = spanStatusfromHttpCode(httpStatus);
      if (spanStatus !== 'unknown_error') {
        this.setStatus(spanStatus);
      }
      return this;
    }

    /**
     * @inheritDoc
     */
     isSuccess() {
      return this.status === 'ok';
    }

    /**
     * @inheritDoc
     */
     finish(endTimestamp) {
      if (
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        // Don't call this for transactions
        this.transaction &&
        this.transaction.spanId !== this.spanId
      ) {
        const { logMessage } = this.transaction.metadata.spanMetadata[this.spanId];
        if (logMessage) {
          logger.log((logMessage ).replace('Starting', 'Finishing'));
        }
      }

      this.endTimestamp = typeof endTimestamp === 'number' ? endTimestamp : timestampWithMs();
    }

    /**
     * @inheritDoc
     */
     toTraceparent() {
      let sampledString = '';
      if (this.sampled !== undefined) {
        sampledString = this.sampled ? '-1' : '-0';
      }
      return `${this.traceId}-${this.spanId}${sampledString}`;
    }

    /**
     * @inheritDoc
     */
     toContext() {
      return dropUndefinedKeys({
        data: this.data,
        description: this.description,
        endTimestamp: this.endTimestamp,
        op: this.op,
        parentSpanId: this.parentSpanId,
        sampled: this.sampled,
        spanId: this.spanId,
        startTimestamp: this.startTimestamp,
        status: this.status,
        tags: this.tags,
        traceId: this.traceId,
      });
    }

    /**
     * @inheritDoc
     */
     updateWithContext(spanContext) {
      this.data = spanContext.data || {};
      this.description = spanContext.description;
      this.endTimestamp = spanContext.endTimestamp;
      this.op = spanContext.op;
      this.parentSpanId = spanContext.parentSpanId;
      this.sampled = spanContext.sampled;
      this.spanId = spanContext.spanId || this.spanId;
      this.startTimestamp = spanContext.startTimestamp || this.startTimestamp;
      this.status = spanContext.status;
      this.tags = spanContext.tags || {};
      this.traceId = spanContext.traceId || this.traceId;

      return this;
    }

    /**
     * @inheritDoc
     */
     getTraceContext() {
      return dropUndefinedKeys({
        data: Object.keys(this.data).length > 0 ? this.data : undefined,
        description: this.description,
        op: this.op,
        parent_span_id: this.parentSpanId,
        span_id: this.spanId,
        status: this.status,
        tags: Object.keys(this.tags).length > 0 ? this.tags : undefined,
        trace_id: this.traceId,
      });
    }

    /**
     * @inheritDoc
     */
     toJSON()

   {
      return dropUndefinedKeys({
        data: Object.keys(this.data).length > 0 ? this.data : undefined,
        description: this.description,
        op: this.op,
        parent_span_id: this.parentSpanId,
        span_id: this.spanId,
        start_timestamp: this.startTimestamp,
        status: this.status,
        tags: Object.keys(this.tags).length > 0 ? this.tags : undefined,
        timestamp: this.endTimestamp,
        trace_id: this.traceId,
      });
    }
  }

  /**
   * Converts a HTTP status code into a {@link SpanStatusType}.
   *
   * @param httpStatus The HTTP response status code.
   * @returns The span status or unknown_error.
   */
  function spanStatusfromHttpCode(httpStatus) {
    if (httpStatus < 400 && httpStatus >= 100) {
      return 'ok';
    }

    if (httpStatus >= 400 && httpStatus < 500) {
      switch (httpStatus) {
        case 401:
          return 'unauthenticated';
        case 403:
          return 'permission_denied';
        case 404:
          return 'not_found';
        case 409:
          return 'already_exists';
        case 413:
          return 'failed_precondition';
        case 429:
          return 'resource_exhausted';
        default:
          return 'invalid_argument';
      }
    }

    if (httpStatus >= 500 && httpStatus < 600) {
      switch (httpStatus) {
        case 501:
          return 'unimplemented';
        case 503:
          return 'unavailable';
        case 504:
          return 'deadline_exceeded';
        default:
          return 'internal_error';
      }
    }

    return 'unknown_error';
  }

  /** JSDoc */
  class Transaction extends Span  {

    /**
     * The reference to the current hub.
     */

     __init() {this._measurements = {};}

     __init2() {this._contexts = {};}

     __init3() {this._frozenDynamicSamplingContext = undefined;}

    /**
     * This constructor should never be called manually. Those instrumenting tracing should use
     * `Sentry.startTransaction()`, and internal methods should use `hub.startTransaction()`.
     * @internal
     * @hideconstructor
     * @hidden
     */
     constructor(transactionContext, hub) {
      super(transactionContext);Transaction.prototype.__init.call(this);Transaction.prototype.__init2.call(this);Transaction.prototype.__init3.call(this);
      this._hub = hub || getCurrentHub();

      this._name = transactionContext.name || '';

      this.metadata = {
        source: 'custom',
        ...transactionContext.metadata,
        spanMetadata: {},
      };

      this._trimEnd = transactionContext.trimEnd;

      // this is because transactions are also spans, and spans have a transaction pointer
      this.transaction = this;

      // If Dynamic Sampling Context is provided during the creation of the transaction, we freeze it as it usually means
      // there is incoming Dynamic Sampling Context. (Either through an incoming request, a baggage meta-tag, or other means)
      const incomingDynamicSamplingContext = this.metadata.dynamicSamplingContext;
      if (incomingDynamicSamplingContext) {
        // We shallow copy this in case anything writes to the original reference of the passed in `dynamicSamplingContext`
        this._frozenDynamicSamplingContext = { ...incomingDynamicSamplingContext };
      }
    }

    /** Getter for `name` property */
     get name() {
      return this._name;
    }

    /** Setter for `name` property, which also sets `source` as custom */
     set name(newName) {
      this.setName(newName);
    }

    /**
     * JSDoc
     */
     setName(name, source = 'custom') {
      this._name = name;
      this.metadata.source = source;
    }

    /**
     * Attaches SpanRecorder to the span itself
     * @param maxlen maximum number of spans that can be recorded
     */
     initSpanRecorder(maxlen = 1000) {
      if (!this.spanRecorder) {
        this.spanRecorder = new SpanRecorder(maxlen);
      }
      this.spanRecorder.add(this);
    }

    /**
     * @inheritDoc
     */
     setContext(key, context) {
      if (context === null) {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete this._contexts[key];
      } else {
        this._contexts[key] = context;
      }
    }

    /**
     * @inheritDoc
     */
     setMeasurement(name, value, unit = '') {
      this._measurements[name] = { value, unit };
    }

    /**
     * @inheritDoc
     */
     setMetadata(newMetadata) {
      this.metadata = { ...this.metadata, ...newMetadata };
    }

    /**
     * @inheritDoc
     */
     finish(endTimestamp) {
      // This transaction is already finished, so we should not flush it again.
      if (this.endTimestamp !== undefined) {
        return undefined;
      }

      if (!this.name) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.warn('Transaction has no name, falling back to `<unlabeled transaction>`.');
        this.name = '<unlabeled transaction>';
      }

      // just sets the end timestamp
      super.finish(endTimestamp);

      if (this.sampled !== true) {
        // At this point if `sampled !== true` we want to discard the transaction.
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('[Tracing] Discarding transaction because its trace was not chosen to be sampled.');

        const client = this._hub.getClient();
        if (client) {
          client.recordDroppedEvent('sample_rate', 'transaction');
        }

        return undefined;
      }

      const finishedSpans = this.spanRecorder ? this.spanRecorder.spans.filter(s => s !== this && s.endTimestamp) : [];

      if (this._trimEnd && finishedSpans.length > 0) {
        this.endTimestamp = finishedSpans.reduce((prev, current) => {
          if (prev.endTimestamp && current.endTimestamp) {
            return prev.endTimestamp > current.endTimestamp ? prev : current;
          }
          return prev;
        }).endTimestamp;
      }

      const metadata = this.metadata;

      const transaction = {
        contexts: {
          ...this._contexts,
          // We don't want to override trace context
          trace: this.getTraceContext(),
        },
        spans: finishedSpans,
        start_timestamp: this.startTimestamp,
        tags: this.tags,
        timestamp: this.endTimestamp,
        transaction: this.name,
        type: 'transaction',
        sdkProcessingMetadata: {
          ...metadata,
          dynamicSamplingContext: this.getDynamicSamplingContext(),
        },
        ...(metadata.source && {
          transaction_info: {
            source: metadata.source,
          },
        }),
      };

      const hasMeasurements = Object.keys(this._measurements).length > 0;

      if (hasMeasurements) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
          logger.log(
            '[Measurements] Adding measurements to transaction',
            JSON.stringify(this._measurements, undefined, 2),
          );
        transaction.measurements = this._measurements;
      }

      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`);

      return this._hub.captureEvent(transaction);
    }

    /**
     * @inheritDoc
     */
     toContext() {
      const spanContext = super.toContext();

      return dropUndefinedKeys({
        ...spanContext,
        name: this.name,
        trimEnd: this._trimEnd,
      });
    }

    /**
     * @inheritDoc
     */
     updateWithContext(transactionContext) {
      super.updateWithContext(transactionContext);

      this.name = transactionContext.name || '';

      this._trimEnd = transactionContext.trimEnd;

      return this;
    }

    /**
     * @inheritdoc
     *
     * @experimental
     */
     getDynamicSamplingContext() {
      if (this._frozenDynamicSamplingContext) {
        return this._frozenDynamicSamplingContext;
      }

      const hub = this._hub || getCurrentHub();
      const client = hub && hub.getClient();

      if (!client) return {};

      const { environment, release } = client.getOptions() || {};
      const { publicKey: public_key } = client.getDsn() || {};

      const maybeSampleRate = this.metadata.sampleRate;
      const sample_rate = maybeSampleRate !== undefined ? maybeSampleRate.toString() : undefined;

      const scope = hub.getScope();
      const { segment: user_segment } = (scope && scope.getUser()) || {};

      const source = this.metadata.source;

      // We don't want to have a transaction name in the DSC if the source is "url" because URLs might contain PII
      const transaction = source && source !== 'url' ? this.name : undefined;

      const dsc = dropUndefinedKeys({
        environment,
        release,
        transaction,
        user_segment,
        public_key,
        trace_id: this.traceId,
        sample_rate,
      });

      // Uncomment if we want to make DSC immutable
      // this._frozenDynamicSamplingContext = dsc;

      return dsc;
    }
  }

  const DEFAULT_IDLE_TIMEOUT = 1000;
  const DEFAULT_FINAL_TIMEOUT = 30000;
  const DEFAULT_HEARTBEAT_INTERVAL = 5000;

  /**
   * @inheritDoc
   */
  class IdleTransactionSpanRecorder extends SpanRecorder {
     constructor(
        _pushActivity,
        _popActivity,
       transactionSpanId,
      maxlen,
    ) {
      super(maxlen);this._pushActivity = _pushActivity;this._popActivity = _popActivity;this.transactionSpanId = transactionSpanId;  }

    /**
     * @inheritDoc
     */
     add(span) {
      // We should make sure we do not push and pop activities for
      // the transaction that this span recorder belongs to.
      if (span.spanId !== this.transactionSpanId) {
        // We patch span.finish() to pop an activity after setting an endTimestamp.
        span.finish = (endTimestamp) => {
          span.endTimestamp = typeof endTimestamp === 'number' ? endTimestamp : timestampWithMs();
          this._popActivity(span.spanId);
        };

        // We should only push new activities if the span does not have an end timestamp.
        if (span.endTimestamp === undefined) {
          this._pushActivity(span.spanId);
        }
      }

      super.add(span);
    }
  }

  /**
   * An IdleTransaction is a transaction that automatically finishes. It does this by tracking child spans as activities.
   * You can have multiple IdleTransactions active, but if the `onScope` option is specified, the idle transaction will
   * put itself on the scope on creation.
   */
  class IdleTransaction extends Transaction {
    // Activities store a list of active spans
     __init() {this.activities = {};}

    // Track state of activities in previous heartbeat

    // Amount of times heartbeat has counted. Will cause transaction to finish after 3 beats.
     __init2() {this._heartbeatCounter = 0;}

    // We should not use heartbeat if we finished a transaction
     __init3() {this._finished = false;}

      __init4() {this._beforeFinishCallbacks = [];}

    /**
     * Timer that tracks Transaction idleTimeout
     */

     constructor(
      transactionContext,
        _idleHub,
      /**
       * The time to wait in ms until the idle transaction will be finished. This timer is started each time
       * there are no active spans on this transaction.
       */
        _idleTimeout = DEFAULT_IDLE_TIMEOUT,
      /**
       * The final value in ms that a transaction cannot exceed
       */
        _finalTimeout = DEFAULT_FINAL_TIMEOUT,
        _heartbeatInterval = DEFAULT_HEARTBEAT_INTERVAL,
      // Whether or not the transaction should put itself on the scope when it starts and pop itself off when it ends
        _onScope = false,
    ) {
      super(transactionContext, _idleHub);this._idleHub = _idleHub;this._idleTimeout = _idleTimeout;this._finalTimeout = _finalTimeout;this._heartbeatInterval = _heartbeatInterval;this._onScope = _onScope;IdleTransaction.prototype.__init.call(this);IdleTransaction.prototype.__init2.call(this);IdleTransaction.prototype.__init3.call(this);IdleTransaction.prototype.__init4.call(this);
      if (_onScope) {
        // There should only be one active transaction on the scope
        clearActiveTransaction(_idleHub);

        // We set the transaction here on the scope so error events pick up the trace
        // context and attach it to the error.
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`);
        _idleHub.configureScope(scope => scope.setSpan(this));
      }

      this._startIdleTimeout();
      setTimeout(() => {
        if (!this._finished) {
          this.setStatus('deadline_exceeded');
          this.finish();
        }
      }, this._finalTimeout);
    }

    /** {@inheritDoc} */
     finish(endTimestamp = timestampWithMs()) {
      this._finished = true;
      this.activities = {};

      if (this.spanRecorder) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
          logger.log('[Tracing] finishing IdleTransaction', new Date(endTimestamp * 1000).toISOString(), this.op);

        for (const callback of this._beforeFinishCallbacks) {
          callback(this, endTimestamp);
        }

        this.spanRecorder.spans = this.spanRecorder.spans.filter((span) => {
          // If we are dealing with the transaction itself, we just return it
          if (span.spanId === this.spanId) {
            return true;
          }

          // We cancel all pending spans with status "cancelled" to indicate the idle transaction was finished early
          if (!span.endTimestamp) {
            span.endTimestamp = endTimestamp;
            span.setStatus('cancelled');
            (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
              logger.log('[Tracing] cancelling span since transaction ended early', JSON.stringify(span, undefined, 2));
          }

          const keepSpan = span.startTimestamp < endTimestamp;
          if (!keepSpan) {
            (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
              logger.log(
                '[Tracing] discarding Span since it happened after Transaction was finished',
                JSON.stringify(span, undefined, 2),
              );
          }
          return keepSpan;
        });

        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('[Tracing] flushing IdleTransaction');
      } else {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('[Tracing] No active IdleTransaction');
      }

      // if `this._onScope` is `true`, the transaction put itself on the scope when it started
      if (this._onScope) {
        clearActiveTransaction(this._idleHub);
      }

      return super.finish(endTimestamp);
    }

    /**
     * Register a callback function that gets excecuted before the transaction finishes.
     * Useful for cleanup or if you want to add any additional spans based on current context.
     *
     * This is exposed because users have no other way of running something before an idle transaction
     * finishes.
     */
     registerBeforeFinishCallback(callback) {
      this._beforeFinishCallbacks.push(callback);
    }

    /**
     * @inheritDoc
     */
     initSpanRecorder(maxlen) {
      if (!this.spanRecorder) {
        const pushActivity = (id) => {
          if (this._finished) {
            return;
          }
          this._pushActivity(id);
        };
        const popActivity = (id) => {
          if (this._finished) {
            return;
          }
          this._popActivity(id);
        };

        this.spanRecorder = new IdleTransactionSpanRecorder(pushActivity, popActivity, this.spanId, maxlen);

        // Start heartbeat so that transactions do not run forever.
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('Starting heartbeat');
        this._pingHeartbeat();
      }
      this.spanRecorder.add(this);
    }

    /**
     * Cancels the existing idletimeout, if there is one
     */
     _cancelIdleTimeout() {
      if (this._idleTimeoutID) {
        clearTimeout(this._idleTimeoutID);
        this._idleTimeoutID = undefined;
      }
    }

    /**
     * Creates an idletimeout
     */
     _startIdleTimeout(endTimestamp) {
      this._cancelIdleTimeout();
      this._idleTimeoutID = setTimeout(() => {
        if (!this._finished && Object.keys(this.activities).length === 0) {
          this.finish(endTimestamp);
        }
      }, this._idleTimeout);
    }

    /**
     * Start tracking a specific activity.
     * @param spanId The span id that represents the activity
     */
     _pushActivity(spanId) {
      this._cancelIdleTimeout();
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log(`[Tracing] pushActivity: ${spanId}`);
      this.activities[spanId] = true;
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('[Tracing] new activities count', Object.keys(this.activities).length);
    }

    /**
     * Remove an activity from usage
     * @param spanId The span id that represents the activity
     */
     _popActivity(spanId) {
      if (this.activities[spanId]) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log(`[Tracing] popActivity ${spanId}`);
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete this.activities[spanId];
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('[Tracing] new activities count', Object.keys(this.activities).length);
      }

      if (Object.keys(this.activities).length === 0) {
        // We need to add the timeout here to have the real endtimestamp of the transaction
        // Remember timestampWithMs is in seconds, timeout is in ms
        const endTimestamp = timestampWithMs() + this._idleTimeout / 1000;
        this._startIdleTimeout(endTimestamp);
      }
    }

    /**
     * Checks when entries of this.activities are not changing for 3 beats.
     * If this occurs we finish the transaction.
     */
     _beat() {
      // We should not be running heartbeat if the idle transaction is finished.
      if (this._finished) {
        return;
      }

      const heartbeatString = Object.keys(this.activities).join('');

      if (heartbeatString === this._prevHeartbeatString) {
        this._heartbeatCounter++;
      } else {
        this._heartbeatCounter = 1;
      }

      this._prevHeartbeatString = heartbeatString;

      if (this._heartbeatCounter >= 3) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('[Tracing] Transaction finished because of no change for 3 heart beats');
        this.setStatus('deadline_exceeded');
        this.finish();
      } else {
        this._pingHeartbeat();
      }
    }

    /**
     * Pings the heartbeat
     */
     _pingHeartbeat() {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`);
      setTimeout(() => {
        this._beat();
      }, this._heartbeatInterval);
    }
  }

  /**
   * Reset transaction on scope to `undefined`
   */
  function clearActiveTransaction(hub) {
    const scope = hub.getScope();
    if (scope) {
      const transaction = scope.getTransaction();
      if (transaction) {
        scope.setSpan(undefined);
      }
    }
  }

  /** Returns all trace headers that are currently on the top scope. */
  function traceHeaders() {
    const scope = this.getScope();
    if (scope) {
      const span = scope.getSpan();
      if (span) {
        return {
          'sentry-trace': span.toTraceparent(),
        };
      }
    }
    return {};
  }

  /**
   * Makes a sampling decision for the given transaction and stores it on the transaction.
   *
   * Called every time a transaction is created. Only transactions which emerge with a `sampled` value of `true` will be
   * sent to Sentry.
   *
   * @param transaction: The transaction needing a sampling decision
   * @param options: The current client's options, so we can access `tracesSampleRate` and/or `tracesSampler`
   * @param samplingContext: Default and user-provided data which may be used to help make the decision
   *
   * @returns The given transaction with its `sampled` value set
   */
  function sample(
    transaction,
    options,
    samplingContext,
  ) {
    // nothing to do if tracing is not enabled
    if (!hasTracingEnabled(options)) {
      transaction.sampled = false;
      return transaction;
    }

    // if the user has forced a sampling decision by passing a `sampled` value in their transaction context, go with that
    if (transaction.sampled !== undefined) {
      transaction.setMetadata({
        sampleRate: Number(transaction.sampled),
      });
      return transaction;
    }

    // we would have bailed already if neither `tracesSampler` nor `tracesSampleRate` were defined, so one of these should
    // work; prefer the hook if so
    let sampleRate;
    if (typeof options.tracesSampler === 'function') {
      sampleRate = options.tracesSampler(samplingContext);
      transaction.setMetadata({
        sampleRate: Number(sampleRate),
      });
    } else if (samplingContext.parentSampled !== undefined) {
      sampleRate = samplingContext.parentSampled;
    } else {
      sampleRate = options.tracesSampleRate;
      transaction.setMetadata({
        sampleRate: Number(sampleRate),
      });
    }

    // Since this is coming from the user (or from a function provided by the user), who knows what we might get. (The
    // only valid values are booleans or numbers between 0 and 1.)
    if (!isValidSampleRate(sampleRate)) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.warn('[Tracing] Discarding transaction because of invalid sample rate.');
      transaction.sampled = false;
      return transaction;
    }

    // if the function returned 0 (or false), or if `tracesSampleRate` is 0, it's a sign the transaction should be dropped
    if (!sampleRate) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        logger.log(
          `[Tracing] Discarding transaction because ${
          typeof options.tracesSampler === 'function'
            ? 'tracesSampler returned 0 or false'
            : 'a negative sampling decision was inherited or tracesSampleRate is set to 0'
        }`,
        );
      transaction.sampled = false;
      return transaction;
    }

    // Now we roll the dice. Math.random is inclusive of 0, but not of 1, so strict < is safe here. In case sampleRate is
    // a boolean, the < comparison will cause it to be automatically cast to 1 if it's true and 0 if it's false.
    transaction.sampled = Math.random() < (sampleRate );

    // if we're not going to keep it, we're done
    if (!transaction.sampled) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        logger.log(
          `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(
          sampleRate,
        )})`,
        );
      return transaction;
    }

    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log(`[Tracing] starting ${transaction.op} transaction - ${transaction.name}`);
    return transaction;
  }

  /**
   * Checks the given sample rate to make sure it is valid type and value (a boolean, or a number between 0 and 1).
   */
  function isValidSampleRate(rate) {
    // we need to check NaN explicitly because it's of type 'number' and therefore wouldn't get caught by this typecheck
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (isNaN$1(rate) || !(typeof rate === 'number' || typeof rate === 'boolean')) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        logger.warn(
          `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(
          rate,
        )} of type ${JSON.stringify(typeof rate)}.`,
        );
      return false;
    }

    // in case sampleRate is a boolean, it will get automatically cast to 1 if it's true and 0 if it's false
    if (rate < 0 || rate > 1) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        logger.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${rate}.`);
      return false;
    }
    return true;
  }

  /**
   * Creates a new transaction and adds a sampling decision if it doesn't yet have one.
   *
   * The Hub.startTransaction method delegates to this method to do its work, passing the Hub instance in as `this`, as if
   * it had been called on the hub directly. Exists as a separate function so that it can be injected into the class as an
   * "extension method."
   *
   * @param this: The Hub starting the transaction
   * @param transactionContext: Data used to configure the transaction
   * @param CustomSamplingContext: Optional data to be provided to the `tracesSampler` function (if any)
   *
   * @returns The new transaction
   *
   * @see {@link Hub.startTransaction}
   */
  function _startTransaction(

    transactionContext,
    customSamplingContext,
  ) {
    const client = this.getClient();
    const options = (client && client.getOptions()) || {};

    const configInstrumenter = options.instrumenter || 'sentry';
    const transactionInstrumenter = transactionContext.instrumenter || 'sentry';

    if (configInstrumenter !== transactionInstrumenter) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        logger.error(
          `A transaction was started with instrumenter=\`${transactionInstrumenter}\`, but the SDK is configured with the \`${configInstrumenter}\` instrumenter.
The transaction will not be sampled. Please use the ${configInstrumenter} instrumentation to start transactions.`,
        );

      transactionContext.sampled = false;
    }

    let transaction = new Transaction(transactionContext, this);
    transaction = sample(transaction, options, {
      parentSampled: transactionContext.parentSampled,
      transactionContext,
      ...customSamplingContext,
    });
    if (transaction.sampled) {
      transaction.initSpanRecorder(options._experiments && (options._experiments.maxSpans ));
    }
    return transaction;
  }

  /**
   * Create new idle transaction.
   */
  function startIdleTransaction(
    hub,
    transactionContext,
    idleTimeout,
    finalTimeout,
    onScope,
    customSamplingContext,
    heartbeatInterval,
  ) {
    const client = hub.getClient();
    const options = (client && client.getOptions()) || {};

    let transaction = new IdleTransaction(transactionContext, hub, idleTimeout, finalTimeout, heartbeatInterval, onScope);
    transaction = sample(transaction, options, {
      parentSampled: transactionContext.parentSampled,
      transactionContext,
      ...customSamplingContext,
    });
    if (transaction.sampled) {
      transaction.initSpanRecorder(options._experiments && (options._experiments.maxSpans ));
    }
    return transaction;
  }

  /**
   * @private
   */
  function _addTracingExtensions() {
    const carrier = getMainCarrier();
    if (!carrier.__SENTRY__) {
      return;
    }
    carrier.__SENTRY__.extensions = carrier.__SENTRY__.extensions || {};
    if (!carrier.__SENTRY__.extensions.startTransaction) {
      carrier.__SENTRY__.extensions.startTransaction = _startTransaction;
    }
    if (!carrier.__SENTRY__.extensions.traceHeaders) {
      carrier.__SENTRY__.extensions.traceHeaders = traceHeaders;
    }
  }

  /**
   * @private
   */
  function _autoloadDatabaseIntegrations() {
    const carrier = getMainCarrier();
    if (!carrier.__SENTRY__) {
      return;
    }

    const packageToIntegrationMapping = {
      mongodb() {
        const integration = dynamicRequire(module, './integrations/node/mongo')

  ;
        return new integration.Mongo();
      },
      mongoose() {
        const integration = dynamicRequire(module, './integrations/node/mongo')

  ;
        return new integration.Mongo({ mongoose: true });
      },
      mysql() {
        const integration = dynamicRequire(module, './integrations/node/mysql')

  ;
        return new integration.Mysql();
      },
      pg() {
        const integration = dynamicRequire(module, './integrations/node/postgres')

  ;
        return new integration.Postgres();
      },
    };

    const mappedPackages = Object.keys(packageToIntegrationMapping)
      .filter(moduleName => !!loadModule(moduleName))
      .map(pkg => {
        try {
          return packageToIntegrationMapping[pkg]();
        } catch (e) {
          return undefined;
        }
      })
      .filter(p => p) ;

    if (mappedPackages.length > 0) {
      carrier.__SENTRY__.integrations = [...(carrier.__SENTRY__.integrations || []), ...mappedPackages];
    }
  }

  /**
   * This patches the global object and injects the Tracing extensions methods
   */
  function addExtensionMethods() {
    _addTracingExtensions();

    // Detect and automatically load specified integrations.
    if (isNodeEnv()) {
      _autoloadDatabaseIntegrations();
    }

    // If an error happens globally, we should make sure transaction status is set to error.
    registerErrorInstrumentation();
  }

  /**
   * Polyfill for the optional chain operator, `?.`, given previous conversion of the expression into an array of values,
   * descriptors, and functions.
   *
   * Adapted from Sucrase (https://github.com/alangpierce/sucrase)
   * See https://github.com/alangpierce/sucrase/blob/265887868966917f3b924ce38dfad01fbab1329f/src/transformers/OptionalChainingNullishTransformer.ts#L15
   *
   * @param ops Array result of expression conversion
   * @returns The value of the expression
   */
  function _optionalChain(ops) {
    let lastAccessLHS = undefined;
    let value = ops[0];
    let i = 1;
    while (i < ops.length) {
      const op = ops[i] ;
      const fn = ops[i + 1] ;
      i += 2;
      // by checking for loose equality to `null`, we catch both `null` and `undefined`
      if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
        // really we're meaning to return `undefined` as an actual value here, but it saves bytes not to write it
        return;
      }
      if (op === 'access' || op === 'optionalAccess') {
        lastAccessLHS = value;
        value = fn(value);
      } else if (op === 'call' || op === 'optionalCall') {
        value = fn((...args) => (value ).call(lastAccessLHS, ...args));
        lastAccessLHS = undefined;
      }
    }
    return value;
  }

  /**
   * Check if Sentry auto-instrumentation should be disabled.
   *
   * @param getCurrentHub A method to fetch the current hub
   * @returns boolean
   */
  function shouldDisableAutoInstrumentation(getCurrentHub) {
    const clientOptions = _optionalChain([getCurrentHub, 'call', _ => _(), 'access', _2 => _2.getClient, 'call', _3 => _3(), 'optionalAccess', _4 => _4.getOptions, 'call', _5 => _5()]);
    const instrumenter = _optionalChain([clientOptions, 'optionalAccess', _6 => _6.instrumenter]) || 'sentry';

    return instrumenter !== 'sentry';
  }

  /**
   * Express integration
   *
   * Provides an request and error handler for Express framework as well as tracing capabilities
   */
  class Express  {
    /**
     * @inheritDoc
     */
     static __initStatic() {this.id = 'Express';}

    /**
     * @inheritDoc
     */
     __init() {this.name = Express.id;}

    /**
     * Express App instance
     */

    /**
     * @inheritDoc
     */
     constructor(options = {}) {Express.prototype.__init.call(this);
      this._router = options.router || options.app;
      this._methods = (Array.isArray(options.methods) ? options.methods : []).concat('use');
    }

    /**
     * @inheritDoc
     */
     setupOnce(_, getCurrentHub) {
      if (!this._router) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.error('ExpressIntegration is missing an Express instance');
        return;
      }

      if (shouldDisableAutoInstrumentation(getCurrentHub)) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('Express Integration is skipped because of instrumenter configuration.');
        return;
      }

      instrumentMiddlewares(this._router, this._methods);
      instrumentRouter(this._router );
    }
  }Express.__initStatic();

  /**
   * Wraps original middleware function in a tracing call, which stores the info about the call as a span,
   * and finishes it once the middleware is done invoking.
   *
   * Express middlewares have 3 various forms, thus we have to take care of all of them:
   * // sync
   * app.use(function (req, res) { ... })
   * // async
   * app.use(function (req, res, next) { ... })
   * // error handler
   * app.use(function (err, req, res, next) { ... })
   *
   * They all internally delegate to the `router[method]` of the given application instance.
   */
  // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
  function wrap(fn, method) {
    const arity = fn.length;

    switch (arity) {
      case 2: {
        return function ( req, res) {
          const transaction = res.__sentry_transaction;
          if (transaction) {
            const span = transaction.startChild({
              description: fn.name,
              op: `middleware.express.${method}`,
            });
            res.once('finish', () => {
              span.finish();
            });
          }
          return fn.call(this, req, res);
        };
      }
      case 3: {
        return function (

          req,
          res,
          next,
        ) {
          const transaction = res.__sentry_transaction;
          const span = _optionalChain([transaction, 'optionalAccess', _2 => _2.startChild, 'call', _3 => _3({
            description: fn.name,
            op: `middleware.express.${method}`,
          })]);
          fn.call(this, req, res, function ( ...args) {
            _optionalChain([span, 'optionalAccess', _4 => _4.finish, 'call', _5 => _5()]);
            next.call(this, ...args);
          });
        };
      }
      case 4: {
        return function (

          err,
          req,
          res,
          next,
        ) {
          const transaction = res.__sentry_transaction;
          const span = _optionalChain([transaction, 'optionalAccess', _6 => _6.startChild, 'call', _7 => _7({
            description: fn.name,
            op: `middleware.express.${method}`,
          })]);
          fn.call(this, err, req, res, function ( ...args) {
            _optionalChain([span, 'optionalAccess', _8 => _8.finish, 'call', _9 => _9()]);
            next.call(this, ...args);
          });
        };
      }
      default: {
        throw new Error(`Express middleware takes 2-4 arguments. Got: ${arity}`);
      }
    }
  }

  /**
   * Takes all the function arguments passed to the original `app` or `router` method, eg. `app.use` or `router.use`
   * and wraps every function, as well as array of functions with a call to our `wrap` method.
   * We have to take care of the arrays as well as iterate over all of the arguments,
   * as `app.use` can accept middlewares in few various forms.
   *
   * app.use([<path>], <fn>)
   * app.use([<path>], <fn>, ...<fn>)
   * app.use([<path>], ...<fn>[])
   */
  function wrapMiddlewareArgs(args, method) {
    return args.map((arg) => {
      if (typeof arg === 'function') {
        return wrap(arg, method);
      }

      if (Array.isArray(arg)) {
        return arg.map((a) => {
          if (typeof a === 'function') {
            return wrap(a, method);
          }
          return a;
        });
      }

      return arg;
    });
  }

  /**
   * Patches original router to utilize our tracing functionality
   */
  function patchMiddleware(router, method) {
    const originalCallback = router[method];

    router[method] = function (...args) {
      return originalCallback.call(this, ...wrapMiddlewareArgs(args, method));
    };

    return router;
  }

  /**
   * Patches original router methods
   */
  function instrumentMiddlewares(router, methods = []) {
    methods.forEach((method) => patchMiddleware(router, method));
  }

  /**
   * Patches the prototype of Express.Router to accumulate the resolved route
   * if a layer instance's `match` function was called and it returned a successful match.
   *
   * @see https://github.com/expressjs/express/blob/master/lib/router/index.js
   *
   * @param appOrRouter the router instance which can either be an app (i.e. top-level) or a (nested) router.
   */
  function instrumentRouter(appOrRouter) {
    // This is how we can distinguish between app and routers
    const isApp = 'settings' in appOrRouter;

    // In case the app's top-level router hasn't been initialized yet, we have to do it now
    if (isApp && appOrRouter._router === undefined && appOrRouter.lazyrouter) {
      appOrRouter.lazyrouter();
    }

    const router = isApp ? appOrRouter._router : appOrRouter;

    if (!router) {
      /*
      If we end up here, this means likely that this integration is used with Express 3 or Express 5.
      For now, we don't support these versions (3 is very old and 5 is still in beta). To support Express 5,
      we'd need to make more changes to the routing instrumentation because the router is no longer part of
      the Express core package but maintained in its own package. The new router has different function
      signatures and works slightly differently, demanding more changes than just taking the router from
      `app.router` instead of `app._router`.
      @see https://github.com/pillarjs/router

      TODO: Proper Express 5 support
      */
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.debug('Cannot instrument router for URL Parameterization (did not find a valid router).');
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.debug('Routing instrumentation is currently only supported in Express 4.');
      return;
    }

    const routerProto = Object.getPrototypeOf(router) ;

    const originalProcessParams = routerProto.process_params;
    routerProto.process_params = function process_params(
      layer,
      called,
      req,
      res,
      done,
    ) {
      // Base case: We're in the first part of the URL (thus we start with the root '/')
      if (!req._reconstructedRoute) {
        req._reconstructedRoute = '';
      }

      // If the layer's partial route has params, is a regex or an array, the route is stored in layer.route.
      const { layerRoutePath, isRegex, isArray, numExtraSegments } = getLayerRoutePathInfo(layer);

      if (layerRoutePath || isRegex || isArray) {
        req._hasParameters = true;
      }

      // Otherwise, the hardcoded path (i.e. a partial route without params) is stored in layer.path
      const partialRoute = layerRoutePath || layer.path || '';

      // Normalize the partial route so that it doesn't contain leading or trailing slashes
      // and exclude empty or '*' wildcard routes.
      // The exclusion of '*' routes is our best effort to not "pollute" the transaction name
      // with interim handlers (e.g. ones that check authentication or do other middleware stuff).
      // We want to end up with the parameterized URL of the incoming request without any extraneous path segments.
      const finalPartialRoute = partialRoute
        .split('/')
        .filter(segment => segment.length > 0 && (isRegex || isArray || !segment.includes('*')))
        .join('/');

      // If we found a valid partial URL, we append it to the reconstructed route
      if (finalPartialRoute && finalPartialRoute.length > 0) {
        // If the partial route is from a regex route, we append a '/' to close the regex
        req._reconstructedRoute += `/${finalPartialRoute}${isRegex ? '/' : ''}`;
      }

      // Now we check if we are in the "last" part of the route. We determine this by comparing the
      // number of URL segments from the original URL to that of our reconstructed parameterized URL.
      // If we've reached our final destination, we update the transaction name.
      const urlLength = getNumberOfUrlSegments(req.originalUrl || '') + numExtraSegments;
      const routeLength = getNumberOfUrlSegments(req._reconstructedRoute);

      if (urlLength === routeLength) {
        if (!req._hasParameters) {
          if (req._reconstructedRoute !== req.originalUrl) {
            req._reconstructedRoute = req.originalUrl;
          }
        }

        const transaction = res.__sentry_transaction;
        if (transaction && transaction.metadata.source !== 'custom') {
          // If the request URL is '/' or empty, the reconstructed route will be empty.
          // Therefore, we fall back to setting the final route to '/' in this case.
          const finalRoute = req._reconstructedRoute || '/';

          transaction.setName(...extractPathForTransaction(req, { path: true, method: true, customRoute: finalRoute }));
        }
      }

      return originalProcessParams.call(this, layer, called, req, res, done);
    };
  }

  /**
   * Extracts and stringifies the layer's route which can either be a string with parameters (`users/:id`),
   * a RegEx (`/test/`) or an array of strings and regexes (`['/path1', /\/path[2-5]/, /path/:id]`). Additionally
   * returns extra information about the route, such as if the route is defined as regex or as an array.
   *
   * @param layer the layer to extract the stringified route from
   *
   * @returns an object containing the stringified route, a flag determining if the route was a regex
   *          and the number of extra segments to the matched path that are additionally in the route,
   *          if the route was an array (defaults to 0).
   */
  function getLayerRoutePathInfo(layer) {
    const lrp = _optionalChain([layer, 'access', _10 => _10.route, 'optionalAccess', _11 => _11.path]);

    const isRegex = isRegExp(lrp);
    const isArray = Array.isArray(lrp);

    if (!lrp) {
      return { isRegex, isArray, numExtraSegments: 0 };
    }

    const numExtraSegments = isArray
      ? Math.max(getNumberOfArrayUrlSegments(lrp ) - getNumberOfUrlSegments(layer.path || ''), 0)
      : 0;

    const layerRoutePath = getLayerRoutePathString(isArray, lrp);

    return { layerRoutePath, isRegex, isArray, numExtraSegments };
  }

  /**
   * Returns the number of URL segments in an array of routes
   *
   * Example: ['/api/test', /\/api\/post[0-9]/, '/users/:id/details`] -> 7
   */
  function getNumberOfArrayUrlSegments(routesArray) {
    return routesArray.reduce((accNumSegments, currentRoute) => {
      // array members can be a RegEx -> convert them toString
      return accNumSegments + getNumberOfUrlSegments(currentRoute.toString());
    }, 0);
  }

  /**
   * Extracts and returns the stringified version of the layers route path
   * Handles route arrays (by joining the paths together) as well as RegExp and normal
   * string values (in the latter case the toString conversion is technically unnecessary but
   * it doesn't hurt us either).
   */
  function getLayerRoutePathString(isArray, lrp) {
    if (isArray) {
      return (lrp ).map(r => r.toString()).join(',');
    }
    return lrp && lrp.toString();
  }

  /** Tracing integration for node-postgres package */
  class Postgres  {
    /**
     * @inheritDoc
     */
     static __initStatic() {this.id = 'Postgres';}

    /**
     * @inheritDoc
     */
     __init() {this.name = Postgres.id;}

     constructor(options = {}) {Postgres.prototype.__init.call(this);
      this._usePgNative = !!options.usePgNative;
    }

    /**
     * @inheritDoc
     */
     setupOnce(_, getCurrentHub) {
      if (shouldDisableAutoInstrumentation(getCurrentHub)) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('Postgres Integration is skipped because of instrumenter configuration.');
        return;
      }

      const pkg = loadModule('pg');

      if (!pkg) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.error('Postgres Integration was unable to require `pg` package.');
        return;
      }

      if (this._usePgNative && !_optionalChain([pkg, 'access', _2 => _2.native, 'optionalAccess', _3 => _3.Client])) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.error("Postgres Integration was unable to access 'pg-native' bindings.");
        return;
      }

      const { Client } = this._usePgNative ? pkg.native : pkg;

      /**
       * function (query, callback) => void
       * function (query, params, callback) => void
       * function (query) => Promise
       * function (query, params) => Promise
       * function (pg.Cursor) => pg.Cursor
       */
      fill(Client.prototype, 'query', function (orig) {
        return function ( config, values, callback) {
          const scope = getCurrentHub().getScope();
          const parentSpan = _optionalChain([scope, 'optionalAccess', _4 => _4.getSpan, 'call', _5 => _5()]);
          const span = _optionalChain([parentSpan, 'optionalAccess', _6 => _6.startChild, 'call', _7 => _7({
            description: typeof config === 'string' ? config : (config ).text,
            op: 'db',
          })]);

          if (typeof callback === 'function') {
            return orig.call(this, config, values, function (err, result) {
              _optionalChain([span, 'optionalAccess', _8 => _8.finish, 'call', _9 => _9()]);
              callback(err, result);
            });
          }

          if (typeof values === 'function') {
            return orig.call(this, config, function (err, result) {
              _optionalChain([span, 'optionalAccess', _10 => _10.finish, 'call', _11 => _11()]);
              values(err, result);
            });
          }

          const rv = typeof values !== 'undefined' ? orig.call(this, config, values) : orig.call(this, config);

          if (isThenable(rv)) {
            return rv.then((res) => {
              _optionalChain([span, 'optionalAccess', _12 => _12.finish, 'call', _13 => _13()]);
              return res;
            });
          }

          _optionalChain([span, 'optionalAccess', _14 => _14.finish, 'call', _15 => _15()]);
          return rv;
        };
      });
    }
  }Postgres.__initStatic();

  /** Tracing integration for node-mysql package */
  class Mysql  {constructor() { Mysql.prototype.__init.call(this); }
    /**
     * @inheritDoc
     */
     static __initStatic() {this.id = 'Mysql';}

    /**
     * @inheritDoc
     */
     __init() {this.name = Mysql.id;}

    /**
     * @inheritDoc
     */
     setupOnce(_, getCurrentHub) {
      if (shouldDisableAutoInstrumentation(getCurrentHub)) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('Mysql Integration is skipped because of instrumenter configuration.');
        return;
      }

      const pkg = loadModule('mysql/lib/Connection.js');

      if (!pkg) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.error('Mysql Integration was unable to require `mysql` package.');
        return;
      }

      // The original function will have one of these signatures:
      //    function (callback) => void
      //    function (options, callback) => void
      //    function (options, values, callback) => void
      fill(pkg, 'createQuery', function (orig) {
        return function ( options, values, callback) {
          const scope = getCurrentHub().getScope();
          const parentSpan = _optionalChain([scope, 'optionalAccess', _2 => _2.getSpan, 'call', _3 => _3()]);
          const span = _optionalChain([parentSpan, 'optionalAccess', _4 => _4.startChild, 'call', _5 => _5({
            description: typeof options === 'string' ? options : (options ).sql,
            op: 'db',
          })]);

          if (typeof callback === 'function') {
            return orig.call(this, options, values, function (err, result, fields) {
              _optionalChain([span, 'optionalAccess', _6 => _6.finish, 'call', _7 => _7()]);
              callback(err, result, fields);
            });
          }

          if (typeof values === 'function') {
            return orig.call(this, options, function (err, result, fields) {
              _optionalChain([span, 'optionalAccess', _8 => _8.finish, 'call', _9 => _9()]);
              values(err, result, fields);
            });
          }

          return orig.call(this, options, values, callback);
        };
      });
    }
  }Mysql.__initStatic();

  // This allows us to use the same array for both defaults options and the type itself.
  // (note `as const` at the end to make it a union of string literal types (i.e. "a" | "b" | ... )
  // and not just a string[])

  const OPERATIONS = [
    'aggregate', // aggregate(pipeline, options, callback)
    'bulkWrite', // bulkWrite(operations, options, callback)
    'countDocuments', // countDocuments(query, options, callback)
    'createIndex', // createIndex(fieldOrSpec, options, callback)
    'createIndexes', // createIndexes(indexSpecs, options, callback)
    'deleteMany', // deleteMany(filter, options, callback)
    'deleteOne', // deleteOne(filter, options, callback)
    'distinct', // distinct(key, query, options, callback)
    'drop', // drop(options, callback)
    'dropIndex', // dropIndex(indexName, options, callback)
    'dropIndexes', // dropIndexes(options, callback)
    'estimatedDocumentCount', // estimatedDocumentCount(options, callback)
    'find', // find(query, options, callback)
    'findOne', // findOne(query, options, callback)
    'findOneAndDelete', // findOneAndDelete(filter, options, callback)
    'findOneAndReplace', // findOneAndReplace(filter, replacement, options, callback)
    'findOneAndUpdate', // findOneAndUpdate(filter, update, options, callback)
    'indexes', // indexes(options, callback)
    'indexExists', // indexExists(indexes, options, callback)
    'indexInformation', // indexInformation(options, callback)
    'initializeOrderedBulkOp', // initializeOrderedBulkOp(options, callback)
    'insertMany', // insertMany(docs, options, callback)
    'insertOne', // insertOne(doc, options, callback)
    'isCapped', // isCapped(options, callback)
    'mapReduce', // mapReduce(map, reduce, options, callback)
    'options', // options(options, callback)
    'parallelCollectionScan', // parallelCollectionScan(options, callback)
    'rename', // rename(newName, options, callback)
    'replaceOne', // replaceOne(filter, doc, options, callback)
    'stats', // stats(options, callback)
    'updateMany', // updateMany(filter, update, options, callback)
    'updateOne', // updateOne(filter, update, options, callback)
  ] ;

  // All of the operations above take `options` and `callback` as their final parameters, but some of them
  // take additional parameters as well. For those operations, this is a map of
  // { <operation name>:  [<names of additional parameters>] }, as a way to know what to call the operation's
  // positional arguments when we add them to the span's `data` object later
  const OPERATION_SIGNATURES

   = {
    // aggregate intentionally not included because `pipeline` arguments are too complex to serialize well
    // see https://github.com/getsentry/sentry-javascript/pull/3102
    bulkWrite: ['operations'],
    countDocuments: ['query'],
    createIndex: ['fieldOrSpec'],
    createIndexes: ['indexSpecs'],
    deleteMany: ['filter'],
    deleteOne: ['filter'],
    distinct: ['key', 'query'],
    dropIndex: ['indexName'],
    find: ['query'],
    findOne: ['query'],
    findOneAndDelete: ['filter'],
    findOneAndReplace: ['filter', 'replacement'],
    findOneAndUpdate: ['filter', 'update'],
    indexExists: ['indexes'],
    insertMany: ['docs'],
    insertOne: ['doc'],
    mapReduce: ['map', 'reduce'],
    rename: ['newName'],
    replaceOne: ['filter', 'doc'],
    updateMany: ['filter', 'update'],
    updateOne: ['filter', 'update'],
  };

  function isCursor(maybeCursor) {
    return maybeCursor && typeof maybeCursor === 'object' && maybeCursor.once && typeof maybeCursor.once === 'function';
  }

  /** Tracing integration for mongo package */
  class Mongo  {
    /**
     * @inheritDoc
     */
     static __initStatic() {this.id = 'Mongo';}

    /**
     * @inheritDoc
     */
     __init() {this.name = Mongo.id;}

    /**
     * @inheritDoc
     */
     constructor(options = {}) {Mongo.prototype.__init.call(this);
      this._operations = Array.isArray(options.operations) ? options.operations : (OPERATIONS );
      this._describeOperations = 'describeOperations' in options ? options.describeOperations : true;
      this._useMongoose = !!options.useMongoose;
    }

    /**
     * @inheritDoc
     */
     setupOnce(_, getCurrentHub) {
      if (shouldDisableAutoInstrumentation(getCurrentHub)) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('Mongo Integration is skipped because of instrumenter configuration.');
        return;
      }

      const moduleName = this._useMongoose ? 'mongoose' : 'mongodb';
      const pkg = loadModule(moduleName);

      if (!pkg) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.error(`Mongo Integration was unable to require \`${moduleName}\` package.`);
        return;
      }

      this._instrumentOperations(pkg.Collection, this._operations, getCurrentHub);
    }

    /**
     * Patches original collection methods
     */
     _instrumentOperations(collection, operations, getCurrentHub) {
      operations.forEach((operation) => this._patchOperation(collection, operation, getCurrentHub));
    }

    /**
     * Patches original collection to utilize our tracing functionality
     */
     _patchOperation(collection, operation, getCurrentHub) {
      if (!(operation in collection.prototype)) return;

      const getSpanContext = this._getSpanContextFromOperationArguments.bind(this);

      fill(collection.prototype, operation, function (orig) {
        return function ( ...args) {
          const lastArg = args[args.length - 1];
          const scope = getCurrentHub().getScope();
          const parentSpan = _optionalChain([scope, 'optionalAccess', _2 => _2.getSpan, 'call', _3 => _3()]);

          // Check if the operation was passed a callback. (mapReduce requires a different check, as
          // its (non-callback) arguments can also be functions.)
          if (typeof lastArg !== 'function' || (operation === 'mapReduce' && args.length === 2)) {
            const span = _optionalChain([parentSpan, 'optionalAccess', _4 => _4.startChild, 'call', _5 => _5(getSpanContext(this, operation, args))]);
            const maybePromiseOrCursor = orig.call(this, ...args);

            if (isThenable(maybePromiseOrCursor)) {
              return maybePromiseOrCursor.then((res) => {
                _optionalChain([span, 'optionalAccess', _6 => _6.finish, 'call', _7 => _7()]);
                return res;
              });
            }
            // If the operation returns a Cursor
            // we need to attach a listener to it to finish the span when the cursor is closed.
            else if (isCursor(maybePromiseOrCursor)) {
              const cursor = maybePromiseOrCursor ;

              try {
                cursor.once('close', () => {
                  _optionalChain([span, 'optionalAccess', _8 => _8.finish, 'call', _9 => _9()]);
                });
              } catch (e) {
                // If the cursor is already closed, `once` will throw an error. In that case, we can
                // finish the span immediately.
                _optionalChain([span, 'optionalAccess', _10 => _10.finish, 'call', _11 => _11()]);
              }

              return cursor;
            } else {
              _optionalChain([span, 'optionalAccess', _12 => _12.finish, 'call', _13 => _13()]);
              return maybePromiseOrCursor;
            }
          }

          const span = _optionalChain([parentSpan, 'optionalAccess', _14 => _14.startChild, 'call', _15 => _15(getSpanContext(this, operation, args.slice(0, -1)))]);

          return orig.call(this, ...args.slice(0, -1), function (err, result) {
            _optionalChain([span, 'optionalAccess', _16 => _16.finish, 'call', _17 => _17()]);
            lastArg(err, result);
          });
        };
      });
    }

    /**
     * Form a SpanContext based on the user input to a given operation.
     */
     _getSpanContextFromOperationArguments(
      collection,
      operation,
      args,
    ) {
      const data = {
        collectionName: collection.collectionName,
        dbName: collection.dbName,
        namespace: collection.namespace,
      };
      const spanContext = {
        op: 'db',
        description: operation,
        data,
      };

      // If the operation takes no arguments besides `options` and `callback`, or if argument
      // collection is disabled for this operation, just return early.
      const signature = OPERATION_SIGNATURES[operation];
      const shouldDescribe = Array.isArray(this._describeOperations)
        ? this._describeOperations.includes(operation)
        : this._describeOperations;

      if (!signature || !shouldDescribe) {
        return spanContext;
      }

      try {
        // Special case for `mapReduce`, as the only one accepting functions as arguments.
        if (operation === 'mapReduce') {
          const [map, reduce] = args ;
          data[signature[0]] = typeof map === 'string' ? map : map.name || '<anonymous>';
          data[signature[1]] = typeof reduce === 'string' ? reduce : reduce.name || '<anonymous>';
        } else {
          for (let i = 0; i < signature.length; i++) {
            data[signature[i]] = JSON.stringify(args[i]);
          }
        }
      } catch (_oO) {
        // no-empty
      }

      return spanContext;
    }
  }Mongo.__initStatic();

  function isValidPrismaClient(possibleClient) {
    return possibleClient && !!(possibleClient )['$use'];
  }

  /** Tracing integration for @prisma/client package */
  class Prisma  {
    /**
     * @inheritDoc
     */
     static __initStatic() {this.id = 'Prisma';}

    /**
     * @inheritDoc
     */
     __init() {this.name = Prisma.id;}

    /**
     * Prisma ORM Client Instance
     */

    /**
     * @inheritDoc
     */
     constructor(options = {}) {Prisma.prototype.__init.call(this);
      if (isValidPrismaClient(options.client)) {
        this._client = options.client;
      } else {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
          logger.warn(
            `Unsupported Prisma client provided to PrismaIntegration. Provided client: ${JSON.stringify(options.client)}`,
          );
      }
    }

    /**
     * @inheritDoc
     */
     setupOnce(_, getCurrentHub) {
      if (!this._client) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.error('PrismaIntegration is missing a Prisma Client Instance');
        return;
      }

      if (shouldDisableAutoInstrumentation(getCurrentHub)) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('Prisma Integration is skipped because of instrumenter configuration.');
        return;
      }

      this._client.$use((params, next) => {
        const scope = getCurrentHub().getScope();
        const parentSpan = _optionalChain([scope, 'optionalAccess', _2 => _2.getSpan, 'call', _3 => _3()]);

        const action = params.action;
        const model = params.model;

        const span = _optionalChain([parentSpan, 'optionalAccess', _4 => _4.startChild, 'call', _5 => _5({
          description: model ? `${model} ${action}` : action,
          op: 'db.sql.prisma',
        })]);

        const rv = next(params);

        if (isThenable(rv)) {
          return rv.then((res) => {
            _optionalChain([span, 'optionalAccess', _6 => _6.finish, 'call', _7 => _7()]);
            return res;
          });
        }

        _optionalChain([span, 'optionalAccess', _8 => _8.finish, 'call', _9 => _9()]);
        return rv;
      });
    }
  }Prisma.__initStatic();

  /** Tracing integration for graphql package */
  class GraphQL  {constructor() { GraphQL.prototype.__init.call(this); }
    /**
     * @inheritDoc
     */
     static __initStatic() {this.id = 'GraphQL';}

    /**
     * @inheritDoc
     */
     __init() {this.name = GraphQL.id;}

    /**
     * @inheritDoc
     */
     setupOnce(_, getCurrentHub) {
      if (shouldDisableAutoInstrumentation(getCurrentHub)) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('GraphQL Integration is skipped because of instrumenter configuration.');
        return;
      }

      const pkg = loadModule

  ('graphql/execution/execute.js');

      if (!pkg) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.error('GraphQL Integration was unable to require graphql/execution package.');
        return;
      }

      fill(pkg, 'execute', function (orig) {
        return function ( ...args) {
          const scope = getCurrentHub().getScope();
          const parentSpan = _optionalChain([scope, 'optionalAccess', _2 => _2.getSpan, 'call', _3 => _3()]);

          const span = _optionalChain([parentSpan, 'optionalAccess', _4 => _4.startChild, 'call', _5 => _5({
            description: 'execute',
            op: 'graphql.execute',
          })]);

          _optionalChain([scope, 'optionalAccess', _6 => _6.setSpan, 'call', _7 => _7(span)]);

          const rv = orig.call(this, ...args);

          if (isThenable(rv)) {
            return rv.then((res) => {
              _optionalChain([span, 'optionalAccess', _8 => _8.finish, 'call', _9 => _9()]);
              _optionalChain([scope, 'optionalAccess', _10 => _10.setSpan, 'call', _11 => _11(parentSpan)]);

              return res;
            });
          }

          _optionalChain([span, 'optionalAccess', _12 => _12.finish, 'call', _13 => _13()]);
          _optionalChain([scope, 'optionalAccess', _14 => _14.setSpan, 'call', _15 => _15(parentSpan)]);
          return rv;
        };
      });
    }
  }GraphQL.__initStatic();

  /** Tracing integration for Apollo */
  class Apollo  {
    /**
     * @inheritDoc
     */
     static __initStatic() {this.id = 'Apollo';}

    /**
     * @inheritDoc
     */
     __init() {this.name = Apollo.id;}

    /**
     * @inheritDoc
     */
     constructor(
      options = {
        useNestjs: false,
      },
    ) {Apollo.prototype.__init.call(this);
      this._useNest = !!options.useNestjs;
    }

    /**
     * @inheritDoc
     */
     setupOnce(_, getCurrentHub) {
      if (shouldDisableAutoInstrumentation(getCurrentHub)) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('Apollo Integration is skipped because of instrumenter configuration.');
        return;
      }

      if (this._useNest) {
        const pkg = loadModule

  ('@nestjs/graphql');

        if (!pkg) {
          (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.error('Apollo-NestJS Integration was unable to require @nestjs/graphql package.');
          return;
        }

        /**
         * Iterate over resolvers of NestJS ResolversExplorerService before schemas are constructed.
         */
        fill(
          pkg.GraphQLFactory.prototype,
          'mergeWithSchema',
          function (orig) {
            return function (

              ...args
            ) {
              fill(this.resolversExplorerService, 'explore', function (orig) {
                return function () {
                  const resolvers = arrayify(orig.call(this));

                  const instrumentedResolvers = instrumentResolvers(resolvers, getCurrentHub);

                  return instrumentedResolvers;
                };
              });

              return orig.call(this, ...args);
            };
          },
        );
      } else {
        const pkg = loadModule

  ('apollo-server-core');

        if (!pkg) {
          (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.error('Apollo Integration was unable to require apollo-server-core package.');
          return;
        }

        /**
         * Iterate over resolvers of the ApolloServer instance before schemas are constructed.
         */
        fill(pkg.ApolloServerBase.prototype, 'constructSchema', function (orig) {
          return function (

  ) {
            if (!this.config.resolvers) {
              if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__)) {
                if (this.config.schema) {
                  logger.warn(
                    'Apollo integration is not able to trace `ApolloServer` instances constructed via `schema` property.' +
                      'If you are using NestJS with Apollo, please use `Sentry.Integrations.Apollo({ useNestjs: true })` instead.',
                  );
                  logger.warn();
                } else if (this.config.modules) {
                  logger.warn(
                    'Apollo integration is not able to trace `ApolloServer` instances constructed via `modules` property.',
                  );
                }

                logger.error('Skipping tracing as no resolvers found on the `ApolloServer` instance.');
              }

              return orig.call(this);
            }

            const resolvers = arrayify(this.config.resolvers);

            this.config.resolvers = instrumentResolvers(resolvers, getCurrentHub);

            return orig.call(this);
          };
        });
      }
    }
  }Apollo.__initStatic();

  function instrumentResolvers(resolvers, getCurrentHub) {
    return resolvers.map(model => {
      Object.keys(model).forEach(resolverGroupName => {
        Object.keys(model[resolverGroupName]).forEach(resolverName => {
          if (typeof model[resolverGroupName][resolverName] !== 'function') {
            return;
          }

          wrapResolver(model, resolverGroupName, resolverName, getCurrentHub);
        });
      });

      return model;
    });
  }

  /**
   * Wrap a single resolver which can be a parent of other resolvers and/or db operations.
   */
  function wrapResolver(
    model,
    resolverGroupName,
    resolverName,
    getCurrentHub,
  ) {
    fill(model[resolverGroupName], resolverName, function (orig) {
      return function ( ...args) {
        const scope = getCurrentHub().getScope();
        const parentSpan = _optionalChain([scope, 'optionalAccess', _2 => _2.getSpan, 'call', _3 => _3()]);
        const span = _optionalChain([parentSpan, 'optionalAccess', _4 => _4.startChild, 'call', _5 => _5({
          description: `${resolverGroupName}.${resolverName}`,
          op: 'graphql.resolve',
        })]);

        const rv = orig.call(this, ...args);

        if (isThenable(rv)) {
          return rv.then((res) => {
            _optionalChain([span, 'optionalAccess', _6 => _6.finish, 'call', _7 => _7()]);
            return res;
          });
        }

        _optionalChain([span, 'optionalAccess', _8 => _8.finish, 'call', _9 => _9()]);

        return rv;
      };
    });
  }

  const WINDOW = GLOBAL_OBJ ;

  /**
   * Add a listener that cancels and finishes a transaction when the global
   * document is hidden.
   */
  function registerBackgroundTabDetection() {
    if (WINDOW && WINDOW.document) {
      WINDOW.document.addEventListener('visibilitychange', () => {
        const activeTransaction = getActiveTransaction() ;
        if (WINDOW.document.hidden && activeTransaction) {
          const statusType = 'cancelled';

          (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
            logger.log(
              `[Tracing] Transaction: ${statusType} -> since tab moved to the background, op: ${activeTransaction.op}`,
            );
          // We should not set status if it is already set, this prevent important statuses like
          // error or data loss from being overwritten on transaction.
          if (!activeTransaction.status) {
            activeTransaction.setStatus(statusType);
          }
          activeTransaction.setTag('visibilitychange', 'document.hidden');
          activeTransaction.finish();
        }
      });
    } else {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        logger.warn('[Tracing] Could not set up background tab detection due to lack of global document');
    }
  }

  const bindReporter = (
    callback,
    metric,
    reportAllChanges,
  ) => {
    let prevValue;
    let delta;
    return (forceReport) => {
      if (metric.value >= 0) {
        if (forceReport || reportAllChanges) {
          delta = metric.value - (prevValue || 0);

          // Report the metric if there's a non-zero delta or if no previous
          // value exists (which can happen in the case of the document becoming
          // hidden when the metric value is 0).
          // See: https://github.com/GoogleChrome/web-vitals/issues/14
          if (delta || prevValue === undefined) {
            prevValue = metric.value;
            metric.delta = delta;
            callback(metric);
          }
        }
      }
    };
  };

  /*
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Performantly generate a unique, 30-char string by combining a version
   * number, the current timestamp with a 13-digit number integer.
   * @return {string}
   */
  const generateUniqueID = () => {
    return `v3-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`;
  };

  /*
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  const getNavigationEntryFromPerformanceTiming = () => {
    // eslint-disable-next-line deprecation/deprecation
    const timing = WINDOW.performance.timing;
    // eslint-disable-next-line deprecation/deprecation
    const type = WINDOW.performance.navigation.type;

    const navigationEntry = {
      entryType: 'navigation',
      startTime: 0,
      type: type == 2 ? 'back_forward' : type === 1 ? 'reload' : 'navigate',
    };

    for (const key in timing) {
      if (key !== 'navigationStart' && key !== 'toJSON') {
        navigationEntry[key] = Math.max((timing[key ] ) - timing.navigationStart, 0);
      }
    }
    return navigationEntry ;
  };

  const getNavigationEntry = () => {
    if (WINDOW.__WEB_VITALS_POLYFILL__) {
      return (
        WINDOW.performance &&
        ((performance.getEntriesByType && performance.getEntriesByType('navigation')[0]) ||
          getNavigationEntryFromPerformanceTiming())
      );
    } else {
      return WINDOW.performance && performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
    }
  };

  /*
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  const getActivationStart = () => {
    const navEntry = getNavigationEntry();
    return (navEntry && navEntry.activationStart) || 0;
  };

  /*
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  const initMetric = (name, value) => {
    const navEntry = getNavigationEntry();
    let navigationType = 'navigate';

    if (navEntry) {
      if (WINDOW.document.prerendering || getActivationStart() > 0) {
        navigationType = 'prerender';
      } else {
        navigationType = navEntry.type.replace(/_/g, '-') ;
      }
    }

    return {
      name,
      value: typeof value === 'undefined' ? -1 : value,
      rating: 'good', // Will be updated if the value changes.
      delta: 0,
      entries: [],
      id: generateUniqueID(),
      navigationType,
    };
  };

  /**
   * Takes a performance entry type and a callback function, and creates a
   * `PerformanceObserver` instance that will observe the specified entry type
   * with buffering enabled and call the callback _for each entry_.
   *
   * This function also feature-detects entry support and wraps the logic in a
   * try/catch to avoid errors in unsupporting browsers.
   */
  const observe = (
    type,
    callback,
    opts,
  ) => {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(type)) {
        const po = new PerformanceObserver(list => {
          callback(list.getEntries() );
        });
        po.observe(
          Object.assign(
            {
              type,
              buffered: true,
            },
            opts || {},
          ) ,
        );
        return po;
      }
    } catch (e) {
      // Do nothing.
    }
    return;
  };

  /*
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  const onHidden = (cb, once) => {
    const onHiddenOrPageHide = (event) => {
      if (event.type === 'pagehide' || WINDOW.document.visibilityState === 'hidden') {
        cb(event);
        if (once) {
          removeEventListener('visibilitychange', onHiddenOrPageHide, true);
          removeEventListener('pagehide', onHiddenOrPageHide, true);
        }
      }
    };
    addEventListener('visibilitychange', onHiddenOrPageHide, true);
    // Some browsers have buggy implementations of visibilitychange,
    // so we use pagehide in addition, just to be safe.
    addEventListener('pagehide', onHiddenOrPageHide, true);
  };

  /*
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Calculates the [CLS](https://web.dev/cls/) value for the current page and
   * calls the `callback` function once the value is ready to be reported, along
   * with all `layout-shift` performance entries that were used in the metric
   * value calculation. The reported value is a `double` (corresponding to a
   * [layout shift score](https://web.dev/cls/#layout-shift-score)).
   *
   * If the `reportAllChanges` configuration option is set to `true`, the
   * `callback` function will be called as soon as the value is initially
   * determined as well as any time the value changes throughout the page
   * lifespan.
   *
   * _**Important:** CLS should be continually monitored for changes throughout
   * the entire lifespan of a page—including if the user returns to the page after
   * it's been hidden/backgrounded. However, since browsers often [will not fire
   * additional callbacks once the user has backgrounded a
   * page](https://developer.chrome.com/blog/page-lifecycle-api/#advice-hidden),
   * `callback` is always called when the page's visibility state changes to
   * hidden. As a result, the `callback` function might be called multiple times
   * during the same page load._
   */
  const onCLS = (onReport) => {
    const metric = initMetric('CLS', 0);
    let report;

    let sessionValue = 0;
    let sessionEntries = [];

    // const handleEntries = (entries: Metric['entries']) => {
    const handleEntries = (entries) => {
      entries.forEach(entry => {
        // Only count layout shifts without recent user input.
        if (!entry.hadRecentInput) {
          const firstSessionEntry = sessionEntries[0];
          const lastSessionEntry = sessionEntries[sessionEntries.length - 1];

          // If the entry occurred less than 1 second after the previous entry and
          // less than 5 seconds after the first entry in the session, include the
          // entry in the current session. Otherwise, start a new session.
          if (
            sessionValue &&
            sessionEntries.length !== 0 &&
            entry.startTime - lastSessionEntry.startTime < 1000 &&
            entry.startTime - firstSessionEntry.startTime < 5000
          ) {
            sessionValue += entry.value;
            sessionEntries.push(entry);
          } else {
            sessionValue = entry.value;
            sessionEntries = [entry];
          }

          // If the current session value is larger than the current CLS value,
          // update CLS and the entries contributing to it.
          if (sessionValue > metric.value) {
            metric.value = sessionValue;
            metric.entries = sessionEntries;
            if (report) {
              report();
            }
          }
        }
      });
    };

    const po = observe('layout-shift', handleEntries);
    if (po) {
      report = bindReporter(onReport, metric);

      onHidden(() => {
        handleEntries(po.takeRecords() );
        report(true);
      });
    }
  };

  /*
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  let firstHiddenTime = -1;

  const initHiddenTime = () => {
    // If the document is hidden and not prerendering, assume it was always
    // hidden and the page was loaded in the background.
    return WINDOW.document.visibilityState === 'hidden' && !WINDOW.document.prerendering ? 0 : Infinity;
  };

  const trackChanges = () => {
    // Update the time if/when the document becomes hidden.
    onHidden(({ timeStamp }) => {
      firstHiddenTime = timeStamp;
    }, true);
  };

  const getVisibilityWatcher = (

  ) => {
    if (firstHiddenTime < 0) {
      // If the document is hidden when this code runs, assume it was hidden
      // since navigation start. This isn't a perfect heuristic, but it's the
      // best we can do until an API is available to support querying past
      // visibilityState.
      firstHiddenTime = initHiddenTime();
      trackChanges();
    }
    return {
      get firstHiddenTime() {
        return firstHiddenTime;
      },
    };
  };

  /*
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Calculates the [FID](https://web.dev/fid/) value for the current page and
   * calls the `callback` function once the value is ready, along with the
   * relevant `first-input` performance entry used to determine the value. The
   * reported value is a `DOMHighResTimeStamp`.
   *
   * _**Important:** since FID is only reported after the user interacts with the
   * page, it's possible that it will not be reported for some page loads._
   */
  const onFID = (onReport) => {
    const visibilityWatcher = getVisibilityWatcher();
    const metric = initMetric('FID');
    // eslint-disable-next-line prefer-const
    let report;

    const handleEntry = (entry) => {
      // Only report if the page wasn't hidden prior to the first input.
      if (entry.startTime < visibilityWatcher.firstHiddenTime) {
        metric.value = entry.processingStart - entry.startTime;
        metric.entries.push(entry);
        report(true);
      }
    };

    const handleEntries = (entries) => {
      (entries ).forEach(handleEntry);
    };

    const po = observe('first-input', handleEntries);
    report = bindReporter(onReport, metric);

    if (po) {
      onHidden(() => {
        handleEntries(po.takeRecords() );
        po.disconnect();
      }, true);
    }
  };

  /*
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  const reportedMetricIDs = {};

  /**
   * Calculates the [LCP](https://web.dev/lcp/) value for the current page and
   * calls the `callback` function once the value is ready (along with the
   * relevant `largest-contentful-paint` performance entry used to determine the
   * value). The reported value is a `DOMHighResTimeStamp`.
   */
  const onLCP = (onReport) => {
    const visibilityWatcher = getVisibilityWatcher();
    const metric = initMetric('LCP');
    let report;

    const handleEntries = (entries) => {
      const lastEntry = entries[entries.length - 1] ;
      if (lastEntry) {
        // The startTime attribute returns the value of the renderTime if it is
        // not 0, and the value of the loadTime otherwise. The activationStart
        // reference is used because LCP should be relative to page activation
        // rather than navigation start if the page was prerendered.
        const value = Math.max(lastEntry.startTime - getActivationStart(), 0);

        // Only report if the page wasn't hidden prior to LCP.
        if (value < visibilityWatcher.firstHiddenTime) {
          metric.value = value;
          metric.entries = [lastEntry];
          report();
        }
      }
    };

    const po = observe('largest-contentful-paint', handleEntries);

    if (po) {
      report = bindReporter(onReport, metric);

      const stopListening = () => {
        if (!reportedMetricIDs[metric.id]) {
          handleEntries(po.takeRecords() );
          po.disconnect();
          reportedMetricIDs[metric.id] = true;
          report(true);
        }
      };

      // Stop listening after input. Note: while scrolling is an input that
      // stop LCP observation, it's unreliable since it can be programmatically
      // generated. See: https://github.com/GoogleChrome/web-vitals/issues/75
      ['keydown', 'click'].forEach(type => {
        addEventListener(type, stopListening, { once: true, capture: true });
      });

      onHidden(stopListening, true);
    }
  };

  /**
   * Checks if a given value is a valid measurement value.
   */
  function isMeasurementValue(value) {
    return typeof value === 'number' && isFinite(value);
  }

  /**
   * Helper function to start child on transactions. This function will make sure that the transaction will
   * use the start timestamp of the created child span if it is earlier than the transactions actual
   * start timestamp.
   */
  function _startChild(transaction, { startTimestamp, ...ctx }) {
    if (startTimestamp && transaction.startTimestamp > startTimestamp) {
      transaction.startTimestamp = startTimestamp;
    }

    return transaction.startChild({
      startTimestamp,
      ...ctx,
    });
  }

  function getBrowserPerformanceAPI() {
    return WINDOW && WINDOW.addEventListener && WINDOW.performance;
  }

  let _performanceCursor = 0;

  let _measurements = {};
  let _lcpEntry;
  let _clsEntry;

  /**
   * Start tracking web vitals
   */
  function startTrackingWebVitals() {
    const performance = getBrowserPerformanceAPI();
    if (performance && browserPerformanceTimeOrigin) {
      if (performance.mark) {
        WINDOW.performance.mark('sentry-tracing-init');
      }
      _trackCLS();
      _trackLCP();
      _trackFID();
    }
  }

  /**
   * Start tracking long tasks.
   */
  function startTrackingLongTasks() {
    const entryHandler = (entries) => {
      for (const entry of entries) {
        const transaction = getActiveTransaction() ;
        if (!transaction) {
          return;
        }
        const startTime = msToSec((browserPerformanceTimeOrigin ) + entry.startTime);
        const duration = msToSec(entry.duration);

        transaction.startChild({
          description: 'Main UI thread blocked',
          op: 'ui.long-task',
          startTimestamp: startTime,
          endTimestamp: startTime + duration,
        });
      }
    };

    observe('longtask', entryHandler);
  }

  /** Starts tracking the Cumulative Layout Shift on the current page. */
  function _trackCLS() {
    // See:
    // https://web.dev/evolving-cls/
    // https://web.dev/cls-web-tooling/
    onCLS(metric => {
      const entry = metric.entries.pop();
      if (!entry) {
        return;
      }

      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('[Measurements] Adding CLS');
      _measurements['cls'] = { value: metric.value, unit: '' };
      _clsEntry = entry ;
    });
  }

  /** Starts tracking the Largest Contentful Paint on the current page. */
  function _trackLCP() {
    onLCP(metric => {
      const entry = metric.entries.pop();
      if (!entry) {
        return;
      }

      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('[Measurements] Adding LCP');
      _measurements['lcp'] = { value: metric.value, unit: 'millisecond' };
      _lcpEntry = entry ;
    });
  }

  /** Starts tracking the First Input Delay on the current page. */
  function _trackFID() {
    onFID(metric => {
      const entry = metric.entries.pop();
      if (!entry) {
        return;
      }

      const timeOrigin = msToSec(browserPerformanceTimeOrigin );
      const startTime = msToSec(entry.startTime);
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('[Measurements] Adding FID');
      _measurements['fid'] = { value: metric.value, unit: 'millisecond' };
      _measurements['mark.fid'] = { value: timeOrigin + startTime, unit: 'second' };
    });
  }

  /** Add performance related spans to a transaction */
  function addPerformanceEntries(transaction) {
    const performance = getBrowserPerformanceAPI();
    if (!performance || !WINDOW.performance.getEntries || !browserPerformanceTimeOrigin) {
      // Gatekeeper if performance API not available
      return;
    }

    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('[Tracing] Adding & adjusting spans using Performance API');
    const timeOrigin = msToSec(browserPerformanceTimeOrigin);

    const performanceEntries = performance.getEntries();

    let responseStartTimestamp;
    let requestStartTimestamp;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    performanceEntries.slice(_performanceCursor).forEach((entry) => {
      const startTime = msToSec(entry.startTime);
      const duration = msToSec(entry.duration);

      if (transaction.op === 'navigation' && timeOrigin + startTime < transaction.startTimestamp) {
        return;
      }

      switch (entry.entryType) {
        case 'navigation': {
          _addNavigationSpans(transaction, entry, timeOrigin);
          responseStartTimestamp = timeOrigin + msToSec(entry.responseStart);
          requestStartTimestamp = timeOrigin + msToSec(entry.requestStart);
          break;
        }
        case 'mark':
        case 'paint':
        case 'measure': {
          _addMeasureSpans(transaction, entry, startTime, duration, timeOrigin);

          // capture web vitals
          const firstHidden = getVisibilityWatcher();
          // Only report if the page wasn't hidden prior to the web vital.
          const shouldRecord = entry.startTime < firstHidden.firstHiddenTime;

          if (entry.name === 'first-paint' && shouldRecord) {
            (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('[Measurements] Adding FP');
            _measurements['fp'] = { value: entry.startTime, unit: 'millisecond' };
          }
          if (entry.name === 'first-contentful-paint' && shouldRecord) {
            (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('[Measurements] Adding FCP');
            _measurements['fcp'] = { value: entry.startTime, unit: 'millisecond' };
          }
          break;
        }
        case 'resource': {
          const resourceName = (entry.name ).replace(WINDOW.location.origin, '');
          _addResourceSpans(transaction, entry, resourceName, startTime, duration, timeOrigin);
          break;
        }
        // Ignore other entry types.
      }
    });

    _performanceCursor = Math.max(performanceEntries.length - 1, 0);

    _trackNavigator(transaction);

    // Measurements are only available for pageload transactions
    if (transaction.op === 'pageload') {
      // Generate TTFB (Time to First Byte), which measured as the time between the beginning of the transaction and the
      // start of the response in milliseconds
      if (typeof responseStartTimestamp === 'number') {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('[Measurements] Adding TTFB');
        _measurements['ttfb'] = {
          value: (responseStartTimestamp - transaction.startTimestamp) * 1000,
          unit: 'millisecond',
        };

        if (typeof requestStartTimestamp === 'number' && requestStartTimestamp <= responseStartTimestamp) {
          // Capture the time spent making the request and receiving the first byte of the response.
          // This is the time between the start of the request and the start of the response in milliseconds.
          _measurements['ttfb.requestTime'] = {
            value: (responseStartTimestamp - requestStartTimestamp) * 1000,
            unit: 'millisecond',
          };
        }
      }

      ['fcp', 'fp', 'lcp'].forEach(name => {
        if (!_measurements[name] || timeOrigin >= transaction.startTimestamp) {
          return;
        }
        // The web vitals, fcp, fp, lcp, and ttfb, all measure relative to timeOrigin.
        // Unfortunately, timeOrigin is not captured within the transaction span data, so these web vitals will need
        // to be adjusted to be relative to transaction.startTimestamp.
        const oldValue = _measurements[name].value;
        const measurementTimestamp = timeOrigin + msToSec(oldValue);

        // normalizedValue should be in milliseconds
        const normalizedValue = Math.abs((measurementTimestamp - transaction.startTimestamp) * 1000);
        const delta = normalizedValue - oldValue;

        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
          logger.log(`[Measurements] Normalized ${name} from ${oldValue} to ${normalizedValue} (${delta})`);
        _measurements[name].value = normalizedValue;
      });

      const fidMark = _measurements['mark.fid'];
      if (fidMark && _measurements['fid']) {
        // create span for FID
        _startChild(transaction, {
          description: 'first input delay',
          endTimestamp: fidMark.value + msToSec(_measurements['fid'].value),
          op: 'ui.action',
          startTimestamp: fidMark.value,
        });

        // Delete mark.fid as we don't want it to be part of final payload
        delete _measurements['mark.fid'];
      }

      // If FCP is not recorded we should not record the cls value
      // according to the new definition of CLS.
      if (!('fcp' in _measurements)) {
        delete _measurements.cls;
      }

      Object.keys(_measurements).forEach(measurementName => {
        transaction.setMeasurement(
          measurementName,
          _measurements[measurementName].value,
          _measurements[measurementName].unit,
        );
      });

      _tagMetricInfo(transaction);
    }

    _lcpEntry = undefined;
    _clsEntry = undefined;
    _measurements = {};
  }

  /** Create measure related spans */
  function _addMeasureSpans(
    transaction,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    entry,
    startTime,
    duration,
    timeOrigin,
  ) {
    const measureStartTimestamp = timeOrigin + startTime;
    const measureEndTimestamp = measureStartTimestamp + duration;

    _startChild(transaction, {
      description: entry.name ,
      endTimestamp: measureEndTimestamp,
      op: entry.entryType ,
      startTimestamp: measureStartTimestamp,
    });

    return measureStartTimestamp;
  }

  /** Instrument navigation entries */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function _addNavigationSpans(transaction, entry, timeOrigin) {
    ['unloadEvent', 'redirect', 'domContentLoadedEvent', 'loadEvent', 'connect'].forEach(event => {
      _addPerformanceNavigationTiming(transaction, entry, event, timeOrigin);
    });
    _addPerformanceNavigationTiming(transaction, entry, 'secureConnection', timeOrigin, 'TLS/SSL', 'connectEnd');
    _addPerformanceNavigationTiming(transaction, entry, 'fetch', timeOrigin, 'cache', 'domainLookupStart');
    _addPerformanceNavigationTiming(transaction, entry, 'domainLookup', timeOrigin, 'DNS');
    _addRequest(transaction, entry, timeOrigin);
  }

  /** Create performance navigation related spans */
  function _addPerformanceNavigationTiming(
    transaction,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    entry,
    event,
    timeOrigin,
    description,
    eventEnd,
  ) {
    const end = eventEnd ? (entry[eventEnd] ) : (entry[`${event}End`] );
    const start = entry[`${event}Start`] ;
    if (!start || !end) {
      return;
    }
    _startChild(transaction, {
      op: 'browser',
      description: description || event,
      startTimestamp: timeOrigin + msToSec(start),
      endTimestamp: timeOrigin + msToSec(end),
    });
  }

  /** Create request and response related spans */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function _addRequest(transaction, entry, timeOrigin) {
    _startChild(transaction, {
      op: 'browser',
      description: 'request',
      startTimestamp: timeOrigin + msToSec(entry.requestStart ),
      endTimestamp: timeOrigin + msToSec(entry.responseEnd ),
    });

    _startChild(transaction, {
      op: 'browser',
      description: 'response',
      startTimestamp: timeOrigin + msToSec(entry.responseStart ),
      endTimestamp: timeOrigin + msToSec(entry.responseEnd ),
    });
  }

  /** Create resource-related spans */
  function _addResourceSpans(
    transaction,
    entry,
    resourceName,
    startTime,
    duration,
    timeOrigin,
  ) {
    // we already instrument based on fetch and xhr, so we don't need to
    // duplicate spans here.
    if (entry.initiatorType === 'xmlhttprequest' || entry.initiatorType === 'fetch') {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = {};
    if ('transferSize' in entry) {
      data['Transfer Size'] = entry.transferSize;
    }
    if ('encodedBodySize' in entry) {
      data['Encoded Body Size'] = entry.encodedBodySize;
    }
    if ('decodedBodySize' in entry) {
      data['Decoded Body Size'] = entry.decodedBodySize;
    }
    if ('renderBlockingStatus' in entry) {
      data['resource.render_blocking_status'] = entry.renderBlockingStatus;
    }

    const startTimestamp = timeOrigin + startTime;
    const endTimestamp = startTimestamp + duration;

    _startChild(transaction, {
      description: resourceName,
      endTimestamp,
      op: entry.initiatorType ? `resource.${entry.initiatorType}` : 'resource.other',
      startTimestamp,
      data,
    });
  }

  /**
   * Capture the information of the user agent.
   */
  function _trackNavigator(transaction) {
    const navigator = WINDOW.navigator ;
    if (!navigator) {
      return;
    }

    // track network connectivity
    const connection = navigator.connection;
    if (connection) {
      if (connection.effectiveType) {
        transaction.setTag('effectiveConnectionType', connection.effectiveType);
      }

      if (connection.type) {
        transaction.setTag('connectionType', connection.type);
      }

      if (isMeasurementValue(connection.rtt)) {
        _measurements['connection.rtt'] = { value: connection.rtt, unit: 'millisecond' };
      }
    }

    if (isMeasurementValue(navigator.deviceMemory)) {
      transaction.setTag('deviceMemory', `${navigator.deviceMemory} GB`);
    }

    if (isMeasurementValue(navigator.hardwareConcurrency)) {
      transaction.setTag('hardwareConcurrency', String(navigator.hardwareConcurrency));
    }
  }

  /** Add LCP / CLS data to transaction to allow debugging */
  function _tagMetricInfo(transaction) {
    if (_lcpEntry) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('[Measurements] Adding LCP Data');

      // Capture Properties of the LCP element that contributes to the LCP.

      if (_lcpEntry.element) {
        transaction.setTag('lcp.element', htmlTreeAsString(_lcpEntry.element));
      }

      if (_lcpEntry.id) {
        transaction.setTag('lcp.id', _lcpEntry.id);
      }

      if (_lcpEntry.url) {
        // Trim URL to the first 200 characters.
        transaction.setTag('lcp.url', _lcpEntry.url.trim().slice(0, 200));
      }

      transaction.setTag('lcp.size', _lcpEntry.size);
    }

    // See: https://developer.mozilla.org/en-US/docs/Web/API/LayoutShift
    if (_clsEntry && _clsEntry.sources) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log('[Measurements] Adding CLS Data');
      _clsEntry.sources.forEach((source, index) =>
        transaction.setTag(`cls.source.${index + 1}`, htmlTreeAsString(source.node)),
      );
    }
  }

  /* eslint-disable max-lines */

  const DEFAULT_TRACE_PROPAGATION_TARGETS = ['localhost', /^\//];

  /** Options for Request Instrumentation */

  const defaultRequestInstrumentationOptions = {
    traceFetch: true,
    traceXHR: true,
    // TODO (v8): Remove this property
    tracingOrigins: DEFAULT_TRACE_PROPAGATION_TARGETS,
    tracePropagationTargets: DEFAULT_TRACE_PROPAGATION_TARGETS,
  };

  /** Registers span creators for xhr and fetch requests  */
  function instrumentOutgoingRequests(_options) {
    // eslint-disable-next-line deprecation/deprecation
    const { traceFetch, traceXHR, tracePropagationTargets, tracingOrigins, shouldCreateSpanForRequest } = {
      traceFetch: defaultRequestInstrumentationOptions.traceFetch,
      traceXHR: defaultRequestInstrumentationOptions.traceXHR,
      ..._options,
    };

    const shouldCreateSpan =
      typeof shouldCreateSpanForRequest === 'function' ? shouldCreateSpanForRequest : (_) => true;

    // TODO(v8) Remove tracingOrigins here
    // The only reason we're passing it in here is because this instrumentOutgoingRequests function is publicly exported
    // and we don't want to break the API. We can remove it in v8.
    const shouldAttachHeadersWithTargets = (url) =>
      shouldAttachHeaders(url, tracePropagationTargets || tracingOrigins);

    const spans = {};

    if (traceFetch) {
      addInstrumentationHandler('fetch', (handlerData) => {
        fetchCallback(handlerData, shouldCreateSpan, shouldAttachHeadersWithTargets, spans);
      });
    }

    if (traceXHR) {
      addInstrumentationHandler('xhr', (handlerData) => {
        xhrCallback(handlerData, shouldCreateSpan, shouldAttachHeadersWithTargets, spans);
      });
    }
  }

  /**
   * A function that determines whether to attach tracing headers to a request.
   * This was extracted from `instrumentOutgoingRequests` to make it easier to test shouldAttachHeaders.
   * We only export this fuction for testing purposes.
   */
  function shouldAttachHeaders(url, tracePropagationTargets) {
    return stringMatchesSomePattern(url, tracePropagationTargets || DEFAULT_TRACE_PROPAGATION_TARGETS);
  }

  /**
   * Create and track fetch request spans
   */
  function fetchCallback(
    handlerData,
    shouldCreateSpan,
    shouldAttachHeaders,
    spans,
  ) {
    if (!hasTracingEnabled() || !(handlerData.fetchData && shouldCreateSpan(handlerData.fetchData.url))) {
      return;
    }

    if (handlerData.endTimestamp) {
      const spanId = handlerData.fetchData.__span;
      if (!spanId) return;

      const span = spans[spanId];
      if (span) {
        if (handlerData.response) {
          // TODO (kmclb) remove this once types PR goes through
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          span.setHttpStatus(handlerData.response.status);
        } else if (handlerData.error) {
          span.setStatus('internal_error');
        }
        span.finish();

        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete spans[spanId];
      }
      return;
    }

    const currentScope = getCurrentHub().getScope();
    const currentSpan = currentScope && currentScope.getSpan();
    const activeTransaction = currentSpan && currentSpan.transaction;

    if (currentSpan && activeTransaction) {
      const span = currentSpan.startChild({
        data: {
          ...handlerData.fetchData,
          type: 'fetch',
        },
        description: `${handlerData.fetchData.method} ${handlerData.fetchData.url}`,
        op: 'http.client',
      });

      handlerData.fetchData.__span = span.spanId;
      spans[span.spanId] = span;

      const request = handlerData.args[0];

      // In case the user hasn't set the second argument of a fetch call we default it to `{}`.
      handlerData.args[1] = handlerData.args[1] || {};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const options = handlerData.args[1];

      if (shouldAttachHeaders(handlerData.fetchData.url)) {
        options.headers = addTracingHeadersToFetchRequest(
          request,
          activeTransaction.getDynamicSamplingContext(),
          span,
          options,
        );
      }
    }
  }

  function addTracingHeadersToFetchRequest(
    request,
    dynamicSamplingContext,
    span,
    options

  ,
  ) {
    const sentryBaggageHeader = dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContext);
    const sentryTraceHeader = span.toTraceparent();

    const headers =
      typeof Request !== 'undefined' && isInstanceOf(request, Request) ? (request ).headers : options.headers;

    if (!headers) {
      return { 'sentry-trace': sentryTraceHeader, baggage: sentryBaggageHeader };
    } else if (typeof Headers !== 'undefined' && isInstanceOf(headers, Headers)) {
      const newHeaders = new Headers(headers );

      newHeaders.append('sentry-trace', sentryTraceHeader);

      if (sentryBaggageHeader) {
        // If the same header is appended miultiple times the browser will merge the values into a single request header.
        // Its therefore safe to simply push a "baggage" entry, even though there might already be another baggage header.
        newHeaders.append(BAGGAGE_HEADER_NAME, sentryBaggageHeader);
      }

      return newHeaders ;
    } else if (Array.isArray(headers)) {
      const newHeaders = [...headers, ['sentry-trace', sentryTraceHeader]];

      if (sentryBaggageHeader) {
        // If there are multiple entries with the same key, the browser will merge the values into a single request header.
        // Its therefore safe to simply push a "baggage" entry, even though there might already be another baggage header.
        newHeaders.push([BAGGAGE_HEADER_NAME, sentryBaggageHeader]);
      }

      return newHeaders;
    } else {
      const existingBaggageHeader = 'baggage' in headers ? headers.baggage : undefined;
      const newBaggageHeaders = [];

      if (Array.isArray(existingBaggageHeader)) {
        newBaggageHeaders.push(...existingBaggageHeader);
      } else if (existingBaggageHeader) {
        newBaggageHeaders.push(existingBaggageHeader);
      }

      if (sentryBaggageHeader) {
        newBaggageHeaders.push(sentryBaggageHeader);
      }

      return {
        ...(headers ),
        'sentry-trace': sentryTraceHeader,
        baggage: newBaggageHeaders.length > 0 ? newBaggageHeaders.join(',') : undefined,
      };
    }
  }

  /**
   * Create and track xhr request spans
   */
  function xhrCallback(
    handlerData,
    shouldCreateSpan,
    shouldAttachHeaders,
    spans,
  ) {
    if (
      !hasTracingEnabled() ||
      (handlerData.xhr && handlerData.xhr.__sentry_own_request__) ||
      !(handlerData.xhr && handlerData.xhr.__sentry_xhr__ && shouldCreateSpan(handlerData.xhr.__sentry_xhr__.url))
    ) {
      return;
    }

    const xhr = handlerData.xhr.__sentry_xhr__;

    // check first if the request has finished and is tracked by an existing span which should now end
    if (handlerData.endTimestamp) {
      const spanId = handlerData.xhr.__sentry_xhr_span_id__;
      if (!spanId) return;

      const span = spans[spanId];
      if (span) {
        span.setHttpStatus(xhr.status_code);
        span.finish();

        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete spans[spanId];
      }
      return;
    }

    const currentScope = getCurrentHub().getScope();
    const currentSpan = currentScope && currentScope.getSpan();
    const activeTransaction = currentSpan && currentSpan.transaction;

    if (currentSpan && activeTransaction) {
      const span = currentSpan.startChild({
        data: {
          ...xhr.data,
          type: 'xhr',
          method: xhr.method,
          url: xhr.url,
        },
        description: `${xhr.method} ${xhr.url}`,
        op: 'http.client',
      });

      handlerData.xhr.__sentry_xhr_span_id__ = span.spanId;
      spans[handlerData.xhr.__sentry_xhr_span_id__] = span;

      if (handlerData.xhr.setRequestHeader && shouldAttachHeaders(handlerData.xhr.__sentry_xhr__.url)) {
        try {
          handlerData.xhr.setRequestHeader('sentry-trace', span.toTraceparent());

          const dynamicSamplingContext = activeTransaction.getDynamicSamplingContext();
          const sentryBaggageHeader = dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContext);

          if (sentryBaggageHeader) {
            // From MDN: "If this method is called several times with the same header, the values are merged into one single request header."
            // We can therefore simply set a baggage header without checking what was there before
            // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/setRequestHeader
            handlerData.xhr.setRequestHeader(BAGGAGE_HEADER_NAME, sentryBaggageHeader);
          }
        } catch (_) {
          // Error: InvalidStateError: Failed to execute 'setRequestHeader' on 'XMLHttpRequest': The object's state must be OPENED.
        }
      }
    }
  }

  /**
   * Default function implementing pageload and navigation transactions
   */
  function instrumentRoutingWithDefaults(
    customStartTransaction,
    startTransactionOnPageLoad = true,
    startTransactionOnLocationChange = true,
  ) {
    if (!WINDOW || !WINDOW.location) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.warn('Could not initialize routing instrumentation due to invalid location');
      return;
    }

    let startingUrl = WINDOW.location.href;

    let activeTransaction;
    if (startTransactionOnPageLoad) {
      activeTransaction = customStartTransaction({
        name: WINDOW.location.pathname,
        op: 'pageload',
        metadata: { source: 'url' },
      });
    }

    if (startTransactionOnLocationChange) {
      addInstrumentationHandler('history', ({ to, from }) => {
        /**
         * This early return is there to account for some cases where a navigation transaction starts right after
         * long-running pageload. We make sure that if `from` is undefined and a valid `startingURL` exists, we don't
         * create an uneccessary navigation transaction.
         *
         * This was hard to duplicate, but this behavior stopped as soon as this fix was applied. This issue might also
         * only be caused in certain development environments where the usage of a hot module reloader is causing
         * errors.
         */
        if (from === undefined && startingUrl && startingUrl.indexOf(to) !== -1) {
          startingUrl = undefined;
          return;
        }

        if (from !== to) {
          startingUrl = undefined;
          if (activeTransaction) {
            (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log(`[Tracing] Finishing current transaction with op: ${activeTransaction.op}`);
            // If there's an open transaction on the scope, we need to finish it before creating an new one.
            activeTransaction.finish();
          }
          activeTransaction = customStartTransaction({
            name: WINDOW.location.pathname,
            op: 'navigation',
            metadata: { source: 'url' },
          });
        }
      });
    }
  }

  const BROWSER_TRACING_INTEGRATION_ID = 'BrowserTracing';

  /** Options for Browser Tracing integration */

  const DEFAULT_BROWSER_TRACING_OPTIONS = {
    idleTimeout: DEFAULT_IDLE_TIMEOUT,
    finalTimeout: DEFAULT_FINAL_TIMEOUT,
    heartbeatInterval: DEFAULT_HEARTBEAT_INTERVAL,
    markBackgroundTransactions: true,
    routingInstrumentation: instrumentRoutingWithDefaults,
    startTransactionOnLocationChange: true,
    startTransactionOnPageLoad: true,
    enableLongTask: true,
    _experiments: {},
    ...defaultRequestInstrumentationOptions,
  };

  /**
   * The Browser Tracing integration automatically instruments browser pageload/navigation
   * actions as transactions, and captures requests, metrics and errors as spans.
   *
   * The integration can be configured with a variety of options, and can be extended to use
   * any routing library. This integration uses {@see IdleTransaction} to create transactions.
   */
  class BrowserTracing  {
    // This class currently doesn't have a static `id` field like the other integration classes, because it prevented
    // @sentry/tracing from being treeshaken. Tree shakers do not like static fields, because they behave like side effects.
    // TODO: Come up with a better plan, than using static fields on integration classes, and use that plan on all
    // integrations.

    /** Browser Tracing integration options */

    /**
     * @inheritDoc
     */
     __init() {this.name = BROWSER_TRACING_INTEGRATION_ID;}

     constructor(_options) {BrowserTracing.prototype.__init.call(this);
      this.options = {
        ...DEFAULT_BROWSER_TRACING_OPTIONS,
        ..._options,
      };

      // Special case: enableLongTask can be set in _experiments
      // TODO (v8): Remove this in v8
      if (this.options._experiments.enableLongTask !== undefined) {
        this.options.enableLongTask = this.options._experiments.enableLongTask;
      }

      // TODO (v8): remove this block after tracingOrigins is removed
      // Set tracePropagationTargets to tracingOrigins if specified by the user
      // In case both are specified, tracePropagationTargets takes precedence
      // eslint-disable-next-line deprecation/deprecation
      if (_options && !_options.tracePropagationTargets && _options.tracingOrigins) {
        // eslint-disable-next-line deprecation/deprecation
        this.options.tracePropagationTargets = _options.tracingOrigins;
      }

      startTrackingWebVitals();
      if (this.options.enableLongTask) {
        startTrackingLongTasks();
      }
    }

    /**
     * @inheritDoc
     */
     setupOnce(_, getCurrentHub) {
      this._getCurrentHub = getCurrentHub;

      const {
        routingInstrumentation: instrumentRouting,
        startTransactionOnLocationChange,
        startTransactionOnPageLoad,
        markBackgroundTransactions,
        traceFetch,
        traceXHR,
        tracePropagationTargets,
        shouldCreateSpanForRequest,
        _experiments,
      } = this.options;

      instrumentRouting(
        (context) => this._createRouteTransaction(context),
        startTransactionOnPageLoad,
        startTransactionOnLocationChange,
      );

      if (markBackgroundTransactions) {
        registerBackgroundTabDetection();
      }

      if (_experiments.enableInteractions) {
        this._registerInteractionListener();
      }

      instrumentOutgoingRequests({
        traceFetch,
        traceXHR,
        tracePropagationTargets,
        shouldCreateSpanForRequest,
      });
    }

    /** Create routing idle transaction. */
     _createRouteTransaction(context) {
      if (!this._getCurrentHub) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
          logger.warn(`[Tracing] Did not create ${context.op} transaction because _getCurrentHub is invalid.`);
        return undefined;
      }

      const { beforeNavigate, idleTimeout, finalTimeout, heartbeatInterval } = this.options;

      const isPageloadTransaction = context.op === 'pageload';

      const sentryTraceMetaTagValue = isPageloadTransaction ? getMetaContent('sentry-trace') : null;
      const baggageMetaTagValue = isPageloadTransaction ? getMetaContent('baggage') : null;

      const traceParentData = sentryTraceMetaTagValue ? extractTraceparentData(sentryTraceMetaTagValue) : undefined;
      const dynamicSamplingContext = baggageMetaTagValue
        ? baggageHeaderToDynamicSamplingContext(baggageMetaTagValue)
        : undefined;

      const expandedContext = {
        ...context,
        ...traceParentData,
        metadata: {
          ...context.metadata,
          dynamicSamplingContext: traceParentData && !dynamicSamplingContext ? {} : dynamicSamplingContext,
        },
        trimEnd: true,
      };

      const modifiedContext = typeof beforeNavigate === 'function' ? beforeNavigate(expandedContext) : expandedContext;

      // For backwards compatibility reasons, beforeNavigate can return undefined to "drop" the transaction (prevent it
      // from being sent to Sentry).
      const finalContext = modifiedContext === undefined ? { ...expandedContext, sampled: false } : modifiedContext;

      // If `beforeNavigate` set a custom name, record that fact
      finalContext.metadata =
        finalContext.name !== expandedContext.name
          ? { ...finalContext.metadata, source: 'custom' }
          : finalContext.metadata;

      this._latestRouteName = finalContext.name;
      this._latestRouteSource = finalContext.metadata && finalContext.metadata.source;

      if (finalContext.sampled === false) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
          logger.log(`[Tracing] Will not send ${finalContext.op} transaction because of beforeNavigate.`);
      }

      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.log(`[Tracing] Starting ${finalContext.op} transaction on scope`);

      const hub = this._getCurrentHub();
      const { location } = WINDOW;

      const idleTransaction = startIdleTransaction(
        hub,
        finalContext,
        idleTimeout,
        finalTimeout,
        true,
        { location }, // for use in the tracesSampler
        heartbeatInterval,
      );
      idleTransaction.registerBeforeFinishCallback(transaction => {
        addPerformanceEntries(transaction);
      });

      return idleTransaction ;
    }

    /** Start listener for interaction transactions */
     _registerInteractionListener() {
      let inflightInteractionTransaction;
      const registerInteractionTransaction = () => {
        const { idleTimeout, finalTimeout, heartbeatInterval } = this.options;

        const op = 'ui.action.click';
        if (inflightInteractionTransaction) {
          inflightInteractionTransaction.finish();
          inflightInteractionTransaction = undefined;
        }

        if (!this._getCurrentHub) {
          (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.warn(`[Tracing] Did not create ${op} transaction because _getCurrentHub is invalid.`);
          return undefined;
        }

        if (!this._latestRouteName) {
          (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
            logger.warn(`[Tracing] Did not create ${op} transaction because _latestRouteName is missing.`);
          return undefined;
        }

        const hub = this._getCurrentHub();
        const { location } = WINDOW;

        const context = {
          name: this._latestRouteName,
          op,
          trimEnd: true,
          metadata: {
            source: this._latestRouteSource || 'url',
          },
        };

        inflightInteractionTransaction = startIdleTransaction(
          hub,
          context,
          idleTimeout,
          finalTimeout,
          true,
          { location }, // for use in the tracesSampler
          heartbeatInterval,
        );
      };

      ['click'].forEach(type => {
        addEventListener(type, registerInteractionTransaction, { once: false, capture: true });
      });
    }
  }

  /** Returns the value of a meta tag */
  function getMetaContent(metaName) {
    // Can't specify generic to `getDomElement` because tracing can be used
    // in a variety of environments, have to disable `no-unsafe-member-access`
    // as a result.
    const metaTag = getDomElement(`meta[name=${metaName}]`);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return metaTag ? metaTag.getAttribute('content') : null;
  }

  /** The status of an Span.
   *
   * @deprecated Use string literals - if you require type casting, cast to SpanStatusType type
   */
  // eslint-disable-next-line import/export
  var SpanStatus; (function (SpanStatus) {
    /** The operation completed successfully. */
    const Ok = 'ok'; SpanStatus["Ok"] = Ok;
    /** Deadline expired before operation could complete. */
    const DeadlineExceeded = 'deadline_exceeded'; SpanStatus["DeadlineExceeded"] = DeadlineExceeded;
    /** 401 Unauthorized (actually does mean unauthenticated according to RFC 7235) */
    const Unauthenticated = 'unauthenticated'; SpanStatus["Unauthenticated"] = Unauthenticated;
    /** 403 Forbidden */
    const PermissionDenied = 'permission_denied'; SpanStatus["PermissionDenied"] = PermissionDenied;
    /** 404 Not Found. Some requested entity (file or directory) was not found. */
    const NotFound = 'not_found'; SpanStatus["NotFound"] = NotFound;
    /** 429 Too Many Requests */
    const ResourceExhausted = 'resource_exhausted'; SpanStatus["ResourceExhausted"] = ResourceExhausted;
    /** Client specified an invalid argument. 4xx. */
    const InvalidArgument = 'invalid_argument'; SpanStatus["InvalidArgument"] = InvalidArgument;
    /** 501 Not Implemented */
    const Unimplemented = 'unimplemented'; SpanStatus["Unimplemented"] = Unimplemented;
    /** 503 Service Unavailable */
    const Unavailable = 'unavailable'; SpanStatus["Unavailable"] = Unavailable;
    /** Other/generic 5xx. */
    const InternalError = 'internal_error'; SpanStatus["InternalError"] = InternalError;
    /** Unknown. Any non-standard HTTP status code. */
    const UnknownError = 'unknown_error'; SpanStatus["UnknownError"] = UnknownError;
    /** The operation was cancelled (typically by the user). */
    const Cancelled = 'cancelled'; SpanStatus["Cancelled"] = Cancelled;
    /** Already exists (409) */
    const AlreadyExists = 'already_exists'; SpanStatus["AlreadyExists"] = AlreadyExists;
    /** Operation was rejected because the system is not in a state required for the operation's */
    const FailedPrecondition = 'failed_precondition'; SpanStatus["FailedPrecondition"] = FailedPrecondition;
    /** The operation was aborted, typically due to a concurrency issue. */
    const Aborted = 'aborted'; SpanStatus["Aborted"] = Aborted;
    /** Operation was attempted past the valid range. */
    const OutOfRange = 'out_of_range'; SpanStatus["OutOfRange"] = OutOfRange;
    /** Unrecoverable data loss or corruption */
    const DataLoss = 'data_loss'; SpanStatus["DataLoss"] = DataLoss;
  })(SpanStatus || (SpanStatus = {}));

  // Treeshakable guard to remove all code related to tracing

  // Guard for tree
  if (typeof __SENTRY_TRACING__ === 'undefined' || __SENTRY_TRACING__) {
    // We are patching the global object with our hub extension methods
    addExtensionMethods();
  }

  try {
    init({
      dsn: "https://177fd98a1e9e4deba84146a769633c32@o4504196236836864.ingest.sentry.io/4504196241293312",
      replaysSessionSampleRate: 0,
      replaysOnErrorSampleRate: 1,
      integrations: [new BrowserTracing(), new Replay()],
      tracesSampleRate: 0.1,
      ignoreErrors: ["File Too Large"]
    });
    common.sharedEvent.on("loginSuccess", (userInfo) => {
      setUser({
        id: userInfo._id,
        email: userInfo.email,
        username: `${userInfo.nickname}#${userInfo.discriminator}`,
        avatar: userInfo.avatar,
        temporary: userInfo.temporary
      });
    });
  } catch (err) {
    console.error(err);
  }

}));
//# sourceMappingURL=lazy-47f7831e.js.map
