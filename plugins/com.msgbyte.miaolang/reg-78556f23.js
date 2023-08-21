definePlugin('@plugins/com.msgbyte.miaolang/reg-78556f23.js', ['./miaotrans-112ab722', '@capital/common', './index-f914e0eb', 'react'], (function (miaotrans, common, index, React) { 'use strict';

  const miao = miaotrans.encode("\u55B5\u8BED\u7FFB\u8BD1\u5DF2\u52A0\u8F7D");
  const human = miaotrans.decode(miao);
  console.log(`${miao}
${human}`);
  common.regMessageInterpreter({
    name: index.Translate.miaoTrans,
    explainMessage(message) {
      if (!miaotrans.isMiao(message)) {
        return null;
      }
      return miaotrans.decode(message);
    }
  });

}));
//# sourceMappingURL=reg-78556f23.js.map
