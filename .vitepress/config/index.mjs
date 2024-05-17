import { defineConfig } from "vitepress";
import { shared } from "./shared.mjs";
// import { en } from "./en";
import { zh } from "./zh.mjs";

export default defineConfig({
  ...shared,
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
  ],
  markdown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true,
    },
  },
  locales: {
    // root: { label: "English" },
    root: { label: "简体中文", ...zh },
  },
});
