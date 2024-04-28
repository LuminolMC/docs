import type { UserConfig } from 'vitepress'
import { defineConfigWithTheme, type DefaultTheme } from 'vitepress'
import { zh_Hans, search as zhHansSearch } from "./zh_Hans";

export default defineConfigWithTheme({
  title: 'LuminolMC 文档',
  srcDir: "./src",
  lang: 'zh-Hans',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "darkreader-lock" }],
  ],

  locales: {
    zh_Hans: { label: "简体中文", ...zh_Hans },
    //     en: { label: 'English', ...en },
  },

  themeConfig: {
    externalLinkIcon: true,

    editLink: {
      pattern: "https://github.com/LuminolMC/docs/edit/main/src/:path",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/LuminolMC" },
      {
        icon: {
          svg: '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M433.8 420.4c-11.5 1.4-44.9-52.7-44.9-52.7 0 31.3-16.1 72.2-51.1 101.8 16.8 5.2 54.8 19.2 45.8 34.4-7.3 12.3-125.5 7.9-159.6 4-34.1 3.8-152.3 8.3-159.6-4-9-15.3 28.9-29.2 45.8-34.4-34.9-29.5-51.1-70.4-51.1-101.8 0 0-33.3 54.1-44.9 52.7-5.4-.7-12.4-29.6 9.3-99.7 10.3-33 22-60.5 40.1-105.8C60.7 98.1 109 0 224 0c113.7 0 163.2 96.1 160.3 215 18.1 45.2 29.9 72.9 40.1 105.8 21.8 70.1 14.7 99.1 9.3 99.7z"/></svg>',
        },
        link: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=MfosKhcDd8Fdxn1MREuZ8Krbf9T6jiBC&authKey=3cm6qdHohON3gHnuD63FK4k07fIbrWnY4hdyq8OmELsfjMVP1kbFTJY9mRyM2Rkj&noverify=0&group_code=368632360",
      },
      { icon: "discord", link: "https://discord.gg/5hgtU72w33" },
    ],

    search: {
      provider: "local",
      options: {
        locales: { ...zhHansSearch },
      },
    },
  },
  sitemap: {
    hostname: "https://docs.luminolmc.com",
  },
});
