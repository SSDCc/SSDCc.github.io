definePlugin('@plugins/com.msgbyte.miaolang/index-f914e0eb.js', ['require', 'exports', '@capital/common', 'react'], (function (require, exports, common, React) { 'use strict';

  const Translate = {
    miaoTrans: common.localTrans({ "zh-CN": "\u55B5\u8BED\u7FFB\u8BD1", "en-US": "Meow Translate" }),
    title: common.localTrans({ "zh-CN": "\u55B5\u8A00\u55B5\u8BED", "en-US": "Meow meow" }),
    send: common.localTrans({ "zh-CN": "\u53D1\u9001\u55B5\u8BED", "en-US": "Send meow" }),
    inputHuman: common.localTrans({ "zh-CN": "\u8F93\u5165\u4EBA\u8BDD", "en-US": "Input Human" }),
    calls: common.localTrans({ "zh-CN": "\u55B5", "en-US": "Meow~" })
  };

  const SendMiaoModal = common.Loadable(() => new Promise(function (resolve, reject) { require(['./SendMiaoModal-c7e8ea50'], resolve, reject); }).then((module) => ({
    default: module.SendMiaoModal
  })));
  new Promise(function (resolve, reject) { require(['./reg-78556f23'], resolve, reject); });
  common.regChatInputAction({
    label: Translate.title,
    onClick: (actions) => {
      common.openModal(React.createElement(SendMiaoModal, { actions }));
    }
  });

  exports.Translate = Translate;

}));
//# sourceMappingURL=index-f914e0eb.js.map
