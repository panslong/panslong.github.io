---

title: nginx部署dist包
icon: article
date: 2023-01-15
category: 杂记
tag:
  - nginx
---



## 第一步：下载压缩包

在这里可以去nginx官网下载->[点我下载nginx](http://nginx.org/en/download.html)
也可以直接使用wget命令下载，指令如下所示（请根据自己的需求进行下载）

```bash
wget -c https://nginx.org/download/nginx-1.20.1.tar.gz
```

我一般是把压缩包下载到/usr/local目录下。

## 第二步：配置nginx安装所需的环境

```bash
yum -y install gcc gcc-c++ autoconf automake make
```

```bash
yum -y install zlib zlib-devel openssl openssl-devel pcre pcre-devel
```

## 第三步：解压nginx压缩包并安装

将压缩包进行解压

```bash
tar -zxvf nginx-1.20.1.tar.gz
```

解压之后，进入解压文件夹，即cd nginx-1.20.1
然后进行配置，推荐使用默认配置，直接./configure就好了

## 第四步：编译安装nginx

首先在当前目录（/usr/local/nginx-1.20.1）进行编译。输入make即可

```bash
make
```

然后回车，如果编译出错，请检查是否前面的环境安装都没有问题。
编译成功之后，就可以安装了，输入以下指令：

```bash
make install
```

ok，安装成功。
这时候返回上一级目录，就会发现多了nginx目录，接下来，启动nginx。

## 第五步：启动nginx

进入/usr/local/nginx/sbin目录

```bash
./nginx -t #检查配置文件是否正确无误，成功提示如下：
```

```bash
nginx: the configuration file /usr/local/nginx/conf/nginx.conf syntax is ok
nginx: configuration file /usr/local/nginx/conf/nginx.conf test is successful
```

输入./nginx即可启动nginx

```bash
./nginx
```

关闭nginx

```bash
./nginx -s quit  或者 ./nginx -s stop
```

重启nginx

```
./nginx -s reload
```

查看nginx进程

```bash
ps aux|grep nginx
```

设置nginx开机启动，只需在rc.local增加启动代码即可。

```bash
vim /etc/rc.local
```

然后在底部增加  /usr/local/nginx/sbin/nginx

## 第六步：复制dist包到指定目录

把dis文件夹复制到 /usr/local/nginx/html目录下

## 第七步：修改nginx配置文件

进入/usr/local/nginx/conf

```bash
vim nginx.conf
```

```shell
 server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   /usr/local/nginx/html/dist;
            index  index.html index.htm;
            try_files $uri $uri/ /index.html;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }

```



保存配置文件后，需要重启linux

```
./nginx -s reload
```

打开浏览器，输入服务器上对应的ip地址和端口即可看见页面