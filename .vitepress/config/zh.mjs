import { createRequire } from "module";
import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

import { vue3Menu, vitepressMenu } from "../utils/sidebarMenu.js";

const require = createRequire(import.meta.url);
const pkg = require("vitepress/package.json");

export const zh = defineConfig({
  lang: "zh-Hans",

  themeConfig: {
    nav: nav(),

    sidebar: generateSidebar([vue3Menu, vitepressMenu]),

    editLink: {
      pattern: "",
      text: "在 GitHub 上编辑此页面",
    },

    footer: {
      message: "",
      copyright: `版权所有 © ${new Date().getFullYear()} AK`,
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
});

function nav() {
  return [
    {
      text: "前端",
      items: [
        {
          text: "Vue3",
          link: "/zh/vue3/",
        },
        {
          text: "vitepress",
          link: "/zh/vitepress/",
        },
      ],
    },
  ];
}

export const search = {
  root: {
    translations: {
      button: {
        buttonText: "搜索文档",
        buttonAriaLabel: "搜索文档",
      },
      modal: {
        noResultsText: "无法找到相关结果",
        resetButtonTitle: "清除查询条件",
        footer: {
          selectText: "选择",
          navigateText: "切换",
        },
      },
    },
  },
};
