# viteprss的网站图标配置问题


## 网站图标配置

网站图标是网站在浏览器标签页和收藏夹中的图标，可以提高用户体验。

## 步骤

1. 创建一个 `favicon.ico` 文件，并将其放置在网站的根目录`public`下。
2. 在 `vite.config.js` 或 `vitepress.config.js` 中配置 `favicon` 选项，将 `favicon.ico` 文件的路径添加到 `favicon` 选项中。
3. 重新构建或重新启动项目，以使更改生效。

## 官方示例

在 `vite.config.js` 中配置 `favicon` 选项：

```js
export default {
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]]
} // 将 favicon.ico 放在公共目录中，如果设置了 base，则使用 /base/favicon.ico

/* 渲染成:
  <link rel="icon" href="/favicon.ico">
*/
```

## 出现问题
  在 Google 浏览器 可以正确展示
![图片](/2.png)

在 Microsoft Edge 浏览器 无法正确展示

![图片](/1.png)


## 解决方法

再添加一个或多个`link`标签,使用 `type`来设置图片类型，去设配不同的浏览器

```js
export default {
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    ["link", { rel: "icon", type: "image/png", href: "/favicon.png" }]
  ]
}
```


