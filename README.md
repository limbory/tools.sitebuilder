# blog-site
> 个人博客新站点

**參考文献**

* [写一份gulp常用配置文件，构建前端工作流 - 梦空间- 博客频道 - CSDN.NET](http://blog.csdn.net/qq_15096707/article/details/54293203)
* [Jekyll • 简单的博客、静态网站工具](http://jekyll.com.cn/)
* [Jekyll & Liquid Cheatsheet](https://gist.github.com/smutnyleszek/9803727)
* [认识与入门 Markdown - 少数派 - 高品质数字消费指南](https://sspai.com/post/25137)
* [Markdown Live Preview](http://markdownlivepreview.com/)
* [HTML2Jade - HTML to Jade Online Realtime Converter](http://www.html2jade.org/)
* [gulp.js - 基于流的自动化构建工具。 | gulp.js 中文网](http://www.gulpjs.com.cn/)
* [npm packages search](https://www.npmjs.com/)
* [Browsersync - Time-saving synchronised browser testing](https://browsersync.io/)

***

* 开发环境
```
nodejs 6.2.0
ruby 2.3.1
```
* 环境安装
```
npm install gulp -g
npm install webpack -g
npm install -g cnpm --registry=https://registry.npm.taobao.org
npm install
gem install jekyll
gem install jekyll-paginate
```
* 自定义命令行
```
npm run j:init
npm run j:server
npm run j:watch
gulp j:init
gulp j:watch
jekyll build --watch
```