definePlugin('@plugins/com.msgbyte.mdpanel/index-644f5d37.js', ['require', 'exports', '@capital/common', '@capital/component'], (function (require, exports, common, component) { 'use strict';

  const Translate = {
    name: common.localTrans({
      "zh-CN": "Markdown \u9762\u677F",
      "en-US": "Markdown Panel"
    }),
    editTip: common.localTrans({
      "zh-CN": "\u4F7F\u7528markdown\u8BED\u6CD5\u7F16\u8F91, \u5173\u95ED\u7A97\u53E3\u81EA\u52A8\u4FDD\u5B58",
      "en-US": "Edit with markdown syntax, close the window and save automatically"
    })
  };

  const PLUGIN_ID = "com.msgbyte.mdpanel";
  const PLUGIN_NAME = "Markdown Panel";
  console.log(`Plugin ${PLUGIN_NAME}(${PLUGIN_ID}) is loaded`);
  common.regGroupPanel({
    name: `${PLUGIN_NAME}/customwebpanel`,
    label: Translate.name,
    provider: PLUGIN_NAME,
    render: component.Loadable(() => new Promise(function (resolve, reject) { require(['./MarkdownPanel-4a4f4b28'], resolve, reject); }), {
      componentName: `${PLUGIN_ID}:MarkdownPanel`
    })
  });

  exports.Translate = Translate;

}));
//# sourceMappingURL=index-644f5d37.js.map
