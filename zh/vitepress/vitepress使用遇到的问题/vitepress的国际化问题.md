# vitepress的国际化问题

## 官方示例
 要使用内置的 i18n (国际化) 功能，需要创建类似于下面的目录结构：

```
docs/
├─ es/
│  ├─ foo.md
├─ fr/
│  ├─ foo.md
├─ foo.md
```
然后在 docs/.vitepress/config.ts 中：

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  // 共享属性和其他顶层内容...

  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    fr: {
      label: 'French',
      lang: 'fr', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: '/fr/guide' // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的

      // 其余 locale 特定属性...
    }
  }
})
```
下面的属性能够被每个 locale 覆盖 (包括 root)：

```ts
interface LocaleSpecificConfig<ThemeConfig = any> {
  lang?: string
  dir?: string
  title?: string
  titleTemplate?: string | boolean
  description?: string
  head?: HeadConfig[] // 将与现有的头部条目合并，重复的元标签将自动删除
  themeConfig?: ThemeConfig // 会进行浅层合并，常见内容可放在顶层的 themeConfig 属性中
}
```

::: tip 提示
配置文件也可以是 `docs/.vitepress/config/index.ts`。通过为每个语言环境创建一个配置文件，然后从` index.ts `合并并导出它们，可以更好的组织文件。
:::


## 那么他提示的方法该如何实现

### 1.目录结构
  我们可以在 `.vitepress` 目录下创建一个 `config` 目录，然后在该目录下创建一个 `index.ts` 文件，在该文件中进行配置

  ```
    .vitepress/
    ├─ config/  
    │  ├─ index.mjs
    │  ├─ zh.mjs   //中文配置
    │  ├─ en.mjs   //英文配置
    │  ├─ shared.mjs   //搜索按钮的配置
  
  ```

  ### 2.配置文件
  英文国际化 `en.mjs`与`zh.mjs` 的配置一样，只需要把中文换成英文就行
 
 ::: code-group
```ts [zh.mjs ]

import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar"; //自动生成侧边栏插件

import { vue3Menu, vitepressMenu } from "../utils/sidebarMenu.js"; //生成侧边栏的配置


// 导出配置，语言设置为中文
export const zh = defineConfig({
  lang: "zh-Hans",

  themeConfig: {
    // 导航栏配置
    nav: nav(),

    // 侧边栏配置
    sidebar: generateSidebar([vue3Menu, vitepressMenu]),

    // 在页面编辑链接
    editLink: {
      pattern: "",
      text: "在 GitHub 上编辑此页面",
    },

    // 页脚配置
    footer: {
      message: "",
      copyright: `版权所有 © ${new Date().getFullYear()} AK`,
    },

    // 文档页脚配置
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    // 页面导航配置
    outline: {
      label: "页面导航",
    },

    // 页面最后更新时间配置
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    // 多语言菜单标签
    langMenuLabel: "多语言",
    // 返回顶部菜单标签
    returnToTopLabel: "回到顶部",
    // 侧边栏菜单标签
    sidebarMenuLabel: "菜单",
    // 主题切换开关标签
    darkModeSwitchLabel: "主题",
    // 浅色模式切换标签
    lightModeSwitchTitle: "切换到浅色模式",
    // 深色模式切换标签
    darkModeSwitchTitle: "切换到深色模式",
  },
});

// 导航栏配置
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

// 导出搜索配置
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

```

```ts [shared.mjs]
import { defineConfig } from "vitepress";
import { search as zhSearch } from "./zh.mjs";

export const shared = defineConfig({
  title: "啊k的杂货铺",
  appearance: "dark",
  lastUpdated: true,


  themeConfig: {
    logo: { src: "/logo.svg", width: 24, height: 24 },
    search: {
      provider: "local",
      options: {
        locales: { ...zhSearch },
      },
    },
  },
});

```
```ts [index.mjs]
import { defineConfig } from "vitepress";
import { shared } from "./shared.mjs";
import { en } from "./en.mjs";

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
    root: { label: "简体中文", ...zh },
    en:{ label: "English", ...en}
  },
});

```
:::

 然后在根据下面目录

 ```
docs/
├─ .vitpress/
│  ├─ config
├─ zh/
│  ├─ foo.md
├─ en/
│  ├─ foo.md

```
我们把 中文 的文档放在`zh/`目录下，英文的文档放在 `en/`目录下 就可以实现国际化了




