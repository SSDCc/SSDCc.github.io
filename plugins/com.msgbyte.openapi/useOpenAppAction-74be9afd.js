definePlugin('@plugins/com.msgbyte.openapi/useOpenAppAction-74be9afd.js', ['exports', '@capital/common', './index-c235bf17'], (function (exports, common, index) { 'use strict';

  function useOpenAppAction() {
    const { refresh, appId, capability, onSelectApp } = index.useOpenAppInfo();
    const [{ loading }, handleChangeAppCapability] = common.useAsyncRequest(async (targetCapability, checked) => {
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
    const [, handleSetAppInfo] = common.useAsyncRequest(async (fieldName, fieldValue) => {
      await common.postRequest("/openapi/app/setAppInfo", {
        appId,
        fieldName,
        fieldValue
      });
      await refresh();
    }, [appId, refresh]);
    const [, handleUpdateOAuthInfo] = common.useAsyncRequest(async (name, value) => {
      await common.postRequest("/openapi/app/setAppOAuthInfo", {
        appId,
        fieldName: name,
        fieldValue: value
      });
      await refresh();
    }, []);
    const [, handleUpdateBotInfo] = common.useAsyncRequest(async (name, value) => {
      await common.postRequest("/openapi/app/setAppBotInfo", {
        appId,
        fieldName: name,
        fieldValue: value
      });
      await refresh();
    }, [appId, refresh]);
    const handleDeleteApp = common.useEvent(() => {
      common.openReconfirmModal({
        onConfirm: async () => {
          try {
            await common.postRequest("/openapi/app/delete", {
              appId
            });
            onSelectApp(null);
            await refresh();
          } catch (err) {
            common.showErrorToasts(err);
          }
        }
      });
    });
    return {
      loading,
      handleSetAppInfo,
      handleDeleteApp,
      handleChangeAppCapability,
      handleUpdateOAuthInfo,
      handleUpdateBotInfo
    };
  }

  exports.useOpenAppAction = useOpenAppAction;

}));
//# sourceMappingURL=useOpenAppAction-74be9afd.js.map
