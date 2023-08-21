definePlugin('@plugins/com.msgbyte.bbcode/serialize-9132de35.js', ['exports', './parser-34594393', 'react'], (function (exports, parser, React) { 'use strict';

  /**
   * Checks if `value` is `null` or `undefined`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
   * @example
   *
   * _.isNil(null);
   * // => true
   *
   * _.isNil(void 0);
   * // => true
   *
   * _.isNil(NaN);
   * // => false
   */

  function isNil(value) {
    return value == null;
  }

  var isNil_1 = isNil;

  function bbcodeNodeToPlainText(node) {
    var _a;
    if (isNil_1(node)) {
      return "";
    }
    if (typeof node === "string") {
      return String(node);
    } else {
      if (node.tag === "img") {
        return "[\u56FE\u7247]";
      }
      if (node.tag === "emoji") {
        return `:${node.content.join("")}:`;
      }
      if (node.tag === "at") {
        return `@${node.content.join("")}`;
      }
      return ((_a = node.content) != null ? _a : []).map((sub) => bbcodeNodeToPlainText(sub)).join("");
    }
  }
  function bbcodeToPlainText(bbcode) {
    const ast = parser.bbcodeParser.parse(bbcode);
    return ast.map(bbcodeNodeToPlainText).join("");
  }

  exports.bbcodeToPlainText = bbcodeToPlainText;

}));
//# sourceMappingURL=serialize-9132de35.js.map
