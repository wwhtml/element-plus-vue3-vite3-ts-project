import type { App } from "vue";
import chooseArea from "./chooseArea";
import chooseIcon from "./chooseIcon";

const components = [chooseArea, chooseIcon];
console.log(components);

export default {
  install(app: App) {
    components.map((item) => {
      console.log(item);
      app.use(item);
    });
  },
};
