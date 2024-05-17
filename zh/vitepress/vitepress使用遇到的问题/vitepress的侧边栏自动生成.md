# vitepress的侧边栏自动生成

##  安装插件

```bash
# via npm
$ npm i -D vitepress-sidebar

# via yarn
$ yarn add -D vitepress-sidebar

# via pnpm
$ pnpm i -D vitepress-sidebar
```

## 如何使用

在 `.vuepress/config.js` 中配置插件：

```js
 import { generateSidebar } from 'vitepress-sidebar';

const vitepressSidebarOptions = {
  /* Options... */
};

export default {
  themeConfig: {
    sidebar: generateSidebar(vitepressSidebarOptions)
  }
};
```

::: details [ vitepressSidebarOptions有哪些属性]
  ```ts
   const vitepressSidebarOptions = {
  /* Options... */
    documentRootPath: 设置网站的根路径，默认为/。
    scanStartPath: 指定从哪个路径开始扫描，默认为null，表示从documentRootPath开始扫描。
    resolvePath: 设置路径解析函数，用于自定义路径处理规则，默认为null，表示使用默认的路径解析规则。
    useTitleFromFileHeading: 从文件标题中使用文件头部的标题，默认为true。
    useTitleFromFrontmatter: 从文件元数据中使用标题，默认为true。
    useFolderTitleFromIndexFile: 使用目录索引文件的标题作为目录的标题，默认为false。
    useFolderLinkFromIndexFile: 使用目录索引文件的链接作为目录的链接，默认为false。
    hyphenToSpace: 将连字符转换为空格，默认为true。
    underscoreToSpace: 将下划线转换为空格，默认为true。
    capitalizeFirst: 将文件名（不包括扩展名）的第一个字符转换为大写，默认为false。
    capitalizeEachWords: 将文件名（不包括扩展名）的每个单词转换为大写，默认为false。
    collapsed: 设置菜单是否折叠，默认为true。
    collapseDepth: 设置菜单折叠的深度，默认为2。
    sortMenusByName: 按照菜单项的名称进行排序，默认为false。
    sortMenusByFrontmatterOrder: 按照文件元数据中的order字段进行排序，默认为false。
    sortMenusByFrontmatterDate: 按照文件元数据中的date字段进行排序，默认为false。
    sortMenusOrderByDescending: 按照菜单项的名称进行降序排序，默认为false。
    sortMenusOrderNumericallyFromTitle: 按照文件名中的数字进行排序，从标题中提取数字进行排序，默认为false。
    sortMenusOrderNumericallyFromLink: 按照文件链接中的数字进行排序，从链接中提取数字进行排序，默认为false。
    frontmatterOrderDefaultValue: 设置默认的order字段的值，默认为0。
    manualSortFileNameByPriority: 手动设置按照优先级排序的文件名，优先级从高到低，默认为['first.md', 'second', 'third.md']。
    removePrefixAfterOrdering: 删除排序后的文件名中的前缀，默认为false。
    prefixSeparator: 设置前缀分隔符，默认为'.'。
    excludeFiles: 排除指定的文件名，默认为['first.md', 'secret.md']。
    excludeFilesByFrontmatterFieldName: 根据文件元数据中的exclude字段排除文件，默认为false。
    excludeFolders: 排除指定的文件夹，默认为['secret-folder']。
    includeDotFiles: 包含以.开头的文件，默认为false。
    includeRootIndexFile: 包含根目录的索引文件，默认为false。
    includeFolderIndexFile: 包含目录的索引文件，默认为false。
    includeEmptyFolder: 包含空的文件夹，默认为false。
    rootGroupText: 设置根目录的标题，默认为'Contents'。
    rootGroupLink: 设置根目录的链接，默认为'https://github.com/jooy2'。
    rootGroupCollapsed: 设置根目录是否折叠，默认为false
    convertSameNameSubFileToGroupIndexPage：如果设置为true，表示允许子文件夹中同名文件合并为单个索引页面。默认值为false。
    folderLinkNotIncludesFileName：如果设置为true，表示在生成的文档中，文件夹链接不包含文件名。默认值为false。
    keepMarkdownSyntaxFromTitle：如果设置为true，表示在生成的文档中，标题保持Markdown格式。默认值为false。
    debugPrint：如果设置为true，表示在生成过程中打印调试信息。默认值为false。
};
  ```
:::

## 我在项目中的配置
   在 `.vitepress/utils`目录下 创建 `sidebarMenu.js`,用来配置 `vitepressSidebarOptions` 
   
   在 `.vitepress/config/zh.mjs`,引入 `sidebarMenu.js`
   
 
       
::: code-group

```ts [sidebarMenu.js]
export const vitepressMenu = {
  /* Options... */
  documentRootPath: "/",
  scanStartPath: "zh/vitepress",
  resolvePath: "/zh/vitepress/",
  useTitleFromFileHeading: true,
  useFolderLinkFromIndexFile: true,
  collapseDepth: 2,
};

```

```ts [zh.mjs]
import { generateSidebar } from "vitepress-sidebar";

import {  vitepressMenu } from "../utils/sidebarMenu.js";

export const zh = defineConfig({
  lang: "zh-Hans",

  themeConfig: {


    sidebar: generateSidebar([ vitepressMenu]),
  }
})
```


:::


## 更多详细
 可以点击连接 [vitepress-sidebar](https://vitepress-sidebar.jooy2.com/getting-started)
