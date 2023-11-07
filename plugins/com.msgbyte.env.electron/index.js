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
    }),
    nativeWebviewRender: common.localTrans({
      "zh-CN": "\u542F\u7528\u539F\u751F\u6D4F\u89C8\u5668\u5185\u6838\u6E32\u67D3",
      "en-US": "Use Native Webview Render"
    }),
    nativeWebviewRenderDesc: common.localTrans({
      "zh-CN": "\u89E3\u9664\u9ED8\u8BA4\u7F51\u9875\u8BBF\u95EE\u9650\u5236\uFF0C\u5141\u8BB8\u5728Tailchat\u5D4C\u5165\u4EFB\u610F\u7F51\u7AD9\u5185\u5BB9",
      "en-US": "Lift default web page access restrictions and allow any website content to be embedded in Tailchat"
    }),
    nativeWebviewRenderHideTip: common.localTrans({
      "zh-CN": "\u7EC4\u4EF6\u88AB\u906E\u6321\uFF0C\u6682\u65F6\u9690\u85CF\u7F51\u9875\u89C6\u56FE",
      "en-US": "The component is obscured, temporarily hiding the web view"
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

  const ElectronWebview = React__default["default"].memo((props) => {
    const containerRef = React.useRef(null);
    const [isVisiable, setIsVisiable] = React.useState(true);
    const key = props.src;
    const url = props.src;
    React.useEffect(() => {
      if (!containerRef.current) {
        return;
      }
      const rect = containerRef.current.getBoundingClientRect();
      window.electron.ipcRenderer.sendMessage("$mount-webview", {
        key,
        url,
        rect: {
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height
        }
      });
      return () => {
        window.electron.ipcRenderer.sendMessage("$unmount-webview", {
          key
        });
      };
    }, [key, url]);
    React.useEffect(() => {
      if (!containerRef.current) {
        return;
      }
      const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isVisible === true) {
            window.electron.ipcRenderer.sendMessage("$show-webview", {
              key
            });
          } else {
            window.electron.ipcRenderer.sendMessage("$hide-webview", {
              key
            });
          }
          setIsVisiable(entry.isVisible);
        });
      }, {
        trackVisibility: true,
        delay: 200
      });
      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          const { target } = entry;
          if (!target.parentElement) {
            return;
          }
          const rect = target.getBoundingClientRect();
          window.electron.ipcRenderer.sendMessage("$update-webview-rect", {
            key,
            rect: {
              x: rect.x,
              y: rect.y,
              width: rect.width,
              height: rect.height
            }
          });
        });
      });
      intersectionObserver.observe(containerRef.current);
      resizeObserver.observe(containerRef.current);
      return () => {
        if (containerRef.current) {
          intersectionObserver.unobserve(containerRef.current);
          resizeObserver.unobserve(containerRef.current);
        }
      };
    }, [key]);
    return /* @__PURE__ */ React__default["default"].createElement("div", {
      ref: containerRef,
      className: props.className,
      style: { width: "100%", height: "100%" }
    }, isVisiable === false && /* @__PURE__ */ React__default["default"].createElement("span", null, Translate.nativeWebviewRenderHideTip));
  });
  ElectronWebview.displayName = "ElectronWebview";

  var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

  var css = "/* purgecss start ignore */\n\n.ant-dropdown-menu {\n  box-shadow: none; /* avoid group detail dropdown's shadow will make dom invisiable */\n}\n\n/* purgecss end ignore */\r\n";
  n(css,{});

  const PLUGIN_NAME = "Electron Support";
  const WEBVIEW_CONFIG = "electron:nativeWebviewRender";
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
  common.regPluginSettings({
    position: "system",
    type: "boolean",
    name: WEBVIEW_CONFIG,
    label: Translate.nativeWebviewRender,
    desc: Translate.nativeWebviewRenderDesc
  });
  forwardSharedEvent("receiveUnmutedMessage");
  setTimeout(() => {
    checkUpdate();
  }, 1e3);
  let changedWithElectron = false;
  const checkSettingConfig = (settings) => {
    if (settings[WEBVIEW_CONFIG] === true) {
      common.setWebviewKernel(() => ElectronWebview);
      changedWithElectron = true;
    } else if (changedWithElectron === true) {
      common.resetWebviewKernel();
    }
  };
  common.sharedEvent.on("loginSuccess", () => {
    common.getCachedUserSettings().then((settings) => {
      checkSettingConfig(settings);
    });
  });
  common.sharedEvent.on("userSettingsUpdate", (settings) => {
    checkSettingConfig(settings);
  });
  navigator.mediaDevices.getDisplayMedia = async (options) => {
    const source = await window.electron.ipcRenderer.getDesktopCapturerSource();
    const stream = await window.navigator.mediaDevices.getUserMedia({
      video: {
        mandatory: {
          chromeMediaSource: "desktop",
          chromeMediaSourceId: source.id
        }
      }
    });
    return stream;
  };

}));
//# sourceMappingURL=index.js.map
