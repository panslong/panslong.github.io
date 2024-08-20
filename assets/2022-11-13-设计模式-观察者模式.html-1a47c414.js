const e=JSON.parse('{"key":"v-fbac5d92","path":"/Java/design-patterns/behavioral-patterns/2022-11-13-%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F.html","title":"观察者模式","lang":"zh-CN","frontmatter":{"title":"观察者模式","icon":"article","date":"2022-11-13T00:00:00.000Z","category":"设计模式","tag":["设计模式","行为型模式"],"description":"概述 定义： 又被称为发布-订阅（Publish/Subscribe）模式，它定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个主题对象。这个主题对象在状态变化时，会通知所有的观察者对象，使他们能够自动更新自己。 结构 在观察者模式中有如下角色： Subject：抽象主题（抽象被观察者），抽象主题角色把所有观察者对象保存在一个集合里，每个主题都可以有任意数量的观察者，抽象主题提供一个接口，可以增加和删除观察者对象。 ConcreteSubject：具体主题（具体被观察者），该角色将有关状态存入具体观察者对象，在具体主题的内部状态发生改变时，给所有注册过的观察者发送通知。 Observer：抽象观察者，是观察者的抽象类，它定义了一个更新接口，使得在得到主题更改通知时更新自己。 ConcrereObserver：具体观察者，实现抽象观察者定义的更新接口，以便在得到主题更改通知时更新自身的状态。","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/Java/design-patterns/behavioral-patterns/2022-11-13-%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"七分熟"}],["meta",{"property":"og:title","content":"观察者模式"}],["meta",{"property":"og:description","content":"概述 定义： 又被称为发布-订阅（Publish/Subscribe）模式，它定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个主题对象。这个主题对象在状态变化时，会通知所有的观察者对象，使他们能够自动更新自己。 结构 在观察者模式中有如下角色： Subject：抽象主题（抽象被观察者），抽象主题角色把所有观察者对象保存在一个集合里，每个主题都可以有任意数量的观察者，抽象主题提供一个接口，可以增加和删除观察者对象。 ConcreteSubject：具体主题（具体被观察者），该角色将有关状态存入具体观察者对象，在具体主题的内部状态发生改变时，给所有注册过的观察者发送通知。 Observer：抽象观察者，是观察者的抽象类，它定义了一个更新接口，使得在得到主题更改通知时更新自己。 ConcrereObserver：具体观察者，实现抽象观察者定义的更新接口，以便在得到主题更改通知时更新自身的状态。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-14T03:04:27.000Z"}],["meta",{"property":"article:author","content":"七分熟"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:tag","content":"行为型模式"}],["meta",{"property":"article:published_time","content":"2022-11-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-14T03:04:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"观察者模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-13T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-14T03:04:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"七分熟\\",\\"url\\":\\"https://github.com/panslong\\"}]}"]]},"headers":[{"level":3,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":3,"title":"结构","slug":"结构","link":"#结构","children":[]},{"level":3,"title":"案例实现","slug":"案例实现","link":"#案例实现","children":[]},{"level":3,"title":"优缺点","slug":"优缺点","link":"#优缺点","children":[]},{"level":3,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]},{"level":3,"title":"JDK中提供的实现","slug":"jdk中提供的实现","link":"#jdk中提供的实现","children":[]}],"git":{"createdTime":1702523067000,"updatedTime":1702523067000,"contributors":[{"name":"panshuilong","email":"1063589459@qq.com","commits":1}]},"readingTime":{"minutes":5.03,"words":1509},"filePathRelative":"Java/design-patterns/behavioral-patterns/2022-11-13-设计模式-观察者模式.md","localizedDate":"2022年11月13日","excerpt":"<h3> 概述</h3>\\n<p><strong>定义：</strong></p>\\n<p>又被称为发布-订阅（Publish/Subscribe）模式，它定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个主题对象。这个主题对象在状态变化时，会通知所有的观察者对象，使他们能够自动更新自己。</p>\\n<h3> 结构</h3>\\n<p>在观察者模式中有如下角色：</p>\\n<ul>\\n<li>Subject：抽象主题（抽象被观察者），抽象主题角色把所有观察者对象保存在一个集合里，每个主题都可以有任意数量的观察者，抽象主题提供一个接口，可以增加和删除观察者对象。</li>\\n<li>ConcreteSubject：具体主题（具体被观察者），该角色将有关状态存入具体观察者对象，在具体主题的内部状态发生改变时，给所有注册过的观察者发送通知。</li>\\n<li>Observer：抽象观察者，是观察者的抽象类，它定义了一个更新接口，使得在得到主题更改通知时更新自己。</li>\\n<li>ConcrereObserver：具体观察者，实现抽象观察者定义的更新接口，以便在得到主题更改通知时更新自身的状态。</li>\\n</ul>","autoDesc":true}');export{e as data};
