definePlugin('@plugins/com.msgbyte.music/MusicPanel-fd27dac4.js', ['exports', 'react', '@capital/component'], (function (exports, React, component) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  const url = "https://music.moonrailgun.com/";
  const MusicPanel = React__default["default"].memo(() => {
    return /* @__PURE__ */ React__default["default"].createElement(component.WebviewKeepAlive, {
      key: String(url),
      className: "w-full h-full",
      url
    });
  });
  MusicPanel.displayName = "MusicPanel";

  exports.MusicPanel = MusicPanel;

}));
//# sourceMappingURL=MusicPanel-fd27dac4.js.map
