import { defineConfig } from "vitepress";

import { generateSidebar } from "vitepress-sidebar";

import { vue3Menu } from "./utils/sidebarMenu.js";

console.log(generateSidebar([vue3Menu]));

// https://vitepress.dev/reference/site-confikg
export default defineConfig({
  title: "啊k的杂货铺",
  description: "啊k的杂货铺",
  appearance: "dark",
  sitemap: {
    hostname: "https://huangqinke.top",
  },
  themeConfig: {
    siteTitle: "啊k的杂货铺",
    logo: "/logo.svg",
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "前端",
        items: [
          {
            text: "Vue3",
            link: "/vue3/",
          },
        ],
      },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: generateSidebar([vue3Menu]),
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    footer: {
      message: "",
      copyright: "Copyright © 2024 AK",
    },
    editLink: {
      // pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "看项目源码",
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
  },
});
