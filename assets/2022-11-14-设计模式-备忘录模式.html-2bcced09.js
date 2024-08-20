import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as t}from"./app-de394487.js";const p="/assets/白箱备忘录模式-90b62dfe.png",e="/assets/黑箱备忘录模式-4ae16ee5.png",o={},c=t('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>备忘录模式提供了一种状态恢复的实现机制，使得用户可以方便地回到一个特定的历史步骤，当新的状态无效或者存在问题时，可以使用暂时存储起来的备忘录将状态复原，很多软件都提供了撤销（Undo）操作，如 Word、记事本、Photoshop、IDEA等软件在编辑时按 Ctrl+Z 组合键时能撤销当前操作，使文档恢复到之前的状态；还有在 浏览器 中的后退键、数据库事务管理中的回滚操作、玩游戏时的中间结果存档功能、数据库与操作系统的备份操作、棋类游戏中的悔棋功能等都属于这类。</p><p>定义：</p><p>又叫快照模式，在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态，以便以后当需要时能将该对象恢复到原先保存的状态。</p><h2 id="结构" tabindex="-1"><a class="header-anchor" href="#结构" aria-hidden="true">#</a> 结构</h2><p>备忘录模式的主要角色如下：</p><ul><li>发起人（Originator）角色：记录当前时刻的内部状态信息，提供创建备忘录和恢复备忘录数据的功能，实现其他业务功能，它可以访问备忘录里的所有信息。</li><li>备忘录（Memento）角色：负责存储发起人的内部状态，在需要的时候提供这些内部状态给发起人。</li><li>管理者（Caretaker）角色：对备忘录进行管理，提供保存与获取备忘录的功能，但其不能对备忘录的内容进行访问与修改。</li></ul><blockquote><p>备忘录有两个等效的接口：</p><ul><li><strong>窄接口</strong>：管理者(Caretaker)对象（和其他发起人对象之外的任何对象）看到的是备忘录的窄接口(narror Interface)，这个窄接口只允许他把备忘录对象传给其他的对象。</li><li><strong>宽接口</strong>：与管理者看到的窄接口相反，发起人对象可以看到一个宽接口(wide Interface)，这个宽接口允许它读取所有的数据，以便根据这些数据恢复这个发起人对象的内部状态。</li></ul></blockquote><h2 id="案例实现" tabindex="-1"><a class="header-anchor" href="#案例实现" aria-hidden="true">#</a> 案例实现</h2><p>【例】游戏挑战BOSS</p><p>游戏中的某个场景，一游戏角色有生命力、攻击力、防御力等数据，在打Boss前和后一定会不一样的，我们允许玩家如果感觉与Boss决斗的效果不理想可以让游戏恢复到决斗之前的状态。</p><p>要实现上述案例，有两种方式：</p><ul><li>“白箱”备忘录模式</li><li>“黑箱”备忘录模式</li></ul><h3 id="白箱-备忘录模式" tabindex="-1"><a class="header-anchor" href="#白箱-备忘录模式" aria-hidden="true">#</a> “白箱”备忘录模式</h3><p>备忘录角色对任何对象都提供一个接口，即宽接口，备忘录角色的内部所存储的状态就对所有对象公开。类图如下：</p><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//游戏角色类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GameRole</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> vit<span class="token punctuation">;</span> <span class="token comment">//生命力</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> atk<span class="token punctuation">;</span> <span class="token comment">//攻击力</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> def<span class="token punctuation">;</span> <span class="token comment">//防御力</span>

    <span class="token comment">//初始化状态</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>vit <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>atk <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>def <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//战斗</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>vit <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>atk <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>def <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//保存角色状态</span>
    <span class="token keyword">public</span> <span class="token class-name">RoleStateMemento</span> <span class="token function">saveState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RoleStateMemento</span><span class="token punctuation">(</span>vit<span class="token punctuation">,</span> atk<span class="token punctuation">,</span> def<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//回复角色状态</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">recoverState</span><span class="token punctuation">(</span><span class="token class-name">RoleStateMemento</span> roleStateMemento<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>vit <span class="token operator">=</span> roleStateMemento<span class="token punctuation">.</span><span class="token function">getVit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>atk <span class="token operator">=</span> roleStateMemento<span class="token punctuation">.</span><span class="token function">getAtk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>def <span class="token operator">=</span> roleStateMemento<span class="token punctuation">.</span><span class="token function">getDef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">stateDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;角色生命力：&quot;</span> <span class="token operator">+</span> vit<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;角色攻击力：&quot;</span> <span class="token operator">+</span> atk<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;角色防御力：&quot;</span> <span class="token operator">+</span> def<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getVit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> vit<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setVit</span><span class="token punctuation">(</span><span class="token keyword">int</span> vit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>vit <span class="token operator">=</span> vit<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAtk</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> atk<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAtk</span><span class="token punctuation">(</span><span class="token keyword">int</span> atk<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>atk <span class="token operator">=</span> atk<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getDef</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> def<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDef</span><span class="token punctuation">(</span><span class="token keyword">int</span> def<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>def <span class="token operator">=</span> def<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//游戏状态存储类(备忘录类)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RoleStateMemento</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> vit<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> atk<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> def<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">RoleStateMemento</span><span class="token punctuation">(</span><span class="token keyword">int</span> vit<span class="token punctuation">,</span> <span class="token keyword">int</span> atk<span class="token punctuation">,</span> <span class="token keyword">int</span> def<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>vit <span class="token operator">=</span> vit<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>atk <span class="token operator">=</span> atk<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>def <span class="token operator">=</span> def<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getVit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> vit<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setVit</span><span class="token punctuation">(</span><span class="token keyword">int</span> vit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>vit <span class="token operator">=</span> vit<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAtk</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> atk<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAtk</span><span class="token punctuation">(</span><span class="token keyword">int</span> atk<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>atk <span class="token operator">=</span> atk<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getDef</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> def<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDef</span><span class="token punctuation">(</span><span class="token keyword">int</span> def<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>def <span class="token operator">=</span> def<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//角色状态管理者类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RoleStateCaretaker</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">RoleStateMemento</span> roleStateMemento<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">RoleStateMemento</span> <span class="token function">getRoleStateMemento</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> roleStateMemento<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setRoleStateMemento</span><span class="token punctuation">(</span><span class="token class-name">RoleStateMemento</span> roleStateMemento<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>roleStateMemento <span class="token operator">=</span> roleStateMemento<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//测试类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;------------大战Boss前------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//大战Boss前</span>
        <span class="token class-name">GameRole</span> gameRole <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GameRole</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gameRole<span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gameRole<span class="token punctuation">.</span><span class="token function">stateDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//保存进度</span>
        <span class="token class-name">RoleStateCaretaker</span> roleStateCaretaker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RoleStateCaretaker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        roleStateCaretaker<span class="token punctuation">.</span><span class="token function">setRoleStateMemento</span><span class="token punctuation">(</span>gameRole<span class="token punctuation">.</span><span class="token function">saveState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;------------大战Boss后------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//大战Boss时，损耗严重</span>
        gameRole<span class="token punctuation">.</span><span class="token function">fight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gameRole<span class="token punctuation">.</span><span class="token function">stateDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;------------恢复之前状态------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//恢复之前状态</span>
        gameRole<span class="token punctuation">.</span><span class="token function">recoverState</span><span class="token punctuation">(</span>roleStateCaretaker<span class="token punctuation">.</span><span class="token function">getRoleStateMemento</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gameRole<span class="token punctuation">.</span><span class="token function">stateDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>分析：白箱备忘录模式是破坏封装性的。但是通过程序员自律，同样可以在一定程度上实现模式的大部分用意。</p></blockquote><h3 id="黑箱-备忘录模式" tabindex="-1"><a class="header-anchor" href="#黑箱-备忘录模式" aria-hidden="true">#</a> “黑箱”备忘录模式</h3><p>备忘录角色对发起人对象提供一个宽接口，而为其他对象提供一个窄接口。在Java语言中，实现双重接口的办法就是将<strong>备忘录类</strong>设计成<strong>发起人类</strong>的内部成员类。</p><p>将 <code>RoleStateMemento</code> 设为 <code>GameRole</code> 的内部类，从而将 <code>RoleStateMemento</code> 对象封装在 <code>GameRole</code> 里面；在外面提供一个标识接口 <code>Memento</code> 给 <code>RoleStateCaretaker</code> 及其他对象使用。这样 <code>GameRole</code> 类看到的是 <code>RoleStateMemento</code> 所有的接口，而<code>RoleStateCaretaker</code> 及其他对象看到的仅仅是标识接口 <code>Memento</code> 所暴露出来的接口，从而维护了封装型。类图如下：</p><figure><img src="`+e+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>代码如下：</p><p>窄接口<code>Memento</code>，这是一个标识接口，因此没有定义出任何的方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Memento</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>定义发起人类 <code>GameRole</code>，并在内部定义备忘录内部类 <code>RoleStateMemento</code>（该内部类设置为私有的）</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">/</span>游戏角色类
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GameRole</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> vit<span class="token punctuation">;</span> <span class="token comment">//生命力</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> atk<span class="token punctuation">;</span> <span class="token comment">//攻击力</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> def<span class="token punctuation">;</span> <span class="token comment">//防御力</span>

    <span class="token comment">//初始化状态</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>vit <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>atk <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>def <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//战斗</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>vit <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>atk <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>def <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//保存角色状态</span>
    <span class="token keyword">public</span> <span class="token class-name">Memento</span> <span class="token function">saveState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RoleStateMemento</span><span class="token punctuation">(</span>vit<span class="token punctuation">,</span> atk<span class="token punctuation">,</span> def<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//回复角色状态</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">recoverState</span><span class="token punctuation">(</span><span class="token class-name">Memento</span> memento<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">RoleStateMemento</span> roleStateMemento <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">RoleStateMemento</span><span class="token punctuation">)</span> memento<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>vit <span class="token operator">=</span> roleStateMemento<span class="token punctuation">.</span><span class="token function">getVit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>atk <span class="token operator">=</span> roleStateMemento<span class="token punctuation">.</span><span class="token function">getAtk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>def <span class="token operator">=</span> roleStateMemento<span class="token punctuation">.</span><span class="token function">getDef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">stateDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;角色生命力：&quot;</span> <span class="token operator">+</span> vit<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;角色攻击力：&quot;</span> <span class="token operator">+</span> atk<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;角色防御力：&quot;</span> <span class="token operator">+</span> def<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getVit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> vit<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setVit</span><span class="token punctuation">(</span><span class="token keyword">int</span> vit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>vit <span class="token operator">=</span> vit<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAtk</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> atk<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAtk</span><span class="token punctuation">(</span><span class="token keyword">int</span> atk<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>atk <span class="token operator">=</span> atk<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getDef</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> def<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDef</span><span class="token punctuation">(</span><span class="token keyword">int</span> def<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>def <span class="token operator">=</span> def<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">class</span> <span class="token class-name">RoleStateMemento</span> <span class="token keyword">implements</span> <span class="token class-name">Memento</span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token keyword">int</span> vit<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token keyword">int</span> atk<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token keyword">int</span> def<span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token class-name">RoleStateMemento</span><span class="token punctuation">(</span><span class="token keyword">int</span> vit<span class="token punctuation">,</span> <span class="token keyword">int</span> atk<span class="token punctuation">,</span> <span class="token keyword">int</span> def<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>vit <span class="token operator">=</span> vit<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>atk <span class="token operator">=</span> atk<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>def <span class="token operator">=</span> def<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getVit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> vit<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setVit</span><span class="token punctuation">(</span><span class="token keyword">int</span> vit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>vit <span class="token operator">=</span> vit<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAtk</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> atk<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAtk</span><span class="token punctuation">(</span><span class="token keyword">int</span> atk<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>atk <span class="token operator">=</span> atk<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getDef</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> def<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDef</span><span class="token punctuation">(</span><span class="token keyword">int</span> def<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>def <span class="token operator">=</span> def<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>负责人角色类 <code>RoleStateCaretaker</code> 能够得到的备忘录对象是以 <code>Memento</code> 为接口的，由于这个接口仅仅是一个标识接口，因此负责人角色不可能改变这个备忘录对象的内容</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//角色状态管理者类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RoleStateCaretaker</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Memento</span> memento<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Memento</span> <span class="token function">getMemento</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> memento<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setMemento</span><span class="token punctuation">(</span><span class="token class-name">Memento</span> memento<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>memento <span class="token operator">=</span> memento<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端测试类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;------------大战Boss前------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//大战Boss前</span>
        <span class="token class-name">GameRole</span> gameRole <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GameRole</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gameRole<span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gameRole<span class="token punctuation">.</span><span class="token function">stateDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//保存进度</span>
        <span class="token class-name">RoleStateCaretaker</span> roleStateCaretaker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RoleStateCaretaker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        roleStateCaretaker<span class="token punctuation">.</span><span class="token function">setMemento</span><span class="token punctuation">(</span>gameRole<span class="token punctuation">.</span><span class="token function">saveState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;------------大战Boss后------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//大战Boss时，损耗严重</span>
        gameRole<span class="token punctuation">.</span><span class="token function">fight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gameRole<span class="token punctuation">.</span><span class="token function">stateDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;------------恢复之前状态------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//恢复之前状态</span>
        gameRole<span class="token punctuation">.</span><span class="token function">recoverState</span><span class="token punctuation">(</span>roleStateCaretaker<span class="token punctuation">.</span><span class="token function">getMemento</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gameRole<span class="token punctuation">.</span><span class="token function">stateDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h2><p><strong>1，优点：</strong></p><ul><li>提供了一种可以恢复状态的机制。当用户需要时能够比较方便地将数据恢复到某个历史的状态。</li><li>实现了内部状态的封装。除了创建它的发起人之外，其他对象都不能够访问这些状态信息。</li><li>简化了发起人类。发起人不需要管理和保存其内部状态的各个备份，所有状态信息都保存在备忘录中，并由管理者进行管理，这符合单一职责原则。</li></ul><p><strong>2，缺点：</strong></p><ul><li>资源消耗大。如果要保存的内部状态信息过多或者特别频繁，将会占用比较大的内存资源。</li></ul><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h2><ul><li><p>需要保存与恢复数据的场景，如玩游戏时的中间结果的存档功能。</p></li><li><p>需要提供一个可回滚操作的场景，如 Word、记事本、Photoshop，idea等软件在编辑时按 Ctrl+Z 组合键，还有数据库中事务操作。</p></li></ul>`,39),i=[c];function l(u,k){return s(),a("div",null,i)}const v=n(o,[["render",l],["__file","2022-11-14-设计模式-备忘录模式.html.vue"]]);export{v as default};
