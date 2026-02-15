import { defineConfig, type DefaultTheme } from "vitepress";

export const zh_Hans = defineConfig({
  lang: "zh-Hans",
  title: "LuminolMC 文档",
  description: "LuminolMC 团队的所有项目文档。",

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/zh_Hans/luminol/": {
        base: "/zh_Hans/luminol/",
        items: sidebarLuminol(),
      },
      "/zh_Hans/lightingluminol/": {
        base: "/zh_Hans/lightingluminol/",
        items: sidebarLightingLuminol(),
      },
    },

    editLink: {
      pattern: "https://github.com/LuminolMC/docs/edit/main/src/:path",
      text: "在 GitHub 上编辑此页面",
    },

    footer: {
      message: "所有文档采用 CC BY-SA 4.0 许可协议发布",
      copyright: "© 2024 LuminolMC 团队",
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "总览",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    langMenuLabel: "切换语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",

    notFound: {
      code: 404,
      title: "页面未找到",
      quote: "但如果你不改变方向，继续寻找，你最终可能会到达你要去的地方。",
      linkLabel: "返回首页",
      linkText: "回到主页",
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "主页",
      link: "/zh_Hans/",
    },
    {
      text: "项目",
      items: [
        {
          text: "Luminol",
          link: "/zh_Hans/luminol/guides/getting-started",
          activeMatch: "/luminol/",
        },
        {
          text: "LightingLuminol",
          link: "/zh_Hans/lightingluminol/guides/getting-started",
          activeMatch: "/lightingluminol/",
        },
      ],
    },
    {
      text: "更多",
      items: [
        {
          text: "主站",
          link: "https://luminolsuki.moe",
        },
      ],
    },
  ];
}

function sidebarLuminol(): DefaultTheme.SidebarItem[] {
  return [
    {
      collapsed: false,
      items: [
        {
          text: "指南",
          collapsed: false,
          base: "/zh_Hans/luminol/guides/",
          items: [
            { text: "快速开始", link: "getting-started" },
            { text: "接下来的步骤", link: "next-steps" },
            { text: "迁移", link: "migration" },
          ],
        },
        {
          text: "参考",
          collapsed: false,
          base: "/zh_Hans/luminol/reference/",
          items: [{ text: "配置", link: "configuration" }],
        },
      ],
    },
  ];
}

function sidebarLightingLuminol(): DefaultTheme.SidebarItem[] {
  return [
    {
      collapsed: false,
      items: [
        {
          text: "指南",
          collapsed: false,
          base: "/zh_Hans/lightingluminol/guides/",
          items: [
            { text: "快速开始", link: "getting-started" },
            { text: "接下来的步骤", link: "next-steps" },
            { text: "迁移", link: "migration" },
          ],
        },
        {
          text: "参考",
          collapsed: false,
          base: "/zh_Hans/lightingluminol/reference/",
          items: [{ text: "配置", link: "configuration" }],
        },
      ],
    },
  ];
}

export const search: DefaultTheme.LocalSearchOptions["locales"] = {
  zh_Hans: {
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
          closeText: "关闭",
        },
      },
    },
  },
};
