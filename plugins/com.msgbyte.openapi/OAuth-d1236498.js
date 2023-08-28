definePlugin('@plugins/com.msgbyte.openapi/OAuth-d1236498.js', ['exports', 'react', '@capital/component', './index-c235bf17', './useOpenAppAction-74be9afd', './index-f472a738', '@capital/common', 'styled-components'], (function (exports, React, component, index, useOpenAppAction, index$1, common, styled) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  const OAuth = React__default["default"].memo(() => {
    var _a, _b;
    const { capability, oauth } = index.useOpenAppInfo();
    const { loading, handleChangeAppCapability, handleUpdateOAuthInfo } = useOpenAppAction.useOpenAppAction();
    return /* @__PURE__ */ React__default["default"].createElement("div", {
      className: "plugin-openapi-app-info_oauth"
    }, /* @__PURE__ */ React__default["default"].createElement(component.FullModalField, {
      title: index$1.Translate.oauth.open,
      content: /* @__PURE__ */ React__default["default"].createElement(component.Switch, {
        disabled: loading,
        checked: capability.includes("oauth"),
        onChange: (checked) => handleChangeAppCapability("oauth", checked)
      })
    }), capability.includes("oauth") && /* @__PURE__ */ React__default["default"].createElement(component.FullModalField, {
      title: index$1.Translate.oauth.allowedCallbackUrls,
      tip: index$1.Translate.oauth.allowedCallbackUrlsTip,
      content: /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, ((_a = oauth == null ? void 0 : oauth.redirectUrls) != null ? _a : []).map((url, i) => /* @__PURE__ */ React__default["default"].createElement("p", {
        key: i
      }, url))),
      value: ((_b = oauth == null ? void 0 : oauth.redirectUrls) != null ? _b : []).join("\n"),
      editable: true,
      renderEditor: component.DefaultFullModalTextAreaEditorRender,
      onSave: (str) => handleUpdateOAuthInfo("redirectUrls", String(str).split("\n").map((t) => t.trim()))
    }));
  });
  OAuth.displayName = "OAuth";

  exports["default"] = OAuth;

}));
//# sourceMappingURL=OAuth-d1236498.js.map
