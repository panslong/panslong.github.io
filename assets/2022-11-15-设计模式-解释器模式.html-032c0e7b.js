const n=JSON.parse('{"key":"v-2f4bbc50","path":"/Java/design-patterns/behavioral-patterns/2022-11-15-%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%A7%A3%E9%87%8A%E5%99%A8%E6%A8%A1%E5%BC%8F.html","title":"解释器模式","lang":"zh-CN","frontmatter":{"title":"解释器模式","icon":"article","date":"2022-11-15T00:00:00.000Z","category":"设计模式","tag":["设计模式","行为型模式"],"description":"概述 如上图，设计一个软件用来进行加减计算。我们第一想法就是使用工具类，提供对应的加法和减法的工具方法。 //用于两个整数相加 public static int add(int a,int b){ return a + b; } //用于两个整数相加 public static int add(int a,int b,int c){ return a + b + c; } //用于n个整数相加 public static int add(Integer ... arr) { int sum = 0; for (Integer i : arr) { sum += i; } return sum; }","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/Java/design-patterns/behavioral-patterns/2022-11-15-%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%A7%A3%E9%87%8A%E5%99%A8%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"七分熟"}],["meta",{"property":"og:title","content":"解释器模式"}],["meta",{"property":"og:description","content":"概述 如上图，设计一个软件用来进行加减计算。我们第一想法就是使用工具类，提供对应的加法和减法的工具方法。 //用于两个整数相加 public static int add(int a,int b){ return a + b; } //用于两个整数相加 public static int add(int a,int b,int c){ return a + b + c; } //用于n个整数相加 public static int add(Integer ... arr) { int sum = 0; for (Integer i : arr) { sum += i; } return sum; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-14T03:04:27.000Z"}],["meta",{"property":"article:author","content":"七分熟"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:tag","content":"行为型模式"}],["meta",{"property":"article:published_time","content":"2022-11-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-14T03:04:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"解释器模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-15T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-14T03:04:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"七分熟\\",\\"url\\":\\"https://github.com/panslong\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"结构","slug":"结构","link":"#结构","children":[]},{"level":2,"title":"案例实现","slug":"案例实现","link":"#案例实现","children":[]},{"level":2,"title":"优缺点","slug":"优缺点","link":"#优缺点","children":[]},{"level":2,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]}],"git":{"createdTime":1702523067000,"updatedTime":1702523067000,"contributors":[{"name":"panshuilong","email":"1063589459@qq.com","commits":1}]},"readingTime":{"minutes":5.76,"words":1728},"filePathRelative":"Java/design-patterns/behavioral-patterns/2022-11-15-设计模式-解释器模式.md","localizedDate":"2022年11月15日","excerpt":"<h2> 概述</h2>\\n<figure><figcaption></figcaption></figure>\\n<p>如上图，设计一个软件用来进行加减计算。我们第一想法就是使用工具类，提供对应的加法和减法的工具方法。</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token comment\\">//用于两个整数相加</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">int</span> <span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> a<span class=\\"token punctuation\\">,</span><span class=\\"token keyword\\">int</span> b<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> a <span class=\\"token operator\\">+</span> b<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">//用于两个整数相加</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">int</span> <span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> a<span class=\\"token punctuation\\">,</span><span class=\\"token keyword\\">int</span> b<span class=\\"token punctuation\\">,</span><span class=\\"token keyword\\">int</span> c<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> a <span class=\\"token operator\\">+</span> b <span class=\\"token operator\\">+</span> c<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">//用于n个整数相加</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">int</span> <span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Integer</span> <span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span> arr<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">int</span> sum <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Integer</span> i <span class=\\"token operator\\">:</span> arr<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        sum <span class=\\"token operator\\">+=</span> i<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">return</span> sum<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
