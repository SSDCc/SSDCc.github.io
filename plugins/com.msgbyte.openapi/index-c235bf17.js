definePlugin('@plugins/com.msgbyte.openapi/index-c235bf17.js', ['require', 'exports', 'react', '@capital/common', '@capital/component', './index-f472a738', 'styled-components'], (function (require, exports, React, common, component, index$1, styled) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

  var __defProp$1 = Object.defineProperty;
  var __defProps$1 = Object.defineProperties;
  var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
  var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
  var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues$1 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    if (__getOwnPropSymbols$1)
      for (var prop of __getOwnPropSymbols$1(b)) {
        if (__propIsEnum$1.call(b, prop))
          __defNormalProp$1(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
  const OpenAppInfoContext = React__default["default"].createContext(null);
  OpenAppInfoContext.displayName = "OpenAppInfoContext";
  const OpenAppInfoProvider = (props) => {
    return /* @__PURE__ */ React__default["default"].createElement(OpenAppInfoContext.Provider, {
      value: __spreadProps$1(__spreadValues$1({}, props.appInfo), {
        refresh: props.refresh,
        onSelectApp: props.onSelectApp
      })
    }, props.children);
  };
  function useOpenAppInfo() {
    return React.useContext(OpenAppInfoContext);
  }

  var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

  var css$1 = "/* purgecss start ignore */\n\n.plugin-openapi-app-info {\n  display: flex;\n  height: 100%;\n}\n\n.plugin-openapi-app-info .plugin-openapi-app-info_body {\n  padding: 0 10px;\n}\n\n/* purgecss end ignore */\n";
  n(css$1,{});

  const MenuTitle = styled__default["default"].div`
  display: flex;

  .iconify {
    margin-right: 4px;
    font-size: 16px;
    cursor: pointer;
  }
`;
  const Profile = common.Loadable(() => new Promise(function (resolve, reject) { require(['./Profile-a7f50739'], resolve, reject); }));
  const Bot = common.Loadable(() => new Promise(function (resolve, reject) { require(['./Bot-fd349a49'], resolve, reject); }));
  const Webpage = common.Loadable(() => new Promise(function (resolve, reject) { require(['./Webpage-e886a99c'], resolve, reject); }));
  const OAuth = common.Loadable(() => new Promise(function (resolve, reject) { require(['./OAuth-d1236498'], resolve, reject); }));
  const AppInfo = React__default["default"].memo(() => {
    const { appName, onSelectApp } = useOpenAppInfo();
    const handleBack = common.useEvent(() => {
      onSelectApp(null);
    });
    const menu = React.useMemo(() => [
      {
        type: "group",
        title: /* @__PURE__ */ React__default["default"].createElement(MenuTitle, null, /* @__PURE__ */ React__default["default"].createElement(component.Icon, {
          icon: "mdi:arrow-left",
          onClick: handleBack
        }), " ", appName),
        children: [
          {
            type: "item",
            title: index$1.Translate.app.basicInfo,
            content: /* @__PURE__ */ React__default["default"].createElement(Profile, null)
          },
          {
            type: "item",
            title: index$1.Translate.app.bot,
            content: /* @__PURE__ */ React__default["default"].createElement(Bot, null)
          },
          {
            type: "item",
            title: index$1.Translate.app.webpage,
            content: /* @__PURE__ */ React__default["default"].createElement(Webpage, null),
            isDev: true
          },
          {
            type: "item",
            title: index$1.Translate.app.oauth,
            content: /* @__PURE__ */ React__default["default"].createElement(OAuth, null)
          }
        ]
      }
    ], []);
    return /* @__PURE__ */ React__default["default"].createElement("div", {
      className: "plugin-openapi-app-info"
    }, /* @__PURE__ */ React__default["default"].createElement(component.SidebarView, {
      menu,
      defaultContentPath: "0.children.0.content"
    }));
  });
  AppInfo.displayName = "AppInfo";

  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  const schema = common.createFastFormSchema({
    appName: common.fieldSchema.string().required(index$1.Translate.appNameCannotBeEmpty).max(20, index$1.Translate.appNameTooLong),
    appDesc: common.fieldSchema.string()
  });
  const fields = [
    { type: "text", name: "appName", label: index$1.Translate.app.appName },
    {
      type: "textarea",
      name: "appDesc",
      label: index$1.Translate.app.appDesc
    }
  ];
  const CreateOpenApp = React__default["default"].memo((props) => {
    const handleSubmit = async (values) => {
      var _a;
      try {
        await common.postRequest("/openapi/app/create", __spreadProps(__spreadValues({}, values), {
          appIcon: ""
        }));
        common.showToasts(index$1.Translate.createApplicationSuccess, "success");
        (_a = props.onSuccess) == null ? void 0 : _a.call(props);
      } catch (e) {
        common.showErrorToasts(e);
      }
    };
    return /* @__PURE__ */ React__default["default"].createElement(common.ModalWrapper, {
      title: index$1.Translate.createApplication
    }, /* @__PURE__ */ React__default["default"].createElement(component.WebFastForm, {
      schema,
      fields,
      onSubmit: handleSubmit
    }));
  });
  CreateOpenApp.displayName = "CreateOpenApp";

  const ServiceChecker = React__default["default"].memo((props) => {
    const { loading, value: enabled } = common.useAsync(async () => {
      const services = await common.fetchAvailableServices();
      return services.includes("openapi.app");
    }, []);
    if (loading) {
      return /* @__PURE__ */ React__default["default"].createElement(component.LoadingSpinner, null);
    }
    if (!enabled) {
      return /* @__PURE__ */ React__default["default"].createElement("div", null, index$1.Translate.noservice);
    }
    return /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, props.children);
  });
  ServiceChecker.displayName = "ServiceChecker";

  function useOpenAppList() {
    const [selectedAppId, setSelectedAppId] = React.useState(null);
    const {
      loading,
      value: allApps = [],
      refresh
    } = common.useAsyncRefresh(async () => {
      const { data } = await common.postRequest("/openapi/app/all");
      return data != null ? data : [];
    }, []);
    const navigate = common.useNavigate();
    const location = common.useLocation();
    React.useEffect(() => {
      const { appId } = common.urlSearchParse(location.search, {
        ignoreQueryPrefix: true
      });
      if (common.isValidStr(appId)) {
        setSelectedAppId(appId);
      }
    }, []);
    return {
      loading,
      allApps,
      refresh,
      appInfo: allApps.find((a) => a._id === selectedAppId),
      handleSetSelectedApp(appId) {
        navigate({
          search: common.appendUrlSearch({
            appId
          })
        });
        setSelectedAppId(appId);
      }
    };
  }

  var css = "/* purgecss start ignore */\n\n.plugin-openapi-main-panel {\n  height: 100%;\n}\n\n/* purgecss end ignore */\n";
  n(css,{});

  const OpenApiMainPanel = React__default["default"].memo(() => {
    const { loading, allApps, refresh, appInfo, handleSetSelectedApp } = useOpenAppList();
    const columns = React.useMemo(() => [
      {
        title: index$1.Translate.name,
        dataIndex: "appName"
      },
      {
        title: index$1.Translate.operation,
        key: "action",
        render: (_, record) => /* @__PURE__ */ React__default["default"].createElement(component.Space, null, /* @__PURE__ */ React__default["default"].createElement(component.Button, {
          onClick: () => handleSetSelectedApp(record._id)
        }, index$1.Translate.enter))
      }
    ], []);
    const handleCreateOpenApp = () => {
      const key = common.openModal(/* @__PURE__ */ React__default["default"].createElement(CreateOpenApp, {
        onSuccess: () => {
          refresh();
          common.closeModal(key);
        }
      }));
    };
    return /* @__PURE__ */ React__default["default"].createElement(component.Loading, {
      spinning: loading,
      style: { height: "100%" }
    }, /* @__PURE__ */ React__default["default"].createElement("div", {
      className: "plugin-openapi-main-panel"
    }, appInfo ? /* @__PURE__ */ React__default["default"].createElement(OpenAppInfoProvider, {
      appInfo,
      onSelectApp: handleSetSelectedApp,
      refresh
    }, /* @__PURE__ */ React__default["default"].createElement(AppInfo, null)) : /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, /* @__PURE__ */ React__default["default"].createElement(component.Button, {
      style: { marginBottom: 10 },
      type: "primary",
      onClick: handleCreateOpenApp
    }, index$1.Translate.createApplication), /* @__PURE__ */ React__default["default"].createElement(component.Table, {
      columns,
      dataSource: allApps,
      pagination: false
    }))));
  });
  OpenApiMainPanel.displayName = "OpenApiMainPanel";
  const OpenApiMainPanelWrapper = () => {
    return /* @__PURE__ */ React__default["default"].createElement(ServiceChecker, null, /* @__PURE__ */ React__default["default"].createElement(OpenApiMainPanel, null));
  };

  var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': OpenApiMainPanelWrapper
  });

  exports.index = index;
  exports.n = n;
  exports.useOpenAppInfo = useOpenAppInfo;

}));
//# sourceMappingURL=index-c235bf17.js.map
