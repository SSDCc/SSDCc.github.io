definePlugin('@plugins/com.msgbyte.ai-assistant', ['@capital/common', '@capital/component', 'react', 'axios', 'styled-components'], (function (common, component, React, axios, styled) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
  var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

  const Translate = {
    name: common.localTrans({
      "zh-CN": "AI Assistant",
      "en-US": "AI Assistant"
    }),
    helpMeTo: common.localTrans({
      "zh-CN": "\u5E2E\u6211:",
      "en-US": "Help me to:"
    }),
    improveText: common.localTrans({
      "zh-CN": "\u6539\u8FDB\u6587\u672C",
      "en-US": "Improve Text"
    }),
    makeShorter: common.localTrans({
      "zh-CN": "\u7CBE\u7B80\u5185\u5BB9",
      "en-US": "Make Shorter"
    }),
    makeLonger: common.localTrans({
      "zh-CN": "\u6269\u5199\u5185\u5BB9",
      "en-US": "Make Longer"
    }),
    summaryMessages: common.localTrans({
      "zh-CN": "\u603B\u7ED3\u5185\u5BB9",
      "en-US": "Summary Messages"
    }),
    translateInputText: common.localTrans({
      "zh-CN": "\u7FFB\u8BD1\u8F93\u5165\u5185\u5BB9",
      "en-US": "Translate Input"
    }),
    inputTextShowMoreActionTip: common.localTrans({
      "zh-CN": "\u6216\u8005\u8F93\u5165\u5185\u5BB9\u540E\u5C55\u793A\u66F4\u591A\u64CD\u4F5C",
      "en-US": "Or input message then show more actions"
    }),
    usage: common.localTrans({
      "zh-CN": "\u7528\u65F6",
      "en-US": "Usage"
    }),
    serviceBusy: common.localTrans({
      "zh-CN": "\u670D\u52A1\u5668\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5",
      "en-US": "Server is busy, please try again later"
    }),
    callError: common.localTrans({
      "zh-CN": "\u8C03\u7528\u5931\u8D25",
      "en-US": "Call Error"
    }),
    apply: common.localTrans({
      "zh-CN": "\u5E94\u7528",
      "en-US": "Apply"
    }),
    prompt: {
      improveText: common.localTrans({
        "zh-CN": "\u4F60\u662F\u4E00\u4F4D\u6587\u5B57\u7F8E\u5316\u5E08\uFF0C\u4F60\u53EA\u9700\u8981\u7F8E\u5316\u6587\u5B57\uFF0C\u4E0D\u9700\u8981\u89E3\u8BFB\u3002\u73B0\u5728\u6211\u9700\u8981\u4F60\u6DA6\u8272\u6211\u7684\u5185\u5BB9\u5E76\u4FDD\u7559\u6211\u7684\u6BCD\u8BED:",
        "en-US": "You are a text embellisher, you can only embellish the text, don't interpret it. Now i need you embellish it and keep my origin language:"
      }),
      shorterText: common.localTrans({
        "zh-CN": "\u4F60\u662F\u4E00\u4F4D\u6587\u5B57\u7F8E\u5316\u5E08\uFF0C\u4F60\u53EA\u9700\u8981\u7B80\u5316\u6587\u5B57\uFF0C\u4E0D\u9700\u8981\u89E3\u8BFB\u3002\u73B0\u5728\u6211\u9700\u8981\u4F60\u7B80\u5316\u5B83\u5E76\u4FDD\u7559\u6211\u7684\u6BCD\u8BED:",
        "en-US": "You are a text embellisher, you can only shorter the text, don't interpret it. Now i need you shorter it and keep my origin language:"
      }),
      longerText: common.localTrans({
        "zh-CN": "\u4F60\u662F\u4E00\u4F4D\u6587\u5B57\u7F8E\u5316\u5E08\uFF0C\u4F60\u53EA\u9700\u8981\u6269\u5199\u6587\u5B57\uFF0C\u4E0D\u9700\u8981\u89E3\u8BFB\u3002\u73B0\u5728\u6211\u9700\u8981\u4F60\u6269\u5199\u5B83\u5E76\u4FDD\u7559\u6211\u7684\u6BCD\u8BED:",
        "en-US": "You are a text embellisher, you can only longer the text, don't interpret it. Now i need you longer it and keep my origin language:"
      }),
      translateText: common.localTrans({
        "zh-CN": "\u4F60\u662F\u4E00\u4E2A\u8D1F\u8D23\u7FFB\u8BD1\u6587\u672C\u7684\u7A0B\u5E8F\u3002\u4F60\u7684\u4EFB\u52A1\u662F\u6839\u636E\u8F93\u5165\u7684\u6587\u672C\u8F93\u51FA\u6307\u5B9A\u7684\u76EE\u6807\u8BED\u8A00\u3002 \u8BF7\u4E0D\u8981\u8F93\u51FA\u7FFB\u8BD1\u4EE5\u5916\u7684\u4EFB\u4F55\u6587\u672C\u3002 \u76EE\u6807\u8BED\u8A00\u662F\u82F1\u6587\uFF0C\u5982\u679C\u4F60\u6536\u5230\u7684\u6587\u5B57\u662F\u82F1\u6587\uFF0C\u8BF7\u7FFB\u8BD1\u6210\u4E2D\u6587\uFF08\u4E0D\u9700\u8981\u62FC\u97F3\uFF09\uFF0C\u4EE5\u4E0B\u662F\u6211\u7684\u5185\u5BB9:",
        "en-US": "You are a program responsible for translating text. Your task is to output the specified target language based on the input text. Please do not output any text other than the translation. Target language is english, and if you receive text is english, please translate to chinese(no need pinyin), then its my text:"
      }),
      summaryMessages: common.localTrans({
        "zh-CN": "\u4F60\u5C06\u5F97\u5230\u4E00\u4E32\u804A\u5929\u8BB0\u5F55\uFF0C\u5E0C\u671B\u4F60\u80FD\u591F\u5BF9\u8FD9\u4E9B\u8BB0\u5F55\u8FDB\u884C\u6458\u8981\u3002\u8981\u6C42\u7B80\u660E\u627C\u8981\uFF0C\u4EE5\u5305\u542B\u5217\u8868\u7684\u5927\u7EB2\u5F62\u5F0F\u8F93\u51FA\u3002",
        "en-US": "You will receive a chat record and we hope you can summarize it. Please provide a concise outline format that includes a list."
      })
    }
  };

  const improveTextPrompt = Translate.prompt.improveText;
  const shorterTextPrompt = Translate.prompt.shorterText;
  const longerTextPrompt = Translate.prompt.longerText;
  const translateTextPrompt = Translate.prompt.translateText;
  const summaryMessagesPrompt = Translate.prompt.summaryMessages;

  const Root = styled__default["default"].div`
  padding: 0.5rem;
  max-width: 300px;
`;
  const Tip = styled__default["default"].div`
  margin-bottom: 4px;
`;
  const Answer = styled__default["default"].pre`
  white-space: pre-wrap;
  max-height: 50vh;
  overflow: auto;
`;
  const ActionButton = styled__default["default"].div`
  min-width: 180px;
  padding: 4px 6px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin-bottom: 4px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
  const ActionTip = styled__default["default"].div`
  font-size: 12px;
  opacity: 0.6;
`;
  const AssistantPopover = React__default["default"].memo((props) => {
    const { messages } = common.useConverseMessageContext();
    const { message, setMessage } = component.useChatInputActionContext();
    const [{ loading, value }, handleCallAI] = common.useAsyncRequest(async (question) => {
      const { data } = await axios__default["default"].post("https://yyejoq.laf.dev/chatgpt", {
        question
      });
      return data;
    }, []);
    if (loading) {
      return /* @__PURE__ */ React__default["default"].createElement(Root, null, /* @__PURE__ */ React__default["default"].createElement(component.LoadingSpinner, null));
    }
    return /* @__PURE__ */ React__default["default"].createElement(Root, null, /* @__PURE__ */ React__default["default"].createElement("div", null, typeof value === "object" && /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, value.result ? /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement(Answer, null, value.answer), /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement(component.Tag, {
      color: "green"
    }, Translate.usage, ": ", value.usage, "ms"), /* @__PURE__ */ React__default["default"].createElement(component.Button, {
      size: "small",
      type: "primary",
      onClick: () => {
        setMessage(value.answer);
        props.onCompleted();
      }
    }, Translate.apply))) : /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("div", null, Translate.serviceBusy), /* @__PURE__ */ React__default["default"].createElement(component.Tag, {
      color: "red"
    }, Translate.callError)), /* @__PURE__ */ React__default["default"].createElement(component.Divider, null))), /* @__PURE__ */ React__default["default"].createElement(Tip, null, Translate.helpMeTo), /* @__PURE__ */ React__default["default"].createElement(ActionButton, {
      onClick: async () => {
        const plainMessages = (await Promise.all([...messages].filter((item) => !item.hasRecall).slice(messages.length - 30, messages.length).map(async (item) => {
          var _a;
          return `${(await common.getCachedUserInfo(item.author)).nickname}: ${common.getMessageTextDecorators().serialize((_a = item.content) != null ? _a : "")}`;
        }))).join("\n");
        handleCallAI(summaryMessagesPrompt + "\n" + plainMessages);
      }
    }, Translate.summaryMessages), typeof message === "string" && message.length > 0 ? /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, /* @__PURE__ */ React__default["default"].createElement(ActionButton, {
      onClick: () => handleCallAI(improveTextPrompt + message)
    }, Translate.improveText), /* @__PURE__ */ React__default["default"].createElement(ActionButton, {
      onClick: () => handleCallAI(shorterTextPrompt + message)
    }, Translate.makeShorter), /* @__PURE__ */ React__default["default"].createElement(ActionButton, {
      onClick: () => handleCallAI(longerTextPrompt + message)
    }, Translate.makeLonger), /* @__PURE__ */ React__default["default"].createElement(ActionButton, {
      onClick: () => handleCallAI(translateTextPrompt + message)
    }, Translate.translateInputText)) : /* @__PURE__ */ React__default["default"].createElement(ActionTip, null, Translate.inputTextShowMoreActionTip));
  });
  AssistantPopover.displayName = "AssistantPopover";

  const PLUGIN_ID = "com.msgbyte.ai-assistant";
  const PLUGIN_NAME = "AI Assistant";
  console.log(`Plugin ${PLUGIN_NAME}(${PLUGIN_ID}) is loaded`);
  common.regChatInputButton({
    render: () => {
      return /* @__PURE__ */ React__default["default"].createElement(component.BaseChatInputButton, {
        icon: "eos-icons:ai",
        popoverContent: ({ hidePopover }) => /* @__PURE__ */ React__default["default"].createElement(AssistantPopover, {
          onCompleted: hidePopover
        })
      });
    }
  });

}));
//# sourceMappingURL=index.js.map
