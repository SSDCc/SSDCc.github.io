definePlugin('@plugins/com.msgbyte.webview/index-c5bf8582.js', ['require', 'exports', '@capital/common'], (function (require, exports, common) { 'use strict';

  const Translate = {
    webpanel: common.localTrans({ "zh-CN": "\u7F51\u9875\u9762\u677F", "en-US": "Webview Panel" }),
    customwebpanel: common.localTrans({
      "zh-CN": "\u81EA\u5B9A\u4E49\u7F51\u9875\u9762\u677F",
      "en-US": "Custom Webview Panel"
    }),
    notfound: common.localTrans({
      "zh-CN": "\u52A0\u8F7D\u5931\u8D25, \u9762\u677F\u4FE1\u606F\u4E0D\u5B58\u5728",
      "en-US": "Loading failed, panel info does not exist"
    }),
    website: common.localTrans({
      "zh-CN": "\u7F51\u5740",
      "en-US": "Website"
    }),
    htmlcode: common.localTrans({
      "zh-CN": "HTML\u4EE3\u7801",
      "en-US": "HTML Code"
    }),
    openInExtra: common.localTrans({
      "zh-CN": "\u5728\u5916\u90E8\u6253\u5F00",
      "en-US": "Open in extra"
    }),
    editTip: common.localTrans({
      "zh-CN": "\u4F7F\u7528html\u8BED\u6CD5\u7F16\u8F91, \u5173\u95ED\u7A97\u53E3\u81EA\u52A8\u4FDD\u5B58",
      "en-US": "Edit with html syntax, close the window and save automatically"
    })
  };

  const PLUGIN_NAME = "com.msgbyte.webview";
  common.regGroupPanel({
    name: `${PLUGIN_NAME}/grouppanel`,
    label: Translate.webpanel,
    provider: PLUGIN_NAME,
    extraFormMeta: [
      {
        type: "text",
        name: "url",
        label: Translate.website
      }
    ],
    render: common.Loadable(() => new Promise(function (resolve, reject) { require(['./GroupWebPanelRender-ac2015c4'], resolve, reject); })),
    menus: [
      {
        name: "openInNewWindow",
        label: Translate.openInExtra,
        icon: "mdi:web",
        onClick: (panelInfo) => {
          var _a, _b;
          if ((_a = panelInfo.meta) == null ? void 0 : _a.url) {
            window.open(String((_b = panelInfo.meta) == null ? void 0 : _b.url));
          }
        }
      }
    ]
  });
  common.regGroupPanel({
    name: `${PLUGIN_NAME}/customwebpanel`,
    label: Translate.customwebpanel,
    provider: PLUGIN_NAME,
    render: common.Loadable(() => new Promise(function (resolve, reject) { require(['./GroupCustomWebPanelRender-eae684c0'], resolve, reject); }), {
      componentName: `${PLUGIN_NAME}:GroupCustomWebPanelRender`
    })
  });

  exports.Translate = Translate;

}));
//# sourceMappingURL=index-c5bf8582.js.map
