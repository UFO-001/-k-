import { defineConfig } from "vitepress";
import { search as zhSearch } from "./zh.mjs";

export const shared = defineConfig({
  title: "啊k的杂货铺",
  appearance: "dark",
  lastUpdated: true,

  sitemap: {
    hostname: "https://huangqinke.top",
  },

  themeConfig: {
    logo: { src: "/logo.svg", width: 24, height: 24 },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    search: {
      provider: "local",
      options: {
        // appId: "8J64VVRP8K",
        // apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
        // indexName: "vitepress",
        locales: { ...zhSearch },
      },
    },
  },
});
