definePlugin('@plugins/com.msgbyte.genshin/index-e0f14c29.js', ['require', 'exports', '@capital/common'], (function (require, exports, common) { 'use strict';

  const Translate = {
    genshin: common.localTrans({ "zh-CN": "\u539F\u795E", "en-US": "Genshin" }),
    gacha: common.localTrans({ "zh-CN": "\u62BD\u5361", "en-US": "Gacha" })
  };

  common.regCustomPanel({
    position: "personal",
    icon: "akar-icons:game-controller",
    name: "com.msgbyte.genshin/genshinPanel",
    label: Translate.genshin,
    render: common.Loadable(() => new Promise(function (resolve, reject) { require(['./index-b5ab0930'], resolve, reject); }))
  });

  exports.Translate = Translate;

}));
//# sourceMappingURL=index-e0f14c29.js.map
