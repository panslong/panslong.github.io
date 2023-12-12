import { sidebar } from "vuepress-theme-hope";

export const sidebarConfig = sidebar({
  // sidebar: "heading",
  // "/MySQL": "structure",
  "/database/":[
    {
      prefix: "MySQL/",
      text: "MySQL",
      icon: "creative",
      collapsible: true,
      children: [
        "2021-01-18-详解MySQL索引",
        "2021-01-18-详解MySQL索引02",
       
      ]
    },
  ],
  "/distributed/":[
    {
      prefix: "RabbitMQ/",
      text: "RabbitMQ",
      icon: "creative",
      collapsible: true,
      children: [
        "2022-08-21-消息堆积怎么处理？",
        "2022-08-21-电商系统中的超时订单怎么处理？",
        "2022-08-22-如何确保MQ消息的可靠性？",
      ]
    },
  ],
  "/Java/":[
    {
      prefix: "basics/",
      text: "Java基础",
      icon: "creative",
      collapsible: true,
      children: [
       
      ]
    },
    {
      prefix: "JVM/",
      text: "JVM",
      icon: "creative",
      collapsible: true,
      children: [
        "2022-11-01-JVM-基础篇",
        "2022-11-10-JVM-实战篇1",
        "2022-11-15-JVM-实战篇2-GC调优",
        "2022-11-16-JVM-实战篇3-性能调优"
      ]
    }
  ]


  // "/project/": [
  //   {
  //     prefix: "lottery/",
  //     text: "lottery",
  //     icon: "java",
  //     collapsable: true,
  //     children: [
  //       "lottery-design-patterns",
  //       // {
  //       //   text: "lottery中的设计模式",
  //       //   collapsable: true,
  //       //   prefix: "basics/",
  //       //   children: [
  //       //     {
  //       //       prefix: "code/",
  //       //       text: "动态与函数式编程",
  //       //       collapsable: true,
  //       //       children: [
  //       //         "24.reflection",
  //       //         "25.annotation",
  //       //         "26.dynamic-proxy",
  //       //         "27.lamda",
  //       //       ]
  //       //     }
  //       //   ]
  //       // },
  //     ],
  //   },
  // ]
});
