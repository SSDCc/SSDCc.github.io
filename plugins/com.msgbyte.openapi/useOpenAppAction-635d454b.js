definePlugin('@plugins/com.msgbyte.openapi/useOpenAppAction-635d454b.js', ['exports', '@capital/common', './index-02387e64'], (function (exports, common, index) { 'use strict';

  function useOpenAppAction() {
    const { refresh, appId, capability } = index.useOpenAppInfo();
    const [{ loading }, handleChangeAppCapability] = common.useAsyncFn(async (targetCapability, checked) => {
      const newCapability = [...capability];
      const findIndex = newCapability.findIndex((c) => c === targetCapability);
      if (checked) {
        if (findIndex === -1) {
          newCapability.push(targetCapability);
        }
      } else {
        if (findIndex !== -1) {
          newCapability.splice(findIndex, 1);
        }
      }
      await common.postRequest("/openapi/app/setAppCapability", {
        appId,
        capability: newCapability
      });
      await refresh();
    }, [appId, capability, refresh]);
    const [, handleUpdateOAuthInfo] = common.useAsyncFn(async (name, value) => {
      await common.postRequest("/openapi/app/setAppOAuthInfo", {
        appId,
        fieldName: name,
        fieldValue: value
      });
      await refresh();
    }, []);
    const [, handleUpdateBotInfo] = common.useAsyncFn(async (name, value) => {
      await common.postRequest("/openapi/app/setAppBotInfo", {
        appId,
        fieldName: name,
        fieldValue: value
      });
      await refresh();
    }, [appId, refresh]);
    return {
      loading,
      handleChangeAppCapability,
      handleUpdateOAuthInfo,
      handleUpdateBotInfo
    };
  }

  exports.useOpenAppAction = useOpenAppAction;

}));
//# sourceMappingURL=useOpenAppAction-635d454b.js.map
