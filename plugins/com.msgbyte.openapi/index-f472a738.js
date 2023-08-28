definePlugin('@plugins/com.msgbyte.openapi/index-f472a738.js', ['require', 'exports', '@capital/common'], (function (require, exports, common) { 'use strict';

  const Translate = {
    openapi: common.localTrans({ "zh-CN": "\u5F00\u653E\u5E73\u53F0", "en-US": "Open Api" }),
    noservice: common.localTrans({
      "zh-CN": "\u7BA1\u7406\u5458\u6CA1\u6709\u5F00\u653E Openapi \u670D\u52A1",
      "en-US": "The administrator did not open the Openapi service"
    }),
    enableBotCapability: common.localTrans({
      "zh-CN": "\u5F00\u542F\u673A\u5668\u4EBA\u80FD\u529B",
      "en-US": "Enable Bot Capability"
    }),
    name: common.localTrans({
      "zh-CN": "\u540D\u79F0",
      "en-US": "Name"
    }),
    operation: common.localTrans({
      "zh-CN": "\u64CD\u4F5C",
      "en-US": "Operation"
    }),
    delete: common.localTrans({
      "zh-CN": "\u5220\u9664",
      "en-US": "Delete"
    }),
    enter: common.localTrans({
      "zh-CN": "\u8FDB\u5165",
      "en-US": "Enter"
    }),
    createApplication: common.localTrans({
      "zh-CN": "\u521B\u5EFA\u5E94\u7528",
      "en-US": "Create Application"
    }),
    createApplicationSuccess: common.localTrans({
      "zh-CN": "\u521B\u5EFA\u5E94\u7528\u6210\u529F",
      "en-US": "Create Application Success"
    }),
    appNameCannotBeEmpty: common.localTrans({
      "zh-CN": "\u5E94\u7528\u540D\u4E0D\u80FD\u4E3A\u7A7A",
      "en-US": "App Name Cannot be Empty"
    }),
    appNameTooLong: common.localTrans({
      "zh-CN": "\u5E94\u7528\u540D\u8FC7\u957F",
      "en-US": "App Name too Long"
    }),
    app: {
      basicInfo: common.localTrans({
        "zh-CN": "\u57FA\u7840\u4FE1\u606F",
        "en-US": "Basic Info"
      }),
      appName: common.localTrans({
        "zh-CN": "\u5E94\u7528\u540D\u79F0",
        "en-US": "App Name"
      }),
      appDesc: common.localTrans({
        "zh-CN": "\u5E94\u7528\u63CF\u8FF0",
        "en-US": "App Description"
      }),
      bot: common.localTrans({
        "zh-CN": "\u673A\u5668\u4EBA",
        "en-US": "Bot"
      }),
      webpage: common.localTrans({
        "zh-CN": "\u7F51\u9875",
        "en-US": "Web Page"
      }),
      oauth: common.localTrans({
        "zh-CN": "\u7B2C\u4E09\u65B9\u767B\u5F55",
        "en-US": "OAuth"
      }),
      appcret: common.localTrans({
        "zh-CN": "\u5E94\u7528\u51ED\u8BC1",
        "en-US": "Application Credentials"
      })
    },
    bot: {
      callback: common.localTrans({
        "zh-CN": "\u6D88\u606F\u56DE\u8C03\u5730\u5740",
        "en-US": "Callback Url"
      }),
      callbackTip: common.localTrans({
        "zh-CN": "\u673A\u5668\u4EBA\u88AB @ \u7684\u65F6\u5019\u4F1A\u5411\u8BE5\u5730\u5740\u53D1\u9001\u8BF7\u6C42(\u6536\u4EF6\u7BB1\u63A5\u53D7\u5230\u65B0\u5185\u5BB9\u65F6\u4F1A\u53D1\u9001\u56DE\u8C03)",
        "en-US": "The bot will send a request to this address when it is mentioned (callback will be sent when the inbox receives new content)"
      })
    },
    oauth: {
      open: common.localTrans({
        "zh-CN": "\u5F00\u542F OAuth",
        "en-US": "Open OAuth"
      }),
      allowedCallbackUrls: common.localTrans({
        "zh-CN": "\u5141\u8BB8\u7684\u56DE\u8C03\u5730\u5740",
        "en-US": "Allowed Callback Urls"
      }),
      allowedCallbackUrlsTip: common.localTrans({
        "zh-CN": "\u591A\u4E2A\u56DE\u8C03\u5730\u5740\u5355\u72EC\u4E00\u884C",
        "en-US": "Multiple callback addresses on a single line"
      })
    }
  };

  const MainPanel = common.Loadable(() => new Promise(function (resolve, reject) { require(['./index-c235bf17'], resolve, reject); }).then(function (n) { return n.index; }));
  common.regCustomPanel({
    position: "setting",
    icon: "",
    name: "com.msgbyte.openapi/mainPanel",
    label: Translate.openapi,
    render: MainPanel
  });
  common.regPluginRootRoute({
    name: "com.msgbyte.openapi/route",
    path: "/openapi",
    component: MainPanel
  });

  exports.Translate = Translate;

}));
//# sourceMappingURL=index-f472a738.js.map
