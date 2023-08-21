definePlugin('@plugins/com.msgbyte.bbcode', ['require', 'react', '@capital/common'], (function (require, React, common) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  const PLUGIN_ID = "com.msgbyte.bbcode";
  new Promise(function (resolve, reject) { require(['./render-f8e47d8f'], resolve, reject); }).then(function (n) { return n.render; });
  const BBCode = common.Loadable(() => new Promise(function (resolve, reject) { require(['./render-f8e47d8f'], resolve, reject); }).then(function (n) { return n.render; }), {
    componentName: `${PLUGIN_ID}:renderComponent`,
    fallback: null
  });
  let serialize;
  new Promise(function (resolve, reject) { require(['./serialize-9132de35'], resolve, reject); }).then((module) => {
    serialize = module.bbcodeToPlainText;
  });
  common.regMessageRender((message) => {
    return /* @__PURE__ */ React__default["default"].createElement(BBCode, {
      plainText: message
    });
  });
  common.regMessageTextDecorators(() => ({
    url: (url, label) => label ? `[url=${url}]${label}[/url]` : `[url]${url}[/url]`,
    image: (plain, attrs) => {
      if (attrs.height && attrs.width) {
        return `[img height=${attrs.height} width=${attrs.width}]${plain}[/img]`;
      }
      return `[img]${plain}[/img]`;
    },
    card: (plain, attrs) => {
      const h = [
        "card",
        ...Object.entries(attrs).map(([k, v]) => `${k}=${v}`)
      ].join(" ");
      return `[${h}]${plain}[/card]`;
    },
    mention: (userId, userName) => `[at=${userId}]${userName}[/at]`,
    emoji: (emojiCode) => `[emoji]${stripColons(emojiCode)}[/emoji]`,
    serialize: (plain) => serialize ? serialize(plain) : plain
  }));
  function stripColons(str) {
    const colonIndex = str.indexOf(":");
    if (colonIndex > -1) {
      if (colonIndex === str.length - 1) {
        str = str.substring(0, colonIndex);
        return stripColons(str);
      } else {
        str = str.substr(colonIndex + 1);
        return stripColons(str);
      }
    }
    return str;
  }

}));
//# sourceMappingURL=index.js.map
