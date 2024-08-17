/**
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 */

import App from "./App";

// 引入 HiUi 配置文件
import "@/uni_modules/hi-config";

// 配置扩展图标前缀
uni.$hi.config.icon.prefix = ["hi-uniapp-ui-iconfont"];

// #ifndef VUE3
import Vue from "vue";
import "./uni.promisify.adaptor";
Vue.config.productionTip = false;
App.mpType = "app";
const app = new Vue({
    ...App
});
app.$mount();
// #endif

// #ifdef VUE3
import { createSSRApp } from "vue";
export function createApp() {
    const app = createSSRApp(App);
    return {
        app
    };
}
// #endif
