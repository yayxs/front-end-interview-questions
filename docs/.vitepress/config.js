module.exports = {
  title: "前端头部面试题",
  description: "Top X Front-end Interview Questions and Better Answers.",

  themeConfig: {
    nav: [
      { text: "指南", link: "/", activeMatch: "^/$|^/guide/" },

      {
        text: "Repo",
        link: "https://github.com/yayxs/top-fe-iqa",
      },
    ],

    sidebar: {
      "/guide/": getGuideSidebar(),
      "/": getGuideSidebar(),
    },
  },
};

function getGuideSidebar() {
  return [
    {
      text: "Introduction",
      link: "/",
    },
    {
      text: "JavaScript基础",
      children: [
        {
          text: "for循环中的var声明",
          link: "/guide/javascript/for_var",
        },
      ],
    },
  ];
}
