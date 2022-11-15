/**
 * 方式一
 */

// import type { App } from "vue";
// import chooseArea from "./chooseArea";
// import chooseIcon from "./chooseIcon";

// const components = [chooseArea, chooseIcon];
// console.log(components);

// export default {
//   install(app: App) {
//     components.map((item) => {
//       console.log(item);
//       app.use(item);
//     });
//   },
// };

/**
 * 方式二：
 */
import type { App } from "vue";
import chooseArea from "./chooseArea/src/index.vue";
import chooseIcon from "./chooseIcon/src/index.vue";
import trend from "./trend/src/index.vue";

const components = [chooseArea, chooseIcon, trend];
// console.log(components);

export default {
  install(app: App) {
    components.map((item) => {
      // console.log(item);
      //这种方式是引入的index.vue;不需要每一个组件的index.ts文件
      app.component(item.name, item);
    });
  },
};
