definePlugin('@plugins/com.msgbyte.env.rn', ['@capital/common', 'react'], (function (common, React) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  const Translate = {
    from: common.localTrans({
      "zh-CN": "\u6765\u81EA",
      "en-US": "From"
    }),
    dm: common.localTrans({
      "zh-CN": "\u79C1\u4FE1",
      "en-US": "DM"
    }),
    deviceInfo: common.localTrans({
      "zh-CN": "\u8BBE\u5907\u4FE1\u606F",
      "en-US": "Device Info"
    }),
    clientVersion: common.localTrans({
      "zh-CN": "\u5BA2\u6237\u7AEF\u7248\u672C\u53F7",
      "en-US": "Client Version"
    })
  };

  const DeviceInfoPanel = React__default["default"].memo(() => {
    var _a;
    const deviceInfo = (_a = window.__rnDeviceInfo) != null ? _a : {};
    return /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("div", null, Translate.clientVersion, ": ", deviceInfo.version, "(", deviceInfo.readableVersion, ")"));
  });
  DeviceInfoPanel.displayName = "DeviceInfoPanel";

  function forwardSharedEvent(eventName, processPayload) {
    if (!window.ReactNativeWebView) {
      return;
    }
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
      window.ReactNativeWebView.postMessage(JSON.stringify({
        _isTailchat: true,
        type,
        payload
      }));
    });
  }

  const PLUGIN_NAME = "ReactNative Support";
  console.log(`Plugin ${PLUGIN_NAME} is loaded`);
  common.regCustomPanel({
    position: "setting",
    icon: "",
    name: "com.msgbyte.env.rn/deviceInfoPanel",
    label: Translate.deviceInfo,
    render: DeviceInfoPanel
  });
  forwardSharedEvent("loadColorScheme");
  forwardSharedEvent("loginSuccess", async (payload) => {
    let token = window.localStorage.getItem("jsonwebtoken");
    try {
      token = JSON.parse(token).rawData;
    } catch (e) {
    }
    if (typeof token !== "string") {
      console.error("Cannot get token:", token);
      return;
    }
    return {
      type: "bindWebsocket",
      payload: {
        url: common.getServiceUrl(),
        token,
        userInfo: payload
      }
    };
  });
  forwardSharedEvent("receiveUnmutedMessage", async (payload) => {
    var _a, _b, _c;
    const message = payload;
    const currentUserId = (_a = common.getGlobalState()) == null ? void 0 : _a.user.info._id;
    if (currentUserId === message.author) {
      return;
    }
    const [userInfo, scopeName] = await Promise.all([
      common.getCachedUserInfo(message.author),
      message.groupId ? common.getCachedBaseGroupInfo(message.groupId).then((d) => d.name) : Promise.resolve(Translate.dm)
    ]);
    const nickname = (_b = userInfo == null ? void 0 : userInfo.nickname) != null ? _b : "";
    const icon = (_c = userInfo == null ? void 0 : userInfo.avatar) != null ? _c : void 0;
    const content = message.content;
    const title = `${Translate.from} [${scopeName}] ${nickname}`;
    const body = common.getMessageTextDecorators().serialize(content);
    return {
      type: "showNotification",
      payload: {
        title,
        body,
        icon
      }
    };
  });

}));
//# sourceMappingURL=index.js.map
