import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

//初始化样式
import "normalize.css";
//通用样式
import "@/styles/index.scss";
//Element-Plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
//图标的使用；(此项目就安好官网的使用方式使用)
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);

//注册图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router);
app.use(ElementPlus);
app.mount("#app");
