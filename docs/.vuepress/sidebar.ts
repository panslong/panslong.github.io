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
    {
      prefix: "Redis/",
      text: "Redis",
      icon: "creative",
      collapsible: true,
      children: [
        "2023-11-10-Redis-原理-网络模型",
        "2023-11-21-Redis持久化",
        "2023-11-21-Redis集群",
        "2023-11-21-如何避免缓存雪崩、缓存击穿、缓存穿透？"
       
      ]
    }
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
    },
    {
      prefix: "design-patterns/",
      text: "设计模式",
      icon: "creative",
      collapsible: true,
      children: [
        {
          text: "创建者模式",
          collapsible: true,
          prefix: "creational-patterns/",
          children: 
          [
            "",
            "2022-11-02-设计模式-单例模式", 
            "2022-11-02-设计模式-工厂模式", 
          ],
        },
        {
          text: "结构型模式",
          collapsible: true,
          prefix: "structural-patterns/",
          children: 
          [
            "",
          ],
        },
        {
          text: "行为型模式",
          collapsible: true,
          prefix: "behavioral-patterns/",
          children: 
          [
            "2022-11-12-设计模式-模板模式",
            "2022-11-13-设计模式-策略模式",
            "2022-11-13-设计模式-观察者模式",
            "2022-11-13-设计模式-命令模式",
            "2022-11-13-设计模式-职责链模式",
            "2022-11-13-设计模式-状态模式",
            "2022-11-14-设计模式-中介者模式",
            "2022-11-14-设计模式-迭代器模式",
            "2022-11-14-设计模式-访问者模式",
            "2022-11-14-设计模式-备忘录模式",
            "2022-11-15-设计模式-解释器模式"
          ],
        },
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
