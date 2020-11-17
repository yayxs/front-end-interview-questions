module.exports = {
  title: "TOP-FE-IQA",
  description: "Top X Front-End  Interview Questions and Answers",
  themeConfig: {
    nav: [
      { text: "指南", link: "/guides/" },
      {
        text: "GitHub",
        link: "https://github.com/yayxs/top-fe-iqa",
        target: "_blank",
      },
    ],
    sidebar: [
      {
        title: "前言",
        collapsable: false,
        children: ["/guides/", "/guides/other/outline"],
      },
      {
        title: "HTML/HTML5",
        collapsable: false,
        children: [],
      },
      {
        title: "CSS/CSS3",
        collapsable: false,
        children: [
          "/guides/css/box_model",
          "/guides/css/dom_w_h",
          "/guides/css/bfc",
          "/guides/css/center",
          "/guides/css/selector",
          "/guides/css/clearfix",
          "/guides/css/hide",
          "/guides/css/position",
          "/guides/css/display",
          "/guides/css/normalize",
          "/guides/css/link_import",
          "/guides/css/triangle",

        ],
      },
      {
        title: "JavaScript/Es6",
        collapsable: false,
        children: ["/guides/js/call_bind_apply"],
      },
      {
        title: "VUE",
        collapsable: false,
        children: ["/guides/vue/communication"],
      },
      {
        title: "WebPack",
        collapsable: true,
        children: ["/guides/webpack/outline"],
      },

      {
        title: "算法",
        collapsable: true,
        children: ["/guides/algorithm/outline",],
      },
      {
        title: "手动实现",
        collapsable: true,
        children: ["/guides/handwritten/outline"],
      },
      {
        title: "场景题目",
        collapsable: false,
        children: ["/guides/scene/00", "/guides/scene/01"],
      },
    ],
  },
};
