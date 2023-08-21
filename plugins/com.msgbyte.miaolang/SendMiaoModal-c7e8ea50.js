definePlugin('@plugins/com.msgbyte.miaolang/SendMiaoModal-c7e8ea50.js', ['exports', 'react', '@capital/common', '@capital/component', './miaotrans-112ab722', './index-f914e0eb'], (function (exports, React, common, component, miaotrans, index) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  const SendMiaoModal = React__default["default"].memo((props) => {
    const [text, setText] = React.useState("");
    const modalContext = common.useModalContext();
    const handleSendMiao = React.useCallback(() => {
      const miao = miaotrans.encode(text);
      props.actions.sendMsg(miao);
      modalContext == null ? void 0 : modalContext.closeModal();
    }, [text, modalContext, props.actions]);
    return /* @__PURE__ */ React__default["default"].createElement(common.ModalWrapper, {
      title: index.Translate.title
    }, /* @__PURE__ */ React__default["default"].createElement(component.TextArea, {
      placeholder: index.Translate.inputHuman,
      value: text,
      onChange: (e) => setText(e.target.value)
    }), /* @__PURE__ */ React__default["default"].createElement(component.Button, {
      style: { marginTop: 8 },
      type: "primary",
      block: true,
      onClick: handleSendMiao
    }, index.Translate.send));
  });
  SendMiaoModal.displayName = "SendMiaoModal";

  exports.SendMiaoModal = SendMiaoModal;

}));
//# sourceMappingURL=SendMiaoModal-c7e8ea50.js.map
