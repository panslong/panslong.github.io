import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as t}from"./app-de394487.js";const e="/assets/image-20221201223817058-9dbf2a30.png",p={},o=t('<h2 id="_1-循环依赖" tabindex="-1"><a class="header-anchor" href="#_1-循环依赖" aria-hidden="true">#</a> 1. 循环依赖</h2><p>既然要解决循环依赖，那么就要知道循环依赖是什么。如下图所示：</p><figure><img src="'+e+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>通过上图，我们可以看出：</p><ul><li>A 依赖于 B</li><li>B 依赖于 C</li><li>C 依赖于 A</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">B</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">C</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">A</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种依赖关系形成了一种闭环，从而造成了循环依赖的局面。</p><p>下面是未解决循环依赖的常规步骤：</p><ol><li>实例化 A，此时 A 还未完成属性填充和初始化方法（@PostConstruct）的执行。</li><li>A 对象发现需要注入 B 对象，但是容器中并没有 B 对象（如果对象创建完成并且属性注入完成和执行完初始化方法就会放入容器中）。</li><li>实例化 B，此时 B 还未完成属性填充和初始化方法（@PostConstruct）的执行。</li><li>B 对象发现需要注入 C 对象，但是容器中并没有 C 对象。</li><li>实例化 C，此时 C 还未完成属性填充和初始化方法（@PostConstruct）的执行。</li><li>C 对象发现需要注入 A 对象，但是容器中并没有 A 对象。</li><li>重复步骤 1。</li></ol><h2 id="_2-三级缓存" tabindex="-1"><a class="header-anchor" href="#_2-三级缓存" aria-hidden="true">#</a> 2. 三级缓存</h2><p>Spring 解决循环依赖的核心就是提前暴露对象，而提前暴露的对象就是放置于第二级缓存中。下表是三级缓存的说明：</p><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>singletonObjects</td><td>一级缓存，存放完整的 Bean。</td></tr><tr><td>earlySingletonObjects</td><td>二级缓存，存放提前暴露的Bean，Bean 是不完整的，未完成属性注入和执行 init 方法。</td></tr><tr><td>singletonFactories</td><td>三级缓存，存放的是 Bean 工厂，主要是生产 Bean，存放到二级缓存中。</td></tr></tbody></table><p>所有被 Spring 管理的 Bean，最终都会存放在 singletonObjects 中，这里面存放的 Bean 是经历了所有生命周期的（除了销毁的生命周期），完整的，可以给用户使用的。</p><p>earlySingletonObjects 存放的是已经被实例化，但是还没有注入属性和执行 init 方法的 Bean。</p><p>singletonFactories 存放的是生产 Bean 的工厂。</p><p>Bean 都已经实例化了，为什么还需要一个生产 Bean 的工厂呢？这里实际上是跟 AOP 有关，如果项目中不需要为 Bean 进行代理，那么这个 Bean 工厂就会直接返回一开始实例化的对象，如果需要使用 AOP 进行代理，那么这个工厂就会发挥重要的作用了，这也是本文需要重点关注的问题之一。</p><h3 id="_2-1-解决循环依赖" tabindex="-1"><a class="header-anchor" href="#_2-1-解决循环依赖" aria-hidden="true">#</a> 2.1 解决循环依赖</h3><p>Spring 是如何通过上面介绍的三级缓存来解决循环依赖的呢？这里只用 A，B 形成的循环依赖来举例：</p><ol><li>实例化 A，此时 A 还未完成属性填充和初始化方法（@PostConstruct）的执行，A 只是一个半成品。</li><li>为 A 创建一个 Bean 工厂，并放入到 singletonFactories 中。</li><li>发现 A 需要注入 B 对象，但是一级、二级、三级缓存均为发现对象 B。</li><li>实例化 B，此时 B 还未完成属性填充和初始化方法（@PostConstruct）的执行，B 只是一个半成品。</li><li>为 B 创建一个 Bean 工厂，并放入到 singletonFactories 中。</li><li>发现 B 需要注入 A 对象，此时在一级、二级未发现对象 A，但是在三级缓存中发现了对象 A，从三级缓存中得到对象 A，并将对象 A 放入二级缓存中，同时删除三级缓存中的对象 A。（注意，此时的 A 还是一个半成品，并没有完成属性填充和执行初始化方法）</li><li>将对象 A 注入到对象 B 中。</li><li>对象 B 完成属性填充，执行初始化方法，并放入到一级缓存中，同时删除二级缓存中的对象 B。（此时对象 B 已经是一个成品）</li><li>对象 A 得到对象 B，将对象 B 注入到对象 A 中。（对象 A 得到的是一个完整的对象 B）</li><li>对象 A 完成属性填充，执行初始化方法，并放入到一级缓存中，同时删除二级缓存中的对象 A。</li></ol><p>我们从源码中来分析整个过程：</p><p>创建 Bean 的方法在 <code>AbstractAutowireCapableBeanFactory::doCreateBean()</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">protected</span> <span class="token class-name">Object</span> <span class="token function">doCreateBean</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span> beanName<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token class-name">RootBeanDefinition</span> mbd<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeanCreationException</span> <span class="token punctuation">{</span>
    <span class="token class-name">BeanWrapper</span> instanceWrapper <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	
    <span class="token keyword">if</span> <span class="token punctuation">(</span>instanceWrapper <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ① 实例化对象</span>
        instanceWrapper <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createBeanInstance</span><span class="token punctuation">(</span>beanName<span class="token punctuation">,</span> mbd<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">final</span> <span class="token class-name">Object</span> bean <span class="token operator">=</span> instanceWrapper <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">?</span> instanceWrapper<span class="token punctuation">.</span><span class="token function">getWrappedInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> beanType <span class="token operator">=</span> instanceWrapper <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">?</span> instanceWrapper<span class="token punctuation">.</span><span class="token function">getWrappedClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
   
    <span class="token comment">// ② 判断是否允许提前暴露对象，如果允许，则直接添加一个 ObjectFactory 到三级缓存</span>
	<span class="token keyword">boolean</span> earlySingletonExposure <span class="token operator">=</span> <span class="token punctuation">(</span>mbd<span class="token punctuation">.</span><span class="token function">isSingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>allowCircularReferences <span class="token operator">&amp;&amp;</span>
				<span class="token function">isSingletonCurrentlyInCreation</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>earlySingletonExposure<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 添加三级缓存的方法详情在下方</span>
        <span class="token function">addSingletonFactory</span><span class="token punctuation">(</span>beanName<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token function">getEarlyBeanReference</span><span class="token punctuation">(</span>beanName<span class="token punctuation">,</span> mbd<span class="token punctuation">,</span> bean<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ③ 填充属性</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">populateBean</span><span class="token punctuation">(</span>beanName<span class="token punctuation">,</span> mbd<span class="token punctuation">,</span> instanceWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// ④ 执行初始化方法，并创建代理</span>
    exposedObject <span class="token operator">=</span> <span class="token function">initializeBean</span><span class="token punctuation">(</span>beanName<span class="token punctuation">,</span> exposedObject<span class="token punctuation">,</span> mbd<span class="token punctuation">)</span><span class="token punctuation">;</span>
   
    <span class="token keyword">return</span> exposedObject<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加三级缓存的方法如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">addSingletonFactory</span><span class="token punctuation">(</span><span class="token class-name">String</span> beanName<span class="token punctuation">,</span> <span class="token class-name">ObjectFactory</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> singletonFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Assert</span><span class="token punctuation">.</span><span class="token function">notNull</span><span class="token punctuation">(</span>singletonFactory<span class="token punctuation">,</span> <span class="token string">&quot;Singleton factory must not be null&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>singletonObjects<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>singletonObjects<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 判断一级缓存中不存在此对象</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>singletonFactories<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>beanName<span class="token punctuation">,</span> singletonFactory<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 添加至三级缓存</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>earlySingletonObjects<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 确保二级缓存没有此对象</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>registeredSingletons<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ObjectFactory</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
	<span class="token class-name">T</span> <span class="token function">getObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这段代码，我们可以知道 Spring 在实例化对象的之后，就会为其创建一个 Bean 工厂，并将此工厂加入到三级缓存中。</p><p><strong>因此，Spring 一开始提前暴露的并不是实例化的 Bean，而是将 Bean 包装起来的 ObjectFactory。为什么要这么做呢？</strong></p><p>这实际上涉及到 AOP，如果创建的 Bean 是有代理的，那么注入的就应该是代理 Bean，而不是原始的 Bean。但是 Spring 一开始并不知道 Bean 是否会有循环依赖，通常情况下（没有循环依赖的情况下），Spring 都会在完成填充属性，并且执行完初始化方法之后再为其创建代理。但是，如果出现了循环依赖的话，Spring 就不得不为其提前创建代理对象，否则注入的就是一个原始对象，而不是代理对象。因此，这里就涉及到应该在哪里提前创建代理对象？</p><p>Spring 的做法就是在 ObjectFactory 中去提前创建代理对象。它会执行 <code>getObject()</code> 方法来获取到 Bean。实际上，它真正执行的方法如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">protected</span> <span class="token class-name">Object</span> <span class="token function">getEarlyBeanReference</span><span class="token punctuation">(</span><span class="token class-name">String</span> beanName<span class="token punctuation">,</span> <span class="token class-name">RootBeanDefinition</span> mbd<span class="token punctuation">,</span> <span class="token class-name">Object</span> bean<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Object</span> exposedObject <span class="token operator">=</span> bean<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>mbd<span class="token punctuation">.</span><span class="token function">isSynthetic</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">hasInstantiationAwareBeanPostProcessors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">BeanPostProcessor</span> bp <span class="token operator">:</span> <span class="token function">getBeanPostProcessors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>bp <span class="token keyword">instanceof</span> <span class="token class-name">SmartInstantiationAwareBeanPostProcessor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">SmartInstantiationAwareBeanPostProcessor</span> ibp <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">SmartInstantiationAwareBeanPostProcessor</span><span class="token punctuation">)</span> bp<span class="token punctuation">;</span>
                <span class="token comment">// 如果需要代理，这里会返回代理对象；否则返回原始对象</span>
                exposedObject <span class="token operator">=</span> ibp<span class="token punctuation">.</span><span class="token function">getEarlyBeanReference</span><span class="token punctuation">(</span>exposedObject<span class="token punctuation">,</span> beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> exposedObject<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为提前进行了代理，避免对后面重复创建代理对象，会在 <code>earlyProxyReferences</code> 中记录已被代理的对象。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractAutoProxyCreator</span> <span class="token keyword">extends</span> <span class="token class-name">ProxyProcessorSupport</span>
		<span class="token keyword">implements</span> <span class="token class-name">SmartInstantiationAwareBeanPostProcessor</span><span class="token punctuation">,</span> <span class="token class-name">BeanFactoryAware</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getEarlyBeanReference</span><span class="token punctuation">(</span><span class="token class-name">Object</span> bean<span class="token punctuation">,</span> <span class="token class-name">String</span> beanName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Object</span> cacheKey <span class="token operator">=</span> <span class="token function">getCacheKey</span><span class="token punctuation">(</span>bean<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 记录已被代理的对象</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>earlyProxyReferences<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>cacheKey<span class="token punctuation">,</span> bean<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">wrapIfNecessary</span><span class="token punctuation">(</span>bean<span class="token punctuation">,</span> beanName<span class="token punctuation">,</span> cacheKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>通过上面的解析，我们可以知道 Spring 需要三级缓存的目的是为了在没有循环依赖的情况下，延迟代理对象的创建，使 Bean 的创建符合 Spring 的设计原则。</strong></p><h3 id="_2-2-如何获取依赖" tabindex="-1"><a class="header-anchor" href="#_2-2-如何获取依赖" aria-hidden="true">#</a> 2.2 如何获取依赖</h3><p>我们目前已经知道了 Spring 的三级依赖的作用，但是 Spring 在注入属性的时候是如何去获取依赖的呢？</p><p>他是通过一个 <code>getSingleton()</code> 方法去获取所需要的 Bean 的。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">protected</span> <span class="token class-name">Object</span> <span class="token function">getSingleton</span><span class="token punctuation">(</span><span class="token class-name">String</span> beanName<span class="token punctuation">,</span> <span class="token keyword">boolean</span> allowEarlyReference<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 一级缓存</span>
    <span class="token class-name">Object</span> singletonObject <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>singletonObjects<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>singletonObject <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isSingletonCurrentlyInCreation</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>singletonObjects<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 二级缓存</span>
            singletonObject <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>earlySingletonObjects<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>singletonObject <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> allowEarlyReference<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 三级缓存</span>
                <span class="token class-name">ObjectFactory</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> singletonFactory <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>singletonFactories<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>singletonFactory <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// Bean 工厂中获取 Bean</span>
                    singletonObject <span class="token operator">=</span> singletonFactory<span class="token punctuation">.</span><span class="token function">getObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token comment">// 放入到二级缓存中</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>earlySingletonObjects<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>beanName<span class="token punctuation">,</span> singletonObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>singletonFactories<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> singletonObject<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当 Spring 为某个 Bean 填充属性的时候，它首先会寻找需要注入对象的名称，然后依次执行 <code>getSingleton()</code> 方法得到所需注入的对象，而获取对象的过程就是先从一级缓存中获取，一级缓存中没有就从二级缓存中获取，二级缓存中没有就从三级缓存中获取，如果三级缓存中也没有，那么就会去执行 <code>doCreateBean()</code> 方法创建这个 Bean。</p><h2 id="_3-二级缓存" tabindex="-1"><a class="header-anchor" href="#_3-二级缓存" aria-hidden="true">#</a> 3. 二级缓存</h2><p>我们现在已经知道，第三级缓存的目的是为了延迟代理对象的创建，因为如果没有依赖循环的话，那么就不需要为其提前创建代理，可以将它延迟到初始化完成之后再创建。</p><p>既然目的只是延迟的话，那么我们是不是可以不延迟创建，而是在实例化完成之后，就为其创建代理对象，这样我们就不需要第三级缓存了。因此，<code>我们可以将addSingletonFactory()</code> 方法进行改造。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">addSingletonFactory</span><span class="token punctuation">(</span><span class="token class-name">String</span> beanName<span class="token punctuation">,</span> <span class="token class-name">ObjectFactory</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> singletonFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Assert</span><span class="token punctuation">.</span><span class="token function">notNull</span><span class="token punctuation">(</span>singletonFactory<span class="token punctuation">,</span> <span class="token string">&quot;Singleton factory must not be null&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>singletonObjects<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>singletonObjects<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 判断一级缓存中不存在此对象</span>
            object o <span class="token operator">=</span> singletonFactory<span class="token punctuation">.</span><span class="token function">getObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 直接从工厂中获取 Bean</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>earlySingletonObjects<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>beanName<span class="token punctuation">,</span> o<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 添加至二级缓存中</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>registeredSingletons<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样的话，每次实例化完 Bean 之后就直接去创建代理对象，并添加到二级缓存中。<strong>测试结果是完全正常的</strong>，<strong>Spring 的初始化时间应该也是不会有太大的影响，因为如果 Bean 本身不需要代理的话，是直接返回原始 Bean 的，并不需要走复杂的创建代理 Bean 的流程。</strong></p><h2 id="_4-结论" tabindex="-1"><a class="header-anchor" href="#_4-结论" aria-hidden="true">#</a> 4. 结论</h2><p>测试证明，二级缓存也是可以解决循环依赖的。为什么 Spring 不选择二级缓存，而要额外多添加一层缓存呢？</p><p>如果 Spring 选择二级缓存来解决循环依赖的话，那么就意味着所有 Bean 都需要在实例化完成之后就立马为其创建代理，<strong>而 Spring 的设计原则是在 Bean 初始化完成之后才为其创建代理。所以，Spring 选择了三级缓存</strong>。但是因为循环依赖的出现，导致了 Spring 不得不提前去创建代理，因为如果不提前创建代理对象，那么注入的就是原始对象，这样就会产生错误。</p>`,45),c=[o];function l(i,u){return s(),a("div",null,c)}const d=n(p,[["render",l],["__file","2023-12-18-Spring循环依赖.html.vue"]]);export{d as default};
