definePlugin('@plugins/com.msgbyte.openapi/Profile-a7f50739.js', ['exports', './index-c235bf17', 'react', '@capital/component', './index-f472a738', './useOpenAppAction-74be9afd', 'styled-components', '@capital/common'], (function (exports, index, React, component, index$1, useOpenAppAction, styled, common) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

  var css = "/* purgecss start ignore */\n\n.plugin-openapi-app-info_profile h2 {\n  margin-bottom: 10px;\n}\n\n/* purgecss end ignore */\n";
  index.n(css,{});

  const TwoColumnContainer = styled__default["default"].div`
  display: flex;

  > div {
    flex: 1;
  }
`;
  const Profile = React__default["default"].memo(() => {
    const { appId, appSecret, appName, appDesc, appIcon } = index.useOpenAppInfo();
    const { handleSetAppInfo, handleDeleteApp } = useOpenAppAction.useOpenAppAction();
    return /* @__PURE__ */ React__default["default"].createElement("div", {
      className: "plugin-openapi-app-info_profile"
    }, /* @__PURE__ */ React__default["default"].createElement("h2", null, index$1.Translate.app.basicInfo), /* @__PURE__ */ React__default["default"].createElement(TwoColumnContainer, null, /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement(component.FullModalField, {
      title: index$1.Translate.app.appName,
      value: appName,
      editable: true,
      renderEditor: component.DefaultFullModalInputEditorRender,
      onSave: (val) => handleSetAppInfo("appName", val)
    }), /* @__PURE__ */ React__default["default"].createElement(component.FullModalField, {
      title: index$1.Translate.app.appDesc,
      value: appDesc,
      editable: true,
      renderEditor: component.DefaultFullModalInputEditorRender,
      onSave: (val) => handleSetAppInfo("appDesc", val)
    })), /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement(component.AvatarUploader, {
      onUploadSuccess: (fileInfo) => {
        handleSetAppInfo("appIcon", fileInfo.url);
      }
    }, /* @__PURE__ */ React__default["default"].createElement(component.Avatar, {
      name: appName,
      src: appIcon,
      size: 72
    })))), /* @__PURE__ */ React__default["default"].createElement(component.Divider, null), /* @__PURE__ */ React__default["default"].createElement("h2", null, index$1.Translate.app.appcret), /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement(component.FullModalField, {
      title: "App ID",
      content: appId
    }), /* @__PURE__ */ React__default["default"].createElement(component.FullModalField, {
      title: "App Secret",
      content: /* @__PURE__ */ React__default["default"].createElement(component.SensitiveText, {
        text: appSecret
      })
    })), /* @__PURE__ */ React__default["default"].createElement(component.Divider, null), /* @__PURE__ */ React__default["default"].createElement(component.Button, {
      type: "primary",
      danger: true,
      onClick: handleDeleteApp
    }, index$1.Translate.delete));
  });
  Profile.displayName = "Profile";

  exports["default"] = Profile;

}));
//# sourceMappingURL=Profile-a7f50739.js.map
