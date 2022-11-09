import type { App } from "vue";
import chooseArea from "./chooseArea/src/index.vue";
import chooseIcon from "./chooseIcon/src/index.vue";

const components = [chooseArea, chooseIcon];
console.log(components);

export default {
  install(app: App) {
    components.map((item) => {
      console.log(item);
      app.component(item.name, item);
    });
  },
};
