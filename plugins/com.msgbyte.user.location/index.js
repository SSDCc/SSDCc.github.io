definePlugin('@plugins/com.msgbyte.user.location', ['@capital/common'], (function (common) { 'use strict';

  common.regUserExtraInfo({
    name: "location",
    label: common.localTrans({ "zh-CN": "\u6240\u5728\u57CE\u5E02", "en-US": "City" })
  });

}));
//# sourceMappingURL=index.js.map
