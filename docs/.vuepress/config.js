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
        title: "VUE",
        collapsable: true,
        children: ["/guides/vue/style", "/guides/vue/communication"],
      },
      {
        title: "杂项",
        collapsable: true,
        children: ["/guides/other/npm"],
      },
    ],
  },
};
