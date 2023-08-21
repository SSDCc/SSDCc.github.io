definePlugin('@plugins/com.msgbyte.env.electron', ['require', '@capital/common', '@capital/component', 'react'], (function (require, common, component, React) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  const Translate = {
    deviceInfo: common.localTrans({
      "zh-CN": "\u8BBE\u5907\u4FE1\u606F",
      "en-US": "Device Info"
    }),
    clientName: common.localTrans({
      "zh-CN": "\u5BA2\u6237\u7AEF\u540D\u79F0",
      "en-US": "Client Name"
    }),
    clientVersion: common.localTrans({
      "zh-CN": "\u5BA2\u6237\u7AEF\u7248\u672C\u53F7",
      "en-US": "Client Version"
    }),
    platform: common.localTrans({
      "zh-CN": "\u5E73\u53F0",
      "en-US": "Platform"
    }),
    newVersionTip: common.localTrans({
      "zh-CN": "\u65B0\u7248\u672C\u63D0\u793A",
      "en-US": "New Version Upgrade Tip"
    }),
    newVersionDesc: common.localTrans({
      "zh-CN": "\u53D1\u73B0\u6709\u65B0\u7684\u7248\u672C\u53EF\u4EE5\u5B89\u88C5",
      "en-US": "A new version was found to be installed"
    }),
    upgradeNow: common.localTrans({
      "zh-CN": "\u7ACB\u5373\u66F4\u65B0",
      "en-US": "Upgrade Now"
    }),
    checkVersion: common.localTrans({
      "zh-CN": "\u68C0\u67E5\u66F4\u65B0",
      "en-US": "Check for updates"
    }),
    isLatest: common.localTrans({
      "zh-CN": "\u5DF2\u7ECF\u662F\u6700\u65B0\u7248",
      "en-US": "Already the latest version"
    })
  };

  var __defProp = Object.defineProperty;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  function forwardSharedEvent(eventName, processPayload) {
    common.sharedEvent.on(eventName, async (payload) => {
      let type = eventName;
      if (processPayload) {
        const res = await processPayload(payload);
        if (!res) {
          return;
        }
        payload = res.payload;
        type = res.type;
      }
      common.postMessageEvent(type, payload);
    });
  }
  function getDeviceInfo() {
    var _a;
    const deviceInfo = __spreadValues({
      name: "",
      version: "0.0.0",
      platform: "windows"
    }, (_a = window.__electronDeviceInfo) != null ? _a : {});
    return deviceInfo;
  }

  const url = "https://tailchat.msgbyte.com/downloads/client.json";
  async function checkUpdate() {
    const deviceInfo = getDeviceInfo();
    const [semver, config] = await Promise.all([
      new Promise(function (resolve, reject) { require(['./index-55d1c82a'], resolve, reject); }).then(function (n) { return n.index; }),
      fetch(url).then((res) => res.json())
    ]);
    const version = deviceInfo.version;
    const platform = deviceInfo.platform;
    const latestConfig = config == null ? void 0 : config[platform];
    const latestVersion = latestConfig == null ? void 0 : latestConfig.version;
    const latestUrl = latestConfig == null ? void 0 : latestConfig.url;
    if (!latestVersion) {
      console.warn("Not found latest version");
      return true;
    }
    if (!latestUrl) {
      console.warn("Not found latest url");
      return true;
    }
    if (version === "0.0.0") {
      console.warn("Current version not valid");
      return true;
    }
    if (semver.gt(latestVersion, version)) {
      component.notification.info({
        message: Translate.newVersionTip,
        description: /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("div", null, Translate.newVersionDesc), /* @__PURE__ */ React__default["default"].createElement("div", null, version, " -> ", latestVersion)),
        btn: /* @__PURE__ */ React__default["default"].createElement(component.Button, {
          type: "primary",
          onClick: () => {
            window.open(latestUrl);
          }
        }, Translate.upgradeNow),
        placement: "topRight",
        duration: 0
      });
      return true;
    }
    return false;
  }

  const DeviceInfoPanel = React__default["default"].memo(() => {
    const deviceInfo = getDeviceInfo();
    return /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("div", null, Translate.clientName, ": ", deviceInfo.name), /* @__PURE__ */ React__default["default"].createElement("div", null, Translate.clientVersion, ": ", deviceInfo.version), /* @__PURE__ */ React__default["default"].createElement("div", null, Translate.platform, ": ", deviceInfo.platform), /* @__PURE__ */ React__default["default"].createElement(component.Button, {
      onClick: async () => {
        const res = await checkUpdate();
        if (res === false) {
          common.showSuccessToasts(Translate.isLatest);
        }
      }
    }, Translate.checkVersion));
  });
  DeviceInfoPanel.displayName = "DeviceInfoPanel";

  const PLUGIN_NAME = "Electron Support";
  console.log(`Plugin ${PLUGIN_NAME} is loaded`);
  common.regCustomPanel({
    position: "setting",
    icon: "",
    name: "com.msgbyte.env.electron/deviceInfoPanel",
    label: Translate.deviceInfo,
    render: DeviceInfoPanel
  });
  common.regChatInputButton({
    render: () => {
      return /* @__PURE__ */ React__default["default"].createElement(component.Icon, {
        className: "text-2xl cursor-pointer",
        icon: "mdi:content-cut",
        rotate: 3,
        onClick: () => {
          common.postMessageEvent("callScreenshotsTool");
        }
      });
    }
  });
  forwardSharedEvent("receiveUnmutedMessage");
  setTimeout(() => {
    checkUpdate();
  }, 1e3);

}));
//# sourceMappingURL=index.js.map
