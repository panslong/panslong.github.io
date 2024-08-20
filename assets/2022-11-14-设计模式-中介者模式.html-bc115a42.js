import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as e}from"./app-de394487.js";const p="/assets/image-20200214110924010-22d934b3.png",t="/assets/中介者模式-ef54e785.png",c={},o=e('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>一般来说，同事类之间的关系是比较复杂的，多个同事类之间互相关联时，他们之间的关系会呈现为复杂的网状结构，这是一种过度耦合的架构，即不利于类的复用，也不稳定。例如在下左图中，有六个同事类对象，假如对象1发生变化，那么将会有4个对象受到影响。如果对象2发生变化，那么将会有5个对象受到影响。也就是说，同事类之间直接关联的设计是不好的。</p><p>如果引入中介者模式，那么同事类之间的关系将变为星型结构，从下右图中可以看到，任何一个类的变动，只会影响的类本身，以及中介者，这样就减小了系统的耦合。一个好的设计，必定不会把所有的对象关系处理逻辑封装在本类中，而是使用一个专门的类来管理那些不属于自己的行为。</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>定义：</strong></p><p>又叫调停模式，定义一个中介角色来封装一系列对象之间的交互，使原有对象之间的耦合松散，且可以独立地改变它们之间的交互。</p><h2 id="结构" tabindex="-1"><a class="header-anchor" href="#结构" aria-hidden="true">#</a> 结构</h2><p>中介者模式包含以下主要角色：</p><ul><li><p>抽象中介者（Mediator）角色：它是中介者的接口，提供了同事对象注册与转发同事对象信息的抽象方法。</p></li><li><p>具体中介者（ConcreteMediator）角色：实现中介者接口，定义一个 List 来管理同事对象，协调各个同事角色之间的交互关系，因此它依赖于同事角色。</p></li><li><p>抽象同事类（Colleague）角色：定义同事类的接口，保存中介者对象，提供同事对象交互的抽象方法，实现所有相互影响的同事类的公共功能。</p></li><li><p>具体同事类（Concrete Colleague）角色：是抽象同事类的实现者，当需要与其他同事对象交互时，由中介者对象负责后续的交互。</p></li></ul><h2 id="案例实现" tabindex="-1"><a class="header-anchor" href="#案例实现" aria-hidden="true">#</a> 案例实现</h2><p>【例】租房</p><p>现在租房基本都是通过房屋中介，房主将房屋托管给房屋中介，而租房者从房屋中介获取房屋信息。房屋中介充当租房者与房屋所有者之间的中介者。</p><p>类图如下：</p><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//抽象中介者</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Mediator</span> <span class="token punctuation">{</span>
    <span class="token comment">//申明一个联络方法</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">constact</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">,</span><span class="token class-name">Person</span> person<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//抽象同事类</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token class-name">Mediator</span> mediator<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token class-name">Mediator</span> mediator<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>mediator <span class="token operator">=</span> mediator<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//具体同事类 房屋拥有者</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HouseOwner</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">HouseOwner</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Mediator</span> mediator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> mediator<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//与中介者联系</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">constact</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">{</span>
        mediator<span class="token punctuation">.</span><span class="token function">constact</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//获取信息</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;房主&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span><span class="token string">&quot;获取到的信息：&quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//具体同事类 承租人</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Tenant</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Tenant</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Mediator</span> mediator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> mediator<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//与中介者联系</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">constact</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">{</span>
        mediator<span class="token punctuation">.</span><span class="token function">constact</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//获取信息</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;租房者&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span><span class="token string">&quot;获取到的信息：&quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//中介机构</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MediatorStructure</span> <span class="token keyword">extends</span> <span class="token class-name">Mediator</span> <span class="token punctuation">{</span>
    <span class="token comment">//首先中介结构必须知道所有房主和租房者的信息</span>
    <span class="token keyword">private</span> <span class="token class-name">HouseOwner</span> houseOwner<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Tenant</span> tenant<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">HouseOwner</span> <span class="token function">getHouseOwner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> houseOwner<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setHouseOwner</span><span class="token punctuation">(</span><span class="token class-name">HouseOwner</span> houseOwner<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>houseOwner <span class="token operator">=</span> houseOwner<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Tenant</span> <span class="token function">getTenant</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> tenant<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setTenant</span><span class="token punctuation">(</span><span class="token class-name">Tenant</span> tenant<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tenant <span class="token operator">=</span> tenant<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">constact</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">,</span> <span class="token class-name">Person</span> person<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>person <span class="token operator">==</span> houseOwner<span class="token punctuation">)</span> <span class="token punctuation">{</span>          <span class="token comment">//如果是房主，则租房者获得信息</span>
            tenant<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>       <span class="token comment">//反正则是房主获得信息</span>
            houseOwner<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//测试类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//一个房主、一个租房者、一个中介机构</span>
        <span class="token class-name">MediatorStructure</span> mediator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MediatorStructure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//房主和租房者只需要知道中介机构即可</span>
        <span class="token class-name">HouseOwner</span> houseOwner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HouseOwner</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span> mediator<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Tenant</span> tenant <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Tenant</span><span class="token punctuation">(</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span> mediator<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//中介结构要知道房主和租房者</span>
        mediator<span class="token punctuation">.</span><span class="token function">setHouseOwner</span><span class="token punctuation">(</span>houseOwner<span class="token punctuation">)</span><span class="token punctuation">;</span>
        mediator<span class="token punctuation">.</span><span class="token function">setTenant</span><span class="token punctuation">(</span>tenant<span class="token punctuation">)</span><span class="token punctuation">;</span>

        tenant<span class="token punctuation">.</span><span class="token function">constact</span><span class="token punctuation">(</span><span class="token string">&quot;需要租三室的房子&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        houseOwner<span class="token punctuation">.</span><span class="token function">constact</span><span class="token punctuation">(</span><span class="token string">&quot;我这有三室的房子，你需要租吗？&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h2><p><strong>1，优点：</strong></p><ul><li><p>松散耦合</p><p>中介者模式通过把多个同事对象之间的交互封装到中介者对象里面，从而使得同事对象之间松散耦合，基本上可以做到互补依赖。这样一来，同事对象就可以独立地变化和复用，而不再像以前那样“牵一处而动全身”了。</p></li><li><p>集中控制交互</p><p>多个同事对象的交互，被封装在中介者对象里面集中管理，使得这些交互行为发生变化的时候，只需要修改中介者对象就可以了，当然如果是已经做好的系统，那么就扩展中介者对象，而各个同事类不需要做修改。</p></li><li><p>一对多关联转变为一对一的关联</p><p>没有使用中介者模式的时候，同事对象之间的关系通常是一对多的，引入中介者对象以后，中介者对象和同事对象的关系通常变成双向的一对一，这会让对象的关系更容易理解和实现。</p></li></ul><p><strong>2，缺点：</strong></p><p>当同事类太多时，中介者的职责将很大，它会变得复杂而庞大，以至于系统难以维护。</p><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h2><ul><li>系统中对象之间存在复杂的引用关系，系统结构混乱且难以理解。</li><li>当想创建一个运行于多个类之间的对象，又不想生成新的子类时。</li></ul>`,23),l=[o];function i(u,k){return s(),a("div",null,l)}const m=n(c,[["render",i],["__file","2022-11-14-设计模式-中介者模式.html.vue"]]);export{m as default};
