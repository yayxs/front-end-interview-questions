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
        children: ["/guides/"],
      },
      {
        title: "HTML/HTML5",
        collapsable: false,
        children: ["/guides/css/outline"],
      },
      {
        title: "CSS/CSS3",
        collapsable: true,
        children: ["/guides/css/outline"],
      },
      {
        title: "JavaScript/Es6",
        collapsable: true,
        children: ["/guides/js/outline"],
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
        children: ["/guides/algorithm/outline", "/guides/algorithm/judgeIp"],
      },
      {
        title: "手动实现",
        collapsable: true,
        children: ["/guides/handwritten/outline"],
      },
      {
        title: "杂项",
        collapsable: true,
        children: ["/guides/other/npm"],
      },
    ],
  },
};
