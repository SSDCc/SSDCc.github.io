definePlugin('@plugins/com.msgbyte.draw/index-b9e407c9.js', ['require', 'exports', 'react', '@capital/common'], (function (require, exports, React, common) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  const Translate = {
    draw: common.localTrans({ "zh-CN": "\u7ED8\u56FE", "en-US": "Draw" }),
    send: common.localTrans({ "zh-CN": "\u53D1\u9001", "en-US": "Send" })
  };

  const DrawModal = common.Loadable(() => new Promise(function (resolve, reject) { require(['./DrawModal-1bcff596'], resolve, reject); }));
  common.regChatInputAction({
    label: Translate.draw,
    onClick: (actions) => {
      const key = common.openModal(/* @__PURE__ */ React__default["default"].createElement(DrawModal, {
        actions,
        onSuccess: () => common.closeModal(key)
      }));
    }
  });

  exports.Translate = Translate;

}));
//# sourceMappingURL=index-b9e407c9.js.map
