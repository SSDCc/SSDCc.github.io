definePlugin('@plugins/com.msgbyte.openapi/Profile-785187a1.js', ['exports', './index-02387e64', 'react', '@capital/component', './index-39c66b34', '@capital/common'], (function (exports, index, React, component, index$1, common) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  var css = "/* purgecss start ignore */\n\n/* purgecss end ignore */";
  index.n(css,{});

  const Profile = React__default["default"].memo(() => {
    const { appId, appSecret } = index.useOpenAppInfo();
    return /* @__PURE__ */ React__default["default"].createElement("div", {
      className: "plugin-openapi-app-info_profile"
    }, /* @__PURE__ */ React__default["default"].createElement("h2", null, index$1.Translate.app.appcret), /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement(component.FullModalField, {
      title: "App ID",
      content: appId
    }), /* @__PURE__ */ React__default["default"].createElement(component.FullModalField, {
      title: "App Secret",
      content: /* @__PURE__ */ React__default["default"].createElement(component.SensitiveText, {
        text: appSecret
      })
    })));
  });
  Profile.displayName = "Profile";

  exports["default"] = Profile;

}));
//# sourceMappingURL=Profile-785187a1.js.map
