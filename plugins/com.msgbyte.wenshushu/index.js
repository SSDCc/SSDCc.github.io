definePlugin('@plugins/com.msgbyte.wenshushu', ['@capital/common'], (function (common) { 'use strict';

  common.regChatInputAction({
    label: "\u6587\u53D4\u53D4",
    onClick: () => {
      const width = 1230;
      const height = 736;
      const top = (window.screen.height - height) / 2;
      const left = (window.screen.width - width) / 2;
      window.open("https://www.wenshushu.cn/", "\u6587\u53D4\u53D4", buildWindowFeatures({
        top,
        left,
        width,
        height,
        menubar: false,
        toolbar: false,
        location: false,
        status: false,
        resizable: true
      }));
    }
  });
  function buildWindowFeatures(options) {
    return Object.entries(options).map(([key, val]) => `${key}=${val}`).join(",");
  }

}));
//# sourceMappingURL=index.js.map
