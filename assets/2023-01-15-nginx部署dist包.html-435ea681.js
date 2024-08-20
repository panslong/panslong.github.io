import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c,e as n,f as s,b as d,d as t}from"./app-de394487.js";const r={},o=n("h2",{id:"第一步-下载压缩包",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#第一步-下载压缩包","aria-hidden":"true"},"#"),s(" 第一步：下载压缩包")],-1),p={href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"},u=n("br",null,null,-1),m=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-c</span> https://nginx.org/download/nginx-1.20.1.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我一般是把压缩包下载到/usr/local目录下。</p><h2 id="第二步-配置nginx安装所需的环境" tabindex="-1"><a class="header-anchor" href="#第二步-配置nginx安装所需的环境" aria-hidden="true">#</a> 第二步：配置nginx安装所需的环境</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc gcc-c++ autoconf automake <span class="token function">make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> zlib zlib-devel openssl openssl-devel pcre pcre-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="第三步-解压nginx压缩包并安装" tabindex="-1"><a class="header-anchor" href="#第三步-解压nginx压缩包并安装" aria-hidden="true">#</a> 第三步：解压nginx压缩包并安装</h2><p>将压缩包进行解压</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> nginx-1.20.1.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解压之后，进入解压文件夹，即cd nginx-1.20.1<br> 然后进行配置，推荐使用默认配置，直接./configure就好了</p><h2 id="第四步-编译安装nginx" tabindex="-1"><a class="header-anchor" href="#第四步-编译安装nginx" aria-hidden="true">#</a> 第四步：编译安装nginx</h2><p>首先在当前目录（/usr/local/nginx-1.20.1）进行编译。输入make即可</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后回车，如果编译出错，请检查是否前面的环境安装都没有问题。<br> 编译成功之后，就可以安装了，输入以下指令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ok，安装成功。<br> 这时候返回上一级目录，就会发现多了nginx目录，接下来，启动nginx。</p><h2 id="第五步-启动nginx" tabindex="-1"><a class="header-anchor" href="#第五步-启动nginx" aria-hidden="true">#</a> 第五步：启动nginx</h2><p>进入/usr/local/nginx/sbin目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./nginx <span class="token parameter variable">-t</span> <span class="token comment">#检查配置文件是否正确无误，成功提示如下：</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx: the configuration <span class="token function">file</span> /usr/local/nginx/conf/nginx.conf syntax is ok
nginx: configuration <span class="token function">file</span> /usr/local/nginx/conf/nginx.conf <span class="token builtin class-name">test</span> is successful
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输入./nginx即可启动nginx</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>关闭nginx</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./nginx <span class="token parameter variable">-s</span> quit  或者 ./nginx <span class="token parameter variable">-s</span> stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重启nginx</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看nginx进程</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> aux<span class="token operator">|</span><span class="token function">grep</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置nginx开机启动，只需在rc.local增加启动代码即可。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/rc.local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后在底部增加 /usr/local/nginx/sbin/nginx</p><h2 id="第六步-复制dist包到指定目录" tabindex="-1"><a class="header-anchor" href="#第六步-复制dist包到指定目录" aria-hidden="true">#</a> 第六步：复制dist包到指定目录</h2><p>把dis文件夹复制到 /usr/local/nginx/html目录下</p><h2 id="第七步-修改nginx配置文件" tabindex="-1"><a class="header-anchor" href="#第七步-修改nginx配置文件" aria-hidden="true">#</a> 第七步：修改nginx配置文件</h2><p>进入/usr/local/nginx/conf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

        <span class="token comment">#charset koi8-r;</span>

        <span class="token comment">#access_log  logs/host.access.log  main;</span>

        location / <span class="token punctuation">{</span>
            root   /usr/local/nginx/html/dist<span class="token punctuation">;</span>
            index  index.html index.htm<span class="token punctuation">;</span>
            try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#error_page  404              /404.html;</span>

        <span class="token comment"># redirect server error pages to the static page /50x.html</span>
        <span class="token comment">#</span>
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span>
        <span class="token comment">#</span>
        <span class="token comment">#location ~ \\.php$ {</span>
        <span class="token comment">#    proxy_pass   http://127.0.0.1;</span>
        <span class="token comment">#}</span>

        <span class="token comment"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span>
        <span class="token comment">#</span>
        <span class="token comment">#location ~ \\.php$ {</span>
        <span class="token comment">#    root           html;</span>
        <span class="token comment">#    fastcgi_pass   127.0.0.1:9000;</span>
        <span class="token comment">#    fastcgi_index  index.php;</span>
        <span class="token comment">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span>
        <span class="token comment">#    include        fastcgi_params;</span>
        <span class="token comment">#}</span>

        <span class="token comment"># deny access to .htaccess files, if Apache&#39;s document root</span>
        <span class="token comment"># concurs with nginx&#39;s one</span>
        <span class="token comment">#</span>
        <span class="token comment">#location ~ /\\.ht {</span>
        <span class="token comment">#    deny  all;</span>
        <span class="token comment">#}</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存配置文件后，需要重启linux</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>打开浏览器，输入服务器上对应的ip地址和端口即可看见页面</p>`,39);function v(b,g){const a=i("ExternalLinkIcon");return l(),c("div",null,[o,n("p",null,[s("在这里可以去nginx官网下载->"),n("a",p,[s("点我下载nginx"),d(a)]),u,s(" 也可以直接使用wget命令下载，指令如下所示（请根据自己的需求进行下载）")]),m])}const k=e(r,[["render",v],["__file","2023-01-15-nginx部署dist包.html.vue"]]);export{k as default};
