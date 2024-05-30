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
        "2021-01-18-详解MySQL索引"
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
    {
      prefix: "distributed/",
      text: "分布式",
      icon: "creative",
      collapsible: true,
      children: [
        "2022-08-21-CAP & BASE理论",
        "2023-08-21-分布式事务"
      ]
    },
  ],
  "/computer-basics/":[
    {
      prefix: "data-structure/",
      text: "数据结构",
      icon: "creative",
      collapsible: true,
      children: [
        "2023-12-01-线性数据结构",
      ]
    },
  ],
  "/framework/":[
    {
      prefix: "Spring/",
      text: "Spring",
      icon: "creative",
      collapsible: true,
      children: [
        "2023-12-18-Spring循环依赖",
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
        "2023-12-18-提高生产效率的Lambda表达式",
        "2022-10-18-线程池",
        "2023-12-19-CompletableFuture 详解"
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
            "2022-11-03-设计模式-原型模式",
            "2022-11-04-设计模式-建造者模式"
          ],
        },
        {
          text: "结构型模式",
          collapsible: true,
          prefix: "structural-patterns/",
          children: 
          [
            "",
            "2022-11-06-设计模式-代理模式",
            "2022-11-06-设计模式-适配器模式",
            "2022-11-07-设计模式-装饰者模式",
            "2022-11-07-设计模式-桥接模式",
            "2022-11-07-设计模式-外观模式",
            "2022-11-07-设计模式-组合模式",
            "2022-11-07-设计模式-享元模式"
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
