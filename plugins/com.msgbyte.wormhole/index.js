definePlugin('@plugins/com.msgbyte.wormhole', ['@capital/common'], (function (common) { 'use strict';

  common.regChatInputAction({
    label: "wormhole",
    onClick: () => {
      const width = 414;
      const height = 736;
      const top = (window.screen.height - height) / 2;
      const left = (window.screen.width - width) / 2;
      window.open("https://wormhole.app/", "wormhole", buildWindowFeatures({
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
