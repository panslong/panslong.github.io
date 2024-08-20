const e=JSON.parse('{"key":"v-7bb01290","path":"/Java/JVM/2022-11-01-JVM-%E5%9F%BA%E7%A1%80%E7%AF%87.html","title":"JVM | 基础篇","lang":"zh-CN","frontmatter":{"title":"JVM | 基础篇","icon":"article","date":"2022-11-01T00:00:00.000Z","category":"JVM","tag":["JVM"],"description":"1、字节码 2、类加载 2.1类的生命周期 2.1.1 类的生命周期-加载阶段 加载(Loading)阶段第一步是类加载器根据类的全限定名通过不同的渠道以二进制流的方式获取字节码信息。程序员可以使用Java代码拓展的不同的渠道。 类加载器在加载完类之后，Java虚拟机会将字节码中的信息保存到内存的方法区中。 生成一个InstanceKlass对象，保存类的所有信息，里边还包含实现特定功能比如多态的信息","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/Java/JVM/2022-11-01-JVM-%E5%9F%BA%E7%A1%80%E7%AF%87.html"}],["meta",{"property":"og:site_name","content":"七分熟"}],["meta",{"property":"og:title","content":"JVM | 基础篇"}],["meta",{"property":"og:description","content":"1、字节码 2、类加载 2.1类的生命周期 2.1.1 类的生命周期-加载阶段 加载(Loading)阶段第一步是类加载器根据类的全限定名通过不同的渠道以二进制流的方式获取字节码信息。程序员可以使用Java代码拓展的不同的渠道。 类加载器在加载完类之后，Java虚拟机会将字节码中的信息保存到内存的方法区中。 生成一个InstanceKlass对象，保存类的所有信息，里边还包含实现特定功能比如多态的信息"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-12T03:49:58.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"JVM | 基础篇"}],["meta",{"property":"article:author","content":"七分熟"}],["meta",{"property":"article:tag","content":"JVM"}],["meta",{"property":"article:published_time","content":"2022-11-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-12T03:49:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JVM | 基础篇\\",\\"image\\":[\\"https://vuepress-theme-hope-v2-demo.mrhope.site/\\"],\\"datePublished\\":\\"2022-11-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-12T03:49:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"七分熟\\",\\"url\\":\\"https://github.com/panslong\\"}]}"]]},"headers":[{"level":2,"title":"1、字节码","slug":"_1、字节码","link":"#_1、字节码","children":[]},{"level":2,"title":"2、类加载","slug":"_2、类加载","link":"#_2、类加载","children":[{"level":3,"title":"2.1类的生命周期","slug":"_2-1类的生命周期","link":"#_2-1类的生命周期","children":[]},{"level":3,"title":"2.2 类加载器","slug":"_2-2-类加载器","link":"#_2-2-类加载器","children":[]},{"level":3,"title":"2.3 类加载器的双亲委派","slug":"_2-3-类加载器的双亲委派","link":"#_2-3-类加载器的双亲委派","children":[]},{"level":3,"title":"2.4 打破双亲委派机制","slug":"_2-4-打破双亲委派机制","link":"#_2-4-打破双亲委派机制","children":[]},{"level":3,"title":"2.5 JDK9之后的类加载器","slug":"_2-5-jdk9之后的类加载器","link":"#_2-5-jdk9之后的类加载器","children":[]},{"level":3,"title":"2.6 总结","slug":"_2-6-总结","link":"#_2-6-总结","children":[]}]},{"level":2,"title":"3、Java内存区域","slug":"_3、java内存区域","link":"#_3、java内存区域","children":[{"level":3,"title":"3.1 程序计数器","slug":"_3-1-程序计数器","link":"#_3-1-程序计数器","children":[]},{"level":3,"title":"3.2 栈","slug":"_3-2-栈","link":"#_3-2-栈","children":[]},{"level":3,"title":"3.3 堆","slug":"_3-3-堆","link":"#_3-3-堆","children":[]},{"level":3,"title":"3.4 方法区","slug":"_3-4-方法区","link":"#_3-4-方法区","children":[]},{"level":3,"title":"3.5 直接内存","slug":"_3-5-直接内存","link":"#_3-5-直接内存","children":[]},{"level":3,"title":"3.6 总结","slug":"_3-6-总结","link":"#_3-6-总结","children":[]}]},{"level":2,"title":"4、垃圾回收","slug":"_4、垃圾回收","link":"#_4、垃圾回收","children":[{"level":3,"title":"4.1 C/C++的内存管理","slug":"_4-1-c-c-的内存管理","link":"#_4-1-c-c-的内存管理","children":[]},{"level":3,"title":"4.2 Java的内存管理","slug":"_4-2-java的内存管理","link":"#_4-2-java的内存管理","children":[]},{"level":3,"title":"4.3 垃圾回收的对比","slug":"_4-3-垃圾回收的对比","link":"#_4-3-垃圾回收的对比","children":[]},{"level":3,"title":"4.4 自动垃圾回收 – 应用场景","slug":"_4-4-自动垃圾回收-–-应用场景","link":"#_4-4-自动垃圾回收-–-应用场景","children":[]},{"level":3,"title":"4.5 方法区的回收","slug":"_4-5-方法区的回收","link":"#_4-5-方法区的回收","children":[]},{"level":3,"title":"4.6 堆回收","slug":"_4-6-堆回收","link":"#_4-6-堆回收","children":[]},{"level":3,"title":"4.7 垃圾回收算法","slug":"_4-7-垃圾回收算法","link":"#_4-7-垃圾回收算法","children":[]},{"level":3,"title":"4.8 垃圾回收器","slug":"_4-8-垃圾回收器","link":"#_4-8-垃圾回收器","children":[]}]}],"git":{"createdTime":1702352998000,"updatedTime":1702352998000,"contributors":[{"name":"panshuilong","email":"1063589459@qq.com","commits":1}]},"readingTime":{"minutes":46.2,"words":13861},"filePathRelative":"Java/JVM/2022-11-01-JVM-基础篇.md","localizedDate":"2022年11月1日","excerpt":"<h2> 1、字节码</h2>\\n<h2> 2、类加载</h2>\\n<h3> 2.1类的生命周期</h3>\\n<figure><figcaption></figcaption></figure>\\n<h4> 2.1.1 类的生命周期-加载阶段</h4>\\n<p>加载(Loading)阶段第一步是类加载器根据类的全限定名通过不同的渠道以二进制流的方式获取字节码信息。程序员可以使用Java代码拓展的不同的渠道。</p>\\n<figure><figcaption></figcaption></figure>\\n<p>类加载器在加载完类之后，Java虚拟机会将字节码中的信息保存到内存的方法区中。</p>\\n<p>生成一个InstanceKlass对象，保存类的所有信息，里边还包含实现特定功能比如多态的信息</p>","autoDesc":true}');export{e as data};
