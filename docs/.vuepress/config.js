module.exports = {
  title: "TOP-FE-IQA",
  description: "top-fe-iqa",
  themeConfig: {
    nav: [
      { text: "指南", link: "/guides/" },
      { text: "GitHub", link: "https://github.com/yayxs", target: "_blank" },
    ],

    sidebar: [
      {
        title: "前言",
        collapsable: false,
        children: ["/guides/"],
      },

      {
        title: "CSS",
        collapsable: true,
        children: [
          "/guides/css/center",
          "/guides/css/position",
          "/guides/css/bfc",
          "/guides/css/hide",
          "/guides/css/flex",
        ],
      },
      {
        title: "JavaScript",
        collapsable: true,
        children: [
          "/guides/js/outline",
        ],
      },
      {
        title: "VUE",
        collapsable: true,
        children: ["/guides/vue/style", "/guides/vue/communication"],
      },
      {
        title: "WebPack",
        collapsable: true,
        children: ["/guides/webpack/outline"],
      },
      {
        title: "网红经典面试题",
        collapsable: true,
        children: ["/guides/netRed/outline"],
      },
      {
        title: "算法",
        collapsable: true,
        children: ["/guides/algorithm/outline", "/guides/algorithm/judgeIp"],
      },
      {
        title: "杂项",
        collapsable: true,
        children: ["/guides/other/npm"],
      },
    ],
  },
};
