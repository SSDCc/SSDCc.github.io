definePlugin('@plugins/com.msgbyte.widget.sakana', ['require'], (function (require) { 'use strict';

	const PLUGIN_ID = "com.msgbyte.sakana-widget";
	const PLUGIN_NAME = "sakana-widget";
	console.log(`Plugin ${PLUGIN_NAME}(${PLUGIN_ID}) is loaded`);
	new Promise(function (resolve, reject) { require(['./main-03bc3281'], resolve, reject); });

}));
//# sourceMappingURL=index.js.map
