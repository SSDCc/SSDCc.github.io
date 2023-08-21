definePlugin('@plugins/com.msgbyte.theme.miku', ['require', '@capital/common'], (function (require, common) { 'use strict';

  common.regPluginColorScheme({
    label: "Miku \u8471",
    name: "light+miku"
  });
  common.regPluginColorScheme({
    label: "Miku \u8471(\u591C\u95F4\u6A21\u5F0F)",
    name: "dark+miku"
  });
  common.sharedEvent.on("loadColorScheme", (colorSchemeName) => {
    if (colorSchemeName === "light+miku" || colorSchemeName === "dark+miku") {
      console.log("\u6B63\u5728\u52A0\u8F7D\u521D\u97F3\u672A\u6765\u4E3B\u9898...");
      new Promise(function (resolve, reject) { require(['./theme-1fe61689'], resolve, reject); });
    }
  });

}));
//# sourceMappingURL=index.js.map
