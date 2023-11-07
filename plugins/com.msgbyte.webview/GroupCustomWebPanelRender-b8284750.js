definePlugin('@plugins/com.msgbyte.webview/GroupCustomWebPanelRender-b8284750.js', ['exports', 'react', './index-650ad268', '@capital/common', '@capital/component', 'styled-components'], (function (exports, React, index, common, component, styled) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

  var lib$1 = {exports: {}};

  var _default$1 = {};

  var lib = {exports: {}};

  var _default = {};

  /**
   * cssfilter
   *
   * @author 老雷<leizongmin@gmail.com>
   */

  function getDefaultWhiteList$1 () {
    // 白名单值说明：
    // true: 允许该属性
    // Function: function (val) { } 返回true表示允许该属性，其他值均表示不允许
    // RegExp: regexp.test(val) 返回true表示允许该属性，其他值均表示不允许
    // 除上面列出的值外均表示不允许
    var whiteList = {};

    whiteList['align-content'] = false; // default: auto
    whiteList['align-items'] = false; // default: auto
    whiteList['align-self'] = false; // default: auto
    whiteList['alignment-adjust'] = false; // default: auto
    whiteList['alignment-baseline'] = false; // default: baseline
    whiteList['all'] = false; // default: depending on individual properties
    whiteList['anchor-point'] = false; // default: none
    whiteList['animation'] = false; // default: depending on individual properties
    whiteList['animation-delay'] = false; // default: 0
    whiteList['animation-direction'] = false; // default: normal
    whiteList['animation-duration'] = false; // default: 0
    whiteList['animation-fill-mode'] = false; // default: none
    whiteList['animation-iteration-count'] = false; // default: 1
    whiteList['animation-name'] = false; // default: none
    whiteList['animation-play-state'] = false; // default: running
    whiteList['animation-timing-function'] = false; // default: ease
    whiteList['azimuth'] = false; // default: center
    whiteList['backface-visibility'] = false; // default: visible
    whiteList['background'] = true; // default: depending on individual properties
    whiteList['background-attachment'] = true; // default: scroll
    whiteList['background-clip'] = true; // default: border-box
    whiteList['background-color'] = true; // default: transparent
    whiteList['background-image'] = true; // default: none
    whiteList['background-origin'] = true; // default: padding-box
    whiteList['background-position'] = true; // default: 0% 0%
    whiteList['background-repeat'] = true; // default: repeat
    whiteList['background-size'] = true; // default: auto
    whiteList['baseline-shift'] = false; // default: baseline
    whiteList['binding'] = false; // default: none
    whiteList['bleed'] = false; // default: 6pt
    whiteList['bookmark-label'] = false; // default: content()
    whiteList['bookmark-level'] = false; // default: none
    whiteList['bookmark-state'] = false; // default: open
    whiteList['border'] = true; // default: depending on individual properties
    whiteList['border-bottom'] = true; // default: depending on individual properties
    whiteList['border-bottom-color'] = true; // default: current color
    whiteList['border-bottom-left-radius'] = true; // default: 0
    whiteList['border-bottom-right-radius'] = true; // default: 0
    whiteList['border-bottom-style'] = true; // default: none
    whiteList['border-bottom-width'] = true; // default: medium
    whiteList['border-collapse'] = true; // default: separate
    whiteList['border-color'] = true; // default: depending on individual properties
    whiteList['border-image'] = true; // default: none
    whiteList['border-image-outset'] = true; // default: 0
    whiteList['border-image-repeat'] = true; // default: stretch
    whiteList['border-image-slice'] = true; // default: 100%
    whiteList['border-image-source'] = true; // default: none
    whiteList['border-image-width'] = true; // default: 1
    whiteList['border-left'] = true; // default: depending on individual properties
    whiteList['border-left-color'] = true; // default: current color
    whiteList['border-left-style'] = true; // default: none
    whiteList['border-left-width'] = true; // default: medium
    whiteList['border-radius'] = true; // default: 0
    whiteList['border-right'] = true; // default: depending on individual properties
    whiteList['border-right-color'] = true; // default: current color
    whiteList['border-right-style'] = true; // default: none
    whiteList['border-right-width'] = true; // default: medium
    whiteList['border-spacing'] = true; // default: 0
    whiteList['border-style'] = true; // default: depending on individual properties
    whiteList['border-top'] = true; // default: depending on individual properties
    whiteList['border-top-color'] = true; // default: current color
    whiteList['border-top-left-radius'] = true; // default: 0
    whiteList['border-top-right-radius'] = true; // default: 0
    whiteList['border-top-style'] = true; // default: none
    whiteList['border-top-width'] = true; // default: medium
    whiteList['border-width'] = true; // default: depending on individual properties
    whiteList['bottom'] = false; // default: auto
    whiteList['box-decoration-break'] = true; // default: slice
    whiteList['box-shadow'] = true; // default: none
    whiteList['box-sizing'] = true; // default: content-box
    whiteList['box-snap'] = true; // default: none
    whiteList['box-suppress'] = true; // default: show
    whiteList['break-after'] = true; // default: auto
    whiteList['break-before'] = true; // default: auto
    whiteList['break-inside'] = true; // default: auto
    whiteList['caption-side'] = false; // default: top
    whiteList['chains'] = false; // default: none
    whiteList['clear'] = true; // default: none
    whiteList['clip'] = false; // default: auto
    whiteList['clip-path'] = false; // default: none
    whiteList['clip-rule'] = false; // default: nonzero
    whiteList['color'] = true; // default: implementation dependent
    whiteList['color-interpolation-filters'] = true; // default: auto
    whiteList['column-count'] = false; // default: auto
    whiteList['column-fill'] = false; // default: balance
    whiteList['column-gap'] = false; // default: normal
    whiteList['column-rule'] = false; // default: depending on individual properties
    whiteList['column-rule-color'] = false; // default: current color
    whiteList['column-rule-style'] = false; // default: medium
    whiteList['column-rule-width'] = false; // default: medium
    whiteList['column-span'] = false; // default: none
    whiteList['column-width'] = false; // default: auto
    whiteList['columns'] = false; // default: depending on individual properties
    whiteList['contain'] = false; // default: none
    whiteList['content'] = false; // default: normal
    whiteList['counter-increment'] = false; // default: none
    whiteList['counter-reset'] = false; // default: none
    whiteList['counter-set'] = false; // default: none
    whiteList['crop'] = false; // default: auto
    whiteList['cue'] = false; // default: depending on individual properties
    whiteList['cue-after'] = false; // default: none
    whiteList['cue-before'] = false; // default: none
    whiteList['cursor'] = false; // default: auto
    whiteList['direction'] = false; // default: ltr
    whiteList['display'] = true; // default: depending on individual properties
    whiteList['display-inside'] = true; // default: auto
    whiteList['display-list'] = true; // default: none
    whiteList['display-outside'] = true; // default: inline-level
    whiteList['dominant-baseline'] = false; // default: auto
    whiteList['elevation'] = false; // default: level
    whiteList['empty-cells'] = false; // default: show
    whiteList['filter'] = false; // default: none
    whiteList['flex'] = false; // default: depending on individual properties
    whiteList['flex-basis'] = false; // default: auto
    whiteList['flex-direction'] = false; // default: row
    whiteList['flex-flow'] = false; // default: depending on individual properties
    whiteList['flex-grow'] = false; // default: 0
    whiteList['flex-shrink'] = false; // default: 1
    whiteList['flex-wrap'] = false; // default: nowrap
    whiteList['float'] = false; // default: none
    whiteList['float-offset'] = false; // default: 0 0
    whiteList['flood-color'] = false; // default: black
    whiteList['flood-opacity'] = false; // default: 1
    whiteList['flow-from'] = false; // default: none
    whiteList['flow-into'] = false; // default: none
    whiteList['font'] = true; // default: depending on individual properties
    whiteList['font-family'] = true; // default: implementation dependent
    whiteList['font-feature-settings'] = true; // default: normal
    whiteList['font-kerning'] = true; // default: auto
    whiteList['font-language-override'] = true; // default: normal
    whiteList['font-size'] = true; // default: medium
    whiteList['font-size-adjust'] = true; // default: none
    whiteList['font-stretch'] = true; // default: normal
    whiteList['font-style'] = true; // default: normal
    whiteList['font-synthesis'] = true; // default: weight style
    whiteList['font-variant'] = true; // default: normal
    whiteList['font-variant-alternates'] = true; // default: normal
    whiteList['font-variant-caps'] = true; // default: normal
    whiteList['font-variant-east-asian'] = true; // default: normal
    whiteList['font-variant-ligatures'] = true; // default: normal
    whiteList['font-variant-numeric'] = true; // default: normal
    whiteList['font-variant-position'] = true; // default: normal
    whiteList['font-weight'] = true; // default: normal
    whiteList['grid'] = false; // default: depending on individual properties
    whiteList['grid-area'] = false; // default: depending on individual properties
    whiteList['grid-auto-columns'] = false; // default: auto
    whiteList['grid-auto-flow'] = false; // default: none
    whiteList['grid-auto-rows'] = false; // default: auto
    whiteList['grid-column'] = false; // default: depending on individual properties
    whiteList['grid-column-end'] = false; // default: auto
    whiteList['grid-column-start'] = false; // default: auto
    whiteList['grid-row'] = false; // default: depending on individual properties
    whiteList['grid-row-end'] = false; // default: auto
    whiteList['grid-row-start'] = false; // default: auto
    whiteList['grid-template'] = false; // default: depending on individual properties
    whiteList['grid-template-areas'] = false; // default: none
    whiteList['grid-template-columns'] = false; // default: none
    whiteList['grid-template-rows'] = false; // default: none
    whiteList['hanging-punctuation'] = false; // default: none
    whiteList['height'] = true; // default: auto
    whiteList['hyphens'] = false; // default: manual
    whiteList['icon'] = false; // default: auto
    whiteList['image-orientation'] = false; // default: auto
    whiteList['image-resolution'] = false; // default: normal
    whiteList['ime-mode'] = false; // default: auto
    whiteList['initial-letters'] = false; // default: normal
    whiteList['inline-box-align'] = false; // default: last
    whiteList['justify-content'] = false; // default: auto
    whiteList['justify-items'] = false; // default: auto
    whiteList['justify-self'] = false; // default: auto
    whiteList['left'] = false; // default: auto
    whiteList['letter-spacing'] = true; // default: normal
    whiteList['lighting-color'] = true; // default: white
    whiteList['line-box-contain'] = false; // default: block inline replaced
    whiteList['line-break'] = false; // default: auto
    whiteList['line-grid'] = false; // default: match-parent
    whiteList['line-height'] = false; // default: normal
    whiteList['line-snap'] = false; // default: none
    whiteList['line-stacking'] = false; // default: depending on individual properties
    whiteList['line-stacking-ruby'] = false; // default: exclude-ruby
    whiteList['line-stacking-shift'] = false; // default: consider-shifts
    whiteList['line-stacking-strategy'] = false; // default: inline-line-height
    whiteList['list-style'] = true; // default: depending on individual properties
    whiteList['list-style-image'] = true; // default: none
    whiteList['list-style-position'] = true; // default: outside
    whiteList['list-style-type'] = true; // default: disc
    whiteList['margin'] = true; // default: depending on individual properties
    whiteList['margin-bottom'] = true; // default: 0
    whiteList['margin-left'] = true; // default: 0
    whiteList['margin-right'] = true; // default: 0
    whiteList['margin-top'] = true; // default: 0
    whiteList['marker-offset'] = false; // default: auto
    whiteList['marker-side'] = false; // default: list-item
    whiteList['marks'] = false; // default: none
    whiteList['mask'] = false; // default: border-box
    whiteList['mask-box'] = false; // default: see individual properties
    whiteList['mask-box-outset'] = false; // default: 0
    whiteList['mask-box-repeat'] = false; // default: stretch
    whiteList['mask-box-slice'] = false; // default: 0 fill
    whiteList['mask-box-source'] = false; // default: none
    whiteList['mask-box-width'] = false; // default: auto
    whiteList['mask-clip'] = false; // default: border-box
    whiteList['mask-image'] = false; // default: none
    whiteList['mask-origin'] = false; // default: border-box
    whiteList['mask-position'] = false; // default: center
    whiteList['mask-repeat'] = false; // default: no-repeat
    whiteList['mask-size'] = false; // default: border-box
    whiteList['mask-source-type'] = false; // default: auto
    whiteList['mask-type'] = false; // default: luminance
    whiteList['max-height'] = true; // default: none
    whiteList['max-lines'] = false; // default: none
    whiteList['max-width'] = true; // default: none
    whiteList['min-height'] = true; // default: 0
    whiteList['min-width'] = true; // default: 0
    whiteList['move-to'] = false; // default: normal
    whiteList['nav-down'] = false; // default: auto
    whiteList['nav-index'] = false; // default: auto
    whiteList['nav-left'] = false; // default: auto
    whiteList['nav-right'] = false; // default: auto
    whiteList['nav-up'] = false; // default: auto
    whiteList['object-fit'] = false; // default: fill
    whiteList['object-position'] = false; // default: 50% 50%
    whiteList['opacity'] = false; // default: 1
    whiteList['order'] = false; // default: 0
    whiteList['orphans'] = false; // default: 2
    whiteList['outline'] = false; // default: depending on individual properties
    whiteList['outline-color'] = false; // default: invert
    whiteList['outline-offset'] = false; // default: 0
    whiteList['outline-style'] = false; // default: none
    whiteList['outline-width'] = false; // default: medium
    whiteList['overflow'] = false; // default: depending on individual properties
    whiteList['overflow-wrap'] = false; // default: normal
    whiteList['overflow-x'] = false; // default: visible
    whiteList['overflow-y'] = false; // default: visible
    whiteList['padding'] = true; // default: depending on individual properties
    whiteList['padding-bottom'] = true; // default: 0
    whiteList['padding-left'] = true; // default: 0
    whiteList['padding-right'] = true; // default: 0
    whiteList['padding-top'] = true; // default: 0
    whiteList['page'] = false; // default: auto
    whiteList['page-break-after'] = false; // default: auto
    whiteList['page-break-before'] = false; // default: auto
    whiteList['page-break-inside'] = false; // default: auto
    whiteList['page-policy'] = false; // default: start
    whiteList['pause'] = false; // default: implementation dependent
    whiteList['pause-after'] = false; // default: implementation dependent
    whiteList['pause-before'] = false; // default: implementation dependent
    whiteList['perspective'] = false; // default: none
    whiteList['perspective-origin'] = false; // default: 50% 50%
    whiteList['pitch'] = false; // default: medium
    whiteList['pitch-range'] = false; // default: 50
    whiteList['play-during'] = false; // default: auto
    whiteList['position'] = false; // default: static
    whiteList['presentation-level'] = false; // default: 0
    whiteList['quotes'] = false; // default: text
    whiteList['region-fragment'] = false; // default: auto
    whiteList['resize'] = false; // default: none
    whiteList['rest'] = false; // default: depending on individual properties
    whiteList['rest-after'] = false; // default: none
    whiteList['rest-before'] = false; // default: none
    whiteList['richness'] = false; // default: 50
    whiteList['right'] = false; // default: auto
    whiteList['rotation'] = false; // default: 0
    whiteList['rotation-point'] = false; // default: 50% 50%
    whiteList['ruby-align'] = false; // default: auto
    whiteList['ruby-merge'] = false; // default: separate
    whiteList['ruby-position'] = false; // default: before
    whiteList['shape-image-threshold'] = false; // default: 0.0
    whiteList['shape-outside'] = false; // default: none
    whiteList['shape-margin'] = false; // default: 0
    whiteList['size'] = false; // default: auto
    whiteList['speak'] = false; // default: auto
    whiteList['speak-as'] = false; // default: normal
    whiteList['speak-header'] = false; // default: once
    whiteList['speak-numeral'] = false; // default: continuous
    whiteList['speak-punctuation'] = false; // default: none
    whiteList['speech-rate'] = false; // default: medium
    whiteList['stress'] = false; // default: 50
    whiteList['string-set'] = false; // default: none
    whiteList['tab-size'] = false; // default: 8
    whiteList['table-layout'] = false; // default: auto
    whiteList['text-align'] = true; // default: start
    whiteList['text-align-last'] = true; // default: auto
    whiteList['text-combine-upright'] = true; // default: none
    whiteList['text-decoration'] = true; // default: none
    whiteList['text-decoration-color'] = true; // default: currentColor
    whiteList['text-decoration-line'] = true; // default: none
    whiteList['text-decoration-skip'] = true; // default: objects
    whiteList['text-decoration-style'] = true; // default: solid
    whiteList['text-emphasis'] = true; // default: depending on individual properties
    whiteList['text-emphasis-color'] = true; // default: currentColor
    whiteList['text-emphasis-position'] = true; // default: over right
    whiteList['text-emphasis-style'] = true; // default: none
    whiteList['text-height'] = true; // default: auto
    whiteList['text-indent'] = true; // default: 0
    whiteList['text-justify'] = true; // default: auto
    whiteList['text-orientation'] = true; // default: mixed
    whiteList['text-overflow'] = true; // default: clip
    whiteList['text-shadow'] = true; // default: none
    whiteList['text-space-collapse'] = true; // default: collapse
    whiteList['text-transform'] = true; // default: none
    whiteList['text-underline-position'] = true; // default: auto
    whiteList['text-wrap'] = true; // default: normal
    whiteList['top'] = false; // default: auto
    whiteList['transform'] = false; // default: none
    whiteList['transform-origin'] = false; // default: 50% 50% 0
    whiteList['transform-style'] = false; // default: flat
    whiteList['transition'] = false; // default: depending on individual properties
    whiteList['transition-delay'] = false; // default: 0s
    whiteList['transition-duration'] = false; // default: 0s
    whiteList['transition-property'] = false; // default: all
    whiteList['transition-timing-function'] = false; // default: ease
    whiteList['unicode-bidi'] = false; // default: normal
    whiteList['vertical-align'] = false; // default: baseline
    whiteList['visibility'] = false; // default: visible
    whiteList['voice-balance'] = false; // default: center
    whiteList['voice-duration'] = false; // default: auto
    whiteList['voice-family'] = false; // default: implementation dependent
    whiteList['voice-pitch'] = false; // default: medium
    whiteList['voice-range'] = false; // default: medium
    whiteList['voice-rate'] = false; // default: normal
    whiteList['voice-stress'] = false; // default: normal
    whiteList['voice-volume'] = false; // default: medium
    whiteList['volume'] = false; // default: medium
    whiteList['white-space'] = false; // default: normal
    whiteList['widows'] = false; // default: 2
    whiteList['width'] = true; // default: auto
    whiteList['will-change'] = false; // default: auto
    whiteList['word-break'] = true; // default: normal
    whiteList['word-spacing'] = true; // default: normal
    whiteList['word-wrap'] = true; // default: normal
    whiteList['wrap-flow'] = false; // default: auto
    whiteList['wrap-through'] = false; // default: wrap
    whiteList['writing-mode'] = false; // default: horizontal-tb
    whiteList['z-index'] = false; // default: auto

    return whiteList;
  }


  /**
   * 匹配到白名单上的一个属性时
   *
   * @param {String} name
   * @param {String} value
   * @param {Object} options
   * @return {String}
   */
  function onAttr (name, value, options) {
    // do nothing
  }

  /**
   * 匹配到不在白名单上的一个属性时
   *
   * @param {String} name
   * @param {String} value
   * @param {Object} options
   * @return {String}
   */
  function onIgnoreAttr (name, value, options) {
    // do nothing
  }

  var REGEXP_URL_JAVASCRIPT = /javascript\s*\:/img;

  /**
   * 过滤属性值
   *
   * @param {String} name
   * @param {String} value
   * @return {String}
   */
  function safeAttrValue$1(name, value) {
    if (REGEXP_URL_JAVASCRIPT.test(value)) return '';
    return value;
  }


  _default.whiteList = getDefaultWhiteList$1();
  _default.getDefaultWhiteList = getDefaultWhiteList$1;
  _default.onAttr = onAttr;
  _default.onIgnoreAttr = onIgnoreAttr;
  _default.safeAttrValue = safeAttrValue$1;

  var util$1 = {
    indexOf: function (arr, item) {
      var i, j;
      if (Array.prototype.indexOf) {
        return arr.indexOf(item);
      }
      for (i = 0, j = arr.length; i < j; i++) {
        if (arr[i] === item) {
          return i;
        }
      }
      return -1;
    },
    forEach: function (arr, fn, scope) {
      var i, j;
      if (Array.prototype.forEach) {
        return arr.forEach(fn, scope);
      }
      for (i = 0, j = arr.length; i < j; i++) {
        fn.call(scope, arr[i], i, arr);
      }
    },
    trim: function (str) {
      if (String.prototype.trim) {
        return str.trim();
      }
      return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    trimRight: function (str) {
      if (String.prototype.trimRight) {
        return str.trimRight();
      }
      return str.replace(/(\s*$)/g, '');
    }
  };

  /**
   * cssfilter
   *
   * @author 老雷<leizongmin@gmail.com>
   */

  var _$3 = util$1;


  /**
   * 解析style
   *
   * @param {String} css
   * @param {Function} onAttr 处理属性的函数
   *   参数格式： function (sourcePosition, position, name, value, source)
   * @return {String}
   */
  function parseStyle$1 (css, onAttr) {
    css = _$3.trimRight(css);
    if (css[css.length - 1] !== ';') css += ';';
    var cssLength = css.length;
    var isParenthesisOpen = false;
    var lastPos = 0;
    var i = 0;
    var retCSS = '';

    function addNewAttr () {
      // 如果没有正常的闭合圆括号，则直接忽略当前属性
      if (!isParenthesisOpen) {
        var source = _$3.trim(css.slice(lastPos, i));
        var j = source.indexOf(':');
        if (j !== -1) {
          var name = _$3.trim(source.slice(0, j));
          var value = _$3.trim(source.slice(j + 1));
          // 必须有属性名称
          if (name) {
            var ret = onAttr(lastPos, retCSS.length, name, value, source);
            if (ret) retCSS += ret + '; ';
          }
        }
      }
      lastPos = i + 1;
    }

    for (; i < cssLength; i++) {
      var c = css[i];
      if (c === '/' && css[i + 1] === '*') {
        // 备注开始
        var j = css.indexOf('*/', i + 2);
        // 如果没有正常的备注结束，则后面的部分全部跳过
        if (j === -1) break;
        // 直接将当前位置调到备注结尾，并且初始化状态
        i = j + 1;
        lastPos = i + 1;
        isParenthesisOpen = false;
      } else if (c === '(') {
        isParenthesisOpen = true;
      } else if (c === ')') {
        isParenthesisOpen = false;
      } else if (c === ';') {
        if (isParenthesisOpen) ; else {
          addNewAttr();
        }
      } else if (c === '\n') {
        addNewAttr();
      }
    }

    return _$3.trim(retCSS);
  }

  var parser$2 = parseStyle$1;

  /**
   * cssfilter
   *
   * @author 老雷<leizongmin@gmail.com>
   */

  var DEFAULT$1 = _default;
  var parseStyle = parser$2;


  /**
   * 返回值是否为空
   *
   * @param {Object} obj
   * @return {Boolean}
   */
  function isNull$1 (obj) {
    return (obj === undefined || obj === null);
  }

  /**
   * 浅拷贝对象
   *
   * @param {Object} obj
   * @return {Object}
   */
  function shallowCopyObject$1 (obj) {
    var ret = {};
    for (var i in obj) {
      ret[i] = obj[i];
    }
    return ret;
  }

  /**
   * 创建CSS过滤器
   *
   * @param {Object} options
   *   - {Object} whiteList
   *   - {Function} onAttr
   *   - {Function} onIgnoreAttr
   *   - {Function} safeAttrValue
   */
  function FilterCSS$2 (options) {
    options = shallowCopyObject$1(options || {});
    options.whiteList = options.whiteList || DEFAULT$1.whiteList;
    options.onAttr = options.onAttr || DEFAULT$1.onAttr;
    options.onIgnoreAttr = options.onIgnoreAttr || DEFAULT$1.onIgnoreAttr;
    options.safeAttrValue = options.safeAttrValue || DEFAULT$1.safeAttrValue;
    this.options = options;
  }

  FilterCSS$2.prototype.process = function (css) {
    // 兼容各种奇葩输入
    css = css || '';
    css = css.toString();
    if (!css) return '';

    var me = this;
    var options = me.options;
    var whiteList = options.whiteList;
    var onAttr = options.onAttr;
    var onIgnoreAttr = options.onIgnoreAttr;
    var safeAttrValue = options.safeAttrValue;

    var retCSS = parseStyle(css, function (sourcePosition, position, name, value, source) {

      var check = whiteList[name];
      var isWhite = false;
      if (check === true) isWhite = check;
      else if (typeof check === 'function') isWhite = check(value);
      else if (check instanceof RegExp) isWhite = check.test(value);
      if (isWhite !== true) isWhite = false;

      // 如果过滤后 value 为空则直接忽略
      value = safeAttrValue(name, value);
      if (!value) return;

      var opts = {
        position: position,
        sourcePosition: sourcePosition,
        source: source,
        isWhite: isWhite
      };

      if (isWhite) {

        var ret = onAttr(name, value, opts);
        if (isNull$1(ret)) {
          return name + ':' + value;
        } else {
          return ret;
        }

      } else {

        var ret = onIgnoreAttr(name, value, opts);
        if (!isNull$1(ret)) {
          return ret;
        }

      }
    });

    return retCSS;
  };


  var css = FilterCSS$2;

  /**
   * cssfilter
   *
   * @author 老雷<leizongmin@gmail.com>
   */

  (function (module, exports) {
  var DEFAULT = _default;
  var FilterCSS = css;


  /**
   * XSS过滤
   *
   * @param {String} css 要过滤的CSS代码
   * @param {Object} options 选项：whiteList, onAttr, onIgnoreAttr
   * @return {String}
   */
  function filterCSS (html, options) {
    var xss = new FilterCSS(options);
    return xss.process(html);
  }


  // 输出
  exports = module.exports = filterCSS;
  exports.FilterCSS = FilterCSS;
  for (var i in DEFAULT) exports[i] = DEFAULT[i];

  // 在浏览器端使用
  if (typeof window !== 'undefined') {
    window.filterCSS = module.exports;
  }
  }(lib, lib.exports));

  var util = {
    indexOf: function (arr, item) {
      var i, j;
      if (Array.prototype.indexOf) {
        return arr.indexOf(item);
      }
      for (i = 0, j = arr.length; i < j; i++) {
        if (arr[i] === item) {
          return i;
        }
      }
      return -1;
    },
    forEach: function (arr, fn, scope) {
      var i, j;
      if (Array.prototype.forEach) {
        return arr.forEach(fn, scope);
      }
      for (i = 0, j = arr.length; i < j; i++) {
        fn.call(scope, arr[i], i, arr);
      }
    },
    trim: function (str) {
      if (String.prototype.trim) {
        return str.trim();
      }
      return str.replace(/(^\s*)|(\s*$)/g, "");
    },
    spaceIndex: function (str) {
      var reg = /\s|\n|\t/;
      var match = reg.exec(str);
      return match ? match.index : -1;
    },
  };

  /**
   * default settings
   *
   * @author Zongmin Lei<leizongmin@gmail.com>
   */

  var FilterCSS$1 = lib.exports.FilterCSS;
  var getDefaultCSSWhiteList = lib.exports.getDefaultWhiteList;
  var _$2 = util;

  function getDefaultWhiteList() {
    return {
      a: ["target", "href", "title"],
      abbr: ["title"],
      address: [],
      area: ["shape", "coords", "href", "alt"],
      article: [],
      aside: [],
      audio: [
        "autoplay",
        "controls",
        "crossorigin",
        "loop",
        "muted",
        "preload",
        "src",
      ],
      b: [],
      bdi: ["dir"],
      bdo: ["dir"],
      big: [],
      blockquote: ["cite"],
      br: [],
      caption: [],
      center: [],
      cite: [],
      code: [],
      col: ["align", "valign", "span", "width"],
      colgroup: ["align", "valign", "span", "width"],
      dd: [],
      del: ["datetime"],
      details: ["open"],
      div: [],
      dl: [],
      dt: [],
      em: [],
      figcaption: [],
      figure: [],
      font: ["color", "size", "face"],
      footer: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      header: [],
      hr: [],
      i: [],
      img: ["src", "alt", "title", "width", "height"],
      ins: ["datetime"],
      li: [],
      mark: [],
      nav: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      section: [],
      small: [],
      span: [],
      sub: [],
      summary: [],
      sup: [],
      strong: [],
      strike: [],
      table: ["width", "border", "align", "valign"],
      tbody: ["align", "valign"],
      td: ["width", "rowspan", "colspan", "align", "valign"],
      tfoot: ["align", "valign"],
      th: ["width", "rowspan", "colspan", "align", "valign"],
      thead: ["align", "valign"],
      tr: ["rowspan", "align", "valign"],
      tt: [],
      u: [],
      ul: [],
      video: [
        "autoplay",
        "controls",
        "crossorigin",
        "loop",
        "muted",
        "playsinline",
        "poster",
        "preload",
        "src",
        "height",
        "width",
      ],
    };
  }

  var defaultCSSFilter = new FilterCSS$1();

  /**
   * default onTag function
   *
   * @param {String} tag
   * @param {String} html
   * @param {Object} options
   * @return {String}
   */
  function onTag(tag, html, options) {
    // do nothing
  }

  /**
   * default onIgnoreTag function
   *
   * @param {String} tag
   * @param {String} html
   * @param {Object} options
   * @return {String}
   */
  function onIgnoreTag(tag, html, options) {
    // do nothing
  }

  /**
   * default onTagAttr function
   *
   * @param {String} tag
   * @param {String} name
   * @param {String} value
   * @return {String}
   */
  function onTagAttr(tag, name, value) {
    // do nothing
  }

  /**
   * default onIgnoreTagAttr function
   *
   * @param {String} tag
   * @param {String} name
   * @param {String} value
   * @return {String}
   */
  function onIgnoreTagAttr(tag, name, value) {
    // do nothing
  }

  /**
   * default escapeHtml function
   *
   * @param {String} html
   */
  function escapeHtml(html) {
    return html.replace(REGEXP_LT, "&lt;").replace(REGEXP_GT, "&gt;");
  }

  /**
   * default safeAttrValue function
   *
   * @param {String} tag
   * @param {String} name
   * @param {String} value
   * @param {Object} cssFilter
   * @return {String}
   */
  function safeAttrValue(tag, name, value, cssFilter) {
    // unescape attribute value firstly
    value = friendlyAttrValue(value);

    if (name === "href" || name === "src") {
      // filter `href` and `src` attribute
      // only allow the value that starts with `http://` | `https://` | `mailto:` | `/` | `#`
      value = _$2.trim(value);
      if (value === "#") return "#";
      if (
        !(
          value.substr(0, 7) === "http://" ||
          value.substr(0, 8) === "https://" ||
          value.substr(0, 7) === "mailto:" ||
          value.substr(0, 4) === "tel:" ||
          value.substr(0, 11) === "data:image/" ||
          value.substr(0, 6) === "ftp://" ||
          value.substr(0, 2) === "./" ||
          value.substr(0, 3) === "../" ||
          value[0] === "#" ||
          value[0] === "/"
        )
      ) {
        return "";
      }
    } else if (name === "background") {
      // filter `background` attribute (maybe no use)
      // `javascript:`
      REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
      if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
        return "";
      }
    } else if (name === "style") {
      // `expression()`
      REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex = 0;
      if (REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)) {
        return "";
      }
      // `url()`
      REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex = 0;
      if (REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)) {
        REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
        if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
          return "";
        }
      }
      if (cssFilter !== false) {
        cssFilter = cssFilter || defaultCSSFilter;
        value = cssFilter.process(value);
      }
    }

    // escape `<>"` before returns
    value = escapeAttrValue(value);
    return value;
  }

  // RegExp list
  var REGEXP_LT = /</g;
  var REGEXP_GT = />/g;
  var REGEXP_QUOTE = /"/g;
  var REGEXP_QUOTE_2 = /&quot;/g;
  var REGEXP_ATTR_VALUE_1 = /&#([a-zA-Z0-9]*);?/gim;
  var REGEXP_ATTR_VALUE_COLON = /&colon;?/gim;
  var REGEXP_ATTR_VALUE_NEWLINE = /&newline;?/gim;
  // var REGEXP_DEFAULT_ON_TAG_ATTR_3 = /\/\*|\*\//gm;
  var REGEXP_DEFAULT_ON_TAG_ATTR_4 =
    /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi;
  // var REGEXP_DEFAULT_ON_TAG_ATTR_5 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:/gi;
  // var REGEXP_DEFAULT_ON_TAG_ATTR_6 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:\s*image\//gi;
  var REGEXP_DEFAULT_ON_TAG_ATTR_7 =
    /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
  var REGEXP_DEFAULT_ON_TAG_ATTR_8 = /u\s*r\s*l\s*\(.*/gi;

  /**
   * escape double quote
   *
   * @param {String} str
   * @return {String} str
   */
  function escapeQuote(str) {
    return str.replace(REGEXP_QUOTE, "&quot;");
  }

  /**
   * unescape double quote
   *
   * @param {String} str
   * @return {String} str
   */
  function unescapeQuote(str) {
    return str.replace(REGEXP_QUOTE_2, '"');
  }

  /**
   * escape html entities
   *
   * @param {String} str
   * @return {String}
   */
  function escapeHtmlEntities(str) {
    return str.replace(REGEXP_ATTR_VALUE_1, function replaceUnicode(str, code) {
      return code[0] === "x" || code[0] === "X"
        ? String.fromCharCode(parseInt(code.substr(1), 16))
        : String.fromCharCode(parseInt(code, 10));
    });
  }

  /**
   * escape html5 new danger entities
   *
   * @param {String} str
   * @return {String}
   */
  function escapeDangerHtml5Entities(str) {
    return str
      .replace(REGEXP_ATTR_VALUE_COLON, ":")
      .replace(REGEXP_ATTR_VALUE_NEWLINE, " ");
  }

  /**
   * clear nonprintable characters
   *
   * @param {String} str
   * @return {String}
   */
  function clearNonPrintableCharacter(str) {
    var str2 = "";
    for (var i = 0, len = str.length; i < len; i++) {
      str2 += str.charCodeAt(i) < 32 ? " " : str.charAt(i);
    }
    return _$2.trim(str2);
  }

  /**
   * get friendly attribute value
   *
   * @param {String} str
   * @return {String}
   */
  function friendlyAttrValue(str) {
    str = unescapeQuote(str);
    str = escapeHtmlEntities(str);
    str = escapeDangerHtml5Entities(str);
    str = clearNonPrintableCharacter(str);
    return str;
  }

  /**
   * unescape attribute value
   *
   * @param {String} str
   * @return {String}
   */
  function escapeAttrValue(str) {
    str = escapeQuote(str);
    str = escapeHtml(str);
    return str;
  }

  /**
   * `onIgnoreTag` function for removing all the tags that are not in whitelist
   */
  function onIgnoreTagStripAll() {
    return "";
  }

  /**
   * remove tag body
   * specify a `tags` list, if the tag is not in the `tags` list then process by the specify function (optional)
   *
   * @param {array} tags
   * @param {function} next
   */
  function StripTagBody(tags, next) {
    if (typeof next !== "function") {
      next = function () {};
    }

    var isRemoveAllTag = !Array.isArray(tags);
    function isRemoveTag(tag) {
      if (isRemoveAllTag) return true;
      return _$2.indexOf(tags, tag) !== -1;
    }

    var removeList = [];
    var posStart = false;

    return {
      onIgnoreTag: function (tag, html, options) {
        if (isRemoveTag(tag)) {
          if (options.isClosing) {
            var ret = "[/removed]";
            var end = options.position + ret.length;
            removeList.push([
              posStart !== false ? posStart : options.position,
              end,
            ]);
            posStart = false;
            return ret;
          } else {
            if (!posStart) {
              posStart = options.position;
            }
            return "[removed]";
          }
        } else {
          return next(tag, html, options);
        }
      },
      remove: function (html) {
        var rethtml = "";
        var lastPos = 0;
        _$2.forEach(removeList, function (pos) {
          rethtml += html.slice(lastPos, pos[0]);
          lastPos = pos[1];
        });
        rethtml += html.slice(lastPos);
        return rethtml;
      },
    };
  }

  /**
   * remove html comments
   *
   * @param {String} html
   * @return {String}
   */
  function stripCommentTag(html) {
    var retHtml = "";
    var lastPos = 0;
    while (lastPos < html.length) {
      var i = html.indexOf("<!--", lastPos);
      if (i === -1) {
        retHtml += html.slice(lastPos);
        break;
      }
      retHtml += html.slice(lastPos, i);
      var j = html.indexOf("-->", i);
      if (j === -1) {
        break;
      }
      lastPos = j + 3;
    }
    return retHtml;
  }

  /**
   * remove invisible characters
   *
   * @param {String} html
   * @return {String}
   */
  function stripBlankChar(html) {
    var chars = html.split("");
    chars = chars.filter(function (char) {
      var c = char.charCodeAt(0);
      if (c === 127) return false;
      if (c <= 31) {
        if (c === 10 || c === 13) return true;
        return false;
      }
      return true;
    });
    return chars.join("");
  }

  _default$1.whiteList = getDefaultWhiteList();
  _default$1.getDefaultWhiteList = getDefaultWhiteList;
  _default$1.onTag = onTag;
  _default$1.onIgnoreTag = onIgnoreTag;
  _default$1.onTagAttr = onTagAttr;
  _default$1.onIgnoreTagAttr = onIgnoreTagAttr;
  _default$1.safeAttrValue = safeAttrValue;
  _default$1.escapeHtml = escapeHtml;
  _default$1.escapeQuote = escapeQuote;
  _default$1.unescapeQuote = unescapeQuote;
  _default$1.escapeHtmlEntities = escapeHtmlEntities;
  _default$1.escapeDangerHtml5Entities = escapeDangerHtml5Entities;
  _default$1.clearNonPrintableCharacter = clearNonPrintableCharacter;
  _default$1.friendlyAttrValue = friendlyAttrValue;
  _default$1.escapeAttrValue = escapeAttrValue;
  _default$1.onIgnoreTagStripAll = onIgnoreTagStripAll;
  _default$1.StripTagBody = StripTagBody;
  _default$1.stripCommentTag = stripCommentTag;
  _default$1.stripBlankChar = stripBlankChar;
  _default$1.cssFilter = defaultCSSFilter;
  _default$1.getDefaultCSSWhiteList = getDefaultCSSWhiteList;

  var parser$1 = {};

  /**
   * Simple HTML Parser
   *
   * @author Zongmin Lei<leizongmin@gmail.com>
   */

  var _$1 = util;

  /**
   * get tag name
   *
   * @param {String} html e.g. '<a hef="#">'
   * @return {String}
   */
  function getTagName(html) {
    var i = _$1.spaceIndex(html);
    var tagName;
    if (i === -1) {
      tagName = html.slice(1, -1);
    } else {
      tagName = html.slice(1, i + 1);
    }
    tagName = _$1.trim(tagName).toLowerCase();
    if (tagName.slice(0, 1) === "/") tagName = tagName.slice(1);
    if (tagName.slice(-1) === "/") tagName = tagName.slice(0, -1);
    return tagName;
  }

  /**
   * is close tag?
   *
   * @param {String} html 如：'<a hef="#">'
   * @return {Boolean}
   */
  function isClosing(html) {
    return html.slice(0, 2) === "</";
  }

  /**
   * parse input html and returns processed html
   *
   * @param {String} html
   * @param {Function} onTag e.g. function (sourcePosition, position, tag, html, isClosing)
   * @param {Function} escapeHtml
   * @return {String}
   */
  function parseTag$1(html, onTag, escapeHtml) {

    var rethtml = "";
    var lastPos = 0;
    var tagStart = false;
    var quoteStart = false;
    var currentPos = 0;
    var len = html.length;
    var currentTagName = "";
    var currentHtml = "";

    chariterator: for (currentPos = 0; currentPos < len; currentPos++) {
      var c = html.charAt(currentPos);
      if (tagStart === false) {
        if (c === "<") {
          tagStart = currentPos;
          continue;
        }
      } else {
        if (quoteStart === false) {
          if (c === "<") {
            rethtml += escapeHtml(html.slice(lastPos, currentPos));
            tagStart = currentPos;
            lastPos = currentPos;
            continue;
          }
          if (c === ">" || currentPos === len - 1) {
            rethtml += escapeHtml(html.slice(lastPos, tagStart));
            currentHtml = html.slice(tagStart, currentPos + 1);
            currentTagName = getTagName(currentHtml);
            rethtml += onTag(
              tagStart,
              rethtml.length,
              currentTagName,
              currentHtml,
              isClosing(currentHtml)
            );
            lastPos = currentPos + 1;
            tagStart = false;
            continue;
          }
          if (c === '"' || c === "'") {
            var i = 1;
            var ic = html.charAt(currentPos - i);

            while (ic.trim() === "" || ic === "=") {
              if (ic === "=") {
                quoteStart = c;
                continue chariterator;
              }
              ic = html.charAt(currentPos - ++i);
            }
          }
        } else {
          if (c === quoteStart) {
            quoteStart = false;
            continue;
          }
        }
      }
    }
    if (lastPos < len) {
      rethtml += escapeHtml(html.substr(lastPos));
    }

    return rethtml;
  }

  var REGEXP_ILLEGAL_ATTR_NAME = /[^a-zA-Z0-9\\_:.-]/gim;

  /**
   * parse input attributes and returns processed attributes
   *
   * @param {String} html e.g. `href="#" target="_blank"`
   * @param {Function} onAttr e.g. `function (name, value)`
   * @return {String}
   */
  function parseAttr$1(html, onAttr) {

    var lastPos = 0;
    var lastMarkPos = 0;
    var retAttrs = [];
    var tmpName = false;
    var len = html.length;

    function addAttr(name, value) {
      name = _$1.trim(name);
      name = name.replace(REGEXP_ILLEGAL_ATTR_NAME, "").toLowerCase();
      if (name.length < 1) return;
      var ret = onAttr(name, value || "");
      if (ret) retAttrs.push(ret);
    }

    // 逐个分析字符
    for (var i = 0; i < len; i++) {
      var c = html.charAt(i);
      var v, j;
      if (tmpName === false && c === "=") {
        tmpName = html.slice(lastPos, i);
        lastPos = i + 1;
        lastMarkPos = html.charAt(lastPos) === '"' || html.charAt(lastPos) === "'" ? lastPos : findNextQuotationMark(html, i + 1);
        continue;
      }
      if (tmpName !== false) {
        if (
          i === lastMarkPos
        ) {
          j = html.indexOf(c, i + 1);
          if (j === -1) {
            break;
          } else {
            v = _$1.trim(html.slice(lastMarkPos + 1, j));
            addAttr(tmpName, v);
            tmpName = false;
            i = j;
            lastPos = i + 1;
            continue;
          }
        }
      }
      if (/\s|\n|\t/.test(c)) {
        html = html.replace(/\s|\n|\t/g, " ");
        if (tmpName === false) {
          j = findNextEqual(html, i);
          if (j === -1) {
            v = _$1.trim(html.slice(lastPos, i));
            addAttr(v);
            tmpName = false;
            lastPos = i + 1;
            continue;
          } else {
            i = j - 1;
            continue;
          }
        } else {
          j = findBeforeEqual(html, i - 1);
          if (j === -1) {
            v = _$1.trim(html.slice(lastPos, i));
            v = stripQuoteWrap(v);
            addAttr(tmpName, v);
            tmpName = false;
            lastPos = i + 1;
            continue;
          } else {
            continue;
          }
        }
      }
    }

    if (lastPos < html.length) {
      if (tmpName === false) {
        addAttr(html.slice(lastPos));
      } else {
        addAttr(tmpName, stripQuoteWrap(_$1.trim(html.slice(lastPos))));
      }
    }

    return _$1.trim(retAttrs.join(" "));
  }

  function findNextEqual(str, i) {
    for (; i < str.length; i++) {
      var c = str[i];
      if (c === " ") continue;
      if (c === "=") return i;
      return -1;
    }
  }

  function findNextQuotationMark(str, i) {
    for (; i < str.length; i++) {
      var c = str[i];
      if (c === " ") continue;
      if (c === "'" || c === '"') return i;
      return -1;
    }
  }

  function findBeforeEqual(str, i) {
    for (; i > 0; i--) {
      var c = str[i];
      if (c === " ") continue;
      if (c === "=") return i;
      return -1;
    }
  }

  function isQuoteWrapString(text) {
    if (
      (text[0] === '"' && text[text.length - 1] === '"') ||
      (text[0] === "'" && text[text.length - 1] === "'")
    ) {
      return true;
    } else {
      return false;
    }
  }

  function stripQuoteWrap(text) {
    if (isQuoteWrapString(text)) {
      return text.substr(1, text.length - 2);
    } else {
      return text;
    }
  }

  parser$1.parseTag = parseTag$1;
  parser$1.parseAttr = parseAttr$1;

  /**
   * filter xss
   *
   * @author Zongmin Lei<leizongmin@gmail.com>
   */

  var FilterCSS = lib.exports.FilterCSS;
  var DEFAULT = _default$1;
  var parser = parser$1;
  var parseTag = parser.parseTag;
  var parseAttr = parser.parseAttr;
  var _ = util;

  /**
   * returns `true` if the input value is `undefined` or `null`
   *
   * @param {Object} obj
   * @return {Boolean}
   */
  function isNull(obj) {
    return obj === undefined || obj === null;
  }

  /**
   * get attributes for a tag
   *
   * @param {String} html
   * @return {Object}
   *   - {String} html
   *   - {Boolean} closing
   */
  function getAttrs(html) {
    var i = _.spaceIndex(html);
    if (i === -1) {
      return {
        html: "",
        closing: html[html.length - 2] === "/",
      };
    }
    html = _.trim(html.slice(i + 1, -1));
    var isClosing = html[html.length - 1] === "/";
    if (isClosing) html = _.trim(html.slice(0, -1));
    return {
      html: html,
      closing: isClosing,
    };
  }

  /**
   * shallow copy
   *
   * @param {Object} obj
   * @return {Object}
   */
  function shallowCopyObject(obj) {
    var ret = {};
    for (var i in obj) {
      ret[i] = obj[i];
    }
    return ret;
  }

  function keysToLowerCase(obj) {
    var ret = {};
    for (var i in obj) {
      if (Array.isArray(obj[i])) {
        ret[i.toLowerCase()] = obj[i].map(function (item) {
          return item.toLowerCase();
        });
      } else {
        ret[i.toLowerCase()] = obj[i];
      }
    }
    return ret;
  }

  /**
   * FilterXSS class
   *
   * @param {Object} options
   *        whiteList (or allowList), onTag, onTagAttr, onIgnoreTag,
   *        onIgnoreTagAttr, safeAttrValue, escapeHtml
   *        stripIgnoreTagBody, allowCommentTag, stripBlankChar
   *        css{whiteList, onAttr, onIgnoreAttr} `css=false` means don't use `cssfilter`
   */
  function FilterXSS(options) {
    options = shallowCopyObject(options || {});

    if (options.stripIgnoreTag) {
      if (options.onIgnoreTag) {
        console.error(
          'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
        );
      }
      options.onIgnoreTag = DEFAULT.onIgnoreTagStripAll;
    }
    if (options.whiteList || options.allowList) {
      options.whiteList = keysToLowerCase(options.whiteList || options.allowList);
    } else {
      options.whiteList = DEFAULT.whiteList;
    }

    options.onTag = options.onTag || DEFAULT.onTag;
    options.onTagAttr = options.onTagAttr || DEFAULT.onTagAttr;
    options.onIgnoreTag = options.onIgnoreTag || DEFAULT.onIgnoreTag;
    options.onIgnoreTagAttr = options.onIgnoreTagAttr || DEFAULT.onIgnoreTagAttr;
    options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
    options.escapeHtml = options.escapeHtml || DEFAULT.escapeHtml;
    this.options = options;

    if (options.css === false) {
      this.cssFilter = false;
    } else {
      options.css = options.css || {};
      this.cssFilter = new FilterCSS(options.css);
    }
  }

  /**
   * start process and returns result
   *
   * @param {String} html
   * @return {String}
   */
  FilterXSS.prototype.process = function (html) {
    // compatible with the input
    html = html || "";
    html = html.toString();
    if (!html) return "";

    var me = this;
    var options = me.options;
    var whiteList = options.whiteList;
    var onTag = options.onTag;
    var onIgnoreTag = options.onIgnoreTag;
    var onTagAttr = options.onTagAttr;
    var onIgnoreTagAttr = options.onIgnoreTagAttr;
    var safeAttrValue = options.safeAttrValue;
    var escapeHtml = options.escapeHtml;
    var cssFilter = me.cssFilter;

    // remove invisible characters
    if (options.stripBlankChar) {
      html = DEFAULT.stripBlankChar(html);
    }

    // remove html comments
    if (!options.allowCommentTag) {
      html = DEFAULT.stripCommentTag(html);
    }

    // if enable stripIgnoreTagBody
    var stripIgnoreTagBody = false;
    if (options.stripIgnoreTagBody) {
      stripIgnoreTagBody = DEFAULT.StripTagBody(
        options.stripIgnoreTagBody,
        onIgnoreTag
      );
      onIgnoreTag = stripIgnoreTagBody.onIgnoreTag;
    }

    var retHtml = parseTag(
      html,
      function (sourcePosition, position, tag, html, isClosing) {
        var info = {
          sourcePosition: sourcePosition,
          position: position,
          isClosing: isClosing,
          isWhite: Object.prototype.hasOwnProperty.call(whiteList, tag),
        };

        // call `onTag()`
        var ret = onTag(tag, html, info);
        if (!isNull(ret)) return ret;

        if (info.isWhite) {
          if (info.isClosing) {
            return "</" + tag + ">";
          }

          var attrs = getAttrs(html);
          var whiteAttrList = whiteList[tag];
          var attrsHtml = parseAttr(attrs.html, function (name, value) {
            // call `onTagAttr()`
            var isWhiteAttr = _.indexOf(whiteAttrList, name) !== -1;
            var ret = onTagAttr(tag, name, value, isWhiteAttr);
            if (!isNull(ret)) return ret;

            if (isWhiteAttr) {
              // call `safeAttrValue()`
              value = safeAttrValue(tag, name, value, cssFilter);
              if (value) {
                return name + '="' + value + '"';
              } else {
                return name;
              }
            } else {
              // call `onIgnoreTagAttr()`
              ret = onIgnoreTagAttr(tag, name, value, isWhiteAttr);
              if (!isNull(ret)) return ret;
              return;
            }
          });

          // build new tag html
          html = "<" + tag;
          if (attrsHtml) html += " " + attrsHtml;
          if (attrs.closing) html += " /";
          html += ">";
          return html;
        } else {
          // call `onIgnoreTag()`
          ret = onIgnoreTag(tag, html, info);
          if (!isNull(ret)) return ret;
          return escapeHtml(html);
        }
      },
      escapeHtml
    );

    // if enable stripIgnoreTagBody
    if (stripIgnoreTagBody) {
      retHtml = stripIgnoreTagBody.remove(retHtml);
    }

    return retHtml;
  };

  var xss$1 = FilterXSS;

  /**
   * xss
   *
   * @author Zongmin Lei<leizongmin@gmail.com>
   */

  (function (module, exports) {
  var DEFAULT = _default$1;
  var parser = parser$1;
  var FilterXSS = xss$1;

  /**
   * filter xss function
   *
   * @param {String} html
   * @param {Object} options { whiteList, onTag, onTagAttr, onIgnoreTag, onIgnoreTagAttr, safeAttrValue, escapeHtml }
   * @return {String}
   */
  function filterXSS(html, options) {
    var xss = new FilterXSS(options);
    return xss.process(html);
  }

  exports = module.exports = filterXSS;
  exports.filterXSS = filterXSS;
  exports.FilterXSS = FilterXSS;

  (function () {
    for (var i in DEFAULT) {
      exports[i] = DEFAULT[i];
    }
    for (var j in parser) {
      exports[j] = parser[j];
    }
  })();

  // using `xss` on the browser, output `filterXSS` to the globals
  if (typeof window !== "undefined") {
    window.filterXSS = module.exports;
  }

  // using `xss` on the WebWorker, output `filterXSS` to the globals
  function isWorkerEnv() {
    return (
      typeof self !== "undefined" &&
      typeof DedicatedWorkerGlobalScope !== "undefined" &&
      self instanceof DedicatedWorkerGlobalScope
    );
  }
  if (isWorkerEnv()) {
    self.filterXSS = module.exports;
  }
  }(lib$1, lib$1.exports));

  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  const EditModalContent = styled__default["default"].div`
  padding: 10px;
  width: 80vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .main {
    flex: 1;
    overflow: hidden;

    > textarea {
      height: 100%;
      resize: none;
    }
  }
`;
  const xss = new lib$1.exports.FilterXSS({
    css: false,
    whiteList: __spreadProps(__spreadValues({}, lib$1.exports.getDefaultWhiteList()), { iframe: ["src", "style", "class"] }),
    onIgnoreTag: function(tag, html, options) {
      if (["html", "body", "head", "meta", "style", "div"].includes(tag)) {
        return html;
      }
    }
  });
  function getInjectedStyle() {
    try {
      const currentTextColor = document.defaultView.getComputedStyle(document.querySelector(".tc-content-background")).color;
      return `<style>body { color: ${currentTextColor} }</style>`;
    } catch (e) {
      return "";
    }
  }
  const GroupCustomWebPanelRender = (props) => {
    const ref = React.useRef(null);
    const html = props.html;
    React.useEffect(() => {
      if (!ref.current || !html) {
        return;
      }
      const doc = ref.current.contentWindow.document;
      doc.open();
      doc.writeln(getInjectedStyle(), xss.process(html));
      doc.close();
    }, [html]);
    if (!html) {
      return /* @__PURE__ */ React__default["default"].createElement(component.NoData, null);
    }
    return /* @__PURE__ */ React__default["default"].createElement("iframe", {
      ref,
      className: "w-full h-full"
    });
  };
  GroupCustomWebPanelRender.displayName = "GroupCustomWebPanelRender";
  const GroupCustomWebPanelEditor = React__default["default"].memo((props) => {
    const [html, setHtml] = React.useState(() => {
      var _a;
      return (_a = props.initValue) != null ? _a : "";
    });
    common.useWatch([html], () => {
      props.onChange(html);
    });
    return /* @__PURE__ */ React__default["default"].createElement(component.TextArea, {
      value: html,
      onChange: (e) => setHtml(e.target.value)
    });
  });
  GroupCustomWebPanelEditor.displayName = "GroupCustomWebPanelEditor";
  const GroupCustomWebPanel = (props) => {
    return /* @__PURE__ */ React__default["default"].createElement(component.GroupExtraDataPanel, {
      names: ["html"],
      render: (dataMap) => {
        var _a, _b, _c, _d;
        return /* @__PURE__ */ React__default["default"].createElement(GroupCustomWebPanelRender, {
          html: (_d = (_c = dataMap["html"]) != null ? _c : (_b = (_a = props.panelInfo) == null ? void 0 : _a.meta) == null ? void 0 : _b.html) != null ? _d : ""
        });
      },
      renderEdit: (dataMap) => {
        var _a, _b, _c, _d;
        return /* @__PURE__ */ React__default["default"].createElement(EditModalContent, null, /* @__PURE__ */ React__default["default"].createElement("div", null, index.Translate.editTip), /* @__PURE__ */ React__default["default"].createElement("div", {
          className: "main"
        }, /* @__PURE__ */ React__default["default"].createElement(GroupCustomWebPanelEditor, {
          initValue: (_d = (_c = dataMap["html"]) != null ? _c : (_b = (_a = props.panelInfo) == null ? void 0 : _a.meta) == null ? void 0 : _b.html) != null ? _d : "",
          onChange: (html) => dataMap["html"] = html
        })));
      }
    });
  };
  GroupCustomWebPanel.displayName = "GroupCustomWebPanel";

  exports["default"] = GroupCustomWebPanel;

}));
//# sourceMappingURL=GroupCustomWebPanelRender-b8284750.js.map