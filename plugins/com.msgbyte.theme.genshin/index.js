definePlugin('@plugins/com.msgbyte.theme.genshin', ['require', '@capital/common'], (function (require, common) { 'use strict';

  common.regPluginColorScheme({
    label: "\u539F\u795E-\u80E1\u6843",
    name: "light+genshin-hutao"
  });
  common.regPluginColorScheme({
    label: "\u539F\u795E-\u7434",
    name: "light+genshin-jean"
  });
  common.regPluginColorScheme({
    label: "\u539F\u795E-\u5B89\u67CF",
    name: "light+genshin-amber"
  });
  common.regPluginColorScheme({
    label: "\u539F\u795E-\u83AB\u5A1C",
    name: "light+genshin-mona"
  });
  common.regPluginColorScheme({
    label: "\u539F\u795E-\u7F57\u838E\u8389\u4E9A",
    name: "light+genshin-rosaria"
  });
  common.sharedEvent.on("loadColorScheme", (colorSchemeName) => {
    if (colorSchemeName === "light+genshin-hutao") {
      console.log("\u6B63\u5728\u52A0\u8F7D\u80E1\u6843\u4E3B\u9898...");
      new Promise(function (resolve, reject) { require(['./theme-0f14f7bc'], resolve, reject); });
    } else if (colorSchemeName === "light+genshin-jean") {
      console.log("\u6B63\u5728\u52A0\u8F7D\u7434\u4E3B\u9898...");
      new Promise(function (resolve, reject) { require(['./theme-148a82db'], resolve, reject); });
    } else if (colorSchemeName === "light+genshin-amber") {
      console.log("\u6B63\u5728\u52A0\u8F7D\u5B89\u67CF\u4E3B\u9898...");
      new Promise(function (resolve, reject) { require(['./theme-311cb0ec'], resolve, reject); });
    } else if (colorSchemeName === "light+genshin-mona") {
      console.log("\u6B63\u5728\u52A0\u8F7D\u83AB\u5A1C\u4E3B\u9898...");
      new Promise(function (resolve, reject) { require(['./theme-d6291c3d'], resolve, reject); });
    } else if (colorSchemeName === "light+genshin-rosaria") {
      console.log("\u6B63\u5728\u52A0\u8F7D\u7F57\u838E\u8389\u4E9A\u4E3B\u9898...");
      new Promise(function (resolve, reject) { require(['./theme-71d5be73'], resolve, reject); });
    }
  });

}));
//# sourceMappingURL=index.js.map
