const e=JSON.parse('{"key":"v-69ad0c55","path":"/framework/SpringCloud/2023-03-04-Ribbon%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E7%AD%96%E7%95%A5.html","title":"Ribbon负载均衡策略","lang":"zh-CN","frontmatter":{"title":"Ribbon负载均衡策略","icon":"article","date":"2023-03-04T00:00:00.000Z","category":"SpringCloud","tag":["Ribbon"],"description":"Ribbon负载均衡流程 Ribbon 支持的 7 种负载均衡策略： RoundRobinRule（默认）：简单轮询服务列表来选择服务器 RandomRule：随机选择一个可用的服务器 WeightedResponseTimeRule：按照权重来选择服务器，响应时间越长，权重越小 BestAvailableRule：最小连接数策略，忽略那些短路的服务器，并选择并发数较低的服务器 RetryRule：重试策略（按照轮询策略来获取服务，如果获取的服务实例为 null 或已经失效，则在指定的时间之内不断地进行重试来获取服务，如果超过指定时间依然没获取到服务实例则返回 null） AvailabilityFilteringRule：可用性敏感策略，先过滤非健康的，再选择连接数较小的实例 ZoneAvoidanceRule：以区域可用的服务器为基础进行服务器的选择。使用Zone对服务器进行分类，这个Zone可以理解为一个机房、一个机架等。而后再对Zone内的多个服务做轮询","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/framework/SpringCloud/2023-03-04-Ribbon%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E7%AD%96%E7%95%A5.html"}],["meta",{"property":"og:site_name","content":"七分熟"}],["meta",{"property":"og:title","content":"Ribbon负载均衡策略"}],["meta",{"property":"og:description","content":"Ribbon负载均衡流程 Ribbon 支持的 7 种负载均衡策略： RoundRobinRule（默认）：简单轮询服务列表来选择服务器 RandomRule：随机选择一个可用的服务器 WeightedResponseTimeRule：按照权重来选择服务器，响应时间越长，权重越小 BestAvailableRule：最小连接数策略，忽略那些短路的服务器，并选择并发数较低的服务器 RetryRule：重试策略（按照轮询策略来获取服务，如果获取的服务实例为 null 或已经失效，则在指定的时间之内不断地进行重试来获取服务，如果超过指定时间依然没获取到服务实例则返回 null） AvailabilityFilteringRule：可用性敏感策略，先过滤非健康的，再选择连接数较小的实例 ZoneAvoidanceRule：以区域可用的服务器为基础进行服务器的选择。使用Zone对服务器进行分类，这个Zone可以理解为一个机房、一个机架等。而后再对Zone内的多个服务做轮询"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-19T07:26:33.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Ribbon负载均衡策略"}],["meta",{"property":"article:author","content":"七分熟"}],["meta",{"property":"article:tag","content":"Ribbon"}],["meta",{"property":"article:published_time","content":"2023-03-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-19T07:26:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Ribbon负载均衡策略\\",\\"image\\":[\\"https://vuepress-theme-hope-v2-demo.mrhope.site/\\"],\\"datePublished\\":\\"2023-03-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-19T07:26:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"七分熟\\",\\"url\\":\\"https://github.com/panslong\\"}]}"]]},"headers":[{"level":2,"title":"Ribbon负载均衡流程","slug":"ribbon负载均衡流程","link":"#ribbon负载均衡流程","children":[]},{"level":2,"title":"Ribbon 支持的 7 种负载均衡策略：","slug":"ribbon-支持的-7-种负载均衡策略","link":"#ribbon-支持的-7-种负载均衡策略","children":[]},{"level":2,"title":"自定义负载均衡策略如何实现 ?","slug":"自定义负载均衡策略如何实现","link":"#自定义负载均衡策略如何实现","children":[]}],"git":{"createdTime":1724052393000,"updatedTime":1724052393000,"contributors":[{"name":"panshuilong","email":"1063589459@qq.com","commits":1}]},"readingTime":{"minutes":1.26,"words":379},"filePathRelative":"framework/SpringCloud/2023-03-04-Ribbon负载均衡策略.md","localizedDate":"2023年3月4日","excerpt":"<h2> Ribbon负载均衡流程</h2>\\n<figure><figcaption></figcaption></figure>\\n<h2> Ribbon 支持的 7 种负载均衡策略：</h2>\\n<ul>\\n<li>RoundRobinRule（默认）：简单轮询服务列表来选择服务器</li>\\n<li>RandomRule：随机选择一个可用的服务器</li>\\n<li>WeightedResponseTimeRule：按照权重来选择服务器，响应时间越长，权重越小</li>\\n<li>BestAvailableRule：最小连接数策略，忽略那些短路的服务器，并选择并发数较低的服务器</li>\\n<li>RetryRule：重试策略（按照轮询策略来获取服务，如果获取的服务实例为 null 或已经失效，则在指定的时间之内不断地进行重试来获取服务，如果超过指定时间依然没获取到服务实例则返回 null）</li>\\n<li>AvailabilityFilteringRule：可用性敏感策略，先过滤非健康的，再选择连接数较小的实例</li>\\n<li>ZoneAvoidanceRule：以区域可用的服务器为基础进行服务器的选择。使用Zone对服务器进行分类，这个Zone可以理解为一个机房、一个机架等。而后再对Zone内的多个服务做轮询</li>\\n</ul>","autoDesc":true}');export{e as data};
