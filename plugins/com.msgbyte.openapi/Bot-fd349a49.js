definePlugin('@plugins/com.msgbyte.openapi/Bot-fd349a49.js', ['exports', 'react', '@capital/component', './index-c235bf17', './index-f472a738', './useOpenAppAction-74be9afd', '@capital/common', 'styled-components'], (function (exports, React, component, index, index$1, useOpenAppAction, common, styled) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  const Bot = React__default["default"].memo(() => {
    const { capability, bot } = index.useOpenAppInfo();
    const { loading, handleChangeAppCapability, handleUpdateBotInfo } = useOpenAppAction.useOpenAppAction();
    return /* @__PURE__ */ React__default["default"].createElement("div", {
      className: "plugin-openapi-app-info_bot"
    }, /* @__PURE__ */ React__default["default"].createElement(component.FullModalField, {
      title: index$1.Translate.enableBotCapability,
      content: /* @__PURE__ */ React__default["default"].createElement(component.Switch, {
        disabled: loading,
        checked: capability.includes("bot"),
        onChange: (checked) => handleChangeAppCapability("bot", checked)
      })
    }), capability.includes("bot") && /* @__PURE__ */ React__default["default"].createElement(component.FullModalField, {
      title: index$1.Translate.bot.callback,
      tip: index$1.Translate.bot.callbackTip,
      value: bot == null ? void 0 : bot.callbackUrl,
      editable: true,
      renderEditor: component.DefaultFullModalInputEditorRender,
      onSave: (str) => handleUpdateBotInfo("callbackUrl", String(str))
    }));
  });
  Bot.displayName = "Bot";

  exports["default"] = Bot;

}));
//# sourceMappingURL=Bot-fd349a49.js.map
