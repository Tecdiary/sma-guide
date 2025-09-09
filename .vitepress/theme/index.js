import DefaultTheme from "vitepress/theme";
import "./style.css";
import FileTree from "./FileTree.vue";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("FileTree", FileTree);
  },
};
