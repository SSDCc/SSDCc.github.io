definePlugin('@plugins/com.msgbyte.toolwa', ['@capital/common', '@capital/component', 'react'], (function (common, component, React) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  const Translate = {
    panelName: common.localTrans({ "zh-CN": "\u5DE5\u5177\u54C7\uFF01", "en-US": "Toolwa!" })
  };

  const PLUGIN_NAME = "com.msgbyte.toolwa";
  common.regCustomPanel({
    name: `${PLUGIN_NAME}/personPanel`,
    position: "personal",
    label: Translate.panelName,
    icon: "openmoji:frog",
    render: () => /* @__PURE__ */ React__default["default"].createElement(component.Webview, {
      className: "w-full h-full bg-white",
      url: "https://toolwa.com/"
    })
  });

}));
//# sourceMappingURL=index.js.map
