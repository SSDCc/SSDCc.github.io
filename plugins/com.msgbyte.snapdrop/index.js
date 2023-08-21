definePlugin('@plugins/com.msgbyte.snapdrop', ['@capital/common', '@capital/component', 'react'], (function (common, component, React) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  const Translate = {
    panelName: common.localTrans({ "zh-CN": "\u9694\u7A7A\u6295\u9001", "en-US": "Snapdrop" })
  };

  const PLUGIN_NAME = "com.msgbyte.snapdrop";
  common.regCustomPanel({
    name: `${PLUGIN_NAME}/personPanel`,
    position: "personal",
    label: Translate.panelName,
    icon: "mdi:radio-tower",
    render: () => /* @__PURE__ */ React__default["default"].createElement(component.WebviewKeepAlive, {
      className: "w-full h-full bg-white",
      url: "https://snapdrop.net/"
    })
  });

}));
//# sourceMappingURL=index.js.map
