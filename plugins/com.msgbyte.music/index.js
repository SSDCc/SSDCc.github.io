definePlugin('@plugins/com.msgbyte.music', ['require', '@capital/common', '@capital/component'], (function (require, common, component) { 'use strict';

  const Translate = {
    musicpanel: common.localTrans({
      "zh-CN": "\u5728\u7EBF\u542C\u97F3\u4E50",
      "en-US": "YesPlayMusic"
    })
  };

  const PLUGIN_ID = "com.msgbyte.music";
  console.log(`Plugin ${PLUGIN_ID} is loaded`);
  common.regCustomPanel({
    position: "navbar-more",
    icon: "mdi:disc-player",
    name: `${PLUGIN_ID}/musicpanel`,
    label: Translate.musicpanel,
    render: component.Loadable(() => new Promise(function (resolve, reject) { require(['./MusicPanel-fd27dac4'], resolve, reject); }).then((module) => module.MusicPanel), {
      componentName: `${PLUGIN_ID}:CustomMusicPanelRender`
    })
  });

}));
//# sourceMappingURL=index.js.map
