import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as p}from"./app-de394487.js";const e="/assets/20221018113612-afd766c1.png",t="/assets/20221018114221-91a6b4c8.png",o="/assets/20221018114352-d049a406.png",c={},l=p('<h2 id="线程池简介" tabindex="-1"><a class="header-anchor" href="#线程池简介" aria-hidden="true">#</a> 线程池简介</h2><p>线程池（英语：thread pool）一种线程使用模式。线程过多会带来调度开销，进而影响缓存局部性和整体性能。而线程池维护着多个线程，等待着监督管理者分配可并发执行的任务。这避免了在处理短时间任务时创建与销毁线程的代价。线程池不仅能够保证内核的充分利用，还能防止过分调度</p><p>线程池的优势： 线程池做的工作只要是控制运行的线程数量，处理过程中将任务放入队列，然后在线程创建后启动这些任务，如果线程数量超过了最大数量，超过数量的线程排队等候，等其他线程执行完毕，再从队列中取出任务来执行。</p><p>线程池的特点：</p><ol><li>降低资源消耗: 通过重复利用已创建的线程降低线程创建和销毁造成的销耗。</li><li>提高响应速度: 当任务到达时，任务可以不需要等待线程创建就能立即执行。</li><li>提高线程的可管理性: 线程是稀缺资源，如果无限制的创建，不仅会销耗系统资源，还会降低系统的稳定性，使用线程池可以进行统一的分配，调优和监控。</li></ol><h2 id="线程池架构" tabindex="-1"><a class="header-anchor" href="#线程池架构" aria-hidden="true">#</a> 线程池架构</h2><p>Java 中的线程池是通过 Executor 框架实现的，该框架中用到了 Executor，Executors，ExecutorService，ThreadPoolExecutor 这几个类</p><figure><img src="'+e+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="线程池使用方式" tabindex="-1"><a class="header-anchor" href="#线程池使用方式" aria-hidden="true">#</a> 线程池使用方式</h2><p><strong>Executors.newFixedThreadPool(int)</strong>：一池N线程</p><p><strong>特征：</strong></p><ol><li>线程池中的线程处于一定的量，可以很好的控制线程的并发量</li><li>线程可以重复被使用，在显示关闭之前，都将一直存在</li><li>超出一定量的线程被提交时候需在队列中等待</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ExecutorService</span> threadPool1 <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//5个窗口</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Executors.newSingleThreadExecutor()</strong>：一池一线程</p><p>特征： 线程池中最多执行 1 个线程，之后提交的线程活动将会排在队列中以此 执行</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ExecutorService</span> threadPool2 <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newSingleThreadExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//一个窗口</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Executors.newCachedThreadPool()</strong>：一池可扩容根据需求创建线程</p><p>作用：创建一个可缓存线程池，如果线程池长度超过处理需要，可灵活回收空 闲线程，若无可回收，则新建线程.</p><p>特点：</p><ol><li>线程池中数量没有固定，可达到最大值（Interger. MAX_VALUE）</li><li>线程池中的线程可进行缓存重复利用和回收（回收默认时间为 1 分钟）</li><li>当线程池中，没有可用线程，会重新创建一个线程</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ExecutorService</span> threadPool3 <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newCachedThreadPool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>执行线程</strong>：execute()<br><strong>关闭线程</strong>：shutdown()</p><p>void execute(Runnable command);参数为Runnable接口类，可以通过设置lambda</p><p><strong>具体案例代码案例</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadPoolDemo1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//一池N线程</span>
        <span class="token class-name">ExecutorService</span> threadPool1 <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//一池-线程</span>
        <span class="token class-name">ExecutorService</span> threadPool2 <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newSingleThreadExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//一池可扩容线程</span>
        <span class="token class-name">ExecutorService</span> threadPool3 <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newCachedThreadPool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//五个窗口处理10个顾客请求</span>
        <span class="token keyword">try</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                threadPool3<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; 正在办理业务&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token punctuation">}</span><span class="token keyword">finally</span> <span class="token punctuation">{</span>
            threadPool3<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一池N线程输出结果为：</p><blockquote><p>pool-1-thread-2 正在办理业务</p><p>pool-1-thread-2 正在办理业务</p><p>pool-1-thread-2 正在办理业务</p><p>pool-1-thread-2 正在办理业务</p><p>pool-1-thread-2 正在办理业务</p><p>pool-1-thread-2 正在办理业务</p><p>pool-1-thread-3 正在办理业务</p><p>pool-1-thread-4 正在办理业务</p><p>pool-1-thread-1 正在办理业务</p><p>pool-1-thread-5 正在办理业务</p></blockquote><p>一池一线程输出结果：</p><blockquote><p>pool-2-thread-1 正在办理业务</p><p>pool-2-thread-1 正在办理业务</p><p>pool-2-thread-1 正在办理业务</p><p>pool-2-thread-1 正在办理业务</p><p>pool-2-thread-1 正在办理业务</p><p>pool-2-thread-1 正在办理业务</p><p>pool-2-thread-1 正在办理业务</p><p>pool-2-thread-1 正在办理业务</p><p>pool-2-thread-1 正在办理业务</p><p>pool-2-thread-1 正在办理业务</p></blockquote><p>一池可扩容根据需求创建线程输出结果为：</p><blockquote><p>pool-3-thread-2 正在办理业务</p><p>pool-3-thread-5 正在办理业务</p><p>pool-3-thread-3 正在办理业务</p><p>pool-3-thread-1 正在办理业务</p><p>pool-3-thread-4 正在办理业务</p><p>pool-3-thread-7 正在办理业务</p><p>pool-3-thread-6 正在办理业务</p><p>pool-3-thread-8 正在办理业务</p><p>pool-3-thread-9 正在办理业务</p><p>pool-3-thread-10 正在办理业务</p></blockquote><h2 id="线程池底层原则" tabindex="-1"><a class="header-anchor" href="#线程池底层原则" aria-hidden="true">#</a> 线程池底层原则</h2><p>通过查看上面三种方式创建对象的类源代码<br> 都有 new ThreadPoolExecutor 具体查看该类的源代码，涉及七个参数</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span><span class="token keyword">int</span> corePoolSize<span class="token punctuation">,</span>
                          <span class="token keyword">int</span> maximumPoolSize<span class="token punctuation">,</span>
                          <span class="token keyword">long</span> keepAliveTime<span class="token punctuation">,</span>
                          <span class="token class-name">TimeUnit</span> unit<span class="token punctuation">,</span>
                          <span class="token class-name">BlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">&gt;</span></span> workQueue<span class="token punctuation">,</span>
                          <span class="token class-name">ThreadFactory</span> threadFactory<span class="token punctuation">,</span>
                          <span class="token class-name">RejectedExecutionHandler</span> handler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>corePoolSize <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span>
        maximumPoolSize <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">||</span>
        maximumPoolSize <span class="token operator">&lt;</span> corePoolSize <span class="token operator">||</span>
        keepAliveTime <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>workQueue <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> threadFactory <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> handler <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NullPointerException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>acc <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getSecurityManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span>
        <span class="token keyword">null</span> <span class="token operator">:</span>
    <span class="token class-name">AccessController</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 常驻线程数量（核心线程数量）</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>corePoolSize <span class="token operator">=</span> corePoolSize<span class="token punctuation">;</span>
    <span class="token comment">// 最大线程数量</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>maximumPoolSize <span class="token operator">=</span> maximumPoolSize<span class="token punctuation">;</span>
    <span class="token comment">// 阻塞队列（排队的线程放入）</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>workQueue <span class="token operator">=</span> workQueue<span class="token punctuation">;</span>
    <span class="token comment">// 线程存活时间</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>keepAliveTime <span class="token operator">=</span> unit<span class="token punctuation">.</span><span class="token function">toNanos</span><span class="token punctuation">(</span>keepAliveTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 线程工厂，用于创建线程 线程工厂，用于创建线程</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>threadFactory <span class="token operator">=</span> threadFactory<span class="token punctuation">;</span>
    <span class="token comment">// 拒绝测试（线程满了)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handler <span class="token operator">=</span> handler<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="线程池的七个参数" tabindex="-1"><a class="header-anchor" href="#线程池的七个参数" aria-hidden="true">#</a> 线程池的七个参数</h2><blockquote><p>int corePoolSize，常驻线程数量（核心）</p><p>int maximumPoolSize，最大线程数量</p><p>long keepAliveTime,TimeUnit unit，线程存活时间</p><p>BlockingQueue workQueue，阻塞队列（排队的线程放入）</p><p>ThreadFactory threadFactory，线程工厂，用于创建线程</p><p>RejectedExecutionHandler handler，拒绝测试（线程满了）</p></blockquote><p>具体工作流程是：</p><ol><li>在执行创建对象的时候不会创建线程，创建线程的时候execute(）才会创建</li><li>先到常驻线程，满了之后再到阻塞队列进行等待，阻塞队列满了之后，再往外扩容线程，扩容线程不能大于最大线程数。大于最大线程数和阻塞队列之和后，会执行拒绝策略。</li></ol><h2 id="线程池底层工作流程" tabindex="-1"><a class="header-anchor" href="#线程池底层工作流程" aria-hidden="true">#</a> 线程池底层工作流程</h2><figure><img src="`+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>对流程图的解释</p><p>现在假设来了9个线程，在执行execute()方法才创建线程。</p><p>第1-2个线程进入线程池创建</p><p>第3-5个线程进入阻塞队列</p><p>第6-8个线程会为他们创建新线程执行（直接运行线程6而非线程3）</p><p>第9个线程会被拒绝</p><p>总结来说：先到常驻线程，满了之后再到阻塞队列进行等待，阻塞队列满了之后，在往外扩容线程，扩容线程不能大于最大线程数。大于最大线程数和阻塞队列之和后，会执行拒绝策略。</p><p><strong>具体的拒绝策略有：</strong></p><ol><li>抛异常-AbortPolicy(默认)：直接抛出RejectedExecutionException异常阻止系统正常运行</li><li>谁调用找谁-CallerRunsPolicy：“调用者运行”一种调节机制，该策略既不会抛弃任务，也不会抛出异常，而是将某些任务回退到调用者，从而降低新任务的流量</li><li>抛弃最久执行当前-DiscardOldestPolicy：抛弃队列中等待最久的任务，然后把当前任务加入队列中，尝试再次提交当前任务</li><li>不理不问-Policydiscard：该策略默默地丢弃无法处理的任务，不予任何处理也不抱出异常。如果允许任务丢失，这是最好的一种策略</li></ol><h2 id="自定义线程池" tabindex="-1"><a class="header-anchor" href="#自定义线程池" aria-hidden="true">#</a> 自定义线程池</h2><p>实际在开发中不允许使用Executors创建，而是通过ThreadPoolExecutor的方式，规避资源耗尽风险</p><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//自定义线程池创建</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadPoolDemo2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ExecutorService</span> threadPool <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span>
                <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token number">5</span><span class="token punctuation">,</span>
                <span class="token number">2L</span><span class="token punctuation">,</span>
                <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">,</span>
                <span class="token keyword">new</span> <span class="token class-name">ArrayBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">defaultThreadFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor<span class="token punctuation">.</span>AbortPolicy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">try</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                threadPool<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; 正在办理业务&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span><span class="token punctuation">{</span>
            ex<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span><span class="token keyword">finally</span> <span class="token punctuation">{</span>
            threadPool<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><blockquote><p>pool-1-thread-2 正在办理业务</p><p>pool-1-thread-5 正在办理业务</p><p>pool-1-thread-5 正在办理业务</p><p>pool-1-thread-5 正在办理业务</p><p>pool-1-thread-3 正在办理业务</p><p>pool-1-thread-1 正在办理业务</p><p>pool-1-thread-2 正在办理业务</p><p>pool-1-thread-4 正在办理业务</p><p>java.util.concurrent.RejectedExecutionException: Task com.atguigu.pool.ThreadPoolDemo2$$Lambda$1/1324119927@448139f0 rejected from java.util.concurrent.ThreadPoolExecutor@7cca494b[Running, pool size = 5, active threads = 4, queued tasks = 0, completed tasks = 4]</p><p>​ at java.util.concurrent.ThreadPoolExecutor$AbortPolicy.rejectedExecution(ThreadPoolExecutor.java:2047)</p><p>​ at java.util.concurrent.ThreadPoolExecutor.reject(ThreadPoolExecutor.java:823)</p><p>​ at java.util.concurrent.ThreadPoolExecutor.execute(ThreadPoolExecutor.java:1369)</p><p>​ at com.atguigu.pool.ThreadPoolDemo2.main(ThreadPoolDemo2.java:25)</p><p>Process finished with exit code 0</p></blockquote><p>如果线程数大于 (最 大 线 程 数 量 + 阻 塞 队 列 容 量 ) 则抛出异常</p>`,56),i=[l];function u(r,d){return s(),a("div",null,i)}const v=n(c,[["render",u],["__file","2022-10-18-线程池.html.vue"]]);export{v as default};
