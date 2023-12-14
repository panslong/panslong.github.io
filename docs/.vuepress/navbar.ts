import { navbar } from "vuepress-theme-hope";

export const navbarConfig = navbar([
  "/",
  // "/home",
    {
    text: "Java",
    icon: "java",
    prefix: "/Java/",
    children: [
      {
        text: "Java基础",
        link: "basics/"
      },
      {
        text: "JVM",
        link: "JVM/"
      },
      {
        text: "设计模式",
        link: "design-patterns/"
      },
    ],
  },
  {
    text: "数据库",
    icon: "mysql",
    prefix: "/database/",
    children: [
      {
        text: "MySQL",
        link: "MySQL/"
      },
      {
        text: "Redis",
        link: "Redis/"
      },
    ],
  },
  {
    text: "框架",
    icon: "frame",
    prefix: "/framework/",
    children: [
      {
        text: "Spring",
        link: "Spring/"
      },
      {
        text: "SpringBoot",
        link: "SpringBoot/"
      },
      {
        text: "Mybatis",
        link: "Mybatis/"
      }
    ],
  },
  {
    text: "分布式",
    icon: "any",
    prefix: "/distributed/",
    children: [
      {
        text: "RabbitMQ",
        link: "RabbitMQ/"
      },
      {
        text: "分布式系统",
        link: "distributed/"
      }
    ],
  },
  // {
  //   text: "后端",
  //   icon: "rank",
  //   prefix: "/basics/",
  //   children: [
  //     {
  //       text: "算法",
  //       icon: "rank",
  //       link: "algorithm/"
  //     },
  //     {
  //       text: "MySQL数据库",
  //       icon: "mysql",
  //       link: "MySQL/",
  //     },
  //     {
  //       text: "设计模式",
  //       icon: "repair",
  //       link: "design-patterns/",
  //     },
  //     {
  //       text: "面向对象",
  //       icon: "people",
  //       link: "OOP/OOP",
  //     },
  //     {
  //       text: "设计思想和原则",
  //       icon: "people",
  //       link: "design-principles/S",
  //     },
  //     {
  //       text: "分布式",
  //       icon: "snow",
  //       link: "distribute/CAP&BASE",
  //     },
  //   ],
  // },
  // {
  //   text: "语言",
  //   icon: "language",
  //   prefix: "/language/",
  //   children: [
  //     {
  //       text: "Java",
  //       icon: "java",
  //       link: "Java/"
  //     },
  //   ],
  // },
  // {
  //   text: "工具",
  //   icon: "tool",
  //   prefix: "/tools/",
  //   children: [
  //     {
  //       text: "git",
  //       icon: "git",
  //       link: "git"
  //     },
  //     {
  //       text: "linux命令",
  //       icon: "linux",
  //       link: "linux命令"
  //     },
  //   ],
  // },
  // {
  //   text: "项目",
  //   icon: "strong",
  //   prefix: "/project/",
  //   children: [
  //     {
  //       text: "lottery抽奖系统",
  //       icon: "group",
  //       link: "lottery/lottery-design-patterns"
  //     },
  //   ],
  // },
  // {
  //   text: "面向招聘",
  //   icon: "strong",
  //   prefix: "/recruitment/",
  //   children: [
  //     {
  //       text: "校招",
  //       icon: "group",
  //       link: "campus/tipsFromBYRForum"
  //     },
  //     {
  //       text: "社招",
  //       icon: "mysql",
  //       link: "/",
  //     }
  //   ],
  // },
  {
    text:"杂记",
    link: "/other/",
    icon: "others"
  },
  {
    text:"导航",
    link: "/navigation/",
    icon: "navigation"
  },
  // {
  //   text:"时间轴",
  //   link: "/timeline/",
  //   icon: "time"
  // },
  {
    text: "关于",
    icon: "info",
    prefix: "/about/",
    children: [
      // {
      //   text: "简历",
      //   icon: "blog",
      //   link: "cv",
      // },
      {
        text: "关于本站",
        icon: "info",
        link: "guide",
      }
    ],
  }

]);
