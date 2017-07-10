# node-gulp前端自动化构建工具

###  环境依赖
```
 nodejs 6.2.0
 npm 3.8.9

 ruby 2.4.1p111
 gem 2.6.11

 gulp 3.9.1
 webpack 3.4.1

 git bash 2.12.0
```
### 环境安装指令
```
 npm install
 npm install gulp -g
 npm install webpack -g
 npm install -g cnpm --registry=https://registry.npm.taobao.org

 gem sources --add https://gems.ruby-china.org/ --remove https://rubygems.org/
 gem sources -l # 确保只有 gems.ruby-china.org
```
### 自定义指令
```
 gulp x:clean # 清除构建文件
 gulp x:html  # 构建html
 gulp x:css   # 构建css
 gulp x:js    # 构建js
 gulp x:init  # 快速构建
 gulp x:watch # 打开jekyll服务，监视变动
```
### 构建文档结构
```
 |- cfg/           # node组件配置文件
 |- tasks/         # node组件构建文件
 |- client/        # 开发代码区域
 |  |- views/      # html源码
 |  |- styl/       # css源码
 |  |  |- assets/  # 静态样式
 |  |  |- commons/ # 自定义样式组件
 |  |- js/         # js源码
 |  |  |- commons/ # 自定义脚本组件
 |- public/        # 服务端文件
 |  |- assets/     # 静态资源目录
 |  |- dist/       # 构建资源目录
 |- xxx.sh         # shell脚本
 |- gulpfile.js    # gulp入口文件
```
### 参考文档

* [写一份gulp常用配置文件，构建前端工作流 - 梦空间- 博客频道 - CSDN.NET](http://blog.csdn.net/qq_15096707/article/details/54293203)
* [Jekyll • 简单的博客、静态网站工具](http://jekyll.com.cn/)
* [Jekyll & Liquid Cheatsheet](https://gist.github.com/smutnyleszek/9803727)
* [认识与入门 Markdown - 少数派 - 高品质数字消费指南](https://sspai.com/post/25137)
* [Markdown Live Preview](http://markdownlivepreview.com/)
* [HTML2Jade - HTML to Jade Online Realtime Converter](http://www.html2jade.org/)
* [gulp.js - 基于流的自动化构建工具。 | gulp.js 中文网](http://www.gulpjs.com.cn/)
* [npm packages search](https://www.npmjs.com/)
* [Browsersync - Time-saving synchronised browser testing](https://browsersync.io/)

<div style="height: 100px;"></div>