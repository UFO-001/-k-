# VitePress 介绍

## 什么是 VitePress？

VitePress 是一个由 Vite 和 Vue 驱动的静态站点生成器。它是为了创建快速和轻量级的文档网站而设计的。

## 特点

- **快速的热重载**：利用 Vite 的热模块替换（HMR），实现快速的开发体验。
- **Vue 驱动**：可以在 Markdown 文件中无缝使用 Vue 组件。
- **优化的构建**：生产构建是预渲染的，得益于 Vite 的构建优化。

## Markdown 扩展

VitePress 提供了一些Markdown扩展来增强文档的表现力：

- **自定义容器**：可以创建不同类型的提示框，例如：提示、警告、危险等。
- **代码块高亮**：支持多种语言的代码高亮显示。
- **表情符号**：可以在文档中使用表情符号。
- **目录生成**：自动生成当前页面的目录结构。




## 快速开始

要开始使用 VitePress，首先需要全局安装 Vite：

```bash
npm init vitepress@latest my-vitepress-site
cd my-vitepress-site
npm install
npm run dev
```

这将创建一个新的 VitePress 项目，并启动一个本地开发服务器。

## 目录结构

VitePress 项目的基本目录结构如下：

```bash
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ index.md
│  └─ guide
│     └─ getting-started.md
└─ package.json

```
所有的 Markdown 文件都应该放在 docs 目录下。.vitepress 目录用于存放配置文件。

## 更多信息

关于 VitePress 的更多信息，请参考官方文档：[vitepress.dev](https://vitepress.dev/)。
