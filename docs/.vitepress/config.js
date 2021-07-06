module.exports = {
  title: "Top X Front-end Interview Questions and Better Answers",
  description: "Top X Front-end Interview Questions and Better Answers.",

  themeConfig: {
    nav: [
      { text: "指南", link: "/", activeMatch: "^/$|^/guide/" },

      {
        text: "Repo",
        link: "https://github.com/yayxs/top-fe-iqa"
      }
    ],

    sidebar: {
      "/guide/": getGuideSidebar(),
      "/": getGuideSidebar()
    }
  }
};

function getGuideSidebar() {
  return [
    {
      text: "概览",
      link: "/"
    },
    {
      text: "CSS",
      children: [
        {
          text: "谈谈你对CSS层叠的理解",
          link: "/guide/css/cascade"
        },
        {
          text: "你是怎么理解CSS中的优先级",
          link: "/guide/css/priority"
        },
        {
          text: "你是怎么理解CSS选择器优先级",
          link: "/guide/css/selector"
        },
        {
          text: "CSS有哪些样式属性是可以继承的",
          link: "/guide/css/inherit"
        },
        {
          text: "css单位有哪些以及它们的区别",
          link: "/guide/css/unit"
        },
        {
          text: "介绍一下标准的CSS盒子模型与低版本的IE盒子模型有什么不同",
          link: "/guide/css/border-box"
        }
      ]
    },
    {
      text: "JavaScript",
      children: [
        {
          text: "for循环中的var声明",
          link: "/guide/javascript/for_var"
        }
      ]
    }
  ];
}
