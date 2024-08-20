import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as e}from"./app-de394487.js";const p="/assets/image-20200207194617620-9a346596.png",t="/assets/桥接模式-f659ba89.png",i={},c=e('<h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h3><p>现在有一个需求，需要创建不同的图形，并且每个图形都有可能会有不同的颜色。我们可以利用继承的方式来设计类的关系：</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们可以发现有很多的类，假如我们再增加一个形状或再增加一种颜色，就需要创建更多的类。</p><p>试想，在一个有多种可能会变化的维度的系统中，用继承方式会造成类爆炸，扩展起来不灵活。每次在一个维度上新增一个具体实现都要增加多个子类。为了更加灵活的设计系统，我们此时可以考虑使用桥接模式。</p><p><strong>定义：</strong></p><p>​ 将抽象与实现分离，使它们可以独立变化。它是用组合关系代替继承关系来实现，从而降低了抽象和实现这两个可变维度的耦合度。</p><h3 id="结构" tabindex="-1"><a class="header-anchor" href="#结构" aria-hidden="true">#</a> 结构</h3><p>桥接（Bridge）模式包含以下主要角色：</p><ul><li>抽象化（Abstraction）角色 ：定义抽象类，并包含一个对实现化对象的引用。</li><li>扩展抽象化（Refined Abstraction）角色 ：是抽象化角色的子类，实现父类中的业务方法，并通过组合关系调用实现化角色中的业务方法。</li><li>实现化（Implementor）角色 ：定义实现化角色的接口，供扩展抽象化角色调用。</li><li>具体实现化（Concrete Implementor）角色 ：给出实现化角色接口的具体实现。</li></ul><h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h3><p>【例】视频播放器</p><p>需要开发一个跨平台视频播放器，可以在不同操作系统平台（如Windows、Mac、Linux等）上播放多种格式的视频文件，常见的视频格式包括RMVB、AVI、WMV等。该播放器包含了两个维度，适合使用桥接模式。</p><p>类图如下：</p><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//视频文件</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">VideoFile</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">decode</span><span class="token punctuation">(</span><span class="token class-name">String</span> fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//avi文件</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AVIFile</span> <span class="token keyword">implements</span> <span class="token class-name">VideoFile</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">decode</span><span class="token punctuation">(</span><span class="token class-name">String</span> fileName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;avi视频文件：&quot;</span><span class="token operator">+</span> fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//rmvb文件</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">REVBBFile</span> <span class="token keyword">implements</span> <span class="token class-name">VideoFile</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">decode</span><span class="token punctuation">(</span><span class="token class-name">String</span> fileName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;rmvb文件：&quot;</span> <span class="token operator">+</span> fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//操作系统版本</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">OperatingSystemVersion</span> <span class="token punctuation">{</span>

    <span class="token keyword">protected</span> <span class="token class-name">VideoFile</span> videoFile<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">OperatingSystemVersion</span><span class="token punctuation">(</span><span class="token class-name">VideoFile</span> videoFile<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>videoFile <span class="token operator">=</span> videoFile<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token class-name">String</span> fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//Windows版本</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Windows</span> <span class="token keyword">extends</span> <span class="token class-name">OperatingSystem</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">Windows</span><span class="token punctuation">(</span><span class="token class-name">VideoFile</span> videoFile<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>videoFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token class-name">String</span> fileName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        videoFile<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//mac版本</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Mac</span> <span class="token keyword">extends</span> <span class="token class-name">OperatingSystemVersion</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">Mac</span><span class="token punctuation">(</span><span class="token class-name">VideoFile</span> videoFile<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>videoFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token class-name">String</span> fileName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		videoFile<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//测试类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">OperatingSystem</span> os <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Windows</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">AVIFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        os<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token string">&quot;战狼3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>好处：</strong></p><ul><li><p>桥接模式提高了系统的可扩充性，在两个变化维度中任意扩展一个维度，都不需要修改原有系统。</p><p>如：如果现在还有一种视频文件类型wmv，我们只需要再定义一个类实现VideoFile接口即可，其他类不需要发生变化。</p></li><li><p>实现细节对客户透明</p></li></ul><h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h3><ul><li>当一个类存在两个独立变化的维度，且这两个维度都需要进行扩展时。</li><li>当一个系统不希望使用继承或因为多层次继承导致系统类的个数急剧增加时。</li><li>当一个系统需要在构件的抽象化角色和具体化角色之间增加更多的灵活性时。避免在两个层次之间建立静态的继承联系，通过桥接模式可以使它们在抽象层建立一个关联关系。</li></ul>`,21),l=[c];function o(u,d){return s(),a("div",null,l)}const v=n(i,[["render",o],["__file","2022-11-07-设计模式-桥接模式.html.vue"]]);export{v as default};
